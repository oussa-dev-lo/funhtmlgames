var touch, __extends = this && this.__extends || function() {
    var t = function(n, e) {
        return (t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, n) {
                t.__proto__ = n
            } || function(t, n) {
                for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
            })(n, e)
    };
    return function(n, e) {
        function o() {
            this.constructor = n
        }
        t(n, e), n.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
    }
}();
! function(t) {
    var n = function(t) {
        function n(n) {
            var e = t.call(this) || this;
            return e._main = null, e._tipType = 0, e.can_close = !1, e._main = n, e
        }
        return __extends(n, t), n.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        }, n.prototype.onSetType = function(t) {
            this._tipType = t, this.close(), this.onClickGet()
        }, n.prototype.onTweenGetBtn0 = function() {}, n.prototype.onTweenGetBtn1 = function() {}, n.prototype.onClickGet = function() {
            if (GameBaseData.isFBSDK)
                if (this._tipType < 3 || 4 == this._tipType) {
                    n.pushState = 1, this.can_close = !0;
                    var t = this;
                    FBInstant.player.canSubscribeBotAsync().then(function(n) {
                        n && FBInstant.player.subscribeBotAsync().then(function() {
                            FBInstant.logEvent("subscribe_created"), t.close()
                        }).catch(function(n) {
                            FBInstant.logEvent("subscribe_createdNot"), t.close()
                        })
                    })
                } else {
                    n.homeScreenState = 1, this.can_close = !0;
                    var e = this;
                    FBInstant.canCreateShortcutAsync().then(function(t) {
                        t && FBInstant.createShortcutAsync().then(function() {
                            FBInstant.logEvent("shortcut_created"), e.close()
                        }).catch(function(t) {
                            FBInstant.logEvent("shortcut_createdNot"), e.close()
                        })
                    })
                }
            else this.can_close = !0
        }, n.prototype.onClickClose = function() {
            this.can_close && (this.can_close = !1, this.close())
        }, n.prototype.doReward = function(t) {}, n.init = function() {
            n.isInit || (n.isInit = !0, n.pushState = 0, n.homeScreenState = 0, GameBaseData.isFBSDK && (FBInstant.player.canSubscribeBotAsync().then(function(t) {
                GameBaseData.isDebug && console.log("can_subscribe==========" + t), n.can_subscribe = t, FBInstant.logEvent("subscribe_" + t)
            }), FBInstant.canCreateShortcutAsync().then(function(t) {
                GameBaseData.isDebug && console.log("canCreateShortcut===========" + t), n.canCreateShortcut = t, FBInstant.logEvent("shortcut_" + t);
                var e = FBInstant.getPlatform();
                n.canCreateShortcut && "IOS" == e && (n.canCreateShortcut = !1, FBInstant.logEvent("ios_shortcut_Close"))
            })))
        }, n.isInit = !1, n.can_subscribe = !1, n.pushState = 0, n.canCreateShortcut = !1, n.homeScreenState = 0, n.pushFriendRank = 0, n.pushGetGift = 0, n.gameTimes = 0, n.gameTimesCancel = 0, n
    }(ui.TipDialogUI);
    t.TipDialog = n
}(touch || (touch = {}));