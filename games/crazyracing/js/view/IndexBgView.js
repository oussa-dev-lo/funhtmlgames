var touch, __extends = this && this.__extends || function() {
    var t = function(n, o) {
        return (t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, n) {
                t.__proto__ = n
            } || function(t, n) {
                for (var o in n) n.hasOwnProperty(o) && (t[o] = n[o])
            })(n, o)
    };
    return function(n, o) {
        function r() {
            this.constructor = n
        }
        t(n, o), n.prototype = null === o ? Object.create(o) : (r.prototype = o.prototype, new r)
    }
}();
! function(t) {
    var n = function(t) {
        function n(n) {
            var o = t.call(this) || this;
            return o._main = null, o._main = n, o
        }
        return __extends(n, t), n
    }(ui.IndexBgViewUI);
    t.IndexBgView = n
}(touch || (touch = {}));