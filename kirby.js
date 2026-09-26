// Bomb Kirby in the footer: click (or Enter/Space) and he blows up
(function () {
    var k = document.getElementById('kirby');
    if (!k) return;
    var blast = k.querySelector('.kirby-boom');

    // chunky 8-bit style blast: stepped noise (each value held for a few
    // samples, like an NES noise channel) plus a falling square thump
    function bang() {
        var AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        var audio = new AudioCtx();
        var t = audio.currentTime;
        var len = Math.floor(audio.sampleRate * 0.5);
        var buf = audio.createBuffer(1, len, audio.sampleRate);
        var data = buf.getChannelData(0);
        var v = 0;
        for (var i = 0; i < len; i++) {
            if (i % 24 === 0) v = Math.random() * 2 - 1;
            data[i] = v;
        }
        var noise = audio.createBufferSource();
        noise.buffer = buf;
        var noiseGain = audio.createGain();
        noiseGain.gain.setValueAtTime(0.07, t);
        noiseGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
        noise.connect(noiseGain).connect(audio.destination);

        var osc = audio.createOscillator();
        osc.type = 'square';
        osc.frequency.setValueAtTime(160, t);
        osc.frequency.exponentialRampToValueAtTime(40, t + 0.25);
        var oscGain = audio.createGain();
        oscGain.gain.setValueAtTime(0.04, t);
        oscGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
        osc.connect(oscGain).connect(audio.destination);

        noise.start(t);
        osc.start(t);
        osc.stop(t + 0.25);
        noise.onended = function () { audio.close(); };
    }

    function boom() {
        if (k.classList.contains('boom')) return;
        k.classList.add('boom');
        bang();
    }
    // when the sprite animation ends he is gone for good; no timers, no
    // network fetch, so it plays identically every single time
    blast.addEventListener('animationend', function () {
        k.classList.add('spent');
    });
    k.addEventListener('click', boom);
    k.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); boom(); }
    });
})();
