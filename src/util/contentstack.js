module.exports = (function (e) {
    var a = {};
    function n(i) {
        if (a[i]) return a[i].exports;
        var t = (a[i] = { i: i, l: !1, exports: {} });
        return e[i].call(t.exports, t, t.exports, n), (t.l = !0), t.exports;
    }
    return (
        (n.m = e),
        (n.c = a),
        (n.d = function (e, a, i) {
            n.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: i });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, a) {
            if ((1 & a && (e = n(e)), 8 & a)) return e;
            if (4 & a && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if ((n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & a && "string" != typeof e))
                for (var t in e)
                    n.d(
                        i,
                        t,
                        function (a) {
                            return e[a];
                        }.bind(null, t)
                    );
            return i;
        }),
        (n.n = function (e) {
            var a =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(a, "a", a), a;
        }),
        (n.o = function (e, a) {
            return Object.prototype.hasOwnProperty.call(e, a);
        }),
        (n.p = ""),
        n((n.s = 151))
    );
})([
    function (e, a, n) {
        var i = n(65);
        e.exports = function (e) {
            return i(e, 5);
        };
    },
    function (e, a, n) {
        e.exports = n(137);
    },
    function (e, a) {
        function n(e, a, n, i, t, o, s) {
            try {
                var r = e[o](s),
                    c = r.value;
            } catch (e) {
                return void n(e);
            }
            r.done ? a(c) : Promise.resolve(c).then(i, t);
        }
        e.exports = function (e) {
            return function () {
                var a = this,
                    i = arguments;
                return new Promise(function (t, o) {
                    var s = e.apply(a, i);
                    function r(e) {
                        n(s, t, o, r, c, "next", e);
                    }
                    function c(e) {
                        n(s, t, o, r, c, "throw", e);
                    }
                    r(void 0);
                });
            };
        };
    },
    function (e, a) {
        e.exports = function (e, a, n) {
            return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[a] = n), e;
        };
    },
    function (e, a, n) {
        function i(e) {
            return (i =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        var t = n(31),
            o = "object" == ("undefined" == typeof self ? "undefined" : i(self)) && self && self.Object === Object && self,
            s = t || o || Function("return this")();
        e.exports = s;
    },
    function (e, a, n) {
        var i = n(77),
            t = n(82);
        e.exports = function (e, a) {
            var n = t(e, a);
            return i(n) ? n : void 0;
        };
    },
    function (e, a) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        e.exports = function (e) {
            var a = n(e);
            return null != e && ("object" == a || "function" == a);
        };
    },
    function (e, a) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        e.exports = function (e) {
            return null != e && "object" == n(e);
        };
    },
    function (e, a, n) {
        var i = n(67),
            t = n(68),
            o = n(69),
            s = n(70),
            r = n(71);
        function c(e) {
            var a = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++a < n; ) {
                var i = e[a];
                this.set(i[0], i[1]);
            }
        }
        (c.prototype.clear = i), (c.prototype.delete = t), (c.prototype.get = o), (c.prototype.has = s), (c.prototype.set = r), (e.exports = c);
    },
    function (e, a, n) {
        var i = n(29);
        e.exports = function (e, a) {
            for (var n = e.length; n--; ) if (i(e[n][0], a)) return n;
            return -1;
        };
    },
    function (e, a, n) {
        var i = n(16),
            t = n(78),
            o = n(79),
            s = i ? i.toStringTag : void 0;
        e.exports = function (e) {
            return null == e ? (void 0 === e ? "[object Undefined]" : "[object Null]") : s && s in Object(e) ? t(e) : o(e);
        };
    },
    function (e, a, n) {
        var i = n(5)(Object, "create");
        e.exports = i;
    },
    function (e, a, n) {
        var i = n(92);
        e.exports = function (e, a) {
            var n = e.__data__;
            return i(a) ? n["string" == typeof a ? "string" : "hash"] : n.map;
        };
    },
    function (e, a, n) {
        var i = n(33),
            t = n(34);
        e.exports = function (e, a, n, o) {
            var s = !n;
            n || (n = {});
            for (var r = -1, c = a.length; ++r < c; ) {
                var p = a[r],
                    u = o ? o(n[p], e[p], p, n, e) : void 0;
                void 0 === u && (u = e[p]), s ? t(n, p, u) : i(n, p, u);
            }
            return n;
        };
    },
    function (e, a) {
        e.exports = function (e) {
            return (
                e.webpackPolyfill ||
                    ((e.deprecate = function () {}),
                    (e.paths = []),
                    e.children || (e.children = []),
                    Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return e.l;
                        },
                    }),
                    Object.defineProperty(e, "id", {
                        enumerable: !0,
                        get: function () {
                            return e.i;
                        },
                    }),
                    (e.webpackPolyfill = 1)),
                e
            );
        };
    },
    function (e, a, n) {
        var i = n(5)(n(4), "Map");
        e.exports = i;
    },
    function (e, a, n) {
        var i = n(4).Symbol;
        e.exports = i;
    },
    function (e, a, n) {
        var i = n(35),
            t = n(106),
            o = n(39);
        e.exports = function (e) {
            return o(e) ? i(e) : t(e);
        };
    },
    function (e, a) {
        var n = Array.isArray;
        e.exports = n;
    },
    function (e, a) {
        e.exports = function (e) {
            return function (a) {
                return e(a);
            };
        };
    },
    function (e, a, n) {
        (function (e) {
            function i(e) {
                return (i =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            var t = n(31),
                o = "object" == i(a) && a && !a.nodeType && a,
                s = o && "object" == i(e) && e && !e.nodeType && e,
                r = s && s.exports === o && t.process,
                c = (function () {
                    try {
                        var e = s && s.require && s.require("util").types;
                        return e || (r && r.binding && r.binding("util"));
                    } catch (e) {}
                })();
            e.exports = c;
        }.call(this, n(14)(e)));
    },
    function (e, a) {
        var n = Object.prototype;
        e.exports = function (e) {
            var a = e && e.constructor;
            return e === (("function" == typeof a && a.prototype) || n);
        };
    },
    function (e, a, n) {
        var i = n(114),
            t = n(41),
            o = Object.prototype.propertyIsEnumerable,
            s = Object.getOwnPropertySymbols,
            r = s
                ? function (e) {
                      return null == e
                          ? []
                          : ((e = Object(e)),
                            i(s(e), function (a) {
                                return o.call(e, a);
                            }));
                  }
                : t;
        e.exports = r;
    },
    function (e, a, n) {
        var i = n(118),
            t = n(15),
            o = n(119),
            s = n(120),
            r = n(121),
            c = n(10),
            p = n(32),
            u = p(i),
            l = p(t),
            d = p(o),
            m = p(s),
            x = p(r),
            f = c;
        ((i && "[object DataView]" != f(new i(new ArrayBuffer(1)))) || (t && "[object Map]" != f(new t())) || (o && "[object Promise]" != f(o.resolve())) || (s && "[object Set]" != f(new s())) || (r && "[object WeakMap]" != f(new r()))) &&
            (f = function (e) {
                var a = c(e),
                    n = "[object Object]" == a ? e.constructor : void 0,
                    i = n ? p(n) : "";
                if (i)
                    switch (i) {
                        case u:
                            return "[object DataView]";
                        case l:
                            return "[object Map]";
                        case d:
                            return "[object Promise]";
                        case m:
                            return "[object Set]";
                        case x:
                            return "[object WeakMap]";
                    }
                return a;
            }),
            (e.exports = f);
    },
    function (e, a, n) {
        var i = n(124);
        e.exports = function (e) {
            var a = new e.constructor(e.byteLength);
            return new i(a).set(new i(e)), a;
        };
    },
    function (e, a, n) {
        "use strict";
        function i(e) {
            return (i =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        var t = Object.prototype.hasOwnProperty,
            o = Array.isArray,
            s = (function () {
                for (var e = [], a = 0; a < 256; ++a) e.push("%" + ((a < 16 ? "0" : "") + a.toString(16)).toUpperCase());
                return e;
            })(),
            r = function (e, a) {
                for (var n = a && a.plainObjects ? Object.create(null) : {}, i = 0; i < e.length; ++i) void 0 !== e[i] && (n[i] = e[i]);
                return n;
            };
        e.exports = {
            arrayToObject: r,
            assign: function (e, a) {
                return Object.keys(a).reduce(function (e, n) {
                    return (e[n] = a[n]), e;
                }, e);
            },
            combine: function (e, a) {
                return [].concat(e, a);
            },
            compact: function (e) {
                for (var a = [{ obj: { o: e }, prop: "o" }], n = [], t = 0; t < a.length; ++t)
                    for (var s = a[t], r = s.obj[s.prop], c = Object.keys(r), p = 0; p < c.length; ++p) {
                        var u = c[p],
                            l = r[u];
                        "object" === i(l) && null !== l && -1 === n.indexOf(l) && (a.push({ obj: r, prop: u }), n.push(l));
                    }
                return (
                    (function (e) {
                        for (; e.length > 1; ) {
                            var a = e.pop(),
                                n = a.obj[a.prop];
                            if (o(n)) {
                                for (var i = [], t = 0; t < n.length; ++t) void 0 !== n[t] && i.push(n[t]);
                                a.obj[a.prop] = i;
                            }
                        }
                    })(a),
                    e
                );
            },
            decode: function (e, a, n) {
                var i = e.replace(/\+/g, " ");
                if ("iso-8859-1" === n) return i.replace(/%[0-9a-f]{2}/gi, unescape);
                try {
                    return decodeURIComponent(i);
                } catch (e) {
                    return i;
                }
            },
            encode: function (e, a, n) {
                if (0 === e.length) return e;
                var t = e;
                if (("symbol" === i(e) ? (t = Symbol.prototype.toString.call(e)) : "string" != typeof e && (t = String(e)), "iso-8859-1" === n))
                    return escape(t).replace(/%u[0-9a-f]{4}/gi, function (e) {
                        return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
                    });
                for (var o = "", r = 0; r < t.length; ++r) {
                    var c = t.charCodeAt(r);
                    45 === c || 46 === c || 95 === c || 126 === c || (c >= 48 && c <= 57) || (c >= 65 && c <= 90) || (c >= 97 && c <= 122)
                        ? (o += t.charAt(r))
                        : c < 128
                        ? (o += s[c])
                        : c < 2048
                        ? (o += s[192 | (c >> 6)] + s[128 | (63 & c)])
                        : c < 55296 || c >= 57344
                        ? (o += s[224 | (c >> 12)] + s[128 | ((c >> 6) & 63)] + s[128 | (63 & c)])
                        : ((r += 1), (c = 65536 + (((1023 & c) << 10) | (1023 & t.charCodeAt(r)))), (o += s[240 | (c >> 18)] + s[128 | ((c >> 12) & 63)] + s[128 | ((c >> 6) & 63)] + s[128 | (63 & c)]));
                }
                return o;
            },
            isBuffer: function (e) {
                return !(!e || "object" !== i(e)) && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
            },
            isRegExp: function (e) {
                return "[object RegExp]" === Object.prototype.toString.call(e);
            },
            maybeMap: function (e, a) {
                if (o(e)) {
                    for (var n = [], i = 0; i < e.length; i += 1) n.push(a(e[i]));
                    return n;
                }
                return a(e);
            },
            merge: function e(a, n, s) {
                if (!n) return a;
                if ("object" !== i(n)) {
                    if (o(a)) a.push(n);
                    else {
                        if (!a || "object" !== i(a)) return [a, n];
                        ((s && (s.plainObjects || s.allowPrototypes)) || !t.call(Object.prototype, n)) && (a[n] = !0);
                    }
                    return a;
                }
                if (!a || "object" !== i(a)) return [a].concat(n);
                var c = a;
                return (
                    o(a) && !o(n) && (c = r(a, s)),
                    o(a) && o(n)
                        ? (n.forEach(function (n, o) {
                              if (t.call(a, o)) {
                                  var r = a[o];
                                  r && "object" === i(r) && n && "object" === i(n) ? (a[o] = e(r, n, s)) : a.push(n);
                              } else a[o] = n;
                          }),
                          a)
                        : Object.keys(n).reduce(function (a, i) {
                              var o = n[i];
                              return t.call(a, i) ? (a[i] = e(a[i], o, s)) : (a[i] = o), a;
                          }, c)
                );
            },
        };
    },
    function (e, a) {
        e.exports = require("util");
    },
    function (e, a) {
        e.exports = require("fs");
    },
    function (e, a) {
        e.exports = require("os");
    },
    function (e, a) {
        e.exports = function (e, a) {
            return e === a || (e != e && a != a);
        };
    },
    function (e, a, n) {
        var i = n(10),
            t = n(6);
        e.exports = function (e) {
            if (!t(e)) return !1;
            var a = i(e);
            return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a;
        };
    },
    function (e, a) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        var i = "object" == ("undefined" == typeof global ? "undefined" : n(global)) && global && global.Object === Object && global;
        e.exports = i;
    },
    function (e, a) {
        var n = Function.prototype.toString;
        e.exports = function (e) {
            if (null != e) {
                try {
                    return n.call(e);
                } catch (e) {}
                try {
                    return e + "";
                } catch (e) {}
            }
            return "";
        };
    },
    function (e, a, n) {
        var i = n(34),
            t = n(29),
            o = Object.prototype.hasOwnProperty;
        e.exports = function (e, a, n) {
            var s = e[a];
            (o.call(e, a) && t(s, n) && (void 0 !== n || a in e)) || i(e, a, n);
        };
    },
    function (e, a, n) {
        var i = n(97);
        e.exports = function (e, a, n) {
            "__proto__" == a && i ? i(e, a, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (e[a] = n);
        };
    },
    function (e, a, n) {
        var i = n(99),
            t = n(100),
            o = n(18),
            s = n(36),
            r = n(103),
            c = n(104),
            p = Object.prototype.hasOwnProperty;
        e.exports = function (e, a) {
            var n = o(e),
                u = !n && t(e),
                l = !n && !u && s(e),
                d = !n && !u && !l && c(e),
                m = n || u || l || d,
                x = m ? i(e.length, String) : [],
                f = x.length;
            for (var v in e) (!a && !p.call(e, v)) || (m && ("length" == v || (l && ("offset" == v || "parent" == v)) || (d && ("buffer" == v || "byteLength" == v || "byteOffset" == v)) || r(v, f))) || x.push(v);
            return x;
        };
    },
    function (e, a, n) {
        (function (e) {
            function i(e) {
                return (i =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            var t = n(4),
                o = n(102),
                s = "object" == i(a) && a && !a.nodeType && a,
                r = s && "object" == i(e) && e && !e.nodeType && e,
                c = r && r.exports === s ? t.Buffer : void 0,
                p = (c ? c.isBuffer : void 0) || o;
            e.exports = p;
        }.call(this, n(14)(e)));
    },
    function (e, a) {
        e.exports = function (e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
        };
    },
    function (e, a) {
        e.exports = function (e, a) {
            return function (n) {
                return e(a(n));
            };
        };
    },
    function (e, a, n) {
        var i = n(30),
            t = n(37);
        e.exports = function (e) {
            return null != e && t(e.length) && !i(e);
        };
    },
    function (e, a, n) {
        var i = n(35),
            t = n(109),
            o = n(39);
        e.exports = function (e) {
            return o(e) ? i(e, !0) : t(e);
        };
    },
    function (e, a) {
        e.exports = function () {
            return [];
        };
    },
    function (e, a, n) {
        var i = n(43),
            t = n(44),
            o = n(22),
            s = n(41),
            r = Object.getOwnPropertySymbols
                ? function (e) {
                      for (var a = []; e; ) i(a, o(e)), (e = t(e));
                      return a;
                  }
                : s;
        e.exports = r;
    },
    function (e, a) {
        e.exports = function (e, a) {
            for (var n = -1, i = a.length, t = e.length; ++n < i; ) e[t + n] = a[n];
            return e;
        };
    },
    function (e, a, n) {
        var i = n(38)(Object.getPrototypeOf, Object);
        e.exports = i;
    },
    function (e, a, n) {
        var i = n(43),
            t = n(18);
        e.exports = function (e, a, n) {
            var o = a(e);
            return t(e) ? o : i(o, n(e));
        };
    },
    function (e, a, n) {
        "use strict";
        var i = String.prototype.replace,
            t = /%20/g,
            o = n(25),
            s = { RFC1738: "RFC1738", RFC3986: "RFC3986" };
        e.exports = o.assign(
            {
                default: s.RFC3986,
                formatters: {
                    RFC1738: function (e) {
                        return i.call(e, t, "+");
                    },
                    RFC3986: function (e) {
                        return String(e);
                    },
                },
            },
            s
        );
    },
    function (e, a) {
        e.exports = require("stream");
    },
    function (e, a) {
        e.exports = require("path");
    },
    function (e, a, n) {
        var i = n(50),
            t = n(51);
        e.exports = function (e, a, n, o) {
            var s = n.keyedList ? n.keyedList[n.index] : n.index;
            n.jobs[s] = (function (e, a, n, t) {
                var o;
                o = 2 == e.length ? e(n, i(t)) : e(n, a, i(t));
                return o;
            })(a, s, e[s], function (e, a) {
                s in n.jobs && (delete n.jobs[s], e ? t(n) : (n.results[s] = a), o(e, n.results));
            });
        };
    },
    function (e, a, n) {
        var i = n(148);
        e.exports = function (e) {
            var a = !1;
            return (
                i(function () {
                    a = !0;
                }),
                function (n, t) {
                    a
                        ? e(n, t)
                        : i(function () {
                              e(n, t);
                          });
                }
            );
        };
    },
    function (e, a) {
        function n(e) {
            "function" == typeof this.jobs[e] && this.jobs[e]();
        }
        e.exports = function (e) {
            Object.keys(e.jobs).forEach(n.bind(e)), (e.jobs = {});
        };
    },
    function (e, a) {
        e.exports = function (e, a) {
            var n = !Array.isArray(e),
                i = { index: 0, keyedList: n || a ? Object.keys(e) : null, jobs: {}, results: n ? {} : [], size: n ? Object.keys(e).length : e.length };
            a &&
                i.keyedList.sort(
                    n
                        ? a
                        : function (n, i) {
                              return a(e[n], e[i]);
                          }
                );
            return i;
        };
    },
    function (e, a, n) {
        var i = n(51),
            t = n(50);
        e.exports = function (e) {
            if (!Object.keys(this.jobs).length) return;
            (this.index = this.size), i(this), t(e)(null, this.results);
        };
    },
    function (e, a, n) {
        var i = n(49),
            t = n(52),
            o = n(53);
        function s(e, a) {
            return e < a ? -1 : e > a ? 1 : 0;
        }
        (e.exports = function (e, a, n, s) {
            var r = t(e, n);
            return (
                i(e, a, r, function n(t, o) {
                    t ? s(t, o) : (r.index++, r.index < (r.keyedList || e).length ? i(e, a, r, n) : s(null, r.results));
                }),
                o.bind(r, s)
            );
        }),
            (e.exports.ascending = s),
            (e.exports.descending = function (e, a) {
                return -1 * s(e, a);
            });
    },
    function (e, a, n) {
        var i = n(60),
            t = n(61),
            o = n(62),
            s = n(64);
        e.exports = function (e, a) {
            return i(e) || t(e, a) || o(e, a) || s();
        };
    },
    function (e, a, n) {
        "use strict";
        var i = n(135),
            t = n(136),
            o = n(46);
        e.exports = { formats: o, parse: t, stringify: i };
    },
    function (e, a) {
        e.exports = function (e, a) {
            if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function");
        };
    },
    function (e, a, n) {
        function i(e) {
            return (i =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        var t = n(138),
            o = n(26),
            s = n(48),
            r = n(140),
            c = n(141),
            p = n(142).parse,
            u = n(27),
            l = n(143),
            d = n(146),
            m = n(150);
        function x(e) {
            if (!(this instanceof x)) return new x(e);
            for (var a in ((this._overheadLength = 0), (this._valueLength = 0), (this._valuesToMeasure = []), t.call(this), (e = e || {}))) this[a] = e[a];
        }
        (e.exports = x),
            o.inherits(x, t),
            (x.LINE_BREAK = "\r\n"),
            (x.DEFAULT_CONTENT_TYPE = "application/octet-stream"),
            (x.prototype.append = function (e, a, n) {
                "string" == typeof (n = n || {}) && (n = { filename: n });
                var i = t.prototype.append.bind(this);
                if (("number" == typeof a && (a = "" + a), o.isArray(a))) this._error(new Error("Arrays are not supported."));
                else {
                    var s = this._multiPartHeader(e, a, n),
                        r = this._multiPartFooter();
                    i(s), i(a), i(r), this._trackLength(s, a, n);
                }
            }),
            (x.prototype._trackLength = function (e, a, n) {
                var i = 0;
                null != n.knownLength ? (i += +n.knownLength) : Buffer.isBuffer(a) ? (i = a.length) : "string" == typeof a && (i = Buffer.byteLength(a)),
                    (this._valueLength += i),
                    (this._overheadLength += Buffer.byteLength(e) + x.LINE_BREAK.length),
                    a && (a.path || (a.readable && a.hasOwnProperty("httpVersion"))) && (n.knownLength || this._valuesToMeasure.push(a));
            }),
            (x.prototype._lengthRetriever = function (e, a) {
                e.hasOwnProperty("fd")
                    ? null != e.end && e.end != 1 / 0 && null != e.start
                        ? a(null, e.end + 1 - (e.start ? e.start : 0))
                        : u.stat(e.path, function (n, i) {
                              var t;
                              n ? a(n) : ((t = i.size - (e.start ? e.start : 0)), a(null, t));
                          })
                    : e.hasOwnProperty("httpVersion")
                    ? a(null, +e.headers["content-length"])
                    : e.hasOwnProperty("httpModule")
                    ? (e.on("response", function (n) {
                          e.pause(), a(null, +n.headers["content-length"]);
                      }),
                      e.resume())
                    : a("Unknown stream");
            }),
            (x.prototype._multiPartHeader = function (e, a, n) {
                if ("string" == typeof n.header) return n.header;
                var t,
                    o = this._getContentDisposition(a, n),
                    s = this._getContentType(a, n),
                    r = "",
                    c = { "Content-Disposition": ["form-data", 'name="' + e + '"'].concat(o || []), "Content-Type": [].concat(s || []) };
                for (var p in ("object" == i(n.header) && m(c, n.header), c)) c.hasOwnProperty(p) && null != (t = c[p]) && (Array.isArray(t) || (t = [t]), t.length && (r += p + ": " + t.join("; ") + x.LINE_BREAK));
                return "--" + this.getBoundary() + x.LINE_BREAK + r + x.LINE_BREAK;
            }),
            (x.prototype._getContentDisposition = function (e, a) {
                var n, i;
                return (
                    "string" == typeof a.filepath
                        ? (n = s.normalize(a.filepath).replace(/\\/g, "/"))
                        : a.filename || e.name || e.path
                        ? (n = s.basename(a.filename || e.name || e.path))
                        : e.readable && e.hasOwnProperty("httpVersion") && (n = s.basename(e.client._httpMessage.path || "")),
                    n && (i = 'filename="' + n + '"'),
                    i
                );
            }),
            (x.prototype._getContentType = function (e, a) {
                var n = a.contentType;
                return (
                    !n && e.name && (n = l.lookup(e.name)),
                    !n && e.path && (n = l.lookup(e.path)),
                    !n && e.readable && e.hasOwnProperty("httpVersion") && (n = e.headers["content-type"]),
                    n || (!a.filepath && !a.filename) || (n = l.lookup(a.filepath || a.filename)),
                    n || "object" != i(e) || (n = x.DEFAULT_CONTENT_TYPE),
                    n
                );
            }),
            (x.prototype._multiPartFooter = function () {
                return function (e) {
                    var a = x.LINE_BREAK;
                    0 === this._streams.length && (a += this._lastBoundary()), e(a);
                }.bind(this);
            }),
            (x.prototype._lastBoundary = function () {
                return "--" + this.getBoundary() + "--" + x.LINE_BREAK;
            }),
            (x.prototype.getHeaders = function (e) {
                var a,
                    n = { "content-type": "multipart/form-data; boundary=" + this.getBoundary() };
                for (a in e) e.hasOwnProperty(a) && (n[a.toLowerCase()] = e[a]);
                return n;
            }),
            (x.prototype.getBoundary = function () {
                return this._boundary || this._generateBoundary(), this._boundary;
            }),
            (x.prototype.getBuffer = function () {
                for (var e = new Buffer.alloc(0), a = this.getBoundary(), n = 0, i = this._streams.length; n < i; n++)
                    "function" != typeof this._streams[n] &&
                        ((e = Buffer.isBuffer(this._streams[n]) ? Buffer.concat([e, this._streams[n]]) : Buffer.concat([e, Buffer.from(this._streams[n])])),
                        ("string" == typeof this._streams[n] && this._streams[n].substring(2, a.length + 2) === a) || (e = Buffer.concat([e, Buffer.from(x.LINE_BREAK)])));
                return Buffer.concat([e, Buffer.from(this._lastBoundary())]);
            }),
            (x.prototype._generateBoundary = function () {
                for (var e = "--------------------------", a = 0; a < 24; a++) e += Math.floor(10 * Math.random()).toString(16);
                this._boundary = e;
            }),
            (x.prototype.getLengthSync = function () {
                var e = this._overheadLength + this._valueLength;
                return this._streams.length && (e += this._lastBoundary().length), this.hasKnownLength() || this._error(new Error("Cannot calculate proper length in synchronous way.")), e;
            }),
            (x.prototype.hasKnownLength = function () {
                var e = !0;
                return this._valuesToMeasure.length && (e = !1), e;
            }),
            (x.prototype.getLength = function (e) {
                var a = this._overheadLength + this._valueLength;
                this._streams.length && (a += this._lastBoundary().length),
                    this._valuesToMeasure.length
                        ? d.parallel(this._valuesToMeasure, this._lengthRetriever, function (n, i) {
                              n
                                  ? e(n)
                                  : (i.forEach(function (e) {
                                        a += e;
                                    }),
                                    e(null, a));
                          })
                        : process.nextTick(e.bind(this, null, a));
            }),
            (x.prototype.submit = function (e, a) {
                var n,
                    i,
                    t = { method: "post" };
                return (
                    "string" == typeof e ? ((e = p(e)), (i = m({ port: e.port, path: e.pathname, host: e.hostname, protocol: e.protocol }, t))) : (i = m(e, t)).port || (i.port = "https:" == i.protocol ? 443 : 80),
                    (i.headers = this.getHeaders(e.headers)),
                    (n = "https:" == i.protocol ? c.request(i) : r.request(i)),
                    this.getLength(
                        function (e, i) {
                            if (e) this._error(e);
                            else if ((n.setHeader("Content-Length", i), this.pipe(n), a)) {
                                var t,
                                    o = function e(i, o) {
                                        return n.removeListener("error", e), n.removeListener("response", t), a.call(this, i, o);
                                    };
                                (t = o.bind(this, null)), n.on("error", o), n.on("response", t);
                            }
                        }.bind(this)
                    ),
                    n
                );
            }),
            (x.prototype._error = function (e) {
                this.error || ((this.error = e), this.pause(), this.emit("error", e));
            }),
            (x.prototype.toString = function () {
                return "[object FormData]";
            });
    },
    function (e) {
        e.exports = JSON.parse(
            '{"name":"contentstack-management","version":"0.0.1","description":"The Content Management API is used to manage the content of your Contentstack account","main":"lib/contentstack.js","directories":{"test":"test"},"nyc":{"exclude":["**/test"]},"type":"module","scripts":{"clean":"rimraf coverage && rimraf dist","build":"npm run clean && npm run build:es5 && npm run build:es-modules","build:es5":"BABEL_ENV=es5 babel lib -d dist/es5","build:es-modules":"BABEL_ENV=es-modules babel lib -d dist/es-modules","test":"BABEL_ENV=test nyc --reporter=html --reporter=text mocha --require @babel/register ./test/test.js -t 30000 --reporter mochawesome --require babel-polyfill","test:debug":"BABEL_ENV=test mocha debug --require @babel/register ./test","lint":"eslint lib test","format":"eslint --fix lib test","pretest":"rimraf coverage && npm run lint","precommit":"npm run lint","prepush":"npm run test:unit","generate:docs":"node_modules/.bin/jsdoc --configure .jsdoc.json --verbose","buildall":"npm run buildnode&npm run buildweb&npm run buildreactnative&npm run buildnativescript","buildnode":"webpack --config webpack/webpack.node.js","buildreactnative":"webpack --config webpack/webpack.react-native.js","buildnativescript":"webpack --config webpack/webpack.nativescript.js","buildweb":"webpack --config webpack/webpack.web.js"},"engines":{"node":">=8.0.0 <11.0.0"},"author":"Contentstack","license":"MIT","dependencies":{"@babel/runtime":"^7.9.6","axios":"^0.19.0","babel-runtime":"^6.26.0","form-data":"^3.0.0","fs":"0.0.1-security","lodash":"^4.17.15","qs":"^6.9.4"},"keywords":["contentstack management api","contentstack","management api"],"devDependencies":{"@babel/cli":"^7.6.4","@babel/core":"^7.6.4","@babel/node":"^7.6.3","@babel/plugin-transform-runtime":"^7.9.6","@babel/preset-env":"^7.6.3","@babel/register":"^7.6.2","@types/node":"^12.12.5","axios-mock-adapter":"^1.17.0","axios-retry":"^3.1.2","babel-core":"^6.26.3","babel-loader":"^8.0.6","babel-plugin-rewire":"^1.2.0","babel-polyfill":"^6.26.0","babel-runtime":"^6.26.0","chai":"^4.2.0","docdash":"^1.1.1","eslint":"^6.6.0","eslint-config-standard":"^13.0.1","eslint-plugin-import":"^2.18.2","eslint-plugin-node":"^9.1.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-react":"^7.16.0","eslint-plugin-standard":"^4.0.0","istanbul":"^0.4.5","jsdoc":"^3.6.3","jsdoc-to-markdown":"^5.0.2","mocha":"^7.1.2","mochawesome":"^4.1.0","nock":"^10.0.6","nyc":"^14.1.1","require-all":"^3.0.0","rimraf":"^2.7.1","sinon":"^7.3.2","string-replace-loader":"^2.2.0","string-replace-webpack-plugin":"^0.1.3","webpack":"^4.41.2","webpack-cli":"^3.3.10","webpack-merge":"4.1.0"},"homepage":"https://www.contentstack.com/docs/apis/contentstack-management"}'
        );
    },
    function (e, a) {
        e.exports = function (e) {
            if (Array.isArray(e)) return e;
        };
    },
    function (e, a) {
        e.exports = function (e, a) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var n = [],
                    i = !0,
                    t = !1,
                    o = void 0;
                try {
                    for (var s, r = e[Symbol.iterator](); !(i = (s = r.next()).done) && (n.push(s.value), !a || n.length !== a); i = !0);
                } catch (e) {
                    (t = !0), (o = e);
                } finally {
                    try {
                        i || null == r.return || r.return();
                    } finally {
                        if (t) throw o;
                    }
                }
                return n;
            }
        };
    },
    function (e, a, n) {
        var i = n(63);
        e.exports = function (e, a) {
            if (e) {
                if ("string" == typeof e) return i(e, a);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, a) : void 0;
            }
        };
    },
    function (e, a) {
        e.exports = function (e, a) {
            (null == a || a > e.length) && (a = e.length);
            for (var n = 0, i = new Array(a); n < a; n++) i[n] = e[n];
            return i;
        };
    },
    function (e, a) {
        e.exports = function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        };
    },
    function (e, a, n) {
        var i = n(66),
            t = n(96),
            o = n(33),
            s = n(98),
            r = n(108),
            c = n(111),
            p = n(112),
            u = n(113),
            l = n(115),
            d = n(116),
            m = n(117),
            x = n(23),
            f = n(122),
            v = n(123),
            b = n(129),
            h = n(18),
            g = n(36),
            y = n(131),
            w = n(6),
            k = n(133),
            j = n(17),
            _ = {};
        (_["[object Arguments]"] = _["[object Array]"] = _["[object ArrayBuffer]"] = _["[object DataView]"] = _["[object Boolean]"] = _["[object Date]"] = _["[object Float32Array]"] = _["[object Float64Array]"] = _[
            "[object Int8Array]"
        ] = _["[object Int16Array]"] = _["[object Int32Array]"] = _["[object Map]"] = _["[object Number]"] = _["[object Object]"] = _["[object RegExp]"] = _["[object Set]"] = _["[object String]"] = _["[object Symbol]"] = _[
            "[object Uint8Array]"
        ] = _["[object Uint8ClampedArray]"] = _["[object Uint16Array]"] = _["[object Uint32Array]"] = !0),
            (_["[object Error]"] = _["[object Function]"] = _["[object WeakMap]"] = !1),
            (e.exports = function e(a, n, O, S, z, P) {
                var E,
                    q = 1 & n,
                    L = 2 & n,
                    A = 4 & n;
                if ((O && (E = z ? O(a, S, z, P) : O(a)), void 0 !== E)) return E;
                if (!w(a)) return a;
                var H = h(a);
                if (H) {
                    if (((E = f(a)), !q)) return p(a, E);
                } else {
                    var T = x(a),
                        D = "[object Function]" == T || "[object GeneratorFunction]" == T;
                    if (g(a)) return c(a, q);
                    if ("[object Object]" == T || "[object Arguments]" == T || (D && !z)) {
                        if (((E = L || D ? {} : b(a)), !q)) return L ? l(a, r(E, a)) : u(a, s(E, a));
                    } else {
                        if (!_[T]) return z ? a : {};
                        E = v(a, T, q);
                    }
                }
                P || (P = new i());
                var N = P.get(a);
                if (N) return N;
                P.set(a, E),
                    k(a)
                        ? a.forEach(function (i) {
                              E.add(e(i, n, O, i, a, P));
                          })
                        : y(a) &&
                          a.forEach(function (i, t) {
                              E.set(t, e(i, n, O, t, a, P));
                          });
                var F = A ? (L ? m : d) : L ? keysIn : j,
                    U = H ? void 0 : F(a);
                return (
                    t(U || a, function (i, t) {
                        U && (i = a[(t = i)]), o(E, t, e(i, n, O, t, a, P));
                    }),
                    E
                );
            });
    },
    function (e, a, n) {
        var i = n(8),
            t = n(72),
            o = n(73),
            s = n(74),
            r = n(75),
            c = n(76);
        function p(e) {
            var a = (this.__data__ = new i(e));
            this.size = a.size;
        }
        (p.prototype.clear = t), (p.prototype.delete = o), (p.prototype.get = s), (p.prototype.has = r), (p.prototype.set = c), (e.exports = p);
    },
    function (e, a) {
        e.exports = function () {
            (this.__data__ = []), (this.size = 0);
        };
    },
    function (e, a, n) {
        var i = n(9),
            t = Array.prototype.splice;
        e.exports = function (e) {
            var a = this.__data__,
                n = i(a, e);
            return !(n < 0) && (n == a.length - 1 ? a.pop() : t.call(a, n, 1), --this.size, !0);
        };
    },
    function (e, a, n) {
        var i = n(9);
        e.exports = function (e) {
            var a = this.__data__,
                n = i(a, e);
            return n < 0 ? void 0 : a[n][1];
        };
    },
    function (e, a, n) {
        var i = n(9);
        e.exports = function (e) {
            return i(this.__data__, e) > -1;
        };
    },
    function (e, a, n) {
        var i = n(9);
        e.exports = function (e, a) {
            var n = this.__data__,
                t = i(n, e);
            return t < 0 ? (++this.size, n.push([e, a])) : (n[t][1] = a), this;
        };
    },
    function (e, a, n) {
        var i = n(8);
        e.exports = function () {
            (this.__data__ = new i()), (this.size = 0);
        };
    },
    function (e, a) {
        e.exports = function (e) {
            var a = this.__data__,
                n = a.delete(e);
            return (this.size = a.size), n;
        };
    },
    function (e, a) {
        e.exports = function (e) {
            return this.__data__.get(e);
        };
    },
    function (e, a) {
        e.exports = function (e) {
            return this.__data__.has(e);
        };
    },
    function (e, a, n) {
        var i = n(8),
            t = n(15),
            o = n(83);
        e.exports = function (e, a) {
            var n = this.__data__;
            if (n instanceof i) {
                var s = n.__data__;
                if (!t || s.length < 199) return s.push([e, a]), (this.size = ++n.size), this;
                n = this.__data__ = new o(s);
            }
            return n.set(e, a), (this.size = n.size), this;
        };
    },
    function (e, a, n) {
        var i = n(30),
            t = n(80),
            o = n(6),
            s = n(32),
            r = /^\[object .+?Constructor\]$/,
            c = Function.prototype,
            p = Object.prototype,
            u = c.toString,
            l = p.hasOwnProperty,
            d = RegExp(
                "^" +
                    u
                        .call(l)
                        .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                    "$"
            );
        e.exports = function (e) {
            return !(!o(e) || t(e)) && (i(e) ? d : r).test(s(e));
        };
    },
    function (e, a, n) {
        var i = n(16),
            t = Object.prototype,
            o = t.hasOwnProperty,
            s = t.toString,
            r = i ? i.toStringTag : void 0;
        e.exports = function (e) {
            var a = o.call(e, r),
                n = e[r];
            try {
                e[r] = void 0;
                var i = !0;
            } catch (e) {}
            var t = s.call(e);
            return i && (a ? (e[r] = n) : delete e[r]), t;
        };
    },
    function (e, a) {
        var n = Object.prototype.toString;
        e.exports = function (e) {
            return n.call(e);
        };
    },
    function (e, a, n) {
        var i,
            t = n(81),
            o = (i = /[^.]+$/.exec((t && t.keys && t.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + i : "";
        e.exports = function (e) {
            return !!o && o in e;
        };
    },
    function (e, a, n) {
        var i = n(4)["__core-js_shared__"];
        e.exports = i;
    },
    function (e, a) {
        e.exports = function (e, a) {
            return null == e ? void 0 : e[a];
        };
    },
    function (e, a, n) {
        var i = n(84),
            t = n(91),
            o = n(93),
            s = n(94),
            r = n(95);
        function c(e) {
            var a = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++a < n; ) {
                var i = e[a];
                this.set(i[0], i[1]);
            }
        }
        (c.prototype.clear = i), (c.prototype.delete = t), (c.prototype.get = o), (c.prototype.has = s), (c.prototype.set = r), (e.exports = c);
    },
    function (e, a, n) {
        var i = n(85),
            t = n(8),
            o = n(15);
        e.exports = function () {
            (this.size = 0), (this.__data__ = { hash: new i(), map: new (o || t)(), string: new i() });
        };
    },
    function (e, a, n) {
        var i = n(86),
            t = n(87),
            o = n(88),
            s = n(89),
            r = n(90);
        function c(e) {
            var a = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++a < n; ) {
                var i = e[a];
                this.set(i[0], i[1]);
            }
        }
        (c.prototype.clear = i), (c.prototype.delete = t), (c.prototype.get = o), (c.prototype.has = s), (c.prototype.set = r), (e.exports = c);
    },
    function (e, a, n) {
        var i = n(11);
        e.exports = function () {
            (this.__data__ = i ? i(null) : {}), (this.size = 0);
        };
    },
    function (e, a) {
        e.exports = function (e) {
            var a = this.has(e) && delete this.__data__[e];
            return (this.size -= a ? 1 : 0), a;
        };
    },
    function (e, a, n) {
        var i = n(11),
            t = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
            var a = this.__data__;
            if (i) {
                var n = a[e];
                return "__lodash_hash_undefined__" === n ? void 0 : n;
            }
            return t.call(a, e) ? a[e] : void 0;
        };
    },
    function (e, a, n) {
        var i = n(11),
            t = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
            var a = this.__data__;
            return i ? void 0 !== a[e] : t.call(a, e);
        };
    },
    function (e, a, n) {
        var i = n(11);
        e.exports = function (e, a) {
            var n = this.__data__;
            return (this.size += this.has(e) ? 0 : 1), (n[e] = i && void 0 === a ? "__lodash_hash_undefined__" : a), this;
        };
    },
    function (e, a, n) {
        var i = n(12);
        e.exports = function (e) {
            var a = i(this, e).delete(e);
            return (this.size -= a ? 1 : 0), a;
        };
    },
    function (e, a) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        e.exports = function (e) {
            var a = n(e);
            return "string" == a || "number" == a || "symbol" == a || "boolean" == a ? "__proto__" !== e : null === e;
        };
    },
    function (e, a, n) {
        var i = n(12);
        e.exports = function (e) {
            return i(this, e).get(e);
        };
    },
    function (e, a, n) {
        var i = n(12);
        e.exports = function (e) {
            return i(this, e).has(e);
        };
    },
    function (e, a, n) {
        var i = n(12);
        e.exports = function (e, a) {
            var n = i(this, e),
                t = n.size;
            return n.set(e, a), (this.size += n.size == t ? 0 : 1), this;
        };
    },
    function (e, a) {
        e.exports = function (e, a) {
            for (var n = -1, i = null == e ? 0 : e.length; ++n < i && !1 !== a(e[n], n, e); );
            return e;
        };
    },
    function (e, a, n) {
        var i = n(5),
            t = (function () {
                try {
                    var e = i(Object, "defineProperty");
                    return e({}, "", {}), e;
                } catch (e) {}
            })();
        e.exports = t;
    },
    function (e, a, n) {
        var i = n(13),
            t = n(17);
        e.exports = function (e, a) {
            return e && i(a, t(a), e);
        };
    },
    function (e, a) {
        e.exports = function (e, a) {
            for (var n = -1, i = Array(e); ++n < e; ) i[n] = a(n);
            return i;
        };
    },
    function (e, a, n) {
        var i = n(101),
            t = n(7),
            o = Object.prototype,
            s = o.hasOwnProperty,
            r = o.propertyIsEnumerable,
            c = i(
                (function () {
                    return arguments;
                })()
            )
                ? i
                : function (e) {
                      return t(e) && s.call(e, "callee") && !r.call(e, "callee");
                  };
        e.exports = c;
    },
    function (e, a, n) {
        var i = n(10),
            t = n(7);
        e.exports = function (e) {
            return t(e) && "[object Arguments]" == i(e);
        };
    },
    function (e, a) {
        e.exports = function () {
            return !1;
        };
    },
    function (e, a) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        var i = /^(?:0|[1-9]\d*)$/;
        e.exports = function (e, a) {
            var t = n(e);
            return !!(a = null == a ? 9007199254740991 : a) && ("number" == t || ("symbol" != t && i.test(e))) && e > -1 && e % 1 == 0 && e < a;
        };
    },
    function (e, a, n) {
        var i = n(105),
            t = n(19),
            o = n(20),
            s = o && o.isTypedArray,
            r = s ? t(s) : i;
        e.exports = r;
    },
    function (e, a, n) {
        var i = n(10),
            t = n(37),
            o = n(7),
            s = {};
        (s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s[
            "[object Uint32Array]"
        ] = !0),
            (s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s[
                "[object Number]"
            ] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1),
            (e.exports = function (e) {
                return o(e) && t(e.length) && !!s[i(e)];
            });
    },
    function (e, a, n) {
        var i = n(21),
            t = n(107),
            o = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
            if (!i(e)) return t(e);
            var a = [];
            for (var n in Object(e)) o.call(e, n) && "constructor" != n && a.push(n);
            return a;
        };
    },
    function (e, a, n) {
        var i = n(38)(Object.keys, Object);
        e.exports = i;
    },
    function (e, a, n) {
        var i = n(13),
            t = n(40);
        e.exports = function (e, a) {
            return e && i(a, t(a), e);
        };
    },
    function (e, a, n) {
        var i = n(6),
            t = n(21),
            o = n(110),
            s = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
            if (!i(e)) return o(e);
            var a = t(e),
                n = [];
            for (var r in e) ("constructor" != r || (!a && s.call(e, r))) && n.push(r);
            return n;
        };
    },
    function (e, a) {
        e.exports = function (e) {
            var a = [];
            if (null != e) for (var n in Object(e)) a.push(n);
            return a;
        };
    },
    function (e, a, n) {
        (function (e) {
            function i(e) {
                return (i =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            var t = n(4),
                o = "object" == i(a) && a && !a.nodeType && a,
                s = o && "object" == i(e) && e && !e.nodeType && e,
                r = s && s.exports === o ? t.Buffer : void 0,
                c = r ? r.allocUnsafe : void 0;
            e.exports = function (e, a) {
                if (a) return e.slice();
                var n = e.length,
                    i = c ? c(n) : new e.constructor(n);
                return e.copy(i), i;
            };
        }.call(this, n(14)(e)));
    },
    function (e, a) {
        e.exports = function (e, a) {
            var n = -1,
                i = e.length;
            for (a || (a = Array(i)); ++n < i; ) a[n] = e[n];
            return a;
        };
    },
    function (e, a, n) {
        var i = n(13),
            t = n(22);
        e.exports = function (e, a) {
            return i(e, t(e), a);
        };
    },
    function (e, a) {
        e.exports = function (e, a) {
            for (var n = -1, i = null == e ? 0 : e.length, t = 0, o = []; ++n < i; ) {
                var s = e[n];
                a(s, n, e) && (o[t++] = s);
            }
            return o;
        };
    },
    function (e, a, n) {
        var i = n(13),
            t = n(42);
        e.exports = function (e, a) {
            return i(e, t(e), a);
        };
    },
    function (e, a, n) {
        var i = n(45),
            t = n(22),
            o = n(17);
        e.exports = function (e) {
            return i(e, o, t);
        };
    },
    function (e, a, n) {
        var i = n(45),
            t = n(42),
            o = n(40);
        e.exports = function (e) {
            return i(e, o, t);
        };
    },
    function (e, a, n) {
        var i = n(5)(n(4), "DataView");
        e.exports = i;
    },
    function (e, a, n) {
        var i = n(5)(n(4), "Promise");
        e.exports = i;
    },
    function (e, a, n) {
        var i = n(5)(n(4), "Set");
        e.exports = i;
    },
    function (e, a, n) {
        var i = n(5)(n(4), "WeakMap");
        e.exports = i;
    },
    function (e, a) {
        var n = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
            var a = e.length,
                i = new e.constructor(a);
            return a && "string" == typeof e[0] && n.call(e, "index") && ((i.index = e.index), (i.input = e.input)), i;
        };
    },
    function (e, a, n) {
        var i = n(24),
            t = n(125),
            o = n(126),
            s = n(127),
            r = n(128);
        e.exports = function (e, a, n) {
            var c = e.constructor;
            switch (a) {
                case "[object ArrayBuffer]":
                    return i(e);
                case "[object Boolean]":
                case "[object Date]":
                    return new c(+e);
                case "[object DataView]":
                    return t(e, n);
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                    return r(e, n);
                case "[object Map]":
                    return new c();
                case "[object Number]":
                case "[object String]":
                    return new c(e);
                case "[object RegExp]":
                    return o(e);
                case "[object Set]":
                    return new c();
                case "[object Symbol]":
                    return s(e);
            }
        };
    },
    function (e, a, n) {
        var i = n(4).Uint8Array;
        e.exports = i;
    },
    function (e, a, n) {
        var i = n(24);
        e.exports = function (e, a) {
            var n = a ? i(e.buffer) : e.buffer;
            return new e.constructor(n, e.byteOffset, e.byteLength);
        };
    },
    function (e, a) {
        var n = /\w*$/;
        e.exports = function (e) {
            var a = new e.constructor(e.source, n.exec(e));
            return (a.lastIndex = e.lastIndex), a;
        };
    },
    function (e, a, n) {
        var i = n(16),
            t = i ? i.prototype : void 0,
            o = t ? t.valueOf : void 0;
        e.exports = function (e) {
            return o ? Object(o.call(e)) : {};
        };
    },
    function (e, a, n) {
        var i = n(24);
        e.exports = function (e, a) {
            var n = a ? i(e.buffer) : e.buffer;
            return new e.constructor(n, e.byteOffset, e.length);
        };
    },
    function (e, a, n) {
        var i = n(130),
            t = n(44),
            o = n(21);
        e.exports = function (e) {
            return "function" != typeof e.constructor || o(e) ? {} : i(t(e));
        };
    },
    function (e, a, n) {
        var i = n(6),
            t = Object.create,
            o = (function () {
                function e() {}
                return function (a) {
                    if (!i(a)) return {};
                    if (t) return t(a);
                    e.prototype = a;
                    var n = new e();
                    return (e.prototype = void 0), n;
                };
            })();
        e.exports = o;
    },
    function (e, a, n) {
        var i = n(132),
            t = n(19),
            o = n(20),
            s = o && o.isMap,
            r = s ? t(s) : i;
        e.exports = r;
    },
    function (e, a, n) {
        var i = n(23),
            t = n(7);
        e.exports = function (e) {
            return t(e) && "[object Map]" == i(e);
        };
    },
    function (e, a, n) {
        var i = n(134),
            t = n(19),
            o = n(20),
            s = o && o.isSet,
            r = s ? t(s) : i;
        e.exports = r;
    },
    function (e, a, n) {
        var i = n(23),
            t = n(7);
        e.exports = function (e) {
            return t(e) && "[object Set]" == i(e);
        };
    },
    function (e, a, n) {
        "use strict";
        function i(e) {
            return (i =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        var t = n(25),
            o = n(46),
            s = Object.prototype.hasOwnProperty,
            r = {
                brackets: function (e) {
                    return e + "[]";
                },
                comma: "comma",
                indices: function (e, a) {
                    return e + "[" + a + "]";
                },
                repeat: function (e) {
                    return e;
                },
            },
            c = Array.isArray,
            p = Array.prototype.push,
            u = function (e, a) {
                p.apply(e, c(a) ? a : [a]);
            },
            l = Date.prototype.toISOString,
            d = o.default,
            m = {
                addQueryPrefix: !1,
                allowDots: !1,
                charset: "utf-8",
                charsetSentinel: !1,
                delimiter: "&",
                encode: !0,
                encoder: t.encode,
                encodeValuesOnly: !1,
                format: d,
                formatter: o.formatters[d],
                indices: !1,
                serializeDate: function (e) {
                    return l.call(e);
                },
                skipNulls: !1,
                strictNullHandling: !1,
            },
            x = function e(a, n, o, s, r, p, l, d, x, f, v, b, h) {
                var g,
                    y = a;
                if (
                    ("function" == typeof l
                        ? (y = l(n, y))
                        : y instanceof Date
                        ? (y = f(y))
                        : "comma" === o &&
                          c(y) &&
                          (y = t
                              .maybeMap(y, function (e) {
                                  return e instanceof Date ? f(e) : e;
                              })
                              .join(",")),
                    null === y)
                ) {
                    if (s) return p && !b ? p(n, m.encoder, h, "key") : n;
                    y = "";
                }
                if ("string" == typeof (g = y) || "number" == typeof g || "boolean" == typeof g || "symbol" === i(g) || "bigint" == typeof g || t.isBuffer(y))
                    return p ? [v(b ? n : p(n, m.encoder, h, "key")) + "=" + v(p(y, m.encoder, h, "value"))] : [v(n) + "=" + v(String(y))];
                var w,
                    k = [];
                if (void 0 === y) return k;
                if (c(l)) w = l;
                else {
                    var j = Object.keys(y);
                    w = d ? j.sort(d) : j;
                }
                for (var _ = 0; _ < w.length; ++_) {
                    var O = w[_],
                        S = y[O];
                    if (!r || null !== S) {
                        var z = c(y) ? ("function" == typeof o ? o(n, O) : n) : n + (x ? "." + O : "[" + O + "]");
                        u(k, e(S, z, o, s, r, p, l, d, x, f, v, b, h));
                    }
                }
                return k;
            };
        e.exports = function (e, a) {
            var n,
                t = e,
                p = (function (e) {
                    if (!e) return m;
                    if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder) throw new TypeError("Encoder has to be a function.");
                    var a = e.charset || m.charset;
                    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    var n = o.default;
                    if (void 0 !== e.format) {
                        if (!s.call(o.formatters, e.format)) throw new TypeError("Unknown format option provided.");
                        n = e.format;
                    }
                    var i = o.formatters[n],
                        t = m.filter;
                    return (
                        ("function" == typeof e.filter || c(e.filter)) && (t = e.filter),
                        {
                            addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : m.addQueryPrefix,
                            allowDots: void 0 === e.allowDots ? m.allowDots : !!e.allowDots,
                            charset: a,
                            charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : m.charsetSentinel,
                            delimiter: void 0 === e.delimiter ? m.delimiter : e.delimiter,
                            encode: "boolean" == typeof e.encode ? e.encode : m.encode,
                            encoder: "function" == typeof e.encoder ? e.encoder : m.encoder,
                            encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : m.encodeValuesOnly,
                            filter: t,
                            formatter: i,
                            serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : m.serializeDate,
                            skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : m.skipNulls,
                            sort: "function" == typeof e.sort ? e.sort : null,
                            strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : m.strictNullHandling,
                        }
                    );
                })(a);
            "function" == typeof p.filter ? (t = (0, p.filter)("", t)) : c(p.filter) && (n = p.filter);
            var l,
                d = [];
            if ("object" !== i(t) || null === t) return "";
            l = a && a.arrayFormat in r ? a.arrayFormat : a && "indices" in a ? (a.indices ? "indices" : "repeat") : "indices";
            var f = r[l];
            n || (n = Object.keys(t)), p.sort && n.sort(p.sort);
            for (var v = 0; v < n.length; ++v) {
                var b = n[v];
                (p.skipNulls && null === t[b]) || u(d, x(t[b], b, f, p.strictNullHandling, p.skipNulls, p.encode ? p.encoder : null, p.filter, p.sort, p.allowDots, p.serializeDate, p.formatter, p.encodeValuesOnly, p.charset));
            }
            var h = d.join(p.delimiter),
                g = !0 === p.addQueryPrefix ? "?" : "";
            return p.charsetSentinel && ("iso-8859-1" === p.charset ? (g += "utf8=%26%2310003%3B&") : (g += "utf8=%E2%9C%93&")), h.length > 0 ? g + h : "";
        };
    },
    function (e, a, n) {
        "use strict";
        var i = n(25),
            t = Object.prototype.hasOwnProperty,
            o = Array.isArray,
            s = {
                allowDots: !1,
                allowPrototypes: !1,
                arrayLimit: 20,
                charset: "utf-8",
                charsetSentinel: !1,
                comma: !1,
                decoder: i.decode,
                delimiter: "&",
                depth: 5,
                ignoreQueryPrefix: !1,
                interpretNumericEntities: !1,
                parameterLimit: 1e3,
                parseArrays: !0,
                plainObjects: !1,
                strictNullHandling: !1,
            },
            r = function (e) {
                return e.replace(/&#(\d+);/g, function (e, a) {
                    return String.fromCharCode(parseInt(a, 10));
                });
            },
            c = function (e, a) {
                return e && "string" == typeof e && a.comma && e.indexOf(",") > -1 ? e.split(",") : e;
            },
            p = function (e, a, n, i) {
                if (e) {
                    var o = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                        s = /(\[[^[\]]*])/g,
                        r = n.depth > 0 && /(\[[^[\]]*])/.exec(o),
                        p = r ? o.slice(0, r.index) : o,
                        u = [];
                    if (p) {
                        if (!n.plainObjects && t.call(Object.prototype, p) && !n.allowPrototypes) return;
                        u.push(p);
                    }
                    for (var l = 0; n.depth > 0 && null !== (r = s.exec(o)) && l < n.depth; ) {
                        if (((l += 1), !n.plainObjects && t.call(Object.prototype, r[1].slice(1, -1)) && !n.allowPrototypes)) return;
                        u.push(r[1]);
                    }
                    return (
                        r && u.push("[" + o.slice(r.index) + "]"),
                        (function (e, a, n, i) {
                            for (var t = i ? a : c(a, n), o = e.length - 1; o >= 0; --o) {
                                var s,
                                    r = e[o];
                                if ("[]" === r && n.parseArrays) s = [].concat(t);
                                else {
                                    s = n.plainObjects ? Object.create(null) : {};
                                    var p = "[" === r.charAt(0) && "]" === r.charAt(r.length - 1) ? r.slice(1, -1) : r,
                                        u = parseInt(p, 10);
                                    n.parseArrays || "" !== p ? (!isNaN(u) && r !== p && String(u) === p && u >= 0 && n.parseArrays && u <= n.arrayLimit ? ((s = [])[u] = t) : (s[p] = t)) : (s = { 0: t });
                                }
                                t = s;
                            }
                            return t;
                        })(u, a, n, i)
                    );
                }
            };
        e.exports = function (e, a) {
            var n = (function (e) {
                if (!e) return s;
                if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder) throw new TypeError("Decoder has to be a function.");
                if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                var a = void 0 === e.charset ? s.charset : e.charset;
                return {
                    allowDots: void 0 === e.allowDots ? s.allowDots : !!e.allowDots,
                    allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : s.allowPrototypes,
                    arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : s.arrayLimit,
                    charset: a,
                    charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : s.charsetSentinel,
                    comma: "boolean" == typeof e.comma ? e.comma : s.comma,
                    decoder: "function" == typeof e.decoder ? e.decoder : s.decoder,
                    delimiter: "string" == typeof e.delimiter || i.isRegExp(e.delimiter) ? e.delimiter : s.delimiter,
                    depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : s.depth,
                    ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                    interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : s.interpretNumericEntities,
                    parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : s.parameterLimit,
                    parseArrays: !1 !== e.parseArrays,
                    plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : s.plainObjects,
                    strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : s.strictNullHandling,
                };
            })(a);
            if ("" === e || null == e) return n.plainObjects ? Object.create(null) : {};
            for (
                var u =
                        "string" == typeof e
                            ? (function (e, a) {
                                  var n,
                                      p = {},
                                      u = a.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                                      l = a.parameterLimit === 1 / 0 ? void 0 : a.parameterLimit,
                                      d = u.split(a.delimiter, l),
                                      m = -1,
                                      x = a.charset;
                                  if (a.charsetSentinel)
                                      for (n = 0; n < d.length; ++n) 0 === d[n].indexOf("utf8=") && ("utf8=%E2%9C%93" === d[n] ? (x = "utf-8") : "utf8=%26%2310003%3B" === d[n] && (x = "iso-8859-1"), (m = n), (n = d.length));
                                  for (n = 0; n < d.length; ++n)
                                      if (n !== m) {
                                          var f,
                                              v,
                                              b = d[n],
                                              h = b.indexOf("]="),
                                              g = -1 === h ? b.indexOf("=") : h + 1;
                                          -1 === g
                                              ? ((f = a.decoder(b, s.decoder, x, "key")), (v = a.strictNullHandling ? null : ""))
                                              : ((f = a.decoder(b.slice(0, g), s.decoder, x, "key")),
                                                (v = i.maybeMap(c(b.slice(g + 1), a), function (e) {
                                                    return a.decoder(e, s.decoder, x, "value");
                                                }))),
                                              v && a.interpretNumericEntities && "iso-8859-1" === x && (v = r(v)),
                                              b.indexOf("[]=") > -1 && (v = o(v) ? [v] : v),
                                              t.call(p, f) ? (p[f] = i.combine(p[f], v)) : (p[f] = v);
                                      }
                                  return p;
                              })(e, n)
                            : e,
                    l = n.plainObjects ? Object.create(null) : {},
                    d = Object.keys(u),
                    m = 0;
                m < d.length;
                ++m
            ) {
                var x = d[m],
                    f = p(x, u[x], n, "string" == typeof e);
                l = i.merge(l, f, n);
            }
            return i.compact(l);
        };
    },
    function (e, a, n) {
        (function (e) {
            function a(e) {
                return (a =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            var n = (function (e) {
                "use strict";
                var n = Object.prototype,
                    i = n.hasOwnProperty,
                    t = "function" == typeof Symbol ? Symbol : {},
                    o = t.iterator || "@@iterator",
                    s = t.asyncIterator || "@@asyncIterator",
                    r = t.toStringTag || "@@toStringTag";
                function c(e, a, n, i) {
                    var t = a && a.prototype instanceof l ? a : l,
                        o = Object.create(t.prototype),
                        s = new j(i || []);
                    return (
                        (o._invoke = (function (e, a, n) {
                            var i = "suspendedStart";
                            return function (t, o) {
                                if ("executing" === i) throw new Error("Generator is already running");
                                if ("completed" === i) {
                                    if ("throw" === t) throw o;
                                    return O();
                                }
                                for (n.method = t, n.arg = o; ; ) {
                                    var s = n.delegate;
                                    if (s) {
                                        var r = y(s, n);
                                        if (r) {
                                            if (r === u) continue;
                                            return r;
                                        }
                                    }
                                    if ("next" === n.method) n.sent = n._sent = n.arg;
                                    else if ("throw" === n.method) {
                                        if ("suspendedStart" === i) throw ((i = "completed"), n.arg);
                                        n.dispatchException(n.arg);
                                    } else "return" === n.method && n.abrupt("return", n.arg);
                                    i = "executing";
                                    var c = p(e, a, n);
                                    if ("normal" === c.type) {
                                        if (((i = n.done ? "completed" : "suspendedYield"), c.arg === u)) continue;
                                        return { value: c.arg, done: n.done };
                                    }
                                    "throw" === c.type && ((i = "completed"), (n.method = "throw"), (n.arg = c.arg));
                                }
                            };
                        })(e, n, s)),
                        o
                    );
                }
                function p(e, a, n) {
                    try {
                        return { type: "normal", arg: e.call(a, n) };
                    } catch (e) {
                        return { type: "throw", arg: e };
                    }
                }
                e.wrap = c;
                var u = {};
                function l() {}
                function d() {}
                function m() {}
                var x = {};
                x[o] = function () {
                    return this;
                };
                var f = Object.getPrototypeOf,
                    v = f && f(f(_([])));
                v && v !== n && i.call(v, o) && (x = v);
                var b = (m.prototype = l.prototype = Object.create(x));
                function h(e) {
                    ["next", "throw", "return"].forEach(function (a) {
                        e[a] = function (e) {
                            return this._invoke(a, e);
                        };
                    });
                }
                function g(e, n) {
                    var t;
                    this._invoke = function (o, s) {
                        function r() {
                            return new n(function (t, r) {
                                !(function t(o, s, r, c) {
                                    var u = p(e[o], e, s);
                                    if ("throw" !== u.type) {
                                        var l = u.arg,
                                            d = l.value;
                                        return d && "object" === a(d) && i.call(d, "__await")
                                            ? n.resolve(d.__await).then(
                                                  function (e) {
                                                      t("next", e, r, c);
                                                  },
                                                  function (e) {
                                                      t("throw", e, r, c);
                                                  }
                                              )
                                            : n.resolve(d).then(
                                                  function (e) {
                                                      (l.value = e), r(l);
                                                  },
                                                  function (e) {
                                                      return t("throw", e, r, c);
                                                  }
                                              );
                                    }
                                    c(u.arg);
                                })(o, s, t, r);
                            });
                        }
                        return (t = t ? t.then(r, r) : r());
                    };
                }
                function y(e, a) {
                    var n = e.iterator[a.method];
                    if (void 0 === n) {
                        if (((a.delegate = null), "throw" === a.method)) {
                            if (e.iterator.return && ((a.method = "return"), (a.arg = void 0), y(e, a), "throw" === a.method)) return u;
                            (a.method = "throw"), (a.arg = new TypeError("The iterator does not provide a 'throw' method"));
                        }
                        return u;
                    }
                    var i = p(n, e.iterator, a.arg);
                    if ("throw" === i.type) return (a.method = "throw"), (a.arg = i.arg), (a.delegate = null), u;
                    var t = i.arg;
                    return t
                        ? t.done
                            ? ((a[e.resultName] = t.value), (a.next = e.nextLoc), "return" !== a.method && ((a.method = "next"), (a.arg = void 0)), (a.delegate = null), u)
                            : t
                        : ((a.method = "throw"), (a.arg = new TypeError("iterator result is not an object")), (a.delegate = null), u);
                }
                function w(e) {
                    var a = { tryLoc: e[0] };
                    1 in e && (a.catchLoc = e[1]), 2 in e && ((a.finallyLoc = e[2]), (a.afterLoc = e[3])), this.tryEntries.push(a);
                }
                function k(e) {
                    var a = e.completion || {};
                    (a.type = "normal"), delete a.arg, (e.completion = a);
                }
                function j(e) {
                    (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(w, this), this.reset(!0);
                }
                function _(e) {
                    if (e) {
                        var a = e[o];
                        if (a) return a.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                t = function a() {
                                    for (; ++n < e.length; ) if (i.call(e, n)) return (a.value = e[n]), (a.done = !1), a;
                                    return (a.value = void 0), (a.done = !0), a;
                                };
                            return (t.next = t);
                        }
                    }
                    return { next: O };
                }
                function O() {
                    return { value: void 0, done: !0 };
                }
                return (
                    (d.prototype = b.constructor = m),
                    (m.constructor = d),
                    (m[r] = d.displayName = "GeneratorFunction"),
                    (e.isGeneratorFunction = function (e) {
                        var a = "function" == typeof e && e.constructor;
                        return !!a && (a === d || "GeneratorFunction" === (a.displayName || a.name));
                    }),
                    (e.mark = function (e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : ((e.__proto__ = m), r in e || (e[r] = "GeneratorFunction")), (e.prototype = Object.create(b)), e;
                    }),
                    (e.awrap = function (e) {
                        return { __await: e };
                    }),
                    h(g.prototype),
                    (g.prototype[s] = function () {
                        return this;
                    }),
                    (e.AsyncIterator = g),
                    (e.async = function (a, n, i, t, o) {
                        void 0 === o && (o = Promise);
                        var s = new g(c(a, n, i, t), o);
                        return e.isGeneratorFunction(n)
                            ? s
                            : s.next().then(function (e) {
                                  return e.done ? e.value : s.next();
                              });
                    }),
                    h(b),
                    (b[r] = "Generator"),
                    (b[o] = function () {
                        return this;
                    }),
                    (b.toString = function () {
                        return "[object Generator]";
                    }),
                    (e.keys = function (e) {
                        var a = [];
                        for (var n in e) a.push(n);
                        return (
                            a.reverse(),
                            function n() {
                                for (; a.length; ) {
                                    var i = a.pop();
                                    if (i in e) return (n.value = i), (n.done = !1), n;
                                }
                                return (n.done = !0), n;
                            }
                        );
                    }),
                    (e.values = _),
                    (j.prototype = {
                        constructor: j,
                        reset: function (e) {
                            if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = void 0), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = void 0), this.tryEntries.forEach(k), !e))
                                for (var a in this) "t" === a.charAt(0) && i.call(this, a) && !isNaN(+a.slice(1)) && (this[a] = void 0);
                        },
                        stop: function () {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval;
                        },
                        dispatchException: function (e) {
                            if (this.done) throw e;
                            var a = this;
                            function n(n, i) {
                                return (s.type = "throw"), (s.arg = e), (a.next = n), i && ((a.method = "next"), (a.arg = void 0)), !!i;
                            }
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var o = this.tryEntries[t],
                                    s = o.completion;
                                if ("root" === o.tryLoc) return n("end");
                                if (o.tryLoc <= this.prev) {
                                    var r = i.call(o, "catchLoc"),
                                        c = i.call(o, "finallyLoc");
                                    if (r && c) {
                                        if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                        if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                                    } else if (r) {
                                        if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    } else {
                                        if (!c) throw new Error("try statement without catch or finally");
                                        if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                                    }
                                }
                            }
                        },
                        abrupt: function (e, a) {
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var t = this.tryEntries[n];
                                if (t.tryLoc <= this.prev && i.call(t, "finallyLoc") && this.prev < t.finallyLoc) {
                                    var o = t;
                                    break;
                                }
                            }
                            o && ("break" === e || "continue" === e) && o.tryLoc <= a && a <= o.finallyLoc && (o = null);
                            var s = o ? o.completion : {};
                            return (s.type = e), (s.arg = a), o ? ((this.method = "next"), (this.next = o.finallyLoc), u) : this.complete(s);
                        },
                        complete: function (e, a) {
                            if ("throw" === e.type) throw e.arg;
                            return (
                                "break" === e.type || "continue" === e.type
                                    ? (this.next = e.arg)
                                    : "return" === e.type
                                    ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                                    : "normal" === e.type && a && (this.next = a),
                                u
                            );
                        },
                        finish: function (e) {
                            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                                var n = this.tryEntries[a];
                                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), k(n), u;
                            }
                        },
                        catch: function (e) {
                            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                                var n = this.tryEntries[a];
                                if (n.tryLoc === e) {
                                    var i = n.completion;
                                    if ("throw" === i.type) {
                                        var t = i.arg;
                                        k(n);
                                    }
                                    return t;
                                }
                            }
                            throw new Error("illegal catch attempt");
                        },
                        delegateYield: function (e, a, n) {
                            return (this.delegate = { iterator: _(e), resultName: a, nextLoc: n }), "next" === this.method && (this.arg = void 0), u;
                        },
                    }),
                    e
                );
            })("object" === a(e) ? e.exports : {});
            try {
                regeneratorRuntime = n;
            } catch (e) {
                Function("r", "regeneratorRuntime = r")(n);
            }
        }.call(this, n(14)(e)));
    },
    function (e, a, n) {
        var i = n(26),
            t = n(47).Stream,
            o = n(139);
        function s() {
            (this.writable = !1),
                (this.readable = !0),
                (this.dataSize = 0),
                (this.maxDataSize = 2097152),
                (this.pauseStreams = !0),
                (this._released = !1),
                (this._streams = []),
                (this._currentStream = null),
                (this._insideLoop = !1),
                (this._pendingNext = !1);
        }
        (e.exports = s),
            i.inherits(s, t),
            (s.create = function (e) {
                var a = new this();
                for (var n in (e = e || {})) a[n] = e[n];
                return a;
            }),
            (s.isStreamLike = function (e) {
                return "function" != typeof e && "string" != typeof e && "boolean" != typeof e && "number" != typeof e && !Buffer.isBuffer(e);
            }),
            (s.prototype.append = function (e) {
                if (s.isStreamLike(e)) {
                    if (!(e instanceof o)) {
                        var a = o.create(e, { maxDataSize: 1 / 0, pauseStream: this.pauseStreams });
                        e.on("data", this._checkDataSize.bind(this)), (e = a);
                    }
                    this._handleErrors(e), this.pauseStreams && e.pause();
                }
                return this._streams.push(e), this;
            }),
            (s.prototype.pipe = function (e, a) {
                return t.prototype.pipe.call(this, e, a), this.resume(), e;
            }),
            (s.prototype._getNext = function () {
                if (((this._currentStream = null), this._insideLoop)) this._pendingNext = !0;
                else {
                    this._insideLoop = !0;
                    try {
                        do {
                            (this._pendingNext = !1), this._realGetNext();
                        } while (this._pendingNext);
                    } finally {
                        this._insideLoop = !1;
                    }
                }
            }),
            (s.prototype._realGetNext = function () {
                var e = this._streams.shift();
                void 0 !== e
                    ? "function" == typeof e
                        ? e(
                              function (e) {
                                  s.isStreamLike(e) && (e.on("data", this._checkDataSize.bind(this)), this._handleErrors(e)), this._pipeNext(e);
                              }.bind(this)
                          )
                        : this._pipeNext(e)
                    : this.end();
            }),
            (s.prototype._pipeNext = function (e) {
                if (((this._currentStream = e), s.isStreamLike(e))) return e.on("end", this._getNext.bind(this)), void e.pipe(this, { end: !1 });
                var a = e;
                this.write(a), this._getNext();
            }),
            (s.prototype._handleErrors = function (e) {
                var a = this;
                e.on("error", function (e) {
                    a._emitError(e);
                });
            }),
            (s.prototype.write = function (e) {
                this.emit("data", e);
            }),
            (s.prototype.pause = function () {
                this.pauseStreams && (this.pauseStreams && this._currentStream && "function" == typeof this._currentStream.pause && this._currentStream.pause(), this.emit("pause"));
            }),
            (s.prototype.resume = function () {
                this._released || ((this._released = !0), (this.writable = !0), this._getNext()),
                    this.pauseStreams && this._currentStream && "function" == typeof this._currentStream.resume && this._currentStream.resume(),
                    this.emit("resume");
            }),
            (s.prototype.end = function () {
                this._reset(), this.emit("end");
            }),
            (s.prototype.destroy = function () {
                this._reset(), this.emit("close");
            }),
            (s.prototype._reset = function () {
                (this.writable = !1), (this._streams = []), (this._currentStream = null);
            }),
            (s.prototype._checkDataSize = function () {
                if ((this._updateDataSize(), !(this.dataSize <= this.maxDataSize))) {
                    var e = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
                    this._emitError(new Error(e));
                }
            }),
            (s.prototype._updateDataSize = function () {
                this.dataSize = 0;
                var e = this;
                this._streams.forEach(function (a) {
                    a.dataSize && (e.dataSize += a.dataSize);
                }),
                    this._currentStream && this._currentStream.dataSize && (this.dataSize += this._currentStream.dataSize);
            }),
            (s.prototype._emitError = function (e) {
                this._reset(), this.emit("error", e);
            });
    },
    function (e, a, n) {
        var i = n(47).Stream,
            t = n(26);
        function o() {
            (this.source = null), (this.dataSize = 0), (this.maxDataSize = 1048576), (this.pauseStream = !0), (this._maxDataSizeExceeded = !1), (this._released = !1), (this._bufferedEvents = []);
        }
        (e.exports = o),
            t.inherits(o, i),
            (o.create = function (e, a) {
                var n = new this();
                for (var i in (a = a || {})) n[i] = a[i];
                n.source = e;
                var t = e.emit;
                return (
                    (e.emit = function () {
                        return n._handleEmit(arguments), t.apply(e, arguments);
                    }),
                    e.on("error", function () {}),
                    n.pauseStream && e.pause(),
                    n
                );
            }),
            Object.defineProperty(o.prototype, "readable", {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return this.source.readable;
                },
            }),
            (o.prototype.setEncoding = function () {
                return this.source.setEncoding.apply(this.source, arguments);
            }),
            (o.prototype.resume = function () {
                this._released || this.release(), this.source.resume();
            }),
            (o.prototype.pause = function () {
                this.source.pause();
            }),
            (o.prototype.release = function () {
                (this._released = !0),
                    this._bufferedEvents.forEach(
                        function (e) {
                            this.emit.apply(this, e);
                        }.bind(this)
                    ),
                    (this._bufferedEvents = []);
            }),
            (o.prototype.pipe = function () {
                var e = i.prototype.pipe.apply(this, arguments);
                return this.resume(), e;
            }),
            (o.prototype._handleEmit = function (e) {
                this._released ? this.emit.apply(this, e) : ("data" === e[0] && ((this.dataSize += e[1].length), this._checkIfMaxDataSizeExceeded()), this._bufferedEvents.push(e));
            }),
            (o.prototype._checkIfMaxDataSizeExceeded = function () {
                if (!(this._maxDataSizeExceeded || this.dataSize <= this.maxDataSize)) {
                    this._maxDataSizeExceeded = !0;
                    var e = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
                    this.emit("error", new Error(e));
                }
            });
    },
    function (e, a) {
        e.exports = require("http");
    },
    function (e, a) {
        e.exports = require("https");
    },
    function (e, a) {
        e.exports = require("url");
    },
    function (e, a, n) {
        "use strict";
        /*!
         * mime-types
         * Copyright(c) 2014 Jonathan Ong
         * Copyright(c) 2015 Douglas Christopher Wilson
         * MIT Licensed
         */ var i,
            t,
            o,
            s = n(144),
            r = n(48).extname,
            c = /^\s*([^;\s]*)(?:;|\s|$)/,
            p = /^text\//i;
        function u(e) {
            if (!e || "string" != typeof e) return !1;
            var a = c.exec(e),
                n = a && s[a[1].toLowerCase()];
            return n && n.charset ? n.charset : !(!a || !p.test(a[1])) && "UTF-8";
        }
        (a.charset = u),
            (a.charsets = { lookup: u }),
            (a.contentType = function (e) {
                if (!e || "string" != typeof e) return !1;
                var n = -1 === e.indexOf("/") ? a.lookup(e) : e;
                if (!n) return !1;
                if (-1 === n.indexOf("charset")) {
                    var i = a.charset(n);
                    i && (n += "; charset=" + i.toLowerCase());
                }
                return n;
            }),
            (a.extension = function (e) {
                if (!e || "string" != typeof e) return !1;
                var n = c.exec(e),
                    i = n && a.extensions[n[1].toLowerCase()];
                if (!i || !i.length) return !1;
                return i[0];
            }),
            (a.extensions = Object.create(null)),
            (a.lookup = function (e) {
                if (!e || "string" != typeof e) return !1;
                var n = r("x." + e)
                    .toLowerCase()
                    .substr(1);
                if (!n) return !1;
                return a.types[n] || !1;
            }),
            (a.types = Object.create(null)),
            (i = a.extensions),
            (t = a.types),
            (o = ["nginx", "apache", void 0, "iana"]),
            Object.keys(s).forEach(function (e) {
                var a = s[e],
                    n = a.extensions;
                if (n && n.length) {
                    i[e] = n;
                    for (var r = 0; r < n.length; r++) {
                        var c = n[r];
                        if (t[c]) {
                            var p = o.indexOf(s[t[c]].source),
                                u = o.indexOf(a.source);
                            if ("application/octet-stream" !== t[c] && (p > u || (p === u && "application/" === t[c].substr(0, 12)))) continue;
                        }
                        t[c] = e;
                    }
                }
            });
    },
    function (e, a, n) {
        /*!
         * mime-db
         * Copyright(c) 2014 Jonathan Ong
         * MIT Licensed
         */
        e.exports = n(145);
    },
    function (e) {
        e.exports = JSON.parse(
            '{"application/1d-interleaved-parityfec":{"source":"iana"},"application/3gpdash-qoe-report+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/3gpp-ims+xml":{"source":"iana","compressible":true},"application/a2l":{"source":"iana"},"application/activemessage":{"source":"iana"},"application/activity+json":{"source":"iana","compressible":true},"application/alto-costmap+json":{"source":"iana","compressible":true},"application/alto-costmapfilter+json":{"source":"iana","compressible":true},"application/alto-directory+json":{"source":"iana","compressible":true},"application/alto-endpointcost+json":{"source":"iana","compressible":true},"application/alto-endpointcostparams+json":{"source":"iana","compressible":true},"application/alto-endpointprop+json":{"source":"iana","compressible":true},"application/alto-endpointpropparams+json":{"source":"iana","compressible":true},"application/alto-error+json":{"source":"iana","compressible":true},"application/alto-networkmap+json":{"source":"iana","compressible":true},"application/alto-networkmapfilter+json":{"source":"iana","compressible":true},"application/alto-updatestreamcontrol+json":{"source":"iana","compressible":true},"application/alto-updatestreamparams+json":{"source":"iana","compressible":true},"application/aml":{"source":"iana"},"application/andrew-inset":{"source":"iana","extensions":["ez"]},"application/applefile":{"source":"iana"},"application/applixware":{"source":"apache","extensions":["aw"]},"application/atf":{"source":"iana"},"application/atfx":{"source":"iana"},"application/atom+xml":{"source":"iana","compressible":true,"extensions":["atom"]},"application/atomcat+xml":{"source":"iana","compressible":true,"extensions":["atomcat"]},"application/atomdeleted+xml":{"source":"iana","compressible":true,"extensions":["atomdeleted"]},"application/atomicmail":{"source":"iana"},"application/atomsvc+xml":{"source":"iana","compressible":true,"extensions":["atomsvc"]},"application/atsc-dwd+xml":{"source":"iana","compressible":true,"extensions":["dwd"]},"application/atsc-dynamic-event-message":{"source":"iana"},"application/atsc-held+xml":{"source":"iana","compressible":true,"extensions":["held"]},"application/atsc-rdt+json":{"source":"iana","compressible":true},"application/atsc-rsat+xml":{"source":"iana","compressible":true,"extensions":["rsat"]},"application/atxml":{"source":"iana"},"application/auth-policy+xml":{"source":"iana","compressible":true},"application/bacnet-xdd+zip":{"source":"iana","compressible":false},"application/batch-smtp":{"source":"iana"},"application/bdoc":{"compressible":false,"extensions":["bdoc"]},"application/beep+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/calendar+json":{"source":"iana","compressible":true},"application/calendar+xml":{"source":"iana","compressible":true,"extensions":["xcs"]},"application/call-completion":{"source":"iana"},"application/cals-1840":{"source":"iana"},"application/cap+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/cbor":{"source":"iana"},"application/cbor-seq":{"source":"iana"},"application/cccex":{"source":"iana"},"application/ccmp+xml":{"source":"iana","compressible":true},"application/ccxml+xml":{"source":"iana","compressible":true,"extensions":["ccxml"]},"application/cdfx+xml":{"source":"iana","compressible":true,"extensions":["cdfx"]},"application/cdmi-capability":{"source":"iana","extensions":["cdmia"]},"application/cdmi-container":{"source":"iana","extensions":["cdmic"]},"application/cdmi-domain":{"source":"iana","extensions":["cdmid"]},"application/cdmi-object":{"source":"iana","extensions":["cdmio"]},"application/cdmi-queue":{"source":"iana","extensions":["cdmiq"]},"application/cdni":{"source":"iana"},"application/cea":{"source":"iana"},"application/cea-2018+xml":{"source":"iana","compressible":true},"application/cellml+xml":{"source":"iana","compressible":true},"application/cfw":{"source":"iana"},"application/clue+xml":{"source":"iana","compressible":true},"application/clue_info+xml":{"source":"iana","compressible":true},"application/cms":{"source":"iana"},"application/cnrp+xml":{"source":"iana","compressible":true},"application/coap-group+json":{"source":"iana","compressible":true},"application/coap-payload":{"source":"iana"},"application/commonground":{"source":"iana"},"application/conference-info+xml":{"source":"iana","compressible":true},"application/cose":{"source":"iana"},"application/cose-key":{"source":"iana"},"application/cose-key-set":{"source":"iana"},"application/cpl+xml":{"source":"iana","compressible":true},"application/csrattrs":{"source":"iana"},"application/csta+xml":{"source":"iana","compressible":true},"application/cstadata+xml":{"source":"iana","compressible":true},"application/csvm+json":{"source":"iana","compressible":true},"application/cu-seeme":{"source":"apache","extensions":["cu"]},"application/cwt":{"source":"iana"},"application/cybercash":{"source":"iana"},"application/dart":{"compressible":true},"application/dash+xml":{"source":"iana","compressible":true,"extensions":["mpd"]},"application/dashdelta":{"source":"iana"},"application/davmount+xml":{"source":"iana","compressible":true,"extensions":["davmount"]},"application/dca-rft":{"source":"iana"},"application/dcd":{"source":"iana"},"application/dec-dx":{"source":"iana"},"application/dialog-info+xml":{"source":"iana","compressible":true},"application/dicom":{"source":"iana"},"application/dicom+json":{"source":"iana","compressible":true},"application/dicom+xml":{"source":"iana","compressible":true},"application/dii":{"source":"iana"},"application/dit":{"source":"iana"},"application/dns":{"source":"iana"},"application/dns+json":{"source":"iana","compressible":true},"application/dns-message":{"source":"iana"},"application/docbook+xml":{"source":"apache","compressible":true,"extensions":["dbk"]},"application/dots+cbor":{"source":"iana"},"application/dskpp+xml":{"source":"iana","compressible":true},"application/dssc+der":{"source":"iana","extensions":["dssc"]},"application/dssc+xml":{"source":"iana","compressible":true,"extensions":["xdssc"]},"application/dvcs":{"source":"iana"},"application/ecmascript":{"source":"iana","compressible":true,"extensions":["ecma","es"]},"application/edi-consent":{"source":"iana"},"application/edi-x12":{"source":"iana","compressible":false},"application/edifact":{"source":"iana","compressible":false},"application/efi":{"source":"iana"},"application/emergencycalldata.comment+xml":{"source":"iana","compressible":true},"application/emergencycalldata.control+xml":{"source":"iana","compressible":true},"application/emergencycalldata.deviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.ecall.msd":{"source":"iana"},"application/emergencycalldata.providerinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.serviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.subscriberinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.veds+xml":{"source":"iana","compressible":true},"application/emma+xml":{"source":"iana","compressible":true,"extensions":["emma"]},"application/emotionml+xml":{"source":"iana","compressible":true,"extensions":["emotionml"]},"application/encaprtp":{"source":"iana"},"application/epp+xml":{"source":"iana","compressible":true},"application/epub+zip":{"source":"iana","compressible":false,"extensions":["epub"]},"application/eshop":{"source":"iana"},"application/exi":{"source":"iana","extensions":["exi"]},"application/expect-ct-report+json":{"source":"iana","compressible":true},"application/fastinfoset":{"source":"iana"},"application/fastsoap":{"source":"iana"},"application/fdt+xml":{"source":"iana","compressible":true,"extensions":["fdt"]},"application/fhir+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/fhir+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/fido.trusted-apps+json":{"compressible":true},"application/fits":{"source":"iana"},"application/flexfec":{"source":"iana"},"application/font-sfnt":{"source":"iana"},"application/font-tdpfr":{"source":"iana","extensions":["pfr"]},"application/font-woff":{"source":"iana","compressible":false},"application/framework-attributes+xml":{"source":"iana","compressible":true},"application/geo+json":{"source":"iana","compressible":true,"extensions":["geojson"]},"application/geo+json-seq":{"source":"iana"},"application/geopackage+sqlite3":{"source":"iana"},"application/geoxacml+xml":{"source":"iana","compressible":true},"application/gltf-buffer":{"source":"iana"},"application/gml+xml":{"source":"iana","compressible":true,"extensions":["gml"]},"application/gpx+xml":{"source":"apache","compressible":true,"extensions":["gpx"]},"application/gxf":{"source":"apache","extensions":["gxf"]},"application/gzip":{"source":"iana","compressible":false,"extensions":["gz"]},"application/h224":{"source":"iana"},"application/held+xml":{"source":"iana","compressible":true},"application/hjson":{"extensions":["hjson"]},"application/http":{"source":"iana"},"application/hyperstudio":{"source":"iana","extensions":["stk"]},"application/ibe-key-request+xml":{"source":"iana","compressible":true},"application/ibe-pkg-reply+xml":{"source":"iana","compressible":true},"application/ibe-pp-data":{"source":"iana"},"application/iges":{"source":"iana"},"application/im-iscomposing+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/index":{"source":"iana"},"application/index.cmd":{"source":"iana"},"application/index.obj":{"source":"iana"},"application/index.response":{"source":"iana"},"application/index.vnd":{"source":"iana"},"application/inkml+xml":{"source":"iana","compressible":true,"extensions":["ink","inkml"]},"application/iotp":{"source":"iana"},"application/ipfix":{"source":"iana","extensions":["ipfix"]},"application/ipp":{"source":"iana"},"application/isup":{"source":"iana"},"application/its+xml":{"source":"iana","compressible":true,"extensions":["its"]},"application/java-archive":{"source":"apache","compressible":false,"extensions":["jar","war","ear"]},"application/java-serialized-object":{"source":"apache","compressible":false,"extensions":["ser"]},"application/java-vm":{"source":"apache","compressible":false,"extensions":["class"]},"application/javascript":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["js","mjs"]},"application/jf2feed+json":{"source":"iana","compressible":true},"application/jose":{"source":"iana"},"application/jose+json":{"source":"iana","compressible":true},"application/jrd+json":{"source":"iana","compressible":true},"application/json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["json","map"]},"application/json-patch+json":{"source":"iana","compressible":true},"application/json-seq":{"source":"iana"},"application/json5":{"extensions":["json5"]},"application/jsonml+json":{"source":"apache","compressible":true,"extensions":["jsonml"]},"application/jwk+json":{"source":"iana","compressible":true},"application/jwk-set+json":{"source":"iana","compressible":true},"application/jwt":{"source":"iana"},"application/kpml-request+xml":{"source":"iana","compressible":true},"application/kpml-response+xml":{"source":"iana","compressible":true},"application/ld+json":{"source":"iana","compressible":true,"extensions":["jsonld"]},"application/lgr+xml":{"source":"iana","compressible":true,"extensions":["lgr"]},"application/link-format":{"source":"iana"},"application/load-control+xml":{"source":"iana","compressible":true},"application/lost+xml":{"source":"iana","compressible":true,"extensions":["lostxml"]},"application/lostsync+xml":{"source":"iana","compressible":true},"application/lpf+zip":{"source":"iana","compressible":false},"application/lxf":{"source":"iana"},"application/mac-binhex40":{"source":"iana","extensions":["hqx"]},"application/mac-compactpro":{"source":"apache","extensions":["cpt"]},"application/macwriteii":{"source":"iana"},"application/mads+xml":{"source":"iana","compressible":true,"extensions":["mads"]},"application/manifest+json":{"charset":"UTF-8","compressible":true,"extensions":["webmanifest"]},"application/marc":{"source":"iana","extensions":["mrc"]},"application/marcxml+xml":{"source":"iana","compressible":true,"extensions":["mrcx"]},"application/mathematica":{"source":"iana","extensions":["ma","nb","mb"]},"application/mathml+xml":{"source":"iana","compressible":true,"extensions":["mathml"]},"application/mathml-content+xml":{"source":"iana","compressible":true},"application/mathml-presentation+xml":{"source":"iana","compressible":true},"application/mbms-associated-procedure-description+xml":{"source":"iana","compressible":true},"application/mbms-deregister+xml":{"source":"iana","compressible":true},"application/mbms-envelope+xml":{"source":"iana","compressible":true},"application/mbms-msk+xml":{"source":"iana","compressible":true},"application/mbms-msk-response+xml":{"source":"iana","compressible":true},"application/mbms-protection-description+xml":{"source":"iana","compressible":true},"application/mbms-reception-report+xml":{"source":"iana","compressible":true},"application/mbms-register+xml":{"source":"iana","compressible":true},"application/mbms-register-response+xml":{"source":"iana","compressible":true},"application/mbms-schedule+xml":{"source":"iana","compressible":true},"application/mbms-user-service-description+xml":{"source":"iana","compressible":true},"application/mbox":{"source":"iana","extensions":["mbox"]},"application/media-policy-dataset+xml":{"source":"iana","compressible":true},"application/media_control+xml":{"source":"iana","compressible":true},"application/mediaservercontrol+xml":{"source":"iana","compressible":true,"extensions":["mscml"]},"application/merge-patch+json":{"source":"iana","compressible":true},"application/metalink+xml":{"source":"apache","compressible":true,"extensions":["metalink"]},"application/metalink4+xml":{"source":"iana","compressible":true,"extensions":["meta4"]},"application/mets+xml":{"source":"iana","compressible":true,"extensions":["mets"]},"application/mf4":{"source":"iana"},"application/mikey":{"source":"iana"},"application/mipc":{"source":"iana"},"application/mmt-aei+xml":{"source":"iana","compressible":true,"extensions":["maei"]},"application/mmt-usd+xml":{"source":"iana","compressible":true,"extensions":["musd"]},"application/mods+xml":{"source":"iana","compressible":true,"extensions":["mods"]},"application/moss-keys":{"source":"iana"},"application/moss-signature":{"source":"iana"},"application/mosskey-data":{"source":"iana"},"application/mosskey-request":{"source":"iana"},"application/mp21":{"source":"iana","extensions":["m21","mp21"]},"application/mp4":{"source":"iana","extensions":["mp4s","m4p"]},"application/mpeg4-generic":{"source":"iana"},"application/mpeg4-iod":{"source":"iana"},"application/mpeg4-iod-xmt":{"source":"iana"},"application/mrb-consumer+xml":{"source":"iana","compressible":true,"extensions":["xdf"]},"application/mrb-publish+xml":{"source":"iana","compressible":true,"extensions":["xdf"]},"application/msc-ivr+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msc-mixer+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msword":{"source":"iana","compressible":false,"extensions":["doc","dot"]},"application/mud+json":{"source":"iana","compressible":true},"application/multipart-core":{"source":"iana"},"application/mxf":{"source":"iana","extensions":["mxf"]},"application/n-quads":{"source":"iana","extensions":["nq"]},"application/n-triples":{"source":"iana","extensions":["nt"]},"application/nasdata":{"source":"iana"},"application/news-checkgroups":{"source":"iana","charset":"US-ASCII"},"application/news-groupinfo":{"source":"iana","charset":"US-ASCII"},"application/news-transmission":{"source":"iana"},"application/nlsml+xml":{"source":"iana","compressible":true},"application/node":{"source":"iana","extensions":["cjs"]},"application/nss":{"source":"iana"},"application/ocsp-request":{"source":"iana"},"application/ocsp-response":{"source":"iana"},"application/octet-stream":{"source":"iana","compressible":false,"extensions":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"]},"application/oda":{"source":"iana","extensions":["oda"]},"application/odm+xml":{"source":"iana","compressible":true},"application/odx":{"source":"iana"},"application/oebps-package+xml":{"source":"iana","compressible":true,"extensions":["opf"]},"application/ogg":{"source":"iana","compressible":false,"extensions":["ogx"]},"application/omdoc+xml":{"source":"apache","compressible":true,"extensions":["omdoc"]},"application/onenote":{"source":"apache","extensions":["onetoc","onetoc2","onetmp","onepkg"]},"application/oscore":{"source":"iana"},"application/oxps":{"source":"iana","extensions":["oxps"]},"application/p2p-overlay+xml":{"source":"iana","compressible":true,"extensions":["relo"]},"application/parityfec":{"source":"iana"},"application/passport":{"source":"iana"},"application/patch-ops-error+xml":{"source":"iana","compressible":true,"extensions":["xer"]},"application/pdf":{"source":"iana","compressible":false,"extensions":["pdf"]},"application/pdx":{"source":"iana"},"application/pem-certificate-chain":{"source":"iana"},"application/pgp-encrypted":{"source":"iana","compressible":false,"extensions":["pgp"]},"application/pgp-keys":{"source":"iana"},"application/pgp-signature":{"source":"iana","extensions":["asc","sig"]},"application/pics-rules":{"source":"apache","extensions":["prf"]},"application/pidf+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pidf-diff+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pkcs10":{"source":"iana","extensions":["p10"]},"application/pkcs12":{"source":"iana"},"application/pkcs7-mime":{"source":"iana","extensions":["p7m","p7c"]},"application/pkcs7-signature":{"source":"iana","extensions":["p7s"]},"application/pkcs8":{"source":"iana","extensions":["p8"]},"application/pkcs8-encrypted":{"source":"iana"},"application/pkix-attr-cert":{"source":"iana","extensions":["ac"]},"application/pkix-cert":{"source":"iana","extensions":["cer"]},"application/pkix-crl":{"source":"iana","extensions":["crl"]},"application/pkix-pkipath":{"source":"iana","extensions":["pkipath"]},"application/pkixcmp":{"source":"iana","extensions":["pki"]},"application/pls+xml":{"source":"iana","compressible":true,"extensions":["pls"]},"application/poc-settings+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/postscript":{"source":"iana","compressible":true,"extensions":["ai","eps","ps"]},"application/ppsp-tracker+json":{"source":"iana","compressible":true},"application/problem+json":{"source":"iana","compressible":true},"application/problem+xml":{"source":"iana","compressible":true},"application/provenance+xml":{"source":"iana","compressible":true,"extensions":["provx"]},"application/prs.alvestrand.titrax-sheet":{"source":"iana"},"application/prs.cww":{"source":"iana","extensions":["cww"]},"application/prs.hpub+zip":{"source":"iana","compressible":false},"application/prs.nprend":{"source":"iana"},"application/prs.plucker":{"source":"iana"},"application/prs.rdf-xml-crypt":{"source":"iana"},"application/prs.xsf+xml":{"source":"iana","compressible":true},"application/pskc+xml":{"source":"iana","compressible":true,"extensions":["pskcxml"]},"application/pvd+json":{"source":"iana","compressible":true},"application/qsig":{"source":"iana"},"application/raml+yaml":{"compressible":true,"extensions":["raml"]},"application/raptorfec":{"source":"iana"},"application/rdap+json":{"source":"iana","compressible":true},"application/rdf+xml":{"source":"iana","compressible":true,"extensions":["rdf","owl"]},"application/reginfo+xml":{"source":"iana","compressible":true,"extensions":["rif"]},"application/relax-ng-compact-syntax":{"source":"iana","extensions":["rnc"]},"application/remote-printing":{"source":"iana"},"application/reputon+json":{"source":"iana","compressible":true},"application/resource-lists+xml":{"source":"iana","compressible":true,"extensions":["rl"]},"application/resource-lists-diff+xml":{"source":"iana","compressible":true,"extensions":["rld"]},"application/rfc+xml":{"source":"iana","compressible":true},"application/riscos":{"source":"iana"},"application/rlmi+xml":{"source":"iana","compressible":true},"application/rls-services+xml":{"source":"iana","compressible":true,"extensions":["rs"]},"application/route-apd+xml":{"source":"iana","compressible":true,"extensions":["rapd"]},"application/route-s-tsid+xml":{"source":"iana","compressible":true,"extensions":["sls"]},"application/route-usd+xml":{"source":"iana","compressible":true,"extensions":["rusd"]},"application/rpki-ghostbusters":{"source":"iana","extensions":["gbr"]},"application/rpki-manifest":{"source":"iana","extensions":["mft"]},"application/rpki-publication":{"source":"iana"},"application/rpki-roa":{"source":"iana","extensions":["roa"]},"application/rpki-updown":{"source":"iana"},"application/rsd+xml":{"source":"apache","compressible":true,"extensions":["rsd"]},"application/rss+xml":{"source":"apache","compressible":true,"extensions":["rss"]},"application/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"application/rtploopback":{"source":"iana"},"application/rtx":{"source":"iana"},"application/samlassertion+xml":{"source":"iana","compressible":true},"application/samlmetadata+xml":{"source":"iana","compressible":true},"application/sbe":{"source":"iana"},"application/sbml+xml":{"source":"iana","compressible":true,"extensions":["sbml"]},"application/scaip+xml":{"source":"iana","compressible":true},"application/scim+json":{"source":"iana","compressible":true},"application/scvp-cv-request":{"source":"iana","extensions":["scq"]},"application/scvp-cv-response":{"source":"iana","extensions":["scs"]},"application/scvp-vp-request":{"source":"iana","extensions":["spq"]},"application/scvp-vp-response":{"source":"iana","extensions":["spp"]},"application/sdp":{"source":"iana","extensions":["sdp"]},"application/secevent+jwt":{"source":"iana"},"application/senml+cbor":{"source":"iana"},"application/senml+json":{"source":"iana","compressible":true},"application/senml+xml":{"source":"iana","compressible":true,"extensions":["senmlx"]},"application/senml-etch+cbor":{"source":"iana"},"application/senml-etch+json":{"source":"iana","compressible":true},"application/senml-exi":{"source":"iana"},"application/sensml+cbor":{"source":"iana"},"application/sensml+json":{"source":"iana","compressible":true},"application/sensml+xml":{"source":"iana","compressible":true,"extensions":["sensmlx"]},"application/sensml-exi":{"source":"iana"},"application/sep+xml":{"source":"iana","compressible":true},"application/sep-exi":{"source":"iana"},"application/session-info":{"source":"iana"},"application/set-payment":{"source":"iana"},"application/set-payment-initiation":{"source":"iana","extensions":["setpay"]},"application/set-registration":{"source":"iana"},"application/set-registration-initiation":{"source":"iana","extensions":["setreg"]},"application/sgml":{"source":"iana"},"application/sgml-open-catalog":{"source":"iana"},"application/shf+xml":{"source":"iana","compressible":true,"extensions":["shf"]},"application/sieve":{"source":"iana","extensions":["siv","sieve"]},"application/simple-filter+xml":{"source":"iana","compressible":true},"application/simple-message-summary":{"source":"iana"},"application/simplesymbolcontainer":{"source":"iana"},"application/sipc":{"source":"iana"},"application/slate":{"source":"iana"},"application/smil":{"source":"iana"},"application/smil+xml":{"source":"iana","compressible":true,"extensions":["smi","smil"]},"application/smpte336m":{"source":"iana"},"application/soap+fastinfoset":{"source":"iana"},"application/soap+xml":{"source":"iana","compressible":true},"application/sparql-query":{"source":"iana","extensions":["rq"]},"application/sparql-results+xml":{"source":"iana","compressible":true,"extensions":["srx"]},"application/spirits-event+xml":{"source":"iana","compressible":true},"application/sql":{"source":"iana"},"application/srgs":{"source":"iana","extensions":["gram"]},"application/srgs+xml":{"source":"iana","compressible":true,"extensions":["grxml"]},"application/sru+xml":{"source":"iana","compressible":true,"extensions":["sru"]},"application/ssdl+xml":{"source":"apache","compressible":true,"extensions":["ssdl"]},"application/ssml+xml":{"source":"iana","compressible":true,"extensions":["ssml"]},"application/stix+json":{"source":"iana","compressible":true},"application/swid+xml":{"source":"iana","compressible":true,"extensions":["swidtag"]},"application/tamp-apex-update":{"source":"iana"},"application/tamp-apex-update-confirm":{"source":"iana"},"application/tamp-community-update":{"source":"iana"},"application/tamp-community-update-confirm":{"source":"iana"},"application/tamp-error":{"source":"iana"},"application/tamp-sequence-adjust":{"source":"iana"},"application/tamp-sequence-adjust-confirm":{"source":"iana"},"application/tamp-status-query":{"source":"iana"},"application/tamp-status-response":{"source":"iana"},"application/tamp-update":{"source":"iana"},"application/tamp-update-confirm":{"source":"iana"},"application/tar":{"compressible":true},"application/taxii+json":{"source":"iana","compressible":true},"application/td+json":{"source":"iana","compressible":true},"application/tei+xml":{"source":"iana","compressible":true,"extensions":["tei","teicorpus"]},"application/tetra_isi":{"source":"iana"},"application/thraud+xml":{"source":"iana","compressible":true,"extensions":["tfi"]},"application/timestamp-query":{"source":"iana"},"application/timestamp-reply":{"source":"iana"},"application/timestamped-data":{"source":"iana","extensions":["tsd"]},"application/tlsrpt+gzip":{"source":"iana"},"application/tlsrpt+json":{"source":"iana","compressible":true},"application/tnauthlist":{"source":"iana"},"application/toml":{"compressible":true,"extensions":["toml"]},"application/trickle-ice-sdpfrag":{"source":"iana"},"application/trig":{"source":"iana"},"application/ttml+xml":{"source":"iana","compressible":true,"extensions":["ttml"]},"application/tve-trigger":{"source":"iana"},"application/tzif":{"source":"iana"},"application/tzif-leap":{"source":"iana"},"application/ulpfec":{"source":"iana"},"application/urc-grpsheet+xml":{"source":"iana","compressible":true},"application/urc-ressheet+xml":{"source":"iana","compressible":true,"extensions":["rsheet"]},"application/urc-targetdesc+xml":{"source":"iana","compressible":true},"application/urc-uisocketdesc+xml":{"source":"iana","compressible":true},"application/vcard+json":{"source":"iana","compressible":true},"application/vcard+xml":{"source":"iana","compressible":true},"application/vemmi":{"source":"iana"},"application/vividence.scriptfile":{"source":"apache"},"application/vnd.1000minds.decision-model+xml":{"source":"iana","compressible":true,"extensions":["1km"]},"application/vnd.3gpp-prose+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-prose-pc3ch+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-v2x-local-service-information":{"source":"iana"},"application/vnd.3gpp.access-transfer-events+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.bsf+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gmop+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mc-signalling-ear":{"source":"iana"},"application/vnd.3gpp.mcdata-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-payload":{"source":"iana"},"application/vnd.3gpp.mcdata-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-signalling":{"source":"iana"},"application/vnd.3gpp.mcdata-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-floor-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-signed+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-init-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-transmission-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mid-call+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.pic-bw-large":{"source":"iana","extensions":["plb"]},"application/vnd.3gpp.pic-bw-small":{"source":"iana","extensions":["psb"]},"application/vnd.3gpp.pic-bw-var":{"source":"iana","extensions":["pvb"]},"application/vnd.3gpp.sms":{"source":"iana"},"application/vnd.3gpp.sms+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-ext+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.state-and-event-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ussd+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.bcmcsinfo+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.sms":{"source":"iana"},"application/vnd.3gpp2.tcap":{"source":"iana","extensions":["tcap"]},"application/vnd.3lightssoftware.imagescal":{"source":"iana"},"application/vnd.3m.post-it-notes":{"source":"iana","extensions":["pwn"]},"application/vnd.accpac.simply.aso":{"source":"iana","extensions":["aso"]},"application/vnd.accpac.simply.imp":{"source":"iana","extensions":["imp"]},"application/vnd.acucobol":{"source":"iana","extensions":["acu"]},"application/vnd.acucorp":{"source":"iana","extensions":["atc","acutc"]},"application/vnd.adobe.air-application-installer-package+zip":{"source":"apache","compressible":false,"extensions":["air"]},"application/vnd.adobe.flash.movie":{"source":"iana"},"application/vnd.adobe.formscentral.fcdt":{"source":"iana","extensions":["fcdt"]},"application/vnd.adobe.fxp":{"source":"iana","extensions":["fxp","fxpl"]},"application/vnd.adobe.partial-upload":{"source":"iana"},"application/vnd.adobe.xdp+xml":{"source":"iana","compressible":true,"extensions":["xdp"]},"application/vnd.adobe.xfdf":{"source":"iana","extensions":["xfdf"]},"application/vnd.aether.imp":{"source":"iana"},"application/vnd.afpc.afplinedata":{"source":"iana"},"application/vnd.afpc.afplinedata-pagedef":{"source":"iana"},"application/vnd.afpc.foca-charset":{"source":"iana"},"application/vnd.afpc.foca-codedfont":{"source":"iana"},"application/vnd.afpc.foca-codepage":{"source":"iana"},"application/vnd.afpc.modca":{"source":"iana"},"application/vnd.afpc.modca-formdef":{"source":"iana"},"application/vnd.afpc.modca-mediummap":{"source":"iana"},"application/vnd.afpc.modca-objectcontainer":{"source":"iana"},"application/vnd.afpc.modca-overlay":{"source":"iana"},"application/vnd.afpc.modca-pagesegment":{"source":"iana"},"application/vnd.ah-barcode":{"source":"iana"},"application/vnd.ahead.space":{"source":"iana","extensions":["ahead"]},"application/vnd.airzip.filesecure.azf":{"source":"iana","extensions":["azf"]},"application/vnd.airzip.filesecure.azs":{"source":"iana","extensions":["azs"]},"application/vnd.amadeus+json":{"source":"iana","compressible":true},"application/vnd.amazon.ebook":{"source":"apache","extensions":["azw"]},"application/vnd.amazon.mobi8-ebook":{"source":"iana"},"application/vnd.americandynamics.acc":{"source":"iana","extensions":["acc"]},"application/vnd.amiga.ami":{"source":"iana","extensions":["ami"]},"application/vnd.amundsen.maze+xml":{"source":"iana","compressible":true},"application/vnd.android.ota":{"source":"iana"},"application/vnd.android.package-archive":{"source":"apache","compressible":false,"extensions":["apk"]},"application/vnd.anki":{"source":"iana"},"application/vnd.anser-web-certificate-issue-initiation":{"source":"iana","extensions":["cii"]},"application/vnd.anser-web-funds-transfer-initiation":{"source":"apache","extensions":["fti"]},"application/vnd.antix.game-component":{"source":"iana","extensions":["atx"]},"application/vnd.apache.thrift.binary":{"source":"iana"},"application/vnd.apache.thrift.compact":{"source":"iana"},"application/vnd.apache.thrift.json":{"source":"iana"},"application/vnd.api+json":{"source":"iana","compressible":true},"application/vnd.aplextor.warrp+json":{"source":"iana","compressible":true},"application/vnd.apothekende.reservation+json":{"source":"iana","compressible":true},"application/vnd.apple.installer+xml":{"source":"iana","compressible":true,"extensions":["mpkg"]},"application/vnd.apple.keynote":{"source":"iana","extensions":["keynote"]},"application/vnd.apple.mpegurl":{"source":"iana","extensions":["m3u8"]},"application/vnd.apple.numbers":{"source":"iana","extensions":["numbers"]},"application/vnd.apple.pages":{"source":"iana","extensions":["pages"]},"application/vnd.apple.pkpass":{"compressible":false,"extensions":["pkpass"]},"application/vnd.arastra.swi":{"source":"iana"},"application/vnd.aristanetworks.swi":{"source":"iana","extensions":["swi"]},"application/vnd.artisan+json":{"source":"iana","compressible":true},"application/vnd.artsquare":{"source":"iana"},"application/vnd.astraea-software.iota":{"source":"iana","extensions":["iota"]},"application/vnd.audiograph":{"source":"iana","extensions":["aep"]},"application/vnd.autopackage":{"source":"iana"},"application/vnd.avalon+json":{"source":"iana","compressible":true},"application/vnd.avistar+xml":{"source":"iana","compressible":true},"application/vnd.balsamiq.bmml+xml":{"source":"iana","compressible":true,"extensions":["bmml"]},"application/vnd.balsamiq.bmpr":{"source":"iana"},"application/vnd.banana-accounting":{"source":"iana"},"application/vnd.bbf.usp.error":{"source":"iana"},"application/vnd.bbf.usp.msg":{"source":"iana"},"application/vnd.bbf.usp.msg+json":{"source":"iana","compressible":true},"application/vnd.bekitzur-stech+json":{"source":"iana","compressible":true},"application/vnd.bint.med-content":{"source":"iana"},"application/vnd.biopax.rdf+xml":{"source":"iana","compressible":true},"application/vnd.blink-idb-value-wrapper":{"source":"iana"},"application/vnd.blueice.multipass":{"source":"iana","extensions":["mpm"]},"application/vnd.bluetooth.ep.oob":{"source":"iana"},"application/vnd.bluetooth.le.oob":{"source":"iana"},"application/vnd.bmi":{"source":"iana","extensions":["bmi"]},"application/vnd.bpf":{"source":"iana"},"application/vnd.bpf3":{"source":"iana"},"application/vnd.businessobjects":{"source":"iana","extensions":["rep"]},"application/vnd.byu.uapi+json":{"source":"iana","compressible":true},"application/vnd.cab-jscript":{"source":"iana"},"application/vnd.canon-cpdl":{"source":"iana"},"application/vnd.canon-lips":{"source":"iana"},"application/vnd.capasystems-pg+json":{"source":"iana","compressible":true},"application/vnd.cendio.thinlinc.clientconf":{"source":"iana"},"application/vnd.century-systems.tcp_stream":{"source":"iana"},"application/vnd.chemdraw+xml":{"source":"iana","compressible":true,"extensions":["cdxml"]},"application/vnd.chess-pgn":{"source":"iana"},"application/vnd.chipnuts.karaoke-mmd":{"source":"iana","extensions":["mmd"]},"application/vnd.ciedi":{"source":"iana"},"application/vnd.cinderella":{"source":"iana","extensions":["cdy"]},"application/vnd.cirpack.isdn-ext":{"source":"iana"},"application/vnd.citationstyles.style+xml":{"source":"iana","compressible":true,"extensions":["csl"]},"application/vnd.claymore":{"source":"iana","extensions":["cla"]},"application/vnd.cloanto.rp9":{"source":"iana","extensions":["rp9"]},"application/vnd.clonk.c4group":{"source":"iana","extensions":["c4g","c4d","c4f","c4p","c4u"]},"application/vnd.cluetrust.cartomobile-config":{"source":"iana","extensions":["c11amc"]},"application/vnd.cluetrust.cartomobile-config-pkg":{"source":"iana","extensions":["c11amz"]},"application/vnd.coffeescript":{"source":"iana"},"application/vnd.collabio.xodocuments.document":{"source":"iana"},"application/vnd.collabio.xodocuments.document-template":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation-template":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet-template":{"source":"iana"},"application/vnd.collection+json":{"source":"iana","compressible":true},"application/vnd.collection.doc+json":{"source":"iana","compressible":true},"application/vnd.collection.next+json":{"source":"iana","compressible":true},"application/vnd.comicbook+zip":{"source":"iana","compressible":false},"application/vnd.comicbook-rar":{"source":"iana"},"application/vnd.commerce-battelle":{"source":"iana"},"application/vnd.commonspace":{"source":"iana","extensions":["csp"]},"application/vnd.contact.cmsg":{"source":"iana","extensions":["cdbcmsg"]},"application/vnd.coreos.ignition+json":{"source":"iana","compressible":true},"application/vnd.cosmocaller":{"source":"iana","extensions":["cmc"]},"application/vnd.crick.clicker":{"source":"iana","extensions":["clkx"]},"application/vnd.crick.clicker.keyboard":{"source":"iana","extensions":["clkk"]},"application/vnd.crick.clicker.palette":{"source":"iana","extensions":["clkp"]},"application/vnd.crick.clicker.template":{"source":"iana","extensions":["clkt"]},"application/vnd.crick.clicker.wordbank":{"source":"iana","extensions":["clkw"]},"application/vnd.criticaltools.wbs+xml":{"source":"iana","compressible":true,"extensions":["wbs"]},"application/vnd.cryptii.pipe+json":{"source":"iana","compressible":true},"application/vnd.crypto-shade-file":{"source":"iana"},"application/vnd.ctc-posml":{"source":"iana","extensions":["pml"]},"application/vnd.ctct.ws+xml":{"source":"iana","compressible":true},"application/vnd.cups-pdf":{"source":"iana"},"application/vnd.cups-postscript":{"source":"iana"},"application/vnd.cups-ppd":{"source":"iana","extensions":["ppd"]},"application/vnd.cups-raster":{"source":"iana"},"application/vnd.cups-raw":{"source":"iana"},"application/vnd.curl":{"source":"iana"},"application/vnd.curl.car":{"source":"apache","extensions":["car"]},"application/vnd.curl.pcurl":{"source":"apache","extensions":["pcurl"]},"application/vnd.cyan.dean.root+xml":{"source":"iana","compressible":true},"application/vnd.cybank":{"source":"iana"},"application/vnd.d2l.coursepackage1p0+zip":{"source":"iana","compressible":false},"application/vnd.dart":{"source":"iana","compressible":true,"extensions":["dart"]},"application/vnd.data-vision.rdz":{"source":"iana","extensions":["rdz"]},"application/vnd.datapackage+json":{"source":"iana","compressible":true},"application/vnd.dataresource+json":{"source":"iana","compressible":true},"application/vnd.dbf":{"source":"iana"},"application/vnd.debian.binary-package":{"source":"iana"},"application/vnd.dece.data":{"source":"iana","extensions":["uvf","uvvf","uvd","uvvd"]},"application/vnd.dece.ttml+xml":{"source":"iana","compressible":true,"extensions":["uvt","uvvt"]},"application/vnd.dece.unspecified":{"source":"iana","extensions":["uvx","uvvx"]},"application/vnd.dece.zip":{"source":"iana","extensions":["uvz","uvvz"]},"application/vnd.denovo.fcselayout-link":{"source":"iana","extensions":["fe_launch"]},"application/vnd.desmume.movie":{"source":"iana"},"application/vnd.dir-bi.plate-dl-nosuffix":{"source":"iana"},"application/vnd.dm.delegation+xml":{"source":"iana","compressible":true},"application/vnd.dna":{"source":"iana","extensions":["dna"]},"application/vnd.document+json":{"source":"iana","compressible":true},"application/vnd.dolby.mlp":{"source":"apache","extensions":["mlp"]},"application/vnd.dolby.mobile.1":{"source":"iana"},"application/vnd.dolby.mobile.2":{"source":"iana"},"application/vnd.doremir.scorecloud-binary-document":{"source":"iana"},"application/vnd.dpgraph":{"source":"iana","extensions":["dpg"]},"application/vnd.dreamfactory":{"source":"iana","extensions":["dfac"]},"application/vnd.drive+json":{"source":"iana","compressible":true},"application/vnd.ds-keypoint":{"source":"apache","extensions":["kpxx"]},"application/vnd.dtg.local":{"source":"iana"},"application/vnd.dtg.local.flash":{"source":"iana"},"application/vnd.dtg.local.html":{"source":"iana"},"application/vnd.dvb.ait":{"source":"iana","extensions":["ait"]},"application/vnd.dvb.dvbisl+xml":{"source":"iana","compressible":true},"application/vnd.dvb.dvbj":{"source":"iana"},"application/vnd.dvb.esgcontainer":{"source":"iana"},"application/vnd.dvb.ipdcdftnotifaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess2":{"source":"iana"},"application/vnd.dvb.ipdcesgpdd":{"source":"iana"},"application/vnd.dvb.ipdcroaming":{"source":"iana"},"application/vnd.dvb.iptv.alfec-base":{"source":"iana"},"application/vnd.dvb.iptv.alfec-enhancement":{"source":"iana"},"application/vnd.dvb.notif-aggregate-root+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-container+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-generic+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-msglist+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-request+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-response+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-init+xml":{"source":"iana","compressible":true},"application/vnd.dvb.pfr":{"source":"iana"},"application/vnd.dvb.service":{"source":"iana","extensions":["svc"]},"application/vnd.dxr":{"source":"iana"},"application/vnd.dynageo":{"source":"iana","extensions":["geo"]},"application/vnd.dzr":{"source":"iana"},"application/vnd.easykaraoke.cdgdownload":{"source":"iana"},"application/vnd.ecdis-update":{"source":"iana"},"application/vnd.ecip.rlp":{"source":"iana"},"application/vnd.ecowin.chart":{"source":"iana","extensions":["mag"]},"application/vnd.ecowin.filerequest":{"source":"iana"},"application/vnd.ecowin.fileupdate":{"source":"iana"},"application/vnd.ecowin.series":{"source":"iana"},"application/vnd.ecowin.seriesrequest":{"source":"iana"},"application/vnd.ecowin.seriesupdate":{"source":"iana"},"application/vnd.efi.img":{"source":"iana"},"application/vnd.efi.iso":{"source":"iana"},"application/vnd.emclient.accessrequest+xml":{"source":"iana","compressible":true},"application/vnd.enliven":{"source":"iana","extensions":["nml"]},"application/vnd.enphase.envoy":{"source":"iana"},"application/vnd.eprints.data+xml":{"source":"iana","compressible":true},"application/vnd.epson.esf":{"source":"iana","extensions":["esf"]},"application/vnd.epson.msf":{"source":"iana","extensions":["msf"]},"application/vnd.epson.quickanime":{"source":"iana","extensions":["qam"]},"application/vnd.epson.salt":{"source":"iana","extensions":["slt"]},"application/vnd.epson.ssf":{"source":"iana","extensions":["ssf"]},"application/vnd.ericsson.quickcall":{"source":"iana"},"application/vnd.espass-espass+zip":{"source":"iana","compressible":false},"application/vnd.eszigno3+xml":{"source":"iana","compressible":true,"extensions":["es3","et3"]},"application/vnd.etsi.aoc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.asic-e+zip":{"source":"iana","compressible":false},"application/vnd.etsi.asic-s+zip":{"source":"iana","compressible":false},"application/vnd.etsi.cug+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvcommand+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-bc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-cod+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-npvr+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvservice+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsync+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvueprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mcid+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mheg5":{"source":"iana"},"application/vnd.etsi.overload-control-policy-dataset+xml":{"source":"iana","compressible":true},"application/vnd.etsi.pstn+xml":{"source":"iana","compressible":true},"application/vnd.etsi.sci+xml":{"source":"iana","compressible":true},"application/vnd.etsi.simservs+xml":{"source":"iana","compressible":true},"application/vnd.etsi.timestamp-token":{"source":"iana"},"application/vnd.etsi.tsl+xml":{"source":"iana","compressible":true},"application/vnd.etsi.tsl.der":{"source":"iana"},"application/vnd.eudora.data":{"source":"iana"},"application/vnd.evolv.ecig.profile":{"source":"iana"},"application/vnd.evolv.ecig.settings":{"source":"iana"},"application/vnd.evolv.ecig.theme":{"source":"iana"},"application/vnd.exstream-empower+zip":{"source":"iana","compressible":false},"application/vnd.exstream-package":{"source":"iana"},"application/vnd.ezpix-album":{"source":"iana","extensions":["ez2"]},"application/vnd.ezpix-package":{"source":"iana","extensions":["ez3"]},"application/vnd.f-secure.mobile":{"source":"iana"},"application/vnd.fastcopy-disk-image":{"source":"iana"},"application/vnd.fdf":{"source":"iana","extensions":["fdf"]},"application/vnd.fdsn.mseed":{"source":"iana","extensions":["mseed"]},"application/vnd.fdsn.seed":{"source":"iana","extensions":["seed","dataless"]},"application/vnd.ffsns":{"source":"iana"},"application/vnd.ficlab.flb+zip":{"source":"iana","compressible":false},"application/vnd.filmit.zfc":{"source":"iana"},"application/vnd.fints":{"source":"iana"},"application/vnd.firemonkeys.cloudcell":{"source":"iana"},"application/vnd.flographit":{"source":"iana","extensions":["gph"]},"application/vnd.fluxtime.clip":{"source":"iana","extensions":["ftc"]},"application/vnd.font-fontforge-sfd":{"source":"iana"},"application/vnd.framemaker":{"source":"iana","extensions":["fm","frame","maker","book"]},"application/vnd.frogans.fnc":{"source":"iana","extensions":["fnc"]},"application/vnd.frogans.ltf":{"source":"iana","extensions":["ltf"]},"application/vnd.fsc.weblaunch":{"source":"iana","extensions":["fsc"]},"application/vnd.fujitsu.oasys":{"source":"iana","extensions":["oas"]},"application/vnd.fujitsu.oasys2":{"source":"iana","extensions":["oa2"]},"application/vnd.fujitsu.oasys3":{"source":"iana","extensions":["oa3"]},"application/vnd.fujitsu.oasysgp":{"source":"iana","extensions":["fg5"]},"application/vnd.fujitsu.oasysprs":{"source":"iana","extensions":["bh2"]},"application/vnd.fujixerox.art-ex":{"source":"iana"},"application/vnd.fujixerox.art4":{"source":"iana"},"application/vnd.fujixerox.ddd":{"source":"iana","extensions":["ddd"]},"application/vnd.fujixerox.docuworks":{"source":"iana","extensions":["xdw"]},"application/vnd.fujixerox.docuworks.binder":{"source":"iana","extensions":["xbd"]},"application/vnd.fujixerox.docuworks.container":{"source":"iana"},"application/vnd.fujixerox.hbpl":{"source":"iana"},"application/vnd.fut-misnet":{"source":"iana"},"application/vnd.futoin+cbor":{"source":"iana"},"application/vnd.futoin+json":{"source":"iana","compressible":true},"application/vnd.fuzzysheet":{"source":"iana","extensions":["fzs"]},"application/vnd.genomatix.tuxedo":{"source":"iana","extensions":["txd"]},"application/vnd.gentics.grd+json":{"source":"iana","compressible":true},"application/vnd.geo+json":{"source":"iana","compressible":true},"application/vnd.geocube+xml":{"source":"iana","compressible":true},"application/vnd.geogebra.file":{"source":"iana","extensions":["ggb"]},"application/vnd.geogebra.tool":{"source":"iana","extensions":["ggt"]},"application/vnd.geometry-explorer":{"source":"iana","extensions":["gex","gre"]},"application/vnd.geonext":{"source":"iana","extensions":["gxt"]},"application/vnd.geoplan":{"source":"iana","extensions":["g2w"]},"application/vnd.geospace":{"source":"iana","extensions":["g3w"]},"application/vnd.gerber":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt-response":{"source":"iana"},"application/vnd.gmx":{"source":"iana","extensions":["gmx"]},"application/vnd.google-apps.document":{"compressible":false,"extensions":["gdoc"]},"application/vnd.google-apps.presentation":{"compressible":false,"extensions":["gslides"]},"application/vnd.google-apps.spreadsheet":{"compressible":false,"extensions":["gsheet"]},"application/vnd.google-earth.kml+xml":{"source":"iana","compressible":true,"extensions":["kml"]},"application/vnd.google-earth.kmz":{"source":"iana","compressible":false,"extensions":["kmz"]},"application/vnd.gov.sk.e-form+xml":{"source":"iana","compressible":true},"application/vnd.gov.sk.e-form+zip":{"source":"iana","compressible":false},"application/vnd.gov.sk.xmldatacontainer+xml":{"source":"iana","compressible":true},"application/vnd.grafeq":{"source":"iana","extensions":["gqf","gqs"]},"application/vnd.gridmp":{"source":"iana"},"application/vnd.groove-account":{"source":"iana","extensions":["gac"]},"application/vnd.groove-help":{"source":"iana","extensions":["ghf"]},"application/vnd.groove-identity-message":{"source":"iana","extensions":["gim"]},"application/vnd.groove-injector":{"source":"iana","extensions":["grv"]},"application/vnd.groove-tool-message":{"source":"iana","extensions":["gtm"]},"application/vnd.groove-tool-template":{"source":"iana","extensions":["tpl"]},"application/vnd.groove-vcard":{"source":"iana","extensions":["vcg"]},"application/vnd.hal+json":{"source":"iana","compressible":true},"application/vnd.hal+xml":{"source":"iana","compressible":true,"extensions":["hal"]},"application/vnd.handheld-entertainment+xml":{"source":"iana","compressible":true,"extensions":["zmm"]},"application/vnd.hbci":{"source":"iana","extensions":["hbci"]},"application/vnd.hc+json":{"source":"iana","compressible":true},"application/vnd.hcl-bireports":{"source":"iana"},"application/vnd.hdt":{"source":"iana"},"application/vnd.heroku+json":{"source":"iana","compressible":true},"application/vnd.hhe.lesson-player":{"source":"iana","extensions":["les"]},"application/vnd.hp-hpgl":{"source":"iana","extensions":["hpgl"]},"application/vnd.hp-hpid":{"source":"iana","extensions":["hpid"]},"application/vnd.hp-hps":{"source":"iana","extensions":["hps"]},"application/vnd.hp-jlyt":{"source":"iana","extensions":["jlt"]},"application/vnd.hp-pcl":{"source":"iana","extensions":["pcl"]},"application/vnd.hp-pclxl":{"source":"iana","extensions":["pclxl"]},"application/vnd.httphone":{"source":"iana"},"application/vnd.hydrostatix.sof-data":{"source":"iana","extensions":["sfd-hdstx"]},"application/vnd.hyper+json":{"source":"iana","compressible":true},"application/vnd.hyper-item+json":{"source":"iana","compressible":true},"application/vnd.hyperdrive+json":{"source":"iana","compressible":true},"application/vnd.hzn-3d-crossword":{"source":"iana"},"application/vnd.ibm.afplinedata":{"source":"iana"},"application/vnd.ibm.electronic-media":{"source":"iana"},"application/vnd.ibm.minipay":{"source":"iana","extensions":["mpy"]},"application/vnd.ibm.modcap":{"source":"iana","extensions":["afp","listafp","list3820"]},"application/vnd.ibm.rights-management":{"source":"iana","extensions":["irm"]},"application/vnd.ibm.secure-container":{"source":"iana","extensions":["sc"]},"application/vnd.iccprofile":{"source":"iana","extensions":["icc","icm"]},"application/vnd.ieee.1905":{"source":"iana"},"application/vnd.igloader":{"source":"iana","extensions":["igl"]},"application/vnd.imagemeter.folder+zip":{"source":"iana","compressible":false},"application/vnd.imagemeter.image+zip":{"source":"iana","compressible":false},"application/vnd.immervision-ivp":{"source":"iana","extensions":["ivp"]},"application/vnd.immervision-ivu":{"source":"iana","extensions":["ivu"]},"application/vnd.ims.imsccv1p1":{"source":"iana"},"application/vnd.ims.imsccv1p2":{"source":"iana"},"application/vnd.ims.imsccv1p3":{"source":"iana"},"application/vnd.ims.lis.v2.result+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolconsumerprofile+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy.id+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings.simple+json":{"source":"iana","compressible":true},"application/vnd.informedcontrol.rms+xml":{"source":"iana","compressible":true},"application/vnd.informix-visionary":{"source":"iana"},"application/vnd.infotech.project":{"source":"iana"},"application/vnd.infotech.project+xml":{"source":"iana","compressible":true},"application/vnd.innopath.wamp.notification":{"source":"iana"},"application/vnd.insors.igm":{"source":"iana","extensions":["igm"]},"application/vnd.intercon.formnet":{"source":"iana","extensions":["xpw","xpx"]},"application/vnd.intergeo":{"source":"iana","extensions":["i2g"]},"application/vnd.intertrust.digibox":{"source":"iana"},"application/vnd.intertrust.nncp":{"source":"iana"},"application/vnd.intu.qbo":{"source":"iana","extensions":["qbo"]},"application/vnd.intu.qfx":{"source":"iana","extensions":["qfx"]},"application/vnd.iptc.g2.catalogitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.conceptitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.knowledgeitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsmessage+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.packageitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.planningitem+xml":{"source":"iana","compressible":true},"application/vnd.ipunplugged.rcprofile":{"source":"iana","extensions":["rcprofile"]},"application/vnd.irepository.package+xml":{"source":"iana","compressible":true,"extensions":["irp"]},"application/vnd.is-xpr":{"source":"iana","extensions":["xpr"]},"application/vnd.isac.fcs":{"source":"iana","extensions":["fcs"]},"application/vnd.iso11783-10+zip":{"source":"iana","compressible":false},"application/vnd.jam":{"source":"iana","extensions":["jam"]},"application/vnd.japannet-directory-service":{"source":"iana"},"application/vnd.japannet-jpnstore-wakeup":{"source":"iana"},"application/vnd.japannet-payment-wakeup":{"source":"iana"},"application/vnd.japannet-registration":{"source":"iana"},"application/vnd.japannet-registration-wakeup":{"source":"iana"},"application/vnd.japannet-setstore-wakeup":{"source":"iana"},"application/vnd.japannet-verification":{"source":"iana"},"application/vnd.japannet-verification-wakeup":{"source":"iana"},"application/vnd.jcp.javame.midlet-rms":{"source":"iana","extensions":["rms"]},"application/vnd.jisp":{"source":"iana","extensions":["jisp"]},"application/vnd.joost.joda-archive":{"source":"iana","extensions":["joda"]},"application/vnd.jsk.isdn-ngn":{"source":"iana"},"application/vnd.kahootz":{"source":"iana","extensions":["ktz","ktr"]},"application/vnd.kde.karbon":{"source":"iana","extensions":["karbon"]},"application/vnd.kde.kchart":{"source":"iana","extensions":["chrt"]},"application/vnd.kde.kformula":{"source":"iana","extensions":["kfo"]},"application/vnd.kde.kivio":{"source":"iana","extensions":["flw"]},"application/vnd.kde.kontour":{"source":"iana","extensions":["kon"]},"application/vnd.kde.kpresenter":{"source":"iana","extensions":["kpr","kpt"]},"application/vnd.kde.kspread":{"source":"iana","extensions":["ksp"]},"application/vnd.kde.kword":{"source":"iana","extensions":["kwd","kwt"]},"application/vnd.kenameaapp":{"source":"iana","extensions":["htke"]},"application/vnd.kidspiration":{"source":"iana","extensions":["kia"]},"application/vnd.kinar":{"source":"iana","extensions":["kne","knp"]},"application/vnd.koan":{"source":"iana","extensions":["skp","skd","skt","skm"]},"application/vnd.kodak-descriptor":{"source":"iana","extensions":["sse"]},"application/vnd.las":{"source":"iana"},"application/vnd.las.las+json":{"source":"iana","compressible":true},"application/vnd.las.las+xml":{"source":"iana","compressible":true,"extensions":["lasxml"]},"application/vnd.laszip":{"source":"iana"},"application/vnd.leap+json":{"source":"iana","compressible":true},"application/vnd.liberty-request+xml":{"source":"iana","compressible":true},"application/vnd.llamagraphics.life-balance.desktop":{"source":"iana","extensions":["lbd"]},"application/vnd.llamagraphics.life-balance.exchange+xml":{"source":"iana","compressible":true,"extensions":["lbe"]},"application/vnd.logipipe.circuit+zip":{"source":"iana","compressible":false},"application/vnd.loom":{"source":"iana"},"application/vnd.lotus-1-2-3":{"source":"iana","extensions":["123"]},"application/vnd.lotus-approach":{"source":"iana","extensions":["apr"]},"application/vnd.lotus-freelance":{"source":"iana","extensions":["pre"]},"application/vnd.lotus-notes":{"source":"iana","extensions":["nsf"]},"application/vnd.lotus-organizer":{"source":"iana","extensions":["org"]},"application/vnd.lotus-screencam":{"source":"iana","extensions":["scm"]},"application/vnd.lotus-wordpro":{"source":"iana","extensions":["lwp"]},"application/vnd.macports.portpkg":{"source":"iana","extensions":["portpkg"]},"application/vnd.mapbox-vector-tile":{"source":"iana"},"application/vnd.marlin.drm.actiontoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.conftoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.license+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.mdcf":{"source":"iana"},"application/vnd.mason+json":{"source":"iana","compressible":true},"application/vnd.maxmind.maxmind-db":{"source":"iana"},"application/vnd.mcd":{"source":"iana","extensions":["mcd"]},"application/vnd.medcalcdata":{"source":"iana","extensions":["mc1"]},"application/vnd.mediastation.cdkey":{"source":"iana","extensions":["cdkey"]},"application/vnd.meridian-slingshot":{"source":"iana"},"application/vnd.mfer":{"source":"iana","extensions":["mwf"]},"application/vnd.mfmp":{"source":"iana","extensions":["mfm"]},"application/vnd.micro+json":{"source":"iana","compressible":true},"application/vnd.micrografx.flo":{"source":"iana","extensions":["flo"]},"application/vnd.micrografx.igx":{"source":"iana","extensions":["igx"]},"application/vnd.microsoft.portable-executable":{"source":"iana"},"application/vnd.microsoft.windows.thumbnail-cache":{"source":"iana"},"application/vnd.miele+json":{"source":"iana","compressible":true},"application/vnd.mif":{"source":"iana","extensions":["mif"]},"application/vnd.minisoft-hp3000-save":{"source":"iana"},"application/vnd.mitsubishi.misty-guard.trustweb":{"source":"iana"},"application/vnd.mobius.daf":{"source":"iana","extensions":["daf"]},"application/vnd.mobius.dis":{"source":"iana","extensions":["dis"]},"application/vnd.mobius.mbk":{"source":"iana","extensions":["mbk"]},"application/vnd.mobius.mqy":{"source":"iana","extensions":["mqy"]},"application/vnd.mobius.msl":{"source":"iana","extensions":["msl"]},"application/vnd.mobius.plc":{"source":"iana","extensions":["plc"]},"application/vnd.mobius.txf":{"source":"iana","extensions":["txf"]},"application/vnd.mophun.application":{"source":"iana","extensions":["mpn"]},"application/vnd.mophun.certificate":{"source":"iana","extensions":["mpc"]},"application/vnd.motorola.flexsuite":{"source":"iana"},"application/vnd.motorola.flexsuite.adsi":{"source":"iana"},"application/vnd.motorola.flexsuite.fis":{"source":"iana"},"application/vnd.motorola.flexsuite.gotap":{"source":"iana"},"application/vnd.motorola.flexsuite.kmr":{"source":"iana"},"application/vnd.motorola.flexsuite.ttc":{"source":"iana"},"application/vnd.motorola.flexsuite.wem":{"source":"iana"},"application/vnd.motorola.iprm":{"source":"iana"},"application/vnd.mozilla.xul+xml":{"source":"iana","compressible":true,"extensions":["xul"]},"application/vnd.ms-3mfdocument":{"source":"iana"},"application/vnd.ms-artgalry":{"source":"iana","extensions":["cil"]},"application/vnd.ms-asf":{"source":"iana"},"application/vnd.ms-cab-compressed":{"source":"iana","extensions":["cab"]},"application/vnd.ms-color.iccprofile":{"source":"apache"},"application/vnd.ms-excel":{"source":"iana","compressible":false,"extensions":["xls","xlm","xla","xlc","xlt","xlw"]},"application/vnd.ms-excel.addin.macroenabled.12":{"source":"iana","extensions":["xlam"]},"application/vnd.ms-excel.sheet.binary.macroenabled.12":{"source":"iana","extensions":["xlsb"]},"application/vnd.ms-excel.sheet.macroenabled.12":{"source":"iana","extensions":["xlsm"]},"application/vnd.ms-excel.template.macroenabled.12":{"source":"iana","extensions":["xltm"]},"application/vnd.ms-fontobject":{"source":"iana","compressible":true,"extensions":["eot"]},"application/vnd.ms-htmlhelp":{"source":"iana","extensions":["chm"]},"application/vnd.ms-ims":{"source":"iana","extensions":["ims"]},"application/vnd.ms-lrm":{"source":"iana","extensions":["lrm"]},"application/vnd.ms-office.activex+xml":{"source":"iana","compressible":true},"application/vnd.ms-officetheme":{"source":"iana","extensions":["thmx"]},"application/vnd.ms-opentype":{"source":"apache","compressible":true},"application/vnd.ms-outlook":{"compressible":false,"extensions":["msg"]},"application/vnd.ms-package.obfuscated-opentype":{"source":"apache"},"application/vnd.ms-pki.seccat":{"source":"apache","extensions":["cat"]},"application/vnd.ms-pki.stl":{"source":"apache","extensions":["stl"]},"application/vnd.ms-playready.initiator+xml":{"source":"iana","compressible":true},"application/vnd.ms-powerpoint":{"source":"iana","compressible":false,"extensions":["ppt","pps","pot"]},"application/vnd.ms-powerpoint.addin.macroenabled.12":{"source":"iana","extensions":["ppam"]},"application/vnd.ms-powerpoint.presentation.macroenabled.12":{"source":"iana","extensions":["pptm"]},"application/vnd.ms-powerpoint.slide.macroenabled.12":{"source":"iana","extensions":["sldm"]},"application/vnd.ms-powerpoint.slideshow.macroenabled.12":{"source":"iana","extensions":["ppsm"]},"application/vnd.ms-powerpoint.template.macroenabled.12":{"source":"iana","extensions":["potm"]},"application/vnd.ms-printdevicecapabilities+xml":{"source":"iana","compressible":true},"application/vnd.ms-printing.printticket+xml":{"source":"apache","compressible":true},"application/vnd.ms-printschematicket+xml":{"source":"iana","compressible":true},"application/vnd.ms-project":{"source":"iana","extensions":["mpp","mpt"]},"application/vnd.ms-tnef":{"source":"iana"},"application/vnd.ms-windows.devicepairing":{"source":"iana"},"application/vnd.ms-windows.nwprinting.oob":{"source":"iana"},"application/vnd.ms-windows.printerpairing":{"source":"iana"},"application/vnd.ms-windows.wsd.oob":{"source":"iana"},"application/vnd.ms-wmdrm.lic-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.lic-resp":{"source":"iana"},"application/vnd.ms-wmdrm.meter-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.meter-resp":{"source":"iana"},"application/vnd.ms-word.document.macroenabled.12":{"source":"iana","extensions":["docm"]},"application/vnd.ms-word.template.macroenabled.12":{"source":"iana","extensions":["dotm"]},"application/vnd.ms-works":{"source":"iana","extensions":["wps","wks","wcm","wdb"]},"application/vnd.ms-wpl":{"source":"iana","extensions":["wpl"]},"application/vnd.ms-xpsdocument":{"source":"iana","compressible":false,"extensions":["xps"]},"application/vnd.msa-disk-image":{"source":"iana"},"application/vnd.mseq":{"source":"iana","extensions":["mseq"]},"application/vnd.msign":{"source":"iana"},"application/vnd.multiad.creator":{"source":"iana"},"application/vnd.multiad.creator.cif":{"source":"iana"},"application/vnd.music-niff":{"source":"iana"},"application/vnd.musician":{"source":"iana","extensions":["mus"]},"application/vnd.muvee.style":{"source":"iana","extensions":["msty"]},"application/vnd.mynfc":{"source":"iana","extensions":["taglet"]},"application/vnd.ncd.control":{"source":"iana"},"application/vnd.ncd.reference":{"source":"iana"},"application/vnd.nearst.inv+json":{"source":"iana","compressible":true},"application/vnd.nervana":{"source":"iana"},"application/vnd.netfpx":{"source":"iana"},"application/vnd.neurolanguage.nlu":{"source":"iana","extensions":["nlu"]},"application/vnd.nimn":{"source":"iana"},"application/vnd.nintendo.nitro.rom":{"source":"iana"},"application/vnd.nintendo.snes.rom":{"source":"iana"},"application/vnd.nitf":{"source":"iana","extensions":["ntf","nitf"]},"application/vnd.noblenet-directory":{"source":"iana","extensions":["nnd"]},"application/vnd.noblenet-sealer":{"source":"iana","extensions":["nns"]},"application/vnd.noblenet-web":{"source":"iana","extensions":["nnw"]},"application/vnd.nokia.catalogs":{"source":"iana"},"application/vnd.nokia.conml+wbxml":{"source":"iana"},"application/vnd.nokia.conml+xml":{"source":"iana","compressible":true},"application/vnd.nokia.iptv.config+xml":{"source":"iana","compressible":true},"application/vnd.nokia.isds-radio-presets":{"source":"iana"},"application/vnd.nokia.landmark+wbxml":{"source":"iana"},"application/vnd.nokia.landmark+xml":{"source":"iana","compressible":true},"application/vnd.nokia.landmarkcollection+xml":{"source":"iana","compressible":true},"application/vnd.nokia.n-gage.ac+xml":{"source":"iana","compressible":true,"extensions":["ac"]},"application/vnd.nokia.n-gage.data":{"source":"iana","extensions":["ngdat"]},"application/vnd.nokia.n-gage.symbian.install":{"source":"iana","extensions":["n-gage"]},"application/vnd.nokia.ncd":{"source":"iana"},"application/vnd.nokia.pcd+wbxml":{"source":"iana"},"application/vnd.nokia.pcd+xml":{"source":"iana","compressible":true},"application/vnd.nokia.radio-preset":{"source":"iana","extensions":["rpst"]},"application/vnd.nokia.radio-presets":{"source":"iana","extensions":["rpss"]},"application/vnd.novadigm.edm":{"source":"iana","extensions":["edm"]},"application/vnd.novadigm.edx":{"source":"iana","extensions":["edx"]},"application/vnd.novadigm.ext":{"source":"iana","extensions":["ext"]},"application/vnd.ntt-local.content-share":{"source":"iana"},"application/vnd.ntt-local.file-transfer":{"source":"iana"},"application/vnd.ntt-local.ogw_remote-access":{"source":"iana"},"application/vnd.ntt-local.sip-ta_remote":{"source":"iana"},"application/vnd.ntt-local.sip-ta_tcp_stream":{"source":"iana"},"application/vnd.oasis.opendocument.chart":{"source":"iana","extensions":["odc"]},"application/vnd.oasis.opendocument.chart-template":{"source":"iana","extensions":["otc"]},"application/vnd.oasis.opendocument.database":{"source":"iana","extensions":["odb"]},"application/vnd.oasis.opendocument.formula":{"source":"iana","extensions":["odf"]},"application/vnd.oasis.opendocument.formula-template":{"source":"iana","extensions":["odft"]},"application/vnd.oasis.opendocument.graphics":{"source":"iana","compressible":false,"extensions":["odg"]},"application/vnd.oasis.opendocument.graphics-template":{"source":"iana","extensions":["otg"]},"application/vnd.oasis.opendocument.image":{"source":"iana","extensions":["odi"]},"application/vnd.oasis.opendocument.image-template":{"source":"iana","extensions":["oti"]},"application/vnd.oasis.opendocument.presentation":{"source":"iana","compressible":false,"extensions":["odp"]},"application/vnd.oasis.opendocument.presentation-template":{"source":"iana","extensions":["otp"]},"application/vnd.oasis.opendocument.spreadsheet":{"source":"iana","compressible":false,"extensions":["ods"]},"application/vnd.oasis.opendocument.spreadsheet-template":{"source":"iana","extensions":["ots"]},"application/vnd.oasis.opendocument.text":{"source":"iana","compressible":false,"extensions":["odt"]},"application/vnd.oasis.opendocument.text-master":{"source":"iana","extensions":["odm"]},"application/vnd.oasis.opendocument.text-template":{"source":"iana","extensions":["ott"]},"application/vnd.oasis.opendocument.text-web":{"source":"iana","extensions":["oth"]},"application/vnd.obn":{"source":"iana"},"application/vnd.ocf+cbor":{"source":"iana"},"application/vnd.oci.image.manifest.v1+json":{"source":"iana","compressible":true},"application/vnd.oftn.l10n+json":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessdownload+xml":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessstreaming+xml":{"source":"iana","compressible":true},"application/vnd.oipf.cspg-hexbinary":{"source":"iana"},"application/vnd.oipf.dae.svg+xml":{"source":"iana","compressible":true},"application/vnd.oipf.dae.xhtml+xml":{"source":"iana","compressible":true},"application/vnd.oipf.mippvcontrolmessage+xml":{"source":"iana","compressible":true},"application/vnd.oipf.pae.gem":{"source":"iana"},"application/vnd.oipf.spdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.oipf.spdlist+xml":{"source":"iana","compressible":true},"application/vnd.oipf.ueprofile+xml":{"source":"iana","compressible":true},"application/vnd.oipf.userprofile+xml":{"source":"iana","compressible":true},"application/vnd.olpc-sugar":{"source":"iana","extensions":["xo"]},"application/vnd.oma-scws-config":{"source":"iana"},"application/vnd.oma-scws-http-request":{"source":"iana"},"application/vnd.oma-scws-http-response":{"source":"iana"},"application/vnd.oma.bcast.associated-procedure-parameter+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.drm-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.imd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.ltkm":{"source":"iana"},"application/vnd.oma.bcast.notification+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.provisioningtrigger":{"source":"iana"},"application/vnd.oma.bcast.sgboot":{"source":"iana"},"application/vnd.oma.bcast.sgdd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sgdu":{"source":"iana"},"application/vnd.oma.bcast.simple-symbol-container":{"source":"iana"},"application/vnd.oma.bcast.smartcard-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sprov+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.stkm":{"source":"iana"},"application/vnd.oma.cab-address-book+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-feature-handler+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-pcc+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-subs-invite+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-user-prefs+xml":{"source":"iana","compressible":true},"application/vnd.oma.dcd":{"source":"iana"},"application/vnd.oma.dcdc":{"source":"iana"},"application/vnd.oma.dd2+xml":{"source":"iana","compressible":true,"extensions":["dd2"]},"application/vnd.oma.drm.risd+xml":{"source":"iana","compressible":true},"application/vnd.oma.group-usage-list+xml":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+json":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+tlv":{"source":"iana"},"application/vnd.oma.pal+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.detailed-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.final-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.groups+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.invocation-descriptor+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.optimized-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.push":{"source":"iana"},"application/vnd.oma.scidm.messages+xml":{"source":"iana","compressible":true},"application/vnd.oma.xcap-directory+xml":{"source":"iana","compressible":true},"application/vnd.omads-email+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-file+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-folder+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omaloc-supl-init":{"source":"iana"},"application/vnd.onepager":{"source":"iana"},"application/vnd.onepagertamp":{"source":"iana"},"application/vnd.onepagertamx":{"source":"iana"},"application/vnd.onepagertat":{"source":"iana"},"application/vnd.onepagertatp":{"source":"iana"},"application/vnd.onepagertatx":{"source":"iana"},"application/vnd.openblox.game+xml":{"source":"iana","compressible":true,"extensions":["obgx"]},"application/vnd.openblox.game-binary":{"source":"iana"},"application/vnd.openeye.oeb":{"source":"iana"},"application/vnd.openofficeorg.extension":{"source":"apache","extensions":["oxt"]},"application/vnd.openstreetmap.data+xml":{"source":"iana","compressible":true,"extensions":["osm"]},"application/vnd.openxmlformats-officedocument.custom-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.customxmlproperties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawing+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chart+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.extended-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{"source":"iana","compressible":false,"extensions":["pptx"]},"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slide":{"source":"iana","extensions":["sldx"]},"application/vnd.openxmlformats-officedocument.presentationml.slide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideshow":{"source":"iana","extensions":["ppsx"]},"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tags+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.template":{"source":"iana","extensions":["potx"]},"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{"source":"iana","compressible":false,"extensions":["xlsx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.template":{"source":"iana","extensions":["xltx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.theme+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.themeoverride+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.vmldrawing":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{"source":"iana","compressible":false,"extensions":["docx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.template":{"source":"iana","extensions":["dotx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.core-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.relationships+xml":{"source":"iana","compressible":true},"application/vnd.oracle.resource+json":{"source":"iana","compressible":true},"application/vnd.orange.indata":{"source":"iana"},"application/vnd.osa.netdeploy":{"source":"iana"},"application/vnd.osgeo.mapguide.package":{"source":"iana","extensions":["mgp"]},"application/vnd.osgi.bundle":{"source":"iana"},"application/vnd.osgi.dp":{"source":"iana","extensions":["dp"]},"application/vnd.osgi.subsystem":{"source":"iana","extensions":["esa"]},"application/vnd.otps.ct-kip+xml":{"source":"iana","compressible":true},"application/vnd.oxli.countgraph":{"source":"iana"},"application/vnd.pagerduty+json":{"source":"iana","compressible":true},"application/vnd.palm":{"source":"iana","extensions":["pdb","pqa","oprc"]},"application/vnd.panoply":{"source":"iana"},"application/vnd.paos.xml":{"source":"iana"},"application/vnd.patentdive":{"source":"iana"},"application/vnd.patientecommsdoc":{"source":"iana"},"application/vnd.pawaafile":{"source":"iana","extensions":["paw"]},"application/vnd.pcos":{"source":"iana"},"application/vnd.pg.format":{"source":"iana","extensions":["str"]},"application/vnd.pg.osasli":{"source":"iana","extensions":["ei6"]},"application/vnd.piaccess.application-licence":{"source":"iana"},"application/vnd.picsel":{"source":"iana","extensions":["efif"]},"application/vnd.pmi.widget":{"source":"iana","extensions":["wg"]},"application/vnd.poc.group-advertisement+xml":{"source":"iana","compressible":true},"application/vnd.pocketlearn":{"source":"iana","extensions":["plf"]},"application/vnd.powerbuilder6":{"source":"iana","extensions":["pbd"]},"application/vnd.powerbuilder6-s":{"source":"iana"},"application/vnd.powerbuilder7":{"source":"iana"},"application/vnd.powerbuilder7-s":{"source":"iana"},"application/vnd.powerbuilder75":{"source":"iana"},"application/vnd.powerbuilder75-s":{"source":"iana"},"application/vnd.preminet":{"source":"iana"},"application/vnd.previewsystems.box":{"source":"iana","extensions":["box"]},"application/vnd.proteus.magazine":{"source":"iana","extensions":["mgz"]},"application/vnd.psfs":{"source":"iana"},"application/vnd.publishare-delta-tree":{"source":"iana","extensions":["qps"]},"application/vnd.pvi.ptid1":{"source":"iana","extensions":["ptid"]},"application/vnd.pwg-multiplexed":{"source":"iana"},"application/vnd.pwg-xhtml-print+xml":{"source":"iana","compressible":true},"application/vnd.qualcomm.brew-app-res":{"source":"iana"},"application/vnd.quarantainenet":{"source":"iana"},"application/vnd.quark.quarkxpress":{"source":"iana","extensions":["qxd","qxt","qwd","qwt","qxl","qxb"]},"application/vnd.quobject-quoxdocument":{"source":"iana"},"application/vnd.radisys.moml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conn+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-stream+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-base+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-detect+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-sendrecv+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-group+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-speech+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-transform+xml":{"source":"iana","compressible":true},"application/vnd.rainstor.data":{"source":"iana"},"application/vnd.rapid":{"source":"iana"},"application/vnd.rar":{"source":"iana"},"application/vnd.realvnc.bed":{"source":"iana","extensions":["bed"]},"application/vnd.recordare.musicxml":{"source":"iana","extensions":["mxl"]},"application/vnd.recordare.musicxml+xml":{"source":"iana","compressible":true,"extensions":["musicxml"]},"application/vnd.renlearn.rlprint":{"source":"iana"},"application/vnd.restful+json":{"source":"iana","compressible":true},"application/vnd.rig.cryptonote":{"source":"iana","extensions":["cryptonote"]},"application/vnd.rim.cod":{"source":"apache","extensions":["cod"]},"application/vnd.rn-realmedia":{"source":"apache","extensions":["rm"]},"application/vnd.rn-realmedia-vbr":{"source":"apache","extensions":["rmvb"]},"application/vnd.route66.link66+xml":{"source":"iana","compressible":true,"extensions":["link66"]},"application/vnd.rs-274x":{"source":"iana"},"application/vnd.ruckus.download":{"source":"iana"},"application/vnd.s3sms":{"source":"iana"},"application/vnd.sailingtracker.track":{"source":"iana","extensions":["st"]},"application/vnd.sar":{"source":"iana"},"application/vnd.sbm.cid":{"source":"iana"},"application/vnd.sbm.mid2":{"source":"iana"},"application/vnd.scribus":{"source":"iana"},"application/vnd.sealed.3df":{"source":"iana"},"application/vnd.sealed.csf":{"source":"iana"},"application/vnd.sealed.doc":{"source":"iana"},"application/vnd.sealed.eml":{"source":"iana"},"application/vnd.sealed.mht":{"source":"iana"},"application/vnd.sealed.net":{"source":"iana"},"application/vnd.sealed.ppt":{"source":"iana"},"application/vnd.sealed.tiff":{"source":"iana"},"application/vnd.sealed.xls":{"source":"iana"},"application/vnd.sealedmedia.softseal.html":{"source":"iana"},"application/vnd.sealedmedia.softseal.pdf":{"source":"iana"},"application/vnd.seemail":{"source":"iana","extensions":["see"]},"application/vnd.sema":{"source":"iana","extensions":["sema"]},"application/vnd.semd":{"source":"iana","extensions":["semd"]},"application/vnd.semf":{"source":"iana","extensions":["semf"]},"application/vnd.shade-save-file":{"source":"iana"},"application/vnd.shana.informed.formdata":{"source":"iana","extensions":["ifm"]},"application/vnd.shana.informed.formtemplate":{"source":"iana","extensions":["itp"]},"application/vnd.shana.informed.interchange":{"source":"iana","extensions":["iif"]},"application/vnd.shana.informed.package":{"source":"iana","extensions":["ipk"]},"application/vnd.shootproof+json":{"source":"iana","compressible":true},"application/vnd.shopkick+json":{"source":"iana","compressible":true},"application/vnd.shp":{"source":"iana"},"application/vnd.shx":{"source":"iana"},"application/vnd.sigrok.session":{"source":"iana"},"application/vnd.simtech-mindmapper":{"source":"iana","extensions":["twd","twds"]},"application/vnd.siren+json":{"source":"iana","compressible":true},"application/vnd.smaf":{"source":"iana","extensions":["mmf"]},"application/vnd.smart.notebook":{"source":"iana"},"application/vnd.smart.teacher":{"source":"iana","extensions":["teacher"]},"application/vnd.snesdev-page-table":{"source":"iana"},"application/vnd.software602.filler.form+xml":{"source":"iana","compressible":true,"extensions":["fo"]},"application/vnd.software602.filler.form-xml-zip":{"source":"iana"},"application/vnd.solent.sdkm+xml":{"source":"iana","compressible":true,"extensions":["sdkm","sdkd"]},"application/vnd.spotfire.dxp":{"source":"iana","extensions":["dxp"]},"application/vnd.spotfire.sfs":{"source":"iana","extensions":["sfs"]},"application/vnd.sqlite3":{"source":"iana"},"application/vnd.sss-cod":{"source":"iana"},"application/vnd.sss-dtf":{"source":"iana"},"application/vnd.sss-ntf":{"source":"iana"},"application/vnd.stardivision.calc":{"source":"apache","extensions":["sdc"]},"application/vnd.stardivision.draw":{"source":"apache","extensions":["sda"]},"application/vnd.stardivision.impress":{"source":"apache","extensions":["sdd"]},"application/vnd.stardivision.math":{"source":"apache","extensions":["smf"]},"application/vnd.stardivision.writer":{"source":"apache","extensions":["sdw","vor"]},"application/vnd.stardivision.writer-global":{"source":"apache","extensions":["sgl"]},"application/vnd.stepmania.package":{"source":"iana","extensions":["smzip"]},"application/vnd.stepmania.stepchart":{"source":"iana","extensions":["sm"]},"application/vnd.street-stream":{"source":"iana"},"application/vnd.sun.wadl+xml":{"source":"iana","compressible":true,"extensions":["wadl"]},"application/vnd.sun.xml.calc":{"source":"apache","extensions":["sxc"]},"application/vnd.sun.xml.calc.template":{"source":"apache","extensions":["stc"]},"application/vnd.sun.xml.draw":{"source":"apache","extensions":["sxd"]},"application/vnd.sun.xml.draw.template":{"source":"apache","extensions":["std"]},"application/vnd.sun.xml.impress":{"source":"apache","extensions":["sxi"]},"application/vnd.sun.xml.impress.template":{"source":"apache","extensions":["sti"]},"application/vnd.sun.xml.math":{"source":"apache","extensions":["sxm"]},"application/vnd.sun.xml.writer":{"source":"apache","extensions":["sxw"]},"application/vnd.sun.xml.writer.global":{"source":"apache","extensions":["sxg"]},"application/vnd.sun.xml.writer.template":{"source":"apache","extensions":["stw"]},"application/vnd.sus-calendar":{"source":"iana","extensions":["sus","susp"]},"application/vnd.svd":{"source":"iana","extensions":["svd"]},"application/vnd.swiftview-ics":{"source":"iana"},"application/vnd.symbian.install":{"source":"apache","extensions":["sis","sisx"]},"application/vnd.syncml+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xsm"]},"application/vnd.syncml.dm+wbxml":{"source":"iana","charset":"UTF-8","extensions":["bdm"]},"application/vnd.syncml.dm+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xdm"]},"application/vnd.syncml.dm.notification":{"source":"iana"},"application/vnd.syncml.dmddf+wbxml":{"source":"iana"},"application/vnd.syncml.dmddf+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["ddf"]},"application/vnd.syncml.dmtnds+wbxml":{"source":"iana"},"application/vnd.syncml.dmtnds+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.syncml.ds.notification":{"source":"iana"},"application/vnd.tableschema+json":{"source":"iana","compressible":true},"application/vnd.tao.intent-module-archive":{"source":"iana","extensions":["tao"]},"application/vnd.tcpdump.pcap":{"source":"iana","extensions":["pcap","cap","dmp"]},"application/vnd.think-cell.ppttc+json":{"source":"iana","compressible":true},"application/vnd.tmd.mediaflex.api+xml":{"source":"iana","compressible":true},"application/vnd.tml":{"source":"iana"},"application/vnd.tmobile-livetv":{"source":"iana","extensions":["tmo"]},"application/vnd.tri.onesource":{"source":"iana"},"application/vnd.trid.tpt":{"source":"iana","extensions":["tpt"]},"application/vnd.triscape.mxs":{"source":"iana","extensions":["mxs"]},"application/vnd.trueapp":{"source":"iana","extensions":["tra"]},"application/vnd.truedoc":{"source":"iana"},"application/vnd.ubisoft.webplayer":{"source":"iana"},"application/vnd.ufdl":{"source":"iana","extensions":["ufd","ufdl"]},"application/vnd.uiq.theme":{"source":"iana","extensions":["utz"]},"application/vnd.umajin":{"source":"iana","extensions":["umj"]},"application/vnd.unity":{"source":"iana","extensions":["unityweb"]},"application/vnd.uoml+xml":{"source":"iana","compressible":true,"extensions":["uoml"]},"application/vnd.uplanet.alert":{"source":"iana"},"application/vnd.uplanet.alert-wbxml":{"source":"iana"},"application/vnd.uplanet.bearer-choice":{"source":"iana"},"application/vnd.uplanet.bearer-choice-wbxml":{"source":"iana"},"application/vnd.uplanet.cacheop":{"source":"iana"},"application/vnd.uplanet.cacheop-wbxml":{"source":"iana"},"application/vnd.uplanet.channel":{"source":"iana"},"application/vnd.uplanet.channel-wbxml":{"source":"iana"},"application/vnd.uplanet.list":{"source":"iana"},"application/vnd.uplanet.list-wbxml":{"source":"iana"},"application/vnd.uplanet.listcmd":{"source":"iana"},"application/vnd.uplanet.listcmd-wbxml":{"source":"iana"},"application/vnd.uplanet.signal":{"source":"iana"},"application/vnd.uri-map":{"source":"iana"},"application/vnd.valve.source.material":{"source":"iana"},"application/vnd.vcx":{"source":"iana","extensions":["vcx"]},"application/vnd.vd-study":{"source":"iana"},"application/vnd.vectorworks":{"source":"iana"},"application/vnd.vel+json":{"source":"iana","compressible":true},"application/vnd.verimatrix.vcas":{"source":"iana"},"application/vnd.veryant.thin":{"source":"iana"},"application/vnd.ves.encrypted":{"source":"iana"},"application/vnd.vidsoft.vidconference":{"source":"iana"},"application/vnd.visio":{"source":"iana","extensions":["vsd","vst","vss","vsw"]},"application/vnd.visionary":{"source":"iana","extensions":["vis"]},"application/vnd.vividence.scriptfile":{"source":"iana"},"application/vnd.vsf":{"source":"iana","extensions":["vsf"]},"application/vnd.wap.sic":{"source":"iana"},"application/vnd.wap.slc":{"source":"iana"},"application/vnd.wap.wbxml":{"source":"iana","charset":"UTF-8","extensions":["wbxml"]},"application/vnd.wap.wmlc":{"source":"iana","extensions":["wmlc"]},"application/vnd.wap.wmlscriptc":{"source":"iana","extensions":["wmlsc"]},"application/vnd.webturbo":{"source":"iana","extensions":["wtb"]},"application/vnd.wfa.p2p":{"source":"iana"},"application/vnd.wfa.wsc":{"source":"iana"},"application/vnd.windows.devicepairing":{"source":"iana"},"application/vnd.wmc":{"source":"iana"},"application/vnd.wmf.bootstrap":{"source":"iana"},"application/vnd.wolfram.mathematica":{"source":"iana"},"application/vnd.wolfram.mathematica.package":{"source":"iana"},"application/vnd.wolfram.player":{"source":"iana","extensions":["nbp"]},"application/vnd.wordperfect":{"source":"iana","extensions":["wpd"]},"application/vnd.wqd":{"source":"iana","extensions":["wqd"]},"application/vnd.wrq-hp3000-labelled":{"source":"iana"},"application/vnd.wt.stf":{"source":"iana","extensions":["stf"]},"application/vnd.wv.csp+wbxml":{"source":"iana"},"application/vnd.wv.csp+xml":{"source":"iana","compressible":true},"application/vnd.wv.ssp+xml":{"source":"iana","compressible":true},"application/vnd.xacml+json":{"source":"iana","compressible":true},"application/vnd.xara":{"source":"iana","extensions":["xar"]},"application/vnd.xfdl":{"source":"iana","extensions":["xfdl"]},"application/vnd.xfdl.webform":{"source":"iana"},"application/vnd.xmi+xml":{"source":"iana","compressible":true},"application/vnd.xmpie.cpkg":{"source":"iana"},"application/vnd.xmpie.dpkg":{"source":"iana"},"application/vnd.xmpie.plan":{"source":"iana"},"application/vnd.xmpie.ppkg":{"source":"iana"},"application/vnd.xmpie.xlim":{"source":"iana"},"application/vnd.yamaha.hv-dic":{"source":"iana","extensions":["hvd"]},"application/vnd.yamaha.hv-script":{"source":"iana","extensions":["hvs"]},"application/vnd.yamaha.hv-voice":{"source":"iana","extensions":["hvp"]},"application/vnd.yamaha.openscoreformat":{"source":"iana","extensions":["osf"]},"application/vnd.yamaha.openscoreformat.osfpvg+xml":{"source":"iana","compressible":true,"extensions":["osfpvg"]},"application/vnd.yamaha.remote-setup":{"source":"iana"},"application/vnd.yamaha.smaf-audio":{"source":"iana","extensions":["saf"]},"application/vnd.yamaha.smaf-phrase":{"source":"iana","extensions":["spf"]},"application/vnd.yamaha.through-ngn":{"source":"iana"},"application/vnd.yamaha.tunnel-udpencap":{"source":"iana"},"application/vnd.yaoweme":{"source":"iana"},"application/vnd.yellowriver-custom-menu":{"source":"iana","extensions":["cmp"]},"application/vnd.youtube.yt":{"source":"iana"},"application/vnd.zul":{"source":"iana","extensions":["zir","zirz"]},"application/vnd.zzazz.deck+xml":{"source":"iana","compressible":true,"extensions":["zaz"]},"application/voicexml+xml":{"source":"iana","compressible":true,"extensions":["vxml"]},"application/voucher-cms+json":{"source":"iana","compressible":true},"application/vq-rtcpxr":{"source":"iana"},"application/wasm":{"compressible":true,"extensions":["wasm"]},"application/watcherinfo+xml":{"source":"iana","compressible":true},"application/webpush-options+json":{"source":"iana","compressible":true},"application/whoispp-query":{"source":"iana"},"application/whoispp-response":{"source":"iana"},"application/widget":{"source":"iana","extensions":["wgt"]},"application/winhlp":{"source":"apache","extensions":["hlp"]},"application/wita":{"source":"iana"},"application/wordperfect5.1":{"source":"iana"},"application/wsdl+xml":{"source":"iana","compressible":true,"extensions":["wsdl"]},"application/wspolicy+xml":{"source":"iana","compressible":true,"extensions":["wspolicy"]},"application/x-7z-compressed":{"source":"apache","compressible":false,"extensions":["7z"]},"application/x-abiword":{"source":"apache","extensions":["abw"]},"application/x-ace-compressed":{"source":"apache","extensions":["ace"]},"application/x-amf":{"source":"apache"},"application/x-apple-diskimage":{"source":"apache","extensions":["dmg"]},"application/x-arj":{"compressible":false,"extensions":["arj"]},"application/x-authorware-bin":{"source":"apache","extensions":["aab","x32","u32","vox"]},"application/x-authorware-map":{"source":"apache","extensions":["aam"]},"application/x-authorware-seg":{"source":"apache","extensions":["aas"]},"application/x-bcpio":{"source":"apache","extensions":["bcpio"]},"application/x-bdoc":{"compressible":false,"extensions":["bdoc"]},"application/x-bittorrent":{"source":"apache","extensions":["torrent"]},"application/x-blorb":{"source":"apache","extensions":["blb","blorb"]},"application/x-bzip":{"source":"apache","compressible":false,"extensions":["bz"]},"application/x-bzip2":{"source":"apache","compressible":false,"extensions":["bz2","boz"]},"application/x-cbr":{"source":"apache","extensions":["cbr","cba","cbt","cbz","cb7"]},"application/x-cdlink":{"source":"apache","extensions":["vcd"]},"application/x-cfs-compressed":{"source":"apache","extensions":["cfs"]},"application/x-chat":{"source":"apache","extensions":["chat"]},"application/x-chess-pgn":{"source":"apache","extensions":["pgn"]},"application/x-chrome-extension":{"extensions":["crx"]},"application/x-cocoa":{"source":"nginx","extensions":["cco"]},"application/x-compress":{"source":"apache"},"application/x-conference":{"source":"apache","extensions":["nsc"]},"application/x-cpio":{"source":"apache","extensions":["cpio"]},"application/x-csh":{"source":"apache","extensions":["csh"]},"application/x-deb":{"compressible":false},"application/x-debian-package":{"source":"apache","extensions":["deb","udeb"]},"application/x-dgc-compressed":{"source":"apache","extensions":["dgc"]},"application/x-director":{"source":"apache","extensions":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"]},"application/x-doom":{"source":"apache","extensions":["wad"]},"application/x-dtbncx+xml":{"source":"apache","compressible":true,"extensions":["ncx"]},"application/x-dtbook+xml":{"source":"apache","compressible":true,"extensions":["dtb"]},"application/x-dtbresource+xml":{"source":"apache","compressible":true,"extensions":["res"]},"application/x-dvi":{"source":"apache","compressible":false,"extensions":["dvi"]},"application/x-envoy":{"source":"apache","extensions":["evy"]},"application/x-eva":{"source":"apache","extensions":["eva"]},"application/x-font-bdf":{"source":"apache","extensions":["bdf"]},"application/x-font-dos":{"source":"apache"},"application/x-font-framemaker":{"source":"apache"},"application/x-font-ghostscript":{"source":"apache","extensions":["gsf"]},"application/x-font-libgrx":{"source":"apache"},"application/x-font-linux-psf":{"source":"apache","extensions":["psf"]},"application/x-font-pcf":{"source":"apache","extensions":["pcf"]},"application/x-font-snf":{"source":"apache","extensions":["snf"]},"application/x-font-speedo":{"source":"apache"},"application/x-font-sunos-news":{"source":"apache"},"application/x-font-type1":{"source":"apache","extensions":["pfa","pfb","pfm","afm"]},"application/x-font-vfont":{"source":"apache"},"application/x-freearc":{"source":"apache","extensions":["arc"]},"application/x-futuresplash":{"source":"apache","extensions":["spl"]},"application/x-gca-compressed":{"source":"apache","extensions":["gca"]},"application/x-glulx":{"source":"apache","extensions":["ulx"]},"application/x-gnumeric":{"source":"apache","extensions":["gnumeric"]},"application/x-gramps-xml":{"source":"apache","extensions":["gramps"]},"application/x-gtar":{"source":"apache","extensions":["gtar"]},"application/x-gzip":{"source":"apache"},"application/x-hdf":{"source":"apache","extensions":["hdf"]},"application/x-httpd-php":{"compressible":true,"extensions":["php"]},"application/x-install-instructions":{"source":"apache","extensions":["install"]},"application/x-iso9660-image":{"source":"apache","extensions":["iso"]},"application/x-java-archive-diff":{"source":"nginx","extensions":["jardiff"]},"application/x-java-jnlp-file":{"source":"apache","compressible":false,"extensions":["jnlp"]},"application/x-javascript":{"compressible":true},"application/x-keepass2":{"extensions":["kdbx"]},"application/x-latex":{"source":"apache","compressible":false,"extensions":["latex"]},"application/x-lua-bytecode":{"extensions":["luac"]},"application/x-lzh-compressed":{"source":"apache","extensions":["lzh","lha"]},"application/x-makeself":{"source":"nginx","extensions":["run"]},"application/x-mie":{"source":"apache","extensions":["mie"]},"application/x-mobipocket-ebook":{"source":"apache","extensions":["prc","mobi"]},"application/x-mpegurl":{"compressible":false},"application/x-ms-application":{"source":"apache","extensions":["application"]},"application/x-ms-shortcut":{"source":"apache","extensions":["lnk"]},"application/x-ms-wmd":{"source":"apache","extensions":["wmd"]},"application/x-ms-wmz":{"source":"apache","extensions":["wmz"]},"application/x-ms-xbap":{"source":"apache","extensions":["xbap"]},"application/x-msaccess":{"source":"apache","extensions":["mdb"]},"application/x-msbinder":{"source":"apache","extensions":["obd"]},"application/x-mscardfile":{"source":"apache","extensions":["crd"]},"application/x-msclip":{"source":"apache","extensions":["clp"]},"application/x-msdos-program":{"extensions":["exe"]},"application/x-msdownload":{"source":"apache","extensions":["exe","dll","com","bat","msi"]},"application/x-msmediaview":{"source":"apache","extensions":["mvb","m13","m14"]},"application/x-msmetafile":{"source":"apache","extensions":["wmf","wmz","emf","emz"]},"application/x-msmoney":{"source":"apache","extensions":["mny"]},"application/x-mspublisher":{"source":"apache","extensions":["pub"]},"application/x-msschedule":{"source":"apache","extensions":["scd"]},"application/x-msterminal":{"source":"apache","extensions":["trm"]},"application/x-mswrite":{"source":"apache","extensions":["wri"]},"application/x-netcdf":{"source":"apache","extensions":["nc","cdf"]},"application/x-ns-proxy-autoconfig":{"compressible":true,"extensions":["pac"]},"application/x-nzb":{"source":"apache","extensions":["nzb"]},"application/x-perl":{"source":"nginx","extensions":["pl","pm"]},"application/x-pilot":{"source":"nginx","extensions":["prc","pdb"]},"application/x-pkcs12":{"source":"apache","compressible":false,"extensions":["p12","pfx"]},"application/x-pkcs7-certificates":{"source":"apache","extensions":["p7b","spc"]},"application/x-pkcs7-certreqresp":{"source":"apache","extensions":["p7r"]},"application/x-pki-message":{"source":"iana"},"application/x-rar-compressed":{"source":"apache","compressible":false,"extensions":["rar"]},"application/x-redhat-package-manager":{"source":"nginx","extensions":["rpm"]},"application/x-research-info-systems":{"source":"apache","extensions":["ris"]},"application/x-sea":{"source":"nginx","extensions":["sea"]},"application/x-sh":{"source":"apache","compressible":true,"extensions":["sh"]},"application/x-shar":{"source":"apache","extensions":["shar"]},"application/x-shockwave-flash":{"source":"apache","compressible":false,"extensions":["swf"]},"application/x-silverlight-app":{"source":"apache","extensions":["xap"]},"application/x-sql":{"source":"apache","extensions":["sql"]},"application/x-stuffit":{"source":"apache","compressible":false,"extensions":["sit"]},"application/x-stuffitx":{"source":"apache","extensions":["sitx"]},"application/x-subrip":{"source":"apache","extensions":["srt"]},"application/x-sv4cpio":{"source":"apache","extensions":["sv4cpio"]},"application/x-sv4crc":{"source":"apache","extensions":["sv4crc"]},"application/x-t3vm-image":{"source":"apache","extensions":["t3"]},"application/x-tads":{"source":"apache","extensions":["gam"]},"application/x-tar":{"source":"apache","compressible":true,"extensions":["tar"]},"application/x-tcl":{"source":"apache","extensions":["tcl","tk"]},"application/x-tex":{"source":"apache","extensions":["tex"]},"application/x-tex-tfm":{"source":"apache","extensions":["tfm"]},"application/x-texinfo":{"source":"apache","extensions":["texinfo","texi"]},"application/x-tgif":{"source":"apache","extensions":["obj"]},"application/x-ustar":{"source":"apache","extensions":["ustar"]},"application/x-virtualbox-hdd":{"compressible":true,"extensions":["hdd"]},"application/x-virtualbox-ova":{"compressible":true,"extensions":["ova"]},"application/x-virtualbox-ovf":{"compressible":true,"extensions":["ovf"]},"application/x-virtualbox-vbox":{"compressible":true,"extensions":["vbox"]},"application/x-virtualbox-vbox-extpack":{"compressible":false,"extensions":["vbox-extpack"]},"application/x-virtualbox-vdi":{"compressible":true,"extensions":["vdi"]},"application/x-virtualbox-vhd":{"compressible":true,"extensions":["vhd"]},"application/x-virtualbox-vmdk":{"compressible":true,"extensions":["vmdk"]},"application/x-wais-source":{"source":"apache","extensions":["src"]},"application/x-web-app-manifest+json":{"compressible":true,"extensions":["webapp"]},"application/x-www-form-urlencoded":{"source":"iana","compressible":true},"application/x-x509-ca-cert":{"source":"iana","extensions":["der","crt","pem"]},"application/x-x509-ca-ra-cert":{"source":"iana"},"application/x-x509-next-ca-cert":{"source":"iana"},"application/x-xfig":{"source":"apache","extensions":["fig"]},"application/x-xliff+xml":{"source":"apache","compressible":true,"extensions":["xlf"]},"application/x-xpinstall":{"source":"apache","compressible":false,"extensions":["xpi"]},"application/x-xz":{"source":"apache","extensions":["xz"]},"application/x-zmachine":{"source":"apache","extensions":["z1","z2","z3","z4","z5","z6","z7","z8"]},"application/x400-bp":{"source":"iana"},"application/xacml+xml":{"source":"iana","compressible":true},"application/xaml+xml":{"source":"apache","compressible":true,"extensions":["xaml"]},"application/xcap-att+xml":{"source":"iana","compressible":true,"extensions":["xav"]},"application/xcap-caps+xml":{"source":"iana","compressible":true,"extensions":["xca"]},"application/xcap-diff+xml":{"source":"iana","compressible":true,"extensions":["xdf"]},"application/xcap-el+xml":{"source":"iana","compressible":true,"extensions":["xel"]},"application/xcap-error+xml":{"source":"iana","compressible":true,"extensions":["xer"]},"application/xcap-ns+xml":{"source":"iana","compressible":true,"extensions":["xns"]},"application/xcon-conference-info+xml":{"source":"iana","compressible":true},"application/xcon-conference-info-diff+xml":{"source":"iana","compressible":true},"application/xenc+xml":{"source":"iana","compressible":true,"extensions":["xenc"]},"application/xhtml+xml":{"source":"iana","compressible":true,"extensions":["xhtml","xht"]},"application/xhtml-voice+xml":{"source":"apache","compressible":true},"application/xliff+xml":{"source":"iana","compressible":true,"extensions":["xlf"]},"application/xml":{"source":"iana","compressible":true,"extensions":["xml","xsl","xsd","rng"]},"application/xml-dtd":{"source":"iana","compressible":true,"extensions":["dtd"]},"application/xml-external-parsed-entity":{"source":"iana"},"application/xml-patch+xml":{"source":"iana","compressible":true},"application/xmpp+xml":{"source":"iana","compressible":true},"application/xop+xml":{"source":"iana","compressible":true,"extensions":["xop"]},"application/xproc+xml":{"source":"apache","compressible":true,"extensions":["xpl"]},"application/xslt+xml":{"source":"iana","compressible":true,"extensions":["xslt"]},"application/xspf+xml":{"source":"apache","compressible":true,"extensions":["xspf"]},"application/xv+xml":{"source":"iana","compressible":true,"extensions":["mxml","xhvml","xvml","xvm"]},"application/yang":{"source":"iana","extensions":["yang"]},"application/yang-data+json":{"source":"iana","compressible":true},"application/yang-data+xml":{"source":"iana","compressible":true},"application/yang-patch+json":{"source":"iana","compressible":true},"application/yang-patch+xml":{"source":"iana","compressible":true},"application/yin+xml":{"source":"iana","compressible":true,"extensions":["yin"]},"application/zip":{"source":"iana","compressible":false,"extensions":["zip"]},"application/zlib":{"source":"iana"},"application/zstd":{"source":"iana"},"audio/1d-interleaved-parityfec":{"source":"iana"},"audio/32kadpcm":{"source":"iana"},"audio/3gpp":{"source":"iana","compressible":false,"extensions":["3gpp"]},"audio/3gpp2":{"source":"iana"},"audio/aac":{"source":"iana"},"audio/ac3":{"source":"iana"},"audio/adpcm":{"source":"apache","extensions":["adp"]},"audio/amr":{"source":"iana"},"audio/amr-wb":{"source":"iana"},"audio/amr-wb+":{"source":"iana"},"audio/aptx":{"source":"iana"},"audio/asc":{"source":"iana"},"audio/atrac-advanced-lossless":{"source":"iana"},"audio/atrac-x":{"source":"iana"},"audio/atrac3":{"source":"iana"},"audio/basic":{"source":"iana","compressible":false,"extensions":["au","snd"]},"audio/bv16":{"source":"iana"},"audio/bv32":{"source":"iana"},"audio/clearmode":{"source":"iana"},"audio/cn":{"source":"iana"},"audio/dat12":{"source":"iana"},"audio/dls":{"source":"iana"},"audio/dsr-es201108":{"source":"iana"},"audio/dsr-es202050":{"source":"iana"},"audio/dsr-es202211":{"source":"iana"},"audio/dsr-es202212":{"source":"iana"},"audio/dv":{"source":"iana"},"audio/dvi4":{"source":"iana"},"audio/eac3":{"source":"iana"},"audio/encaprtp":{"source":"iana"},"audio/evrc":{"source":"iana"},"audio/evrc-qcp":{"source":"iana"},"audio/evrc0":{"source":"iana"},"audio/evrc1":{"source":"iana"},"audio/evrcb":{"source":"iana"},"audio/evrcb0":{"source":"iana"},"audio/evrcb1":{"source":"iana"},"audio/evrcnw":{"source":"iana"},"audio/evrcnw0":{"source":"iana"},"audio/evrcnw1":{"source":"iana"},"audio/evrcwb":{"source":"iana"},"audio/evrcwb0":{"source":"iana"},"audio/evrcwb1":{"source":"iana"},"audio/evs":{"source":"iana"},"audio/flexfec":{"source":"iana"},"audio/fwdred":{"source":"iana"},"audio/g711-0":{"source":"iana"},"audio/g719":{"source":"iana"},"audio/g722":{"source":"iana"},"audio/g7221":{"source":"iana"},"audio/g723":{"source":"iana"},"audio/g726-16":{"source":"iana"},"audio/g726-24":{"source":"iana"},"audio/g726-32":{"source":"iana"},"audio/g726-40":{"source":"iana"},"audio/g728":{"source":"iana"},"audio/g729":{"source":"iana"},"audio/g7291":{"source":"iana"},"audio/g729d":{"source":"iana"},"audio/g729e":{"source":"iana"},"audio/gsm":{"source":"iana"},"audio/gsm-efr":{"source":"iana"},"audio/gsm-hr-08":{"source":"iana"},"audio/ilbc":{"source":"iana"},"audio/ip-mr_v2.5":{"source":"iana"},"audio/isac":{"source":"apache"},"audio/l16":{"source":"iana"},"audio/l20":{"source":"iana"},"audio/l24":{"source":"iana","compressible":false},"audio/l8":{"source":"iana"},"audio/lpc":{"source":"iana"},"audio/melp":{"source":"iana"},"audio/melp1200":{"source":"iana"},"audio/melp2400":{"source":"iana"},"audio/melp600":{"source":"iana"},"audio/mhas":{"source":"iana"},"audio/midi":{"source":"apache","extensions":["mid","midi","kar","rmi"]},"audio/mobile-xmf":{"source":"iana","extensions":["mxmf"]},"audio/mp3":{"compressible":false,"extensions":["mp3"]},"audio/mp4":{"source":"iana","compressible":false,"extensions":["m4a","mp4a"]},"audio/mp4a-latm":{"source":"iana"},"audio/mpa":{"source":"iana"},"audio/mpa-robust":{"source":"iana"},"audio/mpeg":{"source":"iana","compressible":false,"extensions":["mpga","mp2","mp2a","mp3","m2a","m3a"]},"audio/mpeg4-generic":{"source":"iana"},"audio/musepack":{"source":"apache"},"audio/ogg":{"source":"iana","compressible":false,"extensions":["oga","ogg","spx"]},"audio/opus":{"source":"iana"},"audio/parityfec":{"source":"iana"},"audio/pcma":{"source":"iana"},"audio/pcma-wb":{"source":"iana"},"audio/pcmu":{"source":"iana"},"audio/pcmu-wb":{"source":"iana"},"audio/prs.sid":{"source":"iana"},"audio/qcelp":{"source":"iana"},"audio/raptorfec":{"source":"iana"},"audio/red":{"source":"iana"},"audio/rtp-enc-aescm128":{"source":"iana"},"audio/rtp-midi":{"source":"iana"},"audio/rtploopback":{"source":"iana"},"audio/rtx":{"source":"iana"},"audio/s3m":{"source":"apache","extensions":["s3m"]},"audio/silk":{"source":"apache","extensions":["sil"]},"audio/smv":{"source":"iana"},"audio/smv-qcp":{"source":"iana"},"audio/smv0":{"source":"iana"},"audio/sp-midi":{"source":"iana"},"audio/speex":{"source":"iana"},"audio/t140c":{"source":"iana"},"audio/t38":{"source":"iana"},"audio/telephone-event":{"source":"iana"},"audio/tetra_acelp":{"source":"iana"},"audio/tetra_acelp_bb":{"source":"iana"},"audio/tone":{"source":"iana"},"audio/uemclip":{"source":"iana"},"audio/ulpfec":{"source":"iana"},"audio/usac":{"source":"iana"},"audio/vdvi":{"source":"iana"},"audio/vmr-wb":{"source":"iana"},"audio/vnd.3gpp.iufp":{"source":"iana"},"audio/vnd.4sb":{"source":"iana"},"audio/vnd.audiokoz":{"source":"iana"},"audio/vnd.celp":{"source":"iana"},"audio/vnd.cisco.nse":{"source":"iana"},"audio/vnd.cmles.radio-events":{"source":"iana"},"audio/vnd.cns.anp1":{"source":"iana"},"audio/vnd.cns.inf1":{"source":"iana"},"audio/vnd.dece.audio":{"source":"iana","extensions":["uva","uvva"]},"audio/vnd.digital-winds":{"source":"iana","extensions":["eol"]},"audio/vnd.dlna.adts":{"source":"iana"},"audio/vnd.dolby.heaac.1":{"source":"iana"},"audio/vnd.dolby.heaac.2":{"source":"iana"},"audio/vnd.dolby.mlp":{"source":"iana"},"audio/vnd.dolby.mps":{"source":"iana"},"audio/vnd.dolby.pl2":{"source":"iana"},"audio/vnd.dolby.pl2x":{"source":"iana"},"audio/vnd.dolby.pl2z":{"source":"iana"},"audio/vnd.dolby.pulse.1":{"source":"iana"},"audio/vnd.dra":{"source":"iana","extensions":["dra"]},"audio/vnd.dts":{"source":"iana","extensions":["dts"]},"audio/vnd.dts.hd":{"source":"iana","extensions":["dtshd"]},"audio/vnd.dts.uhd":{"source":"iana"},"audio/vnd.dvb.file":{"source":"iana"},"audio/vnd.everad.plj":{"source":"iana"},"audio/vnd.hns.audio":{"source":"iana"},"audio/vnd.lucent.voice":{"source":"iana","extensions":["lvp"]},"audio/vnd.ms-playready.media.pya":{"source":"iana","extensions":["pya"]},"audio/vnd.nokia.mobile-xmf":{"source":"iana"},"audio/vnd.nortel.vbk":{"source":"iana"},"audio/vnd.nuera.ecelp4800":{"source":"iana","extensions":["ecelp4800"]},"audio/vnd.nuera.ecelp7470":{"source":"iana","extensions":["ecelp7470"]},"audio/vnd.nuera.ecelp9600":{"source":"iana","extensions":["ecelp9600"]},"audio/vnd.octel.sbc":{"source":"iana"},"audio/vnd.presonus.multitrack":{"source":"iana"},"audio/vnd.qcelp":{"source":"iana"},"audio/vnd.rhetorex.32kadpcm":{"source":"iana"},"audio/vnd.rip":{"source":"iana","extensions":["rip"]},"audio/vnd.rn-realaudio":{"compressible":false},"audio/vnd.sealedmedia.softseal.mpeg":{"source":"iana"},"audio/vnd.vmx.cvsd":{"source":"iana"},"audio/vnd.wave":{"compressible":false},"audio/vorbis":{"source":"iana","compressible":false},"audio/vorbis-config":{"source":"iana"},"audio/wav":{"compressible":false,"extensions":["wav"]},"audio/wave":{"compressible":false,"extensions":["wav"]},"audio/webm":{"source":"apache","compressible":false,"extensions":["weba"]},"audio/x-aac":{"source":"apache","compressible":false,"extensions":["aac"]},"audio/x-aiff":{"source":"apache","extensions":["aif","aiff","aifc"]},"audio/x-caf":{"source":"apache","compressible":false,"extensions":["caf"]},"audio/x-flac":{"source":"apache","extensions":["flac"]},"audio/x-m4a":{"source":"nginx","extensions":["m4a"]},"audio/x-matroska":{"source":"apache","extensions":["mka"]},"audio/x-mpegurl":{"source":"apache","extensions":["m3u"]},"audio/x-ms-wax":{"source":"apache","extensions":["wax"]},"audio/x-ms-wma":{"source":"apache","extensions":["wma"]},"audio/x-pn-realaudio":{"source":"apache","extensions":["ram","ra"]},"audio/x-pn-realaudio-plugin":{"source":"apache","extensions":["rmp"]},"audio/x-realaudio":{"source":"nginx","extensions":["ra"]},"audio/x-tta":{"source":"apache"},"audio/x-wav":{"source":"apache","extensions":["wav"]},"audio/xm":{"source":"apache","extensions":["xm"]},"chemical/x-cdx":{"source":"apache","extensions":["cdx"]},"chemical/x-cif":{"source":"apache","extensions":["cif"]},"chemical/x-cmdf":{"source":"apache","extensions":["cmdf"]},"chemical/x-cml":{"source":"apache","extensions":["cml"]},"chemical/x-csml":{"source":"apache","extensions":["csml"]},"chemical/x-pdb":{"source":"apache"},"chemical/x-xyz":{"source":"apache","extensions":["xyz"]},"font/collection":{"source":"iana","extensions":["ttc"]},"font/otf":{"source":"iana","compressible":true,"extensions":["otf"]},"font/sfnt":{"source":"iana"},"font/ttf":{"source":"iana","compressible":true,"extensions":["ttf"]},"font/woff":{"source":"iana","extensions":["woff"]},"font/woff2":{"source":"iana","extensions":["woff2"]},"image/aces":{"source":"iana","extensions":["exr"]},"image/apng":{"compressible":false,"extensions":["apng"]},"image/avci":{"source":"iana"},"image/avcs":{"source":"iana"},"image/bmp":{"source":"iana","compressible":true,"extensions":["bmp"]},"image/cgm":{"source":"iana","extensions":["cgm"]},"image/dicom-rle":{"source":"iana","extensions":["drle"]},"image/emf":{"source":"iana","extensions":["emf"]},"image/fits":{"source":"iana","extensions":["fits"]},"image/g3fax":{"source":"iana","extensions":["g3"]},"image/gif":{"source":"iana","compressible":false,"extensions":["gif"]},"image/heic":{"source":"iana","extensions":["heic"]},"image/heic-sequence":{"source":"iana","extensions":["heics"]},"image/heif":{"source":"iana","extensions":["heif"]},"image/heif-sequence":{"source":"iana","extensions":["heifs"]},"image/hej2k":{"source":"iana","extensions":["hej2"]},"image/hsj2":{"source":"iana","extensions":["hsj2"]},"image/ief":{"source":"iana","extensions":["ief"]},"image/jls":{"source":"iana","extensions":["jls"]},"image/jp2":{"source":"iana","compressible":false,"extensions":["jp2","jpg2"]},"image/jpeg":{"source":"iana","compressible":false,"extensions":["jpeg","jpg","jpe"]},"image/jph":{"source":"iana","extensions":["jph"]},"image/jphc":{"source":"iana","extensions":["jhc"]},"image/jpm":{"source":"iana","compressible":false,"extensions":["jpm"]},"image/jpx":{"source":"iana","compressible":false,"extensions":["jpx","jpf"]},"image/jxr":{"source":"iana","extensions":["jxr"]},"image/jxra":{"source":"iana","extensions":["jxra"]},"image/jxrs":{"source":"iana","extensions":["jxrs"]},"image/jxs":{"source":"iana","extensions":["jxs"]},"image/jxsc":{"source":"iana","extensions":["jxsc"]},"image/jxsi":{"source":"iana","extensions":["jxsi"]},"image/jxss":{"source":"iana","extensions":["jxss"]},"image/ktx":{"source":"iana","extensions":["ktx"]},"image/naplps":{"source":"iana"},"image/pjpeg":{"compressible":false},"image/png":{"source":"iana","compressible":false,"extensions":["png"]},"image/prs.btif":{"source":"iana","extensions":["btif"]},"image/prs.pti":{"source":"iana","extensions":["pti"]},"image/pwg-raster":{"source":"iana"},"image/sgi":{"source":"apache","extensions":["sgi"]},"image/svg+xml":{"source":"iana","compressible":true,"extensions":["svg","svgz"]},"image/t38":{"source":"iana","extensions":["t38"]},"image/tiff":{"source":"iana","compressible":false,"extensions":["tif","tiff"]},"image/tiff-fx":{"source":"iana","extensions":["tfx"]},"image/vnd.adobe.photoshop":{"source":"iana","compressible":true,"extensions":["psd"]},"image/vnd.airzip.accelerator.azv":{"source":"iana","extensions":["azv"]},"image/vnd.cns.inf2":{"source":"iana"},"image/vnd.dece.graphic":{"source":"iana","extensions":["uvi","uvvi","uvg","uvvg"]},"image/vnd.djvu":{"source":"iana","extensions":["djvu","djv"]},"image/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"image/vnd.dwg":{"source":"iana","extensions":["dwg"]},"image/vnd.dxf":{"source":"iana","extensions":["dxf"]},"image/vnd.fastbidsheet":{"source":"iana","extensions":["fbs"]},"image/vnd.fpx":{"source":"iana","extensions":["fpx"]},"image/vnd.fst":{"source":"iana","extensions":["fst"]},"image/vnd.fujixerox.edmics-mmr":{"source":"iana","extensions":["mmr"]},"image/vnd.fujixerox.edmics-rlc":{"source":"iana","extensions":["rlc"]},"image/vnd.globalgraphics.pgb":{"source":"iana"},"image/vnd.microsoft.icon":{"source":"iana","extensions":["ico"]},"image/vnd.mix":{"source":"iana"},"image/vnd.mozilla.apng":{"source":"iana"},"image/vnd.ms-dds":{"extensions":["dds"]},"image/vnd.ms-modi":{"source":"iana","extensions":["mdi"]},"image/vnd.ms-photo":{"source":"apache","extensions":["wdp"]},"image/vnd.net-fpx":{"source":"iana","extensions":["npx"]},"image/vnd.radiance":{"source":"iana"},"image/vnd.sealed.png":{"source":"iana"},"image/vnd.sealedmedia.softseal.gif":{"source":"iana"},"image/vnd.sealedmedia.softseal.jpg":{"source":"iana"},"image/vnd.svf":{"source":"iana"},"image/vnd.tencent.tap":{"source":"iana","extensions":["tap"]},"image/vnd.valve.source.texture":{"source":"iana","extensions":["vtf"]},"image/vnd.wap.wbmp":{"source":"iana","extensions":["wbmp"]},"image/vnd.xiff":{"source":"iana","extensions":["xif"]},"image/vnd.zbrush.pcx":{"source":"iana","extensions":["pcx"]},"image/webp":{"source":"apache","extensions":["webp"]},"image/wmf":{"source":"iana","extensions":["wmf"]},"image/x-3ds":{"source":"apache","extensions":["3ds"]},"image/x-cmu-raster":{"source":"apache","extensions":["ras"]},"image/x-cmx":{"source":"apache","extensions":["cmx"]},"image/x-freehand":{"source":"apache","extensions":["fh","fhc","fh4","fh5","fh7"]},"image/x-icon":{"source":"apache","compressible":true,"extensions":["ico"]},"image/x-jng":{"source":"nginx","extensions":["jng"]},"image/x-mrsid-image":{"source":"apache","extensions":["sid"]},"image/x-ms-bmp":{"source":"nginx","compressible":true,"extensions":["bmp"]},"image/x-pcx":{"source":"apache","extensions":["pcx"]},"image/x-pict":{"source":"apache","extensions":["pic","pct"]},"image/x-portable-anymap":{"source":"apache","extensions":["pnm"]},"image/x-portable-bitmap":{"source":"apache","extensions":["pbm"]},"image/x-portable-graymap":{"source":"apache","extensions":["pgm"]},"image/x-portable-pixmap":{"source":"apache","extensions":["ppm"]},"image/x-rgb":{"source":"apache","extensions":["rgb"]},"image/x-tga":{"source":"apache","extensions":["tga"]},"image/x-xbitmap":{"source":"apache","extensions":["xbm"]},"image/x-xcf":{"compressible":false},"image/x-xpixmap":{"source":"apache","extensions":["xpm"]},"image/x-xwindowdump":{"source":"apache","extensions":["xwd"]},"message/cpim":{"source":"iana"},"message/delivery-status":{"source":"iana"},"message/disposition-notification":{"source":"iana","extensions":["disposition-notification"]},"message/external-body":{"source":"iana"},"message/feedback-report":{"source":"iana"},"message/global":{"source":"iana","extensions":["u8msg"]},"message/global-delivery-status":{"source":"iana","extensions":["u8dsn"]},"message/global-disposition-notification":{"source":"iana","extensions":["u8mdn"]},"message/global-headers":{"source":"iana","extensions":["u8hdr"]},"message/http":{"source":"iana","compressible":false},"message/imdn+xml":{"source":"iana","compressible":true},"message/news":{"source":"iana"},"message/partial":{"source":"iana","compressible":false},"message/rfc822":{"source":"iana","compressible":true,"extensions":["eml","mime"]},"message/s-http":{"source":"iana"},"message/sip":{"source":"iana"},"message/sipfrag":{"source":"iana"},"message/tracking-status":{"source":"iana"},"message/vnd.si.simp":{"source":"iana"},"message/vnd.wfa.wsc":{"source":"iana","extensions":["wsc"]},"model/3mf":{"source":"iana","extensions":["3mf"]},"model/gltf+json":{"source":"iana","compressible":true,"extensions":["gltf"]},"model/gltf-binary":{"source":"iana","compressible":true,"extensions":["glb"]},"model/iges":{"source":"iana","compressible":false,"extensions":["igs","iges"]},"model/mesh":{"source":"iana","compressible":false,"extensions":["msh","mesh","silo"]},"model/mtl":{"source":"iana","extensions":["mtl"]},"model/obj":{"source":"iana","extensions":["obj"]},"model/stl":{"source":"iana","extensions":["stl"]},"model/vnd.collada+xml":{"source":"iana","compressible":true,"extensions":["dae"]},"model/vnd.dwf":{"source":"iana","extensions":["dwf"]},"model/vnd.flatland.3dml":{"source":"iana"},"model/vnd.gdl":{"source":"iana","extensions":["gdl"]},"model/vnd.gs-gdl":{"source":"apache"},"model/vnd.gs.gdl":{"source":"iana"},"model/vnd.gtw":{"source":"iana","extensions":["gtw"]},"model/vnd.moml+xml":{"source":"iana","compressible":true},"model/vnd.mts":{"source":"iana","extensions":["mts"]},"model/vnd.opengex":{"source":"iana","extensions":["ogex"]},"model/vnd.parasolid.transmit.binary":{"source":"iana","extensions":["x_b"]},"model/vnd.parasolid.transmit.text":{"source":"iana","extensions":["x_t"]},"model/vnd.rosette.annotated-data-model":{"source":"iana"},"model/vnd.usdz+zip":{"source":"iana","compressible":false,"extensions":["usdz"]},"model/vnd.valve.source.compiled-map":{"source":"iana","extensions":["bsp"]},"model/vnd.vtu":{"source":"iana","extensions":["vtu"]},"model/vrml":{"source":"iana","compressible":false,"extensions":["wrl","vrml"]},"model/x3d+binary":{"source":"apache","compressible":false,"extensions":["x3db","x3dbz"]},"model/x3d+fastinfoset":{"source":"iana","extensions":["x3db"]},"model/x3d+vrml":{"source":"apache","compressible":false,"extensions":["x3dv","x3dvz"]},"model/x3d+xml":{"source":"iana","compressible":true,"extensions":["x3d","x3dz"]},"model/x3d-vrml":{"source":"iana","extensions":["x3dv"]},"multipart/alternative":{"source":"iana","compressible":false},"multipart/appledouble":{"source":"iana"},"multipart/byteranges":{"source":"iana"},"multipart/digest":{"source":"iana"},"multipart/encrypted":{"source":"iana","compressible":false},"multipart/form-data":{"source":"iana","compressible":false},"multipart/header-set":{"source":"iana"},"multipart/mixed":{"source":"iana"},"multipart/multilingual":{"source":"iana"},"multipart/parallel":{"source":"iana"},"multipart/related":{"source":"iana","compressible":false},"multipart/report":{"source":"iana"},"multipart/signed":{"source":"iana","compressible":false},"multipart/vnd.bint.med-plus":{"source":"iana"},"multipart/voice-message":{"source":"iana"},"multipart/x-mixed-replace":{"source":"iana"},"text/1d-interleaved-parityfec":{"source":"iana"},"text/cache-manifest":{"source":"iana","compressible":true,"extensions":["appcache","manifest"]},"text/calendar":{"source":"iana","extensions":["ics","ifb"]},"text/calender":{"compressible":true},"text/cmd":{"compressible":true},"text/coffeescript":{"extensions":["coffee","litcoffee"]},"text/css":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["css"]},"text/csv":{"source":"iana","compressible":true,"extensions":["csv"]},"text/csv-schema":{"source":"iana"},"text/directory":{"source":"iana"},"text/dns":{"source":"iana"},"text/ecmascript":{"source":"iana"},"text/encaprtp":{"source":"iana"},"text/enriched":{"source":"iana"},"text/flexfec":{"source":"iana"},"text/fwdred":{"source":"iana"},"text/grammar-ref-list":{"source":"iana"},"text/html":{"source":"iana","compressible":true,"extensions":["html","htm","shtml"]},"text/jade":{"extensions":["jade"]},"text/javascript":{"source":"iana","compressible":true},"text/jcr-cnd":{"source":"iana"},"text/jsx":{"compressible":true,"extensions":["jsx"]},"text/less":{"compressible":true,"extensions":["less"]},"text/markdown":{"source":"iana","compressible":true,"extensions":["markdown","md"]},"text/mathml":{"source":"nginx","extensions":["mml"]},"text/mdx":{"compressible":true,"extensions":["mdx"]},"text/mizar":{"source":"iana"},"text/n3":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["n3"]},"text/parameters":{"source":"iana","charset":"UTF-8"},"text/parityfec":{"source":"iana"},"text/plain":{"source":"iana","compressible":true,"extensions":["txt","text","conf","def","list","log","in","ini"]},"text/provenance-notation":{"source":"iana","charset":"UTF-8"},"text/prs.fallenstein.rst":{"source":"iana"},"text/prs.lines.tag":{"source":"iana","extensions":["dsc"]},"text/prs.prop.logic":{"source":"iana"},"text/raptorfec":{"source":"iana"},"text/red":{"source":"iana"},"text/rfc822-headers":{"source":"iana"},"text/richtext":{"source":"iana","compressible":true,"extensions":["rtx"]},"text/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"text/rtp-enc-aescm128":{"source":"iana"},"text/rtploopback":{"source":"iana"},"text/rtx":{"source":"iana"},"text/sgml":{"source":"iana","extensions":["sgml","sgm"]},"text/shex":{"extensions":["shex"]},"text/slim":{"extensions":["slim","slm"]},"text/strings":{"source":"iana"},"text/stylus":{"extensions":["stylus","styl"]},"text/t140":{"source":"iana"},"text/tab-separated-values":{"source":"iana","compressible":true,"extensions":["tsv"]},"text/troff":{"source":"iana","extensions":["t","tr","roff","man","me","ms"]},"text/turtle":{"source":"iana","charset":"UTF-8","extensions":["ttl"]},"text/ulpfec":{"source":"iana"},"text/uri-list":{"source":"iana","compressible":true,"extensions":["uri","uris","urls"]},"text/vcard":{"source":"iana","compressible":true,"extensions":["vcard"]},"text/vnd.a":{"source":"iana"},"text/vnd.abc":{"source":"iana"},"text/vnd.ascii-art":{"source":"iana"},"text/vnd.curl":{"source":"iana","extensions":["curl"]},"text/vnd.curl.dcurl":{"source":"apache","extensions":["dcurl"]},"text/vnd.curl.mcurl":{"source":"apache","extensions":["mcurl"]},"text/vnd.curl.scurl":{"source":"apache","extensions":["scurl"]},"text/vnd.debian.copyright":{"source":"iana","charset":"UTF-8"},"text/vnd.dmclientscript":{"source":"iana"},"text/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"text/vnd.esmertec.theme-descriptor":{"source":"iana","charset":"UTF-8"},"text/vnd.ficlab.flt":{"source":"iana"},"text/vnd.fly":{"source":"iana","extensions":["fly"]},"text/vnd.fmi.flexstor":{"source":"iana","extensions":["flx"]},"text/vnd.gml":{"source":"iana"},"text/vnd.graphviz":{"source":"iana","extensions":["gv"]},"text/vnd.hgl":{"source":"iana"},"text/vnd.in3d.3dml":{"source":"iana","extensions":["3dml"]},"text/vnd.in3d.spot":{"source":"iana","extensions":["spot"]},"text/vnd.iptc.newsml":{"source":"iana"},"text/vnd.iptc.nitf":{"source":"iana"},"text/vnd.latex-z":{"source":"iana"},"text/vnd.motorola.reflex":{"source":"iana"},"text/vnd.ms-mediapackage":{"source":"iana"},"text/vnd.net2phone.commcenter.command":{"source":"iana"},"text/vnd.radisys.msml-basic-layout":{"source":"iana"},"text/vnd.senx.warpscript":{"source":"iana"},"text/vnd.si.uricatalogue":{"source":"iana"},"text/vnd.sosi":{"source":"iana"},"text/vnd.sun.j2me.app-descriptor":{"source":"iana","charset":"UTF-8","extensions":["jad"]},"text/vnd.trolltech.linguist":{"source":"iana","charset":"UTF-8"},"text/vnd.wap.si":{"source":"iana"},"text/vnd.wap.sl":{"source":"iana"},"text/vnd.wap.wml":{"source":"iana","extensions":["wml"]},"text/vnd.wap.wmlscript":{"source":"iana","extensions":["wmls"]},"text/vtt":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["vtt"]},"text/x-asm":{"source":"apache","extensions":["s","asm"]},"text/x-c":{"source":"apache","extensions":["c","cc","cxx","cpp","h","hh","dic"]},"text/x-component":{"source":"nginx","extensions":["htc"]},"text/x-fortran":{"source":"apache","extensions":["f","for","f77","f90"]},"text/x-gwt-rpc":{"compressible":true},"text/x-handlebars-template":{"extensions":["hbs"]},"text/x-java-source":{"source":"apache","extensions":["java"]},"text/x-jquery-tmpl":{"compressible":true},"text/x-lua":{"extensions":["lua"]},"text/x-markdown":{"compressible":true,"extensions":["mkd"]},"text/x-nfo":{"source":"apache","extensions":["nfo"]},"text/x-opml":{"source":"apache","extensions":["opml"]},"text/x-org":{"compressible":true,"extensions":["org"]},"text/x-pascal":{"source":"apache","extensions":["p","pas"]},"text/x-processing":{"compressible":true,"extensions":["pde"]},"text/x-sass":{"extensions":["sass"]},"text/x-scss":{"extensions":["scss"]},"text/x-setext":{"source":"apache","extensions":["etx"]},"text/x-sfv":{"source":"apache","extensions":["sfv"]},"text/x-suse-ymp":{"compressible":true,"extensions":["ymp"]},"text/x-uuencode":{"source":"apache","extensions":["uu"]},"text/x-vcalendar":{"source":"apache","extensions":["vcs"]},"text/x-vcard":{"source":"apache","extensions":["vcf"]},"text/xml":{"source":"iana","compressible":true,"extensions":["xml"]},"text/xml-external-parsed-entity":{"source":"iana"},"text/yaml":{"extensions":["yaml","yml"]},"video/1d-interleaved-parityfec":{"source":"iana"},"video/3gpp":{"source":"iana","extensions":["3gp","3gpp"]},"video/3gpp-tt":{"source":"iana"},"video/3gpp2":{"source":"iana","extensions":["3g2"]},"video/bmpeg":{"source":"iana"},"video/bt656":{"source":"iana"},"video/celb":{"source":"iana"},"video/dv":{"source":"iana"},"video/encaprtp":{"source":"iana"},"video/flexfec":{"source":"iana"},"video/h261":{"source":"iana","extensions":["h261"]},"video/h263":{"source":"iana","extensions":["h263"]},"video/h263-1998":{"source":"iana"},"video/h263-2000":{"source":"iana"},"video/h264":{"source":"iana","extensions":["h264"]},"video/h264-rcdo":{"source":"iana"},"video/h264-svc":{"source":"iana"},"video/h265":{"source":"iana"},"video/iso.segment":{"source":"iana"},"video/jpeg":{"source":"iana","extensions":["jpgv"]},"video/jpeg2000":{"source":"iana"},"video/jpm":{"source":"apache","extensions":["jpm","jpgm"]},"video/mj2":{"source":"iana","extensions":["mj2","mjp2"]},"video/mp1s":{"source":"iana"},"video/mp2p":{"source":"iana"},"video/mp2t":{"source":"iana","extensions":["ts"]},"video/mp4":{"source":"iana","compressible":false,"extensions":["mp4","mp4v","mpg4"]},"video/mp4v-es":{"source":"iana"},"video/mpeg":{"source":"iana","compressible":false,"extensions":["mpeg","mpg","mpe","m1v","m2v"]},"video/mpeg4-generic":{"source":"iana"},"video/mpv":{"source":"iana"},"video/nv":{"source":"iana"},"video/ogg":{"source":"iana","compressible":false,"extensions":["ogv"]},"video/parityfec":{"source":"iana"},"video/pointer":{"source":"iana"},"video/quicktime":{"source":"iana","compressible":false,"extensions":["qt","mov"]},"video/raptorfec":{"source":"iana"},"video/raw":{"source":"iana"},"video/rtp-enc-aescm128":{"source":"iana"},"video/rtploopback":{"source":"iana"},"video/rtx":{"source":"iana"},"video/smpte291":{"source":"iana"},"video/smpte292m":{"source":"iana"},"video/ulpfec":{"source":"iana"},"video/vc1":{"source":"iana"},"video/vc2":{"source":"iana"},"video/vnd.cctv":{"source":"iana"},"video/vnd.dece.hd":{"source":"iana","extensions":["uvh","uvvh"]},"video/vnd.dece.mobile":{"source":"iana","extensions":["uvm","uvvm"]},"video/vnd.dece.mp4":{"source":"iana"},"video/vnd.dece.pd":{"source":"iana","extensions":["uvp","uvvp"]},"video/vnd.dece.sd":{"source":"iana","extensions":["uvs","uvvs"]},"video/vnd.dece.video":{"source":"iana","extensions":["uvv","uvvv"]},"video/vnd.directv.mpeg":{"source":"iana"},"video/vnd.directv.mpeg-tts":{"source":"iana"},"video/vnd.dlna.mpeg-tts":{"source":"iana"},"video/vnd.dvb.file":{"source":"iana","extensions":["dvb"]},"video/vnd.fvt":{"source":"iana","extensions":["fvt"]},"video/vnd.hns.video":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.ttsavc":{"source":"iana"},"video/vnd.iptvforum.ttsmpeg2":{"source":"iana"},"video/vnd.motorola.video":{"source":"iana"},"video/vnd.motorola.videop":{"source":"iana"},"video/vnd.mpegurl":{"source":"iana","extensions":["mxu","m4u"]},"video/vnd.ms-playready.media.pyv":{"source":"iana","extensions":["pyv"]},"video/vnd.nokia.interleaved-multimedia":{"source":"iana"},"video/vnd.nokia.mp4vr":{"source":"iana"},"video/vnd.nokia.videovoip":{"source":"iana"},"video/vnd.objectvideo":{"source":"iana"},"video/vnd.radgamettools.bink":{"source":"iana"},"video/vnd.radgamettools.smacker":{"source":"iana"},"video/vnd.sealed.mpeg1":{"source":"iana"},"video/vnd.sealed.mpeg4":{"source":"iana"},"video/vnd.sealed.swf":{"source":"iana"},"video/vnd.sealedmedia.softseal.mov":{"source":"iana"},"video/vnd.uvvu.mp4":{"source":"iana","extensions":["uvu","uvvu"]},"video/vnd.vivo":{"source":"iana","extensions":["viv"]},"video/vnd.youtube.yt":{"source":"iana"},"video/vp8":{"source":"iana"},"video/webm":{"source":"apache","compressible":false,"extensions":["webm"]},"video/x-f4v":{"source":"apache","extensions":["f4v"]},"video/x-fli":{"source":"apache","extensions":["fli"]},"video/x-flv":{"source":"apache","compressible":false,"extensions":["flv"]},"video/x-m4v":{"source":"apache","extensions":["m4v"]},"video/x-matroska":{"source":"apache","compressible":false,"extensions":["mkv","mk3d","mks"]},"video/x-mng":{"source":"apache","extensions":["mng"]},"video/x-ms-asf":{"source":"apache","extensions":["asf","asx"]},"video/x-ms-vob":{"source":"apache","extensions":["vob"]},"video/x-ms-wm":{"source":"apache","extensions":["wm"]},"video/x-ms-wmv":{"source":"apache","compressible":false,"extensions":["wmv"]},"video/x-ms-wmx":{"source":"apache","extensions":["wmx"]},"video/x-ms-wvx":{"source":"apache","extensions":["wvx"]},"video/x-msvideo":{"source":"apache","extensions":["avi"]},"video/x-sgi-movie":{"source":"apache","extensions":["movie"]},"video/x-smv":{"source":"apache","extensions":["smv"]},"x-conference/x-cooltalk":{"source":"apache","extensions":["ice"]},"x-shader/x-fragment":{"compressible":true},"x-shader/x-vertex":{"compressible":true}}'
        );
    },
    function (e, a, n) {
        e.exports = { parallel: n(147), serial: n(149), serialOrdered: n(54) };
    },
    function (e, a, n) {
        var i = n(49),
            t = n(52),
            o = n(53);
        e.exports = function (e, a, n) {
            var s = t(e);
            for (; s.index < (s.keyedList || e).length; )
                i(e, a, s, function (e, a) {
                    e ? n(e, a) : 0 !== Object.keys(s.jobs).length || n(null, s.results);
                }),
                    s.index++;
            return o.bind(s, n);
        };
    },
    function (e, a) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        e.exports = function (e) {
            var a = "function" == typeof setImmediate ? setImmediate : "object" == ("undefined" == typeof process ? "undefined" : n(process)) && "function" == typeof process.nextTick ? process.nextTick : null;
            a ? a(e) : setTimeout(e, 0);
        };
    },
    function (e, a, n) {
        var i = n(54);
        e.exports = function (e, a, n) {
            return i(e, a, null, n);
        };
    },
    function (e, a) {
        e.exports = function (e, a) {
            return (
                Object.keys(a).forEach(function (n) {
                    e[n] = e[n] || a[n];
                }),
                e
            );
        };
    },
    function (e, a, n) {
        "use strict";
        n.r(a),
            n.d(a, "client", function () {
                return ye;
            });
        var i = n(3),
            t = n.n(i),
            o = n(55),
            s = n.n(o),
            r = n(0),
            c = n.n(r),
            p = n(56),
            u = n.n(p);
        function l(e, a) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                a &&
                    (i = i.filter(function (a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable;
                    })),
                    n.push.apply(n, i);
            }
            return n;
        }
        function d(e) {
            for (var a = 1; a < arguments.length; a++) {
                var n = null != arguments[a] ? arguments[a] : {};
                a % 2
                    ? l(Object(n), !0).forEach(function (a) {
                          t()(e, a, n[a]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : l(Object(n)).forEach(function (a) {
                          Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
                      });
            }
            return e;
        }
        var m = /^(?!\w+:\/\/)([^\s:]+\.[^\s:]+)(?::(\d+))?(?!:)$/;
        function x(e, a) {
            var n = d(
                d(
                    {},
                    {
                        insecure: !1,
                        retryOnError: !0,
                        logHandler: function (e, a) {
                            if ("error" === e && a) {
                                var n = [a.name, a.message]
                                    .filter(function (e) {
                                        return e;
                                    })
                                    .join(" - ");
                                return console.error("[error] ".concat(n)), void console.error(a);
                            }
                            console.log("[".concat(e, "] ").concat(a));
                        },
                        headers: {},
                        basePath: "",
                        proxy: !1,
                        httpAgent: !1,
                        httpsAgent: !1,
                        adapter: !1,
                        timeout: 3e4,
                    }
                ),
                c()(a)
            );
            n.apiKey && (n.headers.apiKey = n.apiKey), n.accessToken && (n.headers.accessToken = n.accessToken);
            var i = n.defaultHostName,
                t = 443;
            if (m.test(n.host)) {
                var o = n.host.split(":");
                if (2 === o.length) {
                    var r = s()(o, 2);
                    (i = r[0]), (t = r[1]);
                } else i = o[0];
            }
            n.basePath && (n.basePath = "/".concat(n.basePath.split("/").filter(Boolean).join("/")));
            var p = {
                    baseURL: "".concat("https", "://").concat(i, ":").concat(t).concat(n.basePath, "/").concat("v3"),
                    headers: n.headers,
                    httpAgent: n.httpAgent,
                    httpsAgent: n.httpsAgent,
                    proxy: n.proxy,
                    timeout: n.timeout,
                    adapter: n.adapter,
                    maxContentLength: n.maxContentLength,
                    logHandler: n.logHandler,
                    responseLogger: n.responseLogger,
                    requestLogger: n.requestLogger,
                    retryOnError: n.retryOnError,
                    paramsSerializer: function (e) {
                        return u.a.stringify(e, { arrayFormat: "brackets" });
                    },
                },
                l = e.create(p);
            return (
                (l.httpClientParams = a),
                (function (e, a) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2,
                        t = 0;
                    e.interceptors.request.use(function (e) {
                        return e;
                    }),
                        e.interceptors.response.use(
                            function (e) {
                                return e;
                            },
                            function (o) {
                                var s = i,
                                    r = null;
                                if (!a.retryOnError) return Promise.reject(o);
                                var c = o.response;
                                if (c) t = 0;
                                else if (((r = "Server connection"), ++t > n)) return Promise.reject(o);
                                if ((c && 429 === c.status && ((r = "Rate Limit"), (s = i)), r)) {
                                    var p = o.config;
                                    return (
                                        a.logHandler("warning", "".concat(r, " error occurred. Waiting for ").concat(s, " ms before retrying...")),
                                        e.defaults.agent === p.agent && delete p.agent,
                                        e.defaults.httpAgent === p.httpAgent && delete p.httpAgent,
                                        e.defaults.httpsAgent === p.httpsAgent && delete p.httpsAgent,
                                        (p.transformRequest = [
                                            function (e) {
                                                return e;
                                            },
                                        ]),
                                        new Promise(function (a) {
                                            return setTimeout(function () {
                                                return a(e(p));
                                            }, s);
                                        })
                                    );
                                }
                                return Promise.reject(o);
                            }
                        );
                })(l, p, n.retyLimit, n.retryDelay),
                l
            );
        }
        var f = n(28);
        function v() {
            if (!window) return null;
            var e = window.navigator.userAgent,
                a = window.navigator.platform,
                n = null;
            return (
                -1 !== ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(a)
                    ? (n = "macOS")
                    : -1 !== ["iPhone", "iPad", "iPod"].indexOf(a)
                    ? (n = "iOS")
                    : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(a)
                    ? (n = "Windows")
                    : /Android/.test(e)
                    ? (n = "Android")
                    : /Linux/.test(a) && (n = "Linux"),
                n
            );
        }
        function b(e, a, n, i) {
            var t = [];
            a && t.push("app ".concat(a)), n && t.push("integration ".concat(n)), i && t.push("feature " + i), t.push("sdk ".concat(e));
            var o = null;
            try {
                "undefined" != typeof window && "navigator" in window && "product" in window.navigator && "ReactNative" === window.navigator.product
                    ? ((o = v()), t.push("platform ReactNative"))
                    : "undefined" == typeof process || process.browser
                    ? ((o = v()), t.push("platform browser"))
                    : ((o = (function () {
                          var e = Object(f.platform)() || "linux",
                              a = Object(f.release)() || "0.0.0",
                              n = { android: "Android", aix: "Linux", darwin: "macOS", freebsd: "Linux", linux: "Linux", openbsd: "Linux", sunos: "Linux", win32: "Windows" };
                          return e in n ? "".concat(n[e] || "Linux", "/").concat(a) : null;
                      })()),
                      t.push("platform node.js/".concat(process.versions.node ? "v".concat(process.versions.node) : process.version)));
            } catch (e) {
                o = null;
            }
            return (
                o && t.push("os ".concat(o)),
                "".concat(
                    t
                        .filter(function (e) {
                            return "" !== e;
                        })
                        .join("; "),
                    ";"
                )
            );
        }
        var h = n(1),
            g = n.n(h),
            y = n(2),
            w = n.n(y);
        function k(e) {
            var a = e.config,
                n = e.response;
            if (!a || !n) throw e;
            var i = n.data,
                t = { status: n.status, statusText: n.statusText };
            if (a.headers && a.headers.authtoken) {
                var o = "...".concat(a.headers.authtoken.substr(-5));
                a.headers.authtoken = o;
            }
            (t.request = { url: a.url, method: a.method, data: a.data, headers: a.headers }), i && ((t.errorMessage = i.error_message || ""), (t.errorCode = i.error_code || 0), (t.errors = i.errors || {}));
            var s = new Error();
            throw ((s.message = JSON.stringify(t)), s);
        }
        var j = n(57),
            _ = n.n(j),
            O = function e(a, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    t = arguments.length > 3 ? arguments[3] : void 0;
                _()(this, e);
                var o = a.data || {};
                i && (o.stackHeaders = i),
                    (this.items = t(n, o)),
                    a.data.schema && (this.schema = a.data.schema),
                    a.data.content_type && (this.content_type = a.data.content_type),
                    a.data.count && (this.count = a.data.count),
                    a.data.notice && (this.notice = a.data.notice);
            };
        function S(e, a) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                a &&
                    (i = i.filter(function (a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable;
                    })),
                    n.push.apply(n, i);
            }
            return n;
        }
        function z(e) {
            for (var a = 1; a < arguments.length; a++) {
                var n = null != arguments[a] ? arguments[a] : {};
                a % 2
                    ? S(Object(n), !0).forEach(function (a) {
                          t()(e, a, n[a]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : S(Object(n)).forEach(function (a) {
                          Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
                      });
            }
            return e;
        }
        function P(e, a, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                t = arguments.length > 4 ? arguments[4] : void 0,
                o = {};
            i && (o.headers = i), n && (o.params = z({}, c()(n)));
            var s = (function () {
                    var n = w()(
                        g.a.mark(function n() {
                            var s;
                            return g.a.wrap(
                                function (n) {
                                    for (;;)
                                        switch ((n.prev = n.next)) {
                                            case 0:
                                                return (n.prev = 0), (n.next = 3), e.get(a, o);
                                            case 3:
                                                if (!(s = n.sent).data) {
                                                    n.next = 8;
                                                    break;
                                                }
                                                return n.abrupt("return", new O(s, e, i, t));
                                            case 8:
                                                throw k(s);
                                            case 9:
                                                n.next = 14;
                                                break;
                                            case 11:
                                                throw ((n.prev = 11), (n.t0 = n.catch(0)), k(n.t0));
                                            case 14:
                                            case "end":
                                                return n.stop();
                                        }
                                },
                                n,
                                null,
                                [[0, 11]]
                            );
                        })
                    );
                    return function () {
                        return n.apply(this, arguments);
                    };
                })(),
                r = (function () {
                    var n = w()(
                        g.a.mark(function n() {
                            var s, r;
                            return g.a.wrap(
                                function (n) {
                                    for (;;)
                                        switch ((n.prev = n.next)) {
                                            case 0:
                                                return ((s = o).params.limit = 1), (n.prev = 2), (n.next = 5), e.get(a, s);
                                            case 5:
                                                if (!(r = n.sent).data) {
                                                    n.next = 10;
                                                    break;
                                                }
                                                return n.abrupt("return", new O(r, e, i, t));
                                            case 10:
                                                throw k(r);
                                            case 11:
                                                n.next = 16;
                                                break;
                                            case 13:
                                                throw ((n.prev = 13), (n.t0 = n.catch(2)), k(n.t0));
                                            case 16:
                                            case "end":
                                                return n.stop();
                                        }
                                },
                                n,
                                null,
                                [[2, 13]]
                            );
                        })
                    );
                    return function () {
                        return n.apply(this, arguments);
                    };
                })();
            return { find: s, findOne: r };
        }
        var E = n(58),
            q = n.n(E),
            L = n(27);
        function A(e, a) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                a &&
                    (i = i.filter(function (a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable;
                    })),
                    n.push.apply(n, i);
            }
            return n;
        }
        function H(e) {
            for (var a = 1; a < arguments.length; a++) {
                var n = null != arguments[a] ? arguments[a] : {};
                a % 2
                    ? A(Object(n), !0).forEach(function (a) {
                          t()(e, a, n[a]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : A(Object(n)).forEach(function (a) {
                          Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
                      });
            }
            return e;
        }
        var T = function (e, a) {
                return (function () {
                    var n = w()(
                        g.a.mark(function n(i) {
                            var t,
                                o,
                                s,
                                r,
                                p,
                                u = arguments;
                            return g.a.wrap(
                                function (n) {
                                    for (;;)
                                        switch ((n.prev = n.next)) {
                                            case 0:
                                                return (
                                                    (t = u.length > 1 && void 0 !== u[1] ? u[1] : null),
                                                    (o = this.urlPath + "/publish"),
                                                    (s = { headers: H({}, c()(this.stackHeaders)) } || {}),
                                                    ((r = {})[a] = c()(i)),
                                                    null !== t && (r.version = t),
                                                    (n.prev = 6),
                                                    (n.next = 9),
                                                    e.post(o, r, s)
                                                );
                                            case 9:
                                                if (!(p = n.sent).data) {
                                                    n.next = 14;
                                                    break;
                                                }
                                                return n.abrupt("return", p.data);
                                            case 14:
                                                throw k(p);
                                            case 15:
                                                n.next = 20;
                                                break;
                                            case 17:
                                                throw ((n.prev = 17), (n.t0 = n.catch(6)), k(n.t0));
                                            case 20:
                                            case "end":
                                                return n.stop();
                                        }
                                },
                                n,
                                this,
                                [[6, 17]]
                            );
                        })
                    );
                    return function (e) {
                        return n.apply(this, arguments);
                    };
                })();
            },
            D = (function () {
                var e = w()(
                    g.a.mark(function e(a) {
                        var n, i, t, o, s, r, p, u, l, d;
                        return g.a.wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        if (
                                            ((n = a.http),
                                            (i = a.urlPath),
                                            (t = a.stackHeaders),
                                            (o = a.data),
                                            (s = a.params),
                                            (r = a.method),
                                            (p = void 0 === r ? "POST" : r),
                                            (u = new q.a()),
                                            "string" == typeof o.parent_uid && u.append("asset[parent_uid]", o.parent_uid),
                                            "string" == typeof o.description && u.append("asset[description]", o.description),
                                            o.tags instanceof Array ? u.append("asset[tags]", o.tags.join(",")) : "string" == typeof o.tags && u.append("asset[tags]", o.tags),
                                            "string" == typeof o.title && u.append("asset[title]", o.title),
                                            (l = Object(L.createReadStream)(o.upload)),
                                            u.append("asset[upload]", l),
                                            (d = { headers: H(H(H({}, s), u.getHeaders()), c()(t)) } || {}),
                                            "POST" !== p)
                                        ) {
                                            e.next = 13;
                                            break;
                                        }
                                        return e.abrupt("return", n.post(i, u, d));
                                    case 13:
                                        return e.abrupt("return", n.put(i, u, d));
                                    case 14:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                );
                return function (a) {
                    return e.apply(this, arguments);
                };
            })(),
            N = function (e) {
                var a = e.http,
                    n = e.params;
                return (function () {
                    var e = w()(
                        g.a.mark(function e(i, t) {
                            var o, s;
                            return g.a.wrap(
                                function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (o = { headers: H(H({}, c()(n)), c()(this.stackHeaders)), params: H({}, c()(t)) } || {}), (e.prev = 1), (e.next = 4), a.post(this.urlPath, i, o);
                                            case 4:
                                                if (!(s = e.sent).data) {
                                                    e.next = 9;
                                                    break;
                                                }
                                                return e.abrupt("return", new this.constructor(a, I(s, this.stackHeaders)));
                                            case 9:
                                                throw k(s);
                                            case 10:
                                                e.next = 15;
                                                break;
                                            case 12:
                                                throw ((e.prev = 12), (e.t0 = e.catch(1)), k(e.t0));
                                            case 15:
                                            case "end":
                                                return e.stop();
                                        }
                                },
                                e,
                                this,
                                [[1, 12]]
                            );
                        })
                    );
                    return function (a, n) {
                        return e.apply(this, arguments);
                    };
                })();
            },
            F = function (e) {
                var a = e.http,
                    n = e.wrapperCollection;
                return function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this.organization_uid && (e.query.org_uid = this.organization_uid), P(a, this.urlPath, e, this.stackHeaders, n);
                };
            },
            U = function (e, a) {
                return w()(
                    g.a.mark(function n() {
                        var i,
                            t,
                            o,
                            s = arguments;
                        return g.a.wrap(
                            function (n) {
                                for (;;)
                                    switch ((n.prev = n.next)) {
                                        case 0:
                                            return (
                                                (i = s.length > 0 && void 0 !== s[0] ? s[0] : {}),
                                                ((t = {})[a] = c()(this)),
                                                (n.prev = 3),
                                                (n.next = 6),
                                                e.put(this.urlPath, t, { headers: H({}, c()(this.stackHeaders)), params: H({}, c()(i)) })
                                            );
                                        case 6:
                                            if (!(o = n.sent).data) {
                                                n.next = 11;
                                                break;
                                            }
                                            return n.abrupt("return", new this.constructor(e, I(o, this.stackHeaders, this.contentType_uid)));
                                        case 11:
                                            throw k(o);
                                        case 12:
                                            n.next = 17;
                                            break;
                                        case 14:
                                            throw ((n.prev = 14), (n.t0 = n.catch(3)), k(n.t0));
                                        case 17:
                                        case "end":
                                            return n.stop();
                                    }
                            },
                            n,
                            this,
                            [[3, 14]]
                        );
                    })
                );
            },
            B = function (e) {
                return w()(
                    g.a.mark(function a() {
                        var n;
                        return g.a.wrap(
                            function (a) {
                                for (;;)
                                    switch ((a.prev = a.next)) {
                                        case 0:
                                            return (a.prev = 0), (a.next = 3), e.delete(this.urlPath, { headers: H({}, c()(this.stackHeaders)) });
                                        case 3:
                                            if (!(n = a.sent).data) {
                                                a.next = 8;
                                                break;
                                            }
                                            return a.abrupt("return", n.data.notice);
                                        case 8:
                                            throw k(n);
                                        case 9:
                                            a.next = 14;
                                            break;
                                        case 11:
                                            throw ((a.prev = 11), (a.t0 = a.catch(0)), k(a.t0));
                                        case 14:
                                        case "end":
                                            return a.stop();
                                    }
                            },
                            a,
                            this,
                            [[0, 11]]
                        );
                    })
                );
            },
            C = function (e, a) {
                return w()(
                    g.a.mark(function n() {
                        var i,
                            t,
                            o,
                            s = arguments;
                        return g.a.wrap(
                            function (n) {
                                for (;;)
                                    switch ((n.prev = n.next)) {
                                        case 0:
                                            return (i = s.length > 0 && void 0 !== s[0] ? s[0] : {}), (n.prev = 1), (t = { headers: H({}, c()(this.stackHeaders)), params: H({}, c()(i)) } || {}), (n.next = 5), e.get(this.urlPath, t);
                                        case 5:
                                            if (!(o = n.sent).data) {
                                                n.next = 11;
                                                break;
                                            }
                                            return "entry" === a && ((o.data[a].content_type = o.data.content_type), (o.data[a].schema = o.data.schema)), n.abrupt("return", Object.assign(this, c()(o.data[a])));
                                        case 11:
                                            throw k(o);
                                        case 12:
                                            n.next = 17;
                                            break;
                                        case 14:
                                            throw ((n.prev = 14), (n.t0 = n.catch(1)), k(n.t0));
                                        case 17:
                                        case "end":
                                            return n.stop();
                                    }
                            },
                            n,
                            this,
                            [[1, 14]]
                        );
                    })
                );
            };
        function I(e, a, n) {
            var i = e.data || {};
            return a && (i.stackHeaders = a), n && (i.content_type = n), i;
        }
        function M(e, a) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                a &&
                    (i = i.filter(function (a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable;
                    })),
                    n.push.apply(n, i);
            }
            return n;
        }
        function R(e) {
            for (var a = 1; a < arguments.length; a++) {
                var n = null != arguments[a] ? arguments[a] : {};
                a % 2
                    ? M(Object(n), !0).forEach(function (a) {
                          t()(e, a, n[a]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : M(Object(n)).forEach(function (a) {
                          Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
                      });
            }
            return e;
        }
        function V(e, a) {
            var n = this;
            return (
                (this.urlPath = "/roles"),
                (this.stackHeaders = a.stackHeaders),
                a.role
                    ? (Object.assign(this, c()(a.role)), (this.urlPath = "/roles/".concat(this.uid)), this.stackHeaders && ((this.update = U(e, "role")), (this.delete = B(e)), (this.fetch = C(e, "role"))))
                    : ((this.create = N({ http: e })),
                      (this.fetchAll = w()(
                          g.a.mark(function a() {
                              var i,
                                  t,
                                  o,
                                  s = arguments;
                              return g.a.wrap(
                                  function (a) {
                                      for (;;)
                                          switch ((a.prev = a.next)) {
                                              case 0:
                                                  return (i = s.length > 0 && void 0 !== s[0] ? s[0] : {}), (t = { params: R({}, c()(i)), headers: R({}, c()(n.stackHeaders)) } || {}), (a.prev = 2), (a.next = 5), e.get(n.urlPath, t);
                                              case 5:
                                                  if (!(o = a.sent).data) {
                                                      a.next = 10;
                                                      break;
                                                  }
                                                  return a.abrupt("return", new O(o, e, n.stackHeaders, K));
                                              case 10:
                                                  throw k(o);
                                              case 11:
                                                  a.next = 16;
                                                  break;
                                              case 13:
                                                  throw ((a.prev = 13), (a.t0 = a.catch(2)), k(a.t0));
                                              case 16:
                                              case "end":
                                                  return a.stop();
                                          }
                                  },
                                  a,
                                  null,
                                  [[2, 13]]
                              );
                          })
                      )),
                      (this.query = F({ http: e, wrapperCollection: K }))),
                this
            );
        }
        function K(e, a) {
            return c()(a.roles).map(function (n) {
                return new V(e, { role: n, stackHeaders: a.stackHeaders });
            });
        }
        function G(e, a) {
            var n = this;
            (this.urlPath = "/organizations"),
                a && a.organization
                    ? (Object.assign(this, c()(a.organization)),
                      (this.urlPath = "/organizations/".concat(this.uid)),
                      (this.fetch = C(e, "organization")),
                      this.org_roles &&
                          this.org_roles.filter(function (e) {
                              return !0 === e.admin;
                          }).length > 0 &&
                          ((this.stacks = (function () {
                              var a = w()(
                                  g.a.mark(function a(i) {
                                      var t;
                                      return g.a.wrap(
                                          function (a) {
                                              for (;;)
                                                  switch ((a.prev = a.next)) {
                                                      case 0:
                                                          return (a.prev = 0), (a.next = 3), e.get("".concat(n.urlPath, "/stacks"), { params: i });
                                                      case 3:
                                                          if (!(t = a.sent).data) {
                                                              a.next = 8;
                                                              break;
                                                          }
                                                          return a.abrupt("return", new O(t, e, null, ve));
                                                      case 8:
                                                          return a.abrupt("return", k(t));
                                                      case 9:
                                                          a.next = 14;
                                                          break;
                                                      case 11:
                                                          return (a.prev = 11), (a.t0 = a.catch(0)), a.abrupt("return", k(a.t0));
                                                      case 14:
                                                      case "end":
                                                          return a.stop();
                                                  }
                                          },
                                          a,
                                          null,
                                          [[0, 11]]
                                      );
                                  })
                              );
                              return function (e) {
                                  return a.apply(this, arguments);
                              };
                          })()),
                          (this.transferOwnership = (function () {
                              var a = w()(
                                  g.a.mark(function a(i) {
                                      var t;
                                      return g.a.wrap(
                                          function (a) {
                                              for (;;)
                                                  switch ((a.prev = a.next)) {
                                                      case 0:
                                                          return (a.prev = 0), (a.next = 3), e.post("".concat(n.urlPath, "/transfer_ownership"), { transfer_to: i });
                                                      case 3:
                                                          if (!(t = a.sent).data) {
                                                              a.next = 8;
                                                              break;
                                                          }
                                                          return a.abrupt("return", t.data.notice);
                                                      case 8:
                                                          return a.abrupt("return", k(t));
                                                      case 9:
                                                          a.next = 14;
                                                          break;
                                                      case 11:
                                                          return (a.prev = 11), (a.t0 = a.catch(0)), a.abrupt("return", k(a.t0));
                                                      case 14:
                                                      case "end":
                                                          return a.stop();
                                                  }
                                          },
                                          a,
                                          null,
                                          [[0, 11]]
                                      );
                                  })
                              );
                              return function (e) {
                                  return a.apply(this, arguments);
                              };
                          })()),
                          (this.addUser = (function () {
                              var a = w()(
                                  g.a.mark(function a(i) {
                                      var t;
                                      return g.a.wrap(
                                          function (a) {
                                              for (;;)
                                                  switch ((a.prev = a.next)) {
                                                      case 0:
                                                          return (a.prev = 0), (a.next = 3), e.post("".concat(n.urlPath, "/share"), { share: { data: i } });
                                                      case 3:
                                                          if (!(t = a.sent).data) {
                                                              a.next = 8;
                                                              break;
                                                          }
                                                          return a.abrupt("return", new O(t, e, null, Q));
                                                      case 8:
                                                          return a.abrupt("return", k(t));
                                                      case 9:
                                                          a.next = 14;
                                                          break;
                                                      case 11:
                                                          return (a.prev = 11), (a.t0 = a.catch(0)), a.abrupt("return", k(a.t0));
                                                      case 14:
                                                      case "end":
                                                          return a.stop();
                                                  }
                                          },
                                          a,
                                          null,
                                          [[0, 11]]
                                      );
                                  })
                              );
                              return function (e) {
                                  return a.apply(this, arguments);
                              };
                          })()),
                          (this.getInvitations = (function () {
                              var a = w()(
                                  g.a.mark(function a(i) {
                                      var t;
                                      return g.a.wrap(
                                          function (a) {
                                              for (;;)
                                                  switch ((a.prev = a.next)) {
                                                      case 0:
                                                          return (a.prev = 0), (a.next = 3), e.get("".concat(n.urlPath, "/share"), { params: i });
                                                      case 3:
                                                          if (!(t = a.sent).data) {
                                                              a.next = 8;
                                                              break;
                                                          }
                                                          return a.abrupt("return", new O(t, e, null, Q));
                                                      case 8:
                                                          return a.abrupt("return", k(t));
                                                      case 9:
                                                          a.next = 14;
                                                          break;
                                                      case 11:
                                                          return (a.prev = 11), (a.t0 = a.catch(0)), a.abrupt("return", k(a.t0));
                                                      case 14:
                                                      case "end":
                                                          return a.stop();
                                                  }
                                          },
                                          a,
                                          null,
                                          [[0, 11]]
                                      );
                                  })
                              );
                              return function (e) {
                                  return a.apply(this, arguments);
                              };
                          })()),
                          (this.resendInvitation = (function () {
                              var a = w()(
                                  g.a.mark(function a(i) {
                                      var t;
                                      return g.a.wrap(
                                          function (a) {
                                              for (;;)
                                                  switch ((a.prev = a.next)) {
                                                      case 0:
                                                          return (a.prev = 0), (a.next = 3), e.get("".concat(n.urlPath, "/").concat(i, "/resend_invitation"));
                                                      case 3:
                                                          if (!(t = a.sent).data) {
                                                              a.next = 8;
                                                              break;
                                                          }
                                                          return a.abrupt("return", t.data.notice);
                                                      case 8:
                                                          return a.abrupt("return", k(t));
                                                      case 9:
                                                          a.next = 14;
                                                          break;
                                                      case 11:
                                                          return (a.prev = 11), (a.t0 = a.catch(0)), a.abrupt("return", k(a.t0));
                                                      case 14:
                                                      case "end":
                                                          return a.stop();
                                                  }
                                          },
                                          a,
                                          null,
                                          [[0, 11]]
                                      );
                                  })
                              );
                              return function (e) {
                                  return a.apply(this, arguments);
                              };
                          })()),
                          (this.roles = (function () {
                              var a = w()(
                                  g.a.mark(function a(i) {
                                      var t;
                                      return g.a.wrap(
                                          function (a) {
                                              for (;;)
                                                  switch ((a.prev = a.next)) {
                                                      case 0:
                                                          return (a.prev = 0), (a.next = 3), e.get("".concat(n.urlPath, "/roles"), { params: i });
                                                      case 3:
                                                          if (!(t = a.sent).data) {
                                                              a.next = 8;
                                                              break;
                                                          }
                                                          return a.abrupt("return", new O(t, e, null, K));
                                                      case 8:
                                                          return a.abrupt("return", k(t));
                                                      case 9:
                                                          a.next = 14;
                                                          break;
                                                      case 11:
                                                          return (a.prev = 11), (a.t0 = a.catch(0)), a.abrupt("return", k(a.t0));
                                                      case 14:
                                                      case "end":
                                                          return a.stop();
                                                  }
                                          },
                                          a,
                                          null,
                                          [[0, 11]]
                                      );
                                  })
                              );
                              return function (e) {
                                  return a.apply(this, arguments);
                              };
                          })())))
                    : ((this.fetchAll = (function () {
                          var a = w()(
                              g.a.mark(function a(i) {
                                  var t;
                                  return g.a.wrap(
                                      function (a) {
                                          for (;;)
                                              switch ((a.prev = a.next)) {
                                                  case 0:
                                                      return (a.prev = 0), (a.next = 3), e.get(n.urlPath, { params: i });
                                                  case 3:
                                                      if (!(t = a.sent).data) {
                                                          a.next = 8;
                                                          break;
                                                      }
                                                      return a.abrupt("return", new O(t, e, null, W));
                                                  case 8:
                                                      throw k(t);
                                                  case 9:
                                                      a.next = 14;
                                                      break;
                                                  case 11:
                                                      throw ((a.prev = 11), (a.t0 = a.catch(0)), k(a.t0));
                                                  case 14:
                                                  case "end":
                                                      return a.stop();
                                              }
                                      },
                                      a,
                                      null,
                                      [[0, 11]]
                                  );
                              })
                          );
                          return function (e) {
                              return a.apply(this, arguments);
                          };
                      })()),
                      (this.query = F({ http: e, wrapperCollection: W })));
        }
        function W(e, a) {
            return c()(a.organizations).map(function (a) {
                return new G(e, { organization: a });
            });
        }
        function $(e, a) {
            return (
                Object.assign(this, c()(a.user)),
                (this.urlPath = "/user"),
                this.authtoken &&
                    ((this.update = U(e, "user")),
                    (this.delete = B(e)),
                    (this.requestPassword = function () {
                        return e.post("/user/forgot_password", { user: { email: this.email } }).then(function (e) {
                            return e.data.notice;
                        }, k);
                    }),
                    (this.resetPassword = function (a) {
                        var n = a.resetPasswordToken,
                            i = a.password,
                            t = a.passwordConfirm;
                        return e.post("/user/reset_password", { user: { reset_password_token: n, password: i, password_confirmation: t } }).then(function (e) {
                            return e.data.notice;
                        }, k);
                    }),
                    this.organizations && (this.organizations = new W(e, { organizations: this.organizations }))),
                this
            );
        }
        function Q(e, a) {
            return c()(a.collaborators || a.shares || {}).map(function (a) {
                return new $(e, { user: a });
            });
        }
        function Y(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return (
                (this.stackHeaders = a.stackHeaders),
                (this.content_type_uid = a.content_type_uid),
                (this.urlPath = "content_types/".concat(this.content_type_uid, "/entries")),
                a && a.entry
                    ? (Object.assign(this, c()(a.entry)),
                      delete a.entry,
                      (a.content_type || a.schema) && Object.assign(this, c()(a)),
                      (this.urlPath = "content_types/".concat(this.content_type_uid, "/entries/").concat(this.uid)),
                      (this.update = U(e, "entry")),
                      (this.delete = B(e)),
                      (this.fetch = C(e, "entry")),
                      (this.publish = T(e, "entry")),
                      (this.export = function () {
                          arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      }))
                    : ((this.create = N({ http: e })), (this.query = F({ http: e, wrapperCollection: J }))),
                this
            );
        }
        function J(e, a) {
            return c()(a.entries).map(function (n) {
                return new Y(e, { entry: n, content_type_uid: "uid", stackHeaders: a.stackHeaders });
            });
        }
        function X(e) {
            var a = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return (
                (this.stackHeaders = n.stackHeaders),
                (this.urlPath = "/content_types"),
                n.content_type
                    ? (Object.assign(this, c()(n.content_type)),
                      (this.urlPath = "/content_types/".concat(this.uid)),
                      (this.update = U(e, "content_type")),
                      (this.delete = B(e)),
                      (this.fetch = C(e, "content_type")),
                      (this.entry = function () {
                          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                              i = { stackHeaders: a.stackHeaders };
                          return (i.content_type_uid = a.uid), n && (i.entry = { uid: n }), new Y(e, i);
                      }))
                    : ((this.create = N({ http: e })), (this.query = F({ http: e, wrapperCollection: Z }))),
                this
            );
        }
        function Z(e, a) {
            return c()(a.content_types).map(function (n) {
                return new X(e, { content_type: n, stackHeaders: a.stackHeaders });
            });
        }
        function ee(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return (
                (this.stackHeaders = a.stackHeaders),
                (this.urlPath = "/global_fields"),
                a.global_field
                    ? (Object.assign(this, c()(a.global_field)), (this.urlPath = "/global_fields/".concat(this.uid)), (this.update = U(e, "global_field")), (this.delete = B(e)), (this.fetch = C(e, "global_field")))
                    : ((this.create = N({ http: e })), (this.query = F({ http: e, wrapperCollection: ae }))),
                this
            );
        }
        function ae(e, a) {
            return c()(a.global_fields).map(function (n) {
                return new ee(e, { global_field: n, stackHeaders: a.stackHeaders });
            });
        }
        function ne(e, a) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                a &&
                    (i = i.filter(function (a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable;
                    })),
                    n.push.apply(n, i);
            }
            return n;
        }
        function ie(e) {
            for (var a = 1; a < arguments.length; a++) {
                var n = null != arguments[a] ? arguments[a] : {};
                a % 2
                    ? ne(Object(n), !0).forEach(function (a) {
                          t()(e, a, n[a]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : ne(Object(n)).forEach(function (a) {
                          Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
                      });
            }
            return e;
        }
        function te(e) {
            var a = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (this.stackHeaders = n.stackHeaders),
                (this.urlPath = "/stacks/delivery_tokens"),
                n.token
                    ? (Object.assign(this, c()(n.token)), (this.urlPath = "/stacks/delivery_tokens/".concat(this.uid)), (this.update = U(e, "token")), (this.delete = B(e)), (this.fetch = C(e, "token")))
                    : ((this.create = N({ http: e })),
                      (this.fetchAll = w()(
                          g.a.mark(function n() {
                              var i, t;
                              return g.a.wrap(
                                  function (n) {
                                      for (;;)
                                          switch ((n.prev = n.next)) {
                                              case 0:
                                                  return (i = { headers: ie({}, c()(a.stackHeaders)) } || {}), (n.prev = 1), (n.next = 4), e.get(a.urlPath, i);
                                              case 4:
                                                  if (!(t = n.sent).data) {
                                                      n.next = 9;
                                                      break;
                                                  }
                                                  return n.abrupt("return", new O(t, e, a.stackHeaders, oe));
                                              case 9:
                                                  throw k(t);
                                              case 10:
                                                  n.next = 15;
                                                  break;
                                              case 12:
                                                  throw ((n.prev = 12), (n.t0 = n.catch(1)), k(n.t0));
                                              case 15:
                                              case "end":
                                                  return n.stop();
                                          }
                                  },
                                  n,
                                  null,
                                  [[1, 12]]
                              );
                          })
                      )));
        }
        function oe(e, a) {
            return c()(a.tokens).map(function (n) {
                return new te(e, { token: n, stackHeaders: a.stackHeaders });
            });
        }
        function se(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (this.stackHeaders = a.stackHeaders),
                (this.urlPath = "/environments"),
                a.environment
                    ? (Object.assign(this, c()(a.environment)), (this.urlPath = "/environments/".concat(this.uid)), (this.update = U(e, "environment")), (this.delete = B(e)), (this.fetch = C(e, "environment")))
                    : ((this.create = N({ http: e })), (this.query = F({ http: e, wrapperCollection: re })));
        }
        function re(e, a) {
            return c()(a.environments).map(function (n) {
                return new se(e, { environment: n, stackHeaders: a.stackHeaders });
            });
        }
        function ce(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (this.stackHeaders = a.stackHeaders), (this.urlPath = "/assets/folders"), a.asset ? Object.assign(this, c()(a.asset)) : (this.create = N({ http: e }));
        }
        function pe(e) {
            var a = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return (
                (this.stackHeaders = n.stackHeaders),
                (this.urlPath = "/assets"),
                n.asset
                    ? (Object.assign(this, c()(n.asset)),
                      (this.urlPath = "assets/".concat(this.uid)),
                      (this.update = U(e, "asset")),
                      (this.delete = B(e)),
                      (this.fetch = C(e, "asset")),
                      (this.replace = (function () {
                          var a = w()(
                              g.a.mark(function a(n, i) {
                                  var t;
                                  return g.a.wrap(
                                      function (a) {
                                          for (;;)
                                              switch ((a.prev = a.next)) {
                                                  case 0:
                                                      return (a.prev = 0), (a.next = 3), D({ http: e, urlPath: this.urlPath, stackHeaders: this.stackHeaders, data: n, params: i, method: "PUT" });
                                                  case 3:
                                                      if (!(t = a.sent).data) {
                                                          a.next = 8;
                                                          break;
                                                      }
                                                      return a.abrupt("return", new this.constructor(e, I(t, this.stackHeaders)));
                                                  case 8:
                                                      throw k(t);
                                                  case 9:
                                                      a.next = 14;
                                                      break;
                                                  case 11:
                                                      throw ((a.prev = 11), (a.t0 = a.catch(0)), k(a.t0));
                                                  case 14:
                                                  case "end":
                                                      return a.stop();
                                              }
                                      },
                                      a,
                                      this,
                                      [[0, 11]]
                                  );
                              })
                          );
                          return function (e, n) {
                              return a.apply(this, arguments);
                          };
                      })()),
                      (this.publish = T(e, "asset")))
                    : ((this.folder = function () {
                          var n = { stackHeaders: a.stackHeaders };
                          return new ce(e, n);
                      }),
                      (this.create = (function () {
                          var a = w()(
                              g.a.mark(function a(n, i) {
                                  var t;
                                  return g.a.wrap(
                                      function (a) {
                                          for (;;)
                                              switch ((a.prev = a.next)) {
                                                  case 0:
                                                      return (a.prev = 0), (a.next = 3), D({ http: e, urlPath: this.urlPath, stackHeaders: this.stackHeaders, data: n, params: i });
                                                  case 3:
                                                      if (!(t = a.sent).data) {
                                                          a.next = 8;
                                                          break;
                                                      }
                                                      return a.abrupt("return", new this.constructor(e, I(t, this.stackHeaders)));
                                                  case 8:
                                                      throw k(t);
                                                  case 9:
                                                      a.next = 14;
                                                      break;
                                                  case 11:
                                                      throw ((a.prev = 11), (a.t0 = a.catch(0)), k(a.t0));
                                                  case 14:
                                                  case "end":
                                                      return a.stop();
                                              }
                                      },
                                      a,
                                      this,
                                      [[0, 11]]
                                  );
                              })
                          );
                          return function (e, n) {
                              return a.apply(this, arguments);
                          };
                      })()),
                      (this.query = F({ http: e, wrapperCollection: ue }))),
                this
            );
        }
        function ue(e, a) {
            return c()(a.assets).map(function (n) {
                return new pe(e, { asset: n, stackHeaders: a.stackHeaders });
            });
        }
        function le(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return (
                (this.stackHeaders = a.stackHeaders),
                (this.urlPath = "/locales"),
                a.locale
                    ? (Object.assign(this, c()(a.locale)), (this.urlPath = "/locales/".concat(this.code)), (this.update = U(e, "locale")), (this.delete = B(e)), (this.fetch = C(e, "locale")))
                    : ((this.create = N({ http: e })), (this.query = F({ http: e, wrapperCollection: de }))),
                this
            );
        }
        function de(e, a) {
            return c()(a.locales).map(function (n) {
                return new le(e, { locale: n, stackHeaders: a.stackHeaders });
            });
        }
        function me(e, a) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                a &&
                    (i = i.filter(function (a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable;
                    })),
                    n.push.apply(n, i);
            }
            return n;
        }
        function xe(e) {
            for (var a = 1; a < arguments.length; a++) {
                var n = null != arguments[a] ? arguments[a] : {};
                a % 2
                    ? me(Object(n), !0).forEach(function (a) {
                          t()(e, a, n[a]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : me(Object(n)).forEach(function (a) {
                          Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
                      });
            }
            return e;
        }
        function fe(e, a) {
            var n = this;
            return (
                (this.urlPath = "/stacks"),
                a && (a.stack ? Object.assign(this, c()(a.stack)) : a.organization_uid && (this.organization_uid = a.organization_uid)),
                a && a.stack
                    ? ((this.stackHeaders = { api_key: this.api_key }),
                      (this.update = U(e, "stack")),
                      (this.delete = B(e)),
                      (this.fetch = C(e, "stack")),
                      (this.contentType = function () {
                          var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                              i = { stackHeaders: n.stackHeaders };
                          return a && (i.content_type = { uid: a }), new X(e, i);
                      }),
                      (this.locale = function () {
                          var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                              i = { stackHeaders: n.stackHeaders };
                          return a && (i.locale = { code: a }), new le(e, i);
                      }),
                      (this.asset = function () {
                          var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                              i = { stackHeaders: n.stackHeaders };
                          return a && (i.asset = { uid: a }), new pe(e, i);
                      }),
                      (this.globalField = function () {
                          var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                              i = { stackHeaders: n.stackHeaders };
                          return a && (i.global_field = { uid: a }), new ee(e, i);
                      }),
                      (this.environment = function () {
                          var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                              i = { stackHeaders: n.stackHeaders };
                          return a && (i.environment = { uid: a }), new se(e, i);
                      }),
                      (this.deliveryToken = function () {
                          var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                              i = { stackHeaders: n.stackHeaders };
                          return a && (i.global_field = { uid: a }), new te(e, i);
                      }),
                      (this.users = w()(
                          g.a.mark(function a() {
                              var i;
                              return g.a.wrap(
                                  function (a) {
                                      for (;;)
                                          switch ((a.prev = a.next)) {
                                              case 0:
                                                  return (a.prev = 0), (a.next = 3), e.get(n.urlPath, { params: { include_collaborators: !0 }, headers: xe({}, c()(n.stackHeaders)) });
                                              case 3:
                                                  if (!(i = a.sent).data) {
                                                      a.next = 8;
                                                      break;
                                                  }
                                                  return a.abrupt("return", Q(e, i.data.stack));
                                              case 8:
                                                  return a.abrupt("return", k(i));
                                              case 9:
                                                  a.next = 14;
                                                  break;
                                              case 11:
                                                  return (a.prev = 11), (a.t0 = a.catch(0)), a.abrupt("return", k(a.t0));
                                              case 14:
                                              case "end":
                                                  return a.stop();
                                          }
                                  },
                                  a,
                                  null,
                                  [[0, 11]]
                              );
                          })
                      )),
                      (this.transferOwnership = (function () {
                          var a = w()(
                              g.a.mark(function a(i) {
                                  var t;
                                  return g.a.wrap(
                                      function (a) {
                                          for (;;)
                                              switch ((a.prev = a.next)) {
                                                  case 0:
                                                      return (a.prev = 0), (a.next = 3), e.post("".concat(n.urlPath, "/transfer_ownership"), { transfer_to: i }, { headers: xe({}, c()(n.stackHeaders)) });
                                                  case 3:
                                                      if (!(t = a.sent).data) {
                                                          a.next = 8;
                                                          break;
                                                      }
                                                      return a.abrupt("return", t.data.notice);
                                                  case 8:
                                                      return a.abrupt("return", k(t));
                                                  case 9:
                                                      a.next = 14;
                                                      break;
                                                  case 11:
                                                      return (a.prev = 11), (a.t0 = a.catch(0)), a.abrupt("return", k(a.t0));
                                                  case 14:
                                                  case "end":
                                                      return a.stop();
                                              }
                                      },
                                      a,
                                      null,
                                      [[0, 11]]
                                  );
                              })
                          );
                          return function (e) {
                              return a.apply(this, arguments);
                          };
                      })()),
                      (this.settings = w()(
                          g.a.mark(function a() {
                              var i;
                              return g.a.wrap(
                                  function (a) {
                                      for (;;)
                                          switch ((a.prev = a.next)) {
                                              case 0:
                                                  return (a.prev = 0), (a.next = 3), e.get("".concat(n.urlPath, "/settings"), { headers: xe({}, c()(n.stackHeaders)) });
                                              case 3:
                                                  if (!(i = a.sent).data) {
                                                      a.next = 8;
                                                      break;
                                                  }
                                                  return a.abrupt("return", i.data.stack_settings);
                                              case 8:
                                                  return a.abrupt("return", k(i));
                                              case 9:
                                                  a.next = 14;
                                                  break;
                                              case 11:
                                                  return (a.prev = 11), (a.t0 = a.catch(0)), a.abrupt("return", k(a.t0));
                                              case 14:
                                              case "end":
                                                  return a.stop();
                                          }
                                  },
                                  a,
                                  null,
                                  [[0, 11]]
                              );
                          })
                      )),
                      (this.resetSettings = w()(
                          g.a.mark(function a() {
                              var i;
                              return g.a.wrap(
                                  function (a) {
                                      for (;;)
                                          switch ((a.prev = a.next)) {
                                              case 0:
                                                  return (a.prev = 0), (a.next = 3), e.post("".concat(n.urlPath, "/settings"), { stack_settings: { discrete_variables: {}, stack_variables: {} } }, { headers: xe({}, c()(n.stackHeaders)) });
                                              case 3:
                                                  if (!(i = a.sent).data) {
                                                      a.next = 8;
                                                      break;
                                                  }
                                                  return a.abrupt("return", i.data.stack_settings);
                                              case 8:
                                                  return a.abrupt("return", k(i));
                                              case 9:
                                                  a.next = 14;
                                                  break;
                                              case 11:
                                                  return (a.prev = 11), (a.t0 = a.catch(0)), a.abrupt("return", k(a.t0));
                                              case 14:
                                              case "end":
                                                  return a.stop();
                                          }
                                  },
                                  a,
                                  null,
                                  [[0, 11]]
                              );
                          })
                      )),
                      (this.addSettings = w()(
                          g.a.mark(function a() {
                              var i,
                                  t,
                                  o = arguments;
                              return g.a.wrap(
                                  function (a) {
                                      for (;;)
                                          switch ((a.prev = a.next)) {
                                              case 0:
                                                  return (
                                                      (i = o.length > 0 && void 0 !== o[0] ? o[0] : {}),
                                                      (a.prev = 1),
                                                      (a.next = 4),
                                                      e.post("".concat(n.urlPath, "/settings"), { stack_settings: { stack_variables: i } }, { headers: xe({}, c()(n.stackHeaders)) })
                                                  );
                                              case 4:
                                                  if (!(t = a.sent).data) {
                                                      a.next = 9;
                                                      break;
                                                  }
                                                  return a.abrupt("return", t.data.stack_settings);
                                              case 9:
                                                  return a.abrupt("return", k(t));
                                              case 10:
                                                  a.next = 15;
                                                  break;
                                              case 12:
                                                  return (a.prev = 12), (a.t0 = a.catch(1)), a.abrupt("return", k(a.t0));
                                              case 15:
                                              case "end":
                                                  return a.stop();
                                          }
                                  },
                                  a,
                                  null,
                                  [[1, 12]]
                              );
                          })
                      )),
                      (this.share = w()(
                          g.a.mark(function a() {
                              var i,
                                  t,
                                  o,
                                  s = arguments;
                              return g.a.wrap(
                                  function (a) {
                                      for (;;)
                                          switch ((a.prev = a.next)) {
                                              case 0:
                                                  return (
                                                      (i = s.length > 0 && void 0 !== s[0] ? s[0] : []),
                                                      (t = s.length > 1 && void 0 !== s[1] ? s[1] : {}),
                                                      (a.prev = 2),
                                                      (a.next = 5),
                                                      e.post("".concat(n.urlPath, "/share"), { emails: i, roles: t }, { headers: xe({}, c()(n.stackHeaders)) })
                                                  );
                                              case 5:
                                                  if (!(o = a.sent).data) {
                                                      a.next = 10;
                                                      break;
                                                  }
                                                  return a.abrupt("return", o.data.notice);
                                              case 10:
                                                  return a.abrupt("return", k(o));
                                              case 11:
                                                  a.next = 16;
                                                  break;
                                              case 13:
                                                  return (a.prev = 13), (a.t0 = a.catch(2)), a.abrupt("return", k(a.t0));
                                              case 16:
                                              case "end":
                                                  return a.stop();
                                          }
                                  },
                                  a,
                                  null,
                                  [[2, 13]]
                              );
                          })
                      )),
                      (this.unShare = (function () {
                          var a = w()(
                              g.a.mark(function a(i) {
                                  var t;
                                  return g.a.wrap(
                                      function (a) {
                                          for (;;)
                                              switch ((a.prev = a.next)) {
                                                  case 0:
                                                      return (a.prev = 0), (a.next = 3), e.post("".concat(n.urlPath, "/unshare"), { email: i }, { headers: xe({}, c()(n.stackHeaders)) });
                                                  case 3:
                                                      if (!(t = a.sent).data) {
                                                          a.next = 8;
                                                          break;
                                                      }
                                                      return a.abrupt("return", t.data.notice);
                                                  case 8:
                                                      return a.abrupt("return", k(t));
                                                  case 9:
                                                      a.next = 14;
                                                      break;
                                                  case 11:
                                                      return (a.prev = 11), (a.t0 = a.catch(0)), a.abrupt("return", k(a.t0));
                                                  case 14:
                                                  case "end":
                                                      return a.stop();
                                              }
                                      },
                                      a,
                                      null,
                                      [[0, 11]]
                                  );
                              })
                          );
                          return function (e) {
                              return a.apply(this, arguments);
                          };
                      })()),
                      (this.role = function () {
                          var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                              i = { stackHeaders: n.stackHeaders };
                          return a && (i.role = { uid: a }), new V(e, i);
                      }))
                    : ((this.create = N({ http: e, params: this.organization_uid ? { organization_uid: this.organization_uid } : null })), (this.query = F({ http: e, wrapperCollection: ve }))),
                this
            );
        }
        function ve(e, a) {
            return c()(a.stacks).map(function (a) {
                return new fe(e, { stack: a });
            });
        }
        var be = n(59);
        function he(e, a) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                a &&
                    (i = i.filter(function (a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable;
                    })),
                    n.push.apply(n, i);
            }
            return n;
        }
        function ge(e) {
            for (var a = 1; a < arguments.length; a++) {
                var n = null != arguments[a] ? arguments[a] : {};
                a % 2
                    ? he(Object(n), !0).forEach(function (a) {
                          t()(e, a, n[a]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : he(Object(n)).forEach(function (a) {
                          Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
                      });
            }
            return e;
        }
        function ye(e, a) {
            var n = "contentstack-management-javascript/".concat(be.version),
                i = { "X-User-Agent": n, "User-Agent": b(n, a.application, a.integration, a.feature) };
            return (
                a.authtoken && (i.authtoken = a.authtoken),
                ((a = ge(ge({}, { defaultHostName: "api.contentstack.io" }), c()(a))).headers = ge(ge({}, a.headers), i)),
                (function (e) {
                    var a = e.http;
                    return {
                        login: function (e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return a.post("/user-session", { user: e }, { params: n }).then(function (e) {
                                return null != e.data.user && null != e.data.user.authtoken && ((a.defaults.headers.common.authtoken = e.data.user.authtoken), (e.data.user = new $(a, e.data))), e.data;
                            }, k);
                        },
                        getUser: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return a.get("/user", { params: e }).then(function (e) {
                                return new $(a, e.data);
                            }, k);
                        },
                        stack: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            return new fe(a, null !== e ? { stack: { api_key: e } } : null);
                        },
                        organization: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            return new G(a, null !== e ? { organization: { uid: e } } : null);
                        },
                    };
                })({ http: x(e, a) })
            );
        }
    },
]);
