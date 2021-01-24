const animationEngine = (() => {
    let t = 0;
    return new class {
        constructor() {
            this.ids = [], this.animations = {}, this.update = this.update.bind(this), this.raf = 0, this.time = 0
        }
        update() {
            const t = performance.now(),
                e = t - this.time;
            this.time = t;
            let s = this.ids.length;
            for (this.raf = s ? requestAnimationFrame(this.update) : 0; s--;) this.animations[this.ids[s]] && this.animations[this.ids[s]].update(e)
        }
        add(e) {
            e.id = t++, this.ids.push(e.id), this.animations[e.id] = e, 0 === this.raf && (this.time = performance.now(), this.raf = requestAnimationFrame(this.update))
        }
        remove(t) {
            const e = this.ids.indexOf(t.id);
            e < 0 || (this.ids.splice(e, 1), delete this.animations[t.id], t = null)
        }
    }
})();
class Animation {
    constructor(t) {
        !0 === t && this.start()
    }
    start() {
        animationEngine.add(this)
    }
    stop() {
        animationEngine.remove(this)
    }
    update(t) {}
}
class World extends Animation {
    constructor(t) {
        super(!0), this.game = t, this.container = this.game.dom.game, this.scene = new THREE.Scene, this.renderer = new THREE.WebGLRenderer({
            antialias: !0,
            alpha: !0
        }), this.renderer.setPixelRatio(window.devicePixelRatio), this.container.appendChild(this.renderer.domElement), this.camera = new THREE.PerspectiveCamera(2, 1, .1, 1e4), this.stage = {
            width: 2,
            height: 3
        }, this.fov = 10, this.createLights(), this.onResize = [], this.resize(), window.addEventListener("resize", () => this.resize(), !1)
    }
    update() {
        this.renderer.render(this.scene, this.camera)
    }
    resize() {
        this.width = this.container.offsetWidth, this.height = this.container.offsetHeight, this.renderer.setSize(this.width, this.height), this.camera.fov = this.fov, this.camera.aspect = this.width / this.height;
        const t = this.stage.width / this.stage.height,
            e = this.fov * THREE.Math.DEG2RAD;
        let s = t < this.camera.aspect ? this.stage.height / 2 / Math.tan(e / 2) : this.stage.width / this.camera.aspect / (2 * Math.tan(e / 2));
        s *= .5, this.camera.position.set(s, s, s), this.camera.lookAt(this.scene.position), this.camera.updateProjectionMatrix();
        const i = t < this.camera.aspect ? this.height / 100 * t : this.width / 100;
        document.documentElement.style.fontSize = i + "px", this.onResize && this.onResize.forEach(t => t())
    }
    createLights() {
        this.lights = {
            holder: new THREE.Object3D,
            ambient: new THREE.AmbientLight(16777215, .69),
            front: new THREE.DirectionalLight(16777215, .36),
            back: new THREE.DirectionalLight(16777215, .19)
        }, this.lights.front.position.set(1.5, 5, 3), this.lights.back.position.set(-1.5, -5, -3), this.lights.holder.add(this.lights.ambient), this.lights.holder.add(this.lights.front), this.lights.holder.add(this.lights.back), this.scene.add(this.lights.holder)
    }
    enableShadows() {
        this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = THREE.PCFSoftShadowMap, this.lights.front.castShadow = !0, this.lights.front.shadow.mapSize.width = 512, this.lights.front.shadow.mapSize.height = 512;
        var t = 1.5;
        this.lights.front.shadow.camera.left = -t, this.lights.front.shadow.camera.right = t, this.lights.front.shadow.camera.top = t, this.lights.front.shadow.camera.bottom = -t, this.lights.front.shadow.camera.near = 1, this.lights.front.shadow.camera.far = 9, this.game.cube.holder.traverse(t => {
            t instanceof THREE.Mesh && (t.castShadow = !0, t.receiveShadow = !0)
        })
    }
}

function RoundedBoxGeometry(t, e, s) {
    var i, o, a;
    THREE.BufferGeometry.call(this), this.type = "RoundedBoxGeometry", s = isNaN(s) ? 1 : Math.max(1, Math.floor(s)), i = o = a = t, e *= t;
    var n = i / 2 - (e = Math.min(e, Math.min(i, Math.min(o, Math.min(a))) / 2)),
        r = o / 2 - e,
        h = a / 2 - e;
    this.parameters = {
        width: i,
        height: o,
        depth: a,
        radius: e,
        radiusSegments: s
    };
    var c, l, u, d, m = s + 1,
        p = m * s + 1 << 3,
        g = new THREE.BufferAttribute(new Float32Array(3 * p), 3),
        v = new THREE.BufferAttribute(new Float32Array(3 * p), 3),
        b = [],
        w = [],
        f = (new THREE.Vector3, new THREE.Vector3),
        E = [],
        T = [],
        y = [],
        M = m * s,
        R = m * s + 1;
    ! function() {
        for (var t = [new THREE.Vector3(1, 1, 1), new THREE.Vector3(1, 1, -1), new THREE.Vector3(-1, 1, -1), new THREE.Vector3(-1, 1, 1), new THREE.Vector3(1, -1, 1), new THREE.Vector3(1, -1, -1), new THREE.Vector3(-1, -1, -1), new THREE.Vector3(-1, -1, 1)], i = 0; i < 8; i++) b.push([]), w.push([]);
        for (var o = Math.PI / 2, a = new THREE.Vector3(n, r, h), c = 0; c <= s; c++) {
            var l = c / s * o,
                u = Math.cos(l),
                d = Math.sin(l);
            if (c != s)
                for (var m = 0; m <= s; m++) {
                    var p = m / s * o;
                    f.x = u * Math.cos(p), f.y = d, f.z = u * Math.sin(p);
                    var g = f.clone().multiplyScalar(e).add(a);
                    b[0].push(g), E.push(g);
                    var v = f.clone().normalize();
                    w[0].push(v), T.push(v)
                } else {
                    f.set(0, 1, 0);
                    g = f.clone().multiplyScalar(e).add(a);
                    b[0].push(g), E.push(g);
                    v = f.clone();
                    w[0].push(v), T.push(v)
                }
        }
        for (var y = 1; y < 8; y++)
            for (i = 0; i < b[0].length; i++) {
                g = b[0][i].clone().multiply(t[y]);
                b[y].push(g), E.push(g);
                v = w[0][i].clone().multiply(t[y]);
                w[y].push(v), T.push(v)
            }
    }(), c = M, l = M + R, u = M + 2 * R, d = M + 3 * R, y.push(c), y.push(l), y.push(u), y.push(c), y.push(u), y.push(d), c = M + 4 * R, l = M + 5 * R, u = M + 6 * R, d = M + 7 * R, y.push(c), y.push(u), y.push(l), y.push(c), y.push(d), y.push(u), c = 0, l = R, u = 4 * R, d = 5 * R, y.push(c), y.push(u), y.push(l), y.push(l), y.push(u), y.push(d), c = 2 * R, l = 3 * R, u = 6 * R, d = 7 * R, y.push(c), y.push(u), y.push(l), y.push(l), y.push(u), y.push(d), c = s, l = s + 3 * R, u = s + 4 * R, d = s + 7 * R, y.push(c), y.push(l), y.push(u), y.push(l), y.push(d), y.push(u), c = s + R, l = s + 2 * R, u = s + 5 * R, d = s + 6 * R, y.push(c), y.push(u), y.push(l), y.push(l), y.push(u), y.push(d),
        function() {
            for (var t = [!0, !1, !0, !1, !1, !0, !1, !0], e = m * (s - 1), i = 0; i < 8; i++) {
                for (var o = R * i, a = 0; a < s - 1; a++)
                    for (var n = a * m, r = (a + 1) * m, h = 0; h < s; h++) {
                        var c = h + 1,
                            l = o + n + h,
                            u = o + n + c,
                            d = o + r + h,
                            p = o + r + c;
                        t[i] ? (y.push(l), y.push(d), y.push(u), y.push(u), y.push(d), y.push(p)) : (y.push(l), y.push(u), y.push(d), y.push(u), y.push(p), y.push(d))
                    }
                for (h = 0; h < s; h++) {
                    l = o + e + h, u = o + e + h + 1, d = o + M;
                    t[i] ? (y.push(l), y.push(d), y.push(u)) : (y.push(l), y.push(u), y.push(d))
                }
            }
        }(),
        function() {
            for (var t = 0; t < 4; t++)
                for (var e = t * R, i = 4 * R + e, o = !0 & t, a = 0; a < s; a++) {
                    var n = a + 1,
                        r = e + a,
                        h = e + n,
                        c = i + a,
                        l = i + n;
                    o ? (y.push(r), y.push(c), y.push(h), y.push(h), y.push(c), y.push(l)) : (y.push(r), y.push(h), y.push(c), y.push(h), y.push(l), y.push(c))
                }
        }(),
        function() {
            for (var t = s - 1, e = [0, 1, 4, 5], i = [3, 2, 7, 6], o = [0, 1, 1, 0], a = 0; a < 4; a++)
                for (var n = e[a] * R, r = i[a] * R, h = 0; h <= t; h++) {
                    var c = n + s + h * m,
                        l = n + (h != t ? s + (h + 1) * m : R - 1),
                        u = r + s + h * m,
                        d = r + (h != t ? s + (h + 1) * m : R - 1);
                    o[a] ? (y.push(c), y.push(u), y.push(l), y.push(l), y.push(u), y.push(d)) : (y.push(c), y.push(l), y.push(u), y.push(l), y.push(d), y.push(u))
                }
        }(),
        function() {
            for (var t = [0, 2, 4, 6], e = [1, 3, 5, 7], i = 0; i < 4; i++)
                for (var o = R * t[i], a = R * e[i], n = 1 >= i, r = 0; r < s; r++) {
                    var h = r * m,
                        c = (r + 1) * m,
                        l = o + h,
                        u = o + c,
                        d = a + h,
                        p = a + c;
                    n ? (y.push(l), y.push(d), y.push(u), y.push(u), y.push(d), y.push(p)) : (y.push(l), y.push(u), y.push(d), y.push(u), y.push(p), y.push(d))
                }
        }();
    for (var S = 0, H = 0; H < E.length; H++) g.setXYZ(S, E[H].x, E[H].y, E[H].z), v.setXYZ(S, T[H].x, T[H].y, T[H].z), S++;
    this.setIndex(new THREE.BufferAttribute(new Uint16Array(y), 1)), this.addAttribute("position", g), this.addAttribute("normal", v)
}

