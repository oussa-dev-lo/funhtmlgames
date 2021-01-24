var GameBaseData = function() {
        function e() {}
        return e.upDataRank = function(n, t, a, o) {
            if (e.isFBSDK) {
                var i = "";
                0 == a ? i = "ballRank" : 1 == a ? i = "ballRankM1" : a > 1 && (i = "ballRankM2"), FBInstant.getLeaderboardAsync(i).then(function(e) {
                    var a = {
                            level: t
                        },
                        o = JSON.stringify(a);
                    return e.setScoreAsync(n, o)
                }).then(function(n) {
                    e.isDebug && (console.log(i + " has update"), console.log(n.getScore())), o && o()
                }).catch(function(n) {
                    e.isDebug && console.log(n)
                })
            } else this.isDebug && console.log("upDataRank" + n), o && o()
        }, e.initGameLv = function() {
            this.gameLvInit
        }, e.getMyRank = function(n, t) {
            if (e.isFBSDK) {
                var a = this;
                FBInstant.getLeaderboardAsync("ballRank").then(function(e) {
                    e.getEntryCountAsync().then(function(e) {
                        a.isDebug && console.log("获取BallRank  =getMyRank Count= " + e)
                    }), e.getPlayerEntryAsync().then(function(e) {
                        var t = new RankObj;
                        t.rank = e.getRank() - 1, t.name = e.getPlayer().getName(), t.uuid = e.getPlayer().getID(), t.pic = e.getPlayer().getPhoto(), t.score = e.getScore() + "";
                        var o = e.getExtraData();
                        o && o.length > 0 && (o = JSON.parse(o), t.eData = o), a.myRank = t, n && n()
                    })
                }).catch(function(e) {
                    t && t(), console.error(e)
                })
            } else {
                var o = new RankObj;
                o.rank = 0, o.name = "我的名称B", o.uuid = "i=1", o.pic = "head/1.png", o.score = "100", o.eData = {
                    level: 999
                }, this.myRank = o, n && n()
            }
        }, e.getRankList = function(n, t, a) {
            if (e.isFBSDK) {
                var o = this;
                FBInstant.getLeaderboardAsync("ballRank").then(function(n) {
                    n.getEntryCountAsync().then(function(e) {
                        o.isDebug && console.log("获取BallRank  =getRankList Count= " + e)
                    }), n.getEntriesAsync(30, 0).then(function(n) {
                        var a = [];
                        n.forEach(function(e) {
                            var n = new RankObj;
                            n.rank = e.getRank() - 1, n.name = e.getPlayer().getName(), n.uuid = e.getPlayer().getID(), n.pic = e.getPlayer().getPhoto(), n.score = e.getScore() + "";
                            var t = e.getExtraData();
                            t && t.length > 0 && (t = JSON.parse(t), n.eData = t), a.push(n)
                        }, o), o.allRank = a, "2254999487900523" == e.UID && (console.log("多人世界排行"), console.log(a)), t && t()
                    })
                }).catch(function(e) {
                    a && a(), console.error(e)
                })
            } else {
                for (var i = [], s = 0; s < 6; s++) {
                    var r = new RankObj;
                    r.rank = s, r.name = "世界名称" + s, r.uuid = "1000" + s, r.pic = "head/" + (s + 1) + ".png", r.score = 100 - 15 * s + "", r.eData = {
                        level: 888
                    }, i.push(r)
                }
                this.allRank = i, t && t()
            }
        }, e.getFriendList = function(n, t, a) {
            if (e.isFBSDK) {
                var o = this;
                FBInstant.getLeaderboardAsync("ballRank").then(function(n) {
                    n.getEntryCountAsync().then(function(e) {
                        o.isDebug && console.log("获取BallRank  =getRankList Count= " + e)
                    }), n.getConnectedPlayerEntriesAsync(30, 0).then(function(n) {
                        var a = [];
                        n.forEach(function(n) {
                            var t = new RankObj;
                            t.rank = n.getRank() - 1, t.name = n.getPlayer().getName(), t.uuid = n.getPlayer().getID(), t.pic = n.getPlayer().getPhoto(), t.score = n.getScore() + "";
                            var i = n.getExtraData();
                            i && i.length > 0 && (i = JSON.parse(i), t.eData = i), t.uuid == e.UID && (o.myRank_friend = t), a.push(t)
                        }, o), o.friendRank = a, o.friendRank && o.friendRank.length > 0 && (o.friendRank.length < 2 ? FBInstant.logEvent("Friend0") : o.friendRank.length < 3 ? FBInstant.logEvent("Friend1") : o.friendRank.length < 4 ? FBInstant.logEvent("Friend2") : o.friendRank.length < 5 ? FBInstant.logEvent("Friend3") : o.friendRank.length < 6 ? FBInstant.logEvent("Friend4") : o.friendRank.length < 7 ? FBInstant.logEvent("Friend5") : o.friendRank.length < 12 ? FBInstant.logEvent("Friend6-10") : o.friendRank.length < 22 ? FBInstant.logEvent("Friend11-20") : FBInstant.logEvent("Friend20+")), t && t()
                    })
                }).catch(function(e) {
                    a && a(), console.error(e)
                })
            } else {
                for (var i = [], s = 0; s < 6; s++) {
                    var r = new RankObj;
                    r.rank = s, r.name = "好友名称" + s, r.uuid = "1000" + s, r.pic = "head/" + (s + 6) + ".png", r.score = 1e4 - 15 * s + "", r.eData = {
                        level: 777
                    }, i.push(r)
                }
                this.myRank_friend = i[1], this.friendRank = i, this.UID = this.myRank_friend.uuid, t && t()
            }
        }, e.getMyRank_mode1 = function(n, t) {
            if (e.isFBSDK) {
                var a = this;
                FBInstant.getLeaderboardAsync("ballRankM1").then(function(e) {
                    e.getEntryCountAsync().then(function(e) {
                        a.isDebug && console.log("获取BallRankM1  =getMyRank_mode1 Count= " + e)
                    }), e.getPlayerEntryAsync().then(function(e) {
                        var t = new RankObj;
                        t.rank = e.getRank() - 1, t.name = e.getPlayer().getName(), t.uuid = e.getPlayer().getID(), t.pic = e.getPlayer().getPhoto(), t.score = e.getScore() + "";
                        var o = e.getExtraData();
                        o && o.length > 0 && (o = JSON.parse(o), t.eData = o), a.myRank_model1 = t, n && n()
                    })
                }).catch(function(e) {
                    t && t(), console.error(e)
                })
            } else {
                var o = new RankObj;
                o.rank = 0, o.name = "单人我的名称B", o.uuid = "i=1", o.pic = "head/1.png", o.score = "100", o.eData = {
                    level: 999
                }, n && n()
            }
        }, e.getRankList_mode1 = function(n, t) {
            if (e.isFBSDK) {
                var a = this;
                FBInstant.getLeaderboardAsync("ballRankM1").then(function(t) {
                    t.getEntryCountAsync().then(function(e) {
                        a.isDebug && console.log("获取BallRankM1  =getRankList Count= " + e)
                    }), t.getEntriesAsync(30, 0).then(function(t) {
                        var o = [];
                        t.forEach(function(e) {
                            var n = new RankObj;
                            n.rank = e.getRank() - 1, n.name = e.getPlayer().getName(), n.uuid = e.getPlayer().getID(), n.pic = e.getPlayer().getPhoto(), n.score = e.getScore() + "";
                            var t = e.getExtraData();
                            t && t.length > 0 && (t = JSON.parse(t), n.eData = t), o.push(n)
                        }, a), a.allRank_model1 = o, "2254999487900523" == e.UID && (console.log("多人世界排行"), console.log(o)), n && n()
                    })
                }).catch(function(e) {
                    t && t(), console.error(e)
                })
            } else {
                for (var o = [], i = 0; i < 6; i++) {
                    var s = new RankObj;
                    s.rank = i, s.name = "单人世界名称" + i, s.uuid = "1000" + i, s.pic = "head/" + (i + 1) + ".png", s.score = 100 - 15 * i + "", s.eData = {
                        level: 888
                    }, o.push(s)
                }
                n && n()
            }
        }, e.getFriendList_mode1 = function(n, t) {
            if (e.isFBSDK) {
                var a = this;
                FBInstant.getLeaderboardAsync("ballRankM1").then(function(t) {
                    t.getEntryCountAsync().then(function(e) {
                        a.isDebug && console.log("获取BallRankM1  =getFriendList_mode1 Count= " + e)
                    }), t.getConnectedPlayerEntriesAsync(30, 0).then(function(t) {
                        var o = [];
                        t.forEach(function(n) {
                            var t = new RankObj;
                            t.rank = n.getRank() - 1, t.name = n.getPlayer().getName(), t.uuid = n.getPlayer().getID(), t.pic = n.getPlayer().getPhoto(), t.score = n.getScore() + "";
                            var i = n.getExtraData();
                            i && i.length > 0 && (i = JSON.parse(i), t.eData = i), t.uuid == e.UID && (a.myRank_friend_model1 = t), o.push(t)
                        }, a), a.friendRank_model1 = o, n && n()
                    })
                }).catch(function(e) {
                    t && t(), console.error(e)
                })
            } else {
                for (var o = [], i = 0; i < 6; i++) {
                    var s = new RankObj;
                    s.rank = i, s.name = "单人好友名称" + i, s.uuid = "1000" + i, s.pic = "head/" + (i + 6) + ".png", s.score = 1e4 - 15 * i + "", s.eData = {
                        level: 777
                    }, o.push(s)
                }
                n && n()
            }
        }, e.getSupportedAPIs = function() {
            var e = FBInstant.getSupportedAPIs();
            if (this.isDebug && (console.log(e), console.log("myapi=" + e.length)), e)
                for (n = 0; n < e.length; n++)
                    if (this.isRewardedVideoAsync = !1, e[n].indexOf("getRewardedVideoAsync") >= 0) {
                        this.isRewardedVideoAsync = !0, this.isDebug && console.log("isRewardedVideoAsync=true");
                        break
                    }
            if (e)
                for (var n = 0; n < e.length; n++)
                    if (this.isInterstitialAdAsync = !1, e[n].indexOf("getInterstitialAdAsync") >= 0) {
                        this.isInterstitialAdAsync = !0, this.isDebug && console.log("isInterstitialAdAsync=true");
                        break
                    }
        }, e.getMatchData = function() {
            if (this.matchPlayerInfo = [], this.isFBSDK) {
                (o = new RankObj).uuid = FBInstant.player.getID(), o.name = FBInstant.player.getName(), o.pic = FBInstant.player.getPhoto(), o.rank = 0, this.matchPlayerInfo.push(o);
                i = null;
                if (null != this.friendRank && this.friendRank.length > 1) {
                    if (s = (s = Math.floor(Math.random() * this.friendRank.length) + 1) > 2 ? 2 : s, (i = this.getRandomPlayerInfo(s, this.friendRank, null)).length > 0)
                        for (t = 0; t < i.length; t++) this.matchPlayerInfo.push(i[t])
                }
                if (null != this.allRank && this.allRank.length > 0) {
                    e = touch.GameDefine.AI_COUNT + 1;
                    if ((r = this.getRandomPlayerInfo(e, this.allRank, i)).length > 0)
                        for (t = 0; t < r.length; t++) this.matchPlayerInfo.push(r[t])
                }
                if (this.matchPlayerInfo.length > touch.GameDefine.AI_COUNT + 1) {
                    l = this.matchPlayerInfo.length - touch.GameDefine.AI_COUNT + 1;
                    this.matchPlayerInfo.splice(touch.GameDefine.AI_COUNT + 1, l)
                } else {
                    for (var e = touch.GameDefine.AI_COUNT + 1 - this.matchPlayerInfo.length, n = [], t = 1; t <= 12; t++) n.push(t);
                    for (var a = Math.floor(Math.random() * (12 - e)), t = 0; t < e; t++) {
                        (c = new RankObj).uuid = "1000" + a, c.name = this.getRandomName();
                        g = a + t;
                        c.pic = "head/" + g + ".png", c.rank = t, this.matchPlayerInfo.push(c)
                    }
                }
            } else {
                var o = new RankObj;
                o.uuid = this.UID, o.name = "我自己", o.rank = 0, o.pic = "head/1.png", this.matchPlayerInfo.push(o);
                var i = null;
                if (null != this.friendRank && this.friendRank.length > 1) {
                    var s = Math.floor(Math.random() * this.friendRank.length) + 1;
                    if (s = s > 2 ? 2 : s, (i = this.getRandomPlayerInfo(s, this.friendRank, null)).length > 0)
                        for (t = 0; t < i.length; t++) this.matchPlayerInfo.push(i[t].copy())
                }
                if (null != this.allRank && this.allRank.length > 0) {
                    var e = touch.GameDefine.AI_COUNT + 1,
                        r = this.getRandomPlayerInfo(e, this.allRank, i);
                    if (r.length > 0)
                        for (t = 0; t < r.length; t++) this.matchPlayerInfo.push(r[t].copy())
                }
                if (this.matchPlayerInfo.length > touch.GameDefine.AI_COUNT + 1) {
                    var l = this.matchPlayerInfo.length - touch.GameDefine.AI_COUNT + 1;
                    this.matchPlayerInfo.splice(touch.GameDefine.AI_COUNT + 1, l)
                } else {
                    for (var e = touch.GameDefine.AI_COUNT + 1 - this.matchPlayerInfo.length, n = [], t = 1; t <= 12; t++) n.push(t);
                    for (var a = Math.floor(Math.random() * (12 - e)), t = 0; t < e; t++) {
                        var c = new RankObj;
                        c.uuid = "1000" + t, c.name = this.getRandomName();
                        var g = a + t;
                        c.pic = "head/" + g + ".png", c.rank = t, this.matchPlayerInfo.push(c)
                    }
                }
            }
            return this.matchPlayerInfo
        }, e.getRandomPlayerInfo = function(e, n, t) {
            for (var a = n.length, o = [], i = [], s = 0; s < a; s++) o.push(s);
            for (var r = [], s = 0; s < e; s++)
                if (s < a) {
                    var l = Math.floor(Math.random() * o.length),
                        c = o[l];
                    o.splice(l, 1), r.push(c)
                }
            for (s = 0; s < r.length; s++) {
                var g = n[r[s]];
                g.uuid != this.UID && (t && t.length > 0 ? this.getIsFindPlayInfo(g.uuid, t) || i.push(g) : i.push(g))
            }
            return i
        }, e.getIsFindPlayInfo = function(e, n) {
            for (var t = 0; t < n.length; t++)
                if (n[t].uuid == e) return !0;
            return !1
        }, e.setAddUidToShare = function(e, n) {
            var t = !1,
                a = this.rankUidToShare;
            if (1 == n && (a = this.rankUidToShareModel1), 0 == a.length) a.push(e), t = !0;
            else {
                for (var o = !1, i = 0; i < a.length; i++)
                    if (a[i] === e) {
                        o = !0;
                        break
                    }
                o || (a.push(e), t = !0)
            }
            return t
        }, e.getRankUidToShareString = function(e) {
            return 0 == e ? this.rankUidToShare.toString() : this.rankUidToShareModel1.toString()
        }, e.clearUidToShare = function() {
            this.rankUidToShare = [], this.rankUidToShareModel1 = []
        }, e.getUidIsShare = function(e, n) {
            var t = this.rankUidToShare;
            1 == n && (t = this.rankUidToShareModel1);
            for (var a = 0, o = t.length; a < o; a++)
                if (t[a] === e) return !0;
            return !1
        }, e.getScoreToDW = function(e) {
            for (var n = 0, t = touch.GameConfig.UNLOCK_DUANWEI_CONFIG.length - 1; t >= 0; t--)
                if (e >= touch.GameConfig.UNLOCK_DUANWEI_CONFIG[t]) {
                    n = t;
                    break
                }
            return n
        }, e.getGG = function() {
            if (this.isFBSDK && this.isRewardedVideoAsync) {
                var n = this;
                n.GGState <= -1 && (FBInstant.logEvent("AdsStart_" + this.GGIndex), n.GG = null, FBInstant.getRewardedVideoAsync(n.GGID[n.GGIndex]).then(function(t) {
                    return n.GG = t, n.GGState = 1, e.isDebug && console.log("成功获取广告信息,开始载入GG" + n.GGIndex), FBInstant.logEvent("AdsSuc_" + n.GGIndex), n.GG.loadAsync()
                }).then(function() {
                    n.GGState = 2, n.GGErrtimes = 0, FBInstant.logEvent("AdsCom_" + n.GGIndex), e.isDebug && console.log("广告载入完成GG" + n.GGIndex)
                }).catch(function(t) {
                    e.isDebug && (console.log("广告载入失败GG" + n.GGIndex + "报错信息:"), console.log(t.message)), FBInstant.logEvent("AdsFail_" + n.GGIndex), n.GGErrtimes++, n.GGErrtimes > 2 && ((new Date).getTime() - n.GGPlayTime) / 1e3 < 30 ? (n.GGState = -1, n.nextAdsIndex()) : (n.GGState = -1, n.nextAdsIndex(), n.getGG()), n.GGPlayTime = (new Date).getTime()
                }))
            }
        }, e.nextAdsIndex = function() {
            this.GGIndex++, this.GGIndex > 2 && (this.GGIndex = 0)
        }, e.nextCPAdsIndex = function() {
            this.CPGGIndex++, this.CPGGIndex > 2 && (this.CPGGIndex = 0)
        }, e.initVideo = function() {
            if (e.isFBSDK) {
                "WEB" != FBInstant.getPlatform() && (this.getSupportedAPIs(), this.getGG())
            }
        }, e.initCPVideo = function() {
            e.isFBSDK && (this.getSupportedAPIs(), this.CPGGInit())
        }, e.getVideoFlag = function(e) {
            if (3 == e) {
                if (2 == this.CPGGState) return 11;
                if (2 == this.GGState) return 0
            } else {
                if (2 == this.GGState) return 0;
                if (2 == this.CPGGState) return 11
            }
            return this.initVideo(), this.initCPVideo(), -1
        }, e.playVideo2 = function(n, t, a, o) {
            if (this.isFBSDK) {
                var i = this;
                if (2 != this.GGState) return e.isDebug && console.log("广告正在加载中GG" + i.GGIndex + "  state=" + this.GGState), a && a(), void i.initVideo();
                o && o(), this.GG.showAsync().then(function() {
                    n && n(), e.isDebug && console.log("广告成功播放GG" + i.GGIndex), i.GGState = -1, i.nextAdsIndex(), i.initVideo()
                }).catch(function(n) {
                    e.isDebug && (console.log("广告播放失败GG" + i.GGIndex), console.log(n)), t && t(), i.GGState = -1, i.nextAdsIndex(), i.initVideo()
                })
            }
        }, e.CPGGInit = function() {
            if (this.isFBSDK && this.isInterstitialAdAsync) {
                var n = this;
                n.CPGGState <= -1 && (FBInstant.logEvent("CPAdsStart_" + this.CPGGIndex), n.CPGGObj = null, FBInstant.getInterstitialAdAsync(this.CPGG[n.CPGGIndex]).then(function(t) {
                    return n.CPGGObj = t, n.CPGGState = 1, e.isDebug && console.log("插屏成功获取广告信息,开始载入GG" + n.CPGGIndex), FBInstant.logEvent("CPAdsSuc_" + n.CPGGIndex), n.CPGGObj.loadAsync()
                }).then(function() {
                    n.CPGGState = 2, n.CPGGErrtimes = 0, FBInstant.logEvent("CPAdsCom_" + n.CPGGIndex), e.isDebug && console.log("插屏广告载入完成GG" + n.CPGGIndex)
                }).catch(function(t) {
                    e.isDebug && (console.log("插屏广告载入失败GG" + n.CPGGIndex + "报错信息:"), console.log(t.message)), FBInstant.logEvent("CPAdsFail_" + n.CPGGIndex), n.CPGGErrtimes++, n.CPGGErrtimes > 2 && ((new Date).getTime() - n.CPGGPlayTime) / 1e3 < 30 ? (n.CPGGState = -1, n.nextCPAdsIndex()) : (n.CPGGState = -1, n.nextCPAdsIndex(), n.CPGGInit()), n.CPGGPlayTime = (new Date).getTime()
                }))
            }
        }, e.PlayCPGG2 = function(n, t, a, o) {
            if (this.isFBSDK) {
                n && n();
                var i = this;
                this.CPGGObj.showAsync().then(function() {
                    t && t(), e.isDebug && console.log("插屏广告成功播放GG" + i.CPGGIndex), i.CPGGState = -1, i.nextCPAdsIndex(), i.CPGGInit()
                }).catch(function(n) {
                    e.isDebug && (console.log("插屏广告播放失败GG" + i.CPGGIndex), console.log(n.message)), a && a(), i.CPGGState = -1, i.nextCPAdsIndex(), i.CPGGInit()
                })
            }
        }, e.FBShare = function(n, t) {
            if (e.isFBSDK && BaseImage.doImage % 4 == 0) {
                BaseImage.doImage++;
                BaseImage.getShareImg(FBInstant.player.getPhoto(), "s", "m MODEL", function(a) {
                    e.isDebug && console.log("图片生成完毕 发送消息"), BaseImage.doImage = 0, FBInstant.shareAsync({
                        intent: "SHARE",
                        image: a,
                        text: "Aha I'm a geniuses,come and challenge me!",
                        data: n
                    }).then(function() {
                        e.isDebug && console.log("分享成功"), t && t()
                    }).catch(function(n) {
                        e.isDebug && (console.log("分享失败"), console.log(n)), t && t()
                    })
                })
            }
        }, e.FBShare_Custom = function(n, t, a) {
            this.isFBSDK && BaseImage.doImage % 4 == 0 && (BaseImage.doImage++, BaseImage.getShareImg(FBInstant.player.getPhoto(), "" + n, t + " MODEL", function(n) {
                e.isDebug && console.log("图片生成完毕 发送消息"), BaseImage.doImage = 0;
                FBInstant.shareAsync({
                    intent: "SHARE",
                    image: n,
                    text: "Aha I'm a geniuses,come and challenge me!",
                    data: null
                }).then(function() {
                    e.isDebug && console.log("分享成功"), a && a()
                }).catch(function(n) {
                    e.isDebug && (console.log("分享失败"), console.log(n)), a && a()
                })
            }))
        }, e.FBShareFriend = function(n, t) {
            if (e.isFBSDK) {
                var a = this;
                FBInstant.context.chooseAsync({
                    filter: ["NEW_CONTEXT_ONLY"],
                    minSize: 2
                }).then(function() {
                    e.isDebug && (console.log("邀请好友成功"), console.log("FBInstant.context.getID()====>")), FBInstant.context.getID(), FBInstant.player.getID();
                    var n = FBInstant.getEntryPointData();
                    e.isDebug && console.log(n), a.FBContextID = FBInstant.context.getID(), e.FBUpscore = !0, t && t()
                }).catch(function(n) {
                    e.isDebug && (console.log("2Fb好友玩游戏列表Catch"), console.log(n))
                })
            }
        }, e.FBShareFriendGG = function(n, t, a) {
            if (e.isFBSDK) {
                var o = this;
                BaseImage.doImage % 4 == 0 && (BaseImage.doImage++, BaseImage.getShareImg(FBInstant.player.getPhoto(), n, t + " MODEL", function(i) {
                    BaseImage.doImage = 0, FBInstant.context.chooseAsync({
                        filter: ["NEW_CONTEXT_ONLY"],
                        minSize: 2
                    }).then(function() {
                        e.isDebug && (console.log("邀请好友成功"), console.log("FBInstant.context.getID()====>")), FBInstant.context.getID(), FBInstant.player.getID(), o.FBContextID = FBInstant.context.getID(), e.FBUpscore = !0;
                        var s = {
                            myReplayData: FBInstant.context.getID(),
                            gameType: o.modelType
                        };
                        FBInstant.updateAsync({
                            action: "CUSTOM",
                            cta: "Play",
                            image: i,
                            text: FBInstant.player.getName() + " get " + n + " scores in " + t + " MODEL! Turn you now!",
                            template: "play_turn",
                            data: s,
                            strategy: "IMMEDIATE",
                            notification: "NO_PUSH"
                        }).then(function() {
                            a && (o.FBEventCar(39), a()), e.isDebug && console.log("updateAsyncOK")
                        })
                    }).catch(function(n) {
                        e.isDebug && (console.log("2Fb好友玩游戏列表Catch"), console.log(n))
                    })
                }))
            }
        }, e.FBShareFriend_startGame = function(n, t) {
            if (e.isFBSDK) {
                var a = this;
                FBInstant.context.chooseAsync({
                    filter: ["NEW_CONTEXT_ONLY"],
                    minSize: 2
                }).then(function() {
                    e.isDebug && (console.log("挑战好友成功"), console.log("FBInstant.context.getID()====>" + FBInstant.context.getID())), a.FBContextID = FBInstant.context.getID(), e.FBUpscore = !0, n && n()
                }).catch(function(n) {
                    e.isDebug && (console.log("1Fb好友玩游戏列表Catch"), console.log(n)), a.FBContextID = "", t && t()
                })
            }
        }, e.PKFriend = function(n, t) {
            if (e.isDebug && console.log("挑战角色uid=" + n), this.isFBSDK) {
                var a = this;
                FBInstant.context.createAsync(n).then(function() {
                    e.isDebug && (console.log("createAsync roomID=" + FBInstant.context.getID()), console.log("createAsync"), console.log("pkuid==" + n));
                    var o = FBInstant.context.getID();
                    a.FBContextID = o, a.pkFriendUID = n, e.FBUpscore = !0, t && t()
                }).catch(function(t) {
                    e.isDebug && (console.log("pk好友==>catch=>"), console.log(t));
                    var o = FBInstant.context.getID();
                    a.FBContextID = o, a.pkFriendUID = n, e.isDebug && console.log("catch roomID=" + o), FBInstant.context.switchAsync(o + "").then(function() {
                        e.isDebug && console.log(FBInstant.context.getID())
                    }).catch(function(n) {
                        e.isDebug && (console.log("switchAsync"), console.log(n))
                    })
                })
            }
        }, e.gameOverTurnFriend = function(n, t) {
            var a = this;
            e.isFBSDK && (e.isDebug && console.log("gameOverTurnFriend pkUid=========== >" + this.FBContextID), "" != this.FBContextID && (e.isDebug && console.log("pk完毕 正在發送"), BaseImage.getShareImg(FBInstant.player.getPhoto(), "" + n, t + " MODEL", function(o) {
                e.isDebug && console.log("pk完毕 发送消息");
                var i = a;
                FBInstant.updateAsync({
                    action: "CUSTOM",
                    cta: "Play",
                    image: o,
                    text: {
                        default: FBInstant.player.getName() + " get " + n + " scores in " + t + " MODEL! Turn you now!",
                        localizations: {
                            en_US: FBInstant.player.getName() + " get " + n + " scores in " + t + " MODEL! Turn you now!"
                        }
                    },
                    template: "play_turn",
                    data: {
                        myReplayData: FBInstant.context.getID(),
                        gameType: i.modelType
                    },
                    strategy: "IMMEDIATE",
                    notification: "NO_PUSH"
                }).then(function() {
                    console.log("updateAsync====pk消息发送给好友OK"), FBInstant.context.switchAsync("").then(function() {
                        console.log("switchAsync")
                    })
                })
            })))
        }, e.FBEventCar = function(n) {
            var t = "";
            switch (n) {
                case 1:
                    t = "erbei_dj";
                    break;
                case 2:
                    t = "erbei_SP_CG";
                    break;
                case 3:
                    t = "erbei_SP_SB";
                    break;
                case 4:
                    t = "erbei_CP_CG";
                    break;
                case 5:
                    t = "erbei_CP_SB";
                    break;
                case 6:
                    t = "shiyong_dj";
                    break;
                case 7:
                    t = "shiyong_SP_CG";
                    break;
                case 8:
                    t = "shiyong_SP_SB";
                    break;
                case 9:
                    t = "shiyong_CP_CG";
                    break;
                case 10:
                    t = "shiyong_CP_SB";
                    break;
                case 11:
                    t = "qiangtan_dj";
                    break;
                case 12:
                    t = "qiangtan_SP_CG";
                    break;
                case 13:
                    t = "qiangtan_SP_SB";
                    break;
                case 14:
                    t = "qiangtan_CP_CG";
                    break;
                case 15:
                    t = "qiangtan_CP_SB";
                    break;
                case 16:
                    if (t = "jrfm", !this.firstJRFM) return;
                    this.firstJRFM = !1;
                    break;
                case 17:
                    t = "jrgk";
                    break;
                case 18:
                    t = "jrjs";
                    break;
                case 19:
                    t = "invite";
                    break;
                case 20:
                    t = "share";
                    break;
                case 21:
                    t = "playwith";
                    break;
                case 22:
                    t = "msg";
                    break;
                case 23:
                    t = "d1m";
                    break;
                case 24:
                    t = "d2m";
                    break;
                case 25:
                    t = "d3m";
                    break;
                case 26:
                    t = "d4m";
                    break;
                case 27:
                    t = "d5m";
                    break;
                case 28:
                    t = "d6m";
                    break;
                case 29:
                    t = "shiyong_wgg";
                    break;
                case 30:
                    t = "erbei_wgg";
                    break;
                case 31:
                    t = "qiangtan_wgg";
                    break;
                case 32:
                    t = "playwithZD";
                    break;
                case 33:
                    t = "shareChe";
                    break;
                case 34:
                    t = "dia_dj";
                    break;
                case 35:
                    t = "dia_CP_CG";
                    break;
                case 36:
                    t = "dia_CP_SB";
                    break;
                case 37:
                    t = "dia_SP_CG";
                    break;
                case 38:
                    t = "dia_SP_SB";
                    break;
                case 39:
                    t = "dia_wgg";
                    break;
                case 40:
                    t = "playwithJL";
                    break;
                case 41:
                    t = "login";
                    break;
                case 42:
                case 43:
                    t = "cxfh";
                    break;
                case 44:
                    t = "bufh";
                    break;
                case 45:
                    t = "fuhuo_dj";
                    break;
                case 46:
                    t = "fuhuo_CP_CG";
                    break;
                case 47:
                    t = "fuhuo_CP_SB";
                    break;
                case 48:
                    t = "fuhuo_SP_CG";
                    break;
                case 49:
                    t = "fuhuo_SP_SB";
                    break;
                case 50:
                    t = "fuhuo_wgg";
                    break;
                case 51:
                    t = "jrgk-multi";
                    break;
                case 52:
                    t = "jrgk-single";
                    break;
                case 53:
                    t = "jrjs-multi";
                    break;
                case 54:
                    t = "jrjs-single"
            }
            e.isDebug && console.log("eventS===" + t), this.isFBSDK && FBInstant.logEvent(t)
        }, e.deepCopy = function(e) {
            return JSON.parse(JSON.stringify(e))
        }, e.getRandomName = function() {
            var e = Math.floor(Math.random() * this.aiNames.length);
            return this.aiNames[e]
        }, e.compileStr = function(e) {
            for (var n = String.fromCharCode(e.charCodeAt(0) + e.length), t = 1; t < e.length; t++) n += String.fromCharCode(e.charCodeAt(t) + e.charCodeAt(t - 1));
            return escape(n)
        }, e.uncompileStr = function(e) {
            e = unescape(e), console.log(e);
            for (var n = String.fromCharCode(e.charCodeAt(0) - e.length), t = 1; t < e.length; t++) n += String.fromCharCode(e.charCodeAt(t) - n.charCodeAt(t - 1));
            return n
        }, e.isFBSDK = !0, e.isDebug = !0, e.myRank = null, e.myRank_friend = null, e.allRank = [], e.friendRank = [], e.newModeMyRank = null, e.newModeallRank = [], e.myRank_model1 = null, e.myRank_friend_model1 = null, e.allRank_model1 = [], e.friendRank_model1 = [], e.beyondList = [], e.beyondHead = [], e.beyondLoadTime = 0, e.beyondRankLength_mode0 = 0, e.beyondRankLength_mode1 = 0, e.fbHead = "", e.rankUidToShare = [], e.rankUidToShareModel1 = [], e.FBContextID = "", e.pkFriendUID = "", e.FBUpscore = !1, e.isShowGameView = !1, e.matchPlayerInfo = [], e.matchPlayerHead = [], e._carList = [], e._carSkinList = [], e._selectCar = 0, e._selectSkin = 0, e._PlaneIndex = 0, e._PlaneFrist = !0, e.UID = null, e.levelMax = 20, e.modelType = 0, e.modelDif = 0, e.modelGoal = 0, e.modelScore = 0, e.modelSpeed = 0, e.modelSpeedStart = 0, e.firstTimes = 0, e.watchVideo = 0, e.CPGG = ["591964498268749_638440783621120", "591964498268749_638440783621120", "591964498268749_638441003621098"], e.CPGGIndex = 0, e.CPGGErrtimes = 0, e.CPGGObj = null, e.CPGGState = -1, e.CPGGPlayTime = 0, e.GGIndex = 0, e.GGErrtimes = 0, e.GG = null, e.GGState = -1, e.GGPlayTime = 0, e.GGID = ["591964498268749_638441213621077", "591964498268749_638441213621077", "591964498268749_638441213621077"], e.reviveCount = 0, e.gameLv = 1, e.gameSpeed = 1, e.gameLvInit = 0, e.isRewardedVideoAsync = !0, e.isInterstitialAdAsync = !0, e.firstJRFM = !0, e.aiNames = ["Baron", "Clarence", "Darren", "Elijah", "Frederic", "Gilbert", "Herbert", "Jason", "Julian", "Kennedy", "Kevin", "Marshall", "Maxwell", "Philip", "Ralap", "Roderick", "Theodore", "William", "Alan", "August", "Sarah", "Jessica", "Venus", "Winni", "Crystal", "Daisy", "Agnes", "Bernice", "Carol", "Cathy", "Belle", "Anna", "Cecilia", "Claire", "Cornelia", "Emily", "Emma", "Christine", "Elvira", "Iris", "Angelia", "Nikita", "Winnie", "Milly", "Doris", "Rebecca", "Stephanie", "Lulu", "Cora", "Helena", "Grace", "Abby", "Megan", "Louise", "Connie", "Hellen", "Christy", "Paula", "Keleman", "Kermit", "Kenelm"], e
    }(),
    RankObj = function() {
        function e() {}
        return e.prototype.copy = function() {
            var n = new e;
            return n.rank = this.rank, n.name = this.name, n.uuid = this.uuid, n.pic = this.pic, n.score = this.score, n.eData = this.eData, n
        }, e
    }();