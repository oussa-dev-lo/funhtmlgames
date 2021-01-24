var touch, __extends = this && this.__extends || function() {
    var t = function(e, a) {
        return (t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a])
            })(e, a)
    };
    return function(e, a) {
        function o() {
            this.constructor = e
        }
        t(e, a), e.prototype = null === a ? Object.create(a) : (o.prototype = a.prototype, new o)
    }
}();
! function(t) {
    var e = function(e) {
        function a() {
            var t = e.call(this) || this;
            return t._toScale = .9, t._defaultScaleX = -1, t._defaultScaleY = -1, t
        }
        return __extends(a, e), a.prototype.destroy = function() {
            Laya.Tween.clearAll(this), null != this.clickHandler && (this.clickHandler.recover(), this.clickHandler = null), e.prototype.destroy.call(this)
        }, a.prototype.setDefaultScale = function(t, e) {
            this._defaultScaleX = t, this._defaultScaleY = e
        }, a.prototype.onMouse = function(a) {
            e.prototype.onMouse.call(this, a), -1 == this._defaultScaleX && (this._defaultScaleX = this.scaleX, this._defaultScaleY = this.scaleY), Laya.Event.MOUSE_DOWN == a.type ? (t.SoundManager.playSound("res/sounds/press_button.mp3"), Laya.Tween.to(this, {
                scaleX: this._defaultScaleX * this._toScale,
                scaleY: this._defaultScaleX * this._toScale
            }, 50)) : Laya.Event.MOUSE_UP != a.type && Laya.Event.MOUSE_OUT != a.type || Laya.Tween.to(this, {
                scaleX: this._defaultScaleX,
                scaleY: this._defaultScaleX
            }, 50)
        }, a
    }(Laya.Button);
    t.Button = e
}(touch || (touch = {}));