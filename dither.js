// 1-bit ordered dither drawn over project thumbnails; CSS fades it out on hover
(function () {
    var INK = [28, 28, 26];        // --text
    var PAPER = [253, 253, 252];   // --bg
    var DOT = 2;                   // css px per dither dot
    var BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];

    function draw(box, canvas, img) {
        var w = Math.max(1, Math.round(box.clientWidth / DOT));
        var h = Math.max(1, Math.round(box.clientHeight / DOT));
        canvas.width = w;
        canvas.height = h;
        var ctx = canvas.getContext('2d', { willReadFrequently: true });

        // same crop as object-fit: cover
        var iw = img.naturalWidth, ih = img.naturalHeight;
        var s = Math.max(w / iw, h / ih);
        var sw = w / s, sh = h / s;
        ctx.drawImage(img, (iw - sw) / 2, (ih - sh) / 2, sw, sh, 0, 0, w, h);

        var data = ctx.getImageData(0, 0, w, h);
        var p = data.data;
        for (var y = 0; y < h; y++) {
            for (var x = 0; x < w; x++) {
                var i = (y * w + x) * 4;
                var lum = (0.299 * p[i] + 0.587 * p[i + 1] + 0.114 * p[i + 2]) / 255;
                var c = lum > (BAYER[(y & 3) * 4 + (x & 3)] + 0.5) / 16 ? PAPER : INK;
                p[i] = c[0];
                p[i + 1] = c[1];
                p[i + 2] = c[2];
                p[i + 3] = 255;
            }
        }
        ctx.putImageData(data, 0, 0);
    }

    function whenLoaded(img, fn) {
        if (img.complete && img.naturalWidth) fn();
        else img.addEventListener('load', fn, { once: true });
    }

    document.querySelectorAll('.dither-image').forEach(function (box) {
        var media = box.querySelector('img, video');
        var img = media;
        if (media.tagName === 'VIDEO') {
            img = new Image();
            img.src = media.poster;
        }

        var canvas = document.createElement('canvas');
        canvas.className = 'dither-overlay';
        canvas.setAttribute('aria-hidden', 'true');
        media.after(canvas);

        whenLoaded(img, function () {
            draw(box, canvas, img);
            if ('ResizeObserver' in window) {
                var lastW = box.clientWidth;
                new ResizeObserver(function () {
                    if (box.clientWidth === lastW) return;
                    lastW = box.clientWidth;
                    draw(box, canvas, img);
                }).observe(box);
            }
        });
    });

    // touch screens have no hover: project rows clear once they scroll fully into view
    if (window.matchMedia('(hover: none)').matches && 'IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                io.unobserve(entry.target);
                entry.target.classList.add('revealed');
            });
        }, { threshold: 0.9 });
        document.querySelectorAll('.release-row').forEach(function (row) { io.observe(row); });
    }
})();
