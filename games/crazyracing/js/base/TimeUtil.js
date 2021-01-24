var touch;
! function(t) {
    var o = function() {
        function t() {}
        return t.format = function(t) {
            return t < 10 ? "0" + t : "" + t
        }, t.getHourMinuteSecond = function(o) {
            var r = Math.floor(o / t.HOUR),
                n = Math.floor(o / t.MINUTE) % 60,
                u = Math.floor(o / t.SECOND) % 60;
            return t.format(r) + ":" + t.format(n) + ":" + t.format(u)
        }, t.SECOND = 1e3, t.MINUTE = 6e4, t.HOUR = 60 * t.MINUTE, t.DAY = 60 * t.MINUTE * 24, t
    }();
    t.TimeUtil = o
}(touch || (touch = {}));