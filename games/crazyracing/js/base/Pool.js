var touch;
! function(o) {
    var n = function() {
        function o() {}
        return o.get = function(o, n) {
            return Laya.Pool.getItemByClass(o, n)
        }, o.recover = function(o, n) {
            null != n && (n.clear(), Laya.Pool.recover(o, n))
        }, o.getSysObj = function(o, n) {
            return Laya.Pool.getItemByClass(o, n)
        }, o.recoverSysObj = function(o, n) {
            null != n && Laya.Pool.recover(o, n)
        }, o
    }();
    o.Pool = n
}(touch || (touch = {}));