var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (a) {
  var b = 0;
  return function () {
    return b < a.length ? {
      done: !1,
      value: a[b++]
    } : {
      done: !0
    }
  }
};
$jscomp.arrayIterator = function (a) {
  return {
    next: $jscomp.arrayIteratorImpl(a)
  }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.INSTRUMENT_ASYNC_CONTEXT = !0;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || typeof Object.defineProperties == "function" ? Object.defineProperty : function (a, b, c) {
  if (a == Array.prototype || a == Object.prototype) return a;
  a[b] = c.value;
  return a
};
$jscomp.getGlobal = function (a) {
  a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
  for (var b = 0; b < a.length; ++b) {
    var c = a[b];
    if (c && c.Math == Math) return c
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = typeof Symbol === "function" && typeof Symbol("x") === "symbol";
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
$jscomp.polyfill = function (a, b, c, d) {
  b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, c, d) : $jscomp.polyfillUnisolated(a, b, c, d))
};
$jscomp.polyfillUnisolated = function (a, b) {
  var c = $jscomp.global;
  a = a.split(".");
  for (var d = 0; d < a.length - 1; d++) {
    var f = a[d];
    if (!(f in c)) return;
    c = c[f]
  }
  a = a[a.length - 1];
  d = c[a];
  b = b(d);
  b != d && b != null && $jscomp.defineProperty(c, a, {
    configurable: !0,
    writable: !0,
    value: b
  })
};
$jscomp.polyfillIsolated = function (a, b, c) {
  var d = a.split("."),
    f = d.length === 1;
  a = d[0];
  a = !f && a in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var g = 0; g < d.length - 1; g++) {
    var k = d[g];
    if (!(k in a)) return;
    a = a[k]
  }
  d = d[d.length - 1];
  c = $jscomp.IS_SYMBOL_NATIVE && c === "es6" ? a[d] : null;
  b = b(c);
  b != null && (f ? $jscomp.defineProperty($jscomp.polyfills, d, {
    configurable: !0,
    writable: !0,
    value: b
  }) : b !== c && ($jscomp.propertyToPolyfillSymbol[d] === void 0 && (f = Math.random() * 1E9 >>> 0, $jscomp.propertyToPolyfillSymbol[d] = $jscomp.IS_SYMBOL_NATIVE ?
    $jscomp.global.Symbol(d) : $jscomp.POLYFILL_PREFIX + f + "$" + d), f = $jscomp.propertyToPolyfillSymbol[d], $jscomp.defineProperty(a, f, {
      configurable: !0,
      writable: !0,
      value: b
    })))
};
$jscomp.initSymbol = function () { };
$jscomp.polyfill("Symbol", function (a) {
  if (a) return a;
  var b = function (g, k) {
    this.$jscomp$symbol$id_ = g;
    $jscomp.defineProperty(this, "description", {
      configurable: !0,
      writable: !0,
      value: k
    })
  };
  b.prototype.toString = function () {
    return this.$jscomp$symbol$id_
  };
  a = Math.random() * 1E9 >>> 0;
  var c = "jscomp_symbol_" + a + "_",
    d = 0,
    f = function (g) {
      if (this instanceof f) throw new TypeError("Symbol is not a constructor");
      return new b(c + (g || "") + "_" + d++, g)
    };
  return f
}, "es6", "es3");
$jscomp.polyfill("Symbol.iterator", function (a) {
  if (a) return a;
  a = Symbol("Symbol.iterator");
  for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
    var d = $jscomp.global[b[c]];
    typeof d === "function" && typeof d.prototype[a] != "function" && $jscomp.defineProperty(d.prototype, a, {
      configurable: !0,
      writable: !0,
      value: function () {
        return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
      }
    })
  }
  return a
}, "es6",
  "es3");
