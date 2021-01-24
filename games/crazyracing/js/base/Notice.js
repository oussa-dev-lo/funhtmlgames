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
    var i = function(i) {
        function e() {
            return i.call(this) || this
        }
        return __extends(e, i), e.prototype.destroy = function() {
            i.prototype.destroy.call(this)
        }, e.prototype.clear = function() {}, e.show = function(i) {
            var o = t.Pool.get("Notice", e);
            o.setData(i), o.zOrder = 1e3, Laya.stage.addChild(o)
        }, e.showUnopen = function() {
            e.show("Coming soon")
        }, e.showLoading = function() {}, e.closeLoading = function() {}, e.prototype.setData = function(t) {
            this.tfNotice.text = t, this.tfNotice.width = this.tfNotice.textField.textWidth;
            var i = this.tfNotice.textField.textWidth + 40;
            i = i < 200 ? 200 : i, this.imgBG.width = i, this.x = (Laya.stage.width - this.width) / 2, this.y = (Laya.stage.height - this.height) / 2, this.alpha = 0, Laya.Tween.to(this, {
                alpha: 1,
                y: this.y - 60
            }, 200, null, Laya.Handler.create(this, this.onAppear))
        }, e.prototype.setData1 = function(t) {
            this.tfNotice.text = t, this.tfNotice.width = this.tfNotice.textField.textWidth;
            var i = this.tfNotice.textField.textWidth + 40;
            i = i < 200 ? 200 : i, this.imgBG.width = i, this.x = (Laya.stage.width - this.width) / 2, this.y = (Laya.stage.height - this.height) / 2, this.alpha = 0, Laya.Tween.to(this, {
                alpha: 1,
                y: this.y - 60
            }, 200, null, Laya.Handler.create(this, this.onAppear1))
        }, e.prototype.onAppear = function() {
            Laya.Tween.to(this, {
                y: this.y - 60
            }, 200, null, Laya.Handler.create(this, this.onWaitDisappear), 600)
        }, e.prototype.onAppear1 = function() {}, e.prototype.onWaitDisappear = function() {
            Laya.Tween.to(this, {
                alpha: 0,
                y: this.y - 60
            }, 300, null, Laya.Handler.create(this, this.onDisappear))
        }, e.prototype.onDisappear = function() {
            null != this && (t.Pool.recover("Notice", this), Laya.stage.removeChild(this))
        }, e
    }(ui.NoticeUI);
    t.Notice = i
}(touch || (touch = {}));