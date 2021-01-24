var touch, __extends = this && this.__extends || function() {
    var e = function(a, t) {
        return (e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, a) {
                e.__proto__ = a
            } || function(e, a) {
                for (var t in a) a.hasOwnProperty(t) && (e[t] = a[t])
            })(a, t)
    };
    return function(a, t) {
        function n() {
            this.constructor = a
        }
        e(a, t), a.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }
}();
! function(e) {
    var a = function(a) {
        function t(t) {
            var n = a.call(this) || this;
            n._main = null, n._deadNum = 0, n._reviveCountdown = 0, n._revivingCountdown = 0, n._onlineRemainingTime = 0, n._score = 0, n._scoreModel2 = 0, n._car2dPos = new Laya.Vector2, n._RankType = 0, n._datas = null, n.fbEventType = 0, n.biao_tiao3Width = 0, n.biao_tiao4Width = 0, n.biao_tiao_alphaDir = 0, n.videoType = -1, n.tfScoreTimes = 0, n.rewardTimes = 0, n.isErbei = !1, n.unLockCarId = 0, n.goalTimes = 0, n._main = t, n.onScoreChange([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 3), n._main.event(e.GameEvent.RESET), n.boxFinalScore.visible = !1, n.OS_Menu.visible = !1, n.doGoalMove(!0), n.aniGuide.play(0, !0), n.btnClose.clickHandler = Laya.Handler.create(n, n.onClose, null, !1), n.btnWatchVideo.clickHandler = Laya.Handler.create(n, n.onWathVideo, null, !1), n.btnShare.clickHandler = Laya.Handler.create(n, n.onShare, null, !1), n.btnOnlineReward.clickHandler = Laya.Handler.create(n, n.onlineReward, null, !1), n.OS_Menu_Close.clickHandler = Laya.Handler.create(n, n.closeGameOverShare, null, !1), n.OS_Menu_Share.clickHandler = Laya.Handler.create(n, n.onGameOverShare, null, !1), n.btnBack.clickHandler = Laya.Handler.create(n, n.onBack, null, !1), n.btnInvite.clickHandler = Laya.Handler.create(n, n.onInvite, null, !1), n.btnLongInvite.clickHandler = Laya.Handler.create(n, n.onInvite, null, !1), n.uc_share.clickHandler = Laya.Handler.create(n, n.onUnLockShare, null, !1), n.uc_nothanks.clickHandler = Laya.Handler.create(n, n.onUnLockClose, null, !1), n.rankWorld.clickHandler = Laya.Handler.create(n, n.onRankWorld, null, !1), n.rankFriend.clickHandler = Laya.Handler.create(n, n.onRankFriend, null, !1), n.sRankback.clickHandler = Laya.Handler.create(n, n.onCloseAllRankList, null, !1), n.btnAllRank.clickHandler = Laya.Handler.create(n, n.onShowRankList, null, !1), n._main.on(e.GameEvent.SCROE_CHANGE, n, n.onScoreChange), n._main.on(e.GameEvent.DEAD, n, n.onDead), n._main.on(e.GameEvent.CLOSE_RANK, n, n.onCloseRank), n._main.on(e.GameEvent.GAME_SpeedChange, n, n.onSpeedChange), n._main.on(e.GameEvent.GAME_CarPos, n, n.onMyCarPos2d), n._main.on(e.GameEvent.GAME_N2OEff, n, n.onN2OeffPlay), n._main.on(e.GameEvent.GAME_SpEff, n, n.onSPeffPlay), n._main.on(e.GameEvent.GAME_PzEff, n, n.onPZeffPlay), Laya.stage.once(Laya.Event.MOUSE_DOWN, n, n.onStart), n.fbEventType = 0;
            var i = new Laya.Skeleton;
            i.load("res/dragon/skeleton.sk", Laya.Handler.create(n, function() {
                console.log("加载成功"), n.skeleton = i, n.skeleton.visible = !1, n.skeleton.scaleX = .5, n.skeleton.scaleY = .5, Laya.stage.addChild(n.skeleton)
            }));
            var o = new Laya.Skeleton;
            return o.load("res/dragon/lock2.sk", Laya.Handler.create(n, function() {
                console.log("解锁加载成功"), n._skeleton_unLock = o, n._skeleton_unLock.visible = !1, n.uc_lock.addChild(n._skeleton_unLock)
            })), 1 == GameBaseData.modelType ? (GameBaseData.getRankList_mode1(function() {}, null), n.initList(), n.btnAllRank.visible = !0) : n.btnAllRank.visible = !1, n
        }
        return __extends(t, a), t.prototype.destroy = function() {
            this._main.off(e.GameEvent.DEAD, this, this.onDead), this._main.off(e.GameEvent.SCROE_CHANGE, this, this.onScoreChange), this._main.off(e.GameEvent.CLOSE_RANK, this, this.onCloseRank), this._main.off(e.GameEvent.GAME_SpeedChange, this, this.onSpeedChange), this._main.off(e.GameEvent.GAME_CarPos, this, this.onMyCarPos2d), this._main.off(e.GameEvent.GAME_N2OEff, this, this.onN2OeffPlay), this._main.off(e.GameEvent.GAME_SpEff, this, this.onSPeffPlay), this._main.off(e.GameEvent.GAME_PzEff, this, this.onPZeffPlay), null != this.btnClose.clickHandler && (this.btnClose.clickHandler.recover(), this.btnClose.clickHandler = null), null != this.btnWatchVideo.clickHandler && (this.btnWatchVideo.clickHandler.recover(), this.btnWatchVideo.clickHandler = null), null != this.btnBack.clickHandler && (this.btnBack.clickHandler.recover(), this.btnBack.clickHandler = null), null != this.btnInvite.clickHandler && (this.btnInvite.clickHandler.recover(), this.btnInvite.clickHandler = null), null != this.btnOnlineReward.clickHandler && (this.btnOnlineReward.clickHandler.recover(), this.btnOnlineReward.clickHandler = null), null != this.btnShare.clickHandler && (this.btnShare.clickHandler.recover(), this.btnShare.clickHandler = null), this._main = null, a.prototype.destroy.call(this)
        }, t.prototype.initList = function() {
            this.boxSRank.visible = !1, this.longRankList.vScrollBarSkin = "", this.longRankList.array = new Array(0), this.longRankList.renderHandler = Laya.Handler.create(this, this.onLongRankItem, null, !1), this.longRankList.array = new Array(0), this.longRankList.scrollTo(0), this.myRank.myBG.visible = !0, this.setRankType(!0), 1 == GameBaseData.modelType && (this.myRank.rLevel.visible = !1, this.myRank.duanwei.visible = !1, this.myRank.starBg.visible = !1, this.myRank.rScore.text = "0m", this.myRank.rScore.x = 483, this.myRank.rName.y = 50, GameBaseData.isFBSDK && (this.myRank.rHead.skin = GameBaseData.fbHead, this.myRank.rName.text = FBInstant.player.getName()))
        }, t.prototype.onTweenShareBtn0 = function() {
            Laya.Tween.clearTween(this.onTweenShareBtn0), this.OS_Menu_Share.scaleX = 1, this.OS_Menu_Share.scaleY = 1, Laya.Tween.to(this.OS_Menu_Share, {
                scaleX: .8,
                scaleY: .8
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenShareBtn1))
        }, t.prototype.onTweenShareBtn1 = function() {
            Laya.Tween.clearTween(this.onTweenShareBtn1), this.OS_Menu_Share.scaleX = .8, this.OS_Menu_Share.scaleY = .8, Laya.Tween.to(this.OS_Menu_Share, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenShareBtn0))
        }, t.prototype.onStart = function() {
            GameBaseData.initGameLv(), this.tfScore.visible = !0, this.doGoalMove(!1), this.aniGuide.stop(), this._main.event(e.GameEvent.START)
        }, t.prototype.doGoalMove = function(a) {
            var t = this;
            GameBaseData.modelGoal = e.GameData.instance.record > e.GameConfig.LEVEL_GOAL.length - 1 ? 1 : e.GameConfig.LEVEL_GOAL[e.GameData.instance.record], 0 == e.GameDefine.AI_COUNT ? (this.tfScore.visible = !1, this.tfS.visible = !1) : (this.tfScore.visible = !0, this.tfS.visible = a), this.tfLevel.visible = !0, this.boxGuide.visible = a, this.tfL.visible = a, a ? (this.myProgress.visible = !a, this.tfLevel.text = "" + (e.GameData.instance.record + 1), this.tfScore.text = "Top" + GameBaseData.modelGoal, this.biao.visible = !1) : (e.SoundManager.playSound("res/sounds/start.mp3"), this.tfLevel.text = "Level" + (e.GameData.instance.record + 1), this.tfLevel.scaleX = this.tfLevel.scaleY = .7, this.biao.visible = !0, Laya.Tween.to(this.tfLevel, {
                y: 20
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, function() {
                t.tfLevel.text = "Level " + (e.GameData.instance.record + 1), 0 == GameBaseData.modelType && (t.myProgress.visible = !a), t.myProgress.scaleX = 0, Laya.Tween.to(t.myProgress, {
                    scaleX: 1
                }, 500, Laya.Ease.linearIn, Laya.Handler.create(t, function() {}), 0, !0, !0)
            }), 0, !0, !0), Laya.Tween.to(this.tfScore, {
                y: 100
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, function() {
                t.tfScore.text = "6th/Top" + GameBaseData.modelGoal
            }), 0, !0, !0), this._main.event(e.GameEvent.CARPLAY)), 1 == GameBaseData.modelType && (this.tfL.visible = !1, this.tfS.visible = !1, this.tfLevel.visible = !1, this.tfScore.visible = !0, this.myProgress.visible = !1, this.tfScore.text = "0 m", this.biao.visible = !1)
        }, t.prototype.onScoreChange = function(a, t) {
            if (1 == GameBaseData.modelType) return this._scoreModel2 = Math.floor(-1 * a[e.GameDefine.AI_COUNT]), void(this.tfScore.text = this._scoreModel2 + "m");
            this._score = t + 1;
            for (var n = 1; n < e.GameDefine.AI_COUNT; n++) a[n] < e.GameDefine.EndPointZ && (a[n] = e.GameDefine.EndPointZ);
            a[e.GameDefine.AI_COUNT] < e.GameDefine.EndPointZ ? (a[e.GameDefine.AI_COUNT] = e.GameDefine.EndPointZ, this.onTweenTScore0()) : a[e.GameDefine.AI_COUNT] > e.GameDefine.EndPointZ && (this.myProgress.value = a[e.GameDefine.AI_COUNT] / e.GameDefine.EndPointZ, this.myImage.x = 600 * this.myProgress.value, this.tfRank.text = 0 == t ? this._score + "st" : 1 == t ? this._score + "nd" : 2 == t ? this._score + "rd" : this._score + "th", this.tfScore.text = this.tfRank.text + "/Top" + GameBaseData.modelGoal)
        }, t.prototype.onSpeedChange = function(a, t, n) {
            var i = this,
                o = 240 * a / 30 - 135;
            o < -135 && (o = -135), o > 135 && (o = 135), this.biao_speed.text = "" + Math.floor(o + 135), this.biao_tiao3Width != Math.floor(219 * GameBaseData.modelSpeed) && (this.biao_tiao3Width = Math.floor(219 * GameBaseData.modelSpeed), this.biao_tiao3.width = this.biao_tiao3Width), this.biao_tiao4Width < this.biao_tiao3Width && (0 == this.biao_tiao_alphaDir ? (this.biao_tiao3.alpha -= .1, this.biao_tiao3.alpha < .2 && (this.biao_tiao_alphaDir = 1)) : (this.biao_tiao3.alpha += .1, this.biao_tiao3.alpha >= 1 && (this.biao_tiao_alphaDir = 0)), this.biao_tiao4Width += 2, this.biao_tiao4.width = this.biao_tiao4Width), GameBaseData.modelSpeedStart >= 1 && (GameBaseData.modelSpeedStart > 1 ? (this.biao_tiao4Width > this.biao_tiao3Width && (this.biao_tiao4Width -= 2, this.biao_tiao4.width = this.biao_tiao4Width), 0 == this.biao_tiao_alphaDir ? (this.biao_tiao3.alpha -= .1, this.biao_tiao4.alpha -= .1, this.biao_tiao3.alpha < .2 && (this.biao_tiao_alphaDir = 1)) : (this.biao_tiao3.alpha += .1, this.biao_tiao4.alpha += .1, this.biao_tiao3.alpha >= 1 && (this.biao_tiao_alphaDir = 0))) : (this.biao_tiao4.width = this.biao_tiao3Width, GameBaseData.modelSpeedStart = 2, this.aniHuo ? Laya.stage.addChild(this.aniHuo) : Laya.loader.load("res/huo.json", Laya.Handler.create(this, function() {
                i.aniHuo = new Laya.Animation, i.aniHuo.loadAtlas("res/huo.json"), i.aniHuo.interval = 60, i.aniHuo.index = 0, i.aniHuo.play(), i.aniHuo.pos(385, 120), i.aniHuo.rotation = 30, i.aniHuo.alpha = .5, Laya.stage.addChild(i.aniHuo)
            }), null, Laya.Loader.ATLAS))), -1 == GameBaseData.modelSpeedStart && (Laya.stage.removeChild(this.aniHuo), GameBaseData.modelSpeed = 0, this.biao_tiao3Width = 0, this.biao_tiao4Width = 0, this.biao_tiao3.width = 0, this.biao_tiao4.width = 0, this.biao_tiao3.alpha = 1, this.biao_tiao4.alpha = 1, GameBaseData.modelSpeedStart = 0), o += e.MathUtil.randomInt(-10, 10), t ? this.biao_zhen.rotation = o : o < this.biao_zhen.rotation ? (this.biao_zhen.rotation -= .1 * (this.biao_zhen.rotation - o), this.biao_zhen.rotation < o && (this.biao_zhen.rotation = o)) : o > this.biao_zhen.rotation ? (this.biao_zhen.rotation += .1 * (o - this.biao_zhen.rotation), this.biao_zhen.rotation > o && (this.biao_zhen.rotation = o)) : this.biao_zhen.rotation = o
        }, t.prototype.onMyCarPos2d = function(e, a) {
            this._car2dPos.x = e, this._car2dPos.y = a, this.testEff.visible = !1, this.testEff.pos(e, a)
        }, t.prototype.onN2OeffPlay = function() {
            var e = this;
            Laya.Tween.clearTween(this.N2oEff), this.N2oEff.visible = !0, this.N2oEff.scaleX = 2, this.N2oEff.scaleY = 2, this.N2oEff.alpha = 1, this.N2oEff.pos(this._car2dPos.x, this._car2dPos.y), Laya.Tween.to(this.N2oEff, {
                scaleX: 5,
                scaleY: 5,
                alpha: 0
            }, 300, Laya.Ease.linearIn, Laya.Handler.create(this, function() {
                e.N2oEff.visible = !1
            }))
        }, t.prototype.onSPeffPlay = function() {
            var e = this;
            Laya.Tween.clearTween(this.spEff), this.spEff.visible = !0, this.spEff.alpha = .6, Laya.Tween.to(this.spEff, {
                alpha: 0
            }, 400, Laya.Ease.linearIn, Laya.Handler.create(this, function() {
                e.spEff.visible = !1
            }))
        }, t.prototype.onPZeffPlay = function() {
            this.skeleton && (this.skeleton.pos(this._car2dPos.x, this._car2dPos.y), this.skeleton.visible = !0, this.skeleton.play("animation", !1))
        }, t.prototype.onClose = function() {
            this.boxRevive.visible = !1, this._deadNum = 0, e.GameData.instance.record > 0 ? this.playCPGG() : this.gameOver(), GameBaseData.FBEventCar(44), Laya.timer.clear(this, this.onReviveCountDown)
        }, t.prototype.onWathVideo = function() {
            var e = this;
            if (this.boxRevive.visible = !1, Laya.timer.clear(this, this.onReviveCountDown), GameBaseData.isFBSDK) {
                if (this.videoType = GameBaseData.getVideoFlag(2), this.videoType < 0) return GameBaseData.FBEventCar(50), void this._onWathVideo();
                GameBaseData.FBEventCar(45), this.videoType >= 10 ? GameBaseData.PlayCPGG2(function() {}, function() {
                    e.isErbei = !0, GameBaseData.FBEventCar(46), e._onWathVideo()
                }, function() {
                    GameBaseData.FBEventCar(47), e._onWathVideo()
                }, function() {
                    GameBaseData.FBEventCar(47), e._onWathVideo()
                }) : GameBaseData.playVideo2(function() {
                    e.isErbei = !0, GameBaseData.FBEventCar(48), e._onWathVideo()
                }, function() {
                    GameBaseData.FBEventCar(49), e._onWathVideo()
                }, function() {
                    GameBaseData.FBEventCar(49), e._onWathVideo()
                }, function() {})
            } else this._onWathVideo()
        }, t.prototype._onWathVideo = function() {
            this._main.event(e.GameEvent.REVIVE), this.boxRevive.visible = !1, this.boxReviving.visible = !0, this.tfScore.visible = !0, this.doRevivingCountDown(), this.btnClose.visible = !0, Laya.timer.clear(this, this.onReviveCountDown)
        }, t.prototype.onTweenWatchBtn0 = function() {
            Laya.Tween.clearTween(this.onTweenShareBtn0), this.btnWatchVideo.scaleX = 1, this.btnWatchVideo.scaleY = 1, Laya.Tween.to(this.btnWatchVideo, {
                scaleX: .8,
                scaleY: .8
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenWatchBtn1), 0, !0, !0)
        }, t.prototype.onTweenWatchBtn1 = function() {
            Laya.Tween.clearTween(this.onTweenShareBtn1), this.btnWatchVideo.scaleX = .8, this.btnWatchVideo.scaleY = .8, Laya.Tween.to(this.btnWatchVideo, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenWatchBtn0), 0, !0, !0)
        }, t.prototype.doReviveCountDown = function() {
            this._reviveCountdown = t.REVIVE_COUNTDOWN, this.btnClose.visible = !0, this.reScore.text = this._scoreModel2 + "m", this.updateReviveUI(), Laya.timer.loop(1e3, this, this.onReviveCountDown)
        }, t.prototype.onReviveCountDown = function() {
            this._reviveCountdown--, this._reviveCountdown <= 7 && (this.btnClose.visible = !0), this.updateReviveUI(), this._reviveCountdown <= 0 && (Laya.timer.clear(this, this.onReviveCountDown), this.boxRevive.visible = !1, this._deadNum = 0, e.GameData.instance.record > 0 ? this.playCPGG() : this.gameOver(), GameBaseData.FBEventCar(44))
        }, t.prototype.updateReviveUI = function() {
            this.tfReviveCountdown.text = this._reviveCountdown.toString()
        }, t.prototype.doRevivingCountDown = function() {
            this._revivingCountdown = t.REVIVING_COUNTDOWN, this.updateRevivingUI(), Laya.timer.loop(1e3, this, this.onRevivingCountDown)
        }, t.prototype.onRevivingCountDown = function() {
            this._revivingCountdown--, this.updateRevivingUI(), this._revivingCountdown <= 0 && (Laya.timer.clear(this, this.onRevivingCountDown), this.boxReviving.visible = !1, this.tfScore.visible = !0)
        }, t.prototype.updateRevivingUI = function() {
            this.tfReviving.text = this._revivingCountdown.toString()
        }, t.prototype.onDead = function() {
            Laya.timer.once(1e3, this, this.doDead)
        }, t.prototype.doDead = function() {
            if (1 == GameBaseData.modelType && (this.videoType = GameBaseData.getVideoFlag(2), this._deadNum <= 2 && this.videoType >= 0)) return GameBaseData.FBEventCar(42), this._deadNum++, this.tfScore.visible = !1, this.boxRevive.visible = !0, GameBaseData.reviveCount++, this.onTweenWatchBtn0(), void this.doReviveCountDown();
            this._deadNum = 0, e.GameData.instance.record > 0 ? this.playCPGG() : this.gameOver()
        }, t.prototype.onTweenHGBtn0 = function() {
            Laya.Tween.clearTween(this.onTweenHGBtn0), this.rankHG.y = -165, this.rankHGHead.y = -50, Laya.Tween.to(this.rankHG, {
                y: -188
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenHGBtn1), 0, !0, !0), Laya.Tween.to(this.rankHGHead, {
                y: -73
            }, 500, Laya.Ease.linearIn, null, 0, !0, !0)
        }, t.prototype.onTweenHGBtn1 = function() {
            Laya.Tween.clearTween(this.onTweenHGBtn1), this.rankHG.y = -188, this.rankHGHead.y = -73, Laya.Tween.to(this.rankHG, {
                y: -165
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenHGBtn0), 0, !0, !0), Laya.Tween.to(this.rankHGHead, {
                y: -50
            }, 500, Laya.Ease.linearIn, null, 0, !0, !0)
        }, t.prototype.onTweenDoubleBtn0 = function() {
            Laya.Tween.clearTween(this.onTweenDoubleBtn0), this.btnOnlineReward.scaleX = 1, this.btnOnlineReward.scaleY = 1, Laya.Tween.to(this.btnOnlineReward, {
                scaleX: .8,
                scaleY: .8
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenDoubleBtn1), 0, !0, !0)
        }, t.prototype.onTweenDoubleBtn1 = function() {
            Laya.Tween.clearTween(this.onTweenDoubleBtn1), this.btnOnlineReward.scaleX = .8, this.btnOnlineReward.scaleY = .8, Laya.Tween.to(this.btnOnlineReward, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenDoubleBtn0), 0, !0, !0)
        }, t.prototype.onTweenTScore0 = function() {
            this.tfScore.alpha = 1, Laya.Tween.clearTween(this.onTweenTScore0), Laya.Tween.to(this.tfScore, {
                alpha: 0
            }, 220, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenTScore1), 0, !0, !0)
        }, t.prototype.onTweenTScore1 = function() {
            var e = this;
            Laya.Tween.clearTween(this.onTweenTScore1), this.tfScore.alpha = 0, Laya.Tween.to(this.tfScore, {
                alpha: 1
            }, 220, Laya.Ease.linearIn, Laya.Handler.create(this, function() {
                e.tfScoreTimes++, e.tfScoreTimes > 2 ? (e.biao.visible = !1, GameBaseData.modelSpeedStart = -1, e.myProgress.visible = !1, e.tfScore.scaleX = e.tfScore.scaleY = 1, Laya.Tween.to(e.tfScore, {
                    scaleX: 1.8,
                    scaleY: 1.8
                }, 220, Laya.Ease.linearIn, Laya.Handler.create(e, function() {}), 0, !0, !0), e._score <= GameBaseData.modelGoal ? e.tfScore.text = "Complete" : e.tfScore.text = "Fail", e.tfScoreTimes = 0) : e.onTweenTScore0()
            }), 0, !0, !0)
        }, t.prototype.onlineReward = function() {
            var e = this;
            if (GameBaseData.isFBSDK) {
                if (this.videoType = GameBaseData.getVideoFlag(2), this.videoType < 0) return GameBaseData.FBEventCar(30), this.btnOnlineReward.visible = !1, this.rewardTimes = 0, void this.onTweenRewardBtn0();
                GameBaseData.FBEventCar(1), this.videoType >= 10 ? GameBaseData.PlayCPGG2(function() {}, function() {
                    e.isErbei = !0, GameBaseData.FBEventCar(4), e.btnOnlineReward.visible = !1, e.rewardTimes = 0, e.onTweenRewardBtn0()
                }, function() {
                    GameBaseData.FBEventCar(5), e.btnOnlineReward.visible = !1, e.rewardTimes = 0, e.onTweenRewardBtn0()
                }, function() {
                    GameBaseData.FBEventCar(5), e.btnOnlineReward.visible = !1, e.rewardTimes = 0, e.onTweenRewardBtn0()
                }) : GameBaseData.playVideo2(function() {
                    e.isErbei = !0, GameBaseData.FBEventCar(2), e.btnOnlineReward.visible = !1, e.rewardTimes = 0, e.onTweenRewardBtn0()
                }, function() {
                    GameBaseData.FBEventCar(3), e.btnOnlineReward.visible = !1, e.rewardTimes = 0, e.onTweenRewardBtn0()
                }, function() {
                    GameBaseData.FBEventCar(3), e.btnOnlineReward.visible = !1, e.rewardTimes = 0, e.onTweenRewardBtn0()
                }, function() {})
            } else this.btnOnlineReward.visible = !1, this.rewardTimes = 0, this.onTweenRewardBtn0()
        }, t.prototype.onTweenRewardBtn0 = function() {
            if (Laya.Tween.clearTween(this.onTweenRewardBtn0), this.rewardTimes++, this.rewardTimes > 5) return e.GameData.instance.setAddStar(GameBaseData.modelScore), GameBaseData.modelScore += GameBaseData.modelScore, this.setFBFriendList(), void(this.imgSuo.visible && e.GameData.instance.star >= e.GameConfig.UNLOCK_CAR_CONFIG[this.unLockCarId] && (this.imgSuo.visible = !1, e.GameData.instance.showSkinIndex = this.unLockCarId, this.onUnLockCarOpen(this.unLockCarId)));
            this.tfBestScore1.scaleX = this.tfBestScore1.scaleY = 1, Laya.Tween.to(this.tfBestScore1, {
                scaleX: 1.5,
                scaleY: 1.5
            }, 200, Laya.Ease.linearOut, Laya.Handler.create(this, this.onTweenRewardBtn1), 0, !0, !0)
        }, t.prototype.onTweenRewardBtn1 = function() {
            Laya.Tween.clearTween(this.onTweenRewardBtn0), e.SoundManager.playSound("res/sounds/get_star.mp3"), this.tfBestScore1.text = "" + (e.GameData.instance.star + Math.floor(GameBaseData.modelScore / 5 * this.rewardTimes)), this.tfBestScore1.scaleX = this.tfBestScore1.scaleY = 1.5, Laya.Tween.to(this.tfBestScore1, {
                scaleX: 1,
                scaleY: 1
            }, 200, Laya.Ease.linearOut, Laya.Handler.create(this, this.onTweenRewardBtn0), 0, !0, !0)
        }, t.prototype.playCPGG = function() {
            var e = this;
            if (GameBaseData.isFBSDK) {
                var a = GameBaseData.getVideoFlag(3);
                if (a < 0) return GameBaseData.FBEventCar(31), void this.gameOver();
                GameBaseData.FBEventCar(11), a >= 10 ? GameBaseData.PlayCPGG2(function() {}, function() {
                    GameBaseData.FBEventCar(14), e.gameOver()
                }, function() {
                    GameBaseData.FBEventCar(15), e.gameOver()
                }, function() {
                    GameBaseData.FBEventCar(15), e.gameOver()
                }) : GameBaseData.playVideo2(function() {
                    GameBaseData.FBEventCar(12), e.gameOver()
                }, function() {
                    GameBaseData.FBEventCar(13), e.gameOver()
                }, function() {
                    GameBaseData.FBEventCar(13), e.gameOver()
                }, function() {})
            } else this.gameOver()
        }, t.prototype.onShare = function() {
            this._main.event(e.GameEvent.OPEN_GIFT)
        }, t.prototype.openGift = function() {
            this.imgAward.visible = !1, this.btnShare.visible = !1;
            for (var a = e.GameData.instance.onlineIndex, t = 0; t < e.GameConfig.ONLINE_GIFT.length; t++) {
                var n = e.GameConfig.ONLINE_GIFT[t];
                if (!(n.index <= a)) {
                    n.time <= e.GameData.instance.onlineTime && GameBaseData.getVideoFlag(0) >= 0 && (this.btnShare.visible = !0, this.imgAward.visible = !0);
                    break
                }
            }
            e.GameData.instance.dailyVaild && (this.btnShare.visible = !0, this.imgAward.visible = !0)
        }, t.prototype.gameOver = function() {
            var a = this;
            0 == GameBaseData.modelType ? GameBaseData.FBEventCar(53) : (GameBaseData.modelSpeedStart = -1, GameBaseData.FBEventCar(54)), this.boxFinalScore.visible = !0, this.boxRank.visible = !1, this.boxContinue.visible = !1, this.rank1.visible = !1, this.rank2.visible = !1, this.rank3.visible = !1, this.singleRank1.visible = !1, this.singleRank2.visible = !1, this.singleRank3.visible = !1, e.GameData.instance.record > 0 && this.openGift(), GameBaseData.isDebug && console.log("有挑战则发送挑战信息"), GameBaseData.gameOverTurnFriend(this._score, "MULTI"), e.GameData.instance.addVideoNum(6, 0, 1), GameBaseData.FBEventCar(22 + this._score), GameBaseData.modelScore = 10 * (e.GameDefine.AI_COUNT + 2 - this._score), 1 == GameBaseData.modelType && (GameBaseData.modelScore = Math.floor(this._scoreModel2 / 50), 0 == GameBaseData.modelScore && (GameBaseData.modelScore = 1), GameBaseData.modelScore > 500 && (GameBaseData.modelScore = 500), this._scoreModel2 > e.GameData.instance.getModel2Score() && e.GameData.instance.setModel2Score(this._scoreModel2)), GameBaseData.firstTimes < 0 && (GameBaseData.modelScore += 20, GameBaseData.firstTimes = 0), this._score > 1 ? GameBaseData.firstTimes++ : GameBaseData.firstTimes = 0, this.unLockCarId = this.getUnLockCarId(), e.GameData.instance.setAddStar(GameBaseData.modelScore), this.tfBestScore.text = "+ " + GameBaseData.modelScore, this.tfBestScore1.text = "" + e.GameData.instance.star, this.tfBestScore2.text = "/" + e.GameConfig.UNLOCK_CAR_CONFIG[this.unLockCarId], this.cheLock.skin = "index/c" + (this.unLockCarId + 1) + ".png", e.GameData.instance.saveFBobj(), e.GameData.instance.star > 9999 ? (this.tfBestScore1.x += 40, this.tfBestScore2.x += 40) : e.GameData.instance.star > 999 && (this.tfBestScore1.x += 20, this.tfBestScore2.x += 20), this.setFBFriendList(), 0 == GameBaseData.modelType ? (this.setDiffRank(this._score), GameBaseData.gameLvInit = 0, this.showRankView(), this.tfFinalScore.visible = this.tfFinalScore1.visible = this.tfFinalScore2.visible = !1) : 1 == GameBaseData.modelType ? (this.tfFinalScore2.visible = !1, this.tfRank.visible = !1, this.setDiffRank(this._score), GameBaseData.gameLvInit = 0, this.tfFinalScore.text = this._scoreModel2 + "m", this.tfFinalScore1.text = "Best record:" + e.GameData.instance.getModel2Score() + "m", this.showRankView(), e.TipDialog.can_subscribe && 0 == e.TipDialog.pushState && this._main.event(e.GameEvent.OPEN_TIP, 1)) : (this.boxTop.visible = !1, this.biao.visible = !1, this.myProgress.visible = !1, this.tfFinalScore.text = this._scoreModel2 + "m", this.tfFinalScore1.text = "Best record:" + e.GameData.instance.getModel2Score() + "m", e.TipDialog.can_subscribe && 0 == e.TipDialog.pushState && this._main.event(e.GameEvent.OPEN_TIP, 1), this.boxContinue.visible = !0, this.boxContinue.scaleX = .2, this.tfRank.visible = !0, Laya.Tween.to(this.boxContinue, {
                scaleX: 1
            }, 300, Laya.Ease.expoOut, Laya.Handler.create(this, function() {
                a.onTweenHGBtn0(), a.showDoubleReward()
            })), this.boxScore.visible = !0, this.boxScore.y = 870, this.boxScore.scaleX = this.boxScore.scaleY = .1, Laya.Tween.to(this.boxScore, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.expoOut, Laya.Handler.create(this, function() {
                Laya.Tween.to(a.boxScore, {
                    scaleX: 1,
                    scaleY: 1
                }, 500, Laya.Ease.expoOut, Laya.Handler.create(a, function() {
                    a.boxScore.alpha = 1, Laya.Tween.to(a.boxScore, {
                        alpha: 0
                    }, 300, Laya.Ease.expoOut, Laya.Handler.create(a, function() {
                        a.boxScore.visible = !1, a.IBest.visible = !0, a.tfBestScore1.visible = !0, a.tfBestScore2.visible = !0, Laya.Tween.to(a.IBest, {
                            scaleX: 1,
                            scaleY: 1
                        }, 200, Laya.Ease.expoOut, Laya.Handler.create(a, function() {
                            a.imgSuo.visible && e.GameData.instance.star >= e.GameConfig.UNLOCK_CAR_CONFIG[a.unLockCarId] && (a.imgSuo.visible = !1, e.GameData.instance.showSkinIndex = a.unLockCarId, a.onUnLockCarOpen(a.unLockCarId))
                        }))
                    }))
                }))
            })))
        }, t.prototype.getUnLockCarId = function() {
            for (var a = 1; a < e.GameConfig.UNLOCK_CAR_CONFIG.length; a++)
                if (e.GameConfig.UNLOCK_CAR_CONFIG[a] > e.GameData.instance.star) return a;
            return this.imgSuo.visible = !1, 7
        }, t.prototype.setDiffRank = function(a) {
            a <= GameBaseData.modelGoal ? (e.GameData.instance.record++, e.GameData.instance.record2++, 1 == a ? (e.GameData.instance.record2 += 3, e.GameData.instance.homeScreen < 3 && e.GameData.instance.homeScreen++) : 2 == a ? e.GameData.instance.record2 += 2 : 3 == a ? e.GameData.instance.record2 += 1 : a == e.GameDefine.AI_COUNT + 1 ? e.GameData.instance.record2 -= 3 : a == e.GameDefine.AI_COUNT ? e.GameData.instance.record2 -= 2 : a == e.GameDefine.AI_COUNT - 1 && (e.GameData.instance.record2 -= 1)) : (e.GameData.instance.homeScreen > 0 && e.GameData.instance.homeScreen--, e.GameData.instance.homeScreen--, e.GameData.instance.record2--, a == e.GameDefine.AI_COUNT + 1 ? e.GameData.instance.record2 -= 3 : a == e.GameDefine.AI_COUNT ? e.GameData.instance.record2 -= 2 : a == e.GameDefine.AI_COUNT - 1 && (e.GameData.instance.record2 -= 1)), e.GameData.instance.record2 < 2 && (e.GameData.instance.record2 = 2), e.GameData.instance.record2 > 30 && (e.GameData.instance.record2 = 30), e.GameData.instance.record < 5 ? e.GameData.instance.record2 > 10 && (e.GameData.instance.record2 = 10) : e.GameData.instance.record < 10 ? e.GameData.instance.record2 > 15 && (e.GameData.instance.record2 = 15) : e.GameData.instance.record < 20 && e.GameData.instance.record2 > 20 && (e.GameData.instance.record2 = 20)
        }, t.prototype.openGameOverShare = function(e) {
            this.NextBox.visible = !1, this.OS_Menu.visible = !0;
            var a = 0 == GameBaseData.modelType ? "MULTI" : "SINGLE",
                t = 0 == GameBaseData.modelType ? e + "" : e + "m";
            this.OS_Menu_Score.text = "" + t, this.OS_Menu_ScoreB.text = "" + t, this.OS_Menu_top.text = a, this.OS_Menu_topB.text = a, this.OS_Menu_bg.skin = "./res/skin/fx.png", this.OS_Menu_Head.visible = !0, this.OS_Menu_Score.visible = !0, this.OS_Menu_ScoreB.visible = !0, this.OS_Menu_top.visible = !0, this.OS_Menu_topB.visible = !0, GameBaseData.isFBSDK && (this.OS_Menu_Head.skin = FBInstant.player.getPhoto(), FBInstant.logEvent("Share_open")), Laya.Tween.to(this.OS_Menu_Share, {
                scaleX: .8,
                scaleY: .8
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenShareBtn1))
        }, t.prototype.closeGameOverShare = function() {
            this.OS_Menu.visible = !1, this.NextBox.visible = !0
        }, t.prototype.onGameOverShare = function() {
            var e = this;
            FBInstant.logEvent("Share_click"), GameBaseData.FBShare_Custom(this.OS_Menu_Score.text, this.OS_Menu_top.text, function() {
                GameBaseData.isDebug && console.log("自定义分享成功"), e.closeGameOverShare()
            })
        }, t.prototype.showDoubleReward = function() {
            var e = this;
            this.btnOnlineReward.visible = !0, this.btnOnlineReward.scaleX = this.btnOnlineReward.scaleY = 2, Laya.Tween.to(this.btnOnlineReward, {
                scaleX: 1,
                scaleY: 1
            }, 300, Laya.Ease.linearIn, Laya.Handler.create(this, function() {
                e.onTweenDoubleBtn0()
            }))
        }, t.prototype.onTweenGoal0 = function() {
            Laya.timer.loop(500, this, function() {})
        }, t.prototype.showRankView = function() {
            var a = this;
            this.onRankInfo(), this.tfRank.visible = !1, this.tfScore.visible = !1, e.SoundManager.playSound("res/sounds/win.mp3"), 1 == GameBaseData.modelType ? (this.singleRank1.visible = !0, this.singleRank1.scaleY = .1, this.onSingleRankAction()) : (this.rank1.visible = !0, this.rank1.scaleY = .1, Laya.Tween.to(this.rank1, {
                scaleY: 1
            }, 300, Laya.Ease.expoOut, Laya.Handler.create(this, function() {
                a.rank2.visible = !0, a.rank2.scaleY = .1, Laya.Tween.to(a.rank2, {
                    scaleY: 1
                }, 300, Laya.Ease.expoOut, Laya.Handler.create(a, function() {
                    a.rank3.visible = !0, a.rank3.scaleY = .1, Laya.Tween.to(a.rank3, {
                        scaleY: 1
                    }, 300, Laya.Ease.expoOut, Laya.Handler.create(a, function() {
                        a.boxRank.visible = !0, a.boxRank.alpha = .1, Laya.Tween.to(a.boxRank, {
                            alpha: 1
                        }, 1e3, Laya.Ease.expoOut, Laya.Handler.create(a, function() {
                            e.TipDialog.can_subscribe && 0 == e.TipDialog.pushState && a._main.event(e.GameEvent.OPEN_TIP, 1), a.boxContinue.visible = !0, a.boxContinue.scaleX = .2, a.tfRank.visible = !0, Laya.Tween.to(a.boxContinue, {
                                scaleX: 1
                            }, 300, Laya.Ease.expoOut, Laya.Handler.create(a, function() {
                                a.onTweenHGBtn0(), a.showDoubleReward()
                            })), a.boxScore.visible = !0, a.boxScore.y = 870, a.boxScore.scaleX = a.boxScore.scaleY = .1, Laya.Tween.to(a.boxScore, {
                                scaleX: 1,
                                scaleY: 1
                            }, 500, Laya.Ease.expoOut, Laya.Handler.create(a, function() {
                                Laya.Tween.to(a.boxScore, {
                                    scaleX: 1,
                                    scaleY: 1
                                }, 500, Laya.Ease.expoOut, Laya.Handler.create(a, function() {
                                    a.boxScore.alpha = 1, Laya.Tween.to(a.boxScore, {
                                        alpha: 0
                                    }, 300, Laya.Ease.expoOut, Laya.Handler.create(a, function() {
                                        a.boxScore.visible = !1, a.IBest.visible = !0, a.tfBestScore1.visible = !0, a.tfBestScore2.visible = !0, Laya.Tween.to(a.IBest, {
                                            scaleX: 1,
                                            scaleY: 1
                                        }, 200, Laya.Ease.expoOut, Laya.Handler.create(a, function() {
                                            a.imgSuo.visible && e.GameData.instance.star >= e.GameConfig.UNLOCK_CAR_CONFIG[a.unLockCarId] && (a.imgSuo.visible = !1, e.GameData.instance.showSkinIndex = a.unLockCarId, a.onUnLockCarOpen(a.unLockCarId))
                                        }))
                                    }))
                                }))
                            }))
                        }))
                    }))
                }))
            })))
        }, t.prototype.setFBFriendList = function() {
            var a = this,
                t = 0,
                n = 0;
            0 == GameBaseData.modelType ? (t = e.GameData.instance.star, n = e.GameData.instance.record + 1) : (t = this._scoreModel2, n = 1), GameBaseData.upDataRank(t, n, GameBaseData.modelType, function() {
                GameBaseData.isDebug && console.log("更新分数完毕"), 1 == GameBaseData.modelType && a.upLoadFbRanks()
            })
        }, t.prototype.onBack = function() {
            this._main.event(e.GameEvent.BACK)
        }, t.prototype.onInvite = function() {
            GameBaseData.FBEventCar(32), GameBaseData.FBShareFriend_startGame(function() {
                GameBaseData.gameOverTurnFriend(e.GameData.instance.star, "MULTI")
            }, function() {})
        }, t.prototype.onUnLockShare = function() {
            if (GameBaseData.isFBSDK) {
                var e = {
                    contextType: 0,
                    contextID: null,
                    contextFromID: FBInstant.player.getID()
                };
                GameBaseData.FBShare(e, null), GameBaseData.FBEventCar(33), this.onUnLockClose()
            }
        }, t.prototype.onUnLockClose = function() {
            this.unlockCar.visible = !1, Laya.Tween.clearAll(this.uc_guang)
        }, t.prototype.onUnLockCarOpen = function(e) {
            var a = this;
            if (this.unlockCar.visible = !0, this.uc_car.skin = "index/c" + (e + 1) + ".png", this.uc_car.visible = !0, this.uc_car.scaleX = 2, this.uc_car.scaleY = 2, this.uc_guang.visible = !1, this._skeleton_unLock) {
                this._skeleton_unLock.visible = !0, this._skeleton_unLock.play("lock2", !1);
                var t = function() {
                    this.uc_share.visible = !0, this.uc_nothanks.visible = !0, Laya.Tween.to(this.uc_guang, {
                        rotation: this.uc_guang.rotation + 1
                    }, 1, Laya.Ease.linearIn, Laya.Handler.create(this, t))
                };
                setTimeout(function() {
                    a._skeleton_unLock.visible = !1, a.uc_guang.scaleX = .1, a.uc_guang.scaleY = .1, a.uc_guang.visible = !0, Laya.Tween.to(a.uc_guang, {
                        scaleX: 4,
                        scaleY: 4
                    }, 200, Laya.Ease.linearIn, Laya.Handler.create(a, t))
                }, 800)
            }
        }, t.prototype.onCloseRank = function() {
            this.showRankView()
        }, t.prototype.onRankInfo = function() {
            var e = null;
            if (0 == GameBaseData.modelType) {
                if (this.boxTop.visible = !0, this.singleMode.visible = !1, (e = GameBaseData.matchPlayerInfo).sort(this.compare("rank")), null == e || 0 == e.length) return
            } else if (this.boxTop.visible = !1, this.singleMode.visible = !0, null == (e = GameBaseData.allRank_model1) || 0 == e.length) return void(this.singleRank.visible = !1);
            console.log("overData=", e);
            for (var a = 0; a < 3; a++) {
                var t = null;
                if (t = 0 == GameBaseData.modelType ? this.boxRank.getChildByName("box" + a) : this.singleRank.getChildByName("box" + a), a < e.length) {
                    var n = t.getChildByName("rankImage"),
                        i = t.getChildByName("rankName");
                    n.skin = e[a].pic, i.text = e[a].name
                } else t.visible = !1
            }
        }, t.prototype.onSingleRankAction = function() {
            var a = this;
            Laya.Tween.to(this.singleRank1, {
                scaleY: 1
            }, 300, Laya.Ease.expoOut, Laya.Handler.create(this, function() {
                a.singleRank2.visible = !0, a.singleRank2.scaleY = .1, Laya.Tween.to(a.singleRank2, {
                    scaleY: 1
                }, 300, Laya.Ease.expoOut, Laya.Handler.create(a, function() {
                    a.singleRank3.visible = !0, a.singleRank3.scaleY = .1, Laya.Tween.to(a.singleRank3, {
                        scaleY: 1
                    }, 300, Laya.Ease.expoOut, Laya.Handler.create(a, function() {
                        a.singleRank.visible = !0, a.singleRank.alpha = .1;
                        var t = function() {
                            e.TipDialog.can_subscribe && 0 == e.TipDialog.pushState && a._main.event(e.GameEvent.OPEN_TIP, 1), a.boxContinue.visible = !0, a.boxContinue.scaleX = .2, a.tfRank.visible = !0, Laya.Tween.to(a.boxContinue, {
                                scaleX: 1
                            }, 300, Laya.Ease.expoOut, Laya.Handler.create(a, function() {
                                a.onTweenHGBtn0(), a.showDoubleReward()
                            })), a.boxScore.visible = !0, a.boxScore.y = 870, a.boxScore.scaleX = a.boxScore.scaleY = .1, Laya.Tween.to(a.boxScore, {
                                scaleX: 1,
                                scaleY: 1
                            }, 500, Laya.Ease.expoOut, Laya.Handler.create(a, function() {
                                Laya.Tween.to(a.boxScore, {
                                    scaleX: 1,
                                    scaleY: 1
                                }, 500, Laya.Ease.expoOut, Laya.Handler.create(a, function() {
                                    a.boxScore.alpha = 1, Laya.Tween.to(a.boxScore, {
                                        alpha: 0
                                    }, 300, Laya.Ease.expoOut, Laya.Handler.create(a, function() {
                                        a.boxScore.visible = !1, a.IBest.visible = !0, a.tfBestScore1.visible = !0, a.tfBestScore2.visible = !0, Laya.Tween.to(a.IBest, {
                                            scaleX: 1,
                                            scaleY: 1
                                        }, 200, Laya.Ease.expoOut, Laya.Handler.create(a, function() {
                                            a.imgSuo.visible && e.GameData.instance.star >= e.GameConfig.UNLOCK_CAR_CONFIG[a.unLockCarId] && (a.imgSuo.visible = !1, e.GameData.instance.showSkinIndex = a.unLockCarId, a.onUnLockCarOpen(a.unLockCarId))
                                        }))
                                    }))
                                }))
                            }))
                        };
                        null == GameBaseData.allRank_model1 || 0 == GameBaseData.allRank_model1.length ? (a.singleRank.visible = !1, t()) : Laya.Tween.to(a.singleRank, {
                            alpha: 1
                        }, 1e3, Laya.Ease.expoOut, Laya.Handler.create(a, function() {
                            t()
                        }))
                    }))
                }))
            }))
        }, t.prototype.onRankWorld = function() {
            0 != this._RankType && this.setRankType(!0)
        }, t.prototype.onRankFriend = function() {
            1 != this._RankType && this.setRankType(!1)
        }, t.prototype.setRankType = function(e) {
            var a = this.rankWorld.getChildByName("off");
            a.visible = !e, (a = this.rankWorld.getChildByName("offL")).visible = !e, (a = this.rankWorld.getChildByName("on")).visible = e, (a = this.rankWorld.getChildByName("onL")).visible = e, (a = this.rankFriend.getChildByName("off")).visible = e, (a = this.rankFriend.getChildByName("offL")).visible = e, (a = this.rankFriend.getChildByName("on")).visible = !e, (a = this.rankFriend.getChildByName("onL")).visible = !e, this._RankType = e ? 0 : 1, this.upDataRankUI(e, !1, !1), GameBaseData.isDebug && console.log(e, !1)
        }, t.prototype.onCloseAllRankList = function() {
            this.boxSRank.visible = !1
        }, t.prototype.onShowRankList = function() {
            this.boxSRank.visible = !0, this.upDataRankUI(0 == this._RankType, !1, !1)
        }, t.prototype.upLoadFbRanks = function() {
            var e = this;
            GameBaseData.getRankList_mode1(function() {
                0 == e._RankType && (e._datas = GameBaseData.allRank_model1, e.longRankList.array = new Array(e._datas.length), e.longRankList.scrollTo(0))
            }, function() {}), GameBaseData.getFriendList_mode1(function() {
                0 == e._RankType || (e._datas = GameBaseData.friendRank_model1, e.longRankList.array = new Array(e._datas.length), e.longRankList.scrollTo(0), e.upDataMyRankUI(e._RankType))
            }, function() {}), GameBaseData.getMyRank_mode1(function() {
                e.upDataMyRankUI(e._RankType)
            }, null)
        }, t.prototype.upDataRankUI = function(e, a, t) {
            var n = this;
            if (e) {
                if (t || null == GameBaseData.allRank_model1 || 0 == GameBaseData.allRank_model1.length) {
                    return void GameBaseData.getRankList_mode1(function() {
                        n._datas = GameBaseData.allRank_model1, n.longRankList.array = new Array(n._datas.length), n.longRankList.scrollTo(0)
                    }, function() {})
                }
                this._datas = GameBaseData.allRank_model1
            } else {
                if (t || null == GameBaseData.friendRank_model1 || 0 == GameBaseData.friendRank_model1.length) {
                    return void GameBaseData.getFriendList_mode1(function() {
                        n._datas = GameBaseData.friendRank_model1, n.longRankList.array = new Array(n._datas.length), n.longRankList.scrollTo(0)
                    }, function() {})
                }
                this._datas = GameBaseData.friendRank_model1
            }
            this.longRankList.array = new Array(this._datas.length), this.longRankList.scrollTo(0), a || this.upDataMyRankUI(e)
        }, t.prototype.upDataMyRankUI = function(a) {
            var t = this,
                n = null;
            if (a) {
                if (null == GameBaseData.myRank_model1) return void GameBaseData.getMyRank_mode1(function() {
                    t.upDataMyRankUI(!0)
                }, function() {});
                n = GameBaseData.myRank_model1
            } else {
                if (null == GameBaseData.myRank_friend_model1) return;
                n = GameBaseData.myRank_friend_model1
            }
            this.myRank.rRank.text = "" + (n.rank + 1), this.myRank.rHead.skin = n.pic, this.myRank.rName.text = n.name, this.myRank.rScore.text = n.score, n.eData && n.eData.level && (this.myRank.rLevel.text = "level-" + n.eData.level, e.GameData.instance.record < parseInt(n.eData.level) - 2 && (e.GameData.instance.record = parseInt(n.eData.level) - 1), e.GameData.instance.star < parseInt(n.score) - 170 && (e.GameData.instance.star = parseInt(n.score)));
            for (var i = GameBaseData.getScoreToDW(n.score), o = 0; o < 6; o++) this.myRank.duanwei.getChildAt(o).visible = o == i;
            this.myRank.rankBtn.visible = 0 != this._RankType, this.myRank.rankPlay.visible = !1, !this.myRank.rankBtn.clickHandler && GameBaseData.myRank_friend_model1 && (this.myRank.rankBtn.clickHandler = Laya.Handler.create(this, this.onRankBtnPlay_rdata, [GameBaseData.myRank_friend_model1], !1)), 1 == GameBaseData.modelType && (this.myRank.rLevel.visible = !1, this.myRank.duanwei.visible = !1, this.myRank.starBg.visible = !1, this.myRank.rScore.text = this.myRank.rScore.text + "m", this.myRank.rScore.x = 483, this.myRank.rName.y = 50)
        }, t.prototype.onLongRankItem = function(e, a) {
            if (null != e && null != e && null != this._datas) {
                var t = this._datas[a];
                e.rHead.skin = null, e.rHead.skin = t.pic, e.rName.text = t.name, e.rRank.text = "" + (t.rank + 1), e.rScore.text = t.score, t.eData && t.eData.level && (e.rLevel.text = "Level-" + t.eData.level);
                for (var n = GameBaseData.getScoreToDW(t.score), i = 0; i < 6; i++) e.duanwei.getChildAt(i).visible = i == n;
                (t.rank + 1) % 2 == 0 ? e.otherBg.visible = !0 : e.otherBg.visible = !1, e.rankBtn.clickHandler && e.rankBtn.clickHandler.recover(), e.rankBtn.clickHandler = Laya.Handler.create(this, this.onRankBtnPlay, [a], !1), e.rankBtn.visible = 0 != this._RankType, t.uuid == GameBaseData.UID ? (e.rankPlay.visible = !1, e.rankShare.visible = !0) : (e.rankPlay.visible = !0, e.rankShare.visible = !1), 1 == GameBaseData.modelType && (e.rLevel.visible = !1, e.duanwei.visible = !1, e.starBg.visible = !1, e.rScore.text = e.rScore.text + "m", e.rScore.x = 483, e.rName.y = 50)
            }
        }, t.prototype.onRankBtnPlay = function(e) {
            var a = this._datas[e];
            this.onRankBtnPlay_rdata(a)
        }, t.prototype.onRankBtnPlay_rdata = function(a) {
            var t = this;
            if (GameBaseData.isDebug && console.log("排行榜点击"), a.uuid == GameBaseData.UID) {
                if (GameBaseData.isFBSDK) {
                    var n = {
                        contextType: 0,
                        contextID: null,
                        contextFromID: FBInstant.player.getID()
                    };
                    GameBaseData.FBShare(n, null), GameBaseData.FBEventCar(20)
                }
            } else {
                GameBaseData.PKFriend(a.uuid, function() {
                    GameBaseData.FBEventCar(19), console.log("pk 成功开始游戏"), t._main.event(e.GameEvent.START_AGAIN)
                })
            }
            GameBaseData.isDebug && console.log(a)
        }, t.prototype.compare = function(e) {
            return function(a, t) {
                return a[e] - t[e]
            }
        }, t.REVIVE_COUNTDOWN = 10, t.REVIVING_COUNTDOWN = 3, t
    }(ui.GameViewUI);
    e.GameView = a
}(touch || (touch = {}));