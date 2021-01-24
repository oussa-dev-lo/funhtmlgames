PTM_RATIO = 32;
RADIAN_TO_DEGREE = 180 / Math.PI;
DEGREE_TO_RADIAN = Math.PI / 180;
IMAGE_TYPES = [".png", ".jpg", ".bmp", ".jpeg", ".gif"];
SOUND_TYPES = [".mp3", ".ogg", ".wav", ".mp4", ".m4a"];
DEFAULT_SOUNDS_FOLDER = "res/music/";
H_ALIGHS = ["left", "center", "right"];
RESET_FRAME_ON_RECYCLE = !0;
var TileValue = TileValue || {
        WALKABLE: 0,
        BLOCK1: 1,
        BLOCK2: 2,
        BLOCK3: 3,
        BLOCK4: 4,
        BLOCK5: 5
    },
    flax = flax || {};
window.flax = flax;
flax.version = 2.4;
flax.gameVersion = 0;
flax.minToolVersion = 2;
flax.language = null;
flax.languageIndex = -1;
flax.languages = "zh en de fr it es tr pt ru".split(" ");
flax.landscape = !1;
flax.stageRect = null;
flax.designedStageSize = null;
flax.osVersion = "unknown";
flax.assetsManager = null;
flax.inputManager = null;
flax.mousePos = null;
flax.currentSceneName = null;
flax.currentScene = null;
flax.prevSceneName = null;
flax.buttonSound = null;
flax.frameInterval = 1 / 60;
flax.pointZero = {
    x: 0,
    y: 0
};
flax._scenesDict = {};
flax._soundEnabled = !0;
flax._inited = !1;
flax._orientationTip = null;
flax._languageDict = null;
flax._languageToLoad = null;
flax.onDeviceRotate = null;
flax.onScreenResize = null;
flax.onSceneExit = null;
flax.onSceneEnter = null;
flax._addResVersion = function(a) {
    return cc.sys.isNative || "string" != typeof a || flax.isSoundFile(a) || -1 < a.indexOf("?v\x3d") ? a : a + "?v\x3d" + (flax.gameVersion || cc.game.config.version)
};
flax._removeResVersion = function(a) {
    if (cc.sys.isNative || "string" != typeof a || flax.isSoundFile(a)) return a;
    var b = a.indexOf("?v\x3d"); - 1 < b && (a = a.substr(0, b));
    return a
};
flax.isDomainAllowed = function() {
    if (cc.sys.isNative) return !0;
    var a = document.domain,
        b = cc.game.config.domainAllowed;
    return flax.isLocalDebug() || null == b || 0 == b.length || -1 < b.indexOf(a)
};
flax.isLocalDebug = function() {
    if (cc.sys.isNative) return !1;
    var a = document.domain;
    return "localhost" == a || 0 == a.indexOf("192.168.")
};
if (!cc.sys.isNative && (flax.isLocalDebug() && (flax.gameVersion = 1 + Math.floor(999998 * Math.random())), setTimeout(function() {
            var a = document.body.style.backgroundColor,
                b = null;
            null === cc.game.config || void 0 === cc.game.config ? console.log('---"Flax.js:cc.game" has no "config" property at present! No influence!!!---') : (b = document.getElementById(cc.game.config.id), b.style.backgroundColor = a);
            a = a.replace("rgb(", "");
            a = a.replace(")", "");
            a = a.split(",");
            flax.bgColor = cc.color(parseInt(a[0]), parseInt(a[1]), parseInt(a[2]))
        },
        0.01), cc.sys.isMobile)) {
    var __hideBottomBar = function() {
            document.body.scrollTop = 0
        },
        orientationEvent = "onorientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener(orientationEvent, __hideBottomBar, !0);
    __hideBottomBar()
}
flax.init = function(a, b, c) {
    if (!flax._inited) {
        flax._inited = !0;
        cc.log("Flax inited, version: " + flax.version);
        null == a && (a = cc.sys.isMobile ? cc.ResolutionPolicy.NO_BORDER : cc.ResolutionPolicy.SHOW_ALL);
        flax.fetchUserData && flax.fetchUserData(b);
        flax._checkOSVersion();
        b = c ? c.width : cc.game.config.width;
        c = c ? c.height : cc.game.config.height;
        if (!b || !c) throw "Please set the game width and height in the project.json!";
        if (cc.sys.isNative) cc.view.setDesignResolutionSize(b, c, a);
        else {
            var d = document.getElementById(cc.game.config.id);
            d.width = b = b || d.width;
            d.height = c = c || d.height;
            cc.view.adjustViewPort(!0);
            cc.view.setDesignResolutionSize(b, c, a);
            cc.view.resizeWithBrowserSize(!0)
        }
        flax.designedStageSize = cc.size(b, c);
        flax.frameInterval = 1 / cc.game.config.frameRate;
        flax.assetsManager = flax.AssetsManager.create();
        a = cc.game.config.language;
        null == a || "" == a ? null == flax.language && (a = cc.sys.language, flax.updateLanguage(a)) : flax.updateLanguage(a);
        flax.stageRect = cc.rect(cc.visibleRect.bottomLeft.x, cc.visibleRect.bottomLeft.y, cc.visibleRect.width,
            cc.visibleRect.height);
        flax.onDeviceRotate = new signals.Signal;
        flax.onScreenResize = new signals.Signal;
        flax.onSceneExit = new signals.Signal;
        flax.onSceneEnter = new signals.Signal;
        cc.sys.isNative || window.addEventListener("resize", function() {
            flax.stageRect = cc.rect(cc.visibleRect.bottomLeft.x, cc.visibleRect.bottomLeft.y, cc.visibleRect.width, cc.visibleRect.height);
            flax.onScreenResize.dispatch()
        }, !1)
    }
};
flax.getLanguageStr = function(a, b) {
    if (null == flax._languageDict) return cc.log("Warning: there is no language defined: " + flax.language), null;
    var c = flax._languageDict[a];
    if (null == c) cc.log("Warning: there is no language string for key: " + a);
    else if (b)
        for (a in b) c = c.replace(RegExp("{" + a + "}", "g"), b[a]);
    return c
};
flax.updateLanguage = function(a) {
    null != a && "" != a && a != flax.language && (flax.language = a, cc.game.config.languages && cc.game.config.languages.length && (flax.languages = cc.game.config.languages), flax.languageIndex = flax.languages.indexOf(a), -1 == flax.languageIndex && cc.log("Invalid language: " + a), cc.game.config.languageJson && (flax._languageToLoad = flax._getLanguagePath(a)))
};
flax._getLanguagePath = function(a) {
    return "res/locale/" + (a || flax.language) + ".json"
};
flax.createDisplay = function(a, b, c, d, e) {
    return flax.assetsManager.createDisplay(a, b, c, d, e)
};
flax.addListener = function(a, b, c, d) {
    flax.inputManager.addListener(a, b, c, d)
};
flax.removeListener = function(a, b, c) {
    flax.inputManager.removeListener(a, b, c)
};
flax.addModule = function(a, b, c) {
    if (null == b) throw "Module can not be null!";
    for (var d in b)
        if (0 == d.indexOf("on")) {
            var e = "__" + d,
                f = e + "Num";
            void 0 === a.prototype[f] ? a.prototype[f] = 0 : a.prototype[f]++;
            a.prototype[e + a.prototype[f]] = b[d]
        } else !0 !== c && a.prototype[d] || (e = b[d], !e || "function" !== typeof e.get && "function" !== typeof e.set ? a.prototype[d] = e : "function" === typeof e.clone ? a.prototype[d] = e.clone() : Object.defineProperty(a.prototype, d, e))
};
flax.callModuleFunction = function(a, b, c) {
    b = "__" + b;
    var d = a[b + "Num"];
    if (void 0 !== d)
        for (; 0 <= d;) a[b + d](c), d--;
    else if (a[b]) a[b](c)
};
flax.callModuleOnEnter = function(a) {
    flax.callModuleFunction(a, "onEnter")
};
flax.callModuleOnExit = function(a) {
    flax.callModuleFunction(a, "onExit")
};
flax._checkOSVersion = function() {
    if (!cc.sys.isNative) {
        var a = navigator.userAgent,
            b;
        a.match(/iPad/i) || a.match(/iPhone/i) ? (b = a.indexOf("OS "), cc.sys.os = cc.sys.OS_IOS, -1 < b && (flax.osVersion = a.substr(b + 3, 3).replace("_", "."))) : a.match(/Android/i) && (b = a.indexOf("Android "), cc.sys.os = cc.sys.OS_ANDROID, -1 < b && (flax.osVersion = a.substr(b + 8, 3)))
    }
};
flax.registerScene = function(a, b, c) {
    c || (c = []);
    c instanceof Array || (c = [c]);
    flax._scenesDict[a] = {
        scene: b,
        res: c
    }
};
flax.replaceScene = function(a, b, c) {
    if (flax.isDomainAllowed()) {
        flax.currentSceneName && flax.onSceneExit.dispatch(flax.currentSceneName);
        flax.ObjectPool && flax.ObjectPool.release();
        flax.BulletCanvas && flax.BulletCanvas.release();
        cc.director.resume();
        flax.prevSceneName = flax.currentSceneName;
        flax.currentSceneName = a;
        flax.stopPhysicsWorld && flax.stopPhysicsWorld();
        flax.inputManager && flax.inputManager.removeFromParent();
        flax.clearDraw && flax.clearDraw(!0);
        var d = flax._scenesDict[a];
        if (null == d) throw "Please register the scene: " +
            a + " firstly!";
        flax._languageToLoad && -1 == d.res.indexOf(flax._languageToLoad) && d.res.push(flax._languageToLoad);
        if (flax._fontResources)
            for (var e in flax._fontResources) d.res.push({
                type: "font",
                name: e,
                srcs: flax._fontResources[e]
            });
        flax.preload(d.res, function() {
            if (flax._languageToLoad) {
                flax._languageDict = cc.loader.getRes(flax._getLanguagePath());
                var a = d.res.indexOf(flax._languageToLoad); - 1 < a && d.res.splice(a, 1);
                flax._languageToLoad = null
            }
            if (flax._fontResources) {
                for (a = d.res.length; a--;) "object" == typeof d.res[a] &&
                    d.res.splice(a, 1);
                flax._fontResources = null
            }
            flax.currentScene = new d.scene;
            a = !1;
            if (b) {
                if (!c || 0 > c) c = 0.5;
                var e = b.create(c, flax.currentScene);
                e && (a = !0, cc.director.runScene(e))
            }
            a || cc.director.runScene(flax.currentScene);
            flax.inputManager = new flax.InputManager;
            flax.currentScene.addChild(flax.inputManager, 999999);
            flax._checkDeviceOrientation();
            flax.onSceneEnter.dispatch(flax.currentSceneName)
        })
    }
};
flax.refreshScene = function() {
    flax.currentSceneName && flax.replaceScene(flax.currentSceneName)
};
flax._soundResources = {};
flax.preload = function(a, b, c, d) {
    if (null != a && 0 != a.length) {
        "string" === typeof a && (a = [a]);
        for (var e = !1, f = [], g = a.length; g--;) {
            var k = a[g];
            if (null == k) throw "There is a null resource!";
            if (null == cc.loader.getRes(k) && null == flax._soundResources[k])
                if ("string" != typeof k || ".flax" != cc.path.extname(k) || !cc.sys.isNative && !1 !== cc.game.config.useFlaxRes) e = !0, f.unshift(flax._addResVersion(k));
                else {
                    cc.sys.isNative && cc.log("***Warning: .flax is not support JSB for now, use .plist + .png insteadly!");
                    var m = cc.path.changeBasename(k,
                            ".plist"),
                        k = cc.path.changeBasename(k, ".png");
                    null == cc.loader.getRes(k) && (f.unshift(flax._addResVersion(m)), f.unshift(flax._addResVersion(k)), e = !0)
                }
        }
        if (e) {
            var n = flax.nameToObject(cc.game.config.preloader || "flax.Preloader");
            !0 === c && (n = flax.ResPreloader);
            n = new n;
            n.initWithResources(f, function() {
                !0 === c && (flax.inputManager.removeMask(n), n.removeFromParent());
                if (!cc.sys.isNative)
                    for (var a = f.length; a--;) {
                        var e = f[a];
                        flax.isSoundFile(e) && (flax._soundResources[e] = "loaded");
                        var g = cc.loader.getRes(e);
                        if (g) {
                            var k =
                                flax._removeResVersion(e);
                            cc.loader.cache[k] = g;
                            flax.isImageFile(k) && cc.sys.capabilities.opengl && cc.textureCache.handleLoadedTexture(k);
                            cc.loader.release(e)
                        }
                    }
                b.apply(d)
            });
            !0 === c ? (flax.currentScene.addChild(n, 999999), flax.inputManager.addMask(n)) : cc.director.runScene(n);
            return n
        }
    }
    b.apply(d)
};
flax.setSoundEnabled = function(a) {
    if (flax._soundEnabled != a) {
        flax._soundEnabled = a;
        var b = cc.audioEngine;
        a ? (b.resumeMusic(), flax._lastMusic && (flax.playMusic(flax._lastMusic, !0), flax._lastMusic = null)) : (b.pauseMusic(), b.stopAllEffects())
    }
};
flax.getSoundEnabled = function() {
    return flax._soundEnabled
};
flax._lastMusic = null;
flax.playMusic = function(a, b, c) {
    var d = cc.audioEngine;
    d.stopMusic(!0 === c);
    flax._soundEnabled ? d.playMusic(a, b) : flax._lastMusic = a
};
flax.stopMusic = function(a) {
    cc.audioEngine.stopMusic(!0 === a)
};
flax.pauseMusic = function() {
    cc.audioEngine.pauseMusic()
};
flax.resumeMusic = function() {
    cc.audioEngine.resumeMusic()
};
flax.playEffect = function(a) {
    if (flax._soundEnabled) return cc.audioEngine.playEffect(a)
};
flax.stopEffect = function(a) {
    var b = cc.audioEngine;
    null != a ? b.stopEffect(a) : b.stopAllEffects()
};
flax.playSound = function(a) {
    return flax.playEffect(a)
};
flax._checkDeviceOrientation = function() {
    if (!cc.sys.isNative) {
        if (!flax._orientationTip && cc.sys.isMobile) {
            if (cc.game.config.rotateImg) {
                flax._orientationTip = cc.LayerColor.create(flax.bgColor, cc.visibleRect.width + 10, cc.visibleRect.height + 10);
                var a = new cc.Sprite(cc.game.config.rotateImg);
                a.setPosition(cc.visibleRect.center);
                flax._orientationTip.__icon = a;
                flax._orientationTip.addChild(a)
            }
            window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", flax._showOrientaionTip, !0);
            flax._showOrientaionTip()
        }
        flax._orientationTip &&
            (flax._orientationTip.removeFromParent(), flax.currentScene.addChild(flax._orientationTip, Number.MAX_VALUE))
    }
};
flax._oldGamePauseState = !1;
flax._showOrientaionTip = function() {
    var a = 90 == Math.abs(window.orientation),
        b = cc.game.config.landscape;
    flax._orientationTip && (flax._orientationTip.visible = b != a, flax._orientationTip.__icon.rotation = a ? -90 : 0, document.body.scrollTop = 0, flax._orientationTip.visible ? (flax.landscape != a && (flax._oldGamePauseState = cc.director.isPaused()), cc.director.pause()) : flax._oldGamePauseState || cc.director.resume(), flax.inputManager.enabled = !flax._orientationTip.visible);
    flax.landscape = a;
    flax.onDeviceRotate.dispatch(flax.landscape)
};
flax.getAngle = function(a, b, c) {
    var d = 0,
        e = 0;
    a && (d = a.x, e = a.y);
    return flax.getAngle1(b.x - d, b.y - e, c)
};
flax.getAngle1 = function(a, b, c) {
    void 0 === c && (c = !0);
    a = Math.atan2(a, b);
    0 > a && (a += 2 * Math.PI);
    c && (a *= RADIAN_TO_DEGREE);
    return a
};
flax.getDistance = function(a, b) {
    var c = b.x - (null == a ? 0 : a.x),
        d = b.y - (null == a ? 0 : a.y);
    return Math.sqrt(c * c + d * d)
};
flax.getPointOnCircle = function(a, b, c) {
    c = (90 - c) * DEGREE_TO_RADIAN;
    var d = a ? a.y : 0;
    return {
        x: (a ? a.x : 0) + b * Math.cos(c),
        y: d + b * Math.sin(c)
    }
};
flax.getPosition = function(a, b) {
    var c = a.getPosition();
    a.parent && (b && (c = a.parent.convertToWorldSpace(c)), b instanceof cc.Sprite && (c = b.convertToNodeSpace(c)));
    return c
};
flax.getRotation = function(a, b) {
    if (!1 == b) return a.rotation;
    for (var c = 0, d = a; d && (c += d.rotation, d = d.parent, d !== b););
    return c
};
flax.getScale = function(a, b) {
    if (!1 == b) return {
        x: a.scaleX,
        y: a.scaleY
    };
    for (var c = 1, d = 1, e = a; e && (c *= e.scaleX, d *= e.scaleY, e = e.parent, e !== b););
    return {
        x: c,
        y: d
    }
};
flax.getRect = function(a, b) {
    var c;
    if (a.getRect) return c = a.getRect(b);
    if ((a instanceof cc.Layer || a instanceof cc.Scene) && !(cc.EditBox && a instanceof cc.EditBox)) return flax.stageRect;
    null == b && (b = !0);
    c = a.getContentSize();
    var d = flax.getScale(a, b),
        e = a.getPosition();
    if (a.parent)
        if (b) b != a.parent && (e = a.parent.convertToWorldSpace(e), b instanceof cc.Node && (e = b.convertToNodeSpace(e)));
        else return c.width *= Math.abs(d.x), c.height *= Math.abs(d.y), cc.rect(0, 0, c.width, c.height);
    var f = a.getAnchorPoint();
    return c = cc.rect(e.x -
        c.width * d.x * f.x, e.y - c.height * d.y * f.y, c.width * Math.abs(d.x), c.height * Math.abs(d.y))
};
flax._strToRect = function(a) {
    a = a.split(",");
    return cc.rect(parseFloat(a[0]), parseFloat(a[1]), parseFloat(a[2]), parseFloat(a[3]))
};
flax.ifTouched = function(a, b) {
    if (null == a || !(a instanceof cc.Node)) return !1;
    if (a.mainCollider) return a.mainCollider.containsPoint(b);
    var c = flax.getRect(a, !0);
    return cc.rectContainsPoint(c, b)
};
flax.ifCollide = function(a, b) {
    return a.mainCollider.checkCollision(b.mainCollider)
};
flax.isFlaxDisplay = function(a) {
    return a instanceof flax.FlaxSprite || a instanceof flax.FlaxSpriteBatch || a instanceof flax.Image || flax.Scale9Image && a instanceof flax.Scale9Image
};
flax.isFlaxSprite = function(a) {
    return a instanceof flax.FlaxSprite || a instanceof flax.FlaxSpriteBatch
};
flax.isMovieClip = function(a) {
    return a instanceof flax.MovieClip || a instanceof flax.MovieClipBatch
};
flax.isButton = function(a) {
    return a instanceof flax.Button || a instanceof flax.SimpleButton
};
flax.isChildOf = function(a, b) {
    if (null == a || null == b || a == b) return !1;
    for (var c = a.parent; c;) {
        if (c == b) return !0;
        c = c.parent
    }
    return !1
};
flax.findParentWithClass = function(a, b) {
    for (var c = a; c;) {
        if (c instanceof b) return c;
        c = c.parent
    }
    return null
};
flax.findChildWithClass = function(a, b) {
    for (var c = a.children, d = c.length, e; d--;)
        if (e = c[d], e instanceof b || (e = flax.findChildWithClass(e, b))) return e;
    return null
};
flax.getUrlVars = function() {
    var a = {};
    if (cc.sys.isNative) return a;
    for (var b = window.location.search.substring(1).split("\x26"), c = 0; c < b.length; c++) {
        var d = b[c].split("\x3d");
        a[d[0]] = decodeURIComponent(d[1])
    }
    return a
};
flax.nameToObject = function(a, b) {
    if (void 0 == a || "" == a) return null;
    b = b || "function";
    for (var c = a.split("."), d = window || this, e = 0, f = c.length; e < f; e++) try {
        d = d[c[e]]
    } catch (g) {
        break
    }
    return typeof d !== b ? null : d
};
flax.createBGLayer = function(a, b) {
    null == b && (b = cc.color(255, 255, 255, 255));
    var c = cc.LayerColor.create(b, cc.visibleRect.width, cc.visibleRect.height);
    a.addChild(c, 0);
    return c
};
flax.shuffleArray = function(a, b) {
    if (void 0 === b || 0 >= b || b > a.length) b = a.length;
    for (var c = b - 1; 0 <= c; c--) {
        var d = 0 | cc.rand() % (c + 1),
            e = a[c];
        a[c] = a[d];
        a[d] = e
    }
};
flax.restrictValue = function(a, b, c) {
    a = Math.max(b, a);
    return a = Math.min(c, a)
};
flax.numberSign = function(a) {
    return 0 == a ? 0 : 0 < a ? 1 : -1
};
flax.randInt = function(a, b) {
    return a + Math.floor(Math.random() * (b - a))
};
flax.getRandomInArray = function(a, b) {
    if (null == a) return null;
    if (null == b) {
        var c = flax.randInt(0, a.length);
        return a[c]
    }
    for (var d = Math.random(), e = 0, c = 0; c < b.length && (0 >= b[c] || (e += b[c], !(d <= e))); c++);
    return a[c]
};
flax.isImageFile = function(a) {
    if ("string" != typeof a) return !1;
    a = cc.path.extname(a);
    return -1 < IMAGE_TYPES.indexOf(a)
};
flax.isSoundFile = function(a) {
    if ("string" != typeof a) return !1;
    a = cc.path.extname(a);
    return -1 < SOUND_TYPES.indexOf(a)
};
flax.copyProperties = function(a, b) {
    if (null != a && null != b)
        for (var c in a) try {
            b[c] = a[c]
        } catch (d) {}
};
flax.createDInts = function(a, b) {
    isNaN(b) && (b = 0);
    for (var c = [], d = -1, e = b - 1, f = b; ++d < a;) 0 == d % 2 ? c.push(++e) : c.push(--f);
    return c
};
flax.utf8ToUnicode = function(a) {
    if (a) {
        for (var b = "", c = a.length, d = 0, e = c, f, g, k; d < c;)
            if (f = a.charCodeAt(d), 0 == (f & 128)) {
                if (1 > e) break;
                b += String.fromCharCode(f & 127);
                d++;
                e -= 1
            } else if (192 == (f & 224)) {
            g = a.charCodeAt(d + 1);
            if (2 > e || 128 != (g & 192)) break;
            b += String.fromCharCode((f & 63) << 6 | g & 63);
            d += 2;
            e -= 2
        } else if (224 == (f & 240)) {
            g = a.charCodeAt(d + 1);
            k = a.charCodeAt(d + 2);
            if (3 > e || 128 != (g & 192) || 128 != (k & 192)) break;
            b += String.fromCharCode((f & 15) << 12 | (g & 63) << 6 | k & 63);
            d += 3;
            e -= 3
        } else break;
        return 0 != e ? "" : b
    }
};
flax.formatTime = function(a, b) {
    if (1 >= b) return a + "";
    b || (b = 2);
    var c = 0;
    2 < b && (c = Math.floor(a / 3600));
    var d = Math.floor((a - 3600 * c) / 60),
        e = a - 3600 * c - 60 * d;
    10 > c && (c = "0" + c);
    10 > d && (d = "0" + d);
    10 > e && (e = "0" + e);
    return 2 < b ? c + ":" + d + ":" + e : d + ":" + e
};
flax.generateUid = function(a, b) {
    var c = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        d = [],
        e;
    b = b || c.length;
    if (a)
        for (e = 0; e < a; e++) d[e] = c[0 | Math.random() * b];
    else {
        var f;
        d[8] = d[13] = d[18] = d[23] = "-";
        d[14] = "4";
        for (e = 0; 36 > e; e++) d[e] || (f = 0 | 16 * Math.random(), d[e] = c[19 == e ? f & 3 | 8 : f])
    }
    return d.join("")
};
flax.homeUrl = "http://flax.so";
flax.goHomeUrl = function() {
    var a = cc.game.config.homeUrl || flax.homeUrl;
    !cc.sys.isNative && a && window.open(a)
};

function SignalBinding(a, b, c, d, e) {
    this._listener = b;
    this._isOnce = c;
    this.context = d;
    this._signal = a;
    this._priority = e || 0
}
SignalBinding.prototype = {
    actived: !0,
    params: null,
    execute: function(a) {
        var b;
        this.actived && this._listener && (a = this.params ? this.params.concat(a) : a, b = this._listener.apply(this.context, a), this._isOnce && this.detach());
        return b
    },
    detach: function() {
        return this.isBound() ? this._signal.remove(this._listener, this.context) : null
    },
    isBound: function() {
        return !!this._signal && !!this._listener
    },
    isOnce: function() {
        return this._isOnce
    },
    getListener: function() {
        return this._listener
    },
    getSignal: function() {
        return this._signal
    },
    _destroy: function() {
        delete this._signal;
        delete this._listener;
        delete this.context
    },
    toString: function() {
        return "[SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", actived:" + this.actived + "]"
    }
};

function validateListener(a, b) {
    if ("function" !== typeof a) throw Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", b));
}

function Signal() {
    this._bindings = [];
    this._prevParams = null;
    var a = this;
    this.dispatch = function() {
        Signal.prototype.dispatch.apply(a, arguments)
    }
}
Signal.prototype = {
    VERSION: "::VERSION_NUMBER::",
    memorize: !1,
    _shouldPropagate: !0,
    actived: !0,
    _registerListener: function(a, b, c, d) {
        var e = this._indexOfListener(a, c);
        if (-1 !== e) {
            if (a = this._bindings[e], a.isOnce() !== b) throw Error("You cannot add" + (b ? "" : "Once") + "() then add" + (b ? "Once" : "") + "() the same listener without removing the relationship first.");
        } else a = new SignalBinding(this, a, b, c, d), this._addBinding(a);
        this.memorize && this._prevParams && a.execute(this._prevParams);
        return a
    },
    _addBinding: function(a) {
        var b =
            this._bindings.length;
        do --b; while (this._bindings[b] && a._priority <= this._bindings[b]._priority);
        this._bindings.splice(b + 1, 0, a)
    },
    _indexOfListener: function(a, b) {
        for (var c = this._bindings.length, d; c--;)
            if (d = this._bindings[c], d._listener === a && d.context === b) return c;
        return -1
    },
    has: function(a, b) {
        return -1 !== this._indexOfListener(a, b)
    },
    add: function(a, b, c) {
        validateListener(a, "add");
        return this._registerListener(a, !1, b, c)
    },
    addOnce: function(a, b, c) {
        validateListener(a, "addOnce");
        return this._registerListener(a, !0,
            b, c)
    },
    remove: function(a, b) {
        validateListener(a, "remove");
        var c = this._indexOfListener(a, b); - 1 !== c && (this._bindings[c]._destroy(), this._bindings.splice(c, 1));
        return a
    },
    removeAll: function() {
        for (var a = this._bindings.length; a--;) this._bindings[a]._destroy();
        this._bindings.length = 0
    },
    getNumListeners: function() {
        return this._bindings.length
    },
    halt: function() {
        this._shouldPropagate = !1
    },
    dispatch: function(a) {
        if (this.actived) {
            var b = Array.prototype.slice.call(arguments),
                c = this._bindings.length,
                d;
            this.memorize && (this._prevParams =
                b);
            if (c) {
                d = this._bindings.slice();
                this._shouldPropagate = !0;
                do c--; while (d[c] && this._shouldPropagate && !1 !== d[c].execute(b))
            }
        }
    },
    forget: function() {
        this._prevParams = null
    },
    dispose: function() {
        this.removeAll();
        delete this._bindings;
        delete this._prevParams
    },
    toString: function() {
        return "[Signal active:" + this.actived + " numListeners:" + this.getNumListeners() + "]"
    }
};
var signals = Signal;
signals.Signal = Signal;
(function(a) {
    "function" === typeof define && define.amd ? define(function() {
        return signals
    }) : "undefined" !== typeof module && module.exports ? module.exports = signals : a.signals = signals
})(this);
flax.__drawNode = null;
flax.createDrawNode = function(a, b) {
    flax.__drawNode && flax.__drawNode.parent && !a || (null == flax.__drawNode && (flax.__drawNode = cc.DrawNode.create()), flax.currentScene && (a || (a = flax.currentScene), flax.__drawNode.parent && flax.__drawNode.parent != a && (flax.__drawNode.removeFromParent(), flax.__drawNode.clear()), null == flax.__drawNode.parent && a.addChild(flax.__drawNode), flax.__drawNode.zIndex = b || 99999))
};
flax.clearDraw = function(a) {
    null != flax.__drawNode && (flax.__drawNode.clear(), !0 === a && (flax.__drawNode.removeFromParent(), flax.__drawNode = null))
};
flax.drawLine = function(a, b, c, d) {
    flax.createDrawNode();
    null == c && (c = 1);
    null == d && (d = cc.color(255, 0, 0, 255));
    flax.__drawNode.drawSegment(a, b, c, d)
};
flax.drawRay = function(a, b, c, d, e) {
    flax.drawLine(a, flax.getPointOnCircle(a, c, b), d, e)
};
flax.drawRect = function(a, b, c, d) {
    flax.createDrawNode();
    null == b && (b = 1);
    null == c && (c = cc.color(255, 0, 0, 255));
    var e = cc.pAdd(cc.p(a.x, a.y), cc.p(a.width, a.height));
    flax.__drawNode.drawRect(cc.p(a.x, a.y), e, d, b, c)
};
flax.drawStageRect = function() {
    var a = h = 2;
    flax.drawRect(cc.rect(flax.stageRect.x + a, flax.stageRect.y + h, flax.stageRect.width - 2 * a, flax.stageRect.height - 2 * h))
};
flax.drawCircle = function(a, b, c, d) {
    flax.createDrawNode();
    null == c && (c = 1);
    null == d && (d = cc.color(255, 0, 0, 255));
    flax.__drawNode.drawCircle(a, b, 360, 360, !1, c, d)
};
flax.drawDot = function(a, b, c) {
    flax.createDrawNode();
    null == b && (b = 3);
    null == c && (c = cc.color(255, 0, 0, 255));
    flax.__drawNode.drawDot(a, b, c)
};
var InputType = {
    press: "onPress",
    up: "onUp",
    click: "onClick",
    move: "onMouseMove",
    keyPress: "onKeyPress",
    keyUp: "onKeyUp"
};
flax.InputManager = cc.Node.extend({
    enabled: !0,
    nullEnabled: !1,
    inTouching: !1,
    inDragging: !1,
    justDragged: !1,
    justDragDist: 0,
    _masks: [],
    _callbacks: {},
    _keyboardCallbacks: {},
    _keyboardListener: null,
    _touchListeners: null,
    ctor: function() {
        cc.Node.prototype.ctor.call(this);
        this._masks = [];
        this.inTouching = !1;
        this._callbacks = {};
        this._keyboardCallbacks = {};
        this._keyboardListener = null;
        this._touchListeners = {}
    },
    onEnter: function() {
        this._super();
        var a = this;
        if (!cc.sys.isMobile) {
            var b = cc.EventListener.create({
                event: cc.EventListener.MOUSE,
                onMouseMove: function(b) {
                    a.inDragging = 0 == b.getButton();
                    if (a.justDragged = a.inDragging) a.justDragDist += cc.pLength(b.getDelta());
                    a.inDragging || a._dispatchOne(a, b, {
                        target: a,
                        currentTarget: a
                    }, InputType.move);
                    flax.mousePos = b.getLocation()
                }
            });
            cc.eventManager.addListener(b, this)
        }
        b = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: !1,
            onTouchBegan: function(b, d) {
                flax.mousePos = b.getLocation();
                if (!a.nullEnabled || !a.enabled) return !1;
                a.inDragging = !1;
                a.justDragged = !1;
                a.justDragDist = 0;
                a.inTouching = !0;
                a._dispatchOne(a, b, d, InputType.press);
                return !0
            },
            onTouchEnded: function(b, d) {
                a.nullEnabled && (a.inDragging = !1, a.inTouching = !1, a._dispatchOne(a, b, d, InputType.up), a._dispatchOne(a, b, d, InputType.click))
            },
            onTouchMoved: function(b, d) {
                flax.mousePos = b.getLocation();
                a.nullEnabled && (a.inDragging = !0, a.justDragged = !0, a.justDragDist += cc.pLength(b.getDelta()), a._dispatchOne(a, b, d, InputType.move))
            }
        });
        cc.eventManager.addListener(b, this)
    },
    onExit: function() {
        this._super();
        this.removeAllTouchListeners();
        this.removeAllKeyboardListeners();
        this.removeAllMasks()
    },
    addMask: function(a) {
        -1 < this._masks.indexOf(a) || (this._masks.push(a), a.__isInputMask = !0)
    },
    removeMask: function(a) {
        var b = this._masks.indexOf(a); - 1 < b && (this._masks.splice(b, 1), a.__isInputMask = !1)
    },
    removeAllMasks: function() {
        for (var a = this._masks.length; a--;) this._masks[a].__isInputMask = !1, this._masks.splice(a, 1);
        this._masks.length = 0
    },
    _compareRealZIndex: function(a, b) {
        if (!a.parent || !b.parent) return 1;
        if (a.parent == b.parent) return this._childIsOnFront(a,
            b);
        for (var c = null, d = 0, e = [], f = a.parent; f;) e.push(f), f = f.parent;
        for (var g = [], f = b.parent; f;) {
            d = e.indexOf(f);
            if (-1 < d) {
                c = f;
                break
            }
            g.push(f);
            f = f.parent
        }
        e = e.slice(0, d);
        return this._childIsOnFront(e[e.length - 1] || a, g[g.length - 1] || b, c) ? 1 : -1
    },
    _childIsOnFront: function(a, b, c) {
        null == c && (c = a.parent);
        return c.children.indexOf(a) > c.children.indexOf(b)
    },
    addListener: function(a, b, c, d) {
        if (null == b) throw "Event callback can not be null!";
        var e = c == InputType.keyPress || c == InputType.keyUp;
        null == a && (a = this, e || cc.log("Listening target is null, make sure you want to listen to the full screen input!"));
        if (e) {
            e = this._keyboardCallbacks[c];
            null == e && (e = [], this._keyboardCallbacks[c] = e);
            for (var f = e.length; f--;)
                if (e[f].func == b) return;
            e.push({
                func: b,
                context: d || a
            });
            this._keyboardListener || this._createKeyboardListener()
        } else {
            c = null == c ? InputType.click : c;
            null == a.__instanceId && (a.__instanceId = ClassManager.getNewInstanceId());
            e = this._callbacks[a.__instanceId];
            null == e && (e = [], this._callbacks[a.__instanceId] = e, a != this && (f = this._createListener(a, !0), this._touchListeners[a.__instanceId] = f));
            for (f = e.length; f--;)
                if (e[f].type ==
                    c && e[f].func == b) return;
            e.push({
                type: c,
                func: b,
                context: d || a
            })
        }
    },
    removeListener: function(a, b, c) {
        null == a && (a = this);
        var d = this._callbacks[a.__instanceId];
        if (d && (null == c || c != InputType.keyPress && c != InputType.keyUp)) {
            var e = null,
                f = d.length;
            if (b || c)
                for (; f--;) e = d[f], c && e.type != c || b && e.func != b || d.splice(f, 1);
            if (0 == d.length || !b && !c) delete this._callbacks[a.__instanceId], this._touchListeners[a.__instanceId] && delete this._touchListeners[a.__instanceId]
        }
        if (b && (null == c || c == InputType.keyPress || c == InputType.keyUp) &&
            (null == c ? (d = this._keyboardCallbacks[InputType.keyPress] || [], d = d.concat(this._keyboardCallbacks[InputType.keyUp] || [])) : d = this._keyboardCallbacks[c], d && d.length))
            for (f = d.length; f--;) e = d[f], e.func == b && d.splice(f, 1)
    },
    removeAllTouchListeners: function() {
        this._callbacks = {};
        for (var a in this._touchListeners) cc.eventManager.removeListener(this._touchListeners[a]), delete this._touchListeners[a]
    },
    removeAllKeyboardListeners: function() {
        this._keyboardCallbacks = {};
        this._keyboardListener && (this._keyboardListener =
            null)
    },
    handleTouchBegan: function(a, b) {
        if (!this.enabled) return !1;
        var c = b.getCurrentTarget();
        if (this._ifTargetIgnore(c, a)) return !1;
        var d = a.getLocation();
        if (!this._ifNotMasked(c, d)) return !1;
        b.currentTarget = c;
        b.target = this._findRealTarget(c, d) || c;
        if ((c instanceof cc.Layer || c instanceof flax.MovieClip) && b.target == c) return !1;
        this._dispatch(c, a, b, InputType.press);
        return !0
    },
    handleTouchEnded: function(a, b) {
        var c = b.getCurrentTarget();
        b.currentTarget = c;
        b.target = this._findRealTarget(c, a.getLocation()) || c;
        this._dispatch(c,
            a, b, InputType.up);
        flax.ifTouched(c, a.getLocation()) && this._dispatch(c, a, b, InputType.click)
    },
    handleTouchMoved: function(a, b) {
        var c = b.getCurrentTarget();
        this._dispatch(c, a, b, InputType.move)
    },
    _createListener: function(a, b) {
        var c = this,
            d = cc.EventListener.create({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                swallowTouches: b,
                onTouchBegan: function(a, b) {
                    return c.handleTouchBegan(a, b)
                },
                onTouchEnded: function(a, b) {
                    c.handleTouchEnded(a, b)
                },
                onTouchMoved: function(a, b) {
                    c.handleTouchMoved(a, b)
                },
                onTouchCancelled: function(a,
                    b) {
                    c.handleTouchEnded(a, b)
                }
            });
        cc.eventManager.addListener(d, a);
        return d
    },
    _createKeyboardListener: function() {
        var a = this;
        this._keyboardListener = {
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(b, c) {
                a._dispatchKeyboardEvent(b, InputType.keyPress)
            },
            onKeyReleased: function(b, c) {
                a._dispatchKeyboardEvent(b, InputType.keyUp)
            }
        };
        cc.eventManager.addListener(this._keyboardListener, this)
    },
    _ifNotMasked: function(a, b) {
        for (var c = this._masks.length, d = null, d = null; c--;)
            if (d = this._masks[c], a != d && !flax.isChildOf(a,
                    d) && !flax.isChildOf(d, a) && !this._ifTargetIgnore(d) && 1 == this._compareRealZIndex(d, a) && (d = this._findRealTarget(d, b))) return !1;
        return !0
    },
    _findRealTarget: function(a, b) {
        a instanceof Array || (a = [a]);
        for (var c = null, d = a.length; d--;)
            if (c = a[d], !this._ifTargetIgnore(c)) {
                if (0 < c.children.length && (this._temp = this._findRealTarget(c.children, b))) return this._temp;
                if (flax.ifTouched(c, b)) return c
            }
        return null
    },
    _ifTargetIgnore: function(a, b) {
        return null == a || !(a instanceof cc.Scene || a.parent) || !this._ifTargetVisible(a) ||
            a.isMouseEnabled && !1 === a.isMouseEnabled() || b && !flax.ifTouched(a, b.getLocation()) ? !0 : !1
    },
    _ifTargetVisible: function(a) {
        for (; a;) {
            if (!a.visible) return !1;
            a = a.parent
        }
        return !0
    },
    _dispatch: function(a, b, c, d) {
        for (var e = []; a;) {
            var f = this._callbacks[a.__instanceId];
            f && f.length && e.push(a);
            a = a.parent
        }
        for (f = 0; f < e.length; f++) a = e[f], this._dispatchOne(a, b, c, d)
    },
    _dispatchOne: function(a, b, c, d) {
        var e = this._callbacks[a.__instanceId];
        if (e && e.length) {
            c.currentTarget = a;
            c.inputType = d;
            a = null;
            for (var f = [], g = e.length; g--;) a = e[g],
                a.type == d && f.push(a);
            for (g = f.length; g--;) a = f[g], a.func.apply(a.context, [b, c])
        }
    },
    _dispatchKeyboardEvent: function(a, b) {
        var c = this._keyboardCallbacks[b];
        if (c && c.length) {
            for (var d = this._getNativeKeyName(a), e = null, f = [], g = c.length; g--;) e = c[g], f.push(e);
            for (g = f.length; g--;) e = f[g], e.func.apply(e.context, [d])
        }
    },
    _getNativeKeyName: function(a) {
        var b = Object.getOwnPropertyNames(flax.KEY),
            c = "",
            d;
        for (d in b)
            if (flax.KEY[b[d]] == a) {
                c = b[d];
                break
            }
        return c
    }
});
flax.KEY = {
    none: 0,
    back: 6,
    menu: 18,
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pause: 19,
    capslock: 20,
    escape: 27,
    space: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    select: 41,
    insert: 45,
    Delete: 46,
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    num0: 96,
    num1: 97,
    num2: 98,
    num3: 99,
    num4: 100,
    num5: 101,
    num6: 102,
    num7: 103,
    num8: 104,
    num9: 105,
    "*": 106,
    "+": 107,
    "-": 109,
    numdel: 110,
    "/": 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrolllock: 145,
    ";": 186,
    semicolon: 186,
    equal: 187,
    "\x3d": 187,
    ",": 188,
    comma: 188,
    dash: 189,
    ".": 190,
    period: 190,
    forwardslash: 191,
    grave: 192,
    "[": 219,
    openbracket: 219,
    backslash: 220,
    "]": 221,
    closebracket: 221,
    quote: 222,
    dpadLeft: 1E3,
    dpadRight: 1001,
    dpadUp: 1003,
    dpadDown: 1004,
    dpadCenter: 1005
};
/*
 zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */
(function() {
    function a(a, b) {
        var c = a.split("."),
            d = g;
        c[0] in d || !d.execScript || d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());) c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
    }

    function b(a) {
        var b = a.length,
            c = 0,
            d = Number.POSITIVE_INFINITY,
            e, f, g, m, n, p, r, s, t;
        for (s = 0; s < b; ++s) a[s] > c && (c = a[s]), a[s] < d && (d = a[s]);
        e = 1 << c;
        f = new(k ? Uint32Array : Array)(e);
        g = 1;
        m = 0;
        for (n = 2; g <= c;) {
            for (s = 0; s < b; ++s)
                if (a[s] === g) {
                    p = 0;
                    r = m;
                    for (t = 0; t < g; ++t) p = p << 1 | r & 1, r >>= 1;
                    r = g << 16 | s;
                    for (t = p; t < e; t += n) f[t] = r;
                    ++m
                }++g;
            m <<= 1;
            n <<= 1
        }
        return [f,
            c, d
        ]
    }

    function c(a, b) {
        this.g = [];
        this.h = 32768;
        this.c = this.f = this.d = this.k = 0;
        this.input = k ? new Uint8Array(a) : a;
        this.l = !1;
        this.i = n;
        this.q = !1;
        if (b || !(b = {})) b.index && (this.d = b.index), b.bufferSize && (this.h = b.bufferSize), b.bufferType && (this.i = b.bufferType), b.resize && (this.q = b.resize);
        switch (this.i) {
            case m:
                this.a = 32768;
                this.b = new(k ? Uint8Array : Array)(32768 + this.h + 258);
                break;
            case n:
                this.a = 0;
                this.b = new(k ? Uint8Array : Array)(this.h);
                this.e = this.v;
                this.m = this.s;
                this.j = this.t;
                break;
            default:
                throw Error("invalid inflate mode");
        }
    }

    function d(a, b) {
        for (var c = a.f, d = a.c, e = a.input, f = a.d, g = e.length; d < b;) {
            if (f >= g) throw Error("input buffer is broken");
            c |= e[f++] << d;
            d += 8
        }
        a.f = c >>> b;
        a.c = d - b;
        a.d = f;
        return c & (1 << b) - 1
    }

    function e(a, b) {
        for (var c = a.f, d = a.c, e = a.input, f = a.d, g = e.length, k = b[0], m = b[1]; d < m && !(f >= g);) c |= e[f++] << d, d += 8;
        e = k[c & (1 << m) - 1];
        g = e >>> 16;
        a.f = c >> g;
        a.c = d - g;
        a.d = f;
        return e & 65535
    }

    function f(a) {
        function c(a, b, f) {
            var g, k = this.p,
                m, n;
            for (n = 0; n < a;) switch (g = e(this, b), g) {
                case 16:
                    for (m = 3 + d(this, 2); m--;) f[n++] = k;
                    break;
                case 17:
                    for (m = 3 + d(this,
                            3); m--;) f[n++] = 0;
                    k = 0;
                    break;
                case 18:
                    for (m = 11 + d(this, 7); m--;) f[n++] = 0;
                    k = 0;
                    break;
                default:
                    k = f[n++] = g
            }
            this.p = k;
            return f
        }
        var f = d(a, 5) + 257,
            g = d(a, 5) + 1,
            m = d(a, 4) + 4,
            n = new(k ? Uint8Array : Array)(r.length),
            p;
        for (p = 0; p < m; ++p) n[r[p]] = d(a, 3);
        if (!k)
            for (p = m, m = n.length; p < m; ++p) n[r[p]] = 0;
        m = b(n);
        n = new(k ? Uint8Array : Array)(f);
        p = new(k ? Uint8Array : Array)(g);
        a.p = 0;
        a.j(b(c.call(a, f, m, n)), b(c.call(a, g, m, p)))
    }
    var g = this,
        k = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Uint32Array && "undefined" !==
        typeof DataView,
        m = 0,
        n = 1;
    c.prototype.u = function() {
        for (; !this.l;) {
            var a = d(this, 3);
            a & 1 && (this.l = !0);
            a >>>= 1;
            switch (a) {
                case 0:
                    var a = this.input,
                        b = this.d,
                        c = this.b,
                        e = this.a,
                        g = a.length,
                        p = void 0,
                        r = void 0,
                        s = c.length,
                        r = void 0;
                    this.c = this.f = 0;
                    if (b + 1 >= g) throw Error("invalid uncompressed block header: LEN");
                    p = a[b++] | a[b++] << 8;
                    if (b + 1 >= g) throw Error("invalid uncompressed block header: NLEN");
                    r = a[b++] | a[b++] << 8;
                    if (p === ~r) throw Error("invalid uncompressed block header: length verify");
                    if (b + p > a.length) throw Error("input buffer is broken");
                    switch (this.i) {
                        case m:
                            for (; e + p > c.length;) {
                                r = s - e;
                                p -= r;
                                if (k) c.set(a.subarray(b, b + r), e), e += r, b += r;
                                else
                                    for (; r--;) c[e++] = a[b++];
                                this.a = e;
                                c = this.e();
                                e = this.a
                            }
                            break;
                        case n:
                            for (; e + p > c.length;) c = this.e({
                                o: 2
                            });
                            break;
                        default:
                            throw Error("invalid inflate mode");
                    }
                    if (k) c.set(a.subarray(b, b + p), e), e += p, b += p;
                    else
                        for (; p--;) c[e++] = a[b++];
                    this.d = b;
                    this.a = e;
                    this.b = c;
                    break;
                case 1:
                    this.j(C, D);
                    break;
                case 2:
                    f(this);
                    break;
                default:
                    throw Error("unknown BTYPE: " + a);
            }
        }
        return this.m()
    };
    var p = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12,
            3, 13, 2, 14, 1, 15
        ],
        r = k ? new Uint16Array(p) : p,
        p = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
        t = k ? new Uint16Array(p) : p,
        p = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
        s = k ? new Uint8Array(p) : p,
        p = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
        v = k ? new Uint16Array(p) : p,
        p = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        u = k ? new Uint8Array(p) : p,
        p = new(k ? Uint8Array :
            Array)(288),
        y, A;
    y = 0;
    for (A = p.length; y < A; ++y) p[y] = 143 >= y ? 8 : 255 >= y ? 9 : 279 >= y ? 7 : 8;
    var C = b(p),
        p = new(k ? Uint8Array : Array)(30);
    y = 0;
    for (A = p.length; y < A; ++y) p[y] = 5;
    var D = b(p);
    c.prototype.j = function(a, b) {
        var c = this.b,
            f = this.a;
        this.n = a;
        for (var g = c.length - 258, k, m, n; 256 !== (k = e(this, a));)
            if (256 > k) f >= g && (this.a = f, c = this.e(), f = this.a), c[f++] = k;
            else
                for (k -= 257, n = t[k], 0 < s[k] && (n += d(this, s[k])), k = e(this, b), m = v[k], 0 < u[k] && (m += d(this, u[k])), f >= g && (this.a = f, c = this.e(), f = this.a); n--;) c[f] = c[f++ - m];
        for (; 8 <= this.c;) this.c -=
            8, this.d--;
        this.a = f
    };
    c.prototype.t = function(a, b) {
        var c = this.b,
            f = this.a;
        this.n = a;
        for (var g = c.length, k, m, n; 256 !== (k = e(this, a));)
            if (256 > k) f >= g && (c = this.e(), g = c.length), c[f++] = k;
            else
                for (k -= 257, n = t[k], 0 < s[k] && (n += d(this, s[k])), k = e(this, b), m = v[k], 0 < u[k] && (m += d(this, u[k])), f + n > g && (c = this.e(), g = c.length); n--;) c[f] = c[f++ - m];
        for (; 8 <= this.c;) this.c -= 8, this.d--;
        this.a = f
    };
    c.prototype.e = function() {
        var a = new(k ? Uint8Array : Array)(this.a - 32768),
            b = this.a - 32768,
            c, d, e = this.b;
        if (k) a.set(e.subarray(32768, a.length));
        else
            for (c =
                0, d = a.length; c < d; ++c) a[c] = e[c + 32768];
        this.g.push(a);
        this.k += a.length;
        if (k) e.set(e.subarray(b, b + 32768));
        else
            for (c = 0; 32768 > c; ++c) e[c] = e[b + c];
        this.a = 32768;
        return e
    };
    c.prototype.v = function(a) {
        var b, c = this.input.length / this.d + 1 | 0,
            d, e, f, g = this.input,
            m = this.b;
        a && ("number" === typeof a.o && (c = a.o), "number" === typeof a.r && (c += a.r));
        2 > c ? (d = (g.length - this.d) / this.n[2], f = d / 2 * 258 | 0, e = f < m.length ? m.length + f : m.length << 1) : e = m.length * c;
        k ? (b = new Uint8Array(e), b.set(m)) : b = m;
        return this.b = b
    };
    c.prototype.m = function() {
        var a =
            0,
            b = this.b,
            c = this.g,
            d, e = new(k ? Uint8Array : Array)(this.k + (this.a - 32768)),
            f, g, m, n;
        if (0 === c.length) return k ? this.b.subarray(32768, this.a) : this.b.slice(32768, this.a);
        f = 0;
        for (g = c.length; f < g; ++f)
            for (d = c[f], m = 0, n = d.length; m < n; ++m) e[a++] = d[m];
        f = 32768;
        for (g = this.a; f < g; ++f) e[a++] = b[f];
        this.g = [];
        return this.buffer = e
    };
    c.prototype.s = function() {
        var a, b = this.a;
        k ? this.q ? (a = new Uint8Array(b), a.set(this.b.subarray(0, b))) : a = this.b.subarray(0, b) : (this.b.length > b && (this.b.length = b), a = this.b);
        return this.buffer = a
    };
    a("Zlib.RawInflate",
        c);
    a("Zlib.RawInflate.prototype.decompress", c.prototype.u);
    var p = {
            ADAPTIVE: n,
            BLOCK: m
        },
        B, x;
    if (Object.keys) y = Object.keys(p);
    else
        for (B in y = [], A = 0, p) y[A++] = B;
    A = 0;
    for (x = y.length; A < x; ++A) B = y[A], a("Zlib.RawInflate.BufferType." + B, p[B])
}).call(this);
flax._flaxLoader = {
    load: function(a, b, c, d) {
        cc.loader.loadBinary(a, function(b, c) {
            a = flax._removeResVersion(a);
            for (var g = (new Zlib.RawInflate(c)).decompress(), k = "", m = g.length, n = 0; n < m; n++) k += String.fromCharCode(g[n]);
            c = k.split("data:image/gif;base64,");
            k = cc.path.changeBasename(a, ".plist");
            g = cc.path.changeBasename(a, ".png");
            cc.loader.cache[k] = JSON.parse(c[0]);
            k = new Image;
            k.src = "data:image/gif;base64," + c[1];
            cc.loader.cache[g] = k;
            cc.textureCache.handleLoadedTexture(g);
            flax.assetsManager.addAssets(a);
            b ? d(b) :
                d(null, "Not reachable!");
            cc.loader.release(a);
            cc.loader.cache[a] = "loaded!"
        })
    }
};
cc.sys.isNative || cc.loader.register(["flax"], flax._flaxLoader);
flax._assetsClassMap = {
    btn: "flax.SimpleButton",
    button: "flax.SimpleButton",
    progress: "flax.ProgressBar",
    jpg: "flax.Image",
    png: "flax.Image",
    scrollPane: "flax.ScrollPane",
    gun: "flax.Gunner",
    soundBtn: "flax.SimpleSoundButton"
};
flax._assetsMcClassMap = {
    button: "flax.Button",
    scrollPane: "flax.MCScrollPane",
    gun: "flax.MCGunner",
    gun1: "flax.MCGunner",
    soundBtn: "flax.SoundButton"
};
flax.ASSET_NONE = 0;
flax.ASSET_ANIMATOR = 1;
flax.ASSET_MOVIE_CLIP = 2;
flax.ASSET_IMAGE = 3;
flax.registerClass = function(a, b) {
    flax._assetsClassMap[a] = b
};
flax.registerMcClass = function(a, b) {
    flax._assetsMcClassMap[a] = b
};
flax.AssetsManager = cc.Class.extend({
    framesCache: null,
    displaysCache: null,
    displayDefineCache: null,
    mcsCache: null,
    subAnimsCache: null,
    fontsCache: null,
    toolsVersion: null,
    init: function() {
        this.framesCache = {};
        this.displaysCache = {};
        this.displayDefineCache = {};
        this.mcsCache = {};
        this.subAnimsCache = {};
        this.fontsCache = {};
        this.toolsVersion = {}
    },
    getAssetType: function(a, b) {
        if (this.getMc(a, b)) return flax.ASSET_MOVIE_CLIP;
        var c = this.getDisplayDefine(a, b);
        return c ? "jpg" == c.type || "png" == c.type ? flax.ASSET_IMAGE : "share" == c.type ?
            this.getAssetType(this._getSharedPlist(a, c), b) : flax.ASSET_ANIMATOR : flax.ASSET_NONE
    },
    createDisplay: function(a, b, c, d, e) {
        if (null == a || null == b) throw "Please give me assetsFile and assetID!";
        null == e && c && (e = c["class"]);
        if (c && "string" === typeof c || e && "string" !== typeof e) throw "Params error: maybe you are using the old api, please use the latest!";
        this.addAssets(a);
        var f = this.getSubAnims(a, b);
        f.length && (b = b + "$" + f[0]);
        var g = this.getDisplayDefine(a, b);
        if (g && "share" == g.type) return this.createDisplay(this._getSharedPlist(a,
            g), b, c, d, e);
        f = null;
        if (e && (f = flax.nameToObject(e), null == f)) throw "The class: " + e + " doesn't exist!";
        if (null == f) {
            var k = !1;
            null == g && (g = this.getMc(a, b), k = !0);
            if (g) {
                e = g.type;
                "null" == e && "jpg" != b && "png" != b && (e = b);
                f = flax.nameToObject(e);
                if (null == f) {
                    e = k ? flax._assetsMcClassMap[e] : flax._assetsClassMap[e];
                    if ("flax.Image" == e && g.scale9 && (e = "flax.Scale9Image", null == flax.Scale9Image)) throw "Please add module of 'gui' or 'ccui'(cocos 3.10 later) into project.json if you want to use Scale9Image!";
                    f = flax.nameToObject(e)
                }
                null ==
                    f && (f = k ? flax.MovieClip : flax.Animator, e = k ? "flax.MovieClip" : "flax.Animator", k && c && !0 === c.batch && (f = flax.MovieClipBatch, e = "flax.MovieClipBatch"))
            } else throw "There is no display with assetID: " + b + " in assets file: " + a + ", or make sure the display is not a BLANK symbol!";
        }
        null == c && (c = {});
        g = null;
        k = c.parent;
        delete c.parent;
        !0 === d ? g = flax.ObjectPool.get(a, e, b).fetch(b, k, c) : (g = f.create ? f.create(a, b) : new f(a, b), g.attr(c), k && k.addChild(g), g.clsName = e);
        return g
    },
    cloneDisplay: function(a, b, c) {
        if (!flax.isFlaxDisplay(a)) throw "cloneDisplay only support flax type display!";
        b = this.createDisplay(a.assetsFile, a.assetID, {
            parent: c ? a.parent : null
        }, b, a.clsName);
        c && b.setPosition(a.getPosition());
        b.setScale(a.getScale());
        b.setRotation(a.rotation);
        b.zIndex = a.zIndex;
        return b
    },
    removeAssets: function(a) {
        delete this.framesCache[a];
        delete this.displaysCache[a];
        delete this.displayDefineCache[a];
        delete this.mcsCache[a];
        delete this.subAnimsCache[a];
        delete this.fontsCache[a];
        var b = a;
        ".flax" == cc.path.extname(a) && (b = cc.path.changeBasename(b, ".plist"));
        cc.spriteFrameCache.removeSpriteFramesFromFile(b);
        cc.loader.release(b);
        cc.loader.release(cc.path.changeBasename(b, ".png"))
    },
    removeAllAssets: function() {
        for (var a in this.framesCache) this.removeAssets(a)
    },
    addAssets: function(a) {
        if ("undefined" !== typeof this.framesCache[a]) return !1;
        var b = a;
        ".flax" == cc.path.extname(a) && (b = cc.path.changeBasename(b, ".plist"));
        var c = cc.loader.getRes(b);
        if (null == c) throw "Make sure you have pre-loaded the resource: " + a;
        var d = c.metadata.version || c.metadata.flaxVersion;
        this.toolsVersion[a] = d || 0;
        if (!d || d < flax.minToolVersion) throw "The resource: " +
            a + " was exported with the old version of Flax, please do it with current version!";
        d = c.metadata.fps;
        cc.spriteFrameCache.addSpriteFrames(b);
        cc.loader.cache[b] = "loaded!";
        var b = [],
            e = c.frames,
            f;
        for (f in e) b.push(f);
        b.sort();
        this.framesCache[a] = b;
        c.displays && this._parseDisplays(a, c.displays, d);
        c.mcs && this._parseMovieClips(a, c.mcs, d);
        c.fonts && this._parseFonts(a, c.fonts);
        return !0
    },
    _parseDisplays: function(a, b, c) {
        var d = [],
            e = null,
            f;
        for (f in b) d.push(f), e = b[f], e.anchors && (e.anchors = this._parseFrames(e.anchors)),
            e.colliders && (e.colliders = this._parseFrames(e.colliders)), e.scale9 && (e.scale9 = flax._strToRect(e.scale9)), e.fps = c || cc.game.config.frameRate, this.displayDefineCache[a + f] = e, this._parseSubAnims(a, f);
        this.displaysCache[a] = d
    },
    _parseMovieClips: function(a, b, c) {
        for (var d in b) {
            var e = b[d];
            e.anchors && (e.anchors = this._parseFrames(e.anchors));
            e.colliders && (e.colliders = this._parseFrames(e.colliders));
            var f, g = e.children,
                k;
            for (k in g) f = g[k], f.frames = this._strToArray(f.frames);
            e.fps = c || cc.game.config.frameRate;
            this.mcsCache[a +
                d] = e;
            this._parseSubAnims(a, d)
        }
    },
    _parseFonts: function(a, b) {
        for (var c in b) this.fontsCache[a + c] = b[c]
    },
    _parseSubAnims: function(a, b) {
        var c = b.split("$"),
            d = c[0],
            c = c[1];
        if (d && c && "" != d && "" != c) {
            var d = a + d,
                e = this.subAnimsCache[d];
            null == e && (e = [], this.subAnimsCache[d] = e);
            e.push(c)
        }
    },
    _parseFrames: function(a) {
        var b = {},
            c;
        for (c in a) b[c] = this._strToArray(a[c]);
        return b
    },
    _strToArray: function(a) {
        a = a.split("|");
        for (var b = -1, c = []; ++b < a.length;) {
            var d = a[b];
            "null" === d ? c.push(null) : "" === d ? c.push(c[b - 1]) : c.push(d)
        }
        return c
    },
    _getSharedPlist: function(a, b) {
        return a.slice(0, a.indexOf("/")) + "/" + b.url + ".plist"
    },
    getFrameNames: function(a, b, c) {
        this.addAssets(a);
        a = this.framesCache[a];
        if (null == a) return []; - 1 == b && (b = 0); - 1 == c && (c = a.length - 1);
        return a.slice(parseInt(b), parseInt(c) + 1)
    },
    getFrameNamesOfDisplay: function(a, b) {
        var c = this.getDisplayDefine(a, b);
        if (null == c) throw "There is no display named: " + b + " in assetsFile: " + a;
        return this.getFrameNames(a, c.start, c.end)
    },
    getDisplayDefine: function(a, b) {
        this.addAssets(a);
        return this.displayDefineCache[a +
            b]
    },
    getDisplayNames: function(a) {
        this.addAssets(a);
        return this.displaysCache[a] || []
    },
    getRandomDisplayName: function(a) {
        a = this.getDisplayNames(a);
        var b = Math.floor(Math.random() * a.length);
        return a[b]
    },
    getMc: function(a, b) {
        this.addAssets(a);
        return this.mcsCache[a + b]
    },
    getSubAnims: function(a, b) {
        this.addAssets(a);
        return this.subAnimsCache[a + b] || []
    },
    getFont: function(a, b) {
        this.addAssets(a);
        return this.fontsCache[a + b]
    },
    getToolVersion: function(a) {
        return this.toolsVersion[a] || 0
    }
});
flax.AssetsManager.create = function() {
    var a = new flax.AssetsManager;
    a.init();
    return a
};
flax.ColliderType = {
    rect: "Rect",
    circle: "Circle",
    polygon: "Poly"
};
flax.Collider = cc.Class.extend({
    name: null,
    owner: null,
    type: flax.ColliderType.rect,
    physicsBody: null,
    physicsFixture: null,
    physicsContact: null,
    _center: null,
    _width: 0,
    _height: 0,
    _rotation: 0,
    _localRect: null,
    _polygons: null,
    ctor: function(a, b) {
        a = a.split(",");
        this.type = a[0];
        this._center = cc.p(parseFloat(a[1]), parseFloat(a[2]));
        this._width = parseFloat(a[3]);
        this._height = parseFloat(a[4]);
        this._rotation = parseFloat(a[5]);
        if (6 < a.length) {
            this._polygons = [];
            for (var c = a[6].split("'"), d = 0; d < c.length - 1; d += 2) {
                var e = {
                    x: parseFloat(c[d]),
                    y: parseFloat(c[d + 1])
                };
                this._polygons.push(e)
            }
        }!1 === b && (this._center.x += this._width / 2, this._center.y += this._height / 2);
        this._localRect = cc.rect(this._center.x - this._width / 2, this._center.y - this._height / 2, this._width, this._height)
    },
    setOwner: function(a) {
        this.owner != a && (this.owner = a, this.owner.retain())
    },
    createPhysics: function(a, b, c, d, e, f) {
        if (this.physicsFixture) return this.physicsFixture;
        var g = this.physicsBody = this.owner.physicsBody;
        if (null == g) throw "Please CreatePhysics in its owner firstly!";
        var k = this.getSize(),
            m = this.getCenter(),
            n = flax.getPosition(this.owner, !0),
            p = null;
        if (this.type == flax.ColliderType.circle) p = new Box2D.Collision.Shapes.b2CircleShape, p.SetRadius(0.5 * k.width * flax.getScale(this.owner, !0).x / PTM_RATIO), n = cc.pSub(m, n), p.SetLocalPosition(cc.pMult(n, 1 / PTM_RATIO));
        else if (this.type == flax.ColliderType.rect || this.type == flax.ColliderType.polygon) {
            if (this.type == flax.ColliderType.rect)
                for (this._polygons = [cc.p(-0.5 * k.width, -0.5 * k.height), cc.p(0.5 * k.width, -0.5 * k.height), cc.p(0.5 * k.width, 0.5 * k.height),
                        cc.p(-0.5 * k.width, 0.5 * k.height)
                    ], k = 0; k < this._polygons.length; k++) m = this._polygons[k], m.x += this._center.x, m.y += this._center.y;
            for (var p = new Box2D.Collision.Shapes.b2PolygonShape, r = [], k = 0; k < this._polygons.length; k++) m = cc.p(this._polygons[k]), m = this.owner.convertToWorldSpace(m), m.x -= n.x, m.y -= n.y, m.x /= PTM_RATIO, m.y /= PTM_RATIO, r.push(m);
            p.SetAsArray(r)
        } else throw "The physics type: " + this.type + " is not supported!";
        n = new Box2D.Dynamics.b2FixtureDef;
        n.shape = p;
        null == a && (a = 0);
        n.density = a;
        null == b && (b = 0.2);
        n.friction =
            b;
        null == c && (c = 0);
        n.restitution = c;
        n.isSensor = d;
        null == e && (e = 1);
        null == f && (f = 65535);
        n.filter.categoryBits = e;
        n.filter.maskBits = f;
        this.physicsFixture = g.CreateFixture(n);
        this.physicsFixture.SetUserData(this);
        return this.physicsFixture
    },
    destroyPhysics: function() {
        this.physicsFixture && (flax.removePhysicsFixture(this.physicsFixture), this.physicsBody = this.physicsFixture = null);
        this.owner && (this.owner.release(), this.owner = null)
    },
    checkCollision: function(a) {
        if (a.type == this.type && this.type == flax.ColliderType.rect) return cc.rectIntersectsRect(this.getRect(!0),
            a.getRect(!0));
        if (a.type == this.type && this.type == flax.ColliderType.circle) {
            var b = this.getCenter(!0),
                c = a.getCenter(!0);
            return cc.pDistance(b, c) <= (this.getSize().width + a.getSize().width) / 2
        }
        if (this.type == flax.ColliderType.rect) return this._ifRectCollidCircle(this.getRect(!0), a.getRect(!0));
        if (this.type == flax.ColliderType.circle) return this._ifRectCollidCircle(a.getRect(!0), this.getRect(!0))
    },
    containPoint: function(a) {
        return this.containsPoint(a)
    },
    containsPoint: function(a) {
        a = this.owner.convertToNodeSpace(a);
        return this.type == flax.ColliderType.rect ? cc.rectContainsPoint(this._localRect, a) : this.type == flax.ColliderType.polygon ? this._polyContainsPoint(a) : cc.pDistance(a, this._center) <= this._width / 2
    },
    _polyContainsPoint: function(a) {
        for (var b = !1, c = this._polygons.length, d = 0, e = c - 1; d < c; e = d++) {
            var f = this._polygons[d],
                e = this._polygons[e];
            (intersect = f.y > a.y !== e.y > a.y && a.x < (e.x - f.x) * (a.y - f.y) / (e.y - f.y) + f.x) && (b = !b)
        }
        return b
    },
    _ifRectCollidCircle: function(a, b) {
        var c = Math.abs(b.x + b.width / 2 - (a.x + a.width / 2)),
            d = Math.abs(b.y +
                b.height / 2 - (a.y + a.height / 2));
        if (c > a.width / 2 + b.width / 2 || d > a.height / 2 + b.width / 2) return !1;
        if (c <= a.width / 2 || d <= a.height / 2) return !0;
        c -= a.width / 2;
        d -= a.height / 2;
        return c * c + d * d <= b.width / 2 * b.width / 2
    },
    getRect: function(a) {
        null == a && (a = !0);
        if (!a) return this._localRect;
        var b = this.getCenter(a);
        a = this.getSize(a);
        return cc.rect(b.x - a.width / 2, b.y - a.height / 2, a.width, a.height)
    },
    getCenter: function(a) {
        var b = this.owner.convertToWorldSpace(this._center);
        this.owner.parent && (!1 === a ? b = this.owner.parent.convertToNodeSpace(b) :
            a instanceof cc.Node && (b = a.convertToNodeSpace(b)));
        return b
    },
    getSize: function(a) {
        var b = flax.getScale(this.owner, a);
        a = this._width * Math.abs(b.x);
        b = this._height * Math.abs(b.y);
        return {
            width: a,
            height: b
        }
    },
    debugDraw: function() {
        var a = this.getRect(!0);
        if (this.type == flax.ColliderType.rect) flax.drawRect(a);
        else {
            var b = cc.DrawNode.create();
            flax.currentScene && flax.currentScene.addChild(b, 99999);
            var c = cc.color(255, 0, 0, 255),
                d = cc.color(0, 255, 0, 122);
            if (this.type == flax.ColliderType.circle) b.drawCircle(this.getCenter(!0),
                a.width / 2, 0, 360, !1, 1, c, d);
            else {
                for (var e = a = null, f = null, g = 0; g < this._polygons.length - 1; g++) e = cc.p(this._polygons[g]), e = this.owner.convertToWorldSpace(e), 0 == g && (a = cc.p(e)), f = cc.p(this._polygons[g + 1]), f = this.owner.convertToWorldSpace(f), b.drawSegment(e, f, 1, c, d);
                b.drawSegment(f, a, 1, c, d)
            }
        }
    }
});
flax.onCollideStart = new signals.Signal;
flax.onCollideEnd = new signals.Signal;
flax.onCollidePre = new signals.Signal;
flax.onCollidePost = new signals.Signal;
flax._physicsWorld = null;
flax._physicsListener = null;
flax._physicsRunning = !1;
flax._physicsBodyToRemove = null;
flax._physicsFixtureToRemove = null;
flax.physicsTypeStatic = 0;
flax.physicsTypeKinematic = 1;
flax.physicsTypeDynamic = 2;
flax.physicsWorldPos = cc.p();
flax.createPhysicsWorld = function(a, b) {
    flax._physicsWorld && flax.destroyPhysicsWorld();
    var c = new Box2D.Dynamics.b2World(new Box2D.Common.Math.b2Vec2(a.x, a.y), !0 === b);
    c.SetContinuousPhysics(!0);
    flax.physicsWorldPos = cc.p();
    flax._physicsWorld = c;
    flax._physicsBodyToRemove = [];
    flax._physicsFixtureToRemove = [];
    return c
};
flax.getPhysicsWorld = function() {
    if (null == flax._physicsWorld) throw "Pleas use flax.createPhysicsWorld to create the world firstly!";
    return flax._physicsWorld
};
flax.startPhysicsWorld = function() {
    flax.getPhysicsWorld() && flax.currentScene && !flax._physicsRunning && (flax._createPhysicsListener(), flax.currentScene.schedule(flax._updatePhysicsWorld, 1 / cc.game.config.frameRate), flax._physicsRunning = !0)
};
flax.stopPhysicsWorld = function() {
    flax._physicsRunning && flax.currentScene && (flax.currentScene.unschedule(flax._updatePhysicsWorld), flax._physicsRunning = !1)
};
flax.destroyPhysicsWorld = function() {
    if (flax._physicsWorld) {
        flax.stopPhysicsWorld();
        for (var a = flax._physicsWorld.GetBodyList(); a; a = a.GetNext()) {
            var b = a.GetUserData();
            b && (b._physicsBody = null);
            flax._physicsWorld.DestroyBody(a)
        }
        flax.onCollideStart.removeAll();
        flax.onCollideEnd.removeAll();
        flax.onCollidePre.removeAll();
        flax.onCollidePost.removeAll();
        flax._physicsWorld = null;
        flax._physicsListener = null;
        flax._physicsBodyToRemove = null
    }
};
flax.removePhysicsBody = function(a) {
    -1 == flax._physicsBodyToRemove.indexOf(a) && flax._physicsBodyToRemove.push(a)
};
flax.removePhysicsFixture = function(a) {
    -1 == flax._physicsFixtureToRemove.indexOf(a) && flax._physicsFixtureToRemove.push(a)
};
flax.physicsRaycast = function(a, b, c, d) {
    flax.getPhysicsWorld().RayCast(function(e, f, g, k) {
        e = e.GetUserData();
        f = cc.pMult(f, PTM_RATIO);
        var m = cc.pSub(c, f);
        g = cc.pMult(g, cc.pDot(m, g));
        m = cc.pSub(c, cc.pMult(g, 2));
        g = flax.getAngle(f, m);
        d && 0 < d && (k = flax.getAngle(b, c), d /= Math.sin(Math.abs(g / 2 - k / 2) * Math.PI / 180), f = cc.pSub(f, flax.getPointOnCircle(cc.p(), d, k)), m = cc.pDistance(b, c), k = cc.pDistance(b, f) / m, m = flax.getPointOnCircle(f, m * (1 - k), g));
        a(e, f, m, k)
    }, cc.pMult(b, 1 / PTM_RATIO), cc.pMult(c, 1 / PTM_RATIO))
};
flax.physicsSimulate = function(a, b, c) {
    c || (c = flax.frameInterval);
    b = Math.round(b / c);
    for (var d = a.GetPosition(), e = a.GetAngle(), f = {}, g = 0, k = flax._physicsWorld.GetBodyList(); k; k = k.GetNext())
        if (k != a) {
            var m = k.GetType();
            m != flax.physicsTypeStatic && (k.m_type = flax.physicsTypeStatic, k.__tempKey = ++g, f[k.__tempKey] = m)
        }
    m = [];
    for (g = 0; g < b; g++) flax._physicsWorld.Step(c, velocityIterations, positionIterations), k = a.GetPosition(), m.push(cc.p(k.x * PTM_RATIO, k.y * PTM_RATIO));
    for (k = flax._physicsWorld.GetBodyList(); k; k = k.GetNext()) k.__tempKey &&
        (k.SetType(f[k.__tempKey]), delete k.__tempKey);
    a.SetPositionAndAngle(d, e);
    return m
};
flax._createPhysicsListener = function() {
    flax._physicsListener || (flax._physicsListener = new Box2D.Dynamics.b2ContactListener, flax._physicsListener.BeginContact = function(a) {
        var b = a.GetFixtureA(),
            c = a.GetFixtureB(),
            b = b.GetUserData() || b,
            c = c.GetUserData() || c;
        b.owner && null == b.owner.parent || c.owner && null == c.owner.parent || (b.physicsContact = c.physicsContact = a, flax.onCollideStart.dispatch(b, c), b.physicsContact = c.physicsContact = null)
    }, flax._physicsListener.EndContact = function(a) {
        var b = a.GetFixtureA(),
            c = a.GetFixtureB(),
            b = b.GetUserData() || b,
            c = c.GetUserData() || c;
        b.owner && null == b.owner.parent || c.owner && null == c.owner.parent || (b.physicsContact = c.physicsContact = a, flax.onCollideEnd.dispatch(b, c), b.physicsContact = c.physicsContact = null)
    }, flax._physicsListener.PreSolve = function(a, b) {
        var c = a.GetFixtureA(),
            d = a.GetFixtureB(),
            c = c.GetUserData() || c,
            d = d.GetUserData() || d;
        c.owner && null == c.owner.parent || d.owner && null == d.owner.parent || (c.physicsContact = d.physicsContact = a, flax.onCollidePre.dispatch(c, d), c.physicsContact = d.physicsContact =
            null)
    }, flax._physicsListener.PostSolve = function(a, b) {
        var c = a.GetFixtureA(),
            d = a.GetFixtureB(),
            c = c.GetUserData() || c,
            d = d.GetUserData() || d;
        c.owner && null == c.owner.parent || d.owner && null == d.owner.parent || (c.physicsContact = d.physicsContact = a, flax.onCollidePost.dispatch(c, d), c.physicsContact = d.physicsContact = null)
    }, flax._physicsWorld.SetContactListener(flax._physicsListener))
};
flax.createPhysicalWalls = function(a, b) {
    if (null == a || 0 == a.length) a = [1, 1, 1, 1];
    var c = flax.getPhysicsWorld(),
        d = new Box2D.Dynamics.b2FixtureDef;
    d.density = 1;
    null == b && (b = 3);
    d.friction = b;
    var e = new Box2D.Dynamics.b2BodyDef,
        f = cc.director.getWinSize();
    e.type = Box2D.Dynamics.b2Body.b2_staticBody;
    d.shape = new Box2D.Collision.Shapes.b2PolygonShape;
    d.shape.SetAsBox(0.5 * f.width / PTM_RATIO, 0.5);
    a[0] && (e.position.Set(0.5 * f.width / PTM_RATIO, f.height / PTM_RATIO), c.CreateBody(e).CreateFixture(d));
    a[1] && (e.position.Set(0.5 *
        f.width / PTM_RATIO, 0), c.CreateBody(e).CreateFixture(d));
    d.shape.SetAsBox(0.5, 0.5 * f.height / PTM_RATIO);
    a[2] && (e.position.Set(0, 0.5 * f.height / PTM_RATIO), c.CreateBody(e).CreateFixture(d));
    a[3] && (e.position.Set(f.width / PTM_RATIO, 0.5 * f.height / PTM_RATIO), c.CreateBody(e).CreateFixture(d))
};
var velocityIterations = 8,
    positionIterations = 1;
flax._updatePhysicsWorld = function(a) {
    for (var b = flax._physicsFixtureToRemove.length; b--;) {
        var c = flax._physicsFixtureToRemove[b],
            d = c.GetBody();
        d && d.DestroyFixture(c);
        flax._physicsFixtureToRemove.splice(b, 1)
    }
    for (b = flax._physicsBodyToRemove.length; b--;) flax._physicsWorld.DestroyBody(flax._physicsBodyToRemove[b]), flax._physicsBodyToRemove.splice(b, 1);
    flax._physicsWorld.Step(a, velocityIterations, positionIterations);
    for (a = flax._physicsWorld.GetBodyList(); a; a = a.GetNext()) b = a.GetUserData(), null != b && null !=
        b && b.parent && (c = cc.p(a.GetPosition()), c.x *= PTM_RATIO, c.y *= PTM_RATIO, c = cc.pAdd(c, flax.physicsWorldPos), c = b.parent.convertToNodeSpace(c), b.x = c.x, b.y = c.y, !0 !== b.ignoreBodyRotation && (b.rotation = -1 * RADIAN_TO_DEGREE * a.GetAngle(), b.rotation += a.__rotationOffset))
};
flax._debugBox2DNode = null;
flax.debugDrawPhysics = function() {
    null == flax._debugBox2DNode && (flax._debugBox2DNode = new flax.DebugBox2DNode(flax.getPhysicsWorld()), flax.currentScene.addChild(flax._debugBox2DNode, Number.MAX_VALUE))
};
flax.DebugBox2DNode = cc.Node.extend({
    _refWorld: null,
    ctor: function(a) {
        this._super();
        this._refWorld = a;
        a = Box2D.Dynamics.b2DebugDraw;
        var b = new a;
        b.SetSprite(document.getElementById("gameCanvas").getContext("2d"));
        var c = PTM_RATIO * cc.view.getViewPortRect().width / cc.view.getDesignResolutionSize().width;
        b.SetDrawScale(c);
        b.SetFillAlpha(0.5);
        b.SetLineThickness(1);
        b.SetFlags(a.e_shapeBit | a.e_jointBit | a.e_centerOfMassBit);
        this._refWorld.SetDebugDraw(b)
    },
    draw: function(a) {
        this._super();
        this._refWorld && (a.scale(1, -1), this._refWorld.DrawDebugData(), a.scale(1, 1), a.translate(0, 0))
    }
});
flax.TileMapModule = {
    tx: 0,
    ty: 0,
    autoUpdateTileWhenMove: !0,
    tileValue: TileValue.WALKABLE,
    _tileMap: null,
    _tileInited: !1,
    onEnter: function() {
        this._tileMap && !this._tileInited && this.updateTile(!0)
    },
    onExit: function() {
        this._tileMap && this._tileMap.removeObject(this);
        this._tileMap = null;
        this._tileInited = !1
    },
    onPosition: function() {
        this.autoUpdateTileWhenMove && this._tileMap && this.updateTile()
    },
    getTileMap: function() {
        return this._tileMap
    },
    setTileMap: function(a) {
        !a || a instanceof flax.TileMap || (a = flax.getTileMap(a));
        this._tileMap !=
            a && (this._tileMap && this._tileMap.removeObject(this), this._tileMap = a, null != this._tileMap && this.parent && this.updateTile(!0))
    },
    updateTile: function(a) {
        if (this._tileMap) {
            var b = this.getPosition();
            this.parent && (b = this.parent.convertToWorldSpace(b));
            b = this._tileMap.getTileIndex(b);
            this.setTile(b.x, b.y, a)
        }
    },
    setTile: function(a, b, c) {
        if (!0 === c || a != this.tx || b != this.ty) {
            c = this.tx;
            var d = this.ty;
            this.tx = a;
            this.ty = b;
            this._tileMap && this.parent && (this._tileMap.removeObject(this, c, d), this.parent && (this._tileMap.addObject(this),
                this._tileInited = !0))
        }
    },
    snapToTile: function(a, b, c) {
        this._tileMap.snapToTile(this, a, b, c)
    }
};
var HLayoutType = {
        LEFT: 0,
        CENTER: 1,
        RIGHT: 2
    },
    VLayoutType = {
        BOTTOM: 0,
        MIDDLE: 1,
        TOP: 2
    };
flax.getLayoutPosition = function(a, b, c) {
    var d = flax.getRect(a, !0),
        e = cc.visibleRect.center,
        f = a.getAnchorPointInPoints(),
        g = 0,
        k = 0;
    switch (b) {
        case HLayoutType.LEFT:
            g = 0;
            break;
        case HLayoutType.CENTER:
            g = e.x - d.width / 2;
            break;
        case HLayoutType.RIGHT:
            g = cc.visibleRect.right.x - d.width
    }
    switch (c) {
        case VLayoutType.BOTTOM:
            k = 0;
            break;
        case VLayoutType.MIDDLE:
            k = e.y - d.height / 2;
            break;
        case VLayoutType.TOP:
            k = cc.visibleRect.top.y - d.height
    }
    d = flax.getScale(a, !0);
    b = cc.p(g + (b ? 0 : cc.visibleRect.bottomLeft.x) + f.x * d.x, k + (c ? 0 : cc.visibleRect.bottomLeft.y) +
        f.y * d.y);
    a.parent && (b = a.parent.convertToNodeSpace(b));
    return b
};
flax.ScreenLayoutModule = {
    _isAutoLayout: !1,
    _hlayout: null,
    _vlayout: null,
    _offsetX: 0,
    _offsetY: 0,
    onEnter: function() {
        flax.onDeviceRotate.add(this._updateLayout, this);
        flax.onScreenResize.add(this._updateLayout, this)
    },
    onExit: function() {
        flax.onDeviceRotate.remove(this._updateLayout, this);
        flax.onScreenResize.remove(this._updateLayout, this)
    },
    setLayoutOffset: function(a, b) {
        this._offsetX = a;
        this._offsetY = b;
        this._updateLayout()
    },
    setLayout: function(a, b) {
        this._isAutoLayout = !1;
        this._hlayout = a;
        this._vlayout = b;
        var c =
            flax.getLayoutPosition(this, a, b);
        c.x += this._offsetX;
        c.y += this._offsetY;
        this.setPosition(c)
    },
    autoLayout: function() {
        if (cc.view.getResolutionPolicy() == cc.ResolutionPolicy.NO_BORDER) {
            this._isAutoLayout = !0;
            var a = flax.getRect(this, this.parent),
                b = cc.visibleRect.center,
                c = this.getAnchorPointInPoints(),
                d = 0,
                e = cc.visibleRect.width / flax.designedStageSize.width;
            if (1 != e) {
                var f = this.x - b.x;
                0 < f && (d = a.width);
                f = a.x + d - b.x;
                this.x = b.x + f * e + c.x * this.scaleX - d + this._offsetX
            }
            e = cc.visibleRect.height / flax.designedStageSize.height;
            1 != e && (f = this.y - b.y, d = 0, 0 < f && (d = a.height), f = a.y + d - b.y, this.y = b.y + f * e + c.y * this.scaleY - d + this._offsetY)
        }
    },
    _updateLayout: function(a) {
        this._isAutoLayout ? this.autoLayout() : null != this._hlayout && null != this._vlayout && this.setLayout(this._hlayout, this._vlayout)
    }
};
flax.PhysicsModule = {
    _physicsBody: null,
    _physicsToBeSet: null,
    _physicsBodyParam: null,
    _physicsColliders: null,
    onEnter: function() {
        null == this._physicsColliders && (this._physicsColliders = []);
        this._physicsBodyParam && this.createPhysics(this._physicsBodyParam.type, this._physicsBodyParam.fixedRotation, this._physicsBodyParam.bullet);
        if (this._physicsToBeSet)
            for (var a in this._physicsToBeSet) {
                var b = this.getCollider(a),
                    c = this._physicsToBeSet[a];
                b.createPhysics(c.density, c.friction, c.restitution, c.isSensor, c.catBits,
                    c.maskBits);
                delete this._physicsToBeSet[a]; - 1 == this._physicsColliders.indexOf(b) && this._physicsColliders.push(b)
            }
    },
    onExit: function() {
        for (var a = 0; a < this._physicsColliders.length; a++) this._physicsColliders[a].destroyPhysics();
        this._physicsColliders = [];
        this._physicsBody && (flax.removePhysicsBody(this._physicsBody), this._physicsBody = null);
        this._physicsBodyParam = null
    },
    getPhysicsBody: function() {
        return this._physicsBody
    },
    createPhysics: function(a, b, c) {
        null == a && (a = Box2D.Dynamics.b2Body.b2_dynamicBody);
        this._physicsBodyParam = {
            type: a,
            fixedRotation: b,
            bullet: c
        };
        if (!this.parent) return null;
        if (null == this._physicsBody) {
            var d = new Box2D.Dynamics.b2BodyDef;
            d.type = a;
            d.fixedRotation = b;
            d.bullet = c;
            d.userData = this;
            a = flax.getPosition(this, !0);
            d.position.Set(a.x / PTM_RATIO, a.y / PTM_RATIO);
            this._physicsBody = flax.getPhysicsWorld().CreateBody(d);
            this._physicsBody.__rotationOffset = this.rotation
        }
        return this._physicsBody
    },
    destroyPhysics: function() {
        this.removePhysicsShape()
    },
    addPhysicsShape: function(a, b, c, d, e, f, g) {
        if (null == this._physicsBody) throw "Please createPhysics firstly!";
        var k = this.getCollider(a);
        if (null == k) return cc.log("There is no collider named: " + a), null;
        if (k.physicsFixture) return k.physicsFixture;
        var m = {
            density: b,
            friction: c,
            restitution: d,
            isSensor: e,
            catBits: f,
            maskBits: g
        };
        if (this.parent) return k.setOwner(this), a = k.createPhysics(b, c, d, e, f, g), -1 == this._physicsColliders.indexOf(k) && this._physicsColliders.push(k), a;
        null == this._physicsToBeSet && (this._physicsToBeSet = {});
        null == this._physicsToBeSet[a] && (this._physicsToBeSet[a] = m);
        return null
    },
    removePhysicsShape: function(a) {
        for (var b =
                this._physicsColliders.length; b--;) {
            var c = this._physicsColliders[b];
            if (null == a || c.name == a) c.destroyPhysics(), this._physicsColliders.splice(b, 1)
        }
        0 == this._physicsColliders.length && (flax.removePhysicsBody(this._physicsBody), this._physicsBody = null)
    }
};
flax.MoveModule = {
    gravityOnMove: null,
    destroyWhenReach: !1,
    destroyWhenOutofStage: !1,
    moveSpeed: null,
    moveAcc: null,
    restrainRect: null,
    inRandom: !1,
    _moveSpeedLen: 0,
    _targetPos: null,
    _inMoving: !1,
    _callBack: null,
    _callContext: null,
    onEnter: function() {},
    onExit: function() {
        this.destroyWhenOutofStage = this.destroyWhenReach = !1;
        this.restrainRect = this.gravityOnMove = null;
        this._inMoving = this.inRandom = !1
    },
    moveTo: function(a, b, c, d) {
        this.inRandom = !1;
        this._targetPos = a;
        this._callBack = c;
        this._callContext = d;
        a = cc.pSub(a, this.getPosition());
        1 > cc.pLength(a) || !b || 0 >= b ? this.scheduleOnce(this._moveOver, 0.01) : (this.moveSpeed = cc.pMult(a, 1 / b), this._moveSpeedLen = cc.pLength(this.moveSpeed), this.resumeMove())
    },
    moveToBySpeed: function(a, b, c, d) {
        this.inRandom = !1;
        this._targetPos = a;
        this._callBack = c;
        this._callContext = d;
        a = cc.pSub(a, this.getPosition());
        c = cc.pLength(a);
        1 > c ? this.scheduleOnce(this._moveOver, 0.01) : (this.moveSpeed = cc.pMult(a, b / c), this._moveSpeedLen = cc.pLength(this.moveSpeed), this.resumeMove())
    },
    moveBySpeed: function(a, b) {
        this._callBack = this._targetPos =
            null;
        this.inRandom = !1;
        this.moveSpeed = "object" === typeof a ? a : flax.getPointOnCircle(cc.p(), a, b);
        this.resumeMove()
    },
    moveRandomly: function(a, b, c) {
        this.restrainRect = c || flax.stageRect;
        this.moveBySpeed(a, b || 360 * Math.random());
        this.inRandom = null == b
    },
    pauseMove: function() {
        this._inMoving && (this.unschedule(this._doMove), this._inMoving = !1)
    },
    resumeMove: function() {
        this._inMoving || (this._inMoving = !0, this.schedule(this._doMove, flax.frameInterval, cc.REPEAT_FOREVER))
    },
    stopMove: function() {
        this._inMoving && (this._targetPos =
            this.moveSpeed = null, this._inMoving = !1, this.restrainRect = this._callBack = null, this.inRandom = !1, this.unschedule(this._doMove))
    },
    _doMove: function(a) {
        var b = this.getPosition();
        if ((this._targetPos ? cc.pDistance(b, this._targetPos) : Number.maxValue) < this._moveSpeedLen * a || this.destroyWhenOutofStage && !cc.rectContainsRect(flax.stageRect, flax.getRect(this, !0))) this._moveOver(), this.stopMove();
        else {
            var c = flax.getRect(this, this.parent);
            if (this.restrainRect) {
                var d = 0,
                    e = 0;
                c.x < this.restrainRect.x ? d = 1 : c.x > this.restrainRect.x +
                    this.restrainRect.width - c.width && (d = -1);
                c.y < this.restrainRect.y ? e = 1 : c.y > this.restrainRect.y + this.restrainRect.height - c.height && (e = -1);
                this.inRandom && (d && (this.moveSpeed.x = d * Math.abs(this.moveSpeed.x)), e && (this.moveSpeed.y = e * Math.abs(this.moveSpeed.y)))
            }
            c = this.moveAcc;
            this.gravityOnMove && (c = cc.pAdd(c || cc.p(), this.gravityOnMove));
            c && (this.moveSpeed = cc.pAdd(this.moveSpeed, cc.pMult(c, a)));
            this.setPosition(cc.pAdd(b, cc.pMult(this.moveSpeed, a)))
        }
    },
    _moveOver: function() {
        this._targetPos && this.setPosition(this._targetPos);
        this._callBack && (this._callBack.apply(this._callContext || this), this._callBack = null);
        this.destroyWhenReach && this.destroy()
    }
};
flax.Anchor = cc.Class.extend({
    x: 0,
    y: 0,
    zIndex: 0,
    rotation: 0,
    scaleX: 1,
    scaleY: 1,
    ctor: function(a) {
        a = a.split(",");
        this.x = parseFloat(a[0]);
        this.y = parseFloat(a[1]);
        2 < a.length && (this.zIndex = parseInt(a[2]));
        3 < a.length && (this.rotation = parseFloat(a[3]));
        4 < a.length && (this.scaleX = parseFloat(a[4]));
        5 < a.length && (this.scaleY = parseFloat(a[5]));
        cc.log(this.scaleX + "," + a.length)
    }
});
flax._sprite = {
    __instanceId: null,
    onAnimationOver: null,
    onSequenceOver: null,
    onFrameChanged: null,
    onFrameLabel: null,
    autoDestroyWhenOver: !1,
    autoStopWhenOver: !1,
    autoHideWhenOver: !1,
    autoRecycle: !1,
    currentFrame: 0,
    currentAnim: null,
    totalFrames: 0,
    frameInterval: 0,
    ignoreBodyRotation: !1,
    define: null,
    name: null,
    assetsFile: null,
    assetID: null,
    clsName: "flax.FlaxSprite",
    playing: !1,
    _prevFrame: -1,
    _labelFrames: null,
    _labelSounds: null,
    _loopStart: 0,
    _loopEnd: 0,
    _isLanguageElement: !1,
    __isFlaxSprite: !0,
    __isInputMask: !1,
    _fps: 24,
    _colliders: null,
    _mainCollider: null,
    _definedMainCollider: !1,
    _anchorBindings: null,
    _inited: !1,
    _mouseEnabled: !0,
    _baseAssetID: null,
    _subAnims: null,
    _animSequence: null,
    _loopSequence: !1,
    _sequenceIndex: 0,
    _fpsForAnims: null,
    ctor: function(a, b) {
        if ("flax.FlaxSprite" == this.clsName) throw "flax.FlaxSprite is an abstract class, please use flax.Animator or flax.MovieClip!";
        this instanceof cc.SpriteBatchNode ? cc.SpriteBatchNode.prototype.ctor.call(this, cc.path.changeExtname(a, ".png")) : cc.Sprite.prototype.ctor.call(this);
        if (!a || !b) throw "Please set assetsFile and assetID to me!";
        this.__instanceId = ClassManager.getNewInstanceId();
        this._anchorBindings = [];
        this._animSequence = [];
        this._fpsForAnims = {};
        this.onAnimationOver = new signals.Signal;
        this.onSequenceOver = new signals.Signal;
        this.onFrameChanged = new signals.Signal;
        this.onFrameLabel = new signals.Signal;
        this.setSource(a, b)
    },
    setSource: function(a, b) {
        if (null == a || null == b) throw "assetsFile and assetID can not be null!";
        if (this.assetsFile != a || this.assetID != b && this._baseAssetID != b) {
            this.assetsFile = a;
            this.currentAnim = null;
            this.assetID = this._handleSumAnims(b);
            this.define = this.getDefine();
            var c = this.define.anchorX,
                d = this.define.anchorY;
            isNaN(c) || isNaN(d) || this.setAnchorPoint(c, d);
            0 == this.fps && (this.fps = this.define.fps);
            this.onNewSource();
            this.currentFrame = 0;
            this._initFrameLabels();
            this.renderFrame(this.currentFrame, !0);
            this._initColliders();
            this.parent && this._updateLaguage();
            null == this.__pool__id__ && (this.__pool__id__ = this.assetID);
            this.currentAnim && this.onFrameLabel.dispatch(this.currentAnim)
        }
    },
    _handleSumAnims: function(a) {
        a = a.split("$");
        this._baseAssetID =
            a[0];
        this._subAnims = flax.assetsManager.getSubAnims(this.assetsFile, this._baseAssetID);
        var b = a[1];
        null == b && this._subAnims && (b = this._subAnims[0]);
        a = this._baseAssetID;
        b && (a = this._baseAssetID + "$" + b, this.currentAnim = b);
        return a
    },
    _initFrameLabels: function() {
        this._labelFrames = [];
        this._frameSounds = {};
        var a = this.define.labels;
        if (a) {
            for (var b in a) {
                var c = a[b]; - 1 < b.indexOf("@") ? (null == this.define.sounds && (this.define.sounds = {}), this.define.sounds["" + c.start] = DEFAULT_SOUNDS_FOLDER + b.slice(0, b.indexOf("@")), delete a[b]) :
                    this._labelFrames.push(c.start)
            }
            flax.copyProperties(this.define.sounds, this._frameSounds)
        }
    },
    setFpsForAnim: function(a, b) {
        this._fpsForAnims[a] = b
    },
    addFrameSound: function(a, b) {
        this._frameSounds["" + a] = b
    },
    removeFrameSound: function(a) {
        delete this._frameSounds["" + a]
    },
    getLabels: function(a) {
        return this.define.labels ? this.define.labels[a] : null
    },
    hasLabel: function(a) {
        return null != this.getLabels(a)
    },
    getMainCollider: function() {
        return this.getCollider("main") || this._mainCollider
    },
    getCollider: function(a) {
        var b = null;
        this._colliders && (a = this._colliders[a], null != a && (b = a[this.currentFrame]));
        return b
    },
    _initColliders: function() {
        this._mainCollider = null;
        this._colliders = {};
        var a = this.define.colliders;
        if (a) {
            var b = null,
                c;
            for (c in a) {
                this._colliders[c] = [];
                for (var d = a[c], e = -1; ++e < d.length;)
                    if (null == d[e]) this._colliders[c][e] = null;
                    else if (b = this._colliders[c][e] = new flax.Collider(d[e]), b.name = c, b.setOwner(this), "main" == c || "base" == c) this._mainCollider = b
            }
        }
        this._definedMainCollider = null != this._mainCollider;
        this._definedMainCollider ||
            (this._mainCollider = new flax.Collider("Rect,0,0," + this.width + "," + this.height + ",0", !1), this._mainCollider.name = "main", this._mainCollider.setOwner(this))
    },
    getRect: function(a) {
        return this.getMainCollider().getRect(a)
    },
    debugDraw: function() {
        this.getMainCollider().debugDraw()
    },
    getCenter: function(a) {
        return this.getMainCollider().getCenter(a)
    },
    getAnchor: function(a) {
        if (this.define.anchors) {
            var b = this.define.anchors[a];
            if (null != b) return (b = b[this.currentFrame]) && "string" === typeof b && (b = new flax.Anchor(b), this.define.anchors[a][this.currentFrame] =
                b), b
        }
        return null
    },
    bindAnchor: function(a, b, c) {
        if (!this.define.anchors) return cc.log(this.assetID + ": there is no any anchor!"), !1;
        if (null == this.define.anchors[a]) return cc.log(this.assetID + ": there is no anchor named " + a), !1;
        if (null == b) throw "Node can't be null!";
        if (-1 < this._anchorBindings.indexOf(b)) return cc.log(this.assetID + ": anchor has been bound, " + a), !1;
        !1 !== c && this._anchorBindings.push(b);
        b.__anchor__ = a;
        this._updateAnchorNode(b, this.getAnchor(a));
        b.parent != this && (b.removeFromParent(!1), this.addChild(b));
        return !0
    },
    unbindAnchor: function(a, b) {
        for (var c = null, d = -1, e = this._anchorBindings.length; ++d < e;)
            if (c = this._anchorBindings[d], c === a || c.__anchor__ === a) {
                this._anchorBindings.splice(d, 1);
                delete c.__anchor__;
                b && (c.destroy ? c.destroy() : c.removeFromParent());
                break
            }
    },
    getCurrentLabel: function() {
        var a = this.define.labels;
        if (!a) return null;
        for (var b in a) {
            var c = a[b];
            if (this.currentFrame >= c.start && this.currentFrame <= c.end) return b
        }
        return null
    },
    nextFrame: function() {
        this.gotoAndStop(Math.min(++this.currentFrame, this.totalFrames -
            1))
    },
    prevFrame: function() {
        this.gotoAndStop(Math.max(--this.currentFrame, 0))
    },
    play: function(a) {
        this._isLanguageElement || this.__isButton || (!0 !== a ? (this._loopStart = 0, this._loopEnd = this.totalFrames - 1) : (this._animReversed = !0, this.currentFrame = this._loopStart = this.totalFrames - 1, this._loopEnd = 0), this.updatePlaying(!0), this.currentAnim = null)
    },
    playSequence: function(a) {
        if (null == a) return !1;
        a instanceof Array || (a = Array.prototype.slice.call(arguments));
        if (0 == a.length) return !1;
        this._loopSequence = !1;
        this._sequenceIndex =
            0;
        var b = this.gotoAndPlay(a[0]);
        this._animSequence = a;
        return b
    },
    playSequenceLoop: function(a) {
        a instanceof Array || (a = Array.prototype.slice.call(arguments));
        this.playSequence(a);
        this._loopSequence = !0
    },
    stopSequence: function() {
        this._loopSequence = !1;
        this._animSequence.length = 0
    },
    _setSubAnim: function(a, b) {
        if (!a || 0 == a.length) return !1;
        if (null == this._subAnims || -1 == this._subAnims.indexOf(a)) return this.__isButton || cc.log("There is no animation named: " + a), !1;
        this.setSource(this.assetsFile, this._baseAssetID + "$" +
            a);
        !1 === b ? this.gotoAndStop(0) : (this._fpsForAnims[a] && this.setFPS(this._fpsForAnims[a]), this.gotoAndPlay(0));
        this.currentAnim = a;
        this._animTime = 0;
        return !0
    },
    gotoAndPlay: function(a, b) {
        this._animReversed = !1;
        if (this._isLanguageElement || this.__isButton) return !1;
        if ("string" === typeof a) {
            if (this.playing && this.currentAnim == a && !0 !== b) return !0;
            var c = this.getLabels(a);
            if (null == c) return c = this._setSubAnim(a, !0), c || (cc.log("There is no animation named: " + a), this.play()), c;
            this._loopStart = c.start;
            this._loopEnd = c.end;
            this.currentFrame = this._loopStart;
            this.currentAnim = a;
            this._fpsForAnims[a] && this.setFPS(this._fpsForAnims[a])
        } else {
            if (!this.isValideFrame(a)) return cc.log("The frame: " + a + " is out of range!"), !1;
            this._loopStart = 0;
            this._loopEnd = this.totalFrames - 1;
            this.currentFrame = a;
            this.currentAnim = null
        }
        this.renderFrame(this.currentFrame);
        this.updatePlaying(!0);
        this._animTime = 0;
        return !0
    },
    stop: function() {
        this._animReversed = !1;
        this.updatePlaying(!1);
        this.currentAnim = null
    },
    gotoAndStop: function(a) {
        this._animReversed = !1;
        if (isNaN(a)) {
            var b = this.getLabels(a);
            if (null == b) return (b = this._setSubAnim(a, !1)) || this.__isButton || cc.log("There is no animation named: " + a), b;
            a = b.start
        }
        this.currentAnim = null;
        if (!this.isValideFrame(a)) return cc.log("The frame: " + a + " is out of range!"), !1;
        this.updatePlaying(!1);
        this.currentFrame = a;
        this.renderFrame(a);
        return !0
    },
    setFPS: function(a) {
        this._fps != a && (this._fps = a, this.updateSchedule())
    },
    getFPS: function() {
        return this._fps
    },
    updatePlaying: function(a) {
        this.playing != a && (this.playing = a, this.updateSchedule())
    },
    updateSchedule: function() {
        this.playing ? 1 < this.totalFrames && this.schedule(this.onFrame, 1 / this._fps) : this.unschedule(this.onFrame)
    },
    _animTime: 0,
    _animReversed: !1,
    onFrame: function(a) {
        if (this.visible) {
            var b = this._animReversed;
            this.currentFrame += b ? -1 : 1;
            this._animTime += a;
            if (a = b ? this.currentFrame < this._loopEnd : this.currentFrame > this._loopEnd) this.currentFrame = this._loopEnd, (this.autoDestroyWhenOver || this.autoStopWhenOver || this.autoHideWhenOver) && this.updatePlaying(!1), this.onAnimationOver.getNumListeners() &&
                this.onAnimationOver.dispatch(this), this.autoDestroyWhenOver ? this.destroy() : this.autoHideWhenOver ? this.visible = !1 : this._animSequence.length ? this._playNext() : this.autoStopWhenOver || (this.currentFrame = this._loopStart), this._animTime = 0;
            a = b ? this.currentFrame < this._loopEnd : this.currentFrame > this._loopEnd;
            b = b ? 0 > this.currentFrame : this.currentFrame > this.totalFrames - 1;
            if (a || b) this.currentFrame = this._loopStart;
            this.renderFrame(this.currentFrame)
        }
    },
    _playNext: function() {
        this._sequenceIndex++;
        if (this._sequenceIndex >=
            this._animSequence.length && (this._loopSequence ? this._sequenceIndex = 0 : (this.autoStopWhenOver || this.gotoAndPlay(this._animSequence[this._sequenceIndex - 1], !0), this._animSequence = []), this.onSequenceOver.getNumListeners() && this.onSequenceOver.dispatch(this), 0 != this._sequenceIndex)) return;
        var a = this._animSequence,
            b = a[this._sequenceIndex];
        if ("number" === typeof b)
            if (this._loopSequence && this._sequenceIndex == a.length - 1 ? this._sequenceIndex = 0 : this._sequenceIndex++, a.length > this._sequenceIndex && "string" === typeof a[this._sequenceIndex]) {
                var c =
                    b,
                    b = a[this._sequenceIndex];
                this.scheduleOnce(function() {
                    this.gotoAndPlay(b)
                }, c - this._animTime);
                this.updatePlaying(!1)
            } else this._animSequence = [], this.currentFrame = this._loopStart;
        else this.gotoAndPlay(b)
    },
    isValideFrame: function(a) {
        return 0 <= a && a < this.totalFrames
    },
    renderFrame: function(a, b) {
        if (this._prevFrame != a || !0 == b) {
            this._prevFrame != a && (this._prevFrame = a);
            this._handleAnchorBindings();
            this._updateCollider();
            this.doRenderFrame(a);
            this.onFrameChanged.getNumListeners() && this.onFrameChanged.dispatch(this.currentFrame); -
            1 < this._labelFrames.indexOf(a) && this.onFrameLabel.dispatch(this.getCurrentLabel(a));
            var c = this._frameSounds["" + a];
            c && flax.playSound(c)
        }
    },
    doRenderFrame: function(a) {},
    _handleAnchorBindings: function() {
        for (var a = null, b = null, c = -1, d = this._anchorBindings.length; ++c < d;) a = this._anchorBindings[c], a.visible && (b = this.getAnchor(a.__anchor__), null != b && this._updateAnchorNode(a, b))
    },
    _updateAnchorNode: function(a, b) {
        null != b && (a.x = b.x, a.y = b.y, a.zIndex = b.zIndex, a.rotation = b.rotation, a.setScaleX(b.scaleX), a.setScaleY(b.scaleY))
    },
    onEnter: function() {
        this._super();
        this._destroyed = !1;
        this._updateCollider();
        this._updateLaguage();
        flax.callModuleOnEnter(this);
        this.__fromPool && (this.__fromPool = !1, this.release())
    },
    onExit: function() {
        this._super();
        this._destroyed = !0;
        this.onAnimationOver.removeAll();
        this.onSequenceOver.removeAll();
        this.onFrameChanged.removeAll();
        this.onFrameLabel.removeAll();
        flax.inputManager && (flax.inputManager.removeListener(this), this.__isInputMask && flax.inputManager.removeMask(this));
        for (var a = null, b = -1, c = this._anchorBindings.length; ++b <
            c;) a = this._anchorBindings[b], a.destroy ? a.destroy() : a.removeFromParent(!0), delete a.__anchor__;
        this._anchorBindings.length = 0;
        flax.callModuleOnExit(this)
    },
    _updateLaguage: function() {
        (this._isLanguageElement = -1 < flax.languageIndex && this.name && 0 == this.name.indexOf("label__")) && (this.gotoAndStop(flax.languageIndex) || this.gotoAndStop(0))
    },
    _updateCollider: function() {},
    setPosition: function(a, b) {
        var c = !1,
            c = this.getPositionX(),
            d = this.getPositionY();
        void 0 === b ? (c = a.x != c || a.y != d) && this._super(a) : (c = a != c || b != d) &&
            this._super(a, b);
        c && this.parent && (flax.callModuleFunction(this, "onPosition"), this._updateCollider())
    },
    setPositionX: function(a) {
        this.setPosition(a, this.getPositionY())
    },
    setPositionY: function(a) {
        this.setPosition(this.getPositionX(), a)
    },
    _destroyed: !1,
    destroy: function() {
        this._destroyed || (this._destroyed = !0, this.autoRecycle && flax.ObjectPool.get(this.assetsFile, this.clsName, this.__pool__id__ || "").recycle(this), this.removeFromParent())
    },
    onRecycle: function() {
        this.autoRecycle = !1;
        this.setScale(1);
        this.opacity =
            255;
        this.rotation = 0;
        this.ignoreBodyRotation = this.autoHideWhenOver = this.autoStopWhenOver = this.autoDestroyWhenOver = !1;
        RESET_FRAME_ON_RECYCLE && this.gotoAndStop(0);
        this.setPosition(0, 0);
        this._animSequence.length = 0;
        this._loopSequence = !1;
        this._sequenceIndex = 0;
        this._animReversed = !1;
        this.currentAnim = null;
        this.__isInputMask = !1
    },
    isMouseEnabled: function() {
        return this._mouseEnabled
    },
    setMouseEnabled: function(a) {
        this._mouseEnabled = a
    },
    getDefine: function() {
        return null
    },
    onNewSource: function() {}
};
flax.FlaxSprite = cc.Sprite.extend(flax._sprite);
flax.FlaxSprite.create = function(a, b) {
    var c = new flax.FlaxSprite(a, b);
    c.clsName = "flax.FlaxSprite";
    return c
};
flax.addModule(flax.FlaxSprite, flax.TileMapModule);
flax.addModule(flax.FlaxSprite, flax.MoveModule);
flax.addModule(flax.FlaxSprite, flax.ScreenLayoutModule);
flax.addModule(flax.FlaxSprite, flax.PhysicsModule);
window.flax.FlaxSprite = flax.FlaxSprite;
flax.FlaxSpriteBatch = cc.SpriteBatchNode.extend(flax._sprite);
flax.FlaxSpriteBatch.create = function(a, b) {
    var c = new flax.FlaxSpriteBatch(a, b);
    c.clsName = "flax.FlaxSpriteBatch";
    return c
};
flax.addModule(flax.FlaxSpriteBatch, flax.TileMapModule);
flax.addModule(flax.FlaxSpriteBatch, flax.MoveModule);
flax.addModule(flax.FlaxSpriteBatch, flax.ScreenLayoutModule);
flax.addModule(flax.FlaxSpriteBatch, flax.PhysicsModule);
window.flax.FlaxSpriteBatch = flax.FlaxSpriteBatch;
_p = flax.FlaxSprite.prototype;
cc.defineGetterSetter(_p, "mainCollider", _p.getMainCollider);
_p.getPhysicsBody && cc.defineGetterSetter(_p, "physicsBody", _p.getPhysicsBody);
cc.defineGetterSetter(_p, "center", _p.getCenter);
cc.defineGetterSetter(_p, "fps", _p.getFPS, _p.setFPS);
cc.defineGetterSetter(_p, "tileMap", _p.getTileMap, _p.setTileMap);
cc.defineGetterSetter(_p, "currentLabel", _p.getCurrentLabel);
cc.defineGetterSetter(_p, "x", _p.getPositionX, _p.setPositionX);
cc.defineGetterSetter(_p, "y", _p.getPositionY, _p.setPositionY);
_p = flax.FlaxSpriteBatch.prototype;
cc.defineGetterSetter(_p, "mainCollider", _p.getMainCollider);
_p.getPhysicsBody && cc.defineGetterSetter(_p, "physicsBody", _p.getPhysicsBody);
cc.defineGetterSetter(_p, "center", _p.getCenter);
cc.defineGetterSetter(_p, "fps", _p.getFPS, _p.setFPS);
cc.defineGetterSetter(_p, "tileMap", _p.getTileMap, _p.setTileMap);
cc.defineGetterSetter(_p, "currentLabel", _p.getCurrentLabel);
cc.defineGetterSetter(_p, "x", _p.getPositionX, _p.setPositionX);
cc.defineGetterSetter(_p, "y", _p.getPositionY, _p.setPositionY);
flax.Animator = flax.FlaxSprite.extend({
    frameNames: null,
    clsName: "flax.Animator",
    onNewSource: function() {
        this.frameNames = flax.assetsManager.getFrameNames(this.assetsFile, this.define.start, this.define.end);
        this.totalFrames = this.frameNames.length;
        0 == this.totalFrames && cc.log("There is no frame for display: " + this.assetID)
    },
    doRenderFrame: function(a) {
        this.setSpriteFrame(this.frameNames[a])
    },
    getDefine: function() {
        var a = flax.assetsManager.getDisplayDefine(this.assetsFile, this.assetID);
        if (null == a) throw "There is no Animator named: " +
            this.assetID + " in assets: " + this.assetsFile + ", or make sure this class extends from the proper class!";
        return a
    }
});
flax.Animator.create = function(a, b) {
    var c = new flax.Animator(a, b);
    c.clsName = "flax.Animator";
    return c
};
window.flax.Animator = flax.Animator;
flax._image = {
    define: null,
    name: null,
    assetsFile: null,
    assetID: null,
    clsName: "flax.Image",
    autoRecycle: !1,
    _anchorBindings: null,
    __instanceId: null,
    _imgFile: null,
    _sx: 1,
    _sy: 1,
    _imgSize: null,
    _destroyed: !1,
    ctor: function(a, b) {
        if (this instanceof cc.Sprite) cc.Sprite.prototype.ctor.call(this);
        else {
            this.define = flax.assetsManager.getDisplayDefine(a, b);
            this._imgFile = this.define.url;
            this._super();
            var c = new cc.SpriteBatchNode(this._imgFile);
            this.updateWithBatchNode(c, cc.rect(), !1, this.define.scale9)
        }
        if (!a || !b) throw "Please set assetsFile and assetID to me!";
        this.__instanceId = ClassManager.getNewInstanceId();
        this._anchorBindings = [];
        this.setSource(a, b)
    },
    setSource: function(a, b) {
        if (null == a || null == b) throw "assetsFile and assetID can not be null!";
        if (this.assetsFile != a || this.assetID != b) {
            this.assetsFile = a;
            this.assetID = b;
            this.define = flax.assetsManager.getDisplayDefine(this.assetsFile, this.assetID);
            this._imgFile = this.assetsFile.slice(0, this.assetsFile.lastIndexOf("/")) + "/" + this.define.url;
            flax.Scale9Image && this instanceof flax.Scale9Image ? this.initWithFile(this._imgFile,
                cc.rect(), this.define.scale9) : this.initWithFile(this._imgFile);
            if (cc.sys.isNative) this.onImgLoaded();
            else this.addEventListener("load", this.onImgLoaded, this);
            var c = this.define.anchorX,
                d = this.define.anchorY;
            isNaN(c) || isNaN(d) || this.setAnchorPoint(c, d);
            this.onNewSource();
            null == this.__pool__id__ && (this.__pool__id__ = this.assetID)
        }
    },
    onImgLoaded: function() {
        this._imgSize = (new cc.Sprite(this._imgFile)).getContentSize();
        this.scheduleOnce(function() {
            this._updateSize(this._sx, this._sy)
        }, 0.01)
    },
    destroy: function() {
        this._destroyed ||
            (this._destroyed = !0, this.autoRecycle && flax.ObjectPool.get(this.assetsFile, this.clsName, this.__pool__id__ || "").recycle(this), this.removeFromParent())
    },
    onEnter: function() {
        this._super();
        this._destroyed = !1
    },
    onExit: function() {
        this._super();
        flax.inputManager.removeListener(this);
        for (var a = null, b = -1, c = this._anchorBindings.length; ++b < c;) a = this._anchorBindings[b], a.destroy ? a.destroy() : a.removeFromParent(!0), delete a.__anchor__;
        this._anchorBindings.length = 0
    },
    onRecycle: function() {
        this.autoRecycle = !1;
        this.setScale(1);
        this.opacity = 255;
        this.rotation = 0;
        this.setPosition(0, 0)
    },
    getAnchor: function(a) {
        return this.define.anchors && (a = this.define.anchors[a], null != a) ? new flax.Anchor(a[0]) : null
    },
    bindAnchor: function(a, b, c) {
        if (!this.define.anchors) return cc.log(this.assetID + ": there is no any anchor!"), !1;
        if (null == this.define.anchors[a]) return cc.log(this.assetID + ": there is no anchor named " + a), !1;
        if (null == b) throw "Node can't be null!";
        if (-1 < this._anchorBindings.indexOf(b)) return cc.log(this.assetID + ": anchor has been bound, " +
            a), !1;
        !1 !== c && this._anchorBindings.push(b);
        b.__anchor__ = a;
        this._updateAnchorNode(b, this.getAnchor(a));
        b.parent != this && (b.removeFromParent(!1), this.addChild(b));
        return !0
    },
    _updateAnchorNode: function(a, b) {
        null != b && (a.x = b.x, a.y = b.y, a.zIndex = b.zIndex, a.rotation = b.rotation)
    },
    setScaleX: function(a) {
        flax.Scale9Image && this instanceof flax.Scale9Image ? (this._sx = a, this._updateSize(a, this._sy)) : cc.Node.prototype.setScaleX.call(this, a)
    },
    setScaleY: function(a) {
        flax.Scale9Image && this instanceof flax.Scale9Image ? (this._sy =
            a, this._updateSize(this._sx, a)) : cc.Node.prototype.setScaleY.call(this, a)
    },
    _updateSize: function(a, b) {
        null != this._imgSize && (this.width = this._imgSize.width * a, this.height = this._imgSize.height * b)
    },
    onNewSource: function() {}
};
flax.Image = cc.Sprite.extend(flax._image);
cc.Scale9Sprite && (flax.Scale9Image = cc.Scale9Sprite.extend(flax._image), _p = flax.Image.prototype, cc.defineGetterSetter(_p, "scaleX", _p.getScaleX, _p.setScaleX), cc.defineGetterSetter(_p, "scaleY", _p.getScaleY, _p.setScaleY), _p = flax.Scale9Image.prototype, cc.defineGetterSetter(_p, "scaleX", _p.getScaleX, _p.setScaleX), cc.defineGetterSetter(_p, "scaleY", _p.getScaleY, _p.setScaleY), window.flax.Image = flax.Image, window.flax.Scale9Image = flax.Scale9Image);
flax.Image.create = function(a, b) {
    if (flax.assetsManager.getDisplayDefine(a, b).scale9) {
        if (null == flax.Scale9Image) throw "Please add module of 'gui' into project.json if you want to use Scale9Image!";
        var c = new flax.Scale9Image(a, b)
    } else c = new flax.Image(a, b);
    return c
};
flax.FrameData = cc.Class.extend({
    x: 0,
    y: 0,
    rotation: 0,
    scaleX: 1,
    scaleY: 1,
    opacity: 255,
    zIndex: -1,
    skewX: 0,
    skewY: 0,
    font: null,
    fontSize: 12,
    fontColor: "",
    textAlign: "",
    textWidth: 40,
    textHeight: 20,
    _isText: !1,
    _data: null,
    _hasSkew: !1,
    ctor: function(a) {
        this._data = a;
        this.x = parseFloat(a[0]);
        this.y = parseFloat(a[1]);
        this.rotation = parseFloat(a[2]);
        this.scaleX = parseFloat(a[3]);
        this.scaleY = parseFloat(a[4]);
        this.opacity = Math.round(255 * parseFloat(a[5]));
        6 < a.length && (this.zIndex = parseInt(a[6]));
        7 < a.length && (this.skewX = parseFloat(a[7]));
        8 < a.length && (this.skewY = parseFloat(a[8]));
        this._hasSkew = 7 < a.length;
        9 < a.length && (this._isText = !0, this.font = a[9], this.fontSize = parseInt(a[10]), this.fontColor = cc.hexToColor(a[11]), this.textAlign = H_ALIGHS.indexOf(a[12]), this.textWidth = parseFloat(a[13]), this.textHeight = parseFloat(a[14]))
    },
    setForChild: function(a) {
        this._hasSkew || a.setRotation(this.rotation);
        a.setScaleX(this.scaleX);
        a.setScaleY(this.scaleY);
        this._hasSkew && (a.setRotationX(this.skewX), a.setRotationY(this.skewY));
        a.setOpacity && a.setOpacity(this.opacity);
        var b = this.x,
            c = this.y;
        this.font && a instanceof cc.LabelTTF && (a.setFontName(this.font), a.setFontFillColor(this.fontColor), a.setHorizontalAlignment(this.textAlign), a.setDimensions({
            width: this.textWidth,
            height: this.textHeight
        }), a.setFontSize(this.fontSize - 1), a.setFontSize(this.fontSize), b += this.textWidth / 2, c -= this.textHeight / 2);
        a.setPositionX(b);
        a.setPositionY(c)
    },
    clone: function() {
        return new flax.FrameData(this._data)
    }
});
flax._movieClip = {
    clsName: "flax.MovieClip",
    sameFpsForChildren: !0,
    createChildFromPool: !0,
    _autoPlayChildren: !1,
    namedChildren: null,
    _theRect: null,
    _frameDatas: null,
    __isMovieClip: !0,
    replaceChild: function(a, b, c) {
        var d = this.define.children[a];
        if (null == d) cc.log("There is no child with named: " + a + "  in MovieClip: " + this.assetID);
        else {
            var e = this.namedChildren[a];
            if (e) {
                c || (c = this.assetsFile);
                d = flax.assetsManager.getAssetType(c, b);
                if (!d) throw "There is no display with assetID: " + b + " in assets: " + c;
                flax.assetsManager.getAssetType(e.assetsFile,
                    e.assetID) == d ? e.setSource(c, b) : (d = e._autoPlayChildren, e.destroy(), e = flax.assetsManager.createDisplay(c, b, null, this.createChildFromPool), e.name = a, this.namedChildren[a] = e, !0 !== e.__isMovieClip || d || (e.autoPlayChildren = this._autoPlayChildren), this._autoPlayChildren && !0 === e.__isFlaxSprite && (this.playing ? e.gotoAndPlay(0) : e.gotoAndStop(0)), this[a] = e, this.addChild(e))
            } else d["class"] = b, d.assetsFile = c
        }
    },
    getFrameData: function(a, b) {
        return null == this._frameDatas[a] ? null : this._frameDatas[a][b]
    },
    setOpacity: function(a) {
        cc.Node.prototype.setOpacity.call(this,
            a);
        for (var b in this.namedChildren) {
            var c = this.namedChildren[b];
            c.setOpacity && c.setOpacity(a)
        }
    },
    setColor: function(a) {
        cc.Node.prototype.setColor.call(this, a);
        for (var b in this.namedChildren) {
            var c = this.namedChildren[b];
            c.setColor && c.setColor(a)
        }
    },
    onNewSource: function() {
        for (var a in this.namedChildren) this.namedChildren[a].destroy(), delete this.namedChildren[a], delete this[a];
        this.namedChildren = {};
        this.totalFrames = this.define.totalFrames;
        this._theRect = flax._strToRect(this.define.rect);
        this.setContentSize(this._theRect.width,
            this._theRect.height);
        this._initFrameDatas()
    },
    _initFrameDatas: function() {
        this._frameDatas = {};
        for (var a in this.define.children) {
            for (var b = [], c = this.define.children[a].frames, d = -1; ++d < c.length;) {
                var e = c[d];
                e && (e = e.split(","), b[d] = new flax.FrameData(e))
            }
            this._frameDatas[a] = b
        }
    },
    onEnter: function() {
        this._super();
        this.setContentSize(this._theRect.width, this._theRect.height)
    },
    doRenderFrame: function(a) {
        var b, c, d, e;
        for (e in this.define.children) c = this.define.children[e], d = this._frameDatas[e][a], b = this.namedChildren[e],
            d ? (null == b && (b = null != c.text ? flax.Label.create(this.assetsFile, d, c) : flax.assetsManager.createDisplay(c.assetsFile || this.assetsFile, c["class"], null, this.createChildFromPool), b.name = e, this.namedChildren[e] = b, this[e] = b, this.onNewChild(b)), d.setForChild(b), this.sameFpsForChildren && (b.fps = this.fps), c = -1 == d.zIndex ? c.zIndex : d.zIndex, b.parent != this ? (b.removeFromParent(!1), this.addChild(b, c)) : b.zIndex != c && (b.zIndex = c)) : b && (b.destroy ? b.destroy() : b.removeFromParent(!0), delete this.namedChildren[e], delete this[e])
    },
    stop: function() {
        this._super();
        if (this._autoPlayChildren)
            for (var a in this.namedChildren) {
                var b = this.namedChildren[a];
                !0 === b.__isFlaxSprite && b.stop()
            }
    },
    play: function() {
        this._super();
        if (this._autoPlayChildren)
            for (var a in this.namedChildren) {
                var b = this.namedChildren[a];
                !0 === b.__isFlaxSprite && b.play()
            }
    },
    getAutoPlayChildren: function() {
        return this._autoPlayChildren
    },
    setAutoPlayChildren: function(a) {
        if (this._autoPlayChildren != a) {
            this._autoPlayChildren = a;
            for (var b in this.namedChildren) {
                var c = this.namedChildren[b];
                !0 === c.__isMovieClip && c.setAutoPlayChildren(a);
                c.__isFlaxSprite && (a ? c.play() : c.stop())
            }
        }
    },
    onNewChild: function(a) {
        !0 === a.__isMovieClip && (a.autoPlayChildren = this._autoPlayChildren);
        this._autoPlayChildren && !0 === a.__isFlaxSprite && (this.playing ? a.gotoAndPlay(0) : a.gotoAndStop(0))
    },
    getDefine: function() {
        var a = flax.assetsManager.getMc(this.assetsFile, this.assetID);
        if (null == a) throw "There is no MovieClip named: " + this.assetID + " in assets: " + this.assetsFile + ", or make sure this class extends from the proper class!";
        return a
    },
    getChild: function(a, b) {
        void 0 === b && (b = !0);
        var c = this.namedChildren[a];
        if (c) return c;
        if (!b) return null;
        for (var d in this.namedChildren)
            if (c = this.namedChildren[d], c.getChild && (c = c.getChild(a, b))) return c;
        return null
    },
    getChildByAssetID: function(a) {
        var b = null,
            c;
        for (c in this.namedChildren)
            if (b = this.namedChildren[c], b.assetID == a) return b;
        return null
    },
    getLabelText: function(a, b) {
        var c = this.getChild(a, void 0 === b ? !0 : b);
        return c && (c instanceof flax.Label || c instanceof cc.LabelTTF) ? c.getString() : null
    },
    setLabelText: function(a, b, c) {
        return (a = this.getChild(a, void 0 === c ? !0 : c)) && (a instanceof flax.Label || a instanceof cc.LabelTTF) ? (a.setString(b), a) : null
    },
    setFPS: function(a) {
        if (this._fps != a && (this._fps = a, this.updateSchedule(), this.sameFpsForChildren)) {
            a = null;
            for (var b in this.namedChildren) a = this.namedChildren[b], a.fps = this._fps
        }
    },
    onRecycle: function() {
        this._super();
        this.createChildFromPool = this.sameFpsForChildren = !0;
        this._autoPlayChildren = !1;
        if (RESET_FRAME_ON_RECYCLE)
            for (var a in this.namedChildren) {
                var b =
                    this.namedChildren[a];
                !0 === b.__isFlaxSprite && b.gotoAndStop(0)
            }
    },
    onExit: function() {
        this._super();
        for (var a in this.namedChildren) delete this.namedChildren[a], delete this[a]
    }
};
flax.MovieClip = flax.FlaxSprite.extend(flax._movieClip);
flax.MovieClip.create = function(a, b) {
    var c = new flax.MovieClip(a, b);
    c.clsName = "flax.MovieClip";
    return c
};
_p = flax.MovieClip.prototype;
cc.defineGetterSetter(_p, "autoPlayChildren", _p.getAutoPlayChildren, _p.setAutoPlayChildren);
cc.defineGetterSetter(_p, "opacity", _p.getOpacity, _p.setOpacity);
window.flax.MovieClip = flax.MovieClip;
flax.MovieClipBatch = flax.FlaxSpriteBatch.extend(flax._movieClip);
flax.MovieClipBatch.create = function(a, b) {
    var c = new flax.MovieClipBatch(a, b);
    c.clsName = "flax.MovieClipBatch";
    return c
};
_p = flax.MovieClipBatch.prototype;
cc.defineGetterSetter(_p, "autoPlayChildren", _p.getAutoPlayChildren, _p.setAutoPlayChildren);
cc.defineGetterSetter(_p, "opacity", _p.getOpacity, _p.setOpacity);
window.flax.MovieClipBatch = flax.MovieClipBatch;
flax.ProgressBarType = {
    HORIZONTAL: "horizontal",
    VERTICAL: "vertical",
    RADIAL: "radial"
};
flax.ProgressBar = flax.Animator.extend({
    pBar: null,
    _type: flax.ProgressBarType.HORIZONTAL,
    _reversed: !1,
    _tween: null,
    onEnter: function() {
        this._super()
    },
    getPercentage: function() {
        return this.pBar ? this.pBar.percentage : 0
    },
    setPercentage: function(a) {
        this.pBar && (this.pBar.percentage = a)
    },
    getType: function() {
        return this._type
    },
    setType: function(a) {
        this._type != a && (this._type = a, this._updatePBar())
    },
    getReversed: function() {
        return this._reversed
    },
    setReversed: function(a) {
        this._reversed != a && (this._reversed = a, this._updatePBar(),
            this.percentage += 0.1, this.percentage -= 0.1)
    },
    tween: function(a, b, c) {
        null != this.pBar && (this._tween && (this.pBar.stopAction(this._tween), this._tween.release()), this._tween = cc.progressFromTo(c, a, b), this._tween.retain(), this.pBar.runAction(this._tween))
    },
    stopTween: function() {
        this._tween && this.pBar && (this.pBar.stopAction(this._tween), this._tween.release(), this._tween = null)
    },
    doRenderFrame: function(a) {
        if (a = cc.spriteFrameCache.getSpriteFrame(this.frameNames[a])) a = new cc.Sprite(a), null == this.pBar ? (this.width =
            a.width, this.height = a.height, this.pBar = cc.ProgressTimer.create(a), this._updatePBar(), this.pBar.setAnchorPoint(this.getAnchorPoint()), this.pBar.setPosition(this.getAnchorPointInPoints()), this.addChild(this.pBar)) : this.pBar.setSprite(a)
    },
    _updatePBar: function() {
        if (null != this.pBar)
            if (this._type == flax.ProgressBarType.RADIAL) this.pBar.type = 0, this.pBar.setReverseDirection(this._reversed), this.pBar.midPoint = cc.p(0.5, 0.5);
            else {
                this.pBar.type = 1;
                var a = this._type == flax.ProgressBarType.HORIZONTAL,
                    b = cc.p(0, 0),
                    c = cc.p(a ? 1 : 0, a ? 0 : 1);
                this._reversed && (a ? b.x = 1 : b.y = 1);
                this.pBar.midPoint = b;
                this.pBar.barChangeRate = c
            }
    }
});
flax.ProgressBar.create = function(a, b) {
    var c = new flax.ProgressBar(a, b);
    c.clsName = "flax.ProgressBar";
    return c
};
window.flax.ProgressBar = flax.ProgressBar;
_p = flax.ProgressBar.prototype;
cc.defineGetterSetter(_p, "percentage", _p.getPercentage, _p.setPercentage);
cc.defineGetterSetter(_p, "type", _p.getType, _p.setType);
cc.defineGetterSetter(_p, "reversed", _p.getReversed, _p.setReversed);
flax.Label = cc.Sprite.extend({
    mlWidth: 0,
    mlHeight: 0,
    fontName: null,
    fontSize: 20,
    frames: [],
    chars: [],
    assetsFile: null,
    name: null,
    params: null,
    _str: null,
    _gap: 0,
    _spaceGap: 10,
    _charCanvas: null,
    _fontDefine: null,
    getString: function() {
        return this._str
    },
    setString: function(a) {
        a !== this._str && (this._str = "" + a, this._updateStr())
    },
    getSpaceGap: function() {
        return this._spaceGap
    },
    setSpaceGap: function(a) {
        this._spaceGap != a && (this._spaceGap = a, this._str && -1 < this._str.indexOf(" ") && this._updateStr())
    },
    getGap: function() {
        return this._gap
    },
    setGap: function(a) {
        a != this._gap && (this._gap = a, this._str && this._updateStr())
    },
    setFontName: function(a) {
        if (null != a && (null == this.fontName || this.fontName != a)) {
            this.fontName = a;
            this._fontDefine = flax.assetsManager.getFont(this.assetsFile, this.fontName);
            if (null == this._fontDefine) throw "Can't find the font named: " + this.fontName;
            this.frames = flax.assetsManager.getFrameNames(this.assetsFile, parseInt(this._fontDefine.start), parseInt(this._fontDefine.end));
            this.chars = this._fontDefine.chars;
            this.fontSize = parseInt(this._fontDefine.size)
        }
    },
    tweenInt: function(a, b, c) {
        this.setString(a);
        var d = flax.numberSign(b - a);
        if (0 != d) {
            var e = Math.abs(b - a),
                f = Math.max(c / e, flax.frameInterval),
                e = Math.round(c / f),
                d = d * Math.round(Math.abs(b - a) / e);
            this.schedule(function(a) {
                a = parseInt(this._str);
                var c = a + d;
                0 < d && c > b ? c = b : 0 > d && c < b && (c = b);
                c != a && this.setString(c)
            }, f, e + 10)
        }
    },
    _updateStr: function() {
        if (null == this._charCanvas) {
            var a = cc.path.changeBasename(this.assetsFile, ".png");
            this._charCanvas = new cc.SpriteBatchNode(a, this._str.length);
            this.addChild(this._charCanvas)
        }
        this._charCanvas.removeAllChildren();
        for (i = this.mlHeight = this.mlWidth = 0; i < this._str.length; i++)
            if (a = this._str[i], "\n" != a)
                if (" " == a) this.mlWidth += this._spaceGap;
                else {
                    for (var b = -1, c = 0; c < this.chars.length; c++)
                        if (this.chars[c] == a) {
                            b = c;
                            break
                        } - 1 == b ? cc.log("Not found the char: " + a + " in the fonts: " + this.fontName) : (sprite = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(this.frames[b])), sprite.anchorX = this._fontDefine.anchorX, sprite.anchorY = this._fontDefine.anchorY, a = sprite.getContentSize(), sprite.x = this.mlWidth, sprite.y = 0, this.mlWidth += a.width,
                        i != this._str.length - 1 && (this.mlWidth += this._gap), this.mlHeight = a.height > this.mlHeight ? a.height : this.mlHeight, this._charCanvas.addChild(sprite))
                }
        if (this.params)
            for (b = Math.max(this.mlWidth / this.params.textWidth, this.mlHeight / this.params.textHeight), a = 0, 1 < b && (c = 1 / b, this._charCanvas.scale = c, a = this.mlHeight * (1 - 1 / b) * b, this.mlWidth *= c, this.mlHeight *= c), b = (this.params.textWidth - this.mlWidth) / 2, i = this._charCanvas.childrenCount; i--;) charChild = this._charCanvas.children[i], "center" == H_ALIGHS[this.params.textAlign] ?
                charChild.x += b : "right" == H_ALIGHS[this.params.textAlign] && (charChild.x += 2 * b), charChild.y -= a;
        this._charCanvas.setContentSize(this.mlWidth, this.mlHeight);
        this.setContentSize(this.mlWidth, this.mlHeight)
    },
    getRect: function(a) {
        null == a && (a = !0);
        var b = cc.rect(0.5 * this.width / this._str.length, -this.params.textHeight, this.width, this.height + 2);
        b.y += (this.params.textHeight - this.height) / 2 - 1;
        if (!a) return b;
        var c = b.width,
            d = b.height,
            b = cc.p(b.x, b.y),
            b = this.convertToWorldSpace(b);
        a instanceof cc.Node && (b = a.convertToNodeSpace(b));
        return cc.rect(b.x, b.y, c, d)
    },
    destroy: function() {
        this.removeFromParent()
    }
});
_p = flax.Label.prototype;
cc.defineGetterSetter(_p, "gap", _p.getGap, _p.setGap);
cc.defineGetterSetter(_p, "spaceGap", _p.getSpaceGap, _p.setSpaceGap);
cc.defineGetterSetter(_p, "text", _p.getString, _p.setString);
_p = cc.LabelTTF.prototype;
cc.defineGetterSetter(_p, "text", _p.getString, _p.setString);
flax.Label.create = function(a, b, c) {
    if (!1 === b._isText) throw "The assetsFile: " + a + " was exported with old version of Flax tool, re-export it to fix the Text issue!";
    cc.sys.isNative || (c.text = c.text.split("\\").join(""));
    var d = null,
        e = c["class"],
        f = flax.assetsManager.getFont(a, e);
    if (!0 == c.input) {
        if (null == cc.EditBox) throw "If you want to use input text, please add module of 'editbox' into project.json!";
        d = flax.assetsManager.getFrameNamesOfDisplay(a, e);
        if (null == flax.Scale9Image) throw "Please add module of 'gui' or 'ccui'(cocos 3.10 later) into project.json if you want to use EditBox!";
        d = new cc.EditBox(cc.size(b.textWidth, b.textHeight), new cc.Scale9Sprite(d[0]), d[1] ? new cc.Scale9Sprite(d[1]) : null, d[2] ? new cc.Scale9Sprite(d[2]) : null);
        d.setFontColor(b.fontColor);
        d.setFontName(b.font);
        d.setFontSize(b.fontSize);
        d.setPlaceHolder(c.text);
        d.setPlaceholderFontName(b.font);
        d.setPlaceholderFontSize(b.fontSize);
        b = flax.assetsManager.getDisplayDefine(a, e);
        d.setAnchorPoint(b.anchorX, b.anchorY)
    } else b.font && null == f ? (a = new cc.FontDefinition, a.fontName = b.font, a.fontSize = b.fontSize, a.textAlign = b.textAlign,
        a.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_CENTER, a.fillStyle = b.fontColor, a.fontDimensions = !0, a.boundingWidth = b.textWidth, a.boundingHeight = b.textHeight, "null" == e ? d = new cc.LabelTTF(c.text, a) : flax.getLanguageStr && (d = new cc.LabelTTF(flax.getLanguageStr(e) || c.text, a))) : (d = new flax.Label, flax.assetsManager.addAssets(a), d.assetsFile = a, d.params = b, d.setFontName(e), d.setAnchorPoint(0, 0), d.setString(c.text));
    return d
};
flax._fontResources = null;
flax.registerFont = function(a, b) {
    a && b && ("string" == typeof b && (b = [b]), null == flax._fontResources && (flax._fontResources = {}), flax._fontResources[a] = b)
};
var ButtonState = {
    UP: "up",
    OVER: "over",
    DOWN: "down",
    SELECTED: "selected",
    SELECTED_OVER: "selected_over",
    SELECTED_DOWN: "selected_down",
    DISABLED: "disabled",
    LOCKED: "locked"
};
MOUSE_DOWN_SCALE = 0.95;
flax._buttonDefine = {
    clickSound: null,
    group: null,
    _playChildrenOnState: !1,
    _state: null,
    _initScaleX: 1,
    _initScaleY: 1,
    _inScaleDown: !1,
    _inDisabledGray: !0,
    __isButton: !0,
    onEnter: function() {
        this._super();
        this._initScaleX = this.scaleX;
        this._initScaleY = this.scaleY;
        flax.inputManager.addListener(this, this._onPress, InputType.press);
        flax.inputManager.addListener(this, this._onClick, InputType.click);
        flax.inputManager.addListener(this, this._onMove, InputType.move);
        if (!cc.sys.isMobile) {
            var a = this,
                b = cc.EventListener.create({
                    event: cc.EventListener.MOUSE,
                    onMouseMove: function(b) {
                        if (0 != b.getButton()) {
                            var d = {
                                target: a,
                                currentTarget: a
                            };
                            a.isMouseEnabled() && a._onMove(b, d)
                        }
                    }
                });
            cc.eventManager.addListener(b, this)
        }
    },
    onExit: function() {
        this.group && (this.group.removeButton(this), this.group = null);
        cc.eventManager.removeListener(this);
        this._super()
    },
    onRecycle: function() {
        this._super();
        this._playChildrenOnState = !1;
        this._state = null;
        this._inScaleDown = !1;
        this.disabledCover && (this.disabledCover.visible = !0);
        this._inDisabledGray = !0
    },
    setState: function(a) {
        var b = this.isSelected();
        this._state = a;
        this.gotoAndStop(this._state) || (a = this.isSelected() ? ButtonState.SELECTED : ButtonState.UP, this.gotoAndStop(a) || (this.gotoAndStop(0), -1 < this._state.indexOf("down") && (this._inScaleDown = !0, this.setScale(this._initScaleX * MOUSE_DOWN_SCALE, this._initScaleY * MOUSE_DOWN_SCALE)), this._state == ButtonState.DISABLED && (this._inDisabledGray = !0, this.disabledCover && (this.disabledCover.visible = !0)))); - 1 == this._state.indexOf("down") && this._inScaleDown && this.setScale(this._initScaleX, this._initScaleY);
        this._state !=
            ButtonState.DISABLED && this._inDisabledGray && (this._inDisabledGray = !1, this.disabledCover && (this.disabledCover.visible = !1));
        this._playOrPauseChildren();
        this.isSelected() && !b && this.group && this.group.updateButtons(this);
        this.handleStateChange()
    },
    handleStateChange: function() {},
    getState: function() {
        return this._state
    },
    isSelected: function() {
        return this._state && 0 == this._state.indexOf("selected")
    },
    setSelected: function(a) {
        this.isSelected() != a && this.isSelectable() && this.isMouseEnabled() && !this.isLocked() && this.setState(a ?
            ButtonState.SELECTED : ButtonState.UP)
    },
    isSelectable: function() {
        return this.hasLabel(ButtonState.SELECTED)
    },
    setMouseEnabled: function(a) {
        this.setState(a ? ButtonState.UP : ButtonState.DISABLED);
        return !0
    },
    isMouseEnabled: function() {
        return this._state != ButtonState.DISABLED
    },
    setLocked: function(a) {
        this.setState(a ? ButtonState.LOCKED : ButtonState.UP)
    },
    isLocked: function() {
        return this._state == ButtonState.LOCKED
    },
    setPlayChildrenOnState: function(a) {
        this._playChildrenOnState != a && (this._playChildrenOnState = a, this._playOrPauseChildren())
    },
    getPlayChildrenOnState: function() {
        return this._playChildrenOnState
    },
    _onPress: function(a, b) {
        if (this._state != ButtonState.LOCKED && this._state != ButtonState.DISABLED) {
            var c = this.clickSound || flax.buttonSound;
            c && flax.playSound(c);
            this._toSetState(ButtonState.DOWN)
        }
    },
    _onClick: function(a, b) {
        this._state != ButtonState.LOCKED && this._state != ButtonState.DISABLED && (this.isSelectable() ? !this.isSelected() || this.group ? this.setState(ButtonState.SELECTED) : this.setState(ButtonState.UP) : this.setState(ButtonState.UP))
    },
    _onMove: function(a, b) {
        this._state != ButtonState.DISABLED && this._state != ButtonState.LOCKED && (flax.ifTouched(this, a.getLocation()) ? this._toSetState(cc.sys.isMobile ? ButtonState.DOWN : ButtonState.OVER) : this._toSetState(ButtonState.UP))
    },
    _toSetState: function(a) {
        this.isSelectable() && this.isSelected() && (a = a == ButtonState.UP ? ButtonState.SELECTED : "selected_" + a);
        this.setState(a)
    },
    _playOrPauseChildren: function() {
        for (var a = this.childrenCount; a--;) {
            var b = this.children[a];
            flax.isFlaxSprite(b) && (this._playChildrenOnState ?
                (b.autoPlayChildren = !0, b.play()) : (b.autoPlayChildren = !1, b.stop()))
        }
    }
};
flax.SimpleButton = flax.Animator.extend(flax._buttonDefine);
flax.SimpleButton.create = function(a, b) {
    var c = new flax.SimpleButton(a, b);
    c.clsName = "flax.SimpleButton";
    c.setState(ButtonState.UP);
    return c
};
window.flax.SimpleButton = flax.SimpleButton;
_p = flax.SimpleButton.prototype;
cc.defineGetterSetter(_p, "state", _p.getState, _p.setState);
cc.defineGetterSetter(_p, "playChildrenOnState", _p.getPlayChildrenOnState, _p.setPlayChildrenOnState);
cc.defineGetterSetter(_p, "selected", _p.isSelected, _p.setSelected);
flax.Button = flax.MovieClip.extend(flax._buttonDefine);
flax.Button.create = function(a, b) {
    var c = new flax.Button(a, b);
    c.clsName = "flax.Button";
    c.setState(ButtonState.UP);
    return c
};
window.flax.Button = flax.Button;
_p = flax.Button.prototype;
cc.defineGetterSetter(_p, "state", _p.getState, _p.setState);
cc.defineGetterSetter(_p, "playChildrenOnState", _p.getPlayChildrenOnState, _p.setPlayChildrenOnState);
cc.defineGetterSetter(_p, "selected", _p.isSelected, _p.setSelected);
flax.ButtonGroup = cc.Class.extend({
    buttons: null,
    selectedButton: null,
    onSelected: null,
    ctor: function() {
        this.buttons = [];
        this.onSelected = new signals.Signal
    },
    addButton: function(a) {
        a instanceof Array || (a = Array.prototype.slice.call(arguments));
        for (var b = 0; b < a.length; b++) {
            var c = a[b],
                c = a[b];
            !flax.isButton(c) || -1 < this.buttons.indexOf(c) || (this.buttons.push(c), c.group = this)
        }
    },
    removeButton: function(a) {
        var b = this.buttons.indexOf(a); - 1 < b && (this.buttons.splice(b, 1), a.group = null);
        0 == this.buttons.length && (this.onSelected.removeAll(),
            this.onSelected = null)
    },
    updateButtons: function(a) {
        for (var b = 0; b < this.buttons.length; b++) {
            var c = this.buttons[b];
            c != a && c.isMouseEnabled() && !c.isLocked() && c.setState(ButtonState.UP)
        }
        this.selectedButton = a;
        b = flax.mousePos && flax.ifTouched(a, flax.mousePos);
        this.onSelected.dispatch(a, b)
    }
});
flax._preloader = {
    resources: null,
    _label: null,
    _logo: null,
    _inited: !1,
    initWithResources: function(a, b) {
        this.init();
        "string" == typeof a && (a = [a]);
        this.resources = a || [];
        this.cb = b
    },
    init: function() {
        if (!this._inited) {
            this._inited = !0;
            var a = this,
                b = cc.director.getWinSize();
            if (this instanceof cc.Layer) {
                var c = new cc.LayerColor(cc.color(0, 0, 0, 100));
                this.addChild(c, 0)
            }
            var d = cc.p(b.width / 2, b.height / 2),
                e = cc.game.config.loading;
            e && flax.isImageFile(e) ? cc.loader.load(e, function() {
                a._logo = new cc.Sprite(e);
                a._logo.setPosition(d);
                a.addChild(a._logo, 10);
                if (!cc.sys.isNative) {
                    var b = 16 * (1 + a._logo.width / 200);
                    a.createLabel(cc.pSub(d, cc.p(0, a._logo.height / 2 + 0.6 * b)), b);
                    a.logoClick()
                }
            }) : a.createLabel(d)
        }
    },
    createLabel: function(a, b) {
        var c = this._label = new cc.LabelTTF("Loading...", "Arial", b || 18);
        c.enableStroke(cc.color(51, 51, 51), 2);
        c.setColor(cc.color(255, 255, 255));
        c.setPosition(a);
        this.addChild(c, 10)
    },
    logoClick: function() {
        var a = this._logo,
            b = cc.EventListener.create({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                swallowTouches: !1,
                onTouchBegan: function(b,
                    d) {
                    return cc.rectContainsPoint(flax.getRect(a, !0), b.getLocation()) ? (flax.goHomeUrl(), !0) : !1
                }
            });
        cc.eventManager.addListener(b, this._logo)
    },
    onEnter: function() {
        cc.Node.prototype.onEnter.call(this);
        this.resources && this.schedule(this._startLoading, 0.3)
    },
    _startLoading: function() {
        var a = this;
        a.unschedule(a._startLoading);
        cc.loader.load(a.resources, function(b, c, d) {
            null != a._label && a._showProgress("Loading: ", c, d)
        }, function() {
            a.cb && a.cb()
        })
    },
    _showProgress: function(a, b, c) {
        this._label && (null != c ? this._label.setString(a +
            (c + 1) + "/" + b) : this._label.setString(a + b + "%"))
    }
};
flax.Preloader = cc.Scene.extend(flax._preloader);
flax.ResPreloader = cc.Layer.extend(flax._preloader);
window.flax.Preloader = flax.Preloader;
window.flax.ResPreloader = flax.ResPreloader;
ALL_DIRECTONS = "UP DOWN LEFT RIGHT LEFT_UP RIGHT_UP RIGHT_DOWN LEFT_DOWN".split(" ");
ALL_DIRECTONS0 = "UP DOWN LEFT RIGHT LEFT_UP LEFT_DOWN".split(" ");
ALL_DIRECTONS1 = "UP DOWN LEFT RIGHT RIGHT_UP RIGHT_DOWN".split(" ");
EIGHT_DIRECTIONS_VALUE = {
    UP: [0, 1],
    DOWN: [0, -1],
    LEFT: [-1, 0],
    RIGHT: [1, 0],
    LEFT_UP: [-1, 1],
    RIGHT_UP: [1, 1],
    RIGHT_DOWN: [1, -1],
    LEFT_DOWN: [-1, -1]
};
MAX_IN_TILE = 10;
flax.TileMap = cc.Node.extend({
    isHexagon: !1,
    autoLayout: !1,
    _allTilesIndex: null,
    _gridCanvas: null,
    _tileWidth: 0,
    _tileHeight: 0,
    _mapWidth: 0,
    _mapHeight: 0,
    _objectsMap: null,
    _objectsArr: null,
    _inUpdate: !1,
    _offset: null,
    ctor: function() {
        this._super();
        this.setAnchorPoint(0, 0);
        this._offset = cc.p()
    },
    init: function(a, b, c, d, e) {
        if (!a || !b) throw "Please set tileWdith and tileHeight!";
        this._tileWidth = a;
        this._tileHeight = b;
        c && d && this.setMapSize(c, d, e)
    },
    update: function(a) {
        for (a = this._objectsArr ? this._objectsArr.length : 0; a--;) {
            var b =
                this._objectsArr[a];
            b.autoUpdateTileWhenMove && b.updateTile()
        }
    },
    getTileSize: function() {
        return {
            width: this._tileWidth,
            height: this._tileHeight
        }
    },
    getMapSizePixel: function() {
        var a = cc.size(this._tileWidth * this._mapWidth, this._tileHeight * this._mapHeight);
        this.isHexagon && (a.width += 0.5 * this._tileWidth);
        return a
    },
    setMapSize: function(a, b, c) {
        !0 == c && (a = Math.ceil(a / this._tileWidth), b = Math.ceil(b / this._tileHeight));
        c = [
            [],
            []
        ];
        if (this._mapWidth == a && this._mapHeight == b) return c;
        null == this._objectsArr && (this._objectsArr = []);
        null == this._objectsMap && (this._objectsMap = []);
        for (var d = this._mapWidth, e = this._mapHeight, f = -1, g = -1, k = Math.max(a, d), m = Math.max(b, e); ++f < k;) {
            null == this._objectsMap[f] && (this._objectsMap[f] = []);
            for (g = -1; ++g < m;) f >= a || g >= b ? (c[0] = c[0].concat(this._objectsMap[f][g]), this.removeObjects(f, g), delete this._objectsMap[f][g]) : f < d && g < e || (this._objectsMap[f][g] = [], c[1].push([f, g]));
            0 == this._objectsMap[f].length && delete this._objectsMap[f]
        }
        this._mapWidth = a;
        this._mapHeight = b;
        this.setContentSize(this.getMapSizePixel());
        return c
    },
    getMapSize: function() {
        return {
            width: this._mapWidth,
            height: this._mapHeight
        }
    },
    showDebugGrid: function() {
        this.showGrid()
    },
    showGrid: function(a, b) {
        this._gridCanvas ? this._gridCanvas.clear() : (this._gridCanvas = cc.DrawNode.create(), this.addChild(this._gridCanvas));
        a || (a = 1);
        b || (b = cc.color(255, 0, 0, 255));
        for (var c = 0; c <= this._mapWidth; c++) this._gridCanvas.drawSegment(cc.p(c * this._tileWidth, 0), cc.p(c * this._tileWidth, this._tileHeight * this._mapHeight), a, b);
        for (c = 0; c <= this._mapHeight; c++) this._gridCanvas.drawSegment(cc.p(0,
            c * this._tileHeight), cc.p(this._tileWidth * this._mapWidth, c * this._tileHeight), a, b)
    },
    hideGrid: function() {
        this._gridCanvas && this._gridCanvas.clear()
    },
    showDebugTile: function(a, b, c) {
        a = this.getTiledPosition(a, b);
        null == c && (c = cc.color(0, 255, 0, 128));
        b = flax.getScale(this, !0);
        flax.drawRect(cc.rect(a.x - this._tileWidth * b.x / 2, a.y - this._tileHeight * b.y / 2, this._tileWidth * b.x, this._tileHeight * b.y), 1, c, c)
    },
    clear: function(a) {
        if (0 != this._objectsArr.length) {
            void 0 === a && (a = !0);
            for (var b, c = 0; c < this._mapWidth; c++)
                for (var d =
                        0; d < this._mapHeight; d++) {
                    if (a) {
                        b = this._objectsMap[c][d];
                        for (var e in b) {
                            var f = b[e];
                            f instanceof cc.Node && f.destroy()
                        }
                    }
                    this._objectsMap[c][d] = []
                }
            this._objectsArr.length = 0
        }
    },
    getTileIndex: function(a, b) {
        var c, d;
        null == b ? (c = a.x, d = a.y) : (c = a, d = b);
        var e = this._offset;
        e.x = this.getPositionX();
        e.y = this.getPositionY();
        this.parent && (e = this.parent.convertToWorldSpace(e));
        var f = flax.getScale(this, !0),
            g = Math.abs(f.x),
            k = Math.abs(f.y),
            f = Math.floor((c - e.x) / (this._tileWidth * g));
        d = Math.floor((d - e.y) / (this._tileHeight * k));
        this.isHexagon && 0 != d % 2 && (f = Math.floor((c - e.x - this._tileWidth * g * 0.5) / (this._tileWidth * g)));
        return {
            x: f,
            y: d
        }
    },
    getTiledPosition: function(a, b) {
        var c = this._offset;
        c.x = this.getPositionX();
        c.y = this.getPositionY();
        this.parent && (c = this.parent.convertToWorldSpace(c));
        var d = flax.getScale(this, !0),
            e = Math.abs(d.x),
            f = Math.abs(d.y),
            d = (a + 0.5) * this._tileWidth * e + c.x,
            c = (b + 0.5) * this._tileHeight * f + c.y;
        this.isHexagon && 0 != b % 2 && (d += 0.5 * this._tileWidth * e);
        return {
            x: d,
            y: c
        }
    },
    getCoveredTiles: function(a, b) {
        var c = flax.getRect(a, !0);
        return this.getCoveredTiles1(c, b)
    },
    getCoveredTiles1: function(a, b) {
        b = !0 === b;
        for (var c = this.getTileIndex(a.x, a.y), d = c.x, e = c.y, c = this.getTileIndex(a.x + a.width, a.y + a.height), f = c.x, c = c.y, g = [], d = d - 1, k = 0; ++d <= f;)
            for (k = e - 1; ++k <= c;) b ? g = g.concat(this.getObjects(d, k)) : g.push({
                x: d,
                y: k
            });
        return g
    },
    isValideTile: function(a, b) {
        return 0 <= a && a < this._mapWidth && 0 <= b && b < this._mapHeight
    },
    snapToTile: function(a, b, c, d) {
        if (a instanceof cc.Node) {
            var e = null;
            if (null == b || null == c) e = a.getPosition(), a.parent && (e = a.parent.convertToWorldSpace(e)),
                c = this.getTileIndex(e), b = c.x, c = c.y;
            e = this.getTiledPosition(b, c);
            a.parent && (e = a.parent.convertToNodeSpace(e));
            a.setPosition(e);
            !0 === d && a.setTileMap(this)
        }
    },
    snapAll: function() {
        for (var a = this._objectsArr.length, b = -1, c = null; ++b < a;) c = this._objectsArr[b], this.snapToTile(c)
    },
    addObject: function(a, b, c) {
        void 0 === b && (b = a.tx);
        void 0 === c && (c = a.ty);
        a.tx = b;
        a.ty = c;
        if (this.isValideTile(b, c) && !(-1 < this._objectsArr.indexOf(a))) {
            this._objectsArr.push(a);
            var d = this._objectsMap[b][c];
            !this._inUpdate && cc.sys.isNative &&
                (this._inUpdate = !0, cc.director.getScheduler().scheduleUpdateForTarget(this));
            if (a instanceof cc.Node && this.autoLayout) {
                b = (b + (this._mapHeight - 1 - c) * this._mapWidth) * MAX_IN_TILE;
                c = null;
                for (var e = 0, f = !1, g = 0; g < d.length; g++) c = d[g], c instanceof cc.Node && (!f && c.y <= a.y && (d.splice(g, 0, a), a.zIndex = Math.min(e, MAX_IN_TILE) + b, f = !0, e++, g++), c.zIndex = Math.min(e, MAX_IN_TILE) + b, e++);
                f || (d.push(a), a.zOrder = Math.min(e, MAX_IN_TILE) + b)
            } else d.push(a)
        }
    },
    updateLayout: function(a, b) {
        if (this.isValideTile(a, b)) {
            var c = this._objectsMap[a][b];
            if (0 != c.length) {
                c.sort(this._sortByY);
                for (var d = (a + (this._mapHeight - 1 - b) * this._mapWidth) * MAX_IN_TILE, e = null, f = 0, g = 0; g < c.length; g++) e = c[g], e instanceof cc.Node && (e.zIndex = Math.min(f, MAX_IN_TILE) + d, f++)
            }
        }
    },
    removeObject: function(a, b, c) {
        void 0 === b && (b = a.tx);
        void 0 === c && (c = a.ty);
        this.isValideTile(b, c) && (b = this._objectsMap[b][c], c = b.indexOf(a), -1 < c && b.splice(c, 1), c = this._objectsArr.indexOf(a), -1 < c && this._objectsArr.splice(c, 1));
        this._inUpdate && cc.sys.isNative && 0 == this._objectsArr.length && (this._inUpdate = !1, cc.director.getScheduler().unscheduleUpdateForTarget(this))
    },
    removeObjects: function(a, b) {
        if (this.isValideTile(a, b))
            for (var c = this._objectsMap[a][b], d = null, d = -1; c.length;) d = c[0], d.tx = d.ty = -1, d = this._objectsArr.indexOf(d), -1 < d && this._objectsArr.splice(d, 1), c.splice(0, 1)
    },
    getObjects: function(a, b) {
        return this.isValideTile(a, b) ? this._objectsMap[a][b] : []
    },
    getObjects1: function(a, b) {
        var c = this.getTileIndex(a, b);
        return this.getObjects(c.x, c.y)
    },
    getAllObjects: function() {
        return this._objectsArr
    },
    getTiles: function(a) {
        for (var b = [], c = -1, d = -1; ++c < this._mapWidth;)
            for (d = -1; ++d < this._mapHeight;) null != a && !1 === a(this, c, d) || b.push({
                x: c,
                y: d
            });
        return b
    },
    getRow: function(a, b) {
        for (var c = -1, d = []; ++c < this._mapHeight;) d = !0 === b ? d.concat(this.getObjects(a, c)) : d.push({
            x: a,
            y: c
        });
        return d
    },
    getCol: function(a, b) {
        for (var c = -1, d = []; ++c < this._mapWidth;) d = !0 === b ? d.concat(this.getObjects(c, a)) : d.push({
            x: c,
            y: a
        });
        return d
    },
    __tilesSearched: null,
    __nonRecursive: !1,
    findConnectedObjects: function(a, b, c) {
        this.__tilesSearched = {};
        b = this.findNeighbors(a, b, c, null, !1);
        a = b.indexOf(a); - 1 < a && b.splice(a, 1);
        this.__tilesSearched = null;
        return b
    },
    findNeighbors: function(a, b, c, d, e) {
        for (var f = this._getAllDirections(a, c, d), g = !this.__nonRecursive && null != this.__tilesSearched, k = [], m = f.length; m--;) {
            var n = EIGHT_DIRECTIONS_VALUE[f[m]],
                p = a.tx + n[0],
                n = a.ty + n[1];
            if (this.__tilesSearched) {
                var r = p + "-" + n;
                if (!0 === this.__tilesSearched[r]) continue;
                this.__tilesSearched[r] = !0
            }
            if (e) k.push({
                x: p,
                y: n
            });
            else
                for (var p = this.getObjects(p, n), n = null, r = !1, t = 0; t < p.length; t++)
                    if (n = p[t], null == b || 0 == b.length ||
                        n[b] === a[b]) k.push(n), !r && g && (k = k.concat(this.findNeighbors(n, b, c, d, e)), r = !0)
        }
        return k
    },
    findSeparatedGroups: function() {
        var a = [],
            b = null;
        this.__tilesSearched = {};
        var c = this.getAllObjects(),
            d = [],
            e = c.length;
        for (i = 0; i < e; i++) nb = c[i], -1 < d.indexOf(nb) || (b = this.findNeighbors(nb), b.length || !0 === this.__tilesSearched[nb.tx + "-" + nb.ty] || (b = [nb], this.__tilesSearched[nb.tx + "-" + nb.ty] = !0), a.push(b), d = d.concat(b));
        this.__tilesSearched = null;
        return a
    },
    findSurroundings: function(a, b, c, d) {
        if (null == b || 1 > b) b = 1;
        a = [a];
        var e = [];
        this.__tilesSearched = {};
        for (this.__nonRecursive = !0; b--;) {
            for (var f = [], g = 0; g < a.length; g++) {
                var k = a[g];
                void 0 === k.tx && (k = {
                    tx: k.x,
                    ty: k.y
                });
                f = f.concat(this.findNeighbors(k, null, !0, null, c && d ? !c : !0))
            }
            a = f;
            if (c && !d) {
                for (var m = [], g = 0; g < f.length; g++) k = f[g], m = m.concat(this.getObjects(k.x, k.y));
                e.push(m)
            } else e.push(f)
        }
        this.__tilesSearched = null;
        this.__nonRecursive = !1;
        return e
    },
    _getAllDirections: function(a, b, c) {
        var d = ALL_DIRECTONS;
        this.isHexagon ? d = 0 == a.ty % 2 ? ALL_DIRECTONS0 : ALL_DIRECTONS1 : b || (d = d.slice(0, 4));
        a = ALL_DIRECTONS.indexOf(c);
        if (-1 == a || 3 < a) return d;
        b = [];
        var e = null;
        for (a = 0; a < d.length; a++) e = d[a], -1 < e.indexOf(c) && b.push(e);
        this.isHexagon && 1 == b.length && b.push("UP", "DOWN");
        return b
    },
    isEmptyTile: function(a, b) {
        if (!this.isValideTile(a, b)) return !1;
        var c = this.getObjects(a, b);
        return c ? 0 == c.length : !1
    },
    tileToIndex: function(a, b) {
        return b * this._mapWidth + a
    },
    indexToTile: function(a) {
        var b = a % this._mapWidth;
        return {
            x: b,
            y: Math.floor((a - b) / this._mapWidth)
        }
    },
    getAllTilesIndex: function() {
        if (!this._allTilesIndex) {
            this._allTilesIndex = [];
            for (var a = 0; a < this._mapWidth * this._mapHeight; a++) this._allTilesIndex.push(a)
        }
        return this._allTilesIndex
    },
    findEmptyTilesIndex: function() {
        for (var a = this.getAllTilesIndex().concat(), b = this._objectsArr, c = b.length, d = 0; d < c && a.length; d++)
            for (var e = this.getCoveredTiles(b[d]), f = e.length, g = 0; g < f; g++) {
                var k = e[g],
                    k = a.indexOf(this.tileToIndex(k.x, k.y)); - 1 < k && a.splice(k, 1)
            }
        return a
    },
    _sortByY: function(a, b) {
        if (a.y > b.y) return -1;
        if (a.y < b.y) return 1
    }
});
flax.TileMap.create = function(a) {
    return new flax.TileMap(a)
};
_p = flax.TileMap.prototype;
cc.defineGetterSetter(_p, "tileSize", _p.getTileSize);
cc.defineGetterSetter(_p, "mapSize", _p.getMapSize);
flax._tileMaps = {};
flax.getTileMap = function(a) {
    if ("undefined" !== typeof flax._tileMaps[a]) return flax._tileMaps[a];
    cc.log("The tileMap: " + a + " hasn't been defined, pls use flax.registerTileMap to define it firstly!");
    return null
};
flax.registerTileMap = function(a) {
    flax._tileMaps[a.id] = a
};
flax.userData = {};
flax.fetchUserData = function(a) {
    a && (flax.userData = a);
    a = null;
    try {
        (a = cc.sys.localStorage.getItem(cc.game.config.gameId)) && (a = JSON.parse(a))
    } catch (b) {
        cc.log("Fetch UserData Error: " + b.name)
    }
    a && flax.copyProperties(a, flax.userData);
    flax.userData || (flax.userData = {})
};
flax.saveUserData = function() {
    flax.userData || (flax.userData = {});
    try {
        cc.sys.localStorage.setItem(cc.game.config.gameId, JSON.stringify(flax.userData))
    } catch (a) {
        cc.log("Save UserData Error: " + a.name)
    }
};
flax.ObjectPool = cc.Class.extend({
    maxCount: 100,
    _clsName: null,
    _cls: null,
    _assetsFile: null,
    _pool: null,
    _extraID: "",
    init: function(a, b, c) {
        if (this._assetsFile && this._cls) return cc.log("The pool has been inited with cls: " + this._cls), !1;
        this._clsName = b;
        this._cls = flax.nameToObject(b);
        if (null == this._cls) return cc.log("There is no class named: " + b), !1;
        this._assetsFile = a;
        this._pool = [];
        void 0 !== c && (this.maxCount = c);
        return !0
    },
    fetch: function(a, b, c) {
        if (null == a) return cc.log("Please give me a assetID to fetch a object!"),
            null;
        var d = null;
        0 < this._pool.length ? (d = this._pool.shift(), d.__fromPool = !0, d.setSource(this._assetsFile, a)) : d = this._cls.create ? this._cls.create(this._assetsFile, a) : new this._cls(this._assetsFile, a);
        d.__pool__id__ = this._extraID;
        d.clsName = this._clsName;
        d._destroyed = !1;
        d.autoRecycle = !0;
        d.visible = !0;
        c ? "undefined" === typeof c.zIndex && (c.zIndex = 0) : c = {
            zIndex: 0
        };
        d.attr(c);
        b && b.addChild(d);
        return d
    },
    recycle: function(a) {
        a instanceof this._cls ? this._pool.length < this.maxCount && (a.onRecycle && a.onRecycle(), a.retain &&
            a.retain(), this._pool.push(a)) : cc.log("The object to recycle is not the same type with this pool: " + this._clsName)
    },
    release: function() {
        for (var a = this._pool.length; a--;) this._pool[a].release && this._pool[a].release();
        this._pool.length = 0
    }
});
flax.ObjectPool.all = {};
flax.ObjectPool.create = function(a, b, c) {
    var d = new flax.ObjectPool;
    return d.init(a, b, c) ? d : null
};
flax.ObjectPool.get = function(a, b, c) {
    null == b && (b = "flax.Animator");
    null == c && (c = "");
    var d = a + b + c,
        e = flax.ObjectPool.all[d];
    null == e && (e = flax.ObjectPool.create(a, b), e._extraID = c, flax.ObjectPool.all[d] = e);
    return e
};
flax.ObjectPool.release = function() {
    for (var a in flax.ObjectPool.all) flax.ObjectPool.all[a].release(), delete flax.ObjectPool.all[a]
};
flax.HealthModule = {
    maxHealth: 100,
    health: 100,
    hurtable: !0,
    dead: !1,
    ownerBody: null,
    onEnter: function() {
        this.health = this.maxHealth;
        this.dead = !1
    },
    onExit: function() {},
    onHit: function(a) {
        if (!this.hurtable) return !1;
        if (this.dead) return !0;
        this.health -= a.damage;
        return 0 >= this.health ? (this.dead = !0, this.health = 0, this.onDie(), !0) : !1
    },
    onDie: function() {
        this.ownerBody ? this.ownerBody.destroy() : this.destroy()
    }
};
flax.EnemyWaveModule = {
    waveAssetJson: null,
    waves: null,
    onWaveBegin: null,
    onEnemyIn: null,
    onWaveOver: null,
    batchCanvas: null,
    currentWave: -1,
    totalWaves: 0,
    wavePaused: !0,
    waveOver: !1,
    _waveDefine: null,
    _enemyCount: 0,
    _firstRun: !0,
    onEnter: function() {
        this.totalWaves = this.waves.length;
        this.onWaveBegin = new signals.Signal;
        this.onEnemyIn = new signals.Signal;
        this.onWaveOver = new signals.Signal;
        this.wavePaused || this.nextWave()
    },
    onExit: function() {
        this.onWaveBegin.removeAll();
        this.onEnemyIn.removeAll();
        this.onWaveOver.removeAll()
    },
    startWave: function() {
        this.wavePaused && (this.wavePaused = !1, this._firstRun ? this.nextWave() : this._createWaveEnemy(), this._firstRun = !1)
    },
    stopWave: function() {
        this.wavePaused || (this.wavePaused = !0)
    },
    nextWave: function() {
        this.waveOver || this.wavePaused || (this._enemyCount = 0, this.currentWave++, this._waveDefine = this.waves[this.currentWave], this._createWaveEnemy(), this.onWaveBegin.dispatch())
    },
    _createWaveEnemy: function() {
        if (!this.waveOver && !this.wavePaused) {
            var a = flax.getRandomInArray(this._waveDefine.types),
                a =
                this._doCreateEnemy(a);
            this.onEnemyIn.dispatch(a);
            ++this._enemyCount < this._waveDefine.count ? (a = flax.randInt(parseInt(this._waveDefine.interval[0]), parseInt(this._waveDefine.interval[1])), this.scheduleOnce(function() {
                this._createWaveEnemy()
            }, a)) : this.currentWave == this.totalWaves - 1 ? (this.waveOver = !0, this.onWaveOver.dispatch()) : this.nextWave()
        }
    },
    _doCreateEnemy: function(a) {
        this.waveAssetJson && flax.assetsManager.createDisplay(this.waveAssetJson, a, {
            parent: this.batchCanvas,
            x: this.x,
            y: this.y
        }, !0)
    }
};
flax._soundButton = {
    onEnter: function() {
        this._super();
        this.setState(flax.getSoundEnabled() ? ButtonState.UP : ButtonState.SELECTED)
    },
    _onClick: function(a, b) {
        this._super(a, b);
        flax.setSoundEnabled(!this.isSelected())
    }
};
flax.SimpleSoundButton = flax.SimpleButton.extend(flax._soundButton);
flax.SoundButton = flax.Button.extend(flax._soundButton);
flax.GunParam = cc.Class.extend({
    bulletAssets: null,
    bulletID: null,
    targetMap: null,
    selfMap: null,
    damage: 1,
    damageRadius: 0,
    speed: 600,
    interval: 0.15,
    count: 1,
    angleGap: 5,
    angleOffset: 0,
    waveInterval: 0,
    countInWave: 6,
    gravityX: 0,
    gravityY: 0,
    fireSound: null,
    fireEffectID: null,
    hitEffectID: null,
    alwaysLive: !1,
    bulletPlayOnce: !1,
    fps: 0,
    isMissle: !1
});
flax.GunParam.create = function(a) {
    var b = new flax.GunParam;
    0 == a.speed && (a.speed = 0.001);
    flax.copyProperties(a, b);
    return b
};
flax.Gun = cc.Node.extend({
    owner: null,
    param: null,
    aimTarget: null,
    _firing: !1,
    _targetMap: null,
    _canvas: null,
    start: function() {
        this._firing || (this._firing = !0, this._canvas = flax.BulletCanvas.fetch(this.param.bulletAssets), 0 >= this.param.waveInterval || 1 > this.param.countInWave ? (this.schedule(this.shootOnce, this.param.interval), this.shootOnce()) : this._waveFire())
    },
    end: function() {
        this._firing && (this._firing = !1, this.unschedule(this.shootOnce), this.unschedule(this._createWave))
    },
    updateParam: function(a) {
        null != a && (flax.copyProperties(a,
            this.param), this.end(), this.start())
    },
    isFiring: function() {
        return this._firing
    },
    _waveFire: function() {
        this._firing && (this._createWave(), this.schedule(this._createWave, this.param.interval * this.param.countInWave + this.param.waveInterval, cc.REPEAT_FOREVER))
    },
    shootOnce: function() {
        if (null != this.parent) {
            var a = this.parent.convertToWorldSpace(this.getPosition());
            if (this.aimTarget && this.aimTarget.parent && this.aimTarget.visible) {
                var b = flax.getAngle(flax.getPosition(this, !0), this.aimTarget.center);
                this.owner.onAimingTarget(b);
                this.rotation = b - this.param.angleOffset - this.parent.rotation
            }
            for (var a = this._canvas.convertToNodeSpace(a), b = flax.getRotation(this, !0), c = -1, d = 0, e = 0, f = flax.createDInts(this.param.count); ++c < this.param.count;) e = f[c], d = b + e * this.param.angleGap, this._canvas.addBullet(d, a, this.param, this.owner);
            this._showFireEffect(a, d);
            this.param.fireSound && flax.playSound(this.param.fireSound)
        }
    },
    _createWave: function() {
        1 < this.param.countInWave ? this.schedule(this.shootOnce, this.param.interval, this.param.countInWave - 1) : this.shootOnce()
    },
    _showFireEffect: function(a, b) {
        if (null != this.param.fireEffectID && "" != this.param.fireEffectID) {
            var c = flax.assetsManager.createDisplay(this.param.bulletAssets, this.param.fireEffectID, {
                parent: this._canvas
            }, !0);
            c.zIndex = 999;
            c.autoDestroyWhenOver = !0;
            c.setPosition(a);
            c.setRotation(b);
            c.gotoAndPlay(0)
        }
    }
});
flax.BulletCanvas = cc.SpriteBatchNode.extend({
    assetsFile: null,
    onBulletHit: null,
    onBulletOut: null,
    _bullets: null,
    onEnter: function() {
        this._super();
        this._bullets = [];
        this.onBulletHit = new signals.Signal;
        this.onBulletOut = new signals.Signal;
        this.scheduleUpdate()
    },
    onExit: function() {
        this._super();
        this.onBulletHit.removeAll();
        this.onBulletOut.removeAll()
    },
    addBullet: function(a, b, c, d) {
        if (null == this.parent) cc.log("Please create a bullet canvas: flax.BulletCanvas.create('" + this.assetsFile + "', container, zIndex);");
        else {
            c instanceof flax.GunParam || (c = flax.GunParam.create(c));
            var e = flax.assetsManager.createDisplay(c.bulletAssets, c.bulletID, {
                parent: this
            }, !0);
            e.owner = d;
            e.param = c;
            d && d.targets && (e.targets = d.targets);
            c.targetMap && (e.targetMap = flax.getTileMap(c.targetMap));
            c.fps && (e.fps = c.fps);
            e.__physicalShooted = !1;
            if (e instanceof flax.MovieClip) {
                e.__isMovieClip = !0;
                e.autoPlayChildren = !0;
                e.autoDestroyWhenOver = !0;
                d = e.children.length;
                for (var f; d--;) f = e.children[d], c.selfMap && f.setTileMap(c.selfMap), f.__isBullet = !0, f.__canvas =
                    this, f.__body = e
            } else c.selfMap && (e.setTileMap(c.selfMap), e.__isBullet = !0, e.__canvas = this, e.__body = e);
            e.play();
            e.autoStopWhenOver = c.bulletPlayOnce;
            e.setPosition(b);
            e.setRotation(a);
            b = c.damage;
            b instanceof Array && (1 == b.length ? b = b[0] : 2 <= b.length && (b = flax.randInt(b[0], b[1])));
            e.damage = b;
            a = DEGREE_TO_RADIAN * (90 - (a + c.angleOffset));
            e.__vx = c.speed * Math.cos(a);
            e.__vy = c.speed * Math.sin(a);
            this._bullets.push(e);
            return e
        }
    },
    destroyBullet: function(a, b, c) {
        void 0 === b && (b = this._bullets.indexOf(a));
        0 > b || (!1 !== c && a.destroy(),
            this._bullets.splice(b, 1))
    },
    update: function(a) {
        var b = this._bullets.length;
        if (0 != b)
            for (var c = null, d = null, d = null, e = !1, e = null; b--;) {
                c = this._bullets[b];
                c.physicsBody ? c.__physicalShooted || (c.physicsBody.SetLinearVelocity({
                    x: c.__vx / PTM_RATIO,
                    y: c.__vy / PTM_RATIO
                }), c.__physicalShooted = !0) : (c.__vx += c.param.gravityX * a, c.__vy += c.param.gravityY * a, c.x += c.__vx * a, c.y += c.__vy * a, c.rotation = flax.getAngle1(c.__vx, c.__vy, !0) - c.param.angleOffset);
                var d = flax.getRect(c, !0),
                    e = !1,
                    f = !cc.rectIntersectsRect(flax.stageRect, d);
                f || (d = this._checkHittedTarget(c, d, !1)) && d.length && (e = flax.getPosition(c, !0), d = c.param.damageRadius, 0 < d && (d = cc.rect(e.x - d / 2, e.y - d / 2, d, d), this._checkHittedTarget(c, d, !0)), e = !0);
                f ? (this.onBulletOut.dispatch(c), this.destroyBullet(c, b)) : e && (this.onBulletHit.dispatch(c), c.param.alwaysLive || this.destroyBullet(c, b))
            }
    },
    _checkHittedTarget: function(a, b, c) {
        var d = [],
            e = null;
        a.targets ? e = a.targets : a.targetMap && (e = a.targetMap.getCoveredTiles1(b, !0));
        if (!e || !e.length) return d;
        b = flax.getRotation(a, !0);
        for (var f = -1; ++f <
            e.length;)
            if ((target = e[f]) && target.parent && target.visible && (!a.owner || !(target == a.owner || flax.isChildOf(a.owner, target) || !0 === target.dead || null != a.owner.camp && target.camp == a.owner.camp)))
                if (a.__isMovieClip)
                    for (var g = a.children, k = g.length; k--;) {
                        var m = g[k];
                        b = flax.getRotation(m, !0);
                        if (m.mainCollider.checkCollision(target.mainCollider)) {
                            flax.callModuleFunction(target, "onHit", a);
                            !1 !== target.hurtable && this._showHitEffect(a, b, a.convertToWorldSpace(m.getPosition()));
                            target.__isBullet && (m = target.__canvas._bullets.indexOf(target), -1 < m && target.__canvas._bullets.splice(m, 1), target.__body.destroy());
                            if (!c) return [target];
                            d.push(target)
                        }
                    } else if (a.mainCollider.checkCollision(target.mainCollider)) {
                        flax.callModuleFunction(target, "onHit", a);
                        !1 !== target.hurtable && this._showHitEffect(a, b, a.getPosition());
                        target.__isBullet && (m = target.__canvas._bullets.indexOf(target), -1 < m && target.__canvas._bullets.splice(m, 1), target.__body.destroy());
                        if (!c) return [target];
                        d.push(target)
                    }
        return d
    },
    _showHitEffect: function(a, b, c) {
        if (null != a.param.hitEffectID &&
            "" != a.param.hitEffectID) {
            var d = flax.assetsManager.createDisplay(a.param.bulletAssets, a.param.hitEffectID, {
                parent: this
            }, !0);
            d.zIndex = 999;
            d.autoDestroyWhenOver = !0;
            d.setPosition(c || a.getPosition());
            d.setRotation(b);
            d.gotoAndPlay(0)
        }
    }
});
flax.BulletCanvas.create = function(a, b, c) {
    a = flax.BulletCanvas.fetch(a);
    a.parent != b && (a.removeFromParent(), b.addChild(a, c || 999))
};
flax.BulletCanvas.fetch = function(a) {
    if (flax._bulletCanvases[a]) return flax._bulletCanvases[a];
    var b = cc.path.changeBasename(a, ".png"),
        b = new flax.BulletCanvas(b, 100);
    b.assetsFile = a;
    return flax._bulletCanvases[a] = b
};
flax._bulletCanvases = {};
flax.BulletCanvas.release = function() {
    flax._bulletCanvases = {}
};
flax.Gun.create = function(a) {
    if (null == a) return cc.log("Please give me a param defiled like: flax.GunParam!"), null;
    a = flax.GunParam.create(a);
    var b = new flax.Gun;
    b.param = a;
    b.init();
    return b
};
flax._gunnerDefine = {
    camp: null,
    _gunParam: null,
    targets: null,
    alwaysBind: !0,
    _guns: null,
    _autoShooting: !1,
    _waitingShoot: !1,
    _auto: !1,
    onEnter: function() {
        this._super();
        this._guns = [];
        this._gunParam && this.setGunParam(this._gunParam)
    },
    onRecycle: function() {
        this._super();
        this._guns = this.targets = this._gunParam = this.camp = null;
        this._autoShooting = this._waitingShoot = this._auto = !1;
        this.stopShoot()
    },
    getGunParam: function() {
        return this._gunParam
    },
    setGunParam: function(a, b) {
        this._gunParam = a;
        if (null != this.parent)
            if (b || (b =
                    a.gunAnchors), null == b) cc.log("Please set the gunAnchors param!");
            else {
                for (var c = -1, d = b.length, e = null, f = null; ++c < d;) e = b[c], f = flax.Gun.create(this._gunParam), this.bindAnchor(e, f, this.alwaysBind) && (f.owner = this, f.name = e, this[e] = f, this._guns.push(f));
                this._waitingShoot && this.scheduleOnce(this.autoShoot, 0.1)
            }
    },
    shoot: function() {
        this._auto = !1;
        this._doBeginShoot()
    },
    autoShoot: function(a) {
        this._auto = !0;
        null == this.parent || null == this._guns || 0 == this._guns.length ? this._waitingShoot = !0 : (0 < a ? this.scheduleOnce(this._doBeginShoot,
            a) : this._doBeginShoot(), this._autoShooting = !0, this._waitingShoot = !1)
    },
    aimToTarget: function(a) {
        if (a && a.parent && a.visible) {
            null == this.targets ? this.targets = [a] : -1 == this.targets.indexOf(a) && this.targets.push(a);
            for (var b = -1, c = this._guns.length, d = null; ++b < c;) d = this._guns[b], d.aimTarget = a
        }
    },
    onAimingTarget: function(a) {},
    _doBeginShoot: function() {
        for (var a = -1, b = this._guns.length; ++a < b;) this._auto ? this._guns[a].start() : this._guns[a].shootOnce()
    },
    stopShoot: function() {
        this._autoShooting = !1;
        if (null != this._guns &&
            0 != this._guns.length)
            for (var a = -1, b = this._guns.length; ++a < b;) this._guns[a].end()
    },
    upgradeGun: function(a, b) {
        var c = this._deltaGunParam(a);
        !isNaN(b) && 0 < b ? this.scheduleOnce(function() {
            this._deltaGunParam(c)
        }, b) : this._deltaGunParam(c)
    },
    _deltaGunParam: function(a) {
        if (0 != this._guns.length) {
            var b = {},
                c = 0,
                d;
            for (d in a) c = this._guns[0].param[d] + a[d], 0 >= c ? delete a[d] : (b[d] = -a[d], a[d] = c);
            c = this._guns.length;
            for (d = null; c--;) d = this._guns[c], d.updateParam(a);
            return b
        }
    },
    onDie: function() {
        this.stopShoot();
        flax.callModuleFunction(this,
            "onDie");
        this.ownerBody ? this.ownerBody.destroy() : this.destroy()
    }
};
flax.Gunner = flax.Animator.extend(flax._gunnerDefine);
window.flax.Gunner = flax.Gunner;
flax.MCGunner = flax.MovieClip.extend(flax._gunnerDefine);
window.flax.MCGunner = flax.MCGunner;
flax.addModule(flax.Gunner, flax.HealthModule, !1);
flax.addModule(flax.MCGunner, flax.HealthModule, !1);
_p = flax.Gunner.prototype;
cc.defineGetterSetter(_p, "gunParam", _p.getGunParam, _p.setGunParam);
_p = flax.MCGunner.prototype;
cc.defineGetterSetter(_p, "gunParam", _p.getGunParam, _p.setGunParam);
flax.Gunner.create = function(a, b) {
    var c = new flax.Gunner(a, b);
    c.clsName = "flax.Gunner";
    return c
};
flax.MCGunner.create = function(a, b) {
    var c = new flax.MCGunner(a, b);
    c.clsName = "flax.MCGunner";
    return c
};
flax.ScrollingBG = cc.Node.extend({
    name: null,
    onScrolledOver: null,
    _loop: !0,
    _bg0: null,
    _bg1: null,
    _sources: null,
    _scrollingIndex: 0,
    _scrolling: !1,
    _paused: !1,
    _speedX: 0,
    _speedY: 0,
    _d: 1,
    _size: null,
    _x0: 0,
    _y0: 0,
    ctor: function(a, b, c) {
        this._super();
        this._sources = [];
        this.onScrolledOver = new signals.Signal;
        a && this.addSource(a, b, c)
    },
    onExit: function() {
        this._super();
        this.onScrolledOver.removeAll()
    },
    addSource: function(a, b, c) {
        this._sources.push({
            source: a,
            assetID: b,
            isTile: c
        });
        null == this._bg0 && (this._bg0 = this._createNextBG())
    },
    _createNextBG: function() {
        this._scrollingIndex > this._sources.length - 1 && (this._scrollingIndex = 0);
        var a = this._sources[this._scrollingIndex];
        this._scrollingIndex++;
        var b = null;
        if (null != a.assetID) b = !0 !== a.isTile ? flax.assetsManager.createDisplay(a.source, a.assetID, null, !0) : new flax.TiledImage(a.source, a.assetID);
        else if (a.source)
            if (flax.isFlaxDisplay(a.source)) a.source.parent && a.source.parent.addChild(this, a.source.zIndex), this.name = a.source.name, this.parent && (this.parent[this.name] = this), this.setPosition(a.source.getPosition()),
                b = flax.assetsManager.cloneDisplay(a.source), a.source.removeFromParent();
            else if (flax.isImageFile(a.source)) b = new cc.Sprite(a.source);
        else throw "Not supported source type!";
        else throw "Arguments is not valid!";
        b.setAnchorPoint(0, 0);
        this.addChild(b);
        null == this._size && (this._size = b.getContentSize(), this.setContentSize(this._size));
        return b
    },
    reset: function() {
        this._paused = !1;
        this._scrolling && (this._scrolling = !1, this._speedX = this._speedY = 0, this._bg0.destroy ? this._bg0.destroy() : this._bg0.removeFromParent(),
            this._bg0 = null, this._bg1.destroy ? this._bg1.destroy() : this._bg1.removeFromParent(), this._bg1 = null, this._scrollingIndex = 0, null == this._bg0 && (this._bg0 = this._createNextBG()), this._bg0.setPosition(this._x0, this._y0), this.unscheduleUpdate())
    },
    startXScroll: function(a, b) {
        0 == a || null == this._bg0 || this._scrolling || (this._scrolling = !0, this._loop = !1 !== b, this._speedX = a, this._speedY = 0, this._d = 0 < this._speedX ? 1 : -1, this._resetScroll(), this.scheduleUpdate())
    },
    startYScroll: function(a, b) {
        0 == a || null == this._bg0 || this._scrolling ||
            (this._scrolling = !0, this._loop = !1 !== b, this._speedY = a, this._speedX = 0, this._d = 0 < this._speedY ? 1 : -1, this._resetScroll(), this.scheduleUpdate())
    },
    pauseScroll: function() {
        this._scrolling && !this._paused && (this._paused = !0, this.unscheduleUpdate())
    },
    resumeScroll: function() {
        this._scrolling && this._paused && (this._paused = !1, this.scheduleUpdate())
    },
    _resetScroll: function() {
        this._bg0.setPosition(this._x0, this._y0);
        null == this._bg1 && (this._bg1 = this._createNextBG());
        0 != this._speedX ? this._bg1.x = -this._d * (this._size.width -
            1) : this._bg1.y = -this._d * (this._size.height - 1)
    },
    update: function(a) {
        if (0 == this._size.width * this._size.height) this._size = this._bg0.getContentSize(), 0 != this._size.width * this._size.height && (this.setContentSize(this._size), this._resetScroll());
        else {
            var b = !1;
            0 != this._speedX ? (a *= this._speedX, this._bg0.x += a, this._bg1.x += a, a = this._size.width - this._bg0.x * this._d, 0 >= a && (this._bg0.x += this._d * a, this._bg1.x += this._d * a, b = !0)) : 0 != this._speedY && (a *= this._speedY, this._bg0.y += a, this._bg1.y += a, a = this._size.height - this._bg0.y *
                this._d, 0 >= a && (this._bg0.y += this._d * a, this._bg1.y += this._d * a, b = !0));
            b && (!this._loop && this._scrollingIndex > this._sources.length - 1 ? (this.onScrolledOver.dispatch(), this.pauseScroll()) : (this._bg0.destroy ? this._bg0.destroy() : this._bg0.removeFromParent(), this._bg0 = this._bg1, this._bg1 = this._createNextBG(), this._resetScroll()))
        }
    },
    getRect: function() {
        0 == this._size.width * this._size.height && (this._size = this._bg0.getContentSize(), 0 != this._size.width * this._size.height && this.setContentSize(this._size));
        return cc.rect(0,
            0, this._size.width, this._size.height)
    }
});
flax.ScrollingBG.create = function(a, b, c) {
    return new flax.ScrollingBG(a, b, c)
};
flax._scrollPaneDefine = {
    _viewRect: null,
    onEnter: function() {
        this._super();
        (this._viewRect = this.getCollider("view").getRect(!0)) ? flax.inputManager.addListener(null, this._startDrag, InputType.press, this): cc.log("If you want me scrollable, please set collider__view for me!")
    },
    scrollToCenter: function(a, b) {
        var c = cc.visibleRect.center,
            c = this.parent.convertToNodeSpace(c),
            d = this.convertToWorldSpace(a.getPosition ? a.getPosition() : a),
            d = this.parent.convertToNodeSpace(d),
            c = cc.pSub(c, d),
            c = this._validatePos(this.x +
                c.x, this.y + c.y);
        0 < b ? this.runAction(cc.MoveTo.create(b, c)) : this.setPosition(c)
    },
    _startDrag: function(a, b) {
        this.scheduleOnce(function() {
            flax.inputManager.addListener(null, this._drag, InputType.move, this);
            flax.inputManager.addListener(null, this._stopDrag, InputType.up, this)
        }, 0.01)
    },
    _drag: function(a, b) {
        var c = a.getDelta();
        this._viewRect.width >= this.width && (c.x = 0);
        this._viewRect.height >= this.height && (c.y = 0);
        c = this._validatePos(this.x + c.x, this.y + c.y);
        this.x = c.x;
        this.y = c.y
    },
    _stopDrag: function(a, b) {
        flax.inputManager.removeListener(null,
            this._drag, InputType.move);
        flax.inputManager.removeListener(null, this._stopDrag, InputType.up)
    },
    _validatePos: function(a, b) {
        a = Math.max(this._viewRect.x + this._viewRect.width - this.width, a);
        a = Math.min(this._viewRect.x, a);
        b = Math.max(this._viewRect.y + this._viewRect.height - this.height, b);
        b = Math.min(this._viewRect.y, b);
        return cc.p(a, b)
    }
};
flax.ScrollPane = flax.Animator.extend(flax._scrollPaneDefine);
flax.ScrollPane.create = function(a, b) {
    return new flax.ScrollPane(a, b)
};
window.flax.ScrollPane = flax.ScrollPane;
flax.MCScrollPane = flax.MovieClip.extend(flax._scrollPaneDefine);
flax.MCScrollPane.create = function(a, b) {
    return new flax.MCScrollPane(a, b)
};
window.flax.MCScrollPane = flax.MCScrollPane;
flax.TiledImage = cc.SpriteBatchNode.extend({
    tileMap: null,
    tileWidthOffset: 0,
    tileHeightOffset: 0,
    assetsFile: null,
    assetID: null,
    _mapWidth: 0,
    _mapHeight: 0,
    ctor: function(a, b, c, d) {
        var e = cc.path.changeBasename(a, ".png");
        cc.SpriteBatchNode.prototype.ctor.call(this, e);
        this.tileMap = new flax.TileMap;
        this.setTileSource(a, b);
        c || (c = cc.visibleRect.width);
        d || (d = cc.visibleRect.height);
        this.setSize(c, d)
    },
    setTileSource: function(a, b) {
        if (this.assetsFile != a || this.assetID != b) {
            this.assetsFile = a;
            this.assetID = b;
            var c = flax.assetsManager.createDisplay(this.assetsFile,
                this.assetID).getContentSize();
            this.tileMap.init(c.width + this.tileWidthOffset, c.height + this.tileHeightOffset);
            0 < this._mapWidth * this._mapHeight && (0 < this.getChildrenCount() && this._updateTileImg(), this._updateSize())
        }
    },
    setSize: function(a, b) {
        if (a != this._mapWidth || b != this._mapHeight) this._mapWidth = a, this._mapHeight = b, this.assetsFile && this._updateSize()
    },
    _updateTileImg: function() {
        for (var a = null, b = this.getChildrenCount(), c = -1; ++c < b;) a = this.children[c], a.setSource(this.assetsFile, this.assetID), this.tileMap.snapToTile(a,
            a.tx, a.ty)
    },
    _updateSize: function() {
        var a = this.tileMap.setMapSize(this._mapWidth, this._mapHeight, !0),
            b, c = a[0].length;
        if (0 < c) {
            var d;
            for (b = -1; ++b < c;) d = a[0][b], d.destroy ? d.destroy() : d.removeFromParent()
        }
        c = a[1].length;
        if (0 < c)
            for (b = -1; ++b < c;) this._createTile(a[1][b][0], a[1][b][1]);
        this.setContentSize(this.tileMap.getMapSizePixel())
    },
    _createTile: function(a, b) {
        var c = flax.assetsManager.createDisplay(this.assetsFile, this.assetID, {
            parent: this
        }, !0);
        c.setAnchorPoint(0.5, 0.5);
        this.tileMap.snapToTile(c, a, b, !0);
        return c
    }
});
EIGHT_DIRECT_VALUE = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [1, 1],
    [1, -1],
    [-1, -1]
];
var LinkFinder = {};
window.LinkFinder = LinkFinder;
LinkFinder.map = null;
LinkFinder.blocks = null;
LinkFinder.findLink = function(a, b, c, d) {
    var e = null,
        e = a == c || b == d ? LinkFinder._checkDirectLink(a, b, c, d) : LinkFinder._checkOneLink(a, b, c, d);
    null == e && (e = LinkFinder._checkTwoLink(a, b, c, d));
    return e
};
LinkFinder.shuffle = function(a) {
    var b = this.map.getAllObjects(),
        c = b.concat(),
        d = -1;
    if (this.blocks && this.blocks.length)
        for (c = []; ++d < b.length;) {
            var e = b[d]; - 1 == this.blocks.indexOf(e) && c.push(e)
        }
    flax.shuffleArray(c);
    d = -1;
    for (b = c.length / 2; ++d < b;) {
        var e = c[d],
            f = c[d + b],
            g = e.getPosition();
        !1 !== a ? (e.runAction(cc.MoveTo.create(0.2, f.getPosition())), f.runAction(cc.MoveTo.create(0.2, g))) : (e.setPosition(f.getPosition()), f.setPosition(g))
    }
};
LinkFinder.findAvailableLink = function(a) {
    var b = this.map.getAllObjects(),
        c = b.length;
    if (0 == c) return null;
    for (var d, e, f = null, g = [], k = null, m = 0; m < c - 1; m++)
        if (d = b[m], !(this.blocks && -1 < this.blocks.indexOf(d))) {
            var n = 0 == g.length;
            null == k && (k = d);
            for (var p = m + 1; p < c; p++)
                if (e = b[p], !(this.blocks && -1 < this.blocks.indexOf(e)))
                    if (e.assetID == d.assetID) {
                        if (LinkFinder.findLink(d.tx, d.ty, e.tx, e.ty)) return [d, e];
                        n && g.push(e)
                    } else n && null == f && LinkFinder.findLink(d.tx, d.ty, e.tx, e.ty) && (f = e)
        }
    if (0 == g.length) return null;
    b = g[Math.floor(g.length *
        Math.random())];
    c = cc.p(b.getPosition());
    if (null == f) {
        f = this._findEmptyNeighbor(k.tx, k.ty);
        if (null == f) throw "Dead map!!!!";
        c = this.map.getTiledPosition(f.x, f.y);
        b.parent && (c = b.parent.convertToNodeSpace(c));
        !0 === a ? b.runAction(cc.MoveTo.create(0.2, c)) : b.setPosition(c)
    } else !0 === a ? (b.runAction(cc.MoveTo.create(0.2, f.getPosition())), f.runAction(cc.MoveTo.create(0.2, c))) : (b.setPosition(f.getPosition()), f.setPosition(c));
    return [k, b]
};
LinkFinder._findEmptyNeighbor = function(a, b) {
    for (var c = null, d = 0; 4 > d && (c = EIGHT_DIRECT_VALUE[d], c = cc.p(a + c[0], b + c[1]), !this.map.isEmptyTile(c.x, c.y)); d++);
    return c
};
LinkFinder._checkDirectLink = function(a, b, c, d) {
    if (a == c && b == d) return null;
    if (a == c) {
        for (var e = !0, f = 0 < d - b ? 1 : -1, g = b + f; g != d;) {
            if (!this.map.isEmptyTile(a, g)) {
                e = !1;
                break
            }
            g += f
        }
        if (e) return [new cc.p(a, b), new cc.p(c, d)]
    }
    if (b == d) {
        e = !0;
        f = 0 < c - a ? 1 : -1;
        for (g = a + f; g != c;) {
            if (!this.map.isEmptyTile(g, b)) {
                e = !1;
                break
            }
            g += f
        }
        if (e) return [new cc.p(a, b), new cc.p(c, d)]
    }
    return null
};
LinkFinder._checkOneLink = function(a, b, c, d) {
    if (a == c || b == d) return null;
    if (this.map.isEmptyTile(a, d)) {
        var e = LinkFinder._checkDirectLink(a, b, a, d);
        if (e && (e = LinkFinder._checkDirectLink(a, d, c, d))) return [new cc.p(a, b), new cc.p(a, d), new cc.p(c, d)]
    }
    return this.map.isEmptyTile(c, b) && (e = LinkFinder._checkDirectLink(a, b, c, b)) && (e = LinkFinder._checkDirectLink(c, b, c, d)) ? [new cc.p(a, b), new cc.p(c, b), new cc.p(c, d)] : null
};
LinkFinder._checkTwoLink = function(a, b, c, d) {
    if (a == c && b == d) return null;
    var e = 0 <= c - a ? 1 : -1,
        f = 0 <= d - b ? 1 : -1,
        g = LinkFinder._twoLinkSearch(a, b, c, d, e, f);
    null == g && (g = LinkFinder._twoLinkSearch(a, b, c, d, -e, -f));
    null != g && g.unshift(new cc.p(a, b));
    return g
};
LinkFinder._twoLinkSearch = function(a, b, c, d, e, f) {
    for (var g = null, k = a + e, m = b + f, n = !1, p = !1; !n || !p;) {
        if (!n && (n = !this.map.isEmptyTile(k, b), !n)) {
            g = LinkFinder._checkOneLink(k, b, c, d);
            if (null != g) break;
            k += e
        }
        if (!p && (p = !this.map.isEmptyTile(a, m), !p)) {
            g = LinkFinder._checkOneLink(a, m, c, d);
            if (null != g) break;
            m += f
        }
    }
    return g
};
var HEX_NUM = "0123456789ABCDEF",
    COLOR_WHITE = cc.color(255, 255, 255),
    COLOR_BLACK = cc.color(0, 0, 0),
    COLOR_RED = cc.color(255, 0, 0),
    COLOR_GREEN = cc.color(0, 255, 0),
    COLOR_BLUE = cc.color(0, 0, 255),
    COLOR_GRAY = cc.color(128, 128, 128);

function hexToRgb(a) {
    var b = "#" == a.charAt(0) ? a.substring(1, 7) : a;
    a = parseInt(b.substring(0, 2), 16);
    var c = parseInt(b.substring(2, 4), 16),
        b = parseInt(b.substring(4, 6), 16);
    return [a, c, b]
}

function randomColor() {
    var a = hsvToRgb(Math.random(), 0.9725, 1);
    return rgbToHex(a[0], a[1], a[2]).toUpperCase()
}

function rgbToHex(a, b, c) {
    return _toHex(a) + _toHex(b) + _toHex(c)
}

function rgbToHsl(a, b, c) {
    a /= 255;
    b /= 255;
    c /= 255;
    var d = Math.max(a, b, c),
        e = Math.min(a, b, c),
        f, g = (d + e) / 2;
    if (d == e) f = e = 0;
    else {
        var k = d - e,
            e = 0.5 < g ? k / (2 - d - e) : k / (d + e);
        switch (d) {
            case a:
                f = (b - c) / k + (b < c ? 6 : 0);
                break;
            case b:
                f = (c - a) / k + 2;
                break;
            case c:
                f = (a - b) / k + 4
        }
        f /= 6
    }
    return [f, e, g]
}

function hslToRgb(a, b, c) {
    if (0 == b) c = b = a = c;
    else {
        var d = function(a, b, c) {
                0 > c && (c += 1);
                1 < c && (c -= 1);
                return c < 1 / 6 ? a + 6 * (b - a) * c : 0.5 > c ? b : c < 2 / 3 ? a + (b - a) * (2 / 3 - c) * 6 : a
            },
            e = 0.5 > c ? c * (1 + b) : c + b - c * b,
            f = 2 * c - e;
        c = d(f, e, a + 1 / 3);
        b = d(f, e, a);
        a = d(f, e, a - 1 / 3)
    }
    return [255 * c, 255 * b, 255 * a]
}

function rgbToHsv(a, b, c) {
    a /= 255;
    b /= 255;
    c /= 255;
    var d = Math.max(a, b, c),
        e = Math.min(a, b, c),
        f, g = d - e;
    if (d == e) f = 0;
    else {
        switch (d) {
            case a:
                f = (b - c) / g + (b < c ? 6 : 0);
                break;
            case b:
                f = (c - a) / g + 2;
                break;
            case c:
                f = (a - b) / g + 4
        }
        f /= 6
    }
    return [f, 0 == d ? 0 : g / d, d]
}

function hsvToRgb(a, b, c) {
    var d, e, f, g = Math.floor(6 * a),
        k = 6 * a - g;
    a = c * (1 - b);
    var m = c * (1 - k * b);
    b = c * (1 - (1 - k) * b);
    switch (g % 6) {
        case 0:
            d = c;
            e = b;
            f = a;
            break;
        case 1:
            d = m;
            e = c;
            f = a;
            break;
        case 2:
            d = a;
            e = c;
            f = b;
            break;
        case 3:
            d = a;
            e = m;
            f = c;
            break;
        case 4:
            d = b;
            e = a;
            f = c;
            break;
        case 5:
            d = c, e = a, f = m
    }
    return [255 * d, 255 * e, 255 * f]
}

function darkenHexColor(a, b) {
    var c = hexToRgb(a),
        c = rgbToHsl(c[0], c[1], c[2]);
    c[2] -= b;
    c = hslToRgb(c[0], c[1], c[2]);
    return rgbToHex(c[0], c[1], c[2])
}

function _toHex(a) {
    a = parseInt(a, 10);
    if (isNaN(a)) return "00";
    a = Math.max(0, Math.min(a, 255));
    return HEX_NUM.charAt((a - a % 16) / 16) + HEX_NUM.charAt(a % 16)
};
var GameConfig = {
    levelCoin: [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    promp: [{
            level: 0,
            size: 5,
            data: [
                [1, 2, 3, 4, 5],
                [16, 11, 6, 7, 8, 9, 10, 15, 20, 19],
                [21, 22, 17, 12, 13, 14],
                [18, 23, 24, 25]
            ]
        }, {
            level: 1,
            size: 5,
            data: [
                [7, 8, 13, 18, 23, 22],
                [5, 10, 15, 20, 25, 24],
                [21, 16, 17,
                    12
                ],
                [11, 6, 1, 2, 3, 4, 9, 14, 19]
            ]
        }, {
            level: 2,
            size: 5,
            data: [
                [2, 1, 6, 7, 12, 11, 16, 21],
                [18, 17, 22, 23, 24, 19, 14],
                [25, 20, 15, 10, 9, 8, 3, 4, 5]
            ]
        }, {
            level: 3,
            size: 5,
            data: [
                [18, 19, 14, 9],
                [7, 12, 17, 22, 23, 24, 25, 20],
                [21, 16, 11, 6, 1, 2],
                [13, 8, 3, 4, 5, 10, 15]
            ]
        }, {
            level: 4,
            size: 5,
            data: [
                [19, 14, 9, 8],
                [21, 22, 23, 18, 13, 12, 7],
                [17, 16, 11, 6, 1, 2, 3, 4, 5, 10, 15, 20, 25, 24]
            ]
        }, {
            level: 5,
            size: 5,
            data: [
                [22, 21, 16, 11, 6, 1, 2, 3, 4, 9, 14, 19],
                [17, 12, 7],
                [8, 13, 18, 23, 24, 25, 20, 15, 10, 5]
            ]
        }, {
            level: 6,
            size: 7,
            data: [
                [45, 44, 43, 36, 29, 22, 15, 8],
                [46, 47, 48, 49],
                [38, 39, 40, 41, 42],
                [37, 30, 23, 24,
                    25
                ],
                [31, 32, 33, 26, 19, 18, 17, 16],
                [34, 35, 28, 21, 14, 7, 6, 5, 4, 3],
                [1, 2, 9, 10, 11, 12, 13, 20, 27]
            ]
        }, {
            level: 7,
            size: 7,
            data: [
                [31, 38, 45, 44, 43, 36, 29, 22, 15, 8, 1, 2, 3, 4, 5, 12],
                [9, 16, 23, 30, 37],
                [10, 17, 24, 25, 26, 27, 34],
                [11, 18, 19, 20, 13, 6],
                [33, 40, 41, 42, 35, 28, 21, 14, 7],
                [32, 39, 46, 47, 48, 49]
            ]
        }, {
            level: 8,
            size: 7,
            data: [
                [43, 36, 29, 22, 15, 8, 1, 2, 3, 10, 17, 18, 25, 32, 31, 38, 45],
                [44, 37, 30, 23, 16, 9],
                [46, 39, 40, 33, 26, 19, 20, 21, 14, 7, 6, 13, 12, 11, 4],
                [47, 48, 41, 34, 27, 28, 35, 42, 49]
            ]
        }, {
            level: 9,
            size: 7,
            data: [
                [43, 44, 45, 38, 31, 24, 25, 26, 19],
                [32, 39, 46, 47, 48, 49],
                [37, 30,
                    23, 16, 17, 18, 11, 12, 13, 20, 27, 34, 33, 40
                ],
                [41, 42, 35, 28, 21, 14, 7, 6, 5, 4, 3, 2, 1],
                [36, 29, 22, 15, 8, 9, 10]
            ]
        }, {
            level: 10,
            size: 7,
            data: [
                [26, 25, 24, 23, 30, 37, 38, 39, 40, 41, 42, 35, 28, 21, 14, 7, 6, 5, 4, 3, 2, 1],
                [22, 29, 36, 43, 44, 45, 46, 47, 48, 49],
                [31, 32, 33, 34, 27, 20, 19, 18, 17, 16, 15, 8],
                [9, 10, 11, 12, 13]
            ]
        }, {
            level: 11,
            size: 7,
            data: [
                [48, 41, 34, 27, 20, 13, 12, 11, 10, 9, 16, 23, 30],
                [49, 42, 35, 28, 21, 14, 7, 6, 5, 4, 3, 2, 1, 8, 15, 22, 29, 36, 43, 44, 45, 46, 47, 40, 33],
                [39, 32, 25, 26],
                [37, 38, 31, 24, 17, 18, 19]
            ]
        }, {
            level: 12,
            size: 7,
            data: [
                [17, 24, 31, 38, 45, 46, 47, 48, 49, 42, 35, 28, 21, 14,
                    7, 6
                ],
                [44, 43, 36, 29, 22, 15, 8, 1],
                [37, 30, 23, 16, 9, 2, 3, 4, 5, 12, 19, 26, 33],
                [10, 11, 18, 25, 32, 39, 40, 41, 34, 27, 20, 13]
            ]
        }, {
            level: 13,
            size: 7,
            data: [
                [43, 44, 45, 46, 47, 48, 49],
                [42, 41, 40, 39, 38, 37, 30, 29, 22, 15, 8, 1],
                [2, 9, 16, 23, 24, 31, 32, 25, 26, 33],
                [35, 34, 27, 20, 21, 14, 7, 6, 5, 4, 3],
                [17, 10, 11, 12, 19]
            ]
        }, {
            level: 14,
            size: 7,
            data: [
                [31, 32, 25, 18, 17, 16, 15, 22, 29, 36, 43, 44, 45, 46, 47, 48, 49, 42, 35, 28, 21, 14, 7, 6],
                [2, 3, 4, 5, 12, 19, 26, 33, 40, 39, 38, 37, 30, 23, 24],
                [41, 34, 27, 20, 13],
                [1, 8, 9, 10, 11]
            ]
        }, {
            level: 15,
            size: 7,
            data: [
                [30, 23, 16, 9, 2, 3, 4, 5, 6, 7, 14, 21, 20, 19, 18, 25,
                    32, 39, 40
                ],
                [1, 8, 15, 22, 29, 36, 43, 44, 45, 46, 47, 48, 49, 42, 35, 28, 27, 26],
                [37, 38, 31, 24, 17, 10, 11, 12, 13],
                [41, 34, 33]
            ]
        }, {
            level: 16,
            size: 7,
            data: [
                [37, 36, 29, 22, 15, 8, 1, 2, 3, 10, 17, 24, 25, 32, 33],
                [4, 11, 18],
                [43, 44, 45, 46, 47, 48, 49, 42, 35, 28, 21, 14, 7, 6, 5, 12, 19, 26],
                [9, 16, 23, 30, 31, 38, 39, 40, 41, 34, 27, 20, 13]
            ]
        }, {
            level: 17,
            size: 7,
            data: [
                [44, 37, 30, 23, 16, 9],
                [49, 48, 47, 46, 45, 38, 31, 24, 17, 18, 19, 20, 27, 34, 33],
                [43, 36, 29, 22, 15, 8, 1, 2, 3, 10, 11, 12, 13, 14, 21, 28, 35, 42, 41, 40, 39, 32, 25, 26],
                [4, 5, 6, 7]
            ]
        }, {
            level: 18,
            size: 7,
            data: [
                [29, 30, 37, 36, 43, 44, 45, 46, 39, 40,
                    47, 48, 49, 42, 41, 34, 35
                ],
                [18, 17, 16, 15, 22, 23, 24, 31, 32, 33, 26, 27, 28],
                [8, 9, 10, 11, 12, 19, 20, 21, 14, 7, 6, 5, 4, 3, 2, 1]
            ]
        }, {
            level: 19,
            size: 7,
            data: [
                [31, 30, 29, 36, 43, 44, 45, 46, 47, 48, 41, 34, 27, 20, 13, 6, 5, 4, 3, 2, 1],
                [40, 33, 26, 19, 18, 17, 16],
                [37, 38, 39, 32, 25, 24, 23, 22, 15, 8, 9, 10, 11, 12],
                [49, 42, 35, 28, 21, 14, 7]
            ]
        }, {
            level: 20,
            size: 7,
            data: [
                [22, 23, 24, 25, 26, 27, 28, 21, 14, 13, 12, 11, 10, 9],
                [33, 32, 31, 30, 29, 36, 43, 44, 45, 46, 47, 48, 49, 42],
                [37, 38, 39, 40, 41, 34, 35],
                [20, 19, 18, 17, 16, 15, 8, 1, 2, 3, 4, 5, 6, 7]
            ]
        }, {
            level: 21,
            size: 7,
            data: [
                [19, 26, 33, 40, 47, 48, 49, 42, 35, 28,
                    21, 14, 7, 6, 5, 4, 3, 2, 1, 8, 15
                ],
                [37, 38, 31, 24, 17],
                [30, 29, 36, 43, 44, 45, 46, 39, 32, 25, 18, 11, 12, 13, 20, 27, 34, 41],
                [22, 23, 16, 9, 10]
            ]
        }, {
            level: 22,
            size: 7,
            data: [
                [48, 47, 46, 45, 44, 37, 30, 23, 16, 9, 2, 3, 4, 5, 6, 7, 14, 21, 28, 27, 26],
                [49, 42, 41, 40, 39, 38, 31, 24, 17, 10, 11, 12, 13, 20],
                [43, 36, 29, 22, 15, 8, 1],
                [35, 34, 33, 32, 25, 18, 19]
            ]
        }, {
            level: 23,
            size: 7,
            data: [
                [26, 19, 18, 17, 16, 9, 2, 3, 4, 5, 6, 7, 14, 21, 28, 35, 42, 41, 40, 39, 38, 37, 36],
                [31, 30, 29, 22, 15, 8, 1],
                [43, 44, 45, 46, 47, 48, 49],
                [23, 24, 25, 32, 33, 34, 27, 20, 13, 12, 11, 10]
            ]
        }, {
            level: 24,
            size: 7,
            data: [
                [44, 43, 36, 29, 22, 15,
                    8, 1, 2, 3, 4, 5, 12, 19, 26, 33, 40
                ],
                [17, 24, 31, 38, 45, 46, 47, 48, 49, 42, 35, 28, 21, 14, 7, 6],
                [37, 30, 23, 16, 9, 10, 11, 18, 25, 32, 39],
                [41, 34, 27, 20, 13]
            ]
        }, {
            level: 25,
            size: 7,
            data: [
                [1, 8, 15, 22, 29, 36, 43, 44, 45, 46, 47, 48, 49],
                [38, 37, 30, 23, 16, 9, 2, 3, 4, 5, 6, 7, 14, 21, 28, 35, 42],
                [19, 18, 25, 32, 39, 40, 41, 34],
                [31, 24, 17, 10, 11, 12, 13, 20, 27, 26, 33]
            ]
        }, {
            level: 26,
            size: 7,
            data: [
                [43, 36, 29, 22, 15, 16, 9, 8, 1, 2, 3, 4, 11, 18, 17, 24, 23],
                [30, 37, 44, 45, 38, 39, 32, 25, 26, 33, 40, 47, 46],
                [34, 41, 48, 49, 42, 35, 28, 21, 20, 13, 14, 7, 6, 5, 12]
            ]
        }, {
            level: 27,
            size: 7,
            data: [
                [22, 29, 36, 43, 44, 45, 46,
                    47, 48, 49, 42
                ],
                [31, 32, 33, 34, 35, 28, 21, 14, 13, 12, 11, 10, 9],
                [41, 40, 39, 38, 37, 30, 23, 24, 25, 26, 27],
                [20, 19, 18, 17, 16, 15, 8, 1, 2, 3, 4, 5, 6, 7]
            ]
        }, {
            level: 28,
            size: 7,
            data: [
                [9, 16, 23, 30, 31, 32, 25, 18, 11, 4],
                [33, 26, 19, 12, 5, 6, 7, 14, 21, 28, 35, 42, 49],
                [13, 20, 27, 34, 41, 40, 39, 38, 37, 36, 29, 22, 15, 8, 1, 2, 3, 10, 17, 24],
                [43, 44, 45, 46, 47, 48]
            ]
        }, {
            level: 29,
            size: 7,
            data: [
                [2, 3, 4, 5, 6, 7, 14, 21, 20, 19, 18, 17, 24, 31, 32, 33],
                [28, 35, 42, 49, 48, 47, 46, 45, 44, 43],
                [1, 8, 15, 22, 29, 36, 37, 38, 39, 40, 41, 34, 27, 26, 25],
                [30, 23, 16, 9, 10, 11, 12, 13]
            ]
        }, {
            level: 30,
            size: 7,
            data: [
                [26, 25, 18,
                    17, 16, 15, 22, 29, 36, 43, 44, 45, 46, 47, 48, 49
                ],
                [23, 30, 37, 38, 39, 40, 41, 42, 35, 28, 21, 14, 13, 12, 11, 10, 9, 8, 1],
                [2, 3, 4, 5, 6, 7],
                [24, 31, 32, 33, 34, 27, 20, 19]
            ]
        }, {
            level: 31,
            size: 7,
            data: [
                [1, 8, 15, 22, 29, 36, 43, 44, 45, 46, 47, 48, 49, 42, 35, 28, 21, 14, 7],
                [2, 9, 16, 23, 30, 37, 38, 39, 40, 41, 34, 27, 20, 13, 6],
                [3, 4, 5, 12, 19, 26, 33, 32, 31, 24, 17],
                [10, 11, 18, 25]
            ]
        }, {
            level: 32,
            size: 7,
            data: [
                [48, 49, 42, 35, 28, 21, 14, 13, 12, 11],
                [16, 23, 30, 37, 38, 39, 40, 41, 34, 27, 20, 19, 18, 25],
                [7, 6, 5, 4, 3, 2, 1, 8, 15, 22, 29, 36, 43, 44, 45, 46, 47],
                [9, 10, 17, 24, 31, 32, 33, 26]
            ]
        }, {
            level: 33,
            size: 7,
            data: [
                [31,
                    38, 45, 46, 47, 48, 49, 42, 35, 28, 21, 14, 7, 6, 5, 4, 3, 2, 1
                ],
                [44, 43, 36, 29, 22, 15, 16, 17, 18, 25, 32, 39, 40, 41, 34, 27, 20, 13],
                [24, 23, 30, 37],
                [8, 9, 10, 11, 12, 19, 26, 33]
            ]
        }, {
            level: 34,
            size: 7,
            data: [
                [44, 45, 46, 47, 48, 49, 42, 35, 28, 21, 14, 7, 6, 5, 4, 3, 2, 1],
                [33, 26, 19, 12, 11, 10, 9, 8, 15, 22, 29, 36, 43],
                [37, 38, 31, 24],
                [30, 23, 16, 17, 18, 25, 32, 39, 40, 41, 34, 27, 20, 13]
            ]
        }, {
            level: 35,
            size: 7,
            data: [
                [29, 30, 31, 32, 33, 26, 19, 12],
                [44, 45, 46, 47, 48, 49, 42, 35, 28, 21, 14, 7, 6, 5, 4, 3, 2, 1, 8, 15, 16, 17],
                [22, 23, 24, 25, 18, 11, 10, 9],
                [43, 36, 37, 38, 39, 40, 41, 34, 27, 20, 13]
            ]
        }, {
            level: 36,
            size: 7,
            data: [
                [44, 45, 46, 47, 48, 49, 42, 35, 28, 21, 14, 7, 6, 5, 4, 3, 2, 9, 16, 23],
                [43, 36, 37, 38, 39, 40, 41, 34, 27, 20, 13, 12, 11, 10],
                [1, 8, 15, 22, 29, 30, 31, 24, 17, 18, 19, 26],
                [25, 32, 33]
            ]
        }, {
            level: 37,
            size: 7,
            data: [
                [9, 16, 23, 30, 37, 44, 45, 46, 47, 48, 49, 42, 35, 28, 21, 14, 13, 12, 19, 26, 33],
                [43, 36, 29, 22, 15, 8, 1, 2, 3, 10, 17, 24, 31, 38],
                [7, 6, 5, 4, 11, 18, 25, 32, 39, 40, 41, 34, 27, 20]
            ]
        }, {
            level: 38,
            size: 7,
            data: [
                [9, 16, 23, 30, 31, 32, 25, 18, 11, 4],
                [49, 42, 35, 28, 21, 14, 7, 6, 5, 12, 19, 26, 33],
                [24, 17, 10, 3, 2, 1, 8, 15, 22, 29, 36, 37, 38, 39, 40, 41, 34, 27, 20, 13],
                [43, 44, 45, 46, 47, 48]
            ]
        }, {
            level: 39,
            size: 7,
            data: [
                [2, 3, 4, 5, 6, 7, 14, 21, 20, 19, 18, 17, 24, 31, 32, 33],
                [28, 35, 42, 49, 48, 47, 46, 45, 44, 43],
                [25, 26, 27, 34, 41, 40, 39, 38, 37, 36, 29, 22, 15, 8, 1],
                [30, 23, 16, 9, 10, 11, 12, 13]
            ]
        }, {
            level: 40,
            size: 7,
            data: [
                [49, 48, 47, 46, 45, 44, 43, 36, 29, 22, 15, 16, 17, 18, 25, 26],
                [1, 8, 9, 10, 11, 12, 13, 14, 21, 28, 35, 42, 41, 40, 39, 38, 37, 30, 23],
                [2, 3, 4, 5, 6, 7],
                [24, 31, 32, 33, 34, 27, 20, 19]
            ]
        }, {
            level: 41,
            size: 7,
            data: [
                [43, 36, 29, 22, 23, 16, 15, 8, 1, 2, 9],
                [3, 4, 11, 10, 17],
                [39, 40, 33, 34, 27, 28, 21],
                [49, 48, 47, 46, 45, 44, 37, 38, 31, 32, 25, 26, 19, 20, 13, 14, 7, 6, 5],
                [41, 42, 35]
            ]
        }, {
            level: 42,
            size: 7,
            data: [
                [1, 8, 15, 22, 29, 36, 43, 44, 45, 46, 47, 48, 49, 42, 35, 28, 21, 14, 7],
                [2, 9, 16, 23, 30, 37, 38, 39, 40, 41, 34, 27, 20, 13, 6],
                [3, 4, 5, 12, 19, 26, 33, 32, 31, 24, 17],
                [10, 11, 18, 25]
            ]
        }, {
            level: 43,
            size: 7,
            data: [
                [48, 49, 42, 35, 28, 21, 14, 13, 12, 11],
                [16, 23, 30, 37, 38, 39, 40, 41, 34, 27, 20, 19, 18, 25],
                [7, 6, 5, 4, 3, 2, 1, 8, 15, 22, 29, 36, 43, 44, 45, 46, 47],
                [26, 33, 32, 31, 24, 17, 10, 9]
            ]
        }, {
            level: 44,
            size: 7,
            data: [
                [31, 38, 45, 46, 47, 48, 49, 42, 35, 28, 21, 14, 7, 6, 5, 4, 3, 2, 1],
                [13, 20, 27, 34, 41, 40, 39, 32, 25, 18, 17, 16, 15, 22, 29, 36, 43, 44],
                [37, 30, 23, 24],
                [8, 9, 10, 11, 12, 19, 26, 33]
            ]
        },
        {
            level: 45,
            size: 7,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 14, 21, 28, 35, 42, 49, 48, 47, 46, 45, 44],
                [43, 36, 29, 22, 15, 8, 9, 10, 11, 12, 19, 26, 33],
                [37, 38, 31, 24],
                [30, 23, 16, 17, 18, 25, 32, 39, 40, 41, 34, 27, 20, 13]
            ]
        }, {
            level: 46,
            size: 7,
            data: [
                [29, 30, 31, 32, 33, 26, 19, 12],
                [17, 16, 15, 8, 1, 2, 3, 4, 5, 6, 7, 14, 21, 28, 35, 42, 49, 48, 47, 46, 45, 44],
                [22, 23, 24, 25, 18, 11, 10, 9],
                [43, 36, 37, 38, 39, 40, 41, 34, 27, 20, 13]
            ]
        }, {
            level: 47,
            size: 7,
            data: [
                [44, 45, 46, 47, 48, 49, 42, 35, 28, 21, 14, 7, 6, 5, 4, 3, 2, 9, 16, 23],
                [43, 36, 37, 38, 39, 40, 41, 34, 27, 20, 13, 12, 11, 10],
                [1, 8, 15, 22, 29, 30, 31, 24, 17, 18, 19, 26],
                [25,
                    32, 33
                ]
            ]
        }, {
            level: 48,
            size: 7,
            data: [
                [9, 16, 23, 30, 37, 44, 45, 46, 47, 48, 49, 42, 35, 28, 21, 14, 13, 12, 19, 26, 33],
                [43, 36, 29, 22, 15, 8, 1, 2, 3, 10, 17, 24, 31, 38],
                [7, 6, 5, 4, 11, 18, 25, 32, 39, 40, 41, 34, 27, 20]
            ]
        }, {
            level: 49,
            size: 7,
            data: [
                [37, 30, 23, 16, 9, 10, 11, 12, 13, 14, 21, 28, 35, 42, 49, 48, 47, 40, 33, 26],
                [17, 24, 31, 38, 45, 44, 43, 36, 29, 22, 15, 8, 1, 2, 3, 4, 5, 6, 7],
                [46, 39, 32, 25, 18, 19, 20, 27, 34, 41]
            ]
        }, {
            level: 50,
            size: 7,
            data: [
                [37, 30, 23, 24, 25, 32, 39, 46, 47, 48, 49, 42, 35, 28, 21, 14, 7, 6, 5, 4, 3, 2],
                [34, 27, 20, 13, 12, 11, 10, 9, 8, 1],
                [31, 38, 45, 44, 43, 36, 29, 22, 15, 16, 17, 18, 19,
                    26, 33, 40, 41
                ]
            ]
        }, {
            level: 51,
            size: 7,
            data: [
                [40, 41, 34, 27, 20],
                [7, 6, 5, 4, 3, 2, 1, 8, 15, 22, 29, 36, 43, 44, 45, 38, 31, 24, 17, 18, 19, 26, 33],
                [37, 30, 23, 16, 9, 10, 11, 12, 13, 14, 21, 28, 35, 42, 49, 48, 47, 46, 39, 32, 25]
            ]
        }, {
            level: 52,
            size: 7,
            data: [
                [43, 44, 37, 30, 23, 16, 9, 10, 11, 12, 13, 20, 27, 34, 41, 40, 39, 32, 25],
                [36, 29, 22, 15, 8, 1, 2, 3, 4, 5, 6, 7, 14, 21, 28, 35, 42, 49, 48, 47, 46, 45, 38, 31, 24, 17, 18, 19, 26, 33]
            ]
        }, {
            level: 53,
            size: 7,
            data: [
                [36, 29, 22, 15, 8, 1, 2, 3, 4, 5, 6, 7, 14, 21, 28, 35, 42, 41, 40, 39, 32, 25, 26],
                [49, 48, 47, 46, 45, 38, 31, 24, 17, 18, 19],
                [33, 34, 27, 20, 13, 12, 11, 10, 9, 16,
                    23, 30, 37, 44, 43
                ]
            ]
        }, {
            level: 54,
            size: 7,
            data: [
                [43, 44, 37, 30, 23, 16, 17, 18, 25, 32, 39, 40, 41, 34, 27, 20, 13, 6, 5, 4, 3, 2, 1],
                [33, 26, 19, 12, 11, 10, 9, 8, 15, 22, 29, 36],
                [7, 14, 21, 28, 35, 42, 49, 48, 47, 46, 45, 38, 31, 24]
            ]
        }, {
            level: 55,
            size: 7,
            data: [
                [8, 15, 22, 29, 36, 43, 44, 45, 38, 31, 24, 17, 10, 3, 4, 5, 6, 7, 14, 21, 28, 35, 42, 41, 40, 33, 26, 19],
                [37, 30, 23, 16, 9, 2, 1],
                [49, 48, 47, 46, 39, 32, 25, 18, 11, 12, 13, 20, 27, 34]
            ]
        }, {
            level: 56,
            size: 7,
            data: [
                [31, 24, 17, 10, 3, 2, 1, 8, 15, 22, 29, 36, 43, 44, 45, 46, 47, 48, 49],
                [9, 16, 23, 30, 37, 38, 39, 32, 25, 18, 11, 4, 5, 6, 13, 20, 27, 34],
                [12, 19, 26, 33, 40,
                    41, 42, 35, 28, 21, 14, 7
                ]
            ]
        }, {
            level: 57,
            size: 7,
            data: [
                [36, 37, 38, 39, 40, 41, 34, 27, 26, 25, 24, 23, 16, 9, 10, 11, 12, 13],
                [43, 44, 45, 46, 47, 48, 49, 42, 35, 28],
                [33, 32, 31, 30, 29, 22, 15, 8, 1, 2, 3, 4, 5, 6, 7, 14, 21, 20, 19, 18, 17]
            ]
        }, {
            level: 58,
            size: 7,
            data: [
                [49, 42, 35, 28, 21, 14, 13, 12, 11, 10, 9],
                [37, 38, 39, 40, 33, 26, 25, 24, 23, 22],
                [7, 6, 5, 4, 3, 2, 1, 8, 15, 16, 17, 18, 19, 20, 27, 34, 41, 48, 47, 46, 45, 44, 43, 36, 29, 30, 31, 32]
            ]
        }, {
            level: 59,
            size: 7,
            data: [
                [36, 29, 22, 15, 8, 1, 2, 3, 4, 5, 6, 7, 14, 21, 28, 35, 42, 41, 40, 39, 32, 25, 26],
                [43, 44, 37, 30, 23, 16, 9, 10, 11, 12, 13],
                [49, 48, 47, 46, 45, 38, 31,
                    24, 17, 18, 19, 20, 27, 34, 33
                ]
            ]
        }, {
            level: 60,
            size: 7,
            data: [
                [25, 26, 33, 40, 39, 38, 37, 30, 23, 16, 9, 10, 11, 12, 13, 14, 21, 28, 35, 42, 49],
                [7, 6, 5, 4, 3, 2, 1, 8, 15, 22],
                [29, 36, 43, 44, 45, 46, 47, 48, 41, 34, 27, 20, 19, 18, 17, 24, 31, 32]
            ]
        }, {
            level: 61,
            size: 7,
            data: [
                [7, 14, 21, 28, 35, 42, 41, 40, 39, 38, 37],
                [49, 48, 47, 46, 45, 44, 43, 36, 29, 30, 31, 32, 33, 34, 27, 20, 13, 6, 5, 4, 3, 2, 1, 8, 15, 16, 17, 18],
                [22, 23, 24, 25, 26, 19, 12, 11, 10, 9]
            ]
        }, {
            level: 62,
            size: 7,
            data: [
                [49, 42, 35, 28, 21, 14, 7, 6, 5, 4, 3, 10, 17, 24, 31, 32],
                [8, 15, 22, 29, 36, 43, 44, 45, 46, 47, 48, 41, 34, 27, 20, 13, 12, 11, 18, 25],
                [1, 2, 9,
                    16, 23, 30, 37, 38, 39, 40, 33, 26, 19
                ]
            ]
        }, {
            level: 63,
            size: 7,
            data: [
                [31, 32, 33, 34, 35, 42, 49, 48, 47, 46, 45, 44, 43, 36, 29, 22, 15, 8, 9, 10, 11, 12, 13],
                [41, 40, 39, 38, 37, 30, 23, 24, 25, 26, 27, 28],
                [16, 17, 18, 19, 20, 21, 14, 7, 6, 5, 4, 3, 2, 1]
            ]
        }, {
            level: 64,
            size: 8,
            data: [
                [59, 60, 61, 62, 63, 64, 56, 55],
                [1, 2, 3, 4, 5, 6, 14],
                [8, 7, 15, 23, 22, 21, 20, 28],
                [46, 54, 53, 45, 37, 38, 39, 47, 48, 40, 32, 24, 16],
                [58, 57, 49, 41, 33, 25, 17, 9],
                [43, 35, 27, 19, 11, 12, 13],
                [29, 30, 31],
                [10, 18, 26, 34, 42, 50, 51, 52, 44, 36]
            ]
        }, {
            level: 65,
            size: 8,
            data: [
                [58, 50, 42, 43, 44, 45, 37],
                [25, 17, 18, 19, 20, 28, 36, 35, 34, 26,
                    27
                ],
                [57, 49, 41, 33],
                [10, 9, 1, 2, 3, 11, 12],
                [59, 51, 52, 53, 54, 46, 38, 30, 22, 14, 6, 7],
                [29, 21, 13, 5, 4],
                [64, 56, 48, 40, 32, 24, 16, 8],
                [60, 61, 62, 63, 55, 47, 39, 31, 23, 15]
            ]
        }, {
            level: 66,
            size: 8,
            data: [
                [61, 53, 45, 37, 38, 30, 22, 23, 15],
                [1, 9, 10, 18, 26, 34, 42, 50, 58, 59, 60, 52, 44, 36, 28, 20, 12, 4, 5],
                [51, 43, 35, 27, 19, 11, 3, 2],
                [55, 56, 48, 40, 32, 24, 16, 8, 7],
                [64, 63, 62, 54, 46, 47, 39, 31],
                [29, 21, 13, 14, 6],
                [57, 49, 41, 33, 25, 17]
            ]
        }, {
            level: 67,
            size: 8,
            data: [
                [50, 51, 52, 53],
                [43, 42, 41, 49, 57, 58, 59, 60, 61],
                [44, 36, 35, 34, 33, 25, 26],
                [9, 17, 18, 10, 11, 12, 20, 28, 27, 19],
                [13, 21, 29, 37,
                    45, 46, 54, 55
                ],
                [1, 2, 3, 4, 5, 6, 7, 8],
                [47, 39, 38, 30, 31, 23, 22, 14, 15, 16],
                [62, 63, 64, 56, 48, 40, 32, 24]
            ]
        }, {
            level: 68,
            size: 8,
            data: [
                [4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56, 64, 63, 62, 61, 60],
                [20, 12, 13, 14, 22, 30, 38, 46, 45],
                [49, 41, 33, 25, 17, 9, 1, 2, 3, 11, 19],
                [10, 18, 26, 27, 28, 29, 21],
                [57, 58, 50, 42, 34, 35],
                [59, 51, 43],
                [54, 53, 52, 44, 36, 37],
                [55, 47, 39, 31, 23, 15]
            ]
        }, {
            level: 69,
            size: 8,
            data: [
                [50, 51, 52, 53, 45, 37, 29, 21, 22, 23],
                [4, 12, 13, 14, 15],
                [55, 54, 46, 38, 30, 31, 32, 24, 16, 8, 7, 6, 5],
                [47, 39, 40],
                [41, 49, 57, 58, 59, 60, 61, 62, 63, 64, 56, 48],
                [35, 27, 19, 11, 3],
                [33, 25, 17, 9, 1],
                [2, 10, 18, 26, 34, 42, 43, 44, 36, 28, 20]
            ]
        }, {
            level: 70,
            size: 8,
            data: [
                [36, 28, 20, 12, 13, 14, 22],
                [15, 23, 31, 30, 29, 21],
                [46, 47, 48, 56, 64, 63, 62, 61, 60, 59, 51, 50, 42, 34, 26, 18, 10],
                [58, 57, 49, 41, 33, 25, 17, 9, 1, 2],
                [55, 54, 53, 45, 37, 38, 39, 40, 32, 24, 16],
                [52, 44, 43, 35, 27, 19, 11, 3, 4, 5, 6, 7, 8]
            ]
        }, {
            level: 71,
            size: 8,
            data: [
                [57, 58, 59, 60, 61, 62, 63, 64, 56, 48, 47, 55, 54, 46, 45, 53, 52, 51, 50, 49, 41, 42, 43, 44, 36, 35, 27, 26, 25, 33],
                [37, 38, 39, 40, 32, 24, 16],
                [28, 20, 21, 29, 30, 31, 23, 15, 14, 13, 12],
                [17, 9, 1, 2, 10, 18, 19, 11, 3, 4, 5, 6, 7, 8]
            ]
        }, {
            level: 72,
            size: 8,
            data: [
                [53, 45, 46, 38,
                    30, 22, 21, 20, 19, 18, 17, 9, 1
                ],
                [63, 64, 56, 48, 40, 32, 24, 16, 8, 7, 6, 5, 4, 3, 2, 10],
                [11, 12, 13, 14, 15, 23, 31, 39, 47, 55, 54],
                [62, 61, 60, 59, 58, 57, 49, 41, 33, 25, 26, 27, 28, 29],
                [43, 35, 36, 37],
                [34, 42, 50, 51, 52, 44]
            ]
        }, {
            level: 73,
            size: 8,
            data: [
                [39, 31, 23],
                [38, 46, 47, 48, 40, 32, 24, 16, 15],
                [13, 5, 4, 3, 2, 1, 9, 17, 25, 33, 41, 49, 57, 58, 59, 60, 61, 62, 63, 64],
                [12, 20, 21, 22, 14, 6, 7, 8],
                [10, 11, 19, 27, 28, 29, 30],
                [36, 37, 45],
                [18, 26, 34, 35, 43, 44, 52, 53, 54, 55, 56],
                [42, 50, 51]
            ]
        }, {
            level: 74,
            size: 8,
            data: [
                [42, 34, 26, 25, 17, 9, 1, 2, 3, 11],
                [28, 20, 12, 4, 5, 6, 7, 8, 16, 24, 32],
                [33, 41, 49, 50,
                    51, 43, 44, 45, 53, 54, 55, 47
                ],
                [46, 38, 30, 22, 14],
                [57, 58, 59, 60, 52],
                [61, 62, 63, 64, 56, 48, 40, 39, 31, 23, 15],
                [10, 18, 19, 27, 35, 36, 37, 29, 21, 13]
            ]
        }, {
            level: 75,
            size: 8,
            data: [
                [1, 9, 17, 25, 33, 34, 35, 36, 37, 38, 39, 40, 48, 56, 55, 54, 53, 52, 51, 50],
                [23, 22, 21, 20, 19, 18, 10, 2, 3, 4, 5, 6, 7, 8],
                [26, 27, 28, 29, 30, 31, 32, 24, 16, 15, 14, 13, 12, 11],
                [64, 63, 62, 61, 60, 59, 58, 57, 49, 41, 42, 43, 44, 45, 46, 47]
            ]
        }, {
            level: 76,
            size: 8,
            data: [
                [10, 18, 26, 34, 42, 43, 44, 45, 37, 29, 30, 31, 32, 24, 16, 8],
                [57, 58, 59, 60, 61, 62, 63, 64, 56, 48, 40, 39, 38, 46],
                [36, 28, 20],
                [35, 27, 19, 11, 12, 13, 14],
                [21, 22,
                    23, 15, 7, 6, 5, 4, 3, 2, 1, 9, 17, 25, 33, 41, 49, 50, 51, 52, 53, 54, 55, 47
                ]
            ]
        }, {
            level: 77,
            size: 8,
            data: [
                [1, 9, 17, 25, 33, 41, 49, 57, 58, 59, 60, 61, 62, 63, 55, 47, 39, 31, 23, 22, 21, 13, 12, 20],
                [54, 46, 45, 44, 43, 42, 34, 26, 18, 10, 2],
                [64, 56, 48, 40, 32, 24, 16, 8, 7],
                [28, 29, 30, 38, 37, 36, 35, 27, 19, 11, 3, 4, 5, 6, 14, 15],
                [50, 51, 52, 53]
            ]
        }, {
            level: 78,
            size: 8,
            data: [
                [1, 2, 3, 11, 19, 27, 35, 43],
                [46, 38, 30, 22, 21, 20, 12, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56, 64, 63, 62, 61, 60, 59, 58, 57, 49, 41, 33, 25, 17],
                [13, 14, 15, 23, 31, 39, 47, 55, 54, 53, 45, 37],
                [50, 51, 52, 44, 36, 28, 29],
                [42, 34, 26, 18, 10, 9]
            ]
        }, {
            level: 79,
            size: 8,
            data: [
                [57, 49, 41, 33, 25, 17, 9, 1, 2, 10, 18, 26, 27, 28, 20, 12, 11, 3],
                [4, 5, 6, 7, 15, 14, 13, 21, 29, 30, 22, 23, 31, 39, 47, 55, 63],
                [64, 56, 48, 40, 32, 24, 16, 8],
                [58, 50, 42, 34, 35, 36, 37, 38, 46, 54, 53, 52, 44, 43, 51, 59, 60, 61, 62]
            ]
        }, {
            level: 80,
            size: 8,
            data: [
                [39, 31, 30, 29, 28, 27],
                [15, 14, 13, 12, 11, 10, 9, 17, 25, 33, 41, 49, 57, 58, 59, 60, 61, 62, 63],
                [36, 37, 38],
                [1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 47, 46, 45, 44, 43, 35],
                [64, 56, 55, 54, 53, 52, 51, 50, 42, 34, 26, 18, 19, 20, 21, 22, 23]
            ]
        }, {
            level: 81,
            size: 8,
            data: [
                [5, 6, 14, 22, 30, 38, 46, 54, 53, 52, 51, 50, 42, 34, 26, 18, 10],
                [8, 16, 24,
                    32, 40, 48, 56, 64, 63, 62, 61, 60, 59, 58, 57, 49, 41, 33, 25, 17, 9, 1, 2, 3, 4, 12, 20, 28
                ],
                [11, 19, 27, 35, 43, 44, 45],
                [36, 37, 29, 21, 13],
                [55, 47, 39, 31, 23, 15, 7]
            ]
        }, {
            level: 82,
            size: 8,
            data: [
                [10, 11, 12, 13, 14, 15, 16, 24, 32, 40],
                [42, 41, 49, 50, 51, 43, 35, 36, 44, 52, 60, 59, 58, 57],
                [34, 33, 25, 17, 9, 1, 2, 3, 4, 5, 6, 7, 8],
                [55, 54, 46, 45, 53, 61, 62, 63, 64, 56, 48, 47, 39, 38, 37, 29, 28, 27, 26, 18, 19, 20, 21, 22, 23, 31, 30]
            ]
        }, {
            level: 83,
            size: 8,
            data: [
                [20, 28, 27, 35, 43, 44, 45, 46, 47, 39, 31, 23, 15, 14],
                [22, 30, 38],
                [57, 49, 41, 33, 25, 17, 9, 1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56, 55, 54, 53, 52, 51],
                [64,
                    63, 62, 61, 60, 59, 58, 50, 42, 34, 26, 18, 10
                ],
                [36, 37, 29, 21, 13, 12, 11, 19]
            ]
        }, {
            level: 84,
            size: 8,
            data: [
                [10, 11, 12, 13, 14, 15, 16, 8],
                [25, 26, 27, 28, 29, 30, 31],
                [42, 50, 51, 52, 53, 54, 55, 56],
                [39, 38, 37, 36, 35, 34, 33, 41, 49, 57, 58, 59, 60, 61, 62, 63, 64],
                [43, 44, 45, 46, 47, 48, 40, 32, 24, 23, 22, 21, 20, 19, 18, 17, 9, 1, 2, 3, 4, 5, 6, 7]
            ]
        }, {
            level: 85,
            size: 8,
            data: [
                [15, 14, 13, 12, 11, 19, 27, 35, 43, 44, 45, 46, 47, 48],
                [21, 20, 28, 36, 37, 38, 39, 40],
                [29, 30, 22, 23],
                [1, 9, 17, 25, 33, 41, 49, 57, 58, 59, 60, 61, 62, 63, 64],
                [56, 55, 54, 53, 52, 51, 50, 42, 34, 26, 18, 10, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 31]
            ]
        },
        {
            level: 86,
            size: 8,
            data: [
                [57, 58, 59, 60, 61, 62, 63, 64, 56, 48, 40, 32, 24, 16, 8],
                [49, 41, 33, 25, 26, 34, 42, 43, 35, 36, 37, 45, 53, 52, 51, 50],
                [54, 55, 47, 46, 38, 39, 31, 30, 29, 28, 27, 19, 18, 17, 9, 1, 2, 10, 11, 3, 4, 12, 20],
                [21, 13, 5, 6, 14, 15, 23]
            ]
        }, {
            level: 87,
            size: 8,
            data: [
                [2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 31, 30, 29, 28, 27, 26, 34, 42, 43, 44, 45, 46, 47],
                [57, 58, 59, 60, 61, 62, 63, 64, 56, 48, 40, 39, 38, 37, 36, 35],
                [1, 9, 10, 11, 12, 13, 14, 15],
                [23, 22, 21, 20, 19, 18, 17, 25, 33, 41, 49, 50, 51, 52, 53, 54, 55]
            ]
        }, {
            level: 88,
            size: 8,
            data: [
                [2, 3, 4, 5, 6, 7, 8, 16, 24, 23, 22, 21, 20, 19, 18, 17, 25, 33, 34, 35,
                    36, 37, 38, 39, 47, 55, 54, 53, 52, 51, 50
                ],
                [56, 48, 40, 32, 31, 30, 29, 28, 27, 26],
                [15, 14, 13, 12, 11, 10, 9, 1],
                [64, 63, 62, 61, 60, 59, 58, 57, 49, 41, 42, 43, 44, 45, 46]
            ]
        }, {
            level: 89,
            size: 8,
            data: [
                [1, 9, 17, 25, 33, 41, 49, 57, 58, 59, 51, 43],
                [50, 42, 34, 26, 18, 10, 2, 3, 4, 5, 13, 21, 29],
                [54, 55, 56, 64, 63, 62, 61, 53, 45, 44, 52, 60],
                [28, 20, 12, 11, 19, 27, 35, 36, 37, 38, 30, 22, 14, 6, 7, 8, 16, 15, 23, 24, 32, 31, 39, 40, 48, 47, 46]
            ]
        }, {
            level: 90,
            size: 8,
            data: [
                [50, 51, 52, 53, 54, 55, 47, 39, 31, 23, 15],
                [20, 19, 11, 12, 13, 21, 29, 28, 36, 37, 45, 44, 43, 42, 34, 26, 27, 35],
                [9, 1, 2, 3, 4, 5],
                [10, 18, 17, 25, 33, 41,
                    49, 57, 58, 59, 60, 61, 62, 63, 64, 56, 48, 40, 32, 24, 16, 8, 7, 6, 14, 22, 30, 38, 46
                ]
            ]
        }, {
            level: 91,
            size: 8,
            data: [
                [50, 42, 43, 35, 27, 28, 20, 12, 13, 21, 29, 37, 36, 44, 45, 53, 54, 55],
                [39, 47, 46, 38, 30, 31, 23, 15, 14, 22],
                [34, 26, 18, 19, 11, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56, 64, 63, 62, 61, 60, 52, 51],
                [10, 2, 1, 9, 17, 25, 33, 41, 49, 57, 58, 59]
            ]
        }, {
            level: 92,
            size: 8,
            data: [
                [57, 58, 50, 42, 34, 26, 18, 19, 20, 21, 29],
                [1, 2, 3, 4, 5, 6, 7, 8, 16, 15, 14, 13, 12, 11, 10, 9, 17, 25, 33, 41, 49],
                [55, 54, 53, 52, 44, 45, 46, 47, 48, 40, 39],
                [31, 32, 24, 23, 22, 30, 38, 37, 36, 28, 27, 35, 43, 51, 59, 60, 61, 62, 63, 64, 56]
            ]
        },
        {
            level: 93,
            size: 8,
            data: [
                [59, 58, 50, 42, 34, 26, 18, 10],
                [51, 43, 35, 27, 19, 11, 12, 13, 21, 29, 37, 45, 53, 54, 55, 47, 39, 31, 23],
                [57, 49, 41, 33, 25, 17, 9, 1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56, 64, 63, 62, 61, 60, 52, 44, 36, 28, 20],
                [46, 38, 30, 22, 14, 15]
            ]
        }, {
            level: 94,
            size: 8,
            data: [
                [51, 50, 49, 57, 58, 59, 60, 52, 53, 54, 46, 47, 48, 56, 64, 63, 62, 61],
                [45, 44, 43, 42, 41, 33, 25],
                [34, 35, 36, 37, 38, 39, 40, 32, 24, 16, 8],
                [1, 9, 17, 18, 26, 27, 28, 29, 30, 31, 23, 15, 7],
                [2, 10, 11, 19, 20, 21, 13, 5, 4, 3],
                [22, 14, 6]
            ]
        }, {
            level: 95,
            size: 8,
            data: [
                [47, 46, 45, 44, 43, 42, 34, 26, 27, 28, 29, 30, 31, 23, 15, 14,
                    13, 12, 11
                ],
                [57, 58, 59, 60, 61, 62, 63, 64, 56, 48, 40, 39, 38, 37, 36, 35],
                [22, 21, 20, 19, 18, 10],
                [55, 54, 53, 52, 51, 50, 49, 41, 33, 25, 17, 9, 1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32]
            ]
        }, {
            level: 96,
            size: 8,
            data: [
                [49, 41, 33, 25, 17, 9, 1, 2, 3, 4, 12, 11, 19, 27, 35, 43, 51, 59, 60, 61, 62, 63, 64, 56, 55, 54, 53, 52, 44, 45],
                [37, 36, 28, 20, 21, 29, 30, 22, 14, 13],
                [57, 58, 50, 42, 34, 26, 18, 10],
                [5, 6, 7, 8, 16, 24, 32, 40, 48, 47, 46, 38, 39, 31, 23, 15]
            ]
        }, {
            level: 97,
            size: 8,
            data: [
                [43, 44, 45, 53, 61, 60, 59, 58, 57, 49, 41, 33, 25, 17, 9, 1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48],
                [52, 51, 50, 42, 34, 26, 18, 10, 11, 12, 13, 14, 15],
                [37, 36, 35, 27, 19, 20, 21, 22, 23, 31, 39, 47, 55, 56],
                [64, 63, 62, 54, 46, 38, 30, 29, 28]
            ]
        }, {
            level: 98,
            size: 8,
            data: [
                [46, 45, 44, 43, 42, 41, 49, 57, 58, 59, 60, 61, 62, 63, 64, 56, 48],
                [31, 30, 29, 28, 27, 26, 18, 10, 11, 12, 13, 14, 15, 16],
                [8, 7, 6, 5, 4, 3, 2, 1, 9, 17, 25, 33, 34, 35, 36, 37, 38, 39, 40, 32, 24, 23, 22, 21, 20, 19],
                [50, 51, 52, 53, 54, 55, 47]
            ]
        }, {
            level: 99,
            size: 8,
            data: [
                [46, 38, 30, 22, 14, 13, 12, 11, 10, 18, 19],
                [50, 51, 52, 53],
                [49, 57, 58, 59, 60, 61, 62, 63, 64, 56, 48, 40, 32, 24, 16, 8, 7, 6, 5, 4, 3, 2, 1, 9, 17, 25, 33, 41, 42, 43, 44, 45, 37, 29, 21, 20, 28, 36, 35, 34, 26, 27],
                [15, 23, 31, 39, 47, 55,
                    54
                ]
            ]
        }, {
            level: 100,
            size: 8,
            data: [
                [1, 2, 10, 18, 26, 34, 42, 50],
                [9, 17, 25, 33, 41, 49, 57, 58, 59, 51, 43, 35, 27, 19, 11, 3, 4, 12, 20, 28, 36, 44, 52, 60, 61, 53, 45, 37, 29, 21, 13, 5, 6, 7, 8, 16, 24, 23, 31, 39],
                [47, 55, 56, 48, 40, 32],
                [64, 63, 62, 54, 46, 38, 30, 22, 14, 15]
            ]
        }, {
            level: 101,
            size: 8,
            data: [
                [64, 56, 48, 40, 32, 24, 16, 8, 7, 6, 5, 4, 3, 2, 1],
                [22, 21, 29, 30, 38, 37, 36, 28, 20, 19, 27, 35],
                [50, 51, 52, 53, 54, 46],
                [9, 10, 11, 12, 13, 14, 15, 23, 31, 39, 47, 55, 63, 62, 61, 60, 59, 58, 57, 49, 41, 33, 25, 17, 18, 26, 34, 42, 43, 44, 45]
            ]
        }, {
            level: 102,
            size: 8,
            data: [
                [58, 57, 49, 50, 51, 59, 60, 52, 44, 43, 35, 34,
                    33, 41
                ],
                [25, 17, 9, 1, 2, 3, 11, 19, 18, 26, 27, 28, 36, 37, 45, 53, 61, 62, 63, 64],
                [56, 55, 54, 46, 47, 48, 40, 39, 38, 30, 29, 21, 20, 12, 4, 5, 13],
                [22, 14, 6, 7, 15, 16, 24, 32, 31]
            ]
        }, {
            level: 103,
            size: 8,
            data: [
                [10, 11, 12, 13, 21, 29, 30, 38, 46, 54, 53, 52, 51, 50, 49, 41, 33, 25],
                [45, 37, 36, 28, 20, 19, 18, 17, 9, 1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56, 64, 63, 62, 61, 60, 59, 58, 57],
                [55, 47, 39, 31, 23, 15, 14, 22],
                [42, 34, 26, 27, 35, 43, 44]
            ]
        }, {
            level: 104,
            size: 9,
            data: [
                [81, 72, 71],
                [24, 23, 22, 21, 12, 13, 14, 15, 16, 17, 18, 27, 36, 45, 54, 53, 52, 51, 50, 49, 48, 47, 46, 37, 28, 19, 10, 1],
                [30, 31, 32, 33, 34, 25,
                    26, 35, 44, 43, 42, 41, 40, 39, 38, 29, 20, 11, 2, 3, 4, 5, 6, 7, 8, 9
                ],
                [78, 77, 76, 75, 74, 73, 64, 55, 56, 57, 58, 59, 60, 61, 62, 63],
                [65, 66, 67, 68, 69, 70, 79, 80]
            ]
        }, {
            level: 105,
            size: 9,
            data: [
                [21, 22, 23, 24, 25, 26, 35, 34, 33, 32, 31, 30, 29, 20, 19, 28, 37, 38, 39, 40, 41, 42, 43, 44],
                [47, 48, 49, 50, 51],
                [17, 16, 15, 14, 13, 12, 11, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 18, 27, 36, 45, 54, 53, 52],
                [71, 70, 69, 68, 67, 66, 65, 64, 73],
                [74, 75, 76, 77, 78, 79, 80, 81, 72, 63, 62, 61, 60, 59, 58, 57, 56, 55, 46]
            ]
        }, {
            level: 106,
            size: 9,
            data: [
                [2, 1, 10, 19, 20, 21],
                [16, 17, 26, 35, 44, 53, 62, 71, 80, 79, 78, 77, 76, 75, 74, 73, 64, 55, 46,
                    37, 28, 29, 30, 31, 22, 13
                ],
                [81, 72, 63, 54, 45, 36, 27, 18, 9, 8, 7, 6, 15, 24, 33, 42, 51, 60, 59, 58, 57],
                [11, 12, 3, 4, 5, 14, 23, 32, 41, 40, 39, 38],
                [50, 49, 48, 47, 56, 65, 66, 67, 68, 69, 70, 61, 52, 43, 34, 25]
            ]
        }, {
            level: 107,
            size: 9,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 18, 27, 36, 45, 54, 63, 72, 81, 80, 79, 78, 77, 76, 75, 74, 65, 56, 57, 58, 59, 60, 61, 52],
                [29, 30, 31, 32, 33, 34, 35, 26, 17, 16, 15, 14, 13, 12, 11, 10, 19],
                [73, 64, 55, 46, 47, 48, 49, 50, 51],
                [28, 37, 38, 39, 40, 41, 42, 43, 44, 53, 62, 71, 70, 69, 68, 67, 66],
                [20, 21, 22, 23, 24, 25]
            ]
        }, {
            level: 108,
            size: 9,
            data: [
                [74, 75, 76, 77, 78, 79, 80, 81, 72, 63, 54, 45,
                    44, 43, 42, 41, 40, 39, 38, 47, 56, 57, 58, 59, 60, 61
                ],
                [17, 26, 35, 34, 33, 32, 31, 30, 29, 28, 37, 46, 55],
                [73, 64, 65, 66, 67, 68, 69, 70, 71, 62, 53, 52, 51, 50, 49, 48],
                [6, 15, 14, 13, 12, 11],
                [5, 4, 3, 2, 1, 10, 19, 20, 21, 22, 23, 24, 25, 16, 7, 8, 9, 18, 27, 36]
            ]
        }, {
            level: 109,
            size: 9,
            data: [
                [73, 64, 55, 56, 57, 58, 49, 40, 31, 22],
                [74, 65, 66, 67, 68, 69, 70, 71, 62, 53, 44, 43, 34, 35, 26, 25, 16, 15, 14, 13],
                [75, 76, 77, 78, 79, 80, 81, 72, 63, 54, 45, 36, 27, 18, 9, 8, 7, 6, 5],
                [11, 12, 21, 30, 39, 48, 47, 38, 29, 20],
                [46, 37, 28, 19, 10, 1, 2, 3],
                [61, 60, 59, 50, 51, 42, 41, 32, 23, 24]
            ]
        }, {
            level: 110,
            size: 9,
            data: [
                [4, 13, 22,
                    31, 40, 49, 58, 67, 76, 75, 74, 73, 64, 55, 56, 47, 38, 29, 20, 11
                ],
                [71, 70, 61, 52, 43, 34, 25, 16, 7, 8, 9, 18, 27, 36, 45, 54],
                [6, 15, 24, 33, 42, 51, 60, 69],
                [46, 37, 28, 19, 10, 1, 2, 3, 12, 21, 30, 39, 48, 57, 66, 65],
                [5, 14, 23, 32, 41, 50, 59, 68, 77, 78, 79, 80, 81, 72, 63, 62, 53, 44, 35, 26, 17]
            ]
        }, {
            level: 111,
            size: 9,
            data: [
                [17, 16, 15, 14, 13, 12, 11, 10, 19, 28, 29, 30, 31, 32, 33, 34, 35, 36],
                [45, 54, 63, 72, 81, 80, 79, 78, 77, 76, 75, 74, 73, 64, 55, 46, 47, 48, 49, 50, 51],
                [52, 61, 60, 59, 58, 57],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 18, 27, 26, 25, 24, 23, 22, 21, 20],
                [37, 38, 39, 40, 41, 42, 43, 44, 53, 62, 71, 70, 69, 68, 67, 66, 65,
                    56
                ]
            ]
        }, {
            level: 112,
            size: 9,
            data: [
                [63, 62, 61, 60, 51, 50, 41, 32, 23, 14, 13, 22, 31, 40, 49, 58, 59],
                [25, 26, 17, 16, 15, 24, 33, 42, 43, 44, 45, 54, 53, 52],
                [71, 72, 81, 80, 79, 78, 77, 76, 75, 74, 73, 64, 55, 46, 37, 28, 19, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 18, 27, 36, 35, 34],
                [65, 66, 67, 68, 69, 70],
                [38, 47, 56, 57, 48, 39, 30, 29, 20, 21, 12, 11]
            ]
        }, {
            level: 113,
            size: 9,
            data: [
                [48, 47, 38, 29, 20, 11, 12, 13, 14, 15, 24, 33, 42, 51, 60, 69, 78],
                [36, 45, 54, 63, 72, 81, 80, 79, 70, 61, 52, 43, 34, 25, 16, 17],
                [71, 62, 53, 44, 35, 26, 27, 18, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 19, 28, 37, 46, 55, 64, 73],
                [66, 67, 76, 75, 74, 65, 56, 57, 58, 49,
                    40, 39, 30, 21, 22, 31
                ],
                [77, 68, 59, 50, 41, 32, 23]
            ]
        }, {
            level: 114,
            size: 9,
            data: [
                [65, 66, 67, 68, 69, 70, 71, 72, 81, 80, 79, 78, 77, 76, 75, 74, 73, 64, 55, 56, 57, 58, 59],
                [19, 28, 37, 46, 47, 48],
                [32, 31, 40, 49, 50, 51, 60, 61, 62, 53, 52, 43, 42, 33, 34, 35, 44],
                [63, 54, 45, 36, 27, 18, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 11, 12, 13, 14, 15, 16, 17, 26, 25, 24, 23, 22, 21, 20, 29, 30, 39, 38]
            ]
        }, {
            level: 115,
            size: 9,
            data: [
                [8, 9, 18, 27, 36, 45, 54, 63, 72, 81, 80, 79, 78, 77, 76],
                [12, 3, 2, 1, 10, 19, 28, 37, 46, 55, 64, 73, 74, 75, 66, 57, 48, 39, 30, 21, 22, 31],
                [17, 26, 35, 44, 53, 62, 71, 70],
                [11, 20, 29, 38, 47, 56, 65],
                [59, 60, 69,
                    68, 67, 58, 49, 40, 41, 50, 51, 42, 33, 32, 23, 14, 13, 4, 5, 6, 7, 16, 15, 24, 25, 34, 43, 52, 61
                ]
            ]
        }, {
            level: 116,
            size: 9,
            data: [
                [17, 18, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 19, 28, 37, 46, 55, 64],
                [21, 22, 23, 24, 33, 32, 41, 42, 51, 50, 59, 60, 61, 62, 53, 52, 43, 34, 35, 44],
                [73, 74, 65, 66, 57, 48, 39, 30, 31, 40, 49, 58, 67, 68, 69, 70, 71],
                [75, 76, 77, 78, 79, 80, 81, 72, 63, 54, 45, 36, 27, 26, 25, 16, 15, 14, 13, 12, 11, 20, 29, 38, 47, 56]
            ]
        }, {
            level: 117,
            size: 9,
            data: [
                [46, 37, 28, 19, 10, 1, 2, 3, 4, 5, 6, 15, 24, 33, 42, 51],
                [12, 11, 20, 29, 38, 47, 56, 55, 64],
                [73, 74, 75, 76, 77, 78, 79, 80, 81, 72, 63, 54, 45, 36, 27, 18, 9, 8, 7, 16, 17,
                    26, 35, 44, 53, 62, 71, 70, 69, 68, 67, 66, 65
                ],
                [21, 30, 39, 48, 57, 58, 49, 40, 31, 22, 13, 14, 23, 32, 41, 50, 59, 60, 61, 52, 43, 34, 25]
            ]
        }, {
            level: 118,
            size: 9,
            data: [
                [78, 77, 76, 75, 74, 73, 64, 55, 46, 37, 28, 19, 10, 1],
                [9, 8, 7, 6, 5, 4, 3, 2, 11, 20, 29, 38, 47, 56, 65, 66, 67, 68, 69, 60, 51, 52, 61, 62, 53, 44, 35, 34, 33, 42, 43],
                [71, 70, 79, 80, 81, 72, 63, 54, 45, 36, 27, 18, 17, 16, 15, 14, 13, 12, 21, 30, 39, 48, 57, 58, 59, 50, 41, 32],
                [49, 40, 31, 22, 23, 24, 25, 26]
            ]
        }, {
            level: 119,
            size: 9,
            data: [
                [12, 21, 30, 39, 48, 57, 58, 59, 50, 41, 32, 23, 14],
                [5, 6, 7, 8, 9, 18, 27, 36, 45, 54, 63, 72, 81, 80, 79, 70, 61, 52, 43, 34, 25],
                [1, 10, 19, 28, 37, 46, 55, 64, 73, 74, 75, 76, 77, 78, 69, 60, 51, 42, 33, 24, 15, 16, 17, 26, 35, 44, 53, 62, 71],
                [68, 67, 66, 65, 56, 47, 38, 29, 20, 11, 2, 3, 4, 13, 22, 31, 40, 49]
            ]
        }, {
            level: 120,
            size: 9,
            data: [
                [74, 73, 64, 55, 56, 65, 66, 67, 58, 49, 48, 47, 38, 37, 46],
                [75, 76, 77, 78, 79, 80, 81, 72, 63, 54, 45, 36, 27, 18, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 19, 28, 29, 20, 11, 12, 13, 14, 15, 16, 17, 26],
                [21, 22, 23, 24, 25],
                [68, 69, 70, 71, 62, 61, 60, 59, 50, 51, 52, 53, 44, 35, 34, 33, 42, 41, 40, 39, 30, 31, 32]
            ]
        }, {
            level: 121,
            size: 9,
            data: [
                [1, 2, 11, 20, 29, 38, 47, 56, 65],
                [42, 43, 44, 45, 54, 63, 72, 81, 80, 79, 78, 77, 76, 75, 74,
                    73, 64, 55, 46, 37, 28, 19, 10
                ],
                [23, 24, 25, 26, 17, 16, 15, 14, 13, 22, 31, 32, 41, 40, 49, 50, 51, 52, 53, 62, 71],
                [58, 59, 60, 61, 70, 69, 68, 67, 66, 57, 48, 39, 30, 21, 12, 3, 4, 5, 6, 7, 8, 9, 18, 27, 36, 35, 34, 33]
            ]
        }, {
            level: 122,
            size: 9,
            data: [
                [66, 75, 76, 77, 78, 79, 80, 71, 62, 53, 44, 45, 54, 63, 72, 81],
                [65, 74, 73, 64, 55, 46, 37, 28, 19, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 18, 27, 36, 35, 34, 33, 32, 31],
                [26, 25, 24, 23, 22, 21, 30, 39, 48, 49, 40, 41, 50, 59],
                [17, 16, 15, 14, 13, 12, 11, 20, 29, 38, 47, 56, 57, 58, 67, 68, 69, 70, 61, 52, 43, 42, 51, 60]
            ]
        }, {
            level: 123,
            size: 9,
            data: [
                [9, 18, 27, 36, 45, 54, 63, 72, 81, 80, 79, 78, 77,
                    76, 75, 74, 73
                ],
                [69, 70, 61, 52, 43, 34, 25, 16, 15, 14, 13, 12, 11, 20, 29, 38, 47, 48, 49, 50, 41, 32, 31],
                [56, 57, 58, 59, 60, 51, 42, 33, 24, 23, 22, 21, 30, 39, 40],
                [68, 67, 66, 65, 64, 55, 46, 37, 28, 19, 10, 1, 2, 3, 4, 5, 6, 7, 8, 17, 26, 35, 44, 53, 62, 71]
            ]
        }, {
            level: 124,
            size: 9,
            data: [
                [9, 18, 17, 16, 15, 14, 13, 12, 11, 20, 29, 30, 31, 32, 33, 34, 35],
                [61, 60, 59, 58, 57, 56, 55, 64, 73, 74, 75, 76, 77, 78, 79, 80, 81, 72, 63, 54, 45, 44, 43, 42, 41, 40, 39, 38],
                [8, 7, 6, 5, 4, 3, 2, 1, 10, 19, 28, 37, 46, 47, 48, 49, 50, 51, 52, 53, 62, 71, 70, 69, 68, 67, 66, 65],
                [36, 27, 26, 25, 24, 23, 22, 21]
            ]
        }, {
            level: 125,
            size: 9,
            data: [
                [71,
                    72, 81, 80, 79, 78, 77, 76, 75, 74, 73, 64, 55, 46, 37, 28, 19, 10, 1, 2, 3
                ],
                [17, 16, 15, 14, 13, 12, 11, 20, 29, 38, 47, 56, 65, 66, 67, 68, 69, 70, 61, 62, 63, 54, 45, 44, 53, 52, 43, 42, 51, 60, 59],
                [58, 57, 48, 39, 30, 21, 22, 23, 24, 25, 26],
                [4, 5, 6, 7, 8, 9, 18, 27, 36, 35, 34, 33, 32, 31, 40, 49, 50, 41]
            ]
        }, {
            level: 126,
            size: 9,
            data: [
                [73, 64, 55, 46, 37, 28, 19, 10, 1, 2, 11, 20, 29, 38, 47, 56, 57, 58, 49, 40, 39, 30, 21, 12, 3],
                [74, 75, 76, 77, 78, 79, 80, 81, 72, 63, 54, 45, 36, 27, 18, 9, 8, 7, 6, 5, 4, 13, 22],
                [65, 66, 67, 68, 69, 70],
                [71, 62, 61, 52, 51, 60, 59, 50, 41, 42, 33, 32, 31],
                [43, 34, 35, 26, 17, 16, 25, 24, 23, 14]
            ]
        }, {
            level: 127,
            size: 9,
            data: [
                [71, 70, 69, 68, 67, 66, 65, 56, 47, 48, 49, 50, 51, 52, 53, 54, 45, 36, 35, 34, 33, 32, 31, 30, 21],
                [27, 18, 17, 16, 15, 14, 13, 12, 11, 20, 29, 38, 39, 40, 41, 42, 43, 44],
                [22, 23, 24, 25, 26],
                [57, 58, 59, 60, 61, 62, 63, 72, 81, 80, 79, 78, 77, 76, 75, 74, 73, 64, 55, 46, 37, 28, 19, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            ]
        }, {
            level: 128,
            size: 9,
            data: [
                [73, 64, 55, 46, 37, 28, 19],
                [74, 75, 76, 77, 78, 79, 80, 81, 72, 63, 54, 45, 36, 27, 18, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10],
                [65, 66, 67, 68, 69, 70, 71, 62, 61, 60, 59, 58, 57, 56, 47, 48, 49, 40, 41, 42, 51, 52, 53, 44, 43, 34, 35, 26, 25, 16, 17],
                [38, 29, 20, 11, 12, 21, 30, 39],
                [31, 22, 13,
                    14, 15, 24, 33
                ]
            ]
        }, {
            level: 129,
            size: 9,
            data: [
                [20, 29, 38, 47, 56, 65, 66, 67, 68, 69, 60, 51, 42, 33, 24, 15, 6, 7, 16, 25],
                [11, 2, 3, 12, 21, 30, 39, 48, 57, 58, 59, 50, 41, 32, 23, 14, 5, 4, 13, 22, 31, 40, 49],
                [61, 62, 63, 54, 45, 36, 27, 18, 9, 8, 17, 26, 35, 44, 53, 52, 43, 34],
                [1, 10, 19, 28, 37, 46, 55, 64, 73, 74, 75, 76, 77, 78, 79, 80, 81, 72, 71, 70]
            ]
        }, {
            level: 130,
            size: 9,
            data: [
                [11, 20, 29, 38, 47, 56, 65, 66, 67, 68, 69, 70, 71, 72, 63, 54, 45, 36, 27, 18, 9, 8, 7, 6, 5, 14, 23, 32, 41, 50, 51, 52],
                [57, 48, 39, 30, 21, 12, 3, 2, 1, 10, 19, 28, 37, 46, 55, 64, 73, 74, 75, 76, 77, 78, 79, 80, 81],
                [35, 26, 17, 16, 15, 24, 33, 42],
                [4,
                    13, 22, 31, 40, 49, 58, 59, 60, 61, 62, 53, 44, 43, 34, 25
                ]
            ]
        }, {
            level: 131,
            size: 9,
            data: [
                [21, 30, 31, 32, 33, 34, 35],
                [9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 19, 28, 37, 46, 47, 48, 49, 50, 51, 52, 53, 62, 71, 70, 69, 68, 67, 66, 65],
                [61, 60, 59, 58, 57, 56, 55, 64, 73, 74, 75, 76, 77, 78, 79, 80, 81, 72, 63, 54, 45, 44, 43, 42, 41, 40, 39, 38, 29, 20, 11, 12, 13, 14, 15, 16, 17, 18],
                [22, 23, 24, 25, 26, 27, 36]
            ]
        }, {
            level: 132,
            size: 9,
            data: [
                [73, 74, 65, 64, 55, 56, 47, 46, 37, 38, 29, 28, 19, 20, 11, 10, 1, 2, 3],
                [75, 76, 77, 78, 79, 80, 81, 72, 71, 62, 63, 54, 53, 44, 45, 36, 35, 26, 27, 18, 17, 8, 7],
                [66, 67, 68, 69, 70, 61, 60, 59, 58, 57],
                [52,
                    51, 50, 49, 48, 39, 40, 41, 42, 43
                ],
                [30, 31, 32, 33, 34, 25, 24, 23, 22, 21],
                [12, 13, 14, 15, 6, 5]
            ]
        }, {
            level: 133,
            size: 9,
            data: [
                [40, 31, 22, 13, 4, 3, 2, 11, 20, 29, 28],
                [1, 10, 19],
                [44, 35, 26, 17],
                [81, 80, 79, 70, 61, 60, 51, 42, 33, 24, 23, 14, 5, 6, 7, 8, 9, 18, 27, 36, 45, 54, 63],
                [57, 58, 59],
                [78, 69, 68, 67, 66, 65, 56, 47, 48, 49, 50, 41, 32],
                [77, 76, 75, 74, 73, 64, 55, 46, 37, 38, 39, 30, 21, 12],
                [72, 71, 62, 53, 52, 43, 34, 25, 16, 15]
            ]
        }, {
            level: 134,
            size: 9,
            data: [
                [16, 17, 26, 35, 36],
                [65, 56, 47, 38, 29, 30, 21, 12, 3, 4, 5, 14, 23, 32, 41],
                [20, 11, 2, 1],
                [52, 61, 60, 69, 78, 79, 80, 81, 72, 63, 54, 45],
                [10, 19, 28,
                    37, 46, 55, 64, 73, 74, 75, 66, 67
                ],
                [49, 50, 51, 42, 33, 24, 15, 6, 7, 8, 9, 18, 27],
                [76, 77, 68, 59, 58, 57, 48, 39, 40, 31, 22, 13],
                [70, 71, 62, 53, 44, 43, 34, 25]
            ]
        }, {
            level: 135,
            size: 9,
            data: [
                [74, 73, 64, 65, 56],
                [57, 58, 59, 60, 61, 62, 71, 70, 69, 68, 67, 66, 75, 76, 77, 78, 79, 80, 81, 72, 63, 54, 53, 44, 35, 36, 27, 18, 9, 8, 17, 26, 25],
                [55, 46, 37, 38, 47, 48, 49, 40, 41, 42, 43, 34, 33, 32, 31, 30, 29, 28, 19, 20, 21, 22, 23],
                [24, 15, 14, 13, 12, 11, 10, 1, 2, 3, 4, 5, 6, 7, 16],
                [50, 51, 52]
            ]
        }, {
            level: 136,
            size: 9,
            data: [
                [15, 16, 25, 34, 33, 32, 41, 50, 59, 68, 77, 76, 75, 74, 73, 64, 55, 46, 47],
                [65, 56, 57, 48, 39, 30, 29, 20,
                    11
                ],
                [4, 5, 6, 7, 8, 9, 18, 27, 36, 45, 54, 53, 62, 71],
                [13, 14, 23, 24],
                [78, 69, 60, 51, 42],
                [66, 67, 58, 49, 40, 31, 22, 21, 12, 3, 2, 1, 10, 19, 28, 37, 38],
                [17, 26, 35, 44, 43, 52, 61, 70, 79, 80, 81, 72, 63]
            ]
        }, {
            level: 137,
            size: 9,
            data: [
                [69, 60, 61, 62, 63, 72, 81, 80],
                [66, 57, 48, 39, 30, 21, 12, 11],
                [28, 37, 46, 55, 64, 73, 74, 75, 76, 67],
                [17, 16, 15, 14, 13, 22, 31, 40, 49, 58, 59, 68, 77, 78, 79, 70, 71],
                [41, 32, 23, 24, 25, 26, 35, 44],
                [34, 43, 52, 53, 54, 45, 36, 27, 18, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 19, 20, 29, 38, 47, 56, 65],
                [50, 51, 42, 33]
            ]
        }, {
            level: 138,
            size: 9,
            data: [
                [38, 37, 46, 55, 64, 73, 74, 75, 66, 57, 58, 49,
                    40, 41, 32, 23, 14
                ],
                [29, 28, 19, 10, 1, 2, 3, 12],
                [79, 70, 61, 52, 43, 34, 25, 16, 7, 8, 9, 18, 27, 36, 45, 54, 63, 72, 81],
                [76, 77, 78, 69, 60, 51, 42, 33, 24, 15, 6, 5, 4, 13, 22, 31],
                [67, 68, 59, 50],
                [65, 56, 47, 48, 39, 30, 21, 20, 11],
                [80, 71, 62, 53, 44, 35, 26, 17]
            ]
        }, {
            level: 139,
            size: 9,
            data: [
                [19, 28, 29, 38, 37, 46, 55, 64, 73, 74, 65, 66, 75, 76, 67, 68, 77, 78, 69, 70, 79, 80, 71, 72, 81],
                [47, 56, 57, 58, 59, 60, 61, 52],
                [63, 62, 53, 54, 45, 44, 35, 26, 27, 18, 9, 8, 7, 16, 25, 34, 43],
                [39, 48, 49, 50, 51, 42],
                [30, 21, 20, 11, 10, 1, 2, 3, 12, 13],
                [22, 31, 40, 41, 32, 23, 14],
                [33, 24, 15, 6, 5]
            ]
        }, {
            level: 140,
            size: 9,
            data: [
                [58,
                    57, 66, 75, 74, 73, 64, 55, 46, 37, 28, 19, 10, 1, 2, 3, 4, 5, 14, 23, 32, 41, 42, 51, 60, 61
                ],
                [65, 56, 47, 48, 39, 30, 21],
                [76, 77, 78, 69, 70, 71, 62, 53, 44, 35, 26, 17],
                [52, 43, 34, 25, 16],
                [79, 80, 81, 72, 63, 54, 45, 36, 27, 18, 9, 8, 7, 6, 15, 24, 33],
                [67, 68, 59, 50, 49, 40, 31, 22, 13, 12, 11, 20, 29, 38]
            ]
        }, {
            level: 141,
            size: 9,
            data: [
                [19, 28, 29, 38, 37, 46, 55, 64, 73, 74, 65, 66, 75, 76, 67, 68, 77, 78, 69, 70, 79, 80, 71, 72, 81],
                [47, 56, 57, 58, 59, 60, 61, 52],
                [39, 48, 49, 50, 51, 42],
                [63, 62, 53, 54, 45, 44, 35, 26, 27, 18, 9, 8, 7, 16, 25, 34, 43],
                [22, 31, 40, 41, 32, 23, 14],
                [30, 21, 20, 11, 10, 1, 2, 3, 12, 13],
                [5, 6, 15,
                    24, 33
                ]
            ]
        }, {
            level: 142,
            size: 9,
            data: [
                [74, 73, 64, 55, 46, 37],
                [30, 21, 12],
                [71, 62, 61, 52, 51, 42, 33, 24, 15, 16, 17, 26, 35],
                [70, 79, 80, 81, 72, 63, 54, 53, 44, 43, 34, 25],
                [49, 40, 31, 22, 13, 4, 3, 2, 11, 20],
                [68, 59, 50, 41, 32, 23, 14, 5, 6, 7, 8, 9, 18, 27, 36, 45],
                [75, 66, 65, 56, 47],
                [1, 10, 19, 28, 29, 38, 39, 48, 57, 58, 67, 76, 77, 78, 69, 60]
            ]
        }, {
            level: 143,
            size: 9,
            data: [
                [76, 75, 66, 65, 56, 47, 38, 29, 20, 11, 12, 3, 4, 5, 14, 15, 24, 33, 42, 41, 50, 59, 60, 69, 78, 79, 80, 81, 72, 63, 54, 45, 36, 35, 26, 17, 8],
                [62, 53, 44, 43, 34, 25, 16, 7, 6],
                [27, 18, 9],
                [71, 70, 61, 52, 51],
                [74, 73, 64, 55, 46, 37, 28, 19, 10, 1,
                    2
                ],
                [57, 48, 39, 30, 21, 22, 13],
                [77, 68, 67, 58, 49, 40, 31, 32, 23]
            ]
        }, {
            level: 144,
            size: 9,
            data: [
                [56, 55, 64, 73, 74, 65, 66, 75, 76, 77, 78, 79, 80, 81],
                [46, 47, 48, 49, 58, 67, 68, 59, 60, 69, 70, 71, 72, 63, 62],
                [50, 51, 52, 53, 54, 45, 36, 35, 26, 27, 18, 17, 8, 9],
                [37, 28, 19, 10, 1, 2, 11, 20, 29, 38, 39, 30, 21, 12, 3, 4, 13, 22, 31, 32, 33, 24, 15, 14, 5],
                [6, 7, 16, 25, 34, 43, 42, 41, 40]
            ]
        }, {
            level: 145,
            size: 9,
            data: [
                [56, 47, 38, 29, 20, 11],
                [73, 74, 75, 76, 67, 68, 59, 50, 41, 32, 31, 22, 13, 14, 15, 16, 17],
                [2, 1, 10, 19, 28, 37, 46, 55, 64, 65, 66, 57, 58, 49, 40],
                [69, 70, 61, 52, 43, 34, 25, 26],
                [60, 51, 42, 33, 24, 23],
                [77, 78, 79, 80, 71, 62, 53, 44, 35, 36, 27, 18, 9, 8, 7, 6, 5, 4, 3, 12, 21, 30, 39, 48],
                [81, 72, 63, 54, 45]
            ]
        }, {
            level: 146,
            size: 9,
            data: [
                [58, 67, 76, 75, 74, 73, 64, 55, 56, 65, 66, 57, 48, 47, 46],
                [59, 68, 77, 78, 79, 80, 81, 72, 63, 62, 71, 70, 69, 60, 51, 52, 53, 54],
                [37, 28, 29, 30, 39, 40, 49, 50, 41, 42, 33, 34, 35, 44, 45],
                [21, 20, 19, 10, 11, 12],
                [1, 2, 3, 4, 13, 22, 31, 32, 23, 24, 15, 6, 7, 16, 25, 26, 17, 8, 9, 18, 27, 36]
            ]
        }, {
            level: 147,
            size: 9,
            data: [
                [73, 74, 75, 76, 67, 58, 49],
                [81, 72, 63, 54, 45, 36, 27, 18, 9, 8, 7, 6, 15, 24, 25],
                [80, 71, 62, 53, 44],
                [30, 31, 22, 13],
                [56, 47, 38, 29, 20, 11, 2, 1],
                [10, 19, 28, 37, 46,
                    55, 64, 65, 66, 57, 48, 39, 40, 41, 50, 59, 68, 77, 78, 79, 70, 61, 52, 43, 34, 35, 26, 17, 16
                ],
                [21, 12, 3, 4, 5, 14, 23, 32, 33, 42, 51, 60, 69]
            ]
        }, {
            level: 148,
            size: 9,
            data: [
                [73, 74, 75, 76, 77, 78, 79, 80, 81, 72, 71, 70, 69, 68, 67, 66, 65, 64, 55, 56],
                [46, 47, 48, 57, 58, 59, 60, 61, 62, 63, 54, 53, 52, 51, 50, 49, 40, 39, 38, 37, 28, 19, 10, 1, 2, 11, 20, 29, 30, 31, 22, 13, 12, 3, 4, 5],
                [17, 16, 25, 26, 35, 34, 43, 42, 41, 32, 23, 24, 33],
                [14, 15, 6, 7, 8, 9, 18, 27, 36, 45]
            ]
        }, {
            level: 149,
            size: 9,
            data: [
                [21, 12, 13, 14, 15, 16, 17, 18, 9],
                [55, 56, 57],
                [60, 51, 42, 33, 34, 35, 44, 53, 62, 71],
                [40, 39, 38, 29, 20, 11, 2, 3, 4, 5, 6, 7,
                    8
                ],
                [73, 64, 65, 66, 67, 58, 49, 48, 47, 46, 37, 28, 19, 10, 1],
                [30, 31, 22, 23, 24, 25, 26, 27, 36, 45, 54, 63, 72, 81, 80],
                [74, 75, 76, 77, 78, 79, 70, 61, 52, 43],
                [69, 68, 59, 50, 41, 32]
            ]
        }
    ]
};
var Preloader = cc.Scene.extend({
    onEnter: function() {
        cc.Node.prototype.onEnter.call(this);
        this.schedule(this._startLoading, 0.3)
    },
    onExit: function() {
        cc.Node.prototype.onExit.call(this);
        this._label && this._label.setString("Loaded")
    },
    initWithResources: function(a, b) {
        cc.isString(a) && (a = [a]);
        this.resources = a || [];
        this.cb = b
    },
    init: function() {
        if (!this._inited && (this._inited = !0, cc.sys.isNative)) {
            var a = cc.director.getWinSize(),
                b = cc.p(a.width / 2, a.height / 2),
                c = new cc.Sprite(MGF.instance.bgUrl),
                d = c.getContentSize().width,
                e = c.getContentSize().height;
            c.setScaleX(a.width / d);
            c.setScaleY(a.height / e);
            c.setPosition(b);
            this.addChild(c, 0);
            var f = new cc.Sprite(MGF.instance.logoUrl);
            f.setScale(cc.contentScaleFactor());
            f.setPosition(b);
            f.y = 0.75 * a.height;
            this.addChild(f);
            var g = new cc.Sprite(MGF.instance.playUrl);
            g.setScale(cc.contentScaleFactor());
            g.setPosition(b);
            g.y = 0.5 * a.height;
            this.addChild(g);
            var k = cc.EventListener.create({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    swallowTouches: !0,
                    onTouchBegan: function(a, b) {
                        var c = b.getCurrentTarget(),
                            d = c.convertToNodeSpace(a.getLocation()),
                            e = c.getContentSize(),
                            e = cc.rect(0, 0, e.width, e.height);
                        return cc.rectContainsPoint(e, d) ? c == g ? (cc.eventManager.removeListener(k), c = new cc.FadeTo(1, 0), d = new cc.MoveBy(1, cc.p(0, 50)), g.runAction(new cc.Sequence(new cc.Spawn(c, d), new cc.CallFunc(function() {
                            MGDelegate.dispatcherEvent(new MGEvent(MGEvent.ENTER_GAME))
                        }))), !1) : !0 : !1
                    }
                }),
                a = cc.EventListener.create({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    swallowTouches: !0,
                    onTouchBegan: function(a, b) {
                        var c = b.getCurrentTarget(),
                            d = c.convertToNodeSpace(a.getLocation()),
                            e = c.getContentSize(),
                            e = cc.rect(0, 0, e.width, e.height);
                        return cc.rectContainsPoint(e, d) ? (c == f && App.ClickMore(), !0) : !1
                    }
                });
            cc.eventManager.addListener(a, f);
            cc.eventManager.addListener(k, g)
        }
    },
    _initStage: function(a, b) {
        var c = this._texture2d = new cc.Texture2D;
        c.initWithElement(a);
        c.handleLoadedTexture();
        c = this._logo = new cc.Sprite(c);
        c.setScale(cc.contentScaleFactor());
        c.x = b.x;
        c.y = b.y;
        this._bgLayer.addChild(c, 10)
    },
    _startLoading: function() {
        var a = this;
        a.unschedule(a._startLoading);
        cc.loader.load(a.resources, function(a, c, d) {
            a = Math.min(d / c * 100 | 0, 100);
            var e = new MGEvent(MGEvent.LOAD_PROGRESS);
            e.data = {
                itemsLoaded: d,
                itemsTotal: c,
                percent: a
            };
            MGDelegate.dispatcherEvent(e)
        }, function() {
            MGDelegate.dispatcherEvent(new MGEvent(MGEvent.LOAD_COMPLETE));
            a.cb && a.cb()
        })
    }
});
Preloader.preload = function(a, b) {
    this._miaPreloader || (this._miaPreloader = new Preloader, this._miaPreloader.init());
    this._miaPreloader.initWithResources(a, b);
    cc.director.runScene(this._miaPreloader);
    return this._miaPreloader
};
var SharePlatform = cc.Node.extend({
    score: 0,
    lv: 0,
    beatPer: 0,
    shareBtns: [],
    appBtns: [],
    share_gap: 8,
    app_gap: 8,
    alignType: "H",
    btn_app: null,
    btn_google: null,
    shareContainer: null,
    appContainer: null,
    appWidth: 0,
    shareWidth: 0,
    onEnter: function() {
        this._super();
        this.init()
    },
    onExit: function() {
        this._super();
        this.shareBtns = [];
        this.appBtns = []
    },
    init: function() {
        var a = "",
            b = "",
            c = 0;
        this.shareBtns = [];
        this.appBtns = [];
        this.shareContainer = new cc.Node;
        this.addChild(this.shareContainer);
        for (var d = 0; d < App.platforms.length; d++) a = App.platforms[d],
            0 > a.indexOf("weixin") && (b = "$platform_" + a, res[b] ? (c++, b = new cc.Sprite(res[b]), b.anchorX = 0, b.anchorY = 0.5, b.name = a, flax.inputManager.addListener(b, this.onClick, InputType.click, this), this.shareContainer.addChild(b), this.shareBtns.push(b)) : console.warn("Can not found platform [" + b + "] image!!"));
        this.appContainer = new cc.Node;
        this.appContainer.y = 69;
        this.addChild(this.appContainer);
        for (d = c = 0; d < App.apps.length; d++) a = App.apps[d], b = "$" + a, console.log("Download platform name:"), res[b] ? (c++, b = new cc.Sprite(res[b]),
            b.anchorX = 0, b.anchorY = 0.5, b.name = a, flax.inputManager.addListener(b, this.onClick, InputType.click, this), this.appContainer.addChild(b), this.appBtns.push(b)) : console.warn("Can not found platform [" + b + "] image!!");
        this.resetAppBtnsUI("H");
        this.resetShareBtnsUI("H")
    },
    onClick: function(a, b) {
        console.log("onClick:" + b.target.name);
        var c = b.target.name;
        "app_" == c.substr(0, 4) ? App.DownloadApp(c) : App.Share(c, this.score, this.lv, this.beatPer)
    },
    setData: function(a, b, c, d) {
        this.score = a;
        this.lv = b;
        this.beatPer = c;
        d && (this.share_gap =
            d);
        this.resetShareBtnsUI()
    },
    resetShareBtnsUI: function(a) {
        this.alignType = a;
        for (a = 0; a < this.shareBtns.length; a++) {
            var b = this.shareBtns[a];
            "H" == this.alignType ? (b.x = (b.getContentSize().width + this.share_gap) * a, b.y = 0) : (b.x = 0, b.y = (b.getContentSize().height + this.share_gap) * a)
        }
        this.shareWidth = b ? b.x + b.getContentSize().width : 0;
        this.shareContainer.x = (cc.winSize.width - this.shareWidth) / 2
    },
    resetAppBtnsUI: function(a) {
        this.alignType = a;
        for (a = this.appWidth = 0; a < this.appBtns.length; a++) {
            var b = this.appBtns[a];
            "H" == this.alignType ?
                (b.x = (b.getContentSize().width + this.app_gap) * a, b.y = 0) : (b.x = 0, b.y = (b.getContentSize().height + this.app_gap) * a)
        }
        this.appWidth = b ? b.x + b.getContentSize().width : 0;
        this.appContainer.x = (cc.winSize.width - this.appWidth) / 2
    }
});
var App = function() {
    function a() {
        a.instance && console.log("can not new App again");
        this.onAddToStageHandler()
    }
    a.VERSION = "2.2.1.6";
    a.debug = !0;
    a.frameworkInfo = null;
    a.engine = null;
    a.Doc = null;
    a.miniLogoUrl = "";
    a.instance = null;
    a.PLATFORM_FACEBOOK = "facebook";
    a.PLATFORM_TWITTER = "twitter";
    a.PLATFORM_WEIXIN = "weixin";
    a.PLATFORM_QQ = "qq";
    a.PLATFORM_WEIBO = "weibo";
    a.PLATFORM_GOOGLE_PLUS = "google_plus";
    a.gamename = "-1";
    a.nameid = "-1";
    a.sharemsgs = {};
    a.showmsgs = {};
    a.platforms = [];
    a.textures = {};
    a.FullscreenEnabled = !0;
    a.apps = [];
    a.language = "";
    a.PREGAME = "pregame";
    a.INGAME = "ingame";
    a.state = a.PREGAME;
    a.LogoAlign = "NONE";
    a.ScreenshotEnabled = !0;
    a.CreditsEnabled = !0;
    a.MoreGamesButtonEnabled = !0;
    var b = function(b) {
        a.debug && console.log("%c%s", "background:yellow;color:green;", b.type);
        MGDelegate.dispatcherEvent(b)
    };
    a.prototype.onAddToStageHandler = function() {
        MGDelegate.isApp = !1;
        MGDelegate.addEventListener(MGEvent.FRAMEWORK_INFO_RESPONSE || "FRAMEWORK_INFO_RESPONSE", this.onFrameworkInfoHandler, this);
        MGDelegate.addEventListener(MGEvent.ENTER_GAME ||
            "ENTER_GAME", this.enterGame, this);
        var c = new MGEvent(MGEvent.FRAMEWORK_INFO_REQUEST || "FRAMEWORK_INFO_REQUEST");
        c.data = {
            AppVersion: a.VERSION
        };
        b(c);
        b(new MGEvent(MGEvent.ADDED_TO_STAGE || "ADDED_TO_STAGE"))
    };
    a.prototype.onFrameworkInfoHandler = function(b) {
        MGDelegate.removeEventListener(MGEvent.FRAMEWORK_INFO_RESPONSE || "FRAMEWORK_INFO_RESPONSE", this.onFrameworkInfoHandler, this);
        a.frameworkInfo = b.data;
        a.frameworkInfo && console.log("AppVersion: " + a.VERSION);
        a.debug = a.frameworkInfo.debug;
        if ("localhost" == window.location.hostname ||
            "127.0.0.1" == window.location.hostname) a.debug = !0;
        a.gamename = a.frameworkInfo.gamename;
        a.nameid = a.frameworkInfo.nameid;
        a.language = a.frameworkInfo.language || "en";
        a.sharemsgs = a.frameworkInfo.sharemsgs || [];
        a.showmsgs = a.frameworkInfo.showmsgs || [];
        a.ScreenshotEnabled = a.frameworkInfo.HasScreenshot;
        a.CreditsEnabled = a.frameworkInfo.hasOwnProperty("showCredits") ? a.frameworkInfo.showCredits : !0;
        a.MoreGamesButtonEnabled = a.frameworkInfo.hasOwnProperty("showMoreGamesButton") ? a.frameworkInfo.showMoreGamesButton : !0;
        a.FullscreenEnabled = a.frameworkInfo.hasOwnProperty("fullscreenEnabled") ? a.frameworkInfo.fullscreenEnabled : !0;
        for (var d in a.sharemsgs) "app_" == d.substr(0, 4) ? a.apps.push(d) : a.platforms.push(d);
        a.platforms.sort();
        a.apps.sort();
        try {
            eval("cc"), a.engine = "cocos"
        } catch (e) {}
        try {
            eval("egret"), a.engine = "egret"
        } catch (f) {}
        if (!a.engine) throw "no such a engine exsit!";
        switch (a.engine) {
            case "cocos":
                this.CocosFrameworkInfoHandler();
                break;
            case "egret":
                this.EgretFrameworkInfoHandler()
        }
    };
    a.prototype.CocosFrameworkInfoHandler =
        function() {
            a.frameworkInfo.miniLogoUrl && (a.miniLogoUrl = a.frameworkInfo.miniLogoUrl, res.miniLogoUrl = a.miniLogoUrl, res_resource.push(a.miniLogoUrl));
            var b = a.platforms.length,
                d = a.apps.length,
                e = "",
                e = "";
            if (0 != b)
                for (var f = 0; f < b; f++)
                    if (e = a.platforms[f], 0 > e.indexOf("weixin")) {
                        var g = "res/platform/" + e + ".png",
                            e = "$platform_" + e;
                        res[e] = g;
                        res_resource.push(g)
                    }
            if (0 != d)
                for (f = 0; f < d; f++) e = a.apps[f], g = "res/app/" + e + ".png", e = "$" + e, res[e] = g, res_resource.push(g);
            b = ["c_button"];
            d = b.length;
            for (f = 0; f < d; f++) e = b[f], g = "res/credits/" +
                e + ".png", e = "$" + e, res[e] = g, res_resource.push(g)
        };
    a.prototype.PreLoadEgretTexture = function(b, d) {
        RES.getResByUrl(d, function(d) {
            a.textures[b] = d
        }, a, RES.ResourceItem.TYPE_IMAGE)
    };
    a.prototype.EgretFrameworkInfoHandler = function() {
        a.frameworkInfo.miniLogoUrl && (a.miniLogoUrl = a.frameworkInfo.miniLogoUrl, -1 < a.miniLogoUrl.indexOf("office") || this.PreLoadEgretTexture("miniLogoUrl", a.miniLogoUrl))
    };
    a.prototype.enterGame = function(b) {
        a.state = a.INGAME
    };
    a.Share = function(b, d, e, f) {
        void 0 === d && (d = 0);
        void 0 === e && (e = 0);
        void 0 ===
            f && (f = 0);
        if (a.sharemsgs[b]) {
            var g = a.sharemsgs[b],
                g = g.replace(/\{nameid\}/g, a.nameid),
                g = g.replace(/\{gamename\}/g, a.gamename),
                g = g.replace(/\{score\}/g, d + ""),
                g = g.replace(/\{level\}/g, e + ""),
                g = g.replace(/\{percent\}/g, f + "");
            a.ShareMessage(b, g)
        }
    };
    a.ShareMessage = function(c, d) {
        var e = new MGEvent(MGEvent.SHARE || "SHARE");
        e.data = {
            platform: c,
            gamename: a.gamename,
            nameid: a.nameid,
            msg: d
        };
        b(e)
    };
    a.GetShowMsg = function(b, d, e, f) {
        void 0 === b && (b = a.language);
        void 0 === d && (d = 0);
        void 0 === e && (e = 0);
        void 0 === f && (f = 0);
        if (a.showmsgs[b]) return a.Share("weixin",
            d, e, f), b = a.showmsgs[b], b = b.replace(/\{nameid\}/g, a.nameid), b = b.replace(/\{gamename\}/g, a.gamename), b = b.replace(/\{score\}/g, d + ""), b = b.replace(/\{percent\}/g, f + "");
        console.warn("can not found show msg: ")
    };
    a.DownloadApp = function(a) {
        var d = new MGEvent(MGEvent.DOWNLOAD_APP || "DOWNLOAD_APP");
        d.data = {
            platform: a
        };
        b(d)
    };
    a.Start = function() {
        b(new MGEvent(MGEvent.START_GAME || "START_GAME"))
    };
    a.Pause = function() {
        b(new MGEvent(MGEvent.PAUSE_GAME || "PAUSE_GAME"))
    };
    a.ClickMore = function() {
        b(new MGEvent(MGEvent.CLICK_MORE ||
            "CLICK_MORE"))
    };
    a.ClickLogo = function() {
        b(new MGEvent(MGEvent.CLICK_MINILOGO || "CLICK_MINILOGO"))
    };
    a.ClickCredits = function() {
        b(new MGEvent(MGEvent.CLICK_CREDITS || "CLICK_CREDITS"))
    };
    a.ShowWin = function() {
        a.Pause();
        b(new MGEvent(MGEvent.SHOW_WIN || "SHOW_WIN"))
    };
    a.ShowLose = function() {
        a.Pause();
        b(new MGEvent(MGEvent.SHOW_LOSE || "SHOW_LOSE"))
    };
    a.Screenshot = function(c, d, e, f) {
        c || (c = cc.winSize);
        d || (d = "");
        e || (e = function() {
            console.log("screenshot success.")
        });
        f || (f = function() {
            console.log("screenshot faild.")
        });
        if (MGDelegate.isApp) {
            var g = new MGEvent(MGEvent.SCREENSHOT || "SCREENSHOT");
            g.data = {
                rect: c,
                msg: d,
                success: e,
                faild: f
            };
            b(g)
        }
        var k = a.Doc.getElementById("screenshootCanvas");
        k ? (k.getContext("2d").clearRect(0, 0, k.width, k.height), k.width = c.width, k.height = c.height) : (g = a.Doc.getElementById("gameCanvas"), k = a.Doc.createElement("canvas"), k.id = "screenshootCanvas", k.style.display = "none", k.width = c.width, k.height = c.height, g.appendChild(k));
        setTimeout(function() {
            try {
                var g = a.Doc.getElementById("gameCanvas").getContext("2d").getImageData(c.x,
                    c.y, c.width, c.height);
                k.getContext("2d").putImageData(g, 0, 0, 0, 0, c.width, c.height);
                var n = new MGEvent(MGEvent.SCREENSHOT || "SCREENSHOT");
                n.data = {
                    rect: c,
                    msg: d,
                    success: e,
                    faild: f
                };
                b(n)
            } catch (p) {
                console.error("Security Error", p.message)
            }
        }, 60)
    };
    a.ContinueGame = function() {
        BaseScene.creditNone = !1;
        b(new MGEvent(MGEvent.CONTINUE_GAME || "CONTINUE_GAME"))
    };
    a.LevelFail = function(a) {
        var d = new MGEvent(MGEvent.LEVEL_FAIL || "LEVEL_FAIL");
        d.data = {
            level: a
        };
        b(d)
    };
    a.LevelWin = function(a) {
        var d = new MGEvent(MGEvent.LEVEL_WIN ||
            "LEVEL_WIN");
        d.data = {
            level: a
        };
        b(d)
    };
    a.ChangeScene = function(a, d) {
        var e = null;
        3 <= arguments.length && (e = arguments.slice(2));
        var f = MGEvent.CHANGE_SCENE || "CHANGE_SCENE";
        MGDelegate._eventMap[f] && 0 != MGDelegate._eventMap[f].length ? (f = new MGEvent(f), f.data = {
            callback: a,
            thisObj: d,
            args: e
        }, b(f)) : a.apply(d, e)
    };
    a.ShowAD = function(a, d) {
        var e = null;
        3 <= arguments.length && (e = arguments.slice(2));
        var f = MGEvent.REWARD_AD || "REWARD_AD";
        MGDelegate._eventMap[f] && 0 != MGDelegate._eventMap[f].length ? (f = new MGEvent(f), f.data = {
            callback: a,
            thisObj: d,
            args: e
        }, b(f)) : a.apply(d, e)
    };
    a.ClickFullscreen = function() {
        a.FullscreenEnabled && b(new MGEvent(MGEvent.FULLSCREEN || "FULLSCREEN"))
    };
    return a
}();
App.init = function() {
    App.instance || (App.instance = new App)
};
App.prototype.__class__ = "App";
var BaseScene = cc.Scene.extend({
    _miniLogoBmp: null,
    onEnter: function() {
        this._super()
    },
    _createMiniLogo: function() {
        this._miniLogoBmp || (this._miniLogoBmp = new cc.Sprite(res.miniLogoUrl), this._miniLogoBmp.x = this._miniLogoBmp.width / 2, this._miniLogoBmp.y = this._miniLogoBmp.height / 2, this._miniLogoBmp.zIndex = 999, this.addChild(this._miniLogoBmp), flax.inputManager.addListener(this._miniLogoBmp, this.onMiniLogo, InputType.click, this))
    },
    registerSoundEffect: function(a) {
        BaseScene.SoundEffect = a
    },
    playEffect: function(a) {
        a ?
            flax.playEffect(a) : BaseScene.SoundEffect && flax.playEffect(BaseScene.SoundEffect)
    },
    bindFullScreenButton: function(a) {
        console.assert(a, "can not found fullScreenButton");
        flax.addListener(a, function() {
            App.ClickFullscreen();
            this.playEffect()
        }, null, this);
        a.visible = App.FullscreenEnabled
    },
    bindCreditsButton: function(a) {
        console.assert(a, "can not found creditsButton");
        flax.addListener(a, function() {
            App.ClickCredits();
            this.playEffect()
        }, null, this);
        a.visible = App.CreditsEnabled
    },
    bindMoreButton: function(a) {
        console.assert(a,
            "can not found moreButton");
        flax.addListener(a, function() {
            App.ClickMore();
            this.playEffect()
        }, null, this);
        a.visible = App.MoreGamesButtonEnabled
    },
    bindSoundButton: function(a) {
        console.assert(a, "can not found soundButton");
        this._soundButton = a;
        flax.getSoundEnabled() && a.gotoAndStop(0);
        flax.getSoundEnabled() || a.gotoAndStop(1);
        flax.addListener(a, function() {
            var b = flax.getSoundEnabled();
            a.gotoAndStop(b ? 1 : 0);
            flax.setSoundEnabled(!b);
            this.playEffect()
        }, null, this)
    },
    onMiniLogo: function(a, b) {
        App.ClickLogo()
    },
    setMiniLogo: function(a) {
        a =
            a.toLocaleUpperCase();
        this._createMiniLogo();
        if ("NONE" == a) this._miniLogoBmp.visible = !1, BaseScene.miniLogoNone = !0;
        else {
            BaseScene.miniLogoAlign = a;
            BaseScene.miniLogoNone = !1;
            this._miniLogoBmp.visible = !0;
            var b = 0,
                c = 0;
            switch (a) {
                case "BL":
                    b = this._miniLogoBmp.width / 2;
                    c = this._miniLogoBmp.height / 2;
                    break;
                case "BM":
                    b = cc.winSize.width / 2;
                    c = this._miniLogoBmp.height / 2;
                    break;
                case "BR":
                    b = cc.winSize.width - this._miniLogoBmp.width / 2;
                    c = this._miniLogoBmp.height / 2;
                    break;
                case "TL":
                    b = this._miniLogoBmp.width / 2;
                    c = cc.winSize.height -
                        this._miniLogoBmp.height / 2;
                    break;
                case "TM":
                    b = cc.winSize.width / 2;
                    c = cc.winSize.height - this._miniLogoBmp.height / 2;
                    break;
                case "TR":
                    b = cc.winSize.width - this._miniLogoBmp.width / 2;
                    c = cc.winSize.height - this._miniLogoBmp.height / 2;
                    break;
                case "MM":
                    b = cc.winSize.width / 2;
                    c = cc.winSize.height / 2;
                    break;
                default:
                    a = a.split(","), b = parseFloat(a[0]), c = parseFloat(a[1])
            }
            this._miniLogoBmp.x = b;
            this._miniLogoBmp.y = c
        }
    },
    getDisplayByName: function(a, b) {
        b || (b = this);
        if (b[a]) return b[a];
        for (var c = b.children, d = 0, e = c.length; d < e; d++) {
            var f =
                c[d];
            if (f.name == a) return f
        }
        return null
    }
});
BaseScene.miniLogoNone = !1;
BaseScene.miniLogoAlign = "TL";
BaseScene.SoundEffect = "";
BaseScene.VERSION = "2.2.3";
var res = {
        effect_water_l_weight_1_mp3: "res/effect/water_l_weight_1.mp3",
        effect_water_l_light_2_mp3: "res/effect/water_l_light_2.mp3",
        game_plist: "res/game.plist",
        game_bgblack_png: "res/game/bgblack.png",
        effect_click_mp3: "res/effect/click.mp3",
        sound_bg_mp3: "res/sound/bg.mp3",
        game_bg0_png: "res/game/bg0.png",
        game_bggray_png: "res/game/bggray.png",
        effect_water_s_l_1_mp3: "res/effect/water_s_l_1.mp3",
        game_png: "res/game.png"
    },
    res_resource = [],
    i;
for (i in res) res_resource.push(res[i]);
var Utils = Utils || {};
Utils.isArray = function(a) {
    return "[object Array]" == Object.prototype.toString.call(a)
};
Utils.isString = function(a) {
    return "[object String]" === Object.prototype.toString.call(a)
};
Utils.isNumber = function(a) {
    return "[object Number]" === Object.prototype.toString.call(a)
};
Utils.isObject = function(a) {
    return "[object Object]" === Object.prototype.toString.call(a)
};
Utils.log = function() {};
Utils.arrayLast = function(a) {
    return a[a.length - 1]
};
Utils.removeArrayItem = function(a, b) {
    if (b) {
        var c = a.indexOf(b);
        if (-1 !== c) return a.splice(c, 1), !0
    }
    return !1
};
Utils.copyArray = function(a) {
    for (var b = Array(a.length), c = 0, d = a.length; c < d; c++) Utils.isArray(a[c]) ? b[c] = Utils.copyArray(a[c]) : b[c] = a[c];
    return b
};
Utils.arrayEqualToArray = function(a, b) {
    if (!b) return !1;
    var c = a.length;
    if (c != b.length) return !1;
    for (var d = 0; d < c; d++)
        if (a[d] instanceof Array && b[d] instanceof Array) {
            if (!Utils.arrayEqualToArray(a[d], b[d])) return !1
        } else if (Utils.isObject(a[d]) && Utils.isObject(b[d])) {
        if (!Utils.objectEqualToObject(a[d], b[d])) return !1
    } else if (a[d] != b[d]) return !1;
    return !0
};
Utils.objectEqualToObject = function(a, b) {
    var c = "";
    for (c in a)
        if (a.hasOwnProperty(c) != b.hasOwnProperty(c) || typeof a[c] != typeof b[c]) return !1;
    for (c in b) {
        if (a.hasOwnProperty(c) != b.hasOwnProperty(c) || typeof a[c] != typeof b[c]) return !1;
        if (this.hasOwnProperty(c))
            if (a[c] instanceof Array && b[c] instanceof Array) {
                if (!Utils.arrayEqualToArray(a[c], b[c])) return !1
            } else if (a[c] instanceof Object && b[c] instanceof Object) {
            if (!Utils.objectEqualToObject(a[c], b[c])) return !1
        } else if (a[c] != b[c]) return !1
    }
    return !0
};
Utils.arrayDistinct = function(a) {
    for (var b = [], c = {}, d = 0, e = a.length; d < e; d++) Utils.isArray(a[d]) ? b.push(Utils.arrayDistinct(a[d])) : c[a[d]] || (b.push(a[d]), c[a[d]] = 1);
    return b
};
Utils.arrayContainElement = function(a, b) {
    if (Utils.isNumber(b) || Utils.isString(b)) return a.indexOf(b);
    var c, d;
    if (Utils.isObject(b))
        for (c = 0, d = a.length; c < d; c++)
            if (Utils.isObject(a[c]) && Utils.objectEqualToObject(a[c], b)) return c;
    if (Utils.isArray(b))
        for (c = 0, d = a.length; c < d; c++)
            if (Utils.isArray(a[c]) && Utils.arrayEquivalenceArray(a[c], b)) return c;
    return -1
};
Utils.arrayEquivalenceArray = function(a, b) {
    if (!b) return !1;
    var c = a.length,
        d = b.length;
    if (c != d) return !1;
    a = Utils.arrayDistinct(a);
    b = Utils.arrayDistinct(b);
    c = a.length;
    d = b.length;
    if (c != d) return !1;
    var e, f;
    for (e = 0; e < c; e++) {
        var g = !1;
        for (f = 0; f < d; f++)
            if (Utils.isArray(a[e]) && Utils.isArray(b[f]) && Utils.arrayEquivalenceArray(a[e], b[f])) {
                g = !0;
                break
            } else if (a[e] === b[f]) {
            g = !0;
            break
        }
        if (!g) return !1
    }
    return !0
};
Utils.convertNumStrArrToNumArr = function(a) {
    for (var b = 0, c = a.length; b < c; b++) Utils.isArray(a[b]) ? Utils.convertNumStrArrToNumArr(a[b]) : Utils.isString(a[b]) && !isNaN(Number(a[b])) && (a[b].match(/\.+/g) ? a[b] = parseFloat(a[b]) : a[b] = parseInt(a[b]));
    return a
};
Utils.convertNumArrToJsonStr = function(a) {
    for (var b = ["["], c = 0, d = a.length; c < d; c++) {
        var e = c < d - 1 ? "," : "]";
        Utils.isArray(a[c]) ? b.push(Utils.convertNumArrToJsonStr(a[c])) : b.push(a[c]);
        b.push(e)
    }
    return b.join("")
};
var xxhd = xxhd || {};
xxhd.unlockAll = !1;
xxhd.currentMoves = 0;
xxhd.groupData = null;
xxhd.itemLevelInfo = null;
xxhd.groupLevelNum = 30;
xxhd.levelInfo = {
    coin: 50,
    groups: []
};
xxhd.changeSceneSignal = null;
xxhd.initChangeSceneSignal = function() {
    xxhd.changeSceneSignal = new signals.Signal;
    xxhd.changeSceneSignal.add(function(a, b, c) {
        App.ChangeScene(function() {
            flax.replaceScene(a, b || cc.TransitionFade, c);
            xxhd.changeSceneSignal.removeAll();
            xxhd.changeSceneSignal = null
        })
    })
};
xxhd.changeSceneDispatch = function(a, b, c) {
    xxhd.changeSceneSignal || xxhd.initChangeSceneSignal();
    xxhd.changeSceneSignal && 0 < xxhd.changeSceneSignal.getNumListeners() && xxhd.changeSceneSignal.dispatch(a, b, c)
};
xxhd.addCoin = null;
xxhd.subCoin = null;
xxhd.getCoin = null;
xxhd.setCoin = null;
(function() {
    var a = 50;
    xxhd.addCoin = function(b) {
        b || (b = 1);
        a += b
    };
    xxhd.subCoin = function(b) {
        b || (b = 5);
        a -= b
    };
    xxhd.getCoin = function() {
        return a
    };
    xxhd.setCoin = function(b) {
        a = b
    }
})();
xxhd.saveHistory = function() {
    xxhd.levelInfo.coin = xxhd.getCoin();
    cc.sys.localStorage.setItem(cc.game.config.gameId || "f-f-o", JSON.stringify(xxhd.levelInfo))
};
xxhd.getHistory = function() {
    return JSON.parse(cc.sys.localStorage.getItem(cc.game.config.gameId || "f-f-o")) || null
};
xxhd.rm = function() {
    return cc.sys.localStorage.removeItem(cc.game.config.gameId || "f-f-o")
};
xxhd.initLevelInfo = function() {
    var a = xxhd.getHistory();
    if (a) xxhd.levelInfo = a, xxhd.setCoin(a.coin);
    else {
        xxhd.levelInfo.coin = xxhd.getCoin();
        for (var a = xxhd.groupLevelNum, b = 0, c = GameConfig.promp.length; b < c; b++) {
            0 === b % a && xxhd.levelInfo.groups.push({
                group: ~~(b / a),
                isDone: !1,
                isLock: 0 !== ~~(b / a),
                levels: []
            });
            var d = {
                level: b,
                isDone: !1,
                isLock: 0 !== b % a,
                moveNum: 0,
                mapSize: GameConfig.promp[b].size,
                group: ~~(b / a),
                groupIndex: b % a
            };
            Utils.arrayLast(xxhd.levelInfo.groups).levels.push(d)
        }
    }
};
var Pool = {
    _pool: {},
    putInPool: function(a) {
        var b = a.assetID;
        a.parent && a.destroy && a.destroy();
        this._pool[b] ? this._pool[b].push(a) : (this._pool[b] = []).push(a)
    },
    getFromPool: function(a) {
        if ((a = this._pool[a]) && 0 < a.length) {
            a = a.pop();
            if (a.onRecycle) a.onRecycle();
            return a
        }
        return null
    },
    drainPool: function() {
        for (var a in this._pool) this._pool[a] = null;
        this._pool = null
    }
};
(function(a) {
    var b = {};
    a.UI = b;
    b.StripLine = flax.Animator.extend({
        _speedX: 0,
        _speedY: 0,
        _edge: null,
        ctor: function(a) {
            this._super(res.game_plist, a);
            this._edge = cc.rect()
        },
        onEnter: function() {
            this._super()
        },
        setEdge: function(a, b, e, f) {
            this._edge.x = a - 0.6 * this.width;
            this._edge.y = b;
            this._edge.width = e;
            this._edge.height = f
        },
        getSpeed: function() {
            return 0 === this.rotation ? this._speedX : this._speedY
        },
        setSpeed: function(a) {
            0 === this.rotation ? this._speedX = a : this._speedY = a
        },
        wander: function() {
            0 === this.rotation ? (this.x += this._speedX,
                this.x < this._edge.x - this._edge.width && (this._speedX = -this._speedX, this.x = this._edge.x - this._edge.width), this.x > this._edge.x + this._edge.width && (this._speedX = -this._speedX, this.x = this._edge.x + this._edge.width)) : (this.y += this._speedY, this.y < this._edge.y - this._edge.width && (this._speedY = -this._speedY, this.y = this._edge.y - this._edge.width), this.y > this._edge.y + this._edge.width && (this._speedY = -this._speedY, this.y = this._edge.y + this._edge.width))
        }
    });
    a = b.StripLine.prototype;
    a.speed;
    cc.defineGetterSetter(a, "speed",
        a.getSpeed, a.setSpeed);
    b.Block = flax.MovieClip.extend({
        ctor: function() {
            this._super(res.game_plist, "block")
        }
    });
    b.fixtureIndex = -1;
    b.Fixture = flax.MovieClip.extend({
        _assetIndex: -1,
        ctor: function(a) {
            Utils.isNumber(a) || (a = ++b.fixtureIndex);
            this._super(res.game_plist, "c" + a);
            this._assetIndex = a;
            b.fixtureIndex = a
        },
        onEnter: function() {
            this._super()
        },
        getAssetIndex: function() {
            return this._assetIndex
        },
        setAssetIndex: function(a) {
            this._assetIndex = a
        }
    });
    a = b.Fixture.prototype;
    a.constructor = b.Fixture;
    a.assetIndex;
    cc.defineGetterSetter(a,
        "assetIndex", a.getAssetIndex, a.setAssetIndex);
    b.Line = flax.MovieClip.extend({
        _assetIndex: -1,
        ctor: function(a) {
            this._super(res.game_plist, "l" + a);
            this._assetIndex = a
        },
        setDirection: function(a) {
            switch (a) {
                case 1:
                case 3:
                    this.setRotation(90);
                    break;
                case 2:
                case 4:
                    this.setRotation(0)
            }
        },
        getAssetIndex: function() {
            return this._assetIndex
        },
        setAssetIndex: function(a) {
            this._assetIndex = a
        }
    });
    a = b.Line.prototype;
    a.constructor = b.Line;
    a.assetIndex;
    cc.defineGetterSetter(a, "assetIndex", a.getAssetIndex, a.setAssetIndex);
    b.Lattice =
        flax.MovieClip.extend({
            _fixtureSprite: null,
            _lineSprite: null,
            _blockSprite: null,
            _isFixtureFlag: !1,
            _isLineFlag: !1,
            _isBlockFlag: !1,
            row: -1,
            column: -1,
            ID: -1,
            startID: -1,
            endID: -1,
            _extraScale: 1,
            headPos: null,
            tailPos: null,
            isStart: !1,
            isEnd: !1,
            _oriScale: 1,
            ctor: function() {
                this._super(res.game_plist, "lattice");
                this._extraScale = 1
            },
            onEnter: function() {
                this._super();
                this.headPos = [-1, -1];
                this.tailPos = [-1, -1];
                this._isBlockFlag = this._isLineFlag = this._isFixtureFlag = !1
            },
            onExit: function() {
                this._super();
                this.tailPos = this.headPos =
                    this._blockSprite = this._lineSprite = this._fixtureSprite = null;
                this.endID = this.startID = -1
            },
            setExtraScale: function(a) {
                this._extraScale = a;
                this._oriScale = this.scaleX / a
            },
            setScale: function(a) {
                this._super(a);
                this._oriScale = a / this._extraScale
            },
            setMapPos: function(a, b) {
                this.row = a;
                this.column = b
            },
            getFixtureIndex: function() {
                return this._fixtureSprite ? this._fixtureSprite.assetIndex : this._lineSprite ? this._lineSprite.assetIndex : -1
            },
            isConnectedState: function() {
                return -1 != this.endID && -1 != this.startID
            },
            connect: function(a) {
                return this.isStart &&
                    a.isEnd ? (this.endID = a.ID, a.startID = this.ID, !0) : this.isEnd && a.isStart ? (this.startID = a.ID, a.endID = this.ID, !0) : !1
            },
            disconnect: function(a) {
                if (this.isStart && !this.isEnd) {
                    if (this.endID = -1, !a.isStart && a.isEnd) return a.startID = -1, !0
                } else if (!this.isStart && this.isEnd && (this.startID = -1, a.isStart && !a.isEnd)) return a.endID = -1, !0;
                return !1
            },
            isNeighbor: function(a) {
                var b = this.width * this._oriScale;
                return this != a && ~~cc.pDistance(this.getPosition(), a.getPosition()) === ~~b
            },
            isOppositeNeighbor: function(a) {
                var b = this.width *
                    this._oriScale;
                return this != a && ~~cc.pDistance(this.getPosition(), a.getPosition()) === ~~Math.sqrt(b * b * 2)
            },
            isSameFixtureType: function(a) {
                return this.getFixtureIndex() === a.getFixtureIndex()
            },
            isStartOrEnd: function() {
                return -1 != this.endID || -1 != this.startID || this.isStart || this.isEnd
            },
            initFixturePos: function(a) {
                this._fixtureSprite = a;
                a.setPosition(this.x, this.y);
                this._isFixtureFlag = !0;
                a.scaleX != 0.7 * this._oriScale && a.setScale(0.7 * this._oriScale);
                return a
            },
            initLinePos: function(a, b) {
                a.scaleX != this._oriScale &&
                    a.setScale(this._oriScale);
                var e = this.height / 2 * this._oriScale;
                switch (b) {
                    case 1:
                        a.setPosition(this.x, this.y - e);
                        break;
                    case 2:
                        a.setPosition(this.x + e, this.y);
                        break;
                    case 3:
                        a.setPosition(this.x, this.y + e);
                        break;
                    case 4:
                        a.setPosition(this.x - e, this.y)
                }
                this._lineSprite = a;
                this._isLineFlag = !0;
                return a
            },
            initBlockPos: function(a) {
                this._blockSprite = a;
                a.scaleX != this._oriScale && a.setScale(this._oriScale);
                a.setPosition(this.x, this.y);
                this._isBlockFlag = !0;
                return a
            },
            hasBlock: function() {
                return this._isBlockFlag
            },
            hasFixture: function() {
                return this._isFixtureFlag
            },
            hasLine: function() {
                return this._isLineFlag
            },
            isFixtureEqualTo: function(a) {
                return this._isFixtureFlag && a._fixtureSprite ? this._fixtureSprite.assetID == a._fixtureSprite.assetID : !1
            },
            removeBlock: function() {
                return this._blockSprite ? (this._blockSprite.removeFromParent(), Pool.putInPool(this._blockSprite), this._blockSprite = null, this._isBlockFlag = !1, !0) : !1
            },
            removeLine: function() {
                return this._lineSprite ? (this._lineSprite.removeFromParent(), Pool.putInPool(this._lineSprite), this._lineSprite = null, this._isLineFlag = !1, !0) : !1
            },
            removeFixture: function() {
                this._fixtureSprite && (this._fixtureSprite.removeFromParent(), Pool.putInPool(this._fixtureSprite), this._fixtureSprite = null, this._isFixtureFlag = !1)
            },
            reset: function() {
                this.removeBlock();
                this.removeFixture();
                this.removeLine();
                this.headPos[0] = -1;
                this.headPos[1] = -1;
                this.tailPos[0] = -1;
                this.endID = this.startID = this.tailPos[1] = -1;
                this.isEnd = this.isStart = !1
            }
        })
})(window);
var LinkContainer = cc.Node.extend({
    _linkScale: 1,
    _linkData: null,
    _linkWidth: 0,
    _linkHeight: 0,
    _blockNum: 0,
    _path: null,
    _paths: null,
    _lines: null,
    _moves: 0,
    _connectNum: 0,
    _coverage: 0,
    _proportion: 0,
    onMoveChanged: null,
    tipToDone: !1,
    searchToDone: !1,
    onEnter: function() {
        this._super();
        this._paths = [];
        this.onMoveChanged = new signals.Signal;
        this._blockNum = this._coverage = this._connectNum = this._moves = 0;
        this.tipToDone = !1
    },
    _dispatchSignals: function() {
        0 > this._moves && (this._moves = 0);
        0 > this._connectNum && (this._connectNum = 0);
        0 >
            this._coverage && (this._coverage = 0);
        0 < this.onMoveChanged.getNumListeners() && this.onMoveChanged.dispatch(this._moves, this._connectNum, Math.round(this._coverage))
    },
    setLinkScale: function(a) {
        this._linkScale = a
    },
    setLinkData: function(a) {
        this._linkData = cc.copyArray(a);
        this._initProportion()
    },
    setBlockNum: function(a) {
        this._blockNum = a;
        this._initProportion()
    },
    setLinkContent: function(a, b) {
        this._linkWidth = a;
        this._linkHeight = b;
        this._initProportion()
    },
    _initProportion: function() {
        0 != this._linkWidth && this._linkData &&
            (this._proportion = 100 / (this._linkWidth * this._linkHeight - this._linkData.length - this._blockNum))
    },
    refreshData: function() {
        this._coverage = this._connectNum = this._moves = this._paths.length = 0;
        this.searchToDone = this.tipToDone = !1;
        this._dispatchSignals()
    },
    _getAnPath: function() {
        if (0 >= this._paths.length) return Utils.copyArray(this._linkData[flax.randInt(0, this._linkData.length)]);
        for (var a = Utils.copyArray(this._linkData), b = 0, c = this._paths.length; b < c; b++) {
            var d = Utils.arrayContainElement(a, this._paths[b]); - 1 != d &&
                a.splice(d, 1)
        }
        1 === a.length && (this.tipToDone = !0);
        return 0 < a.length ? a[flax.randInt(0, a.length)] : null
    },
    tip: function() {
        var a = this._getAnPath();
        if (a && 0 < a.length) {
            this._path = a;
            var b = this.parent._lattices,
                c = b[a[0] - 1],
                d = b[Utils.arrayLast(a) - 1];
            !this._removePath(this._searchPath(c)) && this._removePath(this._searchPath(d));
            c.connect(d) && this._connectNum++;
            for (var d = 1, e = a.length; d < e; d++) {
                var f = b[a[d] - 1];
                f && f.hasLine() && this._removePath(this._searchPath(f), f, !0);
                c = this._checkDirection([c.ID, f.ID]);
                this._addLineSprite(f,
                    c);
                c = f
            }
            this._paths.push(a);
            this._moves++;
            this._dispatchSignals();
            this.parent.checkOver();
            return !0
        }
        return !1
    },
    _addLineSprite: function(a, b) {
        var c = this._getStartLattice().getFixtureIndex(),
            c = Pool.getFromPool("l" + c) || new UI.Line(c);
        c.setDirection(b);
        a.initLinePos(c, b);
        this.addChild(c);
        this._coverage += this._proportion
    },
    _searchPath: function(a) {
        for (var b = 0, c = this._paths.length; b < c; b++) {
            var d = this._paths[b];
            if (d)
                for (var e = 0, f = d.length; e < f; e++)
                    if (d[e] === a.ID + 1) return d
        }
        return []
    },
    _checkDirection: function(a) {
        return 1 ===
            a[1] - a[0] ? (Utils.log("--right--"), 4) : -1 === a[1] - a[0] ? (Utils.log("--left--"), 2) : a[1] - a[0] === this._linkHeight ? (Utils.log("--top--"), 1) : a[1] - a[0] === -this._linkHeight ? (Utils.log("--bottom--"), 3) : (Utils.log("---moving-no-dir"), -1)
    },
    _getStartLattice: function() {
        return this.parent._lattices[this._path[0] - 1]
    },
    _getLattice: function(a) {
        return this.parent._latticeMap.getObjects1(a.x, a.y)[0]
    },
    _removePath: function(a, b, c) {
        if (a && !(0 >= a.length)) {
            var d = function(a, b, d, k) {
                var m = k.parent._lattices,
                    n;
                0 == a && (a = -1);
                c && (m[b[0] -
                    1].disconnect(m[Utils.arrayLast(b) - 1]) && k._connectNum--, a--, -2 === a && (a = -1));
                a += 1;
                for (var p = b.length; a < p; a++) {
                    n = b[a] - 1;
                    if (m[n]) {
                        if (n = m[n].removeLine()) k._coverage -= k._proportion
                    } else break;
                    b.splice(a, 1);
                    p--;
                    a--
                }
                return 1 === b.length ? (m[b[0] - 1] && (n = m[b[0] - 1].removeLine()) && (k._coverage -= k._proportion), Utils.removeArrayItem(d, b), !0) : !1
            };
            if (!b) return d(-1, a, this._paths, this);
            if (!a || 0 >= a.length) return !1;
            b = a.indexOf(b.ID + 1);
            if (-1 != b) return d(b, a, this._paths, this)
        }
    },
    _findNeighbor: function(a) {
        var b = a.row,
            c =
            a.column,
            d = this._linkWidth;
        a = {
            tx: b,
            ty: c + 1 > d - 1 ? -1 : c + 1
        };
        var e = {
                tx: b + 1 > this._linkHeight - 1 ? -1 : b + 1,
                ty: c
            },
            f = {
                tx: 0 > b - 1 ? -1 : b - 1,
                ty: c
            },
            g = this,
            k = function(a) {
                return -1 != a.tx && -1 != a.ty ? g.parent._lattices[a.tx * d + a.ty] : null
            },
            m = [];
        (b = k({
            tx: b,
            ty: 0 > c - 1 ? -1 : c - 1
        })) && m.push(b);
        (b = k(a)) && m.push(b);
        (b = k(e)) && m.push(b);
        (b = k(f)) && m.push(b);
        return m
    },
    _findNeighborFixture: function(a) {
        if (a && a.hasLine() && !a.hasFixture()) {
            var b = this._findNeighbor(a);
            if (0 < b.length)
                for (var c = 0, d = b.length; c < d; c++) {
                    var e = b[c];
                    if (e.hasFixture() && e.isSameFixtureType(a)) return e
                }
        }
        return null
    },
    _findOppositeNeighborOverlap: function(a, b) {
        if (a && b)
            for (var c = this._findNeighbor(a), d = this._findNeighbor(b), e = 0, f = c.length; e < f; e++)
                for (var g = 0, k = d.length; g < k; g++)
                    if (c[e].ID === d[g].ID && (b.isSameFixtureType(c[e]) || !c[e].hasFixture() && !c[e].hasBlock())) return c[e];
        return null
    },
    _savePath: function(a) {
        a && -1 === this._paths.indexOf(a) && 1 < a.length && this._paths.push(this._path)
    },
    _isInLine: function(a, b) {
        return -1 !== a.indexOf(b.ID + 1)
    },
    _preLattice: null,
    _pressConnected: !1,
    onPressCallBack: function(a, b) {
        this._path = [];
        var c = this._getLattice(a.getLocation()),
            d;
        this._path = this._searchPath(c);
        if (0 >= this._path.length && c.hasFixture()) {
            var e = null;
            c.isStart ? e = this.parent._lattices[c.tailPos[0] * this._linkWidth + c.tailPos[1]] : c.isEnd && (e = this.parent._lattices[c.headPos[0] * this._linkWidth + c.headPos[1]]);
            e && this._removePath(this._searchPath(e));
            this._path.push(c.ID + 1);
            this._preLattice = c
        } else 0 < this._path.length && (e = this._getStartLattice(), d = this.parent._lattices, e.isConnectedState() && c.hasFixture() ? ((d = d[this._path[0] -
            1].disconnect(d[Utils.arrayLast(this._path) - 1])) && this._connectNum--, this._removePath(this._path, e), this._path.push(c.ID + 1), this._preLattice = c) : !e.isConnectedState() && c.hasFixture() ? (this._preLattice = c, this._removePath(this._path, c), this._path.push(c.ID + 1)) : c.hasLine() && ((d = d[this._path[0] - 1].disconnect(d[Utils.arrayLast(this._path) - 1])) && this._connectNum--, this._preLattice = c, this._removePath(this._path, c), Utils.log(this._path, "[]")));
        (c.hasFixture() || c.hasLine()) && this._dispatchSignals()
    },
    onMoveCallBack: function(a,
        b) {
        var c = this._getLattice(a.getLocation());
        if (c && this._preLattice) {
            var d = "undefined" == typeof Utils.arrayLast(this._path),
                e = this._preLattice.ID === c.ID,
                f = this._getStartLattice().isConnectedState() && !c.hasLine() && this._preLattice.isNeighbor(c),
                g = c.isConnectedState() && !this._preLattice.isSameFixtureType(c),
                k = this._preLattice.hasFixture() && c.hasFixture() && !this._preLattice.isSameFixtureType(c);
            d || c.hasBlock() || e || f || g || k || (e = null, this._breakPointLine(c) || !this._preLattice.isNeighbor(c) && !this._isInLine(this._path,
                c)) || (d = this._checkDirection([this._preLattice.ID, c.ID]), c.hasFixture() && c.isFixtureEqualTo(this._getStartLattice()) && c.ID + 1 != Utils.arrayLast(this._path) && c.ID + 1 != this._path[0] ? (this._path.push(c.ID + 1), this._addLineSprite(c, d), this._getStartLattice().connect(c), this._moves++, this._connectNum++, this._preLattice = c, flax.playEffect(res.effect_water_l_weight_1_mp3), Utils.log("--end-draw-line--")) : c.hasLine() || c.hasFixture() || c.ID + 1 == Utils.arrayLast(this._path) || c.ID + 1 == this._path[0] ? c.hasLine() ? (e = this.parent._lattices,
                c.isSameFixtureType(this._preLattice) ? (this._preLattice = c, (e = e[this._path[0] - 1].disconnect(e[Utils.arrayLast(this._path) - 1])) && this._connectNum--, this._removePath(this._path, c)) : this._preLattice.isConnectedState() || ((e = e[this._path[0] - 1].disconnect(e[Utils.arrayLast(this._path) - 1])) && this._connectNum--, this._removePath(this._searchPath(c), c, !0), this._path.push(c.ID + 1), this._preLattice = c, this._addLineSprite(c, d))) : c.hasFixture() && c.isSameFixtureType(this._preLattice) && (e = this.parent._lattices, (e = e[this._path[0] -
                1].disconnect(e[Utils.arrayLast(this._path) - 1])) && this._connectNum--, this._preLattice = c, this._removePath(this._path, c), this._path.push(c.ID + 1)) : (this._path.push(c.ID + 1), this._preLattice = c, this._addLineSprite(c, d)), (c.hasFixture() || c.hasLine()) && this._dispatchSignals())
        }
    },
    onUpCallBack: function(a, b) {
        var c = this._findNeighborFixture(this._preLattice);
        c && -1 === this._path.indexOf(c.ID + 1) ? (this._path.push(c.ID + 1), this._savePath(this._path), this._addLineSprite(c, this._checkDirection([this._preLattice.ID, c.ID])),
            this._getStartLattice().connect(c), flax.playEffect(res.effect_water_l_weight_1_mp3), this._moves++, this._connectNum++, this.searchToDone = !0, Utils.log("--end-draw-line--")) : this._savePath(this._path);
        this._preLattice = null;
        c && this._dispatchSignals();
        this.parent.checkOver();
        Utils.log(this._path.join("-\x3e"))
    },
    _breakPointLine: function(a) {
        if (!this._getStartLattice().isConnectedState() && this._preLattice.isOppositeNeighbor(a) && (!a.hasFixture() || !a.isConnectedState() && a.isSameFixtureType(this._preLattice))) {
            var b =
                this._findOppositeNeighborOverlap(a, this._preLattice);
            if (b) {
                if (b.hasLine())
                    if (a.hasFixture() && a.isSameFixtureType(b))
                        if (a != this._getStartLattice()) {
                            if (this._removePath(this._path, b), this._preLattice = a, this._path.push(a.ID + 1), this._addLineSprite(a, this._checkDirection([b.ID, a.ID])), b = this._getStartLattice().connect(a)) this._connectNum++, this._moves++
                        } else this._removePathIsStartFromEndLattice(a);
                else if (this._preLattice.hasLine() && a.hasLine() && this._preLattice.isSameFixtureType(a)) this._removePathIsStartFromEndLattice(a);
                else if (!a.hasLine() && !a.hasFixture() || this._preLattice.isSameFixtureType(a))
                    if (a.hasLine() || a.hasFixture() || this._preLattice.isSameFixtureType(b)) {
                        var c = this.parent._lattices;
                        (c = c[this._path[0] - 1].disconnect(c[Utils.arrayLast(this._path) - 1])) && this._connectNum--;
                        this._removePath(this._path, b);
                        this._path.push(a.ID + 1);
                        this._addLineSprite(a, this._checkDirection([b.ID, a.ID]));
                        this._preLattice = a;
                        (b = this._getStartLattice().connect(a)) && (this._connectNum++, this._moves++)
                    } else this._removePath(this._searchPath(b),
                        b, !0), this._drawCrossPath(b, a);
                else this._removePath(this._searchPath(a), a, !0), this._removePath(this._searchPath(b), b, !0), this._drawCrossPath(b, a);
                else if (b.hasFixture()) b.hasFixture() && this._preLattice.isSameFixtureType(b) && (a.isSameFixtureType(b) || !a.hasFixture()) && b == this._getStartLattice() && (0 < this._path.length && ((c = this._getStartLattice().disconnect(b)) && this._connectNum--, a.hasLine() && this._removePath(this._searchPath(a), a, !0), this._removePath(this._path, b)), this._path.push(b.ID + 1), this._path.push(a.ID +
                    1), this._addLineSprite(a, this._checkDirection([b.ID, a.ID])), this._preLattice = a, (b = this._getStartLattice().connect(a)) && (this._connectNum++, this._moves++));
                else {
                    if (a.hasFixture() && !a.isSameFixtureType(this._preLattice)) return;
                    a.hasLine() && !this._preLattice.isSameFixtureType(a) ? (this._removePath(this._searchPath(a), a, !0), this._drawCrossPath(b, a)) : a.isStartOrEnd() && a == this._getStartLattice() || a.hasLine() && this._preLattice.isSameFixtureType(a) ? this._removePathIsStartFromEndLattice(a) : (this._path.push(b.ID +
                        1), this._path.push(a.ID + 1), this._addLineSprite(b, this._checkDirection([this._preLattice.ID, b.ID])), this._addLineSprite(a, this._checkDirection([b.ID, a.ID])), this._preLattice = a, (b = this._getStartLattice().connect(a)) && (this._connectNum++, this._moves++))
                }(a.hasFixture() || a.hasLine()) && this._dispatchSignals();
                return !0
            }
        }
    },
    _removePathIsStartFromEndLattice: function(a) {
        this._removePath(this._path, a); - 1 === this._path.indexOf(a.ID + 1) && this._path.push(a.ID + 1);
        this._preLattice = a
    },
    _drawCrossPath: function(a, b) {
        this._removePath(this._path,
            a); - 1 == this._path.indexOf(a.ID + 1) && (this._path.push(a.ID + 1), this._addLineSprite(a, this._checkDirection([this._preLattice.ID, a.ID])));
        this._path.push(b.ID + 1);
        this._addLineSprite(b, this._checkDirection([a.ID, b.ID]));
        this._preLattice = b;
        this._getStartLattice().connect(b) && (this._connectNum++, this._moves++)
    },
    onExit: function() {
        this._paths = this._lines = this._linkData = this._preLattice = null;
        this.onMoveChanged.removeAll();
        this.onMoveChanged = null;
        this._super()
    }
});
var LatticeContainer = flax.MovieClip.extend({
    _latticeMap: null,
    _latticeContainer: null,
    linkContainer: null,
    _fixtureContainer: null,
    _lattices: null,
    _fixtureData: null,
    _row: 0,
    _column: 0,
    _tileWidth: 0,
    _tileHeight: 0,
    onEnter: function() {
        this._super();
        this._lattices = {};
        this.bg.removeFromParent();
        this._latticeContainer = new cc.Node;
        this._latticeContainer.setPosition(0, 0);
        this.addChild(this._latticeContainer);
        this._latticeMap = new flax.TileMap;
        this.addChild(this._latticeMap);
        this.linkContainer = new LinkContainer;
        this.addChild(this.linkContainer);
        this._fixtureContainer = new cc.Node;
        this.addChild(this._fixtureContainer)
    },
    initMap: function(a, b, c, d) {
        for (var e = 0, f = this._latticeContainer.childrenCount; e < f; e++) {
            var g = this._latticeContainer.children[e];
            g && g.reset()
        }
        if (this._tileWidth !== a || this._tileHeight !== b || this._row !== c || this._column !== d) {
            this._tileWidth = a;
            this._tileHeight = b;
            this._row = c;
            this._column = d;
            this._lattices && (this._lattices = {});
            for (; 0 < this._latticeContainer.childrenCount;) g = this._latticeContainer.children[0], g.removeFromParent(!0), Pool.putInPool(g);
            this._latticeMap.init(a, b, c, d);
            this._latticeMap.clear();
            b = 1;
            for (e = 0; e < c; e++)
                for (f = 0; f < d; f++) g = Pool.getFromPool("lattice") || new UI.Lattice, b = a / g.width, g.setScale(1.015 * b), g.setExtraScale(1.015), this._latticeContainer.addChild(g), this._latticeMap.snapToTile(g, e, f, !0), g.setMapPos(f, e), g.ID = f * c + e, this._lattices[g.ID] = g;
            this.linkContainer.setLinkScale(b);
            this.linkContainer.setLinkContent(c, d)
        }
    },
    refreshFixture: function(a) {
        a || (a = this._fixtureData);
        for (var b = 0, c = this._latticeContainer.childrenCount; b < c; b++) {
            var d =
                this._latticeContainer.children[b];
            d && d.reset()
        }
        for (this.linkContainer.refreshData(); 0 < this.linkContainer.childrenCount;) b = this.linkContainer.children[0], b.removeFromParent(), Pool.putInPool(b);
        this.initFixture(a)
    },
    initFixture: function(a) {
        flax.inputManager.addListener(this, this._onPress, InputType.press, this);
        UI.fixtureIndex = -1;
        this.linkContainer.setLinkData(a);
        this.linkContainer.refreshData();
        this._fixtureData = a;
        for (var b = null, c = -1, b = -1, d = null, e = c = null, f = 0, g = a.length; f < g; f++) b = a[f], e = Pool.getFromPool("c" +
            f) || new UI.Fixture(f), c = b[0] - 1, d = this._lattices[c], d.isStart = !0, d.startID = c, d.headPos[0] = d.row, d.headPos[1] = d.column, d.initFixturePos(e), this._fixtureContainer.addChild(e), b = b[b.length - 1] - 1, c = this._lattices[b], c.endID = b, c.isEnd = !0, c.headPos[0] = d.row, c.headPos[1] = d.column, c.tailPos[0] = c.row, c.tailPos[1] = c.column, e = c.initFixturePos(this._cloneDisplay(e)), this._fixtureContainer.addChild(e), d.tailPos[0] = c.row, d.tailPos[1] = c.column;
        this.initBlock(a)
    },
    initBlock: function(a) {
        var b = Utils.copyArray(a),
            c = 0,
            d, e = [],
            f = [];
        a = 0;
        for (d = b.length; a < d; a++) f = f.concat(b[a]);
        f.sort(function(a, b) {
            return a - b
        });
        a = 0;
        for (d = f.length; a < d; a++) c++, -1 == f.indexOf(c) && (e.push(c), c++);
        this.linkContainer.setBlockNum(e.length);
        a = 0;
        for (d = e.length; a < d; a++) b = this._lattices[e[a] - 1], c = Pool.getFromPool("block") || new UI.Block, b.initBlockPos(c), this._fixtureContainer.addChild(c)
    },
    _cloneDisplay: function(a, b, c) {
        b = flax.assetsManager.createDisplay(a.assetsFile, a.assetID, {
            parent: c ? a.parent : null
        }, b, a.clsName);
        c && b.setPosition(a.getPosition());
        b.setScale(a.getScale());
        b.setRotation(a.rotation);
        b.zIndex = a.zIndex;
        b.assetIndex = a.assetIndex;
        return b
    },
    _onPress: function(a, b) {
        flax.inputManager.addListener(this, this._onMove, InputType.move, this);
        flax.inputManager.addListener(this, this._onUp, InputType.up, this);
        this.linkContainer.onPressCallBack(a, b)
    },
    _onMove: function(a, b) {
        this.linkContainer.onMoveCallBack(a, b)
    },
    _onUp: function(a, b) {
        flax.inputManager.removeListener(this, this._onMove, InputType.move);
        flax.inputManager.removeListener(this, this._onUp,
            InputType.up);
        this.linkContainer.onUpCallBack(a, b)
    },
    checkOver: function() {
        var a, b;
        a = 0;
        for (b = this._fixtureData.length; a < b; a++)
            if (!this._lattices[this._fixtureData[a][0] - 1].isConnectedState()) return !1;
        a = 0;
        for (b = this._latticeContainer.childrenCount; a < b; a++) {
            var c = this._latticeContainer.children[a];
            if (!c.hasFixture() && !c.hasLine() && !c.hasBlock()) return !1
        }
        Utils.log("||||--game-over--||||");
        flax.inputManager.removeListener(this, this._onPress, InputType.press);
        App.LevelWin("group:" + xxhd.itemLevelInfo.group +
            ",level:" + xxhd.itemLevelInfo.groupIndex);
        xxhd.addCoin(GameConfig.levelCoin[xxhd.itemLevelInfo.level]);
        if (0 < xxhd.itemLevelInfo.moveNum && 0 < xxhd.currentMoves && xxhd.itemLevelInfo.moveNum > xxhd.currentMoves || 0 === xxhd.itemLevelInfo.moveNum) xxhd.itemLevelInfo.moveNum = xxhd.currentMoves;
        this.parent.coinTXT.setString(xxhd.getCoin());
        xxhd.itemLevelInfo.isDone = !0;
        this.scheduleOnce(function() {
            this._showDone()
        }, 0.4);
        return !0
    },
    _showDone: function() {
        this.parent.mcDone.visible = !0;
        this.parent.mcDone.btnMusic.gotoAndStop(flax.getSoundEnabled() ?
            0 : 1);
        flax.currentScene.setMiniLogo("TL");
        var a = xxhd.itemLevelInfo.groupIndex + 1;
        a < xxhd.groupLevelNum ? xxhd.levelInfo.groups[xxhd.itemLevelInfo.group].levels[a].isLock = !1 : (xxhd.levelInfo.groups[xxhd.itemLevelInfo.group].isDone = !0, a = xxhd.itemLevelInfo.group + 1, a < xxhd.levelInfo.groups.length && (a = xxhd.levelInfo.groups[a], a.isLock = !1, a.levels[0].isLock = !1));
        xxhd.saveHistory()
    },
    tip: function() {
        return this.linkContainer.tip()
    },
    onExit: function() {
        this.linkContainer = this._fixtureData = this._latticeMap = this._latticeContainer =
            null;
        this._lattices = {};
        this._super()
    }
});
var StripContainer = cc.Node.extend({
    _strips: null,
    onEnter: function() {
        this._super();
        this._strips = [];
        this._initStrips();
        this.scheduleUpdate()
    },
    update: function(a) {
        a = 0;
        for (var b = this.childrenCount; a < b; a++) this.children[a].wander()
    },
    _initStrips: function() {
        var a = cc.winSize.width,
            b = cc.winSize.height,
            c = 0,
            d = 0,
            e, f, g = flax.randInt(5, 7),
            k = cc.winSize.height / g;
        for (e = 0; e < g; e++) f = Pool.getFromPool("strip" + flax.randInt(0, 8)) || new UI.StripLine("strip" + flax.randInt(0, 8)), f.setEdge(0, 0, a, b), f.x = flax.randInt(-f.width - a, a +
            f.width), f.y = 0 == c ? 2 * f.height : c + flax.randInt(k - f.height / 2, k + f.height), c = f.y, f.speed = [flax.randInt(-5, 0) / 10, flax.randInt(1, 10) / 10][flax.randInt(0, 2)], this._strips.push(f), this.addChild(f, flax.randInt(0, 10));
        g = flax.randInt(3, 5);
        c = cc.winSize.width / g;
        for (e = 0; e < g; e++) f = Pool.getFromPool("strip" + flax.randInt(0, 8)) || new UI.StripLine("strip" + flax.randInt(0, 8)), f.setRotation(90), f.setEdge(0, 0, a, b), f.y = flax.randInt(-f.width, b + f.width), f.x = 0 == d ? 2 * f.height : d + flax.randInt(c - f.height / 2, c + f.height), d = f.x, f.speed = [flax.randInt(-5, 0) / 10, flax.randInt(1, 10) / 10][flax.randInt(0, 2)], this._strips.push(f), this.addChild(f, flax.randInt(0, 10))
    },
    onExit: function() {
        this._super();
        for (this._strips = null; this.childrenCount;) {
            var a = this.children[0];
            a.removeFromParent();
            Pool.getFromPool(a)
        }
    }
});
var SmallLevelContainer = flax.MovieClip.extend({
    onEnter: function() {
        this._super()
    }
});
var DoneContainer = flax.MovieClip.extend({
    _listener: null,
    onEnter: function() {
        this._super();
        var a = this;
        this._listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: !0,
            onTouchBegan: function(b, c) {
                var d = b.getLocation();
                return !a.visible || a.btnScreen.mainCollider.containsPoint(d) || a.btnNext.mainCollider.containsPoint(d) || a.btnMore.mainCollider.containsPoint(d) || a.btnClose.mainCollider.containsPoint(d) ? !1 : !0
            }
        });
        cc.eventManager.addListener(this._listener, this.bg)
    },
    onExit: function() {
        this._super();
        cc.eventManager.removeListener(this._listener);
        this._listener = null
    }
});
var BaseLevel = flax.MovieClip.extend({
    _isLock: !1,
    _levelData: null,
    onEnter: function() {
        this._super();
        this._isLock = !1;
        this._levelData = null;
        flax.inputManager.addListener(this, this._onClickPress, InputType.press, this);
        flax.inputManager.addListener(this, this.onClickLevel, InputType.click, this);
        flax.inputManager.addListener(this, this._onClickUp, InputType.up, this)
    },
    setLockState: function(a) {
        xxhd.unlockAll && (a = !1);
        this.gotoAndStop(a ? 1 : 0);
        this._isLock = a
    },
    setLevelData: function(a) {
        this._levelData = a;
        this.setLockState(a.isLock)
    },
    _onClickPress: function() {
        this._isLock || this.setScale(0.95)
    },
    onClickLevel: function(a, b) {
        if (this._isLock) return !0;
        flax.inputManager.removeListener(b.currentTarget, this.onClickLevel, InputType.click);
        flax.playEffect(res.effect_click_mp3)
    },
    _onClickUp: function() {
        this._isLock || this.setScale(1)
    }
});
var SmallLevel = BaseLevel.extend({
    onEnter: function() {
        this._super()
    },
    setLevelData: function(a) {
        this._super(a);
        this["spLock" + this.currentFrame].visible = a.isDone;
        this.setLevelTXT(a.groupIndex + 1);
        this.setMapSize(a.mapSize);
        this.setMoveTXT(a.moveNum)
    },
    setLevelTXT: function(a) {
        this["levelTXT" + this.currentFrame].setString(a)
    },
    setMapSize: function(a) {
        this["sizeTXT" + this.currentFrame].setString(a + "x" + a)
    },
    setMoveTXT: function(a) {
        this["moveTXT" + this.currentFrame].setString(a)
    },
    onClickLevel: function(a, b) {
        this._super(a,
            b) || (xxhd.changeSceneDispatch("GameMain"), xxhd.itemLevelInfo = this._levelData, this._levelData = null)
    }
});
var BigLevel = BaseLevel.extend({
    onEnter: function() {
        this._super();
        this.scheduleTXT.setString("0/" + xxhd.groupLevelNum)
    },
    setLockState: function(a) {
        this._super(a);
        this["mcLock" + this.currentFrame].gotoAndStop(a && 1 !== this.currentFrame ? 1 : 0)
    },
    setLevelData: function(a) {
        this._super(a);
        var b = 0;
        if (a.isDone) b = a.levels.length;
        else {
            for (var c = 0, d = a.levels.length; c < d; c++) a.levels[c].isDone && b++;
            b === a.levels.length && (a.isDone = !0)
        }
        this.setScheduleStr(b);
        this.setProgress(b / a.levels.length * 100)
    },
    groupToStop: function(a) {
        this["mcName" +
            this.currentFrame].gotoAndStop(a)
    },
    setScheduleStr: function(a) {
        this.scheduleTXT && this.scheduleTXT.setString(a + "/" + xxhd.groupLevelNum)
    },
    setProgress: function(a) {
        this.spBar && (this.spBar.percentage = a)
    },
    onClickLevel: function(a, b) {
        this._super(a, b) || (xxhd.changeSceneDispatch("GameLevel", cc.TransitionFade), xxhd.groupData = this._levelData, this._levelData = null, xxhd.itemLevelInfo = null)
    }
});
var GameIndex = BaseScene.extend({
    gameMain: null,
    onEnter: function() {
        this._super();
        this.gameMain = flax.createDisplay(res.game_plist, "indexGame", {
            parent: this,
            x: cc.winSize.width / 2,
            y: cc.winSize.height / 2
        });
        this.setMiniLogo("TL");
        this.bindSoundButton(this.gameMain.btnMusic);
        this.bindMoreButton(this.gameMain.btnMore);
        this.bindCreditsButton(this.gameMain.btnCredits);
        this.bindFullScreenButton(this.gameMain.btnScreen);
        this.gameMain.addChild(new StripContainer, 0)
    },
    onEnterTransitionDidFinish: function() {
        flax.addListener(this.gameMain.btnPlay,
            this._onClickStart, InputType.click, this);
        flax.addListener(this.gameMain.btnHelp, this._onClickHelp, InputType.click, this)
    },
    _onClickStart: function() {
        flax.playEffect(res.effect_click_mp3);
        App.Start();
        xxhd.changeSceneDispatch("GameGroup")
    },
    _onClickHelp: function() {
        flax.playEffect(res.effect_click_mp3);
        xxhd.changeSceneDispatch("GameHelp")
    }
});
var GameHelp = BaseScene.extend({
    gameMain: null,
    onEnter: function() {
        this._super();
        var a = cc.winSize;
        this.gameMain = flax.assetsManager.createDisplay(res.game_plist, "helpGame", {
            parent: this,
            x: a.width / 2,
            y: a.height / 2
        });
        this.setMiniLogo("BL");
        this.bindSoundButton(this.gameMain.btnMusic);
        this.bindFullScreenButton(this.gameMain.btnScreen);
        this.bindMoreButton(this.gameMain.btnMore);
        this.gameMain.addChild(new StripContainer, 0)
    },
    onEnterTransitionDidFinish: function() {
        flax.inputManager.addListener(this.gameMain.btnBack,
            this._onClickBack, InputType.click, this);
        this.gameMain.mcHelp.setFPS(10);
        this.gameMain.mcHelp.gotoAndPlay(0)
    },
    _onClickBack: function() {
        flax.playEffect(res.effect_click_mp3);
        xxhd.changeSceneDispatch("GameIndex")
    }
});
var GameMain = BaseScene.extend({
    gameMain: null,
    _mcLattice: null,
    _adTime: 30,
    _timeInterval: 0,
    _adClickNum: 0,
    onEnter: function() {
        this._super();
        this.gameMain = flax.createDisplay(res.game_plist, "mainGame", {
            parent: this,
            x: cc.winSize.width / 2,
            y: cc.winSize.height / 2
        });
        this.setMiniLogo("BL");
        this.bindSoundButton(this.gameMain.btnMusic);
        this.bindMoreButton(this.gameMain.btnMore);
        this.bindFullScreenButton(this.gameMain.btnScreen);
        this.bindMoreButton(this.gameMain.mcDone.btnMore);
        this.bindFullScreenButton(this.gameMain.mcDone.btnScreen);
        this.gameMain.mcDone.btnMusic.visible = !1;
        this.gameMain.mcDone.visible = !1;
        this.gameMain.addChild(new StripContainer, 0);
        this._initGame()
    },
    onEnterTransitionDidFinish: function() {
        flax.inputManager.addListener(this.gameMain.btnRefresh, this._onClickRefresh, InputType.click, this);
        flax.inputManager.addListener(this.gameMain.btnTip, this._onClickTip, InputType.click, this);
        flax.inputManager.addListener(this.gameMain.btnBack, this._onClickBack, InputType.click, this);
        flax.inputManager.addListener(this.gameMain.mcDone.btnClose,
            this._onClickClose, InputType.click, this);
        flax.inputManager.addListener(this.gameMain.mcDone.btnNext, this._onClickNext, InputType.click, this);
        this.scheduleUpdate()
    },
    update: function(a) {
        this._timeInterval += a;
        this._timeInterval >= this._adTime && (this.unscheduleUpdate(), this._timeInterval = 0, this.gameMain.btnAd.gotoAndStop(0), flax.inputManager.addListener(this.gameMain.btnAd.children[0], this._onClickAd, InputType.click, this))
    },
    _onClickAd: function(a, b) {
        flax.inputManager.removeListener(b.currentTarget, this._onClickAd,
            InputType.click);
        flax.playEffect(res.effect_click_mp3);
        this._adClickNum++;
        xxhd.addCoin(flax.randInt(4, 10));
        xxhd.saveHistory();
        this.gameMain.btnAd.gotoAndStop(1);
        var c = this;
        App.ShowAD(function() {
            2 > c._adClickNum && c.scheduleUpdate();
            c.gameMain.coinTXT.setString(xxhd.getCoin())
        })
    },
    _initGame: function() {
        xxhd.currentMoves = 0;
        this.gameMain.btnAd.gotoAndStop(1);
        this.gameMain.coinTXT.setString(xxhd.getCoin());
        this._refreshLevelInfo();
        this._mcLattice.linkContainer.onMoveChanged.add(function(a, b, c) {
            Utils.log(a,
                b, c, "-\x3d-\x3d-\x3d\x3d-");
            xxhd.currentMoves = a;
            this.gameMain.moveTXT.setString(a);
            this.gameMain.mcDone.moveTXT.setString(a);
            this.gameMain.coverTXT.setString(c + "%")
        }, this)
    },
    _refreshLevelInfo: function() {
        this.gameMain.moveTXT.setString(0);
        this.gameMain.coverTXT.setString("0%");
        this.gameMain.coverTXT.setGap(-6);
        this._mcLattice = this.gameMain.mcLattice;
        this.gameMain.levelTXT.setString(xxhd.itemLevelInfo.groupIndex + 1);
        var a = xxhd.itemLevelInfo.mapSize,
            b = GameConfig.promp[xxhd.itemLevelInfo.level].data,
            c =
            this._mcLattice.width / a;
        this._mcLattice.initMap(c, c, a, a);
        this._mcLattice.initFixture(b)
    },
    _onClickRefresh: function() {
        this._mcLattice.refreshFixture();
        flax.playEffect(res.effect_click_mp3)
    },
    _onClickTip: function() {
        5 <= xxhd.getCoin() && this._mcLattice.tip() && (flax.playEffect(res.effect_click_mp3), xxhd.subCoin(5), this.gameMain.coinTXT.setString(xxhd.getCoin()), xxhd.saveHistory())
    },
    _onClickBack: function() {
        flax.playEffect(res.effect_click_mp3);
        xxhd.changeSceneDispatch("GameLevel");
        xxhd.saveHistory()
    },
    _onClickClose: function() {
        flax.playEffect(res.effect_click_mp3);
        xxhd.changeSceneDispatch("GameLevel");
        xxhd.saveHistory()
    },
    _onClickNext: function() {
        flax.playEffect(res.effect_click_mp3);
        var a = xxhd.itemLevelInfo.groupIndex + 1;
        if (a < xxhd.groupLevelNum) xxhd.itemLevelInfo = xxhd.levelInfo.groups[xxhd.itemLevelInfo.group].levels[a];
        else if (a = xxhd.itemLevelInfo.group + 1, a < xxhd.levelInfo.groups.length) xxhd.itemLevelInfo = xxhd.levelInfo.groups[a].levels[0];
        else {
            xxhd.changeSceneDispatch("GameGroup");
            return
        }
        xxhd.changeSceneDispatch("GameMain", cc.TransitionFade)
    },
    onExit: function() {
        this._super()
    }
});
var GameGroup = BaseScene.extend({
    gameMain: null,
    onEnter: function() {
        this._super();
        var a = cc.winSize;
        this.gameMain = flax.assetsManager.createDisplay(res.game_plist, "groupGame", {
            parent: this,
            x: a.width / 2,
            y: a.height / 2
        });
        this.setMiniLogo("BL");
        this.bindSoundButton(this.gameMain.btnMusic);
        this.bindMoreButton(this.gameMain.btnMore);
        this.bindFullScreenButton(this.gameMain.btnScreen);
        this.gameMain.addChild(new StripContainer, 0);
        this._initGame()
    },
    onEnterTransitionDidFinish: function() {
        flax.inputManager.addListener(this.gameMain.btnBack,
            this._onClickBack, InputType.click, this)
    },
    _initGame: function() {
        for (var a = xxhd.levelInfo.groups, b = 0, c = a.length; b < c; b++) {
            var d = this.gameMain["group" + b];
            d.setLevelData(a[b]);
            d.groupToStop(b)
        }
    },
    _onClickBack: function() {
        flax.playEffect(res.effect_click_mp3);
        xxhd.changeSceneDispatch("GameIndex")
    }
});
var GameLevel = BaseScene.extend({
    gameMain: null,
    _levels: null,
    _prevLevelNum: 0,
    _mcLevels: null,
    _pageIndex: 0,
    onEnter: function() {
        this._super();
        var a = cc.winSize;
        this.gameMain = flax.assetsManager.createDisplay(res.game_plist, "levelGame", {
            parent: this,
            x: a.width / 2,
            y: a.height / 2
        });
        this.setMiniLogo("BL");
        this.bindSoundButton(this.gameMain.btnMusic);
        this.bindMoreButton(this.gameMain.btnMore);
        this.bindFullScreenButton(this.gameMain.btnScreen);
        this.gameMain.addChild(new StripContainer, 0);
        this._initGame()
    },
    onEnterTransitionDidFinish: function() {
        flax.inputManager.addListener(this.gameMain.btnBack,
            this._onClickBack, InputType.click, this);
        flax.inputManager.addListener(this.gameMain.btnPrev, this._onClickPrev, InputType.click, this);
        flax.inputManager.addListener(this.gameMain.btnNext, this._onClickNext, InputType.click, this)
    },
    _initGame: function() {
        if (xxhd.itemLevelInfo) this._levels = xxhd.levelInfo.groups[xxhd.itemLevelInfo.group].levels, this._pageIndex = ~~(xxhd.itemLevelInfo.groupIndex / this.gameMain.mcLevel.childrenCount);
        else if (this._levels = xxhd.groupData.levels, !1 === xxhd.groupData.isDone) {
            for (var a =
                    0, b = 1, c = this._levels.length; b < c; b++)
                if (!1 === this._levels[b].isDone) {
                    a = b;
                    break
                }
            this._pageIndex = ~~((a - 1) / this.gameMain.mcLevel.childrenCount)
        }
        a = flax.assetsManager.cloneDisplay(this.gameMain.mcLevel, !1, !0);
        a.x += cc.winSize.width;
        this._mcLevels = [this.gameMain.mcLevel, a];
        this._initPage(0)
    },
    _initPage: function(a) {
        0 > this._pageIndex && (this._pageIndex = 0);
        a = this._mcLevels[a];
        var b = a.childrenCount;
        this._pageIndex > ~~(this._levels.length / b) && (this._pageIndex = ~~(this._levels.length / b));
        for (var c = b * this._pageIndex,
                d = c; d < b + c; d++) {
            var e = a.namedChildren["level" + (d - c)];
            e && (this._levels[d] ? (e.visible = !0, e.setLevelData(this._levels[d])) : e.visible = !1)
        }
    },
    _onClickBack: function() {
        flax.playEffect(res.effect_click_mp3);
        xxhd.changeSceneDispatch("GameGroup")
    },
    _onClickPrev: function(a, b) {
        if (0 !== this._pageIndex) {
            flax.playEffect(res.effect_click_mp3);
            var c = b.currentTarget;
            flax.inputManager.removeListener(c, this._onClickPrev, InputType.click);
            this._pageIndex--;
            var d = new cc.Sequence(new cc.MoveBy(0.3, cc.winSize.width, 0), cc.callFunc(function() {
                flax.inputManager.addListener(c,
                    this._onClickPrev, InputType.click, this)
            }, this));
            0 < this._mcLevels[0].x && 0 < this._mcLevels[1].x && (this._mcLevels[0].x > this._mcLevels[1].x ? this._mcLevels[0].x -= 2 * cc.winSize.width : this._mcLevels[1].x -= 2 * cc.winSize.width);
            this._initPage(5 >= Math.abs(this._mcLevels[0].x - cc.winSize.width / 2) ? 1 : 0);
            this._mcLevels[0].runAction(d);
            this._mcLevels[1].runAction(d.clone())
        }
    },
    _onClickNext: function(a, b) {
        if (this._pageIndex !== ~~(this._levels.length / this.gameMain.mcLevel.childrenCount)) {
            flax.playEffect(res.effect_click_mp3);
            var c = b.currentTarget;
            flax.inputManager.removeListener(c, this._onClickNext, InputType.click);
            this._pageIndex++;
            var d = new cc.Sequence(new cc.MoveBy(0.3, -cc.winSize.width, 0), cc.callFunc(function() {
                flax.inputManager.addListener(c, this._onClickNext, InputType.click, this)
            }, this));
            if (0 > this._mcLevels[0].x || 0 > this._mcLevels[1].x) this._mcLevels[0].x > this._mcLevels[1].x ? this._mcLevels[1].x += 2 * cc.winSize.width : this._mcLevels[0].x += 2 * cc.winSize.width;
            this._initPage(5 >= Math.abs(this._mcLevels[0].x - cc.winSize.width /
                2) ? 1 : 0);
            this._mcLevels[0].runAction(d);
            this._mcLevels[1].runAction(d.clone())
        }
    },
    onExit: function() {
        this._super();
        this._mcLevels = this._levels = null;
        xxhd.groupLevels = null
    }
});
cc.game.onStart = function() {
    cc.view.enableAutoFullScreen(!1);
    App.init(!0);
    cc.sys.os === cc.sys.OS_IOS || cc.sys.os === cc.sys.OS_OSX ? cc.view.enableRetina(!0) : cc.view.enableRetina(!1);
    flax.init(cc.ResolutionPolicy.SHOW_ALL);
    flax.registerScene("GameIndex", GameIndex);
    flax.registerScene("GameHelp", GameHelp);
    flax.registerScene("GameMain", GameMain);
    flax.registerScene("GameGroup", GameGroup);
    flax.registerScene("GameLevel", GameLevel);
    MGDelegate.addEventListener(MGEvent.ENTER_GAME || "ENTER_GAME", function() {
        MGDelegate.removeEventListener(MGEvent.ENTER_GAME ||
            "ENTER_GAME", arguments.callee, this);
        res.sound_bg_mp3 && flax.playMusic(res.sound_bg_mp3, !0);
        BaseScene.SoundEffect = res.effect_click_mp3;
        App.ChangeScene(function() {
            flax.replaceScene("GameIndex")
        })
    }, this);
    Preloader.preload(res_resource, function() {
        xxhd.initLevelInfo()
    }, this)
};
MGDelegate.addEventListener(MGEvent.GAME_STARTUP || "GAME_STARTUP", function() {
    MGDelegate.removeEventListener(MGEvent.STARTUP || "GAME_STARTUP", arguments.callee, this);
    cc.game.run()
}, this);