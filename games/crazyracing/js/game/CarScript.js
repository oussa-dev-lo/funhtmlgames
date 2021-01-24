var touch, __extends = this && this.__extends || function() {
    var t = function(e, n) {
        return (t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(e, n)
    };
    return function(e, n) {
        function o() {
            this.constructor = e
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
    }
}();
! function(t) {
    var e = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.skinIndex = 0, t.carIndex = 0, t.carSkinIndex = 0, t.ballSpeed = 0, t.destPosX = 0, t.accelerate = 0, t.isExceed = !0, t.isDead = !1, t.gameOver = !1, t.isAI = !1, t.v3_wheelAngle = new Laya.Vector3(30, 0, 0), t.ballSpeed = .6 * (20 * Math.random() + 20), t
        }
        return __extends(n, e), n.prototype._load = function(t) {
            this.car = t, this.carWheel1 = t.getChildAt(1), this.carWheel2 = t.getChildAt(2)
        }, n.prototype.getSpeed = function() {
            return this.ballSpeed
        }, n.prototype.getInitSpeed = function() {
            return this.isAI ? 18 : 15
        }, n.prototype.setDestPosX = function(t) {
            this.destPosX = t
        }, n.prototype.getDestPosX = function() {
            return this.destPosX
        }, n.prototype.setIsAI = function(t) {
            this.isAI = t
        }, n.prototype.playerExceedAI = function(t) {
            this.isExceed = t
        }, n.prototype.playSound = function(e) {
            "Box" == e ? t.SoundManager.playSound("res/sounds/gameover.mp3") : t.GameDefine.ACCELERATE_BLOCK == e && t.SoundManager.playSound("res/sounds/speedup.mp3")
        }, n
    }(Laya.Script);
    t.CarScript = e
}(touch || (touch = {}));