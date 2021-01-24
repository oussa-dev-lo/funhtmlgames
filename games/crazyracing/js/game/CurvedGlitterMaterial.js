var touch, __extends = this && this.__extends || function() {
    var e = function(t, r) {
        return (e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(t, r)
    };
    return function(t, r) {
        function n() {
            this.constructor = t
        }
        e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
    }
}();
! function(e) {
    var t = function(e) {
        function t() {
            var r = e.call(this) || this;
            return r.initShader(), r.setShaderName("CURVEDGLITTER"), r.renderMode = t.RENDERMODE_OPAQUE, r._setColor(t.MAINCOLOR, new Laya.Vector4(1, 1, 1, 1)), r._setColor(t.QOFFSET, new Laya.Vector4(0, 0, 0, 1)), r._setNumber(t.DIST, 10), r
        }
        return __extends(t, e), Object.defineProperty(t.prototype, "mainTexture", {
            get: function() {
                return this._getTexture(t.MAINTEXTURE)
            },
            set: function(e) {
                e ? this._addShaderDefine(t.SHADERDEFINE_MAINTMAP) : this._removeShaderDefine(t.SHADERDEFINE_MAINTMAP), this._setTexture(t.MAINTEXTURE, e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "qOffset", {
            get: function() {
                return this._getColor(t.QOFFSET)
            },
            set: function(e) {
                this._setColor(t.QOFFSET, e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "mainColor", {
            get: function() {
                return this._getColor(t.MAINCOLOR)
            },
            set: function(e) {
                this._setColor(t.MAINCOLOR, e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "dist", {
            get: function() {
                return this._getNumber(t.DIST)
            },
            set: function(e) {
                this._setNumber(t.DIST, e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "renderMode", {
            set: function(e) {
                switch (e) {
                    case t.RENDERMODE_OPAQUE:
                        this.renderQueue = Laya.RenderQueue.OPAQUE, this.depthWrite = !1, this.cull = t.CULL_BACK, this.blend = t.BLEND_DISABLE, this.alphaTest = !1, this.depthTest = t.DEPTHTEST_LESS;
                        break;
                    case t.RENDEMODE_TRANSPARENT:
                        this.renderQueue = Laya.RenderQueue.TRANSPARENT, this.depthWrite = !0, this.cull = t.CULL_BACK, this.blend = t.BLEND_ENABLE_ALL, this.srcBlend = t.BLENDPARAM_SRC_ALPHA, this.dstBlend = t.BLENDPARAM_ONE_MINUS_SRC_ALPHA, this.alphaTest = !1, this.depthTest = t.DEPTHTEST_LESS
                }
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.initShader = function() {
            var e = Laya.Shader3D.nameKey.add("CURVEDGLITTER"),
                r = {
                    a_Position: Laya.VertexElementUsage.POSITION0,
                    a_Texcoord: Laya.VertexElementUsage.TEXTURECOORDINATE0,
                    a_Time: Laya.VertexElementUsage.TIME0
                },
                n = {
                    u_MMatrix: [Laya.Sprite3D.WORLDMATRIX, Laya.Shader3D.PERIOD_SPRITE],
                    u_VMatrix: [Laya.BaseCamera.VIEWMATRIX, Laya.Shader3D.PERIOD_CAMERA],
                    u_PMatrix: [Laya.BaseCamera.PROJECTMATRIX, Laya.Shader3D.PERIOD_CAMERA],
                    u_MainColor: [t.MAINCOLOR, Laya.Shader3D.PERIOD_MATERIAL],
                    u_MainTexture: [t.MAINTEXTURE, Laya.Shader3D.PERIOD_MATERIAL],
                    u_Dist: [t.DIST, Laya.Shader3D.PERIOD_MATERIAL],
                    u_QOffset: [t.QOFFSET, Laya.Shader3D.PERIOD_MATERIAL],
                    u_CurrentTime: [Laya.Glitter.CURRENTTIME, Laya.Shader3D.PERIOD_SPRITE],
                    u_Duration: [Laya.Glitter.DURATION, Laya.Shader3D.PERIOD_SPRITE]
                },
                a = Laya.ShaderCompile3D.add(e, "attribute vec4 a_Position;\nattribute float a_Time;\nuniform mat4 u_MMatrix;\nuniform mat4 u_VMatrix;\nuniform mat4 u_PMatrix;\nuniform float u_Dist;\nuniform vec4 u_QOffset;\n#ifdef MAINMAP\nattribute vec2 a_Texcoord;\nvarying vec2 v_Texcoord;\n#endif\nuniform float u_CurrentTime;\nuniform vec4 u_MainColor;\nuniform float u_Duration;\nvarying vec4 v_Color;\nvoid main(){\n#ifdef MAINMAP\nv_Texcoord = a_Texcoord;\n#endif\nfloat age = u_CurrentTime-a_Time;\nfloat normalizedAge = clamp(age / u_Duration,0.0,1.0);\nv_Color=u_MainColor;\nv_Color.a*=1.0-normalizedAge;\nvec4 vPos =  u_VMatrix * u_MMatrix *a_Position;\nfloat zOff = vPos.z/u_Dist;\nvPos += u_QOffset*zOff*zOff;\ngl_Position = u_PMatrix * vPos;\n}", "#ifdef FSHIGHPRECISION\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n#ifdef MAINMAP\nuniform sampler2D u_MainTexture;\nvarying vec2 v_Texcoord;\n#endif\nvarying vec4 v_Color;\nvoid main(){\nvec4 mainColor = v_Color;\n#ifdef MAINMAP\nvec4 texColor = texture2D(u_MainTexture,v_Texcoord);\nmainColor.rgba = mainColor.rgba * texColor.rgba;\n#endif\ngl_FragColor = mainColor;\n}\n", r, n);
            t.SHADERDEFINE_MAINTMAP = a.registerMaterialDefine("MAINMAP")
        }, t.RENDERMODE_OPAQUE = 0, t.RENDEMODE_TRANSPARENT = 1, t.MAINTEXTURE = 1, t.MAINCOLOR = 2, t.DIST = 3, t.QOFFSET = 4, t
    }(Laya.BaseMaterial);
    e.CurvedGlitterMaterial = t
}(touch || (touch = {}));