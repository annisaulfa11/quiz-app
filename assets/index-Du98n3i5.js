var Vp = Object.defineProperty;
var Qp = (e, t, n) =>
  t in e
    ? Vp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Fl = (e, t, n) => Qp(e, typeof t != "symbol" ? t + "" : t, n);
function qp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l &&
            Object.defineProperty(
              e,
              o,
              l.get ? l : { enumerable: !0, get: () => r[o] }
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
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function Kp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Tc = { exports: {} },
  al = {},
  Oc = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dr = Symbol.for("react.element"),
  Jp = Symbol.for("react.portal"),
  Xp = Symbol.for("react.fragment"),
  Gp = Symbol.for("react.strict_mode"),
  Yp = Symbol.for("react.profiler"),
  Zp = Symbol.for("react.provider"),
  bp = Symbol.for("react.context"),
  eh = Symbol.for("react.forward_ref"),
  th = Symbol.for("react.suspense"),
  nh = Symbol.for("react.memo"),
  rh = Symbol.for("react.lazy"),
  Fu = Symbol.iterator;
function oh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fu && e[Fu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Lc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  jc = Object.assign,
  zc = {};
function In(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zc),
    (this.updater = n || Lc);
}
In.prototype.isReactComponent = {};
In.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
In.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ac() {}
Ac.prototype = In.prototype;
function Ps(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zc),
    (this.updater = n || Lc);
}
var Ns = (Ps.prototype = new Ac());
Ns.constructor = Ps;
jc(Ns, In.prototype);
Ns.isPureReactComponent = !0;
var Mu = Array.isArray,
  Ic = Object.prototype.hasOwnProperty,
  Ts = { current: null },
  Dc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fc(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Ic.call(t, r) && !Dc.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: Dr,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Ts.current,
  };
}
function lh(e, t) {
  return {
    $$typeof: Dr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Os(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Dr;
}
function ih(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Uu = /\/+/g;
function Ml(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ih("" + e.key)
    : t.toString(36);
}
function po(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Dr:
          case Jp:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + Ml(i, 0) : r),
      Mu(o)
        ? ((n = ""),
          e != null && (n = e.replace(Uu, "$&/") + "/"),
          po(o, t, n, "", function (a) {
            return a;
          }))
        : o != null &&
          (Os(o) &&
            (o = lh(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Uu, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Mu(e)))
    for (var s = 0; s < e.length; s++) {
      l = e[s];
      var u = r + Ml(l, s);
      i += po(l, t, n, u, o);
    }
  else if (((u = oh(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(l = e.next()).done; )
      (l = l.value), (u = r + Ml(l, s++)), (i += po(l, t, n, u, o));
  else if (l === "object")
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
function Jr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    po(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function sh(e) {
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
var me = { current: null },
  ho = { transition: null },
  uh = {
    ReactCurrentDispatcher: me,
    ReactCurrentBatchConfig: ho,
    ReactCurrentOwner: Ts,
  };
function Mc() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = {
  map: Jr,
  forEach: function (e, t, n) {
    Jr(
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
      Jr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Jr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Os(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
I.Component = In;
I.Fragment = Xp;
I.Profiler = Yp;
I.PureComponent = Ps;
I.StrictMode = Gp;
I.Suspense = th;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uh;
I.act = Mc;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = jc({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = Ts.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Ic.call(t, u) &&
        !Dc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: Dr, type: e.type, key: o, ref: l, props: r, _owner: i };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: bp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Zp, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = Fc;
I.createFactory = function (e) {
  var t = Fc.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: eh, render: e };
};
I.isValidElement = Os;
I.lazy = function (e) {
  return { $$typeof: rh, _payload: { _status: -1, _result: e }, _init: sh };
};
I.memo = function (e, t) {
  return { $$typeof: nh, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = ho.transition;
  ho.transition = {};
  try {
    e();
  } finally {
    ho.transition = t;
  }
};
I.unstable_act = Mc;
I.useCallback = function (e, t) {
  return me.current.useCallback(e, t);
};
I.useContext = function (e) {
  return me.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return me.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return me.current.useEffect(e, t);
};
I.useId = function () {
  return me.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return me.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return me.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return me.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return me.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return me.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return me.current.useRef(e);
};
I.useState = function (e) {
  return me.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return me.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return me.current.useTransition();
};
I.version = "18.3.1";
Oc.exports = I;
var P = Oc.exports;
const Uc = Kp(P),
  wi = qp({ __proto__: null, default: Uc }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ah = P,
  ch = Symbol.for("react.element"),
  fh = Symbol.for("react.fragment"),
  dh = Object.prototype.hasOwnProperty,
  ph = ah.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  hh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bc(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) dh.call(t, r) && !hh.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: ch,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: ph.current,
  };
}
al.Fragment = fh;
al.jsx = Bc;
al.jsxs = Bc;
Tc.exports = al;
var N = Tc.exports,
  $c = { exports: {} },
  ze = {},
  Wc = { exports: {} },
  Hc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, z) {
    var A = O.length;
    O.push(z);
    e: for (; 0 < A; ) {
      var X = (A - 1) >>> 1,
        te = O[X];
      if (0 < o(te, z)) (O[X] = z), (O[A] = te), (A = X);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var z = O[0],
      A = O.pop();
    if (A !== z) {
      O[0] = A;
      e: for (var X = 0, te = O.length, qr = te >>> 1; X < qr; ) {
        var Ft = 2 * (X + 1) - 1,
          Dl = O[Ft],
          Mt = Ft + 1,
          Kr = O[Mt];
        if (0 > o(Dl, A))
          Mt < te && 0 > o(Kr, Dl)
            ? ((O[X] = Kr), (O[Mt] = A), (X = Mt))
            : ((O[X] = Dl), (O[Ft] = A), (X = Ft));
        else if (Mt < te && 0 > o(Kr, A)) (O[X] = Kr), (O[Mt] = A), (X = Mt);
        else break e;
      }
    }
    return z;
  }
  function o(O, z) {
    var A = O.sortIndex - z.sortIndex;
    return A !== 0 ? A : O.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
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
  var u = [],
    a = [],
    c = 1,
    f = null,
    m = 3,
    v = !1,
    y = !1,
    w = !1,
    g = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(O) {
    for (var z = n(a); z !== null; ) {
      if (z.callback === null) r(a);
      else if (z.startTime <= O)
        r(a), (z.sortIndex = z.expirationTime), t(u, z);
      else break;
      z = n(a);
    }
  }
  function S(O) {
    if (((w = !1), h(O), !y))
      if (n(u) !== null) (y = !0), $n(x);
      else {
        var z = n(a);
        z !== null && Il(S, z.startTime - O);
      }
  }
  function x(O, z) {
    (y = !1), w && ((w = !1), p(_), (_ = -1)), (v = !0);
    var A = m;
    try {
      for (
        h(z), f = n(u);
        f !== null && (!(f.expirationTime > z) || (O && !U()));

      ) {
        var X = f.callback;
        if (typeof X == "function") {
          (f.callback = null), (m = f.priorityLevel);
          var te = X(f.expirationTime <= z);
          (z = e.unstable_now()),
            typeof te == "function" ? (f.callback = te) : f === n(u) && r(u),
            h(z);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var qr = !0;
      else {
        var Ft = n(a);
        Ft !== null && Il(S, Ft.startTime - z), (qr = !1);
      }
      return qr;
    } finally {
      (f = null), (m = A), (v = !1);
    }
  }
  var C = !1,
    R = null,
    _ = -1,
    D = 5,
    L = -1;
  function U() {
    return !(e.unstable_now() - L < D);
  }
  function ue() {
    if (R !== null) {
      var O = e.unstable_now();
      L = O;
      var z = !0;
      try {
        z = R(!0, O);
      } finally {
        z ? Ce() : ((C = !1), (R = null));
      }
    } else C = !1;
  }
  var Ce;
  if (typeof d == "function")
    Ce = function () {
      d(ue);
    };
  else if (typeof MessageChannel < "u") {
    var Dt = new MessageChannel(),
      Du = Dt.port2;
    (Dt.port1.onmessage = ue),
      (Ce = function () {
        Du.postMessage(null);
      });
  } else
    Ce = function () {
      g(ue, 0);
    };
  function $n(O) {
    (R = O), C || ((C = !0), Ce());
  }
  function Il(O, z) {
    _ = g(function () {
      O(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), $n(x));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (D = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (O) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = m;
      }
      var A = m;
      m = z;
      try {
        return O();
      } finally {
        m = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, z) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var A = m;
      m = O;
      try {
        return z();
      } finally {
        m = A;
      }
    }),
    (e.unstable_scheduleCallback = function (O, z, A) {
      var X = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? X + A : X))
          : (A = X),
        O)
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
        (O = {
          id: c++,
          callback: z,
          priorityLevel: O,
          startTime: A,
          expirationTime: te,
          sortIndex: -1,
        }),
        A > X
          ? ((O.sortIndex = A),
            t(a, O),
            n(u) === null &&
              O === n(a) &&
              (w ? (p(_), (_ = -1)) : (w = !0), Il(S, A - X)))
          : ((O.sortIndex = te), t(u, O), y || v || ((y = !0), $n(x))),
        O
      );
    }),
    (e.unstable_shouldYield = U),
    (e.unstable_wrapCallback = function (O) {
      var z = m;
      return function () {
        var A = m;
        m = z;
        try {
          return O.apply(this, arguments);
        } finally {
          m = A;
        }
      };
    });
})(Hc);
Wc.exports = Hc;
var mh = Wc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yh = P,
  Oe = mh;
function k(e) {
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
var Vc = new Set(),
  hr = {};
function on(e, t) {
  Pn(e, t), Pn(e + "Capture", t);
}
function Pn(e, t) {
  for (hr[e] = t, e = 0; e < t.length; e++) Vc.add(t[e]);
}
var st = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Si = Object.prototype.hasOwnProperty,
  gh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Bu = {},
  $u = {};
function vh(e) {
  return Si.call($u, e)
    ? !0
    : Si.call(Bu, e)
    ? !1
    : gh.test(e)
    ? ($u[e] = !0)
    : ((Bu[e] = !0), !1);
}
function wh(e, t, n, r) {
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
function Sh(e, t, n, r) {
  if (t === null || typeof t > "u" || wh(e, t, n, r)) return !0;
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
function ye(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    se[e] = new ye(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  se[t] = new ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  se[e] = new ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  se[e] = new ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    se[e] = new ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  se[e] = new ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  se[e] = new ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  se[e] = new ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  se[e] = new ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ls = /[\-:]([a-z])/g;
function js(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ls, js);
    se[t] = new ye(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ls, js);
    se[t] = new ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ls, js);
  se[t] = new ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  se[e] = new ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
se.xlinkHref = new ye(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  se[e] = new ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function zs(e, t, n, r) {
  var o = se.hasOwnProperty(t) ? se[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Sh(t, n, o, r) && (n = null),
    r || o === null
      ? vh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var dt = yh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Xr = Symbol.for("react.element"),
  an = Symbol.for("react.portal"),
  cn = Symbol.for("react.fragment"),
  As = Symbol.for("react.strict_mode"),
  Ei = Symbol.for("react.profiler"),
  Qc = Symbol.for("react.provider"),
  qc = Symbol.for("react.context"),
  Is = Symbol.for("react.forward_ref"),
  xi = Symbol.for("react.suspense"),
  ki = Symbol.for("react.suspense_list"),
  Ds = Symbol.for("react.memo"),
  mt = Symbol.for("react.lazy"),
  Kc = Symbol.for("react.offscreen"),
  Wu = Symbol.iterator;
function Wn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Wu && e[Wu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var q = Object.assign,
  Ul;
function Yn(e) {
  if (Ul === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ul = (t && t[1]) || "";
    }
  return (
    `
` +
    Ul +
    e
  );
}
var Bl = !1;
function $l(e, t) {
  if (!e || Bl) return "";
  Bl = !0;
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
        var o = a.stack.split(`
`),
          l = r.stack.split(`
`),
          i = o.length - 1,
          s = l.length - 1;
        1 <= i && 0 <= s && o[i] !== l[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (o[i] !== l[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || o[i] !== l[s])) {
                var u =
                  `
` + o[i].replace(" at new ", " at ");
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
    (Bl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Yn(e) : "";
}
function Eh(e) {
  switch (e.tag) {
    case 5:
      return Yn(e.type);
    case 16:
      return Yn("Lazy");
    case 13:
      return Yn("Suspense");
    case 19:
      return Yn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = $l(e.type, !1)), e;
    case 11:
      return (e = $l(e.type.render, !1)), e;
    case 1:
      return (e = $l(e.type, !0)), e;
    default:
      return "";
  }
}
function Ci(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case cn:
      return "Fragment";
    case an:
      return "Portal";
    case Ei:
      return "Profiler";
    case As:
      return "StrictMode";
    case xi:
      return "Suspense";
    case ki:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case qc:
        return (e.displayName || "Context") + ".Consumer";
      case Qc:
        return (e._context.displayName || "Context") + ".Provider";
      case Is:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ds:
        return (
          (t = e.displayName || null), t !== null ? t : Ci(e.type) || "Memo"
        );
      case mt:
        (t = e._payload), (e = e._init);
        try {
          return Ci(e(t));
        } catch {}
    }
  return null;
}
function xh(e) {
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
      return Ci(t);
    case 8:
      return t === As ? "StrictMode" : "Mode";
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
function Ot(e) {
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
function Jc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function kh(e) {
  var t = Jc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), l.call(this, i);
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
function Gr(e) {
  e._valueTracker || (e._valueTracker = kh(e));
}
function Xc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Jc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Oo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function _i(e, t) {
  var n = t.checked;
  return q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Hu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ot(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Gc(e, t) {
  (t = t.checked), t != null && zs(e, "checked", t, !1);
}
function Ri(e, t) {
  Gc(e, t);
  var n = Ot(t.value),
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
    ? Pi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Pi(e, t.type, Ot(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Vu(e, t, n) {
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
function Pi(e, t, n) {
  (t !== "number" || Oo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Zn = Array.isArray;
function En(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ot(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ni(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Qu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (Zn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ot(n) };
}
function Yc(e, t) {
  var n = Ot(t.value),
    r = Ot(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function qu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Zc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ti(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Zc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Yr,
  bc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Yr = Yr || document.createElement("div"),
          Yr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Yr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function mr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var nr = {
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
  Ch = ["Webkit", "ms", "Moz", "O"];
Object.keys(nr).forEach(function (e) {
  Ch.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (nr[t] = nr[e]);
  });
});
function ef(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (nr.hasOwnProperty(e) && nr[e])
    ? ("" + t).trim()
    : t + "px";
}
function tf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = ef(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var _h = q(
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
function Oi(e, t) {
  if (t) {
    if (_h[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Li(e, t) {
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
var ji = null;
function Fs(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var zi = null,
  xn = null,
  kn = null;
function Ku(e) {
  if ((e = Ur(e))) {
    if (typeof zi != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = hl(t)), zi(e.stateNode, e.type, t));
  }
}
function nf(e) {
  xn ? (kn ? kn.push(e) : (kn = [e])) : (xn = e);
}
function rf() {
  if (xn) {
    var e = xn,
      t = kn;
    if (((kn = xn = null), Ku(e), t)) for (e = 0; e < t.length; e++) Ku(t[e]);
  }
}
function of(e, t) {
  return e(t);
}
function lf() {}
var Wl = !1;
function sf(e, t, n) {
  if (Wl) return e(t, n);
  Wl = !0;
  try {
    return of(e, t, n);
  } finally {
    (Wl = !1), (xn !== null || kn !== null) && (lf(), rf());
  }
}
function yr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = hl(n);
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
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var Ai = !1;
if (st)
  try {
    var Hn = {};
    Object.defineProperty(Hn, "passive", {
      get: function () {
        Ai = !0;
      },
    }),
      window.addEventListener("test", Hn, Hn),
      window.removeEventListener("test", Hn, Hn);
  } catch {
    Ai = !1;
  }
function Rh(e, t, n, r, o, l, i, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (c) {
    this.onError(c);
  }
}
var rr = !1,
  Lo = null,
  jo = !1,
  Ii = null,
  Ph = {
    onError: function (e) {
      (rr = !0), (Lo = e);
    },
  };
function Nh(e, t, n, r, o, l, i, s, u) {
  (rr = !1), (Lo = null), Rh.apply(Ph, arguments);
}
function Th(e, t, n, r, o, l, i, s, u) {
  if ((Nh.apply(this, arguments), rr)) {
    if (rr) {
      var a = Lo;
      (rr = !1), (Lo = null);
    } else throw Error(k(198));
    jo || ((jo = !0), (Ii = a));
  }
}
function ln(e) {
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
function uf(e) {
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
function Ju(e) {
  if (ln(e) !== e) throw Error(k(188));
}
function Oh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ln(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return Ju(o), e;
        if (l === r) return Ju(o), t;
        l = l.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, s = o.child; s; ) {
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
      if (!i) {
        for (s = l.child; s; ) {
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
        if (!i) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function af(e) {
  return (e = Oh(e)), e !== null ? cf(e) : null;
}
function cf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = cf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ff = Oe.unstable_scheduleCallback,
  Xu = Oe.unstable_cancelCallback,
  Lh = Oe.unstable_shouldYield,
  jh = Oe.unstable_requestPaint,
  G = Oe.unstable_now,
  zh = Oe.unstable_getCurrentPriorityLevel,
  Ms = Oe.unstable_ImmediatePriority,
  df = Oe.unstable_UserBlockingPriority,
  zo = Oe.unstable_NormalPriority,
  Ah = Oe.unstable_LowPriority,
  pf = Oe.unstable_IdlePriority,
  cl = null,
  be = null;
function Ih(e) {
  if (be && typeof be.onCommitFiberRoot == "function")
    try {
      be.onCommitFiberRoot(cl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var qe = Math.clz32 ? Math.clz32 : Mh,
  Dh = Math.log,
  Fh = Math.LN2;
function Mh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Dh(e) / Fh) | 0)) | 0;
}
var Zr = 64,
  br = 4194304;
function bn(e) {
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
function Ao(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~o;
    s !== 0 ? (r = bn(s)) : ((l &= i), l !== 0 && (r = bn(l)));
  } else (i = n & ~o), i !== 0 ? (r = bn(i)) : l !== 0 && (r = bn(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - qe(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Uh(e, t) {
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
function Bh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - qe(l),
      s = 1 << i,
      u = o[i];
    u === -1
      ? (!(s & n) || s & r) && (o[i] = Uh(s, t))
      : u <= t && (e.expiredLanes |= s),
      (l &= ~s);
  }
}
function Di(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function hf() {
  var e = Zr;
  return (Zr <<= 1), !(Zr & 4194240) && (Zr = 64), e;
}
function Hl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Fr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - qe(t)),
    (e[t] = n);
}
function $h(e, t) {
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
    var o = 31 - qe(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Us(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - qe(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var M = 0;
function mf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var yf,
  Bs,
  gf,
  vf,
  wf,
  Fi = !1,
  eo = [],
  xt = null,
  kt = null,
  Ct = null,
  gr = new Map(),
  vr = new Map(),
  gt = [],
  Wh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Gu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      xt = null;
      break;
    case "dragenter":
    case "dragleave":
      kt = null;
      break;
    case "mouseover":
    case "mouseout":
      Ct = null;
      break;
    case "pointerover":
    case "pointerout":
      gr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      vr.delete(t.pointerId);
  }
}
function Vn(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Ur(t)), t !== null && Bs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Hh(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (xt = Vn(xt, e, t, n, r, o)), !0;
    case "dragenter":
      return (kt = Vn(kt, e, t, n, r, o)), !0;
    case "mouseover":
      return (Ct = Vn(Ct, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return gr.set(l, Vn(gr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), vr.set(l, Vn(vr.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Sf(e) {
  var t = Wt(e.target);
  if (t !== null) {
    var n = ln(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = uf(n)), t !== null)) {
          (e.blockedOn = t),
            wf(e.priority, function () {
              gf(n);
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
function mo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Mi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ji = r), n.target.dispatchEvent(r), (ji = null);
    } else return (t = Ur(n)), t !== null && Bs(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Yu(e, t, n) {
  mo(e) && n.delete(t);
}
function Vh() {
  (Fi = !1),
    xt !== null && mo(xt) && (xt = null),
    kt !== null && mo(kt) && (kt = null),
    Ct !== null && mo(Ct) && (Ct = null),
    gr.forEach(Yu),
    vr.forEach(Yu);
}
function Qn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fi ||
      ((Fi = !0),
      Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, Vh)));
}
function wr(e) {
  function t(o) {
    return Qn(o, e);
  }
  if (0 < eo.length) {
    Qn(eo[0], e);
    for (var n = 1; n < eo.length; n++) {
      var r = eo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    xt !== null && Qn(xt, e),
      kt !== null && Qn(kt, e),
      Ct !== null && Qn(Ct, e),
      gr.forEach(t),
      vr.forEach(t),
      n = 0;
    n < gt.length;
    n++
  )
    (r = gt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < gt.length && ((n = gt[0]), n.blockedOn === null); )
    Sf(n), n.blockedOn === null && gt.shift();
}
var Cn = dt.ReactCurrentBatchConfig,
  Io = !0;
function Qh(e, t, n, r) {
  var o = M,
    l = Cn.transition;
  Cn.transition = null;
  try {
    (M = 1), $s(e, t, n, r);
  } finally {
    (M = o), (Cn.transition = l);
  }
}
function qh(e, t, n, r) {
  var o = M,
    l = Cn.transition;
  Cn.transition = null;
  try {
    (M = 4), $s(e, t, n, r);
  } finally {
    (M = o), (Cn.transition = l);
  }
}
function $s(e, t, n, r) {
  if (Io) {
    var o = Mi(e, t, n, r);
    if (o === null) bl(e, t, r, Do, n), Gu(e, r);
    else if (Hh(o, e, t, n, r)) r.stopPropagation();
    else if ((Gu(e, r), t & 4 && -1 < Wh.indexOf(e))) {
      for (; o !== null; ) {
        var l = Ur(o);
        if (
          (l !== null && yf(l),
          (l = Mi(e, t, n, r)),
          l === null && bl(e, t, r, Do, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else bl(e, t, r, null, n);
  }
}
var Do = null;
function Mi(e, t, n, r) {
  if (((Do = null), (e = Fs(r)), (e = Wt(e)), e !== null))
    if (((t = ln(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = uf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Do = e), null;
}
function Ef(e) {
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
      switch (zh()) {
        case Ms:
          return 1;
        case df:
          return 4;
        case zo:
        case Ah:
          return 16;
        case pf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var wt = null,
  Ws = null,
  yo = null;
function xf() {
  if (yo) return yo;
  var e,
    t = Ws,
    n = t.length,
    r,
    o = "value" in wt ? wt.value : wt.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (yo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function go(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function to() {
  return !0;
}
function Zu() {
  return !1;
}
function Ae(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(l) : l[s]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? to
        : Zu),
      (this.isPropagationStopped = Zu),
      this
    );
  }
  return (
    q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = to));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = to));
      },
      persist: function () {},
      isPersistent: to,
    }),
    t
  );
}
var Dn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Hs = Ae(Dn),
  Mr = q({}, Dn, { view: 0, detail: 0 }),
  Kh = Ae(Mr),
  Vl,
  Ql,
  qn,
  fl = q({}, Mr, {
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
    getModifierState: Vs,
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
        : (e !== qn &&
            (qn && e.type === "mousemove"
              ? ((Vl = e.screenX - qn.screenX), (Ql = e.screenY - qn.screenY))
              : (Ql = Vl = 0),
            (qn = e)),
          Vl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ql;
    },
  }),
  bu = Ae(fl),
  Jh = q({}, fl, { dataTransfer: 0 }),
  Xh = Ae(Jh),
  Gh = q({}, Mr, { relatedTarget: 0 }),
  ql = Ae(Gh),
  Yh = q({}, Dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Zh = Ae(Yh),
  bh = q({}, Dn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  em = Ae(bh),
  tm = q({}, Dn, { data: 0 }),
  ea = Ae(tm),
  nm = {
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
  rm = {
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
  om = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function lm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = om[e]) ? !!t[e] : !1;
}
function Vs() {
  return lm;
}
var im = q({}, Mr, {
    key: function (e) {
      if (e.key) {
        var t = nm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = go(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? rm[e.keyCode] || "Unidentified"
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
    getModifierState: Vs,
    charCode: function (e) {
      return e.type === "keypress" ? go(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? go(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  sm = Ae(im),
  um = q({}, fl, {
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
  ta = Ae(um),
  am = q({}, Mr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Vs,
  }),
  cm = Ae(am),
  fm = q({}, Dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dm = Ae(fm),
  pm = q({}, fl, {
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
  hm = Ae(pm),
  mm = [9, 13, 27, 32],
  Qs = st && "CompositionEvent" in window,
  or = null;
st && "documentMode" in document && (or = document.documentMode);
var ym = st && "TextEvent" in window && !or,
  kf = st && (!Qs || (or && 8 < or && 11 >= or)),
  na = " ",
  ra = !1;
function Cf(e, t) {
  switch (e) {
    case "keyup":
      return mm.indexOf(t.keyCode) !== -1;
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
function _f(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var fn = !1;
function gm(e, t) {
  switch (e) {
    case "compositionend":
      return _f(t);
    case "keypress":
      return t.which !== 32 ? null : ((ra = !0), na);
    case "textInput":
      return (e = t.data), e === na && ra ? null : e;
    default:
      return null;
  }
}
function vm(e, t) {
  if (fn)
    return e === "compositionend" || (!Qs && Cf(e, t))
      ? ((e = xf()), (yo = Ws = wt = null), (fn = !1), e)
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
      return kf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var wm = {
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
function oa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!wm[e.type] : t === "textarea";
}
function Rf(e, t, n, r) {
  nf(r),
    (t = Fo(t, "onChange")),
    0 < t.length &&
      ((n = new Hs("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var lr = null,
  Sr = null;
function Sm(e) {
  Ff(e, 0);
}
function dl(e) {
  var t = hn(e);
  if (Xc(t)) return e;
}
function Em(e, t) {
  if (e === "change") return t;
}
var Pf = !1;
if (st) {
  var Kl;
  if (st) {
    var Jl = "oninput" in document;
    if (!Jl) {
      var la = document.createElement("div");
      la.setAttribute("oninput", "return;"),
        (Jl = typeof la.oninput == "function");
    }
    Kl = Jl;
  } else Kl = !1;
  Pf = Kl && (!document.documentMode || 9 < document.documentMode);
}
function ia() {
  lr && (lr.detachEvent("onpropertychange", Nf), (Sr = lr = null));
}
function Nf(e) {
  if (e.propertyName === "value" && dl(Sr)) {
    var t = [];
    Rf(t, Sr, e, Fs(e)), sf(Sm, t);
  }
}
function xm(e, t, n) {
  e === "focusin"
    ? (ia(), (lr = t), (Sr = n), lr.attachEvent("onpropertychange", Nf))
    : e === "focusout" && ia();
}
function km(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return dl(Sr);
}
function Cm(e, t) {
  if (e === "click") return dl(t);
}
function _m(e, t) {
  if (e === "input" || e === "change") return dl(t);
}
function Rm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Je = typeof Object.is == "function" ? Object.is : Rm;
function Er(e, t) {
  if (Je(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Si.call(t, o) || !Je(e[o], t[o])) return !1;
  }
  return !0;
}
function sa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ua(e, t) {
  var n = sa(e);
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
    n = sa(n);
  }
}
function Tf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Tf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Of() {
  for (var e = window, t = Oo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Oo(e.document);
  }
  return t;
}
function qs(e) {
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
function Pm(e) {
  var t = Of(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Tf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && qs(n)) {
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
        var o = n.textContent.length,
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = ua(n, l));
        var i = ua(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
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
var Nm = st && "documentMode" in document && 11 >= document.documentMode,
  dn = null,
  Ui = null,
  ir = null,
  Bi = !1;
function aa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bi ||
    dn == null ||
    dn !== Oo(r) ||
    ((r = dn),
    "selectionStart" in r && qs(r)
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
    (ir && Er(ir, r)) ||
      ((ir = r),
      (r = Fo(Ui, "onSelect")),
      0 < r.length &&
        ((t = new Hs("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = dn))));
}
function no(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var pn = {
    animationend: no("Animation", "AnimationEnd"),
    animationiteration: no("Animation", "AnimationIteration"),
    animationstart: no("Animation", "AnimationStart"),
    transitionend: no("Transition", "TransitionEnd"),
  },
  Xl = {},
  Lf = {};
st &&
  ((Lf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete pn.animationend.animation,
    delete pn.animationiteration.animation,
    delete pn.animationstart.animation),
  "TransitionEvent" in window || delete pn.transitionend.transition);
function pl(e) {
  if (Xl[e]) return Xl[e];
  if (!pn[e]) return e;
  var t = pn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Lf) return (Xl[e] = t[n]);
  return e;
}
var jf = pl("animationend"),
  zf = pl("animationiteration"),
  Af = pl("animationstart"),
  If = pl("transitionend"),
  Df = new Map(),
  ca =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function zt(e, t) {
  Df.set(e, t), on(t, [e]);
}
for (var Gl = 0; Gl < ca.length; Gl++) {
  var Yl = ca[Gl],
    Tm = Yl.toLowerCase(),
    Om = Yl[0].toUpperCase() + Yl.slice(1);
  zt(Tm, "on" + Om);
}
zt(jf, "onAnimationEnd");
zt(zf, "onAnimationIteration");
zt(Af, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(If, "onTransitionEnd");
Pn("onMouseEnter", ["mouseout", "mouseover"]);
Pn("onMouseLeave", ["mouseout", "mouseover"]);
Pn("onPointerEnter", ["pointerout", "pointerover"]);
Pn("onPointerLeave", ["pointerout", "pointerover"]);
on(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
on(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
on("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
on(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
on(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
on(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var er =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Lm = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
function fa(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Th(r, t, void 0, e), (e.currentTarget = null);
}
function Ff(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            u = s.instance,
            a = s.currentTarget;
          if (((s = s.listener), u !== l && o.isPropagationStopped())) break e;
          fa(o, s, a), (l = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (u = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            u !== l && o.isPropagationStopped())
          )
            break e;
          fa(o, s, a), (l = u);
        }
    }
  }
  if (jo) throw ((e = Ii), (jo = !1), (Ii = null), e);
}
function $(e, t) {
  var n = t[Qi];
  n === void 0 && (n = t[Qi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Mf(t, e, 2, !1), n.add(r));
}
function Zl(e, t, n) {
  var r = 0;
  t && (r |= 4), Mf(n, e, r, t);
}
var ro = "_reactListening" + Math.random().toString(36).slice(2);
function xr(e) {
  if (!e[ro]) {
    (e[ro] = !0),
      Vc.forEach(function (n) {
        n !== "selectionchange" && (Lm.has(n) || Zl(n, !1, e), Zl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ro] || ((t[ro] = !0), Zl("selectionchange", !1, t));
  }
}
function Mf(e, t, n, r) {
  switch (Ef(t)) {
    case 1:
      var o = Qh;
      break;
    case 4:
      o = qh;
      break;
    default:
      o = $s;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ai ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function bl(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = Wt(s)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = l = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  sf(function () {
    var a = l,
      c = Fs(n),
      f = [];
    e: {
      var m = Df.get(e);
      if (m !== void 0) {
        var v = Hs,
          y = e;
        switch (e) {
          case "keypress":
            if (go(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = sm;
            break;
          case "focusin":
            (y = "focus"), (v = ql);
            break;
          case "focusout":
            (y = "blur"), (v = ql);
            break;
          case "beforeblur":
          case "afterblur":
            v = ql;
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
            v = bu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Xh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = cm;
            break;
          case jf:
          case zf:
          case Af:
            v = Zh;
            break;
          case If:
            v = dm;
            break;
          case "scroll":
            v = Kh;
            break;
          case "wheel":
            v = hm;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = em;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = ta;
        }
        var w = (t & 4) !== 0,
          g = !w && e === "scroll",
          p = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var d = a, h; d !== null; ) {
          h = d;
          var S = h.stateNode;
          if (
            (h.tag === 5 &&
              S !== null &&
              ((h = S),
              p !== null && ((S = yr(d, p)), S != null && w.push(kr(d, S, h)))),
            g)
          )
            break;
          d = d.return;
        }
        0 < w.length &&
          ((m = new v(m, y, null, n, c)), f.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          m &&
            n !== ji &&
            (y = n.relatedTarget || n.fromElement) &&
            (Wt(y) || y[ut]))
        )
          break e;
        if (
          (v || m) &&
          ((m =
            c.window === c
              ? c
              : (m = c.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = a),
              (y = y ? Wt(y) : null),
              y !== null &&
                ((g = ln(y)), y !== g || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = a)),
          v !== y)
        ) {
          if (
            ((w = bu),
            (S = "onMouseLeave"),
            (p = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = ta),
              (S = "onPointerLeave"),
              (p = "onPointerEnter"),
              (d = "pointer")),
            (g = v == null ? m : hn(v)),
            (h = y == null ? m : hn(y)),
            (m = new w(S, d + "leave", v, n, c)),
            (m.target = g),
            (m.relatedTarget = h),
            (S = null),
            Wt(c) === a &&
              ((w = new w(p, d + "enter", y, n, c)),
              (w.target = h),
              (w.relatedTarget = g),
              (S = w)),
            (g = S),
            v && y)
          )
            t: {
              for (w = v, p = y, d = 0, h = w; h; h = un(h)) d++;
              for (h = 0, S = p; S; S = un(S)) h++;
              for (; 0 < d - h; ) (w = un(w)), d--;
              for (; 0 < h - d; ) (p = un(p)), h--;
              for (; d--; ) {
                if (w === p || (p !== null && w === p.alternate)) break t;
                (w = un(w)), (p = un(p));
              }
              w = null;
            }
          else w = null;
          v !== null && da(f, m, v, w, !1),
            y !== null && g !== null && da(f, g, y, w, !0);
        }
      }
      e: {
        if (
          ((m = a ? hn(a) : window),
          (v = m.nodeName && m.nodeName.toLowerCase()),
          v === "select" || (v === "input" && m.type === "file"))
        )
          var x = Em;
        else if (oa(m))
          if (Pf) x = _m;
          else {
            x = km;
            var C = xm;
          }
        else
          (v = m.nodeName) &&
            v.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (x = Cm);
        if (x && (x = x(e, a))) {
          Rf(f, x, n, c);
          break e;
        }
        C && C(e, m, a),
          e === "focusout" &&
            (C = m._wrapperState) &&
            C.controlled &&
            m.type === "number" &&
            Pi(m, "number", m.value);
      }
      switch (((C = a ? hn(a) : window), e)) {
        case "focusin":
          (oa(C) || C.contentEditable === "true") &&
            ((dn = C), (Ui = a), (ir = null));
          break;
        case "focusout":
          ir = Ui = dn = null;
          break;
        case "mousedown":
          Bi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Bi = !1), aa(f, n, c);
          break;
        case "selectionchange":
          if (Nm) break;
        case "keydown":
        case "keyup":
          aa(f, n, c);
      }
      var R;
      if (Qs)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        fn
          ? Cf(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (kf &&
          n.locale !== "ko" &&
          (fn || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && fn && (R = xf())
            : ((wt = c),
              (Ws = "value" in wt ? wt.value : wt.textContent),
              (fn = !0))),
        (C = Fo(a, _)),
        0 < C.length &&
          ((_ = new ea(_, e, null, n, c)),
          f.push({ event: _, listeners: C }),
          R ? (_.data = R) : ((R = _f(n)), R !== null && (_.data = R)))),
        (R = ym ? gm(e, n) : vm(e, n)) &&
          ((a = Fo(a, "onBeforeInput")),
          0 < a.length &&
            ((c = new ea("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: a }),
            (c.data = R)));
    }
    Ff(f, t);
  });
}
function kr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Fo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = yr(e, n)),
      l != null && r.unshift(kr(e, l, o)),
      (l = yr(e, t)),
      l != null && r.push(kr(e, l, o))),
      (e = e.return);
  }
  return r;
}
function un(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function da(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      o
        ? ((u = yr(n, l)), u != null && i.unshift(kr(n, u, s)))
        : o || ((u = yr(n, l)), u != null && i.push(kr(n, u, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var jm = /\r\n?/g,
  zm = /\u0000|\uFFFD/g;
function pa(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      jm,
      `
`
    )
    .replace(zm, "");
}
function oo(e, t, n) {
  if (((t = pa(t)), pa(e) !== t && n)) throw Error(k(425));
}
function Mo() {}
var $i = null,
  Wi = null;
function Hi(e, t) {
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
var Vi = typeof setTimeout == "function" ? setTimeout : void 0,
  Am = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ha = typeof Promise == "function" ? Promise : void 0,
  Im =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ha < "u"
      ? function (e) {
          return ha.resolve(null).then(e).catch(Dm);
        }
      : Vi;
function Dm(e) {
  setTimeout(function () {
    throw e;
  });
}
function ei(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), wr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  wr(t);
}
function _t(e) {
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
function ma(e) {
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
var Fn = Math.random().toString(36).slice(2),
  Ze = "__reactFiber$" + Fn,
  Cr = "__reactProps$" + Fn,
  ut = "__reactContainer$" + Fn,
  Qi = "__reactEvents$" + Fn,
  Fm = "__reactListeners$" + Fn,
  Mm = "__reactHandles$" + Fn;
function Wt(e) {
  var t = e[Ze];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ut] || n[Ze])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ma(e); e !== null; ) {
          if ((n = e[Ze])) return n;
          e = ma(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ur(e) {
  return (
    (e = e[Ze] || e[ut]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function hn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function hl(e) {
  return e[Cr] || null;
}
var qi = [],
  mn = -1;
function At(e) {
  return { current: e };
}
function W(e) {
  0 > mn || ((e.current = qi[mn]), (qi[mn] = null), mn--);
}
function B(e, t) {
  mn++, (qi[mn] = e.current), (e.current = t);
}
var Lt = {},
  de = At(Lt),
  we = At(!1),
  Gt = Lt;
function Nn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Lt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Se(e) {
  return (e = e.childContextTypes), e != null;
}
function Uo() {
  W(we), W(de);
}
function ya(e, t, n) {
  if (de.current !== Lt) throw Error(k(168));
  B(de, t), B(we, n);
}
function Uf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(k(108, xh(e) || "Unknown", o));
  return q({}, n, r);
}
function Bo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Lt),
    (Gt = de.current),
    B(de, e),
    B(we, we.current),
    !0
  );
}
function ga(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = Uf(e, t, Gt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(we),
      W(de),
      B(de, e))
    : W(we),
    B(we, n);
}
var rt = null,
  ml = !1,
  ti = !1;
function Bf(e) {
  rt === null ? (rt = [e]) : rt.push(e);
}
function Um(e) {
  (ml = !0), Bf(e);
}
function It() {
  if (!ti && rt !== null) {
    ti = !0;
    var e = 0,
      t = M;
    try {
      var n = rt;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (rt = null), (ml = !1);
    } catch (o) {
      throw (rt !== null && (rt = rt.slice(e + 1)), ff(Ms, It), o);
    } finally {
      (M = t), (ti = !1);
    }
  }
  return null;
}
var yn = [],
  gn = 0,
  $o = null,
  Wo = 0,
  Ie = [],
  De = 0,
  Yt = null,
  ot = 1,
  lt = "";
function Ut(e, t) {
  (yn[gn++] = Wo), (yn[gn++] = $o), ($o = e), (Wo = t);
}
function $f(e, t, n) {
  (Ie[De++] = ot), (Ie[De++] = lt), (Ie[De++] = Yt), (Yt = e);
  var r = ot;
  e = lt;
  var o = 32 - qe(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - qe(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (ot = (1 << (32 - qe(t) + o)) | (n << o) | r),
      (lt = l + e);
  } else (ot = (1 << l) | (n << o) | r), (lt = e);
}
function Ks(e) {
  e.return !== null && (Ut(e, 1), $f(e, 1, 0));
}
function Js(e) {
  for (; e === $o; )
    ($o = yn[--gn]), (yn[gn] = null), (Wo = yn[--gn]), (yn[gn] = null);
  for (; e === Yt; )
    (Yt = Ie[--De]),
      (Ie[De] = null),
      (lt = Ie[--De]),
      (Ie[De] = null),
      (ot = Ie[--De]),
      (Ie[De] = null);
}
var Ne = null,
  Re = null,
  H = !1,
  Ve = null;
function Wf(e, t) {
  var n = Fe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function va(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ne = e), (Re = _t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ne = e), (Re = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Yt !== null ? { id: ot, overflow: lt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Fe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ne = e),
            (Re = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ki(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ji(e) {
  if (H) {
    var t = Re;
    if (t) {
      var n = t;
      if (!va(e, t)) {
        if (Ki(e)) throw Error(k(418));
        t = _t(n.nextSibling);
        var r = Ne;
        t && va(e, t)
          ? Wf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (Ne = e));
      }
    } else {
      if (Ki(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (Ne = e);
    }
  }
}
function wa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ne = e;
}
function lo(e) {
  if (e !== Ne) return !1;
  if (!H) return wa(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Hi(e.type, e.memoizedProps))),
    t && (t = Re))
  ) {
    if (Ki(e)) throw (Hf(), Error(k(418)));
    for (; t; ) Wf(e, t), (t = _t(t.nextSibling));
  }
  if ((wa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Re = _t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Re = null;
    }
  } else Re = Ne ? _t(e.stateNode.nextSibling) : null;
  return !0;
}
function Hf() {
  for (var e = Re; e; ) e = _t(e.nextSibling);
}
function Tn() {
  (Re = Ne = null), (H = !1);
}
function Xs(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
var Bm = dt.ReactCurrentBatchConfig;
function Kn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var s = o.refs;
            i === null ? delete s[l] : (s[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function io(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Sa(e) {
  var t = e._init;
  return t(e._payload);
}
function Vf(e) {
  function t(p, d) {
    if (e) {
      var h = p.deletions;
      h === null ? ((p.deletions = [d]), (p.flags |= 16)) : h.push(d);
    }
  }
  function n(p, d) {
    if (!e) return null;
    for (; d !== null; ) t(p, d), (d = d.sibling);
    return null;
  }
  function r(p, d) {
    for (p = new Map(); d !== null; )
      d.key !== null ? p.set(d.key, d) : p.set(d.index, d), (d = d.sibling);
    return p;
  }
  function o(p, d) {
    return (p = Tt(p, d)), (p.index = 0), (p.sibling = null), p;
  }
  function l(p, d, h) {
    return (
      (p.index = h),
      e
        ? ((h = p.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((p.flags |= 2), d) : h)
            : ((p.flags |= 2), d))
        : ((p.flags |= 1048576), d)
    );
  }
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, d, h, S) {
    return d === null || d.tag !== 6
      ? ((d = ui(h, p.mode, S)), (d.return = p), d)
      : ((d = o(d, h)), (d.return = p), d);
  }
  function u(p, d, h, S) {
    var x = h.type;
    return x === cn
      ? c(p, d, h.props.children, S, h.key)
      : d !== null &&
        (d.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === mt &&
            Sa(x) === d.type))
      ? ((S = o(d, h.props)), (S.ref = Kn(p, d, h)), (S.return = p), S)
      : ((S = Co(h.type, h.key, h.props, null, p.mode, S)),
        (S.ref = Kn(p, d, h)),
        (S.return = p),
        S);
  }
  function a(p, d, h, S) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = ai(h, p.mode, S)), (d.return = p), d)
      : ((d = o(d, h.children || [])), (d.return = p), d);
  }
  function c(p, d, h, S, x) {
    return d === null || d.tag !== 7
      ? ((d = Kt(h, p.mode, S, x)), (d.return = p), d)
      : ((d = o(d, h)), (d.return = p), d);
  }
  function f(p, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = ui("" + d, p.mode, h)), (d.return = p), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Xr:
          return (
            (h = Co(d.type, d.key, d.props, null, p.mode, h)),
            (h.ref = Kn(p, null, d)),
            (h.return = p),
            h
          );
        case an:
          return (d = ai(d, p.mode, h)), (d.return = p), d;
        case mt:
          var S = d._init;
          return f(p, S(d._payload), h);
      }
      if (Zn(d) || Wn(d))
        return (d = Kt(d, p.mode, h, null)), (d.return = p), d;
      io(p, d);
    }
    return null;
  }
  function m(p, d, h, S) {
    var x = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return x !== null ? null : s(p, d, "" + h, S);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Xr:
          return h.key === x ? u(p, d, h, S) : null;
        case an:
          return h.key === x ? a(p, d, h, S) : null;
        case mt:
          return (x = h._init), m(p, d, x(h._payload), S);
      }
      if (Zn(h) || Wn(h)) return x !== null ? null : c(p, d, h, S, null);
      io(p, h);
    }
    return null;
  }
  function v(p, d, h, S, x) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (p = p.get(h) || null), s(d, p, "" + S, x);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Xr:
          return (p = p.get(S.key === null ? h : S.key) || null), u(d, p, S, x);
        case an:
          return (p = p.get(S.key === null ? h : S.key) || null), a(d, p, S, x);
        case mt:
          var C = S._init;
          return v(p, d, h, C(S._payload), x);
      }
      if (Zn(S) || Wn(S)) return (p = p.get(h) || null), c(d, p, S, x, null);
      io(d, S);
    }
    return null;
  }
  function y(p, d, h, S) {
    for (
      var x = null, C = null, R = d, _ = (d = 0), D = null;
      R !== null && _ < h.length;
      _++
    ) {
      R.index > _ ? ((D = R), (R = null)) : (D = R.sibling);
      var L = m(p, R, h[_], S);
      if (L === null) {
        R === null && (R = D);
        break;
      }
      e && R && L.alternate === null && t(p, R),
        (d = l(L, d, _)),
        C === null ? (x = L) : (C.sibling = L),
        (C = L),
        (R = D);
    }
    if (_ === h.length) return n(p, R), H && Ut(p, _), x;
    if (R === null) {
      for (; _ < h.length; _++)
        (R = f(p, h[_], S)),
          R !== null &&
            ((d = l(R, d, _)), C === null ? (x = R) : (C.sibling = R), (C = R));
      return H && Ut(p, _), x;
    }
    for (R = r(p, R); _ < h.length; _++)
      (D = v(R, p, _, h[_], S)),
        D !== null &&
          (e && D.alternate !== null && R.delete(D.key === null ? _ : D.key),
          (d = l(D, d, _)),
          C === null ? (x = D) : (C.sibling = D),
          (C = D));
    return (
      e &&
        R.forEach(function (U) {
          return t(p, U);
        }),
      H && Ut(p, _),
      x
    );
  }
  function w(p, d, h, S) {
    var x = Wn(h);
    if (typeof x != "function") throw Error(k(150));
    if (((h = x.call(h)), h == null)) throw Error(k(151));
    for (
      var C = (x = null), R = d, _ = (d = 0), D = null, L = h.next();
      R !== null && !L.done;
      _++, L = h.next()
    ) {
      R.index > _ ? ((D = R), (R = null)) : (D = R.sibling);
      var U = m(p, R, L.value, S);
      if (U === null) {
        R === null && (R = D);
        break;
      }
      e && R && U.alternate === null && t(p, R),
        (d = l(U, d, _)),
        C === null ? (x = U) : (C.sibling = U),
        (C = U),
        (R = D);
    }
    if (L.done) return n(p, R), H && Ut(p, _), x;
    if (R === null) {
      for (; !L.done; _++, L = h.next())
        (L = f(p, L.value, S)),
          L !== null &&
            ((d = l(L, d, _)), C === null ? (x = L) : (C.sibling = L), (C = L));
      return H && Ut(p, _), x;
    }
    for (R = r(p, R); !L.done; _++, L = h.next())
      (L = v(R, p, _, L.value, S)),
        L !== null &&
          (e && L.alternate !== null && R.delete(L.key === null ? _ : L.key),
          (d = l(L, d, _)),
          C === null ? (x = L) : (C.sibling = L),
          (C = L));
    return (
      e &&
        R.forEach(function (ue) {
          return t(p, ue);
        }),
      H && Ut(p, _),
      x
    );
  }
  function g(p, d, h, S) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === cn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Xr:
          e: {
            for (var x = h.key, C = d; C !== null; ) {
              if (C.key === x) {
                if (((x = h.type), x === cn)) {
                  if (C.tag === 7) {
                    n(p, C.sibling),
                      (d = o(C, h.props.children)),
                      (d.return = p),
                      (p = d);
                    break e;
                  }
                } else if (
                  C.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === mt &&
                    Sa(x) === C.type)
                ) {
                  n(p, C.sibling),
                    (d = o(C, h.props)),
                    (d.ref = Kn(p, C, h)),
                    (d.return = p),
                    (p = d);
                  break e;
                }
                n(p, C);
                break;
              } else t(p, C);
              C = C.sibling;
            }
            h.type === cn
              ? ((d = Kt(h.props.children, p.mode, S, h.key)),
                (d.return = p),
                (p = d))
              : ((S = Co(h.type, h.key, h.props, null, p.mode, S)),
                (S.ref = Kn(p, d, h)),
                (S.return = p),
                (p = S));
          }
          return i(p);
        case an:
          e: {
            for (C = h.key; d !== null; ) {
              if (d.key === C)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  n(p, d.sibling),
                    (d = o(d, h.children || [])),
                    (d.return = p),
                    (p = d);
                  break e;
                } else {
                  n(p, d);
                  break;
                }
              else t(p, d);
              d = d.sibling;
            }
            (d = ai(h, p.mode, S)), (d.return = p), (p = d);
          }
          return i(p);
        case mt:
          return (C = h._init), g(p, d, C(h._payload), S);
      }
      if (Zn(h)) return y(p, d, h, S);
      if (Wn(h)) return w(p, d, h, S);
      io(p, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(p, d.sibling), (d = o(d, h)), (d.return = p), (p = d))
          : (n(p, d), (d = ui(h, p.mode, S)), (d.return = p), (p = d)),
        i(p))
      : n(p, d);
  }
  return g;
}
var On = Vf(!0),
  Qf = Vf(!1),
  Ho = At(null),
  Vo = null,
  vn = null,
  Gs = null;
function Ys() {
  Gs = vn = Vo = null;
}
function Zs(e) {
  var t = Ho.current;
  W(Ho), (e._currentValue = t);
}
function Xi(e, t, n) {
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
function _n(e, t) {
  (Vo = e),
    (Gs = vn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ve = !0), (e.firstContext = null));
}
function Ue(e) {
  var t = e._currentValue;
  if (Gs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), vn === null)) {
      if (Vo === null) throw Error(k(308));
      (vn = e), (Vo.dependencies = { lanes: 0, firstContext: e });
    } else vn = vn.next = e;
  return t;
}
var Ht = null;
function bs(e) {
  Ht === null ? (Ht = [e]) : Ht.push(e);
}
function qf(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), bs(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    at(e, r)
  );
}
function at(e, t) {
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
var yt = !1;
function eu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Kf(e, t) {
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
function it(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Rt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      at(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), bs(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    at(e, n)
  );
}
function vo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Us(e, n);
  }
}
function Ea(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
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
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
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
function Qo(e, t, n, r) {
  var o = e.updateQueue;
  yt = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var u = s,
      a = u.next;
    (u.next = null), i === null ? (l = a) : (i.next = a), (i = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== i &&
        (s === null ? (c.firstBaseUpdate = a) : (s.next = a),
        (c.lastBaseUpdate = u)));
  }
  if (l !== null) {
    var f = o.baseState;
    (i = 0), (c = a = u = null), (s = l);
    do {
      var m = s.lane,
        v = s.eventTime;
      if ((r & m) === m) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var y = e,
            w = s;
          switch (((m = t), (v = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                f = y.call(v, f, m);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (m = typeof y == "function" ? y.call(v, f, m) : y),
                m == null)
              )
                break e;
              f = q({}, f, m);
              break e;
            case 2:
              yt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [s]) : m.push(s));
      } else
        (v = {
          eventTime: v,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((a = c = v), (u = f)) : (c = c.next = v),
          (i |= m);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (u = f),
      (o.baseState = u),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (bt |= i), (e.lanes = i), (e.memoizedState = f);
  }
}
function xa(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(k(191, o));
        o.call(r);
      }
    }
}
var Br = {},
  et = At(Br),
  _r = At(Br),
  Rr = At(Br);
function Vt(e) {
  if (e === Br) throw Error(k(174));
  return e;
}
function tu(e, t) {
  switch ((B(Rr, t), B(_r, e), B(et, Br), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ti(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ti(t, e));
  }
  W(et), B(et, t);
}
function Ln() {
  W(et), W(_r), W(Rr);
}
function Jf(e) {
  Vt(Rr.current);
  var t = Vt(et.current),
    n = Ti(t, e.type);
  t !== n && (B(_r, e), B(et, n));
}
function nu(e) {
  _r.current === e && (W(et), W(_r));
}
var V = At(0);
function qo(e) {
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
var ni = [];
function ru() {
  for (var e = 0; e < ni.length; e++)
    ni[e]._workInProgressVersionPrimary = null;
  ni.length = 0;
}
var wo = dt.ReactCurrentDispatcher,
  ri = dt.ReactCurrentBatchConfig,
  Zt = 0,
  Q = null,
  b = null,
  ne = null,
  Ko = !1,
  sr = !1,
  Pr = 0,
  $m = 0;
function ae() {
  throw Error(k(321));
}
function ou(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Je(e[n], t[n])) return !1;
  return !0;
}
function lu(e, t, n, r, o, l) {
  if (
    ((Zt = l),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (wo.current = e === null || e.memoizedState === null ? Qm : qm),
    (e = n(r, o)),
    sr)
  ) {
    l = 0;
    do {
      if (((sr = !1), (Pr = 0), 25 <= l)) throw Error(k(301));
      (l += 1),
        (ne = b = null),
        (t.updateQueue = null),
        (wo.current = Km),
        (e = n(r, o));
    } while (sr);
  }
  if (
    ((wo.current = Jo),
    (t = b !== null && b.next !== null),
    (Zt = 0),
    (ne = b = Q = null),
    (Ko = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function iu() {
  var e = Pr !== 0;
  return (Pr = 0), e;
}
function Ye() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ne === null ? (Q.memoizedState = ne = e) : (ne = ne.next = e), ne;
}
function Be() {
  if (b === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = b.next;
  var t = ne === null ? Q.memoizedState : ne.next;
  if (t !== null) (ne = t), (b = e);
  else {
    if (e === null) throw Error(k(310));
    (b = e),
      (e = {
        memoizedState: b.memoizedState,
        baseState: b.baseState,
        baseQueue: b.baseQueue,
        queue: b.queue,
        next: null,
      }),
      ne === null ? (Q.memoizedState = ne = e) : (ne = ne.next = e);
  }
  return ne;
}
function Nr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function oi(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = b,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = l.next), (l.next = i);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var s = (i = null),
      u = null,
      a = l;
    do {
      var c = a.lane;
      if ((Zt & c) === c)
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
        var f = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = f), (i = r)) : (u = u.next = f),
          (Q.lanes |= c),
          (bt |= c);
      }
      a = a.next;
    } while (a !== null && a !== l);
    u === null ? (i = r) : (u.next = s),
      Je(r, t.memoizedState) || (ve = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (Q.lanes |= l), (bt |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function li(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    Je(l, t.memoizedState) || (ve = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Xf() {}
function Gf(e, t) {
  var n = Q,
    r = Be(),
    o = t(),
    l = !Je(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (ve = !0)),
    (r = r.queue),
    su(bf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (ne !== null && ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Tr(9, Zf.bind(null, n, r, o, t), void 0, null),
      re === null)
    )
      throw Error(k(349));
    Zt & 30 || Yf(n, t, o);
  }
  return o;
}
function Yf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Zf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ed(t) && td(e);
}
function bf(e, t, n) {
  return n(function () {
    ed(t) && td(e);
  });
}
function ed(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Je(e, n);
  } catch {
    return !0;
  }
}
function td(e) {
  var t = at(e, 1);
  t !== null && Ke(t, e, 1, -1);
}
function ka(e) {
  var t = Ye();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Nr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Vm.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function Tr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function nd() {
  return Be().memoizedState;
}
function So(e, t, n, r) {
  var o = Ye();
  (Q.flags |= e),
    (o.memoizedState = Tr(1 | t, n, void 0, r === void 0 ? null : r));
}
function yl(e, t, n, r) {
  var o = Be();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (b !== null) {
    var i = b.memoizedState;
    if (((l = i.destroy), r !== null && ou(r, i.deps))) {
      o.memoizedState = Tr(t, n, l, r);
      return;
    }
  }
  (Q.flags |= e), (o.memoizedState = Tr(1 | t, n, l, r));
}
function Ca(e, t) {
  return So(8390656, 8, e, t);
}
function su(e, t) {
  return yl(2048, 8, e, t);
}
function rd(e, t) {
  return yl(4, 2, e, t);
}
function od(e, t) {
  return yl(4, 4, e, t);
}
function ld(e, t) {
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
function id(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), yl(4, 4, ld.bind(null, t, e), n)
  );
}
function uu() {}
function sd(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ou(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ud(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ou(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ad(e, t, n) {
  return Zt & 21
    ? (Je(n, t) || ((n = hf()), (Q.lanes |= n), (bt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ve = !0)), (e.memoizedState = n));
}
function Wm(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ri.transition;
  ri.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (ri.transition = r);
  }
}
function cd() {
  return Be().memoizedState;
}
function Hm(e, t, n) {
  var r = Nt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    fd(e))
  )
    dd(t, n);
  else if (((n = qf(e, t, n, r)), n !== null)) {
    var o = he();
    Ke(n, e, r, o), pd(n, t, r);
  }
}
function Vm(e, t, n) {
  var r = Nt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (fd(e)) dd(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), Je(s, i))) {
          var u = t.interleaved;
          u === null
            ? ((o.next = o), bs(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = qf(e, t, o, r)),
      n !== null && ((o = he()), Ke(n, e, r, o), pd(n, t, r));
  }
}
function fd(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function dd(e, t) {
  sr = Ko = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function pd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Us(e, n);
  }
}
var Jo = {
    readContext: Ue,
    useCallback: ae,
    useContext: ae,
    useEffect: ae,
    useImperativeHandle: ae,
    useInsertionEffect: ae,
    useLayoutEffect: ae,
    useMemo: ae,
    useReducer: ae,
    useRef: ae,
    useState: ae,
    useDebugValue: ae,
    useDeferredValue: ae,
    useTransition: ae,
    useMutableSource: ae,
    useSyncExternalStore: ae,
    useId: ae,
    unstable_isNewReconciler: !1,
  },
  Qm = {
    readContext: Ue,
    useCallback: function (e, t) {
      return (Ye().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ue,
    useEffect: Ca,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        So(4194308, 4, ld.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return So(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return So(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ye();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ye();
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
        (e = e.dispatch = Hm.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ye();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ka,
    useDebugValue: uu,
    useDeferredValue: function (e) {
      return (Ye().memoizedState = e);
    },
    useTransition: function () {
      var e = ka(!1),
        t = e[0];
      return (e = Wm.bind(null, e[1])), (Ye().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        o = Ye();
      if (H) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), re === null)) throw Error(k(349));
        Zt & 30 || Yf(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Ca(bf.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        Tr(9, Zf.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ye(),
        t = re.identifierPrefix;
      if (H) {
        var n = lt,
          r = ot;
        (n = (r & ~(1 << (32 - qe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Pr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = $m++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  qm = {
    readContext: Ue,
    useCallback: sd,
    useContext: Ue,
    useEffect: su,
    useImperativeHandle: id,
    useInsertionEffect: rd,
    useLayoutEffect: od,
    useMemo: ud,
    useReducer: oi,
    useRef: nd,
    useState: function () {
      return oi(Nr);
    },
    useDebugValue: uu,
    useDeferredValue: function (e) {
      var t = Be();
      return ad(t, b.memoizedState, e);
    },
    useTransition: function () {
      var e = oi(Nr)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: Xf,
    useSyncExternalStore: Gf,
    useId: cd,
    unstable_isNewReconciler: !1,
  },
  Km = {
    readContext: Ue,
    useCallback: sd,
    useContext: Ue,
    useEffect: su,
    useImperativeHandle: id,
    useInsertionEffect: rd,
    useLayoutEffect: od,
    useMemo: ud,
    useReducer: li,
    useRef: nd,
    useState: function () {
      return li(Nr);
    },
    useDebugValue: uu,
    useDeferredValue: function (e) {
      var t = Be();
      return b === null ? (t.memoizedState = e) : ad(t, b.memoizedState, e);
    },
    useTransition: function () {
      var e = li(Nr)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: Xf,
    useSyncExternalStore: Gf,
    useId: cd,
    unstable_isNewReconciler: !1,
  };
function We(e, t) {
  if (e && e.defaultProps) {
    (t = q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Gi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var gl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ln(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = he(),
      o = Nt(e),
      l = it(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = Rt(e, l, o)),
      t !== null && (Ke(t, e, o, r), vo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = he(),
      o = Nt(e),
      l = it(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Rt(e, l, o)),
      t !== null && (Ke(t, e, o, r), vo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = he(),
      r = Nt(e),
      o = it(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Rt(e, o, r)),
      t !== null && (Ke(t, e, r, n), vo(t, e, r));
  },
};
function _a(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Er(n, r) || !Er(o, l)
      : !0
  );
}
function hd(e, t, n) {
  var r = !1,
    o = Lt,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Ue(l))
      : ((o = Se(t) ? Gt : de.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? Nn(e, o) : Lt)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = gl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Ra(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && gl.enqueueReplaceState(t, t.state, null);
}
function Yi(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), eu(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = Ue(l))
    : ((l = Se(t) ? Gt : de.current), (o.context = Nn(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Gi(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && gl.enqueueReplaceState(o, o.state, null),
      Qo(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function jn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Eh(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ii(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Zi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Jm = typeof WeakMap == "function" ? WeakMap : Map;
function md(e, t, n) {
  (n = it(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Go || ((Go = !0), (us = r)), Zi(e, t);
    }),
    n
  );
}
function yd(e, t, n) {
  (n = it(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Zi(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Zi(e, t),
          typeof r != "function" &&
            (Pt === null ? (Pt = new Set([this])) : Pt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Pa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Jm();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = uy.bind(null, e, t, n)), t.then(e, e));
}
function Na(e) {
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
function Ta(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = it(-1, 1)), (t.tag = 2), Rt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Xm = dt.ReactCurrentOwner,
  ve = !1;
function pe(e, t, n, r) {
  t.child = e === null ? Qf(t, null, n, r) : On(t, e.child, n, r);
}
function Oa(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    _n(t, o),
    (r = lu(e, t, n, r, l, o)),
    (n = iu()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        ct(e, t, o))
      : (H && n && Ks(t), (t.flags |= 1), pe(e, t, r, o), t.child)
  );
}
function La(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !yu(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), gd(e, t, l, r, o))
      : ((e = Co(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Er), n(i, r) && e.ref === t.ref)
    )
      return ct(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Tt(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function gd(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Er(l, r) && e.ref === t.ref)
      if (((ve = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (ve = !0);
      else return (t.lanes = e.lanes), ct(e, t, o);
  }
  return bi(e, t, n, r, o);
}
function vd(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        B(Sn, _e),
        (_e |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          B(Sn, _e),
          (_e |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        B(Sn, _e),
        (_e |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      B(Sn, _e),
      (_e |= r);
  return pe(e, t, o, n), t.child;
}
function wd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function bi(e, t, n, r, o) {
  var l = Se(n) ? Gt : de.current;
  return (
    (l = Nn(t, l)),
    _n(t, o),
    (n = lu(e, t, n, r, l, o)),
    (r = iu()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        ct(e, t, o))
      : (H && r && Ks(t), (t.flags |= 1), pe(e, t, n, o), t.child)
  );
}
function ja(e, t, n, r, o) {
  if (Se(n)) {
    var l = !0;
    Bo(t);
  } else l = !1;
  if ((_n(t, o), t.stateNode === null))
    Eo(e, t), hd(t, n, r), Yi(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var u = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Ue(a))
      : ((a = Se(n) ? Gt : de.current), (a = Nn(t, a)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || u !== a) && Ra(t, i, r, a)),
      (yt = !1);
    var m = t.memoizedState;
    (i.state = m),
      Qo(t, r, i, o),
      (u = t.memoizedState),
      s !== r || m !== u || we.current || yt
        ? (typeof c == "function" && (Gi(t, n, c, r), (u = t.memoizedState)),
          (s = yt || _a(t, n, s, r, m, u, a))
            ? (f ||
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
      Kf(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : We(t.type, s)),
      (i.props = a),
      (f = t.pendingProps),
      (m = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ue(u))
        : ((u = Se(n) ? Gt : de.current), (u = Nn(t, u)));
    var v = n.getDerivedStateFromProps;
    (c =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== f || m !== u) && Ra(t, i, r, u)),
      (yt = !1),
      (m = t.memoizedState),
      (i.state = m),
      Qo(t, r, i, o);
    var y = t.memoizedState;
    s !== f || m !== y || we.current || yt
      ? (typeof v == "function" && (Gi(t, n, v, r), (y = t.memoizedState)),
        (a = yt || _a(t, n, a, r, m, y, u) || !1)
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
  return es(e, t, n, r, l, o);
}
function es(e, t, n, r, o, l) {
  wd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && ga(t, n, !1), ct(e, t, l);
  (r = t.stateNode), (Xm.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = On(t, e.child, null, l)), (t.child = On(t, null, s, l)))
      : pe(e, t, s, l),
    (t.memoizedState = r.state),
    o && ga(t, n, !0),
    t.child
  );
}
function Sd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ya(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ya(e, t.context, !1),
    tu(e, t.containerInfo);
}
function za(e, t, n, r, o) {
  return Tn(), Xs(o), (t.flags |= 256), pe(e, t, n, r), t.child;
}
var ts = { dehydrated: null, treeContext: null, retryLane: 0 };
function ns(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ed(e, t, n) {
  var r = t.pendingProps,
    o = V.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    B(V, o & 1),
    e === null)
  )
    return (
      Ji(t),
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
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = Sl(i, r, 0, null)),
              (e = Kt(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = ns(n)),
              (t.memoizedState = ts),
              e)
            : au(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return Gm(e, t, i, r, s, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (s = o.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Tt(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (l = Tt(s, l)) : ((l = Kt(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ns(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = ts),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = Tt(l, { mode: "visible", children: r.children })),
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
function au(e, t) {
  return (
    (t = Sl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function so(e, t, n, r) {
  return (
    r !== null && Xs(r),
    On(t, e.child, null, n),
    (e = au(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Gm(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ii(Error(k(422)))), so(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = Sl({ mode: "visible", children: r.children }, o, 0, null)),
        (l = Kt(l, o, i, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && On(t, e.child, null, i),
        (t.child.memoizedState = ns(i)),
        (t.memoizedState = ts),
        l);
  if (!(t.mode & 1)) return so(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (l = Error(k(419))), (r = ii(l, r, void 0)), so(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), ve || s)) {
    if (((r = re), r !== null)) {
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
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), at(e, o), Ke(r, e, o, -1));
    }
    return mu(), (r = ii(Error(k(421)))), so(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ay.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Re = _t(o.nextSibling)),
      (Ne = t),
      (H = !0),
      (Ve = null),
      e !== null &&
        ((Ie[De++] = ot),
        (Ie[De++] = lt),
        (Ie[De++] = Yt),
        (ot = e.id),
        (lt = e.overflow),
        (Yt = t)),
      (t = au(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Aa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Xi(e.return, t, n);
}
function si(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function xd(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((pe(e, t, r.children, n), (r = V.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Aa(e, n, t);
        else if (e.tag === 19) Aa(e, n, t);
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
  if ((B(V, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && qo(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          si(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && qo(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        si(t, !0, n, null, l);
        break;
      case "together":
        si(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Eo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ct(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (bt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Tt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Tt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ym(e, t, n) {
  switch (t.tag) {
    case 3:
      Sd(t), Tn();
      break;
    case 5:
      Jf(t);
      break;
    case 1:
      Se(t.type) && Bo(t);
      break;
    case 4:
      tu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      B(Ho, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (B(V, V.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ed(e, t, n)
          : (B(V, V.current & 1),
            (e = ct(e, t, n)),
            e !== null ? e.sibling : null);
      B(V, V.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return xd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        B(V, V.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), vd(e, t, n);
  }
  return ct(e, t, n);
}
var kd, rs, Cd, _d;
kd = function (e, t) {
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
rs = function () {};
Cd = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Vt(et.current);
    var l = null;
    switch (n) {
      case "input":
        (o = _i(e, o)), (r = _i(e, r)), (l = []);
        break;
      case "select":
        (o = q({}, o, { value: void 0 })),
          (r = q({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = Ni(e, o)), (r = Ni(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Mo);
    }
    Oi(n, r);
    var i;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === "style") {
          var s = o[a];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (hr.hasOwnProperty(a)
              ? l || (l = [])
              : (l = l || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((s = o != null ? o[a] : void 0),
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
          } else n || (l || (l = []), l.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (l = l || []).push(a, u))
            : a === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (l = l || []).push(a, "" + u)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (hr.hasOwnProperty(a)
                ? (u != null && a === "onScroll" && $("scroll", e),
                  l || s === u || (l = []))
                : (l = l || []).push(a, u));
    }
    n && (l = l || []).push("style", n);
    var a = l;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
_d = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Jn(e, t) {
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
function ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Zm(e, t, n) {
  var r = t.pendingProps;
  switch ((Js(t), t.tag)) {
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
      return ce(t), null;
    case 1:
      return Se(t.type) && Uo(), ce(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ln(),
        W(we),
        W(de),
        ru(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (lo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ve !== null && (fs(Ve), (Ve = null)))),
        rs(e, t),
        ce(t),
        null
      );
    case 5:
      nu(t);
      var o = Vt(Rr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Cd(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return ce(t), null;
        }
        if (((e = Vt(et.current)), lo(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[Ze] = t), (r[Cr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              $("cancel", r), $("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < er.length; o++) $(er[o], r);
              break;
            case "source":
              $("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $("error", r), $("load", r);
              break;
            case "details":
              $("toggle", r);
              break;
            case "input":
              Hu(r, l), $("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                $("invalid", r);
              break;
            case "textarea":
              Qu(r, l), $("invalid", r);
          }
          Oi(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var s = l[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (l.suppressHydrationWarning !== !0 &&
                      oo(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (l.suppressHydrationWarning !== !0 &&
                      oo(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : hr.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  $("scroll", r);
            }
          switch (n) {
            case "input":
              Gr(r), Vu(r, l, !0);
              break;
            case "textarea":
              Gr(r), qu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Mo);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Zc(n)),
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
            (e[Ze] = t),
            (e[Cr] = r),
            kd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Li(n, r)), n)) {
              case "dialog":
                $("cancel", e), $("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                $("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < er.length; o++) $(er[o], e);
                o = r;
                break;
              case "source":
                $("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                $("error", e), $("load", e), (o = r);
                break;
              case "details":
                $("toggle", e), (o = r);
                break;
              case "input":
                Hu(e, r), (o = _i(e, r)), $("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = q({}, r, { value: void 0 })),
                  $("invalid", e);
                break;
              case "textarea":
                Qu(e, r), (o = Ni(e, r)), $("invalid", e);
                break;
              default:
                o = r;
            }
            Oi(n, o), (s = o);
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var u = s[l];
                l === "style"
                  ? tf(e, u)
                  : l === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && bc(e, u))
                  : l === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && mr(e, u)
                    : typeof u == "number" && mr(e, "" + u)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (hr.hasOwnProperty(l)
                      ? u != null && l === "onScroll" && $("scroll", e)
                      : u != null && zs(e, l, u, i));
              }
            switch (n) {
              case "input":
                Gr(e), Vu(e, r, !1);
                break;
              case "textarea":
                Gr(e), qu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ot(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? En(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      En(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Mo);
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
      return ce(t), null;
    case 6:
      if (e && t.stateNode != null) _d(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = Vt(Rr.current)), Vt(et.current), lo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ze] = t),
            (l = r.nodeValue !== n) && ((e = Ne), e !== null))
          )
            switch (e.tag) {
              case 3:
                oo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  oo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ze] = t),
            (t.stateNode = r);
      }
      return ce(t), null;
    case 13:
      if (
        (W(V),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && Re !== null && t.mode & 1 && !(t.flags & 128))
          Hf(), Tn(), (t.flags |= 98560), (l = !1);
        else if (((l = lo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(k(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(k(317));
            l[Ze] = t;
          } else
            Tn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ce(t), (l = !1);
        } else Ve !== null && (fs(Ve), (Ve = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || V.current & 1 ? ee === 0 && (ee = 3) : mu())),
          t.updateQueue !== null && (t.flags |= 4),
          ce(t),
          null);
    case 4:
      return (
        Ln(), rs(e, t), e === null && xr(t.stateNode.containerInfo), ce(t), null
      );
    case 10:
      return Zs(t.type._context), ce(t), null;
    case 17:
      return Se(t.type) && Uo(), ce(t), null;
    case 19:
      if ((W(V), (l = t.memoizedState), l === null)) return ce(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) Jn(l, !1);
        else {
          if (ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = qo(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Jn(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return B(V, (V.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            G() > zn &&
            ((t.flags |= 128), (r = !0), Jn(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = qo(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Jn(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !H)
            )
              return ce(t), null;
          } else
            2 * G() - l.renderingStartTime > zn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Jn(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = G()),
          (t.sibling = null),
          (n = V.current),
          B(V, r ? (n & 1) | 2 : n & 1),
          t)
        : (ce(t), null);
    case 22:
    case 23:
      return (
        hu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? _e & 1073741824 && (ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ce(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function bm(e, t) {
  switch ((Js(t), t.tag)) {
    case 1:
      return (
        Se(t.type) && Uo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ln(),
        W(we),
        W(de),
        ru(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return nu(t), null;
    case 13:
      if ((W(V), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Tn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return W(V), null;
    case 4:
      return Ln(), null;
    case 10:
      return Zs(t.type._context), null;
    case 22:
    case 23:
      return hu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var uo = !1,
  fe = !1,
  ey = typeof WeakSet == "function" ? WeakSet : Set,
  T = null;
function wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        K(e, t, r);
      }
    else n.current = null;
}
function os(e, t, n) {
  try {
    n();
  } catch (r) {
    K(e, t, r);
  }
}
var Ia = !1;
function ty(e, t) {
  if ((($i = Io), (e = Of()), qs(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
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
            u = -1,
            a = 0,
            c = 0,
            f = e,
            m = null;
          t: for (;;) {
            for (
              var v;
              f !== n || (o !== 0 && f.nodeType !== 3) || (s = i + o),
                f !== l || (r !== 0 && f.nodeType !== 3) || (u = i + r),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (v = f.firstChild) !== null;

            )
              (m = f), (f = v);
            for (;;) {
              if (f === e) break t;
              if (
                (m === n && ++a === o && (s = i),
                m === l && ++c === r && (u = i),
                (v = f.nextSibling) !== null)
              )
                break;
              (f = m), (m = f.parentNode);
            }
            f = v;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Wi = { focusedElem: e, selectionRange: n }, Io = !1, T = t; T !== null; )
    if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (T = e);
    else
      for (; T !== null; ) {
        t = T;
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
                  var w = y.memoizedProps,
                    g = y.memoizedState,
                    p = t.stateNode,
                    d = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : We(t.type, w),
                      g
                    );
                  p.__reactInternalSnapshotBeforeUpdate = d;
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
                throw Error(k(163));
            }
        } catch (S) {
          K(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (T = e);
          break;
        }
        T = t.return;
      }
  return (y = Ia), (Ia = !1), y;
}
function ur(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && os(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function vl(e, t) {
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
function ls(e) {
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
function Rd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Rd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ze], delete t[Cr], delete t[Qi], delete t[Fm], delete t[Mm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Pd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Da(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Pd(e.return)) return null;
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
function is(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Mo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (is(e, t, n), e = e.sibling; e !== null; ) is(e, t, n), (e = e.sibling);
}
function ss(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ss(e, t, n), e = e.sibling; e !== null; ) ss(e, t, n), (e = e.sibling);
}
var le = null,
  He = !1;
function pt(e, t, n) {
  for (n = n.child; n !== null; ) Nd(e, t, n), (n = n.sibling);
}
function Nd(e, t, n) {
  if (be && typeof be.onCommitFiberUnmount == "function")
    try {
      be.onCommitFiberUnmount(cl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      fe || wn(n, t);
    case 6:
      var r = le,
        o = He;
      (le = null),
        pt(e, t, n),
        (le = r),
        (He = o),
        le !== null &&
          (He
            ? ((e = le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null &&
        (He
          ? ((e = le),
            (n = n.stateNode),
            e.nodeType === 8
              ? ei(e.parentNode, n)
              : e.nodeType === 1 && ei(e, n),
            wr(e))
          : ei(le, n.stateNode));
      break;
    case 4:
      (r = le),
        (o = He),
        (le = n.stateNode.containerInfo),
        (He = !0),
        pt(e, t, n),
        (le = r),
        (He = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && os(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      pt(e, t, n);
      break;
    case 1:
      if (
        !fe &&
        (wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          K(n, t, s);
        }
      pt(e, t, n);
      break;
    case 21:
      pt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((fe = (r = fe) || n.memoizedState !== null), pt(e, t, n), (fe = r))
        : pt(e, t, n);
      break;
    default:
      pt(e, t, n);
  }
}
function Fa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ey()),
      t.forEach(function (r) {
        var o = cy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function $e(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (le = s.stateNode), (He = !1);
              break e;
            case 3:
              (le = s.stateNode.containerInfo), (He = !0);
              break e;
            case 4:
              (le = s.stateNode.containerInfo), (He = !0);
              break e;
          }
          s = s.return;
        }
        if (le === null) throw Error(k(160));
        Nd(l, i, o), (le = null), (He = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (a) {
        K(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Td(t, e), (t = t.sibling);
}
function Td(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (($e(t, e), Ge(e), r & 4)) {
        try {
          ur(3, e, e.return), vl(3, e);
        } catch (w) {
          K(e, e.return, w);
        }
        try {
          ur(5, e, e.return);
        } catch (w) {
          K(e, e.return, w);
        }
      }
      break;
    case 1:
      $e(t, e), Ge(e), r & 512 && n !== null && wn(n, n.return);
      break;
    case 5:
      if (
        ($e(t, e),
        Ge(e),
        r & 512 && n !== null && wn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          mr(o, "");
        } catch (w) {
          K(e, e.return, w);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && l.type === "radio" && l.name != null && Gc(o, l),
              Li(s, i);
            var a = Li(s, l);
            for (i = 0; i < u.length; i += 2) {
              var c = u[i],
                f = u[i + 1];
              c === "style"
                ? tf(o, f)
                : c === "dangerouslySetInnerHTML"
                ? bc(o, f)
                : c === "children"
                ? mr(o, f)
                : zs(o, c, f, a);
            }
            switch (s) {
              case "input":
                Ri(o, l);
                break;
              case "textarea":
                Yc(o, l);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var v = l.value;
                v != null
                  ? En(o, !!l.multiple, v, !1)
                  : m !== !!l.multiple &&
                    (l.defaultValue != null
                      ? En(o, !!l.multiple, l.defaultValue, !0)
                      : En(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[Cr] = l;
          } catch (w) {
            K(e, e.return, w);
          }
      }
      break;
    case 6:
      if (($e(t, e), Ge(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (w) {
          K(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        ($e(t, e), Ge(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          wr(t.containerInfo);
        } catch (w) {
          K(e, e.return, w);
        }
      break;
    case 4:
      $e(t, e), Ge(e);
      break;
    case 13:
      $e(t, e),
        Ge(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (du = G())),
        r & 4 && Fa(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((fe = (a = fe) || c), $e(t, e), (fe = a)) : $e(t, e),
        Ge(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !c && e.mode & 1)
        )
          for (T = e, c = e.child; c !== null; ) {
            for (f = T = c; T !== null; ) {
              switch (((m = T), (v = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ur(4, m, m.return);
                  break;
                case 1:
                  wn(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      K(r, n, w);
                    }
                  }
                  break;
                case 5:
                  wn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Ua(f);
                    continue;
                  }
              }
              v !== null ? ((v.return = m), (T = v)) : Ua(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  a
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((s = f.stateNode),
                      (u = f.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = ef("display", i)));
              } catch (w) {
                K(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = a ? "" : f.memoizedProps;
              } catch (w) {
                K(e, e.return, w);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      $e(t, e), Ge(e), r & 4 && Fa(e);
      break;
    case 21:
      break;
    default:
      $e(t, e), Ge(e);
  }
}
function Ge(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Pd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (mr(o, ""), (r.flags &= -33));
          var l = Da(e);
          ss(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = Da(e);
          is(e, s, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (u) {
      K(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ny(e, t, n) {
  (T = e), Od(e);
}
function Od(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var o = T,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || uo;
      if (!i) {
        var s = o.alternate,
          u = (s !== null && s.memoizedState !== null) || fe;
        s = uo;
        var a = fe;
        if (((uo = i), (fe = u) && !a))
          for (T = o; T !== null; )
            (i = T),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Ba(o)
                : u !== null
                ? ((u.return = i), (T = u))
                : Ba(o);
        for (; l !== null; ) (T = l), Od(l), (l = l.sibling);
        (T = o), (uo = s), (fe = a);
      }
      Ma(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (T = l)) : Ma(e);
  }
}
function Ma(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              fe || vl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !fe)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : We(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && xa(t, l, r);
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
                xa(t, i, n);
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
                    var f = c.dehydrated;
                    f !== null && wr(f);
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
              throw Error(k(163));
          }
        fe || (t.flags & 512 && ls(t));
      } catch (m) {
        K(t, t.return, m);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function Ua(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function Ba(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            vl(4, t);
          } catch (u) {
            K(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              K(t, o, u);
            }
          }
          var l = t.return;
          try {
            ls(t);
          } catch (u) {
            K(t, l, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ls(t);
          } catch (u) {
            K(t, i, u);
          }
      }
    } catch (u) {
      K(t, t.return, u);
    }
    if (t === e) {
      T = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (T = s);
      break;
    }
    T = t.return;
  }
}
var ry = Math.ceil,
  Xo = dt.ReactCurrentDispatcher,
  cu = dt.ReactCurrentOwner,
  Me = dt.ReactCurrentBatchConfig,
  F = 0,
  re = null,
  Y = null,
  ie = 0,
  _e = 0,
  Sn = At(0),
  ee = 0,
  Or = null,
  bt = 0,
  wl = 0,
  fu = 0,
  ar = null,
  ge = null,
  du = 0,
  zn = 1 / 0,
  nt = null,
  Go = !1,
  us = null,
  Pt = null,
  ao = !1,
  St = null,
  Yo = 0,
  cr = 0,
  as = null,
  xo = -1,
  ko = 0;
function he() {
  return F & 6 ? G() : xo !== -1 ? xo : (xo = G());
}
function Nt(e) {
  return e.mode & 1
    ? F & 2 && ie !== 0
      ? ie & -ie
      : Bm.transition !== null
      ? (ko === 0 && (ko = hf()), ko)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ef(e.type))),
        e)
    : 1;
}
function Ke(e, t, n, r) {
  if (50 < cr) throw ((cr = 0), (as = null), Error(k(185)));
  Fr(e, n, r),
    (!(F & 2) || e !== re) &&
      (e === re && (!(F & 2) && (wl |= n), ee === 4 && vt(e, ie)),
      Ee(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((zn = G() + 500), ml && It()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  Bh(e, t);
  var r = Ao(e, e === re ? ie : 0);
  if (r === 0)
    n !== null && Xu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Xu(n), t === 1))
      e.tag === 0 ? Um($a.bind(null, e)) : Bf($a.bind(null, e)),
        Im(function () {
          !(F & 6) && It();
        }),
        (n = null);
    else {
      switch (mf(r)) {
        case 1:
          n = Ms;
          break;
        case 4:
          n = df;
          break;
        case 16:
          n = zo;
          break;
        case 536870912:
          n = pf;
          break;
        default:
          n = zo;
      }
      n = Md(n, Ld.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ld(e, t) {
  if (((xo = -1), (ko = 0), F & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (Rn() && e.callbackNode !== n) return null;
  var r = Ao(e, e === re ? ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Zo(e, r);
  else {
    t = r;
    var o = F;
    F |= 2;
    var l = zd();
    (re !== e || ie !== t) && ((nt = null), (zn = G() + 500), qt(e, t));
    do
      try {
        iy();
        break;
      } catch (s) {
        jd(e, s);
      }
    while (!0);
    Ys(),
      (Xo.current = l),
      (F = o),
      Y !== null ? (t = 0) : ((re = null), (ie = 0), (t = ee));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Di(e)), o !== 0 && ((r = o), (t = cs(e, o)))), t === 1)
    )
      throw ((n = Or), qt(e, 0), vt(e, r), Ee(e, G()), n);
    if (t === 6) vt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !oy(o) &&
          ((t = Zo(e, r)),
          t === 2 && ((l = Di(e)), l !== 0 && ((r = l), (t = cs(e, l)))),
          t === 1))
      )
        throw ((n = Or), qt(e, 0), vt(e, r), Ee(e, G()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Bt(e, ge, nt);
          break;
        case 3:
          if (
            (vt(e, r), (r & 130023424) === r && ((t = du + 500 - G()), 10 < t))
          ) {
            if (Ao(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              he(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Vi(Bt.bind(null, e, ge, nt), t);
            break;
          }
          Bt(e, ge, nt);
          break;
        case 4:
          if ((vt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - qe(r);
            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
          }
          if (
            ((r = o),
            (r = G() - r),
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
                : 1960 * ry(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Vi(Bt.bind(null, e, ge, nt), r);
            break;
          }
          Bt(e, ge, nt);
          break;
        case 5:
          Bt(e, ge, nt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Ee(e, G()), e.callbackNode === n ? Ld.bind(null, e) : null;
}
function cs(e, t) {
  var n = ar;
  return (
    e.current.memoizedState.isDehydrated && (qt(e, t).flags |= 256),
    (e = Zo(e, t)),
    e !== 2 && ((t = ge), (ge = n), t !== null && fs(t)),
    e
  );
}
function fs(e) {
  ge === null ? (ge = e) : ge.push.apply(ge, e);
}
function oy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!Je(l(), o)) return !1;
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
function vt(e, t) {
  for (
    t &= ~fu,
      t &= ~wl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - qe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function $a(e) {
  if (F & 6) throw Error(k(327));
  Rn();
  var t = Ao(e, 0);
  if (!(t & 1)) return Ee(e, G()), null;
  var n = Zo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Di(e);
    r !== 0 && ((t = r), (n = cs(e, r)));
  }
  if (n === 1) throw ((n = Or), qt(e, 0), vt(e, t), Ee(e, G()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Bt(e, ge, nt),
    Ee(e, G()),
    null
  );
}
function pu(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((zn = G() + 500), ml && It());
  }
}
function en(e) {
  St !== null && St.tag === 0 && !(F & 6) && Rn();
  var t = F;
  F |= 1;
  var n = Me.transition,
    r = M;
  try {
    if (((Me.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (Me.transition = n), (F = t), !(F & 6) && It();
  }
}
function hu() {
  (_e = Sn.current), W(Sn);
}
function qt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Am(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((Js(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Uo();
          break;
        case 3:
          Ln(), W(we), W(de), ru();
          break;
        case 5:
          nu(r);
          break;
        case 4:
          Ln();
          break;
        case 13:
          W(V);
          break;
        case 19:
          W(V);
          break;
        case 10:
          Zs(r.type._context);
          break;
        case 22:
        case 23:
          hu();
      }
      n = n.return;
    }
  if (
    ((re = e),
    (Y = e = Tt(e.current, null)),
    (ie = _e = t),
    (ee = 0),
    (Or = null),
    (fu = wl = bt = 0),
    (ge = ar = null),
    Ht !== null)
  ) {
    for (t = 0; t < Ht.length; t++)
      if (((n = Ht[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    Ht = null;
  }
  return e;
}
function jd(e, t) {
  do {
    var n = Y;
    try {
      if ((Ys(), (wo.current = Jo), Ko)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Ko = !1;
      }
      if (
        ((Zt = 0),
        (ne = b = Q = null),
        (sr = !1),
        (Pr = 0),
        (cu.current = null),
        n === null || n.return === null)
      ) {
        (ee = 1), (Or = t), (Y = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          s = n,
          u = t;
        if (
          ((t = ie),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            c = s,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = c.alternate;
            m
              ? ((c.updateQueue = m.updateQueue),
                (c.memoizedState = m.memoizedState),
                (c.lanes = m.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = Na(i);
          if (v !== null) {
            (v.flags &= -257),
              Ta(v, i, s, l, t),
              v.mode & 1 && Pa(l, a, t),
              (t = v),
              (u = a);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(u), (t.updateQueue = w);
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Pa(l, a, t), mu();
              break e;
            }
            u = Error(k(426));
          }
        } else if (H && s.mode & 1) {
          var g = Na(i);
          if (g !== null) {
            !(g.flags & 65536) && (g.flags |= 256),
              Ta(g, i, s, l, t),
              Xs(jn(u, s));
            break e;
          }
        }
        (l = u = jn(u, s)),
          ee !== 4 && (ee = 2),
          ar === null ? (ar = [l]) : ar.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var p = md(l, u, t);
              Ea(l, p);
              break e;
            case 1:
              s = u;
              var d = l.type,
                h = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Pt === null || !Pt.has(h))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var S = yd(l, s, t);
                Ea(l, S);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Id(n);
    } catch (x) {
      (t = x), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function zd() {
  var e = Xo.current;
  return (Xo.current = Jo), e === null ? Jo : e;
}
function mu() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4),
    re === null || (!(bt & 268435455) && !(wl & 268435455)) || vt(re, ie);
}
function Zo(e, t) {
  var n = F;
  F |= 2;
  var r = zd();
  (re !== e || ie !== t) && ((nt = null), qt(e, t));
  do
    try {
      ly();
      break;
    } catch (o) {
      jd(e, o);
    }
  while (!0);
  if ((Ys(), (F = n), (Xo.current = r), Y !== null)) throw Error(k(261));
  return (re = null), (ie = 0), ee;
}
function ly() {
  for (; Y !== null; ) Ad(Y);
}
function iy() {
  for (; Y !== null && !Lh(); ) Ad(Y);
}
function Ad(e) {
  var t = Fd(e.alternate, e, _e);
  (e.memoizedProps = e.pendingProps),
    t === null ? Id(e) : (Y = t),
    (cu.current = null);
}
function Id(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = bm(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ee = 6), (Y = null);
        return;
      }
    } else if (((n = Zm(n, t, _e)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function Bt(e, t, n) {
  var r = M,
    o = Me.transition;
  try {
    (Me.transition = null), (M = 1), sy(e, t, n, r);
  } finally {
    (Me.transition = o), (M = r);
  }
  return null;
}
function sy(e, t, n, r) {
  do Rn();
  while (St !== null);
  if (F & 6) throw Error(k(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    ($h(e, l),
    e === re && ((Y = re = null), (ie = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ao ||
      ((ao = !0),
      Md(zo, function () {
        return Rn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Me.transition), (Me.transition = null);
    var i = M;
    M = 1;
    var s = F;
    (F |= 4),
      (cu.current = null),
      ty(e, n),
      Td(n, e),
      Pm(Wi),
      (Io = !!$i),
      (Wi = $i = null),
      (e.current = n),
      ny(n),
      jh(),
      (F = s),
      (M = i),
      (Me.transition = l);
  } else e.current = n;
  if (
    (ao && ((ao = !1), (St = e), (Yo = o)),
    (l = e.pendingLanes),
    l === 0 && (Pt = null),
    Ih(n.stateNode),
    Ee(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Go) throw ((Go = !1), (e = us), (us = null), e);
  return (
    Yo & 1 && e.tag !== 0 && Rn(),
    (l = e.pendingLanes),
    l & 1 ? (e === as ? cr++ : ((cr = 0), (as = e))) : (cr = 0),
    It(),
    null
  );
}
function Rn() {
  if (St !== null) {
    var e = mf(Yo),
      t = Me.transition,
      n = M;
    try {
      if (((Me.transition = null), (M = 16 > e ? 16 : e), St === null))
        var r = !1;
      else {
        if (((e = St), (St = null), (Yo = 0), F & 6)) throw Error(k(331));
        var o = F;
        for (F |= 4, T = e.current; T !== null; ) {
          var l = T,
            i = l.child;
          if (T.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (T = a; T !== null; ) {
                  var c = T;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ur(8, c, l);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (T = f);
                  else
                    for (; T !== null; ) {
                      c = T;
                      var m = c.sibling,
                        v = c.return;
                      if ((Rd(c), c === a)) {
                        T = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = v), (T = m);
                        break;
                      }
                      T = v;
                    }
                }
              }
              var y = l.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var g = w.sibling;
                    (w.sibling = null), (w = g);
                  } while (w !== null);
                }
              }
              T = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (T = i);
          else
            e: for (; T !== null; ) {
              if (((l = T), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ur(9, l, l.return);
                }
              var p = l.sibling;
              if (p !== null) {
                (p.return = l.return), (T = p);
                break e;
              }
              T = l.return;
            }
        }
        var d = e.current;
        for (T = d; T !== null; ) {
          i = T;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) (h.return = i), (T = h);
          else
            e: for (i = d; T !== null; ) {
              if (((s = T), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vl(9, s);
                  }
                } catch (x) {
                  K(s, s.return, x);
                }
              if (s === i) {
                T = null;
                break e;
              }
              var S = s.sibling;
              if (S !== null) {
                (S.return = s.return), (T = S);
                break e;
              }
              T = s.return;
            }
        }
        if (
          ((F = o), It(), be && typeof be.onPostCommitFiberRoot == "function")
        )
          try {
            be.onPostCommitFiberRoot(cl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (Me.transition = t);
    }
  }
  return !1;
}
function Wa(e, t, n) {
  (t = jn(n, t)),
    (t = md(e, t, 1)),
    (e = Rt(e, t, 1)),
    (t = he()),
    e !== null && (Fr(e, 1, t), Ee(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) Wa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Wa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Pt === null || !Pt.has(r)))
        ) {
          (e = jn(n, e)),
            (e = yd(t, e, 1)),
            (t = Rt(t, e, 1)),
            (e = he()),
            t !== null && (Fr(t, 1, e), Ee(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function uy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = he()),
    (e.pingedLanes |= e.suspendedLanes & n),
    re === e &&
      (ie & n) === n &&
      (ee === 4 || (ee === 3 && (ie & 130023424) === ie && 500 > G() - du)
        ? qt(e, 0)
        : (fu |= n)),
    Ee(e, t);
}
function Dd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = br), (br <<= 1), !(br & 130023424) && (br = 4194304))
      : (t = 1));
  var n = he();
  (e = at(e, t)), e !== null && (Fr(e, t, n), Ee(e, n));
}
function ay(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Dd(e, n);
}
function cy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), Dd(e, n);
}
var Fd;
Fd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || we.current) ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ve = !1), Ym(e, t, n);
      ve = !!(e.flags & 131072);
    }
  else (ve = !1), H && t.flags & 1048576 && $f(t, Wo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Eo(e, t), (e = t.pendingProps);
      var o = Nn(t, de.current);
      _n(t, n), (o = lu(null, t, r, e, o, n));
      var l = iu();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Se(r) ? ((l = !0), Bo(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            eu(t),
            (o.updater = gl),
            (t.stateNode = o),
            (o._reactInternals = t),
            Yi(t, r, e, n),
            (t = es(null, t, r, !0, l, n)))
          : ((t.tag = 0), H && l && Ks(t), pe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Eo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = dy(r)),
          (e = We(r, e)),
          o)
        ) {
          case 0:
            t = bi(null, t, r, e, n);
            break e;
          case 1:
            t = ja(null, t, r, e, n);
            break e;
          case 11:
            t = Oa(null, t, r, e, n);
            break e;
          case 14:
            t = La(null, t, r, We(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : We(r, o)),
        bi(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : We(r, o)),
        ja(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Sd(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Kf(e, t),
          Qo(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = jn(Error(k(423)), t)), (t = za(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = jn(Error(k(424)), t)), (t = za(e, t, r, n, o));
            break e;
          } else
            for (
              Re = _t(t.stateNode.containerInfo.firstChild),
                Ne = t,
                H = !0,
                Ve = null,
                n = Qf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Tn(), r === o)) {
            t = ct(e, t, n);
            break e;
          }
          pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Jf(t),
        e === null && Ji(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Hi(r, o) ? (i = null) : l !== null && Hi(r, l) && (t.flags |= 32),
        wd(e, t),
        pe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ji(t), null;
    case 13:
      return Ed(e, t, n);
    case 4:
      return (
        tu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = On(t, null, r, n)) : pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : We(r, o)),
        Oa(e, t, r, o, n)
      );
    case 7:
      return pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          B(Ho, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (Je(l.value, i)) {
            if (l.children === o.children && !we.current) {
              t = ct(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var s = l.dependencies;
              if (s !== null) {
                i = l.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (l.tag === 1) {
                      (u = it(-1, n & -n)), (u.tag = 2);
                      var a = l.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var c = a.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (a.pending = u);
                      }
                    }
                    (l.lanes |= n),
                      (u = l.alternate),
                      u !== null && (u.lanes |= n),
                      Xi(l.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(k(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  Xi(i, n, t),
                  (i = l.sibling);
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        pe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        _n(t, n),
        (o = Ue(o)),
        (r = r(o)),
        (t.flags |= 1),
        pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = We(r, t.pendingProps)),
        (o = We(r.type, o)),
        La(e, t, r, o, n)
      );
    case 15:
      return gd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : We(r, o)),
        Eo(e, t),
        (t.tag = 1),
        Se(r) ? ((e = !0), Bo(t)) : (e = !1),
        _n(t, n),
        hd(t, r, o),
        Yi(t, r, o, n),
        es(null, t, r, !0, e, n)
      );
    case 19:
      return xd(e, t, n);
    case 22:
      return vd(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Md(e, t) {
  return ff(e, t);
}
function fy(e, t, n, r) {
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
function Fe(e, t, n, r) {
  return new fy(e, t, n, r);
}
function yu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function dy(e) {
  if (typeof e == "function") return yu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Is)) return 11;
    if (e === Ds) return 14;
  }
  return 2;
}
function Tt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Fe(e.tag, t, e.key, e.mode)),
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
function Co(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) yu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case cn:
        return Kt(n.children, o, l, t);
      case As:
        (i = 8), (o |= 8);
        break;
      case Ei:
        return (
          (e = Fe(12, n, t, o | 2)), (e.elementType = Ei), (e.lanes = l), e
        );
      case xi:
        return (e = Fe(13, n, t, o)), (e.elementType = xi), (e.lanes = l), e;
      case ki:
        return (e = Fe(19, n, t, o)), (e.elementType = ki), (e.lanes = l), e;
      case Kc:
        return Sl(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Qc:
              i = 10;
              break e;
            case qc:
              i = 9;
              break e;
            case Is:
              i = 11;
              break e;
            case Ds:
              i = 14;
              break e;
            case mt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Fe(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Kt(e, t, n, r) {
  return (e = Fe(7, e, r, t)), (e.lanes = n), e;
}
function Sl(e, t, n, r) {
  return (
    (e = Fe(22, e, r, t)),
    (e.elementType = Kc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ui(e, t, n) {
  return (e = Fe(6, e, null, t)), (e.lanes = n), e;
}
function ai(e, t, n) {
  return (
    (t = Fe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function py(e, t, n, r, o) {
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
    (this.eventTimes = Hl(0)),
    (this.expirationTimes = Hl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Hl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function gu(e, t, n, r, o, l, i, s, u) {
  return (
    (e = new py(e, t, n, s, u)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Fe(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    eu(l),
    e
  );
}
function hy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: an,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ud(e) {
  if (!e) return Lt;
  e = e._reactInternals;
  e: {
    if (ln(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Se(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Se(n)) return Uf(e, n, t);
  }
  return t;
}
function Bd(e, t, n, r, o, l, i, s, u) {
  return (
    (e = gu(n, r, !0, e, o, l, i, s, u)),
    (e.context = Ud(null)),
    (n = e.current),
    (r = he()),
    (o = Nt(n)),
    (l = it(r, o)),
    (l.callback = t ?? null),
    Rt(n, l, o),
    (e.current.lanes = o),
    Fr(e, o, r),
    Ee(e, r),
    e
  );
}
function El(e, t, n, r) {
  var o = t.current,
    l = he(),
    i = Nt(o);
  return (
    (n = Ud(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = it(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Rt(o, t, i)),
    e !== null && (Ke(e, o, i, l), vo(e, o, i)),
    i
  );
}
function bo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ha(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function vu(e, t) {
  Ha(e, t), (e = e.alternate) && Ha(e, t);
}
function my() {
  return null;
}
var $d =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function wu(e) {
  this._internalRoot = e;
}
xl.prototype.render = wu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  El(e, t, null, null);
};
xl.prototype.unmount = wu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    en(function () {
      El(null, e, null, null);
    }),
      (t[ut] = null);
  }
};
function xl(e) {
  this._internalRoot = e;
}
xl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = vf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < gt.length && t !== 0 && t < gt[n].priority; n++);
    gt.splice(n, 0, e), n === 0 && Sf(e);
  }
};
function Su(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function kl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Va() {}
function yy(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var a = bo(i);
        l.call(a);
      };
    }
    var i = Bd(t, r, e, 0, null, !1, !1, "", Va);
    return (
      (e._reactRootContainer = i),
      (e[ut] = i.current),
      xr(e.nodeType === 8 ? e.parentNode : e),
      en(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var a = bo(u);
      s.call(a);
    };
  }
  var u = gu(e, 0, !1, null, null, !1, !1, "", Va);
  return (
    (e._reactRootContainer = u),
    (e[ut] = u.current),
    xr(e.nodeType === 8 ? e.parentNode : e),
    en(function () {
      El(t, u, n, r);
    }),
    u
  );
}
function Cl(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var u = bo(i);
        s.call(u);
      };
    }
    El(t, i, e, o);
  } else i = yy(n, t, e, o, r);
  return bo(i);
}
yf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = bn(t.pendingLanes);
        n !== 0 &&
          (Us(t, n | 1), Ee(t, G()), !(F & 6) && ((zn = G() + 500), It()));
      }
      break;
    case 13:
      en(function () {
        var r = at(e, 1);
        if (r !== null) {
          var o = he();
          Ke(r, e, 1, o);
        }
      }),
        vu(e, 1);
  }
};
Bs = function (e) {
  if (e.tag === 13) {
    var t = at(e, 134217728);
    if (t !== null) {
      var n = he();
      Ke(t, e, 134217728, n);
    }
    vu(e, 134217728);
  }
};
gf = function (e) {
  if (e.tag === 13) {
    var t = Nt(e),
      n = at(e, t);
    if (n !== null) {
      var r = he();
      Ke(n, e, t, r);
    }
    vu(e, t);
  }
};
vf = function () {
  return M;
};
wf = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
zi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ri(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = hl(r);
            if (!o) throw Error(k(90));
            Xc(r), Ri(r, o);
          }
        }
      }
      break;
    case "textarea":
      Yc(e, n);
      break;
    case "select":
      (t = n.value), t != null && En(e, !!n.multiple, t, !1);
  }
};
of = pu;
lf = en;
var gy = { usingClientEntryPoint: !1, Events: [Ur, hn, hl, nf, rf, pu] },
  Xn = {
    findFiberByHostInstance: Wt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  vy = {
    bundleType: Xn.bundleType,
    version: Xn.version,
    rendererPackageName: Xn.rendererPackageName,
    rendererConfig: Xn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: dt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = af(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Xn.findFiberByHostInstance || my,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var co = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!co.isDisabled && co.supportsFiber)
    try {
      (cl = co.inject(vy)), (be = co);
    } catch {}
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gy;
ze.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Su(t)) throw Error(k(200));
  return hy(e, t, null, n);
};
ze.createRoot = function (e, t) {
  if (!Su(e)) throw Error(k(299));
  var n = !1,
    r = "",
    o = $d;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = gu(e, 1, !1, null, null, n, !1, r, o)),
    (e[ut] = t.current),
    xr(e.nodeType === 8 ? e.parentNode : e),
    new wu(t)
  );
};
ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = af(t)), (e = e === null ? null : e.stateNode), e;
};
ze.flushSync = function (e) {
  return en(e);
};
ze.hydrate = function (e, t, n) {
  if (!kl(t)) throw Error(k(200));
  return Cl(null, e, t, !0, n);
};
ze.hydrateRoot = function (e, t, n) {
  if (!Su(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = $d;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Bd(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[ut] = t.current),
    xr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new xl(t);
};
ze.render = function (e, t, n) {
  if (!kl(t)) throw Error(k(200));
  return Cl(null, e, t, !1, n);
};
ze.unmountComponentAtNode = function (e) {
  if (!kl(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (en(function () {
        Cl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ut] = null);
        });
      }),
      !0)
    : !1;
};
ze.unstable_batchedUpdates = pu;
ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!kl(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Cl(e, t, n, !1, r);
};
ze.version = "18.3.1-next-f1338f8080-20240426";
function Wd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wd);
    } catch (e) {
      console.error(e);
    }
}
Wd(), ($c.exports = ze);
var wy = $c.exports,
  Hd,
  Qa = wy;
(Hd = Qa.createRoot), Qa.hydrateRoot;
var Vd = { exports: {} },
  Qd = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $r = P;
function Sy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ey = typeof Object.is == "function" ? Object.is : Sy,
  xy = $r.useSyncExternalStore,
  ky = $r.useRef,
  Cy = $r.useEffect,
  _y = $r.useMemo,
  Ry = $r.useDebugValue;
Qd.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var l = ky(null);
  if (l.current === null) {
    var i = { hasValue: !1, value: null };
    l.current = i;
  } else i = l.current;
  l = _y(
    function () {
      function u(v) {
        if (!a) {
          if (((a = !0), (c = v), (v = r(v)), o !== void 0 && i.hasValue)) {
            var y = i.value;
            if (o(y, v)) return (f = y);
          }
          return (f = v);
        }
        if (((y = f), Ey(c, v))) return y;
        var w = r(v);
        return o !== void 0 && o(y, w) ? y : ((c = v), (f = w));
      }
      var a = !1,
        c,
        f,
        m = n === void 0 ? null : n;
      return [
        function () {
          return u(t());
        },
        m === null
          ? void 0
          : function () {
              return u(m());
            },
      ];
    },
    [t, n, r, o]
  );
  var s = xy(e, l[0], l[1]);
  return (
    Cy(
      function () {
        (i.hasValue = !0), (i.value = s);
      },
      [s]
    ),
    Ry(s),
    s
  );
};
Vd.exports = Qd;
var Py = Vd.exports,
  Pe = "default" in wi ? Uc : wi,
  qa = Symbol.for("react-redux-context"),
  Ka = typeof globalThis < "u" ? globalThis : {};
function Ny() {
  if (!Pe.createContext) return {};
  const e = Ka[qa] ?? (Ka[qa] = new Map());
  let t = e.get(Pe.createContext);
  return t || ((t = Pe.createContext(null)), e.set(Pe.createContext, t)), t;
}
var jt = Ny(),
  Ty = () => {
    throw new Error("uSES not initialized!");
  };
function Eu(e = jt) {
  return function () {
    return Pe.useContext(e);
  };
}
var qd = Eu(),
  Kd = Ty,
  Oy = (e) => {
    Kd = e;
  },
  Ly = (e, t) => e === t;
function jy(e = jt) {
  const t = e === jt ? qd : Eu(e),
    n = (r, o = {}) => {
      const { equalityFn: l = Ly, devModeChecks: i = {} } =
          typeof o == "function" ? { equalityFn: o } : o,
        {
          store: s,
          subscription: u,
          getServerState: a,
          stabilityCheck: c,
          identityFunctionCheck: f,
        } = t();
      Pe.useRef(!0);
      const m = Pe.useCallback(
          {
            [r.name](y) {
              return r(y);
            },
          }[r.name],
          [r, c, i.stabilityCheck]
        ),
        v = Kd(u.addNestedSub, s.getState, a || s.getState, m, l);
      return Pe.useDebugValue(v), v;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var fr = jy();
function zy(e) {
  e();
}
function Ay() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      zy(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const o = (t = { callback: n, next: null, prev: t });
      return (
        o.prev ? (o.prev.next = o) : (e = o),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            o.next ? (o.next.prev = o.prev) : (t = o.prev),
            o.prev ? (o.prev.next = o.next) : (e = o.next));
        }
      );
    },
  };
}
var Ja = { notify() {}, get: () => [] };
function Iy(e, t) {
  let n,
    r = Ja,
    o = 0,
    l = !1;
  function i(w) {
    c();
    const g = r.subscribe(w);
    let p = !1;
    return () => {
      p || ((p = !0), g(), f());
    };
  }
  function s() {
    r.notify();
  }
  function u() {
    y.onStateChange && y.onStateChange();
  }
  function a() {
    return l;
  }
  function c() {
    o++, n || ((n = e.subscribe(u)), (r = Ay()));
  }
  function f() {
    o--, n && o === 0 && (n(), (n = void 0), r.clear(), (r = Ja));
  }
  function m() {
    l || ((l = !0), c());
  }
  function v() {
    l && ((l = !1), f());
  }
  const y = {
    addNestedSub: i,
    notifyNestedSubs: s,
    handleChangeWrapper: u,
    isSubscribed: a,
    trySubscribe: m,
    tryUnsubscribe: v,
    getListeners: () => r,
  };
  return y;
}
var Dy =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Fy = typeof navigator < "u" && navigator.product === "ReactNative",
  My = Dy || Fy ? Pe.useLayoutEffect : Pe.useEffect;
function Uy({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: l = "once",
}) {
  const i = Pe.useMemo(() => {
      const a = Iy(e);
      return {
        store: e,
        subscription: a,
        getServerState: r ? () => r : void 0,
        stabilityCheck: o,
        identityFunctionCheck: l,
      };
    }, [e, r, o, l]),
    s = Pe.useMemo(() => e.getState(), [e]);
  My(() => {
    const { subscription: a } = i;
    return (
      (a.onStateChange = a.notifyNestedSubs),
      a.trySubscribe(),
      s !== e.getState() && a.notifyNestedSubs(),
      () => {
        a.tryUnsubscribe(), (a.onStateChange = void 0);
      }
    );
  }, [i, s]);
  const u = t || jt;
  return Pe.createElement(u.Provider, { value: i }, n);
}
var By = Uy;
function Jd(e = jt) {
  const t = e === jt ? qd : Eu(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var $y = Jd();
function Wy(e = jt) {
  const t = e === jt ? $y : Jd(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var xu = Wy();
Oy(Py.useSyncExternalStoreWithSelector);
function oe(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Hy = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  Xa = Hy,
  ci = () => Math.random().toString(36).substring(7).split("").join("."),
  Vy = {
    INIT: `@@redux/INIT${ci()}`,
    REPLACE: `@@redux/REPLACE${ci()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ci()}`,
  },
  el = Vy;
function ku(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Xd(e, t, n) {
  if (typeof e != "function") throw new Error(oe(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(oe(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(oe(1));
    return n(Xd)(e, t);
  }
  let r = e,
    o = t,
    l = new Map(),
    i = l,
    s = 0,
    u = !1;
  function a() {
    i === l &&
      ((i = new Map()),
      l.forEach((g, p) => {
        i.set(p, g);
      }));
  }
  function c() {
    if (u) throw new Error(oe(3));
    return o;
  }
  function f(g) {
    if (typeof g != "function") throw new Error(oe(4));
    if (u) throw new Error(oe(5));
    let p = !0;
    a();
    const d = s++;
    return (
      i.set(d, g),
      function () {
        if (p) {
          if (u) throw new Error(oe(6));
          (p = !1), a(), i.delete(d), (l = null);
        }
      }
    );
  }
  function m(g) {
    if (!ku(g)) throw new Error(oe(7));
    if (typeof g.type > "u") throw new Error(oe(8));
    if (typeof g.type != "string") throw new Error(oe(17));
    if (u) throw new Error(oe(9));
    try {
      (u = !0), (o = r(o, g));
    } finally {
      u = !1;
    }
    return (
      (l = i).forEach((d) => {
        d();
      }),
      g
    );
  }
  function v(g) {
    if (typeof g != "function") throw new Error(oe(10));
    (r = g), m({ type: el.REPLACE });
  }
  function y() {
    const g = f;
    return {
      subscribe(p) {
        if (typeof p != "object" || p === null) throw new Error(oe(11));
        function d() {
          const S = p;
          S.next && S.next(c());
        }
        return d(), { unsubscribe: g(d) };
      },
      [Xa]() {
        return this;
      },
    };
  }
  return (
    m({ type: el.INIT }),
    { dispatch: m, subscribe: f, getState: c, replaceReducer: v, [Xa]: y }
  );
}
function Qy(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: el.INIT }) > "u") throw new Error(oe(12));
    if (typeof n(void 0, { type: el.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(oe(13));
  });
}
function qy(e) {
  const t = Object.keys(e),
    n = {};
  for (let l = 0; l < t.length; l++) {
    const i = t[l];
    typeof e[i] == "function" && (n[i] = e[i]);
  }
  const r = Object.keys(n);
  let o;
  try {
    Qy(n);
  } catch (l) {
    o = l;
  }
  return function (i = {}, s) {
    if (o) throw o;
    let u = !1;
    const a = {};
    for (let c = 0; c < r.length; c++) {
      const f = r[c],
        m = n[f],
        v = i[f],
        y = m(v, s);
      if (typeof y > "u") throw (s && s.type, new Error(oe(14)));
      (a[f] = y), (u = u || y !== v);
    }
    return (u = u || r.length !== Object.keys(i).length), u ? a : i;
  };
}
function tl(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...r) =>
            t(n(...r))
      );
}
function Ky(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let l = () => {
      throw new Error(oe(15));
    };
    const i = { getState: o.getState, dispatch: (u, ...a) => l(u, ...a) },
      s = e.map((u) => u(i));
    return (l = tl(...s)(o.dispatch)), { ...o, dispatch: l };
  };
}
function Jy(e) {
  return ku(e) && "type" in e && typeof e.type == "string";
}
var Gd = Symbol.for("immer-nothing"),
  Ga = Symbol.for("immer-draftable"),
  Le = Symbol.for("immer-state");
function Qe(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var An = Object.getPrototypeOf;
function tn(e) {
  return !!e && !!e[Le];
}
function ft(e) {
  var t;
  return e
    ? Yd(e) ||
        Array.isArray(e) ||
        !!e[Ga] ||
        !!((t = e.constructor) != null && t[Ga]) ||
        Rl(e) ||
        Pl(e)
    : !1;
}
var Xy = Object.prototype.constructor.toString();
function Yd(e) {
  if (!e || typeof e != "object") return !1;
  const t = An(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === Xy;
}
function nl(e, t) {
  _l(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function _l(e) {
  const t = e[Le];
  return t ? t.type_ : Array.isArray(e) ? 1 : Rl(e) ? 2 : Pl(e) ? 3 : 0;
}
function ds(e, t) {
  return _l(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Zd(e, t, n) {
  const r = _l(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function Gy(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Rl(e) {
  return e instanceof Map;
}
function Pl(e) {
  return e instanceof Set;
}
function $t(e) {
  return e.copy_ || e.base_;
}
function ps(e, t) {
  if (Rl(e)) return new Map(e);
  if (Pl(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = Yd(e);
  if (t === !0 || (t === "class_only" && !n)) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[Le];
    let o = Reflect.ownKeys(r);
    for (let l = 0; l < o.length; l++) {
      const i = o[l],
        s = r[i];
      s.writable === !1 && ((s.writable = !0), (s.configurable = !0)),
        (s.get || s.set) &&
          (r[i] = {
            configurable: !0,
            writable: !0,
            enumerable: s.enumerable,
            value: e[i],
          });
    }
    return Object.create(An(e), r);
  } else {
    const r = An(e);
    if (r !== null && n) return { ...e };
    const o = Object.create(r);
    return Object.assign(o, e);
  }
}
function Cu(e, t = !1) {
  return (
    Nl(e) ||
      tn(e) ||
      !ft(e) ||
      (_l(e) > 1 && (e.set = e.add = e.clear = e.delete = Yy),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => Cu(r, !0))),
    e
  );
}
function Yy() {
  Qe(2);
}
function Nl(e) {
  return Object.isFrozen(e);
}
var Zy = {};
function nn(e) {
  const t = Zy[e];
  return t || Qe(0, e), t;
}
var Lr;
function bd() {
  return Lr;
}
function by(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Ya(e, t) {
  t &&
    (nn("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function hs(e) {
  ms(e), e.drafts_.forEach(eg), (e.drafts_ = null);
}
function ms(e) {
  e === Lr && (Lr = e.parent_);
}
function Za(e) {
  return (Lr = by(Lr, e));
}
function eg(e) {
  const t = e[Le];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function ba(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[Le].modified_ && (hs(t), Qe(4)),
        ft(e) && ((e = rl(t, e)), t.parent_ || ol(t, e)),
        t.patches_ &&
          nn("Patches").generateReplacementPatches_(
            n[Le].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = rl(t, n, [])),
    hs(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== Gd ? e : void 0
  );
}
function rl(e, t, n) {
  if (Nl(t)) return t;
  const r = t[Le];
  if (!r) return nl(t, (o, l) => ec(e, r, t, o, l, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return ol(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let l = o,
      i = !1;
    r.type_ === 3 && ((l = new Set(o)), o.clear(), (i = !0)),
      nl(l, (s, u) => ec(e, r, o, s, u, n, i)),
      ol(e, o, !1),
      n &&
        e.patches_ &&
        nn("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function ec(e, t, n, r, o, l, i) {
  if (tn(o)) {
    const s =
        l && t && t.type_ !== 3 && !ds(t.assigned_, r) ? l.concat(r) : void 0,
      u = rl(e, o, s);
    if ((Zd(n, r, u), tn(u))) e.canAutoFreeze_ = !1;
    else return;
  } else i && n.add(o);
  if (ft(o) && !Nl(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    rl(e, o),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        ol(e, o);
  }
}
function ol(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Cu(t, n);
}
function tg(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : bd(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let o = r,
    l = _u;
  n && ((o = [r]), (l = jr));
  const { revoke: i, proxy: s } = Proxy.revocable(o, l);
  return (r.draft_ = s), (r.revoke_ = i), s;
}
var _u = {
    get(e, t) {
      if (t === Le) return e;
      const n = $t(e);
      if (!ds(n, t)) return ng(e, n, t);
      const r = n[t];
      return e.finalized_ || !ft(r)
        ? r
        : r === fi(e.base_, t)
        ? (di(e), (e.copy_[t] = gs(r, e)))
        : r;
    },
    has(e, t) {
      return t in $t(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys($t(e));
    },
    set(e, t, n) {
      const r = ep($t(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const o = fi($t(e), t),
          l = o == null ? void 0 : o[Le];
        if (l && l.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (Gy(n, o) && (n !== void 0 || ds(e.base_, t))) return !0;
        di(e), ys(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        fi(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), di(e), ys(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = $t(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      Qe(11);
    },
    getPrototypeOf(e) {
      return An(e.base_);
    },
    setPrototypeOf() {
      Qe(12);
    },
  },
  jr = {};
nl(_u, (e, t) => {
  jr[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
jr.deleteProperty = function (e, t) {
  return jr.set.call(this, e, t, void 0);
};
jr.set = function (e, t, n) {
  return _u.set.call(this, e[0], t, n, e[0]);
};
function fi(e, t) {
  const n = e[Le];
  return (n ? $t(n) : e)[t];
}
function ng(e, t, n) {
  var o;
  const r = ep(t, n);
  return r
    ? "value" in r
      ? r.value
      : (o = r.get) == null
      ? void 0
      : o.call(e.draft_)
    : void 0;
}
function ep(e, t) {
  if (!(t in e)) return;
  let n = An(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = An(n);
  }
}
function ys(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && ys(e.parent_));
}
function di(e) {
  e.copy_ || (e.copy_ = ps(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var rg = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const l = n;
          n = t;
          const i = this;
          return function (u = l, ...a) {
            return i.produce(u, (c) => n.call(this, c, ...a));
          };
        }
        typeof n != "function" && Qe(6),
          r !== void 0 && typeof r != "function" && Qe(7);
        let o;
        if (ft(t)) {
          const l = Za(this),
            i = gs(t, void 0);
          let s = !0;
          try {
            (o = n(i)), (s = !1);
          } finally {
            s ? hs(l) : ms(l);
          }
          return Ya(l, r), ba(o, l);
        } else if (!t || typeof t != "object") {
          if (
            ((o = n(t)),
            o === void 0 && (o = t),
            o === Gd && (o = void 0),
            this.autoFreeze_ && Cu(o, !0),
            r)
          ) {
            const l = [],
              i = [];
            nn("Patches").generateReplacementPatches_(t, o, l, i), r(l, i);
          }
          return o;
        } else Qe(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (i, ...s) => this.produceWithPatches(i, (u) => t(u, ...s));
        let r, o;
        return [
          this.produce(t, n, (i, s) => {
            (r = i), (o = s);
          }),
          r,
          o,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    ft(e) || Qe(8), tn(e) && (e = og(e));
    const t = Za(this),
      n = gs(e, void 0);
    return (n[Le].isManual_ = !0), ms(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Le];
    (!n || !n.isManual_) && Qe(9);
    const { scope_: r } = n;
    return Ya(r, t), ba(void 0, r);
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
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = nn("Patches").applyPatches_;
    return tn(e) ? r(e, t) : this.produce(e, (o) => r(o, t));
  }
};
function gs(e, t) {
  const n = Rl(e)
    ? nn("MapSet").proxyMap_(e, t)
    : Pl(e)
    ? nn("MapSet").proxySet_(e, t)
    : tg(e, t);
  return (t ? t.scope_ : bd()).drafts_.push(n), n;
}
function og(e) {
  return tn(e) || Qe(10, e), tp(e);
}
function tp(e) {
  if (!ft(e) || Nl(e)) return e;
  const t = e[Le];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = ps(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = ps(e, !0);
  return (
    nl(n, (r, o) => {
      Zd(n, r, tp(o));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var je = new rg(),
  np = je.produce;
je.produceWithPatches.bind(je);
je.setAutoFreeze.bind(je);
je.setUseStrictShallowCopy.bind(je);
je.applyPatches.bind(je);
je.createDraft.bind(je);
je.finishDraft.bind(je);
function rp(e) {
  return ({ dispatch: n, getState: r }) =>
    (o) =>
    (l) =>
      typeof l == "function" ? l(n, r, e) : o(l);
}
var lg = rp(),
  ig = rp,
  sg =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? tl
              : tl.apply(null, arguments);
        },
  ug = (e) => e && typeof e.match == "function";
function dr(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o) throw new Error(tt(0));
      return {
        type: e,
        payload: o.payload,
        ...("meta" in o && { meta: o.meta }),
        ...("error" in o && { error: o.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => Jy(r) && r.type === e),
    n
  );
}
var op = class tr extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, tr.prototype);
  }
  static get [Symbol.species]() {
    return tr;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new tr(...t[0].concat(this))
      : new tr(...t.concat(this));
  }
};
function tc(e) {
  return ft(e) ? np(e, () => {}) : e;
}
function nc(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && ((o = n.update(o, t, e)), e.set(t, o)), o;
  }
  if (!n.insert) throw new Error(tt(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function ag(e) {
  return typeof e == "boolean";
}
var cg = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: o = !0,
        actionCreatorCheck: l = !0,
      } = t ?? {};
      let i = new op();
      return n && (ag(n) ? i.push(lg) : i.push(ig(n.extraArgument))), i;
    },
  fg = "RTK_autoBatch",
  lp = (e) => (t) => {
    setTimeout(t, e);
  },
  dg =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : lp(10),
  pg =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let o = !0,
        l = !1,
        i = !1;
      const s = new Set(),
        u =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
            ? dg
            : e.type === "callback"
            ? e.queueNotification
            : lp(e.timeout),
        a = () => {
          (i = !1), l && ((l = !1), s.forEach((c) => c()));
        };
      return Object.assign({}, r, {
        subscribe(c) {
          const f = () => o && c(),
            m = r.subscribe(f);
          return (
            s.add(c),
            () => {
              m(), s.delete(c);
            }
          );
        },
        dispatch(c) {
          var f;
          try {
            return (
              (o = !((f = c == null ? void 0 : c.meta) != null && f[fg])),
              (l = !o),
              l && (i || ((i = !0), u(a))),
              r.dispatch(c)
            );
          } finally {
            o = !0;
          }
        },
      });
    },
  hg = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let o = new op(e);
      return r && o.push(pg(typeof r == "object" ? r : void 0)), o;
    };
function mg(e) {
  const t = cg(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: o = !0,
      preloadedState: l = void 0,
      enhancers: i = void 0,
    } = e || {};
  let s;
  if (typeof n == "function") s = n;
  else if (ku(n)) s = qy(n);
  else throw new Error(tt(1));
  let u;
  typeof r == "function" ? (u = r(t)) : (u = t());
  let a = tl;
  o && (a = sg({ trace: !1, ...(typeof o == "object" && o) }));
  const c = Ky(...u),
    f = hg(c);
  let m = typeof i == "function" ? i(f) : f();
  const v = a(...m);
  return Xd(s, l, v);
}
function ip(e) {
  const t = {},
    n = [];
  let r;
  const o = {
    addCase(l, i) {
      const s = typeof l == "string" ? l : l.type;
      if (!s) throw new Error(tt(28));
      if (s in t) throw new Error(tt(29));
      return (t[s] = i), o;
    },
    addMatcher(l, i) {
      return n.push({ matcher: l, reducer: i }), o;
    },
    addDefaultCase(l) {
      return (r = l), o;
    },
  };
  return e(o), [t, n, r];
}
function yg(e) {
  return typeof e == "function";
}
function gg(e, t) {
  let [n, r, o] = ip(t),
    l;
  if (yg(e)) l = () => tc(e());
  else {
    const s = tc(e);
    l = () => s;
  }
  function i(s = l(), u) {
    let a = [
      n[u.type],
      ...r.filter(({ matcher: c }) => c(u)).map(({ reducer: c }) => c),
    ];
    return (
      a.filter((c) => !!c).length === 0 && (a = [o]),
      a.reduce((c, f) => {
        if (f)
          if (tn(c)) {
            const v = f(c, u);
            return v === void 0 ? c : v;
          } else {
            if (ft(c)) return np(c, (m) => f(m, u));
            {
              const m = f(c, u);
              if (m === void 0) {
                if (c === null) return c;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined"
                );
              }
              return m;
            }
          }
        return c;
      }, s)
    );
  }
  return (i.getInitialState = l), i;
}
var vg = (e, t) => (ug(e) ? e.match(t) : e(t));
function wg(...e) {
  return (t) => e.some((n) => vg(n, t));
}
var Sg = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  Eg = (e = 21) => {
    let t = "",
      n = e;
    for (; n--; ) t += Sg[(Math.random() * 64) | 0];
    return t;
  },
  xg = ["name", "message", "stack", "code"],
  pi = class {
    constructor(e, t) {
      Fl(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  rc = class {
    constructor(e, t) {
      Fl(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  kg = (e) => {
    if (typeof e == "object" && e !== null) {
      const t = {};
      for (const n of xg) typeof e[n] == "string" && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  Ru = (() => {
    function e(t, n, r) {
      const o = dr(t + "/fulfilled", (u, a, c, f) => ({
          payload: u,
          meta: {
            ...(f || {}),
            arg: c,
            requestId: a,
            requestStatus: "fulfilled",
          },
        })),
        l = dr(t + "/pending", (u, a, c) => ({
          payload: void 0,
          meta: {
            ...(c || {}),
            arg: a,
            requestId: u,
            requestStatus: "pending",
          },
        })),
        i = dr(t + "/rejected", (u, a, c, f, m) => ({
          payload: f,
          error: ((r && r.serializeError) || kg)(u || "Rejected"),
          meta: {
            ...(m || {}),
            arg: c,
            requestId: a,
            rejectedWithValue: !!f,
            requestStatus: "rejected",
            aborted: (u == null ? void 0 : u.name) === "AbortError",
            condition: (u == null ? void 0 : u.name) === "ConditionError",
          },
        }));
      function s(u) {
        return (a, c, f) => {
          const m = r != null && r.idGenerator ? r.idGenerator(u) : Eg(),
            v = new AbortController();
          let y, w;
          function g(d) {
            (w = d), v.abort();
          }
          const p = (async function () {
            var S, x;
            let d;
            try {
              let C =
                (S = r == null ? void 0 : r.condition) == null
                  ? void 0
                  : S.call(r, u, { getState: c, extra: f });
              if ((_g(C) && (C = await C), C === !1 || v.signal.aborted))
                throw {
                  name: "ConditionError",
                  message: "Aborted due to condition callback returning false.",
                };
              const R = new Promise((_, D) => {
                (y = () => {
                  D({ name: "AbortError", message: w || "Aborted" });
                }),
                  v.signal.addEventListener("abort", y);
              });
              a(
                l(
                  m,
                  u,
                  (x = r == null ? void 0 : r.getPendingMeta) == null
                    ? void 0
                    : x.call(
                        r,
                        { requestId: m, arg: u },
                        { getState: c, extra: f }
                      )
                )
              ),
                (d = await Promise.race([
                  R,
                  Promise.resolve(
                    n(u, {
                      dispatch: a,
                      getState: c,
                      extra: f,
                      requestId: m,
                      signal: v.signal,
                      abort: g,
                      rejectWithValue: (_, D) => new pi(_, D),
                      fulfillWithValue: (_, D) => new rc(_, D),
                    })
                  ).then((_) => {
                    if (_ instanceof pi) throw _;
                    return _ instanceof rc
                      ? o(_.payload, m, u, _.meta)
                      : o(_, m, u);
                  }),
                ]));
            } catch (C) {
              d =
                C instanceof pi ? i(null, m, u, C.payload, C.meta) : i(C, m, u);
            } finally {
              y && v.signal.removeEventListener("abort", y);
            }
            return (
              (r &&
                !r.dispatchConditionRejection &&
                i.match(d) &&
                d.meta.condition) ||
                a(d),
              d
            );
          })();
          return Object.assign(p, {
            abort: g,
            requestId: m,
            arg: u,
            unwrap() {
              return p.then(Cg);
            },
          });
        };
      }
      return Object.assign(s, {
        pending: l,
        rejected: i,
        fulfilled: o,
        settled: wg(i, o),
        typePrefix: t,
      });
    }
    return (e.withTypes = () => e), e;
  })();
function Cg(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function _g(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Rg = Symbol.for("rtk-slice-createasyncthunk");
function Pg(e, t) {
  return `${e}/${t}`;
}
function Ng({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[Rg];
  return function (o) {
    const { name: l, reducerPath: i = l } = o;
    if (!l) throw new Error(tt(11));
    typeof process < "u";
    const s =
        (typeof o.reducers == "function" ? o.reducers(Og()) : o.reducers) || {},
      u = Object.keys(s),
      a = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      c = {
        addCase(h, S) {
          const x = typeof h == "string" ? h : h.type;
          if (!x) throw new Error(tt(12));
          if (x in a.sliceCaseReducersByType) throw new Error(tt(13));
          return (a.sliceCaseReducersByType[x] = S), c;
        },
        addMatcher(h, S) {
          return a.sliceMatchers.push({ matcher: h, reducer: S }), c;
        },
        exposeAction(h, S) {
          return (a.actionCreators[h] = S), c;
        },
        exposeCaseReducer(h, S) {
          return (a.sliceCaseReducersByName[h] = S), c;
        },
      };
    u.forEach((h) => {
      const S = s[h],
        x = {
          reducerName: h,
          type: Pg(l, h),
          createNotation: typeof o.reducers == "function",
        };
      jg(S) ? Ag(x, S, c, t) : Lg(x, S, c);
    });
    function f() {
      const [h = {}, S = [], x = void 0] =
          typeof o.extraReducers == "function"
            ? ip(o.extraReducers)
            : [o.extraReducers],
        C = { ...h, ...a.sliceCaseReducersByType };
      return gg(o.initialState, (R) => {
        for (let _ in C) R.addCase(_, C[_]);
        for (let _ of a.sliceMatchers) R.addMatcher(_.matcher, _.reducer);
        for (let _ of S) R.addMatcher(_.matcher, _.reducer);
        x && R.addDefaultCase(x);
      });
    }
    const m = (h) => h,
      v = new Map();
    let y;
    function w(h, S) {
      return y || (y = f()), y(h, S);
    }
    function g() {
      return y || (y = f()), y.getInitialState();
    }
    function p(h, S = !1) {
      function x(R) {
        let _ = R[h];
        return typeof _ > "u" && S && (_ = g()), _;
      }
      function C(R = m) {
        const _ = nc(v, S, { insert: () => new WeakMap() });
        return nc(_, R, {
          insert: () => {
            const D = {};
            for (const [L, U] of Object.entries(o.selectors ?? {}))
              D[L] = Tg(U, R, g, S);
            return D;
          },
        });
      }
      return {
        reducerPath: h,
        getSelectors: C,
        get selectors() {
          return C(x);
        },
        selectSlice: x,
      };
    }
    const d = {
      name: l,
      reducer: w,
      actions: a.actionCreators,
      caseReducers: a.sliceCaseReducersByName,
      getInitialState: g,
      ...p(i),
      injectInto(h, { reducerPath: S, ...x } = {}) {
        const C = S ?? i;
        return (
          h.inject({ reducerPath: C, reducer: w }, x), { ...d, ...p(C, !0) }
        );
      },
    };
    return d;
  };
}
function Tg(e, t, n, r) {
  function o(l, ...i) {
    let s = t(l);
    return typeof s > "u" && r && (s = n()), e(s, ...i);
  }
  return (o.unwrapped = e), o;
}
var Pu = Ng();
function Og() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function Lg({ type: e, reducerName: t, createNotation: n }, r, o) {
  let l, i;
  if ("reducer" in r) {
    if (n && !zg(r)) throw new Error(tt(17));
    (l = r.reducer), (i = r.prepare);
  } else l = r;
  o.addCase(e, l)
    .exposeCaseReducer(t, l)
    .exposeAction(t, i ? dr(e, i) : dr(e));
}
function jg(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function zg(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Ag({ type: e, reducerName: t }, n, r, o) {
  if (!o) throw new Error(tt(18));
  const {
      payloadCreator: l,
      fulfilled: i,
      pending: s,
      rejected: u,
      settled: a,
      options: c,
    } = n,
    f = o(e, l, c);
  r.exposeAction(t, f),
    i && r.addCase(f.fulfilled, i),
    s && r.addCase(f.pending, s),
    u && r.addCase(f.rejected, u),
    a && r.addMatcher(f.settled, a),
    r.exposeCaseReducer(t, {
      fulfilled: i || fo,
      pending: s || fo,
      rejected: u || fo,
      settled: a || fo,
    });
}
function fo() {}
function tt(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
function sp(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Ig } = Object.prototype,
  { getPrototypeOf: Nu } = Object,
  Tl = ((e) => (t) => {
    const n = Ig.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Xe = (e) => ((e = e.toLowerCase()), (t) => Tl(t) === e),
  Ol = (e) => (t) => typeof t === e,
  { isArray: Mn } = Array,
  zr = Ol("undefined");
function Dg(e) {
  return (
    e !== null &&
    !zr(e) &&
    e.constructor !== null &&
    !zr(e.constructor) &&
    Te(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const up = Xe("ArrayBuffer");
function Fg(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && up(e.buffer)),
    t
  );
}
const Mg = Ol("string"),
  Te = Ol("function"),
  ap = Ol("number"),
  Ll = (e) => e !== null && typeof e == "object",
  Ug = (e) => e === !0 || e === !1,
  _o = (e) => {
    if (Tl(e) !== "object") return !1;
    const t = Nu(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Bg = Xe("Date"),
  $g = Xe("File"),
  Wg = Xe("Blob"),
  Hg = Xe("FileList"),
  Vg = (e) => Ll(e) && Te(e.pipe),
  Qg = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Te(e.append) &&
          ((t = Tl(e)) === "formdata" ||
            (t === "object" &&
              Te(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  qg = Xe("URLSearchParams"),
  [Kg, Jg, Xg, Gg] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Xe
  ),
  Yg = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Wr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), Mn(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const l = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = l.length;
    let s;
    for (r = 0; r < i; r++) (s = l[r]), t.call(null, e[s], s, e);
  }
}
function cp(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const Qt =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  fp = (e) => !zr(e) && e !== Qt;
function vs() {
  const { caseless: e } = (fp(this) && this) || {},
    t = {},
    n = (r, o) => {
      const l = (e && cp(t, o)) || o;
      _o(t[l]) && _o(r)
        ? (t[l] = vs(t[l], r))
        : _o(r)
        ? (t[l] = vs({}, r))
        : Mn(r)
        ? (t[l] = r.slice())
        : (t[l] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Wr(arguments[r], n);
  return t;
}
const Zg = (e, t, n, { allOwnKeys: r } = {}) => (
    Wr(
      t,
      (o, l) => {
        n && Te(o) ? (e[l] = sp(o, n)) : (e[l] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  bg = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  e0 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  t0 = (e, t, n, r) => {
    let o, l, i;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), l = o.length; l-- > 0; )
        (i = o[l]), (!r || r(i, e, t)) && !s[i] && ((t[i] = e[i]), (s[i] = !0));
      e = n !== !1 && Nu(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  n0 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  r0 = (e) => {
    if (!e) return null;
    if (Mn(e)) return e;
    let t = e.length;
    if (!ap(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  o0 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Nu(Uint8Array)),
  l0 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const l = o.value;
      t.call(e, l[0], l[1]);
    }
  },
  i0 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  s0 = Xe("HTMLFormElement"),
  u0 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  oc = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  a0 = Xe("RegExp"),
  dp = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Wr(n, (o, l) => {
      let i;
      (i = t(o, l, e)) !== !1 && (r[l] = i || o);
    }),
      Object.defineProperties(e, r);
  },
  c0 = (e) => {
    dp(e, (t, n) => {
      if (Te(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Te(r)) {
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
  f0 = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((l) => {
          n[l] = !0;
        });
      };
    return Mn(e) ? r(e) : r(String(e).split(t)), n;
  },
  d0 = () => {},
  p0 = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  hi = "abcdefghijklmnopqrstuvwxyz",
  lc = "0123456789",
  pp = { DIGIT: lc, ALPHA: hi, ALPHA_DIGIT: hi + hi.toUpperCase() + lc },
  h0 = (e = 16, t = pp.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function m0(e) {
  return !!(
    e &&
    Te(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const y0 = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Ll(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const l = Mn(r) ? [] : {};
            return (
              Wr(r, (i, s) => {
                const u = n(i, o + 1);
                !zr(u) && (l[s] = u);
              }),
              (t[o] = void 0),
              l
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  g0 = Xe("AsyncFunction"),
  v0 = (e) => e && (Ll(e) || Te(e)) && Te(e.then) && Te(e.catch),
  hp = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          Qt.addEventListener(
            "message",
            ({ source: o, data: l }) => {
              o === Qt && l === n && r.length && r.shift()();
            },
            !1
          ),
          (o) => {
            r.push(o), Qt.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Te(Qt.postMessage)
  ),
  w0 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Qt)
      : (typeof process < "u" && process.nextTick) || hp,
  E = {
    isArray: Mn,
    isArrayBuffer: up,
    isBuffer: Dg,
    isFormData: Qg,
    isArrayBufferView: Fg,
    isString: Mg,
    isNumber: ap,
    isBoolean: Ug,
    isObject: Ll,
    isPlainObject: _o,
    isReadableStream: Kg,
    isRequest: Jg,
    isResponse: Xg,
    isHeaders: Gg,
    isUndefined: zr,
    isDate: Bg,
    isFile: $g,
    isBlob: Wg,
    isRegExp: a0,
    isFunction: Te,
    isStream: Vg,
    isURLSearchParams: qg,
    isTypedArray: o0,
    isFileList: Hg,
    forEach: Wr,
    merge: vs,
    extend: Zg,
    trim: Yg,
    stripBOM: bg,
    inherits: e0,
    toFlatObject: t0,
    kindOf: Tl,
    kindOfTest: Xe,
    endsWith: n0,
    toArray: r0,
    forEachEntry: l0,
    matchAll: i0,
    isHTMLForm: s0,
    hasOwnProperty: oc,
    hasOwnProp: oc,
    reduceDescriptors: dp,
    freezeMethods: c0,
    toObjectSet: f0,
    toCamelCase: u0,
    noop: d0,
    toFiniteNumber: p0,
    findKey: cp,
    global: Qt,
    isContextDefined: fp,
    ALPHABET: pp,
    generateString: h0,
    isSpecCompliantForm: m0,
    toJSONObject: y0,
    isAsyncFn: g0,
    isThenable: v0,
    setImmediate: hp,
    asap: w0,
  };
function j(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
E.inherits(j, Error, {
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
      config: E.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const mp = j.prototype,
  yp = {};
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
  yp[e] = { value: e };
});
Object.defineProperties(j, yp);
Object.defineProperty(mp, "isAxiosError", { value: !0 });
j.from = (e, t, n, r, o, l) => {
  const i = Object.create(mp);
  return (
    E.toFlatObject(
      e,
      i,
      function (u) {
        return u !== Error.prototype;
      },
      (s) => s !== "isAxiosError"
    ),
    j.call(i, e.message, t, n, r, o),
    (i.cause = e),
    (i.name = e.name),
    l && Object.assign(i, l),
    i
  );
};
const S0 = null;
function ws(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function gp(e) {
  return E.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ic(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, l) {
          return (o = gp(o)), !n && l ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function E0(e) {
  return E.isArray(e) && !e.some(ws);
}
const x0 = E.toFlatObject(E, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function jl(e, t, n) {
  if (!E.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = E.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (w, g) {
        return !E.isUndefined(g[w]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    l = n.dots,
    i = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && E.isSpecCompliantForm(t);
  if (!E.isFunction(o)) throw new TypeError("visitor must be a function");
  function a(y) {
    if (y === null) return "";
    if (E.isDate(y)) return y.toISOString();
    if (!u && E.isBlob(y))
      throw new j("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(y) || E.isTypedArray(y)
      ? u && typeof Blob == "function"
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function c(y, w, g) {
    let p = y;
    if (y && !g && typeof y == "object") {
      if (E.endsWith(w, "{}"))
        (w = r ? w : w.slice(0, -2)), (y = JSON.stringify(y));
      else if (
        (E.isArray(y) && E0(y)) ||
        ((E.isFileList(y) || E.endsWith(w, "[]")) && (p = E.toArray(y)))
      )
        return (
          (w = gp(w)),
          p.forEach(function (h, S) {
            !(E.isUndefined(h) || h === null) &&
              t.append(
                i === !0 ? ic([w], S, l) : i === null ? w : w + "[]",
                a(h)
              );
          }),
          !1
        );
    }
    return ws(y) ? !0 : (t.append(ic(g, w, l), a(y)), !1);
  }
  const f = [],
    m = Object.assign(x0, {
      defaultVisitor: c,
      convertValue: a,
      isVisitable: ws,
    });
  function v(y, w) {
    if (!E.isUndefined(y)) {
      if (f.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      f.push(y),
        E.forEach(y, function (p, d) {
          (!(E.isUndefined(p) || p === null) &&
            o.call(t, p, E.isString(d) ? d.trim() : d, w, m)) === !0 &&
            v(p, w ? w.concat(d) : [d]);
        }),
        f.pop();
    }
  }
  if (!E.isObject(e)) throw new TypeError("data must be an object");
  return v(e), t;
}
function sc(e) {
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
function Tu(e, t) {
  (this._pairs = []), e && jl(e, this, t);
}
const vp = Tu.prototype;
vp.append = function (t, n) {
  this._pairs.push([t, n]);
};
vp.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, sc);
      }
    : sc;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function k0(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function wp(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || k0,
    o = n && n.serialize;
  let l;
  if (
    (o
      ? (l = o(t, n))
      : (l = E.isURLSearchParams(t) ? t.toString() : new Tu(t, n).toString(r)),
    l)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + l);
  }
  return e;
}
class uc {
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
    E.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Sp = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  C0 = typeof URLSearchParams < "u" ? URLSearchParams : Tu,
  _0 = typeof FormData < "u" ? FormData : null,
  R0 = typeof Blob < "u" ? Blob : null,
  P0 = {
    isBrowser: !0,
    classes: { URLSearchParams: C0, FormData: _0, Blob: R0 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Ou = typeof window < "u" && typeof document < "u",
  Ss = (typeof navigator == "object" && navigator) || void 0,
  N0 =
    Ou &&
    (!Ss || ["ReactNative", "NativeScript", "NS"].indexOf(Ss.product) < 0),
  T0 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  O0 = (Ou && window.location.href) || "http://localhost",
  L0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Ou,
        hasStandardBrowserEnv: N0,
        hasStandardBrowserWebWorkerEnv: T0,
        navigator: Ss,
        origin: O0,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  xe = { ...L0, ...P0 };
function j0(e, t) {
  return jl(
    e,
    new xe.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, l) {
          return xe.isNode && E.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : l.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function z0(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function A0(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let l;
  for (r = 0; r < o; r++) (l = n[r]), (t[l] = e[l]);
  return t;
}
function Ep(e) {
  function t(n, r, o, l) {
    let i = n[l++];
    if (i === "__proto__") return !0;
    const s = Number.isFinite(+i),
      u = l >= n.length;
    return (
      (i = !i && E.isArray(o) ? o.length : i),
      u
        ? (E.hasOwnProp(o, i) ? (o[i] = [o[i], r]) : (o[i] = r), !s)
        : ((!o[i] || !E.isObject(o[i])) && (o[i] = []),
          t(n, r, o[i], l) && E.isArray(o[i]) && (o[i] = A0(o[i])),
          !s)
    );
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const n = {};
    return (
      E.forEachEntry(e, (r, o) => {
        t(z0(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function I0(e, t, n) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const Hr = {
  transitional: Sp,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        l = E.isObject(t);
      if ((l && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t)))
        return o ? JSON.stringify(Ep(t)) : t;
      if (
        E.isArrayBuffer(t) ||
        E.isBuffer(t) ||
        E.isStream(t) ||
        E.isFile(t) ||
        E.isBlob(t) ||
        E.isReadableStream(t)
      )
        return t;
      if (E.isArrayBufferView(t)) return t.buffer;
      if (E.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let s;
      if (l) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return j0(t, this.formSerializer).toString();
        if ((s = E.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return jl(
            s ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return l || o ? (n.setContentType("application/json", !1), I0(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Hr.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (E.isResponse(t) || E.isReadableStream(t)) return t;
      if (t && E.isString(t) && ((r && !this.responseType) || o)) {
        const i = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (i)
            throw s.name === "SyntaxError"
              ? j.from(s, j.ERR_BAD_RESPONSE, this, null, this.response)
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
  env: { FormData: xe.classes.FormData, Blob: xe.classes.Blob },
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
E.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Hr.headers[e] = {};
});
const D0 = E.toObjectSet([
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
  F0 = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (o = i.indexOf(":")),
              (n = i.substring(0, o).trim().toLowerCase()),
              (r = i.substring(o + 1).trim()),
              !(!n || (t[n] && D0[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  ac = Symbol("internals");
function Gn(e) {
  return e && String(e).trim().toLowerCase();
}
function Ro(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(Ro) : String(e);
}
function M0(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const U0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function mi(e, t, n, r, o) {
  if (E.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!E.isString(t))) {
    if (E.isString(r)) return t.indexOf(r) !== -1;
    if (E.isRegExp(r)) return r.test(t);
  }
}
function B0(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function $0(e, t) {
  const n = E.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, l, i) {
        return this[r].call(this, t, o, l, i);
      },
      configurable: !0,
    });
  });
}
class ke {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function l(s, u, a) {
      const c = Gn(u);
      if (!c) throw new Error("header name must be a non-empty string");
      const f = E.findKey(o, c);
      (!f || o[f] === void 0 || a === !0 || (a === void 0 && o[f] !== !1)) &&
        (o[f || u] = Ro(s));
    }
    const i = (s, u) => E.forEach(s, (a, c) => l(a, c, u));
    if (E.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (E.isString(t) && (t = t.trim()) && !U0(t)) i(F0(t), n);
    else if (E.isHeaders(t)) for (const [s, u] of t.entries()) l(u, s, r);
    else t != null && l(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Gn(t)), t)) {
      const r = E.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return M0(o);
        if (E.isFunction(n)) return n.call(this, o, r);
        if (E.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Gn(t)), t)) {
      const r = E.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || mi(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function l(i) {
      if (((i = Gn(i)), i)) {
        const s = E.findKey(r, i);
        s && (!n || mi(r, r[s], s, n)) && (delete r[s], (o = !0));
      }
    }
    return E.isArray(t) ? t.forEach(l) : l(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const l = n[r];
      (!t || mi(this, this[l], l, t, !0)) && (delete this[l], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      E.forEach(this, (o, l) => {
        const i = E.findKey(r, l);
        if (i) {
          (n[i] = Ro(o)), delete n[l];
          return;
        }
        const s = t ? B0(l) : String(l).trim();
        s !== l && delete n[l], (n[s] = Ro(o)), (r[s] = !0);
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
      E.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && E.isArray(r) ? r.join(", ") : r);
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
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[ac] = this[ac] = { accessors: {} }).accessors,
      o = this.prototype;
    function l(i) {
      const s = Gn(i);
      r[s] || ($0(o, i), (r[s] = !0));
    }
    return E.isArray(t) ? t.forEach(l) : l(t), this;
  }
}
ke.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
E.reduceDescriptors(ke.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
E.freezeMethods(ke);
function yi(e, t) {
  const n = this || Hr,
    r = t || n,
    o = ke.from(r.headers);
  let l = r.data;
  return (
    E.forEach(e, function (s) {
      l = s.call(n, l, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    l
  );
}
function xp(e) {
  return !!(e && e.__CANCEL__);
}
function Un(e, t, n) {
  j.call(this, e ?? "canceled", j.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
E.inherits(Un, j, { __CANCEL__: !0 });
function kp(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new j(
          "Request failed with status code " + n.status,
          [j.ERR_BAD_REQUEST, j.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function W0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function H0(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    l = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const a = Date.now(),
        c = r[l];
      i || (i = a), (n[o] = u), (r[o] = a);
      let f = l,
        m = 0;
      for (; f !== o; ) (m += n[f++]), (f = f % e);
      if (((o = (o + 1) % e), o === l && (l = (l + 1) % e), a - i < t)) return;
      const v = c && a - c;
      return v ? Math.round((m * 1e3) / v) : void 0;
    }
  );
}
function V0(e, t) {
  let n = 0,
    r = 1e3 / t,
    o,
    l;
  const i = (a, c = Date.now()) => {
    (n = c), (o = null), l && (clearTimeout(l), (l = null)), e.apply(null, a);
  };
  return [
    (...a) => {
      const c = Date.now(),
        f = c - n;
      f >= r
        ? i(a, c)
        : ((o = a),
          l ||
            (l = setTimeout(() => {
              (l = null), i(o);
            }, r - f)));
    },
    () => o && i(o),
  ];
}
const ll = (e, t, n = 3) => {
    let r = 0;
    const o = H0(50, 250);
    return V0((l) => {
      const i = l.loaded,
        s = l.lengthComputable ? l.total : void 0,
        u = i - r,
        a = o(u),
        c = i <= s;
      r = i;
      const f = {
        loaded: i,
        total: s,
        progress: s ? i / s : void 0,
        bytes: u,
        rate: a || void 0,
        estimated: a && s && c ? (s - i) / a : void 0,
        event: l,
        lengthComputable: s != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, n);
  },
  cc = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  fc =
    (e) =>
    (...t) =>
      E.asap(() => e(...t)),
  Q0 = xe.hasStandardBrowserEnv
    ? (function () {
        const t =
            xe.navigator && /(msie|trident)/i.test(xe.navigator.userAgent),
          n = document.createElement("a");
        let r;
        function o(l) {
          let i = l;
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
          (r = o(window.location.href)),
          function (i) {
            const s = E.isString(i) ? o(i) : i;
            return s.protocol === r.protocol && s.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  q0 = xe.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, l) {
          const i = [e + "=" + encodeURIComponent(t)];
          E.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
            E.isString(r) && i.push("path=" + r),
            E.isString(o) && i.push("domain=" + o),
            l === !0 && i.push("secure"),
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
function K0(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function J0(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Cp(e, t) {
  return e && !K0(t) ? J0(e, t) : t;
}
const dc = (e) => (e instanceof ke ? { ...e } : e);
function rn(e, t) {
  t = t || {};
  const n = {};
  function r(a, c, f) {
    return E.isPlainObject(a) && E.isPlainObject(c)
      ? E.merge.call({ caseless: f }, a, c)
      : E.isPlainObject(c)
      ? E.merge({}, c)
      : E.isArray(c)
      ? c.slice()
      : c;
  }
  function o(a, c, f) {
    if (E.isUndefined(c)) {
      if (!E.isUndefined(a)) return r(void 0, a, f);
    } else return r(a, c, f);
  }
  function l(a, c) {
    if (!E.isUndefined(c)) return r(void 0, c);
  }
  function i(a, c) {
    if (E.isUndefined(c)) {
      if (!E.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, c);
  }
  function s(a, c, f) {
    if (f in t) return r(a, c);
    if (f in e) return r(void 0, a);
  }
  const u = {
    url: l,
    method: l,
    data: l,
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
    headers: (a, c) => o(dc(a), dc(c), !0),
  };
  return (
    E.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const f = u[c] || o,
        m = f(e[c], t[c], c);
      (E.isUndefined(m) && f !== s) || (n[c] = m);
    }),
    n
  );
}
const _p = (e) => {
    const t = rn({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: l,
      headers: i,
      auth: s,
    } = t;
    (t.headers = i = ke.from(i)),
      (t.url = wp(Cp(t.baseURL, t.url), e.params, e.paramsSerializer)),
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
    if (E.isFormData(n)) {
      if (xe.hasStandardBrowserEnv || xe.hasStandardBrowserWebWorkerEnv)
        i.setContentType(void 0);
      else if ((u = i.getContentType()) !== !1) {
        const [a, ...c] = u
          ? u
              .split(";")
              .map((f) => f.trim())
              .filter(Boolean)
          : [];
        i.setContentType([a || "multipart/form-data", ...c].join("; "));
      }
    }
    if (
      xe.hasStandardBrowserEnv &&
      (r && E.isFunction(r) && (r = r(t)), r || (r !== !1 && Q0(t.url)))
    ) {
      const a = o && l && q0.read(l);
      a && i.set(o, a);
    }
    return t;
  },
  X0 = typeof XMLHttpRequest < "u",
  G0 =
    X0 &&
    function (e) {
      return new Promise(function (n, r) {
        const o = _p(e);
        let l = o.data;
        const i = ke.from(o.headers).normalize();
        let { responseType: s, onUploadProgress: u, onDownloadProgress: a } = o,
          c,
          f,
          m,
          v,
          y;
        function w() {
          v && v(),
            y && y(),
            o.cancelToken && o.cancelToken.unsubscribe(c),
            o.signal && o.signal.removeEventListener("abort", c);
        }
        let g = new XMLHttpRequest();
        g.open(o.method.toUpperCase(), o.url, !0), (g.timeout = o.timeout);
        function p() {
          if (!g) return;
          const h = ke.from(
              "getAllResponseHeaders" in g && g.getAllResponseHeaders()
            ),
            x = {
              data:
                !s || s === "text" || s === "json"
                  ? g.responseText
                  : g.response,
              status: g.status,
              statusText: g.statusText,
              headers: h,
              config: e,
              request: g,
            };
          kp(
            function (R) {
              n(R), w();
            },
            function (R) {
              r(R), w();
            },
            x
          ),
            (g = null);
        }
        "onloadend" in g
          ? (g.onloadend = p)
          : (g.onreadystatechange = function () {
              !g ||
                g.readyState !== 4 ||
                (g.status === 0 &&
                  !(g.responseURL && g.responseURL.indexOf("file:") === 0)) ||
                setTimeout(p);
            }),
          (g.onabort = function () {
            g &&
              (r(new j("Request aborted", j.ECONNABORTED, e, g)), (g = null));
          }),
          (g.onerror = function () {
            r(new j("Network Error", j.ERR_NETWORK, e, g)), (g = null);
          }),
          (g.ontimeout = function () {
            let S = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const x = o.transitional || Sp;
            o.timeoutErrorMessage && (S = o.timeoutErrorMessage),
              r(
                new j(
                  S,
                  x.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED,
                  e,
                  g
                )
              ),
              (g = null);
          }),
          l === void 0 && i.setContentType(null),
          "setRequestHeader" in g &&
            E.forEach(i.toJSON(), function (S, x) {
              g.setRequestHeader(x, S);
            }),
          E.isUndefined(o.withCredentials) ||
            (g.withCredentials = !!o.withCredentials),
          s && s !== "json" && (g.responseType = o.responseType),
          a && (([m, y] = ll(a, !0)), g.addEventListener("progress", m)),
          u &&
            g.upload &&
            (([f, v] = ll(u)),
            g.upload.addEventListener("progress", f),
            g.upload.addEventListener("loadend", v)),
          (o.cancelToken || o.signal) &&
            ((c = (h) => {
              g &&
                (r(!h || h.type ? new Un(null, e, g) : h),
                g.abort(),
                (g = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(c),
            o.signal &&
              (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
        const d = W0(o.url);
        if (d && xe.protocols.indexOf(d) === -1) {
          r(new j("Unsupported protocol " + d + ":", j.ERR_BAD_REQUEST, e));
          return;
        }
        g.send(l || null);
      });
    },
  Y0 = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        o;
      const l = function (a) {
        if (!o) {
          (o = !0), s();
          const c = a instanceof Error ? a : this.reason;
          r.abort(
            c instanceof j ? c : new Un(c instanceof Error ? c.message : c)
          );
        }
      };
      let i =
        t &&
        setTimeout(() => {
          (i = null), l(new j(`timeout ${t} of ms exceeded`, j.ETIMEDOUT));
        }, t);
      const s = () => {
        e &&
          (i && clearTimeout(i),
          (i = null),
          e.forEach((a) => {
            a.unsubscribe
              ? a.unsubscribe(l)
              : a.removeEventListener("abort", l);
          }),
          (e = null));
      };
      e.forEach((a) => a.addEventListener("abort", l));
      const { signal: u } = r;
      return (u.unsubscribe = () => E.asap(s)), u;
    }
  },
  Z0 = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  b0 = async function* (e, t) {
    for await (const n of ev(e)) yield* Z0(n, t);
  },
  ev = async function* (e) {
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
  pc = (e, t, n, r) => {
    const o = b0(e, t);
    let l = 0,
      i,
      s = (u) => {
        i || ((i = !0), r && r(u));
      };
    return new ReadableStream(
      {
        async pull(u) {
          try {
            const { done: a, value: c } = await o.next();
            if (a) {
              s(), u.close();
              return;
            }
            let f = c.byteLength;
            if (n) {
              let m = (l += f);
              n(m);
            }
            u.enqueue(new Uint8Array(c));
          } catch (a) {
            throw (s(a), a);
          }
        },
        cancel(u) {
          return s(u), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  zl =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Rp = zl && typeof ReadableStream == "function",
  tv =
    zl &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Pp = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  nv =
    Rp &&
    Pp(() => {
      let e = !1;
      const t = new Request(xe.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  hc = 64 * 1024,
  Es = Rp && Pp(() => E.isReadableStream(new Response("").body)),
  il = { stream: Es && ((e) => e.body) };
zl &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !il[t] &&
        (il[t] = E.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new j(
                `Response type '${t}' is not supported`,
                j.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const rv = async (e) => {
    if (e == null) return 0;
    if (E.isBlob(e)) return e.size;
    if (E.isSpecCompliantForm(e))
      return (
        await new Request(xe.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (E.isArrayBufferView(e) || E.isArrayBuffer(e)) return e.byteLength;
    if ((E.isURLSearchParams(e) && (e = e + ""), E.isString(e)))
      return (await tv(e)).byteLength;
  },
  ov = async (e, t) => {
    const n = E.toFiniteNumber(e.getContentLength());
    return n ?? rv(t);
  },
  lv =
    zl &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: o,
        cancelToken: l,
        timeout: i,
        onDownloadProgress: s,
        onUploadProgress: u,
        responseType: a,
        headers: c,
        withCredentials: f = "same-origin",
        fetchOptions: m,
      } = _p(e);
      a = a ? (a + "").toLowerCase() : "text";
      let v = Y0([o, l && l.toAbortSignal()], i),
        y;
      const w =
        v &&
        v.unsubscribe &&
        (() => {
          v.unsubscribe();
        });
      let g;
      try {
        if (
          u &&
          nv &&
          n !== "get" &&
          n !== "head" &&
          (g = await ov(c, r)) !== 0
        ) {
          let x = new Request(t, { method: "POST", body: r, duplex: "half" }),
            C;
          if (
            (E.isFormData(r) &&
              (C = x.headers.get("content-type")) &&
              c.setContentType(C),
            x.body)
          ) {
            const [R, _] = cc(g, ll(fc(u)));
            r = pc(x.body, hc, R, _);
          }
        }
        E.isString(f) || (f = f ? "include" : "omit");
        const p = "credentials" in Request.prototype;
        y = new Request(t, {
          ...m,
          signal: v,
          method: n.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: p ? f : void 0,
        });
        let d = await fetch(y);
        const h = Es && (a === "stream" || a === "response");
        if (Es && (s || (h && w))) {
          const x = {};
          ["status", "statusText", "headers"].forEach((D) => {
            x[D] = d[D];
          });
          const C = E.toFiniteNumber(d.headers.get("content-length")),
            [R, _] = (s && cc(C, ll(fc(s), !0))) || [];
          d = new Response(
            pc(d.body, hc, R, () => {
              _ && _(), w && w();
            }),
            x
          );
        }
        a = a || "text";
        let S = await il[E.findKey(il, a) || "text"](d, e);
        return (
          !h && w && w(),
          await new Promise((x, C) => {
            kp(x, C, {
              data: S,
              headers: ke.from(d.headers),
              status: d.status,
              statusText: d.statusText,
              config: e,
              request: y,
            });
          })
        );
      } catch (p) {
        throw (
          (w && w(),
          p && p.name === "TypeError" && /fetch/i.test(p.message)
            ? Object.assign(new j("Network Error", j.ERR_NETWORK, e, y), {
                cause: p.cause || p,
              })
            : j.from(p, p && p.code, e, y))
        );
      }
    }),
  xs = { http: S0, xhr: G0, fetch: lv };
E.forEach(xs, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const mc = (e) => `- ${e}`,
  iv = (e) => E.isFunction(e) || e === null || e === !1,
  Np = {
    getAdapter: (e) => {
      e = E.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let l = 0; l < t; l++) {
        n = e[l];
        let i;
        if (
          ((r = n),
          !iv(n) && ((r = xs[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new j(`Unknown adapter '${i}'`);
        if (r) break;
        o[i || "#" + l] = r;
      }
      if (!r) {
        const l = Object.entries(o).map(
          ([s, u]) =>
            `adapter ${s} ` +
            (u === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = t
          ? l.length > 1
            ? `since :
` +
              l.map(mc).join(`
`)
            : " " + mc(l[0])
          : "as no adapter specified";
        throw new j(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: xs,
  };
function gi(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Un(null, e);
}
function yc(e) {
  return (
    gi(e),
    (e.headers = ke.from(e.headers)),
    (e.data = yi.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Np.getAdapter(e.adapter || Hr.adapter)(e).then(
      function (r) {
        return (
          gi(e),
          (r.data = yi.call(e, e.transformResponse, r)),
          (r.headers = ke.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          xp(r) ||
            (gi(e),
            r &&
              r.response &&
              ((r.response.data = yi.call(e, e.transformResponse, r.response)),
              (r.response.headers = ke.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Tp = "1.7.7",
  Lu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Lu[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const gc = {};
Lu.transitional = function (t, n, r) {
  function o(l, i) {
    return (
      "[Axios v" +
      Tp +
      "] Transitional option '" +
      l +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (l, i, s) => {
    if (t === !1)
      throw new j(
        o(i, " has been removed" + (n ? " in " + n : "")),
        j.ERR_DEPRECATED
      );
    return (
      n &&
        !gc[i] &&
        ((gc[i] = !0),
        console.warn(
          o(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(l, i, s) : !0
    );
  };
};
function sv(e, t, n) {
  if (typeof e != "object")
    throw new j("options must be an object", j.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const l = r[o],
      i = t[l];
    if (i) {
      const s = e[l],
        u = s === void 0 || i(s, l, e);
      if (u !== !0)
        throw new j("option " + l + " must be " + u, j.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new j("Unknown option " + l, j.ERR_BAD_OPTION);
  }
}
const ks = { assertOptions: sv, validators: Lu },
  ht = ks.validators;
class Jt {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new uc(), response: new uc() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const l = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? l &&
              !String(r.stack).endsWith(l.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + l)
            : (r.stack = l);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = rn(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: l } = n;
    r !== void 0 &&
      ks.assertOptions(
        r,
        {
          silentJSONParsing: ht.transitional(ht.boolean),
          forcedJSONParsing: ht.transitional(ht.boolean),
          clarifyTimeoutError: ht.transitional(ht.boolean),
        },
        !1
      ),
      o != null &&
        (E.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : ks.assertOptions(
              o,
              { encode: ht.function, serialize: ht.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = l && E.merge(l.common, l[n.method]);
    l &&
      E.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (y) => {
          delete l[y];
        }
      ),
      (n.headers = ke.concat(i, l));
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function (w) {
      (typeof w.runWhen == "function" && w.runWhen(n) === !1) ||
        ((u = u && w.synchronous), s.unshift(w.fulfilled, w.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (w) {
      a.push(w.fulfilled, w.rejected);
    });
    let c,
      f = 0,
      m;
    if (!u) {
      const y = [yc.bind(this), void 0];
      for (
        y.unshift.apply(y, s),
          y.push.apply(y, a),
          m = y.length,
          c = Promise.resolve(n);
        f < m;

      )
        c = c.then(y[f++], y[f++]);
      return c;
    }
    m = s.length;
    let v = n;
    for (f = 0; f < m; ) {
      const y = s[f++],
        w = s[f++];
      try {
        v = y(v);
      } catch (g) {
        w.call(this, g);
        break;
      }
    }
    try {
      c = yc.call(this, v);
    } catch (y) {
      return Promise.reject(y);
    }
    for (f = 0, m = a.length; f < m; ) c = c.then(a[f++], a[f++]);
    return c;
  }
  getUri(t) {
    t = rn(this.defaults, t);
    const n = Cp(t.baseURL, t.url);
    return wp(n, t.params, t.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function (t) {
  Jt.prototype[t] = function (n, r) {
    return this.request(
      rn(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
E.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (l, i, s) {
      return this.request(
        rn(s || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: l,
          data: i,
        })
      );
    };
  }
  (Jt.prototype[t] = n()), (Jt.prototype[t + "Form"] = n(!0));
});
class ju {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (l) {
      n = l;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let l = r._listeners.length;
      for (; l-- > 0; ) r._listeners[l](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let l;
        const i = new Promise((s) => {
          r.subscribe(s), (l = s);
        }).then(o);
        return (
          (i.cancel = function () {
            r.unsubscribe(l);
          }),
          i
        );
      }),
      t(function (l, i, s) {
        r.reason || ((r.reason = new Un(l, i, s)), n(r.reason));
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
      token: new ju(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
function uv(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function av(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
const Cs = {
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
Object.entries(Cs).forEach(([e, t]) => {
  Cs[t] = e;
});
function Op(e) {
  const t = new Jt(e),
    n = sp(Jt.prototype.request, t);
  return (
    E.extend(n, Jt.prototype, t, { allOwnKeys: !0 }),
    E.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Op(rn(e, o));
    }),
    n
  );
}
const J = Op(Hr);
J.Axios = Jt;
J.CanceledError = Un;
J.CancelToken = ju;
J.isCancel = xp;
J.VERSION = Tp;
J.toFormData = jl;
J.AxiosError = j;
J.Cancel = J.CanceledError;
J.all = function (t) {
  return Promise.all(t);
};
J.spread = uv;
J.isAxiosError = av;
J.mergeConfig = rn;
J.AxiosHeaders = ke;
J.formToJSON = (e) => Ep(E.isHTMLForm(e) ? new FormData(e) : e);
J.getAdapter = Np.getAdapter;
J.HttpStatusCode = Cs;
J.default = J;
const Po = Ru("auth/login", async (e, { rejectWithValue: t }) => {
    try {
      return (await J.post("https://reqres.in/api/login", e)).data;
    } catch (n) {
      return console.log(n), t("Invalid login credentials");
    }
  }),
  Lp = Pu({
    name: "auth",
    initialState: { token: null, isLoading: !1, error: null },
    reducers: {
      logout: (e) => {
        (e.token = null),
          localStorage.removeItem("token"),
          localStorage.setItem("isLoggedIn", "false");
      },
    },
    extraReducers: (e) => {
      e.addCase(Po.pending, (t) => {
        (t.isLoading = !0), (t.error = null);
      })
        .addCase(Po.fulfilled, (t, n) => {
          (t.token = n.payload.token),
            (t.isLoading = !1),
            localStorage.setItem("token", n.payload.token),
            localStorage.setItem("isLoggedIn", "true");
        })
        .addCase(Po.rejected, (t, n) => {
          (t.isLoading = !1), (t.error = n.payload);
        });
    },
  }),
  { logout: cv } = Lp.actions,
  fv = Lp.reducer,
  No = Ru("user/fetchUser", async () => {
    try {
      return (await J.get("https://reqres.in/api/users/4")).data.data;
    } catch (e) {
      console.error("Error fetching user:", e);
    }
  }),
  dv = Pu({
    name: "user",
    initialState: { data: null, status: "idle", error: null },
    reducers: {},
    extraReducers: (e) => {
      e.addCase(No.pending, (t) => {
        t.status = "loading";
      })
        .addCase(No.fulfilled, (t, n) => {
          (t.status = "succeeded"), (t.data = n.payload);
        })
        .addCase(No.rejected, (t, n) => {
          (t.status = "failed"), (t.error = n.error.message);
        });
    },
  }),
  pv = dv.reducer,
  pr = Ru("quiz/fetchQuestions", async () => {
    try {
      return (await J.get("https://opentdb.com/api.php?amount=10&category=31"))
        .data.results;
    } catch (e) {
      console.error("Error fetching quiz:", e);
    }
  }),
  hv = Pu({
    name: "quiz",
    initialState: { questions: [], status: "idle", error: null },
    reducers: {},
    extraReducers: (e) => {
      e.addCase(pr.pending, (t) => {
        t.status = "loading";
      })
        .addCase(pr.fulfilled, (t, n) => {
          (t.status = "succeeded"), (t.questions = n.payload);
        })
        .addCase(pr.rejected, (t, n) => {
          (t.status = "failed"), (t.error = n.error.message);
        });
    },
  }),
  mv = hv.reducer,
  yv = mg({ reducer: { auth: fv, user: pv, quiz: mv } });
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ar() {
  return (
    (Ar = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ar.apply(this, arguments)
  );
}
var Et;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Et || (Et = {}));
const vc = "popstate";
function gv(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: l, search: i, hash: s } = r.location;
    return _s(
      "",
      { pathname: l, search: i, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : zp(o);
  }
  return wv(t, n, null, e);
}
function Z(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function jp(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function vv() {
  return Math.random().toString(36).substr(2, 8);
}
function wc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function _s(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ar(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Bn(t) : t,
      { state: n, key: (t && t.key) || r || vv() }
    )
  );
}
function zp(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Bn(e) {
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
function wv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: l = !1 } = r,
    i = o.history,
    s = Et.Pop,
    u = null,
    a = c();
  a == null && ((a = 0), i.replaceState(Ar({}, i.state, { idx: a }), ""));
  function c() {
    return (i.state || { idx: null }).idx;
  }
  function f() {
    s = Et.Pop;
    let g = c(),
      p = g == null ? null : g - a;
    (a = g), u && u({ action: s, location: w.location, delta: p });
  }
  function m(g, p) {
    s = Et.Push;
    let d = _s(w.location, g, p);
    a = c() + 1;
    let h = wc(d, a),
      S = w.createHref(d);
    try {
      i.pushState(h, "", S);
    } catch (x) {
      if (x instanceof DOMException && x.name === "DataCloneError") throw x;
      o.location.assign(S);
    }
    l && u && u({ action: s, location: w.location, delta: 1 });
  }
  function v(g, p) {
    s = Et.Replace;
    let d = _s(w.location, g, p);
    a = c();
    let h = wc(d, a),
      S = w.createHref(d);
    i.replaceState(h, "", S),
      l && u && u({ action: s, location: w.location, delta: 0 });
  }
  function y(g) {
    let p = o.location.origin !== "null" ? o.location.origin : o.location.href,
      d = typeof g == "string" ? g : zp(g);
    return (
      (d = d.replace(/ $/, "%20")),
      Z(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, p)
    );
  }
  let w = {
    get action() {
      return s;
    },
    get location() {
      return e(o, i);
    },
    listen(g) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(vc, f),
        (u = g),
        () => {
          o.removeEventListener(vc, f), (u = null);
        }
      );
    },
    createHref(g) {
      return t(o, g);
    },
    createURL: y,
    encodeLocation(g) {
      let p = y(g);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: m,
    replace: v,
    go(g) {
      return i.go(g);
    },
  };
  return w;
}
var Sc;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Sc || (Sc = {}));
function Sv(e, t, n) {
  return n === void 0 && (n = "/"), Ev(e, t, n, !1);
}
function Ev(e, t, n, r) {
  let o = typeof t == "string" ? Bn(t) : t,
    l = Dp(o.pathname || "/", n);
  if (l == null) return null;
  let i = Ap(e);
  xv(i);
  let s = null;
  for (let u = 0; s == null && u < i.length; ++u) {
    let a = zv(l);
    s = Lv(i[u], a, r);
  }
  return s;
}
function Ap(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (l, i, s) => {
    let u = {
      relativePath: s === void 0 ? l.path || "" : s,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: i,
      route: l,
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
    let a = Xt([r, u.relativePath]),
      c = n.concat(u);
    l.children &&
      l.children.length > 0 &&
      (Z(
        l.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      Ap(l.children, t, c, a)),
      !(l.path == null && !l.index) &&
        t.push({ path: a, score: Tv(a, l.index), routesMeta: c });
  };
  return (
    e.forEach((l, i) => {
      var s;
      if (l.path === "" || !((s = l.path) != null && s.includes("?"))) o(l, i);
      else for (let u of Ip(l.path)) o(l, i, u);
    }),
    t
  );
}
function Ip(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    l = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [l, ""] : [l];
  let i = Ip(r.join("/")),
    s = [];
  return (
    s.push(...i.map((u) => (u === "" ? l : [l, u].join("/")))),
    o && s.push(...i),
    s.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function xv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Ov(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const kv = /^:[\w-]+$/,
  Cv = 3,
  _v = 2,
  Rv = 1,
  Pv = 10,
  Nv = -2,
  Ec = (e) => e === "*";
function Tv(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ec) && (r += Nv),
    t && (r += _v),
    n
      .filter((o) => !Ec(o))
      .reduce((o, l) => o + (kv.test(l) ? Cv : l === "" ? Rv : Pv), r)
  );
}
function Ov(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Lv(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    l = "/",
    i = [];
  for (let s = 0; s < r.length; ++s) {
    let u = r[s],
      a = s === r.length - 1,
      c = l === "/" ? t : t.slice(l.length) || "/",
      f = xc(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
        c
      ),
      m = u.route;
    if (
      (!f &&
        a &&
        n &&
        !r[r.length - 1].route.index &&
        (f = xc(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          c
        )),
      !f)
    )
      return null;
    Object.assign(o, f.params),
      i.push({
        params: o,
        pathname: Xt([l, f.pathname]),
        pathnameBase: Fv(Xt([l, f.pathnameBase])),
        route: m,
      }),
      f.pathnameBase !== "/" && (l = Xt([l, f.pathnameBase]));
  }
  return i;
}
function xc(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = jv(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let l = o[0],
    i = l.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: r.reduce((a, c, f) => {
      let { paramName: m, isOptional: v } = c;
      if (m === "*") {
        let w = s[f] || "";
        i = l.slice(0, l.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const y = s[f];
      return (
        v && !y ? (a[m] = void 0) : (a[m] = (y || "").replace(/%2F/g, "/")), a
      );
    }, {}),
    pathname: l,
    pathnameBase: i,
    pattern: e,
  };
}
function jv(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    jp(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
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
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function zv(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      jp(
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
function Dp(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Av(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Bn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Iv(n, t)) : t,
    search: Mv(r),
    hash: Uv(o),
  };
}
function Iv(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function vi(e, t, n, r) {
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
function Dv(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Fp(e, t) {
  let n = Dv(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Mp(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Bn(e))
    : ((o = Ar({}, e)),
      Z(
        !o.pathname || !o.pathname.includes("?"),
        vi("?", "pathname", "search", o)
      ),
      Z(
        !o.pathname || !o.pathname.includes("#"),
        vi("#", "pathname", "hash", o)
      ),
      Z(!o.search || !o.search.includes("#"), vi("#", "search", "hash", o)));
  let l = e === "" || o.pathname === "",
    i = l ? "/" : o.pathname,
    s;
  if (i == null) s = n;
  else {
    let f = t.length - 1;
    if (!r && i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; ) m.shift(), (f -= 1);
      o.pathname = m.join("/");
    }
    s = f >= 0 ? t[f] : "/";
  }
  let u = Av(o, s),
    a = i && i !== "/" && i.endsWith("/"),
    c = (l || i === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (a || c) && (u.pathname += "/"), u;
}
const Xt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Fv = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Mv = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Uv = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Bv(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Up = ["post", "put", "patch", "delete"];
new Set(Up);
const $v = ["get", ...Up];
new Set($v);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ir() {
  return (
    (Ir = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ir.apply(this, arguments)
  );
}
const zu = P.createContext(null),
  Wv = P.createContext(null),
  Vr = P.createContext(null),
  Al = P.createContext(null),
  sn = P.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Bp = P.createContext(null);
function Qr() {
  return P.useContext(Al) != null;
}
function Au() {
  return Qr() || Z(!1), P.useContext(Al).location;
}
function $p(e) {
  P.useContext(Vr).static || P.useLayoutEffect(e);
}
function Iu() {
  let { isDataRoute: e } = P.useContext(sn);
  return e ? t1() : Hv();
}
function Hv() {
  Qr() || Z(!1);
  let e = P.useContext(zu),
    { basename: t, future: n, navigator: r } = P.useContext(Vr),
    { matches: o } = P.useContext(sn),
    { pathname: l } = Au(),
    i = JSON.stringify(Fp(o, n.v7_relativeSplatPath)),
    s = P.useRef(!1);
  return (
    $p(() => {
      s.current = !0;
    }),
    P.useCallback(
      function (a, c) {
        if ((c === void 0 && (c = {}), !s.current)) return;
        if (typeof a == "number") {
          r.go(a);
          return;
        }
        let f = Mp(a, JSON.parse(i), l, c.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Xt([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, i, l, e]
    )
  );
}
function Vv(e, t) {
  return Qv(e, t);
}
function Qv(e, t, n, r) {
  Qr() || Z(!1);
  let { navigator: o } = P.useContext(Vr),
    { matches: l } = P.useContext(sn),
    i = l[l.length - 1],
    s = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : "/";
  i && i.route;
  let a = Au(),
    c;
  if (t) {
    var f;
    let g = typeof t == "string" ? Bn(t) : t;
    u === "/" || ((f = g.pathname) != null && f.startsWith(u)) || Z(!1),
      (c = g);
  } else c = a;
  let m = c.pathname || "/",
    v = m;
  if (u !== "/") {
    let g = u.replace(/^\//, "").split("/");
    v = "/" + m.replace(/^\//, "").split("/").slice(g.length).join("/");
  }
  let y = Sv(e, { pathname: v }),
    w = Gv(
      y &&
        y.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, s, g.params),
            pathname: Xt([
              u,
              o.encodeLocation
                ? o.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? u
                : Xt([
                    u,
                    o.encodeLocation
                      ? o.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          })
        ),
      l,
      n,
      r
    );
  return t && w
    ? P.createElement(
        Al.Provider,
        {
          value: {
            location: Ir(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Et.Pop,
          },
        },
        w
      )
    : w;
}
function qv() {
  let e = e1(),
    t = Bv(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return P.createElement(
    P.Fragment,
    null,
    P.createElement("h2", null, "Unexpected Application Error!"),
    P.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? P.createElement("pre", { style: o }, n) : null,
    null
  );
}
const Kv = P.createElement(qv, null);
class Jv extends P.Component {
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
      ? P.createElement(
          sn.Provider,
          { value: this.props.routeContext },
          P.createElement(Bp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Xv(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = P.useContext(zu);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(sn.Provider, { value: t }, r)
  );
}
function Gv(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var l;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (l = r) != null &&
      l.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let i = e,
    s = (o = n) == null ? void 0 : o.errors;
  if (s != null) {
    let c = i.findIndex(
      (f) => f.route.id && (s == null ? void 0 : s[f.route.id]) !== void 0
    );
    c >= 0 || Z(!1), (i = i.slice(0, Math.min(i.length, c + 1)));
  }
  let u = !1,
    a = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < i.length; c++) {
      let f = i[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (a = c),
        f.route.id)
      ) {
        let { loaderData: m, errors: v } = n,
          y =
            f.route.loader &&
            m[f.route.id] === void 0 &&
            (!v || v[f.route.id] === void 0);
        if (f.route.lazy || y) {
          (u = !0), a >= 0 ? (i = i.slice(0, a + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((c, f, m) => {
    let v,
      y = !1,
      w = null,
      g = null;
    n &&
      ((v = s && f.route.id ? s[f.route.id] : void 0),
      (w = f.route.errorElement || Kv),
      u &&
        (a < 0 && m === 0
          ? ((y = !0), (g = null))
          : a === m &&
            ((y = !0), (g = f.route.hydrateFallbackElement || null))));
    let p = t.concat(i.slice(0, m + 1)),
      d = () => {
        let h;
        return (
          v
            ? (h = w)
            : y
            ? (h = g)
            : f.route.Component
            ? (h = P.createElement(f.route.Component, null))
            : f.route.element
            ? (h = f.route.element)
            : (h = c),
          P.createElement(Xv, {
            match: f,
            routeContext: { outlet: c, matches: p, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || m === 0)
      ? P.createElement(Jv, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: v,
          children: d(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var Wp = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Wp || {}),
  sl = (function (e) {
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
  })(sl || {});
function Yv(e) {
  let t = P.useContext(zu);
  return t || Z(!1), t;
}
function Zv(e) {
  let t = P.useContext(Wv);
  return t || Z(!1), t;
}
function bv(e) {
  let t = P.useContext(sn);
  return t || Z(!1), t;
}
function Hp(e) {
  let t = bv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Z(!1), n.route.id;
}
function e1() {
  var e;
  let t = P.useContext(Bp),
    n = Zv(sl.UseRouteError),
    r = Hp(sl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function t1() {
  let { router: e } = Yv(Wp.UseNavigateStable),
    t = Hp(sl.UseNavigateStable),
    n = P.useRef(!1);
  return (
    $p(() => {
      n.current = !0;
    }),
    P.useCallback(
      function (o, l) {
        l === void 0 && (l = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, Ir({ fromRouteId: t }, l)));
      },
      [e, t]
    )
  );
}
function n1(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  Qr() || Z(!1);
  let { future: l, static: i } = P.useContext(Vr),
    { matches: s } = P.useContext(sn),
    { pathname: u } = Au(),
    a = Iu(),
    c = Mp(t, Fp(s, l.v7_relativeSplatPath), u, o === "path"),
    f = JSON.stringify(c);
  return (
    P.useEffect(
      () => a(JSON.parse(f), { replace: n, state: r, relative: o }),
      [a, f, o, n, r]
    ),
    null
  );
}
function To(e) {
  Z(!1);
}
function r1(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Et.Pop,
    navigator: l,
    static: i = !1,
    future: s,
  } = e;
  Qr() && Z(!1);
  let u = t.replace(/^\/*/, "/"),
    a = P.useMemo(
      () => ({
        basename: u,
        navigator: l,
        static: i,
        future: Ir({ v7_relativeSplatPath: !1 }, s),
      }),
      [u, s, l, i]
    );
  typeof r == "string" && (r = Bn(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: m = "",
      state: v = null,
      key: y = "default",
    } = r,
    w = P.useMemo(() => {
      let g = Dp(c, u);
      return g == null
        ? null
        : {
            location: { pathname: g, search: f, hash: m, state: v, key: y },
            navigationType: o,
          };
    }, [u, c, f, m, v, y, o]);
  return w == null
    ? null
    : P.createElement(
        Vr.Provider,
        { value: a },
        P.createElement(Al.Provider, { children: n, value: w })
      );
}
function o1(e) {
  let { children: t, location: n } = e;
  return Vv(Rs(t), n);
}
new Promise(() => {});
function Rs(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    P.Children.forEach(e, (r, o) => {
      if (!P.isValidElement(r)) return;
      let l = [...t, o];
      if (r.type === P.Fragment) {
        n.push.apply(n, Rs(r.props.children, l));
        return;
      }
      r.type !== To && Z(!1), !r.props.index || !r.props.children || Z(!1);
      let i = {
        id: r.props.id || l.join("-"),
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
      r.props.children && (i.children = Rs(r.props.children, l)), n.push(i);
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
 */ const l1 = "6";
try {
  window.__reactRouterVersion = l1;
} catch {}
const i1 = "startTransition",
  kc = wi[i1];
function s1(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    l = P.useRef();
  l.current == null && (l.current = gv({ window: o, v5Compat: !0 }));
  let i = l.current,
    [s, u] = P.useState({ action: i.action, location: i.location }),
    { v7_startTransition: a } = r || {},
    c = P.useCallback(
      (f) => {
        a && kc ? kc(() => u(f)) : u(f);
      },
      [u, a]
    );
  return (
    P.useLayoutEffect(() => i.listen(c), [i, c]),
    P.createElement(r1, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: i,
      future: r,
    })
  );
}
var Cc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Cc || (Cc = {}));
var _c;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(_c || (_c = {}));
const ul = ({ text: e, type: t, onClick: n, className: r }) =>
    N.jsx("button", { type: t, onClick: n, className: `${r}`, children: e }),
  Rc = ({
    id: e,
    type: t,
    value: n,
    onChange: r,
    placeholder: o,
    className: l,
  }) =>
    N.jsx("input", {
      id: e,
      type: t,
      value: n,
      onChange: r,
      placeholder: o,
      className:
        "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none",
      required: !0,
    }),
  Pc = ({ htmlFor: e, children: t, className: n }) =>
    N.jsx("label", {
      htmlFor: e,
      className: "block text-white mb-1 font-extrabold",
      children: t,
    }),
  u1 = () => {
    const e = xu(),
      t = Iu(),
      { isLoading: n, error: r } = fr((a) => a.auth),
      [o, l] = P.useState(""),
      [i, s] = P.useState(""),
      u = (a) => {
        a.preventDefault(),
          e(Po({ email: o, password: i })).then((c) => {
            c.meta.requestStatus === "fulfilled" && t("/quiz-app");
          });
      };
    return N.jsxs("div", {
      className:
        "min-h-screen flex flex-col items-center justify-center bg-blue-500",
      children: [
        N.jsx("div", {
          children: N.jsxs("h2", {
            className:
              "text-5xl mb-10 text-center font-monserrat font-extrabold text-white text-shadow animate-bounce ",
            children: ["ANIME ", N.jsx("br", {}), " QUIZ"],
          }),
        }),
        N.jsx("div", {
          className: "max-w-md w-full px-10 md:px-0",
          children: N.jsxs("form", {
            onSubmit: u,
            className: "space-y-4 font-nunito",
            children: [
              N.jsxs("div", {
                children: [
                  N.jsx(Pc, { htmlFor: "email", children: "Email" }),
                  N.jsx(Rc, {
                    id: "email",
                    name: "email",
                    type: "email",
                    value: o,
                    onChange: (a) => l(a.target.value),
                    placeholder: "Enter your email",
                  }),
                ],
              }),
              N.jsxs("div", {
                children: [
                  N.jsx(Pc, { htmlFor: "password", children: "Password" }),
                  N.jsx(Rc, {
                    id: "password",
                    name: "password",
                    type: "password",
                    value: i,
                    onChange: (a) => s(a.target.value),
                    placeholder: "Enter your password",
                  }),
                ],
              }),
              N.jsx(ul, {
                type: "submit",
                text: "LOGIN",
                className:
                  "w-full bg-white text-blue-900 font-extrabold py-2 mt-7 rounded-lg hover:bg-blue-900 hover:text-white transition duration-300",
                disabled: n,
              }),
              r &&
                N.jsx("p", {
                  className: "text-white text-center",
                  children: r,
                }),
            ],
          }),
        }),
      ],
    });
  },
  a1 = "/quiz-app/assets/correct-DYh05E-B.wav",
  c1 = "/quiz-app/assets/incorrect-vkj7EGiZ.wav",
  f1 = "/quiz-app/assets/background-vk_5S6Ww.mp3",
  d1 = (e) => {
    const t = [...e];
    for (let n = t.length - 1; n > 0; n--) {
      const r = Math.floor(Math.random() * (n + 1));
      [t[n], t[r]] = [t[r], t[n]];
    }
    return t;
  },
  p1 = () => {
    const e = xu(),
      t = fr((L) => L.quiz.questions),
      [n, r] = P.useState(0),
      [o, l] = P.useState([]),
      [i, s] = P.useState([]),
      [u, a] = P.useState(!1),
      [c, f] = P.useState(30),
      [m, v] = P.useState(0),
      [y, w] = P.useState(null),
      g = P.useRef(null),
      p = P.useRef(new Audio()),
      d = P.useRef(new Audio(f1));
    P.useEffect(() => {
      e(pr());
    }, [e]),
      P.useEffect(() => {
        const L = localStorage.getItem("currentQuestionIndex"),
          U = JSON.parse(localStorage.getItem("userAnswers")),
          ue = localStorage.getItem("timeLeft"),
          Ce = localStorage.getItem("showResults"),
          Dt = JSON.parse(localStorage.getItem("correctAnswersCount"));
        return (
          L && r(Number(L)),
          U && s(U),
          ue && f(Number(ue)),
          Ce === "true" && a(!0),
          Dt && v(Dt),
          (d.current.loop = !0),
          d.current.play(),
          h(),
          () => {
            clearInterval(g.current),
              d.current.pause(),
              (d.current.currentTime = 0);
          }
        );
      }, []),
      P.useEffect(() => {
        if (t.length > 0) {
          const L = t[n],
            U = d1(L.incorrect_answers.concat(L.correct_answer));
          l(U);
        }
      }, [n, t]);
    const h = () => {
        clearInterval(g.current),
          (g.current = setInterval(() => {
            f((L) => {
              if (L <= 1) return clearInterval(g.current), C(), 0;
              const U = L - 1;
              return localStorage.setItem("timeLeft", U), U;
            });
          }, 1e3));
      },
      S = (L) => {
        (p.current.src = L ? a1 : c1), p.current.play();
      },
      x = (L) => {
        w(L);
        const U = L === t[n].correct_answer;
        S(U);
        const ue = [...i, L];
        s(ue);
        let Ce = JSON.parse(localStorage.getItem("correctAnswersCount")) || 0;
        U &&
          ((Ce += 1), localStorage.setItem("correctAnswersCount", Ce), v(Ce)),
          localStorage.setItem("userAnswers", JSON.stringify(ue)),
          localStorage.setItem("currentQuestionIndex", n + 1),
          setTimeout(() => {
            n < t.length - 1 ? r(n + 1) : C(), w(null);
          }, 500);
      },
      C = () => {
        a(!0),
          localStorage.setItem("showResults", "true"),
          clearInterval(g.current),
          localStorage.removeItem("currentQuestionIndex"),
          localStorage.removeItem("userAnswers"),
          localStorage.removeItem("timeLeft");
      },
      R = async () => {
        localStorage.removeItem("currentQuestionIndex"),
          localStorage.removeItem("userAnswers"),
          localStorage.removeItem("timeLeft"),
          localStorage.removeItem("showResults"),
          localStorage.removeItem("correctAnswersCount"),
          await pr(),
          r(0),
          s([]),
          a(!1),
          f(30),
          v(0),
          h();
      },
      _ = () => {
        if (t.length === 0)
          return N.jsx("div", {
            className: "flex items-center justify-center min-h-screen",
            children: N.jsx("div", { className: "spinner" }),
          });
        const L = t[n],
          U = L.question
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&eacute;/g, "é")
            .replace(/&amp;/g, "&");
        return N.jsxs("div", {
          className: "flex flex-col",
          children: [
            N.jsxs("div", {
              className:
                "fixed top-0 left-0 right-0 flex p-4 md:p-10 justify-between w-full md:text-3xl text-lg font-extrabold text-black",
              children: [
                N.jsx("div", {
                  children: N.jsxs("p", { children: ["⏳ ", c, "s"] }),
                }),
                N.jsx("div", {
                  children: N.jsxs("p", {
                    children: ["Question ", n + 1, " of ", t.length],
                  }),
                }),
                N.jsx("div", {
                  children: N.jsxs("p", { children: ["Answered: ", i.length] }),
                }),
              ],
            }),
            N.jsxs("div", {
              className: "flex flex-col min-h-screen justify-center",
              children: [
                N.jsx("div", {
                  className:
                    "flex bg-white md:mx-10 md:mt-28 mx-4 shadow-md rounded-lg outline p-4 min-h-32 items-center justify-center",
                  children: N.jsx("h2", {
                    className: "text-xl font-bold",
                    children: U,
                  }),
                }),
                N.jsx("div", {
                  className: "md:m-10 pt-10 mx-4",
                  children: N.jsx("div", {
                    className: "space-y-2",
                    children: o.map((ue, Ce) => {
                      const Dt = ue === L.correct_answer,
                        $n =
                          y === ue
                            ? Dt
                              ? "bg-green-400"
                              : "bg-red-400"
                            : "bg-white";
                      return N.jsx(
                        ul,
                        {
                          text: ue
                            .replace(/&quot;/g, '"')
                            .replace(/&#039;/g, "'")
                            .replace(/&eacute;/g, "é")
                            .replace(/&amp;/g, "&"),
                          onClick: () => x(ue),
                          className: `w-full text-black outline font-bold py-2 rounded-lg shadow-xl transition duration-300 ${$n}`,
                        },
                        Ce
                      );
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      },
      D = () => {
        const U = t.length - m;
        return N.jsx("div", {
          className:
            "flex items-center  max-w-full justify-center min-h-screen mx-10",
          children: N.jsxs("div", {
            className:
              "flex flex-col outline w-full sm:max-w-96 bg-white shadow-md rounded-lg p-8 justify-center",
            children: [
              N.jsx("h2", {
                className: "text-2xl font-bold mb-4",
                children: "Results",
              }),
              N.jsxs("p", {
                className: "mb-4",
                children: ["You answered ", i.length, " questions."],
              }),
              N.jsxs("p", {
                className: "mb-4",
                children: ["Correct Answers: ", m],
              }),
              N.jsxs("p", {
                className: "mb-4",
                children: ["Wrong Answers: ", U],
              }),
              N.jsx(ul, {
                text: "Restart Quiz",
                onClick: R,
                className:
                  "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4",
              }),
            ],
          }),
        });
      };
    return N.jsx("div", {
      className: "bg-blue-500 font-nunito",
      children: u ? D() : _(),
    });
  },
  h1 = () => {
    const e = Iu(),
      t = xu(),
      n = fr((s) => s.user.data),
      r = fr((s) => s.user.status),
      o = fr((s) => s.user.error);
    P.useEffect(() => {
      t(No());
    }, [t]);
    const l = () => {
        t(cv()), e("/quiz-app/login");
      },
      i = () => {
        e("/quiz-app/quiz"), e("/quiz-app/quiz");
      };
    return N.jsxs("div", {
      className:
        "flex font-nunito min-h-screen bg-blue-500  flex-col items-center justify-center",
      children: [
        N.jsxs("div", {
          className: "flex fixed top-0 left-0 right-0  m-5 justify-between ",
          children: [
            N.jsxs("div", {
              onClick: l,
              className:
                "flex outline text-black bg-white items-center px-6 rounded-lg gap-x-3 font-bold hover:bg-indigo-500 hover:text-white",
              children: [
                N.jsx("i", { className: "bx bx-log-out text-3xl" }),
                N.jsx("h4", { children: "Logout" }),
              ],
            }),
            N.jsx("div", {
              className:
                "flex flex-row gap-x-3 outline font-bold items-center bg-white rounded-lg px-7 py-1",
              children:
                r === "loading"
                  ? N.jsx("p", { children: "Loading..." })
                  : r === "failed"
                  ? N.jsxs("p", { children: ["Error: ", o] })
                  : n
                  ? N.jsxs(N.Fragment, {
                      children: [
                        N.jsx("img", {
                          src: n.avatar,
                          alt: `${n.first_name}'s avatar`,
                          className: "w-10 rounded-full",
                        }),
                        N.jsxs("h4", {
                          children: [n.first_name, " ", n.last_name],
                        }),
                      ],
                    })
                  : N.jsx("p", { children: "No user data found." }),
            }),
          ],
        }),
        N.jsxs("div", {
          className: "px-5 justify-center",
          children: [
            N.jsx("h1", {
              className:
                "text-4xl text-center text-white mb-12 font-extrabold text-shadow",
              children: "Welcome to the Anime Quiz!",
            }),
            N.jsx("div", {
              className: "flex justify-center",
              children: N.jsx(ul, {
                onClick: i,
                text: "Start Quiz",
                className:
                  "bg-green-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 animate-bounce",
              }),
            }),
          ],
        }),
      ],
    });
  },
  Nc = ({ children: e }) =>
    localStorage.getItem("isLoggedIn") === "true"
      ? e
      : N.jsx(n1, { to: "/quiz-app/login" }),
  m1 = () =>
    N.jsx(s1, {
      children: N.jsxs(o1, {
        children: [
          N.jsx(To, { path: "/quiz-app/login", element: N.jsx(u1, {}) }),
          N.jsx(To, {
            path: "/quiz-app",
            element: N.jsx(Nc, { children: N.jsx(h1, {}) }),
          }),
          N.jsx(To, {
            path: "/quiz-app/quiz",
            element: N.jsx(Nc, { children: N.jsx(p1, {}) }),
          }),
        ],
      }),
    });
Hd(document.getElementById("root")).render(
  N.jsx(By, { store: yv, children: N.jsx(m1, {}) })
);
