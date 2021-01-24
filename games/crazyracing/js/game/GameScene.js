var touch;
! function(e) {
    var t = function() {
        function t(t) {
            this._skinManager = null, this._scene = null, this._camera = null, this._speedWind = null, this._deadPointMesh = null, this._shadowMaterial = null, this._CarShadow = null, this._CarShadowMesh = null, this._CarShadowTexure = null, this._box = null, this._buildMaterial = null, this._accelerateBlock = null, this._plane = null, this._ballMaterial = null, this._light = null, this._ball = null, this._itemLH = null, this._item0 = null, this._item1 = null, this._item1Eff = null, this._item0Texture = null, this._item1Texture = null, this._item2Texture = null, this._endPoint3d = null, this._item3Eff = null, this._item3EffTexture = null, this._boxFlag = null, this._boxFlagPosZ = 0, this._boxParentFlag = null, this._ballScript = null, this._shadowParent = null, this._trailParent = null, this._buildParent = null, this._boxParent = null, this._accBlockParent = null, this._planeParent = null, this._deadPointParent = null, this._nameParent = null, this._headParent = null, this._aiBalls = null, this._aiNameTexts = null, this._GoalIndex = null, this._RankIndex = null, this._headImages = null, this._matchRankList = [], this._curBendTime = 0, this._dstIndex = 0, this._changeTime = 0, this._curBendAngle = null, this._isIniting = !1, this._buildColorIndex = 0, this._gameState = e.EGameState.WAIT, this._boxPosZ = 0, this._buildPosZ = 0, this._planePosZ = 0, this._accPosZ = 0, this.ballSkinTexture = null, this._aiNameTextures = null, this._aiHeadTextures = null, this._loadingAssets = [], this._loadLength = 0, this._exceedNum = 0, this._downTemp = 0, this._cameraDownPosZ = 100, this._isTouch = !1, this._touchPosX = 0, this._isAutoRelive = !1, this._autoReliveTimes = 0, this._lifePro = 0, this._lifeNum = 0, this._aNums = 0, this._moveDirePosX = 0, this._main = null, this._loading = null, this._CarCount = 0, this._cameraShake = 0, this._cameraShakeTime = 0, this.planeTexture = [], this.buildTexture = [], this.allFinish = 0, this._planeCount = 0, this._planeColorIndex = 0, this._planeColor = null, this._planeColorLerp = 0, this.rankTime = 0, this.goalIndex = 0, this._car2dPos = new Laya.Vector3, this._cameraShakeArray = [.2, .2, 0, 0, -.2, -.2, 0, 0, .2, .2, 0, 0, -.2, -.2, 0], this._main = t, this._skinManager = new e.SkinManager, this.loadScene()
        }
        return t.prototype.destroy = function() {
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseMove), this._main.off(e.GameEvent.START, this, this.onStart), this._main.off(e.GameEvent.REVIVE, this, this.onRevive), this._main.off(e.GameEvent.RESET, this, this.onReset), this._main.off(e.GameEvent.RESTART, this, this.onRestart), this._main.off(e.GameEvent.BACK, this, this.onReset), this._main.off(e.GameEvent.START_AGAIN, this, this.onReset), this._main.off(e.GameEvent.CHANGE_SKIN, this, this.onChangeSkin), this._main.off(e.GameEvent.CARPLAY, this, this.onCarPlay), this._main.off(e.GameEvent.BALL_N2oOpen, this, this.onN2oWYOpen), this._main.off(e.GameEvent.BALL_N2oClose, this, this.onN2oWYClose), this._main.off(e.GameEvent.CAMERA_SHAKE, this, this.onCameraShake), this._main = null, e.SoundManager.stopMusic(), this._skinManager.destroy(), this._skinManager = null
        }, t.prototype.onLoaded = function() {
            null != this._loading && (this._loading.close("", !1), this._loading.destroy(), this._loading = null), this.initScene(), this.initBendAngle(), this.preCreate(), this.createAI(), this._aiNameTexts.push(this.createAIName(0)), Laya.timer.frameLoop(1, this, this.onLoop), Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), this._main.on(e.GameEvent.START, this, this.onStart), this._main.on(e.GameEvent.REVIVE, this, this.onRevive), this._main.on(e.GameEvent.RESET, this, this.onReset), this._main.on(e.GameEvent.RESTART, this, this.onRestart), this._main.on(e.GameEvent.BACK, this, this.onReset), this._main.on(e.GameEvent.START_AGAIN, this, this.onReset), this._main.on(e.GameEvent.CHANGE_SKIN, this, this.onChangeSkin), this._main.on(e.GameEvent.CARPLAY, this, this.onCarPlay), this._main.on(e.GameEvent.BALL_N2oOpen, this, this.onN2oWYOpen), this._main.on(e.GameEvent.BALL_N2oClose, this, this.onN2oWYClose), this._main.on(e.GameEvent.CAMERA_SHAKE, this, this.onCameraShake), this.onChangeSkin()
        }, t.prototype.onMouseDown = function() {
            this._isTouch = !0, this._touchPosX = Laya.stage.mouseX
        }, t.prototype.onMouseUp = function() {
            this._isTouch = !1, this._moveDirePosX = 0
        }, t.prototype.onMouseMove = function() {}, t.prototype.loadScene = function() {
            this._scene = new Laya.Scene, Laya.stage.addChild(this._scene), this._camera = new Laya.Camera(0, .1, 100), this._scene.addChild(this._camera), this._camera.transform.rotate(new Laya.Vector3(-.05, 0, 0), !0, !0), this._camera.transform.position = new Laya.Vector3(0, 1.5, 7.5), this._camera.clearColor = null, this._speedWind = Laya.Sprite3D.load("res/scene/layaScene.lh"), this._speedWind.on(Laya.Event.HIERARCHY_LOADED, this, this.onAssetLoaded), this._loadingAssets.push(this._speedWind), this._scene.addChild(this._speedWind), this._speedWind.active = !1, this.createEnd(e.GameDefine.EndPointZ), this.pointMesh = Laya.Mesh.load("res/scene/deadpoint.lm"), this._loadingAssets.push(this.pointMesh), this._shadowMaterial = new e.CustomMaterial, this._shadowMaterial.setDiffuseTexture(Laya.Texture2D.load("res/skin/whiteCube.png")), this._shadowMaterial.setHasLight(!1), this._shadowMaterial.setFogDensity(.04), this._shadowMaterial.setFogColor(e.SkinManager.fogColors[this._skinManager.curSkinIndex]), this._shadowMaterial.setTransparent(), this._shadowMaterial.setColor(new Laya.Vector4(0, 0, 0, .3));
            for (n = 0; n < 3; n++) {
                t = Laya.Texture2D.load("res/scene/plane" + n + ".png");
                this.planeTexture.push(t), this._loadingAssets.push(this.planeTexture[n])
            }
            for (n = 0; n < 3; n++) {
                var t = Laya.Texture2D.load("res/scene/cj" + n + ".png");
                this.buildTexture.push(t), this._loadingAssets.push(this.buildTexture[n])
            }
            this.planeMesh = Laya.Mesh.load("res/scene/plane-plane.lm"), this._loadingAssets.push(this.planeMesh), this._CarShadowMesh = Laya.Mesh.load("res/scene/car0_yy-car0_yy.lm"), this._loadingAssets.push(this._CarShadowMesh), this._CarShadowTexure = Laya.Texture2D.load("res/scene/car0_yy.png"), this._loadingAssets.push(this._CarShadowTexure), this._ballMaterial = new e.CustomMaterial, this._ballMaterial.setTransparent(), this._ballMaterial.setFogDensity(.04), this._aiBalls = Array(), this._aiNameTexts = new Array, this._headImages = new Array, this._aiNameTextures = new Array;
            for (n = 0; n < e.GameDefine.AI_COUNT + 1; n++) this._aiNameTextures.push(Laya.Texture2D.load("res/ai_names/" + (n + 1) + ".png")), this._loadingAssets.push(this._aiNameTextures[n]);
            this._aiHeadTextures = new Array;
            for (n = 0; n < 12; n++) this._aiHeadTextures.push(Laya.Texture2D.load("res/head/" + (n + 1) + ".png")), this._loadingAssets.push(this._aiHeadTextures[n]);
            this._item0Texture = Laya.Texture2D.load("res/LayaScene_item/Assets/Mode/daoju_0.png"), this._item1Texture = Laya.Texture2D.load("res/LayaScene_item/Assets/Mode/daoju_1.png"), this._item2Texture = Laya.Texture2D.load("res/LayaScene_item/Assets/Mode/daoju_2.png"), this._item3EffTexture = Laya.Texture2D.load("res/LayaScene_item/Assets/Mode/huangguan.png"), this._loadingAssets.push(this._item0Texture), this._loadingAssets.push(this._item1Texture), this._loadingAssets.push(this._item2Texture), this._loadingAssets.push(this._item3EffTexture), this._itemLH = Laya.Sprite3D.load("res/LayaScene_item/item.lh"), this._itemLH.on(Laya.Event.HIERARCHY_LOADED, this, this.onAssetLoaded), this._loadingAssets.push(this._itemLH);
            for (n = 0; n < e.GameDefine.CarShowMax; n++) {
                var a = Laya.Sprite3D.load("res/LayaScene_car" + n + "/car" + n + ".lh");
                GameBaseData._carList.push(a), a.on(Laya.Event.HIERARCHY_LOADED, this, this.onAssetLoaded), this._loadingAssets.push(a)
            }
            for (n = 0; n < e.GameDefine.CarShowMax; n++) {
                var i = Laya.Texture2D.load("res/carSkin/car" + n + "_0.png");
                this._loadingAssets.push(i), GameBaseData._carSkinList.push(i)
            }
            var s = new e.CustomMaterial;
            s.setDiffuseTexture(Laya.Texture2D.load("res/scene/box1.png"));
            var o = Laya.Mesh.load("res/scene/box1.lm");
            this._loadingAssets.push(o), this._boxFlag = new Laya.MeshSprite3D(o), this._boxFlag.meshRender.sharedMaterial = s;
            for (var n = 1; n < this._loadingAssets.length; n++) this._loadingAssets[n].on(Laya.Event.LOADED, this, this.onAssetLoaded);
            Laya.stage.bgColor = e.MathUtil.vec4ToHexStr(e.SkinManager.bgColors[0]), this._loadLength = this._loadingAssets.length, console.log("加载文件监听长度=" + this._loadLength)
        }, t.prototype.initGoalAndRank = function() {
            this._GoalIndex = new Array, this._RankIndex = new Array;
            for (var t = 0; t < e.GameDefine.AI_COUNT + 1; t++) this._GoalIndex.push(10), this._RankIndex.push(10);
            this.goalIndex = e.GameDefine.AI_COUNT + 1
        }, t.prototype.initScene = function() {
            this._main.event(e.GameEvent.OPEN_SKIN), console.log("初始化场景开始"), this.initGoalAndRank(), this._light = new Laya.PointLight, this._light.transform.position = new Laya.Vector3(0, 20, 7.5), this._light.range = 100, this._light.attenuation = new Laya.Vector3(0, 0, 0), this._scene.addChild(this._light), this._shadowParent = new Laya.MeshSprite3D, this._scene.addChild(this._shadowParent), this._trailParent = new Laya.MeshSprite3D, this._scene.addChild(this._trailParent), this._ball = this.createBall(0, .25, 3.5, !0), this._ballScript = this._ball.getComponentByType(e.BallScript), this.setGoalIndex(e.GameDefine.AI_COUNT, 3.5), this._ballScript.ballSpeed = this._ballScript.getInitSpeed(), this._ballScript.setIsAI(!1), this.createCarIndex(0, .25, 3.5, this._ball, 0, 0), this.createCarEff(this._ball), this.createCarHG(this._ball), this.creatCarShadow(this._ball), this._scene.addChild(this._ball), this._buildParent = new Laya.MeshSprite3D, this._scene.addChild(this._buildParent), this._boxParent = new Laya.MeshSprite3D, this._scene.addChild(this._boxParent), this._boxParentFlag = new Laya.MeshSprite3D, this._scene.addChild(this._boxParentFlag), this._accBlockParent = new Laya.MeshSprite3D, this._scene.addChild(this._accBlockParent), this._planeParent = new Laya.MeshSprite3D, this._scene.addChild(this._planeParent), this._deadPointParent = new Laya.MeshSprite3D, this._scene.addChild(this._deadPointParent), this._nameParent = new Laya.MeshSprite3D, this._scene.addChild(this._nameParent), this._headParent = new Laya.MeshSprite3D, this._scene.addChild(this._headParent), this._boxPosZ = -55, this._buildPosZ = 0, this._planePosZ = -40, this._accPosZ = -7, this._cameraDownPosZ = 100, this._boxFlagPosZ = -55, this._matchRankList = [], console.log("初始化场景完毕")
        }, t.prototype.onAssetLoaded = function() {
            if (this._loadingAssets.shift(), GameBaseData.isDebug, 0 == this._loadingAssets.length) {
                var t = new e.CustomMaterial;
                t.setTransparent(), t.setDiffuseTexture(Laya.Texture2D.load("res/skin/whiteCube.png")), t.setHasLight(!1), this._deadPointMesh = new Laya.MeshSprite3D(this.pointMesh), this._deadPointMesh.transform.rotate(new Laya.Vector3(90, -120, 0), !0, !1), this._deadPointMesh.meshRender.sharedMaterial = t;
                var a = new e.CustomMaterial;
                a.setDiffuseTexture(this.planeTexture[GameBaseData._PlaneIndex]), a.setHasLight(!1), this._plane = new Laya.MeshSprite3D(this.planeMesh), this._plane.transform.localScale = new Laya.Vector3(5, 1, 10), this._plane.meshRender.sharedMaterial = a, this._item0 = this._itemLH.getChildAt(0), this._item1 = this._itemLH.getChildAt(1), this._item1Eff = this._itemLH.getChildAt(2), this._item3Eff = this._itemLH.getChildAt(3);
                var i = new e.CustomMaterial;
                if (i.setDiffuseTexture(this._item0Texture), i.setHasLight(!1), this._accelerateBlock = this._item0, this._accelerateBlock.meshRender.sharedMaterial = i, this._accelerateBlock.name = e.GameDefine.ACCELERATE_BLOCK, this._CarShadow = new Laya.MeshSprite3D(this._CarShadowMesh), GameBaseData.isDebug && console.log("资源预加载成功！1111"), GameBaseData.isFBSDK) {
                    FBInstant.setLoadingProgress(100);
                    var s = this;
                    s.onLoaded(), FBInstant.startGameAsync().then(function() {
                        FBInstant.player.getDataAsync(["ballData"]).then(function(t) {
                            GameBaseData.isDebug && (console.log("Fb data is loaded"), console.log(t)), e.GameData.instance.setFbObj(t.ballData)
                        }), GameBaseData.getSupportedAPIs(), GameBaseData.initVideo(), GameBaseData.initCPVideo(), GameBaseData.isDebug && console.log("FB startGameAsync"), e.TipDialog.init();
                        var t = FBInstant.player.getID(),
                            a = FBInstant.player.getName();
                        GameBaseData.fbHead = FBInstant.player.getPhoto(), GameBaseData.UID = t;
                        var i = FBInstant.getEntryPointData();
                        if (i) {
                            var o = i.gameType,
                                n = i.myReplayData;
                            n && (GameBaseData.FBContextID = n, GameBaseData.FBUpscore = !0, GameBaseData.isDebug && console.log("启动游戏拿到fbContext=" + n + " modelType=" + o), FBInstant.context.switchAsync(n).then(function(e, t) {
                                GameBaseData.isDebug && (console.log(e), console.log(t), console.log("switchAsync"))
                            }), setTimeout(function() {
                                s.joinGamePK(o), GameBaseData.FBEventCar(22)
                            }, 500))
                        }
                        HttpPost.HttpPost_GetTerrace(t, a, null)
                    })
                } else this.onLoaded(), HttpPost.HttpPost_GetTerrace("fbuid", "lee", null)
            } else if (GameBaseData.isFBSDK) {
                var o = 20 + Math.floor((this._loadLength - this._loadingAssets.length) * (80 / this._loadLength));
                FBInstant.setLoadingProgress(o)
            }
        }, t.prototype.initMyCar = function() {
            this._ball.removeChildByName("car"), this._ball.removeChildByName("eff1"), this._ball.removeChildByName("shadow"), this._ball.removeChildByName("hgEffParent"), GameBaseData.isDebug && console.log(GameBaseData._selectCar + "=_selectCar===_selectSkin=" + GameBaseData._selectSkin), this.createCarIndex(0, .25, 3.5, this._ball, GameBaseData._selectCar, GameBaseData._selectSkin), this.createCarEff(this._ball), this.createCarHG(this._ball), this.creatCarShadow(this._ball);
            var t = this._trailParent.getChildAt(0),
                a = t.glitterRender.sharedMaterial,
                i = GameBaseData._selectCar + GameBaseData._selectSkin;
            GameBaseData.isDebug && console.log("玩家WYID===" + i), a.diffuseTexture = Laya.Texture2D.load("res/tail/weiyan_" + i + ".png");
            for (var s = 0; s < this._aiBalls.length; s++) {
                var o = (t = this._trailParent.getChildAt(s + 1)).glitterRender.sharedMaterial,
                    n = this._aiBalls[s].getComponentByType(e.BallScript)._CarSkinIndex;
                GameBaseData.isDebug && console.log(s + "电脑WYID===" + n), o.diffuseTexture = Laya.Texture2D.load("res/tail/weiyan_" + n + ".png")
            }
        }, t.prototype.initHeads = function() {}, t.prototype.joinGamePK = function(t) {
            GameBaseData.modelType = t, 0 == t ? (this._main.event(e.GameEvent.ENTER_GAME1), GameBaseData.initGameLv(), GameBaseData.getFriendList(0, null, null)) : (GameBaseData.modelType = 1, this._main.event(e.GameEvent.ENTER_GAME2), GameBaseData.initGameLv())
        }, t.prototype.initBendAngle = function() {
            this.setBendAngle(new Laya.Vector4(0, 0, 0, 0)), this._curBendTime = 0, this._dstIndex = 3, this._changeTime = 739, this.setBendDistance(100)
        }, t.prototype.preCreate = function() {
            this._isIniting = !0;
            for (t = 0; t < e.GameDefine.MAX_BOX_NUM; t++) Laya.Pool.recover("Box", this.createBox(0, .5, 10).removeSelf());
            for (t = 0; t < e.GameDefine.MAX_ACCELERATE_BLOCL_NUM; t++) Laya.Pool.recover(e.GameDefine.ACCELERATE_BLOCK, this.createAccelerateBlock(0, 0, 0).removeSelf());
            for (t = 0; t < e.GameDefine.MAX_BUILD_NUM; t++) Laya.Pool.recover("build", this.createBuild(0, 0, 0).removeSelf());
            for (var t = 0; t < e.GameDefine.MAX_DEA_POINT_NUM; t++) Laya.Pool.recover("deadPoint", this.createDeadPoint(new Laya.Vector3(0, 0, 0), new Laya.Vector4(1, 1, 1, 1)).removeSelf());
            this._isIniting = !1
        }, t.prototype.onLoop = function() {
            var t = Laya.timer.delta / 1e3;
            if (this._ballScript.upDataTime(t), this._ball.transform.position.z - this._planePosZ <= 130 && this.updatePlane(), this._ball.transform.position.z - this._boxPosZ <= 120 && this.updateBox(), 1 == GameBaseData.gameLv && this._ball.transform.position.z - this._buildPosZ <= 70 && this.updateBuilding(), this._ball.transform.position.z - this._boxFlagPosZ <= 150 && this.updateBoxFlag(), GameBaseData.initGameLv(), this.updateAutoRelive(), 0 == GameBaseData.modelType && this._ball.transform.position.z - this._accPosZ <= 60 && this._accPosZ > e.GameDefine.EndPointZ + 2) {
                Math.floor(10 * Math.random()) < 2 && this._aNums <= 0 ? (this._aNums = 5, this.createAccelerateBlock(-2, 0, this._accPosZ), this.createAccelerateBlock(-1, 0, this._accPosZ), this.createAccelerateBlock(0, 0, this._accPosZ), this.createAccelerateBlock(1, 0, this._accPosZ), this.createAccelerateBlock(2, 0, this._accPosZ)) : (this._aNums--, this.createAccelerateBlock(Math.floor(5 * Math.random()) - 2, 0, this._accPosZ)), 1 == GameBaseData.gameLv ? this._accPosZ -= 20 : this._accPosZ -= 15
            }
            for (var a = this._boxParent.numChildren - 1; - 1 < a; a--) {
                (x = this._boxParent.getChildAt(a)).transform.position.z > this._camera.transform.position.z && (1 == x.numChildren && Laya.Pool.recover("Box", x.getChildAt(0).removeSelf()), x.timer.clearAll(x), Laya.Pool.recover("Box", x.removeSelf()))
            }
            for (var i = this._boxParentFlag.numChildren - 1; - 1 < i; i--) {
                var s = this._boxParentFlag.getChildAt(i);
                s.transform.position.z > this._camera.transform.position.z && (1 == s.numChildren && Laya.Pool.recover("BoxFlag", s.getChildAt(0).removeSelf()), s.timer.clearAll(s), Laya.Pool.recover("BoxFlag", s.removeSelf()))
            }
            this._boxParentFlag.transform.position = new Laya.Vector3(this._boxParentFlag.transform.position.x + this._cameraShake, this._boxParentFlag.transform.position.y + this._cameraShake, this._boxParentFlag.transform.position.z);
            for (var o = this._accBlockParent.numChildren - 1; - 1 < o; o--) {
                var n = this._accBlockParent.getChildAt(o);
                n.transform.position.z > this._camera.transform.position.z && (n.removeSelf(), Laya.Pool.recover(e.GameDefine.ACCELERATE_BLOCK, n))
            }
            for (var r = this._buildParent.numChildren - 1; - 1 < r; r--) {
                var l = this._buildParent.getChildAt(r);
                l.transform.position.z > this._camera.transform.position.z && (l.timer.clearAll(l), l.removeSelf(), Laya.Pool.recover("build", l))
            }
            this._buildParent.transform.position = new Laya.Vector3(this._buildParent.transform.position.x + this._cameraShake, this._buildParent.transform.position.y + this._cameraShake, this._buildParent.transform.position.z);
            for (var h = this._planeParent.numChildren - 1; - 1 < h; h--) {
                var d = this._planeParent.getChildAt(h);
                d.transform.position.z > this._camera.transform.position.z + 50 && (d.removeSelf(), Laya.Pool.recover("plane", d))
            }
            if (this._planeParent.transform.position = new Laya.Vector3(this._planeParent.transform.position.x + this._cameraShake, this._planeParent.transform.position.y + this._cameraShake, this._planeParent.transform.position.z), this._ballScript.gameOver || e.EGameState.WAIT == this._gameState)
                if (e.EGameState.GAME == this._gameState) {
                    this._autoReliveTimes = 1, Laya.timer.clear(this, this.onPlaneColor), this._main.event(e.GameEvent.DEAD), this.setMatchPlayRank(), e.SoundManager.stopMusic(), this._gameState = e.EGameState.GAME_OVER, this._ballScript.ballSpeed = this._ballScript.getInitSpeed();
                    this._shadowParent.getChildAt(e.GameDefine.AI_COUNT).active = !1, this._speedWind.active = !1
                } else e.EGameState.GAME_OVER == this._gameState && this._main.event(e.GameEvent.GAME_SpeedChange, [0, !1, this._ballScript.ballSpeedMax]);
            else {
                this._main.event(e.GameEvent.GAME_SpeedChange, [this._ballScript.ballSpeed, !1, this._ballScript.ballSpeedMax]), 1 == this._ballScript.accelerate && (this._ballScript.accelerate = 0, this._isAutoRelive = !0, this._autoReliveTimes = 60);
                var m = Laya.stage.mouseX - this._touchPosX;
                if (!this._ballScript.isFinish) {
                    this._touchPosX = Laya.stage.mouseX;
                    B = 0;
                    if (B = this._touchPosX <= 370 ? 2.1 * this._touchPosX / 370 - 2.1 : 2.1 * (this._touchPosX - 370) / 370, B *= 1.5, B = 2.1 < B ? 2.1 : B, this._moveDirePosX = m > 0 ? 1 : -1, B += this._ballScript.offHorizontal, B = 2.1 < B ? 2.1 : B, this._isTouch) this._ball.transform.position = new Laya.Vector3(-2.1 > B ? -2.1 : B, this._ball.transform.position.y, this._ball.transform.position.z);
                    else {
                        S = 2.1 < (S = -2.1 > (S = this._ball.transform.position.x += this._ballScript.offHorizontal) ? -2.1 : S) ? 2.1 : S, this._ball.transform.position = new Laya.Vector3(S, this._ball.transform.position.y, this._ball.transform.position.z)
                    }
                }
                var _ = 2,
                    c = Math.abs(this._ball.transform.position.z - this._cameraDownPosZ);
                if (35 > c && 15 < c ? _ = 2 - .05 * (35 - c) : 15 >= c && (_ = 1), this._camera.transform.rotation = new Laya.Quaternion(this._camera.transform.rotation.x, 0, this._ball.transform.position.x / 50, 1), c = 0, this._isTouch && 0 != m && (c = 1 * -this._moveDirePosX * this._ballScript.ballSpeed / 600), this._ball.transform.rotation = new Laya.Quaternion(this._ball.transform.rotation.elements[0], c, 0, this._ball.transform.rotation.elements[3]), this._ballScript.gameOver || (this._ball.transform.position = new Laya.Vector3(this._ball.transform.position.x, this._ball.transform.position.y, this._ball.transform.position.z - this._ballScript.ballSpeed * t)), this._ballScript.isFinish || (this._exceedNum = -1 * this._ball.transform.position.z / 10, this.setGoalIndex(e.GameDefine.AI_COUNT, this._ball.transform.position.z)), this._ball.transform.position.z < e.GameDefine.EndPointZ && 0 == GameBaseData.modelType) {
                    if (!this._ballScript.isFinish) {
                        L = GameBaseData.matchPlayerInfo[0].copy();
                        this._matchRankList.push(L);
                        (v = this._ball.getChildAt(0).getChildAt(0).getComponentByType(Laya.Animator)).enable = !1
                    }
                    this._ballScript.isFinish = !0, this._ballScript.ballSpeed >= 0 && (this._ballScript.ballSpeed -= .2 * e.GameConfig.ACC_CAR_CONFIG[e.GameData.instance.showSkinIndex], this._ballScript.ballSpeed < 0 && (this._ballScript.ballSpeed = 0, this.allFinish == e.GameDefine.AI_COUNT && (this._ballScript.gameOver = !0)))
                }
                this._ballScript.ballSpeed < this._ballScript.ballSpeedMax && !this._ballScript.isFinish && (this._ballScript.ballSpeed += .1 * e.GameConfig.ACC_CAR_CONFIG[e.GameData.instance.showSkinIndex]), this._ballScript.ballSpeed > this._ballScript.ballSpeedMax && (this._ballScript.ballSpeed = this._ballScript.ballSpeedMax), this.updateFieldOfView(), this._camera.transform.position = new Laya.Vector3(.5 * this._ball.transform.position.x, .75 * _, this._ball.transform.position.z + 4), this._speedWind.transform.position = new Laya.Vector3(0, this._camera.transform.position.y + .5, this._camera.transform.position.z - 15), this._light.transform.position = new Laya.Vector3(0, 20, this._camera.transform.position.z), this.allFinish = 0;
                for (var p = 0; p < this._aiBalls.length && 0 != e.GameDefine.AI_COUNT; ++p) {
                    for (var f = this._aiBalls[p], u = f.getComponentByType(e.BallScript), g = this._trailParent.getChildAt(p + 1), y = [], C = this._boxParent.numChildren - 1; - 1 < C; C--) {
                        var x = this._boxParent.getChildAt(C);
                        5 > f.transform.position.z - x.transform.position.z && 1 > x.transform.position.y && y.push(x.transform.position.x)
                    }
                    var P = this.processBeHitAIBall(f.transform.position.x, y);
                    u.setDestPosX(P);
                    var B = .05 > Math.abs(u.getDestPosX() - f.transform.position.x) ? 0 : u.getDestPosX() > f.transform.position.x ? .2 : -.2;
                    u.ballSpeed < u.ballSpeedMax && !u.isFinish && (u.ballSpeed += .1 * e.GameConfig.ACC_CAR_CONFIG[u._CarSkinIndex]), u.ballSpeed > u.ballSpeedMax && (u.ballSpeed = u.ballSpeedMax), this._GoalIndex[p] > this._GoalIndex[e.GameDefine.AI_COUNT] && (this._ballScript.isFinish ? this._GoalIndex[p] > e.GameDefine.EndPointZ + 60 && (f.transform.position.z = e.GameDefine.EndPointZ + 30 + 3 * p, u._n2oIsPlay || u.onN2oOpen()) : this._GoalIndex[p] < -50 && this._GoalIndex[p] - GameBaseData.levelMax > this._GoalIndex[e.GameDefine.AI_COUNT] && (f.transform.position.z = this._GoalIndex[e.GameDefine.AI_COUNT] + e.MathUtil.randomInt(GameBaseData.levelMax / 5, GameBaseData.levelMax / 3), u._n2oIsPlay || u.onN2oOpen()));
                    var b = u.offHorizontal;
                    0 != b && (B = 0, u.setDestPosX(f.transform.position.x));
                    var S = f.transform.position.x + B + b;
                    if (S = S > 2.1 ? 2.1 : S, S = S < -2.1 ? -2.1 : S, u.upDataTime(t), f.transform.position = new Laya.Vector3(S, f.transform.position.y, f.transform.position.z - u.getSpeed() * t), u.isFinish || (this._ballScript.isFinish, u.ballSpeed += this.setGoalIndex(p, f.transform.position.z), u.ballSpeed > u.ballSpeedMax * GameBaseData.gameSpeed && (u.ballSpeed = u.ballSpeedMax * GameBaseData.gameSpeed)), f.transform.position.z < e.GameDefine.EndPointZ) {
                        if (!u.isFinish) {
                            var L = GameBaseData.matchPlayerInfo[p + 1].copy();
                            this._matchRankList.push(L);
                            var v = f.getChildAt(0).getChildAt(0).getComponentByType(Laya.Animator);
                            v.enable = !1
                        }
                        u.isFinish = !0, this.allFinish++, u.ballSpeed > 0 && (u.ballSpeed -= .054 * (u._n2oIsPlay ? 4 : 2) * t * 480 * GameBaseData.gameSpeed, u.ballSpeed < 0 && (u.ballSpeed = 0))
                    } else if (g.active) {
                        var A = e.Pool.getSysObj("Vector3", Laya.Vector3),
                            D = e.Pool.getSysObj("Vector3", Laya.Vector3);
                        A.x = this._aiBalls[p].transform.position.x - .35, A.y = .19, A.z = this._aiBalls[p].transform.position.z + .01 + .4, D.x = this._aiBalls[p].transform.position.x + .35, D.y = .19, D.z = this._aiBalls[p].transform.position.z + .01 + .4;
                        var M = new Laya.Vector3(0, 0, 0),
                            G = new Laya.Vector3(0, 0, 0);
                        g.addGlitterByPositionsVelocitys(A, M, D, G), e.Pool.recoverSysObj("Vector3", A), e.Pool.recoverSysObj("Vector3", D)
                    }
                }
                for (var T = 0; T < this._shadowParent.numChildren; ++T) {
                    var w = this._shadowParent.getChildAt(T),
                        I = e.Pool.getSysObj("Vector3", Laya.Vector3);
                    T < e.GameDefine.AI_COUNT ? (I.x = this._aiBalls[T].transform.position.x, I.y = .004, I.z = this._aiBalls[T].transform.position.z) : T == e.GameDefine.AI_COUNT && w.active && (I.x = this._ball.transform.position.x, I.y = .004, I.z = this._ball.transform.position.z), w.transform.position = I, e.Pool.recoverSysObj("Vector3", I)
                }
                var g = this._trailParent.getChildAt(0),
                    E = e.Pool.getSysObj("Vector3", Laya.Vector3);
                E.x = this._ball.transform.position.x - .35, E.y = .19, E.z = this._ball.transform.position.z + .01 + .4;
                var R = e.Pool.getSysObj("Vector3", Laya.Vector3);
                R.x = this._ball.transform.position.x + .35, R.y = .19, R.z = this._ball.transform.position.z + .01 + .4;
                var k = new Laya.Vector3(0, 0, 0),
                    V = new Laya.Vector3(0, 0, 0);
                g.addGlitterByPositionsVelocitys(E, k, R, V), e.Pool.recoverSysObj("Vector3", E), e.Pool.recoverSysObj("Vector3", R);
                var N = this._speedWind.getChildAt(0);
                if ((this._ballScript._n2oIsPlay || 1 == GameBaseData.modelType) && this._ballScript.ballSpeed >= 25) {
                    this._speedWind.active = !0;
                    var F = 7 * (this._ballScript.ballSpeed - 24 * GameBaseData.gameSpeed);
                    N.particleSystem.emission.emissionRate = F
                } else this._speedWind.active = !1, N.particleSystem.emission.emissionRate = 0;
                for (O = 0; O < this._aiNameTexts.length && !(GameBaseData.modelType >= 1); ++O) {
                    Z = e.Pool.getSysObj("Vector3", Laya.Vector3);
                    O == this._aiNameTexts.length - 1 ? (Z.x = this._ball.transform.position.x, Z.y = this._ball.transform.position.y + .44, Z.z = this._ball.transform.position.z) : (Z.x = this._aiBalls[O].transform.position.x, Z.y = this._aiBalls[O].transform.position.y + .44, Z.z = this._aiBalls[O].transform.position.z), this._aiNameTexts[O].transform.position = Z, e.Pool.recoverSysObj("Vector3", Z)
                }
                for (var O = 0; O < this._headImages.length && !(GameBaseData.modelType >= 1); ++O) {
                    var Z = e.Pool.getSysObj("Vector3", Laya.Vector3);
                    O == this._headImages.length - 1 ? (Z.x = this._ball.transform.position.x, Z.y = this._ball.transform.position.y + .5, Z.z = this._ball.transform.position.z) : (Z.x = this._aiBalls[O].transform.position.x, Z.y = this._aiBalls[O].transform.position.y + .5, Z.z = this._aiBalls[O].transform.position.z), this._headImages[O].transform.position = Z, e.Pool.recoverSysObj("Vector3", Z)
                }
                this.updateBendAngle()
            }
        }, t.prototype.playBalldeadSound = function() {
            e.SoundManager.playSound("res/sounds/dead.mp3")
        }, t.prototype.processBeHitAIBall = function(e, t) {
            for (var a = [], i = 0; i < 5; ++i) a.push(!0);
            for (i = 0; i < t.length; ++i) a[t[i] + 2] = !1;
            var s = (Math.floor(e) + 2) % 5;
            if (a[s]) return s - 2;
            for (i = 0; i < a.length; ++i)
                if (a[i]) return i - 2;
            return 0
        }, t.prototype.updateFieldOfView = function() {
            (this._ballScript._n2oIsPlay || 1 == GameBaseData.modelType) && this._ballScript.ballSpeed >= 25 ? 110 > this._camera.fieldOfView && (this._camera.fieldOfView += 2) : 80 < this._camera.fieldOfView && (this._camera.fieldOfView -= .36)
        }, t.prototype.updateBox = function() {
            if (!(this._boxPosZ < e.GameDefine.EndPointZ + 2)) {
                var t, a, i;
                0 == GameBaseData.modelType ? 40 >= this._exceedNum ? (t = Math.floor(2 * Math.random()), i = 15) : 80 >= this._exceedNum ? (t = Math.floor(4 * Math.random()), i = 13) : 120 >= this._exceedNum ? (t = Math.floor(6 * Math.random()), i = 12) : (t = Math.floor(9 * Math.random()), i = 10) : 10 >= this._exceedNum ? (t = Math.floor(2 * Math.random()), i = 12) : 30 >= this._exceedNum ? (t = Math.floor(5 * Math.random()), i = 11) : 50 >= this._exceedNum ? (t = Math.floor(7 * Math.random()), i = 10) : 120 >= this._exceedNum ? (t = Math.floor(9 * Math.random()), i = 9) : 180 >= this._exceedNum ? (t = Math.floor(9 * Math.random()), i = 8) : 240 >= this._exceedNum ? (t = Math.floor(9 * Math.random()), i = 7) : 300 >= this._exceedNum ? (t = Math.floor(9 * Math.random()), i = 6) : (t = Math.floor(9 * Math.random()), i = 5);
                for (var s = a = 2 > t ? Math.floor(2 * Math.random()) + 2 : Math.floor(2 * Math.random()) + 1; 0 < s; s--) {
                    switch (t) {
                        case 0:
                        case 1:
                            this.createBox2N1();
                            break;
                        case 2:
                        case 3:
                            this.createBox4N1();
                            break;
                        case 4:
                        case 5:
                            this.createBox3N1();
                            break;
                        case 6:
                        case 7:
                        case 8:
                            this.createBox8N1()
                    }
                    this._boxPosZ -= i * this.getDif()
                }
                this._boxPosZ -= i * this.getDif()
            }
        }, t.prototype.getDif = function() {
            return 1 == GameBaseData.modelType ? 1 : e.GameData.instance.record2 < 3 && 0 == e.GameData.instance.record ? 5 : e.GameData.instance.record2 < 5 ? 3.1 : e.GameData.instance.record2 < 8 ? 2.9 : e.GameData.instance.record2 < 11 ? 2.7 : e.GameData.instance.record2 < 14 ? 2.5 : e.GameData.instance.record2 < 17 ? 2.3 : e.GameData.instance.record2 < 20 ? 2.1 : e.GameData.instance.record2 < 23 ? 1.9 : e.GameData.instance.record2 < 26 ? 1.7 : e.GameData.instance.record2 < 29 ? 1.5 : 1.3
        }, t.prototype.createBox6 = function() {
            for (var e = 0 == Math.floor(2 * Math.random()) ? -2 : 1, t = 1; 4 >= t; t++) this.createBox(e, 1 * t - .5, this._boxPosZ), this.createBox(e + 1, 1 * t - .5, this._boxPosZ)
        }, t.prototype.createBox7 = function() {
            for (var e = Math.floor(4 * Math.random()) - 2, t = 2; - 2 <= t; t--)
                if (t != e && t != e + 1)
                    for (var a = 1; 4 >= a; a++) this.createBox(t, 1 * a - .5, this._boxPosZ)
        }, t.prototype.createBox4 = function() {
            for (var e = 0 == Math.floor(2 * Math.random()) ? -1 : 1, t = -2; 2 >= t; t++) this.createBox(t, 1.5, this._boxPosZ);
            this.createBox(-2, .5, this._boxPosZ), this.createBox(e, .5, this._boxPosZ), this.createBox(2, .5, this._boxPosZ)
        }, t.prototype.createBox5 = function() {
            for (var e = 0 == Math.floor(2 * Math.random()) ? -1 : 1, t = -2; 2 >= t; t++) this.createBox(t, 2.5, this._boxPosZ);
            this.createBox(-2, 1.5, this._boxPosZ), this.createBox(e, 1.5, this._boxPosZ), this.createBox(2, 1.5, this._boxPosZ), this.createBox(-2, .5, this._boxPosZ), this.createBox(e, .5, this._boxPosZ), this.createBox(2, .5, this._boxPosZ)
        }, t.prototype.createBox8 = function() {
            var e = this.createBox(Math.floor(4 * Math.random()) - 2, .5, this._boxPosZ),
                t = this.createBox(1, 0, 0);
            e.meshRender.material.setColor(new Laya.Vector4(1, 0, 0, 1)), t.meshRender.material.setColor(new Laya.Vector4(1, 0, 0, 1));
            var a = 0 != Math.floor(2 * Math.random());
            e.addChild(t), this.moveAnimation(e, 3, a, -2, 1), this._boxParent.addChild(e)
        }, t.prototype.createBox3 = function() {
            var e = this.createBox(Math.floor(5 * Math.random()) - 2, .5, this._boxPosZ);
            e.meshRender.material.setColor(new Laya.Vector4(1, 0, 0, 1)), this.moveAnimation(e, 3, (Math.floor(2 * Math.random()), !0), -2, 2)
        }, t.prototype.moveAnimation = function(e, t, a, i, s) {
            e.timer.frameLoop(1, e, function() {
                a ? (e.transform.position = new Laya.Vector3(e.transform.position.x + .017 * t, e.transform.position.y, e.transform.position.z), e.transform.position.x >= s && (a = !1)) : (e.transform.position = new Laya.Vector3(e.transform.position.x - .017 * t, e.transform.position.y, e.transform.position.z), e.transform.position.x <= i && (a = !0))
            })
        }, t.prototype.createBox2 = function() {
            for (var e = 0 == Math.floor(2 * Math.random()) ? -2 : 2, t = Math.floor(4 * Math.random()) + 1, a = 0 != Math.floor(5 * Math.random()), i = 1; i <= t; i++) this.createBox(e, 1 * i - .5, this._boxPosZ);
            a && 1 < t && this.createBox(-2 == e ? -1 : 1, Math.floor(Math.random() * t) + .5, this._boxPosZ)
        }, t.prototype.createBox1 = function() {
            var e = 2 * (Math.floor(3 * Math.random()) - 1),
                t = Math.floor(3 * Math.random()) + 2;
            if (-2 == e) {
                for (var a = 0; a < t; a++) this.createBox(e, .5 + 1 * a, this._boxPosZ);
                for (a = -1; 3 > a; a++) this.createBox(a, t - .5, this._boxPosZ)
            } else if (2 == e) {
                for (a = 0; a < t; a++) this.createBox(e, .5 + 1 * a, this._boxPosZ);
                for (a = -2; 2 > a; a++) this.createBox(a, t - .5, this._boxPosZ)
            } else if (0 == e) {
                for (a = 0; a < t; a++) this.createBox(-2, .5 + 1 * a, this._boxPosZ), this.createBox(2, .5 + 1 * a, this._boxPosZ);
                for (a = -1; 2 > a; a++) this.createBox(a, t - .5, this._boxPosZ)
            }
        }, t.prototype.updateBendAngle = function() {
            this._curBendTime += this._ballScript.ballSpeed / 24 * GameBaseData.gameSpeed * Laya.timer.delta, this._curBendTime >= this._changeTime && (this._dstIndex = this.randomAngle(this._dstIndex), this._changeTime = e.GameDefine.BEND_TIMES[this._dstIndex], this._curBendTime = 0);
            var t = this._curBendTime / this._changeTime,
                a = e.GameDefine.DST_ANGLES[this._dstIndex],
                i = new Laya.Vector4(0, 0, 0, 0);
            Laya.Vector4.lerp(this._curBendAngle, a, t / 20, i), this.setBendAngle(i)
        }, t.prototype.randomAngle = function(t) {
            var a = 0;
            do {
                a = Math.floor(Math.random() * e.GameDefine.BEND_TIMES.length)
            } while (a == t);
            return a
        }, t.prototype.updateBuilding = function() {
            var e = Math.floor(23 * Math.random()) - 17;
            this.createBuild(-7, Math.floor(23 * Math.random()) - 17, this._buildPosZ), this.createBuild(7, e, this._buildPosZ), this._buildPosZ -= 20
        }, t.prototype.updateBoxFlag = function() {
            this.createFlag(0, 0, this._boxFlagPosZ), this._boxFlagPosZ -= 100
        }, t.prototype.updatePlane = function() {
            this.createPlane(0, 0, this._planePosZ), this._planePosZ -= 100
        }, t.prototype.createPlane = function(t, a, i) {
            this._planeCount++, this._planeCount >= 2 && (this._planeCount = 0, this._planeColorIndex++, this._planeColorIndex >= e.SkinManager.PLANE_COLORS.length && (this._planeColorIndex = 0));
            var s = this._isIniting ? null : Laya.Pool.getItem("plane");
            null == s && (s = Laya.Sprite3D.instantiate(this._plane, null, !1, new Laya.Vector3(t, a, i)));
            var o = s.meshRender.material;
            null == this._planeColor ? this._planeColor = e.SkinManager.PLANE_COLORS[this._planeColorIndex].clone() : (this._planeColorLerp = 0, Laya.timer.frameLoop(1, this, this.onPlaneColor), Laya.Vector4.lerp(this._planeColor, e.SkinManager.PLANE_COLORS[this._planeColorIndex], this._planeColorLerp, this._planeColor)), o.setFogColor(e.SkinManager.fogColors[GameBaseData._PlaneIndex]), o.setDiffuseTexture(this.planeTexture[GameBaseData._PlaneIndex]), s.transform.position = new Laya.Vector3(t, a, i), this._planeParent.addChild(s)
        }, t.prototype.onPlaneColor = function() {
            this._planeColorLerp >= .3 && Laya.timer.clear(this, this.onPlaneColor), this._planeColorLerp += .001, Laya.Vector4.lerp(this._planeColor, e.SkinManager.PLANE_COLORS[this._planeColorIndex], this._planeColorLerp, this._planeColor)
        }, t.prototype.createDeadPoint = function(t, a) {
            var i = this._isIniting ? null : Laya.Pool.getItem("deadPoint");
            return null == i && (i = Laya.Sprite3D.instantiate(this._deadPointMesh, null, !1, new Laya.Vector3(t.x, .005, t.z))), i.meshRender.material.setFogColor(e.SkinManager.fogColors[GameBaseData._PlaneIndex]), i.meshRender.material.setColor(a), i.transform.position = new Laya.Vector3(t.x, .005, t.z), i.transform.scale = new Laya.Vector3(.3, .3, 1), this._isIniting || i.timer.frameLoop(1, i, function() {
                var e = Laya.timer.delta;
                i.transform.scale.x < 6 ? i.transform.scale = new Laya.Vector3(i.transform.scale.x + .08 * e, i.transform.scale.x + .08 * e, 1) : i.transform.scale.x > 6 && (i.transform.scale = new Laya.Vector3(6, 6, 1))
            }), this._deadPointParent.addChild(i), i
        }, t.prototype.createBuild = function(t, a, i) {
            var s = this._isIniting ? null : Laya.Pool.getItem("build");
            if (null == s) {
                var o = new Laya.BoxMesh(5, 5, 30);
                s = new Laya.MeshSprite3D(o), this._buildMaterial || (this._buildMaterial = new e.CustomMaterial, this._buildMaterial.setDiffuseTexture(this.buildTexture[GameBaseData._PlaneIndex]), this._buildMaterial.setHasLambert(!0), this._buildMaterial.setFogDensity(.04)), s.meshRender.material = this._buildMaterial
            }
            s.meshRender.material.setDiffuseTexture(this.buildTexture[GameBaseData._PlaneIndex]), s.meshRender.material.setFogColor(e.SkinManager.fogColors[GameBaseData._PlaneIndex]), this._ball.transform.position.z < -100 ? this.buildAnimation(s) : a = -14;
            var n = null,
                r = 0;
            return this._buildColorIndex % 6 < 2 ? (n = e.SkinManager.buildColors[3 * this._skinManager.curSkinIndex + 0], r = .02, s.name = "build1") : this._buildColorIndex % 6 < 4 ? (r = .04, n = e.SkinManager.buildColors[3 * this._skinManager.curSkinIndex + 1], s.name = "build2") : (r = .05, n = e.SkinManager.buildColors[3 * this._skinManager.curSkinIndex + 2], s.name = "build3"), Laya.Vector4.lerp(n, e.SkinManager.PLANE_COLORS[this._planeColorIndex], r, n), s.meshRender.material.setColor(n), this._buildColorIndex++, s.transform.position = new Laya.Vector3(t, a, i), this._buildParent.addChild(s), s
        }, t.prototype.buildAnimation = function(e) {}, t.prototype.createAccelerateBlock = function(t, a, i) {
            var s = this._isIniting ? null : Laya.Pool.getItem(e.GameDefine.ACCELERATE_BLOCK);
            if (null == s) {
                var o = (s = Laya.Sprite3D.instantiate(this._accelerateBlock, null, !1, new Laya.Vector3(t, a, i))).addComponent(Laya.BoxCollider);
                o.center = new Laya.Vector3(0, 0, 0), o.size = new Laya.Vector3(.9526, .5, .2)
            }
            s.transform.scale = new Laya.Vector3(1.5, 1.5, 1.5);
            return s.getComponentByType(Laya.Animator).enable = !1, s.meshRender.material.setFogColor(e.SkinManager.fogColors[GameBaseData._PlaneIndex]), s.transform.position = new Laya.Vector3(t, a, i), this._accBlockParent.addChild(s), s
        }, t.prototype.createBox = function(t, a, i) {
            var s = this._isIniting ? null : Laya.Pool.getItem("Box");
            if (null == s) {
                (s = Laya.Sprite3D.instantiate(this._item1, null, !1, new Laya.Vector3(t, a, i))).name = "Box";
                var o = s.addComponent(Laya.BoxCollider);
                o.center = new Laya.Vector3(0, 0, 0), o.size = new Laya.Vector3(1, 1, 1);
                var n = new e.CustomMaterial;
                n.setDiffuseTexture(this._item1Texture), n.setHasLight(!1), s.meshRender.material = n
            }
            return s.active = !0, s.meshRender.material.setColor(new Laya.Vector4(1, 1, 1, .1)), s.meshRender.material.setFogColor(e.SkinManager.fogColors[GameBaseData._PlaneIndex]), s.transform.position = new Laya.Vector3(t, a, i), this._boxParent.addChild(s), s
        }, t.prototype.createBox2N1 = function() {
            var e = Math.floor(5 * Math.random()) - 2;
            this.createBox(e, 0, this._boxPosZ)
        }, t.prototype.createBox3N1 = function() {
            var e = this.createBox(Math.floor(5 * Math.random()) - 2, 0, this._boxPosZ);
            e.meshRender.material.setColor(new Laya.Vector4(1, 0, 0, 1)), this.moveAnimation(e, 3, (Math.floor(2 * Math.random()), !0), -2, 2)
        }, t.prototype.createBox4N1 = function() {
            var e = 0 == Math.floor(2 * Math.random()) ? -1 : 1;
            this.createBox(-2, 0, this._boxPosZ), this.createBox(e, 0, this._boxPosZ), this.createBox(2, 0, this._boxPosZ)
        }, t.prototype.createBox6N1 = function() {
            var e = 0 == Math.floor(2 * Math.random()) ? -2 : 1;
            this.createBox(e, 0, this._boxPosZ), this.createBox(e + 1, 0, this._boxPosZ)
        }, t.prototype.createBox8N1 = function() {
            var e = this.createBox(Math.floor(4 * Math.random()) - 2, 0, this._boxPosZ),
                t = this.createBox(1, 0, 0);
            e.meshRender.material.setColor(new Laya.Vector4(1, 0, 0, 1)), t.meshRender.material.setColor(new Laya.Vector4(1, 0, 0, 1));
            var a = 0 != Math.floor(2 * Math.random());
            e.addChild(t), this.moveAnimation(e, 3, a, -2, 1), this._boxParent.addChild(e)
        }, t.prototype.createFlag = function(t, a, i) {
            var s = this._isIniting ? null : Laya.Pool.getItem("BoxFlag");
            return null == s && ((s = Laya.Sprite3D.instantiate(this._boxFlag, null, !1, new Laya.Vector3(t, a, i))).name = "BoxFlag"), s.meshRender.material.setColor(new Laya.Vector4(1, 1, 1, .1)), s.meshRender.material.setFogColor(e.SkinManager.fogColors[GameBaseData._PlaneIndex]), s.transform.position = new Laya.Vector3(t, a, i), this._boxParentFlag.addChild(s), s
        }, t.prototype.createEnd = function(t) {
            if (null == this._endPoint3d) {
                var a = Laya.Mesh.load("res/scene/zhongdian.lm"),
                    i = new e.CustomMaterial;
                i.setTransparent(), i.setDiffuseTexture(Laya.Texture2D.load("res/scene/zhongdian.png")), i.setHasLight(!1), this._endPoint3d = new Laya.MeshSprite3D(a), this._endPoint3d.meshRender.sharedMaterial = i, this._scene.addChild(this._endPoint3d), this._endPoint3d.meshRender.material.setFogColor(e.SkinManager.fogColors[GameBaseData._PlaneIndex])
            }
            this._endPoint3d.transform.position = new Laya.Vector3(0, .01, t)
        }, t.prototype.setBendDistance = function(e) {
            this._ball.meshRender.material.setBendDistance(e), this.setParentBendDistance(this._shadowParent, e), this.setParentBendDistance(this._buildParent, e), this.setParentBendDistance(this._boxParent, e), this.setParentBendDistance(this._boxParentFlag, e), this.setParentBendDistance(this._accBlockParent, e), this.setParentBendDistance(this._planeParent, e);
            for (var t = 0; t < this._aiBalls.length; t++) {
                this._aiBalls[t].meshRender.material.setBendDistance(e), this.setAllChildrenBendDistance(this._aiBalls[t], e)
            }
            this.setAllChildrenBendDistance(this._ball, e), this.setParentBendDistance(this._deadPointParent, e);
            this._endPoint3d.meshRender.material.setBendDistance(e)
        }, t.prototype.setParentBendDistance = function(e, t) {
            for (var a = 0; a < e.numChildren; a++)
                if (e.getChildAt(a).numChildren > 0) {
                    "Box" == e.getChildAt(a).name && e.getChildAt(a).meshRender.material.setBendDistance(t);
                    for (var i = 0; i < e.getChildAt(a).numChildren; i++) e.getChildAt(a).getChildAt(i).meshRender.material.setBendDistance(t)
                } else e.getChildAt(a).meshRender.material.setBendDistance(t)
        }, t.prototype.setAllChildrenBendDistance = function(e, t) {
            for (var a = 0; a < e.numChildren; a++) e.getChildAt(a).numChildren > 0 ? this.setAllChildrenBendDistance(e.getChildAt(a), t) : e.getChildAt(a).meshRender.material.setBendDistance(t)
        }, t.prototype.setBendAngle = function(e) {
            this._curBendAngle = e;
            this._ball.meshRender.material.setBendOffset(e), this.setParentBendAngle(this._shadowParent, e), this.setParentBendAngle(this._buildParent, e), this.setParentBendAngle(this._boxParent, e), this.setParentBendAngle(this._boxParentFlag, e), this.setParentBendAngle(this._accBlockParent, e), this.setParentBendAngle(this._planeParent, e);
            for (var t = 0; t < this._aiBalls.length; t++) {
                this._aiBalls[t].meshRender.material.setBendOffset(e), this.setAllChildrenBendAngle(this._aiBalls[t], e)
            }
            this.setAllChildrenBendAngle(this._ball, e), this.setParentBendAngle(this._deadPointParent, e), this.setParentBendAngle(this._nameParent, e), this.setParentBendAngle(this._headParent, e);
            var a = this._speedWind.getChildAt(0);
            null != a && a._render.material.setBendOffset(e);
            for (var i = 0; i < this._trailParent.numChildren; ++i) {
                this._trailParent.getChildAt(i).glitterRender.sharedMaterial.setBendOffset(e)
            }
            this._endPoint3d.meshRender.material.setBendOffset(e)
        }, t.prototype.setParentBendAngle = function(e, t) {
            for (var a = 0; a < e.numChildren; a++)
                if (e.getChildAt(a).numChildren > 0) {
                    "Box" == e.getChildAt(a).name && e.getChildAt(a).meshRender.material.setBendOffset(t);
                    for (var i = 0; i < e.getChildAt(a).numChildren; i++) e.getChildAt(a).getChildAt(i).meshRender.material.setBendOffset(t)
                } else e.getChildAt(a).meshRender.material.setBendOffset(t)
        }, t.prototype.setAllChildrenBendAngle = function(e, t) {
            for (var a = 0; a < e.numChildren; a++) e.getChildAt(a).numChildren > 0 ? this.setAllChildrenBendAngle(e.getChildAt(a), t) : e.getChildAt(a).meshRender.material.setBendOffset(t)
        }, t.prototype.createAI = function() {
            for (var t = 0; t < e.GameDefine.AI_COUNT; t++) {
                var a = 0 == t % 2 ? 1 : -1,
                    i = this.createBall(a, .25, 10 - 4 * t, !1),
                    s = Math.floor(Math.random() * e.GameDefine.CarShowMax);
                Math.floor(2 * Math.random());
                this.createCarIndex(a, .25, 10 - 4 * t, i, s, 0), this.createCarEff(i), this.createCarHG(i), this.creatCarShadow(i);
                i.getComponentByType(e.BallScript).setIsAI(!0), this._scene.addChild(i), this._aiBalls.push(i), this._aiNameTexts.push(this.createAIName(t)), this.setGoalIndex(t, 10 - 4 * t)
            }
        }, t.prototype.setGoalIndex = function(t, a) {
            if (this._GoalIndex[t] = a, a < e.GameDefine.EndPointZ && (this._GoalIndex[t] = e.GameDefine.EndPointZ - this.goalIndex, this.goalIndex--), this._main.event(e.GameEvent.SCROE_CHANGE, [this._GoalIndex, this._RankIndex[e.GameDefine.AI_COUNT]]), this.rankTime++, this.rankTime > e.GameDefine.AI_COUNT && !this._ballScript.isFinish && this._gameState == e.EGameState.GAME) {
                this.rankTime = 0;
                for (var i = 0, s = 0; s < this._GoalIndex.length; s++)
                    if (!(this._GoalIndex[s] < e.GameDefine.EndPointZ)) {
                        i = 0;
                        for (var o = 0; o < this._GoalIndex.length; o++) this._GoalIndex[s] < this._GoalIndex[o] && i++;
                        this._RankIndex[s] = e.GameDefine.AI_COUNT - i, this._aiNameTexts[s].meshRender.material.setDiffuseTexture(this.randomAIName(this._RankIndex[s])), s == e.GameDefine.AI_COUNT ? 0 == this._RankIndex[s] ? this._ball.getChildByName("hgEffParent").active = 0 == GameBaseData.modelType : this._ball.getChildByName("hgEffParent").active = !1 : 0 == this._RankIndex[s] ? this._aiBalls[s].getChildByName("hgEffParent").active = 0 == GameBaseData.modelType : this._aiBalls[s].getChildByName("hgEffParent").active = !1
                    }
            }
            return 0
        }, t.prototype.createBall = function(t, a, i, s) {
            var o = new Laya.SphereMesh(.25, 1, 1),
                n = new Laya.MeshSprite3D(o);
            n.addComponent(e.BallScript), n.transform.position = new Laya.Vector3(t, a, i), n.meshRender.material = this._ballMaterial;
            var r = n.getComponentByType(e.BallScript);
            r.setBall(n, this._main);
            var l = n.addComponent(Laya.SphereCollider);
            n.addComponent(Laya.Rigidbody), l.center = n.meshFilter.sharedMesh.boundingSphere.center.clone(), l.radius = n.meshFilter.sharedMesh.boundingSphere.radius;
            var h = new Laya.CylinderMesh(.2, .01, 64),
                d = new Laya.MeshSprite3D(h);
            d.meshRender.material = this._shadowMaterial, d.transform.position = new Laya.Vector3(n.transform.position.x, .004, n.transform.position.z), d.meshRender.enable = !1, this._shadowParent.addChild(d);
            var m = new Laya.Glitter,
                _ = m.glitterRender.sharedMaterial;
            _.diffuseTexture = Laya.Texture2D.load("res/tail/weiyan_0.png"), _.albedo = new Laya.Vector4(1, 1, 1, 1), this._trailParent.addChild(m);
            var c = m.templet;
            return c.lifeTime = .07, c.minSegmentDistance = .1, c.minInterpDistance = .6, c.maxSlerpCount = 128, c.maxSegments = 600, r._CarIndex = this._CarCount, this._CarCount++, n.meshRender.enable = !1, n.name = "ballCar", n
        }, t.prototype.createCarIndex = function(t, a, i, s, o, n) {
            var r = Laya.Sprite3D.instantiate(GameBaseData._carList[o]);
            r.name = "car";
            var l = r.getChildAt(0).getChildAt(0),
                h = r.getChildAt(0).getChildAt(1),
                d = r.getChildAt(0).getChildAt(2),
                m = new e.CustomMaterial;
            m.setDiffuseTexture(GameBaseData._carSkinList[o]), m.setHasLight(!1), m.setFogColor(e.SkinManager.fogColors[GameBaseData._PlaneIndex]), l.meshRender.material = m, h.meshRender.material = m, d.meshRender.material = m;
            r.getChildAt(0).getComponentByType(Laya.Animator).enable = !1, r.getChildAt(0).addComponent(e.CarScript);
            var _ = r.getChildAt(0).getComponentByType(e.CarScript);
            _.skinIndex = n, _.carIndex = o, _.carSkinIndex = n, r.getChildAt(0).transform.rotate(new Laya.Vector3(0, 0, 0), !1, !1), s.addChild(r), r.transform.localPosition = new Laya.Vector3(0, -.2, -.2);
            s.getComponentByType(e.BallScript)._CarSkinIndex = o
        }, t.prototype.createCarEff = function(t) {
            var a = Laya.Sprite3D.instantiate(this._item1Eff),
                i = new e.CustomMaterial;
            i.setDiffuseTexture(this._item2Texture), i.setHasLight(!1), a.meshRender.material = i, a.name = "eff1", a.transform.localPosition = new Laya.Vector3(0, .5, 0), a.active = !1, t.addChild(a)
        }, t.prototype.createCarHG = function(t) {
            var a = Laya.Sprite3D.instantiate(this._item3Eff),
                i = new e.CustomMaterial;
            i.setDiffuseTexture(this._item3EffTexture), i.setHasLight(!1), a.meshRender.material = i, a.name = "hgEff";
            var s = new Laya.MeshSprite3D;
            s.name = "hgEffParent", s.transform.localPosition = new Laya.Vector3(0, .5, 0), s.transform.scale = new Laya.Vector3(1.8, 1.8, 1.8), s.active = !1, s.addChild(a), t.addChild(s)
        }, t.prototype.creatCarShadow = function(t) {
            var a = Laya.Sprite3D.instantiate(this._CarShadow),
                i = new e.CustomMaterial;
            i.setTransparent(), i.setDiffuseTexture(this._CarShadowTexure), i.setHasLight(!1), i.setHasFog(!0), i.setFogColor(new Laya.Vector4(0, 0, 0, .1)), a.meshRender.material = i, a.name = "shadow", a.transform.localPosition = new Laya.Vector3(0, -.155, -.2), t.addChild(a)
        }, t.prototype.createAIName = function(t) {
            var a = new Laya.BoxMesh(1.12 / 3, .001, .4 / 3),
                i = new Laya.MeshSprite3D(a);
            i.transform.position = new Laya.Vector3(0, 0, 1e3);
            var s = new e.CustomMaterial;
            return s.setDiffuseTexture(this.randomAIName(t)), s.setColor(new Laya.Vector4(1, 1, 1, 1)), s.setHasLight(!1), s.setHasFog(!1), s.setHasAlphaTest(!0), s.setAlphaTestValue(.5), s.setTransparent(), i.meshRender.material = s, this._nameParent.addChild(i), 0 == e.GameDefine.AI_COUNT && (i.meshRender.enable = !1), i
        }, t.prototype.randomAIName = function(e) {
            return this._aiNameTextures[e]
        }, t.prototype.createHead = function(t) {
            var a = new Laya.BoxMesh(.3, .001, .3),
                i = new Laya.MeshSprite3D(a);
            i.transform.position = new Laya.Vector3(0, 0, 0);
            var s = new e.CustomMaterial,
                o = "http://img.jsqq.net/uploads/allimg/150711/1_150711053343_3.jpg";
            if ((o = GameBaseData.matchPlayerInfo[t].pic).length < 20 && (o = "./res/" + o), console.log("index=" + t, "url=" + o), Laya.loader.getRes(o)) {
                console.log("有");
                var n = Laya.stage.drawToCanvas(100, 100, 0, 0);
                Laya.loader.cacheRes("aaa", n.source), console.log("====./res/test.jpg");
                var r = Laya.Browser.window.conch;
                BaseImage.getHeadImg(o, function(e) {
                    r.saveAsJpeg(e, 200, 200, "./res/test.jpg")
                }), s.setDiffuseTexture(Laya.Texture2D.load("./res/test.jpg"))
            } else console.log("无"), s.setDiffuseTexture(Laya.Texture2D.load(o));
            return console.log("2=" + Laya.loader.getRes(o)), s.setColor(new Laya.Vector4(1, 1, 1, 1)), s.setHasLight(!1), s.setHasFog(!1), s.setHasAlphaTest(!0), s.setAlphaTestValue(.5), s.setTransparent(), i.meshRender.material = s, this._headParent.addChild(i), i
        }, t.prototype.onStart = function() {
            this._gameState = e.EGameState.GAME;
            for (var t = 0; t < this._aiBalls.length; ++t) {
                (a = this._trailParent.getChildAt(t)).active = !0
            }
            var a = this._trailParent.getChildAt(t);
            a.active = !0, GameBaseData.initGameLv(), 0 == e.GameData.instance.record ? e.GameDefine.EndPointZ = -800 : e.GameDefine.EndPointZ = -1200, 1 == GameBaseData.modelType && (e.GameDefine.EndPointZ = -12e6), this.createEnd(e.GameDefine.EndPointZ)
        }, t.prototype.onRevive = function() {
            for (i = this._boxParent.numChildren - 1; - 1 < i; i--) {
                var t = this._boxParent.getChildAt(i);
                this._ball.transform.position.z - t.transform.position.z <= 60 && (1 == t.numChildren && Laya.Pool.recover("Box", t.getChildAt(0).removeSelf()), t.timer.clearAll(t), Laya.Pool.recover("Box", t.removeSelf()))
            }
            for (i = this._boxParentFlag.numChildren - 1; - 1 < i; i--) {
                var a = this._boxParentFlag.getChildAt(i);
                this._ball.transform.position.z - a.transform.position.z <= 60 && (1 == a.numChildren && Laya.Pool.recover("BoxFlag", a.getChildAt(0).removeSelf()), a.timer.clearAll(a), Laya.Pool.recover("BoxFlag", a.removeSelf()))
            }
            for (var i = this._accBlockParent.numChildren - 1; - 1 < i; i--) {
                var s = this._accBlockParent.getChildAt(i);
                this._ball.transform.position.z - s.transform.position.z <= 30 && Laya.Pool.recover(e.GameDefine.ACCELERATE_BLOCK, s.removeSelf())
            }
            this._camera.fieldOfView = 60, this._cameraDownPosZ = 100, this._ball.active = !0, this._ball.transform.position = new Laya.Vector3(0, .25, this._ball.transform.position.z), this._camera.transform.position = new Laya.Vector3(0, 1.5, this._ball.transform.position.z + 4), this._camera.transform.rotation = new Laya.Quaternion(-.05, 0, this._ball.transform.position.x / 25, 1);
            var o = this._shadowParent.getChildAt(e.GameDefine.AI_COUNT);
            o.active = !0, o.transform.position = new Laya.Vector3(0, .004, this._ball.transform.position.z), Laya.timer.once(3e3, this, this.onReviveStart)
        }, t.prototype.onReviveStart = function() {
            e.SoundManager.playMusic("res/sounds/bgm_low.mp3", !0), this._gameState = e.EGameState.GAME, this._speedWind.active = !1, this._ballScript.gameOver = !1, this._ballScript.ballSpeed = this._ballScript.ballSpeedMax * GameBaseData.gameSpeed, GameBaseData.initGameLv()
        }, t.prototype.onRestart = function() {
            this._gameState = e.EGameState.GAME, e.SoundManager.playMusic("res/sounds/bgm_low.mp3", !0);
            for (var t = 0; t < this._aiBalls.length; ++t) {
                (a = this._trailParent.getChildAt(t)).active = !0
            }
            var a = this._trailParent.getChildAt(t);
            a.active = !0, GameBaseData.initGameLv()
        }, t.prototype.onReset = function(t) {
            GameBaseData.isDebug && console.log(GameBaseData._PlaneIndex), GameBaseData._PlaneIndex++, GameBaseData.modelSpeed = 0, GameBaseData._PlaneIndex > 2 && (GameBaseData._PlaneIndex = 0), GameBaseData._PlaneFrist && (GameBaseData._PlaneFrist = !1, GameBaseData._PlaneIndex = 0), this._boxPosZ = -55, this._buildPosZ = 0, this._planePosZ = -40, this._accPosZ = -7, this._cameraDownPosZ = 100, this._isTouch = !1, this._exceedNum = 0, this._lifeNum = 0, this._lifePro = 0, this._boxFlagPosZ = -55, this.initGoalAndRank(), this._main.event(e.GameEvent.SCROE_CHANGE, [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 3
            ]), this._touchPosX = 0, this._ballScript.gameOver = !1, this._ball.active = !0, this._ballScript.isFinish = !1, this._ballScript.power = 0, this._ballScript.ballSpeedMax = 30, this._camera.fieldOfView = 60, this.setBendAngle(new Laya.Vector4(0, 0, 0, 0)), this._curBendTime = 0, this._dstIndex = 3, this._changeTime = 2e3, this.setBendDistance(100), this._ball.transform.position = new Laya.Vector3(0, .25, 3.5), this._ball.transform.rotation = new Laya.Quaternion(0, 0, 0, 1), this._light.transform.position = new Laya.Vector3(0, 20, 7.5);
            for (m = 0; m < this._aiBalls.length; ++m) {
                var a = this._aiBalls[m].getComponentByType(e.BallScript);
                this._aiBalls[m].meshRender.material;
                GameBaseData.modelType > 0 ? this._aiBalls[m].transform.position = new Laya.Vector3(0 == m % 2 ? 1 : -1, .25, 300) : this._aiBalls[m].transform.position = new Laya.Vector3(2 < m % 4 ? 0 == m % 2 ? 2 : 1 : 0 == m % 2 ? -2 : -1, .25, 10 - 2 * m), this._aiBalls[m].transform.rotation = new Laya.Quaternion(0, 0, 0, 1), a.isExceed = !0, a.isDead = !1, a.isFinish = !1, a.power = 0, a.setDestPosX(-3), a.ballSpeedMax = 30, e.GameData.instance.record < 1 && (a.ballSpeedMax = 29), a.ballSpeedMax += e.GameData.instance.homeScreen, a.ballSpeedMax > 30 ? a.ballSpeedMax = 30 : a.ballSpeedMax < 27 && (a.ballSpeedMax = 27), a.ballSpeed = .6 * (20 * Math.random() + 20), this._aiNameTexts[m].transform.position = new Laya.Vector3(this._aiBalls[m].transform.position.x, this._aiBalls[m].transform.position.y + .5, this._aiBalls[m].transform.position.z);
                this._trailParent.getChildAt(m).active = !1
            }
            this._trailParent.getChildAt(e.GameDefine.AI_COUNT).active = !1, this._camera.transform.position = new Laya.Vector3(0, 1.5, 7.5), this._camera.transform.rotation = new Laya.Quaternion(-.05, 0, this._ball.transform.position.x / 25, 1), this._ballScript.ballSpeed = this._ballScript.getInitSpeed(), this._speedWind.transform.position = new Laya.Vector3(0, this._camera.transform.position.y, this._camera.transform.position.z - 10), this._speedWind.active = !1;
            for (m = 0; m < this._shadowParent.numChildren; ++m) {
                var i = this._shadowParent.getChildAt(m);
                m < e.GameDefine.AI_COUNT ? i.transform.position = new Laya.Vector3(this._aiBalls[m].transform.position.x, .004, this._aiBalls[m].transform.position.z) : (i.active || (i.active = !0), i.transform.position = new Laya.Vector3(this._ball.transform.position.x, .004, this._ball.transform.position.z))
            }
            for (m = this._boxParent.numChildren - 1; - 1 < m; m--) {
                var s = this._boxParent.getChildAt(m);
                1 == s.numChildren && Laya.Pool.recover("Box", s.getChildAt(0).removeSelf()), s.timer.clearAll(s), Laya.Pool.recover("Box", s.removeSelf())
            }
            for (m = this._boxParentFlag.numChildren - 1; - 1 < m; m--) {
                var o = this._boxParentFlag.getChildAt(m);
                1 == o.numChildren && Laya.Pool.recover("BoxFlag", o.getChildAt(0).removeSelf()), o.timer.clearAll(o), Laya.Pool.recover("BoxFlag", o.removeSelf())
            }
            for (m = this._buildParent.numChildren - 1; - 1 < m; m--) {
                var n = this._buildParent.getChildAt(m);
                n.timer.clearAll(n), n.removeSelf(), Laya.Pool.recover("build", n)
            }
            for (m = this._planeParent.numChildren - 1; - 1 < m; m--) {
                var r = this._planeParent.getChildAt(m);
                r.removeSelf(), Laya.Pool.recover("plane", r)
            }
            for (m = this._accBlockParent.numChildren - 1; - 1 < m; m--) {
                var l = this._accBlockParent.getChildAt(m);
                l.removeSelf(), Laya.Pool.recover(e.GameDefine.ACCELERATE_BLOCK, l)
            }
            for (m = this._deadPointParent.numChildren - 1; - 1 < m; m--) {
                var h = this._deadPointParent.getChildAt(m);
                h.timer.clearAll(h), h.removeSelf(), Laya.Pool.recover("deadPoint", h)
            }
            this._skinManager.curSkinIndex = (this._skinManager.curSkinIndex + 1) % 2;
            var d = e.SkinManager.fogColors[GameBaseData._PlaneIndex];
            this.setChildFogColor(this._shadowParent, d);
            for (var m = 0; m < this._aiBalls.length; m++) this._aiBalls[m].meshRender.material.setFogColor(d);
            this.setChildFogColor(this._deadPointParent, d), Laya.stage.bgColor = e.MathUtil.vec4ToHexStr(d), this._gameState = e.EGameState.WAIT, this._planeColorIndex = 0, this._matchRankList = []
        }, t.prototype.setChildFogColor = function(e, t) {
            for (var a = 0; a < e.numChildren; a++)
                if (0 < e.getChildAt(a).numChildren) {
                    "Box" == e.getChildAt(a).name && e.getChildAt(a).meshRender.material.setFogColor(t);
                    for (var i = 0; i < e.getChildAt(a).numChildren; i++) e.getChildAt(a).getChildAt(i).meshRender.material.setFogColor(t)
                } else e.getChildAt(a).meshRender.material.setFogColor(t)
        }, t.prototype.onChangeSkin = function() {}, t.prototype.onCarPlay = function() {
            t = this._ball.getChildAt(0).getChildAt(0).getComponentByType(Laya.Animator);
            t.enable = !0;
            for (var e = 0; e < this._aiBalls.length; e++) {
                var t;
                (t = this._aiBalls[e].getChildAt(0).getChildAt(0).getComponentByType(Laya.Animator)).enable = !0
            }
        }, t.prototype.setMatchPlayRank = function() {
            GameBaseData.matchPlayerInfo = this._matchRankList;
            for (var e = 0; e < GameBaseData.matchPlayerInfo.length; e++) GameBaseData.matchPlayerInfo[e].rank = e
        }, t.prototype.updateAutoRelive = function() {
            this._isAutoRelive && (this._autoReliveTimes % 10 < 5 ? this._ball.active = !1 : this._ball.active = !0, this._autoReliveTimes--, this._autoReliveTimes < 0 && (this._ball.active = !0, this._isAutoRelive = !1)), this._cameraShakeTime > 0 && (this._cameraShake = this._cameraShakeArray[15 - this._cameraShakeTime], this._cameraShakeTime--, this._cameraShakeTime <= 0 && (this._cameraShakeTime = 0, this._cameraShake = 0)), this._ball && (this._camera.viewport.project(this._ball.transform.position, this._camera.projectionViewMatrix, this._car2dPos), this._main.event(e.GameEvent.GAME_CarPos, [this._car2dPos.x / Laya.stage.clientScaleX, this._car2dPos.y / Laya.stage.clientScaleY]))
        }, t.prototype.onCameraShake = function(e) {
            0 == this._cameraShakeTime && (this._cameraShakeTime = 15)
        }, t.prototype.onN2oWYOpen = function(t) {
            var a = this._trailParent.getChildAt(t).glitterRender.sharedMaterial,
                i = 0;
            if (0 == t) i = GameBaseData._selectCar, a.diffuseTexture = Laya.Texture2D.load("res/tail/weiyanmax_" + i + ".png");
            else {
                i = this._aiBalls[t - 1].getComponentByType(e.BallScript)._CarSkinIndex
            }
            a.diffuseTexture = Laya.Texture2D.load("res/tail/weiyanmax_" + i + ".png")
        }, t.prototype.onN2oWYClose = function(t) {
            var a = this._trailParent.getChildAt(t).glitterRender.sharedMaterial,
                i = 0;
            if (0 == t) i = GameBaseData._selectCar, a.diffuseTexture = Laya.Texture2D.load("res/tail/weiyan_" + i + ".png");
            else {
                i = this._aiBalls[t - 1].getComponentByType(e.BallScript)._CarSkinIndex
            }
            a.diffuseTexture = Laya.Texture2D.load("res/tail/weiyan_" + i + ".png")
        }, t
    }();
    e.GameScene = t
}(touch || (touch = {}));