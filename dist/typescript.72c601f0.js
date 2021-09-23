// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"ejercicios/typescript/index.ts":[function(require,module,exports) {
console.log("hello Typescript"); // type boolean

var muted = false;
muted = true; // type number

var age = 6;
var numerador = 42;
var denominador = age;
var result = numerador / denominador; // type string

var nombre = "Jhonny";
var saludo = "me llamo " + nombre; // arreglos

var person = new Array();
person = ['Juan', 'John', 'Maria', 'Isabel'];
person.push(nombre);
var peopleNumbers = new Array();
peopleNumbers.push(nombre);
peopleNumbers.push(age);
peopleNumbers.push(1234);
peopleNumbers.push("maria"); // Enum

var Color;

(function (Color) {
  Color["red"] = "rojo";
  Color["green"] = "verde";
  Color["blue"] = "azul";
  Color["yellow"] = "amarillo";
})(Color || (Color = {}));

var colorFibory = Color.blue; // console.log(`my color fabory is ${colorFibory}`);
// any

var comodin = "Johker";
comodin = {
  type: 'salterio'
};

function add(a, b) {
  return a + b;
}

function saludar(nombre) {
  console.log("hi, Me llamo " + nombre);
} // saludar("Juan");
// cadena de Numbers


var cadena = [3, 2, "3", 4, 5];
var valores = ["1", "2", "3", "4", "34"];
var fail;

(function (fail) {
  fail[fail["salida"] = 0] = "salida";
  fail[fail["entrada"] = 1] = "entrada";
})(fail || (fail = {})); // repaso typescript
// boolean 


var muteado = true;
muteado = false; // number 

var valor = 23;
var num1 = 23;
var fana = num1 / valor; // type string

var palabra = "palabra";
palabra = "2345"; // Array 

var frutas = new Array();
frutas.push("manzana");
frutas.push("pera");
frutas.push("naranja");
frutas.push("lima");
var numerosa = new Array();
numerosa.push(23);
numerosa.push(23);
numerosa.push(90);
numerosa.push(98);
numerosa.push(56);
numerosa.push(34); // multiples tipos de datos

var duoArray = new Array();
duoArray.push(345);
duoArray.push("letras");
duoArray.push(345);
duoArray.push("fana"); // console.log(duoArray);
//enum

var lados;

(function (lados) {
  lados["Arriba"] = "up";
  lados["Abajo"] = "down";
  lados["Izquierda"] = "left";
  lados["Derecha"] = "right";
})(lados || (lados = {}));

var ladoElejido = lados.Arriba; // console.log(`el lado es: ${ladoElejido}`)

var listaPersonas;

(function (listaPersonas) {
  listaPersonas["first"] = "Raquel";
  listaPersonas["second"] = "Monica";
  listaPersonas["three"] = "Tereza";
  listaPersonas["four"] = "Felipe";
})(listaPersonas || (listaPersonas = {}));

var perosnElegida = listaPersonas.second; // console.log(`El nombre es: ${perosnElegida}`);
// variable comodin any

var cualquierType = "comodin";
cualquierType = {
  key: "value"
}; // type objeto

var objeto = {
  key: 345,
  value: "value"
}; //tuple listaPersonas

var x;
x = [23, "value"]; // console.log(x[1])
// function

function suma(a, b) {
  return a + b;
}

var val = suma(23, 12); // create add function

function createAdd(b) {
  return function (a) {
    return a + b;
  };
}

var fourSum = createAdd(34);
var fiveSum = fourSum(5); // console.log(fiveSum); 
// parameter optional

function fullName(name, lastName) {
  if (lastName === void 0) {
    lastName = "Smith";
  }

  return name + " " + lastName;
}

var carlos = fullName("Carlos"); // console.log(carlos);
// repaso function typescript
// function

function sumarNumber(a, b) {
  return a + b;
}

var valorSumado = sumarNumber(23, 23); // creatdor de sumas

function creadorDeSumas(a) {
  return function (b) {
    return a + b;
  };
}

var sumarCuatro = creadorDeSumas(4);
var sumarAdemasSix = sumarCuatro(6); // parametros opcionales or por defecto

function nombreCompleto(name, lastName) {
  if (lastName === void 0) {
    lastName = "Villagran";
  }

  return name + " " + lastName;
}

var nameFull = nombreCompleto("Carlos"); // console.log(nameFull);
// interfaces.

var Colorcillo;

(function (Colorcillo) {
  Colorcillo["red"] = "red";
  Colorcillo["green"] = "green";
  Colorcillo["yellow"] = "yellow";
})(Colorcillo || (Colorcillo = {}));

var rect = {
  width: 12,
  height: 20 //color: Colorcillo.yellow

};

function AreaRectangulo(r) {
  return r.width * r.height;
}

console.log(AreaRectangulo(rect));

rect.toString = function () {
  return this.color ? "Un rectangulo de color " + this.color : "Un rectangullo";
};

console.log(rect.toString());
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60214" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","ejercicios/typescript/index.ts"], null)
//# sourceMappingURL=/typescript.72c601f0.js.map