! function(a) {
    if ("object" == typeof exports) module.exports = a();
    else if ("function" == typeof define && define.amd) define(a);
    else {
        var b;
        "undefined" != typeof window ? b = window : "undefined" != typeof global ? b = global : "undefined" != typeof self && (b = self), b.p2 = a()
    }
}(function() {
    return function a(b, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!b[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i) return i(g, !0);
                    if (f) return f(g, !0);
                    throw new Error("Cannot find module '" + g + "'")
                }
                var j = c[g] = {
                    exports: {}
                };
                b[g][0].call(j.exports, function(a) {
                    var c = b[g][1][a];
                    return e(c ? c : a)
                }, j, j.exports, a, b, c, d)
            }
            return c[g].exports
        }
        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
        return e
    }({
        1: [function(a, b, c) {
            (function(b, d, e) {
                function e(a, b, c) {
                    if (!(this instanceof e)) return new e(a, b, c);
                    var d = typeof a;
                    if ("base64" === b && "string" === d)
                        for (a = D(a); a.length % 4 !== 0;) a += "=";
                    var f;
                    if ("number" === d) f = G(a);
                    else if ("string" === d) f = e.byteLength(a, b);
                    else {
                        if ("object" !== d) throw new Error("First argument needs to be a number, array or string.");
                        f = G(a.length)
                    }
                    var g;
                    e._useTypedArrays ? g = E(new Uint8Array(f)) : (g = this, g.length = f, g._isBuffer = !0);
                    var h;
                    if (e._useTypedArrays && "function" == typeof Uint8Array && a instanceof Uint8Array) g._set(a);
                    else if (I(a))
                        for (h = 0; f > h; h++) g[h] = e.isBuffer(a) ? a.readUInt8(h) : a[h];
                    else if ("string" === d) g.write(a, 0, b);
                    else if ("number" === d && !e._useTypedArrays && !c)
                        for (h = 0; f > h; h++) g[h] = 0;
                    return g
                }

                function f(a, b, c, d) {
                    c = Number(c) || 0;
                    var f = a.length - c;
                    d ? (d = Number(d), d > f && (d = f)) : d = f;
                    var g = b.length;
                    T(g % 2 === 0, "Invalid hex string"), d > g / 2 && (d = g / 2);
                    for (var h = 0; d > h; h++) {
                        var i = parseInt(b.substr(2 * h, 2), 16);
                        T(!isNaN(i), "Invalid hex string"), a[c + h] = i
                    }
                    return e._charsWritten = 2 * h, h
                }

                function g(a, b, c, d) {
                    var f = e._charsWritten = O(K(b), a, c, d);
                    return f
                }

                function h(a, b, c, d) {
                    var f = e._charsWritten = O(L(b), a, c, d);
                    return f
                }

                function i(a, b, c, d) {
                    return h(a, b, c, d)
                }

                function j(a, b, c, d) {
                    var f = e._charsWritten = O(N(b), a, c, d);
                    return f
                }

                function k(a, b, c, d) {
                    var f = e._charsWritten = O(M(b), a, c, d);
                    return f
                }

                function l(a, b, c) {
                    return U.fromByteArray(0 === b && c === a.length ? a : a.slice(b, c))
                }

                function m(a, b, c) {
                    var d = "",
                        e = "";
                    c = Math.min(a.length, c);
                    for (var f = b; c > f; f++) a[f] <= 127 ? (d += P(e) + String.fromCharCode(a[f]), e = "") : e += "%" + a[f].toString(16);
                    return d + P(e)
                }

                function n(a, b, c) {
                    var d = "";
                    c = Math.min(a.length, c);
                    for (var e = b; c > e; e++) d += String.fromCharCode(a[e]);
                    return d
                }

                function o(a, b, c) {
                    return n(a, b, c)
                }

                function p(a, b, c) {
                    var d = a.length;
                    (!b || 0 > b) && (b = 0), (!c || 0 > c || c > d) && (c = d);
                    for (var e = "", f = b; c > f; f++) e += J(a[f]);
                    return e
                }

                function q(a, b, c) {
                    for (var d = a.slice(b, c), e = "", f = 0; f < d.length; f += 2) e += String.fromCharCode(d[f] + 256 * d[f + 1]);
                    return e
                }

                function r(a, b, c, d) {
                    d || (T("boolean" == typeof c, "missing or invalid endian"), T(void 0 !== b && null !== b, "missing offset"), T(b + 1 < a.length, "Trying to read beyond buffer length"));
                    var e = a.length;
                    if (!(b >= e)) {
                        var f;
                        return c ? (f = a[b], e > b + 1 && (f |= a[b + 1] << 8)) : (f = a[b] << 8, e > b + 1 && (f |= a[b + 1])), f
                    }
                }

                function s(a, b, c, d) {
                    d || (T("boolean" == typeof c, "missing or invalid endian"), T(void 0 !== b && null !== b, "missing offset"), T(b + 3 < a.length, "Trying to read beyond buffer length"));
                    var e = a.length;
                    if (!(b >= e)) {
                        var f;
                        return c ? (e > b + 2 && (f = a[b + 2] << 16), e > b + 1 && (f |= a[b + 1] << 8), f |= a[b], e > b + 3 && (f += a[b + 3] << 24 >>> 0)) : (e > b + 1 && (f = a[b + 1] << 16), e > b + 2 && (f |= a[b + 2] << 8), e > b + 3 && (f |= a[b + 3]), f += a[b] << 24 >>> 0), f
                    }
                }

                function t(a, b, c, d) {
                    d || (T("boolean" == typeof c, "missing or invalid endian"), T(void 0 !== b && null !== b, "missing offset"), T(b + 1 < a.length, "Trying to read beyond buffer length"));
                    var e = a.length;
                    if (!(b >= e)) {
                        var f = r(a, b, c, !0),
                            g = 32768 & f;
                        return g ? -1 * (65535 - f + 1) : f
                    }
                }

                function u(a, b, c, d) {
                    d || (T("boolean" == typeof c, "missing or invalid endian"), T(void 0 !== b && null !== b, "missing offset"), T(b + 3 < a.length, "Trying to read beyond buffer length"));
                    var e = a.length;
                    if (!(b >= e)) {
                        var f = s(a, b, c, !0),
                            g = 2147483648 & f;
                        return g ? -1 * (4294967295 - f + 1) : f
                    }
                }

                function v(a, b, c, d) {
                    return d || (T("boolean" == typeof c, "missing or invalid endian"), T(b + 3 < a.length, "Trying to read beyond buffer length")), V.read(a, b, c, 23, 4)
                }

                function w(a, b, c, d) {
                    return d || (T("boolean" == typeof c, "missing or invalid endian"), T(b + 7 < a.length, "Trying to read beyond buffer length")), V.read(a, b, c, 52, 8)
                }

                function x(a, b, c, d, e) {
                    e || (T(void 0 !== b && null !== b, "missing value"), T("boolean" == typeof d, "missing or invalid endian"), T(void 0 !== c && null !== c, "missing offset"), T(c + 1 < a.length, "trying to write beyond buffer length"), Q(b, 65535));
                    var f = a.length;
                    if (!(c >= f))
                        for (var g = 0, h = Math.min(f - c, 2); h > g; g++) a[c + g] = (b & 255 << 8 * (d ? g : 1 - g)) >>> 8 * (d ? g : 1 - g)
                }

                function y(a, b, c, d, e) {
                    e || (T(void 0 !== b && null !== b, "missing value"), T("boolean" == typeof d, "missing or invalid endian"), T(void 0 !== c && null !== c, "missing offset"), T(c + 3 < a.length, "trying to write beyond buffer length"), Q(b, 4294967295));
                    var f = a.length;
                    if (!(c >= f))
                        for (var g = 0, h = Math.min(f - c, 4); h > g; g++) a[c + g] = b >>> 8 * (d ? g : 3 - g) & 255
                }

                function z(a, b, c, d, e) {
                    e || (T(void 0 !== b && null !== b, "missing value"), T("boolean" == typeof d, "missing or invalid endian"), T(void 0 !== c && null !== c, "missing offset"), T(c + 1 < a.length, "Trying to write beyond buffer length"), R(b, 32767, -32768));
                    var f = a.length;
                    c >= f || (b >= 0 ? x(a, b, c, d, e) : x(a, 65535 + b + 1, c, d, e))
                }

                function A(a, b, c, d, e) {
                    e || (T(void 0 !== b && null !== b, "missing value"), T("boolean" == typeof d, "missing or invalid endian"), T(void 0 !== c && null !== c, "missing offset"), T(c + 3 < a.length, "Trying to write beyond buffer length"), R(b, 2147483647, -2147483648));
                    var f = a.length;
                    c >= f || (b >= 0 ? y(a, b, c, d, e) : y(a, 4294967295 + b + 1, c, d, e))
                }

                function B(a, b, c, d, e) {
                    e || (T(void 0 !== b && null !== b, "missing value"), T("boolean" == typeof d, "missing or invalid endian"), T(void 0 !== c && null !== c, "missing offset"), T(c + 3 < a.length, "Trying to write beyond buffer length"), S(b, 3.4028234663852886e38, -3.4028234663852886e38));
                    var f = a.length;
                    c >= f || V.write(a, b, c, d, 23, 4)
                }

                function C(a, b, c, d, e) {
                    e || (T(void 0 !== b && null !== b, "missing value"), T("boolean" == typeof d, "missing or invalid endian"), T(void 0 !== c && null !== c, "missing offset"), T(c + 7 < a.length, "Trying to write beyond buffer length"), S(b, 1.7976931348623157e308, -1.7976931348623157e308));
                    var f = a.length;
                    c >= f || V.write(a, b, c, d, 52, 8)
                }

                function D(a) {
                    return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "")
                }

                function E(a) {
                    return a._isBuffer = !0, a._get = a.get, a._set = a.set, a.get = W.get, a.set = W.set, a.write = W.write, a.toString = W.toString, a.toLocaleString = W.toString, a.toJSON = W.toJSON, a.copy = W.copy, a.slice = W.slice, a.readUInt8 = W.readUInt8, a.readUInt16LE = W.readUInt16LE, a.readUInt16BE = W.readUInt16BE, a.readUInt32LE = W.readUInt32LE, a.readUInt32BE = W.readUInt32BE, a.readInt8 = W.readInt8, a.readInt16LE = W.readInt16LE, a.readInt16BE = W.readInt16BE, a.readInt32LE = W.readInt32LE, a.readInt32BE = W.readInt32BE, a.readFloatLE = W.readFloatLE, a.readFloatBE = W.readFloatBE, a.readDoubleLE = W.readDoubleLE, a.readDoubleBE = W.readDoubleBE, a.writeUInt8 = W.writeUInt8, a.writeUInt16LE = W.writeUInt16LE, a.writeUInt16BE = W.writeUInt16BE, a.writeUInt32LE = W.writeUInt32LE, a.writeUInt32BE = W.writeUInt32BE, a.writeInt8 = W.writeInt8, a.writeInt16LE = W.writeInt16LE, a.writeInt16BE = W.writeInt16BE, a.writeInt32LE = W.writeInt32LE, a.writeInt32BE = W.writeInt32BE, a.writeFloatLE = W.writeFloatLE, a.writeFloatBE = W.writeFloatBE, a.writeDoubleLE = W.writeDoubleLE, a.writeDoubleBE = W.writeDoubleBE, a.fill = W.fill, a.inspect = W.inspect, a.toArrayBuffer = W.toArrayBuffer, a
                }

                function F(a, b, c) {
                    return "number" != typeof a ? c : (a = ~~a, a >= b ? b : a >= 0 ? a : (a += b, a >= 0 ? a : 0))
                }

                function G(a) {
                    return a = ~~Math.ceil(+a), 0 > a ? 0 : a
                }

                function H(a) {
                    return (Array.isArray || function(a) {
                        return "[object Array]" === Object.prototype.toString.call(a)
                    })(a)
                }

                function I(a) {
                    return H(a) || e.isBuffer(a) || a && "object" == typeof a && "number" == typeof a.length
                }

                function J(a) {
                    return 16 > a ? "0" + a.toString(16) : a.toString(16)
                }

                function K(a) {
                    for (var b = [], c = 0; c < a.length; c++) {
                        var d = a.charCodeAt(c);
                        if (127 >= d) b.push(a.charCodeAt(c));
                        else {
                            var e = c;
                            d >= 55296 && 57343 >= d && c++;
                            for (var f = encodeURIComponent(a.slice(e, c + 1)).substr(1).split("%"), g = 0; g < f.length; g++) b.push(parseInt(f[g], 16))
                        }
                    }
                    return b
                }

                function L(a) {
                    for (var b = [], c = 0; c < a.length; c++) b.push(255 & a.charCodeAt(c));
                    return b
                }

                function M(a) {
                    for (var b, c, d, e = [], f = 0; f < a.length; f++) b = a.charCodeAt(f), c = b >> 8, d = b % 256, e.push(d), e.push(c);
                    return e
                }

                function N(a) {
                    return U.toByteArray(a)
                }

                function O(a, b, c, d) {
                    for (var e = 0; d > e && !(e + c >= b.length || e >= a.length); e++) b[e + c] = a[e];
                    return e
                }

                function P(a) {
                    try {
                        return decodeURIComponent(a)
                    } catch (b) {
                        return String.fromCharCode(65533)
                    }
                }

                function Q(a, b) {
                    T("number" == typeof a, "cannot write a non-number as a number"), T(a >= 0, "specified a negative value for writing an unsigned value"), T(b >= a, "value is larger than maximum value for type"), T(Math.floor(a) === a, "value has a fractional component")
                }

                function R(a, b, c) {
                    T("number" == typeof a, "cannot write a non-number as a number"), T(b >= a, "value larger than maximum allowed value"), T(a >= c, "value smaller than minimum allowed value"), T(Math.floor(a) === a, "value has a fractional component")
                }

                function S(a, b, c) {
                    T("number" == typeof a, "cannot write a non-number as a number"), T(b >= a, "value larger than maximum allowed value"), T(a >= c, "value smaller than minimum allowed value")
                }

                function T(a, b) {
                    if (!a) throw new Error(b || "Failed assertion")
                }
                var U = a("base64-js"),
                    V = a("ieee754");
                c.Buffer = e, c.SlowBuffer = e, c.INSPECT_MAX_BYTES = 50, e.poolSize = 8192, e._useTypedArrays = function() {
                    if ("function" != typeof Uint8Array || "function" != typeof ArrayBuffer) return !1;
                    try {
                        var a = new Uint8Array(0);
                        return a.foo = function() {
                            return 42
                        }, 42 === a.foo() && "function" == typeof a.subarray
                    } catch (b) {
                        return !1
                    }
                }(), e.isEncoding = function(a) {
                    switch (String(a).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "binary":
                        case "base64":
                        case "raw":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, e.isBuffer = function(a) {
                    return !(null === a || void 0 === a || !a._isBuffer)
                }, e.byteLength = function(a, b) {
                    var c;
                    switch (a += "", b || "utf8") {
                        case "hex":
                            c = a.length / 2;
                            break;
                        case "utf8":
                        case "utf-8":
                            c = K(a).length;
                            break;
                        case "ascii":
                        case "binary":
                        case "raw":
                            c = a.length;
                            break;
                        case "base64":
                            c = N(a).length;
                            break;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            c = 2 * a.length;
                            break;
                        default:
                            throw new Error("Unknown encoding")
                    }
                    return c
                }, e.concat = function(a, b) {
                    if (T(H(a), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), 0 === a.length) return new e(0);
                    if (1 === a.length) return a[0];
                    var c;
                    if ("number" != typeof b)
                        for (b = 0, c = 0; c < a.length; c++) b += a[c].length;
                    var d = new e(b),
                        f = 0;
                    for (c = 0; c < a.length; c++) {
                        var g = a[c];
                        g.copy(d, f), f += g.length
                    }
                    return d
                }, e.prototype.write = function(a, b, c, d) {
                    if (isFinite(b)) isFinite(c) || (d = c, c = void 0);
                    else {
                        var e = d;
                        d = b, b = c, c = e
                    }
                    b = Number(b) || 0;
                    var l = this.length - b;
                    c ? (c = Number(c), c > l && (c = l)) : c = l, d = String(d || "utf8").toLowerCase();
                    var m;
                    switch (d) {
                        case "hex":
                            m = f(this, a, b, c);
                            break;
                        case "utf8":
                        case "utf-8":
                            m = g(this, a, b, c);
                            break;
                        case "ascii":
                            m = h(this, a, b, c);
                            break;
                        case "binary":
                            m = i(this, a, b, c);
                            break;
                        case "base64":
                            m = j(this, a, b, c);
                            break;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            m = k(this, a, b, c);
                            break;
                        default:
                            throw new Error("Unknown encoding")
                    }
                    return m
                }, e.prototype.toString = function(a, b, c) {
                    var d = this;
                    if (a = String(a || "utf8").toLowerCase(), b = Number(b) || 0, c = void 0 !== c ? Number(c) : c = d.length, c === b) return "";
                    var e;
                    switch (a) {
                        case "hex":
                            e = p(d, b, c);
                            break;
                        case "utf8":
                        case "utf-8":
                            e = m(d, b, c);
                            break;
                        case "ascii":
                            e = n(d, b, c);
                            break;
                        case "binary":
                            e = o(d, b, c);
                            break;
                        case "base64":
                            e = l(d, b, c);
                            break;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            e = q(d, b, c);
                            break;
                        default:
                            throw new Error("Unknown encoding")
                    }
                    return e
                }, e.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                }, e.prototype.copy = function(a, b, c, d) {
                    var e = this;
                    if (c || (c = 0), d || 0 === d || (d = this.length), b || (b = 0), d !== c && 0 !== a.length && 0 !== e.length) {
                        T(d >= c, "sourceEnd < sourceStart"), T(b >= 0 && b < a.length, "targetStart out of bounds"), T(c >= 0 && c < e.length, "sourceStart out of bounds"), T(d >= 0 && d <= e.length, "sourceEnd out of bounds"), d > this.length && (d = this.length), a.length - b < d - c && (d = a.length - b + c);
                        for (var f = 0; d - c > f; f++) a[f + b] = this[f + c]
                    }
                }, e.prototype.slice = function(a, b) {
                    var c = this.length;
                    if (a = F(a, c, 0), b = F(b, c, c), e._useTypedArrays) return E(this.subarray(a, b));
                    for (var d = b - a, f = new e(d, void 0, !0), g = 0; d > g; g++) f[g] = this[g + a];
                    return f
                }, e.prototype.get = function(a) {
                    return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(a)
                }, e.prototype.set = function(a, b) {
                    return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(a, b)
                }, e.prototype.readUInt8 = function(a, b) {
                    return b || (T(void 0 !== a && null !== a, "missing offset"), T(a < this.length, "Trying to read beyond buffer length")), a >= this.length ? void 0 : this[a]
                }, e.prototype.readUInt16LE = function(a, b) {
                    return r(this, a, !0, b)
                }, e.prototype.readUInt16BE = function(a, b) {
                    return r(this, a, !1, b)
                }, e.prototype.readUInt32LE = function(a, b) {
                    return s(this, a, !0, b)
                }, e.prototype.readUInt32BE = function(a, b) {
                    return s(this, a, !1, b)
                }, e.prototype.readInt8 = function(a, b) {
                    if (b || (T(void 0 !== a && null !== a, "missing offset"), T(a < this.length, "Trying to read beyond buffer length")), !(a >= this.length)) {
                        var c = 128 & this[a];
                        return c ? -1 * (255 - this[a] + 1) : this[a]
                    }
                }, e.prototype.readInt16LE = function(a, b) {
                    return t(this, a, !0, b)
                }, e.prototype.readInt16BE = function(a, b) {
                    return t(this, a, !1, b)
                }, e.prototype.readInt32LE = function(a, b) {
                    return u(this, a, !0, b)
                }, e.prototype.readInt32BE = function(a, b) {
                    return u(this, a, !1, b)
                }, e.prototype.readFloatLE = function(a, b) {
                    return v(this, a, !0, b)
                }, e.prototype.readFloatBE = function(a, b) {
                    return v(this, a, !1, b)
                }, e.prototype.readDoubleLE = function(a, b) {
                    return w(this, a, !0, b)
                }, e.prototype.readDoubleBE = function(a, b) {
                    return w(this, a, !1, b)
                }, e.prototype.writeUInt8 = function(a, b, c) {
                    c || (T(void 0 !== a && null !== a, "missing value"), T(void 0 !== b && null !== b, "missing offset"), T(b < this.length, "trying to write beyond buffer length"), Q(a, 255)), b >= this.length || (this[b] = a)
                }, e.prototype.writeUInt16LE = function(a, b, c) {
                    x(this, a, b, !0, c)
                }, e.prototype.writeUInt16BE = function(a, b, c) {
                    x(this, a, b, !1, c)
                }, e.prototype.writeUInt32LE = function(a, b, c) {
                    y(this, a, b, !0, c)
                }, e.prototype.writeUInt32BE = function(a, b, c) {
                    y(this, a, b, !1, c)
                }, e.prototype.writeInt8 = function(a, b, c) {
                    c || (T(void 0 !== a && null !== a, "missing value"), T(void 0 !== b && null !== b, "missing offset"), T(b < this.length, "Trying to write beyond buffer length"), R(a, 127, -128)), b >= this.length || (a >= 0 ? this.writeUInt8(a, b, c) : this.writeUInt8(255 + a + 1, b, c))
                }, e.prototype.writeInt16LE = function(a, b, c) {
                    z(this, a, b, !0, c)
                }, e.prototype.writeInt16BE = function(a, b, c) {
                    z(this, a, b, !1, c)
                }, e.prototype.writeInt32LE = function(a, b, c) {
                    A(this, a, b, !0, c)
                }, e.prototype.writeInt32BE = function(a, b, c) {
                    A(this, a, b, !1, c)
                }, e.prototype.writeFloatLE = function(a, b, c) {
                    B(this, a, b, !0, c)
                }, e.prototype.writeFloatBE = function(a, b, c) {
                    B(this, a, b, !1, c)
                }, e.prototype.writeDoubleLE = function(a, b, c) {
                    C(this, a, b, !0, c)
                }, e.prototype.writeDoubleBE = function(a, b, c) {
                    C(this, a, b, !1, c)
                }, e.prototype.fill = function(a, b, c) {
                    if (a || (a = 0), b || (b = 0), c || (c = this.length), "string" == typeof a && (a = a.charCodeAt(0)), T("number" == typeof a && !isNaN(a), "value is not a number"), T(c >= b, "end < start"), c !== b && 0 !== this.length) {
                        T(b >= 0 && b < this.length, "start out of bounds"), T(c >= 0 && c <= this.length, "end out of bounds");
                        for (var d = b; c > d; d++) this[d] = a
                    }
                }, e.prototype.inspect = function() {
                    for (var a = [], b = this.length, d = 0; b > d; d++)
                        if (a[d] = J(this[d]), d === c.INSPECT_MAX_BYTES) {
                            a[d + 1] = "...";
                            break
                        }
                    return "<Buffer " + a.join(" ") + ">"
                }, e.prototype.toArrayBuffer = function() {
                    if ("function" == typeof Uint8Array) {
                        if (e._useTypedArrays) return new e(this).buffer;
                        for (var a = new Uint8Array(this.length), b = 0, c = a.length; c > b; b += 1) a[b] = this[b];
                        return a.buffer
                    }
                    throw new Error("Buffer.toArrayBuffer not supported in this browser")
                };
                var W = e.prototype
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/grunt-browserify/node_modules/browserify/node_modules/buffer/index.js", "/../node_modules/grunt-browserify/node_modules/browserify/node_modules/buffer")
        }, {
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            "base64-js": 2,
            buffer: 1,
            ieee754: 3
        }],
        2: [function(a, b) {
            (function() {
                var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                ! function() {
                    "use strict";

                    function c(a) {
                        var b = a.charCodeAt(0);
                        return b === g ? 62 : b === h ? 63 : i > b ? -1 : i + 10 > b ? b - i + 26 + 26 : k + 26 > b ? b - k : j + 26 > b ? b - j + 26 : void 0
                    }

                    function d(a) {
                        function b(a) {
                            j[l++] = a
                        }
                        var d, e, g, h, i, j;
                        if (a.length % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                        var k = a.length;
                        i = "=" === a.charAt(k - 2) ? 2 : "=" === a.charAt(k - 1) ? 1 : 0, j = new f(3 * a.length / 4 - i), g = i > 0 ? a.length - 4 : a.length;
                        var l = 0;
                        for (d = 0, e = 0; g > d; d += 4, e += 3) h = c(a.charAt(d)) << 18 | c(a.charAt(d + 1)) << 12 | c(a.charAt(d + 2)) << 6 | c(a.charAt(d + 3)), b((16711680 & h) >> 16), b((65280 & h) >> 8), b(255 & h);
                        return 2 === i ? (h = c(a.charAt(d)) << 2 | c(a.charAt(d + 1)) >> 4, b(255 & h)) : 1 === i && (h = c(a.charAt(d)) << 10 | c(a.charAt(d + 1)) << 4 | c(a.charAt(d + 2)) >> 2, b(h >> 8 & 255), b(255 & h)), j
                    }

                    function e(b) {
                        function c(b) {
                            return a.charAt(b)
                        }

                        function d(a) {
                            return c(a >> 18 & 63) + c(a >> 12 & 63) + c(a >> 6 & 63) + c(63 & a)
                        }
                        var e, f, g, h = b.length % 3,
                            i = "";
                        for (e = 0, g = b.length - h; g > e; e += 3) f = (b[e] << 16) + (b[e + 1] << 8) + b[e + 2], i += d(f);
                        switch (h) {
                            case 1:
                                f = b[b.length - 1], i += c(f >> 2), i += c(f << 4 & 63), i += "==";
                                break;
                            case 2:
                                f = (b[b.length - 2] << 8) + b[b.length - 1], i += c(f >> 10), i += c(f >> 4 & 63), i += c(f << 2 & 63), i += "="
                        }
                        return i
                    }
                    var f = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                        g = ("0".charCodeAt(0), "+".charCodeAt(0)),
                        h = "/".charCodeAt(0),
                        i = "0".charCodeAt(0),
                        j = "a".charCodeAt(0),
                        k = "A".charCodeAt(0);
                    b.exports.toByteArray = d, b.exports.fromByteArray = e
                }()
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/grunt-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js", "/../node_modules/grunt-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")
        }, {
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        3: [function(a, b, c) {
            (function() {
                c.read = function(a, b, c, d, e) {
                    var f, g, h = 8 * e - d - 1,
                        i = (1 << h) - 1,
                        j = i >> 1,
                        k = -7,
                        l = c ? e - 1 : 0,
                        m = c ? -1 : 1,
                        n = a[b + l];
                    for (l += m, f = n & (1 << -k) - 1, n >>= -k, k += h; k > 0; f = 256 * f + a[b + l], l += m, k -= 8);
                    for (g = f & (1 << -k) - 1, f >>= -k, k += d; k > 0; g = 256 * g + a[b + l], l += m, k -= 8);
                    if (0 === f) f = 1 - j;
                    else {
                        if (f === i) return g ? 0 / 0 : 1 / 0 * (n ? -1 : 1);
                        g += Math.pow(2, d), f -= j
                    }
                    return (n ? -1 : 1) * g * Math.pow(2, f - d)
                }, c.write = function(a, b, c, d, e, f) {
                    var g, h, i, j = 8 * f - e - 1,
                        k = (1 << j) - 1,
                        l = k >> 1,
                        m = 23 === e ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                        n = d ? 0 : f - 1,
                        o = d ? 1 : -1,
                        p = 0 > b || 0 === b && 0 > 1 / b ? 1 : 0;
                    for (b = Math.abs(b), isNaN(b) || 1 / 0 === b ? (h = isNaN(b) ? 1 : 0, g = k) : (g = Math.floor(Math.log(b) / Math.LN2), b * (i = Math.pow(2, -g)) < 1 && (g--, i *= 2), b += g + l >= 1 ? m / i : m * Math.pow(2, 1 - l), b * i >= 2 && (g++, i /= 2), g + l >= k ? (h = 0, g = k) : g + l >= 1 ? (h = (b * i - 1) * Math.pow(2, e), g += l) : (h = b * Math.pow(2, l - 1) * Math.pow(2, e), g = 0)); e >= 8; a[c + n] = 255 & h, n += o, h /= 256, e -= 8);
                    for (g = g << e | h, j += e; j > 0; a[c + n] = 255 & g, n += o, g /= 256, j -= 8);
                    a[c + n - o] |= 128 * p
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/grunt-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js", "/../node_modules/grunt-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")
        }, {
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        4: [function(a, b) {
            (function(a) {
                function c() {}
                var a = b.exports = {};
                a.nextTick = function() {
                    var a = "undefined" != typeof window && window.setImmediate,
                        b = "undefined" != typeof window && window.postMessage && window.addEventListener;
                    if (a) return function(a) {
                        return window.setImmediate(a)
                    };
                    if (b) {
                        var c = [];
                        return window.addEventListener("message", function(a) {
                                var b = a.source;
                                if ((b === window || null === b) && "process-tick" === a.data && (a.stopPropagation(), c.length > 0)) {
                                    var d = c.shift();
                                    d()
                                }
                            }, !0),
                            function(a) {
                                c.push(a), window.postMessage("process-tick", "*")
                            }
                    }
                    return function(a) {
                        setTimeout(a, 0)
                    }
                }(), a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.on = c, a.once = c, a.off = c, a.emit = c, a.binding = function() {
                    throw new Error("process.binding is not supported")
                }, a.cwd = function() {
                    return "/"
                }, a.chdir = function() {
                    throw new Error("process.chdir is not supported")
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js", "/../node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process")
        }, {
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        5: [function(a, b) {
            (function() {
                function c() {}
                var d = a("./Scalar");
                b.exports = c, c.lineInt = function(a, b, c) {
                    c = c || 0;
                    var e, f, g, h, i, j, k, l = [0, 0];
                    return e = a[1][1] - a[0][1], f = a[0][0] - a[1][0], g = e * a[0][0] + f * a[0][1], h = b[1][1] - b[0][1], i = b[0][0] - b[1][0], j = h * b[0][0] + i * b[0][1], k = e * i - h * f, d.eq(k, 0, c) || (l[0] = (i * g - f * j) / k, l[1] = (e * j - h * g) / k), l
                }, c.segmentsIntersect = function(a, b, c, d) {
                    var e = b[0] - a[0],
                        f = b[1] - a[1],
                        g = d[0] - c[0],
                        h = d[1] - c[1];
                    if (g * f - h * e == 0) return !1;
                    var i = (e * (c[1] - a[1]) + f * (a[0] - c[0])) / (g * f - h * e),
                        j = (g * (a[1] - c[1]) + h * (c[0] - a[0])) / (h * e - g * f);
                    return i >= 0 && 1 >= i && j >= 0 && 1 >= j
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/poly-decomp/src/Line.js", "/../node_modules/poly-decomp/src")
        }, {
            "./Scalar": 8,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        6: [function(a, b) {
            (function() {
                function a() {}
                b.exports = a, a.area = function(a, b, c) {
                    return (b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1])
                }, a.left = function(b, c, d) {
                    return a.area(b, c, d) > 0
                }, a.leftOn = function(b, c, d) {
                    return a.area(b, c, d) >= 0
                }, a.right = function(b, c, d) {
                    return a.area(b, c, d) < 0
                }, a.rightOn = function(b, c, d) {
                    return a.area(b, c, d) <= 0
                };
                var c = [],
                    d = [];
                a.collinear = function(b, e, f, g) {
                    if (g) {
                        var h = c,
                            i = d;
                        h[0] = e[0] - b[0], h[1] = e[1] - b[1], i[0] = f[0] - e[0], i[1] = f[1] - e[1];
                        var j = h[0] * i[0] + h[1] * i[1],
                            k = Math.sqrt(h[0] * h[0] + h[1] * h[1]),
                            l = Math.sqrt(i[0] * i[0] + i[1] * i[1]),
                            m = Math.acos(j / (k * l));
                        return g > m
                    }
                    return 0 == a.area(b, e, f)
                }, a.sqdist = function(a, b) {
                    var c = b[0] - a[0],
                        d = b[1] - a[1];
                    return c * c + d * d
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/poly-decomp/src/Point.js", "/../node_modules/poly-decomp/src")
        }, {
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        7: [function(a, b) {
            (function() {
                function c() {
                    this.vertices = []
                }

                function d(a, b, c, d, e) {
                    e = e || 0;
                    var f = b[1] - a[1],
                        h = a[0] - b[0],
                        i = f * a[0] + h * a[1],
                        j = d[1] - c[1],
                        k = c[0] - d[0],
                        l = j * c[0] + k * c[1],
                        m = f * k - j * h;
                    return g.eq(m, 0, e) ? [0, 0] : [(k * i - h * l) / m, (f * l - j * i) / m]
                }
                var e = a("./Line"),
                    f = a("./Point"),
                    g = a("./Scalar");
                b.exports = c, c.prototype.at = function(a) {
                    var b = this.vertices,
                        c = b.length;
                    return b[0 > a ? a % c + c : a % c]
                }, c.prototype.first = function() {
                    return this.vertices[0]
                }, c.prototype.last = function() {
                    return this.vertices[this.vertices.length - 1]
                }, c.prototype.clear = function() {
                    this.vertices.length = 0
                }, c.prototype.append = function(a, b, c) {
                    if ("undefined" == typeof b) throw new Error("From is not given!");
                    if ("undefined" == typeof c) throw new Error("To is not given!");
                    if (b > c - 1) throw new Error("lol1");
                    if (c > a.vertices.length) throw new Error("lol2");
                    if (0 > b) throw new Error("lol3");
                    for (var d = b; c > d; d++) this.vertices.push(a.vertices[d])
                }, c.prototype.makeCCW = function() {
                    for (var a = 0, b = this.vertices, c = 1; c < this.vertices.length; ++c)(b[c][1] < b[a][1] || b[c][1] == b[a][1] && b[c][0] > b[a][0]) && (a = c);
                    f.left(this.at(a - 1), this.at(a), this.at(a + 1)) || this.reverse()
                }, c.prototype.reverse = function() {
                    for (var a = [], b = 0, c = this.vertices.length; b !== c; b++) a.push(this.vertices.pop());
                    this.vertices = a
                }, c.prototype.isReflex = function(a) {
                    return f.right(this.at(a - 1), this.at(a), this.at(a + 1))
                };
                var h = [],
                    i = [];
                c.prototype.canSee = function(a, b) {
                    var c, d, g = h,
                        j = i;
                    if (f.leftOn(this.at(a + 1), this.at(a), this.at(b)) && f.rightOn(this.at(a - 1), this.at(a), this.at(b))) return !1;
                    d = f.sqdist(this.at(a), this.at(b));
                    for (var k = 0; k !== this.vertices.length; ++k)
                        if ((k + 1) % this.vertices.length !== a && k !== a && f.leftOn(this.at(a), this.at(b), this.at(k + 1)) && f.rightOn(this.at(a), this.at(b), this.at(k)) && (g[0] = this.at(a), g[1] = this.at(b), j[0] = this.at(k), j[1] = this.at(k + 1), c = e.lineInt(g, j), f.sqdist(this.at(a), c) < d)) return !1;
                    return !0
                }, c.prototype.copy = function(a, b, d) {
                    var e = d || new c;
                    if (e.clear(), b > a)
                        for (var f = a; b >= f; f++) e.vertices.push(this.vertices[f]);
                    else {
                        for (var f = 0; b >= f; f++) e.vertices.push(this.vertices[f]);
                        for (var f = a; f < this.vertices.length; f++) e.vertices.push(this.vertices[f])
                    }
                    return e
                }, c.prototype.getCutEdges = function() {
                    for (var a = [], b = [], d = [], e = new c, f = Number.MAX_VALUE, g = 0; g < this.vertices.length; ++g)
                        if (this.isReflex(g))
                            for (var h = 0; h < this.vertices.length; ++h)
                                if (this.canSee(g, h)) {
                                    b = this.copy(g, h, e).getCutEdges(), d = this.copy(h, g, e).getCutEdges();
                                    for (var i = 0; i < d.length; i++) b.push(d[i]);
                                    b.length < f && (a = b, f = b.length, a.push([this.at(g), this.at(h)]))
                                }
                    return a
                }, c.prototype.decomp = function() {
                    var a = this.getCutEdges();
                    return a.length > 0 ? this.slice(a) : [this]
                }, c.prototype.slice = function(a) {
                    if (0 == a.length) return [this];
                    if (a instanceof Array && a.length && a[0] instanceof Array && 2 == a[0].length && a[0][0] instanceof Array) {
                        for (var b = [this], c = 0; c < a.length; c++)
                            for (var d = a[c], e = 0; e < b.length; e++) {
                                var f = b[e],
                                    g = f.slice(d);
                                if (g) {
                                    b.splice(e, 1), b.push(g[0], g[1]);
                                    break
                                }
                            }
                        return b
                    }
                    var d = a,
                        c = this.vertices.indexOf(d[0]),
                        e = this.vertices.indexOf(d[1]);
                    return -1 != c && -1 != e ? [this.copy(c, e), this.copy(e, c)] : !1
                }, c.prototype.isSimple = function() {
                    for (var a = this.vertices, b = 0; b < a.length - 1; b++)
                        for (var c = 0; b - 1 > c; c++)
                            if (e.segmentsIntersect(a[b], a[b + 1], a[c], a[c + 1])) return !1;
                    for (var b = 1; b < a.length - 2; b++)
                        if (e.segmentsIntersect(a[0], a[a.length - 1], a[b], a[b + 1])) return !1;
                    return !0
                }, c.prototype.quickDecomp = function(a, b, e, g, h, i) {
                    h = h || 100, i = i || 0, g = g || 25, a = "undefined" != typeof a ? a : [], b = b || [], e = e || [];
                    var j = [0, 0],
                        k = [0, 0],
                        l = [0, 0],
                        m = 0,
                        n = 0,
                        o = 0,
                        p = 0,
                        q = 0,
                        r = 0,
                        s = 0,
                        t = new c,
                        u = new c,
                        v = this,
                        w = this.vertices;
                    if (w.length < 3) return a;
                    if (i++, i > h) return console.warn("quickDecomp: max level (" + h + ") reached."), a;
                    for (var x = 0; x < this.vertices.length; ++x)
                        if (v.isReflex(x)) {
                            b.push(v.vertices[x]), m = n = Number.MAX_VALUE;
                            for (var y = 0; y < this.vertices.length; ++y) f.left(v.at(x - 1), v.at(x), v.at(y)) && f.rightOn(v.at(x - 1), v.at(x), v.at(y - 1)) && (l = d(v.at(x - 1), v.at(x), v.at(y), v.at(y - 1)), f.right(v.at(x + 1), v.at(x), l) && (o = f.sqdist(v.vertices[x], l), n > o && (n = o, k = l, r = y))), f.left(v.at(x + 1), v.at(x), v.at(y + 1)) && f.rightOn(v.at(x + 1), v.at(x), v.at(y)) && (l = d(v.at(x + 1), v.at(x), v.at(y), v.at(y + 1)), f.left(v.at(x - 1), v.at(x), l) && (o = f.sqdist(v.vertices[x], l), m > o && (m = o, j = l, q = y)));
                            if (r == (q + 1) % this.vertices.length) l[0] = (k[0] + j[0]) / 2, l[1] = (k[1] + j[1]) / 2, e.push(l), q > x ? (t.append(v, x, q + 1), t.vertices.push(l), u.vertices.push(l), 0 != r && u.append(v, r, v.vertices.length), u.append(v, 0, x + 1)) : (0 != x && t.append(v, x, v.vertices.length), t.append(v, 0, q + 1), t.vertices.push(l), u.vertices.push(l), u.append(v, r, x + 1));
                            else {
                                if (r > q && (q += this.vertices.length), p = Number.MAX_VALUE, r > q) return a;
                                for (var y = r; q >= y; ++y) f.leftOn(v.at(x - 1), v.at(x), v.at(y)) && f.rightOn(v.at(x + 1), v.at(x), v.at(y)) && (o = f.sqdist(v.at(x), v.at(y)), p > o && (p = o, s = y % this.vertices.length));
                                s > x ? (t.append(v, x, s + 1), 0 != s && u.append(v, s, w.length), u.append(v, 0, x + 1)) : (0 != x && t.append(v, x, w.length), t.append(v, 0, s + 1), u.append(v, s, x + 1))
                            }
                            return t.vertices.length < u.vertices.length ? (t.quickDecomp(a, b, e, g, h, i), u.quickDecomp(a, b, e, g, h, i)) : (u.quickDecomp(a, b, e, g, h, i), t.quickDecomp(a, b, e, g, h, i)), a
                        }
                    return a.push(this), a
                }, c.prototype.removeCollinearPoints = function(a) {
                    for (var b = 0, c = this.vertices.length - 1; this.vertices.length > 3 && c >= 0; --c) f.collinear(this.at(c - 1), this.at(c), this.at(c + 1), a) && (this.vertices.splice(c % this.vertices.length, 1), c--, b++);
                    return b
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/poly-decomp/src/Polygon.js", "/../node_modules/poly-decomp/src")
        }, {
            "./Line": 5,
            "./Point": 6,
            "./Scalar": 8,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        8: [function(a, b) {
            (function() {
                function a() {}
                b.exports = a, a.eq = function(a, b, c) {
                    return c = c || 0, Math.abs(a - b) < c
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/poly-decomp/src/Scalar.js", "/../node_modules/poly-decomp/src")
        }, {
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        9: [function(a, b) {
            (function() {
                b.exports = {
                    Polygon: a("./Polygon"),
                    Point: a("./Point")
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/poly-decomp/src/index.js", "/../node_modules/poly-decomp/src")
        }, {
            "./Point": 6,
            "./Polygon": 7,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        10: [function(a, b) {
            b.exports = {
                name: "p2",
                version: "0.6.0",
                description: "A JavaScript 2D physics engine.",
                author: "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",
                keywords: ["p2.js", "p2", "physics", "engine", "2d"],
                main: "./src/p2.js",
                engines: {
                    node: "*"
                },
                repository: {
                    type: "git",
                    url: "https://github.com/schteppe/p2.js.git"
                },
                bugs: {
                    url: "https://github.com/schteppe/p2.js/issues"
                },
                licenses: [{
                    type: "MIT"
                }],
                devDependencies: {
                    grunt: "~0.4.0",
                    "grunt-contrib-jshint": "~0.9.2",
                    "grunt-contrib-nodeunit": "~0.1.2",
                    "grunt-contrib-uglify": "~0.4.0",
                    "grunt-contrib-watch": "~0.5.0",
                    "grunt-browserify": "~2.0.1",
                    "grunt-contrib-concat": "^0.4.0"
                },
                dependencies: {
                    "poly-decomp": "0.1.0"
                }
            }
        }, {}],
        11: [function(a, b) {
            (function() {
                function c(a) {
                    this.lowerBound = d.create(), a && a.lowerBound && d.copy(this.lowerBound, a.lowerBound), this.upperBound = d.create(), a && a.upperBound && d.copy(this.upperBound, a.upperBound)
                } {
                    var d = a("../math/vec2");
                    a("../utils/Utils")
                }
                b.exports = c;
                var e = d.create();
                c.prototype.setFromPoints = function(a, b, c, f) {
                    var g = this.lowerBound,
                        h = this.upperBound;
                    "number" != typeof c && (c = 0), 0 !== c ? d.rotate(g, a[0], c) : d.copy(g, a[0]), d.copy(h, g);
                    for (var i = Math.cos(c), j = Math.sin(c), k = 1; k < a.length; k++) {
                        var l = a[k];
                        if (0 !== c) {
                            var m = l[0],
                                n = l[1];
                            e[0] = i * m - j * n, e[1] = j * m + i * n, l = e
                        }
                        for (var o = 0; 2 > o; o++) l[o] > h[o] && (h[o] = l[o]), l[o] < g[o] && (g[o] = l[o])
                    }
                    b && (d.add(this.lowerBound, this.lowerBound, b), d.add(this.upperBound, this.upperBound, b)), f && (this.lowerBound[0] -= f, this.lowerBound[1] -= f, this.upperBound[0] += f, this.upperBound[1] += f)
                }, c.prototype.copy = function(a) {
                    d.copy(this.lowerBound, a.lowerBound), d.copy(this.upperBound, a.upperBound)
                }, c.prototype.extend = function(a) {
                    for (var b = 2; b--;) {
                        var c = a.lowerBound[b];
                        this.lowerBound[b] > c && (this.lowerBound[b] = c);
                        var d = a.upperBound[b];
                        this.upperBound[b] < d && (this.upperBound[b] = d)
                    }
                }, c.prototype.overlaps = function(a) {
                    var b = this.lowerBound,
                        c = this.upperBound,
                        d = a.lowerBound,
                        e = a.upperBound;
                    return (d[0] <= c[0] && c[0] <= e[0] || b[0] <= e[0] && e[0] <= c[0]) && (d[1] <= c[1] && c[1] <= e[1] || b[1] <= e[1] && e[1] <= c[1])
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/collision/AABB.js", "/collision")
        }, {
            "../math/vec2": 33,
            "../utils/Utils": 52,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        12: [function(a, b) {
            (function() {
                function c(a) {
                    this.type = a, this.result = [], this.world = null, this.boundingVolumeType = c.AABB
                }
                var d = a("../math/vec2"),
                    e = a("../objects/Body");
                b.exports = c, c.AABB = 1, c.BOUNDING_CIRCLE = 2, c.prototype.setWorld = function(a) {
                    this.world = a
                }, c.prototype.getCollisionPairs = function() {
                    throw new Error("getCollisionPairs must be implemented in a subclass!")
                };
                var f = d.create();
                c.boundingRadiusCheck = function(a, b) {
                    d.sub(f, a.position, b.position);
                    var c = d.squaredLength(f),
                        e = a.boundingRadius + b.boundingRadius;
                    return e * e >= c
                }, c.aabbCheck = function(a, b) {
                    return a.aabbNeedsUpdate && a.updateAABB(), b.aabbNeedsUpdate && b.updateAABB(), a.aabb.overlaps(b.aabb)
                }, c.prototype.boundingVolumeCheck = function(a, b) {
                    var d;
                    switch (this.boundingVolumeType) {
                        case c.BOUNDING_CIRCLE:
                            d = c.boundingRadiusCheck(a, b);
                            break;
                        case c.AABB:
                            d = c.aabbCheck(a, b);
                            break;
                        default:
                            throw new Error("Bounding volume type not recognized: " + this.boundingVolumeType)
                    }
                    return d
                }, c.canCollide = function(a, b) {
                    return a.type === e.STATIC && b.type === e.STATIC ? !1 : a.type === e.KINEMATIC && b.type === e.STATIC || a.type === e.STATIC && b.type === e.KINEMATIC ? !1 : a.type === e.KINEMATIC && b.type === e.KINEMATIC ? !1 : a.sleepState === e.SLEEPING && b.sleepState === e.SLEEPING ? !1 : a.sleepState === e.SLEEPING && b.type === e.STATIC || b.sleepState === e.SLEEPING && a.type === e.STATIC ? !1 : !0
                }, c.NAIVE = 1, c.SAP = 2
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/collision/Broadphase.js", "/collision")
        }, {
            "../math/vec2": 33,
            "../objects/Body": 34,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        13: [function(a, b) {
            (function() {
                function c(a) {
                    d.apply(this), a = e.defaults(a, {
                        xmin: -100,
                        xmax: 100,
                        ymin: -100,
                        ymax: 100,
                        nx: 10,
                        ny: 10
                    }), this.xmin = a.xmin, this.ymin = a.ymin, this.xmax = a.xmax, this.ymax = a.ymax, this.nx = a.nx, this.ny = a.ny, this.binsizeX = (this.xmax - this.xmin) / this.nx, this.binsizeY = (this.ymax - this.ymin) / this.ny
                }
                var d = (a("../shapes/Circle"), a("../shapes/Plane"), a("../shapes/Particle"), a("../collision/Broadphase")),
                    e = (a("../math/vec2"), a("../utils/Utils"));
                b.exports = c, c.prototype = new d, c.prototype.getCollisionPairs = function(a) {
                    for (var b = [], c = a.bodies, e = c.length, f = (this.binsizeX, this.binsizeY, this.nx), g = this.ny, h = this.xmin, i = this.ymin, j = this.xmax, k = this.ymax, l = [], m = f * g, n = 0; m > n; n++) l.push([]);
                    for (var o = f / (j - h), p = g / (k - i), n = 0; n !== e; n++)
                        for (var q = c[n], r = q.aabb, s = Math.max(r.lowerBound[0], h), t = Math.max(r.lowerBound[1], i), u = Math.min(r.upperBound[0], j), v = Math.min(r.upperBound[1], k), w = Math.floor(o * (s - h)), x = Math.floor(p * (t - i)), y = Math.floor(o * (u - h)), z = Math.floor(p * (v - i)), A = w; y >= A; A++)
                            for (var B = x; z >= B; B++) {
                                var C = A,
                                    D = B,
                                    E = C * (g - 1) + D;
                                E >= 0 && m > E && l[E].push(q)
                            }
                    for (var n = 0; n !== m; n++)
                        for (var F = l[n], A = 0, G = F.length; A !== G; A++)
                            for (var q = F[A], B = 0; B !== A; B++) {
                                var H = F[B];
                                d.canCollide(q, H) && this.boundingVolumeCheck(q, H) && b.push(q, H)
                            }
                    return b
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/collision/GridBroadphase.js", "/collision")
        }, {
            "../collision/Broadphase": 12,
            "../math/vec2": 33,
            "../shapes/Circle": 40,
            "../shapes/Particle": 44,
            "../shapes/Plane": 45,
            "../utils/Utils": 52,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        14: [function(a, b) {
            (function() {
                function c() {
                    d.call(this, d.NAIVE)
                } {
                    var d = (a("../shapes/Circle"), a("../shapes/Plane"), a("../shapes/Shape"), a("../shapes/Particle"), a("../collision/Broadphase"));
                    a("../math/vec2")
                }
                b.exports = c, c.prototype = new d, c.prototype.getCollisionPairs = function(a) {
                    var b = a.bodies,
                        c = this.result;
                    c.length = 0;
                    for (var e = 0, f = b.length; e !== f; e++)
                        for (var g = b[e], h = 0; e > h; h++) {
                            var i = b[h];
                            d.canCollide(g, i) && this.boundingVolumeCheck(g, i) && c.push(g, i)
                        }
                    return c
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/collision/NaiveBroadphase.js", "/collision")
        }, {
            "../collision/Broadphase": 12,
            "../math/vec2": 33,
            "../shapes/Circle": 40,
            "../shapes/Particle": 44,
            "../shapes/Plane": 45,
            "../shapes/Shape": 47,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        15: [function(a, b) {
            (function() {
                function c() {
                    this.contactEquations = [], this.frictionEquations = [], this.enableFriction = !0, this.slipForce = 10, this.frictionCoefficient = .3, this.surfaceVelocity = 0, this.reuseObjects = !0, this.reusableContactEquations = [], this.reusableFrictionEquations = [], this.restitution = 0, this.stiffness = l.DEFAULT_STIFFNESS, this.relaxation = l.DEFAULT_RELAXATION, this.frictionStiffness = l.DEFAULT_STIFFNESS, this.frictionRelaxation = l.DEFAULT_RELAXATION, this.enableFrictionReduction = !0, this.collidingBodiesLastStep = new k, this.contactSkinSize = .01
                }

                function d(a, b) {
                    f.set(a.vertices[0], .5 * -b.length, -b.radius), f.set(a.vertices[1], .5 * b.length, -b.radius), f.set(a.vertices[2], .5 * b.length, b.radius), f.set(a.vertices[3], .5 * -b.length, b.radius)
                }

                function e(a, b, c, d) {
                    for (var e = R, i = S, j = T, k = U, l = a, m = b.vertices, n = null, o = 0; o !== m.length + 1; o++) {
                        var p = m[o % m.length],
                            q = m[(o + 1) % m.length];
                        f.rotate(e, p, d), f.rotate(i, q, d), h(e, e, c), h(i, i, c), g(j, e, l), g(k, i, l);
                        var r = f.crossLength(j, k);
                        if (null === n && (n = r), 0 >= r * n) return !1;
                        n = r
                    }
                    return !0
                }
                var f = a("../math/vec2"),
                    g = f.sub,
                    h = f.add,
                    i = f.dot,
                    j = a("../utils/Utils"),
                    k = a("../utils/TupleDictionary"),
                    l = a("../equations/Equation"),
                    m = a("../equations/ContactEquation"),
                    n = a("../equations/FrictionEquation"),
                    o = a("../shapes/Circle"),
                    p = a("../shapes/Convex"),
                    q = a("../shapes/Shape"),
                    r = (a("../objects/Body"), a("../shapes/Rectangle"));
                b.exports = c;
                var s = f.fromValues(0, 1),
                    t = f.fromValues(0, 0),
                    u = f.fromValues(0, 0),
                    v = f.fromValues(0, 0),
                    w = f.fromValues(0, 0),
                    x = f.fromValues(0, 0),
                    y = f.fromValues(0, 0),
                    z = f.fromValues(0, 0),
                    A = f.fromValues(0, 0),
                    B = f.fromValues(0, 0),
                    C = f.fromValues(0, 0),
                    D = f.fromValues(0, 0),
                    E = f.fromValues(0, 0),
                    F = f.fromValues(0, 0),
                    G = f.fromValues(0, 0),
                    H = f.fromValues(0, 0),
                    I = f.fromValues(0, 0),
                    J = f.fromValues(0, 0),
                    K = f.fromValues(0, 0),
                    L = [];
                c.prototype.collidedLastStep = function(a, b) {
                    var c = 0 | a.id,
                        d = 0 | b.id;
                    return !!this.collidingBodiesLastStep.get(c, d)
                }, c.prototype.reset = function() {
                    this.collidingBodiesLastStep.reset();
                    for (var a = this.contactEquations, b = a.length; b--;) {
                        var c = a[b],
                            d = c.bodyA.id,
                            e = c.bodyB.id;
                        this.collidingBodiesLastStep.set(d, e, !0)
                    }
                    if (this.reuseObjects) {
                        var f = this.contactEquations,
                            g = this.frictionEquations,
                            h = this.reusableFrictionEquations,
                            i = this.reusableContactEquations;
                        j.appendArray(i, f), j.appendArray(h, g)
                    }
                    this.contactEquations.length = this.frictionEquations.length = 0
                }, c.prototype.createContactEquation = function(a, b, c, d) {
                    var e = this.reusableContactEquations.length ? this.reusableContactEquations.pop() : new m(a, b);
                    return e.bodyA = a, e.bodyB = b, e.shapeA = c, e.shapeB = d, e.restitution = this.restitution, e.firstImpact = !this.collidedLastStep(a, b), e.stiffness = this.stiffness, e.relaxation = this.relaxation, e.needsUpdate = !0, e.enabled = !0, e.offset = this.contactSkinSize, e
                }, c.prototype.createFrictionEquation = function(a, b, c, d) {
                    var e = this.reusableFrictionEquations.length ? this.reusableFrictionEquations.pop() : new n(a, b);
                    return e.bodyA = a, e.bodyB = b, e.shapeA = c, e.shapeB = d, e.setSlipForce(this.slipForce), e.frictionCoefficient = this.frictionCoefficient, e.relativeVelocity = this.surfaceVelocity, e.enabled = !0, e.needsUpdate = !0, e.stiffness = this.frictionStiffness, e.relaxation = this.frictionRelaxation, e.contactEquations.length = 0, e
                }, c.prototype.createFrictionFromContact = function(a) {
                    var b = this.createFrictionEquation(a.bodyA, a.bodyB, a.shapeA, a.shapeB);
                    return f.copy(b.contactPointA, a.contactPointA), f.copy(b.contactPointB, a.contactPointB), f.rotate90cw(b.t, a.normalA), b.contactEquations.push(a), b
                }, c.prototype.createFrictionFromAverage = function(a) {
                    if (!a) throw new Error("numContacts == 0!"); {
                        var b = this.contactEquations[this.contactEquations.length - 1],
                            c = this.createFrictionEquation(b.bodyA, b.bodyB, b.shapeA, b.shapeB),
                            d = b.bodyA;
                        b.bodyB
                    }
                    f.set(c.contactPointA, 0, 0), f.set(c.contactPointB, 0, 0), f.set(c.t, 0, 0);
                    for (var e = 0; e !== a; e++) b = this.contactEquations[this.contactEquations.length - 1 - e], b.bodyA === d ? (f.add(c.t, c.t, b.normalA), f.add(c.contactPointA, c.contactPointA, b.contactPointA), f.add(c.contactPointB, c.contactPointB, b.contactPointB)) : (f.sub(c.t, c.t, b.normalA), f.add(c.contactPointA, c.contactPointA, b.contactPointB), f.add(c.contactPointB, c.contactPointB, b.contactPointA)), c.contactEquations.push(b);
                    var g = 1 / a;
                    return f.scale(c.contactPointA, c.contactPointA, g), f.scale(c.contactPointB, c.contactPointB, g), f.normalize(c.t, c.t), f.rotate90cw(c.t, c.t), c
                }, c.prototype[q.LINE | q.CONVEX] = c.prototype.convexLine = function(a, b, c, d, e, f, g, h, i) {
                    return i ? !1 : 0
                }, c.prototype[q.LINE | q.RECTANGLE] = c.prototype.lineRectangle = function(a, b, c, d, e, f, g, h, i) {
                    return i ? !1 : 0
                };
                var M = new r(1, 1),
                    N = f.create();
                c.prototype[q.CAPSULE | q.CONVEX] = c.prototype[q.CAPSULE | q.RECTANGLE] = c.prototype.convexCapsule = function(a, b, c, e, g, h, i, j, k) {
                    var l = N;
                    f.set(l, h.length / 2, 0), f.rotate(l, l, j), f.add(l, l, i);
                    var m = this.circleConvex(g, h, l, j, a, b, c, e, k, h.radius);
                    f.set(l, -h.length / 2, 0), f.rotate(l, l, j), f.add(l, l, i);
                    var n = this.circleConvex(g, h, l, j, a, b, c, e, k, h.radius);
                    if (k && (m || n)) return !0;
                    var o = M;
                    d(o, h);
                    var p = this.convexConvex(a, b, c, e, g, o, i, j, k);
                    return p + m + n
                }, c.prototype[q.CAPSULE | q.LINE] = c.prototype.lineCapsule = function(a, b, c, d, e, f, g, h, i) {
                    return i ? !1 : 0
                };
                var O = f.create(),
                    P = f.create(),
                    Q = new r(1, 1);
                c.prototype[q.CAPSULE | q.CAPSULE] = c.prototype.capsuleCapsule = function(a, b, c, e, g, h, i, j, k) {
                    for (var l, m = O, n = P, o = 0, p = 0; 2 > p; p++) {
                        f.set(m, (0 === p ? -1 : 1) * b.length / 2, 0), f.rotate(m, m, e), f.add(m, m, c);
                        for (var q = 0; 2 > q; q++) {
                            f.set(n, (0 === q ? -1 : 1) * h.length / 2, 0), f.rotate(n, n, j), f.add(n, n, i), this.enableFrictionReduction && (l = this.enableFriction, this.enableFriction = !1);
                            var r = this.circleCircle(a, b, m, e, g, h, n, j, k, b.radius, h.radius);
                            if (this.enableFrictionReduction && (this.enableFriction = l), k && r) return !0;
                            o += r
                        }
                    }
                    this.enableFrictionReduction && (l = this.enableFriction, this.enableFriction = !1);
                    var s = Q;
                    d(s, b);
                    var t = this.convexCapsule(a, s, c, e, g, h, i, j, k);
                    if (this.enableFrictionReduction && (this.enableFriction = l), k && t) return !0;
                    if (o += t, this.enableFrictionReduction) {
                        var l = this.enableFriction;
                        this.enableFriction = !1
                    }
                    d(s, h);
                    var u = this.convexCapsule(g, s, i, j, a, b, c, e, k);
                    return this.enableFrictionReduction && (this.enableFriction = l), k && u ? !0 : (o += u, this.enableFrictionReduction && o && this.enableFriction && this.frictionEquations.push(this.createFrictionFromAverage(o)), o)
                }, c.prototype[q.LINE | q.LINE] = c.prototype.lineLine = function(a, b, c, d, e, f, g, h, i) {
                    return i ? !1 : 0
                }, c.prototype[q.PLANE | q.LINE] = c.prototype.planeLine = function(a, b, c, d, e, j, k, l, m) {
                    var n = t,
                        o = u,
                        p = v,
                        q = w,
                        r = x,
                        C = y,
                        D = z,
                        E = A,
                        F = B,
                        G = L,
                        H = 0;
                    f.set(n, -j.length / 2, 0), f.set(o, j.length / 2, 0), f.rotate(p, n, l), f.rotate(q, o, l), h(p, p, k), h(q, q, k), f.copy(n, p), f.copy(o, q), g(r, o, n), f.normalize(C, r), f.rotate90cw(F, C), f.rotate(E, s, d), G[0] = n, G[1] = o;
                    for (var I = 0; I < G.length; I++) {
                        var J = G[I];
                        g(D, J, c);
                        var K = i(D, E);
                        if (0 > K) {
                            if (m) return !0;
                            var M = this.createContactEquation(a, e, b, j);
                            H++, f.copy(M.normalA, E), f.normalize(M.normalA, M.normalA), f.scale(D, E, K), g(M.contactPointA, J, D), g(M.contactPointA, M.contactPointA, a.position), g(M.contactPointB, J, k), h(M.contactPointB, M.contactPointB, k), g(M.contactPointB, M.contactPointB, e.position), this.contactEquations.push(M), this.enableFrictionReduction || this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(M))
                        }
                    }
                    return m ? !1 : (this.enableFrictionReduction || H && this.enableFriction && this.frictionEquations.push(this.createFrictionFromAverage(H)), H)
                }, c.prototype[q.PARTICLE | q.CAPSULE] = c.prototype.particleCapsule = function(a, b, c, d, e, f, g, h, i) {
                    return this.circleLine(a, b, c, d, e, f, g, h, i, f.radius, 0)
                }, c.prototype[q.CIRCLE | q.LINE] = c.prototype.circleLine = function(a, b, c, d, e, j, k, l, m, n, o) {
                    var n = n || 0,
                        o = "undefined" != typeof o ? o : b.radius,
                        p = t,
                        q = u,
                        r = v,
                        s = w,
                        H = x,
                        I = y,
                        J = z,
                        K = A,
                        M = B,
                        N = C,
                        O = D,
                        P = E,
                        Q = F,
                        R = G,
                        S = L;
                    f.set(K, -j.length / 2, 0), f.set(M, j.length / 2, 0), f.rotate(N, K, l), f.rotate(O, M, l), h(N, N, k), h(O, O, k), f.copy(K, N), f.copy(M, O), g(I, M, K), f.normalize(J, I), f.rotate90cw(H, J), g(P, c, K);
                    var T = i(P, H);
                    g(s, K, k), g(Q, c, k);
                    var U = o + n;
                    if (Math.abs(T) < U) {
                        f.scale(p, H, T), g(r, c, p), f.scale(q, H, i(H, Q)), f.normalize(q, q), f.scale(q, q, n), h(r, r, q);
                        var V = i(J, r),
                            W = i(J, K),
                            X = i(J, M);
                        if (V > W && X > V) {
                            if (m) return !0;
                            var Y = this.createContactEquation(a, e, b, j);
                            return f.scale(Y.normalA, p, -1), f.normalize(Y.normalA, Y.normalA), f.scale(Y.contactPointA, Y.normalA, o), h(Y.contactPointA, Y.contactPointA, c), g(Y.contactPointA, Y.contactPointA, a.position), g(Y.contactPointB, r, k), h(Y.contactPointB, Y.contactPointB, k), g(Y.contactPointB, Y.contactPointB, e.position), this.contactEquations.push(Y), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(Y)), 1
                        }
                    }
                    S[0] = K, S[1] = M;
                    for (var Z = 0; Z < S.length; Z++) {
                        var $ = S[Z];
                        if (g(P, $, c), f.squaredLength(P) < Math.pow(U, 2)) {
                            if (m) return !0;
                            var Y = this.createContactEquation(a, e, b, j);
                            return f.copy(Y.normalA, P), f.normalize(Y.normalA, Y.normalA), f.scale(Y.contactPointA, Y.normalA, o), h(Y.contactPointA, Y.contactPointA, c), g(Y.contactPointA, Y.contactPointA, a.position), g(Y.contactPointB, $, k), f.scale(R, Y.normalA, -n), h(Y.contactPointB, Y.contactPointB, R), h(Y.contactPointB, Y.contactPointB, k), g(Y.contactPointB, Y.contactPointB, e.position), this.contactEquations.push(Y), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(Y)), 1
                        }
                    }
                    return 0
                }, c.prototype[q.CIRCLE | q.CAPSULE] = c.prototype.circleCapsule = function(a, b, c, d, e, f, g, h, i) {
                    return this.circleLine(a, b, c, d, e, f, g, h, i, f.radius)
                }, c.prototype[q.CIRCLE | q.CONVEX] = c.prototype[q.CIRCLE | q.RECTANGLE] = c.prototype.circleConvex = function(a, b, c, d, i, j, k, l, m, n) {
                    for (var n = "number" == typeof n ? n : b.radius, o = t, p = u, q = v, r = w, s = x, y = C, z = D, A = F, B = G, E = H, J = I, K = !1, L = Number.MAX_VALUE, M = j.vertices, N = 0; N !== M.length + 1; N++) {
                        var O = M[N % M.length],
                            P = M[(N + 1) % M.length];
                        if (f.rotate(o, O, l), f.rotate(p, P, l), h(o, o, k), h(p, p, k), g(q, p, o), f.normalize(r, q), f.rotate90cw(s, r), f.scale(B, s, -b.radius), h(B, B, c), e(B, j, k, l)) {
                            f.sub(E, o, B);
                            var Q = Math.abs(f.dot(E, s));
                            L > Q && (f.copy(J, B), L = Q, f.scale(A, s, Q), f.add(A, A, B), K = !0)
                        }
                    }
                    if (K) {
                        if (m) return !0;
                        var R = this.createContactEquation(a, i, b, j);
                        return f.sub(R.normalA, J, c), f.normalize(R.normalA, R.normalA), f.scale(R.contactPointA, R.normalA, n), h(R.contactPointA, R.contactPointA, c), g(R.contactPointA, R.contactPointA, a.position), g(R.contactPointB, A, k), h(R.contactPointB, R.contactPointB, k), g(R.contactPointB, R.contactPointB, i.position), this.contactEquations.push(R), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(R)), 1
                    }
                    if (n > 0)
                        for (var N = 0; N < M.length; N++) {
                            var S = M[N];
                            if (f.rotate(z, S, l), h(z, z, k), g(y, z, c), f.squaredLength(y) < Math.pow(n, 2)) {
                                if (m) return !0;
                                var R = this.createContactEquation(a, i, b, j);
                                return f.copy(R.normalA, y), f.normalize(R.normalA, R.normalA), f.scale(R.contactPointA, R.normalA, n), h(R.contactPointA, R.contactPointA, c), g(R.contactPointA, R.contactPointA, a.position), g(R.contactPointB, z, k), h(R.contactPointB, R.contactPointB, k), g(R.contactPointB, R.contactPointB, i.position), this.contactEquations.push(R), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(R)), 1
                            }
                        }
                    return 0
                };
                var R = f.create(),
                    S = f.create(),
                    T = f.create(),
                    U = f.create();
                c.prototype[q.PARTICLE | q.CONVEX] = c.prototype[q.PARTICLE | q.RECTANGLE] = c.prototype.particleConvex = function(a, b, c, d, j, k, l, m, n) {
                    var o = t,
                        p = u,
                        q = v,
                        r = w,
                        s = x,
                        A = y,
                        B = z,
                        D = C,
                        E = F,
                        G = J,
                        H = K,
                        I = Number.MAX_VALUE,
                        L = !1,
                        M = k.vertices;
                    if (!e(c, k, l, m)) return 0;
                    if (n) return !0;
                    for (var N = 0; N !== M.length + 1; N++) {
                        var O = M[N % M.length],
                            P = M[(N + 1) % M.length];
                        f.rotate(o, O, m), f.rotate(p, P, m), h(o, o, l), h(p, p, l), g(q, p, o), f.normalize(r, q), f.rotate90cw(s, r), g(D, c, o); {
                            i(D, s)
                        }
                        g(A, o, l), g(B, c, l), f.sub(G, o, c);
                        var Q = Math.abs(f.dot(G, s));
                        I > Q && (I = Q, f.scale(E, s, Q), f.add(E, E, c), f.copy(H, s), L = !0)
                    }
                    if (L) {
                        var R = this.createContactEquation(a, j, b, k);
                        return f.scale(R.normalA, H, -1), f.normalize(R.normalA, R.normalA), f.set(R.contactPointA, 0, 0), h(R.contactPointA, R.contactPointA, c), g(R.contactPointA, R.contactPointA, a.position), g(R.contactPointB, E, l), h(R.contactPointB, R.contactPointB, l), g(R.contactPointB, R.contactPointB, j.position), this.contactEquations.push(R), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(R)), 1
                    }
                    return 0
                }, c.prototype[q.CIRCLE] = c.prototype.circleCircle = function(a, b, c, d, e, i, j, k, l, m, n) {
                    var o = t,
                        m = m || b.radius,
                        n = n || i.radius;
                    g(o, c, j);
                    var p = m + n;
                    if (f.squaredLength(o) > Math.pow(p, 2)) return 0;
                    if (l) return !0;
                    var q = this.createContactEquation(a, e, b, i);
                    return g(q.normalA, j, c), f.normalize(q.normalA, q.normalA), f.scale(q.contactPointA, q.normalA, m), f.scale(q.contactPointB, q.normalA, -n), h(q.contactPointA, q.contactPointA, c), g(q.contactPointA, q.contactPointA, a.position), h(q.contactPointB, q.contactPointB, j), g(q.contactPointB, q.contactPointB, e.position), this.contactEquations.push(q), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(q)), 1
                }, c.prototype[q.PLANE | q.CONVEX] = c.prototype[q.PLANE | q.RECTANGLE] = c.prototype.planeConvex = function(a, b, c, d, e, j, k, l, m) {
                    var n = t,
                        o = u,
                        p = v,
                        q = 0;
                    f.rotate(o, s, d);
                    for (var r = 0; r !== j.vertices.length; r++) {
                        var w = j.vertices[r];
                        if (f.rotate(n, w, l), h(n, n, k), g(p, n, c), i(p, o) <= 0) {
                            if (m) return !0;
                            q++;
                            var x = this.createContactEquation(a, e, b, j);
                            g(p, n, c), f.copy(x.normalA, o);
                            var y = i(p, x.normalA);
                            f.scale(p, x.normalA, y), g(x.contactPointB, n, e.position), g(x.contactPointA, n, p), g(x.contactPointA, x.contactPointA, a.position), this.contactEquations.push(x), this.enableFrictionReduction || this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(x))
                        }
                    }
                    return this.enableFrictionReduction && this.enableFriction && q && this.frictionEquations.push(this.createFrictionFromAverage(q)), q
                }, c.prototype[q.PARTICLE | q.PLANE] = c.prototype.particlePlane = function(a, b, c, d, e, h, j, k, l) {
                    var m = t,
                        n = u;
                    k = k || 0, g(m, c, j), f.rotate(n, s, k);
                    var o = i(m, n);
                    if (o > 0) return 0;
                    if (l) return !0;
                    var p = this.createContactEquation(e, a, h, b);
                    return f.copy(p.normalA, n), f.scale(m, p.normalA, o), g(p.contactPointA, c, m), g(p.contactPointA, p.contactPointA, e.position), g(p.contactPointB, c, a.position), this.contactEquations.push(p), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(p)), 1
                }, c.prototype[q.CIRCLE | q.PARTICLE] = c.prototype.circleParticle = function(a, b, c, d, e, i, j, k, l) {
                    var m = t;
                    if (g(m, j, c), f.squaredLength(m) > Math.pow(b.radius, 2)) return 0;
                    if (l) return !0;
                    var n = this.createContactEquation(a, e, b, i);
                    return f.copy(n.normalA, m), f.normalize(n.normalA, n.normalA), f.scale(n.contactPointA, n.normalA, b.radius), h(n.contactPointA, n.contactPointA, c), g(n.contactPointA, n.contactPointA, a.position), g(n.contactPointB, j, e.position), this.contactEquations.push(n), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(n)), 1
                }; {
                    var V = new o(1),
                        W = f.create(),
                        X = f.create();
                    f.create()
                }
                c.prototype[q.PLANE | q.CAPSULE] = c.prototype.planeCapsule = function(a, b, c, d, e, g, i, j, k) {
                    var l = W,
                        m = X,
                        n = V;
                    f.set(l, -g.length / 2, 0), f.rotate(l, l, j), h(l, l, i), f.set(m, g.length / 2, 0), f.rotate(m, m, j), h(m, m, i), n.radius = g.radius;
                    var o;
                    this.enableFrictionReduction && (o = this.enableFriction, this.enableFriction = !1);
                    var p = this.circlePlane(e, n, l, 0, a, b, c, d, k),
                        q = this.circlePlane(e, n, m, 0, a, b, c, d, k);
                    if (this.enableFrictionReduction && (this.enableFriction = o), k) return p || q;
                    var r = p + q;
                    return this.enableFrictionReduction && r && this.frictionEquations.push(this.createFrictionFromAverage(r)), r
                }, c.prototype[q.CIRCLE | q.PLANE] = c.prototype.circlePlane = function(a, b, c, d, e, j, k, l, m) {
                    var n = a,
                        o = b,
                        p = c,
                        q = e,
                        r = k,
                        w = l;
                    w = w || 0;
                    var x = t,
                        y = u,
                        z = v;
                    g(x, p, r), f.rotate(y, s, w);
                    var A = i(y, x);
                    if (A > o.radius) return 0;
                    if (m) return !0;
                    var B = this.createContactEquation(q, n, j, b);
                    return f.copy(B.normalA, y), f.scale(B.contactPointB, B.normalA, -o.radius), h(B.contactPointB, B.contactPointB, p), g(B.contactPointB, B.contactPointB, n.position), f.scale(z, B.normalA, A), g(B.contactPointA, x, z), h(B.contactPointA, B.contactPointA, r), g(B.contactPointA, B.contactPointA, q.position), this.contactEquations.push(B), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(B)), 1
                }, c.prototype[q.CONVEX] = c.prototype[q.CONVEX | q.RECTANGLE] = c.prototype[q.RECTANGLE] = c.prototype.convexConvex = function(a, b, d, e, j, k, l, m, n, o) {
                    var p = t,
                        q = u,
                        r = v,
                        s = w,
                        y = x,
                        C = z,
                        D = A,
                        E = B,
                        F = 0,
                        o = "number" == typeof o ? o : 0,
                        G = c.findSeparatingAxis(b, d, e, k, l, m, p);
                    if (!G) return 0;
                    g(D, l, d), i(p, D) > 0 && f.scale(p, p, -1);
                    var H = c.getClosestEdge(b, e, p, !0),
                        I = c.getClosestEdge(k, m, p);
                    if (-1 === H || -1 === I) return 0;
                    for (var J = 0; 2 > J; J++) {
                        var K = H,
                            L = I,
                            M = b,
                            N = k,
                            O = d,
                            P = l,
                            Q = e,
                            R = m,
                            S = a,
                            T = j;
                        if (0 === J) {
                            var U;
                            U = K, K = L, L = U, U = M, M = N, N = U, U = O, O = P, P = U, U = Q, Q = R, R = U, U = S, S = T, T = U
                        }
                        for (var V = L; L + 2 > V; V++) {
                            var W = N.vertices[(V + N.vertices.length) % N.vertices.length];
                            f.rotate(q, W, R), h(q, q, P);
                            for (var X = 0, Y = K - 1; K + 2 > Y; Y++) {
                                var Z = M.vertices[(Y + M.vertices.length) % M.vertices.length],
                                    $ = M.vertices[(Y + 1 + M.vertices.length) % M.vertices.length];
                                f.rotate(r, Z, Q), f.rotate(s, $, Q), h(r, r, O), h(s, s, O), g(y, s, r), f.rotate90cw(E, y), f.normalize(E, E), g(D, q, r);
                                var _ = i(E, D);
                                (Y === K && o >= _ || Y !== K && 0 >= _) && X++
                            }
                            if (X >= 3) {
                                if (n) return !0;
                                var ab = this.createContactEquation(S, T, M, N);
                                F++;
                                var Z = M.vertices[K % M.vertices.length],
                                    $ = M.vertices[(K + 1) % M.vertices.length];
                                f.rotate(r, Z, Q), f.rotate(s, $, Q), h(r, r, O), h(s, s, O), g(y, s, r), f.rotate90cw(ab.normalA, y), f.normalize(ab.normalA, ab.normalA), g(D, q, r);
                                var _ = i(ab.normalA, D);
                                f.scale(C, ab.normalA, _), g(ab.contactPointA, q, O), g(ab.contactPointA, ab.contactPointA, C), h(ab.contactPointA, ab.contactPointA, O), g(ab.contactPointA, ab.contactPointA, S.position), g(ab.contactPointB, q, P), h(ab.contactPointB, ab.contactPointB, P), g(ab.contactPointB, ab.contactPointB, T.position), this.contactEquations.push(ab), this.enableFrictionReduction || this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(ab))
                            }
                        }
                    }
                    return this.enableFrictionReduction && this.enableFriction && F && this.frictionEquations.push(this.createFrictionFromAverage(F)), F
                };
                var Y = f.fromValues(0, 0);
                c.projectConvexOntoAxis = function(a, b, c, d, e) {
                    var g, h, j = null,
                        k = null,
                        l = Y;
                    f.rotate(l, d, -c);
                    for (var m = 0; m < a.vertices.length; m++) g = a.vertices[m], h = i(g, l), (null === j || h > j) && (j = h), (null === k || k > h) && (k = h);
                    if (k > j) {
                        var n = k;
                        k = j, j = n
                    }
                    var o = i(b, d);
                    f.set(e, k + o, j + o)
                };
                var Z = f.fromValues(0, 0),
                    $ = f.fromValues(0, 0),
                    _ = f.fromValues(0, 0),
                    ab = f.fromValues(0, 0),
                    bb = f.fromValues(0, 0),
                    cb = f.fromValues(0, 0);
                c.findSeparatingAxis = function(a, b, d, e, h, i, j) {
                    var k = null,
                        l = !1,
                        m = !1,
                        n = Z,
                        o = $,
                        p = _,
                        q = ab,
                        s = bb,
                        t = cb;
                    if (a instanceof r && e instanceof r)
                        for (var u = 0; 2 !== u; u++) {
                            var v = a,
                                w = d;
                            1 === u && (v = e, w = i);
                            for (var x = 0; 2 !== x; x++) {
                                0 === x ? f.set(q, 0, 1) : 1 === x && f.set(q, 1, 0), 0 !== w && f.rotate(q, q, w), c.projectConvexOntoAxis(a, b, d, q, s), c.projectConvexOntoAxis(e, h, i, q, t);
                                var y = s,
                                    z = t,
                                    A = !1;
                                s[0] > t[0] && (z = s, y = t, A = !0);
                                var B = z[0] - y[1];
                                l = 0 >= B, (null === k || B > k) && (f.copy(j, q), k = B, m = l)
                            }
                        } else
                            for (var u = 0; 2 !== u; u++) {
                                var v = a,
                                    w = d;
                                1 === u && (v = e, w = i);
                                for (var x = 0; x !== v.vertices.length; x++) {
                                    f.rotate(o, v.vertices[x], w), f.rotate(p, v.vertices[(x + 1) % v.vertices.length], w), g(n, p, o), f.rotate90cw(q, n), f.normalize(q, q), c.projectConvexOntoAxis(a, b, d, q, s), c.projectConvexOntoAxis(e, h, i, q, t);
                                    var y = s,
                                        z = t,
                                        A = !1;
                                    s[0] > t[0] && (z = s, y = t, A = !0);
                                    var B = z[0] - y[1];
                                    l = 0 >= B, (null === k || B > k) && (f.copy(j, q), k = B, m = l)
                                }
                            }
                    return m
                };
                var db = f.fromValues(0, 0),
                    eb = f.fromValues(0, 0),
                    fb = f.fromValues(0, 0);
                c.getClosestEdge = function(a, b, c, d) {
                    var e = db,
                        h = eb,
                        j = fb;
                    f.rotate(e, c, -b), d && f.scale(e, e, -1);
                    for (var k = -1, l = a.vertices.length, m = -1, n = 0; n !== l; n++) {
                        g(h, a.vertices[(n + 1) % l], a.vertices[n % l]), f.rotate90cw(j, h), f.normalize(j, j);
                        var o = i(j, e);
                        (-1 === k || o > m) && (k = n % l, m = o)
                    }
                    return k
                };
                var gb = f.create(),
                    hb = f.create(),
                    ib = f.create(),
                    jb = f.create(),
                    kb = f.create(),
                    lb = f.create(),
                    mb = f.create();
                c.prototype[q.CIRCLE | q.HEIGHTFIELD] = c.prototype.circleHeightfield = function(a, b, c, d, e, i, j, k, l, m) {
                    var n = i.data,
                        m = m || b.radius,
                        o = i.elementWidth,
                        p = hb,
                        q = gb,
                        r = kb,
                        s = mb,
                        t = lb,
                        u = ib,
                        v = jb,
                        w = Math.floor((c[0] - m - j[0]) / o),
                        x = Math.ceil((c[0] + m - j[0]) / o);
                    0 > w && (w = 0), x >= n.length && (x = n.length - 1);
                    for (var y = n[w], z = n[x], A = w; x > A; A++) n[A] < z && (z = n[A]), n[A] > y && (y = n[A]);
                    if (c[1] - m > y) return l ? !1 : 0;
                    c[1] + m < z;
                    for (var B = !1, A = w; x > A; A++) {
                        f.set(u, A * o, n[A]), f.set(v, (A + 1) * o, n[A + 1]), f.add(u, u, j), f.add(v, v, j), f.sub(t, v, u), f.rotate(t, t, Math.PI / 2), f.normalize(t, t), f.scale(q, t, -m), f.add(q, q, c), f.sub(p, q, u);
                        var C = f.dot(p, t);
                        if (q[0] >= u[0] && q[0] < v[0] && 0 >= C) {
                            if (l) return !0;
                            B = !0, f.scale(p, t, -C), f.add(r, q, p), f.copy(s, t);
                            var D = this.createContactEquation(e, a, i, b);
                            f.copy(D.normalA, s), f.scale(D.contactPointB, D.normalA, -m), h(D.contactPointB, D.contactPointB, c), g(D.contactPointB, D.contactPointB, a.position), f.copy(D.contactPointA, r), f.sub(D.contactPointA, D.contactPointA, e.position), this.contactEquations.push(D), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(D))
                        }
                    }
                    if (B = !1, m > 0)
                        for (var A = w; x >= A; A++)
                            if (f.set(u, A * o, n[A]), f.add(u, u, j), f.sub(p, c, u), f.squaredLength(p) < Math.pow(m, 2)) {
                                if (l) return !0;
                                B = !0;
                                var D = this.createContactEquation(e, a, i, b);
                                f.copy(D.normalA, p), f.normalize(D.normalA, D.normalA), f.scale(D.contactPointB, D.normalA, -m), h(D.contactPointB, D.contactPointB, c), g(D.contactPointB, D.contactPointB, a.position), g(D.contactPointA, u, j), h(D.contactPointA, D.contactPointA, j), g(D.contactPointA, D.contactPointA, e.position), this.contactEquations.push(D), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(D))
                            }
                    return B ? 1 : 0
                };
                var nb = f.create(),
                    ob = f.create(),
                    pb = f.create(),
                    qb = new p([f.create(), f.create(), f.create(), f.create()]);
                c.prototype[q.RECTANGLE | q.HEIGHTFIELD] = c.prototype[q.CONVEX | q.HEIGHTFIELD] = c.prototype.convexHeightfield = function(a, b, c, d, e, g, h, i, j) {
                    var k = g.data,
                        l = g.elementWidth,
                        m = nb,
                        n = ob,
                        o = pb,
                        p = qb,
                        q = Math.floor((a.aabb.lowerBound[0] - h[0]) / l),
                        r = Math.ceil((a.aabb.upperBound[0] - h[0]) / l);
                    0 > q && (q = 0), r >= k.length && (r = k.length - 1);
                    for (var s = k[q], t = k[r], u = q; r > u; u++) k[u] < t && (t = k[u]), k[u] > s && (s = k[u]);
                    if (a.aabb.lowerBound[1] > s) return j ? !1 : 0;
                    for (var v = 0, u = q; r > u; u++) {
                        f.set(m, u * l, k[u]), f.set(n, (u + 1) * l, k[u + 1]), f.add(m, m, h), f.add(n, n, h);
                        var w = 100;
                        f.set(o, .5 * (n[0] + m[0]), .5 * (n[1] + m[1] - w)), f.sub(p.vertices[0], n, o), f.sub(p.vertices[1], m, o), f.copy(p.vertices[2], p.vertices[1]), f.copy(p.vertices[3], p.vertices[0]), p.vertices[2][1] -= w, p.vertices[3][1] -= w, v += this.convexConvex(a, b, c, d, e, p, o, 0, j)
                    }
                    return v
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/collision/Narrowphase.js", "/collision")
        }, {
            "../equations/ContactEquation": 24,
            "../equations/Equation": 25,
            "../equations/FrictionEquation": 26,
            "../math/vec2": 33,
            "../objects/Body": 34,
            "../shapes/Circle": 40,
            "../shapes/Convex": 41,
            "../shapes/Rectangle": 46,
            "../shapes/Shape": 47,
            "../utils/TupleDictionary": 51,
            "../utils/Utils": 52,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        16: [function(a, b) {
            (function() {
                function c() {
                    e.call(this, e.SAP), this.axisList = [], this.world = null, this.axisIndex = 0;
                    var a = this.axisList;
                    this._addBodyHandler = function(b) {
                        a.push(b.body)
                    }, this._removeBodyHandler = function(b) {
                        var c = a.indexOf(b.body); - 1 !== c && a.splice(c, 1)
                    }
                }
                var d = a("../utils/Utils"),
                    e = a("../collision/Broadphase");
                b.exports = c, c.prototype = new e, c.prototype.setWorld = function(a) {
                    this.axisList.length = 0, d.appendArray(this.axisList, a.bodies), a.off("addBody", this._addBodyHandler).off("removeBody", this._removeBodyHandler), a.on("addBody", this._addBodyHandler).on("removeBody", this._removeBodyHandler), this.world = a
                }, c.sortAxisList = function(a, b) {
                    b = 0 | b;
                    for (var c = 1, d = a.length; d > c; c++) {
                        for (var e = a[c], f = c - 1; f >= 0 && !(a[f].aabb.lowerBound[b] <= e.aabb.lowerBound[b]); f--) a[f + 1] = a[f];
                        a[f + 1] = e
                    }
                    return a
                }, c.prototype.getCollisionPairs = function() {
                    var a = this.axisList,
                        b = this.result,
                        d = this.axisIndex;
                    b.length = 0;
                    for (var f = a.length; f--;) {
                        var g = a[f];
                        g.aabbNeedsUpdate && g.updateAABB()
                    }
                    c.sortAxisList(a, d);
                    for (var h = 0, i = 0 | a.length; h !== i; h++)
                        for (var j = a[h], k = h + 1; i > k; k++) {
                            var l = a[k],
                                m = l.aabb.lowerBound[d] <= j.aabb.upperBound[d];
                            if (!m) break;
                            e.canCollide(j, l) && this.boundingVolumeCheck(j, l) && b.push(j, l)
                        }
                    return b
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/collision/SAPBroadphase.js", "/collision")
        }, {
            "../collision/Broadphase": 12,
            "../utils/Utils": 52,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        17: [function(a, b) {
            (function() {
                function c(a, b, c, e) {
                    this.type = c, e = d.defaults(e, {
                        collideConnected: !0,
                        wakeUpBodies: !0
                    }), this.equations = [], this.bodyA = a, this.bodyB = b, this.collideConnected = e.collideConnected, e.wakeUpBodies && (a && a.wakeUp(), b && b.wakeUp())
                }
                b.exports = c;
                var d = a("../utils/Utils");
                c.prototype.update = function() {
                    throw new Error("method update() not implmemented in this Constraint subclass!")
                }, c.DISTANCE = 1, c.GEAR = 2, c.LOCK = 3, c.PRISMATIC = 4, c.REVOLUTE = 5, c.prototype.setStiffness = function(a) {
                    for (var b = this.equations, c = 0; c !== b.length; c++) {
                        var d = b[c];
                        d.stiffness = a, d.needsUpdate = !0
                    }
                }, c.prototype.setRelaxation = function(a) {
                    for (var b = this.equations, c = 0; c !== b.length; c++) {
                        var d = b[c];
                        d.relaxation = a, d.needsUpdate = !0
                    }
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/constraints/Constraint.js", "/constraints")
        }, {
            "../utils/Utils": 52,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        18: [function(a, b) {
            (function() {
                function c(a, b, c) {
                    c = g.defaults(c, {
                        localAnchorA: [0, 0],
                        localAnchorB: [0, 0]
                    }), d.call(this, a, b, d.DISTANCE, c), this.localAnchorA = f.fromValues(c.localAnchorA[0], c.localAnchorA[1]), this.localAnchorB = f.fromValues(c.localAnchorB[0], c.localAnchorB[1]);
                    var h = this.localAnchorA,
                        i = this.localAnchorB;
                    if (this.distance = 0, "number" == typeof c.distance) this.distance = c.distance;
                    else {
                        var j = f.create(),
                            k = f.create(),
                            l = f.create();
                        f.rotate(j, h, a.angle), f.rotate(k, i, b.angle), f.add(l, b.position, k), f.sub(l, l, j), f.sub(l, l, a.position), this.distance = f.length(l)
                    }
                    var m;
                    m = "undefined" == typeof c.maxForce ? Number.MAX_VALUE : c.maxForce;
                    var n = new e(a, b, -m, m);
                    this.equations = [n], this.maxForce = m;
                    var l = f.create(),
                        o = f.create(),
                        p = f.create(),
                        q = this;
                    n.computeGq = function() {
                        var a = this.bodyA,
                            b = this.bodyB,
                            c = a.position,
                            d = b.position;
                        return f.rotate(o, h, a.angle), f.rotate(p, i, b.angle), f.add(l, d, p), f.sub(l, l, o), f.sub(l, l, c), f.length(l) - q.distance
                    }, this.setMaxForce(m), this.upperLimitEnabled = !1, this.upperLimit = 1, this.lowerLimitEnabled = !1, this.lowerLimit = 0, this.position = 0
                }
                var d = a("./Constraint"),
                    e = a("../equations/Equation"),
                    f = a("../math/vec2"),
                    g = a("../utils/Utils");
                b.exports = c, c.prototype = new d;
                var h = f.create(),
                    i = f.create(),
                    j = f.create();
                c.prototype.update = function() {
                    var a = this.equations[0],
                        b = this.bodyA,
                        c = this.bodyB,
                        d = (this.distance, b.position),
                        e = c.position,
                        g = this.equations[0],
                        k = a.G;
                    f.rotate(i, this.localAnchorA, b.angle), f.rotate(j, this.localAnchorB, c.angle), f.add(h, e, j), f.sub(h, h, i), f.sub(h, h, d), this.position = f.length(h);
                    var l = !1;
                    if (this.upperLimitEnabled && this.position > this.upperLimit && (g.maxForce = 0, g.minForce = -this.maxForce, this.distance = this.upperLimit, l = !0), this.lowerLimitEnabled && this.position < this.lowerLimit && (g.maxForce = this.maxForce, g.minForce = 0, this.distance = this.lowerLimit, l = !0), (this.lowerLimitEnabled || this.upperLimitEnabled) && !l) return void(g.enabled = !1);
                    g.enabled = !0, f.normalize(h, h);
                    var m = f.crossLength(i, h),
                        n = f.crossLength(j, h);
                    k[0] = -h[0], k[1] = -h[1], k[2] = -m, k[3] = h[0], k[4] = h[1], k[5] = n
                }, c.prototype.setMaxForce = function(a) {
                    var b = this.equations[0];
                    b.minForce = -a, b.maxForce = a
                }, c.prototype.getMaxForce = function() {
                    var a = this.equations[0];
                    return a.maxForce
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/constraints/DistanceConstraint.js", "/constraints")
        }, {
            "../equations/Equation": 25,
            "../math/vec2": 33,
            "../utils/Utils": 52,
            "./Constraint": 17,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        19: [function(a, b) {
            (function() {
                function c(a, b, c) {
                    c = c || {}, d.call(this, a, b, d.GEAR, c), this.ratio = "number" == typeof c.ratio ? c.ratio : 1, this.angle = "number" == typeof c.angle ? c.angle : b.angle - this.ratio * a.angle, c.angle = this.angle, c.ratio = this.ratio, this.equations = [new e(a, b, c)], "number" == typeof c.maxTorque && this.setMaxTorque(c.maxTorque)
                } {
                    var d = a("./Constraint"),
                        e = (a("../equations/Equation"), a("../equations/AngleLockEquation"));
                    a("../math/vec2")
                }
                b.exports = c, c.prototype = new d, c.prototype.update = function() {
                    var a = this.equations[0];
                    a.ratio !== this.ratio && a.setRatio(this.ratio), a.angle = this.angle
                }, c.prototype.setMaxTorque = function(a) {
                    this.equations[0].setMaxTorque(a)
                }, c.prototype.getMaxTorque = function() {
                    return this.equations[0].maxForce
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/constraints/GearConstraint.js", "/constraints")
        }, {
            "../equations/AngleLockEquation": 23,
            "../equations/Equation": 25,
            "../math/vec2": 33,
            "./Constraint": 17,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        20: [function(a, b) {
            (function() {
                function c(a, b, c) {
                    c = c || {}, d.call(this, a, b, d.LOCK, c);
                    var g = "undefined" == typeof c.maxForce ? Number.MAX_VALUE : c.maxForce,
                        h = (c.localAngleB || 0, new f(a, b, -g, g)),
                        i = new f(a, b, -g, g),
                        j = new f(a, b, -g, g),
                        k = e.create(),
                        l = e.create(),
                        m = this;
                    h.computeGq = function() {
                        return e.rotate(k, m.localOffsetB, a.angle), e.sub(l, b.position, a.position), e.sub(l, l, k), l[0]
                    }, i.computeGq = function() {
                        return e.rotate(k, m.localOffsetB, a.angle), e.sub(l, b.position, a.position), e.sub(l, l, k), l[1]
                    };
                    var n = e.create(),
                        o = e.create();
                    j.computeGq = function() {
                        return e.rotate(n, m.localOffsetB, b.angle - m.localAngleB), e.scale(n, n, -1), e.sub(l, a.position, b.position), e.add(l, l, n), e.rotate(o, n, -Math.PI / 2), e.normalize(o, o), e.dot(l, o)
                    }, this.localOffsetB = e.create(), c.localOffsetB ? e.copy(this.localOffsetB, c.localOffsetB) : (e.sub(this.localOffsetB, b.position, a.position), e.rotate(this.localOffsetB, this.localOffsetB, -a.angle)), this.localAngleB = 0, this.localAngleB = "number" == typeof c.localAngleB ? c.localAngleB : b.angle - a.angle, this.equations.push(h, i, j), this.setMaxForce(g)
                }
                var d = a("./Constraint"),
                    e = a("../math/vec2"),
                    f = a("../equations/Equation");
                b.exports = c, c.prototype = new d, c.prototype.setMaxForce = function(a) {
                    for (var b = this.equations, c = 0; c < this.equations.length; c++) b[c].maxForce = a, b[c].minForce = -a
                }, c.prototype.getMaxForce = function() {
                    return this.equations[0].maxForce
                };
                var g = e.create(),
                    h = e.create(),
                    i = e.create(),
                    j = e.fromValues(1, 0),
                    k = e.fromValues(0, 1);
                c.prototype.update = function() {
                    var a = this.equations[0],
                        b = this.equations[1],
                        c = this.equations[2],
                        d = this.bodyA,
                        f = this.bodyB;
                    e.rotate(g, this.localOffsetB, d.angle), e.rotate(h, this.localOffsetB, f.angle - this.localAngleB), e.scale(h, h, -1), e.rotate(i, h, Math.PI / 2), e.normalize(i, i), a.G[0] = -1, a.G[1] = 0, a.G[2] = -e.crossLength(g, j), a.G[3] = 1, b.G[0] = 0, b.G[1] = -1, b.G[2] = -e.crossLength(g, k), b.G[4] = 1, c.G[0] = -i[0], c.G[1] = -i[1], c.G[3] = i[0], c.G[4] = i[1], c.G[5] = e.crossLength(h, i)
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/constraints/LockConstraint.js", "/constraints")
        }, {
            "../equations/Equation": 25,
            "../math/vec2": 33,
            "./Constraint": 17,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        21: [function(a, b) {
            (function() {
                function c(a, b, c) {
                    c = c || {}, d.call(this, a, b, d.PRISMATIC, c);
                    var i = g.fromValues(0, 0),
                        j = g.fromValues(1, 0),
                        k = g.fromValues(0, 0);
                    c.localAnchorA && g.copy(i, c.localAnchorA), c.localAxisA && g.copy(j, c.localAxisA), c.localAnchorB && g.copy(k, c.localAnchorB), this.localAnchorA = i, this.localAnchorB = k, this.localAxisA = j;
                    var l = this.maxForce = "undefined" != typeof c.maxForce ? c.maxForce : Number.MAX_VALUE,
                        m = new f(a, b, -l, l),
                        n = new g.create,
                        o = new g.create,
                        p = new g.create,
                        q = new g.create;
                    if (m.computeGq = function() {
                            return g.dot(p, q)
                        }, m.updateJacobian = function() {
                            var c = this.G,
                                d = a.position,
                                e = b.position;
                            g.rotate(n, i, a.angle), g.rotate(o, k, b.angle), g.add(p, e, o), g.sub(p, p, d), g.sub(p, p, n), g.rotate(q, j, a.angle + Math.PI / 2), c[0] = -q[0], c[1] = -q[1], c[2] = -g.crossLength(n, q) + g.crossLength(q, p), c[3] = q[0], c[4] = q[1], c[5] = g.crossLength(o, q)
                        }, this.equations.push(m), !c.disableRotationalLock) {
                        var r = new h(a, b, -l, l);
                        this.equations.push(r)
                    }
                    this.position = 0, this.velocity = 0, this.lowerLimitEnabled = "undefined" != typeof c.lowerLimit ? !0 : !1, this.upperLimitEnabled = "undefined" != typeof c.upperLimit ? !0 : !1, this.lowerLimit = "undefined" != typeof c.lowerLimit ? c.lowerLimit : 0, this.upperLimit = "undefined" != typeof c.upperLimit ? c.upperLimit : 1, this.upperLimitEquation = new e(a, b), this.lowerLimitEquation = new e(a, b), this.upperLimitEquation.minForce = this.lowerLimitEquation.minForce = 0, this.upperLimitEquation.maxForce = this.lowerLimitEquation.maxForce = l, this.motorEquation = new f(a, b), this.motorEnabled = !1, this.motorSpeed = 0; {
                        var s = this,
                            t = this.motorEquation;
                        t.computeGW
                    }
                    t.computeGq = function() {
                        return 0
                    }, t.computeGW = function() {
                        var a = this.G,
                            b = this.bodyA,
                            c = this.bodyB,
                            d = b.velocity,
                            e = c.velocity,
                            f = b.angularVelocity,
                            g = c.angularVelocity;
                        return this.gmult(a, d, f, e, g) + s.motorSpeed
                    }
                }
                var d = a("./Constraint"),
                    e = a("../equations/ContactEquation"),
                    f = a("../equations/Equation"),
                    g = a("../math/vec2"),
                    h = a("../equations/RotationalLockEquation");
                b.exports = c, c.prototype = new d;
                var i = g.create(),
                    j = g.create(),
                    k = g.create(),
                    l = g.create(),
                    m = g.create(),
                    n = g.create();
                c.prototype.update = function() {
                    var a = this.equations,
                        b = a[0],
                        c = this.upperLimit,
                        d = this.lowerLimit,
                        e = this.upperLimitEquation,
                        f = this.lowerLimitEquation,
                        h = this.bodyA,
                        o = this.bodyB,
                        p = this.localAxisA,
                        q = this.localAnchorA,
                        r = this.localAnchorB;
                    b.updateJacobian(), g.rotate(i, p, h.angle), g.rotate(l, q, h.angle), g.add(j, l, h.position), g.rotate(m, r, o.angle), g.add(k, m, o.position);
                    var s = this.position = g.dot(k, i) - g.dot(j, i);
                    if (this.motorEnabled) {
                        var t = this.motorEquation.G;
                        t[0] = i[0], t[1] = i[1], t[2] = g.crossLength(i, m), t[3] = -i[0], t[4] = -i[1], t[5] = -g.crossLength(i, l)
                    }
                    if (this.upperLimitEnabled && s > c) g.scale(e.normalA, i, -1), g.sub(e.contactPointA, j, h.position), g.sub(e.contactPointB, k, o.position), g.scale(n, i, c), g.add(e.contactPointA, e.contactPointA, n), -1 === a.indexOf(e) && a.push(e);
                    else {
                        var u = a.indexOf(e); - 1 !== u && a.splice(u, 1)
                    }
                    if (this.lowerLimitEnabled && d > s) g.scale(f.normalA, i, 1), g.sub(f.contactPointA, j, h.position), g.sub(f.contactPointB, k, o.position), g.scale(n, i, d), g.sub(f.contactPointB, f.contactPointB, n), -1 === a.indexOf(f) && a.push(f);
                    else {
                        var u = a.indexOf(f); - 1 !== u && a.splice(u, 1)
                    }
                }, c.prototype.enableMotor = function() {
                    this.motorEnabled || (this.equations.push(this.motorEquation), this.motorEnabled = !0)
                }, c.prototype.disableMotor = function() {
                    if (this.motorEnabled) {
                        var a = this.equations.indexOf(this.motorEquation);
                        this.equations.splice(a, 1), this.motorEnabled = !1
                    }
                }, c.prototype.setLimits = function(a, b) {
                    "number" == typeof a ? (this.lowerLimit = a, this.lowerLimitEnabled = !0) : (this.lowerLimit = a, this.lowerLimitEnabled = !1), "number" == typeof b ? (this.upperLimit = b, this.upperLimitEnabled = !0) : (this.upperLimit = b, this.upperLimitEnabled = !1)
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/constraints/PrismaticConstraint.js", "/constraints")
        }, {
            "../equations/ContactEquation": 24,
            "../equations/Equation": 25,
            "../equations/RotationalLockEquation": 27,
            "../math/vec2": 33,
            "./Constraint": 17,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        22: [function(a, b) {
            (function() {
                function c(a, b, c) {
                    c = c || {}, d.call(this, a, b, d.REVOLUTE, c);
                    var n = this.maxForce = "undefined" != typeof c.maxForce ? c.maxForce : Number.MAX_VALUE;
                    this.pivotA = h.create(), this.pivotB = h.create(), c.worldPivot ? (h.sub(this.pivotA, c.worldPivot, a.position), h.sub(this.pivotB, c.worldPivot, b.position), h.rotate(this.pivotA, this.pivotA, -a.angle), h.rotate(this.pivotB, this.pivotB, -b.angle)) : (h.copy(this.pivotA, c.localPivotA), h.copy(this.pivotB, c.localPivotB));
                    var o = this.equations = [new e(a, b, -n, n), new e(a, b, -n, n)],
                        p = o[0],
                        q = o[1],
                        r = this;
                    p.computeGq = function() {
                        return h.rotate(i, r.pivotA, a.angle), h.rotate(j, r.pivotB, b.angle), h.add(m, b.position, j), h.sub(m, m, a.position), h.sub(m, m, i), h.dot(m, k)
                    }, q.computeGq = function() {
                        return h.rotate(i, r.pivotA, a.angle), h.rotate(j, r.pivotB, b.angle), h.add(m, b.position, j), h.sub(m, m, a.position), h.sub(m, m, i), h.dot(m, l)
                    }, q.minForce = p.minForce = -n, q.maxForce = p.maxForce = n, this.motorEquation = new f(a, b), this.motorEnabled = !1, this.angle = 0, this.lowerLimitEnabled = !1, this.upperLimitEnabled = !1, this.lowerLimit = 0, this.upperLimit = 0, this.upperLimitEquation = new g(a, b), this.lowerLimitEquation = new g(a, b), this.upperLimitEquation.minForce = 0, this.lowerLimitEquation.maxForce = 0
                }
                var d = a("./Constraint"),
                    e = a("../equations/Equation"),
                    f = a("../equations/RotationalVelocityEquation"),
                    g = a("../equations/RotationalLockEquation"),
                    h = a("../math/vec2");
                b.exports = c;
                var i = h.create(),
                    j = h.create(),
                    k = h.fromValues(1, 0),
                    l = h.fromValues(0, 1),
                    m = h.create();
                c.prototype = new d, c.prototype.setLimits = function(a, b) {
                    "number" == typeof a ? (this.lowerLimit = a, this.lowerLimitEnabled = !0) : (this.lowerLimit = a, this.lowerLimitEnabled = !1), "number" == typeof b ? (this.upperLimit = b, this.upperLimitEnabled = !0) : (this.upperLimit = b, this.upperLimitEnabled = !1)
                }, c.prototype.update = function() {
                    var a = this.bodyA,
                        b = this.bodyB,
                        c = this.pivotA,
                        d = this.pivotB,
                        e = this.equations,
                        f = (e[0], e[1], e[0]),
                        g = e[1],
                        m = this.upperLimit,
                        n = this.lowerLimit,
                        o = this.upperLimitEquation,
                        p = this.lowerLimitEquation,
                        q = this.angle = b.angle - a.angle;
                    if (this.upperLimitEnabled && q > m) o.angle = m, -1 === e.indexOf(o) && e.push(o);
                    else {
                        var r = e.indexOf(o); - 1 !== r && e.splice(r, 1)
                    }
                    if (this.lowerLimitEnabled && n > q) p.angle = n, -1 === e.indexOf(p) && e.push(p);
                    else {
                        var r = e.indexOf(p); - 1 !== r && e.splice(r, 1)
                    }
                    h.rotate(i, c, a.angle), h.rotate(j, d, b.angle), f.G[0] = -1, f.G[1] = 0, f.G[2] = -h.crossLength(i, k), f.G[3] = 1, f.G[4] = 0, f.G[5] = h.crossLength(j, k), g.G[0] = 0, g.G[1] = -1, g.G[2] = -h.crossLength(i, l), g.G[3] = 0, g.G[4] = 1, g.G[5] = h.crossLength(j, l)
                }, c.prototype.enableMotor = function() {
                    this.motorEnabled || (this.equations.push(this.motorEquation), this.motorEnabled = !0)
                }, c.prototype.disableMotor = function() {
                    if (this.motorEnabled) {
                        var a = this.equations.indexOf(this.motorEquation);
                        this.equations.splice(a, 1), this.motorEnabled = !1
                    }
                }, c.prototype.motorIsEnabled = function() {
                    return !!this.motorEnabled
                }, c.prototype.setMotorSpeed = function(a) {
                    if (this.motorEnabled) {
                        var b = this.equations.indexOf(this.motorEquation);
                        this.equations[b].relativeVelocity = a
                    }
                }, c.prototype.getMotorSpeed = function() {
                    return this.motorEnabled ? this.motorEquation.relativeVelocity : !1
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/constraints/RevoluteConstraint.js", "/constraints")
        }, {
            "../equations/Equation": 25,
            "../equations/RotationalLockEquation": 27,
            "../equations/RotationalVelocityEquation": 28,
            "../math/vec2": 33,
            "./Constraint": 17,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        23: [function(a, b) {
            (function() {
                function c(a, b, c) {
                    c = c || {}, d.call(this, a, b, -Number.MAX_VALUE, Number.MAX_VALUE), this.angle = c.angle || 0, this.ratio = "number" == typeof c.ratio ? c.ratio : 1, this.setRatio(this.ratio)
                } {
                    var d = a("./Equation");
                    a("../math/vec2")
                }
                b.exports = c, c.prototype = new d, c.prototype.constructor = c, c.prototype.computeGq = function() {
                    return this.ratio * this.bodyA.angle - this.bodyB.angle + this.angle
                }, c.prototype.setRatio = function(a) {
                    var b = this.G;
                    b[2] = a, b[5] = -1, this.ratio = a
                }, c.prototype.setMaxTorque = function(a) {
                    this.maxForce = a, this.minForce = -a
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/equations/AngleLockEquation.js", "/equations")
        }, {
            "../math/vec2": 33,
            "./Equation": 25,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        24: [function(a, b) {
            (function() {
                function c(a, b) {
                    d.call(this, a, b, 0, Number.MAX_VALUE), this.contactPointA = e.create(), this.penetrationVec = e.create(), this.contactPointB = e.create(), this.normalA = e.create(), this.restitution = 0, this.firstImpact = !1, this.shapeA = null, this.shapeB = null
                }
                var d = a("./Equation"),
                    e = a("../math/vec2");
                b.exports = c, c.prototype = new d, c.prototype.constructor = c, c.prototype.computeB = function(a, b, c) {
                    var d = this.bodyA,
                        f = this.bodyB,
                        g = this.contactPointA,
                        h = this.contactPointB,
                        i = d.position,
                        j = f.position,
                        k = this.penetrationVec,
                        l = this.normalA,
                        m = this.G,
                        n = e.crossLength(g, l),
                        o = e.crossLength(h, l);
                    m[0] = -l[0], m[1] = -l[1], m[2] = -n, m[3] = l[0], m[4] = l[1], m[5] = o, e.add(k, j, h), e.sub(k, k, i), e.sub(k, k, g);
                    var p, q;
                    this.firstImpact && 0 !== this.restitution ? (q = 0, p = 1 / b * (1 + this.restitution) * this.computeGW()) : (q = e.dot(l, k) + this.offset, p = this.computeGW());
                    var r = this.computeGiMf(),
                        s = -q * a - p * b - c * r;
                    return s
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/equations/ContactEquation.js", "/equations")
        }, {
            "../math/vec2": 33,
            "./Equation": 25,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        25: [function(a, b) {
            (function() {
                function c(a, b, d, f) {
                    this.minForce = "undefined" == typeof d ? -Number.MAX_VALUE : d, this.maxForce = "undefined" == typeof f ? Number.MAX_VALUE : f, this.bodyA = a, this.bodyB = b, this.stiffness = c.DEFAULT_STIFFNESS, this.relaxation = c.DEFAULT_RELAXATION, this.G = new e.ARRAY_TYPE(6);
                    for (var g = 0; 6 > g; g++) this.G[g] = 0;
                    this.offset = 0, this.a = 0, this.b = 0, this.epsilon = 0, this.timeStep = 1 / 60, this.needsUpdate = !0, this.multiplier = 0, this.relativeVelocity = 0, this.enabled = !0
                }
                b.exports = c; {
                    var d = a("../math/vec2"),
                        e = a("../utils/Utils");
                    a("../objects/Body")
                }
                c.prototype.constructor = c, c.DEFAULT_STIFFNESS = 1e6, c.DEFAULT_RELAXATION = 4, c.prototype.update = function() {
                    var a = this.stiffness,
                        b = this.relaxation,
                        c = this.timeStep;
                    this.a = 4 / (c * (1 + 4 * b)), this.b = 4 * b / (1 + 4 * b), this.epsilon = 4 / (c * c * a * (1 + 4 * b)), this.needsUpdate = !1
                }, c.prototype.gmult = function(a, b, c, d, e) {
                    return a[0] * b[0] + a[1] * b[1] + a[2] * c + a[3] * d[0] + a[4] * d[1] + a[5] * e
                }, c.prototype.computeB = function(a, b, c) {
                    var d = this.computeGW(),
                        e = this.computeGq(),
                        f = this.computeGiMf();
                    return -e * a - d * b - f * c
                };
                var f = d.create(),
                    g = d.create();
                c.prototype.computeGq = function() {
                    var a = this.G,
                        b = this.bodyA,
                        c = this.bodyB,
                        d = (b.position, c.position, b.angle),
                        e = c.angle;
                    return this.gmult(a, f, d, g, e) + this.offset
                }, c.prototype.computeGW = function() {
                    var a = this.G,
                        b = this.bodyA,
                        c = this.bodyB,
                        d = b.velocity,
                        e = c.velocity,
                        f = b.angularVelocity,
                        g = c.angularVelocity;
                    return this.gmult(a, d, f, e, g) + this.relativeVelocity
                }, c.prototype.computeGWlambda = function() {
                    var a = this.G,
                        b = this.bodyA,
                        c = this.bodyB,
                        d = b.vlambda,
                        e = c.vlambda,
                        f = b.wlambda,
                        g = c.wlambda;
                    return this.gmult(a, d, f, e, g)
                };
                var h = d.create(),
                    i = d.create();
                c.prototype.computeGiMf = function() {
                    var a = this.bodyA,
                        b = this.bodyB,
                        c = a.force,
                        e = a.angularForce,
                        f = b.force,
                        g = b.angularForce,
                        j = a.invMassSolve,
                        k = b.invMassSolve,
                        l = a.invInertiaSolve,
                        m = b.invInertiaSolve,
                        n = this.G;
                    return d.scale(h, c, j), d.scale(i, f, k), this.gmult(n, h, e * l, i, g * m)
                }, c.prototype.computeGiMGt = function() {
                    var a = this.bodyA,
                        b = this.bodyB,
                        c = a.invMassSolve,
                        d = b.invMassSolve,
                        e = a.invInertiaSolve,
                        f = b.invInertiaSolve,
                        g = this.G;
                    return g[0] * g[0] * c + g[1] * g[1] * c + g[2] * g[2] * e + g[3] * g[3] * d + g[4] * g[4] * d + g[5] * g[5] * f
                }; {
                    var j = d.create(),
                        k = d.create(),
                        l = d.create();
                    d.create(), d.create(), d.create()
                }
                c.prototype.addToWlambda = function(a) {
                    var b = this.bodyA,
                        c = this.bodyB,
                        e = j,
                        f = k,
                        g = l,
                        h = b.invMassSolve,
                        i = c.invMassSolve,
                        m = b.invInertiaSolve,
                        n = c.invInertiaSolve,
                        o = this.G;
                    f[0] = o[0], f[1] = o[1], g[0] = o[3], g[1] = o[4], d.scale(e, f, h * a), d.add(b.vlambda, b.vlambda, e), b.wlambda += m * o[2] * a, d.scale(e, g, i * a), d.add(c.vlambda, c.vlambda, e), c.wlambda += n * o[5] * a
                }, c.prototype.computeInvC = function(a) {
                    return 1 / (this.computeGiMGt() + a)
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/equations/Equation.js", "/equations")
        }, {
            "../math/vec2": 33,
            "../objects/Body": 34,
            "../utils/Utils": 52,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        26: [function(a, b) {
            (function() {
                function c(a, b, c) {
                    e.call(this, a, b, -c, c), this.contactPointA = d.create(), this.contactPointB = d.create(), this.t = d.create(), this.contactEquations = [], this.shapeA = null, this.shapeB = null, this.frictionCoefficient = .3
                } {
                    var d = a("../math/vec2"),
                        e = a("./Equation");
                    a("../utils/Utils")
                }
                b.exports = c, c.prototype = new e, c.prototype.constructor = c, c.prototype.setSlipForce = function(a) {
                    this.maxForce = a, this.minForce = -a
                }, c.prototype.getSlipForce = function() {
                    return this.maxForce
                }, c.prototype.computeB = function(a, b, c) {
                    var e = (this.bodyA, this.bodyB, this.contactPointA),
                        f = this.contactPointB,
                        g = this.t,
                        h = this.G;
                    h[0] = -g[0], h[1] = -g[1], h[2] = -d.crossLength(e, g), h[3] = g[0], h[4] = g[1], h[5] = d.crossLength(f, g);
                    var i = this.computeGW(),
                        j = this.computeGiMf(),
                        k = -i * b - c * j;
                    return k
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/equations/FrictionEquation.js", "/equations")
        }, {
            "../math/vec2": 33,
            "../utils/Utils": 52,
            "./Equation": 25,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        27: [function(a, b) {
            (function() {
                function c(a, b, c) {
                    c = c || {}, d.call(this, a, b, -Number.MAX_VALUE, Number.MAX_VALUE), this.angle = c.angle || 0;
                    var e = this.G;
                    e[2] = 1, e[5] = -1
                }
                var d = a("./Equation"),
                    e = a("../math/vec2");
                b.exports = c, c.prototype = new d, c.prototype.constructor = c;
                var f = e.create(),
                    g = e.create(),
                    h = e.fromValues(1, 0),
                    i = e.fromValues(0, 1);
                c.prototype.computeGq = function() {
                    return e.rotate(f, h, this.bodyA.angle + this.angle), e.rotate(g, i, this.bodyB.angle), e.dot(f, g)
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/equations/RotationalLockEquation.js", "/equations")
        }, {
            "../math/vec2": 33,
            "./Equation": 25,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        28: [function(a, b) {
            (function() {
                function c(a, b) {
                    d.call(this, a, b, -Number.MAX_VALUE, Number.MAX_VALUE), this.relativeVelocity = 1, this.ratio = 1
                } {
                    var d = a("./Equation");
                    a("../math/vec2")
                }
                b.exports = c, c.prototype = new d, c.prototype.constructor = c, c.prototype.computeB = function(a, b, c) {
                    var d = this.G;
                    d[2] = -1, d[5] = this.ratio;
                    var e = this.computeGiMf(),
                        f = this.computeGW(),
                        g = -f * b - c * e;
                    return g
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/equations/RotationalVelocityEquation.js", "/equations")
        }, {
            "../math/vec2": 33,
            "./Equation": 25,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        29: [function(a, b) {
            (function() {
                var a = function() {};
                b.exports = a, a.prototype = {
                    constructor: a,
                    on: function(a, b, c) {
                        b.context = c || this, void 0 === this._listeners && (this._listeners = {});
                        var d = this._listeners;
                        return void 0 === d[a] && (d[a] = []), -1 === d[a].indexOf(b) && d[a].push(b), this
                    },
                    has: function(a, b) {
                        if (void 0 === this._listeners) return !1;
                        var c = this._listeners;
                        if (b) {
                            if (void 0 !== c[a] && -1 !== c[a].indexOf(b)) return !0
                        } else if (void 0 !== c[a]) return !0;
                        return !1
                    },
                    off: function(a, b) {
                        if (void 0 === this._listeners) return this;
                        var c = this._listeners,
                            d = c[a].indexOf(b);
                        return -1 !== d && c[a].splice(d, 1), this
                    },
                    emit: function(a) {
                        if (void 0 === this._listeners) return this;
                        var b = this._listeners,
                            c = b[a.type];
                        if (void 0 !== c) {
                            a.target = this;
                            for (var d = 0, e = c.length; e > d; d++) {
                                var f = c[d];
                                f.call(f.context, a)
                            }
                        }
                        return this
                    }
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/events/EventEmitter.js", "/events")
        }, {
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        30: [function(a, b) {
            (function() {
                function c(a, b, f) {
                    if (f = f || {}, !(a instanceof d && b instanceof d)) throw new Error("First two arguments must be Material instances.");
                    this.id = c.idCounter++, this.materialA = a, this.materialB = b, this.friction = "undefined" != typeof f.friction ? Number(f.friction) : .3, this.restitution = "undefined" != typeof f.restitution ? Number(f.restitution) : 0, this.stiffness = "undefined" != typeof f.stiffness ? Number(f.stiffness) : e.DEFAULT_STIFFNESS, this.relaxation = "undefined" != typeof f.relaxation ? Number(f.relaxation) : e.DEFAULT_RELAXATION, this.frictionStiffness = "undefined" != typeof f.frictionStiffness ? Number(f.frictionStiffness) : e.DEFAULT_STIFFNESS, this.frictionRelaxation = "undefined" != typeof f.frictionRelaxation ? Number(f.frictionRelaxation) : e.DEFAULT_RELAXATION, this.surfaceVelocity = "undefined" != typeof f.surfaceVelocity ? Number(f.surfaceVelocity) : 0, this.contactSkinSize = .005
                }
                var d = a("./Material"),
                    e = a("../equations/Equation");
                b.exports = c, c.idCounter = 0
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/material/ContactMaterial.js", "/material")
        }, {
            "../equations/Equation": 25,
            "./Material": 31,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        31: [function(a, b) {
            (function() {
                function a(b) {
                    this.id = b || a.idCounter++
                }
                b.exports = a, a.idCounter = 0
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/material/Material.js", "/material")
        }, {
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        32: [function(a, b) {
            (function() {
                var a = {};
                a.GetArea = function(a) {
                    if (a.length < 6) return 0;
                    for (var b = a.length - 2, c = 0, d = 0; b > d; d += 2) c += (a[d + 2] - a[d]) * (a[d + 1] + a[d + 3]);
                    return c += (a[0] - a[b]) * (a[b + 1] + a[1]), .5 * -c
                }, a.Triangulate = function(b) {
                    var c = b.length >> 1;
                    if (3 > c) return [];
                    for (var d = [], e = [], f = 0; c > f; f++) e.push(f);
                    for (var f = 0, g = c; g > 3;) {
                        var h = e[(f + 0) % g],
                            i = e[(f + 1) % g],
                            j = e[(f + 2) % g],
                            k = b[2 * h],
                            l = b[2 * h + 1],
                            m = b[2 * i],
                            n = b[2 * i + 1],
                            o = b[2 * j],
                            p = b[2 * j + 1],
                            q = !1;
                        if (a._convex(k, l, m, n, o, p)) {
                            q = !0;
                            for (var r = 0; g > r; r++) {
                                var s = e[r];
                                if (s != h && s != i && s != j && a._PointInTriangle(b[2 * s], b[2 * s + 1], k, l, m, n, o, p)) {
                                    q = !1;
                                    break
                                }
                            }
                        }
                        if (q) d.push(h, i, j), e.splice((f + 1) % g, 1), g--, f = 0;
                        else if (f++ > 3 * g) break
                    }
                    return d.push(e[0], e[1], e[2]), d
                }, a._PointInTriangle = function(a, b, c, d, e, f, g, h) {
                    var i = g - c,
                        j = h - d,
                        k = e - c,
                        l = f - d,
                        m = a - c,
                        n = b - d,
                        o = i * i + j * j,
                        p = i * k + j * l,
                        q = i * m + j * n,
                        r = k * k + l * l,
                        s = k * m + l * n,
                        t = 1 / (o * r - p * p),
                        u = (r * q - p * s) * t,
                        v = (o * s - p * q) * t;
                    return u >= 0 && v >= 0 && 1 > u + v
                }, a._convex = function(a, b, c, d, e, f) {
                    return (b - d) * (e - c) + (c - a) * (f - d) >= 0
                }, b.exports = a
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/math/polyk.js", "/math")
        }, {
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        33: [function(a, b) {
            (function() {
                var c = b.exports = {},
                    d = a("../utils/Utils");
                c.crossLength = function(a, b) {
                    return a[0] * b[1] - a[1] * b[0]
                }, c.crossVZ = function(a, b, d) {
                    return c.rotate(a, b, -Math.PI / 2), c.scale(a, a, d), a
                }, c.crossZV = function(a, b, d) {
                    return c.rotate(a, d, Math.PI / 2), c.scale(a, a, b), a
                }, c.rotate = function(a, b, c) {
                    if (0 !== c) {
                        var d = Math.cos(c),
                            e = Math.sin(c),
                            f = b[0],
                            g = b[1];
                        a[0] = d * f - e * g, a[1] = e * f + d * g
                    } else a[0] = b[0], a[1] = b[1]
                }, c.rotate90cw = function(a, b) {
                    var c = b[0],
                        d = b[1];
                    a[0] = d, a[1] = -c
                }, c.toLocalFrame = function(a, b, d, e) {
                    c.copy(a, b), c.sub(a, a, d), c.rotate(a, a, -e)
                }, c.toGlobalFrame = function(a, b, d, e) {
                    c.copy(a, b), c.rotate(a, a, e), c.add(a, a, d)
                }, c.centroid = function(a, b, d, e) {
                    return c.add(a, b, d), c.add(a, a, e), c.scale(a, a, 1 / 3), a
                }, c.create = function() {
                    var a = new d.ARRAY_TYPE(2);
                    return a[0] = 0, a[1] = 0, a
                }, c.clone = function(a) {
                    var b = new d.ARRAY_TYPE(2);
                    return b[0] = a[0], b[1] = a[1], b
                }, c.fromValues = function(a, b) {
                    var c = new d.ARRAY_TYPE(2);
                    return c[0] = a, c[1] = b, c
                }, c.copy = function(a, b) {
                    return a[0] = b[0], a[1] = b[1], a
                }, c.set = function(a, b, c) {
                    return a[0] = b, a[1] = c, a
                }, c.add = function(a, b, c) {
                    return a[0] = b[0] + c[0], a[1] = b[1] + c[1], a
                }, c.subtract = function(a, b, c) {
                    return a[0] = b[0] - c[0], a[1] = b[1] - c[1], a
                }, c.sub = c.subtract, c.multiply = function(a, b, c) {
                    return a[0] = b[0] * c[0], a[1] = b[1] * c[1], a
                }, c.mul = c.multiply, c.divide = function(a, b, c) {
                    return a[0] = b[0] / c[0], a[1] = b[1] / c[1], a
                }, c.div = c.divide, c.scale = function(a, b, c) {
                    return a[0] = b[0] * c, a[1] = b[1] * c, a
                }, c.distance = function(a, b) {
                    var c = b[0] - a[0],
                        d = b[1] - a[1];
                    return Math.sqrt(c * c + d * d)
                }, c.dist = c.distance, c.squaredDistance = function(a, b) {
                    var c = b[0] - a[0],
                        d = b[1] - a[1];
                    return c * c + d * d
                }, c.sqrDist = c.squaredDistance, c.length = function(a) {
                    var b = a[0],
                        c = a[1];
                    return Math.sqrt(b * b + c * c)
                }, c.len = c.length, c.squaredLength = function(a) {
                    var b = a[0],
                        c = a[1];
                    return b * b + c * c
                }, c.sqrLen = c.squaredLength, c.negate = function(a, b) {
                    return a[0] = -b[0], a[1] = -b[1], a
                }, c.normalize = function(a, b) {
                    var c = b[0],
                        d = b[1],
                        e = c * c + d * d;
                    return e > 0 && (e = 1 / Math.sqrt(e), a[0] = b[0] * e, a[1] = b[1] * e), a
                }, c.dot = function(a, b) {
                    return a[0] * b[0] + a[1] * b[1]
                }, c.str = function(a) {
                    return "vec2(" + a[0] + ", " + a[1] + ")"
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/math/vec2.js", "/math")
        }, {
            "../utils/Utils": 52,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        34: [function(a, b) {
            (function() {
                function c(a) {
                    a = a || {}, h.call(this), this.id = ++c._idCounter, this.world = null, this.shapes = [], this.shapeOffsets = [], this.shapeAngles = [], this.mass = a.mass || 0, this.invMass = 0, this.inertia = 0, this.invInertia = 0, this.invMassSolve = 0, this.invInertiaSolve = 0, this.fixedRotation = !!a.fixedRotation || !1, this.position = d.fromValues(0, 0), a.position && d.copy(this.position, a.position), this.interpolatedPosition = d.fromValues(0, 0), this.interpolatedAngle = 0, this.previousPosition = d.fromValues(0, 0), this.previousAngle = 0, this.velocity = d.fromValues(0, 0), a.velocity && d.copy(this.velocity, a.velocity), this.vlambda = d.fromValues(0, 0), this.wlambda = 0, this.angle = a.angle || 0, this.angularVelocity = a.angularVelocity || 0, this.force = d.create(), a.force && d.copy(this.force, a.force), this.angularForce = a.angularForce || 0, this.damping = "number" == typeof a.damping ? a.damping : .1, this.angularDamping = "number" == typeof a.angularDamping ? a.angularDamping : .1, this.type = c.STATIC, this.type = "undefined" != typeof a.type ? a.type : a.mass ? c.DYNAMIC : c.STATIC, this.boundingRadius = 0, this.aabb = new g, this.aabbNeedsUpdate = !0, this.allowSleep = !0, this.wantsToSleep = !1, this.sleepState = c.AWAKE, this.sleepSpeedLimit = .2, this.sleepTimeLimit = 1, this.gravityScale = 1, this.timeLastSleepy = 0, this.concavePath = null, this.lastDampingScale = 1, this.lastAngularDampingScale = 1, this.lastDampingTimeStep = -1, this._wakeUpAfterNarrowphase = !1, this.updateMassProperties()
                }
                var d = a("../math/vec2"),
                    e = a("poly-decomp"),
                    f = a("../shapes/Convex"),
                    g = a("../collision/AABB"),
                    h = a("../events/EventEmitter");
                b.exports = c, c.prototype = new h, c._idCounter = 0, c.prototype.updateSolveMassProperties = function() {
                    this.sleepState === c.SLEEPING || this.type === c.KINEMATIC ? (this.invMassSolve = 0, this.invInertiaSolve = 0) : (this.invMassSolve = this.invMass, this.invInertiaSolve = this.invInertia)
                }, c.prototype.setDensity = function(a) {
                    var b = this.getArea();
                    this.mass = b * a, this.updateMassProperties()
                }, c.prototype.getArea = function() {
                    for (var a = 0, b = 0; b < this.shapes.length; b++) a += this.shapes[b].area;
                    return a
                }, c.prototype.getAABB = function() {
                    return this.aabbNeedsUpdate && this.updateAABB(), this.aabb
                };
                var i = new g,
                    j = d.create();
                c.prototype.updateAABB = function() {
                    for (var a = this.shapes, b = this.shapeOffsets, c = this.shapeAngles, e = a.length, f = j, g = this.angle, h = 0; h !== e; h++) {
                        var k = a[h],
                            l = c[h] + g;
                        d.rotate(f, b[h], g), d.add(f, f, this.position), k.computeAABB(i, f, l), 0 === h ? this.aabb.copy(i) : this.aabb.extend(i)
                    }
                    this.aabbNeedsUpdate = !1
                }, c.prototype.updateBoundingRadius = function() {
                    for (var a = this.shapes, b = this.shapeOffsets, c = a.length, e = 0, f = 0; f !== c; f++) {
                        var g = a[f],
                            h = d.length(b[f]),
                            i = g.boundingRadius;
                        h + i > e && (e = h + i)
                    }
                    this.boundingRadius = e
                }, c.prototype.addShape = function(a, b, c) {
                    c = c || 0, b = b ? d.fromValues(b[0], b[1]) : d.fromValues(0, 0), this.shapes.push(a), this.shapeOffsets.push(b), this.shapeAngles.push(c), this.updateMassProperties(), this.updateBoundingRadius(), this.aabbNeedsUpdate = !0
                }, c.prototype.removeShape = function(a) {
                    var b = this.shapes.indexOf(a);
                    return -1 !== b ? (this.shapes.splice(b, 1), this.shapeOffsets.splice(b, 1), this.shapeAngles.splice(b, 1), this.aabbNeedsUpdate = !0, !0) : !1
                }, c.prototype.updateMassProperties = function() {
                    if (this.type === c.STATIC || this.type === c.KINEMATIC) this.mass = Number.MAX_VALUE, this.invMass = 0, this.inertia = Number.MAX_VALUE, this.invInertia = 0;
                    else {
                        var a = this.shapes,
                            b = a.length,
                            e = this.mass / b,
                            f = 0;
                        if (this.fixedRotation) this.inertia = Number.MAX_VALUE, this.invInertia = 0;
                        else {
                            for (var g = 0; b > g; g++) {
                                var h = a[g],
                                    i = d.squaredLength(this.shapeOffsets[g]),
                                    j = h.computeMomentOfInertia(e);
                                f += j + e * i
                            }
                            this.inertia = f, this.invInertia = f > 0 ? 1 / f : 0
                        }
                        this.invMass = 1 / this.mass
                    }
                };
                var k = d.create();
                c.prototype.applyForce = function(a, b) {
                    var c = k;
                    d.sub(c, b, this.position), d.add(this.force, this.force, a);
                    var e = d.crossLength(c, a);
                    this.angularForce += e
                }, c.prototype.toLocalFrame = function(a, b) {
                    d.toLocalFrame(a, b, this.position, this.angle)
                }, c.prototype.toWorldFrame = function(a, b) {
                    d.toGlobalFrame(a, b, this.position, this.angle)
                }, c.prototype.fromPolygon = function(a, b) {
                    b = b || {};
                    for (var c = this.shapes.length; c >= 0; --c) this.removeShape(this.shapes[c]);
                    var g = new e.Polygon;
                    if (g.vertices = a, g.makeCCW(), "number" == typeof b.removeCollinearPoints && g.removeCollinearPoints(b.removeCollinearPoints), "undefined" == typeof b.skipSimpleCheck && !g.isSimple()) return !1;
                    this.concavePath = g.vertices.slice(0);
                    for (var c = 0; c < this.concavePath.length; c++) {
                        var h = [0, 0];
                        d.copy(h, this.concavePath[c]), this.concavePath[c] = h
                    }
                    var i;
                    i = b.optimalDecomp ? g.decomp() : g.quickDecomp();
                    for (var j = d.create(), c = 0; c !== i.length; c++) {
                        for (var k = new f(i[c].vertices), l = 0; l !== k.vertices.length; l++) {
                            var h = k.vertices[l];
                            d.sub(h, h, k.centerOfMass)
                        }
                        d.scale(j, k.centerOfMass, 1), k.updateTriangles(), k.updateCenterOfMass(), k.updateBoundingRadius(), this.addShape(k, j)
                    }
                    return this.adjustCenterOfMass(), this.aabbNeedsUpdate = !0, !0
                };
                var l = (d.fromValues(0, 0), d.fromValues(0, 0)),
                    m = d.fromValues(0, 0),
                    n = d.fromValues(0, 0);
                c.prototype.adjustCenterOfMass = function() {
                    var a = l,
                        b = m,
                        c = n,
                        e = 0;
                    d.set(b, 0, 0);
                    for (var f = 0; f !== this.shapes.length; f++) {
                        var g = this.shapes[f],
                            h = this.shapeOffsets[f];
                        d.scale(a, h, g.area), d.add(b, b, a), e += g.area
                    }
                    d.scale(c, b, 1 / e);
                    for (var f = 0; f !== this.shapes.length; f++) {
                        var g = this.shapes[f],
                            h = this.shapeOffsets[f];
                        h || (h = this.shapeOffsets[f] = d.create()), d.sub(h, h, c)
                    }
                    d.add(this.position, this.position, c);
                    for (var f = 0; this.concavePath && f < this.concavePath.length; f++) d.sub(this.concavePath[f], this.concavePath[f], c);
                    this.updateMassProperties(), this.updateBoundingRadius()
                }, c.prototype.setZeroForce = function() {
                    d.set(this.force, 0, 0), this.angularForce = 0
                }, c.prototype.resetConstraintVelocity = function() {
                    var a = this,
                        b = a.vlambda;
                    d.set(b, 0, 0), a.wlambda = 0
                }, c.prototype.addConstraintVelocity = function() {
                    var a = this,
                        b = a.velocity;
                    d.add(b, b, a.vlambda), a.angularVelocity += a.wlambda
                }, c.prototype.applyDamping = function(a) {
                    if (this.type === c.DYNAMIC) {
                        a !== this.lastDampingTimeStep && (this.lastDampingScale = Math.pow(1 - this.damping, a), this.lastAngularDampingScale = Math.pow(1 - this.angularDamping, a), this.lastDampingTimeStep = a);
                        var b = this.velocity;
                        d.scale(b, b, this.lastDampingScale), this.angularVelocity *= this.lastAngularDampingScale
                    }
                }, c.prototype.wakeUp = function() {
                    var a = this.sleepState;
                    this.sleepState = c.AWAKE, this.idleTime = 0, a !== c.AWAKE && this.emit(c.wakeUpEvent)
                }, c.prototype.sleep = function() {
                    this.sleepState = c.SLEEPING, this.angularVelocity = 0, this.angularForce = 0, d.set(this.velocity, 0, 0), d.set(this.force, 0, 0), this.emit(c.sleepEvent)
                }, c.prototype.sleepTick = function(a, b, e) {
                    if (this.allowSleep && this.type !== c.SLEEPING) {
                        this.wantsToSleep = !1;
                        var f = (this.sleepState, d.squaredLength(this.velocity) + Math.pow(this.angularVelocity, 2)),
                            g = Math.pow(this.sleepSpeedLimit, 2);
                        f >= g ? (this.idleTime = 0, this.sleepState = c.AWAKE) : (this.idleTime += e, this.sleepState = c.SLEEPY), this.idleTime > this.sleepTimeLimit && (b ? this.wantsToSleep = !0 : this.sleep())
                    }
                }, c.prototype.getVelocityFromPosition = function(a, b) {
                    return a = a || d.create(), d.sub(a, this.position, this.previousPosition), d.scale(a, a, 1 / b), a
                }, c.prototype.getAngularVelocityFromPosition = function(a) {
                    return (this.angle - this.previousAngle) / a
                }, c.prototype.overlaps = function(a) {
                    return this.world.overlapKeeper.bodiesAreOverlapping(this, a)
                }, c.sleepyEvent = {
                    type: "sleepy"
                }, c.sleepEvent = {
                    type: "sleep"
                }, c.wakeUpEvent = {
                    type: "wakeup"
                }, c.DYNAMIC = 1, c.STATIC = 2, c.KINEMATIC = 4, c.AWAKE = 0, c.SLEEPY = 1, c.SLEEPING = 2
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/objects/Body.js", "/objects")
        }, {
            "../collision/AABB": 11,
            "../events/EventEmitter": 29,
            "../math/vec2": 33,
            "../shapes/Convex": 41,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1,
            "poly-decomp": 9
        }],
        35: [function(a, b) {
            (function() {
                function c(a, b, c) {
                    c = c || {}, e.call(this, a, b, c), this.localAnchorA = d.fromValues(0, 0), this.localAnchorB = d.fromValues(0, 0), c.localAnchorA && d.copy(this.localAnchorA, c.localAnchorA), c.localAnchorB && d.copy(this.localAnchorB, c.localAnchorB), c.worldAnchorA && this.setWorldAnchorA(c.worldAnchorA), c.worldAnchorB && this.setWorldAnchorB(c.worldAnchorB);
                    var f = d.create(),
                        g = d.create();
                    this.getWorldAnchorA(f), this.getWorldAnchorB(g);
                    var h = d.distance(f, g);
                    this.restLength = "number" == typeof c.restLength ? c.restLength : h
                } {
                    var d = a("../math/vec2"),
                        e = a("./Spring");
                    a("../utils/Utils")
                }
                b.exports = c, c.prototype = new e, c.prototype.setWorldAnchorA = function(a) {
                    this.bodyA.toLocalFrame(this.localAnchorA, a)
                }, c.prototype.setWorldAnchorB = function(a) {
                    this.bodyB.toLocalFrame(this.localAnchorB, a)
                }, c.prototype.getWorldAnchorA = function(a) {
                    this.bodyA.toWorldFrame(a, this.localAnchorA)
                }, c.prototype.getWorldAnchorB = function(a) {
                    this.bodyB.toWorldFrame(a, this.localAnchorB)
                };
                var f = d.create(),
                    g = d.create(),
                    h = d.create(),
                    i = d.create(),
                    j = d.create(),
                    k = d.create(),
                    l = d.create(),
                    m = d.create(),
                    n = d.create();
                c.prototype.applyForce = function() {
                    var a = this.stiffness,
                        b = this.damping,
                        c = this.restLength,
                        e = this.bodyA,
                        o = this.bodyB,
                        p = f,
                        q = g,
                        r = h,
                        s = i,
                        t = n,
                        u = j,
                        v = k,
                        w = l,
                        x = m;
                    this.getWorldAnchorA(u), this.getWorldAnchorB(v), d.sub(w, u, e.position), d.sub(x, v, o.position), d.sub(p, v, u);
                    var y = d.len(p);
                    d.normalize(q, p), d.sub(r, o.velocity, e.velocity), d.crossZV(t, o.angularVelocity, x), d.add(r, r, t), d.crossZV(t, e.angularVelocity, w), d.sub(r, r, t), d.scale(s, q, -a * (y - c) - b * d.dot(r, q)), d.sub(e.force, e.force, s), d.add(o.force, o.force, s);
                    var z = d.crossLength(w, s),
                        A = d.crossLength(x, s);
                    e.angularForce -= z, o.angularForce += A
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/objects/LinearSpring.js", "/objects")
        }, {
            "../math/vec2": 33,
            "../utils/Utils": 52,
            "./Spring": 37,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        36: [function(a, b) {
            (function() {
                function c(a, b, c) {
                    c = c || {}, d.call(this, a, b, c), this.restAngle = "number" == typeof c.restAngle ? c.restAngle : b.angle - a.angle
                }
                var d = (a("../math/vec2"), a("./Spring"));
                b.exports = c, c.prototype = new d, c.prototype.applyForce = function() {
                    var a = this.stiffness,
                        b = this.damping,
                        c = this.restAngle,
                        d = this.bodyA,
                        e = this.bodyB,
                        f = e.angle - d.angle,
                        g = e.angularVelocity - d.angularVelocity,
                        h = -a * (f - c) - b * g * 0;
                    d.angularForce -= h, e.angularForce += h
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/objects/RotationalSpring.js", "/objects")
        }, {
            "../math/vec2": 33,
            "./Spring": 37,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        37: [function(a, b) {
            (function() {
                function c(a, b, c) {
                    c = d.defaults(c, {
                        stiffness: 100,
                        damping: 1
                    }), this.stiffness = c.stiffness, this.damping = c.damping, this.bodyA = a, this.bodyB = b
                }
                var d = (a("../math/vec2"), a("../utils/Utils"));
                b.exports = c, c.prototype.applyForce = function() {}
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/objects/Spring.js", "/objects")
        }, {
            "../math/vec2": 33,
            "../utils/Utils": 52,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        38: [function(a, b) {
            (function() {
                b.exports = {
                    AABB: a("./collision/AABB"),
                    AngleLockEquation: a("./equations/AngleLockEquation"),
                    Body: a("./objects/Body"),
                    Broadphase: a("./collision/Broadphase"),
                    Capsule: a("./shapes/Capsule"),
                    Circle: a("./shapes/Circle"),
                    Constraint: a("./constraints/Constraint"),
                    ContactEquation: a("./equations/ContactEquation"),
                    ContactMaterial: a("./material/ContactMaterial"),
                    Convex: a("./shapes/Convex"),
                    DistanceConstraint: a("./constraints/DistanceConstraint"),
                    Equation: a("./equations/Equation"),
                    EventEmitter: a("./events/EventEmitter"),
                    FrictionEquation: a("./equations/FrictionEquation"),
                    GearConstraint: a("./constraints/GearConstraint"),
                    GridBroadphase: a("./collision/GridBroadphase"),
                    GSSolver: a("./solver/GSSolver"),
                    Heightfield: a("./shapes/Heightfield"),
                    Line: a("./shapes/Line"),
                    LockConstraint: a("./constraints/LockConstraint"),
                    Material: a("./material/Material"),
                    Narrowphase: a("./collision/Narrowphase"),
                    NaiveBroadphase: a("./collision/NaiveBroadphase"),
                    Particle: a("./shapes/Particle"),
                    Plane: a("./shapes/Plane"),
                    RevoluteConstraint: a("./constraints/RevoluteConstraint"),
                    PrismaticConstraint: a("./constraints/PrismaticConstraint"),
                    Rectangle: a("./shapes/Rectangle"),
                    RotationalVelocityEquation: a("./equations/RotationalVelocityEquation"),
                    SAPBroadphase: a("./collision/SAPBroadphase"),
                    Shape: a("./shapes/Shape"),
                    Solver: a("./solver/Solver"),
                    Spring: a("./objects/Spring"),
                    LinearSpring: a("./objects/LinearSpring"),
                    RotationalSpring: a("./objects/RotationalSpring"),
                    Utils: a("./utils/Utils"),
                    World: a("./world/World"),
                    vec2: a("./math/vec2"),
                    version: a("../package.json").version
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/p2.js", "/")
        }, {
            "../package.json": 10,
            "./collision/AABB": 11,
            "./collision/Broadphase": 12,
            "./collision/GridBroadphase": 13,
            "./collision/NaiveBroadphase": 14,
            "./collision/Narrowphase": 15,
            "./collision/SAPBroadphase": 16,
            "./constraints/Constraint": 17,
            "./constraints/DistanceConstraint": 18,
            "./constraints/GearConstraint": 19,
            "./constraints/LockConstraint": 20,
            "./constraints/PrismaticConstraint": 21,
            "./constraints/RevoluteConstraint": 22,
            "./equations/AngleLockEquation": 23,
            "./equations/ContactEquation": 24,
            "./equations/Equation": 25,
            "./equations/FrictionEquation": 26,
            "./equations/RotationalVelocityEquation": 28,
            "./events/EventEmitter": 29,
            "./material/ContactMaterial": 30,
            "./material/Material": 31,
            "./math/vec2": 33,
            "./objects/Body": 34,
            "./objects/LinearSpring": 35,
            "./objects/RotationalSpring": 36,
            "./objects/Spring": 37,
            "./shapes/Capsule": 39,
            "./shapes/Circle": 40,
            "./shapes/Convex": 41,
            "./shapes/Heightfield": 42,
            "./shapes/Line": 43,
            "./shapes/Particle": 44,
            "./shapes/Plane": 45,
            "./shapes/Rectangle": 46,
            "./shapes/Shape": 47,
            "./solver/GSSolver": 48,
            "./solver/Solver": 49,
            "./utils/Utils": 52,
            "./world/World": 56,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        39: [function(a, b) {
            (function() {
                function c(a, b) {
                    this.length = a || 1, this.radius = b || 1, d.call(this, d.CAPSULE)
                }
                var d = a("./Shape"),
                    e = a("../math/vec2");
                b.exports = c, c.prototype = new d, c.prototype.computeMomentOfInertia = function(a) {
                    var b = this.radius,
                        c = this.length + b,
                        d = 2 * b;
                    return a * (d * d + c * c) / 12
                }, c.prototype.updateBoundingRadius = function() {
                    this.boundingRadius = this.radius + this.length / 2
                }, c.prototype.updateArea = function() {
                    this.area = Math.PI * this.radius * this.radius + 2 * this.radius * this.length
                };
                var f = e.create();
                c.prototype.computeAABB = function(a, b, c) {
                    var d = this.radius;
                    e.set(f, this.length / 2, 0), 0 !== c && e.rotate(f, f, c), e.set(a.upperBound, Math.max(f[0] + d, -f[0] + d), Math.max(f[1] + d, -f[1] + d)), e.set(a.lowerBound, Math.min(f[0] - d, -f[0] - d), Math.min(f[1] - d, -f[1] - d)), e.add(a.lowerBound, a.lowerBound, b), e.add(a.upperBound, a.upperBound, b)
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/shapes/Capsule.js", "/shapes")
        }, {
            "../math/vec2": 33,
            "./Shape": 47,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        40: [function(a, b) {
            (function() {
                function c(a) {
                    this.radius = a || 1, d.call(this, d.CIRCLE)
                }
                var d = a("./Shape"),
                    e = a("../math/vec2");
                b.exports = c, c.prototype = new d, c.prototype.computeMomentOfInertia = function(a) {
                    var b = this.radius;
                    return a * b * b / 2
                }, c.prototype.updateBoundingRadius = function() {
                    this.boundingRadius = this.radius
                }, c.prototype.updateArea = function() {
                    this.area = Math.PI * this.radius * this.radius
                }, c.prototype.computeAABB = function(a, b) {
                    var c = this.radius;
                    e.set(a.upperBound, c, c), e.set(a.lowerBound, -c, -c), b && (e.add(a.lowerBound, a.lowerBound, b), e.add(a.upperBound, a.upperBound, b))
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/shapes/Circle.js", "/shapes")
        }, {
            "../math/vec2": 33,
            "./Shape": 47,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        41: [function(a, b) {
            (function() {
                function c(a, b) {
                    this.vertices = [], this.axes = [];
                    for (var c = 0; c < a.length; c++) {
                        var f = e.create();
                        e.copy(f, a[c]), this.vertices.push(f)
                    }
                    if (b)
                        for (var c = 0; c < b.length; c++) {
                            var g = e.create();
                            e.copy(g, b[c]), this.axes.push(g)
                        } else
                            for (var c = 0; c < a.length; c++) {
                                var h = a[c],
                                    i = a[(c + 1) % a.length],
                                    j = e.create();
                                e.sub(j, i, h), e.rotate90cw(j, j), e.normalize(j, j), this.axes.push(j)
                            }
                    if (this.centerOfMass = e.fromValues(0, 0), this.triangles = [], this.vertices.length && (this.updateTriangles(), this.updateCenterOfMass()), this.boundingRadius = 0, d.call(this, d.CONVEX), this.updateBoundingRadius(), this.updateArea(), this.area < 0) throw new Error("Convex vertices must be given in conter-clockwise winding.")
                } {
                    var d = a("./Shape"),
                        e = a("../math/vec2"),
                        f = a("../math/polyk");
                    a("poly-decomp")
                }
                b.exports = c, c.prototype = new d;
                var g = e.create(),
                    h = e.create();
                c.prototype.projectOntoLocalAxis = function(a, b) {
                    for (var c, d, f = null, h = null, a = g, i = 0; i < this.vertices.length; i++) c = this.vertices[i], d = e.dot(c, a), (null === f || d > f) && (f = d), (null === h || h > d) && (h = d);
                    if (h > f) {
                        var j = h;
                        h = f, f = j
                    }
                    e.set(b, h, f)
                }, c.prototype.projectOntoWorldAxis = function(a, b, c, d) {
                    var f = h;
                    this.projectOntoLocalAxis(a, d), 0 !== c ? e.rotate(f, a, c) : f = a;
                    var g = e.dot(b, f);
                    e.set(d, d[0] + g, d[1] + g)
                }, c.prototype.updateTriangles = function() {
                    this.triangles.length = 0;
                    for (var a = [], b = 0; b < this.vertices.length; b++) {
                        var c = this.vertices[b];
                        a.push(c[0], c[1])
                    }
                    for (var d = f.Triangulate(a), b = 0; b < d.length; b += 3) {
                        var e = d[b],
                            g = d[b + 1],
                            h = d[b + 2];
                        this.triangles.push([e, g, h])
                    }
                }; {
                    var i = e.create(),
                        j = e.create(),
                        k = e.create(),
                        l = e.create(),
                        m = e.create();
                    e.create(), e.create(), e.create(), e.create()
                }
                c.prototype.updateCenterOfMass = function() {
                    var a = this.triangles,
                        b = this.vertices,
                        d = this.centerOfMass,
                        f = i,
                        g = k,
                        h = l,
                        n = m,
                        o = j;
                    e.set(d, 0, 0);
                    for (var p = 0, q = 0; q !== a.length; q++) {
                        var r = a[q],
                            g = b[r[0]],
                            h = b[r[1]],
                            n = b[r[2]];
                        e.centroid(f, g, h, n);
                        var s = c.triangleArea(g, h, n);
                        p += s, e.scale(o, f, s), e.add(d, d, o)
                    }
                    e.scale(d, d, 1 / p)
                }, c.prototype.computeMomentOfInertia = function(a) {
                    for (var b = 0, c = 0, d = this.vertices.length, f = d - 1, g = 0; d > g; f = g, g++) {
                        var h = this.vertices[f],
                            i = this.vertices[g],
                            j = Math.abs(e.crossLength(h, i)),
                            k = e.dot(i, i) + e.dot(i, h) + e.dot(h, h);
                        b += j * k, c += j
                    }
                    return a / 6 * (b / c)
                }, c.prototype.updateBoundingRadius = function() {
                    for (var a = this.vertices, b = 0, c = 0; c !== a.length; c++) {
                        var d = e.squaredLength(a[c]);
                        d > b && (b = d)
                    }
                    this.boundingRadius = Math.sqrt(b)
                }, c.triangleArea = function(a, b, c) {
                    return .5 * ((b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1]))
                }, c.prototype.updateArea = function() {
                    this.updateTriangles(), this.area = 0;
                    for (var a = this.triangles, b = this.vertices, d = 0; d !== a.length; d++) {
                        var e = a[d],
                            f = b[e[0]],
                            g = b[e[1]],
                            h = b[e[2]],
                            i = c.triangleArea(f, g, h);
                        this.area += i
                    }
                }, c.prototype.computeAABB = function(a, b, c) {
                    a.setFromPoints(this.vertices, b, c, 0)
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/shapes/Convex.js", "/shapes")
        }, {
            "../math/polyk": 32,
            "../math/vec2": 33,
            "./Shape": 47,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1,
            "poly-decomp": 9
        }],
        42: [function(a, b) {
            (function() {
                function c(a, b) {
                    if (b = e.defaults(b, {
                            maxValue: null,
                            minValue: null,
                            elementWidth: .1
                        }), null === b.minValue || null === b.maxValue) {
                        b.maxValue = a[0], b.minValue = a[0];
                        for (var c = 0; c !== a.length; c++) {
                            var f = a[c];
                            f > b.maxValue && (b.maxValue = f), f < b.minValue && (b.minValue = f)
                        }
                    }
                    this.data = a, this.maxValue = b.maxValue, this.minValue = b.minValue, this.elementWidth = b.elementWidth, d.call(this, d.HEIGHTFIELD)
                }
                var d = a("./Shape"),
                    e = (a("../math/vec2"), a("../utils/Utils"));
                b.exports = c, c.prototype = new d, c.prototype.computeMomentOfInertia = function() {
                    return Number.MAX_VALUE
                }, c.prototype.updateBoundingRadius = function() {
                    this.boundingRadius = Number.MAX_VALUE
                }, c.prototype.updateArea = function() {
                    for (var a = this.data, b = 0, c = 0; c < a.length - 1; c++) b += (a[c] + a[c + 1]) / 2 * this.elementWidth;
                    this.area = b
                }, c.prototype.computeAABB = function(a, b) {
                    a.upperBound[0] = this.elementWidth * this.data.length + b[0], a.upperBound[1] = this.maxValue + b[1], a.lowerBound[0] = b[0], a.lowerBound[1] = -Number.MAX_VALUE
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/shapes/Heightfield.js", "/shapes")
        }, {
            "../math/vec2": 33,
            "../utils/Utils": 52,
            "./Shape": 47,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        43: [function(a, b) {
            (function() {
                function c(a) {
                    this.length = a || 1, d.call(this, d.LINE)
                }
                var d = a("./Shape"),
                    e = a("../math/vec2");
                b.exports = c, c.prototype = new d, c.prototype.computeMomentOfInertia = function(a) {
                    return a * Math.pow(this.length, 2) / 12
                }, c.prototype.updateBoundingRadius = function() {
                    this.boundingRadius = this.length / 2
                };
                var f = [e.create(), e.create()];
                c.prototype.computeAABB = function(a, b, c) {
                    var d = this.length / 2;
                    e.set(f[0], -d, 0), e.set(f[1], d, 0), a.setFromPoints(f, b, c, 0)
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/shapes/Line.js", "/shapes")
        }, {
            "../math/vec2": 33,
            "./Shape": 47,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        44: [function(a, b) {
            (function() {
                function c() {
                    d.call(this, d.PARTICLE)
                }
                var d = a("./Shape"),
                    e = a("../math/vec2");
                b.exports = c, c.prototype = new d, c.prototype.computeMomentOfInertia = function() {
                    return 0
                }, c.prototype.updateBoundingRadius = function() {
                    this.boundingRadius = 0
                }, c.prototype.computeAABB = function(a, b) {
                    e.copy(a.lowerBound, b), e.copy(a.upperBound, b)
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/shapes/Particle.js", "/shapes")
        }, {
            "../math/vec2": 33,
            "./Shape": 47,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        45: [function(a, b) {
            (function() {
                function c() {
                    d.call(this, d.PLANE)
                } {
                    var d = a("./Shape"),
                        e = a("../math/vec2");
                    a("../utils/Utils")
                }
                b.exports = c, c.prototype = new d, c.prototype.computeMomentOfInertia = function() {
                    return 0
                }, c.prototype.updateBoundingRadius = function() {
                    this.boundingRadius = Number.MAX_VALUE
                }, c.prototype.computeAABB = function(a, b, c) {
                    var d = 0,
                        f = e.set;
                    "number" == typeof c && (d = c % (2 * Math.PI)), 0 === d ? (f(a.lowerBound, -Number.MAX_VALUE, -Number.MAX_VALUE), f(a.upperBound, Number.MAX_VALUE, 0)) : d === Math.PI / 2 ? (f(a.lowerBound, 0, -Number.MAX_VALUE), f(a.upperBound, Number.MAX_VALUE, Number.MAX_VALUE)) : d === Math.PI ? (f(a.lowerBound, -Number.MAX_VALUE, 0), f(a.upperBound, Number.MAX_VALUE, Number.MAX_VALUE)) : d === 3 * Math.PI / 2 ? (f(a.lowerBound, -Number.MAX_VALUE, -Number.MAX_VALUE), f(a.upperBound, 0, Number.MAX_VALUE)) : (f(a.lowerBound, -Number.MAX_VALUE, -Number.MAX_VALUE), f(a.upperBound, Number.MAX_VALUE, Number.MAX_VALUE)), e.add(a.lowerBound, a.lowerBound, b), e.add(a.upperBound, a.upperBound, b)
                }, c.prototype.updateArea = function() {
                    this.area = Number.MAX_VALUE
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/shapes/Plane.js", "/shapes")
        }, {
            "../math/vec2": 33,
            "../utils/Utils": 52,
            "./Shape": 47,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        46: [function(a, b) {
            (function() {
                function c(a, b) {
                    this.width = a || 1, this.height = b || 1;
                    var c = [d.fromValues(-a / 2, -b / 2), d.fromValues(a / 2, -b / 2), d.fromValues(a / 2, b / 2), d.fromValues(-a / 2, b / 2)],
                        g = [d.fromValues(1, 0), d.fromValues(0, 1)];
                    f.call(this, c, g), this.type = e.RECTANGLE
                }
                var d = a("../math/vec2"),
                    e = a("./Shape"),
                    f = a("./Convex");
                b.exports = c, c.prototype = new f([]), c.prototype.computeMomentOfInertia = function(a) {
                    var b = this.width,
                        c = this.height;
                    return a * (c * c + b * b) / 12
                }, c.prototype.updateBoundingRadius = function() {
                    var a = this.width,
                        b = this.height;
                    this.boundingRadius = Math.sqrt(a * a + b * b) / 2
                };
                d.create(), d.create(), d.create(), d.create();
                c.prototype.computeAABB = function(a, b, c) {
                    a.setFromPoints(this.vertices, b, c, 0)
                }, c.prototype.updateArea = function() {
                    this.area = this.width * this.height
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/shapes/Rectangle.js", "/shapes")
        }, {
            "../math/vec2": 33,
            "./Convex": 41,
            "./Shape": 47,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        47: [function(a, b) {
            (function() {
                function a(b) {
                    this.type = b, this.id = a.idCounter++, this.boundingRadius = 0, this.collisionGroup = 1, this.collisionMask = 1, b && this.updateBoundingRadius(), this.material = null, this.area = 0, this.sensor = !1, this.updateArea()
                }
                b.exports = a, a.idCounter = 0, a.CIRCLE = 1, a.PARTICLE = 2, a.PLANE = 4, a.CONVEX = 8, a.LINE = 16, a.RECTANGLE = 32, a.CAPSULE = 64, a.HEIGHTFIELD = 128, a.prototype.computeMomentOfInertia = function() {
                    throw new Error("Shape.computeMomentOfInertia is not implemented in this Shape...")
                }, a.prototype.updateBoundingRadius = function() {
                    throw new Error("Shape.updateBoundingRadius is not implemented in this Shape...")
                }, a.prototype.updateArea = function() {}, a.prototype.computeAABB = function() {}
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/shapes/Shape.js", "/shapes")
        }, {
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        48: [function(a, b) {
            (function() {
                function c(a) {
                    f.call(this, a, f.GS), a = a || {}, this.iterations = a.iterations || 10, this.tolerance = a.tolerance || 1e-10, this.arrayStep = 30, this.lambda = new g.ARRAY_TYPE(this.arrayStep), this.Bs = new g.ARRAY_TYPE(this.arrayStep), this.invCs = new g.ARRAY_TYPE(this.arrayStep), this.useZeroRHS = !1, this.frictionIterations = 0, this.usedIterations = 0
                }

                function d(a) {
                    for (var b = a.length; b--;) a[b] = 0
                }
                var e = a("../math/vec2"),
                    f = a("./Solver"),
                    g = a("../utils/Utils"),
                    h = a("../equations/FrictionEquation");
                b.exports = c, c.prototype = new f, c.prototype.solve = function(a, b) {
                    this.sortEquations();
                    var f = 0,
                        i = this.iterations,
                        j = this.frictionIterations,
                        k = this.equations,
                        l = k.length,
                        m = Math.pow(this.tolerance * l, 2),
                        n = b.bodies,
                        o = b.bodies.length,
                        p = (e.add, e.set, this.useZeroRHS),
                        q = this.lambda;
                    if (this.usedIterations = 0, l)
                        for (var r = 0; r !== o; r++) {
                            var s = n[r];
                            s.updateSolveMassProperties()
                        }
                    q.length < l && (q = this.lambda = new g.ARRAY_TYPE(l + this.arrayStep), this.Bs = new g.ARRAY_TYPE(l + this.arrayStep), this.invCs = new g.ARRAY_TYPE(l + this.arrayStep)), d(q);
                    for (var t = this.invCs, u = this.Bs, q = this.lambda, r = 0; r !== k.length; r++) {
                        var v = k[r];
                        (v.timeStep !== a || v.needsUpdate) && (v.timeStep = a, v.update()), u[r] = v.computeB(v.a, v.b, a), t[r] = v.computeInvC(v.epsilon)
                    }
                    var v, w, r, x;
                    if (0 !== l) {
                        for (r = 0; r !== o; r++) {
                            var s = n[r];
                            s.resetConstraintVelocity()
                        }
                        if (j) {
                            for (f = 0; f !== j; f++) {
                                for (w = 0, x = 0; x !== l; x++) {
                                    v = k[x];
                                    var y = c.iterateEquation(x, v, v.epsilon, u, t, q, p, a, f);
                                    w += Math.abs(y)
                                }
                                if (this.usedIterations++, m >= w * w) break
                            }
                            for (c.updateMultipliers(k, q, 1 / a), x = 0; x !== l; x++) {
                                var z = k[x];
                                if (z instanceof h) {
                                    for (var A = 0, B = 0; B !== z.contactEquations.length; B++) A += z.contactEquations[B].multiplier;
                                    A *= z.frictionCoefficient / z.contactEquations.length, z.maxForce = A, z.minForce = -A
                                }
                            }
                        }
                        for (f = 0; f !== i; f++) {
                            for (w = 0, x = 0; x !== l; x++) {
                                v = k[x];
                                var y = c.iterateEquation(x, v, v.epsilon, u, t, q, p, a, f);
                                w += Math.abs(y)
                            }
                            if (this.usedIterations++, m >= w * w) break
                        }
                        for (r = 0; r !== o; r++) n[r].addConstraintVelocity();
                        c.updateMultipliers(k, q, 1 / a)
                    }
                }, c.updateMultipliers = function(a, b, c) {
                    for (var d = a.length; d--;) a[d].multiplier = b[d] * c
                }, c.iterateEquation = function(a, b, c, d, e, f, g, h) {
                    var i = d[a],
                        j = e[a],
                        k = f[a],
                        l = b.computeGWlambda(),
                        m = b.maxForce,
                        n = b.minForce;
                    g && (i = 0);
                    var o = j * (i - l - c * k),
                        p = k + o;
                    return n * h > p ? o = n * h - k : p > m * h && (o = m * h - k), f[a] += o, b.addToWlambda(o), o
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/solver/GSSolver.js", "/solver")
        }, {
            "../equations/FrictionEquation": 26,
            "../math/vec2": 33,
            "../utils/Utils": 52,
            "./Solver": 49,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        49: [function(a, b) {
            (function() {
                function c(a, b) {
                    a = a || {}, d.call(this), this.type = b, this.equations = [], this.equationSortFunction = a.equationSortFunction || !1
                }
                var d = (a("../utils/Utils"), a("../events/EventEmitter"));
                b.exports = c, c.prototype = new d, c.prototype.solve = function() {
                    throw new Error("Solver.solve should be implemented by subclasses!")
                };
                var e = {
                    bodies: []
                };
                c.prototype.solveIsland = function(a, b) {
                    this.removeAllEquations(), b.equations.length && (this.addEquations(b.equations), e.bodies.length = 0, b.getBodies(e.bodies), e.bodies.length && this.solve(a, e))
                }, c.prototype.sortEquations = function() {
                    this.equationSortFunction && this.equations.sort(this.equationSortFunction)
                }, c.prototype.addEquation = function(a) {
                    a.enabled && this.equations.push(a)
                }, c.prototype.addEquations = function(a) {
                    for (var b = 0, c = a.length; b !== c; b++) {
                        var d = a[b];
                        d.enabled && this.equations.push(d)
                    }
                }, c.prototype.removeEquation = function(a) {
                    var b = this.equations.indexOf(a); - 1 !== b && this.equations.splice(b, 1)
                }, c.prototype.removeAllEquations = function() {
                    this.equations.length = 0
                }, c.GS = 1, c.ISLAND = 2
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/solver/Solver.js", "/solver")
        }, {
            "../events/EventEmitter": 29,
            "../utils/Utils": 52,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        50: [function(a, b) {
            (function() {
                function c() {
                    this.overlappingShapesLastState = new e, this.overlappingShapesCurrentState = new e, this.recordPool = [], this.tmpDict = new e, this.tmpArray1 = []
                }

                function d(a, b, c, d) {
                    this.shapeA = b, this.shapeB = d, this.bodyA = a, this.bodyB = c
                } {
                    var e = a("./TupleDictionary");
                    a("./Utils")
                }
                b.exports = c, c.prototype.tick = function() {
                    for (var a = this.overlappingShapesLastState, b = this.overlappingShapesCurrentState, c = a.keys.length; c--;) {
                        var d = a.keys[c],
                            e = a.getByKey(d),
                            f = b.getByKey(d);
                        e && !f && this.recordPool.push(e)
                    }
                    a.reset(), a.copy(b), b.reset()
                }, c.prototype.setOverlapping = function(a, b, c, e) {
                    var f = (this.overlappingShapesLastState, this.overlappingShapesCurrentState);
                    if (!f.get(b.id, e.id)) {
                        var g;
                        this.recordPool.length ? (g = this.recordPool.pop(), g.set(a, b, c, e)) : g = new d(a, b, c, e), f.set(b.id, e.id, g)
                    }
                }, c.prototype.getNewOverlaps = function(a) {
                    return this.getDiff(this.overlappingShapesLastState, this.overlappingShapesCurrentState, a)
                }, c.prototype.getEndOverlaps = function(a) {
                    return this.getDiff(this.overlappingShapesCurrentState, this.overlappingShapesLastState, a)
                }, c.prototype.bodiesAreOverlapping = function(a, b) {
                    for (var c = this.overlappingShapesCurrentState, d = c.keys.length; d--;) {
                        var e = c.keys[d],
                            f = c.data[e];
                        if (f.bodyA === a && f.bodyB === b || f.bodyA === b && f.bodyB === a) return !0
                    }
                    return !1
                }, c.prototype.getDiff = function(a, b, c) {
                    var c = c || [],
                        d = a,
                        e = b;
                    c.length = 0;
                    for (var f = e.keys.length; f--;) {
                        var g = e.keys[f],
                            h = e.data[g];
                        if (!h) throw new Error("Key " + g + " had no data!");
                        var i = d.data[g];
                        i || c.push(h)
                    }
                    return c
                }, c.prototype.isNewOverlap = function(a, b) {
                    var c = 0 | a.id,
                        d = 0 | b.id,
                        e = this.overlappingShapesLastState,
                        f = this.overlappingShapesCurrentState;
                    return !e.get(c, d) && !!f.get(c, d)
                }, c.prototype.getNewBodyOverlaps = function(a) {
                    this.tmpArray1.length = 0;
                    var b = this.getNewOverlaps(this.tmpArray1);
                    return this.getBodyDiff(b, a)
                }, c.prototype.getEndBodyOverlaps = function(a) {
                    this.tmpArray1.length = 0;
                    var b = this.getEndOverlaps(this.tmpArray1);
                    return this.getBodyDiff(b, a)
                }, c.prototype.getBodyDiff = function(a, b) {
                    b = b || [];
                    for (var c = this.tmpDict, d = a.length; d--;) {
                        var e = a[d];
                        c.set(0 | e.bodyA.id, 0 | e.bodyB.id, e)
                    }
                    for (d = c.keys.length; d--;) {
                        var e = c.getByKey(c.keys[d]);
                        e && b.push(e.bodyA, e.bodyB)
                    }
                    return c.reset(), b
                }, d.prototype.set = function(a, b, c, e) {
                    d.call(this, a, b, c, e)
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/utils/OverlapKeeper.js", "/utils")
        }, {
            "./TupleDictionary": 51,
            "./Utils": 52,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        51: [function(a, b) {
            (function() {
                function c() {
                    this.data = {}, this.keys = []
                }
                var d = a("./Utils");
                b.exports = c, c.prototype.getKey = function(a, b) {
                    return a = 0 | a, b = 0 | b, (0 | a) === (0 | b) ? -1 : 0 | ((0 | a) > (0 | b) ? a << 16 | 65535 & b : b << 16 | 65535 & a)
                }, c.prototype.getByKey = function(a) {
                    return a = 0 | a, this.data[a]
                }, c.prototype.get = function(a, b) {
                    return this.data[this.getKey(a, b)]
                }, c.prototype.set = function(a, b, c) {
                    if (!c) throw new Error("No data!");
                    var d = this.getKey(a, b);
                    return this.data[d] || this.keys.push(d), this.data[d] = c, d
                }, c.prototype.reset = function() {
                    for (var a = this.data, b = this.keys, c = b.length; c--;) delete a[b[c]];
                    b.length = 0
                }, c.prototype.copy = function(a) {
                    this.reset(), d.appendArray(this.keys, a.keys);
                    for (var b = a.keys.length; b--;) {
                        var c = a.keys[b];
                        this.data[c] = a.data[c]
                    }
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/utils/TupleDictionary.js", "/utils")
        }, {
            "./Utils": 52,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        52: [function(a, b) {
            (function() {
                function a() {}
                b.exports = a, a.appendArray = function(a, b) {
                    if (b.length < 15e4) a.push.apply(a, b);
                    else
                        for (var c = 0, d = b.length; c !== d; ++c) a.push(b[c])
                }, a.splice = function(a, b, c) {
                    c = c || 1;
                    for (var d = b, e = a.length - c; e > d; d++) a[d] = a[d + c];
                    a.length = e
                }, a.ARRAY_TYPE = "undefined" != typeof P2_ARRAY_TYPE ? P2_ARRAY_TYPE : "undefined" != typeof Float32Array ? Float32Array : Array, a.extend = function(a, b) {
                    for (var c in b) a[c] = b[c]
                }, a.defaults = function(a, b) {
                    a = a || {};
                    for (var c in b) c in a || (a[c] = b[c]);
                    return a
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/utils/Utils.js", "/utils")
        }, {
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        53: [function(a, b) {
            (function() {
                function c() {
                    this.equations = [], this.bodies = []
                }
                var d = a("../objects/Body");
                b.exports = c, c.prototype.reset = function() {
                    this.equations.length = this.bodies.length = 0
                };
                var e = [];
                c.prototype.getBodies = function(a) {
                    var b = a || [],
                        c = this.equations;
                    e.length = 0;
                    for (var d = 0; d !== c.length; d++) {
                        var f = c[d]; - 1 === e.indexOf(f.bodyA.id) && (b.push(f.bodyA), e.push(f.bodyA.id)), -1 === e.indexOf(f.bodyB.id) && (b.push(f.bodyB), e.push(f.bodyB.id))
                    }
                    return b
                }, c.prototype.wantsToSleep = function() {
                    for (var a = 0; a < this.bodies.length; a++) {
                        var b = this.bodies[a];
                        if (b.type === d.DYNAMIC && !b.wantsToSleep) return !1
                    }
                    return !0
                }, c.prototype.sleep = function() {
                    for (var a = 0; a < this.bodies.length; a++) {
                        var b = this.bodies[a];
                        b.sleep()
                    }
                    return !0
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/world/Island.js", "/world")
        }, {
            "../objects/Body": 34,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        54: [function(a, b) {
            (function() {
                function c() {
                    this._nodePool = [], this._islandPool = [], this.equations = [], this.islands = [], this.nodes = [], this.queue = []
                }
                var d = (a("../math/vec2"), a("./Island")),
                    e = a("./IslandNode"),
                    f = a("../objects/Body");
                b.exports = c, c.getUnvisitedNode = function(a) {
                    for (var b = a.length, c = 0; c !== b; c++) {
                        var d = a[c];
                        if (!d.visited && d.body.type === f.DYNAMIC) return d
                    }
                    return !1
                }, c.prototype.visit = function(a, b, c) {
                    b.push(a.body);
                    for (var d = a.equations.length, e = 0; e !== d; e++) {
                        var f = a.equations[e]; - 1 === c.indexOf(f) && c.push(f)
                    }
                }, c.prototype.bfs = function(a, b, d) {
                    var e = this.queue;
                    for (e.length = 0, e.push(a), a.visited = !0, this.visit(a, b, d); e.length;)
                        for (var g, h = e.pop(); g = c.getUnvisitedNode(h.neighbors);) g.visited = !0, this.visit(g, b, d), g.body.type === f.DYNAMIC && e.push(g)
                }, c.prototype.split = function(a) {
                    for (var b = a.bodies, f = this.nodes, g = this.equations; f.length;) this._nodePool.push(f.pop());
                    for (var h = 0; h !== b.length; h++)
                        if (this._nodePool.length) {
                            var i = this._nodePool.pop();
                            i.reset(), i.body = b[h], f.push(i)
                        } else f.push(new e(b[h]));
                    for (var j = 0; j !== g.length; j++) {
                        var k = g[j],
                            h = b.indexOf(k.bodyA),
                            l = b.indexOf(k.bodyB),
                            m = f[h],
                            n = f[l];
                        m.neighbors.push(n), n.neighbors.push(m), m.equations.push(k), n.equations.push(k)
                    }
                    for (var o = this.islands; o.length;) {
                        var p = o.pop();
                        p.reset(), this._islandPool.push(p)
                    }
                    for (var q; q = c.getUnvisitedNode(f);) {
                        var p = this._islandPool.length ? this._islandPool.pop() : new d;
                        this.bfs(q, p.bodies, p.equations), o.push(p)
                    }
                    return o
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/world/IslandManager.js", "/world")
        }, {
            "../math/vec2": 33,
            "../objects/Body": 34,
            "./Island": 53,
            "./IslandNode": 55,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        55: [function(a, b) {
            (function() {
                function a(a) {
                    this.body = a, this.neighbors = [], this.equations = [], this.visited = !1
                }
                b.exports = a, a.prototype.reset = function() {
                    this.equations.length = 0, this.neighbors.length = 0, this.visited = !1, this.body = null
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/world/IslandNode.js", "/world")
        }, {
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }],
        56: [function(a, b) {
            (function() {
                function c(a) {
                    l.apply(this), a = a || {}, this.springs = [], this.bodies = [], this.disabledBodyCollisionPairs = [], this.solver = a.solver || new d, this.narrowphase = new p(this), this.islandManager = new s, this.gravity = f.fromValues(0, -9.78), a.gravity && f.copy(this.gravity, a.gravity), this.frictionGravity = f.length(this.gravity) || 10, this.useWorldGravityAsFrictionGravity = !0, this.useFrictionGravityOnZeroGravity = !0, this.doProfiling = a.doProfiling || !1, this.lastStepTime = 0, this.broadphase = a.broadphase || new e, this.broadphase.setWorld(this), this.constraints = [], this.defaultMaterial = new n, this.defaultContactMaterial = new o(this.defaultMaterial, this.defaultMaterial), this.lastTimeStep = 1 / 60, this.applySpringForces = !0, this.applyDamping = !0, this.applyGravity = !0, this.solveConstraints = !0, this.contactMaterials = [], this.time = 0, this.stepping = !1, this.bodiesToBeRemoved = [], this.fixedStepTime = 0, this.islandSplit = "undefined" != typeof a.islandSplit ? !!a.islandSplit : !1, this.emitImpactEvent = !0, this._constraintIdCounter = 0, this._bodyIdCounter = 0, this.postStepEvent = {
                        type: "postStep"
                    }, this.addBodyEvent = {
                        type: "addBody",
                        body: null
                    }, this.removeBodyEvent = {
                        type: "removeBody",
                        body: null
                    }, this.addSpringEvent = {
                        type: "addSpring",
                        spring: null
                    }, this.impactEvent = {
                        type: "impact",
                        bodyA: null,
                        bodyB: null,
                        shapeA: null,
                        shapeB: null,
                        contactEquation: null
                    }, this.postBroadphaseEvent = {
                        type: "postBroadphase",
                        pairs: null
                    }, this.sleepMode = c.NO_SLEEPING, this.beginContactEvent = {
                        type: "beginContact",
                        shapeA: null,
                        shapeB: null,
                        bodyA: null,
                        bodyB: null,
                        contactEquations: []
                    }, this.endContactEvent = {
                        type: "endContact",
                        shapeA: null,
                        shapeB: null,
                        bodyA: null,
                        bodyB: null
                    }, this.preSolveEvent = {
                        type: "preSolve",
                        contactEquations: null,
                        frictionEquations: null
                    }, this.overlappingShapesLastState = {
                        keys: []
                    }, this.overlappingShapesCurrentState = {
                        keys: []
                    }, this.overlapKeeper = new r
                } {
                    var d = a("../solver/GSSolver"),
                        e = (a("../solver/Solver"), a("../collision/NaiveBroadphase")),
                        f = a("../math/vec2"),
                        g = a("../shapes/Circle"),
                        h = (a("../shapes/Rectangle"), a("../shapes/Convex")),
                        i = (a("../shapes/Line"), a("../shapes/Plane")),
                        j = a("../shapes/Capsule"),
                        k = a("../shapes/Particle"),
                        l = a("../events/EventEmitter"),
                        m = a("../objects/Body"),
                        n = (a("../shapes/Shape"), a("../objects/LinearSpring"), a("../material/Material")),
                        o = a("../material/ContactMaterial"),
                        p = (a("../constraints/DistanceConstraint"), a("../constraints/Constraint"), a("../constraints/LockConstraint"), a("../constraints/RevoluteConstraint"), a("../constraints/PrismaticConstraint"), a("../constraints/GearConstraint"), a("../../package.json"), a("../collision/Broadphase"), a("../collision/SAPBroadphase"), a("../collision/Narrowphase")),
                        q = a("../utils/Utils"),
                        r = a("../utils/OverlapKeeper"),
                        s = a("./IslandManager");
                    a("../objects/RotationalSpring")
                }
                if (b.exports = c, "undefined" == typeof performance && (performance = {}), !performance.now) {
                    var t = Date.now();
                    performance.timing && performance.timing.navigationStart && (t = performance.timing.navigationStart), performance.now = function() {
                        return Date.now() - t
                    }
                }
                c.prototype = new Object(l.prototype), c.NO_SLEEPING = 1, c.BODY_SLEEPING = 2, c.ISLAND_SLEEPING = 4, c.prototype.addConstraint = function(a) {
                    this.constraints.push(a)
                }, c.prototype.addContactMaterial = function(a) {
                    this.contactMaterials.push(a)
                }, c.prototype.removeContactMaterial = function(a) {
                    var b = this.contactMaterials.indexOf(a); - 1 !== b && q.splice(this.contactMaterials, b, 1)
                }, c.prototype.getContactMaterial = function(a, b) {
                    for (var c = this.contactMaterials, d = 0, e = c.length; d !== e; d++) {
                        var f = c[d];
                        if (f.materialA.id === a.id && f.materialB.id === b.id || f.materialA.id === b.id && f.materialB.id === a.id) return f
                    }
                    return !1
                }, c.prototype.removeConstraint = function(a) {
                    var b = this.constraints.indexOf(a); - 1 !== b && q.splice(this.constraints, b, 1)
                };
                var u = (f.create(), f.create(), f.create(), f.create(), f.create(), f.create(), f.create()),
                    v = f.fromValues(0, 0),
                    w = f.fromValues(0, 0),
                    x = (f.fromValues(0, 0), f.fromValues(0, 0));
                c.prototype.step = function(a, b, c) {
                    if (c = c || 10, b = b || 0, 0 === b) this.internalStep(a), this.time += a;
                    else {
                        var d = Math.floor((this.time + b) / a) - Math.floor(this.time / a);
                        d = Math.min(d, c);
                        for (var e = performance.now(), g = 0; g !== d && (this.internalStep(a), !(performance.now() - e > 1e3 * a)); g++);
                        this.time += b;
                        for (var h = this.time % a, i = h / a, j = 0; j !== this.bodies.length; j++) {
                            var k = this.bodies[j];
                            k.type !== m.STATIC && k.sleepState !== m.SLEEPING ? (f.sub(x, k.position, k.previousPosition), f.scale(x, x, i), f.add(k.interpolatedPosition, k.position, x), k.interpolatedAngle = k.angle + (k.angle - k.previousAngle) * i) : (f.copy(k.interpolatedPosition, k.position), k.interpolatedAngle = k.angle)
                        }
                    }
                };
                var y = [];
                c.prototype.internalStep = function(a) {
                    this.stepping = !0;
                    var b, d, e = this,
                        g = this.doProfiling,
                        h = this.springs.length,
                        i = this.springs,
                        j = this.bodies,
                        k = this.gravity,
                        l = this.solver,
                        n = this.bodies.length,
                        o = this.broadphase,
                        p = this.narrowphase,
                        r = this.constraints,
                        s = u,
                        t = (f.scale, f.add),
                        v = (f.rotate, this.islandManager);
                    if (this.overlapKeeper.tick(), this.lastTimeStep = a, g && (b = performance.now()), this.useWorldGravityAsFrictionGravity) {
                        var w = f.length(this.gravity);
                        0 === w && this.useFrictionGravityOnZeroGravity || (this.frictionGravity = w)
                    }
                    if (this.applyGravity)
                        for (var x = 0; x !== n; x++) {
                            var z = j[x],
                                A = z.force;
                            z.type === m.DYNAMIC && z.sleepState !== m.SLEEPING && (f.scale(s, k, z.mass * z.gravityScale), t(A, A, s))
                        }
                    if (this.applySpringForces)
                        for (var x = 0; x !== h; x++) {
                            var B = i[x];
                            B.applyForce()
                        }
                    if (this.applyDamping)
                        for (var x = 0; x !== n; x++) {
                            var z = j[x];
                            z.type === m.DYNAMIC && z.applyDamping(a)
                        }
                    for (var C = o.getCollisionPairs(this), D = this.disabledBodyCollisionPairs, x = D.length - 2; x >= 0; x -= 2)
                        for (var E = C.length - 2; E >= 0; E -= 2)(D[x] === C[E] && D[x + 1] === C[E + 1] || D[x + 1] === C[E] && D[x] === C[E + 1]) && C.splice(E, 2);
                    var F = r.length;
                    for (x = 0; x !== F; x++) {
                        var G = r[x];
                        if (!G.collideConnected)
                            for (var E = C.length - 2; E >= 0; E -= 2)(G.bodyA === C[E] && G.bodyB === C[E + 1] || G.bodyB === C[E] && G.bodyA === C[E + 1]) && C.splice(E, 2)
                    }
                    this.postBroadphaseEvent.pairs = C, this.emit(this.postBroadphaseEvent), p.reset(this);
                    for (var x = 0, H = C.length; x !== H; x += 2)
                        for (var I = C[x], J = C[x + 1], K = 0, L = I.shapes.length; K !== L; K++)
                            for (var M = I.shapes[K], N = I.shapeOffsets[K], O = I.shapeAngles[K], P = 0, Q = J.shapes.length; P !== Q; P++) {
                                var R = J.shapes[P],
                                    S = J.shapeOffsets[P],
                                    T = J.shapeAngles[P],
                                    U = this.defaultContactMaterial;
                                if (M.material && R.material) {
                                    var V = this.getContactMaterial(M.material, R.material);
                                    V && (U = V)
                                }
                                this.runNarrowphase(p, I, M, N, O, J, R, S, T, U, this.frictionGravity)
                            }
                    for (var x = 0; x !== n; x++) {
                        var W = j[x];
                        W._wakeUpAfterNarrowphase && (W.wakeUp(), W._wakeUpAfterNarrowphase = !1)
                    }
                    if (this.has("endContact")) {
                        this.overlapKeeper.getEndOverlaps(y);
                        for (var X = this.endContactEvent, P = y.length; P--;) {
                            var Y = y[P];
                            X.shapeA = Y.shapeA, X.shapeB = Y.shapeB, X.bodyA = Y.bodyA, X.bodyB = Y.bodyA, this.emit(X)
                        }
                    }
                    var Z = this.preSolveEvent;
                    Z.contactEquations = p.contactEquations, Z.frictionEquations = p.frictionEquations, this.emit(Z);
                    var F = r.length;
                    for (x = 0; x !== F; x++) r[x].update();
                    if (p.contactEquations.length || p.frictionEquations.length || r.length)
                        if (this.islandSplit) {
                            for (v.equations.length = 0, q.appendArray(v.equations, p.contactEquations), q.appendArray(v.equations, p.frictionEquations), x = 0; x !== F; x++) q.appendArray(v.equations, r[x].equations);
                            v.split(this);
                            for (var x = 0; x !== v.islands.length; x++) {
                                var $ = v.islands[x];
                                $.equations.length && l.solveIsland(a, $)
                            }
                        } else {
                            for (l.addEquations(p.contactEquations), l.addEquations(p.frictionEquations), x = 0; x !== F; x++) l.addEquations(r[x].equations);
                            this.solveConstraints && l.solve(a, this), l.removeAllEquations()
                        }
                    for (var x = 0; x !== n; x++) {
                        var W = j[x];
                        W.sleepState !== m.SLEEPING && W.type !== m.STATIC && c.integrateBody(W, a)
                    }
                    for (var x = 0; x !== n; x++) j[x].setZeroForce();
                    if (g && (d = performance.now(), e.lastStepTime = d - b), this.emitImpactEvent && this.has("impact"))
                        for (var _ = this.impactEvent, x = 0; x !== p.contactEquations.length; x++) {
                            var ab = p.contactEquations[x];
                            ab.firstImpact && (_.bodyA = ab.bodyA, _.bodyB = ab.bodyB, _.shapeA = ab.shapeA, _.shapeB = ab.shapeB, _.contactEquation = ab, this.emit(_))
                        }
                    if (this.sleepMode === c.BODY_SLEEPING)
                        for (x = 0; x !== n; x++) j[x].sleepTick(this.time, !1, a);
                    else if (this.sleepMode === c.ISLAND_SLEEPING && this.islandSplit) {
                        for (x = 0; x !== n; x++) j[x].sleepTick(this.time, !0, a);
                        for (var x = 0; x < this.islandManager.islands.length; x++) {
                            var $ = this.islandManager.islands[x];
                            $.wantsToSleep() && $.sleep()
                        }
                    }
                    if (this.stepping = !1, this.bodiesToBeRemoved.length) {
                        for (var x = 0; x !== this.bodiesToBeRemoved.length; x++) this.removeBody(this.bodiesToBeRemoved[x]);
                        this.bodiesToBeRemoved.length = 0
                    }
                    this.emit(this.postStepEvent)
                };
                var z = f.create(),
                    A = f.create();
                c.integrateBody = function(a, b) {
                    var c = a.invMass,
                        d = a.force,
                        e = a.position,
                        g = a.velocity;
                    f.copy(a.previousPosition, a.position), a.previousAngle = a.angle, a.fixedRotation || (a.angularVelocity += a.angularForce * a.invInertia * b, a.angle += a.angularVelocity * b), f.scale(z, d, b * c), f.add(g, z, g), f.scale(A, g, b), f.add(e, e, A), a.aabbNeedsUpdate = !0
                }, c.prototype.runNarrowphase = function(a, b, c, d, e, g, h, i, j, k, l) {
                    if (0 !== (c.collisionGroup & h.collisionMask) && 0 !== (h.collisionGroup & c.collisionMask)) {
                        f.rotate(v, d, b.angle), f.rotate(w, i, g.angle), f.add(v, v, b.position), f.add(w, w, g.position);
                        var n = e + b.angle,
                            o = j + g.angle;
                        a.enableFriction = k.friction > 0, a.frictionCoefficient = k.friction;
                        var p;
                        p = b.type === m.STATIC || b.type === m.KINEMATIC ? g.mass : g.type === m.STATIC || g.type === m.KINEMATIC ? b.mass : b.mass * g.mass / (b.mass + g.mass), a.slipForce = k.friction * l * p, a.restitution = k.restitution, a.surfaceVelocity = k.surfaceVelocity, a.frictionStiffness = k.frictionStiffness, a.frictionRelaxation = k.frictionRelaxation, a.stiffness = k.stiffness, a.relaxation = k.relaxation, a.contactSkinSize = k.contactSkinSize;
                        var q = a[c.type | h.type],
                            r = 0;
                        if (q) {
                            var s = c.sensor || h.sensor,
                                t = a.frictionEquations.length;
                            r = c.type < h.type ? q.call(a, b, c, v, n, g, h, w, o, s) : q.call(a, g, h, w, o, b, c, v, n, s);
                            var u = a.frictionEquations.length - t;
                            if (r) {
                                if (b.allowSleep && b.type === m.DYNAMIC && b.sleepState === m.SLEEPING && g.sleepState === m.AWAKE && g.type !== m.STATIC) {
                                    var x = f.squaredLength(g.velocity) + Math.pow(g.angularVelocity, 2),
                                        y = Math.pow(g.sleepSpeedLimit, 2);
                                    x >= 2 * y && (b._wakeUpAfterNarrowphase = !0)
                                }
                                if (g.allowSleep && g.type === m.DYNAMIC && g.sleepState === m.SLEEPING && b.sleepState === m.AWAKE && b.type !== m.STATIC) {
                                    var z = f.squaredLength(b.velocity) + Math.pow(b.angularVelocity, 2),
                                        A = Math.pow(b.sleepSpeedLimit, 2);
                                    z >= 2 * A && (g._wakeUpAfterNarrowphase = !0)
                                }
                                if (this.overlapKeeper.setOverlapping(b, c, g, h), this.has("beginContact") && this.overlapKeeper.isNewOverlap(c, h)) {
                                    var B = this.beginContactEvent;
                                    if (B.shapeA = c, B.shapeB = h, B.bodyA = b, B.bodyB = g, B.contactEquations.length = 0, "number" == typeof r)
                                        for (var C = a.contactEquations.length - r; C < a.contactEquations.length; C++) B.contactEquations.push(a.contactEquations[C]);
                                    this.emit(B)
                                }
                                if ("number" == typeof r && u > 1)
                                    for (var C = a.frictionEquations.length - u; C < a.frictionEquations.length; C++) {
                                        var D = a.frictionEquations[C];
                                        D.setSlipForce(D.getSlipForce() / u)
                                    }
                            }
                        }
                    }
                }, c.prototype.addSpring = function(a) {
                    this.springs.push(a), this.addSpringEvent.spring = a, this.emit(this.addSpringEvent)
                }, c.prototype.removeSpring = function(a) {
                    var b = this.springs.indexOf(a); - 1 !== b && q.splice(this.springs, b, 1)
                }, c.prototype.addBody = function(a) {
                    -1 === this.bodies.indexOf(a) && (this.bodies.push(a), a.world = this, this.addBodyEvent.body = a, this.emit(this.addBodyEvent))
                }, c.prototype.removeBody = function(a) {
                    if (this.stepping) this.bodiesToBeRemoved.push(a);
                    else {
                        a.world = null;
                        var b = this.bodies.indexOf(a); - 1 !== b && (q.splice(this.bodies, b, 1), this.removeBodyEvent.body = a, a.resetConstraintVelocity(), this.emit(this.removeBodyEvent))
                    }
                }, c.prototype.getBodyById = function(a) {
                    for (var b = this.bodies, c = 0; c < b.length; c++) {
                        var d = b[c];
                        if (d.id === a) return d
                    }
                    return !1
                }, c.prototype.disableBodyCollision = function(a, b) {
                    this.disabledBodyCollisionPairs.push(a, b)
                }, c.prototype.enableBodyCollision = function(a, b) {
                    for (var c = this.disabledBodyCollisionPairs, d = 0; d < c.length; d += 2)
                        if (c[d] === a && c[d + 1] === b || c[d + 1] === a && c[d] === b) return void c.splice(d, 2)
                }, c.prototype.clear = function() {
                    this.time = 0, this.fixedStepTime = 0, this.solver && this.solver.equations.length && this.solver.removeAllEquations();
                    for (var a = this.constraints, b = a.length - 1; b >= 0; b--) this.removeConstraint(a[b]);
                    for (var d = this.bodies, b = d.length - 1; b >= 0; b--) this.removeBody(d[b]);
                    for (var e = this.springs, b = e.length - 1; b >= 0; b--) this.removeSpring(e[b]);
                    for (var f = this.contactMaterials, b = f.length - 1; b >= 0; b--) this.removeContactMaterial(f[b]);
                    c.apply(this)
                }, c.prototype.clone = function() {
                    var a = new c;
                    return a.fromJSON(this.toJSON()), a
                };
                var B = f.create(),
                    C = f.fromValues(0, 0),
                    D = f.fromValues(0, 0);
                c.prototype.hitTest = function(a, b, c) {
                    c = c || 0;
                    var d = new m({
                            position: a
                        }),
                        e = new k,
                        l = a,
                        n = 0,
                        o = B,
                        p = C,
                        q = D;
                    d.addShape(e);
                    for (var r = this.narrowphase, s = [], t = 0, u = b.length; t !== u; t++)
                        for (var v = b[t], w = 0, x = v.shapes.length; w !== x; w++) {
                            var y = v.shapes[w],
                                z = v.shapeOffsets[w] || p,
                                A = v.shapeAngles[w] || 0;
                            f.rotate(o, z, v.angle), f.add(o, o, v.position);
                            var E = A + v.angle;
                            (y instanceof g && r.circleParticle(v, y, o, E, d, e, l, n, !0) || y instanceof h && r.particleConvex(d, e, l, n, v, y, o, E, !0) || y instanceof i && r.particlePlane(d, e, l, n, v, y, o, E, !0) || y instanceof j && r.particleCapsule(d, e, l, n, v, y, o, E, !0) || y instanceof k && f.squaredLength(f.sub(q, o, a)) < c * c) && s.push(v)
                        }
                    return s
                }, c.prototype.setGlobalEquationParameters = function(a) {
                    a = a || {};
                    for (var b = 0; b !== this.constraints.length; b++)
                        for (var c = this.constraints[b], d = 0; d !== c.equations.length; d++) {
                            var e = c.equations[d];
                            "undefined" != typeof a.stiffness && (e.stiffness = a.stiffness), "undefined" != typeof a.relaxation && (e.relaxation = a.relaxation), e.needsUpdate = !0
                        }
                    for (var b = 0; b !== this.contactMaterials.length; b++) {
                        var c = this.contactMaterials[b];
                        "undefined" != typeof a.stiffness && (c.stiffness = a.stiffness, c.frictionStiffness = a.stiffness), "undefined" != typeof a.relaxation && (c.relaxation = a.relaxation, c.frictionRelaxation = a.relaxation)
                    }
                    var c = this.defaultContactMaterial;
                    "undefined" != typeof a.stiffness && (c.stiffness = a.stiffness, c.frictionStiffness = a.stiffness), "undefined" != typeof a.relaxation && (c.relaxation = a.relaxation, c.frictionRelaxation = a.relaxation)
                }, c.prototype.setGlobalStiffness = function(a) {
                    this.setGlobalEquationParameters({
                        stiffness: a
                    })
                }, c.prototype.setGlobalRelaxation = function(a) {
                    this.setGlobalEquationParameters({
                        relaxation: a
                    })
                }
            }).call(this, a("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/world/World.js", "/world")
        }, {
            "../../package.json": 10,
            "../collision/Broadphase": 12,
            "../collision/NaiveBroadphase": 14,
            "../collision/Narrowphase": 15,
            "../collision/SAPBroadphase": 16,
            "../constraints/Constraint": 17,
            "../constraints/DistanceConstraint": 18,
            "../constraints/GearConstraint": 19,
            "../constraints/LockConstraint": 20,
            "../constraints/PrismaticConstraint": 21,
            "../constraints/RevoluteConstraint": 22,
            "../events/EventEmitter": 29,
            "../material/ContactMaterial": 30,
            "../material/Material": 31,
            "../math/vec2": 33,
            "../objects/Body": 34,
            "../objects/LinearSpring": 35,
            "../objects/RotationalSpring": 36,
            "../shapes/Capsule": 39,
            "../shapes/Circle": 40,
            "../shapes/Convex": 41,
            "../shapes/Line": 43,
            "../shapes/Particle": 44,
            "../shapes/Plane": 45,
            "../shapes/Rectangle": 46,
            "../shapes/Shape": 47,
            "../solver/GSSolver": 48,
            "../solver/Solver": 49,
            "../utils/OverlapKeeper": 50,
            "../utils/Utils": 52,
            "./IslandManager": 54,
            "/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 4,
            buffer: 1
        }]
    }, {}, [38])(38)
});