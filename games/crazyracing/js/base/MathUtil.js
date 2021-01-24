var touch;
! function(t) {
    var n = function() {
        function t() {}
        return t.randomInt = function(t, n) {
            var o = n - t + 1;
            return Math.floor(t + Math.random() * o)
        }, t.randomColor = function() {
            return "#" + Math.ceil(255 * Math.random()).toString(16) + Math.ceil(255 * Math.random()).toString(16) + Math.ceil(255 * Math.random()).toString(16)
        }, t.getColor = function(t, n, o) {
            return "#" + Math.ceil(t).toString(16) + Math.ceil(n).toString(16) + Math.ceil(o).toString(16)
        }, t.randomColorValue = function() {
            return Math.ceil(255 * Math.random())
        }, t.vec4ToHexStr = function(t) {
            for (var n = [255 * t.x, 255 * t.y, 255 * t.z, 255 * t.w], o = "#", r = 0; r < n.length; r++) o += Math.floor(n[r]).toString(16);
            return o
        }, t
    }();
    t.MathUtil = n
}(touch || (touch = {}));