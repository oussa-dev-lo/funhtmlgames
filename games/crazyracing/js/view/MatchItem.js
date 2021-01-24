var touch, __extends = this && this.__extends || function() {
    var t = function(i, e) {
        return (t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, i) {
                t.__proto__ = i
            } || function(t, i) {
                for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e])
            })(i, e)
    };
    return function(i, e) {
        function o() {
            this.constructor = i
        }
        t(i, e), i.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
    }
}();
! function(t) {
    var i = function(t) {
        function i() {
            return t.call(this) || this
        }
        return __extends(i, t), i.prototype.destroy = function() {
            Laya.timer.clear(this, this.onOver), t.prototype.destroy.call(this)
        }, i.prototype.setData = function(t, i) {
            Laya.timer.clear(this, this.onOver), this.imgHead.skin = t, 0 == i ? (this.imgHead.visible = !0, this.imgWait.visible = !1) : (this.imgHead.visible = !1, this.imgWait.visible = !0, this.aniWait.play(0, !0), Laya.timer.once(i, this, this.onOver))
        }, i.prototype.onOver = function() {
            this.imgHead.visible = !0, this.imgWait.visible = !1, this.aniWait.stop()
        }, i
    }(ui.MatchItemUI);
    t.MatchItem = i
}(touch || (touch = {}));