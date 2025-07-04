/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (a, b) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  "use strict";
  var c = [],
    d = a.document,
    e = Object.getPrototypeOf,
    f = c.slice,
    g = c.concat,
    h = c.push,
    i = c.indexOf,
    j = {},
    k = j.toString,
    l = j.hasOwnProperty,
    m = l.toString,
    n = m.call(Object),
    o = {};
  function p(a, b) {
    b = b || d;
    var c = b.createElement("script");
    (c.text = a), b.head.appendChild(c).parentNode.removeChild(c);
  }
  var q = "3.2.1",
    r = function (a, b) {
      return new r.fn.init(a, b);
    },
    s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    t = /^-ms-/,
    u = /-([a-z])/g,
    v = function (a, b) {
      return b.toUpperCase();
    };
  (r.fn = r.prototype =
    {
      jquery: q,
      constructor: r,
      length: 0,
      toArray: function () {
        return f.call(this);
      },
      get: function (a) {
        return null == a
          ? f.call(this)
          : a < 0
          ? this[a + this.length]
          : this[a];
      },
      pushStack: function (a) {
        var b = r.merge(this.constructor(), a);
        return (b.prevObject = this), b;
      },
      each: function (a) {
        return r.each(this, a);
      },
      map: function (a) {
        return this.pushStack(
          r.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(f.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (a < 0 ? b : 0);
        return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: h,
      sort: c.sort,
      splice: c.splice,
    }),
    (r.extend = r.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || r.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          h < i;
          h++
        )
          if (null != (a = arguments[h]))
            for (b in a)
              (c = g[b]),
                (d = a[b]),
                g !== d &&
                  (j && d && (r.isPlainObject(d) || (e = Array.isArray(d)))
                    ? (e
                        ? ((e = !1), (f = c && Array.isArray(c) ? c : []))
                        : (f = c && r.isPlainObject(c) ? c : {}),
                      (g[b] = r.extend(j, f, d)))
                    : void 0 !== d && (g[b] = d));
        return g;
      }),
    r.extend({
      expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === r.type(a);
      },
      isWindow: function (a) {
        return null != a && a === a.window;
      },
      isNumeric: function (a) {
        var b = r.type(a);
        return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
      },
      isPlainObject: function (a) {
        var b, c;
        return (
          !(!a || "[object Object]" !== k.call(a)) &&
          (!(b = e(a)) ||
            ((c = l.call(b, "constructor") && b.constructor),
            "function" == typeof c && m.call(c) === n))
        );
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? j[k.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (a) {
        p(a);
      },
      camelCase: function (a) {
        return a.replace(t, "ms-").replace(u, v);
      },
      each: function (a, b) {
        var c,
          d = 0;
        if (w(a)) {
          for (c = a.length; d < c; d++)
            if (b.call(a[d], d, a[d]) === !1) break;
        } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(s, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (w(Object(a))
              ? r.merge(c, "string" == typeof a ? [a] : a)
              : h.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        return null == b ? -1 : i.call(b, a, c);
      },
      merge: function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          e,
          f = 0,
          h = [];
        if (w(a))
          for (d = a.length; f < d; f++)
            (e = b(a[f], f, c)), null != e && h.push(e);
        else for (f in a) (e = b(a[f], f, c)), null != e && h.push(e);
        return g.apply([], h);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, d, e;
        if (
          ("string" == typeof b && ((c = a[b]), (b = a), (a = c)),
          r.isFunction(a))
        )
          return (
            (d = f.call(arguments, 2)),
            (e = function () {
              return a.apply(b || this, d.concat(f.call(arguments)));
            }),
            (e.guid = a.guid = a.guid || r.guid++),
            e
          );
      },
      now: Date.now,
      support: o,
    }),
    "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]),
    r.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (a, b) {
        j["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function w(a) {
    var b = !!a && "length" in a && a.length,
      c = r.type(a);
    return (
      "function" !== c &&
      !r.isWindow(a) &&
      ("array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a))
    );
  }
  var x = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ha(),
      z = ha(),
      A = ha(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = {}.hasOwnProperty,
      D = [],
      E = D.pop,
      F = D.push,
      G = D.push,
      H = D.slice,
      I = function (a, b) {
        for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
        return -1;
      },
      J =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      K = "[\\x20\\t\\r\\n\\f]",
      L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      M =
        "\\[" +
        K +
        "*(" +
        L +
        ")(?:" +
        K +
        "*([*^$|!~]?=)" +
        K +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        L +
        "))|)" +
        K +
        "*\\]",
      N =
        ":(" +
        L +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        M +
        ")*)|.*)\\)|)",
      O = new RegExp(K + "+", "g"),
      P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
      Q = new RegExp("^" + K + "*," + K + "*"),
      R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
      S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
      T = new RegExp(N),
      U = new RegExp("^" + L + "$"),
      V = {
        ID: new RegExp("^#(" + L + ")"),
        CLASS: new RegExp("^\\.(" + L + ")"),
        TAG: new RegExp("^(" + L + "|[*])"),
        ATTR: new RegExp("^" + M),
        PSEUDO: new RegExp("^" + N),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            K +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            K +
            "*(?:([+-]|)" +
            K +
            "*(\\d+)|))" +
            K +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + J + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            K +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            K +
            "*((?:-\\d)?\\d*)" +
            K +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      W = /^(?:input|select|textarea|button)$/i,
      X = /^h\d$/i,
      Y = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      $ = /[+~]/,
      _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
      aa = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : d < 0
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ca = function (a, b) {
        return b
          ? "\0" === a
            ? "\ufffd"
            : a.slice(0, -1) +
              "\\" +
              a.charCodeAt(a.length - 1).toString(16) +
              " "
          : "\\" + a;
      },
      da = function () {
        m();
      },
      ea = ta(
        function (a) {
          return a.disabled === !0 && ("form" in a || "label" in a);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      G.apply((D = H.call(v.childNodes)), v.childNodes),
        D[v.childNodes.length].nodeType;
    } catch (fa) {
      G = {
        apply: D.length
          ? function (a, b) {
              F.apply(a, H.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function ga(a, b, d, e) {
      var f,
        h,
        j,
        k,
        l,
        o,
        r,
        s = b && b.ownerDocument,
        w = b ? b.nodeType : 9;
      if (
        ((d = d || []),
        "string" != typeof a || !a || (1 !== w && 9 !== w && 11 !== w))
      )
        return d;
      if (
        !e &&
        ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
      ) {
        if (11 !== w && (l = Z.exec(a)))
          if ((f = l[1])) {
            if (9 === w) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d;
            } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f)
              return d.push(j), d;
          } else {
            if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
            if (
              (f = l[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return G.apply(d, b.getElementsByClassName(f)), d;
          }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) (s = b), (r = a);
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id"))
              ? (k = k.replace(ba, ca))
              : b.setAttribute("id", (k = u)),
              (o = g(a)),
              (h = o.length);
            while (h--) o[h] = "#" + k + " " + sa(o[h]);
            (r = o.join(",")), (s = ($.test(a) && qa(b.parentNode)) || b);
          }
          if (r)
            try {
              return G.apply(d, s.querySelectorAll(r)), d;
            } catch (x) {
            } finally {
              k === u && b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(P, "$1"), b, d, e);
    }
    function ha() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ia(a) {
      return (a[u] = !0), a;
    }
    function ja(a) {
      var b = n.createElement("fieldset");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ka(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function la(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          a.sourceIndex - b.sourceIndex;
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function oa(a) {
      return function (b) {
        return "form" in b
          ? b.parentNode && b.disabled === !1
            ? "label" in b
              ? "label" in b.parentNode
                ? b.parentNode.disabled === a
                : b.disabled === a
              : b.isDisabled === a || (b.isDisabled !== !a && ea(b) === a)
            : b.disabled === a
          : "label" in b && b.disabled === a;
      };
    }
    function pa(a) {
      return ia(function (b) {
        return (
          (b = +b),
          ia(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = ga.support = {}),
      (f = ga.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return !!b && "HTML" !== b.nodeName;
        }),
      (m = ga.setDocument =
        function (a) {
          var b,
            e,
            g = a ? a.ownerDocument || a : v;
          return g !== n && 9 === g.nodeType && g.documentElement
            ? ((n = g),
              (o = n.documentElement),
              (p = !f(n)),
              v !== n &&
                (e = n.defaultView) &&
                e.top !== e &&
                (e.addEventListener
                  ? e.addEventListener("unload", da, !1)
                  : e.attachEvent && e.attachEvent("onunload", da)),
              (c.attributes = ja(function (a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (c.getElementsByTagName = ja(function (a) {
                return (
                  a.appendChild(n.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (c.getElementsByClassName = Y.test(n.getElementsByClassName)),
              (c.getById = ja(function (a) {
                return (
                  (o.appendChild(a).id = u),
                  !n.getElementsByName || !n.getElementsByName(u).length
                );
              })),
              c.getById
                ? ((d.filter.ID = function (a) {
                    var b = a.replace(_, aa);
                    return function (a) {
                      return a.getAttribute("id") === b;
                    };
                  }),
                  (d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                      var c = b.getElementById(a);
                      return c ? [c] : [];
                    }
                  }))
                : ((d.filter.ID = function (a) {
                    var b = a.replace(_, aa);
                    return function (a) {
                      var c =
                        "undefined" != typeof a.getAttributeNode &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  }),
                  (d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                      var c,
                        d,
                        e,
                        f = b.getElementById(a);
                      if (f) {
                        if (
                          ((c = f.getAttributeNode("id")), c && c.value === a)
                        )
                          return [f];
                        (e = b.getElementsByName(a)), (d = 0);
                        while ((f = e[d++]))
                          if (
                            ((c = f.getAttributeNode("id")), c && c.value === a)
                          )
                            return [f];
                      }
                      return [];
                    }
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName
                      ? b.getElementsByTagName(a)
                      : c.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ("*" === a) {
                      while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  if ("undefined" != typeof b.getElementsByClassName && p)
                    return b.getElementsByClassName(a);
                }),
              (r = []),
              (q = []),
              (c.qsa = Y.test(n.querySelectorAll)) &&
                (ja(function (a) {
                  (o.appendChild(a).innerHTML =
                    "<a id='" +
                    u +
                    "'></a><select id='" +
                    u +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowcapture^='']").length &&
                      q.push("[*^$]=" + K + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length ||
                      q.push("\\[" + K + "*(?:value|" + J + ")"),
                    a.querySelectorAll("[id~=" + u + "-]").length ||
                      q.push("~="),
                    a.querySelectorAll(":checked").length || q.push(":checked"),
                    a.querySelectorAll("a#" + u + "+*").length ||
                      q.push(".#.+[+~]");
                }),
                ja(function (a) {
                  a.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var b = n.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                      q.push("name" + K + "*[*^$|!~]?="),
                    2 !== a.querySelectorAll(":enabled").length &&
                      q.push(":enabled", ":disabled"),
                    (o.appendChild(a).disabled = !0),
                    2 !== a.querySelectorAll(":disabled").length &&
                      q.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    q.push(",.*:");
                })),
              (c.matchesSelector = Y.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector)
              )) &&
                ja(function (a) {
                  (c.disconnectedMatch = s.call(a, "*")),
                    s.call(a, "[s!='']:x"),
                    r.push("!=", N);
                }),
              (q = q.length && new RegExp(q.join("|"))),
              (r = r.length && new RegExp(r.join("|"))),
              (b = Y.test(o.compareDocumentPosition)),
              (t =
                b || Y.test(o.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b) while ((b = b.parentNode)) if (b === a) return !0;
                      return !1;
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var d =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d
                      ? d
                      : ((d =
                          (a.ownerDocument || a) === (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1),
                        1 & d ||
                        (!c.sortDetached && b.compareDocumentPosition(a) === d)
                          ? a === n || (a.ownerDocument === v && t(v, a))
                            ? -1
                            : b === n || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                            ? I(k, a) - I(k, b)
                            : 0
                          : 4 & d
                          ? -1
                          : 1);
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var c,
                      d = 0,
                      e = a.parentNode,
                      f = b.parentNode,
                      g = [a],
                      h = [b];
                    if (!e || !f)
                      return a === n
                        ? -1
                        : b === n
                        ? 1
                        : e
                        ? -1
                        : f
                        ? 1
                        : k
                        ? I(k, a) - I(k, b)
                        : 0;
                    if (e === f) return la(a, b);
                    c = a;
                    while ((c = c.parentNode)) g.unshift(c);
                    c = b;
                    while ((c = c.parentNode)) h.unshift(c);
                    while (g[d] === h[d]) d++;
                    return d
                      ? la(g[d], h[d])
                      : g[d] === v
                      ? -1
                      : h[d] === v
                      ? 1
                      : 0;
                  }),
              n)
            : n;
        }),
      (ga.matches = function (a, b) {
        return ga(a, null, null, b);
      }),
      (ga.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(S, "='$1']")),
          c.matchesSelector &&
            p &&
            !A[b + " "] &&
            (!r || !r.test(b)) &&
            (!q || !q.test(b)))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return ga(b, n, null, [a]).length > 0;
      }),
      (ga.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (ga.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (ga.escape = function (a) {
        return (a + "").replace(ba, ca);
      }),
      (ga.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (ga.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = ga.getText =
        function (a) {
          var b,
            c = "",
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else while ((b = a[d++])) c += e(b);
          return c;
        }),
      (d = ga.selectors =
        {
          cacheLength: 50,
          createPseudo: ia,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(_, aa)),
                (a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa)),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1].slice(0, 3)
                  ? (a[3] || ga.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ("even" === a[3] || "odd" === a[3]))),
                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                  : a[3] && ga.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return V.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || "")
                    : c &&
                      T.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(")", c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(_, aa).toLowerCase();
              return "*" === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = y[a + " "];
              return (
                b ||
                ((b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) &&
                  y(a, function (a) {
                    return b.test(
                      ("string" == typeof a.className && a.className) ||
                        ("undefined" != typeof a.getAttribute &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = ga.attr(d, a);
                return null == e
                  ? "!=" === b
                  : !b ||
                      ((e += ""),
                      "=" === b
                        ? e === c
                        : "!=" === b
                        ? e !== c
                        : "^=" === b
                        ? c && 0 === e.indexOf(c)
                        : "*=" === b
                        ? c && e.indexOf(c) > -1
                        : "$=" === b
                        ? c && e.slice(-c.length) === c
                        : "~=" === b
                        ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1
                        : "|=" === b &&
                          (e === c || e.slice(0, c.length + 1) === c + "-"));
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? "nextSibling" : "previousSibling",
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h,
                      t = !1;
                    if (q) {
                      if (f) {
                        while (p) {
                          m = b;
                          while ((m = m[p]))
                            if (
                              h
                                ? m.nodeName.toLowerCase() === r
                                : 1 === m.nodeType
                            )
                              return !1;
                          o = p = "only" === a && !o && "nextSibling";
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        (m = q),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n && j[2]),
                          (m = n && q.childNodes[n]);
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (1 === m.nodeType && ++t && m === b) {
                            k[a] = [w, n, t];
                            break;
                          }
                      } else if (
                        (s &&
                          ((m = b),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n)),
                        t === !1)
                      )
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (
                            (h
                              ? m.nodeName.toLowerCase() === r
                              : 1 === m.nodeType) &&
                            ++t &&
                            (s &&
                              ((l = m[u] || (m[u] = {})),
                              (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                              (k[a] = [w, t])),
                            m === b)
                          )
                            break;
                      return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                e =
                  d.pseudos[a] ||
                  d.setFilters[a.toLowerCase()] ||
                  ga.error("unsupported pseudo: " + a);
              return e[u]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, "", b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ia(function (a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length;
                        while (g--) (d = I(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function (a) {
                        return e(a, 0, c);
                      })
                : e;
            },
          },
          pseudos: {
            not: ia(function (a) {
              var b = [],
                c = [],
                d = h(a.replace(P, "$1"));
              return d[u]
                ? ia(function (a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length;
                    while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (
                      (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                    );
                  };
            }),
            has: ia(function (a) {
              return function (b) {
                return ga(a, b).length > 0;
              };
            }),
            contains: ia(function (a) {
              return (
                (a = a.replace(_, aa)),
                function (b) {
                  return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                }
              );
            }),
            lang: ia(function (a) {
              return (
                U.test(a || "") || ga.error("unsupported lang: " + a),
                (a = a.replace(_, aa).toLowerCase()),
                function (b) {
                  var c;
                  do
                    if (
                      (c = p
                        ? b.lang
                        : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || 0 === c.indexOf(a + "-")
                      );
                  while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === o;
            },
            focus: function (a) {
              return (
                a === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: oa(!1),
            disabled: oa(!0),
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !d.pseudos.empty(a);
            },
            header: function (a) {
              return X.test(a.nodeName);
            },
            input: function (a) {
              return W.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            text: function (a) {
              var b;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === a.type &&
                (null == (b = a.getAttribute("type")) ||
                  "text" === b.toLowerCase())
              );
            },
            first: pa(function () {
              return [0];
            }),
            last: pa(function (a, b) {
              return [b - 1];
            }),
            eq: pa(function (a, b, c) {
              return [c < 0 ? c + b : c];
            }),
            even: pa(function (a, b) {
              for (var c = 0; c < b; c += 2) a.push(c);
              return a;
            }),
            odd: pa(function (a, b) {
              for (var c = 1; c < b; c += 2) a.push(c);
              return a;
            }),
            lt: pa(function (a, b, c) {
              for (var d = c < 0 ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: pa(function (a, b, c) {
              for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = ma(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);
    function ra() {}
    (ra.prototype = d.filters = d.pseudos),
      (d.setFilters = new ra()),
      (g = ga.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];
          if (k) return b ? 0 : k.slice(0);
          (h = a), (i = []), (j = d.preFilter);
          while (h) {
            (c && !(e = Q.exec(h))) ||
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = R.exec(h)) &&
                ((c = e.shift()),
                f.push({ value: c, type: e[0].replace(P, " ") }),
                (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = V[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                f.push({ value: c, type: g, matches: e }),
                (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        });
    function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
      return d;
    }
    function ta(a, b, c) {
      var d = b.dir,
        e = b.next,
        f = e || d,
        g = c && "parentNode" === f,
        h = x++;
      return b.first
        ? function (b, c, e) {
            while ((b = b[d])) if (1 === b.nodeType || g) return a(b, c, e);
            return !1;
          }
        : function (b, c, i) {
            var j,
              k,
              l,
              m = [w, h];
            if (i) {
              while ((b = b[d]))
                if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || g)
                  if (
                    ((l = b[u] || (b[u] = {})),
                    (k = l[b.uniqueID] || (l[b.uniqueID] = {})),
                    e && e === b.nodeName.toLowerCase())
                  )
                    b = b[d] || b;
                  else {
                    if ((j = k[f]) && j[0] === w && j[1] === h)
                      return (m[2] = j[2]);
                    if (((k[f] = m), (m[2] = a(b, c, i)))) return !0;
                  }
            return !1;
          };
    }
    function ua(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function va(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
      return c;
    }
    function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
        (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
      return g;
    }
    function xa(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = xa(d)),
        e && !e[u] && (e = xa(e, f)),
        ia(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || va(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : wa(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = wa(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? I(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = wa(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : G.apply(g, r);
        })
      );
    }
    function ya(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = ta(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = ta(
            function (a) {
              return I(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        i < f;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [ta(ua(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; e < f; e++) if (d.relative[a[e].type]) break;
            return xa(
              i > 1 && ua(m),
              i > 1 &&
                sa(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(P, "$1"),
              c,
              i < e && ya(a.slice(i, e)),
              e < f && ya((a = a.slice(e))),
              e < f && sa(a)
            );
          }
          m.push(c);
        }
      return ua(m);
    }
    function za(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            o,
            q,
            r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || (e && d.find.TAG("*", k)),
            y = (w += null == v ? 1 : Math.random() || 0.1),
            z = x.length;
          for (
            k && (j = g === n || g || k);
            s !== z && null != (l = x[s]);
            s++
          ) {
            if (e && l) {
              (o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
              while ((q = a[o++]))
                if (q(l, g || n, h)) {
                  i.push(l);
                  break;
                }
              k && (w = y);
            }
            c && ((l = !q && l) && r--, f && t.push(l));
          }
          if (((r += s), c && s !== r)) {
            o = 0;
            while ((q = b[o++])) q(t, u, g, h);
            if (f) {
              if (r > 0) while (s--) t[s] || u[s] || (u[s] = E.call(i));
              u = wa(u);
            }
            G.apply(i, u),
              k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
          }
          return k && ((w = y), (j = v)), t;
        };
      return c ? ia(f) : f;
    }
    return (
      (h = ga.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + " "];
          if (!f) {
            b || (b = g(a)), (c = b.length);
            while (c--) (f = ya(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, za(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = ga.select =
        function (a, b, c, e) {
          var f,
            i,
            j,
            k,
            l,
            m = "function" == typeof a && a,
            n = !e && g((a = m.selector || a));
          if (((c = c || []), 1 === n.length)) {
            if (
              ((i = n[0] = n[0].slice(0)),
              i.length > 2 &&
                "ID" === (j = i[0]).type &&
                9 === b.nodeType &&
                p &&
                d.relative[i[1].type])
            ) {
              if (
                ((b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0]), !b)
              )
                return c;
              m && (b = b.parentNode), (a = a.slice(i.shift().value.length));
            }
            f = V.needsContext.test(a) ? 0 : i.length;
            while (f--) {
              if (((j = i[f]), d.relative[(k = j.type)])) break;
              if (
                (l = d.find[k]) &&
                (e = l(
                  j.matches[0].replace(_, aa),
                  ($.test(i[0].type) && qa(b.parentNode)) || b
                ))
              ) {
                if ((i.splice(f, 1), (a = e.length && sa(i)), !a))
                  return G.apply(c, e), c;
                break;
              }
            }
          }
          return (
            (m || h(a, n))(
              e,
              b,
              !p,
              c,
              !b || ($.test(a) && qa(b.parentNode)) || b
            ),
            c
          );
        }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ja(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
      })),
      ja(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        ka("type|href|height|width", function (a, b, c) {
          if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ja(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        ka("value", function (a, b, c) {
          if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
        }),
      ja(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        ka(J, function (a, b, c) {
          var d;
          if (!c)
            return a[b] === !0
              ? b.toLowerCase()
              : (d = a.getAttributeNode(b)) && d.specified
              ? d.value
              : null;
        }),
      ga
    );
  })(a);
  (r.find = x),
    (r.expr = x.selectors),
    (r.expr[":"] = r.expr.pseudos),
    (r.uniqueSort = r.unique = x.uniqueSort),
    (r.text = x.getText),
    (r.isXMLDoc = x.isXML),
    (r.contains = x.contains),
    (r.escapeSelector = x.escape);
  var y = function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && r(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    z = function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
    A = r.expr.match.needsContext;
  function B(a, b) {
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
  }
  var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    D = /^.[^:#\[\.,]*$/;
  function E(a, b, c) {
    return r.isFunction(b)
      ? r.grep(a, function (a, d) {
          return !!b.call(a, d, a) !== c;
        })
      : b.nodeType
      ? r.grep(a, function (a) {
          return (a === b) !== c;
        })
      : "string" != typeof b
      ? r.grep(a, function (a) {
          return i.call(b, a) > -1 !== c;
        })
      : D.test(b)
      ? r.filter(b, a, c)
      : ((b = r.filter(b, a)),
        r.grep(a, function (a) {
          return i.call(b, a) > -1 !== c && 1 === a.nodeType;
        }));
  }
  (r.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? r.find.matchesSelector(d, a)
          ? [d]
          : []
        : r.find.matches(
            a,
            r.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    r.fn.extend({
      find: function (a) {
        var b,
          c,
          d = this.length,
          e = this;
        if ("string" != typeof a)
          return this.pushStack(
            r(a).filter(function () {
              for (b = 0; b < d; b++) if (r.contains(e[b], this)) return !0;
            })
          );
        for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
        return d > 1 ? r.uniqueSort(c) : c;
      },
      filter: function (a) {
        return this.pushStack(E(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(E(this, a || [], !0));
      },
      is: function (a) {
        return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1)
          .length;
      },
    });
  var F,
    G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    H = (r.fn.init = function (a, b, c) {
      var e, f;
      if (!a) return this;
      if (((c = c || F), "string" == typeof a)) {
        if (
          ((e =
            "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
              ? [null, a, null]
              : G.exec(a)),
          !e || (!e[1] && b))
        )
          return !b || b.jquery
            ? (b || c).find(a)
            : this.constructor(b).find(a);
        if (e[1]) {
          if (
            ((b = b instanceof r ? b[0] : b),
            r.merge(
              this,
              r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)
            ),
            C.test(e[1]) && r.isPlainObject(b))
          )
            for (e in b)
              r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this;
        }
        return (
          (f = d.getElementById(e[2])),
          f && ((this[0] = f), (this.length = 1)),
          this
        );
      }
      return a.nodeType
        ? ((this[0] = a), (this.length = 1), this)
        : r.isFunction(a)
        ? void 0 !== c.ready
          ? c.ready(a)
          : a(r)
        : r.makeArray(a, this);
    });
  (H.prototype = r.fn), (F = r(d));
  var I = /^(?:parents|prev(?:Until|All))/,
    J = { children: !0, contents: !0, next: !0, prev: !0 };
  r.fn.extend({
    has: function (a) {
      var b = r(a, this),
        c = b.length;
      return this.filter(function () {
        for (var a = 0; a < c; a++) if (r.contains(this, b[a])) return !0;
      });
    },
    closest: function (a, b) {
      var c,
        d = 0,
        e = this.length,
        f = [],
        g = "string" != typeof a && r(a);
      if (!A.test(a))
        for (; d < e; d++)
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && r.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
      return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
    },
    index: function (a) {
      return a
        ? "string" == typeof a
          ? i.call(r(a), this[0])
          : i.call(this, a.jquery ? a[0] : a)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    },
  });
  function K(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a;
  }
  r.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return y(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return y(a, "parentNode", c);
      },
      next: function (a) {
        return K(a, "nextSibling");
      },
      prev: function (a) {
        return K(a, "previousSibling");
      },
      nextAll: function (a) {
        return y(a, "nextSibling");
      },
      prevAll: function (a) {
        return y(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return y(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return y(a, "previousSibling", c);
      },
      siblings: function (a) {
        return z((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return z(a.firstChild);
      },
      contents: function (a) {
        return B(a, "iframe")
          ? a.contentDocument
          : (B(a, "template") && (a = a.content || a),
            r.merge([], a.childNodes));
      },
    },
    function (a, b) {
      r.fn[a] = function (c, d) {
        var e = r.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = r.filter(d, e)),
          this.length > 1 &&
            (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()),
          this.pushStack(e)
        );
      };
    }
  );
  var L = /[^\x20\t\r\n\f]+/g;
  function M(a) {
    var b = {};
    return (
      r.each(a.match(L) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  r.Callbacks = function (a) {
    a = "string" == typeof a ? M(a) : r.extend({}, a);
    var b,
      c,
      d,
      e,
      f = [],
      g = [],
      h = -1,
      i = function () {
        for (e = e || a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length)
            f[h].apply(c[0], c[1]) === !1 &&
              a.stopOnFalse &&
              ((h = f.length), (c = !1));
        }
        a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
      },
      j = {
        add: function () {
          return (
            f &&
              (c && !b && ((h = f.length - 1), g.push(c)),
              (function d(b) {
                r.each(b, function (b, c) {
                  r.isFunction(c)
                    ? (a.unique && j.has(c)) || f.push(c)
                    : c && c.length && "string" !== r.type(c) && d(c);
                });
              })(arguments),
              c && !b && i()),
            this
          );
        },
        remove: function () {
          return (
            r.each(arguments, function (a, b) {
              var c;
              while ((c = r.inArray(b, f, c)) > -1)
                f.splice(c, 1), c <= h && h--;
            }),
            this
          );
        },
        has: function (a) {
          return a ? r.inArray(a, f) > -1 : f.length > 0;
        },
        empty: function () {
          return f && (f = []), this;
        },
        disable: function () {
          return (e = g = []), (f = c = ""), this;
        },
        disabled: function () {
          return !f;
        },
        lock: function () {
          return (e = g = []), c || b || (f = c = ""), this;
        },
        locked: function () {
          return !!e;
        },
        fireWith: function (a, c) {
          return (
            e ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              g.push(c),
              b || i()),
            this
          );
        },
        fire: function () {
          return j.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return j;
  };
  function N(a) {
    return a;
  }
  function O(a) {
    throw a;
  }
  function P(a, b, c, d) {
    var e;
    try {
      a && r.isFunction((e = a.promise))
        ? e.call(a).done(b).fail(c)
        : a && r.isFunction((e = a.then))
        ? e.call(a, b, c)
        : b.apply(void 0, [a].slice(d));
    } catch (a) {
      c.apply(void 0, [a]);
    }
  }
  r.extend({
    Deferred: function (b) {
      var c = [
          [
            "notify",
            "progress",
            r.Callbacks("memory"),
            r.Callbacks("memory"),
            2,
          ],
          [
            "resolve",
            "done",
            r.Callbacks("once memory"),
            r.Callbacks("once memory"),
            0,
            "resolved",
          ],
          [
            "reject",
            "fail",
            r.Callbacks("once memory"),
            r.Callbacks("once memory"),
            1,
            "rejected",
          ],
        ],
        d = "pending",
        e = {
          state: function () {
            return d;
          },
          always: function () {
            return f.done(arguments).fail(arguments), this;
          },
          catch: function (a) {
            return e.then(null, a);
          },
          pipe: function () {
            var a = arguments;
            return r
              .Deferred(function (b) {
                r.each(c, function (c, d) {
                  var e = r.isFunction(a[d[4]]) && a[d[4]];
                  f[d[1]](function () {
                    var a = e && e.apply(this, arguments);
                    a && r.isFunction(a.promise)
                      ? a
                          .promise()
                          .progress(b.notify)
                          .done(b.resolve)
                          .fail(b.reject)
                      : b[d[0] + "With"](this, e ? [a] : arguments);
                  });
                }),
                  (a = null);
              })
              .promise();
          },
          then: function (b, d, e) {
            var f = 0;
            function g(b, c, d, e) {
              return function () {
                var h = this,
                  i = arguments,
                  j = function () {
                    var a, j;
                    if (!(b < f)) {
                      if (((a = d.apply(h, i)), a === c.promise()))
                        throw new TypeError("Thenable self-resolution");
                      (j =
                        a &&
                        ("object" == typeof a || "function" == typeof a) &&
                        a.then),
                        r.isFunction(j)
                          ? e
                            ? j.call(a, g(f, c, N, e), g(f, c, O, e))
                            : (f++,
                              j.call(
                                a,
                                g(f, c, N, e),
                                g(f, c, O, e),
                                g(f, c, N, c.notifyWith)
                              ))
                          : (d !== N && ((h = void 0), (i = [a])),
                            (e || c.resolveWith)(h, i));
                    }
                  },
                  k = e
                    ? j
                    : function () {
                        try {
                          j();
                        } catch (a) {
                          r.Deferred.exceptionHook &&
                            r.Deferred.exceptionHook(a, k.stackTrace),
                            b + 1 >= f &&
                              (d !== O && ((h = void 0), (i = [a])),
                              c.rejectWith(h, i));
                        }
                      };
                b
                  ? k()
                  : (r.Deferred.getStackHook &&
                      (k.stackTrace = r.Deferred.getStackHook()),
                    a.setTimeout(k));
              };
            }
            return r
              .Deferred(function (a) {
                c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)),
                  c[1][3].add(g(0, a, r.isFunction(b) ? b : N)),
                  c[2][3].add(g(0, a, r.isFunction(d) ? d : O));
              })
              .promise();
          },
          promise: function (a) {
            return null != a ? r.extend(a, e) : e;
          },
        },
        f = {};
      return (
        r.each(c, function (a, b) {
          var g = b[2],
            h = b[5];
          (e[b[1]] = g.add),
            h &&
              g.add(
                function () {
                  d = h;
                },
                c[3 - a][2].disable,
                c[0][2].lock
              ),
            g.add(b[3].fire),
            (f[b[0]] = function () {
              return (
                f[b[0] + "With"](this === f ? void 0 : this, arguments), this
              );
            }),
            (f[b[0] + "With"] = g.fireWith);
        }),
        e.promise(f),
        b && b.call(f, f),
        f
      );
    },
    when: function (a) {
      var b = arguments.length,
        c = b,
        d = Array(c),
        e = f.call(arguments),
        g = r.Deferred(),
        h = function (a) {
          return function (c) {
            (d[a] = this),
              (e[a] = arguments.length > 1 ? f.call(arguments) : c),
              --b || g.resolveWith(d, e);
          };
        };
      if (
        b <= 1 &&
        (P(a, g.done(h(c)).resolve, g.reject, !b),
        "pending" === g.state() || r.isFunction(e[c] && e[c].then))
      )
        return g.then();
      while (c--) P(e[c], h(c), g.reject);
      return g.promise();
    },
  });
  var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (r.Deferred.exceptionHook = function (b, c) {
    a.console &&
      a.console.warn &&
      b &&
      Q.test(b.name) &&
      a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }),
    (r.readyException = function (b) {
      a.setTimeout(function () {
        throw b;
      });
    });
  var R = r.Deferred();
  (r.fn.ready = function (a) {
    return (
      R.then(a)["catch"](function (a) {
        r.readyException(a);
      }),
      this
    );
  }),
    r.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (a) {
        (a === !0 ? --r.readyWait : r.isReady) ||
          ((r.isReady = !0),
          (a !== !0 && --r.readyWait > 0) || R.resolveWith(d, [r]));
      },
    }),
    (r.ready.then = R.then);
  function S() {
    d.removeEventListener("DOMContentLoaded", S),
      a.removeEventListener("load", S),
      r.ready();
  }
  "complete" === d.readyState ||
  ("loading" !== d.readyState && !d.documentElement.doScroll)
    ? a.setTimeout(r.ready)
    : (d.addEventListener("DOMContentLoaded", S),
      a.addEventListener("load", S));
  var T = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === r.type(c)) {
        e = !0;
        for (h in c) T(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        r.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(r(a), c);
              }))),
        b)
      )
        for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
    U = function (a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
  function V() {
    this.expando = r.expando + V.uid++;
  }
  (V.uid = 1),
    (V.prototype = {
      cache: function (a) {
        var b = a[this.expando];
        return (
          b ||
            ((b = {}),
            U(a) &&
              (a.nodeType
                ? (a[this.expando] = b)
                : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0,
                  }))),
          b
        );
      },
      set: function (a, b, c) {
        var d,
          e = this.cache(a);
        if ("string" == typeof b) e[r.camelCase(b)] = c;
        else for (d in b) e[r.camelCase(d)] = b[d];
        return e;
      },
      get: function (a, b) {
        return void 0 === b
          ? this.cache(a)
          : a[this.expando] && a[this.expando][r.camelCase(b)];
      },
      access: function (a, b, c) {
        return void 0 === b || (b && "string" == typeof b && void 0 === c)
          ? this.get(a, b)
          : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function (a, b) {
        var c,
          d = a[this.expando];
        if (void 0 !== d) {
          if (void 0 !== b) {
            Array.isArray(b)
              ? (b = b.map(r.camelCase))
              : ((b = r.camelCase(b)), (b = b in d ? [b] : b.match(L) || [])),
              (c = b.length);
            while (c--) delete d[b[c]];
          }
          (void 0 === b || r.isEmptyObject(d)) &&
            (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando]);
        }
      },
      hasData: function (a) {
        var b = a[this.expando];
        return void 0 !== b && !r.isEmptyObject(b);
      },
    });
  var W = new V(),
    X = new V(),
    Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;
  function $(a) {
    return (
      "true" === a ||
      ("false" !== a &&
        ("null" === a
          ? null
          : a === +a + ""
          ? +a
          : Y.test(a)
          ? JSON.parse(a)
          : a))
    );
  }
  function _(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((d = "data-" + b.replace(Z, "-$&").toLowerCase()),
        (c = a.getAttribute(d)),
        "string" == typeof c)
      ) {
        try {
          c = $(c);
        } catch (e) {}
        X.set(a, b, c);
      } else c = void 0;
    return c;
  }
  r.extend({
    hasData: function (a) {
      return X.hasData(a) || W.hasData(a);
    },
    data: function (a, b, c) {
      return X.access(a, b, c);
    },
    removeData: function (a, b) {
      X.remove(a, b);
    },
    _data: function (a, b, c) {
      return W.access(a, b, c);
    },
    _removeData: function (a, b) {
      W.remove(a, b);
    },
  }),
    r.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = X.get(f)), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = r.camelCase(d.slice(5))), _(f, d, e[d])));
            W.set(f, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              X.set(this, a);
            })
          : T(
              this,
              function (b) {
                var c;
                if (f && void 0 === b) {
                  if (((c = X.get(f, a)), void 0 !== c)) return c;
                  if (((c = _(f, a)), void 0 !== c)) return c;
                } else
                  this.each(function () {
                    X.set(this, a, b);
                  });
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (a) {
        return this.each(function () {
          X.remove(this, a);
        });
      },
    }),
    r.extend({
      queue: function (a, b, c) {
        var d;
        if (a)
          return (
            (b = (b || "fx") + "queue"),
            (d = W.get(a, b)),
            c &&
              (!d || Array.isArray(c)
                ? (d = W.access(a, b, r.makeArray(c)))
                : d.push(c)),
            d || []
          );
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = r.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = r._queueHooks(a, b),
          g = function () {
            r.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          W.get(a, c) ||
          W.access(a, c, {
            empty: r.Callbacks("once memory").add(function () {
              W.remove(a, [b + "queue", c]);
            }),
          })
        );
      },
    }),
    r.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? r.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          r.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = r.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = W.get(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
    ca = ["Top", "Right", "Bottom", "Left"],
    da = function (a, b) {
      return (
        (a = b || a),
        "none" === a.style.display ||
          ("" === a.style.display &&
            r.contains(a.ownerDocument, a) &&
            "none" === r.css(a, "display"))
      );
    },
    ea = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    };
  function fa(a, b, c, d) {
    var e,
      f = 1,
      g = 20,
      h = d
        ? function () {
            return d.cur();
          }
        : function () {
            return r.css(a, b, "");
          },
      i = h(),
      j = (c && c[3]) || (r.cssNumber[b] ? "" : "px"),
      k = (r.cssNumber[b] || ("px" !== j && +i)) && ba.exec(r.css(a, b));
    if (k && k[3] !== j) {
      (j = j || k[3]), (c = c || []), (k = +i || 1);
      do (f = f || ".5"), (k /= f), r.style(a, b, k + j);
      while (f !== (f = h() / i) && 1 !== f && --g);
    }
    return (
      c &&
        ((k = +k || +i || 0),
        (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
        d && ((d.unit = j), (d.start = k), (d.end = e))),
      e
    );
  }
  var ga = {};
  function ha(a) {
    var b,
      c = a.ownerDocument,
      d = a.nodeName,
      e = ga[d];
    return e
      ? e
      : ((b = c.body.appendChild(c.createElement(d))),
        (e = r.css(b, "display")),
        b.parentNode.removeChild(b),
        "none" === e && (e = "block"),
        (ga[d] = e),
        e);
  }
  function ia(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++)
      (d = a[f]),
        d.style &&
          ((c = d.style.display),
          b
            ? ("none" === c &&
                ((e[f] = W.get(d, "display") || null),
                e[f] || (d.style.display = "")),
              "" === d.style.display && da(d) && (e[f] = ha(d)))
            : "none" !== c && ((e[f] = "none"), W.set(d, "display", c)));
    for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
    return a;
  }
  r.fn.extend({
    show: function () {
      return ia(this, !0);
    },
    hide: function () {
      return ia(this);
    },
    toggle: function (a) {
      return "boolean" == typeof a
        ? a
          ? this.show()
          : this.hide()
        : this.each(function () {
            da(this) ? r(this).show() : r(this).hide();
          });
    },
  });
  var ja = /^(?:checkbox|radio)$/i,
    ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    la = /^$|\/(?:java|ecma)script/i,
    ma = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (ma.optgroup = ma.option),
    (ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead),
    (ma.th = ma.td);
  function na(a, b) {
    var c;
    return (
      (c =
        "undefined" != typeof a.getElementsByTagName
          ? a.getElementsByTagName(b || "*")
          : "undefined" != typeof a.querySelectorAll
          ? a.querySelectorAll(b || "*")
          : []),
      void 0 === b || (b && B(a, b)) ? r.merge([a], c) : c
    );
  }
  function oa(a, b) {
    for (var c = 0, d = a.length; c < d; c++)
      W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
  }
  var pa = /<|&#?\w+;/;
  function qa(a, b, c, d, e) {
    for (
      var f,
        g,
        h,
        i,
        j,
        k,
        l = b.createDocumentFragment(),
        m = [],
        n = 0,
        o = a.length;
      n < o;
      n++
    )
      if (((f = a[n]), f || 0 === f))
        if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
        else if (pa.test(f)) {
          (g = g || l.appendChild(b.createElement("div"))),
            (h = (ka.exec(f) || ["", ""])[1].toLowerCase()),
            (i = ma[h] || ma._default),
            (g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2]),
            (k = i[0]);
          while (k--) g = g.lastChild;
          r.merge(m, g.childNodes), (g = l.firstChild), (g.textContent = "");
        } else m.push(b.createTextNode(f));
    (l.textContent = ""), (n = 0);
    while ((f = m[n++]))
      if (d && r.inArray(f, d) > -1) e && e.push(f);
      else if (
        ((j = r.contains(f.ownerDocument, f)),
        (g = na(l.appendChild(f), "script")),
        j && oa(g),
        c)
      ) {
        k = 0;
        while ((f = g[k++])) la.test(f.type || "") && c.push(f);
      }
    return l;
  }
  !(function () {
    var a = d.createDocumentFragment(),
      b = a.appendChild(d.createElement("div")),
      c = d.createElement("input");
    c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      b.appendChild(c),
      (o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var ra = d.documentElement,
    sa = /^key/,
    ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ua = /^([^.]*)(?:\.(.+)|)/;
  function va() {
    return !0;
  }
  function wa() {
    return !1;
  }
  function xa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }
  function ya(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && ((d = d || c), (c = void 0));
      for (h in b) ya(a, h, c, d, b[h], f);
      return a;
    }
    if (
      (null == d && null == e
        ? ((e = c), (d = c = void 0))
        : null == e &&
          ("string" == typeof c
            ? ((e = d), (d = void 0))
            : ((e = d), (d = c), (c = void 0))),
      e === !1)
    )
      e = wa;
    else if (!e) return a;
    return (
      1 === f &&
        ((g = e),
        (e = function (a) {
          return r().off(a), g.apply(this, arguments);
        }),
        (e.guid = g.guid || (g.guid = r.guid++))),
      a.each(function () {
        r.event.add(this, b, e, d, c);
      })
    );
  }
  (r.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = W.get(a);
      if (q) {
        c.handler && ((f = c), (c = f.handler), (e = f.selector)),
          e && r.find.matchesSelector(ra, e),
          c.guid || (c.guid = r.guid++),
          (i = q.events) || (i = q.events = {}),
          (g = q.handle) ||
            (g = q.handle =
              function (b) {
                return "undefined" != typeof r && r.event.triggered !== b.type
                  ? r.event.dispatch.apply(a, arguments)
                  : void 0;
              }),
          (b = (b || "").match(L) || [""]),
          (j = b.length);
        while (j--)
          (h = ua.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || "").split(".").sort()),
            n &&
              ((l = r.event.special[n] || {}),
              (n = (e ? l.delegateType : l.bindType) || n),
              (l = r.event.special[n] || {}),
              (k = r.extend(
                {
                  type: n,
                  origType: p,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && r.expr.match.needsContext.test(e),
                  namespace: o.join("."),
                },
                f
              )),
              (m = i[n]) ||
                ((m = i[n] = []),
                (m.delegateCount = 0),
                (l.setup && l.setup.call(a, d, o, g) !== !1) ||
                  (a.addEventListener && a.addEventListener(n, g))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (r.event.global[n] = !0));
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = W.hasData(a) && W.get(a);
      if (q && (i = q.events)) {
        (b = (b || "").match(L) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = ua.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || "").split(".").sort()),
            n)
          ) {
            (l = r.event.special[n] || {}),
              (n = (d ? l.delegateType : l.bindType) || n),
              (m = i[n] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (g = f = m.length);
            while (f--)
              (k = m[f]),
                (!e && p !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k));
            g &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, o, q.handle) !== !1) ||
                r.removeEvent(a, n, q.handle),
              delete i[n]);
          } else for (n in i) r.event.remove(a, n + b[j], c, d, !0);
        r.isEmptyObject(i) && W.remove(a, "handle events");
      }
    },
    dispatch: function (a) {
      var b = r.event.fix(a),
        c,
        d,
        e,
        f,
        g,
        h,
        i = new Array(arguments.length),
        j = (W.get(this, "events") || {})[b.type] || [],
        k = r.event.special[b.type] || {};
      for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
      if (
        ((b.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, b) !== !1)
      ) {
        (h = r.event.handlers.call(this, b, j)), (c = 0);
        while ((f = h[c++]) && !b.isPropagationStopped()) {
          (b.currentTarget = f.elem), (d = 0);
          while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped())
            (b.rnamespace && !b.rnamespace.test(g.namespace)) ||
              ((b.handleObj = g),
              (b.data = g.data),
              (e = (
                (r.event.special[g.origType] || {}).handle || g.handler
              ).apply(f.elem, i)),
              void 0 !== e &&
                (b.result = e) === !1 &&
                (b.preventDefault(), b.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, b), b.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g,
        h = [],
        i = b.delegateCount,
        j = a.target;
      if (i && j.nodeType && !("click" === a.type && a.button >= 1))
        for (; j !== this; j = j.parentNode || this)
          if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
            for (f = [], g = {}, c = 0; c < i; c++)
              (d = b[c]),
                (e = d.selector + " "),
                void 0 === g[e] &&
                  (g[e] = d.needsContext
                    ? r(e, this).index(j) > -1
                    : r.find(e, this, null, [j]).length),
                g[e] && f.push(d);
            f.length && h.push({ elem: j, handlers: f });
          }
      return (
        (j = this), i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h
      );
    },
    addProp: function (a, b) {
      Object.defineProperty(r.Event.prototype, a, {
        enumerable: !0,
        configurable: !0,
        get: r.isFunction(b)
          ? function () {
              if (this.originalEvent) return b(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[a];
            },
        set: function (b) {
          Object.defineProperty(this, a, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: b,
          });
        },
      });
    },
    fix: function (a) {
      return a[r.expando] ? a : new r.Event(a);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== xa() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === xa() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && B(this, "input"))
            return this.click(), !1;
        },
        _default: function (a) {
          return B(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
  }),
    (r.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c);
    }),
    (r.Event = function (a, b) {
      return this instanceof r.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? va
                  : wa),
              (this.target =
                a.target && 3 === a.target.nodeType
                  ? a.target.parentNode
                  : a.target),
              (this.currentTarget = a.currentTarget),
              (this.relatedTarget = a.relatedTarget))
            : (this.type = a),
          b && r.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || r.now()),
          void (this[r.expando] = !0))
        : new r.Event(a, b);
    }),
    (r.Event.prototype = {
      constructor: r.Event,
      isDefaultPrevented: wa,
      isPropagationStopped: wa,
      isImmediatePropagationStopped: wa,
      isSimulated: !1,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = va),
          a && !this.isSimulated && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = va),
          a && !this.isSimulated && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = va),
          a && !this.isSimulated && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    r.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (a) {
          var b = a.button;
          return null == a.which && sa.test(a.type)
            ? null != a.charCode
              ? a.charCode
              : a.keyCode
            : !a.which && void 0 !== b && ta.test(a.type)
            ? 1 & b
              ? 1
              : 2 & b
              ? 3
              : 4 & b
              ? 2
              : 0
            : a.which;
        },
      },
      r.event.addProp
    ),
    r.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        r.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (e && (e === d || r.contains(d, e))) ||
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    r.fn.extend({
      on: function (a, b, c, d) {
        return ya(this, a, b, c, d);
      },
      one: function (a, b, c, d) {
        return ya(this, a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            r(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
          c === !1 && (c = wa),
          this.each(function () {
            r.event.remove(this, a, c, b);
          })
        );
      },
    });
  var za =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Aa = /<script|<style|<link/i,
    Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ca = /^true\/(.*)/,
    Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Ea(a, b) {
    return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? r(">tbody", a)[0] || a
      : a;
  }
  function Fa(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function Ga(a) {
    var b = Ca.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function Ha(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (
        W.hasData(a) &&
        ((f = W.access(a)), (g = W.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {});
        for (e in j)
          for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c]);
      }
      X.hasData(a) && ((h = X.access(a)), (i = r.extend({}, h)), X.set(b, i));
    }
  }
  function Ia(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && ja.test(a.type)
      ? (b.checked = a.checked)
      : ("input" !== c && "textarea" !== c) ||
        (b.defaultValue = a.defaultValue);
  }
  function Ja(a, b, c, d) {
    b = g.apply([], b);
    var e,
      f,
      h,
      i,
      j,
      k,
      l = 0,
      m = a.length,
      n = m - 1,
      q = b[0],
      s = r.isFunction(q);
    if (s || (m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)))
      return a.each(function (e) {
        var f = a.eq(e);
        s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
      });
    if (
      m &&
      ((e = qa(b, a[0].ownerDocument, !1, a, d)),
      (f = e.firstChild),
      1 === e.childNodes.length && (e = f),
      f || d)
    ) {
      for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++)
        (j = e),
          l !== n &&
            ((j = r.clone(j, !0, !0)), i && r.merge(h, na(j, "script"))),
          c.call(a[l], j, l);
      if (i)
        for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++)
          (j = h[l]),
            la.test(j.type || "") &&
              !W.access(j, "globalEval") &&
              r.contains(k, j) &&
              (j.src
                ? r._evalUrl && r._evalUrl(j.src)
                : p(j.textContent.replace(Da, ""), k));
    }
    return a;
  }
  function Ka(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
      c || 1 !== d.nodeType || r.cleanData(na(d)),
        d.parentNode &&
          (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")),
          d.parentNode.removeChild(d));
    return a;
  }
  r.extend({
    htmlPrefilter: function (a) {
      return a.replace(za, "<$1></$2>");
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.cloneNode(!0),
        i = r.contains(a.ownerDocument, a);
      if (
        !(
          o.noCloneChecked ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          r.isXMLDoc(a)
        )
      )
        for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++)
          Ia(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++)
            Ha(f[d], g[d]);
        else Ha(a, h);
      return (
        (g = na(h, "script")), g.length > 0 && oa(g, !i && na(a, "script")), h
      );
    },
    cleanData: function (a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
        if (U(c)) {
          if ((b = c[W.expando])) {
            if (b.events)
              for (d in b.events)
                e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            c[W.expando] = void 0;
          }
          c[X.expando] && (c[X.expando] = void 0);
        }
    },
  }),
    r.fn.extend({
      detach: function (a) {
        return Ka(this, a, !0);
      },
      remove: function (a) {
        return Ka(this, a);
      },
      text: function (a) {
        return T(
          this,
          function (a) {
            return void 0 === a
              ? r.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return Ja(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ea(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return Ja(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ea(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return Ja(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return Ja(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (r.cleanData(na(a, !1)), (a.textContent = ""));
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null != a && a),
          (b = null == b ? a : b),
          this.map(function () {
            return r.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return T(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if (
              "string" == typeof a &&
              !Aa.test(a) &&
              !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = r.htmlPrefilter(a);
              try {
                for (; c < d; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (r.cleanData(na(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = [];
        return Ja(
          this,
          arguments,
          function (b) {
            var c = this.parentNode;
            r.inArray(this, a) < 0 &&
              (r.cleanData(na(this)), c && c.replaceChild(b, this));
          },
          a
        );
      },
    }),
    r.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        r.fn[a] = function (a) {
          for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++)
            (c = g === f ? this : this.clone(!0)),
              r(e[g])[b](c),
              h.apply(d, c.get());
          return this.pushStack(d);
        };
      }
    );
  var La = /^margin/,
    Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
    Na = function (b) {
      var c = b.ownerDocument.defaultView;
      return (c && c.opener) || (c = a), c.getComputedStyle(b);
    };
  !(function () {
    function b() {
      if (i) {
        (i.style.cssText =
          "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (i.innerHTML = ""),
          ra.appendChild(h);
        var b = a.getComputedStyle(i);
        (c = "1%" !== b.top),
          (g = "2px" === b.marginLeft),
          (e = "4px" === b.width),
          (i.style.marginRight = "50%"),
          (f = "4px" === b.marginRight),
          ra.removeChild(h),
          (i = null);
      }
    }
    var c,
      e,
      f,
      g,
      h = d.createElement("div"),
      i = d.createElement("div");
    i.style &&
      ((i.style.backgroundClip = "content-box"),
      (i.cloneNode(!0).style.backgroundClip = ""),
      (o.clearCloneStyle = "content-box" === i.style.backgroundClip),
      (h.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      h.appendChild(i),
      r.extend(o, {
        pixelPosition: function () {
          return b(), c;
        },
        boxSizingReliable: function () {
          return b(), e;
        },
        pixelMarginRight: function () {
          return b(), f;
        },
        reliableMarginLeft: function () {
          return b(), g;
        },
      }));
  })();
  function Oa(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return (
      (c = c || Na(a)),
      c &&
        ((g = c.getPropertyValue(b) || c[b]),
        "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)),
        !o.pixelMarginRight() &&
          Ma.test(g) &&
          La.test(b) &&
          ((d = h.width),
          (e = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = d),
          (h.minWidth = e),
          (h.maxWidth = f))),
      void 0 !== g ? g + "" : g
    );
  }
  function Pa(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  var Qa = /^(none|table(?!-c[ea]).+)/,
    Ra = /^--/,
    Sa = { position: "absolute", visibility: "hidden", display: "block" },
    Ta = { letterSpacing: "0", fontWeight: "400" },
    Ua = ["Webkit", "Moz", "ms"],
    Va = d.createElement("div").style;
  function Wa(a) {
    if (a in Va) return a;
    var b = a[0].toUpperCase() + a.slice(1),
      c = Ua.length;
    while (c--) if (((a = Ua[c] + b), a in Va)) return a;
  }
  function Xa(a) {
    var b = r.cssProps[a];
    return b || (b = r.cssProps[a] = Wa(a) || a), b;
  }
  function Ya(a, b, c) {
    var d = ba.exec(b);
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }
  function Za(a, b, c, d, e) {
    var f,
      g = 0;
    for (
      f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
      f < 4;
      f += 2
    )
      "margin" === c && (g += r.css(a, c + ca[f], !0, e)),
        d
          ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)),
            "margin" !== c &&
              (g -= r.css(a, "border" + ca[f] + "Width", !0, e)))
          : ((g += r.css(a, "padding" + ca[f], !0, e)),
            "padding" !== c &&
              (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
    return g;
  }
  function $a(a, b, c) {
    var d,
      e = Na(a),
      f = Oa(a, b, e),
      g = "border-box" === r.css(a, "boxSizing", !1, e);
    return Ma.test(f)
      ? f
      : ((d = g && (o.boxSizingReliable() || f === a.style[b])),
        "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]),
        (f = parseFloat(f) || 0),
        f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
  }
  r.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Oa(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = r.camelCase(b),
          i = Ra.test(b),
          j = a.style;
        return (
          i || (b = Xa(h)),
          (g = r.cssHooks[b] || r.cssHooks[h]),
          void 0 === c
            ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : j[b]
            : ((f = typeof c),
              "string" === f &&
                (e = ba.exec(c)) &&
                e[1] &&
                ((c = fa(a, b, e)), (f = "number")),
              null != c &&
                c === c &&
                ("number" === f &&
                  (c += (e && e[3]) || (r.cssNumber[h] ? "" : "px")),
                o.clearCloneStyle ||
                  "" !== c ||
                  0 !== b.indexOf("background") ||
                  (j[b] = "inherit"),
                (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                  (i ? j.setProperty(b, c) : (j[b] = c))),
              void 0)
        );
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = r.camelCase(b),
        i = Ra.test(b);
      return (
        i || (b = Xa(h)),
        (g = r.cssHooks[b] || r.cssHooks[h]),
        g && "get" in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = Oa(a, b, d)),
        "normal" === e && b in Ta && (e = Ta[b]),
        "" === c || c
          ? ((f = parseFloat(e)), c === !0 || isFinite(f) ? f || 0 : e)
          : e
      );
    },
  }),
    r.each(["height", "width"], function (a, b) {
      r.cssHooks[b] = {
        get: function (a, c, d) {
          if (c)
            return !Qa.test(r.css(a, "display")) ||
              (a.getClientRects().length && a.getBoundingClientRect().width)
              ? $a(a, b, d)
              : ea(a, Sa, function () {
                  return $a(a, b, d);
                });
        },
        set: function (a, c, d) {
          var e,
            f = d && Na(a),
            g =
              d &&
              Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
          return (
            g &&
              (e = ba.exec(c)) &&
              "px" !== (e[3] || "px") &&
              ((a.style[b] = c), (c = r.css(a, b))),
            Ya(a, c, g)
          );
        },
      };
    }),
    (r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
      if (b)
        return (
          (parseFloat(Oa(a, "marginLeft")) ||
            a.getBoundingClientRect().left -
              ea(a, { marginLeft: 0 }, function () {
                return a.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (r.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            d < 4;
            d++
          )
            e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        La.test(a) || (r.cssHooks[a + b].set = Ya);
    }),
    r.fn.extend({
      css: function (a, b) {
        return T(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (Array.isArray(b)) {
              for (d = Na(a), e = b.length; g < e; g++)
                f[b[g]] = r.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
    });
  function _a(a, b, c, d, e) {
    return new _a.prototype.init(a, b, c, d, e);
  }
  (r.Tween = _a),
    (_a.prototype = {
      constructor: _a,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || r.easing._default),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (r.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = _a.propHooks[this.prop];
        return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = _a.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b =
                r.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : _a.propHooks._default.set(this),
          this
        );
      },
    }),
    (_a.prototype.init.prototype = _a.prototype),
    (_a.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return 1 !== a.elem.nodeType ||
            (null != a.elem[a.prop] && null == a.elem.style[a.prop])
            ? a.elem[a.prop]
            : ((b = r.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
        },
        set: function (a) {
          r.fx.step[a.prop]
            ? r.fx.step[a.prop](a)
            : 1 !== a.elem.nodeType ||
              (null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop])
            ? (a.elem[a.prop] = a.now)
            : r.style(a.elem, a.prop, a.now + a.unit);
        },
      },
    }),
    (_a.propHooks.scrollTop = _a.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (r.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (r.fx = _a.prototype.init),
    (r.fx.step = {});
  var ab,
    bb,
    cb = /^(?:toggle|show|hide)$/,
    db = /queueHooks$/;
  function eb() {
    bb &&
      (d.hidden === !1 && a.requestAnimationFrame
        ? a.requestAnimationFrame(eb)
        : a.setTimeout(eb, r.fx.interval),
      r.fx.tick());
  }
  function fb() {
    return (
      a.setTimeout(function () {
        ab = void 0;
      }),
      (ab = r.now())
    );
  }
  function gb(a, b) {
    var c,
      d = 0,
      e = { height: a };
    for (b = b ? 1 : 0; d < 4; d += 2 - b)
      (c = ca[d]), (e["margin" + c] = e["padding" + c] = a);
    return b && (e.opacity = e.width = a), e;
  }
  function hb(a, b, c) {
    for (
      var d,
        e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]),
        f = 0,
        g = e.length;
      f < g;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function ib(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = "width" in b || "height" in b,
      m = this,
      n = {},
      o = a.style,
      p = a.nodeType && da(a),
      q = W.get(a, "fxshow");
    c.queue ||
      ((g = r._queueHooks(a, "fx")),
      null == g.unqueued &&
        ((g.unqueued = 0),
        (h = g.empty.fire),
        (g.empty.fire = function () {
          g.unqueued || h();
        })),
      g.unqueued++,
      m.always(function () {
        m.always(function () {
          g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
        });
      }));
    for (d in b)
      if (((e = b[d]), cb.test(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))
        ) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0;
        }
        n[d] = (q && q[d]) || r.style(a, d);
      }
    if (((i = !r.isEmptyObject(b)), i || !r.isEmptyObject(n))) {
      l &&
        1 === a.nodeType &&
        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (j = q && q.display),
        null == j && (j = W.get(a, "display")),
        (k = r.css(a, "display")),
        "none" === k &&
          (j
            ? (k = j)
            : (ia([a], !0),
              (j = a.style.display || j),
              (k = r.css(a, "display")),
              ia([a]))),
        ("inline" === k || ("inline-block" === k && null != j)) &&
          "none" === r.css(a, "float") &&
          (i ||
            (m.done(function () {
              o.display = j;
            }),
            null == j && ((k = o.display), (j = "none" === k ? "" : k))),
          (o.display = "inline-block"))),
        c.overflow &&
          ((o.overflow = "hidden"),
          m.always(function () {
            (o.overflow = c.overflow[0]),
              (o.overflowX = c.overflow[1]),
              (o.overflowY = c.overflow[2]);
          })),
        (i = !1);
      for (d in n)
        i ||
          (q
            ? "hidden" in q && (p = q.hidden)
            : (q = W.access(a, "fxshow", { display: j })),
          f && (q.hidden = !p),
          p && ia([a], !0),
          m.done(function () {
            p || ia([a]), W.remove(a, "fxshow");
            for (d in n) r.style(a, d, n[d]);
          })),
          (i = hb(p ? q[d] : 0, d, m)),
          d in q || ((q[d] = i.start), p && ((i.end = i.start), (i.start = 0)));
    }
  }
  function jb(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = r.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        Array.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = r.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function kb(a, b, c) {
    var d,
      e,
      f = 0,
      g = kb.prefilters.length,
      h = r.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = ab || fb(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          g < i;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          f < 1 && i
            ? c
            : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: r.extend({}, b),
        opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: ab || fb(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = r.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; c < d; c++) j.tweens[c].run(1);
          return (
            b
              ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
              : h.rejectWith(a, [j, b]),
            this
          );
        },
      }),
      k = j.props;
    for (jb(k, j.opts.specialEasing); f < g; f++)
      if ((d = kb.prefilters[f].call(j, a, k, j.opts)))
        return (
          r.isFunction(d.stop) &&
            (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)),
          d
        );
    return (
      r.map(k, hb, j),
      r.isFunction(j.opts.start) && j.opts.start.call(a, j),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always),
      r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
    );
  }
  (r.Animation = r.extend(kb, {
    tweeners: {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b);
          return fa(c.elem, a, ba.exec(b), c), c;
        },
      ],
    },
    tweener: function (a, b) {
      r.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(L));
      for (var c, d = 0, e = a.length; d < e; d++)
        (c = a[d]),
          (kb.tweeners[c] = kb.tweeners[c] || []),
          kb.tweeners[c].unshift(b);
    },
    prefilters: [ib],
    prefilter: function (a, b) {
      b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
    },
  })),
    (r.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? r.extend({}, a)
          : {
              complete: c || (!c && b) || (r.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !r.isFunction(b) && b),
            };
      return (
        r.fx.off
          ? (d.duration = 0)
          : "number" != typeof d.duration &&
            (d.duration in r.fx.speeds
              ? (d.duration = r.fx.speeds[d.duration])
              : (d.duration = r.fx.speeds._default)),
        (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          r.isFunction(d.old) && d.old.call(this),
            d.queue && r.dequeue(this, d.queue);
        }),
        d
      );
    }),
    r.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(da)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = r.isEmptyObject(a),
          f = r.speed(b, c, d),
          g = function () {
            var b = kb(this, r.extend({}, a), f);
            (e || W.get(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = r.timers,
              g = W.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (!b && c) || r.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = W.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = r.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                r.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; b < g; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    r.each(["toggle", "show", "hide"], function (a, b) {
      var c = r.fn[b];
      r.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(gb(b, !0), a, d, e);
      };
    }),
    r.each(
      {
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        r.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (r.timers = []),
    (r.fx.tick = function () {
      var a,
        b = 0,
        c = r.timers;
      for (ab = r.now(); b < c.length; b++)
        (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
      c.length || r.fx.stop(), (ab = void 0);
    }),
    (r.fx.timer = function (a) {
      r.timers.push(a), r.fx.start();
    }),
    (r.fx.interval = 13),
    (r.fx.start = function () {
      bb || ((bb = !0), eb());
    }),
    (r.fx.stop = function () {
      bb = null;
    }),
    (r.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (r.fn.delay = function (b, c) {
      return (
        (b = r.fx ? r.fx.speeds[b] || b : b),
        (c = c || "fx"),
        this.queue(c, function (c, d) {
          var e = a.setTimeout(c, b);
          d.stop = function () {
            a.clearTimeout(e);
          };
        })
      );
    }),
    (function () {
      var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));
      (a.type = "checkbox"),
        (o.checkOn = "" !== a.value),
        (o.optSelected = c.selected),
        (a = d.createElement("input")),
        (a.value = "t"),
        (a.type = "radio"),
        (o.radioValue = "t" === a.value);
    })();
  var lb,
    mb = r.expr.attrHandle;
  r.fn.extend({
    attr: function (a, b) {
      return T(this, r.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        r.removeAttr(this, a);
      });
    },
  }),
    r.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return "undefined" == typeof a.getAttribute
            ? r.prop(a, b, c)
            : ((1 === f && r.isXMLDoc(a)) ||
                (e =
                  r.attrHooks[b.toLowerCase()] ||
                  (r.expr.match.bool.test(b) ? lb : void 0)),
              void 0 !== c
                ? null === c
                  ? void r.removeAttr(a, b)
                  : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a.setAttribute(b, c + ""), c)
                : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : ((d = r.find.attr(a, b)), null == d ? void 0 : d));
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!o.radioValue && "radio" === b && B(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
      removeAttr: function (a, b) {
        var c,
          d = 0,
          e = b && b.match(L);
        if (e && 1 === a.nodeType) while ((c = e[d++])) a.removeAttribute(c);
      },
    }),
    (lb = {
      set: function (a, b, c) {
        return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
      },
    }),
    r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = mb[b] || r.find.attr;
      mb[b] = function (a, b, d) {
        var e,
          f,
          g = b.toLowerCase();
        return (
          d ||
            ((f = mb[g]),
            (mb[g] = e),
            (e = null != c(a, b, d) ? g : null),
            (mb[g] = f)),
          e
        );
      };
    });
  var nb = /^(?:input|select|textarea|button)$/i,
    ob = /^(?:a|area)$/i;
  r.fn.extend({
    prop: function (a, b) {
      return T(this, r.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[r.propFix[a] || a];
      });
    },
  }),
    r.extend({
      prop: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return (
            (1 === f && r.isXMLDoc(a)) ||
              ((b = r.propFix[b] || b), (e = r.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = r.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : nb.test(a.nodeName) || (ob.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    o.optSelected ||
      (r.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function (a) {
          var b = a.parentNode;
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        },
      }),
    r.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        r.propFix[this.toLowerCase()] = this;
      }
    );
  function pb(a) {
    var b = a.match(L) || [];
    return b.join(" ");
  }
  function qb(a) {
    return (a.getAttribute && a.getAttribute("class")) || "";
  }
  r.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (r.isFunction(a))
        return this.each(function (b) {
          r(this).addClass(a.call(this, b, qb(this)));
        });
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while ((c = this[i++]))
          if (((e = qb(c)), (d = 1 === c.nodeType && " " + pb(e) + " "))) {
            g = 0;
            while ((f = b[g++])) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            (h = pb(d)), e !== h && c.setAttribute("class", h);
          }
      }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (r.isFunction(a))
        return this.each(function (b) {
          r(this).removeClass(a.call(this, b, qb(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while ((c = this[i++]))
          if (((e = qb(c)), (d = 1 === c.nodeType && " " + pb(e) + " "))) {
            g = 0;
            while ((f = b[g++]))
              while (d.indexOf(" " + f + " ") > -1)
                d = d.replace(" " + f + " ", " ");
            (h = pb(d)), e !== h && c.setAttribute("class", h);
          }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : r.isFunction(a)
        ? this.each(function (c) {
            r(this).toggleClass(a.call(this, c, qb(this), b), b);
          })
        : this.each(function () {
            var b, d, e, f;
            if ("string" === c) {
              (d = 0), (e = r(this)), (f = a.match(L) || []);
              while ((b = f[d++]))
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
            } else (void 0 !== a && "boolean" !== c) || ((b = qb(this)), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
          });
    },
    hasClass: function (a) {
      var b,
        c,
        d = 0;
      b = " " + a + " ";
      while ((c = this[d++]))
        if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1)
          return !0;
      return !1;
    },
  });
  var rb = /\r/g;
  r.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = r.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, r(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : Array.isArray(e) &&
                    (e = r.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  r.valHooks[this.type] ||
                  r.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
          );
      }
    },
  }),
    r.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = r.find.attr(a, "value");
            return null != b ? b : pb(r.text(a));
          },
        },
        select: {
          get: function (a) {
            var b,
              c,
              d,
              e = a.options,
              f = a.selectedIndex,
              g = "select-one" === a.type,
              h = g ? null : [],
              i = g ? f + 1 : e.length;
            for (d = f < 0 ? i : g ? f : 0; d < i; d++)
              if (
                ((c = e[d]),
                (c.selected || d === f) &&
                  !c.disabled &&
                  (!c.parentNode.disabled || !B(c.parentNode, "optgroup")))
              ) {
                if (((b = r(c).val()), g)) return b;
                h.push(b);
              }
            return h;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = r.makeArray(b),
              g = e.length;
            while (g--)
              (d = e[g]),
                (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) &&
                  (c = !0);
            return c || (a.selectedIndex = -1), f;
          },
        },
      },
    }),
    r.each(["radio", "checkbox"], function () {
      (r.valHooks[this] = {
        set: function (a, b) {
          if (Array.isArray(b))
            return (a.checked = r.inArray(r(a).val(), b) > -1);
        },
      }),
        o.checkOn ||
          (r.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    });
  var sb = /^(?:focusinfocus|focusoutblur)$/;
  r.extend(r.event, {
    trigger: function (b, c, e, f) {
      var g,
        h,
        i,
        j,
        k,
        m,
        n,
        o = [e || d],
        p = l.call(b, "type") ? b.type : b,
        q = l.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((h = i = e = e || d),
        3 !== e.nodeType &&
          8 !== e.nodeType &&
          !sb.test(p + r.event.triggered) &&
          (p.indexOf(".") > -1 &&
            ((q = p.split(".")), (p = q.shift()), q.sort()),
          (k = p.indexOf(":") < 0 && "on" + p),
          (b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b)),
          (b.isTrigger = f ? 2 : 3),
          (b.namespace = q.join(".")),
          (b.rnamespace = b.namespace
            ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = e),
          (c = null == c ? [b] : r.makeArray(c, [b])),
          (n = r.event.special[p] || {}),
          f || !n.trigger || n.trigger.apply(e, c) !== !1))
      ) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (
            j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode);
            h;
            h = h.parentNode
          )
            o.push(h), (i = h);
          i === (e.ownerDocument || d) &&
            o.push(i.defaultView || i.parentWindow || a);
        }
        g = 0;
        while ((h = o[g++]) && !b.isPropagationStopped())
          (b.type = g > 1 ? j : n.bindType || p),
            (m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle")),
            m && m.apply(h, c),
            (m = k && h[k]),
            m &&
              m.apply &&
              U(h) &&
              ((b.result = m.apply(h, c)),
              b.result === !1 && b.preventDefault());
        return (
          (b.type = p),
          f ||
            b.isDefaultPrevented() ||
            (n._default && n._default.apply(o.pop(), c) !== !1) ||
            !U(e) ||
            (k &&
              r.isFunction(e[p]) &&
              !r.isWindow(e) &&
              ((i = e[k]),
              i && (e[k] = null),
              (r.event.triggered = p),
              e[p](),
              (r.event.triggered = void 0),
              i && (e[k] = i))),
          b.result
        );
      }
    },
    simulate: function (a, b, c) {
      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });
      r.event.trigger(d, null, b);
    },
  }),
    r.fn.extend({
      trigger: function (a, b) {
        return this.each(function () {
          r.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        if (c) return r.event.trigger(a, b, c, !0);
      },
    }),
    r.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (a, b) {
        r.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    r.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    }),
    (o.focusin = "onfocusin" in a),
    o.focusin ||
      r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          r.event.simulate(b, a.target, r.event.fix(a));
        };
        r.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = W.access(d, b);
            e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = W.access(d, b) - 1;
            e
              ? W.access(d, b, e)
              : (d.removeEventListener(a, c, !0), W.remove(d, b));
          },
        };
      });
  var tb = a.location,
    ub = r.now(),
    vb = /\?/;
  r.parseXML = function (b) {
    var c;
    if (!b || "string" != typeof b) return null;
    try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }
    return (
      (c && !c.getElementsByTagName("parsererror").length) ||
        r.error("Invalid XML: " + b),
      c
    );
  };
  var wb = /\[\]$/,
    xb = /\r?\n/g,
    yb = /^(?:submit|button|image|reset|file)$/i,
    zb = /^(?:input|select|textarea|keygen)/i;
  function Ab(a, b, c, d) {
    var e;
    if (Array.isArray(b))
      r.each(b, function (b, e) {
        c || wb.test(a)
          ? d(a, e)
          : Ab(
              a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
              e,
              c,
              d
            );
      });
    else if (c || "object" !== r.type(b)) d(a, b);
    else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
  }
  (r.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        var c = r.isFunction(b) ? b() : b;
        d[d.length] =
          encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
      };
    if (Array.isArray(a) || (a.jquery && !r.isPlainObject(a)))
      r.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Ab(c, a[c], b, e);
    return d.join("&");
  }),
    r.fn.extend({
      serialize: function () {
        return r.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = r.prop(this, "elements");
          return a ? r.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !r(this).is(":disabled") &&
              zb.test(this.nodeName) &&
              !yb.test(a) &&
              (this.checked || !ja.test(a))
            );
          })
          .map(function (a, b) {
            var c = r(this).val();
            return null == c
              ? null
              : Array.isArray(c)
              ? r.map(c, function (a) {
                  return { name: b.name, value: a.replace(xb, "\r\n") };
                })
              : { name: b.name, value: c.replace(xb, "\r\n") };
          })
          .get();
      },
    });
  var Bb = /%20/g,
    Cb = /#.*$/,
    Db = /([?&])_=[^&]*/,
    Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Gb = /^(?:GET|HEAD)$/,
    Hb = /^\/\//,
    Ib = {},
    Jb = {},
    Kb = "*/".concat("*"),
    Lb = d.createElement("a");
  Lb.href = tb.href;
  function Mb(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(L) || [];
      if (r.isFunction(c))
        while ((d = f[e++]))
          "+" === d[0]
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function Nb(a, b, c, d) {
    var e = {},
      f = a === Jb;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        r.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function Ob(a, b) {
    var c,
      d,
      e = r.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && r.extend(!0, a, d), a;
  }
  function Pb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    if (f) return f !== i[0] && i.unshift(f), c[f];
  }
  function Qb(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  r.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: tb.href,
      type: "GET",
      isLocal: Fb.test(tb.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Kb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": r.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
    },
    ajaxPrefilter: Mb(Ib),
    ajaxTransport: Mb(Jb),
    ajax: function (b, c) {
      "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
      var e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o = r.ajaxSetup({}, c),
        p = o.context || o,
        q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
        s = r.Deferred(),
        t = r.Callbacks("once memory"),
        u = o.statusCode || {},
        v = {},
        w = {},
        x = "canceled",
        y = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (k) {
              if (!h) {
                h = {};
                while ((b = Eb.exec(g))) h[b[1].toLowerCase()] = b[2];
              }
              b = h[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return k ? g : null;
          },
          setRequestHeader: function (a, b) {
            return (
              null == k &&
                ((a = w[a.toLowerCase()] = w[a.toLowerCase()] || a),
                (v[a] = b)),
              this
            );
          },
          overrideMimeType: function (a) {
            return null == k && (o.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (k) y.always(a[y.status]);
              else for (b in a) u[b] = [u[b], a[b]];
            return this;
          },
          abort: function (a) {
            var b = a || x;
            return e && e.abort(b), A(0, b), this;
          },
        };
      if (
        (s.promise(y),
        (o.url = ((b || o.url || tb.href) + "").replace(
          Hb,
          tb.protocol + "//"
        )),
        (o.type = c.method || c.type || o.method || o.type),
        (o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""]),
        null == o.crossDomain)
      ) {
        j = d.createElement("a");
        try {
          (j.href = o.url),
            (j.href = j.href),
            (o.crossDomain =
              Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host);
        } catch (z) {
          o.crossDomain = !0;
        }
      }
      if (
        (o.data &&
          o.processData &&
          "string" != typeof o.data &&
          (o.data = r.param(o.data, o.traditional)),
        Nb(Ib, o, c, y),
        k)
      )
        return y;
      (l = r.event && o.global),
        l && 0 === r.active++ && r.event.trigger("ajaxStart"),
        (o.type = o.type.toUpperCase()),
        (o.hasContent = !Gb.test(o.type)),
        (f = o.url.replace(Cb, "")),
        o.hasContent
          ? o.data &&
            o.processData &&
            0 ===
              (o.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (o.data = o.data.replace(Bb, "+"))
          : ((n = o.url.slice(f.length)),
            o.data && ((f += (vb.test(f) ? "&" : "?") + o.data), delete o.data),
            o.cache === !1 &&
              ((f = f.replace(Db, "$1")),
              (n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n)),
            (o.url = f + n)),
        o.ifModified &&
          (r.lastModified[f] &&
            y.setRequestHeader("If-Modified-Since", r.lastModified[f]),
          r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])),
        ((o.data && o.hasContent && o.contentType !== !1) || c.contentType) &&
          y.setRequestHeader("Content-Type", o.contentType),
        y.setRequestHeader(
          "Accept",
          o.dataTypes[0] && o.accepts[o.dataTypes[0]]
            ? o.accepts[o.dataTypes[0]] +
                ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "")
            : o.accepts["*"]
        );
      for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
      if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k))
        return y.abort();
      if (
        ((x = "abort"),
        t.add(o.complete),
        y.done(o.success),
        y.fail(o.error),
        (e = Nb(Jb, o, c, y)))
      ) {
        if (((y.readyState = 1), l && q.trigger("ajaxSend", [y, o]), k))
          return y;
        o.async &&
          o.timeout > 0 &&
          (i = a.setTimeout(function () {
            y.abort("timeout");
          }, o.timeout));
        try {
          (k = !1), e.send(v, A);
        } catch (z) {
          if (k) throw z;
          A(-1, z);
        }
      } else A(-1, "No Transport");
      function A(b, c, d, h) {
        var j,
          m,
          n,
          v,
          w,
          x = c;
        k ||
          ((k = !0),
          i && a.clearTimeout(i),
          (e = void 0),
          (g = h || ""),
          (y.readyState = b > 0 ? 4 : 0),
          (j = (b >= 200 && b < 300) || 304 === b),
          d && (v = Pb(o, y, d)),
          (v = Qb(o, v, y, j)),
          j
            ? (o.ifModified &&
                ((w = y.getResponseHeader("Last-Modified")),
                w && (r.lastModified[f] = w),
                (w = y.getResponseHeader("etag")),
                w && (r.etag[f] = w)),
              204 === b || "HEAD" === o.type
                ? (x = "nocontent")
                : 304 === b
                ? (x = "notmodified")
                : ((x = v.state), (m = v.data), (n = v.error), (j = !n)))
            : ((n = x), (!b && x) || ((x = "error"), b < 0 && (b = 0))),
          (y.status = b),
          (y.statusText = (c || x) + ""),
          j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]),
          y.statusCode(u),
          (u = void 0),
          l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]),
          t.fireWith(p, [y, x]),
          l &&
            (q.trigger("ajaxComplete", [y, o]),
            --r.active || r.event.trigger("ajaxStop")));
      }
      return y;
    },
    getJSON: function (a, b, c) {
      return r.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return r.get(a, void 0, b, "script");
    },
  }),
    r.each(["get", "post"], function (a, b) {
      r[b] = function (a, c, d, e) {
        return (
          r.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          r.ajax(
            r.extend(
              { url: a, type: b, dataType: e, data: c, success: d },
              r.isPlainObject(a) && a
            )
          )
        );
      };
    }),
    (r._evalUrl = function (a) {
      return r.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    r.fn.extend({
      wrapAll: function (a) {
        var b;
        return (
          this[0] &&
            (r.isFunction(a) && (a = a.call(this[0])),
            (b = r(a, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (a) {
        return r.isFunction(a)
          ? this.each(function (b) {
              r(this).wrapInner(a.call(this, b));
            })
          : this.each(function () {
              var b = r(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function (a) {
        var b = r.isFunction(a);
        return this.each(function (c) {
          r(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function (a) {
        return (
          this.parent(a)
            .not("body")
            .each(function () {
              r(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (r.expr.pseudos.hidden = function (a) {
      return !r.expr.pseudos.visible(a);
    }),
    (r.expr.pseudos.visible = function (a) {
      return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    }),
    (r.ajaxSettings.xhr = function () {
      try {
        return new a.XMLHttpRequest();
      } catch (b) {}
    });
  var Rb = { 0: 200, 1223: 204 },
    Sb = r.ajaxSettings.xhr();
  (o.cors = !!Sb && "withCredentials" in Sb),
    (o.ajax = Sb = !!Sb),
    r.ajaxTransport(function (b) {
      var c, d;
      if (o.cors || (Sb && !b.crossDomain))
        return {
          send: function (e, f) {
            var g,
              h = b.xhr();
            if (
              (h.open(b.type, b.url, b.async, b.username, b.password),
              b.xhrFields)
            )
              for (g in b.xhrFields) h[g] = b.xhrFields[g];
            b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType),
              b.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest");
            for (g in e) h.setRequestHeader(g, e[g]);
            (c = function (a) {
              return function () {
                c &&
                  ((c =
                    d =
                    h.onload =
                    h.onerror =
                    h.onabort =
                    h.onreadystatechange =
                      null),
                  "abort" === a
                    ? h.abort()
                    : "error" === a
                    ? "number" != typeof h.status
                      ? f(0, "error")
                      : f(h.status, h.statusText)
                    : f(
                        Rb[h.status] || h.status,
                        h.statusText,
                        "text" !== (h.responseType || "text") ||
                          "string" != typeof h.responseText
                          ? { binary: h.response }
                          : { text: h.responseText },
                        h.getAllResponseHeaders()
                      ));
              };
            }),
              (h.onload = c()),
              (d = h.onerror = c("error")),
              void 0 !== h.onabort
                ? (h.onabort = d)
                : (h.onreadystatechange = function () {
                    4 === h.readyState &&
                      a.setTimeout(function () {
                        c && d();
                      });
                  }),
              (c = c("abort"));
            try {
              h.send((b.hasContent && b.data) || null);
            } catch (i) {
              if (c) throw i;
            }
          },
          abort: function () {
            c && c();
          },
        };
    }),
    r.ajaxPrefilter(function (a) {
      a.crossDomain && (a.contents.script = !1);
    }),
    r.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (a) {
          return r.globalEval(a), a;
        },
      },
    }),
    r.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }),
    r.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function (e, f) {
            (b = r("<script>")
              .prop({ charset: a.scriptCharset, src: a.url })
              .on(
                "load error",
                (c = function (a) {
                  b.remove(),
                    (c = null),
                    a && f("error" === a.type ? 404 : 200, a.type);
                })
              )),
              d.head.appendChild(b[0]);
          },
          abort: function () {
            c && c();
          },
        };
      }
    });
  var Tb = [],
    Ub = /(=)\?(?=&|$)|\?\?/;
  r.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Tb.pop() || r.expando + "_" + ub++;
      return (this[a] = !0), a;
    },
  }),
    r.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (Ub.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              0 ===
                (b.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ub.test(b.data) &&
              "data");
      if (h || "jsonp" === b.dataTypes[0])
        return (
          (e = b.jsonpCallback =
            r.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Ub, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || r.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            void 0 === f ? r(a).removeProp(e) : (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Tb.push(e)),
              g && r.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script"
        );
    }),
    (o.createHTMLDocument = (function () {
      var a = d.implementation.createHTMLDocument("").body;
      return (
        (a.innerHTML = "<form></form><form></form>"), 2 === a.childNodes.length
      );
    })()),
    (r.parseHTML = function (a, b, c) {
      if ("string" != typeof a) return [];
      "boolean" == typeof b && ((c = b), (b = !1));
      var e, f, g;
      return (
        b ||
          (o.createHTMLDocument
            ? ((b = d.implementation.createHTMLDocument("")),
              (e = b.createElement("base")),
              (e.href = d.location.href),
              b.head.appendChild(e))
            : (b = d)),
        (f = C.exec(a)),
        (g = !c && []),
        f
          ? [b.createElement(f[1])]
          : ((f = qa([a], b, g)),
            g && g.length && r(g).remove(),
            r.merge([], f.childNodes))
      );
    }),
    (r.fn.load = function (a, b, c) {
      var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
      return (
        h > -1 && ((d = pb(a.slice(h))), (a = a.slice(0, h))),
        r.isFunction(b)
          ? ((c = b), (b = void 0))
          : b && "object" == typeof b && (e = "POST"),
        g.length > 0 &&
          r
            .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
            .done(function (a) {
              (f = arguments),
                g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
            })
            .always(
              c &&
                function (a, b) {
                  g.each(function () {
                    c.apply(this, f || [a.responseText, b, a]);
                  });
                }
            ),
        this
      );
    }),
    r.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        r.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (r.expr.pseudos.animated = function (a) {
      return r.grep(r.timers, function (b) {
        return a === b.elem;
      }).length;
    }),
    (r.offset = {
      setOffset: function (a, b, c) {
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = r.css(a, "position"),
          l = r(a),
          m = {};
        "static" === k && (a.style.position = "relative"),
          (h = l.offset()),
          (f = r.css(a, "top")),
          (i = r.css(a, "left")),
          (j =
            ("absolute" === k || "fixed" === k) &&
            (f + i).indexOf("auto") > -1),
          j
            ? ((d = l.position()), (g = d.top), (e = d.left))
            : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
          r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))),
          null != b.top && (m.top = b.top - h.top + g),
          null != b.left && (m.left = b.left - h.left + e),
          "using" in b ? b.using.call(a, m) : l.css(m);
      },
    }),
    r.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                r.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d,
          e,
          f = this[0];
        if (f)
          return f.getClientRects().length
            ? ((d = f.getBoundingClientRect()),
              (b = f.ownerDocument),
              (c = b.documentElement),
              (e = b.defaultView),
              {
                top: d.top + e.pageYOffset - c.clientTop,
                left: d.left + e.pageXOffset - c.clientLeft,
              })
            : { top: 0, left: 0 };
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };
          return (
            "fixed" === r.css(c, "position")
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                B(a[0], "html") || (d = a.offset()),
                (d = {
                  top: d.top + r.css(a[0], "borderTopWidth", !0),
                  left: d.left + r.css(a[0], "borderLeftWidth", !0),
                })),
            {
              top: b.top - d.top - r.css(c, "marginTop", !0),
              left: b.left - d.left - r.css(c, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent;
          while (a && "static" === r.css(a, "position")) a = a.offsetParent;
          return a || ra;
        });
      },
    }),
    r.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function (d) {
          return T(
            this,
            function (a, d, e) {
              var f;
              return (
                r.isWindow(a)
                  ? (f = a)
                  : 9 === a.nodeType && (f = a.defaultView),
                void 0 === e
                  ? f
                    ? f[b]
                    : a[d]
                  : void (f
                      ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset)
                      : (a[d] = e))
              );
            },
            a,
            d,
            arguments.length
          );
        };
      }
    ),
    r.each(["top", "left"], function (a, b) {
      r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
        if (c)
          return (c = Oa(a, b)), Ma.test(c) ? r(a).position()[b] + "px" : c;
      });
    }),
    r.each({ Height: "height", Width: "width" }, function (a, b) {
      r.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          r.fn[d] = function (e, f) {
            var g = arguments.length && (c || "boolean" != typeof e),
              h = c || (e === !0 || f === !0 ? "margin" : "border");
            return T(
              this,
              function (b, c, e) {
                var f;
                return r.isWindow(b)
                  ? 0 === d.indexOf("outer")
                    ? b["inner" + a]
                    : b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((f = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      f["scroll" + a],
                      b.body["offset" + a],
                      f["offset" + a],
                      f["client" + a]
                    ))
                  : void 0 === e
                  ? r.css(b, c, h)
                  : r.style(b, c, e, h);
              },
              b,
              g ? e : void 0,
              g
            );
          };
        }
      );
    }),
    r.fn.extend({
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    }),
    (r.holdReady = function (a) {
      a ? r.readyWait++ : r.ready(!0);
    }),
    (r.isArray = Array.isArray),
    (r.parseJSON = JSON.parse),
    (r.nodeName = B),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return r;
      });
  var Vb = a.jQuery,
    Wb = a.$;
  return (
    (r.noConflict = function (b) {
      return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r;
    }),
    b || (a.jQuery = a.$ = r),
    r
  );
});

