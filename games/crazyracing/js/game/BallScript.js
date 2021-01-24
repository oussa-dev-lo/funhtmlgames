var touch, __extends = this && this.__extends || function() {
    var e = function(t, i) {
        return (e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
            })(t, i)
    };
    return function(t, i) {
        function a() {
            this.constructor = t
        }
        e(t, i), t.prototype = null === i ? Object.create(i) : (a.prototype = i.prototype, new a)
    }
}();
! function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinIndex = 0, e.ballSpeed = 0, e.destPosX = -3, e.accelerate = 0, e.speedTimes = 0, e.ballSpeedMax = 30, e.ballSpeedMaxTemp = 30, e.offHorizontal = 0, e.isExceed = !0, e.isDead = !1, e.isFinish = !1, e.gameOver = !1, e.isAI = !1, e.aiTime = 2, e.aiPos = [-2, -1, 0, 1, 2], e.buffTime = 0, e.debuffTime = 0, e.ball3dObj = null, e.power = 0, e._n2oPlayTime = 0, e._n2oPlayMaxTime = 5, e._n2oIsPlay = !1, e.ani = null, e._main = null, e._CarIndex = 0, e._CarSkinIndex = 0, e.N2oAddsPeed = 0, e.ballSpeed = e.getInitSpeed(), e.ballSpeedMax = 30, e.N2oAddsPeed = 0, e
        }
        return __extends(i, t), i.prototype._load = function(e) {}, i.prototype.setBall = function(e, t) {
            this.ball3dObj = e, this._main = t
        }, i.prototype.onTriggerEnter = function(t) {
            var i = t.owner;
            if (e.GameDefine.ACCELERATE_BLOCK == i.name) {
                if (this.isFinish) return;
                this.isAI || (this.playSound(e.GameDefine.ACCELERATE_BLOCK), this._main.event(e.GameEvent.GAME_N2OEff)), this.addPower()
            } else if ("Box" == i.name) {
                if (this.isFinish) return;
                this.openDeBuff(), this.isAI || (this.gameOver || (this.playSound("Box"), 1 == GameBaseData.modelType && (this.gameOver = !0)), this.gameOver || (this._main.event(e.GameEvent.CAMERA_SHAKE, !0), this._main.event(e.GameEvent.GAME_SpEff))), Laya.timer.callLater(this, function() {
                    i.active = !1
                })
            }
        }, i.prototype.addPower = function() {
            this._n2oIsPlay ? this._n2oPlayTime += .1 : (this.power < 1 && (this.isAI ? -1 != GameBaseData.firstTimes ? this.power += .2 : this.power += .5 : this.power += .2, this.power >= 1 && (this.power = 1, this.N2oAddsPeed = 0, this.onN2oOpen())), this.isAI || (GameBaseData.modelSpeed = this.power))
        }, i.prototype.getOffHType = function(e, t, i) {
            Math.abs(t - e);
            return t < e - i / 3 / 2 ? -1 : t > e + i / 3 / 2 ? 1 : 0
        }, i.prototype.getSpeed = function() {
            return this.ballSpeed
        }, i.prototype.getInitSpeed = function() {
            return this.isAI, 15 * GameBaseData.gameSpeed
        }, i.prototype.setDestPosX = function(e) {
            this.destPosX = e
        }, i.prototype.getDestPosX = function() {
            return this.destPosX
        }, i.prototype.setIsAI = function(t) {
            this.isAI = t, this.isAI ? (this.ballSpeedMax = 30, e.GameData.instance.record < 1 && (this.ballSpeedMax = 29), this.ballSpeedMax += e.GameData.instance.homeScreen, this.ballSpeedMax > 30 ? this.ballSpeedMax = 30 : this.ballSpeedMax < 27 && (this.ballSpeedMax = 27), this.ballSpeedMaxTemp = this.ballSpeedMax) : this.ballSpeedMax = 30, console.log(this.isAI + "  " + this.ballSpeedMax)
        }, i.prototype.playerExceedAI = function(e) {
            this.isExceed = e
        }, i.prototype.onN2oOpen = function() {
            this._n2oIsPlay || (this._n2oIsPlay = !0, this._n2oPlayTime = 1, this.onN2oWYOpen(), this.isAI ? this.ballSpeedMax += 5 : (this.ballSpeedMax += 5, GameBaseData.modelSpeedStart = 1))
        }, i.prototype.onN2oWYOpen = function() {
            this._main.event(e.GameEvent.BALL_N2oOpen, this._CarIndex)
        }, i.prototype.onN2oWYClose = function() {
            this._main.event(e.GameEvent.BALL_N2oClose, this._CarIndex)
        }, i.prototype.openBuff = function() {
            this.buffTime = 4, this.ball3dObj && (this.ball3dObj.getChildByName("eff1").active = !0)
        }, i.prototype.closeBuff = function() {
            this.ball3dObj && (this.ball3dObj.getChildByName("eff1").active = !1)
        }, i.prototype.openDeBuff = function() {
            this.ballSpeed = this.ballSpeed * e.GameConfig.ANT_CAR_CONFIG[this._CarSkinIndex] / 10, this.debuffTime = 2, this.N2oAddsPeed = 10, this.ball3dObj && (this.ball3dObj.getChildByName("eff1").active = !0), this.isAI || (this.accelerate = 1)
        }, i.prototype.closeDeBuff = function() {
            this.ball3dObj && (this.ball3dObj.getChildByName("eff1").active = !1)
        }, i.prototype.upDataTime = function(t) {
            this.aiTime >= 0 && (this.aiTime -= t), this.buffTime > 0 && (this.buffTime -= t, this.buffTime <= 0 && (this.buffTime = 0, this.closeBuff())), this.debuffTime > 0 ? (this.debuffTime -= t, this.debuffTime <= 0 && (this.debuffTime = 0, this.closeDeBuff()), this.ballSpeed -= .1 * (11 - e.GameConfig.ANT_CAR_CONFIG[this._CarSkinIndex]), this.ballSpeed < (this.isAI ? 15 * GameBaseData.gameSpeed : 10 * GameBaseData.gameSpeed) && (this.ballSpeed = this.isAI ? 15 * GameBaseData.gameSpeed : 10 * GameBaseData.gameSpeed)) : this.ballSpeed < this.getInitSpeed() && !this.isFinish && !this._n2oIsPlay && (this.ballSpeed += .1 * e.GameConfig.ACC_CAR_CONFIG[this._CarSkinIndex], this.ballSpeed > this.getInitSpeed() && (this.ballSpeed = this.getInitSpeed())), this.offHorizontal > 0 ? this.offHorizontal = this.lerp(this.offHorizontal, 0, .5) : this.offHorizontal < 0 && (this.offHorizontal = this.lerp(this.offHorizontal, 0, .5)), this._n2oIsPlay && this._n2oPlayTime > 0 && (this.debuffTime <= 0 && !this.isFinish && (this.ballSpeed += e.GameConfig.ACC_CAR_CONFIG[this._CarSkinIndex], this.ballSpeed > this.ballSpeedMax * GameBaseData.gameSpeed && (this.ballSpeed = this.ballSpeedMax * GameBaseData.gameSpeed)), this._n2oPlayTime -= t / this._n2oPlayMaxTime, this.power = this._n2oPlayTime, this._n2oPlayTime < 0 && (this._n2oPlayTime = 0, this._n2oIsPlay = !1, this.power = 0, this.ballSpeedMax -= 5, this.isAI ? this.ballSpeedMax = this.ballSpeedMaxTemp : GameBaseData.modelSpeedStart = -1, this.onN2oWYClose()), this.isAI || (GameBaseData.modelSpeed = this.power))
        }, i.prototype.lerp = function(e, t, i) {
            return e > t ? (e -= (e - t) / 10) < t && (e = 0) : e < t && (e += (t - e) / 10) > t && (e = 0), e
        }, i.prototype.playSound = function(t) {
            "Hit" == t ? e.SoundManager.playSound("res/sounds/hit.mp3") : "Box" == t ? e.SoundManager.playSound("res/sounds/gameover.mp3") : e.GameDefine.ACCELERATE_BLOCK == t && e.SoundManager.playSound("res/sounds/dead.mp3")
        }, i.prototype.getSpeedTimes = function() {
            return this.speedTimes <= 0 || (this.speedTimes--, !1)
        }, i
    }(Laya.Script);
    e.BallScript = t
}(touch || (touch = {}));