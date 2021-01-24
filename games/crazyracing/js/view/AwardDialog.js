var touch, __extends = this && this.__extends || function() {
    var a = function(e, t) {
        return (a = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(a, e) {
                a.__proto__ = e
            } || function(a, e) {
                for (var t in e) e.hasOwnProperty(t) && (a[t] = e[t])
            })(e, t)
    };
    return function(e, t) {
        function i() {
            this.constructor = e
        }
        a(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    }
}();
! function(a) {
    var e = function(e) {
        function t(t) {
            var i = e.call(this) || this;
            return i._main = null, i._onlineRemainingTime = 0, i.onlineGiftIndex = 0, i.videoType = -1, i._main = t, i.btnClose.clickHandler = Laya.Handler.create(i, i.onClickClose, null, !1), i.btnAward00.clickHandler = Laya.Handler.create(i, i.onClickAward00, null, !1), i.btnAward11.clickHandler = Laya.Handler.create(i, i.onClickAward11, null, !1), i.btnAward22.clickHandler = Laya.Handler.create(i, i.onClickAward22, null, !1), i.updateOnlineReward(), i.videoType = GameBaseData.getVideoFlag(0), i.imgCar.visible = !1, 1 == a.GameData.instance.getLoginCar() && (i.imgCar.visible = !0, i.carImgMove()), i
        }
        return __extends(t, e), t.prototype.updateOnlineReward = function() {
            this.btnAward0.visible = !0, this.btnAward00.visible = !1, this.tfDiamond.text = a.GameData.instance.diamond.toString(), this.txtAward1.text = "Tomorrow";
            for (var e = a.GameData.instance.onlineIndex, i = 0; i < a.GameConfig.ONLINE_GIFT.length; i++) {
                var n = a.GameConfig.ONLINE_GIFT[i];
                if (!(n.index <= e)) {
                    this.onlineGiftIndex = n.index, n.time <= a.GameData.instance.onlineTime ? (this.btnAward0.visible = !1, this.btnAward00.visible = !0) : (this._onlineRemainingTime = n.time - a.GameData.instance.onlineTime, this.txtAward0.text = a.TimeUtil.getHourMinuteSecond(1e3 * this._onlineRemainingTime), Laya.timer.clear(this, this.timeLoop), Laya.timer.loop(1e3, this, this.timeLoop));
                    break
                }
            }
            a.GameData.instance.dailyVaild ? (this.btnAward1.visible = !1, this.btnAward11.visible = !0) : (this.btnAward1.visible = !0, this.btnAward11.visible = !1), t.friendNums > 4 ? (this.btnAward2.visible = !0, this.btnAward22.visible = !1) : (this.btnAward2.visible = !1, this.btnAward22.visible = !0)
        }, t.prototype.carImgMove = function() {
            var a = this,
                e = function() {
                    Laya.Tween.to(a.imgCar, {
                        y: a.imgCar.y - 30
                    }, 600, null, Laya.Handler.create(a, t))
                },
                t = function() {
                    Laya.Tween.to(a.imgCar, {
                        y: a.imgCar.y + 30
                    }, 600, null, Laya.Handler.create(a, e))
                };
            Laya.Tween.to(this.imgCar, {
                y: this.imgCar.y + 30
            }, 600, null, Laya.Handler.create(this, e))
        }, t.prototype.destroy = function() {
            null != this.btnClose.clickHandler && (this.btnClose.clickHandler.recover(), this.btnClose.clickHandler = null), null != this.btnAward00.clickHandler && (this.btnAward00.clickHandler.recover(), this.btnAward00.clickHandler = null), null != this.btnAward11.clickHandler && (this.btnAward11.clickHandler.recover(), this.btnAward11.clickHandler = null), null != this.btnAward22.clickHandler && (this.btnAward22.clickHandler.recover(), this.btnAward22.clickHandler = null), e.prototype.destroy.call(this)
        }, t.prototype.timeLoop = function() {
            this._onlineRemainingTime--, this.txtAward0.text = a.TimeUtil.getHourMinuteSecond(1e3 * this._onlineRemainingTime), this._onlineRemainingTime <= 0 && (Laya.timer.clear(this, this.timeLoop), this.updateOnlineReward())
        }, t.prototype._watchVideoDia = function() {
            var a = this,
                e = GameBaseData.getVideoFlag(1);
            if (e < 0) return GameBaseData.FBEventCar(39), GameBaseData.isDebug && console.log("无广告！"), void a.getMyDia();
            GameBaseData.FBEventCar(34), e >= 10 ? GameBaseData.PlayCPGG2(function() {}, function() {
                GameBaseData.watchVideo = 1, GameBaseData.FBEventCar(35), a.getMyDia()
            }, function() {
                GameBaseData.FBEventCar(36), a.getMyDia()
            }, function() {
                GameBaseData.FBEventCar(36), a.getMyDia()
            }) : GameBaseData.playVideo2(function() {
                GameBaseData.watchVideo = 1, GameBaseData.FBEventCar(37), a.getMyDia()
            }, function() {
                GameBaseData.FBEventCar(38), a.getMyDia()
            }, function() {
                GameBaseData.FBEventCar(38), a.getMyDia()
            }, function() {})
        }, t.prototype.getMyDia = function() {
            a.GameData.instance.setAddDiamond(100), a.GameData.instance.onlineIndex = this.onlineGiftIndex, a.Notice.show("Successful get 100 diamonds."), this.updateOnlineReward()
        }, t.prototype.onClickAward00 = function() {
            GameBaseData.isFBSDK ? this._watchVideoDia() : this.getMyDia()
        }, t.prototype.onClickAward11 = function() {
            GameBaseData.FBEventCar(41), a.GameData.instance.setAddDiamond(200), a.Notice.show("Successful get 200 diamonds."), a.GameData.instance.addVideoNum(20, 0, 1), a.GameData.instance.dailyVaild && 1 == a.GameData.instance.getLoginCar() && (a.GameData.instance.setLoginCar(2), this.imgCar.visible = !1), a.GameData.instance.dailyVaild = !1, this.updateOnlineReward(), 0 == a.GameData.instance.getLoginCar() && (this.imgCar.visible = !0, this.carImgMove(), a.GameData.instance.setLoginCar(1))
        }, t.prototype.onClickAward22 = function() {
            GameBaseData.FBEventCar(40), GameBaseData.FBShareFriend_startGame(function() {
                a.GameData.instance.setAddDiamond(100), a.Notice.show("Successful get 100 diamonds."), GameBaseData.gameOverTurnFriend(a.GameData.instance.star, "MULTI")
            }, function() {})
        }, t.prototype.onClickClose = function() {
            this.close()
        }, t.isFromAward = !1, t.friendNums = 0, t
    }(ui.AwardDialogUI);
    a.AwardDialog = e
}(touch || (touch = {}));