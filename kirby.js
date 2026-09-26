// Bomb Kirby in the footer: click (or Enter/Space) and he blows up
(function () {
    var k = document.getElementById('kirby');
    if (!k) return;
    var blast = k.querySelector('.kirby-boom');
    function boom() {
        if (k.classList.contains('boom')) return;
        k.classList.add('boom');
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
