/* Copyright 2014 Google */
/*
An integer which specifies the type of the node(nodeType). Possible values are:

01:Node.ELEMENT_NODE: An Element node like <p> or <div>
02:Node.ATTRIBUTE_NODE: An Attribute of an Element
03:Node.TEXT_NODE: The actual Text inside an Element or Attr
04:Node.CDATA_SECTION_NODE: A CDATASection, such as <!CDATA[[ … ]]>
07:Node.PROCESSING_INSTRUCTION_NODE: A ProcessingInstruction of an XML document, such as <?xml-stylesheet … ?>
08:Node.COMMENT_NODE: A Comment node, such as <!-- … -->
09:Node.DOCUMENT_NODE: A Document node
10:Node.DOCUMENT_TYPE_NODE: A DocumentType node, such as <!DOCTYPE html>
11:Node.DOCUMENT_FRAGMENT_NODE: A DocumentFragment node

The following constants have been deprecated and are not in use anymore: 
05:Node.ENTITY_REFERENCE_NODE
06:Node.ENTITY_NODE
12:Node.NOTATION_NODE
*/
(function() {
  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var kkkkkkK8, IteratorObj = function(arr) {
      var index = 0;
      return function() {
        return index < arr.length ? {
          done: false,
          value: arr[index++]
        } : {
          done: true
        }
      }
    },
    DefineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(obj, prop, descriptor) {
      if (obj == Array.prototype || obj == Object.prototype) return obj;
      obj[prop] = descriptor.value;
      return obj
    },
    GetGlobalObject = function(_this) {
      _this = ["object" == typeof globalThis && globalThis, _this, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
      for (var idx = 0; idx < _this.length; ++idx) {
        var _obj = _this[idx];
        if (_obj && _obj.Math == Math) return _obj
      }
      throw Error("Cannot find global object");
    },
    golobalObj = GetGlobalObject(this),
    DefineGlobalObjectProperty = function(defineName, defineFunction) {
      if (defineFunction) aLabel: {
        var _golobalObj = golobalObj;
        defineName = defineName.split(".");
        for (var idx = 0; idx < defineName.length - 1; idx++) {
          var name = defineName[idx];
          if (!(name in _golobalObj)) break aLabel;
          _golobalObj = _golobalObj[name]
        }
        defineName = defineName[defineName.length - 1];
        idx = _golobalObj[defineName];
        defineFunction = defineFunction(idx);
        defineFunction != idx && null != defineFunction && DefineProperty(_golobalObj, defineName, {
          configurable: true,
          writable: true,
          value: defineFunction
        })
      }
    };
  DefineGlobalObjectProperty("Symbol", function(globalObjectIdx) {
    if (globalObjectIdx) return globalObjectIdx;
    var JscompSymbol = function(JscompSymbolKey, JscompSymbolDesc) {
      this.g = JscompSymbolKey;
      DefineProperty(this, "description", {
        configurable: true,
        writable: true,
        value: JscompSymbolDesc
      })
    };
    JscompSymbol.prototype.toString = function() {
      return this.g
    };
    var JscompSymbolID = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
      jscompSymbolIndex = 0,
      NewJscompSymbol = function(jscompSymbolDesc) {
        if (this instanceof NewJscompSymbol) throw new TypeError("Symbol is not a constructor");
        return new JscompSymbol(JscompSymbolID + (jscompSymbolDesc || "") + "_" + jscompSymbolIndex++, jscompSymbolDesc)
      };
    return NewJscompSymbol
  });
  DefineGlobalObjectProperty("Symbol.iterator", function(globalObjectIdx) {
    if (globalObjectIdx) return globalObjectIdx;
    globalObjectIdx = Symbol("Symbol.iterator");
    for (var arrTypes = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), idx = 0; idx < arrTypes.length; idx++) {
      var _type = golobalObj[arrTypes[idx]];
      "function" === typeof _type && "function" != typeof _type.prototype[globalObjectIdx] && DefineProperty(_type.prototype, globalObjectIdx, {
        configurable: true,
        writable: true,
        value: function() {
          return PropertyIterator(IteratorObj(this))
        }
      })
    }
    return globalObjectIdx
  });
  var PropertyIterator = function(IteratorObj) {
      IteratorObj = {
        next: IteratorObj
      };
      IteratorObj[Symbol.iterator] = function() {
        return this
      };
      return IteratorObj
    },
    setCSSRaw = function(cssArr) {
      return cssArr.raw = cssArr
    },
    IteratorNext = function(arr) {
      var symbolIterator = "undefined" != typeof Symbol && Symbol.iterator && arr[Symbol.iterator];
      if (symbolIterator) return symbolIterator.call(arr);
      if ("number" == typeof arr.length) return { next: IteratorObj(arr) };
      throw Error(String(arr) + " is not an iterable or ArrayLike");
    },
    GetAllIterator = function(arr) {
      if (!(arr instanceof Array)) {
        arr = IteratorNext(arr);
        for (var iteratorObj, arrNext = []; !(iteratorObj = arr.next()).done;) arrNext.push(iteratorObj.value);
        arr = arrNext
      }
      return arr
    },
    ObjectCreate = "function" == typeof Object.create ? Object.create : function(proto) {
      var newFunction =
        function() {};
      newFunction.prototype = proto;
      return new newFunction
    },
    ObjectSetPrototypeOf;
  if ("function" == typeof Object.setPrototypeOf) ObjectSetPrototypeOf = Object.setPrototypeOf;
  else {
    var isProtoOk;
    checkProto: {
      var _prototype = {
          value: true
        },
        _obj = {};
      try {
        _obj.__proto__ = _prototype;
        isProtoOk = _obj.value;
        break checkProto
      } catch (err) {}
      isProtoOk = false
    }
    ObjectSetPrototypeOf = isProtoOk ? function(obj, prototype) {
      obj.__proto__ = prototype;
      if (obj.__proto__ !== prototype) throw new TypeError(obj + " is not extensible");
      return obj
    } : null
  }
  var _ObjectSetPrototypeOf = ObjectSetPrototypeOf,
    ObjectCreateSetPrototypeOf = function(obj, prototype) {
      obj.prototype = ObjectCreate(prototype.prototype);
      obj.prototype.constructor = obj;
      if (_ObjectSetPrototypeOf) _ObjectSetPrototypeOf(obj, prototype);
      else
        for (var prop in prototype)
          if ("prototype" != prop)
            if (Object.defineProperties) {
              var descriptor = Object.getOwnPropertyDescriptor(prototype, prop);
              descriptor && Object.defineProperty(obj, prop, descriptor)
            } else obj[prop] = prototype[prop];
      obj.I = prototype.prototype
    },
    ObjectHasOwnProperty = function(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop)
    };
  DefineGlobalObjectProperty("WeakMap", function(globalObjectIdx) {
    function bbbbbb156() {}

    function VerifyType(llllll159) {
      var _type = typeof llllll159;
      return "object" === _type && null !== llllll159 || "function" === _type
    }

    function dddddd163(llllll163) {
      if (!ObjectHasOwnProperty(llllll163, JcompHiddenID)) {
        var nnnnnn165 = new bbbbbb156;
        DefineProperty(llllll163, JcompHiddenID, {
          value: nnnnnn165
        })
      }
    }

    function eeeeee172(llllll172) {
      var nnnnnn172 = Object[llllll172];
      nnnnnn172 && (Object[llllll172] = function(pppppp174) {
        if (pppppp174 instanceof bbbbbb156) return pppppp174;
        Object.isExtensible(pppppp174) && dddddd163(pppppp174);
        return nnnnnn172(pppppp174)
      })
    }
    if (function() {
        if (!globalObjectIdx || !Object.seal) return false;
        try {
          var llllll183 = Object.seal({}),
            nnnnnn184 = Object.seal({}),
            pppppp185 = new globalObjectIdx([
              [llllll183, 2],
              [nnnnnn184, 3]
            ]);
          if (2 != pppppp185.get(llllll183) || 3 != pppppp185.get(nnnnnn184)) return false;
          pppppp185.delete(llllll183);
          pppppp185.set(nnnnnn184, 4);
          return !pppppp185.has(llllll183) && 4 == pppppp185.get(nnnnnn184)
        } catch (qErr) {
          return false
        }
      }()) return globalObjectIdx;
    var JcompHiddenID = "$jscomp_hidden_" + Math.random();
    eeeeee172("freeze");
    eeeeee172("preventExtensions");
    eeeeee172("seal");
    var hhhhhh201 = 0,
      gggggg202 = function(llllll202) {
        this.W = (hhhhhh201 += Math.random() + 1).toString();
        if (llllll202) {
          llllll202 = IteratorNext(llllll202);
          for (var n; !(n = llllll202.next()).done;) n = n.value, this.set(n[0], n[1])
        }
      };
    gggggg202.prototype.set = function(llllll209, n) {
      if (!VerifyType(llllll209)) throw Error("Invalid WeakMap key");
      dddddd163(llllll209);
      if (!ObjectHasOwnProperty(llllll209, JcompHiddenID)) throw Error("WeakMap key fail: " + llllll209);
      llllll209[JcompHiddenID][this.W] = n;
      return this
    };
    gggggg202.prototype.get = function(llllll216) {
      return VerifyType(llllll216) && ObjectHasOwnProperty(llllll216, JcompHiddenID) ? llllll216[JcompHiddenID][this.W] : void 0
    };
    gggggg202.prototype.has = function(llllll219) {
      return VerifyType(llllll219) && ObjectHasOwnProperty(llllll219, JcompHiddenID) && ObjectHasOwnProperty(llllll219[JcompHiddenID],
        this.W)
    };
    gggggg202.prototype.delete = function(llllll223) {
      return VerifyType(llllll223) && ObjectHasOwnProperty(llllll223, JcompHiddenID) && ObjectHasOwnProperty(llllll223[JcompHiddenID], this.W) ? delete llllll223[JcompHiddenID][this.W] : false
    };
    return gggggg202
  });
  DefineGlobalObjectProperty("Map", function(globalObjectIdx) {
    if (function() {
        if (!globalObjectIdx || "function" != typeof globalObjectIdx || !globalObjectIdx.prototype.entries || "function" != typeof Object.seal) return false;
        try {
          var gObjSeal = Object.seal({ x: 4 }),
            llllll233 = new globalObjectIdx(IteratorNext([[gObjSeal, "s"]]));
          if ("s" != llllll233.get(gObjSeal) || 1 != llllll233.size || llllll233.get({
              x: 4
            }) || llllll233.set({
              x: 4
            }, "t") != llllll233 || 2 != llllll233.size) return false;
          var nnnnnn239 = llllll233.entries(),
            pppppp240 = nnnnnn239.next();
          if (pppppp240.done || pppppp240.value[0] != gObjSeal || "s" != pppppp240.value[1]) return false;
          pppppp240 = nnnnnn239.next();
          return pppppp240.done || 4 != pppppp240.value[0].x || "t" != pppppp240.value[1] || !nnnnnn239.next().done ? false : true
        } catch (qErr) {
          return false
        }
      }()) return globalObjectIdx;
    var _weakMap = new WeakMap,
      cccccc249 = function(gggggg249) {
        this.l = {};
        this.g = ffffff346();
        this.size = 0;
        if (gggggg249) {
          gggggg249 = IteratorNext(gggggg249);
          for (var larr; !(larr = gggggg249.next()).done;) larr = larr.value, this.set(larr[0], larr[1])
        }
      };
    cccccc249.prototype.set = function(g, l) {
      g = 0 === g ? 0 : g;
      var n = d(this, g);
      n.list || (n.list = this.l[n.id] = []);
      n.entry ? n.entry.value = l : (n.entry = {
        next: this.g,
        previous: this.g.previous,
        head: this.g,
        key: g,
        value: l
      }, n.list.push(n.entry), this.g.previous.next = n.entry, this.g.previous = n.entry, this.size++);
      return this
    };
    cccccc249.prototype.delete = function(g) {
      g = d(this, g);
      return g.entry && g.list ? (g.list.splice(g.index, 1), g.list.length || delete this.l[g.id],
        g.entry.previous.next = g.entry.next, g.entry.next.previous = g.entry.previous, g.entry.head = null, this.size--, true) : false
    };
    cccccc249.prototype.clear = function() {
      this.l = {};
      this.g = this.g.previous = ffffff346();
      this.size = 0
    };
    cccccc249.prototype.has = function(g) {
      return !!d(this, g).entry
    };
    cccccc249.prototype.get = function(g) {
      return (g = d(this, g).entry) && g.value
    };
    cccccc249.prototype.entries = function() {
      return eeeeee329(this, function(g) {
        return [g.key, g.value]
      })
    };
    cccccc249.prototype.keys = function() {
      return eeeeee329(this, function(g) {
        return g.key
      })
    };
    cccccc249.prototype.values = function() {
      return eeeeee329(this,
        function(g) {
          return g.value
        })
    };
    cccccc249.prototype.forEach = function(g, l) {
      for (var n = this.entries(), p; !(p = n.next()).done;) p = p.value, g.call(l, p[1], p[0], this)
    };
    cccccc249.prototype[Symbol.iterator] = cccccc249.prototype.entries;
    var d = function(g, l) {
        var n = l && typeof l;
        "object" == n || "function" == n ? _weakMap.has(l) ? n = _weakMap.get(l) : (n = "" + ++h, _weakMap.set(l, n)) : n = "p_" + l;
        var p = g.l[n];
        if (p && ObjectHasOwnProperty(g.l, n))
          for (g = 0; g < p.length; g++) {
            var q = p[g];
            if (l !== l && q.key !== q.key || l === q.key) return {
              id: n,
              list: p,
              index: g,
              entry: q
            }
          }
        return {
          id: n,
          list: p,
          index: -1,
          entry: void 0
        }
      },
      eeeeee329 = function(g,
        l) {
        var n = g.g;
        return PropertyIterator(function() {
          if (n) {
            for (; n.head != g.g;) n = n.previous;
            for (; n.next != n.head;) return n = n.next, {
              done: false,
              value: l(n)
            };
            n = null
          }
          return {
            done: true,
            value: void 0
          }
        })
      },
      ffffff346 = function() {
        var g = {};
        return g.previous = g.next = g.head = g
      },
      h = 0;
    return cccccc249
  });
  DefineGlobalObjectProperty("Array.prototype.find", function(globalObjectIdx) {
    return globalObjectIdx ? globalObjectIdx : function(b, c) {
      a: {
        var d = this;d instanceof String && (d = String(d));
        for (var e = d.length, f = 0; f < e; f++) {
          var h = d[f];
          if (b.call(c, h, f, d)) {
            b = h;
            break a
          }
        }
        b = void 0
      }
      return b
    }
  });
  var Iterator_373 = function(aaaaaa369, bbbbbb369) {
    aaaaaa369 instanceof String && (aaaaaa369 += "");
    var current = 0,
      dddddd372 = false,
      eeeeee373 = {
        next: function() {
          if (!dddddd372 && current < aaaaaa369.length) {
            var idx = current++;
            return {
              value: bbbbbb369(idx, aaaaaa369[idx]),
              done: false
            }
          }
          dddddd372 = true;
          return {
            done: true,
            value: void 0
          }
        }
      };
    eeeeee373[Symbol.iterator] = function() {
      return eeeeee373
    };
    return eeeeee373
  };
  DefineGlobalObjectProperty("Array.prototype.values", function(globalObjectIdx) {
    return globalObjectIdx ? globalObjectIdx : function() {
      return Iterator_373(this, function(b, c) {
        return c
      })
    }
  });
  DefineGlobalObjectProperty("Array.prototype.keys", function(globalObjectIdx) {
    return globalObjectIdx ? globalObjectIdx : function() {
      return Iterator_373(this, function(b) {
        return b
      })
    }
  });
  DefineGlobalObjectProperty("String.prototype.startsWith", function(globalObjectIdx) {
    return globalObjectIdx ? globalObjectIdx : function(b, c) {
      if (null == this) throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");
      if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");
      var d = this + "";
      b += "";
      var e = d.length,
        f = b.length;
      c = Math.max(0, Math.min(c | 0, d.length));
      for (var h = 0; h < f && c < e;)
        if (d[c++] != b[h++]) return false;
      return h >= f
    }
  });
  DefineGlobalObjectProperty("Array.from", function(globalObjectIdx) {
    return globalObjectIdx ? globalObjectIdx : function(b, c, d) {
      c = null != c ? c : function(g) {
        return g
      };
      var e = [],
        f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
      if ("function" == typeof f) {
        b = f.call(b);
        for (var h = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, h++))
      } else
        for (f = b.length, h = 0; h < f; h++) e.push(c.call(d, b[h], h));
      return e
    }
  });
  DefineGlobalObjectProperty("Array.prototype.entries", function(globalObjectIdx) {
    return globalObjectIdx ? globalObjectIdx : function() {
      return Iterator_373(this, function(b, c) {
        return [b, c]
      })
    }
  });
  DefineGlobalObjectProperty("Object.entries", function(globalObjectIdx) {
    return globalObjectIdx ? globalObjectIdx : function(b) {
      var c = [],
        d;
      for (d in b) ObjectHasOwnProperty(b, d) && c.push([d, b[d]]);
      return c
    }
  });
  var uaObj = uaObj || {},
    self_ = this || self,
    vavava454 = function(aaaaaa454) {
      aaaaaa454.Da = void 0;
      aaaaaa454.Z = function() {
        return aaaaaa454.Da ? aaaaaa454.Da : aaaaaa454.Da = new aaaaaa454
      }
    },
    GetTypeInfo = function(obj) {
      var _type = typeof obj;
      return "object" != _type ? _type : obj ? Array.isArray(obj) ? "array" : _type : "null"
    },
    xaxaxa464 = function(aaaaaa465) {
      var typeInfo = GetTypeInfo(aaaaaa465);
      return "array" == typeInfo || "object" == typeInfo && "number" == typeof aaaaaa465.length
    },
    IsObjectOrFunction = function(transitionCSS) {
      var _type = typeof transitionCSS;
      return "object" == _type && null != transitionCSS || "function" == _type
    },
    GetClosureUidIDValue = function(RmRmRm8201_) {
      return Object.prototype.hasOwnProperty.call(RmRmRm8201_, ClosureUidID) && RmRmRm8201_[ClosureUidID] || (RmRmRm8201_[ClosureUidID] = ++zazaza480)
    },
    ClosureUidID = "closure_uid_" + (1E9 * Math.random() >>> 0),
    zazaza480 = 0,
    BaBaBa477 = function(aaaaaa477, bbbbbb477, cccccc477) {
      return aaaaaa477.call.apply(aaaaaa477.bind, arguments)
    },
    CaCaCa484 = function(aaaaaa484, bbbbbb484, cccccc484) {
      if (!aaaaaa484) throw Error();
      if (2 < arguments.length) {
        var sliceArgs = Array.prototype.slice.call(arguments, 2);
        return function() {
          var newSliceArguments = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(newSliceArguments, sliceArgs);
          return aaaaaa484.apply(bbbbbb484, newSliceArguments)
        }
      }
      return function() {
        return aaaaaa484.apply(bbbbbb484, arguments)
      }
    },
    vvvvvv498 = function(aaaaaa498, bbbbbb498, cccccc498) {
      Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? vvvvvv498 = BaBaBa477 : vvvvvv498 = CaCaCa484;
      return vvvvvv498.apply(null, arguments)
    },
    w = function(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function() {
        var d =
          c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d)
      }
    },
    googInherits = function(aError, bError) {
      function cError() {}
      cError.prototype = bError.prototype;
      aError.I = bError.prototype;
      aError.prototype = new cError;
      aError.prototype.constructor = aError;
      aError.Ue = function(d, e, f) {
        for (var h = Array(arguments.length - 2), g = 2; g < arguments.length; g++) h[g - 2] = arguments[g];
        return bError.prototype[e].apply(d, h)
      }
    },
    Da = function(a) {
      return a
    };

  function CustomError(_message, _cause) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, CustomError);
    else {
      var _stack = Error().stack;
      _stack && (this.stack = _stack)
    }
    _message && (this.message = String(_message));
    void 0 !== _cause && (this.cause = _cause)
  }
  googInherits(CustomError, Error);
  CustomError.prototype.name = "CustomError";
  var FaFaFa533;

  function AssertionError(errMsg, args) {
    errMsg = errMsg.split("%s");
    for (var cccccc537 = "", idxMax = errMsg.length - 1, idx = 0; idx < idxMax; idx++) cccccc537 += errMsg[idx] + (idx < args.length ? args[idx] : "%s");
    CustomError.call(this, cccccc537 + errMsg[idxMax])
  }
  googInherits(AssertionError, CustomError);
  AssertionError.prototype.name = "AssertionError";

  function ThrowAssertionErrorFailed(defaultErrMsg, defaultErrMsgArgs, errMsg, errMsgArgs) {
    var errInfo = "Assertion failed";
    if (errMsg) {
      errInfo += ": " + errMsg;
      var errInfoArgs = errMsgArgs
    } else defaultErrMsg && (errInfo += ": " + defaultErrMsg, errInfoArgs = defaultErrMsgArgs);
    throw new AssertionError("" + errInfo, errInfoArgs || []);
  }
  var AssertAssertion = function(assertion, errMsg, html) {
      assertion || ThrowAssertionErrorFailed("", null, errMsg, Array.prototype.slice.call(arguments, 2));
      return assertion
    },
    ThrowAssertionErrorFailure = function(errMsg, notUse) {
      throw new AssertionError("Failure" + (errMsg ? ": " + errMsg : ""), Array.prototype.slice.call(arguments, 1));
    },
    AssertNumber = function(number, errorMsg, notUse) {
      "number" !== typeof number && ThrowAssertionErrorFailed("Expected number but got %s: %s.", [GetTypeInfo(number), number], errorMsg, Array.prototype.slice.call(arguments, 2));
      return number
    },
    AssertString = function(string, errorMsg, notUse) {
      "string" !== typeof string && ThrowAssertionErrorFailed("Expected string but got %s: %s.", [GetTypeInfo(string), string], errorMsg, Array.prototype.slice.call(arguments, 2));
      return string
    },
    AssertObject = function(object, errorMsg, notUse) {
      IsObjectOrFunction(object) || ThrowAssertionErrorFailed("Expected object but got %s: %s.", [GetTypeInfo(object), object], errorMsg, Array.prototype.slice.call(arguments, 2));
      return object
    },
    AssertArray = function(array, errorMsg, notUse) {
      Array.isArray(array) || ThrowAssertionErrorFailed("Expected array but got %s: %s.", [GetTypeInfo(array), array], errorMsg, Array.prototype.slice.call(arguments, 2));
      return array
    },
    AssertElement = function(element, errorMsg, notUse) { //01:Node.ELEMENT_NODE: An Element node like <p> or <div>
      IsObjectOrFunction(element) && 1 == element.nodeType || ThrowAssertionErrorFailed("Expected Element but got %s: %s.", [GetTypeInfo(element), element], errorMsg, Array.prototype.slice.call(arguments, 2))
    },
    AssertInstanceof = function(object1, object2, errorMsg, notUse) {
      object1 instanceof object2 || ThrowAssertionErrorFailed("Expected instanceof %s but got %s.", [GetInstanceName(object2), GetInstanceName(object1)], errorMsg, Array.prototype.slice.call(arguments, 3));
      return object1
    };

  function GetInstanceName(a) {
    return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
  };
  var ToFunctionReturnStr = function(str) {
      return function() {
        return str
      }
    },
    Qa = function(a, b) {
      for (var c = 0; c < b.length - 2; c += 3) {
        var d = b.charAt(c + 2);
        d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
        d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
        a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
      }
      return a
    },
    charTK = null,
    SaSaSa604 = function(aaaaaa604) {
      if (null !== charTK) var CharT = charTK;
      else {
        CharT = ToFunctionReturnStr(String.fromCharCode(84)); //84:T
        var CharK = ToFunctionReturnStr(String.fromCharCode(75)); //75:K
        CharT = [CharT(), CharT()];
        CharT[1] = CharK();
        CharT = (charTK = window[CharT.join(CharK())] || "") || ""
      }
      var CharT_ = ToFunctionReturnStr(String.fromCharCode(116)); //116:t
      CharK = ToFunctionReturnStr(String.fromCharCode(107)); //107:k
      CharT_ = [CharT_(), CharT_()];
      CharT_[1] = CharK();
      CharK = "&" + CharT_.join("") + "=";
      CharT_ = CharT.split(".");
      CharT = Number(CharT_[0]) || 0;
      for (var arr = [], f = 0, idx = 0; idx < aaaaaa604.length; idx++) {
        var g = aaaaaa604.charCodeAt(idx);
        128 > g ? arr[f++] = g : (2048 > g ? arr[f++] = g >> 6 | 192 : (55296 == (g & 64512) && idx + 1 < aaaaaa604.length && 56320 == (aaaaaa604.charCodeAt(idx + 1) & 64512) ? (g = 65536 + ((g & 1023) << 10) + (aaaaaa604.charCodeAt(++idx) & 1023), arr[f++] = g >> 18 | 240, arr[f++] = g >> 12 & 63 | 128) : arr[f++] = g >> 12 | 224, arr[f++] = g >> 6 & 63 | 128), arr[f++] = g & 63 | 128)
      }
      aaaaaa604 = CharT;
      for (f = 0; f < arr.length; f++) aaaaaa604 += arr[f], aaaaaa604 = Qa(aaaaaa604, "+-a^+6");
      aaaaaa604 = Qa(aaaaaa604, "+-3^+b+-f");
      aaaaaa604 ^= Number(CharT_[1]) || 0;
      0 > aaaaaa604 && (aaaaaa604 = (aaaaaa604 & 2147483647) + 2147483648);
      aaaaaa604 %= 1E6;
      return CharK + (aaaaaa604.toString() + "." + (aaaaaa604 ^ CharT))
    };
  var Ta = function() {},
    Ua = function(a) {
      var b = false,
        c;
      return function() {
        b || (c = a(), b = true);
        return c
      }
    };
  var ArrayIndexOf = Array.prototype.indexOf ? function(elements, searchElement) {
      AssertAssertion(null != elements.length);
      return Array.prototype.indexOf.call(elements, searchElement, void 0)
    } : function(elements, searchElement) {
      if ("string" === typeof elements) return "string" !== typeof searchElement || 1 != searchElement.length ? -1 : elements.indexOf(searchElement, 0);
      for (var c = 0; c < elements.length; c++)
        if (c in elements && elements[c] === searchElement) return c;
      return -1
    },
    Wa = Array.prototype.forEach ? function(a, b) {
      AssertAssertion(null != a.length);
      Array.prototype.forEach.call(a, b, void 0)
    } : function(a, b) {
      for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    },
    Xa = Array.prototype.some ?
    function(a, b) {
      AssertAssertion(null != a.length);
      return Array.prototype.some.call(a, b, void 0)
    } : function(a, b) {
      for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) return true;
      return false
    };

  function IsExistElement(elements, searchElement) {
    return 0 <= ArrayIndexOf(elements, searchElement)
  }

  function ArraySplice(elements, searchElement) {
    searchElement = ArrayIndexOf(elements, searchElement);
    var index;
    if (index = 0 <= searchElement) AssertAssertion(null != elements.length), Array.prototype.splice.call(elements, searchElement, 1);
    return index
  }

  function CloneArr(arr) {
    var len = arr.length;
    if (0 < len) {
      for (var newArr = Array(len), idx = 0; idx < len; idx++) newArr[idx] = arr[idx];
      return newArr
    }
    return []
  };

  function ababab685(aaaaaa685, bbbbbb685, cccccc685) {
    for (var d in aaaaaa685) bbbbbb685.call(cccccc685, aaaaaa685[d], d, aaaaaa685)
  }

  function bbbbbb689(aaaaaa689, bbbbbb689) {
    for (var cccccc690 in aaaaaa689)
      if (bbbbbb689.call(void 0, aaaaaa689[cccccc690], cccccc690, aaaaaa689)) return true;
    return false
  }

  function IsExistRole(ARIARoles, ariaRole) {
    for (var roleIdx in ARIARoles)
      if (ARIARoles[roleIdx] == ariaRole) return true;
    return false
  }
  var dbdbdb700 = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

  function ebebeb702(aaaaaa702, bbbbbb702) {
    for (var cIdx, dArr, eIdx = 1; eIdx < arguments.length; eIdx++) {
      dArr = arguments[eIdx];
      for (cIdx in dArr) aaaaaa702[cIdx] = dArr[cIdx];
      for (var idx = 0; idx < dbdbdb700.length; idx++) cIdx = dbdbdb700[idx], Object.prototype.hasOwnProperty.call(dArr, cIdx) && (aaaaaa702[cIdx] = dArr[cIdx])
    }
  }

  function fbfbfb710(aaaaaa710) {
    var len = arguments.length;
    if (1 == len && Array.isArray(arguments[0])) return fbfbfb710.apply(null, arguments[0]);
    if (len % 2) throw Error("Uneven number of arguments");
    for (var obj = {}, idx = 0; idx < len; idx += 2) obj[arguments[idx]] = arguments[idx + 1];
    return obj
  };
  var gbgbgb717 = {
    area: true,
    base: true,
    br: true,
    col: true,
    command: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
  };
  var hbhbhb735;
  var kbkbkb736 = function(aaaaaa736, bbbbbb736) {
    this.g = aaaaaa736 === ibibib753 && bbbbbb736 || "";
    this.l = jbjbjb752
  };
  kbkbkb736.prototype.sa = true;
  kbkbkb736.prototype.ea = function() {
    return this.g
  };
  kbkbkb736.prototype.toString = function() {
    return "Const{" + this.g + "}"
  };
  var lblblb747 = function(aaaaaa747) {
      if (aaaaaa747 instanceof kbkbkb736 && aaaaaa747.constructor === kbkbkb736 && aaaaaa747.l === jbjbjb752) return aaaaaa747.g;
      ThrowAssertionErrorFailure("expected object of type Const, got '" + aaaaaa747 + "'");
      return "type_error:Const"
    },
    jbjbjb752 = {},
    ibibib753 = {};
  var nbnbnb754 = function(aaaaaa754, bbbbbb754) {
    this.g = bbbbbb754 === mbmbmb764 ? aaaaaa754 : ""
  };
  nbnbnb754.prototype.toString = function() {
    return this.g + ""
  };
  nbnbnb754.prototype.sa = true;
  nbnbnb754.prototype.ea = function() {
    return this.g.toString()
  };
  var mbmbmb764 = {};
  var obobob765 = function(str) {
      return /^[\s\xa0]*$/.test(str)
    },
    StringTrim = String.prototype.trim ? function(str) {
      return str.trim()
    } : function(aaaaaa770) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(aaaaaa770)[1]
    },
    SafeString = function(str) {
      if (!unsafeCharRegex.test(str)) return str;
      - 1 != str.indexOf("&") && (str = str.replace(ampersandRegex, "&amp;"));
      - 1 != str.indexOf("<") && (str = str.replace(lessThanRegex, "&lt;"));
      - 1 != str.indexOf(">") && (str = str.replace(greaterThanRegex, "&gt;"));
      - 1 != str.indexOf('"') && (str = str.replace(doubleQuoteRegex, "&quot;"));
      - 1 != str.indexOf("'") && (str = str.replace(singleQuoteRegex, "&#39;"));
      - 1 != str.indexOf("\x00") && (str = str.replace(nullCharRegex, "&#0;"));
      return str
    },
    ampersandRegex = /&/g,
    lessThanRegex = /</g,
    greaterThanRegex = />/g,
    doubleQuoteRegex = /"/g,
    singleQuoteRegex = /'/g,
    nullCharRegex = /\x00/g,
    unsafeCharRegex = /[\x00&<>"']/,
    zbzbzb785 = function(aaaaaa785, bbbbbb785) {
      var cccccc785 = 0;
      aaaaaa785 = StringTrim(String(aaaaaa785)).split(".");
      bbbbbb785 = StringTrim(String(bbbbbb785)).split(".");
      for (var d_max_len = Math.max(aaaaaa785.length, bbbbbb785.length), eIdx = 0; 0 == cccccc785 && eIdx < d_max_len; eIdx++) {
        var digitAlphaRegex_1 = aaaaaa785[eIdx] || "",
          digitAlphaRegex_2 = bbbbbb785[eIdx] || "";
        do {
          digitAlphaRegex_1 = /(\d*)(\D*)(.*)/.exec(digitAlphaRegex_1) || ["", "", "", ""];
          digitAlphaRegex_2 = /(\d*)(\D*)(.*)/.exec(digitAlphaRegex_2) || ["", "", "", ""];
          if (0 == digitAlphaRegex_1[0].length && 0 == digitAlphaRegex_2[0].length) break;
          cccccc785 = ybybyb795(0 == digitAlphaRegex_1[1].length ? 0 : parseInt(digitAlphaRegex_1[1], 10), 0 == digitAlphaRegex_2[1].length ? 0 : parseInt(digitAlphaRegex_2[1], 10)) || ybybyb795(0 == digitAlphaRegex_1[2].length, 0 == digitAlphaRegex_2[2].length) || ybybyb795(digitAlphaRegex_1[2], digitAlphaRegex_2[2]);
          digitAlphaRegex_1 = digitAlphaRegex_1[3];
          digitAlphaRegex_2 = digitAlphaRegex_2[3]
        } while (0 == cccccc785)
      }
      return cccccc785
    },
    ybybyb795 = function(aaaaaa802, bbbbbb802) {
      return aaaaaa802 < bbbbbb802 ? -1 : aaaaaa802 > bbbbbb802 ? 1 : 0
    };
  var BbBbBb805 = function(url, _abObj) {
    this.g = _abObj === AbObj ? url : ""
  };
  BbBbBb805.prototype.toString = function() {
    return this.g.toString()
  };
  BbBbBb805.prototype.sa = true;
  BbBbBb805.prototype.ea = function() {
    return this.g.toString()
  };
  var CbCbCb815 = function(aaaaaa816) {
      if (aaaaaa816 instanceof BbBbBb805 && aaaaaa816.constructor === BbBbBb805) return aaaaaa816.g;
      ThrowAssertionErrorFailure("expected object of type SafeUrl, got '" + aaaaaa816 + "' of type " + GetTypeInfo(aaaaaa816));
      return "type_error:SafeUrl"
    },
    base64DataRegex = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    urlProtocolRegex_A = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    FbFbFb822 = function(url) {
      if (url instanceof BbBbBb805) return url;
      url = "object" == typeof url && url.sa ? url.ea() : String(url);
      urlProtocolRegex_A.test(url) ? url = new BbBbBb805(url, AbObj) : (url = String(url).replace(/(%0A|%0D)/g, ""), url = url.match(base64DataRegex) ? new BbBbBb805(url, AbObj) : null);
      return url
    },
    AbObj = {},
    GbGbGb829 = new BbBbBb805(chrome.runtime.getURL("options.html"), AbObj); //about:invalid#zClosurez
  var HbHbHb831 = {},
    IbIbIb832 = function(aaaaaa832, bbbbbb832) {
      this.g = bbbbbb832 === HbHbHb831 ? aaaaaa832 : "";
      this.sa = true
    };
  IbIbIb832.prototype.ea = function() {
    return this.g
  };
  IbIbIb832.prototype.toString = function() {
    return this.g.toString()
  };
  var JbJbJb842 = function(aaaaaa842) {
      if (aaaaaa842 instanceof IbIbIb832 && aaaaaa842.constructor === IbIbIb832) return aaaaaa842.g;
      ThrowAssertionErrorFailure("expected object of type SafeStyle, got '" + aaaaaa842 + "' of type " + GetTypeInfo(aaaaaa842));
      return "type_error:SafeStyle"
    },
    MbMbMb846 = function(aaaaaa847) {
      var bbbbbb848 = "", cccccc848;
      for (cccccc848 in aaaaaa847)
        if (Object.prototype.hasOwnProperty.call(aaaaaa847, cccccc848)) {
          if (!/^[-_a-zA-Z0-9]+$/.test(cccccc848)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + cccccc848);
          var dddddd852 = aaaaaa847[cccccc848];
          null != dddddd852 && (dddddd852 = Array.isArray(dddddd852) ? dddddd852.map(KbKbKb857).join(" ") : KbKbKb857(dddddd852), bbbbbb848 += cccccc848 + ":" + dddddd852 + ";")
        } return bbbbbb848 ? new IbIbIb832(bbbbbb848, HbHbHb831) : LbLbLb856
    },
    LbLbLb856 = new IbIbIb832("", HbHbHb831);

  function KbKbKb857(aaaaaa859) {
    if (aaaaaa859 instanceof BbBbBb805) return 'url("' + CbCbCb815(aaaaaa859).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
    aaaaaa859 = aaaaaa859 instanceof kbkbkb736 ? lblblb747(aaaaaa859) : NbNbNb866(String(aaaaaa859));
    if (/[{;}]/.test(aaaaaa859)) throw new AssertionError("Value does not allow [{;}], got: %s.", [aaaaaa859]);
    return aaaaaa859
  }

  function NbNbNb866(aaaaaa866) {
    var bbbbbb866 = aaaaaa866.replace(cssFuncRegex, "$1").replace(cssFuncRegex, "$1").replace(cssUrlRegex, "url");
    if (safeCharRegex.test(bbbbbb866)) {
      if (commentStartRegex.test(aaaaaa866)) return ThrowAssertionErrorFailure("String value disallows comments, got: " + aaaaaa866), "zClosurez";
      for (var cccccc869 = bbbbbb866 = true, idx = 0; idx < aaaaaa866.length; idx++) {
        var eeeeee870 = aaaaaa866.charAt(idx);
        "'" == eeeeee870 && cccccc869 ? bbbbbb866 = !bbbbbb866 : '"' == eeeeee870 && bbbbbb866 && (cccccc869 = !cccccc869)
      }
      if (!bbbbbb866 || !cccccc869) return ThrowAssertionErrorFailure("String value requires balanced quotes, got: " + aaaaaa866), "zClosurez";
      if (!SbSbSb881(aaaaaa866)) return ThrowAssertionErrorFailure("String value requires balanced square brackets and one identifier per pair of brackets, got: " + aaaaaa866), "zClosurez"
    } else return ThrowAssertionErrorFailure("String value allows only [-+,.\"'%_!#/ a-zA-Z0-9\\[\\]] and simple functions, got: " +
      aaaaaa866), "zClosurez";
    return TbTbTb899(aaaaaa866)
  }

  function SbSbSb881(aaaaaa881) {
    for (var bbbbbb881 = true, alphanumericCharRegex = /^[-_a-zA-Z0-9]$/, idx = 0; idx < aaaaaa881.length; idx++) {
      var eChar = aaaaaa881.charAt(idx);
      if ("]" == eChar) {
        if (bbbbbb881) return false;
        bbbbbb881 = true
      } else if ("[" == eChar) {
        if (!bbbbbb881) return false;
        bbbbbb881 = false
      } else if (!bbbbbb881 && !alphanumericCharRegex.test(eChar)) return false
    }
    return bbbbbb881
  }
  var safeCharRegex = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
    cssUrlRegex = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
    cssFuncRegex = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
    commentStartRegex = /\/\*/;

  function TbTbTb899(aaaaaa899) {
    return aaaaaa899.replace(cssUrlRegex, function(bbbbbb898, cccccc898, dddddd898, eeeeee898) {
      var ffffff899 = "";
      dddddd898 = dddddd898.replace(/^(['"])(.*)\1$/, function(h, g, l) {
        ffffff899 = g;
        return l
      });
      bbbbbb898 = (FbFbFb822(dddddd898) || GbGbGb829).ea();
      return cccccc898 + ffffff899 + bbbbbb898 + ffffff899 + eeeeee898
    })
  };
  var _navigatorUserAgentDataBrands, VbVbVb910;
  a: {
    for (var WbWbWb910 = ["CLOSURE_FLAGS"], Xb_self = self_, YbYbYb910 = 0; YbYbYb910 < WbWbWb910.length; YbYbYb910++)
      if (Xb_self = Xb_self[WbWbWb910[YbYbYb910]], null == Xb_self) {
        VbVbVb910 = null;
        break a
      } VbVbVb910 = Xb_self
  }
  var ZbZbZb916 = VbVbVb910 && VbVbVb910[610401301];
  _navigatorUserAgentDataBrands = null != ZbZbZb916 ? ZbZbZb916 : false;

  function getNavigatorUserAgent() {
    var _navigator = self_.navigator;
    return _navigator && (_navigator = _navigator.userAgent) ? _navigator : ""
  }
  var _navigatorUserAgentData, _navigator = self_.navigator;
  _navigatorUserAgentData = _navigator ? _navigator.userAgentData || null : null;

  function IsExistBrand(brandStr) {
    return _navigatorUserAgentDataBrands ? _navigatorUserAgentData ? _navigatorUserAgentData.brands.some(function(element) {
      return (element = element.brand) && -1 != element.indexOf(brandStr)
    }) : false : false
  }

  function IsNavigatorUserAgentExist(userAgentStr) {
    return -1 != getNavigatorUserAgent().indexOf(userAgentStr)
  };

  function IsNavigatorBrands() {
    return _navigatorUserAgentDataBrands ? !!_navigatorUserAgentData && 0 < _navigatorUserAgentData.brands.length : false
  }

  function ec() {
    return IsNavigatorBrands() ? false : IsNavigatorUserAgentExist("Opera")
  }

  function IsNavigatorFirefoxFxiOS() {
    return IsNavigatorUserAgentExist("Firefox") || IsNavigatorUserAgentExist("FxiOS")
  }

  function IsBrandChromeCriOSEdgeSilk() {
    return IsNavigatorBrands() ? IsExistBrand("Chromium") : (IsNavigatorUserAgentExist("Chrome") || IsNavigatorUserAgentExist("CriOS")) && !(IsNavigatorBrands() ? 0 : IsNavigatorUserAgentExist("Edge")) || IsNavigatorUserAgentExist("Silk")
  };
  var obj_953 = {},
    SafeHtml = function(g_, obj) {
      this.g = obj === obj_953 ? g_ : "";
      this.sa = true
    };
  SafeHtml.prototype.ea = function() {
    return this.g.toString()
  };
  SafeHtml.prototype.toString = function() {
    return this.g.toString()
  };
  var GetSafeHtmlG = function(SafeHtml_) {
      if (SafeHtml_ instanceof SafeHtml && SafeHtml_.constructor === SafeHtml) return SafeHtml_.g;
      ThrowAssertionErrorFailure("expected object of type SafeHtml, got '" + SafeHtml_ + "' of type " + GetTypeInfo(SafeHtml_));
      return "type_error:SafeHtml"
    },
    kckckc969 = function(a) {
      return a instanceof SafeHtml ? a : jc(SafeString("object" == typeof a && a.sa ? a.ea() : String(a)))
    },
    lc = function(a) {
      if (a instanceof SafeHtml) return a;
      a = kckckc969(a);
      return jc(GetSafeHtmlG(a).toString().replace(/(\r\n|\r|\n)/g, "<br>"))
    },
    nc = function(a) {
      var b = kckckc969(mc),
        c = [],
        d = function(e) {
          Array.isArray(e) ? e.forEach(d) : (e = kckckc969(e), c.push(GetSafeHtmlG(e).toString()))
        };
      a.forEach(d);
      return jc(c.join(GetSafeHtmlG(b).toString()))
    },
    oc = function(a) {
      return nc(Array.prototype.slice.call(arguments))
    },
    jc = function(a) {
      if (void 0 === hbhbhb735) {
        var b = null;
        var c = self_.trustedTypes;
        if (c && c.createPolicy) {
          try {
            b = c.createPolicy("goog#html", {
              createHTML: Da,
              createScript: Da,
              createScriptURL: Da
            })
          } catch (d) {
            self_.console && self_.console.error(d.message)
          }
          hbhbhb735 = b
        } else hbhbhb735 = b
      }
      a = (b = hbhbhb735) ? b.createHTML(a) : a;
      return new SafeHtml(a, obj_953)
    },
    strictAlphanumericRegex = /^[a-zA-Z0-9-]+$/,
    action_cite_data_formaction_href_manifest_poster_src = {
      action: true,
      cite: true,
      data: true,
      formaction: true,
      href: true,
      manifest: true,
      poster: true,
      src: true
    },
    APPLET_BASE_EMBED_IFRAME_LINK_MATH_META_OBJECT_SCRIPT_STYLE_SVG_TEMPLATE = {
      APPLET: true,
      BASE: true,
      EMBED: true,
      IFRAME: true,
      LINK: true,
      MATH: true,
      META: true,
      OBJECT: true,
      SCRIPT: true,
      STYLE: true,
      SVG: true,
      TEMPLATE: true
    },
    mc = new SafeHtml(self_.trustedTypes && self_.trustedTypes.emptyHTML || "", obj_953);
  var sc = function(a, b) {
    AssertString(lblblb747(a), "must provide justification");
    AssertAssertion(!obobob765(lblblb747(a)), "must provide non-empty justification");
    return jc(b)
  };
  var tc = {
      MATH: true,
      SCRIPT: true,
      STYLE: true,
      SVG: true,
      TEMPLATE: true
    },
    uc = Ua(function() {
      if ("undefined" === typeof document) return false;
      var a = document.createElement("div"),
        b = document.createElement("div");
      b.appendChild(document.createElement("div"));
      a.appendChild(b);
      if (!a.firstChild) return false;
      b = a.firstChild.firstChild;
      a.innerHTML = GetSafeHtmlG(mc);
      return !b.parentElement
    }),
    vc = function(a, b) {
      if (uc())
        for (; a.lastChild;) a.removeChild(a.lastChild);
      a.innerHTML = GetSafeHtmlG(b)
    },
    wc = function(docDiv, b) {
      if (docDiv.tagName && tc[docDiv.tagName.toUpperCase()]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " +
        docDiv.tagName + ".");
      vc(docDiv, b)
    };
  var zc = function(a) {
      return -1 != a.indexOf("&") ? "document" in self_ ? xc(a) : yc(a) : a
    },
    xc = function(a) {
      var b = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"'
      };
      var c = self_.document.createElement("div");
      return a.replace(htmlEntityRegex, function(d, e) {
        var f = b[d];
        if (f) return f;
        "#" == e.charAt(0) && (e = Number("0" + e.slice(1)), isNaN(e) || (f = String.fromCharCode(e)));
        f || (wc(c, sc(new kbkbkb736(ibibib753, "Single HTML entity."), d + " ")), f = c.firstChild.nodeValue.slice(0, -1));
        return b[d] = f
      })
    },
    yc = function(a) {
      return a.replace(/&([^;]+);/g, function(b, c) {
        switch (c) {
          case "amp":
            return "&";
          case "lt":
            return "<";
          case "gt":
            return ">";
          case "quot":
            return '"';
          default:
            return "#" != c.charAt(0) || (c = Number("0" + c.slice(1)), isNaN(c)) ? b : String.fromCharCode(c)
        }
      })
    },
    htmlEntityRegex = /&([^;\s<&]+);?/g,
    Bc = function(a) {
      return null == a ? "" : String(a)
    },
    Cc = function(a) {
      return String(a).replace(/\-([a-z])/g, function(b, c) {
        return c.toUpperCase()
      })
    },
    Dc = function(a) {
      return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
        return c + d.toUpperCase()
      })
    };
  var Ec = function(a) {
      if (a.ra && "function" == typeof a.ra) return a.ra();
      if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values());
      if ("string" === typeof a) return a.split("");
      if (xaxaxa464(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
      }
      b = [];
      c = 0;
      for (d in a) b[c++] = a[d];
      return b
    },
    Fc = function(a) {
      if (a.Kb && "function" == typeof a.Kb) return a.Kb();
      if (!a.ra || "function" != typeof a.ra) {
        if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
        if (!("undefined" !== typeof Set && a instanceof Set)) {
          if (xaxaxa464(a) || "string" === typeof a) {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++) b.push(c);
            return b
          }
          b = [];
          c = 0;
          for (var d in a) b[c++] = d;
          return b
        }
      }
    },
    Gc = function(a, b, c) {
      if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
      else if (xaxaxa464(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, c);
      else
        for (var d = Fc(a), e = Ec(a), f = e.length, h = 0; h < f; h++) b.call(c, e[h], d && d[h], a)
    };
  var detailedUrlRegex = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
    Ic = function(a, b) {
      if (a) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
            e = null;
          if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1)
          } else f = a[c];
          b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
        }
      }
    };
  var JcJcJc1170 = function(sourceName) {
      this.l = this.g = null;
      this.o = sourceName || null
    },
    KcKcKc1174 = function(aaaaaa1174) {
      aaaaaa1174.g || (aaaaaa1174.g = new Map, aaaaaa1174.l = 0, aaaaaa1174.o && Ic(aaaaaa1174.o, function(bbbbbb1175, cccccc1175) {
        aaaaaa1174.add(decodeURIComponent(bbbbbb1175.replace(/\+/g, " ")), cccccc1175)
      }))
    };
  JcJcJc1170.prototype.add = function(a, b) {
    KcKcKc1174(this);
    this.o = null;
    a = String(a);
    var c = this.g.get(a);
    c || this.g.set(a, c = []);
    c.push(b);
    this.l = AssertNumber(this.l) + 1;
    return this
  };
  JcJcJc1170.prototype.remove = function(a) {
    KcKcKc1174(this);
    a = String(a);
    return this.g.has(a) ? (this.o = null, this.l = AssertNumber(this.l) - this.g.get(a).length, this.g.delete(a)) : false
  };
  JcJcJc1170.prototype.clear = function() {
    this.g = this.o = null;
    this.l = 0
  };
  var LcLcLc1198 = function(aaaaaa1198, bbbbbb1198) {
    KcKcKc1174(aaaaaa1198);
    bbbbbb1198 = String(bbbbbb1198);
    return aaaaaa1198.g.has(bbbbbb1198)
  };
  kkkkkkK8 = JcJcJc1170.prototype;
  kkkkkkK8.forEach = function(a, b) {
    KcKcKc1174(this);
    this.g.forEach(function(c, d) {
      c.forEach(function(e) {
        a.call(b, e, d, this)
      }, this)
    }, this)
  };
  kkkkkkK8.Kb = function() {
    KcKcKc1174(this);
    for (var arrA = Array.from(this.g.values()), arrB = Array.from(this.g.keys()), arrC = [], idxX = 0; idxX < arrB.length; idxX++)
      for (var value = arrA[idxX], idxY = 0; idxY < value.length; idxY++) arrC.push(arrB[idxX]);
    return arrC
  };
  kkkkkkK8.ra = function(a) {
    KcKcKc1174(this);
    var b = [];
    if ("string" === typeof a) LcLcLc1198(this, a) && (b = b.concat(this.g.get(String(a))));
    else {
      a = Array.from(this.g.values());
      for (var c = 0; c < a.length; c++) b = b.concat(a[c])
    }
    return b
  };
  kkkkkkK8.set = function(a, b) {
    KcKcKc1174(this);
    this.o = null;
    a = String(a);
    LcLcLc1198(this, a) && (this.l = AssertNumber(this.l) - this.g.get(a).length);
    this.g.set(a, [b]);
    this.l = AssertNumber(this.l) + 1;
    return this
  };
  kkkkkkK8.get = function(a, b) {
    if (!a) return b;
    a = this.ra(a);
    return 0 < a.length ? String(a[0]) : b
  };
  kkkkkkK8.toString = function() {
    if (this.o) return this.o;
    if (!this.g) return "";
    for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = this.ra(d);
      for (var f = 0; f < d.length; f++) {
        var h = e;
        "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
        a.push(h)
      }
    }
    return this.o = a.join("&")
  };
  kkkkkkK8.zc = function(a) {
    for (var b = 0; b < arguments.length; b++) Gc(arguments[b], function(c, d) {
      this.add(d, c)
    }, this)
  };
  /*

   SPDX-License-Identifier: Apache-2.0
  */
  var McArray = "src srcdoc codebase data href rel action formaction sandbox cite poster icon".split(" ");
  var NcObj = {};
  var OcOcOc1267 = function() {},
    Pc = function(a, b) {
      if (b !== NcObj) throw Error("Bad secret");
      this.g = a
    };
  ObjectCreateSetPrototypeOf(Pc, OcOcOc1267);
  Pc.prototype.toString = function() {
    return this.g
  };

  function VerifyCSS(cssRaw, isMultiple, errMsg) {
    if (!Array.isArray(cssRaw) || !Array.isArray(cssRaw.raw) || !isMultiple && 1 !== cssRaw.length) throw new TypeError(errMsg);
  };

  function RcRcRc1281(a, b) {
    if (void 0 !== a.tagName) {
      if ("script" === a.tagName.toLowerCase()) throw Error("Use safeScriptEl.setTextContent with a SafeScript.");
      if ("style" === a.tagName.toLowerCase()) throw Error("Use safeStyleEl.setTextContent with a SafeStyleSheet.");
    }
    a.innerHTML = GetSafeHtmlG(b)
  }

  function ScScSc1289(a, b) {
    var c = Tc;
    if (0 === c.length) throw Error("No prefixes are provided");
    if (c.map(function(d) {
        if (d instanceof Pc) d = d.g;
        else throw Error("Unexpected type when unwrapping SafeAttributePrefix");
        return d
      }).every(function(d) {
        return 0 !== "value".indexOf(d)
      })) throw Error('Attribute "value" does not match any of the allowed prefixes.');
    a.setAttribute("value", b)
  };
  var UcUcUc1301 = Object.freeze || function(aaaaaa1301) {
    return aaaaaa1301
  };
  var SetNameValue = function(name_, value_) {
    this.name = name_;
    this.value = value_
  };
  SetNameValue.prototype.toString = function() {
    return this.name
  };
  var OFF_Infinity = new SetNameValue("OFF", Infinity),
    SEVERE_1E3 = new SetNameValue("SEVERE", 1E3),
    WARNING_900 = new SetNameValue("WARNING", 900),
    CONFIG_700 = new SetNameValue("CONFIG", 700),
    FINE_500 = new SetNameValue("FINE", 500),
    Clear_ = function() {
      this.clear()
    },
    bd;
  Clear_.prototype.clear = function() {};
  var cdcdcd1322 = function(offValue, bbbbbb1322, cccccc1322) {
    this.reset(offValue || OFF_Infinity, bbbbbb1322, cccccc1322, void 0, void 0)
  };
  cdcdcd1322.prototype.reset = function(aaaaaa1325, bbbbbb1325) {
    this.g = bbbbbb1325
  };
  cdcdcd1322.prototype.getMessage = function() {
    return this.g
  };
  var dddddd1331 = function(aaaaaa1331, bbbbbb1331) {
      this.g = null;
      this.B = [];
      this.l = (void 0 === bbbbbb1331 ? null : bbbbbb1331) || null;
      this.u = [];
      this.o = {
        g: function() {
          return aaaaaa1331
        }
      }
    },
    ededed1342 = function(aaaaaa1342) {
      if (aaaaaa1342.g) return aaaaaa1342.g;
      if (aaaaaa1342.l) return ededed1342(aaaaaa1342.l);
      ThrowAssertionErrorFailure("Root logger has no level set.");
      return OFF_Infinity
    };
  dddddd1331.prototype.publish = function(a) {
    for (var b = this; b;) b.B.forEach(function(c) {
      c(a)
    }), b = b.l
  };
  var fd = function() {
      this.entries = {};
      var a = new dddddd1331("");
      a.g = CONFIG_700;
      this.entries[""] = a
    },
    gd, hd = function(a, b) {
      var c = a.entries[b];
      if (c) return c;
      c = hd(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
      var d = new dddddd1331(b, c);
      a.entries[b] = d;
      c.u.push(d);
      return d
    },
    id = function() {
      gd || (gd = new fd);
      return gd
    },
    jd = function(a, b, c) {
      var d;
      if (d = a)
        if (d = a && b) {
          d = b.value;
          var e = a ? ededed1342(hd(id(), a.g())) : OFF_Infinity;
          d = d >= e.value
        } d && (b = b || OFF_Infinity, d = hd(id(), a.g()), "function" === typeof c && (c = c()), bd || (bd = new Clear_), a = new cdcdcd1322(b, c, a.g()), d.publish(a))
    },
    kd = function(a, b) {
      a &&
        jd(a, SEVERE_1E3, b)
    },
    ld = function(a, b) {
      a && jd(a, FINE_500, b)
    };
  var isUrlOk;
  try {
    new URL("s://g"), isUrlOk = true
  } catch (a) {
    isUrlOk = false
  }
  var isUrlOk_ = isUrlOk,
    arr_1395 = [],
    pd = function() {};
  qd(function(a) {
    var b = hd(id(), "safevalues").o;
    b && jd(b, WARNING_900, "A URL with content '" + a + "' was sanitized away.")
  });

  function qd(a) {
    -1 === arr_1395.indexOf(a) && arr_1395.push(a);
    pd = function(b) {
      arr_1395.forEach(function(c) {
        c(b)
      })
    }
  };

  function rdrdrd1410(CSSRaw) {
    VerifyCSS(CSSRaw, false, "safeStyle is a template literal tag function that only accepts template literals without expressions. For example, safeStyle`foo`;");
    CSSRaw = CSSRaw[0];
    if (/[<>]/.test(CSSRaw)) throw Error("Forbidden characters in style string: " + CSSRaw);
    if (!/;$/.test(CSSRaw)) throw Error('Style string does not end with ";": ' + CSSRaw);
    if (!/:/.test(CSSRaw)) throw Error('Style string should contain one or more ":": ' + CSSRaw);
    return new IbIbIb832(CSSRaw, HbHbHb831)
  };
  var sdsdsd1418 = function(a) {
    this.Nc = a
  };

  function tdtdtd1422(a) {
    return new sdsdsd1418(function(b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":"
    })
  }
  var ududud1427 = [tdtdtd1422("data"), tdtdtd1422("http"), tdtdtd1422("https"), tdtdtd1422("mailto"), tdtdtd1422("ftp"), new sdsdsd1418(function(a) {
    return /^[^:]*([/?#]|$)/.test(a)
  })];

  function vdvdvd1431(urlPath) {
    var bbbbbb1430 = void 0 === bbbbbb1430 ? ududud1427 : bbbbbb1430;
    aaaaaa1431: {
      bbbbbb1430 = void 0 === bbbbbb1430 ? ududud1427 : bbbbbb1430;
      for (var c = 0; c < bbbbbb1430.length; ++c) {
        var dddddd1434 = bbbbbb1430[c];
        if (dddddd1434 instanceof sdsdsd1418 && dddddd1434.Nc(urlPath)) {
          urlPath = new BbBbBb805(urlPath, AbObj);
          break aaaaaa1431
        }
      }
      urlPath = void 0
    }
    return urlPath || GbGbGb829
  };
  var wdwdwd1447 = {
      Ye: true
    },
    xdxdxd1450 = {
      Xe: true
    },
    NotDirectlyError = function() {
      throw Error("Do not instantiate directly");
    };
  NotDirectlyError.prototype.Bb = null;
  NotDirectlyError.prototype.getContent = function() {
    return this.content
  };
  NotDirectlyError.prototype.toString = function() {
    return this.content
  };
  NotDirectlyError.prototype.ac = function() {
    if (this.za !== wdwdwd1447) throw Error("Sanitized content was not of kind HTML.");
    return sc(new kbkbkb736(ibibib753, "Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value."), this.toString())
  };
  var zdzdzd1467 = function() {
    NotDirectlyError.call(this)
  };
  googInherits(zdzdzd1467, NotDirectlyError);
  zdzdzd1467.prototype.za = wdwdwd1447;
  var AdAdAd1472 = function() {
    NotDirectlyError.call(this)
  };
  googInherits(AdAdAd1472, NotDirectlyError);
  AdAdAd1472.prototype.za = xdxdxd1450;
  AdAdAd1472.prototype.Bb = 1;
  var BdBdBd1478 = function(aaaaaa1478, bbbbbb1478, cccccc1478) {
    (bbbbbb1478 = null != aaaaaa1478 && aaaaaa1478.za === bbbbbb1478) && AssertAssertion(aaaaaa1478.constructor === cccccc1478);
    return bbbbbb1478
  };

  function GetNavigatorUserAgentDataPlatform() {
    return _navigatorUserAgentDataBrands ? !!_navigatorUserAgentData && !!_navigatorUserAgentData.platform : false
  }

  function IsIPhone() {
    return IsNavigatorUserAgentExist("iPhone") && !IsNavigatorUserAgentExist("iPod") && !IsNavigatorUserAgentExist("iPad")
  }

  function IsIPhoneIPadIpod() {
    return IsIPhone() || IsNavigatorUserAgentExist("iPad") || IsNavigatorUserAgentExist("iPod")
  }

  function IsMac() {
    return GetNavigatorUserAgentDataPlatform() ? "macOS" === _navigatorUserAgentData.platform : IsNavigatorUserAgentExist("Macintosh")
  };
  var Gd = function(a) {
    Gd[" "](a);
    return a
  };
  Gd[" "] = function() {};
  var Hd = function(a, b) {
    try {
      return Gd(a[b]), !0
    } catch (c) {}
    return false
  };
  var IdIdId1507 = ec(),
    FFFFFF1508 = IsNavigatorBrands() ? false : IsNavigatorUserAgentExist("Trident") || IsNavigatorUserAgentExist("MSIE"),
    Jd = IsNavigatorUserAgentExist("Edge"),
    Kd = Jd || FFFFFF1508,
    isMoz = IsNavigatorUserAgentExist("Gecko") && !(-1 != getNavigatorUserAgent().toLowerCase().indexOf("webkit") && !IsNavigatorUserAgentExist("Edge")) && !(IsNavigatorUserAgentExist("Trident") || IsNavigatorUserAgentExist("MSIE")) && !IsNavigatorUserAgentExist("Edge"),
    isWebkit = -1 != getNavigatorUserAgent().toLowerCase().indexOf("webkit") && !IsNavigatorUserAgentExist("Edge"),
    isWebkitMobile = isWebkit && IsNavigatorUserAgentExist("Mobile"),
    isMac = IsMac(),
    isWindows = GetNavigatorUserAgentDataPlatform() ? "Windows" === _navigatorUserAgentData.platform : IsNavigatorUserAgentExist("Windows"),
    isAndroid = GetNavigatorUserAgentDataPlatform() ? "Android" === _navigatorUserAgentData.platform : IsNavigatorUserAgentExist("Android"),
    isIPhone = IsIPhone(),
    isIPad_1 = IsNavigatorUserAgentExist("iPad"),
    isIPad_2 = IsNavigatorUserAgentExist("iPod"),
    isIPhoneIPadIpod = IsIPhoneIPadIpod(),
    GetDocumentMode = function() {
      var _doc = self_.document;
      return _doc ? _doc.documentMode : void 0
    },
    Ud;
  a: {
    var Vd = "",
      Wd = function() {
        var _navigatorUserAgent = getNavigatorUserAgent();
        if (isMoz) return /rv:([^\);]+)(\)|;)/.exec(_navigatorUserAgent);
        if (Jd) return /Edge\/([\d\.]+)/.exec(_navigatorUserAgent);
        if (FFFFFF1508) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(_navigatorUserAgent);
        if (isWebkit) return /WebKit\/(\S+)/.exec(_navigatorUserAgent);
        if (IdIdId1507) return /(?:Version)[ \/]?(\S+)/.exec(_navigatorUserAgent)
      }();Wd && (Vd = Wd ? Wd[1] : "");
    if (FFFFFF1508) {
      var Xd = GetDocumentMode();
      if (null != Xd && Xd > parseFloat(Vd)) {
        Ud = String(Xd);
        break a
      }
    }
    Ud = Vd
  }
  var Yd = Ud,
    Zd;
  if (self_.document && FFFFFF1508) {
    var $d = GetDocumentMode();
    Zd = $d ? $d : parseInt(Yd, 10) || void 0
  } else Zd = void 0;
  var ae = Zd;
  var be = function(a) {
      if (null != a) switch (a.Bb) {
        case 1:
          return 1;
        case -1:
          return -1;
        case 0:
          return 0
      }
      return null
    },
    fe = function(string) {
      if (BdBdBd1478(string, wdwdwd1447, zdzdzd1467)) {
          return string;
      }
      else if (string instanceof SafeHtml) {
          return ce(GetSafeHtmlG(string).toString());
      }
      else {
          return ce(String(String(string)).replace(escapeHtmlRegex, REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE), be(string));
      }
    },
    ce = function(a) {
      function b(c) {
        this.content = c
      }
      b.prototype = a.prototype;
      return function(c, d) {
        c = new b(String(c));
        void 0 !== d && (c.Bb = d);
        return c
      }
    }(zdzdzd1467),
    ge = {},
    hehehehe1587 = function(langKey, googleTranslateUrl) {
      return langKey && googleTranslateUrl && langKey.Mc && googleTranslateUrl.Mc ? langKey.za !== googleTranslateUrl.za ? false : langKey.toString() === googleTranslateUrl.toString() : langKey instanceof
      NotDirectlyError && googleTranslateUrl instanceof NotDirectlyError ? langKey.za != googleTranslateUrl.za ? false : langKey.toString() == googleTranslateUrl.toString() : langKey == googleTranslateUrl
    },
    IIIIII1591 = function(aaaaaa1591) {
      BdBdBd1478(aaaaaa1591, wdwdwd1447, zdzdzd1467) ? (aaaaaa1591 = aaaaaa1591.getContent(), aaaaaa1591 = String(aaaaaa1591).replace(htmlTagRegex, "").replace(lessThanSignRegex, "&lt;"), aaaaaa1591 = String(aaaaaa1591).replace(normalizeHtmlRegex, REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE)) : aaaaaa1591 = String(aaaaaa1591).replace(escapeHtmlRegex, REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE);
      return aaaaaa1591
    },
    le = {},
    me = function() {
      AssertAssertion(le === le, "found an incorrect call marker, was an internal function called from the top level?")
    },
    ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE = {
      "\x00": "&#0;",
      "\t": "&#9;",
      "\n": "&#10;",
      "\v": "&#11;",
      "\f": "&#12;",
      "\r": "&#13;",
      " ": "&#32;",
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#39;",
      "-": "&#45;",
      "/": "&#47;",
      "<": "&lt;",
      "=": "&#61;",
      ">": "&gt;",
      "`": "&#96;",
      "\u0085": "&#133;",
      "\u00a0": "&#160;",
      "\u2028": "&#8232;",
      "\u2029": "&#8233;"
    },
    REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE = function(match) {
      return ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE[match]
    },
    escapeHtmlRegex = /[\x00\x22\x26\x27\x3c\x3e]/g,
    normalizeHtmlRegex = /[\x00\x22\x27\x3c\x3e]/g,
    safeHtmlAttrRegex = /^(?!on|src|(?:action|archive|background|cite|classid|codebase|content|data|dsync|href|http-equiv|longdesc|style|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i,
    htmlTagRegex = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    lessThanSignRegex = /</g;
  var J = function(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0
  };
  J.prototype.toString = function() {
    return "(" + this.x + ", " + this.y + ")"
  };
  var pe = function(a, b) {
    return new J(a.x - b.x, a.y - b.y)
  };
  J.prototype.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
  };
  J.prototype.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
  };
  J.prototype.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
  };
  J.prototype.translate = function(a, b) {
    a instanceof J ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof b && (this.y += b));
    return this
  };
  var qe = function(a, b) {
    this.width = a;
    this.height = b
  };
  kkkkkkK8 = qe.prototype;
  kkkkkkK8.toString = function() {
    return "(" + this.width + " x " + this.height + ")"
  };
  kkkkkkK8.aspectRatio = function() {
    return this.width / this.height
  };
  kkkkkkK8.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
  };
  kkkkkkK8.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
  };
  kkkkkkK8.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
  };
  var tetete1682 = function(aaaaaa1682) {
      return aaaaaa1682 ? new rerere1867(GetElementDocument(aaaaaa1682)) : FaFaFa533 || (FaFaFa533 = new rerere1867)
    },
    GetElementById = function(doc, id) {
      return "string" === typeof id ? doc.getElementById(id) : id
    },
    queryJfkTooltipData = function(doc) {
      var doc_ = doc || document;
      return doc_.querySelectorAll && doc_.querySelector ? doc_.querySelectorAll(".jfk-tooltip-data") : veveveve(document, "jfk-tooltip-data", doc)
    },
    getElementsByClass = function(className, doc) {
      var doc_ = doc || document;
      if (doc_.getElementsByClassName) className = doc_.getElementsByClassName(className)[0];
      else {
        doc_ = document;
        var doc2_ = doc || doc_;
        className = doc2_.querySelectorAll && doc2_.querySelector && className ? doc2_.querySelector(className ? "." + className : "") : veveveve(doc_, className, doc)[0] || null
      }
      return className || null
    },
    veveveve = function(doc, className, doc2) {
      var len;
      doc = doc2 || doc;
      if (doc.querySelectorAll && doc.querySelector && className) return doc.querySelectorAll(className ? "." + className : "");
      if (className && doc.getElementsByClassName) {
        var htmlCollection = doc.getElementsByClassName(className);
        return htmlCollection
      }
      htmlCollection = doc.getElementsByTagName("*");
      if (className) {
        var obj = {};
        for (doc2 = len = 0; doc = htmlCollection[doc2]; doc2++) {
          var h = doc.className;
          "function" == typeof h.split && IsExistElement(h.split(/\s+/), className) && (obj[len++] = doc)
        }
        obj.length = len;
        return obj
      }
      return htmlCollection
    },
    zezeze1723 = function(aaaaaa1732, bbbbbb1723) {
      ababab685(bbbbbb1723, function(cccccc1724, dddddd1724) {
        cccccc1724 && "object" == typeof cccccc1724 && cccccc1724.sa && (cccccc1724 = cccccc1724.ea());
        "style" == dddddd1724 ? aaaaaa1732.style.cssText = cccccc1724 : "class" == dddddd1724 ? aaaaaa1732.className = cccccc1724 : "for" == dddddd1724 ?
          aaaaaa1732.htmlFor = cccccc1724 : yeyeye1730.hasOwnProperty(dddddd1724) ? aaaaaa1732.setAttribute(yeyeye1730[dddddd1724], cccccc1724) : 0 == dddddd1724.lastIndexOf("aria-", 0) || 0 == dddddd1724.lastIndexOf("data-", 0) ? aaaaaa1732.setAttribute(dddddd1724, cccccc1724) : aaaaaa1732[dddddd1724] = cccccc1724
      })
    },
    yeyeye1730 = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      frameborder: "frameBorder",
      height: "height",
      maxlength: "maxLength",
      nonce: "nonce",
      role: "role",
      rowspan: "rowSpan",
      type: "type",
      usemap: "useMap",
      valign: "vAlign",
      width: "width"
    },
    CeCeCe1745 = function(aaaaaa1745) {
      var b = AeAeAe1751(aaaaaa1745);
      aaaaaa1745 = IsParentWindowOrDefaultView(aaaaaa1745);
      return FFFFFF1508 && aaaaaa1745.pageYOffset != b.scrollTop ? new J(b.scrollLeft, b.scrollTop) : new J(aaaaaa1745.pageXOffset ||
        b.scrollLeft, aaaaaa1745.pageYOffset || b.scrollTop)
    },
    AeAeAe1751 = function(aaaaaa1751) {
      return aaaaaa1751.scrollingElement ? aaaaaa1751.scrollingElement : !isWebkit && IsCSS1Compat(aaaaaa1751) ? aaaaaa1751.documentElement : aaaaaa1751.body || aaaaaa1751.documentElement
    },
    IsParentWindowOrDefaultView = function(aaaaaa1754) {
      return aaaaaa1754.parentWindow || aaaaaa1754.defaultView
    },
    Ee = function(a, b, c, d) {
      function e(g) {
        g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
      }
      for (; d < c.length; d++) {
        var fArr = c[d];
        if (!xaxaxa464(fArr) || IsObjectOrFunction(fArr) && 0 < fArr.nodeType) e(fArr);
        else {
          a: {
            if (fArr && "number" == typeof fArr.length) {
              if (IsObjectOrFunction(fArr)) {
                var h = "function" == typeof fArr.item || "string" == typeof fArr.item;
                break a
              }
              if ("function" ===
                typeof fArr) {
                h = "function" == typeof fArr.item;
                break a
              }
            }
            h = false
          }
          Wa(h ? CloneArr(fArr) : fArr, e)
        }
      }
    },
    CreateDocDiv = function(doc, divName) {
      divName = String(divName);
      "application/xhtml+xml" === doc.contentType && (divName = divName.toLowerCase());
      return doc.createElement(divName)
    },
    IsCSS1Compat = function(aaaaaa1788) {
      return "CSS1Compat" == aaaaaa1788.compatMode
    },
    AppendElementChild = function(doc, element) {
      AssertAssertion(null != doc && null != element, "goog.dom.appendChild expects non-null arguments");
      doc.appendChild(element)
    },
    RemoveElementChild = function(element) {
      for (var child; child = element.firstChild;) element.removeChild(child)
    },
    RemoveElement = function(element) {
      element && element.parentNode && element.parentNode.removeChild(element)
    },
    IsContainsElement = function(element1, element2) {
      if (!element1 || !element2)
        return false;
      if (element1.contains && 1 == element2.nodeType) //01:Node.ELEMENT_NODE: An Element node like <p> or <div>
        return element1 == element2 || element1.contains(element2);
      if ("undefined" != typeof element1.compareDocumentPosition)
        return element1 == element2 || !!(element1.compareDocumentPosition(element2) & 16);

      for (; element2 && element1 != element2;)
        element2 = element2.parentNode;
      return element2 == element1
    },
    GetElementDocument = function(element) {
      AssertAssertion(element, "Node cannot be null or undefined."); //09:Node.DOCUMENT_NODE: A Document node
      return 9 == element.nodeType ? element : element.ownerDocument || element.document
    },
    SetElementTextContent = function(element, textContent) {
      AssertAssertion(null != element, "goog.dom.setTextContent expects a non-null value for node");
      if ("textContent" in element) element.textContent = textContent;
      else if (3 == element.nodeType) element.data = String(textContent); //03:Node.TEXT_NODE: The actual Text inside an Element or Attr
      else if (element.firstChild && 3 == element.firstChild.nodeType) {
        for (; element.lastChild !=
          element.firstChild;) element.removeChild(AssertAssertion(element.lastChild));
        element.firstChild.data = String(textContent)
      } else {
        RemoveElementChild(element);
        var cccccc1823 = GetElementDocument(element);
        element.appendChild(cccccc1823.createTextNode(String(textContent)))
      }
    },
    NodeNames = {
      SCRIPT: 1,
      STYLE: 1,
      HEAD: 1,
      IFRAME: 1,
      OBJECT: 1
    },
    MeMeMe1844 = {
      IMG: " ",
      BR: "\n"
    },
    Ne = function(a, b) {
      b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
    },
    Oe = function(a) {
      a = a.tabIndex;
      return "number" === typeof a && 0 <= a && 32768 > a
    },
    Qe = function(a) {
      var b = [];
      PePePe1850(a, b, false);
      return b.join("")
    },
    PePePe1850 = function(aaaaaa1850, bbbbbb1850, cccccc1850) {
      if (!(aaaaaa1850.nodeName in NodeNames)) //03:Node.TEXT_NODE: The actual Text inside an Element or Attr
        if (3 == aaaaaa1850.nodeType) cccccc1850 ? bbbbbb1850.push(String(aaaaaa1850.nodeValue).replace(/(\r\n|\r|\n)/g,
          "")) : bbbbbb1850.push(aaaaaa1850.nodeValue);
        else if (aaaaaa1850.nodeName in MeMeMe1844) bbbbbb1850.push(MeMeMe1844[aaaaaa1850.nodeName]);
      else
        for (aaaaaa1850 = aaaaaa1850.firstChild; aaaaaa1850;) PePePe1850(aaaaaa1850, bbbbbb1850, cccccc1850), aaaaaa1850 = aaaaaa1850.nextSibling
    },
    ReReRe1858 = function(aaaaaa1858, bbbbbb1858) {
      for (var cIdx = 0; aaaaaa1858;) {
        AssertAssertion("parentNode" != aaaaaa1858.name);
        if (bbbbbb1858(aaaaaa1858)) return aaaaaa1858;
        aaaaaa1858 = aaaaaa1858.parentNode;
        cIdx++
      }
      return null
    },
    rerere1867 = function(aaaaaa1867) {
      this.g = aaaaaa1867 || self_.document || document
    };
  kkkkkkK8 = rerere1867.prototype;
  kkkkkkK8.A = function(a) {
    return GetElementById(this.g, a)
  };
  kkkkkkK8.setProperties = zezeze1723;
  kkkkkkK8.wa = function(a, b, c) {
    var d = this.g,
      e = arguments,
      f = e[1],
      h = CreateDocDiv(d, String(e[0]));
    f && ("string" === typeof f ? h.className = f : Array.isArray(f) ? h.className = f.join(" ") : zezeze1723(h, f));
    2 < e.length && Ee(d, h, e, 2);
    return h
  };
  kkkkkkK8.Ac = function(a, b) {
    Ee(GetElementDocument(a), a, arguments, 1)
  };
  kkkkkkK8.getChildren = function(a) {
    return void 0 != a.children ? a.children : Array.prototype.filter.call(a.childNodes, function(b) {
      return 1 == b.nodeType //01:Node.ELEMENT_NODE: An Element node like <p> or <div>
    })
  };
  kkkkkkK8.contains = IsContainsElement;
  /*
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  function Te(a, html, c) {
    a = a(html || Ue, void 0);
    c = c || tetete1682();
    if (a && a.g) c = a.g();
    else {
      c = CreateDocDiv(c.g, "DIV");
      a = VeVeVe1914(a);
      html = a.ea();
      var matches = html.match(invalidHtmlTagRegex);
      AssertAssertion(!matches, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", matches && matches[0], html);
      vc(c, a)
    }
    1 == c.childNodes.length && (a = c.firstChild, 1 == a.nodeType && (c = a)); //01:Node.ELEMENT_NODE: An Element node like <p> or <div>
    return c
  }

  function VeVeVe1914(aaaaaa1914) {
    if (!IsObjectOrFunction(aaaaaa1914)) return kckckc969(String(aaaaaa1914));
    if (aaaaaa1914.ac) {
      var safeHtml_ = aaaaaa1914.ac();
      if (safeHtml_ instanceof SafeHtml) return safeHtml_
    }
    ThrowAssertionErrorFailure("Soy template output is unsafe for use as HTML: " + aaaaaa1914);
    return kckckc969("zSoyz")
  }
  var invalidHtmlTagRegex = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,
    Ue = {};
  var Xe = function(a, b) {
    if (ge["jfk.templates.button.strict"]) return ge["jfk.templates.button.strict"](a, b);
    a = a || {};
    var c = a.attributes,
      d = a.content,
      e = a.disabled,
      f = a.id,
      h = a.df,
      g = a.title,
      l = a.Rc,
      n = a.value,
      p = ce;
    f = '<div role="button"' + (f ? ' id="' + IIIIII1591(f) + '"' : "") + ' class="';
    var q = a || {};
    a = q.Dc;
    var u = q.disabled,
      x = q.checked,
      E = q.style;
    q = q.width;
    me();
    if (ge["jfk.templates.button.classes_"]) b = ge["jfk.templates.button.classes_"]({
      Dc: a,
      disabled: u,
      checked: x,
      style: E,
      width: q
    }, b);
    else {
      b = "goog-inline-block jfk-button ";
      switch (IsObjectOrFunction(E) ?
        E.toString() : E) {
        case 0:
          b += "jfk-button-standard";
          break;
        case 2:
          b += "jfk-button-action";
          break;
        case 3:
          b += "jfk-button-primary";
          break;
        case 1:
          b += "jfk-button-default";
          break;
        case 4:
          b += "jfk-button-flat";
          break;
        case 5:
          b += "jfk-button-mini";
          break;
        case 6:
          b += "jfk-button-contrast";
          break;
        default:
          b += "jfk-button-standard"
      }
      b += (hehehehe1587(q, 1) ? " jfk-button-narrow" : "") + (x ? " jfk-button-checked" : "") + (a ? " " + a : "") + (u ? " jfk-button-disabled" : "")
    }
    e = f + IIIIII1591(b) + '"' + (e ? ' aria-disabled="true"' : ' tabindex="' + (h ? IIIIII1591(h) : "0") + '"') + (g ? l ? ' data-tooltip="' +
      IIIIII1591(g) + '"' : ' title="' + IIIIII1591(g) + '"' : "") + (n ? ' value="' + IIIIII1591(n) + '"' : "");
    c ? (BdBdBd1478(c, xdxdxd1450, AdAdAd1472) ? c = c.getContent() : (c = String(c), safeHtmlAttrRegex.test(c) || (ThrowAssertionErrorFailure("Bad value `%s` for |filterHtmlAttributes", [c]), c = "zSoyz")), BdBdBd1478(c, xdxdxd1450, AdAdAd1472) && (c = c.getContent()), c = (c && !c.startsWith(" ") ? " " : "") + c) : c = "";
    return p(e + c + ">" + fe(null != d ? d : "") + "</div>")
  };
  var Ye = IsNavigatorFirefoxFxiOS(),
    IsNavigatorIPhonePod = IsIPhone() || IsNavigatorUserAgentExist("iPod"),
    IsNavigatorIPad = IsNavigatorUserAgentExist("iPad"),
    af = IsNavigatorUserAgentExist("Android") && !(IsBrandChromeCriOSEdgeSilk() || IsNavigatorFirefoxFxiOS() || ec() || IsNavigatorUserAgentExist("Silk")),
    bf = IsBrandChromeCriOSEdgeSilk(),
    cf = IsNavigatorUserAgentExist("Safari") && !(IsBrandChromeCriOSEdgeSilk() || (IsNavigatorBrands() ? 0 : IsNavigatorUserAgentExist("Coast")) || ec() || (IsNavigatorBrands() ? 0 : IsNavigatorUserAgentExist("Edge")) || (IsNavigatorBrands() ? IsExistBrand("Microsoft Edge") : IsNavigatorUserAgentExist("Edg/")) || (IsNavigatorBrands() ? IsExistBrand("Opera") : IsNavigatorUserAgentExist("OPR")) || IsNavigatorFirefoxFxiOS() || IsNavigatorUserAgentExist("Silk") || IsNavigatorUserAgentExist("Android")) && !IsIPhoneIPadIpod();
  var df = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol("INTERNAL_ARRAY_STATE") : void 0,
    ef = Object.getOwnPropertyDescriptor(Array.prototype, "Oc");
  Object.defineProperties(Array.prototype, {
    Oc: {
      get: function() {
        function a(e, f) {
          e & b && c.push(f)
        }
        var b = ff(this),
          c = [];
        a(1, "IS_REPEATED_FIELD");
        a(2, "IS_IMMUTABLE_ARRAY");
        a(4, "IS_API_FORMATTED");
        a(8, "ONLY_MUTABLE_VALUES");
        a(16, "MUTABLE_REFERENCES_ARE_OWNED");
        a(32, "CONSTRUCTED");
        a(64, "TRANSFERRED");
        a(128, "IS_FIXED_GROUP");
        var d = c.join(",");
        return ef ? ef.get.call(this) + "|" + d : d
      },
      configurable: true,
      enumerable: false
    }
  });

  function ff(arr) {
    AssertArray(arr, "state is only maintained on arrays.");
    var b;
    df ? b = arr[df] : b = arr.We;
    return null == b ? 0 : b
  };
  var ThrowMutableError = function() {
    throw Error("please construct maps as mutable then call toImmutable");
  };
  if ("undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance) {
    var ThrowInstanceofCheckImmutableMapError = function() {
        throw Error("Cannot perform instanceof checks on ImmutableMap: please use isImmutableMap or isMutableMap to assert on the mutability of a map. See go/jspb-api-gotchas#immutable-classes for more information");
      },
      jfjfjf2031 = {};
    Object.defineProperties(ThrowMutableError, (jfjfjf2031[Symbol.hasInstance] = {
      value: ThrowInstanceofCheckImmutableMapError,
      configurable: false,
      writable: false,
      enumerable: false
    }, jfjfjf2031));
    AssertAssertion(ThrowMutableError[Symbol.hasInstance] === ThrowInstanceofCheckImmutableMapError, "defineProperties did not work: was it monkey-patched?")
  };
  if ("undefined" !== typeof Proxy) {
    var _throwOwnedByJSPBError = ThrowOwnedByJSPBError;
    new Proxy({}, {
      getPrototypeOf: _throwOwnedByJSPBError,
      setPrototypeOf: _throwOwnedByJSPBError,
      isExtensible: _throwOwnedByJSPBError,
      preventExtensions: _throwOwnedByJSPBError,
      getOwnPropertyDescriptor: _throwOwnedByJSPBError,
      defineProperty: _throwOwnedByJSPBError,
      has: _throwOwnedByJSPBError,
      get: _throwOwnedByJSPBError,
      set: _throwOwnedByJSPBError,
      deleteProperty: _throwOwnedByJSPBError,
      apply: _throwOwnedByJSPBError,
      construct: _throwOwnedByJSPBError
    })
  }

  function ThrowOwnedByJSPBError() {
    throw Error("this array or object is owned by JSPB and should not be reused, did you mean to copy it with copyJspbArray? See go/jspb-api-gotchas#construct_from_array");
    throw Error();
  };
  AssertAssertion(true);

  function JspbGetTypeName() {};
  (function() {
    var SelfJspbGetTypeName = self_.jspbGetTypeName;
    self_.jspbGetTypeName = SelfJspbGetTypeName ? function(b) {
      return SelfJspbGetTypeName(b) || void 0
    } : JspbGetTypeName
  })();
  var GetClassName = function(element) {
      return "string" == typeof element.className ? element.className : element.getAttribute && element.getAttribute("class") || ""
    },
    GetClassList = function(element) {
      return element.classList ? element.classList : GetClassName(element).match(/\S+/g) || []
    },
    SetClassName = function(element, className) {
      "string" == typeof element.className ? element.className = className : element.setAttribute && element.setAttribute("class", className)
    },
    IsExistClass = function(element, searchElement) {
      return element.classList ? element.classList.contains(searchElement) : IsExistElement(GetClassList(element), searchElement)
    },
    AddClassName = function(element, className) {
      if (element.classList) element.classList.add(className);
      else if (!IsExistClass(element, className)) {
        var className_ = GetClassName(element);
        SetClassName(element, className_ + (0 < className_.length ? " " + className : className))
      }
    },
    PushClassArr = function(element, classArr) {
      if (element.classList) Array.prototype.forEach.call(classArr,
        function(className) {
          AddClassName(element, className)
        });
      else {
        var classObj = {};
        Array.prototype.forEach.call(GetClassList(element), function(className) {
          classObj[className] = true
        });
        Array.prototype.forEach.call(classArr, function(className) {
          classObj[className] = true
        });
        classArr = "";
        for (var className_ in classObj) classArr += 0 < classArr.length ? " " + className_ : className_;
        SetClassName(element, classArr)
      }
    },
    RemoveClassName = function(element, className) {
      element.classList ? element.classList.remove(className) : IsExistClass(element, className) && SetClassName(element, Array.prototype.filter.call(GetClassList(element), function(c) {
        return c != className
      }).join(" "))
    },
    uf = function(a, elements) {
      a.classList ? Array.prototype.forEach.call(elements, function(c) {
        RemoveClassName(a, c)
      }) : SetClassName(a, Array.prototype.filter.call(GetClassList(a), function(searchElement) {
        return !IsExistElement(elements, searchElement)
      }).join(" "))
    };
  var vf = function() {};
  vf.prototype.u = function() {};
  var wf = function(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
  };
  kkkkkkK8 = wf.prototype;
  kkkkkkK8.toString = function() {
    return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
  };
  kkkkkkK8.contains = function(a) {
    return this && a ? a instanceof wf ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : false
  };
  kkkkkkK8.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
  };
  kkkkkkK8.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
  };
  kkkkkkK8.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
  };
  kkkkkkK8.translate = function(a, b) {
    a instanceof J ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (AssertNumber(a), this.left += a, this.right += a, "number" === typeof b && (this.top += b, this.bottom += b));
    return this
  };
  var xf = function(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
  };
  kkkkkkK8 = xf.prototype;
  kkkkkkK8.toString = function() {
    return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
  };
  kkkkkkK8.contains = function(a) {
    return a instanceof J ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
  };
  kkkkkkK8.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
  };
  kkkkkkK8.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
  };
  kkkkkkK8.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
  };
  kkkkkkK8.translate = function(a, b) {
    a instanceof J ? (this.left += a.x, this.top += a.y) : (this.left += AssertNumber(a), "number" === typeof b && (this.top += b));
    return this
  };
  var zf = function(a, b, c) {
      if ("string" === typeof b)(b = yf(a, b)) && (a.style[b] = c);
      else
        for (var d in b) {
          c = a;
          var e = b[d],
            f = yf(c, d);
          f && (c.style[f] = e)
        }
    },
    Af = {},
    yf = function(a, b) {
      var c = Af[b];
      if (!c) {
        var d = Cc(b);
        c = d;
        void 0 === a.style[d] && (d = (isWebkit ? "Webkit" : isMoz ? "Moz" : FFFFFF1508 ? "ms" : null) + Dc(d), void 0 !== a.style[d] && (c = d));
        Af[b] = c
      }
      return c
    },
    Bf = function(a, b) {
      a: {
        var c = GetElementDocument(a);
        if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
          c = c[b] || c.getPropertyValue(b) || "";
          break a
        }
        c = ""
      }
      return c || (a.currentStyle ?
        a.currentStyle[b] : null) || a.style && a.style[b]
    },
    Df = function(a, b, c) {
      if (b instanceof J) {
        var d = b.x;
        b = b.y
      } else d = b, b = c;
      a.style.left = Cf(d);
      a.style.top = Cf(b)
    },
    Ef = function(a) {
      try {
        return a.getBoundingClientRect()
      } catch (b) {
        return {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        }
      }
    },
    Ff = function(a) {
      if (FFFFFF1508 && !(8 <= Number(ae))) return AssertAssertion(a && "offsetParent" in a), a.offsetParent;
      var b = GetElementDocument(a),
        c = Bf(a, "position"),
        d = "fixed" == c || "absolute" == c;
      for (a = a.parentNode; a && a != b; a = a.parentNode) //11:Node.DOCUMENT_FRAGMENT_NODE: A DocumentFragment node
        if (11 == a.nodeType && a.host && (a = a.host), c = Bf(a, "position"), d = d && "static" ==
          c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
      return null
    },
    Hf = function(a) {
      for (var b = new wf(0, Infinity, Infinity, 0), c = tetete1682(a), d = c.g.body, e = c.g.documentElement, f = AeAeAe1751(c.g); a = Ff(a);)
        if (!(FFFFFF1508 && 0 == a.clientWidth || isWebkit && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != Bf(a, "overflow")) {
          var h = Gf(a),
            g = new J(a.clientLeft, a.clientTop);
          h.x += g.x;
          h.y += g.y;
          b.top = Math.max(b.top, h.y);
          b.right = Math.min(b.right, h.x + a.clientWidth);
          b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
          b.left = Math.max(b.left, h.x)
        } d = f.scrollLeft;
      f = f.scrollTop;
      b.left = Math.max(b.left, d);
      b.top = Math.max(b.top, f);
      c = (IsParentWindowOrDefaultView(c.g) || window).document;
      c = IsCSS1Compat(c) ? c.documentElement : c.body;
      c = new qe(c.clientWidth, c.clientHeight);
      b.right = Math.min(b.right, d + c.width);
      b.bottom = Math.min(b.bottom, f + c.height);
      return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    },
    Gf = function(a) {
      var b = GetElementDocument(a);
      AssertObject(a, "Parameter is required");
      var c = new J(0, 0);
      var d = b ? GetElementDocument(b) : document;
      d = !FFFFFF1508 || 9 <=
        Number(ae) || IsCSS1Compat(tetete1682(d).g) ? d.documentElement : d.body;
      if (a == d) return c;
      a = Ef(a);
      b = CeCeCe1745(tetete1682(b).g);
      c.x = a.left + b.x;
      c.y = a.top + b.y;
      return c
    },
    Jf = function(a, b) {
      a = IfIfIf2334(a);
      b = IfIfIf2334(b);
      return new J(a.x - b.x, a.y - b.y)
    },
    Kf = function(a) {
      a = Ef(a);
      return new J(a.left, a.top)
    },
    IfIfIf2334 = function(a) {
      AssertAssertion(a);
      if (1 == a.nodeType) return Kf(a); //01:Node.ELEMENT_NODE: An Element node like <p> or <div>
      a = a.changedTouches ? a.changedTouches[0] : a;
      return new J(a.clientX, a.clientY)
    },
    Cf = function(a) {
      "number" == typeof a && (a += "px");
      return a
    },
    Mf = function(a) {
      var b = Lf;
      if ("none" != Bf(a, "display")) return b(a);
      var c = a.style,
        d =
        c.display,
        e = c.visibility,
        f = c.position;
      c.visibility = "hidden";
      c.position = "absolute";
      c.display = "inline";
      a = b(a);
      c.display = d;
      c.position = f;
      c.visibility = e;
      return a
    },
    Lf = function(a) {
      var b = a.offsetWidth,
        c = a.offsetHeight,
        d = isWebkit && !b && !c;
      return (void 0 === b || d) && a.getBoundingClientRect ? (a = Ef(a), new qe(a.right - a.left, a.bottom - a.top)) : new qe(b, c)
    },
    Nf = function(a) {
      var b = Gf(a);
      a = Mf(a);
      return new xf(b.x, b.y, a.width, a.height)
    },
    Of = function(a, b) {
      a.style.display = b ? "" : "none"
    },
    Pf = function(a) {
      return "rtl" == Bf(a, "direction")
    },
    Qf =
    isMoz ? "MozUserSelect" : isWebkit || Jd ? "WebkitUserSelect" : null;
  var Rf = function() {
    if (isWindows) {
      var windowsNtVersionRegex = /Windows NT ([0-9.]+)/;
      return (windowsNtVersionRegex = windowsNtVersionRegex.exec(getNavigatorUserAgent())) ? windowsNtVersionRegex[1] : "0"
    }
    return isMac ? (windowsNtVersionRegex = /1[0|1][_.][0-9_.]+/, (windowsNtVersionRegex = windowsNtVersionRegex.exec(getNavigatorUserAgent())) ? windowsNtVersionRegex[0].replace(/_/g, ".") : "10") : isAndroid ? (windowsNtVersionRegex = /Android\s+([^\);]+)(\)|;)/, (windowsNtVersionRegex = windowsNtVersionRegex.exec(getNavigatorUserAgent())) ? windowsNtVersionRegex[1] : "") : isIPhone || isIPad_1 || isIPad_2 ? (windowsNtVersionRegex = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (windowsNtVersionRegex = windowsNtVersionRegex.exec(getNavigatorUserAgent())) ? windowsNtVersionRegex[1].replace(/_/g, ".") : "") : ""
  }();
  var SfSfSf2361 = function(a) {
      return (a = a.exec(getNavigatorUserAgent())) ? a[1] : ""
    },
    Tf = function() {
      if (Ye) return SfSfSf2361(/Firefox\/([0-9.]+)/);
      if (FFFFFF1508 || Jd || IdIdId1507) return Yd;
      if (bf) {
        if (IsIPhoneIPadIpod() || IsMac()) {
          var mobileVersionRegex = SfSfSf2361(/CriOS\/([0-9.]+)/);
          if (mobileVersionRegex) return mobileVersionRegex
        }
        return SfSfSf2361(/Chrome\/([0-9.]+)/)
      }
      if (cf && !IsIPhoneIPadIpod()) return SfSfSf2361(/Version\/([0-9.]+)/);
      if (IsNavigatorIPhonePod || IsNavigatorIPad) {
        if (mobileVersionRegex = /Version\/(\S+).*Mobile\/(\S+)/.exec(getNavigatorUserAgent())) return mobileVersionRegex[1] + "." + mobileVersionRegex[2]
      } else if (af) return (mobileVersionRegex = SfSfSf2361(/Android\s+([0-9.]+)/)) ? mobileVersionRegex : SfSfSf2361(/Version\/([0-9.]+)/);
      return ""
    }();
  var Uf = function(a, b) {
    return (b & 8 && Pf(a) ? b ^ 4 : b) & -9
  };
  var Vf = function(className, b) {
    this.o = className;
    this.F = !!b;
    this.N = {
      0: this.o + "-arrowright",
      1: this.o + "-arrowup",
      2: this.o + "-arrowdown",
      3: this.o + "-arrowleft"
    }
  };
  ObjectCreateSetPrototypeOf(Vf, vf);
  var Wf = function(a, b, c, d, e) {
    null != b && (a.Ab = b);
    null != c && (a.zb = c);
    "number" === typeof d && (a.ic = Math.max(d, 15));
    "number" === typeof e && (a.Yb = e)
  };
  Vf.prototype.u = function(a) {
    AssertAssertion(this.B, "Must call setElements first.");
    var b = this.zb;
    2 == b && (b = 0);
    Xf(this, this.Ab, b, 2 == this.zb ? Yf(this.Ab) ? this.g.offsetHeight / 2 : this.g.offsetWidth / 2 : this.ic, 0, a)
  };
  var Xf = function(a, b, c, d, e, f) {
      if (a.l) {
        var h = Zf(b, c),
          g = a.l;
        var l = Mf(g);
        l = (Yf(b) ? l.height / 2 : l.width / 2) - d;
        var n = Uf(g, h),
          p;
        if (p = Hf(g)) g = Nf(g), g = new wf(g.top, g.left + g.width, g.top + g.height, g.left), Yf(b) ? g.top < p.top && !(n & 1) ? l -= p.top - g.top : g.bottom > p.bottom && n & 1 && (l -= g.bottom - p.bottom) : g.left < p.left && !(n & 4) ? l -= p.left - g.left : g.right > p.right && n & 4 && (l -= g.right - p.right);
        p = Yf(b) ? new J(a.Yb, l) : new J(l, a.Yb);
        n = Yf(b) ? 6 : 9;
        a.Za && 2 == e && (n = Yf(b) ? 4 : 1);
        l = b ^ 3;
        Yf(b) && "rtl" == a.l.dir && (l = b);
        g = a.l;
        var q = Zf(l, c);
        l = a.g;
        n = a.sc ?
          n : 0;
        AssertAssertion(l);
        var u = l.offsetParent;
        if (u) {
          var x = "HTML" == u.tagName || "BODY" == u.tagName;
          if (!x || "static" != Bf(u, "position")) {
            var E = Gf(u);
            if (!x) {
              x = Pf(u);
              var P;
              if (P = x) {
                P = cf && 0 <= zbzbzb785(Tf, 10);
                var ca;
                if (ca = isIPhoneIPadIpod) ca = 0 <= zbzbzb785(Rf, 10);
                var Q = bf && 0 <= zbzbzb785(Tf, 85);
                P = isMoz || P || ca || Q
              }
              x = P ? -u.scrollLeft : x && !Kd && "visible" != Bf(u, "overflowX") ? u.scrollWidth - u.clientWidth - u.scrollLeft : u.scrollLeft;
              E = pe(E, new J(x, u.scrollTop))
            }
          }
        }
        E = E || new J;
        u = Nf(g);
        if (x = Hf(g)) Q = new xf(x.left, x.top, x.right - x.left, x.bottom - x.top), x = Math.max(u.left, Q.left), P = Math.min(u.left +
          u.width, Q.left + Q.width), x <= P && (ca = Math.max(u.top, Q.top), Q = Math.min(u.top + u.height, Q.top + Q.height), ca <= Q && (u.left = x, u.top = ca, u.width = P - x, u.height = Q - ca));
        x = tetete1682(g);
        ca = tetete1682(l);
        if (x.g != ca.g) {
          P = x.g.body;
          ca = IsParentWindowOrDefaultView(ca.g);
          Q = new J(0, 0);
          var ra = (ra = GetElementDocument(P)) ? IsParentWindowOrDefaultView(ra) : window;
          if (Hd(ra, "parent")) {
            var Se = P;
            do {
              var Uh = ra == ca ? Gf(Se) : Kf(AssertAssertion(Se));
              Q.x += Uh.x;
              Q.y += Uh.y
            } while (ra && ra != ca && ra != ra.parent && (Se = ra.frameElement) && (ra = ra.parent))
          }
          P = pe(Q, Gf(P));
          !FFFFFF1508 || 9 <= Number(ae) || IsCSS1Compat(x.g) || (P = pe(P, CeCeCe1745(x.g)));
          u.left += P.x;
          u.top += P.y
        }
        g = Uf(g, q);
        q = u.left;
        g & 4 ? q += u.width : g & 2 && (q += u.width / 2);
        q = new J(q, u.top + (g & 1 ? u.height : 0));
        q = pe(q, E);
        p && (q.x += (g & 4 ? -1 : 1) * p.x, q.y += (g & 1 ? -1 : 1) * p.y);
        var z;
        n && (z = Hf(l)) && (z.top -= E.y, z.right -= E.x, z.bottom -= E.y, z.left -= E.x);
        p = q;
        p = new J(p.x, p.y);
        q = Uf(l, h);
        h = Mf(l);
        g = new qe(h.width, h.height);
        p = new J(p.x, p.y);
        g = new qe(g.width, g.height);
        E = 0;
        if (f || 0 != q) q & 4 ? p.x -= g.width + (f ? f.right : 0) : q & 2 ? p.x -= g.width / 2 : f && (p.x += f.left), q & 1 ? p.y -= g.height + (f ? f.bottom : 0) : f && (p.y += f.top);
        n && (z ? (q = p, E = g, u = 0, 65 == (n & 65) && (q.x < z.left || q.x >= z.right) && (n &= -2),
          132 == (n & 132) && (q.y < z.top || q.y >= z.bottom) && (n &= -5), q.x < z.left && n & 1 && (q.x = z.left, u |= 1), n & 16 && (x = q.x, q.x < z.left && (q.x = z.left, u |= 4), q.x + E.width > z.right && (E.width = Math.min(z.right - q.x, x + E.width - z.left), E.width = Math.max(E.width, 0), u |= 4)), q.x + E.width > z.right && n & 1 && (q.x = Math.max(z.right - E.width, z.left), u |= 1), n & 2 && (u |= (q.x < z.left ? 16 : 0) | (q.x + E.width > z.right ? 32 : 0)), q.y < z.top && n & 4 && (q.y = z.top, u |= 2), n & 32 && (x = q.y, q.y < z.top && (q.y = z.top, u |= 8), q.y + E.height > z.bottom && (E.height = Math.min(z.bottom - q.y, x + E.height - z.top),
            E.height = Math.max(E.height, 0), u |= 8)), q.y + E.height > z.bottom && n & 4 && (q.y = Math.max(z.bottom - E.height, z.top), u |= 2), n & 8 && (u |= (q.y < z.top ? 64 : 0) | (q.y + E.height > z.bottom ? 128 : 0)), z = u) : z = 256, E = z);
        n = new xf(0, 0, 0, 0);
        n.left = p.x;
        n.top = p.y;
        n.width = g.width;
        n.height = g.height;
        z = E;
        z & 496 || (Df(l, new J(n.left, n.top)), g = new qe(n.width, n.height), h == g || h && g && h.width == g.width && h.height == g.height || (h = g, l = l.style, isMoz ? l.MozBoxSizing = "border-box" : isWebkit ? l.WebkitBoxSizing = "border-box" : l.boxSizing = "border-box", l.width = Math.max(h.width, 0) +
          "px", l.height = Math.max(h.height, 0) + "px"));
        if (2 != e && z & 496) {
          Xf(a, b ^ 3, c, d, a.Za && 0 == e ? 1 : 2, f);
          return
        }!a.F || z & 496 || (e = parseFloat(a.g.style.left), f = parseFloat(a.g.style.top), AssertAssertion(!isNaN(e) && !isNaN(f), "Could not parse position."), isFinite(e) && 0 == e % 1 && isFinite(f) && 0 == f % 1 || Df(a.g, Math.round(e), Math.round(f)))
      }
      $f(a, b, c, d)
    },
    $f = function(a, b, c, d) {
      var e = a.B;
      ababab685(a.N, function(f) {
        RemoveClassName(e, f)
      }, a);
      AddClassName(e, a.N[b]);
      e.style.top = e.style.left = e.style.right = e.style.bottom = "";
      a.l ? (c = Jf(a.l, a.g), d = ag(a.l, b), Yf(b) ? e.style.top = bg(c.y + d.y,
        a.g.offsetHeight - 15) + "px" : e.style.left = bg(c.x + d.x, a.g.offsetWidth - 15) + "px") : e.style[0 == c ? Yf(b) ? "top" : "left" : Yf(b) ? "bottom" : "right"] = d + "px"
    },
    bg = function(a, b) {
      return 15 > b ? 15 : Math.min(Math.max(a, 15), b)
    },
    Zf = function(a, b) {
      switch (a) {
        case 2:
          return 0 == b ? 1 : 5;
        case 1:
          return 0 == b ? 0 : 4;
        case 0:
          return 0 == b ? 12 : 13;
        default:
          return 0 == b ? 8 : 9
      }
    },
    ag = function(a, b) {
      var c = 0,
        d = 0;
      a = Mf(a);
      switch (b) {
        case 2:
          c = a.width / 2;
          break;
        case 1:
          c = a.width / 2;
          d = a.height;
          break;
        case 0:
          d = a.height / 2;
          break;
        case 3:
          c = a.width, d = a.height / 2
      }
      return new J(c,
        d)
    },
    Yf = function(a) {
      return 0 == a || 3 == a
    };
  kkkkkkK8 = Vf.prototype;
  kkkkkkK8.sc = false;
  kkkkkkK8.zb = 2;
  kkkkkkK8.ic = 20;
  kkkkkkK8.Ab = 3;
  kkkkkkK8.Yb = -5;
  kkkkkkK8.Za = false;
  var AriaRoles = {
    Sc: "activedescendant",
    Xc: "atomic",
    Yc: "autocomplete",
    ad: "busy",
    dd: "checked",
    ed: "colindex",
    kd: "controls",
    ld: "current",
    nd: "describedby",
    DISABLED: "disabled",
    rd: "dropeffect",
    sd: "expanded",
    td: "flowto",
    vd: "grabbed",
    zd: "haspopup",
    Bd: "hidden",
    Dd: "invalid",
    Ed: "label",
    Fd: "labelledby",
    Gd: "level",
    Ld: "live",
    ae: "multiline",
    be: "multiselectable",
    ge: "orientation",
    he: "owns",
    ie: "posinset",
    ke: "pressed",
    pe: "readonly",
    re: "relevant",
    se: "required",
    xe: "rowindex",
    ze: "selected",
    Be: "setsize",
    De: "sort",
    Qe: "valuemax",
    Re: "valuemin",
    Se: "valuenow",
    Te: "valuetext"
  };
  var ariaRoleObj;
  var ARIARoles = {
    Tc: "alert",
    Uc: "alertdialog",
    Vc: "application",
    Wc: "article",
    Zc: "banner",
    bd: "button",
    cd: "checkbox",
    fd: "columnheader",
    gd: "combobox",
    hd: "complementary",
    jd: "contentinfo",
    md: "definition",
    od: "dialog",
    pd: "directory",
    qd: "document",
    ud: "form",
    wd: "grid",
    xd: "gridcell",
    yd: "group",
    Ad: "heading",
    Cd: "img",
    Hd: "link",
    Id: "list",
    Jd: "listbox",
    Kd: "listitem",
    Md: "log",
    Nd: "main",
    Od: "marquee",
    Pd: "math",
    Qd: "menu",
    Rd: "menubar",
    Sd: "menuitem",
    Td: "menuitemcheckbox",
    Ud: "menuitemradio",
    ce: "navigation",
    ee: "note",
    fe: "option",
    je: "presentation",
    le: "progressbar",
    me: "radio",
    oe: "radiogroup",
    qe: "region",
    ue: "row",
    ve: "rowgroup",
    we: "rowheader",
    ye: "scrollbar",
    SEARCH: "search",
    Ae: "separator",
    Ce: "slider",
    Ee: "spinbutton",
    Fe: "status",
    TAB: "tab",
    Ge: "tablist",
    He: "tabpanel",
    Ie: "textbox",
    Je: "textinfo",
    Ke: "timer",
    Le: "toolbar",
    Me: "tooltip",
    Ne: "tree",
    Oe: "treegrid",
    Pe: "treeitem"
  };
  var elements2658 = "combobox grid group listbox menu menubar radiogroup row rowgroup tablist textbox toolbar tree treegrid".split(" "),
    gggggg2665 = function(element, ariaRole) {
      ariaRole ? (AssertAssertion(IsExistRole(ARIARoles, ariaRole), "No such ARIA role " + ariaRole), element.setAttribute("role", ariaRole)) : element.removeAttribute("role")
    },
    igigig2668 = function(element, ariaRole1, ariaRole2) {
      Array.isArray(ariaRole2) && (ariaRole2 = ariaRole2.join(" "));
      var dddddd2670 = VerifyAriaRole(ariaRole1);

      if ("" === ariaRole2 || void 0 == ariaRole2) {
        if (ariaRoleObj) {
          element.setAttribute(dddddd2670, ariaRole2[ariaRole1])
        } else if (ariaRole1 in ariaRole2) {
          ariaRole2 = {}
          ariaRole2.atomic = false
          ariaRole2.autocomplete = "none"
          ariaRole2.dropeffect = "none"
          ariaRole2.haspopup = false
          ariaRole2.live = "off"
          ariaRole2.multiline = false
          ariaRole2.multiselectable = false
          ariaRole2.orientation = "vertical"
          ariaRole2.readonly = false
          ariaRole2.relevant = "additions text"
          ariaRole2.required = false
          ariaRole2.sort = "none"
          ariaRole2.busy = false
          ariaRole2.disabled = false
          ariaRole2.hidden = false
          ariaRole2.invalid = "false"
          ariaRoleObj = ariaRole2
          ariaRole2 = ariaRoleObj, 
          element.setAttribute(dddddd2670, ariaRole2[ariaRole1])
        } else {
          element.removeAttribute(dddddd2670)
        }
      }
      else {
        element.setAttribute(dddddd2670, ariaRole2)
      }

    },
    jgjgjg2674 = function(aaaaaa2674) {
      var bbbbbb2675 = aaaaaa2674.getAttribute(VerifyAriaRole("activedescendant"));
      bbbbbb2675 = null == bbbbbb2675 || void 0 == bbbbbb2675 ? "" : String(bbbbbb2675);
      return GetElementDocument(aaaaaa2674).getElementById(bbbbbb2675)
    },
    VerifyAriaRole = function(ariaRole) {
      AssertAssertion(ariaRole, "ARIA attribute cannot be empty.");
      AssertAssertion(IsExistRole(AriaRoles, ariaRole), "No such ARIA attribute " + ariaRole);
      return "aria-" + ariaRole
    };

  function kgkgkg2685(aaaaaa2685) {
    aaaaaa2685 && "function" == typeof aaaaaa2685.na && aaaaaa2685.na()
  };
  var WindowG = function() {
    this.N = this.N;
    this.aa = this.aa
  };
  WindowG.prototype.N = false;
  WindowG.prototype.na = function() {
    this.N || (this.N = true, this.H())
  };
  var mgmgmg2696 = function(aaaaaa2696, bbbbbb2696) {
    aaaaaa2696.N ? bbbbbb2696() : (aaaaaa2696.aa || (aaaaaa2696.aa = []), aaaaaa2696.aa.push(bbbbbb2696))
  };
  WindowG.prototype.H = function() {
    if (this.aa)
      for (; this.aa.length;) this.aa.shift()()
  };
  var WindowG_2_2731 = function(aaaaaa2731) {
    WindowG.call(this);
    this.dom = aaaaaa2731 || tetete1682()
  };
  ObjectCreateSetPrototypeOf(WindowG_2_2731, WindowG);
  WindowG_2_2731.prototype.u = function() {
    gggggg2665(this.A(), "tooltip");
    igigig2668(this.A(), "live", "polite")
  };
  var ogogog2712 = function(aaaaaa2712) {
    WindowG_2_2731.call(this, aaaaaa2712);
    this.g = this.dom.wa("DIV", "jfk-tooltip-contentId");
    this.o = this.dom.wa("DIV", "jfk-tooltip-arrow", this.dom.wa("DIV", "jfk-tooltip-arrowimplbefore"), this.dom.wa("DIV", "jfk-tooltip-arrowimplafter"));
    this.l = this.dom.wa("DIV", {
      "class": "jfk-tooltip",
      role: "tooltip"
    }, this.g, this.o);
    this.u()
  };
  ObjectCreateSetPrototypeOf(ogogog2712, WindowG_2_2731);
  ogogog2712.prototype.A = function() {
    return this.l
  };
  ogogog2712.prototype.H = function() {
    WindowG_2_2731.prototype.H.call(this);
    this.l && RemoveElement(this.l)
  };
  var pgpgpg2730 = function(aaaaaa2730) {
    ogogog2712.call(this, aaaaaa2730)
  };
  ObjectCreateSetPrototypeOf(pgpgpg2730, ogogog2712);
  pgpgpg2730.prototype.u = function() {
    gggggg2665(this.A(), "tooltip")
  };
  var qgqgqg2737 = function(eventType, target_) {
    this.type = eventType;
    this.g = this.target = target_; //tgtgtg2761_.g === self
    this.defaultPrevented = this.l = false
  };
  qgqgqg2737.prototype.o = function() {
    this.l = true
  };
  qgqgqg2737.prototype.preventDefault = function() {
    this.defaultPrevented = true
  };
  var IsSupportsPassive = function() {
    if (!self_.addEventListener || !Object.defineProperty) return false;
    var supportsPassive = false,
      opts = Object.defineProperty({}, "passive", {
        get: function() {
          supportsPassive = true
        }
      });
    try {
      self_.addEventListener("test", function() {}, opts), self_.removeEventListener("test", function() {}, opts)
    } catch (c) {}
    return supportsPassive
  }();
  var tgtgtg2761 = function (EventObj, window_) { //tgtgtg2761 => qgqgqg2737 //EventObj=MouseEvent
    qgqgqg2737.call(this, EventObj ? EventObj.type : "");
    this.relatedTarget = this.g = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
    this.state = null;
    this.u = false;
    this.pointerId = 0;
    this.pointerType = "";
    this.ka = null;
    if (EventObj) {
      var eventType = this.type = EventObj.type,
        changedTouchesValue = EventObj.changedTouches && EventObj.changedTouches.length ? EventObj.changedTouches[0] : null;
      this.target = EventObj.target || EventObj.srcElement;
      this.g = window_;
      (window_ = EventObj.relatedTarget) ? isMoz && (Hd(window_, "nodeName") || (window_ =
        null)): "mouseover" == eventType ? window_ = EventObj.fromElement : "mouseout" == eventType && (window_ = EventObj.toElement);
      this.relatedTarget = window_;

      if (changedTouchesValue) {
        this.clientX = void 0 !== changedTouchesValue.clientX ? changedTouchesValue.clientX : changedTouchesValue.pageX
        this.clientY = void 0 !== changedTouchesValue.clientY ? changedTouchesValue.clientY : changedTouchesValue.pageY
        this.screenX = changedTouchesValue.screenX || 0
        this.screenY = changedTouchesValue.screenY || 0
      }
      else {
        this.clientX = void 0 !== EventObj.clientX ? EventObj.clientX : EventObj.pageX
        this.clientY = void 0 !== EventObj.clientY ? EventObj.clientY : EventObj.pageY
        this.screenX = EventObj.screenX || 0
        this.screenY = EventObj.screenY || 0
      }

      this.button = EventObj.button;
      this.keyCode = EventObj.keyCode || 0;
      this.key = EventObj.key || "";
      this.ctrlKey = EventObj.ctrlKey;
      this.altKey = EventObj.altKey;
      this.shiftKey = EventObj.shiftKey;
      this.metaKey = EventObj.metaKey;
      this.u = isMac ? EventObj.metaKey : EventObj.ctrlKey;
      this.pointerId = EventObj.pointerId || 0;
      this.pointerType = "string" === typeof EventObj.pointerType ? EventObj.pointerType : sgsgsg2799[EventObj.pointerType] || "";
      this.state = EventObj.state;
      this.ka = EventObj;
      EventObj.defaultPrevented && tgtgtg2761.I.preventDefault.call(this)
    }
  };
  googInherits(tgtgtg2761, qgqgqg2737);
  var sgsgsg2799 = UcUcUc1301({
    2: "touch",
    3: "pen",
    4: "mouse"
  });
  tgtgtg2761.prototype.o = function() {
    tgtgtg2761.I.o.call(this);
    this.ka.stopPropagation ? this.ka.stopPropagation() : this.ka.cancelBubble = true
  };
  tgtgtg2761.prototype.preventDefault = function() {
    tgtgtg2761.I.preventDefault.call(this);
    var a = this.ka;
    a.preventDefault ? a.preventDefault() : a.returnValue = false
  };
  var ClosureListenableID = "closure_listenable_" + (1E6 * Math.random() | 0),
    IsElementExistClosureListenableID = function(gtxElement) {
      return !(!gtxElement || !gtxElement[ClosureListenableID])
    };
  var wgwgwg2817 = 0;
  var ListenerObj = function(listener, src, type, capture, gb) {
      this.listener = listener;
      this.proxy = null;
      this.src = src;
      this.type = type;
      this.capture = !!capture;
      this.gb = gb;
      this.key = ++wgwgwg2817;
      this.removed = this.ab = false
    },
    ygygyg2828 = function(aaaaaa2828) {
      aaaaaa2828.removed = true;
      aaaaaa2828.listener = null;
      aaaaaa2828.proxy = null;
      aaaaaa2828.src = null;
      aaaaaa2828.gb = null
    };
  var HtmlElement = function(element) {
    this.src = element;
    this.g = {};
    this.l = 0
  };
  HtmlElement.prototype.add = function(listenerEvent, callback, is_xxx_2899, capture, windowG_5) {
    var event_str = listenerEvent.toString();
    listenerEvent = this.g[event_str];
    listenerEvent || (listenerEvent = this.g[event_str] = [], this.l++);
    var listenerEventIdx = GetListenerEventIdx(listenerEvent, callback, capture, windowG_5);
    var listenerObj = null
    if (- 1 < listenerEventIdx) {
      listenerObj = listenerEvent[listenerEventIdx]
      is_xxx_2899 || (listenerObj.ab = false)
    } else {
      listenerObj = new ListenerObj(callback, this.src, event_str, !!capture, windowG_5)
      listenerObj.ab = is_xxx_2899
      listenerEvent.push(listenerObj);
    }
    return listenerObj
  };
  HtmlElement.prototype.remove = function(aaaaaa2847, bbbbbb2847, cccccc2847, dddddd2847) {
    aaaaaa2847 = aaaaaa2847.toString();
    if (!(aaaaaa2847 in this.g)) return false;
    var eeeeee2850 = this.g[aaaaaa2847];
    bbbbbb2847 = GetListenerEventIdx(eeeeee2850, bbbbbb2847, cccccc2847, dddddd2847);
    return -1 < bbbbbb2847 ? (ygygyg2828(eeeeee2850[bbbbbb2847]), AssertAssertion(null != eeeeee2850.length), Array.prototype.splice.call(eeeeee2850, bbbbbb2847, 1), 0 == eeeeee2850.length && (delete this.g[aaaaaa2847], this.l--), true) : false
  };
  var BgBgBg2854 = function(aaaaaa2854, bbbbbb2854) {
    var cccccc2855 = bbbbbb2854.type;
    if (!(cccccc2855 in aaaaaa2854.g)) return false;
    var dddddd2857 = ArraySplice(aaaaaa2854.g[cccccc2855], bbbbbb2854);
    dddddd2857 && (ygygyg2828(bbbbbb2854), 0 == aaaaaa2854.g[cccccc2855].length && (delete aaaaaa2854.g[cccccc2855], aaaaaa2854.l--));
    return dddddd2857
  };
  HtmlElement.prototype.removeAll = function(aaaaaa2861) {
    aaaaaa2861 = aaaaaa2861 && aaaaaa2861.toString();
    var bbbbbb2863 = 0, cccccc2863;
    for (cccccc2863 in this.g)
      if (!aaaaaa2861 || cccccc2863 == aaaaaa2861) {
        for (var dddddd2866 = this.g[cccccc2863], eeeeee2866 = 0; eeeeee2866 < dddddd2866.length; eeeeee2866++) ++bbbbbb2863, ygygyg2828(dddddd2866[eeeeee2866]);
        delete this.g[cccccc2863];
        this.l--
      } return bbbbbb2863
  };
  HtmlElement.prototype.eb = function(aaaaaa2871, bbbbbb2871) {
    aaaaaa2871 = this.g[aaaaaa2871.toString()];
    var cccccc2873 = [];
    if (aaaaaa2871)
      for (var dddddd2875 = 0; dddddd2875 < aaaaaa2871.length; ++dddddd2875) {
        var eeeeee2876 = aaaaaa2871[dddddd2875];
        eeeeee2876.capture == bbbbbb2871 && cccccc2873.push(eeeeee2876)
      }
    return cccccc2873
  };
  HtmlElement.prototype.Pa = function(aaaaaa2881, bbbbbb2881, cccccc2881, dddddd2881) {
    aaaaaa2881 = this.g[aaaaaa2881.toString()];
    var eeeeee2883 = -1;
    aaaaaa2881 && (eeeeee2883 = GetListenerEventIdx(aaaaaa2881, bbbbbb2881, cccccc2881, dddddd2881));
    return -1 < eeeeee2883 ? aaaaaa2881[eeeeee2883] : null
  };
  HtmlElement.prototype.hasListener = function(aaaaaa2887, bbbbbb2887) {
    var cccccc2887 = void 0 !== aaaaaa2887,
      dddddd2889 = cccccc2887 ? aaaaaa2887.toString() : "",
      eeeeee2890 = void 0 !== bbbbbb2887;
    return bbbbbb689(this.g, function(arr) {
      for (var idx = 0; idx < arr.length; ++idx)
        if (!(cccccc2887 && arr[idx].type != dddddd2889 || eeeeee2890 && arr[idx].capture != bbbbbb2887)) return true;
      return false
    })
  };
  var GetListenerEventIdx = function(listenerEvents, callback, capture, windowG_5) {
    for (var idx = 0; idx < listenerEvents.length; ++idx) {
      var listenerEvent = listenerEvents[idx];
      if (!listenerEvent.removed && listenerEvent.listener == callback && listenerEvent.capture == !!capture && listenerEvent.gb == windowG_5) return idx
    }
    return -1
  };
  var closureLmID = "closure_lm_" + (1E6 * Math.random() | 0),
    OnEvents = {},
    eventListenerCount = 0,
    AddEventListener = function(element, listenerEvent, handleEvent, useCapture, windowG_5) {
      if (useCapture && useCapture.once) return FgFgFg2944(element, listenerEvent, handleEvent, useCapture, windowG_5);
      if (Array.isArray(listenerEvent)) {
        for (var idx = 0; idx < listenerEvent.length; idx++) AddEventListener(element, listenerEvent[idx], handleEvent, useCapture, windowG_5);
        return null
      }
      handleEvent = GetListenerHandleEvent(handleEvent);
      return IsElementExistClosureListenableID(element) ? element.listen(listenerEvent, handleEvent, IsObjectOrFunction(useCapture) ? !!useCapture.capture : !!useCapture, windowG_5) : DoAddEventListener(element, listenerEvent, handleEvent, false, useCapture, windowG_5)
    },
    DoAddEventListener = function(element, listenerEvent, handleEvent, is_xxx_2975, useCapture, windowG_5) {
      if (!listenerEvent) throw Error("Invalid event type");

      var capture_ = IsObjectOrFunction(useCapture) ? !!useCapture.capture : !!useCapture
      var htmlElement = GetHtmlElementByClosureLmID(element);
      htmlElement || (element[closureLmID] = htmlElement = new HtmlElement(element));
      listenerObj = htmlElement.add(listenerEvent, handleEvent, is_xxx_2975, capture_, windowG_5);
      if (listenerObj.proxy) return listenerObj;

      listenerProxy = ListenerProxy();
      listenerObj.proxy = listenerProxy;
      listenerProxy.src = element;
      listenerProxy.listener = listenerObj;
      if (element.addEventListener) {
        IsSupportsPassive || (useCapture = capture_)
        void 0 === useCapture && (useCapture = false)
        element.addEventListener(listenerEvent.toString(), listenerProxy, useCapture);
      }
      else if (element.attachEvent) element.attachEvent(GetOnEventName(listenerEvent.toString()), listenerProxy);
      else if (element.addListener && element.removeListener) AssertAssertion("change" === listenerEvent, "MediaQueryList only has a change event"), element.addListener(is_xxx_2975);
      else throw Error("addEventListener and attachEvent are unavailable.");
      eventListenerCount++;
      return listenerObj
    },
    ListenerProxy = function() {
      var HandleEvent2 = HandleEvent1,
        HandleEvent3 = function(EventObj) {
          return HandleEvent2.call(HandleEvent3.src, HandleEvent3.listener, EventObj)
        };
      return HandleEvent3
    },
    FgFgFg2944 = function(element, listenerEvent, callback, useCapture, windowG_5) {
      if (Array.isArray(listenerEvent)) {
        for (var idx = 0; idx < listenerEvent.length; idx++) FgFgFg2944(element, listenerEvent[idx], callback, useCapture, windowG_5);
        return null
      }
      callback = GetListenerHandleEvent(callback);
      return IsElementExistClosureListenableID(element) ?
        element.Xb(listenerEvent, callback, IsObjectOrFunction(useCapture) ? !!useCapture.capture : !!useCapture, windowG_5) : DoAddEventListener(element, listenerEvent, callback, true, useCapture, windowG_5)
    },
    RemoveEventListener = function(element, bbbbbb2953, cccccc2953, dddddd2953, eeeeee2953) {
      if (Array.isArray(bbbbbb2953))
        for (var idx = 0; idx < bbbbbb2953.length; idx++) RemoveEventListener(element, bbbbbb2953[idx], cccccc2953, dddddd2953, eeeeee2953);
      else dddddd2953 = IsObjectOrFunction(dddddd2953) ? !!dddddd2953.capture : !!dddddd2953, cccccc2953 = GetListenerHandleEvent(cccccc2953), IsElementExistClosureListenableID(element) ? element.fa(bbbbbb2953, cccccc2953, dddddd2953, eeeeee2953) : element && (element = GetHtmlElementByClosureLmID(element)) && (bbbbbb2953 = element.Pa(bbbbbb2953, cccccc2953, dddddd2953, eeeeee2953)) && DoRemoveEventListener(bbbbbb2953)
    },
    DoRemoveEventListener = function(listenerObj) {
      if ("number" === typeof listenerObj || !listenerObj || listenerObj.removed) return false;
      var src = listenerObj.src;
      if (IsElementExistClosureListenableID(src)) return BgBgBg2854(src.V, listenerObj);
      var type = listenerObj.type,
        proxy = listenerObj.proxy;
      src.removeEventListener ? src.removeEventListener(type, proxy, listenerObj.capture) : src.detachEvent ? src.detachEvent(GetOnEventName(type), proxy) : src.addListener && src.removeListener && src.removeListener(proxy);
      eventListenerCount--;
      (type = GetHtmlElementByClosureLmID(src)) ? (BgBgBg2854(type, listenerObj), 0 == type.l && (type.src = null, src[closureLmID] = null)) : ygygyg2828(listenerObj);
      return true
    },
    PgPgPg2968 = function(gtxElement) {
      if (gtxElement)
        if (IsElementExistClosureListenableID(gtxElement)) gtxElement.V && gtxElement.V.removeAll(void 0);
        else if (gtxElement = GetHtmlElementByClosureLmID(gtxElement)) {
        var bbbbbb2973 = 0, cccccc2973;
        for (cccccc2973 in gtxElement.g)
          for (var dddddd2975 = gtxElement.g[cccccc2973].concat(), idx = 0; idx < dddddd2975.length; ++idx) DoRemoveEventListener(dddddd2975[idx]) && ++bbbbbb2973
      }
    },
    GetOnEventName = function(eventName) {
      return eventName in OnEvents ? OnEvents[eventName] : OnEvents[eventName] = "on" + eventName
    },
    HandleEvent1 = function (listenerObj, EventObj) { //EventObj=MouseEvent
      if (listenerObj.removed) listenerObj = true;
      else {
        EventObj = new tgtgtg2761(EventObj, this);
        var c_listener_2985 = listenerObj.listener,
          listenerObjGbSrc = listenerObj.gb || listenerObj.src;
        listenerObj.ab && DoRemoveEventListener(listenerObj);
        listenerObj = c_listener_2985.call(listenerObjGbSrc, EventObj)
      }
      return listenerObj
    },
    GetHtmlElementByClosureLmID = function(element) {
      element = element[closureLmID];
      return element instanceof HtmlElement ? element : null
    },
    ClosureEventsFnID = "__closure_events_fn_" + (1E9 * Math.random() >>>
      0),
    GetListenerHandleEvent = function(listenerEvent) {
      AssertAssertion(listenerEvent, "Listener can not be null.");
      if ("function" === typeof listenerEvent) return listenerEvent;
      AssertAssertion(listenerEvent.handleEvent, "An object listener must have handleEvent method.");
      listenerEvent[ClosureEventsFnID] || (listenerEvent[ClosureEventsFnID] = function(bbbbbb3002) {
        return listenerEvent.handleEvent(bbbbbb3002)
      });
      return listenerEvent[ClosureEventsFnID]
    };
  var WindowG_2 = function() {
    WindowG.call(this);
    this.V = new HtmlElement(this);
    this.Cc = this;
    this.Zb = null
  };
  googInherits(WindowG_2, WindowG);
  WindowG_2.prototype[ClosureListenableID] = true;
  kkkkkkK8 = WindowG_2.prototype;
  kkkkkkK8.addEventListener = function(listenerEvent, callback, useCapture, xxxx_3042) {
    AddEventListener(this, listenerEvent, callback, useCapture, xxxx_3042)
  };
  kkkkkkK8.removeEventListener = function(a, b, c, d) {
    RemoveEventListener(this, a, b, c, d)
  };
  kkkkkkK8.dispatchEvent = function(aaaaaa3022) {
    AssertEventTargetInit(this);
    var bbbbbb3024 = this.Zb;
    if (bbbbbb3024) {
      var cccccc_arr = [];
      for (var idx = 1; bbbbbb3024; bbbbbb3024 = bbbbbb3024.Zb) cccccc_arr.push(bbbbbb3024), AssertAssertion(1E3 > ++idx, "infinite loop")
    }
    bbbbbb3024 = this.Cc;
    idx = aaaaaa3022.type || aaaaaa3022;
    if ("string" === typeof aaaaaa3022) aaaaaa3022 = new qgqgqg2737(aaaaaa3022, bbbbbb3024);
    else if (aaaaaa3022 instanceof qgqgqg2737) aaaaaa3022.target = aaaaaa3022.target || bbbbbb3024;
    else {
      var eeeeee3034 = aaaaaa3022;
      aaaaaa3022 = new qgqgqg2737(idx, bbbbbb3024);
      ebebeb702(aaaaaa3022, eeeeee3034)
    }
    eeeeee3034 = true;
    if (cccccc_arr)
      for (var fIdx = cccccc_arr.length - 1; !aaaaaa3022.l && 0 <= fIdx; fIdx--) {
        var h = aaaaaa3022.g = cccccc_arr[fIdx];
        eeeeee3034 = Sg(h, idx, true, aaaaaa3022) && eeeeee3034
      }
    aaaaaa3022.l || (h = aaaaaa3022.g = bbbbbb3024, eeeeee3034 = Sg(h, idx, true, aaaaaa3022) && eeeeee3034, aaaaaa3022.l || (eeeeee3034 = Sg(h, idx, false, aaaaaa3022) && eeeeee3034));
    if (cccccc_arr)
      for (fIdx = 0; !aaaaaa3022.l && fIdx < cccccc_arr.length; fIdx++) h = aaaaaa3022.g = cccccc_arr[fIdx], eeeeee3034 = Sg(h, idx, false, aaaaaa3022) && eeeeee3034;
    return eeeeee3034
  };
  kkkkkkK8.H = function() {
    WindowG_2.I.H.call(this);
    this.V && this.V.removeAll(void 0);
    this.Zb = null
  };
  kkkkkkK8.listen = function(a, b, c, d) {
    AssertEventTargetInit(this);
    return this.V.add(String(a), b, false, c, d)
  };
  kkkkkkK8.Xb = function(a, b, c, d) {
    return this.V.add(String(a), b, true, c, d)
  };
  kkkkkkK8.fa = function(a, b, c, d) {
    return this.V.remove(String(a), b, c, d)
  };
  var Sg = function(a, b, c, d) {
    b = a.V.g[String(b)];
    if (!b) return true;
    b = b.concat();
    for (var e = true, f = 0; f < b.length; ++f) {
      var h = b[f];
      if (h && !h.removed && h.capture == c) {
        var g = h.listener,
          l = h.gb || h.src;
        h.ab && BgBgBg2854(a.V, h);
        e = false !== g.call(l, d) && e
      }
    }
    return e && !d.defaultPrevented
  };
  WindowG_2.prototype.eb = function(a, b) {
    return this.V.eb(String(a), b)
  };
  WindowG_2.prototype.Pa = function(a, b, c, d) {
    return this.V.Pa(String(a), b, c, d)
  };
  WindowG_2.prototype.hasListener = function(a, b) {
    return this.V.hasListener(void 0 !== a ? String(a) : void 0, b)
  };
  var AssertEventTargetInit = function(a) {
    AssertAssertion(a.V, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
  };
  self_.console && self_.console.createTask && self_.console.createTask.bind(self_.console);
  var TgTgTg3092 = function(aaaaaa3092, bbbbbb3092, cccccc3092) {
    if ("function" === typeof aaaaaa3092) cccccc3092 && (aaaaaa3092 = vvvvvv498(aaaaaa3092, cccccc3092));
    else if (aaaaaa3092 && "function" == typeof aaaaaa3092.handleEvent) aaaaaa3092 = vvvvvv498(aaaaaa3092.handleEvent, aaaaaa3092);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(bbbbbb3092) ? -1 : self_.setTimeout(aaaaaa3092, bbbbbb3092 || 0)
  };
  var WindowG_2_3124 = function(a, b, c) {
    WindowG.call(this);
    this.Wa = a;
    this.o = b || 0;
    this.g = c;
    this.l = vvvvvv498(this.Ec, this)
  };
  googInherits(WindowG_2_3124, WindowG);
  kkkkkkK8 = WindowG_2_3124.prototype;
  kkkkkkK8.W = 0;
  kkkkkkK8.H = function() {
    WindowG_2_3124.I.H.call(this);
    this.stop();
    delete this.Wa;
    delete this.g
  };
  kkkkkkK8.start = function(a) {
    this.stop();
    this.W = TgTgTg3092(this.l, void 0 !== a ? a : this.o)
  };
  kkkkkkK8.stop = function() {
    this.isActive() && self_.clearTimeout(this.W);
    this.W = 0
  };
  kkkkkkK8.isActive = function() {
    return 0 != this.W
  };
  kkkkkkK8.Ec = function() {
    this.W = 0;
    this.Wa && this.Wa.call(this.g)
  };
  var WindowG_2_3155 = function(a) {
    WindowG.call(this);
    this.J = a;
    this.u = {}
  };
  googInherits(WindowG_2_3155, WindowG);
  var VgVgVg_arr = [];
  WindowG_2_3155.prototype.listen = function(a, b, c, d) {
    Array.isArray(b) || (b && (VgVgVg_arr[0] = b.toString()), b = VgVgVg_arr);
    for (var e = 0; e < b.length; e++) {
      var f = AddEventListener(a, b[e], c || this.handleEvent, d || false, this.J || this);
      if (!f) break;
      this.u[f.key] = f
    }
    return this
  };
  WindowG_2_3155.prototype.Xb = function(a, b, c, d) {
    return Wg(this, a, b, c, d)
  };
  var Wg = function(a, b, c, d, e, f) {
    if (Array.isArray(c))
      for (var h = 0; h < c.length; h++) Wg(a, b, c[h], d, e, f);
    else {
      b = FgFgFg2944(b, c, d || a.handleEvent, e, f || a.J || a);
      if (!b) return a;
      a.u[b.key] = b
    }
    return a
  };
  WindowG_2_3155.prototype.fa = function(a, b, listenerEvent, d, e) {
    if (Array.isArray(b))
      for (var f = 0; f < b.length; f++) this.fa(a, b[f], listenerEvent, d, e);
    else listenerEvent = listenerEvent || this.handleEvent, d = IsObjectOrFunction(d) ? !!d.capture : !!d, e = e || this.J || this, listenerEvent = GetListenerHandleEvent(listenerEvent), d = !!d, b = IsElementExistClosureListenableID(a) ? a.Pa(b, listenerEvent, d, e) : a ? (a = GetHtmlElementByClosureLmID(a)) ? a.Pa(b, listenerEvent, d, e) : null : null, b && (DoRemoveEventListener(b), delete this.u[b.key]);
    return this
  };
  WindowG_2_3155.prototype.removeAll = function() {
    ababab685(this.u, function(a, b) {
      this.u.hasOwnProperty(b) && DoRemoveEventListener(a)
    }, this);
    this.u = {}
  };
  WindowG_2_3155.prototype.H = function() {
    WindowG_2_3155.I.H.call(this);
    this.removeAll()
  };
  WindowG_2_3155.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var Zg = function(a) {
      return zc(StringTrim(a.replace(htmlElementRegex, function(b, c) {
        return htmlInlineTagRegex.test(c) ? "" : " "
      }).replace(/[\t\n ]+/g, " ")))
    },
    htmlInlineTagRegex = /^(?:abbr|acronym|address|b|em|i|small|strong|su[bp]|u)$/i,
    htmlElementRegex = /<[!\/]?([a-z0-9]+)([\/ ][^>]*)?>/gi;

  function $g$g$g3183(aaaaaa3183, bbbbbb3183) {
    if (bbbbbb3183 instanceof BbBbBb805) bbbbbb3183 = CbCbCb815(bbbbbb3183);
    else {
      b: if (isUrlOk_) {
        try {
          var url_ = new URL(bbbbbb3183)
        } catch (d) {
          url_ = "https:";
          break b
        }
        url_ = url_.protocol
      } else c: {
        url_ = document.createElement("a");
        try {
          url_.href = bbbbbb3183
        } catch (d) {
          url_ = void 0;
          break c
        }
        url_ = url_.protocol;url_ = ":" === url_ || "" === url_ ? "https:" : url_
      }
      "javascript:" === url_ && (pd(bbbbbb3183), bbbbbb3183 = void 0)
    }
    void 0 !== bbbbbb3183 && (aaaaaa3183.href = bbbbbb3183)
  };
  var ah = {},
    bhbhbh3211 = function(a_3211) {
      WindowG_2_3155.call(this);
      this.T = a_3211;
      this.R = new WindowG_2_3124(this.ya, 0, this);
      mgmgmg2696(this, w(kgkgkg2685, this.R));
      var b = window;
      this.K = "function" === typeof b.MutationObserver ? new b.MutationObserver(vvvvvv498(this.ua, this)) : null;
      a_3211 = a_3211.g;
      this.listen(a_3211, "mouseout mousedown click blur focusout keydown".split(" "), this.ia, true);
      this.listen(a_3211, ["mouseover", "focus", "focusin"], this.xa, true)
    };
  ObjectCreateSetPrototypeOf(bhbhbh3211, WindowG_2_3155);
  bhbhbh3211.prototype.H = function() {
    ch(this);
    WindowG_2_3155.prototype.H.call(this)
  };
  var dh = function(a, b) {
    switch (b.type) {
      case "mousedown":
      case "mouseover":
      case "mouseout":
      case "click":
        a.ga = false;
        break;
      case "keydown":
        a.ga = true
    }
  };
  bhbhbh3211.prototype.xa = function(searchElement) {
    this.K && this.K.disconnect();
    dh(this, searchElement);
    var b = searchElement.target;
    searchElement = "focus" == searchElement.type || "focusin" == searchElement.type;
    var c = this.g && IsContainsElement(this.g.g, b);
    if (this.ga || !searchElement || c) {
      this.va = searchElement;
      if (searchElement = b && b.getAttribute && this.K) searchElement = b.getAttribute("role") || null, searchElement = IsExistElement(elements2658, searchElement);
      searchElement && (this.K.observe(b, {
        attributes: true
      }), (searchElement = jgjgjg2674(b)) && (b = searchElement));
      this.o = b
    } else this.o = null;
    eh(this)
  };
  bhbhbh3211.prototype.ia = function(a) {
    dh(this, a);
    var b = a.target;
    a = "mousedown" == a.type || "click" == a.type;
    b = this.g && IsContainsElement(this.g.g, b);
    a && b || (this.o = null, eh(this))
  };
  bhbhbh3211.prototype.ua = function(a) {
    Wa(a, vvvvvv498(function(b) {
      var c = jgjgjg2674(b.target);
      c && "aria-activedescendant" == b.attributeName && (this.o = c, eh(this))
    }, this))
  };
  var eh = function(a) {
      if (!(a.R.isActive() && a.l && a.F)) {
        ch(a);
        var b = null != a.F ? a.F : 50;
        a.R.start(a.l ? b : 300)
      }
    },
    ch = function(a) {
      a.O && (self_.clearTimeout(a.O), a.O = 0, a.l = null)
    };
  bhbhbh3211.prototype.ya = function() {
    if (!this.o) SetJfkTooltipHide(this), this.F = this.l = null;
    else if (!(this.l && this.g && IsContainsElement(this.g.A(), this.o)) || this.l.getAttribute("data-tooltip-unhoverable")) {
      var a = ReReRe1858(this.o, function(g) {
          return g.getAttribute && (g.getAttribute("data-tooltip-contained") || g.getAttribute("data-tooltip") || g.g) && !g.getAttribute("data-tooltip-suspended")
        }),
        b = false;
      this.l && this.l != a && (SetJfkTooltipHide(this), this.F = this.l = null, b = true);
      if (!this.l && a && (this.l = a, !(a.getAttribute("data-tooltip-only-on-overflow") && a.offsetWidth >= a.scrollWidth &&
          a.offsetHeight >= a.scrollHeight || this.va && "mouse" == a.getAttribute("data-tooltip-trigger")))) {
        var c = mc;
        if (a.getAttribute("data-tooltip-contained"))
          for (var d = queryJfkTooltipData(a), e = 0; e < d.length; e++) {
            if (d[e].parentNode == a) {
              c = d[e].cloneNode(true);
              break
            }
          } else c = a.g ? a.g : lc(a.getAttribute("data-tooltip"));
        d = a.getAttribute("data-tooltip-align");
        e = a.getAttribute("data-tooltip-class");
        var f = a.getAttribute("data-tooltip-offset");
        f = obobob765(Bc(f)) ? -1 : Number(f);
        var h = a.getAttribute("data-tooltip-hide-delay");
        h = obobob765(Bc(h)) ? null : Number(h);
        if (!b && (a = a.getAttribute("data-tooltip-delay"), a = Math.max(0, a - 300))) {
          this.O = TgTgTg3092(w(this.hahahaha, this.l, c, d, f, e, h), a, this);
          return
        }
        this.hahahaha(this.l, c, d, f, e, h)
      }
    }
  };
  var ghghghgh = function(a) {
    if (a) switch (a.toLowerCase().split(",")[0]) {
      case "l":
        return 0;
      case "t":
        return 2;
      case "r":
        return 3
    }
    return 1
  };
  bhbhbh3211.prototype.hahahaha = function(a, element, c, d, e, f) {
    this.O = 0;
    this.F = f;
    if (!this.g) {
      this.g = new pgpgpg2730(this.T);
      SetJfkTooltipHide(this);
      AppendElementChild(this.T.g.body, this.g.A());
      mgmgmg2696(this, w(kgkgkg2685, this.g));
      this.B = new Vf("jfk-tooltip", true);
      this.B.sc = true;
      this.B.Za = true;
      f = this.B;
      var h = this.g.A(),
        g = this.g.o;
      f.g = h;
      f.B = g
    }
    a: {
      if (c) switch (c.toLowerCase().split(",")[1]) {
        case "l":
          f = 0;
          break a;
        case "r":
          f = 1;
          break a
      }
      f = 2
    }
    Wf(this.B, ghghghgh(c), f, void 0, d);
    RemoveClassName(this.g.A(), "jfk-tooltip-hide");
    this.M != e && (this.M && !obobob765(Bc(this.M)) && RemoveClassName(this.g.A(), this.M), obobob765(Bc(e)) || AddClassName(this.g.A(), e), this.M =
      e);
    Df(this.g.A(), 0, 0);
    if (element instanceof SafeHtml) RcRcRc1281(this.g.g, element);
    else
      for (RemoveElementChild(this.g.g); c = element.firstChild;) this.g.g.appendChild(c);
    this.B.l = a;
    this.B.u()
  };
  var SetJfkTooltipHide = function(aaaaaa3431) {
    aaaaaa3431.g && AddClassName(aaaaaa3431.g.A(), "jfk-tooltip-hide")
  };
  var hhhhhh_arr = [],
    ihihih3435 = function(JfkClasses) {
      AssertAssertion(!Object.isSealed(JfkClasses), "Cannot use getInstance() with a sealed constructor.");
      var Da = "Da";
      if (JfkClasses.Da && JfkClasses.hasOwnProperty(Da)) return JfkClasses.Da;
      hhhhhh_arr.push(JfkClasses);
      var newJfkClasses = new JfkClasses;
      JfkClasses.Da = newJfkClasses;
      AssertAssertion(JfkClasses.hasOwnProperty(Da), "Could not instantiate singleton.");
      return newJfkClasses
    };
  var lh = function(a, b, c, d, e, f) {
      if (isMac && e) return jh(a);
      if (e && !d) return false;
      if (!isMoz) {
        "number" === typeof b && (b = kh(b));
        var h = 17 == b || 18 == b || isMac && 91 == b;
        if ((!c || isMac) && h || isMac && 16 == b && (d || f)) return false
      }
      if ((isWebkit || Jd) && d && c) switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
          return false
      }
      if (FFFFFF1508 && d && b == a) return false;
      switch (a) {
        case 13:
          return isMoz ? f || e ? false : !(c && d) : true;
        case 27:
          return !(isWebkit || Jd || isMoz)
      }
      return isMoz && (d || e || f) ? false : jh(a)
    },
    jh = function(a) {
      if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a &&
        90 >= a || (isWebkit || Jd) && 0 == a) return true;
      switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
        case 163:
        case 58:
          return true;
        case 173:
          return isMoz;
        default:
          return false
      }
    },
    kh = function(a) {
      if (isMoz) a = mh(a);
      else if (isMac && isWebkit) switch (a) {
        case 93:
          a = 91
      }
      return a
    },
    mh = function(a) {
      switch (a) {
        case 61:
          return 187;
        case 59:
          return 186;
        case 173:
          return 189;
        case 224:
          return 91;
        case 0:
          return 224;
        default:
          return a
      }
    };
  var nh = function(a, b, c, d) {
    tgtgtg2761.call(this, d);
    this.type = "key";
    this.keyCode = a;
    this.repeat = c
  };
  googInherits(nh, tgtgtg2761);
  var WindowG_3_3497 = function(a, b) {
    WindowG_2.call(this);
    a && this.attach(a, b)
  };
  googInherits(WindowG_3_3497, WindowG_2);
  kkkkkkK8 = WindowG_3_3497.prototype;
  kkkkkkK8.Ea = null;
  kkkkkkK8.ib = null;
  kkkkkkK8.Vb = null;
  kkkkkkK8.jb = null;
  kkkkkkK8.X = -1;
  kkkkkkK8.pa = -1;
  kkkkkkK8.yb = false;
  var ph = {
      3: 13,
      12: 144,
      63232: 38,
      63233: 40,
      63234: 37,
      63235: 39,
      63236: 112,
      63237: 113,
      63238: 114,
      63239: 115,
      63240: 116,
      63241: 117,
      63242: 118,
      63243: 119,
      63244: 120,
      63245: 121,
      63246: 122,
      63247: 123,
      63248: 44,
      63272: 46,
      63273: 36,
      63275: 35,
      63276: 33,
      63277: 34,
      63289: 144,
      63302: 45
    },
    qh = {
      Up: 38,
      Down: 40,
      Left: 37,
      Right: 39,
      Enter: 13,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      "U+007F": 46,
      Home: 36,
      End: 35,
      PageUp: 33,
      PageDown: 34,
      Insert: 45
    },
    rh = isMac && isMoz;
  kkkkkkK8 = WindowG_3_3497.prototype;
  kkkkkkK8.Gc = function(a) {
    if (isWebkit || Jd)
      if (17 == this.X && !a.ctrlKey || 18 == this.X && !a.altKey || isMac && 91 == this.X && !a.metaKey) this.pa = this.X = -1; - 1 == this.X && (a.ctrlKey && 17 != a.keyCode ? this.X = 17 : a.altKey && 18 != a.keyCode ? this.X = 18 : a.metaKey && 91 != a.keyCode && (this.X = 91));
    lh(a.keyCode, this.X, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? (this.pa = kh(a.keyCode), rh && (this.yb = a.altKey)) : this.handleEvent(a)
  };
  kkkkkkK8.Ic = function(a) {
    this.pa = this.X = -1;
    this.yb = a.altKey
  };
  kkkkkkK8.handleEvent = function(aaaaaa3548) {
    var bbbbbb3549 = aaaaaa3548.ka, cccccc3550 = bbbbbb3549.altKey;
    if (FFFFFF1508 && "keypress" == aaaaaa3548.type) {
      var d = this.pa;
      var e = 13 != d && 27 != d ? bbbbbb3549.keyCode : 0
    } else(isWebkit || Jd) && "keypress" == aaaaaa3548.type ? (d = this.pa, e = 0 <= bbbbbb3549.charCode && 63232 > bbbbbb3549.charCode && jh(d) ? bbbbbb3549.charCode : 0) : ("keypress" == aaaaaa3548.type ? (rh && (cccccc3550 = this.yb), bbbbbb3549.keyCode == bbbbbb3549.charCode ? 32 > bbbbbb3549.keyCode ? (d = bbbbbb3549.keyCode, e = 0) : (d = this.pa, e = bbbbbb3549.charCode) : (d = bbbbbb3549.keyCode || this.pa, e = bbbbbb3549.charCode || 0)) : (d = bbbbbb3549.keyCode || this.pa, e = bbbbbb3549.charCode || 0), isMac && 63 == e && 224 == d && (d = 191));
    var f = d = kh(d);
    d ? 63232 <= d && d in ph ? f = ph[d] : 25 == d && aaaaaa3548.shiftKey && (f =
      9) : bbbbbb3549.keyIdentifier && bbbbbb3549.keyIdentifier in qh && (f = qh[bbbbbb3549.keyIdentifier]);
    if (!isMoz || "keypress" != aaaaaa3548.type || lh(f, this.X, aaaaaa3548.shiftKey, aaaaaa3548.ctrlKey, cccccc3550, aaaaaa3548.metaKey)) aaaaaa3548 = f == this.X, this.X = f, bbbbbb3549 = new nh(f, e, aaaaaa3548, bbbbbb3549), bbbbbb3549.altKey = cccccc3550, this.dispatchEvent(bbbbbb3549)
  };
  kkkkkkK8.A = function() {
    return this.Ea
  };
  kkkkkkK8.attach = function(a, b) {
    this.jb && this.detach();
    this.Ea = a;
    this.ib = AddEventListener(this.Ea, "keypress", this, b);
    this.Vb = AddEventListener(this.Ea, "keydown", this.Gc, b, this);
    this.jb = AddEventListener(this.Ea, "keyup", this.Ic, b, this)
  };
  kkkkkkK8.detach = function() {
    this.ib && (DoRemoveEventListener(this.ib), DoRemoveEventListener(this.Vb), DoRemoveEventListener(this.jb), this.jb = this.Vb = this.ib = null);
    this.Ea = null;
    this.pa = this.X = -1
  };
  kkkkkkK8.H = function() {
    WindowG_3_3497.I.H.call(this);
    this.detach()
  };
  var shshsh3572 = function() {};
  vavava454(shshsh3572);
  var WindowG_3 = function(aaaaaa3578) {
    WindowG_2.call(this);
    this.o = aaaaaa3578 || tetete1682();
    this.ha = th;
    this.W = null;
    this.Y = false;
    this.g = null;
    this.B = void 0;
    this.O = this.ga = this.u = null;
    this.Ya = false
  };
  googInherits(WindowG_3, WindowG_2);
  shshsh3572.Z();
  var th = null,
    vh = function(a, b) {
      switch (a) {
        case 1:
          return b ? "disable" : "enable";
        case 2:
          return b ? "highlight" : "unhighlight";
        case 4:
          return b ? "activate" : "deactivate";
        case 8:
          return b ? "select" : "unselect";
        case 16:
          return b ? "check" : "uncheck";
        case 32:
          return b ? "focus" : "blur";
        case 64:
          return b ? "open" : "close"
      }
      throw Error("Invalid component state");
    },
    wh = function(a, b) {
      if (a.u && a.u.O) {
        var c = a.u.O,
          d = a.W;
        d in c && delete c[d];
        c = a.u.O;
        if (null !== c && b in c) throw Error('The object already contains the key "' + b + '"');
        c[b] = a
      }
      a.W = b
    };
  WindowG_3.prototype.A = function() {
    return this.g
  };
  var xhxhxh3627 = function(aaaaaa3627) {
      aaaaaa3627 = aaaaaa3627.g;
      AssertAssertion(aaaaaa3627, "Can not call getElementStrict before rendering/decorating.");
      return aaaaaa3627
    },
    yhyhyh3632 = function(aaaaa3632) {
      aaaaa3632.B || (aaaaa3632.B = new WindowG_2_3155(aaaaa3632));
      return AssertAssertion(aaaaa3632.B)
    };
  WindowG_3.prototype.pb = function() {
    this.g = CreateDocDiv(this.o.g, "DIV")
  };
  var zhzhzh3640 = function(aaaaaa3640, bbbbbb3640) {
      if (aaaaaa3640.Y) throw Error("Component already rendered");
      aaaaaa3640.g || aaaaaa3640.pb();
      bbbbbb3640 ? bbbbbb3640.insertBefore(aaaaaa3640.g, null) : aaaaaa3640.o.g.body.appendChild(aaaaaa3640.g);
      aaaaaa3640.u && !aaaaaa3640.u.Y || aaaaaa3640.oa()
    },
    AhAhAh3646 = function(aaaaaa3646, bbbbbb3646) {
      if (aaaaaa3646.Y) throw Error("Component already rendered");
      if (bbbbbb3646 && aaaaaa3646.bc(bbbbbb3646)) {
        aaaaaa3646.Ya = true;
        var cccccc3650 = GetElementDocument(bbbbbb3646);
        aaaaaa3646.o && aaaaaa3646.o.g == cccccc3650 || (aaaaaa3646.o = tetete1682(bbbbbb3646));
        aaaaaa3646.lc(bbbbbb3646);
        aaaaaa3646.oa()
      } else throw Error("Invalid element to decorate");
    };
  kkkkkkK8 = WindowG_3.prototype;
  kkkkkkK8.bc = function() {
    return true
  };
  kkkkkkK8.lc = function(a) {
    this.g = a
  };
  kkkkkkK8.oa = function() {
    this.Y = true;
    BhBhBh3682(this, function(a) {
      !a.Y && a.A() && a.oa()
    })
  };
  kkkkkkK8.bb = function() {
    BhBhBh3682(this, function(a) {
      a.Y && a.bb()
    });
    this.B && this.B.removeAll();
    this.Y = false
  };
  kkkkkkK8.H = function() {
    this.Y && this.bb();
    this.B && (this.B.na(), delete this.B);
    BhBhBh3682(this, function(aaaaaa3672) {
      aaaaaa3672.na()
    });
    !this.Ya && this.g && RemoveElement(this.g);
    this.u = this.g = this.O = this.ga = null;
    WindowG_3.I.H.call(this)
  };
  kkkkkkK8.qb = function() {
    return this.g
  };
  var BhBhBh3682 = function(a, b) {
    a.ga && a.ga.forEach(b, void 0)
  };
  var ChChCh3685 = function() {}, DhDhDh3691;
  vavava454(ChChCh3685);
  var EhEhEh3687 = {
    button: "pressed",
    checkbox: "checked",
    menuitem: "selected",
    menuitemcheckbox: "checked",
    menuitemradio: "checked",
    radio: "checked",
    tab: "selected",
    treeitem: "selected"
  };
  ChChCh3685.prototype.rb = function() {};
  ChChCh3685.prototype.Ha = function(aaaaaa3704) {
    return aaaaaa3704.o.wa("DIV", Fh(this, aaaaaa3704).join(" "), aaaaaa3704.getContent())
  };
  var GhGhGh3707 = function(aaaaaa3707, searchElement, cccccc3707) {
    (aaaaaa3707 = aaaaaa3707.A ? aaaaaa3707.A() : aaaaaa3707) && (cccccc3707 ? PushClassArr : uf)(aaaaaa3707, [searchElement])
  };
  ChChCh3685.prototype.cc = function() {
    return true
  };
  ChChCh3685.prototype.qa = function(a, element) {
    element.id && wh(a, element.id);
    element && element.firstChild ? Hh(a, element.firstChild.nextSibling ? CloneArr(element.childNodes) : element.firstChild) : a.Ia = null;
    var cccccc3716 = 0,
      d = this.P(),
      e = this.P(),
      f = false,
      h = false,
      g = CloneArr(GetClassList(element));
    g.forEach(function(llllll3722) {
      f || llllll3722 != d ? h || llllll3722 != e ? cccccc3716 |= Ih(this, llllll3722) : h = true : (f = true, e == d && (h = true));
      1 == Ih(this, llllll3722) && (AssertElement(element), element.hasAttribute("tabindex") && Oe(element) && Ne(element, false))
    }, this);
    a.L = cccccc3716;
    f || (g.push(d), e == d && (h = true));
    h || g.push(e);
    (a = a.ba) && g.push.apply(g, a);
    f && h && !a || SetClassName(element, g.join(" "));
    return element
  };
  ChChCh3685.prototype.qc = function(a) {
    null == a.ha && (a.ha = Pf(a.Y ? a.g : a.o.g.body));
    a.ha && this.ec(a.A(), true);
    a.isEnabled() && this.lb(a, a.isVisible())
  };
  var Jh = function(a, b) {
    if (a = a.rb()) {
      AssertAssertion(b, "The element passed as a first parameter cannot be null.");
      var c = b.getAttribute("role") || null;
      a != c && gggggg2665(b, a)
    }
  };
  kkkkkkK8 = ChChCh3685.prototype;
  kkkkkkK8.sb = function(a, b) {
    var c = !b;
    b = FFFFFF1508 ? a.getElementsByTagName("*") : null;
    if (Qf) {
      if (c = c ? "none" : "", a.style && (a.style[Qf] = c), b) {
        a = 0;
        for (var d; d = b[a]; a++) d.style && (d.style[Qf] = c)
      }
    } else if (FFFFFF1508 && (c = c ? "on" : "", a.setAttribute("unselectable", c), b))
      for (a = 0; d = b[a]; a++) d.setAttribute("unselectable", c)
  };
  kkkkkkK8.ec = function(a, b) {
    GhGhGh3707(a, this.P() + "-rtl", b)
  };
  kkkkkkK8.dc = function(a) {
    var b;
    return a.S & 32 && (b = a.A()) ? b.hasAttribute("tabindex") && Oe(b) : false
  };
  kkkkkkK8.lb = function(a, b) {
    var c;
    if (a.S & 32 && (c = a.A())) {
      if (!b && a.L & 32) {
        try {
          c.blur()
        } catch (d) {}
        a.L & 32 && a.oc(null)
      }(c.hasAttribute("tabindex") && Oe(c)) != b && Ne(c, b)
    }
  };
  kkkkkkK8.tb = function(a, b, c) {
    var d = a.A();
    if (d) {
      var e = Kh(this, b);
      e && GhGhGh3707(a, e, c);
      this.ma(d, b, c)
    }
  };
  kkkkkkK8.ma = function(a, b, c) {
    DhDhDh3691 || (DhDhDh3691 = {
      1: "disabled",
      8: "selected",
      16: "checked",
      64: "expanded"
    });
    AssertAssertion(a, "The element passed as a first parameter cannot be null.");
    b = DhDhDh3691[b];
    var d = a.getAttribute("role") || null;
    d && (d = EhEhEh3687[d] || b, b = "checked" == b || "selected" == b ? d : b);
    b && igigig2668(a, b, c)
  };
  kkkkkkK8.P = function() {
    return "goog-control"
  };
  var Fh = function(a, b) {
      var c = a.P(),
        d = [c],
        e = a.P();
      e != c && d.push(e);
      c = b.getState();
      for (e = []; c;) {
        var f = c & -c;
        e.push(Kh(a, f));
        c &= ~f
      }
      d.push.apply(d, e);
      (a = b.ba) && d.push.apply(d, a);
      return d
    },
    Kh = function(a, b) {
      a.l || Lh(a);
      return a.l[b]
    },
    Ih = function(a, b) {
      if (!a.M) {
        a.l || Lh(a);
        var c = a.l,
          d = {},
          e;
        for (e in c) d[c[e]] = e;
        a.M = d
      }
      a = parseInt(a.M[b], 10);
      return isNaN(a) ? 0 : a
    },
    Lh = function(a) {
      var b = a.P();
      var c = -1 != b.replace(/\xa0|\s/g, " ").indexOf(" ");
      AssertAssertion(!c, "ControlRenderer has an invalid css class: '" + b + "'");
      a.l = {
        1: b + "-disabled",
        2: b + "-hover",
        4: b + "-active",
        8: b + "-selected",
        16: b + "-checked",
        32: b + "-focused",
        64: b + "-open"
      }
    };
  var MhMhMh3841 = function() {};
  googInherits(MhMhMh3841, ChChCh3685);
  vavava454(MhMhMh3841);
  kkkkkkK8 = MhMhMh3841.prototype;
  kkkkkkK8.rb = function() {
    return "button"
  };
  kkkkkkK8.ma = function(a, b, c) {
    switch (b) {
      case 8:
      case 16:
        AssertAssertion(a, "The button DOM element cannot be null.");
        igigig2668(a, "pressed", c);
        break;
      default:
      case 64:
      case 1:
        MhMhMh3841.I.ma.call(this, a, b, c)
    }
  };
  kkkkkkK8.Ha = function(a) {
    var b = MhMhMh3841.I.Ha.call(this, a);
    this.nb(b, a.Ta());
    var c = a.Ca();
    c && this.ub(b, c);
    a.S & 16 && this.ma(b, 16, !!(a.L & 16));
    return b
  };
  kkkkkkK8.qa = function(a, b) {
    b = MhMhMh3841.I.qa.call(this, a, b);
    var c = this.Ca(b);
    a.ua = c;
    a.J = this.Ta(b);
    a.S & 16 && this.ma(b, 16, !!(a.L & 16));
    return b
  };
  kkkkkkK8.Ca = function() {};
  kkkkkkK8.ub = function() {};
  kkkkkkK8.Ta = function(a) {
    return a.title
  };
  kkkkkkK8.nb = function(element, title_) {
    element && (title_ ? element.title = title_ : element.removeAttribute("title"))
  };
  kkkkkkK8.P = function() {
    return "goog-button"
  };
  var MouseEvents = {
    down: "mousedown",
    up: "mouseup",
    cancel: "mousecancel",
    move: "mousemove",
    over: "mouseover",
    out: "mouseout",
    enter: "mouseenter",
    leave: "mouseleave"
  };
  var VerifyDecoratorFunction = function(className, decoratorFunction) {
      if (!className) throw Error("Invalid class name " + className);
      if ("function" !== typeof decoratorFunction) throw Error("Invalid decorator function " + decoratorFunction);
    },
    Ph = {};
  var WindowG_4_3932 = function(a, b, c) {
    WindowG_3.call(this, c);
    if (!b) {
      for (b = this.constructor; b;) {
        var d = GetClosureUidIDValue(b);
        if (d = Ph[d]) break;
        b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor
      }
      b = d ? "function" === typeof d.Z ? d.Z() : new d : null
    }
    this.l = b;
    this.Ia = void 0 !== a ? a : null
  };
  googInherits(WindowG_4_3932, WindowG_3);
  kkkkkkK8 = WindowG_4_3932.prototype;
  kkkkkkK8.Ia = null;
  kkkkkkK8.L = 0;
  kkkkkkK8.S = 39;
  kkkkkkK8.Ja = 255;
  kkkkkkK8.yc = true;
  kkkkkkK8.ba = null;
  kkkkkkK8.Tb = true;
  var Rh = function(a) {
      a.Y && 0 != a.Tb && Qh(a, false);
      a.Tb = false
    },
    ShShSh3930 = function(a, searchElement) {
      searchElement && (a.ba ? IsExistElement(a.ba, searchElement) || a.ba.push(searchElement) : a.ba = [searchElement], GhGhGh3707(a, searchElement, true))
    };
  kkkkkkK8 = WindowG_4_3932.prototype;
  kkkkkkK8.pb = function() {
    var a = this.l.Ha(this);
    this.g = a;
    Jh(this.l, a);
    this.l.sb(a, false);
    this.isVisible() || (Of(a, false), a && igigig2668(a, "hidden", true))
  };
  kkkkkkK8.qb = function() {
    return this.A()
  };
  kkkkkkK8.bc = function(a) {
    return this.l.cc(a)
  };
  kkkkkkK8.lc = function(a) {
    this.g = a = this.l.qa(this, a);
    Jh(this.l, a);
    this.l.sb(a, false);
    this.yc = "none" != a.style.display
  };
  kkkkkkK8.oa = function() {
    WindowG_4_3932.I.oa.call(this);
    var a = this.l,
      b = xhxhxh3627(this);
    AssertAssertion(this);
    AssertAssertion(b);
    this.isVisible() || igigig2668(b, "hidden", !this.isVisible());
    this.isEnabled() || a.ma(b, 1, !this.isEnabled());
    this.S & 8 && a.ma(b, 8, this.isSelected());
    this.S & 16 && a.ma(b, 16, !!(this.L & 16));
    this.S & 64 && a.ma(b, 64, !!(this.L & 64));
    this.l.qc(this);
    this.S & -2 && (this.Tb && Qh(this, true), this.S & 32 && (a = this.A())) && (b = this.F || (this.F = new WindowG_3_3497), b.attach(a), yhyhyh3632(this).listen(b, "key", this.Hc).listen(a, "focus", this.Fc).listen(a, "blur", this.oc))
  };
  var Qh = function(a, b) {
    var c = yhyhyh3632(a),
      d = a.A();
    b ? (c.listen(d, MouseEvents.down, a.Ua).listen(d, [MouseEvents.up, MouseEvents.cancel], a.Va).listen(d, "mouseover", a.xa).listen(d, "mouseout", a.va), a.M != Ta && c.listen(d, "contextmenu", a.M), FFFFFF1508 && !a.K && (a.K = new WindowG_2_4108(a), mgmgmg2696(a, w(kgkgkg2685, a.K)))) : (c.fa(d, MouseEvents.down, a.Ua).fa(d, [MouseEvents.up, MouseEvents.cancel], a.Va).fa(d, "mouseover", a.xa).fa(d, "mouseout", a.va), a.M != Ta && c.fa(d, "contextmenu", a.M), FFFFFF1508 && (kgkgkg2685(a.K), a.K = null))
  };
  WindowG_4_3932.prototype.bb = function() {
    WindowG_4_3932.I.bb.call(this);
    this.F && this.F.detach();
    this.isVisible() && this.isEnabled() && this.l.lb(this, false)
  };
  WindowG_4_3932.prototype.H = function() {
    WindowG_4_3932.I.H.call(this);
    this.F && (this.F.na(), delete this.F);
    delete this.l;
    this.K = this.ba = this.Ia = null
  };
  WindowG_4_3932.prototype.getContent = function() {
    return this.Ia
  };
  var Hh = function(a, b) {
    a.Ia = b
  };
  WindowG_4_3932.prototype.isVisible = function() {
    return this.yc
  };
  WindowG_4_3932.prototype.isEnabled = function() {
    return !(this.L & 1)
  };
  WindowG_4_3932.prototype.setEnabled = function(a) {
    var b = this.u;
    b && "function" == typeof b.isEnabled && !b.isEnabled() || !Vh(this, 1, !a) || (a || (Wh(this, false), Xh(this, false)), this.isVisible() && this.l.lb(this, a), Yh(this, 1, !a, true))
  };
  var Xh = function(a, b) {
    Vh(a, 2, b) && Yh(a, 2, b)
  };
  WindowG_4_3932.prototype.isActive = function() {
    return !!(this.L & 4)
  };
  var Wh = function(a, b) {
    Vh(a, 4, b) && Yh(a, 4, b)
  };
  WindowG_4_3932.prototype.isSelected = function() {
    return !!(this.L & 8)
  };
  WindowG_4_3932.prototype.mb = function(a) {
    Vh(this, 32, a) && Yh(this, 32, a)
  };
  WindowG_4_3932.prototype.getState = function() {
    return this.L
  };
  var Yh = function(a, b, c, d) {
      d || 1 != b ? a.S & b && c != !!(a.L & b) && (a.l.tb(a, b, c), a.L = c ? a.L | b : a.L & ~b) : a.setEnabled(!c)
    },
    Zh = function(a) {
      if (a.Y && a.L & 32) throw Error("Component already rendered");
      a.L & 32 && Yh(a, 32, false);
      a.S &= -33
    },
    $h = function(a, b) {
      return !!(a.Ja & b) && !!(a.S & b)
    },
    Vh = function(a, b, c) {
      return !!(a.S & b) && !!(a.L & b) != c && (!(0 & b) || a.dispatchEvent(vh(b, c))) && !a.N
    };
  WindowG_4_3932.prototype.xa = function(a) {
    !ai(a, this.A()) && this.dispatchEvent("enter") && this.isEnabled() && $h(this, 2) && Xh(this, true)
  };
  WindowG_4_3932.prototype.va = function(a) {
    !ai(a, this.A()) && this.dispatchEvent("leave") && ($h(this, 4) && Wh(this, false), $h(this, 2) && Xh(this, false))
  };
  WindowG_4_3932.prototype.M = Ta;
  var ai = function(a, b) {
    return !!a.relatedTarget && IsContainsElement(b, a.relatedTarget)
  };
  kkkkkkK8 = WindowG_4_3932.prototype;
  kkkkkkK8.Ua = function(a) {
    this.isEnabled() && ($h(this, 2) && Xh(this, true), 0 != a.ka.button || isMac && a.ctrlKey || ($h(this, 4) && Wh(this, true), this.l && this.l.dc(this) && this.A().focus()));
    0 != a.ka.button || isMac && a.ctrlKey || a.preventDefault()
  };
  kkkkkkK8.Va = function(a) {
    this.isEnabled() && ($h(this, 2) && Xh(this, true), this.isActive() && this.kb(a) && $h(this, 4) && Wh(this, false))
  };
  kkkkkkK8.kb = function(a) {
    if ($h(this, 16)) {
      var b = !(this.L & 16);
      Vh(this, 16, b) && Yh(this, 16, b)
    }
    $h(this, 8) && Vh(this, 8, true) && Yh(this, 8, true);
    $h(this, 64) && (b = !(this.L & 64), Vh(this, 64, b) && Yh(this, 64, b));
    b = new qgqgqg2737("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.u = a.u);
    return this.dispatchEvent(b)
  };
  kkkkkkK8.Fc = function() {
    $h(this, 32) && this.mb(true)
  };
  kkkkkkK8.oc = function() {
    $h(this, 4) && Wh(this, false);
    $h(this, 32) && this.mb(false)
  };
  kkkkkkK8.Hc = function(a) {
    return this.isVisible() && this.isEnabled() && this.Sb(a) ? (a.preventDefault(), a.o(), true) : false
  };
  kkkkkkK8.Sb = function(a) {
    return 13 == a.keyCode && this.kb(a)
  };
  if ("function" !== typeof WindowG_4_3932) throw Error("Invalid component class " + WindowG_4_3932);
  if ("function" !== typeof ChChCh3685) throw Error("Invalid renderer class " + ChChCh3685);
  var bi = GetClosureUidIDValue(WindowG_4_3932);
  Ph[bi] = ChChCh3685;
  VerifyDecoratorFunction("goog-control", function() {
    return new WindowG_4_3932(null)
  });
  var WindowG_2_4108 = function(a) {
    WindowG.call(this);
    this.l = a;
    this.g = false;
    this.o = new WindowG_2_3155(this);
    mgmgmg2696(this, w(kgkgkg2685, this.o));
    a = xhxhxh3627(this.l);
    this.o.listen(a, MouseEvents.down, this.B).listen(a, MouseEvents.up, this.F).listen(a, "click", this.u)
  };
  googInherits(WindowG_2_4108, WindowG);
  var ci = !FFFFFF1508 || 9 <= Number(ae);
  WindowG_2_4108.prototype.B = function() {
    this.g = false
  };
  WindowG_2_4108.prototype.F = function() {
    this.g = true
  };
  var di = function(a, b) {
    if (!ci) return a.button = 0, a.type = b, a;
    var c = document.createEvent("MouseEvents");
    c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
    return c
  };
  WindowG_2_4108.prototype.u = function(a) {
    if (this.g) this.g = false;
    else {
      var b = a.ka,
        c = b.button,
        d = b.type,
        e = di(b, "mousedown");
      this.l.Ua(new tgtgtg2761(e, a.g));
      e = di(b, "mouseup");
      this.l.Va(new tgtgtg2761(e, a.g));
      ci || (b.button = c, b.type = d)
    }
  };
  WindowG_2_4108.prototype.H = function() {
    this.l = null;
    WindowG_2_4108.I.H.call(this)
  };
  var eieiei4119 = function() {};
  googInherits(eieiei4119, MhMhMh3841);
  vavava454(eieiei4119);
  kkkkkkK8 = eieiei4119.prototype;
  kkkkkkK8.rb = function() {};
  kkkkkkK8.Ha = function(a) {
    Rh(a);
    a.Ja &= -256;
    Zh(a);
    var b = a.o,
      c = b.wa,
      d = {
        "class": Fh(this, a).join(" "),
        disabled: !a.isEnabled(),
        title: a.Ta() || "",
        value: a.Ca() || ""
      };
    if (a = a.getContent()) {
      if ("string" !== typeof a)
        if (Array.isArray(a)) a = a.map(Qe).join("");
        else {
          var e = [];
          PePePe1850(a, e, true);
          a = e.join("");
          a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
          a = a.replace(/\u200B/g, "");
          a = a.replace(/ +/g, " ");
          " " != a && (a = a.replace(/^\s*/, ""))
        } a = a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    } else a = "";
    return c.call(b, "BUTTON",
      d, a || "")
  };
  kkkkkkK8.cc = function(a) {
    return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
  };
  kkkkkkK8.qa = function(a, b) {
    Rh(a);
    a.Ja &= -256;
    Zh(a);
    if (b.disabled) {
      var c = AssertString(Kh(this, 1));
      AddClassName(b, c)
    }
    return eieiei4119.I.qa.call(this, a, b)
  };
  kkkkkkK8.qc = function(a) {
    yhyhyh3632(a).listen(a.A(), "click", a.kb)
  };
  kkkkkkK8.sb = function() {};
  kkkkkkK8.ec = function() {};
  kkkkkkK8.dc = function(a) {
    return a.isEnabled()
  };
  kkkkkkK8.lb = function() {};
  kkkkkkK8.tb = function(a, b, c) {
    eieiei4119.I.tb.call(this, a, b, c);
    (a = a.A()) && 1 == b && (a.disabled = c)
  };
  kkkkkkK8.Ca = function(a) {
    return a.value
  };
  kkkkkkK8.ub = function(a, b) {
    a && (a.value = b)
  };
  kkkkkkK8.ma = function() {};
  var fififi4185 = function(aaaaaa4185, bbbbbb4185, cccccc4185) {
    WindowG_4_3932.call(this, aaaaaa4185, bbbbbb4185 || eieiei4119.Z(), cccccc4185)
  };
  googInherits(fififi4185, WindowG_4_3932);
  kkkkkkK8 = fififi4185.prototype;
  kkkkkkK8.Ca = function() {
    return this.ua
  };
  kkkkkkK8.Ta = function() {
    return this.J
  };
  kkkkkkK8.nb = function(a) {
    this.J = a;
    this.l.nb(this.A(), a)
  };
  kkkkkkK8.H = function() {
    fififi4185.I.H.call(this);
    delete this.ua;
    delete this.J
  };
  kkkkkkK8.oa = function() {
    fififi4185.I.oa.call(this);
    if (this.S & 32) {
      var a = this.A();
      a && yhyhyh3632(this).listen(a, "keyup", this.Sb)
    }
  };
  kkkkkkK8.Sb = function(a) {
    return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.kb(a) : 32 == a.keyCode
  };
  VerifyDecoratorFunction("goog-button", function() {
    return new fififi4185(null)
  });
  var cssValue = setCSSRaw(["value"]),
    _JfkButton = function(a, b, c, d) {
      fififi4185.call(this, a, JfkClasses.Z(), b);
      this.R = c || 0;
      this.T = d || 0;
      this.ia = false
    };
  googInherits(_JfkButton, fififi4185);
  kkkkkkK8 = _JfkButton.prototype;
  kkkkkkK8.nb = function(element) {
    this.J = element;
    var b = this.A();
    if (b)
      if (this.ia) {
        var c = element instanceof SafeHtml ? Zg(GetSafeHtmlG(element).toString()) : element;
        b.removeAttribute("title");
        b.removeAttribute("data-tooltip-contained");
        b.removeAttribute("data-tooltip");
        element ? (element instanceof SafeHtml ? b.g = element : (b.setAttribute("data-tooltip", element), b.g = null), b.setAttribute("aria-label", c)) : (b.g = null, b.removeAttribute("aria-label"));
        element = tetete1682(b) || tetete1682();
        b = GetClosureUidIDValue(element.g);
        ah[b] || (ah[b] = new bhbhbh3211(element))
      } else element ? b.title = element : b.removeAttribute("title")
  };
  kkkkkkK8.setEnabled = function(a) {
    this.isEnabled() != a && (_JfkButton.I.setEnabled.call(this, a), ji(this))
  };
  kkkkkkK8.mb = function(a) {
    _JfkButton.I.mb.call(this, a);
    ki(this, false)
  };
  kkkkkkK8.Ua = function(a) {
    _JfkButton.I.Ua.call(this, a);
    this.isEnabled() && ki(this, true)
  };
  kkkkkkK8.Va = function(a) {
    _JfkButton.I.Va.call(this, a);
    this.isEnabled() && ki(this, true)
  };
  var ki = function(a, b) {
      a.A() && (a = a.A(), b ? AddClassName(a, "jfk-button-clear-outline") : RemoveClassName(a, "jfk-button-clear-outline"))
    },
    ji = function(a) {
      a.A() && li(a.l, a)
    },
    JfkClasses = function() {
      this.jfkStandard = this.getJfkBtn() + "-standard";
      this.jfkAction = this.getJfkBtn() + "-action";
      this.jfkPrimary = this.getJfkBtn() + "-primary";
      this.jfkDefault = this.getJfkBtn() + "-default";
      this.jfkFlat = this.getJfkBtn() + "-flat";
      this.jfkNarrow = this.getJfkBtn() + "-narrow";
      this.jfkMini = this.getJfkBtn() + "-mini";
      this.jfkContrast = this.getJfkBtn() + "-contrast";
    };
  googInherits(JfkClasses, MhMhMh3841);
  JfkClasses.Z = function() {
    return ihihih3435(JfkClasses)
  };
  JfkClasses.prototype.g = function(a, b, c) {
    a && c.R != a && (c.R = a, ji(c));
    b && c.T != b && (c.T = b, ji(c))
  };
  JfkClasses.prototype.getJfkBtn = function() {
    return "jfk-button"
  };
  JfkClasses.prototype.Ha = function(a) {
    AssertInstanceof(a, _JfkButton, "Button is expected to be instance of jfk.Button");
    var b = a.o,
      c = Te(Xe, {
        disabled: !a.isEnabled(),
        checked: !!(a.L & 16),
        style: a.R,
        title: a.Ta(),
        Rc: a.ia,
        value: a.Ca(),
        width: a.T
      }, b);
    b.Ac(c, a.getContent());
    this.qa(a, c);
    return c
  };
  JfkClasses.prototype.qa = function(a, b) {
    JfkClasses.I.qa.call(this, a, b);
    this.u || (this.u = fbfbfb710(this.jfkStandard, w(this.g, 0, null), this.jfkAction, w(this.g, 2, null), this.jfkPrimary, w(this.g, 3, null), this.jfkDefault, w(this.g, 1, null), this.jfkFlat, w(this.g, 4, null), this.jfkMini, w(this.g, 5, null), this.jfkContrast, w(this.g, 6, null), this.jfkNarrow, w(this.g, null, 1)));
    for (var c = GetClassList(b), d = 0; d < c.length; ++d) {
      var e = this.u[c[d]];
      e && e(a)
    }
    if (c = b.getAttribute("data-tooltip")) a.J = c, a.ia = true;
    return b
  };
  var Tc = [function(cssRaw) {
    VerifyCSS(cssRaw, true, "safeAttr is a template literal tag function and should be called using the tagged template syntax. For example, safeAttr`foo`;");
    var b = cssRaw[0].toLowerCase();
    if (0 === b.indexOf("on") || 0 === "on".indexOf(b)) throw Error("Prefix '" + cssRaw[0] + "' does not guarantee the attribute to be safe as it is also a prefix for event handler attributesPlease use 'addEventListener' to set event handlers.");
    McArray.forEach(function(c) {
      if (0 === c.indexOf(b)) throw Error("Prefix '" + cssRaw[0] + "' does not guarantee the attribute to be safe as it is also a prefix for the security sensitive attribute '" +
        (c + "'. Please use native or safe DOM APIs to set the attribute."));
    });
    return new Pc(b, NcObj)
  }(cssValue)];
  JfkClasses.prototype.Ca = function(a) {
    return a.getAttribute("value") || ""
  };
  JfkClasses.prototype.ub = function(a, b) {
    a && ScScSc1289(a, b)
  };
  var li = function(a, b) {
    function c(h, g) {
      (h ? d : e).push(g)
    }
    AssertAssertion(b.A(), "Button element must already exist when updating style.");
    var d = [],
      e = [],
      f = b.R;
    c(0 == f, a.O);
    c(2 == f, a.o);
    c(3 == f, a.K);
    c(4 == f, a.F);
    c(5 == f, a.aa);
    c(1 == f, a.N);
    c(6 == f, a.B);
    c(1 == b.T, a.J);
    c(!b.isEnabled(), a.P() + "-disabled");
    uf(b.A(), e);
    PushClassArr(b.A(), d)
  };
  var mimimi4347 = function() {
    _JfkButton.call(this, "", void 0, 4);
    ShShSh3930(this, "jfk-button-flat");
    ShShSh3930(this, "gtx-audio-button");
    ShShSh3930(this, "no-audio");
    this.ya = this.Xa = "";
    yhyhyh3632(this).listen(this, "action", this.Bc)
  };
  ObjectCreateSetPrototypeOf(mimimi4347, _JfkButton);
  mimimi4347.prototype.Bc = function() {
    var a = chrome.runtime,
      b = a.sendMessage;
    var thisXa = this.Xa;
    thisXa = "https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=" + this.ya + SaSaSa604(thisXa) + "&q=" + encodeURIComponent(String(thisXa));
    b.call(a, {
      audioSrc: thisXa
    })
  };
  var pi = function(a, b, c) {
    var d = c.toLowerCase();
    d in ninini4456 && oioioi4455[ninini4456[d.toLowerCase()]] >= b.length ? (a.ba && ArraySplice(a.ba, "no-audio") && (0 == a.ba.length && (a.ba = null), GhGhGh3707(a, "no-audio", false)), a.Xa = b, a.ya = c) : ShShSh3930(a, "no-audio")
  };

  function AdjustZhLangKey(langKey) {
    langKey = String(langKey).toLowerCase().replace("_", "-");
    if ("zh-cn" == langKey) return "zh-CN";
    if ("zh-tw" == langKey) return "zh-TW";
    var dashIndex = langKey.indexOf("-");
    langKey = 0 <= dashIndex ? langKey.substring(0, dashIndex) : langKey;
    return "zh" == langKey ? "zh-CN" : langKey
  }

  function GetI18nMessage(msgKey) {
    msgKey = chrome.i18n.getMessage(msgKey);
    return chrome.i18n.getMessage(msgKey)
  };
  var BrowserLangObj = function() {
      this.o = []; //browserPreferredLangKeyArr
      chrome.i18n.getAcceptLanguages(vvvvvv498(this.aa, this));
      this.l = ""; //LangKey
      this.g = "1";
      this.u = true;
      this.B = {}; //Target LangObj(tl)
      this.N = {}; //Source LangObj(sl)
      chrome.storage.local.get(null, vvvvvv498(this.J, this));
      sisisi4434(this)
    },
    GetTargetLangKey = function(newBrowserLangObj) {
      var result = "";
      if ("" != newBrowserLangObj.l) result = newBrowserLangObj.l;
      else a_4399: {
        for (var idx = 0; idx < newBrowserLangObj.o.length; idx++) {
          var newLangKey = AdjustZhLangKey(newBrowserLangObj.o[idx]);
          if (newBrowserLangObj.B[newLangKey]) {
            result = newLangKey;
            break a_4399
          }
        }
        result = "en"
      }
      return result
    };
  BrowserLangObj.prototype.J = function(a) {
    "gtxTargetLang" in a && (this.l = a.gtxTargetLang);
    "gtxShowBubble" in a && (this.g = a.gtxShowBubble);
    "gtxDetectLanguage" in a && (this.u = a.gtxDetectLanguage);
    "gtxSourceLangList" in a && (this.N = vi(this, a.gtxSourceLangList));
    "gtxTargetLangList" in a && (this.B = vi(this, a.gtxTargetLangList));
    this.loaded = true
  };
  var vi = function(a, b) {
    var c = [],
      d;
    for (d in b) c.push({
      code: d,
      name: b[d]
    });
    c.sort(a.F);
    a = {};
    for (b = 0; b < c.length; b++) a[c[b].code] = c[b].name;
    return a
  };
  BrowserLangObj.prototype.F = function(a, b) {
    return a.name.localeCompare(b.name)
  };
  var sisisi4434 = function(a) {
    chrome.storage.onChanged.addListener(function(b) {
      b.gtxTargetLang && (a.l = b.gtxTargetLang.newValue);
      b.gtxShowBubble && (a.g = b.gtxShowBubble.newValue)
    })
  };
  BrowserLangObj.prototype.aa = function(browserPreferredLangKeyArr) {
    this.o = browserPreferredLangKeyArr
  };
  var IsEqualTargetLangKey = function(langKey) {
      var newBrowserLangObj_ = newBrowserLangObj;
      langKey = AdjustZhLangKey(langKey);
      return langKey == GetTargetLangKey(newBrowserLangObj_) ? true : false
    },
    zizizi4448 = function(SourceTargetLangKey) {
      var newBrowserLangObj_ = newBrowserLangObj;
      if ("sl" == SourceTargetLangKey) return newBrowserLangObj_.N;
      if ("tl" == SourceTargetLangKey) return newBrowserLangObj_.B;
      throw Error("Invalid input for getLangList()");
    },
    isChromeI18nDetectLanguage = !!chrome.i18n.detectLanguage;
  var oioioi4455 = [0, 200],
    ninini4456 = {
      af: 1,
      ar: 1,
      bn: 1,
      bs: 1,
      ca: 1,
      cs: 1,
      cy: 1,
      da: 1,
      de: 1,
      el: 1,
      en: 1,
      eo: 1,
      es: 1,
      et: 1,
      fi: 1,
      fr: 1,
      gu: 1,
      hi: 1,
      hr: 1,
      hu: 1,
      hy: 1,
      id: 1,
      is: 1,
      it: 1,
      ja: 1,
      jw: 1,
      km: 1,
      kn: 1,
      ko: 1,
      la: 1,
      lv: 1,
      mk: 1,
      ml: 1,
      mr: 1,
      my: 1,
      ne: 1,
      nl: 1,
      no: 1,
      pl: 1,
      pt: 1,
      ro: 1,
      ru: 1,
      si: 1,
      sk: 1,
      sq: 1,
      sr: 1,
      su: 1,
      sv: 1,
      sw: 1,
      ta: 1,
      te: 1,
      th: 1,
      tl: 1,
      tr: 1,
      vi: 1,
      uk: 1,
      ur: 1,
      zh: 1,
      "zh-cn": 1,
      "zh-tw": 1
    };
  var HtmlImageElement = function() {
      this.l = [];
      this.g = {};
      this.o = false;
      this.F = 1;
      this.u = {};
      AddEventListener(window, "beforeunload", this.N, false, this)
    },
    CastObjToString = function(obj_, value, noCutOffLongValue) {
      if (null == value) return "1";
      switch (GetTypeInfo(value)) {
        case "string":
          obj_ = value
          64 < obj_.length && (null == noCutOffLongValue || !noCutOffLongValue) && (obj_ = obj_.substr(0, 64))
          return encodeURIComponent(String(obj_));
        case "number":
          return "" + value;
        case "boolean":
          return value ? "1" : "0";
        case "array":
          var arr = [];
          for (var key in value) arr.push(CastObjToString(obj_, value[key], noCutOffLongValue));
          return arr.join(",");
        case "object":
          arr = [];
          for (var key in value) arr.push(HandleUrlParam(obj_, key, value[key], noCutOffLongValue));
          return arr.join(",");
        default:
          return ""
      }
    },
    HandleUrlParam = function(self_, key, value, noCutOffLongValue) {
      return [encodeURIComponent(String(key)), CastObjToString(self_, value, noCutOffLongValue || "smtalt" == key)].join("=")
    };
  HtmlImageElement.prototype.log = function(a, b) {
    this.l.push([a, b]);
    this.o || (this.o = true, TgTgTg3092(this.B, 0, this))
  };
  HtmlImageElement.prototype.B = function() {
    for (var idx = 0; idx < this.l.length; idx++) {
      var b = this.l[idx];
      AddImageElement(this, "/gen204?" + HandleUrlParam(this, b[0], b[1]))
    }
    this.l = [];
    this.o = false
  };
  var AddImageElement = function(htmlImageElement, imageSrc) {
    var imageElement = new Image, idx = htmlImageElement.F++;
    htmlImageElement.u[idx] = imageElement;
    imageElement.onload = imageElement.onerror = function() {
      delete HtmlImageElement.Z().u[idx]
    };
    imageElement.src = imageSrc;
    imageElement = null
  };
  HtmlImageElement.prototype.N = function() {
    this.B();
    for (var a in this.g) 0 != this.g[a] && (AddImageElement(this, "/gen204?" + HandleUrlParam(this, a, this.g[a][1])), a in this.g && (self_.clearTimeout(this.g[a][0]), delete this.g[a]))
  };
  HtmlImageElement.Z = function() {
    return ihihih3435(HtmlImageElement)
  };
  var Fi = function() {};
  Fi.prototype.g = null;
  var Hi = function(a) {
    var b;
    (b = a.g) || (b = {}, CreateActiveXObject(a) && (b[0] = true, b[1] = true), b = a.g = b);
    return b
  };
  var Ii, Ji = function() {};
  googInherits(Ji, Fi);
  var getProgId_ = function(a) {
      return (a = CreateActiveXObject(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    },
    CreateActiveXObject = function(a) {
      if (!a.l && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var ACTIVE_X_IDENTS = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], idx = 0; idx < ACTIVE_X_IDENTS.length; idx++) {
          var candidate = ACTIVE_X_IDENTS[idx];
          try {
            return new ActiveXObject(candidate), a.l = candidate
          } catch (e) {}
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
      }
      return a.l
    };
  Ii = new Ji;
  var WindowG_3_GoogNetXhrIo = function(a) {
    WindowG_2.call(this);
    this.headers = new Map;
    this.T = a || null;
    this.o = false;
    this.R = this.g = null;
    this.F = this.HttpMethod = this.MapHeaders = "";
    this.u = this.ha = this.K = this.ga = false;
    this.J = 0;
    this.O = null;
    this.va = "";
    this.M = this.ya = false
  };
  googInherits(WindowG_3_GoogNetXhrIo, WindowG_2);
  WindowG_3_GoogNetXhrIo.prototype.l = hd(id(), "goog.net.XhrIo").o;
  var httpProtocolRegex = /^https?$/i,
    opt_methods = ["POST", "PUT"],
    OiArr = [],
    Pi = function(url, b, opt_method, opt_content) {
      var _googNetXhrIo = new WindowG_3_GoogNetXhrIo;
      OiArr.push(_googNetXhrIo);
      b && _googNetXhrIo.listen("complete", b);
      _googNetXhrIo.Xb("ready", _googNetXhrIo.Xa);
      _googNetXhrIo.send(url, opt_method, opt_content, void 0)
    };
  WindowG_3_GoogNetXhrIo.prototype.Xa = function() {
    this.na();
    ArraySplice(OiArr, this)
  };
  WindowG_3_GoogNetXhrIo.prototype.send = function(url, opt_method, opt_content, opt_headers) {
    if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.MapHeaders + "; newUri=" + url);
    opt_method = opt_method ? opt_method.toUpperCase() : "GET";
    this.MapHeaders = url;
    this.F = "";
    this.HttpMethod = opt_method;
    this.ga = false;
    this.o = true;
    this.g = this.T ? getProgId_(this.T) : getProgId_(Ii);
    this.R = this.T ? Hi(this.T) : Hi(Ii);
    this.g.onreadystatechange = vvvvvv498(this.ua, this);
    try {
      ld(this.l, Qi(this, "Opening Xhr")), this.ha = true, this.g.open(opt_method, String(url), true), this.ha = false
    } catch (h) {
      ld(this.l, Qi(this, "Error opening Xhr: " + h.message));
      Ri(this, h);
      return
    }
    url = opt_content || "";
    opt_content = new Map(this.headers);
    if (opt_headers)
      if (Object.getPrototypeOf(opt_headers) === Object.prototype)
        for (var e in opt_headers) opt_content.set(e, opt_headers[e]);
      else if ("function" === typeof opt_headers.keys && "function" === typeof opt_headers.get) {
      e = IteratorNext(opt_headers.keys());
      for (var f = e.next(); !f.done; f = e.next()) f = f.value, opt_content.set(f, opt_headers.get(f))
    } else throw Error("Unknown input type for opt_headers: " + String(opt_headers));
    opt_headers = Array.from(opt_content.keys()).find(function(h) {
      return "content-type" == h.toLowerCase()
    });
    e = self_.FormData && url instanceof self_.FormData;
    !IsExistElement(opt_methods, opt_method) || opt_headers || e || opt_content.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    opt_method = IteratorNext(opt_content);
    for (opt_headers = opt_method.next(); !opt_headers.done; opt_headers = opt_method.next()) opt_content = IteratorNext(opt_headers.value), opt_headers = opt_content.next().value, opt_content = opt_content.next().value, this.g.setRequestHeader(opt_headers, opt_content);
    this.va && (this.g.responseType = this.va);
    "withCredentials" in this.g && this.g.withCredentials !== this.ya && (this.g.withCredentials = this.ya);
    try {
      SiSiSi4737(this), 0 < this.J && (this.M = Ti(this.g), ld(this.l, Qi(this, "Will abort after " + this.J + "ms if incomplete, xhr2 " + this.M)), this.M ? (this.g.timeout = this.J, this.g.ontimeout = vvvvvv498(this.xa, this)) : this.O = TgTgTg3092(this.xa, this.J, this)), ld(this.l, Qi(this, "Sending request")),
        this.K = true, this.g.send(url), this.K = false
    } catch (h) {
      ld(this.l, Qi(this, "Send error: " + h.message)), Ri(this, h)
    }
  };
  var Ti = function(a) {
    return FFFFFF1508 && "number" === typeof a.timeout && void 0 !== a.ontimeout
  };
  WindowG_3_GoogNetXhrIo.prototype.xa = function() {
    "undefined" != typeof uaObj && this.g && (this.F = "Timed out after " + this.J + "ms, aborting", ld(this.l, Qi(this, this.F)), this.dispatchEvent("timeout"), this.abort(8))
  };
  var Ri = function(a, b) {
      a.o = false;
      a.g && (a.u = true, a.g.abort(), a.u = false);
      a.F = b;
      Ui(a);
      Vi(a)
    },
    Ui = function(a) {
      a.ga || (a.ga = true, a.dispatchEvent("complete"), a.dispatchEvent("error"))
    };
  WindowG_3_GoogNetXhrIo.prototype.abort = function() {
    this.g && this.o && (ld(this.l, Qi(this, "Aborting")), this.o = false, this.u = true, this.g.abort(), this.u = false, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Vi(this))
  };
  WindowG_3_GoogNetXhrIo.prototype.H = function() {
    this.g && (this.o && (this.o = false, this.u = true, this.g.abort(), this.u = false), Vi(this, true));
    WindowG_3_GoogNetXhrIo.I.H.call(this)
  };
  WindowG_3_GoogNetXhrIo.prototype.ua = function() {
    this.N || (this.ha || this.K || this.u ? WiWiWi(this) : this.Ya())
  };
  WindowG_3_GoogNetXhrIo.prototype.Ya = function() {
    WiWiWi(this)
  };
  var WiWiWi = function(a) {
      if (a.o && "undefined" != typeof uaObj)
        if (a.R[1] && 4 == Xi(a) && 2 == a.Ba()) ld(a.l, Qi(a, "Local request error detected and ignored"));
        else if (a.K && 4 == Xi(a)) TgTgTg3092(a.ua, 0, a);
      else if (a.dispatchEvent("readystatechange"), 4 == Xi(a)) {
        ld(a.l, Qi(a, "Request complete"));
        a.o = false;
        try {
          if (YiYiYi(a)) a.dispatchEvent("complete"), a.dispatchEvent("success");
          else {
            try {
              var b = 2 < Xi(a) ? a.g.statusText : ""
            } catch (c) {
              ld(a.l, "Can not get status: " + c.message), b = ""
            }
            a.F = b + " [" + a.Ba() + "]";
            Ui(a)
          }
        } finally {
          Vi(a)
        }
      }
    },
    Vi = function(googNetXhrIo, b) {
      if (googNetXhrIo.g) {
        SiSiSi4737(googNetXhrIo);
        var c = googNetXhrIo.g,
          d = googNetXhrIo.R[0] ? function() {} : null;
        googNetXhrIo.g = null;
        googNetXhrIo.R = null;
        b || googNetXhrIo.dispatchEvent("ready");
        try {
          c.onreadystatechange = d
        } catch (e) {
          kd(googNetXhrIo.l, "Problem encountered resetting onreadystatechange: " + e.message)
        }
      }
    },
    SiSiSi4737 = function(googNetXhrIo) {
      googNetXhrIo.g && googNetXhrIo.M && (googNetXhrIo.g.ontimeout = null);
      googNetXhrIo.O && (self_.clearTimeout(googNetXhrIo.O), googNetXhrIo.O = null)
    };
  WindowG_3_GoogNetXhrIo.prototype.isActive = function() {
    return !!this.g
  };
  var YiYiYi = function(a) {
      var b = a.Ba();
      a: switch (b) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
          var c = true;
          break a;
        default:
          c = false
      }
      if (!c) {
        if (b = 0 === b) a = String(a.B).match(detailedUrlRegex)[1] || null, !a && self_.self && self_.self.location && (a = self_.self.location.protocol.slice(0, -1)), b = !httpProtocolRegex.test(a ? a.toLowerCase() : "");
        c = b
      }
      return c
    },
    Xi = function(a) {
      return a.g ? a.g.readyState : 0
    };
  WindowG_3_GoogNetXhrIo.prototype.Ba = function() {
    try {
      return 2 < Xi(this) ? this.g.status : -1
    } catch (a) {
      return -1
    }
  };
  var Zi = function(a) {
      try {
        return a.g ? a.g.responseText : ""
      } catch (b) {
        return ld(a.l, "Can not get responseText: " + b.message), ""
      }
    },
    Qi = function(a, b) {
      return b + " [" + a.ia + " " + a.B + " " + a.Ba() + "]"
    };

  function $i(a, b) {
    void 0 === a.hb ? Object.defineProperties(a, {
      hb: {
        value: b,
        configurable: true,
        writable: true,
        enumerable: false
      }
    }) : a.hb |= b
  }

  function aj(a) {
    return a.hb || 0
  }

  function bjbjbj4894(obj, bbbbbb4808, cccccc4808) {
    Object.defineProperties(obj, {
      Ub: {
        value: bbbbbb4808,
        configurable: true,
        writable: true,
        enumerable: false
      },
      rc: {
        value: cccccc4808,
        configurable: true,
        writable: true,
        enumerable: false
      },
      Lc: {
        value: void 0,
        configurable: true,
        writable: true,
        enumerable: false
      }
    })
  }

  function cj(a) {
    return null != a.Ub
  }

  function dj(a) {
    return a.Ub
  }

  function ej(a, b) {
    a.Ub = b
  }

  function fj(a, b) {
    a.Lc = b
  }

  function gj(a) {
    return a.rc
  }

  function hj(a, b) {
    AssertAssertion(0 <= Object.getOwnPropertyNames(a).indexOf("internalJsprotoWrapper"));
    return a.rc = b
  };
  var ijijij4855, jjjjjj4855, IsHasSymbolPivotFieldNumber, ljljlj4855, GetSymbolPivotFieldNumber, njnjnj4855, ojojoj4855, pjpjpj4855, qjqjqj4855;
  if ("function" === typeof Symbol && "symbol" === typeof Symbol()) {
    var SymbolBitset = Symbol("bitset"),
      SymbolPivotFieldNumber = Symbol("pivotFieldNumber"),
      SymbolDescriptor = Symbol("descriptor"),
      SymbolUnparsedFields = Symbol("unparsedFields"),
      SymbolWrapper = Symbol("wrapper");
    ijijij4855 = function(aaaaaa4862, bbbbbb4862) {
      aaaaaa4862[SymbolBitset] = jjjjjj4855(aaaaaa4862) | bbbbbb4862
    };
    jjjjjj4855 = function(aaaaaa4865) {
      return aaaaaa4865[SymbolBitset] || 0
    };
    ljljlj4855 = function(aaaaaa4868, bbbbbb4868, cccccc4868, dddddd4868) {
      aaaaaa4868[SymbolPivotFieldNumber] = bbbbbb4868;
      aaaaaa4868[SymbolWrapper] = cccccc4868;
      aaaaaa4868[SymbolDescriptor] = dddddd4868;
      aaaaaa4868[SymbolUnparsedFields] = void 0
    };
    IsHasSymbolPivotFieldNumber = function(arr) {
      return null != arr[SymbolPivotFieldNumber]
    };
    GetSymbolPivotFieldNumber = function(arr) {
      return arr[SymbolPivotFieldNumber]
    };
    njnjnj4855 = function(a, b) {
      a[SymbolPivotFieldNumber] = b
    };
    ojojoj4855 = function(a, b) {
      a[SymbolUnparsedFields] = b
    };
    pjpjpj4855 = function(a) {
      return a[SymbolWrapper]
    };
    qjqjqj4855 = function(a, b) {
      AssertAssertion(IsHasSymbolPivotFieldNumber(a));
      return a[SymbolWrapper] = b
    }
  } else ijijij4855 =
    $i, jjjjjj4855 = aj, ljljlj4855 = bjbjbj4894, IsHasSymbolPivotFieldNumber = cj, GetSymbolPivotFieldNumber = dj, njnjnj4855 = ej, ojojoj4855 = fj, pjpjpj4855 = gj, qjqjqj4855 = hj;
  var A_4895 = function() {}, B_A_4895 = function() {};
  ObjectCreateSetPrototypeOf(B_A_4895, A_4895);
  var C_B_A_4895 = function() {};
  ObjectCreateSetPrototypeOf(C_B_A_4895, B_A_4895);

  function IsTypeObject(obj) {
    return null != obj && "object" === typeof obj && !Array.isArray(obj) && obj.constructor === Object
  }

  function VerifySymbolPivotFieldNumberChangedArr(arr) {
    var symbolPivotFieldNumber = AssertNumber(GetSymbolPivotFieldNumber(arr));
    if (symbolPivotFieldNumber > arr.length) return null;
    AssertAssertion(symbolPivotFieldNumber === arr.length);
    arr = arr[symbolPivotFieldNumber - 1];
    AssertAssertion(IsTypeObject(arr));
    return arr
  }

  function SetTitleAndCheckSymbolPivotField(arr, num, title) {
    AssertAssertion(0 < num);
    var symbolPivotFieldNumber = GetSymbolPivotFieldNumber(arr);
    if (num < symbolPivotFieldNumber) arr[num - 1] = title;
    else {
      var changedArr = VerifySymbolPivotFieldNumberChangedArr(arr);
      changedArr ? changedArr[num] = title : (changedArr = {}, arr[symbolPivotFieldNumber - 1] = (changedArr[num] = title, changedArr))
    }
  }

  function CjCjCj4927(aaaaaa4927, bbbbbb4927) {
    AssertAssertion(0 < bbbbbb4927);
    var symbolPivotFieldNumber = GetSymbolPivotFieldNumber(aaaaaa4927);
    if (bbbbbb4927 < symbolPivotFieldNumber) return AssertAssertion(!IsTypeObject(aaaaaa4927[bbbbbb4927 - 1])), aaaaaa4927[bbbbbb4927 - 1];
    var dddddd4931;
    return null == (dddddd4931 = VerifySymbolPivotFieldNumberChangedArr(aaaaaa4927)) ? void 0 : dddddd4931[bbbbbb4927]
  }

  function DjDjDj4935(aaaaaa4935, bbbbbb4935, cccccc4935) {
    aaaaaa4935 = CjCjCj4927(aaaaaa4935, bbbbbb4935);
    return null == aaaaaa4935 ? cccccc4935 : aaaaaa4935
  }
  var freezeObj = Object.freeze([]);
  var FjFjFj4940 = function() {};
  FjFjFj4940.prototype[Symbol.iterator] = function() {
    return this.g()
  };
  var GjGjGj4944 = function(aaaaaa4944, bbbbbb4944) {
    this.o = aaaaaa4944;
    this.l = bbbbbb4944
  };
  ObjectCreateSetPrototypeOf(GjGjGj4944, FjFjFj4940);
  GjGjGj4944.prototype.g = function() {
    var aaaaaa4950 = this.o[Symbol.iterator](), bbbbbb4950 = this.l;
    return {
      next: function() {
        var cccccc4953 = aaaaaa4950.next(), dddddd4953 = cccccc4953.done;
        if (dddddd4953) return cccccc4953;
        cccccc4953 = bbbbbb4950(cccccc4953.value);
        return {
          done: dddddd4953,
          value: cccccc4953
        }
      }
    }
  };
  GjGjGj4944.prototype.map = function(aaaaaa4963) {
    return new GjGjGj4944(this, aaaaaa4963)
  };
  var HjHjHj4966 = function(freezeObj) {
    this.freezeObj = freezeObj
  };
  ObjectCreateSetPrototypeOf(HjHjHj4966, FjFjFj4940);
  var JjJjJj4970 = function(aaaaaa4970) {
    aaaaaa4970 && aaaaaa4970.length ? aaaaaa4970 = new HjHjHj4966(AssertArray(aaaaaa4970).slice()) : (Ij || (Ij = new HjHjHj4966(freezeObj)), aaaaaa4970 = Ij);
    return aaaaaa4970
  };
  HjHjHj4966.prototype.g = function() {
    return this.freezeObj[Symbol.iterator]()
  };
  HjHjHj4966.prototype.map = function(a) {
    return new GjGjGj4944(this, a)
  };
  var Ij;

  function KjKjKj4984(aaaaaa4984, bbbbbb4984) {
    var obj = CjCjCj4927(aaaaaa4984, bbbbbb4984);
    return obj instanceof A_4895 ? (obj = AssertInstanceof(obj, C_B_A_4895), AssertArray(obj.g(aaaaaa4984, bbbbbb4984))) : JjJjJj4970(obj)
  }

  function LjLjLj4987(aaaaaa4987, bbbbbb4987) {
    var cccccc4988 = CjCjCj4927(aaaaaa4987, bbbbbb4987);
    cccccc4988 instanceof B_A_4895 && (cccccc4988 = CjCjCj4927(aaaaaa4987, bbbbbb4987), Array.isArray(cccccc4988) ? cccccc4988 = AssertArray(cccccc4988) : cccccc4988 instanceof B_A_4895 ? cccccc4988 = AssertArray(cccccc4988.g(aaaaaa4987, bbbbbb4987)) : (AssertAssertion(null == cccccc4988), cccccc4988 = [], SetTitleAndCheckSymbolPivotField(aaaaaa4987, bbbbbb4987, cccccc4988)));
    aaaaaa4987 = AssertArray(cccccc4988);
    AssertAssertion(false, "Index undefined out of bounds for array[" + (null == aaaaaa4987 ? void 0 : aaaaaa4987.length) + "] fieldNumber " + bbbbbb4987 + ".");
    return null == aaaaaa4987 ? void 0 : aaaaaa4987[void 0]
  };

  function NNNNNN4995(aaaaaa4995, bbbbbb4995, obj) {
    for (var dddddd4995 = aaaaaa4995.h, eeeeee4996 = 0; eeeeee4996 < bbbbbb4995.length; eeeeee4996++) {
      var ffffff4997 = bbbbbb4995[eeeeee4996];
      if (null != CjCjCj4927(dddddd4995, ffffff4997.i))
        if (ffffff4997.m) {
          var hhhhhh5000 = ffffff4997.m(aaaaaa4995);
          obj[ffffff4997.name] = ffffff4997.D ? hhhhhh5000.s() : hhhhhh5000
        } else hhhhhh5000 = [].concat(GetAllIterator(ffffff4997.v(aaaaaa4995))), obj[ffffff4997.name] = ffffff4997.D ? hhhhhh5000.map(function(g) {
          return g.s()
        }) : hhhhhh5000
    }
  }

  function OOOOOO5008(aaaaaa5008, bbbbbb5008, cccccc5008) {
    bbbbbb5008 = new Map(bbbbbb5008.map(function(n) {
      return [n.name, n]
    }));
    cccccc5008 = new cccccc5008;
    var dddddd5013 = cccccc5008.h,
      eeeeee5014 = {},
      ffffff5015;
    for (ffffff5015 in aaaaaa5008) {
      if (AssertAssertion(aaaaaa5008.hasOwnProperty(ffffff5015))) {
        var hhhhhh5018 = AssertAssertion(bbbbbb5008.get(ffffff5015)),
          gggggg5019 = aaaaaa5008[ffffff5015];
        if (null != gggggg5019) {
          var llllll5021 = void 0;
          if (hhhhhh5018.C) eeeeee5014.ob = hhhhhh5018.C, llllll5021 = function(nnnnnn5022) {
            return function(pppppp5023) {
              pppppp5023 = AssertObject(pppppp5023);
              return nnnnnn5022.ob(pppppp5023).h
            }
          }(eeeeee5014), hhhhhh5018.m ? llllll5021 = llllll5021(gggggg5019) : (gggggg5019 = AssertArray(gggggg5019).map(llllll5021), llllll5021 = gggggg5019.length ? gggggg5019 : null);
          else bbbbbb5028: {
            switch (typeof gggggg5019) {
              case "string":
              case "number":
              case "boolean":
                llllll5021 = gggggg5019;
                break bbbbbb5028;
              case "object":
                if (Array.isArray(gggggg5019)) {
                  llllll5021 = gggggg5019.length ? gggggg5019 : null;
                  break bbbbbb5028
                }
            }
            ThrowAssertionErrorFailure("Unexpected value " + gggggg5019);llllll5021 = void 0
          }
          null != llllll5021 && SetTitleAndCheckSymbolPivotField(dddddd5013, hhhhhh5018.i, llllll5021)
        }
      }
      eeeeee5014 = {
        ob: eeeeee5014.ob
      }
    }
    return cccccc5008
  }

  function RRRRRR5053(aaaaaa5053, bbbbbb5053, arr) {
    for (var dddddd5054 = aaaaaa5053.h, idx = 0; idx < bbbbbb5053.length; idx++) {
      var ffffff5055 = bbbbbb5053[idx];
      if (null != CjCjCj4927(dddddd5054, ffffff5055.i))
        if (ffffff5055.m) {
          var hhhhhh5058 = ffffff5055.m(aaaaaa5053);
          arr.push(ffffff5055.j(ffffff5055, hhhhhh5058))
        } else {
          hhhhhh5058 = 0;
          for (var gggggg5062 = ffffff5055.v(aaaaaa5053)[Symbol.iterator](), llllll5062 = gggggg5062.next(); !llllll5062.done; llllll5062 = gggggg5062.next(), hhhhhh5058++) arr.push(ffffff5055.j(ffffff5055, llllll5062.value, hhhhhh5058))
        }
    }
  }

  function SSSSSS5066(aaaaaa5066, obj, cccccc5066) {
    obj instanceof Uint8Array ? obj = '"' + [].concat(GetAllIterator(obj)).map(function(value) {
      return "\\x" + (16 > AssertNumber(value) ? "0" : "") + value.toString(16)
    }).join("") + '"' : "string" === typeof obj && null == aaaaaa5066.Ze && (obj = '"' + obj + '"');
    return aaaaaa5066.name + ": " + obj + (null == cccccc5066 ? "" : " #" + cccccc5066)
  }

  function TTTTTT5074(aaaaaa5074, bbbbbb5074, cccccc5074) {
    bbbbbb5074 = bbbbbb5074.G();
    var dddddd5076 = "", eeeeee5076 = null == cccccc5074 ? "" : " #" + cccccc5074;
    cccccc5074 = null == cccccc5074 ? "" : " " + cccccc5074;
    bbbbbb5074 && (dddddd5076 = "\n  " + bbbbbb5074.replace(/\n/g, "\n  "));
    return aaaaaa5074.name + " {" + eeeeee5076 + dddddd5076 + "\n} # " + aaaaaa5074.name + cccccc5074
  };

  function UUUUUU5082(aaaaaa5082, bbbbbb5082, cccccc5082) {
    return DjDjDj4935(aaaaaa5082, bbbbbb5082, cccccc5082 || 0)
  }

  function MjMjMj5086(aaaaaa5086, bbbbbb5086) {
    aaaaaa5086 = KjKjKj4984(aaaaaa5086, bbbbbb5086);
    return aaaaaa5086 = aaaaaa5086.map(AssertNumber)
  };

  function VVVVVV5091(aaaaaa5091, bbbbbb5091, cccccc5091) {
    var dddddd5092 = NjNjNj5111(aaaaaa5091, bbbbbb5091, cccccc5091);
    if (!dddddd5092) {
      var e = [];
      dddddd5092 = new cccccc5091(e);
      SetTitleAndCheckSymbolPivotField(aaaaaa5091, bbbbbb5091, e)
    }
    return dddddd5092
  }

  function Oj(a, b, c) {
    return (a = AssertArray(LjLjLj4987(a, b))) ? PjPjPj5115(a, c) : new c
  }

  function WWWWWW5108(aaaaaa5108, bbbbbb5108, cccccc5108) {
    return KjKjKj4984(aaaaaa5108, bbbbbb5108).map(function(dddddd5109) {
      return PjPjPj5115(dddddd5109, cccccc5108)
    })
  }

  function NjNjNj5111(aaaaaa5111, bbbbbb5111, cccccc5111) {
    if (aaaaaa5111 = CjCjCj4927(aaaaaa5111, bbbbbb5111)) return PjPjPj5115(AssertArray(aaaaaa5111), cccccc5111)
  }

  function PjPjPj5115(aaaaaa5115, bbbbbb5115) {
    var cccccc5116 = pjpjpj4855(aaaaaa5115);
    return null == cccccc5116 ? new bbbbbb5115(aaaaaa5115) : cccccc5116
  };

  function XXXXXX5120(aaaaaa5120, bbbbbb5120) {
    return DjDjDj4935(aaaaaa5120, bbbbbb5120, "")
  }

  function YYYYYY5124(aaaaaa5124, bbbbbb5124) {
    aaaaaa5124 = KjKjKj4984(aaaaaa5124, bbbbbb5124);
    return aaaaaa5124 = aaaaaa5124.map(AssertString)
  };
  Object.create(null);
  var ZZZZZZ5129 = function(aaaaaa5129, bbbbbb5129) {
    aaaaaa5129 = aaaaaa5129 || [];
    if (IsHasSymbolPivotFieldNumber(aaaaaa5129)) bbbbbb5129 && bbbbbb5129 > aaaaaa5129.length && !VerifySymbolPivotFieldNumberChangedArr(aaaaaa5129) && njnjnj4855(aaaaaa5129, bbbbbb5129), qjqjqj4855(aaaaaa5129, this);
    else {
      bbbbbb5129 = Math.max(bbbbbb5129 || 2147483647, aaaaaa5129.length + 1);
      var c_5134_len = aaaaaa5129.length;
      c_5134_len = c_5134_len && aaaaaa5129[c_5134_len - 1];
      if (IsTypeObject(c_5134_len)) {
        bbbbbb5129 = aaaaaa5129.length;
        for (var num in c_5134_len) {
          var _num = Number(num);
          _num < bbbbbb5129 && (aaaaaa5129[_num - 1] = c_5134_len[num], delete c_5134_len[_num])
        }
      }
      ljljlj4855(aaaaaa5129, bbbbbb5129, this, void 0)
    }
    this.h = aaaaaa5129
  };
  ZZZZZZ5129.prototype.clear = function() {
    this.h.length = 0;
    ojojoj4855(this.h, void 0)
  };
  var QjQjQj5151 = function(aaaaaa5151) {
    ZZZZZZ5129.call(this, aaaaaa5151)
  };
  ObjectCreateSetPrototypeOf(QjQjQj5151, ZZZZZZ5129);
  kkkkkkK8 = QjQjQj5151.prototype;
  kkkkkkK8.Cb = function() {
    return XXXXXX5120(this.h, 1)
  };
  kkkkkkK8.getTitle = function() {
    return XXXXXX5120(this.h, 2)
  };
  kkkkkkK8.setTitle = function(title) {
    SetTitleAndCheckSymbolPivotField(this.h, 2, title)
  };
  kkkkkkK8.Ma = function() {
    return XXXXXX5120(this.h, 3)
  };
  kkkkkkK8.cb = function() {
    return XXXXXX5120(this.h, 4)
  };
  var RjRjRj5171 = function() {
      return [{
        name: "alert_mid",
        i: 1,
        m: function(a) {
          return a.Cb()
        },
        j: SSSSSS5066
      }, {
        name: "title",
        i: 2,
        m: function(a) {
          return a.getTitle()
        },
        j: SSSSSS5066
      }, {
        name: "description",
        i: 3,
        m: function(a) {
          return a.Ma()
        },
        j: SSSSSS5066
      }, {
        name: "link",
        i: 4,
        m: function(a) {
          return a.cb()
        },
        j: SSSSSS5066
      }]
    },
    SjSjSj5202 = function(aaaaaa5202) {
      return OOOOOO5008(aaaaaa5202, RjRjRj5171(), QjQjQj5151)
    };
  QjQjQj5151.prototype.s = function() {
    var aaaaaa5206 = {};
    NNNNNN4995(this, RjRjRj5171(), aaaaaa5206);
    return aaaaaa5206
  };
  QjQjQj5151.prototype.G = function() {
    var arr = [];
    RRRRRR5053(this, RjRjRj5171(), arr);
    return arr.join("\n")
  };
  QjQjQj5151.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var TjTjTj5218 = function(aaaaaa5218) {
    ZZZZZZ5129.call(this, aaaaaa5218)
  };
  ObjectCreateSetPrototypeOf(TjTjTj5218, ZZZZZZ5129);
  var UjUjUj5222 = function(aaaaaa5222) {
    return new TjTjTj5218(aaaaaa5222)
  };
  TjTjTj5218.prototype.getType = function() {
    return UUUUUU5082(this.h, 1)
  };
  var VjVjVj5228 = function() {
      return [{
        name: "type",
        i: 1,
        m: function(a) {
          return a.getType()
        },
        j: SSSSSS5066
      }, {
        name: "display_text",
        i: 2,
        m: function(a) {
          return XXXXXX5120(a.h, 2)
        },
        j: SSSSSS5066
      }, {
        name: "contact_text",
        i: 3,
        m: function(a) {
          return XXXXXX5120(a.h, 3)
        },
        j: SSSSSS5066
      }]
    },
    WjWjWj5252 = function(aaaaaa5252) {
      return OOOOOO5008(aaaaaa5252, VjVjVj5228(), TjTjTj5218)
    };
  TjTjTj5218.prototype.s = function() {
    var aaaaaa5256 = {};
    NNNNNN4995(this, VjVjVj5228(), aaaaaa5256);
    return aaaaaa5256
  };
  TjTjTj5218.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, VjVjVj5228(), a);
    return a.join("\n")
  };
  TjTjTj5218.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var XjXjXj5268 = function(a) {
    ZZZZZZ5129.call(this, a)
  };
  ObjectCreateSetPrototypeOf(XjXjXj5268, ZZZZZZ5129);
  var YjYjYj5272 = function(aaaaaa5272) {
    return new XjXjXj5268(aaaaaa5272)
  };
  XjXjXj5268.prototype.getTitle = function() {
    return XXXXXX5120(this.h, 3)
  };
  XjXjXj5268.prototype.setTitle = function(a) {
    SetTitleAndCheckSymbolPivotField(this.h, 3, a)
  };
  XjXjXj5268.prototype.Ma = function() {
    return XXXXXX5120(this.h, 4)
  };
  var ZjZjZj5284 = function() {
      return [{
        name: "location",
        i: 1,
        m: function(a) {
          return XXXXXX5120(a.h, 1)
        },
        j: SSSSSS5066
      }, {
        name: "language",
        i: 2,
        m: function(a) {
          return XXXXXX5120(a.h, 2)
        },
        j: SSSSSS5066
      }, {
        name: "title",
        i: 3,
        m: function(a) {
          return a.getTitle()
        },
        j: SSSSSS5066
      }, {
        name: "description",
        i: 4,
        m: function(a) {
          return a.Ma()
        },
        j: SSSSSS5066
      }, {
        name: "contact_details",
        i: 5,
        D: UjUjUj5222,
        C: WjWjWj5252,
        v: function(a) {
          return WWWWWW5108(a.h, 5, TjTjTj5218)
        },
        j: TTTTTT5074
      }]
    },
    akakak5324 = function(aaaaaa5324) {
      return OOOOOO5008(aaaaaa5324, ZjZjZj5284(), XjXjXj5268)
    };
  XjXjXj5268.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, ZjZjZj5284(), a);
    return a
  };
  XjXjXj5268.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, ZjZjZj5284(), a);
    return a.join("\n")
  };
  XjXjXj5268.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var bkbkbk5340 = function(aaaaaa5340) {
    ZZZZZZ5129.call(this, aaaaaa5340)
  };
  ObjectCreateSetPrototypeOf(bkbkbk5340, ZZZZZZ5129);
  bkbkbk5340.prototype.getTitle = function() {
    return XXXXXX5120(this.h, 1)
  };
  bkbkbk5340.prototype.setTitle = function(a) {
    SetTitleAndCheckSymbolPivotField(this.h, 1, a)
  };
  bkbkbk5340.prototype.Cb = function() {
    return XXXXXX5120(this.h, 2)
  };
  var ckckck5353 = function() {
      return [{
        name: "title",
        i: 1,
        m: function(a) {
          return a.getTitle()
        },
        j: SSSSSS5066
      }, {
        name: "alert_mid",
        i: 2,
        m: function(a) {
          return a.Cb()
        },
        j: SSSSSS5066
      }, {
        name: "help_and_info",
        i: 3,
        D: YjYjYj5272,
        C: akakak5324,
        v: function(a) {
          return WWWWWW5108(a.h, 3, XjXjXj5268)
        },
        j: TTTTTT5074
      }]
    },
    dkdkdk5379 = function(a) {
      return OOOOOO5008(a, ckckck5353(), bkbkbk5340)
    };
  bkbkbk5340.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, ckckck5353(), a);
    return a
  };
  bkbkbk5340.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, ckckck5353(), a);
    return a.join("\n")
  };
  bkbkbk5340.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var ekekek5395 = function(a) {
    ZZZZZZ5129.call(this, a)
  };
  ObjectCreateSetPrototypeOf(ekekek5395, ZZZZZZ5129);
  var fkfkfk5399 = function(a) {
    return new ekekek5395(a)
  };
  ekekek5395.prototype.Eb = function() {
    return UUUUUU5082(this.h, 1)
  };
  ekekek5395.prototype.Ib = function() {
    return MjMjMj5086(this.h, 2)
  };
  var gkgkgk5408 = function() {
      return [{
        name: "backend",
        i: 1,
        m: function(a) {
          return a.Eb()
        },
        j: SSSSSS5066
      }, {
        name: "features_applied",
        i: 2,
        v: function(a) {
          return a.Ib()
        },
        j: SSSSSS5066
      }]
    },
    hkhkhk5425 = function(a) {
      return OOOOOO5008(a, gkgkgk5408(), ekekek5395)
    };
  ekekek5395.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, gkgkgk5408(), a);
    return a
  };
  ekekek5395.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, gkgkgk5408(), a);
    return a.join("\n")
  };
  ekekek5395.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var ikikik5441 = function(aaaaaa5441) {
    ZZZZZZ5129.call(this, aaaaaa5441)
  };
  ObjectCreateSetPrototypeOf(ikikik5441, ZZZZZZ5129);
  var jkjkjk5445 = function(aaaaaa5445) {
    return new ikikik5441(aaaaaa5445)
  };
  ikikik5441.prototype.Lb = function() {
    return UUUUUU5082(this.h, 1)
  };
  var kkkkkk5451 = function() {
      return [{
        name: "label",
        i: 1,
        m: function(a) {
          return a.Lb()
        },
        j: SSSSSS5066
      }, {
        name: "oxford_label",
        i: 2,
        m: function(a) {
          return UUUUUU5082(a.h, 2)
        },
        j: SSSSSS5066
      }]
    },
    lklklk5468 = function(a) {
      return OOOOOO5008(a, kkkkkk5451(), ikikik5441)
    };
  ikikik5441.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, kkkkkk5451(), a);
    return a
  };
  ikikik5441.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, kkkkkk5451(), a);
    return a.join("\n")
  };
  ikikik5441.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var mkmkmk5484 = function(aaaaaa5484) {
    ZZZZZZ5129.call(this, aaaaaa5484)
  };
  ObjectCreateSetPrototypeOf(mkmkmk5484, ZZZZZZ5129);
  var nknknk5488 = function(aaaaaa5488) {
    return new mkmkmk5484(aaaaaa5488)
  };
  mkmkmk5484.prototype.Qb = function() {
    return XXXXXX5120(this.h, 1)
  };
  mkmkmk5484.prototype.Mb = function() {
    return MjMjMj5086(this.h, 2)
  };
  mkmkmk5484.prototype.Sa = function() {
    return UUUUUU5082(this.h, 3)
  };
  mkmkmk5484.prototype.Na = function() {
    return UUUUUU5082(this.h, 4)
  };
  var okokok5503 = function() {
      return [{
        name: "text",
        i: 1,
        m: function(a) {
          return a.Qb()
        },
        j: SSSSSS5066
      }, {
        name: "labels",
        i: 2,
        v: function(a) {
          return a.Mb()
        },
        j: SSSSSS5066
      }, {
        name: "start_pos",
        i: 3,
        m: function(a) {
          return a.Sa()
        },
        j: SSSSSS5066
      }, {
        name: "end_pos",
        i: 4,
        m: function(a) {
          return a.Na()
        },
        j: SSSSSS5066
      }, {
        name: "label_infos",
        i: 5,
        D: jkjkjk5445,
        C: lklklk5468,
        v: function(a) {
          return WWWWWW5108(a.h, 5, ikikik5441)
        },
        j: TTTTTT5074
      }]
    },
    pkpkpk5543 = function(aaaaaa5543) {
      return OOOOOO5008(aaaaaa5543, okokok5503(), mkmkmk5484)
    };
  mkmkmk5484.prototype.s = function() {
    var obj = {};
    NNNNNN4995(this, okokok5503(), obj);
    return obj
  };
  mkmkmk5484.prototype.G = function() {
    var arr = [];
    RRRRRR5053(this, okokok5503(), arr);
    return arr.join("\n")
  };
  mkmkmk5484.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var qkqkqk5559 = function(aaaaaa5559) {
    ZZZZZZ5129.call(this, aaaaaa5559)
  };
  ObjectCreateSetPrototypeOf(qkqkqk5559, ZZZZZZ5129);
  var rkrkrk5563 = function(aaaaaa5563) {
    return new qkqkqk5559(aaaaaa5563)
  };
  qkqkqk5559.prototype.Ob = function() {
    return UUUUUU5082(this.h, 2)
  };
  qkqkqk5559.prototype.Jb = function() {
    return !!DjDjDj4935(this.h, 3, false)
  };
  qkqkqk5559.prototype.Db = function() {
    return !!DjDjDj4935(this.h, 4, false)
  };
  qkqkqk5559.prototype.Aa = function() {
    return UUUUUU5082(this.h, 8)
  };
  var sksksk5578 = function() {
      return [{
        name: "word_postproc",
        i: 1,
        m: function(a) {
          return XXXXXX5120(a.h, 1)
        },
        j: SSSSSS5066
      }, {
        name: "score",
        i: 2,
        m: function(a) {
          return a.Ob()
        },
        j: SSSSSS5066
      }, {
        name: "has_preceding_space",
        i: 3,
        m: function(a) {
          return a.Jb()
        },
        j: SSSSSS5066
      }, {
        name: "attach_to_next_token",
        i: 4,
        m: function(a) {
          return a.Db()
        },
        j: SSSSSS5066
      }, {
        name: "backends",
        i: 5,
        v: function(a) {
          return MjMjMj5086(a.h, 5)
        },
        j: SSSSSS5066
      }, {
        name: "word_postproc_segments",
        i: 6,
        D: nknknk5488,
        C: pkpkpk5543,
        v: function(a) {
          return WWWWWW5108(a.h, 6, mkmkmk5484)
        },
        j: TTTTTT5074
      }, {
        name: "backend_infos",
        i: 7,
        D: fkfkfk5399,
        C: hkhkhk5425,
        v: function(a) {
          return WWWWWW5108(a.h, 7, ekekek5395)
        },
        j: TTTTTT5074
      }, {
        name: "gender",
        i: 8,
        m: function(a) {
          return a.Aa()
        },
        j: SSSSSS5066
      }]
    },
    tktktk5641 = function(aaaaaa5641) {
      return OOOOOO5008(aaaaaa5641, sksksk5578(), qkqkqk5559)
    };
  qkqkqk5559.prototype.s = function() {
    var obj = {};
    NNNNNN4995(this, sksksk5578(), obj);
    return obj
  };
  qkqkqk5559.prototype.G = function() {
    var arr = [];
    RRRRRR5053(this, sksksk5578(), arr);
    return arr.join("\n")
  };
  qkqkqk5559.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var ukukuk5657 = function(aaaaaa5657) {
    ZZZZZZ5129.call(this, aaaaaa5657)
  };
  ObjectCreateSetPrototypeOf(ukukuk5657, ZZZZZZ5129);
  var vkvkvk5661 = function(aaaaaa5661) {
    return new ukukuk5657(aaaaaa5661)
  };
  ukukuk5657.prototype.Fb = function() {
    return UUUUUU5082(this.h, 1)
  };
  ukukuk5657.prototype.Hb = function() {
    return UUUUUU5082(this.h, 2)
  };
  var wkwkwk5670 = function() {
      return [{
        name: "begin",
        i: 1,
        m: function(a) {
          return a.Fb()
        },
        j: SSSSSS5066
      }, {
        name: "end",
        i: 2,
        m: function(a) {
          return a.Hb()
        },
        j: SSSSSS5066
      }]
    },
    xkxkxk5687 = function(aaaaaa5687) {
      return OOOOOO5008(aaaaaa5687, wkwkwk5670(), ukukuk5657)
    };
  ukukuk5657.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, wkwkwk5670(), a);
    return a
  };
  ukukuk5657.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, wkwkwk5670(), a);
    return a.join("\n")
  };
  ukukuk5657.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var ykykyk5703 = function(aaaaaa5703) {
    ZZZZZZ5129.call(this, aaaaaa5703)
  };
  ObjectCreateSetPrototypeOf(ykykyk5703, ZZZZZZ5129);
  var zkzkzk5707 = function(aaaaaa5707) {
    return new ykykyk5703(aaaaaa5707)
  };
  ykykyk5703.prototype.Sa = function() {
    return UUUUUU5082(this.h, 6)
  };
  ykykyk5703.prototype.Na = function() {
    return UUUUUU5082(this.h, 7)
  };
  var AkAkAk5716 = function() {
      return [{
        name: "src_phrase",
        i: 1,
        m: function(a) {
          return XXXXXX5120(a.h, 1)
        },
        j: SSSSSS5066
      }, {
        name: "alternative",
        i: 3,
        D: rkrkrk5563,
        C: tktktk5641,
        v: function(a) {
          return WWWWWW5108(a.h, 3, qkqkqk5559)
        },
        j: TTTTTT5074
      }, {
        name: "srcunicodeoffsets",
        i: 4,
        D: vkvkvk5661,
        C: xkxkxk5687,
        v: function(a) {
          return WWWWWW5108(a.h, 4, ukukuk5657)
        },
        j: TTTTTT5074
      }, {
        name: "raw_src_segment",
        i: 5,
        m: function(a) {
          return XXXXXX5120(a.h, 5)
        },
        j: SSSSSS5066
      }, {
        name: "start_pos",
        i: 6,
        m: function(a) {
          return a.Sa()
        },
        j: SSSSSS5066
      }, {
        name: "end_pos",
        i: 7,
        m: function(a) {
          return a.Na()
        },
        j: SSSSSS5066
      }, {
        name: "src_phrase_segments",
        i: 8,
        D: nknknk5488,
        C: pkpkpk5543,
        v: function(a) {
          return WWWWWW5108(a.h, 8, mkmkmk5484)
        },
        j: TTTTTT5074
      }]
    },
    BkBkBk5774 = function(aaaaaa5774) {
      return OOOOOO5008(aaaaaa5774,
        AkAkAk5716(), ykykyk5703)
    };
  ykykyk5703.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, AkAkAk5716(), a);
    return a
  };
  ykykyk5703.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, AkAkAk5716(), a);
    return a.join("\n")
  };
  ykykyk5703.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var CkCkCk5791 = function(aaaaaa5791) {
    ZZZZZZ5129.call(this, aaaaaa5791)
  };
  ObjectCreateSetPrototypeOf(CkCkCk5791, ZZZZZZ5129);
  var DkDkDk5795 = function(aaaaaa5795) {
    return new CkCkCk5791(aaaaaa5795)
  };
  kkkkkkK8 = CkCkCk5791.prototype;
  kkkkkkK8.fb = function() {
    return XXXXXX5120(this.h, 1)
  };
  kkkkkkK8.Jb = function() {
    return !!DjDjDj4935(this.h, 3, false)
  };
  kkkkkkK8.Db = function() {
    return !!DjDjDj4935(this.h, 4, false)
  };
  kkkkkkK8.Gb = function() {
    return UUUUUU5082(this.h, 5)
  };
  kkkkkkK8.Sa = function() {
    return UUUUUU5082(this.h, 6)
  };
  kkkkkkK8.Na = function() {
    return UUUUUU5082(this.h, 7)
  };
  var EkEkEk5817 = function() {
      return [{
        name: "word",
        i: 1,
        m: function(a) {
          return a.fb()
        },
        j: SSSSSS5066
      }, {
        name: "styles",
        i: 2,
        v: function(a) {
          return MjMjMj5086(a.h, 2)
        },
        j: SSSSSS5066
      }, {
        name: "has_preceding_space",
        i: 3,
        m: function(a) {
          return a.Jb()
        },
        j: SSSSSS5066
      }, {
        name: "attach_to_next_token",
        i: 4,
        m: function(a) {
          return a.Db()
        },
        j: SSSSSS5066
      }, {
        name: "confidence",
        i: 5,
        m: function(a) {
          return a.Gb()
        },
        j: SSSSSS5066
      }, {
        name: "start_pos",
        i: 6,
        m: function(a) {
          return a.Sa()
        },
        j: SSSSSS5066
      }, {
        name: "end_pos",
        i: 7,
        m: function(a) {
          return a.Na()
        },
        j: SSSSSS5066
      }, {
        name: "not_from_first_segment",
        i: 8,
        m: function(a) {
          return UUUUUU5082(a.h, 8)
        },
        j: SSSSSS5066
      }]
    },
    FkFkFk5876 = function(aaaaaa5876) {
      return OOOOOO5008(aaaaaa5876, EkEkEk5817(), CkCkCk5791)
    };
  CkCkCk5791.prototype.s = function() {
    var obj = {};
    NNNNNN4995(this, EkEkEk5817(), obj);
    return obj
  };
  CkCkCk5791.prototype.G = function() {
    var arr = [];
    RRRRRR5053(this, EkEkEk5817(), arr);
    return arr.join("\n")
  };
  CkCkCk5791.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var GkGkGk5896 = function(aaaaaa5892) {
    ZZZZZZ5129.call(this, aaaaaa5892)
  };
  ObjectCreateSetPrototypeOf(GkGkGk5896, ZZZZZZ5129);
  GkGkGk5896.prototype.Mb = function() {
    return YYYYYY5124(this.h, 5)
  };
  var HkHkHk5899 = function() {
      return [{
        name: "register",
        i: 1,
        v: function(a) {
          return YYYYYY5124(a.h, 1)
        },
        j: SSSSSS5066
      }, {
        name: "geographic",
        i: 2,
        v: function(a) {
          return YYYYYY5124(a.h, 2)
        },
        j: SSSSSS5066
      }, {
        name: "subject",
        i: 3,
        v: function(a) {
          return YYYYYY5124(a.h, 3)
        },
        j: SSSSSS5066
      }, {
        name: "usage_label",
        i: 4,
        v: function(a) {
          return YYYYYY5124(a.h, 4)
        },
        j: SSSSSS5066
      }, {
        name: "labels",
        i: 5,
        v: function(a) {
          return a.Mb()
        },
        j: SSSSSS5066
      }]
    },
    IkIkIk5937 = function(aaaaaa5937) {
      return OOOOOO5008(aaaaaa5937, HkHkHk5899(), GkGkGk5896)
    };
  GkGkGk5896.prototype.s = function() {
    var obj = {};
    NNNNNN4995(this, HkHkHk5899(), obj);
    return obj
  };
  GkGkGk5896.prototype.G = function() {
    var arr = [];
    RRRRRR5053(this, HkHkHk5899(), arr);
    return arr.join("\n")
  };
  GkGkGk5896.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var JkJkJk5953 = function(aaaaaa5953) {
    ZZZZZZ5129.call(this, aaaaaa5953)
  };
  ObjectCreateSetPrototypeOf(JkJkJk5953, ZZZZZZ5129);
  var KkKkKk5957 = function(aaaaaa5957) {
    return new JkJkJk5953(aaaaaa5957)
  };
  JkJkJk5953.prototype.La = function() {
    return XXXXXX5120(this.h, 2)
  };
  JkJkJk5953.prototype.mc = function() {
    return XXXXXX5120(this.h, 3)
  };
  JkJkJk5953.prototype.Qa = function() {
    return VVVVVV5091(this.h, 4, GkGkGk5896)
  };
  var LkLkLk5969 = function() {
      return [{
        name: "gloss",
        i: 1,
        m: function(a) {
          return XXXXXX5120(a.h, 1)
        },
        j: SSSSSS5066
      }, {
        name: "definition_id",
        i: 2,
        m: function(a) {
          return a.La()
        },
        j: SSSSSS5066
      }, {
        name: "example",
        i: 3,
        m: function(a) {
          return a.mc()
        },
        j: SSSSSS5066
      }, {
        name: "label_info",
        i: 4,
        D: GkGkGk5896,
        C: IkIkIk5937,
        m: function(a) {
          return a.Qa()
        },
        j: TTTTTT5074
      }]
    },
    MkMkMk6002 = function(aaaaaa6002) {
      return OOOOOO5008(aaaaaa6002, LkLkLk5969(), JkJkJk5953)
    };
  JkJkJk5953.prototype.s = function() {
    var obj = {};
    NNNNNN4995(this, LkLkLk5969(), obj);
    return obj
  };
  JkJkJk5953.prototype.G = function() {
    var arr = [];
    RRRRRR5053(this, LkLkLk5969(), arr);
    return arr.join("\n")
  };
  JkJkJk5953.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var NkNkNk6018 = function(aaaaaa6018) {
    ZZZZZZ5129.call(this, aaaaaa6018)
  };
  ObjectCreateSetPrototypeOf(NkNkNk6018, ZZZZZZ5129);
  var OkOkOk6022 = function(aaaaaa6022) {
    return new NkNkNk6018(aaaaaa6022)
  };
  NkNkNk6018.prototype.Ra = function() {
    return XXXXXX5120(this.h, 1)
  };
  NkNkNk6018.prototype.Oa = function() {
    return WWWWWW5108(this.h, 2, JkJkJk5953)
  };
  NkNkNk6018.prototype.Ka = function() {
    return XXXXXX5120(this.h, 3)
  };
  NkNkNk6018.prototype.Nb = function() {
    return UUUUUU5082(this.h, 4)
  };
  var PkPkPk6037 = function() {
      return [{
        name: "pos",
        i: 1,
        m: function(a) {
          return a.Ra()
        },
        j: SSSSSS5066
      }, {
        name: "entry",
        i: 2,
        D: KkKkKk5957,
        C: MkMkMk6002,
        v: function(a) {
          return a.Oa()
        },
        j: TTTTTT5074
      }, {
        name: "base_form",
        i: 3,
        m: function(a) {
          return a.Ka()
        },
        j: SSSSSS5066
      }, {
        name: "pos_enum",
        i: 4,
        m: function(a) {
          return a.Nb()
        },
        j: SSSSSS5066
      }]
    },
    QkQkQk6070 = function(aaaaaa6070) {
      return OOOOOO5008(aaaaaa6070, PkPkPk6037(), NkNkNk6018)
    };
  NkNkNk6018.prototype.s = function() {
    var obj = {};
    NNNNNN4995(this, PkPkPk6037(), obj);
    return obj
  };
  NkNkNk6018.prototype.G = function() {
    var arr = [];
    RRRRRR5053(this, PkPkPk6037(), arr);
    return arr.join("\n")
  };
  NkNkNk6018.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var RkRkRk6086 = function(aaaaaa6086, bbbbbb6086, cccccc6086) {
    ZZZZZZ5129.call(this, cccccc6086, aaaaaa6086);
    this.containerId = bbbbbb6086
  };
  ObjectCreateSetPrototypeOf(RkRkRk6086, ZZZZZZ5129);
  var SkSkSk6091 = function(aaaaaa6091) {
    RkRkRk6086.call(this, 7, "76p9JA", aaaaaa6091)
  };
  ObjectCreateSetPrototypeOf(SkSkSk6091, RkRkRk6086);
  var TkTkTk6095 = function(aaaaaa6095) {
    return new SkSkSk6091(aaaaaa6095)
  };
  SkSkSk6091.prototype.fb = function() {
    return XXXXXX5120(this.h, 1)
  };
  SkSkSk6091.prototype.Ob = function() {
    return +DjDjDj4935(this.h, 4, 0)
  };
  SkSkSk6091.prototype.Aa = function() {
    return UUUUUU5082(this.h, 6)
  };
  var UkUkUk6107 = function() {
      return [{
        name: "word",
        i: 1,
        m: function(a) {
          return a.fb()
        },
        j: SSSSSS5066
      }, {
        name: "reverse_translation",
        i: 2,
        v: function(a) {
          return YYYYYY5124(a.h, 2)
        },
        j: SSSSSS5066
      }, {
        name: "synset_id",
        i: 3,
        v: function(a) {
          return MjMjMj5086(a.h, 3)
        },
        j: SSSSSS5066
      }, {
        name: "score",
        i: 4,
        m: function(a) {
          return a.Ob()
        },
        j: SSSSSS5066
      }, {
        name: "previous_word",
        i: 5,
        m: function(a) {
          return XXXXXX5120(a.h, 5)
        },
        j: SSSSSS5066
      }, {
        name: "gender",
        i: 6,
        m: function(a) {
          return a.Aa()
        },
        j: SSSSSS5066
      }]
    },
    VkVkVk6152 = function(aaaaaa6152) {
      return OOOOOO5008(aaaaaa6152, UkUkUk6107(), SkSkSk6091)
    };
  SkSkSk6091.prototype.s = function() {
    var obj = {};
    NNNNNN4995(this, UkUkUk6107(), obj);
    return obj
  };
  SkSkSk6091.prototype.G = function() {
    var arr = [];
    RRRRRR5053(this, UkUkUk6107(), arr);
    return arr.join("\n")
  };
  SkSkSk6091.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var WkWkWk6168 = function(aaaaaa6168) {
    ZZZZZZ5129.call(this, aaaaaa6168)
  };
  ObjectCreateSetPrototypeOf(WkWkWk6168, ZZZZZZ5129);
  var XkXkXk6172 = function(aaaaaa6172) {
    return new WkWkWk6168(aaaaaa6172)
  };
  WkWkWk6168.prototype.Ra = function() {
    return XXXXXX5120(this.h, 1)
  };
  WkWkWk6168.prototype.Oa = function() {
    return WWWWWW5108(this.h, 3, SkSkSk6091)
  };
  WkWkWk6168.prototype.Ka = function() {
    return XXXXXX5120(this.h, 4)
  };
  WkWkWk6168.prototype.Nb = function() {
    return UUUUUU5082(this.h, 5)
  };
  var YkYkYk6187 = function() {
      return [{
        name: "pos",
        i: 1,
        m: function(a) {
          return a.Ra()
        },
        j: SSSSSS5066
      }, {
        name: "terms",
        i: 2,
        v: function(a) {
          return YYYYYY5124(a.h, 2)
        },
        j: SSSSSS5066
      }, {
        name: "entry",
        i: 3,
        D: TkTkTk6095,
        C: VkVkVk6152,
        v: function(a) {
          return a.Oa()
        },
        j: TTTTTT5074
      }, {
        name: "base_form",
        i: 4,
        m: function(a) {
          return a.Ka()
        },
        j: SSSSSS5066
      }, {
        name: "pos_enum",
        i: 5,
        m: function(a) {
          return a.Nb()
        },
        j: SSSSSS5066
      }]
    },
    ZkZkZk6227 = function(aaaaaa6227) {
      return OOOOOO5008(aaaaaa6227, YkYkYk6187(), WkWkWk6168)
    };
  WkWkWk6168.prototype.s = function() {
    var obj = {};
    NNNNNN4995(this, YkYkYk6187(), obj);
    return obj
  };
  WkWkWk6168.prototype.G = function() {
    var arr = [];
    RRRRRR5053(this, YkYkYk6187(), arr);
    return arr.join("\n")
  };
  WkWkWk6168.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var $k$k$k6243 = function(aaaaaa6243) {
    ZZZZZZ5129.call(this, aaaaaa6243)
  };
  ObjectCreateSetPrototypeOf($k$k$k6243, ZZZZZZ5129);
  $k$k$k6243.prototype.nc = function() {
    return XXXXXX5120(this.h, 1)
  };
  var alalal6250 = function() {
      return [{
        name: "romanization",
        i: 1,
        m: function(a) {
          return a.nc()
        },
        j: SSSSSS5066
      }]
    },
    blblbl6260 = function(aaaaaa6260) {
      return OOOOOO5008(aaaaaa6260, alalal6250(), $k$k$k6243)
    };
  $k$k$k6243.prototype.s = function() {
    var obj = {};
    NNNNNN4995(this, alalal6250(), obj);
    return obj
  };
  $k$k$k6243.prototype.G = function() {
    var arr = [];
    RRRRRR5053(this, alalal6250(), arr);
    return arr.join("\n")
  };
  $k$k$k6243.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var cl = function(a) {
    ZZZZZZ5129.call(this, a)
  };
  ObjectCreateSetPrototypeOf(cl, ZZZZZZ5129);
  var dl = function(a) {
      return new cl(a)
    },
    el = function() {
      return [{
        name: "source_span_index",
        i: 1,
        m: function(a) {
          return UUUUUU5082(a.h, 1)
        },
        j: SSSSSS5066
      }, {
        name: "target_span_index",
        i: 2,
        m: function(a) {
          return UUUUUU5082(a.h, 2)
        },
        j: SSSSSS5066
      }, {
        name: "direction",
        i: 3,
        m: function(a) {
          return UUUUUU5082(a.h, 3)
        },
        j: SSSSSS5066
      }]
    },
    fl = function(a) {
      return OOOOOO5008(a, el(), cl)
    };
  cl.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, el(), a);
    return a
  };
  cl.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, el(), a);
    return a.join("\n")
  };
  cl.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var gl = function(a) {
    ZZZZZZ5129.call(this, a)
  };
  ObjectCreateSetPrototypeOf(gl, ZZZZZZ5129);
  var hl = function(a) {
    return new gl(a)
  };
  gl.prototype.Fb = function() {
    return UUUUUU5082(this.h, 1)
  };
  gl.prototype.Hb = function() {
    return UUUUUU5082(this.h, 2)
  };
  var il = function() {
      return [{
        name: "begin",
        i: 1,
        m: function(a) {
          return a.Fb()
        },
        j: SSSSSS5066
      }, {
        name: "end",
        i: 2,
        m: function(a) {
          return a.Hb()
        },
        j: SSSSSS5066
      }]
    },
    jl = function(a) {
      return OOOOOO5008(a, il(), gl)
    };
  gl.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, il(), a);
    return a
  };
  gl.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, il(), a);
    return a.join("\n")
  };
  gl.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var kl = function(a) {
    ZZZZZZ5129.call(this, a)
  };
  ObjectCreateSetPrototypeOf(kl, ZZZZZZ5129);
  kl.prototype.cb = function() {
    return Oj(this.h, 3, cl)
  };
  var ll = function() {
      return [{
        name: "source_span",
        i: 1,
        D: hl,
        C: jl,
        v: function(a) {
          return WWWWWW5108(a.h, 1, gl)
        },
        j: TTTTTT5074
      }, {
        name: "target_span",
        i: 2,
        D: hl,
        C: jl,
        v: function(a) {
          return WWWWWW5108(a.h, 2, gl)
        },
        j: TTTTTT5074
      }, {
        name: "link",
        i: 3,
        D: dl,
        C: fl,
        v: function(a) {
          return WWWWWW5108(a.h, 3, cl)
        },
        j: TTTTTT5074
      }]
    },
    ml = function(a) {
      return OOOOOO5008(a, ll(), kl)
    };
  kl.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, ll(), a);
    return a
  };
  kl.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, ll(), a);
    return a.join("\n")
  };
  kl.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var nl = function(a) {
    ZZZZZZ5129.call(this, a)
  };
  ObjectCreateSetPrototypeOf(nl, ZZZZZZ5129);
  var ol = function(a) {
    return new nl(a)
  };
  nl.prototype.Lb = function() {
    return XXXXXX5120(this.h, 2)
  };
  var pl = function() {
      return [{
        name: "model_path",
        i: 1,
        m: function(a) {
          return XXXXXX5120(a.h, 1)
        },
        j: SSSSSS5066
      }, {
        name: "label",
        i: 2,
        m: function(a) {
          return a.Lb()
        },
        j: SSSSSS5066
      }, {
        name: "prefer_efficient_model",
        i: 8,
        m: function(a) {
          return !!DjDjDj4935(a.h, 8, false)
        },
        j: SSSSSS5066
      }, {
        name: "model_namespace",
        i: 9,
        m: function(a) {
          return XXXXXX5120(a.h, 9)
        },
        j: SSSSSS5066
      }, {
        name: "vertex_ai_endpoint",
        i: 10,
        v: function(a) {
          return YYYYYY5124(a.h, 10)
        },
        j: SSSSSS5066
      }]
    },
    ql = function(a) {
      return OOOOOO5008(a, pl(), nl)
    };
  nl.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, pl(), a);
    return a
  };
  nl.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, pl(), a);
    return a.join("\n")
  };
  nl.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var rl = function(a) {
    ZZZZZZ5129.call(this, a)
  };
  ObjectCreateSetPrototypeOf(rl, ZZZZZZ5129);
  var sl = function() {
      return [{
        name: "checkpoint_md5",
        i: 1,
        m: function(a) {
          return XXXXXX5120(a.h, 1)
        },
        j: SSSSSS5066
      }, {
        name: "launch_doc",
        i: 2,
        m: function(a) {
          return XXXXXX5120(a.h, 2)
        },
        j: SSSSSS5066
      }, {
        name: "launch_approvals",
        i: 3,
        v: function(a) {
          return YYYYYY5124(a.h, 3)
        },
        j: SSSSSS5066
      }]
    },
    tl = function(a) {
      return OOOOOO5008(a, sl(), rl)
    };
  rl.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, sl(), a);
    return a
  };
  rl.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, sl(), a);
    return a.join("\n")
  };
  rl.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var ul = function(a) {
    ZZZZZZ5129.call(this, a)
  };
  ObjectCreateSetPrototypeOf(ul, ZZZZZZ5129);
  var vl = function(a) {
    return new ul(a)
  };
  ul.prototype.Ib = function() {
    return MjMjMj5086(this.h, 3)
  };
  var wl = function() {
      return [{
        name: "model_tracking",
        i: 1,
        D: rl,
        C: tl,
        m: function(a) {
          return VVVVVV5091(a.h, 1, rl)
        },
        j: TTTTTT5074
      }, {
        name: "has_untranslatable_chunk",
        i: 2,
        m: function(a) {
          return !!DjDjDj4935(a.h, 2, false)
        },
        j: SSSSSS5066
      }, {
        name: "features_applied",
        i: 3,
        v: function(a) {
          return a.Ib()
        },
        j: SSSSSS5066
      }]
    },
    xl = function(a) {
      return OOOOOO5008(a, wl(), ul)
    };
  ul.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, wl(), a);
    return a
  };
  ul.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, wl(), a);
    return a.join("\n")
  };
  ul.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var yl = function(a) {
    ZZZZZZ5129.call(this, a)
  };
  ObjectCreateSetPrototypeOf(yl, ZZZZZZ5129);
  var zl = function(a) {
    return new yl(a)
  };
  yl.prototype.Eb = function() {
    return UUUUUU5082(this.h, 5)
  };
  var Al = function() {
      return [{
        name: "trans",
        i: 1,
        m: function(a) {
          return XXXXXX5120(a.h, 1)
        },
        j: SSSSSS5066
      }, {
        name: "orig",
        i: 2,
        m: function(a) {
          return XXXXXX5120(a.h, 2)
        },
        j: SSSSSS5066
      }, {
        name: "translit",
        i: 3,
        m: function(a) {
          return XXXXXX5120(a.h, 3)
        },
        j: SSSSSS5066
      }, {
        name: "src_translit",
        i: 4,
        m: function(a) {
          return XXXXXX5120(a.h, 4)
        },
        j: SSSSSS5066
      }, {
        name: "backend",
        i: 5,
        m: function(a) {
          return a.Eb()
        },
        j: SSSSSS5066
      }, {
        name: "model",
        i: 6,
        v: function(a) {
          return YYYYYY5124(a.h, 6)
        },
        j: SSSSSS5066
      }, {
        name: "word_alignment",
        i: 7,
        D: kl,
        C: ml,
        m: function(a) {
          return VVVVVV5091(a.h, 7, kl)
        },
        j: TTTTTT5074
      }, {
        name: "model_specification",
        i: 8,
        D: ol,
        C: ql,
        v: function(a) {
          return WWWWWW5108(a.h,
            8, nl)
        },
        j: TTTTTT5074
      }, {
        name: "translation_engine_debug_info",
        i: 9,
        D: vl,
        C: xl,
        v: function(a) {
          return WWWWWW5108(a.h, 9, ul)
        },
        j: TTTTTT5074
      }]
    },
    Bl = function(a) {
      return OOOOOO5008(a, Al(), yl)
    };
  yl.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, Al(), a);
    return a
  };
  yl.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, Al(), a);
    return a.join("\n")
  };
  yl.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var Cl = function(a) {
    ZZZZZZ5129.call(this, a)
  };
  ObjectCreateSetPrototypeOf(Cl, ZZZZZZ5129);
  var Dl = function(a) {
    return new Cl(a)
  };
  Cl.prototype.Aa = function() {
    return UUUUUU5082(this.h, 1)
  };
  Cl.prototype.Rb = function() {
    return XXXXXX5120(this.h, 2)
  };
  Cl.prototype.Pb = function() {
    return WWWWWW5108(this.h, 3, yl)
  };
  Cl.prototype.nc = function() {
    return NjNjNj5111(this.h, 4, $k$k$k6243) || new $k$k$k6243
  };
  var El = function() {
      return [{
        name: "gender",
        i: 1,
        m: function(a) {
          return a.Aa()
        },
        j: SSSSSS5066
      }, {
        name: "translation",
        i: 2,
        m: function(a) {
          return a.Rb()
        },
        j: SSSSSS5066
      }, {
        name: "sentences",
        i: 3,
        D: zl,
        C: Bl,
        v: function(a) {
          return a.Pb()
        },
        j: TTTTTT5074
      }, {
        name: "romanization",
        i: 4,
        D: $k$k$k6243,
        C: blblbl6260,
        m: function(a) {
          return VVVVVV5091(a.h, 4, $k$k$k6243)
        },
        j: TTTTTT5074
      }]
    },
    Fl = function(a) {
      return OOOOOO5008(a, El(), Cl)
    };
  Cl.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, El(), a);
    return a
  };
  Cl.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, El(), a);
    return a.join("\n")
  };
  Cl.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var Gl = function(a) {
    ZZZZZZ5129.call(this, a)
  };
  ObjectCreateSetPrototypeOf(Gl, ZZZZZZ5129);
  Gl.prototype.Ba = function() {
    return UUUUUU5082(this.h, 2)
  };
  var Hl = function() {
      return [{
        name: "gendered_translations",
        i: 1,
        D: Dl,
        C: Fl,
        v: function(a) {
          return WWWWWW5108(a.h, 1, Cl)
        },
        j: TTTTTT5074
      }, {
        name: "status",
        i: 2,
        m: function(a) {
          return a.Ba()
        },
        j: SSSSSS5066
      }]
    },
    Il = function(a) {
      return OOOOOO5008(a, Hl(), Gl)
    };
  Gl.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, Hl(), a);
    return a
  };
  Gl.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, Hl(), a);
    return a.join("\n")
  };
  Gl.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var Jl = function(a) {
    ZZZZZZ5129.call(this, a)
  };
  ObjectCreateSetPrototypeOf(Jl, ZZZZZZ5129);
  Jl.prototype.Aa = function() {
    return UUUUUU5082(this.h, 5)
  };
  var Kl = function() {
      return [{
          name: "animacy",
          i: 1,
          m: function(a) {
            return UUUUUU5082(a.h, 1, 1)
          },
          j: SSSSSS5066
        }, {
          name: "inflection_aspect",
          i: 2,
          m: function(a) {
            return UUUUUU5082(a.h, 2, 1)
          },
          j: SSSSSS5066
        }, {
          name: "grammatical_case",
          i: 3,
          m: function(a) {
            return UUUUUU5082(a.h, 3)
          },
          j: SSSSSS5066
        }, {
          name: "degree",
          i: 4,
          m: function(a) {
            return UUUUUU5082(a.h, 4, 1)
          },
          j: SSSSSS5066
        }, {
          name: "gender",
          i: 5,
          m: function(a) {
            return a.Aa()
          },
          j: SSSSSS5066
        }, {
          name: "mood",
          i: 6,
          m: function(a) {
            return UUUUUU5082(a.h, 6, 1)
          },
          j: SSSSSS5066
        }, {
          name: "nonfinite_form",
          i: 7,
          m: function(a) {
            return UUUUUU5082(a.h, 7, 1)
          },
          j: SSSSSS5066
        }, {
          name: "number",
          i: 8,
          m: function(a) {
            return UUUUUU5082(a.h, 8, 1)
          },
          j: SSSSSS5066
        },
        {
          name: "person",
          i: 9,
          m: function(a) {
            return UUUUUU5082(a.h, 9)
          },
          j: SSSSSS5066
        }, {
          name: "polarity",
          i: 10,
          m: function(a) {
            return UUUUUU5082(a.h, 10, 1)
          },
          j: SSSSSS5066
        }, {
          name: "referent",
          i: 11,
          m: function(a) {
            return UUUUUU5082(a.h, 11, 1)
          },
          j: SSSSSS5066
        }, {
          name: "strength",
          i: 12,
          m: function(a) {
            return UUUUUU5082(a.h, 12, 1)
          },
          j: SSSSSS5066
        }, {
          name: "tense",
          i: 13,
          m: function(a) {
            return UUUUUU5082(a.h, 13, 1)
          },
          j: SSSSSS5066
        }, {
          name: "imperfect_suffix",
          i: 14,
          m: function(a) {
            return UUUUUU5082(a.h, 14, 1)
          },
          j: SSSSSS5066
        }, {
          name: "voice",
          i: 15,
          m: function(a) {
            return UUUUUU5082(a.h, 15, 1)
          },
          j: SSSSSS5066
        }, {
          name: "infinitive_number",
          i: 16,
          m: function(a) {
            return UUUUUU5082(a.h, 16, 1)
          },
          j: SSSSSS5066
        }, {
          name: "precedes",
          i: 17,
          m: function(a) {
            return UUUUUU5082(a.h, 17, 1)
          },
          j: SSSSSS5066
        }
      ]
    },
    Ll = function(a) {
      return OOOOOO5008(a, Kl(), Jl)
    };
  Jl.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, Kl(), a);
    return a
  };
  Jl.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, Kl(), a);
    return a.join("\n")
  };
  Jl.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var Ml = function(a) {
    ZZZZZZ5129.call(this, a)
  };
  ObjectCreateSetPrototypeOf(Ml, ZZZZZZ5129);
  var Nl = function(a) {
      return new Ml(a)
    },
    Ol = function() {
      return [{
        name: "written_form",
        i: 1,
        m: function(a) {
          return XXXXXX5120(a.h, 1)
        },
        j: SSSSSS5066
      }, {
        name: "features",
        i: 2,
        D: Jl,
        C: Ll,
        m: function(a) {
          return VVVVVV5091(a.h, 2, Jl)
        },
        j: TTTTTT5074
      }]
    },
    Pl = function(a) {
      return OOOOOO5008(a, Ol(), Ml)
    };
  Ml.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, Ol(), a);
    return a
  };
  Ml.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, Ol(), a);
    return a.join("\n")
  };
  Ml.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var Ql = function(a) {
    ZZZZZZ5129.call(this, a)
  };
  ObjectCreateSetPrototypeOf(Ql, ZZZZZZ5129);
  var Rl = function(a) {
    return new Ql(a)
  };
  Ql.prototype.getTitle = function() {
    return XXXXXX5120(this.h, 1)
  };
  Ql.prototype.setTitle = function(a) {
    SetTitleAndCheckSymbolPivotField(this.h, 1, a)
  };
  Ql.prototype.Ma = function() {
    return XXXXXX5120(this.h, 2)
  };
  var Sl = function() {
      return [{
        name: "title",
        i: 1,
        m: function(a) {
          return a.getTitle()
        },
        j: SSSSSS5066
      }, {
        name: "description",
        i: 2,
        m: function(a) {
          return a.Ma()
        },
        j: SSSSSS5066
      }, {
        name: "image_url",
        i: 3,
        m: function(a) {
          return XXXXXX5120(a.h, 3)
        },
        j: SSSSSS5066
      }, {
        name: "image_ref_url",
        i: 4,
        m: function(a) {
          return XXXXXX5120(a.h, 4)
        },
        j: SSSSSS5066
      }]
    },
    Tl = function(a) {
      return OOOOOO5008(a, Sl(), Ql)
    };
  Ql.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, Sl(), a);
    return a
  };
  Ql.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, Sl(), a);
    return a.join("\n")
  };
  Ql.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var Ul = function(a) {
    ZZZZZZ5129.call(this, a)
  };
  ObjectCreateSetPrototypeOf(Ul, ZZZZZZ5129);
  var Vl = function() {
      return [{
        name: "srclangs",
        i: 1,
        v: function(a) {
          return YYYYYY5124(a.h, 1)
        },
        j: SSSSSS5066
      }, {
        name: "detected_target",
        i: 2,
        m: function(a) {
          return XXXXXX5120(a.h, 2)
        },
        j: SSSSSS5066
      }, {
        name: "srclangs_confidences",
        i: 3,
        v: function(a) {
          a = CjCjCj4927(a.h, 3);
          a instanceof A_4895 && ThrowAssertionErrorFailure("Unexpected kind of lazy reader for a JS API storage field.");
          if (a && !(jjjjjj4855(a) & 1)) {
            for (var b = a.length, c = 0; c < b; c++) {
              var d = c,
                e = a[c];
              AssertAssertion("number" === typeof e || "string" === typeof e);
              a[d] = +e
            }
            ijijij4855(a, 1)
          }
          return JjJjJj4970(a || freezeObj)
        },
        j: SSSSSS5066
      }, {
        name: "extended_srclangs",
        i: 4,
        v: function(a) {
          return YYYYYY5124(a.h, 4)
        },
        j: SSSSSS5066
      }]
    },
    Wl = function(a) {
      return OOOOOO5008(a, Vl(), Ul)
    };
  Ul.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, Vl(), a);
    return a
  };
  Ul.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, Vl(), a);
    return a.join("\n")
  };
  Ul.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var Xl = function(a) {
    ZZZZZZ5129.call(this, a)
  };
  ObjectCreateSetPrototypeOf(Xl, ZZZZZZ5129);
  Xl.prototype.fb = function() {
    var a = LjLjLj4987(this.h, 1);
    return AssertString(a)
  };
  var Yl = function() {
      return [{
        name: "word",
        i: 1,
        v: function(a) {
          return YYYYYY5124(a.h, 1)
        },
        j: SSSSSS5066
      }]
    },
    Zl = function(a) {
      return OOOOOO5008(a, Yl(), Xl)
    };
  Xl.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, Yl(), a);
    return a
  };
  Xl.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, Yl(), a);
    return a.join("\n")
  };
  Xl.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var $l = function(a) {
    ZZZZZZ5129.call(this, a)
  };
  ObjectCreateSetPrototypeOf($l, ZZZZZZ5129);
  var am = function() {
      return [{
        name: "spell_html_res",
        i: 1,
        m: function(a) {
          return XXXXXX5120(a.h, 1)
        },
        j: SSSSSS5066
      }, {
        name: "spell_res",
        i: 2,
        m: function(a) {
          return XXXXXX5120(a.h, 2)
        },
        j: SSSSSS5066
      }, {
        name: "correction_type",
        i: 3,
        v: function(a) {
          return MjMjMj5086(a.h, 3)
        },
        j: SSSSSS5066
      }, {
        name: "correction_translation",
        i: 4,
        m: function(a) {
          return XXXXXX5120(a.h, 4)
        },
        j: SSSSSS5066
      }, {
        name: "related",
        i: 5,
        m: function(a) {
          return !!DjDjDj4935(a.h, 5, false)
        },
        j: SSSSSS5066
      }, {
        name: "confident",
        i: 6,
        m: function(a) {
          return !!DjDjDj4935(a.h, 6, false)
        },
        j: SSSSSS5066
      }]
    },
    bm = function(a) {
      return OOOOOO5008(a, am(), $l)
    };
  $l.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, am(), a);
    return a
  };
  $l.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, am(), a);
    return a.join("\n")
  };
  $l.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var cm = function(a) {
    ZZZZZZ5129.call(this, a)
  };
  ObjectCreateSetPrototypeOf(cm, ZZZZZZ5129);
  var dm = function(a) {
    return new cm(a)
  };
  cm.prototype.La = function() {
    return XXXXXX5120(this.h, 2)
  };
  cm.prototype.Qa = function() {
    return VVVVVV5091(this.h, 3, GkGkGk5896)
  };
  var em = function() {
      return [{
        name: "synonym",
        i: 1,
        v: function(a) {
          return YYYYYY5124(a.h, 1)
        },
        j: SSSSSS5066
      }, {
        name: "definition_id",
        i: 2,
        m: function(a) {
          return a.La()
        },
        j: SSSSSS5066
      }, {
        name: "label_info",
        i: 3,
        D: GkGkGk5896,
        C: IkIkIk5937,
        m: function(a) {
          return a.Qa()
        },
        j: TTTTTT5074
      }]
    },
    fm = function(a) {
      return OOOOOO5008(a, em(), cm)
    };
  cm.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, em(), a);
    return a
  };
  cm.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, em(), a);
    return a.join("\n")
  };
  cm.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var gm = function(a) {
    ZZZZZZ5129.call(this, a)
  };
  ObjectCreateSetPrototypeOf(gm, ZZZZZZ5129);
  var hm = function(a) {
    return new gm(a)
  };
  gm.prototype.Ra = function() {
    return XXXXXX5120(this.h, 1)
  };
  gm.prototype.Oa = function() {
    return WWWWWW5108(this.h, 2, cm)
  };
  gm.prototype.Ka = function() {
    return XXXXXX5120(this.h, 3)
  };
  var im = function() {
      return [{
        name: "pos",
        i: 1,
        m: function(a) {
          return a.Ra()
        },
        j: SSSSSS5066
      }, {
        name: "entry",
        i: 2,
        D: dm,
        C: fm,
        v: function(a) {
          return a.Oa()
        },
        j: TTTTTT5074
      }, {
        name: "base_form",
        i: 3,
        m: function(a) {
          return a.Ka()
        },
        j: SSSSSS5066
      }]
    },
    jm = function(a) {
      return OOOOOO5008(a, im(), gm)
    };
  gm.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, im(), a);
    return a
  };
  gm.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, im(), a);
    return a.join("\n")
  };
  gm.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var km = function(a) {
    ZZZZZZ5129.call(this, a)
  };
  ObjectCreateSetPrototypeOf(km, ZZZZZZ5129);
  var lm = function(a) {
    return new km(a)
  };
  kkkkkkK8 = km.prototype;
  kkkkkkK8.Qb = function() {
    return XXXXXX5120(this.h, 1)
  };
  kkkkkkK8.cb = function() {
    return XXXXXX5120(this.h, 3)
  };
  kkkkkkK8.Rb = function() {
    return XXXXXX5120(this.h, 4)
  };
  kkkkkkK8.La = function() {
    return XXXXXX5120(this.h, 6)
  };
  kkkkkkK8.Qa = function() {
    return VVVVVV5091(this.h, 7, GkGkGk5896)
  };
  var mm = function() {
      return [{
        name: "text",
        i: 1,
        m: function(a) {
          return a.Qb()
        },
        j: SSSSSS5066
      }, {
        name: "source",
        i: 2,
        m: function(a) {
          return XXXXXX5120(a.h, 2)
        },
        j: SSSSSS5066
      }, {
        name: "link",
        i: 3,
        m: function(a) {
          return a.cb()
        },
        j: SSSSSS5066
      }, {
        name: "translation",
        i: 4,
        m: function(a) {
          return a.Rb()
        },
        j: SSSSSS5066
      }, {
        name: "source_type",
        i: 5,
        m: function(a) {
          return UUUUUU5082(a.h, 5, 1)
        },
        j: SSSSSS5066
      }, {
        name: "definition_id",
        i: 6,
        m: function(a) {
          return a.La()
        },
        j: SSSSSS5066
      }, {
        name: "label_info",
        i: 7,
        D: GkGkGk5896,
        C: IkIkIk5937,
        m: function(a) {
          return a.Qa()
        },
        j: TTTTTT5074
      }]
    },
    nm = function(a) {
      return OOOOOO5008(a, mm(), km)
    };
  km.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, mm(), a);
    return a
  };
  km.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, mm(), a);
    return a.join("\n")
  };
  km.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var om = function(a) {
    ZZZZZZ5129.call(this, a)
  };
  ObjectCreateSetPrototypeOf(om, ZZZZZZ5129);
  om.prototype.mc = function() {
    return Oj(this.h, 1, km)
  };
  var pm = function() {
      return [{
        name: "example",
        i: 1,
        D: lm,
        C: nm,
        v: function(a) {
          return WWWWWW5108(a.h, 1, km)
        },
        j: TTTTTT5074
      }]
    },
    qm = function(a) {
      return OOOOOO5008(a, pm(), om)
    };
  om.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, pm(), a);
    return a
  };
  om.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, pm(), a);
    return a.join("\n")
  };
  om.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var rmrmrm7450 = function(aaaaaa7450) {
    ZZZZZZ5129.call(this, aaaaaa7450)
  };
  ObjectCreateSetPrototypeOf(rmrmrm7450, ZZZZZZ5129);
  rmrmrm7450.prototype.Pb = function() {
    return WWWWWW5108(this.h, 1, yl)
  };
  rmrmrm7450.prototype.Gb = function() {
    return +DjDjDj4935(this.h, 7, 0)
  };
  var sm = function() {
    return [{
      name: "sentences",
      i: 1,
      D: zl,
      C: Bl,
      v: function(a) {
        return a.Pb()
      },
      j: TTTTTT5074
    }, {
      name: "dict",
      i: 2,
      D: XkXkXk6172,
      C: ZkZkZk6227,
      v: function(a) {
        return WWWWWW5108(a.h, 2, WkWkWk6168)
      },
      j: TTTTTT5074
    }, {
      name: "src",
      i: 3,
      m: function(a) {
        return XXXXXX5120(a.h, 3)
      },
      j: SSSSSS5066
    }, {
      name: "err",
      i: 4,
      m: function(a) {
        return XXXXXX5120(a.h, 4)
      },
      j: SSSSSS5066
    }, {
      name: "styled_words",
      i: 5,
      D: DkDkDk5795,
      C: FkFkFk5876,
      v: function(a) {
        return WWWWWW5108(a.h, 5, CkCkCk5791)
      },
      j: TTTTTT5074
    }, {
      name: "alternative_translations",
      i: 6,
      D: zkzkzk5707,
      C: BkBkBk5774,
      v: function(a) {
        return WWWWWW5108(a.h, 6, ykykyk5703)
      },
      j: TTTTTT5074
    }, {
      name: "confidence",
      i: 7,
      m: function(a) {
        return a.Gb()
      },
      j: SSSSSS5066
    }, {
      name: "spell",
      i: 8,
      D: $l,
      C: bm,
      m: function(a) {
        return VVVVVV5091(a.h, 8, $l)
      },
      j: TTTTTT5074
    }, {
      name: "ld_result",
      i: 9,
      D: Ul,
      C: Wl,
      m: function(a) {
        return VVVVVV5091(a.h, 9, Ul)
      },
      j: TTTTTT5074
    }, {
      name: "server_time",
      i: 10,
      m: function(a) {
        return UUUUUU5082(a.h, 10)
      },
      j: SSSSSS5066
    }, {
      name: "autocorrection",
      i: 11,
      m: function(a) {
        return !!DjDjDj4935(a.h, 11, false)
      },
      j: SSSSSS5066
    }, {
      name: "synsets",
      i: 12,
      D: hm,
      C: jm,
      v: function(a) {
        return WWWWWW5108(a.h, 12, gm)
      },
      j: TTTTTT5074
    }, {
      name: "definitions",
      i: 13,
      D: OkOkOk6022,
      C: QkQkQk6070,
      v: function(a) {
        return WWWWWW5108(a.h, 13, NkNkNk6018)
      },
      j: TTTTTT5074
    }, {
      name: "examples",
      i: 14,
      D: om,
      C: qm,
      m: function(a) {
        return VVVVVV5091(a.h, 14, om)
      },
      j: TTTTTT5074
    }, {
      name: "related_words",
      i: 15,
      D: Xl,
      C: Zl,
      m: function(a) {
        return VVVVVV5091(a.h, 15, Xl)
      },
      j: TTTTTT5074
    }, {
      name: "knowledge_results",
      i: 16,
      D: Rl,
      C: Tl,
      v: function(a) {
        return WWWWWW5108(a.h, 16, Ql)
      },
      j: TTTTTT5074
    }, {
      name: "query_inflections",
      i: 17,
      D: Nl,
      C: Pl,
      v: function(a) {
        return WWWWWW5108(a.h, 17, Ml)
      },
      j: TTTTTT5074
    }, {
      name: "target_inflections",
      i: 18,
      D: Nl,
      C: Pl,
      v: function(a) {
        return WWWWWW5108(a.h, 18, Ml)
      },
      j: TTTTTT5074
    }, {
      name: "gendered_translation_result",
      i: 19,
      D: Gl,
      C: Il,
      m: function(a) {
        return VVVVVV5091(a.h, 19, Gl)
      },
      j: TTTTTT5074
    }, {
      name: "sos_alert",
      i: 20,
      D: bkbkbk5340,
      C: dkdkdk5379,
      m: function(a) {
        return VVVVVV5091(a.h, 20, bkbkbk5340)
      },
      j: TTTTTT5074
    }, {
      name: "covid_19_alert",
      i: 21,
      D: QjQjQj5151,
      C: SjSjSj5202,
      m: function(a) {
        return VVVVVV5091(a.h,
          21, QjQjQj5151)
      },
      j: TTTTTT5074
    }]
  };
  rmrmrm7450.prototype.s = function() {
    var a = {};
    NNNNNN4995(this, sm(), a);
    return a
  };
  rmrmrm7450.prototype.G = function() {
    var a = [];
    RRRRRR5053(this, sm(), a);
    return a.join("\n")
  };
  rmrmrm7450.prototype.toString = function() {
    return JSON.stringify(this.s())
  };
  var tmtmtm7656 = function() {
      this.g = 0
    },
    umumum7659 = function(aaaaaa7659) {
      aaaaaa7659 = aaaaaa7659.ra("q").join("");
      return SaSaSa604(aaaaaa7659)
    },
    vmvmvm7663 = function(aaaaaa7663, bbbbbb7663, cccccc7663, dddddd7663) {
      var url_ = "https://translate.googleapis.com/translate_a/single";
      bbbbbb7663 = bbbbbb7663.toString();
      bbbbbb7663 += umumum7659(cccccc7663);
      cccccc7663 = cccccc7663.toString();
      var port_ = "POST";
      url_ += "?" + bbbbbb7663;
      2E3 > url_.length + cccccc7663.length && (port_ = "GET", url_ += "&" + cccccc7663, cccccc7663 = "");
      ++aaaaaa7663.g;
      Pi(url_, function(h) {
        --aaaaaa7663.g;
        dddddd7663(h)
      }, port_, cccccc7663)
    };
  tmtmtm7656.prototype.l = function(aaaaaa7741, bbbbbb7741, cccccc7741) {
    cccccc7741 = cccccc7741.target;
    if (!YiYiYi(cccccc7741) || "[" != Zi(cccccc7741)[0] && "{" != Zi(cccccc7741)[0]) {
      aaaaaa7741 = HtmlImageElement.Z();
      var dddddd7745 = String(cccccc7741.B), eeeeee7745 = Zi(cccccc7741);
      aaaaaa7741.log("invalidResponse", {
        q: dddddd7745.substring(0, 500),
        ql: dddddd7745.length,
        r: eeeeee7745.substring(0, 500),
        rl: eeeeee7745.length
      });
      bbbbbb7741 && bbbbbb7741(cccccc7741.Ba())
    } else {
      bbbbbb7741 = Zi(cccccc7741);
      cccccc7741 = {
        "class": "trans.common.TranslationAPI",
        func: "handleSingleResult_",
        url: String(cccccc7741.B)
      };
      try {
        dddddd7745 = JSON.parse(bbbbbb7741)
      } catch (err) {
        throw aaaaaa7741 = HtmlImageElement.Z(), cccccc7741.js = bbbbbb7741, cccccc7741.error = err.message, aaaaaa7741.log("jsonParseErr", cccccc7741), err;
      }
      Array.isArray(dddddd7745) && (dddddd7745 = new rmrmrm7450(dddddd7745));
      aaaaaa7741(dddddd7745)
    }
  };
  var cssMarginLeft = setCSSRaw(["margin-left: 0px;"]),
    cssColorFloatPaddingTop = setCSSRaw(["color: #A2A2A2; float: right; padding-top: 16px;"]),
    newBrowserLangObj = new BrowserLangObj,
    ymymym7706 = function() {},
    zmzmzm7707 = function(selection, bbbbbb7707, source, sl_d) {
      if ("" != selection) {
        window.selection = selection;
        selection = new tmtmtm7656;
        var hl_lang = chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : "en";
        sl_d = sl_d ? sl_d : "auto";
        var tl_f = GetTargetLangKey(newBrowserLangObj);
        source = new JcJcJc1170("source=" + source);
        var windowSelection = window.selection,
          gggggg7716 = new JcJcJc1170,
          llllll7717 = new JcJcJc1170;
        gggggg7716.set("client", "gtx");
        gggggg7716.set("sl", sl_d);
        gggggg7716.set("tl", tl_f);
        gggggg7716.set("hl", hl_lang);
        var eArr = ["t", "bd"];
        gggggg7716.remove("dt");
        0 < eArr.length && (gggggg7716.o = null, gggggg7716.g.set("dt", CloneArr(eArr)), gggggg7716.l = AssertNumber(gggggg7716.l) + eArr.length);
        gggggg7716.set("dj", "1");
        source && gggggg7716.zc(source);
        llllll7717.set("q", windowSelection);
        vmvmvm7663(selection, gggggg7716, llllll7717, vvvvvv498(selection.l, selection, bbbbbb7707, void 0))
      }
    };
  ymymym7706.prototype.g = function(moreElement, sourceString, doc1, d) {
    if (null != d) {
      for (var googleTranslateUrl = d.src, f = GetTargetLangKey(newBrowserLangObj), h = [], targetString = [], l = d.sentences, langs = 0; langs < l.length; langs++) h.push(l[langs].orig), targetString.push(l[langs].trans);
      h = h.join("");
      targetString = targetString.join("");
      l = zizizi4448("tl")[f].toUpperCase();
      var p = zizizi4448("sl");
      langs = [];
      for (var q in p) langs.push([q, p[q]]);
      d = d.dict;
      me();
      if (ge["extension.translation"]) d = ge["extension.translation"]({
        query: sourceString,
        ff: targetString,
        bf: googleTranslateUrl,
        ef: l,
        cf: langs,
        Ve: d,
        popup: moreElement
      }, void 0);
      else {
        q = "";
        if (sourceString)
          if (targetString) {
            q += '<div class="gtx-language"><select class="gtx-lang-selector">';
            p = langs.length;
            var sourceLang = null;
            for (var idx = 0; idx < p; idx++) {
              var lang = langs[idx];
              sourceLang = (!sourceLang && hehehehe1587(lang[0], googleTranslateUrl)) ? fe(lang[1]) : sourceLang;
              q += hehehehe1587(lang, "auto") ? "" : '<option value="' + IIIIII1591(lang[0]) + '"' + (hehehehe1587(lang[0], googleTranslateUrl) ? " selected" : "") + ">" + fe(lang[1]) + "</option>"
            }
            q += '</select></div>';
            //q += '<div class="gtx-source-audio"><div class="jfk-button-img"></div></div><div class="gtx-body">' + fe(b) + '</div><br><div class="gtx-language">' + fe(l) + '</div><div class="gtx-target-audio"><div class="jfk-button-img"></div></div><div class="gtx-body">' + fe(g) + "</div>";
            
            var sourceText = fe(sourceString).toString();
            var targetText = fe(targetString).toString();
            // Split the string based on the delimiter
            var sourceTexts = sourceText.includes('。') ? sourceText.split('。').map(t => t + (t.endsWith('。') ? '' : '。')) : sourceText.split('. ').map(t => t + (t.endsWith('. ') || t.endsWith('.') ? '' : '. '));
            var targetTexts = targetText.includes('。') ? targetText.split('。').map(t => t + (t.endsWith('。') ? '' : '。')) : targetText.split('. ').map(t => t + (t.endsWith('. ') || t.endsWith('.') ? '' : '. '));
            // Remove empty strings from the array after splitting
            sourceTexts = sourceTexts.filter(text => text.trim() !== '。' && text.trim() !== '. ');
            targetTexts = targetTexts.filter(text => text.trim() !== '。' && text.trim() !== '. ');
            // Initialize the result variable
            var sourceImg = '<div class="gtx-source-audio"><div class="jfk-button-img"></div></div>';
            var targetImg = '<div class="gtx-target-audio"><div class="jfk-button-img"></div></div>';
            var gtxLang = '<div class="gtx-language" style="font-size: 0.8em;"><strong>' + sourceLang + " => " + fe(l) + ' :</strong></div>';
            var sourceBody = '<div class="gtx-body" style="font-size: 1em;">';
            var targetBody = '<br><font class="gtx-body" style="font-size: 1em;border-left: 4px solid #cc3355; padding-left: 12px; display: block;">';
            var result = '<div class="gtx">' + sourceImg + targetImg;
            // Match and generate HTML strings
            var maxLength = Math.max(sourceTexts.length, targetTexts.length);
            for (var i = 0; i < maxLength; i++) {
                var source = sourceTexts[i] ? sourceTexts[i] : '';
                var target = targetTexts[i] ? targetTexts[i] : '';
                result += '<div class="gtx-head">' + gtxLang + sourceBody + source + '</div>' + targetBody + '<div>' + target + '</div></font></div><hr>';
            }
            result += '</div>';

            q += result;
            if (d) {
              q += '<table style="width: 95%">';
              l = d.length;
              for (langs = 0; langs < l; langs++) {
                p = d[langs];
                q += '<tr><td class="gtx-td"><div class="gtx-pos">' +
                  fe(p.pos) + '</div></td><td class="gtx-td">';
                if (moreElement)
                  for (p = p.terms, idx = p.length, lang = 0; lang < idx; lang++) q += (0 != lang ? ", " : "") + fe(p[lang]);
                else
                  for (p = p.terms, idx = p.length, lang = 0; lang < idx; lang++) {
                    var E = p[lang];
                    q += 3 > lang ? (0 != lang ? ", " : "") + fe(E) : ""
                  }
                q += "</td></tr>"
              }
              q += "</table>"
            }
            q += "<br>"
          } else q += "No translation results for <b>" + fe(sourceString) + "</b>.";
        d = ce(q)
      }
      d && d.l && doc1 ? d.l(doc1) : (d = VeVeVe1914(d), vc(AssertAssertion(doc1), d));
      d = getElementsByClass("gtx-lang-selector", doc1);
      AddEventListener(d, "change", vvvvvv498(this.l, this, moreElement, sourceString, doc1), false, this);
      sourceString = new mimimi4347;
      d = getElementsByClass("gtx-source-audio", doc1);
      AhAhAh3646(sourceString, d);
      pi(sourceString, h, googleTranslateUrl);
      sourceString = new mimimi4347;
      h = getElementsByClass("gtx-target-audio", doc1);
      AhAhAh3646(sourceString,
        h);
      pi(sourceString, targetString, f);
      googleTranslateUrl = "https://translate.google.com/?source=gtx_m#" + googleTranslateUrl + "/" + f + "/" + encodeURIComponent(window.selection);
      moreElement ? (moreElement = GetElementById(document, "more"), $g$g$g3183(moreElement, vdvdvd1431(googleTranslateUrl)), doc1 = new _JfkButton("", void 0, 4), googleTranslateUrl = GetElementById(document, "new-translation"), zhzhzh3640(doc1, googleTranslateUrl), Of(GetElementById(document, "new-translation"), true), doc1 = GetElementById(document, "translate-page"), SetElementTextContent(moreElement, GetI18nMessage("MSG_OPEN_IN_TRANSLATE")), doc1.className = "gtx-a", googleTranslateUrl = rdrdrd1410(cssMarginLeft), doc1.style.cssText = JbJbJb842(googleTranslateUrl), Of(moreElement, true)) : (moreElement = CreateDocDiv(document, "a"), moreElement.id = "off", moreElement.className = "gtx-a", moreElement.setAttribute("target", "_blank"), SetElementTextContent(moreElement, GetI18nMessage("MSG_FOOTER_OPTIONS").toUpperCase()),
        $g$g$g3183(moreElement, vdvdvd1431(chrome.runtime.getURL("options.html"))), AppendElementChild(doc1, moreElement), moreElement = CreateDocDiv(document, "a"), moreElement.id = "more", moreElement.setAttribute("class", "gtx-a"), moreElement.setAttribute("target", "_blank"), SetElementTextContent(moreElement, GetI18nMessage("MSG_MORE")), $g$g$g3183(moreElement, vdvdvd1431(googleTranslateUrl)), googleTranslateUrl = rdrdrd1410(cssColorFloatPaddingTop), moreElement.style.cssText = JbJbJb842(googleTranslateUrl), AppendElementChild(doc1, moreElement))
    } else SetElementTextContent(GetElementById(document, "translation"), GetI18nMessage("MSG_TRANSLATION_ERROR"))
  };
  ymymym7706.prototype.l = function(a, b, c, d) {
    zmzmzm7707(b, vvvvvv498(this.g, this, a, b, c), "ls", d.target.value)
  };
  ymymym7706.Z = function() {
    return ihihih3435(ymymym7706)
  };
  var Am = function(a, b) {
    var c = a.xc;
    a = a.uid;
    me();
    ge["jfk.templates.bubble.main"] ? c = ge["jfk.templates.bubble.main"]({
      xc: c,
      uid: a
    }, b) : (b = '<div class="' + IIIIII1591("jfk-bubble") + '" role="alertdialog"' + (a ? ' aria-describedby="' + IIIIII1591(a) + '"' : "") + '><div class="' + IIIIII1591("jfk-bubble-content-id") + '"' + (a ? ' id="' + IIIIII1591(a) + '"' : "") + "></div>", c && (b += '<div class="' + IIIIII1591("jfk-bubble-closebtn-id") + " " + IIIIII1591("jfk-bubble-closebtn") + '" aria-label="', b += "Close".replace(normalizeHtmlRegex, REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE), b += '" role="button" tabindex=0></div>'), b += '<div class="' + IIIIII1591("jfk-bubble-arrow-id") +
      " " + IIIIII1591("jfk-bubble-arrow") + '"><div class="' + IIIIII1591("jfk-bubble-arrowimplbefore") + '"></div><div class="' + IIIIII1591("jfk-bubble-arrowimplafter") + '"></div></div></div>', c = ce(b));
    return c
  };
  var Bm = function() {},
    Cm = new Bm,
    Dm = ["click", "keydown", "keyup"];
  Bm.prototype.listen = function(a, listenerEvent, c, d, e) {
    var f = function(h) {
      var g = GetListenerHandleEvent(listenerEvent), l = h.target;
      //01:Node.ELEMENT_NODE: An Element node like <p> or <div>
      l = IsObjectOrFunction(l) && 1 == l.nodeType ? h.target.getAttribute("role") || null : null;
      "click" != h.type || 0 != h.ka.button || isMac && h.ctrlKey ? 13 != h.keyCode && 3 != h.keyCode || "keyup" == h.type ? 32 != h.keyCode || "button" != l && "tab" != l && "radio" != l || ("keyup" == h.type && g.call(d, h), h.preventDefault()) : (h.type = "keypress", g.call(d, h)) : g.call(d, h)
    };
    f.Wa = listenerEvent;
    f.Qc = d;
    e ? e.listen(a, Dm, f, c) : AddEventListener(a, Dm, f, c)
  };
  Bm.prototype.fa = function(a, b, c, d, e) {
    for (var f, h = 0; f = Dm[h]; h++) {
      var g = a;
      var l = f;
      var n = !!c;
      l = IsElementExistClosureListenableID(g) ? g.eb(l, n) : g ? (g = GetHtmlElementByClosureLmID(g)) ? g.eb(l, n) : [] : [];
      for (g = 0; n = l[g]; g++) {
        var p = n.listener;
        if (p.Wa == b && p.Qc == d) {
          e ? e.fa(a, f, n.listener, c, d) : RemoveEventListener(a, f, n.listener, c, d);
          break
        }
      }
    }
  };
  var WindowG_3_7873 = function() {
    WindowG_2.call(this);
    this.l = 0;
    this.endTime = this.startTime = null
  };
  googInherits(WindowG_3_7873, WindowG_2);
  WindowG_3_7873.prototype.onStop = function() {
    this.dispatchEvent("stop")
  };
  var FmFmFm7882 = function(aaaaaa7882, Css3Propertys) {
      Array.isArray(Css3Propertys) || (Css3Propertys = [Css3Propertys]);
      AssertAssertion(0 < Css3Propertys.length, "At least one Css3Property should be specified.");
      Css3Propertys = Css3Propertys.map(function(css3Property) {
        if ("string" === typeof css3Property) return css3Property;
        AssertObject(css3Property, "Expected css3 property to be an object.");
        var d = css3Property.wc + " " + css3Property.duration + "s " + css3Property.timing + " " + css3Property.delay + "s";
        AssertAssertion(css3Property.wc && "number" === typeof css3Property.duration && css3Property.timing && "number" === typeof css3Property.delay, "Unexpected css3 property value: %s", d);
        return d
      });
      zf(aaaaaa7882, "transition", Css3Propertys.join(","))
    },
    Gm = Ua(function() {
      if (FFFFFF1508) return true;
      var docDiv = CreateDocDiv(document, "DIV"),
        bbbbbb7908 = isWebkit ? "-webkit" : isMoz ? "-moz" :
        FFFFFF1508 ? "-ms" : null,
        transitionCSSObj = {
          transition: "opacity 1s linear"
        };
      bbbbbb7908 && (transitionCSSObj[bbbbbb7908 + "-transition"] = "opacity 1s linear");
      transitionCSSObj = {
        style: transitionCSSObj
      };
      if (!strictAlphanumericRegex.test("div")) throw Error("Invalid tag name <div>.");
      if ("DIV" in APPLET_BASE_EMBED_IFRAME_LINK_MATH_META_OBJECT_SCRIPT_STYLE_SVG_TEMPLATE) throw Error("Tag name <div> is not allowed for SafeHtml.");
      bbbbbb7908 = void 0;
      var dddd7909 = "";
      if (transitionCSSObj)
        for (transitionCSSIdx in transitionCSSObj)
          if (Object.prototype.hasOwnProperty.call(transitionCSSObj, transitionCSSIdx)) {
            if (!strictAlphanumericRegex.test(transitionCSSIdx)) throw Error('Invalid attribute name "' + transitionCSSIdx + '".');
            var transitionCSS = transitionCSSObj[transitionCSSIdx];
            if (null != transitionCSS) {
              var _transitionCSSIdx = transitionCSSIdx;
              if (transitionCSS instanceof kbkbkb736) transitionCSS = lblblb747(transitionCSS);
              else if ("style" == _transitionCSSIdx.toLowerCase()) {
                if (!IsObjectOrFunction(transitionCSS)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
                  typeof transitionCSS + " given: " + transitionCSS);
                transitionCSS instanceof IbIbIb832 || (transitionCSS = MbMbMb846(transitionCSS));
                transitionCSS = JbJbJb842(transitionCSS)
              } else {
                if (/^on/i.test(_transitionCSSIdx)) throw Error('Attribute "' + _transitionCSSIdx + '" requires goog.string.Const value, "' + transitionCSS + '" given.');
                if (_transitionCSSIdx.toLowerCase() in action_cite_data_formaction_href_manifest_poster_src)
                  if (transitionCSS instanceof nbnbnb754) transitionCSS instanceof nbnbnb754 && transitionCSS.constructor === nbnbnb754 ? transitionCSS = transitionCSS.g : (ThrowAssertionErrorFailure("expected object of type TrustedResourceUrl, got '" + transitionCSS + "' of type " + GetTypeInfo(transitionCSS)), transitionCSS = "type_error:TrustedResourceUrl"), transitionCSS = transitionCSS.toString();
                  else if (transitionCSS instanceof BbBbBb805) transitionCSS = CbCbCb815(transitionCSS);
                else if ("string" === typeof transitionCSS) transitionCSS = (FbFbFb822(transitionCSS) || GbGbGb829).ea();
                else throw Error('Attribute "' + _transitionCSSIdx + '" on tag "div" requires goog.html.SafeUrl, goog.string.Const, or string, value "' +
                  transitionCSS + '" given.');
              }
              transitionCSS.sa && (transitionCSS = transitionCSS.ea());
              AssertAssertion("string" === typeof transitionCSS || "number" === typeof transitionCSS, "String or number value expected, got " + typeof transitionCSS + " with value: " + transitionCSS);
              _transitionCSSIdx = _transitionCSSIdx + '="' + SafeString(String(transitionCSS)) + '"';
              dddd7909 += " " + _transitionCSSIdx
            }
          } var transitionCSSIdx = "<div" + dddd7909;
      null == bbbbbb7908 ? bbbbbb7908 = [] : Array.isArray(bbbbbb7908) || (bbbbbb7908 = [bbbbbb7908]);
      !0 === gbgbgb717.div ? (AssertAssertion(!bbbbbb7908.length, "Void tag <div> does not allow content."), transitionCSSIdx += ">") : (bbbbbb7908 = oc(bbbbbb7908), transitionCSSIdx += ">" + GetSafeHtmlG(bbbbbb7908).toString() + "</div>");
      transitionCSSIdx = jc(transitionCSSIdx);
      wc(docDiv, transitionCSSIdx);
      docDiv = docDiv.firstChild;
      AssertAssertion(docDiv.nodeType == Node.ELEMENT_NODE); //01:Node.ELEMENT_NODE: An Element node like <p> or <div>
      transitionCSSIdx = docDiv.style[Cc("transition")];
      return "" != ("undefined" !== typeof transitionCSSIdx ? transitionCSSIdx : docDiv.style[yf(docDiv, "transition")] ||
        "")
    });
  var HmHmHm7948 = function(aaaaaa7948, bbbbbb7948, cccccc7948, dddddd7948, eeeeee7948) {
    WindowG_3_7873.call(this);
    this.g = aaaaaa7948;
    this.B = bbbbbb7948;
    this.F = cccccc7948;
    this.o = dddddd7948;
    this.J = Array.isArray(eeeeee7948) ? eeeeee7948 : [eeeeee7948]
  };
  googInherits(HmHmHm7948, WindowG_3_7873);
  kkkkkkK8 = HmHmHm7948.prototype;
  kkkkkkK8.play = function() {
    if (1 == this.l) return false;
    this.dispatchEvent("begin");
    this.dispatchEvent("play");
    this.startTime = Date.now();
    this.l = 1;
    if (Gm()) return zf(this.g, this.F), this.u = TgTgTg3092(this.Pc, void 0, this), true;
    this.vb(false);
    return false
  };
  kkkkkkK8.Pc = function() {
    Mf(this.g);
    FmFmFm7882(this.g, this.J);
    zf(this.g, this.o);
    this.u = TgTgTg3092(vvvvvv498(this.vb, this, false), 1E3 * this.B)
  };
  kkkkkkK8.stop = function() {
    1 == this.l && this.vb(true)
  };
  kkkkkkK8.vb = function(a) {
    zf(this.g, "transition", "");
    self_.clearTimeout(this.u);
    zf(this.g, this.o);
    this.endTime = Date.now();
    this.l = 0;
    if (a) this.onStop();
    else this.dispatchEvent("finish");
    this.dispatchEvent("end")
  };
  kkkkkkK8.H = function() {
    this.stop();
    HmHmHm7948.I.H.call(this)
  };
  kkkkkkK8.pause = function() {
    AssertAssertion(false, "Css3 transitions does not support pause action.")
  };
  var Im = function(a, b, c, d) {
    return new HmHmHm7948(a, .218, {
      opacity: c
    }, {
      opacity: d
    }, {
      wc: "opacity",
      duration: .218,
      timing: b,
      delay: 0
    })
  };
  var WindowG_3_8031 = function(a, b) {
    WindowG_2.call(this);
    this.g = new WindowG_2_3155(this);
    a = a || null;
    Jm(this);
    this.U = a;
    b && (this.Ga = b)
  };
  googInherits(WindowG_3_8031, WindowG_2);
  kkkkkkK8 = WindowG_3_8031.prototype;
  kkkkkkK8.U = null;
  kkkkkkK8.jc = null;
  kkkkkkK8.Fa = false;
  kkkkkkK8.Wb = -1;
  kkkkkkK8.Ga = "toggle_display";
  kkkkkkK8.getType = function() {
    return this.Ga
  };
  kkkkkkK8.A = function() {
    return this.U
  };
  var Jm = function(a) {
    if (a.Fa) throw Error("Can not change this state of the popup while showing.");
  };
  WindowG_3_8031.prototype.isVisible = function() {
    return this.Fa
  };
  WindowG_3_8031.prototype.l = function() {};
  var Lm = function(a, b) {
    a.Fa && a.dispatchEvent({
      type: "beforehide",
      target: b
    }) && (a.g && a.g.removeAll(), a.Fa = false, a.o ? (FgFgFg2944(a.o, "end", w(a.kc, b), false, a), a.o.play()) : a.kc(b))
  };
  kkkkkkK8 = WindowG_3_8031.prototype;
  kkkkkkK8.kc = function(a) {
    "toggle_display" == this.Ga ? this.Kc() : "move_offscreen" == this.Ga && (this.U.style.top = "-10000px");
    this.dispatchEvent({
      type: "hide",
      target: a
    })
  };
  kkkkkkK8.Kc = function() {
    this.U.style.visibility = "hidden";
    Of(this.U, false)
  };
  kkkkkkK8.vc = function() {
    this.dispatchEvent("show")
  };
  kkkkkkK8.uc = function(a) {
    a = a.target;
    IsContainsElement(this.U, a) || Mm(this, a) || 150 > Date.now() - this.Wb || Lm(this, a)
  };
  kkkkkkK8.tc = function(a) {
    var b = GetElementDocument(this.U);
    if ("undefined" != typeof document.activeElement) {
      if (a = b.activeElement, !a || IsContainsElement(this.U, a) || "BODY" == a.tagName || Mm(this, a)) return
    } else if (a.target != b) return;
    150 > Date.now() - this.Wb || Lm(this)
  };
  var Mm = function(a, b) {
    return Xa(a.jc || [], function(c) {
      return b === c || IsContainsElement(c, b)
    })
  };
  WindowG_3_8031.prototype.H = function() {
    WindowG_3_8031.I.H.call(this);
    this.g.na();
    kgkgkg2685(this.u);
    kgkgkg2685(this.o);
    delete this.U;
    delete this.g;
    delete this.jc
  };
  var Nm = function(a, b) {
    this.B = b || void 0;
    WindowG_3_8031.call(this, a)
  };
  googInherits(Nm, WindowG_3_8031);
  Nm.prototype.l = function() {
    if (this.B) {
      var a = !this.isVisible() && "move_offscreen" != this.getType(),
        b = this.A();
      a && (b.style.visibility = "hidden", Of(b, true));
      this.B.u(this.F);
      a && Of(b, false)
    }
  };

  function WindowG_4(aaaaaa8095) {
    WindowG_3.call(this, aaaaaa8095);
    this.J = new Vf("jfk-bubble", true);
    this.l = new Nm;
    mgmgmg2696(this, w(kgkgkg2685, this.l));
    this.R = []
  }
  googInherits(WindowG_4, WindowG_3);
  WindowG_4.prototype.M = false;
  var Pm = function(a, b) {
    a = a.qb();
    b && a && ("string" === typeof b ? SetElementTextContent(a, b) : b instanceof zdzdzd1467 ? RcRcRc1281(a, b.ac()) : b instanceof SafeHtml ? RcRcRc1281(a, b) : (a.textContent = "", AppendElementChild(a, b)))
  };
  kkkkkkK8 = WindowG_4.prototype;
  kkkkkkK8.qb = function() {
    return this.g ? getElementsByClass("jfk-bubble-content-id", this.g || this.o.g) : null
  };
  kkkkkkK8.pb = function() {
    this.g = Te(Am, {
      xc: true,
      uid: "bubble-" + GetClosureUidIDValue(this)
    }, this.o);
    Pm(this, this.T);
    Of(this.A(), false);
    var a = this.l,
      b = this.A();
    Jm(a);
    a.U = b;
    if (!isWebkitMobile) {
      a = this.l;
      b = Im(this.A(), "ease-out", 0, 1);
      var c = Im(this.A(), "ease-in", 1, 0);
      a.u = b;
      a.o = c
    }
    PushClassArr(this.A(), this.R)
  };
  kkkkkkK8.oa = function() {
    WindowG_4.I.oa.call(this);
    yhyhyh3632(this).listen(this.l, ["beforeshow", "show", "beforehide", "hide"], this.Jc);
    var a = yhyhyh3632(this),
      b = this.g ? getElementsByClass("jfk-bubble-closebtn-id", this.g || this.o.g) : null;
    Cm.listen(b, w(this.fc, false), void 0, a.J || a, a);
    a = this.A();
    AssertAssertion(a, "getElement() returns null.");
    b = this.g ? getElementsByClass("jfk-bubble-arrow-id", this.g || this.o.g) : null;
    AssertAssertion(b, "No arrow element is found!");
    var c = this.J;
    c.g = a;
    c.B = b;
    a = this.l;
    a.B = this.J || void 0;
    a.isVisible() && a.l()
  };
  kkkkkkK8.fc = function(a) {
    var b = this.l;
    b.u && b.u.stop();
    b.o && b.o.stop();
    if (a) {
      if (!b.Fa && b.dispatchEvent("beforeshow")) {
        if (!b.U) throw Error("Caller must call setElement before trying to show the popup");
        b.l();
        a = GetElementDocument(b.U);
        b.g.listen(a, "mousedown", b.uc, true);
        if (FFFFFF1508) {
          try {
            var c = a.activeElement
          } catch (e) {}
          for (; c && "IFRAME" == c.nodeName;) {
            try {
              var d = c.contentDocument || c.contentWindow.document
            } catch (e) {
              break
            }
            a = d;
            c = a.activeElement
          }
          b.g.listen(a, "mousedown", b.uc, true);
          b.g.listen(a, "deactivate", b.tc)
        } else b.g.listen(a, "blur", b.tc);
        "toggle_display" == b.Ga ? (b.U.style.visibility = "visible", Of(b.U, true)) : "move_offscreen" == b.Ga && b.l();
        b.Fa = true;
        b.Wb = Date.now();
        b.u ? (FgFgFg2944(b.u, "end", b.vc, false, b), b.u.play()) : b.vc()
      }
    } else Lm(b)
  };
  kkkkkkK8.isVisible = function() {
    return this.l.isVisible()
  };
  kkkkkkK8.pc = function() {
    IfIfIf2334(this.A());
    return false
  };
  kkkkkkK8.Jc = function(a) {
    if ("show" == a.type || "hide" == a.type) {
      var b = yhyhyh3632(this),
        c = this.o;
      c = FFFFFF1508 ? IsParentWindowOrDefaultView(c.g) : c.g;
      "show" == a.type ? b.listen(c, "scroll", this.pc) : b.fa(c, "scroll", this.pc)
    }
    b = this.dispatchEvent(a.type);
    this.M && "hide" == a.type && this.na();
    return b
  };
  var margin0CSS = setCSSRaw(["margin: 0;"]),
    WindowG_5 = function(docDiv) {
      WindowG_4.call(this);
      this.M = true;
      AssertAssertion(!this.Y, "Must call addClassName() before rendering");
      this.R.push("gtx-bubble");
      this.J.l = docDiv;
      this.isVisible() && this.l.l();
      var b = 2;
      parseInt(docDiv.style.top, 10) - AeAeAe1751(document).scrollTop + parseInt(docDiv.style.height, 10) / 2 < window.innerHeight / 2 && (b = 1);
      var c = 2;
      docDiv = parseInt(docDiv.style.left, 10) + parseInt(docDiv.style.width, 10) / 2;
      217 >= docDiv ? c = 0 : docDiv >= window.innerWidth - 217 && (c = 1);
      AssertAssertion(!this.Y, "Must call setPosition() before rendering");
      this.J.Za = false;
      Wf(this.J, b, c, 0, -10)
    },
    SmSmSm8221, TmTmTm8221;
  ObjectCreateSetPrototypeOf(WindowG_5, WindowG_4);
  WindowG_5.prototype.H = function() {
    WindowG_4.prototype.H.call(this);
    chrome.runtime.sendMessage({
      bubbleClosed: true
    });
    var gtxAnchorElement = GetElementById(document, "gtx-anchor");
    RemoveElement(gtxAnchorElement)
  };
  WindowG_5.prototype.ia = function(a, text) {
    var styleNode = document.createElement("style");
    styleNode.textContent = text;
    this.K.appendChild(styleNode);
    text = this.F;
    AssertAssertion("string" === typeof text || text.nodeType || text instanceof zdzdzd1467 || text instanceof SafeHtml, "Content must be a string or HTML.");
    this.T = text;
    Pm(this, text);
    styleNode = this.F.cloneNode(false);
    styleNode.id = "bubble-content";
    styleNode.className = "gtx-content";
    this.K.appendChild(styleNode);
    text = document.createElement("div");
    text.className = "content";
    var d = rdrdrd1410(margin0CSS);
    text.style.cssText = JbJbJb842(d);
    styleNode.appendChild(text);
    styleNode = this.F.cloneNode(false);
    styleNode.id = "translation";
    styleNode.style.display = "inline";
    text.appendChild(styleNode);
    UmUmUm8362.g(false, window.selection, styleNode, a);
    this.isVisible() && this.l.l()
  };
  WindowG_5.prototype.F = null;
  WindowG_5.prototype.K = null;
  var Wm = function(a, b, c) {
      var gtxTransElement = GetElementById(document, "gtx-trans");
      PgPgPg2968(gtxTransElement);
      RemoveElement(gtxTransElement);
      zmzmzm7707(b, w(VmVmVm8318, a), "icon", c)
    },
    $m$m$m8262 = function(aaaaaa8262) {
      if ("0" != newBrowserLangObj.g) {
        var selectionObject = window.getSelection(),
          selectionText = selectionObject.toString().trim();
        VerifySelectionTextIsTranslated(selectionText) && (isChromeI18nDetectLanguage ? YmYmYm8303(selectionObject, function(langKey) {
          if (!IsEqualTargetLangKey(langKey)) {
            if ("zh" == langKey || "zh-Hant" == langKey) langKey = "zh-CN";
            ZmZmZm8284(aaaaaa8262, selectionObject, selectionText, langKey)
          }
        }) : !isChromeI18nDetectLanguage && "1" == newBrowserLangObj.g && newBrowserLangObj.u && IsEqualTargetLangKey(SmSmSm8221) || ZmZmZm8284(aaaaaa8262, selectionObject, selectionText))
      }
    },
    ananan8274 = function(aaaaaa8274, bbbbbb8274, cccccc8274) {
      if (aaaaaa8274) {
        var inputText = aaaaaa8274.innerText || aaaaaa8274.textContent || "";
        inputText = decodeURIComponent(encodeURIComponent(inputText.trim()));
        chrome.i18n.detectLanguage(inputText, function (result) {
          if (result.isReliable) {
            cccccc8274(result.languages[0].language)
          } else {
            if (0 < bbbbbb8274) {
              ananan8274(aaaaaa8274.parentNode, bbbbbb8274 - 1, cccccc8274)
            } else {
              cccccc8274("")
            }
          }
          //result.isReliable ? cccccc8274(result.languages[0].language) : 0 < bbbbbb8274 ? ananan8274(aaaaaa8274.parentNode, bbbbbb8274 - 1, cccccc8274) : cccccc8274("")
        })
      } else cccccc8274("")
    },
    ZmZmZm8284 = function(aaaaaa8284, selectionObject, selectionText, langKey) {
      selectionObject = selectionObject.getRangeAt(0).getBoundingClientRect();
      if (0 != selectionObject.top || 0 != selectionObject.left)
        if ("1" == newBrowserLangObj.g) {
          var gtxTransIconDiv = CreateDocDiv(document, "div");
          gtxTransIconDiv.className = "gtx-trans-icon";
          var gtxTransDiv = CreateDocDiv(document, "div");
          gtxTransDiv.appendChild(gtxTransIconDiv);
          gtxTransDiv.id = "gtx-trans";
          gtxTransDiv.style.position = "absolute";
          gtxTransDiv.style.left = aaaaaa8284.clientX + AeAeAe1751(document).scrollLeft - 13 + "px";
          aaaaaa8284 = aaaaaa8284.clientY;
          aaaaaa8284 - selectionObject.top > selectionObject.height / 2 ? aaaaaa8284 = selectionObject.bottom + 1 : aaaaaa8284 = selectionObject.top - 1 - 27;
          gtxTransDiv.style.top = aaaaaa8284 + AeAeAe1751(document).scrollTop + "px";
          document.body.appendChild(gtxTransDiv);
          AddEventListener(gtxTransDiv, "click", w(Wm, selectionObject, selectionText, langKey))
        } else zmzmzm7707(selectionText, w(VmVmVm8318, selectionObject), "bubble",
          langKey)
    },
    YmYmYm8303 = function(selectionObject, VerifyLangKey_8303) {
      var inputText = selectionObject.toString().trim();
      inputText = decodeURIComponent(encodeURIComponent(inputText));
      chrome.i18n.detectLanguage(inputText, function(result) {
        var langKey = null;
        if (result.isReliable) return langKey = result.languages[0].language, VerifyLangKey_8303(langKey);
        ananan8274(selectionObject.anchorNode, 3, function(ffffff8309) {
          VerifyLangKey_8303(ffffff8309)
        })
      })
    },
    VerifySelectionTextIsTranslated = function(selectionText) {
      var invalidCharactersRegex = /^[0-9!@#$\u20ac\u00a3%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
      return 0 < selectionText.length && !getElementsByClass("gtx-bubble") && 2000 > selectionText.length && !invalidCharactersRegex.test(selectionText) && 400 < window.innerWidth //selectionText.length: 250 => 2000
    },
    VmVmVm8318 = function(aaaaaa8318, bbbbbb8318) {
      if ("1" == newBrowserLangObj.g || bbbbbb8318.src != GetTargetLangKey(newBrowserLangObj)) {
        var docDiv = CreateDocDiv(document, "div");
        docDiv.id = "gtx-anchor";
        docDiv.style.position =
          "absolute";
        docDiv.style.visibility = "hidden";
        docDiv.style.left = String(aaaaaa8318.left + AeAeAe1751(document).scrollLeft + "px");
        docDiv.style.top = String(aaaaaa8318.top + AeAeAe1751(document).scrollTop + "px");
        docDiv.style.width = String(aaaaaa8318.right - aaaaaa8318.left + 1 + "px");
        docDiv.style.height = String(aaaaaa8318.height + "px");
        document.body.appendChild(docDiv);
        window.g = new WindowG_5(docDiv);
        zhzhzh3640(window.g, document.body);
        aaaaaa8318 = window.g;
        aaaaaa8318.F = document.createElement("div");
        aaaaaa8318.F.id = "gtx-host";
        docDiv = MbMbMb846({
          "min-width": "200px",
          "max-width": "600px"
        });
        aaaaaa8318.F.style.cssText = JbJbJb842(docDiv);
        aaaaaa8318.K = aaaaaa8318.F.attachShadow({
          mode: "closed"
        });
        bnbnbn8348(chrome.runtime.getURL("popup_css_compiled.css"), vvvvvv498(aaaaaa8318.ia, aaaaaa8318, bbbbbb8318));
        window.g.fc(true)
      }
    },
    bnbnbn8348 = function(url, callback) {
      var newXMLHttpRequest = new XMLHttpRequest;
      newXMLHttpRequest.open("GET", url, true);
      newXMLHttpRequest.onload = function() {
        var _response = null;
        200 === newXMLHttpRequest.status && (_response = newXMLHttpRequest.response);
        return callback(_response)
      };
      newXMLHttpRequest.send()
    };
  chrome.runtime.onMessage.addListener(function(aaaaaa8359) {
    aaaaaa8359["gtx.detected"] && (SmSmSm8221 = aaaaaa8359["gtx.detected"], $m$m$m8262(TmTmTm8221))
  });
  var newBrowserLangObj = new BrowserLangObj, UmUmUm8362 = ymymym7706.Z();
  AddEventListener(window, "mouseup", function(aaaaaa8364) {
    if (0 == aaaaaa8364.button && !GetElementById(document, "gtx-trans")) {
      try {
        chrome.runtime.sendMessage({
          test: 1
        })
      } catch (b) {
        return
      }
      isChromeI18nDetectLanguage || "1" != newBrowserLangObj.g || !newBrowserLangObj.u || SmSmSm8221 ? window.setTimeout(w($m$m$m8262, aaaaaa8364), 0) : (TmTmTm8221 = aaaaaa8364, chrome.runtime.sendMessage({
        detectLanguage: 1
      }))
    }
  });
  AddEventListener(window, "mousedown", function(tgtgtg2761_) { //tgtgtg2761 => qgqgqg2737
    var gtxTransElement = GetElementById(document, "gtx-trans");
    gtxTransElement && (IsContainsElement(gtxTransElement, tgtgtg2761_.target) ? tgtgtg2761_.preventDefault() : (PgPgPg2968(gtxTransElement), RemoveElement(gtxTransElement)));
    tgtgtg2761_.target instanceof HTMLElement && -1 != tgtgtg2761_.target.className.indexOf("jfk-bubble-closebtn") && tgtgtg2761_.preventDefault()
  }, true);
  var DisposeWindowBubble = function() {
      window.g && window.g.na() //window.g => WindowG_5 => WindowG_4 => WindowG_3 => WindowG_2 => windowG
    }, //window.g.na => windowG.prototype.na 
    disposeWindowBubbleArr = ["disposeWindowBubble"],
    self_tmp = self_;
  disposeWindowBubbleArr[0] in self_tmp || "undefined" == typeof self_tmp.execScript || self_tmp.execScript("var " + disposeWindowBubbleArr[0]);
  for (var key; disposeWindowBubbleArr.length && (key = disposeWindowBubbleArr.shift());) disposeWindowBubbleArr.length || void 0 === DisposeWindowBubble ? self_tmp[key] && self_tmp[key] !== Object.prototype[key] ? self_tmp = self_tmp[key] : self_tmp = self_tmp[key] = {} : self_tmp[key] = DisposeWindowBubble;
})();