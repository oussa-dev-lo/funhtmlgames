var touch, __extends = this && this.__extends || function() {
    var e = function(i, t) {
        return (e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, i) {
                e.__proto__ = i
            } || function(e, i) {
                for (var t in i) i.hasOwnProperty(t) && (e[t] = i[t])
            })(i, t)
    };
    return function(i, t) {
        function a() {
            this.constructor = i
        }
        e(i, t), i.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
    }
}();
! function(e) {
    var i = function(i) {
        function t() {
            var t = i.call(this) || this;
            return t._gameScene = null, t._indexView = null, t._gameView = null, t._tipDialog = null, t._awardDialog = null, t._matchDialog = null, t._gameScene = new e.GameScene(t), t.on(e.GameEvent.ENTER_GAME1, t, t.onEnterGame1), t.on(e.GameEvent.ENTER_GAME2, t, t.onEnterGame2), t.on(e.GameEvent.BACK, t, t.onBack), t.on(e.GameEvent.OPEN_TIP, t, t.onTip), t.on(e.GameEvent.OPEN_SKIN, t, t.showIndexView), t.on(e.GameEvent.OPEN_GIFT, t, t.showGift), t.on(e.GameEvent.MATCH_OVER, t, t.closeMatchDialog), t.on(e.GameEvent.START_AGAIN, t, t.onStartAgain), Laya.timer.loop(1e3, t, t.onTimeLoop), t
        }
        return __extends(t, i), t.prototype.destroy = function() {
            Laya.timer.clear(this, this.onTimeLoop), this.off(e.GameEvent.ENTER_GAME1, this, this.onEnterGame1), this.off(e.GameEvent.ENTER_GAME2, this, this.onEnterGame2), this.off(e.GameEvent.BACK, this, this.onBack), this.off(e.GameEvent.OPEN_TIP, this, this.onTip), this.off(e.GameEvent.OPEN_SKIN, this, this.showIndexView), this.off(e.GameEvent.OPEN_GIFT, this, this.showGift), this.off(e.GameEvent.MATCH_OVER, this, this.closeMatchDialog), this.off(e.GameEvent.START_AGAIN, this, this.onStartAgain), this.hideIndexView(), this.hideGameView(), this.closeMatchDialog()
        }, t.prototype.showIndexView = function() {
            null == this._indexView && (this._indexView = new e.IndexView(this), Laya.stage.addChild(this._indexView))
        }, t.prototype.hideIndexView = function() {
            null != this._indexView && (this._indexView.removeSelf(), this._indexView.destroy(), this._indexView = null)
        }, t.prototype.showGameView = function() {
            null == this._gameView && (this._gameView = new e.GameView(this), Laya.stage.addChild(this._gameView), GameBaseData.isShowGameView = !0)
        }, t.prototype.hideGameView = function() {
            null != this._gameView && (this._gameView.removeSelf(), this._gameView.destroy(), this._gameView = null, GameBaseData.isShowGameView = !1)
        }, t.prototype.onEnterGame1 = function() {
            GameBaseData.isDebug && console.log("开始游戏1"), e.GameDefine.AI_COUNT = 5, e.TipDialog.gameTimes++, GameBaseData.FBEventCar(51), e.SoundManager.playMusic("res/sounds/bgm_low.mp3", !0), this.initMyCar(), this.showMatchDialog()
        }, t.prototype.onEnterGame2 = function() {
            GameBaseData.isDebug && console.log("开始游戏2"), e.GameDefine.AI_COUNT = 0, e.TipDialog.gameTimes++, GameBaseData.FBEventCar(52), e.SoundManager.playMusic("res/sounds/bgm_low.mp3", !0), this.hideIndexView(), this.initMyCar(), this.showGameView()
        }, t.prototype.initMyCar = function() {
            this._gameScene.initMyCar()
        }, t.prototype.initHeads = function() {
            this._gameScene.initHeads()
        }, t.prototype.onBack = function() {
            this.hideGameView(), this.showIndexView()
        }, t.prototype.onTip = function(i) {
            null == this._tipDialog && (this._tipDialog = new e.TipDialog(this)), this._tipDialog.onSetType(i), this._tipDialog.popup()
        }, t.prototype.showGift = function() {
            null == this._awardDialog && (this._awardDialog = new e.AwardDialog(this)), this._awardDialog.updateOnlineReward(), this._awardDialog.popup()
        }, t.prototype.onTimeLoop = function() {
            e.GameData.instance.onlineTime++
        }, t.prototype.showMatchDialog = function() {
            if (0 == e.GameDefine.AI_COUNT) {
                GameBaseData.getMatchData();
                this.closeMatchDialog()
            } else null == this._matchDialog && (this._matchDialog = new e.MatchDialog(this)), Laya.stage.addChild(this._matchDialog)
        }, t.prototype.closeMatchDialog = function() {
            this.hideIndexView(), this.showGameView(), this.initHeads(), null != this._matchDialog && (this._matchDialog.removeSelf(), this._matchDialog.destroy(), this._matchDialog = null)
        }, t.prototype.onStartAgain = function() {
            GameBaseData.isDebug && console.log("再来一局"), e.TipDialog.gameTimes++, e.SoundManager.playMusic("res/sounds/bgm_low.mp3", !0), this.hideIndexView(), this.initMyCar(), this.hideGameView(), this.showGameView()
        }, t
    }(Laya.EventDispatcher);
    e.GameModule = i
}(touch || (touch = {}));