/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */ (function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (e.Popper = t());
})(this, function () {
  "use strict";
  function e(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }
  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = window.getComputedStyle(e, null);
    return t ? o[t] : o;
  }
  function o(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }
  function n(e) {
    if (!e || -1 !== ["HTML", "BODY", "#document"].indexOf(e.nodeName))
      return window.document.body;
    var i = t(e),
      r = i.overflow,
      p = i.overflowX,
      s = i.overflowY;
    return /(auto|scroll)/.test(r + s + p) ? e : n(o(e));
  }
  function r(e) {
    var o = e && e.offsetParent,
      i = o && o.nodeName;
    return i && "BODY" !== i && "HTML" !== i
      ? -1 !== ["TD", "TABLE"].indexOf(o.nodeName) &&
        "static" === t(o, "position")
        ? r(o)
        : o
      : window.document.documentElement;
  }
  function p(e) {
    var t = e.nodeName;
    return "BODY" !== t && ("HTML" === t || r(e.firstElementChild) === e);
  }
  function s(e) {
    return null === e.parentNode ? e : s(e.parentNode);
  }
  function d(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType)
      return window.document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = o ? e : t,
      n = o ? t : e,
      a = document.createRange();
    a.setStart(i, 0), a.setEnd(n, 0);
    var l = a.commonAncestorContainer;
    if ((e !== l && t !== l) || i.contains(n)) return p(l) ? l : r(l);
    var f = s(e);
    return f.host ? d(f.host, t) : d(e, s(t).host);
  }
  function a(e) {
    var t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
      o = "top" === t ? "scrollTop" : "scrollLeft",
      i = e.nodeName;
    if ("BODY" === i || "HTML" === i) {
      var n = window.document.documentElement,
        r = window.document.scrollingElement || n;
      return r[o];
    }
    return e[o];
  }
  function l(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      i = a(t, "top"),
      n = a(t, "left"),
      r = o ? -1 : 1;
    return (
      (e.top += i * r),
      (e.bottom += i * r),
      (e.left += n * r),
      (e.right += n * r),
      e
    );
  }
  function f(e, t) {
    var o = "x" === t ? "Left" : "Top",
      i = "Left" == o ? "Right" : "Bottom";
    return (
      +e["border" + o + "Width"].split("px")[0] +
      +e["border" + i + "Width"].split("px")[0]
    );
  }
  function m(e, t, o, i) {
    return X(
      t["offset" + e],
      t["scroll" + e],
      o["client" + e],
      o["offset" + e],
      o["scroll" + e],
      ne()
        ? o["offset" + e] +
            i["margin" + ("Height" === e ? "Top" : "Left")] +
            i["margin" + ("Height" === e ? "Bottom" : "Right")]
        : 0
    );
  }
  function c() {
    var e = window.document.body,
      t = window.document.documentElement,
      o = ne() && window.getComputedStyle(t);
    return { height: m("Height", e, t, o), width: m("Width", e, t, o) };
  }
  function h(e) {
    return de({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }
  function g(e) {
    var o = {};
    if (ne())
      try {
        o = e.getBoundingClientRect();
        var i = a(e, "top"),
          n = a(e, "left");
        (o.top += i), (o.left += n), (o.bottom += i), (o.right += n);
      } catch (e) {}
    else o = e.getBoundingClientRect();
    var r = {
        left: o.left,
        top: o.top,
        width: o.right - o.left,
        height: o.bottom - o.top,
      },
      p = "HTML" === e.nodeName ? c() : {},
      s = p.width || e.clientWidth || r.right - r.left,
      d = p.height || e.clientHeight || r.bottom - r.top,
      l = e.offsetWidth - s,
      m = e.offsetHeight - d;
    if (l || m) {
      var g = t(e);
      (l -= f(g, "x")), (m -= f(g, "y")), (r.width -= l), (r.height -= m);
    }
    return h(r);
  }
  function u(e, o) {
    var i = ne(),
      r = "HTML" === o.nodeName,
      p = g(e),
      s = g(o),
      d = n(e),
      a = t(o),
      f = +a.borderTopWidth.split("px")[0],
      m = +a.borderLeftWidth.split("px")[0],
      c = h({
        top: p.top - s.top - f,
        left: p.left - s.left - m,
        width: p.width,
        height: p.height,
      });
    if (((c.marginTop = 0), (c.marginLeft = 0), !i && r)) {
      var u = +a.marginTop.split("px")[0],
        b = +a.marginLeft.split("px")[0];
      (c.top -= f - u),
        (c.bottom -= f - u),
        (c.left -= m - b),
        (c.right -= m - b),
        (c.marginTop = u),
        (c.marginLeft = b);
    }
    return (
      (i ? o.contains(d) : o === d && "BODY" !== d.nodeName) && (c = l(c, o)), c
    );
  }
  function b(e) {
    var t = window.document.documentElement,
      o = u(e, t),
      i = X(t.clientWidth, window.innerWidth || 0),
      n = X(t.clientHeight, window.innerHeight || 0),
      r = a(t),
      p = a(t, "left"),
      s = {
        top: r - o.top + o.marginTop,
        left: p - o.left + o.marginLeft,
        width: i,
        height: n,
      };
    return h(s);
  }
  function y(e) {
    var i = e.nodeName;
    return "BODY" === i || "HTML" === i
      ? !1
      : "fixed" === t(e, "position") || y(o(e));
  }
  function w(e, t, i, r) {
    var p = { top: 0, left: 0 },
      s = d(e, t);
    if ("viewport" === r) p = b(s);
    else {
      var a;
      "scrollParent" === r
        ? ((a = n(o(e))),
          "BODY" === a.nodeName && (a = window.document.documentElement))
        : "window" === r
        ? (a = window.document.documentElement)
        : (a = r);
      var l = u(a, s);
      if ("HTML" === a.nodeName && !y(s)) {
        var f = c(),
          m = f.height,
          h = f.width;
        (p.top += l.top - l.marginTop),
          (p.bottom = m + l.top),
          (p.left += l.left - l.marginLeft),
          (p.right = h + l.left);
      } else p = l;
    }
    return (p.left += i), (p.top += i), (p.right -= i), (p.bottom -= i), p;
  }
  function E(e) {
    var t = e.width,
      o = e.height;
    return t * o;
  }
  function v(e, t, o, i, n) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf("auto")) return e;
    var p = w(o, i, r, n),
      s = {
        top: { width: p.width, height: t.top - p.top },
        right: { width: p.right - t.right, height: p.height },
        bottom: { width: p.width, height: p.bottom - t.bottom },
        left: { width: t.left - p.left, height: p.height },
      },
      d = Object.keys(s)
        .map(function (e) {
          return de({ key: e }, s[e], { area: E(s[e]) });
        })
        .sort(function (e, t) {
          return t.area - e.area;
        }),
      a = d.filter(function (e) {
        var t = e.width,
          i = e.height;
        return t >= o.clientWidth && i >= o.clientHeight;
      }),
      l = 0 < a.length ? a[0].key : d[0].key,
      f = e.split("-")[1];
    return l + (f ? "-" + f : "");
  }
  function x(e, t, o) {
    var i = d(t, o);
    return u(o, i);
  }
  function O(e) {
    var t = window.getComputedStyle(e),
      o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
      i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
      n = { width: e.offsetWidth + i, height: e.offsetHeight + o };
    return n;
  }
  function L(e) {
    var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }
  function S(e, t, o) {
    o = o.split("-")[0];
    var i = O(e),
      n = { width: i.width, height: i.height },
      r = -1 !== ["right", "left"].indexOf(o),
      p = r ? "top" : "left",
      s = r ? "left" : "top",
      d = r ? "height" : "width",
      a = r ? "width" : "height";
    return (
      (n[p] = t[p] + t[d] / 2 - i[d] / 2),
      (n[s] = o === s ? t[s] - i[a] : t[L(s)]),
      n
    );
  }
  function T(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }
  function C(e, t, o) {
    if (Array.prototype.findIndex)
      return e.findIndex(function (e) {
        return e[t] === o;
      });
    var i = T(e, function (e) {
      return e[t] === o;
    });
    return e.indexOf(i);
  }
  function N(t, o, i) {
    var n = void 0 === i ? t : t.slice(0, C(t, "name", i));
    return (
      n.forEach(function (t) {
        t.function &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var i = t.function || t.fn;
        t.enabled &&
          e(i) &&
          ((o.offsets.popper = h(o.offsets.popper)),
          (o.offsets.reference = h(o.offsets.reference)),
          (o = i(o, t)));
      }),
      o
    );
  }
  function k() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {},
      };
      (e.offsets.reference = x(this.state, this.popper, this.reference)),
        (e.placement = v(
          this.options.placement,
          e.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding
        )),
        (e.originalPlacement = e.placement),
        (e.offsets.popper = S(this.popper, e.offsets.reference, e.placement)),
        (e.offsets.popper.position = "absolute"),
        (e = N(this.modifiers, e)),
        this.state.isCreated
          ? this.options.onUpdate(e)
          : ((this.state.isCreated = !0), this.options.onCreate(e));
    }
  }
  function W(e, t) {
    return e.some(function (e) {
      var o = e.name,
        i = e.enabled;
      return i && o === t;
    });
  }
  function B(e) {
    for (
      var t = [!1, "ms", "Webkit", "Moz", "O"],
        o = e.charAt(0).toUpperCase() + e.slice(1),
        n = 0;
      n < t.length - 1;
      n++
    ) {
      var i = t[n],
        r = i ? "" + i + o : e;
      if ("undefined" != typeof window.document.body.style[r]) return r;
    }
    return null;
  }
  function P() {
    return (
      (this.state.isDestroyed = !0),
      W(this.modifiers, "applyStyle") &&
        (this.popper.removeAttribute("x-placement"),
        (this.popper.style.left = ""),
        (this.popper.style.position = ""),
        (this.popper.style.top = ""),
        (this.popper.style[B("transform")] = "")),
      this.disableEventListeners(),
      this.options.removeOnDestroy &&
        this.popper.parentNode.removeChild(this.popper),
      this
    );
  }
  function D(e, t, o, i) {
    var r = "BODY" === e.nodeName,
      p = r ? window : e;
    p.addEventListener(t, o, { passive: !0 }),
      r || D(n(p.parentNode), t, o, i),
      i.push(p);
  }
  function H(e, t, o, i) {
    (o.updateBound = i),
      window.addEventListener("resize", o.updateBound, { passive: !0 });
    var r = n(e);
    return (
      D(r, "scroll", o.updateBound, o.scrollParents),
      (o.scrollElement = r),
      (o.eventsEnabled = !0),
      o
    );
  }
  function A() {
    this.state.eventsEnabled ||
      (this.state = H(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      ));
  }
  function M(e, t) {
    return (
      window.removeEventListener("resize", t.updateBound),
      t.scrollParents.forEach(function (e) {
        e.removeEventListener("scroll", t.updateBound);
      }),
      (t.updateBound = null),
      (t.scrollParents = []),
      (t.scrollElement = null),
      (t.eventsEnabled = !1),
      t
    );
  }
  function I() {
    this.state.eventsEnabled &&
      (window.cancelAnimationFrame(this.scheduleUpdate),
      (this.state = M(this.reference, this.state)));
  }
  function R(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }
  function U(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(o) &&
        R(t[o]) &&
        (i = "px"),
        (e.style[o] = t[o] + i);
    });
  }
  function Y(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = t[o];
      !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }
  function F(e, t, o) {
    var i = T(e, function (e) {
        var o = e.name;
        return o === t;
      }),
      n =
        !!i &&
        e.some(function (e) {
          return e.name === o && e.enabled && e.order < i.order;
        });
    if (!n) {
      var r = "`" + t + "`";
      console.warn(
        "`" +
          o +
          "`" +
          " modifier is required by " +
          r +
          " modifier in order to work, be sure to include it before " +
          r +
          "!"
      );
    }
    return n;
  }
  function j(e) {
    return "end" === e ? "start" : "start" === e ? "end" : e;
  }
  function K(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      o = le.indexOf(e),
      i = le.slice(o + 1).concat(le.slice(0, o));
    return t ? i.reverse() : i;
  }
  function q(e, t, o, i) {
    var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
      r = +n[1],
      p = n[2];
    if (!r) return e;
    if (0 === p.indexOf("%")) {
      var s;
      switch (p) {
        case "%p":
          s = o;
          break;
        case "%":
        case "%r":
        default:
          s = i;
      }
      var d = h(s);
      return (d[t] / 100) * r;
    }
    if ("vh" === p || "vw" === p) {
      var a;
      return (
        (a =
          "vh" === p
            ? X(document.documentElement.clientHeight, window.innerHeight || 0)
            : X(document.documentElement.clientWidth, window.innerWidth || 0)),
        (a / 100) * r
      );
    }
    return r;
  }
  function G(e, t, o, i) {
    var n = [0, 0],
      r = -1 !== ["right", "left"].indexOf(i),
      p = e.split(/(\+|\-)/).map(function (e) {
        return e.trim();
      }),
      s = p.indexOf(
        T(p, function (e) {
          return -1 !== e.search(/,|\s/);
        })
      );
    p[s] &&
      -1 === p[s].indexOf(",") &&
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    var d = /\s*,\s*|\s+/,
      a =
        -1 === s
          ? [p]
          : [
              p.slice(0, s).concat([p[s].split(d)[0]]),
              [p[s].split(d)[1]].concat(p.slice(s + 1)),
            ];
    return (
      (a = a.map(function (e, i) {
        var n = (1 === i ? !r : r) ? "height" : "width",
          p = !1;
        return e
          .reduce(function (e, t) {
            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
              ? ((e[e.length - 1] = t), (p = !0), e)
              : p
              ? ((e[e.length - 1] += t), (p = !1), e)
              : e.concat(t);
          }, [])
          .map(function (e) {
            return q(e, n, t, o);
          });
      })),
      a.forEach(function (e, t) {
        e.forEach(function (o, i) {
          R(o) && (n[t] += o * ("-" === e[i - 1] ? -1 : 1));
        });
      }),
      n
    );
  }
  function z(e, t) {
    var o,
      i = t.offset,
      n = e.placement,
      r = e.offsets,
      p = r.popper,
      s = r.reference,
      d = n.split("-")[0];
    return (
      (o = R(+i) ? [+i, 0] : G(i, p, s, d)),
      "left" === d
        ? ((p.top += o[0]), (p.left -= o[1]))
        : "right" === d
        ? ((p.top += o[0]), (p.left += o[1]))
        : "top" === d
        ? ((p.left += o[0]), (p.top -= o[1]))
        : "bottom" === d && ((p.left += o[0]), (p.top += o[1])),
      (e.popper = p),
      e
    );
  }
  for (
    var V = Math.min,
      _ = Math.floor,
      X = Math.max,
      Q = ["native code", "[object MutationObserverConstructor]"],
      J = function (e) {
        return Q.some(function (t) {
          return -1 < (e || "").toString().indexOf(t);
        });
      },
      Z = "undefined" != typeof window,
      $ = ["Edge", "Trident", "Firefox"],
      ee = 0,
      te = 0;
    te < $.length;
    te += 1
  )
    if (Z && 0 <= navigator.userAgent.indexOf($[te])) {
      ee = 1;
      break;
    }
  var i,
    oe = Z && J(window.MutationObserver),
    ie = oe
      ? function (e) {
          var t = !1,
            o = 0,
            i = document.createElement("span"),
            n = new MutationObserver(function () {
              e(), (t = !1);
            });
          return (
            n.observe(i, { attributes: !0 }),
            function () {
              t || ((t = !0), i.setAttribute("x-index", o), ++o);
            }
          );
        }
      : function (e) {
          var t = !1;
          return function () {
            t ||
              ((t = !0),
              setTimeout(function () {
                (t = !1), e();
              }, ee));
          };
        },
    ne = function () {
      return (
        void 0 == i && (i = -1 !== navigator.appVersion.indexOf("MSIE 10")), i
      );
    },
    re = function (e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    },
    pe = (function () {
      function e(e, t) {
        for (var o, n = 0; n < t.length; n++)
          (o = t[n]),
            (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
      }
      return function (t, o, i) {
        return o && e(t.prototype, o), i && e(t, i), t;
      };
    })(),
    se = function (e, t, o) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = o),
        e
      );
    },
    de =
      Object.assign ||
      function (e) {
        for (var t, o = 1; o < arguments.length; o++)
          for (var i in ((t = arguments[o]), t))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      },
    ae = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    le = ae.slice(3),
    fe = {
      FLIP: "flip",
      CLOCKWISE: "clockwise",
      COUNTERCLOCKWISE: "counterclockwise",
    },
    me = (function () {
      function t(o, i) {
        var n = this,
          r =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        re(this, t),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(n.update);
          }),
          (this.update = ie(this.update.bind(this))),
          (this.options = de({}, t.Defaults, r)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = o.jquery ? o[0] : o),
          (this.popper = i.jquery ? i[0] : i),
          (this.options.modifiers = {}),
          Object.keys(de({}, t.Defaults.modifiers, r.modifiers)).forEach(
            function (e) {
              n.options.modifiers[e] = de(
                {},
                t.Defaults.modifiers[e] || {},
                r.modifiers ? r.modifiers[e] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (e) {
              return de({ name: e }, n.options.modifiers[e]);
            })
            .sort(function (e, t) {
              return e.order - t.order;
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              e(t.onLoad) &&
              t.onLoad(n.reference, n.popper, n.options, t, n.state);
          }),
          this.update();
        var p = this.options.eventsEnabled;
        p && this.enableEventListeners(), (this.state.eventsEnabled = p);
      }
      return (
        pe(t, [
          {
            key: "update",
            value: function () {
              return k.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return P.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return A.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return I.call(this);
            },
          },
        ]),
        t
      );
    })();
  return (
    (me.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
    (me.placements = ae),
    (me.Defaults = {
      placement: "bottom",
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (e) {
            var t = e.placement,
              o = t.split("-")[0],
              i = t.split("-")[1];
            if (i) {
              var n = e.offsets,
                r = n.reference,
                p = n.popper,
                s = -1 !== ["bottom", "top"].indexOf(o),
                d = s ? "left" : "top",
                a = s ? "width" : "height",
                l = {
                  start: se({}, d, r[d]),
                  end: se({}, d, r[d] + r[a] - p[a]),
                };
              e.offsets.popper = de({}, p, l[i]);
            }
            return e;
          },
        },
        offset: { order: 200, enabled: !0, fn: z, offset: 0 },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (e, t) {
            var o = t.boundariesElement || r(e.instance.popper);
            e.instance.reference === o && (o = r(o));
            var i = w(e.instance.popper, e.instance.reference, t.padding, o);
            t.boundaries = i;
            var n = t.priority,
              p = e.offsets.popper,
              s = {
                primary: function (e) {
                  var o = p[e];
                  return (
                    p[e] < i[e] &&
                      !t.escapeWithReference &&
                      (o = X(p[e], i[e])),
                    se({}, e, o)
                  );
                },
                secondary: function (e) {
                  var o = "right" === e ? "left" : "top",
                    n = p[o];
                  return (
                    p[e] > i[e] &&
                      !t.escapeWithReference &&
                      (n = V(
                        p[o],
                        i[e] - ("right" === e ? p.width : p.height)
                      )),
                    se({}, o, n)
                  );
                },
              };
            return (
              n.forEach(function (e) {
                var t =
                  -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                p = de({}, p, s[t](e));
              }),
              (e.offsets.popper = p),
              e
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (e) {
            var t = e.offsets,
              o = t.popper,
              i = t.reference,
              n = e.placement.split("-")[0],
              r = _,
              p = -1 !== ["top", "bottom"].indexOf(n),
              s = p ? "right" : "bottom",
              d = p ? "left" : "top",
              a = p ? "width" : "height";
            return (
              o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]),
              o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])),
              e
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (e, o) {
            if (!F(e.instance.modifiers, "arrow", "keepTogether")) return e;
            var i = o.element;
            if ("string" == typeof i) {
              if (((i = e.instance.popper.querySelector(i)), !i)) return e;
            } else if (!e.instance.popper.contains(i))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                e
              );
            var n = e.placement.split("-")[0],
              r = e.offsets,
              p = r.popper,
              s = r.reference,
              d = -1 !== ["left", "right"].indexOf(n),
              a = d ? "height" : "width",
              l = d ? "Top" : "Left",
              f = l.toLowerCase(),
              m = d ? "left" : "top",
              c = d ? "bottom" : "right",
              g = O(i)[a];
            s[c] - g < p[f] && (e.offsets.popper[f] -= p[f] - (s[c] - g)),
              s[f] + g > p[c] && (e.offsets.popper[f] += s[f] + g - p[c]);
            var u = s[f] + s[a] / 2 - g / 2,
              b = t(e.instance.popper, "margin" + l).replace("px", ""),
              y = u - h(e.offsets.popper)[f] - b;
            return (
              (y = X(V(p[a] - g, y), 0)),
              (e.arrowElement = i),
              (e.offsets.arrow = {}),
              (e.offsets.arrow[f] = Math.round(y)),
              (e.offsets.arrow[m] = ""),
              e
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (e, t) {
            if (W(e.instance.modifiers, "inner")) return e;
            if (e.flipped && e.placement === e.originalPlacement) return e;
            var o = w(
                e.instance.popper,
                e.instance.reference,
                t.padding,
                t.boundariesElement
              ),
              i = e.placement.split("-")[0],
              n = L(i),
              r = e.placement.split("-")[1] || "",
              p = [];
            switch (t.behavior) {
              case fe.FLIP:
                p = [i, n];
                break;
              case fe.CLOCKWISE:
                p = K(i);
                break;
              case fe.COUNTERCLOCKWISE:
                p = K(i, !0);
                break;
              default:
                p = t.behavior;
            }
            return (
              p.forEach(function (s, d) {
                if (i !== s || p.length === d + 1) return e;
                (i = e.placement.split("-")[0]), (n = L(i));
                var a = e.offsets.popper,
                  l = e.offsets.reference,
                  f = _,
                  m =
                    ("left" === i && f(a.right) > f(l.left)) ||
                    ("right" === i && f(a.left) < f(l.right)) ||
                    ("top" === i && f(a.bottom) > f(l.top)) ||
                    ("bottom" === i && f(a.top) < f(l.bottom)),
                  c = f(a.left) < f(o.left),
                  h = f(a.right) > f(o.right),
                  g = f(a.top) < f(o.top),
                  u = f(a.bottom) > f(o.bottom),
                  b =
                    ("left" === i && c) ||
                    ("right" === i && h) ||
                    ("top" === i && g) ||
                    ("bottom" === i && u),
                  y = -1 !== ["top", "bottom"].indexOf(i),
                  w =
                    !!t.flipVariations &&
                    ((y && "start" === r && c) ||
                      (y && "end" === r && h) ||
                      (!y && "start" === r && g) ||
                      (!y && "end" === r && u));
                (m || b || w) &&
                  ((e.flipped = !0),
                  (m || b) && (i = p[d + 1]),
                  w && (r = j(r)),
                  (e.placement = i + (r ? "-" + r : "")),
                  (e.offsets.popper = de(
                    {},
                    e.offsets.popper,
                    S(e.instance.popper, e.offsets.reference, e.placement)
                  )),
                  (e = N(e.instance.modifiers, e, "flip")));
              }),
              e
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (e) {
            var t = e.placement,
              o = t.split("-")[0],
              i = e.offsets,
              n = i.popper,
              r = i.reference,
              p = -1 !== ["left", "right"].indexOf(o),
              s = -1 === ["top", "left"].indexOf(o);
            return (
              (n[p ? "left" : "top"] =
                r[o] - (s ? n[p ? "width" : "height"] : 0)),
              (e.placement = L(t)),
              (e.offsets.popper = h(n)),
              e
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (e) {
            if (!F(e.instance.modifiers, "hide", "preventOverflow")) return e;
            var t = e.offsets.reference,
              o = T(e.instance.modifiers, function (e) {
                return "preventOverflow" === e.name;
              }).boundaries;
            if (
              t.bottom < o.top ||
              t.left > o.right ||
              t.top > o.bottom ||
              t.right < o.left
            ) {
              if (!0 === e.hide) return e;
              (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === e.hide) return e;
              (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
            }
            return e;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (e, t) {
            var o = t.x,
              i = t.y,
              n = e.offsets.popper,
              p = T(e.instance.modifiers, function (e) {
                return "applyStyle" === e.name;
              }).gpuAcceleration;
            void 0 !== p &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var s,
              d,
              a = void 0 === p ? t.gpuAcceleration : p,
              l = r(e.instance.popper),
              f = g(l),
              m = { position: n.position },
              c = {
                left: _(n.left),
                top: _(n.top),
                bottom: _(n.bottom),
                right: _(n.right),
              },
              h = "bottom" === o ? "top" : "bottom",
              u = "right" === i ? "left" : "right",
              b = B("transform");
            if (
              ((d = "bottom" == h ? -f.height + c.bottom : c.top),
              (s = "right" == u ? -f.width + c.right : c.left),
              a && b)
            )
              (m[b] = "translate3d(" + s + "px, " + d + "px, 0)"),
                (m[h] = 0),
                (m[u] = 0),
                (m.willChange = "transform");
            else {
              var y = "bottom" == h ? -1 : 1,
                w = "right" == u ? -1 : 1;
              (m[h] = d * y), (m[u] = s * w), (m.willChange = h + ", " + u);
            }
            var E = { "x-placement": e.placement };
            return (
              (e.attributes = de({}, E, e.attributes)),
              (e.styles = de({}, m, e.styles)),
              (e.arrowStyles = de({}, e.offsets.arrow, e.arrowStyles)),
              e
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (e) {
            return (
              U(e.instance.popper, e.styles),
              Y(e.instance.popper, e.attributes),
              e.arrowElement &&
                Object.keys(e.arrowStyles).length &&
                U(e.arrowElement, e.arrowStyles),
              e
            );
          },
          onLoad: function (e, t, o, i, n) {
            var r = x(n, t, e),
              p = v(
                o.placement,
                r,
                t,
                e,
                o.modifiers.flip.boundariesElement,
                o.modifiers.flip.padding
              );
            return (
              t.setAttribute("x-placement", p),
              U(t, { position: "absolute" }),
              o
            );
          },
          gpuAcceleration: void 0,
        },
      },
    }),
    me
  );
});
//# sourceMappingURL=popper.min.js.map

/*!
 * Bootstrap v4.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"), require("popper.js"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery", "popper.js"], e)
    : e((t.bootstrap = {}), t.jQuery, t.Popper);
})(this, function (t, e, h) {
  "use strict";
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function l(r) {
    for (var t = 1; t < arguments.length; t++) {
      var o = null != arguments[t] ? arguments[t] : {},
        e = Object.keys(o);
      "function" == typeof Object.getOwnPropertySymbols &&
        (e = e.concat(
          Object.getOwnPropertySymbols(o).filter(function (t) {
            return Object.getOwnPropertyDescriptor(o, t).enumerable;
          })
        )),
        e.forEach(function (t) {
          var e, n, i;
          (e = r),
            (i = o[(n = t)]),
            n in e
              ? Object.defineProperty(e, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[n] = i);
        });
    }
    return r;
  }
  (e = e && e.hasOwnProperty("default") ? e.default : e),
    (h = h && h.hasOwnProperty("default") ? h.default : h);
  var r,
    n,
    o,
    a,
    c,
    u,
    f,
    d,
    g,
    _,
    m,
    p,
    v,
    y,
    E,
    C,
    T,
    b,
    S,
    I,
    A,
    D,
    w,
    N,
    O,
    k,
    P,
    j,
    H,
    L,
    R,
    x,
    W,
    U,
    q,
    F,
    K,
    M,
    Q,
    B,
    V,
    Y,
    z,
    J,
    Z,
    G,
    $,
    X,
    tt,
    et,
    nt,
    it,
    rt,
    ot,
    st,
    at,
    lt,
    ct,
    ht,
    ut,
    ft,
    dt,
    gt,
    _t,
    mt,
    pt,
    vt,
    yt,
    Et,
    Ct,
    Tt,
    bt,
    St,
    It,
    At,
    Dt,
    wt,
    Nt,
    Ot,
    kt,
    Pt,
    jt,
    Ht,
    Lt,
    Rt,
    xt,
    Wt,
    Ut,
    qt,
    Ft,
    Kt,
    Mt,
    Qt,
    Bt,
    Vt,
    Yt,
    zt,
    Jt,
    Zt,
    Gt,
    $t,
    Xt,
    te,
    ee,
    ne,
    ie,
    re,
    oe,
    se,
    ae,
    le,
    ce,
    he,
    ue,
    fe,
    de,
    ge,
    _e,
    me,
    pe,
    ve,
    ye,
    Ee,
    Ce,
    Te,
    be,
    Se,
    Ie,
    Ae,
    De,
    we,
    Ne,
    Oe,
    ke,
    Pe,
    je,
    He,
    Le,
    Re,
    xe,
    We,
    Ue,
    qe,
    Fe,
    Ke,
    Me,
    Qe,
    Be,
    Ve,
    Ye,
    ze,
    Je,
    Ze,
    Ge,
    $e,
    Xe,
    tn,
    en,
    nn,
    rn,
    on,
    sn,
    an,
    ln,
    cn,
    hn,
    un,
    fn,
    dn,
    gn,
    _n,
    mn,
    pn,
    vn,
    yn,
    En,
    Cn,
    Tn,
    bn,
    Sn,
    In,
    An,
    Dn,
    wn,
    Nn,
    On,
    kn,
    Pn,
    jn,
    Hn,
    Ln,
    Rn,
    xn,
    Wn,
    Un,
    qn,
    Fn = (function (i) {
      var e = "transitionend";
      function t(t) {
        var e = this,
          n = !1;
        return (
          i(this).one(l.TRANSITION_END, function () {
            n = !0;
          }),
          setTimeout(function () {
            n || l.triggerTransitionEnd(e);
          }, t),
          this
        );
      }
      var l = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (t) {
          for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
          return t;
        },
        getSelectorFromElement: function (t) {
          var e = t.getAttribute("data-target");
          (e && "#" !== e) || (e = t.getAttribute("href") || "");
          try {
            return document.querySelector(e) ? e : null;
          } catch (t) {
            return null;
          }
        },
        getTransitionDurationFromElement: function (t) {
          if (!t) return 0;
          var e = i(t).css("transition-duration");
          return parseFloat(e)
            ? ((e = e.split(",")[0]), 1e3 * parseFloat(e))
            : 0;
        },
        reflow: function (t) {
          return t.offsetHeight;
        },
        triggerTransitionEnd: function (t) {
          i(t).trigger(e);
        },
        supportsTransitionEnd: function () {
          return Boolean(e);
        },
        isElement: function (t) {
          return (t[0] || t).nodeType;
        },
        typeCheckConfig: function (t, e, n) {
          for (var i in n)
            if (Object.prototype.hasOwnProperty.call(n, i)) {
              var r = n[i],
                o = e[i],
                s =
                  o && l.isElement(o)
                    ? "element"
                    : ((a = o),
                      {}.toString
                        .call(a)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase());
              if (!new RegExp(r).test(s))
                throw new Error(
                  t.toUpperCase() +
                    ': Option "' +
                    i +
                    '" provided type "' +
                    s +
                    '" but expected type "' +
                    r +
                    '".'
                );
            }
          var a;
        },
      };
      return (
        (i.fn.emulateTransitionEnd = t),
        (i.event.special[l.TRANSITION_END] = {
          bindType: e,
          delegateType: e,
          handle: function (t) {
            if (i(t.target).is(this))
              return t.handleObj.handler.apply(this, arguments);
          },
        }),
        l
      );
    })(e),
    Kn =
      ((n = "alert"),
      (a = "." + (o = "bs.alert")),
      (c = (r = e).fn[n]),
      (u = {
        CLOSE: "close" + a,
        CLOSED: "closed" + a,
        CLICK_DATA_API: "click" + a + ".data-api",
      }),
      (f = "alert"),
      (d = "fade"),
      (g = "show"),
      (_ = (function () {
        function i(t) {
          this._element = t;
        }
        var t = i.prototype;
        return (
          (t.close = function (t) {
            var e = this._element;
            t && (e = this._getRootElement(t)),
              this._triggerCloseEvent(e).isDefaultPrevented() ||
                this._removeElement(e);
          }),
          (t.dispose = function () {
            r.removeData(this._element, o), (this._element = null);
          }),
          (t._getRootElement = function (t) {
            var e = Fn.getSelectorFromElement(t),
              n = !1;
            return (
              e && (n = document.querySelector(e)),
              n || (n = r(t).closest("." + f)[0]),
              n
            );
          }),
          (t._triggerCloseEvent = function (t) {
            var e = r.Event(u.CLOSE);
            return r(t).trigger(e), e;
          }),
          (t._removeElement = function (e) {
            var n = this;
            if ((r(e).removeClass(g), r(e).hasClass(d))) {
              var t = Fn.getTransitionDurationFromElement(e);
              r(e)
                .one(Fn.TRANSITION_END, function (t) {
                  return n._destroyElement(e, t);
                })
                .emulateTransitionEnd(t);
            } else this._destroyElement(e);
          }),
          (t._destroyElement = function (t) {
            r(t).detach().trigger(u.CLOSED).remove();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = r(this),
                e = t.data(o);
              e || ((e = new i(this)), t.data(o, e)),
                "close" === n && e[n](this);
            });
          }),
          (i._handleDismiss = function (e) {
            return function (t) {
              t && t.preventDefault(), e.close(this);
            };
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
          ]),
          i
        );
      })()),
      r(document).on(
        u.CLICK_DATA_API,
        '[data-dismiss="alert"]',
        _._handleDismiss(new _())
      ),
      (r.fn[n] = _._jQueryInterface),
      (r.fn[n].Constructor = _),
      (r.fn[n].noConflict = function () {
        return (r.fn[n] = c), _._jQueryInterface;
      }),
      _),
    Mn =
      ((p = "button"),
      (y = "." + (v = "bs.button")),
      (E = ".data-api"),
      (C = (m = e).fn[p]),
      (T = "active"),
      (b = "btn"),
      (I = '[data-toggle^="button"]'),
      (A = '[data-toggle="buttons"]'),
      (D = "input"),
      (w = ".active"),
      (N = ".btn"),
      (O = {
        CLICK_DATA_API: "click" + y + E,
        FOCUS_BLUR_DATA_API: (S = "focus") + y + E + " blur" + y + E,
      }),
      (k = (function () {
        function n(t) {
          this._element = t;
        }
        var t = n.prototype;
        return (
          (t.toggle = function () {
            var t = !0,
              e = !0,
              n = m(this._element).closest(A)[0];
            if (n) {
              var i = this._element.querySelector(D);
              if (i) {
                if ("radio" === i.type)
                  if (i.checked && this._element.classList.contains(T)) t = !1;
                  else {
                    var r = n.querySelector(w);
                    r && m(r).removeClass(T);
                  }
                if (t) {
                  if (
                    i.hasAttribute("disabled") ||
                    n.hasAttribute("disabled") ||
                    i.classList.contains("disabled") ||
                    n.classList.contains("disabled")
                  )
                    return;
                  (i.checked = !this._element.classList.contains(T)),
                    m(i).trigger("change");
                }
                i.focus(), (e = !1);
              }
            }
            e &&
              this._element.setAttribute(
                "aria-pressed",
                !this._element.classList.contains(T)
              ),
              t && m(this._element).toggleClass(T);
          }),
          (t.dispose = function () {
            m.removeData(this._element, v), (this._element = null);
          }),
          (n._jQueryInterface = function (e) {
            return this.each(function () {
              var t = m(this).data(v);
              t || ((t = new n(this)), m(this).data(v, t)),
                "toggle" === e && t[e]();
            });
          }),
          s(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
          ]),
          n
        );
      })()),
      m(document)
        .on(O.CLICK_DATA_API, I, function (t) {
          t.preventDefault();
          var e = t.target;
          m(e).hasClass(b) || (e = m(e).closest(N)),
            k._jQueryInterface.call(m(e), "toggle");
        })
        .on(O.FOCUS_BLUR_DATA_API, I, function (t) {
          var e = m(t.target).closest(N)[0];
          m(e).toggleClass(S, /^focus(in)?$/.test(t.type));
        }),
      (m.fn[p] = k._jQueryInterface),
      (m.fn[p].Constructor = k),
      (m.fn[p].noConflict = function () {
        return (m.fn[p] = C), k._jQueryInterface;
      }),
      k),
    Qn =
      ((j = "carousel"),
      (L = "." + (H = "bs.carousel")),
      (R = ".data-api"),
      (x = (P = e).fn[j]),
      (W = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
      }),
      (U = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
      }),
      (q = "next"),
      (F = "prev"),
      (K = "left"),
      (M = "right"),
      (Q = {
        SLIDE: "slide" + L,
        SLID: "slid" + L,
        KEYDOWN: "keydown" + L,
        MOUSEENTER: "mouseenter" + L,
        MOUSELEAVE: "mouseleave" + L,
        TOUCHEND: "touchend" + L,
        LOAD_DATA_API: "load" + L + R,
        CLICK_DATA_API: "click" + L + R,
      }),
      (B = "carousel"),
      (V = "active"),
      (Y = "slide"),
      (z = "carousel-item-right"),
      (J = "carousel-item-left"),
      (Z = "carousel-item-next"),
      (G = "carousel-item-prev"),
      ($ = ".active"),
      (X = ".active.carousel-item"),
      (tt = ".carousel-item"),
      (et = ".carousel-item-next, .carousel-item-prev"),
      (nt = ".carousel-indicators"),
      (it = "[data-slide], [data-slide-to]"),
      (rt = '[data-ride="carousel"]'),
      (ot = (function () {
        function o(t, e) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this._config = this._getConfig(e)),
            (this._element = P(t)[0]),
            (this._indicatorsElement = this._element.querySelector(nt)),
            this._addEventListeners();
        }
        var t = o.prototype;
        return (
          (t.next = function () {
            this._isSliding || this._slide(q);
          }),
          (t.nextWhenVisible = function () {
            !document.hidden &&
              P(this._element).is(":visible") &&
              "hidden" !== P(this._element).css("visibility") &&
              this.next();
          }),
          (t.prev = function () {
            this._isSliding || this._slide(F);
          }),
          (t.pause = function (t) {
            t || (this._isPaused = !0),
              this._element.querySelector(et) &&
                (Fn.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (t.cycle = function (t) {
            t || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                ));
          }),
          (t.to = function (t) {
            var e = this;
            this._activeElement = this._element.querySelector(X);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
              if (this._isSliding)
                P(this._element).one(Q.SLID, function () {
                  return e.to(t);
                });
              else {
                if (n === t) return this.pause(), void this.cycle();
                var i = n < t ? q : F;
                this._slide(i, this._items[t]);
              }
          }),
          (t.dispose = function () {
            P(this._element).off(L),
              P.removeData(this._element, H),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (t._getConfig = function (t) {
            return (t = l({}, W, t)), Fn.typeCheckConfig(j, t, U), t;
          }),
          (t._addEventListeners = function () {
            var e = this;
            this._config.keyboard &&
              P(this._element).on(Q.KEYDOWN, function (t) {
                return e._keydown(t);
              }),
              "hover" === this._config.pause &&
                (P(this._element)
                  .on(Q.MOUSEENTER, function (t) {
                    return e.pause(t);
                  })
                  .on(Q.MOUSELEAVE, function (t) {
                    return e.cycle(t);
                  }),
                "ontouchstart" in document.documentElement &&
                  P(this._element).on(Q.TOUCHEND, function () {
                    e.pause(),
                      e.touchTimeout && clearTimeout(e.touchTimeout),
                      (e.touchTimeout = setTimeout(function (t) {
                        return e.cycle(t);
                      }, 500 + e._config.interval));
                  }));
          }),
          (t._keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName))
              switch (t.which) {
                case 37:
                  t.preventDefault(), this.prev();
                  break;
                case 39:
                  t.preventDefault(), this.next();
              }
          }),
          (t._getItemIndex = function (t) {
            return (
              (this._items =
                t && t.parentNode
                  ? [].slice.call(t.parentNode.querySelectorAll(tt))
                  : []),
              this._items.indexOf(t)
            );
          }),
          (t._getItemByDirection = function (t, e) {
            var n = t === q,
              i = t === F,
              r = this._getItemIndex(e),
              o = this._items.length - 1;
            if (((i && 0 === r) || (n && r === o)) && !this._config.wrap)
              return e;
            var s = (r + (t === F ? -1 : 1)) % this._items.length;
            return -1 === s
              ? this._items[this._items.length - 1]
              : this._items[s];
          }),
          (t._triggerSlideEvent = function (t, e) {
            var n = this._getItemIndex(t),
              i = this._getItemIndex(this._element.querySelector(X)),
              r = P.Event(Q.SLIDE, {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n,
              });
            return P(this._element).trigger(r), r;
          }),
          (t._setActiveIndicatorElement = function (t) {
            if (this._indicatorsElement) {
              var e = [].slice.call(
                this._indicatorsElement.querySelectorAll($)
              );
              P(e).removeClass(V);
              var n = this._indicatorsElement.children[this._getItemIndex(t)];
              n && P(n).addClass(V);
            }
          }),
          (t._slide = function (t, e) {
            var n,
              i,
              r,
              o = this,
              s = this._element.querySelector(X),
              a = this._getItemIndex(s),
              l = e || (s && this._getItemByDirection(t, s)),
              c = this._getItemIndex(l),
              h = Boolean(this._interval);
            if (
              (t === q
                ? ((n = J), (i = Z), (r = K))
                : ((n = z), (i = G), (r = M)),
              l && P(l).hasClass(V))
            )
              this._isSliding = !1;
            else if (
              !this._triggerSlideEvent(l, r).isDefaultPrevented() &&
              s &&
              l
            ) {
              (this._isSliding = !0),
                h && this.pause(),
                this._setActiveIndicatorElement(l);
              var u = P.Event(Q.SLID, {
                relatedTarget: l,
                direction: r,
                from: a,
                to: c,
              });
              if (P(this._element).hasClass(Y)) {
                P(l).addClass(i),
                  Fn.reflow(l),
                  P(s).addClass(n),
                  P(l).addClass(n);
                var f = Fn.getTransitionDurationFromElement(s);
                P(s)
                  .one(Fn.TRANSITION_END, function () {
                    P(l)
                      .removeClass(n + " " + i)
                      .addClass(V),
                      P(s).removeClass(V + " " + i + " " + n),
                      (o._isSliding = !1),
                      setTimeout(function () {
                        return P(o._element).trigger(u);
                      }, 0);
                  })
                  .emulateTransitionEnd(f);
              } else
                P(s).removeClass(V),
                  P(l).addClass(V),
                  (this._isSliding = !1),
                  P(this._element).trigger(u);
              h && this.cycle();
            }
          }),
          (o._jQueryInterface = function (i) {
            return this.each(function () {
              var t = P(this).data(H),
                e = l({}, W, P(this).data());
              "object" == typeof i && (e = l({}, e, i));
              var n = "string" == typeof i ? i : e.slide;
              if (
                (t || ((t = new o(this, e)), P(this).data(H, t)),
                "number" == typeof i)
              )
                t.to(i);
              else if ("string" == typeof n) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              } else e.interval && (t.pause(), t.cycle());
            });
          }),
          (o._dataApiClickHandler = function (t) {
            var e = Fn.getSelectorFromElement(this);
            if (e) {
              var n = P(e)[0];
              if (n && P(n).hasClass(B)) {
                var i = l({}, P(n).data(), P(this).data()),
                  r = this.getAttribute("data-slide-to");
                r && (i.interval = !1),
                  o._jQueryInterface.call(P(n), i),
                  r && P(n).data(H).to(r),
                  t.preventDefault();
              }
            }
          }),
          s(o, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return W;
              },
            },
          ]),
          o
        );
      })()),
      P(document).on(Q.CLICK_DATA_API, it, ot._dataApiClickHandler),
      P(window).on(Q.LOAD_DATA_API, function () {
        for (
          var t = [].slice.call(document.querySelectorAll(rt)),
            e = 0,
            n = t.length;
          e < n;
          e++
        ) {
          var i = P(t[e]);
          ot._jQueryInterface.call(i, i.data());
        }
      }),
      (P.fn[j] = ot._jQueryInterface),
      (P.fn[j].Constructor = ot),
      (P.fn[j].noConflict = function () {
        return (P.fn[j] = x), ot._jQueryInterface;
      }),
      ot),
    Bn =
      ((at = "collapse"),
      (ct = "." + (lt = "bs.collapse")),
      (ht = (st = e).fn[at]),
      (ut = { toggle: !0, parent: "" }),
      (ft = { toggle: "boolean", parent: "(string|element)" }),
      (dt = {
        SHOW: "show" + ct,
        SHOWN: "shown" + ct,
        HIDE: "hide" + ct,
        HIDDEN: "hidden" + ct,
        CLICK_DATA_API: "click" + ct + ".data-api",
      }),
      (gt = "show"),
      (_t = "collapse"),
      (mt = "collapsing"),
      (pt = "collapsed"),
      (vt = "width"),
      (yt = "height"),
      (Et = ".show, .collapsing"),
      (Ct = '[data-toggle="collapse"]'),
      (Tt = (function () {
        function a(e, t) {
          (this._isTransitioning = !1),
            (this._element = e),
            (this._config = this._getConfig(t)),
            (this._triggerArray = st.makeArray(
              document.querySelectorAll(
                '[data-toggle="collapse"][href="#' +
                  e.id +
                  '"],[data-toggle="collapse"][data-target="#' +
                  e.id +
                  '"]'
              )
            ));
          for (
            var n = [].slice.call(document.querySelectorAll(Ct)),
              i = 0,
              r = n.length;
            i < r;
            i++
          ) {
            var o = n[i],
              s = Fn.getSelectorFromElement(o),
              a = [].slice
                .call(document.querySelectorAll(s))
                .filter(function (t) {
                  return t === e;
                });
            null !== s &&
              0 < a.length &&
              ((this._selector = s), this._triggerArray.push(o));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var t = a.prototype;
        return (
          (t.toggle = function () {
            st(this._element).hasClass(gt) ? this.hide() : this.show();
          }),
          (t.show = function () {
            var t,
              e,
              n = this;
            if (
              !this._isTransitioning &&
              !st(this._element).hasClass(gt) &&
              (this._parent &&
                0 ===
                  (t = [].slice
                    .call(this._parent.querySelectorAll(Et))
                    .filter(function (t) {
                      return t.getAttribute("data-parent") === n._config.parent;
                    })).length &&
                (t = null),
              !(
                t &&
                (e = st(t).not(this._selector).data(lt)) &&
                e._isTransitioning
              ))
            ) {
              var i = st.Event(dt.SHOW);
              if ((st(this._element).trigger(i), !i.isDefaultPrevented())) {
                t &&
                  (a._jQueryInterface.call(st(t).not(this._selector), "hide"),
                  e || st(t).data(lt, null));
                var r = this._getDimension();
                st(this._element).removeClass(_t).addClass(mt),
                  (this._element.style[r] = 0),
                  this._triggerArray.length &&
                    st(this._triggerArray)
                      .removeClass(pt)
                      .attr("aria-expanded", !0),
                  this.setTransitioning(!0);
                var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                  s = Fn.getTransitionDurationFromElement(this._element);
                st(this._element)
                  .one(Fn.TRANSITION_END, function () {
                    st(n._element).removeClass(mt).addClass(_t).addClass(gt),
                      (n._element.style[r] = ""),
                      n.setTransitioning(!1),
                      st(n._element).trigger(dt.SHOWN);
                  })
                  .emulateTransitionEnd(s),
                  (this._element.style[r] = this._element[o] + "px");
              }
            }
          }),
          (t.hide = function () {
            var t = this;
            if (!this._isTransitioning && st(this._element).hasClass(gt)) {
              var e = st.Event(dt.HIDE);
              if ((st(this._element).trigger(e), !e.isDefaultPrevented())) {
                var n = this._getDimension();
                (this._element.style[n] =
                  this._element.getBoundingClientRect()[n] + "px"),
                  Fn.reflow(this._element),
                  st(this._element)
                    .addClass(mt)
                    .removeClass(_t)
                    .removeClass(gt);
                var i = this._triggerArray.length;
                if (0 < i)
                  for (var r = 0; r < i; r++) {
                    var o = this._triggerArray[r],
                      s = Fn.getSelectorFromElement(o);
                    if (null !== s)
                      st([].slice.call(document.querySelectorAll(s))).hasClass(
                        gt
                      ) || st(o).addClass(pt).attr("aria-expanded", !1);
                  }
                this.setTransitioning(!0);
                this._element.style[n] = "";
                var a = Fn.getTransitionDurationFromElement(this._element);
                st(this._element)
                  .one(Fn.TRANSITION_END, function () {
                    t.setTransitioning(!1),
                      st(t._element)
                        .removeClass(mt)
                        .addClass(_t)
                        .trigger(dt.HIDDEN);
                  })
                  .emulateTransitionEnd(a);
              }
            }
          }),
          (t.setTransitioning = function (t) {
            this._isTransitioning = t;
          }),
          (t.dispose = function () {
            st.removeData(this._element, lt),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (t._getConfig = function (t) {
            return (
              ((t = l({}, ut, t)).toggle = Boolean(t.toggle)),
              Fn.typeCheckConfig(at, t, ft),
              t
            );
          }),
          (t._getDimension = function () {
            return st(this._element).hasClass(vt) ? vt : yt;
          }),
          (t._getParent = function () {
            var n = this,
              t = null;
            Fn.isElement(this._config.parent)
              ? ((t = this._config.parent),
                "undefined" != typeof this._config.parent.jquery &&
                  (t = this._config.parent[0]))
              : (t = document.querySelector(this._config.parent));
            var e =
                '[data-toggle="collapse"][data-parent="' +
                this._config.parent +
                '"]',
              i = [].slice.call(t.querySelectorAll(e));
            return (
              st(i).each(function (t, e) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
              }),
              t
            );
          }),
          (t._addAriaAndCollapsedClass = function (t, e) {
            if (t) {
              var n = st(t).hasClass(gt);
              e.length && st(e).toggleClass(pt, !n).attr("aria-expanded", n);
            }
          }),
          (a._getTargetFromElement = function (t) {
            var e = Fn.getSelectorFromElement(t);
            return e ? document.querySelector(e) : null;
          }),
          (a._jQueryInterface = function (i) {
            return this.each(function () {
              var t = st(this),
                e = t.data(lt),
                n = l({}, ut, t.data(), "object" == typeof i && i ? i : {});
              if (
                (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                e || ((e = new a(this, n)), t.data(lt, e)),
                "string" == typeof i)
              ) {
                if ("undefined" == typeof e[i])
                  throw new TypeError('No method named "' + i + '"');
                e[i]();
              }
            });
          }),
          s(a, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return ut;
              },
            },
          ]),
          a
        );
      })()),
      st(document).on(dt.CLICK_DATA_API, Ct, function (t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = st(this),
          e = Fn.getSelectorFromElement(this),
          i = [].slice.call(document.querySelectorAll(e));
        st(i).each(function () {
          var t = st(this),
            e = t.data(lt) ? "toggle" : n.data();
          Tt._jQueryInterface.call(t, e);
        });
      }),
      (st.fn[at] = Tt._jQueryInterface),
      (st.fn[at].Constructor = Tt),
      (st.fn[at].noConflict = function () {
        return (st.fn[at] = ht), Tt._jQueryInterface;
      }),
      Tt),
    Vn =
      ((St = "dropdown"),
      (At = "." + (It = "bs.dropdown")),
      (Dt = ".data-api"),
      (wt = (bt = e).fn[St]),
      (Nt = new RegExp("38|40|27")),
      (Ot = {
        HIDE: "hide" + At,
        HIDDEN: "hidden" + At,
        SHOW: "show" + At,
        SHOWN: "shown" + At,
        CLICK: "click" + At,
        CLICK_DATA_API: "click" + At + Dt,
        KEYDOWN_DATA_API: "keydown" + At + Dt,
        KEYUP_DATA_API: "keyup" + At + Dt,
      }),
      (kt = "disabled"),
      (Pt = "show"),
      (jt = "dropup"),
      (Ht = "dropright"),
      (Lt = "dropleft"),
      (Rt = "dropdown-menu-right"),
      (xt = "position-static"),
      (Wt = '[data-toggle="dropdown"]'),
      (Ut = ".dropdown form"),
      (qt = ".dropdown-menu"),
      (Ft = ".navbar-nav"),
      (Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"),
      (Mt = "top-start"),
      (Qt = "top-end"),
      (Bt = "bottom-start"),
      (Vt = "bottom-end"),
      (Yt = "right-start"),
      (zt = "left-start"),
      (Jt = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
      }),
      (Zt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
      }),
      (Gt = (function () {
        function c(t, e) {
          (this._element = t),
            (this._popper = null),
            (this._config = this._getConfig(e)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var t = c.prototype;
        return (
          (t.toggle = function () {
            if (!this._element.disabled && !bt(this._element).hasClass(kt)) {
              var t = c._getParentFromElement(this._element),
                e = bt(this._menu).hasClass(Pt);
              if ((c._clearMenus(), !e)) {
                var n = { relatedTarget: this._element },
                  i = bt.Event(Ot.SHOW, n);
                if ((bt(t).trigger(i), !i.isDefaultPrevented())) {
                  if (!this._inNavbar) {
                    if ("undefined" == typeof h)
                      throw new TypeError(
                        "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                      );
                    var r = this._element;
                    "parent" === this._config.reference
                      ? (r = t)
                      : Fn.isElement(this._config.reference) &&
                        ((r = this._config.reference),
                        "undefined" != typeof this._config.reference.jquery &&
                          (r = this._config.reference[0])),
                      "scrollParent" !== this._config.boundary &&
                        bt(t).addClass(xt),
                      (this._popper = new h(
                        r,
                        this._menu,
                        this._getPopperConfig()
                      ));
                  }
                  "ontouchstart" in document.documentElement &&
                    0 === bt(t).closest(Ft).length &&
                    bt(document.body).children().on("mouseover", null, bt.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    bt(this._menu).toggleClass(Pt),
                    bt(t).toggleClass(Pt).trigger(bt.Event(Ot.SHOWN, n));
                }
              }
            }
          }),
          (t.dispose = function () {
            bt.removeData(this._element, It),
              bt(this._element).off(At),
              (this._element = null),
              (this._menu = null) !== this._popper &&
                (this._popper.destroy(), (this._popper = null));
          }),
          (t.update = function () {
            (this._inNavbar = this._detectNavbar()),
              null !== this._popper && this._popper.scheduleUpdate();
          }),
          (t._addEventListeners = function () {
            var e = this;
            bt(this._element).on(Ot.CLICK, function (t) {
              t.preventDefault(), t.stopPropagation(), e.toggle();
            });
          }),
          (t._getConfig = function (t) {
            return (
              (t = l(
                {},
                this.constructor.Default,
                bt(this._element).data(),
                t
              )),
              Fn.typeCheckConfig(St, t, this.constructor.DefaultType),
              t
            );
          }),
          (t._getMenuElement = function () {
            if (!this._menu) {
              var t = c._getParentFromElement(this._element);
              t && (this._menu = t.querySelector(qt));
            }
            return this._menu;
          }),
          (t._getPlacement = function () {
            var t = bt(this._element.parentNode),
              e = Bt;
            return (
              t.hasClass(jt)
                ? ((e = Mt), bt(this._menu).hasClass(Rt) && (e = Qt))
                : t.hasClass(Ht)
                ? (e = Yt)
                : t.hasClass(Lt)
                ? (e = zt)
                : bt(this._menu).hasClass(Rt) && (e = Vt),
              e
            );
          }),
          (t._detectNavbar = function () {
            return 0 < bt(this._element).closest(".navbar").length;
          }),
          (t._getPopperConfig = function () {
            var e = this,
              t = {};
            "function" == typeof this._config.offset
              ? (t.fn = function (t) {
                  return (
                    (t.offsets = l(
                      {},
                      t.offsets,
                      e._config.offset(t.offsets) || {}
                    )),
                    t
                  );
                })
              : (t.offset = this._config.offset);
            var n = {
              placement: this._getPlacement(),
              modifiers: {
                offset: t,
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary },
              },
            };
            return (
              "static" === this._config.display &&
                (n.modifiers.applyStyle = { enabled: !1 }),
              n
            );
          }),
          (c._jQueryInterface = function (e) {
            return this.each(function () {
              var t = bt(this).data(It);
              if (
                (t ||
                  ((t = new c(this, "object" == typeof e ? e : null)),
                  bt(this).data(It, t)),
                "string" == typeof e)
              ) {
                if ("undefined" == typeof t[e])
                  throw new TypeError('No method named "' + e + '"');
                t[e]();
              }
            });
          }),
          (c._clearMenus = function (t) {
            if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
              for (
                var e = [].slice.call(document.querySelectorAll(Wt)),
                  n = 0,
                  i = e.length;
                n < i;
                n++
              ) {
                var r = c._getParentFromElement(e[n]),
                  o = bt(e[n]).data(It),
                  s = { relatedTarget: e[n] };
                if ((t && "click" === t.type && (s.clickEvent = t), o)) {
                  var a = o._menu;
                  if (
                    bt(r).hasClass(Pt) &&
                    !(
                      t &&
                      (("click" === t.type &&
                        /input|textarea/i.test(t.target.tagName)) ||
                        ("keyup" === t.type && 9 === t.which)) &&
                      bt.contains(r, t.target)
                    )
                  ) {
                    var l = bt.Event(Ot.HIDE, s);
                    bt(r).trigger(l),
                      l.isDefaultPrevented() ||
                        ("ontouchstart" in document.documentElement &&
                          bt(document.body)
                            .children()
                            .off("mouseover", null, bt.noop),
                        e[n].setAttribute("aria-expanded", "false"),
                        bt(a).removeClass(Pt),
                        bt(r).removeClass(Pt).trigger(bt.Event(Ot.HIDDEN, s)));
                  }
                }
              }
          }),
          (c._getParentFromElement = function (t) {
            var e,
              n = Fn.getSelectorFromElement(t);
            return n && (e = document.querySelector(n)), e || t.parentNode;
          }),
          (c._dataApiKeydownHandler = function (t) {
            if (
              (/input|textarea/i.test(t.target.tagName)
                ? !(
                    32 === t.which ||
                    (27 !== t.which &&
                      ((40 !== t.which && 38 !== t.which) ||
                        bt(t.target).closest(qt).length))
                  )
                : Nt.test(t.which)) &&
              (t.preventDefault(),
              t.stopPropagation(),
              !this.disabled && !bt(this).hasClass(kt))
            ) {
              var e = c._getParentFromElement(this),
                n = bt(e).hasClass(Pt);
              if (
                (n || (27 === t.which && 32 === t.which)) &&
                (!n || (27 !== t.which && 32 !== t.which))
              ) {
                var i = [].slice.call(e.querySelectorAll(Kt));
                if (0 !== i.length) {
                  var r = i.indexOf(t.target);
                  38 === t.which && 0 < r && r--,
                    40 === t.which && r < i.length - 1 && r++,
                    r < 0 && (r = 0),
                    i[r].focus();
                }
              } else {
                if (27 === t.which) {
                  var o = e.querySelector(Wt);
                  bt(o).trigger("focus");
                }
                bt(this).trigger("click");
              }
            }
          }),
          s(c, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return Jt;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Zt;
              },
            },
          ]),
          c
        );
      })()),
      bt(document)
        .on(Ot.KEYDOWN_DATA_API, Wt, Gt._dataApiKeydownHandler)
        .on(Ot.KEYDOWN_DATA_API, qt, Gt._dataApiKeydownHandler)
        .on(Ot.CLICK_DATA_API + " " + Ot.KEYUP_DATA_API, Gt._clearMenus)
        .on(Ot.CLICK_DATA_API, Wt, function (t) {
          t.preventDefault(),
            t.stopPropagation(),
            Gt._jQueryInterface.call(bt(this), "toggle");
        })
        .on(Ot.CLICK_DATA_API, Ut, function (t) {
          t.stopPropagation();
        }),
      (bt.fn[St] = Gt._jQueryInterface),
      (bt.fn[St].Constructor = Gt),
      (bt.fn[St].noConflict = function () {
        return (bt.fn[St] = wt), Gt._jQueryInterface;
      }),
      Gt),
    Yn =
      ((Xt = "modal"),
      (ee = "." + (te = "bs.modal")),
      (ne = ($t = e).fn[Xt]),
      (ie = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }),
      (re = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean",
      }),
      (oe = {
        HIDE: "hide" + ee,
        HIDDEN: "hidden" + ee,
        SHOW: "show" + ee,
        SHOWN: "shown" + ee,
        FOCUSIN: "focusin" + ee,
        RESIZE: "resize" + ee,
        CLICK_DISMISS: "click.dismiss" + ee,
        KEYDOWN_DISMISS: "keydown.dismiss" + ee,
        MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
        CLICK_DATA_API: "click" + ee + ".data-api",
      }),
      (se = "modal-scrollbar-measure"),
      (ae = "modal-backdrop"),
      (le = "modal-open"),
      (ce = "fade"),
      (he = "show"),
      (ue = ".modal-dialog"),
      (fe = '[data-toggle="modal"]'),
      (de = '[data-dismiss="modal"]'),
      (ge = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"),
      (_e = ".sticky-top"),
      (me = (function () {
        function r(t, e) {
          (this._config = this._getConfig(e)),
            (this._element = t),
            (this._dialog = t.querySelector(ue)),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._scrollbarWidth = 0);
        }
        var t = r.prototype;
        return (
          (t.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t);
          }),
          (t.show = function (t) {
            var e = this;
            if (!this._isTransitioning && !this._isShown) {
              $t(this._element).hasClass(ce) && (this._isTransitioning = !0);
              var n = $t.Event(oe.SHOW, { relatedTarget: t });
              $t(this._element).trigger(n),
                this._isShown ||
                  n.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  $t(document.body).addClass(le),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  $t(this._element).on(oe.CLICK_DISMISS, de, function (t) {
                    return e.hide(t);
                  }),
                  $t(this._dialog).on(oe.MOUSEDOWN_DISMISS, function () {
                    $t(e._element).one(oe.MOUSEUP_DISMISS, function (t) {
                      $t(t.target).is(e._element) &&
                        (e._ignoreBackdropClick = !0);
                    });
                  }),
                  this._showBackdrop(function () {
                    return e._showElement(t);
                  }));
            }
          }),
          (t.hide = function (t) {
            var e = this;
            if (
              (t && t.preventDefault(), !this._isTransitioning && this._isShown)
            ) {
              var n = $t.Event(oe.HIDE);
              if (
                ($t(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented())
              ) {
                this._isShown = !1;
                var i = $t(this._element).hasClass(ce);
                if (
                  (i && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  $t(document).off(oe.FOCUSIN),
                  $t(this._element).removeClass(he),
                  $t(this._element).off(oe.CLICK_DISMISS),
                  $t(this._dialog).off(oe.MOUSEDOWN_DISMISS),
                  i)
                ) {
                  var r = Fn.getTransitionDurationFromElement(this._element);
                  $t(this._element)
                    .one(Fn.TRANSITION_END, function (t) {
                      return e._hideModal(t);
                    })
                    .emulateTransitionEnd(r);
                } else this._hideModal();
              }
            }
          }),
          (t.dispose = function () {
            $t.removeData(this._element, te),
              $t(window, document, this._element, this._backdrop).off(ee),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._scrollbarWidth = null);
          }),
          (t.handleUpdate = function () {
            this._adjustDialog();
          }),
          (t._getConfig = function (t) {
            return (t = l({}, ie, t)), Fn.typeCheckConfig(Xt, t, re), t;
          }),
          (t._showElement = function (t) {
            var e = this,
              n = $t(this._element).hasClass(ce);
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              (this._element.scrollTop = 0),
              n && Fn.reflow(this._element),
              $t(this._element).addClass(he),
              this._config.focus && this._enforceFocus();
            var i = $t.Event(oe.SHOWN, { relatedTarget: t }),
              r = function () {
                e._config.focus && e._element.focus(),
                  (e._isTransitioning = !1),
                  $t(e._element).trigger(i);
              };
            if (n) {
              var o = Fn.getTransitionDurationFromElement(this._element);
              $t(this._dialog)
                .one(Fn.TRANSITION_END, r)
                .emulateTransitionEnd(o);
            } else r();
          }),
          (t._enforceFocus = function () {
            var e = this;
            $t(document)
              .off(oe.FOCUSIN)
              .on(oe.FOCUSIN, function (t) {
                document !== t.target &&
                  e._element !== t.target &&
                  0 === $t(e._element).has(t.target).length &&
                  e._element.focus();
              });
          }),
          (t._setEscapeEvent = function () {
            var e = this;
            this._isShown && this._config.keyboard
              ? $t(this._element).on(oe.KEYDOWN_DISMISS, function (t) {
                  27 === t.which && (t.preventDefault(), e.hide());
                })
              : this._isShown || $t(this._element).off(oe.KEYDOWN_DISMISS);
          }),
          (t._setResizeEvent = function () {
            var e = this;
            this._isShown
              ? $t(window).on(oe.RESIZE, function (t) {
                  return e.handleUpdate(t);
                })
              : $t(window).off(oe.RESIZE);
          }),
          (t._hideModal = function () {
            var t = this;
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                $t(document.body).removeClass(le),
                  t._resetAdjustments(),
                  t._resetScrollbar(),
                  $t(t._element).trigger(oe.HIDDEN);
              });
          }),
          (t._removeBackdrop = function () {
            this._backdrop &&
              ($t(this._backdrop).remove(), (this._backdrop = null));
          }),
          (t._showBackdrop = function (t) {
            var e = this,
              n = $t(this._element).hasClass(ce) ? ce : "";
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = ae),
                n && this._backdrop.classList.add(n),
                $t(this._backdrop).appendTo(document.body),
                $t(this._element).on(oe.CLICK_DISMISS, function (t) {
                  e._ignoreBackdropClick
                    ? (e._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      ("static" === e._config.backdrop
                        ? e._element.focus()
                        : e.hide());
                }),
                n && Fn.reflow(this._backdrop),
                $t(this._backdrop).addClass(he),
                !t)
              )
                return;
              if (!n) return void t();
              var i = Fn.getTransitionDurationFromElement(this._backdrop);
              $t(this._backdrop)
                .one(Fn.TRANSITION_END, t)
                .emulateTransitionEnd(i);
            } else if (!this._isShown && this._backdrop) {
              $t(this._backdrop).removeClass(he);
              var r = function () {
                e._removeBackdrop(), t && t();
              };
              if ($t(this._element).hasClass(ce)) {
                var o = Fn.getTransitionDurationFromElement(this._backdrop);
                $t(this._backdrop)
                  .one(Fn.TRANSITION_END, r)
                  .emulateTransitionEnd(o);
              } else r();
            } else t && t();
          }),
          (t._adjustDialog = function () {
            var t =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            !this._isBodyOverflowing &&
              t &&
              (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
              this._isBodyOverflowing &&
                !t &&
                (this._element.style.paddingRight =
                  this._scrollbarWidth + "px");
          }),
          (t._resetAdjustments = function () {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }),
          (t._checkScrollbar = function () {
            var t = document.body.getBoundingClientRect();
            (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (t._setScrollbar = function () {
            var r = this;
            if (this._isBodyOverflowing) {
              var t = [].slice.call(document.querySelectorAll(ge)),
                e = [].slice.call(document.querySelectorAll(_e));
              $t(t).each(function (t, e) {
                var n = e.style.paddingRight,
                  i = $t(e).css("padding-right");
                $t(e)
                  .data("padding-right", n)
                  .css(
                    "padding-right",
                    parseFloat(i) + r._scrollbarWidth + "px"
                  );
              }),
                $t(e).each(function (t, e) {
                  var n = e.style.marginRight,
                    i = $t(e).css("margin-right");
                  $t(e)
                    .data("margin-right", n)
                    .css(
                      "margin-right",
                      parseFloat(i) - r._scrollbarWidth + "px"
                    );
                });
              var n = document.body.style.paddingRight,
                i = $t(document.body).css("padding-right");
              $t(document.body)
                .data("padding-right", n)
                .css(
                  "padding-right",
                  parseFloat(i) + this._scrollbarWidth + "px"
                );
            }
          }),
          (t._resetScrollbar = function () {
            var t = [].slice.call(document.querySelectorAll(ge));
            $t(t).each(function (t, e) {
              var n = $t(e).data("padding-right");
              $t(e).removeData("padding-right"),
                (e.style.paddingRight = n || "");
            });
            var e = [].slice.call(document.querySelectorAll("" + _e));
            $t(e).each(function (t, e) {
              var n = $t(e).data("margin-right");
              "undefined" != typeof n &&
                $t(e).css("margin-right", n).removeData("margin-right");
            });
            var n = $t(document.body).data("padding-right");
            $t(document.body).removeData("padding-right"),
              (document.body.style.paddingRight = n || "");
          }),
          (t._getScrollbarWidth = function () {
            var t = document.createElement("div");
            (t.className = se), document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
          }),
          (r._jQueryInterface = function (n, i) {
            return this.each(function () {
              var t = $t(this).data(te),
                e = l(
                  {},
                  ie,
                  $t(this).data(),
                  "object" == typeof n && n ? n : {}
                );
              if (
                (t || ((t = new r(this, e)), $t(this).data(te, t)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n](i);
              } else e.show && t.show(i);
            });
          }),
          s(r, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return ie;
              },
            },
          ]),
          r
        );
      })()),
      $t(document).on(oe.CLICK_DATA_API, fe, function (t) {
        var e,
          n = this,
          i = Fn.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var r = $t(e).data(te)
          ? "toggle"
          : l({}, $t(e).data(), $t(this).data());
        ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
        var o = $t(e).one(oe.SHOW, function (t) {
          t.isDefaultPrevented() ||
            o.one(oe.HIDDEN, function () {
              $t(n).is(":visible") && n.focus();
            });
        });
        me._jQueryInterface.call($t(e), r, this);
      }),
      ($t.fn[Xt] = me._jQueryInterface),
      ($t.fn[Xt].Constructor = me),
      ($t.fn[Xt].noConflict = function () {
        return ($t.fn[Xt] = ne), me._jQueryInterface;
      }),
      me),
    zn =
      ((ve = "tooltip"),
      (Ee = "." + (ye = "bs.tooltip")),
      (Ce = (pe = e).fn[ve]),
      (Te = "bs-tooltip"),
      (be = new RegExp("(^|\\s)" + Te + "\\S+", "g")),
      (Ae = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !(Ie = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left",
        }),
        selector: !(Se = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)",
        }),
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
      }),
      (we = "out"),
      (Ne = {
        HIDE: "hide" + Ee,
        HIDDEN: "hidden" + Ee,
        SHOW: (De = "show") + Ee,
        SHOWN: "shown" + Ee,
        INSERTED: "inserted" + Ee,
        CLICK: "click" + Ee,
        FOCUSIN: "focusin" + Ee,
        FOCUSOUT: "focusout" + Ee,
        MOUSEENTER: "mouseenter" + Ee,
        MOUSELEAVE: "mouseleave" + Ee,
      }),
      (Oe = "fade"),
      (ke = "show"),
      (Pe = ".tooltip-inner"),
      (je = ".arrow"),
      (He = "hover"),
      (Le = "focus"),
      (Re = "click"),
      (xe = "manual"),
      (We = (function () {
        function i(t, e) {
          if ("undefined" == typeof h)
            throw new TypeError(
              "Bootstrap tooltips require Popper.js (https://popper.js.org)"
            );
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ""),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = t),
            (this.config = this._getConfig(e)),
            (this.tip = null),
            this._setListeners();
        }
        var t = i.prototype;
        return (
          (t.enable = function () {
            this._isEnabled = !0;
          }),
          (t.disable = function () {
            this._isEnabled = !1;
          }),
          (t.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (t.toggle = function (t) {
            if (this._isEnabled)
              if (t) {
                var e = this.constructor.DATA_KEY,
                  n = pe(t.currentTarget).data(e);
                n ||
                  ((n = new this.constructor(
                    t.currentTarget,
                    this._getDelegateConfig()
                  )),
                  pe(t.currentTarget).data(e, n)),
                  (n._activeTrigger.click = !n._activeTrigger.click),
                  n._isWithActiveTrigger()
                    ? n._enter(null, n)
                    : n._leave(null, n);
              } else {
                if (pe(this.getTipElement()).hasClass(ke))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (t.dispose = function () {
            clearTimeout(this._timeout),
              pe.removeData(this.element, this.constructor.DATA_KEY),
              pe(this.element).off(this.constructor.EVENT_KEY),
              pe(this.element).closest(".modal").off("hide.bs.modal"),
              this.tip && pe(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null) !== this._popper &&
                this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (t.show = function () {
            var e = this;
            if ("none" === pe(this.element).css("display"))
              throw new Error("Please use show on visible elements");
            var t = pe.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              pe(this.element).trigger(t);
              var n = pe.contains(
                this.element.ownerDocument.documentElement,
                this.element
              );
              if (t.isDefaultPrevented() || !n) return;
              var i = this.getTipElement(),
                r = Fn.getUID(this.constructor.NAME);
              i.setAttribute("id", r),
                this.element.setAttribute("aria-describedby", r),
                this.setContent(),
                this.config.animation && pe(i).addClass(Oe);
              var o =
                  "function" == typeof this.config.placement
                    ? this.config.placement.call(this, i, this.element)
                    : this.config.placement,
                s = this._getAttachment(o);
              this.addAttachmentClass(s);
              var a =
                !1 === this.config.container
                  ? document.body
                  : pe(document).find(this.config.container);
              pe(i).data(this.constructor.DATA_KEY, this),
                pe.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip
                ) || pe(i).appendTo(a),
                pe(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new h(this.element, i, {
                  placement: s,
                  modifiers: {
                    offset: { offset: this.config.offset },
                    flip: { behavior: this.config.fallbackPlacement },
                    arrow: { element: je },
                    preventOverflow: {
                      boundariesElement: this.config.boundary,
                    },
                  },
                  onCreate: function (t) {
                    t.originalPlacement !== t.placement &&
                      e._handlePopperPlacementChange(t);
                  },
                  onUpdate: function (t) {
                    e._handlePopperPlacementChange(t);
                  },
                })),
                pe(i).addClass(ke),
                "ontouchstart" in document.documentElement &&
                  pe(document.body).children().on("mouseover", null, pe.noop);
              var l = function () {
                e.config.animation && e._fixTransition();
                var t = e._hoverState;
                (e._hoverState = null),
                  pe(e.element).trigger(e.constructor.Event.SHOWN),
                  t === we && e._leave(null, e);
              };
              if (pe(this.tip).hasClass(Oe)) {
                var c = Fn.getTransitionDurationFromElement(this.tip);
                pe(this.tip).one(Fn.TRANSITION_END, l).emulateTransitionEnd(c);
              } else l();
            }
          }),
          (t.hide = function (t) {
            var e = this,
              n = this.getTipElement(),
              i = pe.Event(this.constructor.Event.HIDE),
              r = function () {
                e._hoverState !== De &&
                  n.parentNode &&
                  n.parentNode.removeChild(n),
                  e._cleanTipClass(),
                  e.element.removeAttribute("aria-describedby"),
                  pe(e.element).trigger(e.constructor.Event.HIDDEN),
                  null !== e._popper && e._popper.destroy(),
                  t && t();
              };
            if ((pe(this.element).trigger(i), !i.isDefaultPrevented())) {
              if (
                (pe(n).removeClass(ke),
                "ontouchstart" in document.documentElement &&
                  pe(document.body).children().off("mouseover", null, pe.noop),
                (this._activeTrigger[Re] = !1),
                (this._activeTrigger[Le] = !1),
                (this._activeTrigger[He] = !1),
                pe(this.tip).hasClass(Oe))
              ) {
                var o = Fn.getTransitionDurationFromElement(n);
                pe(n).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o);
              } else r();
              this._hoverState = "";
            }
          }),
          (t.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (t.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (t.addAttachmentClass = function (t) {
            pe(this.getTipElement()).addClass(Te + "-" + t);
          }),
          (t.getTipElement = function () {
            return (
              (this.tip = this.tip || pe(this.config.template)[0]), this.tip
            );
          }),
          (t.setContent = function () {
            var t = this.getTipElement();
            this.setElementContent(pe(t.querySelectorAll(Pe)), this.getTitle()),
              pe(t).removeClass(Oe + " " + ke);
          }),
          (t.setElementContent = function (t, e) {
            var n = this.config.html;
            "object" == typeof e && (e.nodeType || e.jquery)
              ? n
                ? pe(e).parent().is(t) || t.empty().append(e)
                : t.text(pe(e).text())
              : t[n ? "html" : "text"](e);
          }),
          (t.getTitle = function () {
            var t = this.element.getAttribute("data-original-title");
            return (
              t ||
                (t =
                  "function" == typeof this.config.title
                    ? this.config.title.call(this.element)
                    : this.config.title),
              t
            );
          }),
          (t._getAttachment = function (t) {
            return Ie[t.toUpperCase()];
          }),
          (t._setListeners = function () {
            var i = this;
            this.config.trigger.split(" ").forEach(function (t) {
              if ("click" === t)
                pe(i.element).on(
                  i.constructor.Event.CLICK,
                  i.config.selector,
                  function (t) {
                    return i.toggle(t);
                  }
                );
              else if (t !== xe) {
                var e =
                    t === He
                      ? i.constructor.Event.MOUSEENTER
                      : i.constructor.Event.FOCUSIN,
                  n =
                    t === He
                      ? i.constructor.Event.MOUSELEAVE
                      : i.constructor.Event.FOCUSOUT;
                pe(i.element)
                  .on(e, i.config.selector, function (t) {
                    return i._enter(t);
                  })
                  .on(n, i.config.selector, function (t) {
                    return i._leave(t);
                  });
              }
              pe(i.element)
                .closest(".modal")
                .on("hide.bs.modal", function () {
                  return i.hide();
                });
            }),
              this.config.selector
                ? (this.config = l({}, this.config, {
                    trigger: "manual",
                    selector: "",
                  }))
                : this._fixTitle();
          }),
          (t._fixTitle = function () {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) &&
              (this.element.setAttribute(
                "data-original-title",
                this.element.getAttribute("title") || ""
              ),
              this.element.setAttribute("title", ""));
          }),
          (t._enter = function (t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || pe(t.currentTarget).data(n)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              pe(t.currentTarget).data(n, e)),
              t && (e._activeTrigger["focusin" === t.type ? Le : He] = !0),
              pe(e.getTipElement()).hasClass(ke) || e._hoverState === De
                ? (e._hoverState = De)
                : (clearTimeout(e._timeout),
                  (e._hoverState = De),
                  e.config.delay && e.config.delay.show
                    ? (e._timeout = setTimeout(function () {
                        e._hoverState === De && e.show();
                      }, e.config.delay.show))
                    : e.show());
          }),
          (t._leave = function (t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || pe(t.currentTarget).data(n)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              pe(t.currentTarget).data(n, e)),
              t && (e._activeTrigger["focusout" === t.type ? Le : He] = !1),
              e._isWithActiveTrigger() ||
                (clearTimeout(e._timeout),
                (e._hoverState = we),
                e.config.delay && e.config.delay.hide
                  ? (e._timeout = setTimeout(function () {
                      e._hoverState === we && e.hide();
                    }, e.config.delay.hide))
                  : e.hide());
          }),
          (t._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger)
              if (this._activeTrigger[t]) return !0;
            return !1;
          }),
          (t._getConfig = function (t) {
            return (
              "number" ==
                typeof (t = l(
                  {},
                  this.constructor.Default,
                  pe(this.element).data(),
                  "object" == typeof t && t ? t : {}
                )).delay && (t.delay = { show: t.delay, hide: t.delay }),
              "number" == typeof t.title && (t.title = t.title.toString()),
              "number" == typeof t.content &&
                (t.content = t.content.toString()),
              Fn.typeCheckConfig(ve, t, this.constructor.DefaultType),
              t
            );
          }),
          (t._getDelegateConfig = function () {
            var t = {};
            if (this.config)
              for (var e in this.config)
                this.constructor.Default[e] !== this.config[e] &&
                  (t[e] = this.config[e]);
            return t;
          }),
          (t._cleanTipClass = function () {
            var t = pe(this.getTipElement()),
              e = t.attr("class").match(be);
            null !== e && e.length && t.removeClass(e.join(""));
          }),
          (t._handlePopperPlacementChange = function (t) {
            var e = t.instance;
            (this.tip = e.popper),
              this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(t.placement));
          }),
          (t._fixTransition = function () {
            var t = this.getTipElement(),
              e = this.config.animation;
            null === t.getAttribute("x-placement") &&
              (pe(t).removeClass(Oe),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = e));
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = pe(this).data(ye),
                e = "object" == typeof n && n;
              if (
                (t || !/dispose|hide/.test(n)) &&
                (t || ((t = new i(this, e)), pe(this).data(ye, t)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return Ae;
              },
            },
            {
              key: "NAME",
              get: function () {
                return ve;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return ye;
              },
            },
            {
              key: "Event",
              get: function () {
                return Ne;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return Ee;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Se;
              },
            },
          ]),
          i
        );
      })()),
      (pe.fn[ve] = We._jQueryInterface),
      (pe.fn[ve].Constructor = We),
      (pe.fn[ve].noConflict = function () {
        return (pe.fn[ve] = Ce), We._jQueryInterface;
      }),
      We),
    Jn =
      ((qe = "popover"),
      (Ke = "." + (Fe = "bs.popover")),
      (Me = (Ue = e).fn[qe]),
      (Qe = "bs-popover"),
      (Be = new RegExp("(^|\\s)" + Qe + "\\S+", "g")),
      (Ve = l({}, zn.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      })),
      (Ye = l({}, zn.DefaultType, { content: "(string|element|function)" })),
      (ze = "fade"),
      (Ze = ".popover-header"),
      (Ge = ".popover-body"),
      ($e = {
        HIDE: "hide" + Ke,
        HIDDEN: "hidden" + Ke,
        SHOW: (Je = "show") + Ke,
        SHOWN: "shown" + Ke,
        INSERTED: "inserted" + Ke,
        CLICK: "click" + Ke,
        FOCUSIN: "focusin" + Ke,
        FOCUSOUT: "focusout" + Ke,
        MOUSEENTER: "mouseenter" + Ke,
        MOUSELEAVE: "mouseleave" + Ke,
      }),
      (Xe = (function (t) {
        var e, n;
        function i() {
          return t.apply(this, arguments) || this;
        }
        (n = t),
          ((e = i).prototype = Object.create(n.prototype)),
          ((e.prototype.constructor = e).__proto__ = n);
        var r = i.prototype;
        return (
          (r.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (r.addAttachmentClass = function (t) {
            Ue(this.getTipElement()).addClass(Qe + "-" + t);
          }),
          (r.getTipElement = function () {
            return (
              (this.tip = this.tip || Ue(this.config.template)[0]), this.tip
            );
          }),
          (r.setContent = function () {
            var t = Ue(this.getTipElement());
            this.setElementContent(t.find(Ze), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)),
              this.setElementContent(t.find(Ge), e),
              t.removeClass(ze + " " + Je);
          }),
          (r._getContent = function () {
            return (
              this.element.getAttribute("data-content") || this.config.content
            );
          }),
          (r._cleanTipClass = function () {
            var t = Ue(this.getTipElement()),
              e = t.attr("class").match(Be);
            null !== e && 0 < e.length && t.removeClass(e.join(""));
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = Ue(this).data(Fe),
                e = "object" == typeof n ? n : null;
              if (
                (t || !/destroy|hide/.test(n)) &&
                (t || ((t = new i(this, e)), Ue(this).data(Fe, t)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return Ve;
              },
            },
            {
              key: "NAME",
              get: function () {
                return qe;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return Fe;
              },
            },
            {
              key: "Event",
              get: function () {
                return $e;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return Ke;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Ye;
              },
            },
          ]),
          i
        );
      })(zn)),
      (Ue.fn[qe] = Xe._jQueryInterface),
      (Ue.fn[qe].Constructor = Xe),
      (Ue.fn[qe].noConflict = function () {
        return (Ue.fn[qe] = Me), Xe._jQueryInterface;
      }),
      Xe),
    Zn =
      ((en = "scrollspy"),
      (rn = "." + (nn = "bs.scrollspy")),
      (on = (tn = e).fn[en]),
      (sn = { offset: 10, method: "auto", target: "" }),
      (an = { offset: "number", method: "string", target: "(string|element)" }),
      (ln = {
        ACTIVATE: "activate" + rn,
        SCROLL: "scroll" + rn,
        LOAD_DATA_API: "load" + rn + ".data-api",
      }),
      (cn = "dropdown-item"),
      (hn = "active"),
      (un = '[data-spy="scroll"]'),
      (fn = ".active"),
      (dn = ".nav, .list-group"),
      (gn = ".nav-link"),
      (_n = ".nav-item"),
      (mn = ".list-group-item"),
      (pn = ".dropdown"),
      (vn = ".dropdown-item"),
      (yn = ".dropdown-toggle"),
      (En = "offset"),
      (Cn = "position"),
      (Tn = (function () {
        function n(t, e) {
          var n = this;
          (this._element = t),
            (this._scrollElement = "BODY" === t.tagName ? window : t),
            (this._config = this._getConfig(e)),
            (this._selector =
              this._config.target +
              " " +
              gn +
              "," +
              this._config.target +
              " " +
              mn +
              "," +
              this._config.target +
              " " +
              vn),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            tn(this._scrollElement).on(ln.SCROLL, function (t) {
              return n._process(t);
            }),
            this.refresh(),
            this._process();
        }
        var t = n.prototype;
        return (
          (t.refresh = function () {
            var e = this,
              t = this._scrollElement === this._scrollElement.window ? En : Cn,
              r = "auto" === this._config.method ? t : this._config.method,
              o = r === Cn ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              [].slice
                .call(document.querySelectorAll(this._selector))
                .map(function (t) {
                  var e,
                    n = Fn.getSelectorFromElement(t);
                  if ((n && (e = document.querySelector(n)), e)) {
                    var i = e.getBoundingClientRect();
                    if (i.width || i.height) return [tn(e)[r]().top + o, n];
                  }
                  return null;
                })
                .filter(function (t) {
                  return t;
                })
                .sort(function (t, e) {
                  return t[0] - e[0];
                })
                .forEach(function (t) {
                  e._offsets.push(t[0]), e._targets.push(t[1]);
                });
          }),
          (t.dispose = function () {
            tn.removeData(this._element, nn),
              tn(this._scrollElement).off(rn),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (t._getConfig = function (t) {
            if (
              "string" !=
              typeof (t = l({}, sn, "object" == typeof t && t ? t : {})).target
            ) {
              var e = tn(t.target).attr("id");
              e || ((e = Fn.getUID(en)), tn(t.target).attr("id", e)),
                (t.target = "#" + e);
            }
            return Fn.typeCheckConfig(en, t, an), t;
          }),
          (t._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (t._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (t._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (t._process = function () {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              n = this._config.offset + e - this._getOffsetHeight();
            if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i);
            } else {
              if (
                this._activeTarget &&
                t < this._offsets[0] &&
                0 < this._offsets[0]
              )
                return (this._activeTarget = null), void this._clear();
              for (var r = this._offsets.length; r--; ) {
                this._activeTarget !== this._targets[r] &&
                  t >= this._offsets[r] &&
                  ("undefined" == typeof this._offsets[r + 1] ||
                    t < this._offsets[r + 1]) &&
                  this._activate(this._targets[r]);
              }
            }
          }),
          (t._activate = function (e) {
            (this._activeTarget = e), this._clear();
            var t = this._selector.split(",");
            t = t.map(function (t) {
              return (
                t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
              );
            });
            var n = tn([].slice.call(document.querySelectorAll(t.join(","))));
            n.hasClass(cn)
              ? (n.closest(pn).find(yn).addClass(hn), n.addClass(hn))
              : (n.addClass(hn),
                n
                  .parents(dn)
                  .prev(gn + ", " + mn)
                  .addClass(hn),
                n.parents(dn).prev(_n).children(gn).addClass(hn)),
              tn(this._scrollElement).trigger(ln.ACTIVATE, {
                relatedTarget: e,
              });
          }),
          (t._clear = function () {
            var t = [].slice.call(document.querySelectorAll(this._selector));
            tn(t).filter(fn).removeClass(hn);
          }),
          (n._jQueryInterface = function (e) {
            return this.each(function () {
              var t = tn(this).data(nn);
              if (
                (t ||
                  ((t = new n(this, "object" == typeof e && e)),
                  tn(this).data(nn, t)),
                "string" == typeof e)
              ) {
                if ("undefined" == typeof t[e])
                  throw new TypeError('No method named "' + e + '"');
                t[e]();
              }
            });
          }),
          s(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return sn;
              },
            },
          ]),
          n
        );
      })()),
      tn(window).on(ln.LOAD_DATA_API, function () {
        for (
          var t = [].slice.call(document.querySelectorAll(un)), e = t.length;
          e--;

        ) {
          var n = tn(t[e]);
          Tn._jQueryInterface.call(n, n.data());
        }
      }),
      (tn.fn[en] = Tn._jQueryInterface),
      (tn.fn[en].Constructor = Tn),
      (tn.fn[en].noConflict = function () {
        return (tn.fn[en] = on), Tn._jQueryInterface;
      }),
      Tn),
    Gn =
      ((In = "." + (Sn = "bs.tab")),
      (An = (bn = e).fn.tab),
      (Dn = {
        HIDE: "hide" + In,
        HIDDEN: "hidden" + In,
        SHOW: "show" + In,
        SHOWN: "shown" + In,
        CLICK_DATA_API: "click" + In + ".data-api",
      }),
      (wn = "dropdown-menu"),
      (Nn = "active"),
      (On = "disabled"),
      (kn = "fade"),
      (Pn = "show"),
      (jn = ".dropdown"),
      (Hn = ".nav, .list-group"),
      (Ln = ".active"),
      (Rn = "> li > .active"),
      (xn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'),
      (Wn = ".dropdown-toggle"),
      (Un = "> .dropdown-menu .active"),
      (qn = (function () {
        function i(t) {
          this._element = t;
        }
        var t = i.prototype;
        return (
          (t.show = function () {
            var n = this;
            if (
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  bn(this._element).hasClass(Nn)) ||
                bn(this._element).hasClass(On)
              )
            ) {
              var t,
                i,
                e = bn(this._element).closest(Hn)[0],
                r = Fn.getSelectorFromElement(this._element);
              if (e) {
                var o = "UL" === e.nodeName ? Rn : Ln;
                i = (i = bn.makeArray(bn(e).find(o)))[i.length - 1];
              }
              var s = bn.Event(Dn.HIDE, { relatedTarget: this._element }),
                a = bn.Event(Dn.SHOW, { relatedTarget: i });
              if (
                (i && bn(i).trigger(s),
                bn(this._element).trigger(a),
                !a.isDefaultPrevented() && !s.isDefaultPrevented())
              ) {
                r && (t = document.querySelector(r)),
                  this._activate(this._element, e);
                var l = function () {
                  var t = bn.Event(Dn.HIDDEN, { relatedTarget: n._element }),
                    e = bn.Event(Dn.SHOWN, { relatedTarget: i });
                  bn(i).trigger(t), bn(n._element).trigger(e);
                };
                t ? this._activate(t, t.parentNode, l) : l();
              }
            }
          }),
          (t.dispose = function () {
            bn.removeData(this._element, Sn), (this._element = null);
          }),
          (t._activate = function (t, e, n) {
            var i = this,
              r = (
                "UL" === e.nodeName ? bn(e).find(Rn) : bn(e).children(Ln)
              )[0],
              o = n && r && bn(r).hasClass(kn),
              s = function () {
                return i._transitionComplete(t, r, n);
              };
            if (r && o) {
              var a = Fn.getTransitionDurationFromElement(r);
              bn(r).one(Fn.TRANSITION_END, s).emulateTransitionEnd(a);
            } else s();
          }),
          (t._transitionComplete = function (t, e, n) {
            if (e) {
              bn(e).removeClass(Pn + " " + Nn);
              var i = bn(e.parentNode).find(Un)[0];
              i && bn(i).removeClass(Nn),
                "tab" === e.getAttribute("role") &&
                  e.setAttribute("aria-selected", !1);
            }
            if (
              (bn(t).addClass(Nn),
              "tab" === t.getAttribute("role") &&
                t.setAttribute("aria-selected", !0),
              Fn.reflow(t),
              bn(t).addClass(Pn),
              t.parentNode && bn(t.parentNode).hasClass(wn))
            ) {
              var r = bn(t).closest(jn)[0];
              if (r) {
                var o = [].slice.call(r.querySelectorAll(Wn));
                bn(o).addClass(Nn);
              }
              t.setAttribute("aria-expanded", !0);
            }
            n && n();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = bn(this),
                e = t.data(Sn);
              if (
                (e || ((e = new i(this)), t.data(Sn, e)), "string" == typeof n)
              ) {
                if ("undefined" == typeof e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
          ]),
          i
        );
      })()),
      bn(document).on(Dn.CLICK_DATA_API, xn, function (t) {
        t.preventDefault(), qn._jQueryInterface.call(bn(this), "show");
      }),
      (bn.fn.tab = qn._jQueryInterface),
      (bn.fn.tab.Constructor = qn),
      (bn.fn.tab.noConflict = function () {
        return (bn.fn.tab = An), qn._jQueryInterface;
      }),
      qn);
  !(function (t) {
    if ("undefined" == typeof t)
      throw new TypeError(
        "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
      );
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (
      (e[0] < 2 && e[1] < 9) ||
      (1 === e[0] && 9 === e[1] && e[2] < 1) ||
      4 <= e[0]
    )
      throw new Error(
        "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
      );
  })(e),
    (t.Util = Fn),
    (t.Alert = Kn),
    (t.Button = Mn),
    (t.Carousel = Qn),
    (t.Collapse = Bn),
    (t.Dropdown = Vn),
    (t.Modal = Yn),
    (t.Popover = Jn),
    (t.Scrollspy = Zn),
    (t.Tab = Gn),
    (t.Tooltip = zn),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.min.js.map

/*! Stellar.js v0.6.2 | Copyright 2013, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
(function (e, t, n, r) {
  function d(t, n) {
    (this.element = t),
      (this.options = e.extend({}, s, n)),
      (this._defaults = s),
      (this._name = i),
      this.init();
  }
  var i = "stellar",
    s = {
      scrollProperty: "scroll",
      positionProperty: "position",
      horizontalScrolling: !0,
      verticalScrolling: !0,
      horizontalOffset: 0,
      verticalOffset: 0,
      responsive: !1,
      parallaxBackgrounds: !0,
      parallaxElements: !0,
      hideDistantElements: !0,
      hideElement: function (e) {
        e.hide();
      },
      showElement: function (e) {
        e.show();
      },
    },
    o = {
      scroll: {
        getLeft: function (e) {
          return e.scrollLeft();
        },
        setLeft: function (e, t) {
          e.scrollLeft(t);
        },
        getTop: function (e) {
          return e.scrollTop();
        },
        setTop: function (e, t) {
          e.scrollTop(t);
        },
      },
      position: {
        getLeft: function (e) {
          return parseInt(e.css("left"), 10) * -1;
        },
        getTop: function (e) {
          return parseInt(e.css("top"), 10) * -1;
        },
      },
      margin: {
        getLeft: function (e) {
          return parseInt(e.css("margin-left"), 10) * -1;
        },
        getTop: function (e) {
          return parseInt(e.css("margin-top"), 10) * -1;
        },
      },
      transform: {
        getLeft: function (e) {
          var t = getComputedStyle(e[0])[f];
          return t !== "none"
            ? parseInt(t.match(/(-?[0-9]+)/g)[4], 10) * -1
            : 0;
        },
        getTop: function (e) {
          var t = getComputedStyle(e[0])[f];
          return t !== "none"
            ? parseInt(t.match(/(-?[0-9]+)/g)[5], 10) * -1
            : 0;
        },
      },
    },
    u = {
      position: {
        setLeft: function (e, t) {
          e.css("left", t);
        },
        setTop: function (e, t) {
          e.css("top", t);
        },
      },
      transform: {
        setPosition: function (e, t, n, r, i) {
          e[0].style[f] =
            "translate3d(" + (t - n) + "px, " + (r - i) + "px, 0)";
        },
      },
    },
    a = (function () {
      var t = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
        n = e("script")[0].style,
        r = "",
        i;
      for (i in n)
        if (t.test(i)) {
          r = i.match(t)[0];
          break;
        }
      return (
        "WebkitOpacity" in n && (r = "Webkit"),
        "KhtmlOpacity" in n && (r = "Khtml"),
        function (e) {
          return (
            r + (r.length > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e)
          );
        }
      );
    })(),
    f = a("transform"),
    l =
      e("<div />", { style: "background:#fff" }).css(
        "background-position-x"
      ) !== r,
    c = l
      ? function (e, t, n) {
          e.css({ "background-position-x": t, "background-position-y": n });
        }
      : function (e, t, n) {
          e.css("background-position", t + " " + n);
        },
    h = l
      ? function (e) {
          return [
            e.css("background-position-x"),
            e.css("background-position-y"),
          ];
        }
      : function (e) {
          return e.css("background-position").split(" ");
        },
    p =
      t.requestAnimationFrame ||
      t.webkitRequestAnimationFrame ||
      t.mozRequestAnimationFrame ||
      t.oRequestAnimationFrame ||
      t.msRequestAnimationFrame ||
      function (e) {
        setTimeout(e, 1e3 / 60);
      };
  (d.prototype = {
    init: function () {
      (this.options.name = i + "_" + Math.floor(Math.random() * 1e9)),
        this._defineElements(),
        this._defineGetters(),
        this._defineSetters(),
        this._handleWindowLoadAndResize(),
        this._detectViewport(),
        this.refresh({ firstLoad: !0 }),
        this.options.scrollProperty === "scroll"
          ? this._handleScrollEvent()
          : this._startAnimationLoop();
    },
    _defineElements: function () {
      this.element === n.body && (this.element = t),
        (this.$scrollElement = e(this.element)),
        (this.$element = this.element === t ? e("body") : this.$scrollElement),
        (this.$viewportElement =
          this.options.viewportElement !== r
            ? e(this.options.viewportElement)
            : this.$scrollElement[0] === t ||
              this.options.scrollProperty === "scroll"
            ? this.$scrollElement
            : this.$scrollElement.parent());
    },
    _defineGetters: function () {
      var e = this,
        t = o[e.options.scrollProperty];
      (this._getScrollLeft = function () {
        return t.getLeft(e.$scrollElement);
      }),
        (this._getScrollTop = function () {
          return t.getTop(e.$scrollElement);
        });
    },
    _defineSetters: function () {
      var t = this,
        n = o[t.options.scrollProperty],
        r = u[t.options.positionProperty],
        i = n.setLeft,
        s = n.setTop;
      (this._setScrollLeft =
        typeof i == "function"
          ? function (e) {
              i(t.$scrollElement, e);
            }
          : e.noop),
        (this._setScrollTop =
          typeof s == "function"
            ? function (e) {
                s(t.$scrollElement, e);
              }
            : e.noop),
        (this._setPosition =
          r.setPosition ||
          function (e, n, i, s, o) {
            t.options.horizontalScrolling && r.setLeft(e, n, i),
              t.options.verticalScrolling && r.setTop(e, s, o);
          });
    },
    _handleWindowLoadAndResize: function () {
      var n = this,
        r = e(t);
      n.options.responsive &&
        r.bind("load." + this.name, function () {
          n.refresh();
        }),
        r.bind("resize." + this.name, function () {
          n._detectViewport(), n.options.responsive && n.refresh();
        });
    },
    refresh: function (n) {
      var r = this,
        i = r._getScrollLeft(),
        s = r._getScrollTop();
      (!n || !n.firstLoad) && this._reset(),
        this._setScrollLeft(0),
        this._setScrollTop(0),
        this._setOffsets(),
        this._findParticles(),
        this._findBackgrounds(),
        n &&
          n.firstLoad &&
          /WebKit/.test(navigator.userAgent) &&
          e(t).load(function () {
            var e = r._getScrollLeft(),
              t = r._getScrollTop();
            r._setScrollLeft(e + 1),
              r._setScrollTop(t + 1),
              r._setScrollLeft(e),
              r._setScrollTop(t);
          }),
        this._setScrollLeft(i),
        this._setScrollTop(s);
    },
    _detectViewport: function () {
      var e = this.$viewportElement.offset(),
        t = e !== null && e !== r;
      (this.viewportWidth = this.$viewportElement.width()),
        (this.viewportHeight = this.$viewportElement.height()),
        (this.viewportOffsetTop = t ? e.top : 0),
        (this.viewportOffsetLeft = t ? e.left : 0);
    },
    _findParticles: function () {
      var t = this,
        n = this._getScrollLeft(),
        i = this._getScrollTop();
      if (this.particles !== r)
        for (var s = this.particles.length - 1; s >= 0; s--)
          this.particles[s].$element.data("stellar-elementIsActive", r);
      this.particles = [];
      if (!this.options.parallaxElements) return;
      this.$element.find("[data-stellar-ratio]").each(function (n) {
        var i = e(this),
          s,
          o,
          u,
          a,
          f,
          l,
          c,
          h,
          p,
          d = 0,
          v = 0,
          m = 0,
          g = 0;
        if (!i.data("stellar-elementIsActive"))
          i.data("stellar-elementIsActive", this);
        else if (i.data("stellar-elementIsActive") !== this) return;
        t.options.showElement(i),
          i.data("stellar-startingLeft")
            ? (i.css("left", i.data("stellar-startingLeft")),
              i.css("top", i.data("stellar-startingTop")))
            : (i.data("stellar-startingLeft", i.css("left")),
              i.data("stellar-startingTop", i.css("top"))),
          (u = i.position().left),
          (a = i.position().top),
          (f =
            i.css("margin-left") === "auto"
              ? 0
              : parseInt(i.css("margin-left"), 10)),
          (l =
            i.css("margin-top") === "auto"
              ? 0
              : parseInt(i.css("margin-top"), 10)),
          (h = i.offset().left - f),
          (p = i.offset().top - l),
          i.parents().each(function () {
            var t = e(this);
            if (t.data("stellar-offset-parent") === !0)
              return (d = m), (v = g), (c = t), !1;
            (m += t.position().left), (g += t.position().top);
          }),
          (s =
            i.data("stellar-horizontal-offset") !== r
              ? i.data("stellar-horizontal-offset")
              : c !== r && c.data("stellar-horizontal-offset") !== r
              ? c.data("stellar-horizontal-offset")
              : t.horizontalOffset),
          (o =
            i.data("stellar-vertical-offset") !== r
              ? i.data("stellar-vertical-offset")
              : c !== r && c.data("stellar-vertical-offset") !== r
              ? c.data("stellar-vertical-offset")
              : t.verticalOffset),
          t.particles.push({
            $element: i,
            $offsetParent: c,
            isFixed: i.css("position") === "fixed",
            horizontalOffset: s,
            verticalOffset: o,
            startingPositionLeft: u,
            startingPositionTop: a,
            startingOffsetLeft: h,
            startingOffsetTop: p,
            parentOffsetLeft: d,
            parentOffsetTop: v,
            stellarRatio:
              i.data("stellar-ratio") !== r ? i.data("stellar-ratio") : 1,
            width: i.outerWidth(!0),
            height: i.outerHeight(!0),
            isHidden: !1,
          });
      });
    },
    _findBackgrounds: function () {
      var t = this,
        n = this._getScrollLeft(),
        i = this._getScrollTop(),
        s;
      this.backgrounds = [];
      if (!this.options.parallaxBackgrounds) return;
      (s = this.$element.find("[data-stellar-background-ratio]")),
        this.$element.data("stellar-background-ratio") &&
          (s = s.add(this.$element)),
        s.each(function () {
          var s = e(this),
            o = h(s),
            u,
            a,
            f,
            l,
            p,
            d,
            v,
            m,
            g,
            y = 0,
            b = 0,
            w = 0,
            E = 0;
          if (!s.data("stellar-backgroundIsActive"))
            s.data("stellar-backgroundIsActive", this);
          else if (s.data("stellar-backgroundIsActive") !== this) return;
          s.data("stellar-backgroundStartingLeft")
            ? c(
                s,
                s.data("stellar-backgroundStartingLeft"),
                s.data("stellar-backgroundStartingTop")
              )
            : (s.data("stellar-backgroundStartingLeft", o[0]),
              s.data("stellar-backgroundStartingTop", o[1])),
            (p =
              s.css("margin-left") === "auto"
                ? 0
                : parseInt(s.css("margin-left"), 10)),
            (d =
              s.css("margin-top") === "auto"
                ? 0
                : parseInt(s.css("margin-top"), 10)),
            (v = s.offset().left - p - n),
            (m = s.offset().top - d - i),
            s.parents().each(function () {
              var t = e(this);
              if (t.data("stellar-offset-parent") === !0)
                return (y = w), (b = E), (g = t), !1;
              (w += t.position().left), (E += t.position().top);
            }),
            (u =
              s.data("stellar-horizontal-offset") !== r
                ? s.data("stellar-horizontal-offset")
                : g !== r && g.data("stellar-horizontal-offset") !== r
                ? g.data("stellar-horizontal-offset")
                : t.horizontalOffset),
            (a =
              s.data("stellar-vertical-offset") !== r
                ? s.data("stellar-vertical-offset")
                : g !== r && g.data("stellar-vertical-offset") !== r
                ? g.data("stellar-vertical-offset")
                : t.verticalOffset),
            t.backgrounds.push({
              $element: s,
              $offsetParent: g,
              isFixed: s.css("background-attachment") === "fixed",
              horizontalOffset: u,
              verticalOffset: a,
              startingValueLeft: o[0],
              startingValueTop: o[1],
              startingBackgroundPositionLeft: isNaN(parseInt(o[0], 10))
                ? 0
                : parseInt(o[0], 10),
              startingBackgroundPositionTop: isNaN(parseInt(o[1], 10))
                ? 0
                : parseInt(o[1], 10),
              startingPositionLeft: s.position().left,
              startingPositionTop: s.position().top,
              startingOffsetLeft: v,
              startingOffsetTop: m,
              parentOffsetLeft: y,
              parentOffsetTop: b,
              stellarRatio:
                s.data("stellar-background-ratio") === r
                  ? 1
                  : s.data("stellar-background-ratio"),
            });
        });
    },
    _reset: function () {
      var e, t, n, r, i;
      for (i = this.particles.length - 1; i >= 0; i--)
        (e = this.particles[i]),
          (t = e.$element.data("stellar-startingLeft")),
          (n = e.$element.data("stellar-startingTop")),
          this._setPosition(e.$element, t, t, n, n),
          this.options.showElement(e.$element),
          e.$element
            .data("stellar-startingLeft", null)
            .data("stellar-elementIsActive", null)
            .data("stellar-backgroundIsActive", null);
      for (i = this.backgrounds.length - 1; i >= 0; i--)
        (r = this.backgrounds[i]),
          r.$element
            .data("stellar-backgroundStartingLeft", null)
            .data("stellar-backgroundStartingTop", null),
          c(r.$element, r.startingValueLeft, r.startingValueTop);
    },
    destroy: function () {
      this._reset(),
        this.$scrollElement
          .unbind("resize." + this.name)
          .unbind("scroll." + this.name),
        (this._animationLoop = e.noop),
        e(t)
          .unbind("load." + this.name)
          .unbind("resize." + this.name);
    },
    _setOffsets: function () {
      var n = this,
        r = e(t);
      r
        .unbind("resize.horizontal-" + this.name)
        .unbind("resize.vertical-" + this.name),
        typeof this.options.horizontalOffset == "function"
          ? ((this.horizontalOffset = this.options.horizontalOffset()),
            r.bind("resize.horizontal-" + this.name, function () {
              n.horizontalOffset = n.options.horizontalOffset();
            }))
          : (this.horizontalOffset = this.options.horizontalOffset),
        typeof this.options.verticalOffset == "function"
          ? ((this.verticalOffset = this.options.verticalOffset()),
            r.bind("resize.vertical-" + this.name, function () {
              n.verticalOffset = n.options.verticalOffset();
            }))
          : (this.verticalOffset = this.options.verticalOffset);
    },
    _repositionElements: function () {
      var e = this._getScrollLeft(),
        t = this._getScrollTop(),
        n,
        r,
        i,
        s,
        o,
        u,
        a,
        f = !0,
        l = !0,
        h,
        p,
        d,
        v,
        m;
      if (
        this.currentScrollLeft === e &&
        this.currentScrollTop === t &&
        this.currentWidth === this.viewportWidth &&
        this.currentHeight === this.viewportHeight
      )
        return;
      (this.currentScrollLeft = e),
        (this.currentScrollTop = t),
        (this.currentWidth = this.viewportWidth),
        (this.currentHeight = this.viewportHeight);
      for (m = this.particles.length - 1; m >= 0; m--)
        (i = this.particles[m]),
          (s = i.isFixed ? 1 : 0),
          this.options.horizontalScrolling
            ? ((h =
                (e +
                  i.horizontalOffset +
                  this.viewportOffsetLeft +
                  i.startingPositionLeft -
                  i.startingOffsetLeft +
                  i.parentOffsetLeft) *
                  -(i.stellarRatio + s - 1) +
                i.startingPositionLeft),
              (d = h - i.startingPositionLeft + i.startingOffsetLeft))
            : ((h = i.startingPositionLeft), (d = i.startingOffsetLeft)),
          this.options.verticalScrolling
            ? ((p =
                (t +
                  i.verticalOffset +
                  this.viewportOffsetTop +
                  i.startingPositionTop -
                  i.startingOffsetTop +
                  i.parentOffsetTop) *
                  -(i.stellarRatio + s - 1) +
                i.startingPositionTop),
              (v = p - i.startingPositionTop + i.startingOffsetTop))
            : ((p = i.startingPositionTop), (v = i.startingOffsetTop)),
          this.options.hideDistantElements &&
            ((l =
              !this.options.horizontalScrolling ||
              (d + i.width > (i.isFixed ? 0 : e) &&
                d <
                  (i.isFixed ? 0 : e) +
                    this.viewportWidth +
                    this.viewportOffsetLeft)),
            (f =
              !this.options.verticalScrolling ||
              (v + i.height > (i.isFixed ? 0 : t) &&
                v <
                  (i.isFixed ? 0 : t) +
                    this.viewportHeight +
                    this.viewportOffsetTop))),
          l && f
            ? (i.isHidden &&
                (this.options.showElement(i.$element), (i.isHidden = !1)),
              this._setPosition(
                i.$element,
                h,
                i.startingPositionLeft,
                p,
                i.startingPositionTop
              ))
            : i.isHidden ||
              (this.options.hideElement(i.$element), (i.isHidden = !0));
      for (m = this.backgrounds.length - 1; m >= 0; m--)
        (o = this.backgrounds[m]),
          (s = o.isFixed ? 0 : 1),
          (u = this.options.horizontalScrolling
            ? (e +
                o.horizontalOffset -
                this.viewportOffsetLeft -
                o.startingOffsetLeft +
                o.parentOffsetLeft -
                o.startingBackgroundPositionLeft) *
                (s - o.stellarRatio) +
              "px"
            : o.startingValueLeft),
          (a = this.options.verticalScrolling
            ? (t +
                o.verticalOffset -
                this.viewportOffsetTop -
                o.startingOffsetTop +
                o.parentOffsetTop -
                o.startingBackgroundPositionTop) *
                (s - o.stellarRatio) +
              "px"
            : o.startingValueTop),
          c(o.$element, u, a);
    },
    _handleScrollEvent: function () {
      var e = this,
        t = !1,
        n = function () {
          e._repositionElements(), (t = !1);
        },
        r = function () {
          t || (p(n), (t = !0));
        };
      this.$scrollElement.bind("scroll." + this.name, r), r();
    },
    _startAnimationLoop: function () {
      var e = this;
      (this._animationLoop = function () {
        p(e._animationLoop), e._repositionElements();
      }),
        this._animationLoop();
    },
  }),
    (e.fn[i] = function (t) {
      var n = arguments;
      if (t === r || typeof t == "object")
        return this.each(function () {
          e.data(this, "plugin_" + i) ||
            e.data(this, "plugin_" + i, new d(this, t));
        });
      if (typeof t == "string" && t[0] !== "_" && t !== "init")
        return this.each(function () {
          var r = e.data(this, "plugin_" + i);
          r instanceof d &&
            typeof r[t] == "function" &&
            r[t].apply(r, Array.prototype.slice.call(n, 1)),
            t === "destroy" && e.data(this, "plugin_" + i, null);
        });
    }),
    (e[i] = function (n) {
      var r = e(t);
      return r.stellar.apply(r, Array.prototype.slice.call(arguments, 0));
    }),
    (e[i].scrollProperty = o),
    (e[i].positionProperty = u),
    (t.Stellar = d);
})(jQuery, this, document);

/**!
 * @author odahcam
 * @see The boilerplate used here was https://github.com/odahcam/jQueryPlugin-Boilerplate
 * @external https://github.com/odahcam/jquery.parallax/
 */

/**
 * @param {object} $
 * @param {object} window
 * @param {object} document
 * @param {undefined} undefined
 * @return
 */
(function (d, f, g, b) {
  if (!d) {
    console.error(
      "jQuery nÃ£o encontrado, seu plugin jQuery nÃ£o irÃ¡ funcionar."
    );
    return false;
  }
  (function () {
    var k = 0,
      l = ["ms", "moz", "webkit", "o"];
    for (var j = 0; j < l.length && !f.requestAnimationFrame; ++j) {
      f.requestAnimationFrame = f[l[j] + "RequestAnimationFrame"];
      f.cancelAnimationFrame =
        f[l[j] + "CancelAnimationFrame"] ||
        f[l[j] + "CancelRequestAnimationFrame"];
    }
    if (!f.requestAnimationFrame) {
      f.requestAnimationFrame = function (q, n) {
        var m = new Date().getTime();
        var o = Math.max(0, 16 - (m - k));
        var p = f.setTimeout(function () {
          q(m + o);
        }, o);
        k = m + o;
        return p;
      };
    }
    if (!f.cancelAnimationFrame) {
      f.cancelAnimationFrame = function (m) {
        clearTimeout(m);
      };
    }
  })();
  var e = "parallax",
    c = { on: "scroll", listenTo: f, sceneMode: false },
    a = d(f),
    i = 0;
  function h(k, j) {
    this._name = e;
    this._instance_id = ++i;
    this.el = k;
    this.$el = d(k);
    this.settings = d.extend(false, {}, c, j, this.$el.data());
    this.$triggerOrigin = d(this.settings.listenTo);
    this.init();
  }
  d.extend(h.prototype, {
    init: function () {
      var j = this;
      this.$triggerOrigin.on(j.settings.on + "." + j._name, function () {
        j.parallaxTranslate();
      });
      j.parallaxTranslate();
    },
    parallaxTranslate: function () {
      var j = this;
      if (j.inScreen()) {
        f.requestAnimationFrame(function () {
          var k = a.scrollTop() - j.$el.offset().top;
          j.$el.css("transform", "translateY(" + k / 2 + "px)");
        });
      }
      console.groupEnd();
    },
    destroy: function () {
      this.$el.removeData();
      d(this.settings.listenTo).off("." + e);
    },
    somePublicMethod: function (k, j) {
      privateMethod.call(this);
    },
    inScreen: function (l) {
      var o;
      if (typeof l !== "boolean" && l !== b) {
        o = d(l);
        l = arguments[1] || false;
      } else {
        o = this.$el;
        l = l || false;
      }
      var k = a.scrollTop(),
        n = k + a.height(),
        j = o.offset().top,
        m = j + o.height();
      if (l === true) {
        return k <= j && n >= m;
      }
      return !(k > m || n < j);
    },
  });
  d.fn[e] = function (k) {
    var j = arguments;
    if (k === b || typeof k === "object") {
      return this.each(function () {
        if (!d.data(this, "plugin_" + e)) {
          d.data(this, "plugin_" + e, new h(this, k));
        }
      });
    } else {
      if (typeof k === "string" && k !== "init") {
        return this.each(function () {
          var l = d.data(this, "plugin_" + e);
          if (l instanceof h && typeof l[k] === "function") {
            l[k].apply(l, Array.prototype.slice.call(j, 1));
          }
        });
      }
    }
  };
})(window.jQuery || false, window, document);

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto
      );
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return (
        (f.className = "mfp-" + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] &&
            b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(
            b.st.closeMarkup.replace("%title%", b.st.tClose)
          )),
          (g = c)),
        b.currTemplate.closeBtn
      );
    },
    A = function () {
      a.magnificPopup.instance ||
        ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  (t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (d = a(document)),
        (b.popupsCache = {});
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        (b.items = c.items.toArray()), (b.index = 0);
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else
        (b.items = a.isArray(c.items) ? c.items : [c.items]),
          (b.index = c.index || 0);
      if (b.isOpen) return void b.updateItemHTML();
      (b.types = []),
        (f = ""),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos =
          "auto" === b.st.fixedContentPos
            ? !b.probablyMobile
            : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x("bg").on("click" + p, function () {
            b.close();
          })),
          (b.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + p, function (a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x("container", b.wrap))),
        (b.contentContainer = x("content")),
        b.st.preloader &&
          (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
      }
      y("BeforeOpen"),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += " mfp-close-btn-in"))
            : b.wrap.append(z())),
        b.st.alignTop && (f += " mfp-align-top"),
        b.fixedContentPos
          ? b.wrap.css({
              overflow: b.st.overflowY,
              overflowX: "hidden",
              overflowY: b.st.overflowY,
            })
          : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
        (b.st.fixedBgPos === !1 ||
          ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: "absolute" }),
        b.st.enableEscapeKey &&
          d.on("keyup" + p, function (a) {
            27 === a.keyCode && b.close();
          }),
        v.on("resize" + p, function () {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
        f && b.wrap.addClass(f);
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos &&
        (b.isIE7
          ? a("body, html").css("overflow", "hidden")
          : (n.overflow = "hidden"));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += " mfp-ie7"),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y("BuildControls"),
        a("html").css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          b.content
            ? (b._addClassToMFP(q), b._setFocus())
            : b.bgOverlay.addClass(q),
            d.on("focusin" + p, b._onFocusIn);
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + " "),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: "" };
        b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
          a("html").css(e);
      }
      d.off("keyup" + p + " focusin" + p),
        b.ev.off(p),
        b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        b.bgOverlay.attr("class", "mfp-bg"),
        b.container.attr("class", "mfp-container"),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j);
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), (b.wH = d);
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(),
        b.content && b.content.detach(),
        c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (
        (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
        (b.currItem = c),
        !b.currTemplate[d])
      ) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f),
          f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
        c,
        b.currTemplate[d]
      );
      b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y("AfterChange");
    },
    appendContent: function (a, c) {
      (b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find(".mfp-close").length || b.content.append(z())
            : (b.content = a)
          : (b.content = ""),
        y(k),
        b.container.addClass("mfp-" + c + "-holder"),
        b.contentContainer.append(b.content);
    },
    parseEl: function (c) {
      var d,
        e = b.items[c];
      if (
        (e.tagName
          ? (e = { el: a(e) })
          : ((d = e.type), (e = { data: e, src: e.src })),
        e.el)
      ) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        (e.src = e.el.attr("data-mfp-src")),
          e.src || (e.src = e.el.attr("href"));
      }
      return (
        (e.type = d || b.st.type || "inline"),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y("ElementParse", e),
        b.items[c]
      );
    },
    addGroup: function (a, c) {
      var d = function (d) {
        (d.mfpEl = this), b._openClick(d, a, c);
      };
      c || (c = {});
      var e = "click.magnificPopup";
      (c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1),
            c.delegate
              ? a.off(e).on(e, c.delegate, d)
              : ((c.items = a), a.off(e).on(e, d)));
    },
    _openClick: function (c, d, e) {
      var f =
        void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (
        f ||
        !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
      ) {
        var g =
          void 0 !== e.disableOn
            ? e.disableOn
            : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e);
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c),
          d || "loading" !== a || (d = b.st.tLoading);
        var e = { status: a, text: d };
        y("UpdateStatus", e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find("a").on("click", function (a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass("mfp-s-" + a),
          (c = a);
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (
          !b.content ||
          a(c).hasClass("mfp-close") ||
          (b.preloader && c === b.preloader[0])
        )
          return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (
        (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      );
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1);
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (c, d) {
          if (void 0 === d || d === !1) return !0;
          if (((e = c.split("_")), e.length > 1)) {
            var f = b.find(p + "-" + e[0]);
            if (f.length > 0) {
              var g = e[1];
              "replaceWith" === g
                ? f[0] !== d[0] && f.replaceWith(d)
                : "img" === g
                ? f.is("img")
                  ? f.attr("src", d)
                  : f.replaceWith(
                      a("<img>").attr("src", d).attr("class", f.attr("class"))
                    )
                : f.attr(e[1], d);
            }
          } else b.find(p + "-" + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        (a.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          (b = b ? a.extend(!0, {}, b) : {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if ("string" == typeof c)
        if ("open" === c) {
          var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          f.items
            ? (e = f.items[g])
            : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f);
        } else
          b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else
        (c = a.extend(!0, {}, c)),
          u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
          b.addGroup(d, c);
      return d;
    });
  var C,
    D,
    E,
    F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        b.types.push(F),
          w(h + "." + F, function () {
            G();
          });
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
              (E = f.after(D).detach().removeClass(C))),
              b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
          return (c.inlineElement = f), f;
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      },
    },
  });
  var H,
    I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H);
    },
    K = function () {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        b.types.push(I),
          (H = b.st.ajax.cursor),
          w(h + "." + I, K),
          w("BeforeChange." + I, K);
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f };
              y("ParseAjax", g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus("ready"),
                y("AjaxContentAdded");
            },
            error: function () {
              J(),
                (c.finished = c.loadError = !0),
                b.updateStatus(
                  "error",
                  b.st.ajax.tError.replace("%url%", c.src)
                );
            },
          },
          b.st.ajax.settings
        );
        return (b.req = a.ajax(d)), "";
      },
    },
  });
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"),
          w(m + d, function () {
            "image" === b.currItem.type &&
              c.cursor &&
              a(document.body).addClass(c.cursor);
          }),
          w(h + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor),
              v.off("resize" + p);
          }),
          w("Resize" + d, b.resizeImage),
          b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE &&
            (c =
              parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)),
            a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y("ImageHasSize", a),
          a.imgHidden &&
            (b.content && b.content.removeClass("mfp-loading"),
            (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L),
                    c++,
                    void (3 === c
                      ? e(10)
                      : 40 === c
                      ? e(50)
                      : 100 === c && e(500)));
              }, f));
          };
        e(1);
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off(".mfploader"),
                  c === b.currItem &&
                    (b._onImageHasSize(c), b.updateStatus("ready")),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y("ImageLoadComplete"))
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function () {
            c &&
              (c.img.off(".mfploader"),
              c === b.currItem &&
                (b._onImageHasSize(c),
                b.updateStatus("error", h.tError.replace("%url%", c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          (j.className = "mfp-img"),
            c.el &&
              c.el.find("img").length &&
              (j.alt = c.el.find("img").attr("alt")),
            (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
            (j.src = c.src),
            i.is("img") && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass("mfp-loading"),
                  b.updateStatus("error", h.tError.replace("%url%", c.src)))
                : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
              d)
            : (b.updateStatus("loading"),
              (c.loading = !0),
              c.hasSize ||
                ((c.imgHidden = !0),
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
              d)
        );
      },
    },
  });
  var N,
    O = function () {
      return (
        void 0 === N &&
          (N = void 0 !== document.createElement("p").style.MozTransform),
        N
      );
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                f = "transition";
              return (
                (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
                b.css(e),
                b
              );
            },
            k = function () {
              b.content.css("visibility", "visible");
            };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (
                (clearTimeout(e),
                b.content.css("visibility", "hidden"),
                (a = b._getItemToZoom()),
                !a)
              )
                return void k();
              (f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      k(),
                        setTimeout(function () {
                          f.remove(), (a = f = null), y("ZoomAnimationEnded");
                        }, 16);
                    }, g));
                }, 16));
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    f.css(b._getOffset());
                  }, 16);
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
        };
        return (
          O()
            ? (h["-moz-transform"] = h.transform =
                "translate(" + e.left + "px," + e.top + "px)")
            : ((h.left = e.left), (h.top = e.top)),
          h
        );
      },
    },
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length &&
          (a || (c[0].src = Q),
          b.isIE8 && c.css("display", a ? "block" : "none"));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        b.types.push(P),
          w("BeforeChange", function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + "." + P, function () {
            R();
          });
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  "string" == typeof this.id
                    ? e.substr(
                        e.lastIndexOf(this.id) + this.id.length,
                        e.length
                      )
                    : this.id.call(this, e)),
              (e = this.src.replace("%id%", e)),
              !1)
            : void 0;
        });
        var g = {};
        return (
          f.srcAction && (g[f.srcAction] = e),
          b._parseMarkup(d, g, c),
          b.updateStatus("ready"),
          d
        );
      },
    },
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += " mfp-gallery"),
              w(m + e, function () {
                c.navigateByImgClick &&
                  b.wrap.on("click" + e, ".mfp-img", function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on("keydown" + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  });
              }),
              w("UpdateStatus" + e, function (a, c) {
                c.text &&
                  (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
              }),
              w("BuildControls" + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d
                        .replace(/%title%/gi, c.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(s));
                  e.click(function () {
                    b.prev();
                  }),
                    f.click(function () {
                      b.next();
                    }),
                    b.container.append(e.add(f));
                }
              }),
              w(n + e, function () {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                  }, 16));
              }),
              void w(h + e, function () {
                d.off(e),
                  b.wrap.off("click" + e),
                  (b.arrowRight = b.arrowLeft = null);
              }))
            : !1
        );
      },
      next: function () {
        (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
      },
      prev: function () {
        (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
      },
      goTo: function (a) {
        (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++)
          b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++)
          b._preloadItem(b.index - a);
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)),
            y("LazyLoad", d),
            "image" === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  d.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                })
                .attr("src", d.src)),
            (d.preloaded = !0);
        }
      },
    },
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          (c = isNaN(c) ? c() : c),
            c > 1 &&
              (w("ImageHasSize." + U, function (a, b) {
                b.img.css({
                  "max-width": b.img[0].naturalWidth / c,
                  width: "100%",
                });
              }),
              w("ElementParse." + U, function (b, d) {
                d.src = a.replaceSrc(d, c);
              }));
        }
      },
    },
  }),
    A();
});

