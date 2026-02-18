var ST = Object.defineProperty;
var bT = (X, P, Se) => P in X ? ST(X, P, { enumerable: !0, configurable: !0, writable: !0, value: Se }) : X[P] = Se;
var y0 = (X, P, Se) => bT(X, typeof P != "symbol" ? P + "" : P, Se);
function J2(X) {
  return X && X.__esModule && Object.prototype.hasOwnProperty.call(X, "default") ? X.default : X;
}
var v1 = { exports: {} }, p0 = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var N2;
function ET() {
  if (N2) return p0;
  N2 = 1;
  var X = Symbol.for("react.transitional.element"), P = Symbol.for("react.fragment");
  function Se(U, De, Ne) {
    var ct = null;
    if (Ne !== void 0 && (ct = "" + Ne), De.key !== void 0 && (ct = "" + De.key), "key" in De) {
      Ne = {};
      for (var ee in De)
        ee !== "key" && (Ne[ee] = De[ee]);
    } else Ne = De;
    return De = Ne.ref, {
      $$typeof: X,
      type: U,
      key: ct,
      ref: De !== void 0 ? De : null,
      props: Ne
    };
  }
  return p0.Fragment = P, p0.jsx = Se, p0.jsxs = Se, p0;
}
var g0 = {}, S1 = { exports: {} }, Le = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B2;
function TT() {
  if (B2) return Le;
  B2 = 1;
  var X = Symbol.for("react.transitional.element"), P = Symbol.for("react.portal"), Se = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), De = Symbol.for("react.profiler"), Ne = Symbol.for("react.consumer"), ct = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), $ = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), H = Symbol.iterator;
  function ie(S) {
    return S === null || typeof S != "object" ? null : (S = H && S[H] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var Ve = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, _t = Object.assign, st = {};
  function lt(S, B, F) {
    this.props = S, this.context = B, this.refs = st, this.updater = F || Ve;
  }
  lt.prototype.isReactComponent = {}, lt.prototype.setState = function(S, B) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, B, "setState");
  }, lt.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function Tl() {
  }
  Tl.prototype = lt.prototype;
  function Bt(S, B, F) {
    this.props = S, this.context = B, this.refs = st, this.updater = F || Ve;
  }
  var Jt = Bt.prototype = new Tl();
  Jt.constructor = Bt, _t(Jt, lt.prototype), Jt.isPureReactComponent = !0;
  var el = Array.isArray;
  function ul() {
  }
  var _e = { H: null, A: null, T: null, S: null }, Ze = Object.prototype.hasOwnProperty;
  function Dt(S, B, F) {
    var W = F.ref;
    return {
      $$typeof: X,
      type: S,
      key: B,
      ref: W !== void 0 ? W : null,
      props: F
    };
  }
  function se(S, B) {
    return Dt(S.type, B, S.props);
  }
  function jt(S) {
    return typeof S == "object" && S !== null && S.$$typeof === X;
  }
  function ye(S) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(F) {
      return B[F];
    });
  }
  var qe = /\/+/g;
  function Qt(S, B) {
    return typeof S == "object" && S !== null && S.key != null ? ye("" + S.key) : B.toString(36);
  }
  function Yt(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(ul, ul) : (S.status = "pending", S.then(
          function(B) {
            S.status === "pending" && (S.status = "fulfilled", S.value = B);
          },
          function(B) {
            S.status === "pending" && (S.status = "rejected", S.reason = B);
          }
        )), S.status) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function _(S, B, F, W, ve) {
    var Ge = typeof S;
    (Ge === "undefined" || Ge === "boolean") && (S = null);
    var Te = !1;
    if (S === null) Te = !0;
    else
      switch (Ge) {
        case "bigint":
        case "string":
        case "number":
          Te = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case X:
            case P:
              Te = !0;
              break;
            case Ce:
              return Te = S._init, _(
                Te(S._payload),
                B,
                F,
                W,
                ve
              );
          }
      }
    if (Te)
      return ve = ve(S), Te = W === "" ? "." + Qt(S, 0) : W, el(ve) ? (F = "", Te != null && (F = Te.replace(qe, "$&/") + "/"), _(ve, B, F, "", function(qa) {
        return qa;
      })) : ve != null && (jt(ve) && (ve = se(
        ve,
        F + (ve.key == null || S && S.key === ve.key ? "" : ("" + ve.key).replace(
          qe,
          "$&/"
        ) + "/") + Te
      )), B.push(ve)), 1;
    Te = 0;
    var Lt = W === "" ? "." : W + ":";
    if (el(S))
      for (var mt = 0; mt < S.length; mt++)
        W = S[mt], Ge = Lt + Qt(W, mt), Te += _(
          W,
          B,
          F,
          Ge,
          ve
        );
    else if (mt = ie(S), typeof mt == "function")
      for (S = mt.call(S), mt = 0; !(W = S.next()).done; )
        W = W.value, Ge = Lt + Qt(W, mt++), Te += _(
          W,
          B,
          F,
          Ge,
          ve
        );
    else if (Ge === "object") {
      if (typeof S.then == "function")
        return _(
          Yt(S),
          B,
          F,
          W,
          ve
        );
      throw B = String(S), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Te;
  }
  function V(S, B, F) {
    if (S == null) return S;
    var W = [], ve = 0;
    return _(S, W, "", "", function(Ge) {
      return B.call(F, Ge, ve++);
    }), W;
  }
  function te(S) {
    if (S._status === -1) {
      var B = S._result;
      B = B(), B.then(
        function(F) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = F);
        },
        function(F) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = F);
        }
      ), S._status === -1 && (S._status = 0, S._result = B);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var pe = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var B = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(B)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, Oe = {
    map: V,
    forEach: function(S, B, F) {
      V(
        S,
        function() {
          B.apply(this, arguments);
        },
        F
      );
    },
    count: function(S) {
      var B = 0;
      return V(S, function() {
        B++;
      }), B;
    },
    toArray: function(S) {
      return V(S, function(B) {
        return B;
      }) || [];
    },
    only: function(S) {
      if (!jt(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return Le.Activity = Q, Le.Children = Oe, Le.Component = lt, Le.Fragment = Se, Le.Profiler = De, Le.PureComponent = Bt, Le.StrictMode = U, Le.Suspense = le, Le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _e, Le.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return _e.H.useMemoCache(S);
    }
  }, Le.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, Le.cacheSignal = function() {
    return null;
  }, Le.cloneElement = function(S, B, F) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var W = _t({}, S.props), ve = S.key;
    if (B != null)
      for (Ge in B.key !== void 0 && (ve = "" + B.key), B)
        !Ze.call(B, Ge) || Ge === "key" || Ge === "__self" || Ge === "__source" || Ge === "ref" && B.ref === void 0 || (W[Ge] = B[Ge]);
    var Ge = arguments.length - 2;
    if (Ge === 1) W.children = F;
    else if (1 < Ge) {
      for (var Te = Array(Ge), Lt = 0; Lt < Ge; Lt++)
        Te[Lt] = arguments[Lt + 2];
      W.children = Te;
    }
    return Dt(S.type, ve, W);
  }, Le.createContext = function(S) {
    return S = {
      $$typeof: ct,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: Ne,
      _context: S
    }, S;
  }, Le.createElement = function(S, B, F) {
    var W, ve = {}, Ge = null;
    if (B != null)
      for (W in B.key !== void 0 && (Ge = "" + B.key), B)
        Ze.call(B, W) && W !== "key" && W !== "__self" && W !== "__source" && (ve[W] = B[W]);
    var Te = arguments.length - 2;
    if (Te === 1) ve.children = F;
    else if (1 < Te) {
      for (var Lt = Array(Te), mt = 0; mt < Te; mt++)
        Lt[mt] = arguments[mt + 2];
      ve.children = Lt;
    }
    if (S && S.defaultProps)
      for (W in Te = S.defaultProps, Te)
        ve[W] === void 0 && (ve[W] = Te[W]);
    return Dt(S, Ge, ve);
  }, Le.createRef = function() {
    return { current: null };
  }, Le.forwardRef = function(S) {
    return { $$typeof: ee, render: S };
  }, Le.isValidElement = jt, Le.lazy = function(S) {
    return {
      $$typeof: Ce,
      _payload: { _status: -1, _result: S },
      _init: te
    };
  }, Le.memo = function(S, B) {
    return {
      $$typeof: $,
      type: S,
      compare: B === void 0 ? null : B
    };
  }, Le.startTransition = function(S) {
    var B = _e.T, F = {};
    _e.T = F;
    try {
      var W = S(), ve = _e.S;
      ve !== null && ve(F, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(ul, pe);
    } catch (Ge) {
      pe(Ge);
    } finally {
      B !== null && F.types !== null && (B.types = F.types), _e.T = B;
    }
  }, Le.unstable_useCacheRefresh = function() {
    return _e.H.useCacheRefresh();
  }, Le.use = function(S) {
    return _e.H.use(S);
  }, Le.useActionState = function(S, B, F) {
    return _e.H.useActionState(S, B, F);
  }, Le.useCallback = function(S, B) {
    return _e.H.useCallback(S, B);
  }, Le.useContext = function(S) {
    return _e.H.useContext(S);
  }, Le.useDebugValue = function() {
  }, Le.useDeferredValue = function(S, B) {
    return _e.H.useDeferredValue(S, B);
  }, Le.useEffect = function(S, B) {
    return _e.H.useEffect(S, B);
  }, Le.useEffectEvent = function(S) {
    return _e.H.useEffectEvent(S);
  }, Le.useId = function() {
    return _e.H.useId();
  }, Le.useImperativeHandle = function(S, B, F) {
    return _e.H.useImperativeHandle(S, B, F);
  }, Le.useInsertionEffect = function(S, B) {
    return _e.H.useInsertionEffect(S, B);
  }, Le.useLayoutEffect = function(S, B) {
    return _e.H.useLayoutEffect(S, B);
  }, Le.useMemo = function(S, B) {
    return _e.H.useMemo(S, B);
  }, Le.useOptimistic = function(S, B) {
    return _e.H.useOptimistic(S, B);
  }, Le.useReducer = function(S, B, F) {
    return _e.H.useReducer(S, B, F);
  }, Le.useRef = function(S) {
    return _e.H.useRef(S);
  }, Le.useState = function(S) {
    return _e.H.useState(S);
  }, Le.useSyncExternalStore = function(S, B, F) {
    return _e.H.useSyncExternalStore(
      S,
      B,
      F
    );
  }, Le.useTransition = function() {
    return _e.H.useTransition();
  }, Le.version = "19.2.0", Le;
}
var b0 = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
b0.exports;
var j2;
function AT() {
  return j2 || (j2 = 1, function(X, P) {
    process.env.NODE_ENV !== "production" && function() {
      function Se(g, M) {
        Object.defineProperty(Ne.prototype, g, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              M[0],
              M[1]
            );
          }
        });
      }
      function U(g) {
        return g === null || typeof g != "object" ? null : (g = _i && g[_i] || g["@@iterator"], typeof g == "function" ? g : null);
      }
      function De(g, M) {
        g = (g = g.constructor) && (g.displayName || g.name) || "ReactClass";
        var I = g + "." + M;
        Ri[I] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          M,
          g
        ), Ri[I] = !0);
      }
      function Ne(g, M, I) {
        this.props = g, this.context = M, this.refs = yt, this.updater = I || Ga;
      }
      function ct() {
      }
      function ee(g, M, I) {
        this.props = g, this.context = M, this.refs = yt, this.updater = I || Ga;
      }
      function le() {
      }
      function $(g) {
        return "" + g;
      }
      function Ce(g) {
        try {
          $(g);
          var M = !1;
        } catch {
          M = !0;
        }
        if (M) {
          M = console;
          var I = M.error, ae = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return I.call(
            M,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            ae
          ), $(g);
        }
      }
      function Q(g) {
        if (g == null) return null;
        if (typeof g == "function")
          return g.$$typeof === ds ? null : g.displayName || g.name || null;
        if (typeof g == "string") return g;
        switch (g) {
          case S:
            return "Fragment";
          case F:
            return "Profiler";
          case B:
            return "StrictMode";
          case Te:
            return "Suspense";
          case Lt:
            return "SuspenseList";
          case ce:
            return "Activity";
        }
        if (typeof g == "object")
          switch (typeof g.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), g.$$typeof) {
            case Oe:
              return "Portal";
            case ve:
              return g.displayName || "Context";
            case W:
              return (g._context.displayName || "Context") + ".Consumer";
            case Ge:
              var M = g.render;
              return g = g.displayName, g || (g = M.displayName || M.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
            case mt:
              return M = g.displayName || null, M !== null ? M : Q(g.type) || "Memo";
            case qa:
              M = g._payload, g = g._init;
              try {
                return Q(g(M));
              } catch {
              }
          }
        return null;
      }
      function H(g) {
        if (g === S) return "<>";
        if (typeof g == "object" && g !== null && g.$$typeof === qa)
          return "<...>";
        try {
          var M = Q(g);
          return M ? "<" + M + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function ie() {
        var g = re.A;
        return g === null ? null : g.getOwner();
      }
      function Ve() {
        return Error("react-stack-top-frame");
      }
      function _t(g) {
        if (Mi.call(g, "key")) {
          var M = Object.getOwnPropertyDescriptor(g, "key").get;
          if (M && M.isReactWarning) return !1;
        }
        return g.key !== void 0;
      }
      function st(g, M) {
        function I() {
          Sc || (Sc = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            M
          ));
        }
        I.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: I,
          configurable: !0
        });
      }
      function lt() {
        var g = Q(this.type);
        return Pr[g] || (Pr[g] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), g = this.props.ref, g !== void 0 ? g : null;
      }
      function Tl(g, M, I, ae, de, Re) {
        var he = I.ref;
        return g = {
          $$typeof: pe,
          type: g,
          key: M,
          props: I,
          _owner: ae
        }, (he !== void 0 ? he : null) !== null ? Object.defineProperty(g, "ref", {
          enumerable: !1,
          get: lt
        }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(g, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(g, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: de
        }), Object.defineProperty(g, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: Re
        }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
      }
      function Bt(g, M) {
        return M = Tl(
          g.type,
          M,
          g.props,
          g._owner,
          g._debugStack,
          g._debugTask
        ), g._store && (M._store.validated = g._store.validated), M;
      }
      function Jt(g) {
        el(g) ? g._store && (g._store.validated = 1) : typeof g == "object" && g !== null && g.$$typeof === qa && (g._payload.status === "fulfilled" ? el(g._payload.value) && g._payload.value._store && (g._payload.value._store.validated = 1) : g._store && (g._store.validated = 1));
      }
      function el(g) {
        return typeof g == "object" && g !== null && g.$$typeof === pe;
      }
      function ul(g) {
        var M = { "=": "=0", ":": "=2" };
        return "$" + g.replace(/[=:]/g, function(I) {
          return M[I];
        });
      }
      function _e(g, M) {
        return typeof g == "object" && g !== null && g.key != null ? (Ce(g.key), ul("" + g.key)) : M.toString(36);
      }
      function Ze(g) {
        switch (g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
          default:
            switch (typeof g.status == "string" ? g.then(le, le) : (g.status = "pending", g.then(
              function(M) {
                g.status === "pending" && (g.status = "fulfilled", g.value = M);
              },
              function(M) {
                g.status === "pending" && (g.status = "rejected", g.reason = M);
              }
            )), g.status) {
              case "fulfilled":
                return g.value;
              case "rejected":
                throw g.reason;
            }
        }
        throw g;
      }
      function Dt(g, M, I, ae, de) {
        var Re = typeof g;
        (Re === "undefined" || Re === "boolean") && (g = null);
        var he = !1;
        if (g === null) he = !0;
        else
          switch (Re) {
            case "bigint":
            case "string":
            case "number":
              he = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case pe:
                case Oe:
                  he = !0;
                  break;
                case qa:
                  return he = g._init, Dt(
                    he(g._payload),
                    M,
                    I,
                    ae,
                    de
                  );
              }
          }
        if (he) {
          he = g, de = de(he);
          var Pe = ae === "" ? "." + _e(he, 0) : ae;
          return vc(de) ? (I = "", Pe != null && (I = Pe.replace(ed, "$&/") + "/"), Dt(de, M, I, "", function(ta) {
            return ta;
          })) : de != null && (el(de) && (de.key != null && (he && he.key === de.key || Ce(de.key)), I = Bt(
            de,
            I + (de.key == null || he && he.key === de.key ? "" : ("" + de.key).replace(
              ed,
              "$&/"
            ) + "/") + Pe
          ), ae !== "" && he != null && el(he) && he.key == null && he._store && !he._store.validated && (I._store.validated = 2), de = I), M.push(de)), 1;
        }
        if (he = 0, Pe = ae === "" ? "." : ae + ":", vc(g))
          for (var we = 0; we < g.length; we++)
            ae = g[we], Re = Pe + _e(ae, we), he += Dt(
              ae,
              M,
              I,
              Re,
              de
            );
        else if (we = U(g), typeof we == "function")
          for (we === g.entries && (Cn || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Cn = !0), g = we.call(g), we = 0; !(ae = g.next()).done; )
            ae = ae.value, Re = Pe + _e(ae, we++), he += Dt(
              ae,
              M,
              I,
              Re,
              de
            );
        else if (Re === "object") {
          if (typeof g.then == "function")
            return Dt(
              Ze(g),
              M,
              I,
              ae,
              de
            );
          throw M = String(g), Error(
            "Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return he;
      }
      function se(g, M, I) {
        if (g == null) return g;
        var ae = [], de = 0;
        return Dt(g, ae, "", "", function(Re) {
          return M.call(I, Re, de++);
        }), ae;
      }
      function jt(g) {
        if (g._status === -1) {
          var M = g._ioInfo;
          M != null && (M.start = M.end = performance.now()), M = g._result;
          var I = M();
          if (I.then(
            function(de) {
              if (g._status === 0 || g._status === -1) {
                g._status = 1, g._result = de;
                var Re = g._ioInfo;
                Re != null && (Re.end = performance.now()), I.status === void 0 && (I.status = "fulfilled", I.value = de);
              }
            },
            function(de) {
              if (g._status === 0 || g._status === -1) {
                g._status = 2, g._result = de;
                var Re = g._ioInfo;
                Re != null && (Re.end = performance.now()), I.status === void 0 && (I.status = "rejected", I.reason = de);
              }
            }
          ), M = g._ioInfo, M != null) {
            M.value = I;
            var ae = I.displayName;
            typeof ae == "string" && (M.name = ae);
          }
          g._status === -1 && (g._status = 0, g._result = I);
        }
        if (g._status === 1)
          return M = g._result, M === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            M
          ), "default" in M || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            M
          ), M.default;
        throw g._result;
      }
      function ye() {
        var g = re.H;
        return g === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), g;
      }
      function qe() {
        re.asyncTransitions--;
      }
      function Qt(g) {
        if (bc === null)
          try {
            var M = ("require" + Math.random()).slice(0, 7);
            bc = (X && X[M]).call(
              X,
              "timers"
            ).setImmediate;
          } catch {
            bc = function(ae) {
              hs === !1 && (hs = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var de = new MessageChannel();
              de.port1.onmessage = ae, de.port2.postMessage(void 0);
            };
          }
        return bc(g);
      }
      function Yt(g) {
        return 1 < g.length && typeof AggregateError == "function" ? new AggregateError(g) : g[0];
      }
      function _(g, M) {
        M !== dn - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), dn = M;
      }
      function V(g, M, I) {
        var ae = re.actQueue;
        if (ae !== null)
          if (ae.length !== 0)
            try {
              te(ae), Qt(function() {
                return V(g, M, I);
              });
              return;
            } catch (de) {
              re.thrownErrors.push(de);
            }
          else re.actQueue = null;
        0 < re.thrownErrors.length ? (ae = Yt(re.thrownErrors), re.thrownErrors.length = 0, I(ae)) : M(g);
      }
      function te(g) {
        if (!wa) {
          wa = !0;
          var M = 0;
          try {
            for (; M < g.length; M++) {
              var I = g[M];
              do {
                re.didUsePromise = !1;
                var ae = I(!1);
                if (ae !== null) {
                  if (re.didUsePromise) {
                    g[M] = I, g.splice(0, M);
                    return;
                  }
                  I = ae;
                } else break;
              } while (!0);
            }
            g.length = 0;
          } catch (de) {
            g.splice(0, M + 1), re.thrownErrors.push(de);
          } finally {
            wa = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var pe = Symbol.for("react.transitional.element"), Oe = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), W = Symbol.for("react.consumer"), ve = Symbol.for("react.context"), Ge = Symbol.for("react.forward_ref"), Te = Symbol.for("react.suspense"), Lt = Symbol.for("react.suspense_list"), mt = Symbol.for("react.memo"), qa = Symbol.for("react.lazy"), ce = Symbol.for("react.activity"), _i = Symbol.iterator, Ri = {}, Ga = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(g) {
          De(g, "forceUpdate");
        },
        enqueueReplaceState: function(g) {
          De(g, "replaceState");
        },
        enqueueSetState: function(g) {
          De(g, "setState");
        }
      }, iu = Object.assign, yt = {};
      Object.freeze(yt), Ne.prototype.isReactComponent = {}, Ne.prototype.setState = function(g, M) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, g, M, "setState");
      }, Ne.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      var ea = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (Ci in ea)
        ea.hasOwnProperty(Ci) && Se(Ci, ea[Ci]);
      ct.prototype = Ne.prototype, ea = ee.prototype = new ct(), ea.constructor = ee, iu(ea, Ne.prototype), ea.isPureReactComponent = !0;
      var vc = Array.isArray, ds = Symbol.for("react.client.reference"), re = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, Mi = Object.prototype.hasOwnProperty, cu = console.createTask ? console.createTask : function() {
        return null;
      };
      ea = {
        react_stack_bottom_frame: function(g) {
          return g();
        }
      };
      var Sc, gl, Pr = {}, Uo = ea.react_stack_bottom_frame.bind(
        ea,
        Ve
      )(), Ho = cu(H(Ve)), Cn = !1, ed = /\/+/g, No = typeof reportError == "function" ? reportError : function(g) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var M = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
            error: g
          });
          if (!window.dispatchEvent(M)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", g);
          return;
        }
        console.error(g);
      }, hs = !1, bc = null, dn = 0, Al = !1, wa = !1, Ul = typeof queueMicrotask == "function" ? function(g) {
        queueMicrotask(function() {
          return queueMicrotask(g);
        });
      } : Qt;
      ea = Object.freeze({
        __proto__: null,
        c: function(g) {
          return ye().useMemoCache(g);
        }
      });
      var Ci = {
        map: se,
        forEach: function(g, M, I) {
          se(
            g,
            function() {
              M.apply(this, arguments);
            },
            I
          );
        },
        count: function(g) {
          var M = 0;
          return se(g, function() {
            M++;
          }), M;
        },
        toArray: function(g) {
          return se(g, function(M) {
            return M;
          }) || [];
        },
        only: function(g) {
          if (!el(g))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return g;
        }
      };
      P.Activity = ce, P.Children = Ci, P.Component = Ne, P.Fragment = S, P.Profiler = F, P.PureComponent = ee, P.StrictMode = B, P.Suspense = Te, P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = re, P.__COMPILER_RUNTIME = ea, P.act = function(g) {
        var M = re.actQueue, I = dn;
        dn++;
        var ae = re.actQueue = M !== null ? M : [], de = !1;
        try {
          var Re = g();
        } catch (we) {
          re.thrownErrors.push(we);
        }
        if (0 < re.thrownErrors.length)
          throw _(M, I), g = Yt(re.thrownErrors), re.thrownErrors.length = 0, g;
        if (Re !== null && typeof Re == "object" && typeof Re.then == "function") {
          var he = Re;
          return Ul(function() {
            de || Al || (Al = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(we, ta) {
              de = !0, he.then(
                function(hn) {
                  if (_(M, I), I === 0) {
                    try {
                      te(ae), Qt(function() {
                        return V(
                          hn,
                          we,
                          ta
                        );
                      });
                    } catch (Bo) {
                      re.thrownErrors.push(Bo);
                    }
                    if (0 < re.thrownErrors.length) {
                      var Ui = Yt(
                        re.thrownErrors
                      );
                      re.thrownErrors.length = 0, ta(Ui);
                    }
                  } else we(hn);
                },
                function(hn) {
                  _(M, I), 0 < re.thrownErrors.length && (hn = Yt(
                    re.thrownErrors
                  ), re.thrownErrors.length = 0), ta(hn);
                }
              );
            }
          };
        }
        var Pe = Re;
        if (_(M, I), I === 0 && (te(ae), ae.length !== 0 && Ul(function() {
          de || Al || (Al = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), re.actQueue = null), 0 < re.thrownErrors.length)
          throw g = Yt(re.thrownErrors), re.thrownErrors.length = 0, g;
        return {
          then: function(we, ta) {
            de = !0, I === 0 ? (re.actQueue = ae, Qt(function() {
              return V(
                Pe,
                we,
                ta
              );
            })) : we(Pe);
          }
        };
      }, P.cache = function(g) {
        return function() {
          return g.apply(null, arguments);
        };
      }, P.cacheSignal = function() {
        return null;
      }, P.captureOwnerStack = function() {
        var g = re.getCurrentStack;
        return g === null ? null : g();
      }, P.cloneElement = function(g, M, I) {
        if (g == null)
          throw Error(
            "The argument must be a React element, but you passed " + g + "."
          );
        var ae = iu({}, g.props), de = g.key, Re = g._owner;
        if (M != null) {
          var he;
          e: {
            if (Mi.call(M, "ref") && (he = Object.getOwnPropertyDescriptor(
              M,
              "ref"
            ).get) && he.isReactWarning) {
              he = !1;
              break e;
            }
            he = M.ref !== void 0;
          }
          he && (Re = ie()), _t(M) && (Ce(M.key), de = "" + M.key);
          for (Pe in M)
            !Mi.call(M, Pe) || Pe === "key" || Pe === "__self" || Pe === "__source" || Pe === "ref" && M.ref === void 0 || (ae[Pe] = M[Pe]);
        }
        var Pe = arguments.length - 2;
        if (Pe === 1) ae.children = I;
        else if (1 < Pe) {
          he = Array(Pe);
          for (var we = 0; we < Pe; we++)
            he[we] = arguments[we + 2];
          ae.children = he;
        }
        for (ae = Tl(
          g.type,
          de,
          ae,
          Re,
          g._debugStack,
          g._debugTask
        ), de = 2; de < arguments.length; de++)
          Jt(arguments[de]);
        return ae;
      }, P.createContext = function(g) {
        return g = {
          $$typeof: ve,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, g.Provider = g, g.Consumer = {
          $$typeof: W,
          _context: g
        }, g._currentRenderer = null, g._currentRenderer2 = null, g;
      }, P.createElement = function(g, M, I) {
        for (var ae = 2; ae < arguments.length; ae++)
          Jt(arguments[ae]);
        ae = {};
        var de = null;
        if (M != null)
          for (we in gl || !("__self" in M) || "key" in M || (gl = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), _t(M) && (Ce(M.key), de = "" + M.key), M)
            Mi.call(M, we) && we !== "key" && we !== "__self" && we !== "__source" && (ae[we] = M[we]);
        var Re = arguments.length - 2;
        if (Re === 1) ae.children = I;
        else if (1 < Re) {
          for (var he = Array(Re), Pe = 0; Pe < Re; Pe++)
            he[Pe] = arguments[Pe + 2];
          Object.freeze && Object.freeze(he), ae.children = he;
        }
        if (g && g.defaultProps)
          for (we in Re = g.defaultProps, Re)
            ae[we] === void 0 && (ae[we] = Re[we]);
        de && st(
          ae,
          typeof g == "function" ? g.displayName || g.name || "Unknown" : g
        );
        var we = 1e4 > re.recentlyCreatedOwnerStacks++;
        return Tl(
          g,
          de,
          ae,
          ie(),
          we ? Error("react-stack-top-frame") : Uo,
          we ? cu(H(g)) : Ho
        );
      }, P.createRef = function() {
        var g = { current: null };
        return Object.seal(g), g;
      }, P.forwardRef = function(g) {
        g != null && g.$$typeof === mt ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof g != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          g === null ? "null" : typeof g
        ) : g.length !== 0 && g.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), g != null && g.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var M = { $$typeof: Ge, render: g }, I;
        return Object.defineProperty(M, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return I;
          },
          set: function(ae) {
            I = ae, g.name || g.displayName || (Object.defineProperty(g, "name", { value: ae }), g.displayName = ae);
          }
        }), M;
      }, P.isValidElement = el, P.lazy = function(g) {
        g = { _status: -1, _result: g };
        var M = {
          $$typeof: qa,
          _payload: g,
          _init: jt
        }, I = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return g._ioInfo = I, M._debugInfo = [{ awaited: I }], M;
      }, P.memo = function(g, M) {
        g == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          g === null ? "null" : typeof g
        ), M = {
          $$typeof: mt,
          type: g,
          compare: M === void 0 ? null : M
        };
        var I;
        return Object.defineProperty(M, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return I;
          },
          set: function(ae) {
            I = ae, g.name || g.displayName || (Object.defineProperty(g, "name", { value: ae }), g.displayName = ae);
          }
        }), M;
      }, P.startTransition = function(g) {
        var M = re.T, I = {};
        I._updatedFibers = /* @__PURE__ */ new Set(), re.T = I;
        try {
          var ae = g(), de = re.S;
          de !== null && de(I, ae), typeof ae == "object" && ae !== null && typeof ae.then == "function" && (re.asyncTransitions++, ae.then(qe, qe), ae.then(le, No));
        } catch (Re) {
          No(Re);
        } finally {
          M === null && I._updatedFibers && (g = I._updatedFibers.size, I._updatedFibers.clear(), 10 < g && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), M !== null && I.types !== null && (M.types !== null && M.types !== I.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), M.types = I.types), re.T = M;
        }
      }, P.unstable_useCacheRefresh = function() {
        return ye().useCacheRefresh();
      }, P.use = function(g) {
        return ye().use(g);
      }, P.useActionState = function(g, M, I) {
        return ye().useActionState(
          g,
          M,
          I
        );
      }, P.useCallback = function(g, M) {
        return ye().useCallback(g, M);
      }, P.useContext = function(g) {
        var M = ye();
        return g.$$typeof === W && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), M.useContext(g);
      }, P.useDebugValue = function(g, M) {
        return ye().useDebugValue(g, M);
      }, P.useDeferredValue = function(g, M) {
        return ye().useDeferredValue(g, M);
      }, P.useEffect = function(g, M) {
        return g == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), ye().useEffect(g, M);
      }, P.useEffectEvent = function(g) {
        return ye().useEffectEvent(g);
      }, P.useId = function() {
        return ye().useId();
      }, P.useImperativeHandle = function(g, M, I) {
        return ye().useImperativeHandle(g, M, I);
      }, P.useInsertionEffect = function(g, M) {
        return g == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), ye().useInsertionEffect(g, M);
      }, P.useLayoutEffect = function(g, M) {
        return g == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), ye().useLayoutEffect(g, M);
      }, P.useMemo = function(g, M) {
        return ye().useMemo(g, M);
      }, P.useOptimistic = function(g, M) {
        return ye().useOptimistic(g, M);
      }, P.useReducer = function(g, M, I) {
        return ye().useReducer(g, M, I);
      }, P.useRef = function(g) {
        return ye().useRef(g);
      }, P.useState = function(g) {
        return ye().useState(g);
      }, P.useSyncExternalStore = function(g, M, I) {
        return ye().useSyncExternalStore(
          g,
          M,
          I
        );
      }, P.useTransition = function() {
        return ye().useTransition();
      }, P.version = "19.2.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(b0, b0.exports)), b0.exports;
}
process.env.NODE_ENV === "production" ? S1.exports = TT() : S1.exports = AT();
var Co = S1.exports;
const OT = /* @__PURE__ */ J2(Co);
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Y2;
function zT() {
  return Y2 || (Y2 = 1, process.env.NODE_ENV !== "production" && function() {
    function X(S) {
      if (S == null) return null;
      if (typeof S == "function")
        return S.$$typeof === jt ? null : S.displayName || S.name || null;
      if (typeof S == "string") return S;
      switch (S) {
        case st:
          return "Fragment";
        case Tl:
          return "Profiler";
        case lt:
          return "StrictMode";
        case ul:
          return "Suspense";
        case _e:
          return "SuspenseList";
        case se:
          return "Activity";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case _t:
            return "Portal";
          case Jt:
            return S.displayName || "Context";
          case Bt:
            return (S._context.displayName || "Context") + ".Consumer";
          case el:
            var B = S.render;
            return S = S.displayName, S || (S = B.displayName || B.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case Ze:
            return B = S.displayName || null, B !== null ? B : X(S.type) || "Memo";
          case Dt:
            B = S._payload, S = S._init;
            try {
              return X(S(B));
            } catch {
            }
        }
      return null;
    }
    function P(S) {
      return "" + S;
    }
    function Se(S) {
      try {
        P(S);
        var B = !1;
      } catch {
        B = !0;
      }
      if (B) {
        B = console;
        var F = B.error, W = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return F.call(
          B,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          W
        ), P(S);
      }
    }
    function U(S) {
      if (S === st) return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === Dt)
        return "<...>";
      try {
        var B = X(S);
        return B ? "<" + B + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function De() {
      var S = ye.A;
      return S === null ? null : S.getOwner();
    }
    function Ne() {
      return Error("react-stack-top-frame");
    }
    function ct(S) {
      if (qe.call(S, "key")) {
        var B = Object.getOwnPropertyDescriptor(S, "key").get;
        if (B && B.isReactWarning) return !1;
      }
      return S.key !== void 0;
    }
    function ee(S, B) {
      function F() {
        _ || (_ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          B
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: F,
        configurable: !0
      });
    }
    function le() {
      var S = X(this.type);
      return V[S] || (V[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function $(S, B, F, W, ve, Ge) {
      var Te = F.ref;
      return S = {
        $$typeof: Ve,
        type: S,
        key: B,
        props: F,
        _owner: W
      }, (Te !== void 0 ? Te : null) !== null ? Object.defineProperty(S, "ref", {
        enumerable: !1,
        get: le
      }) : Object.defineProperty(S, "ref", { enumerable: !1, value: null }), S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(S, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(S, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ve
      }), Object.defineProperty(S, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ge
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function Ce(S, B, F, W, ve, Ge) {
      var Te = B.children;
      if (Te !== void 0)
        if (W)
          if (Qt(Te)) {
            for (W = 0; W < Te.length; W++)
              Q(Te[W]);
            Object.freeze && Object.freeze(Te);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else Q(Te);
      if (qe.call(B, "key")) {
        Te = X(S);
        var Lt = Object.keys(B).filter(function(qa) {
          return qa !== "key";
        });
        W = 0 < Lt.length ? "{key: someKey, " + Lt.join(": ..., ") + ": ...}" : "{key: someKey}", Oe[Te + W] || (Lt = 0 < Lt.length ? "{" + Lt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          W,
          Te,
          Lt,
          Te
        ), Oe[Te + W] = !0);
      }
      if (Te = null, F !== void 0 && (Se(F), Te = "" + F), ct(B) && (Se(B.key), Te = "" + B.key), "key" in B) {
        F = {};
        for (var mt in B)
          mt !== "key" && (F[mt] = B[mt]);
      } else F = B;
      return Te && ee(
        F,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), $(
        S,
        Te,
        F,
        De(),
        ve,
        Ge
      );
    }
    function Q(S) {
      H(S) ? S._store && (S._store.validated = 1) : typeof S == "object" && S !== null && S.$$typeof === Dt && (S._payload.status === "fulfilled" ? H(S._payload.value) && S._payload.value._store && (S._payload.value._store.validated = 1) : S._store && (S._store.validated = 1));
    }
    function H(S) {
      return typeof S == "object" && S !== null && S.$$typeof === Ve;
    }
    var ie = Co, Ve = Symbol.for("react.transitional.element"), _t = Symbol.for("react.portal"), st = Symbol.for("react.fragment"), lt = Symbol.for("react.strict_mode"), Tl = Symbol.for("react.profiler"), Bt = Symbol.for("react.consumer"), Jt = Symbol.for("react.context"), el = Symbol.for("react.forward_ref"), ul = Symbol.for("react.suspense"), _e = Symbol.for("react.suspense_list"), Ze = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), se = Symbol.for("react.activity"), jt = Symbol.for("react.client.reference"), ye = ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, qe = Object.prototype.hasOwnProperty, Qt = Array.isArray, Yt = console.createTask ? console.createTask : function() {
      return null;
    };
    ie = {
      react_stack_bottom_frame: function(S) {
        return S();
      }
    };
    var _, V = {}, te = ie.react_stack_bottom_frame.bind(
      ie,
      Ne
    )(), pe = Yt(U(Ne)), Oe = {};
    g0.Fragment = st, g0.jsx = function(S, B, F) {
      var W = 1e4 > ye.recentlyCreatedOwnerStacks++;
      return Ce(
        S,
        B,
        F,
        !1,
        W ? Error("react-stack-top-frame") : te,
        W ? Yt(U(S)) : pe
      );
    }, g0.jsxs = function(S, B, F) {
      var W = 1e4 > ye.recentlyCreatedOwnerStacks++;
      return Ce(
        S,
        B,
        F,
        !0,
        W ? Error("react-stack-top-frame") : te,
        W ? Yt(U(S)) : pe
      );
    };
  }()), g0;
}
process.env.NODE_ENV === "production" ? v1.exports = ET() : v1.exports = zT();
var Pl = v1.exports;
const K2 = Co.createContext(null);
function DT(X, P) {
  return /* @__PURE__ */ Pl.jsx(K2.Provider, { value: X, children: P });
}
function T1() {
  const X = Co.useContext(K2);
  if (!X)
    throw new Error("usePluginContext must be used inside <PluginProvider />");
  return X;
}
function _T() {
  return T1().services;
}
function RT() {
  return T1().user;
}
function MT() {
  return T1().manifest;
}
var b1 = { exports: {} }, v0 = {}, Qv = { exports: {} }, p1 = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var x2;
function CT() {
  return x2 || (x2 = 1, function(X) {
    function P(_, V) {
      var te = _.length;
      _.push(V);
      e: for (; 0 < te; ) {
        var pe = te - 1 >>> 1, Oe = _[pe];
        if (0 < De(Oe, V))
          _[pe] = V, _[te] = Oe, te = pe;
        else break e;
      }
    }
    function Se(_) {
      return _.length === 0 ? null : _[0];
    }
    function U(_) {
      if (_.length === 0) return null;
      var V = _[0], te = _.pop();
      if (te !== V) {
        _[0] = te;
        e: for (var pe = 0, Oe = _.length, S = Oe >>> 1; pe < S; ) {
          var B = 2 * (pe + 1) - 1, F = _[B], W = B + 1, ve = _[W];
          if (0 > De(F, te))
            W < Oe && 0 > De(ve, F) ? (_[pe] = ve, _[W] = te, pe = W) : (_[pe] = F, _[B] = te, pe = B);
          else if (W < Oe && 0 > De(ve, te))
            _[pe] = ve, _[W] = te, pe = W;
          else break e;
        }
      }
      return V;
    }
    function De(_, V) {
      var te = _.sortIndex - V.sortIndex;
      return te !== 0 ? te : _.id - V.id;
    }
    if (X.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Ne = performance;
      X.unstable_now = function() {
        return Ne.now();
      };
    } else {
      var ct = Date, ee = ct.now();
      X.unstable_now = function() {
        return ct.now() - ee;
      };
    }
    var le = [], $ = [], Ce = 1, Q = null, H = 3, ie = !1, Ve = !1, _t = !1, st = !1, lt = typeof setTimeout == "function" ? setTimeout : null, Tl = typeof clearTimeout == "function" ? clearTimeout : null, Bt = typeof setImmediate < "u" ? setImmediate : null;
    function Jt(_) {
      for (var V = Se($); V !== null; ) {
        if (V.callback === null) U($);
        else if (V.startTime <= _)
          U($), V.sortIndex = V.expirationTime, P(le, V);
        else break;
        V = Se($);
      }
    }
    function el(_) {
      if (_t = !1, Jt(_), !Ve)
        if (Se(le) !== null)
          Ve = !0, ul || (ul = !0, ye());
        else {
          var V = Se($);
          V !== null && Yt(el, V.startTime - _);
        }
    }
    var ul = !1, _e = -1, Ze = 5, Dt = -1;
    function se() {
      return st ? !0 : !(X.unstable_now() - Dt < Ze);
    }
    function jt() {
      if (st = !1, ul) {
        var _ = X.unstable_now();
        Dt = _;
        var V = !0;
        try {
          e: {
            Ve = !1, _t && (_t = !1, Tl(_e), _e = -1), ie = !0;
            var te = H;
            try {
              t: {
                for (Jt(_), Q = Se(le); Q !== null && !(Q.expirationTime > _ && se()); ) {
                  var pe = Q.callback;
                  if (typeof pe == "function") {
                    Q.callback = null, H = Q.priorityLevel;
                    var Oe = pe(
                      Q.expirationTime <= _
                    );
                    if (_ = X.unstable_now(), typeof Oe == "function") {
                      Q.callback = Oe, Jt(_), V = !0;
                      break t;
                    }
                    Q === Se(le) && U(le), Jt(_);
                  } else U(le);
                  Q = Se(le);
                }
                if (Q !== null) V = !0;
                else {
                  var S = Se($);
                  S !== null && Yt(
                    el,
                    S.startTime - _
                  ), V = !1;
                }
              }
              break e;
            } finally {
              Q = null, H = te, ie = !1;
            }
            V = void 0;
          }
        } finally {
          V ? ye() : ul = !1;
        }
      }
    }
    var ye;
    if (typeof Bt == "function")
      ye = function() {
        Bt(jt);
      };
    else if (typeof MessageChannel < "u") {
      var qe = new MessageChannel(), Qt = qe.port2;
      qe.port1.onmessage = jt, ye = function() {
        Qt.postMessage(null);
      };
    } else
      ye = function() {
        lt(jt, 0);
      };
    function Yt(_, V) {
      _e = lt(function() {
        _(X.unstable_now());
      }, V);
    }
    X.unstable_IdlePriority = 5, X.unstable_ImmediatePriority = 1, X.unstable_LowPriority = 4, X.unstable_NormalPriority = 3, X.unstable_Profiling = null, X.unstable_UserBlockingPriority = 2, X.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, X.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ze = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, X.unstable_getCurrentPriorityLevel = function() {
      return H;
    }, X.unstable_next = function(_) {
      switch (H) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = H;
      }
      var te = H;
      H = V;
      try {
        return _();
      } finally {
        H = te;
      }
    }, X.unstable_requestPaint = function() {
      st = !0;
    }, X.unstable_runWithPriority = function(_, V) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var te = H;
      H = _;
      try {
        return V();
      } finally {
        H = te;
      }
    }, X.unstable_scheduleCallback = function(_, V, te) {
      var pe = X.unstable_now();
      switch (typeof te == "object" && te !== null ? (te = te.delay, te = typeof te == "number" && 0 < te ? pe + te : pe) : te = pe, _) {
        case 1:
          var Oe = -1;
          break;
        case 2:
          Oe = 250;
          break;
        case 5:
          Oe = 1073741823;
          break;
        case 4:
          Oe = 1e4;
          break;
        default:
          Oe = 5e3;
      }
      return Oe = te + Oe, _ = {
        id: Ce++,
        callback: V,
        priorityLevel: _,
        startTime: te,
        expirationTime: Oe,
        sortIndex: -1
      }, te > pe ? (_.sortIndex = te, P($, _), Se(le) === null && _ === Se($) && (_t ? (Tl(_e), _e = -1) : _t = !0, Yt(el, te - pe))) : (_.sortIndex = Oe, P(le, _), Ve || ie || (Ve = !0, ul || (ul = !0, ye()))), _;
    }, X.unstable_shouldYield = se, X.unstable_wrapCallback = function(_) {
      var V = H;
      return function() {
        var te = H;
        H = V;
        try {
          return _.apply(this, arguments);
        } finally {
          H = te;
        }
      };
    };
  }(p1)), p1;
}
var g1 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q2;
function UT() {
  return q2 || (q2 = 1, function(X) {
    process.env.NODE_ENV !== "production" && function() {
      function P() {
        if (el = !1, Dt) {
          var _ = X.unstable_now();
          ye = _;
          var V = !0;
          try {
            e: {
              Bt = !1, Jt && (Jt = !1, _e(se), se = -1), Tl = !0;
              var te = lt;
              try {
                t: {
                  for (ct(_), st = U(ie); st !== null && !(st.expirationTime > _ && le()); ) {
                    var pe = st.callback;
                    if (typeof pe == "function") {
                      st.callback = null, lt = st.priorityLevel;
                      var Oe = pe(
                        st.expirationTime <= _
                      );
                      if (_ = X.unstable_now(), typeof Oe == "function") {
                        st.callback = Oe, ct(_), V = !0;
                        break t;
                      }
                      st === U(ie) && De(ie), ct(_);
                    } else De(ie);
                    st = U(ie);
                  }
                  if (st !== null) V = !0;
                  else {
                    var S = U(Ve);
                    S !== null && $(
                      ee,
                      S.startTime - _
                    ), V = !1;
                  }
                }
                break e;
              } finally {
                st = null, lt = te, Tl = !1;
              }
              V = void 0;
            }
          } finally {
            V ? qe() : Dt = !1;
          }
        }
      }
      function Se(_, V) {
        var te = _.length;
        _.push(V);
        e: for (; 0 < te; ) {
          var pe = te - 1 >>> 1, Oe = _[pe];
          if (0 < Ne(Oe, V))
            _[pe] = V, _[te] = Oe, te = pe;
          else break e;
        }
      }
      function U(_) {
        return _.length === 0 ? null : _[0];
      }
      function De(_) {
        if (_.length === 0) return null;
        var V = _[0], te = _.pop();
        if (te !== V) {
          _[0] = te;
          e: for (var pe = 0, Oe = _.length, S = Oe >>> 1; pe < S; ) {
            var B = 2 * (pe + 1) - 1, F = _[B], W = B + 1, ve = _[W];
            if (0 > Ne(F, te))
              W < Oe && 0 > Ne(ve, F) ? (_[pe] = ve, _[W] = te, pe = W) : (_[pe] = F, _[B] = te, pe = B);
            else if (W < Oe && 0 > Ne(ve, te))
              _[pe] = ve, _[W] = te, pe = W;
            else break e;
          }
        }
        return V;
      }
      function Ne(_, V) {
        var te = _.sortIndex - V.sortIndex;
        return te !== 0 ? te : _.id - V.id;
      }
      function ct(_) {
        for (var V = U(Ve); V !== null; ) {
          if (V.callback === null) De(Ve);
          else if (V.startTime <= _)
            De(Ve), V.sortIndex = V.expirationTime, Se(ie, V);
          else break;
          V = U(Ve);
        }
      }
      function ee(_) {
        if (Jt = !1, ct(_), !Bt)
          if (U(ie) !== null)
            Bt = !0, Dt || (Dt = !0, qe());
          else {
            var V = U(Ve);
            V !== null && $(
              ee,
              V.startTime - _
            );
          }
      }
      function le() {
        return el ? !0 : !(X.unstable_now() - ye < jt);
      }
      function $(_, V) {
        se = ul(function() {
          _(X.unstable_now());
        }, V);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), X.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var Ce = performance;
        X.unstable_now = function() {
          return Ce.now();
        };
      } else {
        var Q = Date, H = Q.now();
        X.unstable_now = function() {
          return Q.now() - H;
        };
      }
      var ie = [], Ve = [], _t = 1, st = null, lt = 3, Tl = !1, Bt = !1, Jt = !1, el = !1, ul = typeof setTimeout == "function" ? setTimeout : null, _e = typeof clearTimeout == "function" ? clearTimeout : null, Ze = typeof setImmediate < "u" ? setImmediate : null, Dt = !1, se = -1, jt = 5, ye = -1;
      if (typeof Ze == "function")
        var qe = function() {
          Ze(P);
        };
      else if (typeof MessageChannel < "u") {
        var Qt = new MessageChannel(), Yt = Qt.port2;
        Qt.port1.onmessage = P, qe = function() {
          Yt.postMessage(null);
        };
      } else
        qe = function() {
          ul(P, 0);
        };
      X.unstable_IdlePriority = 5, X.unstable_ImmediatePriority = 1, X.unstable_LowPriority = 4, X.unstable_NormalPriority = 3, X.unstable_Profiling = null, X.unstable_UserBlockingPriority = 2, X.unstable_cancelCallback = function(_) {
        _.callback = null;
      }, X.unstable_forceFrameRate = function(_) {
        0 > _ || 125 < _ ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : jt = 0 < _ ? Math.floor(1e3 / _) : 5;
      }, X.unstable_getCurrentPriorityLevel = function() {
        return lt;
      }, X.unstable_next = function(_) {
        switch (lt) {
          case 1:
          case 2:
          case 3:
            var V = 3;
            break;
          default:
            V = lt;
        }
        var te = lt;
        lt = V;
        try {
          return _();
        } finally {
          lt = te;
        }
      }, X.unstable_requestPaint = function() {
        el = !0;
      }, X.unstable_runWithPriority = function(_, V) {
        switch (_) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            _ = 3;
        }
        var te = lt;
        lt = _;
        try {
          return V();
        } finally {
          lt = te;
        }
      }, X.unstable_scheduleCallback = function(_, V, te) {
        var pe = X.unstable_now();
        switch (typeof te == "object" && te !== null ? (te = te.delay, te = typeof te == "number" && 0 < te ? pe + te : pe) : te = pe, _) {
          case 1:
            var Oe = -1;
            break;
          case 2:
            Oe = 250;
            break;
          case 5:
            Oe = 1073741823;
            break;
          case 4:
            Oe = 1e4;
            break;
          default:
            Oe = 5e3;
        }
        return Oe = te + Oe, _ = {
          id: _t++,
          callback: V,
          priorityLevel: _,
          startTime: te,
          expirationTime: Oe,
          sortIndex: -1
        }, te > pe ? (_.sortIndex = te, Se(Ve, _), U(ie) === null && _ === U(Ve) && (Jt ? (_e(se), se = -1) : Jt = !0, $(ee, te - pe))) : (_.sortIndex = Oe, Se(ie, _), Bt || Tl || (Bt = !0, Dt || (Dt = !0, qe()))), _;
      }, X.unstable_shouldYield = le, X.unstable_wrapCallback = function(_) {
        var V = lt;
        return function() {
          var te = lt;
          lt = V;
          try {
            return _.apply(this, arguments);
          } finally {
            lt = te;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(g1)), g1;
}
var G2;
function $2() {
  return G2 || (G2 = 1, process.env.NODE_ENV === "production" ? Qv.exports = CT() : Qv.exports = UT()), Qv.exports;
}
var Lv = { exports: {} }, Ya = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var w2;
function HT() {
  if (w2) return Ya;
  w2 = 1;
  var X = Co;
  function P(le) {
    var $ = "https://react.dev/errors/" + le;
    if (1 < arguments.length) {
      $ += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Ce = 2; Ce < arguments.length; Ce++)
        $ += "&args[]=" + encodeURIComponent(arguments[Ce]);
    }
    return "Minified React error #" + le + "; visit " + $ + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Se() {
  }
  var U = {
    d: {
      f: Se,
      r: function() {
        throw Error(P(522));
      },
      D: Se,
      C: Se,
      L: Se,
      m: Se,
      X: Se,
      S: Se,
      M: Se
    },
    p: 0,
    findDOMNode: null
  }, De = Symbol.for("react.portal");
  function Ne(le, $, Ce) {
    var Q = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: De,
      key: Q == null ? null : "" + Q,
      children: le,
      containerInfo: $,
      implementation: Ce
    };
  }
  var ct = X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function ee(le, $) {
    if (le === "font") return "";
    if (typeof $ == "string")
      return $ === "use-credentials" ? $ : "";
  }
  return Ya.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = U, Ya.createPortal = function(le, $) {
    var Ce = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!$ || $.nodeType !== 1 && $.nodeType !== 9 && $.nodeType !== 11)
      throw Error(P(299));
    return Ne(le, $, null, Ce);
  }, Ya.flushSync = function(le) {
    var $ = ct.T, Ce = U.p;
    try {
      if (ct.T = null, U.p = 2, le) return le();
    } finally {
      ct.T = $, U.p = Ce, U.d.f();
    }
  }, Ya.preconnect = function(le, $) {
    typeof le == "string" && ($ ? ($ = $.crossOrigin, $ = typeof $ == "string" ? $ === "use-credentials" ? $ : "" : void 0) : $ = null, U.d.C(le, $));
  }, Ya.prefetchDNS = function(le) {
    typeof le == "string" && U.d.D(le);
  }, Ya.preinit = function(le, $) {
    if (typeof le == "string" && $ && typeof $.as == "string") {
      var Ce = $.as, Q = ee(Ce, $.crossOrigin), H = typeof $.integrity == "string" ? $.integrity : void 0, ie = typeof $.fetchPriority == "string" ? $.fetchPriority : void 0;
      Ce === "style" ? U.d.S(
        le,
        typeof $.precedence == "string" ? $.precedence : void 0,
        {
          crossOrigin: Q,
          integrity: H,
          fetchPriority: ie
        }
      ) : Ce === "script" && U.d.X(le, {
        crossOrigin: Q,
        integrity: H,
        fetchPriority: ie,
        nonce: typeof $.nonce == "string" ? $.nonce : void 0
      });
    }
  }, Ya.preinitModule = function(le, $) {
    if (typeof le == "string")
      if (typeof $ == "object" && $ !== null) {
        if ($.as == null || $.as === "script") {
          var Ce = ee(
            $.as,
            $.crossOrigin
          );
          U.d.M(le, {
            crossOrigin: Ce,
            integrity: typeof $.integrity == "string" ? $.integrity : void 0,
            nonce: typeof $.nonce == "string" ? $.nonce : void 0
          });
        }
      } else $ == null && U.d.M(le);
  }, Ya.preload = function(le, $) {
    if (typeof le == "string" && typeof $ == "object" && $ !== null && typeof $.as == "string") {
      var Ce = $.as, Q = ee(Ce, $.crossOrigin);
      U.d.L(le, Ce, {
        crossOrigin: Q,
        integrity: typeof $.integrity == "string" ? $.integrity : void 0,
        nonce: typeof $.nonce == "string" ? $.nonce : void 0,
        type: typeof $.type == "string" ? $.type : void 0,
        fetchPriority: typeof $.fetchPriority == "string" ? $.fetchPriority : void 0,
        referrerPolicy: typeof $.referrerPolicy == "string" ? $.referrerPolicy : void 0,
        imageSrcSet: typeof $.imageSrcSet == "string" ? $.imageSrcSet : void 0,
        imageSizes: typeof $.imageSizes == "string" ? $.imageSizes : void 0,
        media: typeof $.media == "string" ? $.media : void 0
      });
    }
  }, Ya.preloadModule = function(le, $) {
    if (typeof le == "string")
      if ($) {
        var Ce = ee($.as, $.crossOrigin);
        U.d.m(le, {
          as: typeof $.as == "string" && $.as !== "script" ? $.as : void 0,
          crossOrigin: Ce,
          integrity: typeof $.integrity == "string" ? $.integrity : void 0
        });
      } else U.d.m(le);
  }, Ya.requestFormReset = function(le) {
    U.d.r(le);
  }, Ya.unstable_batchedUpdates = function(le, $) {
    return le($);
  }, Ya.useFormState = function(le, $, Ce) {
    return ct.H.useFormState(le, $, Ce);
  }, Ya.useFormStatus = function() {
    return ct.H.useHostTransitionStatus();
  }, Ya.version = "19.2.0", Ya;
}
var xa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X2;
function NT() {
  return X2 || (X2 = 1, process.env.NODE_ENV !== "production" && function() {
    function X() {
    }
    function P(Q) {
      return "" + Q;
    }
    function Se(Q, H, ie) {
      var Ve = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        P(Ve);
        var _t = !1;
      } catch {
        _t = !0;
      }
      return _t && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && Ve[Symbol.toStringTag] || Ve.constructor.name || "Object"
      ), P(Ve)), {
        $$typeof: $,
        key: Ve == null ? null : "" + Ve,
        children: Q,
        containerInfo: H,
        implementation: ie
      };
    }
    function U(Q, H) {
      if (Q === "font") return "";
      if (typeof H == "string")
        return H === "use-credentials" ? H : "";
    }
    function De(Q) {
      return Q === null ? "`null`" : Q === void 0 ? "`undefined`" : Q === "" ? "an empty string" : 'something with type "' + typeof Q + '"';
    }
    function Ne(Q) {
      return Q === null ? "`null`" : Q === void 0 ? "`undefined`" : Q === "" ? "an empty string" : typeof Q == "string" ? JSON.stringify(Q) : typeof Q == "number" ? "`" + Q + "`" : 'something with type "' + typeof Q + '"';
    }
    function ct() {
      var Q = Ce.H;
      return Q === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), Q;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var ee = Co, le = {
      d: {
        f: X,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: X,
        C: X,
        L: X,
        m: X,
        X,
        S: X,
        M: X
      },
      p: 0,
      findDOMNode: null
    }, $ = Symbol.for("react.portal"), Ce = ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), xa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = le, xa.createPortal = function(Q, H) {
      var ie = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!H || H.nodeType !== 1 && H.nodeType !== 9 && H.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return Se(Q, H, null, ie);
    }, xa.flushSync = function(Q) {
      var H = Ce.T, ie = le.p;
      try {
        if (Ce.T = null, le.p = 2, Q)
          return Q();
      } finally {
        Ce.T = H, le.p = ie, le.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, xa.preconnect = function(Q, H) {
      typeof Q == "string" && Q ? H != null && typeof H != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        Ne(H)
      ) : H != null && typeof H.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        De(H.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        De(Q)
      ), typeof Q == "string" && (H ? (H = H.crossOrigin, H = typeof H == "string" ? H === "use-credentials" ? H : "" : void 0) : H = null, le.d.C(Q, H));
    }, xa.prefetchDNS = function(Q) {
      if (typeof Q != "string" || !Q)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          De(Q)
        );
      else if (1 < arguments.length) {
        var H = arguments[1];
        typeof H == "object" && H.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          Ne(H)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          Ne(H)
        );
      }
      typeof Q == "string" && le.d.D(Q);
    }, xa.preinit = function(Q, H) {
      if (typeof Q == "string" && Q ? H == null || typeof H != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        Ne(H)
      ) : H.as !== "style" && H.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        Ne(H.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        De(Q)
      ), typeof Q == "string" && H && typeof H.as == "string") {
        var ie = H.as, Ve = U(ie, H.crossOrigin), _t = typeof H.integrity == "string" ? H.integrity : void 0, st = typeof H.fetchPriority == "string" ? H.fetchPriority : void 0;
        ie === "style" ? le.d.S(
          Q,
          typeof H.precedence == "string" ? H.precedence : void 0,
          {
            crossOrigin: Ve,
            integrity: _t,
            fetchPriority: st
          }
        ) : ie === "script" && le.d.X(Q, {
          crossOrigin: Ve,
          integrity: _t,
          fetchPriority: st,
          nonce: typeof H.nonce == "string" ? H.nonce : void 0
        });
      }
    }, xa.preinitModule = function(Q, H) {
      var ie = "";
      if (typeof Q == "string" && Q || (ie += " The `href` argument encountered was " + De(Q) + "."), H !== void 0 && typeof H != "object" ? ie += " The `options` argument encountered was " + De(H) + "." : H && "as" in H && H.as !== "script" && (ie += " The `as` option encountered was " + Ne(H.as) + "."), ie)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          ie
        );
      else
        switch (ie = H && typeof H.as == "string" ? H.as : "script", ie) {
          case "script":
            break;
          default:
            ie = Ne(ie), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              ie,
              Q
            );
        }
      typeof Q == "string" && (typeof H == "object" && H !== null ? (H.as == null || H.as === "script") && (ie = U(
        H.as,
        H.crossOrigin
      ), le.d.M(Q, {
        crossOrigin: ie,
        integrity: typeof H.integrity == "string" ? H.integrity : void 0,
        nonce: typeof H.nonce == "string" ? H.nonce : void 0
      })) : H == null && le.d.M(Q));
    }, xa.preload = function(Q, H) {
      var ie = "";
      if (typeof Q == "string" && Q || (ie += " The `href` argument encountered was " + De(Q) + "."), H == null || typeof H != "object" ? ie += " The `options` argument encountered was " + De(H) + "." : typeof H.as == "string" && H.as || (ie += " The `as` option encountered was " + De(H.as) + "."), ie && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        ie
      ), typeof Q == "string" && typeof H == "object" && H !== null && typeof H.as == "string") {
        ie = H.as;
        var Ve = U(
          ie,
          H.crossOrigin
        );
        le.d.L(Q, ie, {
          crossOrigin: Ve,
          integrity: typeof H.integrity == "string" ? H.integrity : void 0,
          nonce: typeof H.nonce == "string" ? H.nonce : void 0,
          type: typeof H.type == "string" ? H.type : void 0,
          fetchPriority: typeof H.fetchPriority == "string" ? H.fetchPriority : void 0,
          referrerPolicy: typeof H.referrerPolicy == "string" ? H.referrerPolicy : void 0,
          imageSrcSet: typeof H.imageSrcSet == "string" ? H.imageSrcSet : void 0,
          imageSizes: typeof H.imageSizes == "string" ? H.imageSizes : void 0,
          media: typeof H.media == "string" ? H.media : void 0
        });
      }
    }, xa.preloadModule = function(Q, H) {
      var ie = "";
      typeof Q == "string" && Q || (ie += " The `href` argument encountered was " + De(Q) + "."), H !== void 0 && typeof H != "object" ? ie += " The `options` argument encountered was " + De(H) + "." : H && "as" in H && typeof H.as != "string" && (ie += " The `as` option encountered was " + De(H.as) + "."), ie && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        ie
      ), typeof Q == "string" && (H ? (ie = U(
        H.as,
        H.crossOrigin
      ), le.d.m(Q, {
        as: typeof H.as == "string" && H.as !== "script" ? H.as : void 0,
        crossOrigin: ie,
        integrity: typeof H.integrity == "string" ? H.integrity : void 0
      })) : le.d.m(Q));
    }, xa.requestFormReset = function(Q) {
      le.d.r(Q);
    }, xa.unstable_batchedUpdates = function(Q, H) {
      return Q(H);
    }, xa.useFormState = function(Q, H, ie) {
      return ct().useFormState(Q, H, ie);
    }, xa.useFormStatus = function() {
      return ct().useHostTransitionStatus();
    }, xa.version = "19.2.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), xa;
}
var Q2;
function k2() {
  if (Q2) return Lv.exports;
  Q2 = 1;
  function X() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X);
      } catch (P) {
        console.error(P);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (X(), Lv.exports = HT()) : Lv.exports = NT(), Lv.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var L2;
function BT() {
  if (L2) return v0;
  L2 = 1;
  var X = $2(), P = Co, Se = k2();
  function U(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function De(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function Ne(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, n.flags & 4098 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function ct(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function ee(l) {
    if (l.tag === 31) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function le(l) {
    if (Ne(l) !== l)
      throw Error(U(188));
  }
  function $(l) {
    var n = l.alternate;
    if (!n) {
      if (n = Ne(l), n === null) throw Error(U(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (c = s.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return le(s), l;
          if (r === c) return le(s), n;
          r = r.sibling;
        }
        throw Error(U(188));
      }
      if (u.return !== c.return) u = s, c = r;
      else {
        for (var m = !1, v = s.child; v; ) {
          if (v === u) {
            m = !0, u = s, c = r;
            break;
          }
          if (v === c) {
            m = !0, c = s, u = r;
            break;
          }
          v = v.sibling;
        }
        if (!m) {
          for (v = r.child; v; ) {
            if (v === u) {
              m = !0, u = r, c = s;
              break;
            }
            if (v === c) {
              m = !0, c = r, u = s;
              break;
            }
            v = v.sibling;
          }
          if (!m) throw Error(U(189));
        }
      }
      if (u.alternate !== c) throw Error(U(190));
    }
    if (u.tag !== 3) throw Error(U(188));
    return u.stateNode.current === u ? l : n;
  }
  function Ce(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = Ce(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var Q = Object.assign, H = Symbol.for("react.element"), ie = Symbol.for("react.transitional.element"), Ve = Symbol.for("react.portal"), _t = Symbol.for("react.fragment"), st = Symbol.for("react.strict_mode"), lt = Symbol.for("react.profiler"), Tl = Symbol.for("react.consumer"), Bt = Symbol.for("react.context"), Jt = Symbol.for("react.forward_ref"), el = Symbol.for("react.suspense"), ul = Symbol.for("react.suspense_list"), _e = Symbol.for("react.memo"), Ze = Symbol.for("react.lazy"), Dt = Symbol.for("react.activity"), se = Symbol.for("react.memo_cache_sentinel"), jt = Symbol.iterator;
  function ye(l) {
    return l === null || typeof l != "object" ? null : (l = jt && l[jt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var qe = Symbol.for("react.client.reference");
  function Qt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === qe ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case _t:
        return "Fragment";
      case lt:
        return "Profiler";
      case st:
        return "StrictMode";
      case el:
        return "Suspense";
      case ul:
        return "SuspenseList";
      case Dt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Ve:
          return "Portal";
        case Bt:
          return l.displayName || "Context";
        case Tl:
          return (l._context.displayName || "Context") + ".Consumer";
        case Jt:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case _e:
          return n = l.displayName || null, n !== null ? n : Qt(l.type) || "Memo";
        case Ze:
          n = l._payload, l = l._init;
          try {
            return Qt(l(n));
          } catch {
          }
      }
    return null;
  }
  var Yt = Array.isArray, _ = P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, pe = [], Oe = -1;
  function S(l) {
    return { current: l };
  }
  function B(l) {
    0 > Oe || (l.current = pe[Oe], pe[Oe] = null, Oe--);
  }
  function F(l, n) {
    Oe++, pe[Oe] = l.current, l.current = n;
  }
  var W = S(null), ve = S(null), Ge = S(null), Te = S(null);
  function Lt(l, n) {
    switch (F(Ge, n), F(ve, l), F(W, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Ng(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Ng(n), l = sp(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    B(W), F(W, l);
  }
  function mt() {
    B(W), B(ve), B(Ge);
  }
  function qa(l) {
    l.memoizedState !== null && F(Te, l);
    var n = W.current, u = sp(n, l.type);
    n !== u && (F(ve, l), F(W, u));
  }
  function ce(l) {
    ve.current === l && (B(W), B(ve)), Te.current === l && (B(Te), Dr._currentValue = te);
  }
  var _i, Ri;
  function Ga(l) {
    if (_i === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        _i = n && n[1] || "", Ri = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + _i + l + Ri;
  }
  var iu = !1;
  function yt(l, n) {
    if (!l || iu) return "";
    iu = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var K = function() {
                throw Error();
              };
              if (Object.defineProperty(K.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(K, []);
                } catch (w) {
                  var Y = w;
                }
                Reflect.construct(l, [], K);
              } else {
                try {
                  K.call();
                } catch (w) {
                  Y = w;
                }
                l.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (w) {
                Y = w;
              }
              (K = l()) && typeof K.catch == "function" && K.catch(function() {
              });
            }
          } catch (w) {
            if (w && Y && typeof w.stack == "string")
              return [w.stack, Y.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = c.DetermineComponentFrameRoot(), m = r[0], v = r[1];
      if (m && v) {
        var A = m.split(`
`), j = v.split(`
`);
        for (s = c = 0; c < A.length && !A[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < j.length && !j[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === A.length || s === j.length)
          for (c = A.length - 1, s = j.length - 1; 1 <= c && 0 <= s && A[c] !== j[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (A[c] !== j[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || A[c] !== j[s]) {
                  var L = `
` + A[c].replace(" at new ", " at ");
                  return l.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", l.displayName)), L;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      iu = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Ga(u) : "";
  }
  function ea(l, n) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ga(l.type);
      case 16:
        return Ga("Lazy");
      case 13:
        return l.child !== n && n !== null ? Ga("Suspense Fallback") : Ga("Suspense");
      case 19:
        return Ga("SuspenseList");
      case 0:
      case 15:
        return yt(l.type, !1);
      case 11:
        return yt(l.type.render, !1);
      case 1:
        return yt(l.type, !0);
      case 31:
        return Ga("Activity");
      default:
        return "";
    }
  }
  function vc(l) {
    try {
      var n = "", u = null;
      do
        n += ea(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (c) {
      return `
Error generating stack: ` + c.message + `
` + c.stack;
    }
  }
  var ds = Object.prototype.hasOwnProperty, re = X.unstable_scheduleCallback, Mi = X.unstable_cancelCallback, cu = X.unstable_shouldYield, Sc = X.unstable_requestPaint, gl = X.unstable_now, Pr = X.unstable_getCurrentPriorityLevel, Uo = X.unstable_ImmediatePriority, Ho = X.unstable_UserBlockingPriority, Cn = X.unstable_NormalPriority, ed = X.unstable_LowPriority, No = X.unstable_IdlePriority, hs = X.log, bc = X.unstable_setDisableYieldValue, dn = null, Al = null;
  function wa(l) {
    if (typeof hs == "function" && bc(l), Al && typeof Al.setStrictMode == "function")
      try {
        Al.setStrictMode(dn, l);
      } catch {
      }
  }
  var Ul = Math.clz32 ? Math.clz32 : M, Ci = Math.log, g = Math.LN2;
  function M(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Ci(l) / g | 0) | 0;
  }
  var I = 256, ae = 262144, de = 4194304;
  function Re(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
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
        return 64;
      case 128:
        return 128;
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
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function he(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var s = 0, r = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var v = c & 134217727;
    return v !== 0 ? (c = v & ~r, c !== 0 ? s = Re(c) : (m &= v, m !== 0 ? s = Re(m) : u || (u = v & ~l, u !== 0 && (s = Re(u))))) : (v = c & ~r, v !== 0 ? s = Re(v) : m !== 0 ? s = Re(m) : u || (u = c & ~l, u !== 0 && (s = Re(u)))), s === 0 ? 0 : n !== 0 && n !== s && !(n & r) && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function Pe(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function we(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
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
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ta() {
    var l = de;
    return de <<= 1, !(de & 62914560) && (de = 4194304), l;
  }
  function hn(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function Ui(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Bo(l, n, u, c, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var v = l.entanglements, A = l.expirationTimes, j = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var L = 31 - Ul(u), K = 1 << L;
      v[L] = 0, A[L] = -1;
      var Y = j[L];
      if (Y !== null)
        for (j[L] = null, L = 0; L < Y.length; L++) {
          var w = Y[L];
          w !== null && (w.lane &= -536870913);
        }
      u &= ~K;
    }
    c !== 0 && ms(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function ms(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Ul(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 261930;
  }
  function ou(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Ul(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function Xa(l, n) {
    var u = n & -n;
    return u = u & 42 ? 1 : td(u), u & (l.suspendedLanes | n) ? 0 : u;
  }
  function td(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function bm(l) {
    return l &= -l, 2 < l ? 8 < l ? l & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function ld() {
    var l = V.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : _r(l.type));
  }
  function Em(l, n) {
    var u = V.p;
    try {
      return V.p = l, n();
    } finally {
      V.p = u;
    }
  }
  var Un = Math.random().toString(36).slice(2), Rt = "__reactFiber$" + Un, sa = "__reactProps$" + Un, Hi = "__reactContainer$" + Un, ad = "__reactEvents$" + Un, Tm = "__reactListeners$" + Un, E0 = "__reactHandles$" + Un, Am = "__reactResources$" + Un, fu = "__reactMarker$" + Un;
  function nd(l) {
    delete l[Rt], delete l[sa], delete l[ad], delete l[Tm], delete l[E0];
  }
  function Ec(l) {
    var n = l[Rt];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Hi] || u[Rt]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = In(l); l !== null; ) {
            if (u = l[Rt]) return u;
            l = In(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Tc(l) {
    if (l = l[Rt] || l[Hi]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function jo(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(U(33));
  }
  function Ac(l) {
    var n = l[Am];
    return n || (n = l[Am] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Et(l) {
    l[fu] = !0;
  }
  var Oc = /* @__PURE__ */ new Set(), Ni = {};
  function Bi(l, n) {
    su(l, n), su(l + "Capture", n);
  }
  function su(l, n) {
    for (Ni[l] = n, l = 0; l < n.length; l++)
      Oc.add(n[l]);
  }
  var ud = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), id = {}, Yo = {};
  function xo(l) {
    return ds.call(Yo, l) ? !0 : ds.call(id, l) ? !1 : ud.test(l) ? Yo[l] = !0 : (id[l] = !0, !1);
  }
  function qo(l, n, u) {
    if (xo(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function cd(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function Iu(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  function Qa(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function od(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Om(l, n, u) {
    var c = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    );
    if (!l.hasOwnProperty(n) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
      var s = c.get, r = c.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(m) {
          u = "" + m, r.call(this, m);
        }
      }), Object.defineProperty(l, n, {
        enumerable: c.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(m) {
          u = "" + m;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function fd(l) {
    if (!l._valueTracker) {
      var n = od(l) ? "checked" : "value";
      l._valueTracker = Om(
        l,
        n,
        "" + l[n]
      );
    }
  }
  function zm(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = od(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function ys(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Zv = /[\n"\\]/g;
  function La(l) {
    return l.replace(
      Zv,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ps(l, n, u, c, s, r, m, v) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Qa(n)) : l.value !== "" + Qa(n) && (l.value = "" + Qa(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? zc(l, m, Qa(n)) : u != null ? zc(l, m, Qa(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? l.name = "" + Qa(v) : l.removeAttribute("name");
  }
  function gs(l, n, u, c, s, r, m, v) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null)) {
        fd(l);
        return;
      }
      u = u != null ? "" + Qa(u) : "", n = n != null ? "" + Qa(n) : u, v || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = v ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), fd(l);
  }
  function zc(l, n, u) {
    n === "number" && ys(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Go(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Qa(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Dm(l, n, u) {
    if (n != null && (n = "" + Qa(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Qa(u) : "";
  }
  function _m(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(U(92));
        if (Yt(c)) {
          if (1 < c.length) throw Error(U(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = Qa(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c), fd(l);
  }
  function ru(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var T0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function A0(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || T0.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function O0(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(U(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && A0(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && A0(l, r, n[r]);
  }
  function Rm(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var Jv = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), vs = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function mn(l) {
    return vs.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Hn() {
  }
  var sd = null;
  function rd(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var du = null, Dc = null;
  function Ss(l) {
    var n = Tc(l);
    if (n && (l = n.stateNode)) {
      var u = l[sa] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (ps(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + La(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[sa] || null;
                if (!s) throw Error(U(90));
                ps(
                  c,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && zm(c);
          }
          break e;
        case "textarea":
          Dm(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && Go(l, !!u.multiple, n, !1);
      }
    }
  }
  var wo = !1;
  function Mm(l, n, u) {
    if (wo) return l(n, u);
    wo = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (wo = !1, (du !== null || Dc !== null) && (Af(), du && (n = du, l = Dc, Dc = du = null, Ss(n), l)))
        for (n = 0; n < l.length; n++) Ss(l[n]);
    }
  }
  function Hl(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[sa] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
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
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        U(231, n, typeof u)
      );
    return u;
  }
  var Pu = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), bs = !1;
  if (Pu)
    try {
      var Xo = {};
      Object.defineProperty(Xo, "passive", {
        get: function() {
          bs = !0;
        }
      }), window.addEventListener("test", Xo, Xo), window.removeEventListener("test", Xo, Xo);
    } catch {
      bs = !1;
    }
  var ei = null, Cm = null, dd = null;
  function Um() {
    if (dd) return dd;
    var l, n = Cm, u = n.length, c, s = "value" in ei ? ei.value : ei.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === s[r - c]; c++) ;
    return dd = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function hd(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Es() {
    return !0;
  }
  function z0() {
    return !1;
  }
  function Kl(l) {
    function n(u, c, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var v in l)
        l.hasOwnProperty(v) && (u = l[v], this[v] = u ? u(r) : r[v]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? Es : z0, this.isPropagationStopped = z0, this;
    }
    return Q(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Es);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Es);
      },
      persist: function() {
      },
      isPersistent: Es
    }), n;
  }
  var ji = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ts = Kl(ji), Qo = Q({}, ji, { view: 0, detail: 0 }), Kv = Kl(Qo), Hm, Nm, As, md = Q({}, Qo, {
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
    getModifierState: yn,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== As && (As && l.type === "mousemove" ? (Hm = l.screenX - As.screenX, Nm = l.screenY - As.screenY) : Nm = Hm = 0, As = l), Hm);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Nm;
    }
  }), Lo = Kl(md), D0 = Q({}, md, { dataTransfer: 0 }), _0 = Kl(D0), R0 = Q({}, Qo, { relatedTarget: 0 }), yd = Kl(R0), Bm = Q({}, ji, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), M0 = Kl(Bm), _c = Q({}, ji, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Rc = Kl(_c), Nn = Q({}, ji, { data: 0 }), C0 = Kl(Nn), jm = {
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
  }, hu = {
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
  }, U0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Bn(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = U0[l]) ? !!n[l] : !1;
  }
  function yn() {
    return Bn;
  }
  var pd = Q({}, Qo, {
    key: function(l) {
      if (l.key) {
        var n = jm[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = hd(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? hu[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: yn,
    charCode: function(l) {
      return l.type === "keypress" ? hd(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? hd(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), gd = Kl(pd), Ym = Q({}, md, {
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
  }), jn = Kl(Ym), $v = Q({}, Qo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: yn
  }), H0 = Kl($v), N0 = Q({}, ji, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), kv = Kl(N0), xm = Q({}, md, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Wv = Kl(xm), B0 = Q({}, ji, {
    newState: 0,
    oldState: 0
  }), qm = Kl(B0), vd = [9, 13, 27, 32], Vo = Pu && "CompositionEvent" in window, Mc = null;
  Pu && "documentMode" in document && (Mc = document.documentMode);
  var la = Pu && "TextEvent" in window && !Mc, Gm = Pu && (!Vo || Mc && 8 < Mc && 11 >= Mc), Os = " ", Yi = !1;
  function Sd(l, n) {
    switch (l) {
      case "keyup":
        return vd.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function wm(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Cc = !1;
  function j0(l, n) {
    switch (l) {
      case "compositionend":
        return wm(n);
      case "keypress":
        return n.which !== 32 ? null : (Yi = !0, Os);
      case "textInput":
        return l = n.data, l === Os && Yi ? null : l;
      default:
        return null;
    }
  }
  function Fv(l, n) {
    if (Cc)
      return l === "compositionend" || !Vo && Sd(l, n) ? (l = Um(), dd = Cm = ei = null, Cc = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Gm && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Xm = {
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
  function mu(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Xm[l.type] : n === "textarea";
  }
  function Qm(l, n, u, c) {
    du ? Dc ? Dc.push(c) : Dc = [c] : du = c, n = br(n, "onChange"), 0 < n.length && (u = new Ts(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var Uc = null, xi = null;
  function Hc(l) {
    Cg(l, 0);
  }
  function Zo(l) {
    var n = jo(l);
    if (zm(n)) return l;
  }
  function Lm(l, n) {
    if (l === "change") return n;
  }
  var bd = !1;
  if (Pu) {
    var ra;
    if (Pu) {
      var Yn = "oninput" in document;
      if (!Yn) {
        var Vm = document.createElement("div");
        Vm.setAttribute("oninput", "return;"), Yn = typeof Vm.oninput == "function";
      }
      ra = Yn;
    } else ra = !1;
    bd = ra && (!document.documentMode || 9 < document.documentMode);
  }
  function Ed() {
    Uc && (Uc.detachEvent("onpropertychange", Td), xi = Uc = null);
  }
  function Td(l) {
    if (l.propertyName === "value" && Zo(xi)) {
      var n = [];
      Qm(
        n,
        xi,
        l,
        rd(l)
      ), Mm(Hc, n);
    }
  }
  function Y0(l, n, u) {
    l === "focusin" ? (Ed(), Uc = n, xi = u, Uc.attachEvent("onpropertychange", Td)) : l === "focusout" && Ed();
  }
  function x0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Zo(xi);
  }
  function qi(l, n) {
    if (l === "click") return Zo(n);
  }
  function Nc(l, n) {
    if (l === "input" || l === "change")
      return Zo(n);
  }
  function q0(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var aa = typeof Object.is == "function" ? Object.is : q0;
  function pn(l, n) {
    if (aa(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!ds.call(n, s) || !aa(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function Zm(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Jm(l, n) {
    var u = Zm(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Zm(u);
    }
  }
  function Bc(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Bc(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Gi(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = ys(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = ys(l.document);
    }
    return n;
  }
  function zs(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var Ds = Pu && "documentMode" in document && 11 >= document.documentMode, wi = null, Jo = null, gn = null, xn = !1;
  function Ad(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    xn || wi == null || wi !== ys(c) || (c = wi, "selectionStart" in c && zs(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), gn && pn(gn, c) || (gn = c, c = br(Jo, "onSelect"), 0 < c.length && (n = new Ts(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = wi)));
  }
  function ti(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var qn = {
    animationend: ti("Animation", "AnimationEnd"),
    animationiteration: ti("Animation", "AnimationIteration"),
    animationstart: ti("Animation", "AnimationStart"),
    transitionrun: ti("Transition", "TransitionRun"),
    transitionstart: ti("Transition", "TransitionStart"),
    transitioncancel: ti("Transition", "TransitionCancel"),
    transitionend: ti("Transition", "TransitionEnd")
  }, Ko = {}, Xi = {};
  Pu && (Xi = document.createElement("div").style, "AnimationEvent" in window || (delete qn.animationend.animation, delete qn.animationiteration.animation, delete qn.animationstart.animation), "TransitionEvent" in window || delete qn.transitionend.transition);
  function vt(l) {
    if (Ko[l]) return Ko[l];
    if (!qn[l]) return l;
    var n = qn[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Xi)
        return Ko[l] = n[u];
    return l;
  }
  var _s = vt("animationend"), Km = vt("animationiteration"), Od = vt("animationstart"), jc = vt("transitionrun"), Rs = vt("transitionstart"), yu = vt("transitioncancel"), G0 = vt("transitionend"), pu = /* @__PURE__ */ new Map(), $o = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  $o.push("scrollEnd");
  function da(l, n) {
    pu.set(l, n), Bi(n, [l]);
  }
  var Yc = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, Kt = [], Nl = 0, vn = 0;
  function Va() {
    for (var l = Nl, n = vn = Nl = 0; n < l; ) {
      var u = Kt[n];
      Kt[n++] = null;
      var c = Kt[n];
      Kt[n++] = null;
      var s = Kt[n];
      Kt[n++] = null;
      var r = Kt[n];
      if (Kt[n++] = null, c !== null && s !== null) {
        var m = c.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
      }
      r !== 0 && zd(u, s, r);
    }
  }
  function Za(l, n, u, c) {
    Kt[Nl++] = l, Kt[Nl++] = n, Kt[Nl++] = u, Kt[Nl++] = c, vn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function Sn(l, n, u, c) {
    return Za(l, n, u, c), Ms(l);
  }
  function li(l, n) {
    return Za(l, null, null, n), Ms(l);
  }
  function zd(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Ul(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
  }
  function Ms(l) {
    if (50 < Tf)
      throw Tf = 0, rr = null, Error(U(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ha = {};
  function w0(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function il(l, n, u, c) {
    return new w0(l, n, u, c);
  }
  function xc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function ai(l, n) {
    var u = l.alternate;
    return u === null ? (u = il(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function $m(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function Dd(l, n, u, c, s, r) {
    var m = 0;
    if (c = l, typeof l == "function") xc(l) && (m = 1);
    else if (typeof l == "string")
      m = gp(
        l,
        u,
        W.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case Dt:
          return l = il(31, u, n, s), l.elementType = Dt, l.lanes = r, l;
        case _t:
          return ni(u.children, s, r, n);
        case st:
          m = 8, s |= 24;
          break;
        case lt:
          return l = il(12, u, n, s | 2), l.elementType = lt, l.lanes = r, l;
        case el:
          return l = il(13, u, n, s), l.elementType = el, l.lanes = r, l;
        case ul:
          return l = il(19, u, n, s), l.elementType = ul, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Bt:
                m = 10;
                break e;
              case Tl:
                m = 9;
                break e;
              case Jt:
                m = 11;
                break e;
              case _e:
                m = 14;
                break e;
              case Ze:
                m = 16, c = null;
                break e;
            }
          m = 29, u = Error(
            U(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = il(m, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function ni(l, n, u, c) {
    return l = il(7, l, c, n), l.lanes = u, l;
  }
  function ko(l, n, u) {
    return l = il(6, l, null, n), l.lanes = u, l;
  }
  function km(l) {
    var n = il(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function _d(l, n, u) {
    return n = il(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var Wm = /* @__PURE__ */ new WeakMap();
  function Ja(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = Wm.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: vc(n)
      }, Wm.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: vc(n)
    };
  }
  var Ka = [], qc = 0, Cs = null, rl = 0, _a = [], ma = 0, Gn = null, Ra = 1, wn = "";
  function bn(l, n) {
    Ka[qc++] = rl, Ka[qc++] = Cs, Cs = l, rl = n;
  }
  function Fm(l, n, u) {
    _a[ma++] = Ra, _a[ma++] = wn, _a[ma++] = Gn, Gn = l;
    var c = Ra;
    l = wn;
    var s = 32 - Ul(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - Ul(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (c & (1 << m) - 1).toString(32), c >>= m, s -= m, Ra = 1 << 32 - Ul(n) + s | u << s | c, wn = r + l;
    } else
      Ra = 1 << r | u << s | c, wn = l;
  }
  function Wo(l) {
    l.return !== null && (bn(l, 1), Fm(l, 1, 0));
  }
  function Rd(l) {
    for (; l === Cs; )
      Cs = Ka[--qc], Ka[qc] = null, rl = Ka[--qc], Ka[qc] = null;
    for (; l === Gn; )
      Gn = _a[--ma], _a[ma] = null, wn = _a[--ma], _a[ma] = null, Ra = _a[--ma], _a[ma] = null;
  }
  function Us(l, n) {
    _a[ma++] = Ra, _a[ma++] = wn, _a[ma++] = Gn, Ra = n.id, wn = n.overflow, Gn = l;
  }
  var Bl = null, xt = null, nt = !1, gu = null, Ol = !1, vu = Error(U(519));
  function En(l) {
    var n = Error(
      U(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Io(Ja(n, l)), vu;
  }
  function Hs(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[Rt] = l, n[sa] = c, u) {
      case "dialog":
        at("cancel", n), at("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        at("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Rf.length; u++)
          at(Rf[u], n);
        break;
      case "source":
        at("error", n);
        break;
      case "img":
      case "image":
      case "link":
        at("error", n), at("load", n);
        break;
      case "details":
        at("toggle", n);
        break;
      case "input":
        at("invalid", n), gs(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        );
        break;
      case "select":
        at("invalid", n);
        break;
      case "textarea":
        at("invalid", n), _m(n, c.value, c.defaultValue, c.children);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || ip(n.textContent, u) ? (c.popover != null && (at("beforetoggle", n), at("toggle", n)), c.onScroll != null && at("scroll", n), c.onScrollEnd != null && at("scrollend", n), c.onClick != null && (n.onclick = Hn), n = !0) : n = !1, n || En(l, !0);
  }
  function Fo(l) {
    for (Bl = l.return; Bl; )
      switch (Bl.tag) {
        case 5:
        case 31:
        case 13:
          Ol = !1;
          return;
        case 27:
        case 3:
          Ol = !0;
          return;
        default:
          Bl = Bl.return;
      }
  }
  function Su(l) {
    if (l !== Bl) return !1;
    if (!nt) return Fo(l), nt = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Cf(l.type, l.memoizedProps)), u = !u), u && xt && En(l), Fo(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(U(317));
      xt = Uh(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(U(317));
      xt = Uh(l);
    } else
      n === 27 ? (n = xt, Fn(l.type) ? (l = Ar, Ar = null, xt = l) : xt = n) : xt = Bl ? Oa(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Qi() {
    xt = Bl = null, nt = !1;
  }
  function Im() {
    var l = gu;
    return l !== null && (al === null ? al = l : al.push.apply(
      al,
      l
    ), gu = null), l;
  }
  function Io(l) {
    gu === null ? gu = [l] : gu.push(l);
  }
  var Md = S(null), ui = null, Xn = null;
  function ya(l, n, u) {
    F(Md, n._currentValue), n._currentValue = u;
  }
  function Qn(l) {
    l._currentValue = Md.current, B(Md);
  }
  function Cd(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function bu(l, n, u, c) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var m = s.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var v = r;
          r = s;
          for (var A = 0; A < n.length; A++)
            if (v.context === n[A]) {
              r.lanes |= u, v = r.alternate, v !== null && (v.lanes |= u), Cd(
                r.return,
                u,
                l
              ), c || (m = null);
              break e;
            }
          r = v.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(U(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), Cd(m, u, l), m = null;
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (s = m.sibling, s !== null) {
            s.return = m.return, m = s;
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function jl(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if (s.flags & 524288) r = !0;
        else if (s.flags & 262144) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(U(387));
        if (m = m.memoizedProps, m !== null) {
          var v = s.type;
          aa(s.pendingProps.value, m.value) || (l !== null ? l.push(v) : l = [v]);
        }
      } else if (s === Te.current) {
        if (m = s.alternate, m === null) throw Error(U(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(Dr) : l = [Dr]);
      }
      s = s.return;
    }
    l !== null && bu(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function Gc(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!aa(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function je(l) {
    ui = l, Xn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function k(l) {
    return Ns(ui, l);
  }
  function ii(l, n) {
    return ui === null && je(l), Ns(l, n);
  }
  function Ns(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, Xn === null) {
      if (l === null) throw Error(U(308));
      Xn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else Xn = Xn.next = n;
    return u;
  }
  var cl = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, Pm = X.unstable_scheduleCallback, ey = X.unstable_NormalPriority, dl = {
    $$typeof: Bt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Bs() {
    return {
      controller: new cl(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function js(l) {
    l.refCount--, l.refCount === 0 && Pm(ey, function() {
      l.controller.abort();
    });
  }
  var wc = null, Ys = 0, Li = 0, vl = null;
  function Tt(l, n) {
    if (wc === null) {
      var u = wc = [];
      Ys = 0, Li = Ah(), vl = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return Ys++, n.then(xs, xs), n;
  }
  function xs() {
    if (--Ys === 0 && wc !== null) {
      vl !== null && (vl.status = "fulfilled");
      var l = wc;
      wc = null, Li = 0, vl = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function qs(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (c.status = "rejected", c.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), c;
  }
  var ci = _.S;
  _.S = function(l, n) {
    Ky = gl(), typeof n == "object" && n !== null && typeof n.then == "function" && Tt(l, n), ci !== null && ci(l, n);
  };
  var $a = S(null);
  function ka() {
    var l = $a.current;
    return l !== null ? l : Ct.pooledCache;
  }
  function Po(l, n) {
    n === null ? F($a, $a.current) : F($a, n.pool);
  }
  function Xc() {
    var l = ka();
    return l === null ? null : { parent: dl._currentValue, pool: l };
  }
  var Vi = Error(U(460)), Qc = Error(U(474)), ef = Error(U(542)), Lc = { then: function() {
  } };
  function ty(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function ly(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Hn, Hn), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, Ud(l), l;
      default:
        if (typeof n.status == "string") n.then(Hn, Hn);
        else {
          if (l = Ct, l !== null && 100 < l.shellSuspendCounter)
            throw Error(U(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, Ud(l), l;
        }
        throw Ji = n, Vi;
    }
  }
  function Zi(l) {
    try {
      var n = l._init;
      return n(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Ji = u, Vi) : u;
    }
  }
  var Ji = null;
  function ay() {
    if (Ji === null) throw Error(U(459));
    var l = Ji;
    return Ji = null, l;
  }
  function Ud(l) {
    if (l === Vi || l === ef)
      throw Error(U(483));
  }
  var Ki = null, Vc = 0;
  function Gs(l) {
    var n = Vc;
    return Vc += 1, Ki === null && (Ki = []), ly(Ki, l, n);
  }
  function tf(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function ws(l, n) {
    throw n.$$typeof === H ? Error(U(525)) : (l = Object.prototype.toString.call(n), Error(
      U(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function X0(l) {
    function n(C, D) {
      if (l) {
        var N = C.deletions;
        N === null ? (C.deletions = [D], C.flags |= 16) : N.push(D);
      }
    }
    function u(C, D) {
      if (!l) return null;
      for (; D !== null; )
        n(C, D), D = D.sibling;
      return null;
    }
    function c(C) {
      for (var D = /* @__PURE__ */ new Map(); C !== null; )
        C.key !== null ? D.set(C.key, C) : D.set(C.index, C), C = C.sibling;
      return D;
    }
    function s(C, D) {
      return C = ai(C, D), C.index = 0, C.sibling = null, C;
    }
    function r(C, D, N) {
      return C.index = N, l ? (N = C.alternate, N !== null ? (N = N.index, N < D ? (C.flags |= 67108866, D) : N) : (C.flags |= 67108866, D)) : (C.flags |= 1048576, D);
    }
    function m(C) {
      return l && C.alternate === null && (C.flags |= 67108866), C;
    }
    function v(C, D, N, J) {
      return D === null || D.tag !== 6 ? (D = ko(N, C.mode, J), D.return = C, D) : (D = s(D, N), D.return = C, D);
    }
    function A(C, D, N, J) {
      var be = N.type;
      return be === _t ? L(
        C,
        D,
        N.props.children,
        J,
        N.key
      ) : D !== null && (D.elementType === be || typeof be == "object" && be !== null && be.$$typeof === Ze && Zi(be) === D.type) ? (D = s(D, N.props), tf(D, N), D.return = C, D) : (D = Dd(
        N.type,
        N.key,
        N.props,
        null,
        C.mode,
        J
      ), tf(D, N), D.return = C, D);
    }
    function j(C, D, N, J) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== N.containerInfo || D.stateNode.implementation !== N.implementation ? (D = _d(N, C.mode, J), D.return = C, D) : (D = s(D, N.children || []), D.return = C, D);
    }
    function L(C, D, N, J, be) {
      return D === null || D.tag !== 7 ? (D = ni(
        N,
        C.mode,
        J,
        be
      ), D.return = C, D) : (D = s(D, N), D.return = C, D);
    }
    function K(C, D, N) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return D = ko(
          "" + D,
          C.mode,
          N
        ), D.return = C, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case ie:
            return N = Dd(
              D.type,
              D.key,
              D.props,
              null,
              C.mode,
              N
            ), tf(N, D), N.return = C, N;
          case Ve:
            return D = _d(
              D,
              C.mode,
              N
            ), D.return = C, D;
          case Ze:
            return D = Zi(D), K(C, D, N);
        }
        if (Yt(D) || ye(D))
          return D = ni(
            D,
            C.mode,
            N,
            null
          ), D.return = C, D;
        if (typeof D.then == "function")
          return K(C, Gs(D), N);
        if (D.$$typeof === Bt)
          return K(
            C,
            ii(C, D),
            N
          );
        ws(C, D);
      }
      return null;
    }
    function Y(C, D, N, J) {
      var be = D !== null ? D.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return be !== null ? null : v(C, D, "" + N, J);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case ie:
            return N.key === be ? A(C, D, N, J) : null;
          case Ve:
            return N.key === be ? j(C, D, N, J) : null;
          case Ze:
            return N = Zi(N), Y(C, D, N, J);
        }
        if (Yt(N) || ye(N))
          return be !== null ? null : L(C, D, N, J, null);
        if (typeof N.then == "function")
          return Y(
            C,
            D,
            Gs(N),
            J
          );
        if (N.$$typeof === Bt)
          return Y(
            C,
            D,
            ii(C, N),
            J
          );
        ws(C, N);
      }
      return null;
    }
    function w(C, D, N, J, be) {
      if (typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint")
        return C = C.get(N) || null, v(D, C, "" + J, be);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case ie:
            return C = C.get(
              J.key === null ? N : J.key
            ) || null, A(D, C, J, be);
          case Ve:
            return C = C.get(
              J.key === null ? N : J.key
            ) || null, j(D, C, J, be);
          case Ze:
            return J = Zi(J), w(
              C,
              D,
              N,
              J,
              be
            );
        }
        if (Yt(J) || ye(J))
          return C = C.get(N) || null, L(D, C, J, be, null);
        if (typeof J.then == "function")
          return w(
            C,
            D,
            N,
            Gs(J),
            be
          );
        if (J.$$typeof === Bt)
          return w(
            C,
            D,
            N,
            ii(D, J),
            be
          );
        ws(D, J);
      }
      return null;
    }
    function fe(C, D, N, J) {
      for (var be = null, dt = null, me = D, Xe = D = 0, Ke = null; me !== null && Xe < N.length; Xe++) {
        me.index > Xe ? (Ke = me, me = null) : Ke = me.sibling;
        var gt = Y(
          C,
          me,
          N[Xe],
          J
        );
        if (gt === null) {
          me === null && (me = Ke);
          break;
        }
        l && me && gt.alternate === null && n(C, me), D = r(gt, D, Xe), dt === null ? be = gt : dt.sibling = gt, dt = gt, me = Ke;
      }
      if (Xe === N.length)
        return u(C, me), nt && bn(C, Xe), be;
      if (me === null) {
        for (; Xe < N.length; Xe++)
          me = K(C, N[Xe], J), me !== null && (D = r(
            me,
            D,
            Xe
          ), dt === null ? be = me : dt.sibling = me, dt = me);
        return nt && bn(C, Xe), be;
      }
      for (me = c(me); Xe < N.length; Xe++)
        Ke = w(
          me,
          C,
          Xe,
          N[Xe],
          J
        ), Ke !== null && (l && Ke.alternate !== null && me.delete(
          Ke.key === null ? Xe : Ke.key
        ), D = r(
          Ke,
          D,
          Xe
        ), dt === null ? be = Ke : dt.sibling = Ke, dt = Ke);
      return l && me.forEach(function(eu) {
        return n(C, eu);
      }), nt && bn(C, Xe), be;
    }
    function ze(C, D, N, J) {
      if (N == null) throw Error(U(151));
      for (var be = null, dt = null, me = D, Xe = D = 0, Ke = null, gt = N.next(); me !== null && !gt.done; Xe++, gt = N.next()) {
        me.index > Xe ? (Ke = me, me = null) : Ke = me.sibling;
        var eu = Y(C, me, gt.value, J);
        if (eu === null) {
          me === null && (me = Ke);
          break;
        }
        l && me && eu.alternate === null && n(C, me), D = r(eu, D, Xe), dt === null ? be = eu : dt.sibling = eu, dt = eu, me = Ke;
      }
      if (gt.done)
        return u(C, me), nt && bn(C, Xe), be;
      if (me === null) {
        for (; !gt.done; Xe++, gt = N.next())
          gt = K(C, gt.value, J), gt !== null && (D = r(gt, D, Xe), dt === null ? be = gt : dt.sibling = gt, dt = gt);
        return nt && bn(C, Xe), be;
      }
      for (me = c(me); !gt.done; Xe++, gt = N.next())
        gt = w(me, C, Xe, gt.value, J), gt !== null && (l && gt.alternate !== null && me.delete(gt.key === null ? Xe : gt.key), D = r(gt, D, Xe), dt === null ? be = gt : dt.sibling = gt, dt = gt);
      return l && me.forEach(function(Zg) {
        return n(C, Zg);
      }), nt && bn(C, Xe), be;
    }
    function Ht(C, D, N, J) {
      if (typeof N == "object" && N !== null && N.type === _t && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case ie:
            e: {
              for (var be = N.key; D !== null; ) {
                if (D.key === be) {
                  if (be = N.type, be === _t) {
                    if (D.tag === 7) {
                      u(
                        C,
                        D.sibling
                      ), J = s(
                        D,
                        N.props.children
                      ), J.return = C, C = J;
                      break e;
                    }
                  } else if (D.elementType === be || typeof be == "object" && be !== null && be.$$typeof === Ze && Zi(be) === D.type) {
                    u(
                      C,
                      D.sibling
                    ), J = s(D, N.props), tf(J, N), J.return = C, C = J;
                    break e;
                  }
                  u(C, D);
                  break;
                } else n(C, D);
                D = D.sibling;
              }
              N.type === _t ? (J = ni(
                N.props.children,
                C.mode,
                J,
                N.key
              ), J.return = C, C = J) : (J = Dd(
                N.type,
                N.key,
                N.props,
                null,
                C.mode,
                J
              ), tf(J, N), J.return = C, C = J);
            }
            return m(C);
          case Ve:
            e: {
              for (be = N.key; D !== null; ) {
                if (D.key === be)
                  if (D.tag === 4 && D.stateNode.containerInfo === N.containerInfo && D.stateNode.implementation === N.implementation) {
                    u(
                      C,
                      D.sibling
                    ), J = s(D, N.children || []), J.return = C, C = J;
                    break e;
                  } else {
                    u(C, D);
                    break;
                  }
                else n(C, D);
                D = D.sibling;
              }
              J = _d(N, C.mode, J), J.return = C, C = J;
            }
            return m(C);
          case Ze:
            return N = Zi(N), Ht(
              C,
              D,
              N,
              J
            );
        }
        if (Yt(N))
          return fe(
            C,
            D,
            N,
            J
          );
        if (ye(N)) {
          if (be = ye(N), typeof be != "function") throw Error(U(150));
          return N = be.call(N), ze(
            C,
            D,
            N,
            J
          );
        }
        if (typeof N.then == "function")
          return Ht(
            C,
            D,
            Gs(N),
            J
          );
        if (N.$$typeof === Bt)
          return Ht(
            C,
            D,
            ii(C, N),
            J
          );
        ws(C, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, D !== null && D.tag === 6 ? (u(C, D.sibling), J = s(D, N), J.return = C, C = J) : (u(C, D), J = ko(N, C.mode, J), J.return = C, C = J), m(C)) : u(C, D);
    }
    return function(C, D, N, J) {
      try {
        Vc = 0;
        var be = Ht(
          C,
          D,
          N,
          J
        );
        return Ki = null, be;
      } catch (me) {
        if (me === Vi || me === ef) throw me;
        var dt = il(29, me, null, C.mode);
        return dt.lanes = J, dt.return = C, dt;
      } finally {
      }
    };
  }
  var $i = X0(!0), ny = X0(!1), oi = !1;
  function Xs(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Hd(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function fi(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Wa(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, pt & 2) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = Ms(l), zd(l, null, u), n;
    }
    return Za(l, c, n, u), Ms(l);
  }
  function ki(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, ou(l, u);
    }
  }
  function Nd(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = m : r = r.next = m, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var uy = !1;
  function Wi() {
    if (uy) {
      var l = vl;
      if (l !== null) throw l;
    }
  }
  function Eu(l, n, u, c) {
    uy = !1;
    var s = l.updateQueue;
    oi = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, v = s.shared.pending;
    if (v !== null) {
      s.shared.pending = null;
      var A = v, j = A.next;
      A.next = null, m === null ? r = j : m.next = j, m = A;
      var L = l.alternate;
      L !== null && (L = L.updateQueue, v = L.lastBaseUpdate, v !== m && (v === null ? L.firstBaseUpdate = j : v.next = j, L.lastBaseUpdate = A));
    }
    if (r !== null) {
      var K = s.baseState;
      m = 0, L = j = A = null, v = r;
      do {
        var Y = v.lane & -536870913, w = Y !== v.lane;
        if (w ? (et & Y) === Y : (c & Y) === Y) {
          Y !== 0 && Y === Li && (uy = !0), L !== null && (L = L.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          e: {
            var fe = l, ze = v;
            Y = n;
            var Ht = u;
            switch (ze.tag) {
              case 1:
                if (fe = ze.payload, typeof fe == "function") {
                  K = fe.call(Ht, K, Y);
                  break e;
                }
                K = fe;
                break e;
              case 3:
                fe.flags = fe.flags & -65537 | 128;
              case 0:
                if (fe = ze.payload, Y = typeof fe == "function" ? fe.call(Ht, K, Y) : fe, Y == null) break e;
                K = Q({}, K, Y);
                break e;
              case 2:
                oi = !0;
            }
          }
          Y = v.callback, Y !== null && (l.flags |= 64, w && (l.flags |= 8192), w = s.callbacks, w === null ? s.callbacks = [Y] : w.push(Y));
        } else
          w = {
            lane: Y,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, L === null ? (j = L = w, A = K) : L = L.next = w, m |= Y;
        if (v = v.next, v === null) {
          if (v = s.shared.pending, v === null)
            break;
          w = v, v = w.next, w.next = null, s.lastBaseUpdate = w, s.shared.pending = null;
        }
      } while (!0);
      L === null && (A = K), s.baseState = A, s.firstBaseUpdate = j, s.lastBaseUpdate = L, r === null && (s.shared.lanes = 0), kn |= m, l.lanes = m, l.memoizedState = K;
    }
  }
  function Bd(l, n) {
    if (typeof l != "function")
      throw Error(U(191, l));
    l.call(n);
  }
  function Fi(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Bd(u[l], n);
  }
  var zl = S(null), Zc = S(0);
  function Q0(l, n) {
    l = $n, F(Zc, l), F(zl, n), $n = l | n.baseLanes;
  }
  function Qs() {
    F(Zc, $n), F(zl, zl.current);
  }
  function lf() {
    $n = Zc.current, B(zl), B(Zc);
  }
  var pa = S(null), Fa = null;
  function Tu(l) {
    var n = l.alternate;
    F($t, $t.current & 1), F(pa, l), Fa === null && (n === null || zl.current !== null || n.memoizedState !== null) && (Fa = l);
  }
  function af(l) {
    F($t, $t.current), F(pa, l), Fa === null && (Fa = l);
  }
  function jd(l) {
    l.tag === 22 ? (F($t, $t.current), F(pa, l), Fa === null && (Fa = l)) : Ln();
  }
  function Ln() {
    F($t, $t.current), F(pa, pa.current);
  }
  function ga(l) {
    B(pa), Fa === l && (Fa = null), B($t);
  }
  var $t = S(0);
  function nf(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || zn(u) || fc(u)))
          return n;
      } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Au = 0, Qe = null, At = null, hl = null, Jc = !1, Kc = !1, si = !1, Ls = 0, uf = 0, Ii = null, L0 = 0;
  function tl() {
    throw Error(U(321));
  }
  function ri(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!aa(l[u], n[u])) return !1;
    return !0;
  }
  function Vs(l, n, u, c, s, r) {
    return Au = r, Qe = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, _.H = l === null || l.memoizedState === null ? F0 : Id, si = !1, r = u(c, s), si = !1, Kc && (r = V0(
      n,
      u,
      c,
      s
    )), Yd(l), r;
  }
  function Yd(l) {
    _.H = Ps;
    var n = At !== null && At.next !== null;
    if (Au = 0, hl = At = Qe = null, Jc = !1, uf = 0, Ii = null, n) throw Error(U(300));
    l === null || ml || (l = l.dependencies, l !== null && Gc(l) && (ml = !0));
  }
  function V0(l, n, u, c) {
    Qe = l;
    var s = 0;
    do {
      if (Kc && (Ii = null), uf = 0, Kc = !1, 25 <= s) throw Error(U(301));
      if (s += 1, hl = At = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      _.H = I0, r = n(u, c);
    } while (Kc);
    return r;
  }
  function Iv() {
    var l = _.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? kc(n) : n, l = l.useState()[0], (At !== null ? At.memoizedState : null) !== l && (Qe.flags |= 1024), n;
  }
  function xd() {
    var l = Ls !== 0;
    return Ls = 0, l;
  }
  function $c(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Zs(l) {
    if (Jc) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Jc = !1;
    }
    Au = 0, hl = At = Qe = null, Kc = !1, uf = Ls = 0, Ii = null;
  }
  function Yl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return hl === null ? Qe.memoizedState = hl = l : hl = hl.next = l, hl;
  }
  function ol() {
    if (At === null) {
      var l = Qe.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = At.next;
    var n = hl === null ? Qe.memoizedState : hl.next;
    if (n !== null)
      hl = n, At = l;
    else {
      if (l === null)
        throw Qe.alternate === null ? Error(U(467)) : Error(U(310));
      At = l, l = {
        memoizedState: At.memoizedState,
        baseState: At.baseState,
        baseQueue: At.baseQueue,
        queue: At.queue,
        next: null
      }, hl === null ? Qe.memoizedState = hl = l : hl = hl.next = l;
    }
    return hl;
  }
  function Js() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function kc(l) {
    var n = uf;
    return uf += 1, Ii === null && (Ii = []), l = ly(Ii, l, n), n = Qe, (hl === null ? n.memoizedState : hl.next) === null && (n = n.alternate, _.H = n === null || n.memoizedState === null ? F0 : Id), l;
  }
  function cf(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return kc(l);
      if (l.$$typeof === Bt) return k(l);
    }
    throw Error(U(438, String(l)));
  }
  function qd(l) {
    var n = null, u = Qe.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = Qe.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Js(), Qe.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = se;
    return n.index++, u;
  }
  function Ou(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function zu(l) {
    var n = ol();
    return Gd(n, At, l);
  }
  function Gd(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(U(311));
    c.lastRenderedReducer = u;
    var s = l.baseQueue, r = c.pending;
    if (r !== null) {
      if (s !== null) {
        var m = s.next;
        s.next = r.next, r.next = m;
      }
      n.baseQueue = s = r, c.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var v = m = null, A = null, j = n, L = !1;
      do {
        var K = j.lane & -536870913;
        if (K !== j.lane ? (et & K) === K : (Au & K) === K) {
          var Y = j.revertLane;
          if (Y === 0)
            A !== null && (A = A.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }), K === Li && (L = !0);
          else if ((Au & Y) === Y) {
            j = j.next, Y === Li && (L = !0);
            continue;
          } else
            K = {
              lane: 0,
              revertLane: j.revertLane,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }, A === null ? (v = A = K, m = r) : A = A.next = K, Qe.lanes |= Y, kn |= Y;
          K = j.action, si && u(r, K), r = j.hasEagerState ? j.eagerState : u(r, K);
        } else
          Y = {
            lane: K,
            revertLane: j.revertLane,
            gesture: j.gesture,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null
          }, A === null ? (v = A = Y, m = r) : A = A.next = Y, Qe.lanes |= K, kn |= K;
        j = j.next;
      } while (j !== null && j !== n);
      if (A === null ? m = r : A.next = v, !aa(r, l.memoizedState) && (ml = !0, L && (u = vl, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = A, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function wd(l) {
    var n = ol(), u = n.queue;
    if (u === null) throw Error(U(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      aa(r, n.memoizedState) || (ml = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function iy(l, n, u) {
    var c = Qe, s = ol(), r = nt;
    if (r) {
      if (u === void 0) throw Error(U(407));
      u = u();
    } else u = n();
    var m = !aa(
      (At || s).memoizedState,
      u
    );
    if (m && (s.memoizedState = u, ml = !0), s = s.queue, Zd(Xd.bind(null, c, s, l), [
      l
    ]), s.getSnapshot !== n || m || hl !== null && hl.memoizedState.tag & 1) {
      if (c.flags |= 2048, Fc(
        9,
        { destroy: void 0 },
        cy.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), Ct === null) throw Error(U(349));
      r || Au & 127 || Ks(c, n, u);
    }
    return u;
  }
  function Ks(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Qe.updateQueue, n === null ? (n = Js(), Qe.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function cy(l, n, u, c) {
    n.value = u, n.getSnapshot = c, Qd(n) && Ld(l);
  }
  function Xd(l, n, u) {
    return u(function() {
      Qd(n) && Ld(l);
    });
  }
  function Qd(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !aa(l, u);
    } catch {
      return !0;
    }
  }
  function Ld(l) {
    var n = li(l, 2);
    n !== null && Aa(n, l, 2);
  }
  function oy(l) {
    var n = Yl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), si) {
        wa(!0);
        try {
          u();
        } finally {
          wa(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ou,
      lastRenderedState: l
    }, n;
  }
  function xl(l, n, u, c) {
    return l.baseState = u, Gd(
      l,
      At,
      typeof c == "function" ? c : Ou
    );
  }
  function Z0(l, n, u, c, s) {
    if (Is(l)) throw Error(U(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          r.listeners.push(m);
        }
      };
      _.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, fy(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function fy(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = _.T, m = {};
      _.T = m;
      try {
        var v = u(s, c), A = _.S;
        A !== null && A(m, v), sy(l, n, v);
      } catch (j) {
        Wc(l, n, j);
      } finally {
        r !== null && m.types !== null && (r.types = m.types), _.T = r;
      }
    } else
      try {
        r = u(s, c), sy(l, n, r);
      } catch (j) {
        Wc(l, n, j);
      }
  }
  function sy(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        ry(l, n, c);
      },
      function(c) {
        return Wc(l, n, c);
      }
    ) : ry(l, n, u);
  }
  function ry(l, n, u) {
    n.status = "fulfilled", n.value = u, dy(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, fy(l, u)));
  }
  function Wc(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, dy(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function dy(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function $s(l, n) {
    return n;
  }
  function hy(l, n) {
    if (nt) {
      var u = Ct.formState;
      if (u !== null) {
        e: {
          var c = Qe;
          if (nt) {
            if (xt) {
              t: {
                for (var s = xt, r = Ol; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = Oa(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                xt = Oa(
                  s.nextSibling
                ), c = s.data === "F!";
                break e;
              }
            }
            En(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = Yl(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $s,
      lastRenderedState: n
    }, u.queue = c, u = Wd.bind(
      null,
      Qe,
      c
    ), c.dispatch = u, c = oy(!1), r = Pi.bind(
      null,
      Qe,
      !1,
      c.queue
    ), c = Yl(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = Z0.bind(
      null,
      Qe,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function J0(l) {
    var n = ol();
    return ks(n, At, l);
  }
  function ks(l, n, u) {
    if (n = Gd(
      l,
      n,
      $s
    )[0], l = zu(Ou)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = kc(n);
      } catch (m) {
        throw m === Vi ? ef : m;
      }
    else c = n;
    n = ol();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (Qe.flags |= 2048, Fc(
      9,
      { destroy: void 0 },
      my.bind(null, s, u),
      null
    )), [c, r, l];
  }
  function my(l, n) {
    l.action = n;
  }
  function yy(l) {
    var n = ol(), u = At;
    if (u !== null)
      return ks(n, u, l);
    ol(), n = n.memoizedState, u = ol();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Fc(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = Qe.updateQueue, n === null && (n = Js(), Qe.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function py() {
    return ol().memoizedState;
  }
  function of(l, n, u, c) {
    var s = Yl();
    Qe.flags |= l, s.memoizedState = Fc(
      1 | n,
      { destroy: void 0 },
      u,
      c === void 0 ? null : c
    );
  }
  function ff(l, n, u, c) {
    var s = ol();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    At !== null && c !== null && ri(c, At.memoizedState.deps) ? s.memoizedState = Fc(n, r, u, c) : (Qe.flags |= l, s.memoizedState = Fc(
      1 | n,
      r,
      u,
      c
    ));
  }
  function Vd(l, n) {
    of(8390656, 8, l, n);
  }
  function Zd(l, n) {
    ff(2048, 8, l, n);
  }
  function gy(l) {
    Qe.flags |= 4;
    var n = Qe.updateQueue;
    if (n === null)
      n = Js(), Qe.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function Ws(l) {
    var n = ol().memoizedState;
    return gy({ ref: n, nextImpl: l }), function() {
      if (pt & 2) throw Error(U(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Jd(l, n) {
    return ff(4, 2, l, n);
  }
  function vy(l, n) {
    return ff(4, 4, l, n);
  }
  function Kd(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function Sy(l, n, u) {
    u = u != null ? u.concat([l]) : null, ff(4, 4, Kd.bind(null, n, l), u);
  }
  function Vn() {
  }
  function $d(l, n) {
    var u = ol();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && ri(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function K0(l, n) {
    var u = ol();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && ri(n, c[1]))
      return c[0];
    if (c = l(), si) {
      wa(!0);
      try {
        l();
      } finally {
        wa(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function Fs(l, n, u) {
    return u === void 0 || Au & 1073741824 && !(et & 261930) ? l.memoizedState = n : (l.memoizedState = u, l = og(), Qe.lanes |= l, kn |= l, u);
  }
  function Du(l, n, u, c) {
    return aa(u, n) ? u : zl.current !== null ? (l = Fs(l, u, c), aa(l, n) || (ml = !0), l) : !(Au & 42) || Au & 1073741824 && !(et & 261930) ? (ml = !0, l.memoizedState = u) : (l = og(), Qe.lanes |= l, kn |= l, n);
  }
  function kd(l, n, u, c, s) {
    var r = V.p;
    V.p = r !== 0 && 8 > r ? r : 8;
    var m = _.T, v = {};
    _.T = v, Pi(l, !1, n, u);
    try {
      var A = s(), j = _.S;
      if (j !== null && j(v, A), A !== null && typeof A == "object" && typeof A.then == "function") {
        var L = qs(
          A,
          c
        );
        di(
          l,
          n,
          L,
          Ha(l)
        );
      } else
        di(
          l,
          n,
          c,
          Ha(l)
        );
    } catch (K) {
      di(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: K },
        Ha()
      );
    } finally {
      V.p = r, m !== null && v.types !== null && (m.types = v.types), _.T = m;
    }
  }
  function $0() {
  }
  function sf(l, n, u, c) {
    if (l.tag !== 5) throw Error(U(476));
    var s = rf(l).queue;
    kd(
      l,
      s,
      n,
      te,
      u === null ? $0 : function() {
        return Mt(l), u(c);
      }
    );
  }
  function rf(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: te,
      baseState: te,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ou,
        lastRenderedState: te
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ou,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function Mt(l) {
    var n = rf(l);
    n.next === null && (n = l.alternate.memoizedState), di(
      l,
      n.next.queue,
      {},
      Ha()
    );
  }
  function by() {
    return k(Dr);
  }
  function k0() {
    return ol().memoizedState;
  }
  function Ey() {
    return ol().memoizedState;
  }
  function _u(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = Ha();
          l = fi(u);
          var c = Wa(n, l, u);
          c !== null && (Aa(c, n, u), ki(c, n, u)), n = { cache: Bs() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function W0(l, n, u) {
    var c = Ha();
    u = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Is(l) ? Fd(n, u) : (u = Sn(l, n, u, c), u !== null && (Aa(u, l, c), Ty(u, n, c)));
  }
  function Wd(l, n, u) {
    var c = Ha();
    di(l, n, u, c);
  }
  function di(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Is(l)) Fd(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, v = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = v, aa(v, m))
            return Za(l, n, s, 0), Ct === null && Va(), !1;
        } catch {
        } finally {
        }
      if (u = Sn(l, n, s, c), u !== null)
        return Aa(u, l, c), Ty(u, n, c), !0;
    }
    return !1;
  }
  function Pi(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: Ah(),
      gesture: null,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Is(l)) {
      if (n) throw Error(U(479));
    } else
      n = Sn(
        l,
        u,
        c,
        2
      ), n !== null && Aa(n, l, 2);
  }
  function Is(l) {
    var n = l.alternate;
    return l === Qe || n !== null && n === Qe;
  }
  function Fd(l, n) {
    Kc = Jc = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function Ty(l, n, u) {
    if (u & 4194048) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, ou(l, u);
    }
  }
  var Ps = {
    readContext: k,
    use: cf,
    useCallback: tl,
    useContext: tl,
    useEffect: tl,
    useImperativeHandle: tl,
    useLayoutEffect: tl,
    useInsertionEffect: tl,
    useMemo: tl,
    useReducer: tl,
    useRef: tl,
    useState: tl,
    useDebugValue: tl,
    useDeferredValue: tl,
    useTransition: tl,
    useSyncExternalStore: tl,
    useId: tl,
    useHostTransitionStatus: tl,
    useFormState: tl,
    useActionState: tl,
    useOptimistic: tl,
    useMemoCache: tl,
    useCacheRefresh: tl
  };
  Ps.useEffectEvent = tl;
  var F0 = {
    readContext: k,
    use: cf,
    useCallback: function(l, n) {
      return Yl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: k,
    useEffect: Vd,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, of(
        4194308,
        4,
        Kd.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return of(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      of(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = Yl();
      n = n === void 0 ? null : n;
      var c = l();
      if (si) {
        wa(!0);
        try {
          l();
        } finally {
          wa(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = Yl();
      if (u !== void 0) {
        var s = u(n);
        if (si) {
          wa(!0);
          try {
            u(n);
          } finally {
            wa(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = W0.bind(
        null,
        Qe,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = Yl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = oy(l);
      var n = l.queue, u = Wd.bind(null, Qe, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Vn,
    useDeferredValue: function(l, n) {
      var u = Yl();
      return Fs(u, l, n);
    },
    useTransition: function() {
      var l = oy(!1);
      return l = kd.bind(
        null,
        Qe,
        l.queue,
        !0,
        !1
      ), Yl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = Qe, s = Yl();
      if (nt) {
        if (u === void 0)
          throw Error(U(407));
        u = u();
      } else {
        if (u = n(), Ct === null)
          throw Error(U(349));
        et & 127 || Ks(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Vd(Xd.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, Fc(
        9,
        { destroy: void 0 },
        cy.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Yl(), n = Ct.identifierPrefix;
      if (nt) {
        var u = wn, c = Ra;
        u = (c & ~(1 << 32 - Ul(c) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = Ls++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = L0++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: by,
    useFormState: hy,
    useActionState: hy,
    useOptimistic: function(l) {
      var n = Yl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = Pi.bind(
        null,
        Qe,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: qd,
    useCacheRefresh: function() {
      return Yl().memoizedState = _u.bind(
        null,
        Qe
      );
    },
    useEffectEvent: function(l) {
      var n = Yl(), u = { impl: l };
      return n.memoizedState = u, function() {
        if (pt & 2)
          throw Error(U(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Id = {
    readContext: k,
    use: cf,
    useCallback: $d,
    useContext: k,
    useEffect: Zd,
    useImperativeHandle: Sy,
    useInsertionEffect: Jd,
    useLayoutEffect: vy,
    useMemo: K0,
    useReducer: zu,
    useRef: py,
    useState: function() {
      return zu(Ou);
    },
    useDebugValue: Vn,
    useDeferredValue: function(l, n) {
      var u = ol();
      return Du(
        u,
        At.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = zu(Ou)[0], n = ol().memoizedState;
      return [
        typeof l == "boolean" ? l : kc(l),
        n
      ];
    },
    useSyncExternalStore: iy,
    useId: k0,
    useHostTransitionStatus: by,
    useFormState: J0,
    useActionState: J0,
    useOptimistic: function(l, n) {
      var u = ol();
      return xl(u, At, l, n);
    },
    useMemoCache: qd,
    useCacheRefresh: Ey
  };
  Id.useEffectEvent = Ws;
  var I0 = {
    readContext: k,
    use: cf,
    useCallback: $d,
    useContext: k,
    useEffect: Zd,
    useImperativeHandle: Sy,
    useInsertionEffect: Jd,
    useLayoutEffect: vy,
    useMemo: K0,
    useReducer: wd,
    useRef: py,
    useState: function() {
      return wd(Ou);
    },
    useDebugValue: Vn,
    useDeferredValue: function(l, n) {
      var u = ol();
      return At === null ? Fs(u, l, n) : Du(
        u,
        At.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = wd(Ou)[0], n = ol().memoizedState;
      return [
        typeof l == "boolean" ? l : kc(l),
        n
      ];
    },
    useSyncExternalStore: iy,
    useId: k0,
    useHostTransitionStatus: by,
    useFormState: yy,
    useActionState: yy,
    useOptimistic: function(l, n) {
      var u = ol();
      return At !== null ? xl(u, At, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: qd,
    useCacheRefresh: Ey
  };
  I0.useEffectEvent = Ws;
  function Ic(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : Q({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Tn = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = Ha(), s = fi(c);
      s.payload = n, u != null && (s.callback = u), n = Wa(l, s, c), n !== null && (Aa(n, l, c), ki(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = Ha(), s = fi(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = Wa(l, s, c), n !== null && (Aa(n, l, c), ki(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = Ha(), c = fi(u);
      c.tag = 2, n != null && (c.callback = n), n = Wa(l, c, u), n !== null && (Aa(n, l, u), ki(n, l, u));
    }
  };
  function Ay(l, n, u, c, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, m) : n.prototype && n.prototype.isPureReactComponent ? !pn(u, c) || !pn(s, r) : !0;
  }
  function P0(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && Tn.enqueueReplaceState(n, n.state, null);
  }
  function ec(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = Q({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  function Pd(l) {
    Yc(l);
  }
  function Oy(l) {
    console.error(l);
  }
  function eh(l) {
    Yc(l);
  }
  function df(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function er(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function zy(l, n, u) {
    return u = fi(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      df(l, n);
    }, u;
  }
  function Dy(l) {
    return l = fi(l), l.tag = 3, l;
  }
  function _y(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        er(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      er(n, u, c), typeof s != "function" && (kt === null ? kt = /* @__PURE__ */ new Set([this]) : kt.add(this));
      var v = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function Pv(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && jl(
        n,
        u,
        s,
        !0
      ), u = pa.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return Fa === null ? Sh() : u.alternate === null && Gt === 0 && (Gt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === Lc ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), mr(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === Lc ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), mr(l, c, s)), !1;
        }
        throw Error(U(435, u.tag));
      }
      return mr(l, c, s), Sh(), !1;
    }
    if (nt)
      return n = pa.current, n !== null ? (!(n.flags & 65536) && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== vu && (l = Error(U(422), { cause: c }), Io(Ja(l, u)))) : (c !== vu && (n = Error(U(423), {
        cause: c
      }), Io(
        Ja(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = Ja(c, u), s = zy(
        l.stateNode,
        c,
        s
      ), Nd(l, s), Gt !== 4 && (Gt = 2)), !1;
    var r = Error(U(520), { cause: c });
    if (r = Ja(r, u), sr === null ? sr = [r] : sr.push(r), Gt !== 4 && (Gt = 2), n === null) return !0;
    c = Ja(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = zy(u.stateNode, c, l), Nd(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (kt === null || !kt.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = Dy(s), _y(
              s,
              l,
              u,
              c
            ), Nd(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var th = Error(U(461)), ml = !1;
  function Vt(l, n, u, c) {
    n.child = l === null ? ny(n, null, u, c) : $i(
      n,
      l.child,
      u,
      c
    );
  }
  function Ry(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var m = {};
      for (var v in c)
        v !== "ref" && (m[v] = c[v]);
    } else m = c;
    return je(n), c = Vs(
      l,
      n,
      u,
      m,
      r,
      s
    ), v = xd(), l !== null && !ml ? ($c(l, n, s), en(l, n, s)) : (nt && v && Wo(n), n.flags |= 1, Vt(l, n, c, s), n.child);
  }
  function My(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !xc(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, Cy(
        l,
        n,
        r,
        c,
        s
      )) : (l = Dd(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !nh(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : pn, u(m, c) && l.ref === n.ref)
        return en(l, n, s);
    }
    return n.flags |= 1, l = ai(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function Cy(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (pn(r, c) && l.ref === n.ref)
        if (ml = !1, n.pendingProps = c = r, nh(l, s))
          l.flags & 131072 && (ml = !0);
        else
          return n.lanes = l.lanes, en(l, n, s);
    }
    return lh(
      l,
      n,
      u,
      c,
      s
    );
  }
  function eg(l, n, u, c) {
    var s = c.children, r = l !== null ? l.memoizedState : null;
    if (l === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), c.mode === "hidden") {
      if (n.flags & 128) {
        if (r = r !== null ? r.baseLanes | u : u, l !== null) {
          for (c = n.child = l.child, s = 0; c !== null; )
            s = s | c.lanes | c.childLanes, c = c.sibling;
          c = s & ~r;
        } else c = 0, n.child = null;
        return va(
          l,
          n,
          r,
          u,
          c
        );
      }
      if (u & 536870912)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Po(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? Q0(n, r) : Qs(), jd(n);
      else
        return c = n.lanes = 536870912, va(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u,
          c
        );
    } else
      r !== null ? (Po(n, r.cachePool), Q0(n, r), Ln(), n.memoizedState = null) : (l !== null && Po(n, null), Qs(), Ln());
    return Vt(l, n, s, u), n.child;
  }
  function tc(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function va(l, n, u, c, s) {
    var r = ka();
    return r = r === null ? null : { parent: dl._currentValue, pool: r }, n.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && Po(n, null), Qs(), jd(n), l !== null && jl(l, n, c, !0), n.childLanes = s, null;
  }
  function tr(l, n) {
    return n = nr(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function Sa(l, n, u) {
    return $i(n, l.child, null, u), l = tr(n, n.pendingProps), l.flags |= 2, ga(n), n.memoizedState = null, l;
  }
  function tg(l, n, u) {
    var c = n.pendingProps, s = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (nt) {
        if (c.mode === "hidden")
          return l = tr(n, c), n.lanes = 536870912, tc(null, l);
        if (af(n), (l = xt) ? (l = Yg(
          l,
          Ol
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Gn !== null ? { id: Ra, overflow: wn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = km(l), u.return = n, n.child = u, Bl = n, xt = null)) : l = null, l === null) throw En(n);
        return n.lanes = 536870912, null;
      }
      return tr(n, c);
    }
    var r = l.memoizedState;
    if (r !== null) {
      var m = r.dehydrated;
      if (af(n), s)
        if (n.flags & 256)
          n.flags &= -257, n = Sa(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(U(558));
      else if (ml || jl(l, n, u, !1), s = (u & l.childLanes) !== 0, ml || s) {
        if (c = Ct, c !== null && (m = Xa(c, u), m !== 0 && m !== r.retryLane))
          throw r.retryLane = m, li(l, m), Aa(c, l, m), th;
        Sh(), n = Sa(
          l,
          n,
          u
        );
      } else
        l = r.treeContext, xt = Oa(m.nextSibling), Bl = n, nt = !0, gu = null, Ol = !1, l !== null && Us(n, l), n = tr(n, c), n.flags |= 4096;
      return n;
    }
    return l = ai(l.child, {
      mode: c.mode,
      children: c.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function Ia(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(U(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function lh(l, n, u, c, s) {
    return je(n), u = Vs(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = xd(), l !== null && !ml ? ($c(l, n, s), en(l, n, s)) : (nt && c && Wo(n), n.flags |= 1, Vt(l, n, u, s), n.child);
  }
  function lc(l, n, u, c, s, r) {
    return je(n), n.updateQueue = null, u = V0(
      n,
      c,
      u,
      s
    ), Yd(l), c = xd(), l !== null && !ml ? ($c(l, n, r), en(l, n, r)) : (nt && c && Wo(n), n.flags |= 1, Vt(l, n, u, r), n.child);
  }
  function Uy(l, n, u, c, s) {
    if (je(n), n.stateNode === null) {
      var r = ha, m = u.contextType;
      typeof m == "object" && m !== null && (r = k(m)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Tn, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, Xs(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? k(m) : ha, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (Ic(
        n,
        u,
        m,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && Tn.enqueueReplaceState(r, r.state, null), Eu(n, c, r, s), Wi(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var v = n.memoizedProps, A = ec(u, v);
      r.props = A;
      var j = r.context, L = u.contextType;
      m = ha, typeof L == "object" && L !== null && (m = k(L));
      var K = u.getDerivedStateFromProps;
      L = typeof K == "function" || typeof r.getSnapshotBeforeUpdate == "function", v = n.pendingProps !== v, L || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (v || j !== m) && P0(
        n,
        r,
        c,
        m
      ), oi = !1;
      var Y = n.memoizedState;
      r.state = Y, Eu(n, c, r, s), Wi(), j = n.memoizedState, v || Y !== j || oi ? (typeof K == "function" && (Ic(
        n,
        u,
        K,
        c
      ), j = n.memoizedState), (A = oi || Ay(
        n,
        u,
        A,
        c,
        Y,
        j,
        m
      )) ? (L || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = j), r.props = c, r.state = j, r.context = m, c = A) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, Hd(l, n), m = n.memoizedProps, L = ec(u, m), r.props = L, K = n.pendingProps, Y = r.context, j = u.contextType, A = ha, typeof j == "object" && j !== null && (A = k(j)), v = u.getDerivedStateFromProps, (j = typeof v == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== K || Y !== A) && P0(
        n,
        r,
        c,
        A
      ), oi = !1, Y = n.memoizedState, r.state = Y, Eu(n, c, r, s), Wi();
      var w = n.memoizedState;
      m !== K || Y !== w || oi || l !== null && l.dependencies !== null && Gc(l.dependencies) ? (typeof v == "function" && (Ic(
        n,
        u,
        v,
        c
      ), w = n.memoizedState), (L = oi || Ay(
        n,
        u,
        L,
        c,
        Y,
        w,
        A
      ) || l !== null && l.dependencies !== null && Gc(l.dependencies)) ? (j || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, w, A), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        w,
        A
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && Y === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && Y === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = w), r.props = c, r.state = w, r.context = A, c = L) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && Y === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && Y === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, Ia(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = $i(
      n,
      l.child,
      null,
      s
    ), n.child = $i(
      n,
      null,
      u,
      s
    )) : Vt(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = en(
      l,
      n,
      s
    ), l;
  }
  function Zn(l, n, u, c) {
    return Qi(), n.flags |= 256, Vt(l, n, u, c), n.child;
  }
  var lr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ar(l) {
    return { baseLanes: l, cachePool: Xc() };
  }
  function Pa(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Ta), l;
  }
  function Hy(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : ($t.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (nt) {
        if (s ? Tu(n) : Ln(), (l = xt) ? (l = Yg(
          l,
          Ol
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Gn !== null ? { id: Ra, overflow: wn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = km(l), u.return = n, n.child = u, Bl = n, xt = null)) : l = null, l === null) throw En(n);
        return fc(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var v = c.children;
      return c = c.fallback, s ? (Ln(), s = n.mode, v = nr(
        { mode: "hidden", children: v },
        s
      ), c = ni(
        c,
        s,
        u,
        null
      ), v.return = n, c.return = n, v.sibling = c, n.child = v, c = n.child, c.memoizedState = ar(u), c.childLanes = Pa(
        l,
        m,
        u
      ), n.memoizedState = lr, tc(null, c)) : (Tu(n), ac(n, v));
    }
    var A = l.memoizedState;
    if (A !== null && (v = A.dehydrated, v !== null)) {
      if (r)
        n.flags & 256 ? (Tu(n), n.flags &= -257, n = Pc(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Ln(), n.child = l.child, n.flags |= 128, n = null) : (Ln(), v = c.fallback, s = n.mode, c = nr(
          { mode: "visible", children: c.children },
          s
        ), v = ni(
          v,
          s,
          u,
          null
        ), v.flags |= 2, c.return = n, v.return = n, c.sibling = v, n.child = c, $i(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = ar(u), c.childLanes = Pa(
          l,
          m,
          u
        ), n.memoizedState = lr, n = tc(null, c));
      else if (Tu(n), fc(v)) {
        if (m = v.nextSibling && v.nextSibling.dataset, m) var j = m.dgst;
        m = j, c = Error(U(419)), c.stack = "", c.digest = m, Io({ value: c, source: null, stack: null }), n = Pc(
          l,
          n,
          u
        );
      } else if (ml || jl(l, n, u, !1), m = (u & l.childLanes) !== 0, ml || m) {
        if (m = Ct, m !== null && (c = Xa(m, u), c !== 0 && c !== A.retryLane))
          throw A.retryLane = c, li(l, c), Aa(m, l, c), th;
        zn(v) || Sh(), n = Pc(
          l,
          n,
          u
        );
      } else
        zn(v) ? (n.flags |= 192, n.child = l.child, n = null) : (l = A.treeContext, xt = Oa(
          v.nextSibling
        ), Bl = n, nt = !0, gu = null, Ol = !1, l !== null && Us(n, l), n = ac(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Ln(), v = c.fallback, s = n.mode, A = l.child, j = A.sibling, c = ai(A, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = A.subtreeFlags & 65011712, j !== null ? v = ai(
      j,
      v
    ) : (v = ni(
      v,
      s,
      u,
      null
    ), v.flags |= 2), v.return = n, c.return = n, c.sibling = v, n.child = c, tc(null, c), c = n.child, v = l.child.memoizedState, v === null ? v = ar(u) : (s = v.cachePool, s !== null ? (A = dl._currentValue, s = s.parent !== A ? { parent: A, pool: A } : s) : s = Xc(), v = {
      baseLanes: v.baseLanes | u,
      cachePool: s
    }), c.memoizedState = v, c.childLanes = Pa(
      l,
      m,
      u
    ), n.memoizedState = lr, tc(l.child, c)) : (Tu(n), u = l.child, l = u.sibling, u = ai(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function ac(l, n) {
    return n = nr(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function nr(l, n) {
    return l = il(22, l, null, n), l.lanes = 0, l;
  }
  function Pc(l, n, u) {
    return $i(n, l.child, null, u), l = ac(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function eo(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), Cd(l.return, n, u);
  }
  function ah(l, n, u, c, s, r) {
    var m = l.memoizedState;
    m === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: s,
      treeForkCount: r
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = c, m.tail = u, m.tailMode = s, m.treeForkCount = r);
  }
  function Ny(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    c = c.children;
    var m = $t.current, v = (m & 2) !== 0;
    if (v ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, F($t, m), Vt(l, n, c, u), c = nt ? rl : 0, !v && l !== null && l.flags & 128)
      e: for (l = n.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && eo(l, u, n);
        else if (l.tag === 19)
          eo(l, u, n);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === n) break e;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === n)
            break e;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && nf(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), ah(
          n,
          !1,
          s,
          u,
          r,
          c
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && nf(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        ah(
          n,
          !0,
          u,
          null,
          r,
          c
        );
        break;
      case "together":
        ah(
          n,
          !1,
          null,
          null,
          void 0,
          c
        );
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function en(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), kn |= n.lanes, !(u & n.childLanes))
      if (l !== null) {
        if (jl(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(U(153));
    if (n.child !== null) {
      for (l = n.child, u = ai(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = ai(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function nh(l, n) {
    return l.lanes & n ? !0 : (l = l.dependencies, !!(l !== null && Gc(l)));
  }
  function uh(l, n, u) {
    switch (n.tag) {
      case 3:
        Lt(n, n.stateNode.containerInfo), ya(n, dl, l.memoizedState.cache), Qi();
        break;
      case 27:
      case 5:
        qa(n);
        break;
      case 4:
        Lt(n, n.stateNode.containerInfo);
        break;
      case 10:
        ya(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, af(n), null;
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (Tu(n), n.flags |= 128, null) : u & n.child.childLanes ? Hy(l, n, u) : (Tu(n), l = en(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        Tu(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (jl(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return Ny(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), F($t, $t.current), c) break;
        return null;
      case 22:
        return n.lanes = 0, eg(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        ya(n, dl, l.memoizedState.cache);
    }
    return en(l, n, u);
  }
  function By(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        ml = !0;
      else {
        if (!nh(l, u) && !(n.flags & 128))
          return ml = !1, uh(
            l,
            n,
            u
          );
        ml = !!(l.flags & 131072);
      }
    else
      ml = !1, nt && n.flags & 1048576 && Fm(n, rl, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var c = n.pendingProps;
          if (l = Zi(n.elementType), n.type = l, typeof l == "function")
            xc(l) ? (c = ec(l, c), n.tag = 1, n = Uy(
              null,
              n,
              l,
              c,
              u
            )) : (n.tag = 0, n = lh(
              null,
              n,
              l,
              c,
              u
            ));
          else {
            if (l != null) {
              var s = l.$$typeof;
              if (s === Jt) {
                n.tag = 11, n = Ry(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              } else if (s === _e) {
                n.tag = 14, n = My(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              }
            }
            throw n = Qt(l) || l, Error(U(306, n, ""));
          }
        }
        return n;
      case 0:
        return lh(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, s = ec(
          c,
          n.pendingProps
        ), Uy(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        e: {
          if (Lt(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(U(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, Hd(l, n), Eu(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, ya(n, dl, c), c !== r.cache && bu(
            n,
            [dl],
            u,
            !0
          ), Wi(), c = m.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = Zn(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== s) {
              s = Ja(
                Error(U(424)),
                n
              ), Io(s), n = Zn(
                l,
                n,
                c,
                u
              );
              break e;
            } else {
              switch (l = n.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (xt = Oa(l.firstChild), Bl = n, nt = !0, gu = null, Ol = !0, u = ny(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Qi(), c === s) {
              n = en(
                l,
                n,
                u
              );
              break e;
            }
            Vt(l, n, c, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Ia(l, n), l === null ? (u = Bf(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : nt || (u = n.type, l = n.pendingProps, c = oc(
          Ge.current
        ).createElement(u), c[Rt] = n, c[sa] = l, $l(c, u, l), Et(c), n.stateNode = c) : n.memoizedState = Bf(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return qa(n), l === null && nt && (c = n.stateNode = Hf(
          n.type,
          n.pendingProps,
          Ge.current
        ), Bl = n, Ol = !0, s = xt, Fn(n.type) ? (Ar = s, xt = Oa(c.firstChild)) : xt = s), Vt(
          l,
          n,
          n.pendingProps.children,
          u
        ), Ia(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && nt && ((s = c = xt) && (c = lS(
          c,
          n.type,
          n.pendingProps,
          Ol
        ), c !== null ? (n.stateNode = c, Bl = n, xt = Oa(c.firstChild), Ol = !1, s = !0) : s = !1), s || En(n)), qa(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = r.children, Cf(s, r) ? c = null : m !== null && Cf(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = Vs(
          l,
          n,
          Iv,
          null,
          null,
          u
        ), Dr._currentValue = s), Ia(l, n), Vt(l, n, c, u), n.child;
      case 6:
        return l === null && nt && ((l = u = xt) && (u = ke(
          u,
          n.pendingProps,
          Ol
        ), u !== null ? (n.stateNode = u, Bl = n, xt = null, l = !0) : l = !1), l || En(n)), null;
      case 13:
        return Hy(l, n, u);
      case 4:
        return Lt(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = $i(
          n,
          null,
          c,
          u
        ) : Vt(l, n, c, u), n.child;
      case 11:
        return Ry(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return Vt(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return Vt(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return Vt(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, ya(n, n.type, c.value), Vt(l, n, c.children, u), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, je(n), s = k(s), c = c(s), n.flags |= 1, Vt(l, n, c, u), n.child;
      case 14:
        return My(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return Cy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return Ny(l, n, u);
      case 31:
        return tg(l, n, u);
      case 22:
        return eg(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return je(n), c = k(dl), l === null ? (s = ka(), s === null && (s = Ct, r = Bs(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = { parent: c, cache: s }, Xs(n), ya(n, dl, s)) : (l.lanes & u && (Hd(l, n), Eu(n, null, null, u), Wi()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), ya(n, dl, c)) : (c = r.cache, ya(n, dl, c), c !== s.cache && bu(
          n,
          [dl],
          u,
          !0
        ))), Vt(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(U(156, n.tag));
  }
  function Ru(l) {
    l.flags |= 4;
  }
  function jy(l, n, u, c, s) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (s & 335544128) === s)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (rg()) l.flags |= 8192;
        else
          throw Ji = Lc, Qc;
    } else l.flags &= -16777217;
  }
  function Yy(l, n) {
    if (n.type !== "stylesheet" || n.state.loading & 4)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Ba(n))
      if (rg()) l.flags |= 8192;
      else
        throw Ji = Lc, Qc;
  }
  function na(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? ta() : 536870912, l.lanes |= n, ll |= n);
  }
  function hf(l, n) {
    if (!nt)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function Be(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 65011712, c |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function lg(l, n, u) {
    var c = n.pendingProps;
    switch (Rd(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Be(n), null;
      case 1:
        return Be(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), Qn(dl), mt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Su(n) ? Ru(n) : l === null || l.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Im())), Be(n), null;
      case 26:
        var s = n.type, r = n.memoizedState;
        return l === null ? (Ru(n), r !== null ? (Be(n), Yy(n, r)) : (Be(n), jy(
          n,
          s,
          null,
          c,
          u
        ))) : r ? r !== l.memoizedState ? (Ru(n), Be(n), Yy(n, r)) : (Be(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== c && Ru(n), Be(n), jy(
          n,
          s,
          l,
          c,
          u
        )), null;
      case 27:
        if (ce(n), u = Ge.current, s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Ru(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(U(166));
            return Be(n), null;
          }
          l = W.current, Su(n) ? Hs(n) : (l = Hf(s, c, u), n.stateNode = l, Ru(n));
        }
        return Be(n), null;
      case 5:
        if (ce(n), s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Ru(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(U(166));
            return Be(n), null;
          }
          if (r = W.current, Su(n))
            Hs(n);
          else {
            var m = oc(
              Ge.current
            );
            switch (r) {
              case 1:
                r = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                r = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    r = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    r = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    r = m.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(
                      r.firstChild
                    );
                    break;
                  case "select":
                    r = typeof c.is == "string" ? m.createElement("select", {
                      is: c.is
                    }) : m.createElement("select"), c.multiple ? r.multiple = !0 : c.size && (r.size = c.size);
                    break;
                  default:
                    r = typeof c.is == "string" ? m.createElement(s, { is: c.is }) : m.createElement(s);
                }
            }
            r[Rt] = n, r[sa] = c;
            e: for (m = n.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                r.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === n) break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === n)
                  break e;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            n.stateNode = r;
            e: switch ($l(r, s, c), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                c = !!c.autoFocus;
                break e;
              case "img":
                c = !0;
                break e;
              default:
                c = !1;
            }
            c && Ru(n);
          }
        }
        return Be(n), jy(
          n,
          n.type,
          l === null ? null : l.memoizedProps,
          n.pendingProps,
          u
        ), null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && Ru(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(U(166));
          if (l = Ge.current, Su(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = Bl, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[Rt] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || ip(l.nodeValue, u)), l || En(n, !0);
          } else
            l = oc(l).createTextNode(
              c
            ), l[Rt] = n, n.stateNode = l;
        }
        return Be(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (c = Su(n), u !== null) {
            if (l === null) {
              if (!c) throw Error(U(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(U(557));
              l[Rt] = n;
            } else
              Qi(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            Be(n), l = !1;
          } else
            u = Im(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (ga(n), n) : (ga(n), null);
          if (n.flags & 128)
            throw Error(U(558));
        }
        return Be(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = Su(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(U(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(U(317));
              s[Rt] = n;
            } else
              Qi(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            Be(n), s = !1;
          } else
            s = Im(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (ga(n), n) : (ga(n), null);
        }
        return ga(n), n.flags & 128 ? (n.lanes = u, n) : (u = c !== null, l = l !== null && l.memoizedState !== null, u && (c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool), r = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), na(n, n.updateQueue), Be(n), null);
      case 4:
        return mt(), l === null && Mf(n.stateNode.containerInfo), Be(n), null;
      case 10:
        return Qn(n.type), Be(n), null;
      case 19:
        if (B($t), c = n.memoizedState, c === null) return Be(n), null;
        if (s = (n.flags & 128) !== 0, r = c.rendering, r === null)
          if (s) hf(c, !1);
          else {
            if (Gt !== 0 || l !== null && l.flags & 128)
              for (l = n.child; l !== null; ) {
                if (r = nf(l), r !== null) {
                  for (n.flags |= 128, hf(c, !1), l = r.updateQueue, n.updateQueue = l, na(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    $m(u, l), u = u.sibling;
                  return F(
                    $t,
                    $t.current & 1 | 2
                  ), nt && bn(n, c.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            c.tail !== null && gl() > St && (n.flags |= 128, s = !0, hf(c, !1), n.lanes = 4194304);
          }
        else {
          if (!s)
            if (l = nf(r), l !== null) {
              if (n.flags |= 128, s = !0, l = l.updateQueue, n.updateQueue = l, na(n, l), hf(c, !0), c.tail === null && c.tailMode === "hidden" && !r.alternate && !nt)
                return Be(n), null;
            } else
              2 * gl() - c.renderingStartTime > St && u !== 536870912 && (n.flags |= 128, s = !0, hf(c, !1), n.lanes = 4194304);
          c.isBackwards ? (r.sibling = n.child, n.child = r) : (l = c.last, l !== null ? l.sibling = r : n.child = r, c.last = r);
        }
        return c.tail !== null ? (l = c.tail, c.rendering = l, c.tail = l.sibling, c.renderingStartTime = gl(), l.sibling = null, u = $t.current, F(
          $t,
          s ? u & 1 | 2 : u & 1
        ), nt && bn(n, c.treeForkCount), l) : (Be(n), null);
      case 22:
      case 23:
        return ga(n), lf(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? u & 536870912 && !(n.flags & 128) && (Be(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Be(n), u = n.updateQueue, u !== null && na(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && B($a), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Qn(dl), Be(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(U(156, n.tag));
  }
  function ag(l, n) {
    switch (Rd(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return Qn(dl), mt(), l = n.flags, l & 65536 && !(l & 128) ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return ce(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (ga(n), n.alternate === null)
            throw Error(U(340));
          Qi();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (ga(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(U(340));
          Qi();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return B($t), null;
      case 4:
        return mt(), null;
      case 10:
        return Qn(n.type), null;
      case 22:
      case 23:
        return ga(n), lf(), l !== null && B($a), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return Qn(dl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ng(l, n) {
    switch (Rd(n), n.tag) {
      case 3:
        Qn(dl), mt();
        break;
      case 26:
      case 27:
      case 5:
        ce(n);
        break;
      case 4:
        mt();
        break;
      case 31:
        n.memoizedState !== null && ga(n);
        break;
      case 13:
        ga(n);
        break;
      case 19:
        B($t);
        break;
      case 10:
        Qn(n.type);
        break;
      case 22:
      case 23:
        ga(n), lf(), l !== null && B($a);
        break;
      case 24:
        Qn(dl);
    }
  }
  function An(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var s = c.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var r = u.create, m = u.inst;
            c = r(), m.destroy = c;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (v) {
      zt(n, n.return, v);
    }
  }
  function tn(l, n, u) {
    try {
      var c = n.updateQueue, s = c !== null ? c.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        c = r;
        do {
          if ((c.tag & l) === l) {
            var m = c.inst, v = m.destroy;
            if (v !== void 0) {
              m.destroy = void 0, s = n;
              var A = u, j = v;
              try {
                j();
              } catch (L) {
                zt(
                  s,
                  A,
                  L
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch (L) {
      zt(n, n.return, L);
    }
  }
  function ih(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Fi(n, u);
      } catch (c) {
        zt(l, l.return, c);
      }
    }
  }
  function nc(l, n, u) {
    u.props = ec(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      zt(l, n, c);
    }
  }
  function Mu(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (s) {
      zt(l, n, s);
    }
  }
  function Jn(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          zt(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          zt(l, n, s);
        }
      else u.current = null;
  }
  function xy(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (s) {
      zt(l, l.return, s);
    }
  }
  function ch(l, n, u) {
    try {
      var c = l.stateNode;
      op(c, l.type, u, n), c[sa] = n;
    } catch (s) {
      zt(l, l.return, s);
    }
  }
  function qy(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Fn(l.type) || l.tag === 4;
  }
  function mf(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || qy(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Fn(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function yf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Hn));
    else if (c !== 4 && (c === 27 && Fn(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (yf(l, n, u), l = l.sibling; l !== null; )
        yf(l, n, u), l = l.sibling;
  }
  function pf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && Fn(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (pf(l, n, u), l = l.sibling; l !== null; )
        pf(l, n, u), l = l.sibling;
  }
  function Gy(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      $l(n, c, u), n[Rt] = l, n[sa] = u;
    } catch (r) {
      zt(l, l.return, r);
    }
  }
  var hi = !1, Sl = !1, oh = !1, wy = typeof WeakSet == "function" ? WeakSet : Set, ql = null;
  function gf(l, n) {
    if (l = l.containerInfo, Rh = _l, l = Gi(l), zs(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var s = c.anchorOffset, r = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break e;
            }
            var m = 0, v = -1, A = -1, j = 0, L = 0, K = l, Y = null;
            t: for (; ; ) {
              for (var w; K !== u || s !== 0 && K.nodeType !== 3 || (v = m + s), K !== r || c !== 0 && K.nodeType !== 3 || (A = m + c), K.nodeType === 3 && (m += K.nodeValue.length), (w = K.firstChild) !== null; )
                Y = K, K = w;
              for (; ; ) {
                if (K === l) break t;
                if (Y === u && ++j === s && (v = m), Y === r && ++L === c && (A = m), (w = K.nextSibling) !== null) break;
                K = Y, Y = K.parentNode;
              }
              K = w;
            }
            u = v === -1 || A === -1 ? null : { start: v, end: A };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Mh = { focusedElem: l, selectionRange: u }, _l = !1, ql = n; ql !== null; )
      if (n = ql, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, ql = l;
      else
        for (; ql !== null; ) {
          switch (n = ql, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              if (l & 4 && (l = n.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  s = l[u], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (l & 1024 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var fe = ec(
                    u.type,
                    s
                  );
                  l = c.getSnapshotBeforeUpdate(
                    fe,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (ze) {
                  zt(
                    u,
                    u.return,
                    ze
                  );
                }
              }
              break;
            case 3:
              if (l & 1024) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Tr(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Tr(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (l & 1024) throw Error(U(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, ql = l;
            break;
          }
          ql = n.return;
        }
  }
  function ur(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        mi(l, u), c & 4 && An(5, u);
        break;
      case 1:
        if (mi(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              zt(u, u.return, m);
            }
          else {
            var s = ec(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              zt(
                u,
                u.return,
                m
              );
            }
          }
        c & 64 && ih(u), c & 512 && Mu(u, u.return);
        break;
      case 3:
        if (mi(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Fi(l, n);
          } catch (m) {
            zt(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && c & 4 && Gy(u);
      case 26:
      case 5:
        mi(l, u), n === null && c & 4 && xy(u), c & 512 && Mu(u, u.return);
        break;
      case 12:
        mi(l, u);
        break;
      case 31:
        mi(l, u), c & 4 && ug(l, u);
        break;
      case 13:
        mi(l, u), c & 4 && Ly(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = ln.bind(
          null,
          u
        ), Uf(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || hi, !c) {
          n = n !== null && n.memoizedState !== null || Sl, s = hi;
          var r = Sl;
          hi = c, (Sl = n) && !r ? Kn(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : mi(l, u), hi = s, Sl = r;
        }
        break;
      case 30:
        break;
      default:
        mi(l, u);
    }
  }
  function Xy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Xy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && nd(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var qt = null, ba = !1;
  function Cu(l, n, u) {
    for (u = u.child; u !== null; )
      Qy(l, n, u), u = u.sibling;
  }
  function Qy(l, n, u) {
    if (Al && typeof Al.onCommitFiberUnmount == "function")
      try {
        Al.onCommitFiberUnmount(dn, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Sl || Jn(u, n), Cu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Sl || Jn(u, n);
        var c = qt, s = ba;
        Fn(u.type) && (qt = u.stateNode, ba = !1), Cu(
          l,
          n,
          u
        ), oo(u.stateNode), qt = c, ba = s;
        break;
      case 5:
        Sl || Jn(u, n);
      case 6:
        if (c = qt, s = ba, qt = null, Cu(
          l,
          n,
          u
        ), qt = c, ba = s, qt !== null)
          if (ba)
            try {
              (qt.nodeType === 9 ? qt.body : qt.nodeName === "HTML" ? qt.ownerDocument.body : qt).removeChild(u.stateNode);
            } catch (r) {
              zt(
                u,
                n,
                r
              );
            }
          else
            try {
              qt.removeChild(u.stateNode);
            } catch (r) {
              zt(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        qt !== null && (ba ? (l = qt, dp(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Qf(l)) : dp(qt, u.stateNode));
        break;
      case 4:
        c = qt, s = ba, qt = u.stateNode.containerInfo, ba = !0, Cu(
          l,
          n,
          u
        ), qt = c, ba = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        tn(2, u, n), Sl || tn(4, u, n), Cu(
          l,
          n,
          u
        );
        break;
      case 1:
        Sl || (Jn(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && nc(
          u,
          n,
          c
        )), Cu(
          l,
          n,
          u
        );
        break;
      case 21:
        Cu(
          l,
          n,
          u
        );
        break;
      case 22:
        Sl = (c = Sl) || u.memoizedState !== null, Cu(
          l,
          n,
          u
        ), Sl = c;
        break;
      default:
        Cu(
          l,
          n,
          u
        );
    }
  }
  function ug(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Qf(l);
      } catch (u) {
        zt(n, n.return, u);
      }
    }
  }
  function Ly(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Qf(l);
      } catch (u) {
        zt(n, n.return, u);
      }
  }
  function ir(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new wy()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new wy()), n;
      default:
        throw Error(U(435, l.tag));
    }
  }
  function cr(l, n) {
    var u = ir(l);
    n.forEach(function(c) {
      if (!u.has(c)) {
        u.add(c);
        var s = Dg.bind(null, l, c);
        c.then(s, s);
      }
    });
  }
  function Ea(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, m = n, v = m;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (Fn(v.type)) {
                qt = v.stateNode, ba = !1;
                break e;
              }
              break;
            case 5:
              qt = v.stateNode, ba = !1;
              break e;
            case 3:
            case 4:
              qt = v.stateNode.containerInfo, ba = !0;
              break e;
          }
          v = v.return;
        }
        if (qt === null) throw Error(U(160));
        Qy(r, m, s), qt = null, ba = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        fh(n, l), n = n.sibling;
  }
  var Je = null;
  function fh(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ea(n, l), Ma(l), c & 4 && (tn(3, l, l.return), An(3, l), tn(5, l, l.return));
        break;
      case 1:
        Ea(n, l), Ma(l), c & 512 && (Sl || u === null || Jn(u, u.return)), c & 64 && hi && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = Je;
        if (Ea(n, l), Ma(l), c & 512 && (Sl || u === null || Jn(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[fu] || r[Rt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), $l(r, c, u), r[Rt] = l, Et(r), c = r;
                      break e;
                    case "link":
                      var m = pp(
                        "link",
                        "href",
                        s
                      ).get(c + (u.href || ""));
                      if (m) {
                        for (var v = 0; v < m.length; v++)
                          if (r = m[v], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(v, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), $l(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = pp(
                        "meta",
                        "content",
                        s
                      ).get(c + (u.content || ""))) {
                        for (v = 0; v < m.length; v++)
                          if (r = m[v], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(v, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), $l(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(U(468, c));
                  }
                  r[Rt] = l, Et(r), c = r;
                }
                l.stateNode = c;
              } else
                Bh(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = yp(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? Bh(
              s,
              l.type,
              l.stateNode
            ) : yp(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && ch(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Ea(n, l), Ma(l), c & 512 && (Sl || u === null || Jn(u, u.return)), u !== null && c & 4 && ch(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Ea(n, l), Ma(l), c & 512 && (Sl || u === null || Jn(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            ru(s, "");
          } catch (fe) {
            zt(l, l.return, fe);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, ch(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (oh = !0);
        break;
      case 6:
        if (Ea(n, l), Ma(l), c & 4) {
          if (l.stateNode === null)
            throw Error(U(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (fe) {
            zt(l, l.return, fe);
          }
        }
        break;
      case 3:
        if (xf = null, s = Je, Je = ua(n.containerInfo), Ea(n, l), Je = s, Ma(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Qf(n.containerInfo);
          } catch (fe) {
            zt(l, l.return, fe);
          }
        oh && (oh = !1, Vy(l));
        break;
      case 4:
        c = Je, Je = ua(
          l.stateNode.containerInfo
        ), Ea(n, l), Ma(l), Je = c;
        break;
      case 12:
        Ea(n, l), Ma(l);
        break;
      case 31:
        Ea(n, l), Ma(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, cr(l, c)));
        break;
      case 13:
        Ea(n, l), Ma(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Wn = gl()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, cr(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var A = u !== null && u.memoizedState !== null, j = hi, L = Sl;
        if (hi = j || s, Sl = L || A, Ea(n, l), Sl = L, hi = j, Ma(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || A || hi || Sl || to(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                A = u = n;
                try {
                  if (r = A.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    v = A.stateNode;
                    var K = A.memoizedProps.style, Y = K != null && K.hasOwnProperty("display") ? K.display : null;
                    v.style.display = Y == null || typeof Y == "boolean" ? "" : ("" + Y).trim();
                  }
                } catch (fe) {
                  zt(A, A.return, fe);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                A = n;
                try {
                  A.stateNode.nodeValue = s ? "" : A.memoizedProps;
                } catch (fe) {
                  zt(A, A.return, fe);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                A = n;
                try {
                  var w = A.stateNode;
                  s ? yl(w, !0) : yl(A.stateNode, !1);
                } catch (fe) {
                  zt(A, A.return, fe);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, cr(l, u))));
        break;
      case 19:
        Ea(n, l), Ma(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, cr(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ea(n, l), Ma(l);
    }
  }
  function Ma(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (qy(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(U(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = mf(l);
            pf(l, r, s);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (ru(m, ""), u.flags &= -33);
            var v = mf(l);
            pf(l, v, m);
            break;
          case 3:
          case 4:
            var A = u.stateNode.containerInfo, j = mf(l);
            yf(
              l,
              j,
              A
            );
            break;
          default:
            throw Error(U(161));
        }
      } catch (L) {
        zt(l, l.return, L);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Vy(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Vy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function mi(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        ur(l, n.alternate, n), n = n.sibling;
  }
  function to(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          tn(4, n, n.return), to(n);
          break;
        case 1:
          Jn(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && nc(
            n,
            n.return,
            u
          ), to(n);
          break;
        case 27:
          oo(n.stateNode);
        case 26:
        case 5:
          Jn(n, n.return), to(n);
          break;
        case 22:
          n.memoizedState === null && to(n);
          break;
        case 30:
          to(n);
          break;
        default:
          to(n);
      }
      l = l.sibling;
    }
  }
  function Kn(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Kn(
            s,
            r,
            u
          ), An(4, r);
          break;
        case 1:
          if (Kn(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (j) {
              zt(c, c.return, j);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var v = c.stateNode;
            try {
              var A = s.shared.hiddenCallbacks;
              if (A !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < A.length; s++)
                  Bd(A[s], v);
            } catch (j) {
              zt(c, c.return, j);
            }
          }
          u && m & 64 && ih(r), Mu(r, r.return);
          break;
        case 27:
          Gy(r);
        case 26:
        case 5:
          Kn(
            s,
            r,
            u
          ), u && c === null && m & 4 && xy(r), Mu(r, r.return);
          break;
        case 12:
          Kn(
            s,
            r,
            u
          );
          break;
        case 31:
          Kn(
            s,
            r,
            u
          ), u && m & 4 && ug(s, r);
          break;
        case 13:
          Kn(
            s,
            r,
            u
          ), u && m & 4 && Ly(s, r);
          break;
        case 22:
          r.memoizedState === null && Kn(
            s,
            r,
            u
          ), Mu(r, r.return);
          break;
        case 30:
          break;
        default:
          Kn(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function sh(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && js(u));
  }
  function rh(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && js(l));
  }
  function On(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        vf(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function vf(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        On(
          l,
          n,
          u,
          c
        ), s & 2048 && An(9, n);
        break;
      case 1:
        On(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        On(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && js(l)));
        break;
      case 12:
        if (s & 2048) {
          On(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, m = r.id, v = r.onPostCommit;
            typeof v == "function" && v(
              m,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (A) {
            zt(n, n.return, A);
          }
        } else
          On(
            l,
            n,
            u,
            c
          );
        break;
      case 31:
        On(
          l,
          n,
          u,
          c
        );
        break;
      case 13:
        On(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, m = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? On(
          l,
          n,
          u,
          c
        ) : or(l, n) : r._visibility & 2 ? On(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 2, Sf(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && sh(m, n);
        break;
      case 24:
        On(
          l,
          n,
          u,
          c
        ), s & 2048 && rh(n.alternate, n);
        break;
      default:
        On(
          l,
          n,
          u,
          c
        );
    }
  }
  function Sf(l, n, u, c, s) {
    for (s = s && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var r = l, m = n, v = u, A = c, j = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Sf(
            r,
            m,
            v,
            A,
            s
          ), An(8, m);
          break;
        case 23:
          break;
        case 22:
          var L = m.stateNode;
          m.memoizedState !== null ? L._visibility & 2 ? Sf(
            r,
            m,
            v,
            A,
            s
          ) : or(
            r,
            m
          ) : (L._visibility |= 2, Sf(
            r,
            m,
            v,
            A,
            s
          )), s && j & 2048 && sh(
            m.alternate,
            m
          );
          break;
        case 24:
          Sf(
            r,
            m,
            v,
            A,
            s
          ), s && j & 2048 && rh(m.alternate, m);
          break;
        default:
          Sf(
            r,
            m,
            v,
            A,
            s
          );
      }
      n = n.sibling;
    }
  }
  function or(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            or(u, c), s & 2048 && sh(
              c.alternate,
              c
            );
            break;
          case 24:
            or(u, c), s & 2048 && rh(c.alternate, c);
            break;
          default:
            or(u, c);
        }
        n = n.sibling;
      }
  }
  var Ca = 8192;
  function Uu(l, n, u) {
    if (l.subtreeFlags & Ca)
      for (l = l.child; l !== null; )
        ig(
          l,
          n,
          u
        ), l = l.sibling;
  }
  function ig(l, n, u) {
    switch (l.tag) {
      case 26:
        Uu(
          l,
          n,
          u
        ), l.flags & Ca && l.memoizedState !== null && Yu(
          u,
          Je,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Uu(
          l,
          n,
          u
        );
        break;
      case 3:
      case 4:
        var c = Je;
        Je = ua(l.stateNode.containerInfo), Uu(
          l,
          n,
          u
        ), Je = c;
        break;
      case 22:
        l.memoizedState === null && (c = l.alternate, c !== null && c.memoizedState !== null ? (c = Ca, Ca = 16777216, Uu(
          l,
          n,
          u
        ), Ca = c) : Uu(
          l,
          n,
          u
        ));
        break;
      default:
        Uu(
          l,
          n,
          u
        );
    }
  }
  function dh(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function bf(l) {
    var n = l.deletions;
    if (l.flags & 16) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          ql = c, hh(
            c,
            l
          );
        }
      dh(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Zy(l), l = l.sibling;
  }
  function Zy(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        bf(l), l.flags & 2048 && tn(9, l, l.return);
        break;
      case 3:
        bf(l);
        break;
      case 12:
        bf(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, fr(l)) : bf(l);
        break;
      default:
        bf(l);
    }
  }
  function fr(l) {
    var n = l.deletions;
    if (l.flags & 16) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          ql = c, hh(
            c,
            l
          );
        }
      dh(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          tn(8, n, n.return), fr(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, fr(n));
          break;
        default:
          fr(n);
      }
      l = l.sibling;
    }
  }
  function hh(l, n) {
    for (; ql !== null; ) {
      var u = ql;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          tn(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          js(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, ql = c;
      else
        e: for (u = l; ql !== null; ) {
          c = ql;
          var s = c.sibling, r = c.return;
          if (Xy(c), c === u) {
            ql = null;
            break e;
          }
          if (s !== null) {
            s.return = r, ql = s;
            break e;
          }
          ql = r;
        }
    }
  }
  var cg = {
    getCacheForType: function(l) {
      var n = k(dl), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return k(dl).controller.signal;
    }
  }, Jy = typeof WeakMap == "function" ? WeakMap : Map, pt = 0, Ct = null, ut = null, et = 0, Ot = 0, Ue = null, Hu = !1, uc = !1, mh = !1, $n = 0, Gt = 0, kn = 0, lo = 0, yh = 0, Ta = 0, ll = 0, sr = null, al = null, ph = !1, Wn = 0, Ky = 0, St = 1 / 0, Ef = null, kt = null, Dl = 0, yi = null, ic = null, Nu = 0, Ua = 0, gh = null, vh = null, Tf = 0, rr = null;
  function Ha() {
    return pt & 2 && et !== 0 ? et & -et : _.T !== null ? Ah() : ld();
  }
  function og() {
    if (Ta === 0)
      if (!(et & 536870912) || nt) {
        var l = ae;
        ae <<= 1, !(ae & 3932160) && (ae = 262144), Ta = l;
      } else Ta = 536870912;
    return l = pa.current, l !== null && (l.flags |= 32), Ta;
  }
  function Aa(l, n, u) {
    (l === Ct && (Ot === 2 || Ot === 9) || l.cancelPendingCommit !== null) && (Bu(l, 0), pi(
      l,
      et,
      Ta,
      !1
    )), Ui(l, u), (!(pt & 2) || l !== Ct) && (l === Ct && (!(pt & 2) && (lo |= u), Gt === 4 && pi(
      l,
      et,
      Ta,
      !1
    )), ju(l));
  }
  function fg(l, n, u) {
    if (pt & 6) throw Error(U(327));
    var c = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || Pe(l, n), s = c ? mg(l, n) : bh(l, n, !0), r = c;
    do {
      if (s === 0) {
        uc && !c && pi(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !sg(u)) {
          s = bh(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            n = m;
            e: {
              var v = l;
              s = sr;
              var A = v.current.memoizedState.isDehydrated;
              if (A && (Bu(v, m).flags |= 256), m = bh(
                v,
                m,
                !1
              ), m !== 2) {
                if (mh && !A) {
                  v.errorRecoveryDisabledLanes |= r, lo |= r, s = 4;
                  break e;
                }
                r = al, al = s, r !== null && (al === null ? al = r : al.push.apply(
                  al,
                  r
                ));
              }
              s = m;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Bu(l, 0), pi(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, r = s, r) {
            case 0:
            case 1:
              throw Error(U(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              pi(
                c,
                n,
                Ta,
                !Hu
              );
              break e;
            case 2:
              al = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(U(329));
          }
          if ((n & 62914560) === n && (s = Wn + 300 - gl(), 10 < s)) {
            if (pi(
              c,
              n,
              Ta,
              !Hu
            ), he(c, 0, !0) !== 0) break e;
            Nu = n, c.timeoutHandle = Er(
              dr.bind(
                null,
                c,
                u,
                al,
                Ef,
                ph,
                n,
                Ta,
                lo,
                ll,
                Hu,
                r,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break e;
          }
          dr(
            c,
            u,
            al,
            Ef,
            ph,
            n,
            Ta,
            lo,
            ll,
            Hu,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ju(l);
  }
  function dr(l, n, u, c, s, r, m, v, A, j, L, K, Y, w) {
    if (l.timeoutHandle = -1, K = n.subtreeFlags, K & 8192 || (K & 16785408) === 16785408) {
      K = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Hn
      }, ig(
        n,
        r,
        K
      );
      var fe = (r & 62914560) === r ? Wn - gl() : (r & 4194048) === r ? Ky - gl() : 0;
      if (fe = vp(
        K,
        fe
      ), fe !== null) {
        Nu = r, l.cancelPendingCommit = fe(
          vg.bind(
            null,
            l,
            n,
            r,
            u,
            c,
            s,
            m,
            v,
            A,
            L,
            K,
            null,
            Y,
            w
          )
        ), pi(l, r, m, !j);
        return;
      }
    }
    vg(
      l,
      n,
      r,
      u,
      c,
      s,
      m,
      v,
      A
    );
  }
  function sg(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!aa(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function pi(l, n, u, c) {
    n &= ~yh, n &= ~lo, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Ul(s), m = 1 << r;
      c[r] = -1, s &= ~m;
    }
    u !== 0 && ms(l, u, n);
  }
  function Af() {
    return pt & 6 ? !0 : (vi(0), !1);
  }
  function $y() {
    if (ut !== null) {
      if (Ot === 0)
        var l = ut.return;
      else
        l = ut, Xn = ui = null, Zs(l), Ki = null, Vc = 0, l = ut;
      for (; l !== null; )
        ng(l.alternate, l), l = l.return;
      ut = null;
    }
  }
  function Bu(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Bg(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Nu = 0, $y(), Ct = l, ut = u = ai(l.current, null), et = n, Ot = 0, Ue = null, Hu = !1, uc = Pe(l, n), mh = !1, ll = Ta = yh = lo = kn = Gt = 0, al = sr = null, ph = !1, n & 8 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - Ul(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return $n = n, Va(), u;
  }
  function Of(l, n) {
    Qe = null, _.H = Ps, n === Vi || n === ef ? (n = ay(), Ot = 3) : n === Qc ? (n = ay(), Ot = 4) : Ot = n === th ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Ue = n, ut === null && (Gt = 1, df(
      l,
      Ja(n, l.current)
    ));
  }
  function rg() {
    var l = pa.current;
    return l === null ? !0 : (et & 4194048) === et ? Fa === null : (et & 62914560) === et || et & 536870912 ? l === Fa : !1;
  }
  function dg() {
    var l = _.H;
    return _.H = Ps, l === null ? Ps : l;
  }
  function hg() {
    var l = _.A;
    return _.A = cg, l;
  }
  function Sh() {
    Gt = 4, Hu || (et & 4194048) !== et && pa.current !== null || (uc = !0), !(kn & 134217727) && !(lo & 134217727) || Ct === null || pi(
      Ct,
      et,
      Ta,
      !1
    );
  }
  function bh(l, n, u) {
    var c = pt;
    pt |= 2;
    var s = dg(), r = hg();
    (Ct !== l || et !== n) && (Ef = null, Bu(l, n)), n = !1;
    var m = Gt;
    e: do
      try {
        if (Ot !== 0 && ut !== null) {
          var v = ut, A = Ue;
          switch (Ot) {
            case 8:
              $y(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              pa.current === null && (n = !0);
              var j = Ot;
              if (Ot = 0, Ue = null, ao(l, v, A, j), u && uc) {
                m = 0;
                break e;
              }
              break;
            default:
              j = Ot, Ot = 0, Ue = null, ao(l, v, A, j);
          }
        }
        eS(), m = Gt;
        break;
      } catch (L) {
        Of(l, L);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Xn = ui = null, pt = c, _.H = s, _.A = r, ut === null && (Ct = null, et = 0, Va()), m;
  }
  function eS() {
    for (; ut !== null; ) yg(ut);
  }
  function mg(l, n) {
    var u = pt;
    pt |= 2;
    var c = dg(), s = hg();
    Ct !== l || et !== n ? (Ef = null, St = gl() + 500, Bu(l, n)) : uc = Pe(
      l,
      n
    );
    e: do
      try {
        if (Ot !== 0 && ut !== null) {
          n = ut;
          var r = Ue;
          t: switch (Ot) {
            case 1:
              Ot = 0, Ue = null, ao(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (ty(r)) {
                Ot = 0, Ue = null, pg(n);
                break;
              }
              n = function() {
                Ot !== 2 && Ot !== 9 || Ct !== l || (Ot = 7), ju(l);
              }, r.then(n, n);
              break e;
            case 3:
              Ot = 7;
              break e;
            case 4:
              Ot = 5;
              break e;
            case 7:
              ty(r) ? (Ot = 0, Ue = null, pg(n)) : (Ot = 0, Ue = null, ao(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (ut.tag) {
                case 26:
                  m = ut.memoizedState;
                case 5:
                case 27:
                  var v = ut;
                  if (m ? Ba(m) : v.stateNode.complete) {
                    Ot = 0, Ue = null;
                    var A = v.sibling;
                    if (A !== null) ut = A;
                    else {
                      var j = v.return;
                      j !== null ? (ut = j, hr(j)) : ut = null;
                    }
                    break t;
                  }
              }
              Ot = 0, Ue = null, ao(l, n, r, 5);
              break;
            case 6:
              Ot = 0, Ue = null, ao(l, n, r, 6);
              break;
            case 8:
              $y(), Gt = 6;
              break e;
            default:
              throw Error(U(462));
          }
        }
        cc();
        break;
      } catch (L) {
        Of(l, L);
      }
    while (!0);
    return Xn = ui = null, _.H = c, _.A = s, pt = u, ut !== null ? 0 : (Ct = null, et = 0, Va(), Gt);
  }
  function cc() {
    for (; ut !== null && !cu(); )
      yg(ut);
  }
  function yg(l) {
    var n = By(l.alternate, l, $n);
    l.memoizedProps = l.pendingProps, n === null ? hr(l) : ut = n;
  }
  function pg(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = lc(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          et
        );
        break;
      case 11:
        n = lc(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          et
        );
        break;
      case 5:
        Zs(n);
      default:
        ng(u, n), n = ut = $m(n, $n), n = By(u, n, $n);
    }
    l.memoizedProps = l.pendingProps, n === null ? hr(l) : ut = n;
  }
  function ao(l, n, u, c) {
    Xn = ui = null, Zs(n), Ki = null, Vc = 0;
    var s = n.return;
    try {
      if (Pv(
        l,
        s,
        n,
        u,
        et
      )) {
        Gt = 1, df(
          l,
          Ja(u, l.current)
        ), ut = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw ut = s, r;
      Gt = 1, df(
        l,
        Ja(u, l.current)
      ), ut = null;
      return;
    }
    n.flags & 32768 ? (nt || c === 1 ? l = !0 : uc || et & 536870912 ? l = !1 : (Hu = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = pa.current, c !== null && c.tag === 13 && (c.flags |= 16384))), gg(n, l)) : hr(n);
  }
  function hr(l) {
    var n = l;
    do {
      if (n.flags & 32768) {
        gg(
          n,
          Hu
        );
        return;
      }
      l = n.return;
      var u = lg(
        n.alternate,
        n,
        $n
      );
      if (u !== null) {
        ut = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        ut = n;
        return;
      }
      ut = n = l;
    } while (n !== null);
    Gt === 0 && (Gt = 5);
  }
  function gg(l, n) {
    do {
      var u = ag(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, ut = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        ut = l;
        return;
      }
      ut = l = u;
    } while (l !== null);
    Gt = 6, ut = null;
  }
  function vg(l, n, u, c, s, r, m, v, A) {
    l.cancelPendingCommit = null;
    do
      zf();
    while (Dl !== 0);
    if (pt & 6) throw Error(U(327));
    if (n !== null) {
      if (n === l.current) throw Error(U(177));
      if (r = n.lanes | n.childLanes, r |= vn, Bo(
        l,
        u,
        r,
        m,
        v,
        A
      ), l === Ct && (ut = Ct = null, et = 0), ic = n, yi = l, Nu = u, Ua = r, gh = s, vh = c, n.subtreeFlags & 10256 || n.flags & 10256 ? (l.callbackNode = null, l.callbackPriority = 0, _g(Cn, function() {
        return Ag(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, n.subtreeFlags & 13878 || c) {
        c = _.T, _.T = null, s = V.p, V.p = 2, m = pt, pt |= 4;
        try {
          gf(l, n, u);
        } finally {
          pt = m, V.p = s, _.T = c;
        }
      }
      Dl = 1, Sg(), bg(), Eg();
    }
  }
  function Sg() {
    if (Dl === 1) {
      Dl = 0;
      var l = yi, n = ic, u = (n.flags & 13878) !== 0;
      if (n.subtreeFlags & 13878 || u) {
        u = _.T, _.T = null;
        var c = V.p;
        V.p = 2;
        var s = pt;
        pt |= 4;
        try {
          fh(n, l);
          var r = Mh, m = Gi(l.containerInfo), v = r.focusedElem, A = r.selectionRange;
          if (m !== v && v && v.ownerDocument && Bc(
            v.ownerDocument.documentElement,
            v
          )) {
            if (A !== null && zs(v)) {
              var j = A.start, L = A.end;
              if (L === void 0 && (L = j), "selectionStart" in v)
                v.selectionStart = j, v.selectionEnd = Math.min(
                  L,
                  v.value.length
                );
              else {
                var K = v.ownerDocument || document, Y = K && K.defaultView || window;
                if (Y.getSelection) {
                  var w = Y.getSelection(), fe = v.textContent.length, ze = Math.min(A.start, fe), Ht = A.end === void 0 ? ze : Math.min(A.end, fe);
                  !w.extend && ze > Ht && (m = Ht, Ht = ze, ze = m);
                  var C = Jm(
                    v,
                    ze
                  ), D = Jm(
                    v,
                    Ht
                  );
                  if (C && D && (w.rangeCount !== 1 || w.anchorNode !== C.node || w.anchorOffset !== C.offset || w.focusNode !== D.node || w.focusOffset !== D.offset)) {
                    var N = K.createRange();
                    N.setStart(C.node, C.offset), w.removeAllRanges(), ze > Ht ? (w.addRange(N), w.extend(D.node, D.offset)) : (N.setEnd(D.node, D.offset), w.addRange(N));
                  }
                }
              }
            }
            for (K = [], w = v; w = w.parentNode; )
              w.nodeType === 1 && K.push({
                element: w,
                left: w.scrollLeft,
                top: w.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < K.length; v++) {
              var J = K[v];
              J.element.scrollLeft = J.left, J.element.scrollTop = J.top;
            }
          }
          _l = !!Rh, Mh = Rh = null;
        } finally {
          pt = s, V.p = c, _.T = u;
        }
      }
      l.current = n, Dl = 2;
    }
  }
  function bg() {
    if (Dl === 2) {
      Dl = 0;
      var l = yi, n = ic, u = (n.flags & 8772) !== 0;
      if (n.subtreeFlags & 8772 || u) {
        u = _.T, _.T = null;
        var c = V.p;
        V.p = 2;
        var s = pt;
        pt |= 4;
        try {
          ur(l, n.alternate, n);
        } finally {
          pt = s, V.p = c, _.T = u;
        }
      }
      Dl = 3;
    }
  }
  function Eg() {
    if (Dl === 4 || Dl === 3) {
      Dl = 0, Sc();
      var l = yi, n = ic, u = Nu, c = vh;
      n.subtreeFlags & 10256 || n.flags & 10256 ? Dl = 5 : (Dl = 0, ic = yi = null, Tg(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (kt = null), bm(u), n = n.stateNode, Al && typeof Al.onCommitFiberRoot == "function")
        try {
          Al.onCommitFiberRoot(
            dn,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = _.T, s = V.p, V.p = 2, _.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < c.length; m++) {
            var v = c[m];
            r(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          _.T = n, V.p = s;
        }
      }
      Nu & 3 && zf(), ju(l), s = l.pendingLanes, u & 261930 && s & 42 ? l === rr ? Tf++ : (Tf = 0, rr = l) : Tf = 0, vi(0);
    }
  }
  function Tg(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, js(n)));
  }
  function zf() {
    return Sg(), bg(), Eg(), Ag();
  }
  function Ag() {
    if (Dl !== 5) return !1;
    var l = yi, n = Ua;
    Ua = 0;
    var u = bm(Nu), c = _.T, s = V.p;
    try {
      V.p = 32 > u ? 32 : u, _.T = null, u = gh, gh = null;
      var r = yi, m = Nu;
      if (Dl = 0, ic = yi = null, Nu = 0, pt & 6) throw Error(U(331));
      var v = pt;
      if (pt |= 4, Zy(r.current), vf(
        r,
        r.current,
        m,
        u
      ), pt = v, vi(0, !1), Al && typeof Al.onPostCommitFiberRoot == "function")
        try {
          Al.onPostCommitFiberRoot(dn, r);
        } catch {
        }
      return !0;
    } finally {
      V.p = s, _.T = c, Tg(l, n);
    }
  }
  function Og(l, n, u) {
    n = Ja(u, n), n = zy(l.stateNode, n, 2), l = Wa(l, n, 2), l !== null && (Ui(l, 2), ju(l));
  }
  function zt(l, n, u) {
    if (l.tag === 3)
      Og(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Og(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (kt === null || !kt.has(c))) {
            l = Ja(u, l), u = Dy(2), c = Wa(n, u, 2), c !== null && (_y(
              u,
              c,
              n,
              l
            ), Ui(c, 2), ju(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function mr(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new Jy();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (mh = !0, s.add(u), l = ky.bind(null, l, n, u), n.then(l, l));
  }
  function ky(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Ct === l && (et & u) === u && (Gt === 4 || Gt === 3 && (et & 62914560) === et && 300 > gl() - Wn ? !(pt & 2) && Bu(l, 0) : yh |= u, ll === et && (ll = 0)), ju(l);
  }
  function zg(l, n) {
    n === 0 && (n = ta()), l = li(l, n), l !== null && (Ui(l, n), ju(l));
  }
  function ln(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), zg(l, u);
  }
  function Dg(l, n) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var c = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(U(314));
    }
    c !== null && c.delete(n), zg(l, u);
  }
  function _g(l, n) {
    return re(l, n);
  }
  var Df = null, no = null, Wy = !1, Eh = !1, Fy = !1, gi = 0;
  function ju(l) {
    l !== no && l.next === null && (no === null ? Df = no = l : no = no.next = l), Eh = !0, Wy || (Wy = !0, pr());
  }
  function vi(l, n) {
    if (!Fy && Eh) {
      Fy = !0;
      do
        for (var u = !1, c = Df; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = c.suspendedLanes, v = c.pingedLanes;
              r = (1 << 31 - Ul(42 | l) + 1) - 1, r &= s & ~(m & ~v), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, uo(c, r));
          } else
            r = et, r = he(
              c,
              c === Ct ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), !(r & 3) || Pe(c, r) || (u = !0, uo(c, r));
          c = c.next;
        }
      while (u);
      Fy = !1;
    }
  }
  function Th() {
    Iy();
  }
  function Iy() {
    Eh = Wy = !1;
    var l = 0;
    gi !== 0 && tS() && (l = gi);
    for (var n = gl(), u = null, c = Df; c !== null; ) {
      var s = c.next, r = Py(c, n);
      r === 0 ? (c.next = null, u === null ? Df = s : u.next = s, s === null && (no = u)) : (u = c, (l !== 0 || r & 3) && (Eh = !0)), c = s;
    }
    Dl !== 0 && Dl !== 5 || vi(l), gi !== 0 && (gi = 0);
  }
  function Py(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - Ul(r), v = 1 << m, A = s[m];
      A === -1 ? (!(v & u) || v & c) && (s[m] = we(v, n)) : A <= n && (l.expiredLanes |= v), r &= ~v;
    }
    if (n = Ct, u = et, u = he(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (Ot === 2 || Ot === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && Mi(c), l.callbackNode = null, l.callbackPriority = 0;
    if (!(u & 3) || Pe(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && Mi(c), bm(u)) {
        case 2:
        case 8:
          u = Ho;
          break;
        case 32:
          u = Cn;
          break;
        case 268435456:
          u = No;
          break;
        default:
          u = Cn;
      }
      return c = yr.bind(null, l), u = re(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && Mi(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function yr(l, n) {
    if (Dl !== 0 && Dl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (zf() && l.callbackNode !== u)
      return null;
    var c = et;
    return c = he(
      l,
      l === Ct ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (fg(l, c, n), Py(l, gl()), l.callbackNode != null && l.callbackNode === u ? yr.bind(null, l) : null);
  }
  function uo(l, n) {
    if (zf()) return null;
    fg(l, n, !0);
  }
  function pr() {
    jg(function() {
      pt & 6 ? re(
        Uo,
        Th
      ) : Iy();
    });
  }
  function Ah() {
    if (gi === 0) {
      var l = Li;
      l === 0 && (l = I, I <<= 1, !(I & 261888) && (I = 256)), gi = l;
    }
    return gi;
  }
  function Rg(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : mn("" + l);
  }
  function io(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function gr(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = Rg(
        (s[sa] || null).action
      ), m = c.submitter;
      m && (n = (n = m[sa] || null) ? Rg(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var v = new Ts(
        "action",
        "action",
        null,
        c,
        s
      );
      l.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (gi !== 0) {
                  var A = m ? io(s, m) : new FormData(s);
                  sf(
                    u,
                    {
                      pending: !0,
                      data: A,
                      method: s.method,
                      action: r
                    },
                    null,
                    A
                  );
                }
              } else
                typeof r == "function" && (v.preventDefault(), A = m ? io(s, m) : new FormData(s), sf(
                  u,
                  {
                    pending: !0,
                    data: A,
                    method: s.method,
                    action: r
                  },
                  r,
                  A
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Oh = 0; Oh < $o.length; Oh++) {
    var _f = $o[Oh], ep = _f.toLowerCase(), tp = _f[0].toUpperCase() + _f.slice(1);
    da(
      ep,
      "on" + tp
    );
  }
  da(_s, "onAnimationEnd"), da(Km, "onAnimationIteration"), da(Od, "onAnimationStart"), da("dblclick", "onDoubleClick"), da("focusin", "onFocus"), da("focusout", "onBlur"), da(jc, "onTransitionRun"), da(Rs, "onTransitionStart"), da(yu, "onTransitionCancel"), da(G0, "onTransitionEnd"), su("onMouseEnter", ["mouseout", "mouseover"]), su("onMouseLeave", ["mouseout", "mouseover"]), su("onPointerEnter", ["pointerout", "pointerover"]), su("onPointerLeave", ["pointerout", "pointerover"]), Bi(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Bi(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Bi("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Bi(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Bi(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Bi(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Rf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Mg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rf)
  );
  function Cg(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], s = c.event;
      c = c.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var m = c.length - 1; 0 <= m; m--) {
            var v = c[m], A = v.instance, j = v.currentTarget;
            if (v = v.listener, A !== r && s.isPropagationStopped())
              break e;
            r = v, s.currentTarget = j;
            try {
              r(s);
            } catch (L) {
              Yc(L);
            }
            s.currentTarget = null, r = A;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (v = c[m], A = v.instance, j = v.currentTarget, v = v.listener, A !== r && s.isPropagationStopped())
              break e;
            r = v, s.currentTarget = j;
            try {
              r(s);
            } catch (L) {
              Yc(L);
            }
            s.currentTarget = null, r = A;
          }
      }
    }
  }
  function at(l, n) {
    var u = n[ad];
    u === void 0 && (u = n[ad] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (vr(n, l, 2, !1), u.add(c));
  }
  function lp(l, n, u) {
    var c = 0;
    n && (c |= 4), vr(
      u,
      l,
      c,
      n
    );
  }
  var zh = "_reactListening" + Math.random().toString(36).slice(2);
  function Mf(l) {
    if (!l[zh]) {
      l[zh] = !0, Oc.forEach(function(u) {
        u !== "selectionchange" && (Mg.has(u) || lp(u, !1, l), lp(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[zh] || (n[zh] = !0, lp("selectionchange", !1, n));
    }
  }
  function vr(l, n, u, c) {
    switch (_r(n)) {
      case 2:
        var s = xu;
        break;
      case 8:
        s = qu;
        break;
      default:
        s = kl;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !bs || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function ap(l, n, u, c, s) {
    var r = c;
    if (!(n & 1) && !(n & 2) && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var m = c.tag;
        if (m === 3 || m === 4) {
          var v = c.stateNode.containerInfo;
          if (v === s) break;
          if (m === 4)
            for (m = c.return; m !== null; ) {
              var A = m.tag;
              if ((A === 3 || A === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; v !== null; ) {
            if (m = Ec(v), m === null) return;
            if (A = m.tag, A === 5 || A === 6 || A === 26 || A === 27) {
              c = r = m;
              continue e;
            }
            v = v.parentNode;
          }
        }
        c = c.return;
      }
    Mm(function() {
      var j = r, L = rd(u), K = [];
      e: {
        var Y = pu.get(l);
        if (Y !== void 0) {
          var w = Ts, fe = l;
          switch (l) {
            case "keypress":
              if (hd(u) === 0) break e;
            case "keydown":
            case "keyup":
              w = gd;
              break;
            case "focusin":
              fe = "focus", w = yd;
              break;
            case "focusout":
              fe = "blur", w = yd;
              break;
            case "beforeblur":
            case "afterblur":
              w = yd;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              w = Lo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              w = _0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              w = H0;
              break;
            case _s:
            case Km:
            case Od:
              w = M0;
              break;
            case G0:
              w = kv;
              break;
            case "scroll":
            case "scrollend":
              w = Kv;
              break;
            case "wheel":
              w = Wv;
              break;
            case "copy":
            case "cut":
            case "paste":
              w = Rc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              w = jn;
              break;
            case "toggle":
            case "beforetoggle":
              w = qm;
          }
          var ze = (n & 4) !== 0, Ht = !ze && (l === "scroll" || l === "scrollend"), C = ze ? Y !== null ? Y + "Capture" : null : Y;
          ze = [];
          for (var D = j, N; D !== null; ) {
            var J = D;
            if (N = J.stateNode, J = J.tag, J !== 5 && J !== 26 && J !== 27 || N === null || C === null || (J = Hl(D, C), J != null && ze.push(
              Sr(D, J, N)
            )), Ht) break;
            D = D.return;
          }
          0 < ze.length && (Y = new w(
            Y,
            fe,
            null,
            u,
            L
          ), K.push({ event: Y, listeners: ze }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (Y = l === "mouseover" || l === "pointerover", w = l === "mouseout" || l === "pointerout", Y && u !== sd && (fe = u.relatedTarget || u.fromElement) && (Ec(fe) || fe[Hi]))
            break e;
          if ((w || Y) && (Y = L.window === L ? L : (Y = L.ownerDocument) ? Y.defaultView || Y.parentWindow : window, w ? (fe = u.relatedTarget || u.toElement, w = j, fe = fe ? Ec(fe) : null, fe !== null && (Ht = Ne(fe), ze = fe.tag, fe !== Ht || ze !== 5 && ze !== 27 && ze !== 6) && (fe = null)) : (w = null, fe = j), w !== fe)) {
            if (ze = Lo, J = "onMouseLeave", C = "onMouseEnter", D = "mouse", (l === "pointerout" || l === "pointerover") && (ze = jn, J = "onPointerLeave", C = "onPointerEnter", D = "pointer"), Ht = w == null ? Y : jo(w), N = fe == null ? Y : jo(fe), Y = new ze(
              J,
              D + "leave",
              w,
              u,
              L
            ), Y.target = Ht, Y.relatedTarget = N, J = null, Ec(L) === j && (ze = new ze(
              C,
              D + "enter",
              fe,
              u,
              L
            ), ze.target = N, ze.relatedTarget = Ht, J = ze), Ht = J, w && fe)
              t: {
                for (ze = Ug, C = w, D = fe, N = 0, J = C; J; J = ze(J))
                  N++;
                J = 0;
                for (var be = D; be; be = ze(be))
                  J++;
                for (; 0 < N - J; )
                  C = ze(C), N--;
                for (; 0 < J - N; )
                  D = ze(D), J--;
                for (; N--; ) {
                  if (C === D || D !== null && C === D.alternate) {
                    ze = C;
                    break t;
                  }
                  C = ze(C), D = ze(D);
                }
                ze = null;
              }
            else ze = null;
            w !== null && Dh(
              K,
              Y,
              w,
              ze,
              !1
            ), fe !== null && Ht !== null && Dh(
              K,
              Ht,
              fe,
              ze,
              !0
            );
          }
        }
        e: {
          if (Y = j ? jo(j) : window, w = Y.nodeName && Y.nodeName.toLowerCase(), w === "select" || w === "input" && Y.type === "file")
            var dt = Lm;
          else if (mu(Y))
            if (bd)
              dt = Nc;
            else {
              dt = x0;
              var me = Y0;
            }
          else
            w = Y.nodeName, !w || w.toLowerCase() !== "input" || Y.type !== "checkbox" && Y.type !== "radio" ? j && Rm(j.elementType) && (dt = Lm) : dt = qi;
          if (dt && (dt = dt(l, j))) {
            Qm(
              K,
              dt,
              u,
              L
            );
            break e;
          }
          me && me(l, Y, j), l === "focusout" && j && Y.type === "number" && j.memoizedProps.value != null && zc(Y, "number", Y.value);
        }
        switch (me = j ? jo(j) : window, l) {
          case "focusin":
            (mu(me) || me.contentEditable === "true") && (wi = me, Jo = j, gn = null);
            break;
          case "focusout":
            gn = Jo = wi = null;
            break;
          case "mousedown":
            xn = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            xn = !1, Ad(K, u, L);
            break;
          case "selectionchange":
            if (Ds) break;
          case "keydown":
          case "keyup":
            Ad(K, u, L);
        }
        var Xe;
        if (Vo)
          e: {
            switch (l) {
              case "compositionstart":
                var Ke = "onCompositionStart";
                break e;
              case "compositionend":
                Ke = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ke = "onCompositionUpdate";
                break e;
            }
            Ke = void 0;
          }
        else
          Cc ? Sd(l, u) && (Ke = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Ke = "onCompositionStart");
        Ke && (Gm && u.locale !== "ko" && (Cc || Ke !== "onCompositionStart" ? Ke === "onCompositionEnd" && Cc && (Xe = Um()) : (ei = L, Cm = "value" in ei ? ei.value : ei.textContent, Cc = !0)), me = br(j, Ke), 0 < me.length && (Ke = new C0(
          Ke,
          l,
          null,
          u,
          L
        ), K.push({ event: Ke, listeners: me }), Xe ? Ke.data = Xe : (Xe = wm(u), Xe !== null && (Ke.data = Xe)))), (Xe = la ? j0(l, u) : Fv(l, u)) && (Ke = br(j, "onBeforeInput"), 0 < Ke.length && (me = new C0(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          L
        ), K.push({
          event: me,
          listeners: Ke
        }), me.data = Xe)), gr(
          K,
          l,
          j,
          u,
          L
        );
      }
      Cg(K, n);
    });
  }
  function Sr(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function br(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Hl(l, u), s != null && c.unshift(
        Sr(l, s, r)
      ), s = Hl(l, n), s != null && c.push(
        Sr(l, s, r)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function Ug(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Dh(l, n, u, c, s) {
    for (var r = n._reactName, m = []; u !== null && u !== c; ) {
      var v = u, A = v.alternate, j = v.stateNode;
      if (v = v.tag, A !== null && A === c) break;
      v !== 5 && v !== 26 && v !== 27 || j === null || (A = j, s ? (j = Hl(u, r), j != null && m.unshift(
        Sr(u, j, A)
      )) : s || (j = Hl(u, r), j != null && m.push(
        Sr(u, j, A)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var Hg = /\r\n?/g, np = /\u0000|\uFFFD/g;
  function up(l) {
    return (typeof l == "string" ? l : "" + l).replace(Hg, `
`).replace(np, "");
  }
  function ip(l, n) {
    return n = up(n), up(l) === n;
  }
  function Ut(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || ru(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && ru(l, "" + c);
        break;
      case "className":
        cd(l, "class", c);
        break;
      case "tabIndex":
        cd(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        cd(l, u, c);
        break;
      case "style":
        O0(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          cd(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = mn("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && Ut(l, n, "name", s.name, s, null), Ut(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Ut(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Ut(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Ut(l, n, "encType", s.encType, s, null), Ut(l, n, "method", s.method, s, null), Ut(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = mn("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = Hn);
        break;
      case "onScroll":
        c != null && at("scroll", l);
        break;
      case "onScrollEnd":
        c != null && at("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(U(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(U(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = mn("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        at("beforetoggle", l), at("toggle", l), qo(l, "popover", c);
        break;
      case "xlinkActuate":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        Iu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        Iu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        Iu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        qo(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Jv.get(u) || u, qo(l, u, c));
    }
  }
  function cp(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        O0(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(U(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(U(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? ru(l, c) : (typeof c == "number" || typeof c == "bigint") && ru(l, "" + c);
        break;
      case "onScroll":
        c != null && at("scroll", l);
        break;
      case "onScrollEnd":
        c != null && at("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Hn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ni.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[sa] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : qo(l, u, c);
          }
    }
  }
  function $l(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        at("error", l), at("load", l);
        var c = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var m = u[r];
            if (m != null)
              switch (r) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(U(137, n));
                default:
                  Ut(l, n, r, m, u, null);
              }
          }
        s && Ut(l, n, "srcSet", u.srcSet, u, null), c && Ut(l, n, "src", u.src, u, null);
        return;
      case "input":
        at("invalid", l);
        var v = r = m = s = null, A = null, j = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var L = u[c];
            if (L != null)
              switch (c) {
                case "name":
                  s = L;
                  break;
                case "type":
                  m = L;
                  break;
                case "checked":
                  A = L;
                  break;
                case "defaultChecked":
                  j = L;
                  break;
                case "value":
                  r = L;
                  break;
                case "defaultValue":
                  v = L;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (L != null)
                    throw Error(U(137, n));
                  break;
                default:
                  Ut(l, n, c, L, u, null);
              }
          }
        gs(
          l,
          r,
          v,
          A,
          j,
          m,
          s,
          !1
        );
        return;
      case "select":
        at("invalid", l), c = m = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (v = u[s], v != null))
            switch (s) {
              case "value":
                r = v;
                break;
              case "defaultValue":
                m = v;
                break;
              case "multiple":
                c = v;
              default:
                Ut(l, n, s, v, u, null);
            }
        n = r, u = m, l.multiple = !!c, n != null ? Go(l, !!c, n, !1) : u != null && Go(l, !!c, u, !0);
        return;
      case "textarea":
        at("invalid", l), r = s = c = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (v = u[m], v != null))
            switch (m) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                s = v;
                break;
              case "children":
                r = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(U(91));
                break;
              default:
                Ut(l, n, m, v, u, null);
            }
        _m(l, c, s, r);
        return;
      case "option":
        for (A in u)
          if (u.hasOwnProperty(A) && (c = u[A], c != null))
            switch (A) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                Ut(l, n, A, c, u, null);
            }
        return;
      case "dialog":
        at("beforetoggle", l), at("toggle", l), at("cancel", l), at("close", l);
        break;
      case "iframe":
      case "object":
        at("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < Rf.length; c++)
          at(Rf[c], l);
        break;
      case "image":
        at("error", l), at("load", l);
        break;
      case "details":
        at("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        at("error", l), at("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (j in u)
          if (u.hasOwnProperty(j) && (c = u[j], c != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(U(137, n));
              default:
                Ut(l, n, j, c, u, null);
            }
        return;
      default:
        if (Rm(n)) {
          for (L in u)
            u.hasOwnProperty(L) && (c = u[L], c !== void 0 && cp(
              l,
              n,
              L,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (v in u)
      u.hasOwnProperty(v) && (c = u[v], c != null && Ut(l, n, v, c, u, null));
  }
  function op(l, n, u, c) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, r = null, m = null, v = null, A = null, j = null, L = null;
        for (w in u) {
          var K = u[w];
          if (u.hasOwnProperty(w) && K != null)
            switch (w) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = K;
              default:
                c.hasOwnProperty(w) || Ut(l, n, w, null, c, K);
            }
        }
        for (var Y in c) {
          var w = c[Y];
          if (K = u[Y], c.hasOwnProperty(Y) && (w != null || K != null))
            switch (Y) {
              case "type":
                r = w;
                break;
              case "name":
                s = w;
                break;
              case "checked":
                j = w;
                break;
              case "defaultChecked":
                L = w;
                break;
              case "value":
                m = w;
                break;
              case "defaultValue":
                v = w;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null)
                  throw Error(U(137, n));
                break;
              default:
                w !== K && Ut(
                  l,
                  n,
                  Y,
                  w,
                  c,
                  K
                );
            }
        }
        ps(
          l,
          m,
          v,
          A,
          j,
          L,
          r,
          s
        );
        return;
      case "select":
        w = m = v = Y = null;
        for (r in u)
          if (A = u[r], u.hasOwnProperty(r) && A != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                w = A;
              default:
                c.hasOwnProperty(r) || Ut(
                  l,
                  n,
                  r,
                  null,
                  c,
                  A
                );
            }
        for (s in c)
          if (r = c[s], A = u[s], c.hasOwnProperty(s) && (r != null || A != null))
            switch (s) {
              case "value":
                Y = r;
                break;
              case "defaultValue":
                v = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== A && Ut(
                  l,
                  n,
                  s,
                  r,
                  c,
                  A
                );
            }
        n = v, u = m, c = w, Y != null ? Go(l, !!u, Y, !1) : !!c != !!u && (n != null ? Go(l, !!u, n, !0) : Go(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        w = Y = null;
        for (v in u)
          if (s = u[v], u.hasOwnProperty(v) && s != null && !c.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ut(l, n, v, null, c, s);
            }
        for (m in c)
          if (s = c[m], r = u[m], c.hasOwnProperty(m) && (s != null || r != null))
            switch (m) {
              case "value":
                Y = s;
                break;
              case "defaultValue":
                w = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(U(91));
                break;
              default:
                s !== r && Ut(l, n, m, s, c, r);
            }
        Dm(l, Y, w);
        return;
      case "option":
        for (var fe in u)
          if (Y = u[fe], u.hasOwnProperty(fe) && Y != null && !c.hasOwnProperty(fe))
            switch (fe) {
              case "selected":
                l.selected = !1;
                break;
              default:
                Ut(
                  l,
                  n,
                  fe,
                  null,
                  c,
                  Y
                );
            }
        for (A in c)
          if (Y = c[A], w = u[A], c.hasOwnProperty(A) && Y !== w && (Y != null || w != null))
            switch (A) {
              case "selected":
                l.selected = Y && typeof Y != "function" && typeof Y != "symbol";
                break;
              default:
                Ut(
                  l,
                  n,
                  A,
                  Y,
                  c,
                  w
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ze in u)
          Y = u[ze], u.hasOwnProperty(ze) && Y != null && !c.hasOwnProperty(ze) && Ut(l, n, ze, null, c, Y);
        for (j in c)
          if (Y = c[j], w = u[j], c.hasOwnProperty(j) && Y !== w && (Y != null || w != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Y != null)
                  throw Error(U(137, n));
                break;
              default:
                Ut(
                  l,
                  n,
                  j,
                  Y,
                  c,
                  w
                );
            }
        return;
      default:
        if (Rm(n)) {
          for (var Ht in u)
            Y = u[Ht], u.hasOwnProperty(Ht) && Y !== void 0 && !c.hasOwnProperty(Ht) && cp(
              l,
              n,
              Ht,
              void 0,
              c,
              Y
            );
          for (L in c)
            Y = c[L], w = u[L], !c.hasOwnProperty(L) || Y === w || Y === void 0 && w === void 0 || cp(
              l,
              n,
              L,
              Y,
              c,
              w
            );
          return;
        }
    }
    for (var C in u)
      Y = u[C], u.hasOwnProperty(C) && Y != null && !c.hasOwnProperty(C) && Ut(l, n, C, null, c, Y);
    for (K in c)
      Y = c[K], w = u[K], !c.hasOwnProperty(K) || Y === w || Y == null && w == null || Ut(l, n, K, Y, c, w);
  }
  function _h(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function fp() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, n = 0, u = performance.getEntriesByType("resource"), c = 0; c < u.length; c++) {
        var s = u[c], r = s.transferSize, m = s.initiatorType, v = s.duration;
        if (r && v && _h(m)) {
          for (m = 0, v = s.responseEnd, c += 1; c < u.length; c++) {
            var A = u[c], j = A.startTime;
            if (j > v) break;
            var L = A.transferSize, K = A.initiatorType;
            L && _h(K) && (A = A.responseEnd, m += L * (A < v ? 1 : (v - j) / (A - j)));
          }
          if (--c, n += 8 * (r + m) / (s.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Rh = null, Mh = null;
  function oc(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Ng(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function sp(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function Cf(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Ch = null;
  function tS() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Ch ? !1 : (Ch = l, !0) : (Ch = null, !1);
  }
  var Er = typeof setTimeout == "function" ? setTimeout : void 0, Bg = typeof clearTimeout == "function" ? clearTimeout : void 0, co = typeof Promise == "function" ? Promise : void 0, jg = typeof queueMicrotask == "function" ? queueMicrotask : typeof co < "u" ? function(l) {
    return co.resolve(null).then(l).catch(rp);
  } : Er;
  function rp(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Fn(l) {
    return l === "head";
  }
  function dp(l, n) {
    var u = n, c = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$" || u === "/&") {
          if (c === 0) {
            l.removeChild(s), Qf(n);
            return;
          }
          c--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          c++;
        else if (u === "html")
          oo(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, oo(u);
          for (var r = u.firstChild; r; ) {
            var m = r.nextSibling, v = r.nodeName;
            r[fu] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && r.rel.toLowerCase() === "stylesheet" || u.removeChild(r), r = m;
          }
        } else
          u === "body" && oo(l.ownerDocument.body);
      u = s;
    } while (u);
    Qf(n);
  }
  function yl(l, n) {
    var u = l;
    l = 0;
    do {
      var c = u.nextSibling;
      if (u.nodeType === 1 ? n ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (n ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), c && c.nodeType === 8)
        if (u = c.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = c;
    } while (u);
  }
  function Tr(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Tr(u), nd(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function lS(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[fu])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = Oa(l.nextSibling), l === null) break;
    }
    return null;
  }
  function ke(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Oa(l.nextSibling), l === null)) return null;
    return l;
  }
  function Yg(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = Oa(l.nextSibling), l === null)) return null;
    return l;
  }
  function zn(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function fc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Uf(l, n) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = n;
    else if (l.data !== "$?" || u.readyState !== "loading")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function Oa(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return l;
  }
  var Ar = null;
  function Uh(l) {
    l = l.nextSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (n === 0)
            return Oa(l.nextSibling);
          n--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || n++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function In(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (n === 0) return l;
          n--;
        } else u !== "/$" && u !== "/&" || n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Hf(l, n, u) {
    switch (n = oc(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(U(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(U(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(U(454));
        return l;
      default:
        throw Error(U(451));
    }
  }
  function oo(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    nd(l);
  }
  var Na = /* @__PURE__ */ new Map(), Or = /* @__PURE__ */ new Set();
  function ua(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Pn = V.d;
  V.d = {
    f: aS,
    r: xg,
    D: G,
    C: bt,
    L: nS,
    m: hp,
    X: Si,
    S: mp,
    M: sc
  };
  function aS() {
    var l = Pn.f(), n = Af();
    return l || n;
  }
  function xg(l) {
    var n = Tc(l);
    n !== null && n.tag === 5 && n.type === "form" ? Mt(n) : Pn.r(l);
  }
  var Nf = typeof document > "u" ? null : document;
  function bl(l, n, u) {
    var c = Nf;
    if (c && typeof n == "string" && n) {
      var s = La(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), Or.has(s) || (Or.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), $l(n, "link", l), Et(n), c.head.appendChild(n)));
    }
  }
  function G(l) {
    Pn.D(l), bl("dns-prefetch", l, null);
  }
  function bt(l, n) {
    Pn.C(l, n), bl("preconnect", l, n);
  }
  function nS(l, n, u) {
    Pn.L(l, n, u);
    var c = Nf;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + La(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + La(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + La(
        u.imageSizes
      ) + '"]')) : s += '[href="' + La(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = an(l);
          break;
        case "script":
          r = fo(l);
      }
      Na.has(r) || (l = Q(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Na.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(rc(r)) || n === "script" && c.querySelector(Yf(r)) || (n = c.createElement("link"), $l(n, "link", l), Et(n), c.head.appendChild(n)));
    }
  }
  function hp(l, n) {
    Pn.m(l, n);
    var u = Nf;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + La(c) + '"][href="' + La(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = fo(l);
      }
      if (!Na.has(r) && (l = Q({ rel: "modulepreload", href: l }, n), Na.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Yf(r)))
              return;
        }
        c = u.createElement("link"), $l(c, "link", l), Et(c), u.head.appendChild(c);
      }
    }
  }
  function mp(l, n, u) {
    Pn.S(l, n, u);
    var c = Nf;
    if (c && l) {
      var s = Ac(c).hoistableStyles, r = an(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var v = { loading: 0, preload: null };
        if (m = c.querySelector(
          rc(r)
        ))
          v.loading = 5;
        else {
          l = Q(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Na.get(r)) && Hh(l, u);
          var A = m = c.createElement("link");
          Et(A), $l(A, "link", l), A._p = new Promise(function(j, L) {
            A.onload = j, A.onerror = L;
          }), A.addEventListener("load", function() {
            v.loading |= 1;
          }), A.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, zr(m, n, c);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: v
        }, s.set(r, m);
      }
    }
  }
  function Si(l, n) {
    Pn.X(l, n);
    var u = Nf;
    if (u && l) {
      var c = Ac(u).hoistableScripts, s = fo(l), r = c.get(s);
      r || (r = u.querySelector(Yf(s)), r || (l = Q({ src: l, async: !0 }, n), (n = Na.get(s)) && Nh(l, n), r = u.createElement("script"), Et(r), $l(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function sc(l, n) {
    Pn.M(l, n);
    var u = Nf;
    if (u && l) {
      var c = Ac(u).hoistableScripts, s = fo(l), r = c.get(s);
      r || (r = u.querySelector(Yf(s)), r || (l = Q({ src: l, async: !0, type: "module" }, n), (n = Na.get(s)) && Nh(l, n), r = u.createElement("script"), Et(r), $l(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function Bf(l, n, u, c) {
    var s = (s = Ge.current) ? ua(s) : null;
    if (!s) throw Error(U(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = an(u.href), u = Ac(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = an(u.href);
          var r = Ac(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            rc(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), Na.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Na.set(l, u), r || qg(
            s,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(U(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(U(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = fo(u), u = Ac(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(U(444, l));
    }
  }
  function an(l) {
    return 'href="' + La(l) + '"';
  }
  function rc(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function jf(l) {
    return Q({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function qg(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), $l(n, "link", u), Et(n), l.head.appendChild(n));
  }
  function fo(l) {
    return '[src="' + La(l) + '"]';
  }
  function Yf(l) {
    return "script[async]" + l;
  }
  function yp(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + La(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Et(c), c;
          var s = Q({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Et(c), $l(c, "style", s), zr(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = an(u.href);
          var r = l.querySelector(
            rc(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Et(r), r;
          c = jf(u), (s = Na.get(s)) && Hh(c, s), r = (l.ownerDocument || l).createElement("link"), Et(r);
          var m = r;
          return m._p = new Promise(function(v, A) {
            m.onload = v, m.onerror = A;
          }), $l(r, "link", c), n.state.loading |= 4, zr(r, u.precedence, l), n.instance = r;
        case "script":
          return r = fo(u.src), (s = l.querySelector(
            Yf(r)
          )) ? (n.instance = s, Et(s), s) : (c = u, (s = Na.get(r)) && (c = Q({}, u), Nh(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Et(s), $l(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(U(443, n.type));
      }
    else
      n.type === "stylesheet" && !(n.state.loading & 4) && (c = n.instance, n.state.loading |= 4, zr(c, u.precedence, l));
    return n.instance;
  }
  function zr(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, m = 0; m < c.length; m++) {
      var v = c[m];
      if (v.dataset.precedence === n) r = v;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function Hh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Nh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var xf = null;
  function pp(l, n, u) {
    if (xf === null) {
      var c = /* @__PURE__ */ new Map(), s = xf = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = xf, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[fu] || r[Rt] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var v = c.get(m);
        v ? v.push(r) : c.set(m, [r]);
      }
    }
    return c;
  }
  function Bh(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function gp(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return l = n.disabled, typeof n.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function Ba(l) {
    return !(l.type === "stylesheet" && !(l.state.loading & 3));
  }
  function Yu(l, n, u, c) {
    if (u.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && !(u.state.loading & 4)) {
      if (u.instance === null) {
        var s = an(c.href), r = n.querySelector(
          rc(s)
        );
        if (r) {
          n = r._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = jh.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = r, Et(r);
          return;
        }
        r = n.ownerDocument || n, c = jf(c), (s = Na.get(s)) && Hh(c, s), r = r.createElement("link"), Et(r);
        var m = r;
        m._p = new Promise(function(v, A) {
          m.onload = v, m.onerror = A;
        }), $l(r, "link", c), u.instance = r;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && !(u.state.loading & 3) && (l.count++, u = jh.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var nn = 0;
  function vp(l, n) {
    return l.stylesheets && l.count === 0 && xh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var c = setTimeout(function() {
        if (l.stylesheets && xh(l, l.stylesheets), l.unsuspend) {
          var r = l.unsuspend;
          l.unsuspend = null, r();
        }
      }, 6e4 + n);
      0 < l.imgBytes && nn === 0 && (nn = 62500 * fp());
      var s = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && xh(l, l.stylesheets), l.unsuspend)) {
            var r = l.unsuspend;
            l.unsuspend = null, r();
          }
        },
        (l.imgBytes > nn ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(c), clearTimeout(s);
      };
    } : null;
  }
  function jh() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) xh(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Yh = null;
  function xh(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Yh = /* @__PURE__ */ new Map(), n.forEach(Gl, l), Yh = null, jh.call(l));
  }
  function Gl(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Yh.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Yh.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || c, r === c && u.set(null, s), u.set(m, s), this.count++, c = jh.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var Dr = {
    $$typeof: Bt,
    Provider: null,
    Consumer: null,
    _currentValue: te,
    _currentValue2: te,
    _threadCount: 0
  };
  function Sp(l, n, u, c, s, r, m, v, A) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = hn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hn(0), this.hiddenUpdates = hn(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = A, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function qh(l, n, u, c, s, r, m, v, A, j, L, K) {
    return l = new Sp(
      l,
      n,
      u,
      m,
      A,
      j,
      L,
      K,
      v
    ), n = 1, r === !0 && (n |= 24), r = il(3, null, null, n), l.current = r, r.stateNode = l, n = Bs(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, Xs(r), l;
  }
  function so(l) {
    return l ? (l = ha, l) : ha;
  }
  function Gg(l, n, u, c, s, r) {
    s = so(s), c.context === null ? c.context = s : c.pendingContext = s, c = fi(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = Wa(l, c, n), u !== null && (Aa(u, l, n), ki(u, l, n));
  }
  function Gh(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function bp(l, n) {
    Gh(l, n), (l = l.alternate) && Gh(l, n);
  }
  function wg(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = li(l, 67108864);
      n !== null && Aa(n, l, 67108864), bp(l, 67108864);
    }
  }
  function ro(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = Ha();
      n = td(n);
      var u = li(l, n);
      u !== null && Aa(u, l, n), bp(l, n);
    }
  }
  var _l = !0;
  function xu(l, n, u, c) {
    var s = _.T;
    _.T = null;
    var r = V.p;
    try {
      V.p = 2, kl(l, n, u, c);
    } finally {
      V.p = r, _.T = s;
    }
  }
  function qu(l, n, u, c) {
    var s = _.T;
    _.T = null;
    var r = V.p;
    try {
      V.p = 8, kl(l, n, u, c);
    } finally {
      V.p = r, _.T = s;
    }
  }
  function kl(l, n, u, c) {
    if (_l) {
      var s = Ep(c);
      if (s === null)
        ap(
          l,
          n,
          c,
          wh,
          u
        ), bi(l, c);
      else if (uS(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (bi(l, c), n & 4 && -1 < za.indexOf(l)) {
        for (; s !== null; ) {
          var r = Tc(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = Re(r.pendingLanes);
                  if (m !== 0) {
                    var v = r;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var A = 1 << 31 - Ul(m);
                      v.entanglements[1] |= A, m &= ~A;
                    }
                    ju(r), !(pt & 6) && (St = gl() + 500, vi(0));
                  }
                }
                break;
              case 31:
              case 13:
                v = li(r, 2), v !== null && Aa(v, r, 2), Af(), bp(r, 2);
            }
          if (r = Ep(c), r === null && ap(
            l,
            n,
            c,
            wh,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        ap(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function Ep(l) {
    return l = rd(l), qf(l);
  }
  var wh = null;
  function qf(l) {
    if (wh = null, l = Ec(l), l !== null) {
      var n = Ne(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = ct(n), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = ee(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return wh = l, null;
  }
  function _r(l) {
    switch (l) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Pr()) {
          case Uo:
            return 2;
          case Ho:
            return 8;
          case Cn:
          case ed:
            return 32;
          case No:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Gf = !1, Rl = null, Wl = null, ia = null, dc = /* @__PURE__ */ new Map(), Dn = /* @__PURE__ */ new Map(), Wt = [], za = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function bi(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        Rl = null;
        break;
      case "dragenter":
      case "dragleave":
        Wl = null;
        break;
      case "mouseover":
      case "mouseout":
        ia = null;
        break;
      case "pointerover":
      case "pointerout":
        dc.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Dn.delete(n.pointerId);
    }
  }
  function ho(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = Tc(n), n !== null && wg(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function uS(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return Rl = ho(
          Rl,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return Wl = ho(
          Wl,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return ia = ho(
          ia,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return dc.set(
          r,
          ho(
            dc.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, Dn.set(
          r,
          ho(
            Dn.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
    }
    return !1;
  }
  function Xg(l) {
    var n = Ec(l.target);
    if (n !== null) {
      var u = Ne(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = ct(u), n !== null) {
            l.blockedOn = n, Em(l.priority, function() {
              ro(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = ee(u), n !== null) {
            l.blockedOn = n, Em(l.priority, function() {
              ro(u);
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Rr(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = Ep(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        sd = c, u.target.dispatchEvent(c), sd = null;
      } else
        return n = Tc(u), n !== null && wg(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function wf(l, n, u) {
    Rr(l) && u.delete(n);
  }
  function Qg() {
    Gf = !1, Rl !== null && Rr(Rl) && (Rl = null), Wl !== null && Rr(Wl) && (Wl = null), ia !== null && Rr(ia) && (ia = null), dc.forEach(wf), Dn.forEach(wf);
  }
  function Gu(l, n) {
    l.blockedOn === n && (l.blockedOn = null, Gf || (Gf = !0, X.unstable_scheduleCallback(
      X.unstable_NormalPriority,
      Qg
    )));
  }
  var Xf = null;
  function Lg(l) {
    Xf !== l && (Xf = l, X.unstable_scheduleCallback(
      X.unstable_NormalPriority,
      function() {
        Xf === l && (Xf = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (qf(c || u) === null)
              continue;
            break;
          }
          var r = Tc(u);
          r !== null && (l.splice(n, 3), n -= 3, sf(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: c
            },
            c,
            s
          ));
        }
      }
    ));
  }
  function Qf(l) {
    function n(A) {
      return Gu(A, l);
    }
    Rl !== null && Gu(Rl, l), Wl !== null && Gu(Wl, l), ia !== null && Gu(ia, l), dc.forEach(n), Dn.forEach(n);
    for (var u = 0; u < Wt.length; u++) {
      var c = Wt[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Wt.length && (u = Wt[0], u.blockedOn === null); )
      Xg(u), u.blockedOn === null && Wt.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], m = s[sa] || null;
        if (typeof r == "function")
          m || Lg(u);
        else if (m) {
          var v = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[sa] || null)
              v = m.formAction;
            else if (qf(s) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? u[c + 1] = v : (u.splice(c, 3), c -= 3), Lg(u);
        }
      }
  }
  function Tp() {
    function l(r) {
      r.canIntercept && r.info === "react-transition" && r.intercept({
        handler: function() {
          return new Promise(function(m) {
            return s = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      s !== null && (s(), s = null), c || setTimeout(u, 20);
    }
    function u() {
      if (!c && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, {
          state: r.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var c = !1, s = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(u, 100), function() {
        c = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), s !== null && (s(), s = null);
      };
    }
  }
  function Xh(l) {
    this._internalRoot = l;
  }
  Qh.prototype.render = Xh.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(U(409));
    var u = n.current, c = Ha();
    Gg(u, c, l, n, null, null);
  }, Qh.prototype.unmount = Xh.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Gg(l.current, 2, null, l, null, null), Af(), n[Hi] = null;
    }
  };
  function Qh(l) {
    this._internalRoot = l;
  }
  Qh.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = ld();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Wt.length && n !== 0 && n < Wt[u].priority; u++) ;
      Wt.splice(u, 0, l), u === 0 && Xg(l);
    }
  };
  var Ap = P.version;
  if (Ap !== "19.2.0")
    throw Error(
      U(
        527,
        Ap,
        "19.2.0"
      )
    );
  V.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(U(188)) : (l = Object.keys(l).join(","), Error(U(268, l)));
    return l = $(n), l = l !== null ? Ce(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Vg = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Mr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Mr.isDisabled && Mr.supportsFiber)
      try {
        dn = Mr.inject(
          Vg
        ), Al = Mr;
      } catch {
      }
  }
  return v0.createRoot = function(l, n) {
    if (!De(l)) throw Error(U(299));
    var u = !1, c = "", s = Pd, r = Oy, m = eh;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = qh(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      null,
      s,
      r,
      m,
      Tp
    ), l[Hi] = n.current, Mf(l), new Xh(n);
  }, v0.hydrateRoot = function(l, n, u) {
    if (!De(l)) throw Error(U(299));
    var c = !1, s = "", r = Pd, m = Oy, v = eh, A = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (v = u.onRecoverableError), u.formState !== void 0 && (A = u.formState)), n = qh(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      s,
      A,
      r,
      m,
      v,
      Tp
    ), n.context = so(null), u = n.current, c = Ha(), c = td(c), s = fi(c), s.callback = null, Wa(u, s, c), u = c, n.current.lanes = u, Ui(n, u), ju(n), l[Hi] = n.current, Mf(l), new Qh(n);
  }, v0.version = "19.2.0", v0;
}
var S0 = {};
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var V2;
function jT() {
  return V2 || (V2 = 1, process.env.NODE_ENV !== "production" && function() {
    function X(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function P(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = bl(e) ? e.slice() : ke({}, e);
      return f[o] = P(e[o], t, a + 1, i), f;
    }
    function Se(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return U(e, t, a, 0);
      }
    }
    function U(e, t, a, i) {
      var o = t[i], f = bl(e) ? e.slice() : ke({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], bl(f) ? f.splice(o, 1) : delete f[o]) : f[o] = U(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function De(e, t, a) {
      var i = t[a], o = bl(e) ? e.slice() : ke({}, e);
      return a + 1 === t.length ? (bl(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = De(e[i], t, a + 1), o);
    }
    function Ne() {
      return !1;
    }
    function ct() {
      return null;
    }
    function ee() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function le() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function $() {
    }
    function Ce() {
    }
    function Q(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function H(e, t, a, i) {
      return new Fv(e, t, a, i);
    }
    function ie(e, t) {
      e.context === Jf && (Dh(e.current, 2, t, e, null, null), tn());
    }
    function Ve(e, t) {
      if (Qu !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, ir(), j0(
          e.current,
          t,
          a
        ), tn();
      }
    }
    function _t(e) {
      Qu = e;
    }
    function st(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function lt(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, t.flags & 4098 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function Tl(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Bt(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Jt(e) {
      if (lt(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function el(e) {
      var t = e.alternate;
      if (!t) {
        if (t = lt(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return Jt(o), e;
            if (f === i) return Jt(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function ul(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = ul(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function _e(e) {
      return e === null || typeof e != "object" ? null : (e = xg && e[xg] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Ze(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Nf ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Uf:
          return "Fragment";
        case Ar:
          return "Profiler";
        case Oa:
          return "StrictMode";
        case oo:
          return "Suspense";
        case Na:
          return "SuspenseList";
        case Pn:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case fc:
            return "Portal";
          case In:
            return e.displayName || "Context";
          case Uh:
            return (e._context.displayName || "Context") + ".Consumer";
          case Hf:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Or:
            return t = e.displayName || null, t !== null ? t : Ze(e.type) || "Memo";
          case ua:
            t = e._payload, e = e._init;
            try {
              return Ze(e(t));
            } catch {
            }
        }
      return null;
    }
    function Dt(e) {
      return typeof e.tag == "number" ? se(e) : typeof e.name == "string" ? e.name : null;
    }
    function se(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return t.displayName || "Context";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Ze(t);
        case 8:
          return t === Oa ? "StrictMode" : "Mode";
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
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return se(e.return);
      }
      return null;
    }
    function jt(e) {
      return { current: e };
    }
    function ye(e, t) {
      0 > Si ? console.error("Unexpected pop.") : (t !== mp[Si] && console.error("Unexpected Fiber popped."), e.current = hp[Si], hp[Si] = null, mp[Si] = null, Si--);
    }
    function qe(e, t, a) {
      Si++, hp[Si] = e.current, mp[Si] = a, e.current = t;
    }
    function Qt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function Yt(e, t) {
      qe(an, t, e), qe(Bf, e, e), qe(sc, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? sg(t) : _o;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = sg(t), t = pi(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = vm;
                break;
              case "math":
                t = jv;
                break;
              default:
                t = _o;
            }
      }
      a = a.toLowerCase(), a = zm(null, a), a = {
        context: t,
        ancestorInfo: a
      }, ye(sc, e), qe(sc, a, e);
    }
    function _(e) {
      ye(sc, e), ye(Bf, e), ye(an, e);
    }
    function V() {
      return Qt(sc.current);
    }
    function te(e) {
      e.memoizedState !== null && qe(rc, e, e);
      var t = Qt(sc.current), a = e.type, i = pi(t.context, a);
      a = zm(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (qe(Bf, e, e), qe(sc, i, e));
    }
    function pe(e) {
      Bf.current === e && (ye(sc, e), ye(Bf, e)), rc.current === e && (ye(rc, e), d0._currentValue = Ir);
    }
    function Oe() {
    }
    function S() {
      if (jf === 0) {
        qg = console.log, fo = console.info, Yf = console.warn, yp = console.error, zr = console.group, Hh = console.groupCollapsed, Nh = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Oe,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      jf++;
    }
    function B() {
      if (jf--, jf === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: ke({}, e, { value: qg }),
          info: ke({}, e, { value: fo }),
          warn: ke({}, e, { value: Yf }),
          error: ke({}, e, { value: yp }),
          group: ke({}, e, { value: zr }),
          groupCollapsed: ke({}, e, { value: Hh }),
          groupEnd: ke({}, e, { value: Nh })
        });
      }
      0 > jf && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function F(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function W(e) {
      if (xf === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          xf = t && t[1] || "", pp = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + xf + e + pp;
    }
    function ve(e, t) {
      if (!e || Bh) return "";
      var a = gp.get(e);
      if (a !== void 0) return a;
      Bh = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = G.H, G.H = null, S();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var E = function() {
                  throw Error();
                };
                if (Object.defineProperty(E.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(E, []);
                  } catch (ne) {
                    var x = ne;
                  }
                  Reflect.construct(e, [], E);
                } else {
                  try {
                    E.call();
                  } catch (ne) {
                    x = ne;
                  }
                  e.call(E.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ne) {
                  x = ne;
                }
                (E = e()) && typeof E.catch == "function" && E.catch(function() {
                });
              }
            } catch (ne) {
              if (ne && x && typeof ne.stack == "string")
                return [ne.stack, x.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], y = d[1];
        if (h && y) {
          var p = h.split(`
`), z = y.split(`
`);
          for (d = f = 0; f < p.length && !p[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < z.length && !z[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === p.length || d === z.length)
            for (f = p.length - 1, d = z.length - 1; 1 <= f && 0 <= d && p[f] !== z[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (p[f] !== z[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || p[f] !== z[d]) {
                    var R = `
` + p[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && gp.set(e, R), R;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Bh = !1, G.H = i, B(), Error.prepareStackTrace = a;
      }
      return p = (p = e ? e.displayName || e.name : "") ? W(p) : "", typeof e == "function" && gp.set(e, p), p;
    }
    function Ge(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return W(e.type);
        case 16:
          return W("Lazy");
        case 13:
          return e.child !== t && t !== null ? W("Suspense Fallback") : W("Suspense");
        case 19:
          return W("SuspenseList");
        case 0:
        case 15:
          return ve(e.type, !1);
        case 11:
          return ve(e.type.render, !1);
        case 1:
          return ve(e.type, !0);
        case 31:
          return W("Activity");
        default:
          return "";
      }
    }
    function Te(e) {
      try {
        var t = "", a = null;
        do {
          t += Ge(e, a);
          var i = e._debugInfo;
          if (i)
            for (var o = i.length - 1; 0 <= o; o--) {
              var f = i[o];
              if (typeof f.name == "string") {
                var d = t;
                e: {
                  var h = f.name, y = f.env, p = f.debugLocation;
                  if (p != null) {
                    var z = F(p), R = z.lastIndexOf(`
`), E = R === -1 ? z : z.slice(R + 1);
                    if (E.indexOf(h) !== -1) {
                      var x = `
` + E;
                      break e;
                    }
                  }
                  x = W(
                    h + (y ? " [" + y + "]" : "")
                  );
                }
                t = d + x;
              }
            }
          a = e, e = e.return;
        } while (e);
        return t;
      } catch (ne) {
        return `
Error generating stack: ` + ne.message + `
` + ne.stack;
      }
    }
    function Lt(e) {
      return (e = e ? e.displayName || e.name : "") ? W(e) : "";
    }
    function mt() {
      if (Ba === null) return null;
      var e = Ba._debugOwner;
      return e != null ? Dt(e) : null;
    }
    function qa() {
      if (Ba === null) return "";
      var e = Ba;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += W(e.type);
            break;
          case 13:
            t += W("Suspense");
            break;
          case 19:
            t += W("SuspenseList");
            break;
          case 31:
            t += W("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += Lt(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += Lt(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            if (e && i) {
              var o = F(i);
              o !== "" && (t += `
` + o);
            }
          } else if (e.debugStack != null) {
            var f = e.debugStack;
            (e = e.owner) && f && (t += `
` + F(f));
          } else break;
        var d = t;
      } catch (h) {
        d = `
Error generating stack: ` + h.message + `
` + h.stack;
      }
      return d;
    }
    function ce(e, t, a, i, o, f, d) {
      var h = Ba;
      _i(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        _i(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function _i(e) {
      G.getCurrentStack = e === null ? null : qa, Yu = !1, Ba = e;
    }
    function Ri(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function Ga(e) {
      try {
        return iu(e), !1;
      } catch {
        return !0;
      }
    }
    function iu(e) {
      return "" + e;
    }
    function yt(e, t) {
      if (Ga(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Ri(e)
        ), iu(e);
    }
    function ea(e, t) {
      if (Ga(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Ri(e)
        ), iu(e);
    }
    function vc(e) {
      if (Ga(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          Ri(e)
        ), iu(e);
    }
    function ds(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        ro = t.inject(e), _l = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!t.checkDCE;
    }
    function re(e) {
      if (typeof bp == "function" && wg(e), _l && typeof _l.setStrictMode == "function")
        try {
          _l.setStrictMode(ro, e);
        } catch (t) {
          xu || (xu = !0, console.error(
            "React instrumentation encountered an error: %o",
            t
          ));
        }
    }
    function Mi(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Ep(e) / wh | 0) | 0;
    }
    function cu(e) {
      var t = e & 42;
      if (t !== 0) return t;
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
          return 64;
        case 128:
          return 128;
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
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function Sc(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = cu(i) : (d &= h, d !== 0 ? o = cu(d) : a || (a = h & ~e, a !== 0 && (o = cu(a))))) : (h = i & ~f, h !== 0 ? o = cu(h) : d !== 0 ? o = cu(d) : a || (a = i & ~e, a !== 0 && (o = cu(a)))), o === 0 ? 0 : t !== 0 && t !== o && !(t & f) && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function gl(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Pr(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
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
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Uo() {
      var e = Gf;
      return Gf <<= 1, !(Gf & 62914560) && (Gf = 4194304), e;
    }
    function Ho(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Cn(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function ed(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, y = e.expirationTimes, p = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var z = 31 - kl(a), R = 1 << z;
        h[z] = 0, y[z] = -1;
        var E = p[z];
        if (E !== null)
          for (p[z] = null, z = 0; z < E.length; z++) {
            var x = E[z];
            x !== null && (x.lane &= -536870913);
          }
        a &= ~R;
      }
      i !== 0 && No(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function No(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - kl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 261930;
    }
    function hs(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - kl(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function bc(e, t) {
      var a = t & -t;
      return a = a & 42 ? 1 : dn(a), a & (e.suspendedLanes | t) ? 0 : a;
    }
    function dn(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
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
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function Al(e, t, a) {
      if (qu)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - kl(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function wa(e, t) {
      if (qu)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - kl(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function Ul(e) {
      return e &= -e, Rl < e ? Wl < e ? e & 134217727 ? ia : dc : Wl : Rl;
    }
    function Ci() {
      var e = bt.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? ia : Rh(e.type));
    }
    function g(e, t) {
      var a = bt.p;
      try {
        return bt.p = e, t();
      } finally {
        bt.p = a;
      }
    }
    function M(e) {
      delete e[Wt], delete e[za], delete e[ho], delete e[uS], delete e[Xg];
    }
    function I(e) {
      var t = e[Wt];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[bi] || a[Wt]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = no(e); e !== null; ) {
              if (a = e[Wt])
                return a;
              e = no(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ae(e) {
      if (e = e[Wt] || e[bi]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function de(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function Re(e) {
      var t = e[Rr];
      return t || (t = e[Rr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function he(e) {
      e[wf] = !0;
    }
    function Pe(e, t) {
      we(e, t), we(e + "Capture", t);
    }
    function we(e, t) {
      Gu[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Gu[e] = t;
      var a = e.toLowerCase();
      for (Xf[a] = e, e === "onDoubleClick" && (Xf.ondblclick = e), e = 0; e < t.length; e++)
        Qg.add(t[e]);
    }
    function ta(e, t) {
      Lg[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function hn(e) {
      return nn.call(Xh, e) ? !0 : nn.call(Tp, e) ? !1 : Qf.test(e) ? Xh[e] = !0 : (Tp[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Ui(e, t, a) {
      if (hn(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (yt(a, t), e === "" + a ? a : e);
      }
    }
    function Bo(e, t, a) {
      if (hn(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          yt(a, t), e.setAttribute(t, "" + a);
        }
    }
    function ms(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        yt(a, t), e.setAttribute(t, "" + a);
      }
    }
    function ou(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        yt(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function Xa(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return vc(e), e;
        default:
          return "";
      }
    }
    function td(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function bm(e, t, a) {
      var i = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
        var o = i.get, f = i.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            vc(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            vc(d), a = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function ld(e) {
      if (!e._valueTracker) {
        var t = td(e) ? "checked" : "value";
        e._valueTracker = bm(
          e,
          t,
          "" + e[t]
        );
      }
    }
    function Em(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = td(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function Un(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Rt(e) {
      return e.replace(
        Qh,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function sa(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Vg || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        mt() || "A component",
        t.type
      ), Vg = !0), t.value === void 0 || t.defaultValue === void 0 || Ap || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        mt() || "A component",
        t.type
      ), Ap = !0);
    }
    function Hi(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (yt(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Xa(t)) : e.value !== "" + Xa(t) && (e.value = "" + Xa(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Tm(e, d, Xa(t)) : a != null ? Tm(e, d, Xa(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (yt(h, "name"), e.name = "" + Xa(h)) : e.removeAttribute("name");
    }
    function ad(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (yt(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null)) {
          ld(e);
          return;
        }
        a = a != null ? "" + Xa(a) : "", t = t != null ? "" + Xa(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (yt(d, "name"), e.name = d), ld(e);
    }
    function Tm(e, t, a) {
      t === "number" && Un(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function E0(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Tr.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || l || (l = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || n || (n = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Mr || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Mr = !0);
    }
    function Am() {
      var e = mt();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function fu(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + Xa(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function nd(e, t) {
      for (e = 0; e < c.length; e++) {
        var a = c[e];
        if (t[a] != null) {
          var i = bl(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            Am()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            Am()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || u || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), u = !0);
    }
    function Ec(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || s || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        mt() || "A component"
      ), s = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Tc(e, t, a) {
      if (t != null && (t = "" + Xa(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + Xa(a) : "";
    }
    function jo(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (bl(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = Xa(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i), ld(e);
    }
    function Ac(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Ac(e.children[0], t) : e;
    }
    function Et(e) {
      return "  " + "  ".repeat(e);
    }
    function Oc(e) {
      return "+ " + "  ".repeat(e);
    }
    function Ni(e) {
      return "- " + "  ".repeat(e);
    }
    function Bi(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 31:
          return "Activity";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function su(e, t) {
      return r.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function ud(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Oc(a) + su(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Oc(a) + su(e, i) + `
` + Ni(a) + su(t, i) + `
`;
      }
      return Et(a) + su(e, i) + `
`;
    }
    function id(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function Yo(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (bl(e)) return "[...]";
          if (e.$$typeof === zn)
            return (t = Ze(e.type)) ? "<" + t + ">" : "<...>";
          var a = id(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = Yo(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function xo(e, t) {
      return typeof e != "string" || r.test(e) ? "{" + Yo(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function qo(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = xo(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function cd(e, t, a) {
      var i = "", o = ke({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = Yo(e[f], d);
          t.hasOwnProperty(f) ? (d = Yo(t[f], d), i += Oc(a) + f + ": " + h + `
`, i += Ni(a) + f + ": " + d + `
`) : i += Oc(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (e = Yo(
          o[y],
          120 - 2 * a - y.length - 2
        ), i += Ni(a) + y + ": " + e + `
`);
      return i;
    }
    function Iu(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && f.set(
          p.toLowerCase(),
          p
        );
      if (f.size === 1 && f.has("children"))
        o += qo(
          e,
          t,
          Et(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, y = f.get(d.toLowerCase());
            if (y !== void 0) {
              f.delete(d.toLowerCase());
              var p = t[d];
              y = a[y];
              var z = xo(
                p,
                h
              );
              h = xo(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && id(p) === "Object" && id(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < z.indexOf("...") || -1 < h.indexOf("...")) ? o += Et(i + 1) + d + `={{
` + cd(
                p,
                y,
                i + 2
              ) + Et(i + 1) + `}}
` : (o += Oc(i + 1) + d + "=" + z + `
`, o += Ni(i + 1) + d + "=" + h + `
`);
            } else
              o += Et(i + 1) + d + "=" + xo(t[d], h) + `
`;
          }
        f.forEach(function(R) {
          if (R !== "children") {
            var E = 120 - 2 * (i + 1) - R.length - 1;
            o += Ni(i + 1) + R + "=" + xo(a[R], E) + `
`;
          }
        }), o = o === "" ? Et(i) + "<" + e + `>
` : Et(i) + "<" + e + `
` + o + Et(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += ud(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + ud("" + t, null, i + 1) : o + ud("" + t, void 0, i + 1)), o;
    }
    function Qa(e, t) {
      var a = Bi(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += Qa(e, t), e = e.sibling;
        return a;
      }
      return Et(t) + "<" + a + `>
`;
    }
    function od(e, t) {
      var a = Ac(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Et(t) + `...
` + od(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Et(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = ud(o, e.serverProps, t), t++;
      else if (f = Bi(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = xo(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          i = Et(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = qo(
            f,
            o,
            Oc(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Iu(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var p = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (p += od(d, t), f++) : p += Qa(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (p += Et(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], p = typeof f == "string" ? p + (Ni(t) + su(f, 120 - 2 * t) + `
`) : p + qo(
          f.type,
          f.props,
          Ni(t)
        );
      return a + i + p;
    }
    function Om(e) {
      try {
        return `

` + od(e, 0);
      } catch {
        return "";
      }
    }
    function fd(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? Om(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function zm(e, t) {
      var a = ke({}, e || L), i = { tag: t };
      return v.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), A.indexOf(t) !== -1 && (a.pTagInButtonScope = null), m.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function ys(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return j.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function Zv(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function La(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function ps(e, t) {
      t = t || L;
      var a = t.current;
      if (t = (a = ys(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : Zv(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, K[t]) return !1;
      K[t] = !0;
      var o = (t = Ba) ? La(t.return, i) : null, f = t !== null && o !== null ? fd(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || ce(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function gs(e, t, a) {
      if (a || ys("#text", t, !1))
        return !0;
      if (a = "#text|" + t, K[a]) return !1;
      K[a] = !0;
      var i = (a = Ba) ? La(a, t) : null;
      return a = a !== null && i !== null ? fd(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function zc(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function Go(e) {
      return e.replace(C, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Dm(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? N.hasOwnProperty(t) && N[t] || (N[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        Go(t.replace(Ht, "ms-"))
      )) : ze.test(t) ? N.hasOwnProperty(t) && N[t] || (N[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !D.test(a) || J.hasOwnProperty(a) && J[a] || (J[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(D, "")
      )), typeof a == "number" && (isNaN(a) ? be || (be = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || dt || (dt = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || me.has(t) ? t === "float" ? e.cssFloat = a : (ea(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function _m(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = Y[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = Y[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var y in t)
            for (o = Y[y] || [y], f = 0; f < o.length; f++)
              h[o[f]] = y;
          y = {};
          for (var p in i)
            if (o = i[p], (f = h[p]) && o !== f && (d = o + "," + f, !y[d])) {
              y[d] = !0, d = console;
              var z = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                z == null || typeof z == "boolean" || z === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var R in a)
          !a.hasOwnProperty(R) || t != null && t.hasOwnProperty(R) || (R.indexOf("--") === 0 ? e.setProperty(R, "") : R === "float" ? e.cssFloat = "" : e[R] = "");
        for (var E in t)
          p = t[E], t.hasOwnProperty(E) && a[E] !== p && Dm(e, E, p);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Dm(e, i, t[i]);
    }
    function ru(e) {
      if (e.indexOf("-") === -1) return !1;
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
    function T0(e) {
      return gt.get(e) || e;
    }
    function A0(e, t) {
      if (nn.call(Lh, t) && Lh[t])
        return !0;
      if (I2.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = Zg.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), Lh[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), Lh[t] = !0;
      }
      if (F2.test(t)) {
        if (e = t.toLowerCase(), e = Zg.hasOwnProperty(e) ? e : null, e == null) return Lh[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), Lh[t] = !0);
      }
      return !0;
    }
    function O0(e, t) {
      var a = [], i;
      for (i in t)
        A0(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function Rm(e, t, a, i) {
      if (nn.call(un, t) && un[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), un[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), un[t] = !0;
        if (O1.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), un[t] = !0;
      } else if (O1.test(t))
        return P2.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), un[t] = !0;
      if (eE.test(t) || tE.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), un[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), un[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), un[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), un[t] = !0;
      if (eu.hasOwnProperty(o)) {
        if (o = eu[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), un[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), un[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), un[t] = !0);
          }
        case "function":
        case "symbol":
          return un[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), un[t] = !0;
          }
      }
      return !0;
    }
    function Jv(e, t, a) {
      var i = [], o;
      for (o in t)
        Rm(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function vs(e) {
      return lE.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function mn() {
    }
    function Hn(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function sd(e) {
      var t = ae(e);
      if (t && (e = t.stateNode)) {
        var a = e[za] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Hi(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (yt(t, "name"), a = a.querySelectorAll(
                'input[name="' + Rt(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[za] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Hi(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && Em(i);
            }
            break e;
          case "textarea":
            Tc(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && fu(e, !!a.multiple, t, !1);
        }
      }
    }
    function rd(e, t, a) {
      if (iS) return e(t, a);
      iS = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (iS = !1, (Vh !== null || Zh !== null) && (tn(), Vh && (t = Vh, e = Zh, Zh = Vh = null, sd(t), e)))
          for (t = 0; t < e.length; t++) sd(e[t]);
      }
    }
    function du(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[za] || null;
      if (i === null) return null;
      a = i[t];
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
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function Dc() {
      if (Jg) return Jg;
      var e, t = oS, a = t.length, i, o = "value" in Lf ? Lf.value : Lf.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return Jg = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function Ss(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function wo() {
      return !0;
    }
    function Mm() {
      return !1;
    }
    function Hl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? wo : Mm, this.isPropagationStopped = Mm, this;
      }
      return ke(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = wo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = wo);
        },
        persist: function() {
        },
        isPersistent: wo
      }), t;
    }
    function Pu(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = yE[e]) ? !!t[e] : !1;
    }
    function bs() {
      return Pu;
    }
    function Xo(e, t) {
      switch (e) {
        case "keyup":
          return _E.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== R1;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function ei(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function Cm(e, t) {
      switch (e) {
        case "compositionend":
          return ei(t);
        case "keypress":
          return t.which !== C1 ? null : (H1 = !0, U1);
        case "textInput":
          return e = t.data, e === U1 && H1 ? null : e;
        default:
          return null;
      }
    }
    function dd(e, t) {
      if (Jh)
        return e === "compositionend" || !dS && Xo(e, t) ? (e = Dc(), Jg = oS = Lf = null, Jh = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return M1 && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function Um(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!ME[e.type] : t === "textarea";
    }
    function hd(e) {
      if (!hc) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function Es(e, t, a, i) {
      Vh ? Zh ? Zh.push(i) : Zh = [i] : Vh = i, t = kn(t, "onChange"), 0 < t.length && (a = new Kg(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function z0(e) {
      Ot(e, 0);
    }
    function Kl(e) {
      var t = de(e);
      if (Em(t)) return e;
    }
    function ji(e, t) {
      if (e === "change") return t;
    }
    function Ts() {
      Mp && (Mp.detachEvent("onpropertychange", Qo), Cp = Mp = null);
    }
    function Qo(e) {
      if (e.propertyName === "value" && Kl(Cp)) {
        var t = [];
        Es(
          t,
          Cp,
          e,
          Hn(e)
        ), rd(z0, t);
      }
    }
    function Kv(e, t, a) {
      e === "focusin" ? (Ts(), Mp = t, Cp = a, Mp.attachEvent("onpropertychange", Qo)) : e === "focusout" && Ts();
    }
    function Hm(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Kl(Cp);
    }
    function Nm(e, t) {
      if (e === "click") return Kl(t);
    }
    function As(e, t) {
      if (e === "input" || e === "change")
        return Kl(t);
    }
    function md(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Lo(e, t) {
      if (cn(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!nn.call(t, o) || !cn(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function D0(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function _0(e, t) {
      var a = D0(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = D0(a);
      }
    }
    function R0(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? R0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function yd(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = Un(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = Un(e.document);
      }
      return t;
    }
    function Bm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function M0(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      mS || Kh == null || Kh !== Un(i) || (i = Kh, "selectionStart" in i && Bm(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), Up && Lo(Up, i) || (Up = i, i = kn(hS, "onSelect"), 0 < i.length && (t = new Kg(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = Kh)));
    }
    function _c(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Rc(e) {
      if (yS[e]) return yS[e];
      if (!$h[e]) return e;
      var t = $h[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in B1)
          return yS[e] = t[a];
      return e;
    }
    function Nn(e, t) {
      G1.set(e, t), Pe(t, [e]);
    }
    function C0(e) {
      for (var t = kg, a = 0; a < e.length; a++) {
        var i = e[a];
        if (typeof i == "object" && i !== null)
          if (bl(i) && i.length === 2 && typeof i[0] == "string") {
            if (t !== kg && t !== bS)
              return vS;
            t = bS;
          } else return vS;
        else {
          if (typeof i == "function" || typeof i == "string" && 50 < i.length || t !== kg && t !== SS)
            return vS;
          t = SS;
        }
      }
      return t;
    }
    function jm(e, t, a, i) {
      for (var o in e)
        nn.call(e, o) && o[0] !== "_" && hu(o, e[o], t, a, i);
    }
    function hu(e, t, a, i, o) {
      switch (typeof t) {
        case "object":
          if (t === null) {
            t = "null";
            break;
          } else {
            if (t.$$typeof === zn) {
              var f = Ze(t.type) || "…", d = t.key;
              t = t.props;
              var h = Object.keys(t), y = h.length;
              if (d == null && y === 0) {
                t = "<" + f + " />";
                break;
              }
              if (3 > i || y === 1 && h[0] === "children" && d == null) {
                t = "<" + f + " … />";
                break;
              }
              a.push([
                o + "  ".repeat(i) + e,
                "<" + f
              ]), d !== null && hu(
                "key",
                d,
                a,
                i + 1,
                o
              ), e = !1;
              for (var p in t)
                p === "children" ? t.children != null && (!bl(t.children) || 0 < t.children.length) && (e = !0) : nn.call(t, p) && p[0] !== "_" && hu(
                  p,
                  t[p],
                  a,
                  i + 1,
                  o
                );
              a.push([
                "",
                e ? ">…</" + f + ">" : "/>"
              ]);
              return;
            }
            if (f = Object.prototype.toString.call(t), f = f.slice(8, f.length - 1), f === "Array") {
              if (p = C0(t), p === SS || p === kg) {
                t = JSON.stringify(t);
                break;
              } else if (p === bS) {
                for (a.push([
                  o + "  ".repeat(i) + e,
                  ""
                ]), e = 0; e < t.length; e++)
                  f = t[e], hu(
                    f[0],
                    f[1],
                    a,
                    i + 1,
                    o
                  );
                return;
              }
            }
            if (f === "Promise") {
              if (t.status === "fulfilled") {
                if (f = a.length, hu(
                  e,
                  t.value,
                  a,
                  i,
                  o
                ), a.length > f) {
                  a = a[f], a[1] = "Promise<" + (a[1] || "Object") + ">";
                  return;
                }
              } else if (t.status === "rejected" && (f = a.length, hu(
                e,
                t.reason,
                a,
                i,
                o
              ), a.length > f)) {
                a = a[f], a[1] = "Rejected Promise<" + a[1] + ">";
                return;
              }
              a.push([
                "  ".repeat(i) + e,
                "Promise"
              ]);
              return;
            }
            f === "Object" && (p = Object.getPrototypeOf(t)) && typeof p.constructor == "function" && (f = p.constructor.name), a.push([
              o + "  ".repeat(i) + e,
              f === "Object" ? 3 > i ? "" : "…" : f
            ]), 3 > i && jm(t, a, i + 1, o);
            return;
          }
        case "function":
          t = t.name === "" ? "() => {}" : t.name + "() {}";
          break;
        case "string":
          t = t === YE ? "…" : JSON.stringify(t);
          break;
        case "undefined":
          t = "undefined";
          break;
        case "boolean":
          t = t ? "true" : "false";
          break;
        default:
          t = String(t);
      }
      a.push([
        o + "  ".repeat(i) + e,
        t
      ]);
    }
    function U0(e, t, a, i) {
      var o = !0;
      for (d in e)
        d in t || (a.push([
          Wg + "  ".repeat(i) + d,
          "…"
        ]), o = !1);
      for (var f in t)
        if (f in e) {
          var d = e[f], h = t[f];
          if (d !== h) {
            if (i === 0 && f === "children")
              o = "  ".repeat(i) + f, a.push(
                [Wg + o, "…"],
                [Fg + o, "…"]
              );
            else {
              if (!(3 <= i)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === zn) {
                    if (d.type === h.type && d.key === h.key) {
                      d = Ze(h.type) || "…", o = "  ".repeat(i) + f, d = "<" + d + " … />", a.push(
                        [Wg + o, d],
                        [Fg + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        Q1 + "  ".repeat(i) + f,
                        p === "[object Array]" ? "Array" : ""
                      ], a.push(y), p = a.length, U0(
                        d,
                        h,
                        a,
                        i + 1
                      ) ? p === a.length && (y[1] = "Referentially unequal but deeply equal objects. Consider memoization.") : o = !1;
                      continue;
                    }
                  }
                else if (typeof d == "function" && typeof h == "function" && d.name === h.name && d.length === h.length && (y = Function.prototype.toString.call(d), p = Function.prototype.toString.call(h), y === p)) {
                  d = h.name === "" ? "() => {}" : h.name + "() {}", a.push([
                    Q1 + "  ".repeat(i) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              hu(f, d, a, i, Wg), hu(f, h, a, i, Fg);
            }
            o = !1;
          }
        } else
          a.push([
            Fg + "  ".repeat(i) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function Bn(e) {
      rt = e & 63 ? "Blocking" : e & 64 ? "Gesture" : e & 4194176 ? "Transition" : e & 62914560 ? "Suspense" : e & 2080374784 ? "Idle" : "Other";
    }
    function yn(e, t, a, i) {
      Ft && (Zf.start = t, Zf.end = a, mo.color = "warning", mo.tooltipText = i, mo.properties = null, (e = e._debugTask) ? e.run(
        performance.measure.bind(
          performance,
          i,
          Zf
        )
      ) : performance.measure(i, Zf));
    }
    function pd(e, t, a) {
      yn(e, t, a, "Reconnect");
    }
    function gd(e, t, a, i, o) {
      var f = se(e);
      if (f !== null && Ft) {
        var d = e.alternate, h = e.actualDuration;
        if (d === null || d.child !== e.child)
          for (var y = e.child; y !== null; y = y.sibling)
            h -= y.actualDuration;
        i = 0.5 > h ? i ? "tertiary-light" : "primary-light" : 10 > h ? i ? "tertiary" : "primary" : 100 > h ? i ? "tertiary-dark" : "primary-dark" : "error";
        var p = e.memoizedProps;
        h = e._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [xE], p = U0(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !Vf && !(d.lanes & o) && 100 < e.actualDuration ? (Vf = !0, y[0] = qE, mo.color = "warning", mo.tooltipText = L1) : (mo.color = i, mo.tooltipText = f), mo.properties = y, Zf.start = t, Zf.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            Zf
          )
        ) : performance.measure(
          "​" + f,
          Zf
        ))) : h != null ? h.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            wu,
            void 0,
            i
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          wu,
          void 0,
          i
        );
      }
    }
    function Ym(e, t, a, i) {
      if (Ft) {
        var o = se(e);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < i.length; h++) {
            var y = i[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          e.key !== null && hu("key", e.key, d, 0, ""), e.memoizedProps !== null && jm(e.memoizedProps, d, 0, ""), f == null && (f = e._debugTask), e = {
            start: t,
            end: a,
            detail: {
              devtools: {
                color: "error",
                track: wu,
                tooltipText: e.tag === 13 ? "Hydration failed" : "Error boundary caught an error",
                properties: d
              }
            }
          }, f ? f.run(
            performance.measure.bind(performance, "​" + o, e)
          ) : performance.measure("​" + o, e);
        }
      }
    }
    function jn(e, t, a, i, o) {
      if (o !== null) {
        if (Ft) {
          var f = se(e);
          if (f !== null) {
            i = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              i.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            e.key !== null && hu("key", e.key, i, 0, ""), e.memoizedProps !== null && jm(e.memoizedProps, i, 0, ""), t = {
              start: t,
              end: a,
              detail: {
                devtools: {
                  color: "error",
                  track: wu,
                  tooltipText: "A lifecycle or effect errored",
                  properties: i
                }
              }
            }, (e = e._debugTask) ? e.run(
              performance.measure.bind(
                performance,
                "​" + f,
                t
              )
            ) : performance.measure("​" + f, t);
          }
        }
      } else
        f = se(e), f !== null && Ft && (o = 1 > i ? "secondary-light" : 100 > i ? "secondary" : 500 > i ? "secondary-dark" : "error", (e = e._debugTask) ? e.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            wu,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          wu,
          void 0,
          o
        ));
    }
    function $v(e, t, a, i) {
      if (Ft && !(t <= e)) {
        var o = (a & 738197653) === a ? "tertiary-dark" : "primary-dark";
        a = (a & 536870912) === a ? "Prepared" : (a & 201326741) === a ? "Hydrated" : "Render", i ? i.run(
          console.timeStamp.bind(
            console,
            a,
            e,
            t,
            rt,
            ot,
            o
          )
        ) : console.timeStamp(
          a,
          e,
          t,
          rt,
          ot,
          o
        );
      }
    }
    function H0(e, t, a, i) {
      !Ft || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Prewarm",
          e,
          t,
          rt,
          ot,
          a
        )
      ) : console.timeStamp(
        "Prewarm",
        e,
        t,
        rt,
        ot,
        a
      ));
    }
    function N0(e, t, a, i) {
      !Ft || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Suspended",
          e,
          t,
          rt,
          ot,
          a
        )
      ) : console.timeStamp(
        "Suspended",
        e,
        t,
        rt,
        ot,
        a
      ));
    }
    function kv(e, t, a, i, o, f) {
      if (Ft && !(t <= e)) {
        a = [];
        for (var d = 0; d < i.length; d++) {
          var h = i[d].value;
          a.push([
            "Recoverable Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "primary-dark",
              track: rt,
              trackGroup: ot,
              tooltipText: o ? "Hydration Failed" : "Recovered after Error",
              properties: a
            }
          }
        }, f ? f.run(
          performance.measure.bind(performance, "Recovered", e)
        ) : performance.measure("Recovered", e);
      }
    }
    function xm(e, t, a, i) {
      !Ft || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          "Errored",
          e,
          t,
          rt,
          ot,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        e,
        t,
        rt,
        ot,
        "error"
      ));
    }
    function Wv(e, t, a, i) {
      !Ft || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          a,
          e,
          t,
          rt,
          ot,
          "secondary-light"
        )
      ) : console.timeStamp(
        a,
        e,
        t,
        rt,
        ot,
        "secondary-light"
      ));
    }
    function B0(e, t, a, i, o) {
      if (Ft && !(t <= e)) {
        for (var f = [], d = 0; d < a.length; d++) {
          var h = a[d].value;
          f.push([
            "Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "error",
              track: rt,
              trackGroup: ot,
              tooltipText: i ? "Remaining Effects Errored" : "Commit Errored",
              properties: f
            }
          }
        }, o ? o.run(
          performance.measure.bind(performance, "Errored", e)
        ) : performance.measure("Errored", e);
      }
    }
    function qm(e, t, a) {
      !Ft || t <= e || console.timeStamp(
        "Animating",
        e,
        t,
        rt,
        ot,
        "secondary-dark"
      );
    }
    function vd() {
      for (var e = kh, t = ES = kh = 0; t < e; ) {
        var a = Xu[t];
        Xu[t++] = null;
        var i = Xu[t];
        Xu[t++] = null;
        var o = Xu[t];
        Xu[t++] = null;
        var f = Xu[t];
        if (Xu[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && Gm(a, o, f);
      }
    }
    function Vo(e, t, a, i) {
      Xu[kh++] = e, Xu[kh++] = t, Xu[kh++] = a, Xu[kh++] = i, ES |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function Mc(e, t, a, i) {
      return Vo(e, t, a, i), Os(e);
    }
    function la(e, t) {
      return Vo(e, null, null, t), Os(e);
    }
    function Gm(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & Hp || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - kl(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function Os(e) {
      if (u0 > eT)
        throw Jr = u0 = 0, i0 = e1 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Jr > tT && (Jr = 0, i0 = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && e.flags & 4098 && On(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && t.flags & 4098 && On(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Yi(e) {
      if (Qu === null) return e;
      var t = Qu(e);
      return t === void 0 ? e : t.current;
    }
    function Sd(e) {
      if (Qu === null) return e;
      var t = Qu(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Yi(e.render), e.render !== t) ? (t = { $$typeof: Hf, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function wm(e, t) {
      if (Qu === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === ua) && (i = !0);
          break;
        case 11:
          (o === Hf || o === ua) && (i = !0);
          break;
        case 14:
        case 15:
          (o === Or || o === ua) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = Qu(a), e !== void 0 && e === Qu(t)));
    }
    function Cc(e) {
      Qu !== null && typeof WeakSet == "function" && (Wh === null && (Wh = /* @__PURE__ */ new WeakSet()), Wh.add(e));
    }
    function j0(e, t, a) {
      do {
        var i = e, o = i.alternate, f = i.child, d = i.sibling, h = i.tag;
        i = i.type;
        var y = null;
        switch (h) {
          case 0:
          case 15:
          case 1:
            y = i;
            break;
          case 11:
            y = i.render;
        }
        if (Qu === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var p = !1;
        if (i = !1, y !== null && (y = Qu(y), y !== void 0 && (a.has(y) ? i = !0 : t.has(y) && (h === 1 ? i = !0 : p = !0))), Wh !== null && (Wh.has(e) || o !== null && Wh.has(o)) && (i = !0), i && (e._debugNeedsRemount = !0), (i || p) && (o = la(e, 2), o !== null && Be(o, e, 2)), f === null || i || j0(
          f,
          t,
          a
        ), d === null) break;
        e = d;
      } while (!0);
    }
    function Fv(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, V1 || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Xm(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function mu(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = H(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = Yi(e.type);
          break;
        case 1:
          a.type = Yi(e.type);
          break;
        case 11:
          a.type = Sd(e.type);
      }
      return a;
    }
    function Qm(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function Uc(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        Xm(e) && (d = 1), h = Yi(h);
      else if (typeof e == "string")
        d = V(), d = Cg(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case Pn:
            return t = H(31, a, t, o), t.elementType = Pn, t.lanes = f, t;
          case Uf:
            return Hc(
              a.children,
              o,
              f,
              t
            );
          case Oa:
            d = 8, o |= ja, o |= Ei;
            break;
          case Ar:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = H(12, e, t, i | We), t.elementType = Ar, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case oo:
            return t = H(13, a, t, o), t.elementType = oo, t.lanes = f, t;
          case Na:
            return t = H(19, a, t, o), t.elementType = Na, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case In:
                  d = 10;
                  break e;
                case Uh:
                  d = 9;
                  break e;
                case Hf:
                  d = 11, h = Sd(h);
                  break e;
                case Or:
                  d = 14;
                  break e;
                case ua:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : bl(e) ? a = "array" : e !== void 0 && e.$$typeof === zn ? (a = "<" + (Ze(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? Dt(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = H(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function xi(e, t, a) {
      return t = Uc(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function Hc(e, t, a, i) {
      return e = H(7, e, i, t), e.lanes = a, e;
    }
    function Zo(e, t, a) {
      return e = H(6, e, null, t), e.lanes = a, e;
    }
    function Lm(e) {
      var t = H(18, null, null, He);
      return t.stateNode = e, t;
    }
    function bd(e, t, a) {
      return t = H(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function ra(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = TS.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: Te(t)
        }, TS.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: Te(t)
      };
    }
    function Yn(e, t) {
      qi(), Fh[Ih++] = Np, Fh[Ih++] = Ig, Ig = e, Np = t;
    }
    function Vm(e, t, a) {
      qi(), Lu[Vu++] = po, Lu[Vu++] = go, Lu[Vu++] = Ur, Ur = e;
      var i = po;
      e = go;
      var o = 32 - kl(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - kl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, po = 1 << 32 - kl(t) + o | a << o | i, go = f + e;
      } else
        po = 1 << f | a << o | i, go = e;
    }
    function Ed(e) {
      qi(), e.return !== null && (Yn(e, 1), Vm(e, 1, 0));
    }
    function Td(e) {
      for (; e === Ig; )
        Ig = Fh[--Ih], Fh[Ih] = null, Np = Fh[--Ih], Fh[Ih] = null;
      for (; e === Ur; )
        Ur = Lu[--Vu], Lu[Vu] = null, go = Lu[--Vu], Lu[Vu] = null, po = Lu[--Vu], Lu[Vu] = null;
    }
    function Y0() {
      return qi(), Ur !== null ? { id: po, overflow: go } : null;
    }
    function x0(e, t) {
      qi(), Lu[Vu++] = po, Lu[Vu++] = go, Lu[Vu++] = Ur, po = t.id, go = t.overflow, Ur = e;
    }
    function qi() {
      it || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function Nc(e, t) {
      if (e.return === null) {
        if (tu === null)
          tu = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (tu.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          tu.distanceFromLeaf > t && (tu.distanceFromLeaf = t);
        }
        return tu;
      }
      var a = Nc(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function q0() {
      it && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function aa(e, t) {
      mc || (e = Nc(e, 0), e.serverProps = null, t !== null && (t = Dg(t), e.serverTail.push(t)));
    }
    function pn(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", i = tu;
      throw i !== null && (tu = null, a = Om(i)), Ds(
        ra(
          Error(
            "Hydration failed because the server rendered " + (t ? "text" : "HTML") + ` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + a
          ),
          e
        )
      ), AS;
    }
    function Zm(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Wt] = e, t[za] = i, Ta(a, i), a) {
        case "dialog":
          Ue("cancel", t), Ue("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Ue("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < c0.length; a++)
            Ue(c0[a], t);
          break;
        case "source":
          Ue("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Ue("error", t), Ue("load", t);
          break;
        case "details":
          Ue("toggle", t);
          break;
        case "input":
          ta("input", i), Ue("invalid", t), sa(t, i), ad(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          );
          break;
        case "option":
          E0(t, i);
          break;
        case "select":
          ta("select", i), Ue("invalid", t), nd(t, i);
          break;
        case "textarea":
          ta("textarea", i), Ue("invalid", t), Ec(t, i), jo(
            t,
            i.value,
            i.defaultValue,
            i.children
          );
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || Ky(t.textContent, a) ? (i.popover != null && (Ue("beforetoggle", t), Ue("toggle", t)), i.onScroll != null && Ue("scroll", t), i.onScrollEnd != null && Ue("scrollend", t), i.onClick != null && (t.onclick = mn), t = !0) : t = !1, t || pn(e, !0);
    }
    function Jm(e) {
      for (Da = e.return; Da; )
        switch (Da.tag) {
          case 5:
          case 31:
          case 13:
            Zu = !1;
            return;
          case 27:
          case 3:
            Zu = !0;
            return;
          default:
            Da = Da.return;
        }
    }
    function Bc(e) {
      if (e !== Da) return !1;
      if (!it)
        return Jm(e), it = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Af(e.type, e.memoizedProps)), a = !a), a && It) {
        for (a = It; a; ) {
          var i = Nc(e, 0), o = Dg(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? Df(a) : ln(a.nextSibling);
        }
        pn(e);
      }
      if (Jm(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        It = Df(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        It = Df(e);
      } else
        t === 27 ? (t = It, cc(e.type) ? (e = d1, d1 = null, It = e) : It = t) : It = Da ? ln(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Gi() {
      It = Da = null, mc = it = !1;
    }
    function zs() {
      var e = Kf;
      return e !== null && (rn === null ? rn = e : rn.push.apply(
        rn,
        e
      ), Kf = null), e;
    }
    function Ds(e) {
      Kf === null ? Kf = [e] : Kf.push(e);
    }
    function wi() {
      var e = tu;
      if (e !== null) {
        tu = null;
        for (var t = Om(e); 0 < e.children.length; )
          e = e.children[0];
        ce(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function Jo() {
      Ph = Pg = null, em = !1;
    }
    function gn(e, t, a) {
      qe(OS, t._currentValue, e), t._currentValue = a, qe(zS, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== J1 && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = J1;
    }
    function xn(e, t) {
      e._currentValue = OS.current;
      var a = zS.current;
      ye(zS, t), e._currentRenderer = a, ye(OS, t);
    }
    function Ad(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function ti(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var y = 0; y < t.length; y++)
              if (h.context === t[y]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), Ad(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), Ad(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function qn(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if (o.flags & 524288) f = !0;
          else if (o.flags & 262144) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            cn(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === rc.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(d0) : e = [d0]);
        }
        o = o.return;
      }
      e !== null && ti(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function Ko(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!cn(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function Xi(e) {
      Pg = e, Ph = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function vt(e) {
      return em && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Km(Pg, e);
    }
    function _s(e, t) {
      return Pg === null && Xi(e), Km(e, t);
    }
    function Km(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, Ph === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Ph = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else Ph = Ph.next = t;
      return a;
    }
    function Od() {
      return {
        controller: new XE(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function jc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function Rs(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && QE(LE, function() {
        e.controller.abort();
      });
    }
    function yu(e, t, a) {
      e & 127 ? 0 > yc && (yc = Xl(), jp = ev(t), DS = t, a != null && (_S = se(a)), (ht & (Il | nu)) !== fa && (pl = !0, kf = Bp), e = Of(), t = Bu(), e !== tm || t !== Yp ? tm = -1.1 : t !== null && (kf = Bp), Br = e, Yp = t) : e & 4194048 && 0 > Ju && (Ju = Xl(), xp = ev(t), K1 = t, a != null && ($1 = se(a)), 0 > Eo) && (e = Of(), t = Bu(), (e !== Ff || t !== jr) && (Ff = -1.1), Wf = e, jr = t);
    }
    function G0(e) {
      if (0 > yc) {
        yc = Xl(), jp = e._debugTask != null ? e._debugTask : null, (ht & (Il | nu)) !== fa && (kf = Bp);
        var t = Of(), a = Bu();
        t !== tm || a !== Yp ? tm = -1.1 : a !== null && (kf = Bp), Br = t, Yp = a;
      }
      0 > Ju && (Ju = Xl(), xp = e._debugTask != null ? e._debugTask : null, 0 > Eo) && (e = Of(), t = Bu(), (e !== Ff || t !== jr) && (Ff = -1.1), Wf = e, jr = t);
    }
    function pu() {
      var e = Hr;
      return Hr = 0, e;
    }
    function $o(e) {
      var t = Hr;
      return Hr = e, t;
    }
    function da(e) {
      var t = Hr;
      return Hr += e, t;
    }
    function Yc() {
      Me = Ae = -1.1;
    }
    function Kt() {
      var e = Ae;
      return Ae = -1.1, e;
    }
    function Nl(e) {
      0 <= e && (Ae = e);
    }
    function vn() {
      var e = fl;
      return fl = -0, e;
    }
    function Va(e) {
      0 <= e && (fl = e);
    }
    function Za() {
      var e = nl;
      return nl = null, e;
    }
    function Sn() {
      var e = pl;
      return pl = !1, e;
    }
    function li(e) {
      on = Xl(), 0 > e.actualStartTime && (e.actualStartTime = on);
    }
    function zd(e) {
      if (0 <= on) {
        var t = Xl() - on;
        e.actualDuration += t, e.selfBaseDuration = t, on = -1;
      }
    }
    function Ms(e) {
      if (0 <= on) {
        var t = Xl() - on;
        e.actualDuration += t, on = -1;
      }
    }
    function ha() {
      if (0 <= on) {
        var e = Xl(), t = e - on;
        on = -1, Hr += t, fl += t, Me = e;
      }
    }
    function w0(e) {
      nl === null && (nl = []), nl.push(e), So === null && (So = []), So.push(e);
    }
    function il() {
      on = Xl(), 0 > Ae && (Ae = on);
    }
    function xc(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ai(e, t) {
      if (Gp === null) {
        var a = Gp = [];
        MS = 0, Yr = Jy(), lm = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return MS++, t.then($m, $m), t;
    }
    function $m() {
      if (--MS === 0 && (-1 < Ju || (Eo = -1.1), Gp !== null)) {
        lm !== null && (lm.status = "fulfilled");
        var e = Gp;
        Gp = null, Yr = 0, lm = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Dd(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function ni() {
      var e = xr.current;
      return e !== null ? e : Xt.pooledCache;
    }
    function ko(e, t) {
      t === null ? qe(xr, xr.current, e) : qe(xr, t.pool, e);
    }
    function km() {
      var e = ni();
      return e === null ? null : { parent: wl._currentValue, pool: e };
    }
    function _d() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Wm(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Ja(e, t, a) {
      G.actQueue !== null && (G.didUsePromise = !0);
      var i = e.thenables;
      if (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(mn, mn), t = a), t._debugInfo === void 0) {
        e = performance.now(), i = t.displayName;
        var o = {
          name: typeof i == "string" ? i : "Promise",
          start: e,
          end: e,
          value: t
        };
        t._debugInfo = [{ awaited: o }], t.status !== "fulfilled" && t.status !== "rejected" && (e = function() {
          o.end = performance.now();
        }, t.then(e, e));
      }
      switch (t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, Cs(e), e;
        default:
          if (typeof t.status == "string")
            t.then(mn, mn);
          else {
            if (e = Xt, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "fulfilled", d.value = f;
                }
              },
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "rejected", d.reason = f;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Cs(e), e;
          }
          throw Gr = t, Jp = !0, am;
      }
    }
    function Ka(e) {
      try {
        return $E(e);
      } catch (t) {
        throw t !== null && typeof t == "object" && typeof t.then == "function" ? (Gr = t, Jp = !0, am) : t;
      }
    }
    function qc() {
      if (Gr === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Gr;
      return Gr = null, Jp = !1, e;
    }
    function Cs(e) {
      if (e === am || e === ov)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function rl(e) {
      var t = Fe;
      return e != null && (Fe = t === null ? e : t.concat(e)), t;
    }
    function _a() {
      var e = Fe;
      if (e != null) {
        for (var t = e.length - 1; 0 <= t; t--)
          if (e[t].name != null) {
            var a = e[t].debugTask;
            if (a != null) return a;
          }
      }
      return null;
    }
    function ma(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = xi(e, a.mode, 0), t._debugInfo = Fe, t.return = a), ce(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function Gn(e) {
      var t = Kp;
      return Kp += 1, nm === null && (nm = _d()), Ja(nm, e, t);
    }
    function Ra(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function wn(e, t) {
      throw t.$$typeof === Yg ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function bn(e, t) {
      var a = _a();
      a !== null ? a.run(
        wn.bind(null, e, t)
      ) : wn(e, t);
    }
    function Fm(e, t) {
      var a = se(e) || "Component";
      mb[a] || (mb[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function Wo(e, t) {
      var a = _a();
      a !== null ? a.run(
        Fm.bind(null, e, t)
      ) : Fm(e, t);
    }
    function Rd(e, t) {
      var a = se(e) || "Component";
      yb[a] || (yb[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function Us(e, t) {
      var a = _a();
      a !== null ? a.run(
        Rd.bind(null, e, t)
      ) : Rd(e, t);
    }
    function Bl(e) {
      function t(b, T) {
        if (e) {
          var O = b.deletions;
          O === null ? (b.deletions = [T], b.flags |= 16) : O.push(T);
        }
      }
      function a(b, T) {
        if (!e) return null;
        for (; T !== null; )
          t(b, T), T = T.sibling;
        return null;
      }
      function i(b) {
        for (var T = /* @__PURE__ */ new Map(); b !== null; )
          b.key !== null ? T.set(b.key, b) : T.set(b.index, b), b = b.sibling;
        return T;
      }
      function o(b, T) {
        return b = mu(b, T), b.index = 0, b.sibling = null, b;
      }
      function f(b, T, O) {
        return b.index = O, e ? (O = b.alternate, O !== null ? (O = O.index, O < T ? (b.flags |= 67108866, T) : O) : (b.flags |= 67108866, T)) : (b.flags |= 1048576, T);
      }
      function d(b) {
        return e && b.alternate === null && (b.flags |= 67108866), b;
      }
      function h(b, T, O, Z) {
        return T === null || T.tag !== 6 ? (T = Zo(
          O,
          b.mode,
          Z
        ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = Fe, T) : (T = o(T, O), T.return = b, T._debugInfo = Fe, T);
      }
      function y(b, T, O, Z) {
        var ue = O.type;
        return ue === Uf ? (T = z(
          b,
          T,
          O.props.children,
          Z,
          O.key
        ), ma(O, T, b), T) : T !== null && (T.elementType === ue || wm(T, O) || typeof ue == "object" && ue !== null && ue.$$typeof === ua && Ka(ue) === T.type) ? (T = o(T, O.props), Ra(T, O), T.return = b, T._debugOwner = O._owner, T._debugInfo = Fe, T) : (T = xi(O, b.mode, Z), Ra(T, O), T.return = b, T._debugInfo = Fe, T);
      }
      function p(b, T, O, Z) {
        return T === null || T.tag !== 4 || T.stateNode.containerInfo !== O.containerInfo || T.stateNode.implementation !== O.implementation ? (T = bd(O, b.mode, Z), T.return = b, T._debugInfo = Fe, T) : (T = o(T, O.children || []), T.return = b, T._debugInfo = Fe, T);
      }
      function z(b, T, O, Z, ue) {
        return T === null || T.tag !== 7 ? (T = Hc(
          O,
          b.mode,
          Z,
          ue
        ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = Fe, T) : (T = o(T, O), T.return = b, T._debugInfo = Fe, T);
      }
      function R(b, T, O) {
        if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
          return T = Zo(
            "" + T,
            b.mode,
            O
          ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = Fe, T;
        if (typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case zn:
              return O = xi(
                T,
                b.mode,
                O
              ), Ra(O, T), O.return = b, b = rl(T._debugInfo), O._debugInfo = Fe, Fe = b, O;
            case fc:
              return T = bd(
                T,
                b.mode,
                O
              ), T.return = b, T._debugInfo = Fe, T;
            case ua:
              var Z = rl(T._debugInfo);
              return T = Ka(T), b = R(b, T, O), Fe = Z, b;
          }
          if (bl(T) || _e(T))
            return O = Hc(
              T,
              b.mode,
              O,
              null
            ), O.return = b, O._debugOwner = b, O._debugTask = b._debugTask, b = rl(T._debugInfo), O._debugInfo = Fe, Fe = b, O;
          if (typeof T.then == "function")
            return Z = rl(T._debugInfo), b = R(
              b,
              Gn(T),
              O
            ), Fe = Z, b;
          if (T.$$typeof === In)
            return R(
              b,
              _s(b, T),
              O
            );
          bn(b, T);
        }
        return typeof T == "function" && Wo(b, T), typeof T == "symbol" && Us(b, T), null;
      }
      function E(b, T, O, Z) {
        var ue = T !== null ? T.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
          return ue !== null ? null : h(b, T, "" + O, Z);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case zn:
              return O.key === ue ? (ue = rl(O._debugInfo), b = y(
                b,
                T,
                O,
                Z
              ), Fe = ue, b) : null;
            case fc:
              return O.key === ue ? p(b, T, O, Z) : null;
            case ua:
              return ue = rl(O._debugInfo), O = Ka(O), b = E(
                b,
                T,
                O,
                Z
              ), Fe = ue, b;
          }
          if (bl(O) || _e(O))
            return ue !== null ? null : (ue = rl(O._debugInfo), b = z(
              b,
              T,
              O,
              Z,
              null
            ), Fe = ue, b);
          if (typeof O.then == "function")
            return ue = rl(O._debugInfo), b = E(
              b,
              T,
              Gn(O),
              Z
            ), Fe = ue, b;
          if (O.$$typeof === In)
            return E(
              b,
              T,
              _s(b, O),
              Z
            );
          bn(b, O);
        }
        return typeof O == "function" && Wo(b, O), typeof O == "symbol" && Us(b, O), null;
      }
      function x(b, T, O, Z, ue) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
          return b = b.get(O) || null, h(T, b, "" + Z, ue);
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case zn:
              return O = b.get(
                Z.key === null ? O : Z.key
              ) || null, b = rl(Z._debugInfo), T = y(
                T,
                O,
                Z,
                ue
              ), Fe = b, T;
            case fc:
              return b = b.get(
                Z.key === null ? O : Z.key
              ) || null, p(T, b, Z, ue);
            case ua:
              var xe = rl(Z._debugInfo);
              return Z = Ka(Z), T = x(
                b,
                T,
                O,
                Z,
                ue
              ), Fe = xe, T;
          }
          if (bl(Z) || _e(Z))
            return O = b.get(O) || null, b = rl(Z._debugInfo), T = z(
              T,
              O,
              Z,
              ue,
              null
            ), Fe = b, T;
          if (typeof Z.then == "function")
            return xe = rl(Z._debugInfo), T = x(
              b,
              T,
              O,
              Gn(Z),
              ue
            ), Fe = xe, T;
          if (Z.$$typeof === In)
            return x(
              b,
              T,
              O,
              _s(T, Z),
              ue
            );
          bn(T, Z);
        }
        return typeof Z == "function" && Wo(T, Z), typeof Z == "symbol" && Us(T, Z), null;
      }
      function ne(b, T, O, Z) {
        if (typeof O != "object" || O === null) return Z;
        switch (O.$$typeof) {
          case zn:
          case fc:
            Ce(b, T, O);
            var ue = O.key;
            if (typeof ue != "string") break;
            if (Z === null) {
              Z = /* @__PURE__ */ new Set(), Z.add(ue);
              break;
            }
            if (!Z.has(ue)) {
              Z.add(ue);
              break;
            }
            ce(T, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                ue
              );
            });
            break;
          case ua:
            O = Ka(O), ne(b, T, O, Z);
        }
        return Z;
      }
      function oe(b, T, O, Z) {
        for (var ue = null, xe = null, Ee = null, ge = T, $e = T = 0, Pt = null; ge !== null && $e < O.length; $e++) {
          ge.index > $e ? (Pt = ge, ge = null) : Pt = ge.sibling;
          var Cl = E(
            b,
            ge,
            O[$e],
            Z
          );
          if (Cl === null) {
            ge === null && (ge = Pt);
            break;
          }
          ue = ne(
            b,
            Cl,
            O[$e],
            ue
          ), e && ge && Cl.alternate === null && t(b, ge), T = f(Cl, T, $e), Ee === null ? xe = Cl : Ee.sibling = Cl, Ee = Cl, ge = Pt;
        }
        if ($e === O.length)
          return a(b, ge), it && Yn(b, $e), xe;
        if (ge === null) {
          for (; $e < O.length; $e++)
            ge = R(b, O[$e], Z), ge !== null && (ue = ne(
              b,
              ge,
              O[$e],
              ue
            ), T = f(
              ge,
              T,
              $e
            ), Ee === null ? xe = ge : Ee.sibling = ge, Ee = ge);
          return it && Yn(b, $e), xe;
        }
        for (ge = i(ge); $e < O.length; $e++)
          Pt = x(
            ge,
            b,
            $e,
            O[$e],
            Z
          ), Pt !== null && (ue = ne(
            b,
            Pt,
            O[$e],
            ue
          ), e && Pt.alternate !== null && ge.delete(
            Pt.key === null ? $e : Pt.key
          ), T = f(
            Pt,
            T,
            $e
          ), Ee === null ? xe = Pt : Ee.sibling = Pt, Ee = Pt);
        return e && ge.forEach(function(Mo) {
          return t(b, Mo);
        }), it && Yn(b, $e), xe;
      }
      function Zt(b, T, O, Z) {
        if (O == null)
          throw Error("An iterable object provided no iterator.");
        for (var ue = null, xe = null, Ee = T, ge = T = 0, $e = null, Pt = null, Cl = O.next(); Ee !== null && !Cl.done; ge++, Cl = O.next()) {
          Ee.index > ge ? ($e = Ee, Ee = null) : $e = Ee.sibling;
          var Mo = E(b, Ee, Cl.value, Z);
          if (Mo === null) {
            Ee === null && (Ee = $e);
            break;
          }
          Pt = ne(
            b,
            Mo,
            Cl.value,
            Pt
          ), e && Ee && Mo.alternate === null && t(b, Ee), T = f(Mo, T, ge), xe === null ? ue = Mo : xe.sibling = Mo, xe = Mo, Ee = $e;
        }
        if (Cl.done)
          return a(b, Ee), it && Yn(b, ge), ue;
        if (Ee === null) {
          for (; !Cl.done; ge++, Cl = O.next())
            Ee = R(b, Cl.value, Z), Ee !== null && (Pt = ne(
              b,
              Ee,
              Cl.value,
              Pt
            ), T = f(
              Ee,
              T,
              ge
            ), xe === null ? ue = Ee : xe.sibling = Ee, xe = Ee);
          return it && Yn(b, ge), ue;
        }
        for (Ee = i(Ee); !Cl.done; ge++, Cl = O.next())
          $e = x(
            Ee,
            b,
            ge,
            Cl.value,
            Z
          ), $e !== null && (Pt = ne(
            b,
            $e,
            Cl.value,
            Pt
          ), e && $e.alternate !== null && Ee.delete(
            $e.key === null ? ge : $e.key
          ), T = f(
            $e,
            T,
            ge
          ), xe === null ? ue = $e : xe.sibling = $e, xe = $e);
        return e && Ee.forEach(function(vT) {
          return t(b, vT);
        }), it && Yn(b, ge), ue;
      }
      function ft(b, T, O, Z) {
        if (typeof O == "object" && O !== null && O.type === Uf && O.key === null && (ma(O, null, b), O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case zn:
              var ue = rl(O._debugInfo);
              e: {
                for (var xe = O.key; T !== null; ) {
                  if (T.key === xe) {
                    if (xe = O.type, xe === Uf) {
                      if (T.tag === 7) {
                        a(
                          b,
                          T.sibling
                        ), Z = o(
                          T,
                          O.props.children
                        ), Z.return = b, Z._debugOwner = O._owner, Z._debugInfo = Fe, ma(O, Z, b), b = Z;
                        break e;
                      }
                    } else if (T.elementType === xe || wm(
                      T,
                      O
                    ) || typeof xe == "object" && xe !== null && xe.$$typeof === ua && Ka(xe) === T.type) {
                      a(
                        b,
                        T.sibling
                      ), Z = o(T, O.props), Ra(Z, O), Z.return = b, Z._debugOwner = O._owner, Z._debugInfo = Fe, b = Z;
                      break e;
                    }
                    a(b, T);
                    break;
                  } else t(b, T);
                  T = T.sibling;
                }
                O.type === Uf ? (Z = Hc(
                  O.props.children,
                  b.mode,
                  Z,
                  O.key
                ), Z.return = b, Z._debugOwner = b, Z._debugTask = b._debugTask, Z._debugInfo = Fe, ma(O, Z, b), b = Z) : (Z = xi(
                  O,
                  b.mode,
                  Z
                ), Ra(Z, O), Z.return = b, Z._debugInfo = Fe, b = Z);
              }
              return b = d(b), Fe = ue, b;
            case fc:
              e: {
                for (ue = O, O = ue.key; T !== null; ) {
                  if (T.key === O)
                    if (T.tag === 4 && T.stateNode.containerInfo === ue.containerInfo && T.stateNode.implementation === ue.implementation) {
                      a(
                        b,
                        T.sibling
                      ), Z = o(
                        T,
                        ue.children || []
                      ), Z.return = b, b = Z;
                      break e;
                    } else {
                      a(b, T);
                      break;
                    }
                  else t(b, T);
                  T = T.sibling;
                }
                Z = bd(
                  ue,
                  b.mode,
                  Z
                ), Z.return = b, b = Z;
              }
              return d(b);
            case ua:
              return ue = rl(O._debugInfo), O = Ka(O), b = ft(
                b,
                T,
                O,
                Z
              ), Fe = ue, b;
          }
          if (bl(O))
            return ue = rl(O._debugInfo), b = oe(
              b,
              T,
              O,
              Z
            ), Fe = ue, b;
          if (_e(O)) {
            if (ue = rl(O._debugInfo), xe = _e(O), typeof xe != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var Ee = xe.call(O);
            return Ee === O ? (b.tag !== 0 || Object.prototype.toString.call(b.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(Ee) !== "[object Generator]") && (db || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), db = !0) : O.entries !== xe || NS || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), NS = !0), b = Zt(
              b,
              T,
              Ee,
              Z
            ), Fe = ue, b;
          }
          if (typeof O.then == "function")
            return ue = rl(O._debugInfo), b = ft(
              b,
              T,
              Gn(O),
              Z
            ), Fe = ue, b;
          if (O.$$typeof === In)
            return ft(
              b,
              T,
              _s(b, O),
              Z
            );
          bn(b, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (ue = "" + O, T !== null && T.tag === 6 ? (a(
          b,
          T.sibling
        ), Z = o(T, ue), Z.return = b, b = Z) : (a(b, T), Z = Zo(
          ue,
          b.mode,
          Z
        ), Z.return = b, Z._debugOwner = b, Z._debugTask = b._debugTask, Z._debugInfo = Fe, b = Z), d(b)) : (typeof O == "function" && Wo(b, O), typeof O == "symbol" && Us(b, O), a(b, T));
      }
      return function(b, T, O, Z) {
        var ue = Fe;
        Fe = null;
        try {
          Kp = 0;
          var xe = ft(
            b,
            T,
            O,
            Z
          );
          return nm = null, xe;
        } catch (Pt) {
          if (Pt === am || Pt === ov) throw Pt;
          var Ee = H(29, Pt, null, b.mode);
          Ee.lanes = Z, Ee.return = b;
          var ge = Ee._debugInfo = Fe;
          if (Ee._debugOwner = b._debugOwner, Ee._debugTask = b._debugTask, ge != null) {
            for (var $e = ge.length - 1; 0 <= $e; $e--)
              if (typeof ge[$e].stack == "string") {
                Ee._debugOwner = ge[$e], Ee._debugTask = ge[$e].debugTask;
                break;
              }
          }
          return Ee;
        } finally {
          Fe = ue;
        }
      };
    }
    function xt(e, t) {
      var a = bl(e);
      return e = !a && typeof _e(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function nt(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function gu(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Ol(e) {
      return {
        lane: e,
        tag: gb,
        payload: null,
        callback: null,
        next: null
      };
    }
    function vu(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, jS === i && !bb) {
        var o = se(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), bb = !0;
      }
      return (ht & Il) !== fa ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = Os(e), Gm(e, null, a), t) : (Vo(e, i, t, a), Os(e));
    }
    function En(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, hs(e, a);
      }
    }
    function Hs(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function Fo() {
      if (YS) {
        var e = lm;
        if (e !== null) throw e;
      }
    }
    function Su(e, t, a, i) {
      YS = !1;
      var o = e.updateQueue;
      If = !1, jS = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, p = y.next;
        y.next = null, d === null ? f = p : d.next = p, d = y;
        var z = e.alternate;
        z !== null && (z = z.updateQueue, h = z.lastBaseUpdate, h !== d && (h === null ? z.firstBaseUpdate = p : h.next = p, z.lastBaseUpdate = y));
      }
      if (f !== null) {
        var R = o.baseState;
        d = 0, z = p = y = null, h = f;
        do {
          var E = h.lane & -536870913, x = E !== h.lane;
          if (x ? (Ie & E) === E : (i & E) === E) {
            E !== 0 && E === Yr && (YS = !0), z !== null && (z = z.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              E = e;
              var ne = h, oe = t, Zt = a;
              switch (ne.tag) {
                case vb:
                  if (ne = ne.payload, typeof ne == "function") {
                    em = !0;
                    var ft = ne.call(
                      Zt,
                      R,
                      oe
                    );
                    if (E.mode & ja) {
                      re(!0);
                      try {
                        ne.call(Zt, R, oe);
                      } finally {
                        re(!1);
                      }
                    }
                    em = !1, R = ft;
                    break e;
                  }
                  R = ne;
                  break e;
                case BS:
                  E.flags = E.flags & -65537 | 128;
                case gb:
                  if (ft = ne.payload, typeof ft == "function") {
                    if (em = !0, ne = ft.call(
                      Zt,
                      R,
                      oe
                    ), E.mode & ja) {
                      re(!0);
                      try {
                        ft.call(Zt, R, oe);
                      } finally {
                        re(!1);
                      }
                    }
                    em = !1;
                  } else ne = ft;
                  if (ne == null) break e;
                  R = ke({}, R, ne);
                  break e;
                case Sb:
                  If = !0;
              }
            }
            E = h.callback, E !== null && (e.flags |= 64, x && (e.flags |= 8192), x = o.callbacks, x === null ? o.callbacks = [E] : x.push(E));
          } else
            x = {
              lane: E,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, z === null ? (p = z = x, y = R) : z = z.next = x, d |= E;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            x = h, h = x.next, x.next = null, o.lastBaseUpdate = x, o.shared.pending = null;
          }
        } while (!0);
        z === null && (y = R), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = z, f === null && (o.shared.lanes = 0), ts |= d, e.lanes = d, e.memoizedState = R;
      }
      jS = null;
    }
    function Qi(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function Im(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Qi(a[e], t);
    }
    function Io(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Qi(a[e], t);
    }
    function Md(e, t) {
      var a = gc;
      qe(sv, a, e), qe(um, t, e), gc = a | t.baseLanes;
    }
    function ui(e) {
      qe(sv, gc, e), qe(
        um,
        um.current,
        e
      );
    }
    function Xn(e) {
      gc = sv.current, ye(um, e), ye(sv, e);
    }
    function ya(e) {
      var t = e.alternate;
      qe(
        Ml,
        Ml.current & im,
        e
      ), qe(lu, e, e), Ku === null && (t === null || um.current !== null || t.memoizedState !== null) && (Ku = e);
    }
    function Qn(e) {
      qe(Ml, Ml.current, e), qe(lu, e, e), Ku === null && (Ku = e);
    }
    function Cd(e) {
      e.tag === 22 ? (qe(Ml, Ml.current, e), qe(lu, e, e), Ku === null && (Ku = e)) : bu(e);
    }
    function bu(e) {
      qe(Ml, Ml.current, e), qe(
        lu,
        lu.current,
        e
      );
    }
    function jl(e) {
      ye(lu, e), Ku === e && (Ku = null), ye(Ml, e);
    }
    function Gc(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || mr(a) || ky(a)))
            return t;
        } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function je() {
      var e = q;
      ku === null ? ku = [e] : ku.push(e);
    }
    function k() {
      var e = q;
      if (ku !== null && (Oo++, ku[Oo] !== e)) {
        var t = se(Ye);
        if (!Eb.has(t) && (Eb.add(t), ku !== null)) {
          for (var a = "", i = 0; i <= Oo; i++) {
            var o = ku[i], f = i === Oo ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function ii(e) {
      e == null || bl(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        q,
        typeof e
      );
    }
    function Ns() {
      var e = se(Ye);
      Ab.has(e) || (Ab.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function cl() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function Pm(e, t) {
      if (Wp) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          q
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        q,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!cn(e[a], t[a])) return !1;
      return !0;
    }
    function ey(e, t, a, i, o, f) {
      To = f, Ye = t, ku = e !== null ? e._debugHookTypes : null, Oo = -1, Wp = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = se(Ye), xS.has(f) || (xS.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, G.H = e !== null && e.memoizedState !== null ? GS : ku !== null ? Ob : qS, Xr = f = (t.mode & ja) !== He;
      var d = CS(a, i, o);
      if (Xr = !1, om && (d = Bs(
        t,
        a,
        i,
        o
      )), f) {
        re(!0);
        try {
          d = Bs(
            t,
            a,
            i,
            o
          );
        } finally {
          re(!1);
        }
      }
      return dl(e, t), d;
    }
    function dl(e, t) {
      t._debugHookTypes = ku, t.dependencies === null ? Ao !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Ao
      }) : t.dependencies._debugThenableState = Ao, G.H = Fp;
      var a = wt !== null && wt.next !== null;
      if (To = 0, ku = q = Ql = wt = Ye = null, Oo = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), dv = !1, kp = 0, Ao = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Ll || (e = e.dependencies, e !== null && Ko(e) && (Ll = !0)), Jp ? (Jp = !1, e = !0) : e = !1, e && (t = se(t) || "Unknown", Tb.has(t) || xS.has(t) || (Tb.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function Bs(e, t, a, i) {
      Ye = e;
      var o = 0;
      do {
        if (om && (Ao = null), kp = 0, om = !1, o >= WE)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Wp = !1, Ql = wt = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Oo = -1, G.H = zb, f = CS(t, a, i);
      } while (om);
      return f;
    }
    function js() {
      var e = G.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? qs(t) : t, e = e.useState()[0], (wt !== null ? wt.memoizedState : null) !== e && (Ye.flags |= 1024), t;
    }
    function wc() {
      var e = hv !== 0;
      return hv = 0, e;
    }
    function Ys(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Ei) !== He ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function Li(e) {
      if (dv) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        dv = !1;
      }
      To = 0, ku = Ql = wt = Ye = null, Oo = -1, q = null, om = !1, kp = hv = 0, Ao = null;
    }
    function vl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Ql === null ? Ye.memoizedState = Ql = e : Ql = Ql.next = e, Ql;
    }
    function Tt() {
      if (wt === null) {
        var e = Ye.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = wt.next;
      var t = Ql === null ? Ye.memoizedState : Ql.next;
      if (t !== null)
        Ql = t, wt = e;
      else {
        if (e === null)
          throw Ye.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        wt = e, e = {
          memoizedState: wt.memoizedState,
          baseState: wt.baseState,
          baseQueue: wt.baseQueue,
          queue: wt.queue,
          next: null
        }, Ql === null ? Ye.memoizedState = Ql = e : Ql = Ql.next = e;
      }
      return Ql;
    }
    function xs() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function qs(e) {
      var t = kp;
      return kp += 1, Ao === null && (Ao = _d()), e = Ja(Ao, e, t), t = Ye, (Ql === null ? t.memoizedState : Ql.next) === null && (t = t.alternate, G.H = t !== null && t.memoizedState !== null ? GS : qS), e;
    }
    function ci(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return qs(e);
        if (e.$$typeof === In) return vt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function $a(e) {
      var t = null, a = Ye.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = Ye.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = xs(), Ye.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || Wp)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = aS;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function ka(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Po(e, t, a) {
      var i = vl();
      if (a !== void 0) {
        var o = a(t);
        if (Xr) {
          re(!0);
          try {
            a(t);
          } finally {
            re(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = Iv.bind(
        null,
        Ye,
        e
      ), [i.memoizedState, e];
    }
    function Xc(e) {
      var t = Tt();
      return Vi(t, wt, e);
    }
    function Vi(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, y = null, p = t, z = !1;
        do {
          var R = p.lane & -536870913;
          if (R !== p.lane ? (Ie & R) === R : (To & R) === R) {
            var E = p.revertLane;
            if (E === 0)
              y !== null && (y = y.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), R === Yr && (z = !0);
            else if ((To & E) === E) {
              p = p.next, E === Yr && (z = !0);
              continue;
            } else
              R = {
                lane: 0,
                revertLane: p.revertLane,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }, y === null ? (h = y = R, d = f) : y = y.next = R, Ye.lanes |= E, ts |= E;
            R = p.action, Xr && a(f, R), f = p.hasEagerState ? p.eagerState : a(f, R);
          } else
            E = {
              lane: R,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = E, d = f) : y = y.next = E, Ye.lanes |= R, ts |= R;
          p = p.next;
        } while (p !== null && p !== t);
        if (y === null ? d = f : y.next = h, !cn(f, e.memoizedState) && (Ll = !0, z && (a = lm, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = y, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function Qc(e) {
      var t = Tt(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        cn(f, t.memoizedState) || (Ll = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function ef(e, t, a) {
      var i = Ye, o = vl();
      if (it) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        cm || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), cm = !0);
      } else {
        if (f = t(), cm || (a = t(), cn(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), cm = !0)), Xt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        Ie & 127 || ty(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, Zc(
        Zi.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, Eu(
        $u | sn,
        { destroy: void 0 },
        ly.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Lc(e, t, a) {
      var i = Ye, o = Tt(), f = it;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !cm) {
        var d = t();
        cn(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), cm = !0);
      }
      (d = !cn(
        (wt || o).memoizedState,
        a
      )) && (o.memoizedState = a, Ll = !0), o = o.queue;
      var h = Zi.bind(null, i, o, e);
      if (zl(2048, sn, h, [e]), o.getSnapshot !== t || d || Ql !== null && Ql.memoizedState.tag & $u) {
        if (i.flags |= 2048, Eu(
          $u | sn,
          { destroy: void 0 },
          ly.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), Xt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || To & 127 || ty(i, t, a);
      }
      return a;
    }
    function ty(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Ye.updateQueue, t === null ? (t = xs(), Ye.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function ly(e, t, a, i) {
      t.value = a, t.getSnapshot = i, Ji(t) && ay(e);
    }
    function Zi(e, t, a) {
      return a(function() {
        Ji(t) && (yu(2, "updateSyncExternalStore()", e), ay(e));
      });
    }
    function Ji(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !cn(e, a);
      } catch {
        return !0;
      }
    }
    function ay(e) {
      var t = la(e, 2);
      t !== null && Be(t, e, 2);
    }
    function Ud(e) {
      var t = vl();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Xr) {
          re(!0);
          try {
            a();
          } finally {
            re(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ka,
        lastRenderedState: e
      }, t;
    }
    function Ki(e) {
      e = Ud(e);
      var t = e.queue, a = xd.bind(null, Ye, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function Vc(e) {
      var t = vl();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Zs.bind(
        null,
        Ye,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function Gs(e, t) {
      var a = Tt();
      return tf(a, wt, e, t);
    }
    function tf(e, t, a, i) {
      return e.baseState = a, Vi(
        e,
        wt,
        typeof i == "function" ? i : ka
      );
    }
    function ws(e, t) {
      var a = Tt();
      return wt !== null ? tf(a, wt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function X0(e, t, a, i, o) {
      if (Yl(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        G.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, $i(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function $i(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = G.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), G.T = d;
        try {
          var h = a(o, i), y = G.S;
          y !== null && y(d, h), ny(e, t, h);
        } catch (p) {
          Xs(e, t, p);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), G.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), ny(e, t, d);
        } catch (p) {
          Xs(e, t, p);
        }
    }
    function ny(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (G.asyncTransitions++, a.then(Jc, Jc), a.then(
        function(i) {
          oi(e, t, i);
        },
        function(i) {
          return Xs(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : oi(e, t, a);
    }
    function oi(e, t, a) {
      t.status = "fulfilled", t.value = a, Hd(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, $i(e, a)));
    }
    function Xs(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, Hd(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function Hd(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function fi(e, t) {
      return t;
    }
    function Wa(e, t) {
      if (it) {
        var a = Xt.formState;
        if (a !== null) {
          e: {
            var i = Ye;
            if (it) {
              if (It) {
                t: {
                  for (var o = It, f = Zu; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = ln(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === o1 || f === s2 ? o : null;
                }
                if (o) {
                  It = ln(
                    o.nextSibling
                  ), i = o.data === o1;
                  break e;
                }
              }
              pn(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = vl(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fi,
        lastRenderedState: t
      }, a.queue = i, a = xd.bind(
        null,
        Ye,
        i
      ), i.dispatch = a, i = Ud(!1), f = Zs.bind(
        null,
        Ye,
        !1,
        i.queue
      ), i = vl(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = X0.bind(
        null,
        Ye,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function ki(e) {
      var t = Tt();
      return Nd(t, wt, e);
    }
    function Nd(e, t, a) {
      if (t = Vi(
        e,
        t,
        fi
      )[0], e = Xc(ka)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = qs(t);
        } catch (d) {
          throw d === am ? ov : d;
        }
      else i = t;
      t = Tt();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (Ye.flags |= 2048, Eu(
        $u | sn,
        { destroy: void 0 },
        uy.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function uy(e, t) {
      e.action = t;
    }
    function Wi(e) {
      var t = Tt(), a = wt;
      if (a !== null)
        return Nd(t, a, e);
      Tt(), t = t.memoizedState, a = Tt();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function Eu(e, t, a, i) {
      return e = { tag: e, create: a, deps: i, inst: t, next: null }, t = Ye.updateQueue, t === null && (t = xs(), Ye.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function Bd(e) {
      var t = vl();
      return e = { current: e }, t.memoizedState = e;
    }
    function Fi(e, t, a, i) {
      var o = vl();
      Ye.flags |= e, o.memoizedState = Eu(
        $u | t,
        { destroy: void 0 },
        a,
        i === void 0 ? null : i
      );
    }
    function zl(e, t, a, i) {
      var o = Tt();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      wt !== null && i !== null && Pm(i, wt.memoizedState.deps) ? o.memoizedState = Eu(t, f, a, i) : (Ye.flags |= e, o.memoizedState = Eu(
        $u | t,
        f,
        a,
        i
      ));
    }
    function Zc(e, t) {
      (Ye.mode & Ei) !== He ? Fi(276826112, sn, e, t) : Fi(8390656, sn, e, t);
    }
    function Q0(e) {
      Ye.flags |= 4;
      var t = Ye.updateQueue;
      if (t === null)
        t = xs(), Ye.updateQueue = t, t.events = [e];
      else {
        var a = t.events;
        a === null ? t.events = [e] : a.push(e);
      }
    }
    function Qs(e) {
      var t = vl(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((ht & Il) !== fa)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function lf(e) {
      var t = Tt().memoizedState;
      return Q0({ ref: t, nextImpl: e }), function() {
        if ((ht & Il) !== fa)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return t.impl.apply(void 0, arguments);
      };
    }
    function pa(e, t) {
      var a = 4194308;
      return (Ye.mode & Ei) !== He && (a |= 134217728), Fi(a, au, e, t);
    }
    function Fa(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Tu(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (Ye.mode & Ei) !== He && (i |= 134217728), Fi(
        i,
        au,
        Fa.bind(null, t, e),
        a
      );
    }
    function af(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, zl(
        4,
        au,
        Fa.bind(null, t, e),
        a
      );
    }
    function jd(e, t) {
      return vl().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function Ln(e, t) {
      var a = Tt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && Pm(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function ga(e, t) {
      var a = vl();
      t = t === void 0 ? null : t;
      var i = e();
      if (Xr) {
        re(!0);
        try {
          e();
        } finally {
          re(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function $t(e, t) {
      var a = Tt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && Pm(t, i[1]))
        return i[0];
      if (i = e(), Xr) {
        re(!0);
        try {
          e();
        } finally {
          re(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function nf(e, t) {
      var a = vl();
      return At(a, e, t);
    }
    function Au(e, t) {
      var a = Tt();
      return hl(
        a,
        wt.memoizedState,
        e,
        t
      );
    }
    function Qe(e, t) {
      var a = Tt();
      return wt === null ? At(a, e, t) : hl(
        a,
        wt.memoizedState,
        e,
        t
      );
    }
    function At(e, t, a) {
      return a === void 0 || To & 1073741824 && !(Ie & 261930) ? e.memoizedState = t : (e.memoizedState = a, e = hf(), Ye.lanes |= e, ts |= e, a);
    }
    function hl(e, t, a, i) {
      return cn(a, t) ? a : um.current !== null ? (e = At(e, a, i), cn(e, t) || (Ll = !0), e) : !(To & 42) || To & 1073741824 && !(Ie & 261930) ? (Ll = !0, e.memoizedState = a) : (e = hf(), Ye.lanes |= e, ts |= e, t);
    }
    function Jc() {
      G.asyncTransitions--;
    }
    function Kc(e, t, a, i, o) {
      var f = bt.p;
      bt.p = f !== 0 && f < Wl ? f : Wl;
      var d = G.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), G.T = h, Zs(e, !1, t, a);
      try {
        var y = o(), p = G.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          G.asyncTransitions++, y.then(Jc, Jc);
          var z = Dd(
            y,
            i
          );
          $c(
            e,
            t,
            z,
            na(e)
          );
        } else
          $c(
            e,
            t,
            i,
            na(e)
          );
      } catch (R) {
        $c(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: R },
          na(e)
        );
      } finally {
        bt.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), G.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function si(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Ls(e).queue;
      G0(e), Kc(
        e,
        o,
        t,
        Ir,
        a === null ? $ : function() {
          return uf(e), a(i);
        }
      );
    }
    function Ls(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Ir,
        baseState: Ir,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ka,
          lastRenderedState: Ir
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ka,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function uf(e) {
      G.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = Ls(e);
      t.next === null && (t = e.alternate.memoizedState), $c(
        e,
        t.next.queue,
        {},
        na(e)
      );
    }
    function Ii() {
      var e = Ud(!1);
      return e = Kc.bind(
        null,
        Ye,
        e.queue,
        !0,
        !1
      ), vl().memoizedState = e, [!1, e];
    }
    function L0() {
      var e = Xc(ka)[0], t = Tt().memoizedState;
      return [
        typeof e == "boolean" ? e : qs(e),
        t
      ];
    }
    function tl() {
      var e = Qc(ka)[0], t = Tt().memoizedState;
      return [
        typeof e == "boolean" ? e : qs(e),
        t
      ];
    }
    function ri() {
      return vt(d0);
    }
    function Vs() {
      var e = vl(), t = Xt.identifierPrefix;
      if (it) {
        var a = go, i = po;
        a = (i & ~(1 << 32 - kl(i) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = hv++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = kE++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    }
    function Yd() {
      return vl().memoizedState = V0.bind(
        null,
        Ye
      );
    }
    function V0(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = na(a), o = Ol(i), f = vu(a, o, i);
            f !== null && (yu(i, "refresh()", e), Be(f, a, i), En(f, a, i)), e = Od(), t != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: e };
            return;
        }
        a = a.return;
      }
    }
    function Iv(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = na(e);
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      Yl(e) ? ol(t, o) : (o = Mc(e, t, o, i), o !== null && (yu(i, "dispatch()", e), Be(o, e, i), Js(o, t, i)));
    }
    function xd(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = na(e), $c(e, t, a, i) && yu(i, "setState()", e);
    }
    function $c(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Yl(e)) ol(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = G.H;
          G.H = Ai;
          try {
            var h = t.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, cn(y, h))
              return Vo(e, t, o, 0), Xt === null && vd(), !1;
          } catch {
          } finally {
            G.H = d;
          }
        }
        if (a = Mc(e, t, o, i), a !== null)
          return Be(a, e, i), Js(a, t, i), !0;
      }
      return !1;
    }
    function Zs(e, t, a, i) {
      if (G.T === null && Yr === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: Jy(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, Yl(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = Mc(
          e,
          a,
          i,
          2
        ), t !== null && (yu(2, "setOptimistic()", e), Be(t, e, 2));
    }
    function Yl(e) {
      var t = e.alternate;
      return e === Ye || t !== null && t === Ye;
    }
    function ol(e, t) {
      om = dv = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Js(e, t, a) {
      if (a & 4194048) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, hs(e, a);
      }
    }
    function kc(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        Yb.has(t) || (Yb.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function cf(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & ja) {
        re(!0);
        try {
          f = a(i, o);
        } finally {
          re(!1);
        }
      }
      f === void 0 && (t = Ze(t) || "Component", Hb.has(t) || (Hb.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : ke({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function qd(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & ja) {
          re(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            re(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Ze(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Lo(a, i) || !Lo(o, f) : !0;
    }
    function Ou(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = se(e) || "Component", _b.has(e) || (_b.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), wS.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function zu(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = ke({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function Gd(e) {
      gS(e), console.warn(
        `%s

%s
`,
        fm ? "An error occurred in the <" + fm + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function wd(e) {
      var t = fm ? "The above error occurred in the <" + fm + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((XS || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          v2 + " " + e[0],
          S2,
          qv + i + qv,
          b2
        ) : e.splice(
          0,
          0,
          v2,
          S2,
          qv + i + qv,
          b2
        ), e.unshift(console), i = pT.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function iy(e) {
      gS(e);
    }
    function Ks(e, t) {
      try {
        fm = t.source ? se(t.source) : null, XS = null;
        var a = t.value;
        if (G.actQueue !== null)
          G.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function cy(e, t, a) {
      try {
        fm = a.source ? se(a.source) : null, XS = se(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Xd(e, t, a) {
      return a = Ol(a), a.tag = BS, a.payload = { element: null }, a.callback = function() {
        ce(t.source, Ks, e, t);
      }, a;
    }
    function Qd(e) {
      return e = Ol(e), e.tag = BS, e;
    }
    function Ld(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          Cc(a), ce(
            i.source,
            cy,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        Cc(a), ce(
          i.source,
          cy,
          t,
          a,
          i
        ), typeof o != "function" && (as === null ? as = /* @__PURE__ */ new Set([this]) : as.add(this)), ZE(this, i), typeof o == "function" || !(a.lanes & 2) && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          se(a) || "Unknown"
        );
      });
    }
    function oy(e, t, a, i, o) {
      if (a.flags |= 32768, qu && vf(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && qn(
          t,
          a,
          o,
          !0
        ), it && (mc = !0), a = lu.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return Ku === null ? yf() : a.alternate === null && sl === Do && (sl = pv), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === fv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), fh(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === fv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), fh(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return fh(e, i, o), yf(), !1;
      }
      if (it)
        return mc = !0, t = lu.current, t !== null ? (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== AS && Ds(
          ra(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== AS && Ds(
          ra(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = ra(i, a), o = Xd(
          e.stateNode,
          i,
          o
        ), Hs(e, o), sl !== Pf && (sl = Qr)), !1;
      var f = ra(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (a0 === null ? a0 = [f] : a0.push(f), sl !== Pf && (sl = Qr), t === null) return !0;
      i = ra(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Xd(
              a.stateNode,
              i,
              e
            ), Hs(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (as === null || !as.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Qd(o), Ld(
                o,
                e,
                a,
                i
              ), Hs(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function xl(e, t, a, i) {
      t.child = e === null ? pb(t, null, a, i) : wr(
        t,
        e.child,
        a,
        i
      );
    }
    function Z0(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return Xi(t), i = ey(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = wc(), e !== null && !Ll ? (Ys(e, t, o), Vn(e, t, o)) : (it && h && Ed(t), t.flags |= 1, xl(e, t, i, o), t.child);
    }
    function fy(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !Xm(f) && f.defaultProps === void 0 && a.compare === null ? (a = Yi(f), t.tag = 15, t.type = a, of(t, f), sy(
          e,
          t,
          a,
          i,
          o
        )) : (e = Uc(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !$d(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Lo, a(d, i) && e.ref === t.ref)
          return Vn(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = mu(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function sy(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Lo(f, i) && e.ref === t.ref && t.type === e.type)
          if (Ll = !1, t.pendingProps = i = f, $d(e, o))
            e.flags & 131072 && (Ll = !0);
          else
            return t.lanes = e.lanes, Vn(e, t, o);
      }
      return my(
        e,
        t,
        a,
        i,
        o
      );
    }
    function ry(e, t, a, i) {
      var o = i.children, f = e !== null ? e.memoizedState : null;
      if (e === null && t.stateNode === null && (t.stateNode = {
        _visibility: Hp,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), i.mode === "hidden") {
        if (t.flags & 128) {
          if (f = f !== null ? f.baseLanes | a : a, e !== null) {
            for (i = t.child = e.child, o = 0; i !== null; )
              o = o | i.lanes | i.childLanes, i = i.sibling;
            i = o & ~f;
          } else i = 0, t.child = null;
          return dy(
            e,
            t,
            f,
            a,
            i
          );
        }
        if (a & 536870912)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ko(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? Md(t, f) : ui(t), Cd(t);
        else
          return i = t.lanes = 536870912, dy(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a,
            i
          );
      } else
        f !== null ? (ko(t, f.cachePool), Md(t, f), bu(t), t.memoizedState = null) : (e !== null && ko(t, null), ui(t), bu(t));
      return xl(e, t, o, a), t.child;
    }
    function Wc(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: Hp,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function dy(e, t, a, i, o) {
      var f = ni();
      return f = f === null ? null : {
        parent: wl._currentValue,
        pool: f
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, e !== null && ko(t, null), ui(t), Cd(t), e !== null && qn(e, t, i, !0), t.childLanes = o, null;
    }
    function $s(e, t) {
      var a = t.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), t = Ws(
        { mode: t.mode, children: t.children },
        e.mode
      ), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function hy(e, t, a) {
      return wr(t, e.child, null, a), e = $s(
        t,
        t.pendingProps
      ), e.flags |= 2, jl(t), t.memoizedState = null, e;
    }
    function J0(e, t, a) {
      var i = t.pendingProps, o = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (it) {
          if (i.mode === "hidden")
            return e = $s(t, i), t.lanes = 536870912, Wc(null, e);
          if (Qn(t), (e = It) ? (a = zt(
            e,
            Zu
          ), a = a !== null && a.data === $r ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: Y0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Lm(a), i.return = t, t.child = i, Da = t, It = null)) : a = null, a === null)
            throw aa(t, e), pn(t);
          return t.lanes = 536870912, null;
        }
        return $s(t, i);
      }
      var f = e.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (Qn(t), o)
          if (t.flags & 256)
            t.flags &= -257, t = hy(
              e,
              t,
              a
            );
          else if (t.memoizedState !== null)
            t.child = e.child, t.flags |= 128, t = null;
          else
            throw Error(
              "Client rendering an Activity suspended it again. This is a bug in React."
            );
        else if (q0(), a & 536870912 && mf(t), Ll || qn(
          e,
          t,
          a,
          !1
        ), o = (a & e.childLanes) !== 0, Ll || o) {
          if (i = Xt, i !== null && (d = bc(
            i,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, la(e, d), Be(i, e, d), QS;
          yf(), t = hy(
            e,
            t,
            a
          );
        } else
          e = f.treeContext, It = ln(
            d.nextSibling
          ), Da = t, it = !0, Kf = null, mc = !1, tu = null, Zu = !1, e !== null && x0(t, e), t = $s(t, i), t.flags |= 4096;
        return t;
      }
      return f = e.child, i = { mode: i.mode, children: i.children }, a & 536870912 && a & e.lanes && mf(t), e = mu(f, i), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function ks(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function my(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Ze(a) || "Unknown";
        xb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), xb[f] = !0);
      }
      return t.mode & ja && Ti.recordLegacyContextWarning(
        t,
        null
      ), e === null && (of(t, t.type), a.contextTypes && (f = Ze(a) || "Unknown", Gb[f] || (Gb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Xi(t), a = ey(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = wc(), e !== null && !Ll ? (Ys(e, t, o), Vn(e, t, o)) : (it && i && Ed(t), t.flags |= 1, xl(e, t, a, o), t.child);
    }
    function yy(e, t, a, i, o, f) {
      return Xi(t), Oo = -1, Wp = e !== null && e.type !== t.type, t.updateQueue = null, a = Bs(
        t,
        i,
        a,
        o
      ), dl(e, t), i = wc(), e !== null && !Ll ? (Ys(e, t, f), Vn(e, t, f)) : (it && i && Ed(t), t.flags |= 1, xl(e, t, a, f), t.child);
    }
    function Fc(e, t, a, i, o) {
      switch (ct(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = Xt, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Qd(h), Ld(
            h,
            d,
            t,
            ra(f, t)
          ), Hs(t, h);
      }
      if (Xi(t), t.stateNode === null) {
        if (d = Jf, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== In) && !jb.has(a) && (jb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === Uh ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Ze(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = vt(f)), f = new a(i, d), t.mode & ja) {
          re(!0);
          try {
            f = new a(i, d);
          } finally {
            re(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = wS, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = Db, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Ze(a) || "Component", Rb.has(d) || (Rb.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = Ze(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Cb.has(f) || (Cb.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              p,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              y !== null ? `
  ` + y : ""
            ));
          }
        }
        f = t.stateNode, d = Ze(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !Bb.has(a) && (Bb.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !Nb.has(a) && (Nb.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Ze(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || Mb.has(a) || (Mb.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Ze(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || bl(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, nt(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? vt(d) : Jf, f.state === i && (d = Ze(a) || "Component", Ub.has(d) || (Ub.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & ja && Ti.recordLegacyContextWarning(
          t,
          f
        ), Ti.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (cf(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          se(t) || "Component"
        ), wS.enqueueReplaceState(
          f,
          f.state,
          null
        )), Su(t, i, f, o), Fo(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ei) !== He && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var z = t.memoizedProps;
        h = zu(a, z), f.props = h;
        var R = f.context;
        y = a.contextType, d = Jf, typeof y == "object" && y !== null && (d = vt(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", z = t.pendingProps !== z, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (z || R !== d) && Ou(
          t,
          f,
          i,
          d
        ), If = !1;
        var E = t.memoizedState;
        f.state = E, Su(t, i, f, o), Fo(), R = t.memoizedState, z || E !== R || If ? (typeof p == "function" && (cf(
          t,
          a,
          p,
          i
        ), R = t.memoizedState), (h = If || qd(
          t,
          a,
          h,
          i,
          E,
          R,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ei) !== He && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ei) !== He && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = R), f.props = i, f.state = R, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ei) !== He && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, gu(e, t), d = t.memoizedProps, y = zu(a, d), f.props = y, p = t.pendingProps, E = f.context, R = a.contextType, h = Jf, typeof R == "object" && R !== null && (h = vt(R)), z = a.getDerivedStateFromProps, (R = typeof z == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || E !== h) && Ou(
          t,
          f,
          i,
          h
        ), If = !1, E = t.memoizedState, f.state = E, Su(t, i, f, o), Fo();
        var x = t.memoizedState;
        d !== p || E !== x || If || e !== null && e.dependencies !== null && Ko(e.dependencies) ? (typeof z == "function" && (cf(
          t,
          a,
          z,
          i
        ), x = t.memoizedState), (y = If || qd(
          t,
          a,
          y,
          i,
          E,
          x,
          h
        ) || e !== null && e.dependencies !== null && Ko(e.dependencies)) ? (R || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, x, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          x,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = x), f.props = i, f.state = x, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, ks(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, _i(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, on = -1;
        else if (a = lb(h), t.mode & ja) {
          re(!0);
          try {
            lb(h);
          } finally {
            re(!1);
          }
        }
        t.flags |= 1, e !== null && d ? (t.child = wr(
          t,
          e.child,
          null,
          o
        ), t.child = wr(
          t,
          null,
          a,
          o
        )) : xl(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Vn(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (sm || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        se(t) || "a component"
      ), sm = !0), e;
    }
    function py(e, t, a, i) {
      return Gi(), t.flags |= 256, xl(e, t, a, i), t.child;
    }
    function of(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Ze(t) || "Unknown", wb[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), wb[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Ze(t) || "Unknown", qb[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), qb[t] = !0));
    }
    function ff(e) {
      return { baseLanes: e, cachePool: km() };
    }
    function Vd(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Mn), e;
    }
    function Zd(e, t, a) {
      var i, o = t.pendingProps;
      Ne(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (Ml.current & $p) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (it) {
          if (f ? ya(t) : bu(t), (e = It) ? (a = zt(
            e,
            Zu
          ), a = a !== null && a.data !== $r ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: Y0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Lm(a), i.return = t, t.child = i, Da = t, It = null)) : a = null, a === null)
            throw aa(t, e), pn(t);
          return ky(a) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          bu(t);
          var y = t.mode;
          return h = Ws(
            { mode: "hidden", children: h },
            y
          ), o = Hc(
            o,
            y,
            a,
            null
          ), h.return = t, o.return = t, h.sibling = o, t.child = h, o = t.child, o.memoizedState = ff(a), o.childLanes = Vd(
            e,
            i,
            a
          ), t.memoizedState = LS, Wc(
            null,
            o
          );
        }
        return ya(t), gy(
          t,
          h
        );
      }
      var p = e.memoizedState;
      if (p !== null) {
        var z = p.dehydrated;
        if (z !== null) {
          if (d)
            t.flags & 256 ? (ya(t), t.flags &= -257, t = Jd(
              e,
              t,
              a
            )) : t.memoizedState !== null ? (bu(t), t.child = e.child, t.flags |= 128, t = null) : (bu(t), h = o.fallback, y = t.mode, o = Ws(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = Hc(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = t, h.return = t, o.sibling = h, t.child = o, wr(
              t,
              e.child,
              null,
              a
            ), o = t.child, o.memoizedState = ff(a), o.childLanes = Vd(
              e,
              i,
              a
            ), t.memoizedState = LS, t = Wc(
              null,
              o
            ));
          else if (ya(t), q0(), a & 536870912 && mf(t), ky(
            z
          )) {
            if (i = z.nextSibling && z.nextSibling.dataset, i) {
              h = i.dgst;
              var R = i.msg;
              y = i.stck;
              var E = i.cstck;
            }
            f = R, i = h, o = y, z = E, h = f, y = z, h = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), h.stack = o || "", h.digest = i, i = y === void 0 ? null : y, o = {
              value: h,
              source: null,
              stack: i
            }, typeof i == "string" && TS.set(
              h,
              o
            ), Ds(o), t = Jd(
              e,
              t,
              a
            );
          } else if (Ll || qn(
            e,
            t,
            a,
            !1
          ), i = (a & e.childLanes) !== 0, Ll || i) {
            if (i = Xt, i !== null && (o = bc(
              i,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, la(
                e,
                o
              ), Be(
                i,
                e,
                o
              ), QS;
            mr(
              z
            ) || yf(), t = Jd(
              e,
              t,
              a
            );
          } else
            mr(
              z
            ) ? (t.flags |= 192, t.child = e.child, t = null) : (e = p.treeContext, It = ln(
              z.nextSibling
            ), Da = t, it = !0, Kf = null, mc = !1, tu = null, Zu = !1, e !== null && x0(t, e), t = gy(
              t,
              o.children
            ), t.flags |= 4096);
          return t;
        }
      }
      return f ? (bu(t), h = o.fallback, y = t.mode, E = e.child, z = E.sibling, o = mu(
        E,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = E.subtreeFlags & 65011712, z !== null ? h = mu(
        z,
        h
      ) : (h = Hc(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = t, o.return = t, o.sibling = h, t.child = o, Wc(null, o), o = t.child, h = e.child.memoizedState, h === null ? h = ff(a) : (y = h.cachePool, y !== null ? (E = wl._currentValue, y = y.parent !== E ? { parent: E, pool: E } : y) : y = km(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = Vd(
        e,
        i,
        a
      ), t.memoizedState = LS, Wc(
        e.child,
        o
      )) : (p !== null && (a & 62914560) === a && a & e.lanes && mf(t), ya(t), a = e.child, e = a.sibling, a = mu(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function gy(e, t) {
      return t = Ws(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Ws(e, t) {
      return e = H(22, e, null, t), e.lanes = 0, e;
    }
    function Jd(e, t, a) {
      return wr(t, e.child, null, a), e = gy(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function vy(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), Ad(
        e.return,
        t,
        a
      );
    }
    function Kd(e, t, a, i, o, f) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o,
        treeForkCount: f
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = i, d.tail = a, d.tailMode = o, d.treeForkCount = f);
    }
    function Sy(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail, d = i.children, h = Ml.current;
      if ((i = (h & $p) !== 0) ? (h = h & im | $p, t.flags |= 128) : h &= im, qe(Ml, h, t), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !Xb[h])
        if (Xb[h] = !0, o == null)
          console.error(
            'The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".'
          );
        else if (o === "backwards")
          console.error(
            'The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.'
          );
        else if (typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
            case "independent":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
            o
          );
      h = f ?? "null", yv[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (yv[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (yv[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (yv[h] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && d !== void 0 && d !== null && d !== !1)
        if (bl(d)) {
          for (h = 0; h < d.length; h++)
            if (!xt(
              d[h],
              h
            ))
              break e;
        } else if (h = _e(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!xt(y.value, p)) break e;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (xl(e, t, d, a), it ? (qi(), d = Np) : d = 0, !i && e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && vy(e, a, t);
          else if (e.tag === 19)
            vy(e, a, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      switch (o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && Gc(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Kd(
            t,
            !1,
            o,
            a,
            f,
            d
          );
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && Gc(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          Kd(
            t,
            !0,
            a,
            null,
            f,
            d
          );
          break;
        case "together":
          Kd(
            t,
            !1,
            null,
            null,
            void 0,
            d
          );
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Vn(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), on = -1, ts |= t.lanes, !(a & t.childLanes))
        if (e !== null) {
          if (qn(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = mu(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = mu(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function $d(e, t) {
      return e.lanes & t ? !0 : (e = e.dependencies, !!(e !== null && Ko(e)));
    }
    function K0(e, t, a) {
      switch (t.tag) {
        case 3:
          Yt(
            t,
            t.stateNode.containerInfo
          ), gn(
            t,
            wl,
            e.memoizedState.cache
          ), Gi();
          break;
        case 27:
        case 5:
          te(t);
          break;
        case 4:
          Yt(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          gn(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          a & t.childLanes && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 31:
          if (t.memoizedState !== null)
            return t.flags |= 128, Qn(t), null;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (ya(t), t.flags |= 128, null) : a & t.child.childLanes ? Zd(
              e,
              t,
              a
            ) : (ya(t), e = Vn(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          ya(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (qn(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return Sy(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), qe(
            Ml,
            Ml.current,
            t
          ), i) break;
          return null;
        case 22:
          return t.lanes = 0, ry(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          gn(
            t,
            wl,
            e.memoizedState.cache
          );
      }
      return Vn(e, t, a);
    }
    function Fs(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = Uc(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Ll = !0;
        else {
          if (!$d(e, a) && !(t.flags & 128))
            return Ll = !1, K0(
              e,
              t,
              a
            );
          Ll = !!(e.flags & 131072);
        }
      else
        Ll = !1, (i = it) && (qi(), i = (t.flags & 1048576) !== 0), i && (i = t.index, qi(), Vm(t, Np, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = Ka(t.elementType), t.type = e, typeof e == "function")
            Xm(e) ? (i = zu(
              e,
              i
            ), t.tag = 1, t.type = e = Yi(e), t = Fc(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, of(t, e), t.type = e = Yi(e), t = my(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Hf) {
                t.tag = 11, t.type = e = Sd(e), t = Z0(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === Or) {
                t.tag = 14, t = fy(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === ua && (t = " Did you wrap a component in React.lazy() more than once?"), a = Ze(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + a + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return my(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = zu(
            i,
            t.pendingProps
          ), Fc(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (Yt(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, gu(e, t), Su(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, gn(t, wl, i), i !== f.cache && ti(
              t,
              [wl],
              a,
              !0
            ), Fo(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = py(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = ra(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), Ds(o), t = py(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else {
                switch (e = t.stateNode.containerInfo, e.nodeType) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (It = ln(e.firstChild), Da = t, it = !0, Kf = null, mc = !1, tu = null, Zu = !0, a = pb(
                  t,
                  null,
                  i,
                  a
                ), t.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
              }
            else {
              if (Gi(), i === o) {
                t = Vn(
                  e,
                  t,
                  a
                );
                break e;
              }
              xl(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return ks(e, t), e === null ? (a = Py(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = a : it || (a = t.type, e = t.pendingProps, i = Qt(
            an.current
          ), i = dr(
            i
          ).createElement(a), i[Wt] = t, i[za] = e, kt(i, a, e), he(i), t.stateNode = i) : t.memoizedState = Py(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return te(t), e === null && it && (i = Qt(an.current), o = V(), i = t.stateNode = gi(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), mc || (o = Ha(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (Nc(t, 0).serverProps = o)), Da = t, Zu = !0, o = It, cc(t.type) ? (d1 = o, It = ln(
            i.firstChild
          )) : It = o), xl(
            e,
            t,
            t.pendingProps.children,
            a
          ), ks(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && it && (f = V(), i = ps(
            t.type,
            f.ancestorInfo
          ), o = It, (d = !o) || (d = Ag(
            o,
            t.type,
            t.pendingProps,
            Zu
          ), d !== null ? (t.stateNode = d, mc || (f = Ha(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (Nc(t, 0).serverProps = f)), Da = t, It = ln(
            d.firstChild
          ), Zu = !1, f = !0) : f = !1, d = !f), d && (i && aa(t, o), pn(t))), te(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, Af(o, f) ? i = null : d !== null && Af(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = ey(
            e,
            t,
            js,
            null,
            null,
            a
          ), d0._currentValue = o), ks(e, t), xl(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && it && (a = t.pendingProps, e = V(), i = e.ancestorInfo.current, a = i != null ? gs(
            a,
            i.tag,
            e.ancestorInfo.implicitRootScope
          ) : !0, e = It, (i = !e) || (i = Og(
            e,
            t.pendingProps,
            Zu
          ), i !== null ? (t.stateNode = i, Da = t, It = null, i = !0) : i = !1, i = !i), i && (a && aa(t, e), pn(t))), null;
        case 13:
          return Zd(e, t, a);
        case 4:
          return Yt(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = wr(
            t,
            null,
            i,
            a
          ) : xl(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return Z0(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return xl(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return xl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, xl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || Qb || (Qb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), gn(t, i, f), xl(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Xi(t), o = vt(o), i = CS(
            i,
            o,
            void 0
          ), t.flags |= 1, xl(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return fy(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return sy(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return Sy(
            e,
            t,
            a
          );
        case 31:
          return J0(e, t, a);
        case 22:
          return ry(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          return Xi(t), i = vt(wl), e === null ? (o = ni(), o === null && (o = Xt, f = Od(), o.pooledCache = f, jc(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, nt(t), gn(t, wl, o)) : (e.lanes & a && (gu(e, t), Su(t, null, null, a), Fo()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), gn(t, wl, i)) : (i = f.cache, gn(t, wl, i), i !== o.cache && ti(
            t,
            [wl],
            a,
            !0
          ))), xl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Du(e) {
      e.flags |= 4;
    }
    function kd(e, t, a, i, o) {
      if ((t = (e.mode & wE) !== He) && (t = !1), t) {
        if (e.flags |= 16777216, (o & 335544128) === o)
          if (e.stateNode.complete) e.flags |= 8192;
          else if (xy()) e.flags |= 8192;
          else
            throw Gr = fv, HS;
      } else e.flags &= -16777217;
    }
    function $0(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & Wu) !== Fr)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !at(t))
        if (xy()) e.flags |= 8192;
        else
          throw Gr = fv, HS;
    }
    function sf(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Uo() : 536870912, e.lanes |= t, Zr |= t);
    }
    function rf(e, t) {
      if (!it)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function Mt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & We) !== He) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & We) !== He) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function by(e, t, a) {
      var i = t.pendingProps;
      switch (Td(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Mt(t), null;
        case 1:
          return Mt(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), xn(wl, t), _(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Bc(t) ? (wi(), Du(t)) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, zs())), Mt(t), null;
        case 26:
          var o = t.type, f = t.memoizedState;
          return e === null ? (Du(t), f !== null ? (Mt(t), $0(
            t,
            f
          )) : (Mt(t), kd(
            t,
            o,
            null,
            i,
            a
          ))) : f ? f !== e.memoizedState ? (Du(t), Mt(t), $0(
            t,
            f
          )) : (Mt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && Du(t), Mt(t), kd(
            t,
            o,
            e,
            i,
            a
          )), null;
        case 27:
          if (pe(t), a = Qt(an.current), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Du(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Mt(t), null;
            }
            e = V(), Bc(t) ? Zm(t) : (e = gi(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Du(t));
          }
          return Mt(t), null;
        case 5:
          if (pe(t), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Du(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Mt(t), null;
            }
            var d = V();
            if (Bc(t))
              Zm(t);
            else {
              switch (f = Qt(an.current), ps(o, d.ancestorInfo), d = d.context, f = dr(f), d) {
                case vm:
                  f = f.createElementNS(
                    Ke,
                    o
                  );
                  break;
                case jv:
                  f = f.createElementNS(
                    Xe,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        Ke,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        Xe,
                        o
                      );
                      break;
                    case "script":
                      f = f.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                        f.firstChild
                      );
                      break;
                    case "select":
                      f = typeof i.is == "string" ? f.createElement("select", {
                        is: i.is
                      }) : f.createElement("select"), i.multiple ? f.multiple = !0 : i.size && (f.size = i.size);
                      break;
                    default:
                      f = typeof i.is == "string" ? f.createElement(o, {
                        is: i.is
                      }) : f.createElement(o), o.indexOf("-") === -1 && (o !== o.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        o
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || nn.call(d2, o) || (d2[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[Wt] = t, f[za] = i;
              e: for (d = t.child; d !== null; ) {
                if (d.tag === 5 || d.tag === 6)
                  f.appendChild(d.stateNode);
                else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                  d.child.return = d, d = d.child;
                  continue;
                }
                if (d === t) break e;
                for (; d.sibling === null; ) {
                  if (d.return === null || d.return === t)
                    break e;
                  d = d.return;
                }
                d.sibling.return = d.return, d = d.sibling;
              }
              t.stateNode = f;
              e: switch (kt(f, o, i), o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
              i && Du(t);
            }
          }
          return Mt(t), kd(
            t,
            t.type,
            e === null ? null : e.memoizedProps,
            t.pendingProps,
            a
          ), null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && Du(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Qt(an.current), a = V(), Bc(t)) {
              if (e = t.stateNode, a = t.memoizedProps, o = !mc, i = null, f = Da, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = _g(
                      e,
                      a,
                      i
                    ), o !== null && (Nc(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = _g(
                      e,
                      a,
                      i
                    ), o !== null && (Nc(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Wt] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || Ky(e.nodeValue, a)), e || pn(t, !0);
            } else
              o = a.ancestorInfo.current, o != null && gs(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = dr(e).createTextNode(
                i
              ), e[Wt] = t, t.stateNode = e;
          }
          return Mt(t), null;
        case 31:
          if (a = t.memoizedState, e === null || e.memoizedState !== null) {
            if (i = Bc(t), a !== null) {
              if (e === null) {
                if (!i)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                  throw Error(
                    "Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                e[Wt] = t, Mt(t), (t.mode & We) !== He && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              } else
                wi(), Gi(), !(t.flags & 128) && (a = t.memoizedState = null), t.flags |= 4, Mt(t), (t.mode & We) !== He && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              e = !1;
            } else
              a = zs(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
            if (!e)
              return t.flags & 256 ? (jl(t), t) : (jl(t), null);
            if (t.flags & 128)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return Mt(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = i, f = Bc(t), o !== null && o.dehydrated !== null) {
              if (e === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[Wt] = t, Mt(t), (t.mode & We) !== He && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                wi(), Gi(), !(t.flags & 128) && (o = t.memoizedState = null), t.flags |= 4, Mt(t), (t.mode & We) !== He && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = zs(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (jl(t), t) : (jl(t), null);
          }
          return jl(t), t.flags & 128 ? (t.lanes = a, (t.mode & We) !== He && xc(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), sf(t, t.updateQueue), Mt(t), (t.mode & We) !== He && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return _(t), e === null && uc(
            t.stateNode.containerInfo
          ), Mt(t), null;
        case 10:
          return xn(t.type, t), Mt(t), null;
        case 19:
          if (ye(Ml, t), i = t.memoizedState, i === null) return Mt(t), null;
          if (o = (t.flags & 128) !== 0, f = i.rendering, f === null)
            if (o) rf(i, !1);
            else {
              if (sl !== Do || e !== null && e.flags & 128)
                for (e = t.child; e !== null; ) {
                  if (f = Gc(e), f !== null) {
                    for (t.flags |= 128, rf(i, !1), e = f.updateQueue, t.updateQueue = e, sf(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Qm(a, e), a = a.sibling;
                    return qe(
                      Ml,
                      Ml.current & im | $p,
                      t
                    ), it && Yn(t, i.treeForkCount), t.child;
                  }
                  e = e.sibling;
                }
              i.tail !== null && Gl() > Tv && (t.flags |= 128, o = !0, rf(i, !1), t.lanes = 4194304);
            }
          else {
            if (!o)
              if (e = Gc(f), e !== null) {
                if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, sf(t, e), rf(i, !0), i.tail === null && i.tailMode === "hidden" && !f.alternate && !it)
                  return Mt(t), null;
              } else
                2 * Gl() - i.renderingStartTime > Tv && a !== 536870912 && (t.flags |= 128, o = !0, rf(i, !1), t.lanes = 4194304);
            i.isBackwards ? (f.sibling = t.child, t.child = f) : (e = i.last, e !== null ? e.sibling = f : t.child = f, i.last = f);
          }
          return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = Gl(), e.sibling = null, a = Ml.current, a = o ? a & im | $p : a & im, qe(Ml, a, t), it && Yn(t, i.treeForkCount), e) : (Mt(t), null);
        case 22:
        case 23:
          return jl(t), Xn(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? a & 536870912 && !(t.flags & 128) && (Mt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Mt(t), a = t.updateQueue, a !== null && sf(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && ye(xr, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), xn(wl, t), Mt(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function k0(e, t) {
      switch (Td(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & We) !== He && xc(t), t) : null;
        case 3:
          return xn(wl, t), _(t), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return pe(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (jl(t), t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Gi();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & We) !== He && xc(t), t) : null;
        case 13:
          if (jl(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Gi();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & We) !== He && xc(t), t) : null;
        case 19:
          return ye(Ml, t), null;
        case 4:
          return _(t), null;
        case 10:
          return xn(t.type, t), null;
        case 22:
        case 23:
          return jl(t), Xn(t), e !== null && ye(xr, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & We) !== He && xc(t), t) : null;
        case 24:
          return xn(wl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Ey(e, t) {
      switch (Td(t), t.tag) {
        case 3:
          xn(wl, t), _(t);
          break;
        case 26:
        case 27:
        case 5:
          pe(t);
          break;
        case 4:
          _(t);
          break;
        case 31:
          t.memoizedState !== null && jl(t);
          break;
        case 13:
          jl(t);
          break;
        case 19:
          ye(Ml, t);
          break;
        case 10:
          xn(t.type, t);
          break;
        case 22:
        case 23:
          jl(t), Xn(t), e !== null && ye(xr, t);
          break;
        case 24:
          xn(wl, t);
      }
    }
    function _u(e) {
      return (e.mode & We) !== He;
    }
    function W0(e, t) {
      _u(e) ? (il(), di(t, e), ha()) : di(t, e);
    }
    function Wd(e, t, a) {
      _u(e) ? (il(), Pi(
        a,
        e,
        t
      ), ha()) : Pi(
        a,
        e,
        t
      );
    }
    function di(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && (i = void 0, (e & fn) !== rv && (ym = !0), i = ce(
              t,
              JE,
              a
            ), (e & fn) !== rv && (ym = !1), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = a.tag & au ? "useLayoutEffect" : a.tag & fn ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, ce(
                t,
                function(h, y) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    y
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        Je(t, t.return, h);
      }
    }
    function Pi(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & fn) !== rv && (ym = !0), o = t, ce(
                o,
                KE,
                o,
                a,
                h
              ), (e & fn) !== rv && (ym = !1));
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (y) {
        Je(t, t.return, y);
      }
    }
    function Is(e, t) {
      _u(e) ? (il(), di(t, e), ha()) : di(t, e);
    }
    function Fd(e, t, a) {
      _u(e) ? (il(), Pi(
        a,
        e,
        t
      ), ha()) : Pi(
        a,
        e,
        t
      );
    }
    function Ty(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || sm || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          se(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          se(e) || "instance"
        ));
        try {
          ce(
            e,
            Io,
            t,
            a
          );
        } catch (i) {
          Je(e, e.return, i);
        }
      }
    }
    function Ps(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function F0(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || sm || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        se(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        se(e) || "instance"
      ));
      try {
        var o = zu(
          e.type,
          a
        ), f = ce(
          e,
          Ps,
          t,
          o,
          i
        );
        a = Lb, f !== void 0 || a.has(e.type) || (a.add(e.type), ce(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            se(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        Je(e, e.return, d);
      }
    }
    function Id(e, t, a) {
      a.props = zu(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, _u(e) ? (il(), ce(
        e,
        ob,
        e,
        t,
        a
      ), ha()) : ce(
        e,
        ob,
        e,
        t,
        a
      );
    }
    function I0(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (_u(e))
            try {
              il(), e.refCleanup = t(a);
            } finally {
              ha();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            se(e)
          ), t.current = a;
      }
    }
    function Ic(e, t) {
      try {
        ce(e, I0, e);
      } catch (a) {
        Je(e, t, a);
      }
    }
    function Tn(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (_u(e))
              try {
                il(), ce(e, i);
              } finally {
                ha(e);
              }
            else ce(e, i);
          } catch (o) {
            Je(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (_u(e))
              try {
                il(), ce(e, a, null);
              } finally {
                ha(e);
              }
            else ce(e, a, null);
          } catch (o) {
            Je(e, t, o);
          }
        else a.current = null;
    }
    function Ay(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", uv && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(f, t, i, a);
    }
    function P0(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", uv && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function ec(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        ce(
          e,
          dg,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        Je(e, e.return, o);
      }
    }
    function Pd(e, t, a) {
      try {
        ce(
          e,
          Sh,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Je(e, e.return, i);
      }
    }
    function Oy(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && cc(e.type) || e.tag === 4;
    }
    function eh(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Oy(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && cc(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function df(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (mg(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t)) : (mg(a), t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = mn));
      else if (i !== 4 && (i === 27 && cc(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (df(e, t, a), e = e.sibling; e !== null; )
          df(e, t, a), e = e.sibling;
    }
    function er(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && cc(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (er(e, t, a), e = e.sibling; e !== null; )
          er(e, t, a), e = e.sibling;
    }
    function zy(e) {
      for (var t, a = e.return; a !== null; ) {
        if (Oy(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = eh(e), er(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (bh(a), t.flags &= -33), t = eh(e), er(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = eh(e), df(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function Dy(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        ce(
          e,
          ju,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Je(e, e.return, i);
      }
    }
    function _y(e, t) {
      return t.tag === 31 ? (t = t.memoizedState, e.memoizedState !== null && t === null) : t.tag === 13 ? (e = e.memoizedState, t = t.memoizedState, e !== null && e.dehydrated !== null && (t === null || t.dehydrated === null)) : t.tag === 3 ? e.memoizedState.isDehydrated && (t.flags & 256) === 0 : !1;
    }
    function Pv(e, t) {
      if (e = e.containerInfo, f1 = Gv, e = yd(e), Bm(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, y = -1, p = 0, z = 0, R = e, E = null;
              t: for (; ; ) {
                for (var x; R !== a || o !== 0 && R.nodeType !== 3 || (h = d + o), R !== f || i !== 0 && R.nodeType !== 3 || (y = d + i), R.nodeType === 3 && (d += R.nodeValue.length), (x = R.firstChild) !== null; )
                  E = R, R = x;
                for (; ; ) {
                  if (R === e) break t;
                  if (E === a && ++p === o && (h = d), E === f && ++z === i && (y = d), (x = R.nextSibling) !== null) break;
                  R = E, E = R.parentNode;
                }
                R = x;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (s1 = {
        focusedElem: e,
        selectionRange: a
      }, Gv = !1, oa = t; oa !== null; )
        if (t = oa, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t, oa = e;
        else
          for (; oa !== null; ) {
            switch (e = t = oa, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                if (o & 4 && (e = e.updateQueue, e = e !== null ? e.events : null, e !== null))
                  for (a = 0; a < e.length; a++)
                    o = e[a], o.ref.impl = o.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                o & 1024 && a !== null && F0(e, a);
                break;
              case 3:
                if (o & 1024) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    zf(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        zf(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (o & 1024)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, oa = e;
              break;
            }
            oa = t.return;
          }
    }
    function th(e, t, a) {
      var i = Kt(), o = vn(), f = Za(), d = Sn(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ia(e, a), h & 4 && W0(a, au | $u);
          break;
        case 1:
          if (Ia(e, a), h & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || sm || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                se(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                se(a) || "instance"
              )), _u(a) ? (il(), ce(
                a,
                US,
                a,
                e
              ), ha()) : ce(
                a,
                US,
                a,
                e
              );
            else {
              var y = zu(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || sm || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                se(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                se(a) || "instance"
              )), _u(a) ? (il(), ce(
                a,
                ub,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), ha()) : ce(
                a,
                ub,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && Ty(a), h & 512 && Ic(a, a.return);
          break;
        case 3:
          if (t = pu(), Ia(e, a), h & 64 && (h = a.updateQueue, h !== null)) {
            if (y = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  y = a.child.stateNode;
                  break;
                case 1:
                  y = a.child.stateNode;
              }
            try {
              ce(
                a,
                Io,
                h,
                y
              );
            } catch (z) {
              Je(a, a.return, z);
            }
          }
          e.effectDuration += $o(t);
          break;
        case 27:
          t === null && h & 4 && Dy(a);
        case 26:
        case 5:
          if (Ia(e, a), t === null) {
            if (h & 4) ec(a);
            else if (h & 64) {
              e = a.type, t = a.memoizedProps, y = a.stateNode;
              try {
                ce(
                  a,
                  hg,
                  y,
                  e,
                  t,
                  a
                );
              } catch (z) {
                Je(
                  a,
                  a.return,
                  z
                );
              }
            }
          }
          h & 512 && Ic(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = pu(), Ia(e, a), e = a.stateNode, e.effectDuration += da(h);
            try {
              ce(
                a,
                Ay,
                a,
                t,
                $f,
                e.effectDuration
              );
            } catch (z) {
              Je(a, a.return, z);
            }
          } else Ia(e, a);
          break;
        case 31:
          Ia(e, a), h & 4 && My(e, a);
          break;
        case 13:
          Ia(e, a), h & 4 && Cy(e, a), h & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (h = mi.bind(
            null,
            a
          ), zg(e, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || zo, !h) {
            t = t !== null && t.memoizedState !== null || Vl, y = zo;
            var p = Vl;
            zo = h, (Vl = t) && !p ? (Zn(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & We) !== He && 0 <= Ae && 0 <= Me && 0.05 < Me - Ae && pd(
              a,
              Ae,
              Me
            )) : Ia(e, a), zo = y, Vl = p;
          }
          break;
        case 30:
          break;
        default:
          Ia(e, a);
      }
      (a.mode & We) !== He && 0 <= Ae && 0 <= Me && ((pl || 0.05 < fl) && jn(
        a,
        Ae,
        Me,
        fl,
        nl
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < Me - Ae && (_y(
        a.return.alternate,
        a.return
      ) || yn(
        a,
        Ae,
        Me,
        "Mount"
      ))), Nl(i), Va(o), nl = f, pl = d;
    }
    function ml(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, ml(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && M(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function Vt(e, t, a) {
      for (a = a.child; a !== null; )
        Ry(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function Ry(e, t, a) {
      if (_l && typeof _l.onCommitFiberUnmount == "function")
        try {
          _l.onCommitFiberUnmount(ro, a);
        } catch (p) {
          xu || (xu = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var i = Kt(), o = vn(), f = Za(), d = Sn();
      switch (a.tag) {
        case 26:
          Vl || Tn(a, t), Vt(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (e = a.stateNode, e.parentNode.removeChild(e));
          break;
        case 27:
          Vl || Tn(a, t);
          var h = Zl, y = _n;
          cc(a.type) && (Zl = a.stateNode, _n = !1), Vt(
            e,
            t,
            a
          ), ce(
            a,
            vi,
            a.stateNode
          ), Zl = h, _n = y;
          break;
        case 5:
          Vl || Tn(a, t);
        case 6:
          if (h = Zl, y = _n, Zl = null, Vt(
            e,
            t,
            a
          ), Zl = h, _n = y, Zl !== null)
            if (_n)
              try {
                ce(
                  a,
                  pg,
                  Zl,
                  a.stateNode
                );
              } catch (p) {
                Je(
                  a,
                  t,
                  p
                );
              }
            else
              try {
                ce(
                  a,
                  yg,
                  Zl,
                  a.stateNode
                );
              } catch (p) {
                Je(
                  a,
                  t,
                  p
                );
              }
          break;
        case 18:
          Zl !== null && (_n ? (e = Zl, ao(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), co(e)) : ao(Zl, a.stateNode));
          break;
        case 4:
          h = Zl, y = _n, Zl = a.stateNode.containerInfo, _n = !0, Vt(
            e,
            t,
            a
          ), Zl = h, _n = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Pi(
            fn,
            a,
            t
          ), Vl || Wd(
            a,
            t,
            au
          ), Vt(
            e,
            t,
            a
          );
          break;
        case 1:
          Vl || (Tn(a, t), h = a.stateNode, typeof h.componentWillUnmount == "function" && Id(
            a,
            t,
            h
          )), Vt(
            e,
            t,
            a
          );
          break;
        case 21:
          Vt(
            e,
            t,
            a
          );
          break;
        case 22:
          Vl = (h = Vl) || a.memoizedState !== null, Vt(
            e,
            t,
            a
          ), Vl = h;
          break;
        default:
          Vt(
            e,
            t,
            a
          );
      }
      (a.mode & We) !== He && 0 <= Ae && 0 <= Me && (pl || 0.05 < fl) && jn(
        a,
        Ae,
        Me,
        fl,
        nl
      ), Nl(i), Va(o), nl = f, pl = d;
    }
    function My(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          ce(
            t,
            Eh,
            e
          );
        } catch (a) {
          Je(t, t.return, a);
        }
      }
    }
    function Cy(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          ce(
            t,
            Fy,
            e
          );
        } catch (a) {
          Je(t, t.return, a);
        }
    }
    function eg(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new Vb()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Vb()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function tc(e, t) {
      var a = eg(e);
      t.forEach(function(i) {
        if (!a.has(i)) {
          if (a.add(i), qu)
            if (rm !== null && dm !== null)
              vf(dm, rm);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = to.bind(null, e, i);
          i.then(o, o);
        }
      });
    }
    function va(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = Kt(), y = f;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (cc(y.type)) {
                  Zl = y.stateNode, _n = !1;
                  break e;
                }
                break;
              case 5:
                Zl = y.stateNode, _n = !1;
                break e;
              case 3:
              case 4:
                Zl = y.stateNode.containerInfo, _n = !0;
                break e;
            }
            y = y.return;
          }
          if (Zl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          Ry(o, f, d), Zl = null, _n = !1, (d.mode & We) !== He && 0 <= Ae && 0 <= Me && 0.05 < Me - Ae && yn(
            d,
            Ae,
            Me,
            "Unmount"
          ), Nl(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; )
          tr(t, e), t = t.sibling;
    }
    function tr(e, t) {
      var a = Kt(), i = vn(), o = Za(), f = Sn(), d = e.alternate, h = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          va(t, e), Sa(e), h & 4 && (Pi(
            fn | $u,
            e,
            e.return
          ), di(fn | $u, e), Wd(
            e,
            e.return,
            au | $u
          ));
          break;
        case 1:
          if (va(t, e), Sa(e), h & 512 && (Vl || d === null || Tn(d, d.return)), h & 64 && zo && (h = e.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = Oi, va(t, e), Sa(e), h & 512 && (Vl || d === null || Tn(d, d.return)), h & 4) {
            var p = d !== null ? d.memoizedState : null;
            if (h = e.memoizedState, d === null)
              if (h === null)
                if (e.stateNode === null) {
                  e: {
                    h = e.type, d = e.memoizedProps, y = y.ownerDocument || y;
                    t: switch (h) {
                      case "title":
                        p = y.getElementsByTagName(
                          "title"
                        )[0], (!p || p[wf] || p[Wt] || p.namespaceURI === Ke || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), kt(p, h, d), p[Wt] = e, he(p), h = p;
                        break e;
                      case "link":
                        var z = Rf(
                          "link",
                          "href",
                          y
                        ).get(h + (d.href || ""));
                        if (z) {
                          for (var R = 0; R < z.length; R++)
                            if (p = z[R], p.getAttribute("href") === (d.href == null || d.href === "" ? null : d.href) && p.getAttribute("rel") === (d.rel == null ? null : d.rel) && p.getAttribute("title") === (d.title == null ? null : d.title) && p.getAttribute("crossorigin") === (d.crossOrigin == null ? null : d.crossOrigin)) {
                              z.splice(R, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), kt(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (z = Rf(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (R = 0; R < z.length; R++)
                            if (p = z[R], yt(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              z.splice(R, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), kt(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    p[Wt] = e, he(p), h = p;
                  }
                  e.stateNode = h;
                } else
                  Mg(
                    y,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Oh(
                  y,
                  h,
                  e.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? Mg(
                y,
                e.type,
                e.stateNode
              ) : Oh(
                y,
                h,
                e.memoizedProps
              )) : h === null && e.stateNode !== null && Pd(
                e,
                e.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          va(t, e), Sa(e), h & 512 && (Vl || d === null || Tn(d, d.return)), d !== null && h & 4 && Pd(
            e,
            e.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (va(t, e), Sa(e), h & 512 && (Vl || d === null || Tn(d, d.return)), e.flags & 32) {
            y = e.stateNode;
            try {
              ce(
                e,
                bh,
                y
              );
            } catch (oe) {
              Je(e, e.return, oe);
            }
          }
          h & 4 && e.stateNode != null && (y = e.memoizedProps, Pd(
            e,
            y,
            d !== null ? d.memoizedProps : y
          )), h & 1024 && (VS = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (va(t, e), Sa(e), h & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            h = e.memoizedProps, d = d !== null ? d.memoizedProps : h, y = e.stateNode;
            try {
              ce(
                e,
                eS,
                y,
                d,
                h
              );
            } catch (oe) {
              Je(e, e.return, oe);
            }
          }
          break;
        case 3:
          if (y = pu(), Yv = null, p = Oi, Oi = Th(t.containerInfo), va(t, e), Oi = p, Sa(e), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              ce(
                e,
                Wy,
                t.containerInfo
              );
            } catch (oe) {
              Je(e, e.return, oe);
            }
          VS && (VS = !1, tg(e)), t.effectDuration += $o(
            y
          );
          break;
        case 4:
          h = Oi, Oi = Th(
            e.stateNode.containerInfo
          ), va(t, e), Sa(e), Oi = h;
          break;
        case 12:
          h = pu(), va(t, e), Sa(e), e.stateNode.effectDuration += da(h);
          break;
        case 31:
          va(t, e), Sa(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, tc(e, h)));
          break;
        case 13:
          va(t, e), Sa(e), e.child.flags & 8192 && e.memoizedState !== null != (d !== null && d.memoizedState !== null) && (Ev = Gl()), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, tc(e, h)));
          break;
        case 22:
          y = e.memoizedState !== null;
          var E = d !== null && d.memoizedState !== null, x = zo, ne = Vl;
          if (zo = x || y, Vl = ne || E, va(t, e), Vl = ne, zo = x, E && !y && !x && !ne && (e.mode & We) !== He && 0 <= Ae && 0 <= Me && 0.05 < Me - Ae && pd(
            e,
            Ae,
            Me
          ), Sa(e), h & 8192)
            e: for (t = e.stateNode, t._visibility = y ? t._visibility & ~Hp : t._visibility | Hp, !y || d === null || E || zo || Vl || (lc(e), (e.mode & We) !== He && 0 <= Ae && 0 <= Me && 0.05 < Me - Ae && yn(
              e,
              Ae,
              Me,
              "Disconnect"
            )), d = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (d === null) {
                  E = d = t;
                  try {
                    p = E.stateNode, y ? ce(
                      E,
                      vg,
                      p
                    ) : ce(
                      E,
                      Eg,
                      E.stateNode,
                      E.memoizedProps
                    );
                  } catch (oe) {
                    Je(E, E.return, oe);
                  }
                }
              } else if (t.tag === 6) {
                if (d === null) {
                  E = t;
                  try {
                    z = E.stateNode, y ? ce(
                      E,
                      Sg,
                      z
                    ) : ce(
                      E,
                      Tg,
                      z,
                      E.memoizedProps
                    );
                  } catch (oe) {
                    Je(E, E.return, oe);
                  }
                }
              } else if (t.tag === 18) {
                if (d === null) {
                  E = t;
                  try {
                    R = E.stateNode, y ? ce(
                      E,
                      gg,
                      R
                    ) : ce(
                      E,
                      bg,
                      E.stateNode
                    );
                  } catch (oe) {
                    Je(E, E.return, oe);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                d === t && (d = null), t = t.return;
              }
              d === t && (d = null), t.sibling.return = t.return, t = t.sibling;
            }
          h & 4 && (h = e.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, tc(e, d))));
          break;
        case 19:
          va(t, e), Sa(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, tc(e, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          va(t, e), Sa(e);
      }
      (e.mode & We) !== He && 0 <= Ae && 0 <= Me && ((pl || 0.05 < fl) && jn(
        e,
        Ae,
        Me,
        fl,
        nl
      ), e.alternate === null && e.return !== null && e.return.alternate !== null && 0.05 < Me - Ae && (_y(
        e.return.alternate,
        e.return
      ) || yn(
        e,
        Ae,
        Me,
        "Mount"
      ))), Nl(a), Va(i), nl = o, pl = f;
    }
    function Sa(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          ce(e, zy, e);
        } catch (a) {
          Je(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function tg(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          tg(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Ia(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          th(e, t.alternate, t), t = t.sibling;
    }
    function lh(e) {
      var t = Kt(), a = vn(), i = Za(), o = Sn();
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Wd(
            e,
            e.return,
            au
          ), lc(e);
          break;
        case 1:
          Tn(e, e.return);
          var f = e.stateNode;
          typeof f.componentWillUnmount == "function" && Id(
            e,
            e.return,
            f
          ), lc(e);
          break;
        case 27:
          ce(
            e,
            vi,
            e.stateNode
          );
        case 26:
        case 5:
          Tn(e, e.return), lc(e);
          break;
        case 22:
          e.memoizedState === null && lc(e);
          break;
        case 30:
          lc(e);
          break;
        default:
          lc(e);
      }
      (e.mode & We) !== He && 0 <= Ae && 0 <= Me && (pl || 0.05 < fl) && jn(
        e,
        Ae,
        Me,
        fl,
        nl
      ), Nl(t), Va(a), nl = i, pl = o;
    }
    function lc(e) {
      for (e = e.child; e !== null; )
        lh(e), e = e.sibling;
    }
    function Uy(e, t, a, i) {
      var o = Kt(), f = vn(), d = Za(), h = Sn(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Zn(
            e,
            a,
            i
          ), W0(a, au);
          break;
        case 1:
          if (Zn(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && ce(
            a,
            US,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              ce(
                a,
                Im,
                t,
                e
              );
            } catch (p) {
              Je(a, a.return, p);
            }
          }
          i && y & 64 && Ty(a), Ic(a, a.return);
          break;
        case 27:
          Dy(a);
        case 26:
        case 5:
          Zn(
            e,
            a,
            i
          ), i && t === null && y & 4 && ec(a), Ic(a, a.return);
          break;
        case 12:
          if (i && y & 4) {
            y = pu(), Zn(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += da(y);
            try {
              ce(
                a,
                Ay,
                a,
                t,
                $f,
                i.effectDuration
              );
            } catch (p) {
              Je(a, a.return, p);
            }
          } else
            Zn(
              e,
              a,
              i
            );
          break;
        case 31:
          Zn(
            e,
            a,
            i
          ), i && y & 4 && My(e, a);
          break;
        case 13:
          Zn(
            e,
            a,
            i
          ), i && y & 4 && Cy(e, a);
          break;
        case 22:
          a.memoizedState === null && Zn(
            e,
            a,
            i
          ), Ic(a, a.return);
          break;
        case 30:
          break;
        default:
          Zn(
            e,
            a,
            i
          );
      }
      (a.mode & We) !== He && 0 <= Ae && 0 <= Me && (pl || 0.05 < fl) && jn(
        a,
        Ae,
        Me,
        fl,
        nl
      ), Nl(o), Va(f), nl = d, pl = h;
    }
    function Zn(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        Uy(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function lr(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && jc(e), a != null && Rs(a));
    }
    function ar(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (jc(t), e != null && Rs(e));
    }
    function Pa(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (t = t.child; t !== null; ) {
          var f = t.sibling;
          Hy(
            e,
            t,
            a,
            i,
            f !== null ? f.actualStartTime : o
          ), t = f;
        }
    }
    function Hy(e, t, a, i, o) {
      var f = Kt(), d = vn(), h = Za(), y = Sn(), p = Vf, z = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (t.mode & We) !== He && 0 < t.actualStartTime && t.flags & 1 && gd(
            t,
            t.actualStartTime,
            o,
            Fl,
            a
          ), Pa(
            e,
            t,
            a,
            i,
            o
          ), z & 2048 && Is(t, sn | $u);
          break;
        case 1:
          (t.mode & We) !== He && 0 < t.actualStartTime && (t.flags & 128 ? Ym(
            t,
            t.actualStartTime,
            o,
            []
          ) : t.flags & 1 && gd(
            t,
            t.actualStartTime,
            o,
            Fl,
            a
          )), Pa(
            e,
            t,
            a,
            i,
            o
          );
          break;
        case 3:
          var R = pu(), E = Fl;
          Fl = t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) === 0, Pa(
            e,
            t,
            a,
            i,
            o
          ), Fl = E, z & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), i = t.memoizedState.cache, i !== a && (jc(i), a != null && Rs(a))), e.passiveEffectDuration += $o(
            R
          );
          break;
        case 12:
          if (z & 2048) {
            z = pu(), Pa(
              e,
              t,
              a,
              i,
              o
            ), e = t.stateNode, e.passiveEffectDuration += da(z);
            try {
              ce(
                t,
                P0,
                t,
                t.alternate,
                $f,
                e.passiveEffectDuration
              );
            } catch (x) {
              Je(t, t.return, x);
            }
          } else
            Pa(
              e,
              t,
              a,
              i,
              o
            );
          break;
        case 31:
          z = Fl, R = t.alternate !== null ? t.alternate.memoizedState : null, E = t.memoizedState, R !== null && E === null ? (E = t.deletions, E !== null && 0 < E.length && E[0].tag === 18 ? (Fl = !1, R = R.hydrationErrors, R !== null && Ym(
            t,
            t.actualStartTime,
            o,
            R
          )) : Fl = !0) : Fl = !1, Pa(
            e,
            t,
            a,
            i,
            o
          ), Fl = z;
          break;
        case 13:
          z = Fl, R = t.alternate !== null ? t.alternate.memoizedState : null, E = t.memoizedState, R === null || R.dehydrated === null || E !== null && E.dehydrated !== null ? Fl = !1 : (E = t.deletions, E !== null && 0 < E.length && E[0].tag === 18 ? (Fl = !1, R = R.hydrationErrors, R !== null && Ym(
            t,
            t.actualStartTime,
            o,
            R
          )) : Fl = !0), Pa(
            e,
            t,
            a,
            i,
            o
          ), Fl = z;
          break;
        case 23:
          break;
        case 22:
          E = t.stateNode, R = t.alternate, t.memoizedState !== null ? E._visibility & yo ? Pa(
            e,
            t,
            a,
            i,
            o
          ) : Pc(
            e,
            t,
            a,
            i,
            o
          ) : E._visibility & yo ? Pa(
            e,
            t,
            a,
            i,
            o
          ) : (E._visibility |= yo, ac(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child),
            o
          ), (t.mode & We) === He || Fl || (e = t.actualStartTime, 0 <= e && 0.05 < o - e && pd(t, e, o), 0 <= Ae && 0 <= Me && 0.05 < Me - Ae && pd(
            t,
            Ae,
            Me
          ))), z & 2048 && lr(
            R,
            t
          );
          break;
        case 24:
          Pa(
            e,
            t,
            a,
            i,
            o
          ), z & 2048 && ar(t.alternate, t);
          break;
        default:
          Pa(
            e,
            t,
            a,
            i,
            o
          );
      }
      (t.mode & We) !== He && ((e = !Fl && t.alternate === null && t.return !== null && t.return.alternate !== null) && (a = t.actualStartTime, 0 <= a && 0.05 < o - a && yn(
        t,
        a,
        o,
        "Mount"
      )), 0 <= Ae && 0 <= Me && ((pl || 0.05 < fl) && jn(
        t,
        Ae,
        Me,
        fl,
        nl
      ), e && 0.05 < Me - Ae && yn(
        t,
        Ae,
        Me,
        "Mount"
      ))), Nl(f), Va(d), nl = h, pl = y, Vf = p;
    }
    function ac(e, t, a, i, o, f) {
      for (o = o && ((t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)), t = t.child; t !== null; ) {
        var d = t.sibling;
        nr(
          e,
          t,
          a,
          i,
          o,
          d !== null ? d.actualStartTime : f
        ), t = d;
      }
    }
    function nr(e, t, a, i, o, f) {
      var d = Kt(), h = vn(), y = Za(), p = Sn(), z = Vf;
      o && (t.mode & We) !== He && 0 < t.actualStartTime && t.flags & 1 && gd(
        t,
        t.actualStartTime,
        f,
        Fl,
        a
      );
      var R = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          ac(
            e,
            t,
            a,
            i,
            o,
            f
          ), Is(t, sn);
          break;
        case 23:
          break;
        case 22:
          var E = t.stateNode;
          t.memoizedState !== null ? E._visibility & yo ? ac(
            e,
            t,
            a,
            i,
            o,
            f
          ) : Pc(
            e,
            t,
            a,
            i,
            f
          ) : (E._visibility |= yo, ac(
            e,
            t,
            a,
            i,
            o,
            f
          )), o && R & 2048 && lr(
            t.alternate,
            t
          );
          break;
        case 24:
          ac(
            e,
            t,
            a,
            i,
            o,
            f
          ), o && R & 2048 && ar(t.alternate, t);
          break;
        default:
          ac(
            e,
            t,
            a,
            i,
            o,
            f
          );
      }
      (t.mode & We) !== He && 0 <= Ae && 0 <= Me && (pl || 0.05 < fl) && jn(
        t,
        Ae,
        Me,
        fl,
        nl
      ), Nl(d), Va(h), nl = y, pl = p, Vf = z;
    }
    function Pc(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (var f = t.child; f !== null; ) {
          t = f.sibling;
          var d = e, h = a, y = i, p = t !== null ? t.actualStartTime : o, z = Vf;
          (f.mode & We) !== He && 0 < f.actualStartTime && f.flags & 1 && gd(
            f,
            f.actualStartTime,
            p,
            Fl,
            h
          );
          var R = f.flags;
          switch (f.tag) {
            case 22:
              Pc(
                d,
                f,
                h,
                y,
                p
              ), R & 2048 && lr(f.alternate, f);
              break;
            case 24:
              Pc(
                d,
                f,
                h,
                y,
                p
              ), R & 2048 && ar(f.alternate, f);
              break;
            default:
              Pc(
                d,
                f,
                h,
                y,
                p
              );
          }
          Vf = z, f = t;
        }
    }
    function eo(e, t, a) {
      if (e.subtreeFlags & Ip)
        for (e = e.child; e !== null; )
          ah(
            e,
            t,
            a
          ), e = e.sibling;
    }
    function ah(e, t, a) {
      switch (e.tag) {
        case 26:
          eo(
            e,
            t,
            a
          ), e.flags & Ip && e.memoizedState !== null && lp(
            a,
            Oi,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          eo(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          var i = Oi;
          Oi = Th(
            e.stateNode.containerInfo
          ), eo(
            e,
            t,
            a
          ), Oi = i;
          break;
        case 22:
          e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = Ip, Ip = 16777216, eo(
            e,
            t,
            a
          ), Ip = i) : eo(
            e,
            t,
            a
          ));
          break;
        default:
          eo(
            e,
            t,
            a
          );
      }
    }
    function Ny(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function en(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = Kt();
            oa = i, Ru(
              i,
              e
            ), (i.mode & We) !== He && 0 <= Ae && 0 <= Me && 0.05 < Me - Ae && yn(
              i,
              Ae,
              Me,
              "Unmount"
            ), Nl(o);
          }
        Ny(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          nh(e), e = e.sibling;
    }
    function nh(e) {
      var t = Kt(), a = vn(), i = Za(), o = Sn();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          en(e), e.flags & 2048 && Fd(
            e,
            e.return,
            sn | $u
          );
          break;
        case 3:
          var f = pu();
          en(e), e.stateNode.passiveEffectDuration += $o(f);
          break;
        case 12:
          f = pu(), en(e), e.stateNode.passiveEffectDuration += da(f);
          break;
        case 22:
          f = e.stateNode, e.memoizedState !== null && f._visibility & yo && (e.return === null || e.return.tag !== 13) ? (f._visibility &= ~yo, uh(e), (e.mode & We) !== He && 0 <= Ae && 0 <= Me && 0.05 < Me - Ae && yn(
            e,
            Ae,
            Me,
            "Disconnect"
          )) : en(e);
          break;
        default:
          en(e);
      }
      (e.mode & We) !== He && 0 <= Ae && 0 <= Me && (pl || 0.05 < fl) && jn(
        e,
        Ae,
        Me,
        fl,
        nl
      ), Nl(t), Va(a), pl = o, nl = i;
    }
    function uh(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = Kt();
            oa = i, Ru(
              i,
              e
            ), (i.mode & We) !== He && 0 <= Ae && 0 <= Me && 0.05 < Me - Ae && yn(
              i,
              Ae,
              Me,
              "Unmount"
            ), Nl(o);
          }
        Ny(e);
      }
      for (e = e.child; e !== null; )
        By(e), e = e.sibling;
    }
    function By(e) {
      var t = Kt(), a = vn(), i = Za(), o = Sn();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Fd(
            e,
            e.return,
            sn
          ), uh(e);
          break;
        case 22:
          var f = e.stateNode;
          f._visibility & yo && (f._visibility &= ~yo, uh(e));
          break;
        default:
          uh(e);
      }
      (e.mode & We) !== He && 0 <= Ae && 0 <= Me && (pl || 0.05 < fl) && jn(
        e,
        Ae,
        Me,
        fl,
        nl
      ), Nl(t), Va(a), pl = o, nl = i;
    }
    function Ru(e, t) {
      for (; oa !== null; ) {
        var a = oa, i = a, o = t, f = Kt(), d = vn(), h = Za(), y = Sn();
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Fd(
              i,
              o,
              sn
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool, o != null && jc(o));
            break;
          case 24:
            Rs(i.memoizedState.cache);
        }
        if ((i.mode & We) !== He && 0 <= Ae && 0 <= Me && (pl || 0.05 < fl) && jn(
          i,
          Ae,
          Me,
          fl,
          nl
        ), Nl(f), Va(d), pl = y, nl = h, i = a.child, i !== null) i.return = a, oa = i;
        else
          e: for (a = e; oa !== null; ) {
            if (i = oa, f = i.sibling, d = i.return, ml(i), i === a) {
              oa = null;
              break e;
            }
            if (f !== null) {
              f.return = d, oa = f;
              break e;
            }
            oa = d;
          }
      }
    }
    function jy() {
      IE.forEach(function(e) {
        return e();
      });
    }
    function Yy() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || G.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function na(e) {
      if ((ht & Il) !== fa && Ie !== 0)
        return Ie & -Ie;
      var t = G.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), Jy()) : Ci();
    }
    function hf() {
      if (Mn === 0)
        if (!(Ie & 536870912) || it) {
          var e = _r;
          _r <<= 1, !(_r & 3932160) && (_r = 262144), Mn = e;
        } else Mn = 536870912;
      return e = lu.current, e !== null && (e.flags |= 32), Mn;
    }
    function Be(e, t, a) {
      if (ym && console.error("useInsertionEffect must not schedule updates."), t1 && (zv = !0), (e === Xt && (Nt === Lr || Nt === Vr) || e.cancelPendingCommit !== null) && (Mu(e, 0), An(
        e,
        Ie,
        Mn,
        !1
      )), Cn(e, a), (ht & Il) !== fa && e === Xt) {
        if (Yu)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = tt && se(tt) || "Unknown", u2.has(e) || (u2.add(e), t = se(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              n2 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), n2 = !0);
          }
      } else
        qu && Al(e, t, a), or(t), e === Xt && ((ht & Il) === fa && (ls |= a), sl === Pf && An(
          e,
          Ie,
          Mn,
          !1
        )), Ca(e);
    }
    function lg(e, t, a) {
      if ((ht & (Il | nu)) !== fa)
        throw Error("Should not already be working.");
      if (Ie !== 0 && tt !== null) {
        var i = tt, o = Gl();
        switch (F1) {
          case t0:
          case Lr:
            var f = qp;
            Ft && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Suspended",
                f,
                o,
                wu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              wu,
              void 0,
              "primary-light"
            ));
            break;
          case Vr:
            f = qp, Ft && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Action",
                f,
                o,
                wu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              wu,
              void 0,
              "primary-light"
            ));
            break;
          default:
            Ft && (i = o - qp, 3 > i || console.timeStamp(
              "Blocked",
              qp,
              o,
              wu,
              void 0,
              5 > i ? "primary-light" : 10 > i ? "primary" : 100 > i ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || gl(e, t)) ? hi(e, t) : pf(e, t, !0);
      var d = a;
      do {
        if (f === Do) {
          hm && !a && An(e, t, 0, !1), t = Nt, qp = Xl(), F1 = t;
          break;
        } else {
          if (i = Gl(), o = e.current.alternate, d && !ng(o)) {
            Bn(t), o = ca, f = i, !Ft || f <= o || (El ? El.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                rt,
                ot,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              rt,
              ot,
              "error"
            )), nc(t, i), f = pf(e, t, !1), d = !1;
            continue;
          }
          if (f === Qr) {
            if (d = t, e.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              Bn(t), xm(
                ca,
                i,
                t,
                El
              ), nc(t, i), t = h;
              e: {
                i = e, f = d, d = a0;
                var y = i.current.memoizedState.isDehydrated;
                if (y && (Mu(i, h).flags |= 256), h = pf(
                  i,
                  h,
                  !1
                ), h !== Qr) {
                  if (KS && !y) {
                    i.errorRecoveryDisabledLanes |= f, ls |= f, f = Pf;
                    break e;
                  }
                  i = rn, rn = d, i !== null && (rn === null ? rn = i : rn.push.apply(
                    rn,
                    i
                  ));
                }
                f = h;
              }
              if (d = !1, f !== Qr) continue;
              i = Gl();
            }
          }
          if (f === e0) {
            Bn(t), xm(
              ca,
              i,
              t,
              El
            ), nc(t, i), Mu(e, 0), An(e, t, 0, !0);
            break;
          }
          e: {
            switch (a = e, f) {
              case Do:
              case e0:
                throw Error("Root did not complete. This is a bug in React.");
              case Pf:
                if ((t & 4194048) !== t) break;
              case gv:
                Bn(t), H0(
                  ca,
                  i,
                  t,
                  El
                ), nc(t, i), o = t, o & 127 ? lv = i : o & 4194048 && (av = i), An(
                  a,
                  t,
                  Mn,
                  !es
                );
                break e;
              case Qr:
                rn = null;
                break;
              case pv:
              case Zb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (G.actQueue !== null)
              qt(
                a,
                o,
                t,
                rn,
                n0,
                bv,
                Mn,
                ls,
                Zr,
                f,
                null,
                null,
                ca,
                i
              );
            else {
              if ((t & 62914560) === t && (d = Ev + $b - Gl(), 10 < d)) {
                if (An(
                  a,
                  t,
                  Mn,
                  !es
                ), Sc(a, 0, !0) !== 0) break e;
                zi = t, a.timeoutHandle = h2(
                  ag.bind(
                    null,
                    a,
                    o,
                    rn,
                    n0,
                    bv,
                    t,
                    Mn,
                    ls,
                    Zr,
                    es,
                    f,
                    "Throttled",
                    ca,
                    i
                  ),
                  d
                );
                break e;
              }
              ag(
                a,
                o,
                rn,
                n0,
                bv,
                t,
                Mn,
                ls,
                Zr,
                es,
                f,
                null,
                ca,
                i
              );
            }
          }
        }
        break;
      } while (!0);
      Ca(e);
    }
    function ag(e, t, a, i, o, f, d, h, y, p, z, R, E, x) {
      e.timeoutHandle = Wr;
      var ne = t.subtreeFlags, oe = null;
      if ((ne & 8192 || (ne & 16785408) === 16785408) && (oe = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: mn
      }, ah(t, f, oe), ne = (f & 62914560) === f ? Ev - Gl() : (f & 4194048) === f ? Kb - Gl() : 0, ne = zh(oe, ne), ne !== null)) {
        zi = f, e.cancelPendingCommit = ne(
          qt.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            h,
            y,
            z,
            oe,
            oe.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < oe.count ? 0 < oe.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : oe.imgCount === 1 ? "Suspended on an Image" : 0 < oe.imgCount ? "Suspended on Images" : null,
            E,
            x
          )
        ), An(
          e,
          f,
          d,
          !p
        );
        return;
      }
      qt(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        y,
        z,
        oe,
        R,
        E,
        x
      );
    }
    function ng(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!cn(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function An(e, t, a, i) {
      t &= ~$S, t &= ~ls, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - kl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && No(e, a, t);
    }
    function tn() {
      return (ht & (Il | nu)) === fa ? (Uu(0), !1) : !0;
    }
    function ih() {
      if (tt !== null) {
        if (Nt === Rn)
          var e = tt.return;
        else
          e = tt, Jo(), Li(e), nm = null, Kp = 0, e = tt;
        for (; e !== null; )
          Ey(e.alternate, e), e = e.return;
        tt = null;
      }
    }
    function nc(e, t) {
      e & 127 && (Nr = t), e & 4194048 && (bo = t), e & 62914560 && (k1 = t), e & 2080374784 && (W1 = t);
    }
    function Mu(e, t) {
      Ft && (console.timeStamp(
        "Blocking Track",
        3e-3,
        3e-3,
        "Blocking",
        ot,
        "primary-light"
      ), console.timeStamp(
        "Transition Track",
        3e-3,
        3e-3,
        "Transition",
        ot,
        "primary-light"
      ), console.timeStamp(
        "Suspense Track",
        3e-3,
        3e-3,
        "Suspense",
        ot,
        "primary-light"
      ), console.timeStamp(
        "Idle Track",
        3e-3,
        3e-3,
        "Idle",
        ot,
        "primary-light"
      ));
      var a = ca;
      if (ca = Xl(), Ie !== 0 && 0 < a) {
        if (Bn(Ie), sl === pv || sl === Pf)
          H0(
            a,
            ca,
            t,
            El
          );
        else {
          var i = ca, o = El;
          if (Ft && !(i <= a)) {
            var f = (t & 738197653) === t ? "tertiary-dark" : "primary-dark", d = (t & 536870912) === t ? "Prewarm" : (t & 201326741) === t ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(
              console.timeStamp.bind(
                console,
                d,
                a,
                i,
                rt,
                ot,
                f
              )
            ) : console.timeStamp(
              d,
              a,
              i,
              rt,
              ot,
              f
            );
          }
        }
        nc(Ie, ca);
      }
      if (a = El, El = null, t & 127) {
        El = jp, o = 0 <= yc && yc < Nr ? Nr : yc, i = 0 <= Br && Br < Nr ? Nr : Br, f = 0 <= i ? i : 0 <= o ? o : ca, 0 <= lv ? (Bn(2), N0(
          lv,
          f,
          t,
          a
        )) : nv & 127, a = o;
        var h = i, y = Yp, p = 0 < tm, z = kf === Bp, R = kf === tv;
        if (o = ca, i = jp, f = DS, d = _S, Ft) {
          if (rt = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var E = p ? "secondary-light" : "warning";
            i ? i.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                rt,
                ot,
                E
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              rt,
              ot,
              E
            );
          }
          o > a && (h = z ? "error" : (t & 738197653) === t ? "tertiary-light" : "primary-light", z = R ? "Promise Resolved" : z ? "Cascading Update" : 5 < o - a ? "Update Blocked" : "Update", R = [], d != null && R.push(["Component name", d]), f != null && R.push(["Method name", f]), a = {
            start: a,
            end: o,
            detail: {
              devtools: {
                properties: R,
                track: rt,
                trackGroup: ot,
                color: h
              }
            }
          }, i ? i.run(
            performance.measure.bind(
              performance,
              z,
              a
            )
          ) : performance.measure(z, a));
        }
        yc = -1.1, kf = 0, _S = DS = null, lv = -1.1, tm = Br, Br = -1.1, Nr = Xl();
      }
      if (t & 4194048 && (El = xp, o = 0 <= Eo && Eo < bo ? bo : Eo, a = 0 <= Ju && Ju < bo ? bo : Ju, i = 0 <= Wf && Wf < bo ? bo : Wf, f = 0 <= i ? i : 0 <= a ? a : ca, 0 <= av ? (Bn(256), N0(
        av,
        f,
        t,
        El
      )) : nv & 4194048, R = i, h = jr, y = 0 < Ff, p = RS === tv, f = ca, i = xp, d = K1, z = $1, Ft && (rt = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < R ? R > o && (R = o) : R = o, o > R && h !== null && (E = y ? "secondary-light" : "warning", i ? i.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          R,
          o,
          rt,
          ot,
          E
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        R,
        o,
        rt,
        ot,
        E
      )), a > o && (i ? i.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          a,
          rt,
          ot,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        a,
        rt,
        ot,
        "primary-dark"
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", R = [], z != null && R.push(["Component name", z]), d != null && R.push(["Method name", d]), a = {
        start: a,
        end: f,
        detail: {
          devtools: {
            properties: R,
            track: rt,
            trackGroup: ot,
            color: "primary-light"
          }
        }
      }, i ? i.run(
        performance.measure.bind(
          performance,
          o,
          a
        )
      ) : performance.measure(o, a))), Ju = Eo = -1.1, RS = 0, av = -1.1, Ff = Wf, Wf = -1.1, bo = Xl()), t & 62914560 && nv & 62914560 && (Bn(4194304), qm(k1, ca)), t & 2080374784 && nv & 2080374784 && (Bn(268435456), qm(W1, ca)), a = e.timeoutHandle, a !== Wr && (e.timeoutHandle = Wr, rT(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), zi = 0, ih(), Xt = e, tt = a = mu(
        e.current,
        null
      ), Ie = t, Nt = Rn, uu = null, es = !1, hm = gl(e, t), KS = !1, sl = Do, Zr = Mn = $S = ls = ts = 0, rn = a0 = null, bv = !1, t & 8 && (t |= t & 32), i = e.entangledLanes, i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; )
          o = 31 - kl(i), f = 1 << o, t |= e[o], i &= ~f;
      return gc = t, vd(), e = X1(), 1e3 < e - w1 && (G.recentlyCreatedOwnerStacks = 0, w1 = e), Ti.discardPendingWarnings(), a;
    }
    function Jn(e, t) {
      Ye = null, G.H = Fp, G.getCurrentStack = null, Yu = !1, Ba = null, t === am || t === ov ? (t = qc(), Nt = t0) : t === HS ? (t = qc(), Nt = Jb) : Nt = t === QS ? JS : t !== null && typeof t == "object" && typeof t.then == "function" ? l0 : vv, uu = t;
      var a = tt;
      a === null ? (sl = e0, Ks(
        e,
        ra(t, e.current)
      )) : a.mode & We && zd(a);
    }
    function xy() {
      var e = lu.current;
      return e === null ? !0 : (Ie & 4194048) === Ie ? Ku === null : (Ie & 62914560) === Ie || Ie & 536870912 ? e === Ku : !1;
    }
    function ch() {
      var e = G.H;
      return G.H = Fp, e === null ? Fp : e;
    }
    function qy() {
      var e = G.A;
      return G.A = FE, e;
    }
    function mf(e) {
      El === null && (El = e._debugTask == null ? null : e._debugTask);
    }
    function yf() {
      sl = Pf, es || (Ie & 4194048) !== Ie && lu.current !== null || (hm = !0), !(ts & 134217727) && !(ls & 134217727) || Xt === null || An(
        Xt,
        Ie,
        Mn,
        !1
      );
    }
    function pf(e, t, a) {
      var i = ht;
      ht |= Il;
      var o = ch(), f = qy();
      if (Xt !== e || Ie !== t) {
        if (qu) {
          var d = e.memoizedUpdaters;
          0 < d.size && (vf(e, Ie), d.clear()), wa(e, t);
        }
        n0 = null, Mu(e, t);
      }
      t = !1, d = sl;
      e: do
        try {
          if (Nt !== Rn && tt !== null) {
            var h = tt, y = uu;
            switch (Nt) {
              case JS:
                ih(), d = gv;
                break e;
              case t0:
              case Lr:
              case Vr:
              case l0:
                lu.current === null && (t = !0);
                var p = Nt;
                if (Nt = Rn, uu = null, gf(e, h, y, p), a && hm) {
                  d = Do;
                  break e;
                }
                break;
              default:
                p = Nt, Nt = Rn, uu = null, gf(e, h, y, p);
            }
          }
          Gy(), d = sl;
          break;
        } catch (z) {
          Jn(e, z);
        }
      while (!0);
      return t && e.shellSuspendCounter++, Jo(), ht = i, G.H = o, G.A = f, tt === null && (Xt = null, Ie = 0, vd()), d;
    }
    function Gy() {
      for (; tt !== null; ) oh(tt);
    }
    function hi(e, t) {
      var a = ht;
      ht |= Il;
      var i = ch(), o = qy();
      if (Xt !== e || Ie !== t) {
        if (qu) {
          var f = e.memoizedUpdaters;
          0 < f.size && (vf(e, Ie), f.clear()), wa(e, t);
        }
        n0 = null, Tv = Gl() + kb, Mu(e, t);
      } else
        hm = gl(
          e,
          t
        );
      e: do
        try {
          if (Nt !== Rn && tt !== null)
            t: switch (t = tt, f = uu, Nt) {
              case vv:
                Nt = Rn, uu = null, gf(
                  e,
                  t,
                  f,
                  vv
                );
                break;
              case Lr:
              case Vr:
                if (Wm(f)) {
                  Nt = Rn, uu = null, wy(t);
                  break;
                }
                t = function() {
                  Nt !== Lr && Nt !== Vr || Xt !== e || (Nt = Sv), Ca(e);
                }, f.then(t, t);
                break e;
              case t0:
                Nt = Sv;
                break e;
              case Jb:
                Nt = ZS;
                break e;
              case Sv:
                Wm(f) ? (Nt = Rn, uu = null, wy(t)) : (Nt = Rn, uu = null, gf(
                  e,
                  t,
                  f,
                  Sv
                ));
                break;
              case ZS:
                var d = null;
                switch (tt.tag) {
                  case 26:
                    d = tt.memoizedState;
                  case 5:
                  case 27:
                    var h = tt;
                    if (d ? at(d) : h.stateNode.complete) {
                      Nt = Rn, uu = null;
                      var y = h.sibling;
                      if (y !== null) tt = y;
                      else {
                        var p = h.return;
                        p !== null ? (tt = p, ur(p)) : tt = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Nt = Rn, uu = null, gf(
                  e,
                  t,
                  f,
                  ZS
                );
                break;
              case l0:
                Nt = Rn, uu = null, gf(
                  e,
                  t,
                  f,
                  l0
                );
                break;
              case JS:
                ih(), sl = gv;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          G.actQueue !== null ? Gy() : Sl();
          break;
        } catch (z) {
          Jn(e, z);
        }
      while (!0);
      return Jo(), G.H = i, G.A = o, ht = a, tt !== null ? Do : (Xt = null, Ie = 0, vd(), sl);
    }
    function Sl() {
      for (; tt !== null && !Yh(); )
        oh(tt);
    }
    function oh(e) {
      var t = e.alternate;
      (e.mode & We) !== He ? (li(e), t = ce(
        e,
        Fs,
        t,
        e,
        gc
      ), zd(e)) : t = ce(
        e,
        Fs,
        t,
        e,
        gc
      ), e.memoizedProps = e.pendingProps, t === null ? ur(e) : tt = t;
    }
    function wy(e) {
      var t = ce(e, ql, e);
      e.memoizedProps = e.pendingProps, t === null ? ur(e) : tt = t;
    }
    function ql(e) {
      var t = e.alternate, a = (e.mode & We) !== He;
      switch (a && li(e), e.tag) {
        case 15:
        case 0:
          t = yy(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            Ie
          );
          break;
        case 11:
          t = yy(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            Ie
          );
          break;
        case 5:
          Li(e);
        default:
          Ey(t, e), e = tt = Qm(e, gc), t = Fs(t, e, gc);
      }
      return a && zd(e), t;
    }
    function gf(e, t, a, i) {
      Jo(), Li(t), nm = null, Kp = 0;
      var o = t.return;
      try {
        if (oy(
          e,
          o,
          t,
          a,
          Ie
        )) {
          sl = e0, Ks(
            e,
            ra(a, e.current)
          ), tt = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw tt = o, f;
        sl = e0, Ks(
          e,
          ra(a, e.current)
        ), tt = null;
        return;
      }
      t.flags & 32768 ? (it || i === vv ? e = !0 : hm || Ie & 536870912 ? e = !1 : (es = e = !0, (i === Lr || i === Vr || i === t0 || i === l0) && (i = lu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Xy(t, e)) : ur(t);
    }
    function ur(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Xy(
            t,
            es
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, li(t), a = ce(
          t,
          by,
          a,
          t,
          gc
        ), (t.mode & We) !== He && Ms(t), a !== null) {
          tt = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          tt = t;
          return;
        }
        tt = t = e;
      } while (t !== null);
      sl === Do && (sl = Zb);
    }
    function Xy(e, t) {
      do {
        var a = k0(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, tt = a;
          return;
        }
        if ((e.mode & We) !== He) {
          Ms(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          tt = e;
          return;
        }
        tt = e = a;
      } while (e !== null);
      sl = gv, tt = null;
    }
    function qt(e, t, a, i, o, f, d, h, y, p, z, R, E, x) {
      e.cancelPendingCommit = null;
      do
        ir();
      while (Jl !== ns);
      if (Ti.flushLegacyContextWarning(), Ti.flushPendingUnsafeLifecycleWarnings(), (ht & (Il | nu)) !== fa)
        throw Error("Should not already be working.");
      if (Bn(a), p === Qr ? xm(
        E,
        x,
        a,
        El
      ) : i !== null ? kv(
        E,
        x,
        a,
        i,
        t !== null && t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) !== 0,
        El
      ) : $v(
        E,
        x,
        a,
        El
      ), t !== null) {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= ES, ed(
          e,
          a,
          f,
          d,
          h,
          y
        ), e === Xt && (tt = Xt = null, Ie = 0), mm = t, us = e, zi = a, FS = f, PS = o, t2 = i, IS = x, l2 = R, Di = Av, a2 = null, t.actualDuration !== 0 || t.subtreeFlags & 10256 || t.flags & 10256 ? (e.callbackNode = null, e.callbackPriority = 0, Sf(so, function() {
          return s0 = window.event, Di === Av && (Di = WS), cr(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), So = null, $f = Xl(), R !== null && Wv(
          x,
          $f,
          R,
          El
        ), i = (t.flags & 13878) !== 0, t.subtreeFlags & 13878 || i) {
          i = G.T, G.T = null, o = bt.p, bt.p = Rl, d = ht, ht |= nu;
          try {
            Pv(e, t, a);
          } finally {
            ht = d, bt.p = o, G.T = i;
          }
        }
        Jl = Fb, ba(), Cu(), Qy();
      }
    }
    function ba() {
      if (Jl === Fb) {
        Jl = ns;
        var e = us, t = mm, a = zi, i = (t.flags & 13878) !== 0;
        if (t.subtreeFlags & 13878 || i) {
          i = G.T, G.T = null;
          var o = bt.p;
          bt.p = Rl;
          var f = ht;
          ht |= nu;
          try {
            rm = a, dm = e, Yc(), tr(t, e), dm = rm = null, a = s1;
            var d = yd(e.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && R0(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && Bm(h)) {
                var p = y.start, z = y.end;
                if (z === void 0 && (z = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    z,
                    h.value.length
                  );
                else {
                  var R = h.ownerDocument || document, E = R && R.defaultView || window;
                  if (E.getSelection) {
                    var x = E.getSelection(), ne = h.textContent.length, oe = Math.min(
                      y.start,
                      ne
                    ), Zt = y.end === void 0 ? oe : Math.min(y.end, ne);
                    !x.extend && oe > Zt && (d = Zt, Zt = oe, oe = d);
                    var ft = _0(
                      h,
                      oe
                    ), b = _0(
                      h,
                      Zt
                    );
                    if (ft && b && (x.rangeCount !== 1 || x.anchorNode !== ft.node || x.anchorOffset !== ft.offset || x.focusNode !== b.node || x.focusOffset !== b.offset)) {
                      var T = R.createRange();
                      T.setStart(ft.node, ft.offset), x.removeAllRanges(), oe > Zt ? (x.addRange(T), x.extend(b.node, b.offset)) : (T.setEnd(b.node, b.offset), x.addRange(T));
                    }
                  }
                }
              }
              for (R = [], x = h; x = x.parentNode; )
                x.nodeType === 1 && R.push({
                  element: x,
                  left: x.scrollLeft,
                  top: x.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < R.length; h++) {
                var O = R[h];
                O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
              }
            }
            Gv = !!f1, s1 = f1 = null;
          } finally {
            ht = f, bt.p = o, G.T = i;
          }
        }
        e.current = t, Jl = Ib;
      }
    }
    function Cu() {
      if (Jl === Ib) {
        Jl = ns;
        var e = a2;
        if (e !== null) {
          $f = Xl();
          var t = vo, a = $f;
          !Ft || a <= t || console.timeStamp(
            e,
            t,
            a,
            rt,
            ot,
            "secondary-light"
          );
        }
        e = us, t = mm, a = zi;
        var i = (t.flags & 8772) !== 0;
        if (t.subtreeFlags & 8772 || i) {
          i = G.T, G.T = null;
          var o = bt.p;
          bt.p = Rl;
          var f = ht;
          ht |= nu;
          try {
            rm = a, dm = e, Yc(), th(
              e,
              t.alternate,
              t
            ), dm = rm = null;
          } finally {
            ht = f, bt.p = o, G.T = i;
          }
        }
        e = IS, t = l2, vo = Xl(), e = t === null ? e : $f, t = vo, a = Di === kS, i = El, So !== null ? B0(
          e,
          t,
          So,
          !1,
          i
        ) : !Ft || t <= e || (i ? i.run(
          console.timeStamp.bind(
            console,
            a ? "Commit Interrupted View Transition" : "Commit",
            e,
            t,
            rt,
            ot,
            a ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          a ? "Commit Interrupted View Transition" : "Commit",
          e,
          t,
          rt,
          ot,
          a ? "error" : "secondary-dark"
        )), Jl = Pb;
      }
    }
    function Qy() {
      if (Jl === e2 || Jl === Pb) {
        if (Jl === e2) {
          var e = vo;
          vo = Xl();
          var t = vo, a = Di === kS;
          !Ft || t <= e || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            e,
            t,
            rt,
            ot,
            a ? " error" : "secondary-light"
          ), Di !== kS && (Di = Wb);
        }
        Jl = ns, xh(), e = us;
        var i = mm;
        t = zi, a = t2;
        var o = i.actualDuration !== 0 || (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0;
        o ? Jl = Ov : (Jl = ns, mm = us = null, Ly(
          e,
          e.pendingLanes
        ), Jr = 0, i0 = null);
        var f = e.pendingLanes;
        if (f === 0 && (as = null), o || rh(e), f = Ul(t), i = i.stateNode, _l && typeof _l.onCommitFiberRoot == "function")
          try {
            var d = (i.current.flags & 128) === 128;
            switch (f) {
              case Rl:
                var h = Sp;
                break;
              case Wl:
                h = qh;
                break;
              case ia:
                h = so;
                break;
              case dc:
                h = Gh;
                break;
              default:
                h = so;
            }
            _l.onCommitFiberRoot(
              ro,
              i,
              h,
              d
            );
          } catch (R) {
            xu || (xu = !0, console.error(
              "React instrumentation encountered an error: %o",
              R
            ));
          }
        if (qu && e.memoizedUpdaters.clear(), jy(), a !== null) {
          d = G.T, h = bt.p, bt.p = Rl, G.T = null;
          try {
            var y = e.onRecoverableError;
            for (i = 0; i < a.length; i++) {
              var p = a[i], z = ug(p.stack);
              ce(
                p.source,
                y,
                p.value,
                z
              );
            }
          } finally {
            G.T = d, bt.p = h;
          }
        }
        zi & 3 && ir(), Ca(e), f = e.pendingLanes, t & 261930 && f & 42 ? (iv = !0, e === e1 ? u0++ : (u0 = 0, e1 = e)) : u0 = 0, o || nc(t, vo), Uu(0);
      }
    }
    function ug(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Ly(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Rs(t)));
    }
    function ir() {
      return ba(), Cu(), Qy(), cr();
    }
    function cr() {
      if (Jl !== Ov) return !1;
      var e = us, t = FS;
      FS = 0;
      var a = Ul(zi), i = ia > a ? ia : a;
      a = G.T;
      var o = bt.p;
      try {
        bt.p = i, G.T = null;
        var f = PS;
        PS = null, i = us;
        var d = zi;
        if (Jl = ns, mm = us = null, zi = 0, (ht & (Il | nu)) !== fa)
          throw Error("Cannot flush passive effects while already rendering.");
        Bn(d), t1 = !0, zv = !1;
        var h = 0;
        if (So = null, h = Gl(), Di === Wb)
          qm(
            vo,
            h,
            VE
          );
        else {
          var y = vo, p = h, z = Di === WS;
          !Ft || p <= y || (El ? El.run(
            console.timeStamp.bind(
              console,
              z ? "Waiting for Paint" : "Waiting",
              y,
              p,
              rt,
              ot,
              "secondary-light"
            )
          ) : console.timeStamp(
            z ? "Waiting for Paint" : "Waiting",
            y,
            p,
            rt,
            ot,
            "secondary-light"
          ));
        }
        y = ht, ht |= nu;
        var R = i.current;
        Yc(), nh(R);
        var E = i.current;
        R = IS, Yc(), Hy(
          i,
          E,
          d,
          f,
          R
        ), rh(i), ht = y;
        var x = Gl();
        if (E = h, R = El, So !== null ? B0(
          E,
          x,
          So,
          !0,
          R
        ) : !Ft || x <= E || (R ? R.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            E,
            x,
            rt,
            ot,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          E,
          x,
          rt,
          ot,
          "secondary-dark"
        )), nc(d, x), Uu(0, !1), zv ? i === i0 ? Jr++ : (Jr = 0, i0 = i) : Jr = 0, zv = t1 = !1, _l && typeof _l.onPostCommitFiberRoot == "function")
          try {
            _l.onPostCommitFiberRoot(ro, i);
          } catch (oe) {
            xu || (xu = !0, console.error(
              "React instrumentation encountered an error: %o",
              oe
            ));
          }
        var ne = i.current.stateNode;
        return ne.effectDuration = 0, ne.passiveEffectDuration = 0, !0;
      } finally {
        bt.p = o, G.T = a, Ly(e, t);
      }
    }
    function Ea(e, t, a) {
      t = ra(a, t), w0(t), t = Xd(e.stateNode, t, 2), e = vu(e, t, 2), e !== null && (Cn(e, 2), Ca(e));
    }
    function Je(e, t, a) {
      if (ym = !1, e.tag === 3)
        Ea(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            Ea(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (as === null || !as.has(i))) {
              e = ra(a, e), w0(e), a = Qd(2), i = vu(t, a, 2), i !== null && (Ld(
                a,
                i,
                t,
                e
              ), Cn(i, 2), Ca(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function fh(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new PE();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (KS = !0, o.add(a), i = Ma.bind(null, e, t, a), qu && vf(e, a), t.then(i, i));
    }
    function Ma(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, a & 127 ? 0 > yc && (Nr = yc = Xl(), jp = ev("Promise Resolved"), kf = tv) : a & 4194048 && 0 > Ju && (bo = Ju = Xl(), xp = ev("Promise Resolved"), RS = tv), Yy() && G.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Xt === e && (Ie & a) === a && (sl === Pf || sl === pv && (Ie & 62914560) === Ie && Gl() - Ev < $b ? (ht & Il) === fa && Mu(e, 0) : $S |= a, Zr === Ie && (Zr = 0)), Ca(e);
    }
    function Vy(e, t) {
      t === 0 && (t = Uo()), e = la(e, t), e !== null && (Cn(e, t), Ca(e));
    }
    function mi(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), Vy(e, a);
    }
    function to(e, t) {
      var a = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), Vy(e, a);
    }
    function Kn(e, t, a) {
      if (t.subtreeFlags & 67117056)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === Oa;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && ce(
            o,
            sh,
            i,
            o
          ) : Kn(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? ce(
            o,
            sh,
            i,
            o
          ) : o.subtreeFlags & 67108864 && ce(
            o,
            Kn,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function sh(e, t) {
      re(!0);
      try {
        lh(t), By(t), Uy(e, t.alternate, t, !1), nr(e, t, 0, null, !1, 0);
      } finally {
        re(!1);
      }
    }
    function rh(e) {
      var t = !0;
      e.current.mode & (ja | Ei) || (t = !1), Kn(
        e,
        e.current,
        t
      );
    }
    function On(e) {
      if ((ht & Il) === fa) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = se(e) || "ReactComponent", Dv !== null) {
            if (Dv.has(t)) return;
            Dv.add(t);
          } else Dv = /* @__PURE__ */ new Set([t]);
          ce(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function vf(e, t) {
      qu && e.memoizedUpdaters.forEach(function(a) {
        Al(e, a, t);
      });
    }
    function Sf(e, t) {
      var a = G.actQueue;
      return a !== null ? (a.push(t), lT) : vp(e, t);
    }
    function or(e) {
      Yy() && G.actQueue === null && ce(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          se(e)
        );
      });
    }
    function Ca(e) {
      e !== pm && e.next === null && (pm === null ? _v = pm = e : pm = pm.next = e), Rv = !0, G.actQueue !== null ? a1 || (a1 = !0, cg()) : l1 || (l1 = !0, cg());
    }
    function Uu(e, t) {
      if (!n1 && Rv) {
        n1 = !0;
        do
          for (var a = !1, i = _v; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - kl(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, fr(i, f));
            } else
              f = Ie, f = Sc(
                i,
                i === Xt ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== Wr
              ), !(f & 3) || gl(i, f) || (a = !0, fr(i, f));
            i = i.next;
          }
        while (a);
        n1 = !1;
      }
    }
    function ig() {
      s0 = window.event, dh();
    }
    function dh() {
      Rv = a1 = l1 = !1;
      var e = 0;
      is !== 0 && $y() && (e = is);
      for (var t = Gl(), a = null, i = _v; i !== null; ) {
        var o = i.next, f = bf(i, t);
        f === 0 ? (i.next = null, a === null ? _v = o : a.next = o, o === null && (pm = a)) : (a = i, (e !== 0 || f & 3) && (Rv = !0)), i = o;
      }
      Jl !== ns && Jl !== Ov || Uu(e), is !== 0 && (is = 0);
    }
    function bf(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - kl(f), h = 1 << d, y = o[d];
        y === -1 ? (!(h & a) || h & i) && (o[d] = Pr(h, t)) : y <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = Xt, a = Ie, a = Sc(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Wr
      ), i = e.callbackNode, a === 0 || e === t && (Nt === Lr || Nt === Vr) || e.cancelPendingCommit !== null)
        return i !== null && hh(i), e.callbackNode = null, e.callbackPriority = 0;
      if (!(a & 3) || gl(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || G.actQueue !== null && i !== u1)
          hh(i);
        else return t;
        switch (Ul(a)) {
          case Rl:
          case Wl:
            a = qh;
            break;
          case ia:
            a = so;
            break;
          case dc:
            a = Gh;
            break;
          default:
            a = so;
        }
        return i = Zy.bind(null, e), G.actQueue !== null ? (G.actQueue.push(i), a = u1) : a = vp(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && hh(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Zy(e, t) {
      if (iv = uv = !1, s0 = window.event, Jl !== ns && Jl !== Ov)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (Di === Av && (Di = WS), ir() && e.callbackNode !== a)
        return null;
      var i = Ie;
      return i = Sc(
        e,
        e === Xt ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Wr
      ), i === 0 ? null : (lg(
        e,
        i,
        t
      ), bf(e, Gl()), e.callbackNode != null && e.callbackNode === a ? Zy.bind(null, e) : null);
    }
    function fr(e, t) {
      if (ir()) return null;
      uv = iv, iv = !1, lg(e, t, !0);
    }
    function hh(e) {
      e !== u1 && e !== null && jh(e);
    }
    function cg() {
      G.actQueue !== null && G.actQueue.push(function() {
        return dh(), null;
      }), dT(function() {
        (ht & (Il | nu)) !== fa ? vp(
          Sp,
          ig
        ) : dh();
      });
    }
    function Jy() {
      if (is === 0) {
        var e = Yr;
        e === 0 && (e = qf, qf <<= 1, !(qf & 261888) && (qf = 256)), is = e;
      }
      return is;
    }
    function pt(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (yt(e, "action"), vs("" + e));
    }
    function Ct(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function ut(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = pt(
          (o[za] || null).action
        ), d = i.submitter;
        d && (t = (t = d[za] || null) ? pt(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new Kg(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (is !== 0) {
                    var y = d ? Ct(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), si(
                      a,
                      p,
                      null,
                      y
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), y = d ? Ct(
                    o,
                    d
                  ) : new FormData(o), p = {
                    pending: !0,
                    data: y,
                    method: o.method,
                    action: f
                  }, Object.freeze(p), si(
                    a,
                    p,
                    f,
                    y
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function et(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        gS(i);
      }
      e.currentTarget = null;
    }
    function Ot(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], y = h.instance, p = h.currentTarget;
              if (h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? ce(
                y,
                et,
                f,
                h,
                p
              ) : et(f, h, p), o = y;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? ce(
                y,
                et,
                f,
                h,
                p
              ) : et(f, h, p), o = y;
            }
        }
      }
    }
    function Ue(e, t) {
      i1.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[ho];
      a === void 0 && (a = t[ho] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (mh(t, e, 2, !1), a.add(i));
    }
    function Hu(e, t, a) {
      i1.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), mh(
        a,
        e,
        i,
        t
      );
    }
    function uc(e) {
      if (!e[Mv]) {
        e[Mv] = !0, Qg.forEach(function(a) {
          a !== "selectionchange" && (i1.has(a) || Hu(a, !1, e), Hu(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Mv] || (t[Mv] = !0, Hu("selectionchange", !1, t));
      }
    }
    function mh(e, t, a, i) {
      switch (Rh(t)) {
        case Rl:
          var o = cp;
          break;
        case Wl:
          o = $l;
          break;
        default:
          o = op;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !cS || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function $n(e, t, a, i, o) {
      var f = i;
      if (!(t & 1) && !(t & 2) && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var y = d.tag;
                if ((y === 3 || y === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = I(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      rd(function() {
        var p = f, z = Hn(a), R = [];
        e: {
          var E = G1.get(e);
          if (E !== void 0) {
            var x = Kg, ne = e;
            switch (e) {
              case "keypress":
                if (Ss(a) === 0) break e;
              case "keydown":
              case "keyup":
                x = gE;
                break;
              case "focusin":
                ne = "focus", x = rS;
                break;
              case "focusout":
                ne = "blur", x = rS;
                break;
              case "beforeblur":
              case "afterblur":
                x = rS;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                x = z1;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                x = uE;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                x = bE;
                break;
              case j1:
              case Y1:
              case x1:
                x = oE;
                break;
              case q1:
                x = TE;
                break;
              case "scroll":
              case "scrollend":
                x = aE;
                break;
              case "wheel":
                x = OE;
                break;
              case "copy":
              case "cut":
              case "paste":
                x = sE;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                x = _1;
                break;
              case "toggle":
              case "beforetoggle":
                x = DE;
            }
            var oe = (t & 4) !== 0, Zt = !oe && (e === "scroll" || e === "scrollend"), ft = oe ? E !== null ? E + "Capture" : null : E;
            oe = [];
            for (var b = p, T; b !== null; ) {
              var O = b;
              if (T = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || T === null || ft === null || (O = du(b, ft), O != null && oe.push(
                Gt(
                  b,
                  O,
                  T
                )
              )), Zt) break;
              b = b.return;
            }
            0 < oe.length && (E = new x(
              E,
              ne,
              null,
              a,
              z
            ), R.push({
              event: E,
              listeners: oe
            }));
          }
        }
        if (!(t & 7)) {
          e: {
            if (E = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", E && a !== Op && (ne = a.relatedTarget || a.fromElement) && (I(ne) || ne[bi]))
              break e;
            if ((x || E) && (E = z.window === z ? z : (E = z.ownerDocument) ? E.defaultView || E.parentWindow : window, x ? (ne = a.relatedTarget || a.toElement, x = p, ne = ne ? I(ne) : null, ne !== null && (Zt = lt(ne), oe = ne.tag, ne !== Zt || oe !== 5 && oe !== 27 && oe !== 6) && (ne = null)) : (x = null, ne = p), x !== ne)) {
              if (oe = z1, O = "onMouseLeave", ft = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (oe = _1, O = "onPointerLeave", ft = "onPointerEnter", b = "pointer"), Zt = x == null ? E : de(x), T = ne == null ? E : de(ne), E = new oe(
                O,
                b + "leave",
                x,
                a,
                z
              ), E.target = Zt, E.relatedTarget = T, O = null, I(z) === p && (oe = new oe(
                ft,
                b + "enter",
                ne,
                a,
                z
              ), oe.target = T, oe.relatedTarget = Zt, O = oe), Zt = O, x && ne)
                t: {
                  for (oe = lo, ft = x, b = ne, T = 0, O = ft; O; O = oe(O))
                    T++;
                  O = 0;
                  for (var Z = b; Z; Z = oe(Z))
                    O++;
                  for (; 0 < T - O; )
                    ft = oe(ft), T--;
                  for (; 0 < O - T; )
                    b = oe(b), O--;
                  for (; T--; ) {
                    if (ft === b || b !== null && ft === b.alternate) {
                      oe = ft;
                      break t;
                    }
                    ft = oe(ft), b = oe(b);
                  }
                  oe = null;
                }
              else oe = null;
              x !== null && yh(
                R,
                E,
                x,
                oe,
                !1
              ), ne !== null && Zt !== null && yh(
                R,
                Zt,
                ne,
                oe,
                !0
              );
            }
          }
          e: {
            if (E = p ? de(p) : window, x = E.nodeName && E.nodeName.toLowerCase(), x === "select" || x === "input" && E.type === "file")
              var ue = ji;
            else if (Um(E))
              if (N1)
                ue = As;
              else {
                ue = Hm;
                var xe = Kv;
              }
            else
              x = E.nodeName, !x || x.toLowerCase() !== "input" || E.type !== "checkbox" && E.type !== "radio" ? p && ru(p.elementType) && (ue = ji) : ue = Nm;
            if (ue && (ue = ue(e, p))) {
              Es(
                R,
                ue,
                a,
                z
              );
              break e;
            }
            xe && xe(e, E, p), e === "focusout" && p && E.type === "number" && p.memoizedProps.value != null && Tm(E, "number", E.value);
          }
          switch (xe = p ? de(p) : window, e) {
            case "focusin":
              (Um(xe) || xe.contentEditable === "true") && (Kh = xe, hS = p, Up = null);
              break;
            case "focusout":
              Up = hS = Kh = null;
              break;
            case "mousedown":
              mS = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              mS = !1, M0(
                R,
                a,
                z
              );
              break;
            case "selectionchange":
              if (CE) break;
            case "keydown":
            case "keyup":
              M0(
                R,
                a,
                z
              );
          }
          var Ee;
          if (dS)
            e: {
              switch (e) {
                case "compositionstart":
                  var ge = "onCompositionStart";
                  break e;
                case "compositionend":
                  ge = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  ge = "onCompositionUpdate";
                  break e;
              }
              ge = void 0;
            }
          else
            Jh ? Xo(e, a) && (ge = "onCompositionEnd") : e === "keydown" && a.keyCode === R1 && (ge = "onCompositionStart");
          ge && (M1 && a.locale !== "ko" && (Jh || ge !== "onCompositionStart" ? ge === "onCompositionEnd" && Jh && (Ee = Dc()) : (Lf = z, oS = "value" in Lf ? Lf.value : Lf.textContent, Jh = !0)), xe = kn(
            p,
            ge
          ), 0 < xe.length && (ge = new D1(
            ge,
            e,
            null,
            a,
            z
          ), R.push({
            event: ge,
            listeners: xe
          }), Ee ? ge.data = Ee : (Ee = ei(a), Ee !== null && (ge.data = Ee)))), (Ee = RE ? Cm(e, a) : dd(e, a)) && (ge = kn(
            p,
            "onBeforeInput"
          ), 0 < ge.length && (xe = new dE(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            z
          ), R.push({
            event: xe,
            listeners: ge
          }), xe.data = Ee)), ut(
            R,
            e,
            p,
            a,
            z
          );
        }
        Ot(R, t);
      });
    }
    function Gt(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function kn(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = du(e, a), o != null && i.unshift(
          Gt(e, o, f)
        ), o = du(e, t), o != null && i.push(
          Gt(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function lo(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function yh(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === i) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = du(a, f), p != null && d.unshift(
          Gt(a, p, y)
        )) : o || (p = du(a, f), p != null && d.push(
          Gt(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function Ta(e, t) {
      O0(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || A1 || (A1 = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Gu,
        possibleRegistrationNames: Xf
      };
      ru(e) || typeof t.is == "string" || Jv(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function ll(e, t, a, i) {
      t !== a && (a = Wn(a), Wn(t) !== a && (i[e] = t));
    }
    function sr(e, t, a) {
      t.forEach(function(i) {
        a[yi(i)] = i === "style" ? ic(e) : e.getAttribute(i);
      });
    }
    function al(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function ph(e, t) {
      return e = e.namespaceURI === Xe || e.namespaceURI === Ke ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function Wn(e) {
      return Ga(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        Ri(e)
      ), iu(e)), (typeof e == "string" ? e : "" + e).replace(aT, `
`).replace(nT, "");
    }
    function Ky(e, t) {
      return t = Wn(t), Wn(e) === t;
    }
    function St(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (gs(i, t, !1), t === "body" || t === "textarea" && i === "" || zc(e, i)) : (typeof i == "number" || typeof i == "bigint") && (gs("" + i, t, !1), t !== "body" && zc(e, "" + i));
          break;
        case "className":
          ms(e, "class", i);
          break;
        case "tabIndex":
          ms(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          ms(e, a, i);
          break;
        case "style":
          _m(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            ms(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          yt(i, a), i = vs("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Hv || (Hv = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Uv || (Uv = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Cv ? t !== "button" || o.type == null || o.type === "submit" || Cv ? typeof i == "function" && (o.name == null || o2 || (o2 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Hv || (Hv = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Uv || (Uv = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Cv = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Cv = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && St(e, t, "name", o.name, o, null), St(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), St(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), St(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (St(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), St(e, t, "method", o.method, o, null), St(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          yt(i, a), i = vs("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && al(a, i), e.onclick = mn);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && al(a, i), Ue("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && al(a, i), Ue("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          yt(i, a), a = vs("" + i), e.setAttributeNS(Kr, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (yt(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || Nv[a] || (Nv[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (yt(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (yt(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (yt(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          Ue("beforetoggle", e), Ue("toggle", e), Bo(e, "popover", i);
          break;
        case "xlinkActuate":
          ou(
            e,
            Kr,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          ou(
            e,
            Kr,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          ou(
            e,
            Kr,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          ou(
            e,
            Kr,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          ou(
            e,
            Kr,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          ou(
            e,
            Kr,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          ou(
            e,
            c1,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          ou(
            e,
            c1,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          ou(
            e,
            c1,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Bo(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          f2 || i == null || typeof i != "object" || (f2 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = T0(a), Bo(e, a, i)) : Gu.hasOwnProperty(a) && i != null && typeof i != "function" && al(a, i);
      }
    }
    function Ef(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          _m(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? zc(e, i) : (typeof i == "number" || typeof i == "bigint") && zc(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && al(a, i), Ue("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && al(a, i), Ue("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && al(a, i), e.onclick = mn);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (Gu.hasOwnProperty(a))
            i != null && typeof i != "function" && al(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[za] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : Bo(e, a, i);
            }
      }
    }
    function kt(e, t, a) {
      switch (Ta(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          Ue("error", e), Ue("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    St(e, t, f, d, a, null);
                }
            }
          o && St(e, t, "srcSet", a.srcSet, a, null), i && St(e, t, "src", a.src, a, null);
          return;
        case "input":
          ta("input", a), Ue("invalid", e);
          var h = f = d = o = null, y = null, p = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var z = a[i];
              if (z != null)
                switch (i) {
                  case "name":
                    o = z;
                    break;
                  case "type":
                    d = z;
                    break;
                  case "checked":
                    y = z;
                    break;
                  case "defaultChecked":
                    p = z;
                    break;
                  case "value":
                    f = z;
                    break;
                  case "defaultValue":
                    h = z;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (z != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    St(e, t, i, z, a, null);
                }
            }
          sa(e, a), ad(
            e,
            f,
            h,
            y,
            p,
            d,
            o,
            !1
          );
          return;
        case "select":
          ta("select", a), Ue("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  St(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          nd(e, a), t = f, a = d, e.multiple = !!i, t != null ? fu(e, !!i, t, !1) : a != null && fu(e, !!i, a, !0);
          return;
        case "textarea":
          ta("textarea", a), Ue("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  St(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          Ec(e, a), jo(e, i, o, f);
          return;
        case "option":
          E0(e, a);
          for (y in a)
            if (a.hasOwnProperty(y) && (i = a[y], i != null))
              switch (y) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  St(e, t, y, i, a, null);
              }
          return;
        case "dialog":
          Ue("beforetoggle", e), Ue("toggle", e), Ue("cancel", e), Ue("close", e);
          break;
        case "iframe":
        case "object":
          Ue("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < c0.length; i++)
            Ue(c0[i], e);
          break;
        case "image":
          Ue("error", e), Ue("load", e);
          break;
        case "details":
          Ue("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Ue("error", e), Ue("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (p in a)
            if (a.hasOwnProperty(p) && (i = a[p], i != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  St(e, t, p, i, a, null);
              }
          return;
        default:
          if (ru(t)) {
            for (z in a)
              a.hasOwnProperty(z) && (i = a[z], i !== void 0 && Ef(
                e,
                t,
                z,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && St(e, t, h, i, a, null));
    }
    function Dl(e, t, a, i) {
      switch (Ta(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, y = null, p = null, z = null;
          for (x in a) {
            var R = a[x];
            if (a.hasOwnProperty(x) && R != null)
              switch (x) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = R;
                default:
                  i.hasOwnProperty(x) || St(
                    e,
                    t,
                    x,
                    null,
                    i,
                    R
                  );
              }
          }
          for (var E in i) {
            var x = i[E];
            if (R = a[E], i.hasOwnProperty(E) && (x != null || R != null))
              switch (E) {
                case "type":
                  f = x;
                  break;
                case "name":
                  o = x;
                  break;
                case "checked":
                  p = x;
                  break;
                case "defaultChecked":
                  z = x;
                  break;
                case "value":
                  d = x;
                  break;
                case "defaultValue":
                  h = x;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (x != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  x !== R && St(
                    e,
                    t,
                    E,
                    x,
                    i,
                    R
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || c2 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), c2 = !0), !t || i || i2 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), i2 = !0), Hi(
            e,
            d,
            h,
            y,
            p,
            z,
            f,
            o
          );
          return;
        case "select":
          x = d = h = E = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  x = y;
                default:
                  i.hasOwnProperty(f) || St(
                    e,
                    t,
                    f,
                    null,
                    i,
                    y
                  );
              }
          for (o in i)
            if (f = i[o], y = a[o], i.hasOwnProperty(o) && (f != null || y != null))
              switch (o) {
                case "value":
                  E = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== y && St(
                    e,
                    t,
                    o,
                    f,
                    i,
                    y
                  );
              }
          i = h, t = d, a = x, E != null ? fu(e, !!t, E, !1) : !!a != !!t && (i != null ? fu(e, !!t, i, !0) : fu(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          x = E = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  St(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  E = o;
                  break;
                case "defaultValue":
                  x = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && St(e, t, d, o, i, f);
              }
          Tc(e, E, x);
          return;
        case "option":
          for (var ne in a)
            if (E = a[ne], a.hasOwnProperty(ne) && E != null && !i.hasOwnProperty(ne))
              switch (ne) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  St(
                    e,
                    t,
                    ne,
                    null,
                    i,
                    E
                  );
              }
          for (y in i)
            if (E = i[y], x = a[y], i.hasOwnProperty(y) && E !== x && (E != null || x != null))
              switch (y) {
                case "selected":
                  e.selected = E && typeof E != "function" && typeof E != "symbol";
                  break;
                default:
                  St(
                    e,
                    t,
                    y,
                    E,
                    i,
                    x
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var oe in a)
            E = a[oe], a.hasOwnProperty(oe) && E != null && !i.hasOwnProperty(oe) && St(
              e,
              t,
              oe,
              null,
              i,
              E
            );
          for (p in i)
            if (E = i[p], x = a[p], i.hasOwnProperty(p) && E !== x && (E != null || x != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (E != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  St(
                    e,
                    t,
                    p,
                    E,
                    i,
                    x
                  );
              }
          return;
        default:
          if (ru(t)) {
            for (var Zt in a)
              E = a[Zt], a.hasOwnProperty(Zt) && E !== void 0 && !i.hasOwnProperty(Zt) && Ef(
                e,
                t,
                Zt,
                void 0,
                i,
                E
              );
            for (z in i)
              E = i[z], x = a[z], !i.hasOwnProperty(z) || E === x || E === void 0 && x === void 0 || Ef(
                e,
                t,
                z,
                E,
                i,
                x
              );
            return;
          }
      }
      for (var ft in a)
        E = a[ft], a.hasOwnProperty(ft) && E != null && !i.hasOwnProperty(ft) && St(e, t, ft, null, i, E);
      for (R in i)
        E = i[R], x = a[R], !i.hasOwnProperty(R) || E === x || E == null && x == null || St(e, t, R, E, i, x);
    }
    function yi(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function ic(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function Nu(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (ea(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || me.has(f) ? (ea(d, f), i += o + f.replace(w, "-$1").toLowerCase().replace(fe, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(w, "-$1").toLowerCase().replace(fe, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = Wn(i), Wn(t) !== i && (a.style = ic(e)));
      }
    }
    function Ua(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (yt(i, t), e === "" + i)
              return;
        }
      ll(t, e, i, f);
    }
    function gh(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      ll(t, e, i, f);
    }
    function vh(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (yt(i, a), e === "" + i)
              return;
        }
      ll(t, e, i, f);
    }
    function Tf(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (yt(i, t), e === "" + i))
              return;
        }
      ll(t, e, i, f);
    }
    function rr(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (yt(i, t), a = vs("" + i), e === a)
              return;
        }
      ll(t, e, i, f);
    }
    function Ha(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (ru(t)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (Gu.hasOwnProperty(y))
                typeof p != "function" && al(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || ll(
                      "children",
                      e.textContent,
                      p,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = ph(e, p), ll(
                      y,
                      d,
                      p,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(y), Nu(e, p, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(y.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      y
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = Ui(
                      e,
                      "class",
                      p
                    ), ll(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    i.context === _o && t !== "svg" && t !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = Ui(
                      e,
                      y,
                      p
                    ), ll(
                      y,
                      d,
                      p,
                      o
                    );
                }
            }
          }
      } else
        for (p in a)
          if (a.hasOwnProperty(p) && (y = a[p], y != null)) {
            if (Gu.hasOwnProperty(p))
              typeof y != "function" && al(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || ll(
                    "children",
                    e.textContent,
                    y,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, y = y ? y.__html : void 0, y != null && (y = ph(e, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  Ua(
                    e,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Ua(
                    e,
                    p,
                    "tabindex",
                    y,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(p), Nu(e, y, o);
                  continue;
                case "multiple":
                  f.delete(p), ll(
                    p,
                    e.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), ll(
                    p,
                    e.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), ll(
                    p,
                    e.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(p), d = e.getAttribute("data"), ll(
                      p,
                      d,
                      y,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(y !== "" || t === "a" && p === "href" || t === "object" && p === "data")) {
                    console.error(
                      p === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      p,
                      p
                    );
                    continue;
                  }
                  rr(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(p), typeof y == "function") {
                    f.delete(p.toLowerCase()), p === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === uT) {
                    f.delete(p.toLowerCase()), ll(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  rr(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  rr(
                    e,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  vh(
                    e,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  vh(
                    e,
                    p,
                    "spellcheck",
                    y,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  vh(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  gh(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var z = d = p, R = o;
                    if (f.delete(z), h = h.getAttribute(z), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (y === !1) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (y === !0 && h === "") break e;
                          break;
                        default:
                          if (yt(y, d), h === "" + y)
                            break e;
                      }
                    ll(
                      d,
                      h,
                      y,
                      R
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, z = d = p, R = o, f.delete(z), h = h.getAttribute(z), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(y) || 1 > y) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(y) || 1 > y) && (yt(y, d), h === "" + y))
                            break e;
                      }
                    ll(
                      d,
                      h,
                      y,
                      R
                    );
                  }
                  continue;
                case "rowSpan":
                  Tf(
                    e,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  Tf(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Ua(
                    e,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Ua(
                    e,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Ua(
                    e,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Ua(
                    e,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Ua(
                    e,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Ua(
                    e,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Ua(
                    e,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Ua(
                    e,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Ua(
                    e,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Ua(
                    e,
                    p,
                    "xml:space",
                    y,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  y !== "" || Nv[p] || (Nv[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), gh(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
                    h = T0(p), d = !1, i.context === _o && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (z = p.toLowerCase(), z = eu.hasOwnProperty(
                      z
                    ) && eu[z] || null, z !== null && z !== p && (d = !0, f.delete(z)), f.delete(h));
                    e: if (z = e, R = h, h = y, hn(R))
                      if (z.hasAttribute(R))
                        z = z.getAttribute(
                          R
                        ), yt(
                          h,
                          R
                        ), h = z === "" + h ? h : z;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (z = R.toLowerCase().slice(0, 5), z !== "data-" && z !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || ll(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && sr(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function og(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function Aa(e) {
      switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return !0;
        default:
          return !1;
      }
    }
    function fg() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), i = 0; i < a.length; i++) {
          var o = a[i], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && Aa(d)) {
            for (d = 0, h = o.responseEnd, i += 1; i < a.length; i++) {
              var y = a[i], p = y.startTime;
              if (p > h) break;
              var z = y.transferSize, R = y.initiatorType;
              z && Aa(R) && (y = y.responseEnd, d += z * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--i, t += 8 * (f + d) / (o.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    function dr(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function sg(e) {
      switch (e) {
        case Ke:
          return vm;
        case Xe:
          return jv;
        default:
          return _o;
      }
    }
    function pi(e, t) {
      if (e === _o)
        switch (t) {
          case "svg":
            return vm;
          case "math":
            return jv;
          default:
            return _o;
        }
      return e === vm && t === "foreignObject" ? _o : e;
    }
    function Af(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function $y() {
      var e = window.event;
      return e && e.type === "popstate" ? e === r1 ? !1 : (r1 = e, !0) : (r1 = null, !1);
    }
    function Bu() {
      var e = window.event;
      return e && e !== s0 ? e.type : null;
    }
    function Of() {
      var e = window.event;
      return e && e !== s0 ? e.timeStamp : -1.1;
    }
    function rg(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function dg(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function hg() {
    }
    function Sh(e, t, a, i) {
      Dl(e, t, a, i), e[za] = i;
    }
    function bh(e) {
      zc(e, "");
    }
    function eS(e, t, a) {
      e.nodeValue = a;
    }
    function mg(e) {
      if (!e.__reactWarnedAboutChildrenConflict) {
        var t = e[za] || null;
        if (t !== null) {
          var a = ae(e);
          a !== null && (typeof t.children == "string" || typeof t.children == "number" ? (e.__reactWarnedAboutChildrenConflict = !0, ce(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })) : t.dangerouslySetInnerHTML != null && (e.__reactWarnedAboutChildrenConflict = !0, ce(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })));
        }
      }
    }
    function cc(e) {
      return e === "head";
    }
    function yg(e, t) {
      e.removeChild(t);
    }
    function pg(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function ao(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === f0 || a === Bv) {
            if (i === 0) {
              e.removeChild(o), co(t);
              return;
            }
            i--;
          } else if (a === o0 || a === cs || a === kr || a === gm || a === $r)
            i++;
          else if (a === cT)
            vi(
              e.ownerDocument.documentElement
            );
          else if (a === fT) {
            a = e.ownerDocument.head, vi(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[wf] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === oT && vi(e.ownerDocument.body);
        a = o;
      } while (a);
      co(t);
    }
    function hr(e, t) {
      var a = e;
      e = 0;
      do {
        var i = a.nextSibling;
        if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), i && i.nodeType === 8)
          if (a = i.data, a === f0) {
            if (e === 0) break;
            e--;
          } else
            a !== o0 && a !== cs && a !== kr && a !== gm || e++;
        a = i;
      } while (a);
    }
    function gg(e) {
      hr(e, !0);
    }
    function vg(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Sg(e) {
      e.nodeValue = "";
    }
    function bg(e) {
      hr(e, !1);
    }
    function Eg(e, t) {
      t = t[sT], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function Tg(e, t) {
      e.nodeValue = t;
    }
    function zf(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            zf(a), M(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function Ag(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[wf])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          yt(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = ln(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Og(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = ln(e.nextSibling), e === null)) return null;
      return e;
    }
    function zt(e, t) {
      for (; e.nodeType !== 8; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = ln(e.nextSibling), e === null)) return null;
      return e;
    }
    function mr(e) {
      return e.data === cs || e.data === kr;
    }
    function ky(e) {
      return e.data === gm || e.data === cs && e.ownerDocument.readyState !== r2;
    }
    function zg(e, t) {
      var a = e.ownerDocument;
      if (e.data === kr)
        e._reactRetry = t;
      else if (e.data !== cs || a.readyState !== r2)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function ln(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === o0 || t === gm || t === cs || t === kr || t === $r || t === o1 || t === s2)
            break;
          if (t === f0 || t === Bv)
            return null;
        }
      }
      return e;
    }
    function Dg(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[yi(f.name)] = f.name.toLowerCase() === "style" ? ic(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? e.data === $r ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : e.nodeValue;
    }
    function _g(e, t, a) {
      return a === null || a[iT] !== !0 ? (e.nodeValue === t ? e = null : (t = Wn(t), e = Wn(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Df(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === f0 || a === Bv) {
            if (t === 0)
              return ln(e.nextSibling);
            t--;
          } else
            a !== o0 && a !== gm && a !== cs && a !== kr && a !== $r || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function no(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === o0 || a === gm || a === cs || a === kr || a === $r) {
            if (t === 0) return e;
            t--;
          } else
            a !== f0 && a !== Bv || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function Wy(e) {
      co(e);
    }
    function Eh(e) {
      co(e);
    }
    function Fy(e) {
      co(e);
    }
    function gi(e, t, a, i, o) {
      switch (o && ps(e, i.ancestorInfo), t = dr(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function ju(e, t, a, i) {
      if (!a[bi] && ae(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      kt(a, e, t), a[Wt] = i, a[za] = t;
    }
    function vi(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      M(e);
    }
    function Th(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Iy(e, t, a) {
      var i = Sm;
      if (i && typeof t == "string" && t) {
        var o = Rt(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), g2.has(o) || (g2.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), kt(t, "link", e), he(t), i.head.appendChild(t)));
      }
    }
    function Py(e, t, a, i) {
      var o = (o = an.current) ? Th(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = uo(a.href), t = Re(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = uo(a.href);
            var f = Re(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Fr, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              pr(e)
            )) && !f._p && (d.instance = f, d.state.loading = r0 | Wu), !Fu.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              Fu.set(e, h), f || Rg(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + yr(t) + `
  + ` + yr(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + yr(t) + `
  + ` + yr(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = io(a), t = Re(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function yr(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : nn.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : nn.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : nn.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function uo(e) {
      return 'href="' + Rt(e) + '"';
    }
    function pr(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function Ah(e) {
      return ke({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function Rg(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = r0 : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= r0;
      }), t.addEventListener("error", function() {
        return i.loading |= y2;
      }), kt(t, "link", a), he(t), e.head.appendChild(t));
    }
    function io(e) {
      return '[src="' + Rt(e) + '"]';
    }
    function gr(e) {
      return "script[async]" + e;
    }
    function Oh(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + Rt(a.href) + '"]'
            );
            if (i)
              return t.instance = i, he(i), i;
            var o = ke({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), he(i), kt(i, "style", o), _f(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = uo(a.href);
            var f = e.querySelector(
              pr(o)
            );
            if (f)
              return t.state.loading |= Wu, t.instance = f, he(f), f;
            i = Ah(a), (o = Fu.get(o)) && ep(i, o), f = (e.ownerDocument || e).createElement("link"), he(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), kt(f, "link", i), t.state.loading |= Wu, _f(f, a.precedence, e), t.instance = f;
          case "script":
            return f = io(a.src), (o = e.querySelector(
              gr(f)
            )) ? (t.instance = o, he(o), o) : (i = a, (o = Fu.get(f)) && (i = ke({}, a), tp(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), he(o), kt(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & Wu) === Fr && (i = t.instance, t.state.loading |= Wu, _f(i, a.precedence, e));
      return t.instance;
    }
    function _f(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function ep(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function tp(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function Rf(e, t, a) {
      if (Yv === null) {
        var i = /* @__PURE__ */ new Map(), o = Yv = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = Yv, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[wf] || f[Wt] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== Ke) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function Mg(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function Cg(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === vm || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = og(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function at(e) {
      return !(e.type === "stylesheet" && (e.state.loading & p2) === Fr);
    }
    function lp(e, t, a, i) {
      if (a.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (a.state.loading & Wu) === Fr) {
        if (a.instance === null) {
          var o = uo(i.href), f = t.querySelector(
            pr(o)
          );
          if (f) {
            t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Mf.bind(e), t.then(e, e)), a.state.loading |= Wu, a.instance = f, he(f);
            return;
          }
          f = t.ownerDocument || t, i = Ah(i), (o = Fu.get(o)) && ep(i, o), f = f.createElement("link"), he(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), kt(f, "link", i), a.instance = f;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & p2) === Fr && (e.count++, a = Mf.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
      }
    }
    function zh(e, t) {
      return e.stylesheets && e.count === 0 && vr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
        var i = setTimeout(function() {
          if (e.stylesheets && vr(e, e.stylesheets), e.unsuspend) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        }, hT + t);
        0 < e.imgBytes && h1 === 0 && (h1 = 125 * fg() * yT);
        var o = setTimeout(
          function() {
            if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && vr(e, e.stylesheets), e.unsuspend)) {
              var f = e.unsuspend;
              e.unsuspend = null, f();
            }
          },
          (e.imgBytes > h1 ? 50 : mT) + t
        );
        return e.unsuspend = a, function() {
          e.unsuspend = null, clearTimeout(i), clearTimeout(o);
        };
      } : null;
    }
    function Mf() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          vr(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function vr(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, xv = /* @__PURE__ */ new Map(), t.forEach(ap, e), xv = null, Mf.call(e));
    }
    function ap(e, t) {
      if (!(t.state.loading & Wu)) {
        var a = xv.get(e);
        if (a) var i = a.get(m1);
        else {
          a = /* @__PURE__ */ new Map(), xv.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(m1, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(m1, o), a.set(d, o), this.count++, i = Mf.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= Wu;
      }
    }
    function Sr(e, t, a, i, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Wr, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ho(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ho(0), this.hiddenUpdates = Ho(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function br(e, t, a, i, o, f, d, h, y, p, z, R) {
      return e = new Sr(
        e,
        t,
        a,
        d,
        y,
        p,
        z,
        R,
        h
      ), t = GE, f === !0 && (t |= ja | Ei), t |= We, f = H(3, null, null, t), e.current = f, f.stateNode = e, t = Od(), jc(t), e.pooledCache = t, jc(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, nt(f), e;
    }
    function Ug(e) {
      return e ? (e = Jf, e) : Jf;
    }
    function Dh(e, t, a, i, o, f) {
      if (_l && typeof _l.onScheduleFiberRoot == "function")
        try {
          _l.onScheduleFiberRoot(ro, i, a);
        } catch (d) {
          xu || (xu = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = Ug(o), i.context === null ? i.context = o : i.pendingContext = o, Yu && Ba !== null && !E2 && (E2 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        se(Ba) || "Unknown"
      )), i = Ol(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = vu(e, i, t), a !== null && (yu(t, "root.render()", null), Be(a, e, t), En(a, e, t));
    }
    function Hg(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function np(e, t) {
      Hg(e, t), (e = e.alternate) && Hg(e, t);
    }
    function up(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = la(e, 67108864);
        t !== null && Be(t, e, 67108864), np(e, 67108864);
      }
    }
    function ip(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = na(e);
        t = dn(t);
        var a = la(e, t);
        a !== null && Be(a, e, t), np(e, t);
      }
    }
    function Ut() {
      return Ba;
    }
    function cp(e, t, a, i) {
      var o = G.T;
      G.T = null;
      var f = bt.p;
      try {
        bt.p = Rl, op(e, t, a, i);
      } finally {
        bt.p = f, G.T = o;
      }
    }
    function $l(e, t, a, i) {
      var o = G.T;
      G.T = null;
      var f = bt.p;
      try {
        bt.p = Wl, op(e, t, a, i);
      } finally {
        bt.p = f, G.T = o;
      }
    }
    function op(e, t, a, i) {
      if (Gv) {
        var o = _h(i);
        if (o === null)
          $n(
            e,
            t,
            i,
            wv,
            a
          ), Mh(e, i);
        else if (Ng(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (Mh(e, i), t & 4 && -1 < gT.indexOf(e)) {
          for (; o !== null; ) {
            var f = ae(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = cu(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - kl(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      Ca(f), (ht & (Il | nu)) === fa && (Tv = Gl() + kb, Uu(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = la(f, 2), h !== null && Be(h, f, 2), tn(), np(f, 2);
              }
            if (f = _h(i), f === null && $n(
              e,
              t,
              i,
              wv,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          $n(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function _h(e) {
      return e = Hn(e), fp(e);
    }
    function fp(e) {
      if (wv = null, e = I(e), e !== null) {
        var t = lt(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = Tl(t), e !== null) return e;
            e = null;
          } else if (a === 31) {
            if (e = Bt(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return wv = e, null;
    }
    function Rh(e) {
      switch (e) {
        case "beforetoggle":
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
        case "toggle":
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
          return Rl;
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
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Wl;
        case "message":
          switch (Dr()) {
            case Sp:
              return Rl;
            case qh:
              return Wl;
            case so:
            case Gg:
              return ia;
            case Gh:
              return dc;
            default:
              return ia;
          }
        default:
          return ia;
      }
    }
    function Mh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          os = null;
          break;
        case "dragenter":
        case "dragleave":
          fs = null;
          break;
        case "mouseover":
        case "mouseout":
          ss = null;
          break;
        case "pointerover":
        case "pointerout":
          h0.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          m0.delete(t.pointerId);
      }
    }
    function oc(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = ae(t), t !== null && up(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Ng(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return os = oc(
            os,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return fs = oc(
            fs,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return ss = oc(
            ss,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return h0.set(
            f,
            oc(
              h0.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, m0.set(
            f,
            oc(
              m0.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function sp(e) {
      var t = I(e.target);
      if (t !== null) {
        var a = lt(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = Tl(a), t !== null) {
              e.blockedOn = t, g(e.priority, function() {
                ip(a);
              });
              return;
            }
          } else if (t === 31) {
            if (t = Bt(a), t !== null) {
              e.blockedOn = t, g(e.priority, function() {
                ip(a);
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Cf(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = _h(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          Op !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), Op = o, a.target.dispatchEvent(i), Op === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), Op = null;
        } else
          return t = ae(a), t !== null && up(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function Ch(e, t, a) {
      Cf(e) && a.delete(t);
    }
    function tS() {
      y1 = !1, os !== null && Cf(os) && (os = null), fs !== null && Cf(fs) && (fs = null), ss !== null && Cf(ss) && (ss = null), h0.forEach(Ch), m0.forEach(Ch);
    }
    function Er(e, t) {
      e.blockedOn === t && (e.blockedOn = null, y1 || (y1 = !0, yl.unstable_scheduleCallback(
        yl.unstable_NormalPriority,
        tS
      )));
    }
    function Bg(e) {
      Xv !== e && (Xv = e, yl.unstable_scheduleCallback(
        yl.unstable_NormalPriority,
        function() {
          Xv === e && (Xv = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (fp(i || a) === null)
                continue;
              break;
            }
            var f = ae(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), si(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function co(e) {
      function t(y) {
        return Er(y, e);
      }
      os !== null && Er(os, e), fs !== null && Er(fs, e), ss !== null && Er(ss, e), h0.forEach(t), m0.forEach(t);
      for (var a = 0; a < rs.length; a++) {
        var i = rs[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < rs.length && (a = rs[0], a.blockedOn === null); )
        sp(a), a.blockedOn === null && rs.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[za] || null;
          if (typeof f == "function")
            d || Bg(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[za] || null)
                h = d.formAction;
              else if (fp(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), Bg(a);
          }
        }
    }
    function jg() {
      function e(f) {
        f.canIntercept && f.info === "react-transition" && f.intercept({
          handler: function() {
            return new Promise(function(d) {
              return o = d;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function t() {
        o !== null && (o(), o = null), i || setTimeout(a, 20);
      }
      function a() {
        if (!i && !navigation.transition) {
          var f = navigation.currentEntry;
          f && f.url != null && navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var i = !1, o = null;
        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
          i = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener(
            "navigatesuccess",
            t
          ), navigation.removeEventListener(
            "navigateerror",
            t
          ), o !== null && (o(), o = null);
        };
      }
    }
    function rp(e) {
      this._internalRoot = e;
    }
    function Fn(e) {
      this._internalRoot = e;
    }
    function dp(e) {
      e[bi] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var yl = $2(), Tr = Co, lS = k2(), ke = Object.assign, Yg = Symbol.for("react.element"), zn = Symbol.for("react.transitional.element"), fc = Symbol.for("react.portal"), Uf = Symbol.for("react.fragment"), Oa = Symbol.for("react.strict_mode"), Ar = Symbol.for("react.profiler"), Uh = Symbol.for("react.consumer"), In = Symbol.for("react.context"), Hf = Symbol.for("react.forward_ref"), oo = Symbol.for("react.suspense"), Na = Symbol.for("react.suspense_list"), Or = Symbol.for("react.memo"), ua = Symbol.for("react.lazy"), Pn = Symbol.for("react.activity"), aS = Symbol.for("react.memo_cache_sentinel"), xg = Symbol.iterator, Nf = Symbol.for("react.client.reference"), bl = Array.isArray, G = Tr.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, bt = lS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, nS = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), hp = [], mp = [], Si = -1, sc = jt(null), Bf = jt(null), an = jt(null), rc = jt(null), jf = 0, qg, fo, Yf, yp, zr, Hh, Nh;
    Oe.__reactDisabledLog = !0;
    var xf, pp, Bh = !1, gp = new (typeof WeakMap == "function" ? WeakMap : Map)(), Ba = null, Yu = !1, nn = Object.prototype.hasOwnProperty, vp = yl.unstable_scheduleCallback, jh = yl.unstable_cancelCallback, Yh = yl.unstable_shouldYield, xh = yl.unstable_requestPaint, Gl = yl.unstable_now, Dr = yl.unstable_getCurrentPriorityLevel, Sp = yl.unstable_ImmediatePriority, qh = yl.unstable_UserBlockingPriority, so = yl.unstable_NormalPriority, Gg = yl.unstable_LowPriority, Gh = yl.unstable_IdlePriority, bp = yl.log, wg = yl.unstable_setDisableYieldValue, ro = null, _l = null, xu = !1, qu = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", kl = Math.clz32 ? Math.clz32 : Mi, Ep = Math.log, wh = Math.LN2, qf = 256, _r = 262144, Gf = 4194304, Rl = 2, Wl = 8, ia = 32, dc = 268435456, Dn = Math.random().toString(36).slice(2), Wt = "__reactFiber$" + Dn, za = "__reactProps$" + Dn, bi = "__reactContainer$" + Dn, ho = "__reactEvents$" + Dn, uS = "__reactListeners$" + Dn, Xg = "__reactHandles$" + Dn, Rr = "__reactResources$" + Dn, wf = "__reactMarker$" + Dn, Qg = /* @__PURE__ */ new Set(), Gu = {}, Xf = {}, Lg = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Qf = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Tp = {}, Xh = {}, Qh = /[\n"\\]/g, Ap = !1, Vg = !1, Mr = !1, l = !1, n = !1, u = !1, c = ["value", "defaultValue"], s = !1, r = /["'&<>\n\t]|^\s|\s$/, m = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), v = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), A = v.concat(["button"]), j = "dd dt li option optgroup p rp rt".split(" "), L = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, K = {}, Y = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, w = /([A-Z])/g, fe = /^ms-/, ze = /^(?:webkit|moz|o)[A-Z]/, Ht = /^-ms-/, C = /-(.)/g, D = /;\s*$/, N = {}, J = {}, be = !1, dt = !1, me = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Xe = "http://www.w3.org/1998/Math/MathML", Ke = "http://www.w3.org/2000/svg", gt = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), eu = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Zg = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0,
      "aria-braillelabel": 0,
      "aria-brailleroledescription": 0,
      "aria-colindextext": 0,
      "aria-rowindextext": 0
    }, Lh = {}, F2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), I2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), A1 = !1, un = {}, O1 = /^on./, P2 = /^on[^A-Z]/, eE = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), tE = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), lE = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, Op = null, Vh = null, Zh = null, iS = !1, hc = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), cS = !1;
    if (hc)
      try {
        var zp = {};
        Object.defineProperty(zp, "passive", {
          get: function() {
            cS = !0;
          }
        }), window.addEventListener("test", zp, zp), window.removeEventListener("test", zp, zp);
      } catch {
        cS = !1;
      }
    var Lf = null, oS = null, Jg = null, Cr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Kg = Hl(Cr), Dp = ke({}, Cr, { view: 0, detail: 0 }), aE = Hl(Dp), fS, sS, _p, $g = ke({}, Dp, {
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
      getModifierState: bs,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== _p && (_p && e.type === "mousemove" ? (fS = e.screenX - _p.screenX, sS = e.screenY - _p.screenY) : sS = fS = 0, _p = e), fS);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : sS;
      }
    }), z1 = Hl($g), nE = ke({}, $g, { dataTransfer: 0 }), uE = Hl(nE), iE = ke({}, Dp, { relatedTarget: 0 }), rS = Hl(iE), cE = ke({}, Cr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), oE = Hl(cE), fE = ke({}, Cr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), sE = Hl(fE), rE = ke({}, Cr, { data: 0 }), D1 = Hl(
      rE
    ), dE = D1, hE = {
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
    }, mE = {
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
    }, yE = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, pE = ke({}, Dp, {
      key: function(e) {
        if (e.key) {
          var t = hE[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = Ss(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? mE[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: bs,
      charCode: function(e) {
        return e.type === "keypress" ? Ss(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Ss(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), gE = Hl(pE), vE = ke({}, $g, {
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
    }), _1 = Hl(vE), SE = ke({}, Dp, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: bs
    }), bE = Hl(SE), EE = ke({}, Cr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), TE = Hl(EE), AE = ke({}, $g, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), OE = Hl(AE), zE = ke({}, Cr, {
      newState: 0,
      oldState: 0
    }), DE = Hl(zE), _E = [9, 13, 27, 32], R1 = 229, dS = hc && "CompositionEvent" in window, Rp = null;
    hc && "documentMode" in document && (Rp = document.documentMode);
    var RE = hc && "TextEvent" in window && !Rp, M1 = hc && (!dS || Rp && 8 < Rp && 11 >= Rp), C1 = 32, U1 = String.fromCharCode(C1), H1 = !1, Jh = !1, ME = {
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
    }, Mp = null, Cp = null, N1 = !1;
    hc && (N1 = hd("input") && (!document.documentMode || 9 < document.documentMode));
    var cn = typeof Object.is == "function" ? Object.is : md, CE = hc && "documentMode" in document && 11 >= document.documentMode, Kh = null, hS = null, Up = null, mS = !1, $h = {
      animationend: _c("Animation", "AnimationEnd"),
      animationiteration: _c("Animation", "AnimationIteration"),
      animationstart: _c("Animation", "AnimationStart"),
      transitionrun: _c("Transition", "TransitionRun"),
      transitionstart: _c("Transition", "TransitionStart"),
      transitioncancel: _c("Transition", "TransitionCancel"),
      transitionend: _c("Transition", "TransitionEnd")
    }, yS = {}, B1 = {};
    hc && (B1 = document.createElement("div").style, "AnimationEvent" in window || (delete $h.animationend.animation, delete $h.animationiteration.animation, delete $h.animationstart.animation), "TransitionEvent" in window || delete $h.transitionend.transition);
    var j1 = Rc("animationend"), Y1 = Rc("animationiteration"), x1 = Rc("animationstart"), UE = Rc("transitionrun"), HE = Rc("transitionstart"), NE = Rc("transitioncancel"), q1 = Rc("transitionend"), G1 = /* @__PURE__ */ new Map(), pS = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    pS.push("scrollEnd");
    var w1 = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var BE = performance, X1 = function() {
        return BE.now();
      };
    else {
      var jE = Date;
      X1 = function() {
        return jE.now();
      };
    }
    var gS = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, YE = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", kg = 0, vS = 1, SS = 2, bS = 3, Wg = "– ", Fg = "+ ", Q1 = "  ", Ft = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", wu = "Components ⚛", ot = "Scheduler ⚛", rt = "Blocking", Vf = !1, mo = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: wu
    }, Zf = {
      start: -0,
      end: -0,
      detail: { devtools: mo }
    }, xE = ["Changed Props", ""], L1 = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", qE = ["Changed Props", L1], Hp = 1, yo = 2, Xu = [], kh = 0, ES = 0, Jf = {};
    Object.freeze(Jf);
    var Qu = null, Wh = null, He = 0, GE = 1, We = 2, ja = 8, Ei = 16, wE = 32, V1 = !1;
    try {
      var Z1 = Object.preventExtensions({});
    } catch {
      V1 = !0;
    }
    var TS = /* @__PURE__ */ new WeakMap(), Fh = [], Ih = 0, Ig = null, Np = 0, Lu = [], Vu = 0, Ur = null, po = 1, go = "", Da = null, It = null, it = !1, mc = !1, tu = null, Kf = null, Zu = !1, AS = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), OS = jt(null), zS = jt(null), J1 = {}, Pg = null, Ph = null, em = !1, XE = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, QE = yl.unstable_scheduleCallback, LE = yl.unstable_NormalPriority, wl = {
      $$typeof: In,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Xl = yl.unstable_now, ev = console.createTask ? console.createTask : function() {
      return null;
    }, Bp = 1, tv = 2, ca = -0, $f = -0, vo = -0, So = null, on = -1.1, Hr = -0, fl = -0, Ae = -1.1, Me = -1.1, nl = null, pl = !1, Nr = -0, yc = -1.1, jp = null, kf = 0, DS = null, _S = null, Br = -1.1, Yp = null, tm = -1.1, lv = -1.1, bo = -0, Eo = -1.1, Ju = -1.1, RS = 0, xp = null, K1 = null, $1 = null, Wf = -1.1, jr = null, Ff = -1.1, av = -1.1, k1 = -0, W1 = -0, nv = 0, VE = null, F1 = 0, qp = -1.1, uv = !1, iv = !1, Gp = null, MS = 0, Yr = 0, lm = null, I1 = G.S;
    G.S = function(e, t) {
      if (Kb = Gl(), typeof t == "object" && t !== null && typeof t.then == "function") {
        if (0 > Eo && 0 > Ju) {
          Eo = Xl();
          var a = Of(), i = Bu();
          (a !== Ff || i !== jr) && (Ff = -1.1), Wf = a, jr = i;
        }
        ai(e, t);
      }
      I1 !== null && I1(e, t);
    };
    var xr = jt(null), Ti = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, wp = [], Xp = [], Qp = [], Lp = [], Vp = [], Zp = [], qr = /* @__PURE__ */ new Set();
    Ti.recordUnsafeLifecycleWarnings = function(e, t) {
      qr.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && wp.push(e), e.mode & ja && typeof t.UNSAFE_componentWillMount == "function" && Xp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Qp.push(e), e.mode & ja && typeof t.UNSAFE_componentWillReceiveProps == "function" && Lp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Vp.push(e), e.mode & ja && typeof t.UNSAFE_componentWillUpdate == "function" && Zp.push(e));
    }, Ti.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < wp.length && (wp.forEach(function(h) {
        e.add(
          se(h) || "Component"
        ), qr.add(h.type);
      }), wp = []);
      var t = /* @__PURE__ */ new Set();
      0 < Xp.length && (Xp.forEach(function(h) {
        t.add(
          se(h) || "Component"
        ), qr.add(h.type);
      }), Xp = []);
      var a = /* @__PURE__ */ new Set();
      0 < Qp.length && (Qp.forEach(function(h) {
        a.add(
          se(h) || "Component"
        ), qr.add(h.type);
      }), Qp = []);
      var i = /* @__PURE__ */ new Set();
      0 < Lp.length && (Lp.forEach(
        function(h) {
          i.add(
            se(h) || "Component"
          ), qr.add(h.type);
        }
      ), Lp = []);
      var o = /* @__PURE__ */ new Set();
      0 < Vp.length && (Vp.forEach(function(h) {
        o.add(
          se(h) || "Component"
        ), qr.add(h.type);
      }), Vp = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < Zp.length && (Zp.forEach(function(h) {
        f.add(
          se(h) || "Component"
        ), qr.add(h.type);
      }), Zp = []), 0 < t.size) {
        var d = Q(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = Q(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = Q(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = Q(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = Q(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = Q(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var cv = /* @__PURE__ */ new Map(), P1 = /* @__PURE__ */ new Set();
    Ti.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & ja && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !P1.has(e.type) && (i = cv.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], cv.set(a, i)), i.push(e));
    }, Ti.flushLegacyContextWarning = function() {
      cv.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(se(o) || "Component"), P1.add(o.type);
          });
          var i = Q(a);
          ce(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, Ti.discardPendingWarnings = function() {
      wp = [], Xp = [], Qp = [], Lp = [], Vp = [], Zp = [], cv = /* @__PURE__ */ new Map();
    };
    var eb = {
      react_stack_bottom_frame: function(e, t, a) {
        var i = Yu;
        Yu = !0;
        try {
          return e(t, a);
        } finally {
          Yu = i;
        }
      }
    }, CS = eb.react_stack_bottom_frame.bind(eb), tb = {
      react_stack_bottom_frame: function(e) {
        var t = Yu;
        Yu = !0;
        try {
          return e.render();
        } finally {
          Yu = t;
        }
      }
    }, lb = tb.react_stack_bottom_frame.bind(tb), ab = {
      react_stack_bottom_frame: function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          Je(e, e.return, a);
        }
      }
    }, US = ab.react_stack_bottom_frame.bind(
      ab
    ), nb = {
      react_stack_bottom_frame: function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          Je(e, e.return, f);
        }
      }
    }, ub = nb.react_stack_bottom_frame.bind(
      nb
    ), ib = {
      react_stack_bottom_frame: function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, ZE = ib.react_stack_bottom_frame.bind(
      ib
    ), cb = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          Je(e, t, i);
        }
      }
    }, ob = cb.react_stack_bottom_frame.bind(
      cb
    ), fb = {
      react_stack_bottom_frame: function(e) {
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, JE = fb.react_stack_bottom_frame.bind(fb), sb = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a();
        } catch (i) {
          Je(e, t, i);
        }
      }
    }, KE = sb.react_stack_bottom_frame.bind(sb), rb = {
      react_stack_bottom_frame: function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, $E = rb.react_stack_bottom_frame.bind(rb), am = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), HS = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), ov = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), fv = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Gr = null, Jp = !1, nm = null, Kp = 0, Fe = null, NS, db = NS = !1, hb = {}, mb = {}, yb = {};
    Ce = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = se(e), o = i || "null";
        if (!hb[o]) {
          hb[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = se(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = se(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), ce(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var wr = Bl(!0), pb = Bl(!1), gb = 0, vb = 1, Sb = 2, BS = 3, If = !1, bb = !1, jS = null, YS = !1, um = jt(null), sv = jt(0), lu = jt(null), Ku = null, im = 1, $p = 2, Ml = jt(0), rv = 0, $u = 1, fn = 2, au = 4, sn = 8, cm, Eb = /* @__PURE__ */ new Set(), Tb = /* @__PURE__ */ new Set(), xS = /* @__PURE__ */ new Set(), Ab = /* @__PURE__ */ new Set(), To = 0, Ye = null, wt = null, Ql = null, dv = !1, om = !1, Xr = !1, hv = 0, kp = 0, Ao = null, kE = 0, WE = 25, q = null, ku = null, Oo = -1, Wp = !1, Fp = {
      readContext: vt,
      use: ci,
      useCallback: cl,
      useContext: cl,
      useEffect: cl,
      useImperativeHandle: cl,
      useLayoutEffect: cl,
      useInsertionEffect: cl,
      useMemo: cl,
      useReducer: cl,
      useRef: cl,
      useState: cl,
      useDebugValue: cl,
      useDeferredValue: cl,
      useTransition: cl,
      useSyncExternalStore: cl,
      useId: cl,
      useHostTransitionStatus: cl,
      useFormState: cl,
      useActionState: cl,
      useOptimistic: cl,
      useMemoCache: cl,
      useCacheRefresh: cl
    };
    Fp.useEffectEvent = cl;
    var qS = null, Ob = null, GS = null, zb = null, pc = null, Ai = null, mv = null;
    qS = {
      readContext: function(e) {
        return vt(e);
      },
      use: ci,
      useCallback: function(e, t) {
        return q = "useCallback", je(), ii(t), jd(e, t);
      },
      useContext: function(e) {
        return q = "useContext", je(), vt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", je(), ii(t), Zc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", je(), ii(a), Tu(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        q = "useInsertionEffect", je(), ii(t), Fi(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", je(), ii(t), pa(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", je(), ii(t);
        var a = G.H;
        G.H = pc;
        try {
          return ga(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", je();
        var i = G.H;
        G.H = pc;
        try {
          return Po(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(e) {
        return q = "useRef", je(), Bd(e);
      },
      useState: function(e) {
        q = "useState", je();
        var t = G.H;
        G.H = pc;
        try {
          return Ki(e);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", je();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", je(), nf(e, t);
      },
      useTransition: function() {
        return q = "useTransition", je(), Ii();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", je(), ef(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", je(), Vs();
      },
      useFormState: function(e, t) {
        return q = "useFormState", je(), Ns(), Wa(e, t);
      },
      useActionState: function(e, t) {
        return q = "useActionState", je(), Wa(e, t);
      },
      useOptimistic: function(e) {
        return q = "useOptimistic", je(), Vc(e);
      },
      useHostTransitionStatus: ri,
      useMemoCache: $a,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", je(), Yd();
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", je(), Qs(e);
      }
    }, Ob = {
      readContext: function(e) {
        return vt(e);
      },
      use: ci,
      useCallback: function(e, t) {
        return q = "useCallback", k(), jd(e, t);
      },
      useContext: function(e) {
        return q = "useContext", k(), vt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", k(), Zc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", k(), Tu(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        q = "useInsertionEffect", k(), Fi(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", k(), pa(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", k();
        var a = G.H;
        G.H = pc;
        try {
          return ga(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", k();
        var i = G.H;
        G.H = pc;
        try {
          return Po(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(e) {
        return q = "useRef", k(), Bd(e);
      },
      useState: function(e) {
        q = "useState", k();
        var t = G.H;
        G.H = pc;
        try {
          return Ki(e);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", k();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", k(), nf(e, t);
      },
      useTransition: function() {
        return q = "useTransition", k(), Ii();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", k(), ef(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", k(), Vs();
      },
      useActionState: function(e, t) {
        return q = "useActionState", k(), Wa(e, t);
      },
      useFormState: function(e, t) {
        return q = "useFormState", k(), Ns(), Wa(e, t);
      },
      useOptimistic: function(e) {
        return q = "useOptimistic", k(), Vc(e);
      },
      useHostTransitionStatus: ri,
      useMemoCache: $a,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", k(), Yd();
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", k(), Qs(e);
      }
    }, GS = {
      readContext: function(e) {
        return vt(e);
      },
      use: ci,
      useCallback: function(e, t) {
        return q = "useCallback", k(), Ln(e, t);
      },
      useContext: function(e) {
        return q = "useContext", k(), vt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", k(), zl(2048, sn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", k(), af(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", k(), zl(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", k(), zl(4, au, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", k();
        var a = G.H;
        G.H = Ai;
        try {
          return $t(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", k();
        var i = G.H;
        G.H = Ai;
        try {
          return Xc(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", k(), Tt().memoizedState;
      },
      useState: function() {
        q = "useState", k();
        var e = G.H;
        G.H = Ai;
        try {
          return Xc(ka);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", k();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", k(), Au(e, t);
      },
      useTransition: function() {
        return q = "useTransition", k(), L0();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", k(), Lc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", k(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", k(), Ns(), ki(e);
      },
      useActionState: function(e) {
        return q = "useActionState", k(), ki(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", k(), Gs(e, t);
      },
      useHostTransitionStatus: ri,
      useMemoCache: $a,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", k(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", k(), lf(e);
      }
    }, zb = {
      readContext: function(e) {
        return vt(e);
      },
      use: ci,
      useCallback: function(e, t) {
        return q = "useCallback", k(), Ln(e, t);
      },
      useContext: function(e) {
        return q = "useContext", k(), vt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", k(), zl(2048, sn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", k(), af(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", k(), zl(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", k(), zl(4, au, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", k();
        var a = G.H;
        G.H = mv;
        try {
          return $t(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", k();
        var i = G.H;
        G.H = mv;
        try {
          return Qc(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", k(), Tt().memoizedState;
      },
      useState: function() {
        q = "useState", k();
        var e = G.H;
        G.H = mv;
        try {
          return Qc(ka);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", k();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", k(), Qe(e, t);
      },
      useTransition: function() {
        return q = "useTransition", k(), tl();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", k(), Lc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", k(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", k(), Ns(), Wi(e);
      },
      useActionState: function(e) {
        return q = "useActionState", k(), Wi(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", k(), ws(e, t);
      },
      useHostTransitionStatus: ri,
      useMemoCache: $a,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", k(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", k(), lf(e);
      }
    }, pc = {
      readContext: function(e) {
        return le(), vt(e);
      },
      use: function(e) {
        return ee(), ci(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", ee(), je(), jd(e, t);
      },
      useContext: function(e) {
        return q = "useContext", ee(), je(), vt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", ee(), je(), Zc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", ee(), je(), Tu(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        q = "useInsertionEffect", ee(), je(), Fi(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", ee(), je(), pa(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", ee(), je();
        var a = G.H;
        G.H = pc;
        try {
          return ga(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", ee(), je();
        var i = G.H;
        G.H = pc;
        try {
          return Po(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(e) {
        return q = "useRef", ee(), je(), Bd(e);
      },
      useState: function(e) {
        q = "useState", ee(), je();
        var t = G.H;
        G.H = pc;
        try {
          return Ki(e);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", ee(), je();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", ee(), je(), nf(e, t);
      },
      useTransition: function() {
        return q = "useTransition", ee(), je(), Ii();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", ee(), je(), ef(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", ee(), je(), Vs();
      },
      useFormState: function(e, t) {
        return q = "useFormState", ee(), je(), Wa(e, t);
      },
      useActionState: function(e, t) {
        return q = "useActionState", ee(), je(), Wa(e, t);
      },
      useOptimistic: function(e) {
        return q = "useOptimistic", ee(), je(), Vc(e);
      },
      useMemoCache: function(e) {
        return ee(), $a(e);
      },
      useHostTransitionStatus: ri,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", je(), Yd();
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", ee(), je(), Qs(e);
      }
    }, Ai = {
      readContext: function(e) {
        return le(), vt(e);
      },
      use: function(e) {
        return ee(), ci(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", ee(), k(), Ln(e, t);
      },
      useContext: function(e) {
        return q = "useContext", ee(), k(), vt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", ee(), k(), zl(2048, sn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", ee(), k(), af(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", ee(), k(), zl(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", ee(), k(), zl(4, au, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", ee(), k();
        var a = G.H;
        G.H = Ai;
        try {
          return $t(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", ee(), k();
        var i = G.H;
        G.H = Ai;
        try {
          return Xc(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", ee(), k(), Tt().memoizedState;
      },
      useState: function() {
        q = "useState", ee(), k();
        var e = G.H;
        G.H = Ai;
        try {
          return Xc(ka);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", ee(), k();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", ee(), k(), Au(e, t);
      },
      useTransition: function() {
        return q = "useTransition", ee(), k(), L0();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", ee(), k(), Lc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", ee(), k(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", ee(), k(), ki(e);
      },
      useActionState: function(e) {
        return q = "useActionState", ee(), k(), ki(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", ee(), k(), Gs(e, t);
      },
      useMemoCache: function(e) {
        return ee(), $a(e);
      },
      useHostTransitionStatus: ri,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", k(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", ee(), k(), lf(e);
      }
    }, mv = {
      readContext: function(e) {
        return le(), vt(e);
      },
      use: function(e) {
        return ee(), ci(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", ee(), k(), Ln(e, t);
      },
      useContext: function(e) {
        return q = "useContext", ee(), k(), vt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", ee(), k(), zl(2048, sn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", ee(), k(), af(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", ee(), k(), zl(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", ee(), k(), zl(4, au, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", ee(), k();
        var a = G.H;
        G.H = Ai;
        try {
          return $t(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", ee(), k();
        var i = G.H;
        G.H = Ai;
        try {
          return Qc(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", ee(), k(), Tt().memoizedState;
      },
      useState: function() {
        q = "useState", ee(), k();
        var e = G.H;
        G.H = Ai;
        try {
          return Qc(ka);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", ee(), k();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", ee(), k(), Qe(e, t);
      },
      useTransition: function() {
        return q = "useTransition", ee(), k(), tl();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", ee(), k(), Lc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", ee(), k(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", ee(), k(), Wi(e);
      },
      useActionState: function(e) {
        return q = "useActionState", ee(), k(), Wi(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", ee(), k(), ws(e, t);
      },
      useMemoCache: function(e) {
        return ee(), $a(e);
      },
      useHostTransitionStatus: ri,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", k(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", ee(), k(), lf(e);
      }
    };
    var Db = {}, _b = /* @__PURE__ */ new Set(), Rb = /* @__PURE__ */ new Set(), Mb = /* @__PURE__ */ new Set(), Cb = /* @__PURE__ */ new Set(), Ub = /* @__PURE__ */ new Set(), Hb = /* @__PURE__ */ new Set(), Nb = /* @__PURE__ */ new Set(), Bb = /* @__PURE__ */ new Set(), jb = /* @__PURE__ */ new Set(), Yb = /* @__PURE__ */ new Set();
    Object.freeze(Db);
    var wS = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = na(e), o = Ol(i);
        o.payload = t, a != null && (kc(a), o.callback = a), t = vu(e, o, i), t !== null && (yu(i, "this.setState()", e), Be(t, e, i), En(t, e, i));
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = na(e), o = Ol(i);
        o.tag = vb, o.payload = t, a != null && (kc(a), o.callback = a), t = vu(e, o, i), t !== null && (yu(i, "this.replaceState()", e), Be(t, e, i), En(t, e, i));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = na(e), i = Ol(a);
        i.tag = Sb, t != null && (kc(t), i.callback = t), t = vu(e, i, a), t !== null && (yu(a, "this.forceUpdate()", e), Be(t, e, a), En(t, e, a));
      }
    }, fm = null, XS = null, QS = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Ll = !1, xb = {}, qb = {}, Gb = {}, wb = {}, sm = !1, Xb = {}, yv = {}, LS = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, Qb = !1, Lb = null;
    Lb = /* @__PURE__ */ new Set();
    var zo = !1, Vl = !1, VS = !1, Vb = typeof WeakSet == "function" ? WeakSet : Set, oa = null, rm = null, dm = null, Zl = null, _n = !1, Oi = null, Fl = !1, Ip = 8192, FE = {
      getCacheForType: function(e) {
        var t = vt(wl), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      cacheSignal: function() {
        return vt(wl).controller.signal;
      },
      getOwner: function() {
        return Ba;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var Pp = Symbol.for;
      Pp("selector.component"), Pp("selector.has_pseudo_class"), Pp("selector.role"), Pp("selector.test_id"), Pp("selector.text");
    }
    var IE = [], PE = typeof WeakMap == "function" ? WeakMap : Map, fa = 0, Il = 2, nu = 4, Do = 0, e0 = 1, Qr = 2, pv = 3, Pf = 4, gv = 6, Zb = 5, ht = fa, Xt = null, tt = null, Ie = 0, Rn = 0, vv = 1, Lr = 2, t0 = 3, Jb = 4, ZS = 5, l0 = 6, Sv = 7, JS = 8, Vr = 9, Nt = Rn, uu = null, es = !1, hm = !1, KS = !1, gc = 0, sl = Do, ts = 0, ls = 0, $S = 0, Mn = 0, Zr = 0, a0 = null, rn = null, bv = !1, Ev = 0, Kb = 0, $b = 300, Tv = 1 / 0, kb = 500, n0 = null, El = null, as = null, Av = 0, kS = 1, WS = 2, Wb = 3, ns = 0, Fb = 1, Ib = 2, Pb = 3, e2 = 4, Ov = 5, Jl = 0, us = null, mm = null, zi = 0, FS = 0, IS = -0, PS = null, t2 = null, l2 = null, Di = Av, a2 = null, eT = 50, u0 = 0, e1 = null, t1 = !1, zv = !1, tT = 50, Jr = 0, i0 = null, ym = !1, Dv = null, n2 = !1, u2 = /* @__PURE__ */ new Set(), lT = {}, _v = null, pm = null, l1 = !1, a1 = !1, Rv = !1, n1 = !1, is = 0, u1 = {};
    (function() {
      for (var e = 0; e < pS.length; e++) {
        var t = pS[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), Nn(a, "on" + t);
      }
      Nn(j1, "onAnimationEnd"), Nn(Y1, "onAnimationIteration"), Nn(x1, "onAnimationStart"), Nn("dblclick", "onDoubleClick"), Nn("focusin", "onFocus"), Nn("focusout", "onBlur"), Nn(UE, "onTransitionRun"), Nn(HE, "onTransitionStart"), Nn(NE, "onTransitionCancel"), Nn(q1, "onTransitionEnd");
    })(), we("onMouseEnter", ["mouseout", "mouseover"]), we("onMouseLeave", ["mouseout", "mouseover"]), we("onPointerEnter", ["pointerout", "pointerover"]), we("onPointerLeave", ["pointerout", "pointerover"]), Pe(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), Pe(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), Pe("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Pe(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), Pe(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), Pe(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var c0 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), i1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(c0)
    ), Mv = "_reactListening" + Math.random().toString(36).slice(2), i2 = !1, c2 = !1, Cv = !1, o2 = !1, Uv = !1, Hv = !1, f2 = !1, Nv = {}, aT = /\r\n?/g, nT = /\u0000|\uFFFD/g, Kr = "http://www.w3.org/1999/xlink", c1 = "http://www.w3.org/XML/1998/namespace", uT = "javascript:throw new Error('React form unexpectedly submitted.')", iT = "suppressHydrationWarning", $r = "&", Bv = "/&", o0 = "$", f0 = "/$", cs = "$?", kr = "$~", gm = "$!", cT = "html", oT = "body", fT = "head", o1 = "F!", s2 = "F", r2 = "loading", sT = "style", _o = 0, vm = 1, jv = 2, f1 = null, s1 = null, d2 = { dialog: !0, webview: !0 }, r1 = null, s0 = void 0, h2 = typeof setTimeout == "function" ? setTimeout : void 0, rT = typeof clearTimeout == "function" ? clearTimeout : void 0, Wr = -1, m2 = typeof Promise == "function" ? Promise : void 0, dT = typeof queueMicrotask == "function" ? queueMicrotask : typeof m2 < "u" ? function(e) {
      return m2.resolve(null).then(e).catch(rg);
    } : h2, d1 = null, Fr = 0, r0 = 1, y2 = 2, p2 = 3, Wu = 4, Fu = /* @__PURE__ */ new Map(), g2 = /* @__PURE__ */ new Set(), Ro = bt.d;
    bt.d = {
      f: function() {
        var e = Ro.f(), t = tn();
        return e || t;
      },
      r: function(e) {
        var t = ae(e);
        t !== null && t.tag === 5 && t.type === "form" ? uf(t) : Ro.r(e);
      },
      D: function(e) {
        Ro.D(e), Iy("dns-prefetch", e, null);
      },
      C: function(e, t) {
        Ro.C(e, t), Iy("preconnect", e, t);
      },
      L: function(e, t, a) {
        Ro.L(e, t, a);
        var i = Sm;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + Rt(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Rt(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Rt(
            a.imageSizes
          ) + '"]')) : o += '[href="' + Rt(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = uo(e);
              break;
            case "script":
              f = io(e);
          }
          Fu.has(f) || (e = ke(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), Fu.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            pr(f)
          ) || t === "script" && i.querySelector(gr(f)) || (t = i.createElement("link"), kt(t, "link", e), he(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        Ro.m(e, t);
        var a = Sm;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Rt(i) + '"][href="' + Rt(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = io(e);
          }
          if (!Fu.has(f) && (e = ke({ rel: "modulepreload", href: e }, t), Fu.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(gr(f)))
                  return;
            }
            i = a.createElement("link"), kt(i, "link", e), he(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        Ro.X(e, t);
        var a = Sm;
        if (a && e) {
          var i = Re(a).hoistableScripts, o = io(e), f = i.get(o);
          f || (f = a.querySelector(
            gr(o)
          ), f || (e = ke({ src: e, async: !0 }, t), (t = Fu.get(o)) && tp(e, t), f = a.createElement("script"), he(f), kt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        Ro.S(e, t, a);
        var i = Sm;
        if (i && e) {
          var o = Re(i).hoistableStyles, f = uo(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Fr, preload: null };
            if (d = i.querySelector(
              pr(f)
            ))
              h.loading = r0 | Wu;
            else {
              e = ke(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = Fu.get(f)) && ep(e, a);
              var y = d = i.createElement("link");
              he(y), kt(y, "link", e), y._p = new Promise(function(p, z) {
                y.onload = p, y.onerror = z;
              }), y.addEventListener("load", function() {
                h.loading |= r0;
              }), y.addEventListener("error", function() {
                h.loading |= y2;
              }), h.loading |= Wu, _f(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        Ro.M(e, t);
        var a = Sm;
        if (a && e) {
          var i = Re(a).hoistableScripts, o = io(e), f = i.get(o);
          f || (f = a.querySelector(
            gr(o)
          ), f || (e = ke({ src: e, async: !0, type: "module" }, t), (t = Fu.get(o)) && tp(e, t), f = a.createElement("script"), he(f), kt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Sm = typeof document > "u" ? null : document, Yv = null, hT = 6e4, mT = 800, yT = 500, h1 = 0, m1 = null, xv = null, Ir = nS, d0 = {
      $$typeof: In,
      Provider: null,
      Consumer: null,
      _currentValue: Ir,
      _currentValue2: Ir,
      _threadCount: 0
    }, v2 = "%c%s%c", S2 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", b2 = "", qv = " ", pT = Function.prototype.bind, E2 = !1, T2 = null, A2 = null, O2 = null, z2 = null, D2 = null, _2 = null, R2 = null, M2 = null, C2 = null, U2 = null;
    T2 = function(e, t, a, i) {
      t = X(e, t), t !== null && (a = P(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = ke({}, e.memoizedProps), a = la(e, 2), a !== null && Be(a, e, 2));
    }, A2 = function(e, t, a) {
      t = X(e, t), t !== null && (a = De(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = ke({}, e.memoizedProps), a = la(e, 2), a !== null && Be(a, e, 2));
    }, O2 = function(e, t, a, i) {
      t = X(e, t), t !== null && (a = Se(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = ke({}, e.memoizedProps), a = la(e, 2), a !== null && Be(a, e, 2));
    }, z2 = function(e, t, a) {
      e.pendingProps = P(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = la(e, 2), t !== null && Be(t, e, 2);
    }, D2 = function(e, t) {
      e.pendingProps = De(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = la(e, 2), t !== null && Be(t, e, 2);
    }, _2 = function(e, t, a) {
      e.pendingProps = Se(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = la(e, 2), t !== null && Be(t, e, 2);
    }, R2 = function(e) {
      var t = la(e, 2);
      t !== null && Be(t, e, 2);
    }, M2 = function(e) {
      var t = Uo(), a = la(e, t);
      a !== null && Be(a, e, t);
    }, C2 = function(e) {
      ct = e;
    }, U2 = function(e) {
      Ne = e;
    };
    var Gv = !0, wv = null, y1 = !1, os = null, fs = null, ss = null, h0 = /* @__PURE__ */ new Map(), m0 = /* @__PURE__ */ new Map(), rs = [], gT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Xv = null;
    if (Fn.prototype.render = rp.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : st(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = na(i);
      Dh(i, o, a, t, null, null);
    }, Fn.prototype.unmount = rp.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (ht & (Il | nu)) !== fa && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), Dh(e.current, 2, null, e, null, null), tn(), t[bi] = null;
      }
    }, Fn.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Ci();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < rs.length && t !== 0 && t < rs[a].priority; a++) ;
        rs.splice(a, 0, e), a === 0 && sp(e);
      }
    }, function() {
      var e = Tr.version;
      if (e !== "19.2.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.2.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), bt.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = el(t), e = e !== null ? ul(e) : null, e = e === null ? null : e.stateNode, e;
    }, !function() {
      var e = {
        bundleType: 1,
        version: "19.2.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: G,
        reconcilerVersion: "19.2.0"
      };
      return e.overrideHookState = T2, e.overrideHookStateDeletePath = A2, e.overrideHookStateRenamePath = O2, e.overrideProps = z2, e.overridePropsDeletePath = D2, e.overridePropsRenamePath = _2, e.scheduleUpdate = R2, e.scheduleRetry = M2, e.setErrorHandler = C2, e.setSuspenseHandler = U2, e.scheduleRefresh = Ve, e.scheduleRoot = ie, e.setRefreshHandler = _t, e.getCurrentFiber = Ut, ds(e);
    }() && hc && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var H2 = window.location.protocol;
      /^(https?|file):$/.test(H2) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (H2 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    S0.createRoot = function(e, t) {
      if (!st(e))
        throw Error("Target container is not a DOM element.");
      dp(e);
      var a = !1, i = "", o = Gd, f = wd, d = iy;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === zn && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = br(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        null,
        o,
        f,
        d,
        jg
      ), e[bi] = t.current, uc(e), new rp(t);
    }, S0.hydrateRoot = function(e, t, a) {
      if (!st(e))
        throw Error("Target container is not a DOM element.");
      dp(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = Gd, d = wd, h = iy, y = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), t = br(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        y,
        f,
        d,
        h,
        jg
      ), t.context = Ug(null), a = t.current, i = na(a), i = dn(i), o = Ol(i), o.callback = null, vu(a, o, i), yu(i, "hydrateRoot()", null), a = i, t.current.lanes = a, Cn(t, a), Ca(t), e[bi] = t.current, uc(e), new Fn(t);
    }, S0.version = "19.2.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), S0;
}
function W2() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W2);
    } catch (X) {
      console.error(X);
    }
  }
}
process.env.NODE_ENV === "production" ? (W2(), b1.exports = BT()) : b1.exports = jT();
var YT = b1.exports;
const xT = /* @__PURE__ */ J2(YT), qT = "0.1.0", GT = {
  version: qT
}, wT = GT.version, XT = {
  WIDGET: "WIDGET"
}, QT = {
  ROUTE: "plugin-route",
  COMMAND: "plugin-command",
  WIDGET: "plugin-widget"
}, Z2 = "plugin-id", Vv = "__acme_plugin_registry__";
function LT() {
  const X = globalThis;
  return X[Vv] ?? (X[Vv] = /* @__PURE__ */ new Map()), X[Vv];
}
const E1 = LT();
function VT(X, P) {
  var Se;
  return (Se = E1.get(X)) == null ? void 0 : Se.get(P);
}
function ZT(X) {
  const P = X.type;
  let Se = E1.get(P);
  Se || (Se = /* @__PURE__ */ new Map(), E1.set(P, Se)), Se.set(X.id, X);
}
function JT({ plugin: X }) {
  const P = X.type, Se = QT[P];
  ZT(X);
  class U extends HTMLElement {
    constructor() {
      super(...arguments);
      y0(this, "root");
      y0(this, "cleanup");
      y0(this, "container");
      y0(this, "shadow");
    }
    connectedCallback() {
      if (this.root) return;
      const ee = this.ctx;
      if (!ee)
        throw new Error("Context not provided!");
      const le = this.getAttribute(Z2);
      if (!le)
        throw new Error(`Missing ${Z2} attribute!`);
      const $ = VT(P, le);
      if (!$)
        throw new Error(
          `Plugin not registered for type "${P}" and id "${le}"`
        );
      if (ee.manifest.type !== P)
        throw new Error(
          `Context type mismatch: expected "${P}", got "${ee.manifest.type}"`
        );
      if (this.shadow = this.shadowRoot ?? this.attachShadow({ mode: "open" }), this.container = document.createElement("div"), this.shadow.replaceChildren(this.container), this.root = xT.createRoot(this.container), this.root.render(DT(ee, OT.createElement($.Root))), $.activate) {
        const Ce = $.activate(ee);
        typeof Ce == "function" && (this.cleanup = Ce);
      }
    }
    disconnectedCallback() {
      var ct, ee, le;
      (ct = this.cleanup) == null || ct.call(this), this.cleanup = void 0, (ee = this.root) == null || ee.unmount(), this.root = void 0, (le = this.container) == null || le.remove(), this.container = void 0, this.shadow = void 0;
    }
  }
  customElements.get(Se) || customElements.define(Se, U);
}
function KT() {
  const X = _T(), P = MT(), Se = RT(), [U, De] = Co.useState("");
  return /* @__PURE__ */ Pl.jsxs("div", { style: { padding: 10, border: "1px solid #ccc" }, children: [
    /* @__PURE__ */ Pl.jsx("h3", { children: P.name }),
    /* @__PURE__ */ Pl.jsxs("p", { children: [
      " Utente from Host: ",
      Se.displayName
    ] }),
    /* @__PURE__ */ Pl.jsx("label", { children: "Dettagli del manifest from Host" }),
    /* @__PURE__ */ Pl.jsxs("ul", { style: { textAlign: "left" }, children: [
      /* @__PURE__ */ Pl.jsxs("li", { children: [
        /* @__PURE__ */ Pl.jsx("strong", { children: "id:" }),
        " ",
        P.id
      ] }),
      /* @__PURE__ */ Pl.jsxs("li", { children: [
        /* @__PURE__ */ Pl.jsx("strong", { children: "name:" }),
        " ",
        P.name
      ] }),
      /* @__PURE__ */ Pl.jsxs("li", { children: [
        /* @__PURE__ */ Pl.jsx("strong", { children: "type:" }),
        " ",
        P.type
      ] }),
      /* @__PURE__ */ Pl.jsxs("li", { children: [
        /* @__PURE__ */ Pl.jsx("strong", { children: "contractVersion:" }),
        " ",
        P.contractVersion
      ] }),
      /* @__PURE__ */ Pl.jsxs("li", { children: [
        /* @__PURE__ */ Pl.jsx("strong", { children: "version:" }),
        " ",
        P.version
      ] })
    ] }),
    /* @__PURE__ */ Pl.jsxs("div", { style: { display: "flex", gap: "6px" }, children: [
      /* @__PURE__ */ Pl.jsx(
        "input",
        {
          placeholder: "Notifica all'host",
          value: U,
          onChange: (Ne) => De(Ne.target.value)
        }
      ),
      /* @__PURE__ */ Pl.jsx(
        "button",
        {
          onClick: () => X.toast.show(`Hello from plugin:${U}`),
          type: "button",
          children: "Send message in console"
        }
      )
    ] })
  ] });
}
const $T = "acme.example-plugin", kT = {
  type: XT.WIDGET,
  id: $T,
  contractVersion: wT,
  Root: KT,
  activate(X) {
    return X.services.toast.show(`Plugin activated: ${X.manifest.name}`), () => X.services.toast.show(`Plugin deactivated ${X.manifest.name}`);
  }
};
JT({
  plugin: kT
});