function RoundedPlaneGeometry(t, e, s) {
    var i, o, a, n;
    i = o = -t / 2, a = n = t, e *= t;
    const r = new THREE.Shape;
    return r.moveTo(i, o + e), r.lineTo(i, o + n - e), r.quadraticCurveTo(i, o + n, i + e, o + n), r.lineTo(i + a - e, o + n), r.quadraticCurveTo(i + a, o + n, i + a, o + n - e), r.lineTo(i + a, o + e), r.quadraticCurveTo(i + a, o, i + a - e, o), r.lineTo(i + e, o), r.quadraticCurveTo(i, o, i, o + e), new THREE.ExtrudeBufferGeometry(r, {
        depth: s,
        bevelEnabled: !1,
        curveSegments: 3
    })
}
RoundedBoxGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), RoundedBoxGeometry.constructor = RoundedBoxGeometry;
class Cube {
    constructor(t) {
        this.game = t, this.geometry = {
            pieceSize: 1 / 3,
            pieceCornerRadius: .12,
            edgeCornerRoundness: .2,
            edgeScale: .82,
            edgeDepth: .04
        }, this.holder = new THREE.Object3D, this.object = new THREE.Object3D, this.animator = new THREE.Object3D, this.holder.add(this.animator), this.animator.add(this.object), this.cubes = [], this.generatePositions(), this.generateModel(), this.pieces.forEach(t => {
            this.cubes.push(t.userData.cube), this.object.add(t)
        }), this.holder.traverse(t => {
            t.frustumCulled && (t.frustumCulled = !1)
        }), this.game.world.scene.add(this.holder)
    }
    reset() {
        this.game.controls.edges.rotation.set(0, 0, 0), this.holder.rotation.set(0, 0, 0), this.object.rotation.set(0, 0, 0), this.animator.rotation.set(0, 0, 0), this.pieces.forEach(t => {
            t.position.copy(t.userData.start.position), t.rotation.copy(t.userData.start.rotation)
        })
    }
    generatePositions() {
        let t, e, s;
        for (this.positions = [], t = 0; t < 3; t++)
            for (e = 0; e < 3; e++)
                for (s = 0; s < 3; s++) {
                    let i = new THREE.Vector3(t - 1, e - 1, s - 1),
                        o = [];
                    0 == t && o.push(0), 2 == t && o.push(1), 0 == e && o.push(2), 2 == e && o.push(3), 0 == s && o.push(4), 2 == s && o.push(5), i.edges = o, this.positions.push(i)
                }
    }
    generateModel() {
        this.pieces = [], this.edges = [];
        const t = new THREE.MeshLambertMaterial,
            e = new THREE.Mesh(new RoundedBoxGeometry(1 / 3, this.geometry.pieceCornerRadius, 3), t.clone()),
            s = RoundedPlaneGeometry(1 / 3, this.geometry.edgeCornerRoundness, this.geometry.edgeDepth);
        this.positions.forEach((i, o) => {
            const a = new THREE.Object3D,
                n = e.clone(),
                r = [];
            a.position.copy(i.clone().divideScalar(3)), a.add(n), a.name = o, a.edgesName = "", i.edges.forEach(e => {
                const i = new THREE.Mesh(s, t.clone()),
                    o = ["L", "R", "D", "U", "B", "F"][e];
                i.position.set(1 / 3 / 2 * [-1, 1, 0, 0, 0, 0][e], 1 / 3 / 2 * [0, 0, -1, 1, 0, 0][e], 1 / 3 / 2 * [0, 0, 0, 0, -1, 1][e]), i.rotation.set(Math.PI / 2 * [0, 0, 1, -1, 0, 0][e], Math.PI / 2 * [-1, 1, 0, 0, 2, 0][e], 0), i.scale.set(this.geometry.edgeScale, this.geometry.edgeScale, this.geometry.edgeScale), i.name = o, a.add(i), r.push(o), this.edges.push(i)
            }), a.userData.edges = r, a.userData.cube = n, a.userData.start = {
                position: a.position.clone(),
                rotation: a.rotation.clone()
            }, this.pieces.push(a)
        })
    }
}
const Easing = {
    Power: {
        In: t => (t = Math.round(t || 1), e => Math.pow(e, t)),
        Out: t => (t = Math.round(t || 1), e => 1 - Math.abs(Math.pow(e - 1, t))),
        InOut: t => (t = Math.round(t || 1), e => e < .5 ? Math.pow(2 * e, t) / 2 : (1 - Math.abs(Math.pow(2 * e - 1 - 1, t))) / 2 + .5)
    },
    Sine: {
        In: () => t => 1 + Math.sin(Math.PI / 2 * t - Math.PI / 2),
        Out: () => t => Math.sin(Math.PI / 2 * t),
        InOut: () => t => (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2
    },
    Back: {
        Out: t => (t = t || 1.70158, e => (e -= 1) * e * ((t + 1) * e + t) + 1),
        In: t => (t = t || 1.70158, e => e * e * ((t + 1) * e - t))
    },
    Elastic: {
        Out: (t, e) => {
            let s = 2 * Math.PI,
                i = t >= 1 ? t : 1,
                o = (e || .3) / (t < 1 ? t : 1),
                a = o / s * (Math.asin(1 / i) || 0);
            return o = s / o, t => i * Math.pow(2, -10 * t) * Math.sin((t - a) * o) + 1
        }
    }
};
class Tween extends Animation {
    constructor(t) {
        super(!1), this.duration = t.duration || 500, this.easing = t.easing || (t => t), this.onUpdate = t.onUpdate || (() => {}), this.onComplete = t.onComplete || (() => {}), this.delay = t.delay || !1, this.yoyo = !t.yoyo && null, this.progress = 0, this.value = 0, this.delta = 0, this.getFromTo(t), this.delay ? setTimeout(() => super.start(), this.delay) : super.start(), this.onUpdate(this)
    }
    update(t) {
        const e = 1 * this.value,
            s = !0 === this.yoyo ? -1 : 1;
        this.progress += t / this.duration * s, this.value = this.easing(this.progress), this.delta = this.value - e, null !== this.values && this.updateFromTo(), null !== this.yoyo ? this.updateYoyo() : this.progress <= 1 ? this.onUpdate(this) : (this.progress = 1, this.value = 1, this.onUpdate(this), this.onComplete(this), super.stop())
    }
    updateYoyo() {
        (this.progress > 1 || this.progress < 0) && (this.value = this.progress = this.progress > 1 ? 1 : 0, this.yoyo = !this.yoyo), this.onUpdate(this)
    }
    updateFromTo() {
        this.values.forEach(t => {
            this.target[t] = this.from[t] + (this.to[t] - this.from[t]) * this.value
        })
    }
    getFromTo(t) {
        t.target && t.to ? (this.target = t.target || null, this.from = t.from || {}, this.to = t.to || null, this.values = [], Object.keys(this.from).length < 1 && Object.keys(this.to).forEach(t => {
            this.from[t] = this.target[t]
        }), Object.keys(this.to).forEach(t => {
            this.values.push(t)
        })) : this.values = null
    }
}
window.addEventListener("touchmove", () => {}), document.addEventListener("touchmove", t => {
    t.preventDefault()
}, {
    passive: !1
});
class Draggable {
    constructor(t, e) {
        return this.position = {
            current: new THREE.Vector2,
            start: new THREE.Vector2,
            delta: new THREE.Vector2,
            old: new THREE.Vector2,
            drag: new THREE.Vector2
        }, this.options = Object.assign({
            calcDelta: !1
        }, e || {}), this.element = t, this.touch = null, this.drag = {
            start: t => {
                "mousedown" == t.type && 1 != t.which || "touchstart" == t.type && t.touches.length > 1 || (this.getPositionCurrent(t), this.options.calcDelta && (this.position.start = this.position.current.clone(), this.position.delta.set(0, 0), this.position.drag.set(0, 0)), this.touch = "touchstart" == t.type, this.onDragStart(this.position), window.addEventListener(this.touch ? "touchmove" : "mousemove", this.drag.move, !1), window.addEventListener(this.touch ? "touchend" : "mouseup", this.drag.end, !1))
            },
            move: t => {
                this.options.calcDelta && (this.position.old = this.position.current.clone()), this.getPositionCurrent(t), this.options.calcDelta && (this.position.delta = this.position.current.clone().sub(this.position.old), this.position.drag = this.position.current.clone().sub(this.position.start)), this.onDragMove(this.position)
            },
            end: t => {
                this.getPositionCurrent(t), this.onDragEnd(this.position), window.removeEventListener(this.touch ? "touchmove" : "mousemove", this.drag.move, !1), window.removeEventListener(this.touch ? "touchend" : "mouseup", this.drag.end, !1)
            }
        }, this.onDragStart = (() => {}), this.onDragMove = (() => {}), this.onDragEnd = (() => {}), this.enable(), this
    }
    enable() {
        return this.element.addEventListener("touchstart", this.drag.start, !1), this.element.addEventListener("mousedown", this.drag.start, !1), this
    }
    disable() {
        return this.element.removeEventListener("touchstart", this.drag.start, !1), this.element.removeEventListener("mousedown", this.drag.start, !1), this
    }
    getPositionCurrent(t) {
        const e = t.touches ? t.touches[0] || t.changedTouches[0] : t;
        this.position.current.set(e.pageX, e.pageY)
    }
    convertPosition(t) {
        return t.x = t.x / this.element.offsetWidth * 2 - 1, t.y = -(t.y / this.element.offsetHeight * 2 - 1), t
    }
}
const STILL = 0,
    PREPARING = 1,
    ROTATING = 2,
    ANIMATING = 3;
class Controls {
    constructor(t) {
        this.game = t, this.flipConfig = 0, this.flipEasings = [Easing.Power.Out(3), Easing.Sine.Out(), Easing.Back.Out(2)], this.flipSpeeds = [125, 200, 350], this.raycaster = new THREE.Raycaster;
        const e = new THREE.MeshBasicMaterial({
            depthWrite: !1,
            transparent: !0,
            opacity: 0,
            color: 13311
        });
        this.group = new THREE.Object3D, this.game.cube.object.add(this.group), this.helper = new THREE.Mesh(new THREE.PlaneBufferGeometry(20, 20), e.clone()), this.helper.rotation.set(0, Math.PI / 4, 0), this.game.world.scene.add(this.helper), this.edges = new THREE.Mesh(new THREE.BoxBufferGeometry(.95, .95, .95), e.clone()), this.game.world.scene.add(this.edges), this.onSolved = (() => {}), this.onMove = (() => {}), this.momentum = [], this.scramble = null, this.state = STILL, this.initDraggable()
    }
    enable() {
        this.draggable.enable()
    }
    disable() {
        this.draggable.disable()
    }
    initDraggable() {
        this.draggable = new Draggable(this.game.dom.game), this.draggable.onDragStart = (t => {
            if (null !== this.scramble) return;
            if (this.state === PREPARING || this.state === ROTATING) return;
            this.gettingDrag = this.state === ANIMATING;
            const e = this.getIntersect(t.current, this.edges, !1);
            !1 !== e ? (this.dragNormal = e.face.normal.round(), this.flipType = "layer", this.attach(this.helper, this.edges), this.helper.rotation.set(0, 0, 0), this.helper.position.set(0, 0, 0), this.helper.lookAt(this.dragNormal), this.helper.translateZ(.5), this.helper.updateMatrixWorld(), this.detach(this.helper, this.edges)) : (this.dragNormal = new THREE.Vector3(0, 0, 1), this.flipType = "cube", this.helper.position.set(0, 0, 0), this.helper.rotation.set(0, Math.PI / 4, 0), this.helper.updateMatrixWorld());
            const s = this.getIntersect(t.current, this.helper, !1).point;
            !1 !== s && (this.dragCurrent = this.helper.worldToLocal(s), this.dragTotal = new THREE.Vector3, this.state = this.state === STILL ? PREPARING : this.state)
        }), this.draggable.onDragMove = (t => {
            if (null !== this.scramble) return;
            if (this.state === STILL || this.state === ANIMATING && !1 === this.gettingDrag) return;
            const e = this.getIntersect(t.current, this.helper, !1);
            if (!1 === e) return;
            const s = this.helper.worldToLocal(e.point.clone());
            if (this.dragDelta = s.clone().sub(this.dragCurrent).setZ(0), this.dragTotal.add(this.dragDelta), this.dragCurrent = s, this.addMomentumPoint(this.dragDelta), this.state === PREPARING && this.dragTotal.length() > .05) {
                if (this.dragDirection = this.getMainAxis(this.dragTotal), "layer" === this.flipType) {
                    const e = new THREE.Vector3;
                    e[this.dragDirection] = 1;
                    const s = this.helper.localToWorld(e).sub(this.helper.position),
                        i = this.edges.worldToLocal(s).round();
                    this.flipAxis = i.cross(this.dragNormal).negate(), this.dragIntersect = this.getIntersect(t.current, this.game.cube.cubes, !0), this.selectLayer(this.getLayer(!1))
                } else {
                    const e = "x" != this.dragDirection ? "y" == this.dragDirection && t.current.x > this.game.world.width / 2 ? "z" : "x" : "y";
                    this.flipAxis = new THREE.Vector3, this.flipAxis[e] = 1 * ("x" == e ? -1 : 1)
                }
                this.flipAngle = 0, this.state = ROTATING
            } else if (this.state === ROTATING) {
                const t = this.dragDelta[this.dragDirection];
                "layer" === this.flipType ? (this.group.rotateOnAxis(this.flipAxis, t), this.flipAngle += t) : (this.edges.rotateOnWorldAxis(this.flipAxis, t), this.game.cube.object.rotation.copy(this.edges.rotation), this.flipAngle += t)
            }
        }), this.draggable.onDragEnd = (t => {
            if (null !== this.scramble) return;
            if (this.state !== ROTATING) return this.gettingDrag = !1, void(this.state = STILL);
            this.state = ANIMATING;
            const e = this.getMomentum()[this.dragDirection],
                s = (Math.abs(e) > .05 && Math.abs(this.flipAngle) < Math.PI / 2 ? this.roundAngle(this.flipAngle + Math.sign(this.flipAngle) * (Math.PI / 4)) : this.roundAngle(this.flipAngle)) - this.flipAngle;
            "layer" === this.flipType ? this.rotateLayer(s, !1, t => {
                this.state = this.gettingDrag ? PREPARING : STILL, this.gettingDrag = !1, this.checkIsSolved()
            }) : this.rotateCube(s, () => {
                this.state = this.gettingDrag ? PREPARING : STILL, this.gettingDrag = !1
            })
        })
    }
    rotateLayer(t, e, s) {
        const i = e ? 0 : this.flipConfig,
            o = this.flipEasings[i],
            a = this.flipSpeeds[i],
            n = 2 == i ? this.bounceCube() : () => {};
        this.rotationTween = new Tween({
            easing: o,
            duration: a,
            onUpdate: e => {
                let s = e.delta * t;
                this.group.rotateOnAxis(this.flipAxis, s), n(e.value, s, t)
            },
            onComplete: () => {
                e || this.onMove();
                const t = this.flipLayer.slice(0);
                this.game.cube.object.rotation.setFromVector3(this.snapRotation(this.game.cube.object.rotation.toVector3())), this.group.rotation.setFromVector3(this.snapRotation(this.group.rotation.toVector3())), this.deselectLayer(this.flipLayer), s(t)
            }
        })
    }
    bounceCube() {
        let t = !0;
        return (e, s, i) => {
            e >= 1 && (t && (s = (e - 1) * i, t = !1), this.game.cube.object.rotateOnAxis(this.flipAxis, s))
        }
    }
    rotateCube(t, e) {
        const s = this.flipConfig,
            i = [Easing.Power.Out(4), Easing.Sine.Out(), Easing.Back.Out(2)][s],
            o = [100, 150, 350][s];
        this.rotationTween = new Tween({
            easing: i,
            duration: o,
            onUpdate: e => {
                this.edges.rotateOnWorldAxis(this.flipAxis, e.delta * t), this.game.cube.object.rotation.copy(this.edges.rotation)
            },
            onComplete: () => {
                this.edges.rotation.setFromVector3(this.snapRotation(this.edges.rotation.toVector3())), this.game.cube.object.rotation.copy(this.edges.rotation), e()
            }
        })
    }
    selectLayer(t) {
        this.group.rotation.set(0, 0, 0), this.movePieces(t, this.game.cube.object, this.group), this.flipLayer = t
    }
    deselectLayer(t) {
        this.movePieces(t, this.group, this.game.cube.object), this.flipLayer = null
    }
    movePieces(t, e, s) {
        e.updateMatrixWorld(), s.updateMatrixWorld(), t.forEach(t => {
            const i = this.game.cube.pieces[t];
            i.applyMatrix(e.matrixWorld), e.remove(i), i.applyMatrix((new THREE.Matrix4).getInverse(s.matrixWorld)), s.add(i)
        })
    }
    getLayer(t) {
        const e = [];
        let s;
        return !1 === t ? (s = this.getMainAxis(this.flipAxis), t = this.getPiecePosition(this.dragIntersect.object)) : s = this.getMainAxis(t), this.game.cube.pieces.forEach(i => {
            this.getPiecePosition(i)[s] == t[s] && e.push(i.name)
        }), e
    }
    getPiecePosition(t) {
        let e = (new THREE.Vector3).setFromMatrixPosition(t.matrixWorld).multiplyScalar(3);
        return this.game.cube.object.worldToLocal(e.sub(this.game.cube.animator.position)).round()
    }
    scrambleCube() {
        null == this.scramble && (this.scramble = this.game.scrambler, this.scramble.callback = "function" != typeof callback ? () => {} : callback);
        const t = this.scramble.converted,
            e = t[0],
            s = this.getLayer(e.position);
        this.flipAxis = new THREE.Vector3, this.flipAxis[e.axis] = 1, this.selectLayer(s), this.rotateLayer(e.angle, !0, () => {
            t.shift(), t.length > 0 ? this.scrambleCube() : this.scramble = null
        })
    }
    getIntersect(t, e, s) {
        this.raycaster.setFromCamera(this.draggable.convertPosition(t.clone()), this.game.world.camera);
        const i = s ? this.raycaster.intersectObjects(e) : this.raycaster.intersectObject(e);
        return i.length > 0 && i[0]
    }
    getMainAxis(t) {
        return Object.keys(t).reduce((e, s) => Math.abs(t[e]) > Math.abs(t[s]) ? e : s)
    }
    detach(t, e) {
        t.applyMatrix(e.matrixWorld), e.remove(t), this.game.world.scene.add(t)
    }
    attach(t, e) {
        t.applyMatrix((new THREE.Matrix4).getInverse(e.matrixWorld)), this.game.world.scene.remove(t), e.add(t)
    }
    addMomentumPoint(t) {
        const e = Date.now();
        this.momentum = this.momentum.filter(t => e - t.time < 500), !1 !== t && this.momentum.push({
            delta: t,
            time: e
        })
    }
    getMomentum() {
        const t = this.momentum.length,
            e = new THREE.Vector2;
        return this.addMomentumPoint(!1), this.momentum.forEach((s, i) => {
            e.add(s.delta.multiplyScalar(i / t))
        }), e
    }
    roundAngle(t) {
        const e = Math.PI / 2;
        return Math.sign(t) * Math.round(Math.abs(t) / e) * e
    }
    snapRotation(t) {
        return t.set(this.roundAngle(t.x), this.roundAngle(t.y), this.roundAngle(t.z))
    }
    checkIsSolved() {
        performance.now();
        let t = !0;
        const e = {
            "x-": [],
            "x+": [],
            "y-": [],
            "y+": [],
            "z-": [],
            "z+": []
        };
        this.game.cube.edges.forEach(t => {
            const s = t.parent.localToWorld(t.position.clone()).sub(this.game.cube.object.position),
                i = this.getMainAxis(s),
                o = s.multiplyScalar(2).round()[i] < 1 ? "-" : "+";
            e[i + o].push(t.name)
        }), Object.keys(e).forEach(s => {
            e[s].every(t => t === e[s][0]) || (t = !1)
        }), t && this.onSolved()
    }
}
class Scrambler {
    constructor(t) {
        this.game = t, this.scrambleLength = 20, this.moves = [], this.conveted = [], this.pring = ""
    }
    scramble(t) {
        let e = 0;
        if (this.moves = void 0 !== t ? t.split(" ") : [], this.moves.length < 1) {
            const s = "UDLRFB",
                i = ["", "'", "2"],
                o = void 0 === t ? this.scrambleLength : t;
            for (; e < o;) {
                const t = s[Math.floor(6 * Math.random())] + i[Math.floor(3 * Math.random())];
                e > 0 && t.charAt(0) == this.moves[e - 1].charAt(0) || e > 1 && t.charAt(0) == this.moves[e - 2].charAt(0) || (this.moves.push(t), e++)
            }
        }
        return this.callback = (() => {}), this.convert(), this.print = this.moves.join(" "), this
    }
    convert(t) {
        this.converted = [], this.moves.forEach(t => {
            const e = t.charAt(0),
                s = t.charAt(1),
                i = {
                    D: "y",
                    U: "y",
                    L: "x",
                    R: "x",
                    F: "z",
                    B: "z"
                }[e],
                o = {
                    D: -1,
                    U: 1,
                    L: -1,
                    R: 1,
                    F: 1,
                    B: -1
                }[e],
                a = new THREE.Vector3;
            a[{
                D: "y",
                U: "y",
                L: "x",
                R: "x",
                F: "z",
                B: "z"
            }[e]] = o;
            const n = {
                position: a,
                axis: i,
                angle: Math.PI / 2 * -o * ("'" == s ? -1 : 1),
                name: t
            };
            this.converted.push(n), "2" == s && this.converted.push(n)
        })
    }
}
class Transition {
    constructor(t) {
        this.game = t, this.tweens = {}, this.durations = {}, this.data = {
            cubeY: -.2,
            cameraZoom: .75
        }, this.activeTransitions = 0
    }
    init() {
        this.game.controls.disable(), this.game.cube.object.position.y = this.data.cubeY, this.game.controls.edges.position.y = this.data.cubeY, this.game.cube.animator.position.y = 4, this.game.cube.animator.rotation.x = -Math.PI / 3, this.game.world.camera.zoom = this.data.cameraZoom, this.game.world.camera.updateProjectionMatrix(), this.tweens.buttons = {}, this.tweens.timer = [], this.tweens.title = [], this.tweens.best = [], this.tweens.complete = [], this.tweens.range = [], this.tweens.stats = []
    }
    buttons(t, e) {
        const s = (t, e) => new Tween({
            target: t.style,
            duration: 300,
            easing: e ? Easing.Power.Out(2) : Easing.Power.In(3),
            from: {
                opacity: e ? 0 : 1
            },
            to: {
                opacity: e ? 1 : 0
            },
            onUpdate: s => {
                const i = e ? 1 - s.value : s.value;
                t.style.transform = `translate3d(0, ${1.5*i}em, 0)`
            },
            onComplete: () => t.style.pointerEvents = e ? "all" : "none"
        });
        e.forEach(t => this.tweens.buttons[t] = s(this.game.dom.buttons[t], !1)), setTimeout(() => t.forEach(t => {
            this.tweens.buttons[t] = s(this.game.dom.buttons[t], !0)
        }), e ? 500 : 0)
    }
    cube(t) {
        this.activeTransitions++;
        try {
            this.tweens.cube.stop()
        } catch (t) {}
        const e = this.game.cube.animator.position.y,
            s = this.game.cube.animator.rotation.x;
        this.tweens.cube = new Tween({
            duration: t ? 3e3 : 1250,
            easing: t ? Easing.Elastic.Out(.8, .6) : Easing.Back.In(1),
            onUpdate: i => {
                this.game.cube.animator.position.y = t ? 4 * (1 - i.value) : e + 4 * i.value, this.game.cube.animator.rotation.x = t ? (1 - i.value) * Math.PI / 3 : s + i.value * -Math.PI / 3
            }
        }), this.durations.cube = 1500, setTimeout(() => this.activeTransitions--, this.durations.cube)
    }
    float() {
        try {
            this.tweens.float.stop()
        } catch (t) {}
        this.tweens.float = new Tween({
            duration: 1500,
            easing: Easing.Sine.InOut(),
            yoyo: !0,
            onUpdate: t => {
                this.game.cube.holder.position.y = 0 * t.value - 0, this.game.cube.holder.rotation.x = 0 - 0 * t.value, this.game.cube.holder.rotation.z = -this.game.cube.holder.rotation.x, this.game.cube.holder.rotation.y = this.game.cube.holder.rotation.x
            }
        })
    }
    zoom(t, e) {
        this.activeTransitions++;
        const s = t ? 1 : this.data.cameraZoom,
            i = e > 0 ? Math.max(e, 1500) : 1500,
            o = e > 0 ? Math.round(i / 1500) : 1,
            a = Easing.Power.InOut(e > 0 ? 2 : 3);
        this.tweens.zoom = new Tween({
            target: this.game.world.camera,
            duration: i,
            easing: a,
            to: {
                zoom: s
            },
            onUpdate: () => {
                this.game.world.camera.updateProjectionMatrix()
            }
        }), this.tweens.rotate = new Tween({
            target: this.game.cube.animator.rotation,
            duration: i,
            easing: a,
            to: {
                y: 2 * -Math.PI * o
            },
            onComplete: () => {
                this.game.cube.animator.rotation.y = 0
            }
        }), this.durations.zoom = i, setTimeout(() => this.activeTransitions--, this.durations.zoom)
    }
    elevate(t) {
        this.activeTransitions++, this.tweens.elevate = new Tween({
            target: this.game.cube.object.position,
            duration: t ? 1500 : 0,
            easing: Easing.Power.InOut(3),
            to: {
                y: t ? -.05 : this.data.cubeY
            }
        }), this.durations.elevate = 1500, setTimeout(() => this.activeTransitions--, this.durations.elevate)
    }
    complete(t, e) {
        this.activeTransitions++;
        const s = e ? this.game.dom.texts.best : this.game.dom.texts.complete;
        null === s.querySelector("span i") && s.querySelectorAll("span").forEach(t => this.splitLetters(t));
        const i = s.querySelectorAll(".icon, i");
        this.flipLetters(e ? "best" : "complete", i, t), s.style.opacity = 1;
        const o = this.durations[e ? "best" : "complete"];
        t || setTimeout(() => this.game.dom.texts.timer.style.transform = "", o), setTimeout(() => this.activeTransitions--, o)
    }
    stats(t) {
        t && this.game.scores.calcStats(), this.activeTransitions++, this.tweens.stats.forEach(t => {
            t.stop(), t = null
        });
        let e = -1;
        const s = this.game.dom.stats.querySelectorAll(".stats"),
            i = t ? Easing.Power.Out(2) : Easing.Power.In(3);
        s.forEach((s, o) => {
            const a = o * (t ? 80 : 60);
            this.tweens.stats[e++] = new Tween({
                delay: a,
                duration: 400,
                easing: i,
                onUpdate: e => {
                    const i = t ? 2 * (1 - e.value) : e.value,
                        o = t ? e.value : 1 - e.value;
                    s.style.transform = `translate3d(0, ${i}em, 0)`, s.style.opacity = o
                }
            })
        }), this.durations.stats = 0, setTimeout(() => this.activeTransitions--, this.durations.stats)
    }
    preferences(t) {
        this.activeTransitions++, this.tweens.range.forEach(t => {
            t.stop(), t = null
        });
        let e = -1,
            s = 0;
        const i = this.game.dom.prefs.querySelectorAll(".range"),
            o = t ? Easing.Power.Out(2) : Easing.Power.In(3);
        i.forEach((i, a) => {
            const n = i.querySelector(".range__label"),
                r = i.querySelector(".range__track-line"),
                h = i.querySelector(".range__handle"),
                c = i.querySelectorAll(".range__list div"),
                l = 100 * a;
            n.style.opacity = t ? 0 : 1, r.style.opacity = t ? 0 : 1, h.style.opacity = t ? 0 : 1, h.style.pointerEvents = t ? "all" : "none", this.tweens.range[e++] = new Tween({
                delay: l,
                duration: 400,
                easing: o,
                onUpdate: e => {
                    const s = t ? 1 - e.value : e.value,
                        i = t ? e.value : 1 - e.value;
                    n.style.transform = `translate3d(0, ${s}em, 0)`, n.style.opacity = i
                }
            }), this.tweens.range[e++] = new Tween({
                delay: t ? l + 100 : l,
                duration: 400,
                easing: o,
                onUpdate: e => {
                    const s = t ? 1 - e.value : e.value,
                        i = t ? e.value : 1 - e.value,
                        o = i;
                    r.style.transform = `translate3d(0, ${s}em, 0) scale3d(${i}, 1, 1)`, r.style.opacity = o
                }
            }), this.tweens.range[e++] = new Tween({
                delay: t ? l + 100 : l,
                duration: 400,
                easing: o,
                onUpdate: e => {
                    const s = t ? 1 - e.value : e.value,
                        i = 1 - s,
                        o = .5 + .5 * i;
                    h.style.transform = `translate3d(0, ${s}em, 0) scale3d(${o}, ${o}, ${o})`, h.style.opacity = i
                }
            }), c.forEach((s, i) => {
                s.style.opacity = t ? 0 : 1, this.tweens.range[e++] = new Tween({
                    delay: t ? l + 200 + 50 * i : l,
                    duration: 400,
                    easing: o,
                    onUpdate: e => {
                        const i = t ? 1 - e.value : e.value,
                            o = t ? e.value : 1 - e.value;
                        s.style.transform = `translate3d(0, ${i}em, 0)`, s.style.opacity = o
                    }
                })
            }), s = c.length > s ? c.length - 1 : s, i.style.opacity = 1
        }), this.durations.preferences = t ? 100 * (i.length - 1) + 200 + 50 * s + 400 : 100 * (i.length - 1) + 400, setTimeout(() => this.activeTransitions--, this.durations.preferences)
    }
    title(t) {
        this.activeTransitions++;
        const e = this.game.dom.texts.title;
        null === e.querySelector("span i") && e.querySelectorAll("span").forEach(t => this.splitLetters(t));
        const s = e.querySelectorAll("i");
        this.flipLetters("title", s, t), e.style.opacity = 1;
        const i = this.game.dom.texts.note;
        this.tweens.title[s.length] = new Tween({
            target: i.style,
            easing: Easing.Sine.InOut(),
            duration: t ? 800 : 400,
            yoyo: !!t || null,
            from: {
                opacity: t ? 0 : parseFloat(getComputedStyle(i).opacity)
            },
            to: {
                opacity: t ? 1 : 0
            }
        }), setTimeout(() => this.activeTransitions--, this.durations.title)
    }
    timer(t) {
        this.activeTransitions++;
        const e = this.game.dom.texts.timer;
        e.style.opacity = 0, this.game.timer.convert(), this.game.timer.setText(), this.splitLetters(e);
        const s = e.querySelectorAll("i");
        this.flipLetters("timer", s, t), e.style.opacity = 1, setTimeout(() => this.activeTransitions--, this.durations.timer)
    }
    splitLetters(t) {
        const e = t.innerHTML;
        t.innerHTML = "", e.split("").forEach(e => {
            const s = document.createElement("i");
            s.innerHTML = e, t.appendChild(s)
        })
    }
    flipLetters(t, e, s) {
        try {
            this.tweens[t].forEach(t => t.stop())
        } catch (t) {}
        e.forEach((e, i) => {
            e.style.opacity = s ? 0 : 1, this.tweens[t][i] = new Tween({
                easing: Easing.Sine.Out(),
                duration: s ? 800 : 400,
                delay: 50 * i,
                onUpdate: t => {
                    const i = s ? -80 * (1 - t.value) : 80 * t.value;
                    e.style.transform = `rotate3d(0, 1, 0, ${i}deg)`, e.style.opacity = s ? t.value : 1 - t.value
                }
            })
        }), this.durations[t] = 50 * (e.length - 1) + (s ? 800 : 400)
    }
}
class Timer extends Animation {
    constructor(t) {
        super(!1), this.game = t, this.reset()
    }
    start(t) {
        this.startTime = t ? Date.now() - this.deltaTime : Date.now(), this.deltaTime = 0, this.converted = this.convert(), super.start()
    }
    reset() {
        this.startTime = 0, this.currentTime = 0, this.deltaTime = 0, this.converted = "0:00"
    }
    stop() {
        return this.currentTime = Date.now(), this.deltaTime = this.currentTime - this.startTime, this.convert(), super.stop(), {
            time: this.converted,
            millis: this.deltaTime
        }
    }
    update() {
        const t = this.converted;
        this.currentTime = Date.now(), this.deltaTime = this.currentTime - this.startTime, this.convert(), this.converted != t && (localStorage.setItem("theCube_time", this.deltaTime), this.setText())
    }
    convert() {
        const t = parseInt(this.deltaTime / 1e3 % 60),
            e = parseInt(this.deltaTime / 6e4);
        this.converted = e + ":" + (t < 10 ? "0" : "") + t
    }
    setText() {
        this.game.dom.texts.timer.innerHTML = this.converted
    }
}
const RangeHTML = ['<div class="range">', '<div class="range__label"></div>', '<div class="range__track">', '<div class="range__track-line"></div>', '<div class="range__handle"><div></div></div>', "</div>", '<div class="range__list"></div>', "</div>"].join("\n");
document.querySelectorAll("range").forEach(t => {
    const e = document.createElement("div");
    e.innerHTML = RangeHTML;
    const s = e.querySelector(".range"),
        i = s.querySelector(".range__label"),
        o = s.querySelector(".range__list");
    s.setAttribute("name", t.getAttribute("name")), i.innerHTML = t.getAttribute("title"), t.getAttribute("list").split(",").forEach(t => {
        const e = document.createElement("div");
        e.innerHTML = t, o.appendChild(e)
    }), t.parentNode.replaceChild(s, t)
});
class Range {
    constructor(t, e) {
        e = Object.assign({
            range: [0, 1],
            value: 0,
            step: 0,
            onUpdate: () => {},
            onComplete: () => {}
        }, e || {}), this.element = document.querySelector('.range[name="' + t + '"]'), this.track = this.element.querySelector(".range__track"), this.handle = this.element.querySelector(".range__handle"), this.value = e.value, this.min = e.range[0], this.max = e.range[1], this.step = e.step, this.onUpdate = e.onUpdate, this.onComplete = e.onComplete, this.value = this.round(this.limitValue(this.value)), this.setHandlePosition(), this.initDraggable()
    }
    initDraggable() {
        let t;
        this.draggable = new Draggable(this.handle, {
            calcDelta: !0
        }), this.draggable.onDragStart = (e => {
            t = this.positionFromValue(this.value), this.handle.style.left = t + "px"
        }), this.draggable.onDragMove = (e => {
            t = this.limitPosition(t + e.delta.x), this.value = this.round(this.valueFromPosition(t)), this.setHandlePosition(), this.onUpdate(this.value)
        }), this.draggable.onDragEnd = (t => {
            this.onComplete(this.value)
        })
    }
    round(t) {
        return this.step < 1 ? t : Math.round((t - this.min) / this.step) * this.step + this.min
    }
    limitValue(t) {
        const e = Math.max(this.max, this.min),
            s = Math.min(this.max, this.min);
        return Math.min(Math.max(t, s), e)
    }
    limitPosition(t) {
        return Math.min(Math.max(t, 0), this.track.offsetWidth)
    }
    percentsFromValue(t) {
        return (t - this.min) / (this.max - this.min)
    }
    valueFromPosition(t) {
        return this.min + (this.max - this.min) * (t / this.track.offsetWidth)
    }
    positionFromValue(t) {
        return this.percentsFromValue(t) * this.track.offsetWidth
    }
    setHandlePosition() {
        this.handle.style.left = 100 * this.percentsFromValue(this.value) + "%"
    }
}
class Preferences {
    constructor(t) {
        this.game = t
    }
    init() {
        this.ranges = {
            flip: new Range("flip", {
                value: this.game.controls.flipConfig,
                range: [0, 2],
                step: 1,
                onUpdate: t => {
                    this.game.controls.flipConfig = t
                }
            }),
            scramble: new Range("scramble", {
                value: this.game.scrambler.scrambleLength,
                range: [20, 30],
                step: 5,
                onUpdate: t => {
                    this.game.scrambler.scrambleLength = t
                }
            }),
            fov: new Range("fov", {
                value: this.game.world.fov,
                range: [2, 45],
                onUpdate: t => {
                    this.game.world.fov = t, this.game.world.resize()
                }
            }),
            theme: new Range("theme", {
                value: {
                    cube: 0,
                    erno: 1,
                    dust: 2,
                    camo: 3,
                    rain: 4
                }[this.game.themes.theme],
                range: [0, 4],
                step: 1,
                onUpdate: t => {
                    const e = ["cube", "erno", "dust", "camo", "rain"][t];
                    this.game.themes.setTheme(e)
                }
            })
        }
    }
}
class Confetti {
    constructor(t) {
        this.game = t, this.started = 0, this.options = {
            speed: {
                min: .0011,
                max: .0022
            },
            revolution: {
                min: .01,
                max: .05
            },
            size: {
                min: .1,
                max: .15
            },
            colors: [4303560, 8571448, 16772936, 15677731, 16747530]
        }, this.geometry = new THREE.PlaneGeometry(1, 1), this.material = new THREE.MeshLambertMaterial({
            side: THREE.DoubleSide
        }), this.holders = [new ConfettiStage(this.game, this, 1, 20), new ConfettiStage(this.game, this, -1, 30)]
    }
    start() {
        this.started > 0 || this.holders.forEach(t => {
            this.game.world.scene.add(t.holder), t.start(), this.started++
        })
    }
    stop() {
        0 != this.started && this.holders.forEach(t => {
            t.stop(() => {
                this.game.world.scene.remove(t.holder), this.started--
            })
        })
    }
    updateColors(t) {
        this.holders.forEach(e => {
            e.options.colors.forEach((s, i) => {
                e.options.colors[i] = t[["D", "F", "R", "B", "L"][i]]
            })
        })
    }
}
class ConfettiStage extends Animation {
    constructor(t, e, s, i) {
        super(!1), this.game = t, this.parent = e, this.distanceFromCube = s, this.count = i, this.particles = [], this.holder = new THREE.Object3D, this.holder.rotation.copy(this.game.world.camera.rotation), this.object = new THREE.Object3D, this.holder.add(this.object), this.resizeViewport = this.resizeViewport.bind(this), this.game.world.onResize.push(this.resizeViewport), this.resizeViewport(), this.geometry = this.parent.geometry, this.material = this.parent.material, this.options = this.parent.options;
        let o = this.count;
        for (; o--;) this.particles.push(new Particle(this))
    }
    start() {
        this.time = performance.now(), this.playing = !0;
        let t = this.count;
        for (; t--;) this.particles[t].reset();
        super.start()
    }
    stop(t) {
        this.playing = !1, this.completed = 0, this.callback = t
    }
    reset() {
        super.stop(), this.callback()
    }
    update() {
        const t = performance.now(),
            e = t - this.time;
        this.time = t;
        let s = this.count;
        for (; s--;) this.particles[s].completed || this.particles[s].update(e);
        this.playing || this.completed != this.count || this.reset()
    }
    resizeViewport() {
        const t = this.game.world.camera.fov * THREE.Math.DEG2RAD;
        this.height = 2 * Math.tan(t / 2) * (this.game.world.camera.position.length() - this.distanceFromCube), this.width = this.height * this.game.world.camera.aspect;
        const e = 1 / this.game.transition.data.cameraZoom;
        this.width *= e, this.height *= e, this.object.position.z = this.distanceFromCube, this.object.position.y = this.height / 2
    }
}
class Particle {
    constructor(t) {
        return this.confetti = t, this.options = this.confetti.options, this.velocity = new THREE.Vector3, this.force = new THREE.Vector3, this.mesh = new THREE.Mesh(this.confetti.geometry, this.confetti.material.clone()), this.confetti.object.add(this.mesh), this.size = THREE.Math.randFloat(this.options.size.min, this.options.size.max), this.mesh.scale.set(this.size, this.size, this.size), this
    }
    reset(t = !0) {
        this.completed = !1, this.color = new THREE.Color(this.options.colors[Math.floor(Math.random() * this.options.colors.length)]), this.mesh.material.color.set(this.color), this.speed = -1 * THREE.Math.randFloat(this.options.speed.min, this.options.speed.max), this.mesh.position.x = THREE.Math.randFloat(-this.confetti.width / 2, this.confetti.width / 2), this.mesh.position.y = t ? THREE.Math.randFloat(this.size, this.confetti.height + this.size) : this.size, this.revolutionSpeed = THREE.Math.randFloat(this.options.revolution.min, this.options.revolution.max), this.revolutionAxis = ["x", "y", "z"][Math.floor(3 * Math.random())], this.mesh.rotation.set(Math.random() * Math.PI / 3, Math.random() * Math.PI / 3, Math.random() * Math.PI / 3)
    }
    stop() {
        this.completed = !0, this.confetti.completed++
    }
    update(t) {
        this.mesh.position.y += this.speed * t, this.mesh.rotation[this.revolutionAxis] += this.revolutionSpeed, this.mesh.position.y < -this.confetti.height - this.size && (this.confetti.playing ? this.reset(!1) : this.stop())
    }
}
class Scores {
    constructor(t) {
        this.game = t, this.scores = [], this.solves = 0, this.best = 0, this.worst = 0
    }
    addScore(t) {
        this.scores.push(t), this.solves++, this.scores.lenght > 100 && this.scores.shift();
        let e = !1;
        return (t < this.best || 0 === this.best) && (this.best = t, e = !0), t > this.worst && (this.worst = t), e
    }
    calcStats() {
        this.setStat("total-solves", this.solves), this.setStat("best-time", this.convertTime(this.best)), this.setStat("worst-time", this.convertTime(this.worst)), this.setStat("average-5", this.getAverage(5)), this.setStat("average-12", this.getAverage(12)), this.setStat("average-25", this.getAverage(25))
    }
    setStat(t, e) {
        0 !== e && (this.game.dom.stats.querySelector(`.stats[name="${t}"] b`).innerHTML = e)
    }
    getAverage(t) {
        return this.scores.length < t ? 0 : this.convertTime(this.scores.slice(-t).reduce((t, e) => t + e, 0) / t)
    }
    convertTime(t) {
        if (t <= 0) return 0;
        const e = parseInt(t / 1e3 % 60);
        return parseInt(t / 6e4) + ":" + (e < 10 ? "0" : "") + e
    }
}
class Storage {
    constructor(t) {
        this.game = t
    }
    init() {
        this.loadGame(), this.loadPreferences()
    }
    loadGame() {
        this.game.saved = !1
    }
    loadPreferences() {
        return this.game.controls.flipConfig = 0, this.game.scrambler.scrambleLength = 20, this.game.world.fov = 10, this.game.world.resize(), this.game.themes.setTheme("cube"), !1
    }
}
class Themes {
    constructor(t) {
        this.game = t, this.theme = null, this.colors = {
            cube: {
                U: 16775167,
                D: 16772936,
                F: 15677731,
                R: 4303560,
                B: 16747530,
                L: 8571448,
                P: 12866556,
                G: 7222509
            },
            erno: {
                U: 16777215,
                D: 16766208,
                F: 12852794,
                R: 20922,
                B: 16734208,
                L: 40544,
                P: 12866556,
                G: 45549
            },
            dust: {
                U: 16774891,
                D: 15189133,
                F: 9381182,
                R: 6323817,
                B: 12480354,
                L: 8691549,
                P: 12866556,
                G: 7076914
            },
            camo: {
                U: 16774891,
                D: 12564082,
                F: 8411185,
                R: 7439446,
                B: 3613724,
                L: 3621661,
                P: 12866556,
                G: 3408588
            },
            rain: {
                U: 16448255,
                D: 15579437,
                F: 13508917,
                R: 4496009,
                B: 15489071,
                L: 10725703,
                P: 12866556,
                G: 16749561
            }
        }
    }
    setTheme(t) {
        if (t === this.theme) return;
        this.theme = t;
        const e = this.colors[this.theme];
        this.game.cube.pieces.forEach(t => {
            t.userData.cube.material.color.setHex(e.P)
        }), this.game.cube.edges.forEach(t => {
            t.material.color.setHex(e[t.name])
        }), this.game.dom.rangeHandles.forEach(t => {
            t.style.background = "#" + e.R.toString(16).padStart(6, "0")
        }), this.game.confetti.updateColors(e), this.game.dom.back.style.background = "#" + e.G.toString(16).padStart(6, "0"), this.game.dom.buttons.pwa.style.color = "#" + e.R.toString(16).padStart(6, "0")
    }
}
class IconsConverter {
    constructor(t) {
        if (t = Object.assign({
                tagName: "icon",
                className: "icon",
                styles: !1,
                icons: {},
                observe: !1,
                convert: !1
            }, t || {}), this.tagName = t.tagName, this.className = t.className, this.icons = t.icons, this.svgTag = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.svgTag.setAttribute("class", this.className), t.styles && this.addStyles(), t.convert && this.convertAllIcons(), t.observe) {
            const t = window.MutationObserver || window.WebKitMutationObserver;
            this.observer = new t(t => {
                this.convertAllIcons()
            }), this.observer.observe(document.documentElement, {
                childList: !0,
                subtree: !0
            })
        }
        return this
    }
    convertAllIcons() {
        document.querySelectorAll(this.tagName).forEach(t => {
            this.convertIcon(t)
        })
    }
    convertIcon(t) {
        const e = this.icons[t.attributes[0].localName];
        if (void 0 === e) return;
        const s = this.svgTag.cloneNode(!0),
            i = e.viewbox.split(" ");
        s.setAttributeNS(null, "viewBox", e.viewbox), s.style.width = i[2] / i[3] + "em", s.style.height = "1em", s.innerHTML = e.content, t.parentNode.replaceChild(s, t)
    }
    addStyles() {
        const t = document.createElement("style");
        t.innerHTML = `.${this.className} { display: inline-block; font-size: inherit; overflow: visible; vertical-align: -0.125em; preserveAspectRatio: none; }`, document.head.appendChild(t)
    }
}
const Icons = new IconsConverter({
        icons: {
            settings: {
                viewbox: "0 0 512 512",
                content: '<path fill="currentColor" d="M444.788 291.1l42.616 24.599c4.867 2.809 7.126 8.618 5.459 13.985-11.07 35.642-29.97 67.842-54.689 94.586a12.016 12.016 0 0 1-14.832 2.254l-42.584-24.595a191.577 191.577 0 0 1-60.759 35.13v49.182a12.01 12.01 0 0 1-9.377 11.718c-34.956 7.85-72.499 8.256-109.219.007-5.49-1.233-9.403-6.096-9.403-11.723v-49.184a191.555 191.555 0 0 1-60.759-35.13l-42.584 24.595a12.016 12.016 0 0 1-14.832-2.254c-24.718-26.744-43.619-58.944-54.689-94.586-1.667-5.366.592-11.175 5.459-13.985L67.212 291.1a193.48 193.48 0 0 1 0-70.199l-42.616-24.599c-4.867-2.809-7.126-8.618-5.459-13.985 11.07-35.642 29.97-67.842 54.689-94.586a12.016 12.016 0 0 1 14.832-2.254l42.584 24.595a191.577 191.577 0 0 1 60.759-35.13V25.759a12.01 12.01 0 0 1 9.377-11.718c34.956-7.85 72.499-8.256 109.219-.007 5.49 1.233 9.403 6.096 9.403 11.723v49.184a191.555 191.555 0 0 1 60.759 35.13l42.584-24.595a12.016 12.016 0 0 1 14.832 2.254c24.718 26.744 43.619 58.944 54.689 94.586 1.667 5.366-.592 11.175-5.459 13.985L444.788 220.9a193.485 193.485 0 0 1 0 70.2zM336 256c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80z" class=""></path>'
            },
            back: {
                viewbox: "0 0 512 512",
                content: '<path transform="translate(512, 0) scale(-1,1)" fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z" class=""></path>'
            },
            trophy: {
                viewbox: "0 0 576 512",
                content: '<path fill="currentColor" d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 66.5 77.9 131.7 171.9 142.4C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6C498.4 275.6 576 210.3 576 144V88c0-13.3-10.7-24-24-24zM64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-47.5-16.4-77-49.9-77-70.2zm448 0c0 20.2-29.4 53.8-77 70.2 7-25 11.8-53.6 12.8-86.2H512v16zm-127.3 4.7l-39.6 38.6 9.4 54.6c1.7 9.8-8.7 17.2-17.4 12.6l-49-25.8-49 25.8c-8.8 4.6-19.1-2.9-17.4-12.6l9.4-54.6-39.6-38.6c-7.1-6.9-3.2-19 6.7-20.5l54.8-8 24.5-49.6c4.4-8.9 17.1-8.9 21.5 0l24.5 49.6 54.8 8c9.6 1.5 13.5 13.6 6.4 20.5z" class=""></path>'
            },
            share: {
                viewbox: "0 0 36 50",
                content: '<path fill="currentColor" d="M19,4.414L19,32C19,32.552 18.552,33 18,33C17.448,33 17,32.552 17,32L17,4.414L10.707,10.707C10.317,11.098 9.683,11.098 9.293,10.707C8.902,10.317 8.902,9.683 9.293,9.293L18,0.586L26.707,9.293C27.098,9.683 27.098,10.317 26.707,10.707C26.317,11.098 25.683,11.098 25.293,10.707L19,4.414ZM34,18L26,18C25.448,18 25,17.552 25,17C25,16.448 25.448,16 26,16L36,16L36,50L0,50L0,16L10,16C10.552,16 11,16.448 11,17C11,17.552 10.552,18 10,18L2,18L2,48L34,48L34,18Z" />'
            },
            pwa: {
                viewbox: "0 0 740 280",
                content: '<path d="M544.62 229.7L565.998 175.641H627.722L598.43 93.6366L635.066 0.988922L740 279.601H662.615L644.683 229.7H544.62V229.7Z" fill="#3d3d3d"/><path d="M478.6 279.601L590.935 0.989288H516.461L439.618 181.035L384.974 0.989655H327.73L269.058 181.035L227.681 98.9917L190.236 214.352L228.254 279.601H301.545L354.565 118.139L405.116 279.601H478.6V279.601Z" fill="currentColor"/><path d="M70.6927 183.958H116.565C130.46 183.958 142.834 182.407 153.685 179.305L165.548 142.757L198.704 40.6105C196.177 36.6063 193.293 32.8203 190.051 29.2531C173.028 10.4101 148.121 0.988861 115.33 0.988861H0V279.601H70.6927V183.958V183.958ZM131.411 65.0863C138.061 71.7785 141.385 80.7339 141.385 91.9534C141.385 103.259 138.461 112.225 132.614 118.853C126.203 126.217 114.399 129.898 97.2023 129.898H70.6927V55.0474H97.3972C113.424 55.0474 124.762 58.3937 131.411 65.0863V65.0863Z" fill="#3d3d3d"/>'
            }
        },
        convert: !0
    }),
    MENU = 0,
    PLAYING = 1,
    COMPLETE = 2,
    STATS = 3,
    PREFS = 4,
    SHOW = !0,
    HIDE = !1;
class Game {
    constructor() {
        const t = document.querySelector.bind(document),
            e = document.querySelectorAll.bind(document);
        this.dom = {
            ui: t(".ui"),
            game: t(".ui__game"),
            back: t(".ui__background"),
            texts: t(".ui__texts"),
            prefs: t(".ui__prefs"),
            stats: t(".ui__stats"),
            texts: {
                title: t(".text--title"),
                note: t(".text--note"),
                timer: t(".text--timer"),
                stats: t(".text--timer"),
                complete: t(".text--complete"),
                best: t(".text--best-time")
            },
            buttons: {
                prefs: t(".btn--prefs"),
                back: t(".btn--back"),
                stats: t(".btn--stats"),
                pwa: t(".btn--pwa")
            },
            rangeHandles: e(".range__handle div")
        }, this.world = new World(this), this.cube = new Cube(this), this.controls = new Controls(this), this.scrambler = new Scrambler(this), this.transition = new Transition(this), this.timer = new Timer(this), this.preferences = new Preferences(this), this.scores = new Scores(this), this.storage = new Storage(this), this.confetti = new Confetti(this), this.themes = new Themes(this), this.initActions(), this.state = MENU, this.saved = !1, this.newGame = !1, this.storage.init(), this.preferences.init(), this.transition.init(), this.scores.calcStats(), setTimeout(() => {
            this.transition.float(), this.transition.cube(SHOW), setTimeout(() => this.transition.title(SHOW), 700), setTimeout(() => this.transition.buttons(["prefs", "pwa"], []), 1e3)
        }, 500)
    }
    initActions() {
        let t = !1;

        function e(t) {
            if (window.Event) {
                if (2 == t.which || 3 == t.which) return !1
            } else if (2 == event.button || 3 == event.button) return event.cancelBubble = !0, event.returnValue = !1, !1
        }
        this.dom.game.onclick = (e => {
            if (!(this.transition.activeTransitions > 0) && this.state !== PLAYING)
                if (this.state === MENU) {
                    if (!t) return t = !0, setTimeout(() => t = !1, 300), !1;
                    this.saved || (this.scrambler.scramble(), this.controls.scrambleCube(), this.newGame = !0);
                    const e = this.saved ? 0 : this.scrambler.converted.length * this.controls.flipSpeeds[0];
                    this.state = PLAYING, this.saved = !0, this.transition.buttons([], ["pwa", "prefs"]), this.transition.zoom(PLAYING, e), this.transition.title(HIDE), setTimeout(() => {
                        this.transition.timer(SHOW), this.transition.buttons(["back"], [])
                    }, this.transition.durations.zoom - 1e3), setTimeout(() => {
                        this.controls.enable(), this.newGame || this.timer.start(!0)
                    }, this.transition.durations.zoom)
                } else {
                    if (this.state === COMPLETE) return this.state = STATS, this.saved = !1, this.transition.timer(HIDE), this.transition.complete(HIDE, this.bestTime), this.transition.cube(HIDE), this.timer.reset(), setTimeout(() => {
                        this.cube.reset(), this.confetti.stop(), this.transition.stats(SHOW), this.transition.elevate(0)
                    }, 1e3), !1;
                    this.state === STATS && (this.state = MENU, this.transition.buttons(["pwa", "prefs"], []), this.transition.stats(HIDE), setTimeout(() => this.transition.cube(SHOW), 500), setTimeout(() => this.transition.title(SHOW), 1200))
                }
        }), this.controls.onMove = (() => {
            this.newGame && (this.timer.start(!0), this.newGame = !1)
        }), this.dom.buttons.back.onclick = (t => {
            this.transition.activeTransitions > 0 || (this.state === PREFS ? (this.state = MENU, this.transition.buttons(["pwa", "prefs"], ["back"]), this.transition.preferences(HIDE), setTimeout(() => this.transition.cube(SHOW), 500), setTimeout(() => this.transition.title(SHOW), 1200)) : this.state === PLAYING && (this.state = MENU, this.transition.buttons(["pwa", "prefs"], ["back"]), this.transition.zoom(MENU, 0), this.controls.disable(), this.newGame || this.timer.stop(), this.transition.timer(HIDE), setTimeout(() => this.transition.title(SHOW), this.transition.durations.zoom - 1e3), this.playing = !1, this.controls.disable()))
        }), window.Event && document.captureEvents(Event.MOUSEUP), document.layers && document.captureEvents(Event.MOUSEDOWN), document.oncontextmenu = function(t) {
            return window.Event ? 2 != t.which && 3 != t.which && void 0 : (event.cancelBubble = !0, event.returnValue = !1, !1)
        }, document.onmousedown = e, document.onmouseup = e, this.dom.buttons.prefs.onclick = (t => {
            this.transition.activeTransitions > 0 || (this.state = PREFS, this.transition.buttons(["back"], ["pwa", "prefs"]), this.transition.title(HIDE), this.transition.cube(HIDE), setTimeout(() => this.transition.preferences(SHOW), 1e3))
        }), this.dom.buttons.stats.onclick = (t => {
            this.transition.activeTransitions > 0 || (this.state = STATS, this.transition.buttons([], ["pwa", "prefs"]), this.transition.title(HIDE), this.transition.cube(HIDE), setTimeout(() => this.transition.stats(SHOW), 1e3))
        }), this.controls.onSolved = (() => {
            this.transition.buttons([], ["back"]), this.state = COMPLETE, this.saved = !1, this.controls.disable(), this.timer.stop(), this.bestTime = this.scores.addScore(this.timer.deltaTime), this.transition.zoom(MENU, 0), this.transition.elevate(SHOW), setTimeout(() => {
                this.transition.complete(SHOW, this.bestTime), this.confetti.start()
            }, 1e3)
        })
    }
}
window.game = new Game;