$jscomp.iteratorPrototype = function (a) {
  a = {
    next: a
  };
  a[Symbol.iterator] = function () {
    return this
  };
  return a
};
$jscomp.createTemplateTagFirstArg = function (a) {
  return $jscomp.createTemplateTagFirstArgWithRaw(a, a)
};
$jscomp.createTemplateTagFirstArgWithRaw = function (a, b) {
  a.raw = b;
  Object.freeze && (Object.freeze(a), Object.freeze(b));
  return a
};
$jscomp.underscoreProtoCanBeSet = function () {
  var a = {
    a: !0
  },
    b = {};
  try {
    return b.__proto__ = a, b.a
  } catch (c) { }
  return !1
};
$jscomp.setPrototypeOf = $jscomp.TRUST_ES6_POLYFILLS && typeof Object.setPrototypeOf == "function" ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function (a, b) {
  a.__proto__ = b;
  if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
  return a
} : null;
$jscomp.makeIterator = function (a) {
  var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
  if (b) return b.call(a);
  if (typeof a.length == "number") return $jscomp.arrayIterator(a);
  throw Error(String(a) + " is not an iterable or ArrayLike");
};
$jscomp.generator = {};
$jscomp.generator.ensureIteratorResultIsObject_ = function (a) {
  if (!(a instanceof Object)) throw new TypeError("Iterator result " + a + " is not an object");
};
$jscomp.generator.Context = function () {
  this.isRunning_ = !1;
  this.yieldAllIterator_ = null;
  this.yieldResult = void 0;
  this.nextAddress = 1;
  this.finallyAddress_ = this.catchAddress_ = 0;
  this.abruptCompletion_ = null
};
$jscomp.generator.Context.prototype.start_ = function () {
  if (this.isRunning_) throw new TypeError("Generator is already running");
  this.isRunning_ = !0
};
$jscomp.generator.Context.prototype.stop_ = function () {
  this.isRunning_ = !1
};
$jscomp.generator.Context.prototype.jumpToErrorHandler_ = function () {
  this.nextAddress = this.catchAddress_ || this.finallyAddress_
};
$jscomp.generator.Context.prototype.next_ = function (a) {
  this.yieldResult = a
};
$jscomp.generator.Context.prototype.throw_ = function (a) {
  this.abruptCompletion_ = {
    exception: a,
    isException: !0
  };
  this.jumpToErrorHandler_()
};
$jscomp.generator.Context.prototype.return = function (a) {
  this.abruptCompletion_ = {
    return: a
  };
  this.nextAddress = this.finallyAddress_
};
$jscomp.generator.Context.prototype.yield = function (a, b) {
  this.nextAddress = b;
  return {
    value: a
  }
};
$jscomp.generator.Context.prototype.jumpTo = function (a) {
  this.nextAddress = a
};
$jscomp.generator.Context.prototype.jumpToEnd = function () {
  this.nextAddress = 0
};
$jscomp.generator.Context.PropertyIterator = function (a) {
  this.properties_ = [];
  for (var b in a) this.properties_.push(b);
  this.properties_.reverse()
};
$jscomp.generator.Engine_ = function (a) {
  this.context_ = new $jscomp.generator.Context;
  this.program_ = a
};
$jscomp.generator.Engine_.prototype.next_ = function (a) {
  this.context_.start_();
  if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_.next, a, this.context_.next_);
  this.context_.next_(a);
  return this.nextStep_()
};
$jscomp.generator.Engine_.prototype.return_ = function (a) {
  this.context_.start_();
  var b = this.context_.yieldAllIterator_;
  if (b) return b = "return" in b ? b["return"] : function (c) {
    return {
      value: c,
      done: !0
    }
  }, this.yieldAllStep_(b, a, this.context_.return);
  this.context_.return(a);
  return this.nextStep_()
};
$jscomp.generator.Engine_.prototype.throw_ = function (a) {
  this.context_.start_();
  if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"], a, this.context_.next_);
  this.context_.throw_(a);
  return this.nextStep_()
};
$jscomp.generator.Engine_.prototype.yieldAllStep_ = function (a, b, c) {
  try {
    var d = a.call(this.context_.yieldAllIterator_, b);
    $jscomp.generator.ensureIteratorResultIsObject_(d);
    if (!d.done) return this.context_.stop_(), d;
    var f = d.value
  } catch (g) {
    return this.context_.yieldAllIterator_ = null, this.context_.throw_(g), this.nextStep_()
  }
  this.context_.yieldAllIterator_ = null;
  c.call(this.context_, f);
  return this.nextStep_()
};
$jscomp.generator.Engine_.prototype.nextStep_ = function () {
  for (; this.context_.nextAddress;) try {
    var a = this.program_(this.context_);
    if (a) return this.context_.stop_(), {
      value: a.value,
      done: !1
    }
  } catch (b) {
    this.context_.yieldResult = void 0, this.context_.throw_(b)
  }
  this.context_.stop_();
  if (this.context_.abruptCompletion_) {
    a = this.context_.abruptCompletion_;
    this.context_.abruptCompletion_ = null;
    if (a.isException) throw a.exception;
    return {
      value: a.return,
      done: !0
    }
  }
  return {
    value: void 0,
    done: !0
  }
};
$jscomp.generator.Generator_ = function (a) {
  this.next = function (b) {
    return a.next_(b)
  };
  this.throw = function (b) {
    return a.throw_(b)
  };
  this.return = function (b) {
    return a.return_(b)
  };
  this[Symbol.iterator] = function () {
    return this
  }
};
$jscomp.generator.createGenerator = function (a, b) {
  b = new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(b));
  $jscomp.setPrototypeOf && a.prototype && $jscomp.setPrototypeOf(b, a.prototype);
  return b
};
$jscomp.asyncExecutePromiseGenerator = function (a) {
  function b(d) {
    return a.next(d)
  }

  function c(d) {
    return a.throw(d)
  }
  return new Promise(function (d, f) {
    function g(k) {
      k.done ? d(k.value) : Promise.resolve(k.value).then(b, c).then(g, f)
    }
    g(a.next())
  })
};
$jscomp.asyncExecutePromiseGeneratorFunction = function (a) {
  return $jscomp.asyncExecutePromiseGenerator(a())
};
$jscomp.asyncExecutePromiseGeneratorProgram = function (a) {
  return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a)))
};
$jscomp.polyfill("Promise", function (a) {
  function b() {
    this.batch_ = null
  }

  function c(e) {
    return e instanceof g ? e : new g(function (h) {
      h(e)
    })
  }
  if (a && (!($jscomp.FORCE_POLYFILL_PROMISE || $jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION && typeof $jscomp.global.PromiseRejectionEvent === "undefined") || !$jscomp.global.Promise || $jscomp.global.Promise.toString().indexOf("[native code]") === -1)) return a;
  b.prototype.asyncExecute = function (e) {
    if (this.batch_ == null) {
      this.batch_ = [];
      var h = this;
      this.asyncExecuteFunction(function () {
        h.executeBatch_()
      })
    }
    this.batch_.push(e)
  };
  var d = $jscomp.global.setTimeout;
  b.prototype.asyncExecuteFunction = function (e) {
    d(e, 0)
  };
  b.prototype.executeBatch_ = function () {
    for (; this.batch_ && this.batch_.length;) {
      var e = this.batch_;
      this.batch_ = [];
      for (var h = 0; h < e.length; ++h) {
        var l = e[h];
        e[h] = null;
        try {
          l()
        } catch (m) {
          this.asyncThrow_(m)
        }
      }
    }
    this.batch_ = null
  };
  b.prototype.asyncThrow_ = function (e) {
    this.asyncExecuteFunction(function () {
      throw e;
    })
  };
  var f = {
    PENDING: 0,
    FULFILLED: 1,
    REJECTED: 2
  },
    g = function (e) {
      this.state_ = f.PENDING;
      this.result_ = void 0;
      this.onSettledCallbacks_ = [];
      this.isRejectionHandled_ = !1;
      var h = this.createResolveAndReject_();
      try {
        e(h.resolve, h.reject)
      } catch (l) {
        h.reject(l)
      }
    };
  g.prototype.createResolveAndReject_ = function () {
    function e(m) {
      return function (n) {
        l || (l = !0, m.call(h, n))
      }
    }
    var h = this,
      l = !1;
    return {
      resolve: e(this.resolveTo_),
      reject: e(this.reject_)
    }
  };
  g.prototype.resolveTo_ = function (e) {
    if (e === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));
    else if (e instanceof g) this.settleSameAsPromise_(e);
    else {
      a: switch (typeof e) {
        case "object":
          var h =
            e != null;
          break a;
        case "function":
          h = !0;
          break a;
        default:
          h = !1
      }
      h ? this.resolveToNonPromiseObj_(e) : this.fulfill_(e)
    }
  };
  g.prototype.resolveToNonPromiseObj_ = function (e) {
    var h = void 0;
    try {
      h = e.then
    } catch (l) {
      this.reject_(l);
      return
    }
    typeof h == "function" ? this.settleSameAsThenable_(h, e) : this.fulfill_(e)
  };
  g.prototype.reject_ = function (e) {
    this.settle_(f.REJECTED, e)
  };
  g.prototype.fulfill_ = function (e) {
    this.settle_(f.FULFILLED, e)
  };
  g.prototype.settle_ = function (e, h) {
    if (this.state_ != f.PENDING) throw Error("Cannot settle(" + e +
      ", " + h + "): Promise already settled in state" + this.state_);
    this.state_ = e;
    this.result_ = h;
    this.state_ === f.REJECTED && this.scheduleUnhandledRejectionCheck_();
    this.executeOnSettledCallbacks_()
  };
  g.prototype.scheduleUnhandledRejectionCheck_ = function () {
    var e = this;
    d(function () {
      if (e.notifyUnhandledRejection_()) {
        var h = $jscomp.global.console;
        typeof h !== "undefined" && h.error(e.result_)
      }
    }, 1)
  };
  g.prototype.notifyUnhandledRejection_ = function () {
    if (this.isRejectionHandled_) return !1;
    var e = $jscomp.global.CustomEvent,
      h =
        $jscomp.global.Event,
      l = $jscomp.global.dispatchEvent;
    if (typeof l === "undefined") return !0;
    typeof e === "function" ? e = new e("unhandledrejection", {
      cancelable: !0
    }) : typeof h === "function" ? e = new h("unhandledrejection", {
      cancelable: !0
    }) : (e = $jscomp.global.document.createEvent("CustomEvent"), e.initCustomEvent("unhandledrejection", !1, !0, e));
    e.promise = this;
    e.reason = this.result_;
    return l(e)
  };
  g.prototype.executeOnSettledCallbacks_ = function () {
    if (this.onSettledCallbacks_ != null) {
      for (var e = 0; e < this.onSettledCallbacks_.length; ++e) k.asyncExecute(this.onSettledCallbacks_[e]);
      this.onSettledCallbacks_ = null
    }
  };
  var k = new b;
  g.prototype.settleSameAsPromise_ = function (e) {
    var h = this.createResolveAndReject_();
    e.callWhenSettled_(h.resolve, h.reject)
  };
  g.prototype.settleSameAsThenable_ = function (e, h) {
    var l = this.createResolveAndReject_();
    try {
      e.call(h, l.resolve, l.reject)
    } catch (m) {
      l.reject(m)
    }
  };
  g.prototype.then = function (e, h) {
    function l(p, q) {
      return typeof p == "function" ? function (r) {
        try {
          m(p(r))
        } catch (t) {
          n(t)
        }
      } : q
    }
    var m, n, u = new g(function (p, q) {
      m = p;
      n = q
    });
    this.callWhenSettled_(l(e, m), l(h, n));
    return u
  };
  g.prototype.catch = function (e) {
    return this.then(void 0, e)
  };
  g.prototype.callWhenSettled_ = function (e, h) {
    function l() {
      switch (m.state_) {
        case f.FULFILLED:
          e(m.result_);
          break;
        case f.REJECTED:
          h(m.result_);
          break;
        default:
          throw Error("Unexpected state: " + m.state_);
      }
    }
    var m = this;
    this.onSettledCallbacks_ == null ? k.asyncExecute(l) : this.onSettledCallbacks_.push(l);
    this.isRejectionHandled_ = !0
  };
  g.resolve = c;
  g.reject = function (e) {
    return new g(function (h, l) {
      l(e)
    })
  };
  g.race = function (e) {
    return new g(function (h, l) {
      for (var m =
        $jscomp.makeIterator(e), n = m.next(); !n.done; n = m.next()) c(n.value).callWhenSettled_(h, l)
    })
  };
  g.all = function (e) {
    var h = $jscomp.makeIterator(e),
      l = h.next();
    return l.done ? c([]) : new g(function (m, n) {
      function u(r) {
        return function (t) {
          p[r] = t;
          q--;
          q == 0 && m(p)
        }
      }
      var p = [],
        q = 0;
      do p.push(void 0), q++, c(l.value).callWhenSettled_(u(p.length - 1), n), l = h.next(); while (!l.done)
    })
  };
  return g
}, "es6", "es3");
$jscomp.polyfill("Object.setPrototypeOf", function (a) {
  return a || $jscomp.setPrototypeOf
}, "es6", "es5");
$jscomp.owns = function (a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
};
$jscomp.assign = $jscomp.TRUST_ES6_POLYFILLS && typeof Object.assign == "function" ? Object.assign : function (a, b) {
  for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c];
    if (d)
      for (var f in d) $jscomp.owns(d, f) && (a[f] = d[f])
  }
  return a
};
$jscomp.objectCreate = $jscomp.ASSUME_ES5 || typeof Object.create == "function" ? Object.create : function (a) {
  var b = function () { };
  b.prototype = a;
  return new b
};
$jscomp.inherits = function (a, b) {
  a.prototype = $jscomp.objectCreate(b.prototype);
  a.prototype.constructor = a;
  if ($jscomp.setPrototypeOf) {
    var c = $jscomp.setPrototypeOf;
    c(a, b)
  } else
    for (c in b)
      if (c != "prototype")
        if (Object.defineProperties) {
          var d = Object.getOwnPropertyDescriptor(b, c);
          d && Object.defineProperty(a, c, d)
        } else a[c] = b[c];
  a.superClass_ = b.prototype
};
$jscomp.getConstructImplementation = function () {
  function a() {
    function f() { }

    function g() { }
    new f;
    Reflect.construct(f, [], g);
    return new f instanceof f
  }

  function b(f, g, k) {
    k === void 0 && (k = f);
    k = k.prototype || Object.prototype;
    k = $jscomp.objectCreate(k);
    var e = Function.prototype.apply;
    return (f = e.call(f, k, g)) || k
  }
  if ($jscomp.TRUST_ES6_POLYFILLS && typeof Reflect != "undefined" && Reflect.construct) {
    if (a()) return Reflect.construct;
    var c = Reflect.construct,
      d = function (f, g, k) {
        f = c(f, g);
        k && Reflect.setPrototypeOf(f, k.prototype);
        return f
      };
    return d
  }
  return b
};
$jscomp.construct = {
  valueOf: $jscomp.getConstructImplementation
}.valueOf();
$jscomp.polyfill("Reflect", function (a) {
  return a ? a : {}
}, "es6", "es3");
$jscomp.polyfill("Reflect.construct", function () {
  return $jscomp.construct
}, "es6", "es3");
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var goog = goog || {};
goog.global = this || self;
goog.exportPath_ = function (a, b, c, d) {
  a = a.split(".");
  d = d || goog.global;
  a[0] in d || typeof d.execScript == "undefined" || d.execScript("var " + a[0]);
  for (var f; a.length && (f = a.shift());)
    if (a.length || b === void 0) d = d[f] && d[f] !== Object.prototype[f] ? d[f] : d[f] = {};
    else if (!c && goog.isObject(b) && goog.isObject(d[f]))
      for (var g in b) b.hasOwnProperty(g) && (d[f][g] = b[g]);
    else d[f] = b
};
goog.define = function (a, b) {
  return a = b
};
goog.FEATURESET_YEAR = 2012;
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.TRUSTED_SITE = !0;
goog.DISALLOW_TEST_ONLY_CODE = !goog.DEBUG;
goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1;
goog.readFlagInternalDoNotUseOrElse = function (a, b) {
  var c = goog.getObjectByName(goog.FLAGS_OBJECT_);
  a = c && c[a];
  return a != null ? a : b
};
goog.FLAGS_OBJECT_ = "CLOSURE_FLAGS";
goog.FLAGS_STAGING_DEFAULT = !0;
goog.readToggleInternalDoNotCallDirectly = function (a) {
  var b = typeof CLOSURE_TOGGLE_ORDINALS === "object" ? CLOSURE_TOGGLE_ORDINALS : void 0;
  a = b && b[a];
  return typeof a !== "number" ? !!a : !!(goog.TOGGLES_[Math.floor(a / 30)] & 1 << a % 30)
};
goog.TOGGLE_VAR_ = "_F_toggles";
goog.TOGGLES_ = goog.global[goog.TOGGLE_VAR_] || [];
goog.LEGACY_NAMESPACE_OBJECT_ = goog.global;
goog.provide = function (a) {
  if (goog.isInModuleLoader_()) throw Error("goog.provide cannot be used within a module.");
  goog.constructNamespace_(a)
};
goog.constructNamespace_ = function (a, b, c) {
  goog.exportPath_(a, b, c, goog.LEGACY_NAMESPACE_OBJECT_)
};
goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
goog.getScriptNonce_ = function (a) {
  a = (a || goog.global).document;
  return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && goog.NONCE_PATTERN_.test(a) ? a : ""
};
goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module = function (a) {
  if (typeof a !== "string" || !a || a.search(goog.VALID_MODULE_RE_) == -1) throw Error("Invalid module identifier");
  if (!goog.isInGoogModuleLoader_()) throw Error("Module " + a + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
  if (goog.moduleLoaderState_.moduleName) throw Error("goog.module may only be called once per module.");
  goog.moduleLoaderState_.moduleName = a
};
goog.module.get = function () {
  return null
};
goog.module.getInternal_ = function () {
  return null
};
goog.requireDynamic = function () {
  return null
};
goog.importHandler_ = null;
goog.uncompiledChunkIdHandler_ = null;
goog.setImportHandlerInternalDoNotCallOrElse = function (a) {
  goog.importHandler_ = a
};
goog.setUncompiledChunkIdHandlerInternalDoNotCallOrElse = function (a) {
  goog.uncompiledChunkIdHandler_ = a
};
goog.maybeRequireFrameworkInternalOnlyDoNotCallOrElse = function () { };
goog.ModuleType = {
  ES6: "es6",
  GOOG: "goog"
};
goog.moduleLoaderState_ = null;
goog.isInModuleLoader_ = function () {
  return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_()
};
goog.isInGoogModuleLoader_ = function () {
  return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG
};
goog.isInEs6ModuleLoader_ = function () {
  var a = !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6;
  return a ? !0 : (a = goog.LEGACY_NAMESPACE_OBJECT_.$jscomp) ? typeof a.getCurrentModulePath != "function" ? !1 : !!a.getCurrentModulePath() : !1
};
goog.module.declareLegacyNamespace = function () {
  goog.moduleLoaderState_.declareLegacyNamespace = !0
};
goog.declareModuleId = function (a) {
  if (goog.moduleLoaderState_) goog.moduleLoaderState_.moduleName = a;
  else {
    var b = goog.LEGACY_NAMESPACE_OBJECT_.$jscomp;
    if (!b || typeof b.getCurrentModulePath != "function") throw Error('Module with namespace "' + a + '" has been loaded incorrectly.');
    b = b.require(b.getCurrentModulePath());
    goog.loadedModules_[a] = {
      exports: b,
      type: goog.ModuleType.ES6,
      moduleId: a
    }
  }
};
goog.setTestOnly = function (a) {
  if (goog.DISALLOW_TEST_ONLY_CODE) throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
};
goog.forwardDeclare = function () { };
goog.getObjectByName = function (a, b) {
  a = a.split(".");
  b = b || goog.global;
  for (var c = 0; c < a.length; c++)
    if (b = b[a[c]], b == null) return null;
  return b
};
goog.addDependency = function () { };
goog.ENABLE_DEBUG_LOADER = !1;
goog.logToConsole_ = function (a) {
  goog.global.console && goog.global.console.error(a)
};
goog.require = function () { };
goog.requireType = function () {
  return {}
};
goog.basePath = "";
goog.abstractMethod = function () {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function (a) {
  a.instance_ = void 0;
  a.getInstance = function () {
    if (a.instance_) return a.instance_;
    goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a);
    return a.instance_ = new a
  }
};
goog.instantiatedSingletons_ = [];
goog.LOAD_MODULE_USING_EVAL = !0;
goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
goog.loadedModules_ = {};
goog.DEPENDENCIES_ENABLED = !1;
goog.ASSUME_ES_MODULES_TRANSPILED = !1;
goog.TRUSTED_TYPES_POLICY_NAME = "goog";
goog.hasBadLetScoping = null;
goog.loadModule = function (a) {
  var b = goog.moduleLoaderState_;
  try {
    goog.moduleLoaderState_ = {
      moduleName: "",
      declareLegacyNamespace: !1,
      type: goog.ModuleType.GOOG
    };
    var c = {},
      d = c;
    if (typeof a === "function") d = a.call(void 0, d);
    else if (typeof a === "string") d = goog.loadModuleFromSource_.call(void 0, d, a);
    else throw Error("Invalid module definition");
    var f = goog.moduleLoaderState_.moduleName;
    if (typeof f === "string" && f) {
      goog.moduleLoaderState_.declareLegacyNamespace ? (a = c !== d, goog.constructNamespace_(f, d, a)) : goog.SEAL_MODULE_EXPORTS &&
        Object.seal && typeof d == "object" && d != null && Object.seal(d);
      var g = {
        exports: d,
        type: goog.ModuleType.GOOG,
        moduleId: goog.moduleLoaderState_.moduleName
      };
      goog.loadedModules_[f] = g
    } else throw Error('Invalid module name "' + f + '"');
  } finally {
    goog.moduleLoaderState_ = b
  }
};
goog.loadModuleFromSource_ = function (a) {
  eval(goog.CLOSURE_EVAL_PREFILTER_.createScript(arguments[1]));
  return a
};
goog.normalizePath_ = function (a) {
  a = a.split("/");
  for (var b = 0; b < a.length;) a[b] == "." ? a.splice(b, 1) : b && a[b] == ".." && a[b - 1] && a[b - 1] != ".." ? a.splice(--b, 2) : b++;
  return a.join("/")
};
goog.loadFileSync_ = function (a) {
  if (goog.global.CLOSURE_LOAD_FILE_SYNC) return goog.global.CLOSURE_LOAD_FILE_SYNC(a);
  try {
    var b = new goog.global.XMLHttpRequest;
    b.open("get", a, !1);
    b.send();
    return b.status == 0 || b.status == 200 ? b.responseText : null
  } catch (c) {
    return null
  }
};
goog.typeOf = function (a) {
  var b = typeof a;
  return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
};
goog.isArrayLike = function (a) {
  var b = goog.typeOf(a);
  return b == "array" || b == "object" && typeof a.length == "number"
};
goog.isDateLike = function (a) {
  return goog.isObject(a) && typeof a.getFullYear == "function"
};
goog.isObject = function (a) {
  var b = typeof a;
  return b == "object" && a != null || b == "function"
};
goog.getUid = function (a) {
  return Object.prototype.hasOwnProperty.call(a, goog.UID_PROPERTY_) && a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_)
};
goog.hasUid = function (a) {
  return !!a[goog.UID_PROPERTY_]
};
goog.removeUid = function (a) {
  a !== null && "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);
  try {
    delete a[goog.UID_PROPERTY_]
  } catch (b) { }
};
goog.UID_PROPERTY_ = "closure_uid_" + (Math.random() * 1E9 >>> 0);
goog.uidCounter_ = 0;
goog.cloneObject = function (a) {
  var b = goog.typeOf(a);
  if (b == "object" || b == "array") {
    if (typeof a.clone === "function") return a.clone();
    if (typeof Map !== "undefined" && a instanceof Map) return new Map(a);
    if (typeof Set !== "undefined" && a instanceof Set) return new Set(a);
    b = b == "array" ? [] : {};
    for (var c in a) b[c] = goog.cloneObject(a[c]);
    return b
  }
  return a
};
goog.bindNative_ = function (a, b, c) {
  return a.call.apply(a.bind, arguments)
};
goog.bindJs_ = function (a, b, c) {
  if (!a) throw Error();
  if (arguments.length > 2) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () {
      var f = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(f, d);
      return a.apply(b, f)
    }
  }
  return function () {
    return a.apply(b, arguments)
  }
};
goog.bind = function (a, b, c) {
  goog.bind = goog.TRUSTED_SITE && goog.FEATURESET_YEAR > 2012 || Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? goog.bindNative_ : goog.bindJs_;
  return goog.bind.apply(null, arguments)
};
goog.partial = function (a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function () {
    var d = c.slice();
    d.push.apply(d, arguments);
    return a.apply(this, d)
  }
};
goog.now = function () {
  return Date.now()
};
goog.globalEval = function (a) {
  (0, eval)(a)
};
goog.getCssName = function (a, b) {
  if (String(a).charAt(0) == ".") throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + a);
  var c = function (f) {
    return goog.cssNameMapping_[f] || f
  },
    d = function (f) {
      f = f.split("-");
      for (var g = [], k = 0; k < f.length; k++) g.push(c(f[k]));
      return g.join("-")
    };
  d = goog.cssNameMapping_ ? goog.cssNameMappingStyle_ == "BY_WHOLE" ? c : d : function (f) {
    return f
  };
  a = b ? a + "-" + d(b) : d(a);
  return goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(a) : a
};
goog.setCssNameMapping = function (a, b) {
  goog.cssNameMapping_ = a;
  goog.cssNameMappingStyle_ = b
};
goog.GetMsgOptions = function () { };
goog.getMsg = function (a, b, c) {
  c && c.html && (a = a.replace(/</g, "&lt;"));
  c && c.unescapeHtmlEntities && (a = a.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&"));
  b && (a = a.replace(/\{\$([^}]+)}/g, function (d, f) {
    return b != null && f in b ? b[f] : d
  }));
  return a
};
goog.getMsgWithFallback = function (a) {
  return a
};
goog.exportSymbol = function (a, b, c) {
  goog.exportPath_(a, b, !0, c)
};
goog.exportProperty = function (a, b, c) {
  a[b] = c
};
goog.weakUsage = function (a) {
  return a
};
goog.inherits = function (a, b) {
  function c() { }
  c.prototype = b.prototype;
  a.superClass_ = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.base = function (d, f, g) {
    for (var k = Array(arguments.length - 2), e = 2; e < arguments.length; e++) k[e - 2] = arguments[e];
    return b.prototype[f].apply(d, k)
  }
};
goog.scope = function (a) {
  if (goog.isInModuleLoader_()) throw Error("goog.scope is not supported within a module.");
  a.call(goog.global)
};
goog.defineClass = function (a, b) {
  var c = b.constructor,
    d = b.statics;
  c && c != Object.prototype.constructor || (c = function () {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  c = goog.defineClass.createSealingConstructor_(c, a);
  a && goog.inherits(c, a);
  delete b.constructor;
  delete b.statics;
  goog.defineClass.applyProperties_(c.prototype, b);
  d != null && (d instanceof Function ? d(c) : goog.defineClass.applyProperties_(c, d));
  return c
};
goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
goog.defineClass.createSealingConstructor_ = function (a) {
  if (!goog.defineClass.SEAL_CLASS_INSTANCES) return a;
  var b = function () {
    var c = a.apply(this, arguments) || this;
    c[goog.UID_PROPERTY_] = c[goog.UID_PROPERTY_];
    return c
  };
  return b
};
goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.defineClass.applyProperties_ = function (a, b) {
  for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
  for (var d = 0; d < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; d++) c = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d], Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
};
goog.identity_ = function (a) {
  return a
};
goog.createTrustedTypesPolicy = function (a) {
  var b = null,
    c = goog.global.trustedTypes;
  if (!c || !c.createPolicy) return b;
  try {
    b = c.createPolicy(a, {
      createHTML: goog.identity_,
      createScript: goog.identity_,
      createScriptURL: goog.identity_
    })
  } catch (d) {
    goog.logToConsole_(d.message)
  }
  return b
};
chrome.runtime.onMessage.addListener(module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_handleMessages);
var module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_audioContext = null,
  module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_audioSourceNode = null,
  module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_audioText = "";

function module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_decodeAudio(a, b) {
  return (0, $jscomp.asyncExecutePromiseGeneratorProgram)(function (c) {
    return c.nextAddress == 1 ? c.yield(a.decodeAudioData(Uint8Array.from(atob(b), function (d) {
      return d.toString().charCodeAt(0)
    }).buffer), 2) : c.return(c.yieldResult)
  })
}

function module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_closeAudioContext() {
  return (0, $jscomp.asyncExecutePromiseGeneratorProgram)(function (a) {
    return module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_audioContext && module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_audioContext.state !== "closed" ? a.yield(module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_audioContext.close(),
      0) : a.jumpTo(0)
  })
}

function module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_playAudio(a) {
  var b;
  return (0, $jscomp.asyncExecutePromiseGeneratorProgram)(function (c) {
    if (c.nextAddress == 1) return module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_audioContext = new AudioContext, b = module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_audioSourceNode = module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_audioContext.createBufferSource(), c.yield(module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_decodeAudio(module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_audioContext,
      a), 2);
    b.buffer = c.yieldResult;
    module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_audioSourceNode.connect(module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_audioContext.destination);
    module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_audioSourceNode.start(0);
    module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_audioSourceNode.onended = module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_stopAudio;
    c.jumpToEnd()
  })
}

function module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_stopAudio() {
  var a, b;
  return (0, $jscomp.asyncExecutePromiseGeneratorProgram)(function (c) {
    (a = module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_audioSourceNode) == null || a.stop(0);
    (b = module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_audioSourceNode) == null || b.disconnect();
    module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_audioSourceNode = null;
    module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_audioText = "";
    return c.yield(module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_closeAudioContext(), 0)
  })
}

function module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_handleMessages(a) {
  var b, c;
  return (0, $jscomp.asyncExecutePromiseGeneratorProgram)(function (d) {
    switch (d.nextAddress) {
      case 1:
        if (a.target !== "offscreen") return d.return();
        switch (a.action) {
          case "playAudio":
            return d.jumpTo(2);
          case "pauseAudio":
            return d.jumpTo(3);
          default:
            console.warn("Unexpected message action received: '" + a.action + "'.")
        }
        d.jumpTo(4);
        break;
      case 2:
        b = a.text !== module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_audioText;
        if (((c = module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_audioContext) == null ? void 0 : c.state) !== "running") {
          d.jumpTo(5);
          break
        }
        return d.yield(module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_stopAudio(), 5);
      case 5:
        if (!b) {
          d.jumpTo(7);
          break
        }
        module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_audioText = a.text;
        return d.yield(module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_playAudio(a.audioSrc),
          7);
      case 7:
        d.jumpTo(4);
        break;
      case 3:
        return d.yield(module$contents$google3$googledata$translate$clients$chrome_extensions$translate$offscreen_stopAudio(), 9);
      case 9:
        d.jumpTo(4);
        break;
      case 4:
        return d.return()
    }
  })
};