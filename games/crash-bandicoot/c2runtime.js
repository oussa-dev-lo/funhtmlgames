'use strict';
var aa, ba, ca, da, ea, fa, ga, ha, ia, ja, la, ma, oa, pa, qa, A, ra, sa, ta, ua, va, wa, xa, I, za, Aa, Da, Ea, Fa, L, Ga, Ha, Ia, Ja, Ka, La, Ma, Na, Oa, Pa, Sa, Ta, Ua, Va, Wa, Xa, Ya, Za, $a, ab, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc, ec, fc, gc = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ? function(e) {
    return e.__proto__
} : function(e) {
    return e.constructor.prototype
});
(function() {
    function e(a, b, c, g) {
        this.set(a, b, c, g)
    }

    function q() {
        this.hb = this.gb = this.jb = this.ib = this.pb = this.ob = this.Ra = this.Qa = 0
    }

    function n(a, b, c, g) {
        a < b ? c < g ? (t = a < c ? a : c, T = b > g ? b : g) : (t = a < g ? a : g, T = b > c ? b : c) : c < g ? (t = b < c ? b : c, T = a > g ? a : g) : (t = b < g ? b : g, T = a > c ? a : c)
    }

    function h() {
        this.items = this.Be = null;
        this.wj = 0;
        S && (this.Be = new Set);
        this.Fi = [];
        this.Hf = !0
    }

    function r(a) {
        w[U++] = a
    }

    function p() {
        this.R = this.gn = this.y = this.Sn = 0
    }

    function d(a) {
        this.Nb = [];
        this.Qk = this.Sk = this.Tk = this.Rk = 0;
        this.lk(a)
    }

    function c(a, b) {
        this.Wn =
            a;
        this.Vn = b;
        this.cells = {}
    }

    function b(a, b) {
        this.Wn = a;
        this.Vn = b;
        this.cells = {}
    }

    function f(a, b, c) {
        var g;
        return N.length ? (g = N.pop(), g.Ko = a, g.x = b, g.y = c, g) : new ba(a, b, c)
    }

    function a(a, b, c) {
        this.Ko = a;
        this.x = b;
        this.y = c;
        this.Sb = new ca
    }

    function g(a, b, c) {
        var g;
        return G.length ? (g = G.pop(), g.Ko = a, g.x = b, g.y = c, g) : new da(a, b, c)
    }

    function l(a, b, c) {
        this.Ko = a;
        this.x = b;
        this.y = c;
        this.Sb = [];
        this.Sh = !0;
        this.ye = new ca;
        this.Li = !1
    }

    function k(a, b) {
        return a.ie - b.ie
    }
    ea = function(a) {
        window.console && window.console.log && window.console.log(a)
    };
    fa = function(a) {
        window.console && window.console.error && window.console.error(a)
    };
    aa = function(a) {
        return a
    };
    ga = function(a) {
        return "undefined" === typeof a
    };
    ha = function(a) {
        return "number" === typeof a
    };
    ia = function(a) {
        return "string" === typeof a
    };
    ja = function(a) {
        return 0 < a && 0 === (a - 1 & a)
    };
    la = function(a) {
        --a;
        for (var b = 1; 32 > b; b <<= 1) a = a | a >> b;
        return a + 1
    };
    ma = function(a) {
        return 0 > a ? -a : a
    };
    oa = function(a, b) {
        return a > b ? a : b
    };
    pa = function(a, b) {
        return a < b ? a : b
    };
    qa = Math.PI;
    A = function(a) {
        return 0 <= a ? a | 0 : (a | 0) - 1
    };
    ra = function(a) {
        var b =
            a | 0;
        return b === a ? b : b + 1
    };
    sa = function(a, b, c, g, f, k, m, C) {
        var y, l, d, e;
        a < c ? (l = a, y = c) : (l = c, y = a);
        f < m ? (e = f, d = m) : (e = m, d = f);
        if (y < e || l > d) return !1;
        b < g ? (l = b, y = g) : (l = g, y = b);
        k < C ? (e = k, d = C) : (e = C, d = k);
        if (y < e || l > d) return !1;
        y = f - a + m - c;
        l = k - b + C - g;
        a = c - a;
        b = g - b;
        f = m - f;
        k = C - k;
        C = ma(b * f - k * a);
        return ma(f * l - k * y) > C ? !1 : ma(a * l - b * y) <= C
    };
    e.prototype.set = function(a, b, c, g) {
        this.left = a;
        this.top = b;
        this.right = c;
        this.bottom = g
    };
    e.prototype.vh = function(a) {
        this.left = a.left;
        this.top = a.top;
        this.right = a.right;
        this.bottom = a.bottom
    };
    e.prototype.width =
        function() {
            return this.right - this.left
        };
    e.prototype.height = function() {
        return this.bottom - this.top
    };
    e.prototype.offset = function(a, b) {
        this.left += a;
        this.top += b;
        this.right += a;
        this.bottom += b;
        return this
    };
    e.prototype.normalize = function() {
        var a = 0;
        this.left > this.right && (a = this.left, this.left = this.right, this.right = a);
        this.top > this.bottom && (a = this.top, this.top = this.bottom, this.bottom = a)
    };
    e.prototype.Vz = function(a) {
        return !(a.right < this.left || a.bottom < this.top || a.left > this.right || a.top > this.bottom)
    };
    e.prototype.Wz =
        function(a, b, c) {
            return !(a.right + b < this.left || a.bottom + c < this.top || a.left + b > this.right || a.top + c > this.bottom)
        };
    e.prototype.ic = function(a, b) {
        return a >= this.left && a <= this.right && b >= this.top && b <= this.bottom
    };
    e.prototype.Wi = function(a) {
        return this.left === a.left && this.top === a.top && this.right === a.right && this.bottom === a.bottom
    };
    ta = e;
    q.prototype.vi = function(a) {
        this.Qa = a.left;
        this.Ra = a.top;
        this.ob = a.right;
        this.pb = a.top;
        this.ib = a.right;
        this.jb = a.bottom;
        this.gb = a.left;
        this.hb = a.bottom
    };
    q.prototype.tu = function(a,
        b) {
        if (0 === b) this.vi(a);
        else {
            var c = Math.sin(b),
                g = Math.cos(b),
                f = a.left * c,
                k = a.top * c,
                m = a.right * c,
                c = a.bottom * c,
                C = a.left * g,
                y = a.top * g,
                l = a.right * g,
                g = a.bottom * g;
            this.Qa = C - k;
            this.Ra = y + f;
            this.ob = l - k;
            this.pb = y + m;
            this.ib = l - c;
            this.jb = g + m;
            this.gb = C - c;
            this.hb = g + f
        }
    };
    q.prototype.offset = function(a, b) {
        this.Qa += a;
        this.Ra += b;
        this.ob += a;
        this.pb += b;
        this.ib += a;
        this.jb += b;
        this.gb += a;
        this.hb += b;
        return this
    };
    var t = 0,
        T = 0;
    q.prototype.Hr = function(a) {
        n(this.Qa, this.ob, this.ib, this.gb);
        a.left = t;
        a.right = T;
        n(this.Ra, this.pb, this.jb,
            this.hb);
        a.top = t;
        a.bottom = T
    };
    q.prototype.ic = function(a, b) {
        var c = this.Qa,
            g = this.Ra,
            f = this.ob - c,
            k = this.pb - g,
            m = this.ib - c,
            C = this.jb - g,
            y = a - c,
            l = b - g,
            d = f * f + k * k,
            e = f * m + k * C,
            k = f * y + k * l,
            t = m * m + C * C,
            w = m * y + C * l,
            u = 1 / (d * t - e * e),
            f = (t * k - e * w) * u,
            d = (d * w - e * k) * u;
        if (0 <= f && 0 < d && 1 > f + d) return !0;
        f = this.gb - c;
        k = this.hb - g;
        d = f * f + k * k;
        e = f * m + k * C;
        k = f * y + k * l;
        u = 1 / (d * t - e * e);
        f = (t * k - e * w) * u;
        d = (d * w - e * k) * u;
        return 0 <= f && 0 < d && 1 > f + d
    };
    q.prototype.qd = function(a, b) {
        if (b) switch (a) {
            case 0:
                return this.Qa;
            case 1:
                return this.ob;
            case 2:
                return this.ib;
            case 3:
                return this.gb;
            case 4:
                return this.Qa;
            default:
                return this.Qa
        } else switch (a) {
            case 0:
                return this.Ra;
            case 1:
                return this.pb;
            case 2:
                return this.jb;
            case 3:
                return this.hb;
            case 4:
                return this.Ra;
            default:
                return this.Ra
        }
    };
    q.prototype.pt = function() {
        return (this.Qa + this.ob + this.ib + this.gb) / 4
    };
    q.prototype.qt = function() {
        return (this.Ra + this.pb + this.jb + this.hb) / 4
    };
    q.prototype.Cs = function(a) {
        var b = a.pt(),
            c = a.qt();
        if (this.ic(b, c)) return !0;
        b = this.pt();
        c = this.qt();
        if (a.ic(b, c)) return !0;
        var g, f, k, m, C, y, l, d;
        for (l = 0; 4 > l; l++)
            for (d = 0; 4 > d; d++)
                if (b =
                    this.qd(l, !0), c = this.qd(l, !1), g = this.qd(l + 1, !0), f = this.qd(l + 1, !1), k = a.qd(d, !0), m = a.qd(d, !1), C = a.qd(d + 1, !0), y = a.qd(d + 1, !1), sa(b, c, g, f, k, m, C, y)) return !0;
        return !1
    };
    ua = q;
    va = function(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    };
    wa = function(a, b) {
        var c, g;
        b = A(b);
        if (!(0 > b || b >= a.length)) {
            c = b;
            for (g = a.length - 1; c < g; c++) a[c] = a[c + 1];
            xa(a, g)
        }
    };
    xa = function(a, b) {
        a.length = b
    };
    I = function(a) {
        xa(a, 0)
    };
    za = function(a, b) {
        I(a);
        var c, g;
        c = 0;
        for (g = b.length; c < g; ++c) a[c] = b[c]
    };
    Aa = function(a, b) {
        a.push.apply(a, b)
    };
    Da = function(a, b) {
        var c, g;
        c = 0;
        for (g = a.length; c < g; ++c)
            if (a[c] === b) return c;
        return -1
    };
    Ea = function(a, b) {
        var c = Da(a, b); - 1 !== c && wa(a, c)
    };
    Fa = function(a, b, c) {
        return a < b ? b : a > c ? c : a
    };
    L = function(a) {
        return a / (180 / qa)
    };
    Ga = function(a) {
        return 180 / qa * a
    };
    Ha = function(a) {
        a %= 360;
        0 > a && (a += 360);
        return a
    };
    Ia = function(a) {
        a %= 2 * qa;
        0 > a && (a += 2 * qa);
        return a
    };
    Ja = function(a) {
        return Ha(Ga(a))
    };
    Ka = function(a) {
        return Ia(L(a))
    };
    La = function(a, b, c, g) {
        return Math.atan2(g - b, c - a)
    };
    Ma = function(a, b) {
        if (a === b) return 0;
        var c = Math.sin(a),
            g = Math.cos(a),
            f = Math.sin(b),
            k = Math.cos(b),
            c = c * f + g * k;
        return 1 <= c ? 0 : -1 >= c ? qa : Math.acos(c)
    };
    Na = function(a, b, c) {
        var g = Math.sin(a),
            f = Math.cos(a),
            k = Math.sin(b),
            m = Math.cos(b);
        return Math.acos(g * k + f * m) > c ? 0 < f * k - g * m ? Ia(a + c) : Ia(a - c) : Ia(b)
    };
    Oa = function(a, b) {
        var c = Math.sin(a),
            g = Math.cos(a),
            f = Math.sin(b),
            k = Math.cos(b);
        return 0 >= g * f - c * k
    };
    Pa = function(a, b, c, g, f, k) {
        if (0 === c) return k ? a : b;
        var m = Math.sin(c);
        c = Math.cos(c);
        a -= g;
        b -= f;
        var C = a * m;
        a = a * c - b * m;
        b = b * c + C;
        return k ? a + g : b + f
    };
    Sa = function(a, b, c, g) {
        a = c - a;
        b = g - b;
        return Math.sqrt(a * a + b *
            b)
    };
    Ta = function(a, b) {
        return !a !== !b
    };
    Ua = function(a, b, c) {
        return a + (b - a) * c
    };
    Va = function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b)) return !0;
        return !1
    };
    Wa = function(a) {
        for (var b in a) a.hasOwnProperty(b) && delete a[b]
    };
    var v = +new Date;
    Xa = function() {
        if ("undefined" !== typeof window.performance) {
            var a = window.performance;
            if ("undefined" !== typeof a.now) return a.now();
            if ("undefined" !== typeof a.webkitNow) return a.webkitNow();
            if ("undefined" !== typeof a.mozNow) return a.mozNow();
            if ("undefined" !== typeof a.msNow) return a.msNow()
        }
        return Date.now() -
            v
    };
    var m = !1,
        u = m = !1,
        O = !1;
    "undefined" !== typeof window && (m = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), m = !m && /safari/i.test(navigator.userAgent), u = /(iphone|ipod|ipad)/i.test(navigator.userAgent), O = window.c2ejecta);
    var S = !m && !O && !u && "undefined" !== typeof Set && "undefined" !== typeof Set.prototype.forEach;
    h.prototype.contains = function(a) {
        return this.We() ? !1 : S ? this.Be.has(a) : this.items && this.items.hasOwnProperty(a)
    };
    h.prototype.add = function(a) {
        if (S) this.Be.has(a) || (this.Be.add(a),
            this.Hf = !1);
        else {
            var b = a.toString(),
                c = this.items;
            c ? c.hasOwnProperty(b) || (c[b] = a, this.wj++, this.Hf = !1) : (this.items = {}, this.items[b] = a, this.wj = 1, this.Hf = !1)
        }
    };
    h.prototype.remove = function(a) {
        if (!this.We())
            if (S) this.Be.has(a) && (this.Be["delete"](a), this.Hf = !1);
            else if (this.items) {
            a = a.toString();
            var b = this.items;
            b.hasOwnProperty(a) && (delete b[a], this.wj--, this.Hf = !1)
        }
    };
    h.prototype.clear = function() {
        this.We() || (S ? this.Be.clear() : (this.items = null, this.wj = 0), I(this.Fi), this.Hf = !0)
    };
    h.prototype.We = function() {
        return 0 ===
            this.count()
    };
    h.prototype.count = function() {
        return S ? this.Be.size : this.wj
    };
    var w = null,
        U = 0;
    h.prototype.vB = function() {
        if (!this.Hf) {
            if (S) I(this.Fi), w = this.Fi, U = 0, this.Be.forEach(r), w = null, U = 0;
            else {
                var a = this.Fi;
                I(a);
                var b, c = 0,
                    g = this.items;
                if (g)
                    for (b in g) g.hasOwnProperty(b) && (a[c++] = g[b])
            }
            this.Hf = !0
        }
    };
    h.prototype.xf = function() {
        this.vB();
        return this.Fi
    };
    ca = h;
    new ca;
    Ya = function(a, b) {
        S ? Za(a, b.Be) : $a(a, b.xf())
    };
    Za = function(a, b) {
        var c, g, f, k;
        g = c = 0;
        for (f = a.length; c < f; ++c) k = a[c], b.has(k) || (a[g++] = k);
        xa(a, g)
    };
    $a = function(a, b) {
        var c, g, f, k;
        g = c = 0;
        for (f = a.length; c < f; ++c) k = a[c], -1 === Da(b, k) && (a[g++] = k);
        xa(a, g)
    };
    p.prototype.add = function(a) {
        this.y = a - this.Sn;
        this.gn = this.R + this.y;
        this.Sn = this.gn - this.R - this.y;
        this.R = this.gn
    };
    p.prototype.reset = function() {
        this.R = this.gn = this.y = this.Sn = 0
    };
    ab = p;
    gb = function(a) {
        return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    };
    d.prototype.lk = function(a) {
        this.au = a;
        this.be = a.length / 2;
        this.Nb.length = a.length;
        this.Wk = this.Xk = -1;
        this.Kr = 0
    };
    d.prototype.Ph = function() {
        return !this.au.length
    };
    d.prototype.Ga = function() {
        for (var a = this.Nb, b = a[0], c = b, g = a[1], f = g, k, m, C = 1, y = this.be; C < y; ++C) m = 2 * C, k = a[m], m = a[m + 1], k < b && (b = k), k > c && (c = k), m < g && (g = m), m > f && (f = m);
        this.Rk = b;
        this.Sk = c;
        this.Tk = g;
        this.Qk = f
    };
    d.prototype.vi = function(a, b, c) {
        this.Nb.length = 8;
        this.be = 4;
        var g = this.Nb;
        g[0] = a.left - b;
        g[1] = a.top - c;
        g[2] = a.right - b;
        g[3] = a.top - c;
        g[4] = a.right - b;
        g[5] = a.bottom - c;
        g[6] = a.left - b;
        g[7] = a.bottom - c;
        this.Xk = a.right - a.left;
        this.Wk = a.bottom - a.top;
        this.Ga()
    };
    d.prototype.ti = function(a, b, c, g, f) {
        this.Nb.length = 8;
        this.be =
            4;
        var k = this.Nb;
        k[0] = a.Qa - b;
        k[1] = a.Ra - c;
        k[2] = a.ob - b;
        k[3] = a.pb - c;
        k[4] = a.ib - b;
        k[5] = a.jb - c;
        k[6] = a.gb - b;
        k[7] = a.hb - c;
        this.Xk = g;
        this.Wk = f;
        this.Ga()
    };
    d.prototype.su = function(a) {
        this.be = a.be;
        za(this.Nb, a.Nb);
        this.Rk = a.Rk;
        this.Tk - a.Tk;
        this.Sk = a.Sk;
        this.Qk = a.Qk
    };
    d.prototype.rh = function(a, b, c) {
        if (this.Xk !== a || this.Wk !== b || this.Kr !== c) {
            this.Xk = a;
            this.Wk = b;
            this.Kr = c;
            var g, f, k, m, C, y = 0,
                l = 1,
                d = this.au,
                e = this.Nb;
            0 !== c && (y = Math.sin(c), l = Math.cos(c));
            c = 0;
            for (k = this.be; c < k; c++) g = 2 * c, f = g + 1, m = d[g] * a, C = d[f] * b, e[g] = m * l - C *
                y, e[f] = C * l + m * y;
            this.Ga()
        }
    };
    d.prototype.ic = function(a, b) {
        var c = this.Nb;
        if (a === c[0] && b === c[1]) return !0;
        var g, f, k, m = this.be,
            C = this.Rk - 110,
            y = this.Tk - 101,
            l = this.Sk + 131,
            d = this.Qk + 120,
            e, t, w = 0,
            u = 0;
        for (g = 0; g < m; g++) f = 2 * g, k = (g + 1) % m * 2, e = c[f], f = c[f + 1], t = c[k], k = c[k + 1], sa(C, y, a, b, e, f, t, k) && w++, sa(l, d, a, b, e, f, t, k) && u++;
        return 1 === w % 2 || 1 === u % 2
    };
    d.prototype.lj = function(a, b, c) {
        var g = a.Nb,
            f = this.Nb;
        if (this.ic(g[0] + b, g[1] + c) || a.ic(f[0] - b, f[1] - c)) return !0;
        var k, m, C, y, l, d, e, t, w, u, v, p;
        k = 0;
        for (y = this.be; k < y; k++)
            for (m = 2 * k,
                C = (k + 1) % y * 2, t = f[m], m = f[m + 1], w = f[C], u = f[C + 1], C = 0, e = a.be; C < e; C++)
                if (l = 2 * C, d = (C + 1) % e * 2, v = g[l] + b, l = g[l + 1] + c, p = g[d] + b, d = g[d + 1] + c, sa(t, m, w, u, v, l, p, d)) return !0;
        return !1
    };
    hb = d;
    c.prototype.Of = function(a, b, c) {
        var g;
        g = this.cells[a];
        return g ? (g = g[b]) ? g : c ? (g = f(this, a, b), this.cells[a][b] = g) : null : c ? (g = f(this, a, b), this.cells[a] = {}, this.cells[a][b] = g) : null
    };
    c.prototype.zc = function(a) {
        return A(a / this.Wn)
    };
    c.prototype.Ac = function(a) {
        return A(a / this.Vn)
    };
    c.prototype.update = function(a, b, c) {
        var g, f, k, m, C;
        if (b)
            for (g = b.left,
                f = b.right; g <= f; ++g)
                for (k = b.top, m = b.bottom; k <= m; ++k)
                    if (!c || !c.ic(g, k))
                        if (C = this.Of(g, k, !1)) C.remove(a), C.We() && (C.Sb.clear(), 1E3 > N.length && N.push(C), this.cells[g][k] = null);
        if (c)
            for (g = c.left, f = c.right; g <= f; ++g)
                for (k = c.top, m = c.bottom; k <= m; ++k) b && b.ic(g, k) || this.Of(g, k, !0).Vo(a)
    };
    c.prototype.Hm = function(a, b) {
        var c, g, f, k, m, C;
        c = this.zc(a.left);
        f = this.Ac(a.top);
        g = this.zc(a.right);
        for (m = this.Ac(a.bottom); c <= g; ++c)
            for (k = f; k <= m; ++k)(C = this.Of(c, k, !1)) && C.dump(b)
    };
    ib = c;
    b.prototype.Of = function(a, b, c) {
        var f;
        f =
            this.cells[a];
        return f ? (f = f[b]) ? f : c ? (f = g(this, a, b), this.cells[a][b] = f) : null : c ? (f = g(this, a, b), this.cells[a] = {}, this.cells[a][b] = f) : null
    };
    b.prototype.zc = function(a) {
        return A(a / this.Wn)
    };
    b.prototype.Ac = function(a) {
        return A(a / this.Vn)
    };
    b.prototype.update = function(a, b, c) {
        var g, f, k, m, C;
        if (b)
            for (g = b.left, f = b.right; g <= f; ++g)
                for (k = b.top, m = b.bottom; k <= m; ++k)
                    if (!c || !c.ic(g, k))
                        if (C = this.Of(g, k, !1)) C.remove(a), C.We() && (C.reset(), 1E3 > G.length && G.push(C), this.cells[g][k] = null);
        if (c)
            for (g = c.left, f = c.right; g <= f; ++g)
                for (k =
                    c.top, m = c.bottom; k <= m; ++k) b && b.ic(g, k) || this.Of(g, k, !0).Vo(a)
    };
    b.prototype.Hm = function(a, b, c, g, f) {
        var k, m;
        a = this.zc(a);
        b = this.Ac(b);
        c = this.zc(c);
        for (k = this.Ac(g); a <= c; ++a)
            for (g = b; g <= k; ++g)(m = this.Of(a, g, !1)) && m.dump(f)
    };
    b.prototype.rA = function(a) {
        var b, c, g, f, k;
        b = a.left;
        g = a.top;
        c = a.right;
        for (f = a.bottom; b <= c; ++b)
            for (a = g; a <= f; ++a)
                if (k = this.Of(b, a, !1)) k.Sh = !1
    };
    jb = b;
    var N = [];
    a.prototype.We = function() {
        return this.Sb.We()
    };
    a.prototype.Vo = function(a) {
        this.Sb.add(a)
    };
    a.prototype.remove = function(a) {
        this.Sb.remove(a)
    };
    a.prototype.dump = function(a) {
        Aa(a, this.Sb.xf())
    };
    ba = a;
    var G = [];
    l.prototype.We = function() {
        if (!this.Sb.length) return !0;
        if (this.Sb.length > this.ye.count()) return !1;
        this.uo();
        return !0
    };
    l.prototype.Vo = function(a) {
        this.ye.contains(a) ? (this.ye.remove(a), this.ye.We() && (this.Li = !1)) : this.Sb.length ? (this.Sb[this.Sb.length - 1].Ud() > a.Ud() && (this.Sh = !1), this.Sb.push(a)) : (this.Sb.push(a), this.Sh = !0)
    };
    l.prototype.remove = function(a) {
        this.ye.add(a);
        this.Li = !0;
        30 <= this.ye.count() && this.uo()
    };
    l.prototype.uo = function() {
        this.Li &&
            (this.ye.count() === this.Sb.length ? this.reset() : (Ya(this.Sb, this.ye), this.ye.clear(), this.Li = !1))
    };
    l.prototype.wy = function() {
        this.Sh || (this.Sb.sort(k), this.Sh = !0)
    };
    l.prototype.reset = function() {
        I(this.Sb);
        this.Sh = !0;
        this.ye.clear();
        this.Li = !1
    };
    l.prototype.dump = function(a) {
        this.uo();
        this.wy();
        this.Sb.length && a.push(this.Sb)
    };
    da = l;
    var z = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
    kb = function(a) {
        return 0 >= a || 11 <= a ? "source-over" :
            z[a - 1]
    };
    lb = function(a, b, c) {
        if (c) switch (a.nc = c.ONE, a.jc = c.ONE_MINUS_SRC_ALPHA, b) {
            case 1:
                a.nc = c.ONE;
                a.jc = c.ONE;
                break;
            case 3:
                a.nc = c.ONE;
                a.jc = c.ZERO;
                break;
            case 4:
                a.nc = c.ONE_MINUS_DST_ALPHA;
                a.jc = c.ONE;
                break;
            case 5:
                a.nc = c.DST_ALPHA;
                a.jc = c.ZERO;
                break;
            case 6:
                a.nc = c.ZERO;
                a.jc = c.SRC_ALPHA;
                break;
            case 7:
                a.nc = c.ONE_MINUS_DST_ALPHA;
                a.jc = c.ZERO;
                break;
            case 8:
                a.nc = c.ZERO;
                a.jc = c.ONE_MINUS_SRC_ALPHA;
                break;
            case 9:
                a.nc = c.DST_ALPHA;
                a.jc = c.ONE_MINUS_SRC_ALPHA;
                break;
            case 10:
                a.nc = c.ONE_MINUS_DST_ALPHA, a.jc = c.SRC_ALPHA
        }
    };
    mb = function(a) {
        return Math.round(1E6 * a) / 1E6
    };
    nb = function(a, b) {
        return "string" !== typeof a || "string" !== typeof b || a.length !== b.length ? !1 : a === b ? !0 : a.toLowerCase() === b.toLowerCase()
    };
    ob = function(a) {
        a = a.target;
        return !a || a === document || a === window || document && document.body && a === document.body || nb(a.tagName, "canvas") ? !0 : !1
    }
})();
var hc = "undefined" !== typeof Float32Array ? Float32Array : Array;

function ic(e) {
    var q = new hc(3);
    e && (q[0] = e[0], q[1] = e[1], q[2] = e[2]);
    return q
}

function jc(e) {
    var q = new hc(16);
    e && (q[0] = e[0], q[1] = e[1], q[2] = e[2], q[3] = e[3], q[4] = e[4], q[5] = e[5], q[6] = e[6], q[7] = e[7], q[8] = e[8], q[9] = e[9], q[10] = e[10], q[11] = e[11], q[12] = e[12], q[13] = e[13], q[14] = e[14], q[15] = e[15]);
    return q
}

function kc(e, q) {
    q[0] = e[0];
    q[1] = e[1];
    q[2] = e[2];
    q[3] = e[3];
    q[4] = e[4];
    q[5] = e[5];
    q[6] = e[6];
    q[7] = e[7];
    q[8] = e[8];
    q[9] = e[9];
    q[10] = e[10];
    q[11] = e[11];
    q[12] = e[12];
    q[13] = e[13];
    q[14] = e[14];
    q[15] = e[15]
}

function lc(e, q) {
    var n = q[0],
        h = q[1];
    q = q[2];
    e[0] *= n;
    e[1] *= n;
    e[2] *= n;
    e[3] *= n;
    e[4] *= h;
    e[5] *= h;
    e[6] *= h;
    e[7] *= h;
    e[8] *= q;
    e[9] *= q;
    e[10] *= q;
    e[11] *= q
}

function mc(e, q, n, h) {
    h || (h = jc());
    var r, p, d, c, b, f, a, g, l = e[0],
        k = e[1];
    e = e[2];
    p = n[0];
    d = n[1];
    r = n[2];
    n = q[1];
    f = q[2];
    l === q[0] && k === n && e === f ? (e = h, e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1) : (n = l - q[0], f = k - q[1], a = e - q[2], g = 1 / Math.sqrt(n * n + f * f + a * a), n *= g, f *= g, a *= g, q = d * a - r * f, r = r * n - p * a, p = p * f - d * n, (g = Math.sqrt(q * q + r * r + p * p)) ? (g = 1 / g, q *= g, r *= g, p *= g) : p = r = q = 0, d = f * p - a * r, c = a * q - n * p, b = n * r - f * q, (g = Math.sqrt(d * d + c * c + b * b)) ? (g = 1 / g, d *= g, c *= g, b *= g) : b = c = d = 0,
        h[0] = q, h[1] = d, h[2] = n, h[3] = 0, h[4] = r, h[5] = c, h[6] = f, h[7] = 0, h[8] = p, h[9] = b, h[10] = a, h[11] = 0, h[12] = -(q * l + r * k + p * e), h[13] = -(d * l + c * k + b * e), h[14] = -(n * l + f * k + a * e), h[15] = 1)
}
(function() {
    function e(c, b, f) {
        this.Xe = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
        this.height = this.width = 0;
        this.Oa = !!f;
        this.Ll = this.nj = !1;
        this.co = 0;
        this.zn = 1;
        this.zq = 1E3;
        this.GB = (this.zq - this.zn) / 32768;
        this.Tn = ic([0, 0, 100]);
        this.Xs = ic([0, 0, 0]);
        this.Mu = ic([0, 1, 0]);
        this.Fk = ic([1, 1, 1]);
        this.Vr = !0;
        this.fm = jc();
        this.gd = jc();
        this.gp = jc();
        this.bo = jc();
        this.K = c;
        this.version = 0 === this.K.getParameter(this.K.VERSION).indexOf("WebGL 2") ? 2 : 1;
        this.ys()
    }

    function q(c, b, f) {
        this.K = c;
        this.mk =
            b;
        this.name = f;
        this.Bd = c.getAttribLocation(b, "aPos");
        this.Xf = c.getAttribLocation(b, "aTex");
        this.Vs = c.getUniformLocation(b, "matP");
        this.Zl = c.getUniformLocation(b, "matMV");
        this.bi = c.getUniformLocation(b, "opacity");
        this.mp = c.getUniformLocation(b, "colorFill");
        this.Ws = c.getUniformLocation(b, "samplerFront");
        this.Ij = c.getUniformLocation(b, "samplerBack");
        this.Wg = c.getUniformLocation(b, "destStart");
        this.Vg = c.getUniformLocation(b, "destEnd");
        this.Kj = c.getUniformLocation(b, "seconds");
        this.op = c.getUniformLocation(b,
            "pixelWidth");
        this.np = c.getUniformLocation(b, "pixelHeight");
        this.Hj = c.getUniformLocation(b, "layerScale");
        this.Gj = c.getUniformLocation(b, "layerAngle");
        this.Lj = c.getUniformLocation(b, "viewOrigin");
        this.Jj = c.getUniformLocation(b, "scrollPos");
        this.Pz = !!(this.op || this.np || this.Kj || this.Ij || this.Wg || this.Vg || this.Hj || this.Gj || this.Lj || this.Jj);
        this.gt = this.ht = -999;
        this.em = 1;
        this.bt = this.$s = 0;
        this.dt = this.Zs = this.Ys = 1;
        this.kt = this.jt = this.it = this.nt = this.mt = this.ct = 0;
        this.fp = [];
        this.et = jc();
        this.bi && c.uniform1f(this.bi,
            1);
        this.mp && c.uniform4f(this.mp, 1, 1, 1, 1);
        this.Ws && c.uniform1i(this.Ws, 0);
        this.Ij && c.uniform1i(this.Ij, 1);
        this.Wg && c.uniform2f(this.Wg, 0, 0);
        this.Vg && c.uniform2f(this.Vg, 1, 1);
        this.Hj && c.uniform1f(this.Hj, 1);
        this.Gj && c.uniform1f(this.Gj, 0);
        this.Lj && c.uniform2f(this.Lj, 0, 0);
        this.Jj && c.uniform2f(this.Jj, 0, 0);
        this.Kj && c.uniform1f(this.Kj, 0);
        this.Dg = !1
    }

    function n(c, b) {
        return c[0] === b[0] && c[1] === b[1] && c[2] === b[2] && c[3] === b[3] && c[4] === b[4] && c[5] === b[5] && c[6] === b[6] && c[7] === b[7] && c[8] === b[8] && c[9] === b[9] &&
            c[10] === b[10] && c[11] === b[11] && c[12] === b[12] && c[13] === b[13] && c[14] === b[14] && c[15] === b[15]
    }

    function h(c, b) {
        this.type = c;
        this.F = b;
        this.K = b.K;
        this.yd = this.oc = this.Lt = 0;
        this.na = this.Id = null;
        this.uu = []
    }
    var r = jc();
    e.prototype.ys = function() {
        var c = this.K,
            b;
        this.Qs = 1;
        this.Og = this.Tf = null;
        this.el = 1;
        c.clearColor(0, 0, 0, 0);
        c.clear(c.COLOR_BUFFER_BIT);
        c.enable(c.BLEND);
        c.blendFunc(c.ONE, c.ONE_MINUS_SRC_ALPHA);
        c.disable(c.CULL_FACE);
        c.disable(c.STENCIL_TEST);
        c.disable(c.DITHER);
        this.Oa ? (c.enable(c.DEPTH_TEST), c.depthFunc(c.LEQUAL)) :
            c.disable(c.DEPTH_TEST);
        this.Rs = c.ONE;
        this.Ps = c.ONE_MINUS_SRC_ALPHA;
        this.vn = new Float32Array(8E3 * (this.Oa ? 3 : 2));
        this.jn = new Float32Array(16E3);
        this.Hp = new Float32Array(32E3);
        this.Gp = c.createBuffer();
        c.bindBuffer(c.ARRAY_BUFFER, this.Gp);
        c.bufferData(c.ARRAY_BUFFER, this.Hp.byteLength, c.DYNAMIC_DRAW);
        this.Dk = Array(4);
        this.uk = Array(4);
        for (b = 0; 4 > b; b++) this.Dk[b] = c.createBuffer(), c.bindBuffer(c.ARRAY_BUFFER, this.Dk[b]), c.bufferData(c.ARRAY_BUFFER, this.vn.byteLength, c.DYNAMIC_DRAW), this.uk[b] = c.createBuffer(),
            c.bindBuffer(c.ARRAY_BUFFER, this.uk[b]), c.bufferData(c.ARRAY_BUFFER, this.jn.byteLength, c.DYNAMIC_DRAW);
        this.Me = 0;
        this.Tz = c.createBuffer();
        c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, this.Tz);
        for (var f = new Uint16Array(12E3), a = b = 0; 12E3 > b;) f[b++] = a, f[b++] = a + 1, f[b++] = a + 2, f[b++] = a, f[b++] = a + 2, f[b++] = a + 3, a += 4;
        c.bufferData(c.ELEMENT_ARRAY_BUFFER, f, c.STATIC_DRAW);
        this.mi = this.Ci = this.yf = 0;
        this.eb = [];
        b = this.Oa ? "attribute highp vec3 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, aPos.z, 1.0);\n\tvTex = aTex;\n}" :
            "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}";
        f = this.Si({
            src: "varying mediump vec2 vTex;\nuniform lowp float opacity;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, vTex);\n\tgl_FragColor *= opacity;\n}"
        }, b, "<default>");
        this.eb.push(f);
        f = this.Si({
                src: "uniform mediump sampler2D samplerFront;\nvarying lowp float opacity;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);\n\tgl_FragColor *= opacity;\n}"
            },
            "attribute vec4 aPos;\nvarying float opacity;\nuniform mat4 matP;\nuniform mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tgl_PointSize = aPos.z;\n\topacity = aPos.w;\n}", "<point>");
        this.eb.push(f);
        f = this.Si({
            src: "varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tif (texture2D(samplerFront, vTex).a < 1.0)\n\t\tdiscard;\n}"
        }, b, "<earlyz>");
        this.eb.push(f);
        f = this.Si({
                src: "uniform lowp vec4 colorFill;\nvoid main(void) {\n\tgl_FragColor = colorFill;\n}"
            },
            b, "<fill>");
        this.eb.push(f);
        for (var g in nc) nc.hasOwnProperty(g) && this.eb.push(this.Si(nc[g], b, g));
        c.activeTexture(c.TEXTURE0);
        c.bindTexture(c.TEXTURE_2D, null);
        this.Ke = [];
        this.le = 0;
        this.kc = this.ac = !1;
        this.Rr = this.yj = -1;
        this.xh = null;
        this.so = c.createFramebuffer();
        this.il = this.Jm = null;
        this.Fr = !1;
        this.Oa && (this.il = c.createRenderbuffer());
        this.hg = ic([0, 0, 0]);
        c = c.getParameter(c.ALIASED_POINT_SIZE_RANGE);
        this.uA = c[0];
        this.sp = c[1];
        2048 < this.sp && (this.sp = 2048);
        this.Kc(0)
    };
    q.prototype.qq = function(c) {
        n(this.et,
            c) || (kc(c, this.et), this.K.uniformMatrix4fv(this.Zl, !1, c))
    };
    e.prototype.Si = function(c, b, f) {
        var a = this.K,
            g = a.createShader(a.FRAGMENT_SHADER);
        a.shaderSource(g, c.src);
        a.compileShader(g);
        if (!a.getShaderParameter(g, a.COMPILE_STATUS)) return a.deleteShader(g), null;
        var l = a.createShader(a.VERTEX_SHADER);
        a.shaderSource(l, b);
        a.compileShader(l);
        if (!a.getShaderParameter(l, a.COMPILE_STATUS)) return a.deleteShader(g), a.deleteShader(l), null;
        b = a.createProgram();
        a.attachShader(b, g);
        a.attachShader(b, l);
        a.linkProgram(b);
        if (!a.getProgramParameter(b, a.LINK_STATUS)) return a.deleteShader(g), a.deleteShader(l), a.deleteProgram(b), null;
        a.useProgram(b);
        a.deleteShader(g);
        a.deleteShader(l);
        f = new q(a, b, f);
        f.qo = c.qo || 0;
        f.ro = c.ro || 0;
        f.Qr = !!c.Qr;
        f.$d = !!c.$d;
        f.Dr = !!c.Dr;
        f.ka = c.ka || [];
        c = 0;
        for (g = f.ka.length; c < g; c++) f.ka[c][1] = a.getUniformLocation(b, f.ka[c][0]), f.fp.push(0), a.uniform1f(f.ka[c][1], 0);
        return f
    };
    e.prototype.Io = function(c) {
        var b, f;
        b = 0;
        for (f = this.eb.length; b < f; b++)
            if (this.eb[b].name === c) return b;
        return -1
    };
    e.prototype.$t =
        function(c, b, f) {
            var a = this.gd,
                g = this.fm,
                l = [0, 0, 0, 0, 0, 0, 0, 0];
            l[0] = a[0] * c + a[4] * b + a[12];
            l[1] = a[1] * c + a[5] * b + a[13];
            l[2] = a[2] * c + a[6] * b + a[14];
            l[3] = a[3] * c + a[7] * b + a[15];
            l[4] = g[0] * l[0] + g[4] * l[1] + g[8] * l[2] + g[12] * l[3];
            l[5] = g[1] * l[0] + g[5] * l[1] + g[9] * l[2] + g[13] * l[3];
            l[6] = g[2] * l[0] + g[6] * l[1] + g[10] * l[2] + g[14] * l[3];
            l[7] = -l[2];
            0 !== l[7] && (l[7] = 1 / l[7], l[4] *= l[7], l[5] *= l[7], l[6] *= l[7], f[0] = (.5 * l[4] + .5) * this.width, f[1] = (.5 * l[5] + .5) * this.height)
        };
    e.prototype.nf = function(c, b, f) {
        if (this.width !== c || this.height !== b || f) {
            this.Qe();
            f = this.K;
            this.width = c;
            this.height = b;
            f.viewport(0, 0, c, b);
            mc(this.Tn, this.Xs, this.Mu, this.gd);
            if (this.Oa) {
                var a = -c / 2;
                c = c / 2;
                var g = b / 2;
                b = -b / 2;
                var l = this.zn,
                    k = this.zq,
                    d = this.fm;
                d || (d = jc());
                var e = c - a,
                    v = b - g,
                    m = k - l;
                d[0] = 2 / e;
                d[1] = 0;
                d[2] = 0;
                d[3] = 0;
                d[4] = 0;
                d[5] = 2 / v;
                d[6] = 0;
                d[7] = 0;
                d[8] = 0;
                d[9] = 0;
                d[10] = -2 / m;
                d[11] = 0;
                d[12] = -(a + c) / e;
                d[13] = -(b + g) / v;
                d[14] = -(k + l) / m;
                d[15] = 1;
                this.Fk[0] = 1;
                this.Fk[1] = 1
            } else b = c / b, a = this.zn, c = this.zq, d = this.fm, k = a * Math.tan(45 * Math.PI / 360), b *= k, g = -b, l = -k, d || (d = jc()), e = b - g, v = k - l, m = c - a, d[0] = 2 * a /
                e, d[1] = 0, d[2] = 0, d[3] = 0, d[4] = 0, d[5] = 2 * a / v, d[6] = 0, d[7] = 0, d[8] = (b + g) / e, d[9] = (k + l) / v, d[10] = -(c + a) / m, d[11] = -1, d[12] = 0, d[13] = 0, d[14] = -(c * a * 2) / m, d[15] = 0, a = [0, 0], c = [0, 0], this.$t(0, 0, a), this.$t(1, 1, c), this.Fk[0] = 1 / (c[0] - a[0]), this.Fk[1] = -1 / (c[1] - a[1]);
            a = 0;
            for (c = this.eb.length; a < c; a++) g = this.eb[a], g.Dg = !1, g.Vs && (f.useProgram(g.mk), f.uniformMatrix4fv(g.Vs, !1, this.fm));
            f.useProgram(this.eb[this.yj].mk);
            f.bindTexture(f.TEXTURE_2D, null);
            f.activeTexture(f.TEXTURE1);
            f.bindTexture(f.TEXTURE_2D, null);
            f.activeTexture(f.TEXTURE0);
            this.Og = this.Tf = null;
            this.il && (f.bindFramebuffer(f.FRAMEBUFFER, this.so), f.bindRenderbuffer(f.RENDERBUFFER, this.il), f.renderbufferStorage(f.RENDERBUFFER, f.DEPTH_COMPONENT16, this.width, this.height), this.Fr || (f.framebufferRenderbuffer(f.FRAMEBUFFER, f.DEPTH_ATTACHMENT, f.RENDERBUFFER, this.il), this.Fr = !0), f.bindRenderbuffer(f.RENDERBUFFER, null), f.bindFramebuffer(f.FRAMEBUFFER, null), this.Jm = null)
        }
    };
    e.prototype.Ed = function() {
        mc(this.Tn, this.Xs, this.Mu, this.gd);
        lc(this.gd, this.Fk)
    };
    e.prototype.translate = function(c,
        b) {
        if (0 !== c || 0 !== b) {
            this.hg[0] = c;
            this.hg[1] = b;
            this.hg[2] = 0;
            var f = this.gd,
                a = this.hg,
                g = a[0],
                l = a[1],
                a = a[2];
            f[12] = f[0] * g + f[4] * l + f[8] * a + f[12];
            f[13] = f[1] * g + f[5] * l + f[9] * a + f[13];
            f[14] = f[2] * g + f[6] * l + f[10] * a + f[14];
            f[15] = f[3] * g + f[7] * l + f[11] * a + f[15]
        }
    };
    e.prototype.scale = function(c, b) {
        if (1 !== c || 1 !== b) this.hg[0] = c, this.hg[1] = b, this.hg[2] = 1, lc(this.gd, this.hg)
    };
    e.prototype.Lm = function(c) {
        if (0 !== c) {
            var b = this.gd,
                f, a = Math.sin(c);
            c = Math.cos(c);
            var g = b[0],
                l = b[1],
                k = b[2],
                d = b[3],
                e = b[4],
                v = b[5],
                m = b[6],
                u = b[7];
            f ? b !== f && (f[8] =
                b[8], f[9] = b[9], f[10] = b[10], f[11] = b[11], f[12] = b[12], f[13] = b[13], f[14] = b[14], f[15] = b[15]) : f = b;
            f[0] = g * c + e * a;
            f[1] = l * c + v * a;
            f[2] = k * c + m * a;
            f[3] = d * c + u * a;
            f[4] = g * -a + e * c;
            f[5] = l * -a + v * c;
            f[6] = k * -a + m * c;
            f[7] = d * -a + u * c
        }
    };
    e.prototype.ld = function() {
        if (!n(this.gp, this.gd)) {
            var c = this.Hc();
            c.type = 5;
            c.na ? kc(this.gd, c.na) : c.na = jc(this.gd);
            kc(this.gd, this.gp);
            this.kc = this.ac = !1
        }
    };
    e.prototype.Qm = function(c) {
        this.Oa && (32760 < c && (c = 32760), this.co = this.Tn[2] - this.zn - c * this.GB)
    };
    h.prototype.by = function() {
        var c = this.K,
            b = this.F;
        0 !==
            this.oc ? (c.depthMask(!0), c.colorMask(!1, !1, !1, !1), c.disable(c.BLEND), c.bindFramebuffer(c.FRAMEBUFFER, b.so), c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, null, 0), c.clear(c.DEPTH_BUFFER_BIT), c.bindFramebuffer(c.FRAMEBUFFER, null), b.Ll = !0) : (c.depthMask(!1), c.colorMask(!0, !0, !0, !0), c.enable(c.BLEND), b.Ll = !1)
    };
    h.prototype.gy = function() {
        this.K.bindTexture(this.K.TEXTURE_2D, this.Id)
    };
    h.prototype.hy = function() {
        var c = this.K;
        c.activeTexture(c.TEXTURE1);
        c.bindTexture(c.TEXTURE_2D, this.Id);
        c.activeTexture(c.TEXTURE0)
    };
    h.prototype.cy = function() {
        var c = this.Lt,
            b = this.F;
        b.el = c;
        b = b.xh;
        b.bi && b.em !== c && (b.em = c, this.K.uniform1f(b.bi, c))
    };
    h.prototype.Xx = function() {
        this.K.drawElements(this.K.TRIANGLES, this.yd, this.K.UNSIGNED_SHORT, this.oc)
    };
    h.prototype.Zx = function() {
        this.K.blendFunc(this.oc, this.yd)
    };
    h.prototype.jy = function() {
        var c, b, f, a = this.F.eb,
            g = this.F.Rr;
        c = 0;
        for (b = a.length; c < b; c++) f = a[c], c === g && f.Zl ? (f.qq(this.na), f.Dg = !0) : f.Dg = !1;
        kc(this.na, this.F.bo)
    };
    h.prototype.Yx = function() {
        var c = this.K,
            b = this.F;
        this.Id ? (b.Og === this.Id && (c.activeTexture(c.TEXTURE1), c.bindTexture(c.TEXTURE_2D, null), b.Og = null, c.activeTexture(c.TEXTURE0)), c.bindFramebuffer(c.FRAMEBUFFER, b.so), b.Ll || c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, this.Id, 0)) : (b.Oa || c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, null, 0), c.bindFramebuffer(c.FRAMEBUFFER, null))
    };
    h.prototype.Ux = function() {
        var c = this.K,
            b = this.oc;
        0 === b ? (c.clearColor(this.na[0], this.na[1], this.na[2], this.na[3]), c.clear(c.COLOR_BUFFER_BIT)) :
            1 === b ? (c.enable(c.SCISSOR_TEST), c.scissor(this.na[0], this.na[1], this.na[2], this.na[3]), c.clearColor(0, 0, 0, 0), c.clear(c.COLOR_BUFFER_BIT), c.disable(c.SCISSOR_TEST)) : c.clear(c.DEPTH_BUFFER_BIT)
    };
    h.prototype.ay = function() {
        var c = this.K;
        0 !== this.oc ? c.enable(c.DEPTH_TEST) : c.disable(c.DEPTH_TEST)
    };
    h.prototype.Wx = function() {
        var c = this.K,
            b = this.F;
        b.Oa && c.disable(c.DEPTH_TEST);
        var f = b.eb[1];
        c.useProgram(f.mk);
        !f.Dg && f.Zl && (f.qq(b.bo), f.Dg = !0);
        c.enableVertexAttribArray(f.Bd);
        c.bindBuffer(c.ARRAY_BUFFER, b.Gp);
        c.vertexAttribPointer(f.Bd, 4, c.FLOAT, !1, 0, 0);
        c.drawArrays(c.POINTS, this.oc / 4, this.yd);
        f = b.xh;
        c.useProgram(f.mk);
        0 <= f.Bd && (c.enableVertexAttribArray(f.Bd), c.bindBuffer(c.ARRAY_BUFFER, b.Dk[b.Me]), c.vertexAttribPointer(f.Bd, b.Oa ? 3 : 2, c.FLOAT, !1, 0, 0));
        0 <= f.Xf && (c.enableVertexAttribArray(f.Xf), c.bindBuffer(c.ARRAY_BUFFER, b.uk[b.Me]), c.vertexAttribPointer(f.Xf, 2, c.FLOAT, !1, 0, 0));
        b.Oa && c.enable(c.DEPTH_TEST)
    };
    h.prototype.ey = function() {
        var c = this.K,
            b = this.F,
            f = b.eb[this.oc];
        b.Rr = this.oc;
        b.xh = f;
        c.useProgram(f.mk);
        !f.Dg && f.Zl && (f.qq(b.bo), f.Dg = !0);
        f.bi && f.em !== b.el && (f.em = b.el, c.uniform1f(f.bi, b.el));
        0 <= f.Bd && (c.enableVertexAttribArray(f.Bd), c.bindBuffer(c.ARRAY_BUFFER, b.Dk[b.Me]), c.vertexAttribPointer(f.Bd, b.Oa ? 3 : 2, c.FLOAT, !1, 0, 0));
        0 <= f.Xf && (c.enableVertexAttribArray(f.Xf), c.bindBuffer(c.ARRAY_BUFFER, b.uk[b.Me]), c.vertexAttribPointer(f.Xf, 2, c.FLOAT, !1, 0, 0))
    };
    h.prototype.$x = function() {
        var c = this.na;
        this.K.uniform4f(this.F.xh.mp, c[0], c[1], c[2], c[3])
    };
    h.prototype.fy = function() {
        var c, b, f = this.F.xh,
            a = this.K;
        c =
            this.na;
        f.Ij && this.F.Og !== this.Id && (a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, this.Id), this.F.Og = this.Id, a.activeTexture(a.TEXTURE0));
        var g = c[0];
        f.op && g !== f.ht && (f.ht = g, a.uniform1f(f.op, g));
        g = c[1];
        f.np && g !== f.gt && (f.gt = g, a.uniform1f(f.np, g));
        g = c[2];
        b = c[3];
        !f.Wg || g === f.$s && b === f.bt || (f.$s = g, f.bt = b, a.uniform2f(f.Wg, g, b));
        g = c[4];
        b = c[5];
        !f.Vg || g === f.Ys && b === f.Zs || (f.Ys = g, f.Zs = b, a.uniform2f(f.Vg, g, b));
        g = c[6];
        f.Hj && g !== f.dt && (f.dt = g, a.uniform1f(f.Hj, g));
        g = c[7];
        f.Gj && g !== f.ct && (f.ct = g, a.uniform1f(f.Gj,
            g));
        g = c[8];
        b = c[9];
        !f.Lj || g === f.mt && b === f.nt || (f.mt = g, f.nt = b, a.uniform2f(f.Lj, g, b));
        g = c[10];
        b = c[11];
        !f.Jj || g === f.it && b === f.jt || (f.it = g, f.jt = b, a.uniform2f(f.Jj, g, b));
        g = c[12];
        f.Kj && g !== f.kt && (f.kt = g, a.uniform1f(f.Kj, g));
        if (f.ka.length)
            for (c = 0, b = f.ka.length; c < b; c++) g = this.uu[c], g !== f.fp[c] && (f.fp[c] = g, a.uniform1f(f.ka[c][1], g))
    };
    e.prototype.Hc = function() {
        this.le === this.Ke.length && this.Ke.push(new h(0, this));
        return this.Ke[this.le++]
    };
    e.prototype.Qe = function() {
        if (0 !== this.le && !this.K.isContextLost()) {
            var c =
                this.K;
            0 < this.mi && (c.bindBuffer(c.ARRAY_BUFFER, this.Gp), c.bufferSubData(c.ARRAY_BUFFER, 0, this.Hp.subarray(0, this.mi)), b && 0 <= b.Bd && "<point>" === b.name && c.vertexAttribPointer(b.Bd, 4, c.FLOAT, !1, 0, 0));
            if (0 < this.yf) {
                var b = this.xh;
                c.bindBuffer(c.ARRAY_BUFFER, this.Dk[this.Me]);
                c.bufferSubData(c.ARRAY_BUFFER, 0, this.vn.subarray(0, this.yf));
                b && 0 <= b.Bd && "<point>" !== b.name && c.vertexAttribPointer(b.Bd, this.Oa ? 3 : 2, c.FLOAT, !1, 0, 0);
                c.bindBuffer(c.ARRAY_BUFFER, this.uk[this.Me]);
                c.bufferSubData(c.ARRAY_BUFFER, 0, this.jn.subarray(0,
                    this.Ci));
                b && 0 <= b.Xf && "<point>" !== b.name && c.vertexAttribPointer(b.Xf, 2, c.FLOAT, !1, 0, 0)
            }
            for (var f, c = 0, b = this.le; c < b; c++) switch (f = this.Ke[c], f.type) {
                case 1:
                    f.Xx();
                    break;
                case 2:
                    f.gy();
                    break;
                case 3:
                    f.cy();
                    break;
                case 4:
                    f.Zx();
                    break;
                case 5:
                    f.jy();
                    break;
                case 6:
                    f.Yx();
                    break;
                case 7:
                    f.Ux();
                    break;
                case 8:
                    f.Wx();
                    break;
                case 9:
                    f.ey();
                    break;
                case 10:
                    f.fy();
                    break;
                case 11:
                    f.hy();
                    break;
                case 12:
                    f.$x();
                    break;
                case 13:
                    f.ay();
                    break;
                case 14:
                    f.by()
            }
            this.mi = this.Ci = this.yf = this.le = 0;
            this.Ll = this.kc = this.ac = !1;
            this.Me++;
            4 <= this.Me &&
                (this.Me = 0)
        }
    };
    e.prototype.lf = function(c) {
        if (c !== this.Qs && !this.nj) {
            var b = this.Hc();
            b.type = 3;
            this.Qs = b.Lt = c;
            this.kc = this.ac = !1
        }
    };
    e.prototype.xc = function(c) {
        if (c !== this.Tf) {
            var b = this.Hc();
            b.type = 2;
            this.Tf = b.Id = c;
            this.kc = this.ac = !1
        }
    };
    e.prototype.dg = function(c, b) {
        if ((c !== this.Rs || b !== this.Ps) && !this.nj) {
            var f = this.Hc();
            f.type = 4;
            f.oc = c;
            f.yd = b;
            this.Rs = c;
            this.Ps = b;
            this.kc = this.ac = !1
        }
    };
    e.prototype.lu = function() {
        this.dg(this.K.ONE, this.K.ONE_MINUS_SRC_ALPHA)
    };
    e.prototype.ni = function(c, b, f, a, g, l, k, d) {
        15992 <=
            this.yf && this.Qe();
        var e = this.yf,
            v = this.Ci,
            m = this.vn,
            u = this.jn,
            p = this.co;
        if (this.ac) this.Ke[this.le - 1].yd += 6;
        else {
            var h = this.Hc();
            h.type = 1;
            h.oc = this.Oa ? e : e / 2 * 3;
            h.yd = 6;
            this.ac = !0;
            this.kc = !1
        }
        this.Oa ? (m[e++] = c, m[e++] = b, m[e++] = p, m[e++] = f, m[e++] = a, m[e++] = p, m[e++] = g, m[e++] = l, m[e++] = p, m[e++] = k, m[e++] = d, m[e++] = p) : (m[e++] = c, m[e++] = b, m[e++] = f, m[e++] = a, m[e++] = g, m[e++] = l, m[e++] = k, m[e++] = d);
        u[v++] = 0;
        u[v++] = 0;
        u[v++] = 1;
        u[v++] = 0;
        u[v++] = 1;
        u[v++] = 1;
        u[v++] = 0;
        u[v++] = 1;
        this.yf = e;
        this.Ci = v
    };
    e.prototype.de = function(c, b,
        f, a, g, d, k, e, p) {
        15992 <= this.yf && this.Qe();
        var v = this.yf,
            m = this.Ci,
            u = this.vn,
            h = this.jn,
            q = this.co;
        if (this.ac) this.Ke[this.le - 1].yd += 6;
        else {
            var w = this.Hc();
            w.type = 1;
            w.oc = this.Oa ? v : v / 2 * 3;
            w.yd = 6;
            this.ac = !0;
            this.kc = !1
        }
        var w = p.left,
            r = p.top,
            n = p.right;
        p = p.bottom;
        this.Oa ? (u[v++] = c, u[v++] = b, u[v++] = q, u[v++] = f, u[v++] = a, u[v++] = q, u[v++] = g, u[v++] = d, u[v++] = q, u[v++] = k, u[v++] = e, u[v++] = q) : (u[v++] = c, u[v++] = b, u[v++] = f, u[v++] = a, u[v++] = g, u[v++] = d, u[v++] = k, u[v++] = e);
        h[m++] = w;
        h[m++] = r;
        h[m++] = n;
        h[m++] = r;
        h[m++] = n;
        h[m++] = p;
        h[m++] =
            w;
        h[m++] = p;
        this.yf = v;
        this.Ci = m
    };
    e.prototype.HA = function(c, b, f, a) {
        7996 <= this.mi && this.Qe();
        var g = this.mi,
            d = this.Hp;
        if (this.kc) this.Ke[this.le - 1].yd++;
        else {
            var k = this.Hc();
            k.type = 8;
            k.oc = g;
            k.yd = 1;
            this.kc = !0;
            this.ac = !1
        }
        d[g++] = c;
        d[g++] = b;
        d[g++] = f;
        d[g++] = a;
        this.mi = g
    };
    e.prototype.Kc = function(c) {
        if (this.yj !== c) {
            if (!this.eb[c]) {
                if (0 === this.yj) return;
                c = 0
            }
            var b = this.Hc();
            b.type = 9;
            this.yj = b.oc = c;
            this.kc = this.ac = !1
        }
    };
    e.prototype.bk = function(c) {
        c = this.eb[c];
        return !(!c.Wg && !c.Vg)
    };
    e.prototype.Kp = function(c) {
        c = this.eb[c];
        return !!(c.Wg || c.Vg || c.Qr)
    };
    e.prototype.Jp = function(c) {
        return this.eb[c].$d
    };
    e.prototype.OA = function(c) {
        c = this.eb[c];
        return 0 !== c.qo || 0 !== c.ro
    };
    e.prototype.wz = function(c) {
        return this.eb[c].qo
    };
    e.prototype.xz = function(c) {
        return this.eb[c].ro
    };
    e.prototype.yz = function(c, b) {
        return this.eb[c].ka[b][2]
    };
    e.prototype.Fm = function(c) {
        return this.eb[c].Dr
    };
    e.prototype.ri = function(c, b, f, a, g, d, k, e, p, v, m, u, h, q, w) {
        var r = this.eb[this.yj],
            n, G;
        if (r.Pz || w.length) {
            n = this.Hc();
            n.type = 10;
            n.na ? kc(this.gd, n.na) : n.na = jc();
            G = n.na;
            G[0] = b;
            G[1] = f;
            G[2] = a;
            G[3] = g;
            G[4] = d;
            G[5] = k;
            G[6] = e;
            G[7] = p;
            G[8] = v;
            G[9] = m;
            G[10] = u;
            G[11] = h;
            G[12] = q;
            r.Ij ? n.Id = c : n.Id = null;
            if (w.length)
                for (f = n.uu, f.length = w.length, c = 0, b = w.length; c < b; c++) f[c] = w[c];
            this.kc = this.ac = !1
        }
    };
    e.prototype.clear = function(c, b, f, a) {
        var g = this.Hc();
        g.type = 7;
        g.oc = 0;
        g.na || (g.na = jc());
        g.na[0] = c;
        g.na[1] = b;
        g.na[2] = f;
        g.na[3] = a;
        this.kc = this.ac = !1
    };
    e.prototype.clearRect = function(c, b, f, a) {
        if (!(0 > f || 0 > a)) {
            var g = this.Hc();
            g.type = 7;
            g.oc = 1;
            g.na || (g.na = jc());
            g.na[0] = c;
            g.na[1] = b;
            g.na[2] = f;
            g.na[3] =
                a;
            this.kc = this.ac = !1
        }
    };
    e.prototype.ou = function(c) {
        if (this.Oa && (c = !!c, this.nj !== c)) {
            var b = this.Hc();
            b.type = 14;
            b.oc = c ? 1 : 0;
            this.kc = this.ac = !1;
            this.nj = c;
            this.Jm = null;
            this.nj ? this.Kc(2) : this.Kc(0)
        }
    };
    e.prototype.nu = function(c) {
        if (this.Oa) {
            var b = this.Hc();
            b.type = 13;
            b.oc = c ? 1 : 0;
            this.kc = this.ac = !1
        }
    };
    e.prototype.cs = function() {
        kc(this.gp, r);
        this.Ed();
        this.ld();
        var c = this.width / 2,
            b = this.height / 2;
        this.ni(-c, b, c, b, c, -b, -c, -b);
        kc(r, this.gd);
        this.ld()
    };
    e.prototype.mu = function(c, b, f) {
        this.Kc(3);
        var a = this.Hc();
        a.type =
            12;
        a.na || (a.na = jc());
        a.na[0] = c;
        a.na[1] = b;
        a.na[2] = f;
        a.na[3] = 1;
        this.kc = this.ac = !1
    };
    e.prototype.iB = function() {
        this.Kc(0)
    };
    e.prototype.UA = function() {
        this.Kc(2)
    };
    e.prototype.NA = function() {
        this.Qe();
        this.K.flush()
    };
    var p = [],
        d = {};
    e.prototype.Mx = function() {
        I(p);
        d = {}
    };
    e.prototype.Uf = function(c, b, f, a) {
        b = !!b;
        f = !!f;
        var g = c.src + "," + b + "," + f + (b ? ",undefined" : ""),
            l = null;
        if ("undefined" !== typeof c.src && d.hasOwnProperty(g)) return l = d[g], l.Vk++, l;
        this.Qe();
        var k = this.K,
            e = ja(c.width) && ja(c.height),
            l = k.createTexture();
        k.bindTexture(k.TEXTURE_2D, l);
        k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        var h = k.RGBA,
            v = k.RGBA,
            m = k.UNSIGNED_BYTE;
        if (a && !this.Xe) switch (a) {
            case 1:
                v = h = k.RGB;
                break;
            case 2:
                m = k.UNSIGNED_SHORT_4_4_4_4;
                break;
            case 3:
                m = k.UNSIGNED_SHORT_5_5_5_1;
                break;
            case 4:
                v = h = k.RGB, m = k.UNSIGNED_SHORT_5_6_5
        }
        if (1 === this.version && !e && b) {
            a = document.createElement("canvas");
            a.width = la(c.width);
            a.height = la(c.height);
            var u = a.getContext("2d");
            "undefined" !== typeof u.imageSmoothingEnabled ? u.imageSmoothingEnabled = f : (u.webkitImageSmoothingEnabled =
                f, u.mozImageSmoothingEnabled = f, u.msImageSmoothingEnabled = f);
            u.drawImage(c, 0, 0, c.width, c.height, 0, 0, a.width, a.height);
            k.texImage2D(k.TEXTURE_2D, 0, h, v, m, a)
        } else k.texImage2D(k.TEXTURE_2D, 0, h, v, m, c);
        b ? (k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_S, k.REPEAT), k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_T, k.REPEAT)) : (k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_S, k.CLAMP_TO_EDGE), k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_T, k.CLAMP_TO_EDGE));
        f ? (k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MAG_FILTER, k.LINEAR),
            (e || 2 <= this.version) && this.Vr ? (k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER, k.LINEAR_MIPMAP_LINEAR), k.generateMipmap(k.TEXTURE_2D)) : k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER, k.LINEAR)) : (k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MAG_FILTER, k.NEAREST), k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER, k.NEAREST));
        k.bindTexture(k.TEXTURE_2D, null);
        this.Tf = null;
        l.mg = c.width;
        l.lg = c.height;
        l.Vk = 1;
        l.Jr = g;
        p.push(l);
        return d[g] = l
    };
    e.prototype.$c = function(c, b, f, a) {
        this.Qe();
        var g = this.K;
        this.Xe && (a = !1);
        var d = g.createTexture();
        g.bindTexture(g.TEXTURE_2D, d);
        g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, c, b, 0, g.RGBA, a ? g.UNSIGNED_SHORT_4_4_4_4 : g.UNSIGNED_BYTE, null);
        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE);
        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE);
        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, f ? g.LINEAR : g.NEAREST);
        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, f ? g.LINEAR : g.NEAREST);
        g.bindTexture(g.TEXTURE_2D, null);
        this.Tf = null;
        d.mg = c;
        d.lg = b;
        p.push(d);
        return d
    };
    e.prototype.zB = function(c, b, f) {
        this.Qe();
        var a = this.K;
        this.Xe && (f = !1);
        a.bindTexture(a.TEXTURE_2D, b);
        a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        try {
            a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, f ? a.UNSIGNED_SHORT_4_4_4_4 : a.UNSIGNED_BYTE, c)
        } catch (g) {
            console && console.error && console.error("Error updating WebGL texture: ", g)
        }
        a.bindTexture(a.TEXTURE_2D, null);
        this.Tf = null
    };
    e.prototype.deleteTexture = function(c) {
        c && ("undefined" !== typeof c.Vk && 1 < c.Vk ? c.Vk-- : (this.Qe(), c === this.Tf && (this.K.bindTexture(this.K.TEXTURE_2D,
            null), this.Tf = null), c === this.Og && (this.K.activeTexture(this.K.TEXTURE1), this.K.bindTexture(this.K.TEXTURE_2D, null), this.K.activeTexture(this.K.TEXTURE0), this.Og = null), Ea(p, c), "undefined" !== typeof c.Jr && delete d[c.Jr], this.K.deleteTexture(c)))
    };
    e.prototype.Fd = function(c) {
        if (c !== this.Jm) {
            var b = this.Hc();
            b.type = 6;
            this.Jm = b.Id = c;
            this.kc = this.ac = !1
        }
    };
    pb = e
})();
(function() {
    function e(a) {
        if (a && (a.getContext || a.dc) && !a.c2runtime) {
            a.c2runtime = this;
            var b = this;
            this.dd = (this.Ml = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk)) || "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap) || "undefined" !== typeof window.c2iscordova && window.c2iscordova;
            this.uc = !!a.dc;
            this.Es = "undefined" !== typeof window.AppMobi ||
                this.uc;
            this.zd = !!window.c2cocoonjs;
            this.Wd = !!window.c2ejecta;
            this.zd && (CocoonJS.App.onSuspended.addEventListener(function() {
                b.setSuspended(!0)
            }), CocoonJS.App.onActivated.addEventListener(function() {
                b.setSuspended(!1)
            }));
            this.Wd && (document.addEventListener("pagehide", function() {
                b.setSuspended(!0)
            }), document.addEventListener("pageshow", function() {
                b.setSuspended(!1)
            }), document.addEventListener("resize", function() {
                b.setSize(window.innerWidth, window.innerHeight)
            }));
            this.kb = this.uc || this.zd || this.Wd;
            this.pj =
                /edge\//i.test(navigator.userAgent);
            this.Xe = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.pj;
            this.Is = /tizen/i.test(navigator.userAgent);
            this.Jl = /android/i.test(navigator.userAgent) && !this.Is && !this.Xe && !this.pj;
            this.Ns = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.Xe && !this.pj;
            this.iA = /ipad/i.test(navigator.userAgent);
            this.Uh = this.Ns || this.iA || this.Wd;
            this.mj = (/chrome/i.test(navigator.userAgent) ||
                /chromium/i.test(navigator.userAgent)) && !this.Xe && !this.pj;
            this.Ds = /amazonwebappplatform/i.test(navigator.userAgent);
            this.aA = /firefox/i.test(navigator.userAgent);
            this.dA = /safari/i.test(navigator.userAgent) && !this.mj && !this.Xe && !this.pj;
            this.gA = /windows/i.test(navigator.userAgent);
            this.Ig = "undefined" !== typeof window.c2nodewebkit || "undefined" !== typeof window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent);
            this.Ks = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
            this.Ls = !("undefined" === typeof window.c2isWindows8Capable || !window.c2isWindows8Capable);
            this.tj = !("undefined" === typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
            this.bp = !("undefined" === typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81);
            this.Js = !!window.cr_windows10;
            this.fA = this.Ks || this.Ls || this.bp || this.Js;
            this.Yz = !("undefined" === typeof window.c2isBlackberry10 || !window.c2isBlackberry10);
            this.Kl = this.Jl && !this.mj && !this.Ml && !this.aA && !this.Ds && !this.kb;
            this.devicePixelRatio =
                1;
            this.Ye = this.dd || this.Ml || this.Es || this.zd || this.Jl || this.Uh || this.tj || this.bp || this.Yz || this.Is || this.Wd;
            this.Ye || (this.Ye = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent));
            this.sj = !!(this.Uh && this.dd && window.webkit);
            this.Oo = null;
            this.Rz = "";
            this.sj && (this.Oo = cordova && cordova.plugins && cordova.plugins.CorHttpd ? cordova.plugins.CorHttpd : null);
            "undefined" === typeof cr_is_preview || this.Ig || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) &&
                !/nwjs/i.test(navigator.userAgent) || (this.Ig = !0);
            this.canvas = a;
            this.Lr = document.getElementById("c2canvasdiv");
            this.F = this.K = null;
            this.Jo = "(unavailable)";
            this.Oa = !1;
            this.tg = 0;
            this.Ta = null;
            this.wo = "";
            this.ql = !1;
            this.Et = this.Ft = 0;
            this.canvas.oncontextmenu = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.canvas.onselectstart = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.uc && (window.c2runtime = this);
            this.Ig && (window.ondragover = function(a) {
                    a.preventDefault();
                    return !1
                }, window.ondrop =
                function(a) {
                    a.preventDefault();
                    return !1
                }, window.nwgui && window.nwgui.App.clearCache && window.nwgui.App.clearCache());
            this.Kl && "undefined" !== typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible");
            this.width = a.width;
            this.height = a.height;
            this.X = this.width;
            this.W = this.height;
            this.cl = this.width;
            this.Ui = this.height;
            this.Zh = window.innerWidth;
            this.Yh = window.innerHeight;
            this.Y = !0;
            this.rj = !1;
            Date.now || (Date.now = function() {
                return +new Date
            });
            this.plugins = [];
            this.types = {};
            this.I = [];
            this.Ya = [];
            this.ai = {};
            this.Xd = [];
            this.po = {};
            this.Re = [];
            this.Hi = [];
            this.rn = [];
            this.yx = [];
            this.zx = [];
            this.Os = this.Au = null;
            this.pg = {};
            this.Yo = this.Pf = !1;
            this.ed = 0;
            this.Xo = this.$o = !1;
            this.Sd = [];
            this.oj = !1;
            this.Vl = this.Wp = "";
            this.Jb = null;
            this.Ze = "";
            this.sk = this.xu = !1;
            this.pl = [];
            this.sg = this.rg = 0;
            this.tt = 30;
            this.Zn = this.Mj = 0;
            this.gg = 1;
            this.wb = new ab;
            this.zf = new ab;
            this.lm = this.xl = this.wg = this.Jd = this.Qg = this.vo = this.Ql = 0;
            this.Le = null;
            this.jl = [];
            this.oo = [];
            this.ll = -1;
            this.qp = [
                []
            ];
            this.lq = this.$l = 0;
            this.Gm(null);
            this.Nj = [];
            this.Oj = -1;
            this.zt = this.Tj = 0;
            this.ip = !0;
            this.Zi = 0;
            this.tk = [];
            this.iq = this.Np = -1;
            this.Lg = !0;
            this.Yl = 0;
            this.qj = !1;
            this.mB = 0;
            this.qh = null;
            this.Rc = this.ts = !1;
            this.Dt = new ca;
            this.xp = new ca;
            this.yp = new ca;
            this.fk = [];
            this.fe = new hb([]);
            this.gq = new hb([]);
            this.Gf = [];
            this.Jh = {};
            this.Kf = {};
            this.Ef = {};
            this.Gi = {};
            this.Gr = {};
            this.Us = this.Ul = this.yb = this.Ib = this.Ts = this.Tl = this.Ba = null;
            this.Ei = this.cp = !1;
            this.xo = [null, null];
            this.zg = 0;
            this.$i = "";
            this.df = {};
            this.qk = this.Vf = null;
            this.zu = "";
            this.km = [];
            this.TA()
        }
    }

    function q(a,
        b) {
        return 128 >= b ? a[3] : 256 >= b ? a[2] : 512 >= b ? a[1] : a[0]
    }

    function n() {
        try {
            return !!window.indexedDB
        } catch (a) {
            return !1
        }
    }

    function h(a) {
        a.target.result.createObjectStore("saves", {
            keyPath: "slot"
        })
    }

    function r(a, b, c, g) {
        try {
            var f = indexedDB.open("_C2SaveStates");
            f.onupgradeneeded = h;
            f.onerror = g;
            f.onsuccess = function(f) {
                f = f.target.result;
                f.onerror = g;
                f.transaction(["saves"], "readwrite").objectStore("saves").put({
                    slot: a,
                    data: b
                }).onsuccess = c
            }
        } catch (k) {
            g(k)
        }
    }

    function p(a, b, c) {
        try {
            var g = indexedDB.open("_C2SaveStates");
            g.onupgradeneeded = h;
            g.onerror = c;
            g.onsuccess = function(g) {
                g = g.target.result;
                g.onerror = c;
                var f = g.transaction(["saves"]).objectStore("saves").get(a);
                f.onsuccess = function() {
                    f.result ? b(f.result.data) : b(null)
                }
            }
        } catch (f) {
            c(f)
        }
    }

    function d() {
        ea("Reloading for continuous preview");
        window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location = window.location + "?continuous"
    }

    function c(a) {
        var b, c = {};
        for (b in a) !a.hasOwnProperty(b) || a[b] instanceof
        ca || a[b] && "undefined" !== typeof a[b].jC || "spriteCreatedDestroyCallback" !== b && (c[b] = a[b]);
        return c
    }
    var b = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    e.prototype.TA = function() {
        var a = this;
        if (this.sj) {
            var b = function() {
                a.az(function(b) {
                    a.Ej(JSON.parse(b))
                }, function() {
                    alert("Error fetching data.js")
                })
            };
            this.Oo ? this.Oo.startServer({
                port: 0,
                localhost_only: !0
            }, function(c) {
                a.Rz = c;
                b()
            }, function(a) {
                console.log("Error starting local server: " +
                    a + ". Video playback will not work.");
                b()
            }) : (console.log("Local server unavailable. Video playback will not work."), b())
        } else {
            var c;
            this.tj ? c = new ActiveXObject("Microsoft.XMLHTTP") : c = new XMLHttpRequest;
            var g = "data.js";
            if (this.Ks || this.tj || this.bp || this.Js) g = "data.json";
            c.open("GET", g, !0);
            var f = !1;
            if (!this.kb && "response" in c && "responseType" in c) try {
                c.responseType = "json", f = "json" === c.responseType
            } catch (k) {
                f = !1
            }
            if (!f && "responseType" in c) try {
                c.responseType = "text"
            } catch (m) {}
            if ("overrideMimeType" in c) try {
                c.overrideMimeType("application/json; charset=utf-8")
            } catch (d) {}
            this.tj ?
                c.onreadystatechange = function() {
                    4 === c.readyState && a.Ej(JSON.parse(c.responseText))
                } : (c.onload = function() {
                    if (f) a.Ej(c.response);
                    else if (a.Wd) {
                        var b = c.responseText,
                            b = b.substr(b.indexOf("{"));
                        a.Ej(JSON.parse(b))
                    } else a.Ej(JSON.parse(c.responseText))
                }, c.onerror = function(a) {
                    fa("Error requesting " + g + ":");
                    fa(a)
                });
            c.send()
        }
    };
    e.prototype.Uz = function() {
        var a = this,
            b, c, g, f, k, m, d, e, l;
        this.Jg = (!this.kb || this.Wd || this.dd) && this.wB && !this.Kl;
        0 === this.Cc && this.Uh && (this.Jg = !1);
        this.devicePixelRatio = this.Jg ? window.devicePixelRatio ||
            window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
        this.gc();
        0 < this.Cc && this.setSize(window.innerWidth, window.innerHeight, !0);
        this.canvas.addEventListener("webglcontextlost", function(b) {
            b.preventDefault();
            a.wA();
            ea("[Construct 2] WebGL context lost");
            window.cr_setSuspended(!0)
        }, !1);
        this.canvas.addEventListener("webglcontextrestored", function() {
            a.F.ys();
            a.F.nf(a.F.width, a.F.height, !0);
            a.Ib = null;
            a.yb = null;
            a.xo[0] = null;
            a.xo[1] = null;
            a.xA();
            a.Y = !0;
            ea("[Construct 2] WebGL context restored");
            window.cr_setSuspended(!1)
        }, !1);
        try {
            this.uy && (this.zd || this.Wd || !this.kb) && (b = {
                alpha: !0,
                depth: !1,
                antialias: !1,
                powerPreference: "high-performance",
                failIfMajorPerformanceCaveat: !0
            }, this.K = this.canvas.getContext("webgl2", b) || this.canvas.getContext("webgl", b) || this.canvas.getContext("experimental-webgl", b))
        } catch (w) {}
        if (this.K) {
            if (b = this.K.getExtension("WEBGL_debug_renderer_info")) this.Jo = this.K.getParameter(b.UNMASKED_RENDERER_WEBGL) + " [" + this.K.getParameter(b.UNMASKED_VENDOR_WEBGL) + "]";
            this.Oa && (this.Jo +=
                " [front-to-back enabled]");
            this.kb || (this.ec = document.createElement("canvas"), jQuery(this.ec).appendTo(this.canvas.parentNode), this.ec.oncontextmenu = function() {
                return !1
            }, this.ec.onselectstart = function() {
                return !1
            }, this.ec.width = Math.round(this.cl * this.devicePixelRatio), this.ec.height = Math.round(this.Ui * this.devicePixelRatio), jQuery(this.ec).css({
                width: this.cl + "px",
                height: this.Ui + "px"
            }), this.Yt(), this.Fp = this.ec.getContext("2d"));
            this.F = new pb(this.K, this.Ye, this.Oa);
            this.F.nf(this.canvas.width, this.canvas.height);
            this.F.Vr = 0 !== this.ky;
            this.Ta = null;
            b = 0;
            for (c = this.I.length; b < c; b++)
                for (k = this.I[b], g = 0, f = k.da.length; g < f; g++) d = k.da[g], d.Cb = this.F.Io(d.id), d.$d = this.F.Jp(d.Cb), this.Ei = this.Ei || this.F.bk(d.Cb);
            b = 0;
            for (c = this.Xd.length; b < c; b++) {
                e = this.Xd[b];
                g = 0;
                for (f = e.da.length; g < f; g++) d = e.da[g], d.Cb = this.F.Io(d.id), d.$d = this.F.Jp(d.Cb);
                e.he();
                g = 0;
                for (f = e.ja.length; g < f; g++) {
                    l = e.ja[g];
                    k = 0;
                    for (m = l.da.length; k < m; k++) d = l.da[k], d.Cb = this.F.Io(d.id), d.$d = this.F.Jp(d.Cb), this.Ei = this.Ei || this.F.bk(d.Cb);
                    l.he()
                }
            }
        } else {
            if (0 <
                this.Cc && this.uc) {
                this.canvas = null;
                document.oncontextmenu = function() {
                    return !1
                };
                document.onselectstart = function() {
                    return !1
                };
                this.Ta = AppMobi.canvas.getContext("2d");
                try {
                    this.Ta.samplingMode = this.La ? "smooth" : "sharp", this.Ta.globalScale = 1, this.Ta.HTML5CompatibilityMode = !0, this.Ta.imageSmoothingEnabled = this.La
                } catch (u) {}
                0 !== this.width && 0 !== this.height && (this.Ta.width = this.width, this.Ta.height = this.height)
            }
            this.Ta || (this.zd ? (b = {
                antialias: !!this.La,
                alpha: !0
            }, this.Ta = this.canvas.getContext("2d", b)) : (b = {
                    alpha: !0
                },
                this.Ta = this.canvas.getContext("2d", b)), this.Pm(this.Ta, this.La));
            this.Fp = this.ec = null
        }
        this.Gu = function(b) {
            a.Fa(!1, b)
        };
        window == window.top || this.kb || this.fA || this.tj || (document.addEventListener("mousedown", function() {
            window.focus()
        }, !0), document.addEventListener("touchstart", function() {
            window.focus()
        }, !0));
        "undefined" !== typeof cr_is_preview && (this.zd && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (ea("Reloading for continuous preview"),
            this.Vl = "__c2_continuouspreview", this.sk = !0), this.FA && !this.Ye && (jQuery(window).focus(function() {
            a.setSuspended(!1)
        }), jQuery(window).blur(function() {
            var b = window.parent;
            b && b.document.hasFocus() || a.setSuspended(!0)
        })));
        window.addEventListener("blur", function() {
            a.$g()
        });
        this.kb || (b = function(a) {
                if (ob(a) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur) try {
                    document.activeElement.blur()
                } catch (b) {}
            }, "undefined" !== typeof PointerEvent ?
            document.addEventListener("pointerdown", b) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", b) : document.addEventListener("touchstart", b), document.addEventListener("mousedown", b));
        0 === this.Cc && this.Jg && 1 < this.devicePixelRatio && this.setSize(this.Lb, this.Kb, !0);
        this.Ku();
        this.Mz();
        this.go();
        this.N = {}
    };
    e.prototype.setSize = function(a, b, c) {
        var g = 0,
            f = 0,
            k = 0,
            m = 0,
            m = 0;
        if (this.Zh !== a || this.Yh !== b || c) {
            this.Zh = a;
            this.Yh = b;
            var d = this.Cc,
                e = (document.mozFullScreen || document.webkitIsFullScreen ||
                    !!document.msFullscreenElement || document.fullScreen || this.qj) && !this.dd;
            if (e || 0 !== this.Cc || c) e && 0 < this.zg && (d = this.zg), c = this.devicePixelRatio, 4 <= d ? (k = this.Lb / this.Kb, a / b > k ? (k *= b, 5 === d ? (m = k * c / this.Lb, 1 < m ? m = Math.floor(m) : 1 > m && (m = 1 / Math.ceil(1 / m)), k = this.Lb * m / c, m = this.Kb * m / c, g = (a - k) / 2, f = (b - m) / 2, a = k, b = m) : (g = (a - k) / 2, a = k)) : (m = a / k, 5 === d ? (m = m * c / this.Kb, 1 < m ? m = Math.floor(m) : 1 > m && (m = 1 / Math.ceil(1 / m)), k = this.Lb * m / c, m = this.Kb * m / c, g = (a - k) / 2, f = (b - m) / 2, a = k) : f = (b - m) / 2, b = m), e && !this.Ig && (f = g = 0)) : this.Ig && this.qj &&
                0 === this.ds && (g = Math.floor((a - this.Lb) / 2), f = Math.floor((b - this.Kb) / 2), a = this.Lb, b = this.Kb), 2 > d && (this.Mi = c), this.cl = Math.round(a), this.Ui = Math.round(b), this.width = Math.round(a * c), this.height = Math.round(b * c), this.Y = !0, this.Vu ? (this.X = this.width, this.W = this.height, this.ad = !0) : this.width < this.Lb && this.height < this.Kb || 1 === d ? (this.X = this.width, this.W = this.height, this.ad = !0) : (this.X = this.Lb, this.W = this.Kb, this.ad = !1, 2 === d ? (k = this.Lb / this.Kb, d = this.Zh / this.Yh, d < k ? this.X = this.W * d : d > k && (this.W = this.X / d)) :
                    3 === d && (k = this.Lb / this.Kb, d = this.Zh / this.Yh, d > k ? this.X = this.W * d : d < k && (this.W = this.X / d))), this.Lr && !this.kb && (jQuery(this.Lr).css({
                    width: Math.round(a) + "px",
                    height: Math.round(b) + "px",
                    "margin-left": Math.floor(g) + "px",
                    "margin-top": Math.floor(f) + "px"
                }), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({
                    width: Math.round(a) + "px",
                    height: Math.round(b) + "px"
                })), this.canvas && (this.canvas.width = Math.round(a * c), this.canvas.height = Math.round(b * c), this.Wd ? (this.canvas.style.left = Math.floor(g) + "px", this.canvas.style.top =
                    Math.floor(f) + "px", this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(b) + "px") : this.Jg && !this.kb && (this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(b) + "px")), this.ec && (this.ec.width = Math.round(a * c), this.ec.height = Math.round(b * c), this.ec.style.width = this.cl + "px", this.ec.style.height = this.Ui + "px"), this.F && this.F.nf(Math.round(a * c), Math.round(b * c)), this.uc && this.Ta && (this.Ta.width = Math.round(a), this.Ta.height = Math.round(b)), this.Ta && this.Pm(this.Ta,
                    this.La), this.Ku(), this.Ns && !this.dd && window.scrollTo(0, 0)
        }
    };
    e.prototype.Ku = function() {
        if (this.Bx && 0 !== this.Dp) {
            var a = "portrait";
            2 === this.Dp && (a = "landscape");
            try {
                screen.orientation && screen.orientation.lock ? screen.orientation.lock(a).catch(function() {}) : screen.lockOrientation ? screen.lockOrientation(a) : screen.webkitLockOrientation ? screen.webkitLockOrientation(a) : screen.mozLockOrientation ? screen.mozLockOrientation(a) : screen.msLockOrientation && screen.msLockOrientation(a)
            } catch (b) {
                console && console.warn &&
                    console.warn("Failed to lock orientation: ", b)
            }
        }
    };
    e.prototype.wA = function() {
        this.F.Mx();
        this.cp = !0;
        var a, b, c;
        a = 0;
        for (b = this.I.length; a < b; a++) c = this.I[a], c.li && c.li()
    };
    e.prototype.xA = function() {
        this.cp = !1;
        var a, b, c;
        a = 0;
        for (b = this.I.length; a < b; a++) c = this.I[a], c.Xj && c.Xj()
    };
    e.prototype.Yt = function() {
        if (!this.kb) {
            var a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.qj) && !this.dd ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
            a.position = "absolute";
            jQuery(this.ec).css(a)
        }
    };
    var f = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    e.prototype.setSuspended = function(a) {
        var b;
        if (a && !this.rj)
            for (ea("[Construct 2] Suspending"), this.rj = !0, -1 !== this.Np && f && f(this.Np), -1 !== this.iq && clearTimeout(this.iq), a = 0, b = this.tk.length; a < b; a++) this.tk[a](!0);
        else if (!a && this.rj) {
            ea("[Construct 2] Resuming");
            this.rj = !1;
            this.Ql = Xa();
            this.Qg =
                Xa();
            a = this.Mj = this.xl = 0;
            for (b = this.tk.length; a < b; a++) this.tk[a](!1);
            this.Fa(!1)
        }
    };
    e.prototype.wx = function(a) {
        this.tk.push(a)
    };
    e.prototype.Cf = function(a) {
        return this.km[a]
    };
    e.prototype.Ej = function(a) {
        a && a.project || fa("Project model unavailable");
        a = a.project;
        this.name = a[0];
        this.bs = a[1];
        this.Cc = a[12];
        this.ds = a[12];
        this.Lb = a[10];
        this.Kb = a[11];
        this.St = this.Lb / 2;
        this.Tt = this.Kb / 2;
        this.kb && !this.Wd && (4 <= a[12] || 0 === a[12]) && (ea("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"),
            this.ds = this.Cc = 3);
        this.uq = a[18];
        this.Wf = a[19];
        if (0 === this.Wf) {
            var b = new Image;
            b.crossOrigin = "anonymous";
            this.pu(b, "loading-logo.png");
            this.Vf = {
                cm: b
            }
        } else if (4 === this.Wf) {
            b = new Image;
            b.src = "";
            var c = new Image;
            c.src = "";
            var g = new Image;
            g.src = "";
            var f = new Image;
            f.src = "";
            var k = new Image;
            k.src = "";
            var m = new Image;
            m.src = "";
            var d = new Image;
            d.src = "";
            var e = new Image;
            e.src = "";
            var l = new Image;
            l.src = "";
            var w = new Image;
            w.src = "";
            var u = new Image;
            u.src = "";
            var v = new Image;
            v.src = "";
            this.Vf = {
                cm: [b, c, g, f],
                KA: [k, m, d, e],
                CB: [l, w, u, v]
            }
        }
        this.Tj = a[21];
        this.km = oc();
        this.De = new W(this);
        b = 0;
        for (c = a[2].length; b < c; b++) d = a[2][b], g = this.Cf(d[0]), qb(d, g.prototype), e = new g(this), e.Zm = d[1], e.Rf = d[2], e.oC = d[5], e.xt = d[9], e.H && e.H(), this.plugins.push(e);
        this.km = oc();
        b = 0;
        for (c = a[3].length; b < c; b++) {
            d = a[3][b];
            k = this.Cf(d[1]);
            e = null;
            g = 0;
            for (f = this.plugins.length; g < f; g++)
                if (this.plugins[g] instanceof k) {
                    e = this.plugins[g];
                    break
                }
            l = new e.T(e);
            l.name = d[0];
            l.O = d[2];
            l.Wo = d[3].slice(0);
            l.yB = d[3].length;
            l.Cx = d[4];
            l.ez = d[5];
            l.ta = d[11];
            l.O ? (l.di = [], l.Se = this.Zi++, l.Ua = null) : (l.di = null, l.Se = -1, l.Ua = []);
            l.nl = null;
            l.Dh = null;
            l.Wr = null;
            l.lc = !1;
            l.Oc = null;
            d[6] ? (l.vk = d[6][0], l.kn = d[6][1], l.ih = d[6][2]) : (l.vk = null, l.kn = 0, l.ih = 0);
            d[7] ? l.Nc = d[7] : l.Nc = null;
            l.index = b;
            l.k = [];
            l.gl = [];
            l.rf = [new rb(l)];
            l.ne = 0;
            l.vd = null;
            l.Rx = 0;
            l.Bi = !0;
            l.sn = sb;
            l.Eo = tb;
            l.uz = ub;
            l.aa = vb;
            l.dk = xb;
            l.$f = yb;
            l.Zd = zb;
            l.zl = Ab;
            l.zo = Bb;
            l.Do = Cb;
            l.Yc = Db;
            l.Fo = Eb;
            l.Qi = new ib(this.Lb, this.Kb);
            l.Ok = !0;
            l.Pk = !1;
            l.N = {};
            l.toString = Fb;
            l.Ya = [];
            g = 0;
            for (f = d[8].length; g < f; g++) {
                w = d[8][g];
                u = this.Cf(w[1]);
                v = null;
                k = 0;
                for (m = this.Ya.length; k < m; k++)
                    if (this.Ya[k] instanceof u) {
                        v = this.Ya[k];
                        break
                    }
                v || (v = new u(this), v.im = [], v.hm = new ca, v.H && v.H(), this.Ya.push(v), pc && v instanceof pc && (this.Au = v), qc && v instanceof qc && (this.Os = v)); - 1 === v.im.indexOf(l) && v.im.push(l);
                k = new v.T(v, l);
                k.name = w[0];
                k.ta = w[2];
                k.H();
                l.Ya.push(k)
            }
            l.global = d[9];
            l.Zo = d[10];
            l.da = [];
            g = 0;
            for (f = d[12].length; g < f; g++) l.da.push({
                id: d[12][g][0],
                name: d[12][g][1],
                Cb: -1,
                $d: !1,
                Xa: !0,
                index: g
            });
            l.EC = d[13];
            this.uq && !l.O && !l.Zo && e.Rf || l.H();
            l.name && (this.types[l.name] =
                l);
            this.I.push(l);
            e.Zm && (g = new e.M(l), g.uid = this.Tj++, g.bu = this.zt++, g.Fg = 0, g.fj = Gb, g.toString = Hb, g.C = d[14], g.H(), l.k.push(g), this.df[g.uid.toString()] = g)
        }
        b = 0;
        for (c = a[4].length; b < c; b++)
            for (k = a[4][b], m = this.I[k[0]], g = 1, f = k.length; g < f; g++) d = this.I[k[g]], d.Ua.push(m), m.di.push(d);
        b = 0;
        for (c = a[28].length; b < c; b++) {
            k = a[28][b];
            m = [];
            g = 0;
            for (f = k.length; g < f; g++) m.push(this.I[k[g]]);
            g = 0;
            for (f = m.length; g < f; g++) m[g].lc = !0, m[g].Oc = m
        }
        if (0 < this.Zi)
            for (b = 0, c = this.I.length; b < c; b++)
                if (d = this.I[b], !d.O && d.Ua.length) {
                    d.nl =
                        Array(this.Zi);
                    d.Dh = Array(this.Zi);
                    d.Wr = Array(this.Zi);
                    l = [];
                    g = v = u = w = 0;
                    for (f = d.Ua.length; g < f; g++)
                        for (e = d.Ua[g], d.nl[e.Se] = w, w += e.yB, d.Dh[e.Se] = u, u += e.Cx, d.Wr[e.Se] = v, v += e.ez, k = 0, m = e.da.length; k < m; k++) l.push(va({}, e.da[k]));
                    d.da = l.concat(d.da);
                    g = 0;
                    for (f = d.da.length; g < f; g++) d.da[g].index = g
                }
        b = 0;
        for (c = a[5].length; b < c; b++) d = a[5][b], g = new Ib(this, d), this.ai[g.name] = g, this.Xd.push(g);
        b = 0;
        for (c = a[6].length; b < c; b++) d = a[6][b], g = new Jb(this, d), this.po[g.name] = g, this.Re.push(g);
        b = 0;
        for (c = this.Re.length; b < c; b++) this.Re[b].mb();
        b = 0;
        for (c = this.Re.length; b < c; b++) this.Re[b].pq();
        b = 0;
        for (c = this.rn.length; b < c; b++) this.rn[b].mb();
        I(this.rn);
        this.Ax = a[7];
        this.$i = a[8];
        this.Gc = a[9];
        this.Mi = 1;
        this.uy = a[13];
        this.La = a[14];
        this.Or = a[15];
        this.wB = a[17];
        this.Dp = a[20];
        this.Bx = 0 < this.Dp;
        this.FA = a[22];
        this.ad = this.Vu = a[23];
        this.ky = a[24];
        this.LA = a[25];
        this.Oa = a[27] && !this.Xe;
        this.bn = Date.now();
        I(this.km);
        this.Uz()
    };
    var a = !1;
    e.prototype.wn = function(b, c) {
        b.cocoonLazyLoad = !0;
        b.onerror = function(c) {
            a = b.Ir = !0;
            console && console.error && console.error("Error loading image '" +
                b.src + "': ", c)
        };
        this.Wd ? b.src = c : b.src || ("undefined" !== typeof XAPKReader ? XAPKReader.get(c, function(a) {
            b.src = a
        }, function(g) {
            a = b.Ir = !0;
            console && console.error && console.error("Error extracting image '" + c + "' from expansion file: ", g)
        }) : (b.crossOrigin = "anonymous", this.pu(b, c)));
        this.Hi.push(b)
    };
    e.prototype.cz = function(a) {
        var b, c;
        b = 0;
        for (c = this.Hi.length; b < c; b++)
            if (this.Hi[b].Nx === a) return this.Hi[b];
        return null
    };
    var g = 0,
        l = !1;
    e.prototype.Mz = function() {
        this.qh && (g = this.qh.fB(this.Ax))
    };
    e.prototype.Er = function() {
        var a =
            g,
            b = 0,
            c = 0,
            f = !0,
            k, d, c = 0;
        for (k = this.Hi.length; c < k; c++) {
            d = this.Hi[c];
            var m = d.$n;
            if (!m || 0 >= m) m = 5E4;
            a += m;
            d.src && (d.complete || d.loaded) && !d.Ir ? b += m : f = !1
        }
        f && this.LA && this.qh && (l || (this.qh.nB(), l = !0), c = this.qh.vz(), b += c, c < g && (f = !1));
        this.ae = 0 == a ? 1 : b / a;
        return f
    };
    var k = !1;
    e.prototype.go = function() {
        if (this.Ta || this.F) {
            var c = this.Ta || this.Fp;
            this.ec && this.Yt();
            var g = window.innerWidth,
                f = window.innerHeight;
            this.Zh === g && this.Yh === f || this.setSize(g, f);
            this.ae = 0;
            this.Ss = -1;
            var d = this;
            if (this.Er() && (4 !== this.Wf || k)) this.Nz();
            else {
                f = Date.now() - this.bn;
                if (c) {
                    var m = this.width,
                        l = this.height,
                        g = this.devicePixelRatio;
                    if (3 > this.Wf && (this.zd || 500 <= f && this.Ss != this.ae)) {
                        c.clearRect(0, 0, m, l);
                        var f = m / 2,
                            l = l / 2,
                            m = 0 === this.Wf && this.Vf.cm.complete,
                            e = 40 * g,
                            w = 0,
                            u = 80 * g,
                            v;
                        if (m) {
                            var t = this.Vf.cm,
                                u = t.width * g;
                            v = t.height * g;
                            e = u / 2;
                            w = v / 2;
                            c.drawImage(t, A(f - e), A(l - w), u, v)
                        }
                        1 >= this.Wf ? (f = A(f - e) + .5, l = A(l + (w + (m ? 12 * g : 0))) + .5, c.fillStyle = a ? "red" : "DodgerBlue", c.fillRect(f, l, Math.floor(u * this.ae), 6 * g), c.strokeStyle = "black", c.strokeRect(f, l, u, 6 * g), c.strokeStyle =
                            "white", c.strokeRect(f - 1 * g, l - 1 * g, u + 2 * g, 8 * g)) : 2 === this.Wf && (c.font = this.Wd ? "12pt ArialMT" : "12pt Arial", c.fillStyle = a ? "#f00" : "#999", c.DC = "middle", g = Math.round(100 * this.ae) + "%", m = c.measureText ? c.measureText(g) : null, c.fillText(g, f - (m ? m.width : 0) / 2, l));
                        this.Ss = this.ae
                    } else if (4 === this.Wf) {
                        this.ry(c);
                        b ? b(function() {
                            d.go()
                        }) : setTimeout(function() {
                            d.go()
                        }, 16);
                        return
                    }
                }
                setTimeout(function() {
                    d.go()
                }, this.zd ? 10 : 100)
            }
        }
    };
    var t = -1,
        T = "undefined" === typeof cr_is_preview ? 200 : 0,
        v = !0,
        m = !1,
        u = 0,
        O = 0,
        S = "undefined" === typeof cr_is_preview ?
        3E3 : 0,
        w = null,
        U = null,
        N = 0;
    e.prototype.ry = function(b) {
        if (!k) {
            for (var c = Math.ceil(this.width), g = Math.ceil(this.height), f = this.Vf.cm, d = this.Vf.KA, l = this.Vf.CB, e = 0; 4 > e; ++e)
                if (!f[e].complete || !d[e].complete || !l[e].complete) return;
            0 === N && (t = Date.now());
            var e = Date.now(),
                p = !1,
                h = b,
                r, n;
            v || m ? (b.clearRect(0, 0, c, g), w && w.width === c && w.height === g || (w = document.createElement("canvas"), w.width = c, w.height = g, U = w.getContext("2d")), h = U, p = !0, v && 1 === N && (t = Date.now())) : b.globalAlpha = 1;
            h.fillStyle = "#333333";
            h.fillRect(0, 0, c,
                g);
            256 < this.Ui ? (r = Fa(.22 * g, 105, .6 * c), n = .25 * r, h.drawImage(q(d, r), .5 * c - r / 2, .2 * g - n / 2, r, n), n = r = Math.min(.395 * g, .95 * c), h.drawImage(q(f, r), .5 * c - r / 2, .485 * g - n / 2, r, n), r = Fa(.22 * g, 105, .6 * c), n = .25 * r, h.drawImage(q(l, r), .5 * c - r / 2, .868 * g - n / 2, r, n), h.fillStyle = "#3C3C3C", r = c, n = Math.max(.005 * g, 2), h.fillRect(0, .8 * g - n / 2, r, n), h.fillStyle = a ? "red" : "#E0FF65", r = c * this.ae, h.fillRect(.5 * c - r / 2, .8 * g - n / 2, r, n)) : (n = r = .55 * g, h.drawImage(q(f, r), .5 * c - r / 2, .45 * g - n / 2, r, n), h.fillStyle = "#3C3C3C", r = c, n = Math.max(.005 * g, 2), h.fillRect(0, .85 * g -
                n / 2, r, n), h.fillStyle = a ? "red" : "#E0FF65", r = c * this.ae, h.fillRect(.5 * c - r / 2, .85 * g - n / 2, r, n));
            p && (v ? b.globalAlpha = 0 === N ? 0 : Math.min((e - t) / 300, 1) : m && (b.globalAlpha = Math.max(1 - (e - O) / 300, 0)), b.drawImage(w, 0, 0, c, g));
            v && 300 <= e - t && 2 <= N && (v = !1, u = e);
            !v && e - u >= S && !m && 1 <= this.ae && (m = !0, O = e);
            if (m && e - O >= 300 + T || "undefined" !== typeof cr_is_preview && 1 <= this.ae && 500 > Date.now() - t) k = !0, m = v = !1, this.Vf = U = w = null;
            ++N
        }
    };
    e.prototype.Nz = function() {
        this.ec && (this.canvas.parentNode.removeChild(this.ec), this.ec = this.Fp = null);
        this.bn =
            Date.now();
        this.Qg = Xa();
        var a, b, c;
        if (this.uq)
            for (a = 0, b = this.I.length; a < b; a++) c = this.I[a], c.O || c.Zo || !c.xa.Rf || c.H();
        else this.Lg = !1;
        a = 0;
        for (b = this.Xd.length; a < b; a++) this.Xd[a].Ox();
        2 <= this.Cc && (a = this.Lb / this.Kb, b = this.width / this.height, this.Mi = 2 !== this.Cc && b > a || 2 === this.Cc && b < a ? this.height / this.Kb : this.width / this.Lb);
        this.bs ? this.ai[this.bs].dq() : this.Xd[0].dq();
        this.uq || (this.Yl = 1, this.trigger(W.prototype.n.Vq, null), window.C2_RegisterSW && window.C2_RegisterSW());
        navigator.splashscreen && navigator.splashscreen.hide &&
            navigator.splashscreen.hide();
        a = 0;
        for (b = this.I.length; a < b; a++) c = this.I[a], c.vA && c.vA();
        document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.Fa(!1);
        this.uc && AppMobi.webview.execute("onGameReady();")
    };
    e.prototype.Fa = function(a, c, g) {
        if (this.Ba) {
            var f = Xa();
            if (g || !this.rj || a) {
                a || (b ? this.Np = b(this.Gu) : this.iq = setTimeout(this.Gu, this.Ye ? 1 : 16));
                c = c || f;
                var k = this.Cc;
                ((g = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) &&
                    !this.dd) || this.qj) && 0 < this.zg && (k = this.zg);
                if (0 < k) {
                    var k = window.innerWidth,
                        d = window.innerHeight;
                    this.Zh === k && this.Yh === d || this.setSize(k, d)
                }
                this.kb || (g ? (this.ql || (this.wo = jQuery(this.canvas).css("margin") || "0", this.ql = !0), this.mj || this.Ig || jQuery(this.canvas).css({
                    "margin-left": "" + Math.floor((screen.width - this.width / this.devicePixelRatio) / 2) + "px",
                    "margin-top": "" + Math.floor((screen.height - this.height / this.devicePixelRatio) / 2) + "px"
                })) : this.ql ? (this.mj || this.Ig || jQuery(this.canvas).css("margin", this.wo),
                    this.wo = "", this.ql = !1, 0 === this.Cc && this.setSize(Math.round(this.Ft / this.devicePixelRatio), Math.round(this.Et / this.devicePixelRatio), !0)) : (this.Ft = this.width, this.Et = this.height));
                this.Lg && (g = this.Er(), this.Yl = this.ae, g && (this.Lg = !1, this.ae = 1, this.trigger(W.prototype.n.Vq, null), window.C2_RegisterSW && window.C2_RegisterSW()));
                this.pA(c);
                !this.Y && !this.zd || this.cp || this.sk || a || (this.Y = !1, this.F ? this.Yb() : this.Pc(), this.qk && (this.canvas && this.canvas.toDataURL && (this.zu = this.canvas.toDataURL(this.qk[0],
                    this.qk[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.zu), this.trigger(W.prototype.n.Tv, null)), this.qk = null));
                this.nC || (this.Jd++, this.wg++, this.xl++);
                this.Mj += Xa() - f
            }
        }
    };
    e.prototype.pA = function(a) {
        var b, c, g, f, k, d, m, l;
        1E3 <= a - this.Qg && (this.Qg += 1E3, 1E3 <= a - this.Qg && (this.Qg = a), this.vo = this.xl, this.xl = 0, this.Zn = this.Mj, this.Mj = 0);
        b = 0;
        0 !== this.Ql && (b = a - this.Ql, 0 > b && (b = 0), this.sg = b /= 1E3, .5 < this.sg ? this.sg = 0 : this.sg > 1 / this.tt && (this.sg = 1 / this.tt));
        this.Ql = a;
        this.rg = this.sg * this.gg;
        this.wb.add(this.rg);
        this.zf.add(b);
        a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.qj) && !this.dd;
        2 <= this.Cc || a && 0 < this.zg ? (b = this.Lb / this.Kb, c = this.width / this.height, g = this.Cc, a && 0 < this.zg && (g = this.zg), this.Mi = 2 !== g && c > b || 2 === g && c < b ? this.height / this.Kb : this.width / this.Lb, this.Ba && (this.Ba.Xp(this.Ba.scrollX), this.Ba.Yp(this.Ba.scrollY))) : this.Mi = this.Jg ? this.devicePixelRatio : 1;
        this.gc();
        this.ed++;
        this.De.XA();
        this.ed--;
        this.gc();
        this.ed++;
        c = this.Dt.xf();
        a = 0;
        for (b = c.length; a < b; a++) c[a].yC();
        a = 0;
        for (b = this.I.length; a < b; a++)
            if (d = this.I[a], !d.O && (d.Ya.length || d.Ua.length))
                for (c = 0, g = d.k.length; c < g; c++)
                    for (m = d.k[c], f = 0, k = m.Z.length; f < k; f++) m.Z[f].Fa();
        a = 0;
        for (b = this.I.length; a < b; a++)
            if (d = this.I[a], !d.O && (d.Ya.length || d.Ua.length))
                for (c = 0, g = d.k.length; c < g; c++)
                    for (m = d.k[c], f = 0, k = m.Z.length; f < k; f++) l = m.Z[f], l.Zt && l.Zt();
        c = this.xp.xf();
        a = 0;
        for (b = c.length; a < b; a++) c[a].Fa();
        this.ed--;
        this.Oz();
        for (a = 0; this.Le && 10 > a++;) this.Ur(this.Le);
        a = 0;
        for (b = this.Re.length; a <
            b; a++) this.Re[a].No = !1;
        this.Ba.ug && this.Ba.ug.Bb();
        I(this.fk);
        this.ip = !1;
        this.ed++;
        a = 0;
        for (b = this.I.length; a < b; a++)
            if (d = this.I[a], !d.O && (d.Ya.length || d.Ua.length))
                for (c = 0, g = d.k.length; c < g; c++)
                    for (m = d.k[c], f = 0, k = m.Z.length; f < k; f++) l = m.Z[f], l.jh && l.jh();
        c = this.yp.xf();
        a = 0;
        for (b = c.length; a < b; a++) c[a].jh();
        this.ed--
    };
    e.prototype.$g = function() {
        var a, b, c, g, f, k, d, m, l;
        a = 0;
        for (b = this.I.length; a < b; a++)
            if (d = this.I[a], !d.O)
                for (c = 0, g = d.k.length; c < g; c++)
                    if (m = d.k[c], m.$g && m.$g(), m.Z)
                        for (f = 0, k = m.Z.length; f < k; f++) l =
                            m.Z[f], l.$g && l.$g()
    };
    e.prototype.Ur = function(a) {
        var b = this.Ba;
        this.Ba.oB();
        var c, g, f;
        if (this.F)
            for (c = 0, g = this.I.length; c < g; c++) f = this.I[c], f.O || !f.yk || f.global && 0 !== f.k.length || -1 !== a.kj.indexOf(f) || f.yk();
        b == a && I(this.De.Mc);
        I(this.fk);
        this.ju(!0);
        a.dq();
        this.ju(!1);
        this.ip = this.Y = !0;
        this.gc()
    };
    e.prototype.ju = function(a) {
        var b, c, g, f, k, d, m, l, e;
        b = 0;
        for (c = this.Ya.length; b < c; b++) g = this.Ya[b], a ? g.Uj && g.Uj() : g.Wj && g.Wj();
        b = 0;
        for (c = this.I.length; b < c; b++)
            if (g = this.I[b], g.global || g.xa.Zm)
                for (f = 0, k = g.k.length; f <
                    k; f++)
                    if (d = g.k[f], a ? d.Uj && d.Uj() : d.Wj && d.Wj(), d.Z)
                        for (m = 0, l = d.Z.length; m < l; m++) e = d.Z[m], a ? e.Uj && e.Uj() : e.Wj && e.Wj()
    };
    e.prototype.fg = function(a) {
        this.xp.add(a)
    };
    e.prototype.qB = function(a) {
        this.yp.add(a)
    };
    e.prototype.te = function(a) {
        return a && -1 !== a.Sj ? this.sg * a.Sj : this.rg
    };
    e.prototype.Pc = function() {
        this.Ba.Pc(this.Ta);
        this.uc && this.Ta.present()
    };
    e.prototype.Yb = function() {
        this.Oa && (this.tg = 1, this.Ba.qg(this.F));
        this.Ba.Yb(this.F);
        this.F.NA()
    };
    e.prototype.Mk = function(a) {
        a && this.jl.push(a)
    };
    e.prototype.hu =
        function(a) {
            Ea(this.jl, a)
        };
    e.prototype.Te = function(a) {
        a = a.toString();
        return this.df.hasOwnProperty(a) ? this.df[a] : null
    };
    var G = [];
    e.prototype.ke = function(a) {
        var b, c;
        b = a.type.name;
        var g = null;
        if (this.pg.hasOwnProperty(b)) {
            if (g = this.pg[b], g.contains(a)) return
        } else g = G.length ? G.pop() : new ca, this.pg[b] = g;
        g.add(a);
        this.Pf = !0;
        if (a.lc)
            for (b = 0, c = a.siblings.length; b < c; b++) this.ke(a.siblings[b]);
        this.Yo && g.Fi.push(a);
        this.Xo || (this.ed++, this.trigger(Object.getPrototypeOf(a.type.xa).n.Nq, a), this.ed--)
    };
    e.prototype.gc =
        function() {
            if (this.Pf) {
                var a, b, c, g, f, k;
                this.Yo = !0;
                c = 0;
                for (f = this.Sd.length; c < f; ++c)
                    for (a = this.Sd[c], b = a.type, b.k.push(a), g = 0, k = b.Ua.length; g < k; ++g) b.Ua[g].k.push(a), b.Ua[g].Bi = !0;
                I(this.Sd);
                this.Ov();
                Wa(this.pg);
                this.Pf = this.Yo = !1
            }
        };
    e.prototype.Ov = function() {
        for (var a in this.pg) this.pg.hasOwnProperty(a) && this.cv(this.pg[a])
    };
    e.prototype.cv = function(a) {
        var b = a.xf(),
            c = b[0].type,
            g, f, k, d, m, l;
        Ya(c.k, a);
        c.Bi = !0;
        0 === c.k.length && (c.Pk = !1);
        g = 0;
        for (f = c.Ua.length; g < f; ++g) l = c.Ua[g], Ya(l.k, a), l.Bi = !0;
        g = 0;
        for (f =
            this.De.Mc.length; g < f; ++g)
            if (m = this.De.Mc[g], m.yc.hasOwnProperty(c.index) && Ya(m.yc[c.index].Ve, a), !c.O)
                for (k = 0, d = c.Ua.length; k < d; ++k) l = c.Ua[k], m.yc.hasOwnProperty(l.index) && Ya(m.yc[l.index].Ve, a);
        if (m = b[0].u) {
            if (m.md)
                for (k = m.k, g = 0, f = k.length; g < f; ++g) d = k[g], a.contains(d) && (d.Ga(), m.fc.update(d, d.Ic, null), d.Ic.set(0, 0, -1, -1));
            Ya(m.k, a);
            m.si(0)
        }
        for (g = 0; g < b.length; ++g) this.bv(b[g], c);
        a.clear();
        G.push(a);
        this.Y = !0
    };
    e.prototype.bv = function(a, b) {
        var c, g, f;
        c = 0;
        for (g = this.jl.length; c < g; ++c) this.jl[c](a);
        a.sd &&
            b.Qi.update(a, a.sd, null);
        (c = a.u) && c.eh(a, !0);
        if (a.Z)
            for (c = 0, g = a.Z.length; c < g; ++c) f = a.Z[c], f.Yd && f.Yd(), f.behavior.hm.remove(a);
        this.Dt.remove(a);
        this.xp.remove(a);
        this.yp.remove(a);
        a.Yd && a.Yd();
        this.df.hasOwnProperty(a.uid.toString()) && delete this.df[a.uid.toString()];
        this.lm--;
        100 > b.gl.length && b.gl.push(a)
    };
    e.prototype.ao = function(a, b, c, g) {
        if (a.O) {
            var f = A(Math.random() * a.di.length);
            return this.ao(a.di[f], b, c, g)
        }
        return a.vd ? this.Lf(a.vd, b, !1, c, g, !1) : null
    };
    var z = [];
    e.prototype.Lf = function(a, b, c, g,
        f, k) {
        var d, m, l, e;
        if (!a) return null;
        var u = this.I[a[1]],
            w = u.xa.Rf;
        if (this.Lg && w && !u.Zo || w && !this.F && 11 === a[0][11]) return null;
        var v = b;
        w || (b = null);
        var t;
        u.gl.length ? (t = u.gl.pop(), t.Ab = !0, u.xa.M.call(t, u)) : (t = new u.xa.M(u), t.Ab = !1);
        !c || k || this.df.hasOwnProperty(a[2].toString()) ? t.uid = this.Tj++ : t.uid = a[2];
        this.df[t.uid.toString()] = t;
        t.bu = this.zt++;
        t.Fg = u.k.length;
        d = 0;
        for (m = this.Sd.length; d < m; ++d) this.Sd[d].type === u && t.Fg++;
        t.fj = Gb;
        t.toString = Hb;
        l = a[3];
        if (t.Ab) Wa(t.N);
        else {
            t.N = {};
            if ("undefined" !== typeof cr_is_preview)
                for (t.Bs = [], t.Bs.length = l.length, d = 0, m = l.length; d < m; d++) t.Bs[d] = l[d][1];
            t.Hb = [];
            t.Hb.length = l.length
        }
        d = 0;
        for (m = l.length; d < m; d++) t.Hb[d] = l[d][0];
        if (w) {
            var p = a[0];
            t.x = ga(g) ? p[0] : g;
            t.y = ga(f) ? p[1] : f;
            t.z = p[2];
            t.width = p[3];
            t.height = p[4];
            t.depth = p[5];
            t.q = p[6];
            t.opacity = p[7];
            t.rc = p[8];
            t.tc = p[9];
            t.hc = p[10];
            d = p[11];
            !this.F && u.da.length && (t.hc = d);
            t.Ri = kb(t.hc);
            this.K && lb(t, t.hc, this.K);
            if (t.Ab) {
                d = 0;
                for (m = p[12].length; d < m; d++)
                    for (l = 0, e = p[12][d].length; l < e; l++) t.ab[d][l] = p[12][d][l];
                t.Ka.set(0, 0, 0, 0);
                t.sd.set(0, 0, -1, -1);
                t.Ic.set(0, 0, -1, -1);
                t.Vb.vi(t.Ka);
                I(t.Rn)
            } else {
                t.ab = p[12].slice(0);
                d = 0;
                for (m = t.ab.length; d < m; d++) t.ab[d] = p[12][d].slice(0);
                t.Ca = [];
                t.Df = [];
                t.Df.length = u.da.length;
                t.Ka = new ta(0, 0, 0, 0);
                t.sd = new ta(0, 0, -1, -1);
                t.Ic = new ta(0, 0, -1, -1);
                t.Vb = new ua;
                t.Rn = [];
                t.D = Kb;
                t.xx = Lb;
                t.ic = Nb;
                t.Ga = Ob;
                t.Ru = Pb;
                t.tq = Qb;
                t.Ud = Rb
            }
            t.wk = !1;
            t.tB = 0;
            t.sB = 0;
            t.rB = null;
            14 === p.length && (t.wk = !0, t.tB = p[13][0], t.sB = p[13][1], t.rB = p[13][2]);
            d = 0;
            for (m = u.da.length; d < m; d++) t.Df[d] = !0;
            t.pf = !0;
            t.he = Sb;
            t.he();
            t.Su = !!t.Ca.length;
            t.Uk = !0;
            t.Un = !0;
            u.Ok = !0;
            t.visible = !0;
            t.Sj = -1;
            t.u = b;
            t.ie = b.k.length;
            t.tg = 0;
            "undefined" === typeof t.Ha && (t.Ha = null);
            this.Y = t.td = !0
        }
        var h;
        I(z);
        d = 0;
        for (m = u.Ua.length; d < m; d++) z.push.apply(z, u.Ua[d].Ya);
        z.push.apply(z, u.Ya);
        if (t.Ab)
            for (d = 0, m = z.length; d < m; d++) {
                var r = z[d];
                h = t.Z[d];
                h.Ab = !0;
                r.behavior.M.call(h, r, t);
                p = a[4][d];
                l = 0;
                for (e = p.length; l < e; l++) h.C[l] = p[l];
                h.H();
                r.behavior.hm.add(t)
            } else
                for (t.Z = [], d = 0, m = z.length; d < m; d++) r = z[d], h = new r.behavior.M(r, t), h.Ab = !1, h.C = a[4][d].slice(0), h.H(), t.Z.push(h), r.behavior.hm.add(t);
        p = a[5];
        if (t.Ab)
            for (d = 0, m = p.length; d < m; d++) t.C[d] = p[d];
        else t.C = p.slice(0);
        this.Sd.push(t);
        this.Pf = !0;
        b && (b.ph(t, !0), 1 !== b.Cd || 1 !== b.Dd) && (u.Pk = !0);
        this.lm++;
        if (u.lc) {
            if (t.lc = !0, t.Ab ? I(t.siblings) : t.siblings = [], !c && !k) {
                d = 0;
                for (m = u.Oc.length; d < m; d++)
                    if (u.Oc[d] !== u) {
                        if (!u.Oc[d].vd) return null;
                        t.siblings.push(this.Lf(u.Oc[d].vd, v, !1, w ? t.x : g, w ? t.y : f, !0))
                    }
                d = 0;
                for (m = t.siblings.length; d < m; d++)
                    for (t.siblings[d].siblings.push(t), l = 0; l < m; l++) d !== l && t.siblings[d].siblings.push(t.siblings[l])
            }
        } else t.lc = !1, t.siblings =
            null;
        t.H();
        d = 0;
        for (m = t.Z.length; d < m; d++) t.Z[d].JA && t.Z[d].JA();
        return t
    };
    e.prototype.Al = function(a) {
        var b, c;
        b = 0;
        for (c = this.Ba.ja.length; b < c; b++) {
            var g = this.Ba.ja[b];
            if (nb(g.name, a)) return g
        }
        return null
    };
    e.prototype.Hh = function(a) {
        a = A(a);
        0 > a && (a = 0);
        a >= this.Ba.ja.length && (a = this.Ba.ja.length - 1);
        return this.Ba.ja[a]
    };
    e.prototype.ls = function(a) {
        return ha(a) ? this.Hh(a) : this.Al(a.toString())
    };
    e.prototype.Xn = function(a) {
        var b, c;
        b = 0;
        for (c = a.length; b < c; b++) a[b].aa().fa = !0
    };
    e.prototype.dk = function(a) {
        var b,
            c;
        b = 0;
        for (c = a.length; b < c; b++) a[b].dk()
    };
    e.prototype.$f = function(a) {
        var b, c;
        b = 0;
        for (c = a.length; b < c; b++) a[b].$f()
    };
    e.prototype.Zd = function(a) {
        var b, c;
        b = 0;
        for (c = a.length; b < c; b++) a[b].Zd()
    };
    e.prototype.Ou = function(a) {
        if (a.Ok) {
            var b, c, g = a.k;
            b = 0;
            for (c = g.length; b < c; ++b) g[b].tq();
            g = this.Sd;
            b = 0;
            for (c = g.length; b < c; ++b) g[b].type === a && g[b].tq();
            a.Ok = !1
        }
    };
    e.prototype.Bo = function(a, b, c, g) {
        var f, d, k = a ? 1 !== a.Cd || 1 !== a.Dd : !1;
        if (b.O)
            for (a = 0, f = b.di.length; a < f; ++a) d = b.di[a], k || d.Pk ? Aa(g, d.k) : (this.Ou(d), d.Qi.Hm(c, g));
        else k || b.Pk ? Aa(g, b.k) : (this.Ou(b), b.Qi.Hm(c, g))
    };
    e.prototype.qs = function(a, b, c, g) {
        var f, d;
        f = 0;
        for (d = b.length; f < d; ++f) this.Bo(a, b[f], c, g)
    };
    e.prototype.zz = function(a, b, c) {
        var g = this.Au;
        g && this.qs(a, g.im, b, c)
    };
    e.prototype.qz = function(a, b, c) {
        var g = this.Os;
        g && this.qs(a, g.im, b, c)
    };
    e.prototype.hn = function(a, b, c) {
        var g = a.aa(),
            f, d, k, m, l = this.Va().Za.hd,
            e, t, u;
        if (g.fa)
            for (g.fa = !1, I(g.k), f = 0, m = a.k.length; f < m; f++) k = a.k[f], k.Ga(), e = k.u.Wb(b, c, !0), t = k.u.Wb(b, c, !1), k.ic(e, t) ? g.k.push(k) : l && g.ea.push(k);
        else {
            d = 0;
            u = l ? g.ea : g.k;
            f = 0;
            for (m = u.length; f < m; f++) k = u[f], k.Ga(), e = k.u.Wb(b, c, !0), t = k.u.Wb(b, c, !1), k.ic(e, t) && (l ? g.k.push(k) : (g.k[d] = g.k[f], d++));
            u.length = d
        }
        a.Yc();
        return g.Mo()
    };
    e.prototype.pc = function(a, b) {
        if (!(a && b && a !== b && a.td && b.td)) return !1;
        a.Ga();
        b.Ga();
        var c = a.u,
            g = b.u,
            f, d, k, m, l, e, t, u;
        if (c === g || c.Cd === g.Cd && g.Dd === g.Dd && c.scale === g.scale && c.q === g.q && c.je === g.je) {
            if (!a.Ka.Vz(b.Ka) || !a.Vb.Cs(b.Vb) || a.wk && b.wk) return !1;
            if (a.wk) return this.Fu(a, b);
            if (b.wk) return this.Fu(b, a);
            t = a.Ha && !a.Ha.Ph();
            f = b.Ha && !b.Ha.Ph();
            if (!t && !f) return !0;
            t ? (a.Ha.rh(a.width, a.height, a.q), t = a.Ha) : (this.fe.ti(a.Vb, a.x, a.y, a.width, a.height), t = this.fe);
            f ? (b.Ha.rh(b.width, b.height, b.q), u = b.Ha) : (this.fe.ti(b.Vb, b.x, b.y, b.width, b.height), u = this.fe);
            return t.lj(u, b.x - a.x, b.y - a.y)
        }
        t = a.Ha && !a.Ha.Ph();
        f = b.Ha && !b.Ha.Ph();
        t ? (a.Ha.rh(a.width, a.height, a.q), this.fe.su(a.Ha)) : this.fe.ti(a.Vb, a.x, a.y, a.width, a.height);
        t = this.fe;
        f ? (b.Ha.rh(b.width, b.height, b.q), this.gq.su(b.Ha)) : this.gq.ti(b.Vb, b.x, b.y, b.width, b.height);
        u = this.gq;
        f = 0;
        for (d = t.be; f <
            d; f++) k = 2 * f, m = k + 1, l = t.Nb[k], e = t.Nb[m], t.Nb[k] = c.Wa(l + a.x, e + a.y, !0), t.Nb[m] = c.Wa(l + a.x, e + a.y, !1);
        t.Ga();
        f = 0;
        for (d = u.be; f < d; f++) k = 2 * f, m = k + 1, l = u.Nb[k], e = u.Nb[m], u.Nb[k] = g.Wa(l + b.x, e + b.y, !0), u.Nb[m] = g.Wa(l + b.x, e + b.y, !1);
        u.Ga();
        return t.lj(u, 0, 0)
    };
    var x = new ua;
    new ta(0, 0, 0, 0);
    var K = [];
    e.prototype.Fu = function(a, b) {
        var c, g, f, d, k = b.Ka,
            m = a.x,
            l = a.y;
        a.lC(k, K);
        var e = b.Ha && !b.Ha.Ph();
        c = 0;
        for (g = K.length; c < g; ++c)
            if (f = K[c], d = f.BC, k.Wz(d, m, l) && (x.vi(d), x.offset(m, l), x.Cs(b.Vb)))
                if (e)
                    if (b.Ha.rh(b.width, b.height, b.q),
                        f.Ip) {
                        if (f.Ip.lj(b.Ha, b.x - (m + d.left), b.y - (l + d.top))) return I(K), !0
                    } else {
                        if (this.fe.ti(x, 0, 0, d.right - d.left, d.bottom - d.top), this.fe.lj(b.Ha, b.x, b.y)) return I(K), !0
                    }
        else if (f.Ip) {
            if (this.fe.ti(b.Vb, 0, 0, b.width, b.height), f.Ip.lj(this.fe, -(m + d.left), -(l + d.top))) return I(K), !0
        } else return I(K), !0;
        I(K);
        return !1
    };
    e.prototype.mq = function(a, b) {
        if (!b) return !1;
        var c, g, f, d, k;
        c = 0;
        for (g = a.Ya.length; c < g; c++)
            if (a.Ya[c].behavior instanceof b) return !0;
        if (!a.O)
            for (c = 0, g = a.Ua.length; c < g; c++)
                for (k = a.Ua[c], f = 0, d = k.Ya.length; f <
                    d; f++)
                    if (k.Ya[f].behavior instanceof b) return !0;
        return !1
    };
    e.prototype.nq = function(a) {
        return this.mq(a, gc.WB)
    };
    e.prototype.oq = function(a) {
        return this.mq(a, gc.XB)
    };
    var R = [];
    e.prototype.nb = function(a) {
        var b, c, g;
        a.Ga();
        this.zz(a.u, a.Ka, R);
        b = 0;
        for (c = R.length; b < c; ++b)
            if (g = R[b], g.N.solidEnabled && this.pc(a, g)) return I(R), g;
        I(R);
        return null
    };
    var X = [];
    e.prototype.sf = function(a, b) {
        var c = null;
        b && (c = X, I(c));
        a.Ga();
        this.qz(a.u, a.Ka, R);
        var g, f, d;
        g = 0;
        for (f = R.length; g < f; ++g)
            if (d = R[g], d.N.jumpthruEnabled && this.pc(a,
                    d))
                if (b) c.push(d);
                else return I(R), d;
        I(R);
        return c
    };
    e.prototype.jd = function(a, b, c, g, f, d) {
        g = g || 50;
        var k = a.x,
            m = a.y,
            l, e = null,
            t = null;
        for (l = 0; l < g; l++)
            if (a.x = k + b * l, a.y = m + c * l, a.D(), !this.pc(a, e) && ((e = this.nb(a)) && (t = e), !e && (f && (d ? e = this.pc(a, d) ? d : null : e = this.sf(a), e && (t = e)), !e))) return t && this.Lp(a, b, c, t), !0;
        a.x = k;
        a.y = m;
        a.D();
        return !1
    };
    e.prototype.Lp = function(a, b, c, g) {
        var f = 2,
            d, k = !1;
        d = !1;
        for (var m = a.x, l = a.y; 16 >= f;) d = 1 / f, f *= 2, a.x += b * d * (k ? 1 : -1), a.y += c * d * (k ? 1 : -1), a.D(), this.pc(a, g) ? d = k = !0 : (d = k = !1, m = a.x, l = a.y);
        d && (a.x = m, a.y = l, a.D())
    };
    e.prototype.du = function(a, b) {
        var c = ga(b) ? 100 : b,
            g = 0,
            f = a.x,
            d = a.y,
            k = 0,
            m = 0,
            l = 0,
            e = this.nb(a);
        if (!e) return !0;
        for (; g <= c;) {
            switch (k) {
                case 0:
                    m = 0;
                    l = -1;
                    g++;
                    break;
                case 1:
                    m = 1;
                    l = -1;
                    break;
                case 2:
                    m = 1;
                    l = 0;
                    break;
                case 3:
                    l = m = 1;
                    break;
                case 4:
                    m = 0;
                    l = 1;
                    break;
                case 5:
                    m = -1;
                    l = 1;
                    break;
                case 6:
                    m = -1;
                    l = 0;
                    break;
                case 7:
                    l = m = -1
            }
            k = (k + 1) % 8;
            a.x = A(f + m * g);
            a.y = A(d + l * g);
            a.D();
            if (!this.pc(a, e) && (e = this.nb(a), !e)) return !0
        }
        a.x = f;
        a.y = d;
        a.D();
        return !1
    };
    e.prototype.dh = function(a, b) {
        a.td && b.td && this.fk.push([a, b])
    };
    e.prototype.Ix =
        function(a, b) {
            var c, g, f;
            c = 0;
            for (g = this.fk.length; c < g; c++)
                if (f = this.fk[c], f[0] == a && f[1] == b || f[0] == b && f[1] == a) return !0;
            return !1
        };
    e.prototype.Gx = function(a, b, c) {
        var g = a.x,
            f = a.y,
            d = oa(10, Sa(b, c, g, f)),
            k = La(b, c, g, f),
            m = this.nb(a);
        if (!m) return Ia(k + qa);
        var l = m,
            e, t, u, w, v = L(5);
        for (e = 1; 36 > e; e++)
            if (t = k - e * v, a.x = b + Math.cos(t) * d, a.y = c + Math.sin(t) * d, a.D(), !this.pc(a, l) && (l = this.nb(a), !l)) {
                u = t;
                break
            }
        36 === e && (u = Ia(k + qa));
        l = m;
        for (e = 1; 36 > e; e++)
            if (t = k + e * v, a.x = b + Math.cos(t) * d, a.y = c + Math.sin(t) * d, a.D(), !this.pc(a, l) && (l =
                    this.nb(a), !l)) {
                w = t;
                break
            }
        36 === e && (w = Ia(k + qa));
        a.x = g;
        a.y = f;
        a.D();
        if (w === u) return w;
        a = Ma(w, u) / 2;
        a = Oa(w, u) ? Ia(u + a + qa) : Ia(w + a);
        u = Math.cos(k);
        k = Math.sin(k);
        w = Math.cos(a);
        a = Math.sin(a);
        b = u * w + k * a;
        return La(0, 0, u - 2 * b * w, k - 2 * b * a)
    };
    var M = -1;
    e.prototype.trigger = function(a, b, c) {
        if (!this.Ba) return !1;
        var g = this.Ba.ug;
        if (!g) return !1;
        var f = !1,
            d, k, m;
        M++;
        var l = g.fo;
        k = 0;
        for (m = l.length; k < m; ++k) d = this.Iu(a, b, l[k], c), f = f || d;
        d = this.Iu(a, b, g, c);
        M--;
        return f || d
    };
    e.prototype.Iu = function(a, b, c, g) {
        var f = !1,
            d, k, m, l;
        if (b)
            for (m =
                this.kq(a, b, b.type.name, c, g), f = f || m, l = b.type.Ua, d = 0, k = l.length; d < k; ++d) m = this.kq(a, b, l[d].name, c, g), f = f || m;
        else m = this.kq(a, b, "system", c, g), f = f || m;
        return f
    };
    e.prototype.kq = function(a, b, c, g, f) {
        var d, k = !1,
            m = !1,
            m = "undefined" !== typeof f,
            l = (m ? g.Yr : g.Ju)[c];
        if (!l) return k;
        var e = null;
        g = 0;
        for (d = l.length; g < d; ++g)
            if (l[g].method == a) {
                e = l[g].Xi;
                break
            }
        if (!e) return k;
        var t;
        m ? t = e[f] : t = e;
        if (!t) return null;
        g = 0;
        for (d = t.length; g < d; g++) a = t[g][0], f = t[g][1], m = this.$y(b, c, a, f), k = k || m;
        return k
    };
    e.prototype.$y = function(a,
        b, c, g) {
        var f, d, k = !1;
        this.lq++;
        var m = this.Va().Za;
        m && this.dk(m.eg);
        var l = 1 < this.lq;
        this.dk(c.eg);
        l && this.PA();
        var e = this.Gm(c);
        e.Za = c;
        a && (f = this.types[b].aa(), f.fa = !1, I(f.k), f.k[0] = a, this.types[b].Yc());
        a = !0;
        if (c.parent) {
            b = e.Eu;
            for (f = c.parent; f;) b.push(f), f = f.parent;
            b.reverse();
            f = 0;
            for (d = b.length; f < d; f++)
                if (!b[f].ZA()) {
                    a = !1;
                    break
                }
        }
        a && (this.wg++, c.hd ? c.YA(g) : c.Bb(), k = k || e.Pg);
        this.Cm();
        l && this.IA();
        this.Zd(c.eg);
        m && this.Zd(m.eg);
        this.Pf && 0 === this.ed && 0 === M && !this.$o && this.gc();
        this.lq--;
        return k
    };
    e.prototype.Gh =
        function() {
            var a = this.Va();
            return a.Za.Eb[a.qb]
        };
    e.prototype.$z = function() {
        return 0 === this.Va().qb
    };
    e.prototype.jz = function() {
        var a = this.Va();
        return a.Za.nd[a.Bc]
    };
    e.prototype.PA = function() {
        this.$l++;
        this.$l >= this.qp.length && this.qp.push([])
    };
    e.prototype.IA = function() {
        this.$l--
    };
    e.prototype.gs = function() {
        return this.qp[this.$l]
    };
    e.prototype.Gm = function(a) {
        this.ll++;
        this.ll >= this.oo.length && this.oo.push(new Tb);
        var b = this.Va();
        b.reset(a);
        return b
    };
    e.prototype.Cm = function() {
        this.ll--
    };
    e.prototype.Va =
        function() {
            return this.oo[this.ll]
        };
    e.prototype.cu = function(a) {
        this.Oj++;
        this.Oj >= this.Nj.length && this.Nj.push(aa({
            name: a,
            index: 0,
            fb: !1
        }));
        var b = this.hs();
        b.name = a;
        b.index = 0;
        b.fb = !1;
        return b
    };
    e.prototype.Xt = function() {
        this.Oj--
    };
    e.prototype.hs = function() {
        return this.Nj[this.Oj]
    };
    e.prototype.ks = function(a, b) {
        for (var c, g, f, d, k, m; b;) {
            c = 0;
            for (g = b.Hd.length; c < g; c++)
                if (m = b.Hd[c], m instanceof Ub && nb(a, m.name)) return m;
            b = b.parent
        }
        c = 0;
        for (g = this.Re.length; c < g; c++)
            for (k = this.Re[c], f = 0, d = k.Nf.length; f < d; f++)
                if (m =
                    k.Nf[f], m instanceof Ub && nb(a, m.name)) return m;
        return null
    };
    e.prototype.ns = function(a) {
        var b, c;
        b = 0;
        for (c = this.Xd.length; b < c; b++)
            if (this.Xd[b].ta === a) return this.Xd[b];
        return null
    };
    e.prototype.Cl = function(a) {
        var b, c;
        b = 0;
        for (c = this.I.length; b < c; b++)
            if (this.I[b].ta === a) return this.I[b];
        return null
    };
    e.prototype.nz = function(a) {
        var b, c;
        b = 0;
        for (c = this.Gf.length; b < c; b++)
            if (this.Gf[b].ta === a) return this.Gf[b];
        return null
    };
    e.prototype.Tx = function(a, b) {
        this.qk = [a, b];
        this.Y = !0
    };
    e.prototype.Oz = function() {
        var a =
            this,
            b = this.Wp,
            c = this.Ze,
            g = this.Vl,
            f = !1;
        this.xu && (f = !0, b = "__c2_continuouspreview", this.xu = !1);
        if (b.length) {
            this.gc();
            c = this.cB();
            if (n() && !this.zd) r(b, c, function() {
                ea("Saved state to IndexedDB storage (" + c.length + " bytes)");
                a.Ze = c;
                a.trigger(W.prototype.n.Dn, null);
                a.Ze = "";
                f && d()
            }, function(g) {
                try {
                    localStorage.setItem("__c2save_" + b, c), ea("Saved state to WebStorage (" + c.length + " bytes)"), a.Ze = c, a.trigger(W.prototype.n.Dn, null), a.Ze = "", f && d()
                } catch (k) {
                    ea("Failed to save game state: " + g + "; " + k), a.trigger(W.prototype.n.Yq,
                        null)
                }
            });
            else try {
                localStorage.setItem("__c2save_" + b, c), ea("Saved state to WebStorage (" + c.length + " bytes)"), a.Ze = c, this.trigger(W.prototype.n.Dn, null), a.Ze = "", f && d()
            } catch (k) {
                ea("Error saving to WebStorage: " + k), a.trigger(W.prototype.n.Yq, null)
            }
            this.Vl = this.Wp = "";
            this.Jb = null
        }
        if (g.length) {
            if (n() && !this.zd) p(g, function(b) {
                b ? (a.Jb = b, ea("Loaded state from IndexedDB storage (" + a.Jb.length + " bytes)")) : (a.Jb = localStorage.getItem("__c2save_" + g) || "", ea("Loaded state from WebStorage (" + a.Jb.length + " bytes)"));
                a.sk = !1;
                a.Jb || (a.Jb = null, a.trigger(W.prototype.n.Kk, null))
            }, function() {
                a.Jb = localStorage.getItem("__c2save_" + g) || "";
                ea("Loaded state from WebStorage (" + a.Jb.length + " bytes)");
                a.sk = !1;
                a.Jb || (a.Jb = null, a.trigger(W.prototype.n.Kk, null))
            });
            else {
                try {
                    this.Jb = localStorage.getItem("__c2save_" + g) || "", ea("Loaded state from WebStorage (" + this.Jb.length + " bytes)")
                } catch (m) {
                    this.Jb = null
                }
                this.sk = !1;
                a.Jb || (a.Jb = null, a.trigger(W.prototype.n.Kk, null))
            }
            this.Wp = this.Vl = ""
        }
        null !== this.Jb && (this.gc(), this.oA(this.Jb) ?
            (this.Ze = this.Jb, this.trigger(W.prototype.n.gw, null), this.Ze = "") : a.trigger(W.prototype.n.Kk, null), this.Jb = null)
    };
    e.prototype.cB = function() {
        var a, b, g, f, d, k, m, l = {
            c2save: !0,
            version: 1,
            rt: {
                time: this.wb.R,
                walltime: this.zf.R,
                timescale: this.gg,
                tickcount: this.Jd,
                execcount: this.wg,
                next_uid: this.Tj,
                running_layout: this.Ba.ta,
                start_time_offset: Date.now() - this.bn
            },
            types: {},
            layouts: {},
            events: {
                groups: {},
                cnds: {},
                acts: {},
                vars: {}
            }
        };
        a = 0;
        for (b = this.I.length; a < b; a++)
            if (d = this.I[a], !d.O && !this.nq(d)) {
                k = {
                    instances: []
                };
                Va(d.N) &&
                    (k.ex = c(d.N));
                g = 0;
                for (f = d.k.length; g < f; g++) k.instances.push(this.Vp(d.k[g]));
                l.types[d.ta.toString()] = k
            }
        a = 0;
        for (b = this.Xd.length; a < b; a++) g = this.Xd[a], l.layouts[g.ta.toString()] = g.Ma();
        f = l.events.groups;
        a = 0;
        for (b = this.Gf.length; a < b; a++) g = this.Gf[a], f[g.ta.toString()] = this.Jh[g.gj].Cg;
        b = l.events.cnds;
        for (m in this.Kf) this.Kf.hasOwnProperty(m) && (a = this.Kf[m], Va(a.N) && (b[m] = {
            ex: c(a.N)
        }));
        b = l.events.acts;
        for (m in this.Ef) this.Ef.hasOwnProperty(m) && (a = this.Ef[m], Va(a.N) && (b[m] = {
            ex: c(a.N)
        }));
        b = l.events.vars;
        for (m in this.Gi) this.Gi.hasOwnProperty(m) && (a = this.Gi[m], a.Nl || a.parent && !a.vj || (b[m] = a.data));
        l.system = this.De.Ma();
        return JSON.stringify(l)
    };
    e.prototype.fu = function() {
        var a, b, c, g, f, d;
        this.df = {};
        a = 0;
        for (b = this.I.length; a < b; a++)
            if (c = this.I[a], !c.O)
                for (g = 0, f = c.k.length; g < f; g++) d = c.k[g], this.df[d.uid.toString()] = d
    };
    e.prototype.oA = function(a) {
        var b;
        try {
            b = JSON.parse(a)
        } catch (c) {
            return !1
        }
        if (!b.c2save || 1 < b.version) return !1;
        this.oj = !0;
        a = b.rt;
        this.wb.reset();
        this.wb.R = a.time;
        this.zf.reset();
        this.zf.R = a.walltime ||
            0;
        this.gg = a.timescale;
        this.Jd = a.tickcount;
        this.wg = a.execcount;
        this.bn = Date.now() - a.start_time_offset;
        var g = a.running_layout;
        if (g !== this.Ba.ta)
            if (g = this.ns(g)) this.Ur(g);
            else return;
        var f, d, k, m, l, e, t;
        e = b.types;
        for (d in e)
            if (e.hasOwnProperty(d) && (m = this.Cl(parseInt(d, 10))) && !m.O && !this.nq(m)) {
                e[d].ex ? m.N = e[d].ex : Wa(m.N);
                l = m.k;
                k = e[d].instances;
                g = 0;
                for (f = pa(l.length, k.length); g < f; g++) this.Wl(l[g], k[g]);
                g = k.length;
                for (f = l.length; g < f; g++) this.ke(l[g]);
                g = l.length;
                for (f = k.length; g < f; g++) {
                    l = null;
                    if (m.xa.Rf &&
                        (l = this.Ba.Bl(k[g].w.l), !l)) continue;
                    l = this.Lf(m.vd, l, !1, 0, 0, !0);
                    this.Wl(l, k[g])
                }
                m.Bi = !0
            }
        this.gc();
        this.fu();
        f = b.layouts;
        for (d in f) f.hasOwnProperty(d) && (g = this.ns(parseInt(d, 10))) && g.Sa(f[d]);
        f = b.events.groups;
        for (d in f) f.hasOwnProperty(d) && (g = this.nz(parseInt(d, 10))) && this.Jh[g.gj] && this.Jh[g.gj].jk(f[d]);
        g = b.events.cnds;
        for (d in this.Kf) this.Kf.hasOwnProperty(d) && (g.hasOwnProperty(d) ? this.Kf[d].N = g[d].ex : this.Kf[d].N = {});
        g = b.events.acts;
        for (d in this.Ef) this.Ef.hasOwnProperty(d) && (g.hasOwnProperty(d) ?
            this.Ef[d].N = g[d].ex : this.Ef[d].N = {});
        g = b.events.vars;
        for (d in g) g.hasOwnProperty(d) && this.Gi.hasOwnProperty(d) && (this.Gi[d].data = g[d]);
        this.Tj = a.next_uid;
        this.oj = !1;
        g = 0;
        for (f = this.pl.length; g < f; ++g) l = this.pl[g], this.trigger(Object.getPrototypeOf(l.type.xa).n.ig, l);
        I(this.pl);
        this.De.Sa(b.system);
        g = 0;
        for (f = this.I.length; g < f; g++)
            if (m = this.I[g], !m.O && !this.nq(m))
                for (b = 0, d = m.k.length; b < d; b++) {
                    l = m.k[b];
                    if (m.lc)
                        for (e = l.fj(), I(l.siblings), a = 0, k = m.Oc.length; a < k; a++) t = m.Oc[a], m !== t && l.siblings.push(t.k[e]);
                    l.Md && l.Md();
                    if (l.Z)
                        for (a = 0, k = l.Z.length; a < k; a++) e = l.Z[a], e.Md && e.Md()
                }
        return this.Y = !0
    };
    e.prototype.Vp = function(a, b) {
        var g, f, d, k, m;
        k = a.type;
        d = k.xa;
        var l = {};
        b ? l.c2 = !0 : l.uid = a.uid;
        Va(a.N) && (l.ex = c(a.N));
        if (a.Hb && a.Hb.length)
            for (l.ivs = {}, g = 0, f = a.Hb.length; g < f; g++) l.ivs[a.type.Wo[g].toString()] = a.Hb[g];
        if (d.Rf) {
            d = {
                x: a.x,
                y: a.y,
                w: a.width,
                h: a.height,
                l: a.u.ta,
                zi: a.Ud()
            };
            0 !== a.q && (d.a = a.q);
            1 !== a.opacity && (d.o = a.opacity);
            .5 !== a.rc && (d.hX = a.rc);
            .5 !== a.tc && (d.hY = a.tc);
            0 !== a.hc && (d.bm = a.hc);
            a.visible || (d.v = a.visible);
            a.td || (d.ce = a.td); - 1 !== a.Sj && (d.mts = a.Sj);
            if (k.da.length)
                for (d.fx = [], g = 0, f = k.da.length; g < f; g++) m = k.da[g], d.fx.push({
                    name: m.name,
                    active: a.Df[m.index],
                    params: a.ab[m.index]
                });
            l.w = d
        }
        if (a.Z && a.Z.length)
            for (l.behs = {}, g = 0, f = a.Z.length; g < f; g++) k = a.Z[g], k.Ma && (l.behs[k.type.ta.toString()] = k.Ma());
        a.Ma && (l.data = a.Ma());
        return l
    };
    e.prototype.pz = function(a, b) {
        var c, g;
        c = 0;
        for (g = a.Wo.length; c < g; c++)
            if (a.Wo[c] === b) return c;
        return -1
    };
    e.prototype.iz = function(a, b) {
        var c, g;
        c = 0;
        for (g = a.Z.length; c < g; c++)
            if (a.Z[c].type.ta ===
                b) return c;
        return -1
    };
    e.prototype.Wl = function(a, b, c) {
        var g, f, d, k, m;
        m = a.type;
        k = m.xa;
        if (c) {
            if (!b.c2) return
        } else a.uid = b.uid;
        b.ex ? a.N = b.ex : Wa(a.N);
        if (f = b.ivs)
            for (g in f) f.hasOwnProperty(g) && (d = this.pz(m, parseInt(g, 10)), 0 > d || d >= a.Hb.length || (a.Hb[d] = f[g]));
        if (k.Rf) {
            d = b.w;
            a.u.ta !== d.l && (f = a.u, a.u = this.Ba.Bl(d.l), a.u ? (f.eh(a, !0), a.u.ph(a, !0), a.D(), a.u.si(0)) : (a.u = f, c || this.ke(a)));
            a.x = d.x;
            a.y = d.y;
            a.width = d.w;
            a.height = d.h;
            a.ie = d.zi;
            a.q = d.hasOwnProperty("a") ? d.a : 0;
            a.opacity = d.hasOwnProperty("o") ? d.o : 1;
            a.rc =
                d.hasOwnProperty("hX") ? d.hX : .5;
            a.tc = d.hasOwnProperty("hY") ? d.hY : .5;
            a.visible = d.hasOwnProperty("v") ? d.v : !0;
            a.td = d.hasOwnProperty("ce") ? d.ce : !0;
            a.Sj = d.hasOwnProperty("mts") ? d.mts : -1;
            a.hc = d.hasOwnProperty("bm") ? d.bm : 0;
            a.Ri = kb(a.hc);
            this.K && lb(a, a.hc, this.K);
            a.D();
            if (d.hasOwnProperty("fx"))
                for (c = 0, f = d.fx.length; c < f; c++) k = m.Do(d.fx[c].name), 0 > k || (a.Df[k] = d.fx[c].active, a.ab[k] = d.fx[c].params);
            a.he()
        }
        if (m = b.behs)
            for (g in m) m.hasOwnProperty(g) && (c = this.iz(a, parseInt(g, 10)), 0 > c || a.Z[c].Sa(m[g]));
        b.data &&
            a.Sa(b.data)
    };
    e.prototype.Zr = function(a, b, c) {
        window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/" + a, function(a) {
            a.file(b, c)
        }, c)
    };
    e.prototype.az = function(a, b) {
        this.Zr("data.js", function(c) {
            var g = new FileReader;
            g.onload = function(b) {
                a(b.target.result)
            };
            g.onerror = b;
            g.readAsText(c)
        }, b)
    };
    var F = [],
        D = 0;
    e.prototype.tp = function() {
        if (F.length && !(8 <= D)) {
            D++;
            var a = F.shift();
            this.Vx(a.filename, a.pB, a.xy)
        }
    };
    e.prototype.$r = function(a, b, c) {
        var g = this;
        F.push({
            filename: a,
            pB: function(a) {
                D--;
                g.tp();
                b(a)
            },
            xy: function(a) {
                D--;
                g.tp();
                c(a)
            }
        });
        this.tp()
    };
    e.prototype.Vx = function(a, b, c) {
        this.Zr(a, function(a) {
            var c = new FileReader;
            c.onload = function(a) {
                b(a.target.result)
            };
            c.readAsArrayBuffer(a)
        }, c)
    };
    e.prototype.bz = function(a, b, c) {
        this.$r(a, function(a) {
            a = URL.createObjectURL(new Blob([a]));
            b(a)
        }, c)
    };
    e.prototype.Xz = function(a) {
        return /^(?:[a-z]+:)?\/\//.test(a) || "data:" === a.substr(0, 5) || "blob:" === a.substr(0, 5)
    };
    e.prototype.pu = function(a, b) {
        this.sj && !this.Xz(b) ? this.bz(b, function(b) {
            a.src = b
        }, function(a) {
            alert("Failed to load image: " +
                a)
        }) : a.src = b
    };
    e.prototype.Pm = function(a, b) {
        "undefined" !== typeof a.imageSmoothingEnabled ? a.imageSmoothingEnabled = b : (a.webkitImageSmoothingEnabled = b, a.mozImageSmoothingEnabled = b, a.msImageSmoothingEnabled = b)
    };
    Vb = function(a) {
        return new e(document.getElementById(a))
    };
    Wb = function(a, b) {
        return new e({
            dc: !0,
            width: a,
            height: b
        })
    };
    window.cr_createRuntime = Vb;
    window.cr_createDCRuntime = Wb;
    window.createCocoonJSRuntime = function() {
        window.c2cocoonjs = !0;
        var a = document.createElement("screencanvas") || document.createElement("canvas");
        a.Ni = !0;
        document.body.appendChild(a);
        a = new e(a);
        window.c2runtime = a;
        window.addEventListener("orientationchange", function() {
            window.c2runtime.setSize(window.innerWidth, window.innerHeight)
        });
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    };
    window.createEjectaRuntime = function() {
        var a = new e(document.getElementById("canvas"));
        window.c2runtime = a;
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    }
})();
window.cr_getC2Runtime = function() {
    var e = document.getElementById("c2canvas");
    return e ? e.c2runtime : window.c2runtime ? window.c2runtime : null
};
window.cr_getSnapshot = function(e, q) {
    var n = window.cr_getC2Runtime();
    n && n.Tx(e, q)
};
window.cr_sizeCanvas = function(e, q) {
    if (0 !== e && 0 !== q) {
        var n = window.cr_getC2Runtime();
        n && n.setSize(e, q)
    }
};
window.cr_setSuspended = function(e) {
    var q = window.cr_getC2Runtime();
    q && q.setSuspended(e)
};
(function() {
    function e(a, b) {
        this.b = a;
        this.ug = null;
        this.scrollX = this.b.Lb / 2;
        this.scrollY = this.b.Kb / 2;
        this.scale = 1;
        this.q = 0;
        this.Eh = !0;
        this.name = b[0];
        this.DA = b[1];
        this.CA = b[2];
        this.width = b[1];
        this.height = b[2];
        this.Lu = b[3];
        this.vu = b[4];
        this.ta = b[5];
        var c = b[6],
            f, d;
        this.ja = [];
        this.kj = [];
        f = 0;
        for (d = c.length; f < d; f++) {
            var e = new Xb(this, c[f]);
            e.Bt = f;
            this.ja.push(e)
        }
        c = b[7];
        this.Hg = [];
        f = 0;
        for (d = c.length; f < d; f++) {
            var e = c[f],
                v = this.b.I[e[1]];
            v.vd || (v.vd = e);
            this.Hg.push(e); - 1 === this.kj.indexOf(v) && this.kj.push(v)
        }
        this.da = [];
        this.Ca = [];
        this.pf = !0;
        this.ab = [];
        f = 0;
        for (d = b[8].length; f < d; f++) this.da.push({
            id: b[8][f][0],
            name: b[8][f][1],
            Cb: -1,
            $d: !1,
            Xa: !0,
            index: f
        }), this.ab.push(b[8][f][2].slice(0));
        this.he();
        this.ag = new ta(0, 0, 1, 1);
        this.Op = new ta(0, 0, 1, 1);
        this.Zf = {}
    }

    function q(a, b) {
        return a.ie - b.ie
    }

    function n(a, b) {
        this.xb = a;
        this.b = a.b;
        this.k = [];
        this.scale = 1;
        this.q = 0;
        this.Pe = !1;
        this.uf = new ta(0, 0, 0, 0);
        this.Hu = new ua;
        this.Ia = this.za = this.Ja = this.ya = 0;
        this.kh = !1;
        this.Bf = -1;
        this.Yn = 0;
        this.name = b[0];
        this.index = b[1];
        this.ta = b[2];
        this.visible = b[3];
        this.Qd = b[4];
        this.ge = b[5];
        this.Cd = b[6];
        this.Dd = b[7];
        this.opacity = b[8];
        this.wl = b[9];
        this.md = b[10];
        this.je = b[11];
        this.hc = b[12];
        this.ty = b[13];
        this.Ri = "source-over";
        this.jc = this.nc = 0;
        this.fc = null;
        this.$e = h();
        this.ee = !0;
        this.$h = new ta(0, 0, -1, -1);
        this.Xb = new ta(0, 0, -1, -1);
        this.md && (this.fc = new jb(this.b.Lb, this.b.Kb));
        this.Ae = !1;
        var c = b[14],
            f, d;
        this.Cu = [];
        this.cd = [];
        this.Ti = [];
        f = 0;
        for (d = c.length; f < d; f++) {
            var e = c[f],
                v = this.b.I[e[1]];
            v.vd || (v.vd = e, v.Rx = this.index);
            this.cd.push(e); - 1 === this.xb.kj.indexOf(v) &&
                this.xb.kj.push(v)
        }
        za(this.Cu, this.cd);
        this.da = [];
        this.Ca = [];
        this.pf = !0;
        this.ab = [];
        f = 0;
        for (d = b[15].length; f < d; f++) this.da.push({
            id: b[15][f][0],
            name: b[15][f][1],
            Cb: -1,
            $d: !1,
            Xa: !0,
            index: f
        }), this.ab.push(b[15][f][2].slice(0));
        this.he();
        this.ag = new ta(0, 0, 1, 1);
        this.Op = new ta(0, 0, 1, 1)
    }

    function h() {
        return c.length ? c.pop() : []
    }

    function r(a) {
        I(a);
        c.push(a)
    }
    e.prototype.bB = function(a) {
        var b = a.type.ta.toString();
        this.Zf.hasOwnProperty(b) || (this.Zf[b] = []);
        this.Zf[b].push(this.b.Vp(a))
    };
    e.prototype.us = function() {
        var a =
            this.ja[0];
        return !a.ge && 1 === a.opacity && !a.wl && a.visible
    };
    e.prototype.he = function() {
        I(this.Ca);
        this.pf = !0;
        var a, b, c;
        a = 0;
        for (b = this.da.length; a < b; a++) c = this.da[a], c.Xa && (this.Ca.push(c), c.$d || (this.pf = !1))
    };
    e.prototype.Co = function(a) {
        var b, c, f;
        b = 0;
        for (c = this.da.length; b < c; b++)
            if (f = this.da[b], f.name === a) return f;
        return null
    };
    var p = [],
        d = !0;
    e.prototype.dq = function() {
        this.vu && (this.ug = this.b.po[this.vu], this.ug.pq());
        this.b.Ba = this;
        this.width = this.DA;
        this.height = this.CA;
        this.scrollX = this.b.Lb / 2;
        this.scrollY =
            this.b.Kb / 2;
        var a, b, c, f, e, h, v;
        a = 0;
        for (c = this.b.I.length; a < c; a++)
            if (b = this.b.I[a], !b.O)
                for (e = b.k, b = 0, f = e.length; b < f; b++)
                    if (h = e[b], h.u) {
                        var m = h.u.Bt;
                        m >= this.ja.length && (m = this.ja.length - 1);
                        h.u = this.ja[m]; - 1 === h.u.k.indexOf(h) && h.u.k.push(h);
                        h.u.kh = !0
                    }
        if (!d)
            for (a = 0, c = this.ja.length; a < c; ++a) this.ja[a].k.sort(q);
        I(p);
        this.Ex();
        a = 0;
        for (c = this.ja.length; a < c; a++) h = this.ja[a], h.Px(), h.un();
        e = !1;
        if (!this.Eh) {
            for (v in this.Zf)
                if (this.Zf.hasOwnProperty(v) && (b = this.b.Cl(parseInt(v, 10))) && !b.O && this.b.oq(b)) {
                    f =
                        this.Zf[v];
                    a = 0;
                    for (c = f.length; a < c; a++) {
                        h = null;
                        if (b.xa.Rf && (h = this.Bl(f[a].w.l), !h)) continue;
                        h = this.b.Lf(b.vd, h, !1, 0, 0, !0);
                        this.b.Wl(h, f[a]);
                        e = !0;
                        p.push(h)
                    }
                    I(f)
                }
            a = 0;
            for (c = this.ja.length; a < c; a++) this.ja[a].k.sort(q), this.ja[a].kh = !0
        }
        e && (this.b.gc(), this.b.fu());
        for (a = 0; a < p.length; a++)
            if (h = p[a], h.type.lc)
                for (c = h.fj(), b = 0, f = h.type.Oc.length; b < f; b++) v = h.type.Oc[b], h.type !== v && (v.k.length > c ? h.siblings.push(v.k[c]) : v.vd && (e = this.b.Lf(v.vd, h.u, !0, h.x, h.y, !0), this.b.gc(), v.sn(), h.siblings.push(e), p.push(e)));
        a = 0;
        for (c = this.Hg.length; a < c; a++) this.b.Lf(this.Hg[a], null, !0);
        this.b.Le = null;
        this.b.gc();
        if (this.b.Ta && !this.b.kb)
            for (a = 0, c = this.b.I.length; a < c; a++) v = this.b.I[a], !v.O && v.k.length && v.ak && v.ak(this.b.Ta);
        if (this.b.oj) za(this.b.pl, p);
        else
            for (a = 0, c = p.length; a < c; a++) h = p[a], this.b.trigger(Object.getPrototypeOf(h.type.xa).n.ig, h);
        I(p);
        this.b.oj || this.b.trigger(W.prototype.n.Uq, null);
        this.Eh = !1
    };
    e.prototype.Ox = function() {
        var a, b, c, f, d;
        b = a = 0;
        for (c = this.Hg.length; a < c; a++) f = this.Hg[a], d = this.b.I[f[1]], d.global ?
            d.lc || this.b.Lf(f, null, !0) : (this.Hg[b] = f, b++);
        xa(this.Hg, b)
    };
    e.prototype.oB = function() {
        this.b.oj || this.b.trigger(W.prototype.n.Tq, null);
        this.b.Xo = !0;
        I(this.b.De.Mc);
        var a, b, c, f, e, h;
        if (!this.Eh)
            for (a = 0, b = this.ja.length; a < b; a++)
                for (this.ja[a].sq(), e = this.ja[a].k, c = 0, f = e.length; c < f; c++) h = e[c], h.type.global || this.b.oq(h.type) && this.bB(h);
        a = 0;
        for (b = this.ja.length; a < b; a++) {
            e = this.ja[a].k;
            c = 0;
            for (f = e.length; c < f; c++) h = e[c], h.type.global || this.b.ke(h);
            this.b.gc();
            I(e);
            this.ja[a].kh = !0
        }
        a = 0;
        for (b = this.b.I.length; a <
            b; a++)
            if (e = this.b.I[a], !(e.global || e.xa.Rf || e.xa.Zm || e.O)) {
                c = 0;
                for (f = e.k.length; c < f; c++) this.b.ke(e.k[c]);
                this.b.gc()
            }
        d = !1;
        this.b.Xo = !1
    };
    new ta(0, 0, 0, 0);
    e.prototype.Pc = function(a) {
        var b, c = a,
            f = !1,
            d = !this.b.ad;
        d && (this.b.Ul || (this.b.Ul = document.createElement("canvas"), b = this.b.Ul, b.width = this.b.X, b.height = this.b.W, this.b.Us = b.getContext("2d"), f = !0), b = this.b.Ul, c = this.b.Us, b.width !== this.b.X && (b.width = this.b.X, f = !0), b.height !== this.b.W && (b.height = this.b.W, f = !0), f && this.b.Pm(c, this.b.La));
        c.globalAlpha =
            1;
        c.globalCompositeOperation = "source-over";
        this.b.Or && !this.us() && c.clearRect(0, 0, this.b.X, this.b.W);
        var e, h, f = 0;
        for (e = this.ja.length; f < e; f++) h = this.ja[f], h.visible && 0 < h.opacity && 11 !== h.hc && (h.k.length || !h.ge) ? h.Pc(c) : h.un();
        d && a.drawImage(b, 0, 0, this.b.width, this.b.height)
    };
    e.prototype.qg = function(a) {
        a.ou(!0);
        this.b.yb || (this.b.yb = a.$c(this.b.X, this.b.W, this.b.La));
        if (this.b.yb.mg !== this.b.X || this.b.yb.lg !== this.b.W) a.deleteTexture(this.b.yb), this.b.yb = a.$c(this.b.X, this.b.W, this.b.La);
        a.Fd(this.b.yb);
        this.b.ad || a.nf(this.b.X, this.b.W);
        var b, c;
        for (b = this.ja.length - 1; 0 <= b; --b) c = this.ja[b], c.visible && 1 === c.opacity && c.pf && 0 === c.hc && (c.k.length || !c.ge) ? c.qg(a) : c.un();
        a.ou(!1)
    };
    e.prototype.Yb = function(a) {
        var b = 0 < this.Ca.length || this.b.Ei || !this.b.ad || this.b.Oa;
        if (b) {
            this.b.yb || (this.b.yb = a.$c(this.b.X, this.b.W, this.b.La));
            if (this.b.yb.mg !== this.b.X || this.b.yb.lg !== this.b.W) a.deleteTexture(this.b.yb), this.b.yb = a.$c(this.b.X, this.b.W, this.b.La);
            a.Fd(this.b.yb);
            this.b.ad || a.nf(this.b.X, this.b.W)
        } else this.b.yb &&
            (a.Fd(null), a.deleteTexture(this.b.yb), this.b.yb = null);
        this.b.Or && !this.us() && a.clear(0, 0, 0, 0);
        var c, f, d;
        c = 0;
        for (f = this.ja.length; c < f; c++) d = this.ja[c], d.visible && 0 < d.opacity && (d.k.length || !d.ge) ? d.Yb(a) : d.un();
        b && (0 === this.Ca.length || 1 === this.Ca.length && this.b.ad ? (1 === this.Ca.length ? (b = this.Ca[0].index, a.Kc(this.Ca[0].Cb), a.ri(null, 1 / this.b.X, 1 / this.b.W, 0, 0, 1, 1, this.scale, this.q, 0, 0, this.b.X / 2, this.b.W / 2, this.b.wb.R, this.ab[b]), a.Fm(this.Ca[0].Cb) && (this.b.Y = !0)) : a.Kc(0), this.b.ad || a.nf(this.b.width,
            this.b.height), a.Fd(null), a.nu(!1), a.lf(1), a.xc(this.b.yb), a.lu(), a.Ed(), a.ld(), b = this.b.width / 2, c = this.b.height / 2, a.ni(-b, c, b, c, b, -c, -b, -c), a.xc(null), a.nu(!0)) : this.Qp(a, null, null, null))
    };
    e.prototype.ej = function() {
        return 0 < this.Ca.length || this.b.Ei || !this.b.ad || this.b.Oa ? this.b.yb : null
    };
    e.prototype.os = function() {
        var a = this.ja[0].Dc(),
            b, c, f;
        b = 1;
        for (c = this.ja.length; b < c; b++) f = this.ja[b], (0 !== f.Cd || 0 !== f.Dd) && f.Dc() < a && (a = f.Dc());
        return a
    };
    e.prototype.Xp = function(a) {
        if (!this.Lu) {
            var b = 1 / this.os() *
                this.b.X / 2;
            a > this.width - b && (a = this.width - b);
            a < b && (a = b)
        }
        this.scrollX !== a && (this.scrollX = a, this.b.Y = !0)
    };
    e.prototype.Yp = function(a) {
        if (!this.Lu) {
            var b = 1 / this.os() * this.b.W / 2;
            a > this.height - b && (a = this.height - b);
            a < b && (a = b)
        }
        this.scrollY !== a && (this.scrollY = a, this.b.Y = !0)
    };
    e.prototype.Ex = function() {
        this.Xp(this.scrollX);
        this.Yp(this.scrollY)
    };
    e.prototype.Qp = function(a, b, c, f) {
        var d = c ? c.Ca : b ? b.Ca : this.Ca,
            e = 1,
            h = 0,
            m = 0,
            u = 0,
            p = this.b.X,
            r = this.b.W;
        c ? (e = c.u.Dc(), h = c.u.bb(), m = c.u.ya, u = c.u.za, p = c.u.Ja, r = c.u.Ia) : b &&
            (e = b.Dc(), h = b.bb(), m = b.ya, u = b.za, p = b.Ja, r = b.Ia);
        var w = this.b.xo,
            n, q, G, z, x = 0,
            K = 1,
            R, X, M = this.b.X,
            F = this.b.W,
            D = M / 2,
            C = F / 2,
            y = b ? b.ag : this.ag,
            B = b ? b.Op : this.Op,
            H = 0,
            Q = 0,
            J = 0,
            E = 0,
            P = M,
            ka = M,
            V = F,
            Ba = F,
            na = G = 0;
        z = c ? c.u.bb() : 0;
        if (c) {
            n = 0;
            for (q = d.length; n < q; n++) G += a.wz(d[n].Cb), na += a.xz(d[n].Cb);
            E = c.Ka;
            H = b.Wa(E.left, E.top, !0, !0);
            J = b.Wa(E.left, E.top, !1, !0);
            P = b.Wa(E.right, E.bottom, !0, !0);
            V = b.Wa(E.right, E.bottom, !1, !0);
            0 !== z && (n = b.Wa(E.right, E.top, !0, !0), q = b.Wa(E.right, E.top, !1, !0), Q = b.Wa(E.left, E.bottom, !0, !0), E = b.Wa(E.left,
                E.bottom, !1, !0), z = Math.min(H, P, n, Q), P = Math.max(H, P, n, Q), H = z, z = Math.min(J, V, q, E), V = Math.max(J, V, q, E), J = z);
            H -= G;
            J -= na;
            P += G;
            V += na;
            B.left = H / M;
            B.top = 1 - J / F;
            B.right = P / M;
            B.bottom = 1 - V / F;
            Q = H = A(H);
            E = J = A(J);
            ka = P = ra(P);
            Ba = V = ra(V);
            Q -= G;
            E -= na;
            ka += G;
            Ba += na;
            0 > H && (H = 0);
            0 > J && (J = 0);
            P > M && (P = M);
            V > F && (V = F);
            0 > Q && (Q = 0);
            0 > E && (E = 0);
            ka > M && (ka = M);
            Ba > F && (Ba = F);
            y.left = H / M;
            y.top = 1 - J / F;
            y.right = P / M;
            y.bottom = 1 - V / F
        } else y.left = B.left = 0, y.top = B.top = 0, y.right = B.right = 1, y.bottom = B.bottom = 1;
        na = c && (a.bk(d[0].Cb) || 0 !== G || 0 !== na || 1 !== c.opacity ||
            c.type.xa.xt) || b && !c && 1 !== b.opacity;
        a.lu();
        if (na) {
            w[x] || (w[x] = a.$c(M, F, this.b.La));
            if (w[x].mg !== M || w[x].lg !== F) a.deleteTexture(w[x]), w[x] = a.$c(M, F, this.b.La);
            a.Kc(0);
            a.Fd(w[x]);
            X = Ba - E;
            a.clearRect(Q, F - E - X, ka - Q, X);
            c ? c.Yb(a) : (a.xc(this.b.Ib), a.lf(b.opacity), a.Ed(), a.translate(-D, -C), a.ld(), a.de(H, V, P, V, P, J, H, J, y));
            B.left = B.top = 0;
            B.right = B.bottom = 1;
            c && (z = y.top, y.top = y.bottom, y.bottom = z);
            x = 1;
            K = 0
        }
        a.lf(1);
        G = d.length - 1;
        var Qa = a.Kp(d[G].Cb) || !b && !c && !this.b.ad;
        n = z = 0;
        for (q = d.length; n < q; n++) {
            w[x] || (w[x] = a.$c(M,
                F, this.b.La));
            if (w[x].mg !== M || w[x].lg !== F) a.deleteTexture(w[x]), w[x] = a.$c(M, F, this.b.La);
            a.Kc(d[n].Cb);
            z = d[n].index;
            a.Fm(d[n].Cb) && (this.b.Y = !0);
            0 != n || na ? (a.ri(f, 1 / M, 1 / F, B.left, B.top, B.right, B.bottom, e, h, m, u, (m + p) / 2, (u + r) / 2, this.b.wb.R, c ? c.ab[z] : b ? b.ab[z] : this.ab[z]), a.xc(null), n !== G || Qa ? (a.Fd(w[x]), X = Ba - E, R = F - E - X, a.clearRect(Q, R, ka - Q, X)) : (c ? a.dg(c.nc, c.jc) : b && a.dg(b.nc, b.jc), a.Fd(f)), a.xc(w[K]), a.Ed(), a.translate(-D, -C), a.ld(), a.de(H, V, P, V, P, J, H, J, y), n !== G || Qa || a.xc(null)) : (a.Fd(w[x]), X = Ba - E, R = F -
                E - X, a.clearRect(Q, R, ka - Q, X), c ? (c.Pb && c.Pb.L ? (R = c.Pb.L, K = 1 / R.width, R = 1 / R.height) : (K = 1 / c.width, R = 1 / c.height), a.ri(f, K, R, B.left, B.top, B.right, B.bottom, e, h, m, u, (m + p) / 2, (u + r) / 2, this.b.wb.R, c.ab[z]), c.Yb(a)) : (a.ri(f, 1 / M, 1 / F, 0, 0, 1, 1, e, h, m, u, (m + p) / 2, (u + r) / 2, this.b.wb.R, b ? b.ab[z] : this.ab[z]), a.xc(b ? this.b.Ib : this.b.yb), a.Ed(), a.translate(-D, -C), a.ld(), a.de(H, V, P, V, P, J, H, J, y)), B.left = B.top = 0, B.right = B.bottom = 1, c && !Qa && (z = V, V = J, J = z));
            x = 0 === x ? 1 : 0;
            K = 0 === x ? 1 : 0
        }
        Qa && (a.Kc(0), c ? a.dg(c.nc, c.jc) : b ? a.dg(b.nc, b.jc) : this.b.ad ||
            (a.nf(this.b.width, this.b.height), D = this.b.width / 2, C = this.b.height / 2, J = H = 0, P = this.b.width, V = this.b.height), a.Fd(f), a.xc(w[K]), a.Ed(), a.translate(-D, -C), a.ld(), c && 1 === d.length && !na ? a.de(H, J, P, J, P, V, H, V, y) : a.de(H, V, P, V, P, J, H, J, y), a.xc(null))
    };
    e.prototype.Bl = function(a) {
        var b, c;
        b = 0;
        for (c = this.ja.length; b < c; b++)
            if (this.ja[b].ta === a) return this.ja[b];
        return null
    };
    e.prototype.Ma = function() {
        var a, b, c, f = {
            sx: this.scrollX,
            sy: this.scrollY,
            s: this.scale,
            a: this.q,
            w: this.width,
            h: this.height,
            fv: this.Eh,
            persist: this.Zf,
            fx: [],
            layers: {}
        };
        a = 0;
        for (b = this.da.length; a < b; a++) c = this.da[a], f.fx.push({
            name: c.name,
            active: c.Xa,
            params: this.ab[c.index]
        });
        a = 0;
        for (b = this.ja.length; a < b; a++) c = this.ja[a], f.layers[c.ta.toString()] = c.Ma();
        return f
    };
    e.prototype.Sa = function(a) {
        var b, c, f, d;
        this.scrollX = a.sx;
        this.scrollY = a.sy;
        this.scale = a.s;
        this.q = a.a;
        this.width = a.w;
        this.height = a.h;
        this.Zf = a.persist;
        "undefined" !== typeof a.fv && (this.Eh = a.fv);
        var e = a.fx;
        b = 0;
        for (c = e.length; b < c; b++)
            if (f = this.Co(e[b].name)) f.Xa = e[b].active, this.ab[f.index] =
                e[b].params;
        this.he();
        b = a.layers;
        for (d in b) b.hasOwnProperty(d) && (a = this.Bl(parseInt(d, 10))) && a.Sa(b[d])
    };
    Ib = e;
    n.prototype.he = function() {
        I(this.Ca);
        this.pf = !0;
        var a, b, c;
        a = 0;
        for (b = this.da.length; a < b; a++) c = this.da[a], c.Xa && (this.Ca.push(c), c.$d || (this.pf = !1))
    };
    n.prototype.Co = function(a) {
        var b, c, f;
        b = 0;
        for (c = this.da.length; b < c; b++)
            if (f = this.da[b], f.name === a) return f;
        return null
    };
    n.prototype.Px = function() {
        var a, b, c, f, d, e;
        b = a = 0;
        for (c = this.cd.length; a < c; a++) {
            f = this.cd[a];
            d = this.b.I[f[1]];
            e = this.b.oq(d);
            d = !0;
            if (!e || this.xb.Eh) {
                f = this.b.Lf(f, this, !0);
                if (!f) continue;
                p.push(f);
                f.type.global && (d = !1, this.Ti.push(f.uid))
            }
            d && (this.cd[b] = this.cd[a], b++)
        }
        this.cd.length = b;
        this.b.gc();
        !this.b.F && this.da.length && (this.hc = this.ty);
        this.Ri = kb(this.hc);
        this.b.K && lb(this, this.hc, this.b.K);
        this.ee = !0
    };
    n.prototype.eh = function(a, b) {
        var c = Da(this.k, a);
        0 > c || (b && this.md && a.Ic && a.Ic.right >= a.Ic.left && (a.Ga(), this.fc.update(a, a.Ic, null), a.Ic.set(0, 0, -1, -1)), c === this.k.length - 1 ? this.k.pop() : (wa(this.k, c), this.si(c)), this.ee = !0)
    };
    n.prototype.ph = function(a, b) {
        a.ie = this.k.length;
        this.k.push(a);
        b && this.md && a.Ic && a.D();
        this.ee = !0
    };
    n.prototype.MA = function(a) {
        this.k.unshift(a);
        this.si(0)
    };
    n.prototype.ut = function(a, b, c) {
        var f = a.Ud();
        b = b.Ud();
        wa(this.k, f);
        f < b && b--;
        c && b++;
        b === this.k.length ? this.k.push(a) : this.k.splice(b, 0, a);
        this.si(f < b ? f : b)
    };
    n.prototype.si = function(a) {
        -1 === this.Bf ? this.Bf = a : a < this.Bf && (this.Bf = a);
        this.ee = this.kh = !0
    };
    n.prototype.sq = function() {
        if (this.kh) {
            -1 === this.Bf && (this.Bf = 0);
            var a, b, c;
            if (this.md)
                for (a = this.Bf,
                    b = this.k.length; a < b; ++a) c = this.k[a], c.ie = a, this.fc.rA(c.Ic);
            else
                for (a = this.Bf, b = this.k.length; a < b; ++a) this.k[a].ie = a;
            this.kh = !1;
            this.Bf = -1
        }
    };
    n.prototype.Dc = function(a) {
        return this.sz() * (this.b.ad || a ? this.b.Mi : 1)
    };
    n.prototype.sz = function() {
        return (this.scale * this.xb.scale - 1) * this.je + 1
    };
    n.prototype.bb = function() {
        return this.Pe ? 0 : Ia(this.xb.q + this.q)
    };
    var c = [],
        b = [],
        f = [];
    n.prototype.Ho = function() {
        this.sq();
        this.fc.Hm(this.ya, this.za, this.Ja, this.Ia, f);
        if (!f.length) return h();
        if (1 === f.length) {
            var a = h();
            za(a, f[0]);
            I(f);
            return a
        }
        for (var c = !0; 1 < f.length;) {
            for (var a = f, d = void 0, k = void 0, e = void 0, p = void 0, v = void 0, d = 0, k = a.length; d < k - 1; d += 2) {
                var e = a[d],
                    p = a[d + 1],
                    v = h(),
                    m = e,
                    u = p,
                    n = v,
                    q = 0,
                    w = 0,
                    U = 0,
                    N = m.length,
                    G = u.length,
                    z = void 0,
                    x = void 0;
                for (n.length = N + G; q < N && w < G; ++U) z = m[q], x = u[w], z.ie < x.ie ? (n[U] = z, ++q) : (n[U] = x, ++w);
                for (; q < N; ++q, ++U) n[U] = m[q];
                for (; w < G; ++w, ++U) n[U] = u[w];
                c || (r(e), r(p));
                b.push(v)
            }
            1 === k % 2 && (c ? (e = h(), za(e, a[k - 1]), b.push(e)) : b.push(a[k - 1]));
            za(a, b);
            I(b);
            c = !1
        }
        a = f[0];
        I(f);
        return a
    };
    n.prototype.Pc = function(a) {
        this.Ae =
            this.wl || 1 !== this.opacity || 0 !== this.hc;
        var b = this.b.canvas,
            c = a,
            f = !1;
        this.Ae && (this.b.Tl || (this.b.Tl = document.createElement("canvas"), b = this.b.Tl, b.width = this.b.X, b.height = this.b.W, this.b.Ts = b.getContext("2d"), f = !0), b = this.b.Tl, c = this.b.Ts, b.width !== this.b.X && (b.width = this.b.X, f = !0), b.height !== this.b.W && (b.height = this.b.W, f = !0), f && this.b.Pm(c, this.b.La), this.ge && c.clearRect(0, 0, this.b.X, this.b.W));
        c.globalAlpha = 1;
        c.globalCompositeOperation = "source-over";
        this.ge || (c.fillStyle = "rgb(" + this.Qd[0] + "," +
            this.Qd[1] + "," + this.Qd[2] + ")", c.fillRect(0, 0, this.b.X, this.b.W));
        c.save();
        this.Pe = !0;
        var f = this.Wb(0, 0, !0, !0),
            d = this.Wb(0, 0, !1, !0);
        this.Pe = !1;
        this.b.Gc && (f = Math.round(f), d = Math.round(d));
        this.Km(f, d, c);
        var e = this.Dc();
        c.scale(e, e);
        c.translate(-f, -d);
        this.md ? (this.Xb.left = this.fc.zc(this.ya), this.Xb.top = this.fc.Ac(this.za), this.Xb.right = this.fc.zc(this.Ja), this.Xb.bottom = this.fc.Ac(this.Ia), this.ee || !this.Xb.Wi(this.$h) ? (r(this.$e), f = this.Ho(), this.ee = !1, this.$h.vh(this.Xb)) : f = this.$e) : f = this.k;
        for (var h,
                m = null, d = 0, e = f.length; d < e; ++d) h = f[d], h !== m && (this.my(h, c), m = h);
        this.md && (this.$e = f);
        c.restore();
        this.Ae && (a.globalCompositeOperation = this.Ri, a.globalAlpha = this.opacity, a.drawImage(b, 0, 0))
    };
    n.prototype.my = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.Ga();
            var c = a.Ka;
            c.right < this.ya || c.bottom < this.za || c.left > this.Ja || c.top > this.Ia || (b.globalCompositeOperation = a.Ri, a.Pc(b))
        }
    };
    n.prototype.un = function() {
        this.Pe = !0;
        var a = this.Wb(0, 0, !0, !0),
            b = this.Wb(0, 0, !1, !0);
        this.Pe = !1;
        this.b.Gc && (a = Math.round(a),
            b = Math.round(b));
        this.Km(a, b, null)
    };
    n.prototype.Km = function(a, b, c) {
        var f = this.Dc();
        this.ya = a;
        this.za = b;
        this.Ja = a + 1 / f * this.b.X;
        this.Ia = b + 1 / f * this.b.W;
        this.ya > this.Ja && (a = this.ya, this.ya = this.Ja, this.Ja = a);
        this.za > this.Ia && (a = this.za, this.za = this.Ia, this.Ia = a);
        a = this.bb();
        0 !== a && (c && (c.translate(this.b.X / 2, this.b.W / 2), c.rotate(-a), c.translate(this.b.X / -2, this.b.W / -2)), this.uf.set(this.ya, this.za, this.Ja, this.Ia), this.uf.offset((this.ya + this.Ja) / -2, (this.za + this.Ia) / -2), this.Hu.tu(this.uf, a), this.Hu.Hr(this.uf),
            this.uf.offset((this.ya + this.Ja) / 2, (this.za + this.Ia) / 2), this.ya = this.uf.left, this.za = this.uf.top, this.Ja = this.uf.right, this.Ia = this.uf.bottom)
    };
    n.prototype.qg = function(a) {
        if (this.Ae = this.wl) {
            this.b.Ib || (this.b.Ib = a.$c(this.b.X, this.b.W, this.b.La));
            if (this.b.Ib.mg !== this.b.X || this.b.Ib.lg !== this.b.W) a.deleteTexture(this.b.Ib), this.b.Ib = a.$c(this.b.X, this.b.W, this.b.La);
            a.Fd(this.b.Ib)
        }
        this.Pe = !0;
        var b = this.Wb(0, 0, !0, !0),
            c = this.Wb(0, 0, !1, !0);
        this.Pe = !1;
        this.b.Gc && (b = Math.round(b), c = Math.round(c));
        this.Km(b,
            c, null);
        b = this.Dc();
        a.Ed();
        a.scale(b, b);
        a.Lm(-this.bb());
        a.translate((this.ya + this.Ja) / -2, (this.za + this.Ia) / -2);
        a.ld();
        this.md ? (this.Xb.left = this.fc.zc(this.ya), this.Xb.top = this.fc.Ac(this.za), this.Xb.right = this.fc.zc(this.Ja), this.Xb.bottom = this.fc.Ac(this.Ia), this.ee || !this.Xb.Wi(this.$h) ? (r(this.$e), b = this.Ho(), this.ee = !1, this.$h.vh(this.Xb)) : b = this.$e) : b = this.k;
        for (var f, d = null, c = b.length - 1; 0 <= c; --c) f = b[c], f !== d && (this.oy(b[c], a), d = f);
        this.md && (this.$e = b);
        this.ge || (this.Yn = this.b.tg++, a.Qm(this.Yn),
            a.mu(1, 1, 1), a.cs(), a.UA())
    };
    n.prototype.Yb = function(a) {
        var b = 0,
            c = 0;
        if (this.Ae = this.wl || 1 !== this.opacity || 0 < this.Ca.length || 0 !== this.hc) {
            this.b.Ib || (this.b.Ib = a.$c(this.b.X, this.b.W, this.b.La));
            if (this.b.Ib.mg !== this.b.X || this.b.Ib.lg !== this.b.W) a.deleteTexture(this.b.Ib), this.b.Ib = a.$c(this.b.X, this.b.W, this.b.La);
            a.Fd(this.b.Ib);
            this.ge && a.clear(0, 0, 0, 0)
        }
        this.ge || (this.b.Oa ? (a.Qm(this.Yn), a.mu(this.Qd[0] / 255, this.Qd[1] / 255, this.Qd[2] / 255), a.cs(), a.iB()) : a.clear(this.Qd[0] / 255, this.Qd[1] / 255, this.Qd[2] /
            255, 1));
        this.Pe = !0;
        var f = this.Wb(0, 0, !0, !0),
            b = this.Wb(0, 0, !1, !0);
        this.Pe = !1;
        this.b.Gc && (f = Math.round(f), b = Math.round(b));
        this.Km(f, b, null);
        f = this.Dc();
        a.Ed();
        a.scale(f, f);
        a.Lm(-this.bb());
        a.translate((this.ya + this.Ja) / -2, (this.za + this.Ia) / -2);
        a.ld();
        this.md ? (this.Xb.left = this.fc.zc(this.ya), this.Xb.top = this.fc.Ac(this.za), this.Xb.right = this.fc.zc(this.Ja), this.Xb.bottom = this.fc.Ac(this.Ia), this.ee || !this.Xb.Wi(this.$h) ? (r(this.$e), b = this.Ho(), this.ee = !1, this.$h.vh(this.Xb)) : b = this.$e) : b = this.k;
        var d,
            e, h = null,
            c = 0;
        for (d = b.length; c < d; ++c) e = b[c], e !== h && (this.ny(b[c], a), h = e);
        this.md && (this.$e = b);
        this.Ae && (b = this.Ca.length ? this.Ca[0].Cb : 0, c = this.Ca.length ? this.Ca[0].index : 0, 0 === this.Ca.length || 1 === this.Ca.length && !a.Kp(b) && 1 === this.opacity ? (1 === this.Ca.length ? (a.Kc(b), a.ri(this.xb.ej(), 1 / this.b.X, 1 / this.b.W, 0, 0, 1, 1, f, this.bb(), this.ya, this.za, (this.ya + this.Ja) / 2, (this.za + this.Ia) / 2, this.b.wb.R, this.ab[c]), a.Fm(b) && (this.b.Y = !0)) : a.Kc(0), a.Fd(this.xb.ej()), a.lf(this.opacity), a.xc(this.b.Ib), a.dg(this.nc,
            this.jc), a.Ed(), a.ld(), f = this.b.X / 2, b = this.b.W / 2, a.ni(-f, b, f, b, f, -b, -f, -b), a.xc(null)) : this.xb.Qp(a, this, null, this.xb.ej()))
    };
    n.prototype.ny = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.Ga();
            var c = a.Ka;
            c.right < this.ya || c.bottom < this.za || c.left > this.Ja || c.top > this.Ia || (b.Qm(a.tg), a.Su ? this.qy(a, b) : (b.Kc(0), b.dg(a.nc, a.jc), a.Yb(b)))
        }
    };
    n.prototype.oy = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.Ga();
            var c = a.Ka;
            c.right < this.ya || c.bottom < this.za || c.left > this.Ja || c.top > this.Ia ||
                (a.tg = this.b.tg++, 0 === a.hc && 1 === a.opacity && a.pf && a.qg && (b.Qm(a.tg), a.qg(b)))
        }
    };
    n.prototype.qy = function(a, b) {
        var c = a.Ca[0].Cb,
            f = a.Ca[0].index,
            d = this.Dc();
        if (1 !== a.Ca.length || b.Kp(c) || b.OA(c) || (a.q || a.u.bb()) && b.bk(c) || 1 !== a.opacity || a.type.xa.xt) this.xb.Qp(b, this, a, this.Ae ? this.b.Ib : this.xb.ej()), b.Ed(), b.scale(d, d), b.Lm(-this.bb()), b.translate((this.ya + this.Ja) / -2, (this.za + this.Ia) / -2), b.ld();
        else {
            b.Kc(c);
            b.dg(a.nc, a.jc);
            b.Fm(c) && (this.b.Y = !0);
            var e = 0,
                h = 0,
                m = 0,
                u = 0;
            b.bk(c) && (u = a.Ka, e = this.Wa(u.left,
                u.top, !0, !0), h = this.Wa(u.left, u.top, !1, !0), m = this.Wa(u.right, u.bottom, !0, !0), u = this.Wa(u.right, u.bottom, !1, !0), e = e / windowWidth, h = 1 - h / windowHeight, m = m / windowWidth, u = 1 - u / windowHeight);
            var p;
            a.Pb && a.Pb.L ? (p = a.Pb.L, c = 1 / p.width, p = 1 / p.height) : (c = 1 / a.width, p = 1 / a.height);
            b.ri(this.Ae ? this.b.Ib : this.xb.ej(), c, p, e, h, m, u, d, this.bb(), this.ya, this.za, (this.ya + this.Ja) / 2, (this.za + this.Ia) / 2, this.b.wb.R, a.ab[f]);
            a.Yb(b)
        }
    };
    n.prototype.Wb = function(a, b, c, f) {
        var d = this.b.devicePixelRatio;
        this.b.Jg && (a *= d, b *= d);
        var d =
            this.b.St,
            e = this.b.Tt,
            d = (this.xb.scrollX - d) * this.Cd + d,
            e = (this.xb.scrollY - e) * this.Dd + e,
            h = d,
            m = e,
            u = 1 / this.Dc(!f);
        f ? (h -= this.b.X * u / 2, m -= this.b.W * u / 2) : (h -= this.b.width * u / 2, m -= this.b.height * u / 2);
        h += a * u;
        m += b * u;
        b = this.bb();
        0 !== b && (h -= d, m -= e, a = Math.cos(b), b = Math.sin(b), f = h * a - m * b, m = m * a + h * b, h = f + d, m += e);
        return c ? h : m
    };
    n.prototype.Wa = function(a, b, c, f) {
        var d = this.b.St,
            e = this.b.Tt,
            h = (this.xb.scrollX - d) * this.Cd + d,
            m = (this.xb.scrollY - e) * this.Dd + e,
            e = h,
            d = m,
            u = this.bb();
        if (0 !== u) {
            a -= h;
            b -= m;
            var p = Math.cos(-u),
                u = Math.sin(-u),
                r = a * p - b * u;
            b = b * p + a * u;
            a = r + h;
            b += m
        }
        h = 1 / this.Dc(!f);
        f ? (e -= this.b.X * h / 2, d -= this.b.W * h / 2) : (e -= this.b.width * h / 2, d -= this.b.height * h / 2);
        e = (a - e) / h;
        d = (b - d) / h;
        a = this.b.devicePixelRatio;
        this.b.Jg && !f && (e /= a, d /= a);
        return c ? e : d
    };
    n.prototype.Ma = function() {
        var a, b, c, f = {
            s: this.scale,
            a: this.q,
            vl: this.ya,
            vt: this.za,
            vr: this.Ja,
            vb: this.Ia,
            v: this.visible,
            bc: this.Qd,
            t: this.ge,
            px: this.Cd,
            py: this.Dd,
            o: this.opacity,
            zr: this.je,
            fx: [],
            cg: this.Ti,
            instances: []
        };
        a = 0;
        for (b = this.da.length; a < b; a++) c = this.da[a], f.fx.push({
            name: c.name,
            active: c.Xa,
            params: this.ab[c.index]
        });
        return f
    };
    n.prototype.Sa = function(a) {
        var b, c, f;
        this.scale = a.s;
        this.q = a.a;
        this.ya = a.vl;
        this.za = a.vt;
        this.Ja = a.vr;
        this.Ia = a.vb;
        this.visible = a.v;
        this.Qd = a.bc;
        this.ge = a.t;
        this.Cd = a.px;
        this.Dd = a.py;
        this.opacity = a.o;
        this.je = a.zr;
        this.Ti = a.cg || [];
        za(this.cd, this.Cu);
        var d = new ca;
        b = 0;
        for (f = this.Ti.length; b < f; ++b) d.add(this.Ti[b]);
        c = b = 0;
        for (f = this.cd.length; b < f; ++b) d.contains(this.cd[b][2]) || (this.cd[c] = this.cd[b], ++c);
        xa(this.cd, c);
        c = a.fx;
        b = 0;
        for (f = c.length; b < f; b++)
            if (a =
                this.Co(c[b].name)) a.Xa = c[b].active, this.ab[a.index] = c[b].params;
        this.he();
        this.k.sort(q);
        this.kh = !0
    };
    Xb = n
})();
(function() {
    function e(a, b) {
        var c, f = a.length;
        switch (f) {
            case 0:
                return !0;
            case 1:
                return a[0] === b[0];
            case 2:
                return a[0] === b[0] && a[1] === b[1];
            default:
                for (c = 0; c < f; c++)
                    if (a[c] !== b[c]) return !1;
                return !0
        }
    }

    function q(a, b) {
        return a.index - b.index
    }

    function n(a) {
        var b, c, f, d;
        2 === a.length ? a[0].index > a[1].index && (b = a[0], a[0] = a[1], a[1] = b) : 2 < a.length && a.sort(q);
        a.length >= t.length && (t.length = a.length + 1);
        t[a.length] || (t[a.length] = []);
        d = t[a.length];
        b = 0;
        for (c = d.length; b < c; b++)
            if (f = d[b], e(a, f)) return f;
        d.push(a);
        return a
    }

    function h(a, b) {
        this.b = a;
        this.Ju = {};
        this.Yr = {};
        this.No = !1;
        this.xs = new ca;
        this.fo = [];
        this.Pn = [];
        this.name = b[0];
        var c = b[1];
        this.Nf = [];
        var f, d;
        f = 0;
        for (d = c.length; f < d; f++) this.zs(c[f], null, this.Nf)
    }

    function r(a) {
        this.type = a;
        this.k = [];
        this.ea = [];
        this.fa = !0
    }

    function p(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.ra = [];
        this.eg = [];
        this.vs = this.nn = this.jq = this.Hl = this.group = this.bq = !1;
        this.Eb = [];
        this.nd = [];
        this.Hd = [];
        this.gj = "";
        this.Cg = this.Hl = this.group = !1;
        this.al = null;
        c[1] && (this.gj = c[1][1].toLowerCase(),
            this.group = !0, this.Hl = !!c[1][0], this.al = [], this.Cg = this.Hl, this.b.Gf.push(this), this.b.Jh[this.gj] = this);
        this.hd = c[2];
        this.ta = c[4];
        this.group || (this.b.Gr[this.ta.toString()] = this);
        var f = c[5];
        a = 0;
        for (b = f.length; a < b; a++) {
            var d = new Yb(this, f[a]);
            d.index = a;
            this.Eb.push(d);
            this.Br(d.type)
        }
        f = c[6];
        a = 0;
        for (b = f.length; a < b; a++) d = new Zb(this, f[a]), d.index = a, this.nd.push(d);
        if (8 === c.length)
            for (c = c[7], a = 0, b = c.length; a < b; a++) this.sheet.zs(c[a], this, this.Hd);
        this.Ol = !1;
        this.Eb.length && (this.Ol = null == this.Eb[0].type &&
            this.Eb[0].Zb == W.prototype.n.Fq)
    }

    function d(a, b) {
        var c, f, d;
        if (a && (-1 === b.indexOf(a) && b.push(a), a.lc))
            for (c = 0, f = a.Oc.length; c < f; c++) d = a.Oc[c], a !== d && -1 === b.indexOf(d) && b.push(d)
    }

    function c(a, b) {
        this.Zc = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.ka = [];
        this.cb = [];
        this.N = {};
        this.index = -1;
        this.Ki = !1;
        this.Zb = this.b.Cf(b[1]);
        this.trigger = 0 < b[3];
        this.Xr = 2 === b[3];
        this.ue = b[4];
        this.Il = b[5];
        this.jA = b[6];
        this.ta = b[7];
        this.b.Kf[this.ta.toString()] = this; - 1 === b[0] ? (this.type = null, this.Bb = this.Up, this.kg = null, this.Rd = -1) : (this.type = this.b.I[b[0]], this.Bb = this.jA ? this.$A : this.Tp, b[2] ? (this.kg = this.type.zl(b[2]), this.Rd = this.type.zo(b[2])) : (this.kg = null, this.Rd = -1), this.Zc.parent && this.Zc.parent.Tm());
        this.Xr && (this.Bb = this.aB);
        if (10 === b.length) {
            var c, f, d = b[9];
            c = 0;
            for (f = d.length; c < f; c++) {
                var g = new $b(this, d[c]);
                this.ka.push(g)
            }
            this.cb.length = d.length
        }
    }

    function b(a, b) {
        this.Zc = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.ka = [];
        this.cb = [];
        this.N = {};
        this.index = -1;
        this.Ki = !1;
        this.Zb = this.b.Cf(b[1]); - 1 === b[0] ? (this.type = null,
            this.Bb = this.Up, this.kg = null, this.Rd = -1) : (this.type = this.b.I[b[0]], this.Bb = this.Tp, b[2] ? (this.kg = this.type.zl(b[2]), this.Rd = this.type.zo(b[2])) : (this.kg = null, this.Rd = -1));
        this.ta = b[3];
        this.b.Ef[this.ta.toString()] = this;
        if (6 === b.length) {
            var c, f, d = b[5];
            c = 0;
            for (f = d.length; c < f; c++) {
                var g = new $b(this, d[c]);
                this.ka.push(g)
            }
            this.cb.length = d.length
        }
    }

    function f() {
        v++;
        T.length === v && T.push(new ac);
        return T[v]
    }

    function a(a, b) {
        this.Pa = a;
        this.Zc = a.Zc;
        this.sheet = a.sheet;
        this.b = a.b;
        this.type = b[0];
        this.oe = null;
        this.qf =
            0;
        this.get = null;
        this.Pr = 0;
        this.xb = null;
        this.key = 0;
        this.object = null;
        this.index = 0;
        this.Ak = this.gh = this.Ak = this.gh = this.as = this.vg = this.Bk = null;
        this.Ld = !1;
        var c, f, d;
        switch (b[0]) {
            case 0:
            case 7:
                this.oe = new bc(this, b[1]);
                this.qf = 0;
                this.get = this.Dz;
                break;
            case 1:
                this.oe = new bc(this, b[1]);
                this.qf = 0;
                this.get = this.Ez;
                break;
            case 5:
                this.oe = new bc(this, b[1]);
                this.qf = 0;
                this.get = this.Iz;
                break;
            case 3:
            case 8:
                this.Pr = b[1];
                this.get = this.Bz;
                break;
            case 6:
                this.xb = this.b.ai[b[1]];
                this.get = this.Jz;
                break;
            case 9:
                this.key = b[1];
                this.get = this.Hz;
                break;
            case 4:
                this.object = this.b.I[b[1]];
                this.get = this.Kz;
                this.Zc.Br(this.object);
                this.Pa instanceof Zb ? this.Zc.Tm() : this.Zc.parent && this.Zc.parent.Tm();
                break;
            case 10:
                this.index = b[1];
                a.type && a.type.O ? (this.get = this.Fz, this.Ld = !0) : this.get = this.Gz;
                break;
            case 11:
                this.Bk = b[1];
                this.vg = null;
                this.get = this.Cz;
                break;
            case 2:
            case 12:
                this.as = b[1];
                this.get = this.Az;
                break;
            case 13:
                for (this.get = this.Lz, this.gh = [], this.Ak = [], c = 1, f = b.length; c < f; c++) d = new $b(this.Pa, b[c]), this.gh.push(d), this.Ak.push(0)
        }
    }

    function g(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.ra = [];
        this.name = c[1];
        this.Ck = c[2];
        this.Ro = c[3];
        this.vj = !!c[4];
        this.Nl = !!c[5];
        this.ta = c[6];
        this.b.Gi[this.ta.toString()] = this;
        this.data = this.Ro;
        this.parent ? (this.Xg = this.vj || this.Nl ? -1 : this.b.mB++, this.b.zx.push(this)) : (this.Xg = -1, this.b.yx.push(this))
    }

    function l(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.ra = [];
        this.jj = null;
        this.Sz = c[1];
        this.Xa = !0
    }

    function k() {
        this.Eu = [];
        this.reset(null)
    }
    var t = [];
    h.prototype.toString = function() {
        return this.name
    };
    h.prototype.zs = function(a, b, c) {
        switch (a[0]) {
            case 0:
                a = new cc(this, b, a);
                if (a.hd)
                    for (c.push(a), c = 0, b = a.Eb.length; c < b; c++) a.Eb[c].trigger && this.As(a, c);
                else a.Ms() ? this.As(a, 0) : c.push(a);
                break;
            case 1:
                a = new Ub(this, b, a);
                c.push(a);
                break;
            case 2:
                a = new dc(this, b, a), c.push(a)
        }
    };
    h.prototype.mb = function() {
        var a, b;
        a = 0;
        for (b = this.Nf.length; a < b; a++) this.Nf[a].mb(a < b - 1 && this.Nf[a + 1].Ol)
    };
    h.prototype.pq = function() {
        I(this.fo);
        I(this.Pn);
        this.Ar(this);
        I(this.Pn)
    };
    h.prototype.Ar = function(a) {
        var b, c, f, d, g = a.fo,
            e = a.Pn,
            k = this.xs.xf();
        b = 0;
        for (c = k.length; b < c; ++b) f = k[b], d = f.jj, !f.Xa || a === d || -1 < e.indexOf(d) || (e.push(d), d.Ar(a), g.push(d))
    };
    h.prototype.Bb = function(a) {
        this.b.CC || (this.No = !0, a || (this.b.$o = !0));
        var b, c;
        b = 0;
        for (c = this.Nf.length; b < c; b++) {
            var f = this.Nf[b];
            f.Bb();
            this.b.Xn(f.ra);
            this.b.Pf && this.b.gc()
        }
        a || (this.b.$o = !1)
    };
    h.prototype.As = function(a, b) {
        a.hd || this.b.rn.push(a);
        var c, f, d = a.Eb[b],
            g;
        d.type ? g = d.type.name : g = "system";
        var e = (c = d.Xr) ? this.Yr : this.Ju;
        e[g] || (e[g] = []);
        g = e[g];
        e = d.Zb;
        if (c) {
            if (d.ka.length && (d =
                    d.ka[0], 1 === d.type && 2 === d.oe.type)) {
                d = d.oe.value.toLowerCase();
                c = 0;
                for (f = g.length; c < f; c++)
                    if (g[c].method == e) {
                        c = g[c].Xi;
                        c[d] ? c[d].push([a, b]) : c[d] = [
                            [a, b]
                        ];
                        return
                    }
                c = {};
                c[d] = [
                    [a, b]
                ];
                g.push({
                    method: e,
                    Xi: c
                })
            }
        } else {
            c = 0;
            for (f = g.length; c < f; c++)
                if (g[c].method == e) {
                    g[c].Xi.push([a, b]);
                    return
                }
            Y && e === Y.prototype.n.oh ? g.unshift({
                method: e,
                Xi: [
                    [a, b]
                ]
            }) : g.push({
                method: e,
                Xi: [
                    [a, b]
                ]
            })
        }
    };
    Jb = h;
    r.prototype.Mo = function() {
        return this.fa ? this.type.k.length : this.k.length
    };
    r.prototype.qc = function() {
        return this.fa ? this.type.k :
            this.k
    };
    r.prototype.Zj = function(a) {
        a && (a.b.Va().Za.hd ? (this.fa && (I(this.k), za(this.ea, a.type.k), this.fa = !1), a = this.ea.indexOf(a), -1 !== a && (this.k.push(this.ea[a]), this.ea.splice(a, 1))) : (this.fa = !1, I(this.k), this.k[0] = a))
    };
    rb = r;
    window._c2hh_ = "ABA8E71A342C1633F34665792B7FB3EEE6F8AB87";
    p.prototype.mb = function(a) {
        var b, c = this.parent;
        if (this.group)
            for (this.nn = !0; c;) {
                if (!c.group) {
                    this.nn = !1;
                    break
                }
                c = c.parent
            }
        this.jq = !this.Ms() && (!this.parent || this.parent.group && this.parent.nn);
        this.vs = !!a;
        this.eg = this.ra.slice(0);
        for (c = this.parent; c;) {
            a = 0;
            for (b = c.ra.length; a < b; a++) this.vx(c.ra[a]);
            c = c.parent
        }
        this.ra = n(this.ra);
        this.eg = n(this.eg);
        a = 0;
        for (b = this.Eb.length; a < b; a++) this.Eb[a].mb();
        a = 0;
        for (b = this.nd.length; a < b; a++) this.nd[a].mb();
        a = 0;
        for (b = this.Hd.length; a < b; a++) this.Hd[a].mb(a < b - 1 && this.Hd[a + 1].Ol)
    };
    p.prototype.jk = function(a) {
        if (this.Cg !== !!a) {
            this.Cg = !!a;
            var b;
            a = 0;
            for (b = this.al.length; a < b; ++a) this.al[a].Nu();
            0 < b && this.b.Ba.ug && this.b.Ba.ug.pq()
        }
    };
    p.prototype.Br = function(a) {
        d(a, this.ra)
    };
    p.prototype.vx = function(a) {
        d(a,
            this.eg)
    };
    p.prototype.Tm = function() {
        this.bq = !0;
        this.parent && this.parent.Tm()
    };
    p.prototype.Ms = function() {
        return this.Eb.length ? this.Eb[0].trigger : !1
    };
    p.prototype.Bb = function() {
        var a, b, c = !1,
            f = this.b,
            d = this.b.Va();
        d.Za = this;
        var g = this.Eb;
        this.Ol || (d.lo = !1);
        if (this.hd) {
            0 === g.length && (c = !0);
            d.qb = 0;
            for (a = g.length; d.qb < a; d.qb++) b = g[d.qb], b.trigger || (b = b.Bb()) && (c = !0);
            (d.Pg = c) && this.Mm()
        } else {
            d.qb = 0;
            for (a = g.length; d.qb < a; d.qb++)
                if (b = g[d.qb].Bb(), !b) {
                    d.Pg = !1;
                    this.jq && f.Pf && f.gc();
                    return
                }
            d.Pg = !0;
            this.Mm()
        }
        this.vy(d)
    };
    p.prototype.vy = function(a) {
        a.Pg && this.vs && (a.lo = !0);
        this.jq && this.b.Pf && this.b.gc()
    };
    p.prototype.YA = function(a) {
        this.b.Va().Za = this;
        this.Eb[a].Bb() && (this.Mm(), this.b.Va().Pg = !0)
    };
    p.prototype.Mm = function() {
        var a = this.b.Va(),
            b;
        a.Bc = 0;
        for (b = this.nd.length; a.Bc < b; a.Bc++)
            if (this.nd[a.Bc].Bb()) return;
        this.ku()
    };
    p.prototype.WA = function() {
        var a = this.b.Va(),
            b;
        for (b = this.nd.length; a.Bc < b; a.Bc++)
            if (this.nd[a.Bc].Bb()) return;
        this.ku()
    };
    p.prototype.ku = function() {
        if (this.Hd.length) {
            var a, b, c, f, d = this.Hd.length -
                1;
            this.b.Gm(this);
            if (this.bq)
                for (a = 0, b = this.Hd.length; a < b; a++) c = this.Hd[a], (f = !this.nn || !this.group && a < d) && this.b.$f(c.ra), c.Bb(), f ? this.b.Zd(c.ra) : this.b.Xn(c.ra);
            else
                for (a = 0, b = this.Hd.length; a < b; a++) this.Hd[a].Bb();
            this.b.Cm()
        }
    };
    p.prototype.ZA = function() {
        var a = this.b.Va();
        a.Za = this;
        var b = !1,
            c;
        a.qb = 0;
        for (c = this.Eb.length; a.qb < c; a.qb++)
            if (this.Eb[a.qb].Bb()) b = !0;
            else if (!this.hd) return !1;
        return this.hd ? b : !0
    };
    p.prototype.bg = function() {
        this.b.wg++;
        var a = this.b.Va().qb,
            b = this.b.Gm(this);
        if (!this.hd)
            for (b.qb =
                a + 1, a = this.Eb.length; b.qb < a; b.qb++)
                if (!this.Eb[b.qb].Bb()) {
                    this.b.Cm();
                    return
                }
        this.Mm();
        this.b.Cm()
    };
    p.prototype.bA = function(a) {
        var b = a.index;
        if (0 === b) return !0;
        for (--b; 0 <= b; --b)
            if (this.Eb[b].type === a.type) return !1;
        return !0
    };
    cc = p;
    c.prototype.mb = function() {
        var a, b, c;
        a = 0;
        for (b = this.ka.length; a < b; a++) c = this.ka[a], c.mb(), c.Ld && (this.Ki = !0)
    };
    c.prototype.aB = function() {
        return !0
    };
    c.prototype.Up = function() {
        var a, b;
        a = 0;
        for (b = this.ka.length; a < b; a++) this.cb[a] = this.ka[a].get();
        return Ta(this.Zb.apply(this.b.De,
            this.cb), this.Il)
    };
    c.prototype.$A = function() {
        var a, b;
        a = 0;
        for (b = this.ka.length; a < b; a++) this.cb[a] = this.ka[a].get();
        a = this.Zb.apply(this.kg ? this.kg : this.type, this.cb);
        this.type.Yc();
        return a
    };
    c.prototype.Tp = function() {
        var a, b, c, f, d, g, e, k, l = this.type,
            h = l.aa(),
            p = this.Zc.hd && !this.trigger;
        b = 0;
        var t = l.lc,
            v = l.O,
            r = l.Se,
            n = this.Rd,
            q = -1 < n,
            T = this.Ki,
            y = this.ka,
            B = this.cb,
            H = this.Il,
            Q = this.Zb,
            J;
        if (T)
            for (b = 0, d = y.length; b < d; ++b) g = y[b], g.Ld || (B[b] = g.get(0));
        else
            for (b = 0, d = y.length; b < d; ++b) B[b] = y[b].get(0);
        if (h.fa) {
            I(h.k);
            I(h.ea);
            J = l.k;
            a = 0;
            for (f = J.length; a < f; ++a) {
                k = J[a];
                if (T)
                    for (b = 0, d = y.length; b < d; ++b) g = y[b], g.Ld && (B[b] = g.get(a));
                q ? (b = 0, v && (b = k.type.Dh[r]), b = Q.apply(k.Z[n + b], B)) : b = Q.apply(k, B);
                (e = Ta(b, H)) ? h.k.push(k): p && h.ea.push(k)
            }
            l.finish && l.finish(!0);
            h.fa = !1;
            l.Yc();
            return h.Mo()
        }
        c = 0;
        J = (e = p && !this.Zc.bA(this)) ? h.ea : h.k;
        var E = !1;
        a = 0;
        for (f = J.length; a < f; ++a) {
            k = J[a];
            if (T)
                for (b = 0, d = y.length; b < d; ++b) g = y[b], g.Ld && (B[b] = g.get(a));
            q ? (b = 0, v && (b = k.type.Dh[r]), b = Q.apply(k.Z[n + b], B)) : b = Q.apply(k, B);
            if (Ta(b, H))
                if (E = !0, e) {
                    if (h.k.push(k),
                        t)
                        for (b = 0, d = k.siblings.length; b < d; b++) g = k.siblings[b], g.type.aa().k.push(g)
                } else {
                    J[c] = k;
                    if (t)
                        for (b = 0, d = k.siblings.length; b < d; b++) g = k.siblings[b], g.type.aa().k[c] = g;
                    c++
                }
            else if (e) {
                J[c] = k;
                if (t)
                    for (b = 0, d = k.siblings.length; b < d; b++) g = k.siblings[b], g.type.aa().ea[c] = g;
                c++
            } else if (p && (h.ea.push(k), t))
                for (b = 0, d = k.siblings.length; b < d; b++) g = k.siblings[b], g.type.aa().ea.push(g)
        }
        xa(J, c);
        if (t)
            for (v = l.Oc, a = 0, f = v.length; a < f; a++) k = v[a].aa(), e ? xa(k.ea, c) : xa(k.k, c);
        c = E;
        if (e && !E)
            for (a = 0, f = h.k.length; a < f; a++) {
                k = h.k[a];
                if (T)
                    for (b = 0, d = y.length; b < d; b++) g = y[b], g.Ld && (B[b] = g.get(a));
                b = q ? Q.apply(k.Z[n], B) : Q.apply(k, B);
                if (Ta(b, H)) {
                    E = !0;
                    break
                }
            }
        l.finish && l.finish(c || p);
        return p ? E : h.Mo()
    };
    Yb = c;
    b.prototype.mb = function() {
        var a, b, c;
        a = 0;
        for (b = this.ka.length; a < b; a++) c = this.ka[a], c.mb(), c.Ld && (this.Ki = !0)
    };
    b.prototype.Up = function() {
        var a = this.b,
            b, c, f = this.ka,
            d = this.cb;
        b = 0;
        for (c = f.length; b < c; ++b) d[b] = f[b].get();
        return this.Zb.apply(a.De, d)
    };
    b.prototype.Tp = function() {
        var a = this.type,
            b = this.Rd,
            c = a.Se,
            f = this.Ki,
            d = this.ka,
            g = this.cb,
            e = this.Zb,
            k = a.aa().qc(),
            a = a.O,
            l = -1 < b,
            h, p, t, v, r, n;
        if (f)
            for (p = 0, v = d.length; p < v; ++p) r = d[p], r.Ld || (g[p] = r.get(0));
        else
            for (p = 0, v = d.length; p < v; ++p) g[p] = d[p].get(0);
        h = 0;
        for (t = k.length; h < t; ++h) {
            n = k[h];
            if (f)
                for (p = 0, v = d.length; p < v; ++p) r = d[p], r.Ld && (g[p] = r.get(h));
            l ? (p = 0, a && (p = n.type.Dh[c]), e.apply(n.Z[b + p], g)) : e.apply(n, g)
        }
        return !1
    };
    Zb = b;
    var T = [],
        v = -1;
    a.prototype.mb = function() {
        var a, b;
        if (11 === this.type) this.vg = this.b.ks(this.Bk, this.Zc.parent);
        else if (13 === this.type)
            for (a = 0, b = this.gh.length; a < b; a++) this.gh[a].mb();
        this.oe && this.oe.mb()
    };
    a.prototype.tA = function(a) {
        this.Ld || !a || a.xa.Zm || (this.Ld = !0)
    };
    a.prototype.ru = function() {
        this.Ld = !0
    };
    a.prototype.Dz = function(a) {
        this.qf = a || 0;
        a = f();
        this.oe.get(a);
        v--;
        return a.data
    };
    a.prototype.Ez = function(a) {
        this.qf = a || 0;
        a = f();
        this.oe.get(a);
        v--;
        return ia(a.data) ? a.data : ""
    };
    a.prototype.Kz = function() {
        return this.object
    };
    a.prototype.Bz = function() {
        return this.Pr
    };
    a.prototype.Iz = function(a) {
        this.qf = a || 0;
        a = f();
        this.oe.get(a);
        v--;
        return a.Rb() ? this.b.Hh(a.data) : this.b.Al(a.data)
    };
    a.prototype.Jz = function() {
        return this.xb
    };
    a.prototype.Hz = function() {
        return this.key
    };
    a.prototype.Gz = function() {
        return this.index
    };
    a.prototype.Fz = function(a) {
        a = a || 0;
        var b = this.Pa.type,
            c = null,
            c = b.aa(),
            f = c.qc();
        if (f.length) c = f[a % f.length].type;
        else if (c.ea.length) c = c.ea[a % c.ea.length].type;
        else if (b.k.length) c = b.k[a % b.k.length].type;
        else return 0;
        return this.index + c.nl[b.Se]
    };
    a.prototype.Cz = function() {
        return this.vg
    };
    a.prototype.Az = function() {
        return this.as
    };
    a.prototype.Lz = function() {
        var a, b;
        a = 0;
        for (b =
            this.gh.length; a < b; a++) this.Ak[a] = this.gh[a].get();
        return this.Ak
    };
    $b = a;
    g.prototype.mb = function() {
        this.ra = n(this.ra)
    };
    g.prototype.of = function(a) {
        var b = this.b.gs();
        this.parent && !this.vj && b ? (this.Xg >= b.length && (b.length = this.Xg + 1), b[this.Xg] = a) : this.data = a
    };
    g.prototype.Bg = function() {
        var a = this.b.gs();
        return !this.parent || this.vj || !a || this.Nl ? this.data : this.Xg >= a.length || "undefined" === typeof a[this.Xg] ? this.Ro : a[this.Xg]
    };
    g.prototype.Bb = function() {
        !this.parent || this.vj || this.Nl || this.of(this.Ro)
    };
    Ub =
        g;
    l.prototype.toString = function() {
        return "include:" + this.jj.toString()
    };
    l.prototype.mb = function() {
        this.jj = this.b.po[this.Sz];
        this.sheet.xs.add(this);
        this.ra = n(this.ra);
        for (var a = this.parent; a;) a.group && a.al.push(this), a = a.parent;
        this.Nu()
    };
    l.prototype.Bb = function() {
        this.parent && this.b.dk(this.b.I);
        this.jj.No || this.jj.Bb(!0);
        this.parent && this.b.Zd(this.b.I)
    };
    l.prototype.Nu = function() {
        for (var a = this.parent; a;) {
            if (a.group && !a.Cg) {
                this.Xa = !1;
                return
            }
            a = a.parent
        }
        this.Xa = !0
    };
    dc = l;
    k.prototype.reset = function(a) {
        this.Za =
            a;
        this.Bc = this.qb = 0;
        I(this.Eu);
        this.lo = this.Pg = !1
    };
    k.prototype.Gs = function() {
        return this.Za.bq ? !0 : this.qb < this.Za.Eb.length - 1 ? !!this.Za.ra.length : !1
    };
    Tb = k
})();
(function() {
    function e(d, c) {
        this.Pa = d;
        this.b = d.b;
        this.type = c[0];
        this.get = [this.Ny, this.Jy, this.Wy, this.Zy, this.yy, this.Xy, this.Ry, this.Gy, this.Qy, this.Vy, this.zy, this.Uy, this.Hy, this.Sy, this.Oy, this.Py, this.Ky, this.Ly, this.Fy, this.Yy, this.Ty, this.My, this.Ey, this.Iy][this.type];
        var b = null;
        this.cf = this.ka = this.cb = this.Zb = this.mn = this.second = this.first = this.value = null;
        this.Rd = -1;
        this.Vd = null;
        this.Tu = -1;
        this.vg = this.Bk = null;
        this.oi = !1;
        switch (this.type) {
            case 0:
            case 1:
            case 2:
                this.value = c[1];
                break;
            case 3:
                this.first =
                    new bc(d, c[1]);
                break;
            case 18:
                this.first = new bc(d, c[1]);
                this.second = new bc(d, c[2]);
                this.mn = new bc(d, c[3]);
                break;
            case 19:
                this.Zb = this.b.Cf(c[1]);
                this.Zb !== W.prototype.P.random && this.Zb !== W.prototype.P.Nr || this.Pa.ru();
                this.cb = [];
                this.ka = [];
                3 === c.length ? (b = c[2], this.cb.length = b.length + 1) : this.cb.length = 1;
                break;
            case 20:
                this.cf = this.b.I[c[1]];
                this.Rd = -1;
                this.Zb = this.b.Cf(c[2]);
                this.oi = c[3];
                rc && this.Zb === rc.prototype.P.av && this.Pa.ru();
                c[4] ? this.Vd = new bc(d, c[4]) : this.Vd = null;
                this.cb = [];
                this.ka = [];
                6 ===
                    c.length ? (b = c[5], this.cb.length = b.length + 1) : this.cb.length = 1;
                break;
            case 21:
                this.cf = this.b.I[c[1]];
                this.oi = c[2];
                c[3] ? this.Vd = new bc(d, c[3]) : this.Vd = null;
                this.Tu = c[4];
                break;
            case 22:
                this.cf = this.b.I[c[1]];
                this.cf.zl(c[2]);
                this.Rd = this.cf.zo(c[2]);
                this.Zb = this.b.Cf(c[3]);
                this.oi = c[4];
                c[5] ? this.Vd = new bc(d, c[5]) : this.Vd = null;
                this.cb = [];
                this.ka = [];
                7 === c.length ? (b = c[6], this.cb.length = b.length + 1) : this.cb.length = 1;
                break;
            case 23:
                this.Bk = c[1], this.vg = null
        }
        this.Pa.tA(this.cf);
        4 <= this.type && 17 >= this.type && (this.first =
            new bc(d, c[1]), this.second = new bc(d, c[2]));
        if (b) {
            var f, a;
            f = 0;
            for (a = b.length; f < a; f++) this.ka.push(new bc(d, b[f]))
        }
    }

    function q() {
        ++p;
        r.length === p && r.push(new ac);
        return r[p]
    }

    function n(d, c, b) {
        var f, a;
        f = 0;
        for (a = d.length; f < a; ++f) d[f].get(b), c[f + 1] = b.data
    }

    function h(d, c) {
        this.type = d || ec.nh;
        this.data = c || 0;
        this.Zg = null;
        this.type == ec.nh && (this.data = Math.floor(this.data))
    }
    e.prototype.mb = function() {
        23 === this.type && (this.vg = this.Pa.b.ks(this.Bk, this.Pa.Zc.parent));
        this.first && this.first.mb();
        this.second && this.second.mb();
        this.mn && this.mn.mb();
        this.Vd && this.Vd.mb();
        if (this.ka) {
            var d, c;
            d = 0;
            for (c = this.ka.length; d < c; d++) this.ka[d].mb()
        }
    };
    var r = [],
        p = -1;
    e.prototype.Yy = function(d) {
        var c = this.ka,
            b = this.cb;
        b[0] = d;
        d = q();
        n(c, b, d);
        --p;
        this.Zb.apply(this.b.De, b)
    };
    e.prototype.Ty = function(d) {
        var c = this.cf,
            b = this.cb,
            f = this.ka,
            a = this.Vd,
            g = this.Zb,
            e = this.Pa.qf,
            k = c.aa(),
            h = k.qc();
        if (!h.length)
            if (k.ea.length) h = k.ea;
            else {
                this.oi ? d.Ub("") : d.la(0);
                return
            }
        b[0] = d;
        d.Zg = c;
        d = q();
        n(f, b, d);
        a && (a.get(d), d.Rb() && (e = d.data, h = c.k));
        --p;
        c = h.length;
        if (e >= c || e <= -c) e %= c;
        0 > e && (e += c);
        g.apply(h[e], b)
    };
    e.prototype.Ey = function(d) {
        var c = this.cf,
            b = this.cb,
            f = this.ka,
            a = this.Vd,
            g = this.Rd,
            e = this.Zb,
            k = this.Pa.qf,
            h = c.aa(),
            r = h.qc();
        if (!r.length)
            if (h.ea.length) r = h.ea;
            else {
                this.oi ? d.Ub("") : d.la(0);
                return
            }
        b[0] = d;
        d.Zg = c;
        d = q();
        n(f, b, d);
        a && (a.get(d), d.Rb() && (k = d.data, r = c.k));
        --p;
        f = r.length;
        if (k >= f || k <= -f) k %= f;
        0 > k && (k += f);
        k = r[k];
        r = 0;
        c.O && (r = k.type.Dh[c.Se]);
        e.apply(k.Z[g + r], b)
    };
    e.prototype.My = function(d) {
        var c = this.Vd,
            b = this.cf,
            f = this.Tu,
            a = this.Pa.qf,
            g = b.aa(),
            e = g.qc();
        if (!e.length)
            if (g.ea.length) e = g.ea;
            else {
                this.oi ? d.Ub("") : d.la(0);
                return
            }
        if (c) {
            g = q();
            c.get(g);
            if (g.Rb()) {
                a = g.data;
                e = b.k;
                0 !== e.length && (a %= e.length, 0 > a && (a += e.length));
                a = b.Fo(a);
                b = a.Hb[f];
                ia(b) ? d.Ub(b) : d.V(b);
                --p;
                return
            }--p
        }
        c = e.length;
        if (a >= c || a <= -c) a %= c;
        0 > a && (a += c);
        a = e[a];
        e = 0;
        b.O && (e = a.type.nl[b.Se]);
        b = a.Hb[f + e];
        ia(b) ? d.Ub(b) : d.V(b)
    };
    e.prototype.Ny = function(d) {
        d.type = ec.nh;
        d.data = this.value
    };
    e.prototype.Jy = function(d) {
        d.type = ec.mh;
        d.data = this.value
    };
    e.prototype.Wy = function(d) {
        d.type = ec.String;
        d.data =
            this.value
    };
    e.prototype.Zy = function(d) {
        this.first.get(d);
        d.Rb() && (d.data = -d.data)
    };
    e.prototype.yy = function(d) {
        this.first.get(d);
        var c = q();
        this.second.get(c);
        d.Rb() && c.Rb() && (d.data += c.data, c.Qh() && d.ci());
        --p
    };
    e.prototype.Xy = function(d) {
        this.first.get(d);
        var c = q();
        this.second.get(c);
        d.Rb() && c.Rb() && (d.data -= c.data, c.Qh() && d.ci());
        --p
    };
    e.prototype.Ry = function(d) {
        this.first.get(d);
        var c = q();
        this.second.get(c);
        d.Rb() && c.Rb() && (d.data *= c.data, c.Qh() && d.ci());
        --p
    };
    e.prototype.Gy = function(d) {
        this.first.get(d);
        var c = q();
        this.second.get(c);
        d.Rb() && c.Rb() && (d.data /= c.data, d.ci());
        --p
    };
    e.prototype.Qy = function(d) {
        this.first.get(d);
        var c = q();
        this.second.get(c);
        d.Rb() && c.Rb() && (d.data %= c.data, c.Qh() && d.ci());
        --p
    };
    e.prototype.Vy = function(d) {
        this.first.get(d);
        var c = q();
        this.second.get(c);
        d.Rb() && c.Rb() && (d.data = Math.pow(d.data, c.data), c.Qh() && d.ci());
        --p
    };
    e.prototype.zy = function(d) {
        this.first.get(d);
        var c = q();
        this.second.get(c);
        c.Th() || d.Th() ? this.By(d, c) : this.Ay(d, c);
        --p
    };
    e.prototype.By = function(d, c) {
        d.Th() &&
            c.Th() ? this.Dy(d, c) : this.Cy(d, c)
    };
    e.prototype.Dy = function(d, c) {
        d.data += c.data
    };
    e.prototype.Cy = function(d, c) {
        d.Th() ? d.data += (Math.round(1E10 * c.data) / 1E10).toString() : d.Ub(d.data.toString() + c.data)
    };
    e.prototype.Ay = function(d, c) {
        d.la(d.data && c.data ? 1 : 0)
    };
    e.prototype.Uy = function(d) {
        this.first.get(d);
        var c = q();
        this.second.get(c);
        d.Rb() && c.Rb() && (d.data || c.data ? d.la(1) : d.la(0));
        --p
    };
    e.prototype.Fy = function(d) {
        this.first.get(d);
        d.data ? this.second.get(d) : this.mn.get(d)
    };
    e.prototype.Hy = function(d) {
        this.first.get(d);
        var c = q();
        this.second.get(c);
        d.la(d.data === c.data ? 1 : 0);
        --p
    };
    e.prototype.Sy = function(d) {
        this.first.get(d);
        var c = q();
        this.second.get(c);
        d.la(d.data !== c.data ? 1 : 0);
        --p
    };
    e.prototype.Oy = function(d) {
        this.first.get(d);
        var c = q();
        this.second.get(c);
        d.la(d.data < c.data ? 1 : 0);
        --p
    };
    e.prototype.Py = function(d) {
        this.first.get(d);
        var c = q();
        this.second.get(c);
        d.la(d.data <= c.data ? 1 : 0);
        --p
    };
    e.prototype.Ky = function(d) {
        this.first.get(d);
        var c = q();
        this.second.get(c);
        d.la(d.data > c.data ? 1 : 0);
        --p
    };
    e.prototype.Ly = function(d) {
        this.first.get(d);
        var c = q();
        this.second.get(c);
        d.la(d.data >= c.data ? 1 : 0);
        --p
    };
    e.prototype.Iy = function(d) {
        var c = this.vg.Bg();
        ha(c) ? d.V(c) : d.Ub(c)
    };
    bc = e;
    h.prototype.Qh = function() {
        return this.type === ec.mh
    };
    h.prototype.Rb = function() {
        return this.type === ec.nh || this.type === ec.mh
    };
    h.prototype.Th = function() {
        return this.type === ec.String
    };
    h.prototype.ci = function() {
        this.Qh() || (this.Th() && (this.data = parseFloat(this.data)), this.type = ec.mh)
    };
    h.prototype.la = function(d) {
        this.type = ec.nh;
        this.data = Math.floor(d)
    };
    h.prototype.V = function(d) {
        this.type =
            ec.mh;
        this.data = d
    };
    h.prototype.Ub = function(d) {
        this.type = ec.String;
        this.data = d
    };
    h.prototype.Um = function(d) {
        ha(d) ? (this.type = ec.mh, this.data = d) : ia(d) ? (this.type = ec.String, this.data = d.toString()) : (this.type = ec.nh, this.data = 0)
    };
    ac = h;
    ec = {
        nh: 0,
        mh: 1,
        String: 2
    }
})();

function W(e) {
    this.b = e;
    this.Mc = []
}
W.prototype.Ma = function() {
    var e = {},
        q, n, h, r, p, d, c, b;
    e.waits = [];
    var f = e.waits,
        a;
    q = 0;
    for (n = this.Mc.length; q < n; q++) {
        d = this.Mc[q];
        a = {
            t: d.time,
            st: d.yu,
            s: d.aq,
            ev: d.Ah.ta,
            sm: [],
            sols: {}
        };
        d.Ah.nd[d.Bc] && (a.act = d.Ah.nd[d.Bc].ta);
        h = 0;
        for (r = d.ra.length; h < r; h++) a.sm.push(d.ra[h].ta);
        for (p in d.yc)
            if (d.yc.hasOwnProperty(p)) {
                c = this.b.I[parseInt(p, 10)];
                b = {
                    sa: d.yc[p].Nm,
                    insts: []
                };
                h = 0;
                for (r = d.yc[p].Ve.length; h < r; h++) b.insts.push(d.yc[p].Ve[h].uid);
                a.sols[c.ta.toString()] = b
            }
        f.push(a)
    }
    return e
};
W.prototype.Sa = function(e) {
    e = e.waits;
    var q, n, h, r, p, d, c, b, f, a, g;
    I(this.Mc);
    q = 0;
    for (n = e.length; q < n; q++)
        if (d = e[q], b = this.b.Gr[d.ev.toString()]) {
            f = -1;
            h = 0;
            for (r = b.nd.length; h < r; h++)
                if (b.nd[h].ta === d.act) {
                    f = h;
                    break
                }
            if (-1 !== f) {
                c = {
                    yc: {},
                    ra: [],
                    ho: !1
                };
                c.time = d.t;
                c.yu = d.st || "";
                c.aq = !!d.s;
                c.Ah = b;
                c.Bc = f;
                h = 0;
                for (r = d.sm.length; h < r; h++)(b = this.b.Cl(d.sm[h])) && c.ra.push(b);
                for (p in d.sols)
                    if (d.sols.hasOwnProperty(p) && (b = this.b.Cl(parseInt(p, 10)))) {
                        f = d.sols[p];
                        a = {
                            Nm: f.sa,
                            Ve: []
                        };
                        h = 0;
                        for (r = f.insts.length; h < r; h++)(g =
                            this.b.Te(f.insts[h])) && a.Ve.push(g);
                        c.yc[b.index.toString()] = a
                    }
                this.Mc.push(c)
            }
        }
};
(function() {
    function e() {}

    function q() {}

    function n() {}
    var h = W.prototype;
    e.prototype.sv = function() {
        return !0
    };
    e.prototype.Uq = function() {
        return !0
    };
    e.prototype.Tq = function() {
        return !0
    };
    e.prototype.dv = function(b, c, a) {
        return fc(b, c, a)
    };
    e.prototype.uv = function(b, c, a) {
        var d = this.b.Va(),
            e = d.Za,
            d = d.Gs();
        b = this.b.cu(b);
        if (a < c)
            if (d)
                for (; c >= a && !b.fb; --c) this.b.$f(e.ra), b.index = c, e.bg(), this.b.Zd(e.ra);
            else
                for (; c >= a && !b.fb; --c) b.index = c, e.bg();
        else if (d)
            for (; c <= a && !b.fb; ++c) this.b.$f(e.ra), b.index = c, e.bg(), this.b.Zd(e.ra);
        else
            for (; c <= a && !b.fb; ++c) b.index = c, e.bg();
        this.b.Xt();
        return !1
    };
    var r = [],
        p = -1;
    e.prototype.vv = function(b) {
        var c = b.aa();
        p++;
        r.length === p && r.push([]);
        var a = r[p];
        za(a, c.qc());
        var d = this.b.Va(),
            e = d.Za,
            k = d.Gs(),
            d = this.b.cu(),
            h, n, v, m, q, O, S = b.lc;
        if (k)
            for (k = 0, h = a.length; k < h && !d.fb; k++) {
                this.b.$f(e.ra);
                m = a[k];
                c = b.aa();
                c.fa = !1;
                I(c.k);
                c.k[0] = m;
                if (S)
                    for (n = 0, v = m.siblings.length; n < v; n++) q = m.siblings[n], O = q.type.aa(), O.fa = !1, I(O.k), O.k[0] = q;
                d.index = k;
                e.bg();
                this.b.Zd(e.ra)
            } else
                for (c.fa = !1, I(c.k), k = 0, h = a.length; k <
                    h && !d.fb; k++) {
                    m = a[k];
                    c.k[0] = m;
                    if (S)
                        for (n = 0, v = m.siblings.length; n < v; n++) q = m.siblings[n], O = q.type.aa(), O.fa = !1, I(O.k), O.k[0] = q;
                    d.index = k;
                    e.bg()
                }
        I(a);
        this.b.Xt();
        p--;
        return !1
    };
    e.prototype.ow = function(b, c, a, d) {
        var e, k, h, n;
        if (b) {
            p++;
            r.length === p && r.push([]);
            var v = r[p],
                m = b.aa();
            za(v, m.qc());
            m.fa && I(m.ea);
            var q = this.b.Gh();
            h = e = 0;
            for (k = v.length; e < k; e++) n = v[e], v[h] = n, c = q.ka[1].get(e), d = q.ka[3].get(e), fc(c, a, d) ? h++ : m.ea.push(n);
            xa(v, h);
            m.fa = !1;
            za(m.k, v);
            I(v);
            p--;
            b.Yc();
            return !!m.k.length
        }
    };
    e.prototype.mx = function() {
        var b =
            this.b.Gh().N;
        "undefined" === typeof b.TriggerOnce_lastTick && (b.TriggerOnce_lastTick = -1);
        var c = b.TriggerOnce_lastTick,
            a = this.b.Jd;
        b.TriggerOnce_lastTick = a;
        return this.b.ip || c !== a - 1
    };
    e.prototype.rv = function(b) {
        var c = this.b.Gh(),
            a = c.N.Every_lastTime || 0,
            d = this.b.wb.R;
        "undefined" === typeof c.N.Every_seconds && (c.N.Every_seconds = b);
        var e = c.N.Every_seconds;
        if (d >= a + e) return c.N.Every_lastTime = a + e, d >= c.N.Every_lastTime + .04 && (c.N.Every_lastTime = d), c.N.Every_seconds = b, !0;
        d < a - .1 && (c.N.Every_lastTime = d);
        return !1
    };
    e.prototype.kv = function(b, c, a) {
        return fc(b.Bg(), c, a)
    };
    e.prototype.Ev = function(b) {
        return (b = this.b.Jh[b.toLowerCase()]) && b.Cg
    };
    e.prototype.Iv = function() {
        return this.b.Ye
    };
    e.prototype.gv = function(b, c, a) {
        return b >= c && b <= a
    };
    e.prototype.Fq = function() {
        var b = this.b.Va();
        return b.lo ? !1 : !b.Pg
    };
    e.prototype.Vq = function() {
        return !0
    };
    e.prototype.Tv = function() {
        return !0
    };
    e.prototype.Dn = function() {
        return !0
    };
    e.prototype.Yq = function() {
        return !0
    };
    e.prototype.gw = function() {
        return !0
    };
    e.prototype.Kk = function() {
        return !0
    };
    e.prototype.Zu = function(b, c, a) {
        return Ma(L(b), L(a)) <= L(c)
    };
    e.prototype.Bv = function(b, c) {
        return Oa(L(b), L(c))
    };
    e.prototype.zv = function(b, c, a) {
        b = Ka(b);
        c = Ka(c);
        a = Ka(a);
        return Oa(a, c) ? Oa(b, c) && !Oa(b, a) : !(!Oa(b, c) && Oa(b, a))
    };
    h.n = new e;
    q.prototype.wv = function(b) {
        this.b.Lg || this.b.Le || (this.b.Le = b)
    };
    q.prototype.pv = function(b, c, a, d) {
        if (c && b && (c = this.b.ao(b, c, a, d))) {
            this.b.ed++;
            var e;
            this.b.trigger(Object.getPrototypeOf(b.xa).n.ig, c);
            if (c.lc)
                for (a = 0, d = c.siblings.length; a < d; a++) e = c.siblings[a], this.b.trigger(Object.getPrototypeOf(e.type.xa).n.ig,
                    e);
            this.b.ed--;
            b = b.aa();
            b.fa = !1;
            I(b.k);
            b.k[0] = c;
            if (c.lc)
                for (a = 0, d = c.siblings.length; a < d; a++) e = c.siblings[a], b = e.type.aa(), b.fa = !1, I(b.k), b.k[0] = e
        }
    };
    q.prototype.Sw = function(b, c) {
        0 === b.Ck ? ha(c) ? b.of(c) : b.of(parseFloat(c)) : 1 === b.Ck && b.of(c.toString())
    };
    q.prototype.Yu = function(b, c) {
        0 === b.Ck ? ha(c) ? b.of(b.Bg() + c) : b.of(b.Bg() + parseFloat(c)) : 1 === b.Ck && b.of(b.Bg() + c.toString())
    };
    q.prototype.jx = function(b, c) {
        0 === b.Ck && (ha(c) ? b.of(b.Bg() - c) : b.of(b.Bg() - parseFloat(c)))
    };
    q.prototype.Gw = function(b, c) {
        var a = this.b.Jh[b.toLowerCase()];
        if (a) switch (c) {
            case 0:
                a.jk(!1);
                break;
            case 1:
                a.jk(!0);
                break;
            case 2:
                a.jk(!a.Cg)
        }
    };
    q.prototype.Rw = function(b) {
        0 > b && (b = 0);
        this.b.gg = b
    };
    var d = [],
        c = [];
    q.prototype.ox = function(b) {
        if (!(0 > b)) {
            var f, a, g, e = this.b.Va(),
                k;
            d.length ? k = d.pop() : k = {
                yc: {},
                ra: []
            };
            k.ho = !1;
            k.time = this.b.wb.R + b;
            k.yu = "";
            k.aq = !1;
            k.Ah = e.Za;
            k.Bc = e.Bc + 1;
            b = 0;
            for (f = this.b.I.length; b < f; b++) g = this.b.I[b], a = g.aa(), a.fa && -1 === e.Za.ra.indexOf(g) || (k.ra.push(g), g = void 0, c.length ? g = c.pop() : g = {
                    Ve: []
                }, g.Nm = !1, g.Nm = a.fa, za(g.Ve, a.k), k.yc[b.toString()] =
                g);
            this.Mc.push(k);
            return !0
        }
    };
    q.prototype.xv = function(b) {
        if (!this.b.Lg && !this.b.Le)
            for (var c in this.b.ai)
                if (this.b.ai.hasOwnProperty(c) && nb(c, b)) {
                    this.b.Le = this.b.ai[c];
                    break
                }
    };
    q.prototype.ww = function() {
        if (!this.b.Lg && !this.b.Le && this.b.Ba) {
            this.b.Le = this.b.Ba;
            var b, c, a;
            b = 0;
            for (c = this.b.Gf.length; b < c; b++) a = this.b.Gf[b], a.jk(a.Hl)
        }
    };
    h.A = new q;
    n.prototype["int"] = function(b, c) {
        ia(c) ? (b.la(parseInt(c, 10)), isNaN(b.data) && (b.data = 0)) : b.la(c)
    };
    n.prototype["float"] = function(b, c) {
        ia(c) ? (b.V(parseFloat(c)),
            isNaN(b.data) && (b.data = 0)) : b.V(c)
    };
    n.prototype.mA = function(b, c) {
        b.la(c.length || 0)
    };
    n.prototype.random = function(b, c, a) {
        void 0 === a ? b.V(Math.random() * c) : b.V(Math.random() * (a - c) + c)
    };
    n.prototype.sqrt = function(b, c) {
        b.V(Math.sqrt(c))
    };
    n.prototype.abs = function(b, c) {
        b.V(Math.abs(c))
    };
    n.prototype.round = function(b, c) {
        b.la(Math.round(c))
    };
    n.prototype.floor = function(b, c) {
        b.la(Math.floor(c))
    };
    n.prototype.ceil = function(b, c) {
        b.la(Math.ceil(c))
    };
    n.prototype.sin = function(b, c) {
        b.V(Math.sin(L(c)))
    };
    n.prototype.cos = function(b,
        c) {
        b.V(Math.cos(L(c)))
    };
    n.prototype.tan = function(b, c) {
        b.V(Math.tan(L(c)))
    };
    n.prototype.asin = function(b, c) {
        b.V(Ga(Math.asin(c)))
    };
    n.prototype.acos = function(b, c) {
        b.V(Ga(Math.acos(c)))
    };
    n.prototype.atan = function(b, c) {
        b.V(Ga(Math.atan(c)))
    };
    n.prototype.exp = function(b, c) {
        b.V(Math.exp(c))
    };
    n.prototype.log10 = function(b, c) {
        b.V(Math.log(c) / Math.LN10)
    };
    n.prototype.max = function(b) {
        var c = arguments[1];
        "number" !== typeof c && (c = 0);
        var a, d, e;
        a = 2;
        for (d = arguments.length; a < d; a++) e = arguments[a], "number" === typeof e && c <
            e && (c = e);
        b.V(c)
    };
    n.prototype.min = function(b) {
        var c = arguments[1];
        "number" !== typeof c && (c = 0);
        var a, d, e;
        a = 2;
        for (d = arguments.length; a < d; a++) e = arguments[a], "number" === typeof e && c > e && (c = e);
        b.V(c)
    };
    n.prototype.rg = function(b) {
        b.V(this.b.rg)
    };
    n.prototype.gg = function(b) {
        b.V(this.b.gg)
    };
    n.prototype.time = function(b) {
        b.V(this.b.wb.R)
    };
    n.prototype.Jd = function(b) {
        b.la(this.b.Jd)
    };
    n.prototype.lm = function(b) {
        b.la(this.b.lm)
    };
    n.prototype.vo = function(b) {
        b.la(this.b.vo)
    };
    n.prototype.qA = function(b, c) {
        var a, d;
        if (this.b.Nj.length)
            if (c) {
                for (d =
                    this.b.Oj; 0 <= d; --d)
                    if (a = this.b.Nj[d], a.name === c) {
                        b.la(a.index);
                        return
                    }
                b.la(0)
            } else a = this.b.hs(), b.la(a ? a.index : -1);
        else b.la(0)
    };
    n.prototype.q = function(b, c, a, d, e) {
        b.V(Ga(La(c, a, d, e)))
    };
    n.prototype.nA = function(b, c, a, d) {
        b.V(Ua(c, a, d))
    };
    n.prototype.EB = function(b) {
        b.la(this.b.width)
    };
    n.prototype.DB = function(b) {
        b.la(this.b.height)
    };
    n.prototype.kA = function(b) {
        b.la(this.b.Ba.height)
    };
    n.prototype.left = function(b, c, a) {
        b.Ub(ia(c) ? c.substr(0, a) : "")
    };
    n.prototype.right = function(b, c, a) {
        b.Ub(ia(c) ? c.substr(c.length -
            a) : "")
    };
    n.prototype.replace = function(b, c, a, d) {
        ia(c) && ia(a) && ia(d) ? b.Ub(c.replace(new RegExp(gb(a), "gi"), d)) : b.Ub(ia(c) ? c : "")
    };
    n.prototype.trim = function(b, c) {
        b.Ub(ia(c) ? c.trim() : "")
    };
    n.prototype.lA = function(b) {
        this.b.Ba ? b.Ub(this.b.Ba.name) : b.Ub("")
    };
    n.prototype.Nr = function(b) {
        var c = A(Math.random() * (arguments.length - 1));
        b.Um(arguments[c + 1])
    };
    n.prototype.Zn = function(b) {
        b.V(this.b.Zn / 1E3)
    };
    n.prototype.AB = function(b, c) {
        var a = this.b.ls(c);
        b.V(a ? a.ya : 0)
    };
    n.prototype.BB = function(b, c) {
        var a = this.b.ls(c);
        b.V(a ? a.za : 0)
    };
    n.prototype.Yl = function(b) {
        b.V(this.b.Yl)
    };
    h.P = new n;
    h.XA = function() {
        var b, f, a, g, e, k, h = this.b.Va();
        b = 0;
        for (a = this.Mc.length; b < a; b++) {
            g = this.Mc[b];
            if (-1 === g.time) {
                if (!g.aq) continue
            } else if (g.time > this.b.wb.R) continue;
            h.Za = g.Ah;
            h.Bc = g.Bc;
            h.qb = 0;
            for (f in g.yc) g.yc.hasOwnProperty(f) && (e = this.b.I[parseInt(f, 10)].aa(), k = g.yc[f], e.fa = k.Nm, za(e.k, k.Ve), e = k, I(e.Ve), c.push(e));
            g.Ah.WA();
            this.b.Xn(g.ra);
            g.ho = !0
        }
        f = b = 0;
        for (a = this.Mc.length; b < a; b++) g = this.Mc[b], this.Mc[f] = g, g.ho ? (Wa(g.yc), I(g.ra),
            d.push(g)) : f++;
        xa(this.Mc, f)
    }
})();
(function() {
    qb = function(e, n) {
        var h = e[1],
            r = e[3],
            p = e[4],
            d = e[5],
            c = e[6],
            b = e[7],
            f = e[8];
        n.n || (n.n = {});
        n.A || (n.A = {});
        n.P || (n.P = {});
        var a = n.n,
            g = n.A,
            l = n.P;
        r && (a.An = function(a, b) {
                return fc(this.x, a, b)
            }, a.Dq = function(a, b) {
                return fc(this.y, a, b)
            }, a.Iq = function() {
                var a = this.u;
                this.Ga();
                var b = this.Ka;
                return !(b.right < a.ya || b.bottom < a.za || b.left > a.Ja || b.top > a.Ia)
            }, a.QB = function() {
                this.Ga();
                var a = this.Ka,
                    b = this.b.Ba;
                return 0 > a.right || 0 > a.bottom || a.left > b.width || a.top > b.height
            }, a.YB = function(a, b, c) {
                var d = this.aa(),
                    f = d.qc();
                if (!f.length) return !1;
                var g = f[0],
                    e = g,
                    h = Sa(g.x, g.y, b, c),
                    p, l, r;
                p = 1;
                for (l = f.length; p < l; p++)
                    if (g = f[p], r = Sa(g.x, g.y, b, c), 0 === a && r < h || 1 === a && r > h) h = r, e = g;
                d.Zj(e);
                return !0
            }, g.Jn = function(a) {
                this.x !== a && (this.x = a, this.D())
            }, g.kr = function(a) {
                this.y !== a && (this.y = a, this.D())
            }, g.hr = function(a, b) {
                if (this.x !== a || this.y !== b) this.x = a, this.y = b, this.D()
            }, g.Lw = function(a, b) {
                var c = a.uz(this);
                if (c) {
                    var d;
                    c.cj ? (d = c.cj(b, !0), c = c.cj(b, !1)) : (d = c.x, c = c.y);
                    if (this.x !== d || this.y !== c) this.x = d, this.y = c, this.D()
                }
            }, g.UB =
            function(a) {
                0 !== a && (this.x += Math.cos(this.q) * a, this.y += Math.sin(this.q) * a, this.D())
            }, g.TB = function(a, b) {
                0 !== b && (this.x += Math.cos(L(a)) * b, this.y += Math.sin(L(a)) * b, this.D())
            }, l.or = function(a) {
                a.V(this.x)
            }, l.pr = function(a) {
                a.V(this.y)
            }, l.rg = function(a) {
                a.V(this.b.te(this))
            });
        p && (a.NB = function(a, b) {
            return fc(this.width, a, b)
        }, a.MB = function(a, b) {
            return fc(this.height, a, b)
        }, g.jr = function(a) {
            this.width !== a && (this.width = a, this.D())
        }, g.Hw = function(a) {
            this.height !== a && (this.height = a, this.D())
        }, g.Nw = function(a,
            b) {
            if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.D()
        }, l.nr = function(a) {
            a.V(this.width)
        }, l.Bn = function(a) {
            a.V(this.height)
        }, l.JB = function(a) {
            this.Ga();
            a.V(this.Ka.left)
        }, l.LB = function(a) {
            this.Ga();
            a.V(this.Ka.top)
        }, l.KB = function(a) {
            this.Ga();
            a.V(this.Ka.right)
        }, l.IB = function(a) {
            this.Ga();
            a.V(this.Ka.bottom)
        });
        d && (a.Zu = function(a, b) {
            return Ma(this.q, L(b)) <= L(a)
        }, a.Bv = function(a) {
            return Oa(this.q, L(a))
        }, a.zv = function(a, b) {
            var c = Ka(a),
                d = Ka(b),
                f = Ia(this.q);
            return Oa(d, c) ? Oa(f, c) &&
                !Oa(f, d) : !(!Oa(f, c) && Oa(f, d))
        }, g.xw = function(a) {
            a = L(Ha(a));
            isNaN(a) || this.q === a || (this.q = a, this.D())
        }, g.bC = function(a) {
            0 === a || isNaN(a) || (this.q += L(a), this.q = Ia(this.q), this.D())
        }, g.cC = function(a) {
            0 === a || isNaN(a) || (this.q -= L(a), this.q = Ia(this.q), this.D())
        }, g.dC = function(a, b) {
            var c = Na(this.q, L(b), L(a));
            isNaN(c) || this.q === c || (this.q = c, this.D())
        }, g.eC = function(a, b, c) {
            a = Na(this.q, Math.atan2(c - this.y, b - this.x), L(a));
            isNaN(a) || this.q === a || (this.q = a, this.D())
        }, g.hC = function(a, b) {
            var c = Math.atan2(b - this.y,
                a - this.x);
            isNaN(c) || this.q === c || (this.q = c, this.D())
        }, l.HB = function(a) {
            a.V(Ja(this.q))
        });
        h || (a.Bq = function(a, b, c) {
            return fc(this.Hb[a], b, c)
        }, a.Gq = function(a) {
            return this.Hb[a]
        }, a.ZB = function(a, b) {
            var c = this.aa(),
                d = c.qc();
            if (!d.length) return !1;
            var f = d[0],
                g = f,
                e = f.Hb[b],
                h, p, l;
            h = 1;
            for (p = d.length; h < p; h++)
                if (f = d[h], l = f.Hb[b], 0 === a && l < e || 1 === a && l > e) e = l, g = f;
            c.Zj(g);
            return !0
        }, a.pw = function(a) {
            var b, c, d, f, g;
            if (this.b.Gh().Il) {
                g = this.aa();
                if (g.fa)
                    for (g.fa = !1, I(g.k), I(g.ea), d = this.k, b = 0, c = d.length; b < c; b++) f = d[b],
                        f.uid === a ? g.ea.push(f) : g.k.push(f);
                else {
                    d = b = 0;
                    for (c = g.k.length; b < c; b++) f = g.k[b], g.k[d] = f, f.uid === a ? g.ea.push(f) : d++;
                    xa(g.k, d)
                }
                this.Yc();
                return !!g.k.length
            }
            f = this.b.Te(a);
            if (!f) return !1;
            g = this.aa();
            if (!g.fa && -1 === g.k.indexOf(f)) return !1;
            if (this.O)
                for (a = f.type.Ua, b = 0, c = a.length; b < c; b++) {
                    if (a[b] === this) return g.Zj(f), this.Yc(), !0
                } else if (f.type === this) return g.Zj(f), this.Yc(), !0;
            return !1
        }, a.ig = function() {
            return !0
        }, a.Nq = function() {
            return !0
        }, g.er = function(a, b) {
            var c = this.Hb;
            ha(c[a]) ? c[a] = ha(b) ? b : parseFloat(b) :
                ia(c[a]) && (c[a] = ia(b) ? b : b.toString())
        }, g.Xu = function(a, b) {
            var c = this.Hb;
            ha(c[a]) ? c[a] = ha(b) ? c[a] + b : c[a] + parseFloat(b) : ia(c[a]) && (c[a] = ia(b) ? c[a] + b : c[a] + b.toString())
        }, g.ix = function(a, b) {
            var c = this.Hb;
            ha(c[a]) && (c[a] = ha(b) ? c[a] - b : c[a] - parseFloat(b))
        }, g.dr = function(a, b) {
            this.Hb[a] = b ? 1 : 0
        }, g.kx = function(a) {
            this.Hb[a] = 1 - this.Hb[a]
        }, g.Eq = function() {
            this.b.ke(this)
        }, g.Pv || (g.Pv = function(a) {
            var b, c;
            try {
                b = JSON.parse(a)
            } catch (d) {
                return
            }
            this.b.Wl(this, b, !0);
            this.Md && this.Md();
            if (this.Z)
                for (a = 0, b = this.Z.length; a <
                    b; ++a) c = this.Z[a], c.Md && c.Md()
        }), l.ov = function(a) {
            var b = a.Zg.k.length,
                c, d, f;
            c = 0;
            for (d = this.b.Sd.length; c < d; c++) f = this.b.Sd[c], a.Zg.O ? 0 <= f.type.Ua.indexOf(a.Zg) && b++ : f.type === a.Zg && b++;
            a.la(b)
        }, l.aC = function(a) {
            a.la(a.Zg.aa().qc().length)
        }, l.nx = function(a) {
            a.la(this.uid)
        }, l.OB = function(a) {
            a.la(this.fj())
        }, l.Aq || (l.Aq = function(a) {
            a.Ub(JSON.stringify(this.b.Vp(this, !0)))
        }));
        c && (a.Jq = function() {
            return this.visible
        }, g.In = function(a) {
            !a !== !this.visible && (this.visible = !!a, this.b.Y = !0)
        }, a.hv = function(a, b) {
            return fc(mb(100 *
                this.opacity), a, b)
        }, g.fr = function(a) {
            a = a / 100;
            0 > a ? a = 0 : 1 < a && (a = 1);
            a !== this.opacity && (this.opacity = a, this.b.Y = !0)
        }, l.Opacity = function(a) {
            a.V(mb(100 * this.opacity))
        });
        b && (a.PB = function(a) {
                return a ? this.u === a : !1
            }, a.$B = function(a) {
                var b = this.aa(),
                    c = b.qc();
                if (!c.length) return !1;
                var d = c[0],
                    f = d,
                    g, e;
                g = 1;
                for (e = c.length; g < e; g++)
                    if (d = c[g], 0 === a) {
                        if (d.u.index > f.u.index || d.u.index === f.u.index && d.Ud() > f.Ud()) f = d
                    } else if (d.u.index < f.u.index || d.u.index === f.u.index && d.Ud() < f.Ud()) f = d;
                b.Zj(f);
                return !0
            }, g.Qv = function() {
                var a =
                    this.u,
                    b = a.k;
                b.length && b[b.length - 1] === this || (a.eh(this, !1), a.ph(this, !1), this.b.Y = !0)
            }, g.Kq = function() {
                var a = this.u,
                    b = a.k;
                b.length && b[0] === this || (a.eh(this, !1), a.MA(this), this.b.Y = !0)
            }, g.VB = function(a) {
                a && a != this.u && (this.u.eh(this, !0), this.u = a, a.ph(this, !0), this.b.Y = !0)
            }, g.qr = function(a, b) {
                var c = 0 === a;
                if (b) {
                    var d = b.Eo(this);
                    d && d.uid !== this.uid && (this.u.index !== d.u.index && (this.u.eh(this, !0), this.u = d.u, d.u.ph(this, !0)), this.u.ut(this, d, c), this.b.Y = !0)
                }
            }, l.SB = function(a) {
                a.la(this.u.Bt)
            }, l.RB = function(a) {
                a.Ub(this.u.name)
            },
            l.iC = function(a) {
                a.la(this.Ud())
            });
        f && (g.fC = function(a, b) {
            if (this.b.F) {
                var c = this.type.Do(b);
                if (!(0 > c)) {
                    var d = 1 === a;
                    this.Df[c] !== d && (this.Df[c] = d, this.he(), this.b.Y = !0)
                }
            }
        }, g.gC = function(a, b, c) {
            if (this.b.F) {
                var d = this.type.Do(a);
                0 > d || (a = this.type.da[d], d = this.ab[d], b = Math.floor(b), 0 > b || b >= d.length || (1 === this.b.F.yz(a.Cb, b) && (c /= 100), d[b] !== c && (d[b] = c, a.Xa && (this.b.Y = !0))))
            }
        })
    };
    Kb = function() {
        this.Un = this.Uk = !0;
        this.type.Ok = !0;
        this.b.Y = !0;
        var e, n, h = this.Rn;
        e = 0;
        for (n = h.length; e < n; ++e) h[e](this);
        this.u.md &&
            this.Ga()
    };
    Lb = function(e) {
        e && this.Rn.push(e)
    };
    Ob = function() {
        if (this.Uk) {
            var e = this.Ka,
                n = this.Vb;
            e.set(this.x, this.y, this.x + this.width, this.y + this.height);
            e.offset(-this.rc * this.width, -this.tc * this.height);
            this.q ? (e.offset(-this.x, -this.y), n.tu(e, this.q), n.offset(this.x, this.y), n.Hr(e)) : n.vi(e);
            e.normalize();
            this.Uk = !1;
            this.Ru()
        }
    };
    var e = new ta(0, 0, 0, 0);
    Pb = function() {
        if (this.u.md) {
            var q = this.u.fc,
                n = this.Ka;
            e.set(q.zc(n.left), q.Ac(n.top), q.zc(n.right), q.Ac(n.bottom));
            this.Ic.Wi(e) || (this.Ic.right < this.Ic.left ?
                q.update(this, null, e) : q.update(this, this.Ic, e), this.Ic.vh(e), this.u.ee = !0)
        }
    };
    Qb = function() {
        if (this.Un && this.td) {
            this.Ga();
            var q = this.type.Qi,
                n = this.Ka;
            e.set(q.zc(n.left), q.Ac(n.top), q.zc(n.right), q.Ac(n.bottom));
            this.sd.Wi(e) || (this.sd.right < this.sd.left ? q.update(this, null, e) : q.update(this, this.sd, e), this.sd.vh(e), this.Un = !1)
        }
    };
    Nb = function(e, n) {
        return this.Ka.ic(e, n) && this.Vb.ic(e, n) ? this.Ha && !this.Ha.Ph() ? (this.Ha.rh(this.width, this.height, this.q), this.Ha.ic(e - this.x, n - this.y)) : !0 : !1
    };
    Gb = function() {
        this.type.sn();
        return this.Fg
    };
    Rb = function() {
        this.u.sq();
        return this.ie
    };
    Sb = function() {
        I(this.Ca);
        var e, n, h, r = !0;
        e = 0;
        for (n = this.Df.length; e < n; e++) this.Df[e] && (h = this.type.da[e], this.Ca.push(h), h.$d || (r = !1));
        this.Su = !!this.Ca.length;
        this.pf = r
    };
    Hb = function() {
        return "Inst" + this.bu
    };
    tb = function(e) {
        if (e && e.lc && e.type != this) {
            var n, h, r;
            n = 0;
            for (h = e.siblings.length; n < h; n++)
                if (r = e.siblings[n], r.type == this) return r
        }
        e = this.aa().qc();
        return e.length ? e[0] : null
    };
    ub = function(e) {
        var n = this.aa().qc();
        return n.length ? n[e.fj() % n.length] :
            null
    };
    sb = function() {
        if (this.Bi && !this.O) {
            var e, n;
            e = 0;
            for (n = this.k.length; e < n; e++) this.k[e].Fg = e;
            var h = e,
                r = this.b.Sd;
            e = 0;
            for (n = r.length; e < n; ++e) r[e].type === this && (r[e].Fg = h++);
            this.Bi = !1
        }
    };
    Eb = function(e) {
        if (e < this.k.length) return this.k[e];
        e -= this.k.length;
        var n = this.b.Sd,
            h, r;
        h = 0;
        for (r = n.length; h < r; ++h)
            if (n[h].type === this) {
                if (0 === e) return n[h];
                --e
            }
        return null
    };
    vb = function() {
        return this.rf[this.ne]
    };
    xb = function() {
        this.ne++;
        this.ne === this.rf.length ? this.rf.push(new rb(this)) : (this.rf[this.ne].fa = !0,
            I(this.rf[this.ne].ea))
    };
    yb = function() {
        this.ne++;
        this.ne === this.rf.length && this.rf.push(new rb(this));
        var e = this.rf[this.ne],
            n = this.rf[this.ne - 1];
        n.fa ? (e.fa = !0, I(e.ea)) : (e.fa = !1, za(e.k, n.k), za(e.ea, n.ea))
    };
    zb = function() {
        this.ne--
    };
    Ab = function(e) {
        var n, h, r, p, d, c = 0;
        if (!this.O)
            for (n = 0, h = this.Ua.length; n < h; n++)
                for (d = this.Ua[n], r = 0, p = d.Ya.length; r < p; r++) {
                    if (e === d.Ya[r].name) return this.N.lastBehIndex = c, d.Ya[r];
                    c++
                }
        n = 0;
        for (h = this.Ya.length; n < h; n++) {
            if (e === this.Ya[n].name) return this.N.lastBehIndex = c, this.Ya[n];
            c++
        }
        return null
    };
    Bb = function(e) {
        return this.zl(e) ? this.N.lastBehIndex : -1
    };
    Cb = function(e) {
        var n, h;
        n = 0;
        for (h = this.da.length; n < h; n++)
            if (this.da[n].name === e) return n;
        return -1
    };
    Db = function() {
        if (this.lc && !this.O) {
            var e, n, h, r, p, d, c;
            this.sn();
            d = this.aa();
            var b = d.fa,
                f = (e = this.b.Va()) && e.Za && e.Za.hd;
            e = 0;
            for (n = this.Oc.length; e < n; e++)
                if (p = this.Oc[e], p !== this && (p.sn(), c = p.aa(), c.fa = b, !b)) {
                    I(c.k);
                    h = 0;
                    for (r = d.k.length; h < r; ++h) c.k[h] = p.Fo(d.k[h].Fg);
                    if (f)
                        for (I(c.ea), h = 0, r = d.ea.length; h < r; ++h) c.ea[h] = p.Fo(d.ea[h].Fg)
                }
        }
    };
    Fb = function() {
        return "Type" + this.ta
    };
    fc = function(e, n, h) {
        if ("undefined" === typeof e || "undefined" === typeof h) return !1;
        switch (n) {
            case 0:
                return e === h;
            case 1:
                return e !== h;
            case 2:
                return e < h;
            case 3:
                return e <= h;
            case 4:
                return e > h;
            case 5:
                return e >= h;
            default:
                return !1
        }
    }
})();
var nc = {};

function sc(e) {
    this.b = e
}
(function() {
    function e() {
        return c.length ? c.pop() : []
    }

    function q(b) {
        var d, a;
        d = 0;
        for (a = b.length; d < a; d++) Array.isArray(b[d]) && q(b[d]);
        I(b);
        c.push(b)
    }

    function n() {}

    function h() {}

    function r() {}
    var p = sc.prototype;
    p.T = function(b) {
        this.xa = b;
        this.b = b.b
    };
    p.T.prototype.H = function() {};
    p.M = function(b) {
        this.type = b;
        this.b = b.b
    };
    var d = p.M.prototype,
        c = [];
    Array.isArray || (Array.isArray = function(b) {
        return "[object Array]" === Object.prototype.toString.call(b)
    });
    d.H = function() {
        this.$a = this.C[0];
        this.rb = this.C[1];
        this.Qb = this.C[2];
        this.Ab || (this.od = e());
        var b = this.od;
        b.length = this.$a;
        var c, a, d;
        for (c = 0; c < this.$a; c++)
            for (b[c] || (b[c] = e()), b[c].length = this.rb, a = 0; a < this.rb; a++)
                for (b[c][a] || (b[c][a] = e()), b[c][a].length = this.Qb, d = 0; d < this.Qb; d++) b[c][a][d] = 0;
        this.Qc = [];
        this.pe = [];
        this.yg = [];
        this.xd = -1
    };
    d.Yd = function() {
        var b;
        for (b = 0; b < this.$a; b++) q(this.od[b]);
        I(this.od)
    };
    d.qd = function(b, c, a) {
        b = Math.floor(b);
        c = Math.floor(c);
        a = Math.floor(a);
        return isNaN(b) || 0 > b || b > this.$a - 1 || isNaN(c) || 0 > c || c > this.rb - 1 || isNaN(a) || 0 > a || a > this.Qb - 1 ? 0 :
            this.od[b][c][a]
    };
    d.set = function(b, c, a, d) {
        b = Math.floor(b);
        c = Math.floor(c);
        a = Math.floor(a);
        isNaN(b) || 0 > b || b > this.$a - 1 || isNaN(c) || 0 > c || c > this.rb - 1 || isNaN(a) || 0 > a || a > this.Qb - 1 || (this.od[b][c][a] = d)
    };
    d.hz = function() {
        return JSON.stringify({
            c2array: !0,
            size: [this.$a, this.rb, this.Qb],
            data: this.od
        })
    };
    d.Ma = function() {
        return {
            size: [this.$a, this.rb, this.Qb],
            data: this.od
        }
    };
    d.Sa = function(b) {
        var c = b.size;
        this.$a = c[0];
        this.rb = c[1];
        this.Qb = c[2];
        this.od = b.data
    };
    d.nf = function(b, c, a) {
        0 > b && (b = 0);
        0 > c && (c = 0);
        0 > a && (a = 0);
        if (this.$a !== b || this.rb !== c || this.Qb !== a) {
            this.$a = b;
            this.rb = c;
            this.Qb = a;
            var d, h, k = this.od;
            k.length = b;
            for (b = 0; b < this.$a; b++)
                for (ga(k[b]) && (k[b] = e()), k[b].length = c, d = 0; d < this.rb; d++)
                    for (ga(k[b][d]) && (k[b][d] = e()), k[b][d].length = a, h = 0; h < this.Qb; h++) ga(k[b][d][h]) && (k[b][d][h] = 0)
        }
    };
    d.kz = function() {
        return 0 <= this.xd && this.xd < this.Qc.length ? this.Qc[this.xd] : 0
    };
    d.lz = function() {
        return 0 <= this.xd && this.xd < this.pe.length ? this.pe[this.xd] : 0
    };
    d.mz = function() {
        return 0 <= this.xd && this.xd < this.yg.length ? this.yg[this.xd] :
            0
    };
    n.prototype.An = function(b, c, a) {
        return fc(this.qd(b, 0, 0), c, a)
    };
    n.prototype.lv = function(b, c, a, d) {
        return fc(this.qd(b, c, 0), a, d)
    };
    d.ko = function(b) {
        this.b.$f(b.ra);
        b.bg();
        this.b.Zd(b.ra)
    };
    n.prototype.$u = function(b) {
        var c = this.b.Va().Za;
        this.xd++;
        var a = this.xd;
        a === this.Qc.length ? (this.Qc.push(0), this.pe.push(0), this.yg.push(0)) : (this.Qc[a] = 0, this.pe[a] = 0, this.yg[a] = 0);
        switch (b) {
            case 0:
                for (this.Qc[a] = 0; this.Qc[a] < this.$a; this.Qc[a]++)
                    for (this.pe[a] = 0; this.pe[a] < this.rb; this.pe[a]++)
                        for (this.yg[a] = 0; this.yg[a] <
                            this.Qb; this.yg[a]++) this.ko(c);
                break;
            case 1:
                for (this.Qc[a] = 0; this.Qc[a] < this.$a; this.Qc[a]++)
                    for (this.pe[a] = 0; this.pe[a] < this.rb; this.pe[a]++) this.ko(c);
                break;
            case 2:
                for (this.Qc[a] = 0; this.Qc[a] < this.$a; this.Qc[a]++) this.ko(c)
        }
        this.xd--;
        return !1
    };
    n.prototype.nv = function(b) {
        var c, a, d;
        for (c = 0; c < this.$a; c++)
            for (a = 0; a < this.rb; a++)
                for (d = 0; d < this.Qb; d++)
                    if (this.od[c][a][d] === b) return !0;
        return !1
    };
    p.n = new n;
    h.prototype.Nw = function(b, c, a) {
        this.nf(b, c, a)
    };
    h.prototype.Jn = function(b, c) {
        this.set(b, 0, 0, c)
    };
    h.prototype.Vw =
        function(b, c, a) {
            this.set(b, c, 0, a)
        };
    h.prototype.vw = function(b, c, a) {
        var d = 0,
            h = 0,
            k = 0,
            p = this.od;
        switch (a) {
            case 0:
                0 === b ? (d = p.length, p.push(e())) : (d = 0, p.unshift(e()));
                for (p[d].length = this.rb; h < this.rb; h++)
                    for (p[d][h] = e(), p[d][h].length = this.Qb, k = 0; k < this.Qb; k++) p[d][h][k] = c;
                this.$a++;
                break;
            case 1:
                for (; d < this.$a; d++)
                    for (0 === b ? (h = p[d].length, p[d].push(e())) : (h = 0, p[d].unshift(e())), p[d][h].length = this.Qb, k = 0; k < this.Qb; k++) p[d][h][k] = c;
                this.rb++;
                break;
            case 2:
                for (; d < this.$a; d++)
                    for (h = 0; h < this.rb; h++) 0 === b ? p[d][h].push(c) :
                        p[d][h].unshift(c);
                this.Qb++
        }
    };
    h.prototype.uw = function(b, c) {
        var a = 0,
            d = 0,
            e = this.od;
        switch (c) {
            case 0:
                if (0 === this.$a) break;
                0 === b ? q(e.pop()) : q(e.shift());
                this.$a--;
                break;
            case 1:
                if (0 === this.rb) break;
                for (; a < this.$a; a++) 0 === b ? q(e[a].pop()) : q(e[a].shift());
                this.rb--;
                break;
            case 2:
                if (0 === this.Qb) break;
                for (; a < this.$a; a++)
                    for (d = 0; d < this.rb; d++) 0 === b ? e[a][d].pop() : e[a][d].shift();
                this.Qb--
        }
    };
    p.A = new h;
    r.prototype.nr = function(b) {
        b.la(this.$a)
    };
    r.prototype.Bn = function(b) {
        b.la(this.rb)
    };
    r.prototype.qv = function(b) {
        b.Um(this.qd(this.kz(),
            this.lz(), this.mz()))
    };
    r.prototype.Aq = function(b) {
        b.Ub(this.hz())
    };
    p.P = new r
})();

function tc(e) {
    this.b = e
}
(function() {
    function e(a) {
        a = Math.pow(10, a / 20);
        isFinite(a) || (a = 0);
        0 > a && (a = 0);
        1 < a && (a = 1);
        return a
    }

    function q(a) {
        0 > a && (a = 0);
        1 < a && (a = 1);
        return Math.log(a) / Math.log(10) * 20
    }

    function n(a) {
        a = a.toLowerCase();
        return Z.hasOwnProperty(a) && Z[a].length ? Z[a][0].bd() : D.destination
    }

    function h() {
        return D.createGain ? D.createGain() : D.createGainNode()
    }

    function r(a) {
        return D.createDelay ? D.createDelay(a) : D.createDelayNode(a)
    }

    function p(a, b) {
        a.start ? a.start(b || 0) : a.noteOn(b || 0)
    }

    function d(a, b, c, d) {
        a.start ? a.start(d || 0, b) :
            a.noteGrainOn(d || 0, b, c - b)
    }

    function c(a) {
        try {
            a.stop ? a.stop(0) : a.noteOff(0)
        } catch (b) {}
    }

    function b(a, b, c, d, f, g) {
        this.type = "filter";
        this.lb = [a, b, c, d, f, g];
        this.wa = h();
        this.ca = h();
        this.ca.gain.value = g;
        this.ba = h();
        this.ba.gain.value = 1 - g;
        this.ub = D.createBiquadFilter();
        this.ub.type = "number" === typeof this.ub.type ? a : Oc[a];
        this.ub.frequency.value = b;
        this.ub.detune && (this.ub.detune.value = c);
        this.ub.Q.value = d;
        this.ub.gain.value = f;
        this.wa.connect(this.ub);
        this.wa.connect(this.ba);
        this.ub.connect(this.ca)
    }

    function f(a,
        b, c) {
        this.type = "delay";
        this.lb = [a, b, c];
        this.wa = h();
        this.ca = h();
        this.ca.gain.value = c;
        this.ba = h();
        this.ba.gain.value = 1 - c;
        this.Pj = h();
        this.wd = r(a);
        this.wd.delayTime.value = a;
        this.hl = h();
        this.hl.gain.value = b;
        this.wa.connect(this.Pj);
        this.wa.connect(this.ba);
        this.Pj.connect(this.ca);
        this.Pj.connect(this.wd);
        this.wd.connect(this.hl);
        this.hl.connect(this.Pj)
    }

    function a(a, b, c, d) {
        this.type = "convolve";
        this.lb = [b, c, d];
        this.wa = h();
        this.ca = h();
        this.ca.gain.value = c;
        this.ba = h();
        this.ba.gain.value = 1 - c;
        this.ng = D.createConvolver();
        a && (this.ng.normalize = b, this.ng.buffer = a);
        this.wa.connect(this.ng);
        this.wa.connect(this.ba);
        this.ng.connect(this.ca)
    }

    function g(a, b, c, d, f) {
        this.type = "flanger";
        this.lb = [a, b, c, d, f];
        this.wa = h();
        this.ba = h();
        this.ba.gain.value = 1 - f / 2;
        this.ca = h();
        this.ca.gain.value = f / 2;
        this.ol = h();
        this.ol.gain.value = d;
        this.wd = r(a + b);
        this.wd.delayTime.value = a;
        this.Tb = D.createOscillator();
        this.Tb.frequency.value = c;
        this.Wc = h();
        this.Wc.gain.value = b;
        this.wa.connect(this.wd);
        this.wa.connect(this.ba);
        this.wd.connect(this.ca);
        this.wd.connect(this.ol);
        this.ol.connect(this.wd);
        this.Tb.connect(this.Wc);
        this.Wc.connect(this.wd.delayTime);
        p(this.Tb)
    }

    function l(a, b, c, d, f, g) {
        this.type = "phaser";
        this.lb = [a, b, c, d, f, g];
        this.wa = h();
        this.ba = h();
        this.ba.gain.value = 1 - g / 2;
        this.ca = h();
        this.ca.gain.value = g / 2;
        this.ub = D.createBiquadFilter();
        this.ub.type = "number" === typeof this.ub.type ? 7 : "allpass";
        this.ub.frequency.value = a;
        this.ub.detune && (this.ub.detune.value = b);
        this.ub.Q.value = c;
        this.Tb = D.createOscillator();
        this.Tb.frequency.value = f;
        this.Wc = h();
        this.Wc.gain.value =
            d;
        this.wa.connect(this.ub);
        this.wa.connect(this.ba);
        this.ub.connect(this.ca);
        this.Tb.connect(this.Wc);
        this.Wc.connect(this.ub.frequency);
        p(this.Tb)
    }

    function k(a) {
        this.type = "gain";
        this.lb = [a];
        this.Aa = h();
        this.Aa.gain.value = a
    }

    function t(a, b) {
        this.type = "tremolo";
        this.lb = [a, b];
        this.Aa = h();
        this.Aa.gain.value = 1 - b / 2;
        this.Tb = D.createOscillator();
        this.Tb.frequency.value = a;
        this.Wc = h();
        this.Wc.gain.value = b / 2;
        this.Tb.connect(this.Wc);
        this.Wc.connect(this.Aa.gain);
        p(this.Tb)
    }

    function T(a, b) {
        this.type = "ringmod";
        this.lb = [a, b];
        this.wa = h();
        this.ca = h();
        this.ca.gain.value = b;
        this.ba = h();
        this.ba.gain.value = 1 - b;
        this.ik = h();
        this.ik.gain.value = 0;
        this.Tb = D.createOscillator();
        this.Tb.frequency.value = a;
        this.Tb.connect(this.ik.gain);
        p(this.Tb);
        this.wa.connect(this.ik);
        this.wa.connect(this.ba);
        this.ik.connect(this.ca)
    }

    function v(a, b, c, d, f) {
        this.type = "distortion";
        this.lb = [a, b, c, d, f];
        this.wa = h();
        this.Em = h();
        this.Dm = h();
        this.dB(c, Math.pow(10, d / 20));
        this.ca = h();
        this.ca.gain.value = f;
        this.ba = h();
        this.ba.gain.value = 1 - f;
        this.xn =
            D.createWaveShaper();
        this.fl = new Float32Array(65536);
        this.fz(a, b);
        this.xn.fl = this.fl;
        this.wa.connect(this.Em);
        this.wa.connect(this.ba);
        this.Em.connect(this.xn);
        this.xn.connect(this.Dm);
        this.Dm.connect(this.ca)
    }

    function m(a, b, c, d, f) {
        this.type = "compressor";
        this.lb = [a, b, c, d, f];
        this.Aa = D.createDynamicsCompressor();
        try {
            this.Aa.threshold.value = a, this.Aa.knee.value = b, this.Aa.ratio.value = c, this.Aa.attack.value = d, this.Aa.release.value = f
        } catch (g) {}
    }

    function u(a, b) {
        this.type = "analyser";
        this.lb = [a, b];
        this.Aa =
            D.createAnalyser();
        this.Aa.fftSize = a;
        this.Aa.smoothingTimeConstant = b;
        this.dz = new Float32Array(this.Aa.frequencyBinCount);
        this.wu = new Uint8Array(a);
        this.Yj = 0
    }

    function O() {
        this.Ea = null;
        this.Xl = 0
    }

    function S(a, b) {
        this.src = a;
        this.qa = F;
        this.Ad = b;
        this.Nk = !1;
        var c = this;
        this.vp = this.Ep = null;
        this.ah = [];
        this.Om = 0;
        this.wq = this.ml = this.Du = this.ym = !1;
        1 === F && b && !bb && (this.qa = 0, this.Ep = h());
        this.Je = this.Da = null;
        var d;
        switch (this.qa) {
            case 0:
                this.Da = new Audio;
                this.Da.crossOrigin = "anonymous";
                this.Da.addEventListener("canplaythrough",
                    function() {
                        c.wq = !0
                    });
                1 === F && D.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.Du = !0, this.Da.addEventListener("canplay", function() {
                    c.vp || (c.vp = D.createMediaElementSource(c.Da), c.vp.connect(c.Ep))
                }));
                this.Da.autoplay = !1;
                this.Da.xC = "auto";
                this.Da.src = a;
                break;
            case 1:
                K.sj ? K.$r(a, function(a) {
                    c.Je = a;
                    c.Sr()
                }, function() {
                    c.ml = !0
                }) : (d = new XMLHttpRequest, d.open("GET", a, !0), d.responseType = "arraybuffer", d.onload = function() {
                    c.Je = d.response;
                    c.Sr()
                }, d.onerror = function() {
                    c.ml = !0
                }, d.send());
                break;
            case 2:
                this.Da = !0;
                break;
            case 3:
                this.Da = !0
        }
    }

    function w(a, b) {
        var c = this;
        this.tag = b;
        this.fb = this.re = !0;
        this.src = a.src;
        this.buffer = a;
        this.qa = F;
        this.Ad = a.Ad;
        this.playbackRate = 1;
        this.Lh = !0;
        this.Sc = this.kd = !1;
        this.Jc = 0;
        this.uj = this.Rh = this.ue = !1;
        this.volume = 1;
        this.Cp = function(a) {
            if (!c.Sc && !c.kd) {
                var b = this;
                b || (b = a.target);
                b === c.Lk && (c.Lh = !0, c.fb = !0, X = c.tag, K.trigger(tc.prototype.n.Ik, R))
            }
        };
        this.Lk = null;
        this.Oh = 1 === Q && !this.Ad || 2 === Q;
        this.fi = 1;
        this.startTime = this.Oh ? K.wb.R : K.zf.R;
        this.zb = this.Fb = null;
        this.xe = !1;
        this.cc = null;
        this.Pt = this.Ot = this.Nt = this.Mt = this.Rt = this.Qt = 0;
        this.B = null;
        var d = !1;
        1 !== this.qa || 0 !== this.buffer.qa || this.buffer.Du || (this.qa = 0);
        switch (this.qa) {
            case 0:
                this.Ad ? (this.B = a.Da, d = !a.Nk, a.Nk = !0) : (this.B = new Audio, this.B.crossOrigin = "anonymous", this.B.autoplay = !1, this.B.src = a.Da.src, d = !0);
                d && this.B.addEventListener("ended", function() {
                    X = c.tag;
                    c.fb = !0;
                    K.trigger(tc.prototype.n.Ik, R)
                });
                break;
            case 1:
                this.Fb = h();
                this.Fb.connect(n(b));
                1 === this.buffer.qa ? a.Da && (this.B = D.createBufferSource(),
                    this.B.buffer = a.Da, this.B.connect(this.Fb)) : (this.B = this.buffer.Da, this.buffer.Ep.connect(this.Fb), this.buffer.Nk || (this.buffer.Nk = !0, this.buffer.Da.addEventListener("ended", function() {
                    X = c.tag;
                    c.fb = !0;
                    K.trigger(tc.prototype.n.Ik, R)
                })));
                break;
            case 2:
                this.B = new window.Media(M + this.src, null, null, function(a) {
                    a === window.Media.MEDIA_STOPPED && (c.Lh = !0, c.fb = !0, X = c.tag, K.trigger(tc.prototype.n.Ik, R))
                });
                break;
            case 3:
                this.B = !0
        }
    }

    function U(a) {
        I(Ca);
        if (a.length) {
            var b, c, d;
            b = 0;
            for (c = y.length; b < c; b++) d = y[b], nb(a,
                d.tag) && Ca.push(d)
        } else B && !B.Eg() && (I(Ca), Ca[0] = B)
    }

    function N(a, b) {
        Z.hasOwnProperty(a) ? Z[a].push(b) : Z[a] = [b];
        var c, d, f, g, e = D.destination;
        if (Z.hasOwnProperty(a) && (f = Z[a], f.length))
            for (e = f[0].bd(), c = 0, d = f.length; c < d; c++) g = f[c], c + 1 === d ? g.ud(D.destination) : g.ud(f[c + 1].bd());
        U(a);
        c = 0;
        for (d = Ca.length; c < d; c++) Ca[c].QA(e);
        Ra && Mb === a && (Ra.disconnect(), Ra.connect(e))
    }

    function G() {}

    function z() {}
    var x = tc.prototype;
    x.T = function(a) {
        this.xa = a;
        this.b = a.b
    };
    x.T.prototype.H = function() {};
    var K = null,
        R = null,
        X = "",
        M = "",
        F = 0,
        D = null,
        C = [],
        y = [],
        B = null,
        H = !1,
        Q = 0,
        J = !1,
        E = 1,
        P = 0,
        ka = 0,
        V = !1,
        Ba = 1,
        na = 1,
        Qa = 10,
        Ic = 1E4,
        Kc = 1,
        Ra = null,
        Mb = "",
        cb = !1,
        db = [],
        bb = !1,
        Z = {},
        Oc = "lowpass highpass bandpass lowshelf highshelf peaking notch allpass".split(" ");
    b.prototype.ud = function(a) {
        this.ca.disconnect();
        this.ca.connect(a);
        this.ba.disconnect();
        this.ba.connect(a)
    };
    b.prototype.remove = function() {
        this.wa.disconnect();
        this.ub.disconnect();
        this.ca.disconnect();
        this.ba.disconnect()
    };
    b.prototype.bd = function() {
        return this.wa
    };
    f.prototype.ud = function(a) {
        this.ca.disconnect();
        this.ca.connect(a);
        this.ba.disconnect();
        this.ba.connect(a)
    };
    f.prototype.remove = function() {
        this.wa.disconnect();
        this.Pj.disconnect();
        this.wd.disconnect();
        this.hl.disconnect();
        this.ca.disconnect();
        this.ba.disconnect()
    };
    f.prototype.bd = function() {
        return this.wa
    };
    a.prototype.ud = function(a) {
        this.ca.disconnect();
        this.ca.connect(a);
        this.ba.disconnect();
        this.ba.connect(a)
    };
    a.prototype.remove = function() {
        this.wa.disconnect();
        this.ng.disconnect();
        this.ca.disconnect();
        this.ba.disconnect()
    };
    a.prototype.bd = function() {
        return this.wa
    };
    g.prototype.ud = function(a) {
        this.ba.disconnect();
        this.ba.connect(a);
        this.ca.disconnect();
        this.ca.connect(a)
    };
    g.prototype.remove = function() {
        this.wa.disconnect();
        this.wd.disconnect();
        this.Tb.disconnect();
        this.Wc.disconnect();
        this.ba.disconnect();
        this.ca.disconnect();
        this.ol.disconnect()
    };
    g.prototype.bd = function() {
        return this.wa
    };
    l.prototype.ud = function(a) {
        this.ba.disconnect();
        this.ba.connect(a);
        this.ca.disconnect();
        this.ca.connect(a)
    };
    l.prototype.remove = function() {
        this.wa.disconnect();
        this.ub.disconnect();
        this.Tb.disconnect();
        this.Wc.disconnect();
        this.ba.disconnect();
        this.ca.disconnect()
    };
    l.prototype.bd = function() {
        return this.wa
    };
    k.prototype.ud = function(a) {
        this.Aa.disconnect();
        this.Aa.connect(a)
    };
    k.prototype.remove = function() {
        this.Aa.disconnect()
    };
    k.prototype.bd = function() {
        return this.Aa
    };
    t.prototype.ud = function(a) {
        this.Aa.disconnect();
        this.Aa.connect(a)
    };
    t.prototype.remove = function() {
        this.Tb.disconnect();
        this.Wc.disconnect();
        this.Aa.disconnect()
    };
    t.prototype.bd = function() {
        return this.Aa
    };
    T.prototype.ud =
        function(a) {
            this.ca.disconnect();
            this.ca.connect(a);
            this.ba.disconnect();
            this.ba.connect(a)
        };
    T.prototype.remove = function() {
        this.Tb.disconnect();
        this.ik.disconnect();
        this.wa.disconnect();
        this.ca.disconnect();
        this.ba.disconnect()
    };
    T.prototype.bd = function() {
        return this.wa
    };
    v.prototype.dB = function(a, b) {
        .01 > a && (a = .01);
        this.Em.gain.value = a;
        this.Dm.gain.value = Math.pow(1 / a, .6) * b
    };
    v.prototype.shape = function(a, b, c) {
        var d = 1.05 * c * b - b;
        c = 0 > a ? -1 : 1;
        a = 0 > a ? -a : a;
        b = a < b ? a : b + d * (1 - Math.exp(-(1 / d) * (a - b)));
        return b * c
    };
    v.prototype.fz =
        function(a, b) {
            for (var c = Math.pow(10, a / 20), d = Math.pow(10, b / 20), f = 0, g = 0; 32768 > g; ++g) f = g / 32768, f = this.shape(f, c, d), this.fl[32768 + g] = f, this.fl[32768 - g - 1] = -f
        };
    v.prototype.ud = function(a) {
        this.ca.disconnect();
        this.ca.connect(a);
        this.ba.disconnect();
        this.ba.connect(a)
    };
    v.prototype.remove = function() {
        this.wa.disconnect();
        this.Em.disconnect();
        this.xn.disconnect();
        this.Dm.disconnect();
        this.ca.disconnect();
        this.ba.disconnect()
    };
    v.prototype.bd = function() {
        return this.wa
    };
    m.prototype.ud = function(a) {
        this.Aa.disconnect();
        this.Aa.connect(a)
    };
    m.prototype.remove = function() {
        this.Aa.disconnect()
    };
    m.prototype.bd = function() {
        return this.Aa
    };
    u.prototype.Fa = function() {
        this.Aa.getFloatFrequencyData(this.dz);
        this.Aa.getByteTimeDomainData(this.wu);
        for (var a = this.Aa.fftSize, b = 0, c = this.Yj = 0, d = 0; b < a; b++) d = (this.wu[b] - 128) / 128, 0 > d && (d = -d), this.Yj < d && (this.Yj = d), c += d * d;
        this.Yj = q(this.Yj);
        q(Math.sqrt(c / a))
    };
    u.prototype.ud = function(a) {
        this.Aa.disconnect();
        this.Aa.connect(a)
    };
    u.prototype.remove = function() {
        this.Aa.disconnect()
    };
    u.prototype.bd =
        function() {
            return this.Aa
        };
    O.prototype.qi = function(a) {
        this.Ea = a
    };
    O.prototype.Fl = function() {
        return !!this.Ea
    };
    O.prototype.Fa = function() {};
    var wb = !1;
    S.prototype.RA = function() {
        var a, b, c, d;
        c = a = 0;
        for (b = y.length; a < b; ++a) d = y[a], y[c] = d, d.buffer === this ? d.stop() : ++c;
        y.length = c;
        this.Je = this.Da = null
    };
    S.prototype.Sr = function() {
        if (!this.Da && this.Je) {
            var a = this;
            if (D.decodeAudioData) D.decodeAudioData(this.Je, function(b) {
                a.Da = b;
                a.Je = null;
                var c, d, f;
                if (ga(a.Am) || J) ga(a.bl) || (c = a.bl.ng, c.normalize = a.At, c.buffer = b);
                else if (a.ah.length) {
                    c =
                        0;
                    for (d = a.ah.length; c < d; c++) {
                        b = a.ah[c];
                        f = new w(a, b.hq);
                        f.kk(!0);
                        if ("undefined" !== typeof b.Ct && (b.Ea = K.Te(b.Ct), !b.Ea)) continue;
                        if (b.Ea) {
                            var g = Pa(b.Ea.x, b.Ea.y, -b.Ea.u.bb(), P, ka, !0),
                                e = Pa(b.Ea.x, b.Ea.y, -b.Ea.u.bb(), P, ka, !1);
                            f.Rm(g, e, Ga(b.Ea.q - b.Ea.u.bb()), b.Gl, b.jm, b.nm);
                            f.qi(b.Ea)
                        } else f.Rm(b.x, b.y, b.qx, b.Gl, b.jm, b.nm);
                        f.play(a.rp, a.vq, a.Om);
                        a.ym && f.pause();
                        y.push(f)
                    }
                    I(a.ah)
                } else f = new w(a, a.Am || ""), f.play(a.rp, a.vq, a.Om), a.ym && f.pause(), y.push(f)
            }, function() {
                a.ml = !0
            });
            else if (this.Da = D.createBuffer(this.Je, !1), this.Je = null, ga(this.Am) || J) ga(this.bl) || (b = this.bl.ng, b.normalize = this.At, b.buffer = this.Da);
            else {
                var b = new w(this, this.Am);
                b.play(this.rp, this.vq, this.Om);
                this.ym && b.pause();
                y.push(b)
            }
        }
    };
    S.prototype.Fs = function() {
        switch (this.qa) {
            case 0:
                var a = 4 <= this.Da.readyState;
                a && (this.wq = !0);
                return a || this.wq;
            case 1:
                return !!this.Je || !!this.Da;
            case 2:
                return !0;
            case 3:
                return !0
        }
        return !1
    };
    S.prototype.cA = function() {
        switch (this.qa) {
            case 0:
                return this.Fs();
            case 1:
                return !!this.Da;
            case 2:
                return !0;
            case 3:
                return !0
        }
        return !1
    };
    S.prototype.Qz = function() {
        switch (this.qa) {
            case 0:
                return !!this.Da.error;
            case 1:
                return this.ml
        }
        return !1
    };
    w.prototype.Eg = function() {
        switch (this.qa) {
            case 0:
                return this.B.ended;
            case 1:
                return 1 === this.buffer.qa ? !this.re && !this.fb && this.B.loop || this.Sc ? !1 : this.Lh : this.B.ended;
            case 2:
                return this.Lh;
            case 3:
                !0
        }
        return !0
    };
    w.prototype.Hx = function() {
        return this.re || this.fb ? !0 : this.Eg()
    };
    w.prototype.kk = function(a) {
        1 === F && (!this.xe && a ? this.Fb && (this.zb || (this.zb = D.createPanner(), this.zb.panningModel = "number" === typeof this.zb.panningModel ?
            Ba : ["equalpower", "HRTF", "soundfield"][Ba], this.zb.distanceModel = "number" === typeof this.zb.distanceModel ? na : ["linear", "inverse", "exponential"][na], this.zb.refDistance = Qa, this.zb.maxDistance = Ic, this.zb.rolloffFactor = Kc), this.Fb.disconnect(), this.Fb.connect(this.zb), this.zb.connect(n(this.tag)), this.xe = !0) : this.xe && !a && this.Fb && (this.zb.disconnect(), this.Fb.disconnect(), this.Fb.connect(n(this.tag)), this.xe = !1))
    };
    w.prototype.Rm = function(a, b, c, d, f, g) {
        this.xe && 1 === F && (this.zb.setPosition(a, b, 0), this.zb.setOrientation(Math.cos(L(c)),
            Math.sin(L(c)), 0), this.zb.coneInnerAngle = d, this.zb.coneOuterAngle = f, this.zb.coneOuterGain = g, this.Qt = a, this.Rt = b, this.Mt = c, this.Nt = d, this.Ot = f, this.Pt = g)
    };
    w.prototype.qi = function(a) {
        this.xe && 1 === F && (this.cc || (this.cc = new O), this.cc.qi(a))
    };
    w.prototype.Fa = function(a) {
        if (this.xe && 1 === F && this.cc && this.cc.Fl() && this.Nh()) {
            this.cc.Fa(a);
            a = this.cc.Ea;
            var b = Pa(a.x, a.y, -a.u.bb(), P, ka, !0),
                c = Pa(a.x, a.y, -a.u.bb(), P, ka, !1);
            this.zb.setPosition(b, c, 0);
            b = 0;
            "undefined" !== typeof this.cc.Ea.q && (b = a.q - a.u.bb(), this.zb.setOrientation(Math.cos(b),
                Math.sin(b), 0))
        }
    };
    w.prototype.play = function(a, b, c, f) {
        var g = this.B;
        this.ue = a;
        this.volume = b;
        c = c || 0;
        f = f || 0;
        switch (this.qa) {
            case 0:
                1 !== g.playbackRate && (g.playbackRate = 1);
                g.volume !== b * E && (g.volume = b * E);
                g.loop !== a && (g.loop = a);
                g.muted && (g.muted = !1);
                if (g.currentTime !== c) try {
                    g.currentTime = c
                } catch (e) {}
                if (this.Ad && cb && !K.Rc) db.push(this);
                else try {
                    this.B.play()
                } catch (h) {
                    console && console.log && console.log("[C2] WARNING: exception trying to play audio '" + this.buffer.src + "': ", h)
                }
                break;
            case 1:
                this.muted = !1;
                this.fi =
                    1;
                if (1 === this.buffer.qa) this.Fb.gain.value = b * E, this.re || (this.B = D.createBufferSource(), this.B.buffer = this.buffer.Da, this.B.connect(this.Fb)), this.B.onended = this.Cp, this.Lk = this.B, this.B.loop = a, this.Lh = !1, 0 === c ? p(this.B, f) : d(this.B, c, this.Ag(), f);
                else {
                    1 !== g.playbackRate && (g.playbackRate = 1);
                    g.loop !== a && (g.loop = a);
                    g.volume = b * E;
                    if (g.currentTime !== c) try {
                        g.currentTime = c
                    } catch (k) {}
                    this.Ad && cb && !K.Rc ? db.push(this) : g.play()
                }
                break;
            case 2:
                (!this.re && this.fb || 0 !== c) && g.seekTo(c);
                g.play();
                this.Lh = !1;
                break;
            case 3:
                K.uc ?
                    AppMobi.context.playSound(this.src, a) : AppMobi.player.playSound(this.src, a)
        }
        this.playbackRate = 1;
        this.startTime = (this.Oh ? K.wb.R : K.zf.R) - c;
        this.Sc = this.fb = this.re = !1
    };
    w.prototype.stop = function() {
        switch (this.qa) {
            case 0:
                this.B.paused || this.B.pause();
                break;
            case 1:
                1 === this.buffer.qa ? c(this.B) : this.B.paused || this.B.pause();
                break;
            case 2:
                this.B.stop();
                break;
            case 3:
                K.uc && AppMobi.context.stopSound(this.src)
        }
        this.fb = !0;
        this.Sc = !1
    };
    w.prototype.pause = function() {
        if (!(this.re || this.fb || this.Eg() || this.Sc)) {
            switch (this.qa) {
                case 0:
                    this.B.paused ||
                        this.B.pause();
                    break;
                case 1:
                    1 === this.buffer.qa ? (this.Jc = this.Go(!0), this.ue && (this.Jc = this.Jc % this.Ag()), this.Sc = !0, c(this.B)) : this.B.paused || this.B.pause();
                    break;
                case 2:
                    this.B.pause();
                    break;
                case 3:
                    K.uc && AppMobi.context.stopSound(this.src)
            }
            this.Sc = !0
        }
    };
    w.prototype.VA = function() {
        if (!(this.re || this.fb || this.Eg()) && this.Sc) {
            switch (this.qa) {
                case 0:
                    this.B.play();
                    break;
                case 1:
                    1 === this.buffer.qa ? (this.B = D.createBufferSource(), this.B.buffer = this.buffer.Da, this.B.connect(this.Fb), this.B.onended = this.Cp, this.Lk =
                        this.B, this.B.loop = this.ue, this.Fb.gain.value = E * this.volume * this.fi, this.tn(), this.startTime = (this.Oh ? K.wb.R : K.zf.R) - this.Jc / (this.playbackRate || .001), d(this.B, this.Jc, this.Ag())) : this.B.play();
                    break;
                case 2:
                    this.B.play();
                    break;
                case 3:
                    K.uc && AppMobi.context.resumeSound(this.src)
            }
            this.Sc = !1
        }
    };
    w.prototype.seek = function(a) {
        if (!(this.re || this.fb || this.Eg())) switch (this.qa) {
            case 0:
                try {
                    this.B.currentTime = a
                } catch (b) {}
                break;
            case 1:
                if (1 === this.buffer.qa) this.Sc ? this.Jc = a : (this.pause(), this.Jc = a, this.VA());
                else try {
                    this.B.currentTime =
                        a
                } catch (c) {}
                break;
            case 3:
                K.uc && AppMobi.context.seekSound(this.src, a)
        }
    };
    w.prototype.QA = function(a) {
        1 === this.qa && (this.xe ? (this.zb.disconnect(), this.zb.connect(a)) : (this.Fb.disconnect(), this.Fb.connect(a)))
    };
    w.prototype.Ag = function() {
        var a = 0;
        switch (this.qa) {
            case 0:
                "undefined" !== typeof this.B.duration && (a = this.B.duration);
                break;
            case 1:
                a = this.buffer.Da.duration;
                break;
            case 2:
                a = this.B.getDuration();
                break;
            case 3:
                K.uc && (a = AppMobi.context.getDurationSound(this.src))
        }
        return a
    };
    w.prototype.Go = function(a) {
        var b =
            this.Ag(),
            c = 0;
        switch (this.qa) {
            case 0:
                "undefined" !== typeof this.B.currentTime && (c = this.B.currentTime);
                break;
            case 1:
                if (1 === this.buffer.qa) {
                    if (this.Sc) return this.Jc;
                    c = (this.Oh ? K.wb.R : K.zf.R) - this.startTime
                } else "undefined" !== typeof this.B.currentTime && (c = this.B.currentTime);
                break;
            case 3:
                K.uc && (c = AppMobi.context.getPlaybackTimeSound(this.src))
        }
        a && (c *= this.playbackRate);
        !this.ue && c > b && (c = b);
        return c
    };
    w.prototype.Nh = function() {
        return !this.Sc && !this.re && !this.fb && !this.Eg()
    };
    w.prototype.kB = function() {
        return !this.re &&
            !this.fb && !this.Eg()
    };
    w.prototype.jB = function(a) {
        this.volume = a;
        this.rq()
    };
    w.prototype.rq = function() {
        var a = this.volume * E;
        isFinite(a) || (a = 0);
        switch (this.qa) {
            case 0:
                "undefined" !== typeof this.B.volume && this.B.volume !== a && (this.B.volume = a);
                break;
            case 1:
                1 === this.buffer.qa ? this.Fb.gain.value = a * this.fi : "undefined" !== typeof this.B.volume && this.B.volume !== a && (this.B.volume = a)
        }
    };
    w.prototype.kl = function(a) {
        switch (this.qa) {
            case 0:
                this.B.muted !== !!a && (this.B.muted = !!a);
                break;
            case 1:
                1 === this.buffer.qa ? (this.fi =
                    a ? 0 : 1, this.Fb.gain.value = E * this.volume * this.fi) : this.B.muted !== !!a && (this.B.muted = !!a)
        }
    };
    w.prototype.eB = function() {
        this.Rh = !0;
        this.kl(this.Rh || this.uj)
    };
    w.prototype.Sm = function(a) {
        this.uj = !!a;
        this.kl(this.Rh || this.uj)
    };
    w.prototype.tn = function() {
        var a = this.playbackRate;
        this.Oh && (a *= K.gg);
        switch (this.qa) {
            case 0:
                this.B.playbackRate !== a && (this.B.playbackRate = a);
                break;
            case 1:
                1 === this.buffer.qa ? this.B.playbackRate.value !== a && (this.B.playbackRate.value = a) : this.B.playbackRate !== a && (this.B.playbackRate = a)
        }
    };
    w.prototype.gB = function(a) {
        switch (this.qa) {
            case 0:
                a ? this.Nh() ? (this.kd = !0, this.B.pause()) : this.kd = !1 : this.kd && (this.B.play(), this.kd = !1);
                break;
            case 1:
                a ? this.Nh() ? (this.kd = !0, 1 === this.buffer.qa ? (this.Jc = this.Go(!0), this.ue && (this.Jc = this.Jc % this.Ag()), c(this.B)) : this.B.pause()) : this.kd = !1 : this.kd && (1 === this.buffer.qa ? (this.B = D.createBufferSource(), this.B.buffer = this.buffer.Da, this.B.connect(this.Fb), this.B.onended = this.Cp, this.Lk = this.B, this.B.loop = this.ue, this.Fb.gain.value = E * this.volume * this.fi,
                    this.tn(), this.startTime = (this.Oh ? K.wb.R : K.zf.R) - this.Jc / (this.playbackRate || .001), d(this.B, this.Jc, this.Ag())) : this.B.play(), this.kd = !1);
                break;
            case 2:
                a ? this.Nh() ? (this.B.pause(), this.kd = !0) : this.kd = !1 : this.kd && (this.kd = !1, this.B.play())
        }
    };
    x.M = function(a) {
        function b() {
            if (!V && D.createBuffer) {
                var a = D.createBuffer(1, 220, 22050),
                    c = D.createBufferSource();
                c.buffer = a;
                c.connect(D.destination);
                p(c)
            }
        }
        this.type = a;
        K = this.b = a.b;
        R = this;
        this.Uc = null;
        this.Dj = -600;
        this.b.sj && (bb = !0);
        !(this.b.Uh || this.b.Jl && (this.b.mj ||
            this.b.Kl)) || this.b.Ml || this.b.kb || this.b.Ds || bb || (cb = !0);
        D = null;
        "undefined" !== typeof AudioContext ? (F = 1, D = new AudioContext) : "undefined" !== typeof webkitAudioContext && (F = 1, D = new webkitAudioContext);
        this.b.Uh && D && (D.close && D.close(), "undefined" !== typeof AudioContext ? D = new AudioContext : "undefined" !== typeof webkitAudioContext && (D = new webkitAudioContext));
        cb ? document.addEventListener("touchend", function() {
            !wb && D && (b(), wb = !0);
            var a, c, d;
            if (cb) {
                if (!J)
                    for (a = 0, c = db.length; a < c; ++a) d = db[a], d.fb || d.Sc || d.B.play();
                I(db)
            }
        }, !0) : bb && document.addEventListener("touchend", function() {
            !wb && D && (b(), wb = !0)
        }, !0);
        1 !== F && (this.b.dd && "undefined" !== typeof window.Media ? F = 2 : this.b.Es && (F = 3));
        2 === F && (M = location.href, a = M.lastIndexOf("/"), -1 < a && (M = M.substr(0, a + 1)), M = M.replace("file://", ""));
        if (this.b.dA && this.b.gA && "undefined" === typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.b.ke(this);
        else {
            if (this.b.uc) H = this.b.Jl;
            else try {
                H = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"')
            } catch (c) {
                H = !1
            }
            this.b.fg(this)
        }
    };
    var ya = x.M.prototype;
    ya.H = function() {
        this.b.qh = this;
        Q = this.C[0];
        this.kf = this.C[1];
        this.GA = 0 !== this.C[2];
        this.hi = 0;
        Ba = this.C[3];
        na = this.C[4];
        this.Dj = -this.C[5];
        Qa = this.C[6];
        Ic = this.C[7];
        Kc = this.C[8];
        this.Uc = new O;
        var a = this.b.X || this.b.width,
            b = this.b.W || this.b.height;
        1 === F && (D.listener.setPosition(a / 2, b / 2, this.Dj), D.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function(a, b) {
            Ra && Ra.disconnect();
            Mb = b.toLowerCase();
            Ra = D.createMediaStreamSource(a);
            Ra.connect(n(Mb))
        });
        this.b.wx(function(a) {
            R.BA(a)
        });
        var c = this;
        this.b.Mk(function(a) {
            c.Vj(a)
        })
    };
    ya.Vj = function(a) {
        var b, c, d;
        b = 0;
        for (c = y.length; b < c; b++) d = y[b], d.cc && d.cc.Ea === a && (d.cc.Ea = null, d.xe && d.Nh() && d.ue && d.stop());
        this.Uc.Ea === a && (this.Uc.Ea = null)
    };
    ya.Ma = function() {
        var a = {
                silent: J,
                masterVolume: E,
                listenerZ: this.Dj,
                listenerUid: this.Uc.Fl() ? this.Uc.Ea.uid : -1,
                playing: [],
                effects: {}
            },
            b = a.playing,
            c, d, f, g, e, h;
        c = 0;
        for (d = y.length; c < d; c++) f = y[c], !f.kB() || 3 === this.kf || f.Ad && 1 === this.kf || !f.Ad && 2 === this.kf || (g = f.Go(), f.ue &&
            (g = g % f.Ag()), g = {
                tag: f.tag,
                buffersrc: f.buffer.src,
                is_music: f.Ad,
                playbackTime: g,
                volume: f.volume,
                looping: f.ue,
                muted: f.Rh,
                playbackRate: f.playbackRate,
                paused: f.Sc,
                resume_position: f.Jc
            }, f.xe && (g.pan = {}, h = g.pan, f.cc && f.cc.Fl() ? h.objUid = f.cc.Ea.uid : (h.x = f.Qt, h.y = f.Rt, h.a = f.Mt), h.ia = f.Nt, h.oa = f.Ot, h.og = f.Pt), b.push(g));
        b = a.effects;
        for (e in Z)
            if (Z.hasOwnProperty(e)) {
                f = [];
                c = 0;
                for (d = Z[e].length; c < d; c++) f.push({
                    type: Z[e][c].type,
                    params: Z[e][c].lb
                });
                b[e] = f
            }
        return a
    };
    var eb = [];
    ya.Sa = function(c) {
        var d = c.silent;
        E =
            c.masterVolume;
        this.Dj = c.listenerZ;
        this.Uc.qi(null);
        var e = c.listenerUid; - 1 !== e && (this.Uc.Xl = e, eb.push(this.Uc));
        var e = c.playing,
            h, p, r, n, w, q, U, G, z, x, S;
        if (3 !== this.kf)
            for (h = 0, p = y.length; h < p; h++) z = y[h], z.Ad && 1 === this.kf || (z.Ad || 2 !== this.kf) && z.stop();
        for (w in Z)
            if (Z.hasOwnProperty(w))
                for (h = 0, p = Z[w].length; h < p; h++) Z[w][h].remove();
        Wa(Z);
        for (w in c.effects)
            if (c.effects.hasOwnProperty(w))
                for (q = c.effects[w], h = 0, p = q.length; h < p; h++) switch (r = q[h].type, x = q[h].params, r) {
                    case "filter":
                        N(w, new b(x[0], x[1], x[2],
                            x[3], x[4], x[5]));
                        break;
                    case "delay":
                        N(w, new f(x[0], x[1], x[2]));
                        break;
                    case "convolve":
                        r = x[2];
                        z = this.bj(r, !1);
                        z.Da ? r = new a(z.Da, x[0], x[1], r) : (r = new a(null, x[0], x[1], r), z.At = x[0], z.bl = r);
                        N(w, r);
                        break;
                    case "flanger":
                        N(w, new g(x[0], x[1], x[2], x[3], x[4]));
                        break;
                    case "phaser":
                        N(w, new l(x[0], x[1], x[2], x[3], x[4], x[5]));
                        break;
                    case "gain":
                        N(w, new k(x[0]));
                        break;
                    case "tremolo":
                        N(w, new t(x[0], x[1]));
                        break;
                    case "ringmod":
                        N(w, new T(x[0], x[1]));
                        break;
                    case "distortion":
                        N(w, new v(x[0], x[1], x[2], x[3], x[4]));
                        break;
                    case "compressor":
                        N(w,
                            new m(x[0], x[1], x[2], x[3], x[4]));
                        break;
                    case "analyser":
                        N(w, new u(x[0], x[1]))
                }
        h = 0;
        for (p = e.length; h < p; h++) 3 === this.kf || (c = e[h], r = c.buffersrc, n = c.is_music, w = c.tag, q = c.playbackTime, U = c.looping, G = c.volume, S = (x = c.pan) && x.hasOwnProperty("objUid") ? x.objUid : -1, n && 1 === this.kf) || !n && 2 === this.kf || ((z = this.yl(r, w, n, U, G)) ? (z.Jc = c.resume_position, z.kk(!!x), z.play(U, G, q), z.tn(), z.rq(), z.kl(z.Rh || z.uj), c.paused && z.pause(), c.muted && z.eB(), z.kl(z.Rh || z.uj), x && (-1 !== S ? (z.cc = z.cc || new O, z.cc.Xl = S, eb.push(z.cc)) : z.Rm(x.x,
            x.y, x.a, x.ia, x.oa, x.og))) : (z = this.bj(r, n), z.Om = q, z.ym = c.paused, x && (-1 !== S ? z.ah.push({
            Ct: S,
            Gl: x.ia,
            jm: x.oa,
            nm: x.og,
            hq: w
        }) : z.ah.push({
            x: x.x,
            y: x.y,
            qx: x.a,
            Gl: x.ia,
            jm: x.oa,
            nm: x.og,
            hq: w
        }))));
        if (d && !J) {
            h = 0;
            for (p = y.length; h < p; h++) y[h].Sm(!0);
            J = !0
        } else if (!d && J) {
            h = 0;
            for (p = y.length; h < p; h++) y[h].Sm(!1);
            J = !1
        }
    };
    ya.Md = function() {
        var a, b, c, d;
        a = 0;
        for (b = eb.length; a < b; a++) c = eb[a], d = this.b.Te(c.Xl), c.qi(d), c.Xl = -1, d && (P = d.x, ka = d.y);
        I(eb)
    };
    ya.BA = function(a) {
        if (!this.GA) {
            !a && D && D.resume && (D.resume(), V = !1);
            var b, c;
            b = 0;
            for (c = y.length; b < c; b++) y[b].gB(a);
            a && D && D.suspend && (D.suspend(), V = !0)
        }
    };
    ya.Fa = function() {
        var a = this.b.rg,
            b, c, d;
        b = 0;
        for (c = y.length; b < c; b++) d = y[b], d.Fa(a), 0 !== Q && d.tn();
        var f, g;
        for (f in Z)
            if (Z.hasOwnProperty(f))
                for (d = Z[f], b = 0, c = d.length; b < c; b++) g = d[b], g.Fa && g.Fa();
        1 === F && this.Uc.Fl() && (this.Uc.Fa(a), P = this.Uc.Ea.x, ka = this.Uc.Ea.y, D.listener.setPosition(this.Uc.Ea.x, this.Uc.Ea.y, this.Dj))
    };
    var fb = [];
    ya.fB = function(a) {
        var b, c, d, f, g, e = 0;
        b = 0;
        for (c = a.length; b < c; ++b)
            if (d = a[b], f = d[0], d = 2 * d[1], (g = 4 < f.length &&
                    ".ogg" === f.substr(f.length - 4)) && H || !g && !H) fb.push({
                filename: f,
                size: d,
                Ea: null
            }), e += d;
        return e
    };
    ya.nB = function() {
        var a, b, c, d;
        a = 0;
        for (b = fb.length; a < b; ++a) c = fb[a], d = this.b.$i + c.filename, c.Ea = this.bj(d, !1)
    };
    ya.vz = function() {
        var a = 0,
            b, c, d;
        b = 0;
        for (c = fb.length; b < c; ++b) d = fb[b], d.Ea.cA() || d.Ea.Qz() || this.b.kb || this.b.Kl ? a += d.size : d.Ea.Fs() && (a += Math.floor(d.size / 2));
        return a
    };
    ya.SA = function() {
        var a, b, c, d;
        c = a = 0;
        for (b = C.length; a < b; ++a) d = C[a], C[c] = d, d.Ad ? d.RA() : ++c;
        C.length = c
    };
    ya.bj = function(a, b) {
        var c, d, f, g =
            null;
        c = 0;
        for (d = C.length; c < d; c++)
            if (f = C[c], f.src === a) {
                g = f;
                break
            }
        g || (bb && b && this.SA(), g = new S(a, b), C.push(g));
        return g
    };
    ya.yl = function(a, b, c, d, f) {
        var g, e, h;
        g = 0;
        for (e = y.length; g < e; g++)
            if (h = y[g], h.src === a && (h.Hx() || c)) return h.tag = b, h;
        a = this.bj(a, c);
        if (!a.Da) return "<preload>" !== b && (a.Am = b, a.rp = d, a.vq = f), null;
        h = new w(a, b);
        y.push(h);
        return h
    };
    var Ca = [];
    G.prototype.Ik = function(a) {
        return nb(X, a)
    };
    G.prototype.Mv = function(a) {
        U(a);
        var b;
        a = 0;
        for (b = Ca.length; a < b; a++)
            if (Ca[a].Nh()) return !0;
        return !1
    };
    x.n = new G;
    z.prototype.Play = function(a, b, c, d) {
        !J && (c = e(c), B = this.yl(this.b.$i + a[0] + (H ? ".ogg" : ".m4a"), d, a[1], 0 !== b, c)) && (B.kk(!1), B.play(0 !== b, c, 0, this.hi), this.hi = 0)
    };
    z.prototype.rw = function(a, b, c, d, f, g, h, k) {
        if (!J && d && (d = d.Eo())) {
            c = e(c);
            var p = a[1];
            a = this.b.$i + a[0] + (H ? ".ogg" : ".m4a");
            (B = this.yl(a, k, p, 0 !== b, c)) ? (B.kk(!0), k = Pa(d.x, d.y, -d.u.bb(), P, ka, !0), a = Pa(d.x, d.y, -d.u.bb(), P, ka, !1), B.Rm(k, a, Ga(d.q - d.u.bb()), f, g, e(h)), B.qi(d), B.play(0 !== b, c, 0, this.hi), this.hi = 0) : this.bj(a, p).ah.push({
                Ea: d,
                Gl: f,
                jm: g,
                nm: e(h),
                hq: k
            })
        }
    };
    z.prototype.sw = function(a, b, c, d, f) {
        !J && (d = e(d), B = this.yl(this.b.$i + b.toLowerCase() + (H ? ".ogg" : ".m4a"), f, 1 === a, 0 !== c, d)) && (B.kk(!1), B.play(0 !== c, d, 0, this.hi), this.hi = 0)
    };
    z.prototype.Uw = function(a, b) {
        U(a);
        var c = e(b),
            d, f;
        d = 0;
        for (f = Ca.length; d < f; d++) Ca[d].jB(c)
    };
    z.prototype.mr = function(a) {
        U(a);
        var b;
        a = 0;
        for (b = Ca.length; a < b; a++) Ca[a].stop()
    };
    z.prototype.Mw = function(a) {
        var b;
        2 === a && (a = J ? 1 : 0);
        if (0 === a && !J) {
            a = 0;
            for (b = y.length; a < b; a++) y[a].Sm(!0);
            J = !0
        } else if (1 === a && J) {
            a = 0;
            for (b = y.length; a < b; a++) y[a].Sm(!1);
            J = !1
        }
    };
    z.prototype.Jw = function(a) {
        E = e(a);
        var b;
        a = 0;
        for (b = y.length; a < b; a++) y[a].rq()
    };
    x.A = new z;
    x.P = new function() {}
})();

function rc(e) {
    this.b = e
}
(function() {
    function e() {
        this.name = "";
        this.gk = 0;
        this.lb = []
    }

    function q() {
        c++;
        c === d.length && d.push(new e);
        return d[c]
    }

    function n() {}

    function h() {}

    function r() {}
    var p = rc.prototype;
    p.T = function(b) {
        this.xa = b;
        this.b = b.b
    };
    p.T.prototype.H = function() {};
    p.M = function(b) {
        this.type = b;
        this.b = b.b
    };
    var d = [],
        c = -1;
    p.M.prototype.H = function() {
        var b = this;
        window.c2_callFunction = function(d, a) {
            var g, e, h, p = q();
            p.name = d.toLowerCase();
            p.gk = 0;
            if (a)
                for (p.lb.length = a.length, g = 0, e = a.length; g < e; ++g) h = a[g], p.lb[g] = "number" === typeof h ||
                    "string" === typeof h ? h : "boolean" === typeof h ? h ? 1 : 0 : 0;
            else I(p.lb);
            b.b.trigger(rc.prototype.n.Jk, b, p.name);
            c--;
            return p.gk
        }
    };
    n.prototype.Jk = function(b) {
        var f = 0 > c ? null : d[c];
        return f ? nb(b, f.name) : !1
    };
    n.prototype.jv = function(b, f, a) {
        var g = 0 > c ? null : d[c];
        if (!g) return !1;
        b = A(b);
        return 0 > b || b >= g.lb.length ? !1 : fc(g.lb[b], f, a)
    };
    p.n = new n;
    h.prototype.CallFunction = function(b, d) {
        var a = q();
        a.name = b.toLowerCase();
        a.gk = 0;
        za(a.lb, d);
        this.b.trigger(rc.prototype.n.Jk, this, a.name);
        c--
    };
    p.A = new h;
    r.prototype.mw = function(b,
        f) {
        f = A(f);
        var a = 0 > c ? null : d[c];
        a ? 0 <= f && f < a.lb.length ? b.Um(a.lb[f]) : b.la(0) : b.la(0)
    };
    r.prototype.av = function(b, d) {
        var a = q();
        a.name = d.toLowerCase();
        a.gk = 0;
        I(a.lb);
        var g, e;
        g = 2;
        for (e = arguments.length; g < e; g++) a.lb.push(arguments[g]);
        this.b.trigger(rc.prototype.n.Jk, this, a.name);
        c--;
        b.Um(a.gk)
    };
    p.P = new r
})();

function uc(e) {
    this.b = e
}
(function() {
    function e() {}
    var q = uc.prototype;
    q.T = function(e) {
        this.xa = e;
        this.b = e.b
    };
    q.T.prototype.H = function() {};
    q.M = function(e) {
        this.type = e;
        this.b = e.b;
        this.Xh = Array(256);
        this.zk = Array(256);
        this.vf = 0
    };
    var n = q.M.prototype;
    n.H = function() {
        var e = this;
        this.b.kb || (jQuery(document).keydown(function(h) {
            e.zp(h)
        }), jQuery(document).keyup(function(h) {
            e.Ap(h)
        }))
    };
    var h = [32, 33, 34, 35, 36, 37, 38, 39, 40, 44];
    n.zp = function(e) {
        var p = !1;
        window != window.top && -1 < h.indexOf(e.which) && (e.preventDefault(), p = !0, e.stopPropagation());
        if (this.Xh[e.which]) this.zk[e.which] && !p && e.preventDefault();
        else {
            this.Xh[e.which] = !0;
            this.vf = e.which;
            this.b.Rc = !0;
            this.b.trigger(uc.prototype.n.Sv, this);
            var d = this.b.trigger(uc.prototype.n.Qq, this),
                c = this.b.trigger(uc.prototype.n.fw, this);
            this.b.Rc = !1;
            if (d || c) this.zk[e.which] = !0, p || e.preventDefault()
        }
    };
    n.Ap = function(e) {
        this.Xh[e.which] = !1;
        this.vf = e.which;
        this.b.Rc = !0;
        this.b.trigger(uc.prototype.n.Mq, this);
        var h = this.b.trigger(uc.prototype.n.Cn, this),
            d = this.b.trigger(uc.prototype.n.Rq, this);
        this.b.Rc = !1;
        if (h || d || this.zk[e.which]) this.zk[e.which] = !0, e.preventDefault()
    };
    n.$g = function() {
        var e;
        for (e = 0; 256 > e; ++e)
            if (this.Xh[e]) {
                this.Xh[e] = !1;
                this.vf = e;
                this.b.trigger(uc.prototype.n.Mq, this);
                var h = this.b.trigger(uc.prototype.n.Cn, this),
                    d = this.b.trigger(uc.prototype.n.Rq, this);
                if (h || d) this.zk[e] = !0
            }
    };
    n.Ma = function() {
        return {
            triggerKey: this.vf
        }
    };
    n.Sa = function(e) {
        this.vf = e.triggerKey
    };
    e.prototype.Gv = function(e) {
        return this.Xh[e]
    };
    e.prototype.Qq = function(e) {
        return e === this.vf
    };
    e.prototype.Sv = function() {
        return !0
    };
    e.prototype.Mq = function() {
        return !0
    };
    e.prototype.Cn = function(e) {
        return e === this.vf
    };
    e.prototype.fw = function(e) {
        return e === this.vf
    };
    e.prototype.Rq = function(e) {
        return e === this.vf
    };
    q.n = new e;
    q.A = new function() {};
    q.P = new function() {}
})();

function vc(e) {
    this.b = e
}
(function() {
    function e(e) {
        this.Pa = e;
        this.Xa = !1;
        this.q = this.speed = this.y = this.x = 0;
        this.opacity = 1;
        this.Ff = this.Kh = this.size = this.Dl = 0
    }

    function q() {}
    var n = vc.prototype;
    n.T = function(e) {
        this.xa = e;
        this.b = e.b
    };
    var h = n.T.prototype;
    h.H = function() {
        this.O || (this.L = new Image, this.L.$n = this.kn, this.S = null, this.b.wn(this.L, this.vk))
    };
    h.li = function() {
        this.O || (this.S = null)
    };
    h.Xj = function() {
        this.O || !this.k.length || this.S || (this.S = this.b.F.Uf(this.L, !0, this.b.La, this.ih))
    };
    h.Fj = function() {
        this.O || this.S || !this.b.F ||
            (this.S = this.b.F.Uf(this.L, !0, this.b.La, this.ih))
    };
    h.yk = function() {
        this.O || this.k.length || !this.S || (this.b.F.deleteTexture(this.S), this.S = null)
    };
    h.ak = function(e) {
        e.drawImage(this.L, 0, 0)
    };
    e.prototype.init = function() {
        var e = this.Pa;
        this.x = e.x - e.yn / 2 + Math.random() * e.yn;
        this.y = e.y - e.Hk / 2 + Math.random() * e.Hk;
        this.speed = e.Uo - e.$m / 2 + Math.random() * e.$m;
        this.q = e.q - e.an / 2 + Math.random() * e.an;
        this.opacity = e.So;
        this.size = e.To - e.pk / 2 + Math.random() * e.pk;
        this.Dl = e.Lo - e.El / 2 + Math.random() * e.El;
        this.Ff = this.Kh = 0
    };
    e.prototype.Fa =
        function(e) {
            var d = this.Pa;
            this.x += Math.cos(this.q) * this.speed * e;
            this.y += Math.sin(this.q) * this.speed * e;
            this.y += this.Kh * e;
            this.speed += d.Ob * e;
            this.size += this.Dl * e;
            this.Kh += d.$b * e;
            this.Ff += e;
            1 > this.size ? this.Xa = !1 : (0 !== d.Aj && (this.q += Math.random() * d.Aj * e - d.Aj * e / 2), 0 !== d.Cj && (this.speed += Math.random() * d.Cj * e - d.Cj * e / 2), 0 !== d.Bj && (this.opacity += Math.random() * d.Bj * e - d.Bj * e / 2, 0 > this.opacity ? this.opacity = 0 : 1 < this.opacity && (this.opacity = 1)), 1 >= d.zh && this.Ff >= d.timeout && (this.Xa = !1), 2 === d.zh && 0 >= this.speed &&
                (this.Xa = !1))
        };
    e.prototype.Pc = function(e) {
        var d = this.Pa.opacity * this.opacity;
        if (0 !== d) {
            0 === this.Pa.zh && (d *= 1 - this.Ff / this.Pa.timeout);
            e.globalAlpha = d;
            var d = this.x - this.size / 2,
                c = this.y - this.size / 2;
            this.Pa.b.Gc && (d = d + .5 | 0, c = c + .5 | 0);
            e.drawImage(this.Pa.type.L, d, c, this.size, this.size)
        }
    };
    e.prototype.Yb = function(e) {
        var d = this.Pa.opacity * this.opacity;
        0 === this.Pa.zh && (d *= 1 - this.Ff / this.Pa.timeout);
        var c = this.size,
            b = c * this.Pa.Ut,
            f = this.x - c / 2,
            a = this.y - c / 2;
        this.Pa.b.Gc && (f = f + .5 | 0, a = a + .5 | 0);
        1 > b || 0 === d || (b < e.uA ||
            b > e.sp ? (e.lf(d), e.ni(f, a, f + c, a, f + c, a + c, f, a + c)) : e.HA(this.x, this.y, b, d))
    };
    e.prototype.left = function() {
        return this.x - this.size / 2
    };
    e.prototype.right = function() {
        return this.x + this.size / 2
    };
    e.prototype.top = function() {
        return this.y - this.size / 2
    };
    e.prototype.bottom = function() {
        return this.y + this.size / 2
    };
    n.M = function(e) {
        this.type = e;
        this.b = e.b
    };
    var h = n.M.prototype,
        r = [];
    h.H = function() {
        var e = this.C;
        this.Im = e[0];
        this.an = L(e[1]);
        this.wi = e[2];
        this.cq = !0;
        this.Uo = e[3];
        this.To = e[4];
        this.So = e[5] / 100;
        this.Lo = e[6];
        this.yn =
            e[7];
        this.Hk = e[8];
        this.$m = e[9];
        this.pk = e[10];
        this.El = e[11];
        this.Ob = e[12];
        this.$b = e[13];
        this.Aj = e[14];
        this.Cj = e[15];
        this.Bj = e[16];
        this.zh = e[17];
        this.timeout = e[18];
        this.bh = 0;
        this.Ut = 1;
        this.vm = this.x;
        this.xm = this.y;
        this.wm = this.x;
        this.um = this.y;
        this.xx(function(d) {
            d.Ka.set(d.vm, d.xm, d.wm, d.um);
            d.Vb.vi(d.Ka);
            d.Uk = !1;
            d.tq();
            d.Ru()
        });
        this.Ab || (this.wc = []);
        this.b.fg(this);
        this.type.Fj();
        if (1 === this.wi)
            for (e = 0; e < this.Im; e++) this.On().opacity = 0;
        this.sl = !0
    };
    h.Ma = function() {
        var e = {
                r: this.Im,
                sc: this.an,
                st: this.wi,
                s: this.cq,
                isp: this.Uo,
                isz: this.To,
                io: this.So,
                gr: this.Lo,
                xr: this.yn,
                yr: this.Hk,
                spr: this.$m,
                szr: this.pk,
                grnd: this.El,
                acc: this.Ob,
                g: this.$b,
                lar: this.Aj,
                lsr: this.Cj,
                lor: this.Bj,
                dm: this.zh,
                to: this.timeout,
                pcc: this.bh,
                ft: this.sl,
                p: []
            },
            d, c, b, f = e.p;
        d = 0;
        for (c = this.wc.length; d < c; d++) b = this.wc[d], f.push([b.x, b.y, b.speed, b.q, b.opacity, b.Dl, b.size, b.Kh, b.Ff]);
        return e
    };
    h.Sa = function(e) {
        this.Im = e.r;
        this.an = e.sc;
        this.wi = e.st;
        this.cq = e.s;
        this.Uo = e.isp;
        this.To = e.isz;
        this.So = e.io;
        this.Lo = e.gr;
        this.yn = e.xr;
        this.Hk =
            e.yr;
        this.$m = e.spr;
        this.pk = e.szr;
        this.El = e.grnd;
        this.Ob = e.acc;
        this.$b = e.g;
        this.Aj = e.lar;
        this.Cj = e.lsr;
        this.Bj = e.lor;
        this.zh = e.dm;
        this.timeout = e.to;
        this.bh = e.pcc;
        this.sl = e.ft;
        r.push.apply(r, this.wc);
        I(this.wc);
        var d, c, b, f = e.p;
        e = 0;
        for (d = f.length; e < d; e++) c = this.On(), b = f[e], c.x = b[0], c.y = b[1], c.speed = b[2], c.q = b[3], c.opacity = b[4], c.Dl = b[5], c.size = b[6], c.Kh = b[7], c.Ff = b[8]
    };
    h.Yd = function() {
        r.push.apply(r, this.wc);
        I(this.wc)
    };
    h.On = function() {
        var h;
        r.length ? (h = r.pop(), h.Pa = this) : h = new e(this);
        this.wc.push(h);
        h.Xa = !0;
        return h
    };
    h.Fa = function() {
        var e = this.b.te(this),
            d, c, b, f;
        if (0 === this.wi && this.cq)
            for (this.bh += e * this.Im, c = A(this.bh), this.bh -= c, d = 0; d < c; d++) b = this.On(), b.init();
        this.vm = this.x;
        this.xm = this.y;
        this.wm = this.x;
        this.um = this.y;
        f = d = 0;
        for (c = this.wc.length; d < c; d++) b = this.wc[d], this.wc[f] = b, this.b.Y = !0, 1 === this.wi && this.sl && b.init(), b.Fa(e), b.Xa ? (b.left() < this.vm && (this.vm = b.left()), b.right() > this.wm && (this.wm = b.right()), b.top() < this.xm && (this.xm = b.top()), b.bottom() > this.um && (this.um = b.bottom()), f++) :
            r.push(b);
        xa(this.wc, f);
        this.D();
        this.sl = !1;
        1 === this.wi && 0 === this.wc.length && this.b.ke(this)
    };
    h.Pc = function(e) {
        var d, c, b, f = this.u;
        d = 0;
        for (c = this.wc.length; d < c; d++) b = this.wc[d], b.right() >= f.ya && b.bottom() >= f.za && b.left() <= f.Ja && b.top() <= f.Ia && b.Pc(e)
    };
    h.Yb = function(e) {
        this.Ut = this.u.Dc();
        e.xc(this.type.S);
        var d, c, b, f = this.u;
        d = 0;
        for (c = this.wc.length; d < c; d++) b = this.wc[d], b.right() >= f.ya && b.bottom() >= f.za && b.left() <= f.Ja && b.top() <= f.Ia && b.Yb(e)
    };
    n.n = new function() {};
    q.prototype.Ww = function(e) {
        this.Hk =
            e
    };
    q.prototype.Ow = function(e) {
        this.pk = e
    };
    n.A = new q;
    n.P = new function() {}
})();

function wc(e) {
    this.b = e
}
(function() {
    function e() {}

    function q() {}
    var n = wc.prototype;
    n.T = function(e) {
        this.xa = e;
        this.b = e.b
    };
    n.T.prototype.H = function() {};
    n.M = function(e) {
        this.type = e;
        this.b = e.b
    };
    var h = n.M.prototype;
    h.H = function() {
        this.yq = 0 === this.C[0];
        this.Wu = 0 === this.C[1];
        this.Jx = this.Lx = this.Kx = 0;
        this.Bu = "";
        var e = this;
        this.lr = function(d, c) {
            e.Kx = d.uid;
            e.Lx = c.uid;
            e.b.trigger(wc.prototype.n.jw, e);
            return e.Jx
        }
    };
    h.Ma = function() {
        return {
            xi: this.Wu,
            yi: this.yq
        }
    };
    h.Sa = function(e) {
        this.Wu = e.xi;
        this.yq = e.yi
    };
    n.n = new e;
    e.prototype.jw = function(e) {
        return nb(this.Bu,
            e)
    };
    n.A = new q;
    var r = {};
    q.prototype.lr = function(e, d) {
        if (null == e) alart("Z Sort: Can not find layer");
        else {
            var c = e.k,
                b = r;
            if (null == b) b = {};
            else
                for (var f in b) delete b[f];
            var a = c.length,
                g;
            for (f = 0; f < a; f++) g = c[f], b[g.uid] = g.Ud();
            r = b;
            this.Bu = d;
            c.sort(this.lr);
            f = c.length;
            for (b = 0; b < f; b++) a = c[b], b !== r[a.uid] && e.si(b);
            this.b.Y = !0
        }
    };
    q.prototype.Xw = function(e) {
        this.yq = 0 === e
    };
    q.prototype.qr = function(e, d, c) {
        e != c && (e = this.b.Te(e), c = this.b.Te(c), null != e && null != c && (d = 0 === d, e.u.index !== c.u.index && (e.u.eh(e, !0), e.u = c.u,
            c.u.ph(e, !0)), e.u.ut(e, c, d), e.b.Y = !0))
    };
    n.P = new function() {}
})();

function Y(e) {
    this.b = e
}
(function() {
    function e() {
        if (0 === this.eo.length) {
            var a = document.createElement("canvas");
            a.width = this.width;
            a.height = this.height;
            var b = a.getContext("2d");
            this.Ai ? b.drawImage(this.L, this.ji, this.ki, this.width, this.height, 0, 0, this.width, this.height) : b.drawImage(this.L, 0, 0, this.width, this.height);
            this.eo = a.toDataURL("image/png")
        }
        return this.eo
    }

    function q() {}

    function n(a) {
        a[0] = 0;
        a[1] = 0;
        a[2] = 0;
        k.push(a)
    }

    function h(a, b) {
        return a < b ? "" + a + "," + b : "" + b + "," + a
    }

    function r(a, b, c, d) {
        b = b.uid;
        c = c.uid;
        var e = h(b, c);
        if (a.hasOwnProperty(e)) a[e][2] =
            d;
        else {
            var f = k.length ? k.pop() : [0, 0, 0];
            f[0] = b;
            f[1] = c;
            f[2] = d;
            a[e] = f
        }
    }

    function p(a, b, c) {
        b = h(b.uid, c.uid);
        a.hasOwnProperty(b) && (n(a[b]), delete a[b])
    }

    function d(a, b, c) {
        b = h(b.uid, c.uid);
        if (a.hasOwnProperty(b)) return t = a[b][2], !0;
        t = -2;
        return !1
    }

    function c(a, b, c) {
        if (!a) return !1;
        var d = 0 !== b || 0 !== c,
            e, f, g = !1,
            h, k = this.b.Gh(),
            l = k.type,
            k = k.Il,
            n = a.aa();
        h = this.b.Va().Za.hd;
        n.fa ? (this.Ga(), S.vh(this.Ka), S.offset(b, c), this.b.Bo(this.u, a, S, O), n = O) : n = h ? this.b.$z() && !n.ea.length && n.k.length ? n.k : n.ea : n.k;
        v = a;
        u = l !== a && !k;
        d && (e = this.x, f = this.y, this.x += b, this.y += c, this.D());
        b = 0;
        for (c = n.length; b < c; b++)
            if (h = n[b], this.b.pc(this, h)) {
                g = !0;
                if (k) break;
                l !== a && m.add(h)
            }
        d && (this.x = e, this.y = f, this.D());
        I(O);
        return g
    }

    function b() {}
    var f = Y.prototype;
    f.T = function(a) {
        this.xa = a;
        this.b = a.b
    };
    var a = f.T.prototype;
    a.H = function() {
        if (!this.O) {
            var a, b, c, d, f, g, h, k, m;
            this.Nd = [];
            this.hj = !1;
            a = 0;
            for (b = this.Nc.length; a < b; a++) {
                f = this.Nc[a];
                h = {};
                h.name = f[0];
                h.speed = f[1];
                h.loop = f[2];
                h.Rp = f[3];
                h.Sp = f[4];
                h.Vt = f[5];
                h.ta = f[6];
                h.frames = [];
                c = 0;
                for (d = f[7].length; c <
                    d; c++) g = f[7][c], k = {}, k.vk = g[0], k.kn = g[1], k.ji = g[2], k.ki = g[3], k.width = g[4], k.height = g[5], k.duration = g[6], k.rc = g[7], k.tc = g[8], k.Qo = g[9], k.Bm = g[10], k.Wt = g[11], k.Ai = 0 !== k.width, k.eo = "", k.mC = e, m = {
                    left: 0,
                    top: 0,
                    right: 1,
                    bottom: 1
                }, k.$p = m, k.S = null, (m = this.b.cz(g[0])) ? k.L = m : (k.L = new Image, k.L.Nx = g[0], k.L.$n = g[1], k.L.Fx = null, this.b.wn(k.L, g[0])), h.frames.push(k), this.Nd.push(k);
                this.Nc[a] = h
            }
        }
    };
    a.Pu = function() {
        var a, b, c;
        a = 0;
        for (b = this.k.length; a < b; a++) c = this.k[a], c.dl = c.Pb.S
    };
    a.li = function() {
        if (!this.O) {
            var a,
                b, c;
            a = 0;
            for (b = this.Nd.length; a < b; ++a) c = this.Nd[a], c.L.Fx = null, c.S = null;
            this.hj = !1;
            this.Pu()
        }
    };
    a.Xj = function() {
        if (!this.O && this.k.length) {
            var a, b, c;
            a = 0;
            for (b = this.Nd.length; a < b; ++a) c = this.Nd[a], c.S = this.b.F.Uf(c.L, !1, this.b.La, c.Wt);
            this.Pu()
        }
    };
    a.Fj = function() {
        if (!this.O && !this.hj && this.b.F) {
            var a, b, c;
            a = 0;
            for (b = this.Nd.length; a < b; ++a) c = this.Nd[a], c.S = this.b.F.Uf(c.L, !1, this.b.La, c.Wt);
            this.hj = !0
        }
    };
    a.yk = function() {
        if (!this.O && !this.k.length && this.hj) {
            var a, b, c;
            a = 0;
            for (b = this.Nd.length; a < b; ++a) c = this.Nd[a],
                this.b.F.deleteTexture(c.S), c.S = null;
            this.hj = !1
        }
    };
    var g = [];
    a.ak = function(a) {
        var b, c, d;
        I(g);
        b = 0;
        for (c = this.Nd.length; b < c; ++b) d = this.Nd[b].L, -1 === g.indexOf(d) && (a.drawImage(d, 0, 0), g.push(d))
    };
    f.M = function(a) {
        this.type = a;
        this.b = a.b;
        a = this.type.Nc[0].frames[0].Bm;
        this.Ab ? this.Ha.lk(a) : this.Ha = new hb(a)
    };
    var l = f.M.prototype;
    l.H = function() {
        this.visible = 0 === this.C[0];
        this.ij = this.Kg = !1;
        this.td = 0 !== this.C[3];
        this.Na = this.es(this.C[1]) || this.type.Nc[0];
        this.U = this.C[2];
        0 > this.U && (this.U = 0);
        this.U >= this.Na.frames.length &&
            (this.U = this.Na.frames.length - 1);
        var a = this.Na.frames[this.U];
        this.Ha.lk(a.Bm);
        this.rc = a.rc;
        this.tc = a.tc;
        this.wh = this.Na.speed;
        this.Mf = this.Na.Sp;
        1 === this.type.Nc.length && 1 === this.type.Nc[0].frames.length || 0 === this.wh || (this.b.fg(this), this.Kg = !0);
        this.Ab ? this.Pd.reset() : this.Pd = new ab;
        this.qe = this.Pd.R;
        this.He = !0;
        this.Ie = 0;
        this.jg = !0;
        this.sh = this.Cr = "";
        this.Mr = 0;
        this.Pi = -1;
        this.type.Fj();
        var b, c, d, e, f, g, h, a = 0;
        for (b = this.type.Nc.length; a < b; a++)
            for (e = this.type.Nc[a], c = 0, d = e.frames.length; c < d; c++) f =
                e.frames[c], 0 === f.width && (f.width = f.L.width, f.height = f.L.height), f.Ai && (h = f.L, g = f.$p, g.left = f.ji / h.width, g.top = f.ki / h.height, g.right = (f.ji + f.width) / h.width, g.bottom = (f.ki + f.height) / h.height, 0 === f.ji && 0 === f.ki && f.width === h.width && f.height === h.height && (f.Ai = !1));
        this.Pb = this.Na.frames[this.U];
        this.dl = this.Pb.S
    };
    l.Ma = function() {
        var a = {
            a: this.Na.ta,
            f: this.U,
            cas: this.wh,
            fs: this.qe,
            ar: this.Ie,
            at: this.Pd.R,
            rt: this.Mf
        };
        this.He || (a.ap = this.He);
        this.jg || (a.af = this.jg);
        return a
    };
    l.Sa = function(a) {
        var b = this.gz(a.a);
        b && (this.Na = b);
        this.U = a.f;
        0 > this.U && (this.U = 0);
        this.U >= this.Na.frames.length && (this.U = this.Na.frames.length - 1);
        this.wh = a.cas;
        this.qe = a.fs;
        this.Ie = a.ar;
        this.Pd.reset();
        this.Pd.R = a.at;
        this.He = a.hasOwnProperty("ap") ? a.ap : !0;
        this.jg = a.hasOwnProperty("af") ? a.af : !0;
        a.hasOwnProperty("rt") ? this.Mf = a.rt : this.Mf = this.Na.Sp;
        this.Pb = this.Na.frames[this.U];
        this.dl = this.Pb.S;
        this.Ha.lk(this.Pb.Bm);
        this.rc = this.Pb.rc;
        this.tc = this.Pb.tc
    };
    l.Qn = function(a) {
        this.U = a ? 0 : this.Na.frames.length - 1;
        this.He = !1;
        this.Cr = this.Na.name;
        this.ij = !0;
        this.b.trigger(Y.prototype.n.Rv, this);
        this.b.trigger(Y.prototype.n.Lq, this);
        this.ij = !1;
        this.Ie = 0
    };
    l.Ni = function() {
        return this.Pd.R
    };
    l.Fa = function() {
        this.Pd.add(this.b.te(this));
        this.sh.length && this.Tr();
        0 <= this.Pi && this.jo();
        var a = this.Pd.R,
            b = this.Na,
            c = b.frames[this.U],
            d = c.duration / this.wh;
        this.He && a >= this.qe + d && (this.jg ? this.U++ : this.U--, this.qe += d, this.U >= b.frames.length && (b.Vt ? (this.jg = !1, this.U = b.frames.length - 2) : b.loop ? this.U = this.Mf : (this.Ie++, this.Ie >= b.Rp ? this.Qn(!1) : this.U = this.Mf)),
            0 > this.U && (b.Vt ? (this.U = 1, this.jg = !0, b.loop || (this.Ie++, this.Ie >= b.Rp && this.Qn(!0))) : b.loop ? this.U = this.Mf : (this.Ie++, this.Ie >= b.Rp ? this.Qn(!0) : this.U = this.Mf)), 0 > this.U ? this.U = 0 : this.U >= b.frames.length && (this.U = b.frames.length - 1), a > this.qe + b.frames[this.U].duration / this.wh && (this.qe = a), a = b.frames[this.U], this.oh(c, a), this.b.Y = !0)
    };
    l.es = function(a) {
        var b, c, d;
        b = 0;
        for (c = this.type.Nc.length; b < c; b++)
            if (d = this.type.Nc[b], nb(d.name, a)) return d;
        return null
    };
    l.gz = function(a) {
        var b, c, d;
        b = 0;
        for (c = this.type.Nc.length; b <
            c; b++)
            if (d = this.type.Nc[b], d.ta === a) return d;
        return null
    };
    l.Tr = function() {
        var a = this.Na.frames[this.U],
            b = this.es(this.sh);
        this.sh = "";
        !b || nb(b.name, this.Na.name) && this.He || (this.Na = b, this.wh = b.speed, this.Mf = b.Sp, 0 > this.U && (this.U = 0), this.U >= this.Na.frames.length && (this.U = this.Na.frames.length - 1), 1 === this.Mr && (this.U = 0), this.He = !0, this.qe = this.Pd.R, this.jg = !0, this.oh(a, this.Na.frames[this.U]), this.b.Y = !0)
    };
    l.jo = function() {
        var a = this.Na.frames[this.U],
            b = this.U;
        this.U = A(this.Pi);
        0 > this.U && (this.U = 0);
        this.U >= this.Na.frames.length && (this.U = this.Na.frames.length - 1);
        b !== this.U && (this.oh(a, this.Na.frames[this.U]), this.qe = this.Pd.R, this.b.Y = !0);
        this.Pi = -1
    };
    l.oh = function(a, b) {
        var c = a.width,
            d = a.height,
            e = b.width,
            f = b.height;
        c != e && (this.width *= e / c);
        d != f && (this.height *= f / d);
        this.rc = b.rc;
        this.tc = b.tc;
        this.Ha.lk(b.Bm);
        this.D();
        this.Pb = b;
        this.dl = b.S;
        c = 0;
        for (d = this.Z.length; c < d; c++) e = this.Z[c], e.It && e.It(a, b);
        this.b.trigger(Y.prototype.n.oh, this)
    };
    l.Pc = function(a) {
        a.globalAlpha = this.opacity;
        var b = this.Pb,
            c =
            b.Ai,
            d = b.L,
            e = this.x,
            f = this.y,
            g = this.width,
            h = this.height;
        if (0 === this.q && 0 <= g && 0 <= h) e -= this.rc * g, f -= this.tc * h, this.b.Gc && (e = Math.round(e), f = Math.round(f)), c ? a.drawImage(d, b.ji, b.ki, b.width, b.height, e, f, g, h) : a.drawImage(d, e, f, g, h);
        else {
            this.b.Gc && (e = Math.round(e), f = Math.round(f));
            a.save();
            var k = 0 < g ? 1 : -1,
                m = 0 < h ? 1 : -1;
            a.translate(e, f);
            1 === k && 1 === m || a.scale(k, m);
            a.rotate(this.q * k * m);
            e = 0 - this.rc * ma(g);
            f = 0 - this.tc * ma(h);
            c ? a.drawImage(d, b.ji, b.ki, b.width, b.height, e, f, ma(g), ma(h)) : a.drawImage(d, e, f, ma(g), ma(h));
            a.restore()
        }
    };
    l.qg = function(a) {
        this.Yb(a)
    };
    l.Yb = function(a) {
        a.xc(this.dl);
        a.lf(this.opacity);
        var b = this.Pb,
            c = this.Vb;
        if (this.b.Gc) {
            var d = Math.round(this.x) - this.x,
                e = Math.round(this.y) - this.y;
            b.Ai ? a.de(c.Qa + d, c.Ra + e, c.ob + d, c.pb + e, c.ib + d, c.jb + e, c.gb + d, c.hb + e, b.$p) : a.ni(c.Qa + d, c.Ra + e, c.ob + d, c.pb + e, c.ib + d, c.jb + e, c.gb + d, c.hb + e)
        } else b.Ai ? a.de(c.Qa, c.Ra, c.ob, c.pb, c.ib, c.jb, c.gb, c.hb, b.$p) : a.ni(c.Qa, c.Ra, c.ob, c.pb, c.ib, c.jb, c.gb, c.hb)
    };
    l.oz = function(a) {
        var b = this.Pb,
            c, d;
        c = 0;
        for (d = b.Qo.length; c < d; c++)
            if (nb(a,
                    b.Qo[c][0])) return c;
        return -1
    };
    l.cj = function(a, b) {
        var c = this.Pb,
            d = c.Qo,
            e;
        ia(a) ? e = this.oz(a) : e = a - 1;
        e = A(e);
        if (0 > e || e >= d.length) return b ? this.x : this.y;
        var f = (d[e][1] - c.rc) * this.width,
            d = d[e][2],
            d = (d - c.tc) * this.height,
            c = Math.cos(this.q);
        e = Math.sin(this.q);
        var g = f * c - d * e,
            d = d * c + f * e,
            f = g + this.x,
            d = d + this.y;
        return b ? f : d
    };
    var k = [],
        t = -2,
        T = [];
    q.prototype.Uv = function(a) {
        if (!a) return !1;
        var b = this.b,
            c = b.Gh(),
            e = c.type,
            f = null;
        c.N.collmemory ? f = c.N.collmemory : (f = {}, c.N.collmemory = f);
        c.N.spriteCreatedDestroyCallback || (c.N.spriteCreatedDestroyCallback = !0, b.Mk(function(a) {
            var b = c.N.collmemory;
            a = a.uid;
            var d, e;
            for (d in b) b.hasOwnProperty(d) && (e = b[d], e[0] === a || e[1] === a) && (n(b[d]), delete b[d])
        }));
        var g = e.aa(),
            h = a.aa(),
            g = g.qc(),
            k, m, l, v, q, u, O, S = this.b.Jd,
            H = S - 1,
            Q = b.Va().Za;
        for (m = 0; m < g.length; m++) {
            l = g[m];
            h.fa ? (l.Ga(), this.b.Bo(l.u, a, l.Ka, T), k = T) : k = h.qc();
            for (v = 0; v < k.length; v++) q = k[v], b.pc(l, q) || b.Ix(l, q) ? (u = d(f, l, q), u = !u || t < H, r(f, l, q, S), u && (b.$f(Q.ra), u = e.aa(), O = a.aa(), u.fa = !1, O.fa = !1, e === a ? (u.k.length = 2, u.k[0] = l, u.k[1] = q, e.Yc()) : (u.k.length = 1, O.k.length =
                1, u.k[0] = l, O.k[0] = q, e.Yc(), a.Yc()), Q.bg(), b.Zd(Q.ra))) : p(f, l, q);
            I(T)
        }
        return !1
    };
    var v = null,
        m = new ca,
        u = !1,
        O = [],
        S = new ta(0, 0, 0, 0);
    a.finish = function(a) {
        if (u) {
            if (a) {
                var b = this.b.Va().Za.hd;
                a = v.aa();
                var c = m.xf(),
                    d, e;
                if (a.fa) {
                    a.fa = !1;
                    I(a.k);
                    d = 0;
                    for (e = c.length; d < e; ++d) a.k[d] = c[d];
                    if (b)
                        for (I(a.ea), d = 0, e = v.k.length; d < e; ++d) c = v.k[d], m.contains(c) || a.ea.push(c)
                } else if (b)
                    for (b = a.k.length, d = 0, e = c.length; d < e; ++d) a.k[b + d] = c[d], Ea(a.ea, c[d]);
                else za(a.k, c);
                v.Yc()
            }
            m.clear();
            u = !1
        }
    };
    q.prototype.Kv = function(a) {
        return c.call(this,
            a, 0, 0)
    };
    q.prototype.Lv = function(a, b, d) {
        return c.call(this, a, b, d)
    };
    q.prototype.yv = function(a) {
        return this.sh.length ? nb(this.sh, a) : nb(this.Na.name, a)
    };
    q.prototype.Lq = function(a) {
        return nb(this.Cr, a)
    };
    q.prototype.Rv = function() {
        return !0
    };
    q.prototype.oh = function() {
        return !0
    };
    q.prototype.Hv = function() {
        return 0 > this.width
    };
    f.n = new q;
    b.prototype.$w = function(a, b, c) {
        if (a && b && (b = this.b.ao(a, b, this.cj(c, !0), this.cj(c, !1)))) {
            "undefined" !== typeof b.q && (b.q = this.q, b.D());
            this.b.ed++;
            var d, e, f;
            this.b.trigger(Object.getPrototypeOf(a.xa).n.ig,
                b);
            if (b.lc)
                for (d = 0, e = b.siblings.length; d < e; d++) f = b.siblings[d], this.b.trigger(Object.getPrototypeOf(f.type.xa).n.ig, f);
            this.b.ed--;
            d = this.b.jz();
            c = !1;
            if (ga(d.N.Spawn_LastExec) || d.N.Spawn_LastExec < this.b.wg) c = !0, d.N.Spawn_LastExec = this.b.wg;
            if (a != this.type && (a = a.aa(), a.fa = !1, c ? (I(a.k), a.k[0] = b) : a.k.push(b), b.lc))
                for (d = 0, e = b.siblings.length; d < e; d++) f = b.siblings[d], a = f.type.aa(), a.fa = !1, c ? (I(a.k), a.k[0] = f) : a.k.push(f)
        }
    };
    b.prototype.gx = function() {
        this.He = !1
    };
    b.prototype.bx = function(a) {
        this.He = !0;
        this.qe =
            this.Pd.R;
        1 === a && 0 !== this.U && (this.Pi = 0, this.ij || this.jo());
        this.Kg || (this.b.fg(this), this.Kg = !0)
    };
    b.prototype.zw = function(a, b) {
        this.sh = a;
        this.Mr = b;
        this.Kg || (this.b.fg(this), this.Kg = !0);
        this.ij || this.Tr()
    };
    b.prototype.Aw = function(a) {
        this.Pi = a;
        this.Kg || (this.b.fg(this), this.Kg = !0);
        this.ij || this.jo()
    };
    b.prototype.Kw = function(a) {
        a = ma(this.width) * (0 === a ? -1 : 1);
        this.width !== a && (this.width = a, this.D())
    };
    b.prototype.Fw = function(a) {
        a = ma(this.height) * (0 === a ? -1 : 1);
        this.height !== a && (this.height = a, this.D())
    };
    b.prototype.ir =
        function(a) {
            var b = this.Pb,
                c = b.width * a * (0 > this.width ? -1 : 1);
            a = b.height * a * (0 > this.height ? -1 : 1);
            if (this.width !== c || this.height !== a) this.width = c, this.height = a, this.D()
        };
    b.prototype.Bw = function(a) {
        this.td !== (0 !== a) && ((this.td = 0 !== a) ? this.D() : (this.sd.right >= this.sd.left && this.type.Qi.update(this, this.sd, null), this.sd.set(0, 0, -1, -1)))
    };
    f.A = new b;
    f.P = new function() {}
})();

function xc(e) {
    this.b = e
}
(function() {
    function e(a, b) {
        return a.length ? a.pop() : new b
    }

    function q(a, c, d) {
        if (d) {
            var e;
            d = 0;
            for (e = c.length; d < e; d++) a.length < b && a.push(c[d]);
            I(c)
        } else
            for (e in c) Object.prototype.hasOwnProperty.call(c, e) && (a.length < b && a.push(c[e]), delete c[e])
    }

    function n(a, b, c) {
        var d = a.vc;
        c = c.replace(/\s\s*$/, "");
        b >= d.length && d.push(e(f, Object));
        b = d[b];
        b.text = c;
        b.width = a.up(c);
        a.tf = oa(a.tf, b.width)
    }

    function h() {}

    function r() {}

    function p() {}
    var d = xc.prototype;
    d.H = function() {};
    d.T = function(a) {
        this.xa = a;
        this.b = a.b
    };
    var c =
        d.T.prototype;
    c.H = function() {
        this.O || (this.L = new Image, this.b.wn(this.L, this.vk), this.S = null)
    };
    c.li = function() {
        this.O || (this.S = null)
    };
    c.Xj = function() {
        if (!this.O && this.k.length) {
            this.S || (this.S = this.b.F.Uf(this.L, !1, this.b.La, this.ih));
            var a, b;
            a = 0;
            for (b = this.k.length; a < b; a++) this.k[a].S = this.S
        }
    };
    c.yk = function() {
        this.O || this.k.length || !this.S || (this.b.F.deleteTexture(this.S), this.S = null)
    };
    c.ak = function(a) {
        a.drawImage(this.L, 0, 0)
    };
    d.M = function(a) {
        this.type = a;
        this.b = a.b
    };
    c = d.M.prototype;
    c.Yd = function() {
        q(f,
            this.vc, !0);
        q(a, this.Zk, !1);
        q(g, this.$k, !1);
        Wa(this.Jf)
    };
    c.H = function() {
        this.L = this.type.L;
        this.Yk = this.C[0];
        this.If = this.C[1];
        this.characterSet = this.C[2];
        this.text = this.C[3];
        this.me = this.C[4];
        this.visible = 0 === this.C[5];
        this.Ue = this.C[6] / 2;
        this.wf = this.C[7] / 2;
        this.Gk = 0 === this.C[9];
        this.uh = this.C[10];
        this.lineHeight = this.C[11];
        this.Ee = this.tf = 0;
        this.Ab ? (I(this.vc), Wa(this.Zk), Wa(this.$k), Wa(this.Jf)) : (this.vc = [], this.Zk = {}, this.$k = {}, this.Jf = {});
        this.Xc = !0;
        this.Sg = this.width;
        this.b.F && (this.type.S ||
            (this.type.S = this.b.F.Uf(this.type.L, !1, this.b.La, this.type.ih)), this.S = this.type.S);
        this.ax()
    };
    c.Ma = function() {
        var a = {
                t: this.text,
                csc: this.me,
                csp: this.uh,
                lh: this.lineHeight,
                tw: this.tf,
                th: this.Ee,
                lrt: this.Rg,
                ha: this.Ue,
                va: this.wf,
                cw: {}
            },
            b;
        for (b in this.Jf) a.cw[b] = this.Jf[b];
        return a
    };
    c.Sa = function(a) {
        this.text = a.t;
        this.me = a.csc;
        this.uh = a.csp;
        this.lineHeight = a.lh;
        this.tf = a.tw;
        this.Ee = a.th;
        this.Rg = a.lrt;
        a.hasOwnProperty("ha") && (this.Ue = a.ha);
        a.hasOwnProperty("va") && (this.wf = a.va);
        for (var b in a.cw) this.Jf[b] =
            a.cw[b];
        this.Xc = !0;
        this.Sg = this.width
    };
    var b = 1E3,
        f = [],
        a = [],
        g = [];
    c.ax = function() {
        for (var b = this.L, c = b.width, d = b.height, b = this.Yk, f = this.If, h = b / c, k = f / d, l = this.characterSet, c = Math.floor(c / b), d = Math.floor(d / f), n = 0; n < l.length && !(n >= c * d); n++) {
            var r = n % c,
                p = Math.floor(n / c),
                q = l.charAt(n);
            if (this.b.F) {
                var z = this.$k,
                    x = r * h,
                    K = p * k,
                    r = (r + 1) * h,
                    p = (p + 1) * k;
                void 0 === z[q] && (z[q] = e(g, ta));
                z[q].left = x;
                z[q].top = K;
                z[q].right = r;
                z[q].bottom = p
            } else z = this.Zk, r = r * b, p = p * f, x = b, K = f, void 0 === z[q] && (z[q] = e(a, Object)), z[q].x = r, z[q].y =
                p, z[q].Uu = x, z[q].rs = K
        }
    };
    var l = [];
    d.Kn = function(a) {
        I(l);
        for (var b = "", c, d = 0; d < a.length;)
            if (c = a.charAt(d), "\n" === c) b.length && (l.push(b), b = ""), l.push("\n"), ++d;
            else if (" " === c || "\t" === c || "-" === c) {
            do b += a.charAt(d), d++; while (d < a.length && (" " === a.charAt(d) || "\t" === a.charAt(d)));
            l.push(b);
            b = ""
        } else d < a.length && (b += c, d++);
        b.length && l.push(b)
    };
    d.Ln = function(a) {
        var b = a.text,
            c = a.vc;
        if (b && b.length) {
            var d = a.width;
            if (2 >= d) q(f, c, !0);
            else {
                var g = a.me,
                    h = a.uh;
                if (b.length * (a.Yk * g + h) - h <= d && -1 === b.indexOf("\n") && (h = a.up(b),
                        h <= d)) {
                    q(f, c, !0);
                    c.push(e(f, Object));
                    c[0].text = b;
                    c[0].width = h;
                    a.tf = h;
                    a.Ee = a.If * g + a.lineHeight;
                    return
                }
                this.Mn(a);
                a.Ee = c.length * (a.If * g + a.lineHeight)
            }
        } else q(f, c, !0)
    };
    d.Mn = function(a) {
        var c = a.Gk,
            d = a.text,
            e = a.vc,
            g = a.width;
        c && (this.Kn(d), d = l);
        var h = "",
            k, r, p, q = 0,
            G = !1;
        for (p = 0; p < d.length; p++) "\n" === d[p] ? (!0 === G ? G = !1 : (n(a, q, h), q++), h = "") : (G = !1, k = h, h += d[p], r = a.up(h.replace(/\s\s*$/, "")), r > g && ("" === k ? (n(a, q, h), h = "", G = !0) : (n(a, q, k), h = d[p]), q++, c || " " !== h || (h = "")));
        h.replace(/\s\s*$/, "").length && (n(a, q, h), q++);
        for (p = q; p < e.length; p++) f.length < b && f.push(e[p]);
        e.length = q
    };
    c.up = function(a) {
        for (var b = this.uh, c = a.length, d = 0, e = 0; e < c; e++) d += this.Ao(a.charAt(e)) * this.me + b;
        return d - (0 < d ? b : 0)
    };
    c.Ao = function(a) {
        var b = this.Jf;
        return void 0 !== b[a] ? b[a] : this.Yk
    };
    c.eu = function() {
        if (this.Xc || this.width !== this.Sg) this.Ee = this.tf = 0, this.type.xa.Ln(this), this.Xc = !1, this.Sg = this.width
    };
    c.Pc = function(a) {
        var b = this.L;
        if ("" !== this.text && null != b && (this.eu(), !(this.height < this.If * this.me + this.lineHeight))) {
            a.globalAlpha = this.opacity;
            var b = this.x,
                c = this.y;
            this.b.Gc && (b = Math.round(b), c = Math.round(c));
            var d = this.u.ya,
                e = this.u.za,
                f = this.u.Ja,
                g = this.u.Ia;
            a.save();
            a.translate(b, c);
            a.rotate(this.q);
            for (var h = this.q, k = this.Ue, l = this.me, n = this.If * l, r = this.lineHeight, p = this.uh, q = this.vc, R, X = -(this.rc * this.width), M = -(this.tc * this.height), M = M + this.wf * oa(0, this.height - this.Ee), F, D, C, y = 0; y < q.length; y++) {
                var B = q[y].text;
                R = k * oa(0, this.width - q[y].width);
                F = X + R;
                M += r;
                if (0 === h && c + M + n < e) M += n;
                else {
                    for (var H = 0; H < B.length; H++) {
                        D = B.charAt(H);
                        R = this.Ao(D);
                        var Q = this.Zk[D];
                        if (0 === h && b + F + R * l + p < d) F += R * l + p;
                        else {
                            if (F + R * l > this.width + 1E-5) break;
                            void 0 !== Q && (D = F, C = M, 0 === h && 1 === l && (D = Math.round(D), C = Math.round(C)), a.drawImage(this.L, Q.x, Q.y, Q.Uu, Q.rs, D, C, Q.Uu * l, Q.rs * l));
                            F += R * l + p;
                            if (0 === h && b + F > f) break
                        }
                    }
                    M += n;
                    if (0 === h && (M + n + r > this.height || c + M > g)) break
                }
            }
            a.restore()
        }
    };
    var k = new ua;
    c.Yb = function(a) {
        a.xc(this.S);
        a.lf(this.opacity);
        if (this.text && (this.eu(), !(this.height < this.If * this.me + this.lineHeight))) {
            this.Ga();
            var b = this.Vb,
                c = 0,
                d = 0;
            this.b.Gc && (c = Math.round(this.x) -
                this.x, d = Math.round(this.y) - this.y);
            var e = this.u.ya,
                f = this.u.za,
                g = this.u.Ja,
                h = this.u.Ia,
                l = this.q,
                n = this.Ue,
                r = this.wf,
                p = this.me,
                q = this.If * p,
                K = this.lineHeight,
                R = this.uh,
                X = this.vc,
                M = this.Ee,
                F, D, C;
            0 !== l && (D = Math.cos(l), C = Math.sin(l));
            for (var c = b.Qa + c, b = b.Ra + d, y, r = r * oa(0, this.height - M), B, H, M = 0; M < X.length; M++)
                if (d = X[M].text, y = F = n * oa(0, this.width - X[M].width), r += K, 0 === l && b + r + q < f) r += q;
                else {
                    for (var Q = 0; Q < d.length; Q++) {
                        var J = d.charAt(Q);
                        F = this.Ao(J);
                        J = this.$k[J];
                        if (0 === l && c + y + F * p + R < e) y += F * p + R;
                        else {
                            if (y + F * p >
                                this.width + 1E-5) break;
                            if (void 0 !== J) {
                                var E = this.Yk * p,
                                    P = this.If * p;
                                B = y;
                                H = r;
                                0 === l && 1 === p && (B = Math.round(B), H = Math.round(H));
                                k.Qa = B;
                                k.Ra = H;
                                k.ob = B + E;
                                k.pb = H;
                                k.gb = B;
                                k.hb = H + P;
                                k.ib = B + E;
                                k.jb = H + P;
                                0 !== l && (B = k, H = D, E = C, P = void 0, P = B.Qa * H - B.Ra * E, B.Ra = B.Ra * H + B.Qa * E, B.Qa = P, P = B.ob * H - B.pb * E, B.pb = B.pb * H + B.ob * E, B.ob = P, P = B.gb * H - B.hb * E, B.hb = B.hb * H + B.gb * E, B.gb = P, P = B.ib * H - B.jb * E, B.jb = B.jb * H + B.ib * E, B.ib = P);
                                k.offset(c, b);
                                a.de(k.Qa, k.Ra, k.ob, k.pb, k.ib, k.jb, k.gb, k.hb, J)
                            }
                            y += F * p + R;
                            if (0 === l && c + y > g) break
                        }
                    }
                    r += q;
                    if (0 === l && (r + q + K > this.height ||
                            b + r > h)) break
                }
        }
    };
    h.prototype.Cq = function(a, b) {
        return b ? this.text == a : nb(this.text, a)
    };
    d.n = new h;
    r.prototype.Hn = function(a) {
        ha(a) && 1E9 > a && (a = Math.round(1E10 * a) / 1E10);
        a = a.toString();
        this.text !== a && (this.text = a, this.Xc = !0, this.b.Y = !0)
    };
    r.prototype.ir = function(a) {
        a !== this.me && (this.me = a, this.Xc = !0, this.b.Y = !0)
    };
    c.Ni = function(a, b) {
        var c = parseInt(b, 10);
        this.Jf[a] !== c && (this.Jf[a] = c, this.Xc = !0, this.b.Y = !0)
    };
    d.A = new r;
    p.prototype.Text = function(a) {
        a.Ub(this.text)
    };
    d.P = new p
})();

function yc(e) {
    this.b = e
}
(function() {
    function e() {
        return f.length ? f.pop() : {}
    }

    function q(a) {
        var b, c;
        b = 0;
        for (c = a.length; b < c; b++) f.push(a[b]);
        I(a)
    }

    function n(a) {
        return a.length && " " === a.charAt(a.length - 1) ? a.substring(0, a.length - 1) : a
    }

    function h() {}

    function r() {}

    function p() {}
    var d = yc.prototype;
    d.H = function() {
        d.A.jr = function(a) {
            this.width !== a && (this.width = a, this.Xc = !0, this.D())
        }
    };
    d.T = function(a) {
        this.xa = a;
        this.b = a.b
    };
    var c = d.T.prototype;
    c.H = function() {};
    c.li = function() {
        if (!this.O) {
            var a, b, c;
            a = 0;
            for (b = this.k.length; a < b; a++) c = this.k[a],
                c.we = null, c.Yg = null, c.Vc = null
        }
    };
    d.M = function(a) {
        this.type = a;
        this.b = a.b;
        this.Ab ? I(this.vc) : this.vc = [];
        this.Xc = !0
    };
    c = d.M.prototype;
    c.H = function() {
        this.text = this.C[0];
        this.visible = 0 === this.C[1];
        this.font = this.C[2];
        this.color = this.C[3];
        this.Ue = this.C[4];
        this.wf = this.C[5];
        this.Gk = 0 === this.C[7];
        this.Sg = this.Sl = this.width;
        this.Rl = this.height;
        this.jp = this.C[8];
        this.ul = this.Bh = "";
        this.Ee = this.tf = this.ck = 0;
        this.EA();
        this.Vc = this.Yg = this.we = null;
        this.yt = !1;
        this.Rg = this.b.Jd;
        this.Ab ? this.ag.set(0, 0, 1, 1) : this.ag =
            new ta(0, 0, 1, 1);
        this.b.F && this.b.fg(this)
    };
    c.EA = function() {
        var a = this.font.split(" "),
            b;
        for (b = 0; b < a.length; b++)
            if ("pt" === a[b].substr(a[b].length - 2, 2)) {
                this.ck = parseInt(a[b].substr(0, a[b].length - 2));
                this.Mp = Math.ceil(this.ck / 72 * 96) + 4;
                0 < b && (this.ul = a[b - 1]);
                this.Bh = a[b + 1];
                for (b += 2; b < a.length; b++) this.Bh += " " + a[b];
                break
            }
    };
    c.Ma = function() {
        return {
            t: this.text,
            f: this.font,
            c: this.color,
            ha: this.Ue,
            va: this.wf,
            wr: this.Gk,
            lho: this.jp,
            fn: this.Bh,
            fs: this.ul,
            ps: this.ck,
            pxh: this.Mp,
            tw: this.tf,
            th: this.Ee,
            lrt: this.Rg
        }
    };
    c.Sa = function(a) {
        this.text = a.t;
        this.font = a.f;
        this.color = a.c;
        this.Ue = a.ha;
        this.wf = a.va;
        this.Gk = a.wr;
        this.jp = a.lho;
        this.Bh = a.fn;
        this.ul = a.fs;
        this.ck = a.ps;
        this.Mp = a.pxh;
        this.tf = a.tw;
        this.Ee = a.th;
        this.Rg = a.lrt;
        this.Xc = !0;
        this.Sg = this.Sl = this.width;
        this.Rl = this.height
    };
    c.Fa = function() {
        if (this.b.F && this.Vc && 300 <= this.b.Jd - this.Rg) {
            var a = this.u;
            this.Ga();
            var b = this.Ka;
            if (b.right < a.ya || b.bottom < a.za || b.left > a.Ja || b.top > a.Ia) this.b.F.deleteTexture(this.Vc), this.we = this.Yg = this.Vc = null
        }
    };
    c.Yd = function() {
        this.we =
            this.Yg = null;
        this.b.F && this.Vc && this.b.F.deleteTexture(this.Vc);
        this.Vc = null
    };
    c.Ni = function() {
        this.font = this.ul + " " + this.ck.toString() + "pt " + this.Bh;
        this.Xc = !0;
        this.b.Y = !0
    };
    c.Pc = function(a, b) {
        a.font = this.font;
        a.textBaseline = "top";
        a.fillStyle = this.color;
        a.globalAlpha = b ? 1 : this.opacity;
        var c = 1;
        b && (c = Math.abs(this.u.Dc()), a.save(), a.scale(c, c));
        if (this.Xc || this.width !== this.Sg) this.type.xa.Ln(this.text, this.vc, a, this.width, this.Gk), this.Xc = !1, this.Sg = this.width;
        this.Ga();
        var c = b ? 0 : this.Vb.Qa,
            d = b ? 0 : this.Vb.Ra;
        this.b.Gc && (c = c + .5 | 0, d = d + .5 | 0);
        0 === this.q || b || (a.save(), a.translate(c, d), a.rotate(this.q), d = c = 0);
        var e = d + this.height,
            f = this.Mp,
            f = f + this.jp,
            h, m;
        1 === this.wf ? d += Math.max(this.height / 2 - this.vc.length * f / 2, 0) : 2 === this.wf && (d += Math.max(this.height - this.vc.length * f - 2, 0));
        for (m = 0; m < this.vc.length && !(h = c, 1 === this.Ue ? h = c + (this.width - this.vc[m].width) / 2 : 2 === this.Ue && (h = c + (this.width - this.vc[m].width)), a.fillText(this.vc[m].text, h, d), d += f, d >= e - f); m++);
        (0 !== this.q || b) && a.restore();
        this.Rg = this.b.Jd
    };
    c.Yb = function(a) {
        if (!(1 >
                this.width || 1 > this.height)) {
            var b = this.Xc || this.yt;
            this.yt = !1;
            var c = this.u.Dc(),
                d = this.u.bb(),
                e = this.ag,
                f = c * this.width,
                h = c * this.height,
                m = Math.ceil(f),
                n = Math.ceil(h),
                r = Math.abs(m),
                p = Math.abs(n),
                q = this.b.X / 2,
                U = this.b.W / 2;
            this.Yg || (this.we = document.createElement("canvas"), this.we.width = r, this.we.height = p, this.Sl = r, this.Rl = p, b = !0, this.Yg = this.we.getContext("2d"));
            if (r !== this.Sl || p !== this.Rl) this.we.width = r, this.we.height = p, this.Vc && (a.deleteTexture(this.Vc), this.Vc = null), b = !0;
            b && (this.Yg.clearRect(0,
                0, r, p), this.Pc(this.Yg, !0), this.Vc || (this.Vc = a.$c(r, p, this.b.La, this.b.Ye)), a.zB(this.we, this.Vc, this.b.Ye));
            this.Sl = r;
            this.Rl = p;
            a.xc(this.Vc);
            a.lf(this.opacity);
            a.Ed();
            a.translate(-q, -U);
            a.ld();
            var N = this.Vb,
                b = this.u.Wa(N.Qa, N.Ra, !0, !0),
                r = this.u.Wa(N.Qa, N.Ra, !1, !0),
                p = this.u.Wa(N.ob, N.pb, !0, !0),
                q = this.u.Wa(N.ob, N.pb, !1, !0),
                U = this.u.Wa(N.ib, N.jb, !0, !0),
                G = this.u.Wa(N.ib, N.jb, !1, !0),
                z = this.u.Wa(N.gb, N.hb, !0, !0),
                N = this.u.Wa(N.gb, N.hb, !1, !0);
            if (this.b.Gc || 0 === this.q && 0 === d) var x = (b + .5 | 0) - b,
                K = (r + .5 | 0) -
                r,
                b = b + x,
                r = r + K,
                p = p + x,
                q = q + K,
                U = U + x,
                G = G + K,
                z = z + x,
                N = N + K;
            0 === this.q && 0 === d ? (p = b + m, q = r, U = p, G = r + n, z = b, N = G, e.right = 1, e.bottom = 1) : (e.right = f / m, e.bottom = h / n);
            a.de(b, r, p, q, U, G, z, N, e);
            a.Ed();
            a.scale(c, c);
            a.Lm(-this.u.bb());
            a.translate((this.u.ya + this.u.Ja) / -2, (this.u.za + this.u.Ia) / -2);
            a.ld();
            this.Rg = this.b.Jd
        }
    };
    var b = [];
    d.Kn = function(a) {
        I(b);
        for (var c = "", d, e = 0; e < a.length;)
            if (d = a.charAt(e), "\n" === d) c.length && (b.push(c), c = ""), b.push("\n"), ++e;
            else if (" " === d || "\t" === d || "-" === d) {
            do c += a.charAt(e), e++; while (e < a.length &&
                (" " === a.charAt(e) || "\t" === a.charAt(e)));
            b.push(c);
            c = ""
        } else e < a.length && (c += d, e++);
        c.length && b.push(c)
    };
    var f = [];
    d.Ln = function(a, b, c, d, f) {
        if (a && a.length)
            if (2 >= d) q(b);
            else {
                if (100 >= a.length && -1 === a.indexOf("\n")) {
                    var h = c.measureText(a).width;
                    if (h <= d) {
                        q(b);
                        b.push(e());
                        b[0].text = a;
                        b[0].width = h;
                        return
                    }
                }
                this.Mn(a, b, c, d, f)
            }
        else q(b)
    };
    d.Mn = function(a, c, d, h, r) {
        r && (this.Kn(a), a = b);
        var p = "",
            q, m, u, O = 0;
        for (u = 0; u < a.length; u++) "\n" === a[u] ? (O >= c.length && c.push(e()), p = n(p), m = c[O], m.text = p, m.width = d.measureText(p).width,
            O++, p = "") : (q = p, p += a[u], m = d.measureText(p).width, m >= h && (O >= c.length && c.push(e()), q = n(q), m = c[O], m.text = q, m.width = d.measureText(q).width, O++, p = a[u], r || " " !== p || (p = "")));
        p.length && (O >= c.length && c.push(e()), p = n(p), m = c[O], m.text = p, m.width = d.measureText(p).width, O++);
        for (u = O; u < c.length; u++) f.push(c[u]);
        c.length = O
    };
    h.prototype.Cq = function(a, b) {
        return b ? this.text == a : nb(this.text, a)
    };
    d.n = new h;
    r.prototype.Hn = function(a) {
        ha(a) && 1E9 > a && (a = Math.round(1E10 * a) / 1E10);
        a = a.toString();
        this.text !== a && (this.text = a, this.Xc = !0, this.b.Y = !0)
    };
    d.A = new r;
    p.prototype.Text = function(a) {
        a.Ub(this.text)
    };
    d.P = new p
})();

function zc(e) {
    this.b = e
}
(function() {
    var e = zc.prototype;
    e.T = function(e) {
        this.xa = e;
        this.b = e.b
    };
    var q = e.T.prototype;
    q.H = function() {
        this.O || (this.L = new Image, this.L.$n = this.kn, this.b.wn(this.L, this.vk), this.S = this.pattern = null)
    };
    q.li = function() {
        this.O || (this.S = null)
    };
    q.Xj = function() {
        if (!this.O && this.k.length) {
            this.S || (this.S = this.b.F.Uf(this.L, !0, this.b.La, this.ih));
            var e, h;
            e = 0;
            for (h = this.k.length; e < h; e++) this.k[e].S = this.S
        }
    };
    q.Fj = function() {
        this.O || this.S || !this.b.F || (this.S = this.b.F.Uf(this.L, !0, this.b.La, this.ih))
    };
    q.yk =
        function() {
            this.O || this.k.length || !this.S || (this.b.F.deleteTexture(this.S), this.S = null)
        };
    q.ak = function(e) {
        e.drawImage(this.L, 0, 0)
    };
    e.M = function(e) {
        this.type = e;
        this.b = e.b
    };
    q = e.M.prototype;
    q.H = function() {
        this.visible = 0 === this.C[0];
        this.ag = new ta(0, 0, 0, 0);
        this.ws = !1;
        this.L = this.type.L;
        this.b.F ? (this.type.Fj(), this.S = this.type.S) : (this.type.pattern || (this.type.pattern = this.b.Ta.createPattern(this.type.L, "repeat")), this.pattern = this.type.pattern)
    };
    q.Md = function() {
        this.ws = !1;
        this.L = this.type.L
    };
    q.Yd = function() {
        this.b.F &&
            this.ws && this.S && (this.b.F.deleteTexture(this.S), this.S = null)
    };
    q.Pc = function(e) {
        e.globalAlpha = this.opacity;
        e.save();
        e.fillStyle = this.pattern;
        var h = this.x,
            r = this.y;
        this.b.Gc && (h = Math.round(h), r = Math.round(r));
        var p = -(this.rc * this.width),
            d = -(this.tc * this.height),
            c = p % this.L.width,
            b = d % this.L.height;
        0 > c && (c += this.L.width);
        0 > b && (b += this.L.height);
        e.translate(h, r);
        e.rotate(this.q);
        e.translate(c, b);
        e.fillRect(p - c, d - b, this.width, this.height);
        e.restore()
    };
    q.qg = function(e) {
        this.Yb(e)
    };
    q.Yb = function(e) {
        e.xc(this.S);
        e.lf(this.opacity);
        var h = this.ag;
        h.right = this.width / this.L.width;
        h.bottom = this.height / this.L.height;
        var r = this.Vb;
        if (this.b.Gc) {
            var p = Math.round(this.x) - this.x,
                d = Math.round(this.y) - this.y;
            e.de(r.Qa + p, r.Ra + d, r.ob + p, r.pb + d, r.ib + p, r.jb + d, r.gb + p, r.hb + d, h)
        } else e.de(r.Qa, r.Ra, r.ob, r.pb, r.ib, r.jb, r.gb, r.hb, h)
    };
    e.n = new function() {};
    e.A = new function() {};
    e.P = new function() {}
})();

function Ac(e) {
    this.b = e
}
(function() {
    function e(c) {
        b = c.x;
        f = c.y;
        a = c.z
    }

    function q(a, b, c, d) {
        var e;
        e = g.length ? g.pop() : new n;
        e.init(a, b, c, d);
        return e
    }

    function n() {
        this.rk = this.id = this.Ug = this.Tg = this.y = this.x = this.dn = this.cn = this.hp = this.time = this.fq = 0;
        this.xk = this.qn = !1
    }

    function h() {}

    function r() {}
    var p = Ac.prototype;
    p.T = function(a) {
        this.xa = a;
        this.b = a.b
    };
    p.T.prototype.H = function() {};
    p.M = function(a) {
        this.type = a;
        this.b = a.b;
        this.touches = [];
        this.wp = !1
    };
    var d = p.M.prototype,
        c = {
            left: 0,
            top: 0
        };
    d.aj = function(a) {
        var b, c;
        b = 0;
        for (c = this.touches.length; b <
            c; b++)
            if (this.touches[b].id === a) return b;
        return -1
    };
    var b = 0,
        f = 0,
        a = 0,
        g = [];
    n.prototype.init = function(a, b, c, d) {
        var e = Xa();
        this.fq = this.hp = this.time = e;
        this.cn = a;
        this.dn = b;
        this.x = a;
        this.y = b;
        this.Tg = a;
        this.Ug = b;
        this.pressure = this.height = this.width = 0;
        this.id = c;
        this.rk = d;
        this.xk = this.qn = !1
    };
    n.prototype.update = function(a, b, c, d, e, f) {
        this.hp = this.time;
        this.time = a;
        this.Tg = this.x;
        this.Ug = this.y;
        this.x = b;
        this.y = c;
        this.width = d;
        this.height = e;
        this.pressure = f;
        !this.xk && 15 <= Sa(this.cn, this.dn, this.x, this.y) && (this.xk = !0)
    };
    n.prototype.sA = function(a, b) {
        !this.qn && 500 <= Xa() - this.fq && !this.xk && 15 > Sa(this.cn, this.dn, this.x, this.y) && (this.qn = !0, a.Fe = this.rk, a.Di = this.id, a.Ih = b, a.b.trigger(Ac.prototype.n.bw, a), a.Ne = this.x, a.Oe = this.y, a.b.trigger(Ac.prototype.n.dw, a), a.Ih = 0)
    };
    var l = -1E3,
        k = -1E3,
        t = -1E4;
    n.prototype.ot = function(a, b) {
        if (!this.qn) {
            var c = Xa();
            333 >= c - this.fq && !this.xk && 15 > Sa(this.cn, this.dn, this.x, this.y) && (a.Fe = this.rk, a.Di = this.id, a.Ih = b, 666 >= c - t && 25 > Sa(l, k, this.x, this.y) ? (a.b.trigger(Ac.prototype.n.Vv, a), a.Ne =
                this.x, a.Oe = this.y, a.b.trigger(Ac.prototype.n.Wv, a), k = l = -1E3, t = -1E4) : (a.b.trigger(Ac.prototype.n.lw, a), a.Ne = this.x, a.Oe = this.y, a.b.trigger(Ac.prototype.n.Zq, a), l = this.x, k = this.y, t = c), a.Ih = 0)
        }
    };
    d.H = function() {
        this.hA = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
        this.Ih = this.Di = this.Fe = this.Oe = this.Ne = this.tr = this.sr = this.rr = this.ux = this.tx = this.rx = this.tm = this.rm = this.qm = 0;
        this.xB = 0 !== this.C[0];
        var a = 0 < this.b.Cc ? document : this.b.canvas,
            b = document;
        this.b.uc ? b = a = window.Canvas : this.b.zd &&
            (b = a = window);
        var c = this;
        "undefined" !== typeof PointerEvent ? (a.addEventListener("pointerdown", function(a) {
            c.Ht(a)
        }, !1), a.addEventListener("pointermove", function(a) {
            c.Gt(a)
        }, !1), b.addEventListener("pointerup", function(a) {
            c.om(a, !1)
        }, !1), b.addEventListener("pointercancel", function(a) {
            c.om(a, !0)
        }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), this.b.canvas.addEventListener("gesturehold",
            function(a) {
                a.preventDefault()
            }, !1), document.addEventListener("gesturehold", function(a) {
            a.preventDefault()
        }, !1))) : window.navigator.msPointerEnabled ? (a.addEventListener("MSPointerDown", function(a) {
            c.Ht(a)
        }, !1), a.addEventListener("MSPointerMove", function(a) {
            c.Gt(a)
        }, !1), b.addEventListener("MSPointerUp", function(a) {
            c.om(a, !1)
        }, !1), b.addEventListener("MSPointerCancel", function(a) {
            c.om(a, !0)
        }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold",
            function(a) {
                a.preventDefault()
            }, !1))) : (a.addEventListener("touchstart", function(a) {
            c.Kt(a)
        }, !1), a.addEventListener("touchmove", function(a) {
            c.Jt(a)
        }, !1), b.addEventListener("touchend", function(a) {
            c.Bp(a, !1)
        }, !1), b.addEventListener("touchcancel", function(a) {
            c.Bp(a, !0)
        }, !1));
        if (this.hA) {
            var d = function(a) {
                    a = a.reading;
                    c.rr = a.accelerationX;
                    c.sr = a.accelerationY;
                    c.tr = a.accelerationZ
                },
                f = function(a) {
                    a = a.reading;
                    c.qm = a.yawDegrees;
                    c.rm = a.pitchDegrees;
                    c.tm = a.rollDegrees
                },
                g = Windows.Devices.Sensors.Accelerometer.getDefault();
            g && (g.reportInterval = Math.max(g.minimumReportInterval, 16), g.addEventListener("readingchanged", d));
            var h = Windows.Devices.Sensors.Inclinometer.getDefault();
            h && (h.reportInterval = Math.max(h.minimumReportInterval, 16), h.addEventListener("readingchanged", f));
            document.addEventListener("visibilitychange", function() {
                document.hidden || document.msHidden ? (g && g.removeEventListener("readingchanged", d), h && h.removeEventListener("readingchanged", f)) : (g && g.addEventListener("readingchanged", d), h && h.addEventListener("readingchanged",
                    f))
            }, !1)
        } else window.addEventListener("deviceorientation", function(a) {
            c.qm = a.alpha || 0;
            c.rm = a.beta || 0;
            c.tm = a.gamma || 0
        }, !1), window.addEventListener("devicemotion", function(a) {
            a.accelerationIncludingGravity && (c.rx = a.accelerationIncludingGravity.x || 0, c.tx = a.accelerationIncludingGravity.y || 0, c.ux = a.accelerationIncludingGravity.z || 0);
            a.acceleration && (c.rr = a.acceleration.x || 0, c.sr = a.acceleration.y || 0, c.tr = a.acceleration.z || 0)
        }, !1);
        this.xB && !this.b.kb && (jQuery(document).mousemove(function(a) {
                c.zA(a)
            }), jQuery(document).mousedown(function(a) {
                c.yA(a)
            }),
            jQuery(document).mouseup(function(a) {
                c.AA(a)
            }));
        !this.b.Uh && this.b.dd && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(e, null, {
            frequency: 40
        });
        this.b.qB(this)
    };
    d.Gt = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && a.preventDefault();
            var b = this.aj(a.pointerId),
                d = Xa();
            if (0 <= b) {
                var e = this.b.kb ? c : jQuery(this.b.canvas).offset(),
                    b = this.touches[b];
                2 > d - b.time || b.update(d, a.pageX - e.left, a.pageY - e.top,
                    a.width || 0, a.height || 0, a.pressure || 0)
            }
        }
    };
    d.Ht = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && ob(a) && a.preventDefault();
            var b = this.b.kb ? c : jQuery(this.b.canvas).offset(),
                d = a.pageX - b.left,
                b = a.pageY - b.top;
            Xa();
            this.Fe = this.touches.length;
            this.Di = a.pointerId;
            this.touches.push(q(d, b, a.pointerId, this.Fe));
            this.b.Rc = !0;
            this.b.trigger(Ac.prototype.n.Xq, this);
            this.b.trigger(Ac.prototype.n.br, this);
            this.Ne = d;
            this.Oe = b;
            this.b.trigger(Ac.prototype.n.En, this);
            this.b.Rc = !1
        }
    };
    d.om = function(a, b) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && ob(a) && a.preventDefault();
            var c = this.aj(a.pointerId);
            this.Fe = 0 <= c ? this.touches[c].rk : -1;
            this.Di = 0 <= c ? this.touches[c].id : -1;
            this.b.Rc = !0;
            this.b.trigger(Ac.prototype.n.Wq, this);
            this.b.trigger(Ac.prototype.n.$q, this);
            0 <= c && (b || this.touches[c].ot(this, c), 100 > g.length && g.push(this.touches[c]), this.touches.splice(c, 1));
            this.b.Rc = !1
        }
    };
    d.Jt = function(a) {
        a.preventDefault && a.preventDefault();
        var b = Xa(),
            d, e, f, g;
        d = 0;
        for (e = a.changedTouches.length; d < e; d++)
            if (f = a.changedTouches[d], g = this.aj(f.identifier), 0 <= g) {
                var h = this.b.kb ? c : jQuery(this.b.canvas).offset();
                g = this.touches[g];
                2 > b - g.time || g.update(b, f.pageX - h.left, f.pageY - h.top, 2 * (f.zC || f.GC || f.sC || f.vC || 0), 2 * (f.AC || f.HC || f.tC || f.wC || 0), f.kC || f.FC || f.rC || f.uC || 0)
            }
    };
    d.Kt = function(a) {
        a.preventDefault && ob(a) && a.preventDefault();
        var b = this.b.kb ? c : jQuery(this.b.canvas).offset();
        Xa();
        this.b.Rc = !0;
        var d, e, f, g;
        d = 0;
        for (e = a.changedTouches.length; d < e; d++)
            if (f =
                a.changedTouches[d], g = this.aj(f.identifier), -1 === g) {
                g = f.pageX - b.left;
                var h = f.pageY - b.top;
                this.Fe = this.touches.length;
                this.Di = f.identifier;
                this.touches.push(q(g, h, f.identifier, this.Fe));
                this.b.trigger(Ac.prototype.n.Xq, this);
                this.b.trigger(Ac.prototype.n.br, this);
                this.Ne = g;
                this.Oe = h;
                this.b.trigger(Ac.prototype.n.En, this)
            }
        this.b.Rc = !1
    };
    d.Bp = function(a, b) {
        a.preventDefault && ob(a) && a.preventDefault();
        this.b.Rc = !0;
        var c, d, e;
        c = 0;
        for (d = a.changedTouches.length; c < d; c++) e = a.changedTouches[c], e = this.aj(e.identifier),
            0 <= e && (this.Fe = this.touches[e].rk, this.Di = this.touches[e].id, this.b.trigger(Ac.prototype.n.Wq, this), this.b.trigger(Ac.prototype.n.$q, this), b || this.touches[e].ot(this, e), 100 > g.length && g.push(this.touches[e]), this.touches.splice(e, 1));
        this.b.Rc = !1
    };
    d.Ni = function() {
        return this.b.dd && 0 === this.qm && 0 !== a ? 90 * a : this.qm
    };
    d.pC = function() {
        return this.b.dd && 0 === this.rm && 0 !== f ? 90 * f : this.rm
    };
    d.qC = function() {
        return this.b.dd && 0 === this.tm && 0 !== b ? 90 * b : this.tm
    };
    d.yA = function(a) {
        this.Kt({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.wp = !0
    };
    d.zA = function(a) {
        this.wp && this.Jt({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        })
    };
    d.AA = function(a) {
        a.preventDefault && this.b.ts && !this.b.Ye && a.preventDefault();
        this.b.ts = !0;
        this.Bp({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.wp = !1
    };
    d.jh = function() {
        var a, b, c, d = Xa();
        a = 0;
        for (b = this.touches.length; a < b; ++a) c = this.touches[a], c.time <= d - 50 && (c.hp = d), c.sA(this, a)
    };
    h.prototype.br = function() {
        return !0
    };
    h.prototype.$q = function() {
        return !0
    };
    h.prototype.En = function(a) {
        return a ? this.b.hn(a, this.Ne, this.Oe) : !1
    };
    var T = [];
    h.prototype.Nv = function(a) {
        if (!a) return !1;
        var b = a.aa(),
            c = b.qc(),
            d, e, f, g, h, k;
        f = 0;
        for (g = c.length; f < g; f++) {
            var l = c[f];
            l.Ga();
            h = 0;
            for (k = this.touches.length; h < k; h++)
                if (e = this.touches[h], d = l.u.Wb(e.x, e.y, !0), e = l.u.Wb(e.x, e.y, !1), l.ic(d, e)) {
                    T.push(l);
                    break
                }
        }
        return T.length ? (b.fa = !1, za(b.k, T), a.Yc(), I(T), !0) : !1
    };
    h.prototype.Xq = function(a) {
        a = Math.floor(a);
        return a === this.Fe
    };
    h.prototype.Wq = function(a) {
        a = Math.floor(a);
        return a ===
            this.Fe
    };
    h.prototype.bw = function() {
        return !0
    };
    h.prototype.lw = function() {
        return !0
    };
    h.prototype.Vv = function() {
        return !0
    };
    h.prototype.dw = function(a) {
        return a ? this.b.hn(a, this.Ne, this.Oe) : !1
    };
    h.prototype.Zq = function(a) {
        return a ? this.b.hn(a, this.Ne, this.Oe) : !1
    };
    h.prototype.Wv = function(a) {
        return a ? this.b.hn(a, this.Ne, this.Oe) : !1
    };
    p.n = new h;
    r.prototype.or = function(a, b) {
        var c = this.Ih;
        if (0 > c || c >= this.touches.length) a.V(0);
        else {
            var d, e, f, g, h;
            ga(b) ? (d = this.b.Hh(0), e = d.scale, f = d.je, g = d.Cd, h = d.q, d.scale = 1, d.je =
                1, d.Cd = 1, d.q = 0, a.V(d.Wb(this.touches[c].x, this.touches[c].y, !0)), d.scale = e, d.je = f, d.Cd = g, d.q = h) : (d = ha(b) ? this.b.Hh(b) : this.b.Al(b)) ? a.V(d.Wb(this.touches[c].x, this.touches[c].y, !0)) : a.V(0)
        }
    };
    r.prototype.pr = function(a, b) {
        var c = this.Ih;
        if (0 > c || c >= this.touches.length) a.V(0);
        else {
            var d, e, f, g, h;
            ga(b) ? (d = this.b.Hh(0), e = d.scale, f = d.je, g = d.Dd, h = d.q, d.scale = 1, d.je = 1, d.Dd = 1, d.q = 0, a.V(d.Wb(this.touches[c].x, this.touches[c].y, !1)), d.scale = e, d.je = f, d.Dd = g, d.q = h) : (d = ha(b) ? this.b.Hh(b) : this.b.Al(b)) ? a.V(d.Wb(this.touches[c].x,
                this.touches[c].y, !1)) : a.V(0)
        }
    };
    p.P = new r
})();

function Bc(e) {
    this.b = e
}
(function() {
    function e(b) {
        var c;
        if (!a[b])
            for (a[b] = Array(20), c = 0; 20 > c; ++c) a[b][c] = 0;
        return a[b]
    }

    function q(a) {
        var b;
        if (!g[a])
            for (g[a] = Array(20), b = 0; 20 > b; ++b) g[a][b] = 0;
        return g[a]
    }

    function n(a, b) {
        return b ? 4 <= a ? -1 : a + 16 : 16 <= a ? -1 : a
    }

    function h(a) {
        f[a.gamepad.index] = a.gamepad;
        c.trigger(Bc.prototype.n.$v, b)
    }

    function r(a) {
        c.trigger(Bc.prototype.n.aw, b);
        f[a.gamepad.index] = null
    }

    function p() {}
    var d = Bc.prototype;
    d.T = function(a) {
        this.xa = a;
        this.b = a.b
    };
    d.T.prototype.H = function() {};
    var c = null,
        b = null,
        f = Array(16),
        a =
        Array(16),
        g = Array(16),
        l = "",
        k = "",
        t = null,
        T = {
            windows: {}
        };
    T.windows.firefox = {};
    var v = [0, 1, 2, 3, 4, 5, 8, 9, 10, 11],
        m = [0, 1, [7, 6], 2, 3, [14, 15],
            [12, 13]
        ];
    T.windows.firefox.xbox360 = function(a, b) {
        return b ? a >= m.length ? -1 : ha(m[a]) ? m[a] + 16 : m[a] : a >= v.length ? -1 : v[a]
    };
    var u = [2, 0, 1, 3, 4, 6, 5, 7, 8, 9],
        O = [0, 1, 2, 3, [14, 15],
            [12, 13]
        ];
    T.windows.firefox.logitechdualaction = function(a, b) {
        return b ? a >= O.length ? -1 : ha(O[a]) ? O[a] + 16 : O[a] : a >= u.length ? -1 : u[a]
    };
    d.M = function(a) {
        this.type = a;
        c = this.b = a.b;
        b = this
    };
    var S = d.M.prototype;
    S.H = function() {
        this.ep =
            0;
        var a = navigator.userAgent;
        l = "windows";
        /mac/i.test(a) && (l = "mac");
        t = T[l];
        k = "chrome";
        /firefox/i.test(a) && (k = "firefox");
        t && (t = t[k]);
        window.addEventListener("webkitgamepadconnected", h, !1);
        window.addEventListener("webkitgamepaddisconnected", r, !1);
        window.addEventListener("MozGamepadConnected", h, !1);
        window.addEventListener("MozGamepadDisconnected", r, !1);
        window.addEventListener("gamepadconnected", h, !1);
        window.addEventListener("gamepaddisconnected", r, !1);
        this.b.fg(this);
        this.ur = []
    };
    S.Fa = function() {
        this.ur.length =
            0;
        var b = null,
            c = !1;
        navigator.getGamepads ? b = navigator.getGamepads() : navigator.webkitGetGamepads ? b = navigator.webkitGetGamepads() : navigator.mozGetGamepads ? b = navigator.mozGetGamepads() : navigator.msGetGamepads ? b = navigator.msGetGamepads() : this.b.Ls && window.cr_getGamepads ? (b = window.cr_getGamepads(), c = !0) : b = navigator.gamepads || navigator.webkitGamepads || navigator.MozGamepads || f;
        if (b) {
            var d, h, k, l, p, r, m;
            d = 0;
            for (h = b.length; d < h; d++) {
                var u = b[d];
                if (u) {
                    var v = e(d),
                        D = q(d);
                    l = d;
                    k = e(l);
                    l = q(l);
                    p = void 0;
                    for (p = 0; 20 > p; ++p) l[p] =
                        k[p];
                    c ? k = n : t ? (k = "", l = u.id.toLowerCase(), -1 < l.indexOf("xbox 360") ? k = "xbox360" : -1 < l.indexOf("logitech dual action") && (k = "logitechdualaction"), k = t[k] || n) : k = n;
                    p = k;
                    k = 0;
                    for (l = u.buttons.length; k < l; k++) m = "undefined" !== typeof u.buttons[k].value ? u.buttons[k].value : u.buttons[k], r = p(k, !1, m), 0 <= r && 20 > r && (v[r] = 100 * m, 50 <= v[r] && 50 > D[r] && (this.ep = r));
                    k = 0;
                    for (l = u.axes.length; k < l; k++) m = u.axes[k], r = p(k, !0, m), ha(r) ? 0 <= r && 20 > r && (v[r] = 100 * m) : (v[r[0]] = 0, v[r[1]] = 0, 0 >= m ? v[r[0]] = Math.abs(100 * m) : v[r[1]] = Math.abs(100 * m));
                    this.ur.push(u)
                } else u =
                    d, a[u] = null, g[u] = null
            }
            for (; 20 > d; ++d) b = d, a[b] = null, g[b] = null
        }
    };
    S.Ma = function() {
        return {
            lastButton: this.ep
        }
    };
    S.Sa = function(a) {
        this.ep = a.lastButton
    };
    p.prototype.$v = function() {
        return !0
    };
    p.prototype.aw = function() {
        return !0
    };
    d.n = new p;
    d.A = new function() {};
    d.P = new function() {}
})();

function Cc(e) {
    this.b = e
}
(function() {
    function e() {}
    var q = Cc.prototype;
    q.T = function(e) {
        this.behavior = e;
        this.b = e.b
    };
    q.T.prototype.H = function() {};
    q.M = function(e, r) {
        this.type = e;
        this.behavior = e.behavior;
        this.j = r;
        this.b = e.b
    };
    var n = q.M.prototype;
    n.H = function() {
        var e = this.C[0];
        this.Ob = this.C[1];
        this.$b = this.C[2];
        this.Dx = 0 !== this.C[3];
        this.Zp = 0 !== this.C[4];
        this.G = Math.cos(this.j.q) * e;
        this.J = Math.sin(this.j.q) * e;
        this.Tg = this.j.x;
        this.Ug = this.j.y;
        this.fd = this.j.q;
        this.pn = 0;
        this.enabled = 0 !== this.C[5]
    };
    n.Ma = function() {
        return {
            acc: this.Ob,
            g: this.$b,
            dx: this.G,
            dy: this.J,
            lx: this.Tg,
            ly: this.Ug,
            lka: this.fd,
            t: this.pn,
            e: this.enabled
        }
    };
    n.Sa = function(e) {
        this.Ob = e.acc;
        this.$b = e.g;
        this.G = e.dx;
        this.J = e.dy;
        this.Tg = e.lx;
        this.Ug = e.ly;
        this.fd = e.lka;
        this.pn = e.t;
        this.enabled = e.e
    };
    n.Fa = function() {
        if (this.enabled) {
            var e = this.b.te(this.j),
                r, p;
            this.j.q !== this.fd && (this.Zp && (r = Sa(0, 0, this.G, this.J), this.G = Math.cos(this.j.q) * r, this.J = Math.sin(this.j.q) * r), this.fd = this.j.q);
            0 !== this.Ob && (r = Sa(0, 0, this.G, this.J), p = 0 === this.G && 0 === this.J ? this.j.q : La(0, 0, this.G,
                this.J), r += this.Ob * e, 0 > r && (r = 0), this.G = Math.cos(p) * r, this.J = Math.sin(p) * r);
            0 !== this.$b && (this.J += this.$b * e);
            this.Tg = this.j.x;
            this.Ug = this.j.y;
            if (0 !== this.G || 0 !== this.J)
                if (this.j.x += this.G * e, this.j.y += this.J * e, this.pn += Sa(0, 0, this.G * e, this.J * e), this.Zp && (this.j.q = La(0, 0, this.G, this.J), this.j.D(), this.fd = this.j.q), this.j.D(), this.Dx && (r = this.b.nb(this.j))) this.b.dh(this.j, r), r = Sa(0, 0, this.G, this.J), p = this.b.Gx(this.j, this.Tg, this.Ug), this.G = Math.cos(p) * r, this.J = Math.sin(p) * r, this.j.x += this.G * e, this.j.y +=
                    this.J * e, this.j.D(), this.Zp && (this.fd = this.j.q = p, this.j.D()), this.b.jd(this.j, this.G / r, this.J / r, Math.max(2.5 * r * e, 30)) || this.b.du(this.j, 100)
        }
    };
    q.n = new function() {};
    e.prototype.Pw = function(e) {
        var r = La(0, 0, this.G, this.J);
        this.G = Math.cos(r) * e;
        this.J = Math.sin(r) * e
    };
    e.prototype.Fn = function(e) {
        this.Ob = e
    };
    e.prototype.yw = function(e) {
        e = L(e);
        var r = Sa(0, 0, this.G, this.J);
        this.G = Math.cos(e) * r;
        this.J = Math.sin(e) * r
    };
    e.prototype.Ge = function(e) {
        this.enabled = 1 === e
    };
    q.A = new e;
    q.P = new function() {}
})();

function Dc(e) {
    this.b = e
}
(function() {
    function e() {}

    function q() {}
    var n = Dc.prototype;
    n.T = function(e) {
        this.behavior = e;
        this.b = e.b
    };
    n.T.prototype.H = function() {};
    n.M = function(e, h) {
        this.type = e;
        this.behavior = e.behavior;
        this.j = h;
        this.b = e.b
    };
    var h = n.M.prototype;
    h.H = function() {
        this.Nn = 1 === this.C[0];
        this.qu = !1;
        this.Ch = this.C[1];
        this.Ek = this.C[2];
        this.Yi = this.C[3];
        this.Sx = this.C[4];
        this.Db = this.Nn ? 0 : 3;
        this.Ab ? this.Gd.reset() : this.Gd = new ab;
        this.Yf = this.j.opacity ? this.j.opacity : 1;
        this.Nn && (0 === this.Ch ? (this.Db = 1, 0 === this.Ek && (this.Db =
            2)) : (this.j.opacity = 0, this.b.Y = !0))
    };
    h.Ma = function() {
        return {
            fit: this.Ch,
            wt: this.Ek,
            fot: this.Yi,
            s: this.Db,
            st: this.Gd.R,
            mo: this.Yf
        }
    };
    h.Sa = function(e) {
        this.Ch = e.fit;
        this.Ek = e.wt;
        this.Yi = e.fot;
        this.Db = e.s;
        this.Gd.reset();
        this.Gd.R = e.st;
        this.Yf = e.mo
    };
    h.Fa = function() {
        this.Gd.add(this.b.te(this.j));
        0 === this.Db && (this.j.opacity = this.Gd.R / this.Ch * this.Yf, this.b.Y = !0, this.j.opacity >= this.Yf && (this.j.opacity = this.Yf, this.Db = 1, this.Gd.reset(), this.b.trigger(Dc.prototype.n.Xv, this.j)));
        1 === this.Db && this.Gd.R >=
            this.Ek && (this.Db = 2, this.Gd.reset(), this.b.trigger(Dc.prototype.n.cr, this.j));
        2 === this.Db && 0 !== this.Yi && (this.j.opacity = this.Yf - this.Gd.R / this.Yi * this.Yf, this.b.Y = !0, 0 > this.j.opacity && (this.j.opacity = 0, this.Db = 3, this.Gd.reset(), this.b.trigger(Dc.prototype.n.Yv, this.j), 1 === this.Sx && this.b.ke(this.j)))
    };
    h.iy = function() {
        this.Db = 0;
        this.Gd.reset();
        0 === this.Ch ? (this.Db = 1, 0 === this.Ek && (this.Db = 2)) : (this.j.opacity = 0, this.b.Y = !0)
    };
    e.prototype.Yv = function() {
        return !0
    };
    e.prototype.Xv = function() {
        return !0
    };
    e.prototype.cr =
        function() {
            return !0
        };
    n.n = new e;
    q.prototype.cx = function() {
        this.Nn || this.qu || (this.Yf = this.j.opacity ? this.j.opacity : 1, this.qu = !0);
        3 === this.Db && this.iy()
    };
    q.prototype.Dw = function(e) {
        0 > e && (e = 0);
        this.Ch = e
    };
    q.prototype.Ew = function(e) {
        0 > e && (e = 0);
        this.Yi = e
    };
    n.A = new q;
    n.P = new function() {}
})();

function Ec(e) {
    this.b = e
}
(function() {
    function e() {}

    function q() {}
    var n = Ec.prototype;
    n.T = function(e) {
        this.behavior = e;
        this.b = e.b
    };
    n.T.prototype.H = function() {};
    n.M = function(e, h) {
        this.type = e;
        this.behavior = e.behavior;
        this.j = h;
        this.b = e.b
    };
    var h = n.M.prototype;
    h.H = function() {
        this.Kd = this.Ce = this.Db = this.mm = this.pm = 0
    };
    h.Ma = function() {
        return {
            ontime: this.pm,
            offtime: this.mm,
            stage: this.Db,
            stagetimeleft: this.Ce,
            timeleft: this.Kd
        }
    };
    h.Sa = function(e) {
        this.pm = e.ontime;
        this.mm = e.offtime;
        this.Db = e.stage;
        this.Ce = e.stagetimeleft;
        this.Kd = e.timeleft;
        null === this.Kd && (this.Kd = Infinity)
    };
    h.Fa = function() {
        if (!(0 >= this.Kd)) {
            var e = this.b.te(this.j);
            this.Kd -= e;
            0 >= this.Kd ? (this.Kd = 0, this.j.visible = !0, this.b.Y = !0, this.b.trigger(Ec.prototype.n.Zv, this.j)) : (this.Ce -= e, 0 >= this.Ce && (0 === this.Db ? (this.j.visible = !1, this.Db = 1, this.Ce += this.mm) : (this.j.visible = !0, this.Db = 0, this.Ce += this.pm), this.b.Y = !0))
        }
    };
    e.prototype.Dv = function() {
        return 0 < this.Kd
    };
    e.prototype.Zv = function() {
        return !0
    };
    n.n = new e;
    q.prototype.tv = function(e, h, d) {
        this.pm = e;
        this.mm = h;
        this.Db = 1;
        this.Ce =
            h;
        this.Kd = d;
        this.j.visible = !1;
        this.b.Y = !0
    };
    q.prototype.hx = function() {
        this.Kd = 0;
        this.j.visible = !0;
        this.b.Y = !0
    };
    n.A = new q;
    n.P = new function() {}
})();

function Fc(e) {
    this.b = e
}
(function() {
    function e() {}
    var q = Fc.prototype;
    q.T = function(e) {
        this.behavior = e;
        this.b = e.b
    };
    q.T.prototype.H = function() {};
    q.M = function(e, n) {
        this.type = e;
        this.behavior = e.behavior;
        this.j = n;
        this.b = e.b
    };
    var n = q.M.prototype;
    n.H = function() {
        this.Mb = null;
        this.zm = -1;
        this.mode = this.fd = this.ln = this.gi = this.ff = this.$j = 0;
        var e = this;
        this.Ab || (this.Rj = function(n) {
            e.Vj(n)
        });
        this.b.Mk(this.Rj)
    };
    n.Ma = function() {
        return {
            uid: this.Mb ? this.Mb.uid : -1,
            pa: this.$j,
            pd: this.ff,
            msa: this.gi,
            tsa: this.ln,
            lka: this.fd,
            m: this.mode
        }
    };
    n.Sa =
        function(e) {
            this.zm = e.uid;
            this.$j = e.pa;
            this.ff = e.pd;
            this.gi = e.msa;
            this.ln = e.tsa;
            this.fd = e.lka;
            this.mode = e.m
        };
    n.Md = function() {
        -1 === this.zm ? this.Mb = null : this.Mb = this.b.Te(this.zm);
        this.zm = -1
    };
    n.Vj = function(e) {
        this.Mb == e && (this.Mb = null)
    };
    n.Yd = function() {
        this.Mb = null;
        this.b.hu(this.Rj)
    };
    n.Fa = function() {};
    n.jh = function() {
        if (this.Mb) {
            this.fd !== this.j.q && (this.gi = Ia(this.gi + (this.j.q - this.fd)));
            var e = this.j.x,
                n = this.j.y;
            if (3 === this.mode || 4 === this.mode) {
                var p = Sa(this.j.x, this.j.y, this.Mb.x, this.Mb.y);
                if (p >
                    this.ff || 4 === this.mode && p < this.ff) n = La(this.Mb.x, this.Mb.y, this.j.x, this.j.y), e = this.Mb.x + Math.cos(n) * this.ff, n = this.Mb.y + Math.sin(n) * this.ff
            } else e = this.Mb.x + Math.cos(this.Mb.q + this.$j) * this.ff, n = this.Mb.y + Math.sin(this.Mb.q + this.$j) * this.ff;
            this.fd = p = Ia(this.gi + (this.Mb.q - this.ln));
            0 !== this.mode && 1 !== this.mode && 3 !== this.mode && 4 !== this.mode || this.j.x === e && this.j.y === n || (this.j.x = e, this.j.y = n, this.j.D());
            0 !== this.mode && 2 !== this.mode || this.j.q === p || (this.j.q = p, this.j.D())
        }
    };
    q.n = new function() {};
    e.prototype.qw =
        function(e, n) {
            if (e) {
                var p = e.Eo(this.j);
                p && (this.Mb = p, this.$j = La(p.x, p.y, this.j.x, this.j.y) - p.q, this.ff = Sa(p.x, p.y, this.j.x, this.j.y), this.fd = this.gi = this.j.q, this.ln = p.q, this.mode = n)
            }
        };
    q.A = new e;
    q.P = new function() {}
})();

function Gc(e) {
    this.b = e
}
(function() {
    function e() {}

    function q() {}
    var n = Gc.prototype;
    n.T = function(e) {
        this.behavior = e;
        this.b = e.b
    };
    n.T.prototype.H = function() {};
    n.M = function(e, h) {
        this.type = e;
        this.behavior = e.behavior;
        this.j = h;
        this.b = e.b;
        this.ok = this.Ym = this.Xm = this.Po = this.Oi = this.Vi = this.Vh = this.Wh = this.hk = this.zj = !1;
        this.mc = null;
        this.kp = -1;
        this.Ng = this.Mg = 0;
        this.tl = !1;
        this.xg = this.Od = 0;
        this.rl = !0;
        this.J = this.G = 0
    };
    var h = n.M.prototype;
    h.Qu = function() {
        this.sb = Math.cos(this.Fh);
        this.tb = Math.sin(this.Fh);
        this.hf = Math.cos(this.Fh -
            Math.PI / 2);
        this.jf = Math.sin(this.Fh - Math.PI / 2);
        this.sb = mb(this.sb);
        this.tb = mb(this.tb);
        this.hf = mb(this.hf);
        this.jf = mb(this.jf);
        this.yo = this.$b;
        0 > this.$b && (this.sb *= -1, this.tb *= -1, this.$b = Math.abs(this.$b))
    };
    h.H = function() {
        this.bf = this.C[0];
        this.Ob = this.C[1];
        this.yh = this.C[2];
        this.Sf = this.C[3];
        this.yo = this.$b = this.C[4];
        this.gm = this.C[5];
        this.no = 0 !== this.C[6];
        this.dp = this.C[7] / 1E3;
        this.Qx = 1 === this.C[8];
        this.enabled = 0 !== this.C[9];
        this.Ii = !1;
        this.Ji = this.b.sf(this.j);
        this.lp = -1;
        this.hh = 0;
        this.Fh = L(90);
        this.Qu();
        var e = this;
        this.Qx && !this.b.kb && (jQuery(document).keydown(function(h) {
            e.zp(h)
        }), jQuery(document).keyup(function(h) {
            e.Ap(h)
        }));
        this.Ab || (this.Rj = function(h) {
            e.Vj(h)
        });
        this.b.Mk(this.Rj);
        this.j.N.isPlatformBehavior = !0
    };
    h.Ma = function() {
        return {
            ii: this.Po,
            lfx: this.Mg,
            lfy: this.Ng,
            lfo: this.mc ? this.mc.uid : -1,
            am: this.Od,
            en: this.enabled,
            fall: this.xg,
            ft: this.rl,
            dx: this.G,
            dy: this.J,
            ms: this.bf,
            acc: this.Ob,
            dec: this.yh,
            js: this.Sf,
            g: this.$b,
            g1: this.yo,
            mf: this.gm,
            wof: this.Ii,
            woj: this.Ji ? this.Ji.uid : -1,
            ga: this.Fh,
            edj: this.no,
            cdj: this.Oi,
            dj: this.Vi,
            sus: this.dp
        }
    };
    h.Sa = function(e) {
        this.Po = e.ii;
        this.Mg = e.lfx;
        this.Ng = e.lfy;
        this.kp = e.lfo;
        this.Od = e.am;
        this.enabled = e.en;
        this.xg = e.fall;
        this.rl = e.ft;
        this.G = e.dx;
        this.J = e.dy;
        this.bf = e.ms;
        this.Ob = e.acc;
        this.yh = e.dec;
        this.Sf = e.js;
        this.$b = e.g;
        this.yo = e.g1;
        this.gm = e.mf;
        this.Ii = e.wof;
        this.lp = e.woj;
        this.Fh = e.ga;
        this.no = e.edj;
        this.Oi = e.cdj;
        this.Vi = e.dj;
        this.dp = e.sus;
        this.ok = this.Ym = this.Xm = this.Vh = this.Wh = this.hk = this.zj = !1;
        this.hh = 0;
        this.Qu()
    };
    h.Md = function() {
        -1 === this.kp ?
            this.mc = null : this.mc = this.b.Te(this.kp); - 1 === this.lp ? this.Ji = null : this.Ji = this.b.Te(this.lp)
    };
    h.Vj = function(e) {
        this.mc == e && (this.mc = null)
    };
    h.Yd = function() {
        this.mc = null;
        this.b.hu(this.Rj)
    };
    h.zp = function(e) {
        switch (e.which) {
            case 38:
                e.preventDefault();
                this.Wh = !0;
                break;
            case 37:
                e.preventDefault();
                this.zj = !0;
                break;
            case 39:
                e.preventDefault(), this.hk = !0
        }
    };
    h.Ap = function(e) {
        switch (e.which) {
            case 38:
                e.preventDefault();
                this.Vh = this.Wh = !1;
                break;
            case 37:
                e.preventDefault();
                this.zj = !1;
                break;
            case 39:
                e.preventDefault(),
                    this.hk = !1
        }
    };
    h.$g = function() {
        this.Wh = this.hk = this.zj = !1
    };
    h.Ni = function() {
        return 0 > this.$b ? -1 : 1
    };
    h.Hs = function() {
        var e = null,
            h = null,
            d, c;
        d = this.j.x;
        c = this.j.y;
        this.j.x += this.sb;
        this.j.y += this.tb;
        this.j.D();
        if (this.mc && this.b.pc(this.j, this.mc) && (!this.b.mq(this.mc.type, pc) || this.mc.N.solidEnabled)) return this.j.x = d, this.j.y = c, this.j.D(), this.mc;
        (e = this.b.nb(this.j)) || 0 !== this.xg || (h = this.b.sf(this.j, !0));
        this.j.x = d;
        this.j.y = c;
        this.j.D();
        if (e) {
            if (this.b.pc(this.j, e)) return null;
            this.tl = !1;
            return e
        }
        if (h &&
            h.length) {
            c = e = 0;
            for (d = h.length; e < d; e++) h[c] = h[e], this.b.pc(this.j, h[e]) || c++;
            if (1 <= c) return this.tl = !0, h[0]
        }
        return null
    };
    h.Fa = function() {};
    h.Zt = function() {
        var e = this.b.te(this.j),
            h, d, c, b, f, a, g, l, k;
        this.Wh || this.ok || (this.Vh = !1);
        var n = this.zj || this.Xm;
        c = this.hk || this.Ym;
        var q = (b = this.Wh || this.ok) && !this.Vh;
        this.ok = this.Ym = this.Xm = !1;
        if (this.enabled) {
            this.Po && (q = b = c = n = !1);
            b || (this.hh = 0);
            l = this.mc;
            k = !1;
            this.rl && ((this.b.nb(this.j) || this.b.sf(this.j)) && this.b.jd(this.j, -this.sb, -this.tb, 4, !0), this.rl = !1);
            !l || 0 !== this.J || l.y === this.Ng && l.x === this.Mg || (h = l.x - this.Mg, d = l.y - this.Ng, this.j.x += h, this.j.y += d, this.j.D(), this.Mg = l.x, this.Ng = l.y, k = !0, this.b.nb(this.j) && this.b.jd(this.j, -h, -d, 2.5 * Math.sqrt(h * h + d * d)));
            var v = this.Hs();
            if (d = this.b.nb(this.j))
                if (this.j.N.inputPredicted) this.b.jd(this.j, -this.sb, -this.tb, 10, !1);
                else if (this.b.du(this.j, Math.max(this.j.width, this.j.height) / 2)) this.b.dh(this.j, d);
            else return;
            v ? (this.Oi = this.Vi = !1, 0 < this.J && (this.Ii || (this.b.Lp(this.j, -this.sb, -this.tb, v), this.Ii = !0), this.J = 0), l != v) ? (this.mc = v, this.Mg = v.x, this.Ng = v.y, this.b.dh(this.j, v)) : k && (d = this.b.nb(this.j)) && (this.b.dh(this.j, d), 0 !== h && (0 < h ? this.b.jd(this.j, -this.hf, -this.jf) : this.b.jd(this.j, this.hf, this.jf)), this.b.jd(this.j, -this.sb, -this.tb)) : b || (this.Oi = !0);
            if (v && q || !v && this.no && b && this.Oi && !this.Vi) l = this.j.x, k = this.j.y, this.j.x -= this.sb, this.j.y -= this.tb, this.j.D(), this.b.nb(this.j) ? q = !1 : (this.hh = this.dp, this.b.trigger(Gc.prototype.n.ew, this.j), this.Od = 2, this.J = -this.Sf, q = !0, v ? this.Vh = !0 : this.Vi = !0), this.j.x = l, this.j.y = k, this.j.D();
            v || (b && 0 < this.hh ? (this.J = -this.Sf, this.hh -= e) : (this.mc = null, this.J += this.$b * e, this.J > this.gm && (this.J = this.gm)), q && (this.Vh = !0));
            this.Ii = !!v;
            n == c && (0 > this.G ? (this.G += this.yh * e, 0 < this.G && (this.G = 0)) : 0 < this.G && (this.G -= this.yh * e, 0 > this.G && (this.G = 0)));
            n && !c && (this.G = 0 < this.G ? this.G - (this.Ob + this.yh) * e : this.G - this.Ob * e);
            c && !n && (this.G = 0 > this.G ? this.G + (this.Ob + this.yh) * e : this.G + this.Ob * e);
            this.G > this.bf ? this.G = this.bf : this.G < -this.bf && (this.G = -this.bf);
            n = !1;
            0 !== this.G &&
                (l = this.j.x, k = this.j.y, h = this.G * e * this.hf, d = this.G * e * this.jf, this.j.x += this.hf * (1 < this.G ? 1 : -1) - this.sb, this.j.y += this.jf * (1 < this.G ? 1 : -1) - this.tb, this.j.D(), b = !1, f = this.b.nb(this.j), this.j.x = l + h, this.j.y = k + d, this.j.D(), c = this.b.nb(this.j), !c && v && (c = this.b.sf(this.j)) && (this.j.x = l, this.j.y = k, this.j.D(), this.b.pc(this.j, c) ? (c = null, b = !1) : b = !0, this.j.x = l + h, this.j.y = k + d, this.j.D()), c ? (h = Math.abs(this.G * e) + 2, f || !this.b.jd(this.j, -this.sb, -this.tb, h, b, c)) ? (this.b.dh(this.j, c), h = Math.max(Math.abs(this.G * e *
                    2.5), 30), this.b.jd(this.j, this.hf * (0 > this.G ? 1 : -1), this.jf * (0 > this.G ? 1 : -1), h, !1) ? !v || b || this.tl || (l = this.j.x, k = this.j.y, this.j.x += this.sb, this.j.y += this.tb, this.b.nb(this.j) ? this.b.jd(this.j, -this.sb, -this.tb, 3, !1) || (this.j.x = l, this.j.y = k, this.j.D()) : (this.j.x = l, this.j.y = k, this.j.D())) : (this.j.x = l, this.j.y = k, this.j.D()), b || (this.G = 0)) : !f && !q && Math.abs(this.J) < Math.abs(this.Sf / 4) && (this.J = 0, v || (n = !0)) : (l = this.Hs(), v && !l ? (d = Math.ceil(Math.abs(this.G * e)) + 2, l = this.j.x, k = this.j.y, this.j.x += this.sb * d, this.j.y +=
                    this.tb * d, this.j.D(), this.b.nb(this.j) || this.b.sf(this.j) ? this.b.jd(this.j, -this.sb, -this.tb, d + 2, !0) : (this.j.x = l, this.j.y = k, this.j.D())) : l && 0 === this.J && this.b.Lp(this.j, -this.sb, -this.tb, l)));
            if (0 !== this.J) {
                l = this.j.x;
                k = this.j.y;
                this.j.x += this.J * e * this.sb;
                this.j.y += this.J * e * this.tb;
                h = this.j.x;
                c = this.j.y;
                this.j.D();
                d = this.b.nb(this.j);
                b = !1;
                if (!d && 0 < this.J && !v) {
                    if ((b = 0 < this.xg ? null : this.b.sf(this.j, !0)) && b.length) {
                        if (this.Ji) {
                            this.j.x = l;
                            this.j.y = k;
                            this.j.D();
                            g = f = 0;
                            for (a = b.length; f < a; f++) b[g] = b[f], this.b.pc(this.j,
                                b[f]) || g++;
                            b.length = g;
                            this.j.x = h;
                            this.j.y = c;
                            this.j.D()
                        }
                        1 <= b.length && (d = b[0])
                    }
                    b = !!d
                }
                d && (this.b.dh(this.j, d), this.hh = 0, h = b ? Math.abs(this.J * e * 2.5 + 10) : Math.max(Math.abs(this.J * e * 2.5 + 10), 30), this.b.jd(this.j, this.sb * (0 > this.J ? 1 : -1), this.tb * (0 > this.J ? 1 : -1), h, b, d) ? (this.mc = d, this.Mg = d.x, this.Ng = d.y, (this.tl = b) && (n = !0), this.J = 0) : (this.j.x = l, this.j.y = k, this.j.D(), this.Ii = !0, b || (this.J = 0)))
            }
            3 !== this.Od && 0 < this.J && !v && (this.b.trigger(Gc.prototype.n.Oq, this.j), this.Od = 3);
            if (v || n) 3 === this.Od || n || q && 0 === this.J ?
                (this.b.trigger(Gc.prototype.n.Sq, this.j), this.Od = 0 === this.G && 0 === this.J ? 0 : 1) : (0 !== this.Od && 0 === this.G && 0 === this.J && (this.b.trigger(Gc.prototype.n.kw, this.j), this.Od = 0), 1 === this.Od || 0 === this.G && 0 === this.J || q || (this.b.trigger(Gc.prototype.n.hw, this.j), this.Od = 1));
            0 < this.xg && this.xg--;
            this.Ji = this.b.sf(this.j)
        }
    };
    e.prototype.Hq = function() {
        return 0 !== this.G || 0 !== this.J
    };
    e.prototype.Jv = function() {
        if (0 !== this.J) return !1;
        var e = null,
            h = null,
            d, c;
        d = this.j.x;
        c = this.j.y;
        this.j.x += this.sb;
        this.j.y += this.tb;
        this.j.D();
        (e = this.b.nb(this.j)) || 0 !== this.xg || (h = this.b.sf(this.j, !0));
        this.j.x = d;
        this.j.y = c;
        this.j.D();
        if (e) return !this.b.pc(this.j, e);
        if (h && h.length) {
            c = e = 0;
            for (d = h.length; e < d; e++) h[c] = h[e], this.b.pc(this.j, h[e]) || c++;
            if (1 <= c) return !0
        }
        return !1
    };
    e.prototype.Av = function(e) {
        var h = !1,
            d = this.j.x,
            c = this.j.y;
        this.j.x -= 3 * this.sb;
        this.j.y -= 3 * this.tb;
        this.j.D();
        if (this.b.nb(this.j)) return this.j.x = d, this.j.y = c, this.j.D(), !1;
        0 === e ? (this.j.x -= 2 * this.hf, this.j.y -= 2 * this.jf) : (this.j.x += 2 * this.hf, this.j.y += 2 * this.jf);
        this.j.D();
        h = this.b.nb(this.j);
        this.j.x = d;
        this.j.y = c;
        this.j.D();
        return h
    };
    e.prototype.Fv = function() {
        return 0 > this.J
    };
    e.prototype.Cv = function() {
        return 0 < this.J
    };
    e.prototype.ew = function() {
        return !0
    };
    e.prototype.Oq = function() {
        return !0
    };
    e.prototype.kw = function() {
        return !0
    };
    e.prototype.hw = function() {
        return !0
    };
    e.prototype.Sq = function() {
        return !0
    };
    n.n = new e;
    q.prototype.Gn = function(e) {
        this.bf = e;
        0 > this.bf && (this.bf = 0)
    };
    q.prototype.Fn = function(e) {
        this.Ob = e;
        0 > this.Ob && (this.Ob = 0)
    };
    q.prototype.Iw = function(e) {
        this.Sf = e;
        0 > this.Sf &&
            (this.Sf = 0)
    };
    q.prototype.Zw = function(e) {
        switch (e) {
            case 0:
                this.Xm = !0;
                break;
            case 1:
                this.Ym = !0;
                break;
            case 2:
                this.ok = !0
        }
    };
    q.prototype.Tw = function(e) {
        this.J = e
    };
    q.prototype.Ge = function(e) {
        this.enabled !== (1 === e) && (this.enabled = 1 === e, this.enabled || (this.mc = null))
    };
    n.A = new q;
    n.P = new function() {}
})();

function Hc(e) {
    this.b = e
}
(function() {
    function e(d) {
        null == d && (d = {});
        d.x = 0;
        d.y = 0;
        d.a = -1;
        return d
    }

    function q(d) {
        if (null == d || "object" != typeof d) return d;
        var c = d.constructor(),
            b;
        for (b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
        return c
    }

    function n() {}

    function h() {}
    var r = Hc.prototype;
    r.T = function(d) {
        this.behavior = d;
        this.b = d.b
    };
    r.T.prototype.H = function() {};
    r.M = function(d, c) {
        this.type = d;
        this.behavior = d.behavior;
        this.j = c;
        this.b = d.b
    };
    var p = r.M.prototype;
    p.H = function() {
        this.enabled = 1 === this.C[0];
        this.Ab || (this.Fc = {});
        this.Fc.max = this.C[1];
        this.Fc.acc = this.C[2];
        this.Fc.dec = this.C[3];
        this.lB = 1 === this.C[4];
        this.Zz = 1 === this.C[5];
        this.Ab || (this.target = {
            x: 0,
            y: 0,
            a: 0
        });
        this.Qf = !1;
        this.Pp = this.gf = this.Td = 0;
        this.Ab || (this.ze = {
            x: 0,
            y: 0
        });
        this.ze.x = 0;
        this.ze.y = 0;
        this.ve = e(this.ve);
        this.ei = e(this.ei);
        this.Pl = null;
        this.Mh = !1
    };
    p.Fa = function() {
        this.Pp = 0;
        this.enabled && this.Qf && this.move(this.b.te(this.j))
    };
    p.move = function(d) {
        if (0 != d) {
            this.ze.x === this.j.x && this.ze.y === this.j.y || this.iu();
            var c = !1;
            0 != this.Fc.dec && (c = this.Td * this.Td / (2 * this.Fc.dec) >= this.gf);
            c = c ? -this.Fc.dec : this.Fc.acc;
            0 != c && this.pi(this.Td + c * d);
            d = this.Td * d;
            this.gf -= d;
            var c = !1,
                b = this.target.a,
                e = Math.cos(b),
                b = Math.sin(b);
            0 >= this.gf || 0 >= this.Td ? (c = !0, this.j.x = this.target.x, this.j.y = this.target.y, 0 < this.Td && (this.Pp = -this.gf / this.Td), this.rz(), this.pi(0), this.gf = 0) : (this.j.x += d * e, this.j.y += d * b);
            this.j.D();
            var a = !1;
            if (this.lB) {
                var g = this.b.nb(this.j);
                g && (this.b.dh(this.j, g), this.b.jd(this.j, -e, -b, Math.max(d, 50)), a = !0)
            }
            this.ze.x = this.j.x;
            this.ze.y = this.j.y;
            a ? (this.Qf = !1, this.Mh = !0, this.b.trigger(Hc.prototype.n.iw,
                this.j), this.Mh = !1) : c && (this.Qf = !1, this.Mh = !0, this.b.trigger(Hc.prototype.n.Pq, this.j), this.Mh = !1)
        }
    };
    p.jh = function() {
        this.ve.x = this.j.x;
        this.ve.y = this.j.y
    };
    p.pi = function(d) {
        null != d ? this.Td = d > this.Fc.max ? this.Fc.max : d : 0 == this.Fc.acc && (this.Td = this.Fc.max)
    };
    p.iu = function() {
        var d = this.target.x - this.j.x,
            c = this.target.y - this.j.y;
        this.target.a = Math.atan2(c, d);
        this.gf = Math.sqrt(d * d + c * c);
        this.ze.x = this.j.x;
        this.ze.y = this.j.y
    };
    p.hB = function(d, c) {
        this.target.x = d;
        this.target.y = c;
        this.pi(null);
        this.iu();
        this.ve.x =
            this.j.x;
        this.ve.y = this.j.y;
        this.Qf = !0;
        this.ei.x = this.j.x;
        this.ei.y = this.j.y;
        this.ei.a = Ja(La(this.j.x, this.j.y, d, c));
        this.Zz && this.move(this.Pp)
    };
    p.eA = function() {
        var d = this.b.Jd,
            c = this.Pl != d;
        this.Pl = d;
        return c
    };
    p.rz = function() {
        if (this.eA()) {
            var d = this.j.x - this.ve.x,
                c = this.j.y - this.ve.y;
            if (0 != d || 0 != c) this.ve.a = Ja(Math.atan2(c, d))
        }
    };
    p.Ma = function() {
        return {
            en: this.enabled,
            v: q(this.Fc),
            t: q(this.target),
            is_m: this.Qf,
            c_spd: this.Td,
            rd: this.gf,
            pp: q(this.ze),
            ma: q(this.ve),
            ms: q(this.ei),
            lt: this.Pl
        }
    };
    p.Sa = function(d) {
        this.enabled =
            d.en;
        this.Fc = d.v;
        this.target = d.t;
        this.Qf = d.is_m;
        this.Td = d.c_spd;
        this.gf = d.rd;
        this.ze = d.pp;
        this.ve = d.ma;
        this.ei = d.ms;
        this.Pl = d.lt
    };
    r.n = new n;
    n.prototype.Pq = function() {
        return this.Mh
    };
    n.prototype.Hq = function() {
        return this.enabled && this.Qf
    };
    n.prototype.iw = function() {
        return this.Mh
    };
    r.A = new h;
    h.prototype.Ge = function(d) {
        this.enabled = 1 === d
    };
    h.prototype.Gn = function(d) {
        this.Fc.max = d;
        this.pi(null)
    };
    h.prototype.Fn = function(d) {
        this.Fc.acc = d;
        this.pi(null)
    };
    h.prototype.Qw = function(d, c) {
        this.hB(d, c)
    };
    h.prototype.Cw =
        function(d) {
            this.pi(d)
        };
    h.prototype.mr = function() {
        this.Qf = !1
    };
    r.P = new function() {}
})();

function Jc(e) {
    this.b = e
}
(function() {
    var e = Jc.prototype;
    e.T = function(e) {
        this.behavior = e;
        this.b = e.b
    };
    e.T.prototype.H = function() {};
    e.M = function(e, d) {
        this.type = e;
        this.behavior = e.behavior;
        this.j = d;
        this.b = e.b;
        this.Gb = 0
    };
    var q = e.M.prototype,
        n = 2 * Math.PI,
        h = Math.PI / 2,
        r = 3 * Math.PI / 2;
    q.H = function() {
        this.Xa = 1 === this.C[0];
        this.Qj = this.C[1];
        this.xq = this.C[2];
        this.ef = this.C[3];
        this.ef += Math.random() * this.C[4];
        0 === this.ef ? this.Gb = 0 : (this.Gb = this.C[5] / this.ef * n, this.Gb += Math.random() * this.C[6] / this.ef * n);
        this.Ec = this.C[7];
        this.Ec += Math.random() *
            this.C[8];
        this.ek = this.Gg = this.ua = 0;
        this.init()
    };
    q.Ma = function() {
        return {
            i: this.Gb,
            a: this.Xa,
            mv: this.Qj,
            w: this.xq,
            p: this.ef,
            mag: this.Ec,
            iv: this.ua,
            iv2: this.Gg,
            r: this.ek,
            lkv: this.Tc,
            lkv2: this.xj
        }
    };
    q.Sa = function(e) {
        this.Gb = e.i;
        this.Xa = e.a;
        this.Qj = e.mv;
        this.xq = e.w;
        this.ef = e.p;
        this.Ec = e.mag;
        this.ua = e.iv;
        this.Gg = e.iv2 || 0;
        this.ek = e.r;
        this.Tc = e.lkv;
        this.xj = e.lkv2 || 0
    };
    q.init = function() {
        switch (this.Qj) {
            case 0:
                this.ua = this.j.x;
                break;
            case 1:
                this.ua = this.j.y;
                break;
            case 2:
                this.ua = this.j.width;
                this.ek = this.j.height /
                    this.j.width;
                break;
            case 3:
                this.ua = this.j.width;
                break;
            case 4:
                this.ua = this.j.height;
                break;
            case 5:
                this.ua = this.j.q;
                this.Ec = L(this.Ec);
                break;
            case 6:
                this.ua = this.j.opacity;
                break;
            case 7:
                this.ua = 0;
                break;
            case 8:
                this.ua = this.j.x, this.Gg = this.j.y
        }
        this.Tc = this.ua;
        this.xj = this.Gg
    };
    q.Af = function(e) {
        e = e % n;
        switch (this.xq) {
            case 0:
                return Math.sin(e);
            case 1:
                return e <= h ? e / h : e <= r ? 1 - 2 * (e - h) / Math.PI : (e - r) / h - 1;
            case 2:
                return 2 * e / n - 1;
            case 3:
                return -2 * e / n + 1;
            case 4:
                return e < Math.PI ? -1 : 1
        }
        return 0
    };
    q.Fa = function() {
        var e = this.b.te(this.j);
        this.Xa && 0 !== e && (0 === this.ef ? this.Gb = 0 : (this.Gb += e / this.ef * n, this.Gb = this.Gb % n), this.uB())
    };
    q.uB = function() {
        switch (this.Qj) {
            case 0:
                this.j.x !== this.Tc && (this.ua += this.j.x - this.Tc);
                this.j.x = this.ua + this.Af(this.Gb) * this.Ec;
                this.Tc = this.j.x;
                break;
            case 1:
                this.j.y !== this.Tc && (this.ua += this.j.y - this.Tc);
                this.j.y = this.ua + this.Af(this.Gb) * this.Ec;
                this.Tc = this.j.y;
                break;
            case 2:
                this.j.width = this.ua + this.Af(this.Gb) * this.Ec;
                this.j.height = this.j.width * this.ek;
                break;
            case 3:
                this.j.width = this.ua + this.Af(this.Gb) *
                    this.Ec;
                break;
            case 4:
                this.j.height = this.ua + this.Af(this.Gb) * this.Ec;
                break;
            case 5:
                this.j.q !== this.Tc && (this.ua = Ia(this.ua + (this.j.q - this.Tc)));
                this.j.q = Ia(this.ua + this.Af(this.Gb) * this.Ec);
                this.Tc = this.j.q;
                break;
            case 6:
                this.j.opacity = this.ua + this.Af(this.Gb) * this.Ec / 100;
                0 > this.j.opacity ? this.j.opacity = 0 : 1 < this.j.opacity && (this.j.opacity = 1);
                break;
            case 8:
                this.j.x !== this.Tc && (this.ua += this.j.x - this.Tc), this.j.y !== this.xj && (this.Gg += this.j.y - this.xj), this.j.x = this.ua + Math.cos(this.j.q) * this.Af(this.Gb) *
                    this.Ec, this.j.y = this.Gg + Math.sin(this.j.q) * this.Af(this.Gb) * this.Ec, this.Tc = this.j.x, this.xj = this.j.y
        }
        this.j.D()
    };
    q.It = function(e, d) {
        switch (this.Qj) {
            case 2:
                this.ua *= d.width / e.width;
                this.ek = d.height / d.width;
                break;
            case 3:
                this.ua *= d.width / e.width;
                break;
            case 4:
                this.ua *= d.height / e.height
        }
    };
    e.n = new function() {};
    e.A = new function() {};
    e.P = new function() {}
})();

function Lc(e) {
    this.b = e
}
(function() {
    var e = Lc.prototype;
    e.T = function(e) {
        this.behavior = e;
        this.b = e.b
    };
    e.T.prototype.H = function() {};
    e.M = function(e, h) {
        this.type = e;
        this.behavior = e.behavior;
        this.j = h;
        this.b = e.b
    };
    var q = e.M.prototype;
    q.H = function() {
        this.Lc = {}
    };
    q.Yd = function() {
        Wa(this.Lc)
    };
    q.Ma = function() {
        var e = {},
            h, q;
        for (h in this.Lc) this.Lc.hasOwnProperty(h) && (q = this.Lc[h], e[h] = {
            c: q.current.R,
            t: q.total.R,
            d: q.duration,
            r: q.gu
        });
        return e
    };
    q.Sa = function(e) {
        this.Lc = {};
        for (var h in e) e.hasOwnProperty(h) && (this.Lc[h] = {
            current: new ab,
            total: new ab,
            duration: e[h].d,
            gu: e[h].r
        }, this.Lc[h].current.R = e[h].c, this.Lc[h].total.R = e[h].t)
    };
    q.Fa = function() {
        var e = this.b.te(this.j),
            h, q;
        for (h in this.Lc) this.Lc.hasOwnProperty(h) && (q = this.Lc[h], q.current.add(e), q.total.add(e))
    };
    q.jh = function() {
        var e, h;
        for (e in this.Lc) this.Lc.hasOwnProperty(e) && (h = this.Lc[e], h.current.R >= h.duration && (h.gu ? h.current.R -= h.duration : delete this.Lc[e]))
    };
    e.n = new function() {};
    e.A = new function() {};
    e.P = new function() {}
})();

function Mc(e) {
    this.b = e
}
(function() {
    var e = Mc.prototype;
    e.T = function(e) {
        this.behavior = e;
        this.b = e.b
    };
    e.T.prototype.H = function() {};
    e.M = function(e, n) {
        this.type = e;
        this.behavior = e.behavior;
        this.j = n;
        this.b = e.b
    };
    e = e.M.prototype;
    e.H = function() {};
    e.Fa = function() {
        this.j.Ga();
        var e = this.j.Ka,
            n = this.j.u.xb;
        (0 > e.right || 0 > e.bottom || e.left > n.width || e.top > n.height) && this.b.ke(this.j)
    }
})();

function qc(e) {
    this.b = e
}
(function() {
    function e() {}
    var q = qc.prototype;
    q.T = function(e) {
        this.behavior = e;
        this.b = e.b
    };
    q.T.prototype.H = function() {};
    q.M = function(e, n) {
        this.type = e;
        this.behavior = e.behavior;
        this.j = n;
        this.b = e.b
    };
    var n = q.M.prototype;
    n.H = function() {
        this.j.N.jumpthruEnabled = 0 !== this.C[0]
    };
    n.Fa = function() {};
    q.n = new function() {};
    e.prototype.Ge = function(e) {
        this.j.N.jumpthruEnabled = !!e
    };
    q.A = new e
})();

function Nc(e) {
    this.b = e;
    this.Wm = this.nk = this.fh = this.Vm = 0
}
(function() {
    function e() {}
    var q = Nc.prototype;
    q.T = function(e) {
        this.behavior = e;
        this.b = e.b
    };
    q.T.prototype.H = function() {};
    q.M = function(e, n) {
        this.type = e;
        this.behavior = e.behavior;
        this.j = n;
        this.b = e.b
    };
    var n = q.M.prototype;
    n.H = function() {
        this.enabled = 0 !== this.C[0]
    };
    n.Ma = function() {
        return {
            smg: this.behavior.Vm,
            ss: this.behavior.fh,
            se: this.behavior.nk,
            smd: this.behavior.Wm
        }
    };
    n.Sa = function(e) {
        this.behavior.Vm = e.smg;
        this.behavior.fh = e.ss;
        this.behavior.nk = e.se;
        this.behavior.Wm = e.smd
    };
    n.Fa = function() {};
    n.jh = function() {
        if (this.enabled) {
            var e =
                this.behavior.hm.xf(),
                n = 0,
                p = 0,
                d, c, b, f = 0;
            d = 0;
            for (c = e.length; d < c; d++) {
                a: {
                    b = e[d];
                    for (var a = void 0, g = void 0, l = void 0, a = 0, g = b.Z.length; a < g; ++a)
                        if (l = b.Z[a], l.behavior instanceof Nc) {
                            b = l;
                            break a
                        }
                    b = null
                }
                b && b.enabled && (n += e[d].x, p += e[d].y, ++f)
            }
            e = this.j.u.xb;
            c = this.b.wb.R;
            b = d = 0;
            c >= this.behavior.fh && c < this.behavior.nk && (d = this.behavior.Vm * Math.min(this.b.gg, 1), 0 === this.behavior.Wm && (d *= 1 - (c - this.behavior.fh) / (this.behavior.nk - this.behavior.fh)), c = Math.random() * Math.PI * 2, b = Math.random() * d, d = Math.cos(c) * b, b *=
                Math.sin(c));
            e.Xp(n / f + d);
            e.Yp(p / f + b)
        }
    };
    e.prototype.Yw = function(e, n, p) {
        this.behavior.Vm = e;
        this.behavior.fh = this.b.wb.R;
        this.behavior.nk = this.behavior.fh + n;
        this.behavior.Wm = p
    };
    e.prototype.Ge = function(e) {
        this.enabled = 0 !== e
    };
    q.A = new e
})();

function pc(e) {
    this.b = e
}
(function() {
    function e() {}
    var q = pc.prototype;
    q.T = function(e) {
        this.behavior = e;
        this.b = e.b
    };
    q.T.prototype.H = function() {};
    q.M = function(e, n) {
        this.type = e;
        this.behavior = e.behavior;
        this.j = n;
        this.b = e.b
    };
    var n = q.M.prototype;
    n.H = function() {
        this.j.N.solidEnabled = 0 !== this.C[0]
    };
    n.Fa = function() {};
    q.n = new function() {};
    e.prototype.Ge = function(e) {
        this.j.N.solidEnabled = !!e
    };
    q.A = new e
})();

function oc() {
    return [tc, sc, rc, Bc, uc, vc, wc, Y, xc, yc, zc, Ac, Cc, Mc, Gc, Lc, pc, Ec, Nc, Hc, Jc, Fc, qc, Dc, W.prototype.n.Ev, W.prototype.n.Uq, W.prototype.A.Sw, W.prototype.P.lA, W.prototype.n.dv, wc.prototype.A.Xw, Y.prototype.A.Qv, Y.prototype.A.dr, Y.prototype.A.er, W.prototype.A.Gw, sc.prototype.n.lv, Y.prototype.A.Eq, Y.prototype.A.hr, W.prototype.P.EB, W.prototype.P.DB, Dc.prototype.A.Ew, Dc.prototype.A.Dw, Dc.prototype.A.cx, W.prototype.n.Tq, rc.prototype.n.Jk, W.prototype.A.jx, W.prototype.n.kv, W.prototype.A.ww, rc.prototype.A.CallFunction,
        Y.prototype.n.Dq, W.prototype.P.kA, W.prototype.n.mx, Ec.prototype.n.Dv, rc.prototype.n.jv, Y.prototype.n.Gq, tc.prototype.A.mr, Nc.prototype.A.Ge, Y.prototype.A.$w, tc.prototype.A.Play, W.prototype.A.ox, Y.prototype.A.In, Cc.prototype.A.Ge, Cc.prototype.A.yw, Ec.prototype.A.hx, Y.prototype.A.zw, Y.prototype.A.Hw, Y.prototype.n.Bq, Gc.prototype.A.Ge, Y.prototype.A.Bw, Hc.prototype.A.Cw, Hc.prototype.A.Fn, Hc.prototype.A.Qw, Y.prototype.P.or, Y.prototype.P.pr, rc.prototype.P.mw, W.prototype.A.wv, sc.prototype.n.$u, Y.prototype.n.pw,
        sc.prototype.P.qv, W.prototype.A.pv, Y.prototype.A.qr, W.prototype.n.Fq, W.prototype.n.uv, sc.prototype.P.Bn, sc.prototype.A.uw, Y.prototype.A.Lw, Y.prototype.n.An, Y.prototype.n.Nq, sc.prototype.n.nv, Y.prototype.P.nx, sc.prototype.A.vw, Y.prototype.P.ov, W.prototype.n.vv, W.prototype.n.ow, sc.prototype.A.Vw, W.prototype.P.qA, Y.prototype.A.ir, xc.prototype.A.Hn, Ac.prototype.n.En, xc.prototype.n.Jq, W.prototype.A.xv, xc.prototype.n.Bq, W.prototype.n.sv, uc.prototype.n.Gv, Ac.prototype.n.Nv, uc.prototype.n.Qq, uc.prototype.n.Cn,
        Y.prototype.n.Hv, Gc.prototype.n.Av, Gc.prototype.A.Zw, Gc.prototype.n.Jv, tc.prototype.A.sw, W.prototype.P.round, W.prototype.P.random, Gc.prototype.n.Sq, Y.prototype.n.Lq, Gc.prototype.n.Cv, Gc.prototype.A.Tw, Gc.prototype.A.Gn, Y.prototype.A.jr, Gc.prototype.n.Fv, Y.prototype.A.kr, Y.prototype.n.Kv, zc.prototype.n.Dq, zc.prototype.n.An, W.prototype.n.Iv, W.prototype.n.rv, Y.prototype.A.ix, Cc.prototype.A.Pw, Y.prototype.A.Kw, Gc.prototype.n.Hq, Y.prototype.A.Xu, vc.prototype.A.xw, tc.prototype.n.Mv, Y.prototype.n.Lv, Y.prototype.n.yv,
        Gc.prototype.n.Oq, Y.prototype.A.Aw, tc.prototype.A.Jw, tc.prototype.A.Uw, Ac.prototype.n.Zq, Y.prototype.n.Jq, W.prototype.A.Rw, yc.prototype.A.In, tc.prototype.A.Mw, yc.prototype.A.Hn, xc.prototype.A.kr, Y.prototype.A.fr, Ec.prototype.A.tv, pc.prototype.A.Ge, W.prototype.n.gv, Y.prototype.A.Jn, Y.prototype.A.gx, Y.prototype.A.bx, Y.prototype.A.kx, Y.prototype.n.Iq, Y.prototype.A.Kq, Nc.prototype.A.Yw, W.prototype.A.Yu, xc.prototype.A.Jn, xc.prototype.A.In, xc.prototype.A.Eq, Y.prototype.P.nr, Y.prototype.n.Uv, Y.prototype.n.ig,
        Hc.prototype.A.Gn, W.prototype.P.AB, W.prototype.P.BB, Hc.prototype.n.Pq, Y.prototype.A.Fw, tc.prototype.A.rw, W.prototype.P.Nr, W.prototype.P.nA, xc.prototype.A.hr, Dc.prototype.n.cr, xc.prototype.n.Iq, xc.prototype.A.fr, Fc.prototype.A.qw, Gc.prototype.A.Iw, vc.prototype.A.Kq, vc.prototype.A.Ow, vc.prototype.A.Ww, Y.prototype.P.Bn, Y.prototype.P.Opacity, Y.prototype.n.hv, xc.prototype.n.Gq, W.prototype.P.left, W.prototype.P.mA, xc.prototype.P.Text, xc.prototype.n.Cq, xc.prototype.A.dr, xc.prototype.A.er
    ]
};