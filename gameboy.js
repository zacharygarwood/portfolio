// ↑↑↓↓←→←→BA plays the Game Boy boot screen
(function () {
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var CODE = 'ArrowUp ArrowUp ArrowDown ArrowDown ArrowLeft ArrowRight ArrowLeft ArrowRight b a';
    var keys = [];
    var running = false;

    document.addEventListener('keydown', function (e) {
        keys.push(e.key.length === 1 ? e.key.toLowerCase() : e.key);
        keys = keys.slice(-10);
        if (!running && keys.join(' ') === CODE) boot();
    });

    // the name drawn tiny and thresholded to 1-bit, then scaled up with hard pixels
    function logo() {
        var text = 'zachary garwood®';
        var c = document.createElement('canvas');
        var ctx = c.getContext('2d');
        var font = '600 11px Poppins, sans-serif';
        ctx.font = font;
        c.width = Math.ceil(ctx.measureText(text).width) + 2;
        c.height = 14;
        ctx.font = font;
        ctx.textBaseline = 'middle';
        ctx.fillText(text, 1, 7);
        var img = ctx.getImageData(0, 0, c.width, c.height);
        var p = img.data;
        for (var i = 0; i < p.length; i += 4) {
            var on = p[i + 3] > 110;
            p[i] = 15; p[i + 1] = 56; p[i + 2] = 15;
            p[i + 3] = on ? 255 : 0;
        }
        ctx.putImageData(img, 0, 0);
        var scale = Math.max(2, Math.min(8, Math.floor(window.innerWidth * 0.7 / c.width)));
        c.style.width = c.width * scale + 'px';
        c.className = 'gb-logo';
        return c;
    }

    // the two-note "ba-ding" on a square wave
    function ding(audio) {
        var t = audio.currentTime;
        [[1046.5, 0, 0.08], [2093, 0.08, 1.1]].forEach(function (n) {
            var osc = audio.createOscillator();
            var gain = audio.createGain();
            osc.type = 'square';
            osc.frequency.value = n[0];
            gain.gain.setValueAtTime(0.06, t + n[1]);
            gain.gain.exponentialRampToValueAtTime(0.0001, t + n[1] + n[2]);
            osc.connect(gain).connect(audio.destination);
            osc.start(t + n[1]);
            osc.stop(t + n[1] + n[2]);
        });
    }

    function boot() {
        running = true;
        var AudioCtx = window.AudioContext || window.webkitAudioContext;
        var audio = AudioCtx ? new AudioCtx() : null;   // made inside the keypress so it may play
        var screen = document.createElement('div');
        screen.className = 'gb-boot';
        screen.setAttribute('aria-hidden', 'true');

        document.fonts.load('600 11px Poppins').then(function () {
            var mark = logo();
            screen.appendChild(mark);
            document.body.appendChild(screen);

            function done() {
                if (!screen.isConnected) return;
                screen.classList.add('off');
                setTimeout(function () {
                    screen.remove();
                    if (audio) audio.close();
                    running = false;
                }, 600);
            }
            screen.addEventListener('click', done);
            document.addEventListener('keydown', function esc(e) {
                if (e.key !== 'Escape') return;
                document.removeEventListener('keydown', esc);
                done();
            });

            var fall = reduceMotion.matches ? null : mark.animate([
                { transform: 'translateY(-50vh)' },
                { transform: 'translateY(0)' }
            ], { duration: 2400, easing: 'steps(48)' });
            function chime() {
                if (!screen.isConnected) return;
                if (audio) ding(audio);
                setTimeout(done, 1600);
            }
            if (fall) fall.onfinish = chime; else chime();
        });
    }
})();
