/*! UIkit 3.3.0 | http://www.getuikit.com | (c) 2014 - 2019 YOOtheme | MIT License */
!(function(t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = e())
        : "function" == typeof define && define.amd
        ? define("uikit", e)
        : ((t = t || self).UIkit = e());
})(this, function() {
    "use strict";
    var t = Object.prototype,
        i = t.hasOwnProperty;
    function l(t, e) {
        return i.call(t, e);
    }
    var e = {},
        n = /([a-z\d])([A-Z])/g;
    function d(t) {
        return t in e || (e[t] = t.replace(n, "$1-$2").toLowerCase()), e[t];
    }
    var r = /-(\w)/g;
    function f(t) {
        return t.replace(r, o);
    }
    function o(t, e) {
        return e ? e.toUpperCase() : "";
    }
    function p(t) {
        return t.length ? o(0, t.charAt(0)) + t.slice(1) : "";
    }
    var s = String.prototype,
        a =
            s.startsWith ||
            function(t) {
                return 0 === this.lastIndexOf(t, 0);
            };
    function w(t, e) {
        return a.call(t, e);
    }
    var h =
        s.endsWith ||
        function(t) {
            return this.substr(-t.length) === t;
        };
    function u(t, e) {
        return h.call(t, e);
    }
    function c(t, e) {
        return ~this.indexOf(t, e);
    }
    var m = Array.prototype,
        g = s.includes || c,
        v = m.includes || c;
    function b(t, e) {
        return t && (D(t) ? g : v).call(t, e);
    }
    var x =
        m.findIndex ||
        function(t) {
            for (var e = arguments, i = 0; i < this.length; i++)
                if (t.call(e[1], this[i], i, this)) return i;
            return -1;
        };
    function y(t, e) {
        return x.call(t, e);
    }
    var k = Array.isArray;
    function $(t) {
        return "function" == typeof t;
    }
    function I(t) {
        return null !== t && "object" == typeof t;
    }
    var S = t.toString;
    function T(t) {
        return "[object Object]" === S.call(t);
    }
    function E(t) {
        return I(t) && t === t.window;
    }
    function A(t) {
        return I(t) && 9 === t.nodeType;
    }
    function _(t) {
        return I(t) && !!t.jquery;
    }
    function C(t) {
        return I(t) && 1 <= t.nodeType;
    }
    function N(t) {
        return I(t) && 1 === t.nodeType;
    }
    function M(t) {
        return S.call(t).match(/^\[object (NodeList|HTMLCollection)\]$/);
    }
    function z(t) {
        return "boolean" == typeof t;
    }
    function D(t) {
        return "string" == typeof t;
    }
    function P(t) {
        return "number" == typeof t;
    }
    function B(t) {
        return P(t) || (D(t) && !isNaN(t - parseFloat(t)));
    }
    function O(t) {
        return !(k(t) ? t.length : I(t) && Object.keys(t).length);
    }
    function H(t) {
        return void 0 === t;
    }
    function L(t) {
        return z(t)
            ? t
            : "true" === t ||
                  "1" === t ||
                  "" === t ||
                  ("false" !== t && "0" !== t && t);
    }
    function F(t) {
        var e = Number(t);
        return !isNaN(e) && e;
    }
    function j(t) {
        return parseFloat(t) || 0;
    }
    function W(t) {
        return C(t) ? t : M(t) || _(t) ? t[0] : k(t) ? W(t[0]) : null;
    }
    function V(t) {
        return C(t)
            ? [t]
            : M(t)
            ? m.slice.call(t)
            : k(t)
            ? t.map(W).filter(Boolean)
            : _(t)
            ? t.toArray()
            : [];
    }
    function R(t) {
        return E(t)
            ? t
            : (t = W(t))
            ? (A(t) ? t : t.ownerDocument).defaultView
            : window;
    }
    function q(t) {
        return k(t)
            ? t
            : D(t)
            ? t.split(/,(?![^(]*\))/).map(function(t) {
                  return B(t) ? F(t) : L(t.trim());
              })
            : [t];
    }
    function Y(t) {
        return t ? (u(t, "ms") ? j(t) : 1e3 * j(t)) : 0;
    }
    function U(t, i) {
        return (
            t === i ||
            (I(t) &&
                I(i) &&
                Object.keys(t).length === Object.keys(i).length &&
                J(t, function(t, e) {
                    return t === i[e];
                }))
        );
    }
    function X(t, e, i) {
        return t.replace(new RegExp(e + "|" + i, "mg"), function(t) {
            return t === e ? i : e;
        });
    }
    var G =
        Object.assign ||
        function(t) {
            for (var e = [], i = arguments.length - 1; 0 < i--; )
                e[i] = arguments[i + 1];
            t = Object(t);
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                if (null !== r) for (var o in r) l(r, o) && (t[o] = r[o]);
            }
            return t;
        };
    function K(t) {
        return t[t.length - 1];
    }
    function J(t, e) {
        for (var i in t) if (!1 === e(t[i], i)) return !1;
        return !0;
    }
    function Z(t, r) {
        return t.sort(function(t, e) {
            var i = t[r];
            void 0 === i && (i = 0);
            var n = e[r];
            return void 0 === n && (n = 0), n < i ? 1 : i < n ? -1 : 0;
        });
    }
    function Q(t, i) {
        var n = new Set();
        return t.filter(function(t) {
            var e = t[i];
            return !n.has(e) && (n.add(e) || !0);
        });
    }
    function tt(t, e, i) {
        return (
            void 0 === e && (e = 0),
            void 0 === i && (i = 1),
            Math.min(Math.max(F(t) || 0, e), i)
        );
    }
    function et() {}
    function it(t, e) {
        return (
            t.left < e.right &&
            t.right > e.left &&
            t.top < e.bottom &&
            t.bottom > e.top
        );
    }
    function nt(t, e) {
        return (
            t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top
        );
    }
    var rt = {
        ratio: function(t, e, i) {
            var n,
                r = "width" === e ? "height" : "width";
            return (
                ((n = {})[r] = t[e] ? Math.round((i * t[r]) / t[e]) : t[r]),
                (n[e] = i),
                n
            );
        },
        contain: function(i, n) {
            var r = this;
            return (
                J((i = G({}, i)), function(t, e) {
                    return (i = i[e] > n[e] ? r.ratio(i, e, n[e]) : i);
                }),
                i
            );
        },
        cover: function(i, n) {
            var r = this;
            return (
                J((i = this.contain(i, n)), function(t, e) {
                    return (i = i[e] < n[e] ? r.ratio(i, e, n[e]) : i);
                }),
                i
            );
        },
    };
    function ot(t, e, i) {
        if (I(e)) for (var n in e) ot(t, n, e[n]);
        else {
            if (H(i)) return (t = W(t)) && t.getAttribute(e);
            V(t).forEach(function(t) {
                $(i) && (i = i.call(t, ot(t, e))),
                    null === i ? at(t, e) : t.setAttribute(e, i);
            });
        }
    }
    function st(t, e) {
        return V(t).some(function(t) {
            return t.hasAttribute(e);
        });
    }
    function at(t, e) {
        (t = V(t)),
            e.split(" ").forEach(function(e) {
                return t.forEach(function(t) {
                    return t.hasAttribute(e) && t.removeAttribute(e);
                });
            });
    }
    function ht(t, e) {
        for (var i = 0, n = [e, "data-" + e]; i < n.length; i++)
            if (st(t, n[i])) return ot(t, n[i]);
    }
    var lt = /msie|trident/i.test(window.navigator.userAgent),
        ut = "rtl" === ot(document.documentElement, "dir"),
        ct = "ontouchstart" in window,
        dt = window.PointerEvent,
        ft =
            ct ||
            (window.DocumentTouch && document instanceof DocumentTouch) ||
            navigator.maxTouchPoints,
        pt = dt ? "pointerdown" : ct ? "touchstart" : "mousedown",
        mt = dt ? "pointermove" : ct ? "touchmove" : "mousemove",
        gt = dt ? "pointerup" : ct ? "touchend" : "mouseup",
        vt = dt ? "pointerenter" : ct ? "" : "mouseenter",
        wt = dt ? "pointerleave" : ct ? "" : "mouseleave",
        bt = dt ? "pointercancel" : "touchcancel";
    function xt(t, e) {
        return W(t) || $t(t, kt(t, e));
    }
    function yt(t, e) {
        var i = V(t);
        return (i.length && i) || It(t, kt(t, e));
    }
    function kt(t, e) {
        return (
            void 0 === e && (e = document), At(t) || A(e) ? e : e.ownerDocument
        );
    }
    function $t(t, e) {
        return W(St(t, e, "querySelector"));
    }
    function It(t, e) {
        return V(St(t, e, "querySelectorAll"));
    }
    function St(t, s, e) {
        if ((void 0 === s && (s = document), !t || !D(t))) return null;
        var a;
        At((t = t.replace(Et, "$1 *"))) &&
            ((a = []),
            (t = t
                .match(_t)
                .map(function(t) {
                    return t.replace(/,$/, "").trim();
                })
                .map(function(t, e) {
                    var i = s;
                    if ("!" === t[0]) {
                        var n = t
                            .substr(1)
                            .trim()
                            .split(" ");
                        (i = Dt(Pt(s), n[0])),
                            (t = n
                                .slice(1)
                                .join(" ")
                                .trim());
                    }
                    if ("-" === t[0]) {
                        var r = t
                                .substr(1)
                                .trim()
                                .split(" "),
                            o = (i || s).previousElementSibling;
                        (i = Mt(o, t.substr(1)) ? o : null),
                            (t = r.slice(1).join(" "));
                    }
                    return i
                        ? (i.id ||
                              ((i.id = "uk-" + Date.now() + e),
                              a.push(function() {
                                  return at(i, "id");
                              })),
                          "#" + Lt(i.id) + " " + t)
                        : null;
                })
                .filter(Boolean)
                .join(",")),
            (s = document));
        try {
            return s[e](t);
        } catch (t) {
            return null;
        } finally {
            a &&
                a.forEach(function(t) {
                    return t();
                });
        }
    }
    var Tt = /(^|[^\\],)\s*[!>+~-]/,
        Et = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;
    function At(t) {
        return D(t) && t.match(Tt);
    }
    var _t = /.*?[^\\](?:,|$)/g;
    var Ct = Element.prototype,
        Nt = Ct.matches || Ct.webkitMatchesSelector || Ct.msMatchesSelector;
    function Mt(t, e) {
        return V(t).some(function(t) {
            return Nt.call(t, e);
        });
    }
    var zt =
        Ct.closest ||
        function(t) {
            var e = this;
            do {
                if (Mt(e, t)) return e;
            } while ((e = Pt(e)));
        };
    function Dt(t, e) {
        return (
            w(e, ">") && (e = e.slice(1)),
            N(t)
                ? zt.call(t, e)
                : V(t)
                      .map(function(t) {
                          return Dt(t, e);
                      })
                      .filter(Boolean)
        );
    }
    function Pt(t) {
        return (t = W(t)) && N(t.parentNode) && t.parentNode;
    }
    function Bt(t, e) {
        for (var i = []; (t = Pt(t)); ) (e && !Mt(t, e)) || i.push(t);
        return i;
    }
    function Ot(t, e) {
        var i = (t = W(t)) ? V(t.children) : [];
        return e
            ? i.filter(function(t) {
                  return Mt(t, e);
              })
            : i;
    }
    var Ht =
        (window.CSS && CSS.escape) ||
        function(t) {
            return t.replace(/([^\x7f-\uFFFF\w-])/g, function(t) {
                return "\\" + t;
            });
        };
    function Lt(t) {
        return D(t) ? Ht.call(null, t) : "";
    }
    var Ft = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        menuitem: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    };
    function jt(t) {
        return V(t).some(function(t) {
            return Ft[t.tagName.toLowerCase()];
        });
    }
    function Wt(t) {
        return V(t).some(function(t) {
            return t.offsetWidth || t.offsetHeight || t.getClientRects().length;
        });
    }
    var Vt = "input,select,textarea,button";
    function Rt(t) {
        return V(t).some(function(t) {
            return Mt(t, Vt);
        });
    }
    function qt(t, e) {
        return V(t).filter(function(t) {
            return Mt(t, e);
        });
    }
    function Yt(t, e) {
        return D(e)
            ? Mt(t, e) || Dt(t, e)
            : t === e || (A(e) ? e.documentElement : W(e)).contains(W(t));
    }
    function Ut() {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
        var i,
            n,
            r = Zt(t),
            o = r[0],
            s = r[1],
            a = r[2],
            h = r[3],
            l = r[4];
        return (
            (o = ie(o)),
            1 < h.length &&
                ((i = h),
                (h = function(t) {
                    return k(t.detail)
                        ? i.apply(void 0, [t].concat(t.detail))
                        : i(t);
                })),
            l &&
                l.self &&
                ((n = h),
                (h = function(t) {
                    if (t.target === t.currentTarget || t.target === t.current)
                        return n.call(null, t);
                })),
            a &&
                (h = (function(t, n, r) {
                    var o = this;
                    return function(i) {
                        t.forEach(function(t) {
                            var e =
                                ">" === n[0]
                                    ? It(n, t)
                                          .reverse()
                                          .filter(function(t) {
                                              return Yt(i.target, t);
                                          })[0]
                                    : Dt(i.target, n);
                            e &&
                                ((i.delegate = t),
                                (i.current = e),
                                r.call(o, i));
                        });
                    };
                })(o, a, h)),
            (l = Qt(l)),
            s.split(" ").forEach(function(e) {
                return o.forEach(function(t) {
                    return t.addEventListener(e, h, l);
                });
            }),
            function() {
                return Xt(o, s, h, l);
            }
        );
    }
    function Xt(t, e, i, n) {
        void 0 === n && (n = !1),
            (n = Qt(n)),
            (t = ie(t)),
            e.split(" ").forEach(function(e) {
                return t.forEach(function(t) {
                    return t.removeEventListener(e, i, n);
                });
            });
    }
    function Gt() {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
        var i = Zt(t),
            n = i[0],
            r = i[1],
            o = i[2],
            s = i[3],
            a = i[4],
            h = i[5],
            l = Ut(
                n,
                r,
                o,
                function(t) {
                    var e = !h || h(t);
                    e && (l(), s(t, e));
                },
                a
            );
        return l;
    }
    function Kt(t, i, n) {
        return ie(t).reduce(function(t, e) {
            return t && e.dispatchEvent(Jt(i, !0, !0, n));
        }, !0);
    }
    function Jt(t, e, i, n) {
        if ((void 0 === e && (e = !0), void 0 === i && (i = !1), D(t))) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, e, i, n), (t = r);
        }
        return t;
    }
    function Zt(t) {
        return $(t[2]) && t.splice(2, 0, !1), t;
    }
    function Qt(t) {
        return t && lt && !z(t) ? !!t.capture : t;
    }
    function te(t) {
        return t && "addEventListener" in t;
    }
    function ee(t) {
        return te(t) ? t : W(t);
    }
    function ie(t) {
        return k(t)
            ? t.map(ee).filter(Boolean)
            : D(t)
            ? It(t)
            : te(t)
            ? [t]
            : V(t);
    }
    function ne(t) {
        return "touch" === t.pointerType || !!t.touches;
    }
    function re(t, e) {
        void 0 === e && (e = "client");
        var i = t.touches,
            n = t.changedTouches,
            r = (i && i[0]) || (n && n[0]) || t;
        return { x: r[e + "X"], y: r[e + "Y"] };
    }
    function oe() {
        var i = this;
        this.promise = new se(function(t, e) {
            (i.reject = e), (i.resolve = t);
        });
    }
    var se = "Promise" in window ? window.Promise : le,
        ae = 2,
        he = "setImmediate" in window ? setImmediate : setTimeout;
    function le(t) {
        (this.state = ae), (this.value = void 0), (this.deferred = []);
        var e = this;
        try {
            t(
                function(t) {
                    e.resolve(t);
                },
                function(t) {
                    e.reject(t);
                }
            );
        } catch (t) {
            e.reject(t);
        }
    }
    (le.reject = function(i) {
        return new le(function(t, e) {
            e(i);
        });
    }),
        (le.resolve = function(i) {
            return new le(function(t, e) {
                t(i);
            });
        }),
        (le.all = function(s) {
            return new le(function(i, t) {
                var n = [],
                    r = 0;
                function e(e) {
                    return function(t) {
                        (n[e] = t), (r += 1) === s.length && i(n);
                    };
                }
                0 === s.length && i(n);
                for (var o = 0; o < s.length; o += 1)
                    le.resolve(s[o]).then(e(o), t);
            });
        }),
        (le.race = function(n) {
            return new le(function(t, e) {
                for (var i = 0; i < n.length; i += 1)
                    le.resolve(n[i]).then(t, e);
            });
        });
    var ue = le.prototype;
    function ce(s, a) {
        return new se(function(t, e) {
            var i = G(
                {
                    data: null,
                    method: "GET",
                    headers: {},
                    xhr: new XMLHttpRequest(),
                    beforeSend: et,
                    responseType: "",
                },
                a
            );
            i.beforeSend(i);
            var n = i.xhr;
            for (var r in i)
                if (r in n)
                    try {
                        n[r] = i[r];
                    } catch (t) {}
            for (var o in (n.open(i.method.toUpperCase(), s), i.headers))
                n.setRequestHeader(o, i.headers[o]);
            Ut(n, "load", function() {
                0 === n.status ||
                (200 <= n.status && n.status < 300) ||
                304 === n.status
                    ? t(n)
                    : e(G(Error(n.statusText), { xhr: n, status: n.status }));
            }),
                Ut(n, "error", function() {
                    return e(G(Error("Network Error"), { xhr: n }));
                }),
                Ut(n, "timeout", function() {
                    return e(G(Error("Network Timeout"), { xhr: n }));
                }),
                n.send(i.data);
        });
    }
    function de(n, r, o) {
        return new se(function(t, e) {
            var i = new Image();
            (i.onerror = e),
                (i.onload = function() {
                    return t(i);
                }),
                o && (i.sizes = o),
                r && (i.srcset = r),
                (i.src = n);
        });
    }
    function fe(t) {
        if ("loading" === document.readyState)
            var e = Ut(document, "DOMContentLoaded", function() {
                e(), t();
            });
        else t();
    }
    function pe(t, e) {
        return e ? V(t).indexOf(W(e)) : Ot(Pt(t)).indexOf(t);
    }
    function me(t, e, i, n) {
        void 0 === i && (i = 0), void 0 === n && (n = !1);
        var r = (e = V(e)).length;
        return (
            (t = B(t)
                ? F(t)
                : "next" === t
                ? i + 1
                : "previous" === t
                ? i - 1
                : pe(e, t)),
            n ? tt(t, 0, r - 1) : (t %= r) < 0 ? t + r : t
        );
    }
    function ge(t) {
        return ((t = Ce(t)).innerHTML = ""), t;
    }
    function ve(t, e) {
        return (
            (t = Ce(t)),
            H(e) ? t.innerHTML : we(t.hasChildNodes() ? ge(t) : t, e)
        );
    }
    function we(e, t) {
        return (
            (e = Ce(e)),
            ye(t, function(t) {
                return e.appendChild(t);
            })
        );
    }
    function be(e, t) {
        return (
            (e = Ce(e)),
            ye(t, function(t) {
                return e.parentNode.insertBefore(t, e);
            })
        );
    }
    function xe(e, t) {
        return (
            (e = Ce(e)),
            ye(t, function(t) {
                return e.nextSibling
                    ? be(e.nextSibling, t)
                    : we(e.parentNode, t);
            })
        );
    }
    function ye(t, e) {
        return (t = D(t) ? Ae(t) : t)
            ? "length" in t
                ? V(t).map(e)
                : e(t)
            : null;
    }
    function ke(t) {
        V(t).map(function(t) {
            return t.parentNode && t.parentNode.removeChild(t);
        });
    }
    function $e(t, e) {
        for (e = W(be(t, e)); e.firstChild; ) e = e.firstChild;
        return we(e, t), e;
    }
    function Ie(t, e) {
        return V(
            V(t).map(function(t) {
                return t.hasChildNodes ? $e(V(t.childNodes), e) : we(t, e);
            })
        );
    }
    function Se(t) {
        V(t)
            .map(Pt)
            .filter(function(t, e, i) {
                return i.indexOf(t) === e;
            })
            .forEach(function(t) {
                be(t, t.childNodes), ke(t);
            });
    }
    (ue.resolve = function(t) {
        var e = this;
        if (e.state === ae) {
            if (t === e) throw new TypeError("Promise settled with itself.");
            var i = !1;
            try {
                var n = t && t.then;
                if (null !== t && I(t) && $(n))
                    return void n.call(
                        t,
                        function(t) {
                            i || e.resolve(t), (i = !0);
                        },
                        function(t) {
                            i || e.reject(t), (i = !0);
                        }
                    );
            } catch (t) {
                return void (i || e.reject(t));
            }
            (e.state = 0), (e.value = t), e.notify();
        }
    }),
        (ue.reject = function(t) {
            var e = this;
            if (e.state === ae) {
                if (t === e)
                    throw new TypeError("Promise settled with itself.");
                (e.state = 1), (e.value = t), e.notify();
            }
        }),
        (ue.notify = function() {
            var o = this;
            he(function() {
                if (o.state !== ae)
                    for (; o.deferred.length; ) {
                        var t = o.deferred.shift(),
                            e = t[0],
                            i = t[1],
                            n = t[2],
                            r = t[3];
                        try {
                            0 === o.state
                                ? $(e)
                                    ? n(e.call(void 0, o.value))
                                    : n(o.value)
                                : 1 === o.state &&
                                  ($(i)
                                      ? n(i.call(void 0, o.value))
                                      : r(o.value));
                        } catch (t) {
                            r(t);
                        }
                    }
            });
        }),
        (ue.then = function(i, n) {
            var r = this;
            return new le(function(t, e) {
                r.deferred.push([i, n, t, e]), r.notify();
            });
        }),
        (ue.catch = function(t) {
            return this.then(void 0, t);
        });
    var Te = /^\s*<(\w+|!)[^>]*>/,
        Ee = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
    function Ae(t) {
        var e = Ee.exec(t);
        if (e) return document.createElement(e[1]);
        var i = document.createElement("div");
        return (
            Te.test(t)
                ? i.insertAdjacentHTML("beforeend", t.trim())
                : (i.textContent = t),
            1 < i.childNodes.length ? V(i.childNodes) : i.firstChild
        );
    }
    function _e(t, e) {
        if (N(t))
            for (e(t), t = t.firstElementChild; t; ) {
                var i = t.nextElementSibling;
                _e(t, e), (t = i);
            }
    }
    function Ce(t, e) {
        return D(t) ? (Me(t) ? W(Ae(t)) : $t(t, e)) : W(t);
    }
    function Ne(t, e) {
        return D(t) ? (Me(t) ? V(Ae(t)) : It(t, e)) : V(t);
    }
    function Me(t) {
        return "<" === t[0] || t.match(/^\s*</);
    }
    function ze(t) {
        for (var e = [], i = arguments.length - 1; 0 < i--; )
            e[i] = arguments[i + 1];
        Le(t, e, "add");
    }
    function De(t) {
        for (var e = [], i = arguments.length - 1; 0 < i--; )
            e[i] = arguments[i + 1];
        Le(t, e, "remove");
    }
    function Pe(t, e) {
        ot(t, "class", function(t) {
            return (t || "").replace(new RegExp("\\b" + e + "\\b", "g"), "");
        });
    }
    function Be(t) {
        for (var e = [], i = arguments.length - 1; 0 < i--; )
            e[i] = arguments[i + 1];
        e[0] && De(t, e[0]), e[1] && ze(t, e[1]);
    }
    function Oe(t, e) {
        return (
            e &&
            V(t).some(function(t) {
                return t.classList.contains(e.split(" ")[0]);
            })
        );
    }
    function He(t) {
        for (var n = [], e = arguments.length - 1; 0 < e--; )
            n[e] = arguments[e + 1];
        if (n.length) {
            var r = D(K((n = Fe(n)))) ? [] : n.pop();
            (n = n.filter(Boolean)),
                V(t).forEach(function(t) {
                    for (var e = t.classList, i = 0; i < n.length; i++)
                        je.Force
                            ? e.toggle.apply(e, [n[i]].concat(r))
                            : e[
                                  (H(r)
                                    ? !e.contains(n[i])
                                    : r)
                                      ? "add"
                                      : "remove"
                              ](n[i]);
                });
        }
    }
    function Le(t, i, n) {
        (i = Fe(i).filter(Boolean)).length &&
            V(t).forEach(function(t) {
                var e = t.classList;
                je.Multiple
                    ? e[n].apply(e, i)
                    : i.forEach(function(t) {
                          return e[n](t);
                      });
            });
    }
    function Fe(t) {
        return t.reduce(function(t, e) {
            return t.concat.call(
                t,
                D(e) && b(e, " ") ? e.trim().split(" ") : e
            );
        }, []);
    }
    var je = {
            get Multiple() {
                return this.get("_multiple");
            },
            get Force() {
                return this.get("_force");
            },
            get: function(t) {
                if (!l(this, t)) {
                    var e = document.createElement("_").classList;
                    e.add("a", "b"),
                        e.toggle("c", !1),
                        (this._multiple = e.contains("b")),
                        (this._force = !e.contains("c"));
                }
                return this[t];
            },
        },
        We = {
            "animation-iteration-count": !0,
            "column-count": !0,
            "fill-opacity": !0,
            "flex-grow": !0,
            "flex-shrink": !0,
            "font-weight": !0,
            "line-height": !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            "stroke-dasharray": !0,
            "stroke-dashoffset": !0,
            widows: !0,
            "z-index": !0,
            zoom: !0,
        };
    function Ve(t, e, r) {
        return V(t).map(function(i) {
            if (D(e)) {
                if (((e = Ge(e)), H(r))) return qe(i, e);
                r || P(r)
                    ? (i.style[e] = B(r) && !We[e] ? r + "px" : r)
                    : i.style.removeProperty(e);
            } else {
                if (k(e)) {
                    var n = Re(i);
                    return e.reduce(function(t, e) {
                        return (t[e] = n[Ge(e)]), t;
                    }, {});
                }
                I(e) &&
                    J(e, function(t, e) {
                        return Ve(i, e, t);
                    });
            }
            return i;
        })[0];
    }
    function Re(t, e) {
        return (t = W(t)).ownerDocument.defaultView.getComputedStyle(t, e);
    }
    function qe(t, e, i) {
        return Re(t, i)[e];
    }
    var Ye = {};
    function Ue(t) {
        var e = document.documentElement;
        if (!lt) return Re(e).getPropertyValue("--uk-" + t);
        if (!(t in Ye)) {
            var i = we(e, document.createElement("div"));
            ze(i, "uk-" + t),
                (Ye[t] = qe(i, "content", ":before").replace(
                    /^["'](.*)["']$/,
                    "$1"
                )),
                ke(i);
        }
        return Ye[t];
    }
    var Xe = {};
    function Ge(t) {
        var e = Xe[t];
        return (e =
            e ||
            (Xe[t] =
                (function(t) {
                    t = d(t);
                    var e = document.documentElement.style;
                    if (t in e) return t;
                    var i,
                        n = Ke.length;
                    for (; n--; )
                        if ((i = "-" + Ke[n] + "-" + t) in e) return i;
                })(t) || t));
    }
    var Ke = ["webkit", "moz", "ms"];
    function Je(t, s, a, h) {
        return (
            void 0 === a && (a = 400),
            void 0 === h && (h = "linear"),
            se.all(
                V(t).map(function(o) {
                    return new se(function(i, n) {
                        for (var t in s) {
                            var e = Ve(o, t);
                            "" === e && Ve(o, t, e);
                        }
                        var r = setTimeout(function() {
                            return Kt(o, "transitionend");
                        }, a);
                        Gt(
                            o,
                            "transitionend transitioncanceled",
                            function(t) {
                                var e = t.type;
                                clearTimeout(r),
                                    De(o, "uk-transition"),
                                    Ve(o, {
                                        transitionProperty: "",
                                        transitionDuration: "",
                                        transitionTimingFunction: "",
                                    }),
                                    "transitioncanceled" === e ? n() : i();
                            },
                            { self: !0 }
                        ),
                            ze(o, "uk-transition"),
                            Ve(
                                o,
                                G(
                                    {
                                        transitionProperty: Object.keys(s)
                                            .map(Ge)
                                            .join(","),
                                        transitionDuration: a + "ms",
                                        transitionTimingFunction: h,
                                    },
                                    s
                                )
                            );
                    });
                })
            )
        );
    }
    var Ze = {
            start: Je,
            stop: function(t) {
                return Kt(t, "transitionend"), se.resolve();
            },
            cancel: function(t) {
                Kt(t, "transitioncanceled");
            },
            inProgress: function(t) {
                return Oe(t, "uk-transition");
            },
        },
        Qe = "uk-animation-",
        ti = "uk-cancel-animation";
    function ei(t, e, i, a, h) {
        var l = arguments;
        return (
            void 0 === i && (i = 200),
            se.all(
                V(t).map(function(s) {
                    return new se(function(n, r) {
                        if (Oe(s, ti))
                            requestAnimationFrame(function() {
                                return se.resolve().then(function() {
                                    return ei.apply(void 0, l).then(n, r);
                                });
                            });
                        else {
                            var t = e + " " + Qe + (h ? "leave" : "enter");
                            w(e, Qe) &&
                                (a && (t += " uk-transform-origin-" + a),
                                h && (t += " " + Qe + "reverse")),
                                o(),
                                Gt(
                                    s,
                                    "animationend animationcancel",
                                    function(t) {
                                        var e = t.type,
                                            i = !1;
                                        "animationcancel" === e
                                            ? (r(), o())
                                            : (n(),
                                              se.resolve().then(function() {
                                                  (i = !0), o();
                                              })),
                                            requestAnimationFrame(function() {
                                                i ||
                                                    (ze(s, ti),
                                                    requestAnimationFrame(
                                                        function() {
                                                            return De(s, ti);
                                                        }
                                                    ));
                                            });
                                    },
                                    { self: !0 }
                                ),
                                Ve(s, "animationDuration", i + "ms"),
                                ze(s, t);
                        }
                        function o() {
                            Ve(s, "animationDuration", ""), Pe(s, Qe + "\\S*");
                        }
                    });
                })
            )
        );
    }
    var ii = new RegExp(Qe + "(enter|leave)"),
        ni = {
            in: function(t, e, i, n) {
                return ei(t, e, i, n, !1);
            },
            out: function(t, e, i, n) {
                return ei(t, e, i, n, !0);
            },
            inProgress: function(t) {
                return ii.test(ot(t, "class"));
            },
            cancel: function(t) {
                Kt(t, "animationcancel");
            },
        },
        ri = { width: ["x", "left", "right"], height: ["y", "top", "bottom"] };
    function oi(t, e, u, c, d, i, n, r) {
        (u = mi(u)), (c = mi(c));
        var f = { element: u, target: c };
        if (!t || !e) return f;
        var p = ai(t),
            m = ai(e),
            g = m;
        if (
            (pi(g, u, p, -1),
            pi(g, c, m, 1),
            (d = gi(d, p.width, p.height)),
            (i = gi(i, m.width, m.height)),
            (d.x += i.x),
            (d.y += i.y),
            (g.left += d.x),
            (g.top += d.y),
            n)
        ) {
            var o = [ai(R(t))];
            r && o.unshift(ai(r)),
                J(ri, function(t, s) {
                    var a = t[0],
                        h = t[1],
                        l = t[2];
                    (!0 !== n && !b(n, a)) ||
                        o.some(function(n) {
                            var t = u[a] === h ? -p[s] : u[a] === l ? p[s] : 0,
                                e = c[a] === h ? m[s] : c[a] === l ? -m[s] : 0;
                            if (g[h] < n[h] || g[h] + p[s] > n[l]) {
                                var i = p[s] / 2,
                                    r = "center" === c[a] ? -m[s] / 2 : 0;
                                return (
                                    ("center" === u[a] &&
                                        (o(i, r) || o(-i, -r))) ||
                                    o(t, e)
                                );
                            }
                            function o(e, t) {
                                var i = g[h] + e + t - 2 * d[a];
                                if (i >= n[h] && i + p[s] <= n[l])
                                    return (
                                        (g[h] = i),
                                        ["element", "target"].forEach(function(
                                            t
                                        ) {
                                            f[t][a] = e
                                                ? f[t][a] === ri[s][1]
                                                    ? ri[s][2]
                                                    : ri[s][1]
                                                : f[t][a];
                                        }),
                                        !0
                                    );
                            }
                        });
                });
        }
        return si(t, g), f;
    }
    function si(i, n) {
        if (!n) return ai(i);
        var r = si(i),
            o = Ve(i, "position");
        ["left", "top"].forEach(function(t) {
            if (t in n) {
                var e = Ve(i, t);
                Ve(
                    i,
                    t,
                    n[t] -
                        r[t] +
                        j("absolute" === o && "auto" === e ? hi(i)[t] : e)
                );
            }
        });
    }
    function ai(t) {
        if (!t) return {};
        var e,
            i,
            n = R(t),
            r = n.pageYOffset,
            o = n.pageXOffset;
        if (E(t)) {
            var s = t.innerHeight,
                a = t.innerWidth;
            return {
                top: r,
                left: o,
                height: s,
                width: a,
                bottom: r + s,
                right: o + a,
            };
        }
        Wt(t) ||
            "none" !== Ve(t, "display") ||
            ((e = ot(t, "style")),
            (i = ot(t, "hidden")),
            ot(t, {
                style: (e || "") + ";display:block !important;",
                hidden: null,
            }));
        var h = (t = W(t)).getBoundingClientRect();
        return (
            H(e) || ot(t, { style: e, hidden: i }),
            {
                height: h.height,
                width: h.width,
                top: h.top + r,
                left: h.left + o,
                bottom: h.bottom + r,
                right: h.right + o,
            }
        );
    }
    function hi(t, e) {
        e = e || W(t).offsetParent || R(t).document.documentElement;
        var i = si(t),
            n = si(e);
        return {
            top: i.top - n.top - j(Ve(e, "borderTopWidth")),
            left: i.left - n.left - j(Ve(e, "borderLeftWidth")),
        };
    }
    function li(t) {
        var e = [0, 0];
        t = W(t);
        do {
            if (
                ((e[0] += t.offsetTop),
                (e[1] += t.offsetLeft),
                "fixed" === Ve(t, "position"))
            ) {
                var i = R(t);
                return (e[0] += i.pageYOffset), (e[1] += i.pageXOffset), e;
            }
        } while ((t = t.offsetParent));
        return e;
    }
    var ui = di("height"),
        ci = di("width");
    function di(n) {
        var r = p(n);
        return function(t, e) {
            if (H(e)) {
                if (E(t)) return t["inner" + r];
                if (A(t)) {
                    var i = t.documentElement;
                    return Math.max(i["offset" + r], i["scroll" + r]);
                }
                return (
                    (e =
                        "auto" === (e = Ve((t = W(t)), n))
                            ? t["offset" + r]
                            : j(e) || 0) - fi(t, n)
                );
            }
            Ve(t, n, e || 0 === e ? +e + fi(t, n) + "px" : "");
        };
    }
    function fi(i, t, e) {
        return (
            void 0 === e && (e = "border-box"),
            Ve(i, "boxSizing") === e
                ? ri[t]
                      .slice(1)
                      .map(p)
                      .reduce(function(t, e) {
                          return (
                              t +
                              j(Ve(i, "padding" + e)) +
                              j(Ve(i, "border" + e + "Width"))
                          );
                      }, 0)
                : 0
        );
    }
    function pi(o, s, a, h) {
        J(ri, function(t, e) {
            var i = t[0],
                n = t[1],
                r = t[2];
            s[i] === r
                ? (o[n] += a[e] * h)
                : "center" === s[i] && (o[n] += (a[e] * h) / 2);
        });
    }
    function mi(t) {
        var e = /left|center|right/,
            i = /top|center|bottom/;
        return (
            1 === (t = (t || "").split(" ")).length &&
                (t = e.test(t[0])
                    ? t.concat(["center"])
                    : i.test(t[0])
                    ? ["center"].concat(t)
                    : ["center", "center"]),
            {
                x: e.test(t[0]) ? t[0] : "center",
                y: i.test(t[1]) ? t[1] : "center",
            }
        );
    }
    function gi(t, e, i) {
        var n = (t || "").split(" "),
            r = n[0],
            o = n[1];
        return {
            x: r ? j(r) * (u(r, "%") ? e / 100 : 1) : 0,
            y: o ? j(o) * (u(o, "%") ? i / 100 : 1) : 0,
        };
    }
    function vi(t) {
        switch (t) {
            case "left":
                return "right";
            case "right":
                return "left";
            case "top":
                return "bottom";
            case "bottom":
                return "top";
            default:
                return t;
        }
    }
    function wi(t, e, i) {
        return (
            void 0 === e && (e = "width"),
            void 0 === i && (i = window),
            B(t)
                ? +t
                : u(t, "vh")
                ? bi(ui(R(i)), t)
                : u(t, "vw")
                ? bi(ci(R(i)), t)
                : u(t, "%")
                ? bi(ai(i)[e], t)
                : j(t)
        );
    }
    function bi(t, e) {
        return (t * j(e)) / 100;
    }
    var xi = {
        reads: [],
        writes: [],
        read: function(t) {
            return this.reads.push(t), $i(), t;
        },
        write: function(t) {
            return this.writes.push(t), $i(), t;
        },
        clear: function(t) {
            return Si(this.reads, t) || Si(this.writes, t);
        },
        flush: yi,
    };
    function yi(t) {
        void 0 === t && (t = 1),
            Ii(xi.reads),
            Ii(xi.writes.splice(0, xi.writes.length)),
            (xi.scheduled = !1),
            (xi.reads.length || xi.writes.length) && $i(t + 1);
    }
    var ki = 5;
    function $i(t) {
        if (!xi.scheduled) {
            if (((xi.scheduled = !0), ki < t))
                throw new Error("Maximum recursion limit reached.");
            t
                ? se.resolve().then(function() {
                      return yi(t);
                  })
                : requestAnimationFrame(function() {
                      return yi();
                  });
        }
    }
    function Ii(t) {
        for (var e; (e = t.shift()); ) e();
    }
    function Si(t, e) {
        var i = t.indexOf(e);
        return !!~i && !!t.splice(i, 1);
    }
    function Ti() {}
    Ti.prototype = {
        positions: [],
        init: function() {
            var e,
                t = this;
            (this.positions = []),
                (this.unbind = Ut(document, "mousemove", function(t) {
                    return (e = re(t, "page"));
                })),
                (this.interval = setInterval(function() {
                    e &&
                        (t.positions.push(e),
                        5 < t.positions.length && t.positions.shift());
                }, 50));
        },
        cancel: function() {
            this.unbind && this.unbind(),
                this.interval && clearInterval(this.interval);
        },
        movesTo: function(t) {
            if (this.positions.length < 2) return !1;
            var i = si(t),
                e = i.left,
                n = i.right,
                r = i.top,
                o = i.bottom,
                s = this.positions[0],
                a = K(this.positions),
                h = [s, a];
            return (
                !nt(a, i) &&
                [
                    [
                        { x: e, y: r },
                        { x: n, y: o },
                    ],
                    [
                        { x: e, y: o },
                        { x: n, y: r },
                    ],
                ].some(function(t) {
                    var e = (function(t, e) {
                        var i = t[0],
                            n = i.x,
                            r = i.y,
                            o = t[1],
                            s = o.x,
                            a = o.y,
                            h = e[0],
                            l = h.x,
                            u = h.y,
                            c = e[1],
                            d = c.x,
                            f = c.y,
                            p = (f - u) * (s - n) - (d - l) * (a - r);
                        if (0 == p) return !1;
                        var m = ((d - l) * (r - u) - (f - u) * (n - l)) / p;
                        if (m < 0) return !1;
                        return { x: n + m * (s - n), y: r + m * (a - r) };
                    })(h, t);
                    return e && nt(e, i);
                })
            );
        },
    };
    var Ei = {};
    function Ai(t, e, i) {
        return Ei.computed($(t) ? t.call(i, i) : t, $(e) ? e.call(i, i) : e);
    }
    function _i(t, e) {
        return (
            (t = t && !k(t) ? [t] : t),
            e ? (t ? t.concat(e) : k(e) ? e : [e]) : t
        );
    }
    function Ci(e, i, n) {
        var r = {};
        if (
            ($(i) && (i = i.options),
            i.extends && (e = Ci(e, i.extends, n)),
            i.mixins)
        )
            for (var t = 0, o = i.mixins.length; t < o; t++)
                e = Ci(e, i.mixins[t], n);
        for (var s in e) h(s);
        for (var a in i) l(e, a) || h(a);
        function h(t) {
            r[t] = (
                Ei[t] ||
                function(t, e) {
                    return H(e) ? t : e;
                }
            )(e[t], i[t], n);
        }
        return r;
    }
    function Ni(t, e) {
        var i;
        void 0 === e && (e = []);
        try {
            return t
                ? w(t, "{")
                    ? JSON.parse(t)
                    : e.length && !b(t, ":")
                    ? (((i = {})[e[0]] = t), i)
                    : t.split(";").reduce(function(t, e) {
                          var i = e.split(/:(.*)/),
                              n = i[0],
                              r = i[1];
                          return n && !H(r) && (t[n.trim()] = r.trim()), t;
                      }, {})
                : {};
        } catch (t) {
            return {};
        }
    }
    (Ei.events = Ei.created = Ei.beforeConnect = Ei.connected = Ei.beforeDisconnect = Ei.disconnected = Ei.destroy = _i),
        (Ei.args = function(t, e) {
            return !1 !== e && _i(e || t);
        }),
        (Ei.update = function(t, e) {
            return Z(_i(t, $(e) ? { read: e } : e), "order");
        }),
        (Ei.props = function(t, e) {
            return (
                k(e) &&
                    (e = e.reduce(function(t, e) {
                        return (t[e] = String), t;
                    }, {})),
                Ei.methods(t, e)
            );
        }),
        (Ei.computed = Ei.methods = function(t, e) {
            return e ? (t ? G({}, t, e) : e) : t;
        }),
        (Ei.data = function(e, i, t) {
            return t
                ? Ai(e, i, t)
                : i
                ? e
                    ? function(t) {
                          return Ai(e, i, t);
                      }
                    : i
                : e;
        });
    function Mi(t) {
        (this.id = ++zi), (this.el = W(t));
    }
    var zi = 0;
    function Di(t, e) {
        try {
            t.contentWindow.postMessage(
                JSON.stringify(G({ event: "command" }, e)),
                "*"
            );
        } catch (t) {}
    }
    function Pi(t, e, i) {
        if ((void 0 === e && (e = 0), void 0 === i && (i = 0), !Wt(t)))
            return !1;
        for (var n = ji(t).concat(t), r = 0; r < n.length - 1; r++) {
            var o = si(Fi(n[r])),
                s = {
                    top: o.top - e,
                    left: o.left - i,
                    bottom: o.bottom + e,
                    right: o.right + i,
                },
                a = si(n[r + 1]);
            if (!it(a, s) && !nt({ x: a.left, y: a.top }, s)) return !1;
        }
        return !0;
    }
    function Bi(t, e) {
        (t = E(t) || A(t) ? Wi(t) : W(t)).scrollTop = e;
    }
    function Oi(t, e) {
        void 0 === e && (e = {});
        var h = e.duration;
        void 0 === h && (h = 1e3);
        var l = e.offset;
        if ((void 0 === l && (l = 0), Wt(t))) {
            var u = ji(t).concat(t);
            h /= u.length - 1;
            for (
                var i = se.resolve(),
                    n = function(e) {
                        i = i.then(function() {
                            return new se(function(i) {
                                var n = u[e],
                                    t = u[e + 1],
                                    r = n.scrollTop,
                                    o = hi(t, Fi(n)).top - l,
                                    s = Date.now(),
                                    a = function() {
                                        var t,
                                            e =
                                                ((t = tt((Date.now() - s) / h)),
                                                0.5 *
                                                    (1 -
                                                        Math.cos(Math.PI * t)));
                                        Bi(n, r + o * e),
                                            1 != e
                                                ? requestAnimationFrame(a)
                                                : i();
                                    };
                                a();
                            });
                        });
                    },
                    r = 0;
                r < u.length - 1;
                r++
            )
                n(r);
            return i;
        }
    }
    function Hi(t, e) {
        if ((void 0 === e && (e = 0), !Wt(t))) return 0;
        var i = K(Li(t)),
            n = i.scrollHeight,
            r = i.scrollTop,
            o = si(Fi(i)).height,
            s = li(t)[0] - r - li(i)[0],
            a = Math.min(o, s + r);
        return tt(
            (-1 * (s - a)) / Math.min(si(t).height + e + a, n - (s + r), n - o)
        );
    }
    function Li(t, e) {
        void 0 === e && (e = /auto|scroll/);
        var i = Wi(t),
            n = Bt(t)
                .filter(function(t) {
                    return (
                        t === i ||
                        (e.test(Ve(t, "overflow")) &&
                            t.scrollHeight > Math.round(si(t).height))
                    );
                })
                .reverse();
        return n.length ? n : [i];
    }
    function Fi(t) {
        return t === Wi(t) ? window : t;
    }
    function ji(t) {
        return Li(t, /auto|scroll|hidden/);
    }
    function Wi(t) {
        var e = R(t).document;
        return e.scrollingElement || e.documentElement;
    }
    (Mi.prototype.isVideo = function() {
        return this.isYoutube() || this.isVimeo() || this.isHTML5();
    }),
        (Mi.prototype.isHTML5 = function() {
            return "VIDEO" === this.el.tagName;
        }),
        (Mi.prototype.isIFrame = function() {
            return "IFRAME" === this.el.tagName;
        }),
        (Mi.prototype.isYoutube = function() {
            return (
                this.isIFrame() &&
                !!this.el.src.match(
                    /\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/
                )
            );
        }),
        (Mi.prototype.isVimeo = function() {
            return (
                this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/)
            );
        }),
        (Mi.prototype.enableApi = function() {
            var e = this;
            if (this.ready) return this.ready;
            var i,
                r = this.isYoutube(),
                o = this.isVimeo();
            return r || o
                ? (this.ready = new se(function(t) {
                      var n;
                      Gt(e.el, "load", function() {
                          if (r) {
                              var t = function() {
                                  return Di(e.el, {
                                      event: "listening",
                                      id: e.id,
                                  });
                              };
                              (i = setInterval(t, 100)), t();
                          }
                      }),
                          ((n = function(t) {
                              return (
                                  (r &&
                                      t.id === e.id &&
                                      "onReady" === t.event) ||
                                  (o && Number(t.player_id) === e.id)
                              );
                          }),
                          new se(function(i) {
                              Gt(
                                  window,
                                  "message",
                                  function(t, e) {
                                      return i(e);
                                  },
                                  !1,
                                  function(t) {
                                      var e = t.data;
                                      if (e && D(e)) {
                                          try {
                                              e = JSON.parse(e);
                                          } catch (t) {
                                              return;
                                          }
                                          return e && n(e);
                                      }
                                  }
                              );
                          })).then(function() {
                              t(), i && clearInterval(i);
                          }),
                          ot(
                              e.el,
                              "src",
                              e.el.src +
                                  (b(e.el.src, "?") ? "&" : "?") +
                                  (r
                                      ? "enablejsapi=1"
                                      : "api=1&player_id=" + e.id)
                          );
                  }))
                : se.resolve();
        }),
        (Mi.prototype.play = function() {
            var t = this;
            if (this.isVideo())
                if (this.isIFrame())
                    this.enableApi().then(function() {
                        return Di(t.el, { func: "playVideo", method: "play" });
                    });
                else if (this.isHTML5())
                    try {
                        var e = this.el.play();
                        e && e.catch(et);
                    } catch (t) {}
        }),
        (Mi.prototype.pause = function() {
            var t = this;
            this.isVideo() &&
                (this.isIFrame()
                    ? this.enableApi().then(function() {
                          return Di(t.el, {
                              func: "pauseVideo",
                              method: "pause",
                          });
                      })
                    : this.isHTML5() && this.el.pause());
        }),
        (Mi.prototype.mute = function() {
            var t = this;
            this.isVideo() &&
                (this.isIFrame()
                    ? this.enableApi().then(function() {
                          return Di(t.el, {
                              func: "mute",
                              method: "setVolume",
                              value: 0,
                          });
                      })
                    : this.isHTML5() &&
                      ((this.el.muted = !0), ot(this.el, "muted", "")));
        });
    var Vi =
        "IntersectionObserver" in window
            ? window.IntersectionObserver
            : (function() {
                  function t(e, t) {
                      var i = this;
                      void 0 === t && (t = {});
                      var n = t.rootMargin;
                      void 0 === n && (n = "0 0"), (this.targets = []);
                      var r,
                          o = (n || "0 0").split(" ").map(j),
                          s = o[0],
                          a = o[1];
                      (this.offsetTop = s),
                          (this.offsetLeft = a),
                          (this.apply = function() {
                              r =
                                  r ||
                                  requestAnimationFrame(function() {
                                      return setTimeout(function() {
                                          var t = i.takeRecords();
                                          t.length && e(t, i), (r = !1);
                                      });
                                  });
                          }),
                          (this.off = Ut(
                              window,
                              "scroll resize load",
                              this.apply,
                              { passive: !0, capture: !0 }
                          ));
                  }
                  return (
                      (t.prototype.takeRecords = function() {
                          var i = this;
                          return this.targets.filter(function(t) {
                              var e = Pi(t.target, i.offsetTop, i.offsetLeft);
                              if (
                                  null === t.isIntersecting ||
                                  e ^ t.isIntersecting
                              )
                                  return (t.isIntersecting = e), !0;
                          });
                      }),
                      (t.prototype.observe = function(t) {
                          this.targets.push({
                              target: t,
                              isIntersecting: null,
                          }),
                              this.apply();
                      }),
                      (t.prototype.disconnect = function() {
                          (this.targets = []), this.off();
                      }),
                      t
                  );
              })();
    function Ri(t) {
        return (
            !(!w(t, "uk-") && !w(t, "data-uk-")) &&
            f(t.replace("data-uk-", "").replace("uk-", ""))
        );
    }
    function qi(t) {
        this._init(t);
    }
    var Yi, Ui, Xi, Gi, Ki, Ji, Zi, Qi, tn;
    function en(t, e) {
        if (t) for (var i in t) t[i]._connected && t[i]._callUpdate(e);
    }
    function nn(t, e) {
        var i = {},
            n = t.args;
        void 0 === n && (n = []);
        var r = t.props;
        void 0 === r && (r = {});
        var o = t.el;
        if (!r) return i;
        for (var s in r) {
            var a = d(s),
                h = ht(o, a);
            if (!H(h)) {
                if (
                    ((h = (r[s] === Boolean && "" === h) || an(r[s], h)),
                    "target" === a && (!h || w(h, "_")))
                )
                    continue;
                i[s] = h;
            }
        }
        var l = Ni(ht(o, e), n);
        for (var u in l) {
            var c = f(u);
            void 0 !== r[c] && (i[c] = an(r[c], l[u]));
        }
        return i;
    }
    function rn(n, r, o) {
        Object.defineProperty(n, r, {
            enumerable: !0,
            get: function() {
                var t = n._computeds,
                    e = n.$props,
                    i = n.$el;
                return l(t, r) || (t[r] = (o.get || o).call(n, e, i)), t[r];
            },
            set: function(t) {
                var e = n._computeds;
                (e[r] = o.set ? o.set.call(n, t) : t), H(e[r]) && delete e[r];
            },
        });
    }
    function on(e, i, n) {
        T(i) || (i = { name: n, handler: i });
        var t = i.name,
            r = i.el,
            o = i.handler,
            s = i.capture,
            a = i.passive,
            h = i.delegate,
            l = i.filter,
            u = i.self;
        (r = $(r) ? r.call(e) : r || e.$el),
            k(r)
                ? r.forEach(function(t) {
                      return on(e, G({}, i, { el: t }), n);
                  })
                : !r ||
                  (l && !l.call(e)) ||
                  e._events.push(
                      Ut(
                          r,
                          t,
                          h ? (D(h) ? h : h.call(e)) : null,
                          D(o) ? e[o] : o.bind(e),
                          { passive: a, capture: s, self: u }
                      )
                  );
    }
    function sn(t, e) {
        return t.every(function(t) {
            return !t || !l(t, e);
        });
    }
    function an(t, e) {
        return t === Boolean
            ? L(e)
            : t === Number
            ? F(e)
            : "list" === t
            ? q(e)
            : t
            ? t(e)
            : e;
    }
    (qi.util = Object.freeze({
        __proto__: null,
        ajax: ce,
        getImage: de,
        transition: Je,
        Transition: Ze,
        animate: ei,
        Animation: ni,
        attr: ot,
        hasAttr: st,
        removeAttr: at,
        data: ht,
        addClass: ze,
        removeClass: De,
        removeClasses: Pe,
        replaceClass: Be,
        hasClass: Oe,
        toggleClass: He,
        positionAt: oi,
        offset: si,
        position: hi,
        offsetPosition: li,
        height: ui,
        width: ci,
        boxModelAdjust: fi,
        flipPosition: vi,
        toPx: wi,
        ready: fe,
        index: pe,
        getIndex: me,
        empty: ge,
        html: ve,
        prepend: function(e, t) {
            return (e = Ce(e)).hasChildNodes()
                ? ye(t, function(t) {
                      return e.insertBefore(t, e.firstChild);
                  })
                : we(e, t);
        },
        append: we,
        before: be,
        after: xe,
        remove: ke,
        wrapAll: $e,
        wrapInner: Ie,
        unwrap: Se,
        fragment: Ae,
        apply: _e,
        $: Ce,
        $$: Ne,
        isIE: lt,
        isRtl: ut,
        hasTouch: ft,
        pointerDown: pt,
        pointerMove: mt,
        pointerUp: gt,
        pointerEnter: vt,
        pointerLeave: wt,
        pointerCancel: bt,
        on: Ut,
        off: Xt,
        once: Gt,
        trigger: Kt,
        createEvent: Jt,
        toEventTargets: ie,
        isTouch: ne,
        getEventPos: re,
        fastdom: xi,
        isVoidElement: jt,
        isVisible: Wt,
        selInput: Vt,
        isInput: Rt,
        filter: qt,
        within: Yt,
        hasOwn: l,
        hyphenate: d,
        camelize: f,
        ucfirst: p,
        startsWith: w,
        endsWith: u,
        includes: b,
        findIndex: y,
        isArray: k,
        isFunction: $,
        isObject: I,
        isPlainObject: T,
        isWindow: E,
        isDocument: A,
        isJQuery: _,
        isNode: C,
        isElement: N,
        isNodeCollection: M,
        isBoolean: z,
        isString: D,
        isNumber: P,
        isNumeric: B,
        isEmpty: O,
        isUndefined: H,
        toBoolean: L,
        toNumber: F,
        toFloat: j,
        toNode: W,
        toNodes: V,
        toWindow: R,
        toList: q,
        toMs: Y,
        isEqual: U,
        swap: X,
        assign: G,
        last: K,
        each: J,
        sortBy: Z,
        uniqueBy: Q,
        clamp: tt,
        noop: et,
        intersectRect: it,
        pointInRect: nt,
        Dimensions: rt,
        MouseTracker: Ti,
        mergeOptions: Ci,
        parseOptions: Ni,
        Player: Mi,
        Promise: se,
        Deferred: oe,
        IntersectionObserver: Vi,
        query: xt,
        queryAll: yt,
        find: $t,
        findAll: It,
        matches: Mt,
        closest: Dt,
        parent: Pt,
        parents: Bt,
        children: Ot,
        escape: Lt,
        css: Ve,
        getStyles: Re,
        getStyle: qe,
        getCssVar: Ue,
        propName: Ge,
        isInView: Pi,
        scrollTop: Bi,
        scrollIntoView: Oi,
        scrolledOver: Hi,
        scrollParents: Li,
        getViewport: Fi,
    })),
        (qi.data = "__uikit__"),
        (qi.prefix = "uk-"),
        (qi.options = {}),
        (qi.version = "3.3.0"),
        (Xi = (Yi = qi).data),
        (Yi.use = function(t) {
            if (!t.installed)
                return t.call(null, this), (t.installed = !0), this;
        }),
        (Yi.mixin = function(t, e) {
            (e = (D(e) ? Yi.component(e) : e) || this).options = Ci(
                e.options,
                t
            );
        }),
        (Yi.extend = function(t) {
            t = t || {};
            function e(t) {
                this._init(t);
            }
            return (
                (((e.prototype = Object.create(
                    this.prototype
                )).constructor = e).options = Ci(this.options, t)),
                (e.super = this),
                (e.extend = this.extend),
                e
            );
        }),
        (Yi.update = function(t, e) {
            Bt((t = t ? W(t) : document.body))
                .reverse()
                .forEach(function(t) {
                    return en(t[Xi], e);
                }),
                _e(t, function(t) {
                    return en(t[Xi], e);
                });
        }),
        Object.defineProperty(Yi, "container", {
            get: function() {
                return Ui || document.body;
            },
            set: function(t) {
                Ui = Ce(t);
            },
        }),
        ((Gi = qi).prototype._callHook = function(t) {
            var e = this,
                i = this.$options[t];
            i &&
                i.forEach(function(t) {
                    return t.call(e);
                });
        }),
        (Gi.prototype._callConnected = function() {
            this._connected ||
                ((this._data = {}),
                (this._computeds = {}),
                this._initProps(),
                this._callHook("beforeConnect"),
                (this._connected = !0),
                this._initEvents(),
                this._initObserver(),
                this._callHook("connected"),
                this._callUpdate());
        }),
        (Gi.prototype._callDisconnected = function() {
            this._connected &&
                (this._callHook("beforeDisconnect"),
                this._observer &&
                    (this._observer.disconnect(), (this._observer = null)),
                this._unbindEvents(),
                this._callHook("disconnected"),
                (this._connected = !1));
        }),
        (Gi.prototype._callUpdate = function(t) {
            var o = this;
            void 0 === t && (t = "update");
            var s = t.type || t;
            b(["update", "resize"], s) && this._callWatches();
            var e = this.$options.update,
                i = this._frames,
                a = i.reads,
                h = i.writes;
            e &&
                e.forEach(function(t, e) {
                    var i = t.read,
                        n = t.write,
                        r = t.events;
                    ("update" !== s && !b(r, s)) ||
                        (i &&
                            !b(xi.reads, a[e]) &&
                            (a[e] = xi.read(function() {
                                var t = o._connected && i.call(o, o._data, s);
                                !1 === t && n
                                    ? xi.clear(h[e])
                                    : T(t) && G(o._data, t);
                            })),
                        n &&
                            !b(xi.writes, h[e]) &&
                            (h[e] = xi.write(function() {
                                return o._connected && n.call(o, o._data, s);
                            })));
                });
        }),
        (Ji = 0),
        ((Ki = qi).prototype._init = function(t) {
            ((t = t || {}).data = (function(t, e) {
                var i = t.data,
                    n = (t.el, e.args),
                    r = e.props;
                void 0 === r && (r = {});
                if (
                    (i = k(i)
                        ? O(n)
                            ? void 0
                            : i.slice(0, n.length).reduce(function(t, e, i) {
                                  return T(e) ? G(t, e) : (t[n[i]] = e), t;
                              }, {})
                        : i)
                )
                    for (var o in i)
                        H(i[o])
                            ? delete i[o]
                            : (i[o] = r[o] ? an(r[o], i[o]) : i[o]);
                return i;
            })(t, this.constructor.options)),
                (this.$options = Ci(this.constructor.options, t, this)),
                (this.$el = null),
                (this.$props = {}),
                (this._frames = { reads: {}, writes: {} }),
                (this._events = []),
                (this._uid = Ji++),
                this._initData(),
                this._initMethods(),
                this._initComputeds(),
                this._callHook("created"),
                t.el && this.$mount(t.el);
        }),
        (Ki.prototype._initData = function() {
            var t = this.$options.data;
            for (var e in (void 0 === t && (t = {}), t))
                this.$props[e] = this[e] = t[e];
        }),
        (Ki.prototype._initMethods = function() {
            var t = this.$options.methods;
            if (t) for (var e in t) this[e] = t[e].bind(this);
        }),
        (Ki.prototype._initComputeds = function() {
            var t = this.$options.computed;
            if (((this._computeds = {}), t)) for (var e in t) rn(this, e, t[e]);
        }),
        (Ki.prototype._callWatches = function() {
            var t = this.$options.computed,
                e = this._computeds;
            for (var i in e) {
                var n = e[i];
                delete e[i],
                    t[i].watch &&
                        !U(n, this[i]) &&
                        t[i].watch.call(this, this[i], n);
            }
        }),
        (Ki.prototype._initProps = function(t) {
            var e;
            for (e in (t = t || nn(this.$options, this.$name)))
                H(t[e]) || (this.$props[e] = t[e]);
            var i = [this.$options.computed, this.$options.methods];
            for (e in this.$props)
                e in t && sn(i, e) && (this[e] = this.$props[e]);
        }),
        (Ki.prototype._initEvents = function() {
            var i = this,
                t = this.$options.events;
            t &&
                t.forEach(function(t) {
                    if (l(t, "handler")) on(i, t);
                    else for (var e in t) on(i, t[e], e);
                });
        }),
        (Ki.prototype._unbindEvents = function() {
            this._events.forEach(function(t) {
                return t();
            }),
                (this._events = []);
        }),
        (Ki.prototype._initObserver = function() {
            var i = this,
                t = this.$options,
                n = t.attrs,
                e = t.props,
                r = t.el;
            if (!this._observer && e && !1 !== n) {
                (n = k(n) ? n : Object.keys(e)),
                    (this._observer = new MutationObserver(function() {
                        var e = nn(i.$options, i.$name);
                        n.some(function(t) {
                            return !H(e[t]) && e[t] !== i.$props[t];
                        }) && i.$reset();
                    }));
                var o = n
                    .map(function(t) {
                        return d(t);
                    })
                    .concat(this.$name);
                this._observer.observe(r, {
                    attributes: !0,
                    attributeFilter: o.concat(
                        o.map(function(t) {
                            return "data-" + t;
                        })
                    ),
                });
            }
        }),
        (Qi = (Zi = qi).data),
        (tn = {}),
        (Zi.component = function(s, t) {
            var e = d(s);
            if (((s = f(e)), !t))
                return T(tn[s]) && (tn[s] = Zi.extend(tn[s])), tn[s];
            Zi[s] = function(t, i) {
                for (var e = arguments.length, n = Array(e); e--; )
                    n[e] = arguments[e];
                var r = Zi.component(s);
                return r.options.functional
                    ? new r({ data: T(t) ? t : [].concat(n) })
                    : t
                    ? Ne(t).map(o)[0]
                    : o(t);
                function o(t) {
                    var e = Zi.getComponent(t, s);
                    if (e) {
                        if (!i) return e;
                        e.$destroy();
                    }
                    return new r({ el: t, data: i });
                }
            };
            var i = T(t) ? G({}, t) : t.options;
            return (
                (i.name = s),
                i.install && i.install(Zi, i, s),
                Zi._initialized &&
                    !i.functional &&
                    xi.read(function() {
                        return Zi[s]("[uk-" + e + "],[data-uk-" + e + "]");
                    }),
                (tn[s] = T(t) ? i : t)
            );
        }),
        (Zi.getComponents = function(t) {
            return (t && t[Qi]) || {};
        }),
        (Zi.getComponent = function(t, e) {
            return Zi.getComponents(t)[e];
        }),
        (Zi.connect = function(t) {
            if (t[Qi]) for (var e in t[Qi]) t[Qi][e]._callConnected();
            for (var i = 0; i < t.attributes.length; i++) {
                var n = Ri(t.attributes[i].name);
                n && n in tn && Zi[n](t);
            }
        }),
        (Zi.disconnect = function(t) {
            for (var e in t[Qi]) t[Qi][e]._callDisconnected();
        }),
        (function(n) {
            var r = n.data;
            (n.prototype.$mount = function(t) {
                var e = this.$options.name;
                t[r] || (t[r] = {}),
                    t[r][e] ||
                        (((t[r][e] = this).$el = this.$options.el =
                            this.$options.el || t),
                        Yt(t, document) && this._callConnected());
            }),
                (n.prototype.$emit = function(t) {
                    this._callUpdate(t);
                }),
                (n.prototype.$reset = function() {
                    this._callDisconnected(), this._callConnected();
                }),
                (n.prototype.$destroy = function(t) {
                    void 0 === t && (t = !1);
                    var e = this.$options,
                        i = e.el,
                        n = e.name;
                    i && this._callDisconnected(),
                        this._callHook("destroy"),
                        i &&
                            i[r] &&
                            (delete i[r][n],
                            O(i[r]) || delete i[r],
                            t && ke(this.$el));
                }),
                (n.prototype.$create = function(t, e, i) {
                    return n[t](e, i);
                }),
                (n.prototype.$update = n.update),
                (n.prototype.$getComponent = n.getComponent);
            var e = {};
            Object.defineProperties(n.prototype, {
                $container: Object.getOwnPropertyDescriptor(n, "container"),
                $name: {
                    get: function() {
                        var t = this.$options.name;
                        return e[t] || (e[t] = n.prefix + d(t)), e[t];
                    },
                },
            });
        })(qi);
    var hn = {
            connected: function() {
                Oe(this.$el, this.$name) || ze(this.$el, this.$name);
            },
        },
        ln = {
            props: {
                cls: Boolean,
                animation: "list",
                duration: Number,
                origin: String,
                transition: String,
                queued: Boolean,
            },
            data: {
                cls: !1,
                animation: [!1],
                duration: 200,
                origin: !1,
                transition: "linear",
                queued: !1,
                initProps: {
                    overflow: "",
                    height: "",
                    paddingTop: "",
                    paddingBottom: "",
                    marginTop: "",
                    marginBottom: "",
                },
                hideProps: {
                    overflow: "hidden",
                    height: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                    marginBottom: 0,
                },
            },
            computed: {
                hasAnimation: function(t) {
                    return !!t.animation[0];
                },
                hasTransition: function(t) {
                    var e = t.animation;
                    return this.hasAnimation && !0 === e[0];
                },
            },
            methods: {
                toggleElement: function(l, u, c) {
                    var d = this;
                    return new se(function(t) {
                        l = V(l);
                        function e(t) {
                            return se.all(
                                t.map(function(t) {
                                    return d._toggleElement(t, u, c);
                                })
                            );
                        }
                        var i;
                        if (
                            d.queued &&
                            H(c) &&
                            H(u) &&
                            d.hasAnimation &&
                            !(l.length < 2)
                        ) {
                            var n = l.filter(function(t) {
                                    return d.isToggled(t);
                                }),
                                r = l.filter(function(t) {
                                    return !b(n, t);
                                }),
                                o = document.body,
                                s = o.scrollTop,
                                a = n[0],
                                h =
                                    (ni.inProgress(a) &&
                                        Oe(a, "uk-animation-leave")) ||
                                    (Ze.inProgress(a) &&
                                        "0px" === a.style.height);
                            (i = e(n)),
                                h ||
                                    (i = i.then(function() {
                                        var t = e(r);
                                        return (o.scrollTop = s), t;
                                    }));
                        } else i = e(l);
                        i.then(t, et);
                    });
                },
                toggleNow: function(t, e) {
                    return this.toggleElement(t, e, !1);
                },
                isToggled: function(t) {
                    var e = V(t || this.$el);
                    return this.cls
                        ? Oe(e, this.cls.split(" ")[0])
                        : !st(e, "hidden");
                },
                updateAria: function(t) {
                    !1 === this.cls && ot(t, "aria-hidden", !this.isToggled(t));
                },
                _toggleElement: function(t, e, i) {
                    var n = this;
                    if (
                        ((e = z(e)
                            ? e
                            : ni.inProgress(t)
                            ? Oe(t, "uk-animation-leave")
                            : Ze.inProgress(t)
                            ? "0px" === t.style.height
                            : !this.isToggled(t)),
                        !Kt(t, "before" + (e ? "show" : "hide"), [this]))
                    )
                        return se.reject();
                    var r,
                        o,
                        s,
                        a,
                        h,
                        l,
                        u,
                        c,
                        d,
                        f,
                        p,
                        m,
                        g = ($(i)
                            ? i
                            : !1 !== i && this.hasAnimation
                            ? this.hasTransition
                                ? ((u = (l = this).isToggled),
                                  (c = l.duration),
                                  (d = l.initProps),
                                  (f = l.hideProps),
                                  (p = l.transition),
                                  (m = l._toggle),
                                  function(t, e) {
                                      var i = Ze.inProgress(t),
                                          n = t.hasChildNodes
                                              ? j(
                                                    Ve(
                                                        t.firstElementChild,
                                                        "marginTop"
                                                    )
                                                ) +
                                                j(
                                                    Ve(
                                                        t.lastElementChild,
                                                        "marginBottom"
                                                    )
                                                )
                                              : 0,
                                          r = Wt(t) ? ui(t) + (i ? 0 : n) : 0;
                                      Ze.cancel(t),
                                          u(t) || m(t, !0),
                                          ui(t, ""),
                                          xi.flush();
                                      var o = ui(t) + (i ? 0 : n);
                                      return (
                                          ui(t, r),
                                          (e
                                              ? Ze.start(
                                                    t,
                                                    G({}, d, {
                                                        overflow: "hidden",
                                                        height: o,
                                                    }),
                                                    Math.round(c * (1 - r / o)),
                                                    p
                                                )
                                              : Ze.start(
                                                    t,
                                                    f,
                                                    Math.round(c * (r / o)),
                                                    p
                                                ).then(function() {
                                                    return m(t, !1);
                                                })
                                          ).then(function() {
                                              return Ve(t, d);
                                          })
                                      );
                                  })
                                : ((o = (r = this).animation),
                                  (s = r.duration),
                                  (a = r.origin),
                                  (h = r._toggle),
                                  function(t, e) {
                                      return (
                                          ni.cancel(t),
                                          e
                                              ? (h(t, !0), ni.in(t, o[0], s, a))
                                              : ni
                                                    .out(t, o[1] || o[0], s, a)
                                                    .then(function() {
                                                        return h(t, !1);
                                                    })
                                      );
                                  })
                            : this._toggle)(t, e);
                    Kt(t, e ? "show" : "hide", [this]);
                    function v() {
                        Kt(t, e ? "shown" : "hidden", [n]), n.$update(t);
                    }
                    return g ? g.then(v) : se.resolve(v());
                },
                _toggle: function(t, e) {
                    var i;
                    t &&
                        ((e = Boolean(e)),
                        this.cls
                            ? (i = b(this.cls, " ") || e !== Oe(t, this.cls)) &&
                              He(t, this.cls, b(this.cls, " ") ? void 0 : e)
                            : (i = e === st(t, "hidden")) &&
                              ot(t, "hidden", e ? null : ""),
                        Ne("[autofocus]", t).some(function(t) {
                            return Wt(t) ? t.focus() || !0 : t.blur();
                        }),
                        this.updateAria(t),
                        i && this.$update(t));
                },
            },
        };
    var un,
        cn = {
            mixins: [hn, ln],
            props: {
                targets: String,
                active: null,
                collapsible: Boolean,
                multiple: Boolean,
                toggle: String,
                content: String,
                transition: String,
            },
            data: {
                targets: "> *",
                active: !1,
                animation: [!0],
                collapsible: !0,
                multiple: !1,
                clsOpen: "uk-open",
                toggle: "> .uk-accordion-title",
                content: "> .uk-accordion-content",
                transition: "ease",
            },
            computed: {
                items: function(t, e) {
                    return Ne(t.targets, e);
                },
            },
            events: [
                {
                    name: "click",
                    delegate: function() {
                        return this.targets + " " + this.$props.toggle;
                    },
                    handler: function(t) {
                        t.preventDefault(),
                            this.toggle(
                                pe(
                                    Ne(
                                        this.targets + " " + this.$props.toggle,
                                        this.$el
                                    ),
                                    t.current
                                )
                            );
                    },
                },
            ],
            connected: function() {
                if (!1 !== this.active) {
                    var t = this.items[Number(this.active)];
                    t && !Oe(t, this.clsOpen) && this.toggle(t, !1);
                }
            },
            update: function() {
                var e = this;
                this.items.forEach(function(t) {
                    return e._toggle(Ce(e.content, t), Oe(t, e.clsOpen));
                });
                var t =
                    !this.collapsible &&
                    !Oe(this.items, this.clsOpen) &&
                    this.items[0];
                t && this.toggle(t, !1);
            },
            methods: {
                toggle: function(r, o) {
                    var s = this,
                        t = me(r, this.items),
                        a = qt(this.items, "." + this.clsOpen);
                    (r = this.items[t]) &&
                        [r]
                            .concat((!this.multiple && !b(a, r) && a) || [])
                            .forEach(function(e) {
                                var t = e === r,
                                    i = t && !Oe(e, s.clsOpen);
                                if (
                                    i ||
                                    !t ||
                                    s.collapsible ||
                                    !(a.length < 2)
                                ) {
                                    He(e, s.clsOpen, i);
                                    var n = e._wrapper
                                        ? e._wrapper.firstElementChild
                                        : Ce(s.content, e);
                                    e._wrapper ||
                                        ((e._wrapper = $e(n, "<div>")),
                                        ot(
                                            e._wrapper,
                                            "hidden",
                                            i ? "" : null
                                        )),
                                        s._toggle(n, !0),
                                        s
                                            .toggleElement(e._wrapper, i, o)
                                            .then(function() {
                                                if (Oe(e, s.clsOpen) === i) {
                                                    if (i) {
                                                        var t = Ce(
                                                            s.$props.toggle,
                                                            e
                                                        );
                                                        !1 === o ||
                                                            Pi(t) ||
                                                            Oi(t);
                                                    } else s._toggle(n, !1);
                                                    (e._wrapper = null), Se(n);
                                                }
                                            });
                                }
                            });
                },
            },
        },
        dn = {
            mixins: [hn, ln],
            args: "animation",
            props: { close: String },
            data: {
                animation: [!0],
                selClose: ".uk-alert-close",
                duration: 150,
                hideProps: G({ opacity: 0 }, ln.data.hideProps),
            },
            events: [
                {
                    name: "click",
                    delegate: function() {
                        return this.selClose;
                    },
                    handler: function(t) {
                        t.preventDefault(), this.close();
                    },
                },
            ],
            methods: {
                close: function() {
                    var t = this;
                    this.toggleElement(this.$el).then(function() {
                        return t.$destroy(!0);
                    });
                },
            },
        },
        fn = {
            args: "autoplay",
            props: { automute: Boolean, autoplay: Boolean },
            data: { automute: !1, autoplay: !0 },
            computed: {
                inView: function(t) {
                    return "inview" === t.autoplay;
                },
            },
            connected: function() {
                this.inView &&
                    !st(this.$el, "preload") &&
                    (this.$el.preload = "none"),
                    (this.player = new Mi(this.$el)),
                    this.automute && this.player.mute();
            },
            update: {
                read: function() {
                    return (
                        !!this.player && {
                            visible:
                                Wt(this.$el) &&
                                "hidden" !== Ve(this.$el, "visibility"),
                            inView: this.inView && Pi(this.$el),
                        }
                    );
                },
                write: function(t) {
                    var e = t.visible,
                        i = t.inView;
                    !e || (this.inView && !i)
                        ? this.player.pause()
                        : (!0 === this.autoplay || (this.inView && i)) &&
                          this.player.play();
                },
                events: ["resize", "scroll"],
            },
        },
        pn = {
            mixins: [hn, fn],
            props: { width: Number, height: Number },
            data: { automute: !0 },
            update: {
                read: function() {
                    var t = this.$el,
                        e = t.parentNode,
                        i = e.offsetHeight,
                        n = e.offsetWidth,
                        r = rt.cover(
                            {
                                width:
                                    this.width ||
                                    t.naturalWidth ||
                                    t.videoWidth ||
                                    t.clientWidth,
                                height:
                                    this.height ||
                                    t.naturalHeight ||
                                    t.videoHeight ||
                                    t.clientHeight,
                            },
                            {
                                width: n + (n % 2 ? 1 : 0),
                                height: i + (i % 2 ? 1 : 0),
                            }
                        );
                    return !(!r.width || !r.height) && r;
                },
                write: function(t) {
                    var e = t.height,
                        i = t.width;
                    Ve(this.$el, { height: e, width: i });
                },
                events: ["resize"],
            },
        },
        mn = {
            props: { pos: String, offset: null, flip: Boolean, clsPos: String },
            data: {
                pos: "bottom-" + (ut ? "right" : "left"),
                flip: !0,
                offset: !1,
                clsPos: "",
            },
            computed: {
                pos: function(t) {
                    var e = t.pos;
                    return (e + (b(e, "-") ? "" : "-center")).split("-");
                },
                dir: function() {
                    return this.pos[0];
                },
                align: function() {
                    return this.pos[1];
                },
            },
            methods: {
                positionAt: function(t, e, i) {
                    var n;
                    Pe(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?"),
                        Ve(t, { top: "", left: "" });
                    var r = this.offset,
                        o = this.getAxis();
                    B(r) ||
                        (r = (n = Ce(r))
                            ? si(n)["x" === o ? "left" : "top"] -
                              si(e)["x" === o ? "right" : "bottom"]
                            : 0);
                    var s = oi(
                            t,
                            e,
                            "x" === o
                                ? vi(this.dir) + " " + this.align
                                : this.align + " " + vi(this.dir),
                            "x" === o
                                ? this.dir + " " + this.align
                                : this.align + " " + this.dir,
                            "x" === o
                                ? "" + ("left" === this.dir ? -r : r)
                                : " " + ("top" === this.dir ? -r : r),
                            null,
                            this.flip,
                            i
                        ).target,
                        a = s.x,
                        h = s.y;
                    (this.dir = "x" === o ? a : h),
                        (this.align = "x" === o ? h : a),
                        He(
                            t,
                            this.clsPos + "-" + this.dir + "-" + this.align,
                            !1 === this.offset
                        );
                },
                getAxis: function() {
                    return "top" === this.dir || "bottom" === this.dir
                        ? "y"
                        : "x";
                },
            },
        },
        gn = {
            mixins: [mn, ln],
            args: "pos",
            props: {
                mode: "list",
                toggle: Boolean,
                boundary: Boolean,
                boundaryAlign: Boolean,
                delayShow: Number,
                delayHide: Number,
                clsDrop: String,
            },
            data: {
                mode: ["click", "hover"],
                toggle: "- *",
                boundary: window,
                boundaryAlign: !1,
                delayShow: 0,
                delayHide: 800,
                clsDrop: !1,
                animation: ["uk-animation-fade"],
                cls: "uk-open",
            },
            computed: {
                boundary: function(t, e) {
                    return xt(t.boundary, e);
                },
                clsDrop: function(t) {
                    return t.clsDrop || "uk-" + this.$options.name;
                },
                clsPos: function() {
                    return this.clsDrop;
                },
            },
            created: function() {
                this.tracker = new Ti();
            },
            connected: function() {
                ze(this.$el, this.clsDrop);
                var t = this.$props.toggle;
                (this.toggle =
                    t &&
                    this.$create("toggle", xt(t, this.$el), {
                        target: this.$el,
                        mode: this.mode,
                    })),
                    this.toggle || Kt(this.$el, "updatearia");
            },
            disconnected: function() {
                this.isActive() && (un = null);
            },
            events: [
                {
                    name: "click",
                    delegate: function() {
                        return "." + this.clsDrop + "-close";
                    },
                    handler: function(t) {
                        t.preventDefault(), this.hide(!1);
                    },
                },
                {
                    name: "click",
                    delegate: function() {
                        return 'a[href^="#"]';
                    },
                    handler: function(t) {
                        var e = t.defaultPrevented,
                            i = t.current.hash;
                        e || !i || Yt(i, this.$el) || this.hide(!1);
                    },
                },
                {
                    name: "beforescroll",
                    handler: function() {
                        this.hide(!1);
                    },
                },
                {
                    name: "toggle",
                    self: !0,
                    handler: function(t, e) {
                        t.preventDefault(),
                            this.isToggled() ? this.hide(!1) : this.show(e, !1);
                    },
                },
                {
                    name: "toggleshow",
                    self: !0,
                    handler: function(t, e) {
                        t.preventDefault(), this.show(e);
                    },
                },
                {
                    name: "togglehide",
                    self: !0,
                    handler: function(t) {
                        t.preventDefault(), this.hide();
                    },
                },
                {
                    name: vt,
                    filter: function() {
                        return b(this.mode, "hover");
                    },
                    handler: function(t) {
                        ne(t) || this.clearTimers();
                    },
                },
                {
                    name: wt,
                    filter: function() {
                        return b(this.mode, "hover");
                    },
                    handler: function(t) {
                        ne(t) || Mt(this.$el, ":hover") || this.hide();
                    },
                },
                {
                    name: "beforeshow",
                    self: !0,
                    handler: function() {
                        this.clearTimers(),
                            ni.cancel(this.$el),
                            this.position();
                    },
                },
                {
                    name: "show",
                    self: !0,
                    handler: function() {
                        var n = this;
                        (un = this).tracker.init(), Kt(this.$el, "updatearia");
                        var t = wn(document, "click", function(t) {
                            var e = t.defaultPrevented,
                                i = t.target;
                            e ||
                                Yt(i, n.$el) ||
                                (n.toggle && Yt(i, n.toggle.$el)) ||
                                n.hide(!1);
                        });
                        Gt(this.$el, "hide", t, { self: !0 });
                    },
                },
                {
                    name: "beforehide",
                    self: !0,
                    handler: function() {
                        this.clearTimers();
                    },
                },
                {
                    name: "hide",
                    handler: function(t) {
                        var e = t.target;
                        this.$el === e
                            ? ((un = this.isActive() ? null : un),
                              Kt(this.$el, "updatearia"),
                              this.tracker.cancel())
                            : (un =
                                  null === un &&
                                  Yt(e, this.$el) &&
                                  this.isToggled()
                                      ? this
                                      : un);
                    },
                },
                {
                    name: "updatearia",
                    self: !0,
                    handler: function(t, e) {
                        t.preventDefault(),
                            this.updateAria(this.$el),
                            (e || this.toggle) &&
                                (ot(
                                    (e || this.toggle).$el,
                                    "aria-expanded",
                                    this.isToggled()
                                ),
                                He(
                                    this.toggle.$el,
                                    this.cls,
                                    this.isToggled()
                                ));
                    },
                },
            ],
            update: {
                write: function() {
                    this.isToggled() &&
                        !ni.inProgress(this.$el) &&
                        this.position();
                },
                events: ["resize"],
            },
            methods: {
                show: function(t, e) {
                    var i = this;
                    if (
                        (void 0 === t && (t = this.toggle),
                        void 0 === e && (e = !0),
                        this.isToggled() &&
                            t &&
                            this.toggle &&
                            t.$el !== this.toggle.$el &&
                            this.hide(!1),
                        (this.toggle = t),
                        this.clearTimers(),
                        !this.isActive())
                    ) {
                        if (un) {
                            if (e && un.isDelaying)
                                return void (this.showTimer = setTimeout(
                                    this.show,
                                    10
                                ));
                            for (; un && !Yt(this.$el, un.$el); ) un.hide(!1);
                        }
                        this.showTimer = setTimeout(function() {
                            return !i.isToggled() && i.toggleElement(i.$el, !0);
                        }, (e && this.delayShow) || 0);
                    }
                },
                hide: function(t) {
                    var e = this;
                    void 0 === t && (t = !0);
                    function i() {
                        return e.toggleNow(e.$el, !1);
                    }
                    this.clearTimers(),
                        (this.isDelaying = vn(this.$el).some(function(t) {
                            return e.tracker.movesTo(t);
                        })),
                        t && this.isDelaying
                            ? (this.hideTimer = setTimeout(this.hide, 50))
                            : t && this.delayHide
                            ? (this.hideTimer = setTimeout(i, this.delayHide))
                            : i();
                },
                clearTimers: function() {
                    clearTimeout(this.showTimer),
                        clearTimeout(this.hideTimer),
                        (this.showTimer = null),
                        (this.hideTimer = null),
                        (this.isDelaying = !1);
                },
                isActive: function() {
                    return un === this;
                },
                position: function() {
                    Pe(this.$el, this.clsDrop + "-(stack|boundary)"),
                        Ve(this.$el, { top: "", left: "", display: "block" }),
                        He(
                            this.$el,
                            this.clsDrop + "-boundary",
                            this.boundaryAlign
                        );
                    var t = si(this.boundary),
                        e = this.boundaryAlign ? t : si(this.toggle.$el);
                    if ("justify" === this.align) {
                        var i = "y" === this.getAxis() ? "width" : "height";
                        Ve(this.$el, i, e[i]);
                    } else
                        this.$el.offsetWidth >
                            Math.max(t.right - e.left, e.right - t.left) &&
                            ze(this.$el, this.clsDrop + "-stack");
                    this.positionAt(
                        this.$el,
                        this.boundaryAlign ? this.boundary : this.toggle.$el,
                        this.boundary
                    ),
                        Ve(this.$el, "display", "");
                },
            },
        };
    function vn(t) {
        var e = "static" !== Ve(t, "position") ? [t] : [];
        return e.concat.apply(e, Ot(t).map(vn));
    }
    function wn(t, e, i) {
        var n = Gt(
            t,
            e,
            function() {
                return (n = Ut(t, e, i));
            },
            !0
        );
        return function() {
            return n();
        };
    }
    var bn = { extends: gn },
        xn = {
            mixins: [hn],
            args: "target",
            props: { target: Boolean },
            data: { target: !1 },
            computed: {
                input: function(t, e) {
                    return Ce(Vt, e);
                },
                state: function() {
                    return this.input.nextElementSibling;
                },
                target: function(t, e) {
                    var i = t.target;
                    return (
                        i &&
                        ((!0 === i &&
                            this.input.parentNode === e &&
                            this.input.nextElementSibling) ||
                            xt(i, e))
                    );
                },
            },
            update: function() {
                var t = this.target,
                    e = this.input;
                if (t) {
                    var i,
                        n = Rt(t) ? "value" : "textContent",
                        r = t[n],
                        o =
                            e.files && e.files[0]
                                ? e.files[0].name
                                : Mt(e, "select") &&
                                  (i = Ne("option", e).filter(function(t) {
                                      return t.selected;
                                  })[0])
                                ? i.textContent
                                : e.value;
                    r !== o && (t[n] = o);
                }
            },
            events: [
                {
                    name: "change",
                    handler: function() {
                        this.$emit();
                    },
                },
                {
                    name: "reset",
                    el: function() {
                        return Dt(this.$el, "form");
                    },
                    handler: function() {
                        this.$emit();
                    },
                },
            ],
        },
        yn = {
            update: {
                read: function(t) {
                    var e = Pi(this.$el);
                    if (!e || t.isInView === e) return !1;
                    t.isInView = e;
                },
                write: function() {
                    this.$el.src = this.$el.src;
                },
                events: ["scroll", "resize"],
            },
        },
        kn = {
            props: { margin: String, firstColumn: Boolean },
            data: {
                margin: "uk-margin-small-top",
                firstColumn: "uk-first-column",
            },
            update: {
                read: function(t) {
                    var e = this.$el.children;
                    if (!e.length || !Wt(this.$el)) return (t.rows = [[]]);
                    (t.rows = $n(e)),
                        (t.stacks = !t.rows.some(function(t) {
                            return 1 < t.length;
                        }));
                },
                write: function(t) {
                    var n = this;
                    t.rows.forEach(function(t, i) {
                        return t.forEach(function(t, e) {
                            He(t, n.margin, 0 !== i),
                                He(t, n.firstColumn, 0 === e);
                        });
                    });
                },
                events: ["resize"],
            },
        };
    function $n(t) {
        for (var e = [[]], i = 0; i < t.length; i++) {
            var n = t[i],
                r = In(n);
            if (r.height)
                for (var o = e.length - 1; 0 <= o; o--) {
                    var s = e[o];
                    if (!s[0]) {
                        s.push(n);
                        break;
                    }
                    var a = void 0;
                    if (
                        ((a =
                            s[0].offsetParent === n.offsetParent
                                ? In(s[0])
                                : ((r = In(n, !0)), In(s[0], !0))),
                        r.top >= a.bottom - 1 && r.top !== a.top)
                    ) {
                        e.push([n]);
                        break;
                    }
                    if (r.bottom > a.top) {
                        if (r.left < a.left && !ut) {
                            s.unshift(n);
                            break;
                        }
                        s.push(n);
                        break;
                    }
                    if (0 === o) {
                        e.unshift([n]);
                        break;
                    }
                }
        }
        return e;
    }
    function In(t, e) {
        var i;
        void 0 === e && (e = !1);
        var n = t.offsetTop,
            r = t.offsetLeft,
            o = t.offsetHeight;
        return (
            e && ((n = (i = li(t))[0]), (r = i[1])),
            { top: n, left: r, height: o, bottom: n + o }
        );
    }
    var Sn = {
        extends: kn,
        mixins: [hn],
        name: "grid",
        props: { masonry: Boolean, parallax: Number },
        data: {
            margin: "uk-grid-margin",
            clsStack: "uk-grid-stack",
            masonry: !1,
            parallax: 0,
        },
        computed: {
            length: function(t, e) {
                return e.children.length;
            },
            parallax: function(t) {
                var e = t.parallax;
                return e && this.length ? Math.abs(e) : "";
            },
        },
        connected: function() {
            this.masonry && ze(this.$el, "uk-flex-top uk-flex-wrap-top");
        },
        update: [
            {
                write: function(t) {
                    var e = t.stacks;
                    He(this.$el, this.clsStack, e);
                },
                events: ["resize"],
            },
            {
                read: function(t) {
                    var r = t.rows;
                    if (!this.masonry && !this.parallax) return !1;
                    (r = r.map(function(t) {
                        return Z(t, "offsetLeft");
                    })),
                        ut &&
                            r.map(function(t) {
                                return t.reverse();
                            });
                    var e,
                        i,
                        n,
                        o,
                        s,
                        a = r.some(function(t) {
                            return t.some(Ze.inProgress);
                        }),
                        h = !1,
                        l = "";
                    if (this.masonry && this.length) {
                        var u = 0;
                        (h = r.reduce(function(i, t, n) {
                            return (
                                (i[n] = t.map(function(t, e) {
                                    return 0 === n
                                        ? 0
                                        : j(i[n - 1][e]) +
                                              (u -
                                                  j(
                                                      r[n - 1][e] &&
                                                          r[n - 1][e]
                                                              .offsetHeight
                                                  ));
                                })),
                                (u = t.reduce(function(t, e) {
                                    return Math.max(t, e.offsetHeight);
                                }, 0)),
                                i
                            );
                        }, [])),
                            (s = r),
                            (l =
                                Math.max.apply(
                                    Math,
                                    s.reduce(function(i, t) {
                                        return (
                                            t.forEach(function(t, e) {
                                                return (i[e] =
                                                    (i[e] || 0) +
                                                    t.offsetHeight);
                                            }),
                                            i
                                        );
                                    }, [])
                                ) +
                                ((e = this.$el),
                                (i = this.margin),
                                (n = Ot(e)),
                                j(
                                    (o = n.filter(function(t) {
                                        return Oe(t, i);
                                    })[0])
                                        ? Ve(o, "marginTop")
                                        : Ve(n[0], "paddingLeft")
                                ) *
                                    (r.length - 1)));
                    }
                    return {
                        padding:
                            this.parallax &&
                            (function(t, e, i) {
                                for (
                                    var n = 0, r = 0, o = 0, s = e.length - 1;
                                    0 <= s;
                                    s--
                                )
                                    for (var a = n; a < e[s].length; a++) {
                                        var h = e[s][a],
                                            l =
                                                h.offsetTop +
                                                ui(h) +
                                                (i && -i[s][a]);
                                        (r = Math.max(r, l)),
                                            (o = Math.max(
                                                o,
                                                l + (a % 2 ? t : t / 8)
                                            )),
                                            n++;
                                    }
                                return o - r;
                            })(this.parallax, r, h),
                        rows: r,
                        translates: h,
                        height: !a && l,
                    };
                },
                write: function(t) {
                    var e = t.stacks,
                        i = t.height,
                        n = t.padding;
                    He(this.$el, this.clsStack, e),
                        Ve(this.$el, "paddingBottom", n),
                        !1 !== i && Ve(this.$el, "height", i);
                },
                events: ["resize"],
            },
            {
                read: function(t) {
                    var e = t.height;
                    return {
                        scrolled:
                            !!this.parallax &&
                            Hi(this.$el, e ? e - ui(this.$el) : 0) *
                                this.parallax,
                    };
                },
                write: function(t) {
                    var e = t.rows,
                        n = t.scrolled,
                        r = t.translates;
                    (!1 === n && !r) ||
                        e.forEach(function(t, i) {
                            return t.forEach(function(t, e) {
                                return Ve(
                                    t,
                                    "transform",
                                    n || r
                                        ? "translateY(" +
                                              ((r && -r[i][e]) +
                                                  (n
                                                      ? e % 2
                                                          ? n
                                                          : n / 8
                                                      : 0)) +
                                              "px)"
                                        : ""
                                );
                            });
                        });
                },
                events: ["scroll", "resize"],
            },
        ],
    };
    var Tn = lt
            ? {
                  props: { selMinHeight: String },
                  data: { selMinHeight: !1, forceHeight: !1 },
                  computed: {
                      elements: function(t, e) {
                          var i = t.selMinHeight;
                          return i ? Ne(i, e) : [e];
                      },
                  },
                  update: [
                      {
                          read: function() {
                              Ve(this.elements, "height", "");
                          },
                          order: -5,
                          events: ["resize"],
                      },
                      {
                          write: function() {
                              var i = this;
                              this.elements.forEach(function(t) {
                                  var e = j(Ve(t, "minHeight"));
                                  e &&
                                      (i.forceHeight ||
                                          Math.round(
                                              e + fi(t, "height", "content-box")
                                          ) >= t.offsetHeight) &&
                                      Ve(t, "height", e);
                              });
                          },
                          order: 5,
                          events: ["resize"],
                      },
                  ],
              }
            : {},
        En = {
            mixins: [Tn],
            args: "target",
            props: { target: String, row: Boolean },
            data: { target: "> *", row: !0, forceHeight: !0 },
            computed: {
                elements: function(t, e) {
                    return Ne(t.target, e);
                },
            },
            update: {
                read: function() {
                    return {
                        rows: (this.row
                            ? $n(this.elements)
                            : [this.elements]
                        ).map(An),
                    };
                },
                write: function(t) {
                    t.rows.forEach(function(t) {
                        var i = t.heights;
                        return t.elements.forEach(function(t, e) {
                            return Ve(t, "minHeight", i[e]);
                        });
                    });
                },
                events: ["resize"],
            },
        };
    function An(t) {
        var e;
        if (t.length < 2) return { heights: [""], elements: t };
        var i = _n(t),
            n = i.heights,
            r = i.max,
            o = t.some(function(t) {
                return t.style.minHeight;
            }),
            s = t.some(function(t, e) {
                return !t.style.minHeight && n[e] < r;
            });
        return (
            o &&
                s &&
                (Ve(t, "minHeight", ""),
                (e = _n(t)),
                (n = e.heights),
                (r = e.max)),
            {
                heights: (n = t.map(function(t, e) {
                    return n[e] === r &&
                        j(t.style.minHeight).toFixed(2) !== r.toFixed(2)
                        ? ""
                        : r;
                })),
                elements: t,
            }
        );
    }
    function _n(t) {
        var e = t.map(function(t) {
            return si(t).height - fi(t, "height", "content-box");
        });
        return { heights: e, max: Math.max.apply(null, e) };
    }
    var Cn = {
        mixins: [Tn],
        props: {
            expand: Boolean,
            offsetTop: Boolean,
            offsetBottom: Boolean,
            minHeight: Number,
        },
        data: { expand: !1, offsetTop: !1, offsetBottom: !1, minHeight: 0 },
        update: {
            read: function(t) {
                var e = t.minHeight;
                if (!Wt(this.$el)) return !1;
                var i = "",
                    n = fi(this.$el, "height", "content-box");
                if (this.expand) {
                    if (
                        ((this.$el.dataset.heightExpand = ""),
                        Ce("[data-height-expand]") !== this.$el)
                    )
                        return !1;
                    i =
                        ui(window) -
                            (Nn(document.documentElement) - Nn(this.$el)) -
                            n || "";
                } else {
                    if (((i = "calc(100vh"), this.offsetTop)) {
                        var r = si(this.$el).top;
                        i +=
                            0 < r && r < ui(window) / 2 ? " - " + r + "px" : "";
                    }
                    !0 === this.offsetBottom
                        ? (i += " - " + Nn(this.$el.nextElementSibling) + "px")
                        : B(this.offsetBottom)
                        ? (i += " - " + this.offsetBottom + "vh")
                        : this.offsetBottom && u(this.offsetBottom, "px")
                        ? (i += " - " + j(this.offsetBottom) + "px")
                        : D(this.offsetBottom) &&
                          (i +=
                              " - " +
                              Nn(xt(this.offsetBottom, this.$el)) +
                              "px"),
                        (i += (n ? " - " + n + "px" : "") + ")");
                }
                return { minHeight: i, prev: e };
            },
            write: function(t) {
                var e = t.minHeight,
                    i = t.prev;
                Ve(this.$el, { minHeight: e }),
                    e !== i && this.$update(this.$el, "resize"),
                    this.minHeight &&
                        j(Ve(this.$el, "minHeight")) < this.minHeight &&
                        Ve(this.$el, "minHeight", this.minHeight);
            },
            events: ["resize"],
        },
    };
    function Nn(t) {
        return (t && si(t).height) || 0;
    }
    var Mn = {
            args: "src",
            props: {
                id: Boolean,
                icon: String,
                src: String,
                style: String,
                width: Number,
                height: Number,
                ratio: Number,
                class: String,
                strokeAnimation: Boolean,
                focusable: Boolean,
                attributes: "list",
            },
            data: {
                ratio: 1,
                include: ["style", "class", "focusable"],
                class: "",
                strokeAnimation: !1,
            },
            beforeConnect: function() {
                var t,
                    e = this;
                if (
                    ((this.class += " uk-svg"), !this.icon && b(this.src, "#"))
                ) {
                    var i = this.src.split("#");
                    1 < i.length &&
                        ((t = i), (this.src = t[0]), (this.icon = t[1]));
                }
                this.svg = this.getSvg().then(function(t) {
                    return (
                        e.applyAttributes(t),
                        (e.svgEl = (function(t, e) {
                            {
                                if (jt(e) || "CANVAS" === e.tagName) {
                                    ot(e, "hidden", !0);
                                    var i = e.nextElementSibling;
                                    return On(t, i) ? i : xe(e, t);
                                }
                                var n = e.lastElementChild;
                                return On(t, n) ? n : we(e, t);
                            }
                        })(t, e.$el))
                    );
                }, et);
            },
            disconnected: function() {
                var e = this;
                jt(this.$el) && ot(this.$el, "hidden", null),
                    this.svg &&
                        this.svg.then(function(t) {
                            return (!e._connected || t !== e.svgEl) && ke(t);
                        }, et),
                    (this.svg = this.svgEl = null);
            },
            update: {
                read: function() {
                    return !!(
                        this.strokeAnimation &&
                        this.svgEl &&
                        Wt(this.svgEl)
                    );
                },
                write: function() {
                    var t, e;
                    (t = this.svgEl),
                        (e = Bn(t)) &&
                            t.style.setProperty("--uk-animation-stroke", e);
                },
                type: ["resize"],
            },
            methods: {
                getSvg: function() {
                    var e = this;
                    return (function(i) {
                        if (zn[i]) return zn[i];
                        return (zn[i] = new se(function(e, t) {
                            i
                                ? w(i, "data:")
                                    ? e(decodeURIComponent(i.split(",")[1]))
                                    : ce(i).then(
                                          function(t) {
                                              return e(t.response);
                                          },
                                          function() {
                                              return t("SVG not found.");
                                          }
                                      )
                                : t();
                        }));
                    })(this.src).then(function(t) {
                        return (
                            (function(t, e) {
                                e &&
                                    b(t, "<symbol") &&
                                    (t =
                                        (function(t, e) {
                                            if (!Pn[t]) {
                                                var i;
                                                for (
                                                    Pn[t] = {};
                                                    (i = Dn.exec(t));

                                                )
                                                    Pn[t][i[3]] =
                                                        '<svg xmlns="http://www.w3.org/2000/svg"' +
                                                        i[1] +
                                                        "svg>";
                                                Dn.lastIndex = 0;
                                            }
                                            return Pn[t][e];
                                        })(t, e) || t);
                                return (
                                    (t = Ce(t.substr(t.indexOf("<svg")))) &&
                                    t.hasChildNodes() &&
                                    t
                                );
                            })(t, e.icon) || se.reject("SVG not found.")
                        );
                    });
                },
                applyAttributes: function(i) {
                    var n = this;
                    for (var t in this.$options.props)
                        this[t] && b(this.include, t) && ot(i, t, this[t]);
                    for (var e in this.attributes) {
                        var r = this.attributes[e].split(":", 2),
                            o = r[0],
                            s = r[1];
                        ot(i, o, s);
                    }
                    this.id || at(i, "id");
                    var a = ["width", "height"],
                        h = [this.width, this.height];
                    h.some(function(t) {
                        return t;
                    }) ||
                        (h = a.map(function(t) {
                            return ot(i, t);
                        }));
                    var l = ot(i, "viewBox");
                    l &&
                        !h.some(function(t) {
                            return t;
                        }) &&
                        (h = l.split(" ").slice(2)),
                        h.forEach(function(t, e) {
                            (t = (0 | t) * n.ratio) && ot(i, a[e], t),
                                t && !h[1 ^ e] && at(i, a[1 ^ e]);
                        }),
                        ot(i, "data-svg", this.icon || this.src);
                },
            },
        },
        zn = {};
    var Dn = /<symbol(.*?id=(['"])(.*?)\2[^]*?<\/)symbol>/g,
        Pn = {};
    function Bn(t) {
        return Math.ceil(
            Math.max.apply(
                Math,
                Ne("[stroke]", t)
                    .map(function(t) {
                        return (t.getTotalLength && t.getTotalLength()) || 0;
                    })
                    .concat([0])
            )
        );
    }
    function On(t, e) {
        return ot(t, "data-svg") === ot(e, "data-svg");
    }
    var Hn = {},
        Ln = {
            spinner:
                '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
            totop:
                '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',
            marker:
                '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
            "close-icon":
                '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
            "close-large":
                '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
            "navbar-toggle-icon":
                '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',
            "overlay-icon":
                '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
            "pagination-next":
                '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
            "pagination-previous":
                '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
            "search-icon":
                '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
            "search-large":
                '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
            "search-navbar":
                '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
            "slidenav-next":
                '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
            "slidenav-next-large":
                '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
            "slidenav-previous":
                '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
            "slidenav-previous-large":
                '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>',
        },
        Fn = {
            install: function(r) {
                r.icon.add = function(t, e) {
                    var i,
                        n = D(t) ? (((i = {})[t] = e), i) : t;
                    J(n, function(t, e) {
                        (Ln[e] = t), delete Hn[e];
                    }),
                        r._initialized &&
                            _e(document.body, function(t) {
                                return J(r.getComponents(t), function(t) {
                                    t.$options.isIcon &&
                                        t.icon in n &&
                                        t.$reset();
                                });
                            });
                };
            },
            extends: Mn,
            args: "icon",
            props: ["icon"],
            data: { include: ["focusable"] },
            isIcon: !0,
            beforeConnect: function() {
                ze(this.$el, "uk-icon");
            },
            methods: {
                getSvg: function() {
                    var t,
                        e = (function(t) {
                            if (!Ln[t]) return null;
                            Hn[t] || (Hn[t] = Ce(Ln[t].trim()));
                            return Hn[t].cloneNode(!0);
                        })(
                            ((t = this.icon),
                            ut
                                ? X(X(t, "left", "right"), "previous", "next")
                                : t)
                        );
                    return e ? se.resolve(e) : se.reject("Icon not found.");
                },
            },
        },
        jn = {
            args: !1,
            extends: Fn,
            data: function(t) {
                return { icon: d(t.constructor.options.name) };
            },
            beforeConnect: function() {
                ze(this.$el, this.$name);
            },
        },
        Wn = {
            extends: jn,
            beforeConnect: function() {
                ze(this.$el, "uk-slidenav");
            },
            computed: {
                icon: function(t, e) {
                    var i = t.icon;
                    return Oe(e, "uk-slidenav-large") ? i + "-large" : i;
                },
            },
        },
        Vn = {
            extends: jn,
            computed: {
                icon: function(t, e) {
                    var i = t.icon;
                    return Oe(e, "uk-search-icon") &&
                        Bt(e, ".uk-search-large").length
                        ? "search-large"
                        : Bt(e, ".uk-search-navbar").length
                        ? "search-navbar"
                        : i;
                },
            },
        },
        Rn = {
            extends: jn,
            computed: {
                icon: function() {
                    return (
                        "close-" +
                        (Oe(this.$el, "uk-close-large") ? "large" : "icon")
                    );
                },
            },
        },
        qn = {
            extends: jn,
            connected: function() {
                var e = this;
                this.svg.then(function(t) {
                    return (
                        1 !== e.ratio &&
                        Ve(Ce("circle", t), "strokeWidth", 1 / e.ratio)
                    );
                }, et);
            },
        };
    var Yn = {
        args: "dataSrc",
        props: {
            dataSrc: String,
            dataSrcset: Boolean,
            sizes: String,
            width: Number,
            height: Number,
            offsetTop: String,
            offsetLeft: String,
            target: String,
        },
        data: {
            dataSrc: "",
            dataSrcset: !1,
            sizes: !1,
            width: !1,
            height: !1,
            offsetTop: "50vh",
            offsetLeft: 0,
            target: !1,
        },
        computed: {
            cacheKey: function(t) {
                var e = t.dataSrc;
                return this.$name + "." + e;
            },
            width: function(t) {
                var e = t.width,
                    i = t.dataWidth;
                return e || i;
            },
            height: function(t) {
                var e = t.height,
                    i = t.dataHeight;
                return e || i;
            },
            sizes: function(t) {
                var e = t.sizes,
                    i = t.dataSizes;
                return e || i;
            },
            isImg: function(t, e) {
                return Qn(e);
            },
            target: {
                get: function(t) {
                    var e = t.target;
                    return [this.$el].concat(yt(e, this.$el));
                },
                watch: function() {
                    this.observe();
                },
            },
            offsetTop: function(t) {
                return wi(t.offsetTop, "height");
            },
            offsetLeft: function(t) {
                return wi(t.offsetLeft, "width");
            },
        },
        connected: function() {
            er[this.cacheKey]
                ? Un(
                      this.$el,
                      er[this.cacheKey] || this.dataSrc,
                      this.dataSrcset,
                      this.sizes
                  )
                : this.isImg &&
                  this.width &&
                  this.height &&
                  Un(
                      this.$el,
                      (function(t, e, i) {
                          var n;
                          i &&
                              ((n = rt.ratio(
                                  { width: t, height: e },
                                  "width",
                                  wi(Gn(i))
                              )),
                              (t = n.width),
                              (e = n.height));
                          return (
                              'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="' +
                              t +
                              '" height="' +
                              e +
                              '"></svg>'
                          );
                      })(this.width, this.height, this.sizes)
                  ),
                (this.observer = new Vi(this.load, {
                    rootMargin: this.offsetTop + "px " + this.offsetLeft + "px",
                })),
                requestAnimationFrame(this.observe);
        },
        disconnected: function() {
            this.observer.disconnect();
        },
        update: {
            read: function(t) {
                var e = this,
                    i = t.image;
                if (
                    (i ||
                        "complete" !== document.readyState ||
                        this.load(this.observer.takeRecords()),
                    this.isImg)
                )
                    return !1;
                i &&
                    i.then(function(t) {
                        return t && "" !== t.currentSrc && Un(e.$el, tr(t));
                    });
            },
            write: function(t) {
                if (this.dataSrcset && 1 !== window.devicePixelRatio) {
                    var e = Ve(this.$el, "backgroundSize");
                    (!e.match(/^(auto\s?)+$/) && j(e) !== t.bgSize) ||
                        ((t.bgSize =
                            ((i = this.dataSrcset),
                            (n = this.sizes),
                            (r = wi(Gn(n))),
                            (o = (i.match(Zn) || [])
                                .map(j)
                                .sort(function(t, e) {
                                    return t - e;
                                })).filter(function(t) {
                                return r <= t;
                            })[0] ||
                                o.pop() ||
                                "")),
                        Ve(this.$el, "backgroundSize", t.bgSize + "px"));
                }
                var i, n, r, o;
            },
            events: ["resize"],
        },
        methods: {
            load: function(t) {
                var e = this;
                t.some(function(t) {
                    return H(t.isIntersecting) || t.isIntersecting;
                }) &&
                    ((this._data.image = de(
                        this.dataSrc,
                        this.dataSrcset,
                        this.sizes
                    ).then(function(t) {
                        return (
                            Un(e.$el, tr(t), t.srcset, t.sizes),
                            (er[e.cacheKey] = tr(t)),
                            t
                        );
                    }, et)),
                    this.observer.disconnect());
            },
            observe: function() {
                var e = this;
                !this._data.image &&
                    this._connected &&
                    this.target.forEach(function(t) {
                        return e.observer.observe(t);
                    });
            },
        },
    };
    function Un(t, e, i, n) {
        if (Qn(t)) n && (t.sizes = n), i && (t.srcset = i), e && (t.src = e);
        else if (e) {
            !b(t.style.backgroundImage, e) &&
                (Ve(t, "backgroundImage", "url(" + Lt(e) + ")"),
                Kt(t, Jt("load", !1)));
        }
    }
    var Xn = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;
    function Gn(t) {
        var e, i;
        for (Xn.lastIndex = 0; (e = Xn.exec(t)); )
            if (!e[1] || window.matchMedia(e[1]).matches) {
                e = w((i = e[2]), "calc")
                    ? i
                          .substring(5, i.length - 1)
                          .replace(Kn, function(t) {
                              return wi(t);
                          })
                          .replace(/ /g, "")
                          .match(Jn)
                          .reduce(function(t, e) {
                              return t + +e;
                          }, 0)
                    : i;
                break;
            }
        return e || "100vw";
    }
    var Kn = /\d+(?:\w+|%)/g,
        Jn = /[+-]?(\d+)/g;
    var Zn = /\s+\d+w\s*(?:,|$)/g;
    function Qn(t) {
        return "IMG" === t.tagName;
    }
    function tr(t) {
        return t.currentSrc || t.src;
    }
    var er,
        ir = "__test__";
    try {
        ((er = window.sessionStorage || {})[ir] = 1), delete er[ir];
    } catch (t) {
        er = {};
    }
    var nr = {
        props: { media: Boolean },
        data: { media: !1 },
        computed: {
            matchMedia: function() {
                var t = (function(t) {
                    if (D(t)) {
                        if ("@" === t[0])
                            t = j(Ue("breakpoint-" + t.substr(1)));
                        else if (isNaN(t)) return t;
                    }
                    return !(!t || isNaN(t)) && "(min-width: " + t + "px)";
                })(this.media);
                return !t || window.matchMedia(t).matches;
            },
        },
    };
    var rr = {
            mixins: [hn, nr],
            props: { fill: String },
            data: {
                fill: "",
                clsWrapper: "uk-leader-fill",
                clsHide: "uk-leader-hide",
                attrFill: "data-fill",
            },
            computed: {
                fill: function(t) {
                    return t.fill || Ue("leader-fill-content");
                },
            },
            connected: function() {
                var t;
                (t = Ie(this.$el, '<span class="' + this.clsWrapper + '">')),
                    (this.wrapper = t[0]);
            },
            disconnected: function() {
                Se(this.wrapper.childNodes);
            },
            update: {
                read: function(t) {
                    var e = t.changed,
                        i = t.width,
                        n = i;
                    return {
                        width: (i = Math.floor(this.$el.offsetWidth / 2)),
                        fill: this.fill,
                        changed: e || n !== i,
                        hide: !this.matchMedia,
                    };
                },
                write: function(t) {
                    He(this.wrapper, this.clsHide, t.hide),
                        t.changed &&
                            ((t.changed = !1),
                            ot(
                                this.wrapper,
                                this.attrFill,
                                new Array(t.width).join(t.fill)
                            ));
                },
                events: ["resize"],
            },
        },
        or = {
            props: { container: Boolean },
            data: { container: !0 },
            computed: {
                container: function(t) {
                    var e = t.container;
                    return (!0 === e && this.$container) || (e && Ce(e));
                },
            },
        },
        sr = [],
        ar = {
            mixins: [hn, or, ln],
            props: {
                selPanel: String,
                selClose: String,
                escClose: Boolean,
                bgClose: Boolean,
                stack: Boolean,
            },
            data: {
                cls: "uk-open",
                escClose: !0,
                bgClose: !0,
                overlay: !0,
                stack: !1,
            },
            computed: {
                panel: function(t, e) {
                    return Ce(t.selPanel, e);
                },
                transitionElement: function() {
                    return this.panel;
                },
                bgClose: function(t) {
                    return t.bgClose && this.panel;
                },
            },
            beforeDisconnect: function() {
                this.isToggled() && this.toggleNow(this.$el, !1);
            },
            events: [
                {
                    name: "click",
                    delegate: function() {
                        return this.selClose;
                    },
                    handler: function(t) {
                        t.preventDefault(), this.hide();
                    },
                },
                {
                    name: "toggle",
                    self: !0,
                    handler: function(t) {
                        t.defaultPrevented ||
                            (t.preventDefault(), this.toggle());
                    },
                },
                {
                    name: "beforeshow",
                    self: !0,
                    handler: function(t) {
                        if (b(sr, this)) return !1;
                        !this.stack && sr.length
                            ? (se
                                  .all(
                                      sr.map(function(t) {
                                          return t.hide();
                                      })
                                  )
                                  .then(this.show),
                              t.preventDefault())
                            : sr.push(this);
                    },
                },
                {
                    name: "show",
                    self: !0,
                    handler: function() {
                        var r = this;
                        ci(window) - ci(document) &&
                            this.overlay &&
                            Ve(document.body, "overflowY", "scroll"),
                            ze(document.documentElement, this.clsPage),
                            this.bgClose &&
                                Gt(
                                    this.$el,
                                    "hide",
                                    wn(document, "click", function(t) {
                                        var e = t.defaultPrevented,
                                            i = t.target,
                                            n = K(sr);
                                        e ||
                                            n !== r ||
                                            (n.overlay && !Yt(i, n.$el)) ||
                                            Yt(i, n.panel) ||
                                            n.hide();
                                    }),
                                    { self: !0 }
                                ),
                            this.escClose &&
                                Gt(
                                    this.$el,
                                    "hide",
                                    Ut(document, "keydown", function(t) {
                                        var e = K(sr);
                                        27 === t.keyCode &&
                                            e === r &&
                                            (t.preventDefault(), e.hide());
                                    }),
                                    { self: !0 }
                                );
                    },
                },
                {
                    name: "hidden",
                    self: !0,
                    handler: function() {
                        var e = this;
                        sr.splice(sr.indexOf(this), 1),
                            sr.length || Ve(document.body, "overflowY", ""),
                            sr.some(function(t) {
                                return t.clsPage === e.clsPage;
                            }) || De(document.documentElement, this.clsPage);
                    },
                },
            ],
            methods: {
                toggle: function() {
                    return this.isToggled() ? this.hide() : this.show();
                },
                show: function() {
                    var e = this;
                    return this.container &&
                        this.$el.parentNode !== this.container
                        ? (we(this.container, this.$el),
                          new se(function(t) {
                              return requestAnimationFrame(function() {
                                  return e.show().then(t);
                              });
                          }))
                        : this.toggleElement(this.$el, !0, hr(this));
                },
                hide: function() {
                    return this.toggleElement(this.$el, !1, hr(this));
                },
            },
        };
    function hr(t) {
        var s = t.transitionElement,
            a = t._toggle;
        return function(r, o) {
            return new se(function(i, n) {
                return Gt(r, "show hide", function() {
                    r._reject && r._reject(), (r._reject = n), a(r, o);
                    var t = Gt(
                            s,
                            "transitionstart",
                            function() {
                                Gt(s, "transitionend transitioncancel", i, {
                                    self: !0,
                                }),
                                    clearTimeout(e);
                            },
                            { self: !0 }
                        ),
                        e = setTimeout(function() {
                            t(), i();
                        }, Y(Ve(s, "transitionDuration")));
                });
            });
        };
    }
    var lr = {
        install: function(a) {
            (a.modal.dialog = function(t, e) {
                var i = a.modal(
                    ' <div class="uk-modal"> <div class="uk-modal-dialog">' +
                        t +
                        "</div> </div> ",
                    e
                );
                return (
                    i.show(),
                    Ut(
                        i.$el,
                        "hidden",
                        function() {
                            return se.resolve(function() {
                                return i.$destroy(!0);
                            });
                        },
                        { self: !0 }
                    ),
                    i
                );
            }),
                (a.modal.alert = function(e, i) {
                    return (
                        (i = G(
                            {
                                bgClose: !1,
                                escClose: !1,
                                labels: a.modal.labels,
                            },
                            i
                        )),
                        new se(function(t) {
                            return Ut(
                                a.modal.dialog(
                                    ' <div class="uk-modal-body">' +
                                        (D(e) ? e : ve(e)) +
                                        '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' +
                                        i.labels.ok +
                                        "</button> </div> ",
                                    i
                                ).$el,
                                "hide",
                                t
                            );
                        })
                    );
                }),
                (a.modal.confirm = function(r, o) {
                    return (
                        (o = G(
                            {
                                bgClose: !1,
                                escClose: !0,
                                labels: a.modal.labels,
                            },
                            o
                        )),
                        new se(function(e, t) {
                            var i = a.modal.dialog(
                                    ' <form> <div class="uk-modal-body">' +
                                        (D(r) ? r : ve(r)) +
                                        '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' +
                                        o.labels.cancel +
                                        '</button> <button class="uk-button uk-button-primary" autofocus>' +
                                        o.labels.ok +
                                        "</button> </div> </form> ",
                                    o
                                ),
                                n = !1;
                            Ut(i.$el, "submit", "form", function(t) {
                                t.preventDefault(), e(), (n = !0), i.hide();
                            }),
                                Ut(i.$el, "hide", function() {
                                    n || t();
                                });
                        })
                    );
                }),
                (a.modal.prompt = function(t, o, s) {
                    return (
                        (s = G(
                            {
                                bgClose: !1,
                                escClose: !0,
                                labels: a.modal.labels,
                            },
                            s
                        )),
                        new se(function(e) {
                            var i = a.modal.dialog(
                                    ' <form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' +
                                        (D(t) ? t : ve(t)) +
                                        '</label> <input class="uk-input" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' +
                                        s.labels.cancel +
                                        '</button> <button class="uk-button uk-button-primary">' +
                                        s.labels.ok +
                                        "</button> </div> </form> ",
                                    s
                                ),
                                n = Ce("input", i.$el);
                            n.value = o;
                            var r = !1;
                            Ut(i.$el, "submit", "form", function(t) {
                                t.preventDefault(),
                                    e(n.value),
                                    (r = !0),
                                    i.hide();
                            }),
                                Ut(i.$el, "hide", function() {
                                    r || e(null);
                                });
                        })
                    );
                }),
                (a.modal.labels = { ok: "Ok", cancel: "Cancel" });
        },
        mixins: [ar],
        data: {
            clsPage: "uk-modal-page",
            selPanel: ".uk-modal-dialog",
            selClose:
                ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full",
        },
        events: [
            {
                name: "show",
                self: !0,
                handler: function() {
                    Oe(this.panel, "uk-margin-auto-vertical")
                        ? ze(this.$el, "uk-flex")
                        : Ve(this.$el, "display", "block"),
                        ui(this.$el);
                },
            },
            {
                name: "hidden",
                self: !0,
                handler: function() {
                    Ve(this.$el, "display", ""), De(this.$el, "uk-flex");
                },
            },
        ],
    };
    var ur = {
            extends: cn,
            data: { targets: "> .uk-parent", toggle: "> a", content: "> ul" },
        },
        cr = {
            mixins: [hn, Tn],
            props: {
                dropdown: String,
                mode: "list",
                align: String,
                offset: Number,
                boundary: Boolean,
                boundaryAlign: Boolean,
                clsDrop: String,
                delayShow: Number,
                delayHide: Number,
                dropbar: Boolean,
                dropbarMode: String,
                dropbarAnchor: Boolean,
                duration: Number,
            },
            data: {
                dropdown: ".uk-navbar-nav > li",
                align: ut ? "right" : "left",
                clsDrop: "uk-navbar-dropdown",
                mode: void 0,
                offset: void 0,
                delayShow: void 0,
                delayHide: void 0,
                boundaryAlign: void 0,
                flip: "x",
                boundary: !0,
                dropbar: !1,
                dropbarMode: "slide",
                dropbarAnchor: !1,
                duration: 200,
                forceHeight: !0,
                selMinHeight:
                    ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle",
            },
            computed: {
                boundary: function(t, e) {
                    var i = t.boundary,
                        n = t.boundaryAlign;
                    return !0 === i || n ? e : i;
                },
                dropbarAnchor: function(t, e) {
                    return xt(t.dropbarAnchor, e);
                },
                pos: function(t) {
                    return "bottom-" + t.align;
                },
                dropdowns: function(t, e) {
                    return Ne(t.dropdown + " ." + t.clsDrop, e);
                },
            },
            beforeConnect: function() {
                var t = this.$props.dropbar;
                (this.dropbar =
                    t &&
                    (xt(t, this.$el) ||
                        Ce("+ .uk-navbar-dropbar", this.$el) ||
                        Ce("<div></div>"))),
                    this.dropbar &&
                        (ze(this.dropbar, "uk-navbar-dropbar"),
                        "slide" === this.dropbarMode &&
                            ze(this.dropbar, "uk-navbar-dropbar-slide"));
            },
            disconnected: function() {
                this.dropbar && ke(this.dropbar);
            },
            update: function() {
                var e = this;
                this.$create(
                    "drop",
                    this.dropdowns.filter(function(t) {
                        return !e.getDropdown(t);
                    }),
                    G({}, this.$props, {
                        boundary: this.boundary,
                        pos: this.pos,
                        offset: this.dropbar || this.offset,
                    })
                );
            },
            events: [
                {
                    name: "mouseover",
                    delegate: function() {
                        return this.dropdown;
                    },
                    handler: function(t) {
                        var e = t.current,
                            i = this.getActive();
                        i &&
                            i.toggle &&
                            !Yt(i.toggle.$el, e) &&
                            !i.tracker.movesTo(i.$el) &&
                            i.hide(!1);
                    },
                },
                {
                    name: "mouseleave",
                    el: function() {
                        return this.dropbar;
                    },
                    handler: function() {
                        var t = this.getActive();
                        t &&
                            !this.dropdowns.some(function(t) {
                                return Mt(t, ":hover");
                            }) &&
                            t.hide();
                    },
                },
                {
                    name: "beforeshow",
                    capture: !0,
                    filter: function() {
                        return this.dropbar;
                    },
                    handler: function() {
                        this.dropbar.parentNode ||
                            xe(this.dropbarAnchor || this.$el, this.dropbar);
                    },
                },
                {
                    name: "show",
                    capture: !0,
                    filter: function() {
                        return this.dropbar;
                    },
                    handler: function(t, e) {
                        var i = e.$el,
                            n = e.dir;
                        this.clsDrop && ze(i, this.clsDrop + "-dropbar"),
                            "bottom" === n &&
                                this.transitionTo(
                                    i.offsetHeight +
                                        j(Ve(i, "marginTop")) +
                                        j(Ve(i, "marginBottom")),
                                    i
                                );
                    },
                },
                {
                    name: "beforehide",
                    filter: function() {
                        return this.dropbar;
                    },
                    handler: function(t, e) {
                        var i = e.$el,
                            n = this.getActive();
                        Mt(this.dropbar, ":hover") &&
                            n &&
                            n.$el === i &&
                            t.preventDefault();
                    },
                },
                {
                    name: "hide",
                    filter: function() {
                        return this.dropbar;
                    },
                    handler: function(t, e) {
                        var i = e.$el,
                            n = this.getActive();
                        (!n || (n && n.$el === i)) && this.transitionTo(0);
                    },
                },
            ],
            methods: {
                getActive: function() {
                    var t = this.dropdowns
                        .map(this.getDropdown)
                        .filter(function(t) {
                            return t && t.isActive();
                        })[0];
                    return (
                        t &&
                        b(t.mode, "hover") &&
                        Yt(t.toggle.$el, this.$el) &&
                        t
                    );
                },
                transitionTo: function(t, e) {
                    var i = this,
                        n = this.dropbar,
                        r = Wt(n) ? ui(n) : 0;
                    return (
                        Ve(
                            (e = r < t && e),
                            "clip",
                            "rect(0," + e.offsetWidth + "px," + r + "px,0)"
                        ),
                        ui(n, r),
                        Ze.cancel([e, n]),
                        se
                            .all([
                                Ze.start(n, { height: t }, this.duration),
                                Ze.start(
                                    e,
                                    {
                                        clip:
                                            "rect(0," +
                                            e.offsetWidth +
                                            "px," +
                                            t +
                                            "px,0)",
                                    },
                                    this.duration
                                ),
                            ])
                            .catch(et)
                            .then(function() {
                                Ve(e, { clip: "" }), i.$update(n);
                            })
                    );
                },
                getDropdown: function(t) {
                    return (
                        this.$getComponent(t, "drop") ||
                        this.$getComponent(t, "dropdown")
                    );
                },
            },
        },
        dr = {
            mixins: [ar],
            args: "mode",
            props: { mode: String, flip: Boolean, overlay: Boolean },
            data: {
                mode: "slide",
                flip: !1,
                overlay: !1,
                clsPage: "uk-offcanvas-page",
                clsContainer: "uk-offcanvas-container",
                selPanel: ".uk-offcanvas-bar",
                clsFlip: "uk-offcanvas-flip",
                clsContainerAnimation: "uk-offcanvas-container-animation",
                clsSidebarAnimation: "uk-offcanvas-bar-animation",
                clsMode: "uk-offcanvas",
                clsOverlay: "uk-offcanvas-overlay",
                selClose: ".uk-offcanvas-close",
                container: !1,
            },
            computed: {
                clsFlip: function(t) {
                    var e = t.flip,
                        i = t.clsFlip;
                    return e ? i : "";
                },
                clsOverlay: function(t) {
                    var e = t.overlay,
                        i = t.clsOverlay;
                    return e ? i : "";
                },
                clsMode: function(t) {
                    var e = t.mode;
                    return t.clsMode + "-" + e;
                },
                clsSidebarAnimation: function(t) {
                    var e = t.mode,
                        i = t.clsSidebarAnimation;
                    return "none" === e || "reveal" === e ? "" : i;
                },
                clsContainerAnimation: function(t) {
                    var e = t.mode,
                        i = t.clsContainerAnimation;
                    return "push" !== e && "reveal" !== e ? "" : i;
                },
                transitionElement: function(t) {
                    return "reveal" === t.mode
                        ? this.panel.parentNode
                        : this.panel;
                },
            },
            events: [
                {
                    name: "click",
                    delegate: function() {
                        return 'a[href^="#"]';
                    },
                    handler: function(t) {
                        var e = t.current.hash;
                        !t.defaultPrevented &&
                            e &&
                            Ce(e, document.body) &&
                            this.hide();
                    },
                },
                {
                    name: "touchstart",
                    passive: !0,
                    el: function() {
                        return this.panel;
                    },
                    handler: function(t) {
                        var e = t.targetTouches;
                        1 === e.length && (this.clientY = e[0].clientY);
                    },
                },
                {
                    name: "touchmove",
                    self: !0,
                    passive: !1,
                    filter: function() {
                        return this.overlay;
                    },
                    handler: function(t) {
                        t.cancelable && t.preventDefault();
                    },
                },
                {
                    name: "touchmove",
                    passive: !1,
                    el: function() {
                        return this.panel;
                    },
                    handler: function(t) {
                        if (1 === t.targetTouches.length) {
                            var e =
                                    event.targetTouches[0].clientY -
                                    this.clientY,
                                i = this.panel,
                                n = i.scrollTop,
                                r = i.scrollHeight,
                                o = i.clientHeight;
                            (r <= o ||
                                (0 === n && 0 < e) ||
                                (r - n <= o && e < 0)) &&
                                t.cancelable &&
                                t.preventDefault();
                        }
                    },
                },
                {
                    name: "show",
                    self: !0,
                    handler: function() {
                        "reveal" !== this.mode ||
                            Oe(this.panel.parentNode, this.clsMode) ||
                            ($e(this.panel, "<div>"),
                            ze(this.panel.parentNode, this.clsMode)),
                            Ve(
                                document.documentElement,
                                "overflowY",
                                this.overlay ? "hidden" : ""
                            ),
                            ze(document.body, this.clsContainer, this.clsFlip),
                            Ve(
                                document.body,
                                "touch-action",
                                "pan-y pinch-zoom"
                            ),
                            Ve(this.$el, "display", "block"),
                            ze(this.$el, this.clsOverlay),
                            ze(
                                this.panel,
                                this.clsSidebarAnimation,
                                "reveal" !== this.mode ? this.clsMode : ""
                            ),
                            ui(document.body),
                            ze(document.body, this.clsContainerAnimation),
                            this.clsContainerAnimation &&
                                (fr().content += ",user-scalable=0");
                    },
                },
                {
                    name: "hide",
                    self: !0,
                    handler: function() {
                        De(document.body, this.clsContainerAnimation),
                            Ve(document.body, "touch-action", "");
                    },
                },
                {
                    name: "hidden",
                    self: !0,
                    handler: function() {
                        var t;
                        this.clsContainerAnimation &&
                            ((t = fr()).content = t.content.replace(
                                /,user-scalable=0$/,
                                ""
                            )),
                            "reveal" === this.mode && Se(this.panel),
                            De(
                                this.panel,
                                this.clsSidebarAnimation,
                                this.clsMode
                            ),
                            De(this.$el, this.clsOverlay),
                            Ve(this.$el, "display", ""),
                            De(document.body, this.clsContainer, this.clsFlip),
                            Ve(document.documentElement, "overflowY", "");
                    },
                },
                {
                    name: "swipeLeft swipeRight",
                    handler: function(t) {
                        this.isToggled() &&
                            u(t.type, "Left") ^ this.flip &&
                            this.hide();
                    },
                },
            ],
        };
    function fr() {
        return (
            Ce('meta[name="viewport"]', document.head) ||
            we(document.head, '<meta name="viewport">')
        );
    }
    var pr = {
            mixins: [hn],
            props: { selContainer: String, selContent: String },
            data: { selContainer: ".uk-modal", selContent: ".uk-modal-dialog" },
            computed: {
                container: function(t, e) {
                    return Dt(e, t.selContainer);
                },
                content: function(t, e) {
                    return Dt(e, t.selContent);
                },
            },
            connected: function() {
                Ve(this.$el, "minHeight", 150);
            },
            update: {
                read: function() {
                    return (
                        !(!this.content || !this.container) && {
                            current: j(Ve(this.$el, "maxHeight")),
                            max: Math.max(
                                150,
                                ui(this.container) -
                                    (si(this.content).height - ui(this.$el))
                            ),
                        }
                    );
                },
                write: function(t) {
                    var e = t.current,
                        i = t.max;
                    Ve(this.$el, "maxHeight", i),
                        Math.round(e) !== Math.round(i) &&
                            Kt(this.$el, "resize");
                },
                events: ["resize"],
            },
        },
        mr = {
            props: ["width", "height"],
            connected: function() {
                ze(this.$el, "uk-responsive-width");
            },
            update: {
                read: function() {
                    return (
                        !!(Wt(this.$el) && this.width && this.height) && {
                            width: ci(this.$el.parentNode),
                            height: this.height,
                        }
                    );
                },
                write: function(t) {
                    ui(
                        this.$el,
                        rt.contain(
                            { height: this.height, width: this.width },
                            t
                        ).height
                    );
                },
                events: ["resize"],
            },
        },
        gr = {
            props: { duration: Number, offset: Number },
            data: { duration: 1e3, offset: 0 },
            methods: {
                scrollTo: function(t) {
                    var e = this;
                    (t = (t && Ce(t)) || document.body),
                        Kt(this.$el, "beforescroll", [this, t]) &&
                            Oi(t, this.$props).then(function() {
                                return Kt(e.$el, "scrolled", [e, t]);
                            });
                },
            },
            events: {
                click: function(t) {
                    t.defaultPrevented ||
                        (t.preventDefault(),
                        this.scrollTo(
                            Lt(decodeURIComponent(this.$el.hash)).substr(1)
                        ));
                },
            },
        },
        vr = {
            args: "cls",
            props: {
                cls: String,
                target: String,
                hidden: Boolean,
                offsetTop: Number,
                offsetLeft: Number,
                repeat: Boolean,
                delay: Number,
            },
            data: function() {
                return {
                    cls: !1,
                    target: !1,
                    hidden: !0,
                    offsetTop: 0,
                    offsetLeft: 0,
                    repeat: !1,
                    delay: 0,
                    inViewClass: "uk-scrollspy-inview",
                };
            },
            computed: {
                elements: function(t, e) {
                    var i = t.target;
                    return i ? Ne(i, e) : [e];
                },
            },
            update: [
                {
                    write: function() {
                        this.hidden &&
                            Ve(
                                qt(
                                    this.elements,
                                    ":not(." + this.inViewClass + ")"
                                ),
                                "visibility",
                                "hidden"
                            );
                    },
                },
                {
                    read: function(t) {
                        var i = this;
                        t.update &&
                            this.elements.forEach(function(t) {
                                var e = t._ukScrollspyState;
                                ((e = e || {
                                    cls: ht(t, "uk-scrollspy-class") || i.cls,
                                }).show = Pi(t, i.offsetTop, i.offsetLeft)),
                                    (t._ukScrollspyState = e);
                            });
                    },
                    write: function(n) {
                        var r = this;
                        if (!n.update) return this.$emit(), (n.update = !0);
                        this.elements.forEach(function(e) {
                            function t(t) {
                                Ve(
                                    e,
                                    "visibility",
                                    !t && r.hidden ? "hidden" : ""
                                ),
                                    He(e, r.inViewClass, t),
                                    He(e, i.cls),
                                    Kt(e, t ? "inview" : "outview"),
                                    (i.inview = t),
                                    r.$update(e);
                            }
                            var i = e._ukScrollspyState;
                            !i.show || i.inview || i.queued
                                ? !i.show &&
                                  i.inview &&
                                  !i.queued &&
                                  r.repeat &&
                                  t(!1)
                                : ((i.queued = !0),
                                  (n.promise = (n.promise || se.resolve())
                                      .then(function() {
                                          return new se(function(t) {
                                              return setTimeout(t, r.delay);
                                          });
                                      })
                                      .then(function() {
                                          t(!0),
                                              setTimeout(function() {
                                                  return (i.queued = !1);
                                              }, 300);
                                      })));
                        });
                    },
                    events: ["scroll", "resize"],
                },
            ],
        },
        wr = {
            props: {
                cls: String,
                closest: String,
                scroll: Boolean,
                overflow: Boolean,
                offset: Number,
            },
            data: {
                cls: "uk-active",
                closest: !1,
                scroll: !1,
                overflow: !0,
                offset: 0,
            },
            computed: {
                links: function(t, e) {
                    return Ne('a[href^="#"]', e).filter(function(t) {
                        return t.hash;
                    });
                },
                targets: function() {
                    return Ne(
                        this.links
                            .map(function(t) {
                                return Lt(t.hash).substr(1);
                            })
                            .join(",")
                    );
                },
                elements: function(t) {
                    var e = t.closest;
                    return Dt(
                        Ne(
                            this.targets
                                .map(function(t) {
                                    return '[href="#' + t.id + '"]';
                                })
                                .join(",")
                        ),
                        e || "*"
                    );
                },
            },
            update: [
                {
                    read: function() {
                        this.scroll &&
                            this.$create("scroll", this.links, {
                                offset: this.offset || 0,
                            });
                    },
                },
                {
                    read: function() {
                        var i = this,
                            t = this.targets.length;
                        if (!t || !Wt(this.$el)) return !1;
                        var e = K(Li(this.targets[0])),
                            n = e.scrollTop,
                            r = e.scrollHeight,
                            o = Fi(e),
                            s = n,
                            a = r - si(o).height,
                            h = !1;
                        return (
                            s === a
                                ? (h = t - 1)
                                : (this.targets.every(function(t, e) {
                                      if (hi(t, o).top - i.offset <= 0)
                                          return (h = e), !0;
                                  }),
                                  !1 === h && this.overflow && (h = 0)),
                            { active: h }
                        );
                    },
                    write: function(t) {
                        var e = t.active;
                        this.links.forEach(function(t) {
                            return t.blur();
                        }),
                            De(this.elements, this.cls),
                            !1 !== e &&
                                Kt(this.$el, "active", [
                                    e,
                                    ze(this.elements[e], this.cls),
                                ]);
                    },
                    events: ["scroll", "resize"],
                },
            ],
        },
        br = {
            mixins: [hn, nr],
            props: {
                top: null,
                bottom: Boolean,
                offset: String,
                animation: String,
                clsActive: String,
                clsInactive: String,
                clsFixed: String,
                clsBelow: String,
                selTarget: String,
                widthElement: Boolean,
                showOnUp: Boolean,
                targetOffset: Number,
            },
            data: {
                top: 0,
                bottom: !1,
                offset: 0,
                animation: "",
                clsActive: "uk-active",
                clsInactive: "",
                clsFixed: "uk-sticky-fixed",
                clsBelow: "uk-sticky-below",
                selTarget: "",
                widthElement: !1,
                showOnUp: !1,
                targetOffset: !1,
            },
            computed: {
                offset: function(t) {
                    return wi(t.offset);
                },
                selTarget: function(t, e) {
                    var i = t.selTarget;
                    return (i && Ce(i, e)) || e;
                },
                widthElement: function(t, e) {
                    return xt(t.widthElement, e) || this.placeholder;
                },
                isActive: {
                    get: function() {
                        return Oe(this.selTarget, this.clsActive);
                    },
                    set: function(t) {
                        t && !this.isActive
                            ? (Be(
                                  this.selTarget,
                                  this.clsInactive,
                                  this.clsActive
                              ),
                              Kt(this.$el, "active"))
                            : t ||
                              Oe(this.selTarget, this.clsInactive) ||
                              (Be(
                                  this.selTarget,
                                  this.clsActive,
                                  this.clsInactive
                              ),
                              Kt(this.$el, "inactive"));
                    },
                },
            },
            connected: function() {
                (this.placeholder =
                    Ce("+ .uk-sticky-placeholder", this.$el) ||
                    Ce('<div class="uk-sticky-placeholder"></div>')),
                    (this.isFixed = !1),
                    (this.isActive = !1);
            },
            disconnected: function() {
                this.isFixed &&
                    (this.hide(), De(this.selTarget, this.clsInactive)),
                    ke(this.placeholder),
                    (this.placeholder = null),
                    (this.widthElement = null);
            },
            events: [
                {
                    name: "load hashchange popstate",
                    el: window,
                    handler: function() {
                        var n = this;
                        if (
                            !1 !== this.targetOffset &&
                            location.hash &&
                            0 < window.pageYOffset
                        ) {
                            var r = Ce(location.hash);
                            r &&
                                xi.read(function() {
                                    var t = si(r).top,
                                        e = si(n.$el).top,
                                        i = n.$el.offsetHeight;
                                    n.isFixed &&
                                        t <= e + i &&
                                        e <= t + r.offsetHeight &&
                                        Bi(
                                            window,
                                            t -
                                                i -
                                                (B(n.targetOffset)
                                                    ? n.targetOffset
                                                    : 0) -
                                                n.offset
                                        );
                                });
                        }
                    },
                },
            ],
            update: [
                {
                    read: function(t, e) {
                        var i = t.height;
                        this.isActive &&
                            "update" !== e &&
                            (this.hide(),
                            (i = this.$el.offsetHeight),
                            this.show()),
                            (i = this.isActive ? i : this.$el.offsetHeight),
                            (this.topOffset = si(
                                this.isFixed ? this.placeholder : this.$el
                            ).top),
                            (this.bottomOffset = this.topOffset + i);
                        var n = xr("bottom", this);
                        return (
                            (this.top =
                                Math.max(j(xr("top", this)), this.topOffset) -
                                this.offset),
                            (this.bottom = n && n - i),
                            (this.inactive = !this.matchMedia),
                            {
                                lastScroll: !1,
                                height: i,
                                margins: Ve(this.$el, [
                                    "marginTop",
                                    "marginBottom",
                                    "marginLeft",
                                    "marginRight",
                                ]),
                            }
                        );
                    },
                    write: function(t) {
                        var e = t.height,
                            i = t.margins,
                            n = this.placeholder;
                        Ve(n, G({ height: e }, i)),
                            Yt(n, document) ||
                                (xe(this.$el, n), ot(n, "hidden", "")),
                            (this.isActive = this.isActive);
                    },
                    events: ["resize"],
                },
                {
                    read: function(t) {
                        var e = t.scroll;
                        return (
                            void 0 === e && (e = 0),
                            (this.width = (Wt(this.widthElement)
                                ? this.widthElement
                                : this.$el
                            ).offsetWidth),
                            (this.scroll = window.pageYOffset),
                            {
                                dir: e <= this.scroll ? "down" : "up",
                                scroll: this.scroll,
                                visible: Wt(this.$el),
                                top: li(this.placeholder)[0],
                            }
                        );
                    },
                    write: function(t, e) {
                        var i = this,
                            n = t.initTimestamp;
                        void 0 === n && (n = 0);
                        var r = t.dir,
                            o = t.lastDir,
                            s = t.lastScroll,
                            a = t.scroll,
                            h = t.top,
                            l = t.visible,
                            u = performance.now();
                        if (
                            !(
                                (t.lastScroll = a) < 0 ||
                                a === s ||
                                !l ||
                                this.disabled ||
                                (this.showOnUp && "scroll" !== e) ||
                                ((300 < u - n || r !== o) &&
                                    ((t.initScroll = a), (t.initTimestamp = u)),
                                (t.lastDir = r),
                                this.showOnUp &&
                                    Math.abs(t.initScroll - a) <= 30 &&
                                    Math.abs(s - a) <= 10)
                            )
                        )
                            if (
                                this.inactive ||
                                a < this.top ||
                                (this.showOnUp &&
                                    (a <= this.top ||
                                        "down" === r ||
                                        ("up" === r &&
                                            !this.isFixed &&
                                            a <= this.bottomOffset)))
                            ) {
                                if (!this.isFixed)
                                    return void (
                                        ni.inProgress(this.$el) &&
                                        a < h &&
                                        (ni.cancel(this.$el), this.hide())
                                    );
                                (this.isFixed = !1),
                                    this.animation && a > this.topOffset
                                        ? (ni.cancel(this.$el),
                                          ni
                                              .out(this.$el, this.animation)
                                              .then(function() {
                                                  return i.hide();
                                              }, et))
                                        : this.hide();
                            } else
                                this.isFixed
                                    ? this.update()
                                    : this.animation
                                    ? (ni.cancel(this.$el),
                                      this.show(),
                                      ni.in(this.$el, this.animation).catch(et))
                                    : this.show();
                    },
                    events: ["resize", "scroll"],
                },
            ],
            methods: {
                show: function() {
                    (this.isFixed = !0),
                        this.update(),
                        ot(this.placeholder, "hidden", null);
                },
                hide: function() {
                    (this.isActive = !1),
                        De(this.$el, this.clsFixed, this.clsBelow),
                        Ve(this.$el, { position: "", top: "", width: "" }),
                        ot(this.placeholder, "hidden", "");
                },
                update: function() {
                    var t = 0 !== this.top || this.scroll > this.top,
                        e = Math.max(0, this.offset);
                    this.bottom &&
                        this.scroll > this.bottom - this.offset &&
                        (e = this.bottom - this.scroll),
                        Ve(this.$el, {
                            position: "fixed",
                            top: e + "px",
                            width: this.width,
                        }),
                        (this.isActive = t),
                        He(
                            this.$el,
                            this.clsBelow,
                            this.scroll > this.bottomOffset
                        ),
                        ze(this.$el, this.clsFixed);
                },
            },
        };
    function xr(t, e) {
        var i = e.$props,
            n = e.$el,
            r = e[t + "Offset"],
            o = i[t];
        if (o)
            return B(o) && D(o) && o.match(/^-?\d/)
                ? r + wi(o)
                : si(!0 === o ? n.parentNode : xt(o, n)).bottom;
    }
    var yr = {
            mixins: [ln],
            args: "connect",
            props: {
                connect: String,
                toggle: String,
                active: Number,
                swiping: Boolean,
            },
            data: {
                connect: "~.uk-switcher",
                toggle: "> * > :first-child",
                active: 0,
                swiping: !0,
                cls: "uk-active",
                clsContainer: "uk-switcher",
                attrItem: "uk-switcher-item",
                queued: !0,
            },
            computed: {
                connects: function(t, e) {
                    return yt(t.connect, e);
                },
                toggles: function(t, e) {
                    return Ne(t.toggle, e);
                },
            },
            events: [
                {
                    name: "click",
                    delegate: function() {
                        return this.toggle + ":not(.uk-disabled)";
                    },
                    handler: function(e) {
                        e.preventDefault(),
                            this.show(
                                Ot(this.$el).filter(function(t) {
                                    return Yt(e.current, t);
                                })[0]
                            );
                    },
                },
                {
                    name: "click",
                    el: function() {
                        return this.connects;
                    },
                    delegate: function() {
                        return (
                            "[" +
                            this.attrItem +
                            "],[data-" +
                            this.attrItem +
                            "]"
                        );
                    },
                    handler: function(t) {
                        t.preventDefault(),
                            this.show(ht(t.current, this.attrItem));
                    },
                },
                {
                    name: "swipeRight swipeLeft",
                    filter: function() {
                        return this.swiping;
                    },
                    el: function() {
                        return this.connects;
                    },
                    handler: function(t) {
                        var e = t.type;
                        this.show(u(e, "Left") ? "next" : "previous");
                    },
                },
            ],
            update: function() {
                var e = this;
                this.connects.forEach(function(t) {
                    return e.updateAria(t.children);
                });
                var t = this.$el.children;
                this.show(qt(t, "." + this.cls)[0] || t[this.active] || t[0]),
                    this.swiping &&
                        Ve(this.connects, "touch-action", "pan-y pinch-zoom");
            },
            methods: {
                index: function() {
                    return O(this.connects)
                        ? -1
                        : pe(qt(this.connects[0].children, "." + this.cls)[0]);
                },
                show: function(t) {
                    for (
                        var e,
                            i,
                            n = this,
                            r = this.$el.children,
                            o = r.length,
                            s = this.index(),
                            a = 0 <= s,
                            h = "previous" === t ? -1 : 1,
                            l = me(t, r, s),
                            u = 0;
                        u < o;
                        u++, l = (l + h + o) % o
                    )
                        if (
                            !Mt(
                                this.toggles[l],
                                ".uk-disabled *, .uk-disabled, [disabled]"
                            )
                        ) {
                            (e = this.toggles[l]), (i = r[l]);
                            break;
                        }
                    i &&
                        s !== l &&
                        (De(r, this.cls),
                        ze(i, this.cls),
                        ot(this.toggles, "aria-expanded", !1),
                        ot(e, "aria-expanded", !0),
                        this.connects.forEach(function(t) {
                            a
                                ? n.toggleElement([
                                      t.children[s],
                                      t.children[l],
                                  ])
                                : n.toggleNow(t.children[l]);
                        }));
                },
            },
        },
        kr = {
            mixins: [hn],
            extends: yr,
            props: { media: Boolean },
            data: { media: 960, attrItem: "uk-tab-item" },
            connected: function() {
                var t = Oe(this.$el, "uk-tab-left")
                    ? "uk-tab-left"
                    : !!Oe(this.$el, "uk-tab-right") && "uk-tab-right";
                t &&
                    this.$create("toggle", this.$el, {
                        cls: t,
                        mode: "media",
                        media: this.media,
                    });
            },
        },
        $r = {
            mixins: [nr, ln],
            args: "target",
            props: { href: String, target: null, mode: "list" },
            data: { href: !1, target: !1, mode: "click", queued: !0 },
            computed: {
                target: function(t, e) {
                    var i = t.href,
                        n = t.target;
                    return ((n = yt(n || i, e)).length && n) || [e];
                },
            },
            connected: function() {
                Kt(this.target, "updatearia", [this]);
            },
            events: [
                {
                    name: vt + " " + wt,
                    filter: function() {
                        return b(this.mode, "hover");
                    },
                    handler: function(t) {
                        ne(t) ||
                            this.toggle(
                                "toggle" + (t.type === vt ? "show" : "hide")
                            );
                    },
                },
                {
                    name: "click",
                    filter: function() {
                        return (
                            b(this.mode, "click") ||
                            (ft && b(this.mode, "hover"))
                        );
                    },
                    handler: function(t) {
                        var e;
                        (Dt(t.target, 'a[href="#"], a[href=""]') ||
                            ((e = Dt(t.target, "a[href]")) &&
                                ((this.cls &&
                                    !Oe(this.target, this.cls.split(" ")[0])) ||
                                    !Wt(this.target) ||
                                    (e.hash && Mt(this.target, e.hash))))) &&
                            t.preventDefault(),
                            this.toggle();
                    },
                },
            ],
            update: {
                read: function() {
                    return (
                        !(!b(this.mode, "media") || !this.media) && {
                            match: this.matchMedia,
                        }
                    );
                },
                write: function(t) {
                    var e = t.match,
                        i = this.isToggled(this.target);
                    (e ? !i : i) && this.toggle();
                },
                events: ["resize"],
            },
            methods: {
                toggle: function(t) {
                    Kt(this.target, t || "toggle", [this]) &&
                        this.toggleElement(this.target);
                },
            },
        },
        Ir = Object.freeze({
            __proto__: null,
            Accordion: cn,
            Alert: dn,
            Cover: pn,
            Drop: gn,
            Dropdown: bn,
            FormCustom: xn,
            Gif: yn,
            Grid: Sn,
            HeightMatch: En,
            HeightViewport: Cn,
            Icon: Fn,
            Img: Yn,
            Leader: rr,
            Margin: kn,
            Modal: lr,
            Nav: ur,
            Navbar: cr,
            Offcanvas: dr,
            OverflowAuto: pr,
            Responsive: mr,
            Scroll: gr,
            Scrollspy: vr,
            ScrollspyNav: wr,
            Sticky: br,
            Svg: Mn,
            Switcher: yr,
            Tab: kr,
            Toggle: $r,
            Video: fn,
            Close: Rn,
            Spinner: qn,
            SlidenavNext: Wn,
            SlidenavPrevious: Wn,
            SearchIcon: Vn,
            Marker: jn,
            NavbarToggleIcon: jn,
            OverlayIcon: jn,
            PaginationNext: jn,
            PaginationPrevious: jn,
            Totop: jn,
        }),
        Sr = {
            mixins: [hn],
            props: { date: String, clsWrapper: String },
            data: { date: "", clsWrapper: ".uk-countdown-%unit%" },
            computed: {
                date: function(t) {
                    var e = t.date;
                    return Date.parse(e);
                },
                days: function(t, e) {
                    return Ce(t.clsWrapper.replace("%unit%", "days"), e);
                },
                hours: function(t, e) {
                    return Ce(t.clsWrapper.replace("%unit%", "hours"), e);
                },
                minutes: function(t, e) {
                    return Ce(t.clsWrapper.replace("%unit%", "minutes"), e);
                },
                seconds: function(t, e) {
                    return Ce(t.clsWrapper.replace("%unit%", "seconds"), e);
                },
                units: function() {
                    var e = this;
                    return ["days", "hours", "minutes", "seconds"].filter(
                        function(t) {
                            return e[t];
                        }
                    );
                },
            },
            connected: function() {
                this.start();
            },
            disconnected: function() {
                var e = this;
                this.stop(),
                    this.units.forEach(function(t) {
                        return ge(e[t]);
                    });
            },
            events: [
                {
                    name: "visibilitychange",
                    el: document,
                    handler: function() {
                        document.hidden ? this.stop() : this.start();
                    },
                },
            ],
            update: {
                write: function() {
                    var t,
                        e,
                        n = this,
                        r =
                            ((t = this.date),
                            {
                                total: (e = t - Date.now()),
                                seconds: (e / 1e3) % 60,
                                minutes: (e / 1e3 / 60) % 60,
                                hours: (e / 1e3 / 60 / 60) % 24,
                                days: e / 1e3 / 60 / 60 / 24,
                            });
                    r.total <= 0 &&
                        (this.stop(),
                        (r.days = r.hours = r.minutes = r.seconds = 0)),
                        this.units.forEach(function(t) {
                            var e = String(Math.floor(r[t]));
                            e = e.length < 2 ? "0" + e : e;
                            var i = n[t];
                            i.textContent !== e &&
                                ((e = e.split("")).length !==
                                    i.children.length &&
                                    ve(
                                        i,
                                        e
                                            .map(function() {
                                                return "<span></span>";
                                            })
                                            .join("")
                                    ),
                                e.forEach(function(t, e) {
                                    return (i.children[e].textContent = t);
                                }));
                        });
                },
            },
            methods: {
                start: function() {
                    var t = this;
                    this.stop(),
                        this.date &&
                            this.units.length &&
                            (this.$emit(),
                            (this.timer = setInterval(function() {
                                return t.$emit();
                            }, 1e3)));
                },
                stop: function() {
                    this.timer &&
                        (clearInterval(this.timer), (this.timer = null));
                },
            },
        };
    var Tr,
        Er = "uk-animation-target",
        Ar = {
            props: { animation: Number },
            data: { animation: 150 },
            computed: {
                target: function() {
                    return this.$el;
                },
            },
            methods: {
                animate: function(t) {
                    var n = this;
                    !(function() {
                        if (Tr) return;
                        (Tr = we(document.head, "<style>").sheet).insertRule(
                            "." +
                                Er +
                                " > * {\n            margin-top: 0 !important;\n            transform: none !important;\n        }",
                            0
                        );
                    })();
                    var r = Ot(this.target),
                        o = r.map(function(t) {
                            return _r(t, !0);
                        }),
                        e = ui(this.target),
                        i = window.pageYOffset;
                    t(),
                        Ze.cancel(this.target),
                        r.forEach(Ze.cancel),
                        Cr(this.target),
                        this.$update(this.target),
                        xi.flush();
                    var s = ui(this.target),
                        a = (r = r.concat(
                            Ot(this.target).filter(function(t) {
                                return !b(r, t);
                            })
                        )).map(function(t, e) {
                            return (
                                !!(t.parentNode && e in o) &&
                                (o[e]
                                    ? Wt(t)
                                        ? Nr(t)
                                        : { opacity: 0 }
                                    : { opacity: Wt(t) ? 1 : 0 })
                            );
                        });
                    return (
                        (o = a.map(function(t, e) {
                            var i =
                                r[e].parentNode === n.target &&
                                (o[e] || _r(r[e]));
                            if (i)
                                if (t) {
                                    if (!("opacity" in t)) {
                                        i.opacity % 1
                                            ? (t.opacity = 1)
                                            : delete i.opacity;
                                    }
                                } else delete i.opacity;
                            return i;
                        })),
                        ze(this.target, Er),
                        r.forEach(function(t, e) {
                            return o[e] && Ve(t, o[e]);
                        }),
                        Ve(this.target, "height", e),
                        Bi(window, i),
                        se
                            .all(
                                r
                                    .map(function(t, e) {
                                        return o[e] && a[e]
                                            ? Ze.start(
                                                  t,
                                                  a[e],
                                                  n.animation,
                                                  "ease"
                                              )
                                            : se.resolve();
                                    })
                                    .concat(
                                        Ze.start(
                                            this.target,
                                            { height: s },
                                            this.animation,
                                            "ease"
                                        )
                                    )
                            )
                            .then(function() {
                                r.forEach(function(t, e) {
                                    return Ve(t, {
                                        display:
                                            0 === a[e].opacity ? "none" : "",
                                        zIndex: "",
                                    });
                                }),
                                    Cr(n.target),
                                    n.$update(n.target),
                                    xi.flush();
                            }, et)
                    );
                },
            },
        };
    function _r(t, e) {
        var i = Ve(t, "zIndex");
        return (
            !!Wt(t) &&
            G(
                {
                    display: "",
                    opacity: e ? Ve(t, "opacity") : "0",
                    pointerEvents: "none",
                    position: "absolute",
                    zIndex: "auto" === i ? pe(t) : i,
                },
                Nr(t)
            )
        );
    }
    function Cr(t) {
        Ve(t.children, {
            height: "",
            left: "",
            opacity: "",
            pointerEvents: "",
            position: "",
            top: "",
            width: "",
        }),
            De(t, Er),
            Ve(t, "height", "");
    }
    function Nr(t) {
        var e = si(t),
            i = e.height,
            n = e.width,
            r = hi(t);
        return { top: r.top, left: r.left, height: i, width: n };
    }
    var Mr = {
        mixins: [Ar],
        args: "target",
        props: { target: Boolean, selActive: Boolean },
        data: {
            target: null,
            selActive: !1,
            attrItem: "uk-filter-control",
            cls: "uk-active",
            animation: 250,
        },
        computed: {
            toggles: {
                get: function(t, e) {
                    t.attrItem;
                    return Ne(
                        "[" + this.attrItem + "],[data-" + this.attrItem + "]",
                        e
                    );
                },
                watch: function() {
                    this.updateState();
                },
            },
            target: function(t, e) {
                return Ce(t.target, e);
            },
            children: {
                get: function() {
                    return Ot(this.target);
                },
                watch: function(t, e) {
                    var i, n;
                    (n = e),
                        ((i = t).length === n.length &&
                            i.every(function(t) {
                                return ~n.indexOf(t);
                            })) ||
                            this.updateState();
                },
            },
        },
        events: [
            {
                name: "click",
                delegate: function() {
                    return (
                        "[" + this.attrItem + "],[data-" + this.attrItem + "]"
                    );
                },
                handler: function(t) {
                    t.preventDefault(), this.apply(t.current);
                },
            },
        ],
        connected: function() {
            var e = this;
            if ((this.updateState(), !1 !== this.selActive)) {
                var i = Ne(this.selActive, this.$el);
                this.toggles.forEach(function(t) {
                    return He(t, e.cls, b(i, t));
                });
            }
        },
        methods: {
            apply: function(t) {
                this.setState(Dr(t, this.attrItem, this.getState()));
            },
            getState: function() {
                var i = this;
                return this.toggles
                    .filter(function(t) {
                        return Oe(t, i.cls);
                    })
                    .reduce(
                        function(t, e) {
                            return Dr(e, i.attrItem, t);
                        },
                        { filter: { "": "" }, sort: [] }
                    );
            },
            setState: function(l, t) {
                var u = this;
                void 0 === t && (t = !0),
                    (l = G({ filter: { "": "" }, sort: [] }, l)),
                    Kt(this.$el, "beforeFilter", [this, l]);
                var c = this.children;
                this.toggles.forEach(function(t) {
                    return He(
                        t,
                        u.cls,
                        !!(function(t, e, i) {
                            var n = i.filter;
                            void 0 === n && (n = { "": "" });
                            var r = i.sort,
                                o = r[0],
                                s = r[1],
                                a = zr(t, e),
                                h = a.filter;
                            void 0 === h && (h = "");
                            var l = a.group;
                            void 0 === l && (l = "");
                            var u = a.sort,
                                c = a.order;
                            void 0 === c && (c = "asc");
                            return H(u)
                                ? (l in n && h === n[l]) ||
                                      (!h && l && !(l in n) && !n[""])
                                : o === u && s === c;
                        })(t, u.attrItem, l)
                    );
                });
                function e() {
                    var t,
                        e,
                        i =
                            ((t = l.filter),
                            (e = ""),
                            J(t, function(t) {
                                return (e += t || "");
                            }),
                            e);
                    c.forEach(function(t) {
                        return Ve(t, "display", i && !Mt(t, i) ? "none" : "");
                    });
                    var n,
                        r,
                        o = l.sort,
                        s = o[0],
                        a = o[1];
                    if (s) {
                        var h =
                            ((n = s),
                            (r = a),
                            G([], c).sort(function(t, e) {
                                return (
                                    ht(t, n).localeCompare(ht(e, n), void 0, {
                                        numeric: !0,
                                    }) * ("asc" === r || -1)
                                );
                            }));
                        U(h, c) ||
                            h.forEach(function(t) {
                                return we(u.target, t);
                            });
                    }
                }
                t
                    ? this.animate(e).then(function() {
                          return Kt(u.$el, "afterFilter", [u]);
                      })
                    : (e(), Kt(this.$el, "afterFilter", [this]));
            },
            updateState: function() {
                var t = this;
                xi.write(function() {
                    return t.setState(t.getState(), !1);
                });
            },
        },
    };
    function zr(t, e) {
        return Ni(ht(t, e), ["filter"]);
    }
    function Dr(t, e, i) {
        var n = zr(t, e),
            r = n.filter,
            o = n.group,
            s = n.sort,
            a = n.order;
        return (
            void 0 === a && (a = "asc"),
            (r || H(s)) &&
                (o
                    ? r
                        ? (delete i.filter[""], (i.filter[o] = r))
                        : (delete i.filter[o],
                          (O(i.filter) || "" in i.filter) &&
                              (i.filter = { "": r || "" }))
                    : (i.filter = { "": r || "" })),
            H(s) || (i.sort = [s, a]),
            i
        );
    }
    var Pr = {
        slide: {
            show: function(t) {
                return [{ transform: Or(-100 * t) }, { transform: Or() }];
            },
            percent: function(t) {
                return Br(t);
            },
            translate: function(t, e) {
                return [
                    { transform: Or(-100 * e * t) },
                    { transform: Or(100 * e * (1 - t)) },
                ];
            },
        },
    };
    function Br(t) {
        return Math.abs(Ve(t, "transform").split(",")[4] / t.offsetWidth) || 0;
    }
    function Or(t, e) {
        return (
            void 0 === t && (t = 0),
            void 0 === e && (e = "%"),
            (t += t ? e : ""),
            lt ? "translateX(" + t + ")" : "translate3d(" + t + ", 0, 0)"
        );
    }
    function Hr(t) {
        return "scale3d(" + t + ", " + t + ", 1)";
    }
    var Lr = G({}, Pr, {
        fade: {
            show: function() {
                return [{ opacity: 0 }, { opacity: 1 }];
            },
            percent: function(t) {
                return 1 - Ve(t, "opacity");
            },
            translate: function(t) {
                return [{ opacity: 1 - t }, { opacity: t }];
            },
        },
        scale: {
            show: function() {
                return [
                    { opacity: 0, transform: Hr(0.8) },
                    { opacity: 1, transform: Hr(1) },
                ];
            },
            percent: function(t) {
                return 1 - Ve(t, "opacity");
            },
            translate: function(t) {
                return [
                    { opacity: 1 - t, transform: Hr(1 - 0.2 * t) },
                    { opacity: t, transform: Hr(0.8 + 0.2 * t) },
                ];
            },
        },
    });
    function Fr(t, e, i) {
        Kt(t, Jt(e, !1, !1, i));
    }
    var jr = {
        mixins: [
            {
                props: {
                    autoplay: Boolean,
                    autoplayInterval: Number,
                    pauseOnHover: Boolean,
                },
                data: { autoplay: !1, autoplayInterval: 7e3, pauseOnHover: !0 },
                connected: function() {
                    this.autoplay && this.startAutoplay();
                },
                disconnected: function() {
                    this.stopAutoplay();
                },
                update: function() {
                    ot(this.slides, "tabindex", "-1");
                },
                events: [
                    {
                        name: "visibilitychange",
                        el: document,
                        filter: function() {
                            return this.autoplay;
                        },
                        handler: function() {
                            document.hidden
                                ? this.stopAutoplay()
                                : this.startAutoplay();
                        },
                    },
                ],
                methods: {
                    startAutoplay: function() {
                        var t = this;
                        this.stopAutoplay(),
                            (this.interval = setInterval(function() {
                                return (
                                    (!t.draggable || !Ce(":focus", t.$el)) &&
                                    (!t.pauseOnHover || !Mt(t.$el, ":hover")) &&
                                    !t.stack.length &&
                                    t.show("next")
                                );
                            }, this.autoplayInterval));
                    },
                    stopAutoplay: function() {
                        this.interval && clearInterval(this.interval);
                    },
                },
            },
            {
                props: { draggable: Boolean },
                data: { draggable: !0, threshold: 10 },
                created: function() {
                    var n = this;
                    ["start", "move", "end"].forEach(function(t) {
                        var i = n[t];
                        n[t] = function(t) {
                            var e = re(t).x * (ut ? -1 : 1);
                            (n.prevPos = e !== n.pos ? n.pos : n.prevPos),
                                (n.pos = e),
                                i(t);
                        };
                    });
                },
                events: [
                    {
                        name: pt,
                        delegate: function() {
                            return this.selSlides;
                        },
                        handler: function(t) {
                            var e;
                            !this.draggable ||
                                (!ne(t) &&
                                    !(e = t.target).children.length &&
                                    e.childNodes.length) ||
                                Dt(t.target, Vt) ||
                                0 < t.button ||
                                this.length < 2 ||
                                this.start(t);
                        },
                    },
                    {
                        name: "touchmove",
                        passive: !1,
                        handler: "move",
                        delegate: function() {
                            return this.selSlides;
                        },
                    },
                    {
                        name: "dragstart",
                        handler: function(t) {
                            t.preventDefault();
                        },
                    },
                ],
                methods: {
                    start: function() {
                        var t = this;
                        (this.drag = this.pos),
                            this._transitioner
                                ? ((this.percent = this._transitioner.percent()),
                                  (this.drag +=
                                      this._transitioner.getDistance() *
                                      this.percent *
                                      this.dir),
                                  this._transitioner.cancel(),
                                  this._transitioner.translate(this.percent),
                                  (this.dragging = !0),
                                  (this.stack = []))
                                : (this.prevIndex = this.index);
                        var e =
                            "touchmove" != mt
                                ? Ut(document, mt, this.move, { passive: !1 })
                                : et;
                        (this.unbindMove = function() {
                            e(), (t.unbindMove = null);
                        }),
                            Ut(window, "scroll", this.unbindMove),
                            Ut(document, gt, this.end, !0),
                            Ve(this.list, "userSelect", "none");
                    },
                    move: function(t) {
                        var e = this;
                        if (this.unbindMove) {
                            var i = this.pos - this.drag;
                            if (
                                !(
                                    0 == i ||
                                    this.prevPos === this.pos ||
                                    (!this.dragging &&
                                        Math.abs(i) < this.threshold)
                                )
                            ) {
                                Ve(this.list, "pointerEvents", "none"),
                                    t.cancelable && t.preventDefault(),
                                    (this.dragging = !0),
                                    (this.dir = i < 0 ? 1 : -1);
                                for (
                                    var n = this.slides,
                                        r = this.prevIndex,
                                        o = Math.abs(i),
                                        s = this.getIndex(r + this.dir, r),
                                        a =
                                            this._getDistance(r, s) ||
                                            n[r].offsetWidth;
                                    s !== r && a < o;

                                )
                                    (this.drag -= a * this.dir),
                                        (r = s),
                                        (o -= a),
                                        (s = this.getIndex(r + this.dir, r)),
                                        (a =
                                            this._getDistance(r, s) ||
                                            n[r].offsetWidth);
                                this.percent = o / a;
                                var h,
                                    l = n[r],
                                    u = n[s],
                                    c = this.index !== s,
                                    d = r === s;
                                [this.index, this.prevIndex]
                                    .filter(function(t) {
                                        return !b([s, r], t);
                                    })
                                    .forEach(function(t) {
                                        Kt(n[t], "itemhidden", [e]),
                                            d && ((h = !0), (e.prevIndex = r));
                                    }),
                                    ((this.index === r &&
                                        this.prevIndex !== r) ||
                                        h) &&
                                        Kt(n[this.index], "itemshown", [this]),
                                    c &&
                                        ((this.prevIndex = r),
                                        (this.index = s),
                                        d || Kt(l, "beforeitemhide", [this]),
                                        Kt(u, "beforeitemshow", [this])),
                                    (this._transitioner = this._translate(
                                        Math.abs(this.percent),
                                        l,
                                        !d && u
                                    )),
                                    c &&
                                        (d || Kt(l, "itemhide", [this]),
                                        Kt(u, "itemshow", [this]));
                            }
                        }
                    },
                    end: function() {
                        if (
                            (Xt(window, "scroll", this.unbindMove),
                            this.unbindMove && this.unbindMove(),
                            Xt(document, gt, this.end, !0),
                            this.dragging)
                        )
                            if (
                                ((this.dragging = null),
                                this.index === this.prevIndex)
                            )
                                (this.percent = 1 - this.percent),
                                    (this.dir *= -1),
                                    this._show(!1, this.index, !0),
                                    (this._transitioner = null);
                            else {
                                var t =
                                    (ut ? this.dir * (ut ? 1 : -1) : this.dir) <
                                        0 ==
                                    this.prevPos > this.pos;
                                (this.index = t ? this.index : this.prevIndex),
                                    t && (this.percent = 1 - this.percent),
                                    this.show(
                                        (0 < this.dir && !t) ||
                                            (this.dir < 0 && t)
                                            ? "next"
                                            : "previous",
                                        !0
                                    );
                            }
                        Ve(this.list, { userSelect: "", pointerEvents: "" }),
                            (this.drag = this.percent = null);
                    },
                },
            },
            {
                data: { selNav: !1 },
                computed: {
                    nav: function(t, e) {
                        return Ce(t.selNav, e);
                    },
                    selNavItem: function(t) {
                        var e = t.attrItem;
                        return "[" + e + "],[data-" + e + "]";
                    },
                    navItems: function(t, e) {
                        return Ne(this.selNavItem, e);
                    },
                },
                update: {
                    write: function() {
                        var i = this;
                        this.nav &&
                            this.length !== this.nav.children.length &&
                            ve(
                                this.nav,
                                this.slides
                                    .map(function(t, e) {
                                        return (
                                            "<li " +
                                            i.attrItem +
                                            '="' +
                                            e +
                                            '"><a href="#"></a></li>'
                                        );
                                    })
                                    .join("")
                            ),
                            He(
                                Ne(this.selNavItem, this.$el).concat(this.nav),
                                "uk-hidden",
                                !this.maxIndex
                            ),
                            this.updateNav();
                    },
                    events: ["resize"],
                },
                events: [
                    {
                        name: "click",
                        delegate: function() {
                            return this.selNavItem;
                        },
                        handler: function(t) {
                            t.preventDefault(),
                                this.show(ht(t.current, this.attrItem));
                        },
                    },
                    { name: "itemshow", handler: "updateNav" },
                ],
                methods: {
                    updateNav: function() {
                        var i = this,
                            n = this.getValidIndex();
                        this.navItems.forEach(function(t) {
                            var e = ht(t, i.attrItem);
                            He(t, i.clsActive, F(e) === n),
                                He(
                                    t,
                                    "uk-invisible",
                                    i.finite &&
                                        (("previous" === e && 0 === n) ||
                                            ("next" === e && n >= i.maxIndex))
                                );
                        });
                    },
                },
            },
        ],
        props: {
            clsActivated: Boolean,
            easing: String,
            index: Number,
            finite: Boolean,
            velocity: Number,
            selSlides: String,
        },
        data: function() {
            return {
                easing: "ease",
                finite: !1,
                velocity: 1,
                index: 0,
                prevIndex: -1,
                stack: [],
                percent: 0,
                clsActive: "uk-active",
                clsActivated: !1,
                Transitioner: !1,
                transitionOptions: {},
            };
        },
        connected: function() {
            (this.prevIndex = -1),
                (this.index = this.getValidIndex(this.index)),
                (this.stack = []);
        },
        disconnected: function() {
            De(this.slides, this.clsActive);
        },
        computed: {
            duration: function(t, e) {
                var i = t.velocity;
                return Wr(e.offsetWidth / i);
            },
            list: function(t, e) {
                return Ce(t.selList, e);
            },
            maxIndex: function() {
                return this.length - 1;
            },
            selSlides: function(t) {
                return t.selList + " " + (t.selSlides || "> *");
            },
            slides: {
                get: function() {
                    return Ne(this.selSlides, this.$el);
                },
                watch: function() {
                    this.$reset();
                },
            },
            length: function() {
                return this.slides.length;
            },
        },
        events: {
            itemshown: function() {
                this.$update(this.list);
            },
        },
        methods: {
            show: function(t, e) {
                var i = this;
                if ((void 0 === e && (e = !1), !this.dragging && this.length)) {
                    var n = this.stack,
                        r = e ? 0 : n.length,
                        o = function() {
                            n.splice(r, 1), n.length && i.show(n.shift(), !0);
                        };
                    if ((n[e ? "unshift" : "push"](t), !e && 1 < n.length))
                        2 === n.length &&
                            this._transitioner.forward(
                                Math.min(this.duration, 200)
                            );
                    else {
                        var s = this.index,
                            a =
                                Oe(this.slides, this.clsActive) &&
                                this.slides[s],
                            h = this.getIndex(t, this.index),
                            l = this.slides[h];
                        if (a !== l) {
                            var u, c;
                            if (
                                ((this.dir =
                                    ((c = s),
                                    "next" === (u = t)
                                        ? 1
                                        : "previous" === u
                                        ? -1
                                        : u < c
                                        ? -1
                                        : 1)),
                                (this.prevIndex = s),
                                (this.index = h),
                                a && Kt(a, "beforeitemhide", [this]),
                                !Kt(l, "beforeitemshow", [this, a]))
                            )
                                return (this.index = this.prevIndex), void o();
                            var d = this._show(a, l, e).then(function() {
                                return (
                                    a && Kt(a, "itemhidden", [i]),
                                    Kt(l, "itemshown", [i]),
                                    new se(function(t) {
                                        xi.write(function() {
                                            n.shift(),
                                                n.length
                                                    ? i.show(n.shift(), !0)
                                                    : (i._transitioner = null),
                                                t();
                                        });
                                    })
                                );
                            });
                            return (
                                a && Kt(a, "itemhide", [this]),
                                Kt(l, "itemshow", [this]),
                                d
                            );
                        }
                        o();
                    }
                }
            },
            getIndex: function(t, e) {
                return (
                    void 0 === t && (t = this.index),
                    void 0 === e && (e = this.index),
                    tt(me(t, this.slides, e, this.finite), 0, this.maxIndex)
                );
            },
            getValidIndex: function(t, e) {
                return (
                    void 0 === t && (t = this.index),
                    void 0 === e && (e = this.prevIndex),
                    this.getIndex(t, e)
                );
            },
            _show: function(t, e, i) {
                if (
                    ((this._transitioner = this._getTransitioner(
                        t,
                        e,
                        this.dir,
                        G(
                            {
                                easing: i
                                    ? e.offsetWidth < 600
                                        ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                                        : "cubic-bezier(0.165, 0.84, 0.44, 1)"
                                    : this.easing,
                            },
                            this.transitionOptions
                        )
                    )),
                    !i && !t)
                )
                    return this._translate(1), se.resolve();
                var n = this.stack.length;
                return this._transitioner[1 < n ? "forward" : "show"](
                    1 < n
                        ? Math.min(this.duration, 75 + 75 / (n - 1))
                        : this.duration,
                    this.percent
                );
            },
            _getDistance: function(t, e) {
                return this._getTransitioner(t, t !== e && e).getDistance();
            },
            _translate: function(t, e, i) {
                void 0 === e && (e = this.prevIndex),
                    void 0 === i && (i = this.index);
                var n = this._getTransitioner(e !== i && e, i);
                return n.translate(t), n;
            },
            _getTransitioner: function(t, e, i, n) {
                return (
                    void 0 === t && (t = this.prevIndex),
                    void 0 === e && (e = this.index),
                    void 0 === i && (i = this.dir || 1),
                    void 0 === n && (n = this.transitionOptions),
                    new this.Transitioner(
                        P(t) ? this.slides[t] : t,
                        P(e) ? this.slides[e] : e,
                        i * (ut ? -1 : 1),
                        n
                    )
                );
            },
        },
    };
    function Wr(t) {
        return 0.5 * t + 300;
    }
    var Vr = {
            mixins: [jr],
            props: { animation: String },
            data: {
                animation: "slide",
                clsActivated: "uk-transition-active",
                Animations: Pr,
                Transitioner: function(o, s, a, t) {
                    var e = t.animation,
                        h = t.easing,
                        i = e.percent,
                        n = e.translate,
                        r = e.show;
                    void 0 === r && (r = et);
                    var l = r(a),
                        u = new oe();
                    return {
                        dir: a,
                        show: function(t, e, i) {
                            var n = this;
                            void 0 === e && (e = 0);
                            var r = i ? "linear" : h;
                            return (
                                (t -= Math.round(t * tt(e, -1, 1))),
                                this.translate(e),
                                Fr(s, "itemin", {
                                    percent: e,
                                    duration: t,
                                    timing: r,
                                    dir: a,
                                }),
                                Fr(o, "itemout", {
                                    percent: 1 - e,
                                    duration: t,
                                    timing: r,
                                    dir: a,
                                }),
                                se
                                    .all([
                                        Ze.start(s, l[1], t, r),
                                        Ze.start(o, l[0], t, r),
                                    ])
                                    .then(function() {
                                        n.reset(), u.resolve();
                                    }, et),
                                u.promise
                            );
                        },
                        stop: function() {
                            return Ze.stop([s, o]);
                        },
                        cancel: function() {
                            Ze.cancel([s, o]);
                        },
                        reset: function() {
                            for (var t in l[0]) Ve([s, o], t, "");
                        },
                        forward: function(t, e) {
                            return (
                                void 0 === e && (e = this.percent()),
                                Ze.cancel([s, o]),
                                this.show(t, e, !0)
                            );
                        },
                        translate: function(t) {
                            this.reset();
                            var e = n(t, a);
                            Ve(s, e[1]),
                                Ve(o, e[0]),
                                Fr(s, "itemtranslatein", {
                                    percent: t,
                                    dir: a,
                                }),
                                Fr(o, "itemtranslateout", {
                                    percent: 1 - t,
                                    dir: a,
                                });
                        },
                        percent: function() {
                            return i(o || s, s, a);
                        },
                        getDistance: function() {
                            return o && o.offsetWidth;
                        },
                    };
                },
            },
            computed: {
                animation: function(t) {
                    var e = t.animation,
                        i = t.Animations;
                    return G(e in i ? i[e] : i.slide, { name: e });
                },
                transitionOptions: function() {
                    return { animation: this.animation };
                },
            },
            events: {
                "itemshow itemhide itemshown itemhidden": function(t) {
                    var e = t.target;
                    this.$update(e);
                },
                beforeitemshow: function(t) {
                    ze(t.target, this.clsActive);
                },
                itemshown: function(t) {
                    ze(t.target, this.clsActivated);
                },
                itemhidden: function(t) {
                    De(t.target, this.clsActive, this.clsActivated);
                },
            },
        },
        Rr = {
            mixins: [or, ar, ln, Vr],
            functional: !0,
            props: {
                delayControls: Number,
                preload: Number,
                videoAutoplay: Boolean,
                template: String,
            },
            data: function() {
                return {
                    preload: 1,
                    videoAutoplay: !1,
                    delayControls: 3e3,
                    items: [],
                    cls: "uk-open",
                    clsPage: "uk-lightbox-page",
                    selList: ".uk-lightbox-items",
                    attrItem: "uk-lightbox-item",
                    selClose: ".uk-close-large",
                    selCaption: ".uk-lightbox-caption",
                    pauseOnHover: !1,
                    velocity: 2,
                    Animations: Lr,
                    template:
                        '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href="#" uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href="#" uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>',
                };
            },
            created: function() {
                var t = Ce(this.template),
                    e = Ce(this.selList, t);
                this.items.forEach(function() {
                    return we(e, "<li></li>");
                }),
                    this.$mount(we(this.container, t));
            },
            computed: {
                caption: function(t, e) {
                    t.selCaption;
                    return Ce(".uk-lightbox-caption", e);
                },
            },
            events: [
                { name: mt + " " + pt + " keydown", handler: "showControls" },
                {
                    name: "click",
                    self: !0,
                    delegate: function() {
                        return this.selSlides;
                    },
                    handler: function(t) {
                        t.defaultPrevented || this.hide();
                    },
                },
                {
                    name: "shown",
                    self: !0,
                    handler: function() {
                        this.showControls();
                    },
                },
                {
                    name: "hide",
                    self: !0,
                    handler: function() {
                        this.hideControls(),
                            De(this.slides, this.clsActive),
                            Ze.stop(this.slides);
                    },
                },
                {
                    name: "hidden",
                    self: !0,
                    handler: function() {
                        this.$destroy(!0);
                    },
                },
                {
                    name: "keyup",
                    el: document,
                    handler: function(t) {
                        if (this.isToggled(this.$el))
                            switch (t.keyCode) {
                                case 37:
                                    this.show("previous");
                                    break;
                                case 39:
                                    this.show("next");
                            }
                    },
                },
                {
                    name: "beforeitemshow",
                    handler: function(t) {
                        this.isToggled() ||
                            ((this.draggable = !1),
                            t.preventDefault(),
                            this.toggleNow(this.$el, !0),
                            (this.animation = Lr.scale),
                            De(t.target, this.clsActive),
                            this.stack.splice(1, 0, this.index));
                    },
                },
                {
                    name: "itemshow",
                    handler: function(t) {
                        var e = pe(t.target),
                            i = this.getItem(e).caption;
                        Ve(this.caption, "display", i ? "" : "none"),
                            ve(this.caption, i);
                        for (var n = 0; n <= this.preload; n++)
                            this.loadItem(this.getIndex(e + n)),
                                this.loadItem(this.getIndex(e - n));
                    },
                },
                {
                    name: "itemshown",
                    handler: function() {
                        this.draggable = this.$props.draggable;
                    },
                },
                {
                    name: "itemload",
                    handler: function(t, r) {
                        var o,
                            s = this,
                            e = r.source,
                            i = r.type,
                            n = r.alt;
                        if ((this.setItem(r, "<span uk-spinner></span>"), e))
                            if (
                                "image" === i ||
                                e.match(/\.(jpe?g|png|gif|svg|webp)($|\?)/i)
                            )
                                de(e).then(
                                    function(t) {
                                        return s.setItem(
                                            r,
                                            '<img width="' +
                                                t.width +
                                                '" height="' +
                                                t.height +
                                                '" src="' +
                                                e +
                                                '" alt="' +
                                                (n || "") +
                                                '">'
                                        );
                                    },
                                    function() {
                                        return s.setError(r);
                                    }
                                );
                            else if (
                                "video" === i ||
                                e.match(/\.(mp4|webm|ogv)($|\?)/i)
                            ) {
                                var a = Ce(
                                    "<video controls playsinline" +
                                        (r.poster
                                            ? ' poster="' + r.poster + '"'
                                            : "") +
                                        ' uk-video="' +
                                        this.videoAutoplay +
                                        '"></video>'
                                );
                                ot(a, "src", e),
                                    Gt(a, "error loadedmetadata", function(t) {
                                        "error" === t
                                            ? s.setError(r)
                                            : (ot(a, {
                                                  width: a.videoWidth,
                                                  height: a.videoHeight,
                                              }),
                                              s.setItem(r, a));
                                    });
                            } else if (
                                "iframe" === i ||
                                e.match(/\.(html|php)($|\?)/i)
                            )
                                this.setItem(
                                    r,
                                    '<iframe class="uk-lightbox-iframe" src="' +
                                        e +
                                        '" frameborder="0" allowfullscreen></iframe>'
                                );
                            else if (
                                (o =
                                    e.match(
                                        /\/\/.*?youtube(-nocookie)?\.[a-z]+\/watch\?v=([^&\s]+)/
                                    ) || e.match(/()youtu\.be\/(.*)/))
                            ) {
                                var h = o[2],
                                    l = function(t, e) {
                                        return (
                                            void 0 === t && (t = 640),
                                            void 0 === e && (e = 450),
                                            s.setItem(
                                                r,
                                                qr(
                                                    "https://www.youtube" +
                                                        (o[1] || "") +
                                                        ".com/embed/" +
                                                        h,
                                                    t,
                                                    e,
                                                    s.videoAutoplay
                                                )
                                            )
                                        );
                                    };
                                de(
                                    "https://img.youtube.com/vi/" +
                                        h +
                                        "/maxresdefault.jpg"
                                ).then(function(t) {
                                    var e = t.width,
                                        i = t.height;
                                    120 === e && 90 === i
                                        ? de(
                                              "https://img.youtube.com/vi/" +
                                                  h +
                                                  "/0.jpg"
                                          ).then(function(t) {
                                              var e = t.width,
                                                  i = t.height;
                                              return l(e, i);
                                          }, l)
                                        : l(e, i);
                                }, l);
                            } else
                                (o = e.match(
                                    /(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/
                                )) &&
                                    ce(
                                        "https://vimeo.com/api/oembed.json?maxwidth=1920&url=" +
                                            encodeURI(e),
                                        {
                                            responseType: "json",
                                            withCredentials: !1,
                                        }
                                    ).then(
                                        function(t) {
                                            var e = t.response,
                                                i = e.height,
                                                n = e.width;
                                            return s.setItem(
                                                r,
                                                qr(
                                                    "https://player.vimeo.com/video/" +
                                                        o[2],
                                                    n,
                                                    i,
                                                    s.videoAutoplay
                                                )
                                            );
                                        },
                                        function() {
                                            return s.setError(r);
                                        }
                                    );
                    },
                },
            ],
            methods: {
                loadItem: function(t) {
                    void 0 === t && (t = this.index);
                    var e = this.getItem(t);
                    e.content || Kt(this.$el, "itemload", [e]);
                },
                getItem: function(t) {
                    return (
                        void 0 === t && (t = this.index), this.items[t] || {}
                    );
                },
                setItem: function(t, e) {
                    G(t, { content: e });
                    var i = ve(this.slides[this.items.indexOf(t)], e);
                    Kt(this.$el, "itemloaded", [this, i]), this.$update(i);
                },
                setError: function(t) {
                    this.setItem(
                        t,
                        '<span uk-icon="icon: bolt; ratio: 2"></span>'
                    );
                },
                showControls: function() {
                    clearTimeout(this.controlsTimer),
                        (this.controlsTimer = setTimeout(
                            this.hideControls,
                            this.delayControls
                        )),
                        ze(this.$el, "uk-active", "uk-transition-active");
                },
                hideControls: function() {
                    De(this.$el, "uk-active", "uk-transition-active");
                },
            },
        };
    function qr(t, e, i, n) {
        return (
            '<iframe src="' +
            t +
            '" width="' +
            e +
            '" height="' +
            i +
            '" style="max-width: 100%; box-sizing: border-box;" frameborder="0" allowfullscreen uk-video="autoplay: ' +
            n +
            '" uk-responsive></iframe>'
        );
    }
    var Yr,
        Ur = {
            install: function(t, e) {
                t.lightboxPanel || t.component("lightboxPanel", Rr);
                G(e.props, t.component("lightboxPanel").options.props);
            },
            props: { toggle: String },
            data: { toggle: "a" },
            computed: {
                toggles: {
                    get: function(t, e) {
                        return Ne(t.toggle, e);
                    },
                    watch: function() {
                        this.hide();
                    },
                },
                items: function() {
                    return Q(this.toggles.map(Xr), "source");
                },
            },
            disconnected: function() {
                this.hide();
            },
            events: [
                {
                    name: "click",
                    delegate: function() {
                        return this.toggle + ":not(.uk-disabled)";
                    },
                    handler: function(t) {
                        t.preventDefault();
                        var e = ht(t.current, "href");
                        this.show(
                            y(this.items, function(t) {
                                return t.source === e;
                            })
                        );
                    },
                },
            ],
            methods: {
                show: function(t) {
                    var e = this;
                    return (
                        (this.panel =
                            this.panel ||
                            this.$create(
                                "lightboxPanel",
                                G({}, this.$props, { items: this.items })
                            )),
                        Ut(this.panel.$el, "hidden", function() {
                            return (e.panel = !1);
                        }),
                        this.panel.show(t)
                    );
                },
                hide: function() {
                    return this.panel && this.panel.hide();
                },
            },
        };
    function Xr(i) {
        return ["href", "caption", "type", "poster", "alt"].reduce(function(
            t,
            e
        ) {
            return (t["href" === e ? "source" : e] = ht(i, e)), t;
        },
        {});
    }
    var Gr = {},
        Kr = {
            functional: !0,
            args: ["message", "status"],
            data: {
                message: "",
                status: "",
                timeout: 5e3,
                group: null,
                pos: "top-center",
                clsClose: "uk-notification-close",
                clsMsg: "uk-notification-message",
            },
            install: function(r) {
                r.notification.closeAll = function(i, n) {
                    _e(document.body, function(t) {
                        var e = r.getComponent(t, "notification");
                        !e || (i && i !== e.group) || e.close(n);
                    });
                };
            },
            computed: {
                marginProp: function(t) {
                    return "margin" + (w(t.pos, "top") ? "Top" : "Bottom");
                },
                startProps: function() {
                    var t;
                    return (
                        ((t = { opacity: 0 })[this.marginProp] = -this.$el
                            .offsetHeight),
                        t
                    );
                },
            },
            created: function() {
                Gr[this.pos] ||
                    (Gr[this.pos] = we(
                        this.$container,
                        '<div class="uk-notification uk-notification-' +
                            this.pos +
                            '"></div>'
                    ));
                var t = Ve(Gr[this.pos], "display", "block");
                this.$mount(
                    we(
                        t,
                        '<div class="' +
                            this.clsMsg +
                            (this.status
                                ? " " + this.clsMsg + "-" + this.status
                                : "") +
                            '"> <a href="#" class="' +
                            this.clsClose +
                            '" data-uk-close></a> <div>' +
                            this.message +
                            "</div> </div>"
                    )
                );
            },
            connected: function() {
                var t,
                    e = this,
                    i = j(Ve(this.$el, this.marginProp));
                Ze.start(
                    Ve(this.$el, this.startProps),
                    (((t = { opacity: 1 })[this.marginProp] = i), t)
                ).then(function() {
                    e.timeout && (e.timer = setTimeout(e.close, e.timeout));
                });
            },
            events:
                (((Yr = {
                    click: function(t) {
                        Dt(t.target, 'a[href="#"],a[href=""]') &&
                            t.preventDefault(),
                            this.close();
                    },
                })[vt] = function() {
                    this.timer && clearTimeout(this.timer);
                }),
                (Yr[wt] = function() {
                    this.timeout &&
                        (this.timer = setTimeout(this.close, this.timeout));
                }),
                Yr),
            methods: {
                close: function(t) {
                    function e() {
                        Kt(i.$el, "close", [i]),
                            ke(i.$el),
                            Gr[i.pos].children.length ||
                                Ve(Gr[i.pos], "display", "none");
                    }
                    var i = this;
                    this.timer && clearTimeout(this.timer),
                        t ? e() : Ze.start(this.$el, this.startProps).then(e);
                },
            },
        };
    var Jr = [
            "x",
            "y",
            "bgx",
            "bgy",
            "rotate",
            "scale",
            "color",
            "backgroundColor",
            "borderColor",
            "opacity",
            "blur",
            "hue",
            "grayscale",
            "invert",
            "saturate",
            "sepia",
            "fopacity",
            "stroke",
        ],
        Zr = {
            mixins: [nr],
            props: Jr.reduce(function(t, e) {
                return (t[e] = "list"), t;
            }, {}),
            data: Jr.reduce(function(t, e) {
                return (t[e] = void 0), t;
            }, {}),
            computed: {
                props: function(m, g) {
                    var v = this;
                    return Jr.reduce(function(t, e) {
                        if (H(m[e])) return t;
                        var i,
                            n,
                            r,
                            o = e.match(/color/i),
                            s = o || "opacity" === e,
                            a = m[e].slice(0);
                        s && Ve(g, e, ""),
                            a.length < 2 &&
                                a.unshift(
                                    ("scale" === e ? 1 : s ? Ve(g, e) : 0) || 0
                                );
                        var h = a.reduce(function(t, e) {
                            return (D(e) && e.replace(/-|\d/g, "").trim()) || t;
                        }, "");
                        if (o) {
                            var l = g.style.color;
                            (a = a.map(function(t) {
                                return Ve(Ve(g, "color", t), "color")
                                    .split(/[(),]/g)
                                    .slice(1, -1)
                                    .concat(1)
                                    .slice(0, 4)
                                    .map(j);
                            })),
                                (g.style.color = l);
                        } else if (w(e, "bg")) {
                            var u = "bgy" === e ? "height" : "width";
                            if (
                                ((a = a.map(function(t) {
                                    return wi(t, u, v.$el);
                                })),
                                Ve(g, "background-position-" + e[2], ""),
                                (n = Ve(g, "backgroundPosition").split(" ")[
                                    "x" === e[2] ? 0 : 1
                                ]),
                                v.covers)
                            ) {
                                var c = Math.min.apply(Math, a),
                                    d = Math.max.apply(Math, a),
                                    f = a.indexOf(c) < a.indexOf(d);
                                (r = d - c),
                                    (a = a.map(function(t) {
                                        return t - (f ? c : d);
                                    })),
                                    (i = (f ? -r : 0) + "px");
                            } else i = n;
                        } else a = a.map(j);
                        if ("stroke" === e) {
                            if (
                                !a.some(function(t) {
                                    return t;
                                })
                            )
                                return t;
                            var p = Bn(v.$el);
                            Ve(g, "strokeDasharray", p),
                                "%" === h &&
                                    (a = a.map(function(t) {
                                        return (t * p) / 100;
                                    })),
                                (a = a.reverse()),
                                (e = "strokeDashoffset");
                        }
                        return (
                            (t[e] = {
                                steps: a,
                                unit: h,
                                pos: i,
                                bgPos: n,
                                diff: r,
                            }),
                            t
                        );
                    }, {});
                },
                bgProps: function() {
                    var e = this;
                    return ["bgx", "bgy"].filter(function(t) {
                        return t in e.props;
                    });
                },
                covers: function(t, e) {
                    return (
                        (n = (i = e).style.backgroundSize),
                        (r =
                            "cover" ===
                            Ve(Ve(i, "backgroundSize", ""), "backgroundSize")),
                        (i.style.backgroundSize = n),
                        r
                    );
                    var i, n, r;
                },
            },
            disconnected: function() {
                delete this._image;
            },
            update: {
                read: function(t) {
                    var h = this;
                    if (((t.active = this.matchMedia), t.active)) {
                        if (!t.image && this.covers && this.bgProps.length) {
                            var e = Ve(this.$el, "backgroundImage").replace(
                                /^none|url\(["']?(.+?)["']?\)$/,
                                "$1"
                            );
                            if (e) {
                                var i = new Image();
                                (i.src = e),
                                    (t.image = i).naturalWidth ||
                                        (i.onload = function() {
                                            return h.$emit();
                                        });
                            }
                        }
                        var n = t.image;
                        if (n && n.naturalWidth) {
                            var l = {
                                    width: this.$el.offsetWidth,
                                    height: this.$el.offsetHeight,
                                },
                                u = {
                                    width: n.naturalWidth,
                                    height: n.naturalHeight,
                                },
                                c = rt.cover(u, l);
                            this.bgProps.forEach(function(t) {
                                var e = h.props[t],
                                    i = e.diff,
                                    n = e.bgPos,
                                    r = e.steps,
                                    o = "bgy" === t ? "height" : "width",
                                    s = c[o] - l[o];
                                if (s < i) l[o] = c[o] + i - s;
                                else if (i < s) {
                                    var a = l[o] / wi(n, o, h.$el);
                                    a &&
                                        (h.props[t].steps = r.map(function(t) {
                                            return t - (s - i) / a;
                                        }));
                                }
                                c = rt.cover(u, l);
                            }),
                                (t.dim = c);
                        }
                    }
                },
                write: function(t) {
                    var e = t.dim;
                    t.active
                        ? e &&
                          Ve(this.$el, {
                              backgroundSize: e.width + "px " + e.height + "px",
                              backgroundRepeat: "no-repeat",
                          })
                        : Ve(this.$el, {
                              backgroundSize: "",
                              backgroundRepeat: "",
                          });
                },
                events: ["resize"],
            },
            methods: {
                reset: function() {
                    var i = this;
                    J(this.getCss(0), function(t, e) {
                        return Ve(i.$el, e, "");
                    });
                },
                getCss: function(c) {
                    var d = this.props;
                    return Object.keys(d).reduce(
                        function(t, e) {
                            var i = d[e],
                                n = i.steps,
                                r = i.unit,
                                o = i.pos,
                                s = (function(t, e, i) {
                                    void 0 === i && (i = 2);
                                    var n = Qr(t, e),
                                        r = n[0],
                                        o = n[1],
                                        s = n[2];
                                    return (P(r)
                                        ? r +
                                          Math.abs(r - o) * s * (r < o ? 1 : -1)
                                        : +o
                                    ).toFixed(i);
                                })(n, c);
                            switch (e) {
                                case "x":
                                case "y":
                                    (r = r || "px"),
                                        (t.transform +=
                                            " translate" +
                                            p(e) +
                                            "(" +
                                            j(s).toFixed("px" === r ? 0 : 2) +
                                            r +
                                            ")");
                                    break;
                                case "rotate":
                                    (r = r || "deg"),
                                        (t.transform +=
                                            " rotate(" + (s + r) + ")");
                                    break;
                                case "scale":
                                    t.transform += " scale(" + s + ")";
                                    break;
                                case "bgy":
                                case "bgx":
                                    t["background-position-" + e[2]] =
                                        "calc(" + o + " + " + s + "px)";
                                    break;
                                case "color":
                                case "backgroundColor":
                                case "borderColor":
                                    var a = Qr(n, c),
                                        h = a[0],
                                        l = a[1],
                                        u = a[2];
                                    t[e] =
                                        "rgba(" +
                                        h
                                            .map(function(t, e) {
                                                return (
                                                    (t += u * (l[e] - t)),
                                                    3 === e
                                                        ? j(t)
                                                        : parseInt(t, 10)
                                                );
                                            })
                                            .join(",") +
                                        ")";
                                    break;
                                case "blur":
                                    (r = r || "px"),
                                        (t.filter += " blur(" + (s + r) + ")");
                                    break;
                                case "hue":
                                    (r = r || "deg"),
                                        (t.filter +=
                                            " hue-rotate(" + (s + r) + ")");
                                    break;
                                case "fopacity":
                                    (r = r || "%"),
                                        (t.filter +=
                                            " opacity(" + (s + r) + ")");
                                    break;
                                case "grayscale":
                                case "invert":
                                case "saturate":
                                case "sepia":
                                    (r = r || "%"),
                                        (t.filter +=
                                            " " + e + "(" + (s + r) + ")");
                                    break;
                                default:
                                    t[e] = s;
                            }
                            return t;
                        },
                        { transform: "", filter: "" }
                    );
                },
            },
        };
    function Qr(t, e) {
        var i = t.length - 1,
            n = Math.min(Math.floor(i * e), i - 1),
            r = t.slice(n, n + 2);
        return r.push(1 === e ? 1 : (e % (1 / i)) * i), r;
    }
    var to = {
        mixins: [Zr],
        props: { target: String, viewport: Number, easing: Number },
        data: { target: !1, viewport: 1, easing: 1 },
        computed: {
            target: function(t, e) {
                var i = t.target;
                return (function t(e) {
                    return e
                        ? "offsetTop" in e
                            ? e
                            : t(e.parentNode)
                        : document.body;
                })((i && xt(i, e)) || e);
            },
        },
        update: {
            read: function(t, e) {
                var i = t.percent;
                if (("scroll" !== e && (i = !1), t.active)) {
                    var n,
                        r,
                        o = i;
                    return (
                        (n = Hi(this.target) / (this.viewport || 1)),
                        (r = this.easing),
                        {
                            percent: (i = tt(n * (1 - (r - r * n)))),
                            style: o !== i && this.getCss(i),
                        }
                    );
                }
            },
            write: function(t) {
                var e = t.style;
                t.active ? e && Ve(this.$el, e) : this.reset();
            },
            events: ["scroll", "resize"],
        },
    };
    var eo = {
        update: {
            write: function() {
                if (!this.stack.length && !this.dragging) {
                    var t = this.getValidIndex(this.index);
                    (~this.prevIndex && this.index === t) || this.show(t);
                }
            },
            events: ["resize"],
        },
    };
    function io(t, e, i) {
        var n,
            r = oo(t, e);
        return i
            ? r - ((n = t), si(e).width / 2 - si(n).width / 2)
            : Math.min(r, no(e));
    }
    function no(t) {
        return Math.max(0, ro(t) - si(t).width);
    }
    function ro(t) {
        return ao(t).reduce(function(t, e) {
            return si(e).width + t;
        }, 0);
    }
    function oo(t, e) {
        return (
            (hi(t).left + (ut ? si(t).width - si(e).width : 0)) * (ut ? -1 : 1)
        );
    }
    function so(t, e, i) {
        Kt(t, Jt(e, !1, !1, i));
    }
    function ao(t) {
        return Ot(t);
    }
    var ho = {
            mixins: [hn, jr, eo],
            props: { center: Boolean, sets: Boolean },
            data: {
                center: !1,
                sets: !1,
                attrItem: "uk-slider-item",
                selList: ".uk-slider-items",
                selNav: ".uk-slider-nav",
                clsContainer: "uk-slider-container",
                Transitioner: function(r, n, o, t) {
                    var e = t.center,
                        s = t.easing,
                        a = t.list,
                        h = new oe(),
                        i = r ? io(r, a, e) : io(n, a, e) + si(n).width * o,
                        l = n
                            ? io(n, a, e)
                            : i + si(r).width * o * (ut ? -1 : 1);
                    return {
                        dir: o,
                        show: function(t, e, i) {
                            void 0 === e && (e = 0);
                            var n = i ? "linear" : s;
                            return (
                                (t -= Math.round(t * tt(e, -1, 1))),
                                this.translate(e),
                                r && this.updateTranslates(),
                                (e = r ? e : tt(e, 0, 1)),
                                so(this.getItemIn(), "itemin", {
                                    percent: e,
                                    duration: t,
                                    timing: n,
                                    dir: o,
                                }),
                                r &&
                                    so(this.getItemIn(!0), "itemout", {
                                        percent: 1 - e,
                                        duration: t,
                                        timing: n,
                                        dir: o,
                                    }),
                                Ze.start(
                                    a,
                                    { transform: Or(-l * (ut ? -1 : 1), "px") },
                                    t,
                                    n
                                ).then(h.resolve, et),
                                h.promise
                            );
                        },
                        stop: function() {
                            return Ze.stop(a);
                        },
                        cancel: function() {
                            Ze.cancel(a);
                        },
                        reset: function() {
                            Ve(a, "transform", "");
                        },
                        forward: function(t, e) {
                            return (
                                void 0 === e && (e = this.percent()),
                                Ze.cancel(a),
                                this.show(t, e, !0)
                            );
                        },
                        translate: function(t) {
                            var e = this.getDistance() * o * (ut ? -1 : 1);
                            Ve(
                                a,
                                "transform",
                                Or(
                                    tt(e - e * t - l, -ro(a), si(a).width) *
                                        (ut ? -1 : 1),
                                    "px"
                                )
                            ),
                                this.updateTranslates(),
                                r &&
                                    ((t = tt(t, -1, 1)),
                                    so(this.getItemIn(), "itemtranslatein", {
                                        percent: t,
                                        dir: o,
                                    }),
                                    so(this.getItemIn(!0), "itemtranslateout", {
                                        percent: 1 - t,
                                        dir: o,
                                    }));
                        },
                        percent: function() {
                            return Math.abs(
                                (Ve(a, "transform").split(",")[4] *
                                    (ut ? -1 : 1) +
                                    i) /
                                    (l - i)
                            );
                        },
                        getDistance: function() {
                            return Math.abs(l - i);
                        },
                        getItemIn: function(t) {
                            void 0 === t && (t = !1);
                            var e = this.getActives(),
                                i = Z(ao(a), "offsetLeft"),
                                n = pe(
                                    i,
                                    e[0 < o * (t ? -1 : 1) ? e.length - 1 : 0]
                                );
                            return ~n && i[n + (r && !t ? o : 0)];
                        },
                        getActives: function() {
                            var i = io(r || n, a, e);
                            return Z(
                                ao(a).filter(function(t) {
                                    var e = oo(t, a);
                                    return (
                                        i <= e &&
                                        e + si(t).width <= si(a).width + i
                                    );
                                }),
                                "offsetLeft"
                            );
                        },
                        updateTranslates: function() {
                            var i = this.getActives();
                            ao(a).forEach(function(t) {
                                var e = b(i, t);
                                so(t, "itemtranslate" + (e ? "in" : "out"), {
                                    percent: e ? 1 : 0,
                                    dir: t.offsetLeft <= n.offsetLeft ? 1 : -1,
                                });
                            });
                        },
                    };
                },
            },
            computed: {
                avgWidth: function() {
                    return ro(this.list) / this.length;
                },
                finite: function(t) {
                    return (
                        t.finite ||
                        Math.ceil(ro(this.list)) <
                            si(this.list).width +
                                ao(this.list).reduce(function(t, e) {
                                    return Math.max(t, si(e).width);
                                }, 0) +
                                this.center
                    );
                },
                maxIndex: function() {
                    if (!this.finite || (this.center && !this.sets))
                        return this.length - 1;
                    if (this.center) return K(this.sets);
                    Ve(this.slides, "order", "");
                    for (var t = no(this.list), e = this.length; e--; )
                        if (oo(this.list.children[e], this.list) < t)
                            return Math.min(e + 1, this.length - 1);
                    return 0;
                },
                sets: function(t) {
                    var o = this,
                        e = t.sets,
                        s = si(this.list).width / (this.center ? 2 : 1),
                        a = 0,
                        h = s,
                        l = 0;
                    return (
                        !O(
                            (e =
                                e &&
                                this.slides.reduce(function(t, e, i) {
                                    var n = si(e).width;
                                    if (
                                        a < l + n &&
                                        (!o.center &&
                                            i > o.maxIndex &&
                                            (i = o.maxIndex),
                                        !b(t, i))
                                    ) {
                                        var r = o.slides[i + 1];
                                        o.center && r && n < h - si(r).width / 2
                                            ? (h -= n)
                                            : ((h = s),
                                              t.push(i),
                                              (a =
                                                  l +
                                                  s +
                                                  (o.center ? n / 2 : 0)));
                                    }
                                    return (l += n), t;
                                }, []))
                        ) && e
                    );
                },
                transitionOptions: function() {
                    return { center: this.center, list: this.list };
                },
            },
            connected: function() {
                He(
                    this.$el,
                    this.clsContainer,
                    !Ce("." + this.clsContainer, this.$el)
                );
            },
            update: {
                write: function() {
                    var i = this;
                    Ne(
                        "[" + this.attrItem + "],[data-" + this.attrItem + "]",
                        this.$el
                    ).forEach(function(t) {
                        var e = ht(t, i.attrItem);
                        i.maxIndex &&
                            He(
                                t,
                                "uk-hidden",
                                B(e) &&
                                    ((i.sets && !b(i.sets, j(e))) ||
                                        e > i.maxIndex)
                            );
                    }),
                        !this.length ||
                            this.dragging ||
                            this.stack.length ||
                            this._translate(1);
                },
                events: ["resize"],
            },
            events: {
                beforeitemshow: function(t) {
                    !this.dragging &&
                        this.sets &&
                        this.stack.length < 2 &&
                        !b(this.sets, this.index) &&
                        (this.index = this.getValidIndex());
                    var e = Math.abs(
                        this.index -
                            this.prevIndex +
                            ((0 < this.dir && this.index < this.prevIndex) ||
                            (this.dir < 0 && this.index > this.prevIndex)
                                ? (this.maxIndex + 1) * this.dir
                                : 0)
                    );
                    if (!this.dragging && 1 < e) {
                        for (var i = 0; i < e; i++)
                            this.stack.splice(
                                1,
                                0,
                                0 < this.dir ? "next" : "previous"
                            );
                        t.preventDefault();
                    } else
                        (this.duration =
                            Wr(this.avgWidth / this.velocity) *
                            (si(
                                this.dir < 0 || !this.slides[this.prevIndex]
                                    ? this.slides[this.index]
                                    : this.slides[this.prevIndex]
                            ).width /
                                this.avgWidth)),
                            this.reorder();
                },
                itemshow: function() {
                    H(this.prevIndex) ||
                        ze(this._getTransitioner().getItemIn(), this.clsActive);
                },
                itemshown: function() {
                    var e = this,
                        i = this._getTransitioner(this.index).getActives();
                    this.slides.forEach(function(t) {
                        return He(t, e.clsActive, b(i, t));
                    }),
                        (this.sets && !b(this.sets, j(this.index))) ||
                            this.slides.forEach(function(t) {
                                return He(t, e.clsActivated, b(i, t));
                            });
                },
            },
            methods: {
                reorder: function() {
                    var i = this;
                    if ((Ve(this.slides, "order", ""), !this.finite)) {
                        var n =
                            0 < this.dir && this.slides[this.prevIndex]
                                ? this.prevIndex
                                : this.index;
                        if (
                            (this.slides.forEach(function(t, e) {
                                return Ve(
                                    t,
                                    "order",
                                    0 < i.dir && e < n
                                        ? 1
                                        : i.dir < 0 && e >= i.index
                                        ? -1
                                        : ""
                                );
                            }),
                            this.center)
                        )
                            for (
                                var t = this.slides[n],
                                    e =
                                        si(this.list).width / 2 -
                                        si(t).width / 2,
                                    r = 0;
                                0 < e;

                            ) {
                                var o = this.getIndex(--r + n, n),
                                    s = this.slides[o];
                                Ve(s, "order", n < o ? -2 : -1),
                                    (e -= si(s).width);
                            }
                    }
                },
                getValidIndex: function(t, e) {
                    if (
                        (void 0 === t && (t = this.index),
                        void 0 === e && (e = this.prevIndex),
                        (t = this.getIndex(t, e)),
                        !this.sets)
                    )
                        return t;
                    var i;
                    do {
                        if (b(this.sets, t)) return t;
                        (i = t), (t = this.getIndex(t + this.dir, e));
                    } while (t !== i);
                    return t;
                },
            },
        },
        lo = {
            mixins: [Zr],
            data: { selItem: "!li" },
            computed: {
                item: function(t, e) {
                    return xt(t.selItem, e);
                },
            },
            events: [
                {
                    name: "itemshown",
                    self: !0,
                    el: function() {
                        return this.item;
                    },
                    handler: function() {
                        Ve(this.$el, this.getCss(0.5));
                    },
                },
                {
                    name: "itemin itemout",
                    self: !0,
                    el: function() {
                        return this.item;
                    },
                    handler: function(t) {
                        var e = t.type,
                            i = t.detail,
                            n = i.percent,
                            r = i.duration,
                            o = i.timing,
                            s = i.dir;
                        Ze.cancel(this.$el),
                            Ve(this.$el, this.getCss(co(e, s, n))),
                            Ze.start(
                                this.$el,
                                this.getCss(uo(e) ? 0.5 : 0 < s ? 1 : 0),
                                r,
                                o
                            ).catch(et);
                    },
                },
                {
                    name: "transitioncanceled transitionend",
                    self: !0,
                    el: function() {
                        return this.item;
                    },
                    handler: function() {
                        Ze.cancel(this.$el);
                    },
                },
                {
                    name: "itemtranslatein itemtranslateout",
                    self: !0,
                    el: function() {
                        return this.item;
                    },
                    handler: function(t) {
                        var e = t.type,
                            i = t.detail,
                            n = i.percent,
                            r = i.dir;
                        Ze.cancel(this.$el),
                            Ve(this.$el, this.getCss(co(e, r, n)));
                    },
                },
            ],
        };
    function uo(t) {
        return u(t, "in");
    }
    function co(t, e, i) {
        return (i /= 2), uo(t) ? (e < 0 ? 1 - i : i) : e < 0 ? i : 1 - i;
    }
    var fo,
        po,
        mo = G({}, Pr, {
            fade: {
                show: function() {
                    return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
                },
                percent: function(t) {
                    return 1 - Ve(t, "opacity");
                },
                translate: function(t) {
                    return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }];
                },
            },
            scale: {
                show: function() {
                    return [
                        { opacity: 0, transform: Hr(1.5), zIndex: 0 },
                        { zIndex: -1 },
                    ];
                },
                percent: function(t) {
                    return 1 - Ve(t, "opacity");
                },
                translate: function(t) {
                    return [
                        {
                            opacity: 1 - t,
                            transform: Hr(1 + 0.5 * t),
                            zIndex: 0,
                        },
                        { zIndex: -1 },
                    ];
                },
            },
            pull: {
                show: function(t) {
                    return t < 0
                        ? [
                              { transform: Or(30), zIndex: -1 },
                              { transform: Or(), zIndex: 0 },
                          ]
                        : [
                              { transform: Or(-100), zIndex: 0 },
                              { transform: Or(), zIndex: -1 },
                          ];
                },
                percent: function(t, e, i) {
                    return i < 0 ? 1 - Br(e) : Br(t);
                },
                translate: function(t, e) {
                    return e < 0
                        ? [
                              { transform: Or(30 * t), zIndex: -1 },
                              { transform: Or(-100 * (1 - t)), zIndex: 0 },
                          ]
                        : [
                              { transform: Or(100 * -t), zIndex: 0 },
                              { transform: Or(30 * (1 - t)), zIndex: -1 },
                          ];
                },
            },
            push: {
                show: function(t) {
                    return t < 0
                        ? [
                              { transform: Or(100), zIndex: 0 },
                              { transform: Or(), zIndex: -1 },
                          ]
                        : [
                              { transform: Or(-30), zIndex: -1 },
                              { transform: Or(), zIndex: 0 },
                          ];
                },
                percent: function(t, e, i) {
                    return 0 < i ? 1 - Br(e) : Br(t);
                },
                translate: function(t, e) {
                    return e < 0
                        ? [
                              { transform: Or(100 * t), zIndex: 0 },
                              { transform: Or(-30 * (1 - t)), zIndex: -1 },
                          ]
                        : [
                              { transform: Or(-30 * t), zIndex: -1 },
                              { transform: Or(100 * (1 - t)), zIndex: 0 },
                          ];
                },
            },
        }),
        go = {
            mixins: [hn, Vr, eo],
            props: { ratio: String, minHeight: Number, maxHeight: Number },
            data: {
                ratio: "16:9",
                minHeight: !1,
                maxHeight: !1,
                selList: ".uk-slideshow-items",
                attrItem: "uk-slideshow-item",
                selNav: ".uk-slideshow-nav",
                Animations: mo,
            },
            update: {
                read: function() {
                    var t = this.ratio.split(":").map(Number),
                        e = t[0],
                        i = t[1];
                    return (
                        (i = (i * this.list.offsetWidth) / e || 0),
                        this.minHeight && (i = Math.max(this.minHeight, i)),
                        this.maxHeight && (i = Math.min(this.maxHeight, i)),
                        { height: i - fi(this.list, "height", "content-box") }
                    );
                },
                write: function(t) {
                    var e = t.height;
                    0 < e && Ve(this.list, "minHeight", e);
                },
                events: ["resize"],
            },
        },
        vo = {
            mixins: [hn, Ar],
            props: {
                group: String,
                threshold: Number,
                clsItem: String,
                clsPlaceholder: String,
                clsDrag: String,
                clsDragState: String,
                clsBase: String,
                clsNoDrag: String,
                clsEmpty: String,
                clsCustom: String,
                handle: String,
            },
            data: {
                group: !1,
                threshold: 5,
                clsItem: "uk-sortable-item",
                clsPlaceholder: "uk-sortable-placeholder",
                clsDrag: "uk-sortable-drag",
                clsDragState: "uk-drag",
                clsBase: "uk-sortable",
                clsNoDrag: "uk-sortable-nodrag",
                clsEmpty: "uk-sortable-empty",
                clsCustom: "",
                handle: !1,
                pos: {},
            },
            created: function() {
                var i = this;
                ["init", "start", "move", "end"].forEach(function(t) {
                    var e = i[t];
                    i[t] = function(t) {
                        (i.scrollY = window.pageYOffset),
                            G(i.pos, re(t, "page")),
                            e(t);
                    };
                });
            },
            events: { name: pt, passive: !1, handler: "init" },
            update: {
                write: function() {
                    if (
                        (this.clsEmpty &&
                            He(this.$el, this.clsEmpty, O(this.$el.children)),
                        Ve(
                            this.handle
                                ? Ne(this.handle, this.$el)
                                : this.$el.children,
                            { touchAction: "none", userSelect: "none" }
                        ),
                        this.drag)
                    ) {
                        var t = si(window),
                            e = t.right,
                            i = t.bottom;
                        si(this.drag, {
                            top: tt(
                                this.pos.y + this.origin.top,
                                0,
                                i - this.drag.offsetHeight
                            ),
                            left: tt(
                                this.pos.x + this.origin.left,
                                0,
                                e - this.drag.offsetWidth
                            ),
                        });
                    }
                },
            },
            methods: {
                init: function(t) {
                    var e = t.target,
                        i = t.button,
                        n = t.defaultPrevented,
                        r = Ot(this.$el).filter(function(t) {
                            return Yt(e, t);
                        })[0];
                    !r ||
                        n ||
                        0 < i ||
                        Rt(e) ||
                        Yt(e, "." + this.clsNoDrag) ||
                        (this.handle && !Yt(e, this.handle)) ||
                        (t.preventDefault(),
                        (this.touched = [this]),
                        (this.placeholder = r),
                        (this.origin = G(
                            { target: e, index: pe(r) },
                            this.pos
                        )),
                        Ut(document, mt, this.move),
                        Ut(document, gt, this.end),
                        Ut(window, "scroll", this.scroll),
                        this.threshold || this.start(t));
                },
                start: function(t) {
                    var e, i, n;
                    this.drag =
                        ((e = this.$container),
                        (i = this.placeholder),
                        Ve(
                            (n = we(
                                e,
                                i.outerHTML.replace(
                                    /(^<)li|li(\/>$)/g,
                                    "$1div$2"
                                )
                            )),
                            G(
                                {
                                    boxSizing: "border-box",
                                    width: i.offsetWidth,
                                    height: i.offsetHeight,
                                    overflow: "hidden",
                                },
                                Ve(i, [
                                    "paddingLeft",
                                    "paddingRight",
                                    "paddingTop",
                                    "paddingBottom",
                                ])
                            )
                        ),
                        ui(n.firstElementChild, ui(i.firstElementChild)),
                        n);
                    var r,
                        o = si(this.placeholder),
                        s = o.left,
                        a = o.top;
                    G(this.origin, {
                        left: s - this.pos.x,
                        top: a - this.pos.y,
                    }),
                        ze(this.drag, this.clsDrag, this.clsCustom),
                        ze(this.placeholder, this.clsPlaceholder),
                        ze(this.$el.children, this.clsItem),
                        ze(document.documentElement, this.clsDragState),
                        Kt(this.$el, "start", [this, this.placeholder]),
                        (r = this.pos),
                        (fo = setInterval(function() {
                            var t = r.x,
                                a = r.y;
                            Li(
                                document.elementFromPoint(
                                    t - window.pageXOffset,
                                    a - window.pageYOffset
                                )
                            ).some(function(t) {
                                var e = t.scrollTop,
                                    i = t.scrollHeight,
                                    n = si(Fi(t)),
                                    r = n.top,
                                    o = n.bottom,
                                    s = n.height;
                                if (r < a && a < r + 30) e -= 5;
                                else {
                                    if (!(a < o && o - 30 < a)) return;
                                    e += 5;
                                }
                                if (0 < e && e < i - s) return Bi(t, e), !0;
                            });
                        }, 15)),
                        this.move(t);
                },
                move: function(t) {
                    if (this.drag) {
                        this.$emit();
                        var e =
                                "mousemove" === t.type
                                    ? t.target
                                    : document.elementFromPoint(
                                          this.pos.x - window.pageXOffset,
                                          this.pos.y - window.pageYOffset
                                      ),
                            i = this.getSortable(e),
                            n = this.getSortable(this.placeholder),
                            r = i !== n;
                        if (
                            i &&
                            !Yt(e, this.placeholder) &&
                            (!r || (i.group && i.group === n.group))
                        ) {
                            if (
                                ((e =
                                    (i.$el === e.parentNode && e) ||
                                    Ot(i.$el).filter(function(t) {
                                        return Yt(e, t);
                                    })[0]),
                                r)
                            )
                                n.remove(this.placeholder);
                            else if (!e) return;
                            i.insert(this.placeholder, e),
                                b(this.touched, i) || this.touched.push(i);
                        }
                    } else
                        (Math.abs(this.pos.x - this.origin.x) >
                            this.threshold ||
                            Math.abs(this.pos.y - this.origin.y) >
                                this.threshold) &&
                            this.start(t);
                },
                end: function(t) {
                    if (
                        (Xt(document, mt, this.move),
                        Xt(document, gt, this.end),
                        Xt(window, "scroll", this.scroll),
                        this.drag)
                    ) {
                        clearInterval(fo);
                        var e = this.getSortable(this.placeholder);
                        this === e
                            ? this.origin.index !== pe(this.placeholder) &&
                              Kt(this.$el, "moved", [this, this.placeholder])
                            : (Kt(e.$el, "added", [e, this.placeholder]),
                              Kt(this.$el, "removed", [
                                  this,
                                  this.placeholder,
                              ])),
                            Kt(this.$el, "stop", [this, this.placeholder]),
                            ke(this.drag),
                            (this.drag = null);
                        var i = this.touched
                            .map(function(t) {
                                return t.clsPlaceholder + " " + t.clsItem;
                            })
                            .join(" ");
                        this.touched.forEach(function(t) {
                            return De(t.$el.children, i);
                        }),
                            De(document.documentElement, this.clsDragState);
                    } else "touchend" === t.type && t.target.click();
                },
                scroll: function() {
                    var t = window.pageYOffset;
                    t !== this.scrollY &&
                        ((this.pos.y += t - this.scrollY),
                        (this.scrollY = t),
                        this.$emit());
                },
                insert: function(i, n) {
                    var r = this;
                    ze(this.$el.children, this.clsItem);
                    function t() {
                        var t, e;
                        n
                            ? !Yt(i, r.$el) ||
                              ((e = n),
                              (t = i).parentNode === e.parentNode &&
                                  pe(t) > pe(e))
                                ? be(n, i)
                                : xe(n, i)
                            : we(r.$el, i);
                    }
                    this.animation ? this.animate(t) : t();
                },
                remove: function(t) {
                    Yt(t, this.$el) &&
                        (Ve(this.handle ? Ne(this.handle, t) : t, {
                            touchAction: "",
                            userSelect: "",
                        }),
                        this.animation
                            ? this.animate(function() {
                                  return ke(t);
                              })
                            : ke(t));
                },
                getSortable: function(t) {
                    return (
                        t &&
                        (this.$getComponent(t, "sortable") ||
                            this.getSortable(t.parentNode))
                    );
                },
            },
        };
    var wo = [],
        bo = {
            mixins: [or, ln, mn],
            args: "title",
            props: { delay: Number, title: String },
            data: {
                pos: "top",
                title: "",
                delay: 0,
                animation: ["uk-animation-scale-up"],
                duration: 100,
                cls: "uk-active",
                clsPos: "uk-tooltip",
            },
            beforeConnect: function() {
                (this._hasTitle = st(this.$el, "title")),
                    ot(this.$el, { title: "", "aria-expanded": !1 });
            },
            disconnected: function() {
                this.hide(),
                    ot(this.$el, {
                        title: this._hasTitle ? this.title : null,
                        "aria-expanded": null,
                    });
            },
            methods: {
                show: function() {
                    var e = this;
                    !this.isActive() &&
                        this.title &&
                        (wo.forEach(function(t) {
                            return t.hide();
                        }),
                        wo.push(this),
                        (this._unbind = Ut(document, gt, function(t) {
                            return !Yt(t.target, e.$el) && e.hide();
                        })),
                        clearTimeout(this.showTimer),
                        (this.showTimer = setTimeout(function() {
                            e._show(),
                                (e.hideTimer = setInterval(function() {
                                    Wt(e.$el) || e.hide();
                                }, 150));
                        }, this.delay)));
                },
                hide: function() {
                    this.isActive() &&
                        !Mt(this.$el, "input:focus") &&
                        (wo.splice(wo.indexOf(this), 1),
                        clearTimeout(this.showTimer),
                        clearInterval(this.hideTimer),
                        ot(this.$el, "aria-expanded", !1),
                        this.toggleElement(this.tooltip, !1),
                        this.tooltip && ke(this.tooltip),
                        (this.tooltip = !1),
                        this._unbind());
                },
                _show: function() {
                    (this.tooltip = we(
                        this.container,
                        '<div class="' +
                            this.clsPos +
                            '" aria-expanded="true" aria-hidden> <div class="' +
                            this.clsPos +
                            '-inner">' +
                            this.title +
                            "</div> </div>"
                    )),
                        this.positionAt(this.tooltip, this.$el),
                        (this.origin =
                            "y" === this.getAxis()
                                ? vi(this.dir) + "-" + this.align
                                : this.align + "-" + vi(this.dir)),
                        this.toggleElement(this.tooltip, !0);
                },
                isActive: function() {
                    return b(wo, this);
                },
            },
            events:
                (((po = { focus: "show", blur: "hide" })[
                    vt + " " + wt
                ] = function(t) {
                    ne(t) || (t.type === vt ? this.show() : this.hide());
                }),
                (po[pt] = function(t) {
                    ne(t) && (this.isActive() ? this.hide() : this.show());
                }),
                po),
        },
        xo = {
            props: {
                allow: String,
                clsDragover: String,
                concurrent: Number,
                maxSize: Number,
                method: String,
                mime: String,
                msgInvalidMime: String,
                msgInvalidName: String,
                msgInvalidSize: String,
                multiple: Boolean,
                name: String,
                params: Object,
                type: String,
                url: String,
            },
            data: {
                allow: !1,
                clsDragover: "uk-dragover",
                concurrent: 1,
                maxSize: 0,
                method: "POST",
                mime: !1,
                msgInvalidMime: "Invalid File Type: %s",
                msgInvalidName: "Invalid File Name: %s",
                msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
                multiple: !1,
                name: "files[]",
                params: {},
                type: "",
                url: "",
                abort: et,
                beforeAll: et,
                beforeSend: et,
                complete: et,
                completeAll: et,
                error: et,
                fail: et,
                load: et,
                loadEnd: et,
                loadStart: et,
                progress: et,
            },
            events: {
                change: function(t) {
                    Mt(t.target, 'input[type="file"]') &&
                        (t.preventDefault(),
                        t.target.files && this.upload(t.target.files),
                        (t.target.value = ""));
                },
                drop: function(t) {
                    ko(t);
                    var e = t.dataTransfer;
                    e &&
                        e.files &&
                        (De(this.$el, this.clsDragover), this.upload(e.files));
                },
                dragenter: function(t) {
                    ko(t);
                },
                dragover: function(t) {
                    ko(t), ze(this.$el, this.clsDragover);
                },
                dragleave: function(t) {
                    ko(t), De(this.$el, this.clsDragover);
                },
            },
            methods: {
                upload: function(t) {
                    var n = this;
                    if (t.length) {
                        Kt(this.$el, "upload", [t]);
                        for (var e = 0; e < t.length; e++) {
                            if (this.maxSize && 1e3 * this.maxSize < t[e].size)
                                return void this.fail(
                                    this.msgInvalidSize.replace(
                                        "%s",
                                        this.maxSize
                                    )
                                );
                            if (this.allow && !yo(this.allow, t[e].name))
                                return void this.fail(
                                    this.msgInvalidName.replace(
                                        "%s",
                                        this.allow
                                    )
                                );
                            if (this.mime && !yo(this.mime, t[e].type))
                                return void this.fail(
                                    this.msgInvalidMime.replace("%s", this.mime)
                                );
                        }
                        this.multiple || (t = [t[0]]), this.beforeAll(this, t);
                        var r = (function(t, e) {
                                for (var i = [], n = 0; n < t.length; n += e) {
                                    for (var r = [], o = 0; o < e; o++)
                                        r.push(t[n + o]);
                                    i.push(r);
                                }
                                return i;
                            })(t, this.concurrent),
                            o = function(t) {
                                var e = new FormData();
                                for (var i in (t.forEach(function(t) {
                                    return e.append(n.name, t);
                                }),
                                n.params))
                                    e.append(i, n.params[i]);
                                ce(n.url, {
                                    data: e,
                                    method: n.method,
                                    responseType: n.type,
                                    beforeSend: function(t) {
                                        var e = t.xhr;
                                        e.upload &&
                                            Ut(
                                                e.upload,
                                                "progress",
                                                n.progress
                                            ),
                                            [
                                                "loadStart",
                                                "load",
                                                "loadEnd",
                                                "abort",
                                            ].forEach(function(t) {
                                                return Ut(
                                                    e,
                                                    t.toLowerCase(),
                                                    n[t]
                                                );
                                            }),
                                            n.beforeSend(t);
                                    },
                                }).then(
                                    function(t) {
                                        n.complete(t),
                                            r.length
                                                ? o(r.shift())
                                                : n.completeAll(t);
                                    },
                                    function(t) {
                                        return n.error(t);
                                    }
                                );
                            };
                        o(r.shift());
                    }
                },
            },
        };
    function yo(t, e) {
        return e.match(
            new RegExp(
                "^" +
                    t
                        .replace(/\//g, "\\/")
                        .replace(/\*\*/g, "(\\/[^\\/]+)*")
                        .replace(/\*/g, "[^\\/]+")
                        .replace(/((?!\\))\?/g, "$1.") +
                    "$",
                "i"
            )
        );
    }
    function ko(t) {
        t.preventDefault(), t.stopPropagation();
    }
    var $o,
        Io,
        So,
        To = Object.freeze({
            __proto__: null,
            Countdown: Sr,
            Filter: Mr,
            Lightbox: Ur,
            LightboxPanel: Rr,
            Notification: Kr,
            Parallax: to,
            Slider: ho,
            SliderParallax: lo,
            Slideshow: go,
            SlideshowParallax: lo,
            Sortable: vo,
            Tooltip: bo,
            Upload: xo,
        });
    function Eo(t) {
        var e = t.target;
        ("attributes" !== t.type
            ? (function(t) {
                  for (
                      var e = t.addedNodes, i = t.removedNodes, n = 0;
                      n < e.length;
                      n++
                  )
                      _e(e[n], Io);
                  for (var r = 0; r < i.length; r++) _e(i[r], So);
                  return !0;
              })(t)
            : (function(t) {
                  var e = t.target,
                      i = t.attributeName;
                  if ("href" === i) return !0;
                  var n = Ri(i);
                  if (!(n && n in $o)) return;
                  if (st(e, i)) return $o[n](e), !0;
                  var r = $o.getComponent(e, n);
                  if (r) return r.$destroy(), !0;
              })(t)) && $o.update(e);
    }
    function Ao(t, e) {
        qi.component(e, t);
    }
    return (
        J(Ir, Ao),
        J(To, Ao),
        qi.use(function(r) {
            fe(function() {
                var e;
                r.update(),
                    Ut(window, "load resize", function() {
                        return r.update(null, "resize");
                    }),
                    Ut(
                        document,
                        "loadedmetadata load",
                        function(t) {
                            var e = t.target;
                            return r.update(e, "resize");
                        },
                        !0
                    ),
                    Ut(
                        window,
                        "scroll",
                        function(t) {
                            e ||
                                ((e = !0),
                                xi.write(function() {
                                    return (e = !1);
                                }),
                                r.update(null, t.type));
                        },
                        { passive: !0, capture: !0 }
                    );
                var i,
                    n = 0;
                Ut(
                    document,
                    "animationstart",
                    function(t) {
                        var e = t.target;
                        (Ve(e, "animationName") || "").match(
                            /^uk-.*(left|right)/
                        ) &&
                            (n++,
                            Ve(document.body, "overflowX", "hidden"),
                            setTimeout(function() {
                                --n || Ve(document.body, "overflowX", "");
                            }, Y(Ve(e, "animationDuration")) + 100));
                    },
                    !0
                ),
                    Ut(
                        document,
                        pt,
                        function(t) {
                            if ((i && i(), ne(t))) {
                                var s = re(t),
                                    a =
                                        "tagName" in t.target
                                            ? t.target
                                            : t.target.parentNode;
                                (i = Gt(document, gt + " " + bt, function(t) {
                                    var e = re(t),
                                        r = e.x,
                                        o = e.y;
                                    ((a && r && 100 < Math.abs(s.x - r)) ||
                                        (o && 100 < Math.abs(s.y - o))) &&
                                        setTimeout(function() {
                                            var t, e, i, n;
                                            Kt(a, "swipe"),
                                                Kt(
                                                    a,
                                                    "swipe" +
                                                        ((t = s.x),
                                                        (e = s.y),
                                                        (i = r),
                                                        (n = o),
                                                        Math.abs(t - i) >=
                                                        Math.abs(e - n)
                                                            ? 0 < t - i
                                                                ? "Left"
                                                                : "Right"
                                                            : 0 < e - n
                                                            ? "Up"
                                                            : "Down")
                                                );
                                        });
                                })),
                                    "touchstart" == pt &&
                                        (Ve(document.body, "cursor", "pointer"),
                                        Gt(document, gt + " " + bt, function() {
                                            return setTimeout(function() {
                                                return Ve(
                                                    document.body,
                                                    "cursor",
                                                    ""
                                                );
                                            }, 50);
                                        }));
                            }
                        },
                        { passive: !0 }
                    );
            });
        }),
        (Io = ($o = qi).connect),
        (So = $o.disconnect),
        "MutationObserver" in window &&
            xi.read(function() {
                document.body && _e(document.body, Io);
                new MutationObserver(function(t) {
                    return t.forEach(Eo);
                }).observe(document, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0,
                    attributes: !0,
                }),
                    ($o._initialized = !0);
            }),
        qi
    );
});

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backdropfilter-backgroundblendmode-cssgradients-cssgrid_cssgridlegacy-csspositionsticky-hairline-objectfit-webp-setclasses !*/
!(function(e, n, t) {
    function r(e, n) {
        return typeof e === n;
    }
    function i() {
        var e, n, t, i, o, s, a;
        for (var l in b)
            if (b.hasOwnProperty(l)) {
                if (
                    ((e = []),
                    (n = b[l]),
                    n.name &&
                        (e.push(n.name.toLowerCase()),
                        n.options &&
                            n.options.aliases &&
                            n.options.aliases.length))
                )
                    for (t = 0; t < n.options.aliases.length; t++)
                        e.push(n.options.aliases[t].toLowerCase());
                for (
                    i = r(n.fn, "function") ? n.fn() : n.fn, o = 0;
                    o < e.length;
                    o++
                )
                    (s = e[o]),
                        (a = s.split(".")),
                        1 === a.length
                            ? (Modernizr[a[0]] = i)
                            : (!Modernizr[a[0]] ||
                                  Modernizr[a[0]] instanceof Boolean ||
                                  (Modernizr[a[0]] = new Boolean(
                                      Modernizr[a[0]]
                                  )),
                              (Modernizr[a[0]][a[1]] = i)),
                        w.push((i ? "" : "no-") + a.join("-"));
            }
    }
    function o(e) {
        var n = C.className,
            t = Modernizr._config.classPrefix || "";
        if ((x && (n = n.baseVal), Modernizr._config.enableJSClass)) {
            var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(r, "$1" + t + "js$2");
        }
        Modernizr._config.enableClasses &&
            ((n += " " + t + e.join(" " + t)),
            x ? (C.className.baseVal = n) : (C.className = n));
    }
    function s() {
        return "function" != typeof n.createElement
            ? n.createElement(arguments[0])
            : x
            ? n.createElementNS.call(
                  n,
                  "http://www.w3.org/2000/svg",
                  arguments[0]
              )
            : n.createElement.apply(n, arguments);
    }
    function a(e) {
        return e
            .replace(/([a-z])-([a-z])/g, function(e, n, t) {
                return n + t.toUpperCase();
            })
            .replace(/^-/, "");
    }
    function l() {
        var e = n.body;
        return e || ((e = s(x ? "svg" : "body")), (e.fake = !0)), e;
    }
    function f(e, t, r, i) {
        var o,
            a,
            f,
            u,
            A = "modernizr",
            d = s("div"),
            c = l();
        if (parseInt(r, 10))
            for (; r--; )
                (f = s("div")),
                    (f.id = i ? i[r] : A + (r + 1)),
                    d.appendChild(f);
        return (
            (o = s("style")),
            (o.type = "text/css"),
            (o.id = "s" + A),
            (c.fake ? c : d).appendChild(o),
            c.appendChild(d),
            o.styleSheet
                ? (o.styleSheet.cssText = e)
                : o.appendChild(n.createTextNode(e)),
            (d.id = A),
            c.fake &&
                ((c.style.background = ""),
                (c.style.overflow = "hidden"),
                (u = C.style.overflow),
                (C.style.overflow = "hidden"),
                C.appendChild(c)),
            (a = t(d, e)),
            c.fake
                ? (c.parentNode.removeChild(c),
                  (C.style.overflow = u),
                  C.offsetHeight)
                : d.parentNode.removeChild(d),
            !!a
        );
    }
    function u(e, n) {
        return !!~("" + e).indexOf(n);
    }
    function A(e, n) {
        return function() {
            return e.apply(n, arguments);
        };
    }
    function d(e, n, t) {
        var i;
        for (var o in e)
            if (e[o] in n)
                return t === !1
                    ? e[o]
                    : ((i = n[e[o]]), r(i, "function") ? A(i, t || n) : i);
        return !1;
    }
    function c(e) {
        return e
            .replace(/([A-Z])/g, function(e, n) {
                return "-" + n.toLowerCase();
            })
            .replace(/^ms-/, "-ms-");
    }
    function p(n, t, r) {
        var i;
        if ("getComputedStyle" in e) {
            i = getComputedStyle.call(e, n, t);
            var o = e.console;
            if (null !== i) r && (i = i.getPropertyValue(r));
            else if (o) {
                var s = o.error ? "error" : "log";
                o[s].call(
                    o,
                    "getComputedStyle returning null, its possible modernizr test results are inaccurate"
                );
            }
        } else i = !t && n.currentStyle && n.currentStyle[r];
        return i;
    }
    function g(n, r) {
        var i = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; i--; ) if (e.CSS.supports(c(n[i]), r)) return !0;
            return !1;
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; i--; ) o.push("(" + c(n[i]) + ":" + r + ")");
            return (
                (o = o.join(" or ")),
                f(
                    "@supports (" +
                        o +
                        ") { #modernizr { position: absolute; } }",
                    function(e) {
                        return "absolute" == p(e, null, "position");
                    }
                )
            );
        }
        return t;
    }
    function m(e, n, i, o) {
        function l() {
            A && (delete E.style, delete E.modElem);
        }
        if (((o = r(o, "undefined") ? !1 : o), !r(i, "undefined"))) {
            var f = g(e, i);
            if (!r(f, "undefined")) return f;
        }
        for (
            var A, d, c, p, m, h = ["modernizr", "tspan", "samp"];
            !E.style && h.length;

        )
            (A = !0), (E.modElem = s(h.shift())), (E.style = E.modElem.style);
        for (c = e.length, d = 0; c > d; d++)
            if (
                ((p = e[d]),
                (m = E.style[p]),
                u(p, "-") && (p = a(p)),
                E.style[p] !== t)
            ) {
                if (o || r(i, "undefined")) return l(), "pfx" == n ? p : !0;
                try {
                    E.style[p] = i;
                } catch (v) {}
                if (E.style[p] != m) return l(), "pfx" == n ? p : !0;
            }
        return l(), !1;
    }
    function h(e, n, t, i, o) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + k.join(s + " ") + s).split(" ");
        return r(n, "string") || r(n, "undefined")
            ? m(a, n, i, o)
            : ((a = (e + " " + U.join(s + " ") + s).split(" ")), d(a, n, t));
    }
    function v(e, n, r) {
        return h(e, t, t, n, r);
    }
    function y(e, n) {
        if ("object" == typeof e) for (var t in e) j(e, t) && y(t, e[t]);
        else {
            e = e.toLowerCase();
            var r = e.split("."),
                i = Modernizr[r[0]];
            if ((2 == r.length && (i = i[r[1]]), "undefined" != typeof i))
                return Modernizr;
            (n = "function" == typeof n ? n() : n),
                1 == r.length
                    ? (Modernizr[r[0]] = n)
                    : (!Modernizr[r[0]] ||
                          Modernizr[r[0]] instanceof Boolean ||
                          (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
                      (Modernizr[r[0]][r[1]] = n)),
                o([(n && 0 != n ? "" : "no-") + r.join("-")]),
                Modernizr._trigger(e, n);
        }
        return Modernizr;
    }
    var w = [],
        b = [],
        _ = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0,
            },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() {
                    n(t[e]);
                }, 0);
            },
            addTest: function(e, n, t) {
                b.push({ name: e, fn: n, options: t });
            },
            addAsyncTest: function(e) {
                b.push({ name: null, fn: e });
            },
        },
        Modernizr = function() {};
    (Modernizr.prototype = _), (Modernizr = new Modernizr());
    var C = n.documentElement,
        x = "svg" === C.nodeName.toLowerCase(),
        S = _._config.usePrefixes
            ? " -webkit- -moz- -o- -ms- ".split(" ")
            : ["", ""];
    (_._prefixes = S),
        Modernizr.addTest("cssgradients", function() {
            for (
                var e,
                    n = "background-image:",
                    t =
                        "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                    r = "",
                    i = 0,
                    o = S.length - 1;
                o > i;
                i++
            )
                (e = 0 === i ? "to " : ""),
                    (r +=
                        n +
                        S[i] +
                        "linear-gradient(" +
                        e +
                        "left top, #9f9, white);");
            Modernizr._config.usePrefixes && (r += n + "-webkit-" + t);
            var a = s("a"),
                l = a.style;
            return (
                (l.cssText = r),
                ("" + l.backgroundImage).indexOf("gradient") > -1
            );
        }),
        Modernizr.addTest("csspositionsticky", function() {
            var e = "position:",
                n = "sticky",
                t = s("a"),
                r = t.style;
            return (
                (r.cssText = e + S.join(n + ";" + e).slice(0, -e.length)),
                -1 !== r.position.indexOf(n)
            );
        });
    var T = (_.testStyles = f);
    Modernizr.addTest("hairline", function() {
        return T("#modernizr {border:.5px solid transparent}", function(e) {
            return 1 === e.offsetHeight;
        });
    });
    var B = "Moz O ms Webkit",
        k = _._config.usePrefixes ? B.split(" ") : [];
    _._cssomPrefixes = k;
    var Q = function(n) {
        var r,
            i = S.length,
            o = e.CSSRule;
        if ("undefined" == typeof o) return t;
        if (!n) return !1;
        if (
            ((n = n.replace(/^@/, "")),
            (r = n.replace(/-/g, "_").toUpperCase() + "_RULE"),
            r in o)
        )
            return "@" + n;
        for (var s = 0; i > s; s++) {
            var a = S[s],
                l = a.toUpperCase() + "_" + r;
            if (l in o) return "@-" + a.toLowerCase() + "-" + n;
        }
        return !1;
    };
    _.atRule = Q;
    var U = _._config.usePrefixes ? B.toLowerCase().split(" ") : [];
    _._domPrefixes = U;
    var R = { elem: s("modernizr") };
    Modernizr._q.push(function() {
        delete R.elem;
    });
    var E = { style: R.elem.style };
    Modernizr._q.unshift(function() {
        delete E.style;
    }),
        (_.testAllProps = h),
        (_.testAllProps = v),
        Modernizr.addTest("backdropfilter", v("backdropFilter")),
        Modernizr.addTest("cssgridlegacy", v("grid-columns", "10px", !0)),
        Modernizr.addTest("cssgrid", v("grid-template-rows", "none", !0));
    var P = (_.prefixed = function(e, n, t) {
        return 0 === e.indexOf("@")
            ? Q(e)
            : (-1 != e.indexOf("-") && (e = a(e)),
              n ? h(e, n, t) : h(e, "pfx"));
    });
    Modernizr.addTest("backgroundblendmode", P("backgroundBlendMode", "text")),
        Modernizr.addTest("objectfit", !!P("objectFit"), {
            aliases: ["object-fit"],
        });
    var j;
    !(function() {
        var e = {}.hasOwnProperty;
        j =
            r(e, "undefined") || r(e.call, "undefined")
                ? function(e, n) {
                      return (
                          n in e && r(e.constructor.prototype[n], "undefined")
                      );
                  }
                : function(n, t) {
                      return e.call(n, t);
                  };
    })(),
        (_._l = {}),
        (_.on = function(e, n) {
            this._l[e] || (this._l[e] = []),
                this._l[e].push(n),
                Modernizr.hasOwnProperty(e) &&
                    setTimeout(function() {
                        Modernizr._trigger(e, Modernizr[e]);
                    }, 0);
        }),
        (_._trigger = function(e, n) {
            if (this._l[e]) {
                var t = this._l[e];
                setTimeout(function() {
                    var e, r;
                    for (e = 0; e < t.length; e++) (r = t[e])(n);
                }, 0),
                    delete this._l[e];
            }
        }),
        Modernizr._q.push(function() {
            _.addTest = y;
        }),
        Modernizr.addAsyncTest(function() {
            function e(e, n, t) {
                function r(n) {
                    var r = n && "load" === n.type ? 1 == i.width : !1,
                        o = "webp" === e;
                    y(e, o && r ? new Boolean(r) : r), t && t(n);
                }
                var i = new Image();
                (i.onerror = r), (i.onload = r), (i.src = n);
            }
            var n = [
                    {
                        uri:
                            "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
                        name: "webp",
                    },
                    {
                        uri:
                            "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
                        name: "webp.alpha",
                    },
                    {
                        uri:
                            "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
                        name: "webp.animation",
                    },
                    {
                        uri:
                            "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
                        name: "webp.lossless",
                    },
                ],
                t = n.shift();
            e(t.name, t.uri, function(t) {
                if (t && "load" === t.type)
                    for (var r = 0; r < n.length; r++) e(n[r].name, n[r].uri);
            });
        }),
        i(),
        o(w),
        delete _.addTest,
        delete _.addAsyncTest;
    for (var z = 0; z < Modernizr._q.length; z++) Modernizr._q[z]();
    e.Modernizr = Modernizr;
})(window, document);

/*! Waypoints - 4.0.1
Copyright ﾂｩ 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt */
!(function() {
    "use strict";
    function t(n) {
        if (!n) throw new Error("No options passed to Waypoint constructor");
        if (!n.element)
            throw new Error("No element option passed to Waypoint constructor");
        if (!n.handler)
            throw new Error("No handler option passed to Waypoint constructor");
        (this.key = "waypoint-" + e),
            (this.options = t.Adapter.extend({}, t.defaults, n)),
            (this.element = this.options.element),
            (this.adapter = new t.Adapter(this.element)),
            (this.callback = n.handler),
            (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
            (this.enabled = this.options.enabled),
            (this.triggerPoint = null),
            (this.group = t.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis,
            })),
            (this.context = t.Context.findOrCreateByElement(
                this.options.context
            )),
            t.offsetAliases[this.options.offset] &&
                (this.options.offset = t.offsetAliases[this.options.offset]),
            this.group.add(this),
            this.context.add(this),
            (i[this.key] = this),
            (e += 1);
    }
    var e = 0,
        i = {};
    (t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t);
    }),
        (t.prototype.trigger = function(t) {
            this.enabled && this.callback && this.callback.apply(this, t);
        }),
        (t.prototype.destroy = function() {
            this.context.remove(this),
                this.group.remove(this),
                delete i[this.key];
        }),
        (t.prototype.disable = function() {
            return (this.enabled = !1), this;
        }),
        (t.prototype.enable = function() {
            return this.context.refresh(), (this.enabled = !0), this;
        }),
        (t.prototype.next = function() {
            return this.group.next(this);
        }),
        (t.prototype.previous = function() {
            return this.group.previous(this);
        }),
        (t.invokeAll = function(t) {
            var e = [];
            for (var n in i) e.push(i[n]);
            for (var o = 0, r = e.length; r > o; o++) e[o][t]();
        }),
        (t.destroyAll = function() {
            t.invokeAll("destroy");
        }),
        (t.disableAll = function() {
            t.invokeAll("disable");
        }),
        (t.enableAll = function() {
            t.Context.refreshAll();
            for (var e in i) i[e].enabled = !0;
            return this;
        }),
        (t.refreshAll = function() {
            t.Context.refreshAll();
        }),
        (t.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight;
        }),
        (t.viewportWidth = function() {
            return document.documentElement.clientWidth;
        }),
        (t.adapters = []),
        (t.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0,
        }),
        (t.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight();
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth();
            },
        }),
        (window.Waypoint = t);
})(),
    (function() {
        "use strict";
        function t(t) {
            window.setTimeout(t, 1e3 / 60);
        }
        function e(t) {
            (this.element = t),
                (this.Adapter = o.Adapter),
                (this.adapter = new this.Adapter(t)),
                (this.key = "waypoint-context-" + i),
                (this.didScroll = !1),
                (this.didResize = !1),
                (this.oldScroll = {
                    x: this.adapter.scrollLeft(),
                    y: this.adapter.scrollTop(),
                }),
                (this.waypoints = { vertical: {}, horizontal: {} }),
                (t.waypointContextKey = this.key),
                (n[t.waypointContextKey] = this),
                (i += 1),
                o.windowContext ||
                    ((o.windowContext = !0), (o.windowContext = new e(window))),
                this.createThrottledScrollHandler(),
                this.createThrottledResizeHandler();
        }
        var i = 0,
            n = {},
            o = window.Waypoint,
            r = window.onload;
        (e.prototype.add = function(t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            (this.waypoints[e][t.key] = t), this.refresh();
        }),
            (e.prototype.checkEmpty = function() {
                var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                    e = this.Adapter.isEmptyObject(this.waypoints.vertical),
                    i = this.element == this.element.window;
                t &&
                    e &&
                    !i &&
                    (this.adapter.off(".waypoints"), delete n[this.key]);
            }),
            (e.prototype.createThrottledResizeHandler = function() {
                function t() {
                    e.handleResize(), (e.didResize = !1);
                }
                var e = this;
                this.adapter.on("resize.waypoints", function() {
                    e.didResize ||
                        ((e.didResize = !0), o.requestAnimationFrame(t));
                });
            }),
            (e.prototype.createThrottledScrollHandler = function() {
                function t() {
                    e.handleScroll(), (e.didScroll = !1);
                }
                var e = this;
                this.adapter.on("scroll.waypoints", function() {
                    (!e.didScroll || o.isTouch) &&
                        ((e.didScroll = !0), o.requestAnimationFrame(t));
                });
            }),
            (e.prototype.handleResize = function() {
                o.Context.refreshAll();
            }),
            (e.prototype.handleScroll = function() {
                var t = {},
                    e = {
                        horizontal: {
                            newScroll: this.adapter.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                        },
                        vertical: {
                            newScroll: this.adapter.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                        },
                    };
                for (var i in e) {
                    var n = e[i],
                        o = n.newScroll > n.oldScroll,
                        r = o ? n.forward : n.backward;
                    for (var s in this.waypoints[i]) {
                        var l = this.waypoints[i][s];
                        if (null !== l.triggerPoint) {
                            var a = n.oldScroll < l.triggerPoint,
                                h = n.newScroll >= l.triggerPoint,
                                p = a && h,
                                u = !a && !h;
                            (p || u) &&
                                (l.queueTrigger(r), (t[l.group.id] = l.group));
                        }
                    }
                }
                for (var d in t) t[d].flushTriggers();
                this.oldScroll = {
                    x: e.horizontal.newScroll,
                    y: e.vertical.newScroll,
                };
            }),
            (e.prototype.innerHeight = function() {
                return this.element == this.element.window
                    ? o.viewportHeight()
                    : this.adapter.innerHeight();
            }),
            (e.prototype.remove = function(t) {
                delete this.waypoints[t.axis][t.key], this.checkEmpty();
            }),
            (e.prototype.innerWidth = function() {
                return this.element == this.element.window
                    ? o.viewportWidth()
                    : this.adapter.innerWidth();
            }),
            (e.prototype.destroy = function() {
                var t = [];
                for (var e in this.waypoints)
                    for (var i in this.waypoints[e])
                        t.push(this.waypoints[e][i]);
                for (var n = 0, o = t.length; o > n; n++) t[n].destroy();
            }),
            (e.prototype.refresh = function() {
                var t,
                    e = this.element == this.element.window,
                    i = e ? void 0 : this.adapter.offset(),
                    n = {};
                this.handleScroll(),
                    (t = {
                        horizontal: {
                            contextOffset: e ? 0 : i.left,
                            contextScroll: e ? 0 : this.oldScroll.x,
                            contextDimension: this.innerWidth(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left",
                        },
                        vertical: {
                            contextOffset: e ? 0 : i.top,
                            contextScroll: e ? 0 : this.oldScroll.y,
                            contextDimension: this.innerHeight(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top",
                        },
                    });
                for (var r in t) {
                    var s = t[r];
                    for (var l in this.waypoints[r]) {
                        var a,
                            h,
                            p,
                            u,
                            d,
                            f = this.waypoints[r][l],
                            c = f.options.offset,
                            w = f.triggerPoint,
                            y = 0,
                            g = null == w;
                        f.element !== f.element.window &&
                            (y = f.adapter.offset()[s.offsetProp]),
                            "function" == typeof c
                                ? (c = c.apply(f))
                                : "string" == typeof c &&
                                  ((c = parseFloat(c)),
                                  f.options.offset.indexOf("%") > -1 &&
                                      (c = Math.ceil(
                                          (s.contextDimension * c) / 100
                                      ))),
                            (a = s.contextScroll - s.contextOffset),
                            (f.triggerPoint = Math.floor(y + a - c)),
                            (h = w < s.oldScroll),
                            (p = f.triggerPoint >= s.oldScroll),
                            (u = h && p),
                            (d = !h && !p),
                            !g && u
                                ? (f.queueTrigger(s.backward),
                                  (n[f.group.id] = f.group))
                                : !g && d
                                ? (f.queueTrigger(s.forward),
                                  (n[f.group.id] = f.group))
                                : g &&
                                  s.oldScroll >= f.triggerPoint &&
                                  (f.queueTrigger(s.forward),
                                  (n[f.group.id] = f.group));
                    }
                }
                return (
                    o.requestAnimationFrame(function() {
                        for (var t in n) n[t].flushTriggers();
                    }),
                    this
                );
            }),
            (e.findOrCreateByElement = function(t) {
                return e.findByElement(t) || new e(t);
            }),
            (e.refreshAll = function() {
                for (var t in n) n[t].refresh();
            }),
            (e.findByElement = function(t) {
                return n[t.waypointContextKey];
            }),
            (window.onload = function() {
                r && r(), e.refreshAll();
            }),
            (o.requestAnimationFrame = function(e) {
                var i =
                    window.requestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    t;
                i.call(window, e);
            }),
            (o.Context = e);
    })(),
    (function() {
        "use strict";
        function t(t, e) {
            return t.triggerPoint - e.triggerPoint;
        }
        function e(t, e) {
            return e.triggerPoint - t.triggerPoint;
        }
        function i(t) {
            (this.name = t.name),
                (this.axis = t.axis),
                (this.id = this.name + "-" + this.axis),
                (this.waypoints = []),
                this.clearTriggerQueues(),
                (n[this.axis][this.name] = this);
        }
        var n = { vertical: {}, horizontal: {} },
            o = window.Waypoint;
        (i.prototype.add = function(t) {
            this.waypoints.push(t);
        }),
            (i.prototype.clearTriggerQueues = function() {
                this.triggerQueues = { up: [], down: [], left: [], right: [] };
            }),
            (i.prototype.flushTriggers = function() {
                for (var i in this.triggerQueues) {
                    var n = this.triggerQueues[i],
                        o = "up" === i || "left" === i;
                    n.sort(o ? e : t);
                    for (var r = 0, s = n.length; s > r; r += 1) {
                        var l = n[r];
                        (l.options.continuous || r === n.length - 1) &&
                            l.trigger([i]);
                    }
                }
                this.clearTriggerQueues();
            }),
            (i.prototype.next = function(e) {
                this.waypoints.sort(t);
                var i = o.Adapter.inArray(e, this.waypoints),
                    n = i === this.waypoints.length - 1;
                return n ? null : this.waypoints[i + 1];
            }),
            (i.prototype.previous = function(e) {
                this.waypoints.sort(t);
                var i = o.Adapter.inArray(e, this.waypoints);
                return i ? this.waypoints[i - 1] : null;
            }),
            (i.prototype.queueTrigger = function(t, e) {
                this.triggerQueues[e].push(t);
            }),
            (i.prototype.remove = function(t) {
                var e = o.Adapter.inArray(t, this.waypoints);
                e > -1 && this.waypoints.splice(e, 1);
            }),
            (i.prototype.first = function() {
                return this.waypoints[0];
            }),
            (i.prototype.last = function() {
                return this.waypoints[this.waypoints.length - 1];
            }),
            (i.findOrCreate = function(t) {
                return n[t.axis][t.name] || new i(t);
            }),
            (o.Group = i);
    })(),
    (function() {
        "use strict";
        function t(t) {
            return t === t.window;
        }
        function e(e) {
            return t(e) ? e : e.defaultView;
        }
        function i(t) {
            (this.element = t), (this.handlers = {});
        }
        var n = window.Waypoint;
        (i.prototype.innerHeight = function() {
            var e = t(this.element);
            return e ? this.element.innerHeight : this.element.clientHeight;
        }),
            (i.prototype.innerWidth = function() {
                var e = t(this.element);
                return e ? this.element.innerWidth : this.element.clientWidth;
            }),
            (i.prototype.off = function(t, e) {
                function i(t, e, i) {
                    for (var n = 0, o = e.length - 1; o > n; n++) {
                        var r = e[n];
                        (i && i !== r) || t.removeEventListener(r);
                    }
                }
                var n = t.split("."),
                    o = n[0],
                    r = n[1],
                    s = this.element;
                if (r && this.handlers[r] && o)
                    i(s, this.handlers[r][o], e), (this.handlers[r][o] = []);
                else if (o)
                    for (var l in this.handlers)
                        i(s, this.handlers[l][o] || [], e),
                            (this.handlers[l][o] = []);
                else if (r && this.handlers[r]) {
                    for (var a in this.handlers[r])
                        i(s, this.handlers[r][a], e);
                    this.handlers[r] = {};
                }
            }),
            (i.prototype.offset = function() {
                if (!this.element.ownerDocument) return null;
                var t = this.element.ownerDocument.documentElement,
                    i = e(this.element.ownerDocument),
                    n = { top: 0, left: 0 };
                return (
                    this.element.getBoundingClientRect &&
                        (n = this.element.getBoundingClientRect()),
                    {
                        top: n.top + i.pageYOffset - t.clientTop,
                        left: n.left + i.pageXOffset - t.clientLeft,
                    }
                );
            }),
            (i.prototype.on = function(t, e) {
                var i = t.split("."),
                    n = i[0],
                    o = i[1] || "__default",
                    r = (this.handlers[o] = this.handlers[o] || {}),
                    s = (r[n] = r[n] || []);
                s.push(e), this.element.addEventListener(n, e);
            }),
            (i.prototype.outerHeight = function(e) {
                var i,
                    n = this.innerHeight();
                return (
                    e &&
                        !t(this.element) &&
                        ((i = window.getComputedStyle(this.element)),
                        (n += parseInt(i.marginTop, 10)),
                        (n += parseInt(i.marginBottom, 10))),
                    n
                );
            }),
            (i.prototype.outerWidth = function(e) {
                var i,
                    n = this.innerWidth();
                return (
                    e &&
                        !t(this.element) &&
                        ((i = window.getComputedStyle(this.element)),
                        (n += parseInt(i.marginLeft, 10)),
                        (n += parseInt(i.marginRight, 10))),
                    n
                );
            }),
            (i.prototype.scrollLeft = function() {
                var t = e(this.element);
                return t ? t.pageXOffset : this.element.scrollLeft;
            }),
            (i.prototype.scrollTop = function() {
                var t = e(this.element);
                return t ? t.pageYOffset : this.element.scrollTop;
            }),
            (i.extend = function() {
                function t(t, e) {
                    if ("object" == typeof t && "object" == typeof e)
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                    return t;
                }
                for (
                    var e = Array.prototype.slice.call(arguments),
                        i = 1,
                        n = e.length;
                    n > i;
                    i++
                )
                    t(e[0], e[i]);
                return e[0];
            }),
            (i.inArray = function(t, e, i) {
                return null == e ? -1 : e.indexOf(t, i);
            }),
            (i.isEmptyObject = function(t) {
                for (var e in t) return !1;
                return !0;
            }),
            n.adapters.push({ name: "noframework", Adapter: i }),
            (n.Adapter = i);
    })();

/*! Waypoints Inview Shortcut - 4.0.1
Copyright ﾂｩ 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt */
!(function() {
    "use strict";
    function t() {}
    function e(t) {
        (this.options = i.Adapter.extend({}, e.defaults, t)),
            (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
            (this.waypoints = []),
            (this.element = this.options.element),
            this.createWaypoints();
    }
    var i = window.Waypoint;
    (e.prototype.createWaypoints = function() {
        for (
            var t = {
                    vertical: [
                        { down: "enter", up: "exited", offset: "100%" },
                        {
                            down: "entered",
                            up: "exit",
                            offset: "bottom-in-view",
                        },
                        { down: "exit", up: "entered", offset: 0 },
                        {
                            down: "exited",
                            up: "enter",
                            offset: function() {
                                return -this.adapter.outerHeight();
                            },
                        },
                    ],
                    horizontal: [
                        { right: "enter", left: "exited", offset: "100%" },
                        {
                            right: "entered",
                            left: "exit",
                            offset: "right-in-view",
                        },
                        { right: "exit", left: "entered", offset: 0 },
                        {
                            right: "exited",
                            left: "enter",
                            offset: function() {
                                return -this.adapter.outerWidth();
                            },
                        },
                    ],
                },
                e = 0,
                i = t[this.axis].length;
            i > e;
            e++
        ) {
            var n = t[this.axis][e];
            this.createWaypoint(n);
        }
    }),
        (e.prototype.createWaypoint = function(t) {
            var e = this;
            this.waypoints.push(
                new i({
                    context: this.options.context,
                    element: this.options.element,
                    enabled: this.options.enabled,
                    handler: (function(t) {
                        return function(i) {
                            e.options[t[i]].call(e, i);
                        };
                    })(t),
                    offset: t.offset,
                    horizontal: this.options.horizontal,
                })
            );
        }),
        (e.prototype.destroy = function() {
            for (var t = 0, e = this.waypoints.length; e > t; t++)
                this.waypoints[t].destroy();
            this.waypoints = [];
        }),
        (e.prototype.disable = function() {
            for (var t = 0, e = this.waypoints.length; e > t; t++)
                this.waypoints[t].disable();
        }),
        (e.prototype.enable = function() {
            for (var t = 0, e = this.waypoints.length; e > t; t++)
                this.waypoints[t].enable();
        }),
        (e.defaults = {
            context: window,
            enabled: !0,
            enter: t,
            entered: t,
            exit: t,
            exited: t,
        }),
        (i.Inview = e);
})();

/*!
 * smooth scroll behavior polyfill
 * https://github.com/iamdustan/smoothscroll
 */
function polyfill() {
    var o = window,
        l = document;
    if (
        !(
            "scrollBehavior" in l.documentElement.style &&
            !0 !== o.__forceSmoothScrollPolyfill__
        )
    ) {
        var t,
            e = o.HTMLElement || o.Element,
            r = 468,
            i = {
                scroll: o.scroll || o.scrollTo,
                scrollBy: o.scrollBy,
                elementScroll: e.prototype.scroll || n,
                scrollIntoView: e.prototype.scrollIntoView,
            },
            s =
                o.performance && o.performance.now
                    ? o.performance.now.bind(o.performance)
                    : Date.now,
            c =
                ((t = o.navigator.userAgent),
                new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(t)
                    ? 1
                    : 0);
        (o.scroll = o.scrollTo = function() {
            void 0 !== arguments[0] &&
                (!0 !== f(arguments[0])
                    ? h.call(
                          o,
                          l.body,
                          void 0 !== arguments[0].left
                              ? ~~arguments[0].left
                              : o.scrollX || o.pageXOffset,
                          void 0 !== arguments[0].top
                              ? ~~arguments[0].top
                              : o.scrollY || o.pageYOffset
                      )
                    : i.scroll.call(
                          o,
                          void 0 !== arguments[0].left
                              ? arguments[0].left
                              : "object" != typeof arguments[0]
                              ? arguments[0]
                              : o.scrollX || o.pageXOffset,
                          void 0 !== arguments[0].top
                              ? arguments[0].top
                              : void 0 !== arguments[1]
                              ? arguments[1]
                              : o.scrollY || o.pageYOffset
                      ));
        }),
            (o.scrollBy = function() {
                void 0 !== arguments[0] &&
                    (f(arguments[0])
                        ? i.scrollBy.call(
                              o,
                              void 0 !== arguments[0].left
                                  ? arguments[0].left
                                  : "object" != typeof arguments[0]
                                  ? arguments[0]
                                  : 0,
                              void 0 !== arguments[0].top
                                  ? arguments[0].top
                                  : void 0 !== arguments[1]
                                  ? arguments[1]
                                  : 0
                          )
                        : h.call(
                              o,
                              l.body,
                              ~~arguments[0].left +
                                  (o.scrollX || o.pageXOffset),
                              ~~arguments[0].top + (o.scrollY || o.pageYOffset)
                          ));
            }),
            (e.prototype.scroll = e.prototype.scrollTo = function() {
                if (void 0 !== arguments[0])
                    if (!0 !== f(arguments[0])) {
                        var o = arguments[0].left,
                            l = arguments[0].top;
                        h.call(
                            this,
                            this,
                            void 0 === o ? this.scrollLeft : ~~o,
                            void 0 === l ? this.scrollTop : ~~l
                        );
                    } else {
                        if (
                            "number" == typeof arguments[0] &&
                            void 0 === arguments[1]
                        )
                            throw new SyntaxError(
                                "Value could not be converted"
                            );
                        i.elementScroll.call(
                            this,
                            void 0 !== arguments[0].left
                                ? ~~arguments[0].left
                                : "object" != typeof arguments[0]
                                ? ~~arguments[0]
                                : this.scrollLeft,
                            void 0 !== arguments[0].top
                                ? ~~arguments[0].top
                                : void 0 !== arguments[1]
                                ? ~~arguments[1]
                                : this.scrollTop
                        );
                    }
            }),
            (e.prototype.scrollBy = function() {
                void 0 !== arguments[0] &&
                    (!0 !== f(arguments[0])
                        ? this.scroll({
                              left: ~~arguments[0].left + this.scrollLeft,
                              top: ~~arguments[0].top + this.scrollTop,
                              behavior: arguments[0].behavior,
                          })
                        : i.elementScroll.call(
                              this,
                              void 0 !== arguments[0].left
                                  ? ~~arguments[0].left + this.scrollLeft
                                  : ~~arguments[0] + this.scrollLeft,
                              void 0 !== arguments[0].top
                                  ? ~~arguments[0].top + this.scrollTop
                                  : ~~arguments[1] + this.scrollTop
                          ));
            }),
            (e.prototype.scrollIntoView = function() {
                if (!0 !== f(arguments[0])) {
                    var t = (function(o) {
                            var t, e, r, i;
                            do {
                                t = (o = o.parentNode) === l.body;
                            } while (
                                !1 === t &&
                                !1 ===
                                    ((r = p((e = o), "Y") && a(e, "Y")),
                                    (i = p(e, "X") && a(e, "X")),
                                    r || i)
                            );
                            return (t = null), o;
                        })(this),
                        e = t.getBoundingClientRect(),
                        r = this.getBoundingClientRect();
                    t !== l.body
                        ? (h.call(
                              this,
                              t,
                              t.scrollLeft + r.left - e.left,
                              t.scrollTop + r.top - e.top
                          ),
                          "fixed" !== o.getComputedStyle(t).position &&
                              o.scrollBy({
                                  left: e.left,
                                  top: e.top,
                                  behavior: "smooth",
                              }))
                        : o.scrollBy({
                              left: r.left,
                              top: r.top,
                              behavior: "smooth",
                          });
                } else
                    i.scrollIntoView.call(
                        this,
                        void 0 === arguments[0] || arguments[0]
                    );
            });
    }
    function n(o, l) {
        (this.scrollLeft = o), (this.scrollTop = l);
    }
    function f(o) {
        if (
            null === o ||
            "object" != typeof o ||
            void 0 === o.behavior ||
            "auto" === o.behavior ||
            "instant" === o.behavior
        )
            return !0;
        if ("object" == typeof o && "smooth" === o.behavior) return !1;
        throw new TypeError(
            "behavior member of ScrollOptions " +
                o.behavior +
                " is not a valid value for enumeration ScrollBehavior."
        );
    }
    function p(o, l) {
        return "Y" === l
            ? o.clientHeight + c < o.scrollHeight
            : "X" === l
            ? o.clientWidth + c < o.scrollWidth
            : void 0;
    }
    function a(l, t) {
        var e = o.getComputedStyle(l, null)["overflow" + t];
        return "auto" === e || "scroll" === e;
    }
    function d(l) {
        var t,
            e,
            i,
            c,
            n = (s() - l.startTime) / r;
        (c = n = n > 1 ? 1 : n),
            (t = 0.5 * (1 - Math.cos(Math.PI * c))),
            (e = l.startX + (l.x - l.startX) * t),
            (i = l.startY + (l.y - l.startY) * t),
            l.method.call(l.scrollable, e, i),
            (e === l.x && i === l.y) || o.requestAnimationFrame(d.bind(o, l));
    }
    function h(t, e, r) {
        var c,
            f,
            p,
            a,
            h = s();
        t === l.body
            ? ((c = o),
              (f = o.scrollX || o.pageXOffset),
              (p = o.scrollY || o.pageYOffset),
              (a = i.scroll))
            : ((c = t), (f = t.scrollLeft), (p = t.scrollTop), (a = n)),
            d({
                scrollable: c,
                method: a,
                startTime: h,
                startX: f,
                startY: p,
                x: e,
                y: r,
            });
    }
}
"object" == typeof exports && "undefined" != typeof module
    ? (module.exports = { polyfill: polyfill })
    : polyfill();

/**
 * Swiper 4.5.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 * Released under the MIT License
 * Released on: February 22, 2019
 */
!(function(e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define(t)
        : ((e = e || self).Swiper = t());
})(this, function() {
    "use strict";
    var f =
            "undefined" == typeof document
                ? {
                      body: {},
                      addEventListener: function() {},
                      removeEventListener: function() {},
                      activeElement: { blur: function() {}, nodeName: "" },
                      querySelector: function() {
                          return null;
                      },
                      querySelectorAll: function() {
                          return [];
                      },
                      getElementById: function() {
                          return null;
                      },
                      createEvent: function() {
                          return { initEvent: function() {} };
                      },
                      createElement: function() {
                          return {
                              children: [],
                              childNodes: [],
                              style: {},
                              setAttribute: function() {},
                              getElementsByTagName: function() {
                                  return [];
                              },
                          };
                      },
                      location: { hash: "" },
                  }
                : document,
        J =
            "undefined" == typeof window
                ? {
                      document: f,
                      navigator: { userAgent: "" },
                      location: {},
                      history: {},
                      CustomEvent: function() {
                          return this;
                      },
                      addEventListener: function() {},
                      removeEventListener: function() {},
                      getComputedStyle: function() {
                          return {
                              getPropertyValue: function() {
                                  return "";
                              },
                          };
                      },
                      Image: function() {},
                      Date: function() {},
                      screen: {},
                      setTimeout: function() {},
                      clearTimeout: function() {},
                  }
                : window,
        l = function(e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return (this.length = e.length), this;
        };
    function L(e, t) {
        var a = [],
            i = 0;
        if (e && !t && e instanceof l) return e;
        if (e)
            if ("string" == typeof e) {
                var s,
                    r,
                    n = e.trim();
                if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
                    var o = "div";
                    for (
                        0 === n.indexOf("<li") && (o = "ul"),
                            0 === n.indexOf("<tr") && (o = "tbody"),
                            (0 !== n.indexOf("<td") &&
                                0 !== n.indexOf("<th")) ||
                                (o = "tr"),
                            0 === n.indexOf("<tbody") && (o = "table"),
                            0 === n.indexOf("<option") && (o = "select"),
                            (r = f.createElement(o)).innerHTML = n,
                            i = 0;
                        i < r.childNodes.length;
                        i += 1
                    )
                        a.push(r.childNodes[i]);
                } else
                    for (
                        s =
                            t || "#" !== e[0] || e.match(/[ .<>:~]/)
                                ? (t || f).querySelectorAll(e.trim())
                                : [f.getElementById(e.trim().split("#")[1])],
                            i = 0;
                        i < s.length;
                        i += 1
                    )
                        s[i] && a.push(s[i]);
            } else if (e.nodeType || e === J || e === f) a.push(e);
            else if (0 < e.length && e[0].nodeType)
                for (i = 0; i < e.length; i += 1) a.push(e[i]);
        return new l(a);
    }
    function r(e) {
        for (var t = [], a = 0; a < e.length; a += 1)
            -1 === t.indexOf(e[a]) && t.push(e[a]);
        return t;
    }
    (L.fn = l.prototype), (L.Class = l), (L.Dom7 = l);
    var t = {
        addClass: function(e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1)
                    void 0 !== this[i] &&
                        void 0 !== this[i].classList &&
                        this[i].classList.add(t[a]);
            return this;
        },
        removeClass: function(e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1)
                    void 0 !== this[i] &&
                        void 0 !== this[i].classList &&
                        this[i].classList.remove(t[a]);
            return this;
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e);
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1)
                    void 0 !== this[i] &&
                        void 0 !== this[i].classList &&
                        this[i].classList.toggle(t[a]);
            return this;
        },
        attr: function(e, t) {
            var a = arguments;
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1)
                if (2 === a.length) this[i].setAttribute(e, t);
                else
                    for (var s in e)
                        (this[i][s] = e[s]), this[i].setAttribute(s, e[s]);
            return this;
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this;
        },
        data: function(e, t) {
            var a;
            if (void 0 !== t) {
                for (var i = 0; i < this.length; i += 1)
                    (a = this[i]).dom7ElementDataStorage ||
                        (a.dom7ElementDataStorage = {}),
                        (a.dom7ElementDataStorage[e] = t);
                return this;
            }
            if ((a = this[0])) {
                if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage)
                    return a.dom7ElementDataStorage[e];
                var s = a.getAttribute("data-" + e);
                return s || void 0;
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                (a.webkitTransform = e), (a.transform = e);
            }
            return this;
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                (a.webkitTransitionDuration = e), (a.transitionDuration = e);
            }
            return this;
        },
        on: function() {
            for (var e, t = [], a = arguments.length; a--; )
                t[a] = arguments[a];
            var i = t[0],
                r = t[1],
                n = t[2],
                s = t[3];
            function o(e) {
                var t = e.target;
                if (t) {
                    var a = e.target.dom7EventData || [];
                    if ((a.indexOf(e) < 0 && a.unshift(e), L(t).is(r)))
                        n.apply(t, a);
                    else
                        for (
                            var i = L(t).parents(), s = 0;
                            s < i.length;
                            s += 1
                        )
                            L(i[s]).is(r) && n.apply(i[s], a);
                }
            }
            function l(e) {
                var t = (e && e.target && e.target.dom7EventData) || [];
                t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
            }
            "function" == typeof t[1] &&
                ((i = (e = t)[0]), (n = e[1]), (s = e[2]), (r = void 0)),
                s || (s = !1);
            for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r)
                    for (d = 0; d < p.length; d += 1) {
                        var h = p[d];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}),
                            u.dom7LiveListeners[h] ||
                                (u.dom7LiveListeners[h] = []),
                            u.dom7LiveListeners[h].push({
                                listener: n,
                                proxyListener: o,
                            }),
                            u.addEventListener(h, o, s);
                    }
                else
                    for (d = 0; d < p.length; d += 1) {
                        var v = p[d];
                        u.dom7Listeners || (u.dom7Listeners = {}),
                            u.dom7Listeners[v] || (u.dom7Listeners[v] = []),
                            u.dom7Listeners[v].push({
                                listener: n,
                                proxyListener: l,
                            }),
                            u.addEventListener(v, l, s);
                    }
            }
            return this;
        },
        off: function() {
            for (var e, t = [], a = arguments.length; a--; )
                t[a] = arguments[a];
            var i = t[0],
                s = t[1],
                r = t[2],
                n = t[3];
            "function" == typeof t[1] &&
                ((i = (e = t)[0]), (r = e[1]), (n = e[2]), (s = void 0)),
                n || (n = !1);
            for (var o = i.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], p = 0; p < this.length; p += 1) {
                    var c = this[p],
                        u = void 0;
                    if (
                        (!s && c.dom7Listeners
                            ? (u = c.dom7Listeners[d])
                            : s &&
                              c.dom7LiveListeners &&
                              (u = c.dom7LiveListeners[d]),
                        u && u.length)
                    )
                        for (var h = u.length - 1; 0 <= h; h -= 1) {
                            var v = u[h];
                            r && v.listener === r
                                ? (c.removeEventListener(d, v.proxyListener, n),
                                  u.splice(h, 1))
                                : r &&
                                  v.listener &&
                                  v.listener.dom7proxy &&
                                  v.listener.dom7proxy === r
                                ? (c.removeEventListener(d, v.proxyListener, n),
                                  u.splice(h, 1))
                                : r ||
                                  (c.removeEventListener(d, v.proxyListener, n),
                                  u.splice(h, 1));
                        }
                }
            return this;
        },
        trigger: function() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1)
                for (var r = a[s], n = 0; n < this.length; n += 1) {
                    var o = this[n],
                        l = void 0;
                    try {
                        l = new J.CustomEvent(r, {
                            detail: i,
                            bubbles: !0,
                            cancelable: !0,
                        });
                    } catch (e) {
                        (l = f.createEvent("Event")).initEvent(r, !0, !0),
                            (l.detail = i);
                    }
                    (o.dom7EventData = e.filter(function(e, t) {
                        return 0 < t;
                    })),
                        o.dispatchEvent(l),
                        (o.dom7EventData = []),
                        delete o.dom7EventData;
                }
            return this;
        },
        transitionEnd: function(t) {
            var a,
                i = ["webkitTransitionEnd", "transitionend"],
                s = this;
            function r(e) {
                if (e.target === this)
                    for (t.call(this, e), a = 0; a < i.length; a += 1)
                        s.off(i[a], r);
            }
            if (t) for (a = 0; a < i.length; a += 1) s.on(i[a], r);
            return this;
        },
        outerWidth: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return (
                        this[0].offsetWidth +
                        parseFloat(t.getPropertyValue("margin-right")) +
                        parseFloat(t.getPropertyValue("margin-left"))
                    );
                }
                return this[0].offsetWidth;
            }
            return null;
        },
        outerHeight: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return (
                        this[0].offsetHeight +
                        parseFloat(t.getPropertyValue("margin-top")) +
                        parseFloat(t.getPropertyValue("margin-bottom"))
                    );
                }
                return this[0].offsetHeight;
            }
            return null;
        },
        offset: function() {
            if (0 < this.length) {
                var e = this[0],
                    t = e.getBoundingClientRect(),
                    a = f.body,
                    i = e.clientTop || a.clientTop || 0,
                    s = e.clientLeft || a.clientLeft || 0,
                    r = e === J ? J.scrollY : e.scrollTop,
                    n = e === J ? J.scrollX : e.scrollLeft;
                return { top: t.top + r - i, left: t.left + n - s };
            }
            return null;
        },
        css: function(e, t) {
            var a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (var i in e) this[a].style[i] = e[i];
                    return this;
                }
                if (this[0])
                    return J.getComputedStyle(this[0], null).getPropertyValue(
                        e
                    );
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                return this;
            }
            return this;
        },
        each: function(e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this;
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this;
        },
        text: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this;
        },
        is: function(e) {
            var t,
                a,
                i = this[0];
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (t = L(e), a = 0; a < t.length; a += 1)
                    if (t[a] === i) return !0;
                return !1;
            }
            if (e === f) return i === f;
            if (e === J) return i === J;
            if (e.nodeType || e instanceof l) {
                for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
                    if (t[a] === i) return !0;
                return !1;
            }
            return !1;
        },
        index: function() {
            var e,
                t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e;
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            var t,
                a = this.length;
            return new l(
                a - 1 < e
                    ? []
                    : e < 0
                    ? (t = a + e) < 0
                        ? []
                        : [this[t]]
                    : [this[e]]
            );
        },
        append: function() {
            for (var e, t = [], a = arguments.length; a--; )
                t[a] = arguments[a];
            for (var i = 0; i < t.length; i += 1) {
                e = t[i];
                for (var s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        var r = f.createElement("div");
                        for (r.innerHTML = e; r.firstChild; )
                            this[s].appendChild(r.firstChild);
                    } else if (e instanceof l)
                        for (var n = 0; n < e.length; n += 1)
                            this[s].appendChild(e[n]);
                    else this[s].appendChild(e);
            }
            return this;
        },
        prepend: function(e) {
            var t, a;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var i = f.createElement("div");
                    for (
                        i.innerHTML = e, a = i.childNodes.length - 1;
                        0 <= a;
                        a -= 1
                    )
                        this[t].insertBefore(
                            i.childNodes[a],
                            this[t].childNodes[0]
                        );
                } else if (e instanceof l)
                    for (a = 0; a < e.length; a += 1)
                        this[t].insertBefore(e[a], this[t].childNodes[0]);
                else this[t].insertBefore(e, this[t].childNodes[0]);
            return this;
        },
        next: function(e) {
            return 0 < this.length
                ? e
                    ? this[0].nextElementSibling &&
                      L(this[0].nextElementSibling).is(e)
                        ? new l([this[0].nextElementSibling])
                        : new l([])
                    : this[0].nextElementSibling
                    ? new l([this[0].nextElementSibling])
                    : new l([])
                : new l([]);
        },
        nextAll: function(e) {
            var t = [],
                a = this[0];
            if (!a) return new l([]);
            for (; a.nextElementSibling; ) {
                var i = a.nextElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i), (a = i);
            }
            return new l(t);
        },
        prev: function(e) {
            if (0 < this.length) {
                var t = this[0];
                return e
                    ? t.previousElementSibling &&
                      L(t.previousElementSibling).is(e)
                        ? new l([t.previousElementSibling])
                        : new l([])
                    : t.previousElementSibling
                    ? new l([t.previousElementSibling])
                    : new l([]);
            }
            return new l([]);
        },
        prevAll: function(e) {
            var t = [],
                a = this[0];
            if (!a) return new l([]);
            for (; a.previousElementSibling; ) {
                var i = a.previousElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i), (a = i);
            }
            return new l(t);
        },
        parent: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                null !== this[a].parentNode &&
                    (e
                        ? L(this[a].parentNode).is(e) &&
                          t.push(this[a].parentNode)
                        : t.push(this[a].parentNode));
            return L(r(t));
        },
        parents: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].parentNode; i; )
                    e ? L(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
            return L(r(t));
        },
        closest: function(e) {
            var t = this;
            return void 0 === e
                ? new l([])
                : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (
                    var i = this[a].querySelectorAll(e), s = 0;
                    s < i.length;
                    s += 1
                )
                    t.push(i[s]);
            return new l(t);
        },
        children: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].childNodes, s = 0; s < i.length; s += 1)
                    e
                        ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s])
                        : 1 === i[s].nodeType && t.push(i[s]);
            return new l(r(t));
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
        },
        add: function() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var a, i;
            for (a = 0; a < e.length; a += 1) {
                var s = L(e[a]);
                for (i = 0; i < s.length; i += 1)
                    (this[this.length] = s[i]), (this.length += 1);
            }
            return this;
        },
        styles: function() {
            return this[0] ? J.getComputedStyle(this[0], null) : {};
        },
    };
    Object.keys(t).forEach(function(e) {
        L.fn[e] = t[e];
    });
    var e,
        a,
        i,
        s,
        ee = {
            deleteProps: function(e) {
                var t = e;
                Object.keys(t).forEach(function(e) {
                    try {
                        t[e] = null;
                    } catch (e) {}
                    try {
                        delete t[e];
                    } catch (e) {}
                });
            },
            nextTick: function(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t);
            },
            now: function() {
                return Date.now();
            },
            getTranslate: function(e, t) {
                var a, i, s;
                void 0 === t && (t = "x");
                var r = J.getComputedStyle(e, null);
                return (
                    J.WebKitCSSMatrix
                        ? (6 <
                              (i = r.transform || r.webkitTransform).split(",")
                                  .length &&
                              (i = i
                                  .split(", ")
                                  .map(function(e) {
                                      return e.replace(",", ".");
                                  })
                                  .join(", ")),
                          (s = new J.WebKitCSSMatrix("none" === i ? "" : i)))
                        : (a = (s =
                              r.MozTransform ||
                              r.OTransform ||
                              r.MsTransform ||
                              r.msTransform ||
                              r.transform ||
                              r
                                  .getPropertyValue("transform")
                                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                              .toString()
                              .split(",")),
                    "x" === t &&
                        (i = J.WebKitCSSMatrix
                            ? s.m41
                            : 16 === a.length
                            ? parseFloat(a[12])
                            : parseFloat(a[4])),
                    "y" === t &&
                        (i = J.WebKitCSSMatrix
                            ? s.m42
                            : 16 === a.length
                            ? parseFloat(a[13])
                            : parseFloat(a[5])),
                    i || 0
                );
            },
            parseUrlQuery: function(e) {
                var t,
                    a,
                    i,
                    s,
                    r = {},
                    n = e || J.location.href;
                if ("string" == typeof n && n.length)
                    for (
                        s = (a = (n =
                            -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "")
                            .split("&")
                            .filter(function(e) {
                                return "" !== e;
                            })).length,
                            t = 0;
                        t < s;
                        t += 1
                    )
                        (i = a[t].replace(/#\S+/g, "").split("=")),
                            (r[decodeURIComponent(i[0])] =
                                void 0 === i[1]
                                    ? void 0
                                    : decodeURIComponent(i[1]) || "");
                return r;
            },
            isObject: function(e) {
                return (
                    "object" == typeof e &&
                    null !== e &&
                    e.constructor &&
                    e.constructor === Object
                );
            },
            extend: function() {
                for (var e = [], t = arguments.length; t--; )
                    e[t] = arguments[t];
                for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
                    var s = e[i];
                    if (null != s)
                        for (
                            var r = Object.keys(Object(s)), n = 0, o = r.length;
                            n < o;
                            n += 1
                        ) {
                            var l = r[n],
                                d = Object.getOwnPropertyDescriptor(s, l);
                            void 0 !== d &&
                                d.enumerable &&
                                (ee.isObject(a[l]) && ee.isObject(s[l])
                                    ? ee.extend(a[l], s[l])
                                    : !ee.isObject(a[l]) && ee.isObject(s[l])
                                    ? ((a[l] = {}), ee.extend(a[l], s[l]))
                                    : (a[l] = s[l]));
                        }
                }
                return a;
            },
        },
        te =
            ((i = f.createElement("div")),
            {
                touch:
                    (J.Modernizr && !0 === J.Modernizr.touch) ||
                    !!(
                        0 < J.navigator.maxTouchPoints ||
                        "ontouchstart" in J ||
                        (J.DocumentTouch && f instanceof J.DocumentTouch)
                    ),
                pointerEvents: !!(
                    J.navigator.pointerEnabled ||
                    J.PointerEvent ||
                    ("maxTouchPoints" in J.navigator &&
                        0 < J.navigator.maxTouchPoints)
                ),
                prefixedPointerEvents: !!J.navigator.msPointerEnabled,
                transition:
                    ((a = i.style),
                    "transition" in a ||
                        "webkitTransition" in a ||
                        "MozTransition" in a),
                transforms3d:
                    (J.Modernizr && !0 === J.Modernizr.csstransforms3d) ||
                    ((e = i.style),
                    "webkitPerspective" in e ||
                        "MozPerspective" in e ||
                        "OPerspective" in e ||
                        "MsPerspective" in e ||
                        "perspective" in e),
                flexbox: (function() {
                    for (
                        var e = i.style,
                            t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
                                " "
                            ),
                            a = 0;
                        a < t.length;
                        a += 1
                    )
                        if (t[a] in e) return !0;
                    return !1;
                })(),
                observer:
                    "MutationObserver" in J || "WebkitMutationObserver" in J,
                passiveListener: (function() {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                e = !0;
                            },
                        });
                        J.addEventListener("testPassiveListener", null, t);
                    } catch (e) {}
                    return e;
                })(),
                gestures: "ongesturestart" in J,
            }),
        I = {
            isIE:
                !!J.navigator.userAgent.match(/Trident/g) ||
                !!J.navigator.userAgent.match(/MSIE/g),
            isEdge: !!J.navigator.userAgent.match(/Edge/g),
            isSafari:
                ((s = J.navigator.userAgent.toLowerCase()),
                0 <= s.indexOf("safari") &&
                    s.indexOf("chrome") < 0 &&
                    s.indexOf("android") < 0),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                J.navigator.userAgent
            ),
        },
        n = function(e) {
            void 0 === e && (e = {});
            var t = this;
            (t.params = e),
                (t.eventsListeners = {}),
                t.params &&
                    t.params.on &&
                    Object.keys(t.params.on).forEach(function(e) {
                        t.on(e, t.params.on[e]);
                    });
        },
        o = { components: { configurable: !0 } };
    (n.prototype.on = function(e, t, a) {
        var i = this;
        if ("function" != typeof t) return i;
        var s = a ? "unshift" : "push";
        return (
            e.split(" ").forEach(function(e) {
                i.eventsListeners[e] || (i.eventsListeners[e] = []),
                    i.eventsListeners[e][s](t);
            }),
            i
        );
    }),
        (n.prototype.once = function(a, i, e) {
            var s = this;
            if ("function" != typeof i) return s;
            function r() {
                for (var e = [], t = arguments.length; t--; )
                    e[t] = arguments[t];
                i.apply(s, e), s.off(a, r), r.f7proxy && delete r.f7proxy;
            }
            return (r.f7proxy = i), s.on(a, r, e);
        }),
        (n.prototype.off = function(e, i) {
            var s = this;
            return (
                s.eventsListeners &&
                    e.split(" ").forEach(function(a) {
                        void 0 === i
                            ? (s.eventsListeners[a] = [])
                            : s.eventsListeners[a] &&
                              s.eventsListeners[a].length &&
                              s.eventsListeners[a].forEach(function(e, t) {
                                  (e === i || (e.f7proxy && e.f7proxy === i)) &&
                                      s.eventsListeners[a].splice(t, 1);
                              });
                    }),
                s
            );
        }),
        (n.prototype.emit = function() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var a,
                i,
                s,
                r = this;
            return (
                r.eventsListeners &&
                    ("string" == typeof e[0] || Array.isArray(e[0])
                        ? ((a = e[0]), (i = e.slice(1, e.length)), (s = r))
                        : ((a = e[0].events),
                          (i = e[0].data),
                          (s = e[0].context || r)),
                    (Array.isArray(a) ? a : a.split(" ")).forEach(function(e) {
                        if (r.eventsListeners && r.eventsListeners[e]) {
                            var t = [];
                            r.eventsListeners[e].forEach(function(e) {
                                t.push(e);
                            }),
                                t.forEach(function(e) {
                                    e.apply(s, i);
                                });
                        }
                    })),
                r
            );
        }),
        (n.prototype.useModulesParams = function(a) {
            var i = this;
            i.modules &&
                Object.keys(i.modules).forEach(function(e) {
                    var t = i.modules[e];
                    t.params && ee.extend(a, t.params);
                });
        }),
        (n.prototype.useModules = function(i) {
            void 0 === i && (i = {});
            var s = this;
            s.modules &&
                Object.keys(s.modules).forEach(function(e) {
                    var a = s.modules[e],
                        t = i[e] || {};
                    a.instance &&
                        Object.keys(a.instance).forEach(function(e) {
                            var t = a.instance[e];
                            s[e] = "function" == typeof t ? t.bind(s) : t;
                        }),
                        a.on &&
                            s.on &&
                            Object.keys(a.on).forEach(function(e) {
                                s.on(e, a.on[e]);
                            }),
                        a.create && a.create.bind(s)(t);
                });
        }),
        (o.components.set = function(e) {
            this.use && this.use(e);
        }),
        (n.installModule = function(t) {
            for (var e = [], a = arguments.length - 1; 0 < a--; )
                e[a] = arguments[a + 1];
            var i = this;
            i.prototype.modules || (i.prototype.modules = {});
            var s =
                t.name ||
                Object.keys(i.prototype.modules).length + "_" + ee.now();
            return (
                (i.prototype.modules[s] = t).proto &&
                    Object.keys(t.proto).forEach(function(e) {
                        i.prototype[e] = t.proto[e];
                    }),
                t.static &&
                    Object.keys(t.static).forEach(function(e) {
                        i[e] = t.static[e];
                    }),
                t.install && t.install.apply(i, e),
                i
            );
        }),
        (n.use = function(e) {
            for (var t = [], a = arguments.length - 1; 0 < a--; )
                t[a] = arguments[a + 1];
            var i = this;
            return Array.isArray(e)
                ? (e.forEach(function(e) {
                      return i.installModule(e);
                  }),
                  i)
                : i.installModule.apply(i, [e].concat(t));
        }),
        Object.defineProperties(n, o);
    var d = {
        updateSize: function() {
            var e,
                t,
                a = this,
                i = a.$el;
            (e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth),
                (t =
                    void 0 !== a.params.height
                        ? a.params.height
                        : i[0].clientHeight),
                (0 === e && a.isHorizontal()) ||
                    (0 === t && a.isVertical()) ||
                    ((e =
                        e -
                        parseInt(i.css("padding-left"), 10) -
                        parseInt(i.css("padding-right"), 10)),
                    (t =
                        t -
                        parseInt(i.css("padding-top"), 10) -
                        parseInt(i.css("padding-bottom"), 10)),
                    ee.extend(a, {
                        width: e,
                        height: t,
                        size: a.isHorizontal() ? e : t,
                    }));
        },
        updateSlides: function() {
            var e = this,
                t = e.params,
                a = e.$wrapperEl,
                i = e.size,
                s = e.rtlTranslate,
                r = e.wrongRTL,
                n = e.virtual && t.virtual.enabled,
                o = n ? e.virtual.slides.length : e.slides.length,
                l = a.children("." + e.params.slideClass),
                d = n ? e.virtual.slides.length : l.length,
                p = [],
                c = [],
                u = [],
                h = t.slidesOffsetBefore;
            "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
            var v = t.slidesOffsetAfter;
            "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
            var f = e.snapGrid.length,
                m = e.snapGrid.length,
                g = t.spaceBetween,
                b = -h,
                w = 0,
                y = 0;
            if (void 0 !== i) {
                var x, T;
                "string" == typeof g &&
                    0 <= g.indexOf("%") &&
                    (g = (parseFloat(g.replace("%", "")) / 100) * i),
                    (e.virtualSize = -g),
                    s
                        ? l.css({ marginLeft: "", marginTop: "" })
                        : l.css({ marginRight: "", marginBottom: "" }),
                    1 < t.slidesPerColumn &&
                        ((x =
                            Math.floor(d / t.slidesPerColumn) ===
                            d / e.params.slidesPerColumn
                                ? d
                                : Math.ceil(d / t.slidesPerColumn) *
                                  t.slidesPerColumn),
                        "auto" !== t.slidesPerView &&
                            "row" === t.slidesPerColumnFill &&
                            (x = Math.max(
                                x,
                                t.slidesPerView * t.slidesPerColumn
                            )));
                for (
                    var E,
                        S = t.slidesPerColumn,
                        C = x / S,
                        M = Math.floor(d / t.slidesPerColumn),
                        z = 0;
                    z < d;
                    z += 1
                ) {
                    T = 0;
                    var P = l.eq(z);
                    if (1 < t.slidesPerColumn) {
                        var k = void 0,
                            $ = void 0,
                            L = void 0;
                        "column" === t.slidesPerColumnFill
                            ? ((L = z - ($ = Math.floor(z / S)) * S),
                              (M < $ || ($ === M && L === S - 1)) &&
                                  S <= (L += 1) &&
                                  ((L = 0), ($ += 1)),
                              (k = $ + (L * x) / S),
                              P.css({
                                  "-webkit-box-ordinal-group": k,
                                  "-moz-box-ordinal-group": k,
                                  "-ms-flex-order": k,
                                  "-webkit-order": k,
                                  order: k,
                              }))
                            : ($ = z - (L = Math.floor(z / C)) * C),
                            P.css(
                                "margin-" + (e.isHorizontal() ? "top" : "left"),
                                0 !== L &&
                                    t.spaceBetween &&
                                    t.spaceBetween + "px"
                            )
                                .attr("data-swiper-column", $)
                                .attr("data-swiper-row", L);
                    }
                    if ("none" !== P.css("display")) {
                        if ("auto" === t.slidesPerView) {
                            var I = J.getComputedStyle(P[0], null),
                                D = P[0].style.transform,
                                O = P[0].style.webkitTransform;
                            if (
                                (D && (P[0].style.transform = "none"),
                                O && (P[0].style.webkitTransform = "none"),
                                t.roundLengths)
                            )
                                T = e.isHorizontal()
                                    ? P.outerWidth(!0)
                                    : P.outerHeight(!0);
                            else if (e.isHorizontal()) {
                                var A = parseFloat(I.getPropertyValue("width")),
                                    H = parseFloat(
                                        I.getPropertyValue("padding-left")
                                    ),
                                    N = parseFloat(
                                        I.getPropertyValue("padding-right")
                                    ),
                                    G = parseFloat(
                                        I.getPropertyValue("margin-left")
                                    ),
                                    B = parseFloat(
                                        I.getPropertyValue("margin-right")
                                    ),
                                    X = I.getPropertyValue("box-sizing");
                                T =
                                    X && "border-box" === X
                                        ? A + G + B
                                        : A + H + N + G + B;
                            } else {
                                var Y = parseFloat(
                                        I.getPropertyValue("height")
                                    ),
                                    V = parseFloat(
                                        I.getPropertyValue("padding-top")
                                    ),
                                    F = parseFloat(
                                        I.getPropertyValue("padding-bottom")
                                    ),
                                    R = parseFloat(
                                        I.getPropertyValue("margin-top")
                                    ),
                                    q = parseFloat(
                                        I.getPropertyValue("margin-bottom")
                                    ),
                                    W = I.getPropertyValue("box-sizing");
                                T =
                                    W && "border-box" === W
                                        ? Y + R + q
                                        : Y + V + F + R + q;
                            }
                            D && (P[0].style.transform = D),
                                O && (P[0].style.webkitTransform = O),
                                t.roundLengths && (T = Math.floor(T));
                        } else
                            (T =
                                (i - (t.slidesPerView - 1) * g) /
                                t.slidesPerView),
                                t.roundLengths && (T = Math.floor(T)),
                                l[z] &&
                                    (e.isHorizontal()
                                        ? (l[z].style.width = T + "px")
                                        : (l[z].style.height = T + "px"));
                        l[z] && (l[z].swiperSlideSize = T),
                            u.push(T),
                            t.centeredSlides
                                ? ((b = b + T / 2 + w / 2 + g),
                                  0 === w && 0 !== z && (b = b - i / 2 - g),
                                  0 === z && (b = b - i / 2 - g),
                                  Math.abs(b) < 0.001 && (b = 0),
                                  t.roundLengths && (b = Math.floor(b)),
                                  y % t.slidesPerGroup == 0 && p.push(b),
                                  c.push(b))
                                : (t.roundLengths && (b = Math.floor(b)),
                                  y % t.slidesPerGroup == 0 && p.push(b),
                                  c.push(b),
                                  (b = b + T + g)),
                            (e.virtualSize += T + g),
                            (w = T),
                            (y += 1);
                    }
                }
                if (
                    ((e.virtualSize = Math.max(e.virtualSize, i) + v),
                    s &&
                        r &&
                        ("slide" === t.effect || "coverflow" === t.effect) &&
                        a.css({ width: e.virtualSize + t.spaceBetween + "px" }),
                    (te.flexbox && !t.setWrapperSize) ||
                        (e.isHorizontal()
                            ? a.css({
                                  width: e.virtualSize + t.spaceBetween + "px",
                              })
                            : a.css({
                                  height: e.virtualSize + t.spaceBetween + "px",
                              })),
                    1 < t.slidesPerColumn &&
                        ((e.virtualSize = (T + t.spaceBetween) * x),
                        (e.virtualSize =
                            Math.ceil(e.virtualSize / t.slidesPerColumn) -
                            t.spaceBetween),
                        e.isHorizontal()
                            ? a.css({
                                  width: e.virtualSize + t.spaceBetween + "px",
                              })
                            : a.css({
                                  height: e.virtualSize + t.spaceBetween + "px",
                              }),
                        t.centeredSlides))
                ) {
                    E = [];
                    for (var j = 0; j < p.length; j += 1) {
                        var U = p[j];
                        t.roundLengths && (U = Math.floor(U)),
                            p[j] < e.virtualSize + p[0] && E.push(U);
                    }
                    p = E;
                }
                if (!t.centeredSlides) {
                    E = [];
                    for (var K = 0; K < p.length; K += 1) {
                        var _ = p[K];
                        t.roundLengths && (_ = Math.floor(_)),
                            p[K] <= e.virtualSize - i && E.push(_);
                    }
                    (p = E),
                        1 <
                            Math.floor(e.virtualSize - i) -
                                Math.floor(p[p.length - 1]) &&
                            p.push(e.virtualSize - i);
                }
                if (
                    (0 === p.length && (p = [0]),
                    0 !== t.spaceBetween &&
                        (e.isHorizontal()
                            ? s
                                ? l.css({ marginLeft: g + "px" })
                                : l.css({ marginRight: g + "px" })
                            : l.css({ marginBottom: g + "px" })),
                    t.centerInsufficientSlides)
                ) {
                    var Z = 0;
                    if (
                        (u.forEach(function(e) {
                            Z += e + (t.spaceBetween ? t.spaceBetween : 0);
                        }),
                        (Z -= t.spaceBetween) < i)
                    ) {
                        var Q = (i - Z) / 2;
                        p.forEach(function(e, t) {
                            p[t] = e - Q;
                        }),
                            c.forEach(function(e, t) {
                                c[t] = e + Q;
                            });
                    }
                }
                ee.extend(e, {
                    slides: l,
                    snapGrid: p,
                    slidesGrid: c,
                    slidesSizesGrid: u,
                }),
                    d !== o && e.emit("slidesLengthChange"),
                    p.length !== f &&
                        (e.params.watchOverflow && e.checkOverflow(),
                        e.emit("snapGridLengthChange")),
                    c.length !== m && e.emit("slidesGridLengthChange"),
                    (t.watchSlidesProgress || t.watchSlidesVisibility) &&
                        e.updateSlidesOffset();
            }
        },
        updateAutoHeight: function(e) {
            var t,
                a = this,
                i = [],
                s = 0;
            if (
                ("number" == typeof e
                    ? a.setTransition(e)
                    : !0 === e && a.setTransition(a.params.speed),
                "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView)
            )
                for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                    var r = a.activeIndex + t;
                    if (r > a.slides.length) break;
                    i.push(a.slides.eq(r)[0]);
                }
            else i.push(a.slides.eq(a.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var n = i[t].offsetHeight;
                    s = s < n ? n : s;
                }
            s && a.$wrapperEl.css("height", s + "px");
        },
        updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1)
                e[t].swiperSlideOffset = this.isHorizontal()
                    ? e[t].offsetLeft
                    : e[t].offsetTop;
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = (this && this.translate) || 0);
            var t = this,
                a = t.params,
                i = t.slides,
                s = t.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                var r = -e;
                s && (r = e),
                    i.removeClass(a.slideVisibleClass),
                    (t.visibleSlidesIndexes = []),
                    (t.visibleSlides = []);
                for (var n = 0; n < i.length; n += 1) {
                    var o = i[n],
                        l =
                            (r +
                                (a.centeredSlides ? t.minTranslate() : 0) -
                                o.swiperSlideOffset) /
                            (o.swiperSlideSize + a.spaceBetween);
                    if (a.watchSlidesVisibility) {
                        var d = -(r - o.swiperSlideOffset),
                            p = d + t.slidesSizesGrid[n];
                        ((0 <= d && d < t.size) ||
                            (0 < p && p <= t.size) ||
                            (d <= 0 && p >= t.size)) &&
                            (t.visibleSlides.push(o),
                            t.visibleSlidesIndexes.push(n),
                            i.eq(n).addClass(a.slideVisibleClass));
                    }
                    o.progress = s ? -l : l;
                }
                t.visibleSlides = L(t.visibleSlides);
            }
        },
        updateProgress: function(e) {
            void 0 === e && (e = (this && this.translate) || 0);
            var t = this,
                a = t.params,
                i = t.maxTranslate() - t.minTranslate(),
                s = t.progress,
                r = t.isBeginning,
                n = t.isEnd,
                o = r,
                l = n;
            0 === i
                ? (n = r = !(s = 0))
                : ((r = (s = (e - t.minTranslate()) / i) <= 0), (n = 1 <= s)),
                ee.extend(t, { progress: s, isBeginning: r, isEnd: n }),
                (a.watchSlidesProgress || a.watchSlidesVisibility) &&
                    t.updateSlidesProgress(e),
                r && !o && t.emit("reachBeginning toEdge"),
                n && !l && t.emit("reachEnd toEdge"),
                ((o && !r) || (l && !n)) && t.emit("fromEdge"),
                t.emit("progress", s);
        },
        updateSlidesClasses: function() {
            var e,
                t = this,
                a = t.slides,
                i = t.params,
                s = t.$wrapperEl,
                r = t.activeIndex,
                n = t.realIndex,
                o = t.virtual && i.virtual.enabled;
            a.removeClass(
                i.slideActiveClass +
                    " " +
                    i.slideNextClass +
                    " " +
                    i.slidePrevClass +
                    " " +
                    i.slideDuplicateActiveClass +
                    " " +
                    i.slideDuplicateNextClass +
                    " " +
                    i.slideDuplicatePrevClass
            ),
                (e = o
                    ? t.$wrapperEl.find(
                          "." +
                              i.slideClass +
                              '[data-swiper-slide-index="' +
                              r +
                              '"]'
                      )
                    : a.eq(r)).addClass(i.slideActiveClass),
                i.loop &&
                    (e.hasClass(i.slideDuplicateClass)
                        ? s
                              .children(
                                  "." +
                                      i.slideClass +
                                      ":not(." +
                                      i.slideDuplicateClass +
                                      ')[data-swiper-slide-index="' +
                                      n +
                                      '"]'
                              )
                              .addClass(i.slideDuplicateActiveClass)
                        : s
                              .children(
                                  "." +
                                      i.slideClass +
                                      "." +
                                      i.slideDuplicateClass +
                                      '[data-swiper-slide-index="' +
                                      n +
                                      '"]'
                              )
                              .addClass(i.slideDuplicateActiveClass));
            var l = e
                .nextAll("." + i.slideClass)
                .eq(0)
                .addClass(i.slideNextClass);
            i.loop &&
                0 === l.length &&
                (l = a.eq(0)).addClass(i.slideNextClass);
            var d = e
                .prevAll("." + i.slideClass)
                .eq(0)
                .addClass(i.slidePrevClass);
            i.loop &&
                0 === d.length &&
                (d = a.eq(-1)).addClass(i.slidePrevClass),
                i.loop &&
                    (l.hasClass(i.slideDuplicateClass)
                        ? s
                              .children(
                                  "." +
                                      i.slideClass +
                                      ":not(." +
                                      i.slideDuplicateClass +
                                      ')[data-swiper-slide-index="' +
                                      l.attr("data-swiper-slide-index") +
                                      '"]'
                              )
                              .addClass(i.slideDuplicateNextClass)
                        : s
                              .children(
                                  "." +
                                      i.slideClass +
                                      "." +
                                      i.slideDuplicateClass +
                                      '[data-swiper-slide-index="' +
                                      l.attr("data-swiper-slide-index") +
                                      '"]'
                              )
                              .addClass(i.slideDuplicateNextClass),
                    d.hasClass(i.slideDuplicateClass)
                        ? s
                              .children(
                                  "." +
                                      i.slideClass +
                                      ":not(." +
                                      i.slideDuplicateClass +
                                      ')[data-swiper-slide-index="' +
                                      d.attr("data-swiper-slide-index") +
                                      '"]'
                              )
                              .addClass(i.slideDuplicatePrevClass)
                        : s
                              .children(
                                  "." +
                                      i.slideClass +
                                      "." +
                                      i.slideDuplicateClass +
                                      '[data-swiper-slide-index="' +
                                      d.attr("data-swiper-slide-index") +
                                      '"]'
                              )
                              .addClass(i.slideDuplicatePrevClass));
        },
        updateActiveIndex: function(e) {
            var t,
                a = this,
                i = a.rtlTranslate ? a.translate : -a.translate,
                s = a.slidesGrid,
                r = a.snapGrid,
                n = a.params,
                o = a.activeIndex,
                l = a.realIndex,
                d = a.snapIndex,
                p = e;
            if (void 0 === p) {
                for (var c = 0; c < s.length; c += 1)
                    void 0 !== s[c + 1]
                        ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2
                            ? (p = c)
                            : i >= s[c] && i < s[c + 1] && (p = c + 1)
                        : i >= s[c] && (p = c);
                n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
            }
            if (
                ((t =
                    0 <= r.indexOf(i)
                        ? r.indexOf(i)
                        : Math.floor(p / n.slidesPerGroup)) >= r.length &&
                    (t = r.length - 1),
                p !== o)
            ) {
                var u = parseInt(
                    a.slides.eq(p).attr("data-swiper-slide-index") || p,
                    10
                );
                ee.extend(a, {
                    snapIndex: t,
                    realIndex: u,
                    previousIndex: o,
                    activeIndex: p,
                }),
                    a.emit("activeIndexChange"),
                    a.emit("snapIndexChange"),
                    l !== u && a.emit("realIndexChange"),
                    a.emit("slideChange");
            } else t !== d && ((a.snapIndex = t), a.emit("snapIndexChange"));
        },
        updateClickedSlide: function(e) {
            var t = this,
                a = t.params,
                i = L(e.target).closest("." + a.slideClass)[0],
                s = !1;
            if (i)
                for (var r = 0; r < t.slides.length; r += 1)
                    t.slides[r] === i && (s = !0);
            if (!i || !s)
                return (
                    (t.clickedSlide = void 0), void (t.clickedIndex = void 0)
                );
            (t.clickedSlide = i),
                t.virtual && t.params.virtual.enabled
                    ? (t.clickedIndex = parseInt(
                          L(i).attr("data-swiper-slide-index"),
                          10
                      ))
                    : (t.clickedIndex = L(i).index()),
                a.slideToClickedSlide &&
                    void 0 !== t.clickedIndex &&
                    t.clickedIndex !== t.activeIndex &&
                    t.slideToClickedSlide();
        },
    };
    var p = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params,
                a = this.rtlTranslate,
                i = this.translate,
                s = this.$wrapperEl;
            if (t.virtualTranslate) return a ? -i : i;
            var r = ee.getTranslate(s[0], e);
            return a && (r = -r), r || 0;
        },
        setTranslate: function(e, t) {
            var a = this,
                i = a.rtlTranslate,
                s = a.params,
                r = a.$wrapperEl,
                n = a.progress,
                o = 0,
                l = 0;
            a.isHorizontal() ? (o = i ? -e : e) : (l = e),
                s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
                s.virtualTranslate ||
                    (te.transforms3d
                        ? r.transform(
                              "translate3d(" + o + "px, " + l + "px, 0px)"
                          )
                        : r.transform("translate(" + o + "px, " + l + "px)")),
                (a.previousTranslate = a.translate),
                (a.translate = a.isHorizontal() ? o : l);
            var d = a.maxTranslate() - a.minTranslate();
            (0 === d ? 0 : (e - a.minTranslate()) / d) !== n &&
                a.updateProgress(e),
                a.emit("setTranslate", a.translate, t);
        },
        minTranslate: function() {
            return -this.snapGrid[0];
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1];
        },
    };
    var c = {
        setTransition: function(e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var a = this,
                i = a.activeIndex,
                s = a.params,
                r = a.previousIndex;
            s.autoHeight && a.updateAutoHeight();
            var n = t;
            if (
                (n || (n = r < i ? "next" : i < r ? "prev" : "reset"),
                a.emit("transitionStart"),
                e && i !== r)
            ) {
                if ("reset" === n)
                    return void a.emit("slideResetTransitionStart");
                a.emit("slideChangeTransitionStart"),
                    "next" === n
                        ? a.emit("slideNextTransitionStart")
                        : a.emit("slidePrevTransitionStart");
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var a = this,
                i = a.activeIndex,
                s = a.previousIndex;
            (a.animating = !1), a.setTransition(0);
            var r = t;
            if (
                (r || (r = s < i ? "next" : i < s ? "prev" : "reset"),
                a.emit("transitionEnd"),
                e && i !== s)
            ) {
                if ("reset" === r)
                    return void a.emit("slideResetTransitionEnd");
                a.emit("slideChangeTransitionEnd"),
                    "next" === r
                        ? a.emit("slideNextTransitionEnd")
                        : a.emit("slidePrevTransitionEnd");
            }
        },
    };
    var u = {
        slideTo: function(e, t, a, i) {
            void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === a && (a = !0);
            var s = this,
                r = e;
            r < 0 && (r = 0);
            var n = s.params,
                o = s.snapGrid,
                l = s.slidesGrid,
                d = s.previousIndex,
                p = s.activeIndex,
                c = s.rtlTranslate;
            if (s.animating && n.preventInteractionOnTransition) return !1;
            var u = Math.floor(r / n.slidesPerGroup);
            u >= o.length && (u = o.length - 1),
                (p || n.initialSlide || 0) === (d || 0) &&
                    a &&
                    s.emit("beforeSlideChangeStart");
            var h,
                v = -o[u];
            if ((s.updateProgress(v), n.normalizeSlideIndex))
                for (var f = 0; f < l.length; f += 1)
                    -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
            if (s.initialized && r !== p) {
                if (
                    !s.allowSlideNext &&
                    v < s.translate &&
                    v < s.minTranslate()
                )
                    return !1;
                if (
                    !s.allowSlidePrev &&
                    v > s.translate &&
                    v > s.maxTranslate() &&
                    (p || 0) !== r
                )
                    return !1;
            }
            return (
                (h = p < r ? "next" : r < p ? "prev" : "reset"),
                (c && -v === s.translate) || (!c && v === s.translate)
                    ? (s.updateActiveIndex(r),
                      n.autoHeight && s.updateAutoHeight(),
                      s.updateSlidesClasses(),
                      "slide" !== n.effect && s.setTranslate(v),
                      "reset" !== h &&
                          (s.transitionStart(a, h), s.transitionEnd(a, h)),
                      !1)
                    : (0 !== t && te.transition
                          ? (s.setTransition(t),
                            s.setTranslate(v),
                            s.updateActiveIndex(r),
                            s.updateSlidesClasses(),
                            s.emit("beforeTransitionStart", t, i),
                            s.transitionStart(a, h),
                            s.animating ||
                                ((s.animating = !0),
                                s.onSlideToWrapperTransitionEnd ||
                                    (s.onSlideToWrapperTransitionEnd = function(
                                        e
                                    ) {
                                        s &&
                                            !s.destroyed &&
                                            e.target === this &&
                                            (s.$wrapperEl[0].removeEventListener(
                                                "transitionend",
                                                s.onSlideToWrapperTransitionEnd
                                            ),
                                            s.$wrapperEl[0].removeEventListener(
                                                "webkitTransitionEnd",
                                                s.onSlideToWrapperTransitionEnd
                                            ),
                                            (s.onSlideToWrapperTransitionEnd = null),
                                            delete s.onSlideToWrapperTransitionEnd,
                                            s.transitionEnd(a, h));
                                    }),
                                s.$wrapperEl[0].addEventListener(
                                    "transitionend",
                                    s.onSlideToWrapperTransitionEnd
                                ),
                                s.$wrapperEl[0].addEventListener(
                                    "webkitTransitionEnd",
                                    s.onSlideToWrapperTransitionEnd
                                )))
                          : (s.setTransition(0),
                            s.setTranslate(v),
                            s.updateActiveIndex(r),
                            s.updateSlidesClasses(),
                            s.emit("beforeTransitionStart", t, i),
                            s.transitionStart(a, h),
                            s.transitionEnd(a, h)),
                      !0)
            );
        },
        slideToLoop: function(e, t, a, i) {
            void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === a && (a = !0);
            var s = e;
            return (
                this.params.loop && (s += this.loopedSlides),
                this.slideTo(s, t, a, i)
            );
        },
        slideNext: function(e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                s = i.params,
                r = i.animating;
            return s.loop
                ? !r &&
                      (i.loopFix(),
                      (i._clientLeft = i.$wrapperEl[0].clientLeft),
                      i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a))
                : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a);
        },
        slidePrev: function(e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                s = i.params,
                r = i.animating,
                n = i.snapGrid,
                o = i.slidesGrid,
                l = i.rtlTranslate;
            if (s.loop) {
                if (r) return !1;
                i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            var p,
                c = d(l ? i.translate : -i.translate),
                u = n.map(function(e) {
                    return d(e);
                }),
                h =
                    (o.map(function(e) {
                        return d(e);
                    }),
                    n[u.indexOf(c)],
                    n[u.indexOf(c) - 1]);
            return (
                void 0 !== h &&
                    (p = o.indexOf(h)) < 0 &&
                    (p = i.activeIndex - 1),
                i.slideTo(p, e, t, a)
            );
        },
        slideReset: function(e, t, a) {
            return (
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                this.slideTo(this.activeIndex, e, t, a)
            );
        },
        slideToClosest: function(e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                s = i.activeIndex,
                r = Math.floor(s / i.params.slidesPerGroup);
            if (r < i.snapGrid.length - 1) {
                var n = i.rtlTranslate ? i.translate : -i.translate,
                    o = i.snapGrid[r];
                (i.snapGrid[r + 1] - o) / 2 < n - o &&
                    (s = i.params.slidesPerGroup);
            }
            return i.slideTo(s, e, t, a);
        },
        slideToClickedSlide: function() {
            var e,
                t = this,
                a = t.params,
                i = t.$wrapperEl,
                s =
                    "auto" === a.slidesPerView
                        ? t.slidesPerViewDynamic()
                        : a.slidesPerView,
                r = t.clickedIndex;
            if (a.loop) {
                if (t.animating) return;
                (e = parseInt(
                    L(t.clickedSlide).attr("data-swiper-slide-index"),
                    10
                )),
                    a.centeredSlides
                        ? r < t.loopedSlides - s / 2 ||
                          r > t.slides.length - t.loopedSlides + s / 2
                            ? (t.loopFix(),
                              (r = i
                                  .children(
                                      "." +
                                          a.slideClass +
                                          '[data-swiper-slide-index="' +
                                          e +
                                          '"]:not(.' +
                                          a.slideDuplicateClass +
                                          ")"
                                  )
                                  .eq(0)
                                  .index()),
                              ee.nextTick(function() {
                                  t.slideTo(r);
                              }))
                            : t.slideTo(r)
                        : r > t.slides.length - s
                        ? (t.loopFix(),
                          (r = i
                              .children(
                                  "." +
                                      a.slideClass +
                                      '[data-swiper-slide-index="' +
                                      e +
                                      '"]:not(.' +
                                      a.slideDuplicateClass +
                                      ")"
                              )
                              .eq(0)
                              .index()),
                          ee.nextTick(function() {
                              t.slideTo(r);
                          }))
                        : t.slideTo(r);
            } else t.slideTo(r);
        },
    };
    var h = {
        loopCreate: function() {
            var i = this,
                e = i.params,
                t = i.$wrapperEl;
            t.children(
                "." + e.slideClass + "." + e.slideDuplicateClass
            ).remove();
            var s = t.children("." + e.slideClass);
            if (e.loopFillGroupWithBlank) {
                var a = e.slidesPerGroup - (s.length % e.slidesPerGroup);
                if (a !== e.slidesPerGroup) {
                    for (var r = 0; r < a; r += 1) {
                        var n = L(f.createElement("div")).addClass(
                            e.slideClass + " " + e.slideBlankClass
                        );
                        t.append(n);
                    }
                    s = t.children("." + e.slideClass);
                }
            }
            "auto" !== e.slidesPerView ||
                e.loopedSlides ||
                (e.loopedSlides = s.length),
                (i.loopedSlides = parseInt(
                    e.loopedSlides || e.slidesPerView,
                    10
                )),
                (i.loopedSlides += e.loopAdditionalSlides),
                i.loopedSlides > s.length && (i.loopedSlides = s.length);
            var o = [],
                l = [];
            s.each(function(e, t) {
                var a = L(t);
                e < i.loopedSlides && l.push(t),
                    e < s.length && e >= s.length - i.loopedSlides && o.push(t),
                    a.attr("data-swiper-slide-index", e);
            });
            for (var d = 0; d < l.length; d += 1)
                t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
            for (var p = o.length - 1; 0 <= p; p -= 1)
                t.prepend(
                    L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass)
                );
        },
        loopFix: function() {
            var e,
                t = this,
                a = t.params,
                i = t.activeIndex,
                s = t.slides,
                r = t.loopedSlides,
                n = t.allowSlidePrev,
                o = t.allowSlideNext,
                l = t.snapGrid,
                d = t.rtlTranslate;
            (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
            var p = -l[i] - t.getTranslate();
            i < r
                ? ((e = s.length - 3 * r + i),
                  (e += r),
                  t.slideTo(e, 0, !1, !0) &&
                      0 !== p &&
                      t.setTranslate((d ? -t.translate : t.translate) - p))
                : (("auto" === a.slidesPerView && 2 * r <= i) ||
                      i >= s.length - r) &&
                  ((e = -s.length + i + r),
                  (e += r),
                  t.slideTo(e, 0, !1, !0) &&
                      0 !== p &&
                      t.setTranslate((d ? -t.translate : t.translate) - p));
            (t.allowSlidePrev = n), (t.allowSlideNext = o);
        },
        loopDestroy: function() {
            var e = this.$wrapperEl,
                t = this.params,
                a = this.slides;
            e
                .children(
                    "." +
                        t.slideClass +
                        "." +
                        t.slideDuplicateClass +
                        ",." +
                        t.slideClass +
                        "." +
                        t.slideBlankClass
                )
                .remove(),
                a.removeAttr("data-swiper-slide-index");
        },
    };
    var v = {
        setGrabCursor: function(e) {
            if (
                !(
                    te.touch ||
                    !this.params.simulateTouch ||
                    (this.params.watchOverflow && this.isLocked)
                )
            ) {
                var t = this.el;
                (t.style.cursor = "move"),
                    (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                    (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                    (t.style.cursor = e ? "grabbing" : "grab");
            }
        },
        unsetGrabCursor: function() {
            te.touch ||
                (this.params.watchOverflow && this.isLocked) ||
                (this.el.style.cursor = "");
        },
    };
    var m = {
            appendSlide: function(e) {
                var t = this,
                    a = t.$wrapperEl,
                    i = t.params;
                if (
                    (i.loop && t.loopDestroy(),
                    "object" == typeof e && "length" in e)
                )
                    for (var s = 0; s < e.length; s += 1)
                        e[s] && a.append(e[s]);
                else a.append(e);
                i.loop && t.loopCreate(),
                    (i.observer && te.observer) || t.update();
            },
            prependSlide: function(e) {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl,
                    s = t.activeIndex;
                a.loop && t.loopDestroy();
                var r = s + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var n = 0; n < e.length; n += 1)
                        e[n] && i.prepend(e[n]);
                    r = s + e.length;
                } else i.prepend(e);
                a.loop && t.loopCreate(),
                    (a.observer && te.observer) || t.update(),
                    t.slideTo(r, 0, !1);
            },
            addSlide: function(e, t) {
                var a = this,
                    i = a.$wrapperEl,
                    s = a.params,
                    r = a.activeIndex;
                s.loop &&
                    ((r -= a.loopedSlides),
                    a.loopDestroy(),
                    (a.slides = i.children("." + s.slideClass)));
                var n = a.slides.length;
                if (e <= 0) a.prependSlide(t);
                else if (n <= e) a.appendSlide(t);
                else {
                    for (
                        var o = e < r ? r + 1 : r, l = [], d = n - 1;
                        e <= d;
                        d -= 1
                    ) {
                        var p = a.slides.eq(d);
                        p.remove(), l.unshift(p);
                    }
                    if ("object" == typeof t && "length" in t) {
                        for (var c = 0; c < t.length; c += 1)
                            t[c] && i.append(t[c]);
                        o = e < r ? r + t.length : r;
                    } else i.append(t);
                    for (var u = 0; u < l.length; u += 1) i.append(l[u]);
                    s.loop && a.loopCreate(),
                        (s.observer && te.observer) || a.update(),
                        s.loop
                            ? a.slideTo(o + a.loopedSlides, 0, !1)
                            : a.slideTo(o, 0, !1);
                }
            },
            removeSlide: function(e) {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl,
                    s = t.activeIndex;
                a.loop &&
                    ((s -= t.loopedSlides),
                    t.loopDestroy(),
                    (t.slides = i.children("." + a.slideClass)));
                var r,
                    n = s;
                if ("object" == typeof e && "length" in e) {
                    for (var o = 0; o < e.length; o += 1)
                        (r = e[o]),
                            t.slides[r] && t.slides.eq(r).remove(),
                            r < n && (n -= 1);
                    n = Math.max(n, 0);
                } else
                    (r = e),
                        t.slides[r] && t.slides.eq(r).remove(),
                        r < n && (n -= 1),
                        (n = Math.max(n, 0));
                a.loop && t.loopCreate(),
                    (a.observer && te.observer) || t.update(),
                    a.loop
                        ? t.slideTo(n + t.loopedSlides, 0, !1)
                        : t.slideTo(n, 0, !1);
            },
            removeAllSlides: function() {
                for (var e = [], t = 0; t < this.slides.length; t += 1)
                    e.push(t);
                this.removeSlide(e);
            },
        },
        g = (function() {
            var e = J.navigator.userAgent,
                t = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    windows: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    cordova: J.cordova || J.phonegap,
                    phonegap: J.cordova || J.phonegap,
                },
                a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                s = e.match(/(iPad).*OS\s([\d_]+)/),
                r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (
                (a &&
                    ((t.os = "windows"),
                    (t.osVersion = a[2]),
                    (t.windows = !0)),
                i &&
                    !a &&
                    ((t.os = "android"),
                    (t.osVersion = i[2]),
                    (t.android = !0),
                    (t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome"))),
                (s || n || r) && ((t.os = "ios"), (t.ios = !0)),
                n &&
                    !r &&
                    ((t.osVersion = n[2].replace(/_/g, ".")), (t.iphone = !0)),
                s && ((t.osVersion = s[2].replace(/_/g, ".")), (t.ipad = !0)),
                r &&
                    ((t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null),
                    (t.iphone = !0)),
                t.ios &&
                    t.osVersion &&
                    0 <= e.indexOf("Version/") &&
                    "10" === t.osVersion.split(".")[0] &&
                    (t.osVersion = e
                        .toLowerCase()
                        .split("version/")[1]
                        .split(" ")[0]),
                (t.desktop = !(t.os || t.android || t.webView)),
                (t.webView =
                    (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i)),
                t.os && "ios" === t.os)
            ) {
                var o = t.osVersion.split("."),
                    l = f.querySelector('meta[name="viewport"]');
                t.minimalUi =
                    !t.webView &&
                    (r || n) &&
                    (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) &&
                    l &&
                    0 <= l.getAttribute("content").indexOf("minimal-ui");
            }
            return (t.pixelRatio = J.devicePixelRatio || 1), t;
        })();
    function b() {
        var e = this,
            t = e.params,
            a = e.el;
        if (!a || 0 !== a.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var i = e.allowSlideNext,
                s = e.allowSlidePrev,
                r = e.snapGrid;
            if (
                ((e.allowSlideNext = !0),
                (e.allowSlidePrev = !0),
                e.updateSize(),
                e.updateSlides(),
                t.freeMode)
            ) {
                var n = Math.min(
                    Math.max(e.translate, e.maxTranslate()),
                    e.minTranslate()
                );
                e.setTranslate(n),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses(),
                    t.autoHeight && e.updateAutoHeight();
            } else
                e.updateSlidesClasses(),
                    ("auto" === t.slidesPerView || 1 < t.slidesPerView) &&
                    e.isEnd &&
                    !e.params.centeredSlides
                        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                        : e.slideTo(e.activeIndex, 0, !1, !0);
            (e.allowSlidePrev = s),
                (e.allowSlideNext = i),
                e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
        }
    }
    var w = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: 0.02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsInverse: !1,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: 0.85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
        },
        y = {
            update: d,
            translate: p,
            transition: c,
            slide: u,
            loop: h,
            grabCursor: v,
            manipulation: m,
            events: {
                attachEvents: function() {
                    var e = this,
                        t = e.params,
                        a = e.touchEvents,
                        i = e.el,
                        s = e.wrapperEl;
                    (e.onTouchStart = function(e) {
                        var t = this,
                            a = t.touchEventsData,
                            i = t.params,
                            s = t.touches;
                        if (!t.animating || !i.preventInteractionOnTransition) {
                            var r = e;
                            if (
                                (r.originalEvent && (r = r.originalEvent),
                                (a.isTouchEvent = "touchstart" === r.type),
                                (a.isTouchEvent ||
                                    !("which" in r) ||
                                    3 !== r.which) &&
                                    !(
                                        (!a.isTouchEvent &&
                                            "button" in r &&
                                            0 < r.button) ||
                                        (a.isTouched && a.isMoved)
                                    ))
                            )
                                if (
                                    i.noSwiping &&
                                    L(r.target).closest(
                                        i.noSwipingSelector
                                            ? i.noSwipingSelector
                                            : "." + i.noSwipingClass
                                    )[0]
                                )
                                    t.allowClick = !0;
                                else if (
                                    !i.swipeHandler ||
                                    L(r).closest(i.swipeHandler)[0]
                                ) {
                                    (s.currentX =
                                        "touchstart" === r.type
                                            ? r.targetTouches[0].pageX
                                            : r.pageX),
                                        (s.currentY =
                                            "touchstart" === r.type
                                                ? r.targetTouches[0].pageY
                                                : r.pageY);
                                    var n = s.currentX,
                                        o = s.currentY,
                                        l =
                                            i.edgeSwipeDetection ||
                                            i.iOSEdgeSwipeDetection,
                                        d =
                                            i.edgeSwipeThreshold ||
                                            i.iOSEdgeSwipeThreshold;
                                    if (
                                        !l ||
                                        !(n <= d || n >= J.screen.width - d)
                                    ) {
                                        if (
                                            (ee.extend(a, {
                                                isTouched: !0,
                                                isMoved: !1,
                                                allowTouchCallbacks: !0,
                                                isScrolling: void 0,
                                                startMoving: void 0,
                                            }),
                                            (s.startX = n),
                                            (s.startY = o),
                                            (a.touchStartTime = ee.now()),
                                            (t.allowClick = !0),
                                            t.updateSize(),
                                            (t.swipeDirection = void 0),
                                            0 < i.threshold &&
                                                (a.allowThresholdMove = !1),
                                            "touchstart" !== r.type)
                                        ) {
                                            var p = !0;
                                            L(r.target).is(a.formElements) &&
                                                (p = !1),
                                                f.activeElement &&
                                                    L(f.activeElement).is(
                                                        a.formElements
                                                    ) &&
                                                    f.activeElement !==
                                                        r.target &&
                                                    f.activeElement.blur();
                                            var c =
                                                p &&
                                                t.allowTouchMove &&
                                                i.touchStartPreventDefault;
                                            (i.touchStartForcePreventDefault ||
                                                c) &&
                                                r.preventDefault();
                                        }
                                        t.emit("touchStart", r);
                                    }
                                }
                        }
                    }.bind(e)),
                        (e.onTouchMove = function(e) {
                            var t = this,
                                a = t.touchEventsData,
                                i = t.params,
                                s = t.touches,
                                r = t.rtlTranslate,
                                n = e;
                            if (
                                (n.originalEvent && (n = n.originalEvent),
                                a.isTouched)
                            ) {
                                if (!a.isTouchEvent || "mousemove" !== n.type) {
                                    var o =
                                            "touchmove" === n.type
                                                ? n.targetTouches[0].pageX
                                                : n.pageX,
                                        l =
                                            "touchmove" === n.type
                                                ? n.targetTouches[0].pageY
                                                : n.pageY;
                                    if (n.preventedByNestedSwiper)
                                        return (
                                            (s.startX = o), void (s.startY = l)
                                        );
                                    if (!t.allowTouchMove)
                                        return (
                                            (t.allowClick = !1),
                                            void (
                                                a.isTouched &&
                                                (ee.extend(s, {
                                                    startX: o,
                                                    startY: l,
                                                    currentX: o,
                                                    currentY: l,
                                                }),
                                                (a.touchStartTime = ee.now()))
                                            )
                                        );
                                    if (
                                        a.isTouchEvent &&
                                        i.touchReleaseOnEdges &&
                                        !i.loop
                                    )
                                        if (t.isVertical()) {
                                            if (
                                                (l < s.startY &&
                                                    t.translate <=
                                                        t.maxTranslate()) ||
                                                (l > s.startY &&
                                                    t.translate >=
                                                        t.minTranslate())
                                            )
                                                return (
                                                    (a.isTouched = !1),
                                                    void (a.isMoved = !1)
                                                );
                                        } else if (
                                            (o < s.startX &&
                                                t.translate <=
                                                    t.maxTranslate()) ||
                                            (o > s.startX &&
                                                t.translate >= t.minTranslate())
                                        )
                                            return;
                                    if (
                                        a.isTouchEvent &&
                                        f.activeElement &&
                                        n.target === f.activeElement &&
                                        L(n.target).is(a.formElements)
                                    )
                                        return (
                                            (a.isMoved = !0),
                                            void (t.allowClick = !1)
                                        );
                                    if (
                                        (a.allowTouchCallbacks &&
                                            t.emit("touchMove", n),
                                        !(
                                            n.targetTouches &&
                                            1 < n.targetTouches.length
                                        ))
                                    ) {
                                        (s.currentX = o), (s.currentY = l);
                                        var d,
                                            p = s.currentX - s.startX,
                                            c = s.currentY - s.startY;
                                        if (
                                            !(
                                                t.params.threshold &&
                                                Math.sqrt(
                                                    Math.pow(p, 2) +
                                                        Math.pow(c, 2)
                                                ) < t.params.threshold
                                            )
                                        )
                                            if (
                                                (void 0 === a.isScrolling &&
                                                    ((t.isHorizontal() &&
                                                        s.currentY ===
                                                            s.startY) ||
                                                    (t.isVertical() &&
                                                        s.currentX === s.startX)
                                                        ? (a.isScrolling = !1)
                                                        : 25 <= p * p + c * c &&
                                                          ((d =
                                                              (180 *
                                                                  Math.atan2(
                                                                      Math.abs(
                                                                          c
                                                                      ),
                                                                      Math.abs(
                                                                          p
                                                                      )
                                                                  )) /
                                                              Math.PI),
                                                          (a.isScrolling = t.isHorizontal()
                                                              ? d > i.touchAngle
                                                              : 90 - d >
                                                                i.touchAngle))),
                                                a.isScrolling &&
                                                    t.emit(
                                                        "touchMoveOpposite",
                                                        n
                                                    ),
                                                void 0 === a.startMoving &&
                                                    ((s.currentX === s.startX &&
                                                        s.currentY ===
                                                            s.startY) ||
                                                        (a.startMoving = !0)),
                                                a.isScrolling)
                                            )
                                                a.isTouched = !1;
                                            else if (a.startMoving) {
                                                (t.allowClick = !1),
                                                    n.preventDefault(),
                                                    i.touchMoveStopPropagation &&
                                                        !i.nested &&
                                                        n.stopPropagation(),
                                                    a.isMoved ||
                                                        (i.loop && t.loopFix(),
                                                        (a.startTranslate = t.getTranslate()),
                                                        t.setTransition(0),
                                                        t.animating &&
                                                            t.$wrapperEl.trigger(
                                                                "webkitTransitionEnd transitionend"
                                                            ),
                                                        (a.allowMomentumBounce = !1),
                                                        !i.grabCursor ||
                                                            (!0 !==
                                                                t.allowSlideNext &&
                                                                !0 !==
                                                                    t.allowSlidePrev) ||
                                                            t.setGrabCursor(!0),
                                                        t.emit(
                                                            "sliderFirstMove",
                                                            n
                                                        )),
                                                    t.emit("sliderMove", n),
                                                    (a.isMoved = !0);
                                                var u = t.isHorizontal()
                                                    ? p
                                                    : c;
                                                (s.diff = u),
                                                    (u *= i.touchRatio),
                                                    r && (u = -u),
                                                    (t.swipeDirection =
                                                        0 < u
                                                            ? "prev"
                                                            : "next"),
                                                    (a.currentTranslate =
                                                        u + a.startTranslate);
                                                var h = !0,
                                                    v = i.resistanceRatio;
                                                if (
                                                    (i.touchReleaseOnEdges &&
                                                        (v = 0),
                                                    0 < u &&
                                                    a.currentTranslate >
                                                        t.minTranslate()
                                                        ? ((h = !1),
                                                          i.resistance &&
                                                              (a.currentTranslate =
                                                                  t.minTranslate() -
                                                                  1 +
                                                                  Math.pow(
                                                                      -t.minTranslate() +
                                                                          a.startTranslate +
                                                                          u,
                                                                      v
                                                                  )))
                                                        : u < 0 &&
                                                          a.currentTranslate <
                                                              t.maxTranslate() &&
                                                          ((h = !1),
                                                          i.resistance &&
                                                              (a.currentTranslate =
                                                                  t.maxTranslate() +
                                                                  1 -
                                                                  Math.pow(
                                                                      t.maxTranslate() -
                                                                          a.startTranslate -
                                                                          u,
                                                                      v
                                                                  ))),
                                                    h &&
                                                        (n.preventedByNestedSwiper = !0),
                                                    !t.allowSlideNext &&
                                                        "next" ===
                                                            t.swipeDirection &&
                                                        a.currentTranslate <
                                                            a.startTranslate &&
                                                        (a.currentTranslate =
                                                            a.startTranslate),
                                                    !t.allowSlidePrev &&
                                                        "prev" ===
                                                            t.swipeDirection &&
                                                        a.currentTranslate >
                                                            a.startTranslate &&
                                                        (a.currentTranslate =
                                                            a.startTranslate),
                                                    0 < i.threshold)
                                                ) {
                                                    if (
                                                        !(
                                                            Math.abs(u) >
                                                                i.threshold ||
                                                            a.allowThresholdMove
                                                        )
                                                    )
                                                        return void (a.currentTranslate =
                                                            a.startTranslate);
                                                    if (!a.allowThresholdMove)
                                                        return (
                                                            (a.allowThresholdMove = !0),
                                                            (s.startX =
                                                                s.currentX),
                                                            (s.startY =
                                                                s.currentY),
                                                            (a.currentTranslate =
                                                                a.startTranslate),
                                                            void (s.diff = t.isHorizontal()
                                                                ? s.currentX -
                                                                  s.startX
                                                                : s.currentY -
                                                                  s.startY)
                                                        );
                                                }
                                                i.followFinger &&
                                                    ((i.freeMode ||
                                                        i.watchSlidesProgress ||
                                                        i.watchSlidesVisibility) &&
                                                        (t.updateActiveIndex(),
                                                        t.updateSlidesClasses()),
                                                    i.freeMode &&
                                                        (0 ===
                                                            a.velocities
                                                                .length &&
                                                            a.velocities.push({
                                                                position:
                                                                    s[
                                                                        t.isHorizontal()
                                                                            ? "startX"
                                                                            : "startY"
                                                                    ],
                                                                time:
                                                                    a.touchStartTime,
                                                            }),
                                                        a.velocities.push({
                                                            position:
                                                                s[
                                                                    t.isHorizontal()
                                                                        ? "currentX"
                                                                        : "currentY"
                                                                ],
                                                            time: ee.now(),
                                                        })),
                                                    t.updateProgress(
                                                        a.currentTranslate
                                                    ),
                                                    t.setTranslate(
                                                        a.currentTranslate
                                                    ));
                                            }
                                    }
                                }
                            } else
                                a.startMoving &&
                                    a.isScrolling &&
                                    t.emit("touchMoveOpposite", n);
                        }.bind(e)),
                        (e.onTouchEnd = function(e) {
                            var t = this,
                                a = t.touchEventsData,
                                i = t.params,
                                s = t.touches,
                                r = t.rtlTranslate,
                                n = t.$wrapperEl,
                                o = t.slidesGrid,
                                l = t.snapGrid,
                                d = e;
                            if (
                                (d.originalEvent && (d = d.originalEvent),
                                a.allowTouchCallbacks && t.emit("touchEnd", d),
                                (a.allowTouchCallbacks = !1),
                                !a.isTouched)
                            )
                                return (
                                    a.isMoved &&
                                        i.grabCursor &&
                                        t.setGrabCursor(!1),
                                    (a.isMoved = !1),
                                    void (a.startMoving = !1)
                                );
                            i.grabCursor &&
                                a.isMoved &&
                                a.isTouched &&
                                (!0 === t.allowSlideNext ||
                                    !0 === t.allowSlidePrev) &&
                                t.setGrabCursor(!1);
                            var p,
                                c = ee.now(),
                                u = c - a.touchStartTime;
                            if (
                                (t.allowClick &&
                                    (t.updateClickedSlide(d),
                                    t.emit("tap", d),
                                    u < 300 &&
                                        300 < c - a.lastClickTime &&
                                        (a.clickTimeout &&
                                            clearTimeout(a.clickTimeout),
                                        (a.clickTimeout = ee.nextTick(
                                            function() {
                                                t &&
                                                    !t.destroyed &&
                                                    t.emit("click", d);
                                            },
                                            300
                                        ))),
                                    u < 300 &&
                                        c - a.lastClickTime < 300 &&
                                        (a.clickTimeout &&
                                            clearTimeout(a.clickTimeout),
                                        t.emit("doubleTap", d))),
                                (a.lastClickTime = ee.now()),
                                ee.nextTick(function() {
                                    t.destroyed || (t.allowClick = !0);
                                }),
                                !a.isTouched ||
                                    !a.isMoved ||
                                    !t.swipeDirection ||
                                    0 === s.diff ||
                                    a.currentTranslate === a.startTranslate)
                            )
                                return (
                                    (a.isTouched = !1),
                                    (a.isMoved = !1),
                                    void (a.startMoving = !1)
                                );
                            if (
                                ((a.isTouched = !1),
                                (a.isMoved = !1),
                                (a.startMoving = !1),
                                (p = i.followFinger
                                    ? r
                                        ? t.translate
                                        : -t.translate
                                    : -a.currentTranslate),
                                i.freeMode)
                            ) {
                                if (p < -t.minTranslate())
                                    return void t.slideTo(t.activeIndex);
                                if (p > -t.maxTranslate())
                                    return void (t.slides.length < l.length
                                        ? t.slideTo(l.length - 1)
                                        : t.slideTo(t.slides.length - 1));
                                if (i.freeModeMomentum) {
                                    if (1 < a.velocities.length) {
                                        var h = a.velocities.pop(),
                                            v = a.velocities.pop(),
                                            f = h.position - v.position,
                                            m = h.time - v.time;
                                        (t.velocity = f / m),
                                            (t.velocity /= 2),
                                            Math.abs(t.velocity) <
                                                i.freeModeMinimumVelocity &&
                                                (t.velocity = 0),
                                            (150 < m ||
                                                300 < ee.now() - h.time) &&
                                                (t.velocity = 0);
                                    } else t.velocity = 0;
                                    (t.velocity *=
                                        i.freeModeMomentumVelocityRatio),
                                        (a.velocities.length = 0);
                                    var g = 1e3 * i.freeModeMomentumRatio,
                                        b = t.velocity * g,
                                        w = t.translate + b;
                                    r && (w = -w);
                                    var y,
                                        x,
                                        T = !1,
                                        E =
                                            20 *
                                            Math.abs(t.velocity) *
                                            i.freeModeMomentumBounceRatio;
                                    if (w < t.maxTranslate())
                                        i.freeModeMomentumBounce
                                            ? (w + t.maxTranslate() < -E &&
                                                  (w = t.maxTranslate() - E),
                                              (y = t.maxTranslate()),
                                              (T = !0),
                                              (a.allowMomentumBounce = !0))
                                            : (w = t.maxTranslate()),
                                            i.loop &&
                                                i.centeredSlides &&
                                                (x = !0);
                                    else if (w > t.minTranslate())
                                        i.freeModeMomentumBounce
                                            ? (w - t.minTranslate() > E &&
                                                  (w = t.minTranslate() + E),
                                              (y = t.minTranslate()),
                                              (T = !0),
                                              (a.allowMomentumBounce = !0))
                                            : (w = t.minTranslate()),
                                            i.loop &&
                                                i.centeredSlides &&
                                                (x = !0);
                                    else if (i.freeModeSticky) {
                                        for (var S, C = 0; C < l.length; C += 1)
                                            if (l[C] > -w) {
                                                S = C;
                                                break;
                                            }
                                        w = -(w =
                                            Math.abs(l[S] - w) <
                                                Math.abs(l[S - 1] - w) ||
                                            "next" === t.swipeDirection
                                                ? l[S]
                                                : l[S - 1]);
                                    }
                                    if (
                                        (x &&
                                            t.once("transitionEnd", function() {
                                                t.loopFix();
                                            }),
                                        0 !== t.velocity)
                                    )
                                        g = r
                                            ? Math.abs(
                                                  (-w - t.translate) /
                                                      t.velocity
                                              )
                                            : Math.abs(
                                                  (w - t.translate) / t.velocity
                                              );
                                    else if (i.freeModeSticky)
                                        return void t.slideToClosest();
                                    i.freeModeMomentumBounce && T
                                        ? (t.updateProgress(y),
                                          t.setTransition(g),
                                          t.setTranslate(w),
                                          t.transitionStart(
                                              !0,
                                              t.swipeDirection
                                          ),
                                          (t.animating = !0),
                                          n.transitionEnd(function() {
                                              t &&
                                                  !t.destroyed &&
                                                  a.allowMomentumBounce &&
                                                  (t.emit("momentumBounce"),
                                                  t.setTransition(i.speed),
                                                  t.setTranslate(y),
                                                  n.transitionEnd(function() {
                                                      t &&
                                                          !t.destroyed &&
                                                          t.transitionEnd();
                                                  }));
                                          }))
                                        : t.velocity
                                        ? (t.updateProgress(w),
                                          t.setTransition(g),
                                          t.setTranslate(w),
                                          t.transitionStart(
                                              !0,
                                              t.swipeDirection
                                          ),
                                          t.animating ||
                                              ((t.animating = !0),
                                              n.transitionEnd(function() {
                                                  t &&
                                                      !t.destroyed &&
                                                      t.transitionEnd();
                                              })))
                                        : t.updateProgress(w),
                                        t.updateActiveIndex(),
                                        t.updateSlidesClasses();
                                } else if (i.freeModeSticky)
                                    return void t.slideToClosest();
                                (!i.freeModeMomentum || u >= i.longSwipesMs) &&
                                    (t.updateProgress(),
                                    t.updateActiveIndex(),
                                    t.updateSlidesClasses());
                            } else {
                                for (
                                    var M = 0, z = t.slidesSizesGrid[0], P = 0;
                                    P < o.length;
                                    P += i.slidesPerGroup
                                )
                                    void 0 !== o[P + i.slidesPerGroup]
                                        ? p >= o[P] &&
                                          p < o[P + i.slidesPerGroup] &&
                                          (z =
                                              o[(M = P) + i.slidesPerGroup] -
                                              o[P])
                                        : p >= o[P] &&
                                          ((M = P),
                                          (z =
                                              o[o.length - 1] -
                                              o[o.length - 2]));
                                var k = (p - o[M]) / z;
                                if (u > i.longSwipesMs) {
                                    if (!i.longSwipes)
                                        return void t.slideTo(t.activeIndex);
                                    "next" === t.swipeDirection &&
                                        (k >= i.longSwipesRatio
                                            ? t.slideTo(M + i.slidesPerGroup)
                                            : t.slideTo(M)),
                                        "prev" === t.swipeDirection &&
                                            (k > 1 - i.longSwipesRatio
                                                ? t.slideTo(
                                                      M + i.slidesPerGroup
                                                  )
                                                : t.slideTo(M));
                                } else {
                                    if (!i.shortSwipes)
                                        return void t.slideTo(t.activeIndex);
                                    "next" === t.swipeDirection &&
                                        t.slideTo(M + i.slidesPerGroup),
                                        "prev" === t.swipeDirection &&
                                            t.slideTo(M);
                                }
                            }
                        }.bind(e)),
                        (e.onClick = function(e) {
                            this.allowClick ||
                                (this.params.preventClicks &&
                                    e.preventDefault(),
                                this.params.preventClicksPropagation &&
                                    this.animating &&
                                    (e.stopPropagation(),
                                    e.stopImmediatePropagation()));
                        }.bind(e));
                    var r = "container" === t.touchEventsTarget ? i : s,
                        n = !!t.nested;
                    if (
                        te.touch ||
                        (!te.pointerEvents && !te.prefixedPointerEvents)
                    ) {
                        if (te.touch) {
                            var o = !(
                                "touchstart" !== a.start ||
                                !te.passiveListener ||
                                !t.passiveListeners
                            ) && { passive: !0, capture: !1 };
                            r.addEventListener(a.start, e.onTouchStart, o),
                                r.addEventListener(
                                    a.move,
                                    e.onTouchMove,
                                    te.passiveListener
                                        ? { passive: !1, capture: n }
                                        : n
                                ),
                                r.addEventListener(a.end, e.onTouchEnd, o);
                        }
                        ((t.simulateTouch && !g.ios && !g.android) ||
                            (t.simulateTouch && !te.touch && g.ios)) &&
                            (r.addEventListener(
                                "mousedown",
                                e.onTouchStart,
                                !1
                            ),
                            f.addEventListener("mousemove", e.onTouchMove, n),
                            f.addEventListener("mouseup", e.onTouchEnd, !1));
                    } else
                        r.addEventListener(a.start, e.onTouchStart, !1),
                            f.addEventListener(a.move, e.onTouchMove, n),
                            f.addEventListener(a.end, e.onTouchEnd, !1);
                    (t.preventClicks || t.preventClicksPropagation) &&
                        r.addEventListener("click", e.onClick, !0),
                        e.on(
                            g.ios || g.android
                                ? "resize orientationchange observerUpdate"
                                : "resize observerUpdate",
                            b,
                            !0
                        );
                },
                detachEvents: function() {
                    var e = this,
                        t = e.params,
                        a = e.touchEvents,
                        i = e.el,
                        s = e.wrapperEl,
                        r = "container" === t.touchEventsTarget ? i : s,
                        n = !!t.nested;
                    if (
                        te.touch ||
                        (!te.pointerEvents && !te.prefixedPointerEvents)
                    ) {
                        if (te.touch) {
                            var o = !(
                                "onTouchStart" !== a.start ||
                                !te.passiveListener ||
                                !t.passiveListeners
                            ) && { passive: !0, capture: !1 };
                            r.removeEventListener(a.start, e.onTouchStart, o),
                                r.removeEventListener(a.move, e.onTouchMove, n),
                                r.removeEventListener(a.end, e.onTouchEnd, o);
                        }
                        ((t.simulateTouch && !g.ios && !g.android) ||
                            (t.simulateTouch && !te.touch && g.ios)) &&
                            (r.removeEventListener(
                                "mousedown",
                                e.onTouchStart,
                                !1
                            ),
                            f.removeEventListener(
                                "mousemove",
                                e.onTouchMove,
                                n
                            ),
                            f.removeEventListener("mouseup", e.onTouchEnd, !1));
                    } else
                        r.removeEventListener(a.start, e.onTouchStart, !1),
                            f.removeEventListener(a.move, e.onTouchMove, n),
                            f.removeEventListener(a.end, e.onTouchEnd, !1);
                    (t.preventClicks || t.preventClicksPropagation) &&
                        r.removeEventListener("click", e.onClick, !0),
                        e.off(
                            g.ios || g.android
                                ? "resize orientationchange observerUpdate"
                                : "resize observerUpdate",
                            b
                        );
                },
            },
            breakpoints: {
                setBreakpoint: function() {
                    var e = this,
                        t = e.activeIndex,
                        a = e.initialized,
                        i = e.loopedSlides;
                    void 0 === i && (i = 0);
                    var s = e.params,
                        r = s.breakpoints;
                    if (r && (!r || 0 !== Object.keys(r).length)) {
                        var n = e.getBreakpoint(r);
                        if (n && e.currentBreakpoint !== n) {
                            var o = n in r ? r[n] : void 0;
                            o &&
                                [
                                    "slidesPerView",
                                    "spaceBetween",
                                    "slidesPerGroup",
                                ].forEach(function(e) {
                                    var t = o[e];
                                    void 0 !== t &&
                                        (o[e] =
                                            "slidesPerView" !== e ||
                                            ("AUTO" !== t && "auto" !== t)
                                                ? "slidesPerView" === e
                                                    ? parseFloat(t)
                                                    : parseInt(t, 10)
                                                : "auto");
                                });
                            var l = o || e.originalParams,
                                d = l.direction && l.direction !== s.direction,
                                p =
                                    s.loop &&
                                    (l.slidesPerView !== s.slidesPerView || d);
                            d && a && e.changeDirection(),
                                ee.extend(e.params, l),
                                ee.extend(e, {
                                    allowTouchMove: e.params.allowTouchMove,
                                    allowSlideNext: e.params.allowSlideNext,
                                    allowSlidePrev: e.params.allowSlidePrev,
                                }),
                                (e.currentBreakpoint = n),
                                p &&
                                    a &&
                                    (e.loopDestroy(),
                                    e.loopCreate(),
                                    e.updateSlides(),
                                    e.slideTo(t - i + e.loopedSlides, 0, !1)),
                                e.emit("breakpoint", l);
                        }
                    }
                },
                getBreakpoint: function(e) {
                    if (e) {
                        var t = !1,
                            a = [];
                        Object.keys(e).forEach(function(e) {
                            a.push(e);
                        }),
                            a.sort(function(e, t) {
                                return parseInt(e, 10) - parseInt(t, 10);
                            });
                        for (var i = 0; i < a.length; i += 1) {
                            var s = a[i];
                            this.params.breakpointsInverse
                                ? s <= J.innerWidth && (t = s)
                                : s >= J.innerWidth && !t && (t = s);
                        }
                        return t || "max";
                    }
                },
            },
            checkOverflow: {
                checkOverflow: function() {
                    var e = this,
                        t = e.isLocked;
                    (e.isLocked = 1 === e.snapGrid.length),
                        (e.allowSlideNext = !e.isLocked),
                        (e.allowSlidePrev = !e.isLocked),
                        t !== e.isLocked &&
                            e.emit(e.isLocked ? "lock" : "unlock"),
                        t &&
                            t !== e.isLocked &&
                            ((e.isEnd = !1), e.navigation.update());
                },
            },
            classes: {
                addClasses: function() {
                    var t = this.classNames,
                        a = this.params,
                        e = this.rtl,
                        i = this.$el,
                        s = [];
                    s.push("initialized"),
                        s.push(a.direction),
                        a.freeMode && s.push("free-mode"),
                        te.flexbox || s.push("no-flexbox"),
                        a.autoHeight && s.push("autoheight"),
                        e && s.push("rtl"),
                        1 < a.slidesPerColumn && s.push("multirow"),
                        g.android && s.push("android"),
                        g.ios && s.push("ios"),
                        (I.isIE || I.isEdge) &&
                            (te.pointerEvents || te.prefixedPointerEvents) &&
                            s.push("wp8-" + a.direction),
                        s.forEach(function(e) {
                            t.push(a.containerModifierClass + e);
                        }),
                        i.addClass(t.join(" "));
                },
                removeClasses: function() {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "));
                },
            },
            images: {
                loadImage: function(e, t, a, i, s, r) {
                    var n;
                    function o() {
                        r && r();
                    }
                    e.complete && s
                        ? o()
                        : t
                        ? (((n = new J.Image()).onload = o),
                          (n.onerror = o),
                          i && (n.sizes = i),
                          a && (n.srcset = a),
                          t && (n.src = t))
                        : o();
                },
                preloadImages: function() {
                    var e = this;
                    function t() {
                        null != e &&
                            e &&
                            !e.destroyed &&
                            (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                            e.imagesLoaded === e.imagesToLoad.length &&
                                (e.params.updateOnImagesReady && e.update(),
                                e.emit("imagesReady")));
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var a = 0; a < e.imagesToLoad.length; a += 1) {
                        var i = e.imagesToLoad[a];
                        e.loadImage(
                            i,
                            i.currentSrc || i.getAttribute("src"),
                            i.srcset || i.getAttribute("srcset"),
                            i.sizes || i.getAttribute("sizes"),
                            !0,
                            t
                        );
                    }
                },
            },
        },
        x = {},
        T = (function(u) {
            function h() {
                for (var e, t, s, a = [], i = arguments.length; i--; )
                    a[i] = arguments[i];
                1 === a.length &&
                a[0].constructor &&
                a[0].constructor === Object
                    ? (s = a[0])
                    : ((t = (e = a)[0]), (s = e[1])),
                    s || (s = {}),
                    (s = ee.extend({}, s)),
                    t && !s.el && (s.el = t),
                    u.call(this, s),
                    Object.keys(y).forEach(function(t) {
                        Object.keys(y[t]).forEach(function(e) {
                            h.prototype[e] || (h.prototype[e] = y[t][e]);
                        });
                    });
                var r = this;
                void 0 === r.modules && (r.modules = {}),
                    Object.keys(r.modules).forEach(function(e) {
                        var t = r.modules[e];
                        if (t.params) {
                            var a = Object.keys(t.params)[0],
                                i = t.params[a];
                            if ("object" != typeof i || null === i) return;
                            if (!(a in s && "enabled" in i)) return;
                            !0 === s[a] && (s[a] = { enabled: !0 }),
                                "object" != typeof s[a] ||
                                    "enabled" in s[a] ||
                                    (s[a].enabled = !0),
                                s[a] || (s[a] = { enabled: !1 });
                        }
                    });
                var n = ee.extend({}, w);
                r.useModulesParams(n),
                    (r.params = ee.extend({}, n, x, s)),
                    (r.originalParams = ee.extend({}, r.params)),
                    (r.passedParams = ee.extend({}, s));
                var o = (r.$ = L)(r.params.el);
                if ((t = o[0])) {
                    if (1 < o.length) {
                        var l = [];
                        return (
                            o.each(function(e, t) {
                                var a = ee.extend({}, s, { el: t });
                                l.push(new h(a));
                            }),
                            l
                        );
                    }
                    (t.swiper = r), o.data("swiper", r);
                    var d,
                        p,
                        c = o.children("." + r.params.wrapperClass);
                    return (
                        ee.extend(r, {
                            $el: o,
                            el: t,
                            $wrapperEl: c,
                            wrapperEl: c[0],
                            classNames: [],
                            slides: L(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function() {
                                return "horizontal" === r.params.direction;
                            },
                            isVertical: function() {
                                return "vertical" === r.params.direction;
                            },
                            rtl:
                                "rtl" === t.dir.toLowerCase() ||
                                "rtl" === o.css("direction"),
                            rtlTranslate:
                                "horizontal" === r.params.direction &&
                                ("rtl" === t.dir.toLowerCase() ||
                                    "rtl" === o.css("direction")),
                            wrongRTL: "-webkit-box" === c.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: r.params.allowSlideNext,
                            allowSlidePrev: r.params.allowSlidePrev,
                            touchEvents:
                                ((d = ["touchstart", "touchmove", "touchend"]),
                                (p = ["mousedown", "mousemove", "mouseup"]),
                                te.pointerEvents
                                    ? (p = [
                                          "pointerdown",
                                          "pointermove",
                                          "pointerup",
                                      ])
                                    : te.prefixedPointerEvents &&
                                      (p = [
                                          "MSPointerDown",
                                          "MSPointerMove",
                                          "MSPointerUp",
                                      ]),
                                (r.touchEventsTouch = {
                                    start: d[0],
                                    move: d[1],
                                    end: d[2],
                                }),
                                (r.touchEventsDesktop = {
                                    start: p[0],
                                    move: p[1],
                                    end: p[2],
                                }),
                                te.touch || !r.params.simulateTouch
                                    ? r.touchEventsTouch
                                    : r.touchEventsDesktop),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements:
                                    "input, select, option, textarea, button, video",
                                lastClickTime: ee.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0,
                            },
                            allowClick: !0,
                            allowTouchMove: r.params.allowTouchMove,
                            touches: {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0,
                            },
                            imagesToLoad: [],
                            imagesLoaded: 0,
                        }),
                        r.useModules(),
                        r.params.init && r.init(),
                        r
                    );
                }
            }
            u && (h.__proto__ = u);
            var e = {
                extendedDefaults: { configurable: !0 },
                defaults: { configurable: !0 },
                Class: { configurable: !0 },
                $: { configurable: !0 },
            };
            return (
                (((h.prototype = Object.create(
                    u && u.prototype
                )).constructor = h).prototype.slidesPerViewDynamic = function() {
                    var e = this,
                        t = e.params,
                        a = e.slides,
                        i = e.slidesGrid,
                        s = e.size,
                        r = e.activeIndex,
                        n = 1;
                    if (t.centeredSlides) {
                        for (
                            var o, l = a[r].swiperSlideSize, d = r + 1;
                            d < a.length;
                            d += 1
                        )
                            a[d] &&
                                !o &&
                                ((n += 1),
                                s < (l += a[d].swiperSlideSize) && (o = !0));
                        for (var p = r - 1; 0 <= p; p -= 1)
                            a[p] &&
                                !o &&
                                ((n += 1),
                                s < (l += a[p].swiperSlideSize) && (o = !0));
                    } else
                        for (var c = r + 1; c < a.length; c += 1)
                            i[c] - i[r] < s && (n += 1);
                    return n;
                }),
                (h.prototype.update = function() {
                    var a = this;
                    if (a && !a.destroyed) {
                        var e = a.snapGrid,
                            t = a.params;
                        t.breakpoints && a.setBreakpoint(),
                            a.updateSize(),
                            a.updateSlides(),
                            a.updateProgress(),
                            a.updateSlidesClasses(),
                            a.params.freeMode
                                ? (i(),
                                  a.params.autoHeight && a.updateAutoHeight())
                                : (("auto" === a.params.slidesPerView ||
                                      1 < a.params.slidesPerView) &&
                                  a.isEnd &&
                                  !a.params.centeredSlides
                                      ? a.slideTo(
                                            a.slides.length - 1,
                                            0,
                                            !1,
                                            !0
                                        )
                                      : a.slideTo(a.activeIndex, 0, !1, !0)) ||
                                  i(),
                            t.watchOverflow &&
                                e !== a.snapGrid &&
                                a.checkOverflow(),
                            a.emit("update");
                    }
                    function i() {
                        var e = a.rtlTranslate ? -1 * a.translate : a.translate,
                            t = Math.min(
                                Math.max(e, a.maxTranslate()),
                                a.minTranslate()
                            );
                        a.setTranslate(t),
                            a.updateActiveIndex(),
                            a.updateSlidesClasses();
                    }
                }),
                (h.prototype.changeDirection = function(a, e) {
                    void 0 === e && (e = !0);
                    var t = this,
                        i = t.params.direction;
                    return (
                        a ||
                            (a =
                                "horizontal" === i ? "vertical" : "horizontal"),
                        a === i ||
                            ("horizontal" !== a && "vertical" !== a) ||
                            ("vertical" === i &&
                                (t.$el
                                    .removeClass(
                                        t.params.containerModifierClass +
                                            "vertical wp8-vertical"
                                    )
                                    .addClass(
                                        "" + t.params.containerModifierClass + a
                                    ),
                                (I.isIE || I.isEdge) &&
                                    (te.pointerEvents ||
                                        te.prefixedPointerEvents) &&
                                    t.$el.addClass(
                                        t.params.containerModifierClass +
                                            "wp8-" +
                                            a
                                    )),
                            "horizontal" === i &&
                                (t.$el
                                    .removeClass(
                                        t.params.containerModifierClass +
                                            "horizontal wp8-horizontal"
                                    )
                                    .addClass(
                                        "" + t.params.containerModifierClass + a
                                    ),
                                (I.isIE || I.isEdge) &&
                                    (te.pointerEvents ||
                                        te.prefixedPointerEvents) &&
                                    t.$el.addClass(
                                        t.params.containerModifierClass +
                                            "wp8-" +
                                            a
                                    )),
                            (t.params.direction = a),
                            t.slides.each(function(e, t) {
                                "vertical" === a
                                    ? (t.style.width = "")
                                    : (t.style.height = "");
                            }),
                            t.emit("changeDirection"),
                            e && t.update()),
                        t
                    );
                }),
                (h.prototype.init = function() {
                    var e = this;
                    e.initialized ||
                        (e.emit("beforeInit"),
                        e.params.breakpoints && e.setBreakpoint(),
                        e.addClasses(),
                        e.params.loop && e.loopCreate(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.params.watchOverflow && e.checkOverflow(),
                        e.params.grabCursor && e.setGrabCursor(),
                        e.params.preloadImages && e.preloadImages(),
                        e.params.loop
                            ? e.slideTo(
                                  e.params.initialSlide + e.loopedSlides,
                                  0,
                                  e.params.runCallbacksOnInit
                              )
                            : e.slideTo(
                                  e.params.initialSlide,
                                  0,
                                  e.params.runCallbacksOnInit
                              ),
                        e.attachEvents(),
                        (e.initialized = !0),
                        e.emit("init"));
                }),
                (h.prototype.destroy = function(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var a = this,
                        i = a.params,
                        s = a.$el,
                        r = a.$wrapperEl,
                        n = a.slides;
                    return (
                        void 0 === a.params ||
                            a.destroyed ||
                            (a.emit("beforeDestroy"),
                            (a.initialized = !1),
                            a.detachEvents(),
                            i.loop && a.loopDestroy(),
                            t &&
                                (a.removeClasses(),
                                s.removeAttr("style"),
                                r.removeAttr("style"),
                                n &&
                                    n.length &&
                                    n
                                        .removeClass(
                                            [
                                                i.slideVisibleClass,
                                                i.slideActiveClass,
                                                i.slideNextClass,
                                                i.slidePrevClass,
                                            ].join(" ")
                                        )
                                        .removeAttr("style")
                                        .removeAttr("data-swiper-slide-index")
                                        .removeAttr("data-swiper-column")
                                        .removeAttr("data-swiper-row")),
                            a.emit("destroy"),
                            Object.keys(a.eventsListeners).forEach(function(e) {
                                a.off(e);
                            }),
                            !1 !== e &&
                                ((a.$el[0].swiper = null),
                                a.$el.data("swiper", null),
                                ee.deleteProps(a)),
                            (a.destroyed = !0)),
                        null
                    );
                }),
                (h.extendDefaults = function(e) {
                    ee.extend(x, e);
                }),
                (e.extendedDefaults.get = function() {
                    return x;
                }),
                (e.defaults.get = function() {
                    return w;
                }),
                (e.Class.get = function() {
                    return u;
                }),
                (e.$.get = function() {
                    return L;
                }),
                Object.defineProperties(h, e),
                h
            );
        })(n),
        E = { name: "device", proto: { device: g }, static: { device: g } },
        S = {
            name: "support",
            proto: { support: te },
            static: { support: te },
        },
        C = { name: "browser", proto: { browser: I }, static: { browser: I } },
        M = {
            name: "resize",
            create: function() {
                var e = this;
                ee.extend(e, {
                    resize: {
                        resizeHandler: function() {
                            e &&
                                !e.destroyed &&
                                e.initialized &&
                                (e.emit("beforeResize"), e.emit("resize"));
                        },
                        orientationChangeHandler: function() {
                            e &&
                                !e.destroyed &&
                                e.initialized &&
                                e.emit("orientationchange");
                        },
                    },
                });
            },
            on: {
                init: function() {
                    J.addEventListener("resize", this.resize.resizeHandler),
                        J.addEventListener(
                            "orientationchange",
                            this.resize.orientationChangeHandler
                        );
                },
                destroy: function() {
                    J.removeEventListener("resize", this.resize.resizeHandler),
                        J.removeEventListener(
                            "orientationchange",
                            this.resize.orientationChangeHandler
                        );
                },
            },
        },
        z = {
            func: J.MutationObserver || J.WebkitMutationObserver,
            attach: function(e, t) {
                void 0 === t && (t = {});
                var a = this,
                    i = new z.func(function(e) {
                        if (1 !== e.length) {
                            var t = function() {
                                a.emit("observerUpdate", e[0]);
                            };
                            J.requestAnimationFrame
                                ? J.requestAnimationFrame(t)
                                : J.setTimeout(t, 0);
                        } else a.emit("observerUpdate", e[0]);
                    });
                i.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData:
                        void 0 === t.characterData || t.characterData,
                }),
                    a.observer.observers.push(i);
            },
            init: function() {
                var e = this;
                if (te.observer && e.params.observer) {
                    if (e.params.observeParents)
                        for (
                            var t = e.$el.parents(), a = 0;
                            a < t.length;
                            a += 1
                        )
                            e.observer.attach(t[a]);
                    e.observer.attach(e.$el[0], {
                        childList: e.params.observeSlideChildren,
                    }),
                        e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
                }
            },
            destroy: function() {
                this.observer.observers.forEach(function(e) {
                    e.disconnect();
                }),
                    (this.observer.observers = []);
            },
        },
        P = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1,
            },
            create: function() {
                ee.extend(this, {
                    observer: {
                        init: z.init.bind(this),
                        attach: z.attach.bind(this),
                        destroy: z.destroy.bind(this),
                        observers: [],
                    },
                });
            },
            on: {
                init: function() {
                    this.observer.init();
                },
                destroy: function() {
                    this.observer.destroy();
                },
            },
        },
        k = {
            update: function(e) {
                var t = this,
                    a = t.params,
                    i = a.slidesPerView,
                    s = a.slidesPerGroup,
                    r = a.centeredSlides,
                    n = t.params.virtual,
                    o = n.addSlidesBefore,
                    l = n.addSlidesAfter,
                    d = t.virtual,
                    p = d.from,
                    c = d.to,
                    u = d.slides,
                    h = d.slidesGrid,
                    v = d.renderSlide,
                    f = d.offset;
                t.updateActiveIndex();
                var m,
                    g,
                    b,
                    w = t.activeIndex || 0;
                (m = t.rtlTranslate
                    ? "right"
                    : t.isHorizontal()
                    ? "left"
                    : "top"),
                    r
                        ? ((g = Math.floor(i / 2) + s + o),
                          (b = Math.floor(i / 2) + s + l))
                        : ((g = i + (s - 1) + o), (b = s + l));
                var y = Math.max((w || 0) - b, 0),
                    x = Math.min((w || 0) + g, u.length - 1),
                    T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);
                function E() {
                    t.updateSlides(),
                        t.updateProgress(),
                        t.updateSlidesClasses(),
                        t.lazy && t.params.lazy.enabled && t.lazy.load();
                }
                if (
                    (ee.extend(t.virtual, {
                        from: y,
                        to: x,
                        offset: T,
                        slidesGrid: t.slidesGrid,
                    }),
                    p === y && c === x && !e)
                )
                    return (
                        t.slidesGrid !== h &&
                            T !== f &&
                            t.slides.css(m, T + "px"),
                        void t.updateProgress()
                    );
                if (t.params.virtual.renderExternal)
                    return (
                        t.params.virtual.renderExternal.call(t, {
                            offset: T,
                            from: y,
                            to: x,
                            slides: (function() {
                                for (var e = [], t = y; t <= x; t += 1)
                                    e.push(u[t]);
                                return e;
                            })(),
                        }),
                        void E()
                    );
                var S = [],
                    C = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (var M = p; M <= c; M += 1)
                        (M < y || x < M) &&
                            t.$wrapperEl
                                .find(
                                    "." +
                                        t.params.slideClass +
                                        '[data-swiper-slide-index="' +
                                        M +
                                        '"]'
                                )
                                .remove();
                for (var z = 0; z < u.length; z += 1)
                    y <= z &&
                        z <= x &&
                        (void 0 === c || e
                            ? C.push(z)
                            : (c < z && C.push(z), z < p && S.push(z)));
                C.forEach(function(e) {
                    t.$wrapperEl.append(v(u[e], e));
                }),
                    S.sort(function(e, t) {
                        return t - e;
                    }).forEach(function(e) {
                        t.$wrapperEl.prepend(v(u[e], e));
                    }),
                    t.$wrapperEl.children(".swiper-slide").css(m, T + "px"),
                    E();
            },
            renderSlide: function(e, t) {
                var a = this,
                    i = a.params.virtual;
                if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
                var s = i.renderSlide
                    ? L(i.renderSlide.call(a, e, t))
                    : L(
                          '<div class="' +
                              a.params.slideClass +
                              '" data-swiper-slide-index="' +
                              t +
                              '">' +
                              e +
                              "</div>"
                      );
                return (
                    s.attr("data-swiper-slide-index") ||
                        s.attr("data-swiper-slide-index", t),
                    i.cache && (a.virtual.cache[t] = s),
                    s
                );
            },
            appendSlide: function(e) {
                if ("object" == typeof e && "length" in e)
                    for (var t = 0; t < e.length; t += 1)
                        e[t] && this.virtual.slides.push(e[t]);
                else this.virtual.slides.push(e);
                this.virtual.update(!0);
            },
            prependSlide: function(e) {
                var t = this,
                    a = t.activeIndex,
                    i = a + 1,
                    s = 1;
                if (Array.isArray(e)) {
                    for (var r = 0; r < e.length; r += 1)
                        e[r] && t.virtual.slides.unshift(e[r]);
                    (i = a + e.length), (s = e.length);
                } else t.virtual.slides.unshift(e);
                if (t.params.virtual.cache) {
                    var n = t.virtual.cache,
                        o = {};
                    Object.keys(n).forEach(function(e) {
                        o[parseInt(e, 10) + s] = n[e];
                    }),
                        (t.virtual.cache = o);
                }
                t.virtual.update(!0), t.slideTo(i, 0);
            },
            removeSlide: function(e) {
                var t = this;
                if (null != e) {
                    var a = t.activeIndex;
                    if (Array.isArray(e))
                        for (var i = e.length - 1; 0 <= i; i -= 1)
                            t.virtual.slides.splice(e[i], 1),
                                t.params.virtual.cache &&
                                    delete t.virtual.cache[e[i]],
                                e[i] < a && (a -= 1),
                                (a = Math.max(a, 0));
                    else
                        t.virtual.slides.splice(e, 1),
                            t.params.virtual.cache && delete t.virtual.cache[e],
                            e < a && (a -= 1),
                            (a = Math.max(a, 0));
                    t.virtual.update(!0), t.slideTo(a, 0);
                }
            },
            removeAllSlides: function() {
                var e = this;
                (e.virtual.slides = []),
                    e.params.virtual.cache && (e.virtual.cache = {}),
                    e.virtual.update(!0),
                    e.slideTo(0, 0);
            },
        },
        $ = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0,
                },
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    virtual: {
                        update: k.update.bind(e),
                        appendSlide: k.appendSlide.bind(e),
                        prependSlide: k.prependSlide.bind(e),
                        removeSlide: k.removeSlide.bind(e),
                        removeAllSlides: k.removeAllSlides.bind(e),
                        renderSlide: k.renderSlide.bind(e),
                        slides: e.params.virtual.slides,
                        cache: {},
                    },
                });
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if (e.params.virtual.enabled) {
                        e.classNames.push(
                            e.params.containerModifierClass + "virtual"
                        );
                        var t = { watchSlidesProgress: !0 };
                        ee.extend(e.params, t),
                            ee.extend(e.originalParams, t),
                            e.params.initialSlide || e.virtual.update();
                    }
                },
                setTranslate: function() {
                    this.params.virtual.enabled && this.virtual.update();
                },
            },
        },
        D = {
            handle: function(e) {
                var t = this,
                    a = t.rtlTranslate,
                    i = e;
                i.originalEvent && (i = i.originalEvent);
                var s = i.keyCode || i.charCode;
                if (
                    !t.allowSlideNext &&
                    ((t.isHorizontal() && 39 === s) ||
                        (t.isVertical() && 40 === s))
                )
                    return !1;
                if (
                    !t.allowSlidePrev &&
                    ((t.isHorizontal() && 37 === s) ||
                        (t.isVertical() && 38 === s))
                )
                    return !1;
                if (
                    !(
                        i.shiftKey ||
                        i.altKey ||
                        i.ctrlKey ||
                        i.metaKey ||
                        (f.activeElement &&
                            f.activeElement.nodeName &&
                            ("input" ===
                                f.activeElement.nodeName.toLowerCase() ||
                                "textarea" ===
                                    f.activeElement.nodeName.toLowerCase()))
                    )
                ) {
                    if (
                        t.params.keyboard.onlyInViewport &&
                        (37 === s || 39 === s || 38 === s || 40 === s)
                    ) {
                        var r = !1;
                        if (
                            0 <
                                t.$el.parents("." + t.params.slideClass)
                                    .length &&
                            0 ===
                                t.$el.parents("." + t.params.slideActiveClass)
                                    .length
                        )
                            return;
                        var n = J.innerWidth,
                            o = J.innerHeight,
                            l = t.$el.offset();
                        a && (l.left -= t.$el[0].scrollLeft);
                        for (
                            var d = [
                                    [l.left, l.top],
                                    [l.left + t.width, l.top],
                                    [l.left, l.top + t.height],
                                    [l.left + t.width, l.top + t.height],
                                ],
                                p = 0;
                            p < d.length;
                            p += 1
                        ) {
                            var c = d[p];
                            0 <= c[0] &&
                                c[0] <= n &&
                                0 <= c[1] &&
                                c[1] <= o &&
                                (r = !0);
                        }
                        if (!r) return;
                    }
                    t.isHorizontal()
                        ? ((37 !== s && 39 !== s) ||
                              (i.preventDefault
                                  ? i.preventDefault()
                                  : (i.returnValue = !1)),
                          ((39 === s && !a) || (37 === s && a)) &&
                              t.slideNext(),
                          ((37 === s && !a) || (39 === s && a)) &&
                              t.slidePrev())
                        : ((38 !== s && 40 !== s) ||
                              (i.preventDefault
                                  ? i.preventDefault()
                                  : (i.returnValue = !1)),
                          40 === s && t.slideNext(),
                          38 === s && t.slidePrev()),
                        t.emit("keyPress", s);
                }
            },
            enable: function() {
                this.keyboard.enabled ||
                    (L(f).on("keydown", this.keyboard.handle),
                    (this.keyboard.enabled = !0));
            },
            disable: function() {
                this.keyboard.enabled &&
                    (L(f).off("keydown", this.keyboard.handle),
                    (this.keyboard.enabled = !1));
            },
        },
        O = {
            name: "keyboard",
            params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
            create: function() {
                ee.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: D.enable.bind(this),
                        disable: D.disable.bind(this),
                        handle: D.handle.bind(this),
                    },
                });
            },
            on: {
                init: function() {
                    this.params.keyboard.enabled && this.keyboard.enable();
                },
                destroy: function() {
                    this.keyboard.enabled && this.keyboard.disable();
                },
            },
        };
    var A = {
            lastScrollTime: ee.now(),
            event:
                -1 < J.navigator.userAgent.indexOf("firefox")
                    ? "DOMMouseScroll"
                    : (function() {
                          var e = "onwheel",
                              t = e in f;
                          if (!t) {
                              var a = f.createElement("div");
                              a.setAttribute(e, "return;"),
                                  (t = "function" == typeof a[e]);
                          }
                          return (
                              !t &&
                                  f.implementation &&
                                  f.implementation.hasFeature &&
                                  !0 !== f.implementation.hasFeature("", "") &&
                                  (t = f.implementation.hasFeature(
                                      "Events.wheel",
                                      "3.0"
                                  )),
                              t
                          );
                      })()
                    ? "wheel"
                    : "mousewheel",
            normalize: function(e) {
                var t = 0,
                    a = 0,
                    i = 0,
                    s = 0;
                return (
                    "detail" in e && (a = e.detail),
                    "wheelDelta" in e && (a = -e.wheelDelta / 120),
                    "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120),
                    "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                    "axis" in e &&
                        e.axis === e.HORIZONTAL_AXIS &&
                        ((t = a), (a = 0)),
                    (i = 10 * t),
                    (s = 10 * a),
                    "deltaY" in e && (s = e.deltaY),
                    "deltaX" in e && (i = e.deltaX),
                    (i || s) &&
                        e.deltaMode &&
                        (1 === e.deltaMode
                            ? ((i *= 40), (s *= 40))
                            : ((i *= 800), (s *= 800))),
                    i && !t && (t = i < 1 ? -1 : 1),
                    s && !a && (a = s < 1 ? -1 : 1),
                    { spinX: t, spinY: a, pixelX: i, pixelY: s }
                );
            },
            handleMouseEnter: function() {
                this.mouseEntered = !0;
            },
            handleMouseLeave: function() {
                this.mouseEntered = !1;
            },
            handle: function(e) {
                var t = e,
                    a = this,
                    i = a.params.mousewheel;
                if (!a.mouseEntered && !i.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                var s = 0,
                    r = a.rtlTranslate ? -1 : 1,
                    n = A.normalize(t);
                if (i.forceToAxis)
                    if (a.isHorizontal()) {
                        if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY)))
                            return !0;
                        s = n.pixelX * r;
                    } else {
                        if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX)))
                            return !0;
                        s = n.pixelY;
                    }
                else
                    s =
                        Math.abs(n.pixelX) > Math.abs(n.pixelY)
                            ? -n.pixelX * r
                            : -n.pixelY;
                if (0 === s) return !0;
                if ((i.invert && (s = -s), a.params.freeMode)) {
                    a.params.loop && a.loopFix();
                    var o = a.getTranslate() + s * i.sensitivity,
                        l = a.isBeginning,
                        d = a.isEnd;
                    if (
                        (o >= a.minTranslate() && (o = a.minTranslate()),
                        o <= a.maxTranslate() && (o = a.maxTranslate()),
                        a.setTransition(0),
                        a.setTranslate(o),
                        a.updateProgress(),
                        a.updateActiveIndex(),
                        a.updateSlidesClasses(),
                        ((!l && a.isBeginning) || (!d && a.isEnd)) &&
                            a.updateSlidesClasses(),
                        a.params.freeModeSticky &&
                            (clearTimeout(a.mousewheel.timeout),
                            (a.mousewheel.timeout = ee.nextTick(function() {
                                a.slideToClosest();
                            }, 300))),
                        a.emit("scroll", t),
                        a.params.autoplay &&
                            a.params.autoplayDisableOnInteraction &&
                            a.autoplay.stop(),
                        o === a.minTranslate() || o === a.maxTranslate())
                    )
                        return !0;
                } else {
                    if (60 < ee.now() - a.mousewheel.lastScrollTime)
                        if (s < 0)
                            if ((a.isEnd && !a.params.loop) || a.animating) {
                                if (i.releaseOnEdges) return !0;
                            } else a.slideNext(), a.emit("scroll", t);
                        else if (
                            (a.isBeginning && !a.params.loop) ||
                            a.animating
                        ) {
                            if (i.releaseOnEdges) return !0;
                        } else a.slidePrev(), a.emit("scroll", t);
                    a.mousewheel.lastScrollTime = new J.Date().getTime();
                }
                return (
                    t.preventDefault
                        ? t.preventDefault()
                        : (t.returnValue = !1),
                    !1
                );
            },
            enable: function() {
                var e = this;
                if (!A.event) return !1;
                if (e.mousewheel.enabled) return !1;
                var t = e.$el;
                return (
                    "container" !== e.params.mousewheel.eventsTarged &&
                        (t = L(e.params.mousewheel.eventsTarged)),
                    t.on("mouseenter", e.mousewheel.handleMouseEnter),
                    t.on("mouseleave", e.mousewheel.handleMouseLeave),
                    t.on(A.event, e.mousewheel.handle),
                    (e.mousewheel.enabled = !0)
                );
            },
            disable: function() {
                var e = this;
                if (!A.event) return !1;
                if (!e.mousewheel.enabled) return !1;
                var t = e.$el;
                return (
                    "container" !== e.params.mousewheel.eventsTarged &&
                        (t = L(e.params.mousewheel.eventsTarged)),
                    t.off(A.event, e.mousewheel.handle),
                    !(e.mousewheel.enabled = !1)
                );
            },
        },
        H = {
            update: function() {
                var e = this,
                    t = e.params.navigation;
                if (!e.params.loop) {
                    var a = e.navigation,
                        i = a.$nextEl,
                        s = a.$prevEl;
                    s &&
                        0 < s.length &&
                        (e.isBeginning
                            ? s.addClass(t.disabledClass)
                            : s.removeClass(t.disabledClass),
                        s[
                            e.params.watchOverflow && e.isLocked
                                ? "addClass"
                                : "removeClass"
                        ](t.lockClass)),
                        i &&
                            0 < i.length &&
                            (e.isEnd
                                ? i.addClass(t.disabledClass)
                                : i.removeClass(t.disabledClass),
                            i[
                                e.params.watchOverflow && e.isLocked
                                    ? "addClass"
                                    : "removeClass"
                            ](t.lockClass));
                }
            },
            onPrevClick: function(e) {
                e.preventDefault(),
                    (this.isBeginning && !this.params.loop) || this.slidePrev();
            },
            onNextClick: function(e) {
                e.preventDefault(),
                    (this.isEnd && !this.params.loop) || this.slideNext();
            },
            init: function() {
                var e,
                    t,
                    a = this,
                    i = a.params.navigation;
                (i.nextEl || i.prevEl) &&
                    (i.nextEl &&
                        ((e = L(i.nextEl)),
                        a.params.uniqueNavElements &&
                            "string" == typeof i.nextEl &&
                            1 < e.length &&
                            1 === a.$el.find(i.nextEl).length &&
                            (e = a.$el.find(i.nextEl))),
                    i.prevEl &&
                        ((t = L(i.prevEl)),
                        a.params.uniqueNavElements &&
                            "string" == typeof i.prevEl &&
                            1 < t.length &&
                            1 === a.$el.find(i.prevEl).length &&
                            (t = a.$el.find(i.prevEl))),
                    e &&
                        0 < e.length &&
                        e.on("click", a.navigation.onNextClick),
                    t &&
                        0 < t.length &&
                        t.on("click", a.navigation.onPrevClick),
                    ee.extend(a.navigation, {
                        $nextEl: e,
                        nextEl: e && e[0],
                        $prevEl: t,
                        prevEl: t && t[0],
                    }));
            },
            destroy: function() {
                var e = this,
                    t = e.navigation,
                    a = t.$nextEl,
                    i = t.$prevEl;
                a &&
                    a.length &&
                    (a.off("click", e.navigation.onNextClick),
                    a.removeClass(e.params.navigation.disabledClass)),
                    i &&
                        i.length &&
                        (i.off("click", e.navigation.onPrevClick),
                        i.removeClass(e.params.navigation.disabledClass));
            },
        },
        N = {
            update: function() {
                var e = this,
                    t = e.rtl,
                    s = e.params.pagination;
                if (
                    s.el &&
                    e.pagination.el &&
                    e.pagination.$el &&
                    0 !== e.pagination.$el.length
                ) {
                    var r,
                        a =
                            e.virtual && e.params.virtual.enabled
                                ? e.virtual.slides.length
                                : e.slides.length,
                        i = e.pagination.$el,
                        n = e.params.loop
                            ? Math.ceil(
                                  (a - 2 * e.loopedSlides) /
                                      e.params.slidesPerGroup
                              )
                            : e.snapGrid.length;
                    if (
                        (e.params.loop
                            ? ((r = Math.ceil(
                                  (e.activeIndex - e.loopedSlides) /
                                      e.params.slidesPerGroup
                              )) >
                                  a - 1 - 2 * e.loopedSlides &&
                                  (r -= a - 2 * e.loopedSlides),
                              n - 1 < r && (r -= n),
                              r < 0 &&
                                  "bullets" !== e.params.paginationType &&
                                  (r = n + r))
                            : (r =
                                  void 0 !== e.snapIndex
                                      ? e.snapIndex
                                      : e.activeIndex || 0),
                        "bullets" === s.type &&
                            e.pagination.bullets &&
                            0 < e.pagination.bullets.length)
                    ) {
                        var o,
                            l,
                            d,
                            p = e.pagination.bullets;
                        if (
                            (s.dynamicBullets &&
                                ((e.pagination.bulletSize = p
                                    .eq(0)
                                    [
                                        e.isHorizontal()
                                            ? "outerWidth"
                                            : "outerHeight"
                                    ](!0)),
                                i.css(
                                    e.isHorizontal() ? "width" : "height",
                                    e.pagination.bulletSize *
                                        (s.dynamicMainBullets + 4) +
                                        "px"
                                ),
                                1 < s.dynamicMainBullets &&
                                    void 0 !== e.previousIndex &&
                                    ((e.pagination.dynamicBulletIndex +=
                                        r - e.previousIndex),
                                    e.pagination.dynamicBulletIndex >
                                    s.dynamicMainBullets - 1
                                        ? (e.pagination.dynamicBulletIndex =
                                              s.dynamicMainBullets - 1)
                                        : e.pagination.dynamicBulletIndex < 0 &&
                                          (e.pagination.dynamicBulletIndex = 0)),
                                (o = r - e.pagination.dynamicBulletIndex),
                                (d =
                                    ((l =
                                        o +
                                        (Math.min(
                                            p.length,
                                            s.dynamicMainBullets
                                        ) -
                                            1)) +
                                        o) /
                                    2)),
                            p.removeClass(
                                s.bulletActiveClass +
                                    " " +
                                    s.bulletActiveClass +
                                    "-next " +
                                    s.bulletActiveClass +
                                    "-next-next " +
                                    s.bulletActiveClass +
                                    "-prev " +
                                    s.bulletActiveClass +
                                    "-prev-prev " +
                                    s.bulletActiveClass +
                                    "-main"
                            ),
                            1 < i.length)
                        )
                            p.each(function(e, t) {
                                var a = L(t),
                                    i = a.index();
                                i === r && a.addClass(s.bulletActiveClass),
                                    s.dynamicBullets &&
                                        (o <= i &&
                                            i <= l &&
                                            a.addClass(
                                                s.bulletActiveClass + "-main"
                                            ),
                                        i === o &&
                                            a
                                                .prev()
                                                .addClass(
                                                    s.bulletActiveClass +
                                                        "-prev"
                                                )
                                                .prev()
                                                .addClass(
                                                    s.bulletActiveClass +
                                                        "-prev-prev"
                                                ),
                                        i === l &&
                                            a
                                                .next()
                                                .addClass(
                                                    s.bulletActiveClass +
                                                        "-next"
                                                )
                                                .next()
                                                .addClass(
                                                    s.bulletActiveClass +
                                                        "-next-next"
                                                ));
                            });
                        else if (
                            (p.eq(r).addClass(s.bulletActiveClass),
                            s.dynamicBullets)
                        ) {
                            for (
                                var c = p.eq(o), u = p.eq(l), h = o;
                                h <= l;
                                h += 1
                            )
                                p.eq(h).addClass(s.bulletActiveClass + "-main");
                            c
                                .prev()
                                .addClass(s.bulletActiveClass + "-prev")
                                .prev()
                                .addClass(s.bulletActiveClass + "-prev-prev"),
                                u
                                    .next()
                                    .addClass(s.bulletActiveClass + "-next")
                                    .next()
                                    .addClass(
                                        s.bulletActiveClass + "-next-next"
                                    );
                        }
                        if (s.dynamicBullets) {
                            var v = Math.min(
                                    p.length,
                                    s.dynamicMainBullets + 4
                                ),
                                f =
                                    (e.pagination.bulletSize * v -
                                        e.pagination.bulletSize) /
                                        2 -
                                    d * e.pagination.bulletSize,
                                m = t ? "right" : "left";
                            p.css(e.isHorizontal() ? m : "top", f + "px");
                        }
                    }
                    if (
                        ("fraction" === s.type &&
                            (i
                                .find("." + s.currentClass)
                                .text(s.formatFractionCurrent(r + 1)),
                            i
                                .find("." + s.totalClass)
                                .text(s.formatFractionTotal(n))),
                        "progressbar" === s.type)
                    ) {
                        var g;
                        g = s.progressbarOpposite
                            ? e.isHorizontal()
                                ? "vertical"
                                : "horizontal"
                            : e.isHorizontal()
                            ? "horizontal"
                            : "vertical";
                        var b = (r + 1) / n,
                            w = 1,
                            y = 1;
                        "horizontal" === g ? (w = b) : (y = b),
                            i
                                .find("." + s.progressbarFillClass)
                                .transform(
                                    "translate3d(0,0,0) scaleX(" +
                                        w +
                                        ") scaleY(" +
                                        y +
                                        ")"
                                )
                                .transition(e.params.speed);
                    }
                    "custom" === s.type && s.renderCustom
                        ? (i.html(s.renderCustom(e, r + 1, n)),
                          e.emit("paginationRender", e, i[0]))
                        : e.emit("paginationUpdate", e, i[0]),
                        i[
                            e.params.watchOverflow && e.isLocked
                                ? "addClass"
                                : "removeClass"
                        ](s.lockClass);
                }
            },
            render: function() {
                var e = this,
                    t = e.params.pagination;
                if (
                    t.el &&
                    e.pagination.el &&
                    e.pagination.$el &&
                    0 !== e.pagination.$el.length
                ) {
                    var a =
                            e.virtual && e.params.virtual.enabled
                                ? e.virtual.slides.length
                                : e.slides.length,
                        i = e.pagination.$el,
                        s = "";
                    if ("bullets" === t.type) {
                        for (
                            var r = e.params.loop
                                    ? Math.ceil(
                                          (a - 2 * e.loopedSlides) /
                                              e.params.slidesPerGroup
                                      )
                                    : e.snapGrid.length,
                                n = 0;
                            n < r;
                            n += 1
                        )
                            t.renderBullet
                                ? (s += t.renderBullet.call(
                                      e,
                                      n,
                                      t.bulletClass
                                  ))
                                : (s +=
                                      "<" +
                                      t.bulletElement +
                                      ' class="' +
                                      t.bulletClass +
                                      '"></' +
                                      t.bulletElement +
                                      ">");
                        i.html(s),
                            (e.pagination.bullets = i.find(
                                "." + t.bulletClass
                            ));
                    }
                    "fraction" === t.type &&
                        ((s = t.renderFraction
                            ? t.renderFraction.call(
                                  e,
                                  t.currentClass,
                                  t.totalClass
                              )
                            : '<span class="' +
                              t.currentClass +
                              '"></span> / <span class="' +
                              t.totalClass +
                              '"></span>'),
                        i.html(s)),
                        "progressbar" === t.type &&
                            ((s = t.renderProgressbar
                                ? t.renderProgressbar.call(
                                      e,
                                      t.progressbarFillClass
                                  )
                                : '<span class="' +
                                  t.progressbarFillClass +
                                  '"></span>'),
                            i.html(s)),
                        "custom" !== t.type &&
                            e.emit("paginationRender", e.pagination.$el[0]);
                }
            },
            init: function() {
                var a = this,
                    e = a.params.pagination;
                if (e.el) {
                    var t = L(e.el);
                    0 !== t.length &&
                        (a.params.uniqueNavElements &&
                            "string" == typeof e.el &&
                            1 < t.length &&
                            1 === a.$el.find(e.el).length &&
                            (t = a.$el.find(e.el)),
                        "bullets" === e.type &&
                            e.clickable &&
                            t.addClass(e.clickableClass),
                        t.addClass(e.modifierClass + e.type),
                        "bullets" === e.type &&
                            e.dynamicBullets &&
                            (t.addClass(
                                "" + e.modifierClass + e.type + "-dynamic"
                            ),
                            (a.pagination.dynamicBulletIndex = 0),
                            e.dynamicMainBullets < 1 &&
                                (e.dynamicMainBullets = 1)),
                        "progressbar" === e.type &&
                            e.progressbarOpposite &&
                            t.addClass(e.progressbarOppositeClass),
                        e.clickable &&
                            t.on("click", "." + e.bulletClass, function(e) {
                                e.preventDefault();
                                var t =
                                    L(this).index() * a.params.slidesPerGroup;
                                a.params.loop && (t += a.loopedSlides),
                                    a.slideTo(t);
                            }),
                        ee.extend(a.pagination, { $el: t, el: t[0] }));
                }
            },
            destroy: function() {
                var e = this,
                    t = e.params.pagination;
                if (
                    t.el &&
                    e.pagination.el &&
                    e.pagination.$el &&
                    0 !== e.pagination.$el.length
                ) {
                    var a = e.pagination.$el;
                    a.removeClass(t.hiddenClass),
                        a.removeClass(t.modifierClass + t.type),
                        e.pagination.bullets &&
                            e.pagination.bullets.removeClass(
                                t.bulletActiveClass
                            ),
                        t.clickable && a.off("click", "." + t.bulletClass);
                }
            },
        },
        G = {
            setTranslate: function() {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.rtlTranslate,
                        i = e.progress,
                        s = t.dragSize,
                        r = t.trackSize,
                        n = t.$dragEl,
                        o = t.$el,
                        l = e.params.scrollbar,
                        d = s,
                        p = (r - s) * i;
                    a
                        ? 0 < (p = -p)
                            ? ((d = s - p), (p = 0))
                            : r < -p + s && (d = r + p)
                        : p < 0
                        ? ((d = s + p), (p = 0))
                        : r < p + s && (d = r - p),
                        e.isHorizontal()
                            ? (te.transforms3d
                                  ? n.transform(
                                        "translate3d(" + p + "px, 0, 0)"
                                    )
                                  : n.transform("translateX(" + p + "px)"),
                              (n[0].style.width = d + "px"))
                            : (te.transforms3d
                                  ? n.transform(
                                        "translate3d(0px, " + p + "px, 0)"
                                    )
                                  : n.transform("translateY(" + p + "px)"),
                              (n[0].style.height = d + "px")),
                        l.hide &&
                            (clearTimeout(e.scrollbar.timeout),
                            (o[0].style.opacity = 1),
                            (e.scrollbar.timeout = setTimeout(function() {
                                (o[0].style.opacity = 0), o.transition(400);
                            }, 1e3)));
                }
            },
            setTransition: function(e) {
                this.params.scrollbar.el &&
                    this.scrollbar.el &&
                    this.scrollbar.$dragEl.transition(e);
            },
            updateSize: function() {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = t.$dragEl,
                        i = t.$el;
                    (a[0].style.width = ""), (a[0].style.height = "");
                    var s,
                        r = e.isHorizontal()
                            ? i[0].offsetWidth
                            : i[0].offsetHeight,
                        n = e.size / e.virtualSize,
                        o = n * (r / e.size);
                    (s =
                        "auto" === e.params.scrollbar.dragSize
                            ? r * n
                            : parseInt(e.params.scrollbar.dragSize, 10)),
                        e.isHorizontal()
                            ? (a[0].style.width = s + "px")
                            : (a[0].style.height = s + "px"),
                        (i[0].style.display = 1 <= n ? "none" : ""),
                        e.params.scrollbar.hide && (i[0].style.opacity = 0),
                        ee.extend(t, {
                            trackSize: r,
                            divider: n,
                            moveDivider: o,
                            dragSize: s,
                        }),
                        t.$el[
                            e.params.watchOverflow && e.isLocked
                                ? "addClass"
                                : "removeClass"
                        ](e.params.scrollbar.lockClass);
                }
            },
            setDragPosition: function(e) {
                var t,
                    a = this,
                    i = a.scrollbar,
                    s = a.rtlTranslate,
                    r = i.$el,
                    n = i.dragSize,
                    o = i.trackSize;
                (t =
                    ((a.isHorizontal()
                        ? "touchstart" === e.type || "touchmove" === e.type
                            ? e.targetTouches[0].pageX
                            : e.pageX || e.clientX
                        : "touchstart" === e.type || "touchmove" === e.type
                        ? e.targetTouches[0].pageY
                        : e.pageY || e.clientY) -
                        r.offset()[a.isHorizontal() ? "left" : "top"] -
                        n / 2) /
                    (o - n)),
                    (t = Math.max(Math.min(t, 1), 0)),
                    s && (t = 1 - t);
                var l =
                    a.minTranslate() +
                    (a.maxTranslate() - a.minTranslate()) * t;
                a.updateProgress(l),
                    a.setTranslate(l),
                    a.updateActiveIndex(),
                    a.updateSlidesClasses();
            },
            onDragStart: function(e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar,
                    s = t.$wrapperEl,
                    r = i.$el,
                    n = i.$dragEl;
                (t.scrollbar.isTouched = !0),
                    e.preventDefault(),
                    e.stopPropagation(),
                    s.transition(100),
                    n.transition(100),
                    i.setDragPosition(e),
                    clearTimeout(t.scrollbar.dragTimeout),
                    r.transition(0),
                    a.hide && r.css("opacity", 1),
                    t.emit("scrollbarDragStart", e);
            },
            onDragMove: function(e) {
                var t = this.scrollbar,
                    a = this.$wrapperEl,
                    i = t.$el,
                    s = t.$dragEl;
                this.scrollbar.isTouched &&
                    (e.preventDefault
                        ? e.preventDefault()
                        : (e.returnValue = !1),
                    t.setDragPosition(e),
                    a.transition(0),
                    i.transition(0),
                    s.transition(0),
                    this.emit("scrollbarDragMove", e));
            },
            onDragEnd: function(e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar.$el;
                t.scrollbar.isTouched &&
                    ((t.scrollbar.isTouched = !1),
                    a.hide &&
                        (clearTimeout(t.scrollbar.dragTimeout),
                        (t.scrollbar.dragTimeout = ee.nextTick(function() {
                            i.css("opacity", 0), i.transition(400);
                        }, 1e3))),
                    t.emit("scrollbarDragEnd", e),
                    a.snapOnRelease && t.slideToClosest());
            },
            enableDraggable: function() {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.touchEventsTouch,
                        i = e.touchEventsDesktop,
                        s = e.params,
                        r = t.$el[0],
                        n = !(!te.passiveListener || !s.passiveListeners) && {
                            passive: !1,
                            capture: !1,
                        },
                        o = !(!te.passiveListener || !s.passiveListeners) && {
                            passive: !0,
                            capture: !1,
                        };
                    te.touch
                        ? (r.addEventListener(
                              a.start,
                              e.scrollbar.onDragStart,
                              n
                          ),
                          r.addEventListener(a.move, e.scrollbar.onDragMove, n),
                          r.addEventListener(a.end, e.scrollbar.onDragEnd, o))
                        : (r.addEventListener(
                              i.start,
                              e.scrollbar.onDragStart,
                              n
                          ),
                          f.addEventListener(i.move, e.scrollbar.onDragMove, n),
                          f.addEventListener(i.end, e.scrollbar.onDragEnd, o));
                }
            },
            disableDraggable: function() {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.touchEventsTouch,
                        i = e.touchEventsDesktop,
                        s = e.params,
                        r = t.$el[0],
                        n = !(!te.passiveListener || !s.passiveListeners) && {
                            passive: !1,
                            capture: !1,
                        },
                        o = !(!te.passiveListener || !s.passiveListeners) && {
                            passive: !0,
                            capture: !1,
                        };
                    te.touch
                        ? (r.removeEventListener(
                              a.start,
                              e.scrollbar.onDragStart,
                              n
                          ),
                          r.removeEventListener(
                              a.move,
                              e.scrollbar.onDragMove,
                              n
                          ),
                          r.removeEventListener(
                              a.end,
                              e.scrollbar.onDragEnd,
                              o
                          ))
                        : (r.removeEventListener(
                              i.start,
                              e.scrollbar.onDragStart,
                              n
                          ),
                          f.removeEventListener(
                              i.move,
                              e.scrollbar.onDragMove,
                              n
                          ),
                          f.removeEventListener(
                              i.end,
                              e.scrollbar.onDragEnd,
                              o
                          ));
                }
            },
            init: function() {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.$el,
                        i = e.params.scrollbar,
                        s = L(i.el);
                    e.params.uniqueNavElements &&
                        "string" == typeof i.el &&
                        1 < s.length &&
                        1 === a.find(i.el).length &&
                        (s = a.find(i.el));
                    var r = s.find("." + e.params.scrollbar.dragClass);
                    0 === r.length &&
                        ((r = L(
                            '<div class="' +
                                e.params.scrollbar.dragClass +
                                '"></div>'
                        )),
                        s.append(r)),
                        ee.extend(t, {
                            $el: s,
                            el: s[0],
                            $dragEl: r,
                            dragEl: r[0],
                        }),
                        i.draggable && t.enableDraggable();
                }
            },
            destroy: function() {
                this.scrollbar.disableDraggable();
            },
        },
        B = {
            setTransform: function(e, t) {
                var a = this.rtl,
                    i = L(e),
                    s = a ? -1 : 1,
                    r = i.attr("data-swiper-parallax") || "0",
                    n = i.attr("data-swiper-parallax-x"),
                    o = i.attr("data-swiper-parallax-y"),
                    l = i.attr("data-swiper-parallax-scale"),
                    d = i.attr("data-swiper-parallax-opacity");
                if (
                    (n || o
                        ? ((n = n || "0"), (o = o || "0"))
                        : this.isHorizontal()
                        ? ((n = r), (o = "0"))
                        : ((o = r), (n = "0")),
                    (n =
                        0 <= n.indexOf("%")
                            ? parseInt(n, 10) * t * s + "%"
                            : n * t * s + "px"),
                    (o =
                        0 <= o.indexOf("%")
                            ? parseInt(o, 10) * t + "%"
                            : o * t + "px"),
                    null != d)
                ) {
                    var p = d - (d - 1) * (1 - Math.abs(t));
                    i[0].style.opacity = p;
                }
                if (null == l)
                    i.transform("translate3d(" + n + ", " + o + ", 0px)");
                else {
                    var c = l - (l - 1) * (1 - Math.abs(t));
                    i.transform(
                        "translate3d(" +
                            n +
                            ", " +
                            o +
                            ", 0px) scale(" +
                            c +
                            ")"
                    );
                }
            },
            setTranslate: function() {
                var i = this,
                    e = i.$el,
                    t = i.slides,
                    s = i.progress,
                    r = i.snapGrid;
                e
                    .children(
                        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                    )
                    .each(function(e, t) {
                        i.parallax.setTransform(t, s);
                    }),
                    t.each(function(e, t) {
                        var a = t.progress;
                        1 < i.params.slidesPerGroup &&
                            "auto" !== i.params.slidesPerView &&
                            (a += Math.ceil(e / 2) - s * (r.length - 1)),
                            (a = Math.min(Math.max(a, -1), 1)),
                            L(t)
                                .find(
                                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                                )
                                .each(function(e, t) {
                                    i.parallax.setTransform(t, a);
                                });
                    });
            },
            setTransition: function(s) {
                void 0 === s && (s = this.params.speed);
                this.$el
                    .find(
                        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                    )
                    .each(function(e, t) {
                        var a = L(t),
                            i =
                                parseInt(
                                    a.attr("data-swiper-parallax-duration"),
                                    10
                                ) || s;
                        0 === s && (i = 0), a.transition(i);
                    });
            },
        },
        X = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    a = e.targetTouches[0].pageY,
                    i = e.targetTouches[1].pageX,
                    s = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
            },
            onGestureStart: function(e) {
                var t = this,
                    a = t.params.zoom,
                    i = t.zoom,
                    s = i.gesture;
                if (
                    ((i.fakeGestureTouched = !1),
                    (i.fakeGestureMoved = !1),
                    !te.gestures)
                ) {
                    if (
                        "touchstart" !== e.type ||
                        ("touchstart" === e.type && e.targetTouches.length < 2)
                    )
                        return;
                    (i.fakeGestureTouched = !0),
                        (s.scaleStart = X.getDistanceBetweenTouches(e));
                }
                (s.$slideEl && s.$slideEl.length) ||
                ((s.$slideEl = L(e.target).closest(".swiper-slide")),
                0 === s.$slideEl.length &&
                    (s.$slideEl = t.slides.eq(t.activeIndex)),
                (s.$imageEl = s.$slideEl.find("img, svg, canvas")),
                (s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass)),
                (s.maxRatio =
                    s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
                0 !== s.$imageWrapEl.length)
                    ? (s.$imageEl.transition(0), (t.zoom.isScaling = !0))
                    : (s.$imageEl = void 0);
            },
            onGestureChange: function(e) {
                var t = this.params.zoom,
                    a = this.zoom,
                    i = a.gesture;
                if (!te.gestures) {
                    if (
                        "touchmove" !== e.type ||
                        ("touchmove" === e.type && e.targetTouches.length < 2)
                    )
                        return;
                    (a.fakeGestureMoved = !0),
                        (i.scaleMove = X.getDistanceBetweenTouches(e));
                }
                i.$imageEl &&
                    0 !== i.$imageEl.length &&
                    ((a.scale = te.gestures
                        ? e.scale * a.currentScale
                        : (i.scaleMove / i.scaleStart) * a.currentScale),
                    a.scale > i.maxRatio &&
                        (a.scale =
                            i.maxRatio -
                            1 +
                            Math.pow(a.scale - i.maxRatio + 1, 0.5)),
                    a.scale < t.minRatio &&
                        (a.scale =
                            t.minRatio +
                            1 -
                            Math.pow(t.minRatio - a.scale + 1, 0.5)),
                    i.$imageEl.transform(
                        "translate3d(0,0,0) scale(" + a.scale + ")"
                    ));
            },
            onGestureEnd: function(e) {
                var t = this.params.zoom,
                    a = this.zoom,
                    i = a.gesture;
                if (!te.gestures) {
                    if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
                    if (
                        "touchend" !== e.type ||
                        ("touchend" === e.type &&
                            e.changedTouches.length < 2 &&
                            !g.android)
                    )
                        return;
                    (a.fakeGestureTouched = !1), (a.fakeGestureMoved = !1);
                }
                i.$imageEl &&
                    0 !== i.$imageEl.length &&
                    ((a.scale = Math.max(
                        Math.min(a.scale, i.maxRatio),
                        t.minRatio
                    )),
                    i.$imageEl
                        .transition(this.params.speed)
                        .transform("translate3d(0,0,0) scale(" + a.scale + ")"),
                    (a.currentScale = a.scale),
                    (a.isScaling = !1),
                    1 === a.scale && (i.$slideEl = void 0));
            },
            onTouchStart: function(e) {
                var t = this.zoom,
                    a = t.gesture,
                    i = t.image;
                a.$imageEl &&
                    0 !== a.$imageEl.length &&
                    (i.isTouched ||
                        (g.android && e.preventDefault(),
                        (i.isTouched = !0),
                        (i.touchesStart.x =
                            "touchstart" === e.type
                                ? e.targetTouches[0].pageX
                                : e.pageX),
                        (i.touchesStart.y =
                            "touchstart" === e.type
                                ? e.targetTouches[0].pageY
                                : e.pageY)));
            },
            onTouchMove: function(e) {
                var t = this,
                    a = t.zoom,
                    i = a.gesture,
                    s = a.image,
                    r = a.velocity;
                if (
                    i.$imageEl &&
                    0 !== i.$imageEl.length &&
                    ((t.allowClick = !1), s.isTouched && i.$slideEl)
                ) {
                    s.isMoved ||
                        ((s.width = i.$imageEl[0].offsetWidth),
                        (s.height = i.$imageEl[0].offsetHeight),
                        (s.startX =
                            ee.getTranslate(i.$imageWrapEl[0], "x") || 0),
                        (s.startY =
                            ee.getTranslate(i.$imageWrapEl[0], "y") || 0),
                        (i.slideWidth = i.$slideEl[0].offsetWidth),
                        (i.slideHeight = i.$slideEl[0].offsetHeight),
                        i.$imageWrapEl.transition(0),
                        t.rtl &&
                            ((s.startX = -s.startX), (s.startY = -s.startY)));
                    var n = s.width * a.scale,
                        o = s.height * a.scale;
                    if (!(n < i.slideWidth && o < i.slideHeight)) {
                        if (
                            ((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
                            (s.maxX = -s.minX),
                            (s.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
                            (s.maxY = -s.minY),
                            (s.touchesCurrent.x =
                                "touchmove" === e.type
                                    ? e.targetTouches[0].pageX
                                    : e.pageX),
                            (s.touchesCurrent.y =
                                "touchmove" === e.type
                                    ? e.targetTouches[0].pageY
                                    : e.pageY),
                            !s.isMoved && !a.isScaling)
                        ) {
                            if (
                                t.isHorizontal() &&
                                ((Math.floor(s.minX) === Math.floor(s.startX) &&
                                    s.touchesCurrent.x < s.touchesStart.x) ||
                                    (Math.floor(s.maxX) ===
                                        Math.floor(s.startX) &&
                                        s.touchesCurrent.x > s.touchesStart.x))
                            )
                                return void (s.isTouched = !1);
                            if (
                                !t.isHorizontal() &&
                                ((Math.floor(s.minY) === Math.floor(s.startY) &&
                                    s.touchesCurrent.y < s.touchesStart.y) ||
                                    (Math.floor(s.maxY) ===
                                        Math.floor(s.startY) &&
                                        s.touchesCurrent.y > s.touchesStart.y))
                            )
                                return void (s.isTouched = !1);
                        }
                        e.preventDefault(),
                            e.stopPropagation(),
                            (s.isMoved = !0),
                            (s.currentX =
                                s.touchesCurrent.x -
                                s.touchesStart.x +
                                s.startX),
                            (s.currentY =
                                s.touchesCurrent.y -
                                s.touchesStart.y +
                                s.startY),
                            s.currentX < s.minX &&
                                (s.currentX =
                                    s.minX +
                                    1 -
                                    Math.pow(s.minX - s.currentX + 1, 0.8)),
                            s.currentX > s.maxX &&
                                (s.currentX =
                                    s.maxX -
                                    1 +
                                    Math.pow(s.currentX - s.maxX + 1, 0.8)),
                            s.currentY < s.minY &&
                                (s.currentY =
                                    s.minY +
                                    1 -
                                    Math.pow(s.minY - s.currentY + 1, 0.8)),
                            s.currentY > s.maxY &&
                                (s.currentY =
                                    s.maxY -
                                    1 +
                                    Math.pow(s.currentY - s.maxY + 1, 0.8)),
                            r.prevPositionX ||
                                (r.prevPositionX = s.touchesCurrent.x),
                            r.prevPositionY ||
                                (r.prevPositionY = s.touchesCurrent.y),
                            r.prevTime || (r.prevTime = Date.now()),
                            (r.x =
                                (s.touchesCurrent.x - r.prevPositionX) /
                                (Date.now() - r.prevTime) /
                                2),
                            (r.y =
                                (s.touchesCurrent.y - r.prevPositionY) /
                                (Date.now() - r.prevTime) /
                                2),
                            Math.abs(s.touchesCurrent.x - r.prevPositionX) <
                                2 && (r.x = 0),
                            Math.abs(s.touchesCurrent.y - r.prevPositionY) <
                                2 && (r.y = 0),
                            (r.prevPositionX = s.touchesCurrent.x),
                            (r.prevPositionY = s.touchesCurrent.y),
                            (r.prevTime = Date.now()),
                            i.$imageWrapEl.transform(
                                "translate3d(" +
                                    s.currentX +
                                    "px, " +
                                    s.currentY +
                                    "px,0)"
                            );
                    }
                }
            },
            onTouchEnd: function() {
                var e = this.zoom,
                    t = e.gesture,
                    a = e.image,
                    i = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!a.isTouched || !a.isMoved)
                        return (a.isTouched = !1), void (a.isMoved = !1);
                    (a.isTouched = !1), (a.isMoved = !1);
                    var s = 300,
                        r = 300,
                        n = i.x * s,
                        o = a.currentX + n,
                        l = i.y * r,
                        d = a.currentY + l;
                    0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)),
                        0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
                    var p = Math.max(s, r);
                    (a.currentX = o), (a.currentY = d);
                    var c = a.width * e.scale,
                        u = a.height * e.scale;
                    (a.minX = Math.min(t.slideWidth / 2 - c / 2, 0)),
                        (a.maxX = -a.minX),
                        (a.minY = Math.min(t.slideHeight / 2 - u / 2, 0)),
                        (a.maxY = -a.minY),
                        (a.currentX = Math.max(
                            Math.min(a.currentX, a.maxX),
                            a.minX
                        )),
                        (a.currentY = Math.max(
                            Math.min(a.currentY, a.maxY),
                            a.minY
                        )),
                        t.$imageWrapEl
                            .transition(p)
                            .transform(
                                "translate3d(" +
                                    a.currentX +
                                    "px, " +
                                    a.currentY +
                                    "px,0)"
                            );
                }
            },
            onTransitionEnd: function() {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl &&
                    this.previousIndex !== this.activeIndex &&
                    (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                    t.$imageWrapEl.transform("translate3d(0,0,0)"),
                    (e.scale = 1),
                    (e.currentScale = 1),
                    (t.$slideEl = void 0),
                    (t.$imageEl = void 0),
                    (t.$imageWrapEl = void 0));
            },
            toggle: function(e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e);
            },
            in: function(e) {
                var t,
                    a,
                    i,
                    s,
                    r,
                    n,
                    o,
                    l,
                    d,
                    p,
                    c,
                    u,
                    h,
                    v,
                    f,
                    m,
                    g = this,
                    b = g.zoom,
                    w = g.params.zoom,
                    y = b.gesture,
                    x = b.image;
                (y.$slideEl ||
                    ((y.$slideEl = g.clickedSlide
                        ? L(g.clickedSlide)
                        : g.slides.eq(g.activeIndex)),
                    (y.$imageEl = y.$slideEl.find("img, svg, canvas")),
                    (y.$imageWrapEl = y.$imageEl.parent(
                        "." + w.containerClass
                    ))),
                y.$imageEl && 0 !== y.$imageEl.length) &&
                    (y.$slideEl.addClass("" + w.zoomedSlideClass),
                    void 0 === x.touchesStart.x && e
                        ? ((t =
                              "touchend" === e.type
                                  ? e.changedTouches[0].pageX
                                  : e.pageX),
                          (a =
                              "touchend" === e.type
                                  ? e.changedTouches[0].pageY
                                  : e.pageY))
                        : ((t = x.touchesStart.x), (a = x.touchesStart.y)),
                    (b.scale =
                        y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
                    (b.currentScale =
                        y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
                    e
                        ? ((f = y.$slideEl[0].offsetWidth),
                          (m = y.$slideEl[0].offsetHeight),
                          (i = y.$slideEl.offset().left + f / 2 - t),
                          (s = y.$slideEl.offset().top + m / 2 - a),
                          (o = y.$imageEl[0].offsetWidth),
                          (l = y.$imageEl[0].offsetHeight),
                          (d = o * b.scale),
                          (p = l * b.scale),
                          (h = -(c = Math.min(f / 2 - d / 2, 0))),
                          (v = -(u = Math.min(m / 2 - p / 2, 0))),
                          (r = i * b.scale) < c && (r = c),
                          h < r && (r = h),
                          (n = s * b.scale) < u && (n = u),
                          v < n && (n = v))
                        : (n = r = 0),
                    y.$imageWrapEl
                        .transition(300)
                        .transform("translate3d(" + r + "px, " + n + "px,0)"),
                    y.$imageEl
                        .transition(300)
                        .transform(
                            "translate3d(0,0,0) scale(" + b.scale + ")"
                        ));
            },
            out: function() {
                var e = this,
                    t = e.zoom,
                    a = e.params.zoom,
                    i = t.gesture;
                i.$slideEl ||
                    ((i.$slideEl = e.clickedSlide
                        ? L(e.clickedSlide)
                        : e.slides.eq(e.activeIndex)),
                    (i.$imageEl = i.$slideEl.find("img, svg, canvas")),
                    (i.$imageWrapEl = i.$imageEl.parent(
                        "." + a.containerClass
                    ))),
                    i.$imageEl &&
                        0 !== i.$imageEl.length &&
                        ((t.scale = 1),
                        (t.currentScale = 1),
                        i.$imageWrapEl
                            .transition(300)
                            .transform("translate3d(0,0,0)"),
                        i.$imageEl
                            .transition(300)
                            .transform("translate3d(0,0,0) scale(1)"),
                        i.$slideEl.removeClass("" + a.zoomedSlideClass),
                        (i.$slideEl = void 0));
            },
            enable: function() {
                var e = this,
                    t = e.zoom;
                if (!t.enabled) {
                    t.enabled = !0;
                    var a = !(
                        "touchstart" !== e.touchEvents.start ||
                        !te.passiveListener ||
                        !e.params.passiveListeners
                    ) && { passive: !0, capture: !1 };
                    te.gestures
                        ? (e.$wrapperEl.on(
                              "gesturestart",
                              ".swiper-slide",
                              t.onGestureStart,
                              a
                          ),
                          e.$wrapperEl.on(
                              "gesturechange",
                              ".swiper-slide",
                              t.onGestureChange,
                              a
                          ),
                          e.$wrapperEl.on(
                              "gestureend",
                              ".swiper-slide",
                              t.onGestureEnd,
                              a
                          ))
                        : "touchstart" === e.touchEvents.start &&
                          (e.$wrapperEl.on(
                              e.touchEvents.start,
                              ".swiper-slide",
                              t.onGestureStart,
                              a
                          ),
                          e.$wrapperEl.on(
                              e.touchEvents.move,
                              ".swiper-slide",
                              t.onGestureChange,
                              a
                          ),
                          e.$wrapperEl.on(
                              e.touchEvents.end,
                              ".swiper-slide",
                              t.onGestureEnd,
                              a
                          )),
                        e.$wrapperEl.on(
                            e.touchEvents.move,
                            "." + e.params.zoom.containerClass,
                            t.onTouchMove
                        );
                }
            },
            disable: function() {
                var e = this,
                    t = e.zoom;
                if (t.enabled) {
                    e.zoom.enabled = !1;
                    var a = !(
                        "touchstart" !== e.touchEvents.start ||
                        !te.passiveListener ||
                        !e.params.passiveListeners
                    ) && { passive: !0, capture: !1 };
                    te.gestures
                        ? (e.$wrapperEl.off(
                              "gesturestart",
                              ".swiper-slide",
                              t.onGestureStart,
                              a
                          ),
                          e.$wrapperEl.off(
                              "gesturechange",
                              ".swiper-slide",
                              t.onGestureChange,
                              a
                          ),
                          e.$wrapperEl.off(
                              "gestureend",
                              ".swiper-slide",
                              t.onGestureEnd,
                              a
                          ))
                        : "touchstart" === e.touchEvents.start &&
                          (e.$wrapperEl.off(
                              e.touchEvents.start,
                              ".swiper-slide",
                              t.onGestureStart,
                              a
                          ),
                          e.$wrapperEl.off(
                              e.touchEvents.move,
                              ".swiper-slide",
                              t.onGestureChange,
                              a
                          ),
                          e.$wrapperEl.off(
                              e.touchEvents.end,
                              ".swiper-slide",
                              t.onGestureEnd,
                              a
                          )),
                        e.$wrapperEl.off(
                            e.touchEvents.move,
                            "." + e.params.zoom.containerClass,
                            t.onTouchMove
                        );
                }
            },
        },
        Y = {
            loadInSlide: function(e, l) {
                void 0 === l && (l = !0);
                var d = this,
                    p = d.params.lazy;
                if (void 0 !== e && 0 !== d.slides.length) {
                    var c =
                            d.virtual && d.params.virtual.enabled
                                ? d.$wrapperEl.children(
                                      "." +
                                          d.params.slideClass +
                                          '[data-swiper-slide-index="' +
                                          e +
                                          '"]'
                                  )
                                : d.slides.eq(e),
                        t = c.find(
                            "." +
                                p.elementClass +
                                ":not(." +
                                p.loadedClass +
                                "):not(." +
                                p.loadingClass +
                                ")"
                        );
                    !c.hasClass(p.elementClass) ||
                        c.hasClass(p.loadedClass) ||
                        c.hasClass(p.loadingClass) ||
                        (t = t.add(c[0])),
                        0 !== t.length &&
                            t.each(function(e, t) {
                                var i = L(t);
                                i.addClass(p.loadingClass);
                                var s = i.attr("data-background"),
                                    r = i.attr("data-src"),
                                    n = i.attr("data-srcset"),
                                    o = i.attr("data-sizes");
                                d.loadImage(i[0], r || s, n, o, !1, function() {
                                    if (
                                        null != d &&
                                        d &&
                                        (!d || d.params) &&
                                        !d.destroyed
                                    ) {
                                        if (
                                            (s
                                                ? (i.css(
                                                      "background-image",
                                                      'url("' + s + '")'
                                                  ),
                                                  i.removeAttr(
                                                      "data-background"
                                                  ))
                                                : (n &&
                                                      (i.attr("srcset", n),
                                                      i.removeAttr(
                                                          "data-srcset"
                                                      )),
                                                  o &&
                                                      (i.attr("sizes", o),
                                                      i.removeAttr(
                                                          "data-sizes"
                                                      )),
                                                  r &&
                                                      (i.attr("src", r),
                                                      i.removeAttr(
                                                          "data-src"
                                                      ))),
                                            i
                                                .addClass(p.loadedClass)
                                                .removeClass(p.loadingClass),
                                            c
                                                .find("." + p.preloaderClass)
                                                .remove(),
                                            d.params.loop && l)
                                        ) {
                                            var e = c.attr(
                                                "data-swiper-slide-index"
                                            );
                                            if (
                                                c.hasClass(
                                                    d.params.slideDuplicateClass
                                                )
                                            ) {
                                                var t = d.$wrapperEl.children(
                                                    '[data-swiper-slide-index="' +
                                                        e +
                                                        '"]:not(.' +
                                                        d.params
                                                            .slideDuplicateClass +
                                                        ")"
                                                );
                                                d.lazy.loadInSlide(
                                                    t.index(),
                                                    !1
                                                );
                                            } else {
                                                var a = d.$wrapperEl.children(
                                                    "." +
                                                        d.params
                                                            .slideDuplicateClass +
                                                        '[data-swiper-slide-index="' +
                                                        e +
                                                        '"]'
                                                );
                                                d.lazy.loadInSlide(
                                                    a.index(),
                                                    !1
                                                );
                                            }
                                        }
                                        d.emit("lazyImageReady", c[0], i[0]);
                                    }
                                }),
                                    d.emit("lazyImageLoad", c[0], i[0]);
                            });
                }
            },
            load: function() {
                var i = this,
                    t = i.$wrapperEl,
                    a = i.params,
                    s = i.slides,
                    e = i.activeIndex,
                    r = i.virtual && a.virtual.enabled,
                    n = a.lazy,
                    o = a.slidesPerView;
                function l(e) {
                    if (r) {
                        if (
                            t.children(
                                "." +
                                    a.slideClass +
                                    '[data-swiper-slide-index="' +
                                    e +
                                    '"]'
                            ).length
                        )
                            return !0;
                    } else if (s[e]) return !0;
                    return !1;
                }
                function d(e) {
                    return r
                        ? L(e).attr("data-swiper-slide-index")
                        : L(e).index();
                }
                if (
                    ("auto" === o && (o = 0),
                    i.lazy.initialImageLoaded ||
                        (i.lazy.initialImageLoaded = !0),
                    i.params.watchSlidesVisibility)
                )
                    t.children("." + a.slideVisibleClass).each(function(e, t) {
                        var a = r
                            ? L(t).attr("data-swiper-slide-index")
                            : L(t).index();
                        i.lazy.loadInSlide(a);
                    });
                else if (1 < o)
                    for (var p = e; p < e + o; p += 1)
                        l(p) && i.lazy.loadInSlide(p);
                else i.lazy.loadInSlide(e);
                if (n.loadPrevNext)
                    if (
                        1 < o ||
                        (n.loadPrevNextAmount && 1 < n.loadPrevNextAmount)
                    ) {
                        for (
                            var c = n.loadPrevNextAmount,
                                u = o,
                                h = Math.min(e + u + Math.max(c, u), s.length),
                                v = Math.max(e - Math.max(u, c), 0),
                                f = e + o;
                            f < h;
                            f += 1
                        )
                            l(f) && i.lazy.loadInSlide(f);
                        for (var m = v; m < e; m += 1)
                            l(m) && i.lazy.loadInSlide(m);
                    } else {
                        var g = t.children("." + a.slideNextClass);
                        0 < g.length && i.lazy.loadInSlide(d(g));
                        var b = t.children("." + a.slidePrevClass);
                        0 < b.length && i.lazy.loadInSlide(d(b));
                    }
            },
        },
        V = {
            LinearSpline: function(e, t) {
                var a,
                    i,
                    s,
                    r,
                    n,
                    o = function(e, t) {
                        for (i = -1, a = e.length; 1 < a - i; )
                            e[(s = (a + i) >> 1)] <= t ? (i = s) : (a = s);
                        return a;
                    };
                return (
                    (this.x = e),
                    (this.y = t),
                    (this.lastIndex = e.length - 1),
                    (this.interpolate = function(e) {
                        return e
                            ? ((n = o(this.x, e)),
                              (r = n - 1),
                              ((e - this.x[r]) * (this.y[n] - this.y[r])) /
                                  (this.x[n] - this.x[r]) +
                                  this.y[r])
                            : 0;
                    }),
                    this
                );
            },
            getInterpolateFunction: function(e) {
                var t = this;
                t.controller.spline ||
                    (t.controller.spline = t.params.loop
                        ? new V.LinearSpline(t.slidesGrid, e.slidesGrid)
                        : new V.LinearSpline(t.snapGrid, e.snapGrid));
            },
            setTranslate: function(e, t) {
                var a,
                    i,
                    s = this,
                    r = s.controller.control;
                function n(e) {
                    var t = s.rtlTranslate ? -s.translate : s.translate;
                    "slide" === s.params.controller.by &&
                        (s.controller.getInterpolateFunction(e),
                        (i = -s.controller.spline.interpolate(-t))),
                        (i && "container" !== s.params.controller.by) ||
                            ((a =
                                (e.maxTranslate() - e.minTranslate()) /
                                (s.maxTranslate() - s.minTranslate())),
                            (i =
                                (t - s.minTranslate()) * a + e.minTranslate())),
                        s.params.controller.inverse &&
                            (i = e.maxTranslate() - i),
                        e.updateProgress(i),
                        e.setTranslate(i, s),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                }
                if (Array.isArray(r))
                    for (var o = 0; o < r.length; o += 1)
                        r[o] !== t && r[o] instanceof T && n(r[o]);
                else r instanceof T && t !== r && n(r);
            },
            setTransition: function(t, e) {
                var a,
                    i = this,
                    s = i.controller.control;
                function r(e) {
                    e.setTransition(t, i),
                        0 !== t &&
                            (e.transitionStart(),
                            e.params.autoHeight &&
                                ee.nextTick(function() {
                                    e.updateAutoHeight();
                                }),
                            e.$wrapperEl.transitionEnd(function() {
                                s &&
                                    (e.params.loop &&
                                        "slide" === i.params.controller.by &&
                                        e.loopFix(),
                                    e.transitionEnd());
                            }));
                }
                if (Array.isArray(s))
                    for (a = 0; a < s.length; a += 1)
                        s[a] !== e && s[a] instanceof T && r(s[a]);
                else s instanceof T && e !== s && r(s);
            },
        },
        F = {
            makeElFocusable: function(e) {
                return e.attr("tabIndex", "0"), e;
            },
            addElRole: function(e, t) {
                return e.attr("role", t), e;
            },
            addElLabel: function(e, t) {
                return e.attr("aria-label", t), e;
            },
            disableEl: function(e) {
                return e.attr("aria-disabled", !0), e;
            },
            enableEl: function(e) {
                return e.attr("aria-disabled", !1), e;
            },
            onEnterKey: function(e) {
                var t = this,
                    a = t.params.a11y;
                if (13 === e.keyCode) {
                    var i = L(e.target);
                    t.navigation &&
                        t.navigation.$nextEl &&
                        i.is(t.navigation.$nextEl) &&
                        ((t.isEnd && !t.params.loop) || t.slideNext(),
                        t.isEnd
                            ? t.a11y.notify(a.lastSlideMessage)
                            : t.a11y.notify(a.nextSlideMessage)),
                        t.navigation &&
                            t.navigation.$prevEl &&
                            i.is(t.navigation.$prevEl) &&
                            ((t.isBeginning && !t.params.loop) || t.slidePrev(),
                            t.isBeginning
                                ? t.a11y.notify(a.firstSlideMessage)
                                : t.a11y.notify(a.prevSlideMessage)),
                        t.pagination &&
                            i.is("." + t.params.pagination.bulletClass) &&
                            i[0].click();
                }
            },
            notify: function(e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e));
            },
            updateNavigation: function() {
                var e = this;
                if (!e.params.loop) {
                    var t = e.navigation,
                        a = t.$nextEl,
                        i = t.$prevEl;
                    i &&
                        0 < i.length &&
                        (e.isBeginning
                            ? e.a11y.disableEl(i)
                            : e.a11y.enableEl(i)),
                        a &&
                            0 < a.length &&
                            (e.isEnd
                                ? e.a11y.disableEl(a)
                                : e.a11y.enableEl(a));
                }
            },
            updatePagination: function() {
                var i = this,
                    s = i.params.a11y;
                i.pagination &&
                    i.params.pagination.clickable &&
                    i.pagination.bullets &&
                    i.pagination.bullets.length &&
                    i.pagination.bullets.each(function(e, t) {
                        var a = L(t);
                        i.a11y.makeElFocusable(a),
                            i.a11y.addElRole(a, "button"),
                            i.a11y.addElLabel(
                                a,
                                s.paginationBulletMessage.replace(
                                    /{{index}}/,
                                    a.index() + 1
                                )
                            );
                    });
            },
            init: function() {
                var e = this;
                e.$el.append(e.a11y.liveRegion);
                var t,
                    a,
                    i = e.params.a11y;
                e.navigation &&
                    e.navigation.$nextEl &&
                    (t = e.navigation.$nextEl),
                    e.navigation &&
                        e.navigation.$prevEl &&
                        (a = e.navigation.$prevEl),
                    t &&
                        (e.a11y.makeElFocusable(t),
                        e.a11y.addElRole(t, "button"),
                        e.a11y.addElLabel(t, i.nextSlideMessage),
                        t.on("keydown", e.a11y.onEnterKey)),
                    a &&
                        (e.a11y.makeElFocusable(a),
                        e.a11y.addElRole(a, "button"),
                        e.a11y.addElLabel(a, i.prevSlideMessage),
                        a.on("keydown", e.a11y.onEnterKey)),
                    e.pagination &&
                        e.params.pagination.clickable &&
                        e.pagination.bullets &&
                        e.pagination.bullets.length &&
                        e.pagination.$el.on(
                            "keydown",
                            "." + e.params.pagination.bulletClass,
                            e.a11y.onEnterKey
                        );
            },
            destroy: function() {
                var e,
                    t,
                    a = this;
                a.a11y.liveRegion &&
                    0 < a.a11y.liveRegion.length &&
                    a.a11y.liveRegion.remove(),
                    a.navigation &&
                        a.navigation.$nextEl &&
                        (e = a.navigation.$nextEl),
                    a.navigation &&
                        a.navigation.$prevEl &&
                        (t = a.navigation.$prevEl),
                    e && e.off("keydown", a.a11y.onEnterKey),
                    t && t.off("keydown", a.a11y.onEnterKey),
                    a.pagination &&
                        a.params.pagination.clickable &&
                        a.pagination.bullets &&
                        a.pagination.bullets.length &&
                        a.pagination.$el.off(
                            "keydown",
                            "." + a.params.pagination.bulletClass,
                            a.a11y.onEnterKey
                        );
            },
        },
        R = {
            init: function() {
                var e = this;
                if (e.params.history) {
                    if (!J.history || !J.history.pushState)
                        return (
                            (e.params.history.enabled = !1),
                            void (e.params.hashNavigation.enabled = !0)
                        );
                    var t = e.history;
                    (t.initialized = !0),
                        (t.paths = R.getPathValues()),
                        (t.paths.key || t.paths.value) &&
                            (t.scrollToSlide(
                                0,
                                t.paths.value,
                                e.params.runCallbacksOnInit
                            ),
                            e.params.history.replaceState ||
                                J.addEventListener(
                                    "popstate",
                                    e.history.setHistoryPopState
                                ));
                }
            },
            destroy: function() {
                this.params.history.replaceState ||
                    J.removeEventListener(
                        "popstate",
                        this.history.setHistoryPopState
                    );
            },
            setHistoryPopState: function() {
                (this.history.paths = R.getPathValues()),
                    this.history.scrollToSlide(
                        this.params.speed,
                        this.history.paths.value,
                        !1
                    );
            },
            getPathValues: function() {
                var e = J.location.pathname
                        .slice(1)
                        .split("/")
                        .filter(function(e) {
                            return "" !== e;
                        }),
                    t = e.length;
                return { key: e[t - 2], value: e[t - 1] };
            },
            setHistory: function(e, t) {
                if (this.history.initialized && this.params.history.enabled) {
                    var a = this.slides.eq(t),
                        i = R.slugify(a.attr("data-history"));
                    J.location.pathname.includes(e) || (i = e + "/" + i);
                    var s = J.history.state;
                    (s && s.value === i) ||
                        (this.params.history.replaceState
                            ? J.history.replaceState({ value: i }, null, i)
                            : J.history.pushState({ value: i }, null, i));
                }
            },
            slugify: function(e) {
                return e
                    .toString()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w-]+/g, "")
                    .replace(/--+/g, "-")
                    .replace(/^-+/, "")
                    .replace(/-+$/, "");
            },
            scrollToSlide: function(e, t, a) {
                var i = this;
                if (t)
                    for (var s = 0, r = i.slides.length; s < r; s += 1) {
                        var n = i.slides.eq(s);
                        if (
                            R.slugify(n.attr("data-history")) === t &&
                            !n.hasClass(i.params.slideDuplicateClass)
                        ) {
                            var o = n.index();
                            i.slideTo(o, e, a);
                        }
                    }
                else i.slideTo(0, e, a);
            },
        },
        q = {
            onHashCange: function() {
                var e = this,
                    t = f.location.hash.replace("#", "");
                if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                    var a = e.$wrapperEl
                        .children(
                            "." +
                                e.params.slideClass +
                                '[data-hash="' +
                                t +
                                '"]'
                        )
                        .index();
                    if (void 0 === a) return;
                    e.slideTo(a);
                }
            },
            setHash: function() {
                var e = this;
                if (
                    e.hashNavigation.initialized &&
                    e.params.hashNavigation.enabled
                )
                    if (
                        e.params.hashNavigation.replaceState &&
                        J.history &&
                        J.history.replaceState
                    )
                        J.history.replaceState(
                            null,
                            null,
                            "#" +
                                e.slides.eq(e.activeIndex).attr("data-hash") ||
                                ""
                        );
                    else {
                        var t = e.slides.eq(e.activeIndex),
                            a = t.attr("data-hash") || t.attr("data-history");
                        f.location.hash = a || "";
                    }
            },
            init: function() {
                var e = this;
                if (
                    !(
                        !e.params.hashNavigation.enabled ||
                        (e.params.history && e.params.history.enabled)
                    )
                ) {
                    e.hashNavigation.initialized = !0;
                    var t = f.location.hash.replace("#", "");
                    if (t)
                        for (var a = 0, i = e.slides.length; a < i; a += 1) {
                            var s = e.slides.eq(a);
                            if (
                                (s.attr("data-hash") ||
                                    s.attr("data-history")) === t &&
                                !s.hasClass(e.params.slideDuplicateClass)
                            ) {
                                var r = s.index();
                                e.slideTo(
                                    r,
                                    0,
                                    e.params.runCallbacksOnInit,
                                    !0
                                );
                            }
                        }
                    e.params.hashNavigation.watchState &&
                        L(J).on("hashchange", e.hashNavigation.onHashCange);
                }
            },
            destroy: function() {
                this.params.hashNavigation.watchState &&
                    L(J).off("hashchange", this.hashNavigation.onHashCange);
            },
        },
        W = {
            run: function() {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    a = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") &&
                    (a =
                        t.attr("data-swiper-autoplay") ||
                        e.params.autoplay.delay),
                    (e.autoplay.timeout = ee.nextTick(function() {
                        e.params.autoplay.reverseDirection
                            ? e.params.loop
                                ? (e.loopFix(),
                                  e.slidePrev(e.params.speed, !0, !0),
                                  e.emit("autoplay"))
                                : e.isBeginning
                                ? e.params.autoplay.stopOnLastSlide
                                    ? e.autoplay.stop()
                                    : (e.slideTo(
                                          e.slides.length - 1,
                                          e.params.speed,
                                          !0,
                                          !0
                                      ),
                                      e.emit("autoplay"))
                                : (e.slidePrev(e.params.speed, !0, !0),
                                  e.emit("autoplay"))
                            : e.params.loop
                            ? (e.loopFix(),
                              e.slideNext(e.params.speed, !0, !0),
                              e.emit("autoplay"))
                            : e.isEnd
                            ? e.params.autoplay.stopOnLastSlide
                                ? e.autoplay.stop()
                                : (e.slideTo(0, e.params.speed, !0, !0),
                                  e.emit("autoplay"))
                            : (e.slideNext(e.params.speed, !0, !0),
                              e.emit("autoplay"));
                    }, a));
            },
            start: function() {
                var e = this;
                return (
                    void 0 === e.autoplay.timeout &&
                    !e.autoplay.running &&
                    ((e.autoplay.running = !0),
                    e.emit("autoplayStart"),
                    e.autoplay.run(),
                    !0)
                );
            },
            stop: function() {
                var e = this;
                return (
                    !!e.autoplay.running &&
                    void 0 !== e.autoplay.timeout &&
                    (e.autoplay.timeout &&
                        (clearTimeout(e.autoplay.timeout),
                        (e.autoplay.timeout = void 0)),
                    (e.autoplay.running = !1),
                    e.emit("autoplayStop"),
                    !0)
                );
            },
            pause: function(e) {
                var t = this;
                t.autoplay.running &&
                    (t.autoplay.paused ||
                        (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                        (t.autoplay.paused = !0),
                        0 !== e && t.params.autoplay.waitForTransition
                            ? (t.$wrapperEl[0].addEventListener(
                                  "transitionend",
                                  t.autoplay.onTransitionEnd
                              ),
                              t.$wrapperEl[0].addEventListener(
                                  "webkitTransitionEnd",
                                  t.autoplay.onTransitionEnd
                              ))
                            : ((t.autoplay.paused = !1), t.autoplay.run())));
            },
        },
        j = {
            setTranslate: function() {
                for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                    var i = e.slides.eq(a),
                        s = -i[0].swiperSlideOffset;
                    e.params.virtualTranslate || (s -= e.translate);
                    var r = 0;
                    e.isHorizontal() || ((r = s), (s = 0));
                    var n = e.params.fadeEffect.crossFade
                        ? Math.max(1 - Math.abs(i[0].progress), 0)
                        : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({ opacity: n }).transform(
                        "translate3d(" + s + "px, " + r + "px, 0px)"
                    );
                }
            },
            setTransition: function(e) {
                var a = this,
                    t = a.slides,
                    i = a.$wrapperEl;
                if ((t.transition(e), a.params.virtualTranslate && 0 !== e)) {
                    var s = !1;
                    t.transitionEnd(function() {
                        if (!s && a && !a.destroyed) {
                            (s = !0), (a.animating = !1);
                            for (
                                var e = [
                                        "webkitTransitionEnd",
                                        "transitionend",
                                    ],
                                    t = 0;
                                t < e.length;
                                t += 1
                            )
                                i.trigger(e[t]);
                        }
                    });
                }
            },
        },
        U = {
            setTranslate: function() {
                var e,
                    t = this,
                    a = t.$el,
                    i = t.$wrapperEl,
                    s = t.slides,
                    r = t.width,
                    n = t.height,
                    o = t.rtlTranslate,
                    l = t.size,
                    d = t.params.cubeEffect,
                    p = t.isHorizontal(),
                    c = t.virtual && t.params.virtual.enabled,
                    u = 0;
                d.shadow &&
                    (p
                        ? (0 === (e = i.find(".swiper-cube-shadow")).length &&
                              ((e = L(
                                  '<div class="swiper-cube-shadow"></div>'
                              )),
                              i.append(e)),
                          e.css({ height: r + "px" }))
                        : 0 === (e = a.find(".swiper-cube-shadow")).length &&
                          ((e = L('<div class="swiper-cube-shadow"></div>')),
                          a.append(e)));
                for (var h = 0; h < s.length; h += 1) {
                    var v = s.eq(h),
                        f = h;
                    c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                    var m = 90 * f,
                        g = Math.floor(m / 360);
                    o && ((m = -m), (g = Math.floor(-m / 360)));
                    var b = Math.max(Math.min(v[0].progress, 1), -1),
                        w = 0,
                        y = 0,
                        x = 0;
                    f % 4 == 0
                        ? ((w = 4 * -g * l), (x = 0))
                        : (f - 1) % 4 == 0
                        ? ((w = 0), (x = 4 * -g * l))
                        : (f - 2) % 4 == 0
                        ? ((w = l + 4 * g * l), (x = l))
                        : (f - 3) % 4 == 0 &&
                          ((w = -l), (x = 3 * l + 4 * l * g)),
                        o && (w = -w),
                        p || ((y = w), (w = 0));
                    var T =
                        "rotateX(" +
                        (p ? 0 : -m) +
                        "deg) rotateY(" +
                        (p ? m : 0) +
                        "deg) translate3d(" +
                        w +
                        "px, " +
                        y +
                        "px, " +
                        x +
                        "px)";
                    if (
                        (b <= 1 &&
                            -1 < b &&
                            ((u = 90 * f + 90 * b),
                            o && (u = 90 * -f - 90 * b)),
                        v.transform(T),
                        d.slideShadows)
                    ) {
                        var E = p
                                ? v.find(".swiper-slide-shadow-left")
                                : v.find(".swiper-slide-shadow-top"),
                            S = p
                                ? v.find(".swiper-slide-shadow-right")
                                : v.find(".swiper-slide-shadow-bottom");
                        0 === E.length &&
                            ((E = L(
                                '<div class="swiper-slide-shadow-' +
                                    (p ? "left" : "top") +
                                    '"></div>'
                            )),
                            v.append(E)),
                            0 === S.length &&
                                ((S = L(
                                    '<div class="swiper-slide-shadow-' +
                                        (p ? "right" : "bottom") +
                                        '"></div>'
                                )),
                                v.append(S)),
                            E.length && (E[0].style.opacity = Math.max(-b, 0)),
                            S.length && (S[0].style.opacity = Math.max(b, 0));
                    }
                }
                if (
                    (i.css({
                        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                        "transform-origin": "50% 50% -" + l / 2 + "px",
                    }),
                    d.shadow)
                )
                    if (p)
                        e.transform(
                            "translate3d(0px, " +
                                (r / 2 + d.shadowOffset) +
                                "px, " +
                                -r / 2 +
                                "px) rotateX(90deg) rotateZ(0deg) scale(" +
                                d.shadowScale +
                                ")"
                        );
                    else {
                        var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
                            M =
                                1.5 -
                                (Math.sin((2 * C * Math.PI) / 360) / 2 +
                                    Math.cos((2 * C * Math.PI) / 360) / 2),
                            z = d.shadowScale,
                            P = d.shadowScale / M,
                            k = d.shadowOffset;
                        e.transform(
                            "scale3d(" +
                                z +
                                ", 1, " +
                                P +
                                ") translate3d(0px, " +
                                (n / 2 + k) +
                                "px, " +
                                -n / 2 / P +
                                "px) rotateX(-90deg)"
                        );
                    }
                var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
                i.transform(
                    "translate3d(0px,0," +
                        $ +
                        "px) rotateX(" +
                        (t.isHorizontal() ? 0 : u) +
                        "deg) rotateY(" +
                        (t.isHorizontal() ? -u : 0) +
                        "deg)"
                );
            },
            setTransition: function(e) {
                var t = this.$el;
                this.slides
                    .transition(e)
                    .find(
                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .transition(e),
                    this.params.cubeEffect.shadow &&
                        !this.isHorizontal() &&
                        t.find(".swiper-cube-shadow").transition(e);
            },
        },
        K = {
            setTranslate: function() {
                for (
                    var e = this, t = e.slides, a = e.rtlTranslate, i = 0;
                    i < t.length;
                    i += 1
                ) {
                    var s = t.eq(i),
                        r = s[0].progress;
                    e.params.flipEffect.limitRotation &&
                        (r = Math.max(Math.min(s[0].progress, 1), -1));
                    var n = -180 * r,
                        o = 0,
                        l = -s[0].swiperSlideOffset,
                        d = 0;
                    if (
                        (e.isHorizontal()
                            ? a && (n = -n)
                            : ((d = l), (o = -n), (n = l = 0)),
                        (s[0].style.zIndex =
                            -Math.abs(Math.round(r)) + t.length),
                        e.params.flipEffect.slideShadows)
                    ) {
                        var p = e.isHorizontal()
                                ? s.find(".swiper-slide-shadow-left")
                                : s.find(".swiper-slide-shadow-top"),
                            c = e.isHorizontal()
                                ? s.find(".swiper-slide-shadow-right")
                                : s.find(".swiper-slide-shadow-bottom");
                        0 === p.length &&
                            ((p = L(
                                '<div class="swiper-slide-shadow-' +
                                    (e.isHorizontal() ? "left" : "top") +
                                    '"></div>'
                            )),
                            s.append(p)),
                            0 === c.length &&
                                ((c = L(
                                    '<div class="swiper-slide-shadow-' +
                                        (e.isHorizontal()
                                            ? "right"
                                            : "bottom") +
                                        '"></div>'
                                )),
                                s.append(c)),
                            p.length && (p[0].style.opacity = Math.max(-r, 0)),
                            c.length && (c[0].style.opacity = Math.max(r, 0));
                    }
                    s.transform(
                        "translate3d(" +
                            l +
                            "px, " +
                            d +
                            "px, 0px) rotateX(" +
                            o +
                            "deg) rotateY(" +
                            n +
                            "deg)"
                    );
                }
            },
            setTransition: function(e) {
                var a = this,
                    t = a.slides,
                    i = a.activeIndex,
                    s = a.$wrapperEl;
                if (
                    (t
                        .transition(e)
                        .find(
                            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                        )
                        .transition(e),
                    a.params.virtualTranslate && 0 !== e)
                ) {
                    var r = !1;
                    t.eq(i).transitionEnd(function() {
                        if (!r && a && !a.destroyed) {
                            (r = !0), (a.animating = !1);
                            for (
                                var e = [
                                        "webkitTransitionEnd",
                                        "transitionend",
                                    ],
                                    t = 0;
                                t < e.length;
                                t += 1
                            )
                                s.trigger(e[t]);
                        }
                    });
                }
            },
        },
        _ = {
            setTranslate: function() {
                for (
                    var e = this,
                        t = e.width,
                        a = e.height,
                        i = e.slides,
                        s = e.$wrapperEl,
                        r = e.slidesSizesGrid,
                        n = e.params.coverflowEffect,
                        o = e.isHorizontal(),
                        l = e.translate,
                        d = o ? t / 2 - l : a / 2 - l,
                        p = o ? n.rotate : -n.rotate,
                        c = n.depth,
                        u = 0,
                        h = i.length;
                    u < h;
                    u += 1
                ) {
                    var v = i.eq(u),
                        f = r[u],
                        m =
                            ((d - v[0].swiperSlideOffset - f / 2) / f) *
                            n.modifier,
                        g = o ? p * m : 0,
                        b = o ? 0 : p * m,
                        w = -c * Math.abs(m),
                        y = o ? 0 : n.stretch * m,
                        x = o ? n.stretch * m : 0;
                    Math.abs(x) < 0.001 && (x = 0),
                        Math.abs(y) < 0.001 && (y = 0),
                        Math.abs(w) < 0.001 && (w = 0),
                        Math.abs(g) < 0.001 && (g = 0),
                        Math.abs(b) < 0.001 && (b = 0);
                    var T =
                        "translate3d(" +
                        x +
                        "px," +
                        y +
                        "px," +
                        w +
                        "px)  rotateX(" +
                        b +
                        "deg) rotateY(" +
                        g +
                        "deg)";
                    if (
                        (v.transform(T),
                        (v[0].style.zIndex = 1 - Math.abs(Math.round(m))),
                        n.slideShadows)
                    ) {
                        var E = o
                                ? v.find(".swiper-slide-shadow-left")
                                : v.find(".swiper-slide-shadow-top"),
                            S = o
                                ? v.find(".swiper-slide-shadow-right")
                                : v.find(".swiper-slide-shadow-bottom");
                        0 === E.length &&
                            ((E = L(
                                '<div class="swiper-slide-shadow-' +
                                    (o ? "left" : "top") +
                                    '"></div>'
                            )),
                            v.append(E)),
                            0 === S.length &&
                                ((S = L(
                                    '<div class="swiper-slide-shadow-' +
                                        (o ? "right" : "bottom") +
                                        '"></div>'
                                )),
                                v.append(S)),
                            E.length && (E[0].style.opacity = 0 < m ? m : 0),
                            S.length && (S[0].style.opacity = 0 < -m ? -m : 0);
                    }
                }
                (te.pointerEvents || te.prefixedPointerEvents) &&
                    (s[0].style.perspectiveOrigin = d + "px 50%");
            },
            setTransition: function(e) {
                this.slides
                    .transition(e)
                    .find(
                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .transition(e);
            },
        },
        Z = {
            init: function() {
                var e = this,
                    t = e.params.thumbs,
                    a = e.constructor;
                t.swiper instanceof a
                    ? ((e.thumbs.swiper = t.swiper),
                      ee.extend(e.thumbs.swiper.originalParams, {
                          watchSlidesProgress: !0,
                          slideToClickedSlide: !1,
                      }),
                      ee.extend(e.thumbs.swiper.params, {
                          watchSlidesProgress: !0,
                          slideToClickedSlide: !1,
                      }))
                    : ee.isObject(t.swiper) &&
                      ((e.thumbs.swiper = new a(
                          ee.extend({}, t.swiper, {
                              watchSlidesVisibility: !0,
                              watchSlidesProgress: !0,
                              slideToClickedSlide: !1,
                          })
                      )),
                      (e.thumbs.swiperCreated = !0)),
                    e.thumbs.swiper.$el.addClass(
                        e.params.thumbs.thumbsContainerClass
                    ),
                    e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
            },
            onThumbClick: function() {
                var e = this,
                    t = e.thumbs.swiper;
                if (t) {
                    var a = t.clickedIndex,
                        i = t.clickedSlide;
                    if (
                        !(
                            (i &&
                                L(i).hasClass(
                                    e.params.thumbs.slideThumbActiveClass
                                )) ||
                            null == a
                        )
                    ) {
                        var s;
                        if (
                            ((s = t.params.loop
                                ? parseInt(
                                      L(t.clickedSlide).attr(
                                          "data-swiper-slide-index"
                                      ),
                                      10
                                  )
                                : a),
                            e.params.loop)
                        ) {
                            var r = e.activeIndex;
                            e.slides
                                .eq(r)
                                .hasClass(e.params.slideDuplicateClass) &&
                                (e.loopFix(),
                                (e._clientLeft = e.$wrapperEl[0].clientLeft),
                                (r = e.activeIndex));
                            var n = e.slides
                                    .eq(r)
                                    .prevAll(
                                        '[data-swiper-slide-index="' + s + '"]'
                                    )
                                    .eq(0)
                                    .index(),
                                o = e.slides
                                    .eq(r)
                                    .nextAll(
                                        '[data-swiper-slide-index="' + s + '"]'
                                    )
                                    .eq(0)
                                    .index();
                            s =
                                void 0 === n
                                    ? o
                                    : void 0 === o
                                    ? n
                                    : o - r < r - n
                                    ? o
                                    : n;
                        }
                        e.slideTo(s);
                    }
                }
            },
            update: function(e) {
                var t = this,
                    a = t.thumbs.swiper;
                if (a) {
                    var i =
                        "auto" === a.params.slidesPerView
                            ? a.slidesPerViewDynamic()
                            : a.params.slidesPerView;
                    if (t.realIndex !== a.realIndex) {
                        var s,
                            r = a.activeIndex;
                        if (a.params.loop) {
                            a.slides
                                .eq(r)
                                .hasClass(a.params.slideDuplicateClass) &&
                                (a.loopFix(),
                                (a._clientLeft = a.$wrapperEl[0].clientLeft),
                                (r = a.activeIndex));
                            var n = a.slides
                                    .eq(r)
                                    .prevAll(
                                        '[data-swiper-slide-index="' +
                                            t.realIndex +
                                            '"]'
                                    )
                                    .eq(0)
                                    .index(),
                                o = a.slides
                                    .eq(r)
                                    .nextAll(
                                        '[data-swiper-slide-index="' +
                                            t.realIndex +
                                            '"]'
                                    )
                                    .eq(0)
                                    .index();
                            s =
                                void 0 === n
                                    ? o
                                    : void 0 === o
                                    ? n
                                    : o - r == r - n
                                    ? r
                                    : o - r < r - n
                                    ? o
                                    : n;
                        } else s = t.realIndex;
                        a.visibleSlidesIndexes.indexOf(s) < 0 &&
                            (a.params.centeredSlides
                                ? (s =
                                      r < s
                                          ? s - Math.floor(i / 2) + 1
                                          : s + Math.floor(i / 2) - 1)
                                : r < s && (s = s - i + 1),
                            a.slideTo(s, e ? 0 : void 0));
                    }
                    var l = 1,
                        d = t.params.thumbs.slideThumbActiveClass;
                    if (
                        (1 < t.params.slidesPerView &&
                            !t.params.centeredSlides &&
                            (l = t.params.slidesPerView),
                        a.slides.removeClass(d),
                        a.params.loop)
                    )
                        for (var p = 0; p < l; p += 1)
                            a.$wrapperEl
                                .children(
                                    '[data-swiper-slide-index="' +
                                        (t.realIndex + p) +
                                        '"]'
                                )
                                .addClass(d);
                    else
                        for (var c = 0; c < l; c += 1)
                            a.slides.eq(t.realIndex + c).addClass(d);
                }
            },
        },
        Q = [
            E,
            S,
            C,
            M,
            P,
            $,
            O,
            {
                name: "mousewheel",
                params: {
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarged: "container",
                    },
                },
                create: function() {
                    var e = this;
                    ee.extend(e, {
                        mousewheel: {
                            enabled: !1,
                            enable: A.enable.bind(e),
                            disable: A.disable.bind(e),
                            handle: A.handle.bind(e),
                            handleMouseEnter: A.handleMouseEnter.bind(e),
                            handleMouseLeave: A.handleMouseLeave.bind(e),
                            lastScrollTime: ee.now(),
                        },
                    });
                },
                on: {
                    init: function() {
                        this.params.mousewheel.enabled &&
                            this.mousewheel.enable();
                    },
                    destroy: function() {
                        this.mousewheel.enabled && this.mousewheel.disable();
                    },
                },
            },
            {
                name: "navigation",
                params: {
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                    },
                },
                create: function() {
                    var e = this;
                    ee.extend(e, {
                        navigation: {
                            init: H.init.bind(e),
                            update: H.update.bind(e),
                            destroy: H.destroy.bind(e),
                            onNextClick: H.onNextClick.bind(e),
                            onPrevClick: H.onPrevClick.bind(e),
                        },
                    });
                },
                on: {
                    init: function() {
                        this.navigation.init(), this.navigation.update();
                    },
                    toEdge: function() {
                        this.navigation.update();
                    },
                    fromEdge: function() {
                        this.navigation.update();
                    },
                    destroy: function() {
                        this.navigation.destroy();
                    },
                    click: function(e) {
                        var t,
                            a = this,
                            i = a.navigation,
                            s = i.$nextEl,
                            r = i.$prevEl;
                        !a.params.navigation.hideOnClick ||
                            L(e.target).is(r) ||
                            L(e.target).is(s) ||
                            (s
                                ? (t = s.hasClass(
                                      a.params.navigation.hiddenClass
                                  ))
                                : r &&
                                  (t = r.hasClass(
                                      a.params.navigation.hiddenClass
                                  )),
                            !0 === t
                                ? a.emit("navigationShow", a)
                                : a.emit("navigationHide", a),
                            s && s.toggleClass(a.params.navigation.hiddenClass),
                            r &&
                                r.toggleClass(a.params.navigation.hiddenClass));
                    },
                },
            },
            {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: function(e) {
                            return e;
                        },
                        formatFractionTotal: function(e) {
                            return e;
                        },
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass:
                            "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass:
                            "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock",
                    },
                },
                create: function() {
                    var e = this;
                    ee.extend(e, {
                        pagination: {
                            init: N.init.bind(e),
                            render: N.render.bind(e),
                            update: N.update.bind(e),
                            destroy: N.destroy.bind(e),
                            dynamicBulletIndex: 0,
                        },
                    });
                },
                on: {
                    init: function() {
                        this.pagination.init(),
                            this.pagination.render(),
                            this.pagination.update();
                    },
                    activeIndexChange: function() {
                        this.params.loop
                            ? this.pagination.update()
                            : void 0 === this.snapIndex &&
                              this.pagination.update();
                    },
                    snapIndexChange: function() {
                        this.params.loop || this.pagination.update();
                    },
                    slidesLengthChange: function() {
                        this.params.loop &&
                            (this.pagination.render(),
                            this.pagination.update());
                    },
                    snapGridLengthChange: function() {
                        this.params.loop ||
                            (this.pagination.render(),
                            this.pagination.update());
                    },
                    destroy: function() {
                        this.pagination.destroy();
                    },
                    click: function(e) {
                        var t = this;
                        t.params.pagination.el &&
                            t.params.pagination.hideOnClick &&
                            0 < t.pagination.$el.length &&
                            !L(e.target).hasClass(
                                t.params.pagination.bulletClass
                            ) &&
                            (!0 ===
                            t.pagination.$el.hasClass(
                                t.params.pagination.hiddenClass
                            )
                                ? t.emit("paginationShow", t)
                                : t.emit("paginationHide", t),
                            t.pagination.$el.toggleClass(
                                t.params.pagination.hiddenClass
                            ));
                    },
                },
            },
            {
                name: "scrollbar",
                params: {
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag",
                    },
                },
                create: function() {
                    var e = this;
                    ee.extend(e, {
                        scrollbar: {
                            init: G.init.bind(e),
                            destroy: G.destroy.bind(e),
                            updateSize: G.updateSize.bind(e),
                            setTranslate: G.setTranslate.bind(e),
                            setTransition: G.setTransition.bind(e),
                            enableDraggable: G.enableDraggable.bind(e),
                            disableDraggable: G.disableDraggable.bind(e),
                            setDragPosition: G.setDragPosition.bind(e),
                            onDragStart: G.onDragStart.bind(e),
                            onDragMove: G.onDragMove.bind(e),
                            onDragEnd: G.onDragEnd.bind(e),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null,
                        },
                    });
                },
                on: {
                    init: function() {
                        this.scrollbar.init(),
                            this.scrollbar.updateSize(),
                            this.scrollbar.setTranslate();
                    },
                    update: function() {
                        this.scrollbar.updateSize();
                    },
                    resize: function() {
                        this.scrollbar.updateSize();
                    },
                    observerUpdate: function() {
                        this.scrollbar.updateSize();
                    },
                    setTranslate: function() {
                        this.scrollbar.setTranslate();
                    },
                    setTransition: function(e) {
                        this.scrollbar.setTransition(e);
                    },
                    destroy: function() {
                        this.scrollbar.destroy();
                    },
                },
            },
            {
                name: "parallax",
                params: { parallax: { enabled: !1 } },
                create: function() {
                    ee.extend(this, {
                        parallax: {
                            setTransform: B.setTransform.bind(this),
                            setTranslate: B.setTranslate.bind(this),
                            setTransition: B.setTransition.bind(this),
                        },
                    });
                },
                on: {
                    beforeInit: function() {
                        this.params.parallax.enabled &&
                            ((this.params.watchSlidesProgress = !0),
                            (this.originalParams.watchSlidesProgress = !0));
                    },
                    init: function() {
                        this.params.parallax.enabled &&
                            this.parallax.setTranslate();
                    },
                    setTranslate: function() {
                        this.params.parallax.enabled &&
                            this.parallax.setTranslate();
                    },
                    setTransition: function(e) {
                        this.params.parallax.enabled &&
                            this.parallax.setTransition(e);
                    },
                },
            },
            {
                name: "zoom",
                params: {
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed",
                    },
                },
                create: function() {
                    var i = this,
                        t = {
                            enabled: !1,
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: {
                                $slideEl: void 0,
                                slideWidth: void 0,
                                slideHeight: void 0,
                                $imageEl: void 0,
                                $imageWrapEl: void 0,
                                maxRatio: 3,
                            },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {},
                            },
                            velocity: {
                                x: void 0,
                                y: void 0,
                                prevPositionX: void 0,
                                prevPositionY: void 0,
                                prevTime: void 0,
                            },
                        };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
                        .split(" ")
                        .forEach(function(e) {
                            t[e] = X[e].bind(i);
                        }),
                        ee.extend(i, { zoom: t });
                    var s = 1;
                    Object.defineProperty(i.zoom, "scale", {
                        get: function() {
                            return s;
                        },
                        set: function(e) {
                            if (s !== e) {
                                var t = i.zoom.gesture.$imageEl
                                        ? i.zoom.gesture.$imageEl[0]
                                        : void 0,
                                    a = i.zoom.gesture.$slideEl
                                        ? i.zoom.gesture.$slideEl[0]
                                        : void 0;
                                i.emit("zoomChange", e, t, a);
                            }
                            s = e;
                        },
                    });
                },
                on: {
                    init: function() {
                        this.params.zoom.enabled && this.zoom.enable();
                    },
                    destroy: function() {
                        this.zoom.disable();
                    },
                    touchStart: function(e) {
                        this.zoom.enabled && this.zoom.onTouchStart(e);
                    },
                    touchEnd: function(e) {
                        this.zoom.enabled && this.zoom.onTouchEnd(e);
                    },
                    doubleTap: function(e) {
                        this.params.zoom.enabled &&
                            this.zoom.enabled &&
                            this.params.zoom.toggle &&
                            this.zoom.toggle(e);
                    },
                    transitionEnd: function() {
                        this.zoom.enabled &&
                            this.params.zoom.enabled &&
                            this.zoom.onTransitionEnd();
                    },
                },
            },
            {
                name: "lazy",
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader",
                    },
                },
                create: function() {
                    ee.extend(this, {
                        lazy: {
                            initialImageLoaded: !1,
                            load: Y.load.bind(this),
                            loadInSlide: Y.loadInSlide.bind(this),
                        },
                    });
                },
                on: {
                    beforeInit: function() {
                        this.params.lazy.enabled &&
                            this.params.preloadImages &&
                            (this.params.preloadImages = !1);
                    },
                    init: function() {
                        this.params.lazy.enabled &&
                            !this.params.loop &&
                            0 === this.params.initialSlide &&
                            this.lazy.load();
                    },
                    scroll: function() {
                        this.params.freeMode &&
                            !this.params.freeModeSticky &&
                            this.lazy.load();
                    },
                    resize: function() {
                        this.params.lazy.enabled && this.lazy.load();
                    },
                    scrollbarDragMove: function() {
                        this.params.lazy.enabled && this.lazy.load();
                    },
                    transitionStart: function() {
                        var e = this;
                        e.params.lazy.enabled &&
                            (e.params.lazy.loadOnTransitionStart ||
                                (!e.params.lazy.loadOnTransitionStart &&
                                    !e.lazy.initialImageLoaded)) &&
                            e.lazy.load();
                    },
                    transitionEnd: function() {
                        this.params.lazy.enabled &&
                            !this.params.lazy.loadOnTransitionStart &&
                            this.lazy.load();
                    },
                },
            },
            {
                name: "controller",
                params: {
                    controller: { control: void 0, inverse: !1, by: "slide" },
                },
                create: function() {
                    var e = this;
                    ee.extend(e, {
                        controller: {
                            control: e.params.controller.control,
                            getInterpolateFunction: V.getInterpolateFunction.bind(
                                e
                            ),
                            setTranslate: V.setTranslate.bind(e),
                            setTransition: V.setTransition.bind(e),
                        },
                    });
                },
                on: {
                    update: function() {
                        this.controller.control &&
                            this.controller.spline &&
                            ((this.controller.spline = void 0),
                            delete this.controller.spline);
                    },
                    resize: function() {
                        this.controller.control &&
                            this.controller.spline &&
                            ((this.controller.spline = void 0),
                            delete this.controller.spline);
                    },
                    observerUpdate: function() {
                        this.controller.control &&
                            this.controller.spline &&
                            ((this.controller.spline = void 0),
                            delete this.controller.spline);
                    },
                    setTranslate: function(e, t) {
                        this.controller.control &&
                            this.controller.setTranslate(e, t);
                    },
                    setTransition: function(e, t) {
                        this.controller.control &&
                            this.controller.setTransition(e, t);
                    },
                },
            },
            {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                    },
                },
                create: function() {
                    var t = this;
                    ee.extend(t, {
                        a11y: {
                            liveRegion: L(
                                '<span class="' +
                                    t.params.a11y.notificationClass +
                                    '" aria-live="assertive" aria-atomic="true"></span>'
                            ),
                        },
                    }),
                        Object.keys(F).forEach(function(e) {
                            t.a11y[e] = F[e].bind(t);
                        });
                },
                on: {
                    init: function() {
                        this.params.a11y.enabled &&
                            (this.a11y.init(), this.a11y.updateNavigation());
                    },
                    toEdge: function() {
                        this.params.a11y.enabled &&
                            this.a11y.updateNavigation();
                    },
                    fromEdge: function() {
                        this.params.a11y.enabled &&
                            this.a11y.updateNavigation();
                    },
                    paginationUpdate: function() {
                        this.params.a11y.enabled &&
                            this.a11y.updatePagination();
                    },
                    destroy: function() {
                        this.params.a11y.enabled && this.a11y.destroy();
                    },
                },
            },
            {
                name: "history",
                params: {
                    history: { enabled: !1, replaceState: !1, key: "slides" },
                },
                create: function() {
                    var e = this;
                    ee.extend(e, {
                        history: {
                            init: R.init.bind(e),
                            setHistory: R.setHistory.bind(e),
                            setHistoryPopState: R.setHistoryPopState.bind(e),
                            scrollToSlide: R.scrollToSlide.bind(e),
                            destroy: R.destroy.bind(e),
                        },
                    });
                },
                on: {
                    init: function() {
                        this.params.history.enabled && this.history.init();
                    },
                    destroy: function() {
                        this.params.history.enabled && this.history.destroy();
                    },
                    transitionEnd: function() {
                        this.history.initialized &&
                            this.history.setHistory(
                                this.params.history.key,
                                this.activeIndex
                            );
                    },
                },
            },
            {
                name: "hash-navigation",
                params: {
                    hashNavigation: {
                        enabled: !1,
                        replaceState: !1,
                        watchState: !1,
                    },
                },
                create: function() {
                    var e = this;
                    ee.extend(e, {
                        hashNavigation: {
                            initialized: !1,
                            init: q.init.bind(e),
                            destroy: q.destroy.bind(e),
                            setHash: q.setHash.bind(e),
                            onHashCange: q.onHashCange.bind(e),
                        },
                    });
                },
                on: {
                    init: function() {
                        this.params.hashNavigation.enabled &&
                            this.hashNavigation.init();
                    },
                    destroy: function() {
                        this.params.hashNavigation.enabled &&
                            this.hashNavigation.destroy();
                    },
                    transitionEnd: function() {
                        this.hashNavigation.initialized &&
                            this.hashNavigation.setHash();
                    },
                },
            },
            {
                name: "autoplay",
                params: {
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                    },
                },
                create: function() {
                    var t = this;
                    ee.extend(t, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: W.run.bind(t),
                            start: W.start.bind(t),
                            stop: W.stop.bind(t),
                            pause: W.pause.bind(t),
                            onTransitionEnd: function(e) {
                                t &&
                                    !t.destroyed &&
                                    t.$wrapperEl &&
                                    e.target === this &&
                                    (t.$wrapperEl[0].removeEventListener(
                                        "transitionend",
                                        t.autoplay.onTransitionEnd
                                    ),
                                    t.$wrapperEl[0].removeEventListener(
                                        "webkitTransitionEnd",
                                        t.autoplay.onTransitionEnd
                                    ),
                                    (t.autoplay.paused = !1),
                                    t.autoplay.running
                                        ? t.autoplay.run()
                                        : t.autoplay.stop());
                            },
                        },
                    });
                },
                on: {
                    init: function() {
                        this.params.autoplay.enabled && this.autoplay.start();
                    },
                    beforeTransitionStart: function(e, t) {
                        this.autoplay.running &&
                            (t || !this.params.autoplay.disableOnInteraction
                                ? this.autoplay.pause(e)
                                : this.autoplay.stop());
                    },
                    sliderFirstMove: function() {
                        this.autoplay.running &&
                            (this.params.autoplay.disableOnInteraction
                                ? this.autoplay.stop()
                                : this.autoplay.pause());
                    },
                    destroy: function() {
                        this.autoplay.running && this.autoplay.stop();
                    },
                },
            },
            {
                name: "effect-fade",
                params: { fadeEffect: { crossFade: !1 } },
                create: function() {
                    ee.extend(this, {
                        fadeEffect: {
                            setTranslate: j.setTranslate.bind(this),
                            setTransition: j.setTransition.bind(this),
                        },
                    });
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        if ("fade" === e.params.effect) {
                            e.classNames.push(
                                e.params.containerModifierClass + "fade"
                            );
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0,
                            };
                            ee.extend(e.params, t),
                                ee.extend(e.originalParams, t);
                        }
                    },
                    setTranslate: function() {
                        "fade" === this.params.effect &&
                            this.fadeEffect.setTranslate();
                    },
                    setTransition: function(e) {
                        "fade" === this.params.effect &&
                            this.fadeEffect.setTransition(e);
                    },
                },
            },
            {
                name: "effect-cube",
                params: {
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    },
                },
                create: function() {
                    ee.extend(this, {
                        cubeEffect: {
                            setTranslate: U.setTranslate.bind(this),
                            setTransition: U.setTransition.bind(this),
                        },
                    });
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        if ("cube" === e.params.effect) {
                            e.classNames.push(
                                e.params.containerModifierClass + "cube"
                            ),
                                e.classNames.push(
                                    e.params.containerModifierClass + "3d"
                                );
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                resistanceRatio: 0,
                                spaceBetween: 0,
                                centeredSlides: !1,
                                virtualTranslate: !0,
                            };
                            ee.extend(e.params, t),
                                ee.extend(e.originalParams, t);
                        }
                    },
                    setTranslate: function() {
                        "cube" === this.params.effect &&
                            this.cubeEffect.setTranslate();
                    },
                    setTransition: function(e) {
                        "cube" === this.params.effect &&
                            this.cubeEffect.setTransition(e);
                    },
                },
            },
            {
                name: "effect-flip",
                params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
                create: function() {
                    ee.extend(this, {
                        flipEffect: {
                            setTranslate: K.setTranslate.bind(this),
                            setTransition: K.setTransition.bind(this),
                        },
                    });
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        if ("flip" === e.params.effect) {
                            e.classNames.push(
                                e.params.containerModifierClass + "flip"
                            ),
                                e.classNames.push(
                                    e.params.containerModifierClass + "3d"
                                );
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0,
                            };
                            ee.extend(e.params, t),
                                ee.extend(e.originalParams, t);
                        }
                    },
                    setTranslate: function() {
                        "flip" === this.params.effect &&
                            this.flipEffect.setTranslate();
                    },
                    setTransition: function(e) {
                        "flip" === this.params.effect &&
                            this.flipEffect.setTransition(e);
                    },
                },
            },
            {
                name: "effect-coverflow",
                params: {
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0,
                    },
                },
                create: function() {
                    ee.extend(this, {
                        coverflowEffect: {
                            setTranslate: _.setTranslate.bind(this),
                            setTransition: _.setTransition.bind(this),
                        },
                    });
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        "coverflow" === e.params.effect &&
                            (e.classNames.push(
                                e.params.containerModifierClass + "coverflow"
                            ),
                            e.classNames.push(
                                e.params.containerModifierClass + "3d"
                            ),
                            (e.params.watchSlidesProgress = !0),
                            (e.originalParams.watchSlidesProgress = !0));
                    },
                    setTranslate: function() {
                        "coverflow" === this.params.effect &&
                            this.coverflowEffect.setTranslate();
                    },
                    setTransition: function(e) {
                        "coverflow" === this.params.effect &&
                            this.coverflowEffect.setTransition(e);
                    },
                },
            },
            {
                name: "thumbs",
                params: {
                    thumbs: {
                        swiper: null,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-container-thumbs",
                    },
                },
                create: function() {
                    ee.extend(this, {
                        thumbs: {
                            swiper: null,
                            init: Z.init.bind(this),
                            update: Z.update.bind(this),
                            onThumbClick: Z.onThumbClick.bind(this),
                        },
                    });
                },
                on: {
                    beforeInit: function() {
                        var e = this.params.thumbs;
                        e &&
                            e.swiper &&
                            (this.thumbs.init(), this.thumbs.update(!0));
                    },
                    slideChange: function() {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    update: function() {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    resize: function() {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    observerUpdate: function() {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    setTransition: function(e) {
                        var t = this.thumbs.swiper;
                        t && t.setTransition(e);
                    },
                    beforeDestroy: function() {
                        var e = this.thumbs.swiper;
                        e && this.thumbs.swiperCreated && e && e.destroy();
                    },
                },
            },
        ];
    return (
        void 0 === T.use &&
            ((T.use = T.Class.use), (T.installModule = T.Class.installModule)),
        T.use(Q),
        T
    );
});

////////////////////////////////////////////////////////////////////////////////
// (C) 2013-2020 GLIDE ARTS STUDIO. (C) 2020 Social welfare juridical person Tennsui fukushi jigyoukai.
////////////////////////////////////////////////////////////////////////////////

var DIRECTORY_LEVEL = 1; // Default : 1

////////////////////////////////////////////////////////////////////////////////

var UserAgent = function(userAgent) {
    ua: userAgent;
};
UserAgent.prototype.ua = navigator.userAgent.toLowerCase();
UserAgent.prototype = {
    os: (function(a) {
        var o;

        if (a.ua.indexOf("win") > -1) {
            o = "win";
        } else if (a.ua.indexOf("mac") > -1) {
            if (
                a.ua.indexOf("iphone") > -1 ||
                a.ua.indexOf("ipod") > -1 ||
                a.ua.indexOf("ipad") > -1
            ) {
                o = "ios";
            } else {
                o = "mac";
            }
        } else if (a.ua.indexOf("android") > -1) {
            o = "android";
        } else if (a.ua.indexOf("linux") > -1) {
            o = "linux";
        } else {
            o = "other";
        }
        return o;
    })(UserAgent.prototype),

    browser: (function(a) {
        var b;
        if (a.ua.indexOf("msie") > -1 || a.ua.indexOf("trident") > -1) {
            b = "msie";
        } else if (a.ua.indexOf("edge") > -1) {
            b = "edge";
        } else if (a.ua.indexOf("firefox") > -1) {
            b = "firefox";
        } else if (
            a.ua.indexOf("safari") > -1 &&
            a.ua.indexOf("chrome") == -1
        ) {
            b = "safari";
        } else if (a.ua.indexOf("chrome") > -1) {
            b = "chrome";
        } else {
            b = "other";
        }
        return b;
    })(UserAgent.prototype),

    version: (function(a) {
        var v;
        if (a.ua.indexOf("msie") > -1) {
            v = parseInt(a.ua.substring(a.ua.indexOf("msie") + 5));
        } else if (a.ua.indexOf("trident") > -1) {
            v = parseInt(a.ua.substring(a.ua.indexOf("rv") + 3));
        } else if (a.ua.indexOf("firefox") > -1) {
            v = parseInt(a.ua.substring(a.ua.indexOf("firefox") + 8));
        } else if (
            a.ua.indexOf("safari") > -1 &&
            a.ua.indexOf("chrome") == -1
        ) {
            v = parseInt(a.ua.substring(a.ua.indexOf("version") + 8));
        } else if (a.ua.indexOf("chrome") > -1) {
            v = parseInt(a.ua.substring(a.ua.indexOf("chrome") + 7));
        } else {
            v = undefined;
        }
        return v;
    })(UserAgent.prototype),

    device: (function(a) {
        var d;
        if (a.ua.indexOf("iphone") > -1) {
            d = "iphone";
        } else if (a.ua.indexOf("ipod") > -1) {
            d = "ipod";
        } else if (a.ua.indexOf("ipad") > -1) {
            d = "ipad";
        } else if (a.ua.indexOf("android") > -1) {
            d =
                a.ua.indexOf("mobile") > -1
                    ? "android_mobile"
                    : "android_tablet";
        } else {
            d = "other";
        }
        return d;
    })(UserAgent.prototype),
};
var UA = new UserAgent(navigator.userAgent.toLowerCase());

String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
};

function setPriorityLanguage() {
    var h = document.getElementsByTagName("html")[0];
    var lang = window.navigator.languages && window.navigator.languages[0];

    // get browser language.
    if (lang.indexOf("ja") > -1) {
        h.classList.add("lang--ja");
    } else {
        h.classList.add("lang--no-ja");
    }

    // get geolocation in country.
    if ("geolocation" in navigator) {
        /* geolocation is available */
    } else {
        /* geolocation IS NOT available */
    }
}

var Icon = {
    set: function() {
        var elms = document.querySelectorAll("[data-icon]");
        for (var i = 0; i < elms.length; i++) {
            var id = elms[i].getAttribute("data-icon");
            elms[i].innerHTML = Icon.data[id] || "";
        }
    },
    data: {
        "icon_wedge-arrow-r":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline class="inline-svg--line-round" points="10.69,9.27 13.73,12 10.69,14.73 "/></svg>',
        "icon_wedge-arrow-l":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline class="inline-svg--line-round" points="13.31,9.27 10.27,12 13.31,14.73 "/></svg>',
        "icon_wedge-arrow-u":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline class="inline-svg--line-round" points="14.73,13.31 12,10.27 9.27,13.31 "/></svg>',
        "icon_wedge-arrow-d":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline class="inline-svg--line-round" points="9.27,10.69 12,13.73 14.73,10.69 "/></svg>',

        "icon_wedge-arrow-r-c":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--line-round" cx="12" cy="12" r="7.6"/><polyline class="inline-svg--line-round" points="10.7,9.3 13.7,12 10.7,14.7 "/></svg>',
        "icon_wedge-arrow-l-c":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--line-round" cx="12" cy="12" r="7.6"/><polyline class="inline-svg--line-round" points="13.3,14.7 10.3,12 13.3,9.3 "/></svg>',
        "icon_wedge-arrow-u-c":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--line-round" cx="12" cy="12" r="7.6"/><polyline class="inline-svg--line-round" points="8.8,13.6 12,10 15.2,13.6 "/></svg>',
        "icon_wedge-arrow-d-c":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--line-round" cx="12" cy="12" r="7.6"/><polyline class="inline-svg--line-round" points="15.2,10.4 12,14 8.8,10.4 "/></svg>',

        "icon_arrow-r":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="inline-svg--line-round" d="M13.5,12 M14.9,7l6.9,5l-6.9,5"/><line class="inline-svg--line-round" x1="21.9" y1="12" x2="2.1" y2="12"/></svg>',
        "icon_arrow-l":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="inline-svg--line-round" d="M10.5,12 M9.1,17l-6.9-5l6.9-5"/><line class="inline-svg--line-round" x1="2.1" y1="12" x2="21.9" y2="12"/></svg>',
        "icon_arrow-u":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="inline-svg--line-round" d="M12,10.5 M7,9.1l5-6.9l5,6.9"/><line class="inline-svg--line-round" x1="12" y1="2.1" x2="12" y2="21.9"/></svg>',
        "icon_arrow-d":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="inline-svg--line-round" d="M12,13.5 M17,14.9l-5,6.9l-5-6.9"/><line class="inline-svg--line-round" x1="12" y1="21.9" x2="12" y2="2.1"/></svg>',

        "icon_arrow-r-l":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20"><line class="inline-svg--line-round" x1="4.32" y1="10.33" x2="45.83" y2="10.33"/><polyline class="inline-svg--line-round" points="35.82,14.01 45.83,10.33 35.82,6.64 "/></svg>',
        "icon_arrow-l-l":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20"><line class="inline-svg--line-round" x1="45.68" y1="10.33" x2="4.17" y2="10.33"/><polyline class="inline-svg--line-round" points="14.18,14.01 4.17,10.33 14.18,6.64 "/></svg>',
        "icon_arrow-u-l":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 50"><line class="inline-svg--line-round" x1="10.08" y1="46.43" x2="10.08" y2="4.92"/><polyline class="inline-svg--line-round" points="6.39,14.93 10.08,4.92 13.76,14.93 "/></svg>',
        "icon_arrow-d-l":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 50"><line class="inline-svg--line-round" x1="10.08" y1="3.57" x2="10.08" y2="45.08"/><polyline class="inline-svg--line-round" points="6.39,35.07 10.08,45.08 13.76,35.07 "/></svg>',

        "icon_line-straight-h":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20"><line class="inline-svg--line-round" x1="1" y1="10.33" x2="49" y2="10.33"/></svg>',
        "icon_line-wave-h":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20"><path class="inline-svg--line-round" d="M1,9.33c2.18,0,2.18,2,4.36,2c2.18,0,2.18-2,4.36-2c2.18,0,2.18,2,4.36,2c2.18,0,2.18-2,4.36-2s2.18,2,4.36,2c2.18,0,2.18-2,4.36-2c2.18,0,2.18,2,4.36,2c2.18,0,2.18-2,4.36-2c2.18,0,2.18,2,4.37,2c2.18,0,2.18-2,4.37-2c2.18,0,2.18,2,4.37,2"/></svg>',

        icon_phone:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.51,14.93l-2.29-0.26c-0.54-0.06-1.08,0.13-1.47,0.51l-0.68,0.68c-0.6,0.6-1.53,0.71-2.24,0.25c-1.57-1.03-2.92-2.37-3.94-3.94c-0.46-0.71-0.34-1.64,0.25-2.24l0.69-0.69C9.21,8.86,9.4,8.32,9.34,7.77L9.08,5.5C8.97,4.59,8.2,3.91,7.29,3.91l-1.56,0c-1.02,0-1.86,0.85-1.8,1.86c0.48,7.69,6.62,13.82,14.3,14.3c1.02,0.06,1.86-0.78,1.86-1.8l0-1.56C20.1,15.81,19.42,15.04,18.51,14.93z"/></svg>',
        icon_mail:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="inline-svg--line-round" d="M4.76,13.75V7.56c0-0.55,0.45-1,1-1h12.48c0.55,0,1,0.45,1,1v8.78c0,0.55-0.45,1-1,1H5.76c-0.55,0-1-0.45-1-1v-1.05"/><path class="inline-svg--line-round" d="M17.74,10.11l-4.92,2.45c-0.57,0.28-1.23,0.28-1.8-0.01l-4.76-2.42"/></svg>',
        icon_fax:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="inline-svg--line-round" d="M4,17.5V12c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2v5.5c0,0.28-0.22,0.5-0.5,0.5H18"/><path class="inline-svg--line-round" d="M6,8.5V6c0-0.55,0.45-1,1-1h10c0.55,0,1,0.45,1,1v4"/><path class="inline-svg--line-round" d="M17,20H7c-0.55,0-1-0.45-1-1v-4h12v4C18,19.55,17.55,20,17,20z"/><circle cx="18" cy="12" r="0.5"/></svg>',
        icon_blank:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="inline-svg--line" d="M15,18v-0.04c0,0.57-0.46,1.04-1.03,1.04H7.03C6.46,19,6,18.54,6,17.96v-6.93C6,10.46,6.46,10,7.03,10H8"/><path class="inline-svg--line" d="M18,16h-7c-0.55,0-1-0.45-1-1V8c0-0.55,0.45-1,1-1h7c0.55,0,1,0.45,1,1v7C19,15.55,18.55,16,18,16z"/></svg>',
        icon_user:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="inline-svg--line-round" d="M14.7,8.3c0,1.5-1.2,2.7-2.7,2.7S9.3,9.8,9.3,8.3c0-1.5,1.2-2.7,2.7-2.7S14.7,6.9,14.7,8.3z M6.7,15.4c0-1.8,3.6-2.8,5.3-2.8s5.3,1,5.3,2.8v2.5c0,0.2-0.2,0.4-0.4,0.4H7.1c-0.2,0-0.4-0.2-0.4-0.4V15.4z"/></svg>',
        "icon_user-fill":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--fill-none" cx="12" cy="9.6" r="2.2"/><path class="inline-svg--fill-only" d="M19.5,12c0-4.1-3.3-7.5-7.5-7.5S4.5,7.9,4.5,12c0,2.7,1.4,5.1,3.6,6.4c0.1-1.6,1.2-5.7,3.9-5.7c2.7,0,3.8,4.1,3.9,5.7C18,17.1,19.5,14.7,19.5,12z M12,11.9c-1.2,0-2.2-1-2.2-2.2c0-1.2,1-2.2,2.2-2.2s2.2,1,2.2,2.2C14.2,10.9,13.2,11.9,12,11.9z"/></svg>',
        "icon_user-circle":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--line-round" cx="12" cy="12" r="7.5"/><circle class="inline-svg--line-round" cx="12" cy="9.6" r="2.2"/><path class="inline-svg--line-round" d="M7.5,16.6c0-1.5,1.3-3.3,4.5-3.3s4.5,1.8,4.5,3.3"/></svg>',
        icon_device:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path class="inline-svg--line" d="M14.1,17.1H3.6c-0.4,0-0.8-0.4-0.8-0.8V5.3c0-0.4,0.4-0.8,0.8-0.8h14.6c0.4,0,0.8,0.4,0.8,0.8v3.3"/><path class="inline-svg--line" d="M9.1,17.1l-0.7,2.5c-0.1,0.2,0.1,0.4,0.3,0.4h4.6c0.2,0,0.3-0.2,0.3-0.4l-0.7-2.5"/><line class="inline-svg--line" x1="14.1" y1="15.1" x2="2.8" y2="15.1"/><line class="inline-svg--line" x1="2.8" y1="5.9" x2="19" y2="5.9"/></g><g><line class="inline-svg--line" x1="20.9" y1="17.9" x2="15.1" y2="17.9"/><line class="inline-svg--line" x1="15.1" y1="11.1" x2="20.9" y2="11.1"/><path class="inline-svg--line" d="M20.3,20.2h-4.7c-0.3,0-0.6-0.3-0.6-0.6v-9.4c0-0.3,0.3-0.6,0.6-0.6h4.7c0.3,0,0.6,0.3,0.6,0.6v9.4C20.9,20,20.7,20.2,20.3,20.2z"/><circle cx="18" cy="19" r="0.4"/></g></svg>',
        "icon_device-desktop":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="inline-svg--line-round" d="M19.1,17.1H4.9c-0.4,0-0.8-0.4-0.8-0.8V6.3c0-0.4,0.4-0.8,0.8-0.8h14.2c0.4,0,0.8,0.4,0.8,0.8v9.9C19.9,16.7,19.6,17.1,19.1,17.1z"/><path class="inline-svg--line-round" d="M10.2,17.1l-0.7,2.5c-0.1,0.2,0.1,0.4,0.3,0.4h4.6c0.2,0,0.3-0.2,0.3-0.4l-0.7-2.5"/><line class="inline-svg--line-round" x1="19.9" y1="15.7" x2="4.1" y2="15.7"/><line class="inline-svg--line-round" x1="4.1" y1="6.9" x2="19.9" y2="6.9"/></svg>',
        "icon_device-mobile":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="inline-svg--line-round" d="M16.9,5.3c0-0.8-0.6-1.4-1.4-1.4h-7c-0.8,0-1.4,0.6-1.4,1.4V19c0,0.8,0.6,1.4,1.4,1.4h7c0.8,0,1.4-0.6,1.4-1.4V5.3z"/><circle class="inline-svg--line-round" cx="12" cy="18.4" r="0.7"/><line class="inline-svg--line-round" x1="16.9" y1="16.4" x2="7.1" y2="16.4"/><line class="inline-svg--line-round" x1="7.1" y1="5.7" x2="16.9" y2="5.7"/></svg>',
        icon_file:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="inline-svg--line-round" d="M18.38,20.5c0.39,0,0.7-0.31,0.7-0.7V8.1c0-0.31-0.12-0.61-0.35-0.84l-3.38-3.38c-0.22-0.22-0.52-0.35-0.84-0.35H5.6c-0.39,0-0.7,0.31-0.7,0.7V19.8c0,0.39,0.31,0.7,0.7,0.7H18.38z"/><line class="inline-svg--line-round" x1="7.9" y1="8" x2="13.08" y2="8"/><line class="inline-svg--line-round" x1="7.9" y1="12" x2="16.08" y2="12"/><line class="inline-svg--line-round" x1="7.9" y1="16" x2="16.08" y2="16"/><path class="inline-svg--line-round" d="M15,3.53v3.18c0,0.45,0.37,0.81,0.82,0.81l3.26-0.04"/></svg>',
        icon_file_pdf:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="inline-svg--line-round" d="M18.38,20.5c0.39,0,0.7-0.31,0.7-0.7V8.1c0-0.31-0.12-0.61-0.35-0.84l-3.38-3.38c-0.22-0.22-0.52-0.35-0.84-0.35H5.6c-0.39,0-0.7,0.31-0.7,0.7V19.8c0,0.39,0.31,0.7,0.7,0.7H18.38z"/><path class="inline-svg--line-round" d="M15,3.53v3.18c0,0.45,0.37,0.81,0.82,0.81l3.26-0.04"/><path class="inline-svg--line-round" d="M11.99,7.89c1.89-0.05-1.28,5.4-1.28,5.4s-3.09,5.05-3.83,3.45s5.11-1.55,5.11-1.55s5.94,0.01,5.11,1.55s-3.83-3.45-3.83-3.45S10.1,7.94,11.99,7.89z"/></svg>',
        icon_download:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="inline-svg--line-round" d="M19.36,15.49v3.07c0,0.55-0.45,1-1,1H5.64c-0.55,0-1-0.45-1-1v-3.07"/><line class="inline-svg--line-round" x1="11.99" y1="3.89" x2="11.99" y2="15.01"/><polyline class="inline-svg--line-round" points="9.3,12.32 11.99,15.01 14.68,12.32 "/></svg>',
        icon_calendar:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><line class="inline-svg--line-round" x1="8.84" y1="4.88" x2="8.84" y2="6.46"/><line class="inline-svg--line-round" x1="15.08" y1="4.88" x2="15.08" y2="6.46"/><path class="inline-svg--line-round" d="M17,17.74H7c-0.44,0-0.8-0.36-0.8-0.8V7.06c0-0.44,0.36-0.8,0.8-0.8h10c0.44,0,0.8,0.36,0.8,0.8v9.88C17.8,17.38,17.44,17.74,17,17.74z"/><path class="inline-svg--fill-only"  d="M6.2,9.92V7.06c0-0.44,0.36-0.8,0.8-0.8h10c0.44,0,0.8,0.36,0.8,0.8v2.86H6.2z"/><circle class="inline-svg--fill-only" cx="12" cy="11.79" r="0.51"/><circle class="inline-svg--fill-only" cx="9.4" cy="11.79" r="0.51"/><circle class="inline-svg--fill-only" cx="14.59" cy="11.79" r="0.51"/><circle class="inline-svg--fill-only" cx="12" cy="13.68" r="0.51"/><circle class="inline-svg--fill-only" cx="9.4" cy="13.68" r="0.51"/><circle class="inline-svg--fill-only" cx="14.59" cy="13.68" r="0.51"/><circle class="inline-svg--fill-only" cx="12" cy="15.57" r="0.51"/><circle class="inline-svg--fill-only" cx="9.4" cy="15.57" r="0.51"/></svg>',
        icon_close:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="inline-svg--line-round" d="M13.5,12 M18,6.1L6,18 M18,18L6,6.1"/></svg>',
        icon_done:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline class="inline-svg--line-round" points="18.8,7.2 7.6,18.7 4.5,15.6 "/></svg>',
        "icon_done-circle":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline class="inline-svg--line-round" points="16.4,9 10,15.5 7.7,13.1 "/><circle class="inline-svg--line-round" cx="12" cy="12" r="7.6"/></svg>',
        icon_list:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect class="inline-svg--fill-only" x="3" y="11" width="18" height="2"/><rect class="inline-svg--fill-only" x="3" y="17" width="13" height="2"/><rect class="inline-svg--fill-only" x="3" y="5" width="18" height="2"/></svg>',
        icon_info:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--line-round" cx="12" cy="12" r="7.6"/><line class="inline-svg--line" x1="12" y1="16.3" x2="12" y2="9.9"/><circle class="inline-svg--line" cx="12" cy="7.5" r="0.2"/></svg>',
        icon_feed:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--fill-only" cx="6.2" cy="17.8" r="2.2"/><path class="inline-svg--fill-only" d="M4,4.4v2.8c7,0,12.7,5.7,12.7,12.7h2.8C19.6,11.4,12.6,4.4,4,4.4z M4,10.1v2.8c3.9,0,7.1,3.2,7.1,7.1h2.8C13.9,14.5,9.5,10.1,4,10.1z"/></svg>',
        icon_link:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="inline-svg--line-round" d="M12.26,7.03l1.8-1.8c1.26-1.26,3.32-1.26,4.58,0l0,0c1.26,1.26,1.26,3.32,0,4.58l-3.84,3.84c-0.11,0.11-0.22,0.2-0.33,0.29c-1.67,1.27-4.13,0.22-4.61-1.83l-0.07-0.31"/><path class="inline-svg--line-round" d="M11.74,16.71l-1.8,1.8c-1.26,1.26-3.32,1.26-4.58,0l0,0c-1.26-1.26-1.26-3.32,0-4.58l3.84-3.84C9.3,9.99,9.41,9.89,9.53,9.8c1.67-1.27,4.13-0.22,4.61,1.83l0.07,0.31"/></svg>',
        icon_pin:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="inline-svg--line-round" d="M12,20.47C9.82,17.86,6,12.54,6,9c0-3.31,2.69-6,6-6s6,2.69,6,6C18,12.83,13.75,18.36,12,20.47z"/><circle class="inline-svg--fill-only" cx="12" cy="8.97" r="2.25"/></svg>',
        icon_directions_car:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="inline-svg--line" d="M20,12.87v4.63c0,0.83-0.67,1.5-1.5,1.5h-13C4.67,19,4,18.33,4,17.5v-4.63c0-0.57,0.1-1.14,0.29-1.68l1.73-4.86C6.31,5.53,7.06,5,7.91,5h8.18c0.85,0,1.6,0.53,1.88,1.33l1.73,4.86C19.9,11.72,20,12.29,20,12.87z"/><path class="inline-svg--line" d="M7,19v1.5C7,20.78,6.78,21,6.5,21h-1C5.22,21,5,20.78,5,20.5V19"/><path class="inline-svg--line" d="M19,19v1.5c0,0.28-0.22,0.5-0.5,0.5h-1c-0.28,0-0.5-0.22-0.5-0.5V19"/><line class="inline-svg--line" x1="4" y1="12" x2="20" y2="12"/><path class="inline-svg--fill-only" d="M7,19v1.5C7,20.78,6.78,21,6.5,21h-1C5.22,21,5,20.78,5,20.5V19"/><path class="inline-svg--fill-only" d="M19,19v1.5c0,0.28-0.22,0.5-0.5,0.5h-1c-0.28,0-0.5-0.22-0.5-0.5V19"/><circle class="inline-svg--fill-only" cx="7.5" cy="15" r="1.5"/><circle class="inline-svg--fill-only" cx="16.5" cy="15" r="1.5"/></svg>',
        icon_directions_bus:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--fill-only" cx="8.5" cy="15" r="1.5"/><circle class="inline-svg--fill-only" cx="15.5" cy="15" r="1.5"/><path class="inline-svg--fill-only" d="M8,19v1.5C8,20.78,7.78,21,7.5,21h-1C6.22,21,6,20.78,6,20.5V19"/><path class="inline-svg--fill-only" d="M18,19v1.5c0,0.28-0.22,0.5-0.5,0.5h-1c-0.28,0-0.5-0.22-0.5-0.5V19"/><path class="inline-svg--line-round" d="M8,19v1.5C8,20.78,7.78,21,7.5,21h-1C6.22,21,6,20.78,6,20.5V19"/><path class="inline-svg--line-round" d="M18,19v1.5c0,0.28-0.22,0.5-0.5,0.5h-1c-0.28,0-0.5-0.22-0.5-0.5V19"/><line class="inline-svg--line-round" x1="19" y1="12.03" x2="5" y2="12.03"/><path class="inline-svg--line-round" d="M19,6.53c0-0.8-0.36-1.56-1.01-2.02C17.02,3.82,15.21,3.03,12,3.03S6.98,3.82,6.01,4.51C5.36,4.97,5,5.74,5,6.53v0V17c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V6.53L19,6.53z"/><line class="inline-svg--line-round" x1="19" y1="6.53" x2="5" y2="6.53"/></svg>',
        icon_directions_railway:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--fill-only" cx="8.5" cy="15.5" r="1.5"/><circle class="inline-svg--fill-only" cx="15.5" cy="15.5" r="1.5"/><path class="inline-svg--line-round" d="M8,19l-1.5,2.5"/><path class="inline-svg--line-round" d="M17.5,21.5L16,19"/><line class="inline-svg--line" x1="19" y1="12.53" x2="5" y2="12.53"/><path class="inline-svg--line" d="M19,6.53c0-0.8-0.36-1.56-1.01-2.02C17.02,3.82,15.21,3.53,12,3.53S6.98,3.82,6.01,4.51C5.36,4.97,5,5.74,5,6.53v0V17c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V6.53L19,6.53z"/><line class="inline-svg--line" x1="19" y1="6.53" x2="5" y2="6.53"/><line class="inline-svg--line" x1="11.99" y1="6.39" x2="12" y2="12.53"/></svg>',
        icon_human:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--fill-only" cx="12" cy="4" r="2"/><path class="inline-svg--fill-only" d="M17.7,14.8c-0.3-2-1.2-8-5.7-8s-5.4,6-5.7,8l0,0.2l1.8,0.3l0-0.2c0.1-0.8,0.3-2.3,0.9-3.7V22h2v-6h2v6h2V11.3c0.6,1.4,0.8,2.9,0.9,3.7l0,0.2l1.8-0.3L17.7,14.8z"/></svg>',
        "icon_human_child-a":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="inline-svg--line-round" d="M12.36,10.82h-0.71c-1.66,0-3-1.34-3-3V7.08c0-1.66,1.34-3,3-3h0.71c1.66,0,3,1.34,3,3v0.74C15.36,9.48,14.01,10.82,12.36,10.82z"/><path class="inline-svg--line-round" d="M10.52,19.85c-1.18,0-3.72-1.18-2.28-2.62"/><path class="inline-svg--line-round" d="M13.46,19.85c1.18,0,3.72-1.18,2.28-2.62"/><path class="inline-svg--line-round" d="M6.52,16.23c0,0,0.6-2.94,2.72-4.11c0,0,0,0,0,0c1.72-0.95,3.81-0.95,5.53,0l0,0c2.11,1.17,2.72,4.11,2.72,4.11"/></svg>',
        "icon_human_child-b":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="inline-svg--line-round" d="M12.36,9.82h-0.71c-1.66,0-3-1.34-3-3V6.08c0-1.66,1.34-3,3-3h0.71c1.66,0,3,1.34,3,3v0.74C15.36,8.48,14.01,9.82,12.36,9.82z"/><path class="inline-svg--line-round" d="M13.78,21.38c0.47,0,0.85-0.38,0.85-0.85v-3.29l0.75-0.75c0.49-0.49,0.7-1.2,0.56-1.88l-0.31-1.47c-0.31-1.77-1.85-3.06-3.64-3.06H12h0c-1.8,0-3.34,1.29-3.64,3.06l-0.31,1.47C7.91,15.29,8.11,16,8.6,16.49l0.75,0.75v3.29c0,0.47,0.38,0.85,0.85,0.85H13.78z"/></svg>',
        icon_more_horiz:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><line class="inline-svg--line-round" x1="7.73" y1="12" x2="6.73" y2="12"/><line class="inline-svg--line-round" x1="12.73" y1="12" x2="11.73" y2="12"/><line class="inline-svg--line-round" x1="17.73" y1="12" x2="16.73" y2="12"/></svg>',
        icon_more_vert:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><line class="inline-svg--line-round" x1="12" y1="7.73" x2="12" y2="6.73"/><line class="inline-svg--line-round" x1="12" y1="12.73" x2="12" y2="11.73"/><line class="inline-svg--line-round" x1="12" y1="17.73" x2="12" y2="16.73"/></svg>',
        icon_tag:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="inline-svg--line-round" d="M20.42,15.43l-4.24,4.24c-0.78,0.78-2.05,0.78-2.83,0l-7.86-7.86c-0.4-0.4-0.61-0.95-0.58-1.52l0.21-4.02c0.05-1.02,0.87-1.84,1.89-1.89l4.04-0.22c0.57-0.03,1.12,0.18,1.52,0.58l7.85,7.85C21.2,13.38,21.2,14.64,20.42,15.43z"/><circle class="inline-svg--line-round" cx="8.04" cy="7.29" r="1"/></svg>',
        icon_dir:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="inline-svg--line" d="M11.83,6.5H20c0.55,0,1,0.45,1,1v11c0,0.55-0.45,1-1,1H4c-0.55,0-1-0.45-1-1v-13c0-0.55,0.45-1,1-1h4.17c0.53,0,1.04,0.21,1.41,0.59l0.83,0.83C10.79,6.29,11.3,6.5,11.83,6.5z"/></svg>',
        icon_cart:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon class="inline-svg--line-round" points="16.4,14.2 7.6,14.2 5.6,7.4 18.4,7.4 "/><circle class="inline-svg--line-round" cx="15.6" cy="18.8" r="1.1"/><circle class="inline-svg--line-round" cx="8.4" cy="18.8" r="1.1"/><polyline class="inline-svg--line-round" points="5.6,7.4 5,5.4 3.4,5.4 "/><line class="inline-svg--line-round" x1="8.2" y1="16.2" x2="7.6" y2="14.2"/><line class="inline-svg--line-round" x1="8.2" y1="16.2" x2="15.8" y2="16.2"/></svg>',

        icon_qlock:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--line-round" cx="12" cy="12" r="7.6"/><line class="inline-svg--line-round" x1="16.77" y1="9.73" x2="11.98" y2="12.49"/><line class="inline-svg--line-round" x1="8.87" y1="10.7" x2="11.98" y2="12.49"/></svg>',
        icon_qlock_0:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--line-round" cx="12" cy="12" r="7.6"/><line class="inline-svg--line-round" x1="11.98" y1="6.48" x2="11.98" y2="12.01"/><line class="inline-svg--line-round" x1="11.98" y1="8.42" x2="11.98" y2="12.01"/></svg>',
        icon_qlock_1:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--line-round" cx="12" cy="12" r="7.6"/><line class="inline-svg--line-round" x1="11.98" y1="6.48" x2="11.98" y2="12.01"/><line class="inline-svg--line-round" x1="13.78" y1="8.9" x2="11.98" y2="12.01"/></svg>',
        icon_qlock_2:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--line-round" cx="12" cy="12" r="7.6"/><line class="inline-svg--line-round" x1="11.98" y1="6.48" x2="11.98" y2="12.01"/><line class="inline-svg--line-round" x1="15.09" y1="10.21" x2="11.98" y2="12.01"/></svg>',
        icon_qlock_3:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--line-round" cx="12" cy="12" r="7.6"/><line class="inline-svg--line-round" x1="11.98" y1="6.48" x2="11.98" y2="12.01"/><line class="inline-svg--line-round" x1="15.57" y1="12.01" x2="11.98" y2="12.01"/></svg>',
        icon_qlock_4:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--line-round" cx="12" cy="12" r="7.6"/><line class="inline-svg--line-round" x1="11.98" y1="6.48" x2="11.98" y2="12.01"/><line class="inline-svg--line-round" x1="15.09" y1="13.81" x2="11.98" y2="12.01"/></svg>',
        icon_qlock_5:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--line-round" cx="12" cy="12" r="7.6"/><line class="inline-svg--line-round" x1="11.98" y1="6.48" x2="11.98" y2="12.01"/><line class="inline-svg--line-round" x1="13.78" y1="15.12" x2="11.98" y2="12.01"/></svg>',
        icon_qlock_6:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--line-round" cx="12" cy="12" r="7.6"/><line class="inline-svg--line-round" x1="11.98" y1="6.48" x2="11.98" y2="12.01"/><line class="inline-svg--line-round" x1="11.98" y1="15.6" x2="11.98" y2="12.01"/></svg>',
        icon_qlock_7:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--line-round" cx="12" cy="12" r="7.6"/><line class="inline-svg--line-round" x1="11.98" y1="6.48" x2="11.98" y2="12.01"/><line class="inline-svg--line-round" x1="10.18" y1="15.12" x2="11.98" y2="12.01"/></svg>',
        icon_qlock_8:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--line-round" cx="12" cy="12" r="7.6"/><line class="inline-svg--line-round" x1="11.98" y1="6.48" x2="11.98" y2="12.01"/><line class="inline-svg--line-round" x1="8.87" y1="13.81" x2="11.98" y2="12.01"/></svg>',
        icon_qlock_9:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--line-round" cx="12" cy="12" r="7.6"/><line class="inline-svg--line-round" x1="11.98" y1="6.48" x2="11.98" y2="12.01"/><line class="inline-svg--line-round" x1="8.39" y1="12.01" x2="11.98" y2="12.01"/></svg>',
        icon_qlock_10:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--line-round" cx="12" cy="12" r="7.6"/><line class="inline-svg--line-round" x1="12" y1="6.5" x2="12" y2="12"/><line class="inline-svg--line-round" x1="8.9" y1="10.2" x2="12" y2="12"/></svg>',
        icon_qlock_11:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="inline-svg--line-round" cx="12" cy="12" r="7.6"/><line class="inline-svg--line-round" x1="12" y1="6.5" x2="12" y2="12"/><line class="inline-svg--line-round" x1="10.2" y1="8.9" x2="12" y2="12"/></svg>',

        // External service
        icon_sns_twitter:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23,5.1c-0.8,0.4-1.7,0.6-2.6,0.7c0.9-0.6,1.6-1.4,2-2.5c-0.9,0.5-1.8,0.9-2.9,1.1c-0.8-0.9-2-1.4-3.3-1.4c-2.5,0-4.5,2-4.5,4.5c0,0.4,0,0.7,0.1,1c-3.8-0.2-7.1-2-9.3-4.7C2.1,4.5,1.9,5.3,1.9,6.1c0,1.6,0.8,2.9,2,3.8c-0.7,0-1.4-0.2-2-0.6c0,0,0,0,0,0.1c0,2.2,1.6,4,3.6,4.4c-0.4,0.1-0.8,0.2-1.2,0.2c-0.3,0-0.6,0-0.8-0.1C4,15.6,5.7,16.9,7.7,17c-1.5,1.2-3.5,1.9-5.6,1.9c-0.4,0-0.7,0-1.1-0.1c2,1.3,4.4,2,6.9,2c8.3,0,12.8-6.9,12.8-12.8c0-0.2,0-0.4,0-0.6C21.6,6.8,22.4,6,23,5.1z"/></svg>',
        icon_sns_facebook:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24,12c0-6.6-5.4-12-12-12S0,5.4,0,12c0,6,4.4,11,10.1,11.9v-8.4h-3V12h3V9.4c0-3,1.8-4.7,4.5-4.7c1.3,0,2.7,0.2,2.7,0.2v3h-1.5c-1.5,0-2,0.9-2,1.9V12h3.3l-0.5,3.5h-2.8v8.4C19.6,23,24,18,24,12z"/></svg>',
        icon_sns_instagram:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,3c2.9,0,3.3,0,4.4,0.1c1.1,0,1.7,0.2,2,0.4c0.5,0.2,0.9,0.4,1.3,0.8c0.4,0.4,0.6,0.8,0.8,1.3c0.2,0.4,0.3,1,0.4,2C21,8.7,21,9.1,21,12s0,3.3-0.1,4.4c0,1.1-0.2,1.7-0.4,2c-0.2,0.5-0.4,0.9-0.8,1.3c-0.4,0.4-0.8,0.6-1.3,0.8c-0.4,0.2-1,0.3-2,0.4C15.3,21,14.9,21,12,21S8.7,21,7.6,21c-1.1,0-1.7-0.2-2-0.4c-0.5-0.2-0.9-0.4-1.3-0.8c-0.4-0.4-0.6-0.8-0.8-1.3c-0.2-0.4-0.3-1-0.4-2C3,15.3,3,14.9,3,12S3,8.7,3,7.6c0-1.1,0.2-1.7,0.4-2C3.6,5,3.9,4.6,4.2,4.2C4.6,3.9,5,3.6,5.5,3.4c0.4-0.2,1-0.3,2-0.4C8.7,3,9.1,3,12,3 M12,1C9,1,8.6,1,7.5,1.1c-1.2,0.1-2,0.2-2.7,0.5C4.1,1.9,3.5,2.2,2.8,2.8c-0.6,0.6-1,1.2-1.3,1.9C1.3,5.5,1.1,6.3,1.1,7.5C1,8.6,1,9,1,12c0,3,0,3.4,0.1,4.5c0.1,1.2,0.2,2,0.5,2.7c0.3,0.7,0.7,1.3,1.3,1.9c0.6,0.6,1.2,1,1.9,1.3c0.7,0.3,1.5,0.5,2.7,0.5C8.6,23,9,23,12,23s3.4,0,4.5-0.1c1.2-0.1,2-0.2,2.7-0.5c0.7-0.3,1.3-0.7,1.9-1.3c0.6-0.6,1-1.2,1.3-1.9c0.3-0.7,0.5-1.5,0.5-2.7C23,15.4,23,15,23,12s0-3.4-0.1-4.5c-0.1-1.2-0.2-2-0.5-2.7c-0.3-0.7-0.7-1.3-1.3-1.9c-0.6-0.6-1.2-1-1.9-1.3c-0.7-0.3-1.5-0.5-2.7-0.5C15.4,1,15,1,12,1L12,1z"/><path d="M12,6.4c-3.1,0-5.6,2.5-5.6,5.6s2.5,5.6,5.6,5.6s5.6-2.5,5.6-5.6S15.1,6.4,12,6.4z M12,15.7c-2,0-3.7-1.6-3.7-3.7c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.6,3.7,3.7C15.7,14,14,15.7,12,15.7z"/><circle cx="17.9" cy="6.1" r="1.3"/></svg>',
        icon_sns_youtube:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.8,7.3c0,0-0.2-1.5-0.9-2.2c-0.8-0.9-1.8-0.9-2.2-0.9C16.6,4,12,4,12,4h0c0,0-4.6,0-7.7,0.2C3.9,4.3,2.9,4.3,2.1,5.2C1.4,5.8,1.2,7.3,1.2,7.3S1,9.1,1,10.9v1.7c0,1.8,0.2,3.6,0.2,3.6s0.2,1.5,0.9,2.2c0.8,0.9,1.9,0.8,2.4,0.9c1.8,0.2,7.5,0.2,7.5,0.2s4.6,0,7.7-0.2c0.4-0.1,1.4-0.1,2.2-0.9c0.7-0.7,0.9-2.2,0.9-2.2s0.2-1.8,0.2-3.6v-1.7C23,9.1,22.8,7.3,22.8,7.3z M9.7,14.6l0-6.2l5.9,3.1L9.7,14.6z"/></svg>',
        icon_sns_pinterest:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,1.1C6,1.1,1.1,6,1.1,12c0,4.6,2.9,8.5,6.9,10.1c-0.1-0.9-0.2-2.2,0-3.1c0.2-0.8,1.3-5.4,1.3-5.4S9,12.9,9,12c0-1.5,0.9-2.6,2-2.6c0.9,0,1.4,0.7,1.4,1.5c0,0.9-0.6,2.3-0.9,3.6c-0.3,1.1,0.5,2,1.6,2c1.9,0,3.4-2,3.4-5c0-2.6-1.9-4.4-4.5-4.4C8.8,7.1,7,9.4,7,11.8c0,0.9,0.4,1.9,0.8,2.5c0.1,0.1,0.1,0.2,0.1,0.3c-0.1,0.3-0.3,1.1-0.3,1.2c0,0.2-0.2,0.2-0.4,0.1C5.9,15.3,5,13.3,5,11.7c0-3.4,2.5-6.6,7.2-6.6c3.8,0,6.7,2.7,6.7,6.3c0,3.7-2.4,6.8-5.6,6.8c-1.1,0-2.1-0.6-2.5-1.2c0,0-0.5,2.1-0.7,2.6c-0.2,0.9-0.9,2.1-1.4,2.9c1,0.3,2.1,0.5,3.2,0.5c6,0,10.9-4.9,10.9-10.9C22.9,6,18,1.1,12,1.1z"/></svg>',
        icon_sns_line:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23,10.3c0-4.9-4.9-8.9-10.9-8.9c-6,0-10.9,4-10.9,8.9c0,4.4,3.9,8.1,9.1,8.8c0.4,0.1,0.8,0.2,1,0.5c0.1,0.3,0.1,0.7,0,1c0,0-0.1,0.8-0.2,0.9c0,0.3-0.2,1.1,0.9,0.6c1.2-0.5,6.3-3.7,8.6-6.4h0C22.3,14.1,23,12.3,23,10.3z M7.8,13.3H5.6C5.3,13.3,5,13,5,12.7V8.3C5,8,5.3,7.8,5.6,7.8c0.3,0,0.6,0.3,0.6,0.6v3.8h1.6c0.3,0,0.6,0.3,0.6,0.6C8.4,13,8.1,13.3,7.8,13.3z M10,12.7c0,0.3-0.3,0.6-0.6,0.6S8.9,13,8.9,12.7V8.3c0-0.3,0.3-0.6,0.6-0.6S10,8,10,8.3V12.7z M15.3,12.7c0,0.2-0.2,0.5-0.4,0.5c-0.1,0-0.1,0-0.2,0c-0.2,0-0.4-0.1-0.5-0.2L12,10v2.7c0,0.3-0.3,0.6-0.6,0.6c-0.3,0-0.6-0.3-0.6-0.6V8.3c0-0.2,0.2-0.5,0.4-0.5c0.1,0,0.1,0,0.2,0c0.2,0,0.4,0.1,0.5,0.2l2.2,3V8.3c0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6V12.7z M18.8,9.9c0.3,0,0.6,0.3,0.6,0.6c0,0.3-0.3,0.6-0.6,0.6h-1.6v1h1.6c0.3,0,0.6,0.3,0.6,0.6c0,0.3-0.3,0.6-0.6,0.6h-2.2c-0.3,0-0.6-0.3-0.6-0.6v-2.2c0,0,0,0,0,0c0,0,0,0,0,0V8.3c0,0,0,0,0,0c0-0.3,0.3-0.6,0.6-0.6h2.2c0.3,0,0.6,0.3,0.6,0.6c0,0.3-0.3,0.6-0.6,0.6h-1.6v1H18.8z"/></svg>',

        // symbol
        icon_symbol_tsunagu:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline class="inline-svg--line-round" points="19.02,8.43 15.51,4.92 17.43,3.01 20.94,6.52 "/><polyline class="inline-svg--line-round" points="19.02,8.43 7.71,19.73 2.36,21.6 4.21,16.23 13.71,6.73 "/></svg>',
        icon_symbol_tori:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><line class="inline-svg--line-round" x1="2" y1="3.78" x2="22" y2="3.78"/><line class="inline-svg--line-round" x1="4" y1="8" x2="20" y2="8"/><line class="inline-svg--line" x1="6" y1="3.78" x2="6" y2="21"/><line class="inline-svg--line" x1="18" y1="3.78" x2="18" y2="21"/></svg>',
        icon_symbol_blog:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="inline-svg--line-round" d="M4.21,4.22c8.61,0,15.59,6.98,15.59,15.59"/><path class="inline-svg--line-round" d="M4.21,14.61c2.87,0,5.2,2.33,5.2,5.2"/><path class="inline-svg--line-round" d="M4.21,9.41c5.74,0,10.39,4.65,10.39,10.39"/></svg>',
        icon_symbol_section:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="inline-svg--line-round" d="M7.4,18.53v-1.31c0-1.49,0.78-2.87,2.05-3.65l4-2.44c0.83-0.51,1.34-1.41,1.34-2.39V7.76c0-1.54-1.25-2.8-2.8-2.8h0c-1.54,0-2.8,1.25-2.8,2.8v0.99c0,0.98,0.51,1.88,1.34,2.39l4,2.44c1.27,0.78,2.05,2.16,2.05,3.65l0,2.55c0,1.05-0.7,1.96-1.7,2.25c-0.91,0.26-1.87,0.4-2.87,0.4h0c-5.75,0-10.41-4.66-10.41-10.41v0c0-5.75,4.66-10.41,10.41-10.41h0c5.75,0,10.41,4.66,10.41,10.41v0c0,2.87-1.16,5.47-3.04,7.35"/></svg>',

        // logo
        logo:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 425 40"><path class="inline-svg--fill-only" d="M9.83,14.42c0-0.87-0.64-1.51-1.97-1.53H7.11v-2.27c0-0.69-0.57-1.03-1.14-1.03c-0.55,0-1.12,0.34-1.12,1.03l0.02,2.29c-0.71,0.02-1.42,0.02-2.13,0.05c-0.69,0-1.03,0.5-1.03,0.98c0,0.48,0.37,0.98,1.05,0.98h0.02c1.42-0.02,2.4-0.11,3.71-0.11c0.14,0,0.27,0,0.41,0c0.16,0,0.5,0.02,0.5,0.25c0,0.14-1.62,3.82-5.74,6.04C1.21,21.35,1,21.69,1,22.04c0,0.55,0.5,1.05,1.17,1.05c0.66,0,2.01-0.96,2.82-1.65l-0.11,7.32v0.02c0,0.62,0.57,0.94,1.14,0.94c0.55,0,1.1-0.3,1.1-0.94v-0.02c0,0-0.09-5.86-0.11-9.41C8.09,18.06,9.83,15.61,9.83,14.42z M20.43,26.66l-4.44,0.02V18.7l3.32,0.02c0.73,0,1.1-0.53,1.1-1.03c0-0.53-0.37-1.03-1.08-1.03h-0.02l-3.32,0.05l0.02-5.74c0-0.71-0.57-1.05-1.14-1.05c-0.6,0-1.17,0.34-1.17,1.05v5.72l-2.98-0.02H10.7c-0.69,0-1.03,0.5-1.03,1.03c0,0.5,0.34,1.03,1.05,1.03l2.98-0.02l0.02,7.99l-4.53-0.02c-0.71,0-1.05,0.5-1.05,1.03c0,0.5,0.34,1.03,1.05,1.03h11.24c0.73,0,1.1-0.5,1.1-1.03C21.53,27.19,21.16,26.66,20.43,26.66z M9.54,22.34c0.21,0.3,0.46,0.41,0.71,0.41c0.57,0,1.12-0.57,1.12-1.21c0-1.12-2.45-2.38-2.88-2.38c-0.57,0-1.08,0.53-1.08,1.03c0,0.21,0.11,0.43,0.37,0.57C8.35,21.08,9.06,21.65,9.54,22.34zM36.45,23.05c-0.6,0-1.08,0.46-1.08,0.94c0,0.27,0.14,0.55,0.48,0.78c0.57,0.39,1.14,0.85,1.67,1.33c-1.99,0.3-4.07,0.55-6.18,0.71c0.69-1.46,1.26-3.16,1.67-4.46l7.78,0.05c0.73,0,1.1-0.5,1.1-1.01c0-0.53-0.37-1.05-1.1-1.05H26.27c-0.71,0-1.08,0.55-1.08,1.08c0,0.5,0.34,0.98,1.08,0.98l4.33-0.02c-0.39,1.51-0.98,3.27-1.63,4.6c-0.82,0.05-1.65,0.07-2.45,0.09c-0.64,0.02-0.94,0.53-0.94,1.03c0,0.55,0.37,1.14,1.05,1.14c0.46,0,6.96-0.43,12.31-1.56c0.27,0.37,0.53,0.76,0.76,1.17c0.23,0.43,0.57,0.62,0.94,0.62c0.64,0,1.28-0.55,1.28-1.24C41.92,26.87,37.8,23.05,36.45,23.05zM43,16.66c-2.72-1.4-5.17-3.32-7.42-5.72c-0.69-0.76-1.44-1.1-2.15-1.1c-0.73,0-1.44,0.39-1.99,1.1c-1.74,2.27-4.58,5.06-7.23,6.43c-0.5,0.27-0.73,0.69-0.73,1.08c0,0.62,0.53,1.21,1.26,1.21c0.3,0,0.62-0.09,0.96-0.32c2.45-1.6,5.47-4.49,7.35-6.87c0.23-0.27,0.39-0.41,0.55-0.41c0.16,0,0.34,0.14,0.59,0.41c2.54,2.84,6.84,6.52,8.08,6.52c0.78,0,1.35-0.69,1.35-1.35C43.62,17.25,43.43,16.89,43,16.66z M36.98,18.12c0.71,0,1.08-0.5,1.08-1.03c0-0.5-0.37-1.03-1.08-1.03h-6.57c-0.71,0-1.08,0.53-1.08,1.03c0,0.53,0.37,1.03,1.08,1.03H36.98z M64.58,10.85H54.47c-0.62,0-0.94,0.48-0.94,0.96c0,0.5,0.32,0.98,0.94,0.98h10.12c0.6,0,0.87-0.48,0.87-0.98C65.45,11.33,65.18,10.85,64.58,10.85zM64.42,16.59c0-2.75-0.27-2.77-4.83-2.77c-4.51,0-4.92,0.05-4.92,2.75c0,2.45,0.64,2.54,4.92,2.54C63.96,19.11,64.42,18.99,64.42,16.59z M56.64,16.82c0-0.85,0-0.85,0-0.85c0.02-0.41,0.32-0.43,2.52-0.43c0.96,0,1.95,0,2.65,0.02c0.62,0,0.69,0.18,0.69,0.87c0,0.94,0,0.94-2.82,0.94C56.78,17.37,56.64,17.28,56.64,16.82z M62.8,20.09c-0.98-0.05-2.15-0.05-3.32-0.05c-1.14,0-2.29,0-3.18,0.05c-1.69,0.07-2.31,1.08-2.36,2.04c-0.02,0.78-0.02,1.65-0.02,2.54c0,0.87,0,1.76,0.02,2.56c0.05,1.19,0.78,2.06,2.33,2.11c0.96,0.05,2.2,0.07,3.43,0.07c1.08,0,2.17-0.02,3.09-0.07c1.42-0.07,2.29-1.01,2.38-2.13c0.05-0.64,0.07-1.42,0.07-2.22c0-1.01-0.02-2.04-0.07-2.88C65.13,21.08,64.28,20.14,62.8,20.09zM58.47,27.65c-2.08,0-2.56,0-2.61-0.85c-0.02-0.46-0.07-0.92-0.07-1.4h2.68V27.65z M58.47,23.75h-2.68c0-1.53,0.16-1.97,1.05-1.99c0.43-0.02,1.01-0.02,1.62-0.02V23.75z M60.42,21.72c2.24,0,2.77,0,2.82,0.87c0.02,0.37,0.02,0.76,0.02,1.17h-2.84V21.72z M62.27,27.62c-0.53,0.02-1.19,0.02-1.85,0.02V25.4h2.86C63.28,27.33,63.19,27.58,62.27,27.62z M51.24,18.93c-0.05-0.02-0.09-0.02-0.14-0.02c2.01-2.77,2.04-3.98,2.04-4.14c0-0.92-0.62-1.58-1.81-1.6h-0.46l0.02-2.54c0-0.69-0.55-1.03-1.08-1.03c-0.55,0-1.08,0.34-1.08,1.03l0.02,2.56c-0.57,0.02-1.17,0.02-1.79,0.05c-0.62,0-0.92,0.48-0.92,0.96c0,0.48,0.32,0.98,0.94,0.98h0.02c1.28-0.02,1.95-0.11,3.07-0.11c0.11,0,0.25,0,0.37,0c0.14,0,0.43,0.02,0.43,0.25c0,0.34-1.53,3.57-5.15,5.81c-0.41,0.25-0.57,0.6-0.57,0.94c0,0.55,0.46,1.05,1.05,1.05c0.21,0,0.41-0.05,0.64-0.18c0.71-0.43,1.37-0.94,1.99-1.51l-0.09,7.46v0.02c0,0.62,0.55,0.94,1.08,0.94c0.53,0,1.05-0.32,1.05-0.94v-0.02c0,0-0.07-4.69-0.09-8.26c0.5,0.32,1.03,0.76,1.42,1.28c0.21,0.27,0.43,0.37,0.66,0.37c0.48,0,0.96-0.53,0.96-1.12C53.85,20.18,51.99,19.13,51.24,18.93z M87.68,26.91H83.9v-7.53h2.91c0.71,0,1.05-0.53,1.05-1.03c0-0.53-0.34-1.05-1.05-1.05H83.9v-6.25c0-0.66-0.55-0.98-1.1-0.98c-0.55,0-1.1,0.32-1.1,0.98v15.86h-2.06V16.16c0-0.66-0.53-0.98-1.08-0.98c-0.53,0-1.05,0.32-1.05,0.98v10.76H76.1c-0.73,0-1.08,0.5-1.08,0.98c0,0.53,0.37,1.03,1.08,1.03h11.58c0.71,0,1.05-0.5,1.05-0.98C88.73,27.42,88.36,26.91,87.68,26.91z M75.55,21.95c0.21,0.27,0.43,0.37,0.66,0.37c0.48,0,0.96-0.53,0.96-1.12c0-1.14-2.43-2.27-2.86-2.27c-0.07,0-0.14,0.02-0.18,0.02c0.78-0.98,2.2-3.04,2.2-4.21c0-0.89-0.64-1.56-1.9-1.58h-0.57l0.02-2.54c0-0.69-0.55-1.03-1.08-1.03c-0.55,0-1.08,0.34-1.08,1.03l0.02,2.56c-0.69,0.02-1.35,0.02-2.01,0.05c-0.62,0-0.92,0.48-0.92,0.96c0,0.48,0.32,0.98,0.94,0.98h0.02c1.28-0.02,2.11-0.11,3.34-0.11c0.11,0,0.23,0,0.37,0c0.16,0,0.46,0.02,0.46,0.25c0,0.27-1.51,3.55-5.38,5.81c-0.41,0.25-0.6,0.6-0.6,0.94c0,0.55,0.48,1.05,1.1,1.05c0.53,0,1.6-0.71,2.77-1.72l-0.09,7.48v0.02c0,0.62,0.55,0.94,1.08,0.94s1.05-0.32,1.05-0.94v-0.02c0,0-0.07-4.83-0.09-8.42C74.36,20.76,75.07,21.31,75.55,21.95z M94.12,18.77c0.23,0.16,0.43,0.23,0.64,0.23c0.64,0,1.12-0.62,1.12-1.26c0-1.56-3.39-2.04-3.73-2.04c-0.66,0-1.14,0.6-1.14,1.12c0,0.32,0.18,0.64,0.6,0.78C92.59,17.94,93.25,18.15,94.12,18.77z M110.1,20.66c0.73,0,1.1-0.48,1.1-0.98c0-0.48-0.37-0.98-1.1-0.98l-5.31,0.02v-3.14l3.98,0.02c0.73,0,1.1-0.5,1.1-0.98c0-0.5-0.37-1.01-1.1-1.01l-3.96,0.02v-2.61c0-0.66-0.57-1.01-1.14-1.01c-0.57,0-1.12,0.32-1.12,1.01v2.61l-3.5-0.02c-0.71,0-1.08,0.5-1.08,0.98c0,0.5,0.37,1.01,1.08,1.01l3.5-0.02l0.02,3.14l-4.81-0.02c-0.66,0-1.01,0.48-1.01,0.98c0,0.48,0.34,0.98,1.01,0.98h3.91c-0.41,1.79-1.12,4.17-1.85,5.86c-0.82,0.07-1.65,0.14-2.43,0.16c-0.62,0.02-0.92,0.53-0.92,1.08c0,0.57,0.34,1.17,1.03,1.17c0.55,0,5.86-0.57,10.64-1.74c0.21,0.39,0.39,0.8,0.55,1.21c0.21,0.55,0.62,0.78,1.01,0.78c0.64,0,1.28-0.55,1.28-1.28c0-0.85-1.44-3.07-3.87-5.45c-0.27-0.27-0.6-0.39-0.87-0.39c-0.57,0-1.05,0.43-1.05,0.94c0,0.23,0.09,0.48,0.32,0.73c0.55,0.57,1.05,1.14,1.53,1.76c-1.58,0.3-3.3,0.6-5.04,0.8c0.8-1.88,1.65-4.07,2.06-5.63H110.1z M93.02,12.22c0.82,0.46,1.46,0.82,2.2,1.6c0.25,0.25,0.53,0.37,0.8,0.37c0.62,0,1.21-0.6,1.21-1.24c0-1.3-2.93-2.52-3.46-2.52c-0.66,0-1.24,0.55-1.24,1.1C92.54,11.78,92.68,12.04,93.02,12.22z M96.04,21.4c-0.39,0-0.76,0.18-0.94,0.59c-0.73,1.65-1.95,3.87-3.32,5.42c-0.21,0.23-0.3,0.5-0.3,0.73c0,0.62,0.57,1.17,1.21,1.17c0.37,0,0.76-0.16,1.08-0.57c1.44-1.76,3.39-5.63,3.39-6.32C97.16,21.79,96.59,21.4,96.04,21.4z M133.22,26.71c-3.82-1.42-7.94-6.29-8.38-11.9c0-0.07,0-0.14-0.02-0.18v-0.09c0.07-0.98,0.09-1.97,0.09-2.77c0-0.82-0.64-1.21-1.26-1.21c-0.64,0-1.28,0.39-1.28,1.14c0,0.02,0,0.05,0,0.07c0.05,0.69,0.09,1.46,0.09,2.15c0,1.72-0.21,9.75-8.01,13.23c-0.6,0.27-0.85,0.69-0.85,1.12c0,0.64,0.57,1.26,1.33,1.26c0.21,0,0.43-0.05,0.66-0.16c4.37-2.04,6.96-5.56,8.24-9.52c1.99,5.22,6.82,9.38,8.77,9.38c0.92,0,1.51-0.71,1.51-1.4C134.12,27.37,133.87,26.94,133.22,26.71z M179.7,33.37c-5.75-1.81-11.8-6.76-14.19-13.48l10.75,0.13h0.04c1.3,0,1.93-0.97,1.93-1.93c0-0.97-0.63-1.93-1.97-1.93l-11.63,0.08c0.21-1.76,0.21-6.89,0.21-7.6l13.06,0.17h0.04c1.3,0,1.93-0.97,1.93-1.93c0-0.97-0.63-1.93-1.97-1.93h-30.11c-1.34,0-2.02,0.97-2.02,1.93c0,0.97,0.67,1.93,1.97,1.93h0.04l12.89-0.17c0.04,0.97,0.04,2.31,0.04,3.49c0,1.22,0,2.31-0.04,2.9c0,0.42-0.04,0.84-0.08,1.22l-11.17-0.08c-1.34,0-2.02,0.97-2.02,1.93c0,0.97,0.67,1.93,1.97,1.93h0.04l10.54-0.13c-1.55,6.21-5.71,11.55-13.9,14.28c-1.18,0.38-1.64,1.18-1.64,1.93c0,1.09,0.88,2.14,2.23,2.14c0.8,0,11.84-2.81,16.38-14.99c3.78,8.94,13.18,14.57,15.91,14.57c1.51,0,2.44-1.18,2.44-2.35C181.38,34.63,180.87,33.75,179.7,33.37z M221.14,29.76c-4.11-2.06-7.64-6.05-10.29-10.5c0.04,0,0.08,0,0.13-0.04c2.9-1.72,6.09-3.74,8.73-5.92c0.67-0.55,0.92-1.13,0.92-1.72c0-1.18-1.18-2.23-2.35-2.23c-0.46,0-0.92,0.17-1.34,0.55c-2.44,2.31-5.08,4.41-7.81,6.13c-1.64-3.49-2.65-7.05-2.86-10.08V4.19c0-1.34-1.01-2.02-2.02-2.02c-1.05,0-2.1,0.67-2.1,2.02v27.38c0,2.18-1.13,2.86-2.73,2.86c-0.92,0-1.97-0.21-3.02-0.46c-0.17-0.04-0.29-0.04-0.46-0.04c-1.18,0-1.89,1.09-1.89,2.14c0,1.3,0.67,2.44,5.25,2.44c5.42,0,7.05-3.15,7.05-6.17c0,0,0-0.04,0-0.08l-0.08-5l-0.13-10.04c4.11,10.25,11.04,16.8,13.94,16.8c1.39,0,2.35-1.13,2.35-2.31C222.44,30.98,222.06,30.22,221.14,29.76z M200.44,14.98c0-2.81-2.14-2.86-5.88-2.86c-2.14,0-4.7,0-6,0.04c-1.13,0.04-1.72,1.01-1.72,1.97c0,0.92,0.59,1.85,1.72,1.85c0.04,0,0.04,0,0.08,0c1.3-0.04,3.9-0.13,5.88-0.13c0.29,0,0.59,0,0.88,0c0.38,0,0.67,0.08,0.67,0.5c0,1.64-3.57,10.33-9.62,13.94c-0.76,0.46-1.05,1.05-1.05,1.64c0,1.09,1.01,2.14,2.18,2.14c2.44,0,10.16-8.06,12.55-17.17C200.35,16.2,200.44,15.57,200.44,14.98z M236.05,18.8c-0.08-0.04-0.17-0.04-0.25-0.04c3.7-5.08,3.74-7.31,3.74-7.6c0-1.68-1.13-2.9-3.32-2.94h-0.84l0.04-4.66c0-1.26-1.01-1.89-1.97-1.89c-1.01,0-1.97,0.63-1.97,1.89l0.04,4.7c-1.05,0.04-2.14,0.04-3.28,0.08c-1.13,0-1.68,0.88-1.68,1.76c0,0.88,0.59,1.81,1.72,1.81h0.04c2.35-0.04,3.57-0.21,5.63-0.21c0.21,0,0.46,0,0.67,0c0.25,0,0.8,0.04,0.8,0.46c0,0.63-2.81,6.55-9.45,10.67c-0.76,0.46-1.05,1.09-1.05,1.72c0,1.01,0.84,1.93,1.93,1.93c0.38,0,0.76-0.08,1.18-0.34c1.3-0.8,2.52-1.72,3.65-2.77l-0.17,13.69v0.04c0,1.13,1.01,1.72,1.97,1.72c0.97,0,1.93-0.59,1.93-1.72v-0.04c0,0-0.13-8.61-0.17-15.16c0.92,0.59,1.89,1.39,2.6,2.35c0.38,0.5,0.8,0.67,1.22,0.67c0.88,0,1.76-0.97,1.76-2.06C240.83,21.11,237.43,19.18,236.05,18.8z M260.23,14.52c0-5.04-0.5-5.08-8.86-5.08c-8.27,0-9.03,0.08-9.03,5.04c0,4.49,1.18,4.66,9.03,4.66C259.39,19.14,260.23,18.93,260.23,14.52zM245.96,14.94c0-1.55,0-1.55,0-1.55c0.04-0.76,0.59-0.8,4.62-0.8c1.76,0,3.57,0,4.87,0.04c1.13,0,1.26,0.34,1.26,1.6c0,1.72,0,1.72-5.16,1.72C246.21,15.95,245.96,15.78,245.96,14.94z M260.53,3.98h-18.56c-1.13,0-1.72,0.88-1.72,1.76c0,0.92,0.59,1.81,1.72,1.81h18.56c1.09,0,1.6-0.88,1.6-1.81C262.12,4.86,261.62,3.98,260.53,3.98z M257.25,20.94c-1.81-0.08-3.95-0.08-6.09-0.08c-2.1,0-4.2,0-5.84,0.08c-3.11,0.13-4.24,1.97-4.32,3.74c-0.04,1.43-0.04,3.02-0.04,4.66c0,1.6,0,3.23,0.04,4.7c0.08,2.18,1.43,3.78,4.28,3.86c1.76,0.08,4.03,0.13,6.3,0.13c1.97,0,3.99-0.04,5.67-0.13c2.6-0.13,4.2-1.85,4.37-3.91c0.08-1.18,0.13-2.6,0.13-4.07c0-1.85-0.04-3.74-0.13-5.29C261.53,22.75,259.98,21.03,257.25,20.94zM249.32,34.8c-3.82,0-4.7,0-4.79-1.55c-0.04-0.84-0.13-1.68-0.13-2.56h4.91V34.8z M249.32,27.66h-4.91c0-2.81,0.29-3.61,1.93-3.65c0.8-0.04,1.85-0.04,2.98-0.04V27.66z M252.88,23.93c4.11,0,5.08,0,5.16,1.6c0.04,0.67,0.04,1.39,0.04,2.14h-5.21V23.93z M256.29,34.76c-0.97,0.04-2.18,0.04-3.4,0.04v-4.11h5.25C258.13,34.21,257.97,34.68,256.29,34.76z M302.71,33.46h-6.93V19.64h5.33c1.3,0,1.93-0.97,1.93-1.89c0-0.97-0.63-1.93-1.93-1.93h-5.33V4.36c0-1.22-1.01-1.81-2.02-1.81c-1.01,0-2.02,0.59-2.02,1.81v29.1h-3.78V13.72c0-1.22-0.97-1.81-1.97-1.81c-0.97,0-1.93,0.59-1.93,1.81v19.73h-2.6c-1.34,0-1.97,0.92-1.97,1.81c0,0.97,0.67,1.89,1.97,1.89h21.25c1.3,0,1.93-0.92,1.93-1.81C304.64,34.38,303.97,33.46,302.71,33.46z M280.45,24.35c0.38,0.5,0.8,0.67,1.22,0.67c0.88,0,1.76-0.97,1.76-2.06c0-2.1-4.45-4.16-5.25-4.16c-0.13,0-0.25,0.04-0.34,0.04c1.43-1.81,4.03-5.58,4.03-7.73c0-1.64-1.18-2.86-3.49-2.9h-1.05l0.04-4.66c0-1.26-1.01-1.89-1.97-1.89c-1.01,0-1.97,0.63-1.97,1.89l0.04,4.7c-1.26,0.04-2.48,0.04-3.69,0.08c-1.13,0-1.68,0.88-1.68,1.76c0,0.88,0.59,1.81,1.72,1.81h0.04c2.35-0.04,3.86-0.21,6.13-0.21c0.21,0,0.42,0,0.67,0c0.29,0,0.84,0.04,0.84,0.46c0,0.5-2.77,6.51-9.87,10.67c-0.76,0.46-1.09,1.09-1.09,1.72c0,1.01,0.88,1.93,2.02,1.93c0.97,0,2.94-1.3,5.08-3.15l-0.17,13.73v0.04c0,1.13,1.01,1.72,1.97,1.72c0.97,0,1.93-0.59,1.93-1.72v-0.04c0,0-0.13-8.86-0.17-15.45C278.27,22.16,279.57,23.17,280.45,24.35z M341.59,23.42h-3.86c0-0.55-0.04-1.01-0.04-1.39c-0.08-2.1-1.68-2.98-4.37-3.02c-2.02-0.04-4.37-0.04-6.84-0.04v-1.51c9.15,0,10.33-0.04,10.62-2.73c0.04-0.42,0.08-0.84,0.08-1.3c0-0.42-0.04-0.88-0.08-1.34c-0.13-1.72-1.3-2.48-3.99-2.52c-1.64-0.04-4.07-0.04-6.63-0.04V7.89l12.47,0.04c1.18,0,1.72-0.84,1.72-1.68c0-0.84-0.55-1.68-1.72-1.68l-12.47,0.04V2.89c0-1.26-0.92-1.89-1.89-1.89c-0.97,0-1.93,0.63-1.93,1.89l0.04,1.72l-12.68-0.04c-1.13,0-1.72,0.84-1.72,1.68c0,0.84,0.59,1.68,1.72,1.68l12.68-0.04v1.64c-2.56,0-5,0.04-6.59,0.04c-3.86,0-4.37,1.3-4.37,4.07c0,3.74,0.92,3.82,10.96,3.82v1.47c-3.74,0-7.52,0-10.5,0.04c-1.09,0.04-1.6,0.8-1.6,1.55c0,0.71,0.46,1.43,1.39,1.43h0.04c2.73-0.04,6.72-0.08,10.67-0.08v1.76h-15.45c-0.97,0-1.47,0.8-1.47,1.55c0,0.8,0.5,1.6,1.47,1.6h15.45v1.89c-3.78,0-7.56-0.04-10.67-0.08h-0.04c-1.05,0-1.6,0.76-1.6,1.55c0,0.76,0.55,1.55,1.6,1.55c3.36,0.04,7.05,0.04,10.71,0.04l-0.04,1.09c0,1.55-1.01,1.97-2.27,1.97c-0.71,0-1.51-0.13-2.23-0.29c-0.21-0.04-0.42-0.08-0.63-0.08c-1.18,0-1.85,0.92-1.85,1.89c0,2.18,3.07,2.23,4.41,2.23c4.28,0,6.42-2.35,6.42-4.87v-0.04l-0.04-1.93c2.39,0,4.7-0.04,6.89-0.04c4.12,0,4.41-2.23,4.41-4.7h3.82c1.09,0,1.64-0.88,1.64-1.76S342.68,23.42,341.59,23.42zM326.47,12.25c2.18,0,4.16,0.04,5.37,0.04c1.18,0,1.39,0.38,1.39,1.05c0,1.22-0.13,1.22-6.76,1.22V12.25z M322.69,14.56c-5.96,0-6.97-0.04-6.97-0.76c0-0.92,0-0.92,0-0.92c0.08-0.38,0.42-0.59,1.3-0.59c1.3,0,3.4-0.04,5.67-0.04V14.56z M333.99,27.41c-0.04,0.76-0.55,1.18-1.3,1.18c-1.93,0.04-4.03,0.08-6.21,0.08v-1.89h7.56C334.03,26.99,333.99,27.2,333.99,27.41z M326.47,23.63v-1.72c2.35,0,4.49,0,6.21,0.04c0.76,0,1.26,0.38,1.3,1.13l0.04,0.55H326.47z M382.88,33.88c-4.79-1.6-9.2-3.11-13.56-6.21h1.26l10.58,0.21h0.04c1.01,0,1.55-0.76,1.51-1.55c0.04-0.8-0.5-1.6-1.55-1.6l-13.73,0.08l0.04-1.85l9.41,0.04c0.97,0,1.43-0.71,1.43-1.39c0-0.71-0.46-1.43-1.43-1.43l-9.36,0.04v-1.81l11.51,0.04c1.05,0,1.55-0.76,1.55-1.51c0-0.8-0.5-1.55-1.55-1.55l-7.31,0.04c0.13-0.25,0.76-1.6,0.76-2.06c0-0.63-0.46-1.09-1.05-1.39l10.12,0.04c1.18,0,1.72-0.88,1.72-1.76c0-0.88-0.55-1.72-1.68-1.72h-0.04l-5.71,0.08c2.02-2.56,2.02-3.4,2.02-3.53c0-1.05-1.09-1.89-2.18-1.89c-0.71,0-1.43,0.38-1.76,1.26c-0.5,1.26-1.26,2.94-2.1,4.2l-1.43,0.04l0.08-5.58V3.1c0-1.13-0.92-1.72-1.85-1.72c-0.97,0-1.89,0.59-1.89,1.76v5.58h-2.44V3.14c0-1.18-0.97-1.76-1.89-1.76s-1.85,0.55-1.85,1.72v0.04l0.04,5.58l-1.47-0.04c-0.42-1.68-2.65-4.53-3.4-5.04c-0.29-0.21-0.63-0.25-0.97-0.25c-1.01,0-2.1,0.8-2.1,1.68c0,0.29,0.13,0.59,0.38,0.88c0.8,0.84,1.6,1.72,2.18,2.69l-5.5-0.08h-0.04c-1.13,0-1.72,0.84-1.72,1.72c0,0.88,0.59,1.76,1.76,1.76l9.62-0.04c-0.59,0.17-1.05,0.59-1.05,1.09c0,0.21,0.04,0.42,0.21,0.63c0.29,0.46,0.59,1.09,0.84,1.72l-7.35-0.04c-1.05,0-1.6,0.76-1.6,1.51c0,0.8,0.55,1.55,1.6,1.55l11.59-0.04v1.81l-9.45-0.04c-0.92,0-1.43,0.71-1.43,1.39c0,0.71,0.5,1.43,1.43,1.43l9.49-0.04l0.04,1.85l-13.73-0.08c-1.05,0-1.6,0.8-1.6,1.6c0,0.8,0.5,1.55,1.55,1.55h0.04l10.2-0.21h1.39c-4.03,3.15-7.94,5-13.06,6.76c-1.01,0.38-1.47,1.01-1.47,1.68c0,0.97,0.88,1.89,2.14,1.89c1.34,0,9.32-3.61,14.53-7.81l-0.08,7.18v0.04c0,1.09,0.97,1.6,1.97,1.6c0.97,0,1.97-0.55,1.97-1.6v-0.04l-0.08-7.22c6.38,4.95,13.69,7.68,14.53,7.68c1.3,0,2.23-1.22,2.23-2.31C384.18,34.84,383.81,34.17,382.88,33.88z M363.27,15.44l-0.04-0.13c-0.42-2.1-1.72-3.11-2.14-3.32h8.1c-0.21,0.17-0.38,0.38-0.42,0.71c-0.13,0.84-0.55,1.97-0.88,2.73H363.27z M422.69,14.65c-5-2.56-9.49-6.09-13.6-10.5c-1.26-1.39-2.65-2.02-3.95-2.02c-1.34,0-2.65,0.71-3.65,2.02c-3.19,4.16-8.4,9.28-13.27,11.8c-0.92,0.5-1.34,1.26-1.34,1.97c0,1.13,0.97,2.23,2.31,2.23c0.55,0,1.13-0.17,1.76-0.59c4.49-2.94,10.04-8.23,13.48-12.6c0.42-0.5,0.71-0.76,1.01-0.76c0.29,0,0.63,0.25,1.09,0.76c4.66,5.21,12.55,11.97,14.82,11.97c1.43,0,2.48-1.26,2.48-2.48C423.82,15.74,423.48,15.07,422.69,14.65z M411.64,17.33c1.3,0,1.97-0.92,1.97-1.89c0-0.92-0.67-1.89-1.97-1.89h-12.05c-1.3,0-1.97,0.97-1.97,1.89c0,0.97,0.67,1.89,1.97,1.89H411.64z M410.68,26.36c-1.09,0-1.97,0.84-1.97,1.72c0,0.5,0.25,1.01,0.88,1.43c1.05,0.71,2.1,1.55,3.07,2.44c-3.65,0.55-7.47,1.01-11.34,1.3c1.26-2.69,2.31-5.79,3.07-8.19l14.28,0.08c1.34,0,2.02-0.92,2.02-1.85c0-0.97-0.67-1.93-2.02-1.93h-26.66c-1.3,0-1.97,1.01-1.97,1.97c0,0.92,0.63,1.81,1.97,1.81l7.94-0.04c-0.71,2.77-1.81,6-2.98,8.44c-1.51,0.08-3.02,0.13-4.49,0.17c-1.18,0.04-1.72,0.97-1.72,1.89c0,1.01,0.67,2.1,1.93,2.1c0.84,0,12.76-0.8,22.59-2.86c0.5,0.67,0.97,1.39,1.39,2.14c0.42,0.8,1.05,1.13,1.72,1.13c1.18,0,2.35-1.01,2.35-2.27C420.71,33.37,413.15,26.36,410.68,26.36z"/></svg>',
        logo_v:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 400"><path class="inline-svg--fill-only" d="M100.3,14c0.6,0,1.9-0.9,2.7-1.6l-0.1,7.1v0c0,0.6,0.6,0.9,1.1,0.9c0.5,0,1.1-0.3,1.1-0.9v0c0,0-0.1-5.7-0.1-9.1c1.1-1.3,2.7-3.6,2.7-4.8c0-0.8-0.6-1.5-1.9-1.5H105V2c0-0.7-0.6-1-1.1-1c-0.5,0-1.1,0.3-1.1,1l0,2.2c-0.7,0-1.4,0-2.1,0c-0.7,0-1,0.5-1,0.9s0.4,0.9,1,0.9h0c1.4,0,2.3-0.1,3.6-0.1c0.1,0,0.3,0,0.4,0c0.2,0,0.5,0,0.5,0.2c0,0.1-1.6,3.7-5.5,5.8c-0.4,0.2-0.6,0.6-0.6,0.9C99.1,13.5,99.6,14,100.3,14z M107.4,13.3c0.2,0.3,0.4,0.4,0.7,0.4c0.6,0,1.1-0.6,1.1-1.2c0-1.1-2.4-2.3-2.8-2.3c-0.6,0-1,0.5-1,1c0,0.2,0.1,0.4,0.4,0.6C106.2,12.1,106.9,12.6,107.4,13.3z M108.5,9.8l2.9,0l0,7.7l-4.4,0c-0.7,0-1,0.5-1,1c0,0.5,0.3,1,1,1h10.8c0.7,0,1.1-0.5,1.1-1c0-0.5-0.4-1-1.1-1l-4.3,0V9.8l3.2,0c0.7,0,1.1-0.5,1.1-1c0-0.5-0.4-1-1-1h0l-3.2,0l0-5.5c0-0.7-0.6-1-1.1-1c-0.6,0-1.1,0.3-1.1,1v5.5l-2.9,0h0c-0.7,0-1,0.5-1,1C107.5,9.3,107.8,9.8,108.5,9.8z M100,31.5c-0.5,0.3-0.7,0.7-0.7,1c0,0.6,0.5,1.2,1.2,1.2c0.3,0,0.6-0.1,0.9-0.3c2.4-1.5,5.3-4.3,7.1-6.6c0.2-0.3,0.4-0.4,0.5-0.4s0.3,0.1,0.6,0.4c2.5,2.7,6.6,6.3,7.8,6.3c0.8,0,1.3-0.7,1.3-1.3c0-0.4-0.2-0.7-0.6-0.9c-2.6-1.3-5-3.2-7.2-5.5c-0.7-0.7-1.4-1.1-2.1-1.1c-0.7,0-1.4,0.4-1.9,1.1C105.3,27.5,102.5,30.2,100,31.5z M102.2,40.8c-0.6,0-0.9,0.5-0.9,1c0,0.5,0.4,1.1,1,1.1c0.4,0,6.7-0.4,11.9-1.5c0.3,0.4,0.5,0.7,0.7,1.1c0.2,0.4,0.6,0.6,0.9,0.6c0.6,0,1.2-0.5,1.2-1.2c0-1.3-4-5-5.3-5c-0.6,0-1,0.4-1,0.9c0,0.3,0.1,0.5,0.5,0.8c0.6,0.4,1.1,0.8,1.6,1.3c-1.9,0.3-3.9,0.5-6,0.7c0.7-1.4,1.2-3,1.6-4.3l7.5,0c0.7,0,1.1-0.5,1.1-1c0-0.5-0.4-1-1.1-1h-14c-0.7,0-1,0.5-1,1c0,0.5,0.3,0.9,1,0.9l4.2,0c-0.4,1.5-0.9,3.2-1.6,4.4C103.8,40.8,103,40.8,102.2,40.8z M106,30.2c-0.7,0-1,0.5-1,1c0,0.5,0.4,1,1,1h6.3c0.7,0,1-0.5,1-1c0-0.5-0.4-1-1-1H106z M99.9,60c0.2,0,0.4,0,0.6-0.2c0.7-0.4,1.3-0.9,1.9-1.5l-0.1,7.2v0c0,0.6,0.5,0.9,1,0.9c0.5,0,1-0.3,1-0.9v0c0,0-0.1-4.5-0.1-8c0.5,0.3,1,0.7,1.4,1.2c0.2,0.3,0.4,0.4,0.6,0.4c0.5,0,0.9-0.5,0.9-1.1c0-0.9-1.8-1.9-2.5-2.1c0,0-0.1,0-0.1,0c1.9-2.7,2-3.8,2-4c0-0.9-0.6-1.5-1.7-1.5h-0.4l0-2.5c0-0.7-0.5-1-1-1c-0.5,0-1,0.3-1,1l0,2.5c-0.6,0-1.1,0-1.7,0c-0.6,0-0.9,0.5-0.9,0.9c0,0.5,0.3,0.9,0.9,0.9h0c1.2,0,1.9-0.1,3-0.1c0.1,0,0.2,0,0.4,0c0.1,0,0.4,0,0.4,0.2c0,0.3-1.5,3.4-5,5.6c-0.4,0.2-0.6,0.6-0.6,0.9C98.8,59.5,99.3,60,99.9,60z M109.5,66c0.9,0,2.1,0.1,3.3,0.1c1,0,2.1,0,3-0.1c1.4-0.1,2.2-1,2.3-2.1c0-0.6,0.1-1.4,0.1-2.1c0-1,0-2-0.1-2.8c0-1-0.9-1.9-2.3-1.9c-0.9,0-2.1,0-3.2,0c-1.1,0-2.2,0-3.1,0c-1.6,0.1-2.2,1-2.3,2c0,0.8,0,1.6,0,2.5c0,0.8,0,1.7,0,2.5C107.3,65.1,108,66,109.5,66z M113.5,58.7c2.2,0,2.7,0,2.7,0.8c0,0.4,0,0.7,0,1.1h-2.7V58.7z M113.5,62.2h2.8c0,1.9-0.1,2.1-1,2.1c-0.5,0-1.1,0-1.8,0V62.2z M110.1,58.7c0.4,0,1,0,1.6,0v1.9h-2.6C109.1,59.1,109.2,58.7,110.1,58.7z M111.7,62.2v2.2c-2,0-2.5,0-2.5-0.8c0-0.4-0.1-0.9-0.1-1.3H111.7z M108,53.7c0,2.4,0.6,2.5,4.7,2.5c4.2,0,4.7-0.1,4.7-2.4c0-2.6-0.3-2.7-4.7-2.7C108.4,51,108,51.1,108,53.7z M115.6,53.6c0,0.9,0,0.9-2.7,0.9c-2.8,0-2.9-0.1-2.9-0.5c0-0.8,0-0.8,0-0.8c0-0.4,0.3-0.4,2.4-0.4c0.9,0,1.9,0,2.6,0C115.5,52.7,115.6,52.9,115.6,53.6z M107.8,50h9.8c0.6,0,0.8-0.5,0.8-0.9c0-0.5-0.3-0.9-0.8-0.9h-9.8c-0.6,0-0.9,0.5-0.9,0.9C106.9,49.6,107.2,50,107.8,50z M100,83c0.5,0,1.5-0.7,2.7-1.7l-0.1,7.2v0c0,0.6,0.5,0.9,1,0.9c0.5,0,1-0.3,1-0.9v0c0,0-0.1-4.7-0.1-8.1c0.6,0.3,1.2,0.8,1.7,1.4c0.2,0.3,0.4,0.4,0.6,0.4c0.5,0,0.9-0.5,0.9-1.1c0-1.1-2.3-2.2-2.8-2.2c-0.1,0-0.1,0-0.2,0c0.8-0.9,2.1-2.9,2.1-4.1c0-0.9-0.6-1.5-1.8-1.5h-0.6l0-2.5c0-0.7-0.5-1-1-1c-0.5,0-1,0.3-1,1l0,2.5c-0.7,0-1.3,0-1.9,0c-0.6,0-0.9,0.5-0.9,0.9c0,0.5,0.3,0.9,0.9,0.9h0c1.2,0,2-0.1,3.2-0.1c0.1,0,0.2,0,0.4,0c0.2,0,0.4,0,0.4,0.2c0,0.3-1.5,3.4-5.2,5.6C99.1,81.3,99,81.6,99,82C99,82.5,99.4,83,100,83z M118,86.6h-3.6v-7.3h2.8c0.7,0,1-0.5,1-1c0-0.5-0.3-1-1-1h-2.8v-6c0-0.6-0.5-0.9-1.1-0.9c-0.5,0-1.1,0.3-1.1,0.9v15.3h-2V76.3c0-0.6-0.5-0.9-1-0.9c-0.5,0-1,0.3-1,0.9v10.4h-1.4c-0.7,0-1,0.5-1,0.9c0,0.5,0.4,1,1,1H118c0.7,0,1-0.5,1-0.9C119,87.1,118.6,86.6,118,86.6z M117.7,103.6c0.7,0,1.1-0.5,1.1-0.9c0-0.5-0.4-0.9-1.1-0.9l-5.1,0v-3l3.8,0c0.7,0,1.1-0.5,1.1-0.9c0-0.5-0.4-1-1.1-1l-3.8,0v-2.5c0-0.6-0.6-1-1.1-1c-0.6,0-1.1,0.3-1.1,1v2.5l-3.4,0c-0.7,0-1,0.5-1,0.9c0,0.5,0.4,1,1,1l3.4,0l0,3l-4.6,0c-0.6,0-1,0.5-1,0.9c0,0.5,0.3,0.9,1,0.9h3.8c-0.4,1.7-1.1,4-1.8,5.7c-0.8,0.1-1.6,0.1-2.3,0.2c-0.6,0-0.9,0.5-0.9,1c0,0.6,0.3,1.1,1,1.1c0.5,0,5.7-0.6,10.3-1.7c0.2,0.4,0.4,0.8,0.5,1.2c0.2,0.5,0.6,0.8,1,0.8c0.6,0,1.2-0.5,1.2-1.2c0-0.8-1.4-3-3.7-5.3c-0.3-0.3-0.6-0.4-0.8-0.4c-0.6,0-1,0.4-1,0.9c0,0.2,0.1,0.5,0.3,0.7c0.5,0.6,1,1.1,1.5,1.7c-1.5,0.3-3.2,0.6-4.9,0.8c0.8-1.8,1.6-3.9,2-5.4H117.7z M101,111.9c0.4,0,0.7-0.2,1-0.6c1.4-1.7,3.3-5.4,3.3-6.1c0-0.6-0.6-1-1.1-1c-0.4,0-0.7,0.2-0.9,0.6c-0.7,1.6-1.9,3.7-3.2,5.2c-0.2,0.2-0.3,0.5-0.3,0.7C99.8,111.4,100.3,111.9,101,111.9z M103.4,97c0.2,0.2,0.5,0.4,0.8,0.4c0.6,0,1.2-0.6,1.2-1.2c0-1.3-2.8-2.4-3.3-2.4c-0.6,0-1.2,0.5-1.2,1.1c0,0.2,0.1,0.5,0.5,0.7C102.1,95.9,102.7,96.2,103.4,97z M99.3,99.9c0,0.3,0.2,0.6,0.6,0.8c0.9,0.3,1.6,0.5,2.4,1.1c0.2,0.2,0.4,0.2,0.6,0.2c0.6,0,1.1-0.6,1.1-1.2c0-1.5-3.3-2-3.6-2C99.8,98.8,99.3,99.4,99.3,99.9z M118.1,132.4c-3.7-1.4-7.7-6.1-8.1-11.5c0-0.1,0-0.1,0-0.2v-0.1c0.1-0.9,0.1-1.9,0.1-2.7c0-0.8-0.6-1.2-1.2-1.2c-0.6,0-1.2,0.4-1.2,1.1c0,0,0,0,0,0.1c0,0.7,0.1,1.4,0.1,2.1c0,1.7-0.2,9.4-7.7,12.8c-0.6,0.3-0.8,0.7-0.8,1.1c0,0.6,0.6,1.2,1.3,1.2c0.2,0,0.4,0,0.6-0.2c4.2-2,6.7-5.4,7.9-9.2c1.9,5,6.6,9.1,8.5,9.1c0.9,0,1.5-0.7,1.5-1.3C118.9,133,118.7,132.6,118.1,132.4z M39.1,46.3c1,0,15.6-3.7,21.5-19.7c5,11.8,17.3,19.2,20.9,19.2c2,0,3.2-1.5,3.2-3.1c0-1.1-0.7-2.3-2.2-2.8C75,37.5,67.1,31,63.9,22.1l14.1,0.2h0.1c1.7,0,2.5-1.3,2.5-2.5c0-1.3-0.8-2.5-2.6-2.5l-15.3,0.1c0.3-2.3,0.3-9.1,0.3-10l17.2,0.2h0.1c1.7,0,2.5-1.3,2.5-2.5c0-1.3-0.8-2.5-2.6-2.5H40.6C38.9,2.5,38,3.8,38,5c0,1.3,0.9,2.5,2.6,2.5h0.1l17-0.2c0.1,1.3,0.1,3,0.1,4.6c0,1.6,0,3-0.1,3.8c0,0.6-0.1,1.1-0.1,1.6l-14.7-0.1c-1.8,0-2.7,1.3-2.7,2.5c0,1.3,0.9,2.5,2.6,2.5h0.1l13.9-0.2c-2,8.2-7.5,15.2-18.3,18.8c-1.5,0.5-2.2,1.5-2.2,2.5C36.2,44.9,37.4,46.3,39.1,46.3z M82.9,92.6c-5.4-2.7-10.1-8-13.5-13.8c0.1,0,0.1,0,0.2-0.1c3.8-2.3,8-4.9,11.5-7.8c0.9-0.7,1.2-1.5,1.2-2.3c0-1.5-1.5-2.9-3.1-2.9c-0.6,0-1.2,0.2-1.8,0.7c-3.2,3-6.7,5.8-10.3,8.1c-2.2-4.6-3.5-9.3-3.8-13.3v-2.3c0-1.8-1.3-2.7-2.7-2.7c-1.4,0-2.8,0.9-2.8,2.7v36c0,2.9-1.5,3.8-3.6,3.8c-1.2,0-2.6-0.3-4-0.6C50.2,98,50,98,49.8,98c-1.5,0-2.5,1.4-2.5,2.8c0,1.7,0.9,3.2,6.9,3.2c7.1,0,9.3-4.1,9.3-8.1c0,0,0-0.1,0-0.1l-0.1-6.6l-0.2-13.2c5.4,13.5,14.5,22.1,18.3,22.1c1.8,0,3.1-1.5,3.1-3C84.7,94.2,84.2,93.2,82.9,92.6z M38.8,98.3c3.2,0,13.4-10.6,16.5-22.6c0.3-0.9,0.4-1.8,0.4-2.5c0-3.7-2.8-3.8-7.7-3.8c-2.8,0-6.2,0-7.9,0.1c-1.5,0.1-2.3,1.3-2.3,2.6c0,1.2,0.8,2.4,2.3,2.4c0.1,0,0.1,0,0.1,0c1.7-0.1,5.1-0.2,7.7-0.2c0.4,0,0.8,0,1.2,0c0.5,0,0.9,0.1,0.9,0.7c0,2.2-4.7,13.6-12.6,18.3c-1,0.6-1.4,1.4-1.4,2.2C35.9,96.9,37.3,98.3,38.8,98.3z M81.8,116.1H57.4c-1.5,0-2.3,1.2-2.3,2.3c0,1.2,0.8,2.4,2.3,2.4h24.4c1.4,0,2.1-1.2,2.1-2.4C83.9,117.3,83.3,116.1,81.8,116.1z M37.5,145.7c0.5,0,1-0.1,1.5-0.4c1.7-1,3.3-2.3,4.8-3.6l-0.2,18v0.1c0,1.5,1.3,2.3,2.6,2.3s2.5-0.8,2.5-2.3v-0.1c0,0-0.2-11.3-0.2-19.9c1.2,0.8,2.5,1.8,3.4,3.1c0.5,0.7,1,0.9,1.6,0.9c1.2,0,2.3-1.3,2.3-2.7c0-2.3-4.5-4.9-6.3-5.4c-0.1-0.1-0.2-0.1-0.3-0.1c4.9-6.7,4.9-9.6,4.9-10c0-2.2-1.5-3.8-4.4-3.9h-1.1l0.1-6.1c0-1.7-1.3-2.5-2.6-2.5c-1.3,0-2.6,0.8-2.6,2.5l0.1,6.2c-1.4,0.1-2.8,0.1-4.3,0.1c-1.5,0-2.2,1.2-2.2,2.3c0,1.2,0.8,2.4,2.3,2.4h0.1c3.1-0.1,4.7-0.3,7.4-0.3c0.3,0,0.6,0,0.9,0c0.3,0,1,0.1,1,0.6c0,0.8-3.7,8.6-12.4,14c-1,0.6-1.4,1.4-1.4,2.3C35,144.5,36.1,145.7,37.5,145.7z M56.2,143.3c-0.1,1.9-0.1,4-0.1,6.1c0,2.1,0,4.3,0.1,6.2c0.1,2.9,1.9,5,5.6,5.1c2.3,0.1,5.3,0.2,8.3,0.2c2.6,0,5.2-0.1,7.5-0.2c3.4-0.2,5.5-2.4,5.7-5.1c0.1-1.5,0.2-3.4,0.2-5.4c0-2.4-0.1-4.9-0.2-7c-0.1-2.5-2.2-4.7-5.7-4.9c-2.4-0.1-5.2-0.1-8-0.1c-2.8,0-5.5,0-7.7,0.1C57.8,138.6,56.3,141,56.2,143.3z M71.8,142.3c5.4,0,6.7,0,6.8,2.1c0.1,0.9,0.1,1.8,0.1,2.8h-6.8V142.3z M71.8,151.2h6.9c0,4.6-0.2,5.2-2.4,5.4c-1.3,0.1-2.9,0.1-4.5,0.1V151.2z M63.2,142.4c1-0.1,2.4-0.1,3.9-0.1v4.9h-6.5C60.6,143.5,61,142.5,63.2,142.4z M67.1,151.2v5.4c-5,0-6.2,0-6.3-2c-0.1-1.1-0.2-2.2-0.2-3.4H67.1z M81.4,130c0-6.6-0.7-6.7-11.7-6.7c-10.9,0-11.9,0.1-11.9,6.6c0,5.9,1.5,6.1,11.9,6.1C80.3,136,81.4,135.8,81.4,130z M62.7,130.5c0-2,0-2,0-2c0.1-1,0.8-1,6.1-1c2.3,0,4.7,0,6.4,0.1c1.5,0,1.7,0.4,1.7,2.1c0,2.3,0,2.3-6.8,2.3C63,131.8,62.7,131.6,62.7,130.5z M82.9,212.3h-9.1v-18.2h7c1.7,0,2.5-1.3,2.5-2.5c0-1.3-0.8-2.5-2.5-2.5h-7V174c0-1.6-1.3-2.4-2.7-2.4c-1.3,0-2.7,0.8-2.7,2.4v38.3h-5v-26c0-1.6-1.3-2.4-2.6-2.4c-1.3,0-2.5,0.8-2.5,2.4v26h-3.4c-1.8,0-2.6,1.2-2.6,2.4c0,1.3,0.9,2.5,2.6,2.5h27.9c1.7,0,2.5-1.2,2.5-2.4C85.4,213.5,84.5,212.3,82.9,212.3z M38,203.1c1.3,0,3.9-1.7,6.7-4.1l-0.2,18.1v0.1c0,1.5,1.3,2.3,2.6,2.3s2.5-0.8,2.5-2.3v-0.1c0,0-0.2-11.7-0.2-20.3c1.4,0.7,3.1,2,4.3,3.6c0.5,0.7,1,0.9,1.6,0.9c1.2,0,2.3-1.3,2.3-2.7c0-2.8-5.9-5.5-6.9-5.5c-0.2,0-0.3,0.1-0.4,0.1c1.9-2.4,5.3-7.3,5.3-10.2c0-2.2-1.5-3.8-4.6-3.8h-1.4l0.1-6.1c0-1.7-1.3-2.5-2.6-2.5c-1.3,0-2.6,0.8-2.6,2.5l0.1,6.2c-1.7,0.1-3.3,0.1-4.9,0.1c-1.5,0-2.2,1.2-2.2,2.3c0,1.2,0.8,2.4,2.3,2.4h0.1c3.1-0.1,5.1-0.3,8.1-0.3c0.3,0,0.6,0,0.9,0c0.4,0,1.1,0.1,1.1,0.6c0,0.7-3.6,8.6-13,14c-1,0.6-1.4,1.4-1.4,2.3C35.3,201.9,36.5,203.1,38,203.1z M83.1,256.6H78c0-0.7-0.1-1.3-0.1-1.8c-0.1-2.8-2.2-3.9-5.7-4c-2.7-0.1-5.7-0.1-9-0.1v-2c12,0,13.6-0.1,14-3.6c0.1-0.6,0.1-1.1,0.1-1.7c0-0.6-0.1-1.2-0.1-1.8c-0.2-2.3-1.7-3.3-5.2-3.3c-2.2-0.1-5.4-0.1-8.7-0.1v-2.2l16.4,0.1c1.5,0,2.3-1.1,2.3-2.2c0-1.1-0.7-2.2-2.3-2.2l-16.4,0.1v-2.3c0-1.7-1.2-2.5-2.5-2.5c-1.3,0-2.5,0.8-2.5,2.5l0.1,2.3l-16.7-0.1c-1.5,0-2.3,1.1-2.3,2.2c0,1.1,0.8,2.2,2.3,2.2l16.7-0.1v2.2c-3.4,0-6.6,0.1-8.7,0.1c-5.1,0-5.7,1.7-5.7,5.4c0,4.9,1.2,5,14.4,5v1.9c-4.9,0-9.9,0-13.8,0.1c-1.4,0.1-2.1,1-2.1,2c0,0.9,0.6,1.9,1.8,1.9h0.1c3.6-0.1,8.8-0.1,14-0.1v2.3H37.9c-1.3,0-1.9,1-1.9,2c0,1,0.7,2.1,1.9,2.1h20.3v2.5c-5,0-9.9-0.1-14-0.1h-0.1c-1.4,0-2.1,1-2.1,2c0,1,0.7,2,2.1,2c4.4,0.1,9.3,0.1,14.1,0.1l-0.1,1.4c0,2-1.3,2.6-3,2.6c-0.9,0-2-0.2-2.9-0.4c-0.3-0.1-0.6-0.1-0.8-0.1c-1.5,0-2.4,1.2-2.4,2.5c0,2.9,4,2.9,5.8,2.9c5.6,0,8.5-3.1,8.5-6.4V270l-0.1-2.5c3.1,0,6.2-0.1,9.1-0.1c5.4,0,5.8-2.9,5.8-6.2h5c1.4,0,2.2-1.2,2.2-2.3C85.3,257.7,84.5,256.6,83.1,256.6z M63.2,241.9c2.9,0,5.5,0.1,7.1,0.1c1.5,0,1.8,0.5,1.8,1.4c0,1.6-0.2,1.6-8.9,1.6V241.9z M58.3,244.9c-7.8,0-9.2-0.1-9.2-1c0-1.2,0-1.2,0-1.2c0.1-0.5,0.6-0.8,1.7-0.8c1.7,0,4.5-0.1,7.5-0.1V244.9z M73.1,261.8c-0.1,1-0.7,1.5-1.7,1.5c-2.5,0.1-5.3,0.1-8.2,0.1V261h9.9C73.2,261.2,73.1,261.5,73.1,261.8z M63.2,256.8v-2.3c3.1,0,5.9,0,8.2,0.1c1,0,1.7,0.5,1.7,1.5l0.1,0.7H63.2z M83.3,327.7c-6.3-2.1-12.1-4.1-17.8-8.2h1.7l13.9,0.3h0.1c1.3,0,2-1,2-2c0.1-1-0.7-2.1-2-2.1l-18.1,0.1l0.1-2.4l12.4,0.1c1.3,0,1.9-0.9,1.9-1.8c0-0.9-0.6-1.9-1.9-1.9l-12.3,0.1v-2.4l15.1,0.1c1.4,0,2-1,2-2c0-1-0.7-2-2-2l-9.6,0.1c0.2-0.3,1-2.1,1-2.7c0-0.8-0.6-1.4-1.4-1.8l13.3,0.1c1.5,0,2.3-1.2,2.3-2.3c0-1.2-0.7-2.3-2.2-2.3h-0.1l-7.5,0.1c2.7-3.4,2.7-4.5,2.7-4.6c0-1.4-1.4-2.5-2.9-2.5c-0.9,0-1.9,0.5-2.3,1.7c-0.7,1.7-1.7,3.9-2.8,5.5l-1.9,0.1l0.1-7.3v-0.1c0-1.5-1.2-2.3-2.4-2.3c-1.3,0-2.5,0.8-2.5,2.3v7.3h-3.2v-7.3c0-1.5-1.3-2.3-2.5-2.3c-1.2,0-2.4,0.7-2.4,2.3v0.1l0.1,7.3l-1.9-0.1c-0.6-2.2-3.5-6-4.5-6.6c-0.4-0.3-0.8-0.3-1.3-0.3c-1.3,0-2.8,1-2.8,2.2c0,0.4,0.2,0.8,0.5,1.2c1,1.1,2.1,2.3,2.9,3.5l-7.2-0.1h-0.1c-1.5,0-2.3,1.1-2.3,2.3c0,1.2,0.8,2.3,2.3,2.3l12.6-0.1c-0.8,0.2-1.4,0.8-1.4,1.4c0,0.3,0.1,0.6,0.3,0.8c0.4,0.6,0.8,1.4,1.1,2.3l-9.7-0.1c-1.4,0-2.1,1-2.1,2c0,1,0.7,2,2.1,2l15.2-0.1v2.4l-12.4-0.1c-1.2,0-1.9,0.9-1.9,1.8c0,0.9,0.7,1.9,1.9,1.9l12.5-0.1l0.1,2.4l-18.1-0.1c-1.4,0-2.1,1-2.1,2.1c0,1,0.7,2,2,2h0.1l13.4-0.3h1.8c-5.3,4.1-10.4,6.6-17.2,8.9c-1.3,0.5-1.9,1.3-1.9,2.2c0,1.3,1.2,2.5,2.8,2.5c1.8,0,12.3-4.7,19.1-10.3l-0.1,9.4v0.1c0,1.4,1.3,2.1,2.6,2.1c1.3,0,2.6-0.7,2.6-2.1v-0.1l-0.1-9.5c8.4,6.5,18,10.1,19.1,10.1c1.7,0,2.9-1.6,2.9-3C85,329,84.5,328.1,83.3,327.7z M57.5,303.5l-0.1-0.2c-0.6-2.8-2.3-4.1-2.8-4.4h10.7c-0.3,0.2-0.5,0.5-0.6,0.9c-0.2,1.1-0.7,2.6-1.2,3.6H57.5z M83.2,359.9c-6.6-3.4-12.5-8-17.9-13.8c-1.7-1.8-3.5-2.7-5.2-2.7c-1.8,0-3.5,0.9-4.8,2.7c-4.2,5.5-11,12.2-17.5,15.5c-1.2,0.7-1.8,1.7-1.8,2.6c0,1.5,1.3,2.9,3,2.9c0.7,0,1.5-0.2,2.3-0.8c5.9-3.9,13.2-10.8,17.7-16.6c0.6-0.7,0.9-1,1.3-1c0.4,0,0.8,0.3,1.4,1c6.1,6.8,16.5,15.7,19.5,15.7c1.9,0,3.3-1.7,3.3-3.3C84.7,361.3,84.2,360.4,83.2,359.9z M67.4,375.3c-1.4,0-2.6,1.1-2.6,2.3c0,0.7,0.3,1.3,1.2,1.9c1.4,0.9,2.8,2,4,3.2c-4.8,0.7-9.8,1.3-14.9,1.7c1.7-3.5,3-7.6,4-10.8l18.8,0.1c1.8,0,2.7-1.2,2.7-2.4c0-1.3-0.9-2.5-2.7-2.5H42.8c-1.7,0-2.6,1.3-2.6,2.6c0,1.2,0.8,2.4,2.6,2.4l10.4-0.1c-0.9,3.6-2.4,7.9-3.9,11.1c-2,0.1-4,0.2-5.9,0.2c-1.5,0.1-2.3,1.3-2.3,2.5c0,1.3,0.9,2.8,2.5,2.8c1.1,0,16.8-1,29.7-3.8c0.7,0.9,1.3,1.8,1.8,2.8c0.6,1,1.4,1.5,2.3,1.5c1.5,0,3.1-1.3,3.1-3C80.6,384.5,70.6,375.3,67.4,375.3z M68.6,363.4c1.7,0,2.6-1.2,2.6-2.5c0-1.2-0.9-2.5-2.6-2.5H52.8c-1.7,0-2.6,1.3-2.6,2.5c0,1.3,0.9,2.5,2.6,2.5H68.6z"/></svg>',
    },
};

function addShareElement(container, url, title) {
    function build(arg) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        container.appendChild(li);
        li.appendChild(a);
        li.setAttribute("class", arg.className);
        a.setAttribute("href", arg.url);
        a.setAttribute("target", "_blank");
        a.setAttribute("aria-label", arg.label);
        a.innerHTML = arg.html;

        if (arg.customData) {
            for (var i = 0; i < arg.customData.length; i++) {
                a.setAttribute(
                    arg.customData[i].label,
                    arg.customData[i].value
                );
            }
        }
    }

    var url = encodeURIComponent(url);
    var title = encodeURIComponent(title);

    // Facebook
    build({
        url:
            "https://www.facebook.com/sharer/sharer.php?u=" +
            url +
            "&t=" +
            title,
        html:
            '<i class="i-svg icon" title="Facebook"><svg width="20" height="20"><use xlink:href="#icon_sns_facebook"></use></svg></i>',
        className: "share-item facebook",
        label: "",
    });

    // Twitter
    build({
        url: "https://twitter.com/share?text=" + title + "&url=" + url,
        html:
            '<i class="i-svg icon" title="Twitter"><svg width="20" height="20"><use xlink:href="#icon_sns_twitter"></use></svg></i>',
        className: "share-item twitter",
        label: "",
    });

    // Mail
    build({
        url: "mailto:?subject=" + title + "&body=" + url,
        html:
            '<i class="i-svg icon" title="Mail"><svg width="20" height="20"><use xlink:href="#icon_share_mail"></use></svg></i>',
        className: "share-item mail",
        label: "Email",
    });
}

function createTopOfPage() {
    var d = document;
    var btnB = d.createElement("p");
    var gf;
    var tp;

    // btnB.innerHTML = '<i class="icon" data-icon="icon_wedge-arrow-u"></i>';
    // btnB.setAttribute("id", "top-of-page");
    // btnB.setAttribute("title", "繝壹�繧ｸ縺ｮ蜈磯�ｭ縺ｸ謌ｻ繧�");
    // btnB.setAttribute("class", "top-of-page js-scroll");

    gf = d.getElementById("gf");
    // gf.appendChild(btnB);
    btnB.addEventListener("click", onClickHandler, false);
    btnB.addEventListener("touchend", onClickHandler, false);

    function onClickHandler() {
        document.getElementById("gh").scrollIntoView({
            behavior: "smooth",
        });
    }

    function onScroll(event) {
        var y = window.pageYOffset || d.documentElement.scrollTop;

        if (y < 100) {
            btnB.classList.add("hide");
        } else {
            btnB.classList.remove("hide");
        }
    }

    window.addEventListener("scroll", onScroll, false);
    onScroll();
}

function setScrollDirection(target) {
    var w = window;
    var d = document.documentElement;
    var t = target || document.getElementsByTagName("body")[0];
    var currentX = w.pageYOffset || d.scrollTop;
    var currentY = w.pageXOffset || d.scrollLeft;
    var is_hashchange = false;

    function onScroll() {
        var y = w.pageYOffset || d.scrollTop;

        if (y > currentY) {
            // move down
            if (!t.classList.contains("scroll-down")) {
                t.classList.remove("scroll-up");
                t.classList.add("scroll-down");
            }

            if (
                document.documentElement.scrollHeight - window.innerHeight ===
                y
            ) {
                t.classList.add("scroll-y-end");
            }
        } else if (y === currentY) {
            // nothing here
        } else {
            // move up
            if (!t.classList.contains("scroll-up")) {
                t.classList.remove("scroll-down");
                t.classList.remove("scroll-y-end");
                t.classList.add("scroll-up");
            }
        }

        if (300 > currentY) {
            t.classList.remove("scroll-down");
            t.classList.remove("scroll-y-end");
            t.classList.add("scroll-up");
            t.classList.add("scroll-y-start");
        } else {
            t.classList.remove("scroll-y-start");
        }

        if (is_hashchange) {
            t.classList.add("scroll-y-hashchange");
        } else {
            t.classList.remove("scroll-y-hashchange");
        }

        //currentX = x;
        currentY = y;
        is_hashchange = false;
    }

    function onHashchange(e) {
        is_hashchange = true;
    }

    w.addEventListener("hashchange", onHashchange, false);
    w.addEventListener("scroll", onScroll, false);
    onScroll();
}

function currentPageHighlight(id, level) {
    var len = 0;
    var dirLv = level || 1;
    var URL = document.URL;
    var dirAry = URL.split("/");
    dirAry.shift();
    dirAry.shift();
    len = dirAry.length;

    var dirName = dirAry[dirLv];
    var dirDep = len - 2;
    var t = document.getElementById(id);

    if (t) {
        set(t);
    } else {
        t = document.getElementsByClassName(id);
        for (var i = 0; i < t.length; i++) set(t[i]);
    }

    function set(t) {
        //var a = t.getElementsByTagName("a");
        var a = t.querySelectorAll("a[href]");
        var aLen = a.length;

        for (var i = 0; i < aLen; i++) {
            var b = a[i].getAttribute("href") || "";
            var c = b.split("/");
            var d = c[c.length - 2] || "";

            if (d === dirName) {
                a[i].parentNode.classList.add("current");
            } else {
                a[i].parentNode.classList.remove("current");
            }
        }
    }
}

function SwipeObject() {
    return {
        init: function() {},

        destroy: function(t) {},
    };
}

function setMailformElementValue(formName) {
    var fn = formName || "form";

    (function() {
        var elems = document.getElementById(fn).elements;
        var cboxd = document.getElementsByClassName("checkboxElementData");
        var l = cboxd.length;

        for (var i = 0; i < l; i++) {
            var n = cboxd[i].getAttribute("data-checkbox-name");
            var v = cboxd[i].getAttribute("data-checkbox-value");
            resetCheckbox(elems, n, v);
        }

        function resetCheckbox(elems, name, val) {
            console.log(elems + " / " + name + " / " + val);
            for (var i = 0; i < elems.length; i++) {
                if (elems[i].name.match("^" + name)) {
                    if (elems[i].value == val) {
                        elems[i].checked = true;
                    }
                }
            }
        }
    })();

    (function() {
        var error = document.getElementsByClassName("error-message");
        var l = error.length;

        for (var i = 0; i < l; i++) {
            var attr = error[i].getAttribute("data-error-field");
            var t = document.getElementById("fs_error__" + attr);
            var p = t.parentNode;
            var e = document.createElement("span");

            p.classList.add("error");
            e.classList.add("error-message");
            e.innerHTML = error[i].getAttribute("data-error-message");
            t.appendChild(e);
        }
    })();
}

var Indicator = function(id, parent) {
    return {
        that: null,
        id: id,
        ap: parent,
        indctr: null,

        init: function() {
            var _t = this;
            var d = document;
            var c = d.createElement("div");
            var indicator = d.createElement("span");
            c.id = _t.id;
            c.appendChild(indicator);
            c.setAttribute("class", "indicator");

            c.addEventListener(
                "transitionend",
                function(e) {
                    if (
                        e.propertyName === "opacity" &&
                        parseInt(_t.getPropVal(_t.indctr, "opacity")) === 0
                    ) {
                        _t.indctr.classList.remove("show");
                        _t.indctr.classList.add("hide");
                    }
                },
                false
            );

            if (_t.ap.indexOf("#") > -1) {
                d.getElementById(_t.ap.substring(1)).appendChild(c);
            } else {
                d.getElementsByTagName(_t.ap)[0].appendChild(c);
            }
            _t.indctr = c;
            _t.indctr.classList.add("hide");
        },

        show: function() {
            var t = this;
            this.indctr.classList.remove("hide");
            setTimeout(function() {
                t.indctr.classList.add("show");
            }, 10);
        },

        hide: function() {
            this.indctr.classList.remove("show");
        },

        getPropVal: function(t, p) {
            return document.defaultView
                .getComputedStyle(t, "")
                .getPropertyValue(p);
        },
    };
};

var CarouselGallery = function(targetId) {
    return {
        kv: {
            element: targetId, // id
            width: 0,
            height: 0,
            child: {
                element: "CG-layer", // class
                width: 0,
                height: 0,
            },
        },

        layers: [],
        scrollTop: 0,
        currentScrollX: 0,
        currentScrollY: 0,
        parallax: false,
        autoplay: true,
        is_mobile: false,
        requestId: undefined,
        lastTime: performance.now(),

        init: function() {
            var that = this;
            var layers;
            var lastframe = 0;
            var childClassname = this.kv.child.element;
            var childElement = document.getElementsByClassName(
                childClassname
            )[0];
            that.is_mobile = that.isMobile();
            that.lastTime = performance.now();

            if (!that.is_mobile) {
                window.addEventListener(
                    "scroll",
                    function(e) {
                        that.scroll(e, that);
                    },
                    { passive: true }
                );
            }

            window.addEventListener(
                "resize",
                function(e) {
                    that.resize(e, that);
                },
                false
            );

            this.kv.element = document.getElementById(this.kv.element);
            this.kv.child.element = childElement;

            layers = this.kv.element.getElementsByClassName(childClassname);

            // build image block
            (function() {
                var MIX_HTML = "";
                var totalBlock = 7;
                var imgMNum = Math.ceil(Math.random() * MAX_IMG_M);
                var imgLNum = Math.ceil(Math.random() * MAX_IMG_L);
                childElement.innerHTML = "";

                function build() {
                    var ary = [0, 0, 0, 0, 0];
                    var f;
                    for (var i = 0; i < ary.length; i++) {
                        ary[i] = imgMNum;
                        if (imgMNum == MAX_IMG_M) {
                            imgMNum = 1;
                        } else {
                            imgMNum++;
                        }
                    }

                    f = imgLNum;
                    if (imgLNum == MAX_IMG_L) {
                        imgLNum = 1;
                    } else {
                        imgLNum++;
                    }

                    return (
                        '<div class="CG-layer-inner -s"><span class="CG-layer__img-wrap"><img src="" alt="" data-src="./assets/img/home/kv/m/' +
                        ary[0] +
                        '.jpg" class="js-lazy"></span><span class="CG-layer__img-wrap"><img src="" alt="" data-src="./assets/img/home/kv/m/' +
                        ary[1] +
                        '.jpg" class="js-lazy"></span><span class="CG-layer__img-wrap"><img src="" alt="" data-src="./assets/img/home/kv/m/' +
                        ary[2] +
                        '.jpg" class="js-lazy"></span></div><div class="CG-layer-inner"><span class="CG-layer__img-wrap"><img src="" alt="" data-src="./assets/img/home/kv/m/' +
                        ary[3] +
                        '.jpg" class="js-lazy"></span><span class="CG-layer__img-wrap"><img src="" alt="" data-src="./assets/img/home/kv/m/' +
                        ary[4] +
                        '.jpg" class="js-lazy"></span></div><div class="CG-layer-inner -l"><span class="CG-layer__img-wrap"><img src="" alt="" data-src="./assets/img/home/kv/l/' +
                        f +
                        '.jpg" class="js-lazy"></span></div>'
                    );
                }

                for (var i = 0; i < totalBlock; i++) {
                    MIX_HTML += build();
                }
                childElement.innerHTML = MIX_HTML;
            })();

            // set layer objects
            for (var i = 0; i < layers.length; i++) {
                this.layers[i] = {
                    element: layers[i],
                    width: 0,
                    height: 0,
                    x: 0,
                    children: buildChildrenObjectArray(
                        layers[i].getElementsByClassName("CG-layer-inner")
                    ),
                };
            }

            function buildChildrenObjectArray(elements) {
                var array = [];
                for (var i = 0; i < elements.length; i++) {
                    array[i] = {
                        element: elements[i],
                        img: elements[i].getElementsByTagName("img")[0],
                        rect: elements[i].getBoundingClientRect(),
                        x: 0,
                    };
                }
                return array;
            }

            // Load Image Element
            (function(that) {
                var imgs = that.kv.element.getElementsByClassName("js-lazy");
                var completeImgs = [];
                var src = "";
                for (var i = 0; i < imgs.length; i++) {
                    src = imgs[i].getAttribute("data-src");
                    if (src.indexOf("gif") > -1) {
                        src += "?" + new Date().getTime(); // no chache
                    }
                    imgs[i].src = src;
                    imgs[i].parentNode.style.animationDelay =
                        i * 200 + 100 + "ms";
                    imgs[i].addEventListener("load", complete, false);
                }

                function complete(e) {
                    completeImgs.push(e.currentTarget);
                    e.currentTarget.removeEventListener(
                        "load",
                        complete,
                        false
                    );

                    if (completeImgs.length === imgs.length) {
                        // show function
                        that.kv.element.classList.add("-ready");
                        that.resize(undefined, that);
                        if (that.autoplay) {
                            that.play(that);
                        }
                    }
                }
            })(this);
        },

        play: function(target) {
            var that = target;
            var nowTime = performance.now();
            var time = nowTime - that.lastTime;
            that.lastTime = nowTime;
            that.setLayerPosition(that);
            that.requestId = window.requestAnimationFrame(function() {
                that.play(that);
            });
        },

        stop: function(target) {
            window.cancelAnimationFrame(target.requestId);
        },

        scroll: function(event, target) {
            var that = target;
            var scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop;
            that.scrollTop = scrollTop / 10;
            that.currentScrollY = that.scrollTop * (that.layers.length - 1);
            that.setLayerPosition(that);
        },

        setLayerPosition: function(target) {
            var that = target;
            var y = that.currentScrollY;
            var layers = that.layers;
            var l = layers.length;
            var is_mobile = that.is_mobile;
            that.kv.element.style.translate3d =
                "translate3d(0, " + y + "px, 0)";

            for (var i = 0; i < l; i++) {
                // x
                for (var j = 0; j < layers[i].children.length; j++) {
                    var children = layers[i].children; // current children
                    var current = layers[i].children[j]; // current layer
                    var prev; // prev layer
                    var currentElm = current.element;

                    if (!j) {
                        // 0
                        current.x += -(l / 3);
                    } else {
                        prev = layers[i].children[j - 1];
                        current.x = prev.x + prev.img.width;
                    }

                    if (current.x < -current.img.width) {
                        current.x = children[children.length - 1].img.width;
                        children.push(current);
                        children.shift();
                    }

                    if (current.x > that.kv.width) {
                        currentElm.style.display = "none";
                        currentElm.classList.add("-hide");
                        currentElm.classList.remove("-show");
                    } else {
                        currentElm.style.display = "flex";
                        currentElm.classList.remove("-hide");
                        currentElm.classList.add("-show");
                    }

                    currentElm.style.transform =
                        "translate3d(" + current.x + "px, 0, 0)";
                }

                // y
                if (that.parallax) {
                    y = that.scrollTop * (l - i);
                    layers[i].element.style.transform =
                        "translate3d(" + 0 + "," + y + "px, 0)";
                }
            }
        },

        resize: function(event, target) {
            var layerRect;
            var parentRect = target.kv.element.getBoundingClientRect();
            var childRect = target.kv.child.element.getBoundingClientRect();
            target.kv.width = parentRect.width;
            target.kv.height = parentRect.height;
            target.kv.child.height = childRect.height;
            target.kv.child.width = childRect.width;

            for (var i = 0; i < target.layers.length; i++) {
                layerRect = target.layers[i].element.getBoundingClientRect();
                target.layers[i].width = layerRect.width;
                target.layers[i].height = layerRect.width;
            }
        },

        isMobile: function() {
            if (UA.device !== "other") {
                return true;
            } else {
                return false;
            }
        },
    };
};

var UIAccordion = function() {
    /*
    "ui-accordion"
    "ui-accordion--item"
    "ui-accordion--trigger"
    "ui-accordion--contents"
    */

    return {
        Accordions: [],
        element: null,
        length: null,
        option: null,

        build: function(ary, option) {
            this.element = ary;
            this.length = ary.length;
            this.option = option;
            for (var i = 0; i < this.length; i++) {
                this.Accordions[i] = this.addAccordionGroup();
                this.Accordions[i].init(this.element[i], this.option);
            }
        },

        destroy: function() {},

        resize: function() {
            for (var i = 0; i < this.length; i++) {
                this.Accordions[i].resize("", this.Accordions[i]);
            }
        },

        addAccordionGroup: function() {
            return {
                itemClass: "ui-accordion--item",
                itemTriggerClass: "ui-accordion--trigger",
                itemContentsClass: "ui-accordion--contents",
                itemContentsInnerClass: "ui-accordion--contents-inner",
                children: [],
                element: null,
                length: 0,
                current: null,
                option: {
                    activeOnly: true,
                    animation: true,
                },

                init: function(elm, opt) {
                    this.element = elm;
                    this.length = elm.getElementsByClassName(
                        this.itemClass
                    ).length;
                    var that = this;

                    for (var prop in opt) {
                        that.option[prop] = opt[prop];
                    }

                    for (var i = 0; i < this.length; i++) {
                        (function(n) {
                            var a = that.accordion();
                            a.item = that.element.getElementsByClassName(
                                that.itemClass
                            )[n];
                            a.itemTrigger = a.item.getElementsByClassName(
                                that.itemTriggerClass
                            )[0];
                            a.itemContents = a.item.getElementsByClassName(
                                that.itemContentsClass
                            )[0];
                            a.itemContentsInner = a.item.getElementsByClassName(
                                that.itemContentsInnerClass
                            )[0];
                            a.itemTrigger.addEventListener(
                                "click",
                                function(e) {
                                    that.toggle(e, that, n);
                                },
                                false
                            );
                            a.itemContents.addEventListener(
                                "transitionend",
                                function(e) {
                                    that.transitionend(e, that, n);
                                },
                                false
                            );
                            a.itemContents.classList.add("transitionend");
                            that.children[n] = a;
                            if (
                                that.option.activeOnly &&
                                !a.item.classList.contains("ui-state--hide")
                            ) {
                                that.current = i;
                            }
                        })(i);
                    }

                    window.addEventListener("resize", function(e) {
                        that.resize(e, that);
                    });

                    that.resize("", that);
                },

                toggle: function(e, that, index) {
                    e.preventDefault();
                    var cldrn = that.children;
                    var c = cldrn[index];
                    var str = "ui-state--";
                    var isHidden = c.item.classList.contains(str + "hide");

                    if (that.option.activeOnly) {
                        for (var i = 0; i < cldrn.length; i++) {
                            isHidden = cldrn[i].item.classList.contains(
                                str + "hide"
                            );
                            if (i === index) {
                                openTarget(cldrn[i], str);
                            } else {
                                cldrn[i].item.classList.remove(str + "show");
                                cldrn[i].item.classList.add(str + "hide");
                            }
                            if (
                                cldrn[i].item.classList.contains(str + "hide")
                            ) {
                                cldrn[i].itemContents.style.height = "0px";
                            }
                        }
                    } else {
                        openTarget(c, str);
                    }

                    function openTarget(c, str) {
                        if (isHidden) {
                            c.item.classList.remove(str + "hide");
                            c.item.classList.add(str + "show");
                            c.itemContents.classList.remove("transitionend");
                            c.itemContents.style.height =
                                c.defaultHeight + "px";
                        } else {
                            c.item.classList.remove(str + "show");
                            c.item.classList.add(str + "hide");
                            c.itemContents.style.height = "0px";
                        }

                        if (that.option.activeOnly) {
                            that.current = index;
                        }
                    }
                },

                transitionend: function(e, that) {
                    var m = document.defaultView
                        .getComputedStyle(e.currentTarget, "")
                        .getPropertyValue("height");
                    if (e.propertyName === "height") {
                        if (m === "0px") {
                            e.currentTarget.classList.add("transitionend");
                        }
                    }
                },

                resize: function(e, that) {
                    var cldrn = that.children;
                    if (that.option.animation) {
                        for (var i = 0; i < cldrn.length; i++) {
                            cldrn[i].defaultHeight =
                                cldrn[i].itemContentsInner.offsetHeight;
                            if (
                                cldrn[i].item.classList.contains(
                                    "ui-state--hide"
                                )
                            ) {
                                cldrn[i].itemContents.style.height = "0px";
                            } else {
                                cldrn[i].itemContents.style.height =
                                    cldrn[i].defaultHeight + "px";
                            }
                        }
                    }
                },

                accordion: function() {
                    return {
                        item: null,
                        itemTrigger: null,
                        itemContents: null,
                        itemContentsInner: null,
                        defaultHeight: 0,
                    };
                },
            };
        },
    };
};

var InViewElement = {
    t: "",

    init: function() {
        var that = this;
        this.t = that;

        // In View Element
        that.manage.init();
    },

    set: function(t) {
        t.manage.removeEvent(t.manage.t);
    },

    destroy: function(t) {
        t.manage.removeEvent(t.manage.t);
    },

    manage: {
        t: "",
        ww: 0,
        wh: 0,
        InViewDOMElements: undefined,
        items: undefined,
        event_scroll: undefined,
        event_resize: undefined,

        init: function(random) {
            /*
             * @ random : boolian
             */

            var that = this;
            var length = 0;
            var sum;
            that.t = this;
            that.InViewDOMElements = document.getElementsByClassName("inview");
            length = that.InViewDOMElements.length;
            that.items = new Array(length);

            for (var i = 0; i < length; i++) {
                that.items[i] = {
                    t: that.InViewDOMElements[i],
                    dy: 0, // default Y
                    cy: 0, // current Y
                    delayY:
                        parseFloat(
                            that.InViewDOMElements[i].getAttribute(
                                "data-delay-y"
                            )
                        ) || 0,
                    childlen: that.InViewDOMElements[i].getElementsByClassName(
                        "inview__item"
                    ),
                    ww: window.innerWidth,
                    wh: window.innerHeight,
                    video: undefined,
                    videoEvent: undefined,
                };

                for (var j = 0; j < that.items[i].childlen.length; j++) {
                    if (random) {
                        sum = 0.2 + Math.random() * 1;
                    } else {
                        sum = 0.2;
                    }
                    that.items[i].childlen[j].style.transitionDelay =
                        sum + 0.075 * j + "s";
                }
            }

            that.event_scroll = function(e) {
                that.scroll(e, that);
            };

            that.event_resize = function(e) {
                that.reset(that);
            };

            that.reset(that);
            window.addEventListener("scroll", that.event_scroll, {
                passive: true,
            });
            window.addEventListener("resize", that.event_resize, false);
        },

        scroll: function(event, that) {
            var d = document;
            var sy = d.documentElement.scrollTop || d.body.scrollTop;
            var l = that.items.length;
            var item = "";

            for (var i = 0; i < l; i++) {
                item = that.items[i];

                if (!item.t.classList.contains("-show")) {
                    if (sy + item.wh - item.delayY > item.dy) {
                        item.t.classList.add("-show");
                    }
                }
            }
        },

        reset: function(that) {
            var rect;
            var l = that.items.length;

            for (var i = 0; i < l; i++) {
                rect = that.items[i].t.getBoundingClientRect();
                that.items[i].dy = rect.top + window.pageYOffset;
            }

            that.scroll("", that, that.items);
        },

        removeEvent: function(that) {
            window.removeEventListener("scroll", that.event_scroll, {
                passive: true,
            });
            window.removeEventListener("resize", that.event_resize, false);
        },
    },
};

var OverflowSlideNav = {
    target: undefined,
    event_resize: undefined,
    obj: [],

    init: function() {
        var t = this;
        t.target = document.getElementsByClassName("slide-local-nav");
        for (var i = 0; i < t.target.length; i++) {
            t.obj[i] = new t.Obj(t.target[i], i);
            t.obj[i].build();
        }
        t.event_resize = function(e) {
            t.resize(t);
        };
        window.addEventListener("resize", t.event_resize);
    },

    resize: function(t) {
        for (var i = 0; i < t.target.length; i++) {
            var obj = t.obj[i];
            obj.resize(obj);
        }
    },

    Obj: function(targetElement, index) {
        return {
            index: undefined,
            target: undefined,
            inner: undefined,
            ul: undefined,
            li: undefined,
            btnL: undefined,
            btnR: undefined,
            ulWidth: 0,
            innerWidth: 0,
            current: undefined,

            build: function() {
                var t = this;
                t.target = targetElement;
                t.li = t.target.getElementsByClassName("slide-local-nav__cell");
                t.ul = t.target.getElementsByClassName(
                    "slide-local-nav__body"
                )[0];
                t.current = t.target.querySelector(
                    ".slide-local-nav__body .current"
                );

                t.btnL = document.createElement("i");
                t.btnL.setAttribute("class", "slide-local-nav__arrow -left");
                t.btnL.setAttribute("data-icon", "icon_wedge-arrow-l");
                t.btnL.addEventListener(
                    "click",
                    function(e) {
                        t.click(t, e);
                    },
                    false
                );

                t.btnR = document.createElement("i");
                t.btnR.setAttribute("class", "slide-local-nav__arrow -right");
                t.btnR.setAttribute("data-icon", "icon_wedge-arrow-r");
                t.btnR.addEventListener(
                    "click",
                    function(e) {
                        t.click(t, e);
                    },
                    false
                );

                t.target.appendChild(t.btnL);
                t.target.appendChild(t.btnR);

                t.inner = t.target.getElementsByClassName(
                    "slide-local-nav-inner"
                )[0];
                t.inner.addEventListener(
                    "scroll",
                    function(e) {
                        t.scroll(t);
                    },
                    false
                );

                t.resize(t);
                t.scroll(t);

                if (t.current) {
                    var rect = t.current.getBoundingClientRect();
                    var x = rect.width - rect.left + t.innerWidth;

                    if (t.inner.scrollTo) {
                        t.inner.scrollTo(x, 0);
                    } else {
                        t.inner.scrollLeft = x;
                    }
                }
            },

            click: function(t, e) {
                var btnW = e.currentTarget.offsetWidth * 2;
                var x = e.currentTarget.classList.contains("-right")
                    ? t.innerWidth - btnW
                    : -t.innerWidth + btnW;

                if (t.inner.scrollBy) {
                    t.inner.scrollBy({ top: 0, left: x, behavior: "smooth" });
                } else {
                    t.inner.scrollLeft = x;
                }
            },

            scroll: function(t) {
                var difference = t.ulWidth - t.innerWidth;

                if (t.inner.scrollLeft >= difference - 10) {
                    t.btnR.classList.add("-hide");
                    t.btnL.classList.remove("-hide");
                } else {
                    t.btnR.classList.remove("-hide");
                }

                if (t.inner.scrollLeft < 10) {
                    t.btnL.classList.add("-hide");
                } else {
                    t.btnL.classList.remove("-hide");
                }
            },

            resize: function(t) {
                t.ulWidth = t.ul.scrollWidth;
                t.innerWidth = t.inner.offsetWidth;

                if (t.innerWidth >= t.ulWidth) {
                    t.btnL.classList.add("-hide");
                    t.btnR.classList.add("-hide");
                } else {
                    t.btnL.classList.remove("-hide");
                    t.btnR.classList.remove("-hide");
                }
            },
        };
    },
};

var PopupMenu = {
    te: "popup",
    tt: "popup__trigger",
    tg: "popup__target",
    na: null,
    b: null,
    time: 100,
    isSwipe: false,
    current: null,

    init: function() {
        var that = this;
        var d = document;
        that.b = d.getElementsByTagName("body")[0];
        that.b.addEventListener(
            "click",
            function(e) {
                that.onClick(e, that);
            },
            true
        );
        that.b.addEventListener(
            "mouseenter",
            function(e) {
                that.onClick(e, that);
            },
            true
        );
        that.b.addEventListener(
            "mouseleave",
            function(e) {
                that.onClick(e, that);
            },
            true
        );
        that.b.addEventListener(
            "touchend",
            function(e) {
                that.onMove(e, that);
            },
            true
        );
        that.b.addEventListener(
            "touchmove",
            function(e) {
                that.onMove(e, that);
            },
            true
        );
    },

    onMove: function(e, t) {
        if (e.type === "touchstart") t.isSwipe = false;
        if (e.type === "touchmove") t.isSwipe = true;
        if (e.type === "touchend" && !t.isSwipe) {
            t.onClick(e, t);
        }
    },

    onClick: function(e, t) {
        var a = t.f.getParentAnchorElement(e, t);
        var b = t.f.getParentHasClass(e.target, e, t.tg);
        var p = t.f.getParentHasClass(a, e, t.te);
        var f = p ? p.classList.contains("anmation-end") : false;
        var isActive = p ? p.classList.contains("active") : false;
        var isHover = p ? p.classList.contains("popup--hover") : false;
        var notElm = !f ? p : "";

        if (e.type === "click" && isHover) {
            if (a.getAttribute("href")) {
                return true;
            }
            e.preventDefault();
            return false;
        }

        if (e.type === "mouseenter") {
            if (!isHover) return;
            if (t.current === p) {
                return;
            } else {
                t.show(e, t, p, f);
            }
            t.current = p;
            return false;
        } else if (e.type === "mouseleave") {
            if (t.current === p) return;
            if (!p && t.current == e.target) {
                t.hide(e, t, e.target, f);
                t.current = null;
                return;
            }
            if (!isHover) return;
        }

        if (!f) {
            if (!b) {
                t.clearAll(a, e, t, notElm);
            }
            if (!p) return false;
        }

        if (e.type === "touchend") f = false;
        if (e.target.getAttribute("href")) {
            return true;
        }

        if (e.type === "click") e.preventDefault();

        t.toggle(e, t, p, f);
        return true;
    },

    toggle: function(e, t, p, f) {
        var c = $(p)
            .find("." + t.tg)
            .get(0);
        if (f) {
            p.classList.remove("anmation-end", "active");
        } else {
            p.classList.add("active");
            t.f.setPosition(c, p);
            p.classList.add("anmation-end");
        }
    },

    show: function(e, t, p, f) {
        var c = p.querySelectorAll("." + t.tg)[0];
        p.classList.add("active");
        t.f.setPosition(c, p);
        p.classList.add("anmation-end");
    },

    hide: function(e, t, p, f) {
        var c = $(p)
            .find("." + t.tg)
            .get(0);
        p.classList.remove("anmation-end", "active");
    },

    clearAll: function(a, e, t, notElm) {
        var elm = document.getElementsByClassName(t.te);
        for (var i = 0; i < elm.length; i++) {
            elm[i].classList.remove("anmation-end", "active");
            var tg = elm[i].querySelectorAll("." + t.tg);
            for (var j = 0; j < tg.length; j++) {
                tg.style.display = "hidden";
            }
        }
    },

    f: {
        setPosition: function(c, p) {
            var ww = window.innerWidth;
            var pw = p.getBoundingClientRect().width;
            var displayIni = this.getPropVal(c, "display");
            var margin = 20;
            var x, w, rect;
            c.style.display = "block";
            c.style.left = "auto";
            c.style.right = "auto";
            rect = c.getBoundingClientRect();
            x = rect.left;
            w = rect.width;

            c.classList.remove("arrow--r", "arrow--l");

            // right
            if (ww < x + w) {
                c.style.right = "0px";
                c.classList.add("arrow--l");

                // left
            } else if (x < w / 2) {
                c.style.left = "0px";
                c.classList.add("arrow--r");
            } else {
                c.style.left = pw / 2 - w / 2 + "px";
            }
            c.style.display = displayIni;
        },

        getParentHasClass: function(t, e, className) {
            var l = this.getElementDepth(e.currentTarget, e.target);
            var pn = t;

            if (UA.browser === "msie") {
            }

            if (t.tagName === "svg") {
                if (UA.browser === "msie") {
                    pn = t.parentNode;
                } else {
                    pn = t.parentElement;
                }
            }

            for (var i = 0; i < l; i++) {
                if (!pn || !pn.classList) {
                    return;
                }
                if (pn.classList.contains(className)) {
                    return pn;
                } else {
                    pn = pn.parentNode;
                }
            }
            return false;
        },

        getParentAnchorElement: function(e, t) {
            var l = this.getElementDepth(e.currentTarget, e.target);
            var pn = e.target;

            for (var i = 0; i < l; i++) {
                if (!pn) {
                    return;
                }

                if (pn.tagName === ("A" || "a")) {
                    return pn;
                } else {
                    pn = pn.parentNode;
                }
            }
            return false;
        },

        getElementDepth: function(parent, child) {
            var depth = 0;
            var p = parent;
            var c = child;

            while (c != p) {
                depth++;
                if (c.parentNode) {
                    c = c.parentNode;
                }
            }
            return depth;
        },

        getPropVal: function(t, p) {
            return document.defaultView
                .getComputedStyle(t, "")
                .getPropertyValue(p);
        },
    },
};

var MAIN = {
    func: {
        getPropVal: function(t, p) {
            return document.defaultView
                .getComputedStyle(t, "")
                .getPropertyValue(p);
        },
    },

    ////////////////////////////////////////////////////////////////////////////////////////////////

    NavigationDrower: function() {
        // 迚ｹ螳壹�繧ｯ繝ｩ繧ｹ繧呈戟縺｣縺ｦ縺�ｋ隕∫ｴ�縺ｯ荳蠕九�謖吝虚縺ｮ繝峨Ο繝ｯ繝ｼ縺ｫ

        var drower = document.getElementsByClassName("js-drower");
        var drowerNav = [];

        // navigation drower
        for (var i = 0; i < drower.length; i++) {
            drowerNav[i] = {
                id: drower[i].getAttribute("id"),
                obj: buildDrower(),
            };
            drowerNav[i].obj.init(drower[i]);
        }

        addButtonEvent(document.querySelectorAll(".menu-button a"));
        addButtonEvent(document.querySelectorAll(".close-button a"));

        function addButtonEvent(btns) {
            for (var i = 0; i < btns.length; i++) {
                btns[i].addEventListener(
                    "click",
                    function(e) {
                        if (e.preventDefault) {
                            e.preventDefault();
                        }

                        var time = 0;
                        var delay = 0.02;
                        var targetId = e.currentTarget.getAttribute(
                            "data-toggle-target"
                        );
                        var target = document.getElementById(targetId);

                        var t;

                        for (var i = 0; i < drower.length; i++) {
                            if (targetId === drowerNav[i].id) {
                                t = drowerNav[i].obj;
                            }
                        }

                        t.switchState("", t);
                    },
                    false
                );
            }
        }

        function buildDrower() {
            return {
                gh: null,
                gn: null,
                gw: null,
                ma: null,
                ol: null,
                ol_bk: null,
                na: null,
                ni: null,
                niobj: [],
                lbl: "",

                init: function(target) {
                    var d = document;
                    var that = this;

                    that.gh = target;
                    that.gw = target.querySelector(".js-drower--inner");
                    that.gi = target.querySelector(".js-drower--contents");
                    that.ma = target.querySelectorAll(".menu-button a");
                    that.ni = target.querySelectorAll(".g-nav__li");
                    that.ol_bk = d.createElement("div");
                    that.ol_bk.classList.add("overlay_bk");
                    that.gh.appendChild(that.ol_bk);
                    that.lbl = target.getAttribute("data-drower-label");

                    that.ol_bk.addEventListener(
                        "click",
                        function(e) {
                            that.switchState(e, that);
                        },
                        false
                    );
                    that.ol_bk.addEventListener(
                        "transitionend",
                        function(e) {
                            var n = that.gh;
                            var w = MAIN.func.getPropVal(
                                e.currentTarget,
                                "width"
                            );
                            var o = MAIN.func.getPropVal(
                                e.currentTarget,
                                "opacity"
                            );

                            if (
                                e.propertyName === "width" ||
                                e.propertyName === "opacity"
                            ) {
                                if (w === "0px" || o === "0") {
                                    n.classList.add("-hide");
                                    that.gh.classList.remove("-show");
                                    if (that.gi) {
                                        that.gi.scrollTop = 0;
                                    }
                                }
                            }
                        },
                        false
                    );

                    that.gh.classList.add("-hide");

                    for (var i = 0; i < that.ni.length; i++) {
                        that.niobj[i] = {
                            elm: that.ni[i],
                            timeoutId: "",
                        };

                        that.niobj[i].elm.addEventListener(
                            "mouseenter",
                            (function() {
                                var c = i;
                                return function(e) {
                                    clearTimeout(that.niobj[c].timeoutId);
                                    var t = this;
                                    that.niobj[c].timeoutId = setTimeout(
                                        function() {
                                            t.classList.add("hover");
                                        },
                                        100
                                    );
                                };
                            })(),
                            false
                        );

                        that.niobj[i].elm.addEventListener(
                            "mouseleave",
                            (function() {
                                var c = i;
                                return function(e) {
                                    clearTimeout(that.niobj[c].timeoutId);
                                    var t = this;
                                    that.niobj[c].timeoutId = setTimeout(
                                        function() {
                                            t.classList.remove("hover");
                                        },
                                        150
                                    );
                                };
                            })(),
                            false
                        );
                    }
                },

                switchState: function(e, t) {
                    var target = t.gh;
                    var b = document.getElementsByTagName("body")[0];
                    var a = target.querySelectorAll(".anm");
                    var time = 0.5;
                    var delay = 0.025;

                    if (target.classList.contains("-show")) {
                        if (e.type === "mouseenter") {
                            return;
                        }

                        for (var i = 0; i < a.length; i++) {
                            a[i].style.transitionDelay = "0s";
                        }

                        target.classList.remove("-show");
                        b.classList.remove("show-drower");
                        b.classList.remove(t.lbl);
                    } else {
                        for (var i = 0; i < a.length; i++) {
                            a[i].style.transitionDelay = time + delay * i + "s";
                        }

                        target.classList.remove("-hide");
                        target.classList.add("-show");
                        b.classList.add("show-drower");
                        b.classList.add(t.lbl);
                    }
                },

                changeInnerHeight: function(e, t) {
                    if (UA.os === "ios") {
                        t.gw.style.height = window.innerHeight + "px";
                    }
                },
            };
        }
    },

    ////////////////////////////////////////////////////////////////////////////////////////////////

    ContrastMode: {
        state: false,
        toggles: undefined,

        init: function() {
            var that = this;

            document
                .getElementsByTagName("body")[0]
                .classList.add("mode--setting");
            that.toggles = document.getElementsByClassName(
                "contrast-mode-toggle"
            );
            that.cookie.init(that);

            for (var i = 0; i < that.toggles.length; i++) {
                that.toggles[i].addEventListener(
                    "change",
                    function(e) {
                        that.cookie.set(that, e.currentTarget.checked ? 1 : 0);
                    },
                    false
                );
            }
            setTimeout(function() {
                document
                    .getElementsByTagName("body")[0]
                    .classList.remove("mode--setting");
            }, 100);
        },

        sync: function(t, state) {
            for (var i = 0; i < t.toggles.length; i++) {
                t.toggles[i].checked = state;
            }

            if (state) {
                document
                    .getElementsByTagName("body")[0]
                    .classList.remove("contrast-mode--normal");
            } else {
                document
                    .getElementsByTagName("body")[0]
                    .classList.add("contrast-mode--normal");
                if (typeof FONTPLUS !== "undefined") {
                    FONTPLUS.reload(true);
                }
            }
        },

        cookie: {
            init: function(t) {
                var c = parseInt(t.cookie.getCookies()["cookie_contrast-mode"]);
                var currentCookie = c ? 1 : 0;
                MAIN.ContrastMode.state = currentCookie;
                t.sync(t, currentCookie);
            },

            set: function(t, bool) {
                t.sync(t, bool);
                document.cookie = "cookie_contrast-mode=" + bool + ";path=/";
            },

            delete: function() {
                document.cookie = "cookie_contrast-mode=; max-age=0";
            },

            getCookies: function() {
                var a = [];
                if (document.cookie != "") {
                    var tmp = document.cookie.split("; ");
                    for (var i = 0; i < tmp.length; i++) {
                        var data = tmp[i].split("=");
                        a[data[0]] = decodeURIComponent(data[1]);
                    }
                }
                return a;
            },
        },
    },

    ////////////////////////////////////////////////////////////////////////////////////////////////

    init: function() {
        let that = this;
        let d = document;
        let b = d.getElementsByTagName("body")[0];

        MAIN.NavigationDrower();
        MAIN.ContrastMode.init();

        OverflowSlideNav.init();
        PopupMenu.init();
        currentPageHighlight("gh", DIRECTORY_LEVEL);

        // Accordion
        let UIA = UIAccordion();
        UIA.build(d.getElementsByClassName("ui-accordion"), {
            activeOnly: false,
        });

        // Smooth Scroll
        let smoothScroll = UIkit.scroll(
            document.querySelectorAll(".js-scroll"),
            {
                offset: 0,
                //easing: "easeInOutExpo",
                duration: 500,
            }
        );

        // Tooltip
        let tooltip = UIkit.tooltip(document.querySelectorAll(".js-tooltip"), {
            pos: "bottom-left",
            delay: 200,
            animation: "uk-animation-fade",
        });

        // Parallax
        let parallax = UIkit.parallax(
            document.querySelectorAll("[data-parallax]"),
            {
                viewport: 1,
                easing: 0,
                y: "0%, 0%",
            }
        );

        // Parallax
        let parallax_bg = UIkit.parallax(
            document.querySelectorAll("[data-bg-parallax]"),
            {
                viewport: 1,
                easing: 0,
                bgy: "-25%, 25%",
            }
        );
    },
};

document.addEventListener("DOMContentLoaded", function() {
    const b = document.getElementsByTagName("body")[0];

    MAIN.init();
    setScrollDirection();
    createTopOfPage();
    Icon.set();

    if (UA.browser !== "msie") {
        setPriorityLanguage();
    }

    b.classList.add("domContentLoaded");
});

window.addEventListener(
    "load",
    function(e) {
        const b = document.getElementsByTagName("body")[0];
        InViewElement.init();
        InViewElement.manage.reset(InViewElement.manage);
        b.classList.add("load");
    },
    false
);

(function() {
    const h = document.getElementsByTagName("html")[0];
    const w = window;

    if (UA.os === "win") {
        h.classList.add("windows");
    }

    if (UA.os == "ios") {
        h.classList.add("ios");
    }

    if (UA.browser === "msie") {
        h.classList.add("msie");
    }

    if (UA.browser == "edge") {
        h.classList.add("edge");
    }

    if (UA.browser === "msie") {
        if (UA.version === 11) {
            h.classList.add("ie11");
        }
        if (UA.version < 11) {
            h.classList.add("under-ie11");
        }
    }

    if (UA.browser === "msie" && UA.version < 9) {
        h.classList.add("under-ie9");
    }

    h.classList.add("js");

    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
    // requestAnimationFrame polyfill by Erik Moller. fixes from Paul Irish and Tino Zijdel

    w.requestAnimationFrame = (function() {
        return w.requestAnimationFrame || w.webkitRequestAnimationFrame;
    })();

    w.cancelAnimationFrame = (function() {
        return w.cancelAnimationFrame || w.webkitCancelAnimationFrame;
    })();

    if (!w.requestAnimationFrame) {
        w.requestAnimationFrame = function(cb) {
            var id = window.setTimeout(cb, 1000 / 60);
            return id;
        };
    }

    if (!w.cancelAnimationFrame) {
        w.cancelAnimationFrame = function(id) {
            w.clearTimeout(id);
        };
    }
})();

// -------------------------------------------------------------------------------------
// Global site tag (gtag.js) - Google Analytics

window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "UA-158764389-1");
gtag("config", "UA-159112560-1");