(function ($) {
  "use strict";

  $.ajaxChimp = {
    responses: {
      "We have sent you a confirmation email": 0,
      "Please enter a valid email": 1,
      "An email address must contain a single @": 2,
      "The domain portion of the email address is invalid (the portion after the @: )": 3,
      "The username portion of the email address is invalid (the portion before the @: )": 4,
      "This email address looks fake or invalid. Please enter a real email address": 5,
    },
    translations: {
      en: null,
    },
    init: function (selector, options) {
      $(selector).ajaxChimp(options);
    },
  };

  $.fn.ajaxChimp = function (options) {
    $(this).each(function (i, elem) {
      var form = $(elem);
      var email = form.find("input[type=email]");
      var label = form.find(".info");

      var settings = $.extend(
        {
          url: form.attr("action"),
          language: "en",
        },
        options
      );

      var url = settings.url.replace("/post?", "/post-json?").concat("&c=?");

      form.attr("novalidate", "true");
      email.attr("name", "EMAIL");

      form.submit(function () {
        var msg;
        function successCallback(resp) {
          if (resp.result === "success") {
            msg = "We have sent you a confirmation email";
            label.removeClass("error").addClass("valid");
            email.removeClass("error").addClass("valid");
          } else {
            email.removeClass("valid").addClass("error");
            label.removeClass("valid").addClass("error");
            var index = -1;
            try {
              var parts = resp.msg.split(" - ", 2);
              if (parts[1] === undefined) {
                msg = resp.msg;
              } else {
                var i = parseInt(parts[0], 10);
                if (i.toString() === parts[0]) {
                  index = parts[0];
                  msg = parts[1];
                } else {
                  index = -1;
                  msg = resp.msg;
                }
              }
            } catch (e) {
              index = -1;
              msg = resp.msg;
            }
          }

          // Translate and display message
          if (
            settings.language !== "en" &&
            $.ajaxChimp.responses[msg] !== undefined &&
            $.ajaxChimp.translations &&
            $.ajaxChimp.translations[settings.language] &&
            $.ajaxChimp.translations[settings.language][
              $.ajaxChimp.responses[msg]
            ]
          ) {
            msg =
              $.ajaxChimp.translations[settings.language][
                $.ajaxChimp.responses[msg]
              ];
          }
          label.html(msg);

          label.show(2000);
          if (settings.callback) {
            settings.callback(resp);
          }
        }

        var data = {};
        var dataArray = form.serializeArray();
        $.each(dataArray, function (index, item) {
          data[item.name] = item.value;
        });

        $.ajax({
          url: url,
          data: data,
          success: successCallback,
          dataType: "jsonp",
          error: function (resp, text) {
            console.log("mailchimp ajax submit error: " + text);
          },
        });

        // Translate and display submit message
        var submitMsg = "Submitting...";
        if (
          settings.language !== "en" &&
          $.ajaxChimp.translations &&
          $.ajaxChimp.translations[settings.language] &&
          $.ajaxChimp.translations[settings.language]["submit"]
        ) {
          submitMsg = $.ajaxChimp.translations[settings.language]["submit"];
        }
        label.html(submitMsg).show(2000);

        return false;
      });
    });
    return this;
  };
})(jQuery);

