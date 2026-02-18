var vT = Object.defineProperty;
var ST = (Q, P, Oe) => P in Q ? vT(Q, P, { enumerable: !0, configurable: !0, writable: !0, value: Oe }) : Q[P] = Oe;
var y0 = (Q, P, Oe) => ST(Q, typeof P != "symbol" ? P + "" : P, Oe);
function V2(Q) {
  return Q && Q.__esModule && Object.prototype.hasOwnProperty.call(Q, "default") ? Q.default : Q;
}
var g1 = { exports: {} }, p0 = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U2;
function bT() {
  if (U2) return p0;
  U2 = 1;
  var Q = Symbol.for("react.transitional.element"), P = Symbol.for("react.fragment");
  function Oe(H, De, qe) {
    var ct = null;
    if (qe !== void 0 && (ct = "" + qe), De.key !== void 0 && (ct = "" + De.key), "key" in De) {
      qe = {};
      for (var ee in De)
        ee !== "key" && (qe[ee] = De[ee]);
    } else qe = De;
    return De = qe.ref, {
      $$typeof: Q,
      type: H,
      key: ct,
      ref: De !== void 0 ? De : null,
      props: qe
    };
  }
  return p0.Fragment = P, p0.jsx = Oe, p0.jsxs = Oe, p0;
}
var g0 = {}, v1 = { exports: {} }, Le = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H2;
function ET() {
  if (H2) return Le;
  H2 = 1;
  var Q = Symbol.for("react.transitional.element"), P = Symbol.for("react.portal"), Oe = Symbol.for("react.fragment"), H = Symbol.for("react.strict_mode"), De = Symbol.for("react.profiler"), qe = Symbol.for("react.consumer"), ct = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), $ = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), U = Symbol.iterator;
  function ie(S) {
    return S === null || typeof S != "object" ? null : (S = U && S[U] || S["@@iterator"], typeof S == "function" ? S : null);
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
      $$typeof: Q,
      type: S,
      key: B,
      ref: W !== void 0 ? W : null,
      props: F
    };
  }
  function se(S, B) {
    return Dt(S.type, B, S.props);
  }
  function Yt(S) {
    return typeof S == "object" && S !== null && S.$$typeof === Q;
  }
  function ye(S) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(F) {
      return B[F];
    });
  }
  var xe = /\/+/g;
  function Qt(S, B) {
    return typeof S == "object" && S !== null && S.key != null ? ye("" + S.key) : B.toString(36);
  }
  function jt(S) {
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
    var Ee = !1;
    if (S === null) Ee = !0;
    else
      switch (Ge) {
        case "bigint":
        case "string":
        case "number":
          Ee = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case Q:
            case P:
              Ee = !0;
              break;
            case Ce:
              return Ee = S._init, _(
                Ee(S._payload),
                B,
                F,
                W,
                ve
              );
          }
      }
    if (Ee)
      return ve = ve(S), Ee = W === "" ? "." + Qt(S, 0) : W, el(ve) ? (F = "", Ee != null && (F = Ee.replace(xe, "$&/") + "/"), _(ve, B, F, "", function(qa) {
        return qa;
      })) : ve != null && (Yt(ve) && (ve = se(
        ve,
        F + (ve.key == null || S && S.key === ve.key ? "" : ("" + ve.key).replace(
          xe,
          "$&/"
        ) + "/") + Ee
      )), B.push(ve)), 1;
    Ee = 0;
    var Lt = W === "" ? "." : W + ":";
    if (el(S))
      for (var mt = 0; mt < S.length; mt++)
        W = S[mt], Ge = Lt + Qt(W, mt), Ee += _(
          W,
          B,
          F,
          Ge,
          ve
        );
    else if (mt = ie(S), typeof mt == "function")
      for (S = mt.call(S), mt = 0; !(W = S.next()).done; )
        W = W.value, Ge = Lt + Qt(W, mt++), Ee += _(
          W,
          B,
          F,
          Ge,
          ve
        );
    else if (Ge === "object") {
      if (typeof S.then == "function")
        return _(
          jt(S),
          B,
          F,
          W,
          ve
        );
      throw B = String(S), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Ee;
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
  }, Ae = {
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
      if (!Yt(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return Le.Activity = X, Le.Children = Ae, Le.Component = lt, Le.Fragment = Oe, Le.Profiler = De, Le.PureComponent = Bt, Le.StrictMode = H, Le.Suspense = le, Le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _e, Le.__COMPILER_RUNTIME = {
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
      for (var Ee = Array(Ge), Lt = 0; Lt < Ge; Lt++)
        Ee[Lt] = arguments[Lt + 2];
      W.children = Ee;
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
      $$typeof: qe,
      _context: S
    }, S;
  }, Le.createElement = function(S, B, F) {
    var W, ve = {}, Ge = null;
    if (B != null)
      for (W in B.key !== void 0 && (Ge = "" + B.key), B)
        Ze.call(B, W) && W !== "key" && W !== "__self" && W !== "__source" && (ve[W] = B[W]);
    var Ee = arguments.length - 2;
    if (Ee === 1) ve.children = F;
    else if (1 < Ee) {
      for (var Lt = Array(Ee), mt = 0; mt < Ee; mt++)
        Lt[mt] = arguments[mt + 2];
      ve.children = Lt;
    }
    if (S && S.defaultProps)
      for (W in Ee = S.defaultProps, Ee)
        ve[W] === void 0 && (ve[W] = Ee[W]);
    return Dt(S, Ge, ve);
  }, Le.createRef = function() {
    return { current: null };
  }, Le.forwardRef = function(S) {
    return { $$typeof: ee, render: S };
  }, Le.isValidElement = Yt, Le.lazy = function(S) {
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
var N2;
function TT() {
  return N2 || (N2 = 1, function(Q, P) {
    process.env.NODE_ENV !== "production" && function() {
      function Oe(g, M) {
        Object.defineProperty(qe.prototype, g, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              M[0],
              M[1]
            );
          }
        });
      }
      function H(g) {
        return g === null || typeof g != "object" ? null : (g = Di && g[Di] || g["@@iterator"], typeof g == "function" ? g : null);
      }
      function De(g, M) {
        g = (g = g.constructor) && (g.displayName || g.name) || "ReactClass";
        var I = g + "." + M;
        _i[I] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          M,
          g
        ), _i[I] = !0);
      }
      function qe(g, M, I) {
        this.props = g, this.context = M, this.refs = yt, this.updater = I || xa;
      }
      function ct() {
      }
      function ee(g, M, I) {
        this.props = g, this.context = M, this.refs = yt, this.updater = I || xa;
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
      function X(g) {
        if (g == null) return null;
        if (typeof g == "function")
          return g.$$typeof === rs ? null : g.displayName || g.name || null;
        if (typeof g == "string") return g;
        switch (g) {
          case S:
            return "Fragment";
          case F:
            return "Profiler";
          case B:
            return "StrictMode";
          case Ee:
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
            case Ae:
              return "Portal";
            case ve:
              return g.displayName || "Context";
            case W:
              return (g._context.displayName || "Context") + ".Consumer";
            case Ge:
              var M = g.render;
              return g = g.displayName, g || (g = M.displayName || M.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
            case mt:
              return M = g.displayName || null, M !== null ? M : X(g.type) || "Memo";
            case qa:
              M = g._payload, g = g._init;
              try {
                return X(g(M));
              } catch {
              }
          }
        return null;
      }
      function U(g) {
        if (g === S) return "<>";
        if (typeof g == "object" && g !== null && g.$$typeof === qa)
          return "<...>";
        try {
          var M = X(g);
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
        if (Ri.call(g, "key")) {
          var M = Object.getOwnPropertyDescriptor(g, "key").get;
          if (M && M.isReactWarning) return !1;
        }
        return g.key !== void 0;
      }
      function st(g, M) {
        function I() {
          vc || (vc = !0, console.error(
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
        var g = X(this.type);
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
                case Ae:
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
          return gc(de) ? (I = "", Pe != null && (I = Pe.replace(ed, "$&/") + "/"), Dt(de, M, I, "", function(ea) {
            return ea;
          })) : de != null && (el(de) && (de.key != null && (he && he.key === de.key || Ce(de.key)), I = Bt(
            de,
            I + (de.key == null || he && he.key === de.key ? "" : ("" + de.key).replace(
              ed,
              "$&/"
            ) + "/") + Pe
          ), ae !== "" && he != null && el(he) && he.key == null && he._store && !he._store.validated && (I._store.validated = 2), de = I), M.push(de)), 1;
        }
        if (he = 0, Pe = ae === "" ? "." : ae + ":", gc(g))
          for (var we = 0; we < g.length; we++)
            ae = g[we], Re = Pe + _e(ae, we), he += Dt(
              ae,
              M,
              I,
              Re,
              de
            );
        else if (we = H(g), typeof we == "function")
          for (we === g.entries && (Mn || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Mn = !0), g = we.call(g), we = 0; !(ae = g.next()).done; )
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
      function Yt(g) {
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
      function xe() {
        re.asyncTransitions--;
      }
      function Qt(g) {
        if (Sc === null)
          try {
            var M = ("require" + Math.random()).slice(0, 7);
            Sc = (Q && Q[M]).call(
              Q,
              "timers"
            ).setImmediate;
          } catch {
            Sc = function(ae) {
              ds === !1 && (ds = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var de = new MessageChannel();
              de.port1.onmessage = ae, de.port2.postMessage(void 0);
            };
          }
        return Sc(g);
      }
      function jt(g) {
        return 1 < g.length && typeof AggregateError == "function" ? new AggregateError(g) : g[0];
      }
      function _(g, M) {
        M !== rn - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), rn = M;
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
        0 < re.thrownErrors.length ? (ae = jt(re.thrownErrors), re.thrownErrors.length = 0, I(ae)) : M(g);
      }
      function te(g) {
        if (!Ga) {
          Ga = !0;
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
            Ga = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var pe = Symbol.for("react.transitional.element"), Ae = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), W = Symbol.for("react.consumer"), ve = Symbol.for("react.context"), Ge = Symbol.for("react.forward_ref"), Ee = Symbol.for("react.suspense"), Lt = Symbol.for("react.suspense_list"), mt = Symbol.for("react.memo"), qa = Symbol.for("react.lazy"), ce = Symbol.for("react.activity"), Di = Symbol.iterator, _i = {}, xa = {
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
      }, uu = Object.assign, yt = {};
      Object.freeze(yt), qe.prototype.isReactComponent = {}, qe.prototype.setState = function(g, M) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, g, M, "setState");
      }, qe.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      var Pl = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (Mi in Pl)
        Pl.hasOwnProperty(Mi) && Oe(Mi, Pl[Mi]);
      ct.prototype = qe.prototype, Pl = ee.prototype = new ct(), Pl.constructor = ee, uu(Pl, qe.prototype), Pl.isPureReactComponent = !0;
      var gc = Array.isArray, rs = Symbol.for("react.client.reference"), re = {
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
      }, Ri = Object.prototype.hasOwnProperty, iu = console.createTask ? console.createTask : function() {
        return null;
      };
      Pl = {
        react_stack_bottom_frame: function(g) {
          return g();
        }
      };
      var vc, gl, Pr = {}, Co = Pl.react_stack_bottom_frame.bind(
        Pl,
        Ve
      )(), Uo = iu(U(Ve)), Mn = !1, ed = /\/+/g, Ho = typeof reportError == "function" ? reportError : function(g) {
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
      }, ds = !1, Sc = null, rn = 0, Al = !1, Ga = !1, Ul = typeof queueMicrotask == "function" ? function(g) {
        queueMicrotask(function() {
          return queueMicrotask(g);
        });
      } : Qt;
      Pl = Object.freeze({
        __proto__: null,
        c: function(g) {
          return ye().useMemoCache(g);
        }
      });
      var Mi = {
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
      P.Activity = ce, P.Children = Mi, P.Component = qe, P.Fragment = S, P.Profiler = F, P.PureComponent = ee, P.StrictMode = B, P.Suspense = Ee, P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = re, P.__COMPILER_RUNTIME = Pl, P.act = function(g) {
        var M = re.actQueue, I = rn;
        rn++;
        var ae = re.actQueue = M !== null ? M : [], de = !1;
        try {
          var Re = g();
        } catch (we) {
          re.thrownErrors.push(we);
        }
        if (0 < re.thrownErrors.length)
          throw _(M, I), g = jt(re.thrownErrors), re.thrownErrors.length = 0, g;
        if (Re !== null && typeof Re == "object" && typeof Re.then == "function") {
          var he = Re;
          return Ul(function() {
            de || Al || (Al = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(we, ea) {
              de = !0, he.then(
                function(dn) {
                  if (_(M, I), I === 0) {
                    try {
                      te(ae), Qt(function() {
                        return V(
                          dn,
                          we,
                          ea
                        );
                      });
                    } catch (No) {
                      re.thrownErrors.push(No);
                    }
                    if (0 < re.thrownErrors.length) {
                      var Ci = jt(
                        re.thrownErrors
                      );
                      re.thrownErrors.length = 0, ea(Ci);
                    }
                  } else we(dn);
                },
                function(dn) {
                  _(M, I), 0 < re.thrownErrors.length && (dn = jt(
                    re.thrownErrors
                  ), re.thrownErrors.length = 0), ea(dn);
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
          throw g = jt(re.thrownErrors), re.thrownErrors.length = 0, g;
        return {
          then: function(we, ea) {
            de = !0, I === 0 ? (re.actQueue = ae, Qt(function() {
              return V(
                Pe,
                we,
                ea
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
        var ae = uu({}, g.props), de = g.key, Re = g._owner;
        if (M != null) {
          var he;
          e: {
            if (Ri.call(M, "ref") && (he = Object.getOwnPropertyDescriptor(
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
            !Ri.call(M, Pe) || Pe === "key" || Pe === "__self" || Pe === "__source" || Pe === "ref" && M.ref === void 0 || (ae[Pe] = M[Pe]);
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
            Ri.call(M, we) && we !== "key" && we !== "__self" && we !== "__source" && (ae[we] = M[we]);
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
          we ? Error("react-stack-top-frame") : Co,
          we ? iu(U(g)) : Uo
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
          _init: Yt
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
          de !== null && de(I, ae), typeof ae == "object" && ae !== null && typeof ae.then == "function" && (re.asyncTransitions++, ae.then(xe, xe), ae.then(le, Ho));
        } catch (Re) {
          Ho(Re);
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
process.env.NODE_ENV === "production" ? v1.exports = ET() : v1.exports = TT();
var Mo = v1.exports;
const AT = /* @__PURE__ */ V2(Mo);
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B2;
function OT() {
  return B2 || (B2 = 1, process.env.NODE_ENV !== "production" && function() {
    function Q(S) {
      if (S == null) return null;
      if (typeof S == "function")
        return S.$$typeof === Yt ? null : S.displayName || S.name || null;
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
            return B = S.displayName || null, B !== null ? B : Q(S.type) || "Memo";
          case Dt:
            B = S._payload, S = S._init;
            try {
              return Q(S(B));
            } catch {
            }
        }
      return null;
    }
    function P(S) {
      return "" + S;
    }
    function Oe(S) {
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
    function H(S) {
      if (S === st) return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === Dt)
        return "<...>";
      try {
        var B = Q(S);
        return B ? "<" + B + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function De() {
      var S = ye.A;
      return S === null ? null : S.getOwner();
    }
    function qe() {
      return Error("react-stack-top-frame");
    }
    function ct(S) {
      if (xe.call(S, "key")) {
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
      var S = Q(this.type);
      return V[S] || (V[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function $(S, B, F, W, ve, Ge) {
      var Ee = F.ref;
      return S = {
        $$typeof: Ve,
        type: S,
        key: B,
        props: F,
        _owner: W
      }, (Ee !== void 0 ? Ee : null) !== null ? Object.defineProperty(S, "ref", {
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
      var Ee = B.children;
      if (Ee !== void 0)
        if (W)
          if (Qt(Ee)) {
            for (W = 0; W < Ee.length; W++)
              X(Ee[W]);
            Object.freeze && Object.freeze(Ee);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else X(Ee);
      if (xe.call(B, "key")) {
        Ee = Q(S);
        var Lt = Object.keys(B).filter(function(qa) {
          return qa !== "key";
        });
        W = 0 < Lt.length ? "{key: someKey, " + Lt.join(": ..., ") + ": ...}" : "{key: someKey}", Ae[Ee + W] || (Lt = 0 < Lt.length ? "{" + Lt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          W,
          Ee,
          Lt,
          Ee
        ), Ae[Ee + W] = !0);
      }
      if (Ee = null, F !== void 0 && (Oe(F), Ee = "" + F), ct(B) && (Oe(B.key), Ee = "" + B.key), "key" in B) {
        F = {};
        for (var mt in B)
          mt !== "key" && (F[mt] = B[mt]);
      } else F = B;
      return Ee && ee(
        F,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), $(
        S,
        Ee,
        F,
        De(),
        ve,
        Ge
      );
    }
    function X(S) {
      U(S) ? S._store && (S._store.validated = 1) : typeof S == "object" && S !== null && S.$$typeof === Dt && (S._payload.status === "fulfilled" ? U(S._payload.value) && S._payload.value._store && (S._payload.value._store.validated = 1) : S._store && (S._store.validated = 1));
    }
    function U(S) {
      return typeof S == "object" && S !== null && S.$$typeof === Ve;
    }
    var ie = Mo, Ve = Symbol.for("react.transitional.element"), _t = Symbol.for("react.portal"), st = Symbol.for("react.fragment"), lt = Symbol.for("react.strict_mode"), Tl = Symbol.for("react.profiler"), Bt = Symbol.for("react.consumer"), Jt = Symbol.for("react.context"), el = Symbol.for("react.forward_ref"), ul = Symbol.for("react.suspense"), _e = Symbol.for("react.suspense_list"), Ze = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), se = Symbol.for("react.activity"), Yt = Symbol.for("react.client.reference"), ye = ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, xe = Object.prototype.hasOwnProperty, Qt = Array.isArray, jt = console.createTask ? console.createTask : function() {
      return null;
    };
    ie = {
      react_stack_bottom_frame: function(S) {
        return S();
      }
    };
    var _, V = {}, te = ie.react_stack_bottom_frame.bind(
      ie,
      qe
    )(), pe = jt(H(qe)), Ae = {};
    g0.Fragment = st, g0.jsx = function(S, B, F) {
      var W = 1e4 > ye.recentlyCreatedOwnerStacks++;
      return Ce(
        S,
        B,
        F,
        !1,
        W ? Error("react-stack-top-frame") : te,
        W ? jt(H(S)) : pe
      );
    }, g0.jsxs = function(S, B, F) {
      var W = 1e4 > ye.recentlyCreatedOwnerStacks++;
      return Ce(
        S,
        B,
        F,
        !0,
        W ? Error("react-stack-top-frame") : te,
        W ? jt(H(S)) : pe
      );
    };
  }()), g0;
}
process.env.NODE_ENV === "production" ? g1.exports = bT() : g1.exports = OT();
var Ir = g1.exports;
const Z2 = Mo.createContext(null);
function zT(Q, P) {
  return /* @__PURE__ */ Ir.jsx(Z2.Provider, { value: Q, children: P });
}
function J2() {
  const Q = Mo.useContext(Z2);
  if (!Q)
    throw new Error("usePluginContext must be used inside <PluginProvider />");
  return Q;
}
function DT() {
  return J2().services;
}
function _T() {
  return J2().user;
}
var S1 = { exports: {} }, v0 = {}, Qv = { exports: {} }, y1 = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Y2;
function RT() {
  return Y2 || (Y2 = 1, function(Q) {
    function P(_, V) {
      var te = _.length;
      _.push(V);
      e: for (; 0 < te; ) {
        var pe = te - 1 >>> 1, Ae = _[pe];
        if (0 < De(Ae, V))
          _[pe] = V, _[te] = Ae, te = pe;
        else break e;
      }
    }
    function Oe(_) {
      return _.length === 0 ? null : _[0];
    }
    function H(_) {
      if (_.length === 0) return null;
      var V = _[0], te = _.pop();
      if (te !== V) {
        _[0] = te;
        e: for (var pe = 0, Ae = _.length, S = Ae >>> 1; pe < S; ) {
          var B = 2 * (pe + 1) - 1, F = _[B], W = B + 1, ve = _[W];
          if (0 > De(F, te))
            W < Ae && 0 > De(ve, F) ? (_[pe] = ve, _[W] = te, pe = W) : (_[pe] = F, _[B] = te, pe = B);
          else if (W < Ae && 0 > De(ve, te))
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
    if (Q.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var qe = performance;
      Q.unstable_now = function() {
        return qe.now();
      };
    } else {
      var ct = Date, ee = ct.now();
      Q.unstable_now = function() {
        return ct.now() - ee;
      };
    }
    var le = [], $ = [], Ce = 1, X = null, U = 3, ie = !1, Ve = !1, _t = !1, st = !1, lt = typeof setTimeout == "function" ? setTimeout : null, Tl = typeof clearTimeout == "function" ? clearTimeout : null, Bt = typeof setImmediate < "u" ? setImmediate : null;
    function Jt(_) {
      for (var V = Oe($); V !== null; ) {
        if (V.callback === null) H($);
        else if (V.startTime <= _)
          H($), V.sortIndex = V.expirationTime, P(le, V);
        else break;
        V = Oe($);
      }
    }
    function el(_) {
      if (_t = !1, Jt(_), !Ve)
        if (Oe(le) !== null)
          Ve = !0, ul || (ul = !0, ye());
        else {
          var V = Oe($);
          V !== null && jt(el, V.startTime - _);
        }
    }
    var ul = !1, _e = -1, Ze = 5, Dt = -1;
    function se() {
      return st ? !0 : !(Q.unstable_now() - Dt < Ze);
    }
    function Yt() {
      if (st = !1, ul) {
        var _ = Q.unstable_now();
        Dt = _;
        var V = !0;
        try {
          e: {
            Ve = !1, _t && (_t = !1, Tl(_e), _e = -1), ie = !0;
            var te = U;
            try {
              t: {
                for (Jt(_), X = Oe(le); X !== null && !(X.expirationTime > _ && se()); ) {
                  var pe = X.callback;
                  if (typeof pe == "function") {
                    X.callback = null, U = X.priorityLevel;
                    var Ae = pe(
                      X.expirationTime <= _
                    );
                    if (_ = Q.unstable_now(), typeof Ae == "function") {
                      X.callback = Ae, Jt(_), V = !0;
                      break t;
                    }
                    X === Oe(le) && H(le), Jt(_);
                  } else H(le);
                  X = Oe(le);
                }
                if (X !== null) V = !0;
                else {
                  var S = Oe($);
                  S !== null && jt(
                    el,
                    S.startTime - _
                  ), V = !1;
                }
              }
              break e;
            } finally {
              X = null, U = te, ie = !1;
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
        Bt(Yt);
      };
    else if (typeof MessageChannel < "u") {
      var xe = new MessageChannel(), Qt = xe.port2;
      xe.port1.onmessage = Yt, ye = function() {
        Qt.postMessage(null);
      };
    } else
      ye = function() {
        lt(Yt, 0);
      };
    function jt(_, V) {
      _e = lt(function() {
        _(Q.unstable_now());
      }, V);
    }
    Q.unstable_IdlePriority = 5, Q.unstable_ImmediatePriority = 1, Q.unstable_LowPriority = 4, Q.unstable_NormalPriority = 3, Q.unstable_Profiling = null, Q.unstable_UserBlockingPriority = 2, Q.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, Q.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ze = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, Q.unstable_getCurrentPriorityLevel = function() {
      return U;
    }, Q.unstable_next = function(_) {
      switch (U) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = U;
      }
      var te = U;
      U = V;
      try {
        return _();
      } finally {
        U = te;
      }
    }, Q.unstable_requestPaint = function() {
      st = !0;
    }, Q.unstable_runWithPriority = function(_, V) {
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
      var te = U;
      U = _;
      try {
        return V();
      } finally {
        U = te;
      }
    }, Q.unstable_scheduleCallback = function(_, V, te) {
      var pe = Q.unstable_now();
      switch (typeof te == "object" && te !== null ? (te = te.delay, te = typeof te == "number" && 0 < te ? pe + te : pe) : te = pe, _) {
        case 1:
          var Ae = -1;
          break;
        case 2:
          Ae = 250;
          break;
        case 5:
          Ae = 1073741823;
          break;
        case 4:
          Ae = 1e4;
          break;
        default:
          Ae = 5e3;
      }
      return Ae = te + Ae, _ = {
        id: Ce++,
        callback: V,
        priorityLevel: _,
        startTime: te,
        expirationTime: Ae,
        sortIndex: -1
      }, te > pe ? (_.sortIndex = te, P($, _), Oe(le) === null && _ === Oe($) && (_t ? (Tl(_e), _e = -1) : _t = !0, jt(el, te - pe))) : (_.sortIndex = Ae, P(le, _), Ve || ie || (Ve = !0, ul || (ul = !0, ye()))), _;
    }, Q.unstable_shouldYield = se, Q.unstable_wrapCallback = function(_) {
      var V = U;
      return function() {
        var te = U;
        U = V;
        try {
          return _.apply(this, arguments);
        } finally {
          U = te;
        }
      };
    };
  }(y1)), y1;
}
var p1 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var j2;
function MT() {
  return j2 || (j2 = 1, function(Q) {
    process.env.NODE_ENV !== "production" && function() {
      function P() {
        if (el = !1, Dt) {
          var _ = Q.unstable_now();
          ye = _;
          var V = !0;
          try {
            e: {
              Bt = !1, Jt && (Jt = !1, _e(se), se = -1), Tl = !0;
              var te = lt;
              try {
                t: {
                  for (ct(_), st = H(ie); st !== null && !(st.expirationTime > _ && le()); ) {
                    var pe = st.callback;
                    if (typeof pe == "function") {
                      st.callback = null, lt = st.priorityLevel;
                      var Ae = pe(
                        st.expirationTime <= _
                      );
                      if (_ = Q.unstable_now(), typeof Ae == "function") {
                        st.callback = Ae, ct(_), V = !0;
                        break t;
                      }
                      st === H(ie) && De(ie), ct(_);
                    } else De(ie);
                    st = H(ie);
                  }
                  if (st !== null) V = !0;
                  else {
                    var S = H(Ve);
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
            V ? xe() : Dt = !1;
          }
        }
      }
      function Oe(_, V) {
        var te = _.length;
        _.push(V);
        e: for (; 0 < te; ) {
          var pe = te - 1 >>> 1, Ae = _[pe];
          if (0 < qe(Ae, V))
            _[pe] = V, _[te] = Ae, te = pe;
          else break e;
        }
      }
      function H(_) {
        return _.length === 0 ? null : _[0];
      }
      function De(_) {
        if (_.length === 0) return null;
        var V = _[0], te = _.pop();
        if (te !== V) {
          _[0] = te;
          e: for (var pe = 0, Ae = _.length, S = Ae >>> 1; pe < S; ) {
            var B = 2 * (pe + 1) - 1, F = _[B], W = B + 1, ve = _[W];
            if (0 > qe(F, te))
              W < Ae && 0 > qe(ve, F) ? (_[pe] = ve, _[W] = te, pe = W) : (_[pe] = F, _[B] = te, pe = B);
            else if (W < Ae && 0 > qe(ve, te))
              _[pe] = ve, _[W] = te, pe = W;
            else break e;
          }
        }
        return V;
      }
      function qe(_, V) {
        var te = _.sortIndex - V.sortIndex;
        return te !== 0 ? te : _.id - V.id;
      }
      function ct(_) {
        for (var V = H(Ve); V !== null; ) {
          if (V.callback === null) De(Ve);
          else if (V.startTime <= _)
            De(Ve), V.sortIndex = V.expirationTime, Oe(ie, V);
          else break;
          V = H(Ve);
        }
      }
      function ee(_) {
        if (Jt = !1, ct(_), !Bt)
          if (H(ie) !== null)
            Bt = !0, Dt || (Dt = !0, xe());
          else {
            var V = H(Ve);
            V !== null && $(
              ee,
              V.startTime - _
            );
          }
      }
      function le() {
        return el ? !0 : !(Q.unstable_now() - ye < Yt);
      }
      function $(_, V) {
        se = ul(function() {
          _(Q.unstable_now());
        }, V);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), Q.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var Ce = performance;
        Q.unstable_now = function() {
          return Ce.now();
        };
      } else {
        var X = Date, U = X.now();
        Q.unstable_now = function() {
          return X.now() - U;
        };
      }
      var ie = [], Ve = [], _t = 1, st = null, lt = 3, Tl = !1, Bt = !1, Jt = !1, el = !1, ul = typeof setTimeout == "function" ? setTimeout : null, _e = typeof clearTimeout == "function" ? clearTimeout : null, Ze = typeof setImmediate < "u" ? setImmediate : null, Dt = !1, se = -1, Yt = 5, ye = -1;
      if (typeof Ze == "function")
        var xe = function() {
          Ze(P);
        };
      else if (typeof MessageChannel < "u") {
        var Qt = new MessageChannel(), jt = Qt.port2;
        Qt.port1.onmessage = P, xe = function() {
          jt.postMessage(null);
        };
      } else
        xe = function() {
          ul(P, 0);
        };
      Q.unstable_IdlePriority = 5, Q.unstable_ImmediatePriority = 1, Q.unstable_LowPriority = 4, Q.unstable_NormalPriority = 3, Q.unstable_Profiling = null, Q.unstable_UserBlockingPriority = 2, Q.unstable_cancelCallback = function(_) {
        _.callback = null;
      }, Q.unstable_forceFrameRate = function(_) {
        0 > _ || 125 < _ ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Yt = 0 < _ ? Math.floor(1e3 / _) : 5;
      }, Q.unstable_getCurrentPriorityLevel = function() {
        return lt;
      }, Q.unstable_next = function(_) {
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
      }, Q.unstable_requestPaint = function() {
        el = !0;
      }, Q.unstable_runWithPriority = function(_, V) {
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
      }, Q.unstable_scheduleCallback = function(_, V, te) {
        var pe = Q.unstable_now();
        switch (typeof te == "object" && te !== null ? (te = te.delay, te = typeof te == "number" && 0 < te ? pe + te : pe) : te = pe, _) {
          case 1:
            var Ae = -1;
            break;
          case 2:
            Ae = 250;
            break;
          case 5:
            Ae = 1073741823;
            break;
          case 4:
            Ae = 1e4;
            break;
          default:
            Ae = 5e3;
        }
        return Ae = te + Ae, _ = {
          id: _t++,
          callback: V,
          priorityLevel: _,
          startTime: te,
          expirationTime: Ae,
          sortIndex: -1
        }, te > pe ? (_.sortIndex = te, Oe(Ve, _), H(ie) === null && _ === H(Ve) && (Jt ? (_e(se), se = -1) : Jt = !0, $(ee, te - pe))) : (_.sortIndex = Ae, Oe(ie, _), Bt || Tl || (Bt = !0, Dt || (Dt = !0, xe()))), _;
      }, Q.unstable_shouldYield = le, Q.unstable_wrapCallback = function(_) {
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
  }(p1)), p1;
}
var q2;
function K2() {
  return q2 || (q2 = 1, process.env.NODE_ENV === "production" ? Qv.exports = RT() : Qv.exports = MT()), Qv.exports;
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
var x2;
function CT() {
  if (x2) return Ya;
  x2 = 1;
  var Q = Mo;
  function P(le) {
    var $ = "https://react.dev/errors/" + le;
    if (1 < arguments.length) {
      $ += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Ce = 2; Ce < arguments.length; Ce++)
        $ += "&args[]=" + encodeURIComponent(arguments[Ce]);
    }
    return "Minified React error #" + le + "; visit " + $ + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Oe() {
  }
  var H = {
    d: {
      f: Oe,
      r: function() {
        throw Error(P(522));
      },
      D: Oe,
      C: Oe,
      L: Oe,
      m: Oe,
      X: Oe,
      S: Oe,
      M: Oe
    },
    p: 0,
    findDOMNode: null
  }, De = Symbol.for("react.portal");
  function qe(le, $, Ce) {
    var X = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: De,
      key: X == null ? null : "" + X,
      children: le,
      containerInfo: $,
      implementation: Ce
    };
  }
  var ct = Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function ee(le, $) {
    if (le === "font") return "";
    if (typeof $ == "string")
      return $ === "use-credentials" ? $ : "";
  }
  return Ya.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = H, Ya.createPortal = function(le, $) {
    var Ce = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!$ || $.nodeType !== 1 && $.nodeType !== 9 && $.nodeType !== 11)
      throw Error(P(299));
    return qe(le, $, null, Ce);
  }, Ya.flushSync = function(le) {
    var $ = ct.T, Ce = H.p;
    try {
      if (ct.T = null, H.p = 2, le) return le();
    } finally {
      ct.T = $, H.p = Ce, H.d.f();
    }
  }, Ya.preconnect = function(le, $) {
    typeof le == "string" && ($ ? ($ = $.crossOrigin, $ = typeof $ == "string" ? $ === "use-credentials" ? $ : "" : void 0) : $ = null, H.d.C(le, $));
  }, Ya.prefetchDNS = function(le) {
    typeof le == "string" && H.d.D(le);
  }, Ya.preinit = function(le, $) {
    if (typeof le == "string" && $ && typeof $.as == "string") {
      var Ce = $.as, X = ee(Ce, $.crossOrigin), U = typeof $.integrity == "string" ? $.integrity : void 0, ie = typeof $.fetchPriority == "string" ? $.fetchPriority : void 0;
      Ce === "style" ? H.d.S(
        le,
        typeof $.precedence == "string" ? $.precedence : void 0,
        {
          crossOrigin: X,
          integrity: U,
          fetchPriority: ie
        }
      ) : Ce === "script" && H.d.X(le, {
        crossOrigin: X,
        integrity: U,
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
          H.d.M(le, {
            crossOrigin: Ce,
            integrity: typeof $.integrity == "string" ? $.integrity : void 0,
            nonce: typeof $.nonce == "string" ? $.nonce : void 0
          });
        }
      } else $ == null && H.d.M(le);
  }, Ya.preload = function(le, $) {
    if (typeof le == "string" && typeof $ == "object" && $ !== null && typeof $.as == "string") {
      var Ce = $.as, X = ee(Ce, $.crossOrigin);
      H.d.L(le, Ce, {
        crossOrigin: X,
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
        H.d.m(le, {
          as: typeof $.as == "string" && $.as !== "script" ? $.as : void 0,
          crossOrigin: Ce,
          integrity: typeof $.integrity == "string" ? $.integrity : void 0
        });
      } else H.d.m(le);
  }, Ya.requestFormReset = function(le) {
    H.d.r(le);
  }, Ya.unstable_batchedUpdates = function(le, $) {
    return le($);
  }, Ya.useFormState = function(le, $, Ce) {
    return ct.H.useFormState(le, $, Ce);
  }, Ya.useFormStatus = function() {
    return ct.H.useHostTransitionStatus();
  }, Ya.version = "19.2.0", Ya;
}
var ja = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G2;
function UT() {
  return G2 || (G2 = 1, process.env.NODE_ENV !== "production" && function() {
    function Q() {
    }
    function P(X) {
      return "" + X;
    }
    function Oe(X, U, ie) {
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
        children: X,
        containerInfo: U,
        implementation: ie
      };
    }
    function H(X, U) {
      if (X === "font") return "";
      if (typeof U == "string")
        return U === "use-credentials" ? U : "";
    }
    function De(X) {
      return X === null ? "`null`" : X === void 0 ? "`undefined`" : X === "" ? "an empty string" : 'something with type "' + typeof X + '"';
    }
    function qe(X) {
      return X === null ? "`null`" : X === void 0 ? "`undefined`" : X === "" ? "an empty string" : typeof X == "string" ? JSON.stringify(X) : typeof X == "number" ? "`" + X + "`" : 'something with type "' + typeof X + '"';
    }
    function ct() {
      var X = Ce.H;
      return X === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), X;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var ee = Mo, le = {
      d: {
        f: Q,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: Q,
        C: Q,
        L: Q,
        m: Q,
        X: Q,
        S: Q,
        M: Q
      },
      p: 0,
      findDOMNode: null
    }, $ = Symbol.for("react.portal"), Ce = ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), ja.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = le, ja.createPortal = function(X, U) {
      var ie = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!U || U.nodeType !== 1 && U.nodeType !== 9 && U.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return Oe(X, U, null, ie);
    }, ja.flushSync = function(X) {
      var U = Ce.T, ie = le.p;
      try {
        if (Ce.T = null, le.p = 2, X)
          return X();
      } finally {
        Ce.T = U, le.p = ie, le.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, ja.preconnect = function(X, U) {
      typeof X == "string" && X ? U != null && typeof U != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        qe(U)
      ) : U != null && typeof U.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        De(U.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        De(X)
      ), typeof X == "string" && (U ? (U = U.crossOrigin, U = typeof U == "string" ? U === "use-credentials" ? U : "" : void 0) : U = null, le.d.C(X, U));
    }, ja.prefetchDNS = function(X) {
      if (typeof X != "string" || !X)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          De(X)
        );
      else if (1 < arguments.length) {
        var U = arguments[1];
        typeof U == "object" && U.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          qe(U)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          qe(U)
        );
      }
      typeof X == "string" && le.d.D(X);
    }, ja.preinit = function(X, U) {
      if (typeof X == "string" && X ? U == null || typeof U != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        qe(U)
      ) : U.as !== "style" && U.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        qe(U.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        De(X)
      ), typeof X == "string" && U && typeof U.as == "string") {
        var ie = U.as, Ve = H(ie, U.crossOrigin), _t = typeof U.integrity == "string" ? U.integrity : void 0, st = typeof U.fetchPriority == "string" ? U.fetchPriority : void 0;
        ie === "style" ? le.d.S(
          X,
          typeof U.precedence == "string" ? U.precedence : void 0,
          {
            crossOrigin: Ve,
            integrity: _t,
            fetchPriority: st
          }
        ) : ie === "script" && le.d.X(X, {
          crossOrigin: Ve,
          integrity: _t,
          fetchPriority: st,
          nonce: typeof U.nonce == "string" ? U.nonce : void 0
        });
      }
    }, ja.preinitModule = function(X, U) {
      var ie = "";
      if (typeof X == "string" && X || (ie += " The `href` argument encountered was " + De(X) + "."), U !== void 0 && typeof U != "object" ? ie += " The `options` argument encountered was " + De(U) + "." : U && "as" in U && U.as !== "script" && (ie += " The `as` option encountered was " + qe(U.as) + "."), ie)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          ie
        );
      else
        switch (ie = U && typeof U.as == "string" ? U.as : "script", ie) {
          case "script":
            break;
          default:
            ie = qe(ie), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              ie,
              X
            );
        }
      typeof X == "string" && (typeof U == "object" && U !== null ? (U.as == null || U.as === "script") && (ie = H(
        U.as,
        U.crossOrigin
      ), le.d.M(X, {
        crossOrigin: ie,
        integrity: typeof U.integrity == "string" ? U.integrity : void 0,
        nonce: typeof U.nonce == "string" ? U.nonce : void 0
      })) : U == null && le.d.M(X));
    }, ja.preload = function(X, U) {
      var ie = "";
      if (typeof X == "string" && X || (ie += " The `href` argument encountered was " + De(X) + "."), U == null || typeof U != "object" ? ie += " The `options` argument encountered was " + De(U) + "." : typeof U.as == "string" && U.as || (ie += " The `as` option encountered was " + De(U.as) + "."), ie && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        ie
      ), typeof X == "string" && typeof U == "object" && U !== null && typeof U.as == "string") {
        ie = U.as;
        var Ve = H(
          ie,
          U.crossOrigin
        );
        le.d.L(X, ie, {
          crossOrigin: Ve,
          integrity: typeof U.integrity == "string" ? U.integrity : void 0,
          nonce: typeof U.nonce == "string" ? U.nonce : void 0,
          type: typeof U.type == "string" ? U.type : void 0,
          fetchPriority: typeof U.fetchPriority == "string" ? U.fetchPriority : void 0,
          referrerPolicy: typeof U.referrerPolicy == "string" ? U.referrerPolicy : void 0,
          imageSrcSet: typeof U.imageSrcSet == "string" ? U.imageSrcSet : void 0,
          imageSizes: typeof U.imageSizes == "string" ? U.imageSizes : void 0,
          media: typeof U.media == "string" ? U.media : void 0
        });
      }
    }, ja.preloadModule = function(X, U) {
      var ie = "";
      typeof X == "string" && X || (ie += " The `href` argument encountered was " + De(X) + "."), U !== void 0 && typeof U != "object" ? ie += " The `options` argument encountered was " + De(U) + "." : U && "as" in U && typeof U.as != "string" && (ie += " The `as` option encountered was " + De(U.as) + "."), ie && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        ie
      ), typeof X == "string" && (U ? (ie = H(
        U.as,
        U.crossOrigin
      ), le.d.m(X, {
        as: typeof U.as == "string" && U.as !== "script" ? U.as : void 0,
        crossOrigin: ie,
        integrity: typeof U.integrity == "string" ? U.integrity : void 0
      })) : le.d.m(X));
    }, ja.requestFormReset = function(X) {
      le.d.r(X);
    }, ja.unstable_batchedUpdates = function(X, U) {
      return X(U);
    }, ja.useFormState = function(X, U, ie) {
      return ct().useFormState(X, U, ie);
    }, ja.useFormStatus = function() {
      return ct().useHostTransitionStatus();
    }, ja.version = "19.2.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ja;
}
var w2;
function $2() {
  if (w2) return Lv.exports;
  w2 = 1;
  function Q() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q);
      } catch (P) {
        console.error(P);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (Q(), Lv.exports = CT()) : Lv.exports = UT(), Lv.exports;
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
var X2;
function HT() {
  if (X2) return v0;
  X2 = 1;
  var Q = K2(), P = Mo, Oe = $2();
  function H(l) {
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
  function qe(l) {
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
    if (qe(l) !== l)
      throw Error(H(188));
  }
  function $(l) {
    var n = l.alternate;
    if (!n) {
      if (n = qe(l), n === null) throw Error(H(188));
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
        throw Error(H(188));
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
          if (!m) throw Error(H(189));
        }
      }
      if (u.alternate !== c) throw Error(H(190));
    }
    if (u.tag !== 3) throw Error(H(188));
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
  var X = Object.assign, U = Symbol.for("react.element"), ie = Symbol.for("react.transitional.element"), Ve = Symbol.for("react.portal"), _t = Symbol.for("react.fragment"), st = Symbol.for("react.strict_mode"), lt = Symbol.for("react.profiler"), Tl = Symbol.for("react.consumer"), Bt = Symbol.for("react.context"), Jt = Symbol.for("react.forward_ref"), el = Symbol.for("react.suspense"), ul = Symbol.for("react.suspense_list"), _e = Symbol.for("react.memo"), Ze = Symbol.for("react.lazy"), Dt = Symbol.for("react.activity"), se = Symbol.for("react.memo_cache_sentinel"), Yt = Symbol.iterator;
  function ye(l) {
    return l === null || typeof l != "object" ? null : (l = Yt && l[Yt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var xe = Symbol.for("react.client.reference");
  function Qt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === xe ? null : l.displayName || l.name || null;
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
  var jt = Array.isArray, _ = P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Oe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, pe = [], Ae = -1;
  function S(l) {
    return { current: l };
  }
  function B(l) {
    0 > Ae || (l.current = pe[Ae], pe[Ae] = null, Ae--);
  }
  function F(l, n) {
    Ae++, pe[Ae] = l.current, l.current = n;
  }
  var W = S(null), ve = S(null), Ge = S(null), Ee = S(null);
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
    l.memoizedState !== null && F(Ee, l);
    var n = W.current, u = sp(n, l.type);
    n !== u && (F(ve, l), F(W, u));
  }
  function ce(l) {
    ve.current === l && (B(W), B(ve)), Ee.current === l && (B(Ee), zr._currentValue = te);
  }
  var Di, _i;
  function xa(l) {
    if (Di === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        Di = n && n[1] || "", _i = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Di + l + _i;
  }
  var uu = !1;
  function yt(l, n) {
    if (!l || uu) return "";
    uu = !0;
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
                  var j = w;
                }
                Reflect.construct(l, [], K);
              } else {
                try {
                  K.call();
                } catch (w) {
                  j = w;
                }
                l.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (w) {
                j = w;
              }
              (K = l()) && typeof K.catch == "function" && K.catch(function() {
              });
            }
          } catch (w) {
            if (w && j && typeof w.stack == "string")
              return [w.stack, j.stack];
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
`), Y = v.split(`
`);
        for (s = c = 0; c < A.length && !A[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < Y.length && !Y[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === A.length || s === Y.length)
          for (c = A.length - 1, s = Y.length - 1; 1 <= c && 0 <= s && A[c] !== Y[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (A[c] !== Y[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || A[c] !== Y[s]) {
                  var L = `
` + A[c].replace(" at new ", " at ");
                  return l.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", l.displayName)), L;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      uu = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? xa(u) : "";
  }
  function Pl(l, n) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return xa(l.type);
      case 16:
        return xa("Lazy");
      case 13:
        return l.child !== n && n !== null ? xa("Suspense Fallback") : xa("Suspense");
      case 19:
        return xa("SuspenseList");
      case 0:
      case 15:
        return yt(l.type, !1);
      case 11:
        return yt(l.type.render, !1);
      case 1:
        return yt(l.type, !0);
      case 31:
        return xa("Activity");
      default:
        return "";
    }
  }
  function gc(l) {
    try {
      var n = "", u = null;
      do
        n += Pl(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (c) {
      return `
Error generating stack: ` + c.message + `
` + c.stack;
    }
  }
  var rs = Object.prototype.hasOwnProperty, re = Q.unstable_scheduleCallback, Ri = Q.unstable_cancelCallback, iu = Q.unstable_shouldYield, vc = Q.unstable_requestPaint, gl = Q.unstable_now, Pr = Q.unstable_getCurrentPriorityLevel, Co = Q.unstable_ImmediatePriority, Uo = Q.unstable_UserBlockingPriority, Mn = Q.unstable_NormalPriority, ed = Q.unstable_LowPriority, Ho = Q.unstable_IdlePriority, ds = Q.log, Sc = Q.unstable_setDisableYieldValue, rn = null, Al = null;
  function Ga(l) {
    if (typeof ds == "function" && Sc(l), Al && typeof Al.setStrictMode == "function")
      try {
        Al.setStrictMode(rn, l);
      } catch {
      }
  }
  var Ul = Math.clz32 ? Math.clz32 : M, Mi = Math.log, g = Math.LN2;
  function M(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Mi(l) / g | 0) | 0;
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
  function ea() {
    var l = de;
    return de <<= 1, !(de & 62914560) && (de = 4194304), l;
  }
  function dn(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function Ci(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function No(l, n, u, c, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var v = l.entanglements, A = l.expirationTimes, Y = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var L = 31 - Ul(u), K = 1 << L;
      v[L] = 0, A[L] = -1;
      var j = Y[L];
      if (j !== null)
        for (Y[L] = null, L = 0; L < j.length; L++) {
          var w = j[L];
          w !== null && (w.lane &= -536870913);
        }
      u &= ~K;
    }
    c !== 0 && hs(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function hs(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Ul(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 261930;
  }
  function cu(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Ul(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function wa(l, n) {
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
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Dr(l.type));
  }
  function Em(l, n) {
    var u = V.p;
    try {
      return V.p = l, n();
    } finally {
      V.p = u;
    }
  }
  var Cn = Math.random().toString(36).slice(2), Rt = "__reactFiber$" + Cn, fa = "__reactProps$" + Cn, Ui = "__reactContainer$" + Cn, ad = "__reactEvents$" + Cn, Tm = "__reactListeners$" + Cn, E0 = "__reactHandles$" + Cn, Am = "__reactResources$" + Cn, ou = "__reactMarker$" + Cn;
  function nd(l) {
    delete l[Rt], delete l[fa], delete l[ad], delete l[Tm], delete l[E0];
  }
  function bc(l) {
    var n = l[Rt];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Ui] || u[Rt]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = Fn(l); l !== null; ) {
            if (u = l[Rt]) return u;
            l = Fn(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Ec(l) {
    if (l = l[Rt] || l[Ui]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function Bo(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(H(33));
  }
  function Tc(l) {
    var n = l[Am];
    return n || (n = l[Am] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Et(l) {
    l[ou] = !0;
  }
  var Ac = /* @__PURE__ */ new Set(), Hi = {};
  function Ni(l, n) {
    fu(l, n), fu(l + "Capture", n);
  }
  function fu(l, n) {
    for (Hi[l] = n, l = 0; l < n.length; l++)
      Ac.add(n[l]);
  }
  var ud = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), id = {}, Yo = {};
  function jo(l) {
    return rs.call(Yo, l) ? !0 : rs.call(id, l) ? !1 : ud.test(l) ? Yo[l] = !0 : (id[l] = !0, !1);
  }
  function qo(l, n, u) {
    if (jo(n))
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
  function Fu(l, n, u, c) {
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
  function Xa(l) {
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
  function ms(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Vv = /[\n"\\]/g;
  function Qa(l) {
    return l.replace(
      Vv,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ys(l, n, u, c, s, r, m, v) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Xa(n)) : l.value !== "" + Xa(n) && (l.value = "" + Xa(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? Oc(l, m, Xa(n)) : u != null ? Oc(l, m, Xa(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? l.name = "" + Xa(v) : l.removeAttribute("name");
  }
  function ps(l, n, u, c, s, r, m, v) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null)) {
        fd(l);
        return;
      }
      u = u != null ? "" + Xa(u) : "", n = n != null ? "" + Xa(n) : u, v || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = v ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), fd(l);
  }
  function Oc(l, n, u) {
    n === "number" && ms(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function xo(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Xa(u), n = null, s = 0; s < l.length; s++) {
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
    if (n != null && (n = "" + Xa(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Xa(u) : "";
  }
  function _m(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(H(92));
        if (jt(c)) {
          if (1 < c.length) throw Error(H(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = Xa(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c), fd(l);
  }
  function su(l, n) {
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
      throw Error(H(62));
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
  var Zv = /* @__PURE__ */ new Map([
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
  ]), gs = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function hn(l) {
    return gs.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Un() {
  }
  var sd = null;
  function rd(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var ru = null, zc = null;
  function vs(l) {
    var n = Ec(l);
    if (n && (l = n.stateNode)) {
      var u = l[fa] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (ys(
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
              'input[name="' + Qa(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[fa] || null;
                if (!s) throw Error(H(90));
                ys(
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
          n = u.value, n != null && xo(l, !!u.multiple, n, !1);
      }
    }
  }
  var Go = !1;
  function Mm(l, n, u) {
    if (Go) return l(n, u);
    Go = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (Go = !1, (ru !== null || zc !== null) && (Tf(), ru && (n = ru, l = zc, zc = ru = null, vs(n), l)))
        for (n = 0; n < l.length; n++) vs(l[n]);
    }
  }
  function Hl(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[fa] || null;
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
        H(231, n, typeof u)
      );
    return u;
  }
  var Iu = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ss = !1;
  if (Iu)
    try {
      var wo = {};
      Object.defineProperty(wo, "passive", {
        get: function() {
          Ss = !0;
        }
      }), window.addEventListener("test", wo, wo), window.removeEventListener("test", wo, wo);
    } catch {
      Ss = !1;
    }
  var Pu = null, Cm = null, dd = null;
  function Um() {
    if (dd) return dd;
    var l, n = Cm, u = n.length, c, s = "value" in Pu ? Pu.value : Pu.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === s[r - c]; c++) ;
    return dd = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function hd(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function bs() {
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
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? bs : z0, this.isPropagationStopped = z0, this;
    }
    return X(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = bs);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = bs);
      },
      persist: function() {
      },
      isPersistent: bs
    }), n;
  }
  var Bi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Es = Kl(Bi), Xo = X({}, Bi, { view: 0, detail: 0 }), Jv = Kl(Xo), Hm, Nm, Ts, md = X({}, Xo, {
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
    getModifierState: mn,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Ts && (Ts && l.type === "mousemove" ? (Hm = l.screenX - Ts.screenX, Nm = l.screenY - Ts.screenY) : Nm = Hm = 0, Ts = l), Hm);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Nm;
    }
  }), Qo = Kl(md), D0 = X({}, md, { dataTransfer: 0 }), _0 = Kl(D0), R0 = X({}, Xo, { relatedTarget: 0 }), yd = Kl(R0), Bm = X({}, Bi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), M0 = Kl(Bm), Dc = X({}, Bi, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), _c = Kl(Dc), Hn = X({}, Bi, { data: 0 }), C0 = Kl(Hn), Ym = {
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
  }, du = {
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
  function Nn(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = U0[l]) ? !!n[l] : !1;
  }
  function mn() {
    return Nn;
  }
  var pd = X({}, Xo, {
    key: function(l) {
      if (l.key) {
        var n = Ym[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = hd(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? du[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: mn,
    charCode: function(l) {
      return l.type === "keypress" ? hd(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? hd(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), gd = Kl(pd), jm = X({}, md, {
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
  }), Bn = Kl(jm), Kv = X({}, Xo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mn
  }), H0 = Kl(Kv), N0 = X({}, Bi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), $v = Kl(N0), qm = X({}, md, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), kv = Kl(qm), B0 = X({}, Bi, {
    newState: 0,
    oldState: 0
  }), xm = Kl(B0), vd = [9, 13, 27, 32], Lo = Iu && "CompositionEvent" in window, Rc = null;
  Iu && "documentMode" in document && (Rc = document.documentMode);
  var ta = Iu && "TextEvent" in window && !Rc, Gm = Iu && (!Lo || Rc && 8 < Rc && 11 >= Rc), As = " ", Yi = !1;
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
  var Mc = !1;
  function Y0(l, n) {
    switch (l) {
      case "compositionend":
        return wm(n);
      case "keypress":
        return n.which !== 32 ? null : (Yi = !0, As);
      case "textInput":
        return l = n.data, l === As && Yi ? null : l;
      default:
        return null;
    }
  }
  function Wv(l, n) {
    if (Mc)
      return l === "compositionend" || !Lo && Sd(l, n) ? (l = Um(), dd = Cm = Pu = null, Mc = !1, l) : null;
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
  function hu(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Xm[l.type] : n === "textarea";
  }
  function Qm(l, n, u, c) {
    ru ? zc ? zc.push(c) : zc = [c] : ru = c, n = Sr(n, "onChange"), 0 < n.length && (u = new Es(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var Cc = null, ji = null;
  function Uc(l) {
    Cg(l, 0);
  }
  function Vo(l) {
    var n = Bo(l);
    if (zm(n)) return l;
  }
  function Lm(l, n) {
    if (l === "change") return n;
  }
  var bd = !1;
  if (Iu) {
    var sa;
    if (Iu) {
      var Yn = "oninput" in document;
      if (!Yn) {
        var Vm = document.createElement("div");
        Vm.setAttribute("oninput", "return;"), Yn = typeof Vm.oninput == "function";
      }
      sa = Yn;
    } else sa = !1;
    bd = sa && (!document.documentMode || 9 < document.documentMode);
  }
  function Ed() {
    Cc && (Cc.detachEvent("onpropertychange", Td), ji = Cc = null);
  }
  function Td(l) {
    if (l.propertyName === "value" && Vo(ji)) {
      var n = [];
      Qm(
        n,
        ji,
        l,
        rd(l)
      ), Mm(Uc, n);
    }
  }
  function j0(l, n, u) {
    l === "focusin" ? (Ed(), Cc = n, ji = u, Cc.attachEvent("onpropertychange", Td)) : l === "focusout" && Ed();
  }
  function q0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Vo(ji);
  }
  function qi(l, n) {
    if (l === "click") return Vo(n);
  }
  function Hc(l, n) {
    if (l === "input" || l === "change")
      return Vo(n);
  }
  function x0(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var la = typeof Object.is == "function" ? Object.is : x0;
  function yn(l, n) {
    if (la(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!rs.call(n, s) || !la(l[s], n[s]))
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
  function Nc(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Nc(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function xi(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = ms(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = ms(l.document);
    }
    return n;
  }
  function Os(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var zs = Iu && "documentMode" in document && 11 >= document.documentMode, Gi = null, Zo = null, pn = null, jn = !1;
  function Ad(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    jn || Gi == null || Gi !== ms(c) || (c = Gi, "selectionStart" in c && Os(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), pn && yn(pn, c) || (pn = c, c = Sr(Zo, "onSelect"), 0 < c.length && (n = new Es(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = Gi)));
  }
  function ei(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var qn = {
    animationend: ei("Animation", "AnimationEnd"),
    animationiteration: ei("Animation", "AnimationIteration"),
    animationstart: ei("Animation", "AnimationStart"),
    transitionrun: ei("Transition", "TransitionRun"),
    transitionstart: ei("Transition", "TransitionStart"),
    transitioncancel: ei("Transition", "TransitionCancel"),
    transitionend: ei("Transition", "TransitionEnd")
  }, Jo = {}, wi = {};
  Iu && (wi = document.createElement("div").style, "AnimationEvent" in window || (delete qn.animationend.animation, delete qn.animationiteration.animation, delete qn.animationstart.animation), "TransitionEvent" in window || delete qn.transitionend.transition);
  function vt(l) {
    if (Jo[l]) return Jo[l];
    if (!qn[l]) return l;
    var n = qn[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in wi)
        return Jo[l] = n[u];
    return l;
  }
  var Ds = vt("animationend"), Km = vt("animationiteration"), Od = vt("animationstart"), Bc = vt("transitionrun"), _s = vt("transitionstart"), mu = vt("transitioncancel"), G0 = vt("transitionend"), yu = /* @__PURE__ */ new Map(), Ko = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ko.push("scrollEnd");
  function ra(l, n) {
    yu.set(l, n), Ni(n, [l]);
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
  }, Kt = [], Nl = 0, gn = 0;
  function La() {
    for (var l = Nl, n = gn = Nl = 0; n < l; ) {
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
  function Va(l, n, u, c) {
    Kt[Nl++] = l, Kt[Nl++] = n, Kt[Nl++] = u, Kt[Nl++] = c, gn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function vn(l, n, u, c) {
    return Va(l, n, u, c), Rs(l);
  }
  function ti(l, n) {
    return Va(l, null, null, n), Rs(l);
  }
  function zd(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Ul(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
  }
  function Rs(l) {
    if (50 < Ef)
      throw Ef = 0, sr = null, Error(H(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var da = {};
  function w0(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function il(l, n, u, c) {
    return new w0(l, n, u, c);
  }
  function jc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function li(l, n) {
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
    if (c = l, typeof l == "function") jc(l) && (m = 1);
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
          return ai(u.children, s, r, n);
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
            H(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = il(m, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function ai(l, n, u, c) {
    return l = il(7, l, c, n), l.lanes = u, l;
  }
  function $o(l, n, u) {
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
  function Za(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = Wm.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: gc(n)
      }, Wm.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: gc(n)
    };
  }
  var Ja = [], qc = 0, Ms = null, rl = 0, Da = [], ha = 0, xn = null, _a = 1, Gn = "";
  function Sn(l, n) {
    Ja[qc++] = rl, Ja[qc++] = Ms, Ms = l, rl = n;
  }
  function Fm(l, n, u) {
    Da[ha++] = _a, Da[ha++] = Gn, Da[ha++] = xn, xn = l;
    var c = _a;
    l = Gn;
    var s = 32 - Ul(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - Ul(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (c & (1 << m) - 1).toString(32), c >>= m, s -= m, _a = 1 << 32 - Ul(n) + s | u << s | c, Gn = r + l;
    } else
      _a = 1 << r | u << s | c, Gn = l;
  }
  function ko(l) {
    l.return !== null && (Sn(l, 1), Fm(l, 1, 0));
  }
  function Rd(l) {
    for (; l === Ms; )
      Ms = Ja[--qc], Ja[qc] = null, rl = Ja[--qc], Ja[qc] = null;
    for (; l === xn; )
      xn = Da[--ha], Da[ha] = null, Gn = Da[--ha], Da[ha] = null, _a = Da[--ha], Da[ha] = null;
  }
  function Cs(l, n) {
    Da[ha++] = _a, Da[ha++] = Gn, Da[ha++] = xn, _a = n.id, Gn = n.overflow, xn = l;
  }
  var Bl = null, qt = null, nt = !1, pu = null, Ol = !1, gu = Error(H(519));
  function bn(l) {
    var n = Error(
      H(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Fo(Za(n, l)), gu;
  }
  function Us(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[Rt] = l, n[fa] = c, u) {
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
        for (u = 0; u < _f.length; u++)
          at(_f[u], n);
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
        at("invalid", n), ps(
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
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || ip(n.textContent, u) ? (c.popover != null && (at("beforetoggle", n), at("toggle", n)), c.onScroll != null && at("scroll", n), c.onScrollEnd != null && at("scrollend", n), c.onClick != null && (n.onclick = Un), n = !0) : n = !1, n || bn(l, !0);
  }
  function Wo(l) {
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
  function vu(l) {
    if (l !== Bl) return !1;
    if (!nt) return Wo(l), nt = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Mf(l.type, l.memoizedProps)), u = !u), u && qt && bn(l), Wo(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(H(317));
      qt = Uh(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(H(317));
      qt = Uh(l);
    } else
      n === 27 ? (n = qt, Wn(l.type) ? (l = Tr, Tr = null, qt = l) : qt = n) : qt = Bl ? Aa(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Xi() {
    qt = Bl = null, nt = !1;
  }
  function Im() {
    var l = pu;
    return l !== null && (al === null ? al = l : al.push.apply(
      al,
      l
    ), pu = null), l;
  }
  function Fo(l) {
    pu === null ? pu = [l] : pu.push(l);
  }
  var Md = S(null), ni = null, wn = null;
  function ma(l, n, u) {
    F(Md, n._currentValue), n._currentValue = u;
  }
  function Xn(l) {
    l._currentValue = Md.current, B(Md);
  }
  function Cd(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function Su(l, n, u, c) {
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
        if (m = s.return, m === null) throw Error(H(341));
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
  function Yl(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if (s.flags & 524288) r = !0;
        else if (s.flags & 262144) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(H(387));
        if (m = m.memoizedProps, m !== null) {
          var v = s.type;
          la(s.pendingProps.value, m.value) || (l !== null ? l.push(v) : l = [v]);
        }
      } else if (s === Ee.current) {
        if (m = s.alternate, m === null) throw Error(H(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(zr) : l = [zr]);
      }
      s = s.return;
    }
    l !== null && Su(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function xc(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!la(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Be(l) {
    ni = l, wn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function k(l) {
    return Hs(ni, l);
  }
  function ui(l, n) {
    return ni === null && Be(l), Hs(l, n);
  }
  function Hs(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, wn === null) {
      if (l === null) throw Error(H(308));
      wn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else wn = wn.next = n;
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
  }, Pm = Q.unstable_scheduleCallback, ey = Q.unstable_NormalPriority, dl = {
    $$typeof: Bt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ns() {
    return {
      controller: new cl(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Bs(l) {
    l.refCount--, l.refCount === 0 && Pm(ey, function() {
      l.controller.abort();
    });
  }
  var Gc = null, Ys = 0, Qi = 0, vl = null;
  function Tt(l, n) {
    if (Gc === null) {
      var u = Gc = [];
      Ys = 0, Qi = Ah(), vl = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return Ys++, n.then(js, js), n;
  }
  function js() {
    if (--Ys === 0 && Gc !== null) {
      vl !== null && (vl.status = "fulfilled");
      var l = Gc;
      Gc = null, Qi = 0, vl = null;
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
  var ii = _.S;
  _.S = function(l, n) {
    Ky = gl(), typeof n == "object" && n !== null && typeof n.then == "function" && Tt(l, n), ii !== null && ii(l, n);
  };
  var Ka = S(null);
  function $a() {
    var l = Ka.current;
    return l !== null ? l : Ct.pooledCache;
  }
  function Io(l, n) {
    n === null ? F(Ka, Ka.current) : F(Ka, n.pool);
  }
  function wc() {
    var l = $a();
    return l === null ? null : { parent: dl._currentValue, pool: l };
  }
  var Li = Error(H(460)), Xc = Error(H(474)), Po = Error(H(542)), Qc = { then: function() {
  } };
  function ty(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function ly(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Un, Un), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, Ud(l), l;
      default:
        if (typeof n.status == "string") n.then(Un, Un);
        else {
          if (l = Ct, l !== null && 100 < l.shellSuspendCounter)
            throw Error(H(482));
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
        throw Zi = n, Li;
    }
  }
  function Vi(l) {
    try {
      var n = l._init;
      return n(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Zi = u, Li) : u;
    }
  }
  var Zi = null;
  function ay() {
    if (Zi === null) throw Error(H(459));
    var l = Zi;
    return Zi = null, l;
  }
  function Ud(l) {
    if (l === Li || l === Po)
      throw Error(H(483));
  }
  var Ji = null, Lc = 0;
  function xs(l) {
    var n = Lc;
    return Lc += 1, Ji === null && (Ji = []), ly(Ji, l, n);
  }
  function ef(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Gs(l, n) {
    throw n.$$typeof === U ? Error(H(525)) : (l = Object.prototype.toString.call(n), Error(
      H(
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
      return C = li(C, D), C.index = 0, C.sibling = null, C;
    }
    function r(C, D, N) {
      return C.index = N, l ? (N = C.alternate, N !== null ? (N = N.index, N < D ? (C.flags |= 67108866, D) : N) : (C.flags |= 67108866, D)) : (C.flags |= 1048576, D);
    }
    function m(C) {
      return l && C.alternate === null && (C.flags |= 67108866), C;
    }
    function v(C, D, N, J) {
      return D === null || D.tag !== 6 ? (D = $o(N, C.mode, J), D.return = C, D) : (D = s(D, N), D.return = C, D);
    }
    function A(C, D, N, J) {
      var Se = N.type;
      return Se === _t ? L(
        C,
        D,
        N.props.children,
        J,
        N.key
      ) : D !== null && (D.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === Ze && Vi(Se) === D.type) ? (D = s(D, N.props), ef(D, N), D.return = C, D) : (D = Dd(
        N.type,
        N.key,
        N.props,
        null,
        C.mode,
        J
      ), ef(D, N), D.return = C, D);
    }
    function Y(C, D, N, J) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== N.containerInfo || D.stateNode.implementation !== N.implementation ? (D = _d(N, C.mode, J), D.return = C, D) : (D = s(D, N.children || []), D.return = C, D);
    }
    function L(C, D, N, J, Se) {
      return D === null || D.tag !== 7 ? (D = ai(
        N,
        C.mode,
        J,
        Se
      ), D.return = C, D) : (D = s(D, N), D.return = C, D);
    }
    function K(C, D, N) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return D = $o(
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
            ), ef(N, D), N.return = C, N;
          case Ve:
            return D = _d(
              D,
              C.mode,
              N
            ), D.return = C, D;
          case Ze:
            return D = Vi(D), K(C, D, N);
        }
        if (jt(D) || ye(D))
          return D = ai(
            D,
            C.mode,
            N,
            null
          ), D.return = C, D;
        if (typeof D.then == "function")
          return K(C, xs(D), N);
        if (D.$$typeof === Bt)
          return K(
            C,
            ui(C, D),
            N
          );
        Gs(C, D);
      }
      return null;
    }
    function j(C, D, N, J) {
      var Se = D !== null ? D.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return Se !== null ? null : v(C, D, "" + N, J);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case ie:
            return N.key === Se ? A(C, D, N, J) : null;
          case Ve:
            return N.key === Se ? Y(C, D, N, J) : null;
          case Ze:
            return N = Vi(N), j(C, D, N, J);
        }
        if (jt(N) || ye(N))
          return Se !== null ? null : L(C, D, N, J, null);
        if (typeof N.then == "function")
          return j(
            C,
            D,
            xs(N),
            J
          );
        if (N.$$typeof === Bt)
          return j(
            C,
            D,
            ui(C, N),
            J
          );
        Gs(C, N);
      }
      return null;
    }
    function w(C, D, N, J, Se) {
      if (typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint")
        return C = C.get(N) || null, v(D, C, "" + J, Se);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case ie:
            return C = C.get(
              J.key === null ? N : J.key
            ) || null, A(D, C, J, Se);
          case Ve:
            return C = C.get(
              J.key === null ? N : J.key
            ) || null, Y(D, C, J, Se);
          case Ze:
            return J = Vi(J), w(
              C,
              D,
              N,
              J,
              Se
            );
        }
        if (jt(J) || ye(J))
          return C = C.get(N) || null, L(D, C, J, Se, null);
        if (typeof J.then == "function")
          return w(
            C,
            D,
            N,
            xs(J),
            Se
          );
        if (J.$$typeof === Bt)
          return w(
            C,
            D,
            N,
            ui(D, J),
            Se
          );
        Gs(D, J);
      }
      return null;
    }
    function fe(C, D, N, J) {
      for (var Se = null, dt = null, me = D, Xe = D = 0, Ke = null; me !== null && Xe < N.length; Xe++) {
        me.index > Xe ? (Ke = me, me = null) : Ke = me.sibling;
        var gt = j(
          C,
          me,
          N[Xe],
          J
        );
        if (gt === null) {
          me === null && (me = Ke);
          break;
        }
        l && me && gt.alternate === null && n(C, me), D = r(gt, D, Xe), dt === null ? Se = gt : dt.sibling = gt, dt = gt, me = Ke;
      }
      if (Xe === N.length)
        return u(C, me), nt && Sn(C, Xe), Se;
      if (me === null) {
        for (; Xe < N.length; Xe++)
          me = K(C, N[Xe], J), me !== null && (D = r(
            me,
            D,
            Xe
          ), dt === null ? Se = me : dt.sibling = me, dt = me);
        return nt && Sn(C, Xe), Se;
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
        ), dt === null ? Se = Ke : dt.sibling = Ke, dt = Ke);
      return l && me.forEach(function(Pn) {
        return n(C, Pn);
      }), nt && Sn(C, Xe), Se;
    }
    function ze(C, D, N, J) {
      if (N == null) throw Error(H(151));
      for (var Se = null, dt = null, me = D, Xe = D = 0, Ke = null, gt = N.next(); me !== null && !gt.done; Xe++, gt = N.next()) {
        me.index > Xe ? (Ke = me, me = null) : Ke = me.sibling;
        var Pn = j(C, me, gt.value, J);
        if (Pn === null) {
          me === null && (me = Ke);
          break;
        }
        l && me && Pn.alternate === null && n(C, me), D = r(Pn, D, Xe), dt === null ? Se = Pn : dt.sibling = Pn, dt = Pn, me = Ke;
      }
      if (gt.done)
        return u(C, me), nt && Sn(C, Xe), Se;
      if (me === null) {
        for (; !gt.done; Xe++, gt = N.next())
          gt = K(C, gt.value, J), gt !== null && (D = r(gt, D, Xe), dt === null ? Se = gt : dt.sibling = gt, dt = gt);
        return nt && Sn(C, Xe), Se;
      }
      for (me = c(me); !gt.done; Xe++, gt = N.next())
        gt = w(me, C, Xe, gt.value, J), gt !== null && (l && gt.alternate !== null && me.delete(gt.key === null ? Xe : gt.key), D = r(gt, D, Xe), dt === null ? Se = gt : dt.sibling = gt, dt = gt);
      return l && me.forEach(function(Zg) {
        return n(C, Zg);
      }), nt && Sn(C, Xe), Se;
    }
    function Ht(C, D, N, J) {
      if (typeof N == "object" && N !== null && N.type === _t && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case ie:
            e: {
              for (var Se = N.key; D !== null; ) {
                if (D.key === Se) {
                  if (Se = N.type, Se === _t) {
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
                  } else if (D.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === Ze && Vi(Se) === D.type) {
                    u(
                      C,
                      D.sibling
                    ), J = s(D, N.props), ef(J, N), J.return = C, C = J;
                    break e;
                  }
                  u(C, D);
                  break;
                } else n(C, D);
                D = D.sibling;
              }
              N.type === _t ? (J = ai(
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
              ), ef(J, N), J.return = C, C = J);
            }
            return m(C);
          case Ve:
            e: {
              for (Se = N.key; D !== null; ) {
                if (D.key === Se)
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
            return N = Vi(N), Ht(
              C,
              D,
              N,
              J
            );
        }
        if (jt(N))
          return fe(
            C,
            D,
            N,
            J
          );
        if (ye(N)) {
          if (Se = ye(N), typeof Se != "function") throw Error(H(150));
          return N = Se.call(N), ze(
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
            xs(N),
            J
          );
        if (N.$$typeof === Bt)
          return Ht(
            C,
            D,
            ui(C, N),
            J
          );
        Gs(C, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, D !== null && D.tag === 6 ? (u(C, D.sibling), J = s(D, N), J.return = C, C = J) : (u(C, D), J = $o(N, C.mode, J), J.return = C, C = J), m(C)) : u(C, D);
    }
    return function(C, D, N, J) {
      try {
        Lc = 0;
        var Se = Ht(
          C,
          D,
          N,
          J
        );
        return Ji = null, Se;
      } catch (me) {
        if (me === Li || me === Po) throw me;
        var dt = il(29, me, null, C.mode);
        return dt.lanes = J, dt.return = C, dt;
      } finally {
      }
    };
  }
  var Ki = X0(!0), ny = X0(!1), ci = !1;
  function ws(l) {
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
  function oi(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ka(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, pt & 2) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = Rs(l), zd(l, null, u), n;
    }
    return Va(l, c, n, u), Rs(l);
  }
  function $i(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, cu(l, u);
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
  function ki() {
    if (uy) {
      var l = vl;
      if (l !== null) throw l;
    }
  }
  function bu(l, n, u, c) {
    uy = !1;
    var s = l.updateQueue;
    ci = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, v = s.shared.pending;
    if (v !== null) {
      s.shared.pending = null;
      var A = v, Y = A.next;
      A.next = null, m === null ? r = Y : m.next = Y, m = A;
      var L = l.alternate;
      L !== null && (L = L.updateQueue, v = L.lastBaseUpdate, v !== m && (v === null ? L.firstBaseUpdate = Y : v.next = Y, L.lastBaseUpdate = A));
    }
    if (r !== null) {
      var K = s.baseState;
      m = 0, L = Y = A = null, v = r;
      do {
        var j = v.lane & -536870913, w = j !== v.lane;
        if (w ? (et & j) === j : (c & j) === j) {
          j !== 0 && j === Qi && (uy = !0), L !== null && (L = L.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          e: {
            var fe = l, ze = v;
            j = n;
            var Ht = u;
            switch (ze.tag) {
              case 1:
                if (fe = ze.payload, typeof fe == "function") {
                  K = fe.call(Ht, K, j);
                  break e;
                }
                K = fe;
                break e;
              case 3:
                fe.flags = fe.flags & -65537 | 128;
              case 0:
                if (fe = ze.payload, j = typeof fe == "function" ? fe.call(Ht, K, j) : fe, j == null) break e;
                K = X({}, K, j);
                break e;
              case 2:
                ci = !0;
            }
          }
          j = v.callback, j !== null && (l.flags |= 64, w && (l.flags |= 8192), w = s.callbacks, w === null ? s.callbacks = [j] : w.push(j));
        } else
          w = {
            lane: j,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, L === null ? (Y = L = w, A = K) : L = L.next = w, m |= j;
        if (v = v.next, v === null) {
          if (v = s.shared.pending, v === null)
            break;
          w = v, v = w.next, w.next = null, s.lastBaseUpdate = w, s.shared.pending = null;
        }
      } while (!0);
      L === null && (A = K), s.baseState = A, s.firstBaseUpdate = Y, s.lastBaseUpdate = L, r === null && (s.shared.lanes = 0), $n |= m, l.lanes = m, l.memoizedState = K;
    }
  }
  function Bd(l, n) {
    if (typeof l != "function")
      throw Error(H(191, l));
    l.call(n);
  }
  function Wi(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Bd(u[l], n);
  }
  var zl = S(null), Vc = S(0);
  function Q0(l, n) {
    l = Kn, F(Vc, l), F(zl, n), Kn = l | n.baseLanes;
  }
  function Xs() {
    F(Vc, Kn), F(zl, zl.current);
  }
  function tf() {
    Kn = Vc.current, B(zl), B(Vc);
  }
  var ya = S(null), Wa = null;
  function Eu(l) {
    var n = l.alternate;
    F($t, $t.current & 1), F(ya, l), Wa === null && (n === null || zl.current !== null || n.memoizedState !== null) && (Wa = l);
  }
  function lf(l) {
    F($t, $t.current), F(ya, l), Wa === null && (Wa = l);
  }
  function Yd(l) {
    l.tag === 22 ? (F($t, $t.current), F(ya, l), Wa === null && (Wa = l)) : Qn();
  }
  function Qn() {
    F($t, $t.current), F(ya, ya.current);
  }
  function pa(l) {
    B(ya), Wa === l && (Wa = null), B($t);
  }
  var $t = S(0);
  function af(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || On(u) || oc(u)))
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
  var Tu = 0, Qe = null, At = null, hl = null, Zc = !1, Jc = !1, fi = !1, Qs = 0, nf = 0, Fi = null, L0 = 0;
  function tl() {
    throw Error(H(321));
  }
  function si(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!la(l[u], n[u])) return !1;
    return !0;
  }
  function Ls(l, n, u, c, s, r) {
    return Tu = r, Qe = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, _.H = l === null || l.memoizedState === null ? F0 : Id, fi = !1, r = u(c, s), fi = !1, Jc && (r = V0(
      n,
      u,
      c,
      s
    )), jd(l), r;
  }
  function jd(l) {
    _.H = Is;
    var n = At !== null && At.next !== null;
    if (Tu = 0, hl = At = Qe = null, Zc = !1, nf = 0, Fi = null, n) throw Error(H(300));
    l === null || ml || (l = l.dependencies, l !== null && xc(l) && (ml = !0));
  }
  function V0(l, n, u, c) {
    Qe = l;
    var s = 0;
    do {
      if (Jc && (Fi = null), nf = 0, Jc = !1, 25 <= s) throw Error(H(301));
      if (s += 1, hl = At = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      _.H = I0, r = n(u, c);
    } while (Jc);
    return r;
  }
  function Fv() {
    var l = _.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? $c(n) : n, l = l.useState()[0], (At !== null ? At.memoizedState : null) !== l && (Qe.flags |= 1024), n;
  }
  function qd() {
    var l = Qs !== 0;
    return Qs = 0, l;
  }
  function Kc(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Vs(l) {
    if (Zc) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Zc = !1;
    }
    Tu = 0, hl = At = Qe = null, Jc = !1, nf = Qs = 0, Fi = null;
  }
  function jl() {
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
        throw Qe.alternate === null ? Error(H(467)) : Error(H(310));
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
  function Zs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function $c(l) {
    var n = nf;
    return nf += 1, Fi === null && (Fi = []), l = ly(Fi, l, n), n = Qe, (hl === null ? n.memoizedState : hl.next) === null && (n = n.alternate, _.H = n === null || n.memoizedState === null ? F0 : Id), l;
  }
  function uf(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return $c(l);
      if (l.$$typeof === Bt) return k(l);
    }
    throw Error(H(438, String(l)));
  }
  function xd(l) {
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
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Zs(), Qe.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = se;
    return n.index++, u;
  }
  function Au(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function Ou(l) {
    var n = ol();
    return Gd(n, At, l);
  }
  function Gd(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(H(311));
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
      var v = m = null, A = null, Y = n, L = !1;
      do {
        var K = Y.lane & -536870913;
        if (K !== Y.lane ? (et & K) === K : (Tu & K) === K) {
          var j = Y.revertLane;
          if (j === 0)
            A !== null && (A = A.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null
            }), K === Qi && (L = !0);
          else if ((Tu & j) === j) {
            Y = Y.next, j === Qi && (L = !0);
            continue;
          } else
            K = {
              lane: 0,
              revertLane: Y.revertLane,
              gesture: null,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null
            }, A === null ? (v = A = K, m = r) : A = A.next = K, Qe.lanes |= j, $n |= j;
          K = Y.action, fi && u(r, K), r = Y.hasEagerState ? Y.eagerState : u(r, K);
        } else
          j = {
            lane: K,
            revertLane: Y.revertLane,
            gesture: Y.gesture,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null
          }, A === null ? (v = A = j, m = r) : A = A.next = j, Qe.lanes |= K, $n |= K;
        Y = Y.next;
      } while (Y !== null && Y !== n);
      if (A === null ? m = r : A.next = v, !la(r, l.memoizedState) && (ml = !0, L && (u = vl, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = A, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function wd(l) {
    var n = ol(), u = n.queue;
    if (u === null) throw Error(H(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      la(r, n.memoizedState) || (ml = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function iy(l, n, u) {
    var c = Qe, s = ol(), r = nt;
    if (r) {
      if (u === void 0) throw Error(H(407));
      u = u();
    } else u = n();
    var m = !la(
      (At || s).memoizedState,
      u
    );
    if (m && (s.memoizedState = u, ml = !0), s = s.queue, Zd(Xd.bind(null, c, s, l), [
      l
    ]), s.getSnapshot !== n || m || hl !== null && hl.memoizedState.tag & 1) {
      if (c.flags |= 2048, Wc(
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
      ), Ct === null) throw Error(H(349));
      r || Tu & 127 || Js(c, n, u);
    }
    return u;
  }
  function Js(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Qe.updateQueue, n === null ? (n = Zs(), Qe.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
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
      return !la(l, u);
    } catch {
      return !0;
    }
  }
  function Ld(l) {
    var n = ti(l, 2);
    n !== null && Ta(n, l, 2);
  }
  function oy(l) {
    var n = jl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), fi) {
        Ga(!0);
        try {
          u();
        } finally {
          Ga(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Au,
      lastRenderedState: l
    }, n;
  }
  function ql(l, n, u, c) {
    return l.baseState = u, Gd(
      l,
      At,
      typeof c == "function" ? c : Au
    );
  }
  function Z0(l, n, u, c, s) {
    if (Fs(l)) throw Error(H(485));
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
      } catch (Y) {
        kc(l, n, Y);
      } finally {
        r !== null && m.types !== null && (r.types = m.types), _.T = r;
      }
    } else
      try {
        r = u(s, c), sy(l, n, r);
      } catch (Y) {
        kc(l, n, Y);
      }
  }
  function sy(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        ry(l, n, c);
      },
      function(c) {
        return kc(l, n, c);
      }
    ) : ry(l, n, u);
  }
  function ry(l, n, u) {
    n.status = "fulfilled", n.value = u, dy(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, fy(l, u)));
  }
  function kc(l, n, u) {
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
  function Ks(l, n) {
    return n;
  }
  function hy(l, n) {
    if (nt) {
      var u = Ct.formState;
      if (u !== null) {
        e: {
          var c = Qe;
          if (nt) {
            if (qt) {
              t: {
                for (var s = qt, r = Ol; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = Aa(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                qt = Aa(
                  s.nextSibling
                ), c = s.data === "F!";
                break e;
              }
            }
            bn(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = jl(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ks,
      lastRenderedState: n
    }, u.queue = c, u = Wd.bind(
      null,
      Qe,
      c
    ), c.dispatch = u, c = oy(!1), r = Ii.bind(
      null,
      Qe,
      !1,
      c.queue
    ), c = jl(), s = {
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
    return $s(n, At, l);
  }
  function $s(l, n, u) {
    if (n = Gd(
      l,
      n,
      Ks
    )[0], l = Ou(Au)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = $c(n);
      } catch (m) {
        throw m === Li ? Po : m;
      }
    else c = n;
    n = ol();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (Qe.flags |= 2048, Wc(
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
      return $s(n, u, l);
    ol(), n = n.memoizedState, u = ol();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Wc(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = Qe.updateQueue, n === null && (n = Zs(), Qe.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function py() {
    return ol().memoizedState;
  }
  function cf(l, n, u, c) {
    var s = jl();
    Qe.flags |= l, s.memoizedState = Wc(
      1 | n,
      { destroy: void 0 },
      u,
      c === void 0 ? null : c
    );
  }
  function of(l, n, u, c) {
    var s = ol();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    At !== null && c !== null && si(c, At.memoizedState.deps) ? s.memoizedState = Wc(n, r, u, c) : (Qe.flags |= l, s.memoizedState = Wc(
      1 | n,
      r,
      u,
      c
    ));
  }
  function Vd(l, n) {
    cf(8390656, 8, l, n);
  }
  function Zd(l, n) {
    of(2048, 8, l, n);
  }
  function gy(l) {
    Qe.flags |= 4;
    var n = Qe.updateQueue;
    if (n === null)
      n = Zs(), Qe.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function ks(l) {
    var n = ol().memoizedState;
    return gy({ ref: n, nextImpl: l }), function() {
      if (pt & 2) throw Error(H(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Jd(l, n) {
    return of(4, 2, l, n);
  }
  function vy(l, n) {
    return of(4, 4, l, n);
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
    u = u != null ? u.concat([l]) : null, of(4, 4, Kd.bind(null, n, l), u);
  }
  function Ln() {
  }
  function $d(l, n) {
    var u = ol();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && si(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function K0(l, n) {
    var u = ol();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && si(n, c[1]))
      return c[0];
    if (c = l(), fi) {
      Ga(!0);
      try {
        l();
      } finally {
        Ga(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function Ws(l, n, u) {
    return u === void 0 || Tu & 1073741824 && !(et & 261930) ? l.memoizedState = n : (l.memoizedState = u, l = og(), Qe.lanes |= l, $n |= l, u);
  }
  function zu(l, n, u, c) {
    return la(u, n) ? u : zl.current !== null ? (l = Ws(l, u, c), la(l, n) || (ml = !0), l) : !(Tu & 42) || Tu & 1073741824 && !(et & 261930) ? (ml = !0, l.memoizedState = u) : (l = og(), Qe.lanes |= l, $n |= l, n);
  }
  function kd(l, n, u, c, s) {
    var r = V.p;
    V.p = r !== 0 && 8 > r ? r : 8;
    var m = _.T, v = {};
    _.T = v, Ii(l, !1, n, u);
    try {
      var A = s(), Y = _.S;
      if (Y !== null && Y(v, A), A !== null && typeof A == "object" && typeof A.then == "function") {
        var L = qs(
          A,
          c
        );
        ri(
          l,
          n,
          L,
          Ua(l)
        );
      } else
        ri(
          l,
          n,
          c,
          Ua(l)
        );
    } catch (K) {
      ri(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: K },
        Ua()
      );
    } finally {
      V.p = r, m !== null && v.types !== null && (m.types = v.types), _.T = m;
    }
  }
  function $0() {
  }
  function ff(l, n, u, c) {
    if (l.tag !== 5) throw Error(H(476));
    var s = sf(l).queue;
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
  function sf(l) {
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
        lastRenderedReducer: Au,
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
        lastRenderedReducer: Au,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function Mt(l) {
    var n = sf(l);
    n.next === null && (n = l.alternate.memoizedState), ri(
      l,
      n.next.queue,
      {},
      Ua()
    );
  }
  function by() {
    return k(zr);
  }
  function k0() {
    return ol().memoizedState;
  }
  function Ey() {
    return ol().memoizedState;
  }
  function Du(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = Ua();
          l = oi(u);
          var c = ka(n, l, u);
          c !== null && (Ta(c, n, u), $i(c, n, u)), n = { cache: Ns() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function W0(l, n, u) {
    var c = Ua();
    u = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Fs(l) ? Fd(n, u) : (u = vn(l, n, u, c), u !== null && (Ta(u, l, c), Ty(u, n, c)));
  }
  function Wd(l, n, u) {
    var c = Ua();
    ri(l, n, u, c);
  }
  function ri(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Fs(l)) Fd(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, v = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = v, la(v, m))
            return Va(l, n, s, 0), Ct === null && La(), !1;
        } catch {
        } finally {
        }
      if (u = vn(l, n, s, c), u !== null)
        return Ta(u, l, c), Ty(u, n, c), !0;
    }
    return !1;
  }
  function Ii(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: Ah(),
      gesture: null,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Fs(l)) {
      if (n) throw Error(H(479));
    } else
      n = vn(
        l,
        u,
        c,
        2
      ), n !== null && Ta(n, l, 2);
  }
  function Fs(l) {
    var n = l.alternate;
    return l === Qe || n !== null && n === Qe;
  }
  function Fd(l, n) {
    Jc = Zc = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function Ty(l, n, u) {
    if (u & 4194048) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, cu(l, u);
    }
  }
  var Is = {
    readContext: k,
    use: uf,
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
  Is.useEffectEvent = tl;
  var F0 = {
    readContext: k,
    use: uf,
    useCallback: function(l, n) {
      return jl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: k,
    useEffect: Vd,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, cf(
        4194308,
        4,
        Kd.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return cf(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      cf(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = jl();
      n = n === void 0 ? null : n;
      var c = l();
      if (fi) {
        Ga(!0);
        try {
          l();
        } finally {
          Ga(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = jl();
      if (u !== void 0) {
        var s = u(n);
        if (fi) {
          Ga(!0);
          try {
            u(n);
          } finally {
            Ga(!1);
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
      var n = jl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = oy(l);
      var n = l.queue, u = Wd.bind(null, Qe, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Ln,
    useDeferredValue: function(l, n) {
      var u = jl();
      return Ws(u, l, n);
    },
    useTransition: function() {
      var l = oy(!1);
      return l = kd.bind(
        null,
        Qe,
        l.queue,
        !0,
        !1
      ), jl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = Qe, s = jl();
      if (nt) {
        if (u === void 0)
          throw Error(H(407));
        u = u();
      } else {
        if (u = n(), Ct === null)
          throw Error(H(349));
        et & 127 || Js(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Vd(Xd.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, Wc(
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
      var l = jl(), n = Ct.identifierPrefix;
      if (nt) {
        var u = Gn, c = _a;
        u = (c & ~(1 << 32 - Ul(c) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = Qs++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = L0++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: by,
    useFormState: hy,
    useActionState: hy,
    useOptimistic: function(l) {
      var n = jl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = Ii.bind(
        null,
        Qe,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: xd,
    useCacheRefresh: function() {
      return jl().memoizedState = Du.bind(
        null,
        Qe
      );
    },
    useEffectEvent: function(l) {
      var n = jl(), u = { impl: l };
      return n.memoizedState = u, function() {
        if (pt & 2)
          throw Error(H(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Id = {
    readContext: k,
    use: uf,
    useCallback: $d,
    useContext: k,
    useEffect: Zd,
    useImperativeHandle: Sy,
    useInsertionEffect: Jd,
    useLayoutEffect: vy,
    useMemo: K0,
    useReducer: Ou,
    useRef: py,
    useState: function() {
      return Ou(Au);
    },
    useDebugValue: Ln,
    useDeferredValue: function(l, n) {
      var u = ol();
      return zu(
        u,
        At.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Ou(Au)[0], n = ol().memoizedState;
      return [
        typeof l == "boolean" ? l : $c(l),
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
      return ql(u, At, l, n);
    },
    useMemoCache: xd,
    useCacheRefresh: Ey
  };
  Id.useEffectEvent = ks;
  var I0 = {
    readContext: k,
    use: uf,
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
      return wd(Au);
    },
    useDebugValue: Ln,
    useDeferredValue: function(l, n) {
      var u = ol();
      return At === null ? Ws(u, l, n) : zu(
        u,
        At.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = wd(Au)[0], n = ol().memoizedState;
      return [
        typeof l == "boolean" ? l : $c(l),
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
      return At !== null ? ql(u, At, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: xd,
    useCacheRefresh: Ey
  };
  I0.useEffectEvent = ks;
  function Fc(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : X({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var En = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = Ua(), s = oi(c);
      s.payload = n, u != null && (s.callback = u), n = ka(l, s, c), n !== null && (Ta(n, l, c), $i(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = Ua(), s = oi(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = ka(l, s, c), n !== null && (Ta(n, l, c), $i(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = Ua(), c = oi(u);
      c.tag = 2, n != null && (c.callback = n), n = ka(l, c, u), n !== null && (Ta(n, l, u), $i(n, l, u));
    }
  };
  function Ay(l, n, u, c, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, m) : n.prototype && n.prototype.isPureReactComponent ? !yn(u, c) || !yn(s, r) : !0;
  }
  function P0(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && En.enqueueReplaceState(n, n.state, null);
  }
  function Pi(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = X({}, u));
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
  function rf(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Ps(l, n, u) {
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
    return u = oi(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      rf(l, n);
    }, u;
  }
  function Dy(l) {
    return l = oi(l), l.tag = 3, l;
  }
  function _y(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        Ps(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      Ps(n, u, c), typeof s != "function" && (kt === null ? kt = /* @__PURE__ */ new Set([this]) : kt.add(this));
      var v = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function Iv(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && Yl(
        n,
        u,
        s,
        !0
      ), u = ya.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return Wa === null ? Sh() : u.alternate === null && Gt === 0 && (Gt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === Qc ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), hr(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === Qc ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), hr(l, c, s)), !1;
        }
        throw Error(H(435, u.tag));
      }
      return hr(l, c, s), Sh(), !1;
    }
    if (nt)
      return n = ya.current, n !== null ? (!(n.flags & 65536) && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== gu && (l = Error(H(422), { cause: c }), Fo(Za(l, u)))) : (c !== gu && (n = Error(H(423), {
        cause: c
      }), Fo(
        Za(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = Za(c, u), s = zy(
        l.stateNode,
        c,
        s
      ), Nd(l, s), Gt !== 4 && (Gt = 2)), !1;
    var r = Error(H(520), { cause: c });
    if (r = Za(r, u), fr === null ? fr = [r] : fr.push(r), Gt !== 4 && (Gt = 2), n === null) return !0;
    c = Za(c, u), u = n;
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
  var th = Error(H(461)), ml = !1;
  function Vt(l, n, u, c) {
    n.child = l === null ? ny(n, null, u, c) : Ki(
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
    return Be(n), c = Ls(
      l,
      n,
      u,
      m,
      r,
      s
    ), v = qd(), l !== null && !ml ? (Kc(l, n, s), Pa(l, n, s)) : (nt && v && ko(n), n.flags |= 1, Vt(l, n, c, s), n.child);
  }
  function My(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !jc(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, Cy(
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
      if (u = u.compare, u = u !== null ? u : yn, u(m, c) && l.ref === n.ref)
        return Pa(l, n, s);
    }
    return n.flags |= 1, l = li(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function Cy(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (yn(r, c) && l.ref === n.ref)
        if (ml = !1, n.pendingProps = c = r, nh(l, s))
          l.flags & 131072 && (ml = !0);
        else
          return n.lanes = l.lanes, Pa(l, n, s);
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
        return ga(
          l,
          n,
          r,
          u,
          c
        );
      }
      if (u & 536870912)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Io(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? Q0(n, r) : Xs(), Yd(n);
      else
        return c = n.lanes = 536870912, ga(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u,
          c
        );
    } else
      r !== null ? (Io(n, r.cachePool), Q0(n, r), Qn(), n.memoizedState = null) : (l !== null && Io(n, null), Xs(), Qn());
    return Vt(l, n, s, u), n.child;
  }
  function ec(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function ga(l, n, u, c, s) {
    var r = $a();
    return r = r === null ? null : { parent: dl._currentValue, pool: r }, n.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && Io(n, null), Xs(), Yd(n), l !== null && Yl(l, n, c, !0), n.childLanes = s, null;
  }
  function er(l, n) {
    return n = ar(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function va(l, n, u) {
    return Ki(n, l.child, null, u), l = er(n, n.pendingProps), l.flags |= 2, pa(n), n.memoizedState = null, l;
  }
  function tg(l, n, u) {
    var c = n.pendingProps, s = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (nt) {
        if (c.mode === "hidden")
          return l = er(n, c), n.lanes = 536870912, ec(null, l);
        if (lf(n), (l = qt) ? (l = jg(
          l,
          Ol
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: xn !== null ? { id: _a, overflow: Gn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = km(l), u.return = n, n.child = u, Bl = n, qt = null)) : l = null, l === null) throw bn(n);
        return n.lanes = 536870912, null;
      }
      return er(n, c);
    }
    var r = l.memoizedState;
    if (r !== null) {
      var m = r.dehydrated;
      if (lf(n), s)
        if (n.flags & 256)
          n.flags &= -257, n = va(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(H(558));
      else if (ml || Yl(l, n, u, !1), s = (u & l.childLanes) !== 0, ml || s) {
        if (c = Ct, c !== null && (m = wa(c, u), m !== 0 && m !== r.retryLane))
          throw r.retryLane = m, ti(l, m), Ta(c, l, m), th;
        Sh(), n = va(
          l,
          n,
          u
        );
      } else
        l = r.treeContext, qt = Aa(m.nextSibling), Bl = n, nt = !0, pu = null, Ol = !1, l !== null && Cs(n, l), n = er(n, c), n.flags |= 4096;
      return n;
    }
    return l = li(l.child, {
      mode: c.mode,
      children: c.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function Fa(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(H(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function lh(l, n, u, c, s) {
    return Be(n), u = Ls(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = qd(), l !== null && !ml ? (Kc(l, n, s), Pa(l, n, s)) : (nt && c && ko(n), n.flags |= 1, Vt(l, n, u, s), n.child);
  }
  function tc(l, n, u, c, s, r) {
    return Be(n), n.updateQueue = null, u = V0(
      n,
      c,
      u,
      s
    ), jd(l), c = qd(), l !== null && !ml ? (Kc(l, n, r), Pa(l, n, r)) : (nt && c && ko(n), n.flags |= 1, Vt(l, n, u, r), n.child);
  }
  function Uy(l, n, u, c, s) {
    if (Be(n), n.stateNode === null) {
      var r = da, m = u.contextType;
      typeof m == "object" && m !== null && (r = k(m)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = En, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, ws(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? k(m) : da, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (Fc(
        n,
        u,
        m,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && En.enqueueReplaceState(r, r.state, null), bu(n, c, r, s), ki(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var v = n.memoizedProps, A = Pi(u, v);
      r.props = A;
      var Y = r.context, L = u.contextType;
      m = da, typeof L == "object" && L !== null && (m = k(L));
      var K = u.getDerivedStateFromProps;
      L = typeof K == "function" || typeof r.getSnapshotBeforeUpdate == "function", v = n.pendingProps !== v, L || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (v || Y !== m) && P0(
        n,
        r,
        c,
        m
      ), ci = !1;
      var j = n.memoizedState;
      r.state = j, bu(n, c, r, s), ki(), Y = n.memoizedState, v || j !== Y || ci ? (typeof K == "function" && (Fc(
        n,
        u,
        K,
        c
      ), Y = n.memoizedState), (A = ci || Ay(
        n,
        u,
        A,
        c,
        j,
        Y,
        m
      )) ? (L || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = Y), r.props = c, r.state = Y, r.context = m, c = A) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, Hd(l, n), m = n.memoizedProps, L = Pi(u, m), r.props = L, K = n.pendingProps, j = r.context, Y = u.contextType, A = da, typeof Y == "object" && Y !== null && (A = k(Y)), v = u.getDerivedStateFromProps, (Y = typeof v == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== K || j !== A) && P0(
        n,
        r,
        c,
        A
      ), ci = !1, j = n.memoizedState, r.state = j, bu(n, c, r, s), ki();
      var w = n.memoizedState;
      m !== K || j !== w || ci || l !== null && l.dependencies !== null && xc(l.dependencies) ? (typeof v == "function" && (Fc(
        n,
        u,
        v,
        c
      ), w = n.memoizedState), (L = ci || Ay(
        n,
        u,
        L,
        c,
        j,
        w,
        A
      ) || l !== null && l.dependencies !== null && xc(l.dependencies)) ? (Y || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, w, A), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        w,
        A
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && j === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && j === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = w), r.props = c, r.state = w, r.context = A, c = L) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && j === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && j === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, Fa(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = Ki(
      n,
      l.child,
      null,
      s
    ), n.child = Ki(
      n,
      null,
      u,
      s
    )) : Vt(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = Pa(
      l,
      n,
      s
    ), l;
  }
  function Vn(l, n, u, c) {
    return Xi(), n.flags |= 256, Vt(l, n, u, c), n.child;
  }
  var tr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function lr(l) {
    return { baseLanes: l, cachePool: wc() };
  }
  function Ia(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Ea), l;
  }
  function Hy(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : ($t.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (nt) {
        if (s ? Eu(n) : Qn(), (l = qt) ? (l = jg(
          l,
          Ol
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: xn !== null ? { id: _a, overflow: Gn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = km(l), u.return = n, n.child = u, Bl = n, qt = null)) : l = null, l === null) throw bn(n);
        return oc(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var v = c.children;
      return c = c.fallback, s ? (Qn(), s = n.mode, v = ar(
        { mode: "hidden", children: v },
        s
      ), c = ai(
        c,
        s,
        u,
        null
      ), v.return = n, c.return = n, v.sibling = c, n.child = v, c = n.child, c.memoizedState = lr(u), c.childLanes = Ia(
        l,
        m,
        u
      ), n.memoizedState = tr, ec(null, c)) : (Eu(n), lc(n, v));
    }
    var A = l.memoizedState;
    if (A !== null && (v = A.dehydrated, v !== null)) {
      if (r)
        n.flags & 256 ? (Eu(n), n.flags &= -257, n = Ic(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Qn(), n.child = l.child, n.flags |= 128, n = null) : (Qn(), v = c.fallback, s = n.mode, c = ar(
          { mode: "visible", children: c.children },
          s
        ), v = ai(
          v,
          s,
          u,
          null
        ), v.flags |= 2, c.return = n, v.return = n, c.sibling = v, n.child = c, Ki(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = lr(u), c.childLanes = Ia(
          l,
          m,
          u
        ), n.memoizedState = tr, n = ec(null, c));
      else if (Eu(n), oc(v)) {
        if (m = v.nextSibling && v.nextSibling.dataset, m) var Y = m.dgst;
        m = Y, c = Error(H(419)), c.stack = "", c.digest = m, Fo({ value: c, source: null, stack: null }), n = Ic(
          l,
          n,
          u
        );
      } else if (ml || Yl(l, n, u, !1), m = (u & l.childLanes) !== 0, ml || m) {
        if (m = Ct, m !== null && (c = wa(m, u), c !== 0 && c !== A.retryLane))
          throw A.retryLane = c, ti(l, c), Ta(m, l, c), th;
        On(v) || Sh(), n = Ic(
          l,
          n,
          u
        );
      } else
        On(v) ? (n.flags |= 192, n.child = l.child, n = null) : (l = A.treeContext, qt = Aa(
          v.nextSibling
        ), Bl = n, nt = !0, pu = null, Ol = !1, l !== null && Cs(n, l), n = lc(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Qn(), v = c.fallback, s = n.mode, A = l.child, Y = A.sibling, c = li(A, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = A.subtreeFlags & 65011712, Y !== null ? v = li(
      Y,
      v
    ) : (v = ai(
      v,
      s,
      u,
      null
    ), v.flags |= 2), v.return = n, c.return = n, c.sibling = v, n.child = c, ec(null, c), c = n.child, v = l.child.memoizedState, v === null ? v = lr(u) : (s = v.cachePool, s !== null ? (A = dl._currentValue, s = s.parent !== A ? { parent: A, pool: A } : s) : s = wc(), v = {
      baseLanes: v.baseLanes | u,
      cachePool: s
    }), c.memoizedState = v, c.childLanes = Ia(
      l,
      m,
      u
    ), n.memoizedState = tr, ec(l.child, c)) : (Eu(n), u = l.child, l = u.sibling, u = li(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function lc(l, n) {
    return n = ar(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function ar(l, n) {
    return l = il(22, l, null, n), l.lanes = 0, l;
  }
  function Ic(l, n, u) {
    return Ki(n, l.child, null, u), l = lc(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function Pc(l, n, u) {
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
          l.memoizedState !== null && Pc(l, u, n);
        else if (l.tag === 19)
          Pc(l, u, n);
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
          l = u.alternate, l !== null && af(l) === null && (s = u), u = u.sibling;
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
          if (l = s.alternate, l !== null && af(l) === null) {
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
  function Pa(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), $n |= n.lanes, !(u & n.childLanes))
      if (l !== null) {
        if (Yl(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(H(153));
    if (n.child !== null) {
      for (l = n.child, u = li(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = li(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function nh(l, n) {
    return l.lanes & n ? !0 : (l = l.dependencies, !!(l !== null && xc(l)));
  }
  function uh(l, n, u) {
    switch (n.tag) {
      case 3:
        Lt(n, n.stateNode.containerInfo), ma(n, dl, l.memoizedState.cache), Xi();
        break;
      case 27:
      case 5:
        qa(n);
        break;
      case 4:
        Lt(n, n.stateNode.containerInfo);
        break;
      case 10:
        ma(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, lf(n), null;
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (Eu(n), n.flags |= 128, null) : u & n.child.childLanes ? Hy(l, n, u) : (Eu(n), l = Pa(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        Eu(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (Yl(
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
        ma(n, dl, l.memoizedState.cache);
    }
    return Pa(l, n, u);
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
          if (l = Vi(n.elementType), n.type = l, typeof l == "function")
            jc(l) ? (c = Pi(l, c), n.tag = 1, n = Uy(
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
            throw n = Qt(l) || l, Error(H(306, n, ""));
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
        return c = n.type, s = Pi(
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
          ), l === null) throw Error(H(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, Hd(l, n), bu(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, ma(n, dl, c), c !== r.cache && Su(
            n,
            [dl],
            u,
            !0
          ), ki(), c = m.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = Vn(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== s) {
              s = Za(
                Error(H(424)),
                n
              ), Fo(s), n = Vn(
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
              for (qt = Aa(l.firstChild), Bl = n, nt = !0, pu = null, Ol = !0, u = ny(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Xi(), c === s) {
              n = Pa(
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
        return Fa(l, n), l === null ? (u = Nf(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : nt || (u = n.type, l = n.pendingProps, c = cc(
          Ge.current
        ).createElement(u), c[Rt] = n, c[fa] = l, $l(c, u, l), Et(c), n.stateNode = c) : n.memoizedState = Nf(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return qa(n), l === null && nt && (c = n.stateNode = Uf(
          n.type,
          n.pendingProps,
          Ge.current
        ), Bl = n, Ol = !0, s = qt, Wn(n.type) ? (Tr = s, qt = Aa(c.firstChild)) : qt = s), Vt(
          l,
          n,
          n.pendingProps.children,
          u
        ), Fa(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && nt && ((s = c = qt) && (c = tS(
          c,
          n.type,
          n.pendingProps,
          Ol
        ), c !== null ? (n.stateNode = c, Bl = n, qt = Aa(c.firstChild), Ol = !1, s = !0) : s = !1), s || bn(n)), qa(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = r.children, Mf(s, r) ? c = null : m !== null && Mf(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = Ls(
          l,
          n,
          Fv,
          null,
          null,
          u
        ), zr._currentValue = s), Fa(l, n), Vt(l, n, c, u), n.child;
      case 6:
        return l === null && nt && ((l = u = qt) && (u = ke(
          u,
          n.pendingProps,
          Ol
        ), u !== null ? (n.stateNode = u, Bl = n, qt = null, l = !0) : l = !1), l || bn(n)), null;
      case 13:
        return Hy(l, n, u);
      case 4:
        return Lt(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = Ki(
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
        return c = n.pendingProps, ma(n, n.type, c.value), Vt(l, n, c.children, u), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, Be(n), s = k(s), c = c(s), n.flags |= 1, Vt(l, n, c, u), n.child;
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
        return Be(n), c = k(dl), l === null ? (s = $a(), s === null && (s = Ct, r = Ns(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = { parent: c, cache: s }, ws(n), ma(n, dl, s)) : (l.lanes & u && (Hd(l, n), bu(n, null, null, u), ki()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), ma(n, dl, c)) : (c = r.cache, ma(n, dl, c), c !== s.cache && Su(
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
    throw Error(H(156, n.tag));
  }
  function _u(l) {
    l.flags |= 4;
  }
  function Yy(l, n, u, c, s) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (s & 335544128) === s)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (rg()) l.flags |= 8192;
        else
          throw Zi = Qc, Xc;
    } else l.flags &= -16777217;
  }
  function jy(l, n) {
    if (n.type !== "stylesheet" || n.state.loading & 4)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Na(n))
      if (rg()) l.flags |= 8192;
      else
        throw Zi = Qc, Xc;
  }
  function aa(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? ea() : 536870912, l.lanes |= n, ll |= n);
  }
  function df(l, n) {
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
  function Ne(l) {
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
        return Ne(n), null;
      case 1:
        return Ne(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), Xn(dl), mt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (vu(n) ? _u(n) : l === null || l.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Im())), Ne(n), null;
      case 26:
        var s = n.type, r = n.memoizedState;
        return l === null ? (_u(n), r !== null ? (Ne(n), jy(n, r)) : (Ne(n), Yy(
          n,
          s,
          null,
          c,
          u
        ))) : r ? r !== l.memoizedState ? (_u(n), Ne(n), jy(n, r)) : (Ne(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== c && _u(n), Ne(n), Yy(
          n,
          s,
          l,
          c,
          u
        )), null;
      case 27:
        if (ce(n), u = Ge.current, s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && _u(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(H(166));
            return Ne(n), null;
          }
          l = W.current, vu(n) ? Us(n) : (l = Uf(s, c, u), n.stateNode = l, _u(n));
        }
        return Ne(n), null;
      case 5:
        if (ce(n), s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && _u(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(H(166));
            return Ne(n), null;
          }
          if (r = W.current, vu(n))
            Us(n);
          else {
            var m = cc(
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
            r[Rt] = n, r[fa] = c;
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
            c && _u(n);
          }
        }
        return Ne(n), Yy(
          n,
          n.type,
          l === null ? null : l.memoizedProps,
          n.pendingProps,
          u
        ), null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && _u(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(H(166));
          if (l = Ge.current, vu(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = Bl, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[Rt] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || ip(l.nodeValue, u)), l || bn(n, !0);
          } else
            l = cc(l).createTextNode(
              c
            ), l[Rt] = n, n.stateNode = l;
        }
        return Ne(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (c = vu(n), u !== null) {
            if (l === null) {
              if (!c) throw Error(H(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(H(557));
              l[Rt] = n;
            } else
              Xi(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            Ne(n), l = !1;
          } else
            u = Im(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (pa(n), n) : (pa(n), null);
          if (n.flags & 128)
            throw Error(H(558));
        }
        return Ne(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = vu(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(H(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(H(317));
              s[Rt] = n;
            } else
              Xi(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            Ne(n), s = !1;
          } else
            s = Im(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (pa(n), n) : (pa(n), null);
        }
        return pa(n), n.flags & 128 ? (n.lanes = u, n) : (u = c !== null, l = l !== null && l.memoizedState !== null, u && (c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool), r = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), aa(n, n.updateQueue), Ne(n), null);
      case 4:
        return mt(), l === null && Rf(n.stateNode.containerInfo), Ne(n), null;
      case 10:
        return Xn(n.type), Ne(n), null;
      case 19:
        if (B($t), c = n.memoizedState, c === null) return Ne(n), null;
        if (s = (n.flags & 128) !== 0, r = c.rendering, r === null)
          if (s) df(c, !1);
          else {
            if (Gt !== 0 || l !== null && l.flags & 128)
              for (l = n.child; l !== null; ) {
                if (r = af(l), r !== null) {
                  for (n.flags |= 128, df(c, !1), l = r.updateQueue, n.updateQueue = l, aa(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    $m(u, l), u = u.sibling;
                  return F(
                    $t,
                    $t.current & 1 | 2
                  ), nt && Sn(n, c.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            c.tail !== null && gl() > St && (n.flags |= 128, s = !0, df(c, !1), n.lanes = 4194304);
          }
        else {
          if (!s)
            if (l = af(r), l !== null) {
              if (n.flags |= 128, s = !0, l = l.updateQueue, n.updateQueue = l, aa(n, l), df(c, !0), c.tail === null && c.tailMode === "hidden" && !r.alternate && !nt)
                return Ne(n), null;
            } else
              2 * gl() - c.renderingStartTime > St && u !== 536870912 && (n.flags |= 128, s = !0, df(c, !1), n.lanes = 4194304);
          c.isBackwards ? (r.sibling = n.child, n.child = r) : (l = c.last, l !== null ? l.sibling = r : n.child = r, c.last = r);
        }
        return c.tail !== null ? (l = c.tail, c.rendering = l, c.tail = l.sibling, c.renderingStartTime = gl(), l.sibling = null, u = $t.current, F(
          $t,
          s ? u & 1 | 2 : u & 1
        ), nt && Sn(n, c.treeForkCount), l) : (Ne(n), null);
      case 22:
      case 23:
        return pa(n), tf(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? u & 536870912 && !(n.flags & 128) && (Ne(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ne(n), u = n.updateQueue, u !== null && aa(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && B(Ka), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Xn(dl), Ne(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(H(156, n.tag));
  }
  function ag(l, n) {
    switch (Rd(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return Xn(dl), mt(), l = n.flags, l & 65536 && !(l & 128) ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return ce(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (pa(n), n.alternate === null)
            throw Error(H(340));
          Xi();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (pa(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(H(340));
          Xi();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return B($t), null;
      case 4:
        return mt(), null;
      case 10:
        return Xn(n.type), null;
      case 22:
      case 23:
        return pa(n), tf(), l !== null && B(Ka), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return Xn(dl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ng(l, n) {
    switch (Rd(n), n.tag) {
      case 3:
        Xn(dl), mt();
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
        n.memoizedState !== null && pa(n);
        break;
      case 13:
        pa(n);
        break;
      case 19:
        B($t);
        break;
      case 10:
        Xn(n.type);
        break;
      case 22:
      case 23:
        pa(n), tf(), l !== null && B(Ka);
        break;
      case 24:
        Xn(dl);
    }
  }
  function Tn(l, n) {
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
  function en(l, n, u) {
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
              var A = u, Y = v;
              try {
                Y();
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
        Wi(n, u);
      } catch (c) {
        zt(l, l.return, c);
      }
    }
  }
  function ac(l, n, u) {
    u.props = Pi(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      zt(l, n, c);
    }
  }
  function Ru(l, n) {
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
  function Zn(l, n) {
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
  function qy(l) {
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
      op(c, l.type, u, n), c[fa] = n;
    } catch (s) {
      zt(l, l.return, s);
    }
  }
  function xy(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Wn(l.type) || l.tag === 4;
  }
  function hf(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || xy(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Wn(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function mf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Un));
    else if (c !== 4 && (c === 27 && Wn(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (mf(l, n, u), l = l.sibling; l !== null; )
        mf(l, n, u), l = l.sibling;
  }
  function yf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && Wn(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (yf(l, n, u), l = l.sibling; l !== null; )
        yf(l, n, u), l = l.sibling;
  }
  function Gy(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      $l(n, c, u), n[Rt] = l, n[fa] = u;
    } catch (r) {
      zt(l, l.return, r);
    }
  }
  var di = !1, Sl = !1, oh = !1, wy = typeof WeakSet == "function" ? WeakSet : Set, xl = null;
  function pf(l, n) {
    if (l = l.containerInfo, Rh = _l, l = xi(l), Os(l)) {
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
            var m = 0, v = -1, A = -1, Y = 0, L = 0, K = l, j = null;
            t: for (; ; ) {
              for (var w; K !== u || s !== 0 && K.nodeType !== 3 || (v = m + s), K !== r || c !== 0 && K.nodeType !== 3 || (A = m + c), K.nodeType === 3 && (m += K.nodeValue.length), (w = K.firstChild) !== null; )
                j = K, K = w;
              for (; ; ) {
                if (K === l) break t;
                if (j === u && ++Y === s && (v = m), j === r && ++L === c && (A = m), (w = K.nextSibling) !== null) break;
                K = j, j = K.parentNode;
              }
              K = w;
            }
            u = v === -1 || A === -1 ? null : { start: v, end: A };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Mh = { focusedElem: l, selectionRange: u }, _l = !1, xl = n; xl !== null; )
      if (n = xl, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, xl = l;
      else
        for (; xl !== null; ) {
          switch (n = xl, r = n.alternate, l = n.flags, n.tag) {
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
                  var fe = Pi(
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
                  Er(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Er(l);
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
              if (l & 1024) throw Error(H(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, xl = l;
            break;
          }
          xl = n.return;
        }
  }
  function nr(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        hi(l, u), c & 4 && Tn(5, u);
        break;
      case 1:
        if (hi(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              zt(u, u.return, m);
            }
          else {
            var s = Pi(
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
        c & 64 && ih(u), c & 512 && Ru(u, u.return);
        break;
      case 3:
        if (hi(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
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
            Wi(l, n);
          } catch (m) {
            zt(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && c & 4 && Gy(u);
      case 26:
      case 5:
        hi(l, u), n === null && c & 4 && qy(u), c & 512 && Ru(u, u.return);
        break;
      case 12:
        hi(l, u);
        break;
      case 31:
        hi(l, u), c & 4 && ug(l, u);
        break;
      case 13:
        hi(l, u), c & 4 && Ly(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = tn.bind(
          null,
          u
        ), Cf(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || di, !c) {
          n = n !== null && n.memoizedState !== null || Sl, s = di;
          var r = Sl;
          di = c, (Sl = n) && !r ? Jn(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : hi(l, u), di = s, Sl = r;
        }
        break;
      case 30:
        break;
      default:
        hi(l, u);
    }
  }
  function Xy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Xy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && nd(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var xt = null, Sa = !1;
  function Mu(l, n, u) {
    for (u = u.child; u !== null; )
      Qy(l, n, u), u = u.sibling;
  }
  function Qy(l, n, u) {
    if (Al && typeof Al.onCommitFiberUnmount == "function")
      try {
        Al.onCommitFiberUnmount(rn, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Sl || Zn(u, n), Mu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Sl || Zn(u, n);
        var c = xt, s = Sa;
        Wn(u.type) && (xt = u.stateNode, Sa = !1), Mu(
          l,
          n,
          u
        ), co(u.stateNode), xt = c, Sa = s;
        break;
      case 5:
        Sl || Zn(u, n);
      case 6:
        if (c = xt, s = Sa, xt = null, Mu(
          l,
          n,
          u
        ), xt = c, Sa = s, xt !== null)
          if (Sa)
            try {
              (xt.nodeType === 9 ? xt.body : xt.nodeName === "HTML" ? xt.ownerDocument.body : xt).removeChild(u.stateNode);
            } catch (r) {
              zt(
                u,
                n,
                r
              );
            }
          else
            try {
              xt.removeChild(u.stateNode);
            } catch (r) {
              zt(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        xt !== null && (Sa ? (l = xt, dp(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Xf(l)) : dp(xt, u.stateNode));
        break;
      case 4:
        c = xt, s = Sa, xt = u.stateNode.containerInfo, Sa = !0, Mu(
          l,
          n,
          u
        ), xt = c, Sa = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        en(2, u, n), Sl || en(4, u, n), Mu(
          l,
          n,
          u
        );
        break;
      case 1:
        Sl || (Zn(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && ac(
          u,
          n,
          c
        )), Mu(
          l,
          n,
          u
        );
        break;
      case 21:
        Mu(
          l,
          n,
          u
        );
        break;
      case 22:
        Sl = (c = Sl) || u.memoizedState !== null, Mu(
          l,
          n,
          u
        ), Sl = c;
        break;
      default:
        Mu(
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
        Xf(l);
      } catch (u) {
        zt(n, n.return, u);
      }
    }
  }
  function Ly(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Xf(l);
      } catch (u) {
        zt(n, n.return, u);
      }
  }
  function ur(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new wy()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new wy()), n;
      default:
        throw Error(H(435, l.tag));
    }
  }
  function ir(l, n) {
    var u = ur(l);
    n.forEach(function(c) {
      if (!u.has(c)) {
        u.add(c);
        var s = Dg.bind(null, l, c);
        c.then(s, s);
      }
    });
  }
  function ba(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, m = n, v = m;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (Wn(v.type)) {
                xt = v.stateNode, Sa = !1;
                break e;
              }
              break;
            case 5:
              xt = v.stateNode, Sa = !1;
              break e;
            case 3:
            case 4:
              xt = v.stateNode.containerInfo, Sa = !0;
              break e;
          }
          v = v.return;
        }
        if (xt === null) throw Error(H(160));
        Qy(r, m, s), xt = null, Sa = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
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
        ba(n, l), Ra(l), c & 4 && (en(3, l, l.return), Tn(3, l), en(5, l, l.return));
        break;
      case 1:
        ba(n, l), Ra(l), c & 512 && (Sl || u === null || Zn(u, u.return)), c & 64 && di && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = Je;
        if (ba(n, l), Ra(l), c & 512 && (Sl || u === null || Zn(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[ou] || r[Rt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
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
                      throw Error(H(468, c));
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
        ba(n, l), Ra(l), c & 512 && (Sl || u === null || Zn(u, u.return)), u !== null && c & 4 && ch(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (ba(n, l), Ra(l), c & 512 && (Sl || u === null || Zn(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            su(s, "");
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
        if (ba(n, l), Ra(l), c & 4) {
          if (l.stateNode === null)
            throw Error(H(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (fe) {
            zt(l, l.return, fe);
          }
        }
        break;
      case 3:
        if (jf = null, s = Je, Je = na(n.containerInfo), ba(n, l), Je = s, Ra(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Xf(n.containerInfo);
          } catch (fe) {
            zt(l, l.return, fe);
          }
        oh && (oh = !1, Vy(l));
        break;
      case 4:
        c = Je, Je = na(
          l.stateNode.containerInfo
        ), ba(n, l), Ra(l), Je = c;
        break;
      case 12:
        ba(n, l), Ra(l);
        break;
      case 31:
        ba(n, l), Ra(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, ir(l, c)));
        break;
      case 13:
        ba(n, l), Ra(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (kn = gl()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, ir(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var A = u !== null && u.memoizedState !== null, Y = di, L = Sl;
        if (di = Y || s, Sl = L || A, ba(n, l), Sl = L, di = Y, Ra(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || A || di || Sl || eo(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                A = u = n;
                try {
                  if (r = A.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    v = A.stateNode;
                    var K = A.memoizedProps.style, j = K != null && K.hasOwnProperty("display") ? K.display : null;
                    v.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim();
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
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, ir(l, u))));
        break;
      case 19:
        ba(n, l), Ra(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, ir(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ba(n, l), Ra(l);
    }
  }
  function Ra(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (xy(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(H(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = hf(l);
            yf(l, r, s);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (su(m, ""), u.flags &= -33);
            var v = hf(l);
            yf(l, v, m);
            break;
          case 3:
          case 4:
            var A = u.stateNode.containerInfo, Y = hf(l);
            mf(
              l,
              Y,
              A
            );
            break;
          default:
            throw Error(H(161));
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
  function hi(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        nr(l, n.alternate, n), n = n.sibling;
  }
  function eo(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          en(4, n, n.return), eo(n);
          break;
        case 1:
          Zn(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && ac(
            n,
            n.return,
            u
          ), eo(n);
          break;
        case 27:
          co(n.stateNode);
        case 26:
        case 5:
          Zn(n, n.return), eo(n);
          break;
        case 22:
          n.memoizedState === null && eo(n);
          break;
        case 30:
          eo(n);
          break;
        default:
          eo(n);
      }
      l = l.sibling;
    }
  }
  function Jn(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Jn(
            s,
            r,
            u
          ), Tn(4, r);
          break;
        case 1:
          if (Jn(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (Y) {
              zt(c, c.return, Y);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var v = c.stateNode;
            try {
              var A = s.shared.hiddenCallbacks;
              if (A !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < A.length; s++)
                  Bd(A[s], v);
            } catch (Y) {
              zt(c, c.return, Y);
            }
          }
          u && m & 64 && ih(r), Ru(r, r.return);
          break;
        case 27:
          Gy(r);
        case 26:
        case 5:
          Jn(
            s,
            r,
            u
          ), u && c === null && m & 4 && qy(r), Ru(r, r.return);
          break;
        case 12:
          Jn(
            s,
            r,
            u
          );
          break;
        case 31:
          Jn(
            s,
            r,
            u
          ), u && m & 4 && ug(s, r);
          break;
        case 13:
          Jn(
            s,
            r,
            u
          ), u && m & 4 && Ly(s, r);
          break;
        case 22:
          r.memoizedState === null && Jn(
            s,
            r,
            u
          ), Ru(r, r.return);
          break;
        case 30:
          break;
        default:
          Jn(
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
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Bs(u));
  }
  function rh(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Bs(l));
  }
  function An(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        gf(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function gf(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        An(
          l,
          n,
          u,
          c
        ), s & 2048 && Tn(9, n);
        break;
      case 1:
        An(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        An(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Bs(l)));
        break;
      case 12:
        if (s & 2048) {
          An(
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
          An(
            l,
            n,
            u,
            c
          );
        break;
      case 31:
        An(
          l,
          n,
          u,
          c
        );
        break;
      case 13:
        An(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, m = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? An(
          l,
          n,
          u,
          c
        ) : cr(l, n) : r._visibility & 2 ? An(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 2, vf(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && sh(m, n);
        break;
      case 24:
        An(
          l,
          n,
          u,
          c
        ), s & 2048 && rh(n.alternate, n);
        break;
      default:
        An(
          l,
          n,
          u,
          c
        );
    }
  }
  function vf(l, n, u, c, s) {
    for (s = s && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var r = l, m = n, v = u, A = c, Y = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          vf(
            r,
            m,
            v,
            A,
            s
          ), Tn(8, m);
          break;
        case 23:
          break;
        case 22:
          var L = m.stateNode;
          m.memoizedState !== null ? L._visibility & 2 ? vf(
            r,
            m,
            v,
            A,
            s
          ) : cr(
            r,
            m
          ) : (L._visibility |= 2, vf(
            r,
            m,
            v,
            A,
            s
          )), s && Y & 2048 && sh(
            m.alternate,
            m
          );
          break;
        case 24:
          vf(
            r,
            m,
            v,
            A,
            s
          ), s && Y & 2048 && rh(m.alternate, m);
          break;
        default:
          vf(
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
  function cr(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            cr(u, c), s & 2048 && sh(
              c.alternate,
              c
            );
            break;
          case 24:
            cr(u, c), s & 2048 && rh(c.alternate, c);
            break;
          default:
            cr(u, c);
        }
        n = n.sibling;
      }
  }
  var Ma = 8192;
  function Cu(l, n, u) {
    if (l.subtreeFlags & Ma)
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
        Cu(
          l,
          n,
          u
        ), l.flags & Ma && l.memoizedState !== null && Yu(
          u,
          Je,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Cu(
          l,
          n,
          u
        );
        break;
      case 3:
      case 4:
        var c = Je;
        Je = na(l.stateNode.containerInfo), Cu(
          l,
          n,
          u
        ), Je = c;
        break;
      case 22:
        l.memoizedState === null && (c = l.alternate, c !== null && c.memoizedState !== null ? (c = Ma, Ma = 16777216, Cu(
          l,
          n,
          u
        ), Ma = c) : Cu(
          l,
          n,
          u
        ));
        break;
      default:
        Cu(
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
  function Sf(l) {
    var n = l.deletions;
    if (l.flags & 16) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          xl = c, hh(
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
        Sf(l), l.flags & 2048 && en(9, l, l.return);
        break;
      case 3:
        Sf(l);
        break;
      case 12:
        Sf(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, or(l)) : Sf(l);
        break;
      default:
        Sf(l);
    }
  }
  function or(l) {
    var n = l.deletions;
    if (l.flags & 16) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          xl = c, hh(
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
          en(8, n, n.return), or(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, or(n));
          break;
        default:
          or(n);
      }
      l = l.sibling;
    }
  }
  function hh(l, n) {
    for (; xl !== null; ) {
      var u = xl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          en(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          Bs(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, xl = c;
      else
        e: for (u = l; xl !== null; ) {
          c = xl;
          var s = c.sibling, r = c.return;
          if (Xy(c), c === u) {
            xl = null;
            break e;
          }
          if (s !== null) {
            s.return = r, xl = s;
            break e;
          }
          xl = r;
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
  }, Jy = typeof WeakMap == "function" ? WeakMap : Map, pt = 0, Ct = null, ut = null, et = 0, Ot = 0, Ue = null, Uu = !1, nc = !1, mh = !1, Kn = 0, Gt = 0, $n = 0, to = 0, yh = 0, Ea = 0, ll = 0, fr = null, al = null, ph = !1, kn = 0, Ky = 0, St = 1 / 0, bf = null, kt = null, Dl = 0, mi = null, uc = null, Hu = 0, Ca = 0, gh = null, vh = null, Ef = 0, sr = null;
  function Ua() {
    return pt & 2 && et !== 0 ? et & -et : _.T !== null ? Ah() : ld();
  }
  function og() {
    if (Ea === 0)
      if (!(et & 536870912) || nt) {
        var l = ae;
        ae <<= 1, !(ae & 3932160) && (ae = 262144), Ea = l;
      } else Ea = 536870912;
    return l = ya.current, l !== null && (l.flags |= 32), Ea;
  }
  function Ta(l, n, u) {
    (l === Ct && (Ot === 2 || Ot === 9) || l.cancelPendingCommit !== null) && (Nu(l, 0), yi(
      l,
      et,
      Ea,
      !1
    )), Ci(l, u), (!(pt & 2) || l !== Ct) && (l === Ct && (!(pt & 2) && (to |= u), Gt === 4 && yi(
      l,
      et,
      Ea,
      !1
    )), Bu(l));
  }
  function fg(l, n, u) {
    if (pt & 6) throw Error(H(327));
    var c = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || Pe(l, n), s = c ? mg(l, n) : bh(l, n, !0), r = c;
    do {
      if (s === 0) {
        nc && !c && yi(l, n, 0, !1);
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
              s = fr;
              var A = v.current.memoizedState.isDehydrated;
              if (A && (Nu(v, m).flags |= 256), m = bh(
                v,
                m,
                !1
              ), m !== 2) {
                if (mh && !A) {
                  v.errorRecoveryDisabledLanes |= r, to |= r, s = 4;
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
          Nu(l, 0), yi(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, r = s, r) {
            case 0:
            case 1:
              throw Error(H(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              yi(
                c,
                n,
                Ea,
                !Uu
              );
              break e;
            case 2:
              al = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(H(329));
          }
          if ((n & 62914560) === n && (s = kn + 300 - gl(), 10 < s)) {
            if (yi(
              c,
              n,
              Ea,
              !Uu
            ), he(c, 0, !0) !== 0) break e;
            Hu = n, c.timeoutHandle = br(
              rr.bind(
                null,
                c,
                u,
                al,
                bf,
                ph,
                n,
                Ea,
                to,
                ll,
                Uu,
                r,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break e;
          }
          rr(
            c,
            u,
            al,
            bf,
            ph,
            n,
            Ea,
            to,
            ll,
            Uu,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Bu(l);
  }
  function rr(l, n, u, c, s, r, m, v, A, Y, L, K, j, w) {
    if (l.timeoutHandle = -1, K = n.subtreeFlags, K & 8192 || (K & 16785408) === 16785408) {
      K = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Un
      }, ig(
        n,
        r,
        K
      );
      var fe = (r & 62914560) === r ? kn - gl() : (r & 4194048) === r ? Ky - gl() : 0;
      if (fe = vp(
        K,
        fe
      ), fe !== null) {
        Hu = r, l.cancelPendingCommit = fe(
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
            j,
            w
          )
        ), yi(l, r, m, !Y);
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
            if (!la(r(), s)) return !1;
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
  function yi(l, n, u, c) {
    n &= ~yh, n &= ~to, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Ul(s), m = 1 << r;
      c[r] = -1, s &= ~m;
    }
    u !== 0 && hs(l, u, n);
  }
  function Tf() {
    return pt & 6 ? !0 : (gi(0), !1);
  }
  function $y() {
    if (ut !== null) {
      if (Ot === 0)
        var l = ut.return;
      else
        l = ut, wn = ni = null, Vs(l), Ji = null, Lc = 0, l = ut;
      for (; l !== null; )
        ng(l.alternate, l), l = l.return;
      ut = null;
    }
  }
  function Nu(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Bg(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Hu = 0, $y(), Ct = l, ut = u = li(l.current, null), et = n, Ot = 0, Ue = null, Uu = !1, nc = Pe(l, n), mh = !1, ll = Ea = yh = to = $n = Gt = 0, al = fr = null, ph = !1, n & 8 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - Ul(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return Kn = n, La(), u;
  }
  function Af(l, n) {
    Qe = null, _.H = Is, n === Li || n === Po ? (n = ay(), Ot = 3) : n === Xc ? (n = ay(), Ot = 4) : Ot = n === th ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Ue = n, ut === null && (Gt = 1, rf(
      l,
      Za(n, l.current)
    ));
  }
  function rg() {
    var l = ya.current;
    return l === null ? !0 : (et & 4194048) === et ? Wa === null : (et & 62914560) === et || et & 536870912 ? l === Wa : !1;
  }
  function dg() {
    var l = _.H;
    return _.H = Is, l === null ? Is : l;
  }
  function hg() {
    var l = _.A;
    return _.A = cg, l;
  }
  function Sh() {
    Gt = 4, Uu || (et & 4194048) !== et && ya.current !== null || (nc = !0), !($n & 134217727) && !(to & 134217727) || Ct === null || yi(
      Ct,
      et,
      Ea,
      !1
    );
  }
  function bh(l, n, u) {
    var c = pt;
    pt |= 2;
    var s = dg(), r = hg();
    (Ct !== l || et !== n) && (bf = null, Nu(l, n)), n = !1;
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
              ya.current === null && (n = !0);
              var Y = Ot;
              if (Ot = 0, Ue = null, lo(l, v, A, Y), u && nc) {
                m = 0;
                break e;
              }
              break;
            default:
              Y = Ot, Ot = 0, Ue = null, lo(l, v, A, Y);
          }
        }
        Pv(), m = Gt;
        break;
      } catch (L) {
        Af(l, L);
      }
    while (!0);
    return n && l.shellSuspendCounter++, wn = ni = null, pt = c, _.H = s, _.A = r, ut === null && (Ct = null, et = 0, La()), m;
  }
  function Pv() {
    for (; ut !== null; ) yg(ut);
  }
  function mg(l, n) {
    var u = pt;
    pt |= 2;
    var c = dg(), s = hg();
    Ct !== l || et !== n ? (bf = null, St = gl() + 500, Nu(l, n)) : nc = Pe(
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
              Ot = 0, Ue = null, lo(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (ty(r)) {
                Ot = 0, Ue = null, pg(n);
                break;
              }
              n = function() {
                Ot !== 2 && Ot !== 9 || Ct !== l || (Ot = 7), Bu(l);
              }, r.then(n, n);
              break e;
            case 3:
              Ot = 7;
              break e;
            case 4:
              Ot = 5;
              break e;
            case 7:
              ty(r) ? (Ot = 0, Ue = null, pg(n)) : (Ot = 0, Ue = null, lo(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (ut.tag) {
                case 26:
                  m = ut.memoizedState;
                case 5:
                case 27:
                  var v = ut;
                  if (m ? Na(m) : v.stateNode.complete) {
                    Ot = 0, Ue = null;
                    var A = v.sibling;
                    if (A !== null) ut = A;
                    else {
                      var Y = v.return;
                      Y !== null ? (ut = Y, dr(Y)) : ut = null;
                    }
                    break t;
                  }
              }
              Ot = 0, Ue = null, lo(l, n, r, 5);
              break;
            case 6:
              Ot = 0, Ue = null, lo(l, n, r, 6);
              break;
            case 8:
              $y(), Gt = 6;
              break e;
            default:
              throw Error(H(462));
          }
        }
        ic();
        break;
      } catch (L) {
        Af(l, L);
      }
    while (!0);
    return wn = ni = null, _.H = c, _.A = s, pt = u, ut !== null ? 0 : (Ct = null, et = 0, La(), Gt);
  }
  function ic() {
    for (; ut !== null && !iu(); )
      yg(ut);
  }
  function yg(l) {
    var n = By(l.alternate, l, Kn);
    l.memoizedProps = l.pendingProps, n === null ? dr(l) : ut = n;
  }
  function pg(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = tc(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          et
        );
        break;
      case 11:
        n = tc(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          et
        );
        break;
      case 5:
        Vs(n);
      default:
        ng(u, n), n = ut = $m(n, Kn), n = By(u, n, Kn);
    }
    l.memoizedProps = l.pendingProps, n === null ? dr(l) : ut = n;
  }
  function lo(l, n, u, c) {
    wn = ni = null, Vs(n), Ji = null, Lc = 0;
    var s = n.return;
    try {
      if (Iv(
        l,
        s,
        n,
        u,
        et
      )) {
        Gt = 1, rf(
          l,
          Za(u, l.current)
        ), ut = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw ut = s, r;
      Gt = 1, rf(
        l,
        Za(u, l.current)
      ), ut = null;
      return;
    }
    n.flags & 32768 ? (nt || c === 1 ? l = !0 : nc || et & 536870912 ? l = !1 : (Uu = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = ya.current, c !== null && c.tag === 13 && (c.flags |= 16384))), gg(n, l)) : dr(n);
  }
  function dr(l) {
    var n = l;
    do {
      if (n.flags & 32768) {
        gg(
          n,
          Uu
        );
        return;
      }
      l = n.return;
      var u = lg(
        n.alternate,
        n,
        Kn
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
      Of();
    while (Dl !== 0);
    if (pt & 6) throw Error(H(327));
    if (n !== null) {
      if (n === l.current) throw Error(H(177));
      if (r = n.lanes | n.childLanes, r |= gn, No(
        l,
        u,
        r,
        m,
        v,
        A
      ), l === Ct && (ut = Ct = null, et = 0), uc = n, mi = l, Hu = u, Ca = r, gh = s, vh = c, n.subtreeFlags & 10256 || n.flags & 10256 ? (l.callbackNode = null, l.callbackPriority = 0, _g(Mn, function() {
        return Ag(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, n.subtreeFlags & 13878 || c) {
        c = _.T, _.T = null, s = V.p, V.p = 2, m = pt, pt |= 4;
        try {
          pf(l, n, u);
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
      var l = mi, n = uc, u = (n.flags & 13878) !== 0;
      if (n.subtreeFlags & 13878 || u) {
        u = _.T, _.T = null;
        var c = V.p;
        V.p = 2;
        var s = pt;
        pt |= 4;
        try {
          fh(n, l);
          var r = Mh, m = xi(l.containerInfo), v = r.focusedElem, A = r.selectionRange;
          if (m !== v && v && v.ownerDocument && Nc(
            v.ownerDocument.documentElement,
            v
          )) {
            if (A !== null && Os(v)) {
              var Y = A.start, L = A.end;
              if (L === void 0 && (L = Y), "selectionStart" in v)
                v.selectionStart = Y, v.selectionEnd = Math.min(
                  L,
                  v.value.length
                );
              else {
                var K = v.ownerDocument || document, j = K && K.defaultView || window;
                if (j.getSelection) {
                  var w = j.getSelection(), fe = v.textContent.length, ze = Math.min(A.start, fe), Ht = A.end === void 0 ? ze : Math.min(A.end, fe);
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
      var l = mi, n = uc, u = (n.flags & 8772) !== 0;
      if (n.subtreeFlags & 8772 || u) {
        u = _.T, _.T = null;
        var c = V.p;
        V.p = 2;
        var s = pt;
        pt |= 4;
        try {
          nr(l, n.alternate, n);
        } finally {
          pt = s, V.p = c, _.T = u;
        }
      }
      Dl = 3;
    }
  }
  function Eg() {
    if (Dl === 4 || Dl === 3) {
      Dl = 0, vc();
      var l = mi, n = uc, u = Hu, c = vh;
      n.subtreeFlags & 10256 || n.flags & 10256 ? Dl = 5 : (Dl = 0, uc = mi = null, Tg(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (kt = null), bm(u), n = n.stateNode, Al && typeof Al.onCommitFiberRoot == "function")
        try {
          Al.onCommitFiberRoot(
            rn,
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
      Hu & 3 && Of(), Bu(l), s = l.pendingLanes, u & 261930 && s & 42 ? l === sr ? Ef++ : (Ef = 0, sr = l) : Ef = 0, gi(0);
    }
  }
  function Tg(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, Bs(n)));
  }
  function Of() {
    return Sg(), bg(), Eg(), Ag();
  }
  function Ag() {
    if (Dl !== 5) return !1;
    var l = mi, n = Ca;
    Ca = 0;
    var u = bm(Hu), c = _.T, s = V.p;
    try {
      V.p = 32 > u ? 32 : u, _.T = null, u = gh, gh = null;
      var r = mi, m = Hu;
      if (Dl = 0, uc = mi = null, Hu = 0, pt & 6) throw Error(H(331));
      var v = pt;
      if (pt |= 4, Zy(r.current), gf(
        r,
        r.current,
        m,
        u
      ), pt = v, gi(0, !1), Al && typeof Al.onPostCommitFiberRoot == "function")
        try {
          Al.onPostCommitFiberRoot(rn, r);
        } catch {
        }
      return !0;
    } finally {
      V.p = s, _.T = c, Tg(l, n);
    }
  }
  function Og(l, n, u) {
    n = Za(u, n), n = zy(l.stateNode, n, 2), l = ka(l, n, 2), l !== null && (Ci(l, 2), Bu(l));
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
            l = Za(u, l), u = Dy(2), c = ka(n, u, 2), c !== null && (_y(
              u,
              c,
              n,
              l
            ), Ci(c, 2), Bu(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function hr(l, n, u) {
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
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Ct === l && (et & u) === u && (Gt === 4 || Gt === 3 && (et & 62914560) === et && 300 > gl() - kn ? !(pt & 2) && Nu(l, 0) : yh |= u, ll === et && (ll = 0)), Bu(l);
  }
  function zg(l, n) {
    n === 0 && (n = ea()), l = ti(l, n), l !== null && (Ci(l, n), Bu(l));
  }
  function tn(l) {
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
        throw Error(H(314));
    }
    c !== null && c.delete(n), zg(l, u);
  }
  function _g(l, n) {
    return re(l, n);
  }
  var zf = null, ao = null, Wy = !1, Eh = !1, Fy = !1, pi = 0;
  function Bu(l) {
    l !== ao && l.next === null && (ao === null ? zf = ao = l : ao = ao.next = l), Eh = !0, Wy || (Wy = !0, yr());
  }
  function gi(l, n) {
    if (!Fy && Eh) {
      Fy = !0;
      do
        for (var u = !1, c = zf; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = c.suspendedLanes, v = c.pingedLanes;
              r = (1 << 31 - Ul(42 | l) + 1) - 1, r &= s & ~(m & ~v), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, no(c, r));
          } else
            r = et, r = he(
              c,
              c === Ct ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), !(r & 3) || Pe(c, r) || (u = !0, no(c, r));
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
    pi !== 0 && eS() && (l = pi);
    for (var n = gl(), u = null, c = zf; c !== null; ) {
      var s = c.next, r = Py(c, n);
      r === 0 ? (c.next = null, u === null ? zf = s : u.next = s, s === null && (ao = u)) : (u = c, (l !== 0 || r & 3) && (Eh = !0)), c = s;
    }
    Dl !== 0 && Dl !== 5 || gi(l), pi !== 0 && (pi = 0);
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
      return c !== null && c !== null && Ri(c), l.callbackNode = null, l.callbackPriority = 0;
    if (!(u & 3) || Pe(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && Ri(c), bm(u)) {
        case 2:
        case 8:
          u = Uo;
          break;
        case 32:
          u = Mn;
          break;
        case 268435456:
          u = Ho;
          break;
        default:
          u = Mn;
      }
      return c = mr.bind(null, l), u = re(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && Ri(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function mr(l, n) {
    if (Dl !== 0 && Dl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Of() && l.callbackNode !== u)
      return null;
    var c = et;
    return c = he(
      l,
      l === Ct ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (fg(l, c, n), Py(l, gl()), l.callbackNode != null && l.callbackNode === u ? mr.bind(null, l) : null);
  }
  function no(l, n) {
    if (Of()) return null;
    fg(l, n, !0);
  }
  function yr() {
    Yg(function() {
      pt & 6 ? re(
        Co,
        Th
      ) : Iy();
    });
  }
  function Ah() {
    if (pi === 0) {
      var l = Qi;
      l === 0 && (l = I, I <<= 1, !(I & 261888) && (I = 256)), pi = l;
    }
    return pi;
  }
  function Rg(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : hn("" + l);
  }
  function uo(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function pr(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = Rg(
        (s[fa] || null).action
      ), m = c.submitter;
      m && (n = (n = m[fa] || null) ? Rg(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var v = new Es(
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
                if (pi !== 0) {
                  var A = m ? uo(s, m) : new FormData(s);
                  ff(
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
                typeof r == "function" && (v.preventDefault(), A = m ? uo(s, m) : new FormData(s), ff(
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
  for (var Oh = 0; Oh < Ko.length; Oh++) {
    var Df = Ko[Oh], ep = Df.toLowerCase(), tp = Df[0].toUpperCase() + Df.slice(1);
    ra(
      ep,
      "on" + tp
    );
  }
  ra(Ds, "onAnimationEnd"), ra(Km, "onAnimationIteration"), ra(Od, "onAnimationStart"), ra("dblclick", "onDoubleClick"), ra("focusin", "onFocus"), ra("focusout", "onBlur"), ra(Bc, "onTransitionRun"), ra(_s, "onTransitionStart"), ra(mu, "onTransitionCancel"), ra(G0, "onTransitionEnd"), fu("onMouseEnter", ["mouseout", "mouseover"]), fu("onMouseLeave", ["mouseout", "mouseover"]), fu("onPointerEnter", ["pointerout", "pointerover"]), fu("onPointerLeave", ["pointerout", "pointerover"]), Ni(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ni(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ni("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ni(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ni(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ni(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var _f = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Mg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_f)
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
            var v = c[m], A = v.instance, Y = v.currentTarget;
            if (v = v.listener, A !== r && s.isPropagationStopped())
              break e;
            r = v, s.currentTarget = Y;
            try {
              r(s);
            } catch (L) {
              Yc(L);
            }
            s.currentTarget = null, r = A;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (v = c[m], A = v.instance, Y = v.currentTarget, v = v.listener, A !== r && s.isPropagationStopped())
              break e;
            r = v, s.currentTarget = Y;
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
    u.has(c) || (gr(n, l, 2, !1), u.add(c));
  }
  function lp(l, n, u) {
    var c = 0;
    n && (c |= 4), gr(
      u,
      l,
      c,
      n
    );
  }
  var zh = "_reactListening" + Math.random().toString(36).slice(2);
  function Rf(l) {
    if (!l[zh]) {
      l[zh] = !0, Ac.forEach(function(u) {
        u !== "selectionchange" && (Mg.has(u) || lp(u, !1, l), lp(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[zh] || (n[zh] = !0, lp("selectionchange", !1, n));
    }
  }
  function gr(l, n, u, c) {
    switch (Dr(n)) {
      case 2:
        var s = ju;
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
    ), s = void 0, !Ss || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
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
            if (m = bc(v), m === null) return;
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
      var Y = r, L = rd(u), K = [];
      e: {
        var j = yu.get(l);
        if (j !== void 0) {
          var w = Es, fe = l;
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
              w = Qo;
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
            case Ds:
            case Km:
            case Od:
              w = M0;
              break;
            case G0:
              w = $v;
              break;
            case "scroll":
            case "scrollend":
              w = Jv;
              break;
            case "wheel":
              w = kv;
              break;
            case "copy":
            case "cut":
            case "paste":
              w = _c;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              w = Bn;
              break;
            case "toggle":
            case "beforetoggle":
              w = xm;
          }
          var ze = (n & 4) !== 0, Ht = !ze && (l === "scroll" || l === "scrollend"), C = ze ? j !== null ? j + "Capture" : null : j;
          ze = [];
          for (var D = Y, N; D !== null; ) {
            var J = D;
            if (N = J.stateNode, J = J.tag, J !== 5 && J !== 26 && J !== 27 || N === null || C === null || (J = Hl(D, C), J != null && ze.push(
              vr(D, J, N)
            )), Ht) break;
            D = D.return;
          }
          0 < ze.length && (j = new w(
            j,
            fe,
            null,
            u,
            L
          ), K.push({ event: j, listeners: ze }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (j = l === "mouseover" || l === "pointerover", w = l === "mouseout" || l === "pointerout", j && u !== sd && (fe = u.relatedTarget || u.fromElement) && (bc(fe) || fe[Ui]))
            break e;
          if ((w || j) && (j = L.window === L ? L : (j = L.ownerDocument) ? j.defaultView || j.parentWindow : window, w ? (fe = u.relatedTarget || u.toElement, w = Y, fe = fe ? bc(fe) : null, fe !== null && (Ht = qe(fe), ze = fe.tag, fe !== Ht || ze !== 5 && ze !== 27 && ze !== 6) && (fe = null)) : (w = null, fe = Y), w !== fe)) {
            if (ze = Qo, J = "onMouseLeave", C = "onMouseEnter", D = "mouse", (l === "pointerout" || l === "pointerover") && (ze = Bn, J = "onPointerLeave", C = "onPointerEnter", D = "pointer"), Ht = w == null ? j : Bo(w), N = fe == null ? j : Bo(fe), j = new ze(
              J,
              D + "leave",
              w,
              u,
              L
            ), j.target = Ht, j.relatedTarget = N, J = null, bc(L) === Y && (ze = new ze(
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
                for (var Se = D; Se; Se = ze(Se))
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
              j,
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
          if (j = Y ? Bo(Y) : window, w = j.nodeName && j.nodeName.toLowerCase(), w === "select" || w === "input" && j.type === "file")
            var dt = Lm;
          else if (hu(j))
            if (bd)
              dt = Hc;
            else {
              dt = q0;
              var me = j0;
            }
          else
            w = j.nodeName, !w || w.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? Y && Rm(Y.elementType) && (dt = Lm) : dt = qi;
          if (dt && (dt = dt(l, Y))) {
            Qm(
              K,
              dt,
              u,
              L
            );
            break e;
          }
          me && me(l, j, Y), l === "focusout" && Y && j.type === "number" && Y.memoizedProps.value != null && Oc(j, "number", j.value);
        }
        switch (me = Y ? Bo(Y) : window, l) {
          case "focusin":
            (hu(me) || me.contentEditable === "true") && (Gi = me, Zo = Y, pn = null);
            break;
          case "focusout":
            pn = Zo = Gi = null;
            break;
          case "mousedown":
            jn = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            jn = !1, Ad(K, u, L);
            break;
          case "selectionchange":
            if (zs) break;
          case "keydown":
          case "keyup":
            Ad(K, u, L);
        }
        var Xe;
        if (Lo)
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
          Mc ? Sd(l, u) && (Ke = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Ke = "onCompositionStart");
        Ke && (Gm && u.locale !== "ko" && (Mc || Ke !== "onCompositionStart" ? Ke === "onCompositionEnd" && Mc && (Xe = Um()) : (Pu = L, Cm = "value" in Pu ? Pu.value : Pu.textContent, Mc = !0)), me = Sr(Y, Ke), 0 < me.length && (Ke = new C0(
          Ke,
          l,
          null,
          u,
          L
        ), K.push({ event: Ke, listeners: me }), Xe ? Ke.data = Xe : (Xe = wm(u), Xe !== null && (Ke.data = Xe)))), (Xe = ta ? Y0(l, u) : Wv(l, u)) && (Ke = Sr(Y, "onBeforeInput"), 0 < Ke.length && (me = new C0(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          L
        ), K.push({
          event: me,
          listeners: Ke
        }), me.data = Xe)), pr(
          K,
          l,
          Y,
          u,
          L
        );
      }
      Cg(K, n);
    });
  }
  function vr(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function Sr(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Hl(l, u), s != null && c.unshift(
        vr(l, s, r)
      ), s = Hl(l, n), s != null && c.push(
        vr(l, s, r)
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
      var v = u, A = v.alternate, Y = v.stateNode;
      if (v = v.tag, A !== null && A === c) break;
      v !== 5 && v !== 26 && v !== 27 || Y === null || (A = Y, s ? (Y = Hl(u, r), Y != null && m.unshift(
        vr(u, Y, A)
      )) : s || (Y = Hl(u, r), Y != null && m.push(
        vr(u, Y, A)
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
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || su(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && su(l, "" + c);
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
        c = hn("" + c), l.setAttribute(u, c);
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
        c = hn("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = Un);
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
            throw Error(H(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(H(60));
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
        u = hn("" + c), l.setAttributeNS(
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
        Fu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        Fu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        Fu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        Fu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        Fu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        Fu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        Fu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        Fu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        Fu(
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
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Zv.get(u) || u, qo(l, u, c));
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
            throw Error(H(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(H(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? su(l, c) : (typeof c == "number" || typeof c == "bigint") && su(l, "" + c);
        break;
      case "onScroll":
        c != null && at("scroll", l);
        break;
      case "onScrollEnd":
        c != null && at("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Un);
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
        if (!Hi.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[fa] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
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
                  throw Error(H(137, n));
                default:
                  Ut(l, n, r, m, u, null);
              }
          }
        s && Ut(l, n, "srcSet", u.srcSet, u, null), c && Ut(l, n, "src", u.src, u, null);
        return;
      case "input":
        at("invalid", l);
        var v = r = m = s = null, A = null, Y = null;
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
                  Y = L;
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
                    throw Error(H(137, n));
                  break;
                default:
                  Ut(l, n, c, L, u, null);
              }
          }
        ps(
          l,
          r,
          v,
          A,
          Y,
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
        n = r, u = m, l.multiple = !!c, n != null ? xo(l, !!c, n, !1) : u != null && xo(l, !!c, u, !0);
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
                if (v != null) throw Error(H(91));
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
        for (c = 0; c < _f.length; c++)
          at(_f[c], l);
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
        for (Y in u)
          if (u.hasOwnProperty(Y) && (c = u[Y], c != null))
            switch (Y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(H(137, n));
              default:
                Ut(l, n, Y, c, u, null);
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
        var s = null, r = null, m = null, v = null, A = null, Y = null, L = null;
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
        for (var j in c) {
          var w = c[j];
          if (K = u[j], c.hasOwnProperty(j) && (w != null || K != null))
            switch (j) {
              case "type":
                r = w;
                break;
              case "name":
                s = w;
                break;
              case "checked":
                Y = w;
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
                  throw Error(H(137, n));
                break;
              default:
                w !== K && Ut(
                  l,
                  n,
                  j,
                  w,
                  c,
                  K
                );
            }
        }
        ys(
          l,
          m,
          v,
          A,
          Y,
          L,
          r,
          s
        );
        return;
      case "select":
        w = m = v = j = null;
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
                j = r;
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
        n = v, u = m, c = w, j != null ? xo(l, !!u, j, !1) : !!c != !!u && (n != null ? xo(l, !!u, n, !0) : xo(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        w = j = null;
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
                j = s;
                break;
              case "defaultValue":
                w = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(H(91));
                break;
              default:
                s !== r && Ut(l, n, m, s, c, r);
            }
        Dm(l, j, w);
        return;
      case "option":
        for (var fe in u)
          if (j = u[fe], u.hasOwnProperty(fe) && j != null && !c.hasOwnProperty(fe))
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
                  j
                );
            }
        for (A in c)
          if (j = c[A], w = u[A], c.hasOwnProperty(A) && j !== w && (j != null || w != null))
            switch (A) {
              case "selected":
                l.selected = j && typeof j != "function" && typeof j != "symbol";
                break;
              default:
                Ut(
                  l,
                  n,
                  A,
                  j,
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
          j = u[ze], u.hasOwnProperty(ze) && j != null && !c.hasOwnProperty(ze) && Ut(l, n, ze, null, c, j);
        for (Y in c)
          if (j = c[Y], w = u[Y], c.hasOwnProperty(Y) && j !== w && (j != null || w != null))
            switch (Y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(H(137, n));
                break;
              default:
                Ut(
                  l,
                  n,
                  Y,
                  j,
                  c,
                  w
                );
            }
        return;
      default:
        if (Rm(n)) {
          for (var Ht in u)
            j = u[Ht], u.hasOwnProperty(Ht) && j !== void 0 && !c.hasOwnProperty(Ht) && cp(
              l,
              n,
              Ht,
              void 0,
              c,
              j
            );
          for (L in c)
            j = c[L], w = u[L], !c.hasOwnProperty(L) || j === w || j === void 0 && w === void 0 || cp(
              l,
              n,
              L,
              j,
              c,
              w
            );
          return;
        }
    }
    for (var C in u)
      j = u[C], u.hasOwnProperty(C) && j != null && !c.hasOwnProperty(C) && Ut(l, n, C, null, c, j);
    for (K in c)
      j = c[K], w = u[K], !c.hasOwnProperty(K) || j === w || j == null && w == null || Ut(l, n, K, j, c, w);
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
            var A = u[c], Y = A.startTime;
            if (Y > v) break;
            var L = A.transferSize, K = A.initiatorType;
            L && _h(K) && (A = A.responseEnd, m += L * (A < v ? 1 : (v - Y) / (A - Y)));
          }
          if (--c, n += 8 * (r + m) / (s.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Rh = null, Mh = null;
  function cc(l) {
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
  function Mf(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Ch = null;
  function eS() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Ch ? !1 : (Ch = l, !0) : (Ch = null, !1);
  }
  var br = typeof setTimeout == "function" ? setTimeout : void 0, Bg = typeof clearTimeout == "function" ? clearTimeout : void 0, io = typeof Promise == "function" ? Promise : void 0, Yg = typeof queueMicrotask == "function" ? queueMicrotask : typeof io < "u" ? function(l) {
    return io.resolve(null).then(l).catch(rp);
  } : br;
  function rp(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Wn(l) {
    return l === "head";
  }
  function dp(l, n) {
    var u = n, c = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$" || u === "/&") {
          if (c === 0) {
            l.removeChild(s), Xf(n);
            return;
          }
          c--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          c++;
        else if (u === "html")
          co(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, co(u);
          for (var r = u.firstChild; r; ) {
            var m = r.nextSibling, v = r.nodeName;
            r[ou] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && r.rel.toLowerCase() === "stylesheet" || u.removeChild(r), r = m;
          }
        } else
          u === "body" && co(l.ownerDocument.body);
      u = s;
    } while (u);
    Xf(n);
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
  function Er(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Er(u), nd(u);
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
  function tS(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[ou])
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
      if (l = Aa(l.nextSibling), l === null) break;
    }
    return null;
  }
  function ke(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Aa(l.nextSibling), l === null)) return null;
    return l;
  }
  function jg(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = Aa(l.nextSibling), l === null)) return null;
    return l;
  }
  function On(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function oc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Cf(l, n) {
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
  function Aa(l) {
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
  var Tr = null;
  function Uh(l) {
    l = l.nextSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (n === 0)
            return Aa(l.nextSibling);
          n--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || n++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Fn(l) {
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
  function Uf(l, n, u) {
    switch (n = cc(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(H(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(H(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(H(454));
        return l;
      default:
        throw Error(H(451));
    }
  }
  function co(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    nd(l);
  }
  var Ha = /* @__PURE__ */ new Map(), Ar = /* @__PURE__ */ new Set();
  function na(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var In = V.d;
  V.d = {
    f: lS,
    r: qg,
    D: G,
    C: bt,
    L: aS,
    m: hp,
    X: vi,
    S: mp,
    M: fc
  };
  function lS() {
    var l = In.f(), n = Tf();
    return l || n;
  }
  function qg(l) {
    var n = Ec(l);
    n !== null && n.tag === 5 && n.type === "form" ? Mt(n) : In.r(l);
  }
  var Hf = typeof document > "u" ? null : document;
  function bl(l, n, u) {
    var c = Hf;
    if (c && typeof n == "string" && n) {
      var s = Qa(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), Ar.has(s) || (Ar.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), $l(n, "link", l), Et(n), c.head.appendChild(n)));
    }
  }
  function G(l) {
    In.D(l), bl("dns-prefetch", l, null);
  }
  function bt(l, n) {
    In.C(l, n), bl("preconnect", l, n);
  }
  function aS(l, n, u) {
    In.L(l, n, u);
    var c = Hf;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + Qa(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + Qa(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + Qa(
        u.imageSizes
      ) + '"]')) : s += '[href="' + Qa(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = ln(l);
          break;
        case "script":
          r = oo(l);
      }
      Ha.has(r) || (l = X(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Ha.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(sc(r)) || n === "script" && c.querySelector(Yf(r)) || (n = c.createElement("link"), $l(n, "link", l), Et(n), c.head.appendChild(n)));
    }
  }
  function hp(l, n) {
    In.m(l, n);
    var u = Hf;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + Qa(c) + '"][href="' + Qa(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = oo(l);
      }
      if (!Ha.has(r) && (l = X({ rel: "modulepreload", href: l }, n), Ha.set(r, l), u.querySelector(s) === null)) {
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
    In.S(l, n, u);
    var c = Hf;
    if (c && l) {
      var s = Tc(c).hoistableStyles, r = ln(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var v = { loading: 0, preload: null };
        if (m = c.querySelector(
          sc(r)
        ))
          v.loading = 5;
        else {
          l = X(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Ha.get(r)) && Hh(l, u);
          var A = m = c.createElement("link");
          Et(A), $l(A, "link", l), A._p = new Promise(function(Y, L) {
            A.onload = Y, A.onerror = L;
          }), A.addEventListener("load", function() {
            v.loading |= 1;
          }), A.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, Or(m, n, c);
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
  function vi(l, n) {
    In.X(l, n);
    var u = Hf;
    if (u && l) {
      var c = Tc(u).hoistableScripts, s = oo(l), r = c.get(s);
      r || (r = u.querySelector(Yf(s)), r || (l = X({ src: l, async: !0 }, n), (n = Ha.get(s)) && Nh(l, n), r = u.createElement("script"), Et(r), $l(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function fc(l, n) {
    In.M(l, n);
    var u = Hf;
    if (u && l) {
      var c = Tc(u).hoistableScripts, s = oo(l), r = c.get(s);
      r || (r = u.querySelector(Yf(s)), r || (l = X({ src: l, async: !0, type: "module" }, n), (n = Ha.get(s)) && Nh(l, n), r = u.createElement("script"), Et(r), $l(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function Nf(l, n, u, c) {
    var s = (s = Ge.current) ? na(s) : null;
    if (!s) throw Error(H(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = ln(u.href), u = Tc(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = ln(u.href);
          var r = Tc(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            sc(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), Ha.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Ha.set(l, u), r || xg(
            s,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(H(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(H(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = oo(u), u = Tc(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(H(444, l));
    }
  }
  function ln(l) {
    return 'href="' + Qa(l) + '"';
  }
  function sc(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Bf(l) {
    return X({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function xg(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), $l(n, "link", u), Et(n), l.head.appendChild(n));
  }
  function oo(l) {
    return '[src="' + Qa(l) + '"]';
  }
  function Yf(l) {
    return "script[async]" + l;
  }
  function yp(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Qa(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Et(c), c;
          var s = X({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Et(c), $l(c, "style", s), Or(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = ln(u.href);
          var r = l.querySelector(
            sc(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Et(r), r;
          c = Bf(u), (s = Ha.get(s)) && Hh(c, s), r = (l.ownerDocument || l).createElement("link"), Et(r);
          var m = r;
          return m._p = new Promise(function(v, A) {
            m.onload = v, m.onerror = A;
          }), $l(r, "link", c), n.state.loading |= 4, Or(r, u.precedence, l), n.instance = r;
        case "script":
          return r = oo(u.src), (s = l.querySelector(
            Yf(r)
          )) ? (n.instance = s, Et(s), s) : (c = u, (s = Ha.get(r)) && (c = X({}, u), Nh(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Et(s), $l(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(H(443, n.type));
      }
    else
      n.type === "stylesheet" && !(n.state.loading & 4) && (c = n.instance, n.state.loading |= 4, Or(c, u.precedence, l));
    return n.instance;
  }
  function Or(l, n, u) {
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
  var jf = null;
  function pp(l, n, u) {
    if (jf === null) {
      var c = /* @__PURE__ */ new Map(), s = jf = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = jf, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[ou] || r[Rt] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
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
  function Na(l) {
    return !(l.type === "stylesheet" && !(l.state.loading & 3));
  }
  function Yu(l, n, u, c) {
    if (u.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && !(u.state.loading & 4)) {
      if (u.instance === null) {
        var s = ln(c.href), r = n.querySelector(
          sc(s)
        );
        if (r) {
          n = r._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = Yh.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = r, Et(r);
          return;
        }
        r = n.ownerDocument || n, c = Bf(c), (s = Ha.get(s)) && Hh(c, s), r = r.createElement("link"), Et(r);
        var m = r;
        m._p = new Promise(function(v, A) {
          m.onload = v, m.onerror = A;
        }), $l(r, "link", c), u.instance = r;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && !(u.state.loading & 3) && (l.count++, u = Yh.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var an = 0;
  function vp(l, n) {
    return l.stylesheets && l.count === 0 && qh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var c = setTimeout(function() {
        if (l.stylesheets && qh(l, l.stylesheets), l.unsuspend) {
          var r = l.unsuspend;
          l.unsuspend = null, r();
        }
      }, 6e4 + n);
      0 < l.imgBytes && an === 0 && (an = 62500 * fp());
      var s = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && qh(l, l.stylesheets), l.unsuspend)) {
            var r = l.unsuspend;
            l.unsuspend = null, r();
          }
        },
        (l.imgBytes > an ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(c), clearTimeout(s);
      };
    } : null;
  }
  function Yh() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) qh(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var jh = null;
  function qh(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, jh = /* @__PURE__ */ new Map(), n.forEach(Gl, l), jh = null, Yh.call(l));
  }
  function Gl(l, n) {
    if (!(n.state.loading & 4)) {
      var u = jh.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), jh.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || c, r === c && u.set(null, s), u.set(m, s), this.count++, c = Yh.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var zr = {
    $$typeof: Bt,
    Provider: null,
    Consumer: null,
    _currentValue: te,
    _currentValue2: te,
    _threadCount: 0
  };
  function Sp(l, n, u, c, s, r, m, v, A) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = dn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = dn(0), this.hiddenUpdates = dn(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = A, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function xh(l, n, u, c, s, r, m, v, A, Y, L, K) {
    return l = new Sp(
      l,
      n,
      u,
      m,
      A,
      Y,
      L,
      K,
      v
    ), n = 1, r === !0 && (n |= 24), r = il(3, null, null, n), l.current = r, r.stateNode = l, n = Ns(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, ws(r), l;
  }
  function fo(l) {
    return l ? (l = da, l) : da;
  }
  function Gg(l, n, u, c, s, r) {
    s = fo(s), c.context === null ? c.context = s : c.pendingContext = s, c = oi(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = ka(l, c, n), u !== null && (Ta(u, l, n), $i(u, l, n));
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
      var n = ti(l, 67108864);
      n !== null && Ta(n, l, 67108864), bp(l, 67108864);
    }
  }
  function so(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = Ua();
      n = td(n);
      var u = ti(l, n);
      u !== null && Ta(u, l, n), bp(l, n);
    }
  }
  var _l = !0;
  function ju(l, n, u, c) {
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
        ), Si(l, c);
      else if (nS(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (Si(l, c), n & 4 && -1 < Oa.indexOf(l)) {
        for (; s !== null; ) {
          var r = Ec(s);
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
                    Bu(r), !(pt & 6) && (St = gl() + 500, gi(0));
                  }
                }
                break;
              case 31:
              case 13:
                v = ti(r, 2), v !== null && Ta(v, r, 2), Tf(), bp(r, 2);
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
    if (wh = null, l = bc(l), l !== null) {
      var n = qe(l);
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
  function Dr(l) {
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
          case Co:
            return 2;
          case Uo:
            return 8;
          case Mn:
          case ed:
            return 32;
          case Ho:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var xf = !1, Rl = null, Wl = null, ua = null, rc = /* @__PURE__ */ new Map(), zn = /* @__PURE__ */ new Map(), Wt = [], Oa = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Si(l, n) {
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
        ua = null;
        break;
      case "pointerover":
      case "pointerout":
        rc.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zn.delete(n.pointerId);
    }
  }
  function ro(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = Ec(n), n !== null && wg(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function nS(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return Rl = ro(
          Rl,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return Wl = ro(
          Wl,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return ua = ro(
          ua,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return rc.set(
          r,
          ro(
            rc.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, zn.set(
          r,
          ro(
            zn.get(r) || null,
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
    var n = bc(l.target);
    if (n !== null) {
      var u = qe(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = ct(u), n !== null) {
            l.blockedOn = n, Em(l.priority, function() {
              so(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = ee(u), n !== null) {
            l.blockedOn = n, Em(l.priority, function() {
              so(u);
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
  function _r(l) {
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
        return n = Ec(u), n !== null && wg(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Gf(l, n, u) {
    _r(l) && u.delete(n);
  }
  function Qg() {
    xf = !1, Rl !== null && _r(Rl) && (Rl = null), Wl !== null && _r(Wl) && (Wl = null), ua !== null && _r(ua) && (ua = null), rc.forEach(Gf), zn.forEach(Gf);
  }
  function xu(l, n) {
    l.blockedOn === n && (l.blockedOn = null, xf || (xf = !0, Q.unstable_scheduleCallback(
      Q.unstable_NormalPriority,
      Qg
    )));
  }
  var wf = null;
  function Lg(l) {
    wf !== l && (wf = l, Q.unstable_scheduleCallback(
      Q.unstable_NormalPriority,
      function() {
        wf === l && (wf = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (qf(c || u) === null)
              continue;
            break;
          }
          var r = Ec(u);
          r !== null && (l.splice(n, 3), n -= 3, ff(
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
  function Xf(l) {
    function n(A) {
      return xu(A, l);
    }
    Rl !== null && xu(Rl, l), Wl !== null && xu(Wl, l), ua !== null && xu(ua, l), rc.forEach(n), zn.forEach(n);
    for (var u = 0; u < Wt.length; u++) {
      var c = Wt[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Wt.length && (u = Wt[0], u.blockedOn === null); )
      Xg(u), u.blockedOn === null && Wt.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], m = s[fa] || null;
        if (typeof r == "function")
          m || Lg(u);
        else if (m) {
          var v = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[fa] || null)
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
    if (n === null) throw Error(H(409));
    var u = n.current, c = Ua();
    Gg(u, c, l, n, null, null);
  }, Qh.prototype.unmount = Xh.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Gg(l.current, 2, null, l, null, null), Tf(), n[Ui] = null;
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
      H(
        527,
        Ap,
        "19.2.0"
      )
    );
  V.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(H(188)) : (l = Object.keys(l).join(","), Error(H(268, l)));
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
    var Rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Rr.isDisabled && Rr.supportsFiber)
      try {
        rn = Rr.inject(
          Vg
        ), Al = Rr;
      } catch {
      }
  }
  return v0.createRoot = function(l, n) {
    if (!De(l)) throw Error(H(299));
    var u = !1, c = "", s = Pd, r = Oy, m = eh;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = xh(
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
    ), l[Ui] = n.current, Rf(l), new Xh(n);
  }, v0.hydrateRoot = function(l, n, u) {
    if (!De(l)) throw Error(H(299));
    var c = !1, s = "", r = Pd, m = Oy, v = eh, A = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (v = u.onRecoverableError), u.formState !== void 0 && (A = u.formState)), n = xh(
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
    ), n.context = fo(null), u = n.current, c = Ua(), c = td(c), s = oi(c), s.callback = null, ka(u, s, c), u = c, n.current.lanes = u, Ci(n, u), Bu(n), l[Ui] = n.current, Rf(l), new Qh(n);
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
var Q2;
function NT() {
  return Q2 || (Q2 = 1, process.env.NODE_ENV !== "production" && function() {
    function Q(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function P(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = bl(e) ? e.slice() : ke({}, e);
      return f[o] = P(e[o], t, a + 1, i), f;
    }
    function Oe(e, t, a) {
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
        return H(e, t, a, 0);
      }
    }
    function H(e, t, a, i) {
      var o = t[i], f = bl(e) ? e.slice() : ke({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], bl(f) ? f.splice(o, 1) : delete f[o]) : f[o] = H(
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
    function qe() {
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
    function X(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function U(e, t, a, i) {
      return new Wv(e, t, a, i);
    }
    function ie(e, t) {
      e.context === Zf && (Dh(e.current, 2, t, e, null, null), en());
    }
    function Ve(e, t) {
      if (Xu !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, ur(), Y0(
          e.current,
          t,
          a
        ), en();
      }
    }
    function _t(e) {
      Xu = e;
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
      return e === null || typeof e != "object" ? null : (e = qg && e[qg] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Ze(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Hf ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Cf:
          return "Fragment";
        case Tr:
          return "Profiler";
        case Aa:
          return "StrictMode";
        case co:
          return "Suspense";
        case Ha:
          return "SuspenseList";
        case In:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case oc:
            return "Portal";
          case Fn:
            return e.displayName || "Context";
          case Uh:
            return (e._context.displayName || "Context") + ".Consumer";
          case Uf:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Ar:
            return t = e.displayName || null, t !== null ? t : Ze(e.type) || "Memo";
          case na:
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
          return t === Aa ? "StrictMode" : "Mode";
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
    function Yt(e) {
      return { current: e };
    }
    function ye(e, t) {
      0 > vi ? console.error("Unexpected pop.") : (t !== mp[vi] && console.error("Unexpected Fiber popped."), e.current = hp[vi], hp[vi] = null, mp[vi] = null, vi--);
    }
    function xe(e, t, a) {
      vi++, hp[vi] = e.current, mp[vi] = a, e.current = t;
    }
    function Qt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function jt(e, t) {
      xe(ln, t, e), xe(Nf, e, e), xe(fc, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? sg(t) : Do;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = sg(t), t = yi(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = vm;
                break;
              case "math":
                t = Yv;
                break;
              default:
                t = Do;
            }
      }
      a = a.toLowerCase(), a = zm(null, a), a = {
        context: t,
        ancestorInfo: a
      }, ye(fc, e), xe(fc, a, e);
    }
    function _(e) {
      ye(fc, e), ye(Nf, e), ye(ln, e);
    }
    function V() {
      return Qt(fc.current);
    }
    function te(e) {
      e.memoizedState !== null && xe(sc, e, e);
      var t = Qt(fc.current), a = e.type, i = yi(t.context, a);
      a = zm(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (xe(Nf, e, e), xe(fc, i, e));
    }
    function pe(e) {
      Nf.current === e && (ye(fc, e), ye(Nf, e)), sc.current === e && (ye(sc, e), d0._currentValue = Fr);
    }
    function Ae() {
    }
    function S() {
      if (Bf === 0) {
        xg = console.log, oo = console.info, Yf = console.warn, yp = console.error, Or = console.group, Hh = console.groupCollapsed, Nh = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Ae,
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
      Bf++;
    }
    function B() {
      if (Bf--, Bf === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: ke({}, e, { value: xg }),
          info: ke({}, e, { value: oo }),
          warn: ke({}, e, { value: Yf }),
          error: ke({}, e, { value: yp }),
          group: ke({}, e, { value: Or }),
          groupCollapsed: ke({}, e, { value: Hh }),
          groupEnd: ke({}, e, { value: Nh })
        });
      }
      0 > Bf && console.error(
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
      if (jf === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          jf = t && t[1] || "", pp = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + jf + e + pp;
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
                    var q = ne;
                  }
                  Reflect.construct(e, [], E);
                } else {
                  try {
                    E.call();
                  } catch (ne) {
                    q = ne;
                  }
                  e.call(E.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ne) {
                  q = ne;
                }
                (E = e()) && typeof E.catch == "function" && E.catch(function() {
                });
              }
            } catch (ne) {
              if (ne && q && typeof ne.stack == "string")
                return [ne.stack, q.stack];
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
    function Ee(e) {
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
                      var q = `
` + E;
                      break e;
                    }
                  }
                  q = W(
                    h + (y ? " [" + y + "]" : "")
                  );
                }
                t = d + q;
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
      if (Na === null) return null;
      var e = Na._debugOwner;
      return e != null ? Dt(e) : null;
    }
    function qa() {
      if (Na === null) return "";
      var e = Na;
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
      var h = Na;
      Di(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        Di(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Di(e) {
      G.getCurrentStack = e === null ? null : qa, Yu = !1, Na = e;
    }
    function _i(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function xa(e) {
      try {
        return uu(e), !1;
      } catch {
        return !0;
      }
    }
    function uu(e) {
      return "" + e;
    }
    function yt(e, t) {
      if (xa(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          _i(e)
        ), uu(e);
    }
    function Pl(e, t) {
      if (xa(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          _i(e)
        ), uu(e);
    }
    function gc(e) {
      if (xa(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          _i(e)
        ), uu(e);
    }
    function rs(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        so = t.inject(e), _l = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!t.checkDCE;
    }
    function re(e) {
      if (typeof bp == "function" && wg(e), _l && typeof _l.setStrictMode == "function")
        try {
          _l.setStrictMode(so, e);
        } catch (t) {
          ju || (ju = !0, console.error(
            "React instrumentation encountered an error: %o",
            t
          ));
        }
    }
    function Ri(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Ep(e) / wh | 0) | 0;
    }
    function iu(e) {
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
    function vc(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = iu(i) : (d &= h, d !== 0 ? o = iu(d) : a || (a = h & ~e, a !== 0 && (o = iu(a))))) : (h = i & ~f, h !== 0 ? o = iu(h) : d !== 0 ? o = iu(d) : a || (a = i & ~e, a !== 0 && (o = iu(a)))), o === 0 ? 0 : t !== 0 && t !== o && !(t & f) && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
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
    function Co() {
      var e = xf;
      return xf <<= 1, !(xf & 62914560) && (xf = 4194304), e;
    }
    function Uo(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Mn(e, t) {
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
            var q = E[z];
            q !== null && (q.lane &= -536870913);
          }
        a &= ~R;
      }
      i !== 0 && Ho(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function Ho(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - kl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 261930;
    }
    function ds(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - kl(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function Sc(e, t) {
      var a = t & -t;
      return a = a & 42 ? 1 : rn(a), a & (e.suspendedLanes | t) ? 0 : a;
    }
    function rn(e) {
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
    function Ga(e, t) {
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
      return e &= -e, Rl < e ? Wl < e ? e & 134217727 ? ua : rc : Wl : Rl;
    }
    function Mi() {
      var e = bt.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? ua : Rh(e.type));
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
      delete e[Wt], delete e[Oa], delete e[ro], delete e[nS], delete e[Xg];
    }
    function I(e) {
      var t = e[Wt];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Si] || a[Wt]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = ao(e); e !== null; ) {
              if (a = e[Wt])
                return a;
              e = ao(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ae(e) {
      if (e = e[Wt] || e[Si]) {
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
      var t = e[_r];
      return t || (t = e[_r] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function he(e) {
      e[Gf] = !0;
    }
    function Pe(e, t) {
      we(e, t), we(e + "Capture", t);
    }
    function we(e, t) {
      xu[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), xu[e] = t;
      var a = e.toLowerCase();
      for (wf[a] = e, e === "onDoubleClick" && (wf.ondblclick = e), e = 0; e < t.length; e++)
        Qg.add(t[e]);
    }
    function ea(e, t) {
      Lg[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function dn(e) {
      return an.call(Xh, e) ? !0 : an.call(Tp, e) ? !1 : Xf.test(e) ? Xh[e] = !0 : (Tp[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Ci(e, t, a) {
      if (dn(t)) {
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
    function No(e, t, a) {
      if (dn(t))
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
    function hs(e, t, a) {
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
    function cu(e, t, a, i) {
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
    function wa(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return gc(e), e;
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
            gc(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            gc(d), a = "" + d;
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
    function Cn(e) {
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
    function fa(e, t) {
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
    function Ui(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (yt(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + wa(t)) : e.value !== "" + wa(t) && (e.value = "" + wa(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Tm(e, d, wa(t)) : a != null ? Tm(e, d, wa(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (yt(h, "name"), e.name = "" + wa(h)) : e.removeAttribute("name");
    }
    function ad(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (yt(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null)) {
          ld(e);
          return;
        }
        a = a != null ? "" + wa(a) : "", t = t != null ? "" + wa(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (yt(d, "name"), e.name = d), ld(e);
    }
    function Tm(e, t, a) {
      t === "number" && Cn(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function E0(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Er.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || l || (l = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || n || (n = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Rr || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Rr = !0);
    }
    function Am() {
      var e = mt();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function ou(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + wa(a), t = null, o = 0; o < e.length; o++) {
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
    function bc(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || s || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        mt() || "A component"
      ), s = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Ec(e, t, a) {
      if (t != null && (t = "" + wa(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + wa(a) : "";
    }
    function Bo(e, t, a, i) {
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
      a = wa(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i), ld(e);
    }
    function Tc(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Tc(e.children[0], t) : e;
    }
    function Et(e) {
      return "  " + "  ".repeat(e);
    }
    function Ac(e) {
      return "+ " + "  ".repeat(e);
    }
    function Hi(e) {
      return "- " + "  ".repeat(e);
    }
    function Ni(e) {
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
    function fu(e, t) {
      return r.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function ud(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Ac(a) + fu(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Ac(a) + fu(e, i) + `
` + Hi(a) + fu(t, i) + `
`;
      }
      return Et(a) + fu(e, i) + `
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
          if (e.$$typeof === On)
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
    function jo(e, t) {
      return typeof e != "string" || r.test(e) ? "{" + Yo(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function qo(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = jo(
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
          t.hasOwnProperty(f) ? (d = Yo(t[f], d), i += Ac(a) + f + ": " + h + `
`, i += Hi(a) + f + ": " + d + `
`) : i += Ac(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (e = Yo(
          o[y],
          120 - 2 * a - y.length - 2
        ), i += Hi(a) + y + ": " + e + `
`);
      return i;
    }
    function Fu(e, t, a, i) {
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
              var z = jo(
                p,
                h
              );
              h = jo(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && id(p) === "Object" && id(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < z.indexOf("...") || -1 < h.indexOf("...")) ? o += Et(i + 1) + d + `={{
` + cd(
                p,
                y,
                i + 2
              ) + Et(i + 1) + `}}
` : (o += Ac(i + 1) + d + "=" + z + `
`, o += Hi(i + 1) + d + "=" + h + `
`);
            } else
              o += Et(i + 1) + d + "=" + jo(t[d], h) + `
`;
          }
        f.forEach(function(R) {
          if (R !== "children") {
            var E = 120 - 2 * (i + 1) - R.length - 1;
            o += Hi(i + 1) + R + "=" + jo(a[R], E) + `
`;
          }
        }), o = o === "" ? Et(i) + "<" + e + `>
` : Et(i) + "<" + e + `
` + o + Et(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += ud(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + ud("" + t, null, i + 1) : o + ud("" + t, void 0, i + 1)), o;
    }
    function Xa(e, t) {
      var a = Ni(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += Xa(e, t), e = e.sibling;
        return a;
      }
      return Et(t) + "<" + a + `>
`;
    }
    function od(e, t) {
      var a = Tc(e, t);
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
      else if (f = Ni(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = jo(o[p], 15);
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
            Ac(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Fu(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var p = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (p += od(d, t), f++) : p += Xa(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (p += Et(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], p = typeof f == "string" ? p + (Hi(t) + fu(f, 120 - 2 * t) + `
`) : p + qo(
          f.type,
          f.props,
          Hi(t)
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
    function ms(e, t, a) {
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
          return Y.indexOf(t) === -1;
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
    function Vv(e, t) {
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
    function Qa(e, t) {
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
    function ys(e, t) {
      t = t || L;
      var a = t.current;
      if (t = (a = ms(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : Vv(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, K[t]) return !1;
      K[t] = !0;
      var o = (t = Na) ? Qa(t.return, i) : null, f = t !== null && o !== null ? fd(o, t, null) : "", d = "<" + e + ">";
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
    function ps(e, t, a) {
      if (a || ms("#text", t, !1))
        return !0;
      if (a = "#text|" + t, K[a]) return !1;
      K[a] = !0;
      var i = (a = Na) ? Qa(a, t) : null;
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
    function Oc(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function xo(e) {
      return e.replace(C, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Dm(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? N.hasOwnProperty(t) && N[t] || (N[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        xo(t.replace(Ht, "ms-"))
      )) : ze.test(t) ? N.hasOwnProperty(t) && N[t] || (N[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !D.test(a) || J.hasOwnProperty(a) && J[a] || (J[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(D, "")
      )), typeof a == "number" && (isNaN(a) ? Se || (Se = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || dt || (dt = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || me.has(t) ? t === "float" ? e.cssFloat = a : (Pl(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
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
                for (var f = j[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = j[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var y in t)
            for (o = j[y] || [y], f = 0; f < o.length; f++)
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
    function su(e) {
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
      if (an.call(Lh, t) && Lh[t])
        return !0;
      if (F2.test(t)) {
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
      if (W2.test(t)) {
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
      if (an.call(nn, t) && nn[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), nn[t] = !0;
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
          ), nn[t] = !0;
        if (T1.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), nn[t] = !0;
      } else if (T1.test(t))
        return I2.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), nn[t] = !0;
      if (P2.test(t) || eE.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), nn[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), nn[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), nn[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), nn[t] = !0;
      if (Pn.hasOwnProperty(o)) {
        if (o = Pn[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), nn[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), nn[t] = !0;
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
              ), nn[t] = !0);
          }
        case "function":
        case "symbol":
          return nn[t] = !0, !1;
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
            ), nn[t] = !0;
          }
      }
      return !0;
    }
    function Zv(e, t, a) {
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
    function gs(e) {
      return tE.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function hn() {
    }
    function Un(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function sd(e) {
      var t = ae(e);
      if (t && (e = t.stateNode)) {
        var a = e[Oa] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Ui(
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
                  var o = i[Oa] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Ui(
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
            Ec(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && ou(e, !!a.multiple, t, !1);
        }
      }
    }
    function rd(e, t, a) {
      if (uS) return e(t, a);
      uS = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (uS = !1, (Vh !== null || Zh !== null) && (en(), Vh && (t = Vh, e = Zh, Zh = Vh = null, sd(t), e)))
          for (t = 0; t < e.length; t++) sd(e[t]);
      }
    }
    function ru(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[Oa] || null;
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
    function zc() {
      if (Jg) return Jg;
      var e, t = cS, a = t.length, i, o = "value" in Qf ? Qf.value : Qf.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return Jg = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function vs(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Go() {
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
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Go : Mm, this.isPropagationStopped = Mm, this;
      }
      return ke(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Go);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Go);
        },
        persist: function() {
        },
        isPersistent: Go
      }), t;
    }
    function Iu(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = mE[e]) ? !!t[e] : !1;
    }
    function Ss() {
      return Iu;
    }
    function wo(e, t) {
      switch (e) {
        case "keyup":
          return DE.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== D1;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Pu(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function Cm(e, t) {
      switch (e) {
        case "compositionend":
          return Pu(t);
        case "keypress":
          return t.which !== R1 ? null : (C1 = !0, M1);
        case "textInput":
          return e = t.data, e === M1 && C1 ? null : e;
        default:
          return null;
      }
    }
    function dd(e, t) {
      if (Jh)
        return e === "compositionend" || !rS && wo(e, t) ? (e = zc(), Jg = cS = Qf = null, Jh = !1, e) : null;
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
          return _1 && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function Um(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!RE[e.type] : t === "textarea";
    }
    function hd(e) {
      if (!dc) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function bs(e, t, a, i) {
      Vh ? Zh ? Zh.push(i) : Zh = [i] : Vh = i, t = $n(t, "onChange"), 0 < t.length && (a = new Kg(
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
    function Bi(e, t) {
      if (e === "change") return t;
    }
    function Es() {
      Mp && (Mp.detachEvent("onpropertychange", Xo), Cp = Mp = null);
    }
    function Xo(e) {
      if (e.propertyName === "value" && Kl(Cp)) {
        var t = [];
        bs(
          t,
          Cp,
          e,
          Un(e)
        ), rd(z0, t);
      }
    }
    function Jv(e, t, a) {
      e === "focusin" ? (Es(), Mp = t, Cp = a, Mp.attachEvent("onpropertychange", Xo)) : e === "focusout" && Es();
    }
    function Hm(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Kl(Cp);
    }
    function Nm(e, t) {
      if (e === "click") return Kl(t);
    }
    function Ts(e, t) {
      if (e === "input" || e === "change")
        return Kl(t);
    }
    function md(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Qo(e, t) {
      if (un(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!an.call(t, o) || !un(e[o], t[o]))
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
      for (var t = Cn(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = Cn(e.document);
      }
      return t;
    }
    function Bm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function M0(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      hS || Kh == null || Kh !== Cn(i) || (i = Kh, "selectionStart" in i && Bm(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), Up && Qo(Up, i) || (Up = i, i = $n(dS, "onSelect"), 0 < i.length && (t = new Kg(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = Kh)));
    }
    function Dc(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function _c(e) {
      if (mS[e]) return mS[e];
      if (!$h[e]) return e;
      var t = $h[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in H1)
          return mS[e] = t[a];
      return e;
    }
    function Hn(e, t) {
      q1.set(e, t), Pe(t, [e]);
    }
    function C0(e) {
      for (var t = kg, a = 0; a < e.length; a++) {
        var i = e[a];
        if (typeof i == "object" && i !== null)
          if (bl(i) && i.length === 2 && typeof i[0] == "string") {
            if (t !== kg && t !== SS)
              return gS;
            t = SS;
          } else return gS;
        else {
          if (typeof i == "function" || typeof i == "string" && 50 < i.length || t !== kg && t !== vS)
            return gS;
          t = vS;
        }
      }
      return t;
    }
    function Ym(e, t, a, i) {
      for (var o in e)
        an.call(e, o) && o[0] !== "_" && du(o, e[o], t, a, i);
    }
    function du(e, t, a, i, o) {
      switch (typeof t) {
        case "object":
          if (t === null) {
            t = "null";
            break;
          } else {
            if (t.$$typeof === On) {
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
              ]), d !== null && du(
                "key",
                d,
                a,
                i + 1,
                o
              ), e = !1;
              for (var p in t)
                p === "children" ? t.children != null && (!bl(t.children) || 0 < t.children.length) && (e = !0) : an.call(t, p) && p[0] !== "_" && du(
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
              if (p = C0(t), p === vS || p === kg) {
                t = JSON.stringify(t);
                break;
              } else if (p === SS) {
                for (a.push([
                  o + "  ".repeat(i) + e,
                  ""
                ]), e = 0; e < t.length; e++)
                  f = t[e], du(
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
                if (f = a.length, du(
                  e,
                  t.value,
                  a,
                  i,
                  o
                ), a.length > f) {
                  a = a[f], a[1] = "Promise<" + (a[1] || "Object") + ">";
                  return;
                }
              } else if (t.status === "rejected" && (f = a.length, du(
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
            ]), 3 > i && Ym(t, a, i + 1, o);
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
                  if (h.$$typeof === On) {
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
                        w1 + "  ".repeat(i) + f,
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
                    w1 + "  ".repeat(i) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              du(f, d, a, i, Wg), du(f, h, a, i, Fg);
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
    function Nn(e) {
      rt = e & 63 ? "Blocking" : e & 64 ? "Gesture" : e & 4194176 ? "Transition" : e & 62914560 ? "Suspense" : e & 2080374784 ? "Idle" : "Other";
    }
    function mn(e, t, a, i) {
      Ft && (Vf.start = t, Vf.end = a, ho.color = "warning", ho.tooltipText = i, ho.properties = null, (e = e._debugTask) ? e.run(
        performance.measure.bind(
          performance,
          i,
          Vf
        )
      ) : performance.measure(i, Vf));
    }
    function pd(e, t, a) {
      mn(e, t, a, "Reconnect");
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
        h = e._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [jE], p = U0(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !Lf && !(d.lanes & o) && 100 < e.actualDuration ? (Lf = !0, y[0] = qE, ho.color = "warning", ho.tooltipText = X1) : (ho.color = i, ho.tooltipText = f), ho.properties = y, Vf.start = t, Vf.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            Vf
          )
        ) : performance.measure(
          "​" + f,
          Vf
        ))) : h != null ? h.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            Gu,
            void 0,
            i
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          Gu,
          void 0,
          i
        );
      }
    }
    function jm(e, t, a, i) {
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
          e.key !== null && du("key", e.key, d, 0, ""), e.memoizedProps !== null && Ym(e.memoizedProps, d, 0, ""), f == null && (f = e._debugTask), e = {
            start: t,
            end: a,
            detail: {
              devtools: {
                color: "error",
                track: Gu,
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
    function Bn(e, t, a, i, o) {
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
            e.key !== null && du("key", e.key, i, 0, ""), e.memoizedProps !== null && Ym(e.memoizedProps, i, 0, ""), t = {
              start: t,
              end: a,
              detail: {
                devtools: {
                  color: "error",
                  track: Gu,
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
            Gu,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          Gu,
          void 0,
          o
        ));
    }
    function Kv(e, t, a, i) {
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
    function $v(e, t, a, i, o, f) {
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
    function qm(e, t, a, i) {
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
    function kv(e, t, a, i) {
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
    function xm(e, t, a) {
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
      for (var e = kh, t = bS = kh = 0; t < e; ) {
        var a = wu[t];
        wu[t++] = null;
        var i = wu[t];
        wu[t++] = null;
        var o = wu[t];
        wu[t++] = null;
        var f = wu[t];
        if (wu[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && Gm(a, o, f);
      }
    }
    function Lo(e, t, a, i) {
      wu[kh++] = e, wu[kh++] = t, wu[kh++] = a, wu[kh++] = i, bS |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function Rc(e, t, a, i) {
      return Lo(e, t, a, i), As(e);
    }
    function ta(e, t) {
      return Lo(e, null, null, t), As(e);
    }
    function Gm(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & Hp || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - kl(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function As(e) {
      if (u0 > PE)
        throw Zr = u0 = 0, i0 = PS = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Zr > eT && (Zr = 0, i0 = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && e.flags & 4098 && An(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && t.flags & 4098 && An(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Yi(e) {
      if (Xu === null) return e;
      var t = Xu(e);
      return t === void 0 ? e : t.current;
    }
    function Sd(e) {
      if (Xu === null) return e;
      var t = Xu(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Yi(e.render), e.render !== t) ? (t = { $$typeof: Uf, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function wm(e, t) {
      if (Xu === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === na) && (i = !0);
          break;
        case 11:
          (o === Uf || o === na) && (i = !0);
          break;
        case 14:
        case 15:
          (o === Ar || o === na) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = Xu(a), e !== void 0 && e === Xu(t)));
    }
    function Mc(e) {
      Xu !== null && typeof WeakSet == "function" && (Wh === null && (Wh = /* @__PURE__ */ new WeakSet()), Wh.add(e));
    }
    function Y0(e, t, a) {
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
        if (Xu === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var p = !1;
        if (i = !1, y !== null && (y = Xu(y), y !== void 0 && (a.has(y) ? i = !0 : t.has(y) && (h === 1 ? i = !0 : p = !0))), Wh !== null && (Wh.has(e) || o !== null && Wh.has(o)) && (i = !0), i && (e._debugNeedsRemount = !0), (i || p) && (o = ta(e, 2), o !== null && Ne(o, e, 2)), f === null || i || Y0(
          f,
          t,
          a
        ), d === null) break;
        e = d;
      } while (!0);
    }
    function Wv(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, Q1 || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Xm(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function hu(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = U(
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
    function Cc(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        Xm(e) && (d = 1), h = Yi(h);
      else if (typeof e == "string")
        d = V(), d = Cg(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case In:
            return t = U(31, a, t, o), t.elementType = In, t.lanes = f, t;
          case Cf:
            return Uc(
              a.children,
              o,
              f,
              t
            );
          case Aa:
            d = 8, o |= Ba, o |= bi;
            break;
          case Tr:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = U(12, e, t, i | We), t.elementType = Tr, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case co:
            return t = U(13, a, t, o), t.elementType = co, t.lanes = f, t;
          case Ha:
            return t = U(19, a, t, o), t.elementType = Ha, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Fn:
                  d = 10;
                  break e;
                case Uh:
                  d = 9;
                  break e;
                case Uf:
                  d = 11, h = Sd(h);
                  break e;
                case Ar:
                  d = 14;
                  break e;
                case na:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : bl(e) ? a = "array" : e !== void 0 && e.$$typeof === On ? (a = "<" + (Ze(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? Dt(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = U(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function ji(e, t, a) {
      return t = Cc(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function Uc(e, t, a, i) {
      return e = U(7, e, i, t), e.lanes = a, e;
    }
    function Vo(e, t, a) {
      return e = U(6, e, null, t), e.lanes = a, e;
    }
    function Lm(e) {
      var t = U(18, null, null, He);
      return t.stateNode = e, t;
    }
    function bd(e, t, a) {
      return t = U(
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
    function sa(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = ES.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: Ee(t)
        }, ES.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: Ee(t)
      };
    }
    function Yn(e, t) {
      qi(), Fh[Ih++] = Np, Fh[Ih++] = Ig, Ig = e, Np = t;
    }
    function Vm(e, t, a) {
      qi(), Qu[Lu++] = yo, Qu[Lu++] = po, Qu[Lu++] = Cr, Cr = e;
      var i = yo;
      e = po;
      var o = 32 - kl(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - kl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, yo = 1 << 32 - kl(t) + o | a << o | i, po = f + e;
      } else
        yo = 1 << f | a << o | i, po = e;
    }
    function Ed(e) {
      qi(), e.return !== null && (Yn(e, 1), Vm(e, 1, 0));
    }
    function Td(e) {
      for (; e === Ig; )
        Ig = Fh[--Ih], Fh[Ih] = null, Np = Fh[--Ih], Fh[Ih] = null;
      for (; e === Cr; )
        Cr = Qu[--Lu], Qu[Lu] = null, po = Qu[--Lu], Qu[Lu] = null, yo = Qu[--Lu], Qu[Lu] = null;
    }
    function j0() {
      return qi(), Cr !== null ? { id: yo, overflow: po } : null;
    }
    function q0(e, t) {
      qi(), Qu[Lu++] = yo, Qu[Lu++] = po, Qu[Lu++] = Cr, yo = t.id, po = t.overflow, Cr = e;
    }
    function qi() {
      it || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function Hc(e, t) {
      if (e.return === null) {
        if (eu === null)
          eu = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (eu.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          eu.distanceFromLeaf > t && (eu.distanceFromLeaf = t);
        }
        return eu;
      }
      var a = Hc(
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
    function x0() {
      it && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function la(e, t) {
      hc || (e = Hc(e, 0), e.serverProps = null, t !== null && (t = Dg(t), e.serverTail.push(t)));
    }
    function yn(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", i = eu;
      throw i !== null && (eu = null, a = Om(i)), zs(
        sa(
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
      ), TS;
    }
    function Zm(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Wt] = e, t[Oa] = i, Ea(a, i), a) {
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
          ea("input", i), Ue("invalid", t), fa(t, i), ad(
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
          ea("select", i), Ue("invalid", t), nd(t, i);
          break;
        case "textarea":
          ea("textarea", i), Ue("invalid", t), bc(t, i), Bo(
            t,
            i.value,
            i.defaultValue,
            i.children
          );
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || Ky(t.textContent, a) ? (i.popover != null && (Ue("beforetoggle", t), Ue("toggle", t)), i.onScroll != null && Ue("scroll", t), i.onScrollEnd != null && Ue("scrollend", t), i.onClick != null && (t.onclick = hn), t = !0) : t = !1, t || yn(e, !0);
    }
    function Jm(e) {
      for (za = e.return; za; )
        switch (za.tag) {
          case 5:
          case 31:
          case 13:
            Vu = !1;
            return;
          case 27:
          case 3:
            Vu = !0;
            return;
          default:
            za = za.return;
        }
    }
    function Nc(e) {
      if (e !== za) return !1;
      if (!it)
        return Jm(e), it = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Tf(e.type, e.memoizedProps)), a = !a), a && It) {
        for (a = It; a; ) {
          var i = Hc(e, 0), o = Dg(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? zf(a) : tn(a.nextSibling);
        }
        yn(e);
      }
      if (Jm(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        It = zf(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        It = zf(e);
      } else
        t === 27 ? (t = It, ic(e.type) ? (e = r1, r1 = null, It = e) : It = t) : It = za ? tn(e.stateNode.nextSibling) : null;
      return !0;
    }
    function xi() {
      It = za = null, hc = it = !1;
    }
    function Os() {
      var e = Jf;
      return e !== null && (sn === null ? sn = e : sn.push.apply(
        sn,
        e
      ), Jf = null), e;
    }
    function zs(e) {
      Jf === null ? Jf = [e] : Jf.push(e);
    }
    function Gi() {
      var e = eu;
      if (e !== null) {
        eu = null;
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
    function Zo() {
      Ph = Pg = null, em = !1;
    }
    function pn(e, t, a) {
      xe(AS, t._currentValue, e), t._currentValue = a, xe(OS, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== V1 && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = V1;
    }
    function jn(e, t) {
      e._currentValue = AS.current;
      var a = OS.current;
      ye(OS, t), e._currentRenderer = a, ye(AS, t);
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
    function ei(e, t, a, i) {
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
            un(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === sc.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(d0) : e = [d0]);
        }
        o = o.return;
      }
      e !== null && ei(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function Jo(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!un(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function wi(e) {
      Pg = e, Ph = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function vt(e) {
      return em && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Km(Pg, e);
    }
    function Ds(e, t) {
      return Pg === null && wi(e), Km(e, t);
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
        controller: new wE(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Bc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function _s(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && XE(QE, function() {
        e.controller.abort();
      });
    }
    function mu(e, t, a) {
      e & 127 ? 0 > mc && (mc = Xl(), Yp = ev(t), zS = t, a != null && (DS = se(a)), (ht & (Il | au)) !== oa && (pl = !0, $f = Bp), e = Af(), t = Nu(), e !== tm || t !== jp ? tm = -1.1 : t !== null && ($f = Bp), Nr = e, jp = t) : e & 4194048 && 0 > Zu && (Zu = Xl(), qp = ev(t), Z1 = t, a != null && (J1 = se(a)), 0 > bo) && (e = Af(), t = Nu(), (e !== Wf || t !== Br) && (Wf = -1.1), kf = e, Br = t);
    }
    function G0(e) {
      if (0 > mc) {
        mc = Xl(), Yp = e._debugTask != null ? e._debugTask : null, (ht & (Il | au)) !== oa && ($f = Bp);
        var t = Af(), a = Nu();
        t !== tm || a !== jp ? tm = -1.1 : a !== null && ($f = Bp), Nr = t, jp = a;
      }
      0 > Zu && (Zu = Xl(), qp = e._debugTask != null ? e._debugTask : null, 0 > bo) && (e = Af(), t = Nu(), (e !== Wf || t !== Br) && (Wf = -1.1), kf = e, Br = t);
    }
    function yu() {
      var e = Ur;
      return Ur = 0, e;
    }
    function Ko(e) {
      var t = Ur;
      return Ur = e, t;
    }
    function ra(e) {
      var t = Ur;
      return Ur += e, t;
    }
    function Yc() {
      Me = Te = -1.1;
    }
    function Kt() {
      var e = Te;
      return Te = -1.1, e;
    }
    function Nl(e) {
      0 <= e && (Te = e);
    }
    function gn() {
      var e = fl;
      return fl = -0, e;
    }
    function La(e) {
      0 <= e && (fl = e);
    }
    function Va() {
      var e = nl;
      return nl = null, e;
    }
    function vn() {
      var e = pl;
      return pl = !1, e;
    }
    function ti(e) {
      cn = Xl(), 0 > e.actualStartTime && (e.actualStartTime = cn);
    }
    function zd(e) {
      if (0 <= cn) {
        var t = Xl() - cn;
        e.actualDuration += t, e.selfBaseDuration = t, cn = -1;
      }
    }
    function Rs(e) {
      if (0 <= cn) {
        var t = Xl() - cn;
        e.actualDuration += t, cn = -1;
      }
    }
    function da() {
      if (0 <= cn) {
        var e = Xl(), t = e - cn;
        cn = -1, Ur += t, fl += t, Me = e;
      }
    }
    function w0(e) {
      nl === null && (nl = []), nl.push(e), vo === null && (vo = []), vo.push(e);
    }
    function il() {
      cn = Xl(), 0 > Te && (Te = cn);
    }
    function jc(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function li(e, t) {
      if (Gp === null) {
        var a = Gp = [];
        RS = 0, Yr = Jy(), lm = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return RS++, t.then($m, $m), t;
    }
    function $m() {
      if (--RS === 0 && (-1 < Zu || (bo = -1.1), Gp !== null)) {
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
    function ai() {
      var e = jr.current;
      return e !== null ? e : Xt.pooledCache;
    }
    function $o(e, t) {
      t === null ? xe(jr, jr.current, e) : xe(jr, t.pool, e);
    }
    function km() {
      var e = ai();
      return e === null ? null : { parent: wl._currentValue, pool: e };
    }
    function _d() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Wm(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Za(e, t, a) {
      G.actQueue !== null && (G.didUsePromise = !0);
      var i = e.thenables;
      if (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(hn, hn), t = a), t._debugInfo === void 0) {
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
          throw e = t.reason, Ms(e), e;
        default:
          if (typeof t.status == "string")
            t.then(hn, hn);
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
              throw e = t.reason, Ms(e), e;
          }
          throw xr = t, Jp = !0, am;
      }
    }
    function Ja(e) {
      try {
        return KE(e);
      } catch (t) {
        throw t !== null && typeof t == "object" && typeof t.then == "function" ? (xr = t, Jp = !0, am) : t;
      }
    }
    function qc() {
      if (xr === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = xr;
      return xr = null, Jp = !1, e;
    }
    function Ms(e) {
      if (e === am || e === ov)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function rl(e) {
      var t = Fe;
      return e != null && (Fe = t === null ? e : t.concat(e)), t;
    }
    function Da() {
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
    function ha(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = ji(e, a.mode, 0), t._debugInfo = Fe, t.return = a), ce(
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
    function xn(e) {
      var t = Kp;
      return Kp += 1, nm === null && (nm = _d()), Za(nm, e, t);
    }
    function _a(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Gn(e, t) {
      throw t.$$typeof === jg ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function Sn(e, t) {
      var a = Da();
      a !== null ? a.run(
        Gn.bind(null, e, t)
      ) : Gn(e, t);
    }
    function Fm(e, t) {
      var a = se(e) || "Component";
      db[a] || (db[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
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
    function ko(e, t) {
      var a = Da();
      a !== null ? a.run(
        Fm.bind(null, e, t)
      ) : Fm(e, t);
    }
    function Rd(e, t) {
      var a = se(e) || "Component";
      hb[a] || (hb[a] = !0, t = String(t), e.tag === 3 ? console.error(
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
    function Cs(e, t) {
      var a = Da();
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
        return b = hu(b, T), b.index = 0, b.sibling = null, b;
      }
      function f(b, T, O) {
        return b.index = O, e ? (O = b.alternate, O !== null ? (O = O.index, O < T ? (b.flags |= 67108866, T) : O) : (b.flags |= 67108866, T)) : (b.flags |= 1048576, T);
      }
      function d(b) {
        return e && b.alternate === null && (b.flags |= 67108866), b;
      }
      function h(b, T, O, Z) {
        return T === null || T.tag !== 6 ? (T = Vo(
          O,
          b.mode,
          Z
        ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = Fe, T) : (T = o(T, O), T.return = b, T._debugInfo = Fe, T);
      }
      function y(b, T, O, Z) {
        var ue = O.type;
        return ue === Cf ? (T = z(
          b,
          T,
          O.props.children,
          Z,
          O.key
        ), ha(O, T, b), T) : T !== null && (T.elementType === ue || wm(T, O) || typeof ue == "object" && ue !== null && ue.$$typeof === na && Ja(ue) === T.type) ? (T = o(T, O.props), _a(T, O), T.return = b, T._debugOwner = O._owner, T._debugInfo = Fe, T) : (T = ji(O, b.mode, Z), _a(T, O), T.return = b, T._debugInfo = Fe, T);
      }
      function p(b, T, O, Z) {
        return T === null || T.tag !== 4 || T.stateNode.containerInfo !== O.containerInfo || T.stateNode.implementation !== O.implementation ? (T = bd(O, b.mode, Z), T.return = b, T._debugInfo = Fe, T) : (T = o(T, O.children || []), T.return = b, T._debugInfo = Fe, T);
      }
      function z(b, T, O, Z, ue) {
        return T === null || T.tag !== 7 ? (T = Uc(
          O,
          b.mode,
          Z,
          ue
        ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = Fe, T) : (T = o(T, O), T.return = b, T._debugInfo = Fe, T);
      }
      function R(b, T, O) {
        if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
          return T = Vo(
            "" + T,
            b.mode,
            O
          ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = Fe, T;
        if (typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case On:
              return O = ji(
                T,
                b.mode,
                O
              ), _a(O, T), O.return = b, b = rl(T._debugInfo), O._debugInfo = Fe, Fe = b, O;
            case oc:
              return T = bd(
                T,
                b.mode,
                O
              ), T.return = b, T._debugInfo = Fe, T;
            case na:
              var Z = rl(T._debugInfo);
              return T = Ja(T), b = R(b, T, O), Fe = Z, b;
          }
          if (bl(T) || _e(T))
            return O = Uc(
              T,
              b.mode,
              O,
              null
            ), O.return = b, O._debugOwner = b, O._debugTask = b._debugTask, b = rl(T._debugInfo), O._debugInfo = Fe, Fe = b, O;
          if (typeof T.then == "function")
            return Z = rl(T._debugInfo), b = R(
              b,
              xn(T),
              O
            ), Fe = Z, b;
          if (T.$$typeof === Fn)
            return R(
              b,
              Ds(b, T),
              O
            );
          Sn(b, T);
        }
        return typeof T == "function" && ko(b, T), typeof T == "symbol" && Cs(b, T), null;
      }
      function E(b, T, O, Z) {
        var ue = T !== null ? T.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
          return ue !== null ? null : h(b, T, "" + O, Z);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case On:
              return O.key === ue ? (ue = rl(O._debugInfo), b = y(
                b,
                T,
                O,
                Z
              ), Fe = ue, b) : null;
            case oc:
              return O.key === ue ? p(b, T, O, Z) : null;
            case na:
              return ue = rl(O._debugInfo), O = Ja(O), b = E(
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
              xn(O),
              Z
            ), Fe = ue, b;
          if (O.$$typeof === Fn)
            return E(
              b,
              T,
              Ds(b, O),
              Z
            );
          Sn(b, O);
        }
        return typeof O == "function" && ko(b, O), typeof O == "symbol" && Cs(b, O), null;
      }
      function q(b, T, O, Z, ue) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
          return b = b.get(O) || null, h(T, b, "" + Z, ue);
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case On:
              return O = b.get(
                Z.key === null ? O : Z.key
              ) || null, b = rl(Z._debugInfo), T = y(
                T,
                O,
                Z,
                ue
              ), Fe = b, T;
            case oc:
              return b = b.get(
                Z.key === null ? O : Z.key
              ) || null, p(T, b, Z, ue);
            case na:
              var je = rl(Z._debugInfo);
              return Z = Ja(Z), T = q(
                b,
                T,
                O,
                Z,
                ue
              ), Fe = je, T;
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
            return je = rl(Z._debugInfo), T = q(
              b,
              T,
              O,
              xn(Z),
              ue
            ), Fe = je, T;
          if (Z.$$typeof === Fn)
            return q(
              b,
              T,
              O,
              Ds(T, Z),
              ue
            );
          Sn(T, Z);
        }
        return typeof Z == "function" && ko(T, Z), typeof Z == "symbol" && Cs(T, Z), null;
      }
      function ne(b, T, O, Z) {
        if (typeof O != "object" || O === null) return Z;
        switch (O.$$typeof) {
          case On:
          case oc:
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
          case na:
            O = Ja(O), ne(b, T, O, Z);
        }
        return Z;
      }
      function oe(b, T, O, Z) {
        for (var ue = null, je = null, be = null, ge = T, $e = T = 0, Pt = null; ge !== null && $e < O.length; $e++) {
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
          ), e && ge && Cl.alternate === null && t(b, ge), T = f(Cl, T, $e), be === null ? je = Cl : be.sibling = Cl, be = Cl, ge = Pt;
        }
        if ($e === O.length)
          return a(b, ge), it && Yn(b, $e), je;
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
            ), be === null ? je = ge : be.sibling = ge, be = ge);
          return it && Yn(b, $e), je;
        }
        for (ge = i(ge); $e < O.length; $e++)
          Pt = q(
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
          ), be === null ? je = Pt : be.sibling = Pt, be = Pt);
        return e && ge.forEach(function(Ro) {
          return t(b, Ro);
        }), it && Yn(b, $e), je;
      }
      function Zt(b, T, O, Z) {
        if (O == null)
          throw Error("An iterable object provided no iterator.");
        for (var ue = null, je = null, be = T, ge = T = 0, $e = null, Pt = null, Cl = O.next(); be !== null && !Cl.done; ge++, Cl = O.next()) {
          be.index > ge ? ($e = be, be = null) : $e = be.sibling;
          var Ro = E(b, be, Cl.value, Z);
          if (Ro === null) {
            be === null && (be = $e);
            break;
          }
          Pt = ne(
            b,
            Ro,
            Cl.value,
            Pt
          ), e && be && Ro.alternate === null && t(b, be), T = f(Ro, T, ge), je === null ? ue = Ro : je.sibling = Ro, je = Ro, be = $e;
        }
        if (Cl.done)
          return a(b, be), it && Yn(b, ge), ue;
        if (be === null) {
          for (; !Cl.done; ge++, Cl = O.next())
            be = R(b, Cl.value, Z), be !== null && (Pt = ne(
              b,
              be,
              Cl.value,
              Pt
            ), T = f(
              be,
              T,
              ge
            ), je === null ? ue = be : je.sibling = be, je = be);
          return it && Yn(b, ge), ue;
        }
        for (be = i(be); !Cl.done; ge++, Cl = O.next())
          $e = q(
            be,
            b,
            ge,
            Cl.value,
            Z
          ), $e !== null && (Pt = ne(
            b,
            $e,
            Cl.value,
            Pt
          ), e && $e.alternate !== null && be.delete(
            $e.key === null ? ge : $e.key
          ), T = f(
            $e,
            T,
            ge
          ), je === null ? ue = $e : je.sibling = $e, je = $e);
        return e && be.forEach(function(gT) {
          return t(b, gT);
        }), it && Yn(b, ge), ue;
      }
      function ft(b, T, O, Z) {
        if (typeof O == "object" && O !== null && O.type === Cf && O.key === null && (ha(O, null, b), O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case On:
              var ue = rl(O._debugInfo);
              e: {
                for (var je = O.key; T !== null; ) {
                  if (T.key === je) {
                    if (je = O.type, je === Cf) {
                      if (T.tag === 7) {
                        a(
                          b,
                          T.sibling
                        ), Z = o(
                          T,
                          O.props.children
                        ), Z.return = b, Z._debugOwner = O._owner, Z._debugInfo = Fe, ha(O, Z, b), b = Z;
                        break e;
                      }
                    } else if (T.elementType === je || wm(
                      T,
                      O
                    ) || typeof je == "object" && je !== null && je.$$typeof === na && Ja(je) === T.type) {
                      a(
                        b,
                        T.sibling
                      ), Z = o(T, O.props), _a(Z, O), Z.return = b, Z._debugOwner = O._owner, Z._debugInfo = Fe, b = Z;
                      break e;
                    }
                    a(b, T);
                    break;
                  } else t(b, T);
                  T = T.sibling;
                }
                O.type === Cf ? (Z = Uc(
                  O.props.children,
                  b.mode,
                  Z,
                  O.key
                ), Z.return = b, Z._debugOwner = b, Z._debugTask = b._debugTask, Z._debugInfo = Fe, ha(O, Z, b), b = Z) : (Z = ji(
                  O,
                  b.mode,
                  Z
                ), _a(Z, O), Z.return = b, Z._debugInfo = Fe, b = Z);
              }
              return b = d(b), Fe = ue, b;
            case oc:
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
            case na:
              return ue = rl(O._debugInfo), O = Ja(O), b = ft(
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
            if (ue = rl(O._debugInfo), je = _e(O), typeof je != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var be = je.call(O);
            return be === O ? (b.tag !== 0 || Object.prototype.toString.call(b.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(be) !== "[object Generator]") && (sb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), sb = !0) : O.entries !== je || HS || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), HS = !0), b = Zt(
              b,
              T,
              be,
              Z
            ), Fe = ue, b;
          }
          if (typeof O.then == "function")
            return ue = rl(O._debugInfo), b = ft(
              b,
              T,
              xn(O),
              Z
            ), Fe = ue, b;
          if (O.$$typeof === Fn)
            return ft(
              b,
              T,
              Ds(b, O),
              Z
            );
          Sn(b, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (ue = "" + O, T !== null && T.tag === 6 ? (a(
          b,
          T.sibling
        ), Z = o(T, ue), Z.return = b, b = Z) : (a(b, T), Z = Vo(
          ue,
          b.mode,
          Z
        ), Z.return = b, Z._debugOwner = b, Z._debugTask = b._debugTask, Z._debugInfo = Fe, b = Z), d(b)) : (typeof O == "function" && ko(b, O), typeof O == "symbol" && Cs(b, O), a(b, T));
      }
      return function(b, T, O, Z) {
        var ue = Fe;
        Fe = null;
        try {
          Kp = 0;
          var je = ft(
            b,
            T,
            O,
            Z
          );
          return nm = null, je;
        } catch (Pt) {
          if (Pt === am || Pt === ov) throw Pt;
          var be = U(29, Pt, null, b.mode);
          be.lanes = Z, be.return = b;
          var ge = be._debugInfo = Fe;
          if (be._debugOwner = b._debugOwner, be._debugTask = b._debugTask, ge != null) {
            for (var $e = ge.length - 1; 0 <= $e; $e--)
              if (typeof ge[$e].stack == "string") {
                be._debugOwner = ge[$e], be._debugTask = ge[$e].debugTask;
                break;
              }
          }
          return be;
        } finally {
          Fe = ue;
        }
      };
    }
    function qt(e, t) {
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
    function pu(e, t) {
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
        tag: yb,
        payload: null,
        callback: null,
        next: null
      };
    }
    function gu(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, BS === i && !vb) {
        var o = se(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), vb = !0;
      }
      return (ht & Il) !== oa ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = As(e), Gm(e, null, a), t) : (Lo(e, i, t, a), As(e));
    }
    function bn(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, ds(e, a);
      }
    }
    function Us(e, t) {
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
    function Wo() {
      if (YS) {
        var e = lm;
        if (e !== null) throw e;
      }
    }
    function vu(e, t, a, i) {
      YS = !1;
      var o = e.updateQueue;
      Ff = !1, BS = o.shared;
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
          var E = h.lane & -536870913, q = E !== h.lane;
          if (q ? (Ie & E) === E : (i & E) === E) {
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
                case pb:
                  if (ne = ne.payload, typeof ne == "function") {
                    em = !0;
                    var ft = ne.call(
                      Zt,
                      R,
                      oe
                    );
                    if (E.mode & Ba) {
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
                case NS:
                  E.flags = E.flags & -65537 | 128;
                case yb:
                  if (ft = ne.payload, typeof ft == "function") {
                    if (em = !0, ne = ft.call(
                      Zt,
                      R,
                      oe
                    ), E.mode & Ba) {
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
                case gb:
                  Ff = !0;
              }
            }
            E = h.callback, E !== null && (e.flags |= 64, q && (e.flags |= 8192), q = o.callbacks, q === null ? o.callbacks = [E] : q.push(E));
          } else
            q = {
              lane: E,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, z === null ? (p = z = q, y = R) : z = z.next = q, d |= E;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            q = h, h = q.next, q.next = null, o.lastBaseUpdate = q, o.shared.pending = null;
          }
        } while (!0);
        z === null && (y = R), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = z, f === null && (o.shared.lanes = 0), es |= d, e.lanes = d, e.memoizedState = R;
      }
      BS = null;
    }
    function Xi(e, t) {
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
          Xi(a[e], t);
    }
    function Fo(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Xi(a[e], t);
    }
    function Md(e, t) {
      var a = pc;
      xe(sv, a, e), xe(um, t, e), pc = a | t.baseLanes;
    }
    function ni(e) {
      xe(sv, pc, e), xe(
        um,
        um.current,
        e
      );
    }
    function wn(e) {
      pc = sv.current, ye(um, e), ye(sv, e);
    }
    function ma(e) {
      var t = e.alternate;
      xe(
        Ml,
        Ml.current & im,
        e
      ), xe(tu, e, e), Ju === null && (t === null || um.current !== null || t.memoizedState !== null) && (Ju = e);
    }
    function Xn(e) {
      xe(Ml, Ml.current, e), xe(tu, e, e), Ju === null && (Ju = e);
    }
    function Cd(e) {
      e.tag === 22 ? (xe(Ml, Ml.current, e), xe(tu, e, e), Ju === null && (Ju = e)) : Su(e);
    }
    function Su(e) {
      xe(Ml, Ml.current, e), xe(
        tu,
        tu.current,
        e
      );
    }
    function Yl(e) {
      ye(tu, e), Ju === e && (Ju = null), ye(Ml, e);
    }
    function xc(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || hr(a) || ky(a)))
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
    function Be() {
      var e = x;
      $u === null ? $u = [e] : $u.push(e);
    }
    function k() {
      var e = x;
      if ($u !== null && (Ao++, $u[Ao] !== e)) {
        var t = se(Ye);
        if (!Sb.has(t) && (Sb.add(t), $u !== null)) {
          for (var a = "", i = 0; i <= Ao; i++) {
            var o = $u[i], f = i === Ao ? e : o;
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
    function ui(e) {
      e == null || bl(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        x,
        typeof e
      );
    }
    function Hs() {
      var e = se(Ye);
      Eb.has(e) || (Eb.add(e), console.error(
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
          x
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        x,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!un(e[a], t[a])) return !1;
      return !0;
    }
    function ey(e, t, a, i, o, f) {
      Eo = f, Ye = t, $u = e !== null ? e._debugHookTypes : null, Ao = -1, Wp = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = se(Ye), jS.has(f) || (jS.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, G.H = e !== null && e.memoizedState !== null ? xS : $u !== null ? Tb : qS, wr = f = (t.mode & Ba) !== He;
      var d = MS(a, i, o);
      if (wr = !1, om && (d = Ns(
        t,
        a,
        i,
        o
      )), f) {
        re(!0);
        try {
          d = Ns(
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
      t._debugHookTypes = $u, t.dependencies === null ? To !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: To
      }) : t.dependencies._debugThenableState = To, G.H = Fp;
      var a = wt !== null && wt.next !== null;
      if (Eo = 0, $u = x = Ql = wt = Ye = null, Ao = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), dv = !1, kp = 0, To = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Ll || (e = e.dependencies, e !== null && Jo(e) && (Ll = !0)), Jp ? (Jp = !1, e = !0) : e = !1, e && (t = se(t) || "Unknown", bb.has(t) || jS.has(t) || (bb.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function Ns(e, t, a, i) {
      Ye = e;
      var o = 0;
      do {
        if (om && (To = null), kp = 0, om = !1, o >= kE)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Wp = !1, Ql = wt = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Ao = -1, G.H = Ab, f = MS(t, a, i);
      } while (om);
      return f;
    }
    function Bs() {
      var e = G.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? qs(t) : t, e = e.useState()[0], (wt !== null ? wt.memoizedState : null) !== e && (Ye.flags |= 1024), t;
    }
    function Gc() {
      var e = hv !== 0;
      return hv = 0, e;
    }
    function Ys(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & bi) !== He ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function Qi(e) {
      if (dv) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        dv = !1;
      }
      Eo = 0, $u = Ql = wt = Ye = null, Ao = -1, x = null, om = !1, kp = hv = 0, To = null;
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
    function js() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function qs(e) {
      var t = kp;
      return kp += 1, To === null && (To = _d()), e = Za(To, e, t), t = Ye, (Ql === null ? t.memoizedState : Ql.next) === null && (t = t.alternate, G.H = t !== null && t.memoizedState !== null ? xS : qS), e;
    }
    function ii(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return qs(e);
        if (e.$$typeof === Fn) return vt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function Ka(e) {
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
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = js(), Ye.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || Wp)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = lS;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function $a(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Io(e, t, a) {
      var i = vl();
      if (a !== void 0) {
        var o = a(t);
        if (wr) {
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
      }, i.queue = e, e = e.dispatch = Fv.bind(
        null,
        Ye,
        e
      ), [i.memoizedState, e];
    }
    function wc(e) {
      var t = Tt();
      return Li(t, wt, e);
    }
    function Li(e, t, a) {
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
          if (R !== p.lane ? (Ie & R) === R : (Eo & R) === R) {
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
            else if ((Eo & E) === E) {
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
              }, y === null ? (h = y = R, d = f) : y = y.next = R, Ye.lanes |= E, es |= E;
            R = p.action, wr && a(f, R), f = p.hasEagerState ? p.eagerState : a(f, R);
          } else
            E = {
              lane: R,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = E, d = f) : y = y.next = E, Ye.lanes |= R, es |= R;
          p = p.next;
        } while (p !== null && p !== t);
        if (y === null ? d = f : y.next = h, !un(f, e.memoizedState) && (Ll = !0, z && (a = lm, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = y, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function Xc(e) {
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
        un(f, t.memoizedState) || (Ll = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function Po(e, t, a) {
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
        if (f = t(), cm || (a = t(), un(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), cm = !0)), Xt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        Ie & 127 || ty(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, Vc(
        Vi.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, bu(
        Ku | fn,
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
    function Qc(e, t, a) {
      var i = Ye, o = Tt(), f = it;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !cm) {
        var d = t();
        un(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), cm = !0);
      }
      (d = !un(
        (wt || o).memoizedState,
        a
      )) && (o.memoizedState = a, Ll = !0), o = o.queue;
      var h = Vi.bind(null, i, o, e);
      if (zl(2048, fn, h, [e]), o.getSnapshot !== t || d || Ql !== null && Ql.memoizedState.tag & Ku) {
        if (i.flags |= 2048, bu(
          Ku | fn,
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
        f || Eo & 127 || ty(i, t, a);
      }
      return a;
    }
    function ty(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Ye.updateQueue, t === null ? (t = js(), Ye.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function ly(e, t, a, i) {
      t.value = a, t.getSnapshot = i, Zi(t) && ay(e);
    }
    function Vi(e, t, a) {
      return a(function() {
        Zi(t) && (mu(2, "updateSyncExternalStore()", e), ay(e));
      });
    }
    function Zi(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !un(e, a);
      } catch {
        return !0;
      }
    }
    function ay(e) {
      var t = ta(e, 2);
      t !== null && Ne(t, e, 2);
    }
    function Ud(e) {
      var t = vl();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), wr) {
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
        lastRenderedReducer: $a,
        lastRenderedState: e
      }, t;
    }
    function Ji(e) {
      e = Ud(e);
      var t = e.queue, a = qd.bind(null, Ye, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function Lc(e) {
      var t = vl();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Vs.bind(
        null,
        Ye,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function xs(e, t) {
      var a = Tt();
      return ef(a, wt, e, t);
    }
    function ef(e, t, a, i) {
      return e.baseState = a, Li(
        e,
        wt,
        typeof i == "function" ? i : $a
      );
    }
    function Gs(e, t) {
      var a = Tt();
      return wt !== null ? ef(a, wt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function X0(e, t, a, i, o) {
      if (jl(e))
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
        G.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, Ki(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function Ki(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = G.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), G.T = d;
        try {
          var h = a(o, i), y = G.S;
          y !== null && y(d, h), ny(e, t, h);
        } catch (p) {
          ws(e, t, p);
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
          ws(e, t, p);
        }
    }
    function ny(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (G.asyncTransitions++, a.then(Zc, Zc), a.then(
        function(i) {
          ci(e, t, i);
        },
        function(i) {
          return ws(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : ci(e, t, a);
    }
    function ci(e, t, a) {
      t.status = "fulfilled", t.value = a, Hd(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Ki(e, a)));
    }
    function ws(e, t, a) {
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
    function oi(e, t) {
      return t;
    }
    function ka(e, t) {
      if (it) {
        var a = Xt.formState;
        if (a !== null) {
          e: {
            var i = Ye;
            if (it) {
              if (It) {
                t: {
                  for (var o = It, f = Vu; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = tn(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === c1 || f === o2 ? o : null;
                }
                if (o) {
                  It = tn(
                    o.nextSibling
                  ), i = o.data === c1;
                  break e;
                }
              }
              yn(i);
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
        lastRenderedReducer: oi,
        lastRenderedState: t
      }, a.queue = i, a = qd.bind(
        null,
        Ye,
        i
      ), i.dispatch = a, i = Ud(!1), f = Vs.bind(
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
    function $i(e) {
      var t = Tt();
      return Nd(t, wt, e);
    }
    function Nd(e, t, a) {
      if (t = Li(
        e,
        t,
        oi
      )[0], e = wc($a)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = qs(t);
        } catch (d) {
          throw d === am ? ov : d;
        }
      else i = t;
      t = Tt();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (Ye.flags |= 2048, bu(
        Ku | fn,
        { destroy: void 0 },
        uy.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function uy(e, t) {
      e.action = t;
    }
    function ki(e) {
      var t = Tt(), a = wt;
      if (a !== null)
        return Nd(t, a, e);
      Tt(), t = t.memoizedState, a = Tt();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function bu(e, t, a, i) {
      return e = { tag: e, create: a, deps: i, inst: t, next: null }, t = Ye.updateQueue, t === null && (t = js(), Ye.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function Bd(e) {
      var t = vl();
      return e = { current: e }, t.memoizedState = e;
    }
    function Wi(e, t, a, i) {
      var o = vl();
      Ye.flags |= e, o.memoizedState = bu(
        Ku | t,
        { destroy: void 0 },
        a,
        i === void 0 ? null : i
      );
    }
    function zl(e, t, a, i) {
      var o = Tt();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      wt !== null && i !== null && Pm(i, wt.memoizedState.deps) ? o.memoizedState = bu(t, f, a, i) : (Ye.flags |= e, o.memoizedState = bu(
        Ku | t,
        f,
        a,
        i
      ));
    }
    function Vc(e, t) {
      (Ye.mode & bi) !== He ? Wi(276826112, fn, e, t) : Wi(8390656, fn, e, t);
    }
    function Q0(e) {
      Ye.flags |= 4;
      var t = Ye.updateQueue;
      if (t === null)
        t = js(), Ye.updateQueue = t, t.events = [e];
      else {
        var a = t.events;
        a === null ? t.events = [e] : a.push(e);
      }
    }
    function Xs(e) {
      var t = vl(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((ht & Il) !== oa)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function tf(e) {
      var t = Tt().memoizedState;
      return Q0({ ref: t, nextImpl: e }), function() {
        if ((ht & Il) !== oa)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return t.impl.apply(void 0, arguments);
      };
    }
    function ya(e, t) {
      var a = 4194308;
      return (Ye.mode & bi) !== He && (a |= 134217728), Wi(a, lu, e, t);
    }
    function Wa(e, t) {
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
    function Eu(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (Ye.mode & bi) !== He && (i |= 134217728), Wi(
        i,
        lu,
        Wa.bind(null, t, e),
        a
      );
    }
    function lf(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, zl(
        4,
        lu,
        Wa.bind(null, t, e),
        a
      );
    }
    function Yd(e, t) {
      return vl().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function Qn(e, t) {
      var a = Tt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && Pm(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function pa(e, t) {
      var a = vl();
      t = t === void 0 ? null : t;
      var i = e();
      if (wr) {
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
      if (i = e(), wr) {
        re(!0);
        try {
          e();
        } finally {
          re(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function af(e, t) {
      var a = vl();
      return At(a, e, t);
    }
    function Tu(e, t) {
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
      return a === void 0 || Eo & 1073741824 && !(Ie & 261930) ? e.memoizedState = t : (e.memoizedState = a, e = df(), Ye.lanes |= e, es |= e, a);
    }
    function hl(e, t, a, i) {
      return un(a, t) ? a : um.current !== null ? (e = At(e, a, i), un(e, t) || (Ll = !0), e) : !(Eo & 42) || Eo & 1073741824 && !(Ie & 261930) ? (Ll = !0, e.memoizedState = a) : (e = df(), Ye.lanes |= e, es |= e, t);
    }
    function Zc() {
      G.asyncTransitions--;
    }
    function Jc(e, t, a, i, o) {
      var f = bt.p;
      bt.p = f !== 0 && f < Wl ? f : Wl;
      var d = G.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), G.T = h, Vs(e, !1, t, a);
      try {
        var y = o(), p = G.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          G.asyncTransitions++, y.then(Zc, Zc);
          var z = Dd(
            y,
            i
          );
          Kc(
            e,
            t,
            z,
            aa(e)
          );
        } else
          Kc(
            e,
            t,
            i,
            aa(e)
          );
      } catch (R) {
        Kc(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: R },
          aa(e)
        );
      } finally {
        bt.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), G.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function fi(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Qs(e).queue;
      G0(e), Jc(
        e,
        o,
        t,
        Fr,
        a === null ? $ : function() {
          return nf(e), a(i);
        }
      );
    }
    function Qs(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Fr,
        baseState: Fr,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: $a,
          lastRenderedState: Fr
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
          lastRenderedReducer: $a,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function nf(e) {
      G.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = Qs(e);
      t.next === null && (t = e.alternate.memoizedState), Kc(
        e,
        t.next.queue,
        {},
        aa(e)
      );
    }
    function Fi() {
      var e = Ud(!1);
      return e = Jc.bind(
        null,
        Ye,
        e.queue,
        !0,
        !1
      ), vl().memoizedState = e, [!1, e];
    }
    function L0() {
      var e = wc($a)[0], t = Tt().memoizedState;
      return [
        typeof e == "boolean" ? e : qs(e),
        t
      ];
    }
    function tl() {
      var e = Xc($a)[0], t = Tt().memoizedState;
      return [
        typeof e == "boolean" ? e : qs(e),
        t
      ];
    }
    function si() {
      return vt(d0);
    }
    function Ls() {
      var e = vl(), t = Xt.identifierPrefix;
      if (it) {
        var a = po, i = yo;
        a = (i & ~(1 << 32 - kl(i) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = hv++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = $E++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    }
    function jd() {
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
            var i = aa(a), o = Ol(i), f = gu(a, o, i);
            f !== null && (mu(i, "refresh()", e), Ne(f, a, i), bn(f, a, i)), e = Od(), t != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: e };
            return;
        }
        a = a.return;
      }
    }
    function Fv(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = aa(e);
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      jl(e) ? ol(t, o) : (o = Rc(e, t, o, i), o !== null && (mu(i, "dispatch()", e), Ne(o, e, i), Zs(o, t, i)));
    }
    function qd(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = aa(e), Kc(e, t, a, i) && mu(i, "setState()", e);
    }
    function Kc(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (jl(e)) ol(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = G.H;
          G.H = Ti;
          try {
            var h = t.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, un(y, h))
              return Lo(e, t, o, 0), Xt === null && vd(), !1;
          } catch {
          } finally {
            G.H = d;
          }
        }
        if (a = Rc(e, t, o, i), a !== null)
          return Ne(a, e, i), Zs(a, t, i), !0;
      }
      return !1;
    }
    function Vs(e, t, a, i) {
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
      }, jl(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = Rc(
          e,
          a,
          i,
          2
        ), t !== null && (mu(2, "setOptimistic()", e), Ne(t, e, 2));
    }
    function jl(e) {
      var t = e.alternate;
      return e === Ye || t !== null && t === Ye;
    }
    function ol(e, t) {
      om = dv = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Zs(e, t, a) {
      if (a & 4194048) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, ds(e, a);
      }
    }
    function $c(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        Bb.has(t) || (Bb.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function uf(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & Ba) {
        re(!0);
        try {
          f = a(i, o);
        } finally {
          re(!1);
        }
      }
      f === void 0 && (t = Ze(t) || "Component", Cb.has(t) || (Cb.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : ke({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function xd(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & Ba) {
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
      return t.prototype && t.prototype.isPureReactComponent ? !Qo(a, i) || !Qo(o, f) : !0;
    }
    function Au(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = se(e) || "Component", zb.has(e) || (zb.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), GS.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function Ou(e, t) {
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
      pS(e), console.warn(
        `%s

%s
`,
        fm ? "An error occurred in the <" + fm + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function wd(e) {
      var t = fm ? "The above error occurred in the <" + fm + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((wS || "Anonymous") + ".");
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
          p2 + " " + e[0],
          g2,
          xv + i + xv,
          v2
        ) : e.splice(
          0,
          0,
          p2,
          g2,
          xv + i + xv,
          v2
        ), e.unshift(console), i = yT.apply(console.error, e), i();
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
      pS(e);
    }
    function Js(e, t) {
      try {
        fm = t.source ? se(t.source) : null, wS = null;
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
        fm = a.source ? se(a.source) : null, wS = se(t);
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
      return a = Ol(a), a.tag = NS, a.payload = { element: null }, a.callback = function() {
        ce(t.source, Js, e, t);
      }, a;
    }
    function Qd(e) {
      return e = Ol(e), e.tag = NS, e;
    }
    function Ld(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          Mc(a), ce(
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
        Mc(a), ce(
          i.source,
          cy,
          t,
          a,
          i
        ), typeof o != "function" && (ls === null ? ls = /* @__PURE__ */ new Set([this]) : ls.add(this)), VE(this, i), typeof o == "function" || !(a.lanes & 2) && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          se(a) || "Unknown"
        );
      });
    }
    function oy(e, t, a, i, o) {
      if (a.flags |= 32768, qu && gf(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && qn(
          t,
          a,
          o,
          !0
        ), it && (hc = !0), a = tu.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return Ju === null ? mf() : a.alternate === null && sl === zo && (sl = pv), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === fv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), fh(e, i, o)), !1;
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
        return fh(e, i, o), mf(), !1;
      }
      if (it)
        return hc = !0, t = tu.current, t !== null ? (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== TS && zs(
          sa(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== TS && zs(
          sa(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = sa(i, a), o = Xd(
          e.stateNode,
          i,
          o
        ), Us(e, o), sl !== If && (sl = Xr)), !1;
      var f = sa(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (a0 === null ? a0 = [f] : a0.push(f), sl !== If && (sl = Xr), t === null) return !0;
      i = sa(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Xd(
              a.stateNode,
              i,
              e
            ), Us(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (ls === null || !ls.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Qd(o), Ld(
                o,
                e,
                a,
                i
              ), Us(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function ql(e, t, a, i) {
      t.child = e === null ? mb(t, null, a, i) : Gr(
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
      return wi(t), i = ey(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = Gc(), e !== null && !Ll ? (Ys(e, t, o), Ln(e, t, o)) : (it && h && Ed(t), t.flags |= 1, ql(e, t, i, o), t.child);
    }
    function fy(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !Xm(f) && f.defaultProps === void 0 && a.compare === null ? (a = Yi(f), t.tag = 15, t.type = a, cf(t, f), sy(
          e,
          t,
          a,
          i,
          o
        )) : (e = Cc(
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
        if (a = a.compare, a = a !== null ? a : Qo, a(d, i) && e.ref === t.ref)
          return Ln(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = hu(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function sy(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Qo(f, i) && e.ref === t.ref && t.type === e.type)
          if (Ll = !1, t.pendingProps = i = f, $d(e, o))
            e.flags & 131072 && (Ll = !0);
          else
            return t.lanes = e.lanes, Ln(e, t, o);
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
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && $o(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? Md(t, f) : ni(t), Cd(t);
        else
          return i = t.lanes = 536870912, dy(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a,
            i
          );
      } else
        f !== null ? ($o(t, f.cachePool), Md(t, f), Su(t), t.memoizedState = null) : (e !== null && $o(t, null), ni(t), Su(t));
      return ql(e, t, o, a), t.child;
    }
    function kc(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: Hp,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function dy(e, t, a, i, o) {
      var f = ai();
      return f = f === null ? null : {
        parent: wl._currentValue,
        pool: f
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, e !== null && $o(t, null), ni(t), Cd(t), e !== null && qn(e, t, i, !0), t.childLanes = o, null;
    }
    function Ks(e, t) {
      var a = t.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), t = ks(
        { mode: t.mode, children: t.children },
        e.mode
      ), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function hy(e, t, a) {
      return Gr(t, e.child, null, a), e = Ks(
        t,
        t.pendingProps
      ), e.flags |= 2, Yl(t), t.memoizedState = null, e;
    }
    function J0(e, t, a) {
      var i = t.pendingProps, o = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (it) {
          if (i.mode === "hidden")
            return e = Ks(t, i), t.lanes = 536870912, kc(null, e);
          if (Xn(t), (e = It) ? (a = zt(
            e,
            Vu
          ), a = a !== null && a.data === Kr ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: j0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Lm(a), i.return = t, t.child = i, za = t, It = null)) : a = null, a === null)
            throw la(t, e), yn(t);
          return t.lanes = 536870912, null;
        }
        return Ks(t, i);
      }
      var f = e.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (Xn(t), o)
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
        else if (x0(), a & 536870912 && hf(t), Ll || qn(
          e,
          t,
          a,
          !1
        ), o = (a & e.childLanes) !== 0, Ll || o) {
          if (i = Xt, i !== null && (d = Sc(
            i,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, ta(e, d), Ne(i, e, d), XS;
          mf(), t = hy(
            e,
            t,
            a
          );
        } else
          e = f.treeContext, It = tn(
            d.nextSibling
          ), za = t, it = !0, Jf = null, hc = !1, eu = null, Vu = !1, e !== null && q0(t, e), t = Ks(t, i), t.flags |= 4096;
        return t;
      }
      return f = e.child, i = { mode: i.mode, children: i.children }, a & 536870912 && a & e.lanes && hf(t), e = hu(f, i), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function $s(e, t) {
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
        Yb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), Yb[f] = !0);
      }
      return t.mode & Ba && Ei.recordLegacyContextWarning(
        t,
        null
      ), e === null && (cf(t, t.type), a.contextTypes && (f = Ze(a) || "Unknown", qb[f] || (qb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), wi(t), a = ey(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = Gc(), e !== null && !Ll ? (Ys(e, t, o), Ln(e, t, o)) : (it && i && Ed(t), t.flags |= 1, ql(e, t, a, o), t.child);
    }
    function yy(e, t, a, i, o, f) {
      return wi(t), Ao = -1, Wp = e !== null && e.type !== t.type, t.updateQueue = null, a = Ns(
        t,
        i,
        a,
        o
      ), dl(e, t), i = Gc(), e !== null && !Ll ? (Ys(e, t, f), Ln(e, t, f)) : (it && i && Ed(t), t.flags |= 1, ql(e, t, a, f), t.child);
    }
    function Wc(e, t, a, i, o) {
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
            sa(f, t)
          ), Us(t, h);
      }
      if (wi(t), t.stateNode === null) {
        if (d = Zf, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== Fn) && !Nb.has(a) && (Nb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === Uh ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Ze(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = vt(f)), f = new a(i, d), t.mode & Ba) {
          re(!0);
          try {
            f = new a(i, d);
          } finally {
            re(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = GS, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = Ob, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Ze(a) || "Component", Db.has(d) || (Db.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = Ze(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Rb.has(f) || (Rb.add(f), console.error(
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
        ), a.childContextTypes && !Hb.has(a) && (Hb.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !Ub.has(a) && (Ub.add(a), console.error(
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
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || _b.has(a) || (_b.add(a), console.error(
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
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, nt(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? vt(d) : Zf, f.state === i && (d = Ze(a) || "Component", Mb.has(d) || (Mb.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & Ba && Ei.recordLegacyContextWarning(
          t,
          f
        ), Ei.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (uf(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          se(t) || "Component"
        ), GS.enqueueReplaceState(
          f,
          f.state,
          null
        )), vu(t, i, f, o), Wo(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & bi) !== He && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var z = t.memoizedProps;
        h = Ou(a, z), f.props = h;
        var R = f.context;
        y = a.contextType, d = Zf, typeof y == "object" && y !== null && (d = vt(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", z = t.pendingProps !== z, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (z || R !== d) && Au(
          t,
          f,
          i,
          d
        ), Ff = !1;
        var E = t.memoizedState;
        f.state = E, vu(t, i, f, o), Wo(), R = t.memoizedState, z || E !== R || Ff ? (typeof p == "function" && (uf(
          t,
          a,
          p,
          i
        ), R = t.memoizedState), (h = Ff || xd(
          t,
          a,
          h,
          i,
          E,
          R,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & bi) !== He && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & bi) !== He && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = R), f.props = i, f.state = R, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & bi) !== He && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, pu(e, t), d = t.memoizedProps, y = Ou(a, d), f.props = y, p = t.pendingProps, E = f.context, R = a.contextType, h = Zf, typeof R == "object" && R !== null && (h = vt(R)), z = a.getDerivedStateFromProps, (R = typeof z == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || E !== h) && Au(
          t,
          f,
          i,
          h
        ), Ff = !1, E = t.memoizedState, f.state = E, vu(t, i, f, o), Wo();
        var q = t.memoizedState;
        d !== p || E !== q || Ff || e !== null && e.dependencies !== null && Jo(e.dependencies) ? (typeof z == "function" && (uf(
          t,
          a,
          z,
          i
        ), q = t.memoizedState), (y = Ff || xd(
          t,
          a,
          y,
          i,
          E,
          q,
          h
        ) || e !== null && e.dependencies !== null && Jo(e.dependencies)) ? (R || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, q, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          q,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = q), f.props = i, f.state = q, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, $s(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, Di(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, cn = -1;
        else if (a = eb(h), t.mode & Ba) {
          re(!0);
          try {
            eb(h);
          } finally {
            re(!1);
          }
        }
        t.flags |= 1, e !== null && d ? (t.child = Gr(
          t,
          e.child,
          null,
          o
        ), t.child = Gr(
          t,
          null,
          a,
          o
        )) : ql(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Ln(
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
      return xi(), t.flags |= 256, ql(e, t, a, i), t.child;
    }
    function cf(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Ze(t) || "Unknown", xb[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), xb[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Ze(t) || "Unknown", jb[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), jb[t] = !0));
    }
    function of(e) {
      return { baseLanes: e, cachePool: km() };
    }
    function Vd(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Rn), e;
    }
    function Zd(e, t, a) {
      var i, o = t.pendingProps;
      qe(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (Ml.current & $p) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (it) {
          if (f ? ma(t) : Su(t), (e = It) ? (a = zt(
            e,
            Vu
          ), a = a !== null && a.data !== Kr ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: j0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Lm(a), i.return = t, t.child = i, za = t, It = null)) : a = null, a === null)
            throw la(t, e), yn(t);
          return ky(a) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          Su(t);
          var y = t.mode;
          return h = ks(
            { mode: "hidden", children: h },
            y
          ), o = Uc(
            o,
            y,
            a,
            null
          ), h.return = t, o.return = t, h.sibling = o, t.child = h, o = t.child, o.memoizedState = of(a), o.childLanes = Vd(
            e,
            i,
            a
          ), t.memoizedState = QS, kc(
            null,
            o
          );
        }
        return ma(t), gy(
          t,
          h
        );
      }
      var p = e.memoizedState;
      if (p !== null) {
        var z = p.dehydrated;
        if (z !== null) {
          if (d)
            t.flags & 256 ? (ma(t), t.flags &= -257, t = Jd(
              e,
              t,
              a
            )) : t.memoizedState !== null ? (Su(t), t.child = e.child, t.flags |= 128, t = null) : (Su(t), h = o.fallback, y = t.mode, o = ks(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = Uc(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = t, h.return = t, o.sibling = h, t.child = o, Gr(
              t,
              e.child,
              null,
              a
            ), o = t.child, o.memoizedState = of(a), o.childLanes = Vd(
              e,
              i,
              a
            ), t.memoizedState = QS, t = kc(
              null,
              o
            ));
          else if (ma(t), x0(), a & 536870912 && hf(t), ky(
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
            }, typeof i == "string" && ES.set(
              h,
              o
            ), zs(o), t = Jd(
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
            if (i = Xt, i !== null && (o = Sc(
              i,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, ta(
                e,
                o
              ), Ne(
                i,
                e,
                o
              ), XS;
            hr(
              z
            ) || mf(), t = Jd(
              e,
              t,
              a
            );
          } else
            hr(
              z
            ) ? (t.flags |= 192, t.child = e.child, t = null) : (e = p.treeContext, It = tn(
              z.nextSibling
            ), za = t, it = !0, Jf = null, hc = !1, eu = null, Vu = !1, e !== null && q0(t, e), t = gy(
              t,
              o.children
            ), t.flags |= 4096);
          return t;
        }
      }
      return f ? (Su(t), h = o.fallback, y = t.mode, E = e.child, z = E.sibling, o = hu(
        E,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = E.subtreeFlags & 65011712, z !== null ? h = hu(
        z,
        h
      ) : (h = Uc(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = t, o.return = t, o.sibling = h, t.child = o, kc(null, o), o = t.child, h = e.child.memoizedState, h === null ? h = of(a) : (y = h.cachePool, y !== null ? (E = wl._currentValue, y = y.parent !== E ? { parent: E, pool: E } : y) : y = km(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = Vd(
        e,
        i,
        a
      ), t.memoizedState = QS, kc(
        e.child,
        o
      )) : (p !== null && (a & 62914560) === a && a & e.lanes && hf(t), ma(t), a = e.child, e = a.sibling, a = hu(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function gy(e, t) {
      return t = ks(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function ks(e, t) {
      return e = U(22, e, null, t), e.lanes = 0, e;
    }
    function Jd(e, t, a) {
      return Gr(t, e.child, null, a), e = gy(
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
      if ((i = (h & $p) !== 0) ? (h = h & im | $p, t.flags |= 128) : h &= im, xe(Ml, h, t), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !Gb[h])
        if (Gb[h] = !0, o == null)
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
            if (!qt(
              d[h],
              h
            ))
              break e;
        } else if (h = _e(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!qt(y.value, p)) break e;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (ql(e, t, d, a), it ? (qi(), d = Np) : d = 0, !i && e !== null && e.flags & 128)
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
            e = a.alternate, e !== null && xc(e) === null && (o = a), a = a.sibling;
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
            if (e = o.alternate, e !== null && xc(e) === null) {
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
    function Ln(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), cn = -1, es |= t.lanes, !(a & t.childLanes))
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
        for (e = t.child, a = hu(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = hu(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function $d(e, t) {
      return e.lanes & t ? !0 : (e = e.dependencies, !!(e !== null && Jo(e)));
    }
    function K0(e, t, a) {
      switch (t.tag) {
        case 3:
          jt(
            t,
            t.stateNode.containerInfo
          ), pn(
            t,
            wl,
            e.memoizedState.cache
          ), xi();
          break;
        case 27:
        case 5:
          te(t);
          break;
        case 4:
          jt(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          pn(
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
            return t.flags |= 128, Xn(t), null;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (ma(t), t.flags |= 128, null) : a & t.child.childLanes ? Zd(
              e,
              t,
              a
            ) : (ma(t), e = Ln(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          ma(t);
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
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), xe(
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
          pn(
            t,
            wl,
            e.memoizedState.cache
          );
      }
      return Ln(e, t, a);
    }
    function Ws(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = Cc(
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
          e: if (i = t.pendingProps, e = Ja(t.elementType), t.type = e, typeof e == "function")
            Xm(e) ? (i = Ou(
              e,
              i
            ), t.tag = 1, t.type = e = Yi(e), t = Wc(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, cf(t, e), t.type = e = Yi(e), t = my(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Uf) {
                t.tag = 11, t.type = e = Sd(e), t = Z0(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === Ar) {
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
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === na && (t = " Did you wrap a component in React.lazy() more than once?"), a = Ze(e) || e, Error(
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
          return i = t.type, o = Ou(
            i,
            t.pendingProps
          ), Wc(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (jt(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, pu(e, t), vu(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, pn(t, wl, i), i !== f.cache && ei(
              t,
              [wl],
              a,
              !0
            ), Wo(), i = d.element, f.isDehydrated)
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
                o = sa(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), zs(o), t = py(
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
                for (It = tn(e.firstChild), za = t, it = !0, Jf = null, hc = !1, eu = null, Vu = !0, a = mb(
                  t,
                  null,
                  i,
                  a
                ), t.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
              }
            else {
              if (xi(), i === o) {
                t = Ln(
                  e,
                  t,
                  a
                );
                break e;
              }
              ql(
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
          return $s(e, t), e === null ? (a = Py(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = a : it || (a = t.type, e = t.pendingProps, i = Qt(
            ln.current
          ), i = rr(
            i
          ).createElement(a), i[Wt] = t, i[Oa] = e, kt(i, a, e), he(i), t.stateNode = i) : t.memoizedState = Py(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return te(t), e === null && it && (i = Qt(ln.current), o = V(), i = t.stateNode = pi(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), hc || (o = Ua(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (Hc(t, 0).serverProps = o)), za = t, Vu = !0, o = It, ic(t.type) ? (r1 = o, It = tn(
            i.firstChild
          )) : It = o), ql(
            e,
            t,
            t.pendingProps.children,
            a
          ), $s(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && it && (f = V(), i = ys(
            t.type,
            f.ancestorInfo
          ), o = It, (d = !o) || (d = Ag(
            o,
            t.type,
            t.pendingProps,
            Vu
          ), d !== null ? (t.stateNode = d, hc || (f = Ua(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (Hc(t, 0).serverProps = f)), za = t, It = tn(
            d.firstChild
          ), Vu = !1, f = !0) : f = !1, d = !f), d && (i && la(t, o), yn(t))), te(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, Tf(o, f) ? i = null : d !== null && Tf(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = ey(
            e,
            t,
            Bs,
            null,
            null,
            a
          ), d0._currentValue = o), $s(e, t), ql(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && it && (a = t.pendingProps, e = V(), i = e.ancestorInfo.current, a = i != null ? ps(
            a,
            i.tag,
            e.ancestorInfo.implicitRootScope
          ) : !0, e = It, (i = !e) || (i = Og(
            e,
            t.pendingProps,
            Vu
          ), i !== null ? (t.stateNode = i, za = t, It = null, i = !0) : i = !1, i = !i), i && (a && la(t, e), yn(t))), null;
        case 13:
          return Zd(e, t, a);
        case 4:
          return jt(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = Gr(
            t,
            null,
            i,
            a
          ) : ql(
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
          return ql(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return ql(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, ql(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || wb || (wb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), pn(t, i, f), ql(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), wi(t), o = vt(o), i = MS(
            i,
            o,
            void 0
          ), t.flags |= 1, ql(
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
          return wi(t), i = vt(wl), e === null ? (o = ai(), o === null && (o = Xt, f = Od(), o.pooledCache = f, Bc(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, nt(t), pn(t, wl, o)) : (e.lanes & a && (pu(e, t), vu(t, null, null, a), Wo()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), pn(t, wl, i)) : (i = f.cache, pn(t, wl, i), i !== o.cache && ei(
            t,
            [wl],
            a,
            !0
          ))), ql(
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
    function zu(e) {
      e.flags |= 4;
    }
    function kd(e, t, a, i, o) {
      if ((t = (e.mode & GE) !== He) && (t = !1), t) {
        if (e.flags |= 16777216, (o & 335544128) === o)
          if (e.stateNode.complete) e.flags |= 8192;
          else if (qy()) e.flags |= 8192;
          else
            throw xr = fv, US;
      } else e.flags &= -16777217;
    }
    function $0(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & ku) !== Wr)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !at(t))
        if (qy()) e.flags |= 8192;
        else
          throw xr = fv, US;
    }
    function ff(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Co() : 536870912, e.lanes |= t, Vr |= t);
    }
    function sf(e, t) {
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
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), jn(wl, t), _(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Nc(t) ? (Gi(), zu(t)) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Os())), Mt(t), null;
        case 26:
          var o = t.type, f = t.memoizedState;
          return e === null ? (zu(t), f !== null ? (Mt(t), $0(
            t,
            f
          )) : (Mt(t), kd(
            t,
            o,
            null,
            i,
            a
          ))) : f ? f !== e.memoizedState ? (zu(t), Mt(t), $0(
            t,
            f
          )) : (Mt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && zu(t), Mt(t), kd(
            t,
            o,
            e,
            i,
            a
          )), null;
        case 27:
          if (pe(t), a = Qt(ln.current), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && zu(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Mt(t), null;
            }
            e = V(), Nc(t) ? Zm(t) : (e = pi(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, zu(t));
          }
          return Mt(t), null;
        case 5:
          if (pe(t), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && zu(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Mt(t), null;
            }
            var d = V();
            if (Nc(t))
              Zm(t);
            else {
              switch (f = Qt(ln.current), ys(o, d.ancestorInfo), d = d.context, f = rr(f), d) {
                case vm:
                  f = f.createElementNS(
                    Ke,
                    o
                  );
                  break;
                case Yv:
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
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || an.call(s2, o) || (s2[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[Wt] = t, f[Oa] = i;
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
              i && zu(t);
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
            e.memoizedProps !== i && zu(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Qt(ln.current), a = V(), Nc(t)) {
              if (e = t.stateNode, a = t.memoizedProps, o = !hc, i = null, f = za, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = _g(
                      e,
                      a,
                      i
                    ), o !== null && (Hc(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = _g(
                      e,
                      a,
                      i
                    ), o !== null && (Hc(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Wt] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || Ky(e.nodeValue, a)), e || yn(t, !0);
            } else
              o = a.ancestorInfo.current, o != null && ps(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = rr(e).createTextNode(
                i
              ), e[Wt] = t, t.stateNode = e;
          }
          return Mt(t), null;
        case 31:
          if (a = t.memoizedState, e === null || e.memoizedState !== null) {
            if (i = Nc(t), a !== null) {
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
                Gi(), xi(), !(t.flags & 128) && (a = t.memoizedState = null), t.flags |= 4, Mt(t), (t.mode & We) !== He && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              e = !1;
            } else
              a = Os(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
            if (!e)
              return t.flags & 256 ? (Yl(t), t) : (Yl(t), null);
            if (t.flags & 128)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return Mt(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = i, f = Nc(t), o !== null && o.dehydrated !== null) {
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
                Gi(), xi(), !(t.flags & 128) && (o = t.memoizedState = null), t.flags |= 4, Mt(t), (t.mode & We) !== He && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = Os(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (Yl(t), t) : (Yl(t), null);
          }
          return Yl(t), t.flags & 128 ? (t.lanes = a, (t.mode & We) !== He && jc(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), ff(t, t.updateQueue), Mt(t), (t.mode & We) !== He && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return _(t), e === null && nc(
            t.stateNode.containerInfo
          ), Mt(t), null;
        case 10:
          return jn(t.type, t), Mt(t), null;
        case 19:
          if (ye(Ml, t), i = t.memoizedState, i === null) return Mt(t), null;
          if (o = (t.flags & 128) !== 0, f = i.rendering, f === null)
            if (o) sf(i, !1);
            else {
              if (sl !== zo || e !== null && e.flags & 128)
                for (e = t.child; e !== null; ) {
                  if (f = xc(e), f !== null) {
                    for (t.flags |= 128, sf(i, !1), e = f.updateQueue, t.updateQueue = e, ff(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Qm(a, e), a = a.sibling;
                    return xe(
                      Ml,
                      Ml.current & im | $p,
                      t
                    ), it && Yn(t, i.treeForkCount), t.child;
                  }
                  e = e.sibling;
                }
              i.tail !== null && Gl() > Tv && (t.flags |= 128, o = !0, sf(i, !1), t.lanes = 4194304);
            }
          else {
            if (!o)
              if (e = xc(f), e !== null) {
                if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, ff(t, e), sf(i, !0), i.tail === null && i.tailMode === "hidden" && !f.alternate && !it)
                  return Mt(t), null;
              } else
                2 * Gl() - i.renderingStartTime > Tv && a !== 536870912 && (t.flags |= 128, o = !0, sf(i, !1), t.lanes = 4194304);
            i.isBackwards ? (f.sibling = t.child, t.child = f) : (e = i.last, e !== null ? e.sibling = f : t.child = f, i.last = f);
          }
          return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = Gl(), e.sibling = null, a = Ml.current, a = o ? a & im | $p : a & im, xe(Ml, a, t), it && Yn(t, i.treeForkCount), e) : (Mt(t), null);
        case 22:
        case 23:
          return Yl(t), wn(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? a & 536870912 && !(t.flags & 128) && (Mt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Mt(t), a = t.updateQueue, a !== null && ff(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && ye(jr, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), jn(wl, t), Mt(t), null;
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
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & We) !== He && jc(t), t) : null;
        case 3:
          return jn(wl, t), _(t), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return pe(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (Yl(t), t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            xi();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & We) !== He && jc(t), t) : null;
        case 13:
          if (Yl(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            xi();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & We) !== He && jc(t), t) : null;
        case 19:
          return ye(Ml, t), null;
        case 4:
          return _(t), null;
        case 10:
          return jn(t.type, t), null;
        case 22:
        case 23:
          return Yl(t), wn(t), e !== null && ye(jr, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & We) !== He && jc(t), t) : null;
        case 24:
          return jn(wl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Ey(e, t) {
      switch (Td(t), t.tag) {
        case 3:
          jn(wl, t), _(t);
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
          t.memoizedState !== null && Yl(t);
          break;
        case 13:
          Yl(t);
          break;
        case 19:
          ye(Ml, t);
          break;
        case 10:
          jn(t.type, t);
          break;
        case 22:
        case 23:
          Yl(t), wn(t), e !== null && ye(jr, t);
          break;
        case 24:
          jn(wl, t);
      }
    }
    function Du(e) {
      return (e.mode & We) !== He;
    }
    function W0(e, t) {
      Du(e) ? (il(), ri(t, e), da()) : ri(t, e);
    }
    function Wd(e, t, a) {
      Du(e) ? (il(), Ii(
        a,
        e,
        t
      ), da()) : Ii(
        a,
        e,
        t
      );
    }
    function ri(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && (i = void 0, (e & on) !== rv && (ym = !0), i = ce(
              t,
              ZE,
              a
            ), (e & on) !== rv && (ym = !1), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = a.tag & lu ? "useLayoutEffect" : a.tag & on ? "useInsertionEffect" : "useEffect";
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
    function Ii(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & on) !== rv && (ym = !0), o = t, ce(
                o,
                JE,
                o,
                a,
                h
              ), (e & on) !== rv && (ym = !1));
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (y) {
        Je(t, t.return, y);
      }
    }
    function Fs(e, t) {
      Du(e) ? (il(), ri(t, e), da()) : ri(t, e);
    }
    function Fd(e, t, a) {
      Du(e) ? (il(), Ii(
        a,
        e,
        t
      ), da()) : Ii(
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
            Fo,
            t,
            a
          );
        } catch (i) {
          Je(e, e.return, i);
        }
      }
    }
    function Is(e, t, a) {
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
        var o = Ou(
          e.type,
          a
        ), f = ce(
          e,
          Is,
          t,
          o,
          i
        );
        a = Xb, f !== void 0 || a.has(e.type) || (a.add(e.type), ce(e, function() {
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
      a.props = Ou(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, Du(e) ? (il(), ce(
        e,
        ib,
        e,
        t,
        a
      ), da()) : ce(
        e,
        ib,
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
          if (Du(e))
            try {
              il(), e.refCleanup = t(a);
            } finally {
              da();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            se(e)
          ), t.current = a;
      }
    }
    function Fc(e, t) {
      try {
        ce(e, I0, e);
      } catch (a) {
        Je(e, t, a);
      }
    }
    function En(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (Du(e))
              try {
                il(), ce(e, i);
              } finally {
                da(e);
              }
            else ce(e, i);
          } catch (o) {
            Je(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (Du(e))
              try {
                il(), ce(e, a, null);
              } finally {
                da(e);
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
    function Pi(e) {
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
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ic(e.type) || e.tag === 4;
    }
    function eh(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Oy(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && ic(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function rf(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (mg(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t)) : (mg(a), t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = hn));
      else if (i !== 4 && (i === 27 && ic(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (rf(e, t, a), e = e.sibling; e !== null; )
          rf(e, t, a), e = e.sibling;
    }
    function Ps(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && ic(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (Ps(e, t, a), e = e.sibling; e !== null; )
          Ps(e, t, a), e = e.sibling;
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
          t = t.stateNode, a = eh(e), Ps(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (bh(a), t.flags &= -33), t = eh(e), Ps(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = eh(e), rf(
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
          Bu,
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
    function Iv(e, t) {
      if (e = e.containerInfo, o1 = Gv, e = yd(e), Bm(e)) {
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
                for (var q; R !== a || o !== 0 && R.nodeType !== 3 || (h = d + o), R !== f || i !== 0 && R.nodeType !== 3 || (y = d + i), R.nodeType === 3 && (d += R.nodeValue.length), (q = R.firstChild) !== null; )
                  E = R, R = q;
                for (; ; ) {
                  if (R === e) break t;
                  if (E === a && ++p === o && (h = d), E === f && ++z === i && (y = d), (q = R.nextSibling) !== null) break;
                  R = E, E = R.parentNode;
                }
                R = q;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (f1 = {
        focusedElem: e,
        selectionRange: a
      }, Gv = !1, ca = t; ca !== null; )
        if (t = ca, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t, ca = e;
        else
          for (; ca !== null; ) {
            switch (e = t = ca, a = e.alternate, o = e.flags, e.tag) {
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
                    Of(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Of(e);
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
              e.return = t.return, ca = e;
              break;
            }
            ca = t.return;
          }
    }
    function th(e, t, a) {
      var i = Kt(), o = gn(), f = Va(), d = vn(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Fa(e, a), h & 4 && W0(a, lu | Ku);
          break;
        case 1:
          if (Fa(e, a), h & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || sm || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                se(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                se(a) || "instance"
              )), Du(a) ? (il(), ce(
                a,
                CS,
                a,
                e
              ), da()) : ce(
                a,
                CS,
                a,
                e
              );
            else {
              var y = Ou(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || sm || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                se(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                se(a) || "instance"
              )), Du(a) ? (il(), ce(
                a,
                ab,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), da()) : ce(
                a,
                ab,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && Ty(a), h & 512 && Fc(a, a.return);
          break;
        case 3:
          if (t = yu(), Fa(e, a), h & 64 && (h = a.updateQueue, h !== null)) {
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
                Fo,
                h,
                y
              );
            } catch (z) {
              Je(a, a.return, z);
            }
          }
          e.effectDuration += Ko(t);
          break;
        case 27:
          t === null && h & 4 && Dy(a);
        case 26:
        case 5:
          if (Fa(e, a), t === null) {
            if (h & 4) Pi(a);
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
          h & 512 && Fc(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = yu(), Fa(e, a), e = a.stateNode, e.effectDuration += ra(h);
            try {
              ce(
                a,
                Ay,
                a,
                t,
                Kf,
                e.effectDuration
              );
            } catch (z) {
              Je(a, a.return, z);
            }
          } else Fa(e, a);
          break;
        case 31:
          Fa(e, a), h & 4 && My(e, a);
          break;
        case 13:
          Fa(e, a), h & 4 && Cy(e, a), h & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (h = hi.bind(
            null,
            a
          ), zg(e, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || Oo, !h) {
            t = t !== null && t.memoizedState !== null || Vl, y = Oo;
            var p = Vl;
            Oo = h, (Vl = t) && !p ? (Vn(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & We) !== He && 0 <= Te && 0 <= Me && 0.05 < Me - Te && pd(
              a,
              Te,
              Me
            )) : Fa(e, a), Oo = y, Vl = p;
          }
          break;
        case 30:
          break;
        default:
          Fa(e, a);
      }
      (a.mode & We) !== He && 0 <= Te && 0 <= Me && ((pl || 0.05 < fl) && Bn(
        a,
        Te,
        Me,
        fl,
        nl
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < Me - Te && (_y(
        a.return.alternate,
        a.return
      ) || mn(
        a,
        Te,
        Me,
        "Mount"
      ))), Nl(i), La(o), nl = f, pl = d;
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
          _l.onCommitFiberUnmount(so, a);
        } catch (p) {
          ju || (ju = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var i = Kt(), o = gn(), f = Va(), d = vn();
      switch (a.tag) {
        case 26:
          Vl || En(a, t), Vt(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (e = a.stateNode, e.parentNode.removeChild(e));
          break;
        case 27:
          Vl || En(a, t);
          var h = Zl, y = Dn;
          ic(a.type) && (Zl = a.stateNode, Dn = !1), Vt(
            e,
            t,
            a
          ), ce(
            a,
            gi,
            a.stateNode
          ), Zl = h, Dn = y;
          break;
        case 5:
          Vl || En(a, t);
        case 6:
          if (h = Zl, y = Dn, Zl = null, Vt(
            e,
            t,
            a
          ), Zl = h, Dn = y, Zl !== null)
            if (Dn)
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
          Zl !== null && (Dn ? (e = Zl, lo(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), io(e)) : lo(Zl, a.stateNode));
          break;
        case 4:
          h = Zl, y = Dn, Zl = a.stateNode.containerInfo, Dn = !0, Vt(
            e,
            t,
            a
          ), Zl = h, Dn = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Ii(
            on,
            a,
            t
          ), Vl || Wd(
            a,
            t,
            lu
          ), Vt(
            e,
            t,
            a
          );
          break;
        case 1:
          Vl || (En(a, t), h = a.stateNode, typeof h.componentWillUnmount == "function" && Id(
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
      (a.mode & We) !== He && 0 <= Te && 0 <= Me && (pl || 0.05 < fl) && Bn(
        a,
        Te,
        Me,
        fl,
        nl
      ), Nl(i), La(o), nl = f, pl = d;
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
          return t === null && (t = e.stateNode = new Qb()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Qb()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function ec(e, t) {
      var a = eg(e);
      t.forEach(function(i) {
        if (!a.has(i)) {
          if (a.add(i), qu)
            if (rm !== null && dm !== null)
              gf(dm, rm);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = eo.bind(null, e, i);
          i.then(o, o);
        }
      });
    }
    function ga(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = Kt(), y = f;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (ic(y.type)) {
                  Zl = y.stateNode, Dn = !1;
                  break e;
                }
                break;
              case 5:
                Zl = y.stateNode, Dn = !1;
                break e;
              case 3:
              case 4:
                Zl = y.stateNode.containerInfo, Dn = !0;
                break e;
            }
            y = y.return;
          }
          if (Zl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          Ry(o, f, d), Zl = null, Dn = !1, (d.mode & We) !== He && 0 <= Te && 0 <= Me && 0.05 < Me - Te && mn(
            d,
            Te,
            Me,
            "Unmount"
          ), Nl(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; )
          er(t, e), t = t.sibling;
    }
    function er(e, t) {
      var a = Kt(), i = gn(), o = Va(), f = vn(), d = e.alternate, h = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ga(t, e), va(e), h & 4 && (Ii(
            on | Ku,
            e,
            e.return
          ), ri(on | Ku, e), Wd(
            e,
            e.return,
            lu | Ku
          ));
          break;
        case 1:
          if (ga(t, e), va(e), h & 512 && (Vl || d === null || En(d, d.return)), h & 64 && Oo && (h = e.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = Ai, ga(t, e), va(e), h & 512 && (Vl || d === null || En(d, d.return)), h & 4) {
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
                        )[0], (!p || p[Gf] || p[Wt] || p.namespaceURI === Ke || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), kt(p, h, d), p[Wt] = e, he(p), h = p;
                        break e;
                      case "link":
                        var z = _f(
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
                        if (z = _f(
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
          ga(t, e), va(e), h & 512 && (Vl || d === null || En(d, d.return)), d !== null && h & 4 && Pd(
            e,
            e.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (ga(t, e), va(e), h & 512 && (Vl || d === null || En(d, d.return)), e.flags & 32) {
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
          )), h & 1024 && (LS = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (ga(t, e), va(e), h & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            h = e.memoizedProps, d = d !== null ? d.memoizedProps : h, y = e.stateNode;
            try {
              ce(
                e,
                Pv,
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
          if (y = yu(), jv = null, p = Ai, Ai = Th(t.containerInfo), ga(t, e), Ai = p, va(e), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              ce(
                e,
                Wy,
                t.containerInfo
              );
            } catch (oe) {
              Je(e, e.return, oe);
            }
          LS && (LS = !1, tg(e)), t.effectDuration += Ko(
            y
          );
          break;
        case 4:
          h = Ai, Ai = Th(
            e.stateNode.containerInfo
          ), ga(t, e), va(e), Ai = h;
          break;
        case 12:
          h = yu(), ga(t, e), va(e), e.stateNode.effectDuration += ra(h);
          break;
        case 31:
          ga(t, e), va(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, ec(e, h)));
          break;
        case 13:
          ga(t, e), va(e), e.child.flags & 8192 && e.memoizedState !== null != (d !== null && d.memoizedState !== null) && (Ev = Gl()), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, ec(e, h)));
          break;
        case 22:
          y = e.memoizedState !== null;
          var E = d !== null && d.memoizedState !== null, q = Oo, ne = Vl;
          if (Oo = q || y, Vl = ne || E, ga(t, e), Vl = ne, Oo = q, E && !y && !q && !ne && (e.mode & We) !== He && 0 <= Te && 0 <= Me && 0.05 < Me - Te && pd(
            e,
            Te,
            Me
          ), va(e), h & 8192)
            e: for (t = e.stateNode, t._visibility = y ? t._visibility & ~Hp : t._visibility | Hp, !y || d === null || E || Oo || Vl || (tc(e), (e.mode & We) !== He && 0 <= Te && 0 <= Me && 0.05 < Me - Te && mn(
              e,
              Te,
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
          h & 4 && (h = e.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, ec(e, d))));
          break;
        case 19:
          ga(t, e), va(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, ec(e, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          ga(t, e), va(e);
      }
      (e.mode & We) !== He && 0 <= Te && 0 <= Me && ((pl || 0.05 < fl) && Bn(
        e,
        Te,
        Me,
        fl,
        nl
      ), e.alternate === null && e.return !== null && e.return.alternate !== null && 0.05 < Me - Te && (_y(
        e.return.alternate,
        e.return
      ) || mn(
        e,
        Te,
        Me,
        "Mount"
      ))), Nl(a), La(i), nl = o, pl = f;
    }
    function va(e) {
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
    function Fa(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          th(e, t.alternate, t), t = t.sibling;
    }
    function lh(e) {
      var t = Kt(), a = gn(), i = Va(), o = vn();
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Wd(
            e,
            e.return,
            lu
          ), tc(e);
          break;
        case 1:
          En(e, e.return);
          var f = e.stateNode;
          typeof f.componentWillUnmount == "function" && Id(
            e,
            e.return,
            f
          ), tc(e);
          break;
        case 27:
          ce(
            e,
            gi,
            e.stateNode
          );
        case 26:
        case 5:
          En(e, e.return), tc(e);
          break;
        case 22:
          e.memoizedState === null && tc(e);
          break;
        case 30:
          tc(e);
          break;
        default:
          tc(e);
      }
      (e.mode & We) !== He && 0 <= Te && 0 <= Me && (pl || 0.05 < fl) && Bn(
        e,
        Te,
        Me,
        fl,
        nl
      ), Nl(t), La(a), nl = i, pl = o;
    }
    function tc(e) {
      for (e = e.child; e !== null; )
        lh(e), e = e.sibling;
    }
    function Uy(e, t, a, i) {
      var o = Kt(), f = gn(), d = Va(), h = vn(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Vn(
            e,
            a,
            i
          ), W0(a, lu);
          break;
        case 1:
          if (Vn(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && ce(
            a,
            CS,
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
          i && y & 64 && Ty(a), Fc(a, a.return);
          break;
        case 27:
          Dy(a);
        case 26:
        case 5:
          Vn(
            e,
            a,
            i
          ), i && t === null && y & 4 && Pi(a), Fc(a, a.return);
          break;
        case 12:
          if (i && y & 4) {
            y = yu(), Vn(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += ra(y);
            try {
              ce(
                a,
                Ay,
                a,
                t,
                Kf,
                i.effectDuration
              );
            } catch (p) {
              Je(a, a.return, p);
            }
          } else
            Vn(
              e,
              a,
              i
            );
          break;
        case 31:
          Vn(
            e,
            a,
            i
          ), i && y & 4 && My(e, a);
          break;
        case 13:
          Vn(
            e,
            a,
            i
          ), i && y & 4 && Cy(e, a);
          break;
        case 22:
          a.memoizedState === null && Vn(
            e,
            a,
            i
          ), Fc(a, a.return);
          break;
        case 30:
          break;
        default:
          Vn(
            e,
            a,
            i
          );
      }
      (a.mode & We) !== He && 0 <= Te && 0 <= Me && (pl || 0.05 < fl) && Bn(
        a,
        Te,
        Me,
        fl,
        nl
      ), Nl(o), La(f), nl = d, pl = h;
    }
    function Vn(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        Uy(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function tr(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && Bc(e), a != null && _s(a));
    }
    function lr(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Bc(t), e != null && _s(e));
    }
    function Ia(e, t, a, i, o) {
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
      var f = Kt(), d = gn(), h = Va(), y = vn(), p = Lf, z = t.flags;
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
          ), Ia(
            e,
            t,
            a,
            i,
            o
          ), z & 2048 && Fs(t, fn | Ku);
          break;
        case 1:
          (t.mode & We) !== He && 0 < t.actualStartTime && (t.flags & 128 ? jm(
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
          )), Ia(
            e,
            t,
            a,
            i,
            o
          );
          break;
        case 3:
          var R = yu(), E = Fl;
          Fl = t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) === 0, Ia(
            e,
            t,
            a,
            i,
            o
          ), Fl = E, z & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), i = t.memoizedState.cache, i !== a && (Bc(i), a != null && _s(a))), e.passiveEffectDuration += Ko(
            R
          );
          break;
        case 12:
          if (z & 2048) {
            z = yu(), Ia(
              e,
              t,
              a,
              i,
              o
            ), e = t.stateNode, e.passiveEffectDuration += ra(z);
            try {
              ce(
                t,
                P0,
                t,
                t.alternate,
                Kf,
                e.passiveEffectDuration
              );
            } catch (q) {
              Je(t, t.return, q);
            }
          } else
            Ia(
              e,
              t,
              a,
              i,
              o
            );
          break;
        case 31:
          z = Fl, R = t.alternate !== null ? t.alternate.memoizedState : null, E = t.memoizedState, R !== null && E === null ? (E = t.deletions, E !== null && 0 < E.length && E[0].tag === 18 ? (Fl = !1, R = R.hydrationErrors, R !== null && jm(
            t,
            t.actualStartTime,
            o,
            R
          )) : Fl = !0) : Fl = !1, Ia(
            e,
            t,
            a,
            i,
            o
          ), Fl = z;
          break;
        case 13:
          z = Fl, R = t.alternate !== null ? t.alternate.memoizedState : null, E = t.memoizedState, R === null || R.dehydrated === null || E !== null && E.dehydrated !== null ? Fl = !1 : (E = t.deletions, E !== null && 0 < E.length && E[0].tag === 18 ? (Fl = !1, R = R.hydrationErrors, R !== null && jm(
            t,
            t.actualStartTime,
            o,
            R
          )) : Fl = !0), Ia(
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
          E = t.stateNode, R = t.alternate, t.memoizedState !== null ? E._visibility & mo ? Ia(
            e,
            t,
            a,
            i,
            o
          ) : Ic(
            e,
            t,
            a,
            i,
            o
          ) : E._visibility & mo ? Ia(
            e,
            t,
            a,
            i,
            o
          ) : (E._visibility |= mo, lc(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child),
            o
          ), (t.mode & We) === He || Fl || (e = t.actualStartTime, 0 <= e && 0.05 < o - e && pd(t, e, o), 0 <= Te && 0 <= Me && 0.05 < Me - Te && pd(
            t,
            Te,
            Me
          ))), z & 2048 && tr(
            R,
            t
          );
          break;
        case 24:
          Ia(
            e,
            t,
            a,
            i,
            o
          ), z & 2048 && lr(t.alternate, t);
          break;
        default:
          Ia(
            e,
            t,
            a,
            i,
            o
          );
      }
      (t.mode & We) !== He && ((e = !Fl && t.alternate === null && t.return !== null && t.return.alternate !== null) && (a = t.actualStartTime, 0 <= a && 0.05 < o - a && mn(
        t,
        a,
        o,
        "Mount"
      )), 0 <= Te && 0 <= Me && ((pl || 0.05 < fl) && Bn(
        t,
        Te,
        Me,
        fl,
        nl
      ), e && 0.05 < Me - Te && mn(
        t,
        Te,
        Me,
        "Mount"
      ))), Nl(f), La(d), nl = h, pl = y, Lf = p;
    }
    function lc(e, t, a, i, o, f) {
      for (o = o && ((t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)), t = t.child; t !== null; ) {
        var d = t.sibling;
        ar(
          e,
          t,
          a,
          i,
          o,
          d !== null ? d.actualStartTime : f
        ), t = d;
      }
    }
    function ar(e, t, a, i, o, f) {
      var d = Kt(), h = gn(), y = Va(), p = vn(), z = Lf;
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
          lc(
            e,
            t,
            a,
            i,
            o,
            f
          ), Fs(t, fn);
          break;
        case 23:
          break;
        case 22:
          var E = t.stateNode;
          t.memoizedState !== null ? E._visibility & mo ? lc(
            e,
            t,
            a,
            i,
            o,
            f
          ) : Ic(
            e,
            t,
            a,
            i,
            f
          ) : (E._visibility |= mo, lc(
            e,
            t,
            a,
            i,
            o,
            f
          )), o && R & 2048 && tr(
            t.alternate,
            t
          );
          break;
        case 24:
          lc(
            e,
            t,
            a,
            i,
            o,
            f
          ), o && R & 2048 && lr(t.alternate, t);
          break;
        default:
          lc(
            e,
            t,
            a,
            i,
            o,
            f
          );
      }
      (t.mode & We) !== He && 0 <= Te && 0 <= Me && (pl || 0.05 < fl) && Bn(
        t,
        Te,
        Me,
        fl,
        nl
      ), Nl(d), La(h), nl = y, pl = p, Lf = z;
    }
    function Ic(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (var f = t.child; f !== null; ) {
          t = f.sibling;
          var d = e, h = a, y = i, p = t !== null ? t.actualStartTime : o, z = Lf;
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
              Ic(
                d,
                f,
                h,
                y,
                p
              ), R & 2048 && tr(f.alternate, f);
              break;
            case 24:
              Ic(
                d,
                f,
                h,
                y,
                p
              ), R & 2048 && lr(f.alternate, f);
              break;
            default:
              Ic(
                d,
                f,
                h,
                y,
                p
              );
          }
          Lf = z, f = t;
        }
    }
    function Pc(e, t, a) {
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
          Pc(
            e,
            t,
            a
          ), e.flags & Ip && e.memoizedState !== null && lp(
            a,
            Ai,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          Pc(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          var i = Ai;
          Ai = Th(
            e.stateNode.containerInfo
          ), Pc(
            e,
            t,
            a
          ), Ai = i;
          break;
        case 22:
          e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = Ip, Ip = 16777216, Pc(
            e,
            t,
            a
          ), Ip = i) : Pc(
            e,
            t,
            a
          ));
          break;
        default:
          Pc(
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
    function Pa(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = Kt();
            ca = i, _u(
              i,
              e
            ), (i.mode & We) !== He && 0 <= Te && 0 <= Me && 0.05 < Me - Te && mn(
              i,
              Te,
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
      var t = Kt(), a = gn(), i = Va(), o = vn();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Pa(e), e.flags & 2048 && Fd(
            e,
            e.return,
            fn | Ku
          );
          break;
        case 3:
          var f = yu();
          Pa(e), e.stateNode.passiveEffectDuration += Ko(f);
          break;
        case 12:
          f = yu(), Pa(e), e.stateNode.passiveEffectDuration += ra(f);
          break;
        case 22:
          f = e.stateNode, e.memoizedState !== null && f._visibility & mo && (e.return === null || e.return.tag !== 13) ? (f._visibility &= ~mo, uh(e), (e.mode & We) !== He && 0 <= Te && 0 <= Me && 0.05 < Me - Te && mn(
            e,
            Te,
            Me,
            "Disconnect"
          )) : Pa(e);
          break;
        default:
          Pa(e);
      }
      (e.mode & We) !== He && 0 <= Te && 0 <= Me && (pl || 0.05 < fl) && Bn(
        e,
        Te,
        Me,
        fl,
        nl
      ), Nl(t), La(a), pl = o, nl = i;
    }
    function uh(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = Kt();
            ca = i, _u(
              i,
              e
            ), (i.mode & We) !== He && 0 <= Te && 0 <= Me && 0.05 < Me - Te && mn(
              i,
              Te,
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
      var t = Kt(), a = gn(), i = Va(), o = vn();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Fd(
            e,
            e.return,
            fn
          ), uh(e);
          break;
        case 22:
          var f = e.stateNode;
          f._visibility & mo && (f._visibility &= ~mo, uh(e));
          break;
        default:
          uh(e);
      }
      (e.mode & We) !== He && 0 <= Te && 0 <= Me && (pl || 0.05 < fl) && Bn(
        e,
        Te,
        Me,
        fl,
        nl
      ), Nl(t), La(a), pl = o, nl = i;
    }
    function _u(e, t) {
      for (; ca !== null; ) {
        var a = ca, i = a, o = t, f = Kt(), d = gn(), h = Va(), y = vn();
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Fd(
              i,
              o,
              fn
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool, o != null && Bc(o));
            break;
          case 24:
            _s(i.memoizedState.cache);
        }
        if ((i.mode & We) !== He && 0 <= Te && 0 <= Me && (pl || 0.05 < fl) && Bn(
          i,
          Te,
          Me,
          fl,
          nl
        ), Nl(f), La(d), pl = y, nl = h, i = a.child, i !== null) i.return = a, ca = i;
        else
          e: for (a = e; ca !== null; ) {
            if (i = ca, f = i.sibling, d = i.return, ml(i), i === a) {
              ca = null;
              break e;
            }
            if (f !== null) {
              f.return = d, ca = f;
              break e;
            }
            ca = d;
          }
      }
    }
    function Yy() {
      FE.forEach(function(e) {
        return e();
      });
    }
    function jy() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || G.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function aa(e) {
      if ((ht & Il) !== oa && Ie !== 0)
        return Ie & -Ie;
      var t = G.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), Jy()) : Mi();
    }
    function df() {
      if (Rn === 0)
        if (!(Ie & 536870912) || it) {
          var e = Dr;
          Dr <<= 1, !(Dr & 3932160) && (Dr = 262144), Rn = e;
        } else Rn = 536870912;
      return e = tu.current, e !== null && (e.flags |= 32), Rn;
    }
    function Ne(e, t, a) {
      if (ym && console.error("useInsertionEffect must not schedule updates."), e1 && (zv = !0), (e === Xt && (Nt === Qr || Nt === Lr) || e.cancelPendingCommit !== null) && (Ru(e, 0), Tn(
        e,
        Ie,
        Rn,
        !1
      )), Mn(e, a), (ht & Il) !== oa && e === Xt) {
        if (Yu)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = tt && se(tt) || "Unknown", a2.has(e) || (a2.add(e), t = se(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              l2 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), l2 = !0);
          }
      } else
        qu && Al(e, t, a), cr(t), e === Xt && ((ht & Il) === oa && (ts |= a), sl === If && Tn(
          e,
          Ie,
          Rn,
          !1
        )), Ma(e);
    }
    function lg(e, t, a) {
      if ((ht & (Il | au)) !== oa)
        throw Error("Should not already be working.");
      if (Ie !== 0 && tt !== null) {
        var i = tt, o = Gl();
        switch (k1) {
          case t0:
          case Qr:
            var f = xp;
            Ft && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Suspended",
                f,
                o,
                Gu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              Gu,
              void 0,
              "primary-light"
            ));
            break;
          case Lr:
            f = xp, Ft && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Action",
                f,
                o,
                Gu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              Gu,
              void 0,
              "primary-light"
            ));
            break;
          default:
            Ft && (i = o - xp, 3 > i || console.timeStamp(
              "Blocked",
              xp,
              o,
              Gu,
              void 0,
              5 > i ? "primary-light" : 10 > i ? "primary" : 100 > i ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || gl(e, t)) ? di(e, t) : yf(e, t, !0);
      var d = a;
      do {
        if (f === zo) {
          hm && !a && Tn(e, t, 0, !1), t = Nt, xp = Xl(), k1 = t;
          break;
        } else {
          if (i = Gl(), o = e.current.alternate, d && !ng(o)) {
            Nn(t), o = ia, f = i, !Ft || f <= o || (El ? El.run(
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
            )), ac(t, i), f = yf(e, t, !1), d = !1;
            continue;
          }
          if (f === Xr) {
            if (d = t, e.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              Nn(t), qm(
                ia,
                i,
                t,
                El
              ), ac(t, i), t = h;
              e: {
                i = e, f = d, d = a0;
                var y = i.current.memoizedState.isDehydrated;
                if (y && (Ru(i, h).flags |= 256), h = yf(
                  i,
                  h,
                  !1
                ), h !== Xr) {
                  if (JS && !y) {
                    i.errorRecoveryDisabledLanes |= f, ts |= f, f = If;
                    break e;
                  }
                  i = sn, sn = d, i !== null && (sn === null ? sn = i : sn.push.apply(
                    sn,
                    i
                  ));
                }
                f = h;
              }
              if (d = !1, f !== Xr) continue;
              i = Gl();
            }
          }
          if (f === e0) {
            Nn(t), qm(
              ia,
              i,
              t,
              El
            ), ac(t, i), Ru(e, 0), Tn(e, t, 0, !0);
            break;
          }
          e: {
            switch (a = e, f) {
              case zo:
              case e0:
                throw Error("Root did not complete. This is a bug in React.");
              case If:
                if ((t & 4194048) !== t) break;
              case gv:
                Nn(t), H0(
                  ia,
                  i,
                  t,
                  El
                ), ac(t, i), o = t, o & 127 ? lv = i : o & 4194048 && (av = i), Tn(
                  a,
                  t,
                  Rn,
                  !Pf
                );
                break e;
              case Xr:
                sn = null;
                break;
              case pv:
              case Lb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (G.actQueue !== null)
              xt(
                a,
                o,
                t,
                sn,
                n0,
                bv,
                Rn,
                ts,
                Vr,
                f,
                null,
                null,
                ia,
                i
              );
            else {
              if ((t & 62914560) === t && (d = Ev + Jb - Gl(), 10 < d)) {
                if (Tn(
                  a,
                  t,
                  Rn,
                  !Pf
                ), vc(a, 0, !0) !== 0) break e;
                Oi = t, a.timeoutHandle = r2(
                  ag.bind(
                    null,
                    a,
                    o,
                    sn,
                    n0,
                    bv,
                    t,
                    Rn,
                    ts,
                    Vr,
                    Pf,
                    f,
                    "Throttled",
                    ia,
                    i
                  ),
                  d
                );
                break e;
              }
              ag(
                a,
                o,
                sn,
                n0,
                bv,
                t,
                Rn,
                ts,
                Vr,
                Pf,
                f,
                null,
                ia,
                i
              );
            }
          }
        }
        break;
      } while (!0);
      Ma(e);
    }
    function ag(e, t, a, i, o, f, d, h, y, p, z, R, E, q) {
      e.timeoutHandle = kr;
      var ne = t.subtreeFlags, oe = null;
      if ((ne & 8192 || (ne & 16785408) === 16785408) && (oe = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: hn
      }, ah(t, f, oe), ne = (f & 62914560) === f ? Ev - Gl() : (f & 4194048) === f ? Zb - Gl() : 0, ne = zh(oe, ne), ne !== null)) {
        Oi = f, e.cancelPendingCommit = ne(
          xt.bind(
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
            q
          )
        ), Tn(
          e,
          f,
          d,
          !p
        );
        return;
      }
      xt(
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
        q
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
              if (!un(f(), o)) return !1;
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
    function Tn(e, t, a, i) {
      t &= ~KS, t &= ~ts, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - kl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && Ho(e, a, t);
    }
    function en() {
      return (ht & (Il | au)) === oa ? (Cu(0), !1) : !0;
    }
    function ih() {
      if (tt !== null) {
        if (Nt === _n)
          var e = tt.return;
        else
          e = tt, Zo(), Qi(e), nm = null, Kp = 0, e = tt;
        for (; e !== null; )
          Ey(e.alternate, e), e = e.return;
        tt = null;
      }
    }
    function ac(e, t) {
      e & 127 && (Hr = t), e & 4194048 && (So = t), e & 62914560 && (K1 = t), e & 2080374784 && ($1 = t);
    }
    function Ru(e, t) {
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
      var a = ia;
      if (ia = Xl(), Ie !== 0 && 0 < a) {
        if (Nn(Ie), sl === pv || sl === If)
          H0(
            a,
            ia,
            t,
            El
          );
        else {
          var i = ia, o = El;
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
        ac(Ie, ia);
      }
      if (a = El, El = null, t & 127) {
        El = Yp, o = 0 <= mc && mc < Hr ? Hr : mc, i = 0 <= Nr && Nr < Hr ? Hr : Nr, f = 0 <= i ? i : 0 <= o ? o : ia, 0 <= lv ? (Nn(2), N0(
          lv,
          f,
          t,
          a
        )) : nv & 127, a = o;
        var h = i, y = jp, p = 0 < tm, z = $f === Bp, R = $f === tv;
        if (o = ia, i = Yp, f = zS, d = DS, Ft) {
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
        mc = -1.1, $f = 0, DS = zS = null, lv = -1.1, tm = Nr, Nr = -1.1, Hr = Xl();
      }
      if (t & 4194048 && (El = qp, o = 0 <= bo && bo < So ? So : bo, a = 0 <= Zu && Zu < So ? So : Zu, i = 0 <= kf && kf < So ? So : kf, f = 0 <= i ? i : 0 <= a ? a : ia, 0 <= av ? (Nn(256), N0(
        av,
        f,
        t,
        El
      )) : nv & 4194048, R = i, h = Br, y = 0 < Wf, p = _S === tv, f = ia, i = qp, d = Z1, z = J1, Ft && (rt = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < R ? R > o && (R = o) : R = o, o > R && h !== null && (E = y ? "secondary-light" : "warning", i ? i.run(
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
      ) : performance.measure(o, a))), Zu = bo = -1.1, _S = 0, av = -1.1, Wf = kf, kf = -1.1, So = Xl()), t & 62914560 && nv & 62914560 && (Nn(4194304), xm(K1, ia)), t & 2080374784 && nv & 2080374784 && (Nn(268435456), xm($1, ia)), a = e.timeoutHandle, a !== kr && (e.timeoutHandle = kr, sT(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Oi = 0, ih(), Xt = e, tt = a = hu(
        e.current,
        null
      ), Ie = t, Nt = _n, nu = null, Pf = !1, hm = gl(e, t), JS = !1, sl = zo, Vr = Rn = KS = ts = es = 0, sn = a0 = null, bv = !1, t & 8 && (t |= t & 32), i = e.entangledLanes, i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; )
          o = 31 - kl(i), f = 1 << o, t |= e[o], i &= ~f;
      return pc = t, vd(), e = G1(), 1e3 < e - x1 && (G.recentlyCreatedOwnerStacks = 0, x1 = e), Ei.discardPendingWarnings(), a;
    }
    function Zn(e, t) {
      Ye = null, G.H = Fp, G.getCurrentStack = null, Yu = !1, Na = null, t === am || t === ov ? (t = qc(), Nt = t0) : t === US ? (t = qc(), Nt = Vb) : Nt = t === XS ? ZS : t !== null && typeof t == "object" && typeof t.then == "function" ? l0 : vv, nu = t;
      var a = tt;
      a === null ? (sl = e0, Js(
        e,
        sa(t, e.current)
      )) : a.mode & We && zd(a);
    }
    function qy() {
      var e = tu.current;
      return e === null ? !0 : (Ie & 4194048) === Ie ? Ju === null : (Ie & 62914560) === Ie || Ie & 536870912 ? e === Ju : !1;
    }
    function ch() {
      var e = G.H;
      return G.H = Fp, e === null ? Fp : e;
    }
    function xy() {
      var e = G.A;
      return G.A = WE, e;
    }
    function hf(e) {
      El === null && (El = e._debugTask == null ? null : e._debugTask);
    }
    function mf() {
      sl = If, Pf || (Ie & 4194048) !== Ie && tu.current !== null || (hm = !0), !(es & 134217727) && !(ts & 134217727) || Xt === null || Tn(
        Xt,
        Ie,
        Rn,
        !1
      );
    }
    function yf(e, t, a) {
      var i = ht;
      ht |= Il;
      var o = ch(), f = xy();
      if (Xt !== e || Ie !== t) {
        if (qu) {
          var d = e.memoizedUpdaters;
          0 < d.size && (gf(e, Ie), d.clear()), Ga(e, t);
        }
        n0 = null, Ru(e, t);
      }
      t = !1, d = sl;
      e: do
        try {
          if (Nt !== _n && tt !== null) {
            var h = tt, y = nu;
            switch (Nt) {
              case ZS:
                ih(), d = gv;
                break e;
              case t0:
              case Qr:
              case Lr:
              case l0:
                tu.current === null && (t = !0);
                var p = Nt;
                if (Nt = _n, nu = null, pf(e, h, y, p), a && hm) {
                  d = zo;
                  break e;
                }
                break;
              default:
                p = Nt, Nt = _n, nu = null, pf(e, h, y, p);
            }
          }
          Gy(), d = sl;
          break;
        } catch (z) {
          Zn(e, z);
        }
      while (!0);
      return t && e.shellSuspendCounter++, Zo(), ht = i, G.H = o, G.A = f, tt === null && (Xt = null, Ie = 0, vd()), d;
    }
    function Gy() {
      for (; tt !== null; ) oh(tt);
    }
    function di(e, t) {
      var a = ht;
      ht |= Il;
      var i = ch(), o = xy();
      if (Xt !== e || Ie !== t) {
        if (qu) {
          var f = e.memoizedUpdaters;
          0 < f.size && (gf(e, Ie), f.clear()), Ga(e, t);
        }
        n0 = null, Tv = Gl() + Kb, Ru(e, t);
      } else
        hm = gl(
          e,
          t
        );
      e: do
        try {
          if (Nt !== _n && tt !== null)
            t: switch (t = tt, f = nu, Nt) {
              case vv:
                Nt = _n, nu = null, pf(
                  e,
                  t,
                  f,
                  vv
                );
                break;
              case Qr:
              case Lr:
                if (Wm(f)) {
                  Nt = _n, nu = null, wy(t);
                  break;
                }
                t = function() {
                  Nt !== Qr && Nt !== Lr || Xt !== e || (Nt = Sv), Ma(e);
                }, f.then(t, t);
                break e;
              case t0:
                Nt = Sv;
                break e;
              case Vb:
                Nt = VS;
                break e;
              case Sv:
                Wm(f) ? (Nt = _n, nu = null, wy(t)) : (Nt = _n, nu = null, pf(
                  e,
                  t,
                  f,
                  Sv
                ));
                break;
              case VS:
                var d = null;
                switch (tt.tag) {
                  case 26:
                    d = tt.memoizedState;
                  case 5:
                  case 27:
                    var h = tt;
                    if (d ? at(d) : h.stateNode.complete) {
                      Nt = _n, nu = null;
                      var y = h.sibling;
                      if (y !== null) tt = y;
                      else {
                        var p = h.return;
                        p !== null ? (tt = p, nr(p)) : tt = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Nt = _n, nu = null, pf(
                  e,
                  t,
                  f,
                  VS
                );
                break;
              case l0:
                Nt = _n, nu = null, pf(
                  e,
                  t,
                  f,
                  l0
                );
                break;
              case ZS:
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
          Zn(e, z);
        }
      while (!0);
      return Zo(), G.H = i, G.A = o, ht = a, tt !== null ? zo : (Xt = null, Ie = 0, vd(), sl);
    }
    function Sl() {
      for (; tt !== null && !jh(); )
        oh(tt);
    }
    function oh(e) {
      var t = e.alternate;
      (e.mode & We) !== He ? (ti(e), t = ce(
        e,
        Ws,
        t,
        e,
        pc
      ), zd(e)) : t = ce(
        e,
        Ws,
        t,
        e,
        pc
      ), e.memoizedProps = e.pendingProps, t === null ? nr(e) : tt = t;
    }
    function wy(e) {
      var t = ce(e, xl, e);
      e.memoizedProps = e.pendingProps, t === null ? nr(e) : tt = t;
    }
    function xl(e) {
      var t = e.alternate, a = (e.mode & We) !== He;
      switch (a && ti(e), e.tag) {
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
          Qi(e);
        default:
          Ey(t, e), e = tt = Qm(e, pc), t = Ws(t, e, pc);
      }
      return a && zd(e), t;
    }
    function pf(e, t, a, i) {
      Zo(), Qi(t), nm = null, Kp = 0;
      var o = t.return;
      try {
        if (oy(
          e,
          o,
          t,
          a,
          Ie
        )) {
          sl = e0, Js(
            e,
            sa(a, e.current)
          ), tt = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw tt = o, f;
        sl = e0, Js(
          e,
          sa(a, e.current)
        ), tt = null;
        return;
      }
      t.flags & 32768 ? (it || i === vv ? e = !0 : hm || Ie & 536870912 ? e = !1 : (Pf = e = !0, (i === Qr || i === Lr || i === t0 || i === l0) && (i = tu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Xy(t, e)) : nr(t);
    }
    function nr(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Xy(
            t,
            Pf
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, ti(t), a = ce(
          t,
          by,
          a,
          t,
          pc
        ), (t.mode & We) !== He && Rs(t), a !== null) {
          tt = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          tt = t;
          return;
        }
        tt = t = e;
      } while (t !== null);
      sl === zo && (sl = Lb);
    }
    function Xy(e, t) {
      do {
        var a = k0(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, tt = a;
          return;
        }
        if ((e.mode & We) !== He) {
          Rs(e), a = e.actualDuration;
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
    function xt(e, t, a, i, o, f, d, h, y, p, z, R, E, q) {
      e.cancelPendingCommit = null;
      do
        ur();
      while (Jl !== as);
      if (Ei.flushLegacyContextWarning(), Ei.flushPendingUnsafeLifecycleWarnings(), (ht & (Il | au)) !== oa)
        throw Error("Should not already be working.");
      if (Nn(a), p === Xr ? qm(
        E,
        q,
        a,
        El
      ) : i !== null ? $v(
        E,
        q,
        a,
        i,
        t !== null && t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) !== 0,
        El
      ) : Kv(
        E,
        q,
        a,
        El
      ), t !== null) {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= bS, ed(
          e,
          a,
          f,
          d,
          h,
          y
        ), e === Xt && (tt = Xt = null, Ie = 0), mm = t, ns = e, Oi = a, WS = f, IS = o, Pb = i, FS = q, e2 = R, zi = Av, t2 = null, t.actualDuration !== 0 || t.subtreeFlags & 10256 || t.flags & 10256 ? (e.callbackNode = null, e.callbackPriority = 0, vf(fo, function() {
          return s0 = window.event, zi === Av && (zi = kS), ir(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), vo = null, Kf = Xl(), R !== null && kv(
          q,
          Kf,
          R,
          El
        ), i = (t.flags & 13878) !== 0, t.subtreeFlags & 13878 || i) {
          i = G.T, G.T = null, o = bt.p, bt.p = Rl, d = ht, ht |= au;
          try {
            Iv(e, t, a);
          } finally {
            ht = d, bt.p = o, G.T = i;
          }
        }
        Jl = kb, Sa(), Mu(), Qy();
      }
    }
    function Sa() {
      if (Jl === kb) {
        Jl = as;
        var e = ns, t = mm, a = Oi, i = (t.flags & 13878) !== 0;
        if (t.subtreeFlags & 13878 || i) {
          i = G.T, G.T = null;
          var o = bt.p;
          bt.p = Rl;
          var f = ht;
          ht |= au;
          try {
            rm = a, dm = e, Yc(), er(t, e), dm = rm = null, a = f1;
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
                    var q = E.getSelection(), ne = h.textContent.length, oe = Math.min(
                      y.start,
                      ne
                    ), Zt = y.end === void 0 ? oe : Math.min(y.end, ne);
                    !q.extend && oe > Zt && (d = Zt, Zt = oe, oe = d);
                    var ft = _0(
                      h,
                      oe
                    ), b = _0(
                      h,
                      Zt
                    );
                    if (ft && b && (q.rangeCount !== 1 || q.anchorNode !== ft.node || q.anchorOffset !== ft.offset || q.focusNode !== b.node || q.focusOffset !== b.offset)) {
                      var T = R.createRange();
                      T.setStart(ft.node, ft.offset), q.removeAllRanges(), oe > Zt ? (q.addRange(T), q.extend(b.node, b.offset)) : (T.setEnd(b.node, b.offset), q.addRange(T));
                    }
                  }
                }
              }
              for (R = [], q = h; q = q.parentNode; )
                q.nodeType === 1 && R.push({
                  element: q,
                  left: q.scrollLeft,
                  top: q.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < R.length; h++) {
                var O = R[h];
                O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
              }
            }
            Gv = !!o1, f1 = o1 = null;
          } finally {
            ht = f, bt.p = o, G.T = i;
          }
        }
        e.current = t, Jl = Wb;
      }
    }
    function Mu() {
      if (Jl === Wb) {
        Jl = as;
        var e = t2;
        if (e !== null) {
          Kf = Xl();
          var t = go, a = Kf;
          !Ft || a <= t || console.timeStamp(
            e,
            t,
            a,
            rt,
            ot,
            "secondary-light"
          );
        }
        e = ns, t = mm, a = Oi;
        var i = (t.flags & 8772) !== 0;
        if (t.subtreeFlags & 8772 || i) {
          i = G.T, G.T = null;
          var o = bt.p;
          bt.p = Rl;
          var f = ht;
          ht |= au;
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
        e = FS, t = e2, go = Xl(), e = t === null ? e : Kf, t = go, a = zi === $S, i = El, vo !== null ? B0(
          e,
          t,
          vo,
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
        )), Jl = Fb;
      }
    }
    function Qy() {
      if (Jl === Ib || Jl === Fb) {
        if (Jl === Ib) {
          var e = go;
          go = Xl();
          var t = go, a = zi === $S;
          !Ft || t <= e || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            e,
            t,
            rt,
            ot,
            a ? " error" : "secondary-light"
          ), zi !== $S && (zi = $b);
        }
        Jl = as, qh(), e = ns;
        var i = mm;
        t = Oi, a = Pb;
        var o = i.actualDuration !== 0 || (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0;
        o ? Jl = Ov : (Jl = as, mm = ns = null, Ly(
          e,
          e.pendingLanes
        ), Zr = 0, i0 = null);
        var f = e.pendingLanes;
        if (f === 0 && (ls = null), o || rh(e), f = Ul(t), i = i.stateNode, _l && typeof _l.onCommitFiberRoot == "function")
          try {
            var d = (i.current.flags & 128) === 128;
            switch (f) {
              case Rl:
                var h = Sp;
                break;
              case Wl:
                h = xh;
                break;
              case ua:
                h = fo;
                break;
              case rc:
                h = Gh;
                break;
              default:
                h = fo;
            }
            _l.onCommitFiberRoot(
              so,
              i,
              h,
              d
            );
          } catch (R) {
            ju || (ju = !0, console.error(
              "React instrumentation encountered an error: %o",
              R
            ));
          }
        if (qu && e.memoizedUpdaters.clear(), Yy(), a !== null) {
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
        Oi & 3 && ur(), Ma(e), f = e.pendingLanes, t & 261930 && f & 42 ? (iv = !0, e === PS ? u0++ : (u0 = 0, PS = e)) : u0 = 0, o || ac(t, go), Cu(0);
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
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, _s(t)));
    }
    function ur() {
      return Sa(), Mu(), Qy(), ir();
    }
    function ir() {
      if (Jl !== Ov) return !1;
      var e = ns, t = WS;
      WS = 0;
      var a = Ul(Oi), i = ua > a ? ua : a;
      a = G.T;
      var o = bt.p;
      try {
        bt.p = i, G.T = null;
        var f = IS;
        IS = null, i = ns;
        var d = Oi;
        if (Jl = as, mm = ns = null, Oi = 0, (ht & (Il | au)) !== oa)
          throw Error("Cannot flush passive effects while already rendering.");
        Nn(d), e1 = !0, zv = !1;
        var h = 0;
        if (vo = null, h = Gl(), zi === $b)
          xm(
            go,
            h,
            LE
          );
        else {
          var y = go, p = h, z = zi === kS;
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
        y = ht, ht |= au;
        var R = i.current;
        Yc(), nh(R);
        var E = i.current;
        R = FS, Yc(), Hy(
          i,
          E,
          d,
          f,
          R
        ), rh(i), ht = y;
        var q = Gl();
        if (E = h, R = El, vo !== null ? B0(
          E,
          q,
          vo,
          !0,
          R
        ) : !Ft || q <= E || (R ? R.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            E,
            q,
            rt,
            ot,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          E,
          q,
          rt,
          ot,
          "secondary-dark"
        )), ac(d, q), Cu(0, !1), zv ? i === i0 ? Zr++ : (Zr = 0, i0 = i) : Zr = 0, zv = e1 = !1, _l && typeof _l.onPostCommitFiberRoot == "function")
          try {
            _l.onPostCommitFiberRoot(so, i);
          } catch (oe) {
            ju || (ju = !0, console.error(
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
    function ba(e, t, a) {
      t = sa(a, t), w0(t), t = Xd(e.stateNode, t, 2), e = gu(e, t, 2), e !== null && (Mn(e, 2), Ma(e));
    }
    function Je(e, t, a) {
      if (ym = !1, e.tag === 3)
        ba(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            ba(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ls === null || !ls.has(i))) {
              e = sa(a, e), w0(e), a = Qd(2), i = gu(t, a, 2), i !== null && (Ld(
                a,
                i,
                t,
                e
              ), Mn(i, 2), Ma(i));
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
        i = e.pingCache = new IE();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (JS = !0, o.add(a), i = Ra.bind(null, e, t, a), qu && gf(e, a), t.then(i, i));
    }
    function Ra(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, a & 127 ? 0 > mc && (Hr = mc = Xl(), Yp = ev("Promise Resolved"), $f = tv) : a & 4194048 && 0 > Zu && (So = Zu = Xl(), qp = ev("Promise Resolved"), _S = tv), jy() && G.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Xt === e && (Ie & a) === a && (sl === If || sl === pv && (Ie & 62914560) === Ie && Gl() - Ev < Jb ? (ht & Il) === oa && Ru(e, 0) : KS |= a, Vr === Ie && (Vr = 0)), Ma(e);
    }
    function Vy(e, t) {
      t === 0 && (t = Co()), e = ta(e, t), e !== null && (Mn(e, t), Ma(e));
    }
    function hi(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), Vy(e, a);
    }
    function eo(e, t) {
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
    function Jn(e, t, a) {
      if (t.subtreeFlags & 67117056)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === Aa;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && ce(
            o,
            sh,
            i,
            o
          ) : Jn(
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
            Jn,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function sh(e, t) {
      re(!0);
      try {
        lh(t), By(t), Uy(e, t.alternate, t, !1), ar(e, t, 0, null, !1, 0);
      } finally {
        re(!1);
      }
    }
    function rh(e) {
      var t = !0;
      e.current.mode & (Ba | bi) || (t = !1), Jn(
        e,
        e.current,
        t
      );
    }
    function An(e) {
      if ((ht & Il) === oa) {
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
    function gf(e, t) {
      qu && e.memoizedUpdaters.forEach(function(a) {
        Al(e, a, t);
      });
    }
    function vf(e, t) {
      var a = G.actQueue;
      return a !== null ? (a.push(t), tT) : vp(e, t);
    }
    function cr(e) {
      jy() && G.actQueue === null && ce(e, function() {
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
    function Ma(e) {
      e !== pm && e.next === null && (pm === null ? _v = pm = e : pm = pm.next = e), Rv = !0, G.actQueue !== null ? l1 || (l1 = !0, cg()) : t1 || (t1 = !0, cg());
    }
    function Cu(e, t) {
      if (!a1 && Rv) {
        a1 = !0;
        do
          for (var a = !1, i = _v; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - kl(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, or(i, f));
            } else
              f = Ie, f = vc(
                i,
                i === Xt ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== kr
              ), !(f & 3) || gl(i, f) || (a = !0, or(i, f));
            i = i.next;
          }
        while (a);
        a1 = !1;
      }
    }
    function ig() {
      s0 = window.event, dh();
    }
    function dh() {
      Rv = l1 = t1 = !1;
      var e = 0;
      us !== 0 && $y() && (e = us);
      for (var t = Gl(), a = null, i = _v; i !== null; ) {
        var o = i.next, f = Sf(i, t);
        f === 0 ? (i.next = null, a === null ? _v = o : a.next = o, o === null && (pm = a)) : (a = i, (e !== 0 || f & 3) && (Rv = !0)), i = o;
      }
      Jl !== as && Jl !== Ov || Cu(e), us !== 0 && (us = 0);
    }
    function Sf(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - kl(f), h = 1 << d, y = o[d];
        y === -1 ? (!(h & a) || h & i) && (o[d] = Pr(h, t)) : y <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = Xt, a = Ie, a = vc(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== kr
      ), i = e.callbackNode, a === 0 || e === t && (Nt === Qr || Nt === Lr) || e.cancelPendingCommit !== null)
        return i !== null && hh(i), e.callbackNode = null, e.callbackPriority = 0;
      if (!(a & 3) || gl(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || G.actQueue !== null && i !== n1)
          hh(i);
        else return t;
        switch (Ul(a)) {
          case Rl:
          case Wl:
            a = xh;
            break;
          case ua:
            a = fo;
            break;
          case rc:
            a = Gh;
            break;
          default:
            a = fo;
        }
        return i = Zy.bind(null, e), G.actQueue !== null ? (G.actQueue.push(i), a = n1) : a = vp(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && hh(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Zy(e, t) {
      if (iv = uv = !1, s0 = window.event, Jl !== as && Jl !== Ov)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (zi === Av && (zi = kS), ur() && e.callbackNode !== a)
        return null;
      var i = Ie;
      return i = vc(
        e,
        e === Xt ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== kr
      ), i === 0 ? null : (lg(
        e,
        i,
        t
      ), Sf(e, Gl()), e.callbackNode != null && e.callbackNode === a ? Zy.bind(null, e) : null);
    }
    function or(e, t) {
      if (ur()) return null;
      uv = iv, iv = !1, lg(e, t, !0);
    }
    function hh(e) {
      e !== n1 && e !== null && Yh(e);
    }
    function cg() {
      G.actQueue !== null && G.actQueue.push(function() {
        return dh(), null;
      }), rT(function() {
        (ht & (Il | au)) !== oa ? vp(
          Sp,
          ig
        ) : dh();
      });
    }
    function Jy() {
      if (us === 0) {
        var e = Yr;
        e === 0 && (e = qf, qf <<= 1, !(qf & 261888) && (qf = 256)), us = e;
      }
      return us;
    }
    function pt(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (yt(e, "action"), gs("" + e));
    }
    function Ct(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function ut(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = pt(
          (o[Oa] || null).action
        ), d = i.submitter;
        d && (t = (t = d[Oa] || null) ? pt(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
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
                  if (us !== 0) {
                    var y = d ? Ct(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), fi(
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
                  }, Object.freeze(p), fi(
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
        pS(i);
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
      u1.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[ro];
      a === void 0 && (a = t[ro] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (mh(t, e, 2, !1), a.add(i));
    }
    function Uu(e, t, a) {
      u1.has(e) && !t && console.error(
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
    function nc(e) {
      if (!e[Mv]) {
        e[Mv] = !0, Qg.forEach(function(a) {
          a !== "selectionchange" && (u1.has(a) || Uu(a, !1, e), Uu(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Mv] || (t[Mv] = !0, Uu("selectionchange", !1, t));
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
      ), o = void 0, !iS || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
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
    function Kn(e, t, a, i, o) {
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
        var p = f, z = Un(a), R = [];
        e: {
          var E = q1.get(e);
          if (E !== void 0) {
            var q = Kg, ne = e;
            switch (e) {
              case "keypress":
                if (vs(a) === 0) break e;
              case "keydown":
              case "keyup":
                q = pE;
                break;
              case "focusin":
                ne = "focus", q = sS;
                break;
              case "focusout":
                ne = "blur", q = sS;
                break;
              case "beforeblur":
              case "afterblur":
                q = sS;
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
                q = A1;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                q = nE;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                q = SE;
                break;
              case N1:
              case B1:
              case Y1:
                q = cE;
                break;
              case j1:
                q = EE;
                break;
              case "scroll":
              case "scrollend":
                q = lE;
                break;
              case "wheel":
                q = AE;
                break;
              case "copy":
              case "cut":
              case "paste":
                q = fE;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                q = z1;
                break;
              case "toggle":
              case "beforetoggle":
                q = zE;
            }
            var oe = (t & 4) !== 0, Zt = !oe && (e === "scroll" || e === "scrollend"), ft = oe ? E !== null ? E + "Capture" : null : E;
            oe = [];
            for (var b = p, T; b !== null; ) {
              var O = b;
              if (T = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || T === null || ft === null || (O = ru(b, ft), O != null && oe.push(
                Gt(
                  b,
                  O,
                  T
                )
              )), Zt) break;
              b = b.return;
            }
            0 < oe.length && (E = new q(
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
            if (E = e === "mouseover" || e === "pointerover", q = e === "mouseout" || e === "pointerout", E && a !== Op && (ne = a.relatedTarget || a.fromElement) && (I(ne) || ne[Si]))
              break e;
            if ((q || E) && (E = z.window === z ? z : (E = z.ownerDocument) ? E.defaultView || E.parentWindow : window, q ? (ne = a.relatedTarget || a.toElement, q = p, ne = ne ? I(ne) : null, ne !== null && (Zt = lt(ne), oe = ne.tag, ne !== Zt || oe !== 5 && oe !== 27 && oe !== 6) && (ne = null)) : (q = null, ne = p), q !== ne)) {
              if (oe = A1, O = "onMouseLeave", ft = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (oe = z1, O = "onPointerLeave", ft = "onPointerEnter", b = "pointer"), Zt = q == null ? E : de(q), T = ne == null ? E : de(ne), E = new oe(
                O,
                b + "leave",
                q,
                a,
                z
              ), E.target = Zt, E.relatedTarget = T, O = null, I(z) === p && (oe = new oe(
                ft,
                b + "enter",
                ne,
                a,
                z
              ), oe.target = T, oe.relatedTarget = Zt, O = oe), Zt = O, q && ne)
                t: {
                  for (oe = to, ft = q, b = ne, T = 0, O = ft; O; O = oe(O))
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
              q !== null && yh(
                R,
                E,
                q,
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
            if (E = p ? de(p) : window, q = E.nodeName && E.nodeName.toLowerCase(), q === "select" || q === "input" && E.type === "file")
              var ue = Bi;
            else if (Um(E))
              if (U1)
                ue = Ts;
              else {
                ue = Hm;
                var je = Jv;
              }
            else
              q = E.nodeName, !q || q.toLowerCase() !== "input" || E.type !== "checkbox" && E.type !== "radio" ? p && su(p.elementType) && (ue = Bi) : ue = Nm;
            if (ue && (ue = ue(e, p))) {
              bs(
                R,
                ue,
                a,
                z
              );
              break e;
            }
            je && je(e, E, p), e === "focusout" && p && E.type === "number" && p.memoizedProps.value != null && Tm(E, "number", E.value);
          }
          switch (je = p ? de(p) : window, e) {
            case "focusin":
              (Um(je) || je.contentEditable === "true") && (Kh = je, dS = p, Up = null);
              break;
            case "focusout":
              Up = dS = Kh = null;
              break;
            case "mousedown":
              hS = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              hS = !1, M0(
                R,
                a,
                z
              );
              break;
            case "selectionchange":
              if (ME) break;
            case "keydown":
            case "keyup":
              M0(
                R,
                a,
                z
              );
          }
          var be;
          if (rS)
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
            Jh ? wo(e, a) && (ge = "onCompositionEnd") : e === "keydown" && a.keyCode === D1 && (ge = "onCompositionStart");
          ge && (_1 && a.locale !== "ko" && (Jh || ge !== "onCompositionStart" ? ge === "onCompositionEnd" && Jh && (be = zc()) : (Qf = z, cS = "value" in Qf ? Qf.value : Qf.textContent, Jh = !0)), je = $n(
            p,
            ge
          ), 0 < je.length && (ge = new O1(
            ge,
            e,
            null,
            a,
            z
          ), R.push({
            event: ge,
            listeners: je
          }), be ? ge.data = be : (be = Pu(a), be !== null && (ge.data = be)))), (be = _E ? Cm(e, a) : dd(e, a)) && (ge = $n(
            p,
            "onBeforeInput"
          ), 0 < ge.length && (je = new rE(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            z
          ), R.push({
            event: je,
            listeners: ge
          }), je.data = be)), ut(
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
    function $n(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = ru(e, a), o != null && i.unshift(
          Gt(e, o, f)
        ), o = ru(e, t), o != null && i.push(
          Gt(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function to(e) {
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
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = ru(a, f), p != null && d.unshift(
          Gt(a, p, y)
        )) : o || (p = ru(a, f), p != null && d.push(
          Gt(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function Ea(e, t) {
      O0(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || E1 || (E1 = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: xu,
        possibleRegistrationNames: wf
      };
      su(e) || typeof t.is == "string" || Zv(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function ll(e, t, a, i) {
      t !== a && (a = kn(a), kn(t) !== a && (i[e] = t));
    }
    function fr(e, t, a) {
      t.forEach(function(i) {
        a[mi(i)] = i === "style" ? uc(e) : e.getAttribute(i);
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
    function kn(e) {
      return xa(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        _i(e)
      ), uu(e)), (typeof e == "string" ? e : "" + e).replace(lT, `
`).replace(aT, "");
    }
    function Ky(e, t) {
      return t = kn(t), kn(e) === t;
    }
    function St(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (ps(i, t, !1), t === "body" || t === "textarea" && i === "" || Oc(e, i)) : (typeof i == "number" || typeof i == "bigint") && (ps("" + i, t, !1), t !== "body" && Oc(e, "" + i));
          break;
        case "className":
          hs(e, "class", i);
          break;
        case "tabIndex":
          hs(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          hs(e, a, i);
          break;
        case "style":
          _m(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            hs(e, "data", i);
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
          yt(i, a), i = gs("" + i), e.setAttribute(a, i);
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
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Cv ? t !== "button" || o.type == null || o.type === "submit" || Cv ? typeof i == "function" && (o.name == null || i2 || (i2 = !0, console.error(
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
          yt(i, a), i = gs("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && al(a, i), e.onclick = hn);
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
          yt(i, a), a = gs("" + i), e.setAttributeNS(Jr, "xlink:href", a);
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
          Ue("beforetoggle", e), Ue("toggle", e), No(e, "popover", i);
          break;
        case "xlinkActuate":
          cu(
            e,
            Jr,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          cu(
            e,
            Jr,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          cu(
            e,
            Jr,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          cu(
            e,
            Jr,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          cu(
            e,
            Jr,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          cu(
            e,
            Jr,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          cu(
            e,
            i1,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          cu(
            e,
            i1,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          cu(
            e,
            i1,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), No(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          c2 || i == null || typeof i != "object" || (c2 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = T0(a), No(e, a, i)) : xu.hasOwnProperty(a) && i != null && typeof i != "function" && al(a, i);
      }
    }
    function bf(e, t, a, i, o, f) {
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
          typeof i == "string" ? Oc(e, i) : (typeof i == "number" || typeof i == "bigint") && Oc(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && al(a, i), Ue("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && al(a, i), Ue("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && al(a, i), e.onclick = hn);
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
          if (xu.hasOwnProperty(a))
            i != null && typeof i != "function" && al(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[Oa] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : No(e, a, i);
            }
      }
    }
    function kt(e, t, a) {
      switch (Ea(t, a), t) {
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
          ea("input", a), Ue("invalid", e);
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
          fa(e, a), ad(
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
          ea("select", a), Ue("invalid", e), i = d = f = null;
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
          nd(e, a), t = f, a = d, e.multiple = !!i, t != null ? ou(e, !!i, t, !1) : a != null && ou(e, !!i, a, !0);
          return;
        case "textarea":
          ea("textarea", a), Ue("invalid", e), f = o = i = null;
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
          bc(e, a), Bo(e, i, o, f);
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
          if (su(t)) {
            for (z in a)
              a.hasOwnProperty(z) && (i = a[z], i !== void 0 && bf(
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
      switch (Ea(t, i), t) {
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
          for (q in a) {
            var R = a[q];
            if (a.hasOwnProperty(q) && R != null)
              switch (q) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = R;
                default:
                  i.hasOwnProperty(q) || St(
                    e,
                    t,
                    q,
                    null,
                    i,
                    R
                  );
              }
          }
          for (var E in i) {
            var q = i[E];
            if (R = a[E], i.hasOwnProperty(E) && (q != null || R != null))
              switch (E) {
                case "type":
                  f = q;
                  break;
                case "name":
                  o = q;
                  break;
                case "checked":
                  p = q;
                  break;
                case "defaultChecked":
                  z = q;
                  break;
                case "value":
                  d = q;
                  break;
                case "defaultValue":
                  h = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  q !== R && St(
                    e,
                    t,
                    E,
                    q,
                    i,
                    R
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || u2 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), u2 = !0), !t || i || n2 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), n2 = !0), Ui(
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
          q = d = h = E = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  q = y;
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
          i = h, t = d, a = q, E != null ? ou(e, !!t, E, !1) : !!a != !!t && (i != null ? ou(e, !!t, i, !0) : ou(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          q = E = null;
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
                  q = o;
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
          Ec(e, E, q);
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
            if (E = i[y], q = a[y], i.hasOwnProperty(y) && E !== q && (E != null || q != null))
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
                    q
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
            if (E = i[p], q = a[p], i.hasOwnProperty(p) && E !== q && (E != null || q != null))
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
                    q
                  );
              }
          return;
        default:
          if (su(t)) {
            for (var Zt in a)
              E = a[Zt], a.hasOwnProperty(Zt) && E !== void 0 && !i.hasOwnProperty(Zt) && bf(
                e,
                t,
                Zt,
                void 0,
                i,
                E
              );
            for (z in i)
              E = i[z], q = a[z], !i.hasOwnProperty(z) || E === q || E === void 0 && q === void 0 || bf(
                e,
                t,
                z,
                E,
                i,
                q
              );
            return;
          }
      }
      for (var ft in a)
        E = a[ft], a.hasOwnProperty(ft) && E != null && !i.hasOwnProperty(ft) && St(e, t, ft, null, i, E);
      for (R in i)
        E = i[R], q = a[R], !i.hasOwnProperty(R) || E === q || E == null && q == null || St(e, t, R, E, i, q);
    }
    function mi(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function uc(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function Hu(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (Pl(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || me.has(f) ? (Pl(d, f), i += o + f.replace(w, "-$1").toLowerCase().replace(fe, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(w, "-$1").toLowerCase().replace(fe, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = kn(i), kn(t) !== i && (a.style = uc(e)));
      }
    }
    function Ca(e, t, a, i, o, f) {
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
    function Ef(e, t, a, i, o, f) {
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
    function sr(e, t, a, i, o, f) {
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
            if (yt(i, t), a = gs("" + i), e === a)
              return;
        }
      ll(t, e, i, f);
    }
    function Ua(e, t, a, i) {
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
      if (su(t)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (xu.hasOwnProperty(y))
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
                    f.delete(y), Hu(e, p, o);
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
                    f.delete("class"), d = Ci(
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
                    i.context === Do && t !== "svg" && t !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = Ci(
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
            if (xu.hasOwnProperty(p))
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
                  Ca(
                    e,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Ca(
                    e,
                    p,
                    "tabindex",
                    y,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(p), Hu(e, y, o);
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
                  sr(
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
                  } else if (d === nT) {
                    f.delete(p.toLowerCase()), ll(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  sr(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  sr(
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
                  Ef(
                    e,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  Ef(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Ca(
                    e,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Ca(
                    e,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Ca(
                    e,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Ca(
                    e,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Ca(
                    e,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Ca(
                    e,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Ca(
                    e,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Ca(
                    e,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Ca(
                    e,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Ca(
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
                    h = T0(p), d = !1, i.context === Do && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (z = p.toLowerCase(), z = Pn.hasOwnProperty(
                      z
                    ) && Pn[z] || null, z !== null && z !== p && (d = !0, f.delete(z)), f.delete(h));
                    e: if (z = e, R = h, h = y, dn(R))
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
      return 0 < f.size && a.suppressHydrationWarning !== !0 && fr(e, f, o), Object.keys(o).length === 0 ? null : o;
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
    function Ta(e) {
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
          if (f && h && Ta(d)) {
            for (d = 0, h = o.responseEnd, i += 1; i < a.length; i++) {
              var y = a[i], p = y.startTime;
              if (p > h) break;
              var z = y.transferSize, R = y.initiatorType;
              z && Ta(R) && (y = y.responseEnd, d += z * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--i, t += 8 * (f + d) / (o.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    function rr(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function sg(e) {
      switch (e) {
        case Ke:
          return vm;
        case Xe:
          return Yv;
        default:
          return Do;
      }
    }
    function yi(e, t) {
      if (e === Do)
        switch (t) {
          case "svg":
            return vm;
          case "math":
            return Yv;
          default:
            return Do;
        }
      return e === vm && t === "foreignObject" ? Do : e;
    }
    function Tf(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function $y() {
      var e = window.event;
      return e && e.type === "popstate" ? e === s1 ? !1 : (s1 = e, !0) : (s1 = null, !1);
    }
    function Nu() {
      var e = window.event;
      return e && e !== s0 ? e.type : null;
    }
    function Af() {
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
      Dl(e, t, a, i), e[Oa] = i;
    }
    function bh(e) {
      Oc(e, "");
    }
    function Pv(e, t, a) {
      e.nodeValue = a;
    }
    function mg(e) {
      if (!e.__reactWarnedAboutChildrenConflict) {
        var t = e[Oa] || null;
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
    function ic(e) {
      return e === "head";
    }
    function yg(e, t) {
      e.removeChild(t);
    }
    function pg(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function lo(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === f0 || a === Bv) {
            if (i === 0) {
              e.removeChild(o), io(t);
              return;
            }
            i--;
          } else if (a === o0 || a === is || a === $r || a === gm || a === Kr)
            i++;
          else if (a === iT)
            gi(
              e.ownerDocument.documentElement
            );
          else if (a === oT) {
            a = e.ownerDocument.head, gi(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[Gf] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === cT && gi(e.ownerDocument.body);
        a = o;
      } while (a);
      io(t);
    }
    function dr(e, t) {
      var a = e;
      e = 0;
      do {
        var i = a.nextSibling;
        if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), i && i.nodeType === 8)
          if (a = i.data, a === f0) {
            if (e === 0) break;
            e--;
          } else
            a !== o0 && a !== is && a !== $r && a !== gm || e++;
        a = i;
      } while (a);
    }
    function gg(e) {
      dr(e, !0);
    }
    function vg(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Sg(e) {
      e.nodeValue = "";
    }
    function bg(e) {
      dr(e, !1);
    }
    function Eg(e, t) {
      t = t[fT], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function Tg(e, t) {
      e.nodeValue = t;
    }
    function Of(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Of(a), M(a);
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
          if (!e[Gf])
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
        if (e = tn(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Og(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = tn(e.nextSibling), e === null)) return null;
      return e;
    }
    function zt(e, t) {
      for (; e.nodeType !== 8; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = tn(e.nextSibling), e === null)) return null;
      return e;
    }
    function hr(e) {
      return e.data === is || e.data === $r;
    }
    function ky(e) {
      return e.data === gm || e.data === is && e.ownerDocument.readyState !== f2;
    }
    function zg(e, t) {
      var a = e.ownerDocument;
      if (e.data === $r)
        e._reactRetry = t;
      else if (e.data !== is || a.readyState !== f2)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function tn(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === o0 || t === gm || t === is || t === $r || t === Kr || t === c1 || t === o2)
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
          a[mi(f.name)] = f.name.toLowerCase() === "style" ? uc(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? e.data === Kr ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : e.nodeValue;
    }
    function _g(e, t, a) {
      return a === null || a[uT] !== !0 ? (e.nodeValue === t ? e = null : (t = kn(t), e = kn(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function zf(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === f0 || a === Bv) {
            if (t === 0)
              return tn(e.nextSibling);
            t--;
          } else
            a !== o0 && a !== gm && a !== is && a !== $r && a !== Kr || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function ao(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === o0 || a === gm || a === is || a === $r || a === Kr) {
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
      io(e);
    }
    function Eh(e) {
      io(e);
    }
    function Fy(e) {
      io(e);
    }
    function pi(e, t, a, i, o) {
      switch (o && ys(e, i.ancestorInfo), t = rr(a), e) {
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
    function Bu(e, t, a, i) {
      if (!a[Si] && ae(a)) {
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
      kt(a, e, t), a[Wt] = i, a[Oa] = t;
    }
    function gi(e) {
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
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), y2.has(o) || (y2.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), kt(t, "link", e), he(t), i.head.appendChild(t)));
      }
    }
    function Py(e, t, a, i) {
      var o = (o = ln.current) ? Th(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = no(a.href), t = Re(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = no(a.href);
            var f = Re(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Wr, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              yr(e)
            )) && !f._p && (d.instance = f, d.state.loading = r0 | ku), !Wu.has(e))) {
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
              Wu.set(e, h), f || Rg(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + mr(t) + `
  + ` + mr(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + mr(t) + `
  + ` + mr(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = uo(a), t = Re(o).hoistableScripts, i = t.get(a), i || (i = {
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
    function mr(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : an.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : an.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : an.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function no(e) {
      return 'href="' + Rt(e) + '"';
    }
    function yr(e) {
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
        return i.loading |= h2;
      }), kt(t, "link", a), he(t), e.head.appendChild(t));
    }
    function uo(e) {
      return '[src="' + Rt(e) + '"]';
    }
    function pr(e) {
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
            return i = (e.ownerDocument || e).createElement("style"), he(i), kt(i, "style", o), Df(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = no(a.href);
            var f = e.querySelector(
              yr(o)
            );
            if (f)
              return t.state.loading |= ku, t.instance = f, he(f), f;
            i = Ah(a), (o = Wu.get(o)) && ep(i, o), f = (e.ownerDocument || e).createElement("link"), he(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), kt(f, "link", i), t.state.loading |= ku, Df(f, a.precedence, e), t.instance = f;
          case "script":
            return f = uo(a.src), (o = e.querySelector(
              pr(f)
            )) ? (t.instance = o, he(o), o) : (i = a, (o = Wu.get(f)) && (i = ke({}, a), tp(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), he(o), kt(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & ku) === Wr && (i = t.instance, t.state.loading |= ku, Df(i, a.precedence, e));
      return t.instance;
    }
    function Df(e, t, a) {
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
    function _f(e, t, a) {
      if (jv === null) {
        var i = /* @__PURE__ */ new Map(), o = jv = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = jv, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Gf] || f[Wt] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== Ke) {
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
      return !(e.type === "stylesheet" && (e.state.loading & m2) === Wr);
    }
    function lp(e, t, a, i) {
      if (a.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (a.state.loading & ku) === Wr) {
        if (a.instance === null) {
          var o = no(i.href), f = t.querySelector(
            yr(o)
          );
          if (f) {
            t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Rf.bind(e), t.then(e, e)), a.state.loading |= ku, a.instance = f, he(f);
            return;
          }
          f = t.ownerDocument || t, i = Ah(i), (o = Wu.get(o)) && ep(i, o), f = f.createElement("link"), he(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), kt(f, "link", i), a.instance = f;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & m2) === Wr && (e.count++, a = Rf.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
      }
    }
    function zh(e, t) {
      return e.stylesheets && e.count === 0 && gr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
        var i = setTimeout(function() {
          if (e.stylesheets && gr(e, e.stylesheets), e.unsuspend) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        }, dT + t);
        0 < e.imgBytes && d1 === 0 && (d1 = 125 * fg() * mT);
        var o = setTimeout(
          function() {
            if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && gr(e, e.stylesheets), e.unsuspend)) {
              var f = e.unsuspend;
              e.unsuspend = null, f();
            }
          },
          (e.imgBytes > d1 ? 50 : hT) + t
        );
        return e.unsuspend = a, function() {
          e.unsuspend = null, clearTimeout(i), clearTimeout(o);
        };
      } : null;
    }
    function Rf() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          gr(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function gr(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, qv = /* @__PURE__ */ new Map(), t.forEach(ap, e), qv = null, Rf.call(e));
    }
    function ap(e, t) {
      if (!(t.state.loading & ku)) {
        var a = qv.get(e);
        if (a) var i = a.get(h1);
        else {
          a = /* @__PURE__ */ new Map(), qv.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(h1, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(h1, o), a.set(d, o), this.count++, i = Rf.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= ku;
      }
    }
    function vr(e, t, a, i, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = kr, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Uo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Uo(0), this.hiddenUpdates = Uo(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function Sr(e, t, a, i, o, f, d, h, y, p, z, R) {
      return e = new vr(
        e,
        t,
        a,
        d,
        y,
        p,
        z,
        R,
        h
      ), t = xE, f === !0 && (t |= Ba | bi), t |= We, f = U(3, null, null, t), e.current = f, f.stateNode = e, t = Od(), Bc(t), e.pooledCache = t, Bc(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, nt(f), e;
    }
    function Ug(e) {
      return e ? (e = Zf, e) : Zf;
    }
    function Dh(e, t, a, i, o, f) {
      if (_l && typeof _l.onScheduleFiberRoot == "function")
        try {
          _l.onScheduleFiberRoot(so, i, a);
        } catch (d) {
          ju || (ju = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = Ug(o), i.context === null ? i.context = o : i.pendingContext = o, Yu && Na !== null && !S2 && (S2 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        se(Na) || "Unknown"
      )), i = Ol(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = gu(e, i, t), a !== null && (mu(t, "root.render()", null), Ne(a, e, t), bn(a, e, t));
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
        var t = ta(e, 67108864);
        t !== null && Ne(t, e, 67108864), np(e, 67108864);
      }
    }
    function ip(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = aa(e);
        t = rn(t);
        var a = ta(e, t);
        a !== null && Ne(a, e, t), np(e, t);
      }
    }
    function Ut() {
      return Na;
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
          Kn(
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
        else if (Mh(e, i), t & 4 && -1 < pT.indexOf(e)) {
          for (; o !== null; ) {
            var f = ae(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = iu(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - kl(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      Ma(f), (ht & (Il | au)) === oa && (Tv = Gl() + Kb, Cu(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = ta(f, 2), h !== null && Ne(h, f, 2), en(), np(f, 2);
              }
            if (f = _h(i), f === null && Kn(
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
          Kn(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function _h(e) {
      return e = Un(e), fp(e);
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
          switch (zr()) {
            case Sp:
              return Rl;
            case xh:
              return Wl;
            case fo:
            case Gg:
              return ua;
            case Gh:
              return rc;
            default:
              return ua;
          }
        default:
          return ua;
      }
    }
    function Mh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          cs = null;
          break;
        case "dragenter":
        case "dragleave":
          os = null;
          break;
        case "mouseover":
        case "mouseout":
          fs = null;
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
    function cc(e, t, a, i, o, f) {
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
          return cs = cc(
            cs,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return os = cc(
            os,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return fs = cc(
            fs,
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
            cc(
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
            cc(
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
    function Mf(e) {
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
      Mf(e) && a.delete(t);
    }
    function eS() {
      m1 = !1, cs !== null && Mf(cs) && (cs = null), os !== null && Mf(os) && (os = null), fs !== null && Mf(fs) && (fs = null), h0.forEach(Ch), m0.forEach(Ch);
    }
    function br(e, t) {
      e.blockedOn === t && (e.blockedOn = null, m1 || (m1 = !0, yl.unstable_scheduleCallback(
        yl.unstable_NormalPriority,
        eS
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
            }, Object.freeze(a), fi(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function io(e) {
      function t(y) {
        return br(y, e);
      }
      cs !== null && br(cs, e), os !== null && br(os, e), fs !== null && br(fs, e), h0.forEach(t), m0.forEach(t);
      for (var a = 0; a < ss.length; a++) {
        var i = ss[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < ss.length && (a = ss[0], a.blockedOn === null); )
        sp(a), a.blockedOn === null && ss.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[Oa] || null;
          if (typeof f == "function")
            d || Bg(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[Oa] || null)
                h = d.formAction;
              else if (fp(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), Bg(a);
          }
        }
    }
    function Yg() {
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
    function Wn(e) {
      this._internalRoot = e;
    }
    function dp(e) {
      e[Si] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var yl = K2(), Er = Mo, tS = $2(), ke = Object.assign, jg = Symbol.for("react.element"), On = Symbol.for("react.transitional.element"), oc = Symbol.for("react.portal"), Cf = Symbol.for("react.fragment"), Aa = Symbol.for("react.strict_mode"), Tr = Symbol.for("react.profiler"), Uh = Symbol.for("react.consumer"), Fn = Symbol.for("react.context"), Uf = Symbol.for("react.forward_ref"), co = Symbol.for("react.suspense"), Ha = Symbol.for("react.suspense_list"), Ar = Symbol.for("react.memo"), na = Symbol.for("react.lazy"), In = Symbol.for("react.activity"), lS = Symbol.for("react.memo_cache_sentinel"), qg = Symbol.iterator, Hf = Symbol.for("react.client.reference"), bl = Array.isArray, G = Er.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, bt = tS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, aS = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), hp = [], mp = [], vi = -1, fc = Yt(null), Nf = Yt(null), ln = Yt(null), sc = Yt(null), Bf = 0, xg, oo, Yf, yp, Or, Hh, Nh;
    Ae.__reactDisabledLog = !0;
    var jf, pp, Bh = !1, gp = new (typeof WeakMap == "function" ? WeakMap : Map)(), Na = null, Yu = !1, an = Object.prototype.hasOwnProperty, vp = yl.unstable_scheduleCallback, Yh = yl.unstable_cancelCallback, jh = yl.unstable_shouldYield, qh = yl.unstable_requestPaint, Gl = yl.unstable_now, zr = yl.unstable_getCurrentPriorityLevel, Sp = yl.unstable_ImmediatePriority, xh = yl.unstable_UserBlockingPriority, fo = yl.unstable_NormalPriority, Gg = yl.unstable_LowPriority, Gh = yl.unstable_IdlePriority, bp = yl.log, wg = yl.unstable_setDisableYieldValue, so = null, _l = null, ju = !1, qu = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", kl = Math.clz32 ? Math.clz32 : Ri, Ep = Math.log, wh = Math.LN2, qf = 256, Dr = 262144, xf = 4194304, Rl = 2, Wl = 8, ua = 32, rc = 268435456, zn = Math.random().toString(36).slice(2), Wt = "__reactFiber$" + zn, Oa = "__reactProps$" + zn, Si = "__reactContainer$" + zn, ro = "__reactEvents$" + zn, nS = "__reactListeners$" + zn, Xg = "__reactHandles$" + zn, _r = "__reactResources$" + zn, Gf = "__reactMarker$" + zn, Qg = /* @__PURE__ */ new Set(), xu = {}, wf = {}, Lg = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Xf = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Tp = {}, Xh = {}, Qh = /[\n"\\]/g, Ap = !1, Vg = !1, Rr = !1, l = !1, n = !1, u = !1, c = ["value", "defaultValue"], s = !1, r = /["'&<>\n\t]|^\s|\s$/, m = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), v = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), A = v.concat(["button"]), Y = "dd dt li option optgroup p rp rt".split(" "), L = {
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
    }, K = {}, j = {
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
    }, w = /([A-Z])/g, fe = /^ms-/, ze = /^(?:webkit|moz|o)[A-Z]/, Ht = /^-ms-/, C = /-(.)/g, D = /;\s*$/, N = {}, J = {}, Se = !1, dt = !1, me = new Set(
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
    ]), Pn = {
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
    }, Lh = {}, W2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), F2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), E1 = !1, nn = {}, T1 = /^on./, I2 = /^on[^A-Z]/, P2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), eE = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), tE = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, Op = null, Vh = null, Zh = null, uS = !1, dc = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), iS = !1;
    if (dc)
      try {
        var zp = {};
        Object.defineProperty(zp, "passive", {
          get: function() {
            iS = !0;
          }
        }), window.addEventListener("test", zp, zp), window.removeEventListener("test", zp, zp);
      } catch {
        iS = !1;
      }
    var Qf = null, cS = null, Jg = null, Mr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Kg = Hl(Mr), Dp = ke({}, Mr, { view: 0, detail: 0 }), lE = Hl(Dp), oS, fS, _p, $g = ke({}, Dp, {
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
      getModifierState: Ss,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== _p && (_p && e.type === "mousemove" ? (oS = e.screenX - _p.screenX, fS = e.screenY - _p.screenY) : fS = oS = 0, _p = e), oS);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : fS;
      }
    }), A1 = Hl($g), aE = ke({}, $g, { dataTransfer: 0 }), nE = Hl(aE), uE = ke({}, Dp, { relatedTarget: 0 }), sS = Hl(uE), iE = ke({}, Mr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), cE = Hl(iE), oE = ke({}, Mr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), fE = Hl(oE), sE = ke({}, Mr, { data: 0 }), O1 = Hl(
      sE
    ), rE = O1, dE = {
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
    }, hE = {
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
    }, mE = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, yE = ke({}, Dp, {
      key: function(e) {
        if (e.key) {
          var t = dE[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = vs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? hE[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ss,
      charCode: function(e) {
        return e.type === "keypress" ? vs(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? vs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), pE = Hl(yE), gE = ke({}, $g, {
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
    }), z1 = Hl(gE), vE = ke({}, Dp, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ss
    }), SE = Hl(vE), bE = ke({}, Mr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), EE = Hl(bE), TE = ke({}, $g, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), AE = Hl(TE), OE = ke({}, Mr, {
      newState: 0,
      oldState: 0
    }), zE = Hl(OE), DE = [9, 13, 27, 32], D1 = 229, rS = dc && "CompositionEvent" in window, Rp = null;
    dc && "documentMode" in document && (Rp = document.documentMode);
    var _E = dc && "TextEvent" in window && !Rp, _1 = dc && (!rS || Rp && 8 < Rp && 11 >= Rp), R1 = 32, M1 = String.fromCharCode(R1), C1 = !1, Jh = !1, RE = {
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
    }, Mp = null, Cp = null, U1 = !1;
    dc && (U1 = hd("input") && (!document.documentMode || 9 < document.documentMode));
    var un = typeof Object.is == "function" ? Object.is : md, ME = dc && "documentMode" in document && 11 >= document.documentMode, Kh = null, dS = null, Up = null, hS = !1, $h = {
      animationend: Dc("Animation", "AnimationEnd"),
      animationiteration: Dc("Animation", "AnimationIteration"),
      animationstart: Dc("Animation", "AnimationStart"),
      transitionrun: Dc("Transition", "TransitionRun"),
      transitionstart: Dc("Transition", "TransitionStart"),
      transitioncancel: Dc("Transition", "TransitionCancel"),
      transitionend: Dc("Transition", "TransitionEnd")
    }, mS = {}, H1 = {};
    dc && (H1 = document.createElement("div").style, "AnimationEvent" in window || (delete $h.animationend.animation, delete $h.animationiteration.animation, delete $h.animationstart.animation), "TransitionEvent" in window || delete $h.transitionend.transition);
    var N1 = _c("animationend"), B1 = _c("animationiteration"), Y1 = _c("animationstart"), CE = _c("transitionrun"), UE = _c("transitionstart"), HE = _c("transitioncancel"), j1 = _c("transitionend"), q1 = /* @__PURE__ */ new Map(), yS = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    yS.push("scrollEnd");
    var x1 = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var NE = performance, G1 = function() {
        return NE.now();
      };
    else {
      var BE = Date;
      G1 = function() {
        return BE.now();
      };
    }
    var pS = typeof reportError == "function" ? reportError : function(e) {
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
    }, YE = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", kg = 0, gS = 1, vS = 2, SS = 3, Wg = "– ", Fg = "+ ", w1 = "  ", Ft = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", Gu = "Components ⚛", ot = "Scheduler ⚛", rt = "Blocking", Lf = !1, ho = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: Gu
    }, Vf = {
      start: -0,
      end: -0,
      detail: { devtools: ho }
    }, jE = ["Changed Props", ""], X1 = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", qE = ["Changed Props", X1], Hp = 1, mo = 2, wu = [], kh = 0, bS = 0, Zf = {};
    Object.freeze(Zf);
    var Xu = null, Wh = null, He = 0, xE = 1, We = 2, Ba = 8, bi = 16, GE = 32, Q1 = !1;
    try {
      var L1 = Object.preventExtensions({});
    } catch {
      Q1 = !0;
    }
    var ES = /* @__PURE__ */ new WeakMap(), Fh = [], Ih = 0, Ig = null, Np = 0, Qu = [], Lu = 0, Cr = null, yo = 1, po = "", za = null, It = null, it = !1, hc = !1, eu = null, Jf = null, Vu = !1, TS = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), AS = Yt(null), OS = Yt(null), V1 = {}, Pg = null, Ph = null, em = !1, wE = typeof AbortController < "u" ? AbortController : function() {
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
    }, XE = yl.unstable_scheduleCallback, QE = yl.unstable_NormalPriority, wl = {
      $$typeof: Fn,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Xl = yl.unstable_now, ev = console.createTask ? console.createTask : function() {
      return null;
    }, Bp = 1, tv = 2, ia = -0, Kf = -0, go = -0, vo = null, cn = -1.1, Ur = -0, fl = -0, Te = -1.1, Me = -1.1, nl = null, pl = !1, Hr = -0, mc = -1.1, Yp = null, $f = 0, zS = null, DS = null, Nr = -1.1, jp = null, tm = -1.1, lv = -1.1, So = -0, bo = -1.1, Zu = -1.1, _S = 0, qp = null, Z1 = null, J1 = null, kf = -1.1, Br = null, Wf = -1.1, av = -1.1, K1 = -0, $1 = -0, nv = 0, LE = null, k1 = 0, xp = -1.1, uv = !1, iv = !1, Gp = null, RS = 0, Yr = 0, lm = null, W1 = G.S;
    G.S = function(e, t) {
      if (Zb = Gl(), typeof t == "object" && t !== null && typeof t.then == "function") {
        if (0 > bo && 0 > Zu) {
          bo = Xl();
          var a = Af(), i = Nu();
          (a !== Wf || i !== Br) && (Wf = -1.1), kf = a, Br = i;
        }
        li(e, t);
      }
      W1 !== null && W1(e, t);
    };
    var jr = Yt(null), Ei = {
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
    Ei.recordUnsafeLifecycleWarnings = function(e, t) {
      qr.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && wp.push(e), e.mode & Ba && typeof t.UNSAFE_componentWillMount == "function" && Xp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Qp.push(e), e.mode & Ba && typeof t.UNSAFE_componentWillReceiveProps == "function" && Lp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Vp.push(e), e.mode & Ba && typeof t.UNSAFE_componentWillUpdate == "function" && Zp.push(e));
    }, Ei.flushPendingUnsafeLifecycleWarnings = function() {
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
        var d = X(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = X(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = X(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = X(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = X(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = X(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var cv = /* @__PURE__ */ new Map(), F1 = /* @__PURE__ */ new Set();
    Ei.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & Ba && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !F1.has(e.type) && (i = cv.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], cv.set(a, i)), i.push(e));
    }, Ei.flushLegacyContextWarning = function() {
      cv.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(se(o) || "Component"), F1.add(o.type);
          });
          var i = X(a);
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
    }, Ei.discardPendingWarnings = function() {
      wp = [], Xp = [], Qp = [], Lp = [], Vp = [], Zp = [], cv = /* @__PURE__ */ new Map();
    };
    var I1 = {
      react_stack_bottom_frame: function(e, t, a) {
        var i = Yu;
        Yu = !0;
        try {
          return e(t, a);
        } finally {
          Yu = i;
        }
      }
    }, MS = I1.react_stack_bottom_frame.bind(I1), P1 = {
      react_stack_bottom_frame: function(e) {
        var t = Yu;
        Yu = !0;
        try {
          return e.render();
        } finally {
          Yu = t;
        }
      }
    }, eb = P1.react_stack_bottom_frame.bind(P1), tb = {
      react_stack_bottom_frame: function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          Je(e, e.return, a);
        }
      }
    }, CS = tb.react_stack_bottom_frame.bind(
      tb
    ), lb = {
      react_stack_bottom_frame: function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          Je(e, e.return, f);
        }
      }
    }, ab = lb.react_stack_bottom_frame.bind(
      lb
    ), nb = {
      react_stack_bottom_frame: function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, VE = nb.react_stack_bottom_frame.bind(
      nb
    ), ub = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          Je(e, t, i);
        }
      }
    }, ib = ub.react_stack_bottom_frame.bind(
      ub
    ), cb = {
      react_stack_bottom_frame: function(e) {
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, ZE = cb.react_stack_bottom_frame.bind(cb), ob = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a();
        } catch (i) {
          Je(e, t, i);
        }
      }
    }, JE = ob.react_stack_bottom_frame.bind(ob), fb = {
      react_stack_bottom_frame: function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, KE = fb.react_stack_bottom_frame.bind(fb), am = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), US = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), ov = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), fv = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, xr = null, Jp = !1, nm = null, Kp = 0, Fe = null, HS, sb = HS = !1, rb = {}, db = {}, hb = {};
    Ce = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = se(e), o = i || "null";
        if (!rb[o]) {
          rb[o] = !0, a = a._owner, e = e._debugOwner;
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
    var Gr = Bl(!0), mb = Bl(!1), yb = 0, pb = 1, gb = 2, NS = 3, Ff = !1, vb = !1, BS = null, YS = !1, um = Yt(null), sv = Yt(0), tu = Yt(null), Ju = null, im = 1, $p = 2, Ml = Yt(0), rv = 0, Ku = 1, on = 2, lu = 4, fn = 8, cm, Sb = /* @__PURE__ */ new Set(), bb = /* @__PURE__ */ new Set(), jS = /* @__PURE__ */ new Set(), Eb = /* @__PURE__ */ new Set(), Eo = 0, Ye = null, wt = null, Ql = null, dv = !1, om = !1, wr = !1, hv = 0, kp = 0, To = null, $E = 0, kE = 25, x = null, $u = null, Ao = -1, Wp = !1, Fp = {
      readContext: vt,
      use: ii,
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
    var qS = null, Tb = null, xS = null, Ab = null, yc = null, Ti = null, mv = null;
    qS = {
      readContext: function(e) {
        return vt(e);
      },
      use: ii,
      useCallback: function(e, t) {
        return x = "useCallback", Be(), ui(t), Yd(e, t);
      },
      useContext: function(e) {
        return x = "useContext", Be(), vt(e);
      },
      useEffect: function(e, t) {
        return x = "useEffect", Be(), ui(t), Vc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", Be(), ui(a), Eu(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        x = "useInsertionEffect", Be(), ui(t), Wi(4, on, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", Be(), ui(t), ya(e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", Be(), ui(t);
        var a = G.H;
        G.H = yc;
        try {
          return pa(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", Be();
        var i = G.H;
        G.H = yc;
        try {
          return Io(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(e) {
        return x = "useRef", Be(), Bd(e);
      },
      useState: function(e) {
        x = "useState", Be();
        var t = G.H;
        G.H = yc;
        try {
          return Ji(e);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", Be();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", Be(), af(e, t);
      },
      useTransition: function() {
        return x = "useTransition", Be(), Fi();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", Be(), Po(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", Be(), Ls();
      },
      useFormState: function(e, t) {
        return x = "useFormState", Be(), Hs(), ka(e, t);
      },
      useActionState: function(e, t) {
        return x = "useActionState", Be(), ka(e, t);
      },
      useOptimistic: function(e) {
        return x = "useOptimistic", Be(), Lc(e);
      },
      useHostTransitionStatus: si,
      useMemoCache: Ka,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", Be(), jd();
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", Be(), Xs(e);
      }
    }, Tb = {
      readContext: function(e) {
        return vt(e);
      },
      use: ii,
      useCallback: function(e, t) {
        return x = "useCallback", k(), Yd(e, t);
      },
      useContext: function(e) {
        return x = "useContext", k(), vt(e);
      },
      useEffect: function(e, t) {
        return x = "useEffect", k(), Vc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", k(), Eu(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        x = "useInsertionEffect", k(), Wi(4, on, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", k(), ya(e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", k();
        var a = G.H;
        G.H = yc;
        try {
          return pa(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", k();
        var i = G.H;
        G.H = yc;
        try {
          return Io(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(e) {
        return x = "useRef", k(), Bd(e);
      },
      useState: function(e) {
        x = "useState", k();
        var t = G.H;
        G.H = yc;
        try {
          return Ji(e);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", k();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", k(), af(e, t);
      },
      useTransition: function() {
        return x = "useTransition", k(), Fi();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", k(), Po(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", k(), Ls();
      },
      useActionState: function(e, t) {
        return x = "useActionState", k(), ka(e, t);
      },
      useFormState: function(e, t) {
        return x = "useFormState", k(), Hs(), ka(e, t);
      },
      useOptimistic: function(e) {
        return x = "useOptimistic", k(), Lc(e);
      },
      useHostTransitionStatus: si,
      useMemoCache: Ka,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", k(), jd();
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", k(), Xs(e);
      }
    }, xS = {
      readContext: function(e) {
        return vt(e);
      },
      use: ii,
      useCallback: function(e, t) {
        return x = "useCallback", k(), Qn(e, t);
      },
      useContext: function(e) {
        return x = "useContext", k(), vt(e);
      },
      useEffect: function(e, t) {
        x = "useEffect", k(), zl(2048, fn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", k(), lf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return x = "useInsertionEffect", k(), zl(4, on, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", k(), zl(4, lu, e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", k();
        var a = G.H;
        G.H = Ti;
        try {
          return $t(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", k();
        var i = G.H;
        G.H = Ti;
        try {
          return wc(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return x = "useRef", k(), Tt().memoizedState;
      },
      useState: function() {
        x = "useState", k();
        var e = G.H;
        G.H = Ti;
        try {
          return wc($a);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", k();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", k(), Tu(e, t);
      },
      useTransition: function() {
        return x = "useTransition", k(), L0();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", k(), Qc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", k(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return x = "useFormState", k(), Hs(), $i(e);
      },
      useActionState: function(e) {
        return x = "useActionState", k(), $i(e);
      },
      useOptimistic: function(e, t) {
        return x = "useOptimistic", k(), xs(e, t);
      },
      useHostTransitionStatus: si,
      useMemoCache: Ka,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", k(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", k(), tf(e);
      }
    }, Ab = {
      readContext: function(e) {
        return vt(e);
      },
      use: ii,
      useCallback: function(e, t) {
        return x = "useCallback", k(), Qn(e, t);
      },
      useContext: function(e) {
        return x = "useContext", k(), vt(e);
      },
      useEffect: function(e, t) {
        x = "useEffect", k(), zl(2048, fn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", k(), lf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return x = "useInsertionEffect", k(), zl(4, on, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", k(), zl(4, lu, e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", k();
        var a = G.H;
        G.H = mv;
        try {
          return $t(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", k();
        var i = G.H;
        G.H = mv;
        try {
          return Xc(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return x = "useRef", k(), Tt().memoizedState;
      },
      useState: function() {
        x = "useState", k();
        var e = G.H;
        G.H = mv;
        try {
          return Xc($a);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", k();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", k(), Qe(e, t);
      },
      useTransition: function() {
        return x = "useTransition", k(), tl();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", k(), Qc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", k(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return x = "useFormState", k(), Hs(), ki(e);
      },
      useActionState: function(e) {
        return x = "useActionState", k(), ki(e);
      },
      useOptimistic: function(e, t) {
        return x = "useOptimistic", k(), Gs(e, t);
      },
      useHostTransitionStatus: si,
      useMemoCache: Ka,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", k(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", k(), tf(e);
      }
    }, yc = {
      readContext: function(e) {
        return le(), vt(e);
      },
      use: function(e) {
        return ee(), ii(e);
      },
      useCallback: function(e, t) {
        return x = "useCallback", ee(), Be(), Yd(e, t);
      },
      useContext: function(e) {
        return x = "useContext", ee(), Be(), vt(e);
      },
      useEffect: function(e, t) {
        return x = "useEffect", ee(), Be(), Vc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", ee(), Be(), Eu(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        x = "useInsertionEffect", ee(), Be(), Wi(4, on, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", ee(), Be(), ya(e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", ee(), Be();
        var a = G.H;
        G.H = yc;
        try {
          return pa(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", ee(), Be();
        var i = G.H;
        G.H = yc;
        try {
          return Io(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(e) {
        return x = "useRef", ee(), Be(), Bd(e);
      },
      useState: function(e) {
        x = "useState", ee(), Be();
        var t = G.H;
        G.H = yc;
        try {
          return Ji(e);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", ee(), Be();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", ee(), Be(), af(e, t);
      },
      useTransition: function() {
        return x = "useTransition", ee(), Be(), Fi();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", ee(), Be(), Po(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", ee(), Be(), Ls();
      },
      useFormState: function(e, t) {
        return x = "useFormState", ee(), Be(), ka(e, t);
      },
      useActionState: function(e, t) {
        return x = "useActionState", ee(), Be(), ka(e, t);
      },
      useOptimistic: function(e) {
        return x = "useOptimistic", ee(), Be(), Lc(e);
      },
      useMemoCache: function(e) {
        return ee(), Ka(e);
      },
      useHostTransitionStatus: si,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", Be(), jd();
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", ee(), Be(), Xs(e);
      }
    }, Ti = {
      readContext: function(e) {
        return le(), vt(e);
      },
      use: function(e) {
        return ee(), ii(e);
      },
      useCallback: function(e, t) {
        return x = "useCallback", ee(), k(), Qn(e, t);
      },
      useContext: function(e) {
        return x = "useContext", ee(), k(), vt(e);
      },
      useEffect: function(e, t) {
        x = "useEffect", ee(), k(), zl(2048, fn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", ee(), k(), lf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return x = "useInsertionEffect", ee(), k(), zl(4, on, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", ee(), k(), zl(4, lu, e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", ee(), k();
        var a = G.H;
        G.H = Ti;
        try {
          return $t(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", ee(), k();
        var i = G.H;
        G.H = Ti;
        try {
          return wc(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return x = "useRef", ee(), k(), Tt().memoizedState;
      },
      useState: function() {
        x = "useState", ee(), k();
        var e = G.H;
        G.H = Ti;
        try {
          return wc($a);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", ee(), k();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", ee(), k(), Tu(e, t);
      },
      useTransition: function() {
        return x = "useTransition", ee(), k(), L0();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", ee(), k(), Qc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", ee(), k(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return x = "useFormState", ee(), k(), $i(e);
      },
      useActionState: function(e) {
        return x = "useActionState", ee(), k(), $i(e);
      },
      useOptimistic: function(e, t) {
        return x = "useOptimistic", ee(), k(), xs(e, t);
      },
      useMemoCache: function(e) {
        return ee(), Ka(e);
      },
      useHostTransitionStatus: si,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", k(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", ee(), k(), tf(e);
      }
    }, mv = {
      readContext: function(e) {
        return le(), vt(e);
      },
      use: function(e) {
        return ee(), ii(e);
      },
      useCallback: function(e, t) {
        return x = "useCallback", ee(), k(), Qn(e, t);
      },
      useContext: function(e) {
        return x = "useContext", ee(), k(), vt(e);
      },
      useEffect: function(e, t) {
        x = "useEffect", ee(), k(), zl(2048, fn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", ee(), k(), lf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return x = "useInsertionEffect", ee(), k(), zl(4, on, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", ee(), k(), zl(4, lu, e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", ee(), k();
        var a = G.H;
        G.H = Ti;
        try {
          return $t(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", ee(), k();
        var i = G.H;
        G.H = Ti;
        try {
          return Xc(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return x = "useRef", ee(), k(), Tt().memoizedState;
      },
      useState: function() {
        x = "useState", ee(), k();
        var e = G.H;
        G.H = Ti;
        try {
          return Xc($a);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", ee(), k();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", ee(), k(), Qe(e, t);
      },
      useTransition: function() {
        return x = "useTransition", ee(), k(), tl();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", ee(), k(), Qc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", ee(), k(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return x = "useFormState", ee(), k(), ki(e);
      },
      useActionState: function(e) {
        return x = "useActionState", ee(), k(), ki(e);
      },
      useOptimistic: function(e, t) {
        return x = "useOptimistic", ee(), k(), Gs(e, t);
      },
      useMemoCache: function(e) {
        return ee(), Ka(e);
      },
      useHostTransitionStatus: si,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", k(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", ee(), k(), tf(e);
      }
    };
    var Ob = {}, zb = /* @__PURE__ */ new Set(), Db = /* @__PURE__ */ new Set(), _b = /* @__PURE__ */ new Set(), Rb = /* @__PURE__ */ new Set(), Mb = /* @__PURE__ */ new Set(), Cb = /* @__PURE__ */ new Set(), Ub = /* @__PURE__ */ new Set(), Hb = /* @__PURE__ */ new Set(), Nb = /* @__PURE__ */ new Set(), Bb = /* @__PURE__ */ new Set();
    Object.freeze(Ob);
    var GS = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = aa(e), o = Ol(i);
        o.payload = t, a != null && ($c(a), o.callback = a), t = gu(e, o, i), t !== null && (mu(i, "this.setState()", e), Ne(t, e, i), bn(t, e, i));
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = aa(e), o = Ol(i);
        o.tag = pb, o.payload = t, a != null && ($c(a), o.callback = a), t = gu(e, o, i), t !== null && (mu(i, "this.replaceState()", e), Ne(t, e, i), bn(t, e, i));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = aa(e), i = Ol(a);
        i.tag = gb, t != null && ($c(t), i.callback = t), t = gu(e, i, a), t !== null && (mu(a, "this.forceUpdate()", e), Ne(t, e, a), bn(t, e, a));
      }
    }, fm = null, wS = null, XS = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Ll = !1, Yb = {}, jb = {}, qb = {}, xb = {}, sm = !1, Gb = {}, yv = {}, QS = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, wb = !1, Xb = null;
    Xb = /* @__PURE__ */ new Set();
    var Oo = !1, Vl = !1, LS = !1, Qb = typeof WeakSet == "function" ? WeakSet : Set, ca = null, rm = null, dm = null, Zl = null, Dn = !1, Ai = null, Fl = !1, Ip = 8192, WE = {
      getCacheForType: function(e) {
        var t = vt(wl), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      cacheSignal: function() {
        return vt(wl).controller.signal;
      },
      getOwner: function() {
        return Na;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var Pp = Symbol.for;
      Pp("selector.component"), Pp("selector.has_pseudo_class"), Pp("selector.role"), Pp("selector.test_id"), Pp("selector.text");
    }
    var FE = [], IE = typeof WeakMap == "function" ? WeakMap : Map, oa = 0, Il = 2, au = 4, zo = 0, e0 = 1, Xr = 2, pv = 3, If = 4, gv = 6, Lb = 5, ht = oa, Xt = null, tt = null, Ie = 0, _n = 0, vv = 1, Qr = 2, t0 = 3, Vb = 4, VS = 5, l0 = 6, Sv = 7, ZS = 8, Lr = 9, Nt = _n, nu = null, Pf = !1, hm = !1, JS = !1, pc = 0, sl = zo, es = 0, ts = 0, KS = 0, Rn = 0, Vr = 0, a0 = null, sn = null, bv = !1, Ev = 0, Zb = 0, Jb = 300, Tv = 1 / 0, Kb = 500, n0 = null, El = null, ls = null, Av = 0, $S = 1, kS = 2, $b = 3, as = 0, kb = 1, Wb = 2, Fb = 3, Ib = 4, Ov = 5, Jl = 0, ns = null, mm = null, Oi = 0, WS = 0, FS = -0, IS = null, Pb = null, e2 = null, zi = Av, t2 = null, PE = 50, u0 = 0, PS = null, e1 = !1, zv = !1, eT = 50, Zr = 0, i0 = null, ym = !1, Dv = null, l2 = !1, a2 = /* @__PURE__ */ new Set(), tT = {}, _v = null, pm = null, t1 = !1, l1 = !1, Rv = !1, a1 = !1, us = 0, n1 = {};
    (function() {
      for (var e = 0; e < yS.length; e++) {
        var t = yS[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), Hn(a, "on" + t);
      }
      Hn(N1, "onAnimationEnd"), Hn(B1, "onAnimationIteration"), Hn(Y1, "onAnimationStart"), Hn("dblclick", "onDoubleClick"), Hn("focusin", "onFocus"), Hn("focusout", "onBlur"), Hn(CE, "onTransitionRun"), Hn(UE, "onTransitionStart"), Hn(HE, "onTransitionCancel"), Hn(j1, "onTransitionEnd");
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
    ), u1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(c0)
    ), Mv = "_reactListening" + Math.random().toString(36).slice(2), n2 = !1, u2 = !1, Cv = !1, i2 = !1, Uv = !1, Hv = !1, c2 = !1, Nv = {}, lT = /\r\n?/g, aT = /\u0000|\uFFFD/g, Jr = "http://www.w3.org/1999/xlink", i1 = "http://www.w3.org/XML/1998/namespace", nT = "javascript:throw new Error('React form unexpectedly submitted.')", uT = "suppressHydrationWarning", Kr = "&", Bv = "/&", o0 = "$", f0 = "/$", is = "$?", $r = "$~", gm = "$!", iT = "html", cT = "body", oT = "head", c1 = "F!", o2 = "F", f2 = "loading", fT = "style", Do = 0, vm = 1, Yv = 2, o1 = null, f1 = null, s2 = { dialog: !0, webview: !0 }, s1 = null, s0 = void 0, r2 = typeof setTimeout == "function" ? setTimeout : void 0, sT = typeof clearTimeout == "function" ? clearTimeout : void 0, kr = -1, d2 = typeof Promise == "function" ? Promise : void 0, rT = typeof queueMicrotask == "function" ? queueMicrotask : typeof d2 < "u" ? function(e) {
      return d2.resolve(null).then(e).catch(rg);
    } : r2, r1 = null, Wr = 0, r0 = 1, h2 = 2, m2 = 3, ku = 4, Wu = /* @__PURE__ */ new Map(), y2 = /* @__PURE__ */ new Set(), _o = bt.d;
    bt.d = {
      f: function() {
        var e = _o.f(), t = en();
        return e || t;
      },
      r: function(e) {
        var t = ae(e);
        t !== null && t.tag === 5 && t.type === "form" ? nf(t) : _o.r(e);
      },
      D: function(e) {
        _o.D(e), Iy("dns-prefetch", e, null);
      },
      C: function(e, t) {
        _o.C(e, t), Iy("preconnect", e, t);
      },
      L: function(e, t, a) {
        _o.L(e, t, a);
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
              f = no(e);
              break;
            case "script":
              f = uo(e);
          }
          Wu.has(f) || (e = ke(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), Wu.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            yr(f)
          ) || t === "script" && i.querySelector(pr(f)) || (t = i.createElement("link"), kt(t, "link", e), he(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        _o.m(e, t);
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
              f = uo(e);
          }
          if (!Wu.has(f) && (e = ke({ rel: "modulepreload", href: e }, t), Wu.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(pr(f)))
                  return;
            }
            i = a.createElement("link"), kt(i, "link", e), he(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        _o.X(e, t);
        var a = Sm;
        if (a && e) {
          var i = Re(a).hoistableScripts, o = uo(e), f = i.get(o);
          f || (f = a.querySelector(
            pr(o)
          ), f || (e = ke({ src: e, async: !0 }, t), (t = Wu.get(o)) && tp(e, t), f = a.createElement("script"), he(f), kt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        _o.S(e, t, a);
        var i = Sm;
        if (i && e) {
          var o = Re(i).hoistableStyles, f = no(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Wr, preload: null };
            if (d = i.querySelector(
              yr(f)
            ))
              h.loading = r0 | ku;
            else {
              e = ke(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = Wu.get(f)) && ep(e, a);
              var y = d = i.createElement("link");
              he(y), kt(y, "link", e), y._p = new Promise(function(p, z) {
                y.onload = p, y.onerror = z;
              }), y.addEventListener("load", function() {
                h.loading |= r0;
              }), y.addEventListener("error", function() {
                h.loading |= h2;
              }), h.loading |= ku, Df(d, t, i);
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
        _o.M(e, t);
        var a = Sm;
        if (a && e) {
          var i = Re(a).hoistableScripts, o = uo(e), f = i.get(o);
          f || (f = a.querySelector(
            pr(o)
          ), f || (e = ke({ src: e, async: !0, type: "module" }, t), (t = Wu.get(o)) && tp(e, t), f = a.createElement("script"), he(f), kt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Sm = typeof document > "u" ? null : document, jv = null, dT = 6e4, hT = 800, mT = 500, d1 = 0, h1 = null, qv = null, Fr = aS, d0 = {
      $$typeof: Fn,
      Provider: null,
      Consumer: null,
      _currentValue: Fr,
      _currentValue2: Fr,
      _threadCount: 0
    }, p2 = "%c%s%c", g2 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", v2 = "", xv = " ", yT = Function.prototype.bind, S2 = !1, b2 = null, E2 = null, T2 = null, A2 = null, O2 = null, z2 = null, D2 = null, _2 = null, R2 = null, M2 = null;
    b2 = function(e, t, a, i) {
      t = Q(e, t), t !== null && (a = P(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = ke({}, e.memoizedProps), a = ta(e, 2), a !== null && Ne(a, e, 2));
    }, E2 = function(e, t, a) {
      t = Q(e, t), t !== null && (a = De(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = ke({}, e.memoizedProps), a = ta(e, 2), a !== null && Ne(a, e, 2));
    }, T2 = function(e, t, a, i) {
      t = Q(e, t), t !== null && (a = Oe(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = ke({}, e.memoizedProps), a = ta(e, 2), a !== null && Ne(a, e, 2));
    }, A2 = function(e, t, a) {
      e.pendingProps = P(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = ta(e, 2), t !== null && Ne(t, e, 2);
    }, O2 = function(e, t) {
      e.pendingProps = De(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = ta(e, 2), t !== null && Ne(t, e, 2);
    }, z2 = function(e, t, a) {
      e.pendingProps = Oe(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = ta(e, 2), t !== null && Ne(t, e, 2);
    }, D2 = function(e) {
      var t = ta(e, 2);
      t !== null && Ne(t, e, 2);
    }, _2 = function(e) {
      var t = Co(), a = ta(e, t);
      a !== null && Ne(a, e, t);
    }, R2 = function(e) {
      ct = e;
    }, M2 = function(e) {
      qe = e;
    };
    var Gv = !0, wv = null, m1 = !1, cs = null, os = null, fs = null, h0 = /* @__PURE__ */ new Map(), m0 = /* @__PURE__ */ new Map(), ss = [], pT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Xv = null;
    if (Wn.prototype.render = rp.prototype.render = function(e) {
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
      var i = t.current, o = aa(i);
      Dh(i, o, a, t, null, null);
    }, Wn.prototype.unmount = rp.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (ht & (Il | au)) !== oa && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), Dh(e.current, 2, null, e, null, null), en(), t[Si] = null;
      }
    }, Wn.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Mi();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < ss.length && t !== 0 && t < ss[a].priority; a++) ;
        ss.splice(a, 0, e), a === 0 && sp(e);
      }
    }, function() {
      var e = Er.version;
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
      return e.overrideHookState = b2, e.overrideHookStateDeletePath = E2, e.overrideHookStateRenamePath = T2, e.overrideProps = A2, e.overridePropsDeletePath = O2, e.overridePropsRenamePath = z2, e.scheduleUpdate = D2, e.scheduleRetry = _2, e.setErrorHandler = R2, e.setSuspenseHandler = M2, e.scheduleRefresh = Ve, e.scheduleRoot = ie, e.setRefreshHandler = _t, e.getCurrentFiber = Ut, rs(e);
    }() && dc && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var C2 = window.location.protocol;
      /^(https?|file):$/.test(C2) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (C2 === "file:" ? `
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
      ) : typeof t == "object" && t !== null && t.$$typeof === On && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = Sr(
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
        Yg
      ), e[Si] = t.current, nc(e), new rp(t);
    }, S0.hydrateRoot = function(e, t, a) {
      if (!st(e))
        throw Error("Target container is not a DOM element.");
      dp(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = Gd, d = wd, h = iy, y = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), t = Sr(
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
        Yg
      ), t.context = Ug(null), a = t.current, i = aa(a), i = rn(i), o = Ol(i), o.callback = null, gu(a, o, i), mu(i, "hydrateRoot()", null), a = i, t.current.lanes = a, Mn(t, a), Ma(t), e[Si] = t.current, nc(e), new Wn(t);
    }, S0.version = "19.2.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), S0;
}
function k2() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k2);
    } catch (Q) {
      console.error(Q);
    }
  }
}
process.env.NODE_ENV === "production" ? (k2(), S1.exports = HT()) : S1.exports = NT();
var BT = S1.exports;
const YT = /* @__PURE__ */ V2(BT), jT = "0.1.0", qT = {
  version: jT
}, xT = qT.version, GT = {
  WIDGET: "WIDGET"
}, wT = {
  ROUTE: "plugin-route",
  COMMAND: "plugin-command",
  WIDGET: "plugin-widget"
}, L2 = "plugin-id", b1 = /* @__PURE__ */ new Map();
function XT(Q, P) {
  var Oe;
  return (Oe = b1.get(Q)) == null ? void 0 : Oe.get(P);
}
function QT(Q) {
  let P = b1.get(Q);
  return P || (P = /* @__PURE__ */ new Map(), b1.set(Q, P)), P;
}
function LT(Q) {
  const P = Q.plugin.type, Oe = wT[P];
  QT(P).set(Q.plugin.id, Q.plugin);
  class H extends HTMLElement {
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
      const le = this.getAttribute(L2);
      if (!le)
        throw new Error(`Missing ${L2} attribute!`);
      const $ = XT(P, le);
      if (!$)
        throw new Error(
          `Plugin not registered for type "${P}" and id "${le}"`
        );
      if (this.shadow = this.shadowRoot ?? this.attachShadow({ mode: "open" }), this.container = document.createElement("div"), this.shadow.replaceChildren(this.container), this.root = YT.createRoot(this.container), this.root.render(zT(ee, AT.createElement($.Root))), $.activate) {
        const Ce = $.activate(ee);
        typeof Ce == "function" && (this.cleanup = Ce);
      }
    }
    disconnectedCallback() {
      var ct, ee, le;
      (ct = this.cleanup) == null || ct.call(this), this.cleanup = void 0, (ee = this.root) == null || ee.unmount(), this.root = void 0, (le = this.container) == null || le.remove(), this.container = void 0, this.shadow = void 0;
    }
  }
  customElements.get(Oe) || customElements.define(Oe, H);
}
function VT() {
  const Q = DT(), P = _T(), [Oe, H] = Mo.useState("");
  return /* @__PURE__ */ Ir.jsxs("div", { style: { padding: 10, border: "1px solid #ccc" }, children: [
    /* @__PURE__ */ Ir.jsx("h3", { children: "Esempio di Plugin" }),
    /* @__PURE__ */ Ir.jsxs("p", { children: [
      "Hello ",
      P.displayName
    ] }),
    /* @__PURE__ */ Ir.jsxs("div", { children: [
      /* @__PURE__ */ Ir.jsx("input", { value: Oe, onChange: (De) => H(De.target.value) }),
      /* @__PURE__ */ Ir.jsx(
        "button",
        {
          onClick: () => Q.toast.show(`Hello from plugin:${Oe}`),
          type: "button",
          children: "Send message"
        }
      )
    ] })
  ] });
}
const ZT = {
  type: GT.WIDGET,
  id: "acme.example-plugin",
  contractVersion: xT,
  Root: VT,
  activate(Q) {
    return Q.services.toast.show("Plugin activated"), () => Q.services.toast.show("Plugin deactivated");
  }
};
LT({
  plugin: ZT
});
