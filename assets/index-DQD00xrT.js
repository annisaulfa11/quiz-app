function gd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function vd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ea = { exports: {} },
  jl = {},
  xa = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yr = Symbol.for("react.element"),
  wd = Symbol.for("react.portal"),
  Sd = Symbol.for("react.fragment"),
  Ed = Symbol.for("react.strict_mode"),
  xd = Symbol.for("react.profiler"),
  kd = Symbol.for("react.provider"),
  Cd = Symbol.for("react.context"),
  _d = Symbol.for("react.forward_ref"),
  Rd = Symbol.for("react.suspense"),
  Nd = Symbol.for("react.memo"),
  Pd = Symbol.for("react.lazy"),
  $s = Symbol.iterator;
function Td(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($s && e[$s]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ka = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ca = Object.assign,
  _a = {};
function xn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = _a),
    (this.updater = n || ka);
}
xn.prototype.isReactComponent = {};
xn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
xn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ra() {}
Ra.prototype = xn.prototype;
function Ui(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = _a),
    (this.updater = n || ka);
}
var Mi = (Ui.prototype = new Ra());
Mi.constructor = Ui;
Ca(Mi, xn.prototype);
Mi.isPureReactComponent = !0;
var Hs = Array.isArray,
  Na = Object.prototype.hasOwnProperty,
  Bi = { current: null },
  Pa = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ta(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Na.call(t, r) && !Pa.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: yr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Bi.current,
  };
}
function Od(e, t) {
  return {
    $$typeof: yr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function $i(e) {
  return typeof e == "object" && e !== null && e.$$typeof === yr;
}
function Ld(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Vs = /\/+/g;
function oo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ld("" + e.key)
    : t.toString(36);
}
function Wr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case yr:
          case wd:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + oo(i, 0) : r),
      Hs(l)
        ? ((n = ""),
          e != null && (n = e.replace(Vs, "$&/") + "/"),
          Wr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          ($i(l) &&
            (l = Od(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Vs, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Hs(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var u = r + oo(o, s);
      i += Wr(o, t, n, u, l);
    }
  else if (((u = Td(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + oo(o, s++)), (i += Wr(o, t, n, u, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Nr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Wr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function jd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var pe = { current: null },
  Qr = { transition: null },
  zd = {
    ReactCurrentDispatcher: pe,
    ReactCurrentBatchConfig: Qr,
    ReactCurrentOwner: Bi,
  };
function Oa() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = {
  map: Nr,
  forEach: function (e, t, n) {
    Nr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Nr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Nr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!$i(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
F.Component = xn;
F.Fragment = Sd;
F.Profiler = xd;
F.PureComponent = Ui;
F.StrictMode = Ed;
F.Suspense = Rd;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zd;
F.act = Oa;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ca({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Bi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Na.call(t, u) &&
        !Pa.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: yr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: Cd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: kd, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = Ta;
F.createFactory = function (e) {
  var t = Ta.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: _d, render: e };
};
F.isValidElement = $i;
F.lazy = function (e) {
  return { $$typeof: Pd, _payload: { _status: -1, _result: e }, _init: jd };
};
F.memo = function (e, t) {
  return { $$typeof: Nd, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = Qr.transition;
  Qr.transition = {};
  try {
    e();
  } finally {
    Qr.transition = t;
  }
};
F.unstable_act = Oa;
F.useCallback = function (e, t) {
  return pe.current.useCallback(e, t);
};
F.useContext = function (e) {
  return pe.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return pe.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return pe.current.useEffect(e, t);
};
F.useId = function () {
  return pe.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return pe.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return pe.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return pe.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return pe.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return pe.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return pe.current.useRef(e);
};
F.useState = function (e) {
  return pe.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return pe.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return pe.current.useTransition();
};
F.version = "18.3.1";
xa.exports = F;
var C = xa.exports;
const Id = vd(C),
  Ad = gd({ __proto__: null, default: Id }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fd = C,
  Dd = Symbol.for("react.element"),
  Ud = Symbol.for("react.fragment"),
  Md = Object.prototype.hasOwnProperty,
  Bd = Fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  $d = { key: !0, ref: !0, __self: !0, __source: !0 };
function La(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Md.call(t, r) && !$d.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Dd,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Bd.current,
  };
}
jl.Fragment = Ud;
jl.jsx = La;
jl.jsxs = La;
Ea.exports = jl;
var R = Ea.exports,
  ja = { exports: {} },
  Pe = {},
  za = { exports: {} },
  Ia = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, I) {
    var A = T.length;
    T.push(I);
    e: for (; 0 < A; ) {
      var X = (A - 1) >>> 1,
        te = T[X];
      if (0 < l(te, I)) (T[X] = I), (T[A] = te), (A = X);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var I = T[0],
      A = T.pop();
    if (A !== I) {
      T[0] = A;
      e: for (var X = 0, te = T.length, _r = te >>> 1; X < _r; ) {
        var Pt = 2 * (X + 1) - 1,
          lo = T[Pt],
          Tt = Pt + 1,
          Rr = T[Tt];
        if (0 > l(lo, A))
          Tt < te && 0 > l(Rr, lo)
            ? ((T[X] = Rr), (T[Tt] = A), (X = Tt))
            : ((T[X] = lo), (T[Pt] = A), (X = Pt));
        else if (Tt < te && 0 > l(Rr, A)) (T[X] = Rr), (T[Tt] = A), (X = Tt);
        else break e;
      }
    }
    return I;
  }
  function l(T, I) {
    var A = T.sortIndex - I.sortIndex;
    return A !== 0 ? A : T.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var u = [],
    a = [],
    c = 1,
    d = null,
    m = 3,
    S = !1,
    y = !1,
    g = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(T) {
    for (var I = n(a); I !== null; ) {
      if (I.callback === null) r(a);
      else if (I.startTime <= T)
        r(a), (I.sortIndex = I.expirationTime), t(u, I);
      else break;
      I = n(a);
    }
  }
  function E(T) {
    if (((g = !1), h(T), !y))
      if (n(u) !== null) (y = !0), no(k);
      else {
        var I = n(a);
        I !== null && ro(E, I.startTime - T);
      }
  }
  function k(T, I) {
    (y = !1), g && ((g = !1), p(O), (O = -1)), (S = !0);
    var A = m;
    try {
      for (
        h(I), d = n(u);
        d !== null && (!(d.expirationTime > I) || (T && !K()));

      ) {
        var X = d.callback;
        if (typeof X == "function") {
          (d.callback = null), (m = d.priorityLevel);
          var te = X(d.expirationTime <= I);
          (I = e.unstable_now()),
            typeof te == "function" ? (d.callback = te) : d === n(u) && r(u),
            h(I);
        } else r(u);
        d = n(u);
      }
      if (d !== null) var _r = !0;
      else {
        var Pt = n(a);
        Pt !== null && ro(E, Pt.startTime - I), (_r = !1);
      }
      return _r;
    } finally {
      (d = null), (m = A), (S = !1);
    }
  }
  var _ = !1,
    N = null,
    O = -1,
    L = 5,
    j = -1;
  function K() {
    return !(e.unstable_now() - j < L);
  }
  function xe() {
    if (N !== null) {
      var T = e.unstable_now();
      j = T;
      var I = !0;
      try {
        I = N(!0, T);
      } finally {
        I ? We() : ((_ = !1), (N = null));
      }
    } else _ = !1;
  }
  var We;
  if (typeof f == "function")
    We = function () {
      f(xe);
    };
  else if (typeof MessageChannel < "u") {
    var eo = new MessageChannel(),
      to = eo.port2;
    (eo.port1.onmessage = xe),
      (We = function () {
        to.postMessage(null);
      });
  } else
    We = function () {
      w(xe, 0);
    };
  function no(T) {
    (N = T), _ || ((_ = !0), We());
  }
  function ro(T, I) {
    O = w(function () {
      T(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || S || ((y = !0), no(k));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (L = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (T) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = m;
      }
      var A = m;
      m = I;
      try {
        return T();
      } finally {
        m = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, I) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var A = m;
      m = T;
      try {
        return I();
      } finally {
        m = A;
      }
    }),
    (e.unstable_scheduleCallback = function (T, I, A) {
      var X = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? X + A : X))
          : (A = X),
        T)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = A + te),
        (T = {
          id: c++,
          callback: I,
          priorityLevel: T,
          startTime: A,
          expirationTime: te,
          sortIndex: -1,
        }),
        A > X
          ? ((T.sortIndex = A),
            t(a, T),
            n(u) === null &&
              T === n(a) &&
              (g ? (p(O), (O = -1)) : (g = !0), ro(E, A - X)))
          : ((T.sortIndex = te), t(u, T), y || S || ((y = !0), no(k))),
        T
      );
    }),
    (e.unstable_shouldYield = K),
    (e.unstable_wrapCallback = function (T) {
      var I = m;
      return function () {
        var A = m;
        m = I;
        try {
          return T.apply(this, arguments);
        } finally {
          m = A;
        }
      };
    });
})(Ia);
za.exports = Ia;
var Hd = za.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vd = C,
  Ne = Hd;
function x(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Aa = new Set(),
  Yn = {};
function Kt(e, t) {
  mn(e, t), mn(e + "Capture", t);
}
function mn(e, t) {
  for (Yn[e] = t, e = 0; e < t.length; e++) Aa.add(t[e]);
}
var tt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Do = Object.prototype.hasOwnProperty,
  Wd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ws = {},
  Qs = {};
function Qd(e) {
  return Do.call(Qs, e)
    ? !0
    : Do.call(Ws, e)
    ? !1
    : Wd.test(e)
    ? (Qs[e] = !0)
    : ((Ws[e] = !0), !1);
}
function Kd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function qd(e, t, n, r) {
  if (t === null || typeof t > "u" || Kd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function he(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new he(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ie[t] = new he(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ie[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ie[e] = new he(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ie[e] = new he(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ie[e] = new he(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ie[e] = new he(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ie[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Hi = /[\-:]([a-z])/g;
function Vi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Hi, Vi);
    ie[t] = new he(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Hi, Vi);
    ie[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Hi, Vi);
  ie[t] = new he(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ie[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new he(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ie[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Wi(e, t, n, r) {
  var l = ie.hasOwnProperty(t) ? ie[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (qd(t, n, l, r) && (n = null),
    r || l === null
      ? Qd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ot = Vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Pr = Symbol.for("react.element"),
  Yt = Symbol.for("react.portal"),
  Gt = Symbol.for("react.fragment"),
  Qi = Symbol.for("react.strict_mode"),
  Uo = Symbol.for("react.profiler"),
  Fa = Symbol.for("react.provider"),
  Da = Symbol.for("react.context"),
  Ki = Symbol.for("react.forward_ref"),
  Mo = Symbol.for("react.suspense"),
  Bo = Symbol.for("react.suspense_list"),
  qi = Symbol.for("react.memo"),
  ut = Symbol.for("react.lazy"),
  Ua = Symbol.for("react.offscreen"),
  Ks = Symbol.iterator;
function Pn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ks && e[Ks]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  io;
function Dn(e) {
  if (io === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      io = (t && t[1]) || "";
    }
  return (
    `
` +
    io +
    e
  );
}
var so = !1;
function uo(e, t) {
  if (!e || so) return "";
  so = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          s = o.length - 1;
        1 <= i && 0 <= s && l[i] !== o[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (l[i] !== o[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || l[i] !== o[s])) {
                var u =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (so = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Dn(e) : "";
}
function Jd(e) {
  switch (e.tag) {
    case 5:
      return Dn(e.type);
    case 16:
      return Dn("Lazy");
    case 13:
      return Dn("Suspense");
    case 19:
      return Dn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = uo(e.type, !1)), e;
    case 11:
      return (e = uo(e.type.render, !1)), e;
    case 1:
      return (e = uo(e.type, !0)), e;
    default:
      return "";
  }
}
function $o(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Gt:
      return "Fragment";
    case Yt:
      return "Portal";
    case Uo:
      return "Profiler";
    case Qi:
      return "StrictMode";
    case Mo:
      return "Suspense";
    case Bo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Da:
        return (e.displayName || "Context") + ".Consumer";
      case Fa:
        return (e._context.displayName || "Context") + ".Provider";
      case Ki:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case qi:
        return (
          (t = e.displayName || null), t !== null ? t : $o(e.type) || "Memo"
        );
      case ut:
        (t = e._payload), (e = e._init);
        try {
          return $o(e(t));
        } catch {}
    }
  return null;
}
function Xd(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return $o(t);
    case 8:
      return t === Qi ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function kt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ma(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Yd(e) {
  var t = Ma(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Tr(e) {
  e._valueTracker || (e._valueTracker = Yd(e));
}
function Ba(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ma(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ol(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ho(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function qs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = kt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function $a(e, t) {
  (t = t.checked), t != null && Wi(e, "checked", t, !1);
}
function Vo(e, t) {
  $a(e, t);
  var n = kt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Wo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Wo(e, t.type, kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Js(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Wo(e, t, n) {
  (t !== "number" || ol(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Un = Array.isArray;
function an(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + kt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Qo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Xs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (Un(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: kt(n) };
}
function Ha(e, t) {
  var n = kt(t.value),
    r = kt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ys(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Va(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ko(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Va(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Or,
  Wa = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Or = Or || document.createElement("div"),
          Or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Or.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Gn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var $n = {
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
    strokeWidth: !0,
  },
  Gd = ["Webkit", "ms", "Moz", "O"];
Object.keys($n).forEach(function (e) {
  Gd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($n[t] = $n[e]);
  });
});
function Qa(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || ($n.hasOwnProperty(e) && $n[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ka(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Qa(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Zd = Q(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function qo(e, t) {
  if (t) {
    if (Zd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function Jo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var Xo = null;
function Ji(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Yo = null,
  cn = null,
  fn = null;
function Gs(e) {
  if ((e = wr(e))) {
    if (typeof Yo != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = Dl(t)), Yo(e.stateNode, e.type, t));
  }
}
function qa(e) {
  cn ? (fn ? fn.push(e) : (fn = [e])) : (cn = e);
}
function Ja() {
  if (cn) {
    var e = cn,
      t = fn;
    if (((fn = cn = null), Gs(e), t)) for (e = 0; e < t.length; e++) Gs(t[e]);
  }
}
function Xa(e, t) {
  return e(t);
}
function Ya() {}
var ao = !1;
function Ga(e, t, n) {
  if (ao) return e(t, n);
  ao = !0;
  try {
    return Xa(e, t, n);
  } finally {
    (ao = !1), (cn !== null || fn !== null) && (Ya(), Ja());
  }
}
function Zn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Dl(n);
  if (r === null) return null;
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var Go = !1;
if (tt)
  try {
    var Tn = {};
    Object.defineProperty(Tn, "passive", {
      get: function () {
        Go = !0;
      },
    }),
      window.addEventListener("test", Tn, Tn),
      window.removeEventListener("test", Tn, Tn);
  } catch {
    Go = !1;
  }
function bd(e, t, n, r, l, o, i, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (c) {
    this.onError(c);
  }
}
var Hn = !1,
  il = null,
  sl = !1,
  Zo = null,
  ep = {
    onError: function (e) {
      (Hn = !0), (il = e);
    },
  };
function tp(e, t, n, r, l, o, i, s, u) {
  (Hn = !1), (il = null), bd.apply(ep, arguments);
}
function np(e, t, n, r, l, o, i, s, u) {
  if ((tp.apply(this, arguments), Hn)) {
    if (Hn) {
      var a = il;
      (Hn = !1), (il = null);
    } else throw Error(x(198));
    sl || ((sl = !0), (Zo = a));
  }
}
function qt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Za(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Zs(e) {
  if (qt(e) !== e) throw Error(x(188));
}
function rp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = qt(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Zs(l), e;
        if (o === r) return Zs(l), t;
        o = o.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, s = l.child; s; ) {
        if (s === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (s === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = o.child; s; ) {
          if (s === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (s === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function ba(e) {
  return (e = rp(e)), e !== null ? ec(e) : null;
}
function ec(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ec(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var tc = Ne.unstable_scheduleCallback,
  bs = Ne.unstable_cancelCallback,
  lp = Ne.unstable_shouldYield,
  op = Ne.unstable_requestPaint,
  Y = Ne.unstable_now,
  ip = Ne.unstable_getCurrentPriorityLevel,
  Xi = Ne.unstable_ImmediatePriority,
  nc = Ne.unstable_UserBlockingPriority,
  ul = Ne.unstable_NormalPriority,
  sp = Ne.unstable_LowPriority,
  rc = Ne.unstable_IdlePriority,
  zl = null,
  Je = null;
function up(e) {
  if (Je && typeof Je.onCommitFiberRoot == "function")
    try {
      Je.onCommitFiberRoot(zl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Be = Math.clz32 ? Math.clz32 : fp,
  ap = Math.log,
  cp = Math.LN2;
function fp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ap(e) / cp) | 0)) | 0;
}
var Lr = 64,
  jr = 4194304;
function Mn(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
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
function al(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~l;
    s !== 0 ? (r = Mn(s)) : ((o &= i), o !== 0 && (r = Mn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Mn(i)) : o !== 0 && (r = Mn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Be(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function dp(e, t) {
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
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function pp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Be(o),
      s = 1 << i,
      u = l[i];
    u === -1
      ? (!(s & n) || s & r) && (l[i] = dp(s, t))
      : u <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function bo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function lc() {
  var e = Lr;
  return (Lr <<= 1), !(Lr & 4194240) && (Lr = 64), e;
}
function co(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function gr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Be(t)),
    (e[t] = n);
}
function hp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Be(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Yi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Be(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var U = 0;
function oc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ic,
  Gi,
  sc,
  uc,
  ac,
  ei = !1,
  zr = [],
  mt = null,
  yt = null,
  gt = null,
  bn = new Map(),
  er = new Map(),
  ct = [],
  mp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function eu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      mt = null;
      break;
    case "dragenter":
    case "dragleave":
      yt = null;
      break;
    case "mouseover":
    case "mouseout":
      gt = null;
      break;
    case "pointerover":
    case "pointerout":
      bn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      er.delete(t.pointerId);
  }
}
function On(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = wr(t)), t !== null && Gi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function yp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (mt = On(mt, e, t, n, r, l)), !0;
    case "dragenter":
      return (yt = On(yt, e, t, n, r, l)), !0;
    case "mouseover":
      return (gt = On(gt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return bn.set(o, On(bn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), er.set(o, On(er.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function cc(e) {
  var t = jt(e.target);
  if (t !== null) {
    var n = qt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Za(n)), t !== null)) {
          (e.blockedOn = t),
            ac(e.priority, function () {
              sc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Kr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ti(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Xo = r), n.target.dispatchEvent(r), (Xo = null);
    } else return (t = wr(n)), t !== null && Gi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function tu(e, t, n) {
  Kr(e) && n.delete(t);
}
function gp() {
  (ei = !1),
    mt !== null && Kr(mt) && (mt = null),
    yt !== null && Kr(yt) && (yt = null),
    gt !== null && Kr(gt) && (gt = null),
    bn.forEach(tu),
    er.forEach(tu);
}
function Ln(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ei ||
      ((ei = !0),
      Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, gp)));
}
function tr(e) {
  function t(l) {
    return Ln(l, e);
  }
  if (0 < zr.length) {
    Ln(zr[0], e);
    for (var n = 1; n < zr.length; n++) {
      var r = zr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    mt !== null && Ln(mt, e),
      yt !== null && Ln(yt, e),
      gt !== null && Ln(gt, e),
      bn.forEach(t),
      er.forEach(t),
      n = 0;
    n < ct.length;
    n++
  )
    (r = ct[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ct.length && ((n = ct[0]), n.blockedOn === null); )
    cc(n), n.blockedOn === null && ct.shift();
}
var dn = ot.ReactCurrentBatchConfig,
  cl = !0;
function vp(e, t, n, r) {
  var l = U,
    o = dn.transition;
  dn.transition = null;
  try {
    (U = 1), Zi(e, t, n, r);
  } finally {
    (U = l), (dn.transition = o);
  }
}
function wp(e, t, n, r) {
  var l = U,
    o = dn.transition;
  dn.transition = null;
  try {
    (U = 4), Zi(e, t, n, r);
  } finally {
    (U = l), (dn.transition = o);
  }
}
function Zi(e, t, n, r) {
  if (cl) {
    var l = ti(e, t, n, r);
    if (l === null) Eo(e, t, r, fl, n), eu(e, r);
    else if (yp(l, e, t, n, r)) r.stopPropagation();
    else if ((eu(e, r), t & 4 && -1 < mp.indexOf(e))) {
      for (; l !== null; ) {
        var o = wr(l);
        if (
          (o !== null && ic(o),
          (o = ti(e, t, n, r)),
          o === null && Eo(e, t, r, fl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Eo(e, t, r, null, n);
  }
}
var fl = null;
function ti(e, t, n, r) {
  if (((fl = null), (e = Ji(r)), (e = jt(e)), e !== null))
    if (((t = qt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Za(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (fl = e), null;
}
function fc(e) {
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
      switch (ip()) {
        case Xi:
          return 1;
        case nc:
          return 4;
        case ul:
        case sp:
          return 16;
        case rc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dt = null,
  bi = null,
  qr = null;
function dc() {
  if (qr) return qr;
  var e,
    t = bi,
    n = t.length,
    r,
    l = "value" in dt ? dt.value : dt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (qr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Jr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ir() {
  return !0;
}
function nu() {
  return !1;
}
function Te(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ir
        : nu),
      (this.isPropagationStopped = nu),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ir));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ir));
      },
      persist: function () {},
      isPersistent: Ir,
    }),
    t
  );
}
var kn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  es = Te(kn),
  vr = Q({}, kn, { view: 0, detail: 0 }),
  Sp = Te(vr),
  fo,
  po,
  jn,
  Il = Q({}, vr, {
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
    getModifierState: ts,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== jn &&
            (jn && e.type === "mousemove"
              ? ((fo = e.screenX - jn.screenX), (po = e.screenY - jn.screenY))
              : (po = fo = 0),
            (jn = e)),
          fo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : po;
    },
  }),
  ru = Te(Il),
  Ep = Q({}, Il, { dataTransfer: 0 }),
  xp = Te(Ep),
  kp = Q({}, vr, { relatedTarget: 0 }),
  ho = Te(kp),
  Cp = Q({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _p = Te(Cp),
  Rp = Q({}, kn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Np = Te(Rp),
  Pp = Q({}, kn, { data: 0 }),
  lu = Te(Pp),
  Tp = {
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
    MozPrintableKey: "Unidentified",
  },
  Op = {
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
    224: "Meta",
  },
  Lp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function jp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Lp[e]) ? !!t[e] : !1;
}
function ts() {
  return jp;
}
var zp = Q({}, vr, {
    key: function (e) {
      if (e.key) {
        var t = Tp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Jr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Op[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ts,
    charCode: function (e) {
      return e.type === "keypress" ? Jr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Jr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Ip = Te(zp),
  Ap = Q({}, Il, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ou = Te(Ap),
  Fp = Q({}, vr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ts,
  }),
  Dp = Te(Fp),
  Up = Q({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mp = Te(Up),
  Bp = Q({}, Il, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  $p = Te(Bp),
  Hp = [9, 13, 27, 32],
  ns = tt && "CompositionEvent" in window,
  Vn = null;
tt && "documentMode" in document && (Vn = document.documentMode);
var Vp = tt && "TextEvent" in window && !Vn,
  pc = tt && (!ns || (Vn && 8 < Vn && 11 >= Vn)),
  iu = " ",
  su = !1;
function hc(e, t) {
  switch (e) {
    case "keyup":
      return Hp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function mc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Zt = !1;
function Wp(e, t) {
  switch (e) {
    case "compositionend":
      return mc(t);
    case "keypress":
      return t.which !== 32 ? null : ((su = !0), iu);
    case "textInput":
      return (e = t.data), e === iu && su ? null : e;
    default:
      return null;
  }
}
function Qp(e, t) {
  if (Zt)
    return e === "compositionend" || (!ns && hc(e, t))
      ? ((e = dc()), (qr = bi = dt = null), (Zt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return pc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Kp = {
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
  week: !0,
};
function uu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Kp[e.type] : t === "textarea";
}
function yc(e, t, n, r) {
  qa(r),
    (t = dl(t, "onChange")),
    0 < t.length &&
      ((n = new es("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Wn = null,
  nr = null;
function qp(e) {
  Nc(e, 0);
}
function Al(e) {
  var t = tn(e);
  if (Ba(t)) return e;
}
function Jp(e, t) {
  if (e === "change") return t;
}
var gc = !1;
if (tt) {
  var mo;
  if (tt) {
    var yo = "oninput" in document;
    if (!yo) {
      var au = document.createElement("div");
      au.setAttribute("oninput", "return;"),
        (yo = typeof au.oninput == "function");
    }
    mo = yo;
  } else mo = !1;
  gc = mo && (!document.documentMode || 9 < document.documentMode);
}
function cu() {
  Wn && (Wn.detachEvent("onpropertychange", vc), (nr = Wn = null));
}
function vc(e) {
  if (e.propertyName === "value" && Al(nr)) {
    var t = [];
    yc(t, nr, e, Ji(e)), Ga(qp, t);
  }
}
function Xp(e, t, n) {
  e === "focusin"
    ? (cu(), (Wn = t), (nr = n), Wn.attachEvent("onpropertychange", vc))
    : e === "focusout" && cu();
}
function Yp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Al(nr);
}
function Gp(e, t) {
  if (e === "click") return Al(t);
}
function Zp(e, t) {
  if (e === "input" || e === "change") return Al(t);
}
function bp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var He = typeof Object.is == "function" ? Object.is : bp;
function rr(e, t) {
  if (He(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Do.call(t, l) || !He(e[l], t[l])) return !1;
  }
  return !0;
}
function fu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function du(e, t) {
  var n = fu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = fu(n);
  }
}
function wc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? wc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Sc() {
  for (var e = window, t = ol(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ol(e.document);
  }
  return t;
}
function rs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function eh(e) {
  var t = Sc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    wc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && rs(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = du(n, o));
        var i = du(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var th = tt && "documentMode" in document && 11 >= document.documentMode,
  bt = null,
  ni = null,
  Qn = null,
  ri = !1;
function pu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ri ||
    bt == null ||
    bt !== ol(r) ||
    ((r = bt),
    "selectionStart" in r && rs(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Qn && rr(Qn, r)) ||
      ((Qn = r),
      (r = dl(ni, "onSelect")),
      0 < r.length &&
        ((t = new es("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = bt))));
}
function Ar(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var en = {
    animationend: Ar("Animation", "AnimationEnd"),
    animationiteration: Ar("Animation", "AnimationIteration"),
    animationstart: Ar("Animation", "AnimationStart"),
    transitionend: Ar("Transition", "TransitionEnd"),
  },
  go = {},
  Ec = {};
tt &&
  ((Ec = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete en.animationend.animation,
    delete en.animationiteration.animation,
    delete en.animationstart.animation),
  "TransitionEvent" in window || delete en.transitionend.transition);
function Fl(e) {
  if (go[e]) return go[e];
  if (!en[e]) return e;
  var t = en[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ec) return (go[e] = t[n]);
  return e;
}
var xc = Fl("animationend"),
  kc = Fl("animationiteration"),
  Cc = Fl("animationstart"),
  _c = Fl("transitionend"),
  Rc = new Map(),
  hu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function _t(e, t) {
  Rc.set(e, t), Kt(t, [e]);
}
for (var vo = 0; vo < hu.length; vo++) {
  var wo = hu[vo],
    nh = wo.toLowerCase(),
    rh = wo[0].toUpperCase() + wo.slice(1);
  _t(nh, "on" + rh);
}
_t(xc, "onAnimationEnd");
_t(kc, "onAnimationIteration");
_t(Cc, "onAnimationStart");
_t("dblclick", "onDoubleClick");
_t("focusin", "onFocus");
_t("focusout", "onBlur");
_t(_c, "onTransitionEnd");
mn("onMouseEnter", ["mouseout", "mouseover"]);
mn("onMouseLeave", ["mouseout", "mouseover"]);
mn("onPointerEnter", ["pointerout", "pointerover"]);
mn("onPointerLeave", ["pointerout", "pointerover"]);
Kt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Kt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Kt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Kt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Kt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Kt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Bn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  lh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));
function mu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), np(r, t, void 0, e), (e.currentTarget = null);
}
function Nc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            u = s.instance,
            a = s.currentTarget;
          if (((s = s.listener), u !== o && l.isPropagationStopped())) break e;
          mu(l, s, a), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (u = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          mu(l, s, a), (o = u);
        }
    }
  }
  if (sl) throw ((e = Zo), (sl = !1), (Zo = null), e);
}
function B(e, t) {
  var n = t[ui];
  n === void 0 && (n = t[ui] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Pc(t, e, 2, !1), n.add(r));
}
function So(e, t, n) {
  var r = 0;
  t && (r |= 4), Pc(n, e, r, t);
}
var Fr = "_reactListening" + Math.random().toString(36).slice(2);
function lr(e) {
  if (!e[Fr]) {
    (e[Fr] = !0),
      Aa.forEach(function (n) {
        n !== "selectionchange" && (lh.has(n) || So(n, !1, e), So(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Fr] || ((t[Fr] = !0), So("selectionchange", !1, t));
  }
}
function Pc(e, t, n, r) {
  switch (fc(t)) {
    case 1:
      var l = vp;
      break;
    case 4:
      l = wp;
      break;
    default:
      l = Zi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Go ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Eo(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = jt(s)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Ga(function () {
    var a = o,
      c = Ji(n),
      d = [];
    e: {
      var m = Rc.get(e);
      if (m !== void 0) {
        var S = es,
          y = e;
        switch (e) {
          case "keypress":
            if (Jr(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = Ip;
            break;
          case "focusin":
            (y = "focus"), (S = ho);
            break;
          case "focusout":
            (y = "blur"), (S = ho);
            break;
          case "beforeblur":
          case "afterblur":
            S = ho;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = ru;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = xp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Dp;
            break;
          case xc:
          case kc:
          case Cc:
            S = _p;
            break;
          case _c:
            S = Mp;
            break;
          case "scroll":
            S = Sp;
            break;
          case "wheel":
            S = $p;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Np;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = ou;
        }
        var g = (t & 4) !== 0,
          w = !g && e === "scroll",
          p = g ? (m !== null ? m + "Capture" : null) : m;
        g = [];
        for (var f = a, h; f !== null; ) {
          h = f;
          var E = h.stateNode;
          if (
            (h.tag === 5 &&
              E !== null &&
              ((h = E),
              p !== null && ((E = Zn(f, p)), E != null && g.push(or(f, E, h)))),
            w)
          )
            break;
          f = f.return;
        }
        0 < g.length &&
          ((m = new S(m, y, null, n, c)), d.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Xo &&
            (y = n.relatedTarget || n.fromElement) &&
            (jt(y) || y[nt]))
        )
          break e;
        if (
          (S || m) &&
          ((m =
            c.window === c
              ? c
              : (m = c.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          S
            ? ((y = n.relatedTarget || n.toElement),
              (S = a),
              (y = y ? jt(y) : null),
              y !== null &&
                ((w = qt(y)), y !== w || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((S = null), (y = a)),
          S !== y)
        ) {
          if (
            ((g = ru),
            (E = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = ou),
              (E = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (w = S == null ? m : tn(S)),
            (h = y == null ? m : tn(y)),
            (m = new g(E, f + "leave", S, n, c)),
            (m.target = w),
            (m.relatedTarget = h),
            (E = null),
            jt(c) === a &&
              ((g = new g(p, f + "enter", y, n, c)),
              (g.target = h),
              (g.relatedTarget = w),
              (E = g)),
            (w = E),
            S && y)
          )
            t: {
              for (g = S, p = y, f = 0, h = g; h; h = Xt(h)) f++;
              for (h = 0, E = p; E; E = Xt(E)) h++;
              for (; 0 < f - h; ) (g = Xt(g)), f--;
              for (; 0 < h - f; ) (p = Xt(p)), h--;
              for (; f--; ) {
                if (g === p || (p !== null && g === p.alternate)) break t;
                (g = Xt(g)), (p = Xt(p));
              }
              g = null;
            }
          else g = null;
          S !== null && yu(d, m, S, g, !1),
            y !== null && w !== null && yu(d, w, y, g, !0);
        }
      }
      e: {
        if (
          ((m = a ? tn(a) : window),
          (S = m.nodeName && m.nodeName.toLowerCase()),
          S === "select" || (S === "input" && m.type === "file"))
        )
          var k = Jp;
        else if (uu(m))
          if (gc) k = Zp;
          else {
            k = Yp;
            var _ = Xp;
          }
        else
          (S = m.nodeName) &&
            S.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (k = Gp);
        if (k && (k = k(e, a))) {
          yc(d, k, n, c);
          break e;
        }
        _ && _(e, m, a),
          e === "focusout" &&
            (_ = m._wrapperState) &&
            _.controlled &&
            m.type === "number" &&
            Wo(m, "number", m.value);
      }
      switch (((_ = a ? tn(a) : window), e)) {
        case "focusin":
          (uu(_) || _.contentEditable === "true") &&
            ((bt = _), (ni = a), (Qn = null));
          break;
        case "focusout":
          Qn = ni = bt = null;
          break;
        case "mousedown":
          ri = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ri = !1), pu(d, n, c);
          break;
        case "selectionchange":
          if (th) break;
        case "keydown":
        case "keyup":
          pu(d, n, c);
      }
      var N;
      if (ns)
        e: {
          switch (e) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
      else
        Zt
          ? hc(e, n) && (O = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
      O &&
        (pc &&
          n.locale !== "ko" &&
          (Zt || O !== "onCompositionStart"
            ? O === "onCompositionEnd" && Zt && (N = dc())
            : ((dt = c),
              (bi = "value" in dt ? dt.value : dt.textContent),
              (Zt = !0))),
        (_ = dl(a, O)),
        0 < _.length &&
          ((O = new lu(O, e, null, n, c)),
          d.push({ event: O, listeners: _ }),
          N ? (O.data = N) : ((N = mc(n)), N !== null && (O.data = N)))),
        (N = Vp ? Wp(e, n) : Qp(e, n)) &&
          ((a = dl(a, "onBeforeInput")),
          0 < a.length &&
            ((c = new lu("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: a }),
            (c.data = N)));
    }
    Nc(d, t);
  });
}
function or(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function dl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Zn(e, n)),
      o != null && r.unshift(or(e, o, l)),
      (o = Zn(e, t)),
      o != null && r.push(or(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Xt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function yu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      l
        ? ((u = Zn(n, o)), u != null && i.unshift(or(n, u, s)))
        : l || ((u = Zn(n, o)), u != null && i.push(or(n, u, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var oh = /\r\n?/g,
  ih = /\u0000|\uFFFD/g;
function gu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      oh,
      `
`
    )
    .replace(ih, "");
}
function Dr(e, t, n) {
  if (((t = gu(t)), gu(e) !== t && n)) throw Error(x(425));
}
function pl() {}
var li = null,
  oi = null;
function ii(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var si = typeof setTimeout == "function" ? setTimeout : void 0,
  sh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  vu = typeof Promise == "function" ? Promise : void 0,
  uh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof vu < "u"
      ? function (e) {
          return vu.resolve(null).then(e).catch(ah);
        }
      : si;
function ah(e) {
  setTimeout(function () {
    throw e;
  });
}
function xo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), tr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  tr(t);
}
function vt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function wu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Cn = Math.random().toString(36).slice(2),
  qe = "__reactFiber$" + Cn,
  ir = "__reactProps$" + Cn,
  nt = "__reactContainer$" + Cn,
  ui = "__reactEvents$" + Cn,
  ch = "__reactListeners$" + Cn,
  fh = "__reactHandles$" + Cn;
function jt(e) {
  var t = e[qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[nt] || n[qe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = wu(e); e !== null; ) {
          if ((n = e[qe])) return n;
          e = wu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function wr(e) {
  return (
    (e = e[qe] || e[nt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function tn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function Dl(e) {
  return e[ir] || null;
}
var ai = [],
  nn = -1;
function Rt(e) {
  return { current: e };
}
function $(e) {
  0 > nn || ((e.current = ai[nn]), (ai[nn] = null), nn--);
}
function M(e, t) {
  nn++, (ai[nn] = e.current), (e.current = t);
}
var Ct = {},
  ce = Rt(Ct),
  ge = Rt(!1),
  Bt = Ct;
function yn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ct;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ve(e) {
  return (e = e.childContextTypes), e != null;
}
function hl() {
  $(ge), $(ce);
}
function Su(e, t, n) {
  if (ce.current !== Ct) throw Error(x(168));
  M(ce, t), M(ge, n);
}
function Tc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(x(108, Xd(e) || "Unknown", l));
  return Q({}, n, r);
}
function ml(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ct),
    (Bt = ce.current),
    M(ce, e),
    M(ge, ge.current),
    !0
  );
}
function Eu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = Tc(e, t, Bt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(ge),
      $(ce),
      M(ce, e))
    : $(ge),
    M(ge, n);
}
var Ge = null,
  Ul = !1,
  ko = !1;
function Oc(e) {
  Ge === null ? (Ge = [e]) : Ge.push(e);
}
function dh(e) {
  (Ul = !0), Oc(e);
}
function Nt() {
  if (!ko && Ge !== null) {
    ko = !0;
    var e = 0,
      t = U;
    try {
      var n = Ge;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ge = null), (Ul = !1);
    } catch (l) {
      throw (Ge !== null && (Ge = Ge.slice(e + 1)), tc(Xi, Nt), l);
    } finally {
      (U = t), (ko = !1);
    }
  }
  return null;
}
var rn = [],
  ln = 0,
  yl = null,
  gl = 0,
  Oe = [],
  Le = 0,
  $t = null,
  Ze = 1,
  be = "";
function Ot(e, t) {
  (rn[ln++] = gl), (rn[ln++] = yl), (yl = e), (gl = t);
}
function Lc(e, t, n) {
  (Oe[Le++] = Ze), (Oe[Le++] = be), (Oe[Le++] = $t), ($t = e);
  var r = Ze;
  e = be;
  var l = 32 - Be(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Be(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Ze = (1 << (32 - Be(t) + l)) | (n << l) | r),
      (be = o + e);
  } else (Ze = (1 << o) | (n << l) | r), (be = e);
}
function ls(e) {
  e.return !== null && (Ot(e, 1), Lc(e, 1, 0));
}
function os(e) {
  for (; e === yl; )
    (yl = rn[--ln]), (rn[ln] = null), (gl = rn[--ln]), (rn[ln] = null);
  for (; e === $t; )
    ($t = Oe[--Le]),
      (Oe[Le] = null),
      (be = Oe[--Le]),
      (Oe[Le] = null),
      (Ze = Oe[--Le]),
      (Oe[Le] = null);
}
var _e = null,
  Ce = null,
  H = !1,
  Me = null;
function jc(e, t) {
  var n = je(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function xu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (_e = e), (Ce = vt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (_e = e), (Ce = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = $t !== null ? { id: Ze, overflow: be } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (_e = e),
            (Ce = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ci(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function fi(e) {
  if (H) {
    var t = Ce;
    if (t) {
      var n = t;
      if (!xu(e, t)) {
        if (ci(e)) throw Error(x(418));
        t = vt(n.nextSibling);
        var r = _e;
        t && xu(e, t)
          ? jc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (_e = e));
      }
    } else {
      if (ci(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (_e = e);
    }
  }
}
function ku(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  _e = e;
}
function Ur(e) {
  if (e !== _e) return !1;
  if (!H) return ku(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ii(e.type, e.memoizedProps))),
    t && (t = Ce))
  ) {
    if (ci(e)) throw (zc(), Error(x(418)));
    for (; t; ) jc(e, t), (t = vt(t.nextSibling));
  }
  if ((ku(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ce = vt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ce = null;
    }
  } else Ce = _e ? vt(e.stateNode.nextSibling) : null;
  return !0;
}
function zc() {
  for (var e = Ce; e; ) e = vt(e.nextSibling);
}
function gn() {
  (Ce = _e = null), (H = !1);
}
function is(e) {
  Me === null ? (Me = [e]) : Me.push(e);
}
var ph = ot.ReactCurrentBatchConfig;
function zn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var s = l.refs;
            i === null ? delete s[o] : (s[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function Mr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Cu(e) {
  var t = e._init;
  return t(e._payload);
}
function Ic(e) {
  function t(p, f) {
    if (e) {
      var h = p.deletions;
      h === null ? ((p.deletions = [f]), (p.flags |= 16)) : h.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), (f = f.sibling);
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function l(p, f) {
    return (p = xt(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, f, h) {
    return (
      (p.index = h),
      e
        ? ((h = p.alternate),
          h !== null
            ? ((h = h.index), h < f ? ((p.flags |= 2), f) : h)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, f, h, E) {
    return f === null || f.tag !== 6
      ? ((f = Oo(h, p.mode, E)), (f.return = p), f)
      : ((f = l(f, h)), (f.return = p), f);
  }
  function u(p, f, h, E) {
    var k = h.type;
    return k === Gt
      ? c(p, f, h.props.children, E, h.key)
      : f !== null &&
        (f.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === ut &&
            Cu(k) === f.type))
      ? ((E = l(f, h.props)), (E.ref = zn(p, f, h)), (E.return = p), E)
      : ((E = tl(h.type, h.key, h.props, null, p.mode, E)),
        (E.ref = zn(p, f, h)),
        (E.return = p),
        E);
  }
  function a(p, f, h, E) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== h.containerInfo ||
      f.stateNode.implementation !== h.implementation
      ? ((f = Lo(h, p.mode, E)), (f.return = p), f)
      : ((f = l(f, h.children || [])), (f.return = p), f);
  }
  function c(p, f, h, E, k) {
    return f === null || f.tag !== 7
      ? ((f = Dt(h, p.mode, E, k)), (f.return = p), f)
      : ((f = l(f, h)), (f.return = p), f);
  }
  function d(p, f, h) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Oo("" + f, p.mode, h)), (f.return = p), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Pr:
          return (
            (h = tl(f.type, f.key, f.props, null, p.mode, h)),
            (h.ref = zn(p, null, f)),
            (h.return = p),
            h
          );
        case Yt:
          return (f = Lo(f, p.mode, h)), (f.return = p), f;
        case ut:
          var E = f._init;
          return d(p, E(f._payload), h);
      }
      if (Un(f) || Pn(f))
        return (f = Dt(f, p.mode, h, null)), (f.return = p), f;
      Mr(p, f);
    }
    return null;
  }
  function m(p, f, h, E) {
    var k = f !== null ? f.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return k !== null ? null : s(p, f, "" + h, E);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Pr:
          return h.key === k ? u(p, f, h, E) : null;
        case Yt:
          return h.key === k ? a(p, f, h, E) : null;
        case ut:
          return (k = h._init), m(p, f, k(h._payload), E);
      }
      if (Un(h) || Pn(h)) return k !== null ? null : c(p, f, h, E, null);
      Mr(p, h);
    }
    return null;
  }
  function S(p, f, h, E, k) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (p = p.get(h) || null), s(f, p, "" + E, k);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Pr:
          return (p = p.get(E.key === null ? h : E.key) || null), u(f, p, E, k);
        case Yt:
          return (p = p.get(E.key === null ? h : E.key) || null), a(f, p, E, k);
        case ut:
          var _ = E._init;
          return S(p, f, h, _(E._payload), k);
      }
      if (Un(E) || Pn(E)) return (p = p.get(h) || null), c(f, p, E, k, null);
      Mr(f, E);
    }
    return null;
  }
  function y(p, f, h, E) {
    for (
      var k = null, _ = null, N = f, O = (f = 0), L = null;
      N !== null && O < h.length;
      O++
    ) {
      N.index > O ? ((L = N), (N = null)) : (L = N.sibling);
      var j = m(p, N, h[O], E);
      if (j === null) {
        N === null && (N = L);
        break;
      }
      e && N && j.alternate === null && t(p, N),
        (f = o(j, f, O)),
        _ === null ? (k = j) : (_.sibling = j),
        (_ = j),
        (N = L);
    }
    if (O === h.length) return n(p, N), H && Ot(p, O), k;
    if (N === null) {
      for (; O < h.length; O++)
        (N = d(p, h[O], E)),
          N !== null &&
            ((f = o(N, f, O)), _ === null ? (k = N) : (_.sibling = N), (_ = N));
      return H && Ot(p, O), k;
    }
    for (N = r(p, N); O < h.length; O++)
      (L = S(N, p, O, h[O], E)),
        L !== null &&
          (e && L.alternate !== null && N.delete(L.key === null ? O : L.key),
          (f = o(L, f, O)),
          _ === null ? (k = L) : (_.sibling = L),
          (_ = L));
    return (
      e &&
        N.forEach(function (K) {
          return t(p, K);
        }),
      H && Ot(p, O),
      k
    );
  }
  function g(p, f, h, E) {
    var k = Pn(h);
    if (typeof k != "function") throw Error(x(150));
    if (((h = k.call(h)), h == null)) throw Error(x(151));
    for (
      var _ = (k = null), N = f, O = (f = 0), L = null, j = h.next();
      N !== null && !j.done;
      O++, j = h.next()
    ) {
      N.index > O ? ((L = N), (N = null)) : (L = N.sibling);
      var K = m(p, N, j.value, E);
      if (K === null) {
        N === null && (N = L);
        break;
      }
      e && N && K.alternate === null && t(p, N),
        (f = o(K, f, O)),
        _ === null ? (k = K) : (_.sibling = K),
        (_ = K),
        (N = L);
    }
    if (j.done) return n(p, N), H && Ot(p, O), k;
    if (N === null) {
      for (; !j.done; O++, j = h.next())
        (j = d(p, j.value, E)),
          j !== null &&
            ((f = o(j, f, O)), _ === null ? (k = j) : (_.sibling = j), (_ = j));
      return H && Ot(p, O), k;
    }
    for (N = r(p, N); !j.done; O++, j = h.next())
      (j = S(N, p, O, j.value, E)),
        j !== null &&
          (e && j.alternate !== null && N.delete(j.key === null ? O : j.key),
          (f = o(j, f, O)),
          _ === null ? (k = j) : (_.sibling = j),
          (_ = j));
    return (
      e &&
        N.forEach(function (xe) {
          return t(p, xe);
        }),
      H && Ot(p, O),
      k
    );
  }
  function w(p, f, h, E) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Gt &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Pr:
          e: {
            for (var k = h.key, _ = f; _ !== null; ) {
              if (_.key === k) {
                if (((k = h.type), k === Gt)) {
                  if (_.tag === 7) {
                    n(p, _.sibling),
                      (f = l(_, h.props.children)),
                      (f.return = p),
                      (p = f);
                    break e;
                  }
                } else if (
                  _.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === ut &&
                    Cu(k) === _.type)
                ) {
                  n(p, _.sibling),
                    (f = l(_, h.props)),
                    (f.ref = zn(p, _, h)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, _);
                break;
              } else t(p, _);
              _ = _.sibling;
            }
            h.type === Gt
              ? ((f = Dt(h.props.children, p.mode, E, h.key)),
                (f.return = p),
                (p = f))
              : ((E = tl(h.type, h.key, h.props, null, p.mode, E)),
                (E.ref = zn(p, f, h)),
                (E.return = p),
                (p = E));
          }
          return i(p);
        case Yt:
          e: {
            for (_ = h.key; f !== null; ) {
              if (f.key === _)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === h.containerInfo &&
                  f.stateNode.implementation === h.implementation
                ) {
                  n(p, f.sibling),
                    (f = l(f, h.children || [])),
                    (f.return = p),
                    (p = f);
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            (f = Lo(h, p.mode, E)), (f.return = p), (p = f);
          }
          return i(p);
        case ut:
          return (_ = h._init), w(p, f, _(h._payload), E);
      }
      if (Un(h)) return y(p, f, h, E);
      if (Pn(h)) return g(p, f, h, E);
      Mr(p, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = l(f, h)), (f.return = p), (p = f))
          : (n(p, f), (f = Oo(h, p.mode, E)), (f.return = p), (p = f)),
        i(p))
      : n(p, f);
  }
  return w;
}
var vn = Ic(!0),
  Ac = Ic(!1),
  vl = Rt(null),
  wl = null,
  on = null,
  ss = null;
function us() {
  ss = on = wl = null;
}
function as(e) {
  var t = vl.current;
  $(vl), (e._currentValue = t);
}
function di(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function pn(e, t) {
  (wl = e),
    (ss = on = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ye = !0), (e.firstContext = null));
}
function Ie(e) {
  var t = e._currentValue;
  if (ss !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), on === null)) {
      if (wl === null) throw Error(x(308));
      (on = e), (wl.dependencies = { lanes: 0, firstContext: e });
    } else on = on.next = e;
  return t;
}
var zt = null;
function cs(e) {
  zt === null ? (zt = [e]) : zt.push(e);
}
function Fc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), cs(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    rt(e, r)
  );
}
function rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var at = !1;
function fs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Dc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function et(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function wt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      rt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), cs(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    rt(e, n)
  );
}
function Xr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yi(e, n);
  }
}
function _u(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Sl(e, t, n, r) {
  var l = e.updateQueue;
  at = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var u = s,
      a = u.next;
    (u.next = null), i === null ? (o = a) : (i.next = a), (i = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== i &&
        (s === null ? (c.firstBaseUpdate = a) : (s.next = a),
        (c.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var d = l.baseState;
    (i = 0), (c = a = u = null), (s = o);
    do {
      var m = s.lane,
        S = s.eventTime;
      if ((r & m) === m) {
        c !== null &&
          (c = c.next =
            {
              eventTime: S,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var y = e,
            g = s;
          switch (((m = t), (S = n), g.tag)) {
            case 1:
              if (((y = g.payload), typeof y == "function")) {
                d = y.call(S, d, m);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = g.payload),
                (m = typeof y == "function" ? y.call(S, d, m) : y),
                m == null)
              )
                break e;
              d = Q({}, d, m);
              break e;
            case 2:
              at = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [s]) : m.push(s));
      } else
        (S = {
          eventTime: S,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((a = c = S), (u = d)) : (c = c.next = S),
          (i |= m);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (u = d),
      (l.baseState = u),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = c),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Vt |= i), (e.lanes = i), (e.memoizedState = d);
  }
}
function Ru(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(x(191, l));
        l.call(r);
      }
    }
}
var Sr = {},
  Xe = Rt(Sr),
  sr = Rt(Sr),
  ur = Rt(Sr);
function It(e) {
  if (e === Sr) throw Error(x(174));
  return e;
}
function ds(e, t) {
  switch ((M(ur, t), M(sr, e), M(Xe, Sr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ko(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ko(t, e));
  }
  $(Xe), M(Xe, t);
}
function wn() {
  $(Xe), $(sr), $(ur);
}
function Uc(e) {
  It(ur.current);
  var t = It(Xe.current),
    n = Ko(t, e.type);
  t !== n && (M(sr, e), M(Xe, n));
}
function ps(e) {
  sr.current === e && ($(Xe), $(sr));
}
var V = Rt(0);
function El(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Co = [];
function hs() {
  for (var e = 0; e < Co.length; e++)
    Co[e]._workInProgressVersionPrimary = null;
  Co.length = 0;
}
var Yr = ot.ReactCurrentDispatcher,
  _o = ot.ReactCurrentBatchConfig,
  Ht = 0,
  W = null,
  b = null,
  ne = null,
  xl = !1,
  Kn = !1,
  ar = 0,
  hh = 0;
function se() {
  throw Error(x(321));
}
function ms(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!He(e[n], t[n])) return !1;
  return !0;
}
function ys(e, t, n, r, l, o) {
  if (
    ((Ht = o),
    (W = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Yr.current = e === null || e.memoizedState === null ? vh : wh),
    (e = n(r, l)),
    Kn)
  ) {
    o = 0;
    do {
      if (((Kn = !1), (ar = 0), 25 <= o)) throw Error(x(301));
      (o += 1),
        (ne = b = null),
        (t.updateQueue = null),
        (Yr.current = Sh),
        (e = n(r, l));
    } while (Kn);
  }
  if (
    ((Yr.current = kl),
    (t = b !== null && b.next !== null),
    (Ht = 0),
    (ne = b = W = null),
    (xl = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function gs() {
  var e = ar !== 0;
  return (ar = 0), e;
}
function Ke() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ne === null ? (W.memoizedState = ne = e) : (ne = ne.next = e), ne;
}
function Ae() {
  if (b === null) {
    var e = W.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = b.next;
  var t = ne === null ? W.memoizedState : ne.next;
  if (t !== null) (ne = t), (b = e);
  else {
    if (e === null) throw Error(x(310));
    (b = e),
      (e = {
        memoizedState: b.memoizedState,
        baseState: b.baseState,
        baseQueue: b.baseQueue,
        queue: b.queue,
        next: null,
      }),
      ne === null ? (W.memoizedState = ne = e) : (ne = ne.next = e);
  }
  return ne;
}
function cr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ro(e) {
  var t = Ae(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = b,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var s = (i = null),
      u = null,
      a = o;
    do {
      var c = a.lane;
      if ((Ht & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var d = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = d), (i = r)) : (u = u.next = d),
          (W.lanes |= c),
          (Vt |= c);
      }
      a = a.next;
    } while (a !== null && a !== o);
    u === null ? (i = r) : (u.next = s),
      He(r, t.memoizedState) || (ye = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (W.lanes |= o), (Vt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function No(e) {
  var t = Ae(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    He(o, t.memoizedState) || (ye = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Mc() {}
function Bc(e, t) {
  var n = W,
    r = Ae(),
    l = t(),
    o = !He(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ye = !0)),
    (r = r.queue),
    vs(Vc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ne !== null && ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      fr(9, Hc.bind(null, n, r, l, t), void 0, null),
      re === null)
    )
      throw Error(x(349));
    Ht & 30 || $c(n, t, l);
  }
  return l;
}
function $c(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Hc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Wc(t) && Qc(e);
}
function Vc(e, t, n) {
  return n(function () {
    Wc(t) && Qc(e);
  });
}
function Wc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !He(e, n);
  } catch {
    return !0;
  }
}
function Qc(e) {
  var t = rt(e, 1);
  t !== null && $e(t, e, 1, -1);
}
function Nu(e) {
  var t = Ke();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = gh.bind(null, W, e)),
    [t.memoizedState, e]
  );
}
function fr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Kc() {
  return Ae().memoizedState;
}
function Gr(e, t, n, r) {
  var l = Ke();
  (W.flags |= e),
    (l.memoizedState = fr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ml(e, t, n, r) {
  var l = Ae();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (b !== null) {
    var i = b.memoizedState;
    if (((o = i.destroy), r !== null && ms(r, i.deps))) {
      l.memoizedState = fr(t, n, o, r);
      return;
    }
  }
  (W.flags |= e), (l.memoizedState = fr(1 | t, n, o, r));
}
function Pu(e, t) {
  return Gr(8390656, 8, e, t);
}
function vs(e, t) {
  return Ml(2048, 8, e, t);
}
function qc(e, t) {
  return Ml(4, 2, e, t);
}
function Jc(e, t) {
  return Ml(4, 4, e, t);
}
function Xc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Yc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ml(4, 4, Xc.bind(null, t, e), n)
  );
}
function ws() {}
function Gc(e, t) {
  var n = Ae();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ms(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Zc(e, t) {
  var n = Ae();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ms(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function bc(e, t, n) {
  return Ht & 21
    ? (He(n, t) || ((n = lc()), (W.lanes |= n), (Vt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ye = !0)), (e.memoizedState = n));
}
function mh(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = _o.transition;
  _o.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (_o.transition = r);
  }
}
function ef() {
  return Ae().memoizedState;
}
function yh(e, t, n) {
  var r = Et(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    tf(e))
  )
    nf(t, n);
  else if (((n = Fc(e, t, n, r)), n !== null)) {
    var l = de();
    $e(n, e, r, l), rf(n, t, r);
  }
}
function gh(e, t, n) {
  var r = Et(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (tf(e)) nf(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), He(s, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), cs(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Fc(e, t, l, r)),
      n !== null && ((l = de()), $e(n, e, r, l), rf(n, t, r));
  }
}
function tf(e) {
  var t = e.alternate;
  return e === W || (t !== null && t === W);
}
function nf(e, t) {
  Kn = xl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function rf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yi(e, n);
  }
}
var kl = {
    readContext: Ie,
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
    unstable_isNewReconciler: !1,
  },
  vh = {
    readContext: Ie,
    useCallback: function (e, t) {
      return (Ke().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ie,
    useEffect: Pu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Gr(4194308, 4, Xc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Gr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Gr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ke();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ke();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = yh.bind(null, W, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ke();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Nu,
    useDebugValue: ws,
    useDeferredValue: function (e) {
      return (Ke().memoizedState = e);
    },
    useTransition: function () {
      var e = Nu(!1),
        t = e[0];
      return (e = mh.bind(null, e[1])), (Ke().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = W,
        l = Ke();
      if (H) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), re === null)) throw Error(x(349));
        Ht & 30 || $c(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Pu(Vc.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        fr(9, Hc.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ke(),
        t = re.identifierPrefix;
      if (H) {
        var n = be,
          r = Ze;
        (n = (r & ~(1 << (32 - Be(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ar++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = hh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  wh = {
    readContext: Ie,
    useCallback: Gc,
    useContext: Ie,
    useEffect: vs,
    useImperativeHandle: Yc,
    useInsertionEffect: qc,
    useLayoutEffect: Jc,
    useMemo: Zc,
    useReducer: Ro,
    useRef: Kc,
    useState: function () {
      return Ro(cr);
    },
    useDebugValue: ws,
    useDeferredValue: function (e) {
      var t = Ae();
      return bc(t, b.memoizedState, e);
    },
    useTransition: function () {
      var e = Ro(cr)[0],
        t = Ae().memoizedState;
      return [e, t];
    },
    useMutableSource: Mc,
    useSyncExternalStore: Bc,
    useId: ef,
    unstable_isNewReconciler: !1,
  },
  Sh = {
    readContext: Ie,
    useCallback: Gc,
    useContext: Ie,
    useEffect: vs,
    useImperativeHandle: Yc,
    useInsertionEffect: qc,
    useLayoutEffect: Jc,
    useMemo: Zc,
    useReducer: No,
    useRef: Kc,
    useState: function () {
      return No(cr);
    },
    useDebugValue: ws,
    useDeferredValue: function (e) {
      var t = Ae();
      return b === null ? (t.memoizedState = e) : bc(t, b.memoizedState, e);
    },
    useTransition: function () {
      var e = No(cr)[0],
        t = Ae().memoizedState;
      return [e, t];
    },
    useMutableSource: Mc,
    useSyncExternalStore: Bc,
    useId: ef,
    unstable_isNewReconciler: !1,
  };
function De(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function pi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Bl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? qt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = Et(e),
      o = et(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = wt(e, o, l)),
      t !== null && ($e(t, e, l, r), Xr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = Et(e),
      o = et(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = wt(e, o, l)),
      t !== null && ($e(t, e, l, r), Xr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = Et(e),
      l = et(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = wt(e, l, r)),
      t !== null && ($e(t, e, r, n), Xr(t, e, r));
  },
};
function Tu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !rr(n, r) || !rr(l, o)
      : !0
  );
}
function lf(e, t, n) {
  var r = !1,
    l = Ct,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ie(o))
      : ((l = ve(t) ? Bt : ce.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? yn(e, l) : Ct)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Bl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ou(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Bl.enqueueReplaceState(t, t.state, null);
}
function hi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), fs(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ie(o))
    : ((o = ve(t) ? Bt : ce.current), (l.context = yn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (pi(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Bl.enqueueReplaceState(l, l.state, null),
      Sl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Sn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Jd(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Po(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function mi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Eh = typeof WeakMap == "function" ? WeakMap : Map;
function of(e, t, n) {
  (n = et(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      _l || ((_l = !0), (_i = r)), mi(e, t);
    }),
    n
  );
}
function sf(e, t, n) {
  (n = et(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        mi(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        mi(e, t),
          typeof r != "function" &&
            (St === null ? (St = new Set([this])) : St.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Lu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Eh();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Ah.bind(null, e, t, n)), t.then(e, e));
}
function ju(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function zu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = et(-1, 1)), (t.tag = 2), wt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var xh = ot.ReactCurrentOwner,
  ye = !1;
function fe(e, t, n, r) {
  t.child = e === null ? Ac(t, null, n, r) : vn(t, e.child, n, r);
}
function Iu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    pn(t, l),
    (r = ys(e, t, n, r, o, l)),
    (n = gs()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        lt(e, t, l))
      : (H && n && ls(t), (t.flags |= 1), fe(e, t, r, l), t.child)
  );
}
function Au(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ns(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), uf(e, t, o, r, l))
      : ((e = tl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : rr), n(i, r) && e.ref === t.ref)
    )
      return lt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = xt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function uf(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (rr(o, r) && e.ref === t.ref)
      if (((ye = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ye = !0);
      else return (t.lanes = e.lanes), lt(e, t, l);
  }
  return yi(e, t, n, r, l);
}
function af(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        M(un, ke),
        (ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          M(un, ke),
          (ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        M(un, ke),
        (ke |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      M(un, ke),
      (ke |= r);
  return fe(e, t, l, n), t.child;
}
function cf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function yi(e, t, n, r, l) {
  var o = ve(n) ? Bt : ce.current;
  return (
    (o = yn(t, o)),
    pn(t, l),
    (n = ys(e, t, n, r, o, l)),
    (r = gs()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        lt(e, t, l))
      : (H && r && ls(t), (t.flags |= 1), fe(e, t, n, l), t.child)
  );
}
function Fu(e, t, n, r, l) {
  if (ve(n)) {
    var o = !0;
    ml(t);
  } else o = !1;
  if ((pn(t, l), t.stateNode === null))
    Zr(e, t), lf(t, n, r), hi(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var u = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Ie(a))
      : ((a = ve(n) ? Bt : ce.current), (a = yn(t, a)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || u !== a) && Ou(t, i, r, a)),
      (at = !1);
    var m = t.memoizedState;
    (i.state = m),
      Sl(t, r, i, l),
      (u = t.memoizedState),
      s !== r || m !== u || ge.current || at
        ? (typeof c == "function" && (pi(t, n, c, r), (u = t.memoizedState)),
          (s = at || Tu(t, n, s, r, m, u, a))
            ? (d ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = a),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Dc(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : De(t.type, s)),
      (i.props = a),
      (d = t.pendingProps),
      (m = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ie(u))
        : ((u = ve(n) ? Bt : ce.current), (u = yn(t, u)));
    var S = n.getDerivedStateFromProps;
    (c =
      typeof S == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== d || m !== u) && Ou(t, i, r, u)),
      (at = !1),
      (m = t.memoizedState),
      (i.state = m),
      Sl(t, r, i, l);
    var y = t.memoizedState;
    s !== d || m !== y || ge.current || at
      ? (typeof S == "function" && (pi(t, n, S, r), (y = t.memoizedState)),
        (a = at || Tu(t, n, a, r, m, y, u) || !1)
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, y, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, y, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (i.props = r),
        (i.state = y),
        (i.context = u),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return gi(e, t, n, r, o, l);
}
function gi(e, t, n, r, l, o) {
  cf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Eu(t, n, !1), lt(e, t, o);
  (r = t.stateNode), (xh.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = vn(t, e.child, null, o)), (t.child = vn(t, null, s, o)))
      : fe(e, t, s, o),
    (t.memoizedState = r.state),
    l && Eu(t, n, !0),
    t.child
  );
}
function ff(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Su(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Su(e, t.context, !1),
    ds(e, t.containerInfo);
}
function Du(e, t, n, r, l) {
  return gn(), is(l), (t.flags |= 256), fe(e, t, n, r), t.child;
}
var vi = { dehydrated: null, treeContext: null, retryLane: 0 };
function wi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function df(e, t, n) {
  var r = t.pendingProps,
    l = V.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    M(V, l & 1),
    e === null)
  )
    return (
      fi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Vl(i, r, 0, null)),
              (e = Dt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = wi(n)),
              (t.memoizedState = vi),
              e)
            : Ss(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return kh(e, t, i, r, s, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (s = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = xt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (o = xt(s, o)) : ((o = Dt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? wi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = vi),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = xt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ss(e, t) {
  return (
    (t = Vl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Br(e, t, n, r) {
  return (
    r !== null && is(r),
    vn(t, e.child, null, n),
    (e = Ss(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function kh(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Po(Error(x(422)))), Br(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Vl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Dt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && vn(t, e.child, null, i),
        (t.child.memoizedState = wi(i)),
        (t.memoizedState = vi),
        o);
  if (!(t.mode & 1)) return Br(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(x(419))), (r = Po(o, r, void 0)), Br(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), ye || s)) {
    if (((r = re), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), rt(e, l), $e(r, e, l, -1));
    }
    return Rs(), (r = Po(Error(x(421)))), Br(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Fh.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ce = vt(l.nextSibling)),
      (_e = t),
      (H = !0),
      (Me = null),
      e !== null &&
        ((Oe[Le++] = Ze),
        (Oe[Le++] = be),
        (Oe[Le++] = $t),
        (Ze = e.id),
        (be = e.overflow),
        ($t = t)),
      (t = Ss(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Uu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), di(e.return, t, n);
}
function To(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function pf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((fe(e, t, r.children, n), (r = V.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Uu(e, n, t);
        else if (e.tag === 19) Uu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((M(V, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && El(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          To(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && El(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        To(t, !0, n, null, o);
        break;
      case "together":
        To(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Zr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function lt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Vt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = xt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = xt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ch(e, t, n) {
  switch (t.tag) {
    case 3:
      ff(t), gn();
      break;
    case 5:
      Uc(t);
      break;
    case 1:
      ve(t.type) && ml(t);
      break;
    case 4:
      ds(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      M(vl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (M(V, V.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? df(e, t, n)
          : (M(V, V.current & 1),
            (e = lt(e, t, n)),
            e !== null ? e.sibling : null);
      M(V, V.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return pf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        M(V, V.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), af(e, t, n);
  }
  return lt(e, t, n);
}
var hf, Si, mf, yf;
hf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Si = function () {};
mf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), It(Xe.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Ho(e, l)), (r = Ho(e, r)), (o = []);
        break;
      case "select":
        (l = Q({}, l, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Qo(e, l)), (r = Qo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = pl);
    }
    qo(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var s = l[a];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Yn.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((s = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && u !== s && (u != null || s != null))
      )
        if (a === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                s[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (o = o || []).push(a, u))
            : a === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(a, "" + u)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Yn.hasOwnProperty(a)
                ? (u != null && a === "onScroll" && B("scroll", e),
                  o || s === u || (o = []))
                : (o = o || []).push(a, u));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
yf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function In(e, t) {
  if (!H)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function _h(e, t, n) {
  var r = t.pendingProps;
  switch ((os(t), t.tag)) {
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
      return ve(t.type) && hl(), ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        wn(),
        $(ge),
        $(ce),
        hs(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ur(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Me !== null && (Pi(Me), (Me = null)))),
        Si(e, t),
        ue(t),
        null
      );
    case 5:
      ps(t);
      var l = It(ur.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        mf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return ue(t), null;
        }
        if (((e = It(Xe.current)), Ur(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[qe] = t), (r[ir] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Bn.length; l++) B(Bn[l], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              qs(r, o), B("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                B("invalid", r);
              break;
            case "textarea":
              Xs(r, o), B("invalid", r);
          }
          qo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var s = o[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Dr(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Dr(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : Yn.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  B("scroll", r);
            }
          switch (n) {
            case "input":
              Tr(r), Js(r, o, !0);
              break;
            case "textarea":
              Tr(r), Ys(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = pl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Va(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[qe] = t),
            (e[ir] = r),
            hf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Jo(n, r)), n)) {
              case "dialog":
                B("cancel", e), B("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Bn.length; l++) B(Bn[l], e);
                l = r;
                break;
              case "source":
                B("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                B("error", e), B("load", e), (l = r);
                break;
              case "details":
                B("toggle", e), (l = r);
                break;
              case "input":
                qs(e, r), (l = Ho(e, r)), B("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Q({}, r, { value: void 0 })),
                  B("invalid", e);
                break;
              case "textarea":
                Xs(e, r), (l = Qo(e, r)), B("invalid", e);
                break;
              default:
                l = r;
            }
            qo(n, l), (s = l);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var u = s[o];
                o === "style"
                  ? Ka(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Wa(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Gn(e, u)
                    : typeof u == "number" && Gn(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Yn.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && B("scroll", e)
                      : u != null && Wi(e, o, u, i));
              }
            switch (n) {
              case "input":
                Tr(e), Js(e, r, !1);
                break;
              case "textarea":
                Tr(e), Ys(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? an(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      an(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = pl);
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
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ue(t), null;
    case 6:
      if (e && t.stateNode != null) yf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = It(ur.current)), It(Xe.current), Ur(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[qe] = t),
            (o = r.nodeValue !== n) && ((e = _e), e !== null))
          )
            switch (e.tag) {
              case 3:
                Dr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Dr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[qe] = t),
            (t.stateNode = r);
      }
      return ue(t), null;
    case 13:
      if (
        ($(V),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && Ce !== null && t.mode & 1 && !(t.flags & 128))
          zc(), gn(), (t.flags |= 98560), (o = !1);
        else if (((o = Ur(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(x(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(x(317));
            o[qe] = t;
          } else
            gn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ue(t), (o = !1);
        } else Me !== null && (Pi(Me), (Me = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || V.current & 1 ? ee === 0 && (ee = 3) : Rs())),
          t.updateQueue !== null && (t.flags |= 4),
          ue(t),
          null);
    case 4:
      return (
        wn(), Si(e, t), e === null && lr(t.stateNode.containerInfo), ue(t), null
      );
    case 10:
      return as(t.type._context), ue(t), null;
    case 17:
      return ve(t.type) && hl(), ue(t), null;
    case 19:
      if (($(V), (o = t.memoizedState), o === null)) return ue(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) In(o, !1);
        else {
          if (ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = El(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    In(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return M(V, (V.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Y() > En &&
            ((t.flags |= 128), (r = !0), In(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = El(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              In(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !H)
            )
              return ue(t), null;
          } else
            2 * Y() - o.renderingStartTime > En &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), In(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Y()),
          (t.sibling = null),
          (n = V.current),
          M(V, r ? (n & 1) | 2 : n & 1),
          t)
        : (ue(t), null);
    case 22:
    case 23:
      return (
        _s(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ke & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function Rh(e, t) {
  switch ((os(t), t.tag)) {
    case 1:
      return (
        ve(t.type) && hl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        wn(),
        $(ge),
        $(ce),
        hs(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ps(t), null;
    case 13:
      if (($(V), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        gn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return $(V), null;
    case 4:
      return wn(), null;
    case 10:
      return as(t.type._context), null;
    case 22:
    case 23:
      return _s(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var $r = !1,
  ae = !1,
  Nh = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function sn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        q(e, t, r);
      }
    else n.current = null;
}
function Ei(e, t, n) {
  try {
    n();
  } catch (r) {
    q(e, t, r);
  }
}
var Mu = !1;
function Ph(e, t) {
  if (((li = cl), (e = Sc()), rs(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            u = -1,
            a = 0,
            c = 0,
            d = e,
            m = null;
          t: for (;;) {
            for (
              var S;
              d !== n || (l !== 0 && d.nodeType !== 3) || (s = i + l),
                d !== o || (r !== 0 && d.nodeType !== 3) || (u = i + r),
                d.nodeType === 3 && (i += d.nodeValue.length),
                (S = d.firstChild) !== null;

            )
              (m = d), (d = S);
            for (;;) {
              if (d === e) break t;
              if (
                (m === n && ++a === l && (s = i),
                m === o && ++c === r && (u = i),
                (S = d.nextSibling) !== null)
              )
                break;
              (d = m), (m = d.parentNode);
            }
            d = S;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (oi = { focusedElem: e, selectionRange: n }, cl = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (P = e);
    else
      for (; P !== null; ) {
        t = P;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var g = y.memoizedProps,
                    w = y.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : De(t.type, g),
                      w
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (E) {
          q(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (P = e);
          break;
        }
        P = t.return;
      }
  return (y = Mu), (Mu = !1), y;
}
function qn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Ei(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function $l(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function xi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function gf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), gf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[qe], delete t[ir], delete t[ui], delete t[ch], delete t[fh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function vf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Bu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || vf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ki(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = pl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ki(e, t, n), e = e.sibling; e !== null; ) ki(e, t, n), (e = e.sibling);
}
function Ci(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ci(e, t, n), e = e.sibling; e !== null; ) Ci(e, t, n), (e = e.sibling);
}
var le = null,
  Ue = !1;
function it(e, t, n) {
  for (n = n.child; n !== null; ) wf(e, t, n), (n = n.sibling);
}
function wf(e, t, n) {
  if (Je && typeof Je.onCommitFiberUnmount == "function")
    try {
      Je.onCommitFiberUnmount(zl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ae || sn(n, t);
    case 6:
      var r = le,
        l = Ue;
      (le = null),
        it(e, t, n),
        (le = r),
        (Ue = l),
        le !== null &&
          (Ue
            ? ((e = le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null &&
        (Ue
          ? ((e = le),
            (n = n.stateNode),
            e.nodeType === 8
              ? xo(e.parentNode, n)
              : e.nodeType === 1 && xo(e, n),
            tr(e))
          : xo(le, n.stateNode));
      break;
    case 4:
      (r = le),
        (l = Ue),
        (le = n.stateNode.containerInfo),
        (Ue = !0),
        it(e, t, n),
        (le = r),
        (Ue = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ae &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Ei(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      it(e, t, n);
      break;
    case 1:
      if (
        !ae &&
        (sn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          q(n, t, s);
        }
      it(e, t, n);
      break;
    case 21:
      it(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ae = (r = ae) || n.memoizedState !== null), it(e, t, n), (ae = r))
        : it(e, t, n);
      break;
    default:
      it(e, t, n);
  }
}
function $u(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Nh()),
      t.forEach(function (r) {
        var l = Dh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Fe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (le = s.stateNode), (Ue = !1);
              break e;
            case 3:
              (le = s.stateNode.containerInfo), (Ue = !0);
              break e;
            case 4:
              (le = s.stateNode.containerInfo), (Ue = !0);
              break e;
          }
          s = s.return;
        }
        if (le === null) throw Error(x(160));
        wf(o, i, l), (le = null), (Ue = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (a) {
        q(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Sf(t, e), (t = t.sibling);
}
function Sf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Fe(t, e), Qe(e), r & 4)) {
        try {
          qn(3, e, e.return), $l(3, e);
        } catch (g) {
          q(e, e.return, g);
        }
        try {
          qn(5, e, e.return);
        } catch (g) {
          q(e, e.return, g);
        }
      }
      break;
    case 1:
      Fe(t, e), Qe(e), r & 512 && n !== null && sn(n, n.return);
      break;
    case 5:
      if (
        (Fe(t, e),
        Qe(e),
        r & 512 && n !== null && sn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Gn(l, "");
        } catch (g) {
          q(e, e.return, g);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && $a(l, o),
              Jo(s, i);
            var a = Jo(s, o);
            for (i = 0; i < u.length; i += 2) {
              var c = u[i],
                d = u[i + 1];
              c === "style"
                ? Ka(l, d)
                : c === "dangerouslySetInnerHTML"
                ? Wa(l, d)
                : c === "children"
                ? Gn(l, d)
                : Wi(l, c, d, a);
            }
            switch (s) {
              case "input":
                Vo(l, o);
                break;
              case "textarea":
                Ha(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var S = o.value;
                S != null
                  ? an(l, !!o.multiple, S, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? an(l, !!o.multiple, o.defaultValue, !0)
                      : an(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[ir] = o;
          } catch (g) {
            q(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Fe(t, e), Qe(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (g) {
          q(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Fe(t, e), Qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          tr(t.containerInfo);
        } catch (g) {
          q(e, e.return, g);
        }
      break;
    case 4:
      Fe(t, e), Qe(e);
      break;
    case 13:
      Fe(t, e),
        Qe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ks = Y())),
        r & 4 && $u(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ae = (a = ae) || c), Fe(t, e), (ae = a)) : Fe(t, e),
        Qe(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !c && e.mode & 1)
        )
          for (P = e, c = e.child; c !== null; ) {
            for (d = P = c; P !== null; ) {
              switch (((m = P), (S = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  qn(4, m, m.return);
                  break;
                case 1:
                  sn(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (g) {
                      q(r, n, g);
                    }
                  }
                  break;
                case 5:
                  sn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Vu(d);
                    continue;
                  }
              }
              S !== null ? ((S.return = m), (P = S)) : Vu(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (l = d.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = d.stateNode),
                      (u = d.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = Qa("display", i)));
              } catch (g) {
                q(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = a ? "" : d.memoizedProps;
              } catch (g) {
                q(e, e.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Fe(t, e), Qe(e), r & 4 && $u(e);
      break;
    case 21:
      break;
    default:
      Fe(t, e), Qe(e);
  }
}
function Qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (vf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Gn(l, ""), (r.flags &= -33));
          var o = Bu(e);
          Ci(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = Bu(e);
          ki(e, s, i);
          break;
        default:
          throw Error(x(161));
      }
    } catch (u) {
      q(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Th(e, t, n) {
  (P = e), Ef(e);
}
function Ef(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || $r;
      if (!i) {
        var s = l.alternate,
          u = (s !== null && s.memoizedState !== null) || ae;
        s = $r;
        var a = ae;
        if ((($r = i), (ae = u) && !a))
          for (P = l; P !== null; )
            (i = P),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Wu(l)
                : u !== null
                ? ((u.return = i), (P = u))
                : Wu(l);
        for (; o !== null; ) (P = o), Ef(o), (o = o.sibling);
        (P = l), ($r = s), (ae = a);
      }
      Hu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (P = o)) : Hu(e);
  }
}
function Hu(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ae || $l(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ae)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : De(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ru(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ru(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var c = a.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && tr(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(x(163));
          }
        ae || (t.flags & 512 && xi(t));
      } catch (m) {
        q(t, t.return, m);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function Vu(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function Wu(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            $l(4, t);
          } catch (u) {
            q(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              q(t, l, u);
            }
          }
          var o = t.return;
          try {
            xi(t);
          } catch (u) {
            q(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            xi(t);
          } catch (u) {
            q(t, i, u);
          }
      }
    } catch (u) {
      q(t, t.return, u);
    }
    if (t === e) {
      P = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (P = s);
      break;
    }
    P = t.return;
  }
}
var Oh = Math.ceil,
  Cl = ot.ReactCurrentDispatcher,
  Es = ot.ReactCurrentOwner,
  ze = ot.ReactCurrentBatchConfig,
  D = 0,
  re = null,
  G = null,
  oe = 0,
  ke = 0,
  un = Rt(0),
  ee = 0,
  dr = null,
  Vt = 0,
  Hl = 0,
  xs = 0,
  Jn = null,
  me = null,
  ks = 0,
  En = 1 / 0,
  Ye = null,
  _l = !1,
  _i = null,
  St = null,
  Hr = !1,
  pt = null,
  Rl = 0,
  Xn = 0,
  Ri = null,
  br = -1,
  el = 0;
function de() {
  return D & 6 ? Y() : br !== -1 ? br : (br = Y());
}
function Et(e) {
  return e.mode & 1
    ? D & 2 && oe !== 0
      ? oe & -oe
      : ph.transition !== null
      ? (el === 0 && (el = lc()), el)
      : ((e = U),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : fc(e.type))),
        e)
    : 1;
}
function $e(e, t, n, r) {
  if (50 < Xn) throw ((Xn = 0), (Ri = null), Error(x(185)));
  gr(e, n, r),
    (!(D & 2) || e !== re) &&
      (e === re && (!(D & 2) && (Hl |= n), ee === 4 && ft(e, oe)),
      we(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((En = Y() + 500), Ul && Nt()));
}
function we(e, t) {
  var n = e.callbackNode;
  pp(e, t);
  var r = al(e, e === re ? oe : 0);
  if (r === 0)
    n !== null && bs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && bs(n), t === 1))
      e.tag === 0 ? dh(Qu.bind(null, e)) : Oc(Qu.bind(null, e)),
        uh(function () {
          !(D & 6) && Nt();
        }),
        (n = null);
    else {
      switch (oc(r)) {
        case 1:
          n = Xi;
          break;
        case 4:
          n = nc;
          break;
        case 16:
          n = ul;
          break;
        case 536870912:
          n = rc;
          break;
        default:
          n = ul;
      }
      n = Tf(n, xf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function xf(e, t) {
  if (((br = -1), (el = 0), D & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (hn() && e.callbackNode !== n) return null;
  var r = al(e, e === re ? oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Nl(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var o = Cf();
    (re !== e || oe !== t) && ((Ye = null), (En = Y() + 500), Ft(e, t));
    do
      try {
        zh();
        break;
      } catch (s) {
        kf(e, s);
      }
    while (!0);
    us(),
      (Cl.current = o),
      (D = l),
      G !== null ? (t = 0) : ((re = null), (oe = 0), (t = ee));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = bo(e)), l !== 0 && ((r = l), (t = Ni(e, l)))), t === 1)
    )
      throw ((n = dr), Ft(e, 0), ft(e, r), we(e, Y()), n);
    if (t === 6) ft(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Lh(l) &&
          ((t = Nl(e, r)),
          t === 2 && ((o = bo(e)), o !== 0 && ((r = o), (t = Ni(e, o)))),
          t === 1))
      )
        throw ((n = dr), Ft(e, 0), ft(e, r), we(e, Y()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Lt(e, me, Ye);
          break;
        case 3:
          if (
            (ft(e, r), (r & 130023424) === r && ((t = ks + 500 - Y()), 10 < t))
          ) {
            if (al(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = si(Lt.bind(null, e, me, Ye), t);
            break;
          }
          Lt(e, me, Ye);
          break;
        case 4:
          if ((ft(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Be(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Y() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Oh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = si(Lt.bind(null, e, me, Ye), r);
            break;
          }
          Lt(e, me, Ye);
          break;
        case 5:
          Lt(e, me, Ye);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return we(e, Y()), e.callbackNode === n ? xf.bind(null, e) : null;
}
function Ni(e, t) {
  var n = Jn;
  return (
    e.current.memoizedState.isDehydrated && (Ft(e, t).flags |= 256),
    (e = Nl(e, t)),
    e !== 2 && ((t = me), (me = n), t !== null && Pi(t)),
    e
  );
}
function Pi(e) {
  me === null ? (me = e) : me.push.apply(me, e);
}
function Lh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!He(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ft(e, t) {
  for (
    t &= ~xs,
      t &= ~Hl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Be(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Qu(e) {
  if (D & 6) throw Error(x(327));
  hn();
  var t = al(e, 0);
  if (!(t & 1)) return we(e, Y()), null;
  var n = Nl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = bo(e);
    r !== 0 && ((t = r), (n = Ni(e, r)));
  }
  if (n === 1) throw ((n = dr), Ft(e, 0), ft(e, t), we(e, Y()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Lt(e, me, Ye),
    we(e, Y()),
    null
  );
}
function Cs(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && ((En = Y() + 500), Ul && Nt());
  }
}
function Wt(e) {
  pt !== null && pt.tag === 0 && !(D & 6) && hn();
  var t = D;
  D |= 1;
  var n = ze.transition,
    r = U;
  try {
    if (((ze.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (ze.transition = n), (D = t), !(D & 6) && Nt();
  }
}
function _s() {
  (ke = un.current), $(un);
}
function Ft(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), sh(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n;
      switch ((os(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && hl();
          break;
        case 3:
          wn(), $(ge), $(ce), hs();
          break;
        case 5:
          ps(r);
          break;
        case 4:
          wn();
          break;
        case 13:
          $(V);
          break;
        case 19:
          $(V);
          break;
        case 10:
          as(r.type._context);
          break;
        case 22:
        case 23:
          _s();
      }
      n = n.return;
    }
  if (
    ((re = e),
    (G = e = xt(e.current, null)),
    (oe = ke = t),
    (ee = 0),
    (dr = null),
    (xs = Hl = Vt = 0),
    (me = Jn = null),
    zt !== null)
  ) {
    for (t = 0; t < zt.length; t++)
      if (((n = zt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    zt = null;
  }
  return e;
}
function kf(e, t) {
  do {
    var n = G;
    try {
      if ((us(), (Yr.current = kl), xl)) {
        for (var r = W.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        xl = !1;
      }
      if (
        ((Ht = 0),
        (ne = b = W = null),
        (Kn = !1),
        (ar = 0),
        (Es.current = null),
        n === null || n.return === null)
      ) {
        (ee = 1), (dr = t), (G = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          s = n,
          u = t;
        if (
          ((t = oe),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            c = s,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var m = c.alternate;
            m
              ? ((c.updateQueue = m.updateQueue),
                (c.memoizedState = m.memoizedState),
                (c.lanes = m.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var S = ju(i);
          if (S !== null) {
            (S.flags &= -257),
              zu(S, i, s, o, t),
              S.mode & 1 && Lu(o, a, t),
              (t = S),
              (u = a);
            var y = t.updateQueue;
            if (y === null) {
              var g = new Set();
              g.add(u), (t.updateQueue = g);
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Lu(o, a, t), Rs();
              break e;
            }
            u = Error(x(426));
          }
        } else if (H && s.mode & 1) {
          var w = ju(i);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              zu(w, i, s, o, t),
              is(Sn(u, s));
            break e;
          }
        }
        (o = u = Sn(u, s)),
          ee !== 4 && (ee = 2),
          Jn === null ? (Jn = [o]) : Jn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = of(o, u, t);
              _u(o, p);
              break e;
            case 1:
              s = u;
              var f = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (St === null || !St.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var E = sf(o, s, t);
                _u(o, E);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Rf(n);
    } catch (k) {
      (t = k), G === n && n !== null && (G = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Cf() {
  var e = Cl.current;
  return (Cl.current = kl), e === null ? kl : e;
}
function Rs() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4),
    re === null || (!(Vt & 268435455) && !(Hl & 268435455)) || ft(re, oe);
}
function Nl(e, t) {
  var n = D;
  D |= 2;
  var r = Cf();
  (re !== e || oe !== t) && ((Ye = null), Ft(e, t));
  do
    try {
      jh();
      break;
    } catch (l) {
      kf(e, l);
    }
  while (!0);
  if ((us(), (D = n), (Cl.current = r), G !== null)) throw Error(x(261));
  return (re = null), (oe = 0), ee;
}
function jh() {
  for (; G !== null; ) _f(G);
}
function zh() {
  for (; G !== null && !lp(); ) _f(G);
}
function _f(e) {
  var t = Pf(e.alternate, e, ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? Rf(e) : (G = t),
    (Es.current = null);
}
function Rf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Rh(n, t)), n !== null)) {
        (n.flags &= 32767), (G = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ee = 6), (G = null);
        return;
      }
    } else if (((n = _h(n, t, ke)), n !== null)) {
      G = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function Lt(e, t, n) {
  var r = U,
    l = ze.transition;
  try {
    (ze.transition = null), (U = 1), Ih(e, t, n, r);
  } finally {
    (ze.transition = l), (U = r);
  }
  return null;
}
function Ih(e, t, n, r) {
  do hn();
  while (pt !== null);
  if (D & 6) throw Error(x(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (hp(e, o),
    e === re && ((G = re = null), (oe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Hr ||
      ((Hr = !0),
      Tf(ul, function () {
        return hn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ze.transition), (ze.transition = null);
    var i = U;
    U = 1;
    var s = D;
    (D |= 4),
      (Es.current = null),
      Ph(e, n),
      Sf(n, e),
      eh(oi),
      (cl = !!li),
      (oi = li = null),
      (e.current = n),
      Th(n),
      op(),
      (D = s),
      (U = i),
      (ze.transition = o);
  } else e.current = n;
  if (
    (Hr && ((Hr = !1), (pt = e), (Rl = l)),
    (o = e.pendingLanes),
    o === 0 && (St = null),
    up(n.stateNode),
    we(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (_l) throw ((_l = !1), (e = _i), (_i = null), e);
  return (
    Rl & 1 && e.tag !== 0 && hn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ri ? Xn++ : ((Xn = 0), (Ri = e))) : (Xn = 0),
    Nt(),
    null
  );
}
function hn() {
  if (pt !== null) {
    var e = oc(Rl),
      t = ze.transition,
      n = U;
    try {
      if (((ze.transition = null), (U = 16 > e ? 16 : e), pt === null))
        var r = !1;
      else {
        if (((e = pt), (pt = null), (Rl = 0), D & 6)) throw Error(x(331));
        var l = D;
        for (D |= 4, P = e.current; P !== null; ) {
          var o = P,
            i = o.child;
          if (P.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (P = a; P !== null; ) {
                  var c = P;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qn(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (P = d);
                  else
                    for (; P !== null; ) {
                      c = P;
                      var m = c.sibling,
                        S = c.return;
                      if ((gf(c), c === a)) {
                        P = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = S), (P = m);
                        break;
                      }
                      P = S;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var w = g.sibling;
                    (g.sibling = null), (g = w);
                  } while (g !== null);
                }
              }
              P = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (P = i);
          else
            e: for (; P !== null; ) {
              if (((o = P), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    qn(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (P = p);
                break e;
              }
              P = o.return;
            }
        }
        var f = e.current;
        for (P = f; P !== null; ) {
          i = P;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) (h.return = i), (P = h);
          else
            e: for (i = f; P !== null; ) {
              if (((s = P), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $l(9, s);
                  }
                } catch (k) {
                  q(s, s.return, k);
                }
              if (s === i) {
                P = null;
                break e;
              }
              var E = s.sibling;
              if (E !== null) {
                (E.return = s.return), (P = E);
                break e;
              }
              P = s.return;
            }
        }
        if (
          ((D = l), Nt(), Je && typeof Je.onPostCommitFiberRoot == "function")
        )
          try {
            Je.onPostCommitFiberRoot(zl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (ze.transition = t);
    }
  }
  return !1;
}
function Ku(e, t, n) {
  (t = Sn(n, t)),
    (t = of(e, t, 1)),
    (e = wt(e, t, 1)),
    (t = de()),
    e !== null && (gr(e, 1, t), we(e, t));
}
function q(e, t, n) {
  if (e.tag === 3) Ku(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ku(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (St === null || !St.has(r)))
        ) {
          (e = Sn(n, e)),
            (e = sf(t, e, 1)),
            (t = wt(t, e, 1)),
            (e = de()),
            t !== null && (gr(t, 1, e), we(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Ah(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    re === e &&
      (oe & n) === n &&
      (ee === 4 || (ee === 3 && (oe & 130023424) === oe && 500 > Y() - ks)
        ? Ft(e, 0)
        : (xs |= n)),
    we(e, t);
}
function Nf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = jr), (jr <<= 1), !(jr & 130023424) && (jr = 4194304))
      : (t = 1));
  var n = de();
  (e = rt(e, t)), e !== null && (gr(e, t, n), we(e, n));
}
function Fh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Nf(e, n);
}
function Dh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), Nf(e, n);
}
var Pf;
Pf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ge.current) ye = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ye = !1), Ch(e, t, n);
      ye = !!(e.flags & 131072);
    }
  else (ye = !1), H && t.flags & 1048576 && Lc(t, gl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Zr(e, t), (e = t.pendingProps);
      var l = yn(t, ce.current);
      pn(t, n), (l = ys(null, t, r, e, l, n));
      var o = gs();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ve(r) ? ((o = !0), ml(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            fs(t),
            (l.updater = Bl),
            (t.stateNode = l),
            (l._reactInternals = t),
            hi(t, r, e, n),
            (t = gi(null, t, r, !0, o, n)))
          : ((t.tag = 0), H && o && ls(t), fe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Zr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Mh(r)),
          (e = De(r, e)),
          l)
        ) {
          case 0:
            t = yi(null, t, r, e, n);
            break e;
          case 1:
            t = Fu(null, t, r, e, n);
            break e;
          case 11:
            t = Iu(null, t, r, e, n);
            break e;
          case 14:
            t = Au(null, t, r, De(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        yi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        Fu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((ff(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Dc(e, t),
          Sl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Sn(Error(x(423)), t)), (t = Du(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Sn(Error(x(424)), t)), (t = Du(e, t, r, n, l));
            break e;
          } else
            for (
              Ce = vt(t.stateNode.containerInfo.firstChild),
                _e = t,
                H = !0,
                Me = null,
                n = Ac(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((gn(), r === l)) {
            t = lt(e, t, n);
            break e;
          }
          fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Uc(t),
        e === null && fi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        ii(r, l) ? (i = null) : o !== null && ii(r, o) && (t.flags |= 32),
        cf(e, t),
        fe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && fi(t), null;
    case 13:
      return df(e, t, n);
    case 4:
      return (
        ds(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = vn(t, null, r, n)) : fe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        Iu(e, t, r, l, n)
      );
    case 7:
      return fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          M(vl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (He(o.value, i)) {
            if (o.children === l.children && !ge.current) {
              t = lt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                i = o.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = et(-1, n & -n)), (u.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var c = a.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (a.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      di(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(x(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  di(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        fe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        pn(t, n),
        (l = Ie(l)),
        (r = r(l)),
        (t.flags |= 1),
        fe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = De(r, t.pendingProps)),
        (l = De(r.type, l)),
        Au(e, t, r, l, n)
      );
    case 15:
      return uf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        Zr(e, t),
        (t.tag = 1),
        ve(r) ? ((e = !0), ml(t)) : (e = !1),
        pn(t, n),
        lf(t, r, l),
        hi(t, r, l, n),
        gi(null, t, r, !0, e, n)
      );
    case 19:
      return pf(e, t, n);
    case 22:
      return af(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function Tf(e, t) {
  return tc(e, t);
}
function Uh(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function je(e, t, n, r) {
  return new Uh(e, t, n, r);
}
function Ns(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Mh(e) {
  if (typeof e == "function") return Ns(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ki)) return 11;
    if (e === qi) return 14;
  }
  return 2;
}
function xt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = je(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function tl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ns(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Gt:
        return Dt(n.children, l, o, t);
      case Qi:
        (i = 8), (l |= 8);
        break;
      case Uo:
        return (
          (e = je(12, n, t, l | 2)), (e.elementType = Uo), (e.lanes = o), e
        );
      case Mo:
        return (e = je(13, n, t, l)), (e.elementType = Mo), (e.lanes = o), e;
      case Bo:
        return (e = je(19, n, t, l)), (e.elementType = Bo), (e.lanes = o), e;
      case Ua:
        return Vl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Fa:
              i = 10;
              break e;
            case Da:
              i = 9;
              break e;
            case Ki:
              i = 11;
              break e;
            case qi:
              i = 14;
              break e;
            case ut:
              (i = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = je(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Dt(e, t, n, r) {
  return (e = je(7, e, r, t)), (e.lanes = n), e;
}
function Vl(e, t, n, r) {
  return (
    (e = je(22, e, r, t)),
    (e.elementType = Ua),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Oo(e, t, n) {
  return (e = je(6, e, null, t)), (e.lanes = n), e;
}
function Lo(e, t, n) {
  return (
    (t = je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Bh(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = co(0)),
    (this.expirationTimes = co(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = co(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ps(e, t, n, r, l, o, i, s, u) {
  return (
    (e = new Bh(e, t, n, s, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = je(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fs(o),
    e
  );
}
function $h(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Yt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Of(e) {
  if (!e) return Ct;
  e = e._reactInternals;
  e: {
    if (qt(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ve(n)) return Tc(e, n, t);
  }
  return t;
}
function Lf(e, t, n, r, l, o, i, s, u) {
  return (
    (e = Ps(n, r, !0, e, l, o, i, s, u)),
    (e.context = Of(null)),
    (n = e.current),
    (r = de()),
    (l = Et(n)),
    (o = et(r, l)),
    (o.callback = t ?? null),
    wt(n, o, l),
    (e.current.lanes = l),
    gr(e, l, r),
    we(e, r),
    e
  );
}
function Wl(e, t, n, r) {
  var l = t.current,
    o = de(),
    i = Et(l);
  return (
    (n = Of(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = et(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = wt(l, t, i)),
    e !== null && ($e(e, l, i, o), Xr(e, l, i)),
    i
  );
}
function Pl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function qu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ts(e, t) {
  qu(e, t), (e = e.alternate) && qu(e, t);
}
function Hh() {
  return null;
}
var jf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Os(e) {
  this._internalRoot = e;
}
Ql.prototype.render = Os.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  Wl(e, t, null, null);
};
Ql.prototype.unmount = Os.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Wt(function () {
      Wl(null, e, null, null);
    }),
      (t[nt] = null);
  }
};
function Ql(e) {
  this._internalRoot = e;
}
Ql.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = uc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ct.length && t !== 0 && t < ct[n].priority; n++);
    ct.splice(n, 0, e), n === 0 && cc(e);
  }
};
function Ls(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Kl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ju() {}
function Vh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = Pl(i);
        o.call(a);
      };
    }
    var i = Lf(t, r, e, 0, null, !1, !1, "", Ju);
    return (
      (e._reactRootContainer = i),
      (e[nt] = i.current),
      lr(e.nodeType === 8 ? e.parentNode : e),
      Wt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var a = Pl(u);
      s.call(a);
    };
  }
  var u = Ps(e, 0, !1, null, null, !1, !1, "", Ju);
  return (
    (e._reactRootContainer = u),
    (e[nt] = u.current),
    lr(e.nodeType === 8 ? e.parentNode : e),
    Wt(function () {
      Wl(t, u, n, r);
    }),
    u
  );
}
function ql(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var u = Pl(i);
        s.call(u);
      };
    }
    Wl(t, i, e, l);
  } else i = Vh(n, t, e, l, r);
  return Pl(i);
}
ic = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mn(t.pendingLanes);
        n !== 0 &&
          (Yi(t, n | 1), we(t, Y()), !(D & 6) && ((En = Y() + 500), Nt()));
      }
      break;
    case 13:
      Wt(function () {
        var r = rt(e, 1);
        if (r !== null) {
          var l = de();
          $e(r, e, 1, l);
        }
      }),
        Ts(e, 1);
  }
};
Gi = function (e) {
  if (e.tag === 13) {
    var t = rt(e, 134217728);
    if (t !== null) {
      var n = de();
      $e(t, e, 134217728, n);
    }
    Ts(e, 134217728);
  }
};
sc = function (e) {
  if (e.tag === 13) {
    var t = Et(e),
      n = rt(e, t);
    if (n !== null) {
      var r = de();
      $e(n, e, t, r);
    }
    Ts(e, t);
  }
};
uc = function () {
  return U;
};
ac = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
Yo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Vo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Dl(r);
            if (!l) throw Error(x(90));
            Ba(r), Vo(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ha(e, n);
      break;
    case "select":
      (t = n.value), t != null && an(e, !!n.multiple, t, !1);
  }
};
Xa = Cs;
Ya = Wt;
var Wh = { usingClientEntryPoint: !1, Events: [wr, tn, Dl, qa, Ja, Cs] },
  An = {
    findFiberByHostInstance: jt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Qh = {
    bundleType: An.bundleType,
    version: An.version,
    rendererPackageName: An.rendererPackageName,
    rendererConfig: An.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ot.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ba(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: An.findFiberByHostInstance || Hh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Vr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Vr.isDisabled && Vr.supportsFiber)
    try {
      (zl = Vr.inject(Qh)), (Je = Vr);
    } catch {}
}
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wh;
Pe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ls(t)) throw Error(x(200));
  return $h(e, t, null, n);
};
Pe.createRoot = function (e, t) {
  if (!Ls(e)) throw Error(x(299));
  var n = !1,
    r = "",
    l = jf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ps(e, 1, !1, null, null, n, !1, r, l)),
    (e[nt] = t.current),
    lr(e.nodeType === 8 ? e.parentNode : e),
    new Os(t)
  );
};
Pe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = ba(t)), (e = e === null ? null : e.stateNode), e;
};
Pe.flushSync = function (e) {
  return Wt(e);
};
Pe.hydrate = function (e, t, n) {
  if (!Kl(t)) throw Error(x(200));
  return ql(null, e, t, !0, n);
};
Pe.hydrateRoot = function (e, t, n) {
  if (!Ls(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = jf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Lf(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[nt] = t.current),
    lr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Ql(t);
};
Pe.render = function (e, t, n) {
  if (!Kl(t)) throw Error(x(200));
  return ql(null, e, t, !1, n);
};
Pe.unmountComponentAtNode = function (e) {
  if (!Kl(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (Wt(function () {
        ql(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[nt] = null);
        });
      }),
      !0)
    : !1;
};
Pe.unstable_batchedUpdates = Cs;
Pe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Kl(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return ql(e, t, n, !1, r);
};
Pe.version = "18.3.1-next-f1338f8080-20240426";
function zf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zf);
    } catch (e) {
      console.error(e);
    }
}
zf(), (ja.exports = Pe);
var Kh = ja.exports,
  If,
  Xu = Kh;
(If = Xu.createRoot), Xu.hydrateRoot;
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pr() {
  return (
    (pr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pr.apply(this, arguments)
  );
}
var ht;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ht || (ht = {}));
const Yu = "popstate";
function qh(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: s } = r.location;
    return Ti(
      "",
      { pathname: o, search: i, hash: s },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : Ff(l);
  }
  return Xh(t, n, null, e);
}
function Z(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Af(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Jh() {
  return Math.random().toString(36).substr(2, 8);
}
function Gu(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ti(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    pr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? _n(t) : t,
      { state: n, key: (t && t.key) || r || Jh() }
    )
  );
}
function Ff(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function _n(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Xh(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    s = ht.Pop,
    u = null,
    a = c();
  a == null && ((a = 0), i.replaceState(pr({}, i.state, { idx: a }), ""));
  function c() {
    return (i.state || { idx: null }).idx;
  }
  function d() {
    s = ht.Pop;
    let w = c(),
      p = w == null ? null : w - a;
    (a = w), u && u({ action: s, location: g.location, delta: p });
  }
  function m(w, p) {
    s = ht.Push;
    let f = Ti(g.location, w, p);
    a = c() + 1;
    let h = Gu(f, a),
      E = g.createHref(f);
    try {
      i.pushState(h, "", E);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      l.location.assign(E);
    }
    o && u && u({ action: s, location: g.location, delta: 1 });
  }
  function S(w, p) {
    s = ht.Replace;
    let f = Ti(g.location, w, p);
    a = c();
    let h = Gu(f, a),
      E = g.createHref(f);
    i.replaceState(h, "", E),
      o && u && u({ action: s, location: g.location, delta: 0 });
  }
  function y(w) {
    let p = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof w == "string" ? w : Ff(w);
    return (
      (f = f.replace(/ $/, "%20")),
      Z(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, p)
    );
  }
  let g = {
    get action() {
      return s;
    },
    get location() {
      return e(l, i);
    },
    listen(w) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Yu, d),
        (u = w),
        () => {
          l.removeEventListener(Yu, d), (u = null);
        }
      );
    },
    createHref(w) {
      return t(l, w);
    },
    createURL: y,
    encodeLocation(w) {
      let p = y(w);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: m,
    replace: S,
    go(w) {
      return i.go(w);
    },
  };
  return g;
}
var Zu;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Zu || (Zu = {}));
function Yh(e, t, n) {
  return n === void 0 && (n = "/"), Gh(e, t, n, !1);
}
function Gh(e, t, n, r) {
  let l = typeof t == "string" ? _n(t) : t,
    o = Mf(l.pathname || "/", n);
  if (o == null) return null;
  let i = Df(e);
  Zh(i);
  let s = null;
  for (let u = 0; s == null && u < i.length; ++u) {
    let a = am(o);
    s = sm(i[u], a, r);
  }
  return s;
}
function Df(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, s) => {
    let u = {
      relativePath: s === void 0 ? o.path || "" : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (Z(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let a = Ut([r, u.relativePath]),
      c = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (Z(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      Df(o.children, t, c, a)),
      !(o.path == null && !o.index) &&
        t.push({ path: a, score: om(a, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, i) => {
      var s;
      if (o.path === "" || !((s = o.path) != null && s.includes("?"))) l(o, i);
      else for (let u of Uf(o.path)) l(o, i, u);
    }),
    t
  );
}
function Uf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = Uf(r.join("/")),
    s = [];
  return (
    s.push(...i.map((u) => (u === "" ? o : [o, u].join("/")))),
    l && s.push(...i),
    s.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Zh(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : im(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const bh = /^:[\w-]+$/,
  em = 3,
  tm = 2,
  nm = 1,
  rm = 10,
  lm = -2,
  bu = (e) => e === "*";
function om(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(bu) && (r += lm),
    t && (r += tm),
    n
      .filter((l) => !bu(l))
      .reduce((l, o) => l + (bh.test(o) ? em : o === "" ? nm : rm), r)
  );
}
function im(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function sm(e, t, n) {
  let { routesMeta: r } = e,
    l = {},
    o = "/",
    i = [];
  for (let s = 0; s < r.length; ++s) {
    let u = r[s],
      a = s === r.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      d = ea(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
        c
      ),
      m = u.route;
    if (
      (!d &&
        a &&
        n &&
        !r[r.length - 1].route.index &&
        (d = ea(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          c
        )),
      !d)
    )
      return null;
    Object.assign(l, d.params),
      i.push({
        params: l,
        pathname: Ut([o, d.pathname]),
        pathnameBase: pm(Ut([o, d.pathnameBase])),
        route: m,
      }),
      d.pathnameBase !== "/" && (o = Ut([o, d.pathnameBase]));
  }
  return i;
}
function ea(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = um(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    s = l.slice(1);
  return {
    params: r.reduce((a, c, d) => {
      let { paramName: m, isOptional: S } = c;
      if (m === "*") {
        let g = s[d] || "";
        i = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const y = s[d];
      return (
        S && !y ? (a[m] = void 0) : (a[m] = (y || "").replace(/%2F/g, "/")), a
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function um(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Af(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, s, u) => (
            r.push({ paramName: s, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function am(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Af(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Mf(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function cm(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? _n(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : fm(n, t)) : t,
    search: hm(r),
    hash: mm(l),
  };
}
function fm(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function jo(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function dm(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Bf(e, t) {
  let n = dm(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function $f(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = _n(e))
    : ((l = pr({}, e)),
      Z(
        !l.pathname || !l.pathname.includes("?"),
        jo("?", "pathname", "search", l)
      ),
      Z(
        !l.pathname || !l.pathname.includes("#"),
        jo("#", "pathname", "hash", l)
      ),
      Z(!l.search || !l.search.includes("#"), jo("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    s;
  if (i == null) s = n;
  else {
    let d = t.length - 1;
    if (!r && i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; ) m.shift(), (d -= 1);
      l.pathname = m.join("/");
    }
    s = d >= 0 ? t[d] : "/";
  }
  let u = cm(l, s),
    a = i && i !== "/" && i.endsWith("/"),
    c = (o || i === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (a || c) && (u.pathname += "/"), u;
}
const Ut = (e) => e.join("/").replace(/\/\/+/g, "/"),
  pm = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  hm = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  mm = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function ym(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Hf = ["post", "put", "patch", "delete"];
new Set(Hf);
const gm = ["get", ...Hf];
new Set(gm);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function hr() {
  return (
    (hr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    hr.apply(this, arguments)
  );
}
const js = C.createContext(null),
  vm = C.createContext(null),
  Er = C.createContext(null),
  Jl = C.createContext(null),
  Jt = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Vf = C.createContext(null);
function xr() {
  return C.useContext(Jl) != null;
}
function zs() {
  return xr() || Z(!1), C.useContext(Jl).location;
}
function Wf(e) {
  C.useContext(Er).static || C.useLayoutEffect(e);
}
function Is() {
  let { isDataRoute: e } = C.useContext(Jt);
  return e ? Lm() : wm();
}
function wm() {
  xr() || Z(!1);
  let e = C.useContext(js),
    { basename: t, future: n, navigator: r } = C.useContext(Er),
    { matches: l } = C.useContext(Jt),
    { pathname: o } = zs(),
    i = JSON.stringify(Bf(l, n.v7_relativeSplatPath)),
    s = C.useRef(!1);
  return (
    Wf(() => {
      s.current = !0;
    }),
    C.useCallback(
      function (a, c) {
        if ((c === void 0 && (c = {}), !s.current)) return;
        if (typeof a == "number") {
          r.go(a);
          return;
        }
        let d = $f(a, JSON.parse(i), o, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Ut([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, i, o, e]
    )
  );
}
function Sm(e, t) {
  return Em(e, t);
}
function Em(e, t, n, r) {
  xr() || Z(!1);
  let { navigator: l } = C.useContext(Er),
    { matches: o } = C.useContext(Jt),
    i = o[o.length - 1],
    s = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : "/";
  i && i.route;
  let a = zs(),
    c;
  if (t) {
    var d;
    let w = typeof t == "string" ? _n(t) : t;
    u === "/" || ((d = w.pathname) != null && d.startsWith(u)) || Z(!1),
      (c = w);
  } else c = a;
  let m = c.pathname || "/",
    S = m;
  if (u !== "/") {
    let w = u.replace(/^\//, "").split("/");
    S = "/" + m.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let y = Yh(e, { pathname: S }),
    g = Rm(
      y &&
        y.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, s, w.params),
            pathname: Ut([
              u,
              l.encodeLocation
                ? l.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? u
                : Ut([
                    u,
                    l.encodeLocation
                      ? l.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && g
    ? C.createElement(
        Jl.Provider,
        {
          value: {
            location: hr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: ht.Pop,
          },
        },
        g
      )
    : g;
}
function xm() {
  let e = Om(),
    t = ym(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: l }, n) : null,
    null
  );
}
const km = C.createElement(xm, null);
class Cm extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? C.createElement(
          Jt.Provider,
          { value: this.props.routeContext },
          C.createElement(Vf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function _m(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = C.useContext(js);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(Jt.Provider, { value: t }, r)
  );
}
function Rm(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let i = e,
    s = (l = n) == null ? void 0 : l.errors;
  if (s != null) {
    let c = i.findIndex(
      (d) => d.route.id && (s == null ? void 0 : s[d.route.id]) !== void 0
    );
    c >= 0 || Z(!1), (i = i.slice(0, Math.min(i.length, c + 1)));
  }
  let u = !1,
    a = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < i.length; c++) {
      let d = i[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (a = c),
        d.route.id)
      ) {
        let { loaderData: m, errors: S } = n,
          y =
            d.route.loader &&
            m[d.route.id] === void 0 &&
            (!S || S[d.route.id] === void 0);
        if (d.route.lazy || y) {
          (u = !0), a >= 0 ? (i = i.slice(0, a + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((c, d, m) => {
    let S,
      y = !1,
      g = null,
      w = null;
    n &&
      ((S = s && d.route.id ? s[d.route.id] : void 0),
      (g = d.route.errorElement || km),
      u &&
        (a < 0 && m === 0
          ? ((y = !0), (w = null))
          : a === m &&
            ((y = !0), (w = d.route.hydrateFallbackElement || null))));
    let p = t.concat(i.slice(0, m + 1)),
      f = () => {
        let h;
        return (
          S
            ? (h = g)
            : y
            ? (h = w)
            : d.route.Component
            ? (h = C.createElement(d.route.Component, null))
            : d.route.element
            ? (h = d.route.element)
            : (h = c),
          C.createElement(_m, {
            match: d,
            routeContext: { outlet: c, matches: p, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || m === 0)
      ? C.createElement(Cm, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: S,
          children: f(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var Qf = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Qf || {}),
  Tl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Tl || {});
function Nm(e) {
  let t = C.useContext(js);
  return t || Z(!1), t;
}
function Pm(e) {
  let t = C.useContext(vm);
  return t || Z(!1), t;
}
function Tm(e) {
  let t = C.useContext(Jt);
  return t || Z(!1), t;
}
function Kf(e) {
  let t = Tm(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Z(!1), n.route.id;
}
function Om() {
  var e;
  let t = C.useContext(Vf),
    n = Pm(Tl.UseRouteError),
    r = Kf(Tl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Lm() {
  let { router: e } = Nm(Qf.UseNavigateStable),
    t = Kf(Tl.UseNavigateStable),
    n = C.useRef(!1);
  return (
    Wf(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, hr({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function jm(e) {
  let { to: t, replace: n, state: r, relative: l } = e;
  xr() || Z(!1);
  let { future: o, static: i } = C.useContext(Er),
    { matches: s } = C.useContext(Jt),
    { pathname: u } = zs(),
    a = Is(),
    c = $f(t, Bf(s, o.v7_relativeSplatPath), u, l === "path"),
    d = JSON.stringify(c);
  return (
    C.useEffect(
      () => a(JSON.parse(d), { replace: n, state: r, relative: l }),
      [a, d, l, n, r]
    ),
    null
  );
}
function nl(e) {
  Z(!1);
}
function zm(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = ht.Pop,
    navigator: o,
    static: i = !1,
    future: s,
  } = e;
  xr() && Z(!1);
  let u = t.replace(/^\/*/, "/"),
    a = C.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: i,
        future: hr({ v7_relativeSplatPath: !1 }, s),
      }),
      [u, s, o, i]
    );
  typeof r == "string" && (r = _n(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: m = "",
      state: S = null,
      key: y = "default",
    } = r,
    g = C.useMemo(() => {
      let w = Mf(c, u);
      return w == null
        ? null
        : {
            location: { pathname: w, search: d, hash: m, state: S, key: y },
            navigationType: l,
          };
    }, [u, c, d, m, S, y, l]);
  return g == null
    ? null
    : C.createElement(
        Er.Provider,
        { value: a },
        C.createElement(Jl.Provider, { children: n, value: g })
      );
}
function Im(e) {
  let { children: t, location: n } = e;
  return Sm(Oi(t), n);
}
new Promise(() => {});
function Oi(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    C.Children.forEach(e, (r, l) => {
      if (!C.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === C.Fragment) {
        n.push.apply(n, Oi(r.props.children, o));
        return;
      }
      r.type !== nl && Z(!1), !r.props.index || !r.props.children || Z(!1);
      let i = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = Oi(r.props.children, o)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const Am = "6";
try {
  window.__reactRouterVersion = Am;
} catch {}
const Fm = "startTransition",
  ta = Ad[Fm];
function Dm(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    o = C.useRef();
  o.current == null && (o.current = qh({ window: l, v5Compat: !0 }));
  let i = o.current,
    [s, u] = C.useState({ action: i.action, location: i.location }),
    { v7_startTransition: a } = r || {},
    c = C.useCallback(
      (d) => {
        a && ta ? ta(() => u(d)) : u(d);
      },
      [u, a]
    );
  return (
    C.useLayoutEffect(() => i.listen(c), [i, c]),
    C.createElement(zm, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: i,
      future: r,
    })
  );
}
var na;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(na || (na = {}));
var ra;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(ra || (ra = {}));
function qf(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Um } = Object.prototype,
  { getPrototypeOf: As } = Object,
  Xl = ((e) => (t) => {
    const n = Um.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ve = (e) => ((e = e.toLowerCase()), (t) => Xl(t) === e),
  Yl = (e) => (t) => typeof t === e,
  { isArray: Rn } = Array,
  mr = Yl("undefined");
function Mm(e) {
  return (
    e !== null &&
    !mr(e) &&
    e.constructor !== null &&
    !mr(e.constructor) &&
    Re(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Jf = Ve("ArrayBuffer");
function Bm(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Jf(e.buffer)),
    t
  );
}
const $m = Yl("string"),
  Re = Yl("function"),
  Xf = Yl("number"),
  Gl = (e) => e !== null && typeof e == "object",
  Hm = (e) => e === !0 || e === !1,
  rl = (e) => {
    if (Xl(e) !== "object") return !1;
    const t = As(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Vm = Ve("Date"),
  Wm = Ve("File"),
  Qm = Ve("Blob"),
  Km = Ve("FileList"),
  qm = (e) => Gl(e) && Re(e.pipe),
  Jm = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Re(e.append) &&
          ((t = Xl(e)) === "formdata" ||
            (t === "object" &&
              Re(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Xm = Ve("URLSearchParams"),
  [Ym, Gm, Zm, bm] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Ve
  ),
  e0 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function kr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, l;
  if ((typeof e != "object" && (e = [e]), Rn(e)))
    for (r = 0, l = e.length; r < l; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let s;
    for (r = 0; r < i; r++) (s = o[r]), t.call(null, e[s], s, e);
  }
}
function Yf(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    l;
  for (; r-- > 0; ) if (((l = n[r]), t === l.toLowerCase())) return l;
  return null;
}
const At =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Gf = (e) => !mr(e) && e !== At;
function Li() {
  const { caseless: e } = (Gf(this) && this) || {},
    t = {},
    n = (r, l) => {
      const o = (e && Yf(t, l)) || l;
      rl(t[o]) && rl(r)
        ? (t[o] = Li(t[o], r))
        : rl(r)
        ? (t[o] = Li({}, r))
        : Rn(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, l = arguments.length; r < l; r++)
    arguments[r] && kr(arguments[r], n);
  return t;
}
const t0 = (e, t, n, { allOwnKeys: r } = {}) => (
    kr(
      t,
      (l, o) => {
        n && Re(l) ? (e[o] = qf(l, n)) : (e[o] = l);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  n0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  r0 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  l0 = (e, t, n, r) => {
    let l, o, i;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (l = Object.getOwnPropertyNames(e), o = l.length; o-- > 0; )
        (i = l[o]), (!r || r(i, e, t)) && !s[i] && ((t[i] = e[i]), (s[i] = !0));
      e = n !== !1 && As(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  o0 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  i0 = (e) => {
    if (!e) return null;
    if (Rn(e)) return e;
    let t = e.length;
    if (!Xf(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  s0 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && As(Uint8Array)),
  u0 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let l;
    for (; (l = r.next()) && !l.done; ) {
      const o = l.value;
      t.call(e, o[0], o[1]);
    }
  },
  a0 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  c0 = Ve("HTMLFormElement"),
  f0 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, l) {
      return r.toUpperCase() + l;
    }),
  la = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  d0 = Ve("RegExp"),
  Zf = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    kr(n, (l, o) => {
      let i;
      (i = t(l, o, e)) !== !1 && (r[o] = i || l);
    }),
      Object.defineProperties(e, r);
  },
  p0 = (e) => {
    Zf(e, (t, n) => {
      if (Re(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Re(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  h0 = (e, t) => {
    const n = {},
      r = (l) => {
        l.forEach((o) => {
          n[o] = !0;
        });
      };
    return Rn(e) ? r(e) : r(String(e).split(t)), n;
  },
  m0 = () => {},
  y0 = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  zo = "abcdefghijklmnopqrstuvwxyz",
  oa = "0123456789",
  bf = { DIGIT: oa, ALPHA: zo, ALPHA_DIGIT: zo + zo.toUpperCase() + oa },
  g0 = (e = 16, t = bf.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function v0(e) {
  return !!(
    e &&
    Re(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const w0 = (e) => {
    const t = new Array(10),
      n = (r, l) => {
        if (Gl(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[l] = r;
            const o = Rn(r) ? [] : {};
            return (
              kr(r, (i, s) => {
                const u = n(i, l + 1);
                !mr(u) && (o[s] = u);
              }),
              (t[l] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  S0 = Ve("AsyncFunction"),
  E0 = (e) => e && (Gl(e) || Re(e)) && Re(e.then) && Re(e.catch),
  ed = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          At.addEventListener(
            "message",
            ({ source: l, data: o }) => {
              l === At && o === n && r.length && r.shift()();
            },
            !1
          ),
          (l) => {
            r.push(l), At.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Re(At.postMessage)
  ),
  x0 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(At)
      : (typeof process < "u" && process.nextTick) || ed,
  v = {
    isArray: Rn,
    isArrayBuffer: Jf,
    isBuffer: Mm,
    isFormData: Jm,
    isArrayBufferView: Bm,
    isString: $m,
    isNumber: Xf,
    isBoolean: Hm,
    isObject: Gl,
    isPlainObject: rl,
    isReadableStream: Ym,
    isRequest: Gm,
    isResponse: Zm,
    isHeaders: bm,
    isUndefined: mr,
    isDate: Vm,
    isFile: Wm,
    isBlob: Qm,
    isRegExp: d0,
    isFunction: Re,
    isStream: qm,
    isURLSearchParams: Xm,
    isTypedArray: s0,
    isFileList: Km,
    forEach: kr,
    merge: Li,
    extend: t0,
    trim: e0,
    stripBOM: n0,
    inherits: r0,
    toFlatObject: l0,
    kindOf: Xl,
    kindOfTest: Ve,
    endsWith: o0,
    toArray: i0,
    forEachEntry: u0,
    matchAll: a0,
    isHTMLForm: c0,
    hasOwnProperty: la,
    hasOwnProp: la,
    reduceDescriptors: Zf,
    freezeMethods: p0,
    toObjectSet: h0,
    toCamelCase: f0,
    noop: m0,
    toFiniteNumber: y0,
    findKey: Yf,
    global: At,
    isContextDefined: Gf,
    ALPHABET: bf,
    generateString: g0,
    isSpecCompliantForm: v0,
    toJSONObject: w0,
    isAsyncFn: S0,
    isThenable: E0,
    setImmediate: ed,
    asap: x0,
  };
function z(e, t, n, r, l) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    l && ((this.response = l), (this.status = l.status ? l.status : null));
}
v.inherits(z, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: v.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const td = z.prototype,
  nd = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  nd[e] = { value: e };
});
Object.defineProperties(z, nd);
Object.defineProperty(td, "isAxiosError", { value: !0 });
z.from = (e, t, n, r, l, o) => {
  const i = Object.create(td);
  return (
    v.toFlatObject(
      e,
      i,
      function (u) {
        return u !== Error.prototype;
      },
      (s) => s !== "isAxiosError"
    ),
    z.call(i, e.message, t, n, r, l),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const k0 = null;
function ji(e) {
  return v.isPlainObject(e) || v.isArray(e);
}
function rd(e) {
  return v.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ia(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (l, o) {
          return (l = rd(l)), !n && o ? "[" + l + "]" : l;
        })
        .join(n ? "." : "")
    : t;
}
function C0(e) {
  return v.isArray(e) && !e.some(ji);
}
const _0 = v.toFlatObject(v, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Zl(e, t, n) {
  if (!v.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = v.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, w) {
        return !v.isUndefined(w[g]);
      }
    ));
  const r = n.metaTokens,
    l = n.visitor || c,
    o = n.dots,
    i = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && v.isSpecCompliantForm(t);
  if (!v.isFunction(l)) throw new TypeError("visitor must be a function");
  function a(y) {
    if (y === null) return "";
    if (v.isDate(y)) return y.toISOString();
    if (!u && v.isBlob(y))
      throw new z("Blob is not supported. Use a Buffer instead.");
    return v.isArrayBuffer(y) || v.isTypedArray(y)
      ? u && typeof Blob == "function"
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function c(y, g, w) {
    let p = y;
    if (y && !w && typeof y == "object") {
      if (v.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (y = JSON.stringify(y));
      else if (
        (v.isArray(y) && C0(y)) ||
        ((v.isFileList(y) || v.endsWith(g, "[]")) && (p = v.toArray(y)))
      )
        return (
          (g = rd(g)),
          p.forEach(function (h, E) {
            !(v.isUndefined(h) || h === null) &&
              t.append(
                i === !0 ? ia([g], E, o) : i === null ? g : g + "[]",
                a(h)
              );
          }),
          !1
        );
    }
    return ji(y) ? !0 : (t.append(ia(w, g, o), a(y)), !1);
  }
  const d = [],
    m = Object.assign(_0, {
      defaultVisitor: c,
      convertValue: a,
      isVisitable: ji,
    });
  function S(y, g) {
    if (!v.isUndefined(y)) {
      if (d.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(y),
        v.forEach(y, function (p, f) {
          (!(v.isUndefined(p) || p === null) &&
            l.call(t, p, v.isString(f) ? f.trim() : f, g, m)) === !0 &&
            S(p, g ? g.concat(f) : [f]);
        }),
        d.pop();
    }
  }
  if (!v.isObject(e)) throw new TypeError("data must be an object");
  return S(e), t;
}
function sa(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Fs(e, t) {
  (this._pairs = []), e && Zl(e, this, t);
}
const ld = Fs.prototype;
ld.append = function (t, n) {
  this._pairs.push([t, n]);
};
ld.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, sa);
      }
    : sa;
  return this._pairs
    .map(function (l) {
      return n(l[0]) + "=" + n(l[1]);
    }, "")
    .join("&");
};
function R0(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function od(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || R0,
    l = n && n.serialize;
  let o;
  if (
    (l
      ? (o = l(t, n))
      : (o = v.isURLSearchParams(t) ? t.toString() : new Fs(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class ua {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    v.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const id = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  N0 = typeof URLSearchParams < "u" ? URLSearchParams : Fs,
  P0 = typeof FormData < "u" ? FormData : null,
  T0 = typeof Blob < "u" ? Blob : null,
  O0 = {
    isBrowser: !0,
    classes: { URLSearchParams: N0, FormData: P0, Blob: T0 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Ds = typeof window < "u" && typeof document < "u",
  zi = (typeof navigator == "object" && navigator) || void 0,
  L0 =
    Ds &&
    (!zi || ["ReactNative", "NativeScript", "NS"].indexOf(zi.product) < 0),
  j0 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  z0 = (Ds && window.location.href) || "http://localhost",
  I0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Ds,
        hasStandardBrowserEnv: L0,
        hasStandardBrowserWebWorkerEnv: j0,
        navigator: zi,
        origin: z0,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Se = { ...I0, ...O0 };
function A0(e, t) {
  return Zl(
    e,
    new Se.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, l, o) {
          return Se.isNode && v.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function F0(e) {
  return v
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function D0(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const l = n.length;
  let o;
  for (r = 0; r < l; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function sd(e) {
  function t(n, r, l, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const s = Number.isFinite(+i),
      u = o >= n.length;
    return (
      (i = !i && v.isArray(l) ? l.length : i),
      u
        ? (v.hasOwnProp(l, i) ? (l[i] = [l[i], r]) : (l[i] = r), !s)
        : ((!l[i] || !v.isObject(l[i])) && (l[i] = []),
          t(n, r, l[i], o) && v.isArray(l[i]) && (l[i] = D0(l[i])),
          !s)
    );
  }
  if (v.isFormData(e) && v.isFunction(e.entries)) {
    const n = {};
    return (
      v.forEachEntry(e, (r, l) => {
        t(F0(r), l, n, 0);
      }),
      n
    );
  }
  return null;
}
function U0(e, t, n) {
  if (v.isString(e))
    try {
      return (t || JSON.parse)(e), v.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const Cr = {
  transitional: id,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        l = r.indexOf("application/json") > -1,
        o = v.isObject(t);
      if ((o && v.isHTMLForm(t) && (t = new FormData(t)), v.isFormData(t)))
        return l ? JSON.stringify(sd(t)) : t;
      if (
        v.isArrayBuffer(t) ||
        v.isBuffer(t) ||
        v.isStream(t) ||
        v.isFile(t) ||
        v.isBlob(t) ||
        v.isReadableStream(t)
      )
        return t;
      if (v.isArrayBufferView(t)) return t.buffer;
      if (v.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let s;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return A0(t, this.formSerializer).toString();
        if ((s = v.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return Zl(
            s ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return o || l ? (n.setContentType("application/json", !1), U0(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Cr.transitional,
        r = n && n.forcedJSONParsing,
        l = this.responseType === "json";
      if (v.isResponse(t) || v.isReadableStream(t)) return t;
      if (t && v.isString(t) && ((r && !this.responseType) || l)) {
        const i = !(n && n.silentJSONParsing) && l;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (i)
            throw s.name === "SyntaxError"
              ? z.from(s, z.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Se.classes.FormData, Blob: Se.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
v.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Cr.headers[e] = {};
});
const M0 = v.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  B0 = (e) => {
    const t = {};
    let n, r, l;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (l = i.indexOf(":")),
              (n = i.substring(0, l).trim().toLowerCase()),
              (r = i.substring(l + 1).trim()),
              !(!n || (t[n] && M0[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  aa = Symbol("internals");
function Fn(e) {
  return e && String(e).trim().toLowerCase();
}
function ll(e) {
  return e === !1 || e == null ? e : v.isArray(e) ? e.map(ll) : String(e);
}
function $0(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const H0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Io(e, t, n, r, l) {
  if (v.isFunction(r)) return r.call(this, t, n);
  if ((l && (t = n), !!v.isString(t))) {
    if (v.isString(r)) return t.indexOf(r) !== -1;
    if (v.isRegExp(r)) return r.test(t);
  }
}
function V0(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function W0(e, t) {
  const n = v.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (l, o, i) {
        return this[r].call(this, t, l, o, i);
      },
      configurable: !0,
    });
  });
}
class Ee {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const l = this;
    function o(s, u, a) {
      const c = Fn(u);
      if (!c) throw new Error("header name must be a non-empty string");
      const d = v.findKey(l, c);
      (!d || l[d] === void 0 || a === !0 || (a === void 0 && l[d] !== !1)) &&
        (l[d || u] = ll(s));
    }
    const i = (s, u) => v.forEach(s, (a, c) => o(a, c, u));
    if (v.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (v.isString(t) && (t = t.trim()) && !H0(t)) i(B0(t), n);
    else if (v.isHeaders(t)) for (const [s, u] of t.entries()) o(u, s, r);
    else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Fn(t)), t)) {
      const r = v.findKey(this, t);
      if (r) {
        const l = this[r];
        if (!n) return l;
        if (n === !0) return $0(l);
        if (v.isFunction(n)) return n.call(this, l, r);
        if (v.isRegExp(n)) return n.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Fn(t)), t)) {
      const r = v.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Io(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let l = !1;
    function o(i) {
      if (((i = Fn(i)), i)) {
        const s = v.findKey(r, i);
        s && (!n || Io(r, r[s], s, n)) && (delete r[s], (l = !0));
      }
    }
    return v.isArray(t) ? t.forEach(o) : o(t), l;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      l = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Io(this, this[o], o, t, !0)) && (delete this[o], (l = !0));
    }
    return l;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      v.forEach(this, (l, o) => {
        const i = v.findKey(r, o);
        if (i) {
          (n[i] = ll(l)), delete n[o];
          return;
        }
        const s = t ? V0(o) : String(o).trim();
        s !== o && delete n[o], (n[s] = ll(l)), (r[s] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      v.forEach(this, (r, l) => {
        r != null && r !== !1 && (n[l] = t && v.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((l) => r.set(l)), r;
  }
  static accessor(t) {
    const r = (this[aa] = this[aa] = { accessors: {} }).accessors,
      l = this.prototype;
    function o(i) {
      const s = Fn(i);
      r[s] || (W0(l, i), (r[s] = !0));
    }
    return v.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Ee.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
v.reduceDescriptors(Ee.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
v.freezeMethods(Ee);
function Ao(e, t) {
  const n = this || Cr,
    r = t || n,
    l = Ee.from(r.headers);
  let o = r.data;
  return (
    v.forEach(e, function (s) {
      o = s.call(n, o, l.normalize(), t ? t.status : void 0);
    }),
    l.normalize(),
    o
  );
}
function ud(e) {
  return !!(e && e.__CANCEL__);
}
function Nn(e, t, n) {
  z.call(this, e ?? "canceled", z.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
v.inherits(Nn, z, { __CANCEL__: !0 });
function ad(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new z(
          "Request failed with status code " + n.status,
          [z.ERR_BAD_REQUEST, z.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function Q0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function K0(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let l = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const a = Date.now(),
        c = r[o];
      i || (i = a), (n[l] = u), (r[l] = a);
      let d = o,
        m = 0;
      for (; d !== l; ) (m += n[d++]), (d = d % e);
      if (((l = (l + 1) % e), l === o && (o = (o + 1) % e), a - i < t)) return;
      const S = c && a - c;
      return S ? Math.round((m * 1e3) / S) : void 0;
    }
  );
}
function q0(e, t) {
  let n = 0,
    r = 1e3 / t,
    l,
    o;
  const i = (a, c = Date.now()) => {
    (n = c), (l = null), o && (clearTimeout(o), (o = null)), e.apply(null, a);
  };
  return [
    (...a) => {
      const c = Date.now(),
        d = c - n;
      d >= r
        ? i(a, c)
        : ((l = a),
          o ||
            (o = setTimeout(() => {
              (o = null), i(l);
            }, r - d)));
    },
    () => l && i(l),
  ];
}
const Ol = (e, t, n = 3) => {
    let r = 0;
    const l = K0(50, 250);
    return q0((o) => {
      const i = o.loaded,
        s = o.lengthComputable ? o.total : void 0,
        u = i - r,
        a = l(u),
        c = i <= s;
      r = i;
      const d = {
        loaded: i,
        total: s,
        progress: s ? i / s : void 0,
        bytes: u,
        rate: a || void 0,
        estimated: a && s && c ? (s - i) / a : void 0,
        event: o,
        lengthComputable: s != null,
        [t ? "download" : "upload"]: !0,
      };
      e(d);
    }, n);
  },
  ca = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  fa =
    (e) =>
    (...t) =>
      v.asap(() => e(...t)),
  J0 = Se.hasStandardBrowserEnv
    ? (function () {
        const t =
            Se.navigator && /(msie|trident)/i.test(Se.navigator.userAgent),
          n = document.createElement("a");
        let r;
        function l(o) {
          let i = o;
          return (
            t && (n.setAttribute("href", i), (i = n.href)),
            n.setAttribute("href", i),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = l(window.location.href)),
          function (i) {
            const s = v.isString(i) ? l(i) : i;
            return s.protocol === r.protocol && s.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  X0 = Se.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, l, o) {
          const i = [e + "=" + encodeURIComponent(t)];
          v.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
            v.isString(r) && i.push("path=" + r),
            v.isString(l) && i.push("domain=" + l),
            o === !0 && i.push("secure"),
            (document.cookie = i.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Y0(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function G0(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function cd(e, t) {
  return e && !Y0(t) ? G0(e, t) : t;
}
const da = (e) => (e instanceof Ee ? { ...e } : e);
function Qt(e, t) {
  t = t || {};
  const n = {};
  function r(a, c, d) {
    return v.isPlainObject(a) && v.isPlainObject(c)
      ? v.merge.call({ caseless: d }, a, c)
      : v.isPlainObject(c)
      ? v.merge({}, c)
      : v.isArray(c)
      ? c.slice()
      : c;
  }
  function l(a, c, d) {
    if (v.isUndefined(c)) {
      if (!v.isUndefined(a)) return r(void 0, a, d);
    } else return r(a, c, d);
  }
  function o(a, c) {
    if (!v.isUndefined(c)) return r(void 0, c);
  }
  function i(a, c) {
    if (v.isUndefined(c)) {
      if (!v.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, c);
  }
  function s(a, c, d) {
    if (d in t) return r(a, c);
    if (d in e) return r(void 0, a);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: s,
    headers: (a, c) => l(da(a), da(c), !0),
  };
  return (
    v.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const d = u[c] || l,
        m = d(e[c], t[c], c);
      (v.isUndefined(m) && d !== s) || (n[c] = m);
    }),
    n
  );
}
const fd = (e) => {
    const t = Qt({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: l,
      xsrfCookieName: o,
      headers: i,
      auth: s,
    } = t;
    (t.headers = i = Ee.from(i)),
      (t.url = od(cd(t.baseURL, t.url), e.params, e.paramsSerializer)),
      s &&
        i.set(
          "Authorization",
          "Basic " +
            btoa(
              (s.username || "") +
                ":" +
                (s.password ? unescape(encodeURIComponent(s.password)) : "")
            )
        );
    let u;
    if (v.isFormData(n)) {
      if (Se.hasStandardBrowserEnv || Se.hasStandardBrowserWebWorkerEnv)
        i.setContentType(void 0);
      else if ((u = i.getContentType()) !== !1) {
        const [a, ...c] = u
          ? u
              .split(";")
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        i.setContentType([a || "multipart/form-data", ...c].join("; "));
      }
    }
    if (
      Se.hasStandardBrowserEnv &&
      (r && v.isFunction(r) && (r = r(t)), r || (r !== !1 && J0(t.url)))
    ) {
      const a = l && o && X0.read(o);
      a && i.set(l, a);
    }
    return t;
  },
  Z0 = typeof XMLHttpRequest < "u",
  b0 =
    Z0 &&
    function (e) {
      return new Promise(function (n, r) {
        const l = fd(e);
        let o = l.data;
        const i = Ee.from(l.headers).normalize();
        let { responseType: s, onUploadProgress: u, onDownloadProgress: a } = l,
          c,
          d,
          m,
          S,
          y;
        function g() {
          S && S(),
            y && y(),
            l.cancelToken && l.cancelToken.unsubscribe(c),
            l.signal && l.signal.removeEventListener("abort", c);
        }
        let w = new XMLHttpRequest();
        w.open(l.method.toUpperCase(), l.url, !0), (w.timeout = l.timeout);
        function p() {
          if (!w) return;
          const h = Ee.from(
              "getAllResponseHeaders" in w && w.getAllResponseHeaders()
            ),
            k = {
              data:
                !s || s === "text" || s === "json"
                  ? w.responseText
                  : w.response,
              status: w.status,
              statusText: w.statusText,
              headers: h,
              config: e,
              request: w,
            };
          ad(
            function (N) {
              n(N), g();
            },
            function (N) {
              r(N), g();
            },
            k
          ),
            (w = null);
        }
        "onloadend" in w
          ? (w.onloadend = p)
          : (w.onreadystatechange = function () {
              !w ||
                w.readyState !== 4 ||
                (w.status === 0 &&
                  !(w.responseURL && w.responseURL.indexOf("file:") === 0)) ||
                setTimeout(p);
            }),
          (w.onabort = function () {
            w &&
              (r(new z("Request aborted", z.ECONNABORTED, e, w)), (w = null));
          }),
          (w.onerror = function () {
            r(new z("Network Error", z.ERR_NETWORK, e, w)), (w = null);
          }),
          (w.ontimeout = function () {
            let E = l.timeout
              ? "timeout of " + l.timeout + "ms exceeded"
              : "timeout exceeded";
            const k = l.transitional || id;
            l.timeoutErrorMessage && (E = l.timeoutErrorMessage),
              r(
                new z(
                  E,
                  k.clarifyTimeoutError ? z.ETIMEDOUT : z.ECONNABORTED,
                  e,
                  w
                )
              ),
              (w = null);
          }),
          o === void 0 && i.setContentType(null),
          "setRequestHeader" in w &&
            v.forEach(i.toJSON(), function (E, k) {
              w.setRequestHeader(k, E);
            }),
          v.isUndefined(l.withCredentials) ||
            (w.withCredentials = !!l.withCredentials),
          s && s !== "json" && (w.responseType = l.responseType),
          a && (([m, y] = Ol(a, !0)), w.addEventListener("progress", m)),
          u &&
            w.upload &&
            (([d, S] = Ol(u)),
            w.upload.addEventListener("progress", d),
            w.upload.addEventListener("loadend", S)),
          (l.cancelToken || l.signal) &&
            ((c = (h) => {
              w &&
                (r(!h || h.type ? new Nn(null, e, w) : h),
                w.abort(),
                (w = null));
            }),
            l.cancelToken && l.cancelToken.subscribe(c),
            l.signal &&
              (l.signal.aborted ? c() : l.signal.addEventListener("abort", c)));
        const f = Q0(l.url);
        if (f && Se.protocols.indexOf(f) === -1) {
          r(new z("Unsupported protocol " + f + ":", z.ERR_BAD_REQUEST, e));
          return;
        }
        w.send(o || null);
      });
    },
  ey = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        l;
      const o = function (a) {
        if (!l) {
          (l = !0), s();
          const c = a instanceof Error ? a : this.reason;
          r.abort(
            c instanceof z ? c : new Nn(c instanceof Error ? c.message : c)
          );
        }
      };
      let i =
        t &&
        setTimeout(() => {
          (i = null), o(new z(`timeout ${t} of ms exceeded`, z.ETIMEDOUT));
        }, t);
      const s = () => {
        e &&
          (i && clearTimeout(i),
          (i = null),
          e.forEach((a) => {
            a.unsubscribe
              ? a.unsubscribe(o)
              : a.removeEventListener("abort", o);
          }),
          (e = null));
      };
      e.forEach((a) => a.addEventListener("abort", o));
      const { signal: u } = r;
      return (u.unsubscribe = () => v.asap(s)), u;
    }
  },
  ty = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      l;
    for (; r < n; ) (l = r + t), yield e.slice(r, l), (r = l);
  },
  ny = async function* (e, t) {
    for await (const n of ry(e)) yield* ty(n, t);
  },
  ry = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  pa = (e, t, n, r) => {
    const l = ny(e, t);
    let o = 0,
      i,
      s = (u) => {
        i || ((i = !0), r && r(u));
      };
    return new ReadableStream(
      {
        async pull(u) {
          try {
            const { done: a, value: c } = await l.next();
            if (a) {
              s(), u.close();
              return;
            }
            let d = c.byteLength;
            if (n) {
              let m = (o += d);
              n(m);
            }
            u.enqueue(new Uint8Array(c));
          } catch (a) {
            throw (s(a), a);
          }
        },
        cancel(u) {
          return s(u), l.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  bl =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  dd = bl && typeof ReadableStream == "function",
  ly =
    bl &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  pd = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  oy =
    dd &&
    pd(() => {
      let e = !1;
      const t = new Request(Se.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  ha = 64 * 1024,
  Ii = dd && pd(() => v.isReadableStream(new Response("").body)),
  Ll = { stream: Ii && ((e) => e.body) };
bl &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Ll[t] &&
        (Ll[t] = v.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new z(
                `Response type '${t}' is not supported`,
                z.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const iy = async (e) => {
    if (e == null) return 0;
    if (v.isBlob(e)) return e.size;
    if (v.isSpecCompliantForm(e))
      return (
        await new Request(Se.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (v.isArrayBufferView(e) || v.isArrayBuffer(e)) return e.byteLength;
    if ((v.isURLSearchParams(e) && (e = e + ""), v.isString(e)))
      return (await ly(e)).byteLength;
  },
  sy = async (e, t) => {
    const n = v.toFiniteNumber(e.getContentLength());
    return n ?? iy(t);
  },
  uy =
    bl &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: l,
        cancelToken: o,
        timeout: i,
        onDownloadProgress: s,
        onUploadProgress: u,
        responseType: a,
        headers: c,
        withCredentials: d = "same-origin",
        fetchOptions: m,
      } = fd(e);
      a = a ? (a + "").toLowerCase() : "text";
      let S = ey([l, o && o.toAbortSignal()], i),
        y;
      const g =
        S &&
        S.unsubscribe &&
        (() => {
          S.unsubscribe();
        });
      let w;
      try {
        if (
          u &&
          oy &&
          n !== "get" &&
          n !== "head" &&
          (w = await sy(c, r)) !== 0
        ) {
          let k = new Request(t, { method: "POST", body: r, duplex: "half" }),
            _;
          if (
            (v.isFormData(r) &&
              (_ = k.headers.get("content-type")) &&
              c.setContentType(_),
            k.body)
          ) {
            const [N, O] = ca(w, Ol(fa(u)));
            r = pa(k.body, ha, N, O);
          }
        }
        v.isString(d) || (d = d ? "include" : "omit");
        const p = "credentials" in Request.prototype;
        y = new Request(t, {
          ...m,
          signal: S,
          method: n.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: p ? d : void 0,
        });
        let f = await fetch(y);
        const h = Ii && (a === "stream" || a === "response");
        if (Ii && (s || (h && g))) {
          const k = {};
          ["status", "statusText", "headers"].forEach((L) => {
            k[L] = f[L];
          });
          const _ = v.toFiniteNumber(f.headers.get("content-length")),
            [N, O] = (s && ca(_, Ol(fa(s), !0))) || [];
          f = new Response(
            pa(f.body, ha, N, () => {
              O && O(), g && g();
            }),
            k
          );
        }
        a = a || "text";
        let E = await Ll[v.findKey(Ll, a) || "text"](f, e);
        return (
          !h && g && g(),
          await new Promise((k, _) => {
            ad(k, _, {
              data: E,
              headers: Ee.from(f.headers),
              status: f.status,
              statusText: f.statusText,
              config: e,
              request: y,
            });
          })
        );
      } catch (p) {
        throw (
          (g && g(),
          p && p.name === "TypeError" && /fetch/i.test(p.message)
            ? Object.assign(new z("Network Error", z.ERR_NETWORK, e, y), {
                cause: p.cause || p,
              })
            : z.from(p, p && p.code, e, y))
        );
      }
    }),
  Ai = { http: k0, xhr: b0, fetch: uy };
v.forEach(Ai, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ma = (e) => `- ${e}`,
  ay = (e) => v.isFunction(e) || e === null || e === !1,
  hd = {
    getAdapter: (e) => {
      e = v.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const l = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (
          ((r = n),
          !ay(n) && ((r = Ai[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new z(`Unknown adapter '${i}'`);
        if (r) break;
        l[i || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(l).map(
          ([s, u]) =>
            `adapter ${s} ` +
            (u === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(ma).join(`
`)
            : " " + ma(o[0])
          : "as no adapter specified";
        throw new z(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Ai,
  };
function Fo(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Nn(null, e);
}
function ya(e) {
  return (
    Fo(e),
    (e.headers = Ee.from(e.headers)),
    (e.data = Ao.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    hd
      .getAdapter(e.adapter || Cr.adapter)(e)
      .then(
        function (r) {
          return (
            Fo(e),
            (r.data = Ao.call(e, e.transformResponse, r)),
            (r.headers = Ee.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            ud(r) ||
              (Fo(e),
              r &&
                r.response &&
                ((r.response.data = Ao.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = Ee.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const md = "1.7.7",
  Us = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Us[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const ga = {};
Us.transitional = function (t, n, r) {
  function l(o, i) {
    return (
      "[Axios v" +
      md +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (o, i, s) => {
    if (t === !1)
      throw new z(
        l(i, " has been removed" + (n ? " in " + n : "")),
        z.ERR_DEPRECATED
      );
    return (
      n &&
        !ga[i] &&
        ((ga[i] = !0),
        console.warn(
          l(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, i, s) : !0
    );
  };
};
function cy(e, t, n) {
  if (typeof e != "object")
    throw new z("options must be an object", z.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let l = r.length;
  for (; l-- > 0; ) {
    const o = r[l],
      i = t[o];
    if (i) {
      const s = e[o],
        u = s === void 0 || i(s, o, e);
      if (u !== !0)
        throw new z("option " + o + " must be " + u, z.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new z("Unknown option " + o, z.ERR_BAD_OPTION);
  }
}
const Fi = { assertOptions: cy, validators: Us },
  st = Fi.validators;
class Mt {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new ua(), response: new ua() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let l;
        Error.captureStackTrace
          ? Error.captureStackTrace((l = {}))
          : (l = new Error());
        const o = l.stack ? l.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? o &&
              !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + o)
            : (r.stack = o);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Qt(this.defaults, n));
    const { transitional: r, paramsSerializer: l, headers: o } = n;
    r !== void 0 &&
      Fi.assertOptions(
        r,
        {
          silentJSONParsing: st.transitional(st.boolean),
          forcedJSONParsing: st.transitional(st.boolean),
          clarifyTimeoutError: st.transitional(st.boolean),
        },
        !1
      ),
      l != null &&
        (v.isFunction(l)
          ? (n.paramsSerializer = { serialize: l })
          : Fi.assertOptions(
              l,
              { encode: st.function, serialize: st.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = o && v.merge(o.common, o[n.method]);
    o &&
      v.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (y) => {
          delete o[y];
        }
      ),
      (n.headers = Ee.concat(i, o));
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((u = u && g.synchronous), s.unshift(g.fulfilled, g.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (g) {
      a.push(g.fulfilled, g.rejected);
    });
    let c,
      d = 0,
      m;
    if (!u) {
      const y = [ya.bind(this), void 0];
      for (
        y.unshift.apply(y, s),
          y.push.apply(y, a),
          m = y.length,
          c = Promise.resolve(n);
        d < m;

      )
        c = c.then(y[d++], y[d++]);
      return c;
    }
    m = s.length;
    let S = n;
    for (d = 0; d < m; ) {
      const y = s[d++],
        g = s[d++];
      try {
        S = y(S);
      } catch (w) {
        g.call(this, w);
        break;
      }
    }
    try {
      c = ya.call(this, S);
    } catch (y) {
      return Promise.reject(y);
    }
    for (d = 0, m = a.length; d < m; ) c = c.then(a[d++], a[d++]);
    return c;
  }
  getUri(t) {
    t = Qt(this.defaults, t);
    const n = cd(t.baseURL, t.url);
    return od(n, t.params, t.paramsSerializer);
  }
}
v.forEach(["delete", "get", "head", "options"], function (t) {
  Mt.prototype[t] = function (n, r) {
    return this.request(
      Qt(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
v.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, i, s) {
      return this.request(
        Qt(s || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (Mt.prototype[t] = n()), (Mt.prototype[t + "Form"] = n(!0));
});
class Ms {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((l) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](l);
      r._listeners = null;
    }),
      (this.promise.then = (l) => {
        let o;
        const i = new Promise((s) => {
          r.subscribe(s), (o = s);
        }).then(l);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, s) {
        r.reason || ((r.reason = new Nn(o, i, s)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Ms(function (l) {
        t = l;
      }),
      cancel: t,
    };
  }
}
function fy(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function dy(e) {
  return v.isObject(e) && e.isAxiosError === !0;
}
const Di = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Di).forEach(([e, t]) => {
  Di[t] = e;
});
function yd(e) {
  const t = new Mt(e),
    n = qf(Mt.prototype.request, t);
  return (
    v.extend(n, Mt.prototype, t, { allOwnKeys: !0 }),
    v.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (l) {
      return yd(Qt(e, l));
    }),
    n
  );
}
const J = yd(Cr);
J.Axios = Mt;
J.CanceledError = Nn;
J.CancelToken = Ms;
J.isCancel = ud;
J.VERSION = md;
J.toFormData = Zl;
J.AxiosError = z;
J.Cancel = J.CanceledError;
J.all = function (t) {
  return Promise.all(t);
};
J.spread = fy;
J.isAxiosError = dy;
J.mergeConfig = Qt;
J.AxiosHeaders = Ee;
J.formToJSON = (e) => sd(v.isHTMLForm(e) ? new FormData(e) : e);
J.getAdapter = hd.getAdapter;
J.HttpStatusCode = Di;
J.default = J;
const Bs = ({ text: e, type: t, onClick: n, className: r }) =>
    R.jsx("button", {
      type: t,
      onClick: n,
      className: `btn ${r}`,
      children: e,
    }),
  va = ({
    id: e,
    type: t,
    value: n,
    onChange: r,
    placeholder: l,
    className: o,
  }) =>
    R.jsx("input", {
      id: e,
      type: t,
      value: n,
      onChange: r,
      placeholder: l,
      className:
        "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none",
      required: !0,
    }),
  wa = ({ htmlFor: e, children: t, className: n }) =>
    R.jsx("label", {
      htmlFor: e,
      className: "block text-white mb-1 font-extrabold",
      children: t,
    }),
  py = () => {
    const e = Is(),
      [t, n] = C.useState(""),
      [r, l] = C.useState(""),
      [o, i] = C.useState(""),
      [s, u] = C.useState(!1),
      a = async (c) => {
        c.preventDefault(), u(!0), i("");
        try {
          const d = await J.post("https://reqres.in/api/login", {
            email: t,
            password: r,
          });
          console.log("Response:", d),
            localStorage.setItem("token", d.data.token),
            localStorage.setItem("isLoggedIn", "true"),
            e("/quiz-app");
        } catch {
          i("Invalid login credentials");
        } finally {
          u(!1);
        }
      };
    return R.jsxs("div", {
      className:
        "min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600",
      children: [
        R.jsx("div", {
          children: R.jsxs("h2", {
            className:
              "text-5xl mb-10 text-center font-monserrat font-extrabold text-white text-shadow animate-bounce ",
            children: ["ANIME ", R.jsx("br", {}), " QUIZ"],
          }),
        }),
        R.jsx("div", {
          className: "max-w-md w-full",
          children: R.jsxs("form", {
            onSubmit: a,
            className: "space-y-4 font-nunito",
            children: [
              R.jsxs("div", {
                children: [
                  R.jsx(wa, { htmlFor: "email", children: "Email" }),
                  R.jsx(va, {
                    id: "email",
                    name: "email",
                    type: "email",
                    value: t,
                    onChange: (c) => n(c.target.value),
                    placeholder: "Enter your email",
                  }),
                ],
              }),
              R.jsxs("div", {
                children: [
                  R.jsx(wa, { htmlFor: "password", children: "Password" }),
                  R.jsx(va, {
                    id: "password",
                    name: "password",
                    type: "password",
                    value: r,
                    onChange: (c) => l(c.target.value),
                    placeholder: "Enter your password",
                  }),
                ],
              }),
              R.jsx(Bs, {
                type: "submit",
                text: "LOGIN",
                className:
                  "w-full bg-white text-indigo-700 font-extrabold py-2 mt-7 rounded-md hover:bg-indigo-700 hover:text-white transition duration-300",
                disabled: s,
              }),
              o &&
                R.jsx("p", {
                  className: "text-white text-center",
                  children: o,
                }),
            ],
          }),
        }),
      ],
    });
  },
  hy = "/quiz-app/assets/correct-DYh05E-B.wav",
  my = "/quiz-app/assets/incorrect-vkj7EGiZ.wav",
  yy = "/quiz-app/assets/background-vk_5S6Ww.mp3",
  gy = () => {
    const [e, t] = C.useState([]),
      [n, r] = C.useState(0),
      [l, o] = C.useState([]),
      [i, s] = C.useState(!1),
      [u, a] = C.useState(60),
      [c, d] = C.useState(0),
      [m, S] = C.useState(null),
      y = C.useRef(null),
      g = C.useRef(new Audio()),
      w = C.useRef(new Audio(yy)),
      p = async () => {
        try {
          const L = await J.get(
            "https://opentdb.com/api.php?amount=10&category=31"
          );
          t(L.data.results);
        } catch (L) {
          console.error("Error fetching questions:", L);
        }
      };
    C.useEffect(() => {
      p();
    }, []),
      C.useEffect(() => {
        const L = localStorage.getItem("currentQuestionIndex"),
          j = JSON.parse(localStorage.getItem("userAnswers")),
          K = localStorage.getItem("timeLeft"),
          xe = localStorage.getItem("showResults"),
          We = JSON.parse(localStorage.getItem("correctAnswersCount"));
        return (
          L && r(Number(L)),
          j && o(j),
          K && a(Number(K)),
          xe === "true" && s(!0),
          We && d(We),
          (w.current.loop = !0),
          w.current.play(),
          f(),
          () => {
            clearInterval(y.current),
              w.current.pause(),
              (w.current.currentTime = 0);
          }
        );
      }, []);
    const f = () => {
        clearInterval(y.current),
          (y.current = setInterval(() => {
            a((L) => {
              if (L <= 1) return clearInterval(y.current), k(), 0;
              const j = L - 1;
              return localStorage.setItem("timeLeft", j), j;
            });
          }, 1e3));
      },
      h = (L) => {
        (g.current.src = L ? hy : my), g.current.play();
      },
      E = (L) => {
        S(L);
        const j = L === e[n].correct_answer;
        h(j);
        const K = [...l, L];
        o(K);
        let xe = JSON.parse(localStorage.getItem("correctAnswersCount")) || 0;
        j &&
          ((xe += 1), localStorage.setItem("correctAnswersCount", xe), d(xe)),
          localStorage.setItem("userAnswers", JSON.stringify(K)),
          localStorage.setItem("currentQuestionIndex", n + 1),
          setTimeout(() => {
            n < e.length - 1 ? r(n + 1) : k(), S(null);
          }, 500);
      },
      k = () => {
        s(!0),
          localStorage.setItem("showResults", "true"),
          clearInterval(y.current),
          localStorage.removeItem("currentQuestionIndex"),
          localStorage.removeItem("userAnswers"),
          localStorage.removeItem("timeLeft");
      },
      _ = async () => {
        localStorage.removeItem("currentQuestionIndex"),
          localStorage.removeItem("userAnswers"),
          localStorage.removeItem("timeLeft"),
          localStorage.removeItem("showResults"),
          localStorage.removeItem("correctAnswersCount"),
          await p(),
          r(0),
          o([]),
          s(!1),
          a(60),
          d(0),
          f();
      },
      N = () => {
        if (e.length === 0)
          return R.jsx("p", { children: "Loading questions..." });
        const L = e[n],
          j = L.question
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&eacute;/g, "é")
            .replace(/&amp;/g, "&");
        return R.jsxs("div", {
          className: "flex flex-col",
          children: [
            R.jsxs("div", {
              className:
                "fixed top-0 left-0 right-0 flex p-4 md:p-10 justify-between w-full md:text-3xl font-extrabold text-white text-shadow",
              children: [
                R.jsx("div", {
                  children: R.jsxs("p", { children: ["⏳ ", u, "s"] }),
                }),
                R.jsx("div", {
                  children: R.jsxs("p", {
                    children: ["Question ", n + 1, " of ", e.length],
                  }),
                }),
                R.jsx("div", {
                  children: R.jsxs("p", { children: ["Answered: ", l.length] }),
                }),
              ],
            }),
            R.jsx("div", {
              className:
                "flex bg-white md:mx-10 md:mt-28 mt-20 mx-4 shadow-md rounded-lg p-4 min-h-32 items-center justify-center",
              children: R.jsx("h2", {
                className: "text-xl font-bold",
                children: j,
              }),
            }),
            R.jsx("div", {
              className: "md:m-10 pt-10 mx-4",
              children: R.jsx("div", {
                className: "space-y-2",
                children: L.incorrect_answers
                  .concat(L.correct_answer)
                  .map((K, xe) => {
                    const We = K === L.correct_answer,
                      to =
                        m === K
                          ? We
                            ? "bg-green-400"
                            : "bg-red-400"
                          : "bg-white";
                    return R.jsx(
                      Bs,
                      {
                        text: K.replace(/&quot;/g, '"')
                          .replace(/&#039;/g, "'")
                          .replace(/&eacute;/g, "é")
                          .replace(/&amp;/g, "&"),
                        onClick: () => E(K),
                        className: `w-full text-black font-bold py-2 rounded-md shadow-xl transition duration-300 ${to}`,
                      },
                      xe
                    );
                  }),
              }),
            }),
          ],
        });
      },
      O = () => {
        const L = e.length,
          j = L - c;
        return R.jsxs("div", {
          className:
            "flex flex-col md:mx-auto mx-4 my-24 bg-white shadow-md rounded-lg p-8 md:max-w-md",
          children: [
            R.jsx("h2", {
              className: "text-2xl font-bold mb-4",
              children: "Results",
            }),
            R.jsxs("p", {
              className: "mb-4",
              children: ["You answered ", l.length, " questions."],
            }),
            R.jsxs("p", {
              className: "mb-4",
              children: ["Correct Answers: ", c],
            }),
            R.jsxs("p", {
              className: "mb-4",
              children: ["Wrong Answers: ", j],
            }),
            R.jsxs("p", {
              className: "mb-4",
              children: ["Total Questions: ", L],
            }),
            R.jsx("button", {
              onClick: _,
              className:
                "w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300 mt-4",
              children: "Restart Quiz",
            }),
          ],
        });
      };
    return R.jsx("div", {
      className:
        "min-h-screen flex justify-center md:items-center font-nunito bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600",
      children: R.jsx("div", { className: "w-full", children: i ? O() : N() }),
    });
  },
  vy = () => {
    const e = Is(),
      [t, n] = C.useState(null),
      r = async () => {
        try {
          const i = await J.get("https://reqres.in/api/users/4");
          n(i.data.data);
        } catch (i) {
          console.error("Error fetching user:", i);
        }
      };
    C.useEffect(() => {
      r();
    }, []);
    const l = () => {
        localStorage.removeItem("token"),
          localStorage.setItem("isLoggedIn", "false"),
          e("/quiz-app/login");
      },
      o = () => {
        e("/quiz-app/quiz");
      };
    return R.jsxs("div", {
      className:
        "flex font-nunito min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 flex-col items-center justify-center",
      children: [
        R.jsxs("div", {
          className: "flex fixed top-0 left-0 right-0  m-5 justify-between ",
          children: [
            R.jsxs("div", {
              onClick: l,
              className:
                "flex text-black bg-white items-center px-6 rounded-full gap-x-3 font-bold hover:bg-indigo-500 hover:text-white",
              children: [
                R.jsx("i", { className: "bx bx-log-out text-3xl" }),
                R.jsx("h4", { children: "Logout" }),
              ],
            }),
            R.jsx("div", {
              className:
                "flex flex-row gap-x-3 font-bold items-center bg-white rounded-full px-7 py-1",
              children: t
                ? R.jsxs(R.Fragment, {
                    children: [
                      R.jsx("img", {
                        src: t.avatar,
                        alt: `${t.first_name}'s avatar`,
                        className: "w-10 rounded-full",
                      }),
                      R.jsxs("h4", {
                        children: [t.first_name, " ", t.last_name],
                      }),
                    ],
                  })
                : R.jsx("p", { children: "Loading..." }),
            }),
          ],
        }),
        R.jsxs("div", {
          className: "",
          children: [
            R.jsx("h1", {
              className: "text-4xl text-white mb-12 font-extrabold text-shadow",
              children: "Welcome to the Anime Quiz!",
            }),
            R.jsx("div", {
              className: "flex justify-center",
              children: R.jsx(Bs, {
                onClick: o,
                text: "Start Quiz",
                className:
                  "bg-green-500 text-white font-bold px-6 py-3 rounded-md shadow-lg hover:bg-green-700 animate-bounce",
              }),
            }),
          ],
        }),
      ],
    });
  },
  Sa = ({ children: e }) =>
    localStorage.getItem("isLoggedIn") === "true"
      ? e
      : R.jsx(jm, { to: "/quiz-app/login" }),
  wy = () =>
    R.jsx(Dm, {
      children: R.jsxs(Im, {
        children: [
          R.jsx(nl, { path: "/quiz-app/login", element: R.jsx(py, {}) }),
          R.jsx(nl, {
            path: "/quiz-app",
            element: R.jsx(Sa, { children: R.jsx(vy, {}) }),
          }),
          R.jsx(nl, {
            path: "/quiz-app/quiz",
            element: R.jsx(Sa, { children: R.jsx(gy, {}) }),
          }),
        ],
      }),
    });
If(document.getElementById("root")).render(
  R.jsx(C.StrictMode, { children: R.jsx(wy, {}) })
);