// -------   Mail Send ajax

$(document).ready(function () {
  var form = $("#myForm"); // contact form
  var submit = $(".submit-btn"); // submit button
  var alert = $(".alert-msg"); // alert div for show alert message

  // form submit event
  form.on("submit", function (e) {
    e.preventDefault(); // prevent default form submit

    $.ajax({
      url: "mail.php", // form action url
      type: "POST", // form submit method get/post
      dataType: "html", // request type html/json/xml
      data: form.serialize(), // serialize form data
      beforeSend: function () {
        alert.fadeOut();
        submit.html("Sending...."); // change submit button text
      },
      success: function (data) {
        alert.html(data).fadeIn(); // fade in response data
        form.trigger("reset"); // reset form
        submit.attr("style", "display: none !important"); // reset submit button text
      },
      error: function (e) {
        console.log(e);
      },
    });
  });
});

("use strict");
!(function (a, b) {
  "object" == typeof exports
    ? (module.exports = b())
    : "function" == typeof define && define.amd
    ? define(["jquery", "googlemaps!"], b)
    : (a.GMaps = b());
})(this, function () {
  var a = function (a, b) {
      var c;
      if (a === b) return a;
      for (c in b) void 0 !== b[c] && (a[c] = b[c]);
      return a;
    },
    b = function (a, b) {
      var c,
        d = Array.prototype.slice.call(arguments, 2),
        e = [],
        f = a.length;
      if (Array.prototype.map && a.map === Array.prototype.map)
        e = Array.prototype.map.call(a, function (a) {
          var c = d.slice(0);
          return c.splice(0, 0, a), b.apply(this, c);
        });
      else
        for (c = 0; f > c; c++)
          (callback_params = d),
            callback_params.splice(0, 0, a[c]),
            e.push(b.apply(this, callback_params));
      return e;
    },
    c = function (a) {
      var b,
        c = [];
      for (b = 0; b < a.length; b++) c = c.concat(a[b]);
      return c;
    },
    d = function (a, b) {
      var c = a[0],
        d = a[1];
      return b && ((c = a[1]), (d = a[0])), new google.maps.LatLng(c, d);
    },
    f = function (a, b) {
      var c;
      for (c = 0; c < a.length; c++)
        a[c] instanceof google.maps.LatLng ||
          (a[c].length > 0 && "object" == typeof a[c][0]
            ? (a[c] = f(a[c], b))
            : (a[c] = d(a[c], b)));
      return a;
    },
    g = function (a, b) {
      var c,
        d = a.replace(".", "");
      return (c =
        "jQuery" in this && b
          ? $("." + d, b)[0]
          : document.getElementsByClassName(d)[0]);
    },
    h = function (a, b) {
      var c,
        a = a.replace("#", "");
      return (c =
        "jQuery" in window && b
          ? $("#" + a, b)[0]
          : document.getElementById(a));
    },
    i = function (a) {
      var b = 0,
        c = 0;
      if (a.offsetParent)
        do (b += a.offsetLeft), (c += a.offsetTop);
        while ((a = a.offsetParent));
      return [b, c];
    },
    j = (function (b) {
      var c = document,
        d = function (b) {
          if ("object" != typeof window.google || !window.google.maps)
            return (
              "object" == typeof window.console &&
                window.console.error &&
                console.error(
                  "Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js."
                ),
              function () {}
            );
          if (!this) return new d(b);
          (b.zoom = b.zoom || 15), (b.mapType = b.mapType || "roadmap");
          var e,
            f = function (a, b) {
              return void 0 === a ? b : a;
            },
            j = this,
            k = [
              "bounds_changed",
              "center_changed",
              "click",
              "dblclick",
              "drag",
              "dragend",
              "dragstart",
              "idle",
              "maptypeid_changed",
              "projection_changed",
              "resize",
              "tilesloaded",
              "zoom_changed",
            ],
            l = ["mousemove", "mouseout", "mouseover"],
            m = [
              "el",
              "lat",
              "lng",
              "mapType",
              "width",
              "height",
              "markerClusterer",
              "enableNewStyle",
            ],
            n = b.el || b.div,
            o = b.markerClusterer,
            p = google.maps.MapTypeId[b.mapType.toUpperCase()],
            q = new google.maps.LatLng(b.lat, b.lng),
            r = f(b.zoomControl, !0),
            s = b.zoomControlOpt || { style: "DEFAULT", position: "TOP_LEFT" },
            t = s.style || "DEFAULT",
            u = s.position || "TOP_LEFT",
            v = f(b.panControl, !0),
            w = f(b.mapTypeControl, !0),
            x = f(b.scaleControl, !0),
            y = f(b.streetViewControl, !0),
            z = f(z, !0),
            A = {},
            B = { zoom: this.zoom, center: q, mapTypeId: p },
            C = {
              panControl: v,
              zoomControl: r,
              zoomControlOptions: {
                style: google.maps.ZoomControlStyle[t],
                position: google.maps.ControlPosition[u],
              },
              mapTypeControl: w,
              scaleControl: x,
              streetViewControl: y,
              overviewMapControl: z,
            };
          if (
            ("string" == typeof b.el || "string" == typeof b.div
              ? n.indexOf("#") > -1
                ? (this.el = h(n, b.context))
                : (this.el = g.apply(this, [n, b.context]))
              : (this.el = n),
            "undefined" == typeof this.el || null === this.el)
          )
            throw "No element defined.";
          for (
            window.context_menu = window.context_menu || {},
              window.context_menu[j.el.id] = {},
              this.controls = [],
              this.overlays = [],
              this.layers = [],
              this.singleLayers = {},
              this.markers = [],
              this.polylines = [],
              this.routes = [],
              this.polygons = [],
              this.infoWindow = null,
              this.overlay_el = null,
              this.zoom = b.zoom,
              this.registered_events = {},
              this.el.style.width =
                b.width || this.el.scrollWidth || this.el.offsetWidth,
              this.el.style.height =
                b.height || this.el.scrollHeight || this.el.offsetHeight,
              google.maps.visualRefresh = b.enableNewStyle,
              e = 0;
            e < m.length;
            e++
          )
            delete b[m[e]];
          for (
            1 != b.disableDefaultUI && (B = a(B, C)), A = a(B, b), e = 0;
            e < k.length;
            e++
          )
            delete A[k[e]];
          for (e = 0; e < l.length; e++) delete A[l[e]];
          (this.map = new google.maps.Map(this.el, A)),
            o && (this.markerClusterer = o.apply(this, [this.map]));
          var D = function (a, b) {
            var c = "",
              d = window.context_menu[j.el.id][a];
            for (var e in d)
              if (d.hasOwnProperty(e)) {
                var f = d[e];
                c +=
                  '<li><a id="' +
                  a +
                  "_" +
                  e +
                  '" href="#">' +
                  f.title +
                  "</a></li>";
              }
            if (h("gmaps_context_menu")) {
              var g = h("gmaps_context_menu");
              g.innerHTML = c;
              var e,
                k = g.getElementsByTagName("a"),
                l = k.length;
              for (e = 0; l > e; e++) {
                var m = k[e],
                  n = function (c) {
                    c.preventDefault(),
                      d[this.id.replace(a + "_", "")].action.apply(j, [b]),
                      j.hideContextMenu();
                  };
                google.maps.event.clearListeners(m, "click"),
                  google.maps.event.addDomListenerOnce(m, "click", n, !1);
              }
              var o = i.apply(this, [j.el]),
                p = o[0] + b.pixel.x - 15,
                q = o[1] + b.pixel.y - 15;
              (g.style.left = p + "px"), (g.style.top = q + "px");
            }
          };
          (this.buildContextMenu = function (a, b) {
            if ("marker" === a) {
              b.pixel = {};
              var c = new google.maps.OverlayView();
              c.setMap(j.map),
                (c.draw = function () {
                  var d = c.getProjection(),
                    e = b.marker.getPosition();
                  (b.pixel = d.fromLatLngToContainerPixel(e)), D(a, b);
                });
            } else D(a, b);
            var d = h("gmaps_context_menu");
            setTimeout(function () {
              d.style.display = "block";
            }, 0);
          }),
            (this.setContextMenu = function (a) {
              window.context_menu[j.el.id][a.control] = {};
              var b,
                d = c.createElement("ul");
              for (b in a.options)
                if (a.options.hasOwnProperty(b)) {
                  var e = a.options[b];
                  window.context_menu[j.el.id][a.control][e.name] = {
                    title: e.title,
                    action: e.action,
                  };
                }
              (d.id = "gmaps_context_menu"),
                (d.style.display = "none"),
                (d.style.position = "absolute"),
                (d.style.minWidth = "100px"),
                (d.style.background = "white"),
                (d.style.listStyle = "none"),
                (d.style.padding = "8px"),
                (d.style.boxShadow = "2px 2px 6px #ccc"),
                h("gmaps_context_menu") || c.body.appendChild(d);
              var f = h("gmaps_context_menu");
              google.maps.event.addDomListener(
                f,
                "mouseout",
                function (a) {
                  (a.relatedTarget && this.contains(a.relatedTarget)) ||
                    window.setTimeout(function () {
                      f.style.display = "none";
                    }, 400);
                },
                !1
              );
            }),
            (this.hideContextMenu = function () {
              var a = h("gmaps_context_menu");
              a && (a.style.display = "none");
            });
          var E = function (a, c) {
            google.maps.event.addListener(a, c, function (a) {
              void 0 == a && (a = this),
                b[c].apply(this, [a]),
                j.hideContextMenu();
            });
          };
          google.maps.event.addListener(
            this.map,
            "zoom_changed",
            this.hideContextMenu
          );
          for (var F = 0; F < k.length; F++) {
            var G = k[F];
            G in b && E(this.map, G);
          }
          for (var F = 0; F < l.length; F++) {
            var G = l[F];
            G in b && E(this.map, G);
          }
          google.maps.event.addListener(this.map, "rightclick", function (a) {
            b.rightclick && b.rightclick.apply(this, [a]),
              void 0 != window.context_menu[j.el.id].map &&
                j.buildContextMenu("map", a);
          }),
            (this.refresh = function () {
              google.maps.event.trigger(this.map, "resize");
            }),
            (this.fitZoom = function () {
              var a,
                b = [],
                c = this.markers.length;
              for (a = 0; c > a; a++)
                "boolean" == typeof this.markers[a].visible &&
                  this.markers[a].visible &&
                  b.push(this.markers[a].getPosition());
              this.fitLatLngBounds(b);
            }),
            (this.fitLatLngBounds = function (a) {
              var b,
                c = a.length,
                d = new google.maps.LatLngBounds();
              for (b = 0; c > b; b++) d.extend(a[b]);
              this.map.fitBounds(d);
            }),
            (this.setCenter = function (a, b, c) {
              this.map.panTo(new google.maps.LatLng(a, b)), c && c();
            }),
            (this.getElement = function () {
              return this.el;
            }),
            (this.zoomIn = function (a) {
              (a = a || 1),
                (this.zoom = this.map.getZoom() + a),
                this.map.setZoom(this.zoom);
            }),
            (this.zoomOut = function (a) {
              (a = a || 1),
                (this.zoom = this.map.getZoom() - a),
                this.map.setZoom(this.zoom);
            });
          var H,
            I = [];
          for (H in this.map)
            "function" != typeof this.map[H] || this[H] || I.push(H);
          for (e = 0; e < I.length; e++)
            !(function (a, b, c) {
              a[c] = function () {
                return b[c].apply(b, arguments);
              };
            })(this, this.map, I[e]);
        };
      return d;
    })(this);
  (j.prototype.createControl = function (a) {
    var b = document.createElement("div");
    (b.style.cursor = "pointer"),
      a.disableDefaultStyles !== !0 &&
        ((b.style.fontFamily = "Roboto, Arial, sans-serif"),
        (b.style.fontSize = "11px"),
        (b.style.boxShadow = "rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px"));
    for (var c in a.style) b.style[c] = a.style[c];
    a.id && (b.id = a.id),
      a.title && (b.title = a.title),
      a.classes && (b.className = a.classes),
      a.content &&
        ("string" == typeof a.content
          ? (b.innerHTML = a.content)
          : a.content instanceof HTMLElement && b.appendChild(a.content)),
      a.position &&
        (b.position = google.maps.ControlPosition[a.position.toUpperCase()]);
    for (var d in a.events)
      !(function (b, c) {
        google.maps.event.addDomListener(b, c, function () {
          a.events[c].apply(this, [this]);
        });
      })(b, d);
    return (b.index = 1), b;
  }),
    (j.prototype.addControl = function (a) {
      var b = this.createControl(a);
      return this.controls.push(b), this.map.controls[b.position].push(b), b;
    }),
    (j.prototype.removeControl = function (a) {
      var b,
        c = null;
      for (b = 0; b < this.controls.length; b++)
        this.controls[b] == a &&
          ((c = this.controls[b].position), this.controls.splice(b, 1));
      if (c)
        for (b = 0; b < this.map.controls.length; b++) {
          var d = this.map.controls[a.position];
          if (d.getAt(b) == a) {
            d.removeAt(b);
            break;
          }
        }
      return a;
    }),
    (j.prototype.createMarker = function (b) {
      if (void 0 == b.lat && void 0 == b.lng && void 0 == b.position)
        throw "No latitude or longitude defined.";
      var c = this,
        d = b.details,
        e = b.fences,
        f = b.outside,
        g = { position: new google.maps.LatLng(b.lat, b.lng), map: null },
        h = a(g, b);
      delete h.lat, delete h.lng, delete h.fences, delete h.outside;
      var i = new google.maps.Marker(h);
      if (((i.fences = e), b.infoWindow)) {
        i.infoWindow = new google.maps.InfoWindow(b.infoWindow);
        for (
          var j = [
              "closeclick",
              "content_changed",
              "domready",
              "position_changed",
              "zindex_changed",
            ],
            k = 0;
          k < j.length;
          k++
        )
          !(function (a, c) {
            b.infoWindow[c] &&
              google.maps.event.addListener(a, c, function (a) {
                b.infoWindow[c].apply(this, [a]);
              });
          })(i.infoWindow, j[k]);
      }
      for (
        var l = [
            "animation_changed",
            "clickable_changed",
            "cursor_changed",
            "draggable_changed",
            "flat_changed",
            "icon_changed",
            "position_changed",
            "shadow_changed",
            "shape_changed",
            "title_changed",
            "visible_changed",
            "zindex_changed",
          ],
          m = [
            "dblclick",
            "drag",
            "dragend",
            "dragstart",
            "mousedown",
            "mouseout",
            "mouseover",
            "mouseup",
          ],
          k = 0;
        k < l.length;
        k++
      )
        !(function (a, c) {
          b[c] &&
            google.maps.event.addListener(a, c, function () {
              b[c].apply(this, [this]);
            });
        })(i, l[k]);
      for (var k = 0; k < m.length; k++)
        !(function (a, c, d) {
          b[d] &&
            google.maps.event.addListener(c, d, function (c) {
              c.pixel ||
                (c.pixel = a.getProjection().fromLatLngToPoint(c.latLng)),
                b[d].apply(this, [c]);
            });
        })(this.map, i, m[k]);
      return (
        google.maps.event.addListener(i, "click", function () {
          (this.details = d),
            b.click && b.click.apply(this, [this]),
            i.infoWindow && (c.hideInfoWindows(), i.infoWindow.open(c.map, i));
        }),
        google.maps.event.addListener(i, "rightclick", function (a) {
          (a.marker = this),
            b.rightclick && b.rightclick.apply(this, [a]),
            void 0 != window.context_menu[c.el.id].marker &&
              c.buildContextMenu("marker", a);
        }),
        i.fences &&
          google.maps.event.addListener(i, "dragend", function () {
            c.checkMarkerGeofence(i, function (a, b) {
              f(a, b);
            });
          }),
        i
      );
    }),
    (j.prototype.addMarker = function (a) {
      var b;
      if (a.hasOwnProperty("gm_accessors_")) b = a;
      else {
        if (
          !((a.hasOwnProperty("lat") && a.hasOwnProperty("lng")) || a.position)
        )
          throw "No latitude or longitude defined.";
        b = this.createMarker(a);
      }
      return (
        b.setMap(this.map),
        this.markerClusterer && this.markerClusterer.addMarker(b),
        this.markers.push(b),
        j.fire("marker_added", b, this),
        b
      );
    }),
    (j.prototype.addMarkers = function (a) {
      for (var b, c = 0; (b = a[c]); c++) this.addMarker(b);
      return this.markers;
    }),
    (j.prototype.hideInfoWindows = function () {
      for (var a, b = 0; (a = this.markers[b]); b++)
        a.infoWindow && a.infoWindow.close();
    }),
    (j.prototype.removeMarker = function (a) {
      for (var b = 0; b < this.markers.length; b++)
        if (this.markers[b] === a) {
          this.markers[b].setMap(null),
            this.markers.splice(b, 1),
            this.markerClusterer && this.markerClusterer.removeMarker(a),
            j.fire("marker_removed", a, this);
          break;
        }
      return a;
    }),
    (j.prototype.removeMarkers = function (a) {
      var b = [];
      if ("undefined" == typeof a) {
        for (var c = 0; c < this.markers.length; c++) {
          var d = this.markers[c];
          d.setMap(null), j.fire("marker_removed", d, this);
        }
        this.markerClusterer &&
          this.markerClusterer.clearMarkers &&
          this.markerClusterer.clearMarkers(),
          (this.markers = b);
      } else {
        for (var c = 0; c < a.length; c++) {
          var e = this.markers.indexOf(a[c]);
          if (e > -1) {
            var d = this.markers[e];
            d.setMap(null),
              this.markerClusterer && this.markerClusterer.removeMarker(d),
              j.fire("marker_removed", d, this);
          }
        }
        for (var c = 0; c < this.markers.length; c++) {
          var d = this.markers[c];
          null != d.getMap() && b.push(d);
        }
        this.markers = b;
      }
    }),
    (j.prototype.drawOverlay = function (a) {
      var b = new google.maps.OverlayView(),
        c = !0;
      return (
        b.setMap(this.map),
        null != a.auto_show && (c = a.auto_show),
        (b.onAdd = function () {
          var c = document.createElement("div");
          (c.style.borderStyle = "none"),
            (c.style.borderWidth = "0px"),
            (c.style.position = "absolute"),
            (c.style.zIndex = 100),
            (c.innerHTML = a.content),
            (b.el = c),
            a.layer || (a.layer = "overlayLayer");
          var d = this.getPanes(),
            e = d[a.layer],
            f = ["contextmenu", "DOMMouseScroll", "dblclick", "mousedown"];
          e.appendChild(c);
          for (var g = 0; g < f.length; g++)
            !(function (a, b) {
              google.maps.event.addDomListener(a, b, function (a) {
                -1 != navigator.userAgent.toLowerCase().indexOf("msie") &&
                document.all
                  ? ((a.cancelBubble = !0), (a.returnValue = !1))
                  : a.stopPropagation();
              });
            })(c, f[g]);
          a.click &&
            (d.overlayMouseTarget.appendChild(b.el),
            google.maps.event.addDomListener(b.el, "click", function () {
              a.click.apply(b, [b]);
            })),
            google.maps.event.trigger(this, "ready");
        }),
        (b.draw = function () {
          var d = this.getProjection(),
            e = d.fromLatLngToDivPixel(new google.maps.LatLng(a.lat, a.lng));
          (a.horizontalOffset = a.horizontalOffset || 0),
            (a.verticalOffset = a.verticalOffset || 0);
          var f = b.el,
            g = f.children[0],
            h = g.clientHeight,
            i = g.clientWidth;
          switch (a.verticalAlign) {
            case "top":
              f.style.top = e.y - h + a.verticalOffset + "px";
              break;
            default:
            case "middle":
              f.style.top = e.y - h / 2 + a.verticalOffset + "px";
              break;
            case "bottom":
              f.style.top = e.y + a.verticalOffset + "px";
          }
          switch (a.horizontalAlign) {
            case "left":
              f.style.left = e.x - i + a.horizontalOffset + "px";
              break;
            default:
            case "center":
              f.style.left = e.x - i / 2 + a.horizontalOffset + "px";
              break;
            case "right":
              f.style.left = e.x + a.horizontalOffset + "px";
          }
          (f.style.display = c ? "block" : "none"),
            c || a.show.apply(this, [f]);
        }),
        (b.onRemove = function () {
          var c = b.el;
          a.remove
            ? a.remove.apply(this, [c])
            : (b.el.parentNode.removeChild(b.el), (b.el = null));
        }),
        this.overlays.push(b),
        b
      );
    }),
    (j.prototype.removeOverlay = function (a) {
      for (var b = 0; b < this.overlays.length; b++)
        if (this.overlays[b] === a) {
          this.overlays[b].setMap(null), this.overlays.splice(b, 1);
          break;
        }
    }),
    (j.prototype.removeOverlays = function () {
      for (var a, b = 0; (a = this.overlays[b]); b++) a.setMap(null);
      this.overlays = [];
    }),
    (j.prototype.drawPolyline = function (a) {
      var b = [],
        c = a.path;
      if (c.length)
        if (void 0 === c[0][0]) b = c;
        else
          for (var d, e = 0; (d = c[e]); e++)
            b.push(new google.maps.LatLng(d[0], d[1]));
      var f = {
        map: this.map,
        path: b,
        strokeColor: a.strokeColor,
        strokeOpacity: a.strokeOpacity,
        strokeWeight: a.strokeWeight,
        geodesic: a.geodesic,
        clickable: !0,
        editable: !1,
        visible: !0,
      };
      a.hasOwnProperty("clickable") && (f.clickable = a.clickable),
        a.hasOwnProperty("editable") && (f.editable = a.editable),
        a.hasOwnProperty("icons") && (f.icons = a.icons),
        a.hasOwnProperty("zIndex") && (f.zIndex = a.zIndex);
      for (
        var g = new google.maps.Polyline(f),
          h = [
            "click",
            "dblclick",
            "mousedown",
            "mousemove",
            "mouseout",
            "mouseover",
            "mouseup",
            "rightclick",
          ],
          i = 0;
        i < h.length;
        i++
      )
        !(function (b, c) {
          a[c] &&
            google.maps.event.addListener(b, c, function (b) {
              a[c].apply(this, [b]);
            });
        })(g, h[i]);
      return this.polylines.push(g), j.fire("polyline_added", g, this), g;
    }),
    (j.prototype.removePolyline = function (a) {
      for (var b = 0; b < this.polylines.length; b++)
        if (this.polylines[b] === a) {
          this.polylines[b].setMap(null),
            this.polylines.splice(b, 1),
            j.fire("polyline_removed", a, this);
          break;
        }
    }),
    (j.prototype.removePolylines = function () {
      for (var a, b = 0; (a = this.polylines[b]); b++) a.setMap(null);
      this.polylines = [];
    }),
    (j.prototype.drawCircle = function (b) {
      (b = a(
        { map: this.map, center: new google.maps.LatLng(b.lat, b.lng) },
        b
      )),
        delete b.lat,
        delete b.lng;
      for (
        var c = new google.maps.Circle(b),
          d = [
            "click",
            "dblclick",
            "mousedown",
            "mousemove",
            "mouseout",
            "mouseover",
            "mouseup",
            "rightclick",
          ],
          e = 0;
        e < d.length;
        e++
      )
        !(function (a, c) {
          b[c] &&
            google.maps.event.addListener(a, c, function (a) {
              b[c].apply(this, [a]);
            });
        })(c, d[e]);
      return this.polygons.push(c), c;
    }),
    (j.prototype.drawRectangle = function (b) {
      b = a({ map: this.map }, b);
      var c = new google.maps.LatLngBounds(
        new google.maps.LatLng(b.bounds[0][0], b.bounds[0][1]),
        new google.maps.LatLng(b.bounds[1][0], b.bounds[1][1])
      );
      b.bounds = c;
      for (
        var d = new google.maps.Rectangle(b),
          e = [
            "click",
            "dblclick",
            "mousedown",
            "mousemove",
            "mouseout",
            "mouseover",
            "mouseup",
            "rightclick",
          ],
          f = 0;
        f < e.length;
        f++
      )
        !(function (a, c) {
          b[c] &&
            google.maps.event.addListener(a, c, function (a) {
              b[c].apply(this, [a]);
            });
        })(d, e[f]);
      return this.polygons.push(d), d;
    }),
    (j.prototype.drawPolygon = function (d) {
      var e = !1;
      d.hasOwnProperty("useGeoJSON") && (e = d.useGeoJSON),
        delete d.useGeoJSON,
        (d = a({ map: this.map }, d)),
        0 == e && (d.paths = [d.paths.slice(0)]),
        d.paths.length > 0 &&
          d.paths[0].length > 0 &&
          (d.paths = c(b(d.paths, f, e)));
      for (
        var g = new google.maps.Polygon(d),
          h = [
            "click",
            "dblclick",
            "mousedown",
            "mousemove",
            "mouseout",
            "mouseover",
            "mouseup",
            "rightclick",
          ],
          i = 0;
        i < h.length;
        i++
      )
        !(function (a, b) {
          d[b] &&
            google.maps.event.addListener(a, b, function (a) {
              d[b].apply(this, [a]);
            });
        })(g, h[i]);
      return this.polygons.push(g), j.fire("polygon_added", g, this), g;
    }),
    (j.prototype.removePolygon = function (a) {
      for (var b = 0; b < this.polygons.length; b++)
        if (this.polygons[b] === a) {
          this.polygons[b].setMap(null),
            this.polygons.splice(b, 1),
            j.fire("polygon_removed", a, this);
          break;
        }
    }),
    (j.prototype.removePolygons = function () {
      for (var a, b = 0; (a = this.polygons[b]); b++) a.setMap(null);
      this.polygons = [];
    }),
    (j.prototype.getFromFusionTables = function (a) {
      var b = a.events;
      delete a.events;
      var c = a,
        d = new google.maps.FusionTablesLayer(c);
      for (var e in b)
        !(function (a, c) {
          google.maps.event.addListener(a, c, function (a) {
            b[c].apply(this, [a]);
          });
        })(d, e);
      return this.layers.push(d), d;
    }),
    (j.prototype.loadFromFusionTables = function (a) {
      var b = this.getFromFusionTables(a);
      return b.setMap(this.map), b;
    }),
    (j.prototype.getFromKML = function (a) {
      var b = a.url,
        c = a.events;
      delete a.url, delete a.events;
      var d = a,
        e = new google.maps.KmlLayer(b, d);
      for (var f in c)
        !(function (a, b) {
          google.maps.event.addListener(a, b, function (a) {
            c[b].apply(this, [a]);
          });
        })(e, f);
      return this.layers.push(e), e;
    }),
    (j.prototype.loadFromKML = function (a) {
      var b = this.getFromKML(a);
      return b.setMap(this.map), b;
    }),
    (j.prototype.addLayer = function (a, b) {
      b = b || {};
      var c;
      switch (a) {
        case "weather":
          this.singleLayers.weather = c =
            new google.maps.weather.WeatherLayer();
          break;
        case "clouds":
          this.singleLayers.clouds = c = new google.maps.weather.CloudLayer();
          break;
        case "traffic":
          this.singleLayers.traffic = c = new google.maps.TrafficLayer();
          break;
        case "transit":
          this.singleLayers.transit = c = new google.maps.TransitLayer();
          break;
        case "bicycling":
          this.singleLayers.bicycling = c = new google.maps.BicyclingLayer();
          break;
        case "panoramio":
          (this.singleLayers.panoramio = c =
            new google.maps.panoramio.PanoramioLayer()),
            c.setTag(b.filter),
            delete b.filter,
            b.click &&
              google.maps.event.addListener(c, "click", function (a) {
                b.click(a), delete b.click;
              });
          break;
        case "places":
          if (
            ((this.singleLayers.places = c =
              new google.maps.places.PlacesService(this.map)),
            b.search || b.nearbySearch || b.radarSearch)
          ) {
            var d = {
              bounds: b.bounds || null,
              keyword: b.keyword || null,
              location: b.location || null,
              name: b.name || null,
              radius: b.radius || null,
              rankBy: b.rankBy || null,
              types: b.types || null,
            };
            b.radarSearch && c.radarSearch(d, b.radarSearch),
              b.search && c.search(d, b.search),
              b.nearbySearch && c.nearbySearch(d, b.nearbySearch);
          }
          if (b.textSearch) {
            var e = {
              bounds: b.bounds || null,
              location: b.location || null,
              query: b.query || null,
              radius: b.radius || null,
            };
            c.textSearch(e, b.textSearch);
          }
      }
      return void 0 !== c
        ? ("function" == typeof c.setOptions && c.setOptions(b),
          "function" == typeof c.setMap && c.setMap(this.map),
          c)
        : void 0;
    }),
    (j.prototype.removeLayer = function (a) {
      if ("string" == typeof a && void 0 !== this.singleLayers[a])
        this.singleLayers[a].setMap(null), delete this.singleLayers[a];
      else
        for (var b = 0; b < this.layers.length; b++)
          if (this.layers[b] === a) {
            this.layers[b].setMap(null), this.layers.splice(b, 1);
            break;
          }
    });
  var k, l;
  return (
    (j.prototype.getRoutes = function (b) {
      switch (b.travelMode) {
        case "bicycling":
          k = google.maps.TravelMode.BICYCLING;
          break;
        case "transit":
          k = google.maps.TravelMode.TRANSIT;
          break;
        case "driving":
          k = google.maps.TravelMode.DRIVING;
          break;
        default:
          k = google.maps.TravelMode.WALKING;
      }
      l =
        "imperial" === b.unitSystem
          ? google.maps.UnitSystem.IMPERIAL
          : google.maps.UnitSystem.METRIC;
      var c = {
          avoidHighways: !1,
          avoidTolls: !1,
          optimizeWaypoints: !1,
          waypoints: [],
        },
        d = a(c, b);
      (d.origin = /string/.test(typeof b.origin)
        ? b.origin
        : new google.maps.LatLng(b.origin[0], b.origin[1])),
        (d.destination = /string/.test(typeof b.destination)
          ? b.destination
          : new google.maps.LatLng(b.destination[0], b.destination[1])),
        (d.travelMode = k),
        (d.unitSystem = l),
        delete d.callback,
        delete d.error;
      var e = [],
        f = new google.maps.DirectionsService();
      f.route(d, function (a, c) {
        if (c === google.maps.DirectionsStatus.OK) {
          for (var d in a.routes)
            a.routes.hasOwnProperty(d) && e.push(a.routes[d]);
          b.callback && b.callback(e, a, c);
        } else b.error && b.error(a, c);
      });
    }),
    (j.prototype.removeRoutes = function () {
      this.routes.length = 0;
    }),
    (j.prototype.getElevations = function (d) {
      (d = a({ locations: [], path: !1, samples: 256 }, d)),
        d.locations.length > 0 &&
          d.locations[0].length > 0 &&
          (d.locations = c(b([d.locations], f, !1)));
      var e = d.callback;
      delete d.callback;
      var g = new google.maps.ElevationService();
      if (d.path) {
        var h = { path: d.locations, samples: d.samples };
        g.getElevationAlongPath(h, function (a, b) {
          e && "function" == typeof e && e(a, b);
        });
      } else
        delete d.path,
          delete d.samples,
          g.getElevationForLocations(d, function (a, b) {
            e && "function" == typeof e && e(a, b);
          });
    }),
    (j.prototype.cleanRoute = j.prototype.removePolylines),
    (j.prototype.renderRoute = function (b, c) {
      var d,
        e =
          "string" == typeof c.panel
            ? document.getElementById(c.panel.replace("#", ""))
            : c.panel;
      (c.panel = e),
        (c = a({ map: this.map }, c)),
        (d = new google.maps.DirectionsRenderer(c)),
        this.getRoutes({
          origin: b.origin,
          destination: b.destination,
          travelMode: b.travelMode,
          waypoints: b.waypoints,
          unitSystem: b.unitSystem,
          error: b.error,
          avoidHighways: b.avoidHighways,
          avoidTolls: b.avoidTolls,
          optimizeWaypoints: b.optimizeWaypoints,
          callback: function (a, b, c) {
            c === google.maps.DirectionsStatus.OK && d.setDirections(b);
          },
        });
    }),
    (j.prototype.drawRoute = function (a) {
      var b = this;
      this.getRoutes({
        origin: a.origin,
        destination: a.destination,
        travelMode: a.travelMode,
        waypoints: a.waypoints,
        unitSystem: a.unitSystem,
        error: a.error,
        avoidHighways: a.avoidHighways,
        avoidTolls: a.avoidTolls,
        optimizeWaypoints: a.optimizeWaypoints,
        callback: function (c) {
          if (c.length > 0) {
            var d = {
              path: c[c.length - 1].overview_path,
              strokeColor: a.strokeColor,
              strokeOpacity: a.strokeOpacity,
              strokeWeight: a.strokeWeight,
            };
            a.hasOwnProperty("icons") && (d.icons = a.icons),
              b.drawPolyline(d),
              a.callback && a.callback(c[c.length - 1]);
          }
        },
      });
    }),
    (j.prototype.travelRoute = function (a) {
      if (a.origin && a.destination)
        this.getRoutes({
          origin: a.origin,
          destination: a.destination,
          travelMode: a.travelMode,
          waypoints: a.waypoints,
          unitSystem: a.unitSystem,
          error: a.error,
          callback: function (b) {
            if (
              (b.length > 0 && a.start && a.start(b[b.length - 1]),
              b.length > 0 && a.step)
            ) {
              var c = b[b.length - 1];
              if (c.legs.length > 0)
                for (var d, e = c.legs[0].steps, f = 0; (d = e[f]); f++)
                  (d.step_number = f), a.step(d, c.legs[0].steps.length - 1);
            }
            b.length > 0 && a.end && a.end(b[b.length - 1]);
          },
        });
      else if (a.route && a.route.legs.length > 0)
        for (var b, c = a.route.legs[0].steps, d = 0; (b = c[d]); d++)
          (b.step_number = d), a.step(b);
    }),
    (j.prototype.drawSteppedRoute = function (a) {
      var b = this;
      if (a.origin && a.destination)
        this.getRoutes({
          origin: a.origin,
          destination: a.destination,
          travelMode: a.travelMode,
          waypoints: a.waypoints,
          error: a.error,
          callback: function (c) {
            if (
              (c.length > 0 && a.start && a.start(c[c.length - 1]),
              c.length > 0 && a.step)
            ) {
              var d = c[c.length - 1];
              if (d.legs.length > 0)
                for (var e, f = d.legs[0].steps, g = 0; (e = f[g]); g++) {
                  e.step_number = g;
                  var h = {
                    path: e.path,
                    strokeColor: a.strokeColor,
                    strokeOpacity: a.strokeOpacity,
                    strokeWeight: a.strokeWeight,
                  };
                  a.hasOwnProperty("icons") && (h.icons = a.icons),
                    b.drawPolyline(h),
                    a.step(e, d.legs[0].steps.length - 1);
                }
            }
            c.length > 0 && a.end && a.end(c[c.length - 1]);
          },
        });
      else if (a.route && a.route.legs.length > 0)
        for (var c, d = a.route.legs[0].steps, e = 0; (c = d[e]); e++) {
          c.step_number = e;
          var f = {
            path: c.path,
            strokeColor: a.strokeColor,
            strokeOpacity: a.strokeOpacity,
            strokeWeight: a.strokeWeight,
          };
          a.hasOwnProperty("icons") && (f.icons = a.icons),
            b.drawPolyline(f),
            a.step(c);
        }
    }),
    (j.Route = function (a) {
      (this.origin = a.origin),
        (this.destination = a.destination),
        (this.waypoints = a.waypoints),
        (this.map = a.map),
        (this.route = a.route),
        (this.step_count = 0),
        (this.steps = this.route.legs[0].steps),
        (this.steps_length = this.steps.length);
      var b = {
        path: new google.maps.MVCArray(),
        strokeColor: a.strokeColor,
        strokeOpacity: a.strokeOpacity,
        strokeWeight: a.strokeWeight,
      };
      a.hasOwnProperty("icons") && (b.icons = a.icons),
        (this.polyline = this.map.drawPolyline(b).getPath());
    }),
    (j.Route.prototype.getRoute = function (a) {
      var b = this;
      this.map.getRoutes({
        origin: this.origin,
        destination: this.destination,
        travelMode: a.travelMode,
        waypoints: this.waypoints || [],
        error: a.error,
        callback: function () {
          (b.route = e[0]), a.callback && a.callback.call(b);
        },
      });
    }),
    (j.Route.prototype.back = function () {
      if (this.step_count > 0) {
        this.step_count--;
        var a = this.route.legs[0].steps[this.step_count].path;
        for (var b in a) a.hasOwnProperty(b) && this.polyline.pop();
      }
    }),
    (j.Route.prototype.forward = function () {
      if (this.step_count < this.steps_length) {
        var a = this.route.legs[0].steps[this.step_count].path;
        for (var b in a) a.hasOwnProperty(b) && this.polyline.push(a[b]);
        this.step_count++;
      }
    }),
    (j.prototype.checkGeofence = function (a, b, c) {
      return c.containsLatLng(new google.maps.LatLng(a, b));
    }),
    (j.prototype.checkMarkerGeofence = function (a, b) {
      if (a.fences)
        for (var c, d = 0; (c = a.fences[d]); d++) {
          var e = a.getPosition();
          this.checkGeofence(e.lat(), e.lng(), c) || b(a, c);
        }
    }),
    (j.prototype.toImage = function (a) {
      var a = a || {},
        b = {};
      if (
        ((b.size = a.size || [this.el.clientWidth, this.el.clientHeight]),
        (b.lat = this.getCenter().lat()),
        (b.lng = this.getCenter().lng()),
        this.markers.length > 0)
      ) {
        b.markers = [];
        for (var c = 0; c < this.markers.length; c++)
          b.markers.push({
            lat: this.markers[c].getPosition().lat(),
            lng: this.markers[c].getPosition().lng(),
          });
      }
      if (this.polylines.length > 0) {
        var d = this.polylines[0];
        (b.polyline = {}),
          (b.polyline.path = google.maps.geometry.encoding.encodePath(
            d.getPath()
          )),
          (b.polyline.strokeColor = d.strokeColor),
          (b.polyline.strokeOpacity = d.strokeOpacity),
          (b.polyline.strokeWeight = d.strokeWeight);
      }
      return j.staticMapURL(b);
    }),
    (j.staticMapURL = function (a) {
      function b(a, b) {
        if ("#" === a[0] && ((a = a.replace("#", "0x")), b)) {
          if (((b = parseFloat(b)), (b = Math.min(1, Math.max(b, 0))), 0 === b))
            return "0x00000000";
          (b = (255 * b).toString(16)),
            1 === b.length && (b += b),
            (a = a.slice(0, 8) + b);
        }
        return a;
      }
      var c,
        d = [],
        e =
          ("file:" === location.protocol ? "http:" : location.protocol) +
          "//maps.googleapis.com/maps/api/staticmap";
      a.url && ((e = a.url), delete a.url), (e += "?");
      var f = a.markers;
      delete a.markers, !f && a.marker && ((f = [a.marker]), delete a.marker);
      var g = a.styles;
      delete a.styles;
      var h = a.polyline;
      if ((delete a.polyline, a.center))
        d.push("center=" + a.center), delete a.center;
      else if (a.address) d.push("center=" + a.address), delete a.address;
      else if (a.lat)
        d.push(["center=", a.lat, ",", a.lng].join("")),
          delete a.lat,
          delete a.lng;
      else if (a.visible) {
        var i = encodeURI(a.visible.join("|"));
        d.push("visible=" + i);
      }
      var j = a.size;
      j ? (j.join && (j = j.join("x")), delete a.size) : (j = "630x300"),
        d.push("size=" + j),
        a.zoom || a.zoom === !1 || (a.zoom = 15);
      var k = a.hasOwnProperty("sensor") ? !!a.sensor : !0;
      delete a.sensor, d.push("sensor=" + k);
      for (var l in a) a.hasOwnProperty(l) && d.push(l + "=" + a[l]);
      if (f)
        for (var m, n, o = 0; (c = f[o]); o++) {
          (m = []),
            c.size && "normal" !== c.size
              ? (m.push("size:" + c.size), delete c.size)
              : c.icon && (m.push("icon:" + encodeURI(c.icon)), delete c.icon),
            c.color &&
              (m.push("color:" + c.color.replace("#", "0x")), delete c.color),
            c.label &&
              (m.push("label:" + c.label[0].toUpperCase()), delete c.label),
            (n = c.address ? c.address : c.lat + "," + c.lng),
            delete c.address,
            delete c.lat,
            delete c.lng;
          for (var l in c) c.hasOwnProperty(l) && m.push(l + ":" + c[l]);
          m.length || 0 === o
            ? (m.push(n), (m = m.join("|")), d.push("markers=" + encodeURI(m)))
            : ((m = d.pop() + encodeURI("|" + n)), d.push(m));
        }
      if (g)
        for (var o = 0; o < g.length; o++) {
          var p = [];
          g[o].featureType &&
            p.push("feature:" + g[o].featureType.toLowerCase()),
            g[o].elementType &&
              p.push("element:" + g[o].elementType.toLowerCase());
          for (var q = 0; q < g[o].stylers.length; q++)
            for (var r in g[o].stylers[q]) {
              var s = g[o].stylers[q][r];
              ("hue" == r || "color" == r) && (s = "0x" + s.substring(1)),
                p.push(r + ":" + s);
            }
          var t = p.join("|");
          "" != t && d.push("style=" + t);
        }
      if (h) {
        if (
          ((c = h),
          (h = []),
          c.strokeWeight && h.push("weight:" + parseInt(c.strokeWeight, 10)),
          c.strokeColor)
        ) {
          var u = b(c.strokeColor, c.strokeOpacity);
          h.push("color:" + u);
        }
        if (c.fillColor) {
          var v = b(c.fillColor, c.fillOpacity);
          h.push("fillcolor:" + v);
        }
        var w = c.path;
        if (w.join) for (var x, q = 0; (x = w[q]); q++) h.push(x.join(","));
        else h.push("enc:" + w);
        (h = h.join("|")), d.push("path=" + encodeURI(h));
      }
      var y = window.devicePixelRatio || 1;
      return d.push("scale=" + y), (d = d.join("&")), e + d;
    }),
    (j.prototype.addMapType = function (a, b) {
      if (!b.hasOwnProperty("getTileUrl") || "function" != typeof b.getTileUrl)
        throw "'getTileUrl' function required.";
      b.tileSize = b.tileSize || new google.maps.Size(256, 256);
      var c = new google.maps.ImageMapType(b);
      this.map.mapTypes.set(a, c);
    }),
    (j.prototype.addOverlayMapType = function (a) {
      if (!a.hasOwnProperty("getTile") || "function" != typeof a.getTile)
        throw "'getTile' function required.";
      var b = a.index;
      delete a.index, this.map.overlayMapTypes.insertAt(b, a);
    }),
    (j.prototype.removeOverlayMapType = function (a) {
      this.map.overlayMapTypes.removeAt(a);
    }),
    (j.prototype.addStyle = function (a) {
      var b = new google.maps.StyledMapType(a.styles, {
        name: a.styledMapName,
      });
      this.map.mapTypes.set(a.mapTypeId, b);
    }),
    (j.prototype.setStyle = function (a) {
      this.map.setMapTypeId(a);
    }),
    (j.prototype.createPanorama = function (a) {
      return (
        (a.hasOwnProperty("lat") && a.hasOwnProperty("lng")) ||
          ((a.lat = this.getCenter().lat()), (a.lng = this.getCenter().lng())),
        (this.panorama = j.createPanorama(a)),
        this.map.setStreetView(this.panorama),
        this.panorama
      );
    }),
    (j.createPanorama = function (b) {
      var c = h(b.el, b.context);
      (b.position = new google.maps.LatLng(b.lat, b.lng)),
        delete b.el,
        delete b.context,
        delete b.lat,
        delete b.lng;
      for (
        var d = [
            "closeclick",
            "links_changed",
            "pano_changed",
            "position_changed",
            "pov_changed",
            "resize",
            "visible_changed",
          ],
          e = a({ visible: !0 }, b),
          f = 0;
        f < d.length;
        f++
      )
        delete e[d[f]];
      for (
        var g = new google.maps.StreetViewPanorama(c, e), f = 0;
        f < d.length;
        f++
      )
        !(function (a, c) {
          b[c] &&
            google.maps.event.addListener(a, c, function () {
              b[c].apply(this);
            });
        })(g, d[f]);
      return g;
    }),
    (j.prototype.on = function (a, b) {
      return j.on(a, this, b);
    }),
    (j.prototype.off = function (a) {
      j.off(a, this);
    }),
    (j.prototype.once = function (a, b) {
      return j.once(a, this, b);
    }),
    (j.custom_events = [
      "marker_added",
      "marker_removed",
      "polyline_added",
      "polyline_removed",
      "polygon_added",
      "polygon_removed",
      "geolocated",
      "geolocation_failed",
    ]),
    (j.on = function (a, b, c) {
      if (-1 == j.custom_events.indexOf(a))
        return (
          b instanceof j && (b = b.map), google.maps.event.addListener(b, a, c)
        );
      var d = { handler: c, eventName: a };
      return (
        (b.registered_events[a] = b.registered_events[a] || []),
        b.registered_events[a].push(d),
        d
      );
    }),
    (j.off = function (a, b) {
      -1 == j.custom_events.indexOf(a)
        ? (b instanceof j && (b = b.map),
          google.maps.event.clearListeners(b, a))
        : (b.registered_events[a] = []);
    }),
    (j.once = function (a, b, c) {
      return -1 == j.custom_events.indexOf(a)
        ? (b instanceof j && (b = b.map),
          google.maps.event.addListenerOnce(b, a, c))
        : void 0;
    }),
    (j.fire = function (a, b, c) {
      if (-1 == j.custom_events.indexOf(a))
        google.maps.event.trigger(
          b,
          a,
          Array.prototype.slice.apply(arguments).slice(2)
        );
      else if (a in c.registered_events)
        for (var d = c.registered_events[a], e = 0; e < d.length; e++)
          !(function (a, b, c) {
            a.apply(b, [c]);
          })(d[e].handler, c, b);
    }),
    (j.geolocate = function (a) {
      var b = a.always || a.complete;
      navigator.geolocation
        ? navigator.geolocation.getCurrentPosition(
            function (c) {
              a.success(c), b && b();
            },
            function (c) {
              a.error(c), b && b();
            },
            a.options
          )
        : (a.not_supported(), b && b());
    }),
    (j.geocode = function (a) {
      this.geocoder = new google.maps.Geocoder();
      var b = a.callback;
      a.hasOwnProperty("lat") &&
        a.hasOwnProperty("lng") &&
        (a.latLng = new google.maps.LatLng(a.lat, a.lng)),
        delete a.lat,
        delete a.lng,
        delete a.callback,
        this.geocoder.geocode(a, function (a, c) {
          b(a, c);
        });
    }),
    "object" == typeof window.google &&
      window.google.maps &&
      (google.maps.Polygon.prototype.getBounds ||
        (google.maps.Polygon.prototype.getBounds = function (a) {
          for (
            var b,
              c = new google.maps.LatLngBounds(),
              d = this.getPaths(),
              e = 0;
            e < d.getLength();
            e++
          ) {
            b = d.getAt(e);
            for (var f = 0; f < b.getLength(); f++) c.extend(b.getAt(f));
          }
          return c;
        }),
      google.maps.Polygon.prototype.containsLatLng ||
        (google.maps.Polygon.prototype.containsLatLng = function (a) {
          var b = this.getBounds();
          if (null !== b && !b.contains(a)) return !1;
          for (var c = !1, d = this.getPaths().getLength(), e = 0; d > e; e++)
            for (
              var f = this.getPaths().getAt(e),
                g = f.getLength(),
                h = g - 1,
                i = 0;
              g > i;
              i++
            ) {
              var j = f.getAt(i),
                k = f.getAt(h);
              ((j.lng() < a.lng() && k.lng() >= a.lng()) ||
                (k.lng() < a.lng() && j.lng() >= a.lng())) &&
                j.lat() +
                  ((a.lng() - j.lng()) / (k.lng() - j.lng())) *
                    (k.lat() - j.lat()) <
                  a.lat() &&
                (c = !c),
                (h = i);
            }
          return c;
        }),
      google.maps.Circle.prototype.containsLatLng ||
        (google.maps.Circle.prototype.containsLatLng = function (a) {
          return google.maps.geometry
            ? google.maps.geometry.spherical.computeDistanceBetween(
                this.getCenter(),
                a
              ) <= this.getRadius()
            : !0;
        }),
      (google.maps.Rectangle.prototype.containsLatLng = function (a) {
        return this.getBounds().contains(a);
      }),
      (google.maps.LatLngBounds.prototype.containsLatLng = function (a) {
        return this.contains(a);
      }),
      (google.maps.Marker.prototype.setFences = function (a) {
        this.fences = a;
      }),
      (google.maps.Marker.prototype.addFence = function (a) {
        this.fences.push(a);
      }),
      (google.maps.Marker.prototype.getId = function () {
        return this.__gm_id;
      })),
    Array.prototype.indexOf ||
      (Array.prototype.indexOf = function (a) {
        if (null == this) throw new TypeError();
        var b = Object(this),
          c = b.length >>> 0;
        if (0 === c) return -1;
        var d = 0;
        if (
          (arguments.length > 1 &&
            ((d = Number(arguments[1])),
            d != d
              ? (d = 0)
              : 0 != d &&
                d != 1 / 0 &&
                d != -(1 / 0) &&
                (d = (d > 0 || -1) * Math.floor(Math.abs(d)))),
          d >= c)
        )
          return -1;
        for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); c > e; e++)
          if (e in b && b[e] === a) return e;
        return -1;
      }),
    j
  );
});
//# sourceMappingURL=gmaps.min.js.map
(function ($) {
  "use strict";

  var nav_offset_top = $("header").height() + 50;
  /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

  //* Navbar Fixed
  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header_area").addClass("navbar_fixed");
        } else {
          $(".header_area").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();

  /*----------------------------------------------------*/
  /*  MailChimp Slider
    /*----------------------------------------------------*/
  function mailChimp() {
    $("#mc_embed_signup").find("form").ajaxChimp();
  }
  mailChimp();

  $("select").niceSelect();
  /* ---------------------------------------------
            Isotope js Starts
         --------------------------------------------- */
  $(window).on("load", function () {
    $(".portfolio-filter ul li").on("click", function () {
      $(".portfolio-filter ul li").removeClass("active");
      $(this).addClass("active");

      var data = $(this).attr("data-filter");
      $workGrid.isotope({
        filter: data,
      });
    });

    if (document.getElementById("portfolio")) {
      var $workGrid = $(".portfolio-grid").isotope({
        itemSelector: ".all",
        percentPosition: true,
        masonry: {
          columnWidth: ".all",
        },
      });
    }
  });

  /*----------------------------------------------------*/
  /* Start Magnific Pop Up
	/*----------------------------------------------------*/
  if ($(".img-gal").length > 0) {
    $(".img-gal").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  }
  /*----------------------------------------------------*/
  /*  End  Magnific Pop Up
	/*----------------------------------------------------*/

  /*----------------------------------------------------*/
  /*  Testimonials Slider
    /*----------------------------------------------------*/
  function testimonials_slider() {
    if ($(".testi_slider").length) {
      $(".testi_slider").owlCarousel({
        loop: true,
        margin: 30,
        items: 2,
        autoplay: true,
        smartSpeed: 2500,
        dots: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
          },
          991: {
            items: 2,
          },
        },
      });
    }
  }
  testimonials_slider();

  /*----------------------------------------------------*/
  /*  Google map js
    /*----------------------------------------------------*/

  if ($("#mapBox").length) {
    var $lat = $("#mapBox").data("lat");
    var $lon = $("#mapBox").data("lon");
    var $zoom = $("#mapBox").data("zoom");
    var $marker = $("#mapBox").data("marker");
    var $info = $("#mapBox").data("info");
    var $markerLat = $("#mapBox").data("mlat");
    var $markerLon = $("#mapBox").data("mlon");
    var map = new GMaps({
      el: "#mapBox",
      lat: $lat,
      lng: $lon,
      scrollwheel: false,
      scaleControl: true,
      streetViewControl: false,
      panControl: true,
      disableDoubleClickZoom: true,
      mapTypeControl: false,
      zoom: $zoom,
      styles: [
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#dcdfe6",
            },
          ],
        },
        {
          featureType: "transit",
          stylers: [
            {
              color: "#808080",
            },
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#dcdfe6",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#ffffff",
            },
            {
              weight: 1.8,
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#d7d7d7",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#ebebeb",
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [
            {
              color: "#a7a7a7",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff",
            },
          ],
        },
        {
          featureType: "landscape",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#efefef",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#696969",
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#737373",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#d6d6d6",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {},
        {
          featureType: "poi",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#dadada",
            },
          ],
        },
      ],
    });
  }
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  const filterItems = document.querySelectorAll(".portfolio-filter li");
  const projects = document.querySelectorAll(".project-card");

  filterItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove active class dari semua item
      filterItems.forEach((el) => el.classList.remove("active"));
      // Tambahkan active ke item yang diklik
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");

      projects.forEach((project) => {
        // Tampilkan semua jika filter all
        if (filterValue === "*") {
          project.style.display = "block";
        } else {
          // Cek apakah project memiliki class sesuai filter
          if (project.classList.contains(filterValue)) {
            project.style.display = "block";
          } else {
            project.style.display = "none";
          }
        }
      });
    });
  });
});
