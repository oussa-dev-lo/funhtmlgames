var touch, __extends = this && this.__extends || function() {
    var e = function(t, o) {
        return (e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            })(t, o)
    };
    return function(t, o) {
        function a() {
            this.constructor = t
        }
        e(t, o), t.prototype = null === o ? Object.create(o) : (a.prototype = o.prototype, new a)
    }
}();
! function(e) {
    var t = function(e) {
        function t() {
            var o = e.call(this) || this;
            return o.initShader(), o.setShaderName("CustomShader"), o.setBendDistance(100), o.setColor(new Laya.Vector4(1, 1, 1, 1)), o.setHasLight(!0), o.setHasLambert(!1), o.setHasSpecular(!1), o.setSpecularGloss(10), o.setSpecularColor(new Laya.Vector4(1, 1, 1, 1)), o.setHasFog(!0), o.setFogColor(new Laya.Vector4(1, 1, 1, 1)), o.setFogDensity(.03), o.setFogStart(0), o.setFogEnd(80), o.setFogGradient(2), o.setFogType(t.FOGTYPE_EXP), o.setHasAlphaTest(!1), o
        }
        return __extends(t, e), t.prototype.setTransparent = function() {
            this.renderQueue = 2, this.depthWrite = !0, this.cull = 2, this.blend = 1, this.srcBlend = 770, this.dstBlend = 771, this.alphaTest = !1, this.setAlphaTestValue(.1)
        }, t.prototype.getDiffuseTexture = function() {
            return this._getTexture(t.DIFFUSETEXTURE)
        }, t.prototype.setDiffuseTexture2 = function(e) {
            this._setTexture(Laya.Shader3D.PERIOD_MATERIAL, e)
        }, t.prototype.setDiffuseTexture = function(e) {
            this._setTexture(t.DIFFUSETEXTURE, e)
        }, t.prototype.setMarginalColor = function(e) {
            this._setColor(t.MARGINALCOLOR, e)
        }, t.prototype.getBendOffset = function() {
            return this._getColor(t.BENDANGLE)
        }, t.prototype.setBendOffset = function(e) {
            this._setColor(t.BENDANGLE, e)
        }, t.prototype.setBendDistance = function(e) {
            this._setNumber(t.BENDDISTANCE, e)
        }, t.prototype.setSpecularGloss = function(e) {
            this._setNumber(t.GLOSS, e)
        }, t.prototype.setColor = function(e) {
            this._setColor(t.COLOR, e)
        }, t.prototype.setSpecularColor = function(e) {
            this._setColor(t.SPECULAR, e)
        }, t.prototype.setHasLight = function(e) {
            e ? this._addShaderDefine(t.SHADERDEFINE_ENABLELIGHT) : this._removeShaderDefine(t.SHADERDEFINE_ENABLELIGHT)
        }, t.prototype.setHasLambert = function(e) {
            e ? this._addShaderDefine(t.SHADERDEFINE_ENABLELAMBERT) : this._removeShaderDefine(t.SHADERDEFINE_ENABLELAMBERT)
        }, t.prototype.setHasSpecular = function(e) {
            e ? this._addShaderDefine(t.SHADERDEFINE_ENABLESPECULAR) : this._removeShaderDefine(t.SHADERDEFINE_ENABLESPECULAR)
        }, t.prototype.setHasFog = function(e) {
            e ? this._addShaderDefine(t.SHADERDEFINE_ENABLEFOG) : this._removeShaderDefine(t.SHADERDEFINE_ENABLEFOG)
        }, t.prototype.setHasAlphaTest = function(e) {
            e ? this._addShaderDefine(t.SHADERDEFINE_ALPHATEST) : this._removeShaderDefine(t.SHADERDEFINE_ALPHATEST)
        }, t.prototype.setFogType = function(e) {
            switch (e) {
                case t.FOGTYPE_LINEAR:
                    this._addShaderDefine(t.SHADERDEFINE_LINEARFOG), this._removeShaderDefine(t.SHADERDEFINE_EXFOG), this._removeShaderDefine(t.SHADERDEFINE_EXPFOG);
                    break;
                case t.FOGTYPE_EX:
                    this._removeShaderDefine(t.SHADERDEFINE_LINEARFOG), this._addShaderDefine(t.SHADERDEFINE_EXFOG), this._removeShaderDefine(t.SHADERDEFINE_EXPFOG);
                    break;
                case t.FOGTYPE_EXP:
                    this._removeShaderDefine(t.SHADERDEFINE_LINEARFOG), this._removeShaderDefine(t.SHADERDEFINE_EXFOG), this._addShaderDefine(t.SHADERDEFINE_EXPFOG)
            }
        }, t.prototype.setFogColor = function(e) {
            this._setColor(t.FOGCOLOR, e)
        }, t.prototype.setFogDensity = function(e) {
            this._setNumber(t.DENSITY, e)
        }, t.prototype.setFogGradient = function(e) {
            this._setNumber(t.GRADIENT, e)
        }, t.prototype.setFogStart = function(e) {
            this._setNumber(t.FOGSTART, e)
        }, t.prototype.setFogEnd = function(e) {
            this._setNumber(t.FOGEND, e)
        }, t.prototype.setAlphaTestValue = function(e) {
            this._setNumber(t.ALPHATESTVALUE, e)
        }, t.prototype.initShader = function() {
            var e = {
                    a_Position: Laya.VertexElementUsage.POSITION0,
                    a_Normal: Laya.VertexElementUsage.NORMAL0,
                    a_Texcoord: Laya.VertexElementUsage.TEXTURECOORDINATE0
                },
                o = {
                    u_AlphaTestValue: [t.ALPHATESTVALUE, Laya.Shader3D.PERIOD_MATERIAL],
                    u_MvpMatrix: [Laya.Sprite3D.MVPMATRIX, Laya.Shader3D.PERIOD_SPRITE],
                    u_WorldMat: [Laya.Sprite3D.WORLDMATRIX, Laya.Shader3D.PERIOD_SPRITE],
                    u_ViewMatrix: [Laya.BaseCamera.VIEWMATRIX, Laya.Shader3D.PERIOD_CAMERA],
                    u_texture: [t.DIFFUSETEXTURE, Laya.Shader3D.PERIOD_MATERIAL],
                    u_CameraPos: [Laya.BaseCamera.CAMERAPOS, Laya.Shader3D.PERIOD_CAMERA],
                    _QOffset: [t.BENDANGLE, Laya.Shader3D.PERIOD_MATERIAL],
                    _Dist: [t.BENDDISTANCE, Laya.Shader3D.PERIOD_MATERIAL],
                    _Color: [t.COLOR, Laya.Shader3D.PERIOD_MATERIAL],
                    _FogColor: [t.FOGCOLOR, Laya.Shader3D.PERIOD_MATERIAL],
                    u_Density: [t.DENSITY, Laya.Shader3D.PERIOD_MATERIAL],
                    u_Gradient: [t.GRADIENT, Laya.Shader3D.PERIOD_MATERIAL],
                    u_FogStart: [t.FOGSTART, Laya.Shader3D.PERIOD_MATERIAL],
                    u_FogEnd: [t.FOGEND, Laya.Shader3D.PERIOD_MATERIAL],
                    _Gloss: [t.GLOSS, Laya.Shader3D.PERIOD_MATERIAL],
                    u_DirectionLight_Direction: [Laya.Scene.POINTLIGHTPOS, Laya.Shader3D.PERIOD_SCENE],
                    u_DirectionLight_Diffuse: [Laya.Scene.POINTLIGHTCOLOR, Laya.Shader3D.PERIOD_SCENE],
                    u_DirectionLight_Ambient: [Laya.Scene.AMBIENTCOLOR, Laya.Shader3D.PERIOD_SCENE]
                },
                a = Laya.Shader3D.nameKey.add("CustomShader"),
                r = Laya.ShaderCompile3D.add(a, "attribute vec3 a_Normal;\nattribute vec2 a_Texcoord;\nattribute vec4 a_Position;\nprecision highp float;\nuniform mat4 u_MvpMatrix;\nuniform mat4 u_ViewMatrix;\nuniform mat4 u_WorldMat;\nuniform vec4 _QOffset; \nuniform float _Dist; \nuniform vec4 _Color; \nuniform float _Gloss; \nuniform vec4 _Specular; \nuniform vec3 u_CameraPos;\nuniform vec3 u_DirectionLight_Direction;\nuniform vec3 u_DirectionLight_Diffuse;\nuniform vec3 u_DirectionLight_Ambient;\nvarying vec4 v_Color;\nvarying vec2 v_Texcoord;\nvarying vec2 v_Texcoord0;\nvarying vec4 v_EyeSpacePos;\nvoid main(){\nv_Texcoord0=a_Texcoord;\n\nmat4 mvMatrix = u_ViewMatrix*u_WorldMat;\nhighp vec4 vPos =  u_MvpMatrix *a_Position;\nfloat zOff = vPos.z/_Dist;\nvPos += _QOffset*zOff*zOff;\ngl_Position = vPos;\nmat3 worldMat=mat3(u_WorldMat);\nv_EyeSpacePos=mvMatrix*a_Position;\nv_Texcoord=a_Texcoord;\n#ifdef CUSTOM_ENABLELIGHT \nvec3 worldNormal = worldMat*a_Normal;  \nworldNormal = normalize(worldNormal);\nvec3 m_Position=vec3(u_WorldMat*a_Position);\nvec3 worldLightDir = normalize(u_DirectionLight_Direction-m_Position);\nvec3 ambient = u_DirectionLight_Ambient.xyz*_Color.rgb; \n#ifdef CUSTOM_ENABLELAMBERT\nfloat lambert =max(0.0, dot(worldNormal, worldLightDir));\n#else\nfloat lambert = 0.5 * dot(worldNormal, worldLightDir) + 0.5;\n#endif\nv_Color = vec4(lambert * u_DirectionLight_Diffuse.xyz*_Color.rgb + ambient, _Color.a);  \n#ifdef CUSTOM_ENABLESPECULAR\nvec3 viewDir=normalize(u_CameraPos-m_Position);\nvec3 halfDir = normalize(viewDir + worldLightDir);\nvec3 specular = u_DirectionLight_Diffuse.xyz*_Specular.rgb*pow(max(dot(worldNormal,halfDir),0.0),_Gloss);\nv_Color+=vec4(v_Color.rgb+specular,v_Color.a);\n#endif\n#else\nv_Color=_Color;\n#endif\n}", "precision highp float;\nvarying vec4 v_EyeSpacePos;\nvarying vec2 v_Texcoord;\nvarying vec2 v_Texcoord0;\nvarying vec4 v_Color;\n\tuniform float u_AlphaTestValue;\nuniform sampler2D u_texture;\nuniform float u_Density;\nuniform float u_Gradient;\nuniform vec4 _FogColor;\nuniform float u_FogStart;\nuniform float u_FogEnd;\nfloat ExFog(float distance)\n{\nfloat fogAlpha=exp(-abs(distance * u_Density));\nfogAlpha=1.0-clamp(fogAlpha,0.0,1.0);\nreturn fogAlpha;\n}\nfloat ExpFog(float distance)\n{\nfloat fogAlpha=exp(-pow( abs(distance * u_Density) , u_Gradient) );\nfogAlpha=1.0-clamp(fogAlpha,0.0,1.0);\n\n\nreturn fogAlpha;\n}\nfloat LinearFog(float distance)\n{\nfloat fogAlpha=(distance-u_FogStart)/(u_FogEnd-u_FogStart);\nfogAlpha=clamp(fogAlpha,0.0,1.0);\nreturn fogAlpha;\n}\nvoid main(){\n#ifdef CUSTOM_ALPHATEST\nfloat alpha = texture2D(u_texture,v_Texcoord).w;\n\t\tif( alpha < u_AlphaTestValue )\n\t\t{\n\t\t\tdiscard;\n\t\t}\n#endif\nvec4 tex=texture2D(u_texture,v_Texcoord);\nvec4 color=v_Color*tex;\n#ifdef CUSTOM_ENABLEFOG \n#ifdef CUSTOM_LINEARFOG\nfloat fogAlpha = LinearFog(abs(v_EyeSpacePos.z/v_EyeSpacePos.w));\n#endif\n#ifdef CUSTOM_EXFOG\nfloat fogAlpha = ExFog(abs(v_EyeSpacePos.z/v_EyeSpacePos.w));\n#endif\n#ifdef CUSTOM_EXPFOG\nfloat fogAlpha = ExpFog(abs(v_EyeSpacePos.z/v_EyeSpacePos.w));\n#endif\ngl_FragColor=mix(color,_FogColor,fogAlpha);\n#else \ngl_FragColor=color;\n#endif \n}\n", e, o);
            t.SHADERDEFINE_ENABLELIGHT = r.registerMaterialDefine("CUSTOM_ENABLELIGHT"), t.SHADERDEFINE_ENABLELAMBERT = r.registerMaterialDefine("CUSTOM_ENABLELAMBERT"), t.SHADERDEFINE_ENABLESPECULAR = r.registerMaterialDefine("CUSTOM_ENABLESPECULAR"), t.SHADERDEFINE_ENABLEFOG = r.registerMaterialDefine("CUSTOM_ENABLEFOG"), t.SHADERDEFINE_LINEARFOG = r.registerMaterialDefine("CUSTOM_LINEARFOG"), t.SHADERDEFINE_EXFOG = r.registerMaterialDefine("CUSTOM_EXFOG"), t.SHADERDEFINE_EXPFOG = r.registerMaterialDefine("CUSTOM_EXPFOG"), t.SHADERDEFINE_ALPHATEST = r.registerMaterialDefine("CUSTOM_ALPHATEST")
        }, t.DIFFUSETEXTURE = 1, t.MARGINALCOLOR = 2, t.BENDANGLE = 3, t.BENDDISTANCE = 4, t.COLOR = 5, t.SPECULAR = 6, t.GLOSS = 7, t.FOGCOLOR = 8, t.DENSITY = 9, t.GRADIENT = 10, t.FOGSTART = 11, t.FOGEND = 12, t.FOGTYPE_LINEAR = 1, t.FOGTYPE_EX = 2, t.FOGTYPE_EXP = 3, t.ALPHATESTVALUE = 13, t
    }(Laya.BaseMaterial);
    e.CustomMaterial = t
}(touch || (touch = {